const increase = document.getElementById('increase-btn')
const decrease = document.getElementById('decrease-btn')
const reset = document.getElementById('reset-btn')
const h1=document.getElementById('counter')
count=0;

increase.onclick = function(){
  count++;
  h1.textContent= count;
}

decrease.onclick = function(){
  count--;
  h1.textContent= count;
}

reset.onclick = function(){
  count =0;
  h1.textContent= count;
}
