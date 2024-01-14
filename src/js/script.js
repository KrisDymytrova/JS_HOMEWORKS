'use strict';

function padString(str, length, symbol = '*', symbolSide = true) {
    if (typeof str !== 'string') return 'Помилка: неправильний тип аргументу str або він відсутній';
    if (typeof length !== 'number') return 'Помилка: неправильний тип аргументу length або він відсутній';
    if (length < 0) return 'Помилка: значення аргументу length не може бути від\'ємним';
    if (typeof symbol !== 'string') return 'Помилка: неправильний тип аргументу symbol або він відсутній';
    if (symbol.length > 1) return 'Помилка: значення аргументу symbol не може бути більше одного символу';
    if (typeof symbolSide !== 'boolean') return 'Помилка: неправильний тип аргументу symbolSide або він відсутній';

    switch (true) {
        case length < str.length:
            return str.substring(0, length);
        case length > str.length:
            const symbols = symbol.repeat(length - str.length);
            return symbolSide ? str + symbols : symbols + str;
        default:
            return symbolSide ? str + symbol : symbol + str;
    }
}

console.log(padString('привіт', 8));                               // 'привіт**'
console.log(padString('привіт', 6, '*', false)); // '*привіт'
console.log(padString('привіт', 2));                               // 'пр'
console.log(padString('привіт', 10, '$', false)); // '$$$$привіт'