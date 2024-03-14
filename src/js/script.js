'use strict'

(function () {
  const form = document.querySelector('[data-form]')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const message = document.getElementById('message')

    if (name === '' || email === '' || password === '') {
      message.textContent = 'Будь ласка, заповніть усі поля'
    } else {
      message.textContent = 'Реєстрація успішна'
    }
  })
})()
