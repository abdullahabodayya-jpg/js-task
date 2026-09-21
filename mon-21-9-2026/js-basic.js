'use strict '
// cash flow ratio

// variables

let cash = 1000; 
let current_liabilities = 500;

// cash flow output 

let  cash_flow = cash/current_liabilities;
console.log("flow =",cash_flow);

// Net income 

//  variables 

let revenues = 1000;
let expenses = 500;

// Net income output

let Net_income = revenues-expenses;
console.log("Net income",Net_income);


let liabilities = 1000;
let equity = 500;

let assets = liabilities+equity;

console.log("Total assets",assets);

let profit = 1000;
let sales = 500;

let Net_income_with_profit = profit*sales;
console.log(Net_income_with_profit);


let num1 = 7;
let num2 = 9;
let num3 = 2;

let avarage = ((num1 + num2 + num3)/3)
console.log(avarage);



let price = 150;
let discount_per = 0.3;

let discount_eq = price*discount_per;

let discount = price - discount_eq;
console.log(discount);


let age = 20;

if (age > 18 && age <30 ) {
    console.log(true);
    
}else {
    console.log(false);

}


let number1 = 2;
let number2 = 3;

let expo = Math.pow(number1,number2)

console.log(expo);


let rem_num1 = 10;
let rem_num2 = 4;

let reminder = rem_num1%rem_num2

console.log(reminder);



// strings 

let str = "Welcome to Orange"

console.log(str.toUpperCase());
console.log(str.slice(8,10).toUpperCase());
console.log(str.replace("Welcome to","Hello from"));
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.replace("Orange", "\"Orange\""));
console.log(str + " " + "Jordan");

let rep_ = "cactus";

let f_letter = rep_[0];
console.log(rep_.replace(f_letter,"*"));

let arr = ["Coding", "Academy", "By", "Orange"];

console.log(arr);

let arr2 = [...arr];
arr2.push("Jordan");

console.log(arr2);

let arr3 = [...arr];
arr3.splice(2,2);

console.log(arr3);

let arr4 = [...arr];
arr4.unshift("Wlcome","to");

console.log(arr4);

let arr5 = [...arr];
arr5.shift();

console.log(arr5);

let arr6 = [...arr];
arr6.join(" ")

console.log(arr6);

let arr7 = [...arr];

console.log(arr7);

let arr8 = [arr[0],arr[3]];

console.log(arr8);

let fruit = ["banana", "apple", "orange", "watermelon"]; 
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

fruit.shift();

let index = fruit.indexOf("orange");
console.log(index);

fruit.push(index)

let len = vegetables.length;
console.log(len);

vegetables.push(len);

let food  = fruit.concat(vegetables);

food.splice(4,2);

let rev = food.reverse();

let str_array = String(rev);


let year_of_birth = 2000;
let current_year = new Date().getFullYear();

let if_age = current_year - year_of_birth;

if (if_age < 18) {
    console.log("You may join the kids' program");
    
} else if (age >= 18 && age <= 30){
    console.log("You are eligible. Start your application");
    
} else if(if_age < 30) {
    console.log("You are not eligible. You may join other programs");
    
} else {
    console.log("You may join the seniors’ program");
    
}


function upper_to_lower (str) {
    let result = "";
    for(let i = 0; i<str.length;i++ ) {

        if (str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase();
        }
    }

    return result;
}

console.log(upper_to_lower("OrAnGe"));


function camelCase(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}

console.log(camelCase("coding academy by orange"));



function odd_even(number) {

    if (number%2==0){
        return "Even";
    } else {
        return "Odd";
    }
    
}

console.log(odd_even(3));

function triangleType(a, b, c) {

    if (a === b && b === c) {
        return "Equilateral";

    } else if (a === b || a === c || b === c) {
        return "Isosceles";

    } else {
        return "Scalene";
    }
}

console.log(triangleType(5, 5, 5));

function isNumber(value) {
    return typeof value === "number";
}

console.log(isNumber("3"));

function largest(num1, num2) {
    if (num1>num2) {
        return num1;

    } else {
        return num2;
    }
    
}

console.log(largest(10,2));

function isInRange(number, min, max) {
    return number >= min && number <= max;
}


console.log(isInRange(5, 1, 10));


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));


for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let i = 1;

while (i <= 50){
    if (i%2==0){
        console.log(i);
    }
    i++;
}

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function fizzBuzz(number) {

    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";

    } else if (number % 3 === 0) {
        return "Fizz";

    } else if (number % 5 === 0) {
        return "Buzz";

    } else {
        return number;
    }
}

function fizzBuzz(number) {

    if (number > 100) {
        return;
    }

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");

    } else if (number % 3 === 0) {
        console.log("Fizz");

    } else if (number % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(number);
    }

    fizzBuzz(number + 1);
}

fizzBuzz(1);


function getBanknotes(amount, banknotes) {
    let result = [];

    for (let i = 0; i < banknotes.length; i++) {

        while (amount >= banknotes[i]) {
            result.push(banknotes[i]);
            amount -= banknotes[i];
        }
    }

    return result;
}

console.log(getBanknotes(57, [25, 10, 5, 1]));


function countCharacter(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

let str_loop = "CodingAcademy";
let arr_loop = [7, 500, "KH404", "black", 36];

for (let i = 0; i < arr_loop.length; i++) {
    console.log(arr_loop[i]);
}


for (let i = str_loop.length - 1; i >= 0; i--) {
    console.log(str_loop[i]);
}

let loop_numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let i = 0; i < loop_numbers.length; i++) {

    if (loop_numbers[i] % 2 === 0) {
        evens.push(loop_numbers[i]);
    } else {
        odds.push(loop_numbers[i]);
    }
}

console.log("Evens:", evens);
console.log("Odds:", odds);

let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];

let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];

let vegetablesoptions = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];

let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];

let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function createMeals(numberOfMeals) {

    let meals = [];

    while (meals.length < numberOfMeals) {

        let meal = [
            proteins[Math.floor(Math.random() * proteins.length)],
            grains[Math.floor(Math.random() * grains.length)],
            vegetablesoptions[Math.floor(Math.random() * vegetablesoptions.length)],
            beverages[Math.floor(Math.random() * beverages.length)],
            desserts[Math.floor(Math.random() * desserts.length)]
        ];

        let mealString = meal.join("-");

        if (!meals.includes(mealString)) {
            meals.push(mealString);
        }
    }

    return meals;
}

console.log(createMeals(5));

function getProperties(obj) {
    return Object.keys(obj);

}

function countProperties(obj) {
    return Object.keys(obj).length;
}
function upperCaseValues(obj) {
    let result = {};

    for (let key in obj) {
        result[key] = obj[key].toUpperCase();
    }

    return result;
}
function sortProperties(obj) {
    return Object.keys(obj).sort();
}


let student = {
    name: "Abdullah",
    age: "20",
    city: "Amman"
};

console.log(getProperties(student));
console.log(countProperties(student));
console.log(upperCaseValues(student));
console.log(sortProperties(student));


function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let person = {
    name: "Abdullah",
    age: 20
};

let address = {
    city: "Amman",
    country: "Jordan"
};

console.log(combineObjects(person, address));



function removeNullValues(obj) {
    let result = {};

    for (let key in obj) {
        if (obj[key] !== null) {
            result[key] = obj[key];
        }
    }

    return result;
}

let developer = {
    name: "Abdullah",
    age: null,
    city: "Amman",
    phone: null,
    course: "JavaScript"
};

console.log(removeNullValues(student));



