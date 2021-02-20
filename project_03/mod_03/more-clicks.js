

/*$('.task-input button').click(function(){
    const input_button = $("buttton").val();
    if (true){
      $('.task-list').append($('<li>', {
        text: $('input').val()
   }));
    }else{
        console.log('not clicked')
    }
})

$('.decider button').click(function(){
  
  
  if ( $('.decider').hasClass('.active') ) {
    $('.active').toggleClass('')
    

  } else {
    // do not
  }
})
*/

function addInput(){
  const input= $('.task-input input').val();
  if (input !== ""){
    const li = $('<li />')
    li.addClass('li-input')
    $('.task-list').append(li);
    li.text(input)
    console.log("i have text")
  }else{
    const li = $('<li />')
    li.addClass('li-input')
    li.text("")
    $('.task-list').append(li)
    console.log('no text')
  }
}

$(".task-input button").click(addInput)

function togglePower(){
  const status= $('.status')
  if ( $(status).hasClass('.active') ) {
    
  } else {
    // do not
  }
}

$('.decider button').click(togglePower)

