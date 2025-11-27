function countCharacters(sentence) {
  sentence = sentence.replace(/[^A-Za-z]/g, '').toLowerCase();
  const ar = new Set(
    Array.from(sentence).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  );
  let count = 0;
  let arr = Array.from(ar);
  arr.forEach((element) => {
    const i = sentence.match(new RegExp(element, 'g')).length;
    arr[count] += ' ' + i;
    count++;
  });
  return arr;
}

countCharacters('hello world');
countCharacters('I love coding challenges!');
countCharacters('// TODO: Complete this challenge ASAP!');
