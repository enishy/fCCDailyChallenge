function daysUntilWeekend(dateString) {
  let day = new Date(dateString).getDay();
  if (day === 0 || day === 6) return "It's the weekend!";
  6 - day === 1
    ? (day = '1 day until the weekend.')
    : (day = 6 - day + ' days until the weekend.');
  return day;
}

daysUntilWeekend('2025-11-14');
daysUntilWeekend('2025-01-01');
daysUntilWeekend('2026-11-29');
daysUntilWeekend('2025-12-06');
