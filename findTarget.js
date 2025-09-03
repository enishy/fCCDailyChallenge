function findTarget(arr, target) {
  let nArray = [];

  for (let x = 0; x < arr.length; x++) {
    for (let y = 1; y < arr.length; y++) {
      if (arr[x] + arr[y] === target && x !== y) {
        nArray.push(x, y);
        return nArray;
      }
    }
  }

  return 'Target not found';
}
findTarget([1, 3, 5, 7], 14);
