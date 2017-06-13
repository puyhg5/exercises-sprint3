var menuItems = ["home", "project", "about", "contact", "holi"];
var buttonMenu = document.querySelector(".burguer-menu");
var navDesktop = document.querySelector(".nav-desktop");
var navResponsive = document.querySelector(".nav-responsive");

function createMenus(){
  for (var i = 0; i<menuItems.length; i++){
    navDesktop.innerHTML += '<li><a href="#" class="format-item format-item-desktop">' + menuItems[i] + '</a></li>';
    navResponsive.innerHTML += '<li class="nav-item-responsive"><a href="#" class="format-item">' + menuItems[i] + '</a></li>';
  }
}

function toggleMenu() {
  var items = document.querySelectorAll(".nav-item-responsive");
  var delay = 0;
  for (var i = 0; i < items.length; i++) {
    items[i].style.transitionDelay = delay+"s";
    items[i].classList.toggle('active');
    delay = delay + 0.1;
  }
}

function closeNavResponsive(){
  var items = document.querySelectorAll(".nav-item-responsive");
  if(window.innerWidth > 780){
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }
}

createMenus();
buttonMenu.addEventListener("click",toggleMenu);
window.addEventListener("resize",closeNavResponsive);
