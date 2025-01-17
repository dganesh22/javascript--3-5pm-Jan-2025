// Nested conditions

/* 
    Task-3 
    student = John, Bob
    subject = Maths and Science 

*/


var student = "bob"
var subject = "science"

if(student === "john") {
    if(subject === "maths") {
        console.log(`john score in maths is = 60`)
    } else if (subject === "science") {
        console.log(`john score in science is = 70`)
    } else {
        console.log(`enter correct subject name`)
    }
} else if (student === "bob") {
    if(subject === "maths") {
        console.log(`bob score in maths is = 76`)
    } else if (subject === "science") {
        console.log(`bob score in science is = 68`)
    } else {
        console.log(`enter correct subject name`)
    }
} else {
    console.log(`enter correct student name`)
}
