function hasConsonantCount(text, target) {
  const len_text = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  if (len_text != null && len_text.length === target) return true;
  else return false;
}

hasConsonantCount('helloworld', 7);
hasConsonantCount('eieio', 5);
hasConsonantCount('freeCodeCamp Rocks!', 11);
hasConsonantCount('Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.', 24);
hasConsonantCount('Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.', 23);
