function convertToKgs(lbs) {
  const kgs = (lbs * 0.453592).toFixed(2);
  const txtPound = lbs > 1 || lbs == 0 ? 'pounds' : 'pound';
  const txtKilograms = kgs == 1 ? 'kilogram' : 'kilograms';
  return `${lbs} ${txtPound} equals ${kgs} ${txtKilograms}.`;
}

convertToKgs(1);
convertToKgs(0);
convertToKgs(100);
convertToKgs(2.5);
convertToKgs(2.20462);
