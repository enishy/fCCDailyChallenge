function isUnnaturalPrime(n) {
  let div = 2;
  if (n == 0 || n == 1 || n == -1) {
    return false;
  } else {
    while (div < Math.abs(n)) {
      if (Math.abs(n) % div === 0) {
        return false;
      }
      div++;
    }
    return true;
  }
}

isUnnaturalPrime(97);
isUnnaturalPrime(-61);
isUnnaturalPrime(99);
isUnnaturalPrime(-44);
