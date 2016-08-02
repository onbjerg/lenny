#!/usr/bin/env node

var lenny = require('./')
var args = process.argv.splice(2)

process.stdout.write(lenny())
