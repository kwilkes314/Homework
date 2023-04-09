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

for( i= 1; i <= 10; i++) {
  if( i % 2 == 0) {
    console.log(i);
  }
}
