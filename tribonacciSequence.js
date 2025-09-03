function tribonacciSequence(startSequence, length) {
  const n = startSequence.length - 3;

  if (length === 0) return [];
  if (length === 1) {
    startSequence.splice(-2);
    return startSequence;
  }
  if (length === 2) {
    return [startSequence[0], startSequence[1]];
  }
  if (length === 3) return startSequence;
  if (length > 3) {
    startSequence.push(
      startSequence[n] + startSequence[n + 1] + startSequence[n + 2]
    );
    return tribonacciSequence(startSequence, length - 1);
  }
}
tribonacciSequence([21, 32, 43], 1);
