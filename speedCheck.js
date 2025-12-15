function speedCheck(speedMph, speedLimitKph) {
  const speedKph = speedMph * 1.60934;
  if (speedKph <= speedLimitKph) return 'Not Speeding';
  else if (speedKph <= speedLimitKph + 5) return 'Warning';
  else if (speedKph > speedLimitKph + 5) return 'Ticket';
}

speedCheck(30, 70);
speedCheck(40, 60);
speedCheck(40, 65);
speedCheck(60, 90);
speedCheck(65, 100);
speedCheck(88, 40);
