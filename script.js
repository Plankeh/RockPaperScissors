function getComputerChoice() {
    let computerChoiceNumber = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoiceNumber);
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
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose "Rock", "Paper", or "Scissors"');
    playerSelection = playerSelection.toUpperCase();
    if ((playerSelection === "ROCK") || (playerSelection === "PAPER") || (playerSelection === "SCISSORS")) {
        computerSelection = getComputerChoice();
        let outcome;
        if ((playerSelection === "ROCK") && (computerSelection === "PAPER" )) {
            outcome = "You lose! Paper beats rock.";
        }
        else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS" )) {
            outcome = "You win! Rock beats scissors.";
        }
        else if ((playerSelection === "ROCK") && (computerSelection === "ROCK" )) {
            outcome = "Draw! Rock is equal to rock.";
        }
        else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER" )) {
            outcome = "You win! Scissors beats paper.";
        } 
        else if ((playerSelection === "SCISSORS" ) && (computerSelection === "SCISSORS" )) {
            outcome = "Draw! Scissors is equal to scissors.";
        }
        else if ((playerSelection === "SCISSORS" ) && (computerSelection === "ROCK" )) {
            outcome = "You lose! Rock beats scissors.";
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "PAPER" )) {
            outcome = "Draw! Paper equals paper.";
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "SCISSORS" )) {
            outcome = "You lose! Scissors beats paper.";
        }
        else if ((playerSelection === "PAPER" ) && (computerSelection === "ROCK" )) {
            outcome = "You win! Paper beats rock.";
        }
        return outcome;
    }
    else {
        alert("Please choose 'Rock', 'Paper', or 'Scissors'.");
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (let i = 1; i < 6; i++) {
    let roundResult = playRound(); 
    if (roundResult.substring(0, 5) === "You w") {
        playerScore++;
    }
    else if (roundResult.substring(0, 5) === "You l") {
        computerScore++;
    }
    else if (roundResult.substring(0, 5) === "Draw!") {
        draws++;
    }
    console.log (`Player Score: ${playerScore}, Computer Score: ${computerScore}, Draws: ${draws}`);
    }
}

playGame();