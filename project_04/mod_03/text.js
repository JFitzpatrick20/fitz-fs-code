function reverse(text) {
    return text.split('').reverse().join('');
  }
  
  function scream(text) {
    return text.toUpperCase() + "!!!";
  }
  
  function drawOut(text) {
    return text.split('').join("...");
  }
  
  let textFunction = reverse; // default value

  function updateText() {
      const userInput = $('#user-input').val()
      const transformedInput = textfunction(userInput) 
      $('#transformed').text(transformedInput)
  }