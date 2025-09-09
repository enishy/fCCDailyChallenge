function allUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let x = i + 1; x < str.length; x++) {
      if (str[i] == str[x]) {
        return false;
      }
    }
  }
  return true;
}

allUnique('abc');
allUnique('aA');
allUnique('QwErTy123!@');
allUnique('~!@#$%^&*()_+');
allUnique('hello');
allUnique('freeCodeCamp');
allUnique('!@#*$%^&*()aA');
