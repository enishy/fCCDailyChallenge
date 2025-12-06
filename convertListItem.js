function convertListItem(markdown) {
  let str = '';
  if (markdown.search(/\s{0,}[1-9]\.\s{1,}/) !== 0) return 'Invalid format';
  else {
    str = markdown
      .replace(markdown.slice(0, markdown.indexOf('.') + 1), '<li>')
      .replace(/\s{1,}/, '');
    str = str.replace(
      str.split(' ')[str.split(' ').length - 1],
      str.split(' ')[str.split(' ').length - 1] + '</li>'
    );
  }
  return str;
}

convertListItem('1. My item');
convertListItem(' 1.  Another item');
convertListItem('1 . invalid item');
convertListItem('2. list item text');
convertListItem('. invalid again');
convertListItem('A. last invalid');
