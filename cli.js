#!/usr/bin/env node

var lenny = require('./')
var args = process.argv.splice(2)

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  lenny.faces.forEach(function (face) {
    process.stdout.write(face + '\n')
  })
  return
}

process.stdout.write(lenny())
