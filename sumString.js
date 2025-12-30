function stringSum(str) {
    const numbers = str.match(/\d+/g);
    return numbers.reduce((acc,item)=>acc+Number(item),0)
}

stringSum("3apples2bananas")
stringSum("10cats5dogs2birds")
stringSum("125344")
stringSum("a1b20c300")
stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")