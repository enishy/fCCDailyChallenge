function launchFuel(payload) {
  let fuel = payload / 5,
    fuelTotal = fuel;
  while (fuel > 1) {
    fuel /= 5;
    fuelTotal += fuel;
  }
  return fuelTotal.toFixed(1);
}

launchFuel(50);
launchFuel(500);
launchFuel(243);
launchFuel(11000);
launchFuel(6214);

/*Rockets require 1 kg of fuel per 5 kg of mass they must lift.
Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.*/
