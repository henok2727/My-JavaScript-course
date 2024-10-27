/*
  Error => an object that is created to prevent a problem that occurs
          occurs often with user input or establishig a connection
*/

//try {} = encloses code that might potentially cause an error
//catch {} = catch and handle any trown errors from try {}
//finally {} = (optional) always excutes. used mostly for clean up
      //ex. close file, close connection, release resources

  
try {
  console.log(x)
} catch (error) {
  //console.log(error)
  console.error(error) //highlights the error
}
finally{
  console.log("This always excutes")
}

console.log("you have reached the end")
