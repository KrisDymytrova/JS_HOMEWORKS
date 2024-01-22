'use strict';

const usedNumbersArr = [];

const getRandomNum = function (min, max) {
    const randomNumResult = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!usedNumbersArr.includes(randomNumResult)) {
        usedNumbersArr.push(randomNumResult);
        return randomNumResult;
    }
    return getRandomNum(min, max)
}

for (let i = 0; i < 100; i += 1) {
    console.log(getRandomNum(1, 100))
}