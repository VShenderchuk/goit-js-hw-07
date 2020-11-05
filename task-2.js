const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = ingredients.map(function (ingredient) {
  const listItems = document.createElement("li");
  listItems.textContent = ingredient;
  return listItems;
});
console.log(ingredientsList);
document.querySelector('#ingredients').append(...ingredientsList);