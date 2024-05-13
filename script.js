let computerScore = 0;
let humanScore = 0;

let buttons = document.querySelector(".buttons");
let results = document.querySelector(".results");
let computer = document.querySelector(".computer");
let human = document.querySelector(".human");
let gameover = document.querySelector(".gameover");

// event listener
buttons.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    let humanChoice = e.target.id;

    playRound(humanChoice, computerChoice)
});


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

function playRound(humanChoice, computerChoice) {
    // sets all human inputs to lowercase
    humanChoice = humanChoice.toLowerCase();

    // outputs the winner and increments the score
    if (humanChoice == computerChoice) {
        results.textContent = (`You tied! ${humanChoice} ties with ${computerChoice}.`);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = (`You lost! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        results.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = (`You lost! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        results.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = (`You lost! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        results.textContent = ("There was an error in this round.")
    }

    computer.textContent = `Computer: ${computerScore}`;
    human.textContent = `Human: ${humanScore}`;

    if (computerScore == 5) {
        gameover.textContent = ("You lost!");
        computerScore = 0;
        humanScore = 0;     
    } else if (humanScore == 5) {
        gameover.textContent = ("You won!");
        computerScore = 0;
        humanScore = 0;
    }

    
}
