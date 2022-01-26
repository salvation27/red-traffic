// let cardsCity = document.querySelector('.popular_way_card')
let btnOpenMenu = document.querySelector(".menu_open");
let mobileMenu = document.querySelector(".mobile_menu");
let btnCloseMenu = document.querySelector(".mobile_menu_close");

const openMenu = (e) => {
  e.preventDefault();
  mobileMenu.classList.add("opened");
};
const closeMenu = (e) => {
  e.preventDefault();
  mobileMenu.classList.remove("opened");
};

btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
