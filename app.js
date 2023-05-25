const input = document.querySelector("#input");
const errText = document.querySelector("#er-text");

input.addEventListener("invalid", function () {

    input.classList.add("error")
    if (input.value == "") {
        errText.innerText = "Whoops! It looks like you forgot to add your email"
    } else {
        errText.innerText = "Please provide a valid email address"
    }
})