let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";

    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper or Scissors?");
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors")
    return userInput;
  else console.log("false entry");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return "Tie";
  }

  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "The Computer has won!";
  } else {
    humanScore++;

    return "You won!";
  }

  if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "The Computer has won!";
  } else {
    humanScore++;

    return "You won!";
  }
  if (humanSelection === "scissors" && computerSelection === "rock") {
    return "The Computer has won!";
    computerScore++;
  } else {
    humanScore++;

    return "You won!";
  }
}
playRound();
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
