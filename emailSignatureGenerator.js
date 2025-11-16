function generateSignature(name, title, company) {
  /*  A-I: Use >> as the prefix.
    J-R: Use -- as the prefix.
    S-Z: Use :: as the prefix.*/
  let prefix = '';
  if (name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 73) {
    prefix = '>>';
  } else if (name.charCodeAt(0) >= 74 && name.charCodeAt(0) <= 82) {
    prefix = '--';
  } else {
    prefix = '::';
  }
  return prefix + name + ', ' + title + ' at ' + company;
}
generateSignature('Quinn Waverly', 'Founder and CEO', 'TechCo');
