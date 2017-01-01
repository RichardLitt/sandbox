#!/usr/bin/env node
// const meow = require('meow')
const hackmd = require('generate-hackmd-links')
const Promise = require('bluebird')
const Octokat = require('octokat')
const gh = new Octokat({
    token: process.env.GITHUB_OGN_TOKEN
})

// const cli = meow([`
//   Usage
//     $ issue <input>

//   Examples
//     $ issue README.md
// `])

var readFile = Promise.promisify(require('fs').readFile)

const path = require('path')

readFile(path.join(__dirname, process.argv[2]), 'utf8').then((result) => {
  return hackmd(result)
}).then((result) => {
  return gh.fromUrl('https://api.github.com/repos/RichardLitt/sandbox/issues/create', {
    'title': 'new issue',
    'body': 'body'
  })
})
