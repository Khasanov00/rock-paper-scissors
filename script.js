function getRandomInt(min, max) {
    const minCieled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCieled) + minCieled);
}
let compiChoice=document.getElementById("compChoice");

function getComputerChoice() {
    const choice = getRandomInt(0, 3);

    if (choice === 0) {
    compiChoice.textContent="rock";
        return "rock";
    } else if (choice === 1) {
         compiChoice.textContent="paper";
        return "paper";
    } else {
         compiChoice.textContent="scissors";
        return "scissors";
    }
}
let rockButton=document.getElementById("rockBtn");
let scissorsButton=document.getElementById("scissorsBtn");
let paperButton=document.getElementById("paperBtn");

function play(choice) {
  document.getElementById("playerChoice").textContent = choice;
}

rockButton.addEventListener("click", ()=> {play("rock")
getComputerChoice()});
scissorsButton.addEventListener("click", () => {play("scissors")
getComputerChoice()});
paperButton.addEventListener("click", () => {play("paper")
getComputerChoice()});





function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "Tie!";
    } else if (computerChoice == 'rock' && humanChoice == 'paper') {
        return "Win";
    } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
        return "Lose";
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        return "Lose";
    } else if (computerChoice == 'paper' && humanChoice == 'scissors'){
        return "Win";
    } else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        return "Win";
    } else if (computerChoice == 'paper' && humanChoice == 'rock'){
        return "Lose";
    }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Computer's choice is:", computerChoice);
    console.log("Your choice is:", humanChoice);

    const result = playRound(humanChoice, computerChoice);
    console.log(result);

    if(result == "Win"){
        humanScore++;
    } else if (result == "Lose") {
        computerScore++;
    }
}
function showResult() {
  let result = document.getElementById("result");

  if (humanScore > computerScore) {
    result.textContent = "You beat the computer";
  } else if (computerScore > humanScore) {
    result.textContent = "You lost";
  } else {
    result.textContent = "It is a tie!";
  }
}