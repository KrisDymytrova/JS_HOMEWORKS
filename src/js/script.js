'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-form]')
    const surveyFormName = document.getElementById('surveyFormName')
    const addNewOptionBtn = document.getElementById('addNewOptionBtn')
    const message = document.getElementById('message')
    const surveyOptions = document.getElementById('surveyOptions')
    const surveyResults = document.getElementById('surveyResults')

    addNewOptionBtn.addEventListener('click', function () {
      const newOptionInput = document.createElement('input')
      newOptionInput.type = 'text'
      newOptionInput.name = 'option'
      surveyOptions.appendChild(newOptionInput)
    })

    form.addEventListener('submit', function (event) {
      event.preventDefault()

      const surveyName = surveyFormName.value.trim()
      const options = document.querySelectorAll('#surveyOptions input')
      const optionValues = Array.from(options).map(option => option.value.trim())

      if (surveyName === '') {
        showMessage('Будь ласка, введіть назву опитування')
        return
      }

      if (optionValues.some(value => !value)) {
        showMessage('Всі варіанти відповідей повинні бути заповнені')
        return
      }

      if (options.length < 2) {
        showMessage('Додайте принаймні два варіанти відповідей')
        return
      }

      showNewSurvey(surveyName, options)

      showMessage('Опитування створено успішно', 'success')
      form.reset()
      surveyOptions.innerHTML = ''
    })

    const showMessage = function (text, type = 'error') {
      message.textContent = text
      message.className = type
    }

    const showNewSurvey = function (surveyName, options) {
      const surveyTitle = document.createElement('h2')
      surveyTitle.textContent = `Назва опитування: ${surveyName}`
      surveyResults.appendChild(surveyTitle)

      const optionsList = document.createElement('ul')
      options.forEach(option => {
        const listItem = document.createElement('li')
        listItem.textContent = option.value
        optionsList.appendChild(listItem)
      })
      surveyResults.appendChild(optionsList)
    }
  })
})()
