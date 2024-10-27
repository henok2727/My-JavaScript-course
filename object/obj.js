//object => a collection of related properties and/or method->functions that belong to object 
//         can represent real world objects (people, products, places)
//        object = { key: value,
//                  function() }

const person1 = {
  firstname: "alex",
  lastname: "bob",
  age: 30,
  isEmployed: true,
  sayHello: function(){console.log("Hi i am alex")},
  eat: function(){console.log("I am eating a sushi")}
} 

const person2 = {
  firstname: "mark",
  lastname: "shark",
  age: 25,
  isEmployed: false,
  sayHello: function(){console.log("Hi i am mark")},
  eat: () => {console.log("I am eating a mago")}
} 

console.log(person1.firstname)
person1.eat()
person2.eat()
//console.log(person1)

