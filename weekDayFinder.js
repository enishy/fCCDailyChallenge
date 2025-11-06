function getWeekday(dateString) {
  const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return day[new Date(dateString).getUTCDay()];
}
getWeekday('1111-11-11');
