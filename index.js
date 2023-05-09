const mobMenu = document.querySelector('.mobile-menu-img');
const navMenu = document.querySelector('.nav-menues');


mobMenu.addEventListener('click', () => {
    navMenu.style.display = "flex";
    
});

mobMenu.addEventListener('click', () => {
    navMenu.style.display = "none";
});




const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.sections-navbar');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});