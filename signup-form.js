const first_password = document.querySelector("#user-password");
const second_password = document.querySelector("#user-confirm-password");
const button = document.querySelector("#submit");
const password_error = document.querySelector("span.error");

function showError() {
    if (first_password.value != second_password.value) {
        password_error.textContent = "* Passwords do not match"
    }
}


button.addEventListener("click", showError)
