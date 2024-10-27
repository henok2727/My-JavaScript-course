//class => (ES6 feature) provides a more structured and cleaner way to 
//        work with objects compared to traditional constructor functions
//        ex. static keyword, encapsulation, inheritance

class product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`product: ${this.name}`)
    console.log(`price: ${this.price}`)
  }

  calculateTax(){
    return this.price + (this.price * salesTax)
  }
}

const salesTax = 0.05;

const product1 = new product("shirt", 19.99);
const product2 = new product("shoe", 20.01)

product1.displayProduct()

const total = product1.calculateTax(salesTax);
console.log(`total price (with): ${total.toFixed(2)}`)