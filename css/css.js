var changeColor = function() {
	var elem = document.getElementById("elem");
	elem.style.color = "rgb(100%, 0%, 0%)";
}


function displayPosition() {
	var elem_p = document.getElementById("elem-p");
	var top = 0;
	var left = 0;
	while (elem_p !== null) {
		top += elem_p.offsetTop;
		left += elem_p.offsetLeft;
		elem_p = elem_p.offsetParent;
	}
	var pDisplay = document.getElementById("p-display");
	pDisplay.firstChild.nodeValue = "( " + left + ", " + top + " )";
}
	
	
var changePosition = function() {
	var elem_p = document.getElementById("elem-p");
	elem_p.style.position = "relative";
	elem_p.style.left = "100px";
	displayPosition();
}


var onLoad = function() {
	var button = document.getElementById("button");
	if (button.addEventListener) {
		button.addEventListener("click", changeColor, false);
	}
	else if (button.attachEvent) {
		button.attachEvent("onclick", changeColor);
	}
	
	var button_p = document.getElementById("button-p");
	if (button_p.addEventListener) {
		button_p.addEventListener("click", changePosition, false);
	}
	else if (button_p.attachEvent) {
		button_p.attachEvent("onclick", changePosition);
	}
	
	displayPosition();
}


if (window.addEventListener) {
	window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
	window.attachEvent("onload", onLoad);
}