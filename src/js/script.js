'use strict'

const generateList = ((array) => {
  const createList = (arr) => {
    const ul = document.createElement('ul')

    arr.forEach((element) => {
      const li = document.createElement('li')

      if (Array.isArray(element)) {
        li.appendChild(createList(element))
      } else {
        li.textContent = element
      }

      ul.appendChild(li)
    })

    return ul
  }

  return createList(array)
})([1, 2, [1.1, 1.2, 1.3], 3])

document.body.appendChild(generateList)
