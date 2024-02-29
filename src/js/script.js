'use strict'

const ul = document.getElementById('ulId')

// Task 1

const ulAttributesValues = []

for (const attribute of ul.attributes) {
  ulAttributesValues.push(attribute.value)
}

console.log('Масив зі значеннями атрибутів тегу ul:', ulAttributesValues)

// Task 2

const ulAttributesName = []

for (const attribute of ul.attributes) {
  ulAttributesName.push(attribute.name)
}

console.log('Масив із назвою атрибутів тегу ul:', ulAttributesName)

// Task 3

ul.lastElementChild.textContent = ul.lastElementChild.textContent.replace('Element 10', 'Привіт, мне звуть Крістіна')

// Task 4

ul.firstElementChild.setAttribute('data-my-name', 'Крістіна')

// Task 5

ul.removeAttribute('data-dog-tail')
