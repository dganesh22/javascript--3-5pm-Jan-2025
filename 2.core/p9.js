// Object

/* 
    Object is group of properties (key and value pairs)
*/

var user = {
    name: "John",
    email: "john@gmail.com",
    age: 22,
    active: false
};

// object destructures in console
console.log(`user =`, user)

// dom cann't destructure the object
document.write(`<h1>  ${user} </h1>`); // [object Object] [ref Constructor]

// property of object in console
console.log(`name = `, user.name); // object.key
console.log(`email =`, user['email']); // object['key']

document.write(`<h1> name = ${user.name} </h1>`)