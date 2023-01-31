let playerScore = 0;
let computerScore = 0;

// randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let choice = "";
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        choice = "Rock";
    }
    else if (random === 1) {
        choice = "Paper";
    }
    else if (random === 2) {
        choice = "Scissors";
    }
    return choice;
}

// plays a single round of Rock Paper Scissors
// return string that declares winner of round
function playRound(playerSelection, computerSelection) {
    // makes answer case insensitive 
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "You drew!";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        return "You lose! Rock loses to Paper.";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "You drew!";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You lose! Paper loses to Scissors.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        return "You lose! Scissors loses to Rock.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper."
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "You drew!"
    }
    else {
        return "Please choose only 'Rock' 'Paper' or 'Scissors'.";
    }
}
    
// plays rock paper scissors for 5 rounds
// displays score at the end
// reports a winner or loser at the end
function game() {
    let playerSelection = ""; 
    let computerSelection = ""; 
    let results = "";
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please choose Rock, Paper, or Scissors.");
        computerSelection = getComputerChoice();
        results = playRound(playerSelection, computerSelection);
        console.log(results);
        console.log("Match Results: Player:" + playerScore + " Computer: " + computerScore);
    }
    if (computerScore > playerScore) {
        console.log("You lost to a computer...");
    }
    else if (playerScore > computerScore) {
        console.log("Wow you beat a computer!");
    }
    else {
        console.log("Nobody won.");
    }
}
