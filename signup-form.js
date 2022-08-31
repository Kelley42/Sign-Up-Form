const email = document.getElementById("user-email")

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am ecpecting an email address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});