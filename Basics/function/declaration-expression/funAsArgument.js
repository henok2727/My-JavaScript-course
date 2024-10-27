// function as an argument

const numbers = [1,2,3,4,5];
const squares = numbers.map(function(element){
  return Math.pow(element, 2)
});

console.log(squares)

const cube =numbers.map(function (element){
  return Math.pow(element,3)
})

console.log(cube)

const IsOdd = numbers.filter(function (element){
  return element % 2 !== 0;
})

console.log(IsOdd)

//arrow function
const total = numbers.reduce( (accumulator, element) => {
  return accumulator + element;
})
console.log(total)