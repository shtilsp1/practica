'use strict'


let card = document.querySelectorAll('.card');

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth);

if(viewport_width <= 769) {
    card[3].remove();
    card[7].remove();
    card[11].remove();
}

if(viewport_width <= 429) {
    card[3].remove();
    card[7].remove();
    card[11].remove();
}




console.log(card)