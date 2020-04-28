var gente = ["Vero", "Guido", "Cesar", "Sergio"];
var pics = ["vero.png", "guido.png", "cesar.png", "sergio.png"];

var charSelect = document.querySelectorAll(".char");
var randomButton = document.querySelector("#random");
var ganadorDisplay = document.querySelector("#ganador-name");
var ganadorPicDisplay = document.querySelector("#ganadorPic");

randomButton.addEventListener("click", randomize);

for (var i = 0;i < charSelect.length; i++){
charSelect[i].addEventListener("click", select);
}

function randomize () {
    var winner = gente[Math.floor((Math.random() * gente.length))]
    ganadorDisplay.textContent = winner;
    ganadorPicDisplay.src = pics[gente.indexOf(winner)]; 
}

function select () {
    this.classList.toggle("grayed-out");
}
