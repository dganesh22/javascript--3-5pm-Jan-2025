// parameterised constructor


function Product(x, y) {
    this.a = x;
    this.b = y;
    this.result = function () {
        document.write(`<h1> product = ${this.a * this.b} </h1>`)
    }
}

let u = new Product(10, 20)
u.result()

u = new Product(20, 2)
u.result()