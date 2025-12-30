function fuelToAdd(currentGallons, requiredLiters) {
    const gallonsToLiters = currentGallons*3.78541;
    let total = Math.ceil((requiredLiters-gallonsToLiters)/3.78541);
    return total<0 ? total=0 : total;
}

fuelToAdd(0, 1)
fuelToAdd(5, 40)
fuelToAdd(10, 30)
fuelToAdd(896, 20500)
fuelToAdd(1000, 50000)