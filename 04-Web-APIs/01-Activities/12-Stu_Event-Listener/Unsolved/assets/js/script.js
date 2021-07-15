
var count = 0;
var incrementEl = document.getElementById("increment");
var decrementEl = document.getElementById("decrement");
var countEl = document.getElementById("count");


function setCounterText() {
 countEl.textContent = count;
}
// TODO: Add event listener to increment button

incrementEl.addEventListener("click", function(){
    countEl.innerText = count;
    count++;
});

// TODO: Add event listener to decrement button 

decrementEl.addEventListener("click", function(){
  countEl.innerText = count;
  count--;
});
    

//bonus(https://www.w3schools.com/jsref/dom_obj_event.asp)