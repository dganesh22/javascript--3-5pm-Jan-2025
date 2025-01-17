// functions
/* 
    block of small code or logic
        1. definition (body)
        2. call
            call by value 
            through events (dom and events)

    Types 
        1. by prototype (Syntax)
            a. function definition
            b. arrow function
            c. const local function
        2. by operation
            a. parameter return function
            b. parameter non-return function
            c. non-param return 
            d. non-param non-return
        3. anonymous function / self execution
        4. lambda function (single line)

*/

// function name(params) {
//     // body
// }

// name() // call

// definition type
function print() {
    console.log(`welcome to function`)
}

print()// call

// arrow function
var display = () => {
    console.log(`welcome to arrow function`)
}

display()

// const local function
var getName = function () {
    console.log(`const local function`)
}

getName()