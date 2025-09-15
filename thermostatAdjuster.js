function adjustThermostat(temp, target) {
  if (temp < target) {
    return 'heat';
  } else if (temp > target) {
    return 'cool';
  } else {
    return 'hold';
  }
}

adjustThermostat(68, 72);
adjustThermostat(75, 72);
adjustThermostat(72, 72);
adjustThermostat(-20.5, -10.1);
adjustThermostat(100, 99.9);
adjustThermostat(0.0, 0.0);
