function evaluate(numbers, operators) {
  let result = numbers[0];

  for (let i = 0; i < numbers.length - 1; i++) {
    const op = operators[i % operators.length];
    if (op == '+') {
      result += numbers[i + 1];
    } else if (op == '-') {
      result -= numbers[i + 1];
    } else if (op == '*') {
      result *= numbers[i + 1];
    } else if (op == '/') {
      result /= numbers[i + 1];
    } else if (op == '%') {
      result %= numbers[i + 1];
    }
  }

  return result;
}

evaluate([5, 6, 7, 8, 9], ['+', '-']);
