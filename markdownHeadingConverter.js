function convert(heading) {
  if (!/[#]/.test(heading)) return 'Invalid format';
  let count = 0;
  heading = heading.trimStart();
  for (let i = 0; i < heading.length; i++) {
    if (heading[i] === '#') count++;
    if (heading[i] === '#' && /[A-Z]/.test(heading[i + 1])) count--;
    if (heading[i] === '#' && heading[i + 1] !== '#') break;
  }
  if (count === 0 || count > 6) return 'Invalid format';
  heading =
    '<h' +
    count +
    '>' +
    heading.slice(heading.indexOf('M'), heading.length) +
    '</h' +
    count +
    '>';

  return heading;
}

convert('# My level 1 heading');
convert('My heading');
convert('##### My level 5 heading');
convert('#My heading');
convert('  ###  My level 3 heading');
convert('####### My level 7 heading');
convert('## My #2 heading');
