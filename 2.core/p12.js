
// object array

var users = [
    {
        id: 1,
        name: "Sam",
        email: "sam@gmail.com",
        age: 24
    },
    {
        id: 2,
        name: "mary",
        email: "mary@gmail.com",
        age: 22
    }
]

console.log(`object array =`, users)

for(var i=0; i < users.length; i++) {
    document.write(`<h1> name = ${users[i].name} </h1>`)
    document.write(`<h1> email = ${users[i]['email']} </h1>`)
}


// object array using array constructor
var c = new Array({title: "Tata tiago", color: "black", make: 2024},{title: "Mahindra Thar", color: "red", make: 2022})

// c[0].title = "Tata Tiago";
// c[0].color = "black";
// c[0].make = 2024;

// c[1].title = "Mahindra Thar";
// c[1].color = "red";
// c[1].make = 2022;

console.log(`cars  c =`, c)


var c1 = new Array({ title: "Java", duration: 2, type: "backend"}, {title: "react", duration: 1.3, type: "frontend"})

console.log(`c1 = `, c1)