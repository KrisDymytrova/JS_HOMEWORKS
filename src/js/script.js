'use strict';

const arr = [1, 2, 3, 4, 5];

//Сумма элементов массива

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);


//Сумма квадратов элементов с помощью оператора **

let sumSquares = 0;

for (let i = 0; i < arr.length; i++) {
    sumSquares += arr[i] ** 2;
}

console.log(sumSquares);


//Сумма квадратов элементов с помощью Math.pow()

let sumSquares2 = 0;

for (let i = 0; i < arr.length; i++) {
    sumSquares2 += Math.pow(arr[i], 2);
}

console.log(sumSquares2);
