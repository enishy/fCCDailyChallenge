function oneHundred(chars) {
  return chars.repeat(100 / chars.length) + chars.slice(0, 100 % chars.length);
}

oneHundred('One hundred ');
oneHundred('freeCodeCamp ');
oneHundred('daily challenges ');
oneHundred('!');
