let pizzaPlace
let numberOfToppings

pizzaPlace = "Pizza Castle";
numberOfToppings = 12;
console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(`${pizzaPlace} has over ${numberOfToppings} different combinations.`);

function slogan(num) {
if(num > 10) {
  return"A whole lot of pizza."
} else {
  return "Quality, not quantity."
}

}
console.log(slogan(12));

for( x = 1; x <= 10; x++) {
  if( x % 2 == 0) {
    console.log(x);
  }
}
