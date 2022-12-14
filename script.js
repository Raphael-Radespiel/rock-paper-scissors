const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const animationContainer = document.querySelector(".animation-container");

const humanIcon = document.querySelector("#human-icon");
const computerIcon = document.querySelector("#computer-icon");

const winAudio = document.querySelector("#win-audio");
const looseAudio = document.querySelector("#loose-audio");
const downAudio = document.querySelector("#down-audio");

let scoreArray = [0,0];

let isPressed = false;
let playerSelection = 0;
let computerSelection = 0;

const outcomeElement = document.querySelector("#outcome"); 
const scoreElement = document.querySelector("#score");

let symbolMap = {
  0: "Rock",
  1: "Paper",
  2: "Scissors"
};

function computerPlay(){
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return `It's a tie! ${symbolMap[computerSelection]} is friends with ${symbolMap[computerSelection]}`; 
  }

  let winIndex = (computerSelection + 1) > 2 ? 0 : (computerSelection + 1);

  if(playerSelection == winIndex){
    scoreArray[0]++;
    return `You won! ${symbolMap[playerSelection]} beats ${symbolMap[computerSelection]}`;
  }
  else{
    scoreArray[1]++;
    return `You lost! ${symbolMap[computerSelection]} beats ${symbolMap[playerSelection]}`;
  }
}

function updateScore(){
  outcomeElement.textContent = playRound(playerSelection, computerSelection);
  scoreElement.textContent = (scoreArray[0] + " | " + scoreArray[1]);
}

function animateHands(maxTime, deltaTime, amplitude, numberOfTimes){
  if(deltaTime >= maxTime) return;
  deltaTime += 10;

  let period = ((2 * 3.1415 * (numberOfTimes - 0.31415)) * deltaTime) / maxTime;
  animationContainer.style.transform = `translateY(${(Math.sin(Math.sin(Math.sin(Math.sin(period + 3.14)))) * amplitude) - amplitude}px)`;
  setTimeout(function(){
    animateHands(maxTime, deltaTime, amplitude, numberOfTimes);
  }, 10);
}

function initEventListeners(){
  rockBtn.addEventListener('click', () => {
    if(isPressed) return;
    isPressed = true;

    playerSelection = 0;
    computerSelection = computerPlay();

    runGameLoop();
  });
  
  paperBtn.addEventListener('click', () => {
    if(isPressed) return;
    isPressed = true;

    playerSelection = 1;
    computerSelection = computerPlay();

    runGameLoop();
  });
  
  scissorsBtn.addEventListener('click', () => {
    if(isPressed) return;
    isPressed = true;

    playerSelection = 2;
    computerSelection = computerPlay();

    runGameLoop();
  });
}

function runGameLoop(){
  humanIcon.src = "images/rock.svg";
  humanIcon.style.scale = "1";
  computerIcon.src = "images/rock.svg";
  computerIcon.style.scale = "1";

  animateHands(1000, 0, 50, 3);
  setTimeout(() => downAudio.play(), 333);
  setTimeout(() => {
    let cloneAudio = downAudio.cloneNode();
    cloneAudio.play();
  }, 666);
  setTimeout(() => { 
    if(outcomeElement.textContent.includes("tie")) downAudio.play();
    if(outcomeElement.textContent.includes("won")) winAudio.play();
    if(outcomeElement.textContent.includes("lost")) looseAudio.play();
    console.log("play");
  }, 1100);

  setTimeout(() => {
    humanIcon.src = `images/${symbolMap[playerSelection].toLowerCase()}.svg`;
    humanIcon.style.scale = "1.25";
    computerIcon.src = `images/${symbolMap[computerSelection].toLowerCase()}.svg`;
    computerIcon.style.scale = "1.25";
    updateScore();
  }, 1000);
  
  setTimeout(() => {isPressed = false;}, 1500);
}

initEventListeners();

