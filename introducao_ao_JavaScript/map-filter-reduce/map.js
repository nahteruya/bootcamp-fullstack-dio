/* Com o this */
let orange = { price: 2};
let apple = { price: 3};
let array = [1,2,3,4,5,6];

function calculetePrice() {
  let arrayPrices = array.map((item) => item * this.price);
  return arrayPrices;
}

console.log(calculetePrice.call(orange));
console.log(calculetePrice.call(apple));

/* Sem o this */
let arrayPrices = array.map((item) => item * 4);

console.log(arrayPrices);
