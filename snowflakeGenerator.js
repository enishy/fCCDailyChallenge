function generateSnowflake(crystals) {
    return crystals.split('\n') // Split into lines 
    .map(line => line + [...line].reverse().join('')) // Mirror each line 
    .join('\n');
}

generateSnowflake("* \n *\n* ")
generateSnowflake("X=~")
generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ")
generateSnowflake("*   *\n * * \n* * *\n * * \n*   *")
generateSnowflake("*  -\n * -\n*  -")