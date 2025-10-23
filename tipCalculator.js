function calculateTips(mealPrice, customTip) {
  let returnPrice = [];
  mealPrice = parseFloat(mealPrice.replace('$', ''));
  customTip = parseFloat(customTip.replace('%', '') / 100);

  returnPrice.push(
    '$' + (mealPrice * 0.15).toFixed(2),
    '$' + (mealPrice * 0.2).toFixed(2),
    '$' + (mealPrice * customTip).toFixed(2)
  );
  return returnPrice;
}

calculateTips('$10.00', '25%');
calculateTips('$89.67', '26%');
calculateTips('$19.85', '9%');
