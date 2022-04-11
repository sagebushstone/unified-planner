// counts how many times the iframe is loaded
var loadCounter = 0;
function loaded () {
    loadCounter += 1;
    if (loadCounter === 2) {
        $("#embedForm").attr("height", "250px");
    }
}

// listens to when iframe is loaded a second time
// aka on submit
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('embedForm');
    link.addEventListener("load", function() {
        loaded();
    });
});