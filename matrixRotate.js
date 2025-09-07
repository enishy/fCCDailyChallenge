function rotate(matrix) {
  let nArray = new Array(matrix.length);

  nArray = matrix[0].map((val, index) =>
    matrix.map((row) => row[index]).reverse()
  );

  return nArray;
}

rotate([[1]]);
rotate([
  [1, 2],
  [3, 4],
]);
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
rotate([
  [0, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
