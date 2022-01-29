"use strict";

function computerPlay() {
    let rng = Math.floor(Math.random() * 3);
    if (rng === 1){
        return "rock";
    }
    else if (rng === 2){
        return "paper";
    }
    else
        return "scissors";
};

let playerRoundScore = 0;
let computerRoundScore = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    let playerDraw = `You chose ${playerSelection}. Computer chose ${computerSelection}. The game is a draw!`;
    let playerWin = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
    let playerLose = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;


    if (playerSelection === computerSelection) {
        console.log(playerDraw);
        return playerDraw;
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
             (playerSelection === "scissors" && computerSelection === "rock") || 
             (playerSelection === "paper" && computerSelection === "scissors")) {
                 computerRoundScore == 1;
                 console.log(playerLose);
                 return playerLose;
             }
    
    //add another else if for playerWin
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "paper") ||
             (playerSelection === "paper" && computerSelection === "rock")) {
                 playerRoundScore == 1;
                 console.log(playerWin);
                 return playerWin;
             }
    else //else is if input is not a rock, paper, or scissors
             console.log("Invalid input. Please try again.");
};



function game() {
    let playerChoice = window.prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerChoice = computerPlay();
    playRound(playerChoice,computerChoice);
    return;
}

for (let i = 1; i <= 5; i++) {
    game();
    if (playerRoundScore == 1) {
        playerScore = playerScore + 1;
        console.log(`Player score is ${playerScore}`);
    } else if (computerRoundScore == 1) {
        computerScore = computerScore + 1;
        console.log(`Computer score is ${computerScore}`);
    }
};
