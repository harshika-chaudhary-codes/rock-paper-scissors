let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Computer randomly chooses
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    // Check result
    if (playerChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        playerScore++;
    }
    else {
        result = "Computer Wins! 🤖";
        computerScore++;
    }

    // Display choices
    document.getElementById("playerChoice").textContent =
        "Your choice: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Computer choice: " + computerChoice;

    // Display result
    document.getElementById("result").textContent = result;

    // Update score
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";

    document.getElementById("playerChoice").textContent =
        "Your choice: -";

    document.getElementById("computerChoice").textContent =
        "Computer choice: -";

    document.getElementById("result").textContent =
        "Make your move!";
}