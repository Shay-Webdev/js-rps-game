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



   






    const compChoice = getComputerChoice();
    console.log(compChoice);


    let humanScore = 0;
    let computerScore = 0;

    let buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (event) => {
        let target = event.target;

        switch (target.id){
            case "rock":
                playRound("rock", compChoice);
                break;
            
            case "paper":
                playRound("paper", compChoice);
                break;

            case "scissors":
                playRound("scissors", compChoice);
                break;

            default:
                console.log("Click button");
        }
    });

    // const rockButton = document.querySelector(".rock");
    // rockButton.addEventListener("onclick", playRound("rock", compChoice));

    // const paperButton = document.querySelector(".paper");
    // paperButton.addEventListener("onclick", playRound("paper", compChoice));

    // const scissorsButton = document.querySelector(".scissors");
    // scissorsButton.addEventListener("onclick", playRound("scissors", compChoice));

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

    

    

