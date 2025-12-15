function updateInventory(inventory, shipment) {
  let found = false;
  shipment.forEach((element) => {
    inventory.forEach((itemInventory) => {
      if (element[1] === itemInventory[1]) {
        itemInventory[0] += element[0];
        found = true;
      }
    });
    if (found === false) {
      inventory.push(element);
    }
    found = false;
  });
  return inventory;
}

updateInventory(
  [
    [2, 'apples'],
    [5, 'bananas'],
  ],
  [
    [1, 'apples'],
    [3, 'bananas'],
  ]
);
updateInventory(
  [
    [2, 'apples'],
    [5, 'bananas'],
  ],
  [
    [1, 'apples'],
    [3, 'bananas'],
    [4, 'oranges'],
  ]
);
updateInventory(
  [],
  [
    [10, 'apples'],
    [30, 'bananas'],
    [20, 'oranges'],
  ]
);
updateInventory(
  [
    [0, 'Bowling Ball'],
    [0, 'Dirty Socks'],
    [0, 'Hair Pin'],
    [0, 'Microphone'],
  ],
  [
    [1, 'Hair Pin'],
    [1, 'Half-Eaten Apple'],
    [1, 'Bowling Ball'],
    [1, 'Toothpaste'],
  ]
);
