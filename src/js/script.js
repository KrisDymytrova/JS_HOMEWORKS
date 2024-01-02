'use strict';

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');
let thirdNumber = prompt('Введите второе число');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
thirdNumber = parseFloat(thirdNumber);

const result = (firstNumber + secondNumber + thirdNumber) / 3;

alert(`Среднее арифметиическое этих чисел: ${result}`);