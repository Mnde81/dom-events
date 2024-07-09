const buttonsDOM = document.querySelectorAll('button');
const button1DOM = buttonsDOM[0];
const button2DOM = buttonsDOM[1];
const button3DOM = buttonsDOM[2];
const button4DOM = buttonsDOM[3];
const resultDOM = document.querySelector('.one > div');

let result = "Name";

function update(str = 0) {
    result = str;
    resultDOM.textContent = result;
}

button1DOM.addEventListener('click', () => update('Jonas'));
button2DOM.addEventListener('click', () => update('Ona'));
button3DOM.addEventListener('click', () => update('Petras'));
button4DOM.addEventListener('click', () => update('Maryte'));
