function decode(s) {
  let stack = [''];
  for (let char of s) {
    if (char === '(') {
      stack.push('');
    } else if (char === ')') {
      let reversed = stack.pop().split('').reverse().join('');
      stack[stack.length - 1] += reversed;
    } else {
      stack[stack.length - 1] += char;
    }
  }
  return stack[0];
}

decode('(f(b(dc)e)a)');
