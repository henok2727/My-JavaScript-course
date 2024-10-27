let age = 15;
let hasLicense = false;

if(age >= 16){
  console.log("you are old enough to drive");

  if(hasLicense){
    console.log('You can drive')
  }
  else{
    console.log('you can not drive')
  }
} 

else if(age > 65){
  console.log('it is better not to drive at this age')
}

else{
  console.log("You must be 16+ to have a license")
}
