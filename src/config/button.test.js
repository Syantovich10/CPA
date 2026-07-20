import assert from 'node:assert/strict'
import test from 'node:test'

import { BUTTON_CLASSES, BUTTON_TEXT_CLASSES } from './button.js'

test('button base styles do not impose dimensions or spacing', () => {
  const classes = BUTTON_CLASSES.split(' ')

  assert.equal(classes.includes('h-[85px]'), false)
  assert.equal(classes.includes('w-max'), false)
  assert.equal(classes.includes('min-w-[180px]'), false)
  assert.equal(classes.includes('px-14'), false)
  assert.equal(classes.includes('py-0'), false)
  assert.equal(BUTTON_TEXT_CLASSES.includes('whitespace-nowrap'), false)
})
