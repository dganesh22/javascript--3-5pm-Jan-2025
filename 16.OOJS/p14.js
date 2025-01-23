// Object.freeze()

let user = {
    name: "mary",
    email: "mary@gmail.com",
    age: 22
}

console.log(`user = `, user)

Object.freeze(user) // will make the object read only

user.name = "tom"
user.email = "tom@gmail.com"
user.age = 24

console.log(`user = `, user)