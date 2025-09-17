function generateSlug(str) {
  str = str
    .toLowerCase()
    .trim()
    .replace(/[^A-Za-z0-9\s]/gi, '')
    .replace(/[\s]/, '%20');

  while (/[\s]/g.test(str)) {
    str = str.replace(' ', '');
  }
  return str;
}
generateSlug('helloWorld');
generateSlug('hello world!');
generateSlug(' hello-world ');
generateSlug('hello  world');
generateSlug('  ?H^3-1*1]0! W[0%R#1]D  ');
