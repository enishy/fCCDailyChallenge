function getNumberOfPlants(fieldSize, unit, crop) {
    // Conversión de unidades a metros cuadrados
const area = unit === "acres"
        ? fieldSize * 4046.86
        : fieldSize * 10000; // hectáreas
      // Espacio requerido por cultivo
const spacePerPlant = {
        corn: 1,
        wheat: 0.1,
        soybeans: 0.5,
        tomatoes: 0.25,
        lettuce: 0.2
};

    // Cálculo de plantas posibles
const plants = Math.floor(area / spacePerPlant[crop]);

    return plants;
}