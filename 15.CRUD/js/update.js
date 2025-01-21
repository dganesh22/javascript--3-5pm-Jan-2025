// read the value from query 
let urlParams = new URLSearchParams(window.location.search)
let userId = urlParams.get('id')
console.log(`userid = `, userId)

// read the data from local storage
let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
console.log(`users = ,`, users)

// seperate single user data
let singleUser = users.find(item => item.id == userId)
console.log(`single user `, singleUser)

// dom targets of form
let userForm = document.getElementById("userForm")
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let passEl = document.getElementById("pass")

// printing values in form
nameEl.value = singleUser.name
emailEl.value = singleUser.email
mobileEl.value = singleUser.mobile
passEl.value = singleUser.pass

// update handler function
userForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let data = {
        id: userId,
        name: nameEl.value,
        email: emailEl.value,
        mobile: mobileEl.value,
        password: passEl.value
    };
    console.log(`update user data =`, data)

    // find existing array index of users 
    let exIndex = users.findIndex(item => item.id == userId)
    users.splice(exIndex, 1, data)
    localStorage.setItem("users", JSON.stringify(users))
    alert("user data updated successfully")
    window.location.href = "index.html"
})