var addLink = function() {
    var link = document.createElement("link");
    link.href = "alt.css";
    link.type = "text/css";
    link.rel = "alternate stylesheet";
    link.title = "alternate";
    document.getElementsByTagName("head")[0].appendChild(link);
}

var removeLink = function() {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].title == "alternate") {
            links[i].parentNode.removeChild(links[i]);
        }
    }
}

var onLoad = function() {
    var addButton = document.getElementById("add")
    if (addButton.addEventListener) {
        addButton.addEventListener("click", addLink, false);
    }
    else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", addLink);
    }

    var removeButton = document.getElementById("remove")
    if (removeButton.addEventListener) {
        removeButton.addEventListener("click", removeLink, false);
    }
    else if (removeButton.attachEvent) {
        removeButton.attachEvent("onclick", removeLink);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", onLoad, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", onLoad);
}