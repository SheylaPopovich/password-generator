//declare variable generateBtn ---> then assign a value
var generateBtn = document.querySelector("#generate");

/*var uppercaseLtr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLtr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","=",">","?","@","[","\","^",","{","|","}","~",";"]
var passwordLength = "";
var userInput;
var numberInput;
var specialCharInput;*/


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};


//Generator functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}


function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol(){
  const symbols = "!#$%&()*+,-./:;=>?@[\^{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());




/*//create function that will determine the length of the password
function chooseLength(){
  passwordLength =  prompt("Choose password length must be a number between 8 to 128 characters.");
  
  if(passwordLength < 8){
  alert("Choose a length between 8 and 128 characters long test1");
  chooseLength();

  } else if(passwordLength > 128){
  alert("Choose a length between 8 and 128 characters long test2");
  chooseLength();

  } else{
    alert("You have chosen your password length please follow next prompts");
  } 
  return passwordLength;
}

  chooseLength(passwordLength); 


//user choose if upperCase or lowerCase letters in password
function chooseUpperCaseLtr(){
  userInput = prompt("Do you want uppercase letters in your password? (Type Yes or No)");

  if((userInput === "Yes" || userInput === "yes")){
    alert ("Your password will consist of uppercase letters. You will now be prompted to choose numeric characters");
   
  } else{(userInput === "No" || userInput === "no");
    alert ("Your password will not consist of uppercase letters. You will now be prompted to choose numeric characters");
  }
    return chooseUpperCaseLtr;
  }
 
  chooseUpperCaseLtr(userInput);


//user choose if numbers will be in password
function chooseNumbers(){
  numberInput = prompt("Do you want numbers in your password? (Type Yes or No)");

  if((numberInput === "Yes" || numberInput === "yes")){
    alert ("Your password will consist of numeric characters. You will now be prompted to choose special characters");
        
  } else{(numberInput === "No" || numberInput === "no");
    alert ("Your password will not consist of numeric characters. You will now be prompted to choose special characters");
  }    
  return chooseNumbers;
}

chooseNumbers(numberInput);




//user choose (and/or) special characters will be in passwords
function chooseSpecial(){
  specialCharInput = prompt("Do you want special characters in your password?");

  if((specialCharInput === "Yes" || specialCharInput === "yes")){
    alert ("Your password will consist of special characters.");
    
    
  } else(specialCharInput === "No" || specialCharInput === "no");
    alert ("Your password will not consist of special characters.");
     
  return chooseSpecial;
}

chooseSpecial(specialCharInput);*/

function generatePassword(){
   

  function chooseLength(){
    passwordLength = prompt("Choose password length must be a number between 8 to 128 characters.");
    
    if(passwordLength < 8){
    alert("Choose a length between 8 and 128 characters long test1");
    chooseLength();
  
    } else if(passwordLength > 128){
    alert("Choose a length between 8 and 128 characters long test2");
    chooseLength();
  
    } else{
      alert("You have chosen your password length please follow next prompts");
    } 
    return passwordLength;
  }
  
    chooseLength(); 

    function chooseUpperCaseLtr(){
      userInput = prompt("Do you want uppercase letters in your password? (Type Yes or No)");
    
      if((userInput === "Yes" || userInput === "yes")){
        alert ("Your password will consist of uppercase letters. You will now be prompted to choose numeric characters");
       
      } else{(userInput === "No" || userInput === "no");
        alert ("Your password will not consist of uppercase letters. You will now be prompted to choose numeric characters");
      }
        return chooseUpperCaseLtr;
      }
     
      chooseUpperCaseLtr(); 

      function chooseNumbers(){
        numberInput = prompt("Do you want numbers in your password? (Type Yes or No)");
      
        if((numberInput === "Yes" || numberInput === "yes")){
          alert ("Your password will consist of numeric characters. You will now be prompted to choose special characters");
              
        } else{(numberInput === "No" || numberInput === "no");
          alert ("Your password will not consist of numeric characters. You will now be prompted to choose special characters");
        }    
        return chooseNumbers;
      }
      
      chooseNumbers();

      function chooseSpecial(){
        specialCharInput = prompt("Do you want special characters in your password?");
      
        if((specialCharInput === "Yes" || specialCharInput === "yes")){
          alert ("Your password will consist of special characters.");
          
          
        } else(specialCharInput === "No" || specialCharInput === "no");
          alert ("Your password will not consist of special characters.");
           
        return chooseSpecial;
      }
       
}
 
  generatePassword();

      // Write password to the #password input
      function writePassword() {
        var password = generatePassword( uppercaseLtr, lowercaseLtr);
        var passwordText = document.querySelector("#password");
        
        passwordText.value = password;
      } 

      document.getElementById("password").innerHTML = resultPass

      generateBtn.addEventListener("click", writePassword);

      

