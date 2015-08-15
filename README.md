# pad-right [![NPM version](https://badge.fury.io/js/pad-right.svg)](http://badge.fury.io/js/pad-right)

> Right pad a string with zeros or a specified string. Fastest implementation.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i pad-right --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var pad = require('pad-right');
pad('abc', 5)
// 'abc00'
pad('abc', 10)
// 'abc0000000'
pad('abc', 10, '~')
// 'abc~~~~~~~'
pad('abc', 10, ' ')
// 'abc       '
```

## Related

* [align-text](https://github.com/jonschlinkert/align-text): Align the text in a string.
* [center-align](https://github.com/jonschlinkert/center-align): Center-align the text in a string.
* [justified](https://github.com/jonschlinkert/justified): Wrap words to a specified length and justified the text.
* [pad-left](https://github.com/jonschlinkert/pad-left): Left pad a string with zeros or a specified string. Fastest implementation.
* [repeat-string](https://github.com/jonschlinkert/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string.
* [right-align](https://github.com/jonschlinkert/right-align): Right-align the text in a string.
* [right-align-keys](https://github.com/jonschlinkert/right-align-keys): Right align the keys of an object.
* [right-align-values](https://github.com/jonschlinkert/right-align-values): Right align the values of a given property for each object in an array. Useful… [more](https://github.com/jonschlinkert/right-align-values)
* [right-pad-keys](https://github.com/jonschlinkert/right-pad-keys): Right pad the keys of an object.
* [right-pad-values](https://github.com/jonschlinkert/right-pad-values): Right pad the values of a given property for each object in an array. Useful… [more](https://github.com/jonschlinkert/right-pad-values)
* [word-wrap](https://github.com/jonschlinkert/word-wrap): Wrap words to a specified length.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/pad-right/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 15, 2015._