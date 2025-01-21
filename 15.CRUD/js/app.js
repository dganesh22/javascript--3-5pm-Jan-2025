
// read the data from local storage
let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
console.log(`users = `, users)

// target the dom 
let userDataEl = document.getElementById("userData")


// delete user info
const deleteHandler = async (id) => {
    if (window.confirm(`Are you sure to delete user id = ${id} ?`)) {
        // reading index of user data
        let exUserIndex = users.findIndex((item, index) => item.id == id)
        console.log(`user index =`, exUserIndex)
        // delete user info
        users.splice(exUserIndex, 1)
        localStorage.setItem("users", JSON.stringify(users))
        alert("user data deleted successfully")
        window.location.reload()

    } else {
        alert("delete terminated")
    }
}

// method to print the data on DOM
function print() {
    users.map(function (val, index) {
        userDataEl.innerHTML += `<tr>
                                    <td> ${val.id} </td>
                                    <td> ${val.name} </td>
                                    <td> ${val.email} </td>
                                    <td> ${val.mobile} </td>
                                    <td> ${val.password} </td>
                                    <td> 
                                        <a href="update.html?id=${val.id}" class="btn warning">Edit</a>
                                        <button onclick="deleteHandler(${val.id})" class="btn danger">Delete</button>
                                    </td>
                            </tr>`
    })
}

print(users)