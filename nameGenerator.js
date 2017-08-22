// [] - literal tworzacy pusta tablice

// const tablica = new Array(); - konstruktor


const imiona = [
    "Marcin",
    "Aleksandra",
    "Karolina",
    "Paweł"
];


const nazwiska = [
    "Scimborski",
    "Piskor",
    "Kowalski",
    "Rojondzki"
];

var generateButton = document.getElementById('generate');
var buttonsText = document.getElementById('text');

document.addEventListener("click", generatorName);

function generatorName() {
    buttonsText.textContent = imiona[Math.floor((Math.random() * 4) + 0)] + " " + nazwiska[Math.floor((Math.random() * 4) + 0)];
}