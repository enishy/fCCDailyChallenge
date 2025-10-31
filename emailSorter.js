function sort(emails) {
  let domains = emails.map((e) => e.split('@'));

  return domains
    .sort((a, b) => {
      if (a[1].toLowerCase() === b[1].toLowerCase())
        return b[0].toLowerCase().localeCompare(a[0].toLowerCase());
      return b[1].toLowerCase().localeCompare(a[1].toLowerCase());
    })
    .map((e) => e.join('@'))
    .reverse();
}

sort(['jill@mail.com', 'john@example.com', 'jane@example.com']); // ["jane@example.com", "john@example.com", "jill@mail.com"]
sort(['bob@mail.com', 'alice@zoo.com', 'carol@mail.com']); // ["bob@mail.com", "carol@mail.com", "alice@zoo.com"]
sort(['user@z.com', 'user@y.com', 'user@x.com']); // ["user@x.com", "user@y.com", "user@z.com"]
sort(['sam@MAIL.com', 'amy@mail.COM', 'bob@Mail.com']); // ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]
sort([
  'simon@beta.com',
  'sammy@alpha.com',
  'Sarah@Alpha.com',
  'SAM@ALPHA.com',
  'Simone@Beta.com',
  'sara@alpha.com',
]);
// ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]
