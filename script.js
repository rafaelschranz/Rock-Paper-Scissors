let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanSelection && computerSelection) {
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
  } else {
    console.log("Invalid game setup.");
  }

  console.log(
    "Round " + (i + 1) + " - Computer's choice: " + computerSelection
  );
  console.log(
    "Human Score: " + humanScore + ", Computer Score: " + computerScore
  );
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

// Ensure both selections are valid before playing the round
if (humanSelection && computerSelection) {
  const result = playRound(humanSelection, computerSelection); // Capture the result
  console.log(result); // Display the result
} else {
  console.log("Invalid game setup.");
}
function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return "Tie";
  }

  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "The Computer has won!";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "The Computer has won!";
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "The Computer has won!";
  } else {
    humanScore++;
    return "You won!";
  }
}
playRound();
console.log("Computer's choice: " + computerSelection); // Correctly log the computer's choice
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
console.log(
  "Final Scores - Human: " + humanScore + ", Computer: " + computerScore
);
