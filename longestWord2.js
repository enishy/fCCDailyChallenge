function longestWord(sentence) {
  sentence = sentence.replace(/[!.,-?']/g, '');
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

longestWord('The quick red fox');
longestWord('Hello coding challenge.');
longestWord('Do Try This At Home.');
longestWord('This sentence... has commas, ellipses, and an exlamation point!');
longestWord('A tie? No way!');
longestWord("Wouldn't you like to know.");
