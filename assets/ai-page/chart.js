import { appendText } from './dom.js';
import { formatCost, formatDuration, formatInteger, formatPercentage } from './format.js';
import { placePoints, positionLabels } from './chart-layout.js';

const views = {
  cost: {
    title: 'Accuracy vs. cost',
    description:
      'Models toward the top-right earn higher task scores at a lower cost. Cost uses a logarithmic scale.',
    xLabel: 'Mean cost per run',
    xLegend: 'Further right costs less',
    property: 'costPerRun',
    format: formatCost,
    padding: (min, max) => [Math.log10(min * 0.75), Math.log10(max * 1.25)],
    transform: Math.log10,
    inverse: (value) => 10 ** value
  },
  speed: {
    title: 'Accuracy vs. completion time',
    description: 'Models toward the top-right earn higher task scores and finish faster.',
    xLabel: 'Mean task time',
    xLegend: 'Further right finishes faster',
    property: 'duration',
    format: formatDuration,
    padding: (min, max) => [Math.floor((min * 0.9) / 10) * 10, Math.ceil((max * 1.1) / 10) * 10]
  },
  tokens: {
    title: 'Accuracy vs. token efficiency',
    description: 'Models toward the top-right earn higher task scores with fewer tokens.',
    xLabel: 'Mean tokens per run',
    xLegend: 'Further right uses fewer tokens',
    property: 'tokensPerRun',
    format: (value) =>
      value >= 1000000 ? `${Math.round(value / 100000) / 10}m` : `${Math.round(value / 1000)}k`,
    padding: (min, max) => [
      Math.floor((min * 0.92) / 1000) * 1000,
      Math.ceil((max * 1.06) / 1000) * 1000
    ]
  }
};

export function createChart(root, vendors) {
  const plot = root.querySelector('[data-benchmark-plot]');
  const points = plot.querySelector('[data-benchmark-points]');
  const xTicks = plot.querySelector('[data-benchmark-x-ticks]');
  const yTicks = plot.querySelector('[data-benchmark-y-ticks]');
  const title = root.querySelector('[data-benchmark-title]');
  const description = root.querySelector('[data-benchmark-description]');
  const xLabel = root.querySelector('[data-benchmark-x-label]');
  const xLegend = root.querySelector('[data-benchmark-x-legend]');
  const buttons = [...root.querySelectorAll('[data-benchmark-metric]')];
  const empty = appendText(plot, 'p', '', 'ai__benchmark-chart__empty');
  empty.dataset.chartEmpty = '';
  let models = [];
  let metric = 'cost';
  let resizeTimer;

  function renderAxes(view, chartModels) {
    const values = chartModels.map((item) => item[view.property]);
    const [xMinimum, paddedMaximum] = view.padding(Math.min(...values), Math.max(...values));
    const xMaximum = paddedMaximum === xMinimum ? xMinimum + 1 : paddedMaximum;
    const accuracies = chartModels.map((item) => item.accuracy);
    const yMinimum = Math.max(0, Math.floor((Math.min(...accuracies) - 5) / 5) * 5);
    const yMaximum = Math.min(100, Math.ceil((Math.max(...accuracies) + 5) / 5) * 5);
    const transform = view.transform || ((value) => value);
    const inverse = view.inverse || ((value) => value);
    for (let index = 0; index < 5; index += 1) {
      const ratio = index / 4;
      const x = inverse(xMaximum - (xMaximum - xMinimum) * ratio);
      const y = yMaximum - (yMaximum - yMinimum) * ratio;
      appendText(xTicks, 'span', view.format(x)).style.left = `${ratio * 100}%`;
      appendText(yTicks, 'span', `${Math.round(y)}%`).style.top = `${ratio * 100}%`;
    }
    return (item) => ({
      x: ((xMaximum - transform(item[view.property])) / (xMaximum - xMinimum)) * plot.clientWidth,
      y: ((yMaximum - item.accuracy) / (yMaximum - yMinimum)) * plot.clientHeight
    });
  }

  function connector(from, to, effort = false) {
    const link = document.createElement('span');
    link.className = `ai__benchmark-point-connector${effort ? ' ai__benchmark-point-connector--effort' : ''}`;
    Object.assign(link.style, {
      left: `${from.x}px`,
      top: `${from.y}px`,
      width: `${Math.hypot(to.x - from.x, to.y - from.y)}px`,
      transform: `rotate(${Math.atan2(to.y - from.y, to.x - from.x)}rad)`
    });
    points.append(link);
  }

  function renderPoint({ item, origin, position }, showEffort) {
    if (Math.hypot(position.x - origin.x, position.y - origin.y) > 2) connector(origin, position);
    const point = document.createElement('button');
    point.type = 'button';
    point.className = 'ai__benchmark-point ai__benchmark-point--label-above';
    point.dataset.evalDetails = '';
    point.dataset.modelId = item.model.id;
    Object.assign(point.style, {
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '28px',
      height: '28px'
    });
    point.setAttribute(
      'aria-label',
      [
        `${item.model.name} at ${item.model.effort} effort: ${formatPercentage(item.accuracy)} accuracy`,
        `${formatInteger(item.tokensPerRun)} mean tokens per run`,
        `${formatDuration(item.duration)} mean task time`,
        item.costPerRun == null
          ? 'cost unavailable'
          : `${formatCost(item.costPerRun)} mean cost per run`
      ].join(', ')
    );
    const logo = document.createElement('img');
    Object.assign(logo, { src: vendors.get(item.model.vendor_id).logo, alt: '' });
    point.append(logo);
    const label = appendText(point, 'span', item.model.name);
    if (showEffort) appendText(label, 'small', item.model.effort);
    points.append(point);
    return point;
  }

  function draw() {
    const view = { ...views[metric] };
    const chartModels = models.filter((item) => item[view.property] != null);
    if (metric === 'cost' && chartModels.some((item) => item.costPerRun === 0)) {
      Object.assign(view, {
        transform: null,
        inverse: null,
        padding: (min, max) => [0, Math.max(0.01, max * 1.25)],
        description:
          'Models toward the top-right earn higher task scores at a lower cost. Cost uses a linear scale when a result is free.'
      });
    }
    title.textContent = view.title;
    description.textContent = view.description;
    xLabel.textContent = view.xLabel;
    xLegend.textContent = view.xLegend;
    points.replaceChildren();
    xTicks.replaceChildren();
    yTicks.replaceChildren();
    empty.hidden = chartModels.length > 0;
    empty.textContent = 'No priced results for this selection.';
    plot.setAttribute('aria-label', `Model accuracy compared with ${view.xLabel.toLowerCase()}`);
    if (!chartModels.length) return;

    const coordinates = renderAxes(view, chartModels);
    const efforts = new Map();
    for (const item of chartModels) {
      if (!efforts.has(item.model.name)) efforts.set(item.model.name, []);
      efforts.get(item.model.name).push(item);
    }
    for (const models of efforts.values()) {
      for (let index = 1; index < models.length; index += 1) {
        connector(coordinates(models[index - 1]), coordinates(models[index]), true);
      }
    }
    const placed = placePoints(chartModels, coordinates, plot.clientWidth, plot.clientHeight);
    const markers = placed.map((point) =>
      renderPoint(point, efforts.get(point.item.model.name).length > 1)
    );
    positionLabels(plot, markers);
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      metric = button.dataset.benchmarkMetric;
      for (const candidate of buttons)
        candidate.setAttribute('aria-pressed', String(candidate === button));
      draw();
    });
  }
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(draw, 150);
  });

  return {
    render(results) {
      models = results;
      draw();
    }
  };
}
