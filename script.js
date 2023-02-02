let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let results = "";

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
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "You drew! You both played Rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        return "You lose! Rock loses to Grass.";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return "You win! Rock beats Axe.";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return "You win! Grass beats Rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "You drew! You both played Grass";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You lose! Grass loses to Axe.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        return "You lose! Axe loses to Rock.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You win! Axe beats Grass."
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "You drew! You both played Axe."
    }
}


// tools buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const information = document.getElementById('information');

// play again button
const playAgainButton = document.createElement('button');
const text = document.createTextNode("play again");

// event listeners
rockButton.addEventListener("click", rockPressed);
paperButton.addEventListener("click", paperPressed);
scissorsButton.addEventListener("click", scissorsPressed);
playAgainButton.addEventListener("click", playAgainPressed);


// functions
// rock button pressed
function rockPressed() {
    playerSelection = "rock";
    information.innerText = playRound(playerSelection, getComputerChoice()) + 
    "\nYou: " + playerScore + "\n Sprout Bunny: " + computerScore;
    checkScore();
};  

// paper button pressed
function paperPressed() {
    playerSelection = "paper";
    information.innerText = playRound(playerSelection, getComputerChoice()) + 
    "\nYou: " + playerScore + "\n Sprout Bunny: " + computerScore;
    checkScore();
};  

// scissors button pressed
function scissorsPressed() {
    playerSelection = "scissors";
    information.innerText = playRound(playerSelection, getComputerChoice()) + 
    "\nYou: " + playerScore + "\n Sprout Bunny: " + computerScore;
    checkScore();
};  

function checkScore() {
    if (playerScore > 4) {
        disableButtons();
        information.innerText = "You beat Sprout Bunny! :D" + 
        "\nYou: " + playerScore + "\n Sprout Bunny: " + computerScore +
        "\n\n";    
        playAgainButton.appendChild(text);
        information.appendChild(playAgainButton);
    }
    
    if (computerScore > 4) {
        disableButtons();
        information.innerText = "You lost to Sprout Bunny! D:" + 
        "\nYou: " + playerScore + "\n Sprout Bunny: " + computerScore +
        "\n\n";
        playAgainButton.appendChild(text);
        information.appendChild(playAgainButton);
    }
}

function playAgainPressed(){
    playerScore = 0;
    computerScore = 0; 
    information.innerText = "Choose a tool to begin playing!"
    enableButtons();
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}