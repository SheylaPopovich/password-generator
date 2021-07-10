// Assignment Code

// when button is clicked generate new password----event 
// clicked button triggers prompt series for password criteria----method retrieve or update object properties ----->  this performs a task.

//declare variable generateBtn ---> then assign a value
var generateBtn = document.querySelector("#generate");
var uppercaseLtr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLtr = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "1234567890";
var specialCharacters = "!”#$%&’()*+,-./:;=>?@[\]^_`{|}~";


//create function that will determine the length of the password
function chooseLength(){
  prompt("Choose password length must be a number between 8 to 128 characters")

  if((passwordLength > 8) && (passwordLength < 128)){
  //do this ---- >
  alert("Choose length of password between 8 and 128");
  //  do this ---- >
  } else(){

  }
  return ;
}


//user choose if upperCase or lowerCase ltrs in password
function chooseUpperCaseLtr(){
  prompt("Do you want uppercase letters in your password? (Type Yes or No)");

  if(true === uppercaseLtr){
    
  }  else() {
    alert()
    chooseUpperCaseLtr();
  }
  return ;
}



//user choose if numbers will be in password
function chooseNumbers(){
  prompt("Do you want numbers in your password?");

  if(){

  } else(){

  }
  return ;
}


//user choose (and/or) special characters will be in passwords
function chooseSpecial(){
  prompt("Do you want special characters in your password?");

  if(){

  } else(){

  }
  return ;
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//the function is only called on the last line of script
writePassword();


prompt("Enter Password Criteria");