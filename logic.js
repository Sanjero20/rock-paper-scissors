// A Game or Rock, Paper, and Scissors

// Driver Code
let user = "";
let computer = "";
let winner = "";
let userScore = 0;
let compScore = 0;

const body = document.querySelector('body');

const userDisplay = document.querySelector("#user-display");
const compDisplay = document.querySelector("#comp-display");

const userScoreDisplay = document.querySelector("div#you.score");
const compScoreDisplay = document.querySelector("div#bot.score");

const div = document.querySelector('#round-winner');
const buttons = document.querySelectorAll("button");

let imgPlayer = document.createElement('img');
let imgComputer = document.createElement('img');

// Add event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    user = button.id;
    computer = computerPlay()
    winner = playRound(user, computer)

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

function displayChoices(user, comp) {
  imgPlayer.src = convertToImage(user);
  userDisplay.appendChild(imgPlayer)

  imgComputer.src = convertToImage(comp);
  compDisplay.appendChild(imgComputer)
}

function convertToImage(answer) {
  console.log(answer);
  let imgSource;
  switch(answer){
    case "rock":
      imgSource = "images/rock.png";
      break;
    case "paper":
      imgSource = "images/paper.png";
      break;
    case "scissors":
      imgSource = "images/scissors.png";
      break;
  }
  return imgSource;
}

function displayWinner() {
  div.innerHTML = `Round winner: ${winner}`;
}

function trackScore(winner) {
  const greenColor = "#0F0"
  const redColor = "#F00"
  
  if (winner == "Player") {
    userScore += 1;
    userScoreDisplay.textContent = userScore;
    userDisplay.setAttribute("style", `background-color: ${greenColor}`);
    compDisplay.setAttribute("style", `background-color: ${redColor}`);
  }
  else if (winner == "Computer") {
    compScore += 1;
    compScoreDisplay.textContent = compScore;
    userDisplay.setAttribute("style", `background-color: ${redColor}`);
    compDisplay.setAttribute("style", `background-color: ${greenColor}`);
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
