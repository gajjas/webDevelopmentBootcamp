var playerOneButton = document.querySelector("#p1");
var playerTwoButton = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var numDisplay = document.querySelector("#gameDisplay");
var darkModeButton = document.querySelector("#darkModeButton");
var darkModeDisplay = document.querySelector("#darkModeDisplay");

var darkMode = false;

var gameOver = false;
var winningScore = 5;


var p1Score = 0;
var p2Score = 0;

playerOneButton.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

playerTwoButton.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScore = Number(numInput.value);
    if (winningScore <= 0) {
        winningScore = 1;
        numInput.value = "1";
    }
    numDisplay.textContent = winningScore;
    reset();
});

darkModeButton.addEventListener("click", function(){
    playerOneButton.classList.toggle("dMButton");
    playerTwoButton.classList.toggle("dMButton");
    resetButton.classList.toggle("dMButton");
    numInput.classList.toggle("dMButton");
    this.classList.toggle("dMButton");

    document.body.classList.toggle("dM");
    darkMode = !darkMode;
    if (darkMode) {
        darkModeDisplay.textContent = "ON";
    }
    else{
        darkModeDisplay.textContent = "OFF";
    }

});

