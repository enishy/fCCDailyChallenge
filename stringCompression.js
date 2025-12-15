function compressString(sentence) {
  let arr = sentence
    .split(' ')
    .reduce(
      (acc, currVal) => ((acc[currVal] = acc[currVal] + 1 || 1), acc),
      {}
    );
  let str = '';
  Object.entries(arr).map((entry) => {
    if (entry[1].toString().match(/[1]/)) str += entry[0] + ' ';
    else str += `${entry[0]}(${entry[1]}) `;
  });
  return str.trim();
}

compressString('yes yes yes please');
compressString('I have have have apples');
compressString('one one three and to the the the the');
compressString('route route route route route route tee tee tee tee tee tee');
