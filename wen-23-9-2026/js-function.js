function findSmallest(numbers) {
    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
}

console.log(findSmallest([30, 45, 60, 7]));


function AlphabeticalOrder(str) {
    return str.split("").sort().join("");
}

console.log(AlphabeticalOrder("hello"));

function factorial_fun(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial_fun(8));

function oddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(oddOrEven(9));


function addUp(number) {
    let sum = 0;

    for (let i = number; i >= 0; i--) {
        sum += i;
    }

    return sum;
}

console.log(addUp(8));


function minMaxLengthAverage(numbers) {

    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }

        sum += numbers[i];
    }

    let length = numbers.length;
    let average = sum / length;

    return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

function countWords(str) {
    return str.split(" ").length;
}

console.log(countWords("hello from CodingAcademy!"));

function MultiplyByLength(numbers) {
    return numbers.map(function(number) {
        return number * numbers.length;
    });
}

console.log(MultiplyByLength([4, 2, 5]));

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac"));

function doubleChar(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

console.log(doubleChar("Coding"));

function findIndex(array, element) {
    return array.indexOf(element);
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));