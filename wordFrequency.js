function getWords(paragraph) {
  let arr = paragraph
    .replace(/\./g, '')
    .replace(/\,/g, '')
    .replace(/\!/g, '')
    .toLowerCase()
    .split(' ');
  let wordMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let currentWordCount = wordMap.get(arr[i]);
    let count = currentWordCount ? currentWordCount : 0;
    wordMap.set(arr[i], count + 1);
  }

  wordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

  let n = [];
  n.push([...wordMap][0][0]);
  n.push([...wordMap][1][0]);
  n.push([...wordMap][2][0]);
  return paragraph;
}

getWords(
  'Coding in Python is fun because coding Python allows for coding in Python easily while coding'
);
getWords('I like coding. I like testing. I love debugging!');
getWords(
  'Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!'
);
