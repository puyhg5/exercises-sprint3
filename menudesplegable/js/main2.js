var buttonClick = document.querySelector(".burguer-menu");

function toggleMenu() {
var items = document.querySelectorAll(".nav-item");
var delay = 0;
for (var i = 0; i < items.length; i++) {
  items[i].style.transitionDelay = delay+"s";
  items[i].classList.toggle('active');
  delay = delay + 0.1;
  }
}

buttonClick.addEventListener("click",toggleMenu);
