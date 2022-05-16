const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");

const createUlElements = ingredients.map(ingredient => {

  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list
})





ulRef.append(...createUlElements);
