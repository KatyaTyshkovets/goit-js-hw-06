
const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

const onValidInputClick = element => {
  const textLength = element.target.value.length;
  if (textLength == inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};
inputRef.addEventListener("blur", onValidInputClick);

