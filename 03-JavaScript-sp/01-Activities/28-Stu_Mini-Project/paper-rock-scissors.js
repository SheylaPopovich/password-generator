/* As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.*/

//get value from user and populate a var

var userChoice=window.prompt("Choose R, P, or S", "R");
console.log(userChoice)

//get the value from the computer and populate a var
//create an array of choices using R,P,S, then randomly select one for the comp
//var compChoice=window.prompt("Choose R, P, or S", "R");

var choices = ["R","P","S"]
var index=(Math.random() * choices.length)
console.log(index)