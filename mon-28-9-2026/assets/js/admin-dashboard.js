// ======================================================
// GET CURRENT USER
// ======================================================

const currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);

// ======================================================
// PROTECT ADMIN DASHBOARD
// ======================================================

if (!currentUser) {

window.location.href = "index.html";

}

if (
currentUser &&
currentUser.role !== "admin"
) {

alert("Access denied. Admin only.");

window.location.href =
    "dashboard.html";

}

// ======================================================
// DISPLAY ADMIN NAME
// ======================================================

if (currentUser) {

document.querySelector("#adminName").textContent =
    currentUser.name;

}

// ======================================================
// GET USERS
// ======================================================

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

// ======================================================
// ELEMENTS
// ======================================================

const addUserForm =
document.querySelector("#addUserForm");

const usersTable =
document.querySelector("#usersTable");

const logoutBtn =
document.querySelector("#logoutBtn");

// ======================================================
// DISPLAY USERS
// ======================================================

function displayUsers() {

usersTable.innerHTML = "";


users.forEach(function (user, index) {

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>
            ${index + 1}
        </td>

        <td>
            ${user.name}
        </td>

        <td>
            ${user.email}
        </td>

        <td>

            <span
                class="role
                ${
                    user.role === "admin"
                        ? "role-admin"
                        : "role-user"
                }"
            >

                ${user.role}

            </span>

        </td>

        <td>

            <button
                class="delete-btn"
                onclick="deleteUser(${index})"
            >
                Delete
            </button>

        </td>

    `;


    usersTable.appendChild(row);

});

}

// ======================================================
// ADD USER
// ======================================================

addUserForm.addEventListener(
"submit",
function (event) {

    event.preventDefault();


    // Get values

    const name =
        document.querySelector("#userName")
            .value
            .trim();

    const email =
        document.querySelector("#userEmail")
            .value
            .trim();

    const password =
        document.querySelector("#userPassword")
            .value;

    const role =
        document.querySelector("#userRole")
            .value;


    // ------------------------------------------
    // Validation
    // ------------------------------------------

    if (
        name === "" ||
        email === "" ||
        password === ""
    ) {

        alert("All fields are required");

        return;

    }


    if (password.length < 6) {

        alert(
            "Password must be at least 6 characters"
        );

        return;

    }


    // ------------------------------------------
    // Check email
    // ------------------------------------------

    const emailExists =
        users.some(
            user =>
                user.email.toLowerCase() ===
                email.toLowerCase()
        );


    if (emailExists) {

        alert("Email already exists");

        return;

    }


    // ------------------------------------------
    // Create user
    // ------------------------------------------

    const newUser = {

        name: name,

        email: email,

        password: password,

        role: role

    };


    // ------------------------------------------
    // Add user
    // ------------------------------------------

    users.push(newUser);


    // ------------------------------------------
    // Save users
    // ------------------------------------------

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    // ------------------------------------------
    // Success
    // ------------------------------------------

    alert("User added successfully!");


    // Reset form

    addUserForm.reset();


    // Refresh table

    displayUsers();

}

);

// ======================================================
// DELETE USER
// ======================================================

function deleteUser(index) {

const user =
    users[index];


// Prevent deleting yourself

if (
    currentUser.email === user.email
) {

    alert(
        "You cannot delete your own account."
    );

    return;

}


const confirmDelete =
    confirm(
        `Delete ${user.name}?`
    );


if (!confirmDelete) {

    return;

}


// Remove user

users.splice(index, 1);


// Save

localStorage.setItem(
    "users",
    JSON.stringify(users)
);


// Refresh

displayUsers();

}

// ======================================================
// LOGOUT
// ======================================================

logoutBtn.addEventListener(
"click",
function () {

    localStorage.removeItem(
        "currentUser"
    );

    window.location.href =
        "index.html";

}

);

// ======================================================
// INITIAL DISPLAY
// ======================================================

displayUsers();
