'use strict';

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');


const sum = parseInt(firstNumber) + parseInt(secondNumber);
console.log('Результат: ' + firstNumber + '+' + secondNumber + ' = ' + sum);

const subtraction = parseInt(firstNumber) - parseInt(secondNumber);
console.log('Результат: ' + firstNumber + '-' + secondNumber + ' = ' + subtraction);

const multiplication = parseInt(firstNumber) * parseInt(secondNumber);
console.log('Результат: ' + firstNumber + '*' + secondNumber + ' = ' + multiplication);

const division = parseInt(firstNumber) / parseInt(secondNumber);
console.log('Результат: ' + firstNumber + '/' + secondNumber + ' = ' + division);

