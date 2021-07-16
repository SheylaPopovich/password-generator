// Assignment Code
var generateBtn = document.querySelector("#generate");

//created arrays for each string of characters
var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCased= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//created variables to store user's selections
var passwordLength;
var answerUpper;
var numberInput;
var specialCharInput;


//created variables to produce output of generated password
let userPick = [];
let selectedPicks= [];
let finalPassword= [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
function generatePassword(){

  //add "if"/ "else if" statements for a password length response initiated a prompt method
  var passwordLength = prompt("Choose number between 8 to 128 for your password length.");
  if(passwordLength < 8){
    alert("Mischievous behavior! Please type a password length.");
    return

    } else if(passwordLength > 128){
    alert("Mischievous behavior! Please type a password length.");
    return

    } else{ alert("You have chosen your password length.");
    } 


    //used "confirm" method to return true boolean for "ok" and false boolean "cancel"
    var answerUpper = confirm("Do you want uppercase letters in your password? Click OK for yes and Cancel for no" );
    var answerLower = confirm("Do you want lowercase letters in your password? Click OK for yes and Cancel for no");
    var numberInput = confirm("Do you want numbers in your password? Click OK for yes and Cancel for no");
    var specialCharInput = confirm("Do you want special characters in your password? Click OK for yes and Cancel for no");


    //created an "if" conditional statement to perform an alert if conditions are all false 
    if(answerUpper === false && answerLower === false && numberInput === false && specialCharInput === false){
      alert("Choose a password criteria");
      return
    }


    //created "if" conditional statements to execute functions that calls character arrays
    if(answerUpper === true){
      userPick = userPick.concat(upperCased)
      selectedPicks.push(random(upperCased))
    }
    if(answerLower === true){
      userPick = userPick.concat(lowerCased)
      selectedPicks.push(random(lowerCased))
    }
    if(numberInput === true){
      userPick = userPick.concat(numeric)
      selectedPicks.push(random(numeric))
    }
    if(numberInput === true){
      specialCharInput = userPick.concat(special)
      selectedPicks.push(random(special))
    }
    //created "for loops" to execute functions to run until a certain condition is reached
    for (let i = 0; i < passwordLength; i++) {
      const element = passwordLength[i];
      var character = random(userPick)
      finalPassword.push(character)
     }
     for (let i = 0; i < selectedPicks.length; i++) {
       const element = selectedPicks[i];
       finalPassword[i] = selectedPicks[i]
    }

    //created a final password using ".join" method to create/return a new string by concatenating all of the elements in the array 
    return finalPassword.join("")
}

  //created a function that will output a random generated password using "Math.floor" and "Math.random"
  function random(array){
    var index = Math.floor(Math.random()* array.length)
    var randomElement = array[index]
    return randomElement
  }


  generateBtn.addEventListener("click", writePassword);
