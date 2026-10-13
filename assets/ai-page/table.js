import { appendText } from './dom.js';
import {
  formatCost,
  formatDuration,
  formatInteger,
  formatPercentage,
  scoreClass,
  scoreThresholds
} from './format.js';

const columns = [
  { key: 'accuracy', property: 'accuracy', format: formatPercentage },
  { key: 'speed', property: 'duration', format: formatDuration },
  { key: 'tokens', property: 'tokensPerRun', format: formatInteger },
  { key: 'cost', property: 'costPerRun', format: formatCost }
];

export function sortModels(models, key, direction) {
  const property = columns.find((column) => column.key === key)?.property;
  const value = (item) => (key === 'model' ? item.model.name.toLowerCase() : item[property]);
  return models.slice().sort((a, b) => {
    const av = value(a);
    const bv = value(b);
    // Unpriced results follow measured results in either direction.
    if (av == null && bv != null) return 1;
    if (bv == null && av != null) return -1;
    if (av != null && bv != null && av !== bv)
      return (av < bv ? -1 : 1) * (direction === 'asc' ? 1 : -1);
    if (key === 'accuracy' && a.tokensPerRun !== b.tokensPerRun)
      return a.tokensPerRun - b.tokensPerRun;
    return a.model.name.localeCompare(b.model.name) || a.model.id.localeCompare(b.model.id);
  });
}

export function createTable(root, vendors, percentiles) {
  const table = root.querySelector('[data-sortable-table]');
  const tbody = table.querySelector('[data-benchmark-results]');
  const headers = [...table.querySelectorAll('thead th')];
  let models = [];
  let sortKey = 'accuracy';
  let sortDirection = 'desc';

  function detailsButton(parent, model, text, className, label) {
    const button = appendText(parent, 'button', text, className);
    button.type = 'button';
    button.dataset.evalDetails = '';
    button.dataset.modelId = model.id;
    button.setAttribute('aria-label', `View ${model.name} at ${model.effort} effort: ${label}`);
    return button;
  }

  function modelRow(item, thresholds) {
    const { model } = item;
    const row = document.createElement('tr');
    row.dataset.model = model.name;
    row.dataset.modelId = model.id;
    const modelCell = document.createElement('th');
    modelCell.scope = 'row';
    const button = detailsButton(
      modelCell,
      model,
      '',
      'ai__model ai__model--button',
      'evaluation details'
    );
    const vendor = vendors.get(model.vendor_id);
    const logo = document.createElement('img');
    Object.assign(logo, { src: vendor.logo, alt: vendor.name, width: 24, height: 24 });
    button.append(logo);
    appendText(button, 'span', model.name);
    appendText(button, 'span', model.effort, 'ai__model__effort');
    row.append(modelCell);
    for (const column of columns) {
      const value = item[column.property];
      const text = column.format(value);
      const cell = appendText(row, 'td', '');
      cell.dataset.sortColumn = column.key;
      cell.dataset.sortValue = value ?? '';
      const className = `ai__score ai__score--button ${scoreClass(thresholds, column.key, value)}`;
      detailsButton(cell, model, text, className, `${column.key} ${text} details`);
    }
    return row;
  }

  function render() {
    const thresholds = Object.fromEntries(
      columns.map(({ key, property }) => [
        key,
        scoreThresholds(
          key,
          models.map((item) => item[property]),
          percentiles[key]
        )
      ])
    );
    tbody.replaceChildren(
      ...sortModels(models, sortKey, sortDirection).map((item) => modelRow(item, thresholds))
    );
    for (const header of headers) header.removeAttribute('aria-sort');
    table
      .querySelector(`[data-sort-key="${sortKey}"]`)
      .closest('th')
      .setAttribute('aria-sort', sortDirection === 'asc' ? 'ascending' : 'descending');
  }

  for (const button of table.querySelectorAll('[data-sort-key]')) {
    button.addEventListener('click', () => {
      const key = button.dataset.sortKey;
      sortDirection =
        sortKey === key
          ? sortDirection === 'asc'
            ? 'desc'
            : 'asc'
          : key === 'accuracy'
            ? 'desc'
            : 'asc';
      sortKey = key;
      render();
    });
  }
  return {
    render(results) {
      models = results;
      render();
    }
  };
}
