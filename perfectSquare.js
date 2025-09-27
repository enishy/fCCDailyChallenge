function isPerfectSquare(n) {
  if (n == 0) return true;
  return n % Math.sqrt(n) == 0;
}
isPerfectSquare(9);
isPerfectSquare(49);
isPerfectSquare(1);
isPerfectSquare(2);
isPerfectSquare(99);
isPerfectSquare(-9);
isPerfectSquare(0);
isPerfectSquare(25281);
