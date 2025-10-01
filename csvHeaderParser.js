function getHeadings(csv) {
  let arr = csv.split(',');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }

  return arr;
}

getHeadings('name,age,city');
getHeadings('first name,last name,phone');
getHeadings('username , email , signup date ');
