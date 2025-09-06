function isValidIPv4(ipv4) {
  let regex = new RegExp(/^(([0-9]{1,3}\.){3}[0-9]{1,3})$/);
  if (regex.test(ipv4)) {
    let arInput = ipv4.split('.');
    for (let i of arInput) {
      if (i.length > 1 && i.charAt(0) === '0') return false;
      else {
        if (parseInt(i) < 0 || parseInt(i) >= 256) return false;
      }
    }
  } else return false;
  return true;
}
let r;
r = isValidIPv4('192.168.1.1');
r = isValidIPv4('0.0.0.0');
r = isValidIPv4('255.01.50.111');
r = isValidIPv4('255.00.50.111');
r = isValidIPv4('256.101.50.115');
r = isValidIPv4('192.168.101.');
r = isValidIPv4('192168145213');

/*Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.*/
