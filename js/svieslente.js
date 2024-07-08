const buttonsDOM = document.querySelectorAll('button');
const plus1aDOM = buttonsDOM[0];
const plus2aDOM = buttonsDOM[1];
const plus3aDOM = buttonsDOM[2];
const plus1bDOM = buttonsDOM[3];
const plus2bDOM = buttonsDOM[4];
const plus3bDOM = buttonsDOM[5];
const resultaDOM = document.querySelector('.first > div');
const resultbDOM = document.querySelector('.second > div');

let totalA = 0;
let totalB = 0;
let HTML = '';
let count = 0;

function plusOneA() {
    totalA++;
    count++;
    resultaDOM.textContent = totalA;
    HTML = `<p># ${count}: <span>A</span> Team scores <span>1</span> point</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}
function plusTwoA() {
    totalA += 2;
    count++;
    resultaDOM.textContent = totalA;
    HTML = `<p># ${count}: <span>A</span> Team scores <span>2</span> points</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}
function plusThreeA() {
    totalA += 3;
    count++;
    resultaDOM.textContent = totalA;
    HTML = `<p># ${count}: <span>A</span> Team scores <span>3</span> points</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}

plus1aDOM.addEventListener('click', plusOneA);
plus2aDOM.addEventListener('click', plusTwoA);
plus3aDOM.addEventListener('click', plusThreeA);


function plusOneB() {
    totalB++;
    count++;
    resultbDOM.textContent = totalB;
    HTML = `<p># ${count}: <span>B</span> Team scores <span>1</span> point</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}
function plusTwoB() {
    totalB += 2;
    count++;
    resultbDOM.textContent = totalB;
    HTML = `<p># ${count}: <span>B</span> Team scores <span>2</span> points</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}
function plusThreeB() {
    totalB += 3;
    count++;
    resultbDOM.textContent = totalB;
    HTML = `<p># ${count}: <span>B</span> Team scores <span>3</span> points</p> ${HTML}`
    scoresDOM.innerHTML = HTML;
}

plus1bDOM.addEventListener('click', plusOneB);
plus2bDOM.addEventListener('click', plusTwoB);
plus3bDOM.addEventListener('click', plusThreeB);



const scoresDOM = document.querySelector('.scores');

