let pScore = 0;
let cScore = 0;
const playGame = () => {
  const playerOptions = document.querySelectorAll("button");
  const playerImage = document.querySelector(".player-hand");
  const computerImage = document.querySelector(".computer-hand");
  
  playerOptions.forEach((option) => {
  
    option.addEventListener("click", () => {

       const computerArray = ["rock", "paper", "scissors"];
      const computerNumber = Math.floor(Math.random() * 3);
      const computerHands = computerArray[computerNumber];
      
      setTimeout(() => {
        playerImage.src = `assets/${option.textContent}.png`;
        computerImage.src = `assets/${computerHands}.png`;
        compareHands(option.textContent, computerHands);
        //reset animation
        playerImage.style="";
        computerImage.style="";
        
      }, 2000);
      //start animation
      playerImage.style.animation = "shakePlayer 2s ease";
      computerImage.style.animation = "shakeComputer 2s ease";
    });
  });
};
const updateScore = () => {

  const playerScore = document.querySelector(".P-Score");
  const computerScore = document.querySelector(".C-Score");

  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
};
const compareHands = (playerHands, computerHands) => {
  const result = document.getElementById("result");
  if (playerHands === computerHands) {
    result.innerHTML = "Draw";
    return;
  }
  // rocks
  if (playerHands === "rock") {
    if (computerHands === "scissors") {
      result.innerHTML = "Player Wins";
      pScore++;
      updateScore();
      
    } else {
      result.innerHTML = "Computer Wins";
      cScore++;
      updateScore();
    
    }
  }
  //paper
  if (playerHands === "paper") {
    if (computerHands === "rock") {
      result.innerHTML = "Player Wins";
      pScore++;
      updateScore();
    } else {
      result.innerHTML = "Computer Wins";
      cScore++;
      updateScore();
    }
  }
  //scissors
  if (playerHands === "scissors") {
    if (computerHands === "paper") {
      result.innerHTML = "Player Wins";
      pScore++;
      updateScore();
    } else {
      result.innerHTML = "Computer Wins";
      cScore++;
      updateScore();
    }
  }
  
};
playGame();
