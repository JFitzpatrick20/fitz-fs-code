let red = $('#red')
let blue = $('#blue')
let green = $('#green')


function updateValues(){
    red = $('#red').val();
    blue = $('#blue').val();
    green = $('#green').val();
}
updateValues()



function updatePage(){
    $('.red-value').text(red);
    $('.green-value').text(green)
    $('.blue-value').text(blue)
    
    let rgbString = `rgb(${red} ${green} ${blue})`
    $('.preview').css('background-color', rgbString)
   /* let rgbString = "rgb("
    rgbString +=  red + ", " + green + ", " + blue + ")";
    $('.preview').css('background-color', rgbString)*/
}
updatePage()

function updateAll(){

}