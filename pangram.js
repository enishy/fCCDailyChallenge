function isPangram(sentence, letters) {
  let sentenceArray = sentence
    .replace(/(.)(?=.*\1)/g, '')
    .replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split('');
  const lettersArray = letters.toLowerCase().split('');

  let nArray = sentenceArray.slice(0, sentenceArray.length);
  let nArrayLetters = lettersArray.slice(0, lettersArray.length);
  lettersArray.forEach((elementLetter) => {
    sentenceArray.forEach((elementSentence) => {
      if (elementLetter.includes(elementSentence)) {
        nArray.splice(nArray.indexOf(elementLetter), 1);
        nArrayLetters.splice(nArrayLetters.indexOf(elementLetter), 1);
      }
    });
  });
  return nArray == 0 && nArrayLetters == 0 ? true : false;
}

let result = false;
result = isPangram('hello', 'helo');
result = isPangram('hello', 'hel');
result = isPangram('hello', 'helow');
result = isPangram('hello world', 'helowrd');
result = isPangram('Hello world!', 'helowrd');
result = isPangram('Hello world!', 'heliowrd');
result = isPangram('freeCodeCamp', 'frcdmp');
result = isPangram(
  'The quick brown fox jumps over the lazy dog.',
  'abcdefghijklmnopqrstuvwxyz'
);
