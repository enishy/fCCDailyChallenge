function generateHex(color) {
  let n = 0;
  if (color != 'red' && color != 'green' && color != 'blue') {
    return 'Invalid color';
  } else {
    if (color == 'red') {
      n = parseInt(Math.random() * 16);
      n = n.toString(16);
      if (/[0-9]/.test(n)) {
        n = '0' + n;
      } else {
        n = n.toUpperCase() + '' + n.toUpperCase();
      }
      return n + '0000';
    }
    if (color == 'green') {
      n = parseInt(Math.random() * 16);
      n = n.toString(16);
      if (/[0-9]/.test(n)) {
        n = '0' + n;
      } else {
        n = n.toUpperCase() + '' + n.toUpperCase();
      }
      return '00' + n + '00';
    }
    if (color == 'blue') {
      n = parseInt(Math.random() * 16);
      n = n.toString(16);
      if (/[0-9]/.test(n)) {
        n = '0' + n;
      } else {
        n = n.toUpperCase() + '' + n.toUpperCase();
      }
      return '0000' + n;
    }
  }
}

generateHex('blue');
