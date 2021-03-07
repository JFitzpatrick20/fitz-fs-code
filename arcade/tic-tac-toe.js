function makeGameBoard(){
  let ticBoard = [
    `
    <div class="cell" id="1"></div>
    <div class="cell" id="2"></div>
    <div class="cell" id="3"></div>
    <div class="cell" id="4"></div>
    <div class="cell" id="5"></div>
    <div class="cell" id="6"></div>
    <div class="cell" id="7"></div>
    <div class="cell" id="8"></div>
    <div class="cell" id="9"></div>
    `
  ]
  return ticBoard

}

function renderBoard(){
  let renderBoard = makeGameBoard()
  $('#tic-tac-toe').append(renderBoard)
}
renderBoard()

const winLayout = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"]
]

let one = `#${winLayout[0][0]}`
let two = `#${winLayout[0][1]}`
let three = `#${winLayout[0][2]}`
let four = `#${winLayout[1][0]}`
let five = `#${winLayout[1][1]}`
let six = `#${winLayout[1][2]}`
let seven = `#${winLayout[2][0]}`
let eight = `#${winLayout[2][1]}`
let nine = `#${winLayout[2][2]}`

// let firstWin = $(one).text() && $(two).text() && $(three).text()
// let secondWin = four && five && six
// let thirdWin = seven && eight && nine
// let forthWin = $(one).text() && four && seven
// let fifthWin = $(two).text() && five && eight
// let sixthWin = $(three).text() && six && nine

// let seventhWin = $(one).text() && five && nine
// let eighthWin = $(three).text() && five && seven



function win(){
  if($(one).text() == $(five).text()  && $(five).text() == $(nine).text() && $(five).text() !== ""){
    window.alert(`${activePlayer} wins`)
  }
  if($(three).text() == $(five).text() && $(five).text() == $(seven).text() && $(five).text() !== ""){
    window.alert(`${activePlayer} wins`)
  }
  if($(three).text() == $(six).text() && $(six).text() == $(nine).text() && $(six).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  if($(two).text() == $(five).text() && $(five).text() == $(eight).text() && $(five).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  if($(one).text() == $(four).text() && $(four).text() == $(seven).text() && $(four).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  if($(three).text() == $(two).text() && $(two).text() == $(one).text() && $(two).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  if($(four).text() == $(five).text() && $(five).text() == $(six).text() && $(five).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  if($(seven).text() == $(eight).text() && $(eight).text() == $(nine).text() && $(eight).text() !== ""){
     window.alert(`${activePlayer} wins`)
  }
  
  // console.log('win', `#${winLayout[0][0]}`)
  // let curentVal = `#${winLayout[0][0]}`
  // let curentText = $(curentVal).text()
  // console.log(curentText, "hi")
}

let activePlayer = "X"
let startingPlayer ="X"
let otherPlayer = "O"
  
function nextTurn(){
  activePlayer = activePlayer === "X" ? otherPlayer : startingPlayer
  
}

$('.cell').click(function(){
  if($(this).text() === ""){
    $(this).append(activePlayer)
  }
  win()
  nextTurn()
})



$('.home-button').click(function(){
  window.location = href='index.html'
})
  
  


// const board = {
//     players: ['x', 'o'],
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//   }

//   for (i=0; i<9; i++){
//       let cell = (`<div class="cell"></div>`)
//       $('#tic-tac-toe').append(cell)
//   }


//   let activeGame = true
//   let turn = 1


  

// //  board.forEach(element => {
// //    let cell = (`<div class="cell"></div>`)
// //    element.append(`<div class="cell"></div>`)
// //    $('#tic-tac-toe').append(element)
// //    console
     
// //  });

//   $('.cell').click(function(){
//     if($(this).text() == "" && activeGame){
//       if((turn%2) == 1){
//         $(this).append("❎")
//       }else{
//         $(this).append("🅾️")
//       }
//       move++
//     }
//   })

  

// $('.home-button').click(function(){
//   window.location = href='index.html'
// })

// function oneText(){
//   let curentVal = `#${winLayout[0][0]}`
//   let oneText = $(curentVal).text()
//   return oneText
// }
// function twoText(){
//   let curentVal = `#${winLayout[0][1]}`
//   let twoText = $(curentVal).text()
//   return twoText
// }
// function threeText(){
//   let curentVal = `#${winLayout[0][2]}`
//   let threeText = $(curentVal).text()
//   return threeText
// }
// function fourText(){
//   let curentVal = `#${winLayout[1][0]}`
//   let fourText = $(curentVal).text()
//   return fourText
// }
// function fiveText(){
//   let curentVal = `#${winLayout[1][1]}`
//   let fiveText = $(curentVal).text()
//   return fiveText
// }
// function sixText(){
//   let curentVal = `#${winLayout[1][2]}`
//   let sixText = $(curentVal).text()
//   return sixText
// }
// function sevenText(){
//   let curentVal = `#${winLayout[2][0]}`
//   let sevenText = $(curentVal).text()
//   return sevenText
// }
// function threeText(){
//   let curentVal = `#${winLayout[2][1]}`
//   let eightText = $(curentVal).text()
//   return eightText
// }
// function threeText(){
//   let curentVal = `#${winLayout[2][2]}`
//   let nineText = $(curentVal).text()
//   return nineText
// }

// let firstWin = oneText() && twoText() && threeText()
// let secondWin = fourText() && fiveText() && sixText()
// let thirdWin = sevenText() && eightText() && nineText()
// let forthWin = oneText() && fourText() && sevenText()
// let fifthWin = twoText() && fiveText() && eightText()
// let sixthWin = threeText() && sixText() && nineText()
// let seventhWin = oneText() && fiveText() && nineText()
// let eighthWin = threeText() && fiveText() && sevenText()