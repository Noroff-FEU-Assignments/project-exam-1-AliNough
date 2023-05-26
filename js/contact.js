const formEl = document.querySelector("#js-form");
const fnameEl = document.querySelector("#js-fname-input");
const lnameEl = document.querySelector("#js-lname-input");
const nameGrEl = document.querySelector("#js-name-gr");
const emailEl = document.querySelector("#js-email-input");
const txtBoxEl = document.querySelector("#js-txt-area-input");

const nameErrEl = document.querySelector("#js-form-name-err-msg");
const emailErrEl = document.querySelector("#js-email-form-err-msg");
const txtBoxErrEl = document.querySelector("#js-txt-box-err-msg");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = fnameEl.value;
  const lname = lnameEl.value;
  const email = emailEl.value;
  const txtBox = txtBoxEl.value;

  if (lname === "" || fname === "") {
    alert("Please enter your name");
    return;
  }

  if (email === "") {
    alert("Please enter an email");
    return;
  }

  if (txtBox.length < 9) {
    alert("Please write a message. Minimum 9 characters");
    return;
  }

  alert("Message sent!");
});

fnameEl.addEventListener("blur", (e) => {
  const fname = fnameEl.value.trim().toLowerCase();
  const regX = /^[a-zA-Z]{2,}/;
  const errMsg = "Invalid name: minimum 2 letters";

  validator(e.target, fname, regX, errMsg, nameErrEl);
});

lnameEl.addEventListener("blur", (e) => {
  const lname = lnameEl.value.trim().toLowerCase();
  const regX = /^[a-zA-Z]{2,}/;
  const errMsg = "Invalid name: minimum 2 letters";

  validator(e.target, lname, regX, errMsg, nameErrEl);
});

emailEl.addEventListener("blur", (e) => {
  const email = emailEl.value.trim().toLowerCase();
  //   ---- NOTE:Email Validation as per RFC2822 standards. ----
  //   ---- by Tripleaxis ----
  const regX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const errMsg = "Invalid email. example: name@example.com";
  validator(e.target, email, regX, errMsg, emailErrEl);
});

txtBoxEl.addEventListener("blur", (e) => {
  const txtBox = txtBoxEl.value.trim();
  const regX = /^[a-zA-Z]{9,}/;
  const errMsg = "Invalid message: minimum 9 characters";
  validator(e.target, txtBox, regX, errMsg, txtBoxErrEl);
});

function validator(field, inp, regX, msg, errField) {
  console.log(field.parentNode.closest("#js-form-err-msg"));
  if (regX.test(inp)) {
    field.classList.add("inp-pass");
    field.classList.remove("inp-err");
    errField.innerHTML = "";
  } else {
    field.classList.remove("inp-pass");
    field.classList.add("inp-err");
    displayMsg(errField, msg);
  }
}

function displayMsg(field, msg) {
  field.innerHTML = "";
  field.innerHTML = msg;
  field.classList.add("show-err-msg");
}
