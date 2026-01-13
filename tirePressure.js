function tireStatus(pressuresPSI, rangeBar) {
    let status = ['Low', 'Good', 'High'];
    let statusTire = [];
    pressuresPSI.forEach(pressure => {
        pressure /= 14.5038
        if (pressure < rangeBar[0]) {
            statusTire.push(status[0]);
        } else if (pressure > rangeBar[1]) {
            statusTire.push(status[2]);
        } else {
            statusTire.push(status[1]);
        }
    });
    return statusTire;
}

tireStatus([32, 28, 35, 29], [2, 3])
tireStatus([32, 28, 35, 30], [2, 2.3])
tireStatus([29, 26, 31, 28], [2.1, 2.5])
tireStatus([31, 31, 30, 29], [1.5, 2])
tireStatus([30, 28, 30, 29], [1.9, 2.1])