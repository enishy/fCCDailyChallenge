function battle(ourTeam, opponent) {
  let countOur = 0,
    countOpo = 0,
    arrOur = [],
    arrOpo = [];
  for (let i = 0; i < ourTeam.length; i++) {
    if (ourTeam[i] === ourTeam[i].toLowerCase() && ourTeam[i] !== ' ')
      countOur += ourTeam[i].charCodeAt(0) - 96;
    else if (ourTeam[i] === ourTeam[i].toUpperCase() && ourTeam[i] !== ' ')
      countOur += (ourTeam[i].charCodeAt(0) - 64) * 2;
    if (ourTeam[i] === ' ' || i === ourTeam.length - 1) {
      arrOur.push(countOur);
      countOur = 0;
    }
  }
  for (let i = 0; i < opponent.length; i++) {
    if (opponent[i] === opponent[i].toLowerCase() && opponent[i] !== ' ')
      countOpo += opponent[i].charCodeAt(0) - 96;
    else if (opponent[i] === opponent[i].toUpperCase() && opponent[i] !== ' ')
      countOpo += (opponent[i].charCodeAt(0) - 64) * 2;
    if (opponent[i] === ' ' || i === opponent.length - 1) {
      arrOpo.push(countOpo);
      countOpo = 0;
    }
  }

  for (let i = 0; i < arrOur.length; i++) {
    if (arrOur[i] > arrOpo[i]) countOur++;
    else if (arrOur[i] < arrOpo[i]) countOpo++;
  }

  if (countOur > countOpo) return 'We win';
  else if (countOur < countOpo) return 'We lose';
  else return 'Draw';
}

battle('hello world', 'hello word');
battle('Hello world', 'hello world');
battle('lorem ipsum', 'kitty ipsum');
battle('hello world', 'world hello');
battle('git checkout', 'git switch');
battle('Cheeseburger with fries', 'Cheeseburger with Fries');
battle('We must never surrender', 'Our team must win');
