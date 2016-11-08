'use strict'

const tap = require('tap')
const isValidAccountNumber = require('../../index')

tap.throws(
  () => {
    isValidAccountNumber()
  },
  {message: 'Missing required input: account number'},
  'throws if input is missing'
)

tap.throws(
  () => {
    isValidAccountNumber(123)
  },
  {message: 'Wrong length. Account number must be 11 digits'},
  'throws if input is too short'
)

tap.throws(
  () => {
    isValidAccountNumber(123456789031234)
  },
  {message: 'Wrong length. Account number must be 11 digits'},
  'throws if input is too long'
)

tap.equal(isValidAccountNumber(12345678903), true, 'returns true for valid account number')

tap.equal(isValidAccountNumber('1234 56 78903'), true, 'returns true for valid account number')

tap.equal(isValidAccountNumber('1234.56.78903'), true, 'returns true for valid account number')

tap.equal(isValidAccountNumber(12345678902), false, 'returns false for invalid account number')
