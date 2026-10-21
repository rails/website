const pointSize = 28;
const collisionOffsets = [
  [0, 0],
  [0.93, -0.75],
  [-0.93, 0.75],
  [0.93, 0.75],
  [-0.93, -0.75],
  [1.36, 0],
  [-1.36, 0],
  [0, 1.36],
  [0, -1.36],
  [1.86, 0],
  [-1.86, 0],
  [0, 1.86],
  [0, -1.86],
  [1.46, 1.25],
  [-1.46, 1.25],
  [1.46, -1.25],
  [-1.46, -1.25]
].map(([x, y]) => [x * pointSize, y * pointSize]);
// Labels are tried at 16 angles around their marker, near it first, then further
// out with a line back to it.
const labelAngles = 16;
const labelGaps = [5, 22, 40];

// Keep markers inside the plot, separating collisions with small offsets.
export function placePoints(models, coordinates, width, height) {
  const placed = [];
  for (const item of models) {
    const origin = coordinates(item);
    let position = origin;
    let bestDistance = -1;
    for (const [dx, dy] of collisionOffsets) {
      const candidate = {
        x: Math.max(pointSize / 2, Math.min(width - pointSize / 2, origin.x + dx)),
        y: Math.max(pointSize / 2, Math.min(height - pointSize / 2, origin.y + dy))
      };
      const distance = placed.length
        ? Math.min(
            ...placed.map((point) =>
              Math.hypot(candidate.x - point.position.x, candidate.y - point.position.y)
            )
          )
        : Infinity;
      if (distance > bestDistance) {
        position = candidate;
        bestDistance = distance;
      }
      if (distance >= pointSize * 1.2) break;
    }
    placed.push({ item, origin, position });
  }
  return placed;
}

function overlapArea(a, b, gap = 6) {
  return (
    Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left) + gap) *
    Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) + gap)
  );
}

// Overlapping text is unreadable, so it outweighs crowding or covering a marker.
function labelOverlap(a, b) {
  return overlapArea(a, b) + 1000 * overlapArea(a, b, 0);
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

// Markers are round, so a label may sit by the corner of a marker's bounding box.
function coversMarker(bounds, marker) {
  const x = (marker.left + marker.right) / 2;
  const y = (marker.top + marker.bottom) / 2;
  const dx = clamp(x, bounds.left, bounds.right) - x;
  const dy = clamp(y, bounds.top, bounds.bottom) - y;
  return Math.hypot(dx, dy) < (marker.right - marker.left) / 2;
}

// Does the line from a label to its marker pass within 2px of another marker?
function lineCrossesMarker(from, to, marker) {
  const x = (marker.left + marker.right) / 2;
  const y = (marker.top + marker.bottom) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const t = clamp(((x - from.x) * dx + (y - from.y) * dy) / (dx * dx + dy * dy), 0, 1);
  return (
    Math.hypot(from.x + dx * t - x, from.y + dy * t - y) < (marker.right - marker.left) / 2 + 2
  );
}

// Labels need DOM measurements after markers are rendered. Measure each label once,
// then search for the arrangement where labels cover neither each other nor markers.
export function positionLabels(plot, points) {
  const plotBounds = plot.getBoundingClientRect();
  // Plain numbers keep the search fast; DOMRect getters are slow in a hot loop.
  const markers = points.map((point) => {
    const { left, right, top, bottom } = point.getBoundingClientRect();
    return { left, right, top, bottom };
  });
  const options = points.map((point, index) => {
    const marker = markers[index];
    const x = (marker.left + marker.right) / 2;
    const y = (marker.top + marker.bottom) / 2;
    const radius = (marker.right - marker.left) / 2;
    const { width, height } = point.querySelector('span').getBoundingClientRect();
    const all = labelGaps.flatMap((gap, level) =>
      Array.from({ length: labelAngles }, (_, step) => {
        const angle = (step / labelAngles) * 2 * Math.PI;
        // Labels that would leave the plot slide back inside it.
        const left = clamp(
          x + Math.cos(angle) * (radius + gap + width / 2) - width / 2,
          plotBounds.left,
          plotBounds.right - width
        );
        const top = clamp(
          y + Math.sin(angle) * (radius + gap + height / 2) - height / 2,
          plotBounds.top,
          plotBounds.bottom - height
        );
        const bounds = { left, right: left + width, top, bottom: top + height };
        const cost =
          level * 40 +
          0.1 * Math.hypot(left + width / 2 - x, top + height / 2 - y) +
          3 *
            markers.reduce(
              (sum, other, otherIndex) =>
                sum + (otherIndex === index ? 0 : overlapArea(bounds, other)),
              0
            );
        const edge = {
          x: clamp(x, bounds.left, bounds.right),
          y: clamp(y, bounds.top, bounds.bottom)
        };
        const clear = markers.every(
          (other, otherIndex) =>
            !coversMarker(bounds, other) &&
            (otherIndex === index || !lineCrossesMarker(edge, { x, y }, other))
        );
        return { bounds, cost, clear };
      })
    );
    const clear = all.filter((option) => option.clear);
    return (clear.length ? clear : all).sort((a, b) => a.cost - b.cost);
  });

  // Branch and bound: place the most constrained labels first, try their cheapest
  // positions first, and abandon arrangements that already cost more than the best.
  // A strict search skips positions that overlap a placed label; only if none
  // fits does a second search allow overlaps.
  const order = points
    .map((_, index) => index)
    .sort((a, b) => options[a].length - options[b].length);
  const chosen = [];
  let best = { cost: Infinity };
  let budget;
  function search(depth, cost, strict) {
    if (cost >= best.cost || budget <= 0) return;
    if (depth === order.length) {
      best = { cost, chosen: chosen.slice() };
      return;
    }
    const index = order[depth];
    const placed = order.slice(0, depth).map((other) => chosen[other].bounds);
    for (const option of options[index]) {
      budget -= 1;
      if (strict && placed.some((other) => overlapArea(option.bounds, other, 0) > 0)) continue;
      chosen[index] = option;
      const overlap = placed.reduce((sum, other) => sum + labelOverlap(option.bounds, other), 0);
      search(depth + 1, cost + option.cost + overlap, strict);
    }
  }
  // Caps the work on crowded charts; the best arrangement found so far is used.
  budget = 10000;
  search(0, 0, true);
  if (!best.chosen) {
    budget = 10000;
    search(0, 0, false);
  }

  points.forEach((point, index) => {
    const { bounds } = best.chosen[index];
    const marker = markers[index];
    const label = point.querySelector('span');
    // The label is positioned inside the marker's border.
    label.style.left = `${bounds.left - marker.left - point.clientLeft}px`;
    label.style.top = `${bounds.top - marker.top - point.clientTop}px`;
    // Labels placed further out get a line from their nearest edge toward the marker.
    const x = (marker.left + marker.right) / 2;
    const y = (marker.top + marker.bottom) / 2;
    const edgeX = clamp(x, bounds.left, bounds.right);
    const edgeY = clamp(y, bounds.top, bounds.bottom);
    const length = Math.hypot(x - edgeX, y - edgeY) - (marker.right - marker.left) / 2 - 3;
    if (length > 6) {
      label.style.setProperty('--leader-x', `${edgeX - bounds.left}px`);
      label.style.setProperty('--leader-y', `${edgeY - bounds.top}px`);
      label.style.setProperty('--leader-length', `${length}px`);
      label.style.setProperty('--leader-angle', `${Math.atan2(y - edgeY, x - edgeX)}rad`);
    }
  });
}
