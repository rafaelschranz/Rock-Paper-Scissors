document.addEventListener("DOMContentLoaded", () => {
  let humanScore = 0;
  let computerScore = 0;

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");

  rockButton.addEventListener("click", () => userInput("rock"));
  paperButton.addEventListener("click", () => userInput("paper"));
  scissorsButton.addEventListener("click", () => userInput("scissors"));

  function userInput(choice) {
    const humanSelection = choice;
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    document.getElementById("results").textContent = result;

    console.log("Computer's choice: " + computerSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log(
      "Final Scores - Human: " + humanScore + ", Computer: " + computerScore
    );
  }

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

  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      return "Tie";
    }

    if (
      (humanSelection === "rock" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "rock")
    ) {
      computerScore++;
      return "The Computer has won!";
    } else {
      humanScore++;
      return "You won!";
    }
  }
});
