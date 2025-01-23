// Object.keys() and Object.values()

let course = {
    title: "javascript",
    duration: "1.3 months",
    type: "frontend script"
}

console.log(`course = `, course)

// return keys and values in array 
console.log(`keys  =`, Object.keys(course))
console.log(`values  =`, Object.values(course))

console.log(`\n`)

// Object.entries()
let res1 = Object.entries(course) // array of array(key,value)
console.log(`entries = `, res1)// entries

console.log(`\n`)

// entries using Map Constructor
let res2 = new Map(res1)
console.log(`map constructor entries =`, res2) // key => value

console.log(`\n`)

// Object.fromEntries(entries) -> entries to object conversion
console.log(`map entries to object =`, Object.fromEntries(res2))
