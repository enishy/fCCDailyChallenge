function toDecimal(binary) {
  let numbers = parseInt(binary),
    total = 0,
    index = binary.length - 1;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] != 0) {
      total += 2 ** (index - i);
    }
  }
}

toDecimal('101');
toDecimal('1010');
