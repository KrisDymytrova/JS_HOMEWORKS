'use strict';

(function () {
  const form = document.querySelector('#form')
  const dataContainer = document.querySelector('.data-container')
  const dataKey = 'formData'

  const renderData = () => {
    const data = JSON.parse(localStorage.getItem(dataKey))

    if (document.querySelector('.dataUL')) {
      document.querySelector('.dataUL').remove()
    }

    if (!data || Object.keys(data).length === 0 || Object.keys(data).filter(key => key !== 'option' && key !== 'terms').every(key => data[key] === '')) {
      dataContainer.innerHTML = ''
      const noDataMessage = document.createElement('p')
      noDataMessage.textContent = 'No stored data found.'
      noDataMessage.classList.add('noDataMessage')
      dataContainer.appendChild(noDataMessage)
    } else {
      const ul = document.createElement('ul')
      ul.classList.add('dataUL')

      for (const key in data) {
        const li = document.createElement('li')
        li.innerHTML = `<b>${key}:</b> <i>${data[key]}</i>`
        ul.append(li)
      }

      dataContainer.append(ul)
    }
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const elements = e.target.querySelectorAll('input, textarea, select')

      const data = Array.from(elements).reduce((acc, item) => {
        acc[item.name] = item.value.trim()
        return acc
      }, {})

      localStorage.setItem(dataKey, JSON.stringify(data))
      renderData()
    })
  }

  document.addEventListener('DOMContentLoaded', renderData)
}())
