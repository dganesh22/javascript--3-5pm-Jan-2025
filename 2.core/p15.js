// parameter return function

function product(a, b) {
    return a * b
}

let res1 = product(10, 4)
console.log(`product = `, res1)

// parameter non-return function

function sum(x, y) {
    document.write(`<h1> sum = ${x + y} </h1>`)
}

sum(20, 30)

// non-parameter non-return function
function print() {
    var name = prompt("Enter your name?");
    console.log(`name = `, name)
}


// non-parameter return function

function display() {
    var city = prompt("Enter your city name?")
    return "my city name is " + city
}

console.log(`output =`, display())