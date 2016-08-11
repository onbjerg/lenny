# lenny [![Build Status](https://travis-ci.org/onbjerg/lenny.svg?branch=master)](https://travis-ci.org/onbjerg/lenny)

generates a random lenny face for your project

## Samples

- └[-Д-]┘
- [⍤ᴥ⍤]
- ୧☼Ĺ☼୨
- ୨⍊୧
- (งᚖヮᚖ)ง
- ୨⇀‸↼୧
- ᘳ⨴_⨵ᘰ
- (づ♥╭∩╮♥)づ
- ¯\_⫑ᗝ⫒_/¯
- (づ◔ ³◔)づ
- (∩⏓Ꮂ⏓)⊃━☆ﾟ.*
- ᕦ♥╭∩╮♥ᕥ
- ☞ᨎ☞
- (ง─‿─)ง
- |ȍvȍ|
- q⍜ᨎ⍜p
- q  ل  p
- | º ⍘ º |
- ᕦ⇀ᗜ↼ᕥ
- ʢ♥◡♥ʡ
- (งꝊ∀Ꝋ)ง
- \(⍤ᴥ⍤)/
- ᕳ⪩ ʖ⪨ᕲ
- ୧⏒ロ⏒୨
- ᕮ⪩╭ʖ╮⪨ᕭ

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
