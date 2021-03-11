


let heldValue = null;
let heldOperation = null;
let nextValue = null;


function showValue(location, value) {
  if (value === null) {
    $(location).text("");
  } else {
    $(location).text(Number(value));
  }
}

function updateDisplay() {
  showValue(".next-value", nextValue);
  showValue(".held-value", heldValue);
}

function setHeldOperation(operation) {
    if (heldOperation !== null){
        heldValue = heldOperation(heldValue, nextValue);
    } else if(nextValue !== null && !heldOperation){
        heldValue = nextValue;
    }   
    nextValue = null;  
    heldOperation = operation
}

function clickDigit() {
  if (nextValue === null) {
    nextValue = "0";
  }
  nextValue = nextValue + $(this).text();
  updateDisplay();
}
$(".digits button").click(clickDigit);

function add(x, y) {
  return x + y
}
$(".operations .add").click(function(){
  setHeldOperation(add)
  $('.next-operation').text(" + ")
  updateDisplay()
})

function subtract(x, y) {
  return x - y
}
$(".operations .subtract").click(function(){
  setHeldOperation(subtract)
  $('.next-operation').text(' - ')
  updateDisplay()
})

function multiply(x, y) {
  return x * y
}
$(".operations .multiply").click(function(){
  setHeldOperation(multiply)
  $('.next-operation').text(" * ")
  updateDisplay()
})

function divide(x,y) {
  return x / y
}
$(".operations .divide").click(function(){
  setHeldOperation(divide)
  $('.next-operation').text(" / ")
  updateDisplay()
})

function equals(){
  setHeldOperation(null)
  $('.next-operation').text(null)
  updateDisplay()
}
$(".operations .equals").click(function() {
  setHeldOperation()
  $('.next-operation').text(null)
  nextValue = null
  updateDisplay()
})

function clearAll() {
  nextValue = null;
  heldOperation = null;
  heldValue = null;
  $('.next-operation').text(null)
  updateDisplay()
}
$(".memory .clear-all").click(clearAll);

function clearEntry() {
  nextValue = null
  updateDisplay()
}
$(".memory .clear-entry").click(clearEntry);