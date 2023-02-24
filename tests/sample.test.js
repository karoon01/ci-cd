const { expect, test, describe } = require('@jest/globals')

describe('first unit test', () => {
  test('1 is equal to 1', () => {
    expect(1 === 1).toBe(true)
  })
})

describe('second unit test', () => {
  test('2 is equal to 2', () => {
    expect(2 === 2).toBe(true)
  })
})

describe('third unit test', () => {
  test('3 is equal to 3', () => {
    expect(3 === 3).toBe(true)
  })
})

describe('fourth unit test', () => {
  test('3 is equal to 3', () => {
    expect(3 === 3).toBe(true)
  })
})
