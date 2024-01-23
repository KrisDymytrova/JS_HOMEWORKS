'use strict'

const userAge = prompt('Введіть свій вік')

if (userAge === '' || userAge === null) {
  alert('Ви не ввели свій вік')
} else {
  const userAgeNumber = Number(userAge)

  if (isNaN(userAgeNumber)) {
    alert('Введене значення не є числом')
  } else if ((userAgeNumber % 100 >= 11 && userAgeNumber % 100 <= 19) ||
      userAgeNumber % 10 === 0 ||
      (userAgeNumber % 10 >= 5 && userAgeNumber % 10 <= 9)) {
    alert(`Вам ${userAgeNumber} років`)
  } else if (userAgeNumber % 10 === 1) {
    alert(`Вам ${userAgeNumber} рік`)
  } else {
    alert(`Вам ${userAgeNumber} роки`)
  }
}
