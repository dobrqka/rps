// the computer's choice - randomly returns: Rock, Paper or Scissors

function getComputerChoice() {
const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
let chosenOne = computerChoices[Math.floor(Math.random()*computerChoices.length)];
return chosenOne;
}

// gets the players choice

function getPlayerChoice () {
    let playerChoice = prompt("Choose your weapon!");
    let choiceInsensitive = playerChoice.toUpperCase();

    if (choiceInsensitive == "ROCK") {
        alert("If you smell... what The Rock is cooking!")
        return choiceInsensitive;
    }
    else if (choiceInsensitive == "PAPER") {
        alert("You like them paper$!");
        return choiceInsensitive;
    }
    else if (choiceInsensitive == "SCISSORS") {
        alert("Scissor me Timbers!");
        return choiceInsensitive;
    }
    else {alert("Wise guy eh!?")}
}

// stores the player and computer choices from the functions into variables

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

// plays a single round

function singleRound (playerSelection, computerSelection) {

}

// record the result and start another round
// if the player or the computer reaches 3 - they win