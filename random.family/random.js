let Marta = {name: "Marta", photo: "marta.png"}
let Jorge = {name: "Jorge", photo: "jorge.png"}
let Diego = {name: "Diego", photo: "diego.png"}
let Dario = {name: "Dario", photo: "dario.png"}
let allPeople = [Marta, Jorge, Diego, Dario]
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
