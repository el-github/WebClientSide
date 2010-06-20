var letterCount = function () {
    $("#display").text(($("#in").val().length));
}

$(document).ready(function() {
                      $("#in").keyup(letterCount);
                  });