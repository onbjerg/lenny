var lenny = require('./')
var assert = require('assert')

// Helper functions
function unique (value, index, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i === index) continue
    if (arr[i].join('') === value.join('')) {
      console.log(arr[i].join(''), value.join(''), index, i)
      return false
    }
  }
  return true
}

// We only want unique body parts
assert.strictEqual(
  lenny.eyes.length,
  lenny.eyes.filter(unique).length,
  'Expected no duplicate eyes'
)
assert.strictEqual(
  lenny.mouths.length,
  lenny.mouths.filter(unique).length,
  'Expected no duplicate mouths'
)
assert.strictEqual(
  lenny.ears.length,
  lenny.ears.filter(unique).length,
  'Expected no duplicate ears'
)

console.log('Tests passed')
