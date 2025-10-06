function sendMessage(route) {
  let initialValue = 0;
  let total = route.reduce((acc, cur) => acc + cur, initialValue);
  total /= 300000;
  total += (route.length - 1) * 0.5;
  total = total.toFixed(4);
  return parseFloat(total);
}

sendMessage([300000, 300000]);
sendMessage([384400, 384400]);
sendMessage([54600000, 54600000]);
sendMessage([1000000, 500000000, 1000000]);
sendMessage([10000, 21339, 50000, 31243, 10000]);
sendMessage([802101, 725994, 112808, 3625770, 481239]);
