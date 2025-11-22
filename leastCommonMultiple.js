function lcm(a, b) {
  let dv1 = [];
  let dv2 = [];
  for (let i = a * b; a <= i; i--) {
    if (i % a === 0) dv1.push(i);
  }
  for (let i = b * a; b <= i; i--) {
    if (i % b === 0) dv2.push(i);
  }
  const n = dv1.filter((ele) => dv2.includes(ele));
  return n[n.length - 1];
}

lcm(4, 6);
lcm(9, 6);
lcm(10, 100);
lcm(13, 17);
lcm(45, 70);
