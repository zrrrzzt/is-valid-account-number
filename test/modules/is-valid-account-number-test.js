'use strict'

const tap = require('tap')
const isValidAccountNumber = require('../../index')

tap.ok(isValidAccountNumber, 'is-valid-account-number loads ok')
