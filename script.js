let symbolMap = {
  0: "rock",
  1: "paper",
  2: "scissors"
};

function computerPlay(){
  return symbolMap[Math.floor(Math.random() * 3)];
}

function humanPlay(){
  return prompt("Please write your move: ", "");
}

