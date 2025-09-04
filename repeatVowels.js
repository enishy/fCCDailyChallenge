function repeatVowels(str) {
  const vowels = '/[aeiouAEIOU]/';
  let count = 1,
    newStr = '',
    first = true;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      first = true;
      for (let x = 0; x < count; x++) {
        if (first == true) {
          newStr += str[i];
          first = false;
        } else {
          newStr += str[i].toLowerCase();
        }
      }
      count++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

repeatVowels('hello world');
repeatVowels('freeCodeCamp');
repeatVowels('AEIOU'); //AEeIiiOoooUuuuu
repeatVowels('I like eating ice cream in Iceland'); //I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand
