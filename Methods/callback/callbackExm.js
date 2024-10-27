hello(wait)

function hello(callback){
  console.log('first')
  callback();
}

function goodbye(){
  console.log('Good bye')
}

function wait(){
  console.log('Wait')
}