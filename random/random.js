let Veronica = {name: "Vero", photo: "vero.png"}
let Cesar = {name: "Cesar", photo: "cesar.png"}
let Guido = {name: "Guido", photo: "guido.png"}
let Sergio = {name: "Sergio", photo: "sergio.png"}
let allPeople = [Veronica, Cesar, Guido, Sergio]
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
    ganadorPicDisplay.style.display = "block";
    ganadorPicDisplay.src = participantsArray[participantsArray.indexOf(winner)].photo; 
    participantsArray = [];}

function select () {
    this.classList.toggle("grayed-out");
}