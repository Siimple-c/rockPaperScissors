window.addEventListener("load", launchAnimations) ;

const options = document.querySelectorAll('.option');
const optionOne = document.querySelector('.one');
const optionTwo = document.querySelector('.two');
const optionThree = document.querySelector('.three');
const leftHand = document.querySelector('.left');
const rightHand = document.querySelector('.right');
const scores = document.querySelector('.score-container');
const openModal = document.querySelector('[data-modal-target]');
const closeModal = document.querySelector('[data-close-button]');
const overLay = document.querySelector('.overlay');

openModal.addEventListener('click', () => {
  const modal = document.querySelector(openModal.dataset.modalTarget);
  modalOpen(modal);
});

closeModal.addEventListener('click', () => {
  const modal = closeModal.closest('.modal');
  modalClose(modal);
});

overLay.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modalClose(modal);
});

function modalOpen(modal){
  if(modal === null)return;
  modal.classList.add('active');
  overLay.classList.add('active');
}
function modalClose(modal){
  if(modal === null)return;
  modal.classList.remove('active');
  overLay.classList.remove('active');
}

function optionsOut(){
  for(let opt of options ){
    opt.classList.remove('option-out');
  }
};

function handsOut(){
  leftHand.classList.remove('player-out');
  rightHand.classList.remove('computer-out');
}

  function launchAnimations(){
    setTimeout(optionsOut, 300);
    setTimeout(handsOut, 700);
    
    optionOne.classList.add('option-intro1');
    optionTwo.classList.add('option-intro2');
    optionThree.classList.add('option-intro3');
    leftHand.classList.add('hand-intro1');
    rightHand.classList.add('hand-intro2');
    scores.classList.add('score-intro');
  }

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
     playerChoice = promp("Type in your choice");
     playerSelection = playerChoice.toLowerCase();
      
      if(!choices.includes(playerSelection)) return aler(`Invalid input`);

      if(playerSelection === computerSelection) aler ("Draw, no winner for this round!");
       else
        if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")){
              aler(`You lose this round: ${computerSelection} beats ${playerSelection}`); 
              computerScore++;
              }else{
                aler(`You win this round: ${playerSelection} beats ${computerSelection}`); 
                playerScore++;
              }
      }

      const gameWinner = () => {
        if(playerScore > computerScore) aler ("Congratulations, you won the game!");
        else if(computerScore > playerScore) aler("You lose, try again next time!");
      }

      function game(){
        while(computerScore < 5 || playerScore < 5){
          playSingleRound(playerChoice, computerChoice);
          aler(`Player score ${playerScore} Computer Score ${computerScore}`);

          if(computerScore === 5 || playerScore === 5) return gameWinner();
        }
      }

      game();