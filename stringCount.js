function count(text, pattern) {
  let count = 0,
    index = 0;
  index = text.indexOf(pattern, index);
  while (index != -1) {
    count++;
    index = text.indexOf(pattern, ++index);
  }
  return count;
}

count('abcdefg', 'def');
count('hello', 'world');
count('mississippi', 'iss');
count('she sells seashells by the seashore', 'sh');
count('101010101010101010101', '101');
