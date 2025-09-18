function costToFill(tankSize, fuelLevel, pricePerGallon) {
  return '$' + ((tankSize - fuelLevel) * pricePerGallon).toFixed(2);
}

costToFill(20, 0, 4.0);
costToFill(15, 10, 3.5);
costToFill(18, 9, 3.25);
costToFill(12, 12, 4.99);
costToFill(15, 9.5, 3.98);
