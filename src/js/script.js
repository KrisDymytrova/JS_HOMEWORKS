'use strict'

const ulList = document.getElementById('ulId')

const liTextArr = []

for (const li of ulList.getElementsByTagName('li')) {
  console.log(li.textContent)

  liTextArr.push(li.textContent)
}

console.log('Загальна кількість елементів li:', ulList.children.length)

console.log('Масив з текстом кожного елемента li:', liTextArr)
