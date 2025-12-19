function pairwise(arr, target) {
  let index = 0;
  let arrIndex = [];
  for (let x = 0; x < arr.length; x++) {
    const element = arr[x];
    for (let y = 0; y < arr.length; y++) {
      if (
        element != arr[y] &&
        element + arr[y] === target &&
        !arrIndex.includes(x) &&
        !arrIndex.includes(y)
      ) {
        index += x + y;
        arrIndex.push(x, y);
      }
    }
  }
  return index;
}

pairwise([2, 3, 4, 6, 8], 10);
pairwise([4, 1, 5, 2, 6, 3], 7);
pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20);
pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24);
