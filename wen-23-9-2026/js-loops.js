let i = 1;
while (i<=10){
    console.log("while loop " + i);
    
    i++;
}


for (let i = 1; i <= 5; i++) {
    console.log("for loop "+i);
}

for (let i = 0; i <= 10; i += 2) {
    console.log("even numbers loops "+i);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("sum = " + sum);



const numbers_loops = [1, 2, 3, 4, 5];

let largest = numbers_loops[0];

for (let i = 1; i < numbers_loops.length; i++) {
    if (numbers_loops[i] > largest) {
        largest = numbers_loops[i];
    }
}

console.log(largest);

let sum_loop = 0;

for (let i = 0; i < numbers_loops.length; i++) {
    sum_loop += numbers_loops[i];
}

let average = sum_loop / numbers_loops.length;

console.log(average);


let number_fac = 5;
let factorial =1;

for (let i = 1; i <= number_fac; i++) {
    factorial *= i;
    
}

console.log("factorial is = " + factorial);


let number_fab = 10;

let a = 0;
let b = 1;

for (let i = 0; a <= number_fab; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

let number_prem = 20;

for (let i = 2; i <= number_prem; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

const numbers_2d = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

for (let i = 0; i < numbers_2d.length; i++) {
    for (let j = 0; j < numbers_2d[i].length; j++) {
        console.log(numbers_2d[i][j]);
    }
}

for (let i = numbers_loops.length - 1; i >= 0; i--) {
    console.log(numbers_loops[i]);
}

const step = 2;

for (let i = 0; i < numbers_loops.length; i += step) {
    console.log(numbers_loops[i]);
}


const numbers_app = [1, 2, 1, 3, 2, 1];
const target = 1;

let count = 0;

for (let i = 0; i < numbers_app.length; i++) {
    if (numbers_app[i] === target) {
        count++;
    }
}

console.log(count);


const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((hero, index) => {
    return {
        hero: hero.name,
        power: hero.power,
        id: index
    };
});

console.log(newHeros);

const inputWords = ["spray","limit","elite","exuberant","destruction","present"];

function filterWords(inputWords) {
    return inputWords.filter(word => word.length > 7);
}

const result = filterWords(inputWords);

console.log(result);

const numbers_16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const sumSquaredDivisibleBy5 = numbers_16.reduce((sum, number) => {
    if (number % 5 === 0) {
        return sum + number ** 2;
    }

    return sum;
}, 0);

console.log(sumSquaredDivisibleBy5);