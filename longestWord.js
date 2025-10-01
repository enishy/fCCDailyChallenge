function getLongestWord(sentence) {
  sentence = sentence.replace('.', '');
  let max = 0,
    longest = '';
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      longest = arr[i];
      max = arr[i].length;
    }
  }
  return longest;
}

getLongestWord('coding is fun');
getLongestWord('Coding challenges are fun and educational.');
getLongestWord('This sentence has multiple long words.');
