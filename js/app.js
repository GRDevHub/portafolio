const checkbox = document.querySelector('#checkbox');
const menu = document.querySelector('.header__label');
const nav = document.querySelector('.nav');

console.log(checkbox);
console.log(menu);

const animationMenu = function(){
    console.log(checkbox.checked)
    nav.classList.toggle('unset');
}

checkbox.addEventListener("click", animationMenu);