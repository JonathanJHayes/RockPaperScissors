function getComputerChoice() {
    let num = Math.round((Math.random()*2)+1);
    console.log(num);

    let computerChoice = ""
    if (num === 1){ 
         computerChoice = "Rock";
    }

    else if (num === 2) {
         computerChoice = "Paper";
    }

    else if (num === 3) {
         computerChoice = "Scissors";
    }

    else {
        console.log("getComputerChoice Error");
    }

    console.log(computerChoice)

    return computerChoice;
}

function playRound (playerChoice, computerChoice) {

    playerChoice = prompt("Rock, Paper or Scissors?")
    
    let computerMove = getComputerChoice();

    let playerMove = playerChoice.toLowerCase();

    let winner ="";


    if ((playerMove === "rock" && computerMove === "Rock") || (playerMove === "paper" && computerMove === "Paper") || 
    (playerMove === "scissors" && computerMove === "Scissors")) {
        console.log("It's a Draw");
        winner = "Draw";
    }

    else if ((playerMove === "rock" && computerMove === "Paper") || (playerMove === "paper" && computerMove === "Scissors") || 
    (playerMove === "scissors" && computerMove === "Rock")) {
        console.log("Sorry, you lose!");
        winner = "Computer";
    }

    else if ((playerMove === "rock" && computerMove === "Scissors") || (playerMove === "paper" && computerMove === "Rock") ||
    (playerMove === "scissors" && computerMove === "Paper")) {
        console.log("Yeah, you win!");
        winner = "Player";
    }

    else {
        console.log("playRound Error");
    }

    return winner;
}

function game() {
    let score = 0;

    for (i =1; i<= 5; i++) {

        winner = playRound();
        
        if (winner === "Player") {
            score = score + 1;
        }
        else if (winner === "Computer") {
            score = score - 1;
        }
        else {
            
        }
        
        console.log(score)
    }

    if (score > 0) {
        console.log("Congrats, you win!");
    }

    else if (score < 0) {
        console.log("Sorry, Computer Wins");
    }

    else {
        console.log("It's a draw");
    }
}