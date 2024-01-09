'use strict';

//Task 1

let numbers = '';

for (let i = 10; i <= 20; i++) {
    numbers += (i < 20) ? `${i}, ` : i;
}

console.log(numbers);


//Task 2

for (let i = 10; i <= 20; i++) {
    const numberSquare = i * i;
    console.log(numberSquare);
}


//Task 3

for (let i = 1; i <= 10; i++) {
    const multiplication = 7 * i;
    console.log(`7 * ${i} = ${multiplication}`);
}


//Task 4

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log(sum);


//Task 5

let result = 1;

for (let i = 15; i <= 35; i++) {
    result *= i;
}

console.log(result);


//Task 6

let sumNumbers = 0;

for (let i = 1; i <= 500; i++) {
    sumNumbers += i;
}

const arithmetic = sumNumbers / 500;

console.log(arithmetic);


//Task 7

let sumOfNumbers = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOfNumbers += i;
    }
}

console.log(sumOfNumbers);


//Task 8

let sumOfNum = 0;

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        sumOfNum += i;
    }
}

console.log(sumOfNum);


//Task 9

const number = 30;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}


//Task 10

let count = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++;
    }
}

console.log(count);


//Task 11

let sumDivisor = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sumDivisor += i;
    }
}

console.log(sumDivisor);


//Task 12

for (let i = 1; i <= 10; i++) {
        for (let b = 1; b <= 10; b++) {
            console.log(`${i} * ${b} = ${i * b}`);
        }
}







