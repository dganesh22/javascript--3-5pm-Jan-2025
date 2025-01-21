/* define property */

let user = {};

console.log(`user = `, user)

// externally assigning the properties to an object

// Object.defineProperty(object, prop, value)
Object.defineProperty(user, "name", {
    value: "Mark"
})

Object.defineProperty(user, "email", {
    value: "mark@gmail.com"
})

console.log(`user =`, user)

