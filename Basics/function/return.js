
function add(x, y){
  let result = x + y;
  return result;  //returns the result to the called one
}

function subtract(x, y){
  return x - y;
}

let answer = add(2, 3);
console.log(answer)

console.log(subtract(8, 4))

function isEven(number){
  return number % 2 === 0 ? "even" : "odd"
}

console.log(isEven(31))