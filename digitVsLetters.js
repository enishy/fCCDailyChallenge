function digitsOrLetters(str) {
  const digits = /[0-9]/;
  const letters = /[A-Za-z]/;
  let countDigits = 0,
    countLetters = 0;
  for (let index = 0; index < str.length; index++) {
    if (digits.test(parseInt(str[index]))) countDigits++;
    if (letters.test(str[index])) countLetters++;
  }
  if (countDigits > countLetters) return 'digits';
  else if (countLetters > countDigits) return 'letters';
  else return 'tie';
}

digitsOrLetters('abc123');
digitsOrLetters('a1b2c3d');
digitsOrLetters('1a2b3c4');
digitsOrLetters('abc123!@#DEF');
digitsOrLetters('H3110 W0R1D');
digitsOrLetters('P455W0RD');
