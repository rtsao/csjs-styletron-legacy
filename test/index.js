'use strict';

var test = require('tape');
var csjs = require('../');
var server = require('styletron-server');
var styletron = require('styletron');

test('basic test', function(t) {
  styletron.startBuffering();
  var res = csjs(['.foo {}']);
  t.equal(csjs.getCss(res), '.foo_46QfNN {}');
  t.equal(styletron.flushBuffer(), '.foo_46QfNN {}');
  t.end();
});
