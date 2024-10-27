//variable scope => where a variable is recognized 
//                  and accessible (local vs global)

let x = 3;    //x is global variable any other function can access it

function fun1(){
  let y = 5;   // y is local variable it is only recognized within function
  console.log(x + y)
}

function fun2(){
  let y = 6;
  console.log(x + y)
}

fun1();
fun2();

function fun3(){
  let x = 1;   //variable is first looked locally then if not found globally
  let y = 3;    // the local x variable is given priority 
  console.log(x + y)
}
fun3();