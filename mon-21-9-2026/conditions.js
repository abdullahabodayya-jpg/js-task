// folder two 

let age_2 = 27;

if (age_2 > 18) {
    console.log("You are an adult");
}

let num = 4;

if (num % 2 === 0) {
    console.log("The number is even");
}

let char = "a";

if (/^[a-zA-Z]$/.test(char)) {
    console.log("It's a letter");
}


let list = [1, 2, 3];

if (Array.isArray(list)) {
    console.log("It's an array");
}

let x = 5;

if (x > 0) {
    console.log("x is a positive number");
}

let y = 5;

if (y > 0) {
    console.log("x is a positive number");
}

let password = "mypassword123";

if (password.length >= 8) {
    console.log("Your password is strong");
}

let age_2_2 = 30;

if (age_2_2  >= 18 && age_2_2  <= 65) {
    console.log("You are of working age");
}

let color = "red";

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
}

function isValidNumber(value) {

    if (!isNaN(value) && value !== "") {
        return value + " is a valid number";
    } else {
        return value + " is not a number";
    }
}

console.log(isValidNumber(11));
console.log(isValidNumber("19"));
console.log(isValidNumber("xyz"));
console.log(isValidNumber("17.5"));
console.log(isValidNumber("21F"));