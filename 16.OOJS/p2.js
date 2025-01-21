/* Object Constructor */

let user = new Object()

user.name = "Henry"
user.email = "henry@gmail.com"

user.getUserInfo = function () {
    document.write(`<h1> user name is ${this.name} and email = ${this.email} </h1>`);
}

user.getUserInfo()

console.log(`name =`, user.name); // object.key
console.log(`name =`, user['email']); // object['key']
