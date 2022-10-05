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
let playerResult = 0;
let computerResult = 0;

// plays a single round

function playRound (playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        alert("It's a tie!")
        return;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
        alert("You win! The Rock can't resist them paper$!");
        return playerResult += 1;
    } 
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
        alert("Looooser! The Rock don't scissor no one!")
        return computerResult += 1;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
        alert("You win! The best scissoring in life can't be bought with papers!")
        return playerResult += 1;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
        alert("Looooser! The Rock will always fall victim to the papers' bidding!")
        return computerResult += 1;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
        alert("You win mate! The Rock don't use no scissors!");
        return playerResult += 1;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        alert('Looooser! Them papers don\'t mean nothing if you know how to sccissor!')
        return computerResult += 1;
    }

}

// game function that calls the playRound function and records the results until someone wins - THIS ONE IS STILL VERY MUCH OFF!    

function game() {
    playRound(playerSelection, computerSelection);
    if (playerResult == 3) {
        alert(`That's it, you win! 
        The overall score is: 
        You: ${playerResult} Robot: ${computerResult}`);
        return;
    }
    else if (computerResult == 3) {
        alert(`Sorry booooi! U a loser! 
        The overall score is: 
        You: ${playerResult} Robot: ${computerResult}`);
        return;
    }
    else { 
        alert(`Score:
        You: ${playerResult} Robot: ${computerResult}`)
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        game() }
}

game();