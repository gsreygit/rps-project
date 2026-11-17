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

function playGame(rounds) {

    let humanScore = 0
    let computerScore = 0

    

    function playRound(humanChoice, computerChoice) {
        if (typeof humanChoice === "string" && typeof computerChoice === "string") {
            humanChoice = humanChoice.toUpperCase()
            computerChoice = computerChoice.toUpperCase()
        }

        if (humanChoice == computerChoice) {
            console.log("It's a draw! Go again!")
        }
        if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
            humanScore++
            console.log("The user wins! The score is now: " + humanScore + " to " + computerScore)
        } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
            humanScore++
            console.log("The user wins! The score is now: " + humanScore + " to " + computerScore)
        } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
            humanScore++
            console.log("The user wins! The score is now: " + humanScore + " to " + computerScore)
        }

        if (humanChoice == "ROCK" && computerChoice == "PAPER") {
            computerScore++
            console.log("The computer wins! The score is now: " + humanScore + " to " + computerScore)
        } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
            computerScore++
            console.log("The computer wins! The score is now: " + humanScore + " to " + computerScore)
        } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
            computerScore++
            console.log("The computer wins! The score is now: " + humanScore + " to " + computerScore)
        }

    }
    for (let i = 0; i < rounds; i++) {
        let humanTurn = getHumanChoice()
        let computerTurn = getComputerChoice()
        playRound(humanTurn, computerTurn)
    }
}


playGame(5);








