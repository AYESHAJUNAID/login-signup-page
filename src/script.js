const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {

      var userData = {
        username: username.value,
        email_account: email_account.value,
        password_account: password_account.value,
      };

      if (
        username.value == "" ||
        email_account.value == "" ||
        password_account.value == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please fill your field",
          showConfirmButton: false,
          timer: 1500,
        });
        //   alert("plz fill your fields")
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
         container.classList.remove("active");
        // alert("account is created successfully")
      }

      var localData = localStorage.setItem("user", JSON.stringify(userData));
 
});

var username = document.getElementById("username");
var email_account = document.getElementById("email-account");
var password_account = document.getElementById("password-account");
var email = document.getElementById("email");
var password = document.getElementById("password");
var createAccount = document.getElementById("CreateAccount");
var login = document.getElementById("login-2");


login.addEventListener("click", function () {
  var getData = JSON.parse(localStorage.getItem("user"));
  if (getData.email_account === email.value && getData.password_account === password.value) {
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Login Successful",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // alert("Login Successful")
    login.innerHTML = `<a href="src/dashboard.html">login</a>`
     window.location.assign("./dashboard.html");

    // container.classList.remove("active");
  }
   else if (email.value == "" || password.value == "") {
    //  Swal.fire({
    //    icon: "error",
    //    title: "Oops...",
    //    text: "please fill your field",
    //    showConfirmButton: false,
    //    timer: 1500,
    //  });
    alert("plz fill your fields")
   } else {
     alert("Invalid username or password.");
   }
 
});

// function validateForm() {
//     var usernameValue = username.value;
//     var emailValue = email_account.value;
//     var passwordValue = password_account.value;
// }

// Add your form validation code here
