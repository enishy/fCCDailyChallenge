function checkStrength(password) {
  let numberRules = 0;
  if (password.length >= 8) numberRules++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) numberRules++;
  if (/[0-9]/.test(password)) numberRules++; // \d tambien vale para comprobar digito
  if (/[!@#$%^&*]/.test(password)) numberRules++;

  if (numberRules < 2) return 'weak';
  else if (numberRules >= 2 && numberRules <= 3) return 'medium';
  else return 'strong';
}

checkStrength('123456');
checkStrength('pass!!!');
checkStrength('Qwerty');
checkStrength('PASSWORD');
checkStrength('PASSWORD!');
checkStrength('PassWord%^!');
checkStrength('S3cur3P@ssw0rd');
checkStrength('C0d3&Fun!');

/*It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.*/
/* weak 1 regla, medium 2 o 3 reglas y strong 4 reglas */
