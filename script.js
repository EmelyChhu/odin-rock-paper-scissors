

console.log(getComputerChoice())
console.log(getHumanChoice())

function getComputerChoice() {
    // stores a random number from 1 to 3
    let computerChoice = parseInt(Math.random() * 3 + 1);
    
    // returns a computer choice according to the random number
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
    let userChoice = prompt("Choose rock, paper, or scissors!");
    return userChoice;
}