function parseBold(markdown) {
  return markdown.replace(/(\*\*|__)([^\s][\s\S]*?[^\s])\1/g, '<b>$2</b>');
}

parseBold('**This is bold**');
parseBold('__This is also bold__');
parseBold('**This is not bold **');
parseBold('__ This is also not bold__');
parseBold('The **quick** brown fox __jumps__ over the **lazy** dog.');
