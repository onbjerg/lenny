# lenny [![Build Status](https://travis-ci.org/onbjerg/lenny.svg?branch=master)](https://travis-ci.org/onbjerg/lenny)

generates a random lenny face for your project

## CLI usage

```
npm install lenny -g
lenny
```

## JS usage

```js
var lenny = require('lenny')

console.log(lenny())
// ( ͡° ͜ʖ ͡°)

console.log(lenny())
// ( ͡o ͜ʖ ͡o)

lenny.eyes
// => [ [ ..., ... ], ...]

lenny.ears
// => [ [ ..., ... ], ...]

lenny.mouths
// => [ [ ..., ... ], ...]
```
