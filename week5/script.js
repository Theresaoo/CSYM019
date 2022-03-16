
//Exercise 1
/*function showOnClick(){ 
  alert('the button was pressed');
}*/

//Exercise 2
/*function showOnClick(){
  var elementNew = document.getElementById('circle');
  elementNew.style.backgroundColor='blue'
}*/


//Exercise 3
/*function showOnClick(){
  var elementNew = document.getElementById('circle');
  elementNew.style.opacity=0.5;
}*/


//Exercise 4
/*function showOnClick(){
  var elementNew = document.getElementById('circle');
  elementNew.style.opacity=1;
}*/



//Exercise 5
/*function showOnClick(){
  var elementNew = document.getElementById('circle');
  var circleOpacity= parseFloat(elementNew.style.opacity);
  elementNew.style.opacity = circleOpacity + 0.1;
}*/

/*function myInterval (){
  var elementNew = document.getElementById('circle');
  var circleOpacity = elementNew.style.opacity;

  elementNew.style.opacity=circleOpacity-0.01

}*/

//Exercise 6
/*function showOnClick(){
    setInterval (myInterval,10);

}*/ 

//Exercise 7
/*function showOnClick(){
   var elementNew = document.getElementById('circle');
   var positionLeft = elementNew.offsetLeft;
   
    elementNew.style.left = positionLeft-10 + 'px';
} 

function myLoadFunction(){
  document.addEventListener('keydown', showOnClick); 

}*/

/*function myLoadFunction(){
  elementNew.addEventListener('keydown', showOnClick); 
}*/

//Exercise 8
/*function myKeyDown(event){
   console.log(event.keyCode); 
   
} function myLoadFunction(){
    document.addEventListener('keydown', myKeyDown); 

}
*/


//Exercise 9,10
var interval = 0;
function myKeyDown(event) {
  
  //clearInterval (interval);
  
  if (event.keyCode == 37) {
  setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
  setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
  setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) {
  setInterval(moveRight, 10);
  }
 }
 function myLoadFunction(){
  document.addEventListener('keydown', myKeyDown); 

}
function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
 }
 function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
 }
 function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
 }
 function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
 }

 
/*function myLoadFunction(){
 
    var elementNew = document.getElementById('circle');
    elementNew.addEventListener('click', showOnClick);
    elementNew.style.opacity=0.5;
    elementNew.style.opacity=1;
    
}*/
 


 document.addEventListener('DOMContentLoaded', myLoadFunction); 
  