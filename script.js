let humanScore = 0;
let computerScore = 0;

const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissor_button = document.querySelector("#scissor-button");

const result_div = document.querySelector(".result")

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
    const computerChoice = getComputerChoice();
    const result = playRound("ROCK", computerChoice);
    const p = document.createElement("p");
    p.textContent = `${result} You chose: ROCK, Computer Chose: ${computerChoice}. Your Score: ${humanScore}, Computer's: ${computerScore}`;
    result_div.appendChild(p);

    if (humanScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "You won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    } else if (computerScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "Computer won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    }
});

paper_button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("PAPER", computerChoice);
    const p = document.createElement("p");
    p.textContent = `${result} You chose: PAPER, Computer Chose: ${computerChoice}. Your Score: ${humanScore}, Computer's: ${computerScore}`;
    result_div.appendChild(p);

    if (humanScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "You won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    } else if (computerScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "Computer won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    }
});

scissor_button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("SCISSOR", computerChoice);
    const p = document.createElement("p");
    p.textContent = `${result} You chose: SCISSOR, Computer Chose: ${computerChoice}. Your Score: ${humanScore}, Computer's: ${computerScore}`;
    result_div.appendChild(p);

    if (humanScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "You won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    } else if (computerScore === 5) {
        const winner = document.createElement("h2");
        winner.textContent = "Computer won the game!";
        result_div.appendChild(winner);
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
    }
});

