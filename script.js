const choices = ["Rock✊", "Paper✋", "Scissors✌", "Gun🔫", "Lightning⚡","Devil😈", "Dragon🐉", "Water🌊", "Air💨", "Sponge🧽", "Wolf🐺", "Tree🌲", "Human🧍", "Snake🐍", "Fire🔥"];

const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
const roundsOutput = document.getElementById("rounds-output");
const gameButtonsContainer = document.getElementById("game-buttons")

const startGameElements = document.querySelectorAll(".start-game-element")

const selectElement = document.getElementById('rounds')
const submitDropDown = document.getElementById("submit")
const roundsSelect = document.getElementById("rounds-select")

const replayButton = document.getElementById("play-again")

let remainingRounds = 0;

var text = rounds.options[rounds.selectedIndex].text;
let playerScore = 0
let computerScore = 0

submitDropDown.addEventListener('click', () => {
    const selectedValue = parseInt(selectElement.value);
    remainingRounds = selectedValue;
    console.log(selectedValue)
    roundsOutput.textContent = `${selectedValue} Rounds Left`

    const disableHide = document.getElementsByClassName("hide-element")
    while(disableHide.length){
        disableHide[0].className = disableHide[0].className.replace(/\bhide-element\b/g)
    }
    roundsSelect.classList.add("hide-element")
    replayButton.classList.add("hide-element")
    
})


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 15)];
    remainingRounds--;
    let result = "";

    if( playerChoice === computerChoice){
        result = "Its a Tie!";
        roundsOutput.textContent = `${remainingRounds} Rounds Left`;
    }
    else{
        switch(playerChoice){
            case "Rock✊":
                result = (computerChoice === "Scissors✌") || (computerChoice === "Sponge🧽") || (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || (computerChoice === "Human🧍")|| (computerChoice === "Snake🐍") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Fire🔥":
                result = (computerChoice === "Scissors✌") || (computerChoice === "Snake🐍") || (computerChoice === "Human🧍") || (computerChoice === "Tree🌲") || (computerChoice === "Wolf🐺")|| (computerChoice === "Sponge🧽") || (computerChoice === "Paper✋") ? "You Win!" : "You Lose!";
                break;
            case "Scissors✌":
                result = (computerChoice === "Paper✋") || (computerChoice === "Sponge🧽") || (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || (computerChoice === "Human🧍")|| (computerChoice === "Snake🐍") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Snake🐍":
                result = (computerChoice === "Paper✋") || (computerChoice === "Sponge🧽") || (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || (computerChoice === "Human🧍")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Human🧍":
                result = (computerChoice === "Paper✋") || (computerChoice === "Sponge🧽") || (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Tree🌲":
                result = (computerChoice === "Paper✋") || (computerChoice === "Sponge🧽") || (computerChoice === "Wolf🐺") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Wolf🐺":
                result = (computerChoice === "Paper✋") || (computerChoice === "Sponge🧽") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Sponge🧽":
                result = (computerChoice === "Paper✋") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Paper✋":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Air💨") ? "You Win!" : "You Lose!";
                break;
            case "Air💨":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Water🌊") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Water🌊":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Dragon🐉")|| (computerChoice === "Scissors✌") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Dragon🐉":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Devil😈") || (computerChoice === "Snake🐍")|| (computerChoice === "Scissors✌") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Devil😈":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Lightning⚡") || (computerChoice === "Human🧍") || (computerChoice === "Snake🐍")|| (computerChoice === "Scissors✌") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Lightning⚡":
                result = (computerChoice === "Rock✊") || (computerChoice === "Gun🔫") || (computerChoice === "Tree🌲") || (computerChoice === "Human🧍") || (computerChoice === "Snake🐍")|| (computerChoice === "Scissors✌") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
            case "Gun🔫":
                result = (computerChoice === "Rock✊") || (computerChoice === "Wolf🐺") || (computerChoice === "Tree🌲") || (computerChoice === "Human🧍") || (computerChoice === "Snake🐍")|| (computerChoice === "Scissors✌") || (computerChoice === "Fire🔥") ? "You Win!" : "You Lose!";
                break;
        }

        if(remainingRounds > 0){
            console.log(remainingRounds)
            roundsOutput.textContent = `${remainingRounds} Rounds Left`
        }
        else if(remainingRounds == 0){
            roundsOutput.textContent = "Game Over, Play Again?"
            const children = gameButtonsContainer.children;
            if(playerScore > computerScore){
                result = `Congrats You Win! You Scored ${playerScore} points!`
                resultDisplay.classList.add("green-Text");
                resultDisplay.classList.remove("red-Text");
                resultDisplay.classList.remove("gold-Text");
            }
            else if(computerScore > playerScore){
                result = `Oh No, You Lose! You Scored ${playerScore} but the computer Scored ${computerScore}`
                resultDisplay.classList.add("red-Text");
                resultDisplay.classList.remove("green-Text");
                resultDisplay.classList.remove("gold-Text");
            }
            else if (playerChoice === computerChoice) {
                roundsOutput.textContent = `${remainingRounds} Rounds Left`;
            }
            playerDisplay.classList.add("hide-element");

            computerDisplay.classList.add("hide-element");

            replayButton.classList.remove("hide-element")

            for(let child of children){
                child.classList.add("hide-element")
            }

        }
        
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("green-Text");
            resultDisplay.classList.remove("red-Text");
            resultDisplay.classList.remove("gold-Text");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("red-Text");;
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("gold-Text");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "Its a Tie!":
            resultDisplay.classList.remove("green-Text");
            resultDisplay.classList.remove("red-Text");
            resultDisplay.classList.add("gold-Text");
    }

    replayButton.addEventListener("click", () => {
        resultDisplay.textContent = ""
        startGameElements.forEach(element => element.classList.add("hide-element"))

        roundsOutput.classList.add("hide-element");
        roundsSelect.classList.remove("hide-element")

        playerDisplay.textContent = `PLAYER: `;
        computerDisplay.textContent = `COMPUTER `;

        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
    })

}
