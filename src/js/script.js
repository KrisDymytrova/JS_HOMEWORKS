'use strict';

const a = prompt('Введіть значення a');
const b = prompt('Введіть значення b');

(Number(a) === 0) ? console.log('Вірно') : console.log('Неправильно');
(Number(a) > 0) ? console.log('Вірно') : console.log('Невірно');
(Number(a) < 0) ? console.log('Вірно') : console.log('Невірно');
(Number(a) >= 0) ? console.log('Вірно') : console.log('Неправильно');
(Number(a) <= 0) ? console.log('Вірно') : console.log('Неправильно');
(Number(a) !== 0) ? console.log('Вірно') : console.log('Невірно');
(a === 'test') ? console.log('Вірно') : console.log('Неправильно');
(a === '1') ? console.log('Вірно') : console.log('Невірно');
(Number(a) > 0 && Number(a) < 5) ? console.log('Вірно') : console.log('Невірно');
(Number(a) === 0 || Number(a) === 2) ? console.log(Number(a) + 7) : console.log(Number(a) / 10);
(Number(a) <= 1 && Number(b) >= 3) ? console.log(Number(a) + Number(b)) : console.log(Number(a) - Number(b));
((Number(a) > 2 && Number(a) < 11) || (Number(b) >= 6 && Number(b) < 14)) ? console.log('Вірно') : console.log('Невірно');

const num = +prompt('Введіть значення num');

switch (num) {
    case 1: {
        const result = 'Зима';
        console.log(result);
        break;
    }
    case 2: {
        const result = 'Весна';
        console.log(result);
        break;
    }
    case 3: {
        const result = 'Літо';
        console.log(result);
        break;
    }
    case 4: {
        const result = 'Осінь';
        console.log(result);
        break;
    }
    default:
        alert('Можна вводити лише 1, 2, 3 або 4');
        break;
}