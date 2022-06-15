
function playRound(playerSelection, computerSelection) {
  let winner;

  // Same Pick
  if (playerSelection == computerSelection) {
    winner = "No One";
  }

  // If player picks rock
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      winner = "Computer";
    }
    else if (computerSelection == "scissors") {
      winner = "Player";
    }
  }

  // If player picks paper
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      winner = "Player";
    }
    else if (computerSelection == "scissors") {
      winner = "Computer";
    }
  }

  // If player picks scissors
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      winner =  "Computer";
    }
    else if (computerSelection == "paper") {
      winner = "Player";
    }
  }

  return winner;
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let length = choices.length;

  let pick = Math.floor(Math.random() * length)
  return choices[pick]
}


// Driver Code
let bot;
let x;

let user = prompt("Rock, Paper, Scissors: ");
if (user) {
  user = user.toLowerCase();
  bot = computerPlay();
  x = playRound(user, bot);

  console.log(`Player plays "${user.toUpperCase()}" and Computer plays "${bot.toUpperCase()}"`);
  console.log(`${x} wins`);
}