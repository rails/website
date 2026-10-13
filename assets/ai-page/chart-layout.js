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
const labelDirections = [
  'above',
  'below',
  'right',
  'left',
  'above-left',
  'above-right',
  'below-left',
  'below-right',
  'far-above',
  'far-below',
  'far-right',
  'far-left',
  'far-above-left',
  'far-above-right',
  'far-below-left',
  'far-below-right'
];

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

function overlapArea(a, b) {
  return (
    Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left) + 6) *
    Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) + 6)
  );
}

// Labels need DOM measurements after markers are rendered. Place them once,
// then make two passes to reduce overlaps with the other labels and markers.
export function positionLabels(plot, points) {
  const plotBounds = plot.getBoundingClientRect();
  const circles = points.map((point) => point.getBoundingClientRect());

  function placeLabel(point, labelled) {
    const label = point.querySelector('span');
    const labels = labelled.map((other) => other.querySelector('span').getBoundingClientRect());
    let best = { direction: labelDirections[0], overlap: Infinity };
    for (const direction of labelDirections) {
      point.className = `ai__benchmark-point ai__benchmark-point--label-${direction}`;
      const bounds = label.getBoundingClientRect();
      let overlap =
        (direction.startsWith('far-') ? 40 : 0) +
        labels.reduce((sum, other) => sum + overlapArea(bounds, other), 0) +
        3 *
          circles.reduce(
            (sum, other, index) => sum + (points[index] === point ? 0 : overlapArea(bounds, other)),
            0
          );
      if (
        bounds.left < plotBounds.left ||
        bounds.right > plotBounds.right ||
        bounds.top < plotBounds.top ||
        bounds.bottom > plotBounds.bottom
      )
        overlap = Infinity;
      if (overlap < best.overlap) best = { direction, overlap };
    }
    point.className = `ai__benchmark-point ai__benchmark-point--label-${best.direction}`;
  }

  points.forEach((point, index) => placeLabel(point, points.slice(0, index)));
  for (let pass = 0; pass < 2; pass += 1) {
    for (const point of points)
      placeLabel(
        point,
        points.filter((other) => other !== point)
      );
  }
}
