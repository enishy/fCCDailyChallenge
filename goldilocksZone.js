function goldilocksZone(mass) {
  //Raising its mass to the power of 3.5
  mass **= 3.5;
  //Square root of mass
  mass = Math.sqrt(mass);
  //Multiply mass by start of the zone(0.95) and end of the zone(1.37) and return array rounded to two decimal places.
  return [
    parseFloat((0.95 * mass).toFixed(2)),
    parseFloat((1.37 * mass).toFixed(2)),
  ];
}

goldilocksZone(1);
goldilocksZone(0.5);
goldilocksZone(6);
goldilocksZone(3.7);
goldilocksZone(20);
