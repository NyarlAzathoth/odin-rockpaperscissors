const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return ROCK_PAPER_SCISSORS[Math.floor((Math.random()*ROCK_PAPER_SCISSORS.length))]
}

function roundResult (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a draw !'
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            return 'You Lose! Paper beats Rock'
        } else {
            playerScore++;
            return 'You Win! Rock beats Scissors'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            return 'You Win! Paper beats Rock'
        } else {
            computerScore++;
            return 'You Lose! Scissors beats Paper'
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return 'You Lose! Rock beats Scissors'
        } else {
            playerScore++;
            return 'You Win! Scissors beats Paper'
        }
    }
}

function getPlayerChoice () {
    return prompt('Rock/Paper/Scissors ? (default=rock)', 'rock');
}

function playGame (playerSelection) {
    if (!over) {
        let computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();
    
        resultButton.innerText = roundResult(playerSelection, computerSelection);
        scoreButton.innerText = `Score: Player ${playerScore}-${computerScore} Computer'`;

        if (playerScore > 4) {
            scoreButton.innerText = `You Win! The final score is ${playerScore}-${computerScore}`;
            over = true;
            return
        } else if (computerScore > 4) {
            scoreButton.innerText = `You Lose! The final score is ${playerScore}-${computerScore}`;
            over = true;
            return
        }

        roundCounter++;
        roundButton.innerText = `Round ${roundCounter}`;
    }
}

function restart () {
    over = false;
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;
    roundButton.innerText = `Round ${roundCounter}`;
    resultButton.innerText = '';
    scoreButton.innerText = `Score: Player 0-0 Computer'`;
}

const rpsButtons = document.querySelectorAll('button:not(#restart)');
const resultButton = document.querySelector('#result');
const scoreButton = document.querySelector('#score');
const roundButton = document.querySelector('#round');
const restartButton = document.querySelector('#restart');

let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;
over = false;

rpsButtons.forEach(
    (button) => {
        button.addEventListener('click', function () {playGame(button.innerText)});
    }
)

restartButton.addEventListener('click', function () {restart()});
