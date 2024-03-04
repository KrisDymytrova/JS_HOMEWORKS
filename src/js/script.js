'use strict'

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введіть число'

const button = document.createElement('button')
button.textContent = 'Перевірити'

button.addEventListener('click', function () {
  const number = parseInt(input.value)

  if (!isNaN(number)) {
    if (number % 2 === 0) {
      alert('Парне число')
    } else {
      alert('Непарне число')
    }
  } else {
    alert('Введіть число!')
  }
})

document.body.append(input)
document.body.append(button)
