import { appendText } from './dom.js';
import {
  formatCost,
  formatDuration,
  formatInteger,
  formatPercentage,
  scoreClass,
  scoreThresholds
} from './format.js';

const columns = ['Task', 'Task type', 'Score', 'Runs', 'Time/run', 'Tokens/run', 'Cost/run'];

export function createDialog(dialog, vendors, taskTypes, percentiles) {
  const modelLabel = dialog.querySelector('[data-eval-dialog-model]');
  const title = dialog.querySelector('[data-eval-dialog-title]');
  const summary = dialog.querySelector('[data-eval-dialog-summary]');
  const results = dialog.querySelector('[data-eval-dialog-results]');
  const labels = new Map(taskTypes.map((type) => [type.id, type.label]));
  let lastTrigger;
  // Explicit roles keep table semantics when CSS changes the display on smaller screens.
  const head = document.createElement('tr');
  head.setAttribute('role', 'row');
  for (const label of columns) {
    const cell = appendText(head, 'th', label);
    cell.scope = 'col';
    cell.setAttribute('role', 'columnheader');
  }
  dialog.querySelector('[data-eval-dialog-head]').replaceChildren(head);

  function resultRow({ task, metrics }) {
    const thresholds = {
      accuracy: scoreThresholds(
        'accuracy',
        Object.values(task.results).map((result) => result.score * 100),
        percentiles.accuracy
      )
    };
    const row = document.createElement('tr');
    row.setAttribute('role', 'row');
    row.dataset.taskId = task.id;
    const taskCell = document.createElement('th');
    taskCell.scope = 'row';
    taskCell.setAttribute('role', 'rowheader');
    let parent = taskCell;
    if (task.url) {
      parent = appendText(taskCell, 'a', '');
      Object.assign(parent, { href: task.url, target: '_blank', rel: 'noopener' });
    }
    appendText(parent, 'strong', task.id);
    appendText(taskCell, 'span', task.description);
    row.append(taskCell);
    appendText(row, 'td', labels.get(task.type));
    const score = appendText(row, 'td', '');
    appendText(
      score,
      'span',
      formatPercentage(metrics.score * 100),
      `ai__score ${scoreClass(thresholds, 'accuracy', metrics.score * 100)}`
    );
    appendText(row, 'td', metrics.runCount);
    appendText(row, 'td', formatDuration(metrics.duration));
    appendText(row, 'td', formatInteger(metrics.tokensPerRun));
    appendText(row, 'td', formatCost(metrics.costPerRun));
    [...row.querySelectorAll('td')].forEach((cell, index) => {
      cell.setAttribute('role', 'cell');
      cell.dataset.label = columns[index + 1];
    });
    return row;
  }

  function open(item, label, trigger) {
    const { model } = item;
    lastTrigger = trigger;
    modelLabel.textContent = `${model.name} · ${model.effort} effort · ${vendors.get(model.vendor_id).name}`;
    title.textContent = label;
    summary.textContent = [
      `${item.taskCount} tasks`,
      `${item.runCount} runs`,
      `${formatPercentage(item.accuracy)} mean task score`,
      `${formatDuration(item.duration)} mean task time`,
      `${formatInteger(item.tokensPerRun)} mean tokens per run`,
      item.costPerRun == null
        ? 'cost unavailable'
        : `${formatCost(item.costPerRun)} mean cost per run`
    ].join(' · ');
    results.replaceChildren(...item.summaries.map(resultRow));
    document.body.classList.add('ai-dialog-open');
    dialog.showModal();
  }

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('ai-dialog-open');
    if (lastTrigger?.isConnected) lastTrigger.focus();
  });

  return { open };
}
