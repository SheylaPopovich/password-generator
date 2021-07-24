//It's done when I click the Save button and the form's current values are stored in a object.

//It's done when the object is saved as a string using localStorage.


/* What is JSON ------------
  Storing JSON Data
  As a simple example, information about me might be written in JSON as follows:

  var jason = {
    "age" : "24",
    "hometown" : "Missoula, MT",
    "gender" : "male"
  };
  
  This creates an object that we access using the variable jason. By enclosing the variable’s value in curly braces, we’re indicating that the value is an object. Inside the object, we can declare any number of properties using a "name": "value" pairing, separated by commas. To access the information stored in jason, we can simply refer to the name of the property we need. For instance, to access information about me, we could use the following snippets:
  */

var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  // set a value to the var
  var userSubmission = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }
  //console.log(userSubmission.firstName)


  // TODO: Set new submission to local storage 
  //use JSON.stringify to return the object as a string. 
  localStorage.setItem("userSubmission", JSON.stringify(userSubmission))
});
