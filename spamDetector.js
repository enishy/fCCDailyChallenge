function isSpam(number) {
  const data = number.split(' ');
  let total = 0,
    isSpam = false,
    repeat = 0;
  for (let i = 0; i < data[2].length; i++) {
    if (i < 3) total += parseInt(data[2][i]);
  }
  let regex = new RegExp(total);
  repeat = data[1][1].concat(data[1][2]).concat(data[1][3]);
  let areacode = parseInt(data[1].replace('(', '').replace(')', ''));

  if (data[0].replace('+', '').length > 2 || data[0][1] != 0) isSpam = true;
  else if (areacode > 900 || areacode < 200) isSpam = true;
  else if (regex.test(data[2].split('-')[1])) isSpam = true;
  else if (
    repeat.includes(data[2][0]) &&
    repeat[0] === repeat[1] &&
    repeat[1] === repeat[2] &&
    repeat[0] === repeat[2]
  )
    isSpam = true;

  return isSpam;
}
isSpam('+0 (200) 234-0182');
isSpam('+091 (555) 309-1922');
isSpam('+1 (555) 435-4792');
isSpam('+0 (955) 234-4364');
isSpam('+0 (155) 131-6943');
isSpam('+0 (555) 135-0192');
isSpam('+0 (555) 564-1987');
isSpam('+00 (555) 234-0182');
