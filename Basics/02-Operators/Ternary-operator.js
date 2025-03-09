//Ternary-operator => a shortcut to if{} and else{} statements
//                   helps to asssign a variable based on a condition
//                  condition ? code-if-true : code-if-false

/*
let age = 21;

let message = age >= 18 ? "you're an adult" : "you're a minor";

console.log(message) */

/*
let isStudent = false;

let text = isStudent ? "you are student" : "not student"
console.log(text) */

let purchaseAmount = 125;

let discount = purchaseAmount >=100 ? 10 : 0;
console.log(purchaseAmount - purchaseAmount * (discount / 100))