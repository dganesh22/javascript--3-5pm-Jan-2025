/* objects
    group of key and values
    var name = {
        key: value
    }

    Object Constructor
*/
let user = {
    name: "john",
    getName: function () {
        return "my name is " + this.name
    },
    display: () => {
        // this pointer cann't access any values (arrow function)
        return `name of the user is ${this.name}`;
    }
}

console.log(`name = `, user.name)
console.log(`getName = `, user.getName())
console.log(`display = `, user.display())
document.write(`<h1>display = ` + user.display() + '</h1>')
