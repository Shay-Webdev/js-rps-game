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

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id){
        case "rock":
            let compChoiceA = getComputerChoice();
            console.log(compChoiceA);
            playRound("rock", compChoiceA);
            break;

        case "paper":
            let compChoiceB = getComputerChoice();
            console.log(compChoiceB);
            playRound("paper", compChoiceB);
            break;
        case "scissors":
            let compChoiceC = getComputerChoice();
            console.log(compChoiceC);
            playRound("scissors", compChoiceC);
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
        return console.log("You win, Rock breaks scissors!");
    }else if (humanChoice == "paper" && compChoice == "rock"){
        humanScore ++ ;
        return console.log("You win, Paper covers rock!");
    }else if(humanChoice == "scissors" && compChoice == "paper"){
        humanScore ++ ;
        return console.log("You win, scissors cut paper!");
    }else if (humanChoice == "rock" && compChoice == "paper"){
        computerScore ++ ;
        return console.log("You lose, paper covers rock!");
    }else if (humanChoice == "paper" && compChoice == "scissors"){
        computerScore ++ ;
        return console.log("You lose, scissors cut paper!");
    }else if (humanChoice == "scissors" && compChoice == "rock"){
        computerScore++ ;
        return console.log("You lose, rock breaks scissors!");
    }else if (humanChoice == compChoice){
        return console.log("Its a Draw!");
    }else{
        return console.log("No valid choice made. Try again!");
    }
}



    

    

