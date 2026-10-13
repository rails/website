import { aggregate } from './benchmark.js';
import { createFilters } from './filters.js';
import { createTable } from './table.js';
import { createChart } from './chart.js';
import { createDialog } from './dialog.js';
import { createHelp } from './help.js';

const root = document.querySelector('.ai__models');
const data = JSON.parse(document.getElementById('ai-benchmark-data').textContent);
const config = JSON.parse(document.getElementById('ai-benchmark-config').textContent);
const vendors = new Map(data.vendors.map((vendor) => [vendor.id, vendor]));
const table = createTable(root, vendors, config.thresholds);
const chart = createChart(root, vendors);
const dialog = createDialog(
  document.querySelector('[data-eval-dialog]'),
  vendors,
  config.task_types,
  config.thresholds
);
const help = createHelp(root.querySelector('[data-task-help]'));
const filters = createFilters(root, config.task_types, renderSelection);
let selection;

// Components receive the same computed selection. Only this entry point
// coordinates data between the controls, results, and model details.
function renderSelection(types) {
  selection = aggregate(data, types);
  table.render(selection.models);
  chart.render(selection.models);
}

root.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-eval-details]');
  if (!trigger) return;
  const item = selection.models.find((item) => item.model.id === trigger.dataset.modelId);
  if (!item) return;
  help.close();
  dialog.open(item, filters.label, trigger);
});

renderSelection(filters.selectedTypes);
