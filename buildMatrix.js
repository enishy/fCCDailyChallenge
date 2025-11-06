function buildMatrix(rows, cols) {
  let arr = new Array(rows); // create an empty array of length n
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols); // make each element an array
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }

  return arr;
}

buildMatrix(2, 3);
buildMatrix(3, 2);
buildMatrix(4, 3);
buildMatrix(9, 1);
