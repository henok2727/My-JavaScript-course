let fruits = ["apple", "orange", "banana", "coconut"]

//fruits.forEach(uppercase);
fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array){
  array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
  console.log(element);
}