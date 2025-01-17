let userForm = document.getElementById("userForm")
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let passEl = document.getElementById("pass")

// set the local storage variable
let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        let data = {
            id: Math.round(Math.random() * 10000),
            name: nameEl.value,
            email: emailEl.value,
            mobile: mobileEl.value,
            password: passEl.value
        };

        console.log(`user = `, data);

        // to check weather email and mobile already stored in an array or not
        let exEmail = usersData.find(item => item.email === emailEl.value)
        let exMobile = usersData.find(item => item.mobile === mobileEl.value)

        if (exEmail) {
            alert(`${emailEl.value} already exists`)
        } else if (exMobile) {
            alert(`${mobileEl.value} already exists`)
        } else {
            usersData.push(data)

            // store multiple data
            localStorage.setItem("users", JSON.stringify(usersData))

            alert("User data created successfully")

            window.location.href = "http://127.0.0.1:5500/15.CRUD/index.html"
        }

    } catch (err) {
        console.log(err.message)
    }
});