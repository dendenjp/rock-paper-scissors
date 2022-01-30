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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    let playerDraw = `You chose ${playerSelection}. Computer chose ${computerSelection}. The round is a draw!`;
    let playerWin = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win this round!`;
    let playerLose = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose this round!`;


    if (playerSelection === computerSelection) {
        console.log(playerDraw);
        console.log(`Your score is ${playerScore} and computer is ${computerScore}`);
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
             (playerSelection === "scissors" && computerSelection === "rock") || 
             (playerSelection === "paper" && computerSelection === "scissors")) {
                 ++computerScore;
                 console.log(playerLose);
                 console.log(`Your score is ${playerScore} and computer is ${computerScore}`);
             }
    
    //add another else if for playerWin
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "paper") ||
             (playerSelection === "paper" && computerSelection === "rock")) {
                 ++playerScore;
                 console.log(playerWin);
                 console.log(`Your score is ${playerScore} and computer is ${computerScore}`);
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

for (let i = 1; i <= 20; i++) {
    game();
    if (playerScore == 5 && computerScore < 5) {
        console.log(`Score reached. You win!`);
        break;
    } else if (computerScore == 5 && playerScore < 5) {
        console.log(`Score reached. Computer win!`);
        break;
    }
};
