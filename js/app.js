const checkbox = document.querySelector('#checkbox');
const menu = document.querySelector('.header__label');
const nav = document.querySelector('.nav');
const lists = document.querySelectorAll('.nav__list');

const animationMenu = function(){
    nav.classList.toggle('unset');
    
    removeAnimation(0);
        
}

const setCheck = function(){
    if(checkbox.checked){
        checkbox.checked = false;
        nav.classList.remove('unset');
        removeAnimation(0);
    }
}

checkbox.addEventListener("click", animationMenu);

lists.forEach(
    item => {
        item.addEventListener('click', setCheck);
    }
)

const removeAnimation = function(count){
    lists.forEach(
        item => {
            item.classList.toggle(`animation${count}`)
            count++;
        }
    )
}