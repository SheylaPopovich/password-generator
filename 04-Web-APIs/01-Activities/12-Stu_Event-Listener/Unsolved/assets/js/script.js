//It's done when a user clicks on the increment button and the count is increased by 1.
//It's done when a user clicks on the decrement button and, if the count is greater than 0, the count is decreased by 1.

var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('click', function(){
  setCounterText(-1)
  

})

// TODO: Add event listener to decrement button 
