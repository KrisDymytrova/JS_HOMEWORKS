'use strict';

//Task 1

const x = 10, y = 7;
const result = x > y ? 'x більше за y' : 'x не більше, ніж y';

console.log(result);

//Task 2

const number = +prompt('Введіть ціле число');
const numberLength = Math.abs(number).toString().length;

let numberDigits = '';

if (numberLength === 1) {
    numberDigits = 'однозначне';
} else if (numberLength === 2) {
    numberDigits = 'двозначне';
} else {
    numberDigits = 'трицифрове або більше';
}

const numberSign = number > 0 ? 'позитивне' : number < 0 ? 'негативне' : 'нуль';

console.log(`Число ${number} ${numberDigits} та ${numberSign}`);

//Task 3

const userNumber1 = +prompt('Введіть перше число');
const userNumber2 = +prompt('Введіть друге число');
const userNumber3 = +prompt('Введіть третє число');

if (userNumber1 >= userNumber2 && userNumber1 >= userNumber3) {
    console.log('Найбільше число: ' + userNumber1);
} else if (userNumber2 >= userNumber1 && userNumber2 >= userNumber3) {
    console.log('Найбільше число: ' + userNumber2);
} else {
    console.log('Найбільше число: ' + userNumber3);
}

//Task 4

const sideA = +prompt('Введіть довжину сторони A');
const sideB = +prompt('Введіть довжину сторони B');
const sideC = +prompt('Введіть довжину сторони C');

if (sideA + sideB <= sideC) {
    console.log('Такий трикутник не існує');
} else if (sideB + sideC <= sideA) {
    console.log('Такий трикутник не існує');
} else if (sideA + sideC <= sideB) {
    console.log('Такий трикутник не існує');
} else {
    console.log('Такий трикутник існує');
}
