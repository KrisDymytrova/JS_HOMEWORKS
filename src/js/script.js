'use strict';

const padString = function (str, length, symbol = '*', rightSide = true) {
    if(typeof str !== 'string') throw new Error('Неправильний тип str або він відсутній');
    if(typeof length !== 'number' || isNaN(length)) throw new Error('Неправильний тип length або він відсутній');

    if(str.length === length) return str;
    if(str.length > length) return str.substring(0, length);

    if(typeof symbol !== 'string' || symbol.length !==1 ) throw new Error('Symbol має бути string довжиною в 1 символ');
    if(typeof rightSide !== 'boolean') throw new Error('Неправильний тип rightSide або він відсутній');

    const symbols = symbol.repeat(length - str.length);
    return rightSide ? str + symbols : symbols + str;
}

console.log(padString('привіт', 8));                                // 'привіт**'
console.log(padString('привіт', 6, '*', false));   // 'привіт'
console.log(padString('привіт', 2));                               // 'пр'
console.log(padString('привіт', 10, '$', false)); // '$$$$привіт'