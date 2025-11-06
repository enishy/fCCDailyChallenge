function imageSearch(images, term) {
  let arr = [];
  const cont = new RegExp(term, 'i');
  images.forEach((element) => {
    if (cont.test(element)) arr.push(element);
  });
  return arr;
}
imageSearch(['dog.png', 'cat.jpg', 'parrot.jpeg'], 'dog');
imageSearch(['Sunset.jpg', 'Beach.png', 'sunflower.jpeg'], 'sun');
imageSearch(['Moon.png', 'sun.jpeg', 'stars.png'], 'PNG');
imageSearch(
  ['cat.jpg', 'dogToy.jpeg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif'],
  'Cat'
);
