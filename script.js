const choices = ["Rock✊", "Paper✋", "Scissors✌", "Gun🔫", "Lightning⚡", "Devil😈", 
    "Dragon🐉", "Water🌊", "Air💨", "Sponge🧽", "Wolf🐺", "Tree🌲", 
    "Human🧍", "Snake🐍", "Fire🔥"];

const playerDisplay = document.getElementById("player-display"); // Player's choice display
const computerDisplay = document.getElementById("computer-display"); // Computer's choice display
const resultDisplay = document.getElementById("result-display"); // Display game result
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); // Player score display
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); // Computer score display
const roundsOutput = document.getElementById("rounds-output"); // Display remaining rounds
const gameButtonsContainer = document.getElementById("game-buttons"); // Container for game buttons

const startGameElements = document.querySelectorAll(".start-game-element"); // Start elements
const selectElement = document.getElementById('rounds'); // Dropdown for selecting rounds
const submitDropDown = document.getElementById("submit"); // Submit button for rounds selection
const roundsSelect = document.getElementById("rounds-select"); // Element for round selection

const replayButton = document.getElementById("play-again"); // Replay button

let remainingRounds = 0; // Tracks the remaining rounds
let playerScore = 0; // Player's score
let computerScore = 0; // Computer's score

// Event listener for submitting the selected number of rounds
submitDropDown.addEventListener('click', () => {
    const selectedValue = parseInt(selectElement.value); // Get selected rounds
    remainingRounds = selectedValue; // Set remaining rounds
    roundsOutput.textContent = `${selectedValue} Rounds Left`; // Update display

    // Remove "hide-element" class to reveal game elements
    const disableHide = document.getElementsByClassName("hide-element");
    while (disableHide.length) {
        disableHide[0].className = disableHide[0].className.replace(/\bhide-element\b/g, "");
    }
    roundsSelect.classList.add("hide-element"); // Hide rounds selection
    replayButton.classList.add("hide-element"); // Hide replay button
});

// Main function for handling game logic when a player makes a choice
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 15)]; // Random computer choice
    remainingRounds--; // Decrease remaining rounds

    // Update remaining rounds display
    roundsOutput.textContent = remainingRounds > 0 ? 
        `${remainingRounds} Rounds Left` : "Game Over, Play Again?";

    let result = ""; // Initialize result string

    // Determine the outcome of the round
    if (playerChoice === computerChoice) {
        result = "Its a Tie!";
    } else {
        switch (playerChoice) { 
            case "Rock✊":
                result = (computerChoice === "Scissors✌") || (computerChoice === "Sponge🧽") || 
                (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || 
                (computerChoice === "Human🧍") || (computerChoice === "Snake🐍") || 
                (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            // Similar logic for other cases...
        }
    }

    // Handle game over scenario
    if (remainingRounds === 0) {
        const children = gameButtonsContainer.children; // Hide game buttons
        if (playerScore > computerScore) {
            result = `Congrats You Win! You Scored ${playerScore} points!`;
            resultDisplay.classList.add("green-Text");
            resultDisplay.classList.remove("red-Text");
            resultDisplay.classList.remove("gold-Text");
        } else if (computerScore > playerScore) {
            result = `Oh No, You Lose! You Scored ${playerScore} but the computer Scored ${computerScore}`;
            resultDisplay.classList.add("red-Text");
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("gold-Text");
        } else {
            result = "It's a Draw!";
            resultDisplay.classList.add("gold-Text");
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("red-Text");
        }

        // Hide elements after game ends
        for (let child of children) {
            child.classList.add("hide-element");
        }
        playerDisplay.classList.add("hide-element");
        computerDisplay.classList.add("hide-element");
        replayButton.classList.remove("hide-element");
    }

    // Update displays for player choice, computer choice, and result
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER ${computerChoice}`;
    resultDisplay.textContent = result;

    // Update scores and result styling based on the outcome
    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("green-Text");
            resultDisplay.classList.remove("red-Text");
            resultDisplay.classList.remove("gold-Text");
            playerScore++; // Increment player score
            playerScoreDisplay.textContent = playerScore; // Update display
            break;
        case "You Lose!":
            resultDisplay.classList.add("red-Text");
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("gold-Text");
            computerScore++; // Increment computer score
            computerScoreDisplay.textContent = computerScore; // Update display
            break;
        case "Its a Tie!":
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("red-Text");
            resultDisplay.classList.add("gold-Text");
    }

    // Replay button event listener to reset the game
    replayButton.addEventListener("click", () => {
        resultDisplay.textContent = ""; // Clear result text
        startGameElements.forEach(element => element.classList.add("hide-element")); // Hide elements

        roundsOutput.classList.add("hide-element"); // Hide rounds output
        roundsSelect.classList.remove("hide-element"); // Show rounds selection

        // Reset game displays and scores
        playerDisplay.textContent = `PLAYER: `;
        computerDisplay.textContent = `COMPUTER `;
        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
    });
}
