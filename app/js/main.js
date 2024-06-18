
'use strict';

const burgerMenu = document.querySelector('.nav-icon');
console.log(burgerMenu);
const icons = burgerMenu.querySelectorAll('span');

const menuList = document.querySelectorAll('.menu__list');
console.log(menuList);

if (icons) {
    burgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        icons.forEach(icon => {
            icon.classList.toggle('_hidden');//меняю крестик на бургер
        });
        // menuList.classList.toggle('_active');
        menuList.forEach(menu => {
            menu.classList.toggle('_active');
        })
    })
}