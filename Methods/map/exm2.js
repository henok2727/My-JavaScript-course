const names = ["abel", "mark", "bob", "alex"];

let capitalName = names.map(upperCase)

function upperCase(element){
  return element.toUpperCase();
}

console.log(capitalName)
