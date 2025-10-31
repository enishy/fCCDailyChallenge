function nthPrime(n) {
  let prime = [],
    isPrime = true;
  for (let i = 2; i < 10000; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j == 0 && i != j) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      prime.push(i);
    }
    isPrime = true;
  }

  return prime[n - 1];
}

nthPrime(5); //11
nthPrime(10); //29
nthPrime(16); //53
nthPrime(99); //523
nthPrime(1000); //7919
