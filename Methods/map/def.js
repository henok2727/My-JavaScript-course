/*
    map => accepts a callback and applies that fuctions to each 
    elemet of a array, then returns a new array
*/

const num = [1,2,3,4,5];

function power(element){
    return Math.pow(element, 2)
}

const square = num.map(power);  //power => callback

console.log(square)