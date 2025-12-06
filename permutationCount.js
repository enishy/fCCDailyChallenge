function countDistinctPermutations(str) {
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let numerator = factorial(str.length);
  let denominator = 1;

  for (const count of Object.values(charCount)) {
    denominator *= factorial(count);
  }

  return numerator / denominator;
}

countDistinctPermutations('abb'); // 3
