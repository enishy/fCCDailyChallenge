function getNextLocation(matrix) {
  let position1 = [],
    position2 = [];

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        position1 = [i, j];
      }
      if (matrix[i][j] === 2) {
        position2 = [i, j];
      }
    }
  }
  // Movement vector (how it moved from 1 → 2)
  let dr = position2[0] - position1[0];
  let dc = position2[1] - position1[1];

  // Predict next cell
  let nr = position2[0] + dr;
  let nc = position2[1] + dc;

  // Check bounces (reverse direction if hitting walls)
  if (nr < 0 || nr >= rows) dr *= -1;
  if (nc < 0 || nc >= cols) dc *= -1;

  // Recalculate next position after bounce
  nr = position2[0] + dr;
  nc = position2[1] + dc;

  return [nr, nc];
}

getNextLocation([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 2, 0],
  [0, 0, 0, 0],
]); //[2, 3]

getNextLocation([
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
]); //[3,0]

getNextLocation([
  [0, 2, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]); //[1,2]

getNextLocation([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 0, 0],
  [0, 1, 0, 0],
]); //[1, 1]

getNextLocation([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 2],
]); //[2, 2]
