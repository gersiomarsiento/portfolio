var numSquares = 6;
var colors = [];
var pickedColor;
var tries = 3;
var result = document.querySelector("#guessResult");
var squares = document.getElementsByClassName("square");
var goalDisplay = document.querySelector("#goal");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Medium"){
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor !== pickedColor){
                this.style.backgroundColor = "#232323";
                if(numSquares === 9){
                    tries--;
                    result.textContent = "You have " + tries + " guesses left";
                    if(tries === 0){
                        gameOver();
                    } else if (tries === -1){
                        reset() 
                    }
                } else {
                    result.textContent = "Try Again!"
                }
            } else {
                result.textContent = "Correct!"; 
                changeColors (clickedColor);
                h1.style.backgroundColor = clickedColor;
                newColors.textContent = "Play Again?"
            }
        });
    }
}

function gameOver(){
    result.textContent = "You lost!";
    for(var i = 0; i < squares.length; i++){
        if(squares[i].style.backgroundColor !== pickedColor){
            squares[i].style.backgroundColor = "#232323";
    } 
    h1.style.backgroundColor = pickedColor;
    newColors.textContent = "Play Again?";
}}

function reset(){
    tries = 3;
    h1.style.backgroundColor = "steelblue";  
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    result.textContent = numSquares === 9 ? "You have " + tries + " guesses left":"";
    goalDisplay.textContent = pickedColor;
    newColors.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }; for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
        squares[i].style.display = "none";
        }
    }
}

newColors.addEventListener("click", function () {
    reset();
})

function changeColors (color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change colors to match the given one
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++){
    arr.push(randomColor());
    } 
    //return array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}