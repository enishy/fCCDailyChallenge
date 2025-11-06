function infected(days) {
  let n = 1;
  for (let i = 1; i <= days; i++) {
    n = n * 2;
    if (i % 3 === 0) n -= Math.ceil(n * 0.2);
  }
  return n;
}

infected(1);
infected(3);
infected(8);
infected(17);
infected(25);
