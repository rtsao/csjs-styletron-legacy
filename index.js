'use strict';

var csjs = require('csjs');
var styletron = require('styletron');

function styletronWrapper() {
  var result = csjs.apply(null, arguments);
  var css = csjs.getCss(result);
  if (css) {
    styletron.injectOnce(result.className, css);
  }
  return result;
}

module.exports = styletronWrapper;
module.exports.csjs = styletronWrapper;
module.exports.getCss = csjs.getCss;
