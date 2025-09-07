function parseRomanNumeral(numeral) {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const current = numbers[numeral[i]];
    const next = numbers[numeral[i + 1]];

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}

parseRomanNumeral('III');
parseRomanNumeral('IV');
parseRomanNumeral('XXVI');
parseRomanNumeral('XCIX');
parseRomanNumeral('CDLX');
parseRomanNumeral('DIV');
parseRomanNumeral('MMXXV');
