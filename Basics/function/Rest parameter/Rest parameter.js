// rest parameter => (...rest) allows a function with a 
//             variable number of argument by bundling them into an array


//             spread = expands an array into separate elements
//             rest = bundles separate elements into an array

const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

/*
//method 1 
function openFridge(...foods){ //takes any umber of argument + this one is ...rest parameter
                               //it returns array element when we only use foods. when we use ...foods to clg it unpacks it again    
  console.log(foods)   //array
  console.log(...foods)   //individual element
}

openFridge(food1,food2,food3,food4, food5)
*/


//to stick all element into an array
function getFood(...foods){
  return foods;
}

const foods = getFood(food1, food2, food3, food4, food5)

console.log(foods)


