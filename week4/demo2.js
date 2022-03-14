
//Exercise 7
/*function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}
function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);*/

function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}
function myLoadFunction() {
    var element = document.getElementById('myinput');
    element.addEventListener('keyup', clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);