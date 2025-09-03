function isValidNumber(n, base) {
  const number = base - 1;

  switch (number) {
    case 1:
      return n.match(/[^A-Za-z2-9]/g).length == n.length;
      break;
    case 7:
      return n.match(/[^A-Za-z8-9]/g).length == n.length;
      break;
    case 9:
      if (
        n.match(/[^A-Za-z]/gi) === null ||
        n.match(/[^A-Za-z]/gi) === undefined
      )
        return false;
      return n.match(/[^A-Za-z]/gi).length === n.length;
      break;
    case 15:
      return n.match(/[^G-Zg-z]/g).length == n.length;
      break;
    case 16:
      return n.match(/[^H-Zh-z]/g).length == n.length;
      break;
    case 19:
      return n.match(/[^K-Zk-z]/g).length == n.length;
      break;
    case 35:
      return n.match(/[A-Za-z0-9]/g).length == n.length;
      break;
  }

  return n;
}

isValidNumber('ABC', 10);
