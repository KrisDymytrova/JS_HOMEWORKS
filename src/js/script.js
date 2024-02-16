'use strict'

const myApply = function (func, argsArray) {
  if (typeof func !== 'function') {
    throw new TypeError('Перший аргумент має бути викликаємою функцією')
  }

  if (!Array.isArray(argsArray)) {
    throw new TypeError('Другий аргумент має бути масивом')
  }

  return func(...argsArray)
}

const sum = function (a, b) {
  return a + b
}

console.log(myApply(sum, [7, 15]))
