function mask(card) {
  let masked = '';
  for (let i = 0; i < card.length; i++) {
    if (/[0-9]/.test(card[i]) && i < 15) masked += '*';
    else masked += card[i];
  }
  return masked;
}
mask('4012-8888-8888-1881');
mask('5105 1051 0510 5100');
