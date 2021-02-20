// write a function that takes two numbers and returns the lower of the two

function smallOne(lower, higher){
    if (lower > higher){
        return higher
    }
    return lower
}

// write a function that takes an array removes the last element and adds it to the front

function rotateRight(arr) {
    let end = arr.pop()
    arr.unshift(end)
}

function rotateLeft(arr) {
    arr.push(arr.shift())
}

