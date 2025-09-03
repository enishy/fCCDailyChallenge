function sumOfSquares(n) {
  let total = 0;
  while (n > 0) {
    total += n * n;
    n--;
  }
  return total;
}

sumOfSquares(1000);
