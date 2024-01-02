'use strict';

const operation = prompt('Введите вид математической операции, которую хотите выполнить (add, sub, mult, div)');
let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if (operation === 'add') {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (operation === 'sub') {
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (operation === 'mult') {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (operation === 'div') {
    if (secondNumber !== 0) {
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    } else {
        alert('Делить на ноль нельзя');
    }
} else {
    alert('Данная операция не поддерживается');
}