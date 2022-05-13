const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', () => {
    const meaningInput = inputEl.value;
    textEl.style.fontSize = meaningInput + 'px';
});

