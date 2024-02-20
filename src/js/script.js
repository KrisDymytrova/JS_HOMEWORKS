'use strict'

const parseJSON = function (str) {
  try {
    return JSON.parse(str)
  } catch (err) {
    throw new Error('Invalid JSON string')
  }
}

console.log(parseJSON('{"name": "John", "age": 30}'))
console.log(parseJSON('{"name": "John", "age":'))
