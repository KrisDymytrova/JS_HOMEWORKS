'use strict'

const parseUrl = function (url) {
  const parsedUrl = new URL(url)

  return {
    hash: parsedUrl.hash,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    href: parsedUrl.href,
    origin: parsedUrl.origin,
    pathname: parsedUrl.pathname,
    port: parsedUrl.port,
    protocol: parsedUrl.protocol,
    search: parsedUrl.search,
    params: Object.fromEntries(parsedUrl.searchParams.entries()),
    pathSegments: parsedUrl.pathname.split('/').filter(segment => segment !== ''),
    isSecure: parsedUrl.protocol === 'https:'
  }
}

console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'))
