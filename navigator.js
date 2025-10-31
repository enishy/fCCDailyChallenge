function navigate(commands) {
  commands.unshift('Home');
  let index = 0,
    visited = ['Home'];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'Back' && visited.length != 1) {
      index -= 1;
    } else if (
      commands[i] === 'Forward' &&
      commands[i - 1] === 'Back' &&
      visited.length != 1
    ) {
      index += 1;
    } else if (/[Visit]/.test(commands[i])) {
      if (!visited.includes(commands[i])) {
        visited.push(commands[i]);
        index = visited.length - 1;
      }
    }
  }
  if (visited[index] != 'Home')
    return visited[index].substring(6, visited[index].length);
  else return visited[index];
}

navigate(['Visit About Us', 'Back', 'Forward']);
navigate(['Forward']);
navigate(['Back']);
navigate(['Visit About Us', 'Visit Gallery']);
navigate(['Visit About Us', 'Visit Gallery', 'Back', 'Back']);
navigate(['Visit About', 'Visit Gallery', 'Back', 'Visit Contact', 'Forward']);
navigate([
  'Visit About Us',
  'Visit Visit Us',
  'Forward',
  'Visit Contact Us',
  'Back',
]);
