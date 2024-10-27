const words = ["apple", "orange", "banana", "kiwi", "mango", "coconut"]
const shortWord = words.filter(short)


function short(element){
  return element.length <= 6;
}

console.log(shortWord)

