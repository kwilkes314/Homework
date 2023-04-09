//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["ham", "pepperoni", "bacon", "canadian bacon"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."


let greeting = "welcome to Pizza House our toppings are: ";

for (let pizza of pizzaToppings){
greeting += `${pizza}, `;
}
console.log(greeting);


//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  console.log('One' + ' ' + size + ' ' + crust + ' ' +' pizza with' + ' ' + toppings + ' ' + '...coming up!');}
  console.log(getPizzaOrder("large", "thin", "ham"));

;






//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
function preparePizza(large,thin,ham) {
 console.log('...Cooking pizza...');
 let servePizza = preparePizza;
 return servePizza;

}
console.log(preparePizza('large','thin','ham'));

//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
//Create a servePizza function that

//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed


//Call each function and (starting with preparePizza) use the returned value from the previous function as its input
