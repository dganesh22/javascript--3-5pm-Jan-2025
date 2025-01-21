let course = {}

Object.defineProperty(course, "title", {
    value: "React JS",
    writable: false
})

// writable =true => re-assign the value
// writable = false => cann't re-assign the value

console.log(`course =`, course)

// re assign the new value
course.title = "JavaScript"

console.log(`course = `, course)