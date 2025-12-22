function daylightHours(latitude) {
  const daylight = {
    '-90': 24,
    '-75': 23,
    '-60': 21,
    '-45': 15,
    '-30': 13,
    '-15': 12,
    0: 12,
    15: 11,
    30: 10,
    45: 9,
    60: 6,
    75: 2,
    90: 0,
  };
  // Convert keys to numbers
  const latitudes = Object.keys(daylight).map(Number); // Find the closest latitude
  let closest = latitudes[0];
  for (let lat of latitudes) {
    if (Math.abs(latitude - lat) < Math.abs(latitude - closest)) {
      closest = lat;
    }
  }
  return daylight[closest];
}

daylightHours(45);
daylightHours(0);
daylightHours(-90);
daylightHours(-10);
daylightHours(23);
daylightHours(88);
daylightHours(-33);
daylightHours(70);
