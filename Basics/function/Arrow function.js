//arrow function => a concise way to write function expression 
//                good for simple functions that you only use once
//                (parameters) => some code

function hello(){
  console.log('first')   //normal fun
}
hello() 

const hey = () =>  {   //arrow fun
  console.log('hello')
}
hey()

const apple = () => console.log("one line")

apple()