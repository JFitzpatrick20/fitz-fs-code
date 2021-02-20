function makePalette() {
   
    const PALETTE = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
      "white",
      "black"
    ];
  
    for (let index = 0; index < PALETTE.length; index = index + 1) {
      const nextColor = PALETTE[index];
      const button = $("<button />");
      button.addClass("color");
      button.addClass(nextColor);
      $(".palette").append(button);
    }
    $(".palette button").first().addClass("active");
  }
  
  makePalette();
  
  function makeGrid() {
    for (let index = 0; index < 64; index = index + 1) {
      const cell = $("<div />");
      cell.addClass("cell");
      $(".grid").append(cell);
    }
  }
  
  makeGrid();
  
  function onPaletteClick() {
    $(".palette button.active").removeClass("active");
    $(this).addClass("active");
  }
  
  $(".palette button").click(onPaletteClick);
  
  function onGridClick() {
    const color = $(".palette button.active").css("background-color");
    $(this).css("background-color", color);
  }
 
  $(".grid .cell").click(onGridClick);
//Mod_03
function onClearClick() {
  $(".grid .cell").css("background-color", "");
}

$(".controls .clear").click(onClearClick);

function onFillAllClick() {
  const color = $(".palette button.active").css("background-color");
  $(".grid .cell").css("background-color", color);
}

$(".controls .fill-all").click(onFillAllClick);

function onFillEmptyClick() {
  const color = $(".palette button.active").css("background-color");
  const elements = $(".grid .cell");
  for (let index = 0; index < elements.length; index = index + 1) {
    let nextElement = $(elements[index]);
    if (nextElement.css("background-color") === "rgba(0, 0, 0, 0)") {
      nextElement.css("background-color", color);
    }
  }
}

$(".controls .fill-empty").click(onFillEmptyClick);


function addColor() {
  const text = $(".color-widget input").val();
  if (text !== "") {
    const button = $("<button />");
    button.addClass("color");
    button.css("background-color", text);
    $(".palette").prepend(button);
  }
  $(".palette button.active").removeClass("active");
  $(".palette button").first().addClass("active");
}

$(".color-widget button").click(addColor);