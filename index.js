/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num, str) {
  var padding = '';
  var postfix = num - val.length;

  // Breakpoints based on benchmarks to use the fastest approach
  // for the given number of zeros
  if (postfix <= 5 && !str) {
    padding = '00000';
  } else if (postfix <= 25 && !str) {
    padding = '000000000000000000000000000';
  } else {
    return val + repeat(str || '0', postfix);
  }

  return val + padding.slice(-postfix);
};
