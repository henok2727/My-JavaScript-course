let fruits = ["apple", "banana", "orange", "mango"]

/*
//since fruit length is 4 it shoud be made -1
for(let i = fruits.length -1; i >= 0; i--){
  console.log(fruits[i])
}
*/

//fruits.sort();  //sorts it alphabetically
fruits.sort().reverse();  //to sort them in reverse of alphabet
//inhanced for loop
for(let fruit of fruits) {
  console.log(fruit)
}
