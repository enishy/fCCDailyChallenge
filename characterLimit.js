function canPost(message) {
  if (message.length <= 40) return 'short post';
  else if (message.length > 40 && message.length <= 80) return 'long post';
  else return 'invalid post';
}

canPost('Hello world');
canPost('This is a longer message but still under eighty characters.');
canPost(
  'This message is too long to fit into either of the character limits for a social media post.'
);
