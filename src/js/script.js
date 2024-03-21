'use strict'
const DATA_KEY = 'formData';

(function () {
  const formPage = () => {
    const form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const elements = e.target.querySelectorAll('input, textarea, select')
      const data = {}

      elements.forEach((input) => {
        if (input.value.trim() !== '') {
          data[input.name] = input.value
        }
      })

      localStorage.setItem(DATA_KEY, JSON.stringify(data))
      e.target.reset()
    })
  }
  const secondPage = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY))
    const dataContainer = document.querySelector('.data-container')

    if (!data || Object.keys(data).filter(key => !['option', 'terms'].includes(key)).every(key => !data[key])) {
      dataContainer.innerHTML = '<p class="noDataMessage">No stored data found.</p>'
    } else {
      const ul = document.createElement('ul')

      for (const key in data) {
        const li = document.createElement('li')
        li.innerHTML = `<b>${key}:</b> <i>${data[key]}</i>`
        ul.append(li)
      }

      dataContainer.append(ul)
    }
  }

  if (location.pathname.includes('index.html')) {
    formPage()
  } else if (location.pathname.includes('index1.html')) {
    secondPage()
  }
})()
