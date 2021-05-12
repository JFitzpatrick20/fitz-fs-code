const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

class snakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 6;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

let xDirection = 0;
let yDirection = 0;

let xFood = 5;
let yFood = 5;

let score = 0;

function drawGame() {
  changeSnakeDirection();
  let result = isGameOver();
  if (result) {
    return;
  }
  clearScreen();

  checkFoodCollision();
  drawFood();
  drawSnake();

  drawScore();

  if (score > 5) {
    speed = 8;
  }
  if (score > 10) {
    speed = 10;
  }
  if (score > 15) {
    speed = 12;
  }

  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yDirection === 0 && xDirection === 0) {
    return false;
  }

  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "red";
    ctx.font = "50px";

    ctx.fillText(
      `Game Over! Try Again! Snake was ${score + 3} long`,
      canvas.width / 6.5,
      canvas.height / 2
    );
  }

  return gameOver;
}

function drawScore() {
  $(".count").text(`${score + 3}`);
}

function clearScreen() {
  ctx.fillStyle = "#002099";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "#fe7d6a";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new snakePart(headX, headY));
  while (snakeParts.length > tailLength) {
    snakeParts.shift();
  }

  ctx.fillStyle = "#ff7f50";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawFood() {
  ctx.fillStyle = "#ff0800";
  ctx.fillRect(xFood * tileCount, yFood * tileCount, tileSize, tileSize);
}

function changeSnakeDirection() {
  headX = headX + xDirection;
  headY = headY + yDirection;
}

function checkFoodCollision() {
  if (xFood === headX && yFood == headY) {
    xFood = Math.floor(Math.random() * tileCount);
    yFood = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  if (event.keyCode == 38) {
    if (yDirection == 1) return;
    yDirection = -1;
    xDirection = 0;
  }

  if (event.keyCode == 40) {
    if (yDirection == -1) return;
    yDirection = 1;
    xDirection = 0;
  }

  if (event.keyCode == 37) {
    if (xDirection == 1) return;
    yDirection = 0;
    xDirection = -1;
  }

  if (event.keyCode == 39) {
    if (xDirection == -1) return;
    yDirection = 0;
    xDirection = 1;
  }
}

function mousedown(event) {
  if (xDirection == 1) return;
  yDirection = 0;
  xDirection = -1;
}

drawGame();

$(".start").click(function () {
  document.body.addEventListener("mousedown", mousedown);
});

$(".resetButton").click(function () {
  window.location = href = "snake.html";
});

$(".home-button").click(function () {
  window.location = href = "index.html";
});
