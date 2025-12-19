function parseBlockquote(markdown) {
  return (
    markdown.replace(
      markdown.slice(0, markdown.search(/[A-Z]/)),
      '<blockquote>'
    ) + '</blockquote>'
  );
}

parseBlockquote('> This is a quote');
parseBlockquote(' > This is also a quote');
parseBlockquote('  >    So  Is  This');
