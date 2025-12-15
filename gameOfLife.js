function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Direcciones de los 8 vecinos
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Crear copia para el siguiente estado
  const nextState = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      // Contar vecinos vivos
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          liveNeighbors += grid[nr][nc];
        }
      }

      // Aplicar reglas
      if (grid[r][c] === 1) {
        if (liveNeighbors < 2) {
          nextState[r][c] = 0; // muere (subpoblación)
        } else if (liveNeighbors === 2 || liveNeighbors === 3) {
          nextState[r][c] = 1; // sigue vivo
        } else {
          nextState[r][c] = 0; // muere (sobrepoblación)
        }
      } else {
        if (liveNeighbors === 3) {
          nextState[r][c] = 1; // revive (reproducción)
        }
      }
    }
  }

  return nextState;
}

gameOfLife([
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0],
]);
gameOfLife([
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [0, 0, 1, 0],
]);
gameOfLife([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
gameOfLife([
  [0, 1, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
]);

/*
Cada celula es 1 (viva) o 0 (muerta).
Toda célula viva con menos de dos células vecinas vivas muere (subpoblación).                grid[i](1)<2(1)=0
Toda célula viva con más de tres células vecinas vivas muere (sobrepoblación).               grid[i](1)>3(1)=0
Toda célula viva con dos o tres células vecinas vivas sobrevive.                             grid[i](1)>1 && grid[i]<4(1)=1
Toda célula muerta con exactamente tres células vecinas vivas se vuelve viva (reproducción). grid[i](0)=3(1)*/
