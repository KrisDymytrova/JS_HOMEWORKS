'use strict'

const createTable = (function () {
  return function createTable () {
    const table = document.createElement('table')

    for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr')

      for (let j = 0; j < 10; j++) {
        const value = i * 10 + j + 1

        const cell = document.createElement('td')

        cell.textContent = value.toString()

        row.appendChild(cell)
      }

      table.appendChild(row)
    }

    document.body.appendChild(table)
  }
})()

createTable()
