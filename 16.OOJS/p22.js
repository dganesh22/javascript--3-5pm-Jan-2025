// inheritance

// super class
class Course {
    constructor(ti, dr) {
        this.title = ti;
        this.duration = dr;
    }

    getInfo() {
        document.write(`<h1>  title = ${this.title} and duration is ${this.duration} </h1>`)
    }
}

// base class
class User extends Course {
    constructor(a, b) {
        super(a, b)
    }
}

let u = new User("JavaScript", 1.2)

console.log(`instance =`, u)
u.getInfo()
console.log(`title = `, u.title)
console.log(`title = `, u.duration)