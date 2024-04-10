// Dark - Light Mode Start
const storageTheme = localStorage.getItem('theme');
const systemColorSchema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' :' light';

const newTheme = storageTheme ?? systemColorSchema;

document.documentElement.setAttribute('data-theme', newTheme);

document.addEventListener('DOMContentLoaded', ()=>{

    const switcherTheme = document.querySelector(".mode__input");
    const root = document.documentElement;

    if (root.getAttribute('data-theme') === 'dark') {
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener('click', toggleTheme)

    function toggleTheme(){
        const setTheme = switcherTheme.checked ? 'dark' : 'light';

        root.setAttribute('data-theme', setTheme);
        // Guardar valor del navegador para que al recargar no cambie los efectos
        localStorage.setItem('theme', setTheme);
    }

    
})
// Dark - Light Mode end

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