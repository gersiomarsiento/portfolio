let Naza = {name: "Naza", photo: "naza.png"}
let Flor = {name: "Flor", photo: "flor.png"}
let Maris = {name: "Maris", photo: "maris.png"}
let Blas = {name: "Blas", photo: "blas.png"}
let allPeople = [Naza, Flor, Maris, Blas]
let participantsArray = []

const charSelect = document.querySelectorAll(".char");
var randomButton = document.querySelector("#random");
var ganadorDisplay = document.querySelector("#ganador-name");
var ganadorPicDisplay = document.querySelector("#ganadorPic");

randomButton.addEventListener("click", randomize);

for (var i = 0; i < charSelect.length; i++){
charSelect[i].addEventListener("click", select);
}

function randomize () {
    for(var i = 0; i < charSelect.length; i++){
    if (!charSelect[i].classList.contains("grayed-out")){
        participantsArray.push(allPeople[i])
    }}
    var winner = participantsArray[Math.floor((Math.random() * participantsArray.length))]
    ganadorDisplay.textContent = participantsArray[participantsArray.indexOf(winner)].name;
    ganadorPicDisplay.src = participantsArray[participantsArray.indexOf(winner)].photo; 
    participantsArray = [];}

function select () {
    this.classList.toggle("grayed-out");
}