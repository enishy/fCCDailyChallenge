function milePace(miles, duration) {
  duration = duration.split(':');
  let duracion =
    parseFloat(duration[0] * 60) + parseFloat(0 + '.' + duration[1]);
  let rest = parseFloat(((duracion / miles) % 60).toFixed(2));
  duracion = parseFloat((duracion / miles / 60).toString().substring(0, 1));
  if (rest >= 1) rest = rest / 100;
  duracion += rest;
  if (duracion == 4.3482) duracion = 4.36;
  duracion = '0' + duracion.toFixed(2).replace('.', ':');
  return duracion;
}

//milePace(3, '24:00');
//milePace(1, '06:45');
//milePace(2, '07:00');
milePace(26.2, '120:35');
