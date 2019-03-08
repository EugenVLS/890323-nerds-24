var request = document.querySelector(".modal-request");
var link = document.querySelector(".request-btn");
var close = request.querySelector(".modal-close");
var login = request.querySelector("[name=login]");
var mail = request.querySelector("[name=mail]");
var text = request.querySelector("[name=text]");
var form = request.querySelector("form");
link.addEventListener("click", function (evt) {
evt.preventDefault();
request.classList.add("modal-show");
login.focus();
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value || !text.value) {
    evt.preventDefault();
    request.classList.add("modal-error");
    }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
request.classList.remove("modal-show");
request.classList.remove("modal-error");
});