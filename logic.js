// A Game or Rock, Paper, and Scissors

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

  if (winner == "Player") {
    userScore += 1;
  }
  else if (winner == "Computer") {
    compScore += 1;
  }

  return winner;
}

function computerPlay() {
  let length = choices.length;

  let pick = Math.floor(Math.random() * length)
  return choices[pick]
}

function playerTurn() {
  let user = prompt("Rock, Paper, Scissors: ");
  if (choices.includes(user)) {
    user = user.toLowerCase();
  }
  return user;
}

function game() {
  let user, comp, winner;

  for (let i=1; i <= 5; i++) {
    user = playerTurn();
    comp = computerPlay();
    winner = playRound(user, comp);
    console.log(winner);
  }
}

// Driver Code
let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

game();