/* Accessor property 
    get
    set
*/

let user = {
    name: "Henry",
    surName: "mark"
}

Object.defineProperty(user, "fullName", {
    get: function () {
        return this.name + " " + this.surName;
    },
    set: function (val) {
        [this.name, this.surName] = val.split(" ")
    }
})

console.log(`fullname = `, user.fullName)

user.surName = "david"
console.log(`fullname = `, user.fullName)

user.name = "John"
console.log(`fullname = `, user.fullName)