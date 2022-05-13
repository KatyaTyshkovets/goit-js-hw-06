const btn = document.querySelector(".change-color");
const spanEl = document.querySelector('.color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart (6, 0)}`;
}
btn.addEventListener('click', handleColorChange);

function handleColorChange() {
  spanEl.textContent = getRandomHexColor();
  document.body.style.background = spanEl.textContent;
}