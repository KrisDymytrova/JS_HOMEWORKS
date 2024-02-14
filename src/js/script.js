'use strict'

// Task 1

const getFactorial = function (n) {
  return (n === 0 || n === 1) ? 1 : n * getFactorial(n - 1)
}

console.log(getFactorial(3))

// Task 2

const pow = function (num, degree) {
  if (degree === 0) return 1
  if (degree === 1) return num
  if (degree > 1) return num * pow(num, degree - 1)
  return 1 / pow(num, -degree)
}

console.log(pow(2, 3))

// Task 3

const sum = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    console.log('Помилка: a та b мають бути позитивними цілими числами')
    return null
  }

  if (b === 0) return a

  return sum(a ^ b, (a & b) << 1)
}

console.log(sum(2, 8))
console.log(sum(1, -2))
