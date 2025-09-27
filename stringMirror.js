function isMirror(str1, str2) {
  str2 = str2.replace(/[-]/g, ' ').replace(/[!]/g, '');
  return str1.split('').reverse().join('') == str2;
}
isMirror('helloworld', 'helloworld');
isMirror('Hello World', 'dlroW olleH');
isMirror('RaceCar', 'raCecaR');
isMirror('RaceCar', 'RaceCar');
isMirror('Mirror', 'rorrim');
isMirror('Hello World', 'dlroW-olleH');
isMirror('Hello World', '!dlroW !olleH');
