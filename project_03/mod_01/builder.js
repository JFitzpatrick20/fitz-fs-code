const h3 = $("<h3>")
const p = $('<p></p>')
const img = $('<img></img>')

h3.text("Hello World")
p.html('<p><b>This</b> is my text</p>')
img.attr('src', 'https://placeimg.com/640/480/any?t=1612320972802')
$('.slo-mo').append(p)
$('.slo-mo').append(img)

$('.normal-speed').append(
    $('<h3>').text('Hello World!'),
    $('<p>').html('<p><b>This</b> is my text</p>'),
    $('img').attr('src',"https://placeimg.com/640/480/any?t=1612320972802"),
)

$('.rewind')
    .prepend(img.attr('src', 'https://placeimg.com/640/480/any?t=1612320972802'))
    .prepend('<p><b>This</b> is my text</p>')
    .prepend("Hello World!")
// $('body').append(header3)



$()

