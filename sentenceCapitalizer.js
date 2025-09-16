function capitalize(paragraph) {
  let sentence = '',
    sign = false;
  for (let i = 0; i < paragraph.length; i++) {
    if (i == 0) sentence += paragraph[i].toUpperCase();
    else if ('/\.\?\!/'.includes(paragraph[i])) {
      sentence += paragraph[i];
      sign = true;
    } else if (sign == true && /[A-Za-z]/.test(paragraph[i])) {
      sentence += paragraph[i].toUpperCase();
      sign = false;
    } else {
      sentence += paragraph[i];
    }
  }
  return sentence;
}

capitalize('this is a simple sentence.');
capitalize('hello world. how are you?');
capitalize("i did today's coding challenge... it was fun!!");
capitalize('crazy!!!strange???unconventional...sentences.');
capitalize(
  "there's a space before this period . why is there a space before that period ?"
);
