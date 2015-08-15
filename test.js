/*!
 * pad-right <https://github.com/jonschlinkert/pad-right>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

/* deps: mocha */
var should = require('should');
var pad = require('./');

describe('pad right', function () {
  it('should return the string when no padding amount is passed.', function () {
    pad('abc').should.equal('abc');
  });

  it('should pad the string to meet the given length', function () {
    pad('abc', 5).should.equal('abc00');
    pad('abc', 10).should.equal('abc0000000');
    pad('abc', 100).should.equal('abc0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
    pad('abc', 300).should.equal('abc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });

  it('should pad using the given string.', function () {
    pad('abc', 10, '~').should.equal('abc~~~~~~~');
    pad('abc', 100, '~').should.equal('abc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    pad('abc', 300, '~').should.equal('abc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  });
});
