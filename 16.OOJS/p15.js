// Constructors
/* 
Rules
    1. Constructors are continuation of an object
    2. Function + Object = Constructor
    3. follows the function body
    4. constructors cann't return
    5. constructor can be param or non-param
    6. constructor property -> (this.key = value)


    function name(param) {
        return 
        non-return
    }

    var obj = {
        key: value
    }

    obj.key

    function Constructor(param) {
        this.key = value;
    }

    let ref = new Constructor();
    ref.key
*/

// non-parameter constructor
function User() {
    this.name = "Mary";
    this.email = "mary@gmail.com";
    this.age = 20;
    this.hobbies = ["cycling", "riding", "hiking"],
        this.getName = function () {
            return "my name is " + this.name;
        };
    this.getEmail = () => {
        return "my email is " + this.email;
    };
}

// ref / instance of constructor /class
let x = new User();

console.log(`instance x =`, x)

document.write(`<h1> name = ${x.name} </h1>`)
document.write(`<h1> email = ${x.email} </h1>`)
document.write(`<h1> age = ${x.age} </h1>`)
document.write(`<h1> hobbies = ${x.hobbies} </h1>`)
document.write(`<h1> function = ${x.getName()} </h1>`)
document.write(`<h1> function = ${x.getEmail()} </h1>`)