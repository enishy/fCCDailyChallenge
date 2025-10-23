function adjustThermostat(currentF, targetC) {
  const CtoF = targetC * 1.8 + 32;
  if (currentF < CtoF)
    return `Heat: ${(CtoF - currentF).toFixed(1)} degrees Fahrenheit`;
  else if (currentF > CtoF)
    return `Cool: ${(currentF - CtoF).toFixed(1)} degrees Fahrenheit`;
  else return 'Hold';
}

adjustThermostat(32, 0);
adjustThermostat(70, 25);
adjustThermostat(72, 18);
adjustThermostat(212, 100);
adjustThermostat(59, 22);
