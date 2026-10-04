// LOCAL STORAGE

// Get users from Local Storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Get current logged-in user
const currentUser = JSON.parse(localStorage.getItem("currentUser"));


// DEFAULT ADMIN ACCOUNT

// Create admin account if it doesn't exist
const adminExists = users.some(
    user => user.email === "admin@gmail.com"
);

if (!adminExists) {

    const adminUser = {
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin"
    };

    users.push(adminUser);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
}


// SIGNUP ELEMENTS

const signupForm = document.querySelector("form.signup");

const signupName =
    document.querySelector("#signupName");

const signupEmail =
    document.querySelector("#signupEmail");

const signupPassword =
    document.querySelector("#signupPassword");

const signupConfirmPassword =
    document.querySelector("#signupConfirmPassword");


// EMAIL VALIDATION

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}


// SIGNUP FUNCTION

function signup() {

    const nameValue =
        signupName.value.trim();

    const emailValue =
        signupEmail.value.trim();

    const passwordValue =
        signupPassword.value;

    const confirmPasswordValue =
        signupConfirmPassword.value;



    // Empty fields


    if (
        nameValue === "" ||
        emailValue === "" ||
        passwordValue === "" ||
        confirmPasswordValue === ""
    ) {

        alert("All fields are required");

        return;
    }



    // Email validation


    if (!validateEmail(emailValue)) {

        alert("Invalid email");

        return;
    }



    // Password length


    if (passwordValue.length < 6) {

        alert(
            "Password must be at least 6 characters"
        );

        return;
    }



    // Confirm password


    if (passwordValue !== confirmPasswordValue) {

        alert("Passwords do not match");

        return;
    }



    // Check existing email


    const emailExists = users.some(
        user =>
            user.email.toLowerCase() ===
            emailValue.toLowerCase()
    );


    if (emailExists) {

        alert("Email already exists");

        return;
    }



    // Create new user


    const newUser = {

        name: nameValue,

        email: emailValue,

        password: passwordValue,

        role: "user"
    };



    // Add user


    users.push(newUser);



    // Save ALL users


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    // Success


    alert("Signup successful!");


    // Clear form

    signupForm.reset();


    // Show login

    showLogin();
}


// SIGNUP SUBMIT

signupForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        signup();

    }
);


// LOGIN ELEMENTS

const loginForm =
    document.querySelector("form.login");

const loginEmail =
    document.querySelector("#loginEmail");

const loginPassword =
    document.querySelector("#loginPassword");


// LOGIN FUNCTION

function login() {

    const emailValue =
        loginEmail.value.trim();

    const passwordValue =
        loginPassword.value;



    // Validation


    if (
        emailValue === "" ||
        passwordValue === ""
    ) {

        alert("Email and password are required");

        return;
    }



    // Find user


    const user = users.find(
        user =>
            user.email.toLowerCase() ===
                emailValue.toLowerCase() &&
            user.password === passwordValue
    );



    // User not found


    if (!user) {

        alert("Invalid email or password");

        return;
    }



    // Save current user


    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );



    // Login successful


    alert(`Welcome ${user.name}!`);



    // Redirect based on role


    if (user.role === "admin") {

        window.location.href =
            "admin-dashboard.html";

    } else {

        window.location.href =
            "dashboard.html";
    }
}


// LOGIN SUBMIT

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        login();

    }
);


// LOGIN / SIGNUP ANIMATION

const loginTitle =
    document.querySelector(
        ".title-text .title.login"
    );

const signupTitle =
    document.querySelector(
        ".title-text .title.signup"
    );

const loginButton =
    document.querySelector("label.login");

const signupButton =
    document.querySelector("label.signup");

const signupLink =
    document.querySelector(".signup-link a");


// SHOW SIGNUP

function showSignup() {

    loginForm.style.marginLeft = "-50%";

    loginTitle.style.marginLeft = "-50%";
}


// SHOW LOGIN

function showLogin() {

    loginForm.style.marginLeft = "0%";

    loginTitle.style.marginLeft = "0%";
}


// LOGIN BUTTON

loginButton.addEventListener(
    "click",
    function () {

        showLogin();

    }
);


// SIGNUP BUTTON

signupButton.addEventListener(
    "click",
    function () {

        showSignup();

    }
);


// SIGNUP LINK

signupLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        showSignup();

    }
);