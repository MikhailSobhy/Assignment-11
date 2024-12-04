var logout = document.querySelector(".header .logout");
logout.addEventListener("click", function () {
  window.location.href = "index.html";
});
var users = [];
users = JSON.parse(localStorage.getItem("users")) || [];
var nameReceive = localStorage.getItem("sname");
document.querySelector(".welcome").innerHTML = `<h1>Welcome ${nameReceive}</h1>`;
