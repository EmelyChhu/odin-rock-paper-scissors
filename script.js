playGame();

function getComputerChoice() {
    // stores a random number from 1 to 3
    let computerChoice = parseInt(Math.random() * 3 + 1);
    
    // returns the computer choice
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "none";
    }
}

function getHumanChoice() {
    // asks the human to input a choice
    let humanChoice = prompt("Choose rock, paper, or scissors!");
    
    // returns the human choice
    return humanChoice;
}

function playGame() {
    // variables to store player scores
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        // sets all human inputs to lowercase
        humanChoice = humanChoice.toLowerCase();
    
        // outputs the winner and increments the score
        if (humanChoice == computerChoice) {
            console.log(`You tied! ${humanChoice} ties with ${computerChoice}.`);
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log("There was an error in this round.")
        }
    }

    // loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice)
    }

    // print score
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);

    // print winner
    if (computerScore == humanScore) {
        console.log("You tied!");
    } else if (computerScore < humanScore) {
        console.log("You won!");
    } else {
        console.log("You lost!")
    }
}