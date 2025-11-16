function count(str) {
  let vowels = 0,
    consonants = 0;
  Array.from(str).forEach((char) => {
    if (/[aeiou]/i.test(char)) vowels++;
    else if (/[^aeiou!,.-\s]/i.test(char)) consonants++;
  });

  return [vowels, consonants];
}

count('Hello World');
count('JavaScript');
count('Python');
count('freeCodeCamp');
count('Hello, World!');
count('The quick brown fox jumps over the lazy dog.');
