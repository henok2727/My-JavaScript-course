//.reducer() => reduce the element of an array to a single value

const prices = [5, 30, 10, 25, 15, 20]

const total = prices.reduce(sum);

function sum(accumulator, element){
  return accumulator + element;
}

console.log(`${total.toFixed(2)}`);  //to add two decimal place