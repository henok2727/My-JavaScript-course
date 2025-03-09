// logical operator => used to combine or manipulate boolean values
//                (true or false)
//   AND = &&        OR = ||      NOT = !

const temp = 25;

if(temp > 0 && temp <= 30){  // both has to be true
  console.log('temp is GOOD')
}
else{
  console.log('temp is BAD')
}

if(temp > 0 || temp >= 30){  // if one is true it excutes
  console.log('temp is GOOD')
}
else{
  console.log('temp is BAD')
}

const isSunny = true;

if(!isSunny){      //not suuny
  console.log('It is cloudy')
} else{
  console.log('It is sunny')
}
