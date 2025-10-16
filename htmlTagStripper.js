function stripTags(html) {
  let arrStart = [],
    arrEnd = [],
    index = 0,
    newStr = '';

  while (index != -1) {
    arrStart.push(html.indexOf('<', index));
    arrEnd.push(html.indexOf('>', index));

    index = html.indexOf('<', index + 1);
  }

  for (let i = 0; i < arrStart.length; i++) {
    newStr += html.substring(arrEnd[i] + 1, arrStart[i + 1]);
  }

  return newStr;
}

stripTags('<a href="#">Click here</a>');
stripTags('<p class="center">Hello <b>World</b>!</p>');
stripTags('<img src="cat.jpg" alt="Cat">');
stripTags(
  '<main id="main"><section class="section">section</section><section class="section">section</section></main>'
);
