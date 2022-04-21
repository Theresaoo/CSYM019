//Vanilla javascript
/*window.onload = makeAjaxRequest;

let xhr =  false;

function makeAjaxRequest () {

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    } 
    else {
        if (window.ActiveXObject) {
                xhr = newActiveXObject ("Microsoft.XMLHTTP");
                }
    }

    if (xhr) {
        xhr.open ("GET", "counties.json", true);
        xhr.send();
        xhr.onreadystatechange = showContents;
    } 
    else {
        document.getElementById("updatemessage"). innerHTML = "Could not perform stated Request";
    }
}


function showContents() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let txt = "";
            for (let i=0; i < data.counties.length; i++) {
                txt += "<tr><td>" + data.counties[i].name + "</td></tr>";
            }
            document.getElementById("countylist").innerHTML = txt;
        }
         else {
            document.getElementById("updatemessage").innerHTML = "An error occurred:" + xhr.status;
        }
    }
}*/

//jQuery
async function load() {
    let html = "", message = "";
    $.ajax({
        url:"counties.json",
        type:"GET",
        dataType:"json",
        success: function (res) {
            for (let i = 0; i < res.counties.length; i++)
                html += "<tr><td>"+res.counties[i].name+"</td></tr>";
            message = "LOADED";
            document.getElementById("countylist").innerHTML = html;
            document.getElementById("updatemessage").innerHTML = message;
        },
        error: function () {
            message = "ERROR";
            document.getElementById("updatemessage").innerHTML = message;
        }
    });
}
document.addEventListener('DOMContentLoaded',load);

