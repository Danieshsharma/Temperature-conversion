const text = document.getElementById("textbox") ;
const change1 = document.getElementById("tofrh") ; 
const change2 = document.getElementById("tocelsius") ;
const change3 = document.getElementById("result") ;
let temp ;
function convert(){
  if(change1.checked){
    temp = Number( text.value);
    temp =temp *9/5 +32;

      change3.textContent= temp.toFixed(1)+"°F";
  }
  else if (change2.checked){
    temp = Number( text.value);
    temp = (temp - 32) * (5/9);
   change3.textContent= temp.toFixed(1) +"°c";
    
  }
  else{
    change3.textContent ="select a unit firstly ";
  }

}