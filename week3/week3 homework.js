//Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["ham", "pepperoni", "bacon", "canadian bacon"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."


function greetCustomer() {
  console.log('Welcome to Pizza House');

for (let topping of pizzaToppings){
  console.log(topping);

}

}
//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings}. Coming right up!`)
  return [size, crust, toppings]; //outputting list of size, crust, and toppings

};








//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
//Create a servePizza function that

function preparePizza([size,crust,...toppings]) {
 console.log('...Cooking pizza...');
 let pizza = {
  size: size,
  crust: crust,
  toppings: toppings


 }
 return pizza;

}
function servePizza(pizza) {
  console.log(`Order up! ${pizza.size}, ${pizza.crust}, ${pizza.toppings}`)
  return pizza;
}

//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed



//Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
servePizza(preparePizza(getPizzaOrder("Large", "Stuffed crust", "turkey", "spinach", "onions")));

