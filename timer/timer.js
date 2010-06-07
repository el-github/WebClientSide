var timer;
var timer2;
var counter = 0;

window.onload = function() {
    document.getElementById("once").onclick = function() {
        timer = setTimeout(dateFunc, 2000);
    }
    document.getElementById("repeat").onclick = function() {
        timer2 = setInterval(countFunc, 2000);
    }
    document.getElementById("stop").onclick = function() {
        clearTimeout(timer);
        clearInterval(timer2);
    }
}

var dateFunc = function() {
    var date = new Date();
    alert(date);
}

var countFunc = function() {
    counter++;
    document.getElementById("output").firstChild.nodeValue = counter;
}