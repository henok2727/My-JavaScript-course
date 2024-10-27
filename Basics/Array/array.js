//array => a variable like structure that can hold more than 1 value

let fruits = ["apple", "banana", "orange"]

fruits.push("cocunat")  // to add array to last index
//fruits.pop()  //to remove 
//fruits.unshift("mango") //add to the beginning
//fruits.shift()  //to remove from the beginning

/*
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])  */

let numOfFruits = fruits.length;
let index = fruits.indexOf('apple')
let notFoundElement = fruits.indexOf("pineapple")   //gives -1

console.log(notFoundElement)

for(let i=0; i<fruits.length; i++){
  console.log(fruits[i])
}

