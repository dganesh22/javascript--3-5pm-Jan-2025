
let course = {}

console.log(`course =`, course)

Object.defineProperties(course, {
    title: {
        value: "JavaScript",
        writable: true
    },
    duration: {
        value: "1.2 month",
        writable: false
    },
    script: {
        value: "frontend",
        writable: true
    }
});

console.log(`course =`, course)

course.title = "Node JS"
course.duration = "1 month"
course.script = "backend"

console.log(`after = `, course)

/* 
    book - object
    title
    author
    isbn
*/