// Object.getPrototypeOf(cloned object)

// user - initial object
let user = {
    name: "john",
    email: "john@gmail.com",
    age: 24
}

console.log(`user = `, user)

// u1 - cloned object
let u1 = Object.create(user)

console.log(`u1 =`, u1)
console.log(`u1 =`, Object.getPrototypeOf(u1))

// Object.setPrototypeOf(cloned_object,new_object)
let u2 = Object.setPrototypeOf(u1, {
    city: "bengaluru",
    pin: "560010"
})

console.log(`u2 =`, u2)