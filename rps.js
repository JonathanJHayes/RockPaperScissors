function getComputerChoice() {
    let num = Math.round((Math.random()*2)+1);
    

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



let playerScore = 0;
let computerScore = 0;



const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener("click", function(e){

       playerChoice = e.target.name;
        console.log(typeof playerChoice);

       
        

        if (playerScore > 4 || computerScore > 4){
           
            if(playerScore > 4) {
                alert('You Win!');
            }
            else if(computerScore >4) {
                alert('CPU Wins!');
            }
            else{
                alert('Draw!');
            }
            playerScore = 0;
            computerScore = 0;
        }
        else {
            let computerMove = getComputerChoice();

    
    console.log(playerChoice);
    let playerMove = playerChoice;
    console.log(typeof playerChoice)
    console.log(playerMove);

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
        computerScore = computerScore +1;
    }

    else if ((playerMove === "rock" && computerMove === "Scissors") || (playerMove === "paper" && computerMove === "Rock") ||
    (playerMove === "scissors" && computerMove === "Paper")) {
        console.log("Yeah, you win!");
        winner = "Player";
        playerScore = playerScore +1;
    }

    else {
        console.log("playRound Error");
    }
    let comChoice = document.querySelector('#computerChoice')
    if (computerMove === 'Rock') {
        comChoice.innerHTML = '<img src="/Images/Rock.png" width="150" height="150"></img>';
    }
    else if (computerMove === 'Paper') {
        comChoice.innerHTML = '<img src="/Images/Paper.png" width="150" height="150"></img>';
    }
    else if (computerMove === 'Scissors') {
        comChoice.innerHTML = '<img src="/Images/Scissors.png" width="150" height="150"></img>';
    }
    else{

    }
    let yourChoice = document.querySelector('#playerChoice')
    if (playerMove === 'rock') {
        yourChoice.innerHTML = '<img src="/Images/Rock.png" width="150" height="150"></img>';
    }
    else if (playerMove === 'paper') {
        yourChoice.innerHTML = '<img src="/Images/Paper.png" width="150" height="150"></img>';
    }
    else if (playerMove === 'scissors') {
        yourChoice.innerHTML = '<img src="/Images/Scissors.png" width="150" height="150"></img>';
    }
    else{

    }
        }
        console.log("Your Score is " + playerScore);
    console.log("The Computer Score is " + computerScore);
    let comScore = document.querySelector('#comScore');
    comScore.innerHTML = computerScore;
    let yourScore = document.querySelector('#yourScore');
    yourScore.innerHTML = playerScore;
    
   
    }); 
    
    });





