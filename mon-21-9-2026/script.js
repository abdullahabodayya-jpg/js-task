'use strict'
// function name(x) {
//     var z=3;
//     console.log(z);
// }


// let y = 10
// let z=5
// console.log("y =",z);
// console.log("z =",z);



// let name = "ahmad ";
// let number = 1;
// let boolean = true;
// let double = 2.9;
// let null_val = null;
// let unde_val = undefined
// let person = {
//     name:"rami",
//     age:20
// }
// let arr_val =[1,2,3,4,5,6]
// console.log("data type is", typeof(name));
// console.log("data type is", typeof(number));
// console.log("data type is", typeof(boolean));
// console.log("data type is", typeof(double));
// console.log("data type is", typeof(person));
// console.log("data type is", typeof(arr_val));


let a = 10;
let b = 4;
// arethmtic operations

let sum = a+b;
let subs = a-b;
let multi = a*b;
let devide = a/b;
let module = a%b;
console.log("sum = " , sum);

console.log("subetraction =" , subs);

console.log("mulriply =" , multi);

console.log("devition =" , devide);

console.log("module =" , module);


// logical operatin


// if statemenet

let c= 2;
let d =10;

let more = c > d;
console.log(more);

let less = c < d;
console.log(less);


let speed = 75;

if (speed > 60) {
  console.log("You are speeding!"); 
}



let action = "processOrder";
switch (action) {
  case "login":
    console.log("User is logging in");
    break;
  case "logout":
    console.log("User is logging out");
    break;
  case "processOrder":
    console.log("Processing order in Riyadh inventory");
    break;
  default:
    console.log("Unknown action");
}

let favColor = prompt("What is your favorite color?", "Blue");

if (favColor !== null) {
  console.log("Your favorite color is " + favColor);
} else {
  console.log("User cancelled the prompt.");
}
