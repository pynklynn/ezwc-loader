/**
 * @license
 * Copyright (c) 2019 Pynk Lynn, LLC
 * This code may only be used under the MIT style license found at
 * https://github.com/pynklynn/ezwc-loader/blob/master/LICENSE
 */

const EzwcCore = require('ezwc-cli/lib/ezwc');

module.exports = function() {
  return EzwcCore.process(this.resourcePath, `${this.resourcePath}.temp`, false, true, false);
}