'use strict';

function validationArrData(arr) {
    if (!Array.isArray(arr)) {
        return "Error: Вхідний параметр має бути масивом";
    }

    if (arr.length === 0) {
        return "Error: Масив порожній";
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return "Error: Всі елементи масиву повинні бути числами";
        }
    }

    return null;
}

function positiveArr(arr) {
    const errorData = validationArrData(arr);

    if (errorData) {
        return errorData;
    }

    const newArr = [];
    for (let a of arr) {
        if (a > 0) {
            newArr.push(a);
        }
    }

    return newArr.length > 0 ? newArr : null;
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(positiveArr(arr));