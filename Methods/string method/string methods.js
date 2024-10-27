// string methods => allow you to manipulate and work with text(string)

let username = "Brocode"
/*
console.log(username.charAt(0)) //character at index of 0
console.log(username.indexOf('o')) //what is index of first occurance of 0
console.log(username.lastIndexOf('0')) //last index of o
console.log(username.length('o')) // total of letters 
*/  /*
let student = "   abel  mark  ";
console.log(student)
console.log(student.trim()) //avoids space before and after the text

console.log(student.toLowerCase) // 
console.log(student.repeat(3)) //to repeat string 3 time 
*/

/*
let result = username.startsWith(" ")  //.endsWith(" ")

if(result) {
  console.log(`your user name can't start with empity space`)
}
 */  

/*  //endsWith
let mark = " abel "

let result = mark.endsWith(" ") //.

if(result) {
  console.log(`your user name can't end with empity space`)
} else{
  console.log('coreect')
} */
 
  /*  //includes
  let Name = " Bro Code"

  let result = Name.includes(" ");

  if(result){
    console.log("username can't include empity space")
  } else{
    console.log(Name)
  }  */

    //replace All
    let phoneNumber = "123-345-4224";

    phoneNumber = phoneNumber.replaceAll("-", ""); 
    specificLength = phoneNumber.padStart(15, 0) //pad the strings with '0' until it is 15 character
            //padEnd()
    console.log(phoneNumber)
    console.log(specificLength)
