function shiftArray(arr, n) {
  const long = arr.length;
  n = n % long; // Handle negative shifts and shifts larger than array length

  return arr.slice(n).concat(arr.slice(0, n));
}

shiftArray([1, 2, 3], 1);
shiftArray([1, 2, 3], -1);
shiftArray(['alpha', 'bravo', 'charlie'], 5);
shiftArray(['alpha', 'bravo', 'charlie'], -11);
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15);
