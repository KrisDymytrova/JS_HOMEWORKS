'use strict'

// indexOf
const indexOf = function (arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }

  return -1
}

console.log(indexOf(['lion', 'elephant', 'zebra', 'giraffe', 'monkey'], 'monkey'))

// lastIndexOf
const lastIndexOf = function (arr, item, from = arr.length - 1) {
  for (let i = from; i >= 0; i--) {
    if (arr[i] === item) {
      return i
    }
  }

  return -1
}

console.log(lastIndexOf(['lion', 'elephant', 'zebra', 'giraffe', 'monkey', 'lion'], 'lion'))

// find
const find = function (arr, searchItem) {
  const isItem = item => item === searchItem

  for (const item of arr) {
    if (isItem(item)) {
      return item
    }
  }

  return undefined
}

console.log(find(['lion', 'elephant', 'zebra', 'giraffe', 'monkey', 'lion'], 'zebra'))

// findIndex
const findIndex = function (arr, searchItem) {
  const isItem = item => item === searchItem

  for (let i = 0; i < arr.length; i++) {
    if (isItem(arr[i])) {
      return i
    }
  }

  return -1
}

console.log(findIndex(['lion', 'elephant', 'zebra', 'giraffe', 'monkey', 'lion'], 'giraffe'))

// includes
const includes = function (arr, searchItem) {
  for (const item of arr) {
    if (item === searchItem) {
      return true
    }
  }

  return false
}

console.log(includes(['lion', 'elephant', 'zebra', 'giraffe', 'monkey', 'lion'], 'cat'))

// every
const every = function (arr, callback) {
  for (const item of arr) {
    if (!callback(item)) {
      return false
    }
  }

  return true
}
const isNumber = (item) => typeof item === 'number'

console.log(every([1, 10, 22, 68, 3, 99], isNumber))
console.log(every(['apple', 'banana', 'cherry'], isNumber))

// some
const some = function (arr, callback) {
  for (const item of arr) {
    if (callback(item)) {
      return true
    }
  }

  return false
}

const hasNumber = (item) => typeof item === 'number'

console.log(some([1, 'apple', 'banana'], hasNumber))
console.log(some(['apple', 'banana', 'cherry'], hasNumber))
