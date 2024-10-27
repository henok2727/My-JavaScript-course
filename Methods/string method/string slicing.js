// string slicing => creating a substring from a portion of another string
//              string .slice(start, end)

const fullName = "Bro Code";

/*
let firstName = fullName.slice(0, 3); //last one is exclusive -doesn't included
let lastName = fullName.slice(4, 8);
let lastNames = fullName.slice(4); //if we want upto the last - ending number is not neccessary

console.log(firstName);
console.log(lastName);
console.log(lastNames);  */

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); //find the listed place and start after one

console.log(firstName);
console.log(lastName);


