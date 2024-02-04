const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return rockPaperScissors[Math.floor((Math.random()*rockPaperScissors.length))]
}

function roundResult (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a draw !'
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock'
        } else {
            return 'You Win! Rock beats Scissors'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock'
        } else {
            return 'You Lose! Scissors beats Paper'
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors'
        } else {
            return 'You Win! Scissors beats Paper'
        }
    }
}

function getPlayerChoice () {
    return prompt('Rock/Paper/Scissors ? (default=rock)', 'rock');
}

function playGame (rounds = 5) {
    for (let i = 0; i<rounds; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        playerSelection.toLowerCase();

        if (rockPaperScissors.includes(playerSelection)) {
            console.log(roundResult(playerSelection, computerSelection));
        } else {
            i--;
            console.log('Prompt not valid (enter "rock", "paper" or "scissors")');
        }
    }
}

playGame(5)