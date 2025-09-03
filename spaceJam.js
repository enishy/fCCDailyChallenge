function spaceJam(s) {
  s = s.toUpperCase();
  s = s.replace(/\s/g, '');
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0) str += s[i];
    else str += '  ' + s[i];
  }
  return str;
}

spaceJam('freeCodeCamp');
spaceJam('   free   Code   Camp   ');
