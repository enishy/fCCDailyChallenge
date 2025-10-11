function moonPhase(dateString) {
  const ref_date = new Date('2000-01-06');
  const given_date = new Date(dateString);

  // Calculate the difference in days
  const ms_per_day = 24 * 60 * 60 * 1000;
  const days_passed = Math.floor((given_date - ref_date) / ms_per_day);

  // Day within the lunar cycle (1 to 28)
  const cycle_day = (days_passed % 28) + 1;

  if (cycle_day >= 1 && cycle_day <= 7) {
    return 'New';
  } else if (cycle_day >= 8 && cycle_day <= 14) {
    return 'Waxing';
  } else if (cycle_day >= 15 && cycle_day <= 21) {
    return 'Full';
  } else if (cycle_day >= 22 && cycle_day <= 28) {
    return 'Waning';
  }
}

moonPhase('2000-01-12');
moonPhase('2000-01-13');
moonPhase('2014-10-15');
moonPhase('2012-10-21');
moonPhase('2022-12-14');
