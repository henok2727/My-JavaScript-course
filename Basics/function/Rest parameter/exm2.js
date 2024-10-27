
function sum(...numbers){

  let result = 0;
  for(let number of numbers){
    result += number;
} 
return result;
//return result/numbers.length; //for average 
}

const total = sum(1,2,3)
console.log(`your total is ${total}`)
  