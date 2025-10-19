function sockPairs(pairs, cycles) {
  let total_socks = pairs * 2;
  for (let index = 1; index <= cycles; index++) {
    if (index % 2 === 0) total_socks--;
    if (index % 3 === 0) total_socks++;
    if (index % 5 === 0) total_socks--;
    if (index % 10 === 0) total_socks += 2;
  }
  total_socks = Math.floor(total_socks / 2);
  if (total_socks < 0) total_socks = 0;
  return total_socks;
}

sockPairs(2, 5);
sockPairs(1, 2);
sockPairs(5, 11);
sockPairs(6, 25);
sockPairs(1, 8);

/*Every 2 = -1 wash cycles, you lose a single sock. --totalSocks-1
Every 3 = +1 wash cycles, you find a single missing sock. --totalSocks+1
Every 5 = -1 wash cycles, a single sock is worn out and must be thrown away. --totalSocks-1
Every 10 = +2 wash cycles, you buy a pair of socks. --totalSocks+2
*/
