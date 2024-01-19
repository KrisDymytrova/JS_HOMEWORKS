'use strict';

const uniqueNumbers = new Set();

const getRandomNum = function () {
    return Math.floor(Math.random() * 100) + 1;
}

const getUniqueNum = function () {
    let randomNum;
    do {
        randomNum = getRandomNum();
    } while (uniqueNumbers.has(randomNum));

    uniqueNumbers.add(randomNum);
    return randomNum;
}