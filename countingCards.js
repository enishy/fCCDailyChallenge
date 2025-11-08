function combinations(cards) {
  const totalCards = 52;
  const total =
    factorialize(totalCards) /
    (factorialize(cards) * factorialize(totalCards - cards));

  return Math.round(total);
}

function factorialize(num) {
  var result = num;

  if (num === 0 || num === 1) return 1;

  while (num > 1) {
    num--;
    result = result * num;
  }

  return result;
}

combinations(52);
combinations(1);
combinations(2);
combinations(5);
combinations(10);
combinations(50);
