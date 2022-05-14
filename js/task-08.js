
const form = document.querySelector('.login-form');



function submitHandle(e) {
  e.preventDefault();
  const isValidForm = [...e.target.elements]
    .filter((el) => el.tagName === "INPUT")
    .some((el) => el.value === "");
  
  if (!isValidForm) {
    const obj = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
     
    console.log(obj);
    e.currentTarget.reset();
  }
  else {
    alert("Please fill in all the fields!");
}
}
form.addEventListener("submit", submitHandle);
