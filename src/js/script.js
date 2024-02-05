'use strict'

const reduce = function (arr, callback, startValue) {
  let acc = startValue !== undefined ? startValue : arr[0]
  const startIndex = startValue !== undefined ? 0 : 1

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr)
  }

  return acc
}

const data = [
  { a: 'calm', b: 'turtle', c: ['green', 'red', 'brown'] },
  { a: 'happy', b: 'parrot', c: ['green', 'yellow', 'blue', 'red'] },
  { a: 'mysterious', b: 'bat', c: ['black', 'purple', 'white'] }
]

const uniqueColors = reduce(
  data,
  (total, amount) => {
    amount.c.forEach(color => {
      if (total.indexOf(color) === -1) {
        total.push(color)
      }
    })
    return total
  },
  []
)

console.log(uniqueColors)
