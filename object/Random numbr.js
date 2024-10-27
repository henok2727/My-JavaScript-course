// Random Number Generator

//let randomNum = Math.random();  //random num declaration

/*
let randomNum = Math.floor(Math.random() * 6) + 1; //random num b/n 0 & 5 - floor is used to avoid decimal
                      // + 1, is used to make it b/n 1 & 6

console.log(randomNum)  */

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum)