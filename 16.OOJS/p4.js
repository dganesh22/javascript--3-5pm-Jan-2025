let car = {
    title: "Toyota Innova",
    make: 2024,
    color: "white"
}

//fuel = own property
// title,make,color = cloned properties (inherited)
let c1 = Object.create(car, {
    fuel: {
        value: "diesel"
    }
})

console.log(`car = `, car)
console.log(`clone = `, c1)
