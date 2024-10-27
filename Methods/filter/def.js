//.filter() > creates a new array by filtering out element

let nums = [1,2,3,4,5,6,7]

function isEven(element){
  return element % 2 === 0;
}

let evenNum = nums.filter(isEven);

console.log(evenNum)