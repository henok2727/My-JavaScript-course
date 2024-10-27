// switch => can be an efficient replacemnet to many else if statements

let day= 1;
if(day ==1){
  console.log('monday')
} else if (day==2){
  console.log('tuesday')
}else if (day==2){
  console.log('wednsday')
}
else if (day==2){
  console.log('thursday')
}
else if (day==2){
  console.log('friday')
}
else if (day==2){
  console.log('saturday')
}
else if (day==2){
  console.log('sunday')
}


//this lots of else if statement can be written usinf SWITCH
let days = 3;
switch(days){
  case 1:
    console.log('monday')
    break;
  case 2:
    console.log('tuesday')
    break;
  case 3:
    console.log('wednsday')
    break;         // if break wasn't used all line after the day 3 will be excuted
  case 4:
    console.log('thursday')
    break;      // to brake out of switch
  case 5:
    console.log('friday')
    break;
  case 6:
    console.log('saturday')
    break;
  case 7:
    console.log('sunday')
    break;  
  default:
    console.log(`${days} is not a day`)   
}
  


