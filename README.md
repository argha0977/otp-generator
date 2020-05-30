#@argha0277/otp-generator

> '@argha0277/otp-generator' is an one time password generator of specified digits and can be used as a password/pin generator.



## Index
* [Install](#install)
* [Usage](#usage)
* [Test](#test)
* [License](#license)

## Install

```bash
npm i @argha0277/otp-generator --save
```

## Usage

```js
var otpgen = require('@argha0277/otp-generator')
```

```js
var otp = otpgen.generate(4);

```
### generate(digis)

**Arguments**

* `digits` - Number of digits in OTP. Default length is 4.

```js
var otpgen = require('@argha0277/otp-generator')

var otp = otpgen.generateWithSeed(4, 541274896325);

```
### generate(length, seed)

**Arguments**

* `digits` - Number of digits in OTP. Default length is 4.
* `seed` - A numeric seed.

## Tests

```js
node test
```

## License
[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-version-img]: https://badge.fury.io/js/%40argha0277%2Fotp-generator.svg
[npm-version-url]: https://badge.fury.io/js/%40argha0277%2Fotp-generator.svg
