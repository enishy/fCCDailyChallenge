function scaleRecipe(ingredients, scale) {
  let count = 0;
  ingredients.forEach((element) => {
    ingredients[count] = element.replace(
      element.split(' ')[0],
      element.split(' ')[0] * scale
    );
    count++;
  });
  return ingredients;
}

scaleRecipe(['2 C Flour', '1.5 T Sugar'], 2);
