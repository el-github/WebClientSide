var sum = 0;
var timer;

var count = function() {
    sum++;
    var ulNode = document.getElementById("output");
    var textNode = document.createTextNode(sum);
    var liNode = document.createElement("li");
    liNode.appendChild(textNode);
    ulNode.insertBefore(liNode, ulNode.firstChild);
}

var start = function() {
    timer = setInterval(count, 1000);
}

var stop = function() {
    clearInterval(timer);
}

var onLoad = function() {
    var addButton = document.getElementById("start");
    if (addButton.addEventListener) {
        addButton.addEventListener("click", start, false);
    }
    else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", start);
    }

    var stopButton = document.getElementById("stop");
    if (stopButton.addEventListener) {
        stopButton.addEventListener("click", stop, false);
    }
    else if (stopButton.attachEvent) {
        stopButton.attachEvent("onclick", stop);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", onLoad);
}