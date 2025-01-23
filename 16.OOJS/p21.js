class Car {
    constructor(a, b) {
        this.title = a;
        this.model = b;
    }

    getCarInfo() {
        return this.title + " and model is " + this.model;
    }
}

let x = new Car("Toyota Innova", 2024)

console.log(`x = `, x)

console.log(`car info = `, x.getCarInfo())

x = new Car("Mahindra  Thar", 2024)

console.log(`x = `, x)

console.log(`car info = `, x.getCarInfo())