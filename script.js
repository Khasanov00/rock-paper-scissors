function getRandomInt(min, max) {
    const minCieled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCieled) + minCieled);
}

function getComputerChoice() {
    const choice = getRandomInt(0, 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    const userInput = window.prompt("Enter your choice:");
    const humanChoice = userInput.toLowerCase();
    return humanChoice;
}

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

if( humanScore > computerScore){
    console.log("You beat the computer");
}else if( computerScore > humanScore){
    console.log("You lost");
}else{
    console.log("it is a tie!");
}