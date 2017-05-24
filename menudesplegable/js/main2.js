var buttonClick = document.querySelector(".burguer-menu");
var items = document.querySelectorAll(".nav-item");

function toggleMenu() {
var delay = 0;
for (var i = 0; i < items.length; i++) {
  items[i].style.transitionDelay = delay+"s";
  items[i].classList.toggle('active');
  delay = delay + 0.1;
  }
}

buttonClick.addEventListener("click",toggleMenu);

function closeNavResponsive(){
  if(window.innerWidth > 780){
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }
}

window.addEventListener("resize",closeNavResponsive);
