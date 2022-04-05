// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar and dropdown
var navbar = document.getElementsByClassName("navbar")[0];
var dropdown = document.getElementsByClassName("dropdown-content")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.color = "black";
    dropdown.classList.add("dsticky");
  } else {
    navbar.classList.remove("sticky");
    dropdown.classList.remove("dsticky");
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}