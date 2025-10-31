function spookify(boo) {
  boo = boo.replace(/[_-]/g, '~');
  let count = 0,
    text = '';
  for (let i = 0; i < boo.length; i++) {
    if (count % 2 === 0) text += boo[i].toUpperCase();
    else text += boo[i].toLowerCase();
    if (boo[i] !== '~') count++;
  }
  return text;
}

spookify('hello_world');
spookify('Spooky_Case');
spookify('TRICK-or-TREAT');
spookify('c_a-n_d-y_-b-o_w_l');
spookify('thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts');
