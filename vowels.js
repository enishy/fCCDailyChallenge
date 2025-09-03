function isBalanced(s) {
  let first = 0,
    second = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s.length % 2) != 0 && i == parseInt(s.length - s.length / 2)) {
      continue;
    }
    if (i <= s.length / 2 && /[aeiouAEIOU]/.test(s[i])) {
      first++;
    } else if (i >= s.length / 2 && /[aeiouAEIOU]/.test(s[i])) {
      second++;
    }
  }
  console.log(s + '\r' + 'First:' + first + ',Second:' + second);
  if (first === second) return true;
  else return false;

  return s;
}
isBalanced('racecar');
isBalanced('Lorem Ipsum');
isBalanced('Kitty Ipsum');
isBalanced('string');
isBalanced(' ');
isBalanced('abcdefghijklmnopqrstuvwxyz');
isBalanced('123A#b!E&#x26;*456-o.U');
