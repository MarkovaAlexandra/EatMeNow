
'use strict';

const burgerMenu = document.querySelector('.nav-icon');
const icons = burgerMenu.querySelectorAll('span');

const menuList = document.querySelector('.menu__list');

if (icons) {
    burgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        icons.forEach(icon => {
            icon.classList.toggle('_hidden');//меняю крестик на бургер
        });
        menuList.classList.toggle('_active');
    })
}