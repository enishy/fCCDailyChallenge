function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
    else if (i % 3 === 0) arr.push('Fizz');
    else if (i % 5 === 0) arr.push('Buzz');
    else arr.push(i);
  }
  return arr;
}

//fizzBuzz(2);
//fizzBuzz(4);
//fizzBuzz(8);
fizzBuzz(20);
fizzBuzz(50);

/*    3 with "Fizz".
    5 with "Buzz".
    3 and 5 with "FizzBuzz".*/
