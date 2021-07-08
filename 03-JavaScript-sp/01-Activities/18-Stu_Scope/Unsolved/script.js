// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
function justShout() {
  console.log("Shout" + ", " + "Shout");
  return;
}

function shoutItAllOut() {
  console.log("shout" + " it all out! ");
  return;
}

justShout("Shout");
shoutItAllOut("shout");

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  console.log("sayLions" + animal + "sayTigers"); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
var bears = "Bears";

function sayBears() {
    var bears = "Pandas";
    console.log(bears + "! OH MY!");
    return;
}

sayLions("Lions");
sayTigers("animals");
sayBears("bears");

// TODO: The variable 'sing' should be declared once in the local scope.
var sing = "Sing"; 

function singAlong() {
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();
