function format(seconds) {
  let hours = Math.floor(seconds / 3600);
  if (hours > 0) seconds -= hours * 3600;
  let minutes = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  if (hours > 0) minutes = minutes.toString().padStart(2, '0');
  if (minutes === 0 && sec < 9) sec = sec.toString().padStart(2, '0');

  if (hours > 0) return `${hours}:${minutes}:${sec}`;
  else return `${minutes}:${sec}`;
}

format(500);
format(4000);
format(1);
format(5555);
format(99999);
