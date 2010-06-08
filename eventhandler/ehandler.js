var ehandler = function() {
    alert('Thank you for clicking');
}

var elem;

var add = function() {
    elem = document.getElementById("elem");
    if (elem.addEventListener) {
        elem.addEventListener("click", ehandler, false);
    }
    else if (elem.attachEvent) {
        elem.attachEvent("onclick", ehandler);
    }
    alert("Added!");
}

var remove = function() {
    if (elem.removeEventListener) {
        elem.removeEventListener("click", ehandler, false);
    }
    else if (elem.detachEvent) {
        elem.detachEvent("onclick", ehandler);
    }
    alert("Removed!");
}

var onLoad = function() {
    var addButton = document.getElementById("addButton");
    if (addButton.addEventListener) {
        addButton.addEventListener("click", add, false);
    }
    else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", add);
    }

    var removeButton = document.getElementById("removeButton");
    if (removeButton.addEventListener) {
        removeButton.addEventListener("click", remove, false);
    }
    else if (removeButton.attachEvent) {
        removeButton.attachEvent("onclick", remove);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", onLoad);
}