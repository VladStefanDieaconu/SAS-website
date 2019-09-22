
function hideEverything() {
    // var x = document.getElementById("course1");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    var elements = document.getElementsByClassName("AllCoursesTab");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].style.display = "none";
    }


}

function someFunction(obj) {
    hideEverything()
    var x = document.getElementById(obj.classList[0]);
    x.style.display = "block";
}