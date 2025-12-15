function mostFrequent(arr) {
  const unique = new Map();

  // Count frequencies
  for (const item of arr) {
    unique.set(item, (unique.get(item) || 0) + 1);
  }

  // Find the most frequent element
  let maxCount = 0;
  let mostFrequentElement;

  for (const [key, value] of unique) {
    if (value > maxCount) {
      maxCount = value;
      mostFrequentElement = key;
    }
  }

  return mostFrequentElement;
}

mostFrequent(['a', 'b', 'a', 'c']);
mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]);
mostFrequent([true, false, 'false', 'true', false]);
mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]);
