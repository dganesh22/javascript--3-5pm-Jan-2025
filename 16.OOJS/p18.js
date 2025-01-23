
// methods as a property of constructor

function User() {
    this.name = "John";
    this.email = "john@gmail.com";
    this.age = 20;
    this.getUserInfo = function() {
        return  "the user name is " + this.name
    };
    this.getEmail = () => {
        document.write(`<h1> email = ${this.email} </h1>`)
    };
    // local function are not consider as property of constructor
    // scope of the local function is within the Constructor
    // we can call the function within constructor
    function test() {

    }
}

let x = new User()

document.write(`<h1> ${ x.getUserInfo()}  </h1>`)
x.getEmail()