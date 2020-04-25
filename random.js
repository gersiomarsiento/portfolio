var gente = ["Vero", "Guido", "Cesar", "Sergio"];
var pics = ["vero.png", "guido.png", "cesar.png", "sergio.png"];

var randomButton = document.querySelector("#random");
var ganadorDisplay = document.querySelector("#ganador");
var ganadorPicDisplay = document.querySelector("#ganadorPic");

randomButton.addEventListener("click", randomize);


function randomize () {
    var winner = gente[Math.floor((Math.random() * gente.length))]
    ganadorDisplay.textContent = winner;
    ganadorPicDisplay.src = pics[gente.indexOf(winner)]; 

}