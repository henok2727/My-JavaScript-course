//function declaration => define a reusable block of code that performs a specific task


function hello(){
  console.log("regular declaration")
}

//function expression => a way to define function as a value or variable

let myFun = function(){
  console.log("function as a value")
}

hello();
myFun()