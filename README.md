# pad-right [![NPM version](https://badge.fury.io/js/pad-right.svg)](http://badge.fury.io/js/pad-right)

> Right pad a string with zeros or a specified string. Fastest implementation.

## Install
## Install with [npm](npmjs.org)

```bash
npm i pad-right --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var pad = require('pad-right');
pad('abc', 10);
//=> 'abc0000000000'

pad('abc', 10, '~');
//=> 'abc~~~~~~~~~~'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/pad-right/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on November 30, 2014._