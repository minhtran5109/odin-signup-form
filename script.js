const form = document.getElementById("form");

const password = document.querySelector("#password");
const confirmP = document.querySelector("#cf-password");
const passwordError = document.querySelector("#password + div.error");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const fnameError = document.querySelector("#fname + div.error");
const lnameError = document.querySelector("#lname + div.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + div.error");

function checkPasswordMatch() {
  if (password.value === confirmP.value) {
    console.log("Match");
    passwordError.textContent = "";
  } else {
    console.log("Do not Match");
    passwordError.textContent = "* Passwords do not match";
  }
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    checkPasswordMatch();
  } else {
    showPasswordError(password);
  }
});

confirmP.addEventListener("input", () => {
  if (confirmP.validity.valid) {
    passwordError.textContent = "";
    checkPasswordMatch();
  } else {
    showPasswordError(confirmP);
  }
});

function showPasswordError(p) {
  if (p.validity.valueMissing) {
    passwordError.textContent = "Password is required.";
  } else if (p.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${p.minLength} characters; you entered ${p.value.length}.`;
  }
}

fname.addEventListener("input", () => {
  if (fname.validity.valid) {
    fnameError.textContent = "";
  } else {
    if (fname.validity.valueMissing) {
      fnameError.textContent = "First name is required.";
    }
  }
});

lname.addEventListener("input", () => {
  if (lname.validity.valid) {
    lnameError.textContent = "";
  } else {
    if (lname.validity.valueMissing) {
      lnameError.textContent = "Last name is required.";
    }
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email Address is required.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("High Five!");
});
