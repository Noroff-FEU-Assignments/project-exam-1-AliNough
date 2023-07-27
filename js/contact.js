const formEl = document.querySelector("#js-form");
const fnameEl = document.querySelector("#js-fname-input");
const lnameEl = document.querySelector("#js-lname-input");
const nameGrEl = document.querySelector("#js-name-gr");
const emailEl = document.querySelector("#js-email-input");
const txtBoxEl = document.querySelector("#js-txt-area-input");
const submitBtnEle = document.querySelector("#js-submit-btn");

const nameErrEl = document.querySelector("#js-form-name-err-msg");
const emailErrEl = document.querySelector("#js-email-form-err-msg");
const txtBoxErrEl = document.querySelector("#js-txt-box-err-msg");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = fnameEl.value;
  const lname = lnameEl.value;
  const email = emailEl.value;
  const txtBox = txtBoxEl.value;

  if (lname === "" || fname === "" || email === "" || txtBox.length < 9) {
    alert("Please fill in all the required fields correctly");
    return;
  }

  alert("Message sent!");
});

fnameEl.addEventListener("blur", (e) => {
  const fname = fnameEl.value.trim().toLowerCase();
  const regX = /^[a-zA-Z]{2,}/;
  const errMsg = "Invalid name: minimum 2 letters";

  validator(e.target, fname, regX, errMsg, nameErrEl);
  updateSubmitButton();
});

lnameEl.addEventListener("blur", (e) => {
  const lname = lnameEl.value.trim().toLowerCase();
  const regX = /^[a-zA-Z]{2,}/;
  const errMsg = "Invalid name: minimum 2 letters";
  validator(e.target, lname, regX, errMsg, nameErrEl);
  updateSubmitButton();
});

emailEl.addEventListener("blur", (e) => {
  const email = emailEl.value.trim().toLowerCase();
  //   ---- NOTE:Email Validation as per RFC2822 standards. ----
  //   ---- by Tripleaxis ----
  const regX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const errMsg = "Invalid email. example: name@example.com";
  validator(e.target, email, regX, errMsg, emailErrEl);
  updateSubmitButton();
});

txtBoxEl.addEventListener("blur", (e) => {
  const txtBox = txtBoxEl.value.trim();
  const regX = /^.{9,}/;
  const errMsg = "Invalid message: minimum 9 characters";
  validator(e.target, txtBox, regX, errMsg, txtBoxErrEl);
  updateSubmitButton();
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

function updateSubmitButton() {
  const isValid =
    fnameEl.classList.contains("inp-pass") &&
    lnameEl.classList.contains("inp-pass") &&
    emailEl.classList.contains("inp-pass") &&
    txtBoxEl.classList.contains("inp-pass");

  if (isValid) {
    submitBtnEle.classList.add("btn-on-scs");
  } else {
    submitBtnEle.classList.remove("btn-on-scs");
  }
}
