function toSnake(camel) {
  let arr_str = '';
  Array.from(camel).forEach((element) => {
    if (element.search(/[A-Z]/) !== -1) {
      arr_str += '_';
      arr_str += element.toLowerCase();
    } else arr_str += element.toLowerCase();
  });

  return arr_str;
}

toSnake('helloWorld');
toSnake('myVariableName');
toSnake('freecodecampDailyChallenges');
