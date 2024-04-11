const mouse = document.querySelector('#cursor');
const punto = document.querySelector('#cursor__outline');
const typing = document.querySelector('.write');
const links = document.querySelectorAll('a,button,label');
const text = 'FrontEnd Developer.';

// Seguir trayectoria puntero
const moverMouse = function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    
    mouse.style.left = `${posX - 24}px`;
    mouse.style.top = `${posY - 24}px`;
    punto.style.left = `${posX}px`;
    punto.style.top = `${posY}px`;
}

document.addEventListener('mousemove', moverMouse);



// Escritura titulo
const efectoText = function(text, i=0){
    typing.textContent += text[i];
    
    if(i === text.length - 1) return;
    setTimeout(() => efectoText(text, i+1), 100)
}

setTimeout(() => efectoText(text, 0), 1100)

// Animación puntero
links.forEach(
    item => {
        item.addEventListener('mouseenter', () => {
            mouse.classList.add('mini');
        });
        item.addEventListener('mouseleave', () => {
            mouse.classList.remove('mini');
        });
    }
);