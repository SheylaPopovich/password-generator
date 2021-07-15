var myArray = [];  /*always declare the var fist*/

myArray[0] = "Sheyla"   /*the var can be strings, numbers, booleans, and even objects*/

myArray[1] = 34;    /*arrays start at 0 index*/

myArray[2] = "Puerto Rican";

console.log(myArray); /*how to log to console*/

/* to change position value call it and change */
myArray[1] = 35;

var myArray2 = ["Stephanie", 34, "White"];  /*how to create a second array*/

myArray.length /* this command will show the number of items  in the array*/

myArray.sort() /*this will sort the values in alphabetical order*/

myArray.reverse() /*this will reverse the sort previously done*/

/*While Loops----- this needs a false condition so it doesn't continue on infinite loop*/
var age = 35;

while (age < 40) {
    console.log("Your age is less then 40");
    age++; /*this command will add your age plus one making the loop repeat will it is over 40 making it a "false" statement allowing it to move to the next statement...see below*/
}

document.write ("You are now over 40");


/*For Loop*/
for(age = 35; age < 40; age++) {   /*first index variable initialized; then list the condition; then increments;*/
    console.log("You age is less than 40");
}

document.write("Your are now over 40");

/*Functions in JavaScript*/
function getAverage (a,b){
    var average =(a +b) / 2;
    console.log(average);
}

/*the above function wont run until it is called see below*/
getAverage(7, 8, 9); /*7 is assigned to a and 12 is b*/

/*Objects in JavaScript*/
var myCar = new Car()

myCar.drive() /*how to call a method from the property made*/

