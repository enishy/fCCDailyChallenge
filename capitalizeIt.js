function titleCase(title) {
  let str = '';
  title.split(' ').forEach((element) => {
    str +=
      element[0].toUpperCase() +
      element.slice(1, element.length).toLowerCase() +
      ' ';
  });
  return str.trim();
}

titleCase('hello world');
titleCase('the quick brown fox');
titleCase('JAVASCRIPT AND PYTHON');
titleCase('AvOcAdO tOAst fOr brEAkfAst');
