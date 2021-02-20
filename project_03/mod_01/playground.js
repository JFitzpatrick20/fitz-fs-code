$('.card.red h3').text('Abacus Central')
$('.card.blue h3').text('Grenadine Dreams')
$('.card.white h3').html('<code>CODE</code> Central')


$('header h1').text('Hello World!')


$('body').css({"background-color": "#777", "font-family": "sans-serif"})


$('section').css("display","flex")


$('.card.red').css({ "border": "3px solid darkred", "background-color": "red", "padding": "15px", "margin":"8px", "color": "white", "flex-basis": "1"})
$('.card.blue').css({ "border": "3px solid darkblue", "background-color": "blue", "padding": "15px", "margin":"8px", "color": "white", "flex-basis": "1"})
$('.card.white').css({ "border": "3px solid gray", "background-color": "white", "padding": "15px", "margin":"8px", "flex-basis": "1"})

$('code').css("font-size", "1.7em")

$('.first.lead-cards p').css("font-family", "cursive")

$('section:nth-of-type(2)').css({
    'transform':'rotate(360deg) scale(.5)',
    'transition':'transform 3s ease', })

$('.deprecated').remove()