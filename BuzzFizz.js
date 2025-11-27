function isFizzBuzz(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    const n = i + 1;
    let expected;

    if (n % 15 === 0) expected = 'FizzBuzz';
    else if (n % 3 === 0) expected = 'Fizz';
    else if (n % 5 === 0) expected = 'Buzz';
    else expected = n;

    if (sequence[i] !== expected) return false;
  }
  return sequence.length > 0 && sequence[0] === 1;
}

isFizzBuzz([1, 2, 'Fizz', 4]);
isFizzBuzz([1, 2, 3, 4]);
isFizzBuzz([1, 2, 'Fizz', 4, 'Buzz', 7]);
isFizzBuzz([
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  'FizzBuzz',
]);
isFizzBuzz([
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  'Fizz',
]);
isFizzBuzz([
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  'Buzz',
]);
isFizzBuzz([
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz',
  16,
  17,
  'Fizz',
  19,
  'Buzz',
  'Fizz',
  22,
  23,
  'Fizz',
  'Buzz',
  26,
  'Fizz',
  28,
  29,
  'FizzBuzz',
  31,
  32,
  'Fizz',
  34,
  'Buzz',
  'Fizz',
  37,
  38,
  'Fizz',
  'Buzz',
  41,
  'Fizz',
  43,
  44,
  'FizzBuzz',
  46,
  47,
  'Fizz',
  49,
  'Buzz',
]);
