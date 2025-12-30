function sumDivisors(n) {
    let total=0;
    for(let i=0;i<=n;i++){
      if(n%i===0)
        total+=i;
    }
    return total;
}
 
sumDivisors(6)
sumDivisors(13)
sumDivisors(28)
sumDivisors(84)
sumDivisors(549)
sumDivisors(9348)