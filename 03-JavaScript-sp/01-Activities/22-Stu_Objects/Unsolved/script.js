//WRITE YOUR CODE BELOW

/* It's done when the `customerOrder` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready. 

* It's done when the drink name and the number of sugars is logged to the console. 
 
* It's done when, if the order is ready, the message `"Ready for pick-up"` logs. 

* It's done when, if the order is not ready, the message `"Still in order queue"` logs.*/

let customerOrder = {
    name: "Vanilla Latte ",
    sugar: 3,
    ready: "false",
};
console.log(customerOrder.name +  customerOrder.sugar)
console.log(customerOrder.name + " Ready for pick-up")
console.log(customerOrder.name + " Still in order queue")

