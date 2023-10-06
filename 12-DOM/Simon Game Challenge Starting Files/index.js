const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameStarted = false;

// Function to play sound for a button color
function playSound(color) {
  const audio = document.getElementById(`${color}-sound`);
  audio.play();
}

// Function to animate a button
function animatePress(color) {
  const button = document.querySelector(`.${color}`);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

// Function to start the game
function startGame() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  gameStarted = true;
  nextSequence();
}

// Function to generate the next sequence
function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = `Level: ${level}`;
  const randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  setTimeout(() => {
    animatePattern(gamePattern);
  }, 1000);
}

// Function to animate the pattern
function animatePattern(pattern) {
  for (let i = 0; i < pattern.length; i++) {
    setTimeout(() => {
      const color = pattern[i];
      playSound(color);
      animatePress(color);
    }, i * 1000);
  }
}

// Event listener for button clicks
document.querySelector(".container").addEventListener("click", function(event) {
  if (gameStarted) {
    const userChosenColor = event.target.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  }
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.getElementById("level-title").textContent = "Game Over. Press A Key to Restart";
    document.body.classList.add("game-over");
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);
    startOver();
  }
}

// Function to restart the game
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  gameStarted = false;
}

// Event listener for starting the game
document.addEventListener("keydown", function(event) {
  if (!gameStarted) {
    startGame();
  }
});
