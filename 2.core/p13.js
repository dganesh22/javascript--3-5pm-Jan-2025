
// JSON Object

let user = {
    name: "john",
    email: "john@gmail.com",
    age: 23,
    city: "bengaluru"
}

console.log(`object =`, user)

let r1 = JSON.stringify(user); // object to json string
console.log(`json object =`, r1)


var users = [
    {
        id: 1,
        name: "Sam",
        email: "sam@gmail.com",
        age: 24
    },
    {
        id: 2,
        name: "mary",
        email: "mary@gmail.com",
        age: 22
    }
]

console.log(`users =`, users)
 // array - json array string
let r2 = JSON.stringify(users)
console.log(`json object array =`, r2)

// jsonarray - object array
let r3 = JSON.parse(r2)
console.log(`object array =`, r3)