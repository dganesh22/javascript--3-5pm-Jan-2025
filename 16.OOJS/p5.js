// object inheritance chain using object.create()

let u1 = {
    name: "mary",
    email: "mary@gmail.com"
}

let u2 = Object.create(u1, {
    age: {
        value: 22
    },
    mobile: {
        value: "9966885544"
    }
})

let u3 = Object.create(u2, {
    city: {
        value: "Rajaji nagar, Bengaluru"
    },
    pin: {
        value: "560010"
    }
})

console.log(`user 3 =`, u3)