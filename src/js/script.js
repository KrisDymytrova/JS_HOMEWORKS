'use strict';

let sumOfNum = 0;

outerLoop: for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue outerLoop;
    }
    sumOfNum += i;
}

console.log(sumOfNum);

