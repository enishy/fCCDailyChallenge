function gcd(x, y) {
  let dv1 = [];
  let dv2 = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) dv1.push(i);
  }
  for (let i = 1; i <= y; i++) {
    if (y % i === 0) dv2.push(i);
  }
  const n = dv1.filter((ele) => dv2.includes(ele));
  return n[n.length - 1];
}

gcd(4, 6);
gcd(20, 15);
gcd(13, 17);
gcd(654, 456);
gcd(3456, 4320);
