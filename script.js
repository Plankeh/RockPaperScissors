let playerScore = 0;
let computerScore = 0;
let draws = 0;
let roundResult;

function chooseRock() {
    playerSelection = "ROCK";
    roundResult = playRound(playerSelection, getComputerChoice());
    updateScore();
    announceResult();
}

function choosePaper() {
    playerSelection = "PAPER";
    roundResult = playRound(playerSelection, getComputerChoice());
    updateScore();
    announceResult();
}

function chooseScissors() {
    playerSelection = "SCISSORS";
    roundResult = playRound(playerSelection, getComputerChoice());
    updateScore();
    announceResult();
}

function getComputerChoice() {
    let computerChoiceNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    if (computerChoiceNumber === 1) {
        computerChoice = "Rock";
    } 
    else if (computerChoiceNumber === 2) {
        computerChoice = "Scissors";
    }
    else if (computerChoiceNumber === 3) {
        computerChoice = "Paper";
    }
    computerChoice = computerChoice.toUpperCase();
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
        let outcome;
        if ((playerSelection === "ROCK") && (computerSelection === "PAPER" )) {
            outcome = "You lose! Paper beats rock.";
            computerScore++;
        }
        else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS" )) {
            outcome = "You win! Rock beats scissors.";
            playerScore++;
        }
        else if ((playerSelection === "ROCK") && (computerSelection === "ROCK" )) {
            outcome = "Draw! Rock is equal to rock.";
            draws++;
        }
        else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER" )) {
            outcome = "You win! Scissors beats paper.";
            playerScore++;
        } 
        else if ((playerSelection === "SCISSORS" ) && (computerSelection === "SCISSORS" )) {
            outcome = "Draw! Scissors is equal to scissors.";
            draws++;
        }
        else if ((playerSelection === "SCISSORS" ) && (computerSelection === "ROCK" )) {
            outcome = "You lose! Rock beats scissors.";
            computerScore++;
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "PAPER" )) {
            outcome = "Draw! Paper equals paper.";
            draws++;
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "SCISSORS" )) {
            outcome = "You lose! Scissors beats paper.";
            computerScore++;
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "ROCK" )) {
            outcome = "You win! Paper beats rock.";
            playerScore++;
        }
        return outcome;
    }

        function resetScore() {
            playerScore = 0;
            computerScore = 0;
            draws = 0;
        }

function updateScore() {
if (playerScore === 5) {
    alert("Player wins!");
    resetScore();
}
else if (computerScore === 5) {
    alert("Computer wins!");
    resetScore();
}
else if (draws === 5) {
    alert("It's a draw!");
    resetScore();
}
const scoreText = document.getElementById("practice");
        const divScore = document.createElement('div');
        divScore.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draws: ${draws}`;
        scoreText.appendChild(divScore);
}
function announceResult() {
    const containerDiv = document.getElementById("container");
    const scoreText = document.getElementById("practice");
    const resultText = document.createElement('div');
    resultText.textContent = roundResult;
    containerDiv.insertBefore(resultText, scoreText);
}