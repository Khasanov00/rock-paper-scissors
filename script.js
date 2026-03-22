function getRandomInt(min, max) {
  const minCieled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCieled) + minCieled);
}

let compiChoice = document.getElementById("compChoice");

function getComputerChoice() {
  const choice = getRandomInt(0, 3);

  if (choice === 0) {
    compiChoice.textContent = "rock";
    return "rock";
  } else if (choice === 1) {
    compiChoice.textContent = "paper";
    return "paper";
  } else {
    compiChoice.textContent = "scissors";
    return "scissors";
  }
}

let rockButton = document.getElementById("rockBtn");
let scissorsButton = document.getElementById("scissorsBtn");
let paperButton = document.getElementById("paperBtn");

function play(choice) {
  document.getElementById("playerChoice").textContent = choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    return "Win";
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    return "Lose";
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    return "Lose";
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    return "Win";
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    return "Win";
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    return "Lose";
  }
}

let humanScore = 0;
let computerScore = 0;

function handleClick(humanChoice) {
  play(humanChoice);

  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);

  if (result === "Win") {
    humanScore++;
  } else if (result === "Lose") {
    computerScore++;
  }

  document.getElementById("result").textContent = result;

  document.getElementById("score").textContent =
    humanScore + " : " + computerScore;

  // First to 5 wins
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      document.getElementById("result").textContent = "You won the game!";
    } else {
      document.getElementById("result").textContent = "Computer won the game!";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => handleClick("rock"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));
paperButton.addEventListener("click", () => handleClick("paper"));