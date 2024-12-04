var uName = document.getElementById("name");
var email = document.getElementById("mail");
var password = document.getElementById("password");
var alertFill = document.querySelector(".sign-up .alert");
var alertSuccess = document.querySelector(".sign-up .alert3");
var signUpBtn = document.querySelector(".sign-up-btn");
var loginPage = document.querySelector(".login-page");
var users = [];
users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
  var user = {
    userName: uName.value,
    userEmail: email.value,
    userPassword: password.value,
  };
  function checkExist() {
    if (users.length > 0) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].userEmail == email.value) {
                alertFill.classList.remove("d-none");
                return false;
            }
        }
    }
    alertFill.classList.add("d-none");
    return true;
  }
  if (uName.value && email.value && password.value && checkExist()) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alertFill.classList.add("d-none");
    alertSuccess.classList.remove("d-none");
    alertFill.classList.add("d-none");
  } else {
    alertFill.classList.remove("d-none");
    alertSuccess.classList.add("d-none");
  }
}

signUpBtn.addEventListener("click", function () {
  signUp();
});

loginPage.addEventListener("click", function () {
  window.location.href = "index.html";
});



