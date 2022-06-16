// A Game or Rock, Paper, and Scissors

function playRound(playerSelection, computerSelection) {
  let winner;

  // Same Pick
  if (playerSelection == computerSelection) {
    winner = "Draw";
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

function trackScore(winner) {
  if (winner == "Player") {
    userScore += 1;
  }
  else if (winner == "Computer") {
    compScore += 1;
  }
  console.log(`Player:\t\t${userScore}\nComputer:\t${compScore}`)
}

function checkWinner(userScore, compScore) {
  if (userScore === compScore) {
    console.log("It's a Tie!");
  }
  else if (userScore > compScore) {
    console.log("You Win!");
  }
  else if (userScore < compScore) {
    console.log("You Lose!");
  }
}

function game() {
  let user, comp, winner;

  for (let i=1; i <= 5; i++) {
    user = playerTurn();
    if (user == undefined) {break}

    comp = computerPlay();
    winner = playRound(user, comp);
    console.log("Winner:", winner);
    trackScore(winner);
  }
}

// Driver Code
let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

game();
checkWinner(userScore, compScore)