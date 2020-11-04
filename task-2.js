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
const ulList = document.querySelector("ul");
ulList.append(ingredientsList);
console.log(ulList);
