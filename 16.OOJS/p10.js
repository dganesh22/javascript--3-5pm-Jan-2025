// Object.defineProperties(obj,{ key: value})

let course = {}

console.log(`course =`, course)

Object.defineProperties(course, {
    title: {
        value: "JavaScript"
    },
    duration: {
        value: "1.2 month"
    },
    script: {
        value: "frontend"
    }
});

console.log(`course =`, course)