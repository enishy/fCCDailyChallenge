function secondLargest(arr) {
  arr = arr
    .sort((a, b) => a - b)
    .filter((val, index) => arr.indexOf(val) === index);
  return arr[arr.length - 2];
}

secondLargest([1, 3, 3, 2, 4]);
secondLargest([20, 139, 94, 67, 31]);
secondLargest([2, 3, 4, 6, 6]);
secondLargest([10, -17, 55.5, 44, 91, 0]);
secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]);
