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
    if (computerSelection == playerSelection) {
        alert("It's a tie!")
        return;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
        alert("You win! The Rock can't resist them paper$!");
        return;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
        alert("Looooser! The Rock don't scissor no one!")
        return;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
        alert("You win! The best scissoring in life can't be bought with papers!")
        return;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
        alert("Looooser! The Rock will always fall victim to the papers' bidding!")
        return;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
        alert("You win mate! The Rock don't use no scissors!");
        return;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        alert('Looooser! Them papers don\'t mean nothing if you know how to sccissor!')
        return;
    }

}
// record the result and start another round
// if the player or the computer reaches 3 - they win