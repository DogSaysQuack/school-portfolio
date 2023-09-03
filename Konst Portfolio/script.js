var tabLinks = document.getElementsByClassName("tab-links");
var tabContent = document.getElementsByClassName("tab-content");


window.addEventListener("scroll", function() {
    var header = this.document.querySelector("navbar");
    header.classList.toggle("sticky", this.window.scrollY>20);
});

function hamburger() {
    var x = document.getElementById("navbar-links");
    var y = document.getElementById("navbar")
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }