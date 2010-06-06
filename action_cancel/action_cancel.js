var canelDefAction = function(evt) {
    if(!evt) {
        evt = window.event;
    }
    if(evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    
    var display = document.getElementById("display");
    display.firstChild.nodeValue = "Default action canceled";
}    

window.onload = function() {
    node = document.getElementById("link");
    node.onclick = canelDefAction;
}
    