function hasExoplanet(readings) {
  let total = 0,
    isExoPlanet = false;
  for (let i = 0; i < readings.length; i++) {
    if (/[A-Z]/.test(readings[i]))
      total += parseInt(readings[i].charCodeAt(0)) - 55;
    else total += parseInt(readings[i]);
  }

  total /= readings.length;
  total *= 0.8;

  for (let i = 0; i < readings.length; i++) {
    if (/[A-Z]/.test(readings[i])) {
      if (parseInt(readings[i].charCodeAt(0)) - 55 <= total) isExoPlanet = true;
    } else if (parseInt(readings[i]) <= total) {
      isExoPlanet = true;
    }
  }

  return isExoPlanet;
}

hasExoplanet('665544554');
hasExoplanet('FGFFCFFGG');
hasExoplanet('MONOPLONOMONPLNOMPNOMP');
hasExoplanet('FREECODECAMP');
hasExoplanet('9AB98AB9BC98A');
hasExoplanet('ZXXWYZXYWYXZEGZXWYZXYGEE');
