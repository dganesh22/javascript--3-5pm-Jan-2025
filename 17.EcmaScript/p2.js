/* ...   (Spread operator and Rest Operator) */


// Rest -> params to array
function sum(...num) {
    console.log(`num = `, num)
}

sum(10, 9, 8, 6, 5, 3, 1, 5)


// spread operator - array to parameter
let users = ["sam", "tom", "henry", "mac"]

function handler(val) {
    console.log(`val =`, val)
    console.log(`val =`, ...val)
}

handler(users)