let firstEl = document.getElementById("first");
let lastEl = document.getElementById("last");
let dobEl = document.getElementById("dob");
let ageEl = document.getElementById("age");
let genderEl = document.getElementById("gender");
let emailEl = document.getElementById("email");
let passEl = document.getElementById("pass");
let conPassEl = document.getElementById("conPass");

// targetting more than one radio
let posEl = document.getElementsByName("position");

// targeting more than one checkboxes
let lang = document.getElementById('lang')


let pos = "", prog = [];

//console.log(`posEl =`, posEl); // returns array of target node list (html tags)
posEl.forEach(item => {
    item.addEventListener("change", function (e) {
        console.log(`value =`, e.target.value)
        pos = e.target.value;
    });
});

// console.log(`progEl = `, progEl)
lang.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
        let progEl = document.querySelectorAll("input[type='checkbox']:checked");
        let val = Array.from(progEl).map(item => item.value);
        prog = val;
    }
})


function submitHandler(event) {
    event.preventDefault(); // to avoid page reload /refresh
    try {
        if (passEl.value !== conPassEl.value) {
            console.log(`password doesn't match with the confirm password..!`)
        } else {
            let data = {
                first: firstEl.value,
                last: lastEl.value,
                dob: dobEl.value,
                gender: genderEl.value,
                email: emailEl.value,
                password: passEl.value,
                position: pos,
                programs: prog
            }

            console.log(`user = `, data)
        }


    } catch (err) {
        console.log(err.message)
    }
}