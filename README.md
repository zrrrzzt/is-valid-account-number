[![Build Status](https://travis-ci.org/zrrrzzt/is-valid-account-number.svg?branch=master)](https://travis-ci.org/zrrrzzt/is-valid-account-number)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/is-valid-account-number/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/is-valid-account-number?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# is-valid-account-number

Validates Norwegian bank account numbers

## Installation

```sh
$ npm i is-valid-account-number
```

## Usage

```JavaScript
'use strict'

const isValidAccountNumber = require('is-valid-account-number')

isValidAccountNumber(12345678903) // => true

isValidAccountNumber(12345678902) // => false
```

## License

[MIT](LICENSE)