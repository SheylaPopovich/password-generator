/*It's done when Last Registered User displays the last email and password saved using localStorage, if it exists.

It's done when, once the signUpButton is clicked, the email and password entered into the text boxes is saved using localStorage.

It's done when the information under Last Registered User is updated to reflect the data stored using localStorage.*/



var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // first step!!!!!!!!!!!!     TODO: Retrieve the last email and password and render it to the page
  let lastEmail = localStorage.getItem("email");
  let lastPwd = localStorage.getItem("password");
  
  if(!email || !password){
    return;
  }
    ////next step!!!!!!!!!!
userEmailSpan.textContent = email;
userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  

  // Second step!!!!!!!! TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  renderLastRegistered();
  }
});
