// super keyword

class Course {
    constructor(ti) {
        this.title = ti;
    }

    getData() {
        return `Course title is ${this.title}`
    }
}

class Student extends Course {
    constructor(na, ti) {
        super(ti)
        this.name = na;
    }

    getData() {
        document.write(`<h1> student name ${this.name} and course title ${super.getData()} </h1>`)
    }
}

let x = new Student("Henry", "ReactJS")

x.getData()