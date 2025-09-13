function findMissingNumbers(arr) {
  arr.sort((a, b) => a - b);
  let nArray = [];
  arr = arr.filter((a, b) => arr.indexOf(a) === b);
  let min = Math.min(...arr),
    max = Math.max(...arr),
    count = 0;

  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) nArray.push(i);
    count++;
  }
  return nArray;
}
findMissingNumbers([1, 3, 5]);
findMissingNumbers([1, 2, 3, 4, 5]);
findMissingNumbers([1, 10]);
findMissingNumbers([10, 1, 10, 1, 10, 1]);
findMissingNumbers([3, 1, 4, 1, 5, 9]);
findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]);
