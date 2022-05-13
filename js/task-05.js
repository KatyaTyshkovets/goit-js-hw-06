
   const input = document.querySelector('#name-input');
const spanTextOutput = document.querySelector('#name-output');
   
input.addEventListener('input', onInputEvent);


function onInputEvent() {
    if (input.value === '') {
        spanTextOutput.textContent = "Anonymous";
    }
    else {
        spanTextOutput.textContent = input.value;
    }
};




