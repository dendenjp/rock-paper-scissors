'use strict';
const allButtons = document.querySelectorAll('.btn');
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const playerScoreEl = document.querySelector('.score-player');
const computerScoreEl = document.querySelector('.score-computer');
const score = document.querySelector('.score');
const resultSelection = document.querySelector('.result-selection');
const resultGame = document.querySelector('.result-game');

const resultContainer = document.querySelector('.result-container');

let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
    let playerDraw = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    let playerWin = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    let playerLose = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    // score.textContent = `Your score is ${playerScore} and computer is ${computerScore}`;

    if (playerSelection === computerSelection) {
        resultSelection.textContent = playerDraw;
        resultGame.textContent = 'The game is a draw!';

        // score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        ++computerScore;
        resultSelection.textContent = playerLose;
        resultGame.textContent = 'You lose!';

        // score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
    }

    //add another else if for playerWin
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        ++playerScore;
        resultSelection.textContent = playerWin;
        resultGame.textContent = 'You win!';

        // score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
    } //else is if input is not a rock, paper, or scissors
    else console.log('Invalid input. Please try again.');

    if (playerScore === 5 || computerScore === 5) console.log('GAME ENDS!');
}

function resetPage() {
    resultContainer.classList.add('--visible');
    resultContainer.addEventListener('transitionend', function () {
        resultContainer.classList.remove('--visible');

        console.log('reset!');
    });
}

allButtons.forEach((button) =>
    button.addEventListener('click', function () {
        playRound(button.value, computerPlay());
        resultContainer.classList.remove('--hidden');
        resetPage();
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
