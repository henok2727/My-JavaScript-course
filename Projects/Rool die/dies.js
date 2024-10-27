let val;

document.getElementById('btn1').onclick= function(){
  val = Math.floor(Math.random() * 6) +1;
  document.getElementById('H1').textContent = val;
}
