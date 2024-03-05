'use strict'

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введіть текст'

const button = document.createElement('button')
button.textContent = 'Зберегти'

const container = document.createElement('div')

button.addEventListener('click', function () {
  const text = input.value.trim()
  if (text) {
    const savedText = document.createElement('div')
    savedText.innerHTML = text
    container.prepend(savedText)
    input.value = ''
  }
})

document.body.append(input)
document.body.append(button)
document.body.append(container)
