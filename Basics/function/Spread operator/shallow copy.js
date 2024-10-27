

let fruits = ["apple", "orange", "banana"]

//shallow copy => different structure but contains identical values
let newFruits = [...fruits]

let vegetables = ["carrot", "celery", "potato"]

console.log(newFruits)

//combine two or more array using spread operator
let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods)