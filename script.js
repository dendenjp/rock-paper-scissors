'use strict';
const allButtons = document.querySelectorAll('.btn');
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

btnRock.value = 'rock';
btnPaper.value = 'paper';
btnScissors.value = 'scissors';

function computerPlay() {
    let rng = Math.floor(Math.random() * 3);
    if (rng === 1) {
        return 'rock';
    } else if (rng === 2) {
        return 'paper';
    } else return 'scissors';
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerDraw = `You chose ${playerSelection}. Computer chose ${computerSelection}. The round is a draw!`;
    let playerWin = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win this round!`;
    let playerLose = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose this round!`;
    // score.textContent = `Your score is ${playerScore} and computer is ${computerScore}`;

    if (playerSelection === computerSelection) {
        result.textContent = playerDraw;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        ++computerScore;
        result.textContent = playerLose;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    }

    //add another else if for playerWin
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        ++playerScore;
        result.textContent = playerWin;
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    } //else is if input is not a rock, paper, or scissors
    else console.log('Invalid input. Please try again.');
}

allButtons.forEach((button) =>
    button.addEventListener('click', function () {
        playRound(button.value, computerPlay());
    })
);

// for (let i = 1; i <= 20; i++) {
//     game();
//     if (playerScore == 5 && computerScore < 5) {
//         console.log(`Score reached. You win!`);
//         break;
//     } else if (computerScore == 5 && playerScore < 5) {
//         console.log(`Score reached. Computer win!`);
//         break;
//     }
// };
