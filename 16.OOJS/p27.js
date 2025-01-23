// encapsulation
// accessor (get and set)

class User {
    constructor() {
        this._name = [];
    }

    // assign the value to alias property
    set name(val) {
        this._name.push(val)
    }

    get name() {
        return this._name;
    }
}

let x = new User()

x.name = "Sam"
console.log(`name = `, x.name)