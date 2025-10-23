function wiseSpeak(sentence) {
  const words = ['have', 'must', 'are', 'will', 'can'];
  const sign = sentence[sentence.length - 1];
  const l = sentence.replace(sign, '');
  const split = l.split(' ');

  let index = 0;
  split.forEach((element) => {
    if (words.includes(element)) index = split.indexOf(element);
  });
  const wordsLast = split.slice(0, index + 1);
  split.splice(0, index + 1);
  split[split.length - 1] += ',';
  split.push(wordsLast.join(' ').toLowerCase() + sign);
  split[0] = split[0][0].toUpperCase() + split[0].substring(1, split[0].length);
  return split.join(' ');
}

wiseSpeak('You must speak wisely.');
wiseSpeak('You can do it!');
wiseSpeak('Do you think you will complete this?');
wiseSpeak('All your base are belong to us.');
wiseSpeak('You have much to learn.');
