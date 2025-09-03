function toCamelCase(s) {
  s = s.split(/[\s\-_]+/);
  let first = false,
    count = 1,
    newString = new Array();
  s.forEach((word) => {
    if (word && first == true) {
      newString.push(word);
      newString[count] = newString[count].replace(
        newString[count],
        word[0].toUpperCase() + word.substring(1, 30).toLowerCase()
      );
      count++;
    } else {
      newString.push(s[0].toLowerCase());
      first = true;
    }
  });
  return newString.join('');
}

toCamelCase('hello world');
toCamelCase('HELLO WORLD');
toCamelCase('secret agent-X');
toCamelCase(
  'ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk'
);
