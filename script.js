function getComputerChoice (){

    let compChoice = Math.random() ;
    
    if (compChoice >= 0 && compChoice < 0.3){
        return "rock" ;
    } else if (compChoice >= 0.3 && compChoice < 0.6){
        return "paper";
    } else if (compChoice >= 0.6 && compChoice < 1) {
        return "scissors";
    }
    
}

let buttons = document.querySelector(".buttons");
let results = document.querySelector(".results");
let score = document.querySelector(".score");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id){
        case "rock":
            let compChoiceA = getComputerChoice();
            playRound("rock", compChoiceA);
            finalResults();
            break;

        case "paper":
            let compChoiceB = getComputerChoice();
            playRound("paper", compChoiceB);
            finalResults();
            break;
        case "scissors":
            let compChoiceC = getComputerChoice();
            playRound("scissors", compChoiceC);
            finalResults();
            break;
        default:
            console.log("Click button");
    }
});



let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, compChoice) {
    if (humanChoice == "rock" && compChoice == "scissors"){
        humanScore ++ ;
        return results.textContent = `Computer choose scissors.\n You win, Rock breaks scissors!.\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if (humanChoice == "paper" && compChoice == "rock"){
        humanScore ++ ;
        return results.textContent = `Computer choose rock.\n You win, Paper covers rock!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if(humanChoice == "scissors" && compChoice == "paper"){
        humanScore ++ ;
        return results.textContent = `Computer choose scissors.\n You win, scissors cut paper!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if (humanChoice == "rock" && compChoice == "paper"){
        computerScore ++ ;
        return results.textContent = `Computer choose paper.\n You lose, paper covers rock!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if (humanChoice == "paper" && compChoice == "scissors"){
        computerScore ++ ;
        return results.textContent = `Computer choose scissors.\n You lose, scissors cut paper!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if (humanChoice == "scissors" && compChoice == "rock"){
        computerScore++ ;
        return results.textContent = `Computer choose rock.\n You lose, rock breaks scissors!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else if (humanChoice == compChoice){
        return results.textContent = `Computer choose ${compChoice}.\nIts a Draw!\n Human score: ${humanScore}. computer score: ${computerScore}`;
    }else{
        return console.log("No valid choice made. Try again!");
    }
}

function finalResults(){


    if (humanScore == 5 ){
       return score.textContent = " Winner is You!";
    }else if (computerScore == 5){
        return score.textContent = "Winner is computer!";
    }
    
}



    

    

