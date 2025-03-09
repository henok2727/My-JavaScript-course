const PI = 3.1415;  //make variable letter capital for numbers
let radius;
let circumfrance;



document.getElementById("Submit-btn").onclick= function(){
  radius=document.getElementById("take").value;
  radius=Number(radius);
  circumfrance = 2 * PI * radius;
  document.getElementById('myH3').textContent=`Circumfrance is: ${circumfrance}cm`
}