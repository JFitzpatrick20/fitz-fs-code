/*
    Bubble game
        -random set of bubbles on the screen
        -bubbles slowly falling down off the screen 
        - top right- score set to zero

    Intractivity
        -click
         - bubble pops(disappear, display: none)
         -score incresses by one 
*/

const numBubbles = Math.floor(Math.random()*19)

for(let i = 0; i < numBubbles; i++){
    const randomX = Math.floor(Math.random() * screen.width)
    const randomY = Math.floor(Math.random() * screen.width)
    $('#app').append(`<div class='bubble' style="margin-left: ${randomX}px"; "margin-top: ${randomY}px"></div>`)

    
}