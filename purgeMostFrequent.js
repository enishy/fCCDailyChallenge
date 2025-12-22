function purgeMostFrequent(arr) {
  let total = 0,
    highest = 0,
    item;

  for (let x = 0; x < arr.length; x++) {
    let element = arr[x];
    for (let y = x + 1; y <= arr.length - 1; y++) {
      if (element === arr[y]) {
        total++;
      }
    }
    if (total > highest) {
      highest = total;
      total = 0;
      item = element;
    }
  }
  return arr.filter((ele) => ele !== item);
}

purgeMostFrequent([1, 2, 2, 3]);
purgeMostFrequent(['a', 'b', 'd', 'b', 'c', 'd', 'c', 'd', 'c', 'd']);
purgeMostFrequent(['red', 'blue', 'green', 'red', 'blue', 'green', 'blue']);
purgeMostFrequent([5, 5, 5, 5]);
