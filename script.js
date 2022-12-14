// set initial score

let playerScore = 0;
let computerScore = 0;

// variables for the results

const playerResult = document.querySelector('.playerResult');
const computerResult = document.querySelector('.computerResult');

// get a random computer selection

function computerSelection() {
  const computerChoices = ["bomb", "cockroach", "foot"];
  let chosenOne =     computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return chosenOne;
}

// play a round of the game depending on the button pressed by player, and record the score in a div

function playRound (playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        alert("It's a tie!");
        return;
    }
    else if ((computerSelection == 'bomb' && playerSelection == 'cockroach') || (computerSelection == 'cockroach' && playerSelection == 'foot') || (computerSelection == 'foot' && playerSelection == 'bomb')) {
      alert('You win!');
      playerScore += 1;
      playerResult.textContent = `Player Score: ${playerScore}`;
      if (playerScore == 5) { alert('You are the new Champion!')}
      else return;
    } 
    else if ((computerSelection == 'bomb' && playerSelection == 'foot') || (computerSelection == 'cockroach' && playerSelection == 'bomb') || (computerSelection == 'foot' && playerSelection == 'cockroach')) {
      alert('You lose.');
      computerScore += 1;
      computerResult.textContent = `Computer Score: ${computerScore}`;
      if (computerScore == 5) { alert('Game Over.')}
      else return;
    }
}

// make the buttons play the round

const theButtons = document.querySelectorAll('.buttons button');
for (i=0; i<theButtons.length; i++) {
 theButtons[i].addEventListener('click', (e) =>  {playRound(e.target.className, computerSelection())})
}

// create a button that shows the rules

const rules = document.createElement('button');
rules.textContent = 'Rules';
document.body.appendChild(rules);

function showRules () {
  alert("This is just like the classic game but with a twist. Here are the rules: Atomic Bomb makes Foot explode, Foot squashes Cockroach and Cockroach survives Atomic Bomb! Have fun and may the force be with you!");
}

rules.addEventListener('click', showRules);