function formatNumber(number) {
  const areaCode = number.substring(1, 4);
  const prefix = number.substring(4, 7);
  const lineNumber = number.substring(7, 11);
  return `+${number[0]} (${areaCode}) ${prefix}-${lineNumber}`;
}

formatNumber('05552340182');
