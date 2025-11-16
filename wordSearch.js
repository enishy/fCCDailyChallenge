function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const directions = [
    [0, 1], // derecha
    [0, -1], // izquierda
    [1, 0], // abajo
    [-1, 0], // arriba
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === word[0]) {
        for (const [dr, dc] of directions) {
          let endR = r;
          let endC = c;
          let i;

          for (i = 1; i < word.length; i++) {
            const nr = r + dr * i;
            const nc = c + dc * i;

            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) break;
            if (matrix[nr][nc] !== word[i]) break;

            endR = nr;
            endC = nc;
          }

          if (i === word.length) {
            // palabra encontrada
            return [
              [r, c],
              [endR, endC],
            ];
          }
        }
      }
    }
  }
}
findWord(
  [
    ['a', 'c', 't'],
    ['t', 'a', 't'],
    ['c', 't', 'c'],
  ],
  'cat'
);
findWord(
  [
    ['d', 'o', 'g'],
    ['o', 'g', 'd'],
    ['d', 'g', 'o'],
  ],
  'dog'
);
findWord(
  [
    ['h', 'i', 's', 'h'],
    ['i', 's', 'f', 's'],
    ['f', 's', 'i', 'i'],
    ['s', 'h', 'i', 'f'],
  ],
  'fish'
);
findWord(
  [
    ['f', 'x', 'o', 'x'],
    ['o', 'x', 'o', 'f'],
    ['f', 'o', 'f', 'x'],
    ['f', 'x', 'x', 'o'],
  ],
  'fox'
);
