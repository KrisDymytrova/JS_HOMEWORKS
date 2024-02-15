'use strict'
const flatFunc = function (arr) {
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided')
  }

  const flatArr = []

  const flattenArr = function (arrToFlatten) {
    arrToFlatten.forEach(el => {
      Array.isArray(el) ? flattenArr(el) : flatArr.push(el)
    })
  }

  flattenArr(arr)

  return flatArr
}

// Приклад використання

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13]
]

console.log(flatFunc(complexArray))
