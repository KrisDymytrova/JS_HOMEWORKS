'use strict'

const createUser = function (name, age) {
  const user = Object.create(userMethods)
  user.name = name
  user.age = age
  return user
}

const userMethods = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`)
  },
  ageUser: function () {
    console.log(`I'm ${this.age} years old`)
  }
}

const user1 = createUser('Kristina', 33)
const user2 = createUser('Dmytro', 25)

user1.greet()
user1.ageUser()
user2.greet()
user2.ageUser()
