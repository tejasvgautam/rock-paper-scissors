let humanScore = 0;
let computerScore = 0;

function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor((Math.random() * (maxFloor - minCeiled) + minCeiled));
}

function getHumanChoice(){
    const input = prompt("Choose Rock Paper Scissors!:");
    return input;
}

function getComputerChoice(){

    const choice = getRandomInt(0,3);
    if (choice === 0){
        return "rock";
    } else if(choice === 1){
        return "paper";
    } else if (choice === 2){
        return "scissor";
    }
}

function playRound(humanChoice, computerChoice){
    const capitalHumanChoice = humanChoice.toUpperCase();

    if(capitalHumanChoice === computerChoice.toUpperCase()){
        return "It's a tie!"
    }else if((capitalHumanChoice === "ROCK" && computerChoice === "scissor") || (capitalHumanChoice === "PAPER" && computerChoice === "rock") || (capitalHumanChoice === "SCISSOR" && computerChoice === "paper")){
        humanScore += 1;
        return "You win!"
    }else if ((capitalHumanChoice === "ROCK" && computerChoice === "paper") || (capitalHumanChoice === "PAPER" && computerChoice === "scissor") || (capitalHumanChoice === "SCISSOR" && computerChoice === "rock")){
        computerScore += 1;
        return "You lose!"
    }
}

function playGame(){
    for(i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

console.log(playGame());
console.log(`You: ${humanScore}, Computer: ${computerScore}`);