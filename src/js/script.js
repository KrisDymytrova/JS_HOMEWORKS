'use strict';

const number = +prompt('Введіть число');

if (number <= 1) {
    console.log('NaN')
} else {
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            console.log(`Найменший дільник числа ${number} - ${i}`);
            break;
        }
    }
}