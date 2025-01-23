// prototype keyword  - used to set the properties to the constructor externally

function User() {
    //  this.key  = value;
}

let u = new User();

console.log(`user instance =`, u)

// Constructor.prototype.key = value;
User.prototype.firstname = "mary"
User.prototype.lastname = "anna"

console.log(`user instance = `, u)

console.log(`firstname = `, u.firstname)
console.log(`lastname = `, u.lastname)