[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# is-valid-account-number

Validates Norwegian bank account numbers

## Installation

```sh
$ npm i is-valid-account-number
```

## Usage

```JavaScript
const isValidAccountNumber = require('is-valid-account-number')

isValidAccountNumber(12345678903) // => true

isValidAccountNumber(12345678902) // => false
```

## License

[MIT](LICENSE)