const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector('#value');

const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1
    },
    increment() {
        this.value += 1
    },
};

addBtn.addEventListener('click', () => {
    counterEl.textContent = counterValue.value
    counterValue.increment()
});

removeBtn.addEventListener('click', () => {
    counterEl.textContent = counterValue.value
    counterValue.decrement()
});

