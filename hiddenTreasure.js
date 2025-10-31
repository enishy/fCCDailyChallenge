function dive(map, coordinates) {
  const result = { '-': 'Empty', O: 'Recovered', X: 'Found' };

  const l = map[coordinates[0]][coordinates[1]];
  let found = 0;
  map.forEach((element) => {
    element.forEach((curr) => {
      if (curr.includes('X')) {
        found++;
      }
    });
  });
  if (found > 1) return result[l];
  else return 'Found';
}

dive(
  [
    ['-', 'X'],
    ['-', 'X'],
    ['-', 'O'],
  ],
  [2, 1]
);

dive(
  [
    ['-', 'X'],
    ['-', 'X'],
    ['-', 'O'],
  ],
  [2, 0]
);

dive(
  [
    ['-', 'X'],
    ['-', 'O'],
    ['-', 'O'],
  ],
  [1, 1]
);

dive(
  [
    ['-', '-', '-'],
    ['X', 'O', 'X'],
    ['-', '-', '-'],
  ],
  [1, 2]
);

dive(
  [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['O', 'X', 'X'],
  ],
  [2, 0]
);

dive(
  [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['O', 'X', 'X'],
  ],
  [1, 2]
);
