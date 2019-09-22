// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var navbar = document.getElementById("navbar");
var sticky2 = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    if (window.pageYOffset >= sticky2) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
