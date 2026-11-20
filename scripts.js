const rock = 3.333
const paper = 6.666
const scissors = 9.999


function getComputerChoice() {
    const randomNum = Math.random() * 10
    if (randomNum <= rock) {
        return "Rock"
    } else if (randomNum > rock && randomNum <= paper) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?")
}



let humanScore = 0
let computerScore = 0

const roundResults = document.querySelector("#results")
const gameScore = document.querySelector("#score")

function playRound(humanChoice, computerChoice) {
    if (typeof humanChoice === "string" && typeof computerChoice === "string") {
        humanChoice = humanChoice.toUpperCase()
        computerChoice = computerChoice.toUpperCase()
    }

    if (humanChoice == computerChoice) {
       roundResults.textContent = "It's a draw, go again!"

    }
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++
        roundResults.textContent = "The user wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore++
        roundResults.textContent = "The user wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++
        roundResults.textContent = "The user wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    }

    if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore++
        roundResults.textContent = "The computer wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore++
        roundResults.textContent = "The computer wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        computerScore++
        roundResults.textContent = "The computer wins!"
        gameScore.textContent = "The score is now: " + humanScore + " " + computerScore
    }
    if (humanScore == 5) {
        gameScore.textContent = "That's it! The user has won the best of 7!"
        
    } else if (computerScore == 5) {
        gameScore.textContent = "That's it! The computer has won the best of 7!"
        
    }

}

const btnList = document.querySelectorAll("button")

btnList.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.textContent, getComputerChoice())
        if (computerScore == 5 || humanScore == 5) {
            btnList.forEach((button) => {
                button.disabled = true
            })
        }
    })
})












