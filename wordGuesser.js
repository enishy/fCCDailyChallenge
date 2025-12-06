function matchword(word, guess) {
  const n = word.length;
  const result = Array(n).fill('0');
  const used = Array(n).fill(false);

  // Step 1: exact matches
  for (let i = 0; i < n; i++) {
    if (guess[i] === word[i]) {
      result[i] = '2';
      used[i] = true;
    }
  }

  // Count remaining unused letters in word
  const remaining = {};
  for (let i = 0; i < n; i++) {
    if (!used[i]) {
      const ch = word[i];
      remaining[ch] = (remaining[ch] || 0) + 1;
    }
  }

  // Step 2: partial matches
  for (let i = 0; i < n; i++) {
    if (result[i] === '2') continue;

    const ch = guess[i];
    if (remaining[ch] > 0) {
      result[i] = '1';
      remaining[ch]--;
    }
  }

  return result.join('');
}

// Example
console.log(matchword('APPLE', 'POPPA')); // "10201"

compare('APPLE', 'POPPA');
compare('REACT', 'TRACE');
compare('DEBUGS', 'PYTHON');
compare('JAVASCRIPT', 'TYPESCRIPT');
compare('ORANGE', 'ROUNDS');
compare('WIRELESS', 'ETHERNET');
