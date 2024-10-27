//this => reference to the object where THIS is used 
//       (the object depends on the immediate context)
//       person.name = this.name;

//doesn't work with arrow function

const person1 = {
  name: "bob",
  favFood: "alex",
  sayHello: function() {console.log(`HI I am ${this.name}`)},
  eat: function(){console.log(`hello there ${this.favFood}`)},
}

person1.sayHello();
person1.eat();
