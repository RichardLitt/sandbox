const request = require('request')
const fs = require('graceful-fs')
const path = require('path')
const escapeRegExp = require('escape-string-regexp')

function addURL (match) {
  return request({
      method: 'GET',
      uri: 'https://hackmd.io/new',
      resolveWithFullResponse: true
    }, (err, response, body) => {
      if (err) { throw 'Cannot get url'}

      return '[test](' + response.request.href + ')'
    })
}

function checkFileContents (input) {
  fs.readFile(input, 'utf8', (err, res) => {
    if (err) { throw 'Unable to read file'}

    var result = res.replace(new RegExp(escapeRegExp('[test]()'), 'g'), addURL)

    console.log(result)
  })
}

checkFileContents(path.join(__dirname, 'README.md'))
