const mouse = document.querySelector('#cursor');
const punto = document.querySelector('#cursor__outline');
const typing = document.querySelector('.write');
const text = 'FrontEnd Developer.';

const moverMouse = function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    
    mouse.style.left = `${posX - 24}px`;
    mouse.style.top = `${posY - 24}px`;
    punto.style.left = `${posX}px`;
    punto.style.top = `${posY}px`;
}

document.addEventListener('mousemove', moverMouse);




const efectoText = function(text, i=0){
    typing.textContent += text[i];
    
    if(i === text.length - 1) return;
    setTimeout(() => efectoText(text, i+1), 100)
}

setTimeout(() => efectoText(text, 0), 1100)