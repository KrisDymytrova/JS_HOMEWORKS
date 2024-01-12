'use strict';

function padString(str, length, symbol = '', symbolSide = true) {
    if (typeof str !== 'string') {
        return 'Помилка: неправильний тип аргументу str або він відсутній';
    } else if (typeof length !== 'number') {
        return 'Помилка: неправильний тип аргументу length або він відсутній';
    } else if (length < 0) {
        return 'Помилка: значення аргументу length не може бути від\'ємним';
    } else if (typeof symbol !== 'string') {
        return 'Помилка: неправильний тип аргументу symbol або він відсутній';
    } else if (symbol.length > 1) {
        return 'Помилка: значення аргументу symbol не може бути більше одного символу';
    } else if (typeof symbolSide !== 'boolean') {
        return 'Помилка: неправильний тип аргументу symbolSide або він відсутній';
    }

    if (length < str.length) {
        return str.substring(0, length);
    } else if (length > str.length) {
        const newSymbol = '*';
        const strokeLength = length - str.length - symbol.length;
        const addSymbol = strokeLength > 0 ? newSymbol.repeat(Number(strokeLength)) : '';

        return symbolSide ? str + symbol + addSymbol : addSymbol + symbol + str;
    } else {
        return symbolSide ? str + symbol : symbol + str;
    }
}

console.log(padString('привіт', 8));                               // 'привіт**'
console.log(padString('привіт', 6, '*', false)); // '*привіт'
console.log(padString('привіт', 2));                               // 'пр'
console.log(padString('привіт', 10, '$', false)); // '***$привіт'
console.log(padString('привіт', 7, '?'));                    // 'привіт?'
