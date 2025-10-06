function toBinary(decimal) {
  let result = '';
  while (decimal / 2 != 0) {
    if (decimal % 2 === 0) result += '0';
    else result += '1';
    decimal = Math.floor(decimal / 2);
  }
  result = result.split('').reverse().join('');
  return result;
}
toBinary(5);
toBinary(12);
toBinary(50);
toBinary(99);
