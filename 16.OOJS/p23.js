// static methods

class Car {
    constructor(ti, co, ty) {
        this.title = ti;
        this.color = co;
        this.type = ty;
    }

    getCarInfo() {
        // this.property
        document.write(`<h1> color = ${this.color} and type = ${this.type} </h1>`)
    }

    static getInfo(ref) {
        // this pointer is disabled inside the static method body
        document.write(`<h1>car info  ${ref.title}  </h1>`)
    }
}


let x = new Car("maruti", "white", "diesel")
// to cal static methods - Classname.static_method()
Car.getInfo(x)


x.getCarInfo()
// x.getInfo()

let x1 = 20

//  to validate the instance of class
console.log(`instance = `, x instanceof Car)// true
console.log(`instance = `, x1 instanceof Car)// false