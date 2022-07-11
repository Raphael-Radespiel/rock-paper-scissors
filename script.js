let symbolMap = {
  0: "Rock",
  1: "Paper",
  2: "Scissors"
};

function computerPlay(){
  return symbolMap[Math.floor(Math.random() * 3)];
}

function humanPlay(){
  return prompt("Please write your move: ", "");
}

function playRound(playerSelection, computerSelection){

  if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
    return `It's a tie! ${computerSelection} is friends with ${computerSelection}`; 
  }

  switch(computerSelection){
    case 'Rock':
      if(playerSelection.toUpperCase() === 'PAPER'){
        return "You win! Paper beats Rock.";
      }
      else{
        return `You loose! ${computerSelection} beats ${playerSelection}`;
      }
    case 'Paper':
      if(playerSelection.toUpperCase() === 'SCISSORS'){
        return "You win! Scissors beats Paper.";
      }
      else{
        return `You loose! ${computerSelection} beats ${playerSelection}`;
      }
    case 'Scissors':
      if(playerSelection.toUpperCase() === 'ROCK'){
        return "You win! Rock beats Scissors.";
      }
      else{
        return `You loose! ${computerSelection} beats ${playerSelection}`;
      }
    default:
      return computerSelection + ' ' + playerSelection;
  }
}
