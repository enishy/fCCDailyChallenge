function extractAttributes(element) {
  let sub = element
    .substring(element.indexOf('<'), element.indexOf('>'))
    .replace(' /', '');

  sub = sub.substring(sub.indexOf(' ') + 1, sub.length);

  let arr = [];

  while (sub.length > 1) {
    if (sub.includes('btn-primary') && sub.length === 12) break;
    arr.push(
      sub.substring(0, sub.indexOf('=')) +
        ', ' +
        sub.substring(
          sub.indexOf('="') + 2,
          sub.indexOf('"', sub.indexOf('"') + 1)
        )
    );
    sub = sub.slice(sub.indexOf(' ')).trim();
  }
  if (arr[0].length === 3) arr = [];
  return arr;
}
extractAttributes('<span class="red"></span>');
extractAttributes('<meta charset="UTF-8" />');
extractAttributes('<p>Lorem ipsum dolor sit amet</p>');
extractAttributes('<input name="email" type="email" required="true" />');
extractAttributes(
  '<button id="submit" class="btn btn-primary">Submit</button>'
);
