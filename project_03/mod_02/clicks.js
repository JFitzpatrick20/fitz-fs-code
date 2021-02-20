$('.one button').click(function () {
    $('.one').text('Good Job')
  });

  $('.two button').click(function(){
      $('.two').slideUp()
  })

  $('.three button').click(function(){
     $('.three').append('<div> test </div>') 
  })

  $('.four button').click(function(){
      $('.four').html($('template').html())
  })

  $('.five button').click(function(){
      $('.prepend-target').prepend(
          $('main .five').clone())
    })

$('.six button').click(function(){
    $('.six').css("transform", "rotate(180deg)")
})

$('.seven button').click(function(){
    let clickedElement = $(this)
    this .text('CLICK TO DISSAPPEAR')
    this .css("padding", "10px")
    $(this).fadeout()
})