function makeSnakeGrid(){
    const playField = $('#snake')
    for (let index = 0; index < 144; index = index + 1){
        const cell = $("");
        cell.addClass("cell");
        $(".grid").append(cell);
    }

}
let lastRenderTime = 0
let snakeSpeed = 2
let startPosition= 2
let snake
let snakeDirection = {x: 0, y: 0}
let right = {x: 1, y: 0}
let left = {x: -1, y: 0}
let up = {x: 0, y: -1}
let down = {x: 0, y: 1}

function move(currentTime) {
    requestAnimationFrame(move)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / snakeSpeed){
        return
    }
    startPosition++  
    snake.css("grid-coloum-start", startPosition)
    lastRenderTime = currentTime
    console.log(move)
}

const snakeBody = [
    {x: 2,y: 2},
]

function draw(){
    snake = $('<div class="snake"></div>')
    snake.css("grid-row-start", startPosition)
    snake.css("grid-column-start", startPosition)
    $('#snake').append(snake)
    requestAnimationFrame(move)
}
draw()

function update(){
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] ={...snakeBody[i]}
    }
    
}

function getDirection(event) {
    if (event.keyCode == 37 && snakeDirection != "right") {
        snakeDirection = "left";
    } else if (event.keyCode == 38 && snakeDirection != "down") {
        snakeDirection = "up";
    } else if (event.keyCode == 39 && snakeDirection != "left") {
        snakeDirection = "right";
    } else if (event.keyCode == 40 && snakeDirection != "up") {
        snakeDirection = "down";
    }}

    $('.home-button').click(function(){
        window.location = href='index.html'
      })