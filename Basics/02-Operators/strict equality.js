/*
  = assignment operator
  == comparison operator ( compare if values are equal)
  === strict equality operator (compare if values & datatype are equal)
  != inequality operator
  !== strict inequality operator  
*/

const PI = 3.14;

if(PI == "3.14"){        //PI is number => "3.14" is string 
  console.log("that is PI")   //but we are not comparing datatype
}
else{console.log("not PI")}
 
if(PI === "3.14"){  // this time it compare both value and datatype
  console.log("that is PI")
}
else{console.log("not PI")}