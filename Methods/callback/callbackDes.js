// callback => a function that is passed as an argument to another funnction

//        used to handle aynchronous operations:
//        1. Reading a file
//        2. Network request
//        3. Interacting with databases

//        "hey, when you are done, call this next" //when only the operation is done

/*
hello();
bye();
      //to pretend hello function takes some time to process
      //in this case bye fun compiles first. to force hello to come first we use callbacks

function hello(){
  setTimeout(function () {
    console.log('hello');
  }, 3000);
}

function bye(){
  console.log('bye')
}  */