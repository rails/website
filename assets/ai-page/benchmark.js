// The export contains run averages for each task. Every selected task has equal weight.
function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function aggregate(data, types) {
  const tasks = data.tasks.filter((task) => types.includes(task.type));
  // Every model has at least one run for every task in the corpus.
  const models = data.models.map((model) => {
    const summaries = tasks.map((task) => {
      const result = task.results[model.id];
      return {
        task,
        metrics: {
          score: result.score,
          duration: result.duration_seconds,
          tokensPerRun: result.tokens,
          costPerRun: result.cost_usd,
          runCount: result.run_count
        }
      };
    });
    const metrics = summaries.map((summary) => summary.metrics);
    return {
      model,
      summaries,
      taskCount: summaries.length,
      runCount: metrics.reduce((sum, metric) => sum + metric.runCount, 0),
      accuracy: 100 * mean(metrics.map((metric) => metric.score)),
      duration: mean(metrics.map((metric) => metric.duration)),
      tokensPerRun: mean(metrics.map((metric) => metric.tokensPerRun)),
      costPerRun: metrics.every((metric) => metric.costPerRun != null)
        ? mean(metrics.map((metric) => metric.costPerRun))
        : null
    };
  });
  return { tasks, models };
}
