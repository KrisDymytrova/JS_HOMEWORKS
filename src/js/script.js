'use strict';

(function () {
  const form = document.querySelector('#form')
  const dataContainer = document.querySelector('.data-container')
  const dataKey = 'formData'

  const renderData = () => {
    const data = JSON.parse(localStorage.getItem(dataKey))
    if (!data) return

    if (document.querySelector('.dataUL')) {
      document.querySelector('.dataUL').remove()
    }

    const ul = document.createElement('ul')
    ul.classList.add('dataUL')

    for (const key in data) {
      const li = document.createElement('li')
      li.innerHTML = `<b>${key}:</b> <i>${data[key]}</i>`
      ul.append(li)
    }

    dataContainer.append(ul)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const elements = e.target.querySelectorAll('input, textarea, select')

    const data = Array.from(elements).reduce((acc, item) => {
      acc[item.name] = item.value
      return acc
    }, {})

    localStorage.setItem(dataKey, JSON.stringify(data))
    renderData()
  })

  document.addEventListener('DOMContentLoaded', renderData)
}())
