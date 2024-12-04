var email = document.getElementById("mail");
var password = document.getElementById("password");
var loginBtn = document.querySelector(".login-btn");
var signUpPage = document.querySelector(".sign-up-page");
var alertMsg = document.querySelector(".login .alert");
var users = [];
users = JSON.parse(localStorage.getItem("users")) || [];

function signIn() {
  var inputEmail = email.value;
  var inputPassword = password.value;
  var getUsers = JSON.parse(localStorage.getItem("users"))||[];
  if(getUsers.length > 0){
    for (var i = 0; i < getUsers.length; i++) {
      if (
        inputEmail == getUsers[i].userEmail &&
        inputPassword == getUsers[i].userPassword
      ) {
        var nameSend = getUsers[i].userName;
        localStorage.setItem("sname", nameSend);
        window.location.href = "welcome.html";
      } else {
        alertMsg.classList.remove("d-none");
      }
    }
  }
}

loginBtn.addEventListener("click", function () {
  signIn();
});

signUpPage.addEventListener("click", function () {
  window.location.href = "signup.html";
});
