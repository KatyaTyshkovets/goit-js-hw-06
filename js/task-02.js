const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");

const createUlElements = (ingredient) =>
{
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  ulRef.append(list);
}


ingredients.forEach((ingredient) => createUlElements(ingredient));



