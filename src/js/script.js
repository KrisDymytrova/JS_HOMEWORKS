'use strict';

const number = +prompt('Введіть число:');
const exponent = +prompt('Введіть показник ступеня, до якого слід піднести число:');

function numberToExponent(number, exponent = 1) {
    if (isNaN(number) || isNaN(exponent)) {
        return 'Помилка! Ви ввели неправильні дані.';
    }

    return Math.pow(number, exponent);
}

const result = numberToExponent(number, exponent);

alert(result);