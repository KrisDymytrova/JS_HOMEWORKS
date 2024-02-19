'use strict'

// Task 1

const products = {
  productOne: {
    name: 'potato',
    price: 20
  },
  productTwo: {
    name: 'tomato',
    price: 40
  },
  productThree: {
    name: 'onion',
    price: 60
  }
}

const reducedPrice = object => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    acc[key] = { ...value, price: value.price * 0.9 }
    return acc
  }, {})
}

console.log(reducedPrice(products))

// Task 2

const students = [
  { name: 'Андрій', grade: 75 },
  { name: 'Володимир', grade: 100 },
  { name: 'Семен', grade: 88 },
  { name: 'Крістіна', grade: 91 }
]

const bestStudents = students.filter(student => student.grade > 90)

console.log(bestStudents)
