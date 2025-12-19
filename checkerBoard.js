function createBoard(dimensions) {
  let arr = Array(dimensions[0])
    .fill()
    .map(() => Array(dimensions[1]));
  const signs = ['X', 'O'];
  for (let x = 0; x < dimensions[0]; x++) {
    for (let y = 0; y < dimensions[1]; y++) {
      arr[x][y] = signs[(x + y) % 2];
    }
  }
  return arr;
}

createBoard([3, 3]);
createBoard([6, 1]);
createBoard([2, 10]);
createBoard([5, 4]);
