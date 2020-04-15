// navbar
var navbar = document.getElementById("navbar");

// offset position of the navbar
var sticky = navbar.offsetTop;

// sticky class when scroll position.
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function sezame()
{
 var x = document.getElementById("myText");
 if (x.style.display === "" || x.style.display ==="none") {
   x.style.display = "block";
 }
 else {
   x.style.display = "none";

 }
}


function transi()
{
 var x = document.getElementById("appear");
 if (x.style.display === "" || x.style.display ==="none") {
   x.style.display = "block";
 }
 else {
   x.style.display = "none";

 }
}


function show()
{
 var x = document.getElementById("write");
 if (x.style.display === "" || x.style.display ==="none") {
   x.style.display = "block";
 }
 else {
   x.style.display = "none";

 }
}

