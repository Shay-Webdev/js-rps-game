function getComputerChoice (){

    let compChoice = Math.random() ;
    // let rock = "rock";
    // let paper = "paper";
    // let scissors = "scissors";
    // console.log(compChoice);

    if (compChoice >= 0 && compChoice < 0.3){
        return "rock" ;
    } else if (compChoice >= 0.3 && compChoice < 0.6){
        return "paper";
    } else if (compChoice >= 0.6 && compChoice < 1) {
        return "scissors";
    }
    
}



function getHumanChoice (){
    let humanChoice = prompt("Choose rock or paper or scissors", "rock");
    return humanChoice.toLowerCase();
}


function playGame () {

    const humanChoice = getHumanChoice(); 
    const compChoice = getComputerChoice();
    console.log(compChoice);

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

    

    return playRound(humanChoice, compChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();
// console.log (typeof(humanChoice));
// console.log(typeof(compChoice));

// getHumanChoice();
// getComputerChoice();
// playRound(humanChoice, compChoice);





