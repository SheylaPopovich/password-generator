// Assignment Code

// when button is clicked generate new password----event 
// clicked button triggers prompt series for password criteria----method retrieve or update obeject properties ----->  this performs a task.

//declare variable generateBtn ---> then assign a value
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    