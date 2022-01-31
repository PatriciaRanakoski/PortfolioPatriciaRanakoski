let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const draw_p = document.querySelector(".draw > p");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");
const reset_game = document.getElementById("resetGame");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup(3);
  const smallCompWord = "comp".fontsize(3).sup(3);
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  draw_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}`;
  result_p.innerHTML = "You win!";
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup(3);
  const smallCompWord = "comp".fontsize(3).sup(3);
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  draw_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}`;
  result_p.innerHTML = "You lost...";
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoise) {
  const smallUserWord = "user".fontsize(3).sup(3);
  const smallCompWord = "comp".fontsize(3).sup(3);
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  draw_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord}`;
  result_p.innerHTML = "It's a draw.";
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function resetGame() {
  console.log("work")
  userScore = 0;
  computerScore = 0;

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissor");
  });

  reset_game.addEventListener("click", function () {
    resetGame();
  })
}

main();
