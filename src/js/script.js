'use strict'

// Task 1

const animals = ['dog', 'cat', 'rabbit', 'hamster', 'bird', 'horse']

const funcFilter = animals.filter(str => str.length > 5)

console.log(funcFilter)

// Task 2

const numbers = [2, 7, 10, 12, 15, 17]

const sumOfNum = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0)

console.log(sumOfNum)

// Task 3

const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length

console.log(average)
