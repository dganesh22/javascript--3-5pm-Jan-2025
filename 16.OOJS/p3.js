// Object constructor methods
/* 
    Object.create() 
    Object.getPrototypeOf()
    Object.setPrototypeOf()
    Object.defineProperty()
    Object.defineProperties()
    Object.keys()
    Object.values()
    Object.entries()
    Object.fromEntries()
    Object.freeze()
*/

let user = {
    name: "Mark",
    email: "mark@gmail.com",
    city: "bengaluru"
}

console.log(`object user =`, user); // Object properties de-structure in console only
document.write(`<h1> user ${user} </h1>`); // [object Object]

// Object.create(obj) -> clone the prototype of existing object
let user1 = Object.create(user)
console.log(`user1 = `, user1)

let user2 = user; // assigning the value of user into user2