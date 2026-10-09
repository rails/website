const integer = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const currencies = [2, 3].map(
  (digits) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    })
);

export const formatInteger = (value) => integer.format(value);
export const formatPercentage = (value) => `${value.toFixed(1)}%`;

export function formatDuration(value) {
  const seconds = Math.round(value);
  return seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

export function formatCost(value) {
  if (value == null) return '—';
  return currencies[value < 0.1 ? 1 : 0].format(value);
}

export function scoreThresholds(key, values, percentiles) {
  const sorted = values
    .filter(Number.isFinite)
    .sort((a, b) => (key === 'accuracy' ? b - a : a - b));
  // Use cutoff values so tied results share a color across percentile boundaries.
  return percentiles.map((fraction) => sorted[Math.ceil(sorted.length * fraction) - 1]);
}

export function scoreClass(thresholds, key, value) {
  if (value == null) return 'ai__score--unavailable';
  const [high, mid] = thresholds[key];
  const reaches = (threshold) => (key === 'accuracy' ? value >= threshold : value <= threshold);
  return reaches(high) ? 'ai__score--high' : reaches(mid) ? 'ai__score--mid' : 'ai__score--low';
}
