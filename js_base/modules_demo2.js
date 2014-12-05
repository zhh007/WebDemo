1.The module should start with a !. This ensures that if a malformed module forgets to include a 
final semicolon there aren't errors in production when the scripts get concatenated. Explanation

2.The file should be named with camelCase, live in a folder with the same name, and match the 
name of the single export.

3.Add a method called noConflict() that sets the exported module to the previous version and 
returns this one.

4.Always declare 'use strict'; at the top of the module.

// fancyInput/fancyInput.js

!function(global) {
  'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);

//2
;(function() {
  // Good: the name is local to this module
  var FooMachine = {};

  // Good: implementation detail is clearly local to the closure
  function processBar() { ... }

  FooMachine.doFoo = function(bar) {
    processBar(bar);
    // ...
  };

  // Good: only exporting the public interface,
  // internals can be refactored without worrying
  return FooMachine;
})();