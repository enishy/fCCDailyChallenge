function buyItems(funds, items) {
  const table_convert = {
    USD: 1.0,
    EUR: 1.1,
    GBP: 1.25,
    JPY: 0.007,
    CAD: 0.75,
  };

  let total = 0,
    value = '';
  let money = parseFloat(funds[0]) * table_convert[funds[1]];

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const cost = parseFloat(element[0]) * table_convert[element[1]];

    if (money - cost < 0) break;
    else {
      money -= cost;
      total++;
    }
  }

  if (total === items.length) return 'Buy them all!';
  else return `Buy the first ${total} items.`;
}

buyItems(
  ['150.00', 'USD'],
  [
    ['50.00', 'USD'],
    ['75.00', 'USD'],
    ['30.00', 'USD'],
  ]
);
buyItems(
  ['200.00', 'EUR'],
  [
    ['50.00', 'USD'],
    ['50.00', 'USD'],
  ]
);
buyItems(
  ['100.00', 'CAD'],
  [
    ['20.00', 'USD'],
    ['15.00', 'EUR'],
    ['10.00', 'GBP'],
    ['6000', 'JPY'],
    ['5.00', 'CAD'],
    ['10.00', 'USD'],
  ]
);
buyItems(
  ['5000', 'JPY'],
  [
    ['3.00', 'USD'],
    ['1000', 'JPY'],
    ['5.00', 'CAD'],
    ['2.00', 'EUR'],
    ['4.00', 'USD'],
    ['2000', 'JPY'],
  ]
);
buyItems(
  ['200.00', 'USD'],
  [
    ['50.00', 'USD'],
    ['40.00', 'EUR'],
    ['30.00', 'GBP'],
    ['5000', 'JPY'],
    ['25.00', 'CAD'],
    ['20.00', 'USD'],
  ]
);
