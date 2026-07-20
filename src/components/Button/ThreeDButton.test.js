import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('uses a straight line for the upper-right segment', async () => {
  const source = await readFile(
    new URL('./ThreeDButton.jsx', import.meta.url),
    'utf8',
  )

  assert.equal(source.includes('M406.73 9.85855L421.25 1.25'), true)
})
