'use strict'
const DATA_KEY = 'todoItems';

(function () {
  const form = document.querySelector('[data-form]')
  const todoItemsContainer = document.querySelector('[data-todo-items]')

  const saveTodoItemsToLocalStorage = (items) => {
    localStorage.setItem(DATA_KEY, JSON.stringify(items))
  }

  const getTodoItemsFromLocalStorage = () => {
    const storedItems = localStorage.getItem(DATA_KEY)
    return storedItems ? JSON.parse(storedItems) : []
  }

  const renderTodoItems = (items) => {
    todoItemsContainer.innerHTML = ''
    if (items.length === 0) {
      todoItemsContainer.innerHTML = '<p class="noDataMessage">No todo items found.</p>'
      return
    }
    items.forEach(item => {
      const todoItem = createTodoItemsTemplate(item)
      appendTodoItem(todoItem)
    })
  }

  const createTodoItemsTemplate = (config) => {
    const container = document.createElement('div')
    container.className = 'col-4'

    const wrapper = document.createElement('div')
    wrapper.className = 'taskWrapper'
    container.append(wrapper)

    const title = document.createElement('div')
    title.textContent = config.title
    title.className = 'taskHeading'
    wrapper.append(title)

    const description = document.createElement('div')
    description.textContent = config.description
    description.className = 'taskDescription'
    wrapper.append(description)

    return container
  }
  const appendTodoItem = (elem) => {
    todoItemsContainer.append(elem)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const elements = e.target.querySelectorAll('input, textarea')
    const data = {}

    for (const input of elements) {
      if (!input.value.trim()) return alert('There is no data')
      data[input.name] = input.value
    }

    const todoItems = getTodoItemsFromLocalStorage()
    todoItems.push(data)
    saveTodoItemsToLocalStorage(todoItems)

    renderTodoItems(todoItems)

    e.target.reset()
  })

  document.addEventListener('DOMContentLoaded', () => {
    const todoItems = getTodoItemsFromLocalStorage()
    renderTodoItems(todoItems)
  })
})()
