function classification(temp) {
  if (temp >= 30000) return 'O';
  else if (temp >= 10000 && temp <= 29999) return 'B';
  else if (temp >= 7500 && temp <= 9999) return 'A';
  else if (temp >= 6000 && temp <= 7499) return 'F';
  else if (temp >= 5200 && temp <= 5999) return 'G';
  else if (temp >= 3700 && temp <= 5199) return 'K';
  else return 'M';
}
classification(5778);
