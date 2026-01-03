function parseItalics(markdown) {
    return markdown.replace(/([*_])([^\s][\s\S]*?[^\s])\1/g, "<i>$2</i>");
}

parseItalics("*This is italic*")
parseItalics("_This is also italic_")
parseItalics("*This is not italic *")
parseItalics("_ This is also not italic_")
parseItalics("The *quick* brown fox _jumps_ over the *lazy* dog.")