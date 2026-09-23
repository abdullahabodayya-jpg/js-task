let numbers = [1,2,3,4,5,6];

numbers.forEach(double);

numbers.forEach(display);

function double(element, index, array) {
    array[index] = element*2;
}

function display(element) {
    console.log(element)
}

const fruits = ["cherry", "apple", "banana"];

fruits.sort();

console.log(fruits);

fruits.reverse();

console.log(fruits);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

const combine = arr1.concat(arr2);

console.log(combine);

const slice_result = numbers.slice(0,2)

console.log(slice_result);

let splice_numbers = [1, 2, 3, 4, 5];

splice_numbers.push(3)
splice_numbers.splice(5,1)
console.log(splice_numbers);

console.log(numbers.indexOf(2));


const join_result = numbers.join(",");
console.log(join_result);

const text = "1,2,3,4,5";
const str_numbers = text.split(",");

console.log(str_numbers);

console.log("the lenghth is :" + numbers.length);

for (const number of numbers) {
    console.log(number);
    
}

console.log(Array.isArray(numbers))


