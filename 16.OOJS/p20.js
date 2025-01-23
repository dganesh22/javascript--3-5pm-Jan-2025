// class

class User {
    constructor() {
        // properties
        this.name = "John";
        this.email = "john@gmail.com";
        this.age = 22;
    }

    // methods
    getName() {
        document.write(`<h1> name is ${this.name} </h1>`)
    }

}

let x = new User();

console.log(`x = `, x)
console.log(`name = `, x.name)
console.log(`email = `, x.email)
console.log(`age = `, x.age)

x.getName()