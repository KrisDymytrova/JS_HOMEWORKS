'use strict';

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

alert(
    `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n` +
    `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n` +
    `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n` +
    `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
);