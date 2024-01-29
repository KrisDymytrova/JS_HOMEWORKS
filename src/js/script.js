'use strict'

const updateQueryString = function (url, key, value) {
  const urlObject = new URL(url)
  urlObject.searchParams.set(key, value)

  return urlObject.toString()
}

const newUrl = updateQueryString('https://example.com/search?q=query&sort=ascending&page=2', 'page', '100')

console.log(newUrl)
