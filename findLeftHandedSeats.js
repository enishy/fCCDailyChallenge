function findLeftHandedSeats(table) {
    let leftHandedSeats = 0;
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            //Mesa arriba
            if (i === 0) {
                if ((table[i][j] === "U" && (table[i][j + 1] === "U" || table[i][j + 1] === "L")) || (table[i][j] === "U" && ((i === 0 && j === table[i].length - 1) || table[i][j + 1] === "L" || table[i][j + 1] === "U"))) {
                    leftHandedSeats++;
                }
            }
                //Mesa abajo
            if (i === 1) {
                if ((table[i][j] === "U" && (table[i][j - 1] === "U" || table[i][j - 1] === "L")) || (table[i][j] === "U" && ((i === 1 && j === 0)))) {
                    leftHandedSeats++;
                }
            }
        }
    }
    return leftHandedSeats;
}

findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]])
findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]])
findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]])
findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]])
findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]])