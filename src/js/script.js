'use strict';

//Task 1

const userFirstName = prompt('Введите своё имя');
const userLastName = prompt('Введите свою фамилию');
const userPatronymic = prompt('Введите своё отчество');

const userFullName = userLastName + ' ' + userFirstName + ' ' + userPatronymic;

console.log(userFullName);

//Task 2

const myNumber = 12345;
const myNumberStr = myNumber.toString();

const myNumberDigits = `${myNumberStr[0]} ${myNumberStr[1]} ${myNumberStr[2]} ${myNumberStr[3]} ${myNumberStr[4]}`;

console.log(myNumberDigits);
