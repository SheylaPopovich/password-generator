var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $("#shopping-list");
let sumbitButton = $(".btn");
let shoppingInput = $('input[name="shoppingInput"]');



// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function createList(event){
    event.preventDefault();
    let newItem = $("<li>");

    newItem.text(shoppingInput.value());
    shoppingListEl.append(newItem)
    //needs troubleshooting
    shoppingInput.val("")
}

sumbitButton.on("click", createList);


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
