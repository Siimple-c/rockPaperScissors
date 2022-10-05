    const choices = ["rock", "paper", "scissors"];
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;

    //function gets the computers choice
    function getComputerChoice(){
      const choice = Math.floor(Math.random() * choices.length);
      return choices[choice];
    }
    let computerChoice = getComputerChoice();

    //function plays a single round of rock paper scissors
    function playSingleRound(playerSelection, computerSelection){
     computerSelection = getComputerChoice();
     playerChoice = prompt("Type in your choice");
     playerSelection = playerChoice.toLowerCase();
      
      if(!choices.includes(playerSelection)) return alert(`Invalid input`);

      if(playerSelection === computerSelection) alert ("Draw, no winner for this round!");
       else
        if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")){
              alert(`You lose this round: ${computerSelection} beats ${playerSelection}`); 
              computerScore++;
              }else{
                alert(`You win this round: ${playerSelection} beats ${computerSelection}`); 
                playerScore++;
              }
      }

      const gameWinner = () => {
        if(playerScore > computerScore) alert ("Congratulations, you won the game!");
        else if(computerScore > playerScore) alert("You lose, try again next time!");
      }

      function game(){
        while(computerScore < 5 || playerScore < 5){
          playSingleRound(playerChoice, computerChoice);
          alert(`Player score ${playerScore} Computer Score ${computerScore}`);

          if(computerScore === 5 || playerScore === 5) return gameWinner();
        }
      }
      game();