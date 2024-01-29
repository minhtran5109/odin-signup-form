const password = document.querySelector("#password");
const confirmP = document.querySelector("#cf-password");
const passwordError = document.querySelector(".error");

function checkPassword () {
    if (password.value === confirmP.value) {
        console.log("Match")
        passwordError.textContent = "";
    } else {
        console.log("Do not Match")
        passwordError.textContent = "* Passwords do not match"
    }
}

password.addEventListener('keyup', () => {
    if (password.value.length !== 0) checkPassword();
})

confirmP.addEventListener('keyup', () => {
    if (confirmP.value.length !== 0) checkPassword();
})