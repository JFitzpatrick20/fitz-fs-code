function makeGameBoard() {
  let ticBoard = [
    `
    <div class="cell" id="1"></div>
    <div class="cell" id="2"></div>
    <div class="cell" id="3"></div>
    <div class="cell" id="4"></div>
    <div class="cell" id="5"></div>
    <div class="cell" id="6"></div>
    <div class="cell" id="7"></div>
    <div class="cell" id="8"></div>
    <div class="cell" id="9"></div>
    `,
  ];
  return ticBoard;
}

function renderBoard() {
  let renderBoard = makeGameBoard();
  $("#tic-tac-toe").append(renderBoard);
}
renderBoard();

const winLayout = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

let one = `#${winLayout[0][0]}`;
let two = `#${winLayout[0][1]}`;
let three = `#${winLayout[0][2]}`;
let four = `#${winLayout[1][0]}`;
let five = `#${winLayout[1][1]}`;
let six = `#${winLayout[1][2]}`;
let seven = `#${winLayout[2][0]}`;
let eight = `#${winLayout[2][1]}`;
let nine = `#${winLayout[2][2]}`;

function win() {
  if (
    $(one).text() == $(five).text() &&
    $(five).text() == $(nine).text() &&
    $(five).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(three).text() == $(five).text() &&
    $(five).text() == $(seven).text() &&
    $(five).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(three).text() == $(six).text() &&
    $(six).text() == $(nine).text() &&
    $(six).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(two).text() == $(five).text() &&
    $(five).text() == $(eight).text() &&
    $(five).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(one).text() == $(four).text() &&
    $(four).text() == $(seven).text() &&
    $(four).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(three).text() == $(two).text() &&
    $(two).text() == $(one).text() &&
    $(two).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(four).text() == $(five).text() &&
    $(five).text() == $(six).text() &&
    $(five).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
  if (
    $(seven).text() == $(eight).text() &&
    $(eight).text() == $(nine).text() &&
    $(eight).text() !== ""
  ) {
    window.alert(`${activePlayer} wins`);
  }
}

function draw() {
  if (
    !$(one).text() == $(five).text() &&
    $(five).text() == $(nine).text() &&
    $(five).text() == "" &&
    !$(three).text() == $(five).text() &&
    $(five).text() == $(seven).text() &&
    $(five).text() == "" &&
    !$(three).text() == $(six).text() &&
    $(six).text() == $(nine).text() &&
    $(six).text() == "" &&
    !$(two).text() == $(five).text() &&
    $(five).text() == $(eight).text() &&
    $(five).text() == "" &&
    !$(one).text() == $(four).text() &&
    $(four).text() == $(seven).text() &&
    $(four).text() == "" &&
    !$(three).text() == $(two).text() &&
    $(two).text() == $(one).text() &&
    $(two).text() == "" &&
    !$(four).text() == $(five).text() &&
    $(five).text() == $(six).text() &&
    $(five).text() == "" &&
    !$(seven).text() == $(eight).text() &&
    $(eight).text() == $(nine).text() &&
    $(eight).text() == ""
  ) {
    window.alert(`draw`);
  }
}

let activePlayer = "X";
let startingPlayer = "X";
let otherPlayer = "O";

$(".submit").click(function () {
  const xPlayer = $(".x-player").text();
  const oPlayer = $(".o-player").text();

  $(".o-player").empty();
  $(".x-player").empty();
});

function nextTurn() {
  activePlayer = activePlayer === "X" ? otherPlayer : startingPlayer;
}

$(".cell").click(function () {
  if ($(this).text() === "") {
    $(this).append(activePlayer);
  }
  win();
  draw();
  nextTurn();
});

$(".reset").click(function () {
  $(".cell").empty();
  renderBoard();
  activePlayer = "X";
  startingPlayer = "X";
  otherPlayer = "O";
});

$(".home-button").click(function () {
  window.location = href = "index.html";
});
