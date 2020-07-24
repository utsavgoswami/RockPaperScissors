const choices = ["rock", "paper", "scissors"];

const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");

const player1Choice = getRandomIndex();
const player2Choice = getRandomIndex();

determineResult(choices[player1Choice], choices[player2Choice]);

// Returns a random index between 0 and 2, inclusive 
function getRandomIndex() {
    return Math.floor(Math.random() * 3);
}

// Determines winner/tie, and displays result to the UI
function determineResult(weapon1, weapon2) {
    player1.setAttribute("src", "images/" + weapon1 + ".png");
    player2.setAttribute("src", "images/" + weapon2 + ".png");

    const header = document.querySelector("h1");

    const player1Wins = (weapon1 === "rock" && weapon2 === "scissors") || (weapon1 === "paper" && weapon2 === "rock") || (weapon1 === "scissors" && weapon2 === "paper");

    if (weapon1 === weapon2) {
        header.textContent = "Draw!"; 
    } else if (player1Wins) {
        header.textContent = "Player 1 Wins!";
    } else {
        header.textContent = "Player 2 Wins!";
    }
        
} 