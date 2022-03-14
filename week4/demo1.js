//This makes html page run first before javascript


//Exercise 4,5,6
//declare function for variable
function changeHeader(){
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'My New Heading';
} 
function changeParagraph(){
    var element = document.getElementById('myParagraph');
    element.firstChild.nodeValue = 'This is new paragraph';
} 

//changes the specific element on clickEvent
function onClick(){
    var element = document.getElementById('heading');
    element.addEventListener('click', changeHeader);

    var element = document.getElementById('myParagraph');
    element.addEventListener('click', changeParagraph);
}
  //not a function call
 document.addEventListener('DOMContentLoaded', onClick);           //changes the heading 
  //document.addEventListener('click', changeHeader);              //changes the heading on clickEvent
