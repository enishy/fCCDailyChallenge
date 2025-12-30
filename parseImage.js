function parseImage(markdown) {
    return `<img src="${markdown.slice(markdown.indexOf('(')+1, markdown.indexOf(')'))}" alt="${markdown.slice(markdown.indexOf('[') + 1, markdown.indexOf(']'))}">`;
}

parseImage("![Cute cat](cat.png)")
parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")
parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")