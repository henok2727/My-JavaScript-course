/*
  synchronous => excutes line by line consecutively inn a sequential manner
        code that waits for ann operation to complate

  asynchronous => allows multiple qperations to be performed concurrently 
        without waiting.
        doesn't block the excution flow and allows the program to continue 
        (I/O oprations, network requests, fetching data) 
        handled with: callbacks, promises, Async/Await
*/
 display(app)

function display(callback){
  setTimeout(() => {
  console.log('first'), 3000
  callback()}, 3000);
}

function app() {
    console.log('second')
}

