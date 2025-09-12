function tooMuchScreenTime(hours) {
  let totalSeven = 0,
    totalThree = 0,
    tooMuch = false;
  //Average seven days
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) tooMuch = true;
    totalSeven += hours[i];
  }
  //Average three days
  for (let i = 0; i < hours.length - 2; i++) {
    totalThree = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
    if (totalThree >= 8) tooMuch = true;
  }

  totalSeven /= 7;
  if (totalSeven >= 6) tooMuch = true;
  return tooMuch;
}

tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]);
tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]);
tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]);
tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]);
tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]);
tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]);
tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]);
