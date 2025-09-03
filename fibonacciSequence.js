function fibonacciSequence(startSequence, length) {
  const n = startSequence.length - 2;

  if (length === 0) return [];
  if (length === 1) {
    startSequence.splice(-1);
    return startSequence;
  }
  if (length === 2) return startSequence;
  if (length > 2) {
    startSequence.push(startSequence[n] + startSequence[n + 1]);
    return fibonacciSequence(startSequence, length - 1);
  }

  return length;
}
