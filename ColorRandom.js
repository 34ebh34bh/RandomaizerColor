

let colorExample =  document.getElementById('color-example');
let hex = document.querySelector('color-code');
let rgb = document.querySelector('color-code');
let refreshColorbtn = document.querySelector('refresh-color');

function getRandomNum(max) {
    return Math.floor(Math.random() *(max +1))
}

function getRgbRandom() {
    const r = getRandomNum(255);
    const g = getRandomNum(255);
    const b = getRandomNum(255);
    return [r, g, b];
}

function rgbTohex(rgb) {
    return '#' + rgb.map(color => color.toString(16)).join("").padStart(6, 0);
}

function setColor() {
    const [r, g, b] = getRgbRandom();
    const hexColor = rgbTohex([r, g, b]);
    colorExample.style.backgroundColor = hexColor;
    rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hexColor;
}

setColor()