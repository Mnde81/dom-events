const buttonsDOM = document.querySelectorAll('button');
// const button1DOM = buttonsDOM[0];
// const button2DOM = buttonsDOM[1];
// const button3DOM = buttonsDOM[2];
// const button4DOM = buttonsDOM[3];
const resultDOM = document.querySelector('.hello');

let result = "Name";

function update(str = 0) {
    result = str;
    resultDOM.insertAdjacentHTML('afterbegin', `<p>My name is ${result}</p>`);
}

// button1DOM.addEventListener('click', () => update(button1DOM.innerText));
// button2DOM.addEventListener('click', () => update(button2DOM.innerText));
// button3DOM.addEventListener('click', () => update(button3DOM.innerText));
// button4DOM.addEventListener('click', () => update(button4DOM.innerText));


for (let i = 0; i < buttonsDOM.length; i++) {
    buttonsDOM[i].addEventListener('click', () => update(buttonsDOM[i].innerText));
}