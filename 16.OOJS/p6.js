/* Object inheritance using __proto__ */

let u1 = {
    name: "mary",
    email: "mary@gmail.com"
}

let u2 = {
    mobile: "9966885544",
    age: 22,
    __proto__: u1
}

let u3 = {
    city: "mangaluru",
    __proto__: u2
}

console.log(`u3 =`, u3)