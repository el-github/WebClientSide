var mouseHandler = function(evt) {
    document.getElementById("mousex").firstChild.nodeValue = evt.clientX;
    document.getElementById("mousey").firstChild.nodeValue = evt.clientY;
}

var onLoad = function() {
    if (document.addEventListener) {
        document.addEventListener("mousemove", mouseHandler, false);
    }
    else if (document.attachEvent) {
        document.attachEvent("mousemove", mouseHandler);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", onLoad);
}