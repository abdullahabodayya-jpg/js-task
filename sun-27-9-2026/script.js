/* 
output prediction 
    undefined 
    20
    ReferenceError error becuase x is not defined 

how hoisting works with var:

    js prepare the scope before execution so the variable 
    will declared and stored before js stars execution so
    when the execution start js see an unassigned variabel
    without value and giv undefined.

the difference between function scope and block scope:
    function scope :    
        means a variable is accessible anywhere inside the function where it is declared
    
    block scope :
        variable is accessible only within the specific curly braces {} like (for, if , etc...)
*/

// console.log(oldName);
// var oldName = "Jone";
// function oldTest() {
// var x = 10;
// if (true) {
// var y = 20;
// }
// console.log(y);
// }
// test();
// console.log(x);


// console.log(newName);
// let newName = "Jone";
// function newTest() {
// let x = 10;
// if (true) {
// let y = 20;
// console.log(y)
// }
// // console.log(y); // none accessable why??! : its outside the block 
// }
// test();
// console.log(x);



// Exercise 2

function person(name, age){
    this.name = name;
    this.age = age;
}

person.prototype.greet = function () {
    console.log(`welcome back ${this.name}`);
};

function employee(name, age, employeeId, position) {
    person.call(this, name, age);

    this.employeeId =employeeId;
    this.position = position;
}


employee.prototype = Object.create(person.prototype);

employee.prototype.constructor = employee;

employee.prototype.greet = function () {
    console.log(
        `welcome back ${this.position} ${this.name} your ID ${this.employeeId}`
    );
};


let employee1 = new employee(
    "Ahmad",
    25,
    "EMP001",
    "Frontend Developer"
);

let employee2 = new employee(
    "Sara",
    28,
    "EMP002",
    "Backend Developer"
);

let employee3 = new employee (
    "lujin",
    27,
    "EMP003",
    "UI/UX Designer"
)



employee1.greet()
employee2.greet()
employee3.greet()


// Exercise 3

const students = [
  "Alice Smith", "Bob Jones", "Charlie Brown", "Diana Prince", "Ethan Hunt",
  "Fiona Gallagher", "George Clark", "Hannah Abbott", "Ian Malcolm", "Julia Roberts",
  "Kevin Bacon", "Luna Lovegood", "Michael Scott", "Nora Fries", "Oscar Martinez",
  "Pam Beesly", "Quinn Fabray", "Rachel Green", "Sam Winchester", "Tina Belcher",
  "Usopp Monkey", "Victor Vance", "Wanda Maximoff", "Xander Harris", "Yara Greyjoy",
  "Zack Martin", "Abigail Adams", "Benjamin Franklin", "Catherine Howard", "Daniel Boone",
  "Eleanor Roosevelt", "Frederick Douglass", "Grace Hopper", "Henry Ford", "Isabella Ross",
  "Jack Sparrow", "Katherine Johnson", "Leonardo da Vinci", "Marie Curie", "Napoleon Bonaparte",
  "Rosa Parks", "Steve Jobs", "Thomas Edison", "Vincent van Gogh", "William Shakespeare",
  "Amelia Earhart", "Albert Einstein", "Isaac Newton", "Charles Darwin", "Nikola Tesla"
];

const classNum = [1, 2, 3, 4];

const school = students.concat(classNum);

console.log(school);

console.log(students.sort())
console.log(students.reverse());
console.log(students.includes("Leonardo da Vinci"));

students.forEach((items, index) => {console.log(`Index: ${index}, Value: ${items}`);
})


// Exercise 4


const objStudents = [
    { id: 1, name: "Alice Smith", grade: 85 },
    { id: 2, name: "Bob Jones", grade: 72 },
    { id: 3, name: "Charlie Brown", grade: 91 },
    { id: 4, name: "Diana Prince", grade: 88 },
    { id: 5, name: "Ethan Hunt", grade: 76 },
    { id: 6, name: "Fiona Gallagher", grade: 95 },
    { id: 7, name: "George Clark", grade: 68 },
    { id: 8, name: "Hannah Abbott", grade: 82 },
    { id: 9, name: "Ian Malcolm", grade: 79 },
    { id: 10, name: "Julia Roberts", grade: 93 },

    { id: 11, name: "Kevin Bacon", grade: 74 },
    { id: 12, name: "Luna Lovegood", grade: 89 },
    { id: 13, name: "Michael Scott", grade: 65 },
    { id: 14, name: "Nora Fries", grade: 87 },
    { id: 15, name: "Oscar Martinez", grade: 81 },
    { id: 16, name: "Pam Beesly", grade: 92 },
    { id: 17, name: "Quinn Fabray", grade: 77 },
    { id: 18, name: "Rachel Green", grade: 90 },
    { id: 19, name: "Sam Winchester", grade: 84 },
    { id: 20, name: "Tina Belcher", grade: 73 },

    { id: 21, name: "Usopp Monkey", grade: 69 },
    { id: 22, name: "Victor Vance", grade: 86 },
    { id: 23, name: "Wanda Maximoff", grade: 96 },
    { id: 24, name: "Xander Harris", grade: 71 },
    { id: 25, name: "Yara Greyjoy", grade: 80 },
    { id: 26, name: "Zack Martin", grade: 78 },
    { id: 27, name: "Abigail Adams", grade: 94 },
    { id: 28, name: "Benjamin Franklin", grade: 67 },
    { id: 29, name: "Catherine Howard", grade: 83 },
    { id: 30, name: "Daniel Boone", grade: 75 },

    { id: 31, name: "Eleanor Roosevelt", grade: 88 },
    { id: 32, name: "Frederick Douglass", grade: 91 },
    { id: 33, name: "Grace Hopper", grade: 97 },
    { id: 34, name: "Henry Ford", grade: 70 },
    { id: 35, name: "Isabella Ross", grade: 85 },
    { id: 36, name: "Jack Sparrow", grade: 79 },
    { id: 37, name: "Katherine Johnson", grade: 98 },
    { id: 38, name: "Leonardo da Vinci", grade: 93 },
    { id: 39, name: "Marie Curie", grade: 96 },
    { id: 40, name: "Napoleon Bonaparte", grade: 64 },

    { id: 41, name: "Rosa Parks", grade: 89 },
    { id: 42, name: "Steve Jobs", grade: 82 },
    { id: 43, name: "Thomas Edison", grade: 76 },
    { id: 44, name: "Vincent van Gogh", grade: 87 },
    { id: 45, name: "William Shakespeare", grade: 92 },
    { id: 46, name: "Amelia Earhart", grade: 90 },
    { id: 47, name: "Albert Einstein", grade: 99 },
    { id: 48, name: "Isaac Newton", grade: 95 },
    { id: 49, name: "Charles Darwin", grade: 86 },
    { id: 50, name: "Nikola Tesla", grade: 94 }
];


objStudents.splice(50, 0, {id: 51, name: "John Doe", grade: 66});

objStudents.splice(10,1);

objStudents.splice(15, 1, {id: 52, name: "Saad Almjarrad", grade: 78})

const selected = objStudents.slice(10,16);

console.log("Selected Students:", selected);

objStudents.sort(function (a, b) {
    return b.grade - a.grade;
});
console.log("Final Student List:");

objStudents.forEach(function (student, index){
    console.log(`${index + 1}. ID: ${student.id} || Name: ${student.name} || Grades: ${student.grade}`);
    
});



// Exercise 5 

const product = {
    id: 101,
    name: "Laptop",
    price: 899.99,
    category: "Electronics",
    available: true
}

const jsonProduct = JSON.stringify(product);

console.log("Original Object:");
console.log(product);

console.log("JSON String:" + jsonProduct);

const parseProduct = JSON.parse(jsonProduct);


console.log("Converted Object:");
console.log(parseProduct);

const invalidJSON = '{"id":101,"name":"Laptop",}';

try {
    const result = JSON.parse(invalidJSON);
    console.log(result);
    
}catch(error){
        console.log("Invalid JSON!");
        console.log(error.message);
        
}   



const inventory1 = [
    { id: 1, name: "Laptop", price: 900, category: "Electronics", quantity: 5 },
    { id: 2, name: "Mouse", price: 25, category: "Accessories", quantity: 20 },
    { id: 3, name: "Keyboard", price: 60, category: "Accessories", quantity: 15 },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", quantity: 8 },
    { id: 5, name: "Headphones", price: 120, category: "Audio", quantity: 10 },
    { id: 6, name: "Webcam", price: 80, category: "Electronics", quantity: 12 },
    { id: 7, name: "Microphone", price: 150, category: "Audio", quantity: 7 },
    { id: 8, name: "USB Cable", price: 15, category: "Accessories", quantity: 30 },
    { id: 9, name: "Tablet", price: 500, category: "Electronics", quantity: 6 },
    { id: 10, name: "Speaker", price: 100, category: "Audio", quantity: 9 }
];

const inventory2 = [
    { id: 11, name: "Smartphone", price: 700, category: "Electronics", quantity: 10 },
    { id: 12, name: "Smartwatch", price: 250, category: "Wearables", quantity: 5 },
    { id: 13, name: "Charger", price: 35, category: "Accessories", quantity: 25 }
];

const inventory = inventory1.concat(inventory2);

console.log(inventory);

const availableCategories = [
    "Electronics",
    "Accessories",
    "Audio",
    "Wearables"
];
console.log(availableCategories.includes("Electronics"))



const discontinuedIndex = inventory.findIndex(function(product){
    return product.id === 10;
})

inventory.splice(discontinuedIndex, 1);

const firstFiveProducts = inventory.slice(0,5);
console.table(firstFiveProducts)

inventory.sort(function (a, b) {
    return a.price - b.price;
});

console.log(inventory);


// Exercise 7

const square = (number) => number * number;
console.log("Square:", square(5));

const isEven = (number) => number % 2 === 0;
console.log("Is 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));

const products = [
    { name: "Laptop", price: 900 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 60 },
    { name: "Monitor", price: 300 }
];

const getTotalPrice  = (products) => products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", getTotalPrice(products));

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(number => number * number);

console.log("Squares:", squares);


const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log("Total:", total);

// Exercise 8
const user = {
    name: "Ahmad",
    email: "ahmad@example.com",
    age: 25,
    address: "Amman, Jordan"
};



const {
    name: userName,
    email,
    age,
    address
} = user;

console.log("User Name:", userName);
console.log("Email:", email);
console.log("Age:", age);
console.log("Address:", address);



const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Laravel"
];



const [firstSkill, secondSkill, thirdSkill] = skills;

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Third Skill:", thirdSkill);



function createUser(name, email, age = 18) {
    return {
        name: name,
        email: email,
        age: age
    };
}




const user1 = createUser(
    "Ahmad",
    "ahmad@example.com",
    25
);

console.log("User 1:");
console.log(user1);




const user2 = createUser(
    "Sara",
    "sara@example.com"
);

console.log("User 2:");
console.log(user2);



// Exercise 9


const enrolledStudents1 = [
    { id: 101, name: "Ahmad" },
    { id: 102, name: "Sara" },
    { id: 103, name: "Omar" }
];

const enrolledStudents2 = [
    { id: 103, name: "Omar" },
    { id: 104, name: "Lujin" },
    { id: 105, name: "Yazan" }
];




const allStudents = [
    ...enrolledStudents1,
    ...enrolledStudents2
];

console.log("All Enrolled Students:");
console.table(allStudents);



function calculateAverage(...grades) {
    const total = grades.reduce(function (sum, grade) {
        return sum + grade;
    }, 0);

    return total / grades.length;
}

console.log("Average:", calculateAverage(80, 90, 70, 100));




const studentIds = allStudents.map(function (student) {
    return student.id;
});

const uniqueIds = [...new Set(studentIds)];

console.log("Unique Student IDs:");
console.log(uniqueIds);




const studentGrades = new Map();




studentGrades.set(101, 85);
studentGrades.set(102, 92);
studentGrades.set(103, 78);
studentGrades.set(104, 88);
studentGrades.set(105, 95);

console.log("Student Grades Map:");
console.log(studentGrades);




studentGrades.set(103, 90);

console.log("Updated Student 103:");
console.log(studentGrades.get(103));




const studentGrade = studentGrades.get(102);

console.log("Grade of Student 102:", studentGrade);




console.log(
    "Does Student 104 exist?",
    studentGrades.has(104)
);




studentGrades.delete(105);

console.log("After deleting Student 105:");
console.log(studentGrades);




const finalStudentData = [...studentGrades];

console.log("Final Student Data:");
console.table(finalStudentData);




