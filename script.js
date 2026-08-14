// Step 2 - Computer Choice
// create function getComputerChoice
// random(number) { return Math.floor(Math.random() * number);
//tell function to select a number at random between 0 -2
//give each number a result for one of the words)
//return words

function getComputerChoice() { 
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return string = "rock";
    } else if (num === 1) {
        return string = "paper";
    } else if (num === 2) {
        return string = "scissors";
    }
}

console.log(getComputerChoice());

// Step 3 - Human Choice
// create function getHumanChoice
// tell user to input one of the 3 words

function getHumanChoice() {
    let human = window.prompt("Play your hand!");
    return human;
}

console.log(getHumanChoice());

// Step 4 - Players Score
// create a var to get the humanScore - global scope and initial value of 0
// create a var to get the computerScore - global scope and initial value of 0
let humanScore = 0;
let computerScore = 0;

// Step 5 - Single Round
// create function playRound with 2 param: humanChoice & computerChoice
// humanChoice is case-insensitive
// console.log representing round winner
// increment both scores by one

function playRound(humanChoice, computerChoice) {
    getHumanChoice().toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log ("Human won! Rock beats scissors!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log ("Computer won! Rock beats scissors!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        computerScore++
        console.log ("Human won! Paper beats rock!"); 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);