function getComputerChoice() {
    let com = Math.floor(Math.random() * 3);
    return com;
}
function getPlayerChoice() {
    let player = prompt("Rock,Paper,Scissor?");
    player = player.toLowerCase();
    if (player === "rock"){
        return 0;
    }
    else if (player === "paper"){
        return 1;
    }
    else if (player === "scissor"){
        return 2;
    }

}
function playround(PlayerChoice, ComputerChoice){
    if (PlayerChoice == ComputerChoice){
        return 0;
    }
    else if((PlayerChoice == 0 && ComputerChoice == 1) || (PlayerChoice == 2 && ComputerChoice == 0) || (PlayerChoice == 1 && ComputerChoice == 2) ){
        return 1;
    }
    else if((PlayerChoice == 0 && ComputerChoice == 2) || (PlayerChoice == 2 && ComputerChoice == 1) || (PlayerChoice == 1 && ComputerChoice == 0)){
        return 2;
    }
}

function getPlay() { 
    let playerwin = 0;
    let computerwin = 0;
    let i = 0;
    let num = 0;
    for(i = 0;i < 5;i++)
    {
        const getPChoice = getPlayerChoice();
        const getCChoice = getComputerChoice();
        num = playround(getPChoice, getCChoice);
        if (num == 0){
            console.log("Tie!");
            console.log("Player win: " + playerwin);
            console.log("Computer win: " + computerwin);
        }
        else if (num == 1) {
            console.log("You lose!");
            computerwin += 1;
            console.log("Player win: " + playerwin);
            console.log("Computer win: " + computerwin);
        }
        else if (num == 2) {
            console.log("You win!");
            playerwin += 1;
            console.log("Player win: " + playerwin);
            console.log("Computer win: " + computerwin);
        }
    }

    if(playerwin > computerwin){
        console.log("You win!");
    }
    else if(playerwin == computerwin){
        console.log("Tie!");
    }
    else if (computerwin > playerwin){
        console.log("You lose!")
    }
}

getPlay();