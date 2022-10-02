    let choices = ["rock", "paper", "scissors"];
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    
    //function gets the computers choice
    function getComputerChoice(){
      const choice = Math.floor(Math.random()* choices.length);
      return choices[choice];
    }
    let computerChoice = getComputerChoice();

    //function plays a single round of rock paper scissors
    function playSingleRound(playerSelection, computerSelection){
      playerChoice = prompt("Type in your choice");
      playerChoice = playerChoice.toLowerCase();
      
      if(choices.includes(playerChoice) == false){
        console.log(playerSelection);
        return alert("That is not an option!");
      }

       if (playerSelection == computerSelection){
        alert("No winner, PLAY AGAIN!");
      }  else if (playerSelection == "rock" && computerSelection =="paper"){
          alert("You lose: Paper beats Rock!");
          computerScore++;
        }else if(playerSelection=="paper" && computerSelection=="scissors"){
          alert("You lose: Scissors beats Paper!");
          computerScore++;
        }else if(playerSelection=="paper" && computerSelection=="rock"){
          alert("You win: Paper beats Rock!");
          playerScore++;
        }else if(playerSelection=="scissors" && computerSelection=="rock"){
          alert("You lose: Rock beats Scissors!");
          computerScore++;
        }else if(playerSelection=="rock" && computerSelection=="scissors"){
          alert("You win: Rock beats scissors!");
          playerScore++;
        }else if(playerSelection=="scissors" && computerSelection=="paper"){
          alert("You win: scissors beats paper!");
          playerScore++;
        }
      }

      function game(){
        for(let i= 0; i < 5; i++){
          playSingleRound(playerChoice, computerChoice);
          alert(`Player score ${playerScore} Computer Score ${computerScore}`);
          if(playerChoice == computerChoice){
            return i--
          }
          if(playerScore == 5 || computerScore ==5){
            if(playerScore == 5){
            alert("You win!");
            }else if(computerScore == 5){
            alert("You lose!");
            }
          }
        }
      }
      game();