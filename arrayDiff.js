function arrayDiff(arr1, arr2) {
  let notDupli = [];

  if (arr1[0].includes(' ') === true && arr2[0].includes(' ') === true) {
    arr1 = arr1.join(' ').split(' ');
    arr2 = arr2.join(' ').split(' ');
  }

  if (arr1.filter((val) => !arr2.includes(val)) != '')
    notDupli.push(arr1.filter((val) => !arr2.includes(val)));
  if (arr2.filter((val) => !arr1.includes(val)) != '')
    notDupli.push(arr2.filter((val) => !arr1.includes(val)));
  notDupli[0] = new Array(notDupli.join(','));
  notDupli = notDupli.splice(0, 1);
  if ((notDupli = notDupli[0].join(',').split(','))) {
    notDupli.sort((s1, s2) => s1[0].charCodeAt(0) - s2[0].charCodeAt(0));
  }

  return notDupli;
}

arrayDiff(['apple', 'banana'], ['apple', 'banana', 'cherry']);
arrayDiff(['apple', 'banana', 'cherry'], ['apple', 'banana']);
arrayDiff(['one', 'two', 'three', 'four', 'six'], ['one', 'three', 'eight']);
arrayDiff(
  ['two', 'four', 'five', 'eight'],
  ['one', 'two', 'three', 'four', 'seven', 'eight']
);
arrayDiff(['I like freeCodeCamp'], ['I like rocks']);
