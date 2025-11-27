function calculateAge(birthday) {
  const date1 = new Date(birthday + 'T12:00:00');
  const date2 = new Date('2025-11-27T12:00:00');
  const diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24) / 365);
  return diffDays;
}

calculateAge('2000-11-20');
calculateAge('2000-12-01');
calculateAge('2014-10-25');
calculateAge('1994-01-06');
calculateAge('1994-12-14');
