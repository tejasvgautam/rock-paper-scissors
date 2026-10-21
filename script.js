let humanScore = 0;
let computerScore = 0;

const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissor_button = document.querySelector("#scissor-button");

function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor((Math.random() * (maxFloor - minCeiled) + minCeiled));
}

function getComputerChoice(){

    const choice = getRandomInt(0,3);
    if (choice === 0){
        return "ROCK";
    } else if(choice === 1){
        return "PAPER";
    } else if (choice === 2){
        return "SCISSOR";
    }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        return "It's a tie!"
    }else if((humanChoice === "ROCK" && computerChoice === "SCISSOR") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSOR" && computerChoice === "PAPER")){
        humanScore += 1;
        return "You win!"
    }else if ((humanChoice === "ROCK" && computerChoice === "PAPER") || (humanChoice === "PAPER" && computerChoice === "SCISSOR") || (humanChoice === "SCISSOR" && computerChoice === "ROCK")){
        computerScore += 1;
        return "You lose!"
    }
}

rock_button.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
});
paper_button.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice())
});
scissor_button.addEventListener("click", () => {
    playRound("SCISSOR", getComputerChoice())
});



function playGame(){
    
}

console.log(playGame());
console.log(`You: ${humanScore}, Computer: ${computerScore}`);