function detectAI(text) {
  let dashes = 0;
  dashes = text.match(/[-]/g) !== null ? text.match(/[-]/g) : 0;
  let parenthesis = 0;
  parenthesis = text.match(/[()]/g) !== null ? text.match(/[()]/g) : 0;
  let words_bigger = 0;
  text.split(' ').forEach((word) => {
    if (word.length >= 7) words_bigger++;
  });

  if (dashes.length > 1 || parenthesis.length > 2 || words_bigger > 2) {
    return 'AI';
  }
  return 'Human';
}

detectAI('The quick brown fox jumped over the lazy dog.'); //human
detectAI('The hypersonic brown fox - jumped (over) the lazy dog.'); //human
detectAI("Yes - you're right! I made a mistake there - let me try again."); //AI
detectAI('The extraordinary students were studying vivaciously.'); //AI
detectAI('The (excited) student was (coding) in the library.'); //AI

/*
    It contains two or more dashes (-).

    It contains two or more sets of parenthesis (()). Text can be within the parenthesis.

    It contains three or more words with 7 or more letters.

    Words are separated by a single space and only consist of letters (A-Z). Don't include punctuation or other non-letters as part of a word.

    If the given sentence meets any of the rules above, return "AI", otherwise, return "Human".
*/
