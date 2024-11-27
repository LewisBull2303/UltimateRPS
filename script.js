// Array of possible choices in the game.
const choices = ["Rock✊", "Paper✋", "Scissors✌", "Gun🔫", "Lightning⚡", "Devil😈", "Dragon🐉", "Water🌊", "Air💨", "Sponge🧽", "Wolf🐺", "Tree🌲", "Human🧍", "Snake🐍", "Fire🔥"];

// DOM elements used to display game results and scores.
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const roundsOutput = document.getElementById("rounds-output");
const gameButtonsContainer = document.getElementById("game-buttons");

// Elements to control game start and rounds selection.
const startGameElements = document.querySelectorAll(".start-game-element");
const selectElement = document.getElementById('rounds');
const submitDropDown = document.getElementById("submit");
const roundsSelect = document.getElementById("rounds-select");

// Replay button for restarting the game.
const replayButton = document.getElementById("play-again");

// Game state variables.
let remainingRounds = 0;
var text = rounds.options[rounds.selectedIndex].text; // Gets selected option text.
let playerScore = 0; // Player's score.
let computerScore = 0; // Computer's score.

// Event listener to start the game when rounds are selected.
submitDropDown.addEventListener('click', () => {
    const selectedValue = parseInt(selectElement.value); // Get selected rounds value.
    remainingRounds = selectedValue; // Set remaining rounds.
    console.log(selectedValue); // Debug log of selected rounds.
    roundsOutput.textContent = `${selectedValue} Rounds Left`; // Update rounds display.

    // Remove "hide-element" class from start-game elements.
    const disableHide = document.getElementsByClassName("hide-element");
    while (disableHide.length) {
        disableHide[0].className = disableHide[0].className.replace(/\bhide-element\b/g, '');
    }

    // Hide round selection and replay button.
    roundsSelect.classList.add("hide-element");
    replayButton.classList.add("hide-element");
});

// Function to play the game for a given player choice.
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 15)]; // Random computer choice.
    remainingRounds--; // Decrease remaining rounds.
    let result = ""; // Variable to store result.

    // Check if player and computer choices are the same.
    if (playerChoice === computerChoice) {
        result = "Its a Tie!";
        roundsOutput.textContent = `${remainingRounds} Rounds Left`; // Update rounds.
    } else {
        // Evaluate game result based on player choice.
        switch (playerChoice) {
            case "Rock✊":
                result = (computerChoice === "Scissors✌" || computerChoice === "Sponge🧽" || 
                          computerChoice === "Wolf🐺" || computerChoice === "Tree🌲" || 
                          computerChoice === "Human🧍" || computerChoice === "Snake🐍" || 
                          computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            // Other cases omitted for brevity but follow similar logic...
            case "Gun🔫":
                result = (computerChoice === "Rock✊" || computerChoice === "Wolf🐺" || 
                          computerChoice === "Tree🌲" || computerChoice === "Human🧍" || 
                          computerChoice === "Snake🐍" || computerChoice === "Scissors✌" || 
                          computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
        }

        // Handle game end when rounds are over.
        if (remainingRounds > 0) {
            console.log(remainingRounds); // Debug log of remaining rounds.
            roundsOutput.textContent = `${remainingRounds} Rounds Left`;
        } else if (remainingRounds === 0) {
            roundsOutput.textContent = "Game Over, Play Again?"; // Display game over message.

            // Determine the overall winner.
            if (playerScore > computerScore) {
                result = `Congrats You Win! You Scored ${playerScore} points!`;
                resultDisplay.classList.add("green-Text");
            } else if (computerScore > playerScore) {
                result = `Oh No, You Lose! You Scored ${playerScore} but the computer Scored ${computerScore}`;
                resultDisplay.classList.add("red-Text");
            }

            // Hide player and computer displays.
            playerDisplay.classList.add("hide-element");
            computerDisplay.classList.add("hide-element");

            // Show replay button.
            replayButton.classList.remove("hide-element");

            // Hide all game buttons.
            const children = gameButtonsContainer.children;
            for (let child of children) {
                child.classList.add("hide-element");
            }
        }
    }

    // Update game displays with current choices and result.
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER ${computerChoice}`;
    resultDisplay.textContent = result;

    // Update scores and result styling.
    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("green-Text");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("red-Text");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "Its a Tie!":
            resultDisplay.classList.add("gold-Text");
            break;
    }

    // Add replay functionality to replay button.
    replayButton.addEventListener("click", () => {
        resultDisplay.textContent = ""; // Clear result display.
        startGameElements.forEach(element => element.classList.add("hide-element")); // Hide elements.

        roundsOutput.classList.add("hide-element"); // Hide rounds output.
        roundsSelect.classList.remove("hide-element"); // Show rounds select.

        // Reset scores and displays.
        playerDisplay.textContent = `PLAYER: `;
        computerDisplay.textContent = `COMPUTER `;
        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
    });
}
