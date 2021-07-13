// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var answerUpper;
var numberInput;
var specialCharInput;
let userPick = [];

//Generator functions
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol(){
  const symbols = "!#$%&()*+,-./:;=>?@[\^{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Testing random functions
/*console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomSymbol());*/




//Prompt options using if and else if statements
function generatePassword(){
    function chooseLength(){
      passwordLength = prompt("Choose password length it must be a number between 8 to 128 characters long.");
      
     if(passwordLength < 8){
      alert("Choose a length between 8 and 128 characters long test1");
      chooseLength()

      } else if(passwordLength > 128){
      alert("Choose a length between 8 and 128 characters long test2");
      chooseLength()

      } else{ alert("You have chosen your password length please follow next prompts");
      } 
      return passwordLength;
    }

    chooseLength();

    function chooseUpperCaseLtr(){
      answerUpper = prompt("Do you want uppercase letters in your password. (Type Yes or No) Then click Ok.");

      if(answerUpper  === "Yes" || answerUpper === "yes"){
      alert("You selected Yes. Your password will include uppercase letters");
      

      } else if(answerUpper  === "No" || answerUpper  === "no"){
      alert("You selected No. Your password will not include uppercase letters");
      

      } else{ alert("You rebel, you! Please type Yes or No.");
      chooseUpperCaseLtr()
      } 
      return chooseUpperCaseLtr;
    }

    chooseUpperCaseLtr();

    function chooseNumbers(){
      numberInput = prompt("Do you want numbers in your password? (Type Yes or No)");
    
      if(numberInput === "Yes" || numberInput === "yes"){
        alert ("Your password will consist of numeric characters. You will now be prompted to choose special characters");
            
      } else if (numberInput === "No" || numberInput === "no"){
        alert("Your password will not consist of numeric characters. You will now be prompted to choose special characters");
          
      } else{ alert ("Mischievous behavior! Please type Yes or No.");
      chooseNumbers()
      } 
      return chooseNumbers;
    }
    chooseNumbers();

    const chooseSpecial = () => {
      specialCharInput = prompt("Do you want special characters in your password?");
    
      if(specialCharInput === "Yes" || specialCharInput === "yes"){
        alert ("Your password will consist of special characters.");
              
      } else if (specialCharInput === "No" || specialCharInput === "no"){
        alert ("Your password will not consist of special characters.");

      } else{ alert ("Mischievous behavior! Please type Yes or No.");
      chooseSpecial()
      }    
      return chooseSpecial;
    }
    chooseSpecial();
}

generatePassword();


for(var i=0; i <getRandomUpper.length; i++){
  userPick.push(getRandomUpper[1]);
}

for(var i=0; i <getRandomLower.length; i++){
  userPick.push(getRandomLower[1]);
}

for(var i=0; i <getRandomNumber.length; i++){
  userPick.push(getRandomNumber[1]);
}

for(var i=0; i <getRandomSymbol.length; i++){
  userPick.push(getRandomSymbol[1]);
}

var passwordResult = [];
for(i=0; i < passwordResult; i++){
  passwordResult.push(userPick[Math.floor(Math.random()* userPick.length)]);
}




// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
