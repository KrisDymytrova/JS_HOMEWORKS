'use strict'

const ul = document.createElement('ul')

const addListItem = function () {
  const listItemContent = prompt('Введите содержимое для нового пункта списка:', '')

  if (listItemContent !== null && listItemContent !== '') {
    const li = document.createElement('li')
    li.textContent = listItemContent
    ul.appendChild(li)

    addListItem()
  } else {
    document.body.appendChild(ul)
  }
}

addListItem()
