function squaresWithThree(n) {
  let total = 0;
  while (n > 0) {
    const multi = '' + n * n;
    if (multi.includes('3')) {
      total++;
    }
    n--;
  }
  return total;
}

squaresWithThree(100);
