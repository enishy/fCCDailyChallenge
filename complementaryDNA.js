function complementaryDNA(strand) {
  let result = '';
  for (let i = 0; i < strand.length; i++) {
    if (strand[i] === 'A') {
      result += 'T';
    } else if (strand[i] === 'C') {
      result += 'G';
    } else if (strand[i] === 'G') {
      result += 'C';
    } else if (strand[i] === 'T') {
      result += 'A';
    }
  }
  return result;
}

complementaryDNA('ACGT');
complementaryDNA('ATGCGTACGTTAGC');
