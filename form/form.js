var checkForm = function () {
	var buttons = document.getElementsByName("buttons");
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].checked) {
			alert("You have checked the " + buttons[i].value + " button");
		}
	}
	
	var select = document.getElementById("myselect");
	for (var i = 0; i < select.options.length; i++) {
		if (select.options[i].selected) {
			alert('You have selected the option "' + select.options[i].value + '"');
		}
	}
}


var onLoad = function () {
	var checkBtn = document.getElementById("checkBtn");
	if (checkBtn.addEventListener) {
		checkBtn.addEventListener("click", checkForm, false);
	}
	else if (checkBtn.attachEvent) {
		checkBtn.attachEvent("onclick", checkForm);
	}
}


if (window.addEventListener) {
	window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
	window.attachEvent("onload", onLoad);
}