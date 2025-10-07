function findLandingSpot(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let bestSpot = null;
  let lowestDanger = Infinity;

  // Define possible neighbor directions: up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Loop through each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        // potential landing spot
        let dangerSum = 0;

        // Check all 4 neighbors
        for (const [dr, dc] of directions) {
          const r = i + dr;
          const c = j + dc;
          // Ignore out-of-bounds
          if (r >= 0 && r < rows && c >= 0 && c < cols) {
            dangerSum += matrix[r][c];
          }
        }

        // Compare total danger to current minimum
        if (dangerSum < lowestDanger) {
          lowestDanger = dangerSum;
          bestSpot = [i, j];
        }
      }
    }
  }

  return bestSpot;
}

findLandingSpot([
  [1, 0],
  [2, 0],
]);

findLandingSpot([
  [9, 0, 3],
  [7, 0, 4],
  [8, 0, 5],
]);

findLandingSpot([
  [1, 2, 1],
  [0, 0, 2],
  [3, 0, 0],
]);

findLandingSpot([
  [9, 6, 0, 8],
  [7, 1, 1, 0],
  [3, 0, 3, 9],
  [8, 6, 0, 9],
]);
