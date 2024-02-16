'use strict'
const myBind = function (func, context, ...args) {
  return function (...newArgs) {
    return func.apply(context, [...args, ...newArgs])
  }
}

const greeting = function (greeting, punctuation) {
  return `${greeting} ${this.firstName} ${this.lastName} ${punctuation}`
}

const person = {
  firstName: 'Kristina',
  lastName: 'Dymytrova'
}

const krisGreeting = myBind(greeting, person)

console.log(krisGreeting('Hi', '!!!'))
