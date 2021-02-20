function onMapClick(event){
    const appElement = $(this)
    const target = $(event.target)
    const userPressedShiftKey = event.shiftKey
    const isPin = target.hasClass('pin')
    
if (userPressedShiftKey && isPin){
        target.remove()
    } else if (!isPin) {
        const pinX = event.offsetX
        const pinY = event.offsetY

        const pinElement = $('<div class= "pin"></div>')
        .css('left', pinX)
        .css('top', pinY)
       
        appElement.append(pinElement)
    }
}
$('.app').click(onMapClick)