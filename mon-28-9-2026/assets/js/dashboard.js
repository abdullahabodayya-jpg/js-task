
// GET CURRENT USER


const currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);


// PROTECT DASHBOARD


// User is not logged in

if (!currentUser) {


window.location.href = "index.html";


}


// PREVENT ADMIN FROM USER DASHBOARD


if (
currentUser &&
currentUser.role === "admin"
) {


window.location.href =
    "admin-dashboard.html";


}


// ELEMENTS


const headerUserName =
document.querySelector("#headerUserName");

const welcomeName =
document.querySelector("#welcomeName");

const userName =
document.querySelector("#userName");

const userEmail =
document.querySelector("#userEmail");

const userRole =
document.querySelector("#userRole");

const userRoleInfo =
document.querySelector("#userRoleInfo");

const logoutBtn =
document.querySelector("#logoutBtn");


// DISPLAY USER DATA


if (currentUser) {


// Header

headerUserName.textContent =
    currentUser.name;


// Welcome

welcomeName.textContent =
    currentUser.name;


// Name

userName.textContent =
    currentUser.name;


// Email

userEmail.textContent =
    currentUser.email;


// Role

userRole.textContent =
    currentUser.role;


userRoleInfo.textContent =
    currentUser.role;


}


// LOGOUT


logoutBtn.addEventListener(
"click",
function () {


    // Remove current logged-in user

    localStorage.removeItem(
        "currentUser"
    );


    // Redirect to Login

    window.location.href =
        "index.html";

}


);
