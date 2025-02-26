// Array of possible choices in the game.
const choices = [
  "Rock✊", "Paper✋", "Scissors✌", "Gun🔫", "Lightning⚡", "Devil😈", "Dragon🐉",
  "Water🌊", "Air💨", "Sponge🧽", "Wolf🐺", "Tree🌲", "Human🧍", "Snake🐍", "Fire🔥",
];

// DOM elements used to display game results and scores.
const playerDisplay = document.getElementById("player-display"); // Player's choice display
const computerDisplay = document.getElementById("computer-display"); // Computer choice display
let resultDisplay = document.getElementById("result-display"); // Result display
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); // Player score display
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); // Computer score display
const roundsOutput = document.getElementById("rounds-output"); // Display Remaining rounds
const gameButtonsContainer = document.getElementById("game-buttons"); // Container for game buttons

const optionsButton = document.getElementById("options"); // The options button
const optionsElements = document.querySelectorAll(".options-element"); // Options elements such as images
const optionsBack = document.getElementById("optionsBack");

const backButton = document.getElementById("backButton");

const startGameElements = document.querySelectorAll(".start-game-element"); // Start game elements

const newGameButton = document.getElementById("newGame") // Button for starting a new game

const selectElement = document.getElementById("rounds"); // Dropdown for selecting the round
const roundInstructions = document.getElementById("roundInstructions");
const submitDropDown = document.getElementById("submit"); // Submit button
const roundsSelect = document.getElementById("rounds-select"); // Select for the rounds

const replayButton = document.getElementById("play-again"); // Play again button

let remainingRounds = 0; // Logs remaining rounds

let playerScore = 0; // Player score tracker
let computerScore = 0; // Computer score tracker

// Event listener for submitting the number of rounds
submitDropDown.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const selectedValue = parseInt(selectElement.value); // Get selected number of rounds
  remainingRounds = selectedValue;
  roundsOutput.textContent = `${selectedValue} Rounds Left`; // Display rounds left

  // Hide elements that are not needed
  const disableHide = document.getElementsByClassName("hide-element");
  while (disableHide.length) {
    disableHide[0].className = disableHide[0].className.replace(/\bhide-element\b/g, "");
  }
  gamePage(); // Go to the game page
});

// Main Game Function
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 15)]; // Random computer choice
  let result = "";

  // If both choices are the same, it's a tie
  if (playerChoice === computerChoice) {
    result = "It's a Tie!"; // Set result to tie
    resultDisplay.classList.remove("green-Text");
    resultDisplay.classList.remove("red-Text");
    resultDisplay.classList.add("gold-Text"); // Change result display style

    // Update remaining rounds display
    if (remainingRounds >= 0) {
      remainingRounds--; // Decrease remaining rounds
      roundsOutput.textContent = `${remainingRounds} Rounds Left`;
    }

    // If no rounds remain, the game ends and hide elements
    else if (remainingRounds === 0) {
      roundsOutput.textContent = "Game Over, Play Again?";
      const children = gameButtonsContainer.children;

      // Checks who won the game
      if (playerScore > computerScore) {
        // Display player win message if player wins
      } else if (computerScore > playerScore) {
        // Display computer win message if computer wins
      } else if (playerScore === computerScore) {
        // Display tie message if both are equal
      }

      playerDisplay.classList.add("hide-element");
      computerDisplay.classList.add("hide-element");
      replayButton.classList.remove("hide-element");

      for (let child of children) {
        child.classList.add("hide-element");
      }
    }
  } else {
    // Large Case and Switch Statement for all player options
    switch (playerChoice) {
      case "Rock✊":
        result =
          computerChoice === "Scissors✌" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Fire🔥" ? "You Win!" : "You Lose!";
        break;
      case "Fire🔥":
        result =
          computerChoice === "Scissors✌" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Paper✋" ? "You Win!" : "You Lose!";
        break;
      case "Scissors✌":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Snake🐍":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Human🧍":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Tree🌲":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Wolf🐺":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Sponge🧽" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Sponge🧽":
        result =
          computerChoice === "Paper✋" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Paper✋":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Air💨" ? "You Win!" : "You Lose!";
        break;
      case "Air💨":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Water🌊" ||
          computerChoice === "Fire🔥" ? "You Win!" : "You Lose!";
        break;
      case "Water🌊":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Dragon🐉" ||
          computerChoice === "Scissors✌" ||
          computerChoice === "Fire🔥" ? "You Win!" : "You Lose!";
        break;
      case "Dragon🐉":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Devil😈" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Scissors✌" ||
          computerChoice === "Fire🔥" ? "You Win!" : "You Lose!";
        break;
      case "Devil😈":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Lightning⚡" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Scissors✌" ||
          computerChoice === "Fire🔥" ? "You Win!" : "You Lose!";
        break;
      case "Lightning⚡":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Gun🔫" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Scissors✌" ||
          computerChoice === "Fire🔥" ? "You Win!": "You Lose!";
        break;
      case "Gun🔫":
        result =
          computerChoice === "Rock✊" ||
          computerChoice === "Wolf🐺" ||
          computerChoice === "Tree🌲" ||
          computerChoice === "Human🧍" ||
          computerChoice === "Snake🐍" ||
          computerChoice === "Scissors✌" ||
          computerChoice === "Fire🔥" ? "You Win!": "You Lose!";
        break;
    }

    // Update score and display result
    if (result === "You Win!") {
      playerScore++; // Increment Player score
      playerScoreDisplay.textContent = playerScore;
      resultDisplay.classList.add("green-Text"); // Style for player win
      resultDisplay.classList.remove("red-Text", "gold-Text");
    } else if (result === "You Lose!") {
      computerScore++; // Increment Computer score
      computerScoreDisplay.textContent = computerScore;
      resultDisplay.classList.add("red-Text"); // Style for computer win
      resultDisplay.classList.remove("green-Text", "gold-Text");
    } else if (result === "It's a Tie!") {
      resultDisplay.classList.add("gold-Text"); // Style for tie
      resultDisplay.classList.remove("green-Text", "red-Text");
    }

    // Update player and computer choices in the display
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Decrement remaining rounds after result is processed
    remainingRounds--;
  }

  // If the player or computer wins, the conditions below activate
  // Event listener for if the user wants to replay the game
  replayButton.addEventListener("click", () => {
    resultDisplay.textContent = ""; // Clear result text
    startGameElements.forEach((element) =>
      element.classList.add("hide-element") // Hide start game elements
    );

    homePage(); // Go back to home page

    playerDisplay.textContent = `PLAYER: `;
    computerDisplay.textContent = `COMPUTER `;

    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
  });

  // Game Over
  if (remainingRounds <= 0) {
    backButton.classList.add("hide-element"); // Hide back button when game is over
    roundsOutput.textContent = "Game Over, Play Again?";

    // Display final results when the game ends
    if (playerScore > computerScore) {
      resultDisplay.textContent = `Congrats! You Win! You Scored ${playerScore} points!`; // Player win message
      resultDisplay.classList.add("green-Text");
      resultDisplay.classList.remove("red-Text");
      resultDisplay.classList.remove("gold-Text");
    } else if (computerScore > playerScore) {
      resultDisplay.textContent = `Oh No! You Lose! You Scored ${playerScore} but the computer Scored ${computerScore}`; // Computer win message
      resultDisplay.classList.add("red-Text");
      resultDisplay.classList.remove("green-Text");
      resultDisplay.classList.remove("gold-Text");
    } else {
      resultDisplay.textContent = `It's a Tie! You both scored ${playerScore}`; // Tie message
      resultDisplay.class
