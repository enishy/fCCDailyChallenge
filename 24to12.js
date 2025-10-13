function to12(time) {
  time = time[0] + time[1] + ':' + time[2] + time[3];
  const timeString = time;
  // Prepend any date. Use your birthday.
  const timeString12hr = new Date(
    '1970-01-01T' + timeString + 'Z'
  ).toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  return timeString12hr;
}
to12('1124');
to12('0030');
to12('0900');
