function rgbToHex(rgb) {
  let numbers = rgb.split(',');
  let result = '#';
  if (parseInt(numbers[0].split('rgb(').join('')).toString(16).length == 1)
    result += '0' + parseInt(numbers[0].split('rgb(').join('')).toString(16);
  else {
    result += parseInt(numbers[0].split('rgb(').join('')).toString(16);
  }
  if (parseInt(numbers[1].trim()).toString(16).length == 1) {
    result += '0' + parseInt(numbers[1].trim()).toString(16);
  } else {
    result += parseInt(numbers[1].trim()).toString(16);
  }
  result += parseInt(numbers[2].trim()).toString(16);
  return result;
}

//rgbToHex('rgb(1, 11, 111)');
rgbToHex('rgb(255, 255, 255)');
