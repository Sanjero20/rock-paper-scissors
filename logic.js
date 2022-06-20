// A Game or Rock, Paper, and Scissors

// Driver Code
let roundNumber = 1;
let user = "";
let computer = "";
let winner = "";
let userScore = 0;
let compScore = 0;

const body = document.querySelector('body');

const round =document.querySelector('section#rounds')

const userDisplay = document.querySelector("#user-display");
const compDisplay = document.querySelector("#comp-display");

const userScoreDisplay = document.querySelector("div#you.score");
const compScoreDisplay = document.querySelector("div#bot.score");

const div = document.createElement('div');
const buttons = document.querySelectorAll("button");

// Add event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    user = button.id;
    computer = computerPlay()
    winner = playRound(user, computer)

    roundNumber += 1;
    round.textContent = `ROUND ${roundNumber}`;

    displayChoices(user, computer);
    displayWinner();
    trackScore(winner);
    setTimeout(promptWinner, 100);
  })
});


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
  const choices = ["rock", "paper", "scissors"];
  let length = choices.length;

  let pick = Math.floor(Math.random() * length)
  return choices[pick]
}

function displayChoices(user, computer) {
  userDisplay.textContent = user;
  compDisplay.textContent = computer;
}

function displayWinner() {
  div.setAttribute('style', 'font-size: 20px; text-align: center');
  div.innerHTML = `${winner}`;
  body.appendChild(div);
}

function trackScore(winner) {
  if (winner == "Player") {
    userScore += 1;
    userScoreDisplay.textContent = userScore;
    userDisplay.setAttribute("style", "background-color: green");
    compDisplay.setAttribute("style", "background-color: red");
  }
  else if (winner == "Computer") {
    compScore += 1;
    compScoreDisplay.textContent = compScore;
    userDisplay.setAttribute("style", "background-color: red");
    compDisplay.setAttribute("style", "background-color: green");
  }
  else {
    userDisplay.setAttribute("style", "background-color: grey");
    compDisplay.setAttribute("style", "background-color: grey");
  }
}

function promptWinner() {
  if(userScore >= 5) {
    window.alert("You win")
    reset();
  }
  else if(compScore >= 5) {
    window.alert("Computer Wins")
    reset();
  }
}

function reset() {
  roundNumber = 1;
  round.textContent = "ROUND 1";

  userScore = 0;
  userScoreDisplay.textContent = 0;
  userDisplay.textContent = "";
  userDisplay.removeAttribute("style", "background-color");

  compScore = 0;
  compScoreDisplay.textContent = 0;
  compDisplay.textContent = "";
  compDisplay.removeAttribute("style", "background-color");

  div.innerHTML = "";
}
