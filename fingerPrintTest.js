function isMatch(fingerprintA, fingerprintB) {
  let dif_finger = 0;

  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] != fingerprintB[i]) dif_finger++;
  }

  if (
    dif_finger * 1.1 > fingerprintA.length * 0.1 + 0.1 ||
    fingerprintA.length != fingerprintB.length
  )
    return false;

  return true;
}

isMatch('helloworld', 'helloworld');
isMatch('helloworld', 'helloworlds');
isMatch('helloworld', 'jelloworld');
isMatch(
  'thequickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthelazydog'
);
isMatch(
  'theslickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthehazydog'
);
isMatch(
  'thequickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthehazycat'
);
