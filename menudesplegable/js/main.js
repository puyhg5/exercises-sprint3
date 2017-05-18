var navMenu = document.querySelector(".nav");
var isOpen = false;
function toggleMenu() {
  isOpen = !isOpen;
  var navMenu = document.querySelector('.nav');
  navMenu.classList.toggle('active');
}
