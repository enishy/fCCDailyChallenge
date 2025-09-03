/*function getLaptopCost(laptops, budget) {
  let results = [];
  for (let i = 0; i < laptops.length; i++) {
    if (laptops[i] <= budget && !results.includes(laptops[i]))
      results.push(laptops[i]);
  }
  results = results.sort();
  if (results.length > 1) return results[results.length - 1];
  else return 0;
}*/
function getLaptopCost(laptops, budget) {
  let sortArr = [...new Set(laptops)].sort((a, b) => b - a);
  console.log(sortArr);
  let moreExpensive = sortArr.filter((num) => num > budget);
  let affordable = sortArr.filter((num) => num <= budget);

  if (moreExpensive.length && affordable.length) return affordable[0];
  if (moreExpensive.length === 0) return affordable[1];
  return 0;
}

getLaptopCost([1500, 2000, 1800, 1400], 1900);
getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900);
getLaptopCost([2099, 1599, 1899, 1499], 2200);
getLaptopCost([2099, 1599, 1899, 1499], 1000);
getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450);
