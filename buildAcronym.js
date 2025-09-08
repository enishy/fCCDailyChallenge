function buildAcronym(str) {
  const prep = ['a', 'for', 'an', 'and', 'by', 'of'];
  let containprep = false;
  const newStr = str.split(' ');
  let acronym = '';

  if (prep.some((element) => newStr[0].toLowerCase().includes(element)))
    containprep = true;

  for (let i = 0; i < newStr.length; i++) {
    if (containprep == true && i >= 1) {
      if (prep.some((element) => newStr[i] === element)) {
        acronym += '';
      } else {
        acronym += newStr[i][0].toUpperCase();
      }
    } else {
      if (newStr[i][0] == newStr[i][0].toUpperCase()) {
        acronym += newStr[i][0];
      }
    }
  }

  return acronym;
}

buildAcronym('Search Engine Optimization');
buildAcronym('Frequently Asked Questions');
buildAcronym('National Aeronautics and Space Administration');
buildAcronym('Federal Bureau of Investigation');
buildAcronym('For your information');
buildAcronym('By the way');
buildAcronym(
  'An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily'
);
