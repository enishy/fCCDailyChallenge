function verify(message, key, signature) {
  //A-38 a-96
  let count = 0;
  message.split('').forEach((ele) => {
    if (/[a-z]/.test(String.fromCharCode(ele.charCodeAt(0))))
      count += ele.charCodeAt(0) - 96;
    else if (/[A-Z]/.test(String.fromCharCode(ele.charCodeAt(0))))
      count += ele.charCodeAt(0) - 38;
  });
  key.split('').forEach((ele) => {
    if (/[a-z]/.test(String.fromCharCode(ele.charCodeAt(0))))
      count += ele.charCodeAt(0) - 96;
    else if (/[A-Z]/.test(String.fromCharCode(ele.charCodeAt(0))))
      count += ele.charCodeAt(0) - 38;
  });

  return count === signature;
}
verify('foo', 'bar', 57);
verify('foo', 'bar', 54);
verify('freeCodeCamp', 'Rocks', 238);
verify('Is this valid?', 'No', 210);
verify('Is this valid?', 'Yes', 233);
verify('Check out the freeCodeCamp podcast,', 'in the mobile app', 514);
