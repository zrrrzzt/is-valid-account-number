'use strict'

const checkdigit = require('checkdigit')

module.exports = (accountNumber) => {
  if (!accountNumber) {
    throw new Error('Missing required input: account number')
  }

  const accountnumber = accountNumber.toString().replace(/\D/g, '')

  if (accountnumber.length !== 11) {
    throw new Error('Wrong length. Account number must be 11 digits')
  }

  return checkdigit.mod11.isValid(accountnumber)
}
