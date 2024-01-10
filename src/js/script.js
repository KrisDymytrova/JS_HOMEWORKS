'use strict';

//Task 1

let numbers = '';

for (let i = 20; i <= 30; i+= 0.5) {
    numbers += `${i} `;
}

console.log(numbers);

//Task 2

let cost = '';

for (let i = 10; i <= 100; i+= 10) {
    cost += `${i * 27} `;
}

console.log(cost);

//Task 3

const n  = +prompt('Введіть число n');
let number = '';

for (let i = 1; i <= 100; i++) {
    if (i**2 < n) {
        number += `${i} `;
    }
}

console.log(number);

//Task 4

const b = +prompt('Введіть число b');
let isInteger = true;

for (let i= 2; i < b; i++) {
    if (b % i === 0) {
        isInteger = false;
        break;
    }
}

if (isInteger) {
    console.log('Число просте');
} else {
    console.log('Число не просте');
}

//Task 5

const a = +prompt('Введіть число a');
let isPossible = false;

for (let i= 0; i < a; i++) {
    if (3**i !== a) continue;
    isPossible = true;
    break;
}

if (isPossible) {
    console.log(`Можна одержати ${a} шляхом зведення числа 3 у деякий ступінь`);
} else {
    console.log(`Не можна одержати ${a} шляхом зведення числа 3 у деякий ступінь`);
}