// Step 2 - Computer Choice

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

function getHumanChoice() {
    let human = prompt("Play your hand!");
    return human;
}

// console.log(getHumanChoice());

// Step 4 - Players Score

// MY CODE BEFORE MOVING TO STEP 6:
// let humanScore = 0;
// let computerScore = 0;

// Step 5 - Single Round

// MY CODE BEFORE MOVING TO STEP 6:
// function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase();
//     if (humanChoice === computerChoice) {
//         console.log("It's a tie!!!");
//     } else if ((humanChoice === "rock" && computerChoice === "scissors") ||(humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
//         humanScore++;
//         console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
//     } else {
//         computerScore++;
//         console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// Step 6 - Game Logic

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
        console.log("It's a tie!!!");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||(humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`Human wins this round! ${humanChoice} beats ${computerChoice}!`);
        } else {
        computerScore++;
        console.log(`Computer wins this round! ${computerChoice} beats ${humanChoice}!`);
        }
    }
    
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Human wins the game, with ${humanScore} - ${computerScore} points!`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game, with ${computerScore} - ${humanScore} points!`);
    } else {
        console.log("Great minds think alike! You both win!");
    }
}

playGame();