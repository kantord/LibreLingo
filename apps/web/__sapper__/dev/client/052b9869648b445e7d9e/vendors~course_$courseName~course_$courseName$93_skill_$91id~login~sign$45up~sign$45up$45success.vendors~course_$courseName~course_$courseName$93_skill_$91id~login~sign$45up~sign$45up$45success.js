(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~course_$courseName~course_$courseName$93_skill_$91id~login~sign$45up~sign$45up$45success"],{

/***/ "../../node_modules/argsarray/index.js":
/*!********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/argsarray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}

/***/ }),

/***/ "../../node_modules/immediate/lib/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var types = [
  __webpack_require__(/*! ./nextTick */ 0),
  __webpack_require__(/*! ./queueMicrotask */ "../../node_modules/immediate/lib/queueMicrotask.js"),
  __webpack_require__(/*! ./mutation.js */ "../../node_modules/immediate/lib/mutation.js"),
  __webpack_require__(/*! ./messageChannel */ "../../node_modules/immediate/lib/messageChannel.js"),
  __webpack_require__(/*! ./stateChange */ "../../node_modules/immediate/lib/stateChange.js"),
  __webpack_require__(/*! ./timeout */ "../../node_modules/immediate/lib/timeout.js")
];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    nextTick();
  }
}

//named nextTick for less confusing stack traces
function nextTick() {
  if (draining) {
    return;
  }
  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);
  while (len) {
    currentQueue = queue;
    queue = [];
    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}
var scheduleDrain;
var i = -1;
var len = types.length;
while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
}
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;
  switch (array.length) {
  case 0:
    return fun();
  case 1:
    return fun(array[0]);
  case 2:
    return fun(array[0], array[1]);
  case 3:
    return fun(array[0], array[1], array[2]);
  default:
    return fun.apply(null, array);
  }

};
module.exports = immediate;
function immediate(task) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(task, args));
  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}


/***/ }),

/***/ "../../node_modules/immediate/lib/messageChannel.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/messageChannel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }
  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/mutation.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/mutation.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
//based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = (called = ++called % 2);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/queueMicrotask.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/queueMicrotask.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
exports.test = function () {
  return typeof global.queueMicrotask === 'function';
};

exports.install = function (func) {
  return function () {
    global.queueMicrotask(func);
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/stateChange.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/stateChange.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {

    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');
    scriptEl.onreadystatechange = function () {
      handle();

      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };
    global.document.documentElement.appendChild(scriptEl);

    return handle;
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/timeout.js":
/*!**************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/immediate/lib/timeout.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/inherits/inherits_browser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "../../node_modules/node-libs-browser/node_modules/events/events.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/node-libs-browser/node_modules/events/events.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "../../node_modules/pouchdb/lib/index-browser.es.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/lib/index-browser.es.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immediate */ "../../node_modules/immediate/lib/index.js");
/* harmony import */ var immediate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immediate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spark-md5 */ "../../node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuvuzela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuvuzela */ "../../node_modules/vuvuzela/index.js");
/* harmony import */ var vuvuzela__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuvuzela__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var argsarray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! argsarray */ "../../node_modules/argsarray/index.js");
/* harmony import */ var argsarray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(argsarray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! events */ "../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_6__);








function mangle(key) {
  return '$' + key;
}
function unmangle(key) {
  return key.substring(1);
}
function Map$1() {
  this._store = {};
}
Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};
Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};
Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};
Map$1.prototype.delete = function (key) {
  var mangled = mangle(key);
  var res = mangled in this._store;
  delete this._store[mangled];
  return res;
};
Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};
Object.defineProperty(Map$1.prototype, 'size', {
  get: function () {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1();

  // init with an array
  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}
Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};
Set$1.prototype.has = function (key) {
  return this._store.has(key);
};
Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};
Object.defineProperty(Set$1.prototype, 'size', {
  get: function () {
    return this._store.size;
  }
});

/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.
function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }
  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
}

// based on https://github.com/montagejs/collections

var ExportedSet;
var ExportedMap;

{
  if (supportsMapAndSet()) { // prefer built-in Map/Set
    ExportedSet = Set;
    ExportedMap = Map;
  } else { // fall back to our polyfill
    ExportedSet = Set$1;
    ExportedMap = Map$1;
  }
}

function isBinaryObject(object) {
  return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
    (typeof Blob !== 'undefined' && object instanceof Blob);
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  }
  // IE10-11 slice() polyfill
  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }
  var size = object.size;
  var type = object.type;
  // Blob
  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  }
  // PhantomJS slice() replacement
  return object.webkitSlice(0, size, type);
}

// most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js

var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */
  if (proto === null) { // not sure when this happens, but I guess it can
    return true;
  }
  var Ctor = proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];
    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }
    return newObject;
  }

  // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates
  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};
  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);
      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }
  return newObject;
}

function once(fun) {
  var called = false;
  return argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this;
    // if the last argument is a function, assume its a callback
    var usedCB = (typeof args[args.length - 1] === 'function') ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;
      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        });
        // create a callback for this invocation
        // apply the function in the orig context
        args.push(callback);
        resp = func.apply(self, args);
        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    });
    // if there is a callback, call it back
    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }
    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];
    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }
    self.constructor.emit('debug', logArgs);

    // override the callback itself to log the response
    var origCallback = args[args.length - 1];
    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(
        err ? ['error', err] : ['success', res]
      );
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise(argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }
    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }
    var self = this;
    logApiCall(self, name, args);
    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }
    return callback.apply(this, args);
  }));
}

// like underscore/lodash _.pick()
function pick(obj, arr) {
  var res = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }
  return res;
}

// Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.
var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
}

// shim for P/CouchDB adapters that don't directly implement _bulk_get
function bulkGet(db, opts, callback) {
  var requests = opts.docs;

  // consolidate into one request per doc if possible
  var requestsById = new ExportedMap();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });

  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {results: results});
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {id: id, docs: docs};
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });

  var i = 0;

  function nextBatch() {

    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId);

      // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.
      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      });

      // remove falsey / undefined revisions
      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);

      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs;

        // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request
        formatResult = formatResultForOpenRevsGet;
      }

      // globally-supplied options
      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */
        if (err) {
          result = [{error: err}];
        } else {
          result = formatResult(res);
        }
        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();

}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
}

// Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We

inherits__WEBPACK_IMPORTED_MODULE_5___default()(Changes, events__WEBPACK_IMPORTED_MODULE_6___default.a);

/* istanbul ignore next */
function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  events__WEBPACK_IMPORTED_MODULE_6___default.a.call(this);
  this._listeners = {};

  attachBrowserEvents(this);
}
Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }
  var self = this;
  var inprogress = false;
  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }
    if (inprogress) {
      inprogress = 'waiting';
      return;
    }
    inprogress = true;
    var changesOpts = pick(opts, [
      'style', 'include_docs', 'attachments', 'conflicts', 'filter',
      'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs'
    ]);

    /* istanbul ignore next */
    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        immediate__WEBPACK_IMPORTED_MODULE_0___default()(eventFunction);
      }
      inprogress = false;
    }).on('error', onError);
  }
  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }
  events__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.removeListener.call(this, dbName,
    this._listeners[id]);
  delete this._listeners[id];
};


/* istanbul ignore next */
Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes
  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);
  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  }
  // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout
  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two
    max = maxTimeout;
  }
  var ratio = Math.random();
  var range = max - min;

  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;
  if (!min) {
    max = 2000;
  }
  return randomNumber(min, max);
}

// designed to give info to browser users, who are disturbed
// when they see http errors in the console
function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function (target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }
}

var $inject_Object_assign = assign;

inherits__WEBPACK_IMPORTED_MODULE_5___default()(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.
    /* jshint ignore:start */
    var names = Object.getOwnPropertyNames(error);
    for (var i = 0, len = names.length; i < len; i++) {
      if (typeof error[names[i]] !== 'function') {
        this[names[i]] = error[names[i]];
      }
    }
    /* jshint ignore:end */
    if (reason !== undefined) {
      this.reason = reason;
    }
  }
  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {

  if (typeof err !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return createError(BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;

  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (typeof filterReturn === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }
    return true;
  };
}

function flatten(arrs) {
  var res = [];
  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }
  return res;
}

// shim for Function.prototype.name,

// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case
function invalidIdError(id) {
  var err;
  if (!id) {
    err = createError(MISSING_ID);
  } else if (typeof id !== 'string') {
    err = createError(INVALID_ID);
  } else if (/^_/.test(id) && !(/^_(design|local)/).test(id)) {
    err = createError(RESERVED_ID);
  }
  if (err) {
    throw err;
  }
}

// Checks if a PouchDB object is "remote" or not. This is

function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */
  if (typeof db.type === 'function') {
    guardedConsole('warn',
      'db.type() is deprecated and will be removed in ' +
      'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */
  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) :
                                 events__WEBPACK_IMPORTED_MODULE_6___default.a.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }
  var parts = s.split('/');
  if (parts.length === 2) {
    return parts;
  }
  if (parts.length === 1) {
    return [s, s];
  }
  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
}

// originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
var keys = ["source", "protocol", "authority", "userInfo", "user", "password",
    "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName ="queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g;

// use the "loose" parser
/* eslint maxlen: 0, no-useless-escape: 0 */
var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });

  return uri;
}

// Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()

function scopeEval(source, scope) {
  var keys = [];
  var values = [];
  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }
  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
}

// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all
function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }
        doc = {};
      }

      // the user might change the _rev, so save it for posterity
      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({updated: false, rev: docRev});
      }

      // users aren't allowed to modify these values,
      // so reset them here
      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }
    return upsert(db, doc._id, diffFun);
  });
}

var thisAtob = function (str) {
  return atob(str);
};

var thisBtoa = function (str) {
  return btoa(str);
};

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).
function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }
    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
                  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
                  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder :
                  WebKitBlobBuilder;
    var builder = new Builder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
}

// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {type: type});
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
}

//Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers
function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;
  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
}

// shim for browsers that don't support it
function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';
  reader.onloadend = function (e) {
    var result = e.target.result || '';
    if (hasBinaryString) {
      return callback(result);
    }
    callback(arrayBufferToBinaryString(result));
  };
  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
}

// simplified API. universal browser support is assumed
function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();
  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };
  reader.readAsArrayBuffer(blob);
}

// this is not used in the browser

var setImmediateShim = self.setImmediate || self.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return thisBtoa(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }
  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }
  readAsArrayBuffer(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }
  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new spark_md5__WEBPACK_IMPORTED_MODULE_2___default.a() : new spark_md5__WEBPACK_IMPORTED_MODULE_2___default.a.ArrayBuffer();

  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;
    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }
  loadNextChunk();
}

function stringMd5(string) {
  return spark_md5__WEBPACK_IMPORTED_MODULE_2___default.a.hash(string);
}

function rev(doc, deterministic_revs) {
  var clonedDoc = clone(doc);
  if (!deterministic_revs) {
    return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return stringMd5(JSON.stringify(clonedDoc));
}

var uuid = uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]; // mimic old import, only v4 is ever used elsewhere

// We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html
function winningRev(metadata) {
  var winningId;
  var winningPos;
  var winningDeleted;
  var toVisit = metadata.rev_tree.slice();
  var node;
  while ((node = toVisit.pop())) {
    var tree = node.ids;
    var branches = tree[2];
    var pos = node.pos;
    if (branches.length) { // non-leaf
      for (var i = 0, len = branches.length; i < len; i++) {
        toVisit.push({pos: pos + 1, ids: branches[i]});
      }
      continue;
    }
    var deleted = !!tree[1].deleted;
    var id = tree[0];
    // sort by deleted, then pos, then id
    if (!winningId || (winningDeleted !== deleted ? winningDeleted :
        winningPos !== pos ? winningPos < pos : winningId < id)) {
      winningId = id;
      winningPos = pos;
      winningDeleted = deleted;
    }
  }

  return winningPos + '-' + winningId;
}

// Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node
function traverseRevTree(revs, callback) {
  var toVisit = revs.slice();

  var node;
  while ((node = toVisit.pop())) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx =
      callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({pos: pos + 1, ids: branches[i], ctx: newCtx});
    }
  }
}

function sortByPos(a, b) {
  return a.pos - b.pos;
}

function collectLeaves(revs) {
  var leaves = [];
  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.push({rev: pos + "-" + id, pos: pos, opts: opts});
    }
  });
  leaves.sort(sortByPos).reverse();
  for (var i = 0, len = leaves.length; i < len; i++) {
    delete leaves[i].pos;
  }
  return leaves;
}

// returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision
function collectConflicts(metadata) {
  var win = winningRev(metadata);
  var leaves = collectLeaves(metadata.rev_tree);
  var conflicts = [];
  for (var i = 0, len = leaves.length; i < len; i++) {
    var leaf = leaves[i];
    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  }
  return conflicts;
}

// compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete
function compactTree(metadata) {
  var revs = [];
  traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
                                               revHash, ctx, opts) {
    if (opts.status === 'available' && !isLeaf) {
      revs.push(pos + '-' + revHash);
      opts.status = 'missing';
    }
  });
  return revs;
}

// build up a list of all the paths to the leafs in this revision tree
function rootToLeaf(revs) {
  var paths = [];
  var toVisit = revs.slice();
  var node;
  while ((node = toVisit.pop())) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;

    var history = node.history ? node.history.slice() : [];
    history.push({id: id, opts: opts});
    if (isLeaf) {
      paths.push({pos: (pos + 1 - history.length), ids: history});
    }
    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({pos: pos + 1, ids: branches[i], history: history});
    }
  }
  return paths.reverse();
}

// for a better overview of what this is doing, read:

function sortByPos$1(a, b) {
  return a.pos - b.pos;
}

// classic binary search
function binarySearch(arr, item, comparator) {
  var low = 0;
  var high = arr.length;
  var mid;
  while (low < high) {
    mid = (low + high) >>> 1;
    if (comparator(arr[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

// assuming the arr is sorted, insert the item in the proper place
function insertSorted(arr, item, comparator) {
  var idx = binarySearch(arr, item, comparator);
  arr.splice(idx, 0, item);
}

// Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument
function pathToTree(path, numStemmed) {
  var root;
  var leaf;
  for (var i = numStemmed, len = path.length; i < len; i++) {
    var node = path[i];
    var currentLeaf = [node.id, node.opts, []];
    if (leaf) {
      leaf[2].push(currentLeaf);
      leaf = currentLeaf;
    } else {
      root = leaf = currentLeaf;
    }
  }
  return root;
}

// compare the IDs of two trees
function compareTree(a, b) {
  return a[0] < b[0] ? -1 : 1;
}

// Merge two trees together
// The roots of tree1 and tree2 must be the same revision
function mergeTree(in_tree1, in_tree2) {
  var queue = [{tree1: in_tree1, tree2: in_tree2}];
  var conflicts = false;
  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status =
        (tree1[1].status ===  'available' ||
        tree2[1].status === 'available') ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;
      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({tree1: tree1[2][j], tree2: tree2[2][i]});
          merged = true;
        }
      }
      if (!merged) {
        conflicts = 'new_branch';
        insertSorted(tree1[2], tree2[2][i], compareTree);
      }
    }
  }
  return {conflicts: conflicts, tree: in_tree1};
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {tree: [path], conflicts: 'new_leaf'};
  }

  for (var i = 0, len = tree.length; i < len; i++) {
    var branch = tree[i];
    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({pos: branch.pos, ids: res.tree});
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees

      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;

      var candidateParents = [];

      var trees = [];
      trees.push({ids: t1.ids, diff: diff, parent: null, parentIdx: null});
      while (trees.length > 0) {
        var item = trees.pop();
        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }
          continue;
        }
        var elements = item.ids[2];
        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
          trees.push({
            ids: elements[j],
            diff: item.diff - 1,
            parent: item.ids,
            parentIdx: j
          });
        }
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({pos: t1.pos, ids: t1.ids});
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  }

  // We didnt find
  if (!merged) {
    restree.push(path);
  }

  restree.sort(sortByPos$1);

  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
}

// To ensure we dont grow the revision tree infinitely, we stem old revisions
function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths
  var paths = rootToLeaf(tree);
  var stemmedRevs;

  var result;
  for (var i = 0, len = paths.length; i < len; i++) {
    // Then for each path, we cut off the start of the path based on the
    // `depth` to stem to, and generate a new set of flat trees
    var path = paths[i];
    var stemmed = path.ids;
    var node;
    if (stemmed.length > depth) {
      // only do the stemming work if we actually need to stem
      if (!stemmedRevs) {
        stemmedRevs = {}; // avoid allocating this object unnecessarily
      }
      var numStemmed = stemmed.length - depth;
      node = {
        pos: path.pos + numStemmed,
        ids: pathToTree(stemmed, numStemmed)
      };

      for (var s = 0; s < numStemmed; s++) {
        var rev = (path.pos + s) + '-' + stemmed[s].id;
        stemmedRevs[rev] = true;
      }
    } else { // no need to actually stem
      node = {
        pos: path.pos,
        ids: pathToTree(stemmed, 0)
      };
    }

    // Then we remerge all those flat trees together, ensuring that we dont
    // connect trees that would go beyond the depth limit
    if (result) {
      result = doMerge(result, node, true).tree;
    } else {
      result = [node];
    }
  }

  // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed
  if (stemmedRevs) {
    traverseRevTree(result, function (isLeaf, pos, revHash) {
      // some revisions may have been removed in a branch but not in another
      delete stemmedRevs[pos + '-' + revHash];
    });
  }

  return {
    tree: result,
    revs: stemmedRevs ? Object.keys(stemmedRevs) : []
  };
}

function merge(tree, path, depth) {
  var newTree = doMerge(tree, path);
  var stemmed = stem(newTree.tree, depth);
  return {
    tree: stemmed.tree,
    stemmedRevs: stemmed.revs,
    conflicts: newTree.conflicts
  };
}

// return true if a rev exists in the rev tree, false otherwise
function revExists(revs, rev) {
  var toVisit = revs.slice();
  var splitRev = rev.split('-');
  var targetPos = parseInt(splitRev[0], 10);
  var targetId = splitRev[1];

  var node;
  while ((node = toVisit.pop())) {
    if (node.pos === targetPos && node.ids[0] === targetId) {
      return true;
    }
    var branches = node.ids[2];
    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({pos: node.pos + 1, ids: branches[i]});
    }
  }
  return false;
}

function getTrees(node) {
  return node.ids;
}

// check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision
function isDeleted(metadata, rev) {
  if (!rev) {
    rev = winningRev(metadata);
  }
  var id = rev.substring(rev.indexOf('-') + 1);
  var toVisit = metadata.rev_tree.map(getTrees);

  var tree;
  while ((tree = toVisit.pop())) {
    if (tree[0] === id) {
      return !!tree[1].deleted;
    }
    toVisit = toVisit.concat(tree[2]);
  }
}

function isLocalId(id) {
  return (/^_local/).test(id);
}

// returns the current leaf node for a given revision
function latest(rev, metadata) {
  var toVisit = metadata.rev_tree.slice();
  var node;
  while ((node = toVisit.pop())) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;

    var history = node.history ? node.history.slice() : [];
    history.push({id: id, pos: pos, opts: opts});

    if (isLeaf) {
      for (var i = 0, len = history.length; i < len; i++) {
        var historyNode = history[i];
        var historyRev = historyNode.pos + '-' + historyNode.id;

        if (historyRev === rev) {
          // return the rev of this leaf
          return pos + '-' + id;
        }
      }
    }

    for (var j = 0, l = branches.length; j < l; j++) {
      toVisit.push({pos: pos + 1, ids: branches[j], history: history});
    }
  }

  /* istanbul ignore next */
  throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(Changes$1, events__WEBPACK_IMPORTED_MODULE_6___default.a);

function tryCatchInChangeListener(self, change, pending, lastSeq) {
  // isolate try/catches to avoid V8 deoptimizations
  try {
    self.emit('change', change, pending, lastSeq);
  } catch (e) {
    guardedConsole('error', 'Error in .on("change", function):', e);
  }
}

function Changes$1(db, opts, callback) {
  events__WEBPACK_IMPORTED_MODULE_6___default.a.call(this);
  var self = this;
  this.db = db;
  opts = opts ? clone(opts) : {};
  var complete = opts.complete = once(function (err, resp) {
    if (err) {
      if (listenerCount(self, 'error') > 0) {
        self.emit('error', err);
      }
    } else {
      self.emit('complete', resp);
    }
    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });
  if (callback) {
    self.on('complete', function (resp) {
      callback(null, resp);
    });
    self.on('error', callback);
  }
  function onDestroy() {
    self.cancel();
  }
  db.once('destroyed', onDestroy);

  opts.onChange = function (change, pending, lastSeq) {
    /* istanbul ignore if */
    if (self.isCancelled) {
      return;
    }
    tryCatchInChangeListener(self, change, pending, lastSeq);
  };

  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    db.removeListener('destroyed', onDestroy);
    opts.complete(null, {status: 'cancelled'});
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);



  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function (failed) {
      if (failed) {
        opts.complete(failed);
      } else if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.validateChanges(opts);
      }
    });
  } else {
    self.validateChanges(opts);
  }
}
Changes$1.prototype.cancel = function () {
  this.isCancelled = true;
  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};
function processChange(doc, metadata, opts) {
  var changeList = [{rev: doc._rev}];
  if (opts.style === 'all_docs') {
    changeList = collectLeaves(metadata.rev_tree)
    .map(function (x) { return {rev: x.rev}; });
  }
  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }
  if (opts.conflicts) {
    change.doc._conflicts = collectConflicts(metadata);
    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }
  return change;
}

Changes$1.prototype.validateChanges = function (opts) {
  var callback = opts.complete;
  var self = this;

  /* istanbul ignore else */
  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.validate(opts, function (err) {
      if (err) {
        return callback(err);
      }
      self.doChanges(opts);
    });
  } else {
    self.doChanges(opts);
  }
};

Changes$1.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;

  opts = clone(opts);
  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }
  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }
  if (!opts.since) {
    opts.since = 0;
  }
  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      /* istanbul ignore if */
      if (self.isCancelled) {
        callback(null, {status: 'cancelled'});
        return;
      }
      opts.since = info.update_seq;
      self.doChanges(opts);
    }, callback);
    return;
  }

  /* istanbul ignore else */
  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.normalize(opts);
    if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
      return PouchDB._changesFilterPlugin.filter(this, opts);
    }
  } else {
    ['doc_ids', 'filter', 'selector', 'view'].forEach(function (key) {
      if (key in opts) {
        guardedConsole('warn',
          'The "' + key + '" option was passed in to changes/replicate, ' +
          'but pouchdb-changes-filter plugin is not installed, so it ' +
          'was ignored. Please install the plugin to enable filtering.'
        );
      }
    });
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  }

  // 0 and 1 should return 1 document
  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;
  var newPromise = this.db._changes(opts);
  /* istanbul ignore else */
  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};

/*
 * A generic pouch adapter
 */

function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

// Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error
function yankError(callback, docId) {
  return function (err, results) {
    if (err || (results[0] && results[0].error)) {
      err = err || results[0];
      err.docId = docId;
      callback(err);
    } else {
      callback(null, results.length ? results[0]  : results);
    }
  };
}

// clean docs given to us by the user
function cleanDocs(docs) {
  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];
    if (doc._deleted) {
      delete doc._attachments; // ignore atts for deleted docs
    } else if (doc._attachments) {
      // filter out extraneous keys from _attachments
      var atts = Object.keys(doc._attachments);
      for (var j = 0; j < atts.length; j++) {
        var att = atts[j];
        doc._attachments[att] = pick(doc._attachments[att],
          ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
      }
    }
  }
}

// compare two docs, first by _id then by _rev
function compareByIdThenRev(a, b) {
  var idCompare = compare(a._id, b._id);
  if (idCompare !== 0) {
    return idCompare;
  }
  var aStart = a._revisions ? a._revisions.start : 0;
  var bStart = b._revisions ? b._revisions.start : 0;
  return compare(aStart, bStart);
}

// for every node in a revision tree computes its distance from the closest
// leaf
function computeHeight(revs) {
  var height = {};
  var edges = [];
  traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev$$1 = pos + "-" + id;
    if (isLeaf) {
      height[rev$$1] = 0;
    }
    if (prnt !== undefined) {
      edges.push({from: prnt, to: rev$$1});
    }
    return rev$$1;
  });

  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysParse(opts) {
  var keys =  ('limit' in opts) ?
    opts.keys.slice(opts.skip, opts.limit + opts.skip) :
    (opts.skip > 0) ? opts.keys.slice(opts.skip) : opts.keys;
  opts.keys = keys;
  opts.skip = 0;
  delete opts.limit;
  if (opts.descending) {
    keys.reverse();
    opts.descending = false;
  }
}

// all compaction is done in a queue, to avoid attaching
// too many listeners at once
function doNextCompaction(self) {
  var task = self._compactionQueue[0];
  var opts = task.opts;
  var callback = task.callback;
  self.get('_local/compaction').catch(function () {
    return false;
  }).then(function (doc) {
    if (doc && doc.last_seq) {
      opts.last_seq = doc.last_seq;
    }
    self._compact(opts, function (err, res) {
      /* istanbul ignore if */
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
      immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        self._compactionQueue.shift();
        if (self._compactionQueue.length) {
          doNextCompaction(self);
        }
      });
    });
  });
}

function attachmentNameError(name) {
  if (name.charAt(0) === '_') {
    return name + ' is not a valid attachment name, attachment ' +
      'names cannot start with \'_\'';
  }
  return false;
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(AbstractPouchDB, events__WEBPACK_IMPORTED_MODULE_6___default.a);

function AbstractPouchDB() {
  events__WEBPACK_IMPORTED_MODULE_6___default.a.call(this);

  // re-bind prototyped methods
  for (var p in AbstractPouchDB.prototype) {
    if (typeof this[p] === 'function') {
      this[p] = this[p].bind(this);
    }
  }
}

AbstractPouchDB.prototype.post =
  adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return callback(createError(NOT_AN_OBJECT));
  }
  this.bulkDocs({docs: [doc]}, opts, yankError(callback, doc._id));
});

AbstractPouchDB.prototype.put = adapterFun('put', function (doc, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return cb(createError(NOT_AN_OBJECT));
  }
  invalidIdError(doc._id);
  if (isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, cb);
    } else {
      return this._putLocal(doc, cb);
    }
  }
  var self = this;
  if (opts.force && doc._rev) {
    transformForceOptionToNewEditsOption();
    putDoc(function (err) {
      var result = err ? null : {ok: true, id: doc._id, rev: doc._rev};
      cb(err, result);
    });
  } else {
    putDoc(cb);
  }

  function transformForceOptionToNewEditsOption() {
    var parts = doc._rev.split('-');
    var oldRevId = parts[1];
    var oldRevNum = parseInt(parts[0], 10);

    var newRevNum = oldRevNum + 1;
    var newRevId = rev();

    doc._revisions = {
      start: newRevNum,
      ids: [newRevId, oldRevId]
    };
    doc._rev = newRevNum + '-' + newRevId;
    opts.new_edits = false;
  }
  function putDoc(next) {
    if (typeof self._put === 'function' && opts.new_edits !== false) {
      self._put(doc, opts, next);
    } else {
      self.bulkDocs({docs: [doc]}, opts, yankError(next, doc._id));
    }
  }
});

AbstractPouchDB.prototype.putAttachment =
  adapterFun('putAttachment', function (docId, attachmentId, rev$$1,
                                              blob, type) {
  var api = this;
  if (typeof type === 'function') {
    type = blob;
    blob = rev$$1;
    rev$$1 = null;
  }
  // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267
  /* istanbul ignore if */
  if (typeof type === 'undefined') {
    type = blob;
    blob = rev$$1;
    rev$$1 = null;
  }
  if (!type) {
    guardedConsole('warn', 'Attachment', attachmentId, 'on document', docId, 'is missing content_type');
  }

  function createAttachment(doc) {
    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob,
      revpos: ++prevrevpos
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev$$1) {
      throw createError(REV_CONFLICT);
    }

    return createAttachment(doc);
  }, function (err) {
     // create new doc
    /* istanbul ignore else */
    if (err.reason === MISSING_DOC.message) {
      return createAttachment({_id: docId});
    } else {
      throw err;
    }
  });
});

AbstractPouchDB.prototype.removeAttachment =
  adapterFun('removeAttachment', function (docId, attachmentId, rev$$1,
                                                 callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    /* istanbul ignore if */
    if (err) {
      callback(err);
      return;
    }
    if (obj._rev !== rev$$1) {
      callback(createError(REV_CONFLICT));
      return;
    }
    /* istanbul ignore if */
    if (!obj._attachments) {
      return callback();
    }
    delete obj._attachments[attachmentId];
    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }
    self.put(obj, callback);
  });
});

AbstractPouchDB.prototype.remove =
  adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;
  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;
    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }
  opts = opts || {};
  opts.was_delete = true;
  var newDoc = {_id: doc._id, _rev: (doc._rev || opts.rev)};
  newDoc._deleted = true;
  if (isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }
  this.bulkDocs({docs: [newDoc]}, opts, yankError(callback, newDoc._id));
});

AbstractPouchDB.prototype.revsDiff =
  adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new ExportedMap();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {missing: []});
    }
    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx,
      opts) {
        var rev$$1 = pos + '-' + revHash;
        var idx = missingForId.indexOf(rev$$1);
        if (idx === -1) {
          return;
        }

        missingForId.splice(idx, 1);
        /* istanbul ignore if */
        if (opts.status !== 'available') {
          addToMissing(id, rev$$1);
        }
      });

    // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree
    missingForId.forEach(function (rev$$1) {
      addToMissing(id, rev$$1);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {missing: req[id]});
      } else if (err) {
        /* istanbul ignore next */
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
});

// _bulk_get API for faster replication, as described in
// https://github.com/apache/couchdb-chttpd/pull/33
// At the "abstract" level, it will just run multiple get()s in
// parallel, because this isn't much of a performance cost
// for local databases (except the cost of multiple transactions, which is
// small). The http adapter overrides this in order
// to do a more efficient single HTTP request.
AbstractPouchDB.prototype.bulkGet =
  adapterFun('bulkGet', function (opts, callback) {
  bulkGet(this, opts, callback);
});

// compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height
AbstractPouchDB.prototype.compactDocument =
  adapterFun('compactDocument', function (docId, maxHeight, callback) {
  var self = this;
  this._getRevisionTree(docId, function (err, revTree) {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }
    var height = computeHeight(revTree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev$$1) {
      if (height[rev$$1] > maxHeight) {
        candidates.push(rev$$1);
      }
    });

    traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev$$1 = pos + '-' + revHash;
      if (opts.status === 'available' && candidates.indexOf(rev$$1) !== -1) {
        revs.push(rev$$1);
      }
    });
    self._doCompaction(docId, revs, callback);
  });
});

// compact the whole database using single document
// compaction
AbstractPouchDB.prototype.compact =
  adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  opts = opts || {};

  self._compactionQueue = self._compactionQueue || [];
  self._compactionQueue.push({opts: opts, callback: callback});
  if (self._compactionQueue.length === 1) {
    doNextCompaction(self);
  }
});
AbstractPouchDB.prototype._compact = function (opts, callback) {
  var self = this;
  var changesOpts = {
    return_docs: false,
    last_seq: opts.last_seq || 0
  };
  var promises = [];

  function onChange(row) {
    promises.push(self.compactDocument(row.id, 0));
  }
  function onComplete(resp) {
    var lastSeq = resp.last_seq;
    Promise.all(promises).then(function () {
      return upsert(self, '_local/compaction', function deltaFunc(doc) {
        if (!doc.last_seq || doc.last_seq < lastSeq) {
          doc.last_seq = lastSeq;
          return doc;
        }
        return false; // somebody else got here first, don't update
      });
    }).then(function () {
      callback(null, {ok: true});
    }).catch(callback);
  }
  self.changes(changesOpts)
    .on('change', onChange)
    .on('complete', onComplete)
    .on('error', callback);
};

/* Begin api wrappers. Specific functionality to storage belongs in the
   _[method] */
AbstractPouchDB.prototype.get = adapterFun('get', function (id, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  if (typeof id !== 'string') {
    return cb(createError(INVALID_ID));
  }
  if (isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, cb);
  }
  var leaves = [], self = this;

  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    /* istanbul ignore if */
    if (!count) {
      return cb(null, result);
    }

    // order with open_revs is unspecified
    leaves.forEach(function (leaf) {
      self.get(id, {
        rev: leaf,
        revs: opts.revs,
        latest: opts.latest,
        attachments: opts.attachments,
        binary: opts.binary
      }, function (err, doc) {
        if (!err) {
          // using latest=true can produce duplicates
          var existing;
          for (var i = 0, l = result.length; i < l; i++) {
            if (result[i].ok && result[i].ok._rev === doc._rev) {
              existing = true;
              break;
            }
          }
          if (!existing) {
            result.push({ok: doc});
          }
        } else {
          result.push({missing: leaf});
        }
        count--;
        if (!count) {
          cb(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        /* istanbul ignore if */
        if (err) {
          return cb(err);
        }
        leaves = collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;
        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i];
          // looks like it's the only thing couchdb checks
          if (!(typeof (l) === "string" && /^\d+-/.test(l))) {
            return cb(createError(INVALID_REV));
          }
        }
        finishOpenRevs();
      } else {
        return cb(createError(UNKNOWN_ERROR, 'function_clause'));
      }
    }
    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    if (err) {
      err.docId = id;
      return cb(err);
    }

    var doc = result.doc;
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = collectConflicts(metadata);
      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (isDeleted(metadata, doc._rev)) {
      doc._deleted = true;
    }

    if (opts.revs || opts.revs_info) {
      var splittedRev = doc._rev.split('-');
      var revNo       = parseInt(splittedRev[0], 10);
      var revHash     = splittedRev[1];

      var paths = rootToLeaf(metadata.rev_tree);
      var path = null;

      for (var i = 0; i < paths.length; i++) {
        var currentPath = paths[i];
        var hashIndex = currentPath.ids.map(function (x) { return x.id; })
          .indexOf(revHash);
        var hashFoundAtRevPos = hashIndex === (revNo - 1);

        if (hashFoundAtRevPos || (!path && hashIndex !== -1)) {
          path = currentPath;
        }
      }

      /* istanbul ignore if */
      if (!path) {
        err = new Error('invalid rev tree');
        err.docId = id;
        return cb(err);
      }

      var indexOfRev = path.ids.map(function (x) { return x.id; })
        .indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: (path.pos + path.ids.length) - 1,
          ids: path.ids.map(function (rev$$1) {
            return rev$$1.id;
          })
        };
      }
      if (opts.revs_info) {
        var pos =  path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev$$1) {
          pos--;
          return {
            rev: pos + '-' + rev$$1.id,
            status: rev$$1.opts.status
          };
        });
      }
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;
      if (count === 0) {
        return cb(null, doc);
      }
      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(doc._id, key, attachments[key], {
          // Previously the revision handling was done in adapter.js
          // getAttachment, however since idb-next doesnt we need to
          // pass the rev through
          rev: doc._rev,
          binary: opts.binary,
          ctx: ctx
        }, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          delete att.length;
          if (!--count) {
            cb(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          /* istanbul ignore else */
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }
      cb(null, doc);
    }
  });
});

// TODO: I dont like this, it forces an extra read for every
// attachment read and enforces a confusing api between
// adapter.js and the adapter implementation
AbstractPouchDB.prototype.getAttachment =
  adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
  var self = this;
  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }
  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }
    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      opts.binary = true;
      self._getAttachment(docId, attachmentId,
                          res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(createError(MISSING_DOC));
    }
  });
});

AbstractPouchDB.prototype.allDocs =
  adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;
  if (opts.start_key) {
    opts.startkey = opts.start_key;
  }
  if (opts.end_key) {
    opts.endkey = opts.end_key;
  }
  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }
    var incompatibleOpt =
      ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];
    if (incompatibleOpt) {
      callback(createError(QUERY_PARSE_ERROR,
        'Query parameter `' + incompatibleOpt +
        '` is not compatible with multi-get'
      ));
      return;
    }
    if (!isRemote(this)) {
      allDocsKeysParse(opts);
      if (opts.keys.length === 0) {
        return this._allDocs({limit: 0}, callback);
      }
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  // By default set return_docs to false if the caller has opts.live = true,
  // this will prevent us from collecting the set of changes indefinitely
  // resulting in growing memory
  opts.return_docs = ('return_docs' in opts) ? opts.return_docs : !opts.live;

  return new Changes$1(this, opts, callback);
};

AbstractPouchDB.prototype.close = adapterFun('close', function (callback) {
  this._closed = true;
  this.emit('closed');
  return this._close(callback);
});

AbstractPouchDB.prototype.info = adapterFun('info', function (callback) {
  var self = this;
  this._info(function (err, info) {
    if (err) {
      return callback(err);
    }
    // assume we know better than the adapter, unless it informs us
    info.db_name = info.db_name || self.name;
    info.auto_compaction = !!(self.auto_compaction && !isRemote(self));
    info.adapter = self.adapter;
    callback(null, info);
  });
});

AbstractPouchDB.prototype.id = adapterFun('id', function (callback) {
  return this._id(callback);
});

/* istanbul ignore next */
AbstractPouchDB.prototype.type = function () {
  return (typeof this._type === 'function') ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs =
  adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(createError(MISSING_BULK_DOCS));
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
      return callback(createError(NOT_AN_OBJECT));
    }
  }

  var attachmentError;
  req.docs.forEach(function (doc) {
    if (doc._attachments) {
      Object.keys(doc._attachments).forEach(function (name) {
        attachmentError = attachmentError || attachmentNameError(name);
        if (!doc._attachments[name].content_type) {
          guardedConsole('warn', 'Attachment', name, 'on document', doc._id, 'is missing content_type');
        }
      });
    }
  });

  if (attachmentError) {
    return callback(createError(BAD_REQUEST, attachmentError));
  }

  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  var adapter = this;
  if (!opts.new_edits && !isRemote(adapter)) {
    // ensure revisions of the same doc are sorted, so that
    // the local adapter processes them correctly (#2935)
    req.docs.sort(compareByIdThenRev);
  }

  cleanDocs(req.docs);

  // in the case of conflicts, we want to return the _ids to the user
  // however, the underlying adapter may destroy the docs array, so
  // create a copy here
  var ids = req.docs.map(function (doc) {
    return doc._id;
  });

  return this._bulkDocs(req, opts, function (err, res) {
    if (err) {
      return callback(err);
    }
    if (!opts.new_edits) {
      // this is what couch does when new_edits is false
      res = res.filter(function (x) {
        return x.error;
      });
    }
    // add ids for error/conflict responses (not required for CouchDB)
    if (!isRemote(adapter)) {
      for (var i = 0, l = res.length; i < l; i++) {
        res[i].id = res[i].id || ids[i];
      }
    }

    callback(null, res);
  });
});

AbstractPouchDB.prototype.registerDependentDatabase =
  adapterFun('registerDependentDatabase', function (dependentDb,
                                                          callback) {
  var depDB = new this.constructor(dependentDb, this.__opts);

  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};
    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }
    doc.dependentDbs[dependentDb] = true;
    return doc;
  }
  upsert(this, '_local/_pouch_dependentDbs', diffFun)
    .then(function () {
      callback(null, {db: depDB});
    }).catch(callback);
});

AbstractPouchDB.prototype.destroy =
  adapterFun('destroy', function (opts, callback) {

  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

  function destroyDb() {
    // call destroy method of the particular adaptor
    self._destroy(opts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      self._destroyed = true;
      self.emit('destroyed');
      callback(null, resp || { 'ok': true });
    });
  }

  if (isRemote(self)) {
    // no need to check for dependent DBs if it's a remote DB
    return destroyDb();
  }

  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
    if (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        return callback(err);
      } else { // no dependencies
        return destroyDb();
      }
    }
    var dependentDbs = localDoc.dependentDbs;
    var PouchDB = self.constructor;
    var deletedMap = Object.keys(dependentDbs).map(function (name) {
      // use_prefix is only false in the browser
      /* istanbul ignore next */
      var trueName = usePrefix ?
        name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
      return new PouchDB(trueName, self.__opts).destroy();
    });
    Promise.all(deletedMap).then(destroyDb, callback);
  });
});

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var fun;
  if (this.failed) {
    while ((fun = this.queue.shift())) {
      fun(this.failed);
    }
  } else {
    while ((fun = this.queue.shift())) {
      fun();
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  this.isReady = true;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (fun) {
  this.queue.push(fun);
  if (this.failed) {
    this.execute();
  }
};

function parseAdapter(name, opts) {
  var match = name.match(/([a-z-]*):\/\/(.*)/);
  if (match) {
    // the http adapter expects the fully qualified name
    return {
      name: /https?/.test(match[1]) ? match[1] + '://' + match[2] : match[2],
      adapter: match[1]
    };
  }

  var adapters = PouchDB.adapters;
  var preferredAdapters = PouchDB.preferredAdapters;
  var prefix = PouchDB.prefix;
  var adapterName = opts.adapter;

  if (!adapterName) { // automatically determine adapter
    for (var i = 0; i < preferredAdapters.length; ++i) {
      adapterName = preferredAdapters[i];
      // check for browsers that have been upgraded from websql-only to websql+idb
      /* istanbul ignore if */
      if (adapterName === 'idb' && 'websql' in adapters &&
          hasLocalStorage() && localStorage['_pouch__websqldb_' + prefix + name]) {
        // log it, because this can be confusing during development
        guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' +
          ' avoid data loss, because it was already opened with WebSQL.');
        continue; // keep using websql to avoid user data loss
      }
      break;
    }
  }

  var adapter = adapters[adapterName];

  // if adapter is invalid, then an error will be thrown later
  var usePrefix = (adapter && 'use_prefix' in adapter) ?
    adapter.use_prefix : true;

  return {
    name: usePrefix ? (prefix + name) : name,
    adapter: adapterName
  };
}

// OK, so here's the deal. Consider this code:
//     var db1 = new PouchDB('foo');
//     var db2 = new PouchDB('foo');
//     db1.destroy();
// ^ these two both need to emit 'destroyed' events,
// as well as the PouchDB constructor itself.
// So we have one db object (whichever one got destroy() called on it)
// responsible for emitting the initial event, which then gets emitted
// by the constructor, which then broadcasts it to any other dbs
// that may have been created with the same name.
function prepareForDestruction(self) {

  function onDestroyed(from_constructor) {
    self.removeListener('closed', onClosed);
    if (!from_constructor) {
      self.constructor.emit('destroyed', self.name);
    }
  }

  function onClosed() {
    self.removeListener('destroyed', onDestroyed);
    self.constructor.emit('unref', self);
  }

  self.once('destroyed', onDestroyed);
  self.once('closed', onClosed);
  self.constructor.emit('ref', self);
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(PouchDB, AbstractPouchDB);
function PouchDB(name, opts) {
  // In Node our test suite only tests this for PouchAlt unfortunately
  /* istanbul ignore if */
  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts);
  }

  var self = this;
  opts = opts || {};

  if (name && typeof name === 'object') {
    opts = name;
    name = opts.name;
    delete opts.name;
  }

  if (opts.deterministic_revs === undefined) {
    opts.deterministic_revs = true;
  }

  this.__opts = opts = clone(opts);

  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;

  if (typeof name !== 'string') {
    throw new Error('Missing/invalid DB name');
  }

  var prefixedName = (opts.prefix || '') + name;
  var backend = parseAdapter(prefixedName, opts);

  opts.name = backend.name;
  opts.adapter = opts.adapter || backend.adapter;

  self.name = name;
  self._adapter = opts.adapter;
  PouchDB.emit('debug', ['adapter', 'Picked adapter: ', opts.adapter]);

  if (!PouchDB.adapters[opts.adapter] ||
      !PouchDB.adapters[opts.adapter].valid()) {
    throw new Error('Invalid Adapter: ' + opts.adapter);
  }

  AbstractPouchDB.call(self);
  self.taskqueue = new TaskQueue();

  self.adapter = opts.adapter;

  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
    if (err) {
      return self.taskqueue.fail(err);
    }
    prepareForDestruction(self);

    self.emit('created', self);
    PouchDB.emit('created', self.name);
    self.taskqueue.ready(self);
  });

}

// AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed
var a = (typeof AbortController !== 'undefined')
    ? AbortController
    : function () { return {abort: function () {}}; };

var f$1 = fetch;
var h = Headers;

PouchDB.adapters = {};
PouchDB.preferredAdapters = [];

PouchDB.prefix = '_pouch_';

var eventEmitter = new events__WEBPACK_IMPORTED_MODULE_6___default.a();

function setUpEventEmitter(Pouch) {
  Object.keys(events__WEBPACK_IMPORTED_MODULE_6___default.a.prototype).forEach(function (key) {
    if (typeof events__WEBPACK_IMPORTED_MODULE_6___default.a.prototype[key] === 'function') {
      Pouch[key] = eventEmitter[key].bind(eventEmitter);
    }
  });

  // these are created in constructor.js, and allow us to notify each DB with
  // the same name that it was destroyed, via the constructor object
  var destructListeners = Pouch._destructionListeners = new ExportedMap();

  Pouch.on('ref', function onConstructorRef(db) {
    if (!destructListeners.has(db.name)) {
      destructListeners.set(db.name, []);
    }
    destructListeners.get(db.name).push(db);
  });

  Pouch.on('unref', function onConstructorUnref(db) {
    if (!destructListeners.has(db.name)) {
      return;
    }
    var dbList = destructListeners.get(db.name);
    var pos = dbList.indexOf(db);
    if (pos < 0) {
      /* istanbul ignore next */
      return;
    }
    dbList.splice(pos, 1);
    if (dbList.length > 1) {
      /* istanbul ignore next */
      destructListeners.set(db.name, dbList);
    } else {
      destructListeners.delete(db.name);
    }
  });

  Pouch.on('destroyed', function onConstructorDestroyed(name) {
    if (!destructListeners.has(name)) {
      return;
    }
    var dbList = destructListeners.get(name);
    destructListeners.delete(name);
    dbList.forEach(function (db) {
      db.emit('destroyed',true);
    });
  });
}

setUpEventEmitter(PouchDB);

PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
  /* istanbul ignore else */
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;
    if (addToPreferredAdapters) {
      PouchDB.preferredAdapters.push(id);
    }
  }
};

PouchDB.plugin = function (obj) {
  if (typeof obj === 'function') { // function style for plugins
    obj(PouchDB);
  } else if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
    throw new Error('Invalid plugin: got "' + obj + '", expected an object or a function');
  } else {
    Object.keys(obj).forEach(function (id) { // object style for plugins
      PouchDB.prototype[id] = obj[id];
    });
  }
  if (this.__defaults) {
    PouchDB.__defaults = $inject_Object_assign({}, this.__defaults);
  }
  return PouchDB;
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts) {
    if (!(this instanceof PouchAlt)) {
      return new PouchAlt(name, opts);
    }

    opts = opts || {};

    if (name && typeof name === 'object') {
      opts = name;
      name = opts.name;
      delete opts.name;
    }

    opts = $inject_Object_assign({}, PouchAlt.__defaults, opts);
    PouchDB.call(this, name, opts);
  }

  inherits__WEBPACK_IMPORTED_MODULE_5___default()(PouchAlt, PouchDB);

  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  });

  // make default options transitive
  // https://github.com/pouchdb/pouchdb/issues/5922
  PouchAlt.__defaults = $inject_Object_assign({}, this.__defaults, defaultOpts);

  return PouchAlt;
};

PouchDB.fetch = function (url, opts) {
  return f$1(url, opts);
};

// managed automatically by set-version.js
var version = "7.2.2";

// this would just be "return doc[field]", but fields
// can be "deep" due to dot notation
function getFieldFromDoc(doc, parsedField) {
  var value = doc;
  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];
    if (!value) {
      break;
    }
  }
  return value;
}

function compare$1(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

// Converts a string in dot notation to an array of its components, with backslash escaping
function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';
  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];
    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') { // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else { // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else { // normal character
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];
function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
}


// flatten an array of selectors joined by an $and operator
function mergeAndedSelectors(selectors) {

  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};

  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];
      if (typeof matcher !== 'object') {
        matcher = {$eq: matcher};
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }
          fieldMatchers[operator] = value;
        });
      }
    });
  });

  return res;
}



// collapse logically equivalent gt/gte values
function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }
  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) { // more specificity
        fieldMatchers.$gte = value;
      }
    } else { // operator === '$gt'
      if (value >= fieldMatchers.$gte) { // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) { // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else { // operator === '$gt'
      if (value > fieldMatchers.$gt) { // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
}

// collapse logically equivalent lt/lte values
function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }
  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) { // more specificity
        fieldMatchers.$lte = value;
      }
    } else { // operator === '$gt'
      if (value <= fieldMatchers.$lte) { // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) { // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else { // operator === '$gt'
      if (value < fieldMatchers.$lt) { // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
}

// combine $ne values into one array
function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else { // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
}

// add $eq into the mix
function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
}

//#7458: execute function mergeAndedSelectors on nested $and
function mergeAndedSelectorsNested(obj) {
    for (var prop in obj) {
        if (Array.isArray(obj)) {
            for (var i in obj) {
                if (obj[i]['$and']) {
                    obj[i] = mergeAndedSelectors(obj[i]['$and']);
                }
            }
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            mergeAndedSelectorsNested(value); // <- recursive call
        }
    }
    return obj;
}

//#7458: determine id $and is present in selector (at any level)
function isAndInSelector(obj, isAnd) {
    for (var prop in obj) {
        if (prop === '$and') {
            isAnd = true;
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            isAnd = isAndInSelector(value, isAnd); // <- recursive call
        }
    }
    return isAnd;
}

//
// normalize the selector
//
function massageSelector(input) {
  var result = clone(input);
  var wasAnded = false;
    //#7458: if $and is present in selector (at any level) merge nested $and
    if (isAndInSelector(result, false)) {
        result = mergeAndedSelectorsNested(result);
        if ('$and' in result) {
            result = mergeAndedSelectors(result['$and']);
        }
        wasAnded = true;
    }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];
          if (typeof matcher !== 'object' || matcher === null) {
            subSelector[field] = {$eq: matcher};
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (typeof matcher !== 'object' || matcher === null) {
      matcher = {$eq: matcher};
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }
    result[field] = matcher;
  }

  return result;
}

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */
  while (padding.length < targetLength) {
    padding += padWith;
  }
  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE
var MAGNITUDE_DIGITS = 3; // ditto
var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {

  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);

  var ai = collationIndex(a);
  var bi = collationIndex(b);
  if ((ai - bi) !== 0) {
    return ai - bi;
  }
  switch (typeof a) {
    case 'number':
      return a - b;
    case 'boolean':
      return a < b ? -1 : 1;
    case 'string':
      return stringCollate(a, b);
  }
  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
}

// couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.
function normalizeKey(key) {
  switch (typeof key) {
    case 'undefined':
      return null;
    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }
      return key;
    case 'object':
      var origKey = key;
      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);
        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
      /* istanbul ignore next */
      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) { // generic object
        key = {};
        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];
            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }
  }
  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (typeof key) {
      case 'boolean':
        return key ? 1 : 0;
      case 'number':
        return numToIndexableString(key);
      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2
        /* eslint-disable no-control-regex */
        return key
          .replace(/\u0002/g, '\u0002\u0002')
          .replace(/\u0001/g, '\u0001\u0002')
          .replace(/\u0000/g, '\u0001\u0001');
        /* eslint-enable no-control-regex */
      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';
        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) +
                toIndexableString(key[objKey]);
          }
        }
        return result;
    }
  }
  return '';
}

// convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.
function toIndexableString(key) {
  var zero = '\u0000';
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';
  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */
    if (neg) {
      magnitude = -magnitude;
    }
    i += MAGNITUDE_DIGITS;
    while (true) {
      var ch = str[i];
      if (ch === '\u0000') {
        break;
      } else {
        numAsString += ch;
      }
      i++;
    }
    numAsString = numAsString.split('.');
    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */
    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */
    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }
  return {num: num, length : i - originalIdx};
}

// move up the stack while parsing
// this function moved outside of parseIndexableString for performance
function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];
    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }
    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;
    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) { // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;

  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
  while (true) {
    var collationIndex = str[i++];
    if (collationIndex === '\u0000') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;
      case '2':
        stack.push(str[i] === '1');
        i++;
        break;
      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;
      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
        while (true) {
          var ch = str[i];
          if (ch === '\u0000') {
            break;
          }
          parsedStr += ch;
          i++;
        }
        // perform the reverse of the order-preserving replacement
        // algorithm (see above)
        /* eslint-disable no-control-regex */
        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000')
          .replace(/\u0001\u0002/g, '\u0001')
          .replace(/\u0002\u0002/g, '\u0002');
        /* eslint-enable no-control-regex */
        stack.push(parsedStr);
        break;
      case '5':
        var arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '6':
        var objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      /* istanbul ignore next */
      default:
        throw new Error(
          'bad collationIndex or unexpectedly reached end of input: ' +
            collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);
    if (sort !== 0) {
      return sort;
    }
  }
  return (a.length === b.length) ? 0 :
    (a.length > b.length) ? 1 : -1;
}
function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return (a === b) ? 0 : ((a > b) ? 1 : -1);
}
function objectCollate(a, b) {
  var ak = Object.keys(a), bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);
  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);
    if (sort !== 0) {
      return sort;
    }
    // if the keys are equal sort the values
    sort = collate(a[ak[i]], b[bk[i]]);
    if (sort !== 0) {
      return sort;
    }

  }
  return (ak.length === bk.length) ? 0 :
    (ak.length > bk.length) ? 1 : -1;
}
// The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null
function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(typeof x);
  //false if -1 otherwise true, but fast!!!!1
  if (~idx) {
    if (x === null) {
      return 1;
    }
    if (Array.isArray(x)) {
      return 5;
    }
    return idx < 3 ? (idx + 2) : (idx + 3);
  }
  /* istanbul ignore next */
  if (Array.isArray(x)) {
    return 5;
  }
}

// conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse
function numToIndexableString(num) {

  if (num === 0) {
    return '1';
  }

  // convert number to exponential format for easier and
  // more succinct string sorting
  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);

  var neg = num < 0;

  var result = neg ? '0' : '2';

  // first sort by magnitude
  // it's easier if all magnitudes are positive
  var magForComparison = ((neg ? -magnitude : magnitude) - MIN_MAGNITUDE);
  var magString = padLeft((magForComparison).toString(), '0', MAGNITUDE_DIGITS);

  result += SEP + magString;

  // then sort by the factor
  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)
  /* istanbul ignore next */
  if (neg) { // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20);

  // strip zeros from the end
  factorStr = factorStr.replace(/\.?0+$/, '');

  result += SEP + factorStr;

  return result;
}

// create a comparator based on the sort object
function createFieldSorter(sort) {

  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = collate(aFieldValues, bFieldValues);
    if (collation !== 0) {
      return collation;
    }
    // this is what mango seems to do
    return compare$1(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);
    if (typeof requestDef.sort[0] !== 'string' &&
        getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }
  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);
    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  }

  // is matcher an object, if so continue recursion
  if (typeof matcher === 'object') {
    return Object.keys(matcher).every(function (userOperator) {
      var userValue = matcher[userOperator];
      return match(userOperator, doc, userValue, parsedField, docFieldValue);
    });
  }

  // no more depth, No need to recurse further
  return matcher === docFieldValue;
}

function matchCominationalSelector(field, matcher, doc) {

  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  }

  //`$nor`
  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });

}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator +
      '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' +
      '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }
  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];
  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor ) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod ) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);

  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {

  switch (userValue) {
    case 'null':
      return docFieldValue === null;
    case 'boolean':
      return typeof (docFieldValue) === 'boolean';
    case 'number':
      return typeof (docFieldValue) === 'number';
    case 'string':
      return typeof (docFieldValue) === 'string';
    case 'array':
      return docFieldValue instanceof Array;
    case 'object':
      return ({}).toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' +
                  'Please use one of object, string, array, number, boolean or null.');

}

var matchers = {

  '$elemMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },

  '$allMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    /* istanbul ignore next */
    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },

  '$eq': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) === 0;
  },

  '$gte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) >= 0;
  },

  '$gt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) > 0;
  },

  '$lte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) <= 0;
  },

  '$lt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) < 0;
  },

  '$exists': function (doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },

  '$mod': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },

  '$ne': function (doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return collate(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },

  '$nin': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },

  '$size': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },

  '$all': function (doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },

  '$regex': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },

  '$type': function (doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
};

// return true if the given doc matches the supplied selector
function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (typeof selector !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };

  var rowsMatched = filterInMemoryFields([row], { 'selector': selector }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}

function evalFilter(input) {
  return scopeEval('"use strict";\nreturn ' + input + ';', {});
}

function evalView(input) {
  var code = [
    'return function(doc) {',
    '  "use strict";',
    '  var emitted = false;',
    '  var emit = function (a, b) {',
    '    emitted = true;',
    '  };',
    '  var view = ' + input + ';',
    '  view(doc);',
    '  if (emitted) {',
    '    return true;',
    '  }',
    '};'
  ].join('\n');

  return scopeEval(code, {});
}

function validate(opts, callback) {
  if (opts.selector) {
    if (opts.filter && opts.filter !== '_selector') {
      var filterName = typeof opts.filter === 'string' ?
        opts.filter : 'function';
      return callback(new Error('selector invalid for filter "' + filterName + '"'));
    }
  }
  callback();
}

function normalize(opts) {
  if (opts.view && !opts.filter) {
    opts.filter = '_view';
  }

  if (opts.selector && !opts.filter) {
    opts.filter = '_selector';
  }

  if (opts.filter && typeof opts.filter === 'string') {
    if (opts.filter === '_view') {
      opts.view = normalizeDesignDocFunctionName(opts.view);
    } else {
      opts.filter = normalizeDesignDocFunctionName(opts.filter);
    }
  }
}

function shouldFilter(changesHandler, opts) {
  return opts.filter && typeof opts.filter === 'string' &&
    !opts.doc_ids && !isRemote(changesHandler.db);
}

function filter(changesHandler, opts) {
  var callback = opts.complete;
  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = createError(BAD_REQUEST,
        '`view` filter parameter not found or invalid.');
      return callback(err);
    }
    // fetch a view from a design doc, make it behave like a filter
    var viewName = parseDesignDocFunctionName(opts.view);
    changesHandler.db.get('_design/' + viewName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {status: 'cancelled'});
      }
      /* istanbul ignore next */
      if (err) {
        return callback(generateErrorFromResponse(err));
      }
      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] &&
        ddoc.views[viewName[1]].map;
      if (!mapFun) {
        return callback(createError(MISSING_DOC,
          (ddoc.views ? 'missing json key: ' + viewName[1] :
            'missing json key: views')));
      }
      opts.filter = evalView(mapFun);
      changesHandler.doChanges(opts);
    });
  } else if (opts.selector) {
    opts.filter = function (doc) {
      return matchesSelector(doc, opts.selector);
    };
    changesHandler.doChanges(opts);
  } else {
    // fetch a filter from a design doc
    var filterName = parseDesignDocFunctionName(opts.filter);
    changesHandler.db.get('_design/' + filterName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {status: 'cancelled'});
      }
      /* istanbul ignore next */
      if (err) {
        return callback(generateErrorFromResponse(err));
      }
      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];
      if (!filterFun) {
        return callback(createError(MISSING_DOC,
          ((ddoc && ddoc.filters) ? 'missing json key: ' + filterName[1]
            : 'missing json key: filters')));
      }
      opts.filter = evalFilter(filterFun);
      changesHandler.doChanges(opts);
    });
  }
}

function applyChangesFilterPlugin(PouchDB) {
  PouchDB._changesFilterPlugin = {
    validate: validate,
    normalize: normalize,
    shouldFilter: shouldFilter,
    filter: filter
  };
}

// TODO: remove from pouchdb-core (breaking)
PouchDB.plugin(applyChangesFilterPlugin);

PouchDB.version = version;

function toObject(array) {
  return array.reduce(function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}
// List of top level reserved words for doc
var reservedWords = toObject([
  '_id',
  '_rev',
  '_attachments',
  '_deleted',
  '_revisions',
  '_revs_info',
  '_conflicts',
  '_deleted_conflicts',
  '_local_seq',
  '_rev_tree',
  //replication documents
  '_replication_id',
  '_replication_state',
  '_replication_state_time',
  '_replication_state_reason',
  '_replication_stats',
  // Specific to Couchbase Sync Gateway
  '_removed'
]);

// List of reserved words that should end up the document
var dataWords = toObject([
  '_attachments',
  //replication documents
  '_replication_id',
  '_replication_state',
  '_replication_state_time',
  '_replication_state_reason',
  '_replication_stats'
]);

function parseRevisionInfo(rev$$1) {
  if (!/^\d+-/.test(rev$$1)) {
    return createError(INVALID_REV);
  }
  var idx = rev$$1.indexOf('-');
  var left = rev$$1.substring(0, idx);
  var right = rev$$1.substring(idx + 1);
  return {
    prefix: parseInt(left, 10),
    id: right
  };
}

function makeRevTreeFromRevisions(revisions, opts) {
  var pos = revisions.start - revisions.ids.length + 1;

  var revisionIds = revisions.ids;
  var ids = [revisionIds[0], opts, []];

  for (var i = 1, len = revisionIds.length; i < len; i++) {
    ids = [revisionIds[i], {status: 'missing'}, [ids]];
  }

  return [{
    pos: pos,
    ids: ids
  }];
}

// Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc
function parseDoc(doc, newEdits, dbOpts) {
  if (!dbOpts) {
    dbOpts = {
      deterministic_revs: true
    };
  }

  var nRevNum;
  var newRevId;
  var revInfo;
  var opts = {status: 'available'};
  if (doc._deleted) {
    opts.deleted = true;
  }

  if (newEdits) {
    if (!doc._id) {
      doc._id = uuid();
    }
    newRevId = rev(doc, dbOpts.deterministic_revs);
    if (doc._rev) {
      revInfo = parseRevisionInfo(doc._rev);
      if (revInfo.error) {
        return revInfo;
      }
      doc._rev_tree = [{
        pos: revInfo.prefix,
        ids: [revInfo.id, {status: 'missing'}, [[newRevId, opts, []]]]
      }];
      nRevNum = revInfo.prefix + 1;
    } else {
      doc._rev_tree = [{
        pos: 1,
        ids : [newRevId, opts, []]
      }];
      nRevNum = 1;
    }
  } else {
    if (doc._revisions) {
      doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
      nRevNum = doc._revisions.start;
      newRevId = doc._revisions.ids[0];
    }
    if (!doc._rev_tree) {
      revInfo = parseRevisionInfo(doc._rev);
      if (revInfo.error) {
        return revInfo;
      }
      nRevNum = revInfo.prefix;
      newRevId = revInfo.id;
      doc._rev_tree = [{
        pos: nRevNum,
        ids: [newRevId, opts, []]
      }];
    }
  }

  invalidIdError(doc._id);

  doc._rev = nRevNum + '-' + newRevId;

  var result = {metadata : {}, data : {}};
  for (var key in doc) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(doc, key)) {
      var specialKey = key[0] === '_';
      if (specialKey && !reservedWords[key]) {
        var error = createError(DOC_VALIDATION, key);
        error.message = DOC_VALIDATION.message + ': ' + key;
        throw error;
      } else if (specialKey && !dataWords[key]) {
        result.metadata[key.slice(1)] = doc[key];
      } else {
        result.data[key] = doc[key];
      }
    }
  }
  return result;
}

function parseBase64(data) {
  try {
    return thisAtob(data);
  } catch (e) {
    var err = createError(BAD_ARG,
      'Attachment is not a valid base64 string');
    return {error: err};
  }
}

function preprocessString(att, blobType, callback) {
  var asBinary = parseBase64(att.data);
  if (asBinary.error) {
    return callback(asBinary.error);
  }

  att.length = asBinary.length;
  if (blobType === 'blob') {
    att.data = binStringToBluffer(asBinary, att.content_type);
  } else if (blobType === 'base64') {
    att.data = thisBtoa(asBinary);
  } else { // binary
    att.data = asBinary;
  }
  binaryMd5(asBinary, function (result) {
    att.digest = 'md5-' + result;
    callback();
  });
}

function preprocessBlob(att, blobType, callback) {
  binaryMd5(att.data, function (md5) {
    att.digest = 'md5-' + md5;
    // size is for blobs (browser), length is for buffers (node)
    att.length = att.data.size || att.data.length || 0;
    if (blobType === 'binary') {
      blobToBinaryString(att.data, function (binString) {
        att.data = binString;
        callback();
      });
    } else if (blobType === 'base64') {
      blobToBase64(att.data, function (b64) {
        att.data = b64;
        callback();
      });
    } else {
      callback();
    }
  });
}

function preprocessAttachment(att, blobType, callback) {
  if (att.stub) {
    return callback();
  }
  if (typeof att.data === 'string') { // input is a base64 string
    preprocessString(att, blobType, callback);
  } else { // input is a blob
    preprocessBlob(att, blobType, callback);
  }
}

function preprocessAttachments(docInfos, blobType, callback) {

  if (!docInfos.length) {
    return callback();
  }

  var docv = 0;
  var overallErr;

  docInfos.forEach(function (docInfo) {
    var attachments = docInfo.data && docInfo.data._attachments ?
      Object.keys(docInfo.data._attachments) : [];
    var recv = 0;

    if (!attachments.length) {
      return done();
    }

    function processedAttachment(err) {
      overallErr = err;
      recv++;
      if (recv === attachments.length) {
        done();
      }
    }

    for (var key in docInfo.data._attachments) {
      if (docInfo.data._attachments.hasOwnProperty(key)) {
        preprocessAttachment(docInfo.data._attachments[key],
          blobType, processedAttachment);
      }
    }
  });

  function done() {
    docv++;
    if (docInfos.length === docv) {
      if (overallErr) {
        callback(overallErr);
      } else {
        callback();
      }
    }
  }
}

function updateDoc(revLimit, prev, docInfo, results,
                   i, cb, writeDoc, newEdits) {

  if (revExists(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
    results[i] = docInfo;
    return cb();
  }

  // sometimes this is pre-calculated. historically not always
  var previousWinningRev = prev.winningRev || winningRev(prev);
  var previouslyDeleted = 'deleted' in prev ? prev.deleted :
    isDeleted(prev, previousWinningRev);
  var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted :
    isDeleted(docInfo.metadata);
  var isRoot = /^1-/.test(docInfo.metadata.rev);

  if (previouslyDeleted && !deleted && newEdits && isRoot) {
    var newDoc = docInfo.data;
    newDoc._rev = previousWinningRev;
    newDoc._id = docInfo.metadata.id;
    docInfo = parseDoc(newDoc, newEdits);
  }

  var merged = merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);

  var inConflict = newEdits && ((
    (previouslyDeleted && deleted && merged.conflicts !== 'new_leaf') ||
    (!previouslyDeleted && merged.conflicts !== 'new_leaf') ||
    (previouslyDeleted && !deleted && merged.conflicts === 'new_branch')));

  if (inConflict) {
    var err = createError(REV_CONFLICT);
    results[i] = err;
    return cb();
  }

  var newRev = docInfo.metadata.rev;
  docInfo.metadata.rev_tree = merged.tree;
  docInfo.stemmedRevs = merged.stemmedRevs || [];
  /* istanbul ignore else */
  if (prev.rev_map) {
    docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
  }

  // recalculate
  var winningRev$$1 = winningRev(docInfo.metadata);
  var winningRevIsDeleted = isDeleted(docInfo.metadata, winningRev$$1);

  // calculate the total number of documents that were added/removed,
  // from the perspective of total_rows/doc_count
  var delta = (previouslyDeleted === winningRevIsDeleted) ? 0 :
    previouslyDeleted < winningRevIsDeleted ? -1 : 1;

  var newRevIsDeleted;
  if (newRev === winningRev$$1) {
    // if the new rev is the same as the winning rev, we can reuse that value
    newRevIsDeleted = winningRevIsDeleted;
  } else {
    // if they're not the same, then we need to recalculate
    newRevIsDeleted = isDeleted(docInfo.metadata, newRev);
  }

  writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted,
    true, delta, i, cb);
}

function rootIsMissing(docInfo) {
  return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
}

function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results,
                     writeDoc, opts, overallCallback) {

  // Default to 1000 locally
  revLimit = revLimit || 1000;

  function insertDoc(docInfo, resultsIdx, callback) {
    // Cant insert new deleted documents
    var winningRev$$1 = winningRev(docInfo.metadata);
    var deleted = isDeleted(docInfo.metadata, winningRev$$1);
    if ('was_delete' in opts && deleted) {
      results[resultsIdx] = createError(MISSING_DOC, 'deleted');
      return callback();
    }

    // 4712 - detect whether a new document was inserted with a _rev
    var inConflict = newEdits && rootIsMissing(docInfo);

    if (inConflict) {
      var err = createError(REV_CONFLICT);
      results[resultsIdx] = err;
      return callback();
    }

    var delta = deleted ? 0 : 1;

    writeDoc(docInfo, winningRev$$1, deleted, deleted, false,
      delta, resultsIdx, callback);
  }

  var newEdits = opts.new_edits;
  var idsToDocs = new ExportedMap();

  var docsDone = 0;
  var docsToDo = docInfos.length;

  function checkAllDocsDone() {
    if (++docsDone === docsToDo && overallCallback) {
      overallCallback();
    }
  }

  docInfos.forEach(function (currentDoc, resultsIdx) {

    if (currentDoc._id && isLocalId(currentDoc._id)) {
      var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
      api[fun](currentDoc, {ctx: tx}, function (err, res) {
        results[resultsIdx] = err || res;
        checkAllDocsDone();
      });
      return;
    }

    var id = currentDoc.metadata.id;
    if (idsToDocs.has(id)) {
      docsToDo--; // duplicate
      idsToDocs.get(id).push([currentDoc, resultsIdx]);
    } else {
      idsToDocs.set(id, [[currentDoc, resultsIdx]]);
    }
  });

  // in the case of new_edits, the user can provide multiple docs
  // with the same id. these need to be processed sequentially
  idsToDocs.forEach(function (docs, id) {
    var numDone = 0;

    function docWritten() {
      if (++numDone < docs.length) {
        nextDoc();
      } else {
        checkAllDocsDone();
      }
    }
    function nextDoc() {
      var value = docs[numDone];
      var currentDoc = value[0];
      var resultsIdx = value[1];

      if (fetchedDocs.has(id)) {
        updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results,
          resultsIdx, docWritten, writeDoc, newEdits);
      } else {
        // Ensure stemming applies to new writes as well
        var merged = merge([], currentDoc.metadata.rev_tree[0], revLimit);
        currentDoc.metadata.rev_tree = merged.tree;
        currentDoc.stemmedRevs = merged.stemmedRevs || [];
        insertDoc(currentDoc, resultsIdx, docWritten);
      }
    }
    nextDoc();
  });
}

// IndexedDB requires a versioned database structure, so we use the
// version here to manage migrations.
var ADAPTER_VERSION = 5;

// The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
// Keyed by document id
var DOC_STORE = 'document-store';
// BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id
var BY_SEQ_STORE = 'by-sequence';
// Where we store attachments
var ATTACH_STORE = 'attach-store';
// Where we store many-to-many relations
// between attachment digests and seqs
var ATTACH_AND_SEQ_STORE = 'attach-seq-store';

// Where we store database-wide meta data in a single record
// keyed by id: META_STORE
var META_STORE = 'meta-store';
// Where we store local documents
var LOCAL_STORE = 'local-store';
// Where we detect blob support
var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';

function safeJsonParse(str) {
  // This try/catch guards against stack overflow errors.
  // JSON.parse() is faster than vuvuzela.parse() but vuvuzela
  // cannot overflow.
  try {
    return JSON.parse(str);
  } catch (e) {
    /* istanbul ignore next */
    return vuvuzela__WEBPACK_IMPORTED_MODULE_3___default.a.parse(str);
  }
}

function safeJsonStringify(json) {
  try {
    return JSON.stringify(json);
  } catch (e) {
    /* istanbul ignore next */
    return vuvuzela__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(json);
  }
}

function idbError(callback) {
  return function (evt) {
    var message = 'unknown_error';
    if (evt.target && evt.target.error) {
      message = evt.target.error.name || evt.target.error.message;
    }
    callback(createError(IDB_ERROR, message, evt.type));
  };
}

// Unfortunately, the metadata has to be stringified
// when it is put into the database, because otherwise
// IndexedDB can throw errors for deeply-nested objects.
// Originally we just used JSON.parse/JSON.stringify; now
// we use this custom vuvuzela library that avoids recursion.
// If we could do it all over again, we'd probably use a
// format for the revision trees other than JSON.
function encodeMetadata(metadata, winningRev, deleted) {
  return {
    data: safeJsonStringify(metadata),
    winningRev: winningRev,
    deletedOrLocal: deleted ? '1' : '0',
    seq: metadata.seq, // highest seq for this doc
    id: metadata.id
  };
}

function decodeMetadata(storedObject) {
  if (!storedObject) {
    return null;
  }
  var metadata = safeJsonParse(storedObject.data);
  metadata.winningRev = storedObject.winningRev;
  metadata.deleted = storedObject.deletedOrLocal === '1';
  metadata.seq = storedObject.seq;
  return metadata;
}

// read the doc back out from the database. we don't store the
// _id or _rev because we already have _doc_id_rev.
function decodeDoc(doc) {
  if (!doc) {
    return doc;
  }
  var idx = doc._doc_id_rev.lastIndexOf(':');
  doc._id = doc._doc_id_rev.substring(0, idx - 1);
  doc._rev = doc._doc_id_rev.substring(idx + 1);
  delete doc._doc_id_rev;
  return doc;
}

// Read a blob from the database, encoding as necessary
// and translating from base64 if the IDB doesn't support
// native Blobs
function readBlobData(body, type, asBlob, callback) {
  if (asBlob) {
    if (!body) {
      callback(createBlob([''], {type: type}));
    } else if (typeof body !== 'string') { // we have blob support
      callback(body);
    } else { // no blob support
      callback(b64ToBluffer(body, type));
    }
  } else { // as base64 string
    if (!body) {
      callback('');
    } else if (typeof body !== 'string') { // we have blob support
      readAsBinaryString(body, function (binary) {
        callback(thisBtoa(binary));
      });
    } else { // no blob support
      callback(body);
    }
  }
}

function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
  var attachments = Object.keys(doc._attachments || {});
  if (!attachments.length) {
    return cb && cb();
  }
  var numDone = 0;

  function checkDone() {
    if (++numDone === attachments.length && cb) {
      cb();
    }
  }

  function fetchAttachment(doc, att) {
    var attObj = doc._attachments[att];
    var digest = attObj.digest;
    var req = txn.objectStore(ATTACH_STORE).get(digest);
    req.onsuccess = function (e) {
      attObj.body = e.target.result.body;
      checkDone();
    };
  }

  attachments.forEach(function (att) {
    if (opts.attachments && opts.include_docs) {
      fetchAttachment(doc, att);
    } else {
      doc._attachments[att].stub = true;
      checkDone();
    }
  });
}

// IDB-specific postprocessing necessary because
// we don't know whether we stored a true Blob or
// a base64-encoded string, and if it's a Blob it
// needs to be read outside of the transaction context
function postProcessAttachments(results, asBlob) {
  return Promise.all(results.map(function (row) {
    if (row.doc && row.doc._attachments) {
      var attNames = Object.keys(row.doc._attachments);
      return Promise.all(attNames.map(function (att) {
        var attObj = row.doc._attachments[att];
        if (!('body' in attObj)) { // already processed
          return;
        }
        var body = attObj.body;
        var type = attObj.content_type;
        return new Promise(function (resolve) {
          readBlobData(body, type, asBlob, function (data) {
            row.doc._attachments[att] = $inject_Object_assign(
              pick(attObj, ['digest', 'content_type']),
              {data: data}
            );
            resolve();
          });
        });
      }));
    }
  }));
}

function compactRevs(revs, docId, txn) {

  var possiblyOrphanedDigests = [];
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var attStore = txn.objectStore(ATTACH_STORE);
  var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
  var count = revs.length;

  function checkDone() {
    count--;
    if (!count) { // done processing all revs
      deleteOrphanedAttachments();
    }
  }

  function deleteOrphanedAttachments() {
    if (!possiblyOrphanedDigests.length) {
      return;
    }
    possiblyOrphanedDigests.forEach(function (digest) {
      var countReq = attAndSeqStore.index('digestSeq').count(
        IDBKeyRange.bound(
          digest + '::', digest + '::\uffff', false, false));
      countReq.onsuccess = function (e) {
        var count = e.target.result;
        if (!count) {
          // orphaned
          attStore.delete(digest);
        }
      };
    });
  }

  revs.forEach(function (rev$$1) {
    var index = seqStore.index('_doc_id_rev');
    var key = docId + "::" + rev$$1;
    index.getKey(key).onsuccess = function (e) {
      var seq = e.target.result;
      if (typeof seq !== 'number') {
        return checkDone();
      }
      seqStore.delete(seq);

      var cursor = attAndSeqStore.index('seq')
        .openCursor(IDBKeyRange.only(seq));

      cursor.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          var digest = cursor.value.digestSeq.split('::')[0];
          possiblyOrphanedDigests.push(digest);
          attAndSeqStore.delete(cursor.primaryKey);
          cursor.continue();
        } else { // done
          checkDone();
        }
      };
    };
  });
}

function openTransactionSafely(idb, stores, mode) {
  try {
    return {
      txn: idb.transaction(stores, mode)
    };
  } catch (err) {
    return {
      error: err
    };
  }
}

var changesHandler = new Changes();

function idbBulkDocs(dbOpts, req, opts, api, idb, callback) {
  var docInfos = req.docs;
  var txn;
  var docStore;
  var bySeqStore;
  var attachStore;
  var attachAndSeqStore;
  var metaStore;
  var docInfoError;
  var metaDoc;

  for (var i = 0, len = docInfos.length; i < len; i++) {
    var doc = docInfos[i];
    if (doc._id && isLocalId(doc._id)) {
      continue;
    }
    doc = docInfos[i] = parseDoc(doc, opts.new_edits, dbOpts);
    if (doc.error && !docInfoError) {
      docInfoError = doc;
    }
  }

  if (docInfoError) {
    return callback(docInfoError);
  }

  var allDocsProcessed = false;
  var docCountDelta = 0;
  var results = new Array(docInfos.length);
  var fetchedDocs = new ExportedMap();
  var preconditionErrored = false;
  var blobType = api._meta.blobSupport ? 'blob' : 'base64';

  preprocessAttachments(docInfos, blobType, function (err) {
    if (err) {
      return callback(err);
    }
    startTransaction();
  });

  function startTransaction() {

    var stores = [
      DOC_STORE, BY_SEQ_STORE,
      ATTACH_STORE,
      LOCAL_STORE, ATTACH_AND_SEQ_STORE,
      META_STORE
    ];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
    if (txnResult.error) {
      return callback(txnResult.error);
    }
    txn = txnResult.txn;
    txn.onabort = idbError(callback);
    txn.ontimeout = idbError(callback);
    txn.oncomplete = complete;
    docStore = txn.objectStore(DOC_STORE);
    bySeqStore = txn.objectStore(BY_SEQ_STORE);
    attachStore = txn.objectStore(ATTACH_STORE);
    attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
    metaStore = txn.objectStore(META_STORE);

    metaStore.get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result;
      updateDocCountIfReady();
    };

    verifyAttachments(function (err) {
      if (err) {
        preconditionErrored = true;
        return callback(err);
      }
      fetchExistingDocs();
    });
  }

  function onAllDocsProcessed() {
    allDocsProcessed = true;
    updateDocCountIfReady();
  }

  function idbProcessDocs() {
    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs,
                txn, results, writeDoc, opts, onAllDocsProcessed);
  }

  function updateDocCountIfReady() {
    if (!metaDoc || !allDocsProcessed) {
      return;
    }
    // caching the docCount saves a lot of time in allDocs() and
    // info(), which is why we go to all the trouble of doing this
    metaDoc.docCount += docCountDelta;
    metaStore.put(metaDoc);
  }

  function fetchExistingDocs() {

    if (!docInfos.length) {
      return;
    }

    var numFetched = 0;

    function checkDone() {
      if (++numFetched === docInfos.length) {
        idbProcessDocs();
      }
    }

    function readMetadata(event) {
      var metadata = decodeMetadata(event.target.result);

      if (metadata) {
        fetchedDocs.set(metadata.id, metadata);
      }
      checkDone();
    }

    for (var i = 0, len = docInfos.length; i < len; i++) {
      var docInfo = docInfos[i];
      if (docInfo._id && isLocalId(docInfo._id)) {
        checkDone(); // skip local docs
        continue;
      }
      var req = docStore.get(docInfo.metadata.id);
      req.onsuccess = readMetadata;
    }
  }

  function complete() {
    if (preconditionErrored) {
      return;
    }

    changesHandler.notify(api._meta.name);
    callback(null, results);
  }

  function verifyAttachment(digest, callback) {

    var req = attachStore.get(digest);
    req.onsuccess = function (e) {
      if (!e.target.result) {
        var err = createError(MISSING_STUB,
          'unknown stub attachment with digest ' +
          digest);
        err.status = 412;
        callback(err);
      } else {
        callback();
      }
    };
  }

  function verifyAttachments(finish) {


    var digests = [];
    docInfos.forEach(function (docInfo) {
      if (docInfo.data && docInfo.data._attachments) {
        Object.keys(docInfo.data._attachments).forEach(function (filename) {
          var att = docInfo.data._attachments[filename];
          if (att.stub) {
            digests.push(att.digest);
          }
        });
      }
    });
    if (!digests.length) {
      return finish();
    }
    var numDone = 0;
    var err;

    function checkDone() {
      if (++numDone === digests.length) {
        finish(err);
      }
    }
    digests.forEach(function (digest) {
      verifyAttachment(digest, function (attErr) {
        if (attErr && !err) {
          err = attErr;
        }
        checkDone();
      });
    });
  }

  function writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted,
                    isUpdate, delta, resultsIdx, callback) {

    docInfo.metadata.winningRev = winningRev$$1;
    docInfo.metadata.deleted = winningRevIsDeleted;

    var doc = docInfo.data;
    doc._id = docInfo.metadata.id;
    doc._rev = docInfo.metadata.rev;

    if (newRevIsDeleted) {
      doc._deleted = true;
    }

    var hasAttachments = doc._attachments &&
      Object.keys(doc._attachments).length;
    if (hasAttachments) {
      return writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted,
        isUpdate, resultsIdx, callback);
    }

    docCountDelta += delta;
    updateDocCountIfReady();

    finishDoc(docInfo, winningRev$$1, winningRevIsDeleted,
      isUpdate, resultsIdx, callback);
  }

  function finishDoc(docInfo, winningRev$$1, winningRevIsDeleted,
                     isUpdate, resultsIdx, callback) {

    var doc = docInfo.data;
    var metadata = docInfo.metadata;

    doc._doc_id_rev = metadata.id + '::' + metadata.rev;
    delete doc._id;
    delete doc._rev;

    function afterPutDoc(e) {
      var revsToDelete = docInfo.stemmedRevs || [];

      if (isUpdate && api.auto_compaction) {
        revsToDelete = revsToDelete.concat(compactTree(docInfo.metadata));
      }

      if (revsToDelete && revsToDelete.length) {
        compactRevs(revsToDelete, docInfo.metadata.id, txn);
      }

      metadata.seq = e.target.result;
      // Current _rev is calculated from _rev_tree on read
      // delete metadata.rev;
      var metadataToStore = encodeMetadata(metadata, winningRev$$1,
        winningRevIsDeleted);
      var metaDataReq = docStore.put(metadataToStore);
      metaDataReq.onsuccess = afterPutMetadata;
    }

    function afterPutDocError(e) {
      // ConstraintError, need to update, not put (see #1638 for details)
      e.preventDefault(); // avoid transaction abort
      e.stopPropagation(); // avoid transaction onerror
      var index = bySeqStore.index('_doc_id_rev');
      var getKeyReq = index.getKey(doc._doc_id_rev);
      getKeyReq.onsuccess = function (e) {
        var putReq = bySeqStore.put(doc, e.target.result);
        putReq.onsuccess = afterPutDoc;
      };
    }

    function afterPutMetadata() {
      results[resultsIdx] = {
        ok: true,
        id: metadata.id,
        rev: metadata.rev
      };
      fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
      insertAttachmentMappings(docInfo, metadata.seq, callback);
    }

    var putReq = bySeqStore.put(doc);

    putReq.onsuccess = afterPutDoc;
    putReq.onerror = afterPutDocError;
  }

  function writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted,
                            isUpdate, resultsIdx, callback) {


    var doc = docInfo.data;

    var numDone = 0;
    var attachments = Object.keys(doc._attachments);

    function collectResults() {
      if (numDone === attachments.length) {
        finishDoc(docInfo, winningRev$$1, winningRevIsDeleted,
          isUpdate, resultsIdx, callback);
      }
    }

    function attachmentSaved() {
      numDone++;
      collectResults();
    }

    attachments.forEach(function (key) {
      var att = docInfo.data._attachments[key];
      if (!att.stub) {
        var data = att.data;
        delete att.data;
        att.revpos = parseInt(winningRev$$1, 10);
        var digest = att.digest;
        saveAttachment(digest, data, attachmentSaved);
      } else {
        numDone++;
        collectResults();
      }
    });
  }

  // map seqs to attachment digests, which
  // we will need later during compaction
  function insertAttachmentMappings(docInfo, seq, callback) {

    var attsAdded = 0;
    var attsToAdd = Object.keys(docInfo.data._attachments || {});

    if (!attsToAdd.length) {
      return callback();
    }

    function checkDone() {
      if (++attsAdded === attsToAdd.length) {
        callback();
      }
    }

    function add(att) {
      var digest = docInfo.data._attachments[att].digest;
      var req = attachAndSeqStore.put({
        seq: seq,
        digestSeq: digest + '::' + seq
      });

      req.onsuccess = checkDone;
      req.onerror = function (e) {
        // this callback is for a constaint error, which we ignore
        // because this docid/rev has already been associated with
        // the digest (e.g. when new_edits == false)
        e.preventDefault(); // avoid transaction abort
        e.stopPropagation(); // avoid transaction onerror
        checkDone();
      };
    }
    for (var i = 0; i < attsToAdd.length; i++) {
      add(attsToAdd[i]); // do in parallel
    }
  }

  function saveAttachment(digest, data, callback) {


    var getKeyReq = attachStore.count(digest);
    getKeyReq.onsuccess = function (e) {
      var count = e.target.result;
      if (count) {
        return callback(); // already exists
      }
      var newAtt = {
        digest: digest,
        body: data
      };
      var putReq = attachStore.put(newAtt);
      putReq.onsuccess = callback;
    };
  }
}

// Abstraction over IDBCursor and getAll()/getAllKeys() that allows us to batch our operations
// while falling back to a normal IDBCursor operation on browsers that don't support getAll() or
// getAllKeys(). This allows for a much faster implementation than just straight-up cursors, because
// we're not processing each document one-at-a-time.
function runBatchedCursor(objectStore, keyRange, descending, batchSize, onBatch) {

  if (batchSize === -1) {
    batchSize = 1000;
  }

  // Bail out of getAll()/getAllKeys() in the following cases:
  // 1) either method is unsupported - we need both
  // 2) batchSize is 1 (might as well use IDBCursor)
  // 3) descending – no real way to do this via getAll()/getAllKeys()

  var useGetAll = typeof objectStore.getAll === 'function' &&
    typeof objectStore.getAllKeys === 'function' &&
    batchSize > 1 && !descending;

  var keysBatch;
  var valuesBatch;
  var pseudoCursor;

  function onGetAll(e) {
    valuesBatch = e.target.result;
    if (keysBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function onGetAllKeys(e) {
    keysBatch = e.target.result;
    if (valuesBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function continuePseudoCursor() {
    if (!keysBatch.length) { // no more results
      return onBatch();
    }
    // fetch next batch, exclusive start
    var lastKey = keysBatch[keysBatch.length - 1];
    var newKeyRange;
    if (keyRange && keyRange.upper) {
      try {
        newKeyRange = IDBKeyRange.bound(lastKey, keyRange.upper,
          true, keyRange.upperOpen);
      } catch (e) {
        if (e.name === "DataError" && e.code === 0) {
          return onBatch(); // we're done, startkey and endkey are equal
        }
      }
    } else {
      newKeyRange = IDBKeyRange.lowerBound(lastKey, true);
    }
    keyRange = newKeyRange;
    keysBatch = null;
    valuesBatch = null;
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  }

  function onCursor(e) {
    var cursor = e.target.result;
    if (!cursor) { // done
      return onBatch();
    }
    // regular IDBCursor acts like a batch where batch size is always 1
    onBatch([cursor.key], [cursor.value], cursor);
  }

  if (useGetAll) {
    pseudoCursor = {"continue": continuePseudoCursor};
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  } else if (descending) {
    objectStore.openCursor(keyRange, 'prev').onsuccess = onCursor;
  } else {
    objectStore.openCursor(keyRange).onsuccess = onCursor;
  }
}

// simple shim for objectStore.getAll(), falling back to IDBCursor
function getAll(objectStore, keyRange, onSuccess) {
  if (typeof objectStore.getAll === 'function') {
    // use native getAll
    objectStore.getAll(keyRange).onsuccess = onSuccess;
    return;
  }
  // fall back to cursors
  var values = [];

  function onCursor(e) {
    var cursor = e.target.result;
    if (cursor) {
      values.push(cursor.value);
      cursor.continue();
    } else {
      onSuccess({
        target: {
          result: values
        }
      });
    }
  }

  objectStore.openCursor(keyRange).onsuccess = onCursor;
}

function allDocsKeys(keys, docStore, onBatch) {
  // It's not guaranted to be returned in right order  
  var valuesBatch = new Array(keys.length);
  var count = 0;
  keys.forEach(function (key, index) {
    docStore.get(key).onsuccess = function (event) {
      if (event.target.result) {
        valuesBatch[index] = event.target.result;
      } else {
        valuesBatch[index] = {key: key, error: 'not_found'};
      }
      count++;
      if (count === keys.length) {
        onBatch(keys, valuesBatch, {});
      }
    };
  });
}

function createKeyRange(start, end, inclusiveEnd, key, descending) {
  try {
    if (start && end) {
      if (descending) {
        return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
      } else {
        return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
      }
    } else if (start) {
      if (descending) {
        return IDBKeyRange.upperBound(start);
      } else {
        return IDBKeyRange.lowerBound(start);
      }
    } else if (end) {
      if (descending) {
        return IDBKeyRange.lowerBound(end, !inclusiveEnd);
      } else {
        return IDBKeyRange.upperBound(end, !inclusiveEnd);
      }
    } else if (key) {
      return IDBKeyRange.only(key);
    }
  } catch (e) {
    return {error: e};
  }
  return null;
}

function idbAllDocs(opts, idb, callback) {
  var start = 'startkey' in opts ? opts.startkey : false;
  var end = 'endkey' in opts ? opts.endkey : false;
  var key = 'key' in opts ? opts.key : false;
  var keys = 'keys' in opts ? opts.keys : false; 
  var skip = opts.skip || 0;
  var limit = typeof opts.limit === 'number' ? opts.limit : -1;
  var inclusiveEnd = opts.inclusive_end !== false;

  var keyRange ; 
  var keyRangeError;
  if (!keys) {
    keyRange = createKeyRange(start, end, inclusiveEnd, key, opts.descending);
    keyRangeError = keyRange && keyRange.error;
    if (keyRangeError && 
      !(keyRangeError.name === "DataError" && keyRangeError.code === 0)) {
      // DataError with error code 0 indicates start is less than end, so
      // can just do an empty query. Else need to throw
      return callback(createError(IDB_ERROR,
        keyRangeError.name, keyRangeError.message));
    }
  }

  var stores = [DOC_STORE, BY_SEQ_STORE, META_STORE];

  if (opts.attachments) {
    stores.push(ATTACH_STORE);
  }
  var txnResult = openTransactionSafely(idb, stores, 'readonly');
  if (txnResult.error) {
    return callback(txnResult.error);
  }
  var txn = txnResult.txn;
  txn.oncomplete = onTxnComplete;
  txn.onabort = idbError(callback);
  var docStore = txn.objectStore(DOC_STORE);
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var metaStore = txn.objectStore(META_STORE);
  var docIdRevIndex = seqStore.index('_doc_id_rev');
  var results = [];
  var docCount;
  var updateSeq;

  metaStore.get(META_STORE).onsuccess = function (e) {
    docCount = e.target.result.docCount;
  };

  /* istanbul ignore if */
  if (opts.update_seq) {
    getMaxUpdateSeq(seqStore, function (e) { 
      if (e.target.result && e.target.result.length > 0) {
        updateSeq = e.target.result[0];
      }
    });
  }

  function getMaxUpdateSeq(objectStore, onSuccess) {
    function onCursor(e) {
      var cursor = e.target.result;
      var maxKey = undefined;
      if (cursor && cursor.key) {
        maxKey = cursor.key;
      } 
      return onSuccess({
        target: {
          result: [maxKey]
        }
      });
    }
    objectStore.openCursor(null, 'prev').onsuccess = onCursor;
  }

  // if the user specifies include_docs=true, then we don't
  // want to block the main cursor while we're fetching the doc
  function fetchDocAsynchronously(metadata, row, winningRev$$1) {
    var key = metadata.id + "::" + winningRev$$1;
    docIdRevIndex.get(key).onsuccess =  function onGetDoc(e) {
      row.doc = decodeDoc(e.target.result) || {};
      if (opts.conflicts) {
        var conflicts = collectConflicts(metadata);
        if (conflicts.length) {
          row.doc._conflicts = conflicts;
        }
      }
      fetchAttachmentsIfNecessary(row.doc, opts, txn);
    };
  }

  function allDocsInner(winningRev$$1, metadata) {
    var row = {
      id: metadata.id,
      key: metadata.id,
      value: {
        rev: winningRev$$1
      }
    };
    var deleted = metadata.deleted;
    if (deleted) {
      if (keys) {
        results.push(row);
        // deleted docs are okay with "keys" requests
        row.value.deleted = true;
        row.doc = null;
      }
    } else if (skip-- <= 0) {
      results.push(row);
      if (opts.include_docs) {
        fetchDocAsynchronously(metadata, row, winningRev$$1);
      }
    }
  }

  function processBatch(batchValues) {
    for (var i = 0, len = batchValues.length; i < len; i++) {
      if (results.length === limit) {
        break;
      }
      var batchValue = batchValues[i];
      if (batchValue.error && keys) {
        // key was not found with "keys" requests
        results.push(batchValue);
        continue;
      }
      var metadata = decodeMetadata(batchValue);
      var winningRev$$1 = metadata.winningRev;
      allDocsInner(winningRev$$1, metadata);
    }
  }

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor) {
      return;
    }
    processBatch(batchValues);
    if (results.length < limit) {
      cursor.continue();
    }
  }

  function onGetAll(e) {
    var values = e.target.result;
    if (opts.descending) {
      values = values.reverse();
    }
    processBatch(values);
  }

  function onResultsReady() {
    var returnVal = {
      total_rows: docCount,
      offset: opts.skip,
      rows: results
    };
    
    /* istanbul ignore if */
    if (opts.update_seq && updateSeq !== undefined) {
      returnVal.update_seq = updateSeq;
    }
    callback(null, returnVal);
  }

  function onTxnComplete() {
    if (opts.attachments) {
      postProcessAttachments(results, opts.binary).then(onResultsReady);
    } else {
      onResultsReady();
    }
  }

  // don't bother doing any requests if start > end or limit === 0
  if (keyRangeError || limit === 0) {
    return;
  }
  if (keys) {
    return allDocsKeys(opts.keys, docStore, onBatch);
  }
  if (limit === -1) { // just fetch everything
    return getAll(docStore, keyRange, onGetAll);
  }
  // else do a cursor
  // choose a batch size based on the skip, since we'll need to skip that many
  runBatchedCursor(docStore, keyRange, opts.descending, limit + skip, onBatch);
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
function checkBlobSupport(txn) {
  return new Promise(function (resolve) {
    var blob$$1 = createBlob(['']);
    var req = txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob$$1, 'key');

    req.onsuccess = function () {
      var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
      var matchedEdge = navigator.userAgent.match(/Edge\//);
      // MS Edge pretends to be Chrome 42:
      // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
      resolve(matchedEdge || !matchedChrome ||
        parseInt(matchedChrome[1], 10) >= 43);
    };

    req.onerror = txn.onabort = function (e) {
      // If the transaction aborts now its due to not being able to
      // write to the database, likely due to the disk being full
      e.preventDefault();
      e.stopPropagation();
      resolve(false);
    };
  }).catch(function () {
    return false; // error, so assume unsupported
  });
}

function countDocs(txn, cb) {
  var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');
  index.count(IDBKeyRange.only('0')).onsuccess = function (e) {
    cb(e.target.result);
  };
}

// This task queue ensures that IDB open calls are done in their own tick

var running = false;
var queue = [];

function tryCode(fun, err, res, PouchDB) {
  try {
    fun(err, res);
  } catch (err) {
    // Shouldn't happen, but in some odd cases
    // IndexedDB implementations might throw a sync
    // error, in which case this will at least log it.
    PouchDB.emit('error', err);
  }
}

function applyNext() {
  if (running || !queue.length) {
    return;
  }
  running = true;
  queue.shift()();
}

function enqueueTask(action, callback, PouchDB) {
  queue.push(function runAction() {
    action(function runCallback(err, res) {
      tryCode(callback, err, res, PouchDB);
      running = false;
      immediate__WEBPACK_IMPORTED_MODULE_0___default()(function runNext() {
        applyNext(PouchDB);
      });
    });
  });
  applyNext();
}

function changes(opts, api, dbName, idb) {
  opts = clone(opts);

  if (opts.continuous) {
    var id = dbName + ':' + uuid();
    changesHandler.addListener(dbName, id, api, opts);
    changesHandler.notify(dbName);
    return {
      cancel: function () {
        changesHandler.removeListener(dbName, id);
      }
    };
  }

  var docIds = opts.doc_ids && new ExportedSet(opts.doc_ids);

  opts.since = opts.since || 0;
  var lastSeq = opts.since;

  var limit = 'limit' in opts ? opts.limit : -1;
  if (limit === 0) {
    limit = 1; // per CouchDB _changes spec
  }

  var results = [];
  var numResults = 0;
  var filter = filterChange(opts);
  var docIdsToMetadata = new ExportedMap();

  var txn;
  var bySeqStore;
  var docStore;
  var docIdRevIndex;

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor || !batchKeys.length) { // done
      return;
    }

    var winningDocs = new Array(batchKeys.length);
    var metadatas = new Array(batchKeys.length);

    function processMetadataAndWinningDoc(metadata, winningDoc) {
      var change = opts.processChange(winningDoc, metadata, opts);
      lastSeq = change.seq = metadata.seq;

      var filtered = filter(change);
      if (typeof filtered === 'object') { // anything but true/false indicates error
        return Promise.reject(filtered);
      }

      if (!filtered) {
        return Promise.resolve();
      }
      numResults++;
      if (opts.return_docs) {
        results.push(change);
      }
      // process the attachment immediately
      // for the benefit of live listeners
      if (opts.attachments && opts.include_docs) {
        return new Promise(function (resolve) {
          fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
            postProcessAttachments([change], opts.binary).then(function () {
              resolve(change);
            });
          });
        });
      } else {
        return Promise.resolve(change);
      }
    }

    function onBatchDone() {
      var promises = [];
      for (var i = 0, len = winningDocs.length; i < len; i++) {
        if (numResults === limit) {
          break;
        }
        var winningDoc = winningDocs[i];
        if (!winningDoc) {
          continue;
        }
        var metadata = metadatas[i];
        promises.push(processMetadataAndWinningDoc(metadata, winningDoc));
      }

      Promise.all(promises).then(function (changes) {
        for (var i = 0, len = changes.length; i < len; i++) {
          if (changes[i]) {
            opts.onChange(changes[i]);
          }
        }
      }).catch(opts.complete);

      if (numResults !== limit) {
        cursor.continue();
      }
    }

    // Fetch all metadatas/winningdocs from this batch in parallel, then process
    // them all only once all data has been collected. This is done in parallel
    // because it's faster than doing it one-at-a-time.
    var numDone = 0;
    batchValues.forEach(function (value, i) {
      var doc = decodeDoc(value);
      var seq = batchKeys[i];
      fetchWinningDocAndMetadata(doc, seq, function (metadata, winningDoc) {
        metadatas[i] = metadata;
        winningDocs[i] = winningDoc;
        if (++numDone === batchKeys.length) {
          onBatchDone();
        }
      });
    });
  }

  function onGetMetadata(doc, seq, metadata, cb) {
    if (metadata.seq !== seq) {
      // some other seq is later
      return cb();
    }

    if (metadata.winningRev === doc._rev) {
      // this is the winning doc
      return cb(metadata, doc);
    }

    // fetch winning doc in separate request
    var docIdRev = doc._id + '::' + metadata.winningRev;
    var req = docIdRevIndex.get(docIdRev);
    req.onsuccess = function (e) {
      cb(metadata, decodeDoc(e.target.result));
    };
  }

  function fetchWinningDocAndMetadata(doc, seq, cb) {
    if (docIds && !docIds.has(doc._id)) {
      return cb();
    }

    var metadata = docIdsToMetadata.get(doc._id);
    if (metadata) { // cached
      return onGetMetadata(doc, seq, metadata, cb);
    }
    // metadata not cached, have to go fetch it
    docStore.get(doc._id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result);
      docIdsToMetadata.set(doc._id, metadata);
      onGetMetadata(doc, seq, metadata, cb);
    };
  }

  function finish() {
    opts.complete(null, {
      results: results,
      last_seq: lastSeq
    });
  }

  function onTxnComplete() {
    if (!opts.continuous && opts.attachments) {
      // cannot guarantee that postProcessing was already done,
      // so do it again
      postProcessAttachments(results).then(finish);
    } else {
      finish();
    }
  }

  var objectStores = [DOC_STORE, BY_SEQ_STORE];
  if (opts.attachments) {
    objectStores.push(ATTACH_STORE);
  }
  var txnResult = openTransactionSafely(idb, objectStores, 'readonly');
  if (txnResult.error) {
    return opts.complete(txnResult.error);
  }
  txn = txnResult.txn;
  txn.onabort = idbError(opts.complete);
  txn.oncomplete = onTxnComplete;

  bySeqStore = txn.objectStore(BY_SEQ_STORE);
  docStore = txn.objectStore(DOC_STORE);
  docIdRevIndex = bySeqStore.index('_doc_id_rev');

  var keyRange = (opts.since && !opts.descending) ?
    IDBKeyRange.lowerBound(opts.since, true) : null;

  runBatchedCursor(bySeqStore, keyRange, opts.descending, limit, onBatch);
}

var cachedDBs = new ExportedMap();
var blobSupportPromise;
var openReqList = new ExportedMap();

function IdbPouch(opts, callback) {
  var api = this;

  enqueueTask(function (thisCallback) {
    init(api, opts, thisCallback);
  }, callback, api.constructor);
}

function init(api, opts, callback) {

  var dbName = opts.name;

  var idb = null;
  api._meta = null;

  // called when creating a fresh new database
  function createSchema(db) {
    var docStore = db.createObjectStore(DOC_STORE, {keyPath : 'id'});
    db.createObjectStore(BY_SEQ_STORE, {autoIncrement: true})
      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
    db.createObjectStore(ATTACH_STORE, {keyPath: 'digest'});
    db.createObjectStore(META_STORE, {keyPath: 'id', autoIncrement: false});
    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);

    // added in v2
    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});

    // added in v3
    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'});

    // added in v4
    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
      {autoIncrement: true});
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
  }

  // migration to version 2
  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
  // store local docs in the main doc-store, but whaddyagonnado
  function addDeletedOrLocalIndex(txn, callback) {
    var docStore = txn.objectStore(DOC_STORE);
    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});

    docStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        var metadata = cursor.value;
        var deleted = isDeleted(metadata);
        metadata.deletedOrLocal = deleted ? "1" : "0";
        docStore.put(metadata);
        cursor.continue();
      } else {
        callback();
      }
    };
  }

  // migration to version 3 (part 1)
  function createLocalStoreSchema(db) {
    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'})
      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
  }

  // migration to version 3 (part 2)
  function migrateLocalStore(txn, cb) {
    var localStore = txn.objectStore(LOCAL_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var seqStore = txn.objectStore(BY_SEQ_STORE);

    var cursor = docStore.openCursor();
    cursor.onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        var metadata = cursor.value;
        var docId = metadata.id;
        var local = isLocalId(docId);
        var rev$$1 = winningRev(metadata);
        if (local) {
          var docIdRev = docId + "::" + rev$$1;
          // remove all seq entries
          // associated with this docId
          var start = docId + "::";
          var end = docId + "::~";
          var index = seqStore.index('_doc_id_rev');
          var range = IDBKeyRange.bound(start, end, false, false);
          var seqCursor = index.openCursor(range);
          seqCursor.onsuccess = function (e) {
            seqCursor = e.target.result;
            if (!seqCursor) {
              // done
              docStore.delete(cursor.primaryKey);
              cursor.continue();
            } else {
              var data = seqCursor.value;
              if (data._doc_id_rev === docIdRev) {
                localStore.put(data);
              }
              seqStore.delete(seqCursor.primaryKey);
              seqCursor.continue();
            }
          };
        } else {
          cursor.continue();
        }
      } else if (cb) {
        cb();
      }
    };
  }

  // migration to version 4 (part 1)
  function addAttachAndSeqStore(db) {
    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
      {autoIncrement: true});
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
  }

  // migration to version 4 (part 2)
  function migrateAttsAndSeqs(txn, callback) {
    var seqStore = txn.objectStore(BY_SEQ_STORE);
    var attStore = txn.objectStore(ATTACH_STORE);
    var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);

    // need to actually populate the table. this is the expensive part,
    // so as an optimization, check first that this database even
    // contains attachments
    var req = attStore.count();
    req.onsuccess = function (e) {
      var count = e.target.result;
      if (!count) {
        return callback(); // done
      }

      seqStore.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (!cursor) {
          return callback(); // done
        }
        var doc = cursor.value;
        var seq = cursor.primaryKey;
        var atts = Object.keys(doc._attachments || {});
        var digestMap = {};
        for (var j = 0; j < atts.length; j++) {
          var att = doc._attachments[atts[j]];
          digestMap[att.digest] = true; // uniq digests, just in case
        }
        var digests = Object.keys(digestMap);
        for (j = 0; j < digests.length; j++) {
          var digest = digests[j];
          attAndSeqStore.put({
            seq: seq,
            digestSeq: digest + '::' + seq
          });
        }
        cursor.continue();
      };
    };
  }

  // migration to version 5
  // Instead of relying on on-the-fly migration of metadata,
  // this brings the doc-store to its modern form:
  // - metadata.winningrev
  // - metadata.seq
  // - stringify the metadata when storing it
  function migrateMetadata(txn) {

    function decodeMetadataCompat(storedObject) {
      if (!storedObject.data) {
        // old format, when we didn't store it stringified
        storedObject.deleted = storedObject.deletedOrLocal === '1';
        return storedObject;
      }
      return decodeMetadata(storedObject);
    }

    // ensure that every metadata has a winningRev and seq,
    // which was previously created on-the-fly but better to migrate
    var bySeqStore = txn.objectStore(BY_SEQ_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var cursor = docStore.openCursor();
    cursor.onsuccess = function (e) {
      var cursor = e.target.result;
      if (!cursor) {
        return; // done
      }
      var metadata = decodeMetadataCompat(cursor.value);

      metadata.winningRev = metadata.winningRev ||
        winningRev(metadata);

      function fetchMetadataSeq() {
        // metadata.seq was added post-3.2.0, so if it's missing,
        // we need to fetch it manually
        var start = metadata.id + '::';
        var end = metadata.id + '::\uffff';
        var req = bySeqStore.index('_doc_id_rev').openCursor(
          IDBKeyRange.bound(start, end));

        var metadataSeq = 0;
        req.onsuccess = function (e) {
          var cursor = e.target.result;
          if (!cursor) {
            metadata.seq = metadataSeq;
            return onGetMetadataSeq();
          }
          var seq = cursor.primaryKey;
          if (seq > metadataSeq) {
            metadataSeq = seq;
          }
          cursor.continue();
        };
      }

      function onGetMetadataSeq() {
        var metadataToStore = encodeMetadata(metadata,
          metadata.winningRev, metadata.deleted);

        var req = docStore.put(metadataToStore);
        req.onsuccess = function () {
          cursor.continue();
        };
      }

      if (metadata.seq) {
        return onGetMetadataSeq();
      }

      fetchMetadataSeq();
    };

  }

  api._remote = false;
  api.type = function () {
    return 'idb';
  };

  api._id = toPromise(function (callback) {
    callback(null, api._meta.instanceId);
  });

  api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
    idbBulkDocs(opts, req, reqOpts, api, idb, callback);
  };

  // First we look up the metadata in the ids database, then we fetch the
  // current revision(s) from the by sequence store
  api._get = function idb_get(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    var txn = opts.ctx;
    if (!txn) {
      var txnResult = openTransactionSafely(idb,
        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
      if (txnResult.error) {
        return callback(txnResult.error);
      }
      txn = txnResult.txn;
    }

    function finish() {
      callback(err, {doc: doc, metadata: metadata, ctx: txn});
    }

    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result);
      // we can determine the result here if:
      // 1. there is no such document
      // 2. the document is deleted and we don't ask about specific rev
      // When we ask with opts.rev we expect the answer to be either
      // doc (possibly with _deleted=true) or missing error
      if (!metadata) {
        err = createError(MISSING_DOC, 'missing');
        return finish();
      }

      var rev$$1;
      if (!opts.rev) {
        rev$$1 = metadata.winningRev;
        var deleted = isDeleted(metadata);
        if (deleted) {
          err = createError(MISSING_DOC, "deleted");
          return finish();
        }
      } else {
        rev$$1 = opts.latest ? latest(opts.rev, metadata) : opts.rev;
      }

      var objectStore = txn.objectStore(BY_SEQ_STORE);
      var key = metadata.id + '::' + rev$$1;

      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
        doc = e.target.result;
        if (doc) {
          doc = decodeDoc(doc);
        }
        if (!doc) {
          err = createError(MISSING_DOC, 'missing');
          return finish();
        }
        finish();
      };
    };
  };

  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
    var txn;
    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      var txnResult = openTransactionSafely(idb,
        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
      if (txnResult.error) {
        return callback(txnResult.error);
      }
      txn = txnResult.txn;
    }
    var digest = attachment.digest;
    var type = attachment.content_type;

    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
      var body = e.target.result.body;
      readBlobData(body, type, opts.binary, function (blobData) {
        callback(null, blobData);
      });
    };
  };

  api._info = function idb_info(callback) {
    var updateSeq;
    var docCount;

    var txnResult = openTransactionSafely(idb, [META_STORE, BY_SEQ_STORE], 'readonly');
    if (txnResult.error) {
      return callback(txnResult.error);
    }
    var txn = txnResult.txn;
    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      docCount = e.target.result.docCount;
    };
    txn.objectStore(BY_SEQ_STORE).openCursor(null, 'prev').onsuccess = function (e) {
      var cursor = e.target.result;
      updateSeq = cursor ? cursor.key : 0;
    };

    txn.oncomplete = function () {
      callback(null, {
        doc_count: docCount,
        update_seq: updateSeq,
        // for debugging
        idb_attachment_format: (api._meta.blobSupport ? 'binary' : 'base64')
      });
    };
  };

  api._allDocs = function idb_allDocs(opts, callback) {
    idbAllDocs(opts, idb, callback);
  };

  api._changes = function idbChanges(opts) {
    return changes(opts, api, dbName, idb);
  };

  api._close = function (callback) {
    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
    // "Returns immediately and closes the connection in a separate thread..."
    idb.close();
    cachedDBs.delete(dbName);
    callback();
  };

  api._getRevisionTree = function (docId, callback) {
    var txnResult = openTransactionSafely(idb, [DOC_STORE], 'readonly');
    if (txnResult.error) {
      return callback(txnResult.error);
    }
    var txn = txnResult.txn;
    var req = txn.objectStore(DOC_STORE).get(docId);
    req.onsuccess = function (event) {
      var doc = decodeMetadata(event.target.result);
      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        callback(null, doc.rev_tree);
      }
    };
  };

  // This function removes revisions of document docId
  // which are listed in revs and sets this document
  // revision to to rev_tree
  api._doCompaction = function (docId, revs, callback) {
    var stores = [
      DOC_STORE,
      BY_SEQ_STORE,
      ATTACH_STORE,
      ATTACH_AND_SEQ_STORE
    ];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
    if (txnResult.error) {
      return callback(txnResult.error);
    }
    var txn = txnResult.txn;

    var docStore = txn.objectStore(DOC_STORE);

    docStore.get(docId).onsuccess = function (event) {
      var metadata = decodeMetadata(event.target.result);
      traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
                                                         revHash, ctx, opts) {
        var rev$$1 = pos + '-' + revHash;
        if (revs.indexOf(rev$$1) !== -1) {
          opts.status = 'missing';
        }
      });
      compactRevs(revs, docId, txn);
      var winningRev$$1 = metadata.winningRev;
      var deleted = metadata.deleted;
      txn.objectStore(DOC_STORE).put(
        encodeMetadata(metadata, winningRev$$1, deleted));
    };
    txn.onabort = idbError(callback);
    txn.oncomplete = function () {
      callback();
    };
  };


  api._getLocal = function (id, callback) {
    var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readonly');
    if (txnResult.error) {
      return callback(txnResult.error);
    }
    var tx = txnResult.txn;
    var req = tx.objectStore(LOCAL_STORE).get(id);

    req.onerror = idbError(callback);
    req.onsuccess = function (e) {
      var doc = e.target.result;
      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        delete doc['_doc_id_rev']; // for backwards compat
        callback(null, doc);
      }
    };
  };

  api._putLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    delete doc._revisions; // ignore this, trust the rev
    var oldRev = doc._rev;
    var id = doc._id;
    if (!oldRev) {
      doc._rev = '0-1';
    } else {
      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
    }

    var tx = opts.ctx;
    var ret;
    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
      if (txnResult.error) {
        return callback(txnResult.error);
      }
      tx = txnResult.txn;
      tx.onerror = idbError(callback);
      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var oStore = tx.objectStore(LOCAL_STORE);
    var req;
    if (oldRev) {
      req = oStore.get(id);
      req.onsuccess = function (e) {
        var oldDoc = e.target.result;
        if (!oldDoc || oldDoc._rev !== oldRev) {
          callback(createError(REV_CONFLICT));
        } else { // update
          var req = oStore.put(doc);
          req.onsuccess = function () {
            ret = {ok: true, id: doc._id, rev: doc._rev};
            if (opts.ctx) { // return immediately
              callback(null, ret);
            }
          };
        }
      };
    } else { // new doc
      req = oStore.add(doc);
      req.onerror = function (e) {
        // constraint error, already exists
        callback(createError(REV_CONFLICT));
        e.preventDefault(); // avoid transaction abort
        e.stopPropagation(); // avoid transaction onerror
      };
      req.onsuccess = function () {
        ret = {ok: true, id: doc._id, rev: doc._rev};
        if (opts.ctx) { // return immediately
          callback(null, ret);
        }
      };
    }
  };

  api._removeLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    var tx = opts.ctx;
    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
      if (txnResult.error) {
        return callback(txnResult.error);
      }
      tx = txnResult.txn;
      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }
    var ret;
    var id = doc._id;
    var oStore = tx.objectStore(LOCAL_STORE);
    var req = oStore.get(id);

    req.onerror = idbError(callback);
    req.onsuccess = function (e) {
      var oldDoc = e.target.result;
      if (!oldDoc || oldDoc._rev !== doc._rev) {
        callback(createError(MISSING_DOC));
      } else {
        oStore.delete(id);
        ret = {ok: true, id: id, rev: '0-0'};
        if (opts.ctx) { // return immediately
          callback(null, ret);
        }
      }
    };
  };

  api._destroy = function (opts, callback) {
    changesHandler.removeAllListeners(dbName);

    //Close open request for "dbName" database to fix ie delay.
    var openReq = openReqList.get(dbName);
    if (openReq && openReq.result) {
      openReq.result.close();
      cachedDBs.delete(dbName);
    }
    var req = indexedDB.deleteDatabase(dbName);

    req.onsuccess = function () {
      //Remove open request from the list.
      openReqList.delete(dbName);
      if (hasLocalStorage() && (dbName in localStorage)) {
        delete localStorage[dbName];
      }
      callback(null, { 'ok': true });
    };

    req.onerror = idbError(callback);
  };

  var cached = cachedDBs.get(dbName);

  if (cached) {
    idb = cached.idb;
    api._meta = cached.global;
    return immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      callback(null, api);
    });
  }

  var req = indexedDB.open(dbName, ADAPTER_VERSION);
  openReqList.set(dbName, req);

  req.onupgradeneeded = function (e) {
    var db = e.target.result;
    if (e.oldVersion < 1) {
      return createSchema(db); // new db, initial schema
    }
    // do migrations

    var txn = e.currentTarget.transaction;
    // these migrations have to be done in this function, before
    // control is returned to the event loop, because IndexedDB

    if (e.oldVersion < 3) {
      createLocalStoreSchema(db); // v2 -> v3
    }
    if (e.oldVersion < 4) {
      addAttachAndSeqStore(db); // v3 -> v4
    }

    var migrations = [
      addDeletedOrLocalIndex, // v1 -> v2
      migrateLocalStore,      // v2 -> v3
      migrateAttsAndSeqs,     // v3 -> v4
      migrateMetadata         // v4 -> v5
    ];

    var i = e.oldVersion;

    function next() {
      var migration = migrations[i - 1];
      i++;
      if (migration) {
        migration(txn, next);
      }
    }

    next();
  };

  req.onsuccess = function (e) {

    idb = e.target.result;

    idb.onversionchange = function () {
      idb.close();
      cachedDBs.delete(dbName);
    };

    idb.onabort = function (e) {
      guardedConsole('error', 'Database has a global failure', e.target.error);
      idb.close();
      cachedDBs.delete(dbName);
    };

    // Do a few setup operations (in parallel as much as possible):
    // 1. Fetch meta doc
    // 2. Check blob support
    // 3. Calculate docCount
    // 4. Generate an instanceId if necessary
    // 5. Store docCount and instanceId on meta doc

    var txn = idb.transaction([
      META_STORE,
      DETECT_BLOB_SUPPORT_STORE,
      DOC_STORE
    ], 'readwrite');

    var storedMetaDoc = false;
    var metaDoc;
    var docCount;
    var blobSupport;
    var instanceId;

    function completeSetup() {
      if (typeof blobSupport === 'undefined' || !storedMetaDoc) {
        return;
      }
      api._meta = {
        name: dbName,
        instanceId: instanceId,
        blobSupport: blobSupport
      };

      cachedDBs.set(dbName, {
        idb: idb,
        global: api._meta
      });
      callback(null, api);
    }

    function storeMetaDocIfReady() {
      if (typeof docCount === 'undefined' || typeof metaDoc === 'undefined') {
        return;
      }
      var instanceKey = dbName + '_id';
      if (instanceKey in metaDoc) {
        instanceId = metaDoc[instanceKey];
      } else {
        metaDoc[instanceKey] = instanceId = uuid();
      }
      metaDoc.docCount = docCount;
      txn.objectStore(META_STORE).put(metaDoc);
    }

    //
    // fetch or generate the instanceId
    //
    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result || { id: META_STORE };
      storeMetaDocIfReady();
    };

    //
    // countDocs
    //
    countDocs(txn, function (count) {
      docCount = count;
      storeMetaDocIfReady();
    });

    //
    // check blob support
    //
    if (!blobSupportPromise) {
      // make sure blob support is only checked once
      blobSupportPromise = checkBlobSupport(txn);
    }

    blobSupportPromise.then(function (val) {
      blobSupport = val;
      completeSetup();
    });

    // only when the metadata put transaction has completed,
    // consider the setup done
    txn.oncomplete = function () {
      storedMetaDoc = true;
      completeSetup();
    };
    txn.onabort = idbError(callback);
  };

  req.onerror = function (e) {
    var msg = e.target.error && e.target.error.message;

    if (!msg) {
      msg = 'Failed to open indexedDB, are you in private browsing mode?';
    } else if (msg.indexOf("stored database is a higher version") !== -1) {
      msg = new Error('This DB was created with the newer "indexeddb" adapter, but you are trying to open it with the older "idb" adapter');
    }

    guardedConsole('error', msg);
    callback(createError(IDB_ERROR, msg));
  };
}

IdbPouch.valid = function () {
  // Following #7085 buggy idb versions (typically Safari < 10.1) are
  // considered valid.

  // On Firefox SecurityError is thrown while referencing indexedDB if cookies
  // are not allowed. `typeof indexedDB` also triggers the error.
  try {
    // some outdated implementations of IDB that appear on Samsung
    // and HTC Android devices <4.4 are missing IDBKeyRange
    return typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined';
  } catch (e) {
    return false;
  }
};

function IDBPouch (PouchDB) {
  PouchDB.adapter('idb', IdbPouch, true);
}

// dead simple promise pool, inspired by https://github.com/timdp/es6-promise-pool
// but much smaller in code size. limits the number of concurrent promises that are executed


function pool(promiseFactories, limit) {
  return new Promise(function (resolve, reject) {
    var running = 0;
    var current = 0;
    var done = 0;
    var len = promiseFactories.length;
    var err;

    function runNext() {
      running++;
      promiseFactories[current++]().then(onSuccess, onError);
    }

    function doNext() {
      if (++done === len) {
        /* istanbul ignore if */
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      } else {
        runNextBatch();
      }
    }

    function onSuccess() {
      running--;
      doNext();
    }

    /* istanbul ignore next */
    function onError(thisErr) {
      running--;
      err = err || thisErr;
      doNext();
    }

    function runNextBatch() {
      while (running < limit && current < len) {
        runNext();
      }
    }

    runNextBatch();
  });
}

var CHANGES_BATCH_SIZE = 25;
var MAX_SIMULTANEOUS_REVS = 50;
var CHANGES_TIMEOUT_BUFFER = 5000;
var DEFAULT_HEARTBEAT = 10000;

var supportsBulkGetMap = {};

function readAttachmentsAsBlobOrBuffer(row) {
  var doc = row.doc || row.ok;
  var atts = doc && doc._attachments;
  if (!atts) {
    return;
  }
  Object.keys(atts).forEach(function (filename) {
    var att = atts[filename];
    att.data = b64ToBluffer(att.data, att.content_type);
  });
}

function encodeDocId(id) {
  if (/^_design/.test(id)) {
    return '_design/' + encodeURIComponent(id.slice(8));
  }
  if (/^_local/.test(id)) {
    return '_local/' + encodeURIComponent(id.slice(7));
  }
  return encodeURIComponent(id);
}

function preprocessAttachments$1(doc) {
  if (!doc._attachments || !Object.keys(doc._attachments)) {
    return Promise.resolve();
  }

  return Promise.all(Object.keys(doc._attachments).map(function (key) {
    var attachment = doc._attachments[key];
    if (attachment.data && typeof attachment.data !== 'string') {
      return new Promise(function (resolve) {
        blobToBase64(attachment.data, resolve);
      }).then(function (b64) {
        attachment.data = b64;
      });
    }
  }));
}

function hasUrlPrefix(opts) {
  if (!opts.prefix) {
    return false;
  }
  var protocol = parseUri(opts.prefix).protocol;
  return protocol === 'http' || protocol === 'https';
}

// Get all the information you possibly can about the URI given by name and
// return it as a suitable object.
function getHost(name, opts) {
  // encode db name if opts.prefix is a url (#5574)
  if (hasUrlPrefix(opts)) {
    var dbName = opts.name.substr(opts.prefix.length);
    // Ensure prefix has a trailing slash
    var prefix = opts.prefix.replace(/\/?$/, '/');
    name = prefix + encodeURIComponent(dbName);
  }

  var uri = parseUri(name);
  if (uri.user || uri.password) {
    uri.auth = {username: uri.user, password: uri.password};
  }

  // Split the path part of the URI into parts using '/' as the delimiter
  // after removing any leading '/' and any trailing '/'
  var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');

  uri.db = parts.pop();
  // Prevent double encoding of URI component
  if (uri.db.indexOf('%') === -1) {
    uri.db = encodeURIComponent(uri.db);
  }

  uri.path = parts.join('/');

  return uri;
}

// Generate a URL with the host data given by opts and the given path
function genDBUrl(opts, path) {
  return genUrl(opts, opts.db + '/' + path);
}

// Generate a URL with the host data given by opts and the given path
function genUrl(opts, path) {
  // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string
  var pathDel = !opts.path ? '' : '/';

  // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string
  return opts.protocol + '://' + opts.host +
         (opts.port ? (':' + opts.port) : '') +
         '/' + opts.path + pathDel + path;
}

function paramsToStr(params) {
  return '?' + Object.keys(params).map(function (k) {
    return k + '=' + encodeURIComponent(params[k]);
  }).join('&');
}

function shouldCacheBust(opts) {
  var ua = (typeof navigator !== 'undefined' && navigator.userAgent) ?
      navigator.userAgent.toLowerCase() : '';
  var isIE = ua.indexOf('msie') !== -1;
  var isTrident = ua.indexOf('trident') !== -1;
  var isEdge = ua.indexOf('edge') !== -1;
  var isGET = !('method' in opts) || opts.method === 'GET';
  return (isIE || isTrident || isEdge) && isGET;
}

// Implements the PouchDB API for dealing with CouchDB instances over HTTP
function HttpPouch(opts, callback) {

  // The functions that will be publicly available for HttpPouch
  var api = this;

  var host = getHost(opts.name, opts);
  var dbUrl = genDBUrl(host, '');

  opts = clone(opts);

  var ourFetch = function (url, options) {

    options = options || {};
    options.headers = options.headers || new h();

    options.credentials = 'include';

    if (opts.auth || host.auth) {
      var nAuth = opts.auth || host.auth;
      var str = nAuth.username + ':' + nAuth.password;
      var token = thisBtoa(unescape(encodeURIComponent(str)));
      options.headers.set('Authorization', 'Basic ' + token);
    }

    var headers = opts.headers || {};
    Object.keys(headers).forEach(function (key) {
      options.headers.append(key, headers[key]);
    });

    /* istanbul ignore if */
    if (shouldCacheBust(options)) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + '_nonce=' + Date.now();
    }

    var fetchFun = opts.fetch || f$1;
    return fetchFun(url, options);
  };

  function adapterFun$$1(name, fun) {
    return adapterFun(name, argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
      setup().then(function () {
        return fun.apply(this, args);
      }).catch(function (e) {
        var callback = args.pop();
        callback(e);
      });
    })).bind(api);
  }

  function fetchJSON(url, options, callback) {

    var result = {};

    options = options || {};
    options.headers = options.headers || new h();

    if (!options.headers.get('Content-Type')) {
      options.headers.set('Content-Type', 'application/json');
    }
    if (!options.headers.get('Accept')) {
      options.headers.set('Accept', 'application/json');
    }

    return ourFetch(url, options).then(function (response) {
      result.ok = response.ok;
      result.status = response.status;
      return response.json();
    }).then(function (json) {
      result.data = json;
      if (!result.ok) {
        result.data.status = result.status;
        var err = generateErrorFromResponse(result.data);
        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }

      if (Array.isArray(result.data)) {
        result.data = result.data.map(function (v) {
          if (v.error || v.missing) {
            return generateErrorFromResponse(v);
          } else {
            return v;
          }
        });
      }

      if (callback) {
        callback(null, result.data);
      } else {
        return result;
      }
    });
  }

  var setupPromise;

  function setup() {
    if (opts.skip_setup) {
      return Promise.resolve();
    }

    // If there is a setup in process or previous successful setup
    // done then we will use that
    // If previous setups have been rejected we will try again
    if (setupPromise) {
      return setupPromise;
    }

    setupPromise = fetchJSON(dbUrl).catch(function (err) {
      if (err && err.status && err.status === 404) {
        // Doesnt exist, create it
        explainError(404, 'PouchDB is just detecting if the remote exists.');
        return fetchJSON(dbUrl, {method: 'PUT'});
      } else {
        return Promise.reject(err);
      }
    }).catch(function (err) {
      // If we try to create a database that already exists, skipped in
      // istanbul since its catching a race condition.
      /* istanbul ignore if */
      if (err && err.status && err.status === 412) {
        return true;
      }
      return Promise.reject(err);
    });

    setupPromise.catch(function () {
      setupPromise = null;
    });

    return setupPromise;
  }

  immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    callback(null, api);
  });

  api._remote = true;

  /* istanbul ignore next */
  api.type = function () {
    return 'http';
  };

  api.id = adapterFun$$1('id', function (callback) {
    ourFetch(genUrl(host, '')).then(function (response) {
      return response.json();
    }).catch(function () {
      return {};
    }).then(function (result) {
      // Bad response or missing `uuid` should not prevent ID generation.
      var uuid$$1 = (result && result.uuid) ?
          (result.uuid + host.db) : genDBUrl(host, '');
      callback(null, uuid$$1);
    });
  });

  // Sends a POST request to the host calling the couchdb _compact function
  //    version: The version of CouchDB it is running
  api.compact = adapterFun$$1('compact', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = clone(opts);

    fetchJSON(genDBUrl(host, '_compact'), {method: 'POST'}).then(function () {
      function ping() {
        api.info(function (err, res) {
          // CouchDB may send a "compact_running:true" if it's
          // already compacting. PouchDB Server doesn't.
          /* istanbul ignore else */
          if (res && !res.compact_running) {
            callback(null, {ok: true});
          } else {
            setTimeout(ping, opts.interval || 200);
          }
        });
      }
      // Ping the http if it's finished compaction
      ping();
    });
  });

  api.bulkGet = adapterFun('bulkGet', function (opts, callback) {
    var self = this;

    function doBulkGet(cb) {
      var params = {};
      if (opts.revs) {
        params.revs = true;
      }
      if (opts.attachments) {
        /* istanbul ignore next */
        params.attachments = true;
      }
      if (opts.latest) {
        params.latest = true;
      }
      fetchJSON(genDBUrl(host, '_bulk_get' + paramsToStr(params)), {
        method: 'POST',
        body: JSON.stringify({ docs: opts.docs})
      }).then(function (result) {
        if (opts.attachments && opts.binary) {
          result.data.results.forEach(function (res) {
            res.docs.forEach(readAttachmentsAsBlobOrBuffer);
          });
        }
        cb(null, result.data);
      }).catch(cb);
    }

    /* istanbul ignore next */
    function doBulkGetShim() {
      // avoid "url too long error" by splitting up into multiple requests
      var batchSize = MAX_SIMULTANEOUS_REVS;
      var numBatches = Math.ceil(opts.docs.length / batchSize);
      var numDone = 0;
      var results = new Array(numBatches);

      function onResult(batchNum) {
        return function (err, res) {
          // err is impossible because shim returns a list of errs in that case
          results[batchNum] = res.results;
          if (++numDone === numBatches) {
            callback(null, {results: flatten(results)});
          }
        };
      }

      for (var i = 0; i < numBatches; i++) {
        var subOpts = pick(opts, ['revs', 'attachments', 'binary', 'latest']);
        subOpts.docs = opts.docs.slice(i * batchSize,
          Math.min(opts.docs.length, (i + 1) * batchSize));
        bulkGet(self, subOpts, onResult(i));
      }
    }

    // mark the whole database as either supporting or not supporting _bulk_get
    var dbUrl = genUrl(host, '');
    var supportsBulkGet = supportsBulkGetMap[dbUrl];

    /* istanbul ignore next */
    if (typeof supportsBulkGet !== 'boolean') {
      // check if this database supports _bulk_get
      doBulkGet(function (err, res) {
        if (err) {
          supportsBulkGetMap[dbUrl] = false;
          explainError(
            err.status,
            'PouchDB is just detecting if the remote ' +
            'supports the _bulk_get API.'
          );
          doBulkGetShim();
        } else {
          supportsBulkGetMap[dbUrl] = true;
          callback(null, res);
        }
      });
    } else if (supportsBulkGet) {
      doBulkGet(callback);
    } else {
      doBulkGetShim();
    }
  });

  // Calls GET on the host, which gets back a JSON string containing
  //    couchdb: A welcome string
  //    version: The version of CouchDB it is running
  api._info = function (callback) {
    setup().then(function () {
      return ourFetch(genDBUrl(host, ''));
    }).then(function (response) {
      return response.json();
    }).then(function (info) {
      info.host = genDBUrl(host, '');
      callback(null, info);
    }).catch(callback);
  };

  api.fetch = function (path, options) {
    return setup().then(function () {
      var url = path.substring(0, 1) === '/' ?
        genUrl(host, path.substring(1)) :
        genDBUrl(host, path);
      return ourFetch(url, options);
    });
  };

  // Get the document with the given id from the database given by host.
  // The id could be solely the _id in the database, or it may be a
  // _design/ID or _local/ID path
  api.get = adapterFun$$1('get', function (id, opts, callback) {
    // If no options were given, set the callback to the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = clone(opts);

    // List of parameters to add to the GET request
    var params = {};

    if (opts.revs) {
      params.revs = true;
    }

    if (opts.revs_info) {
      params.revs_info = true;
    }

    if (opts.latest) {
      params.latest = true;
    }

    if (opts.open_revs) {
      if (opts.open_revs !== "all") {
        opts.open_revs = JSON.stringify(opts.open_revs);
      }
      params.open_revs = opts.open_revs;
    }

    if (opts.rev) {
      params.rev = opts.rev;
    }

    if (opts.conflicts) {
      params.conflicts = opts.conflicts;
    }

    /* istanbul ignore if */
    if (opts.update_seq) {
      params.update_seq = opts.update_seq;
    }

    id = encodeDocId(id);

    function fetchAttachments(doc) {
      var atts = doc._attachments;
      var filenames = atts && Object.keys(atts);
      if (!atts || !filenames.length) {
        return;
      }
      // we fetch these manually in separate XHRs, because
      // Sync Gateway would normally send it back as multipart/mixed,
      // which we cannot parse. Also, this is more efficient than
      // receiving attachments as base64-encoded strings.
      function fetchData(filename) {
        var att = atts[filename];
        var path = encodeDocId(doc._id) + '/' + encodeAttachmentId(filename) +
            '?rev=' + doc._rev;
        return ourFetch(genDBUrl(host, path)).then(function (response) {
          if ('buffer' in response) {
            return response.buffer();
          } else {
            /* istanbul ignore next */
            return response.blob();
          }
        }).then(function (blob) {
          if (opts.binary) {
            var typeFieldDescriptor = Object.getOwnPropertyDescriptor(blob.__proto__, 'type');
            if (!typeFieldDescriptor || typeFieldDescriptor.set) {
              blob.type = att.content_type;
            }
            return blob;
          }
          return new Promise(function (resolve) {
            blobToBase64(blob, resolve);
          });
        }).then(function (data) {
          delete att.stub;
          delete att.length;
          att.data = data;
        });
      }

      var promiseFactories = filenames.map(function (filename) {
        return function () {
          return fetchData(filename);
        };
      });

      // This limits the number of parallel xhr requests to 5 any time
      // to avoid issues with maximum browser request limits
      return pool(promiseFactories, 5);
    }

    function fetchAllAttachments(docOrDocs) {
      if (Array.isArray(docOrDocs)) {
        return Promise.all(docOrDocs.map(function (doc) {
          if (doc.ok) {
            return fetchAttachments(doc.ok);
          }
        }));
      }
      return fetchAttachments(docOrDocs);
    }

    var url = genDBUrl(host, id + paramsToStr(params));
    fetchJSON(url).then(function (res) {
      return Promise.resolve().then(function () {
        if (opts.attachments) {
          return fetchAllAttachments(res.data);
        }
      }).then(function () {
        callback(null, res.data);
      });
    }).catch(function (e) {
      e.docId = id;
      callback(e);
    });
  });


  // Delete the document given by doc from the database given by host.
  api.remove = adapterFun$$1('remove', function (docOrId, optsOrRev, opts, cb) {
    var doc;
    if (typeof optsOrRev === 'string') {
      // id, rev, opts, callback style
      doc = {
        _id: docOrId,
        _rev: optsOrRev
      };
      if (typeof opts === 'function') {
        cb = opts;
        opts = {};
      }
    } else {
      // doc, opts, callback style
      doc = docOrId;
      if (typeof optsOrRev === 'function') {
        cb = optsOrRev;
        opts = {};
      } else {
        cb = opts;
        opts = optsOrRev;
      }
    }

    var rev$$1 = (doc._rev || opts.rev);
    var url = genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev$$1;

    fetchJSON(url, {method: 'DELETE'}, cb).catch(cb);
  });

  function encodeAttachmentId(attachmentId) {
    return attachmentId.split("/").map(encodeURIComponent).join("/");
  }

  // Get the attachment
  api.getAttachment = adapterFun$$1('getAttachment', function (docId, attachmentId,
                                                            opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    var params = opts.rev ? ('?rev=' + opts.rev) : '';
    var url = genDBUrl(host, encodeDocId(docId)) + '/' +
        encodeAttachmentId(attachmentId) + params;
    var contentType;
    ourFetch(url, {method: 'GET'}).then(function (response) {
      contentType = response.headers.get('content-type');
      if (!response.ok) {
        throw response;
      } else {
        if (typeof process !== 'undefined' && !true && typeof response.buffer === 'function') {
          return response.buffer();
        } else {
          /* istanbul ignore next */
          return response.blob();
        }
      }
    }).then(function (blob) {
      // TODO: also remove
      if (typeof process !== 'undefined' && !true) {
        blob.type = contentType;
      }
      callback(null, blob);
    }).catch(function (err) {
      callback(err);
    });
  });

  // Remove the attachment given by the id and rev
  api.removeAttachment =  adapterFun$$1('removeAttachment', function (docId,
                                                                   attachmentId,
                                                                   rev$$1,
                                                                   callback) {
    var url = genDBUrl(host, encodeDocId(docId) + '/' +
                       encodeAttachmentId(attachmentId)) + '?rev=' + rev$$1;
    fetchJSON(url, {method: 'DELETE'}, callback).catch(callback);
  });

  // Add the attachment given by blob and its contentType property
  // to the document with the given id, the revision given by rev, and
  // add it to the database given by host.
  api.putAttachment = adapterFun$$1('putAttachment', function (docId, attachmentId,
                                                            rev$$1, blob,
                                                            type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev$$1;
      rev$$1 = null;
    }
    var id = encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId);
    var url = genDBUrl(host, id);
    if (rev$$1) {
      url += '?rev=' + rev$$1;
    }

    if (typeof blob === 'string') {
      // input is assumed to be a base64 string
      var binary;
      try {
        binary = thisAtob(blob);
      } catch (err) {
        return callback(createError(BAD_ARG,
                        'Attachment is not a valid base64 string'));
      }
      blob = binary ? binStringToBluffer(binary, type) : '';
    }

    // Add the attachment
    fetchJSON(url, {
      headers: new h({'Content-Type': type}),
      method: 'PUT',
      body: blob
    }, callback).catch(callback);
  });

  // Update/create multiple documents given by req in the database
  // given by host.
  api._bulkDocs = function (req, opts, callback) {
    // If new_edits=false then it prevents the database from creating
    // new revision numbers for the documents. Instead it just uses
    // the old ones. This is used in database replication.
    req.new_edits = opts.new_edits;

    setup().then(function () {
      return Promise.all(req.docs.map(preprocessAttachments$1));
    }).then(function () {
      // Update/create the documents
      return fetchJSON(genDBUrl(host, '_bulk_docs'), {
        method: 'POST',
        body: JSON.stringify(req)
      }, callback);
    }).catch(callback);
  };


  // Update/create document
  api._put = function (doc, opts, callback) {
    setup().then(function () {
      return preprocessAttachments$1(doc);
    }).then(function () {
      return fetchJSON(genDBUrl(host, encodeDocId(doc._id)), {
        method: 'PUT',
        body: JSON.stringify(doc)
      });
    }).then(function (result) {
      callback(null, result.data);
    }).catch(function (err) {
      err.docId = doc && doc._id;
      callback(err);
    });
  };


  // Get a listing of the documents in the database given
  // by host and ordered by increasing id.
  api.allDocs = adapterFun$$1('allDocs', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = clone(opts);

    // List of parameters to add to the GET request
    var params = {};
    var body;
    var method = 'GET';

    if (opts.conflicts) {
      params.conflicts = true;
    }

    /* istanbul ignore if */
    if (opts.update_seq) {
      params.update_seq = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    if (opts.include_docs) {
      params.include_docs = true;
    }

    // added in CouchDB 1.6.0
    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.key) {
      params.key = JSON.stringify(opts.key);
    }

    if (opts.start_key) {
      opts.startkey = opts.start_key;
    }

    if (opts.startkey) {
      params.startkey = JSON.stringify(opts.startkey);
    }

    if (opts.end_key) {
      opts.endkey = opts.end_key;
    }

    if (opts.endkey) {
      params.endkey = JSON.stringify(opts.endkey);
    }

    if (typeof opts.inclusive_end !== 'undefined') {
      params.inclusive_end = !!opts.inclusive_end;
    }

    if (typeof opts.limit !== 'undefined') {
      params.limit = opts.limit;
    }

    if (typeof opts.skip !== 'undefined') {
      params.skip = opts.skip;
    }

    var paramStr = paramsToStr(params);

    if (typeof opts.keys !== 'undefined') {
      method = 'POST';
      body = {keys: opts.keys};
    }

    fetchJSON(genDBUrl(host, '_all_docs' + paramStr), {
       method: method,
      body: JSON.stringify(body)
    }).then(function (result) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        result.data.rows.forEach(readAttachmentsAsBlobOrBuffer);
      }
      callback(null, result.data);
    }).catch(callback);
  });

  // Get a list of changes made to documents in the database given by host.
  // TODO According to the README, there should be two other methods here,
  // api.changes.addListener and api.changes.removeListener.
  api._changes = function (opts) {

    // We internally page the results of a changes request, this means
    // if there is a large set of changes to be returned we can start
    // processing them quicker instead of waiting on the entire
    // set of changes to return and attempting to process them at once
    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;

    opts = clone(opts);

    if (opts.continuous && !('heartbeat' in opts)) {
      opts.heartbeat = DEFAULT_HEARTBEAT;
    }

    var requestTimeout = ('timeout' in opts) ? opts.timeout : 30 * 1000;

    // ensure CHANGES_TIMEOUT_BUFFER applies
    if ('timeout' in opts && opts.timeout &&
      (requestTimeout - opts.timeout) < CHANGES_TIMEOUT_BUFFER) {
        requestTimeout = opts.timeout + CHANGES_TIMEOUT_BUFFER;
    }

    /* istanbul ignore if */
    if ('heartbeat' in opts && opts.heartbeat &&
       (requestTimeout - opts.heartbeat) < CHANGES_TIMEOUT_BUFFER) {
        requestTimeout = opts.heartbeat + CHANGES_TIMEOUT_BUFFER;
    }

    var params = {};
    if ('timeout' in opts && opts.timeout) {
      params.timeout = opts.timeout;
    }

    var limit = (typeof opts.limit !== 'undefined') ? opts.limit : false;
    var leftToFetch = limit;

    if (opts.style) {
      params.style = opts.style;
    }

    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
      params.include_docs = true;
    }

    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.continuous) {
      params.feed = 'longpoll';
    }

    if (opts.seq_interval) {
      params.seq_interval = opts.seq_interval;
    }

    if (opts.conflicts) {
      params.conflicts = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    /* istanbul ignore if */
    if (opts.update_seq) {
      params.update_seq = true;
    }

    if ('heartbeat' in opts) {
      // If the heartbeat value is false, it disables the default heartbeat
      if (opts.heartbeat) {
        params.heartbeat = opts.heartbeat;
      }
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
    }

    if (opts.view && typeof opts.view === 'string') {
      params.filter = '_view';
      params.view = opts.view;
    }

    // If opts.query_params exists, pass it through to the changes request.
    // These parameters may be used by the filter on the source database.
    if (opts.query_params && typeof opts.query_params === 'object') {
      for (var param_name in opts.query_params) {
        /* istanbul ignore else */
        if (opts.query_params.hasOwnProperty(param_name)) {
          params[param_name] = opts.query_params[param_name];
        }
      }
    }

    var method = 'GET';
    var body;

    if (opts.doc_ids) {
      // set this automagically for the user; it's annoying that couchdb
      // requires both a "filter" and a "doc_ids" param.
      params.filter = '_doc_ids';
      method = 'POST';
      body = {doc_ids: opts.doc_ids };
    }
    /* istanbul ignore next */
    else if (opts.selector) {
      // set this automagically for the user, similar to above
      params.filter = '_selector';
      method = 'POST';
      body = {selector: opts.selector };
    }

    var controller = new a();
    var lastFetchedSeq;

    // Get all the changes starting wtih the one immediately after the
    // sequence number given by since.
    var fetchData = function (since, callback) {
      if (opts.aborted) {
        return;
      }
      params.since = since;
      // "since" can be any kind of json object in Cloudant/CouchDB 2.x
      /* istanbul ignore next */
      if (typeof params.since === "object") {
        params.since = JSON.stringify(params.since);
      }

      if (opts.descending) {
        if (limit) {
          params.limit = leftToFetch;
        }
      } else {
        params.limit = (!limit || leftToFetch > batchSize) ?
          batchSize : leftToFetch;
      }

      // Set the options for the ajax call
      var url = genDBUrl(host, '_changes' + paramsToStr(params));
      var fetchOpts = {
        signal: controller.signal,
        method: method,
        body: JSON.stringify(body)
      };
      lastFetchedSeq = since;

      /* istanbul ignore if */
      if (opts.aborted) {
        return;
      }

      // Get the changes
      setup().then(function () {
        return fetchJSON(url, fetchOpts, callback);
      }).catch(callback);
    };

    // If opts.since exists, get all the changes from the sequence
    // number given by opts.since. Otherwise, get all the changes
    // from the sequence number 0.
    var results = {results: []};

    var fetched = function (err, res) {
      if (opts.aborted) {
        return;
      }
      var raw_results_length = 0;
      // If the result of the ajax call (res) contains changes (res.results)
      if (res && res.results) {
        raw_results_length = res.results.length;
        results.last_seq = res.last_seq;
        var pending = null;
        var lastSeq = null;
        // Attach 'pending' property if server supports it (CouchDB 2.0+)
        /* istanbul ignore if */
        if (typeof res.pending === 'number') {
          pending = res.pending;
        }
        if (typeof results.last_seq === 'string' || typeof results.last_seq === 'number') {
          lastSeq = results.last_seq;
        }
        // For each change
        var req = {};
        req.query = opts.query_params;
        res.results = res.results.filter(function (c) {
          leftToFetch--;
          var ret = filterChange(opts)(c);
          if (ret) {
            if (opts.include_docs && opts.attachments && opts.binary) {
              readAttachmentsAsBlobOrBuffer(c);
            }
            if (opts.return_docs) {
              results.results.push(c);
            }
            opts.onChange(c, pending, lastSeq);
          }
          return ret;
        });
      } else if (err) {
        // In case of an error, stop listening for changes and call
        // opts.complete
        opts.aborted = true;
        opts.complete(err);
        return;
      }

      // The changes feed may have timed out with no results
      // if so reuse last update sequence
      if (res && res.last_seq) {
        lastFetchedSeq = res.last_seq;
      }

      var finished = (limit && leftToFetch <= 0) ||
        (res && raw_results_length < batchSize) ||
        (opts.descending);

      if ((opts.continuous && !(limit && leftToFetch <= 0)) || !finished) {
        // Queue a call to fetch again with the newest sequence number
        immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () { fetchData(lastFetchedSeq, fetched); });
      } else {
        // We're done, call the callback
        opts.complete(null, results);
      }
    };

    fetchData(opts.since || 0, fetched);

    // Return a method to cancel this method from processing any more
    return {
      cancel: function () {
        opts.aborted = true;
        controller.abort();
      }
    };
  };

  // Given a set of document/revision IDs (given by req), tets the subset of
  // those that do NOT correspond to revisions stored in the database.
  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff
  api.revsDiff = adapterFun$$1('revsDiff', function (req, opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    // Get the missing document/revision IDs
    fetchJSON(genDBUrl(host, '_revs_diff'), {
      method: 'POST',
      body: JSON.stringify(req)
    }, callback).catch(callback);
  });

  api._close = function (callback) {
    callback();
  };

  api._destroy = function (options, callback) {
    fetchJSON(genDBUrl(host, ''), {method: 'DELETE'}).then(function (json) {
      callback(null, json);
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status === 404) {
        callback(null, {ok: true});
      } else {
        callback(err);
      }
    });
  };
}

// HttpPouch is a valid adapter.
HttpPouch.valid = function () {
  return true;
};

function HttpPouch$1 (PouchDB) {
  PouchDB.adapter('http', HttpPouch, false);
  PouchDB.adapter('https', HttpPouch, false);
}

function QueryParseError(message) {
  this.status = 400;
  this.name = 'query_parse_error';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, QueryParseError);
  } catch (e) {}
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(QueryParseError, Error);

function NotFoundError(message) {
  this.status = 404;
  this.name = 'not_found';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, NotFoundError);
  } catch (e) {}
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(NotFoundError, Error);

function BuiltInError(message) {
  this.status = 500;
  this.name = 'invalid_value';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, BuiltInError);
  } catch (e) {}
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(BuiltInError, Error);

function promisedCallback(promise, callback) {
  if (callback) {
    promise.then(function (res) {
      immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        callback(null, res);
      });
    }, function (reason) {
      immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        callback(reason);
      });
    });
  }
  return promise;
}

function callbackify(fun) {
  return argsarray__WEBPACK_IMPORTED_MODULE_4___default()(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);
    if (typeof cb === 'function') {
      promisedCallback(promise, cb);
    }
    return promise;
  });
}

// Promise finally util similar to Q.finally
function fin(promise, finalPromiseFactory) {
  return promise.then(function (res) {
    return finalPromiseFactory().then(function () {
      return res;
    });
  }, function (reason) {
    return finalPromiseFactory().then(function () {
      throw reason;
    });
  });
}

function sequentialize(queue, promiseFactory) {
  return function () {
    var args = arguments;
    var that = this;
    return queue.add(function () {
      return promiseFactory.apply(that, args);
    });
  };
}

// uniq an array of strings, order not guaranteed
// similar to underscore/lodash _.uniq
function uniq(arr) {
  var theSet = new ExportedSet(arr);
  var result = new Array(theSet.size);
  var index = -1;
  theSet.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

function mapToKeysArray(map) {
  var result = new Array(map.size);
  var index = -1;
  map.forEach(function (value, key) {
    result[++index] = key;
  });
  return result;
}

function createBuiltInError(name) {
  var message = 'builtin ' + name +
    ' function requires map values to be numbers' +
    ' or number arrays';
  return new BuiltInError(message);
}

function sum(values) {
  var result = 0;
  for (var i = 0, len = values.length; i < len; i++) {
    var num = values[i];
    if (typeof num !== 'number') {
      if (Array.isArray(num)) {
        // lists of numbers are also allowed, sum them separately
        result = typeof result === 'number' ? [result] : result;
        for (var j = 0, jLen = num.length; j < jLen; j++) {
          var jNum = num[j];
          if (typeof jNum !== 'number') {
            throw createBuiltInError('_sum');
          } else if (typeof result[j] === 'undefined') {
            result.push(jNum);
          } else {
            result[j] += jNum;
          }
        }
      } else { // not array/number
        throw createBuiltInError('_sum');
      }
    } else if (typeof result === 'number') {
      result += num;
    } else { // add number to array
      result[0] += num;
    }
  }
  return result;
}

var log = guardedConsole.bind(null, 'log');
var isArray = Array.isArray;
var toJSON = JSON.parse;

function evalFunctionWithEval(func, emit) {
  return scopeEval(
    "return (" + func.replace(/;\s*$/, "") + ");",
    {
      emit: emit,
      sum: sum,
      log: log,
      isArray: isArray,
      toJSON: toJSON
    }
  );
}

/*
 * Simple task queue to sequentialize actions. Assumes
 * callbacks will eventually fire (once).
 */


function TaskQueue$1() {
  this.promise = new Promise(function (fulfill) {fulfill(); });
}
TaskQueue$1.prototype.add = function (promiseFactory) {
  this.promise = this.promise.catch(function () {
    // just recover
  }).then(function () {
    return promiseFactory();
  });
  return this.promise;
};
TaskQueue$1.prototype.finish = function () {
  return this.promise;
};

function stringify(input) {
  if (!input) {
    return 'undefined'; // backwards compat for empty reduce
  }
  // for backwards compat with mapreduce, functions/strings are stringified
  // as-is. everything else is JSON-stringified.
  switch (typeof input) {
    case 'function':
      // e.g. a mapreduce map
      return input.toString();
    case 'string':
      // e.g. a mapreduce built-in _reduce function
      return input.toString();
    default:
      // e.g. a JSON object in the case of mango queries
      return JSON.stringify(input);
  }
}

/* create a string signature for a view so we can cache it and uniq it */
function createViewSignature(mapFun, reduceFun) {
  // the "undefined" part is for backwards compatibility
  return stringify(mapFun) + stringify(reduceFun) + 'undefined';
}

function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
  var viewSignature = createViewSignature(mapFun, reduceFun);

  var cachedViews;
  if (!temporary) {
    // cache this to ensure we don't try to update the same view twice
    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};
    if (cachedViews[viewSignature]) {
      return cachedViews[viewSignature];
    }
  }

  var promiseForView = sourceDB.info().then(function (info) {

    var depDbName = info.db_name + '-mrview-' +
      (temporary ? 'temp' : stringMd5(viewSignature));

    // save the view name in the source db so it can be cleaned up if necessary
    // (e.g. when the _design doc is deleted, remove all associated view data)
    function diffFunction(doc) {
      doc.views = doc.views || {};
      var fullViewName = viewName;
      if (fullViewName.indexOf('/') === -1) {
        fullViewName = viewName + '/' + viewName;
      }
      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
      /* istanbul ignore if */
      if (depDbs[depDbName]) {
        return; // no update necessary
      }
      depDbs[depDbName] = true;
      return doc;
    }
    return upsert(sourceDB, '_local/' + localDocName, diffFunction).then(function () {
      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
        var db = res.db;
        db.auto_compaction = true;
        var view = {
          name: depDbName,
          db: db,
          sourceDB: sourceDB,
          adapter: sourceDB.adapter,
          mapFun: mapFun,
          reduceFun: reduceFun
        };
        return view.db.get('_local/lastSeq').catch(function (err) {
          /* istanbul ignore if */
          if (err.status !== 404) {
            throw err;
          }
        }).then(function (lastSeqDoc) {
          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
          if (cachedViews) {
            view.db.once('destroyed', function () {
              delete cachedViews[viewSignature];
            });
          }
          return view;
        });
      });
    });
  });

  if (cachedViews) {
    cachedViews[viewSignature] = promiseForView;
  }
  return promiseForView;
}

var persistentQueues = {};
var tempViewQueue = new TaskQueue$1();
var CHANGES_BATCH_SIZE$1 = 50;

function parseViewName(name) {
  // can be either 'ddocname/viewname' or just 'viewname'
  // (where the ddoc name is the same)
  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
}

function isGenOne(changes) {
  // only return true if the current change is 1-
  // and there are no other leafs
  return changes.length === 1 && /^1-/.test(changes[0].rev);
}

function emitError(db, e) {
  try {
    db.emit('error', e);
  } catch (err) {
    guardedConsole('error',
      'The user\'s map/reduce function threw an uncaught error.\n' +
      'You can debug this error by doing:\n' +
      'myDatabase.on(\'error\', function (err) { debugger; });\n' +
      'Please double-check your map/reduce function.');
    guardedConsole('error', e);
  }
}

/**
 * Returns an "abstract" mapreduce object of the form:
 *
 *   {
 *     query: queryFun,
 *     viewCleanup: viewCleanupFun
 *   }
 *
 * Arguments are:
 *
 * localDoc: string
 *   This is for the local doc that gets saved in order to track the
 *   "dependent" DBs and clean them up for viewCleanup. It should be
 *   unique, so that indexer plugins don't collide with each other.
 * mapper: function (mapFunDef, emit)
 *   Returns a map function based on the mapFunDef, which in the case of
 *   normal map/reduce is just the de-stringified function, but may be
 *   something else, such as an object in the case of pouchdb-find.
 * reducer: function (reduceFunDef)
 *   Ditto, but for reducing. Modules don't have to support reducing
 *   (e.g. pouchdb-find).
 * ddocValidator: function (ddoc, viewName)
 *   Throws an error if the ddoc or viewName is not valid.
 *   This could be a way to communicate to the user that the configuration for the
 *   indexer is invalid.
 */
function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {

  function tryMap(db, fun, doc) {
    // emit an event if there was an error thrown by a map function.
    // putting try/catches in a single function also avoids deoptimizations.
    try {
      fun(doc);
    } catch (e) {
      emitError(db, e);
    }
  }

  function tryReduce(db, fun, keys, values, rereduce) {
    // same as above, but returning the result or an error. there are two separate
    // functions to avoid extra memory allocations since the tryCode() case is used
    // for custom map functions (common) vs this function, which is only used for
    // custom reduce functions (rare)
    try {
      return {output : fun(keys, values, rereduce)};
    } catch (e) {
      emitError(db, e);
      return {error: e};
    }
  }

  function sortByKeyThenValue(x, y) {
    var keyCompare = collate(x.key, y.key);
    return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
  }

  function sliceResults(results, limit, skip) {
    skip = skip || 0;
    if (typeof limit === 'number') {
      return results.slice(skip, limit + skip);
    } else if (skip > 0) {
      return results.slice(skip);
    }
    return results;
  }

  function rowToDocId(row) {
    var val = row.value;
    // Users can explicitly specify a joined doc _id, or it
    // defaults to the doc _id that emitted the key/value.
    var docId = (val && typeof val === 'object' && val._id) || row.id;
    return docId;
  }

  function readAttachmentsAsBlobOrBuffer(res) {
    res.rows.forEach(function (row) {
      var atts = row.doc && row.doc._attachments;
      if (!atts) {
        return;
      }
      Object.keys(atts).forEach(function (filename) {
        var att = atts[filename];
        atts[filename].data = b64ToBluffer(att.data, att.content_type);
      });
    });
  }

  function postprocessAttachments(opts) {
    return function (res) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        readAttachmentsAsBlobOrBuffer(res);
      }
      return res;
    };
  }

  function addHttpParam(paramName, opts, params, asJson) {
    // add an http param from opts to params, optionally json-encoded
    var val = opts[paramName];
    if (typeof val !== 'undefined') {
      if (asJson) {
        val = encodeURIComponent(JSON.stringify(val));
      }
      params.push(paramName + '=' + val);
    }
  }

  function coerceInteger(integerCandidate) {
    if (typeof integerCandidate !== 'undefined') {
      var asNumber = Number(integerCandidate);
      // prevents e.g. '1foo' or '1.1' being coerced to 1
      if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
        return asNumber;
      } else {
        return integerCandidate;
      }
    }
  }

  function coerceOptions(opts) {
    opts.group_level = coerceInteger(opts.group_level);
    opts.limit = coerceInteger(opts.limit);
    opts.skip = coerceInteger(opts.skip);
    return opts;
  }

  function checkPositiveInteger(number) {
    if (number) {
      if (typeof number !== 'number') {
        return  new QueryParseError('Invalid value for integer: "' +
          number + '"');
      }
      if (number < 0) {
        return new QueryParseError('Invalid value for positive integer: ' +
          '"' + number + '"');
      }
    }
  }

  function checkQueryParseError(options, fun) {
    var startkeyName = options.descending ? 'endkey' : 'startkey';
    var endkeyName = options.descending ? 'startkey' : 'endkey';

    if (typeof options[startkeyName] !== 'undefined' &&
      typeof options[endkeyName] !== 'undefined' &&
      collate(options[startkeyName], options[endkeyName]) > 0) {
      throw new QueryParseError('No rows can match your key range, ' +
        'reverse your start_key and end_key or set {descending : true}');
    } else if (fun.reduce && options.reduce !== false) {
      if (options.include_docs) {
        throw new QueryParseError('{include_docs:true} is invalid for reduce');
      } else if (options.keys && options.keys.length > 1 &&
        !options.group && !options.group_level) {
        throw new QueryParseError('Multi-key fetches for reduce views must use ' +
          '{group: true}');
      }
    }
    ['group_level', 'limit', 'skip'].forEach(function (optionName) {
      var error = checkPositiveInteger(options[optionName]);
      if (error) {
        throw error;
      }
    });
  }

  function httpQuery(db, fun, opts) {
    // List of parameters to add to the PUT request
    var params = [];
    var body;
    var method = 'GET';
    var ok, status;

    // If opts.reduce exists and is defined, then add it to the list
    // of parameters.
    // If reduce=false then the results are that of only the map function
    // not the final result of map and reduce.
    addHttpParam('reduce', opts, params);
    addHttpParam('include_docs', opts, params);
    addHttpParam('attachments', opts, params);
    addHttpParam('limit', opts, params);
    addHttpParam('descending', opts, params);
    addHttpParam('group', opts, params);
    addHttpParam('group_level', opts, params);
    addHttpParam('skip', opts, params);
    addHttpParam('stale', opts, params);
    addHttpParam('conflicts', opts, params);
    addHttpParam('startkey', opts, params, true);
    addHttpParam('start_key', opts, params, true);
    addHttpParam('endkey', opts, params, true);
    addHttpParam('end_key', opts, params, true);
    addHttpParam('inclusive_end', opts, params);
    addHttpParam('key', opts, params, true);
    addHttpParam('update_seq', opts, params);

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    params = params === '' ? '' : '?' + params;

    // If keys are supplied, issue a POST to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
    if (typeof opts.keys !== 'undefined') {
      var MAX_URL_LENGTH = 2000;
      // according to http://stackoverflow.com/a/417184/680742,
      // the de facto URL length limit is 2000 characters

      var keysAsString =
        'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
      if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
        // If the keys are short enough, do a GET. we do this to work around
        // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
        params += (params[0] === '?' ? '&' : '?') + keysAsString;
      } else {
        method = 'POST';
        if (typeof fun === 'string') {
          body = {keys: opts.keys};
        } else { // fun is {map : mapfun}, so append to this
          fun.keys = opts.keys;
        }
      }
    }

    // We are referencing a query defined in the design doc
    if (typeof fun === 'string') {
      var parts = parseViewName(fun);
      return db.fetch('_design/' + parts[0] + '/_view/' + parts[1] + params, {
        headers: new h({'Content-Type': 'application/json'}),
        method: method,
        body: JSON.stringify(body)
      }).then(function (response) {
        ok = response.ok;
        status = response.status;
        return response.json();
      }).then(function (result) {
        if (!ok) {
          result.status = status;
          throw generateErrorFromResponse(result);
        }
        // fail the entire request if the result contains an error
        result.rows.forEach(function (row) {
          /* istanbul ignore if */
          if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
            throw new Error(row.reason);
          }
        });
        return result;
      }).then(postprocessAttachments(opts));
    }

    // We are using a temporary view, terrible for performance, good for testing
    body = body || {};
    Object.keys(fun).forEach(function (key) {
      if (Array.isArray(fun[key])) {
        body[key] = fun[key];
      } else {
        body[key] = fun[key].toString();
      }
    });

    return db.fetch('_temp_view' + params, {
      headers: new h({'Content-Type': 'application/json'}),
      method: 'POST',
      body: JSON.stringify(body)
    }).then(function (response) {
        ok = response.ok;
        status = response.status;
      return response.json();
    }).then(function (result) {
      if (!ok) {
        result.status = status;
        throw generateErrorFromResponse(result);
      }
      return result;
    }).then(postprocessAttachments(opts));
  }

  // custom adapters can define their own api._query
  // and override the default behavior
  /* istanbul ignore next */
  function customQuery(db, fun, opts) {
    return new Promise(function (resolve, reject) {
      db._query(fun, opts, function (err, res) {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });
  }

  // custom adapters can define their own api._viewCleanup
  // and override the default behavior
  /* istanbul ignore next */
  function customViewCleanup(db) {
    return new Promise(function (resolve, reject) {
      db._viewCleanup(function (err, res) {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });
  }

  function defaultsTo(value) {
    return function (reason) {
      /* istanbul ignore else */
      if (reason.status === 404) {
        return value;
      } else {
        throw reason;
      }
    };
  }

  // returns a promise for a list of docs to update, based on the input docId.
  // the order doesn't matter, because post-3.2.0, bulkDocs
  // is an atomic operation in all three adapters.
  function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
    var metaDocId = '_local/doc_' + docId;
    var defaultMetaDoc = {_id: metaDocId, keys: []};
    var docData = docIdsToChangesAndEmits.get(docId);
    var indexableKeysToKeyValues = docData[0];
    var changes = docData[1];

    function getMetaDoc() {
      if (isGenOne(changes)) {
        // generation 1, so we can safely assume initial state
        // for performance reasons (avoids unnecessary GETs)
        return Promise.resolve(defaultMetaDoc);
      }
      return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
    }

    function getKeyValueDocs(metaDoc) {
      if (!metaDoc.keys.length) {
        // no keys, no need for a lookup
        return Promise.resolve({rows: []});
      }
      return view.db.allDocs({
        keys: metaDoc.keys,
        include_docs: true
      });
    }

    function processKeyValueDocs(metaDoc, kvDocsRes) {
      var kvDocs = [];
      var oldKeys = new ExportedSet();

      for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
        var row = kvDocsRes.rows[i];
        var doc = row.doc;
        if (!doc) { // deleted
          continue;
        }
        kvDocs.push(doc);
        oldKeys.add(doc._id);
        doc._deleted = !indexableKeysToKeyValues.has(doc._id);
        if (!doc._deleted) {
          var keyValue = indexableKeysToKeyValues.get(doc._id);
          if ('value' in keyValue) {
            doc.value = keyValue.value;
          }
        }
      }
      var newKeys = mapToKeysArray(indexableKeysToKeyValues);
      newKeys.forEach(function (key) {
        if (!oldKeys.has(key)) {
          // new doc
          var kvDoc = {
            _id: key
          };
          var keyValue = indexableKeysToKeyValues.get(key);
          if ('value' in keyValue) {
            kvDoc.value = keyValue.value;
          }
          kvDocs.push(kvDoc);
        }
      });
      metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
      kvDocs.push(metaDoc);

      return kvDocs;
    }

    return getMetaDoc().then(function (metaDoc) {
      return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
        return processKeyValueDocs(metaDoc, kvDocsRes);
      });
    });
  }

  // updates all emitted key/value docs and metaDocs in the mrview database
  // for the given batch of documents from the source database
  function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
    var seqDocId = '_local/lastSeq';
    return view.db.get(seqDocId)
      .catch(defaultsTo({_id: seqDocId, seq: 0}))
      .then(function (lastSeqDoc) {
        var docIds = mapToKeysArray(docIdsToChangesAndEmits);
        return Promise.all(docIds.map(function (docId) {
          return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
        })).then(function (listOfDocsToPersist) {
          var docsToPersist = flatten(listOfDocsToPersist);
          lastSeqDoc.seq = seq;
          docsToPersist.push(lastSeqDoc);
          // write all docs in a single operation, update the seq once
          return view.db.bulkDocs({docs : docsToPersist});
        });
      });
  }

  function getQueue(view) {
    var viewName = typeof view === 'string' ? view : view.name;
    var queue = persistentQueues[viewName];
    if (!queue) {
      queue = persistentQueues[viewName] = new TaskQueue$1();
    }
    return queue;
  }

  function updateView(view) {
    return sequentialize(getQueue(view), function () {
      return updateViewInQueue(view);
    })();
  }

  function updateViewInQueue(view) {
    // bind the emit function once
    var mapResults;
    var doc;

    function emit(key, value) {
      var output = {id: doc._id, key: normalizeKey(key)};
      // Don't explicitly store the value unless it's defined and non-null.
      // This saves on storage space, because often people don't use it.
      if (typeof value !== 'undefined' && value !== null) {
        output.value = normalizeKey(value);
      }
      mapResults.push(output);
    }

    var mapFun = mapper(view.mapFun, emit);

    var currentSeq = view.seq || 0;

    function processChange(docIdsToChangesAndEmits, seq) {
      return function () {
        return saveKeyValues(view, docIdsToChangesAndEmits, seq);
      };
    }

    var queue = new TaskQueue$1();

    function processNextBatch() {
      return view.sourceDB.changes({
        return_docs: true,
        conflicts: true,
        include_docs: true,
        style: 'all_docs',
        since: currentSeq,
        limit: CHANGES_BATCH_SIZE$1
      }).then(processBatch);
    }

    function processBatch(response) {
      var results = response.results;
      if (!results.length) {
        return;
      }
      var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
      queue.add(processChange(docIdsToChangesAndEmits, currentSeq));
      if (results.length < CHANGES_BATCH_SIZE$1) {
        return;
      }
      return processNextBatch();
    }

    function createDocIdsToChangesAndEmits(results) {
      var docIdsToChangesAndEmits = new ExportedMap();
      for (var i = 0, len = results.length; i < len; i++) {
        var change = results[i];
        if (change.doc._id[0] !== '_') {
          mapResults = [];
          doc = change.doc;

          if (!doc._deleted) {
            tryMap(view.sourceDB, mapFun, doc);
          }
          mapResults.sort(sortByKeyThenValue);

          var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
          docIdsToChangesAndEmits.set(change.doc._id, [
            indexableKeysToKeyValues,
            change.changes
          ]);
        }
        currentSeq = change.seq;
      }
      return docIdsToChangesAndEmits;
    }

    function createIndexableKeysToKeyValues(mapResults) {
      var indexableKeysToKeyValues = new ExportedMap();
      var lastKey;
      for (var i = 0, len = mapResults.length; i < len; i++) {
        var emittedKeyValue = mapResults[i];
        var complexKey = [emittedKeyValue.key, emittedKeyValue.id];
        if (i > 0 && collate(emittedKeyValue.key, lastKey) === 0) {
          complexKey.push(i); // dup key+id, so make it unique
        }
        indexableKeysToKeyValues.set(toIndexableString(complexKey), emittedKeyValue);
        lastKey = emittedKeyValue.key;
      }
      return indexableKeysToKeyValues;
    }

    return processNextBatch().then(function () {
      return queue.finish();
    }).then(function () {
      view.seq = currentSeq;
    });
  }

  function reduceView(view, results, options) {
    if (options.group_level === 0) {
      delete options.group_level;
    }

    var shouldGroup = options.group || options.group_level;

    var reduceFun = reducer(view.reduceFun);

    var groups = [];
    var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY :
      options.group_level;
    results.forEach(function (e) {
      var last = groups[groups.length - 1];
      var groupKey = shouldGroup ? e.key : null;

      // only set group_level for array keys
      if (shouldGroup && Array.isArray(groupKey)) {
        groupKey = groupKey.slice(0, lvl);
      }

      if (last && collate(last.groupKey, groupKey) === 0) {
        last.keys.push([e.key, e.id]);
        last.values.push(e.value);
        return;
      }
      groups.push({
        keys: [[e.key, e.id]],
        values: [e.value],
        groupKey: groupKey
      });
    });
    results = [];
    for (var i = 0, len = groups.length; i < len; i++) {
      var e = groups[i];
      var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);
      if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
        // CouchDB returns an error if a built-in errors out
        throw reduceTry.error;
      }
      results.push({
        // CouchDB just sets the value to null if a non-built-in errors out
        value: reduceTry.error ? null : reduceTry.output,
        key: e.groupKey
      });
    }
    // no total_rows/offset when reducing
    return {rows: sliceResults(results, options.limit, options.skip)};
  }

  function queryView(view, opts) {
    return sequentialize(getQueue(view), function () {
      return queryViewInQueue(view, opts);
    })();
  }

  function queryViewInQueue(view, opts) {
    var totalRows;
    var shouldReduce = view.reduceFun && opts.reduce !== false;
    var skip = opts.skip || 0;
    if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
      // equivalent query
      opts.limit = 0;
      delete opts.keys;
    }

    function fetchFromView(viewOpts) {
      viewOpts.include_docs = true;
      return view.db.allDocs(viewOpts).then(function (res) {
        totalRows = res.total_rows;
        return res.rows.map(function (result) {

          // implicit migration - in older versions of PouchDB,
          // we explicitly stored the doc as {id: ..., key: ..., value: ...}
          // this is tested in a migration test
          /* istanbul ignore next */
          if ('value' in result.doc && typeof result.doc.value === 'object' &&
            result.doc.value !== null) {
            var keys = Object.keys(result.doc.value).sort();
            // this detection method is not perfect, but it's unlikely the user
            // emitted a value which was an object with these 3 exact keys
            var expectedKeys = ['id', 'key', 'value'];
            if (!(keys < expectedKeys || keys > expectedKeys)) {
              return result.doc.value;
            }
          }

          var parsedKeyAndDocId = parseIndexableString(result.doc._id);
          return {
            key: parsedKeyAndDocId[0],
            id: parsedKeyAndDocId[1],
            value: ('value' in result.doc ? result.doc.value : null)
          };
        });
      });
    }

    function onMapResultsReady(rows) {
      var finalResults;
      if (shouldReduce) {
        finalResults = reduceView(view, rows, opts);
      } else {
        finalResults = {
          total_rows: totalRows,
          offset: skip,
          rows: rows
        };
      }
      /* istanbul ignore if */
      if (opts.update_seq) {
        finalResults.update_seq = view.seq;
      }
      if (opts.include_docs) {
        var docIds = uniq(rows.map(rowToDocId));

        return view.sourceDB.allDocs({
          keys: docIds,
          include_docs: true,
          conflicts: opts.conflicts,
          attachments: opts.attachments,
          binary: opts.binary
        }).then(function (allDocsRes) {
          var docIdsToDocs = new ExportedMap();
          allDocsRes.rows.forEach(function (row) {
            docIdsToDocs.set(row.id, row.doc);
          });
          rows.forEach(function (row) {
            var docId = rowToDocId(row);
            var doc = docIdsToDocs.get(docId);
            if (doc) {
              row.doc = doc;
            }
          });
          return finalResults;
        });
      } else {
        return finalResults;
      }
    }

    if (typeof opts.keys !== 'undefined') {
      var keys = opts.keys;
      var fetchPromises = keys.map(function (key) {
        var viewOpts = {
          startkey : toIndexableString([key]),
          endkey   : toIndexableString([key, {}])
        };
        /* istanbul ignore if */
        if (opts.update_seq) {
          viewOpts.update_seq = true;
        }
        return fetchFromView(viewOpts);
      });
      return Promise.all(fetchPromises).then(flatten).then(onMapResultsReady);
    } else { // normal query, no 'keys'
      var viewOpts = {
        descending : opts.descending
      };
      /* istanbul ignore if */
      if (opts.update_seq) {
        viewOpts.update_seq = true;
      }
      var startkey;
      var endkey;
      if ('start_key' in opts) {
        startkey = opts.start_key;
      }
      if ('startkey' in opts) {
        startkey = opts.startkey;
      }
      if ('end_key' in opts) {
        endkey = opts.end_key;
      }
      if ('endkey' in opts) {
        endkey = opts.endkey;
      }
      if (typeof startkey !== 'undefined') {
        viewOpts.startkey = opts.descending ?
          toIndexableString([startkey, {}]) :
          toIndexableString([startkey]);
      }
      if (typeof endkey !== 'undefined') {
        var inclusiveEnd = opts.inclusive_end !== false;
        if (opts.descending) {
          inclusiveEnd = !inclusiveEnd;
        }

        viewOpts.endkey = toIndexableString(
          inclusiveEnd ? [endkey, {}] : [endkey]);
      }
      if (typeof opts.key !== 'undefined') {
        var keyStart = toIndexableString([opts.key]);
        var keyEnd = toIndexableString([opts.key, {}]);
        if (viewOpts.descending) {
          viewOpts.endkey = keyStart;
          viewOpts.startkey = keyEnd;
        } else {
          viewOpts.startkey = keyStart;
          viewOpts.endkey = keyEnd;
        }
      }
      if (!shouldReduce) {
        if (typeof opts.limit === 'number') {
          viewOpts.limit = opts.limit;
        }
        viewOpts.skip = skip;
      }
      return fetchFromView(viewOpts).then(onMapResultsReady);
    }
  }

  function httpViewCleanup(db) {
    return db.fetch('_view_cleanup', {
      headers: new h({'Content-Type': 'application/json'}),
      method: 'POST'
    }).then(function (response) {
      return response.json();
    });
  }

  function localViewCleanup(db) {
    return db.get('_local/' + localDocName).then(function (metaDoc) {
      var docsToViews = new ExportedMap();
      Object.keys(metaDoc.views).forEach(function (fullViewName) {
        var parts = parseViewName(fullViewName);
        var designDocName = '_design/' + parts[0];
        var viewName = parts[1];
        var views = docsToViews.get(designDocName);
        if (!views) {
          views = new ExportedSet();
          docsToViews.set(designDocName, views);
        }
        views.add(viewName);
      });
      var opts = {
        keys : mapToKeysArray(docsToViews),
        include_docs : true
      };
      return db.allDocs(opts).then(function (res) {
        var viewsToStatus = {};
        res.rows.forEach(function (row) {
          var ddocName = row.key.substring(8); // cuts off '_design/'
          docsToViews.get(row.key).forEach(function (viewName) {
            var fullViewName = ddocName + '/' + viewName;
            /* istanbul ignore if */
            if (!metaDoc.views[fullViewName]) {
              // new format, without slashes, to support PouchDB 2.2.0
              // migration test in pouchdb's browser.migration.js verifies this
              fullViewName = viewName;
            }
            var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
            // design doc deleted, or view function nonexistent
            var statusIsGood = row.doc && row.doc.views &&
              row.doc.views[viewName];
            viewDBNames.forEach(function (viewDBName) {
              viewsToStatus[viewDBName] =
                viewsToStatus[viewDBName] || statusIsGood;
            });
          });
        });
        var dbsToDelete = Object.keys(viewsToStatus).filter(
          function (viewDBName) { return !viewsToStatus[viewDBName]; });
        var destroyPromises = dbsToDelete.map(function (viewDBName) {
          return sequentialize(getQueue(viewDBName), function () {
            return new db.constructor(viewDBName, db.__opts).destroy();
          })();
        });
        return Promise.all(destroyPromises).then(function () {
          return {ok: true};
        });
      });
    }, defaultsTo({ok: true}));
  }

  function queryPromised(db, fun, opts) {
    /* istanbul ignore next */
    if (typeof db._query === 'function') {
      return customQuery(db, fun, opts);
    }
    if (isRemote(db)) {
      return httpQuery(db, fun, opts);
    }

    if (typeof fun !== 'string') {
      // temp_view
      checkQueryParseError(opts, fun);

      tempViewQueue.add(function () {
        var createViewPromise = createView(
          /* sourceDB */ db,
          /* viewName */ 'temp_view/temp_view',
          /* mapFun */ fun.map,
          /* reduceFun */ fun.reduce,
          /* temporary */ true,
          /* localDocName */ localDocName);
        return createViewPromise.then(function (view) {
          return fin(updateView(view).then(function () {
            return queryView(view, opts);
          }), function () {
            return view.db.destroy();
          });
        });
      });
      return tempViewQueue.finish();
    } else {
      // persistent view
      var fullViewName = fun;
      var parts = parseViewName(fullViewName);
      var designDocName = parts[0];
      var viewName = parts[1];
      return db.get('_design/' + designDocName).then(function (doc) {
        var fun = doc.views && doc.views[viewName];

        if (!fun) {
          // basic validator; it's assumed that every subclass would want this
          throw new NotFoundError('ddoc ' + doc._id + ' has no view named ' +
            viewName);
        }

        ddocValidator(doc, viewName);
        checkQueryParseError(opts, fun);

        var createViewPromise = createView(
          /* sourceDB */ db,
          /* viewName */ fullViewName,
          /* mapFun */ fun.map,
          /* reduceFun */ fun.reduce,
          /* temporary */ false,
          /* localDocName */ localDocName);
        return createViewPromise.then(function (view) {
          if (opts.stale === 'ok' || opts.stale === 'update_after') {
            if (opts.stale === 'update_after') {
              immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
                updateView(view);
              });
            }
            return queryView(view, opts);
          } else { // stale not ok
            return updateView(view).then(function () {
              return queryView(view, opts);
            });
          }
        });
      });
    }
  }

  function abstractQuery(fun, opts, callback) {
    var db = this;
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = opts ? coerceOptions(opts) : {};

    if (typeof fun === 'function') {
      fun = {map : fun};
    }

    var promise = Promise.resolve().then(function () {
      return queryPromised(db, fun, opts);
    });
    promisedCallback(promise, callback);
    return promise;
  }

  var abstractViewCleanup = callbackify(function () {
    var db = this;
    /* istanbul ignore next */
    if (typeof db._viewCleanup === 'function') {
      return customViewCleanup(db);
    }
    if (isRemote(db)) {
      return httpViewCleanup(db);
    }
    return localViewCleanup(db);
  });

  return {
    query: abstractQuery,
    viewCleanup: abstractViewCleanup
  };
}

var builtInReduce = {
  _sum: function (keys, values) {
    return sum(values);
  },

  _count: function (keys, values) {
    return values.length;
  },

  _stats: function (keys, values) {
    // no need to implement rereduce=true, because Pouch
    // will never call it
    function sumsqr(values) {
      var _sumsqr = 0;
      for (var i = 0, len = values.length; i < len; i++) {
        var num = values[i];
        _sumsqr += (num * num);
      }
      return _sumsqr;
    }
    return {
      sum     : sum(values),
      min     : Math.min.apply(null, values),
      max     : Math.max.apply(null, values),
      count   : values.length,
      sumsqr : sumsqr(values)
    };
  }
};

function getBuiltIn(reduceFunString) {
  if (/^_sum/.test(reduceFunString)) {
    return builtInReduce._sum;
  } else if (/^_count/.test(reduceFunString)) {
    return builtInReduce._count;
  } else if (/^_stats/.test(reduceFunString)) {
    return builtInReduce._stats;
  } else if (/^_/.test(reduceFunString)) {
    throw new Error(reduceFunString + ' is not a supported reduce function.');
  }
}

function mapper(mapFun, emit) {
  // for temp_views one can use emit(doc, emit), see #38
  if (typeof mapFun === "function" && mapFun.length === 2) {
    var origMap = mapFun;
    return function (doc) {
      return origMap(doc, emit);
    };
  } else {
    return evalFunctionWithEval(mapFun.toString(), emit);
  }
}

function reducer(reduceFun) {
  var reduceFunString = reduceFun.toString();
  var builtIn = getBuiltIn(reduceFunString);
  if (builtIn) {
    return builtIn;
  } else {
    return evalFunctionWithEval(reduceFunString);
  }
}

function ddocValidator(ddoc, viewName) {
  var fun = ddoc.views && ddoc.views[viewName];
  if (typeof fun.map !== 'string') {
    throw new NotFoundError('ddoc ' + ddoc._id + ' has no string view named ' +
      viewName + ', instead found object of type: ' + typeof fun.map);
  }
}

var localDocName = 'mrviews';
var abstract = createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator);

function query(fun, opts, callback) {
  return abstract.query.call(this, fun, opts, callback);
}

function viewCleanup(callback) {
  return abstract.viewCleanup.call(this, callback);
}

var mapreduce = {
  query: query,
  viewCleanup: viewCleanup
};

function isGenOne$1(rev$$1) {
  return /^1-/.test(rev$$1);
}

function fileHasChanged(localDoc, remoteDoc, filename) {
  return !localDoc._attachments ||
         !localDoc._attachments[filename] ||
         localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
}

function getDocAttachments(db, doc) {
  var filenames = Object.keys(doc._attachments);
  return Promise.all(filenames.map(function (filename) {
    return db.getAttachment(doc._id, filename, {rev: doc._rev});
  }));
}

function getDocAttachmentsFromTargetOrSource(target, src, doc) {
  var doCheckForLocalAttachments = isRemote(src) && !isRemote(target);
  var filenames = Object.keys(doc._attachments);

  if (!doCheckForLocalAttachments) {
    return getDocAttachments(src, doc);
  }

  return target.get(doc._id).then(function (localDoc) {
    return Promise.all(filenames.map(function (filename) {
      if (fileHasChanged(localDoc, doc, filename)) {
        return src.getAttachment(doc._id, filename);
      }

      return target.getAttachment(localDoc._id, filename);
    }));
  }).catch(function (error) {
    /* istanbul ignore if */
    if (error.status !== 404) {
      throw error;
    }

    return getDocAttachments(src, doc);
  });
}

function createBulkGetOpts(diffs) {
  var requests = [];
  Object.keys(diffs).forEach(function (id) {
    var missingRevs = diffs[id].missing;
    missingRevs.forEach(function (missingRev) {
      requests.push({
        id: id,
        rev: missingRev
      });
    });
  });

  return {
    docs: requests,
    revs: true,
    latest: true
  };
}

//
// Fetch all the documents from the src as described in the "diffs",
// which is a mapping of docs IDs to revisions. If the state ever
// changes to "cancelled", then the returned promise will be rejected.
// Else it will be resolved with a list of fetched documents.
//
function getDocs(src, target, diffs, state) {
  diffs = clone(diffs); // we do not need to modify this

  var resultDocs = [],
      ok = true;

  function getAllDocs() {

    var bulkGetOpts = createBulkGetOpts(diffs);

    if (!bulkGetOpts.docs.length) { // optimization: skip empty requests
      return;
    }

    return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
      /* istanbul ignore if */
      if (state.cancelled) {
        throw new Error('cancelled');
      }
      return Promise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
        return Promise.all(bulkGetInfo.docs.map(function (doc) {
          var remoteDoc = doc.ok;

          if (doc.error) {
            // when AUTO_COMPACTION is set, docs can be returned which look
            // like this: {"missing":"1-7c3ac256b693c462af8442f992b83696"}
            ok = false;
          }

          if (!remoteDoc || !remoteDoc._attachments) {
            return remoteDoc;
          }

          return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc)
                   .then(function (attachments) {
                           var filenames = Object.keys(remoteDoc._attachments);
                           attachments
                             .forEach(function (attachment, i) {
                                        var att = remoteDoc._attachments[filenames[i]];
                                        delete att.stub;
                                        delete att.length;
                                        att.data = attachment;
                                      });

                                      return remoteDoc;
                                    });
        }));
      }))

      .then(function (results) {
        resultDocs = resultDocs.concat(flatten(results).filter(Boolean));
      });
    });
  }

  function hasAttachments(doc) {
    return doc._attachments && Object.keys(doc._attachments).length > 0;
  }

  function hasConflicts(doc) {
    return doc._conflicts && doc._conflicts.length > 0;
  }

  function fetchRevisionOneDocs(ids) {
    // Optimization: fetch gen-1 docs and attachments in
    // a single request using _all_docs
    return src.allDocs({
      keys: ids,
      include_docs: true,
      conflicts: true
    }).then(function (res) {
      if (state.cancelled) {
        throw new Error('cancelled');
      }
      res.rows.forEach(function (row) {
        if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) ||
            hasAttachments(row.doc) || hasConflicts(row.doc)) {
          // if any of these conditions apply, we need to fetch using get()
          return;
        }

        // strip _conflicts array to appease CSG (#5793)
        /* istanbul ignore if */
        if (row.doc._conflicts) {
          delete row.doc._conflicts;
        }

        // the doc we got back from allDocs() is sufficient
        resultDocs.push(row.doc);
        delete diffs[row.id];
      });
    });
  }

  function getRevisionOneDocs() {
    // filter out the generation 1 docs and get them
    // leaving the non-generation one docs to be got otherwise
    var ids = Object.keys(diffs).filter(function (id) {
      var missing = diffs[id].missing;
      return missing.length === 1 && isGenOne$1(missing[0]);
    });
    if (ids.length > 0) {
      return fetchRevisionOneDocs(ids);
    }
  }

  function returnResult() {
    return { ok:ok, docs:resultDocs };
  }

  return Promise.resolve()
    .then(getRevisionOneDocs)
    .then(getAllDocs)
    .then(returnResult);
}

var CHECKPOINT_VERSION = 1;
var REPLICATOR = "pouchdb";
// This is an arbitrary number to limit the
// amount of replication history we save in the checkpoint.
// If we save too much, the checkpoing docs will become very big,
// if we save fewer, we'll run a greater risk of having to
// read all the changes from 0 when checkpoint PUTs fail
// CouchDB 2.0 has a more involved history pruning,
// but let's go for the simple version for now.
var CHECKPOINT_HISTORY_SIZE = 5;
var LOWEST_SEQ = 0;

function updateCheckpoint(db, id, checkpoint, session, returnValue) {
  return db.get(id).catch(function (err) {
    if (err.status === 404) {
      if (db.adapter === 'http' || db.adapter === 'https') {
        explainError(
          404, 'PouchDB is just checking if a remote checkpoint exists.'
        );
      }
      return {
        session_id: session,
        _id: id,
        history: [],
        replicator: REPLICATOR,
        version: CHECKPOINT_VERSION
      };
    }
    throw err;
  }).then(function (doc) {
    if (returnValue.cancelled) {
      return;
    }

    // if the checkpoint has not changed, do not update
    if (doc.last_seq === checkpoint) {
      return;
    }

    // Filter out current entry for this replication
    doc.history = (doc.history || []).filter(function (item) {
      return item.session_id !== session;
    });

    // Add the latest checkpoint to history
    doc.history.unshift({
      last_seq: checkpoint,
      session_id: session
    });

    // Just take the last pieces in history, to
    // avoid really big checkpoint docs.
    // see comment on history size above
    doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);

    doc.version = CHECKPOINT_VERSION;
    doc.replicator = REPLICATOR;

    doc.session_id = session;
    doc.last_seq = checkpoint;

    return db.put(doc).catch(function (err) {
      if (err.status === 409) {
        // retry; someone is trying to write a checkpoint simultaneously
        return updateCheckpoint(db, id, checkpoint, session, returnValue);
      }
      throw err;
    });
  });
}

function Checkpointer(src, target, id, returnValue, opts) {
  this.src = src;
  this.target = target;
  this.id = id;
  this.returnValue = returnValue;
  this.opts = opts || {};
}

Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
  var self = this;
  return this.updateTarget(checkpoint, session).then(function () {
    return self.updateSource(checkpoint, session);
  });
};

Checkpointer.prototype.updateTarget = function (checkpoint, session) {
  if (this.opts.writeTargetCheckpoint) {
    return updateCheckpoint(this.target, this.id, checkpoint,
      session, this.returnValue);
  } else {
    return Promise.resolve(true);
  }
};

Checkpointer.prototype.updateSource = function (checkpoint, session) {
  if (this.opts.writeSourceCheckpoint) {
    var self = this;
    return updateCheckpoint(this.src, this.id, checkpoint,
      session, this.returnValue)
      .catch(function (err) {
        if (isForbiddenError(err)) {
          self.opts.writeSourceCheckpoint = false;
          return true;
        }
        throw err;
      });
  } else {
    return Promise.resolve(true);
  }
};

var comparisons = {
  "undefined": function (targetDoc, sourceDoc) {
    // This is the previous comparison function
    if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
      return sourceDoc.last_seq;
    }
    /* istanbul ignore next */
    return 0;
  },
  "1": function (targetDoc, sourceDoc) {
    // This is the comparison function ported from CouchDB
    return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
  }
};

Checkpointer.prototype.getCheckpoint = function () {
  var self = this;

  if (self.opts && self.opts.writeSourceCheckpoint && !self.opts.writeTargetCheckpoint) {
    return self.src.get(self.id).then(function (sourceDoc) {
      return sourceDoc.last_seq || LOWEST_SEQ;
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        throw err;
      }
      return LOWEST_SEQ;
    });
  }

  return self.target.get(self.id).then(function (targetDoc) {
    if (self.opts && self.opts.writeTargetCheckpoint && !self.opts.writeSourceCheckpoint) {
      return targetDoc.last_seq || LOWEST_SEQ;
    }

    return self.src.get(self.id).then(function (sourceDoc) {
      // Since we can't migrate an old version doc to a new one
      // (no session id), we just go with the lowest seq in this case
      /* istanbul ignore if */
      if (targetDoc.version !== sourceDoc.version) {
        return LOWEST_SEQ;
      }

      var version;
      if (targetDoc.version) {
        version = targetDoc.version.toString();
      } else {
        version = "undefined";
      }

      if (version in comparisons) {
        return comparisons[version](targetDoc, sourceDoc);
      }
      /* istanbul ignore next */
      return LOWEST_SEQ;
    }, function (err) {
      if (err.status === 404 && targetDoc.last_seq) {
        return self.src.put({
          _id: self.id,
          last_seq: LOWEST_SEQ
        }).then(function () {
          return LOWEST_SEQ;
        }, function (err) {
          if (isForbiddenError(err)) {
            self.opts.writeSourceCheckpoint = false;
            return targetDoc.last_seq;
          }
          /* istanbul ignore next */
          return LOWEST_SEQ;
        });
      }
      throw err;
    });
  }).catch(function (err) {
    if (err.status !== 404) {
      throw err;
    }
    return LOWEST_SEQ;
  });
};
// This checkpoint comparison is ported from CouchDBs source
// they come from here:
// https://github.com/apache/couchdb-couch-replicator/blob/master/src/couch_replicator.erl#L863-L906

function compareReplicationLogs(srcDoc, tgtDoc) {
  if (srcDoc.session_id === tgtDoc.session_id) {
    return {
      last_seq: srcDoc.last_seq,
      history: srcDoc.history
    };
  }

  return compareReplicationHistory(srcDoc.history, tgtDoc.history);
}

function compareReplicationHistory(sourceHistory, targetHistory) {
  // the erlang loop via function arguments is not so easy to repeat in JS
  // therefore, doing this as recursion
  var S = sourceHistory[0];
  var sourceRest = sourceHistory.slice(1);
  var T = targetHistory[0];
  var targetRest = targetHistory.slice(1);

  if (!S || targetHistory.length === 0) {
    return {
      last_seq: LOWEST_SEQ,
      history: []
    };
  }

  var sourceId = S.session_id;
  /* istanbul ignore if */
  if (hasSessionId(sourceId, targetHistory)) {
    return {
      last_seq: S.last_seq,
      history: sourceHistory
    };
  }

  var targetId = T.session_id;
  if (hasSessionId(targetId, sourceRest)) {
    return {
      last_seq: T.last_seq,
      history: targetRest
    };
  }

  return compareReplicationHistory(sourceRest, targetRest);
}

function hasSessionId(sessionId, history) {
  var props = history[0];
  var rest = history.slice(1);

  if (!sessionId || history.length === 0) {
    return false;
  }

  if (sessionId === props.session_id) {
    return true;
  }

  return hasSessionId(sessionId, rest);
}

function isForbiddenError(err) {
  return typeof err.status === 'number' && Math.floor(err.status / 100) === 4;
}

var STARTING_BACK_OFF = 0;

function backOff(opts, returnValue, error, callback) {
  if (opts.retry === false) {
    returnValue.emit('error', error);
    returnValue.removeAllListeners();
    return;
  }
  /* istanbul ignore if */
  if (typeof opts.back_off_function !== 'function') {
    opts.back_off_function = defaultBackOff;
  }
  returnValue.emit('requestError', error);
  if (returnValue.state === 'active' || returnValue.state === 'pending') {
    returnValue.emit('paused', error);
    returnValue.state = 'stopped';
    var backOffSet = function backoffTimeSet() {
      opts.current_back_off = STARTING_BACK_OFF;
    };
    var removeBackOffSetter = function removeBackOffTimeSet() {
      returnValue.removeListener('active', backOffSet);
    };
    returnValue.once('paused', removeBackOffSetter);
    returnValue.once('active', backOffSet);
  }

  opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
  opts.current_back_off = opts.back_off_function(opts.current_back_off);
  setTimeout(callback, opts.current_back_off);
}

function sortObjectPropertiesByKey(queryParams) {
  return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
    result[key] = queryParams[key];
    return result;
  }, {});
}

// Generate a unique id particular to this replication.
// Not guaranteed to align perfectly with CouchDB's rep ids.
function generateReplicationId(src, target, opts) {
  var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : '';
  var filterFun = opts.filter ? opts.filter.toString() : '';
  var queryParams = '';
  var filterViewName =  '';
  var selector = '';

  // possibility for checkpoints to be lost here as behaviour of
  // JSON.stringify is not stable (see #6226)
  /* istanbul ignore if */
  if (opts.selector) {
    selector = JSON.stringify(opts.selector);
  }

  if (opts.filter && opts.query_params) {
    queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
  }

  if (opts.filter && opts.filter === '_view') {
    filterViewName = opts.view.toString();
  }

  return Promise.all([src.id(), target.id()]).then(function (res) {
    var queryData = res[0] + res[1] + filterFun + filterViewName +
      queryParams + docIds + selector;
    return new Promise(function (resolve) {
      binaryMd5(queryData, resolve);
    });
  }).then(function (md5sum) {
    // can't use straight-up md5 alphabet, because
    // the char '/' is interpreted as being for attachments,
    // and + is also not url-safe
    md5sum = md5sum.replace(/\//g, '.').replace(/\+/g, '_');
    return '_local/' + md5sum;
  });
}

function replicate(src, target, opts, returnValue, result) {
  var batches = [];               // list of batches to be processed
  var currentBatch;               // the batch currently being processed
  var pendingBatch = {
    seq: 0,
    changes: [],
    docs: []
  }; // next batch, not yet ready to be processed
  var writingCheckpoint = false;  // true while checkpoint is being written
  var changesCompleted = false;   // true when all changes received
  var replicationCompleted = false; // true when replication has completed
  var last_seq = 0;
  var continuous = opts.continuous || opts.live || false;
  var batch_size = opts.batch_size || 100;
  var batches_limit = opts.batches_limit || 10;
  var changesPending = false;     // true while src.changes is running
  var doc_ids = opts.doc_ids;
  var selector = opts.selector;
  var repId;
  var checkpointer;
  var changedDocs = [];
  // Like couchdb, every replication gets a unique session id
  var session = uuid();

  result = result || {
    ok: true,
    start_time: new Date().toISOString(),
    docs_read: 0,
    docs_written: 0,
    doc_write_failures: 0,
    errors: []
  };

  var changesOpts = {};
  returnValue.ready(src, target);

  function initCheckpointer() {
    if (checkpointer) {
      return Promise.resolve();
    }
    return generateReplicationId(src, target, opts).then(function (res) {
      repId = res;

      var checkpointOpts = {};
      if (opts.checkpoint === false) {
        checkpointOpts = { writeSourceCheckpoint: false, writeTargetCheckpoint: false };
      } else if (opts.checkpoint === 'source') {
        checkpointOpts = { writeSourceCheckpoint: true, writeTargetCheckpoint: false };
      } else if (opts.checkpoint === 'target') {
        checkpointOpts = { writeSourceCheckpoint: false, writeTargetCheckpoint: true };
      } else {
        checkpointOpts = { writeSourceCheckpoint: true, writeTargetCheckpoint: true };
      }

      checkpointer = new Checkpointer(src, target, repId, returnValue, checkpointOpts);
    });
  }

  function writeDocs() {
    changedDocs = [];

    if (currentBatch.docs.length === 0) {
      return;
    }
    var docs = currentBatch.docs;
    var bulkOpts = {timeout: opts.timeout};
    return target.bulkDocs({docs: docs, new_edits: false}, bulkOpts).then(function (res) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }

      // `res` doesn't include full documents (which live in `docs`), so we create a map of 
      // (id -> error), and check for errors while iterating over `docs`
      var errorsById = Object.create(null);
      res.forEach(function (res) {
        if (res.error) {
          errorsById[res.id] = res;
        }
      });

      var errorsNo = Object.keys(errorsById).length;
      result.doc_write_failures += errorsNo;
      result.docs_written += docs.length - errorsNo;

      docs.forEach(function (doc) {
        var error = errorsById[doc._id];
        if (error) {
          result.errors.push(error);
          // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)
          var errorName = (error.name || '').toLowerCase();
          if (errorName === 'unauthorized' || errorName === 'forbidden') {
            returnValue.emit('denied', clone(error));
          } else {
            throw error;
          }
        } else {
          changedDocs.push(doc);
        }
      });

    }, function (err) {
      result.doc_write_failures += docs.length;
      throw err;
    });
  }

  function finishBatch() {
    if (currentBatch.error) {
      throw new Error('There was a problem getting docs.');
    }
    result.last_seq = last_seq = currentBatch.seq;
    var outResult = clone(result);
    if (changedDocs.length) {
      outResult.docs = changedDocs;
      // Attach 'pending' property if server supports it (CouchDB 2.0+)
      /* istanbul ignore if */
      if (typeof currentBatch.pending === 'number') {
        outResult.pending = currentBatch.pending;
        delete currentBatch.pending;
      }
      returnValue.emit('change', outResult);
    }
    writingCheckpoint = true;
    return checkpointer.writeCheckpoint(currentBatch.seq,
        session).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }
      currentBatch = undefined;
      getChanges();
    }).catch(function (err) {
      onCheckpointError(err);
      throw err;
    });
  }

  function getDiffs() {
    var diff = {};
    currentBatch.changes.forEach(function (change) {
      // Couchbase Sync Gateway emits these, but we can ignore them
      /* istanbul ignore if */
      if (change.id === "_user/") {
        return;
      }
      diff[change.id] = change.changes.map(function (x) {
        return x.rev;
      });
    });
    return target.revsDiff(diff).then(function (diffs) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }
      // currentBatch.diffs elements are deleted as the documents are written
      currentBatch.diffs = diffs;
    });
  }

  function getBatchDocs() {
    return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
      currentBatch.error = !got.ok;
      got.docs.forEach(function (doc) {
        delete currentBatch.diffs[doc._id];
        result.docs_read++;
        currentBatch.docs.push(doc);
      });
    });
  }

  function startNextBatch() {
    if (returnValue.cancelled || currentBatch) {
      return;
    }
    if (batches.length === 0) {
      processPendingBatch(true);
      return;
    }
    currentBatch = batches.shift();
    getDiffs()
      .then(getBatchDocs)
      .then(writeDocs)
      .then(finishBatch)
      .then(startNextBatch)
      .catch(function (err) {
        abortReplication('batch processing terminated with error', err);
      });
  }


  function processPendingBatch(immediate$$1) {
    if (pendingBatch.changes.length === 0) {
      if (batches.length === 0 && !currentBatch) {
        if ((continuous && changesOpts.live) || changesCompleted) {
          returnValue.state = 'pending';
          returnValue.emit('paused');
        }
        if (changesCompleted) {
          completeReplication();
        }
      }
      return;
    }
    if (
      immediate$$1 ||
      changesCompleted ||
      pendingBatch.changes.length >= batch_size
    ) {
      batches.push(pendingBatch);
      pendingBatch = {
        seq: 0,
        changes: [],
        docs: []
      };
      if (returnValue.state === 'pending' || returnValue.state === 'stopped') {
        returnValue.state = 'active';
        returnValue.emit('active');
      }
      startNextBatch();
    }
  }


  function abortReplication(reason, err) {
    if (replicationCompleted) {
      return;
    }
    if (!err.message) {
      err.message = reason;
    }
    result.ok = false;
    result.status = 'aborting';
    batches = [];
    pendingBatch = {
      seq: 0,
      changes: [],
      docs: []
    };
    completeReplication(err);
  }


  function completeReplication(fatalError) {
    if (replicationCompleted) {
      return;
    }
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      result.status = 'cancelled';
      if (writingCheckpoint) {
        return;
      }
    }
    result.status = result.status || 'complete';
    result.end_time = new Date().toISOString();
    result.last_seq = last_seq;
    replicationCompleted = true;

    if (fatalError) {
      // need to extend the error because Firefox considers ".result" read-only
      fatalError = createError(fatalError);
      fatalError.result = result;

      // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)
      var errorName = (fatalError.name || '').toLowerCase();
      if (errorName === 'unauthorized' || errorName === 'forbidden') {
        returnValue.emit('error', fatalError);
        returnValue.removeAllListeners();
      } else {
        backOff(opts, returnValue, fatalError, function () {
          replicate(src, target, opts, returnValue);
        });
      }
    } else {
      returnValue.emit('complete', result);
      returnValue.removeAllListeners();
    }
  }


  function onChange(change, pending, lastSeq) {
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      return completeReplication();
    }
    // Attach 'pending' property if server supports it (CouchDB 2.0+)
    /* istanbul ignore if */
    if (typeof pending === 'number') {
      pendingBatch.pending = pending;
    }

    var filter = filterChange(opts)(change);
    if (!filter) {
      return;
    }
    pendingBatch.seq = change.seq || lastSeq;
    pendingBatch.changes.push(change);
    immediate__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      processPendingBatch(batches.length === 0 && changesOpts.live);
    });
  }


  function onChangesComplete(changes) {
    changesPending = false;
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      return completeReplication();
    }

    // if no results were returned then we're done,
    // else fetch more
    if (changes.results.length > 0) {
      changesOpts.since = changes.results[changes.results.length - 1].seq;
      getChanges();
      processPendingBatch(true);
    } else {

      var complete = function () {
        if (continuous) {
          changesOpts.live = true;
          getChanges();
        } else {
          changesCompleted = true;
        }
        processPendingBatch(true);
      };

      // update the checkpoint so we start from the right seq next time
      if (!currentBatch && changes.results.length === 0) {
        writingCheckpoint = true;
        checkpointer.writeCheckpoint(changes.last_seq,
            session).then(function () {
          writingCheckpoint = false;
          result.last_seq = last_seq = changes.last_seq;
          complete();
        })
        .catch(onCheckpointError);
      } else {
        complete();
      }
    }
  }


  function onChangesError(err) {
    changesPending = false;
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      return completeReplication();
    }
    abortReplication('changes rejected', err);
  }


  function getChanges() {
    if (!(
      !changesPending &&
      !changesCompleted &&
      batches.length < batches_limit
      )) {
      return;
    }
    changesPending = true;
    function abortChanges() {
      changes.cancel();
    }
    function removeListener() {
      returnValue.removeListener('cancel', abortChanges);
    }

    if (returnValue._changes) { // remove old changes() and listeners
      returnValue.removeListener('cancel', returnValue._abortChanges);
      returnValue._changes.cancel();
    }
    returnValue.once('cancel', abortChanges);

    var changes = src.changes(changesOpts)
      .on('change', onChange);
    changes.then(removeListener, removeListener);
    changes.then(onChangesComplete)
      .catch(onChangesError);

    if (opts.retry) {
      // save for later so we can cancel if necessary
      returnValue._changes = changes;
      returnValue._abortChanges = abortChanges;
    }
  }


  function startChanges() {
    initCheckpointer().then(function () {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        return;
      }
      return checkpointer.getCheckpoint().then(function (checkpoint) {
        last_seq = checkpoint;
        changesOpts = {
          since: last_seq,
          limit: batch_size,
          batch_size: batch_size,
          style: 'all_docs',
          doc_ids: doc_ids,
          selector: selector,
          return_docs: true // required so we know when we're done
        };
        if (opts.filter) {
          if (typeof opts.filter !== 'string') {
            // required for the client-side filter in onChange
            changesOpts.include_docs = true;
          } else { // ddoc filter
            changesOpts.filter = opts.filter;
          }
        }
        if ('heartbeat' in opts) {
          changesOpts.heartbeat = opts.heartbeat;
        }
        if ('timeout' in opts) {
          changesOpts.timeout = opts.timeout;
        }
        if (opts.query_params) {
          changesOpts.query_params = opts.query_params;
        }
        if (opts.view) {
          changesOpts.view = opts.view;
        }
        getChanges();
      });
    }).catch(function (err) {
      abortReplication('getCheckpoint rejected with ', err);
    });
  }

  /* istanbul ignore next */
  function onCheckpointError(err) {
    writingCheckpoint = false;
    abortReplication('writeCheckpoint completed with error', err);
  }

  /* istanbul ignore if */
  if (returnValue.cancelled) { // cancelled immediately
    completeReplication();
    return;
  }

  if (!returnValue._addedListeners) {
    returnValue.once('cancel', completeReplication);

    if (typeof opts.complete === 'function') {
      returnValue.once('error', opts.complete);
      returnValue.once('complete', function (result) {
        opts.complete(null, result);
      });
    }
    returnValue._addedListeners = true;
  }

  if (typeof opts.since === 'undefined') {
    startChanges();
  } else {
    initCheckpointer().then(function () {
      writingCheckpoint = true;
      return checkpointer.writeCheckpoint(opts.since, session);
    }).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        return;
      }
      last_seq = opts.since;
      startChanges();
    }).catch(onCheckpointError);
  }
}

// We create a basic promise so the caller can cancel the replication possibly
// before we have actually started listening to changes etc
inherits__WEBPACK_IMPORTED_MODULE_5___default()(Replication, events__WEBPACK_IMPORTED_MODULE_6___default.a);
function Replication() {
  events__WEBPACK_IMPORTED_MODULE_6___default.a.call(this);
  this.cancelled = false;
  this.state = 'pending';
  var self = this;
  var promise = new Promise(function (fulfill, reject) {
    self.once('complete', fulfill);
    self.once('error', reject);
  });
  self.then = function (resolve, reject) {
    return promise.then(resolve, reject);
  };
  self.catch = function (reject) {
    return promise.catch(reject);
  };
  // As we allow error handling via "error" event as well,
  // put a stub in here so that rejecting never throws UnhandledError.
  self.catch(function () {});
}

Replication.prototype.cancel = function () {
  this.cancelled = true;
  this.state = 'cancelled';
  this.emit('cancel');
};

Replication.prototype.ready = function (src, target) {
  var self = this;
  if (self._readyCalled) {
    return;
  }
  self._readyCalled = true;

  function onDestroy() {
    self.cancel();
  }
  src.once('destroyed', onDestroy);
  target.once('destroyed', onDestroy);
  function cleanup() {
    src.removeListener('destroyed', onDestroy);
    target.removeListener('destroyed', onDestroy);
  }
  self.once('complete', cleanup);
};

function toPouch(db, opts) {
  var PouchConstructor = opts.PouchConstructor;
  if (typeof db === 'string') {
    return new PouchConstructor(db, opts);
  } else {
    return db;
  }
}

function replicateWrapper(src, target, opts, callback) {

  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof opts === 'undefined') {
    opts = {};
  }

  if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
    throw createError(BAD_REQUEST,
                       "`doc_ids` filter parameter is not a list.");
  }

  opts.complete = callback;
  opts = clone(opts);
  opts.continuous = opts.continuous || opts.live;
  opts.retry = ('retry' in opts) ? opts.retry : false;
  /*jshint validthis:true */
  opts.PouchConstructor = opts.PouchConstructor || this;
  var replicateRet = new Replication(opts);
  var srcPouch = toPouch(src, opts);
  var targetPouch = toPouch(target, opts);
  replicate(srcPouch, targetPouch, opts, replicateRet);
  return replicateRet;
}

inherits__WEBPACK_IMPORTED_MODULE_5___default()(Sync, events__WEBPACK_IMPORTED_MODULE_6___default.a);
function sync(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof opts === 'undefined') {
    opts = {};
  }
  opts = clone(opts);
  /*jshint validthis:true */
  opts.PouchConstructor = opts.PouchConstructor || this;
  src = toPouch(src, opts);
  target = toPouch(target, opts);
  return new Sync(src, target, opts, callback);
}

function Sync(src, target, opts, callback) {
  var self = this;
  this.canceled = false;

  var optsPush = opts.push ? $inject_Object_assign({}, opts, opts.push) : opts;
  var optsPull = opts.pull ? $inject_Object_assign({}, opts, opts.pull) : opts;

  this.push = replicateWrapper(src, target, optsPush);
  this.pull = replicateWrapper(target, src, optsPull);

  this.pushPaused = true;
  this.pullPaused = true;

  function pullChange(change) {
    self.emit('change', {
      direction: 'pull',
      change: change
    });
  }
  function pushChange(change) {
    self.emit('change', {
      direction: 'push',
      change: change
    });
  }
  function pushDenied(doc) {
    self.emit('denied', {
      direction: 'push',
      doc: doc
    });
  }
  function pullDenied(doc) {
    self.emit('denied', {
      direction: 'pull',
      doc: doc
    });
  }
  function pushPaused() {
    self.pushPaused = true;
    /* istanbul ignore if */
    if (self.pullPaused) {
      self.emit('paused');
    }
  }
  function pullPaused() {
    self.pullPaused = true;
    /* istanbul ignore if */
    if (self.pushPaused) {
      self.emit('paused');
    }
  }
  function pushActive() {
    self.pushPaused = false;
    /* istanbul ignore if */
    if (self.pullPaused) {
      self.emit('active', {
        direction: 'push'
      });
    }
  }
  function pullActive() {
    self.pullPaused = false;
    /* istanbul ignore if */
    if (self.pushPaused) {
      self.emit('active', {
        direction: 'pull'
      });
    }
  }

  var removed = {};

  function removeAll(type) { // type is 'push' or 'pull'
    return function (event, func) {
      var isChange = event === 'change' &&
        (func === pullChange || func === pushChange);
      var isDenied = event === 'denied' &&
        (func === pullDenied || func === pushDenied);
      var isPaused = event === 'paused' &&
        (func === pullPaused || func === pushPaused);
      var isActive = event === 'active' &&
        (func === pullActive || func === pushActive);

      if (isChange || isDenied || isPaused || isActive) {
        if (!(event in removed)) {
          removed[event] = {};
        }
        removed[event][type] = true;
        if (Object.keys(removed[event]).length === 2) {
          // both push and pull have asked to be removed
          self.removeAllListeners(event);
        }
      }
    };
  }

  if (opts.live) {
    this.push.on('complete', self.pull.cancel.bind(self.pull));
    this.pull.on('complete', self.push.cancel.bind(self.push));
  }

  function addOneListener(ee, event, listener) {
    if (ee.listeners(event).indexOf(listener) == -1) {
      ee.on(event, listener);
    }
  }

  this.on('newListener', function (event) {
    if (event === 'change') {
      addOneListener(self.pull, 'change', pullChange);
      addOneListener(self.push, 'change', pushChange);
    } else if (event === 'denied') {
      addOneListener(self.pull, 'denied', pullDenied);
      addOneListener(self.push, 'denied', pushDenied);
    } else if (event === 'active') {
      addOneListener(self.pull, 'active', pullActive);
      addOneListener(self.push, 'active', pushActive);
    } else if (event === 'paused') {
      addOneListener(self.pull, 'paused', pullPaused);
      addOneListener(self.push, 'paused', pushPaused);
    }
  });

  this.on('removeListener', function (event) {
    if (event === 'change') {
      self.pull.removeListener('change', pullChange);
      self.push.removeListener('change', pushChange);
    } else if (event === 'denied') {
      self.pull.removeListener('denied', pullDenied);
      self.push.removeListener('denied', pushDenied);
    } else if (event === 'active') {
      self.pull.removeListener('active', pullActive);
      self.push.removeListener('active', pushActive);
    } else if (event === 'paused') {
      self.pull.removeListener('paused', pullPaused);
      self.push.removeListener('paused', pushPaused);
    }
  });

  this.pull.on('removeListener', removeAll('pull'));
  this.push.on('removeListener', removeAll('push'));

  var promise = Promise.all([
    this.push,
    this.pull
  ]).then(function (resp) {
    var out = {
      push: resp[0],
      pull: resp[1]
    };
    self.emit('complete', out);
    if (callback) {
      callback(null, out);
    }
    self.removeAllListeners();
    return out;
  }, function (err) {
    self.cancel();
    if (callback) {
      // if there's a callback, then the callback can receive
      // the error event
      callback(err);
    } else {
      // if there's no callback, then we're safe to emit an error
      // event, which would otherwise throw an unhandled error
      // due to 'error' being a special event in EventEmitters
      self.emit('error', err);
    }
    self.removeAllListeners();
    if (callback) {
      // no sense throwing if we're already emitting an 'error' event
      throw err;
    }
  });

  this.then = function (success, err) {
    return promise.then(success, err);
  };

  this.catch = function (err) {
    return promise.catch(err);
  };
}

Sync.prototype.cancel = function () {
  if (!this.canceled) {
    this.canceled = true;
    this.push.cancel();
    this.pull.cancel();
  }
};

function replication(PouchDB) {
  PouchDB.replicate = replicateWrapper;
  PouchDB.sync = sync;

  Object.defineProperty(PouchDB.prototype, 'replicate', {
    get: function () {
      var self = this;
      if (typeof this.replicateMethods === 'undefined') {
        this.replicateMethods = {
          from: function (other, opts, callback) {
            return self.constructor.replicate(other, self, opts, callback);
          },
          to: function (other, opts, callback) {
            return self.constructor.replicate(self, other, opts, callback);
          }
        };
      }
      return this.replicateMethods;
    }
  });

  PouchDB.prototype.sync = function (dbName, opts, callback) {
    return this.constructor.sync(this, dbName, opts, callback);
  };
}

PouchDB.plugin(IDBPouch)
  .plugin(HttpPouch$1)
  .plugin(mapreduce)
  .plugin(replication);

// Pull from src because pouchdb-node/pouchdb-browser themselves

/* harmony default export */ __webpack_exports__["default"] = (PouchDB);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value === 'string') value = stringToBytes(value);
    if (typeof namespace === 'string') namespace = uuidToBytes(namespace);

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  if (typeof options === 'string') {
    buf = options === 'binary' ? new Uint8Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    var start = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[start + i] = rnds[i];
    }

    return buf;
  }

  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../../node_modules/pouchdb/node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../../node_modules/spark-md5/spark-md5.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/spark-md5/spark-md5.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
    if (true) {
        // Node/CommonJS
        module.exports = factory();
    } else { var glob; }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));


/***/ }),

/***/ "../../node_modules/vuvuzela/index.js":
/*!*******************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vuvuzela/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Stringify/parse functions that don't operate
 * recursively, so they avoid call stack exceeded
 * errors.
 */
exports.stringify = function stringify(input) {
  var queue = [];
  queue.push({obj: input});

  var res = '';
  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
  while ((next = queue.pop())) {
    obj = next.obj;
    prefix = next.prefix || '';
    val = next.val || '';
    res += prefix;
    if (val) {
      res += val;
    } else if (typeof obj !== 'object') {
      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
    } else if (obj === null) {
      res += 'null';
    } else if (Array.isArray(obj)) {
      queue.push({val: ']'});
      for (i = obj.length - 1; i >= 0; i--) {
        arrayPrefix = i === 0 ? '' : ',';
        queue.push({obj: obj[i], prefix: arrayPrefix});
      }
      queue.push({val: '['});
    } else { // object
      keys = [];
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      queue.push({val: '}'});
      for (i = keys.length - 1; i >= 0; i--) {
        key = keys[i];
        value = obj[key];
        objPrefix = (i > 0 ? ',' : '');
        objPrefix += JSON.stringify(key) + ':';
        queue.push({obj: value, prefix: objPrefix});
      }
      queue.push({val: '{'});
    }
  }
  return res;
};

// Convenience function for the parse function.
// This pop function is basically copied from
// pouchCollate.parseIndexableString
function pop(obj, stack, metaStack) {
  var lastMetaElement = metaStack[metaStack.length - 1];
  if (obj === lastMetaElement.element) {
    // popping a meta-element, e.g. an object whose value is another object
    metaStack.pop();
    lastMetaElement = metaStack[metaStack.length - 1];
  }
  var element = lastMetaElement.element;
  var lastElementIndex = lastMetaElement.index;
  if (Array.isArray(element)) {
    element.push(obj);
  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
    var key = stack.pop();
    element[key] = obj;
  } else {
    stack.push(obj); // obj with key only
  }
}

exports.parse = function (str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;
  var collationIndex,parsedNum,numChar;
  var parsedString,lastCh,numConsecutiveSlashes,ch;
  var arrayElement, objElement;
  while (true) {
    collationIndex = str[i++];
    if (collationIndex === '}' ||
        collationIndex === ']' ||
        typeof collationIndex === 'undefined') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack.pop(), stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case ' ':
      case '\t':
      case '\n':
      case ':':
      case ',':
        break;
      case 'n':
        i += 3; // 'ull'
        pop(null, stack, metaStack);
        break;
      case 't':
        i += 3; // 'rue'
        pop(true, stack, metaStack);
        break;
      case 'f':
        i += 4; // 'alse'
        pop(false, stack, metaStack);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
        parsedNum = '';
        i--;
        while (true) {
          numChar = str[i++];
          if (/[\d\.\-e\+]/.test(numChar)) {
            parsedNum += numChar;
          } else {
            i--;
            break;
          }
        }
        pop(parseFloat(parsedNum), stack, metaStack);
        break;
      case '"':
        parsedString = '';
        lastCh = void 0;
        numConsecutiveSlashes = 0;
        while (true) {
          ch = str[i++];
          if (ch !== '"' || (lastCh === '\\' &&
              numConsecutiveSlashes % 2 === 1)) {
            parsedString += ch;
            lastCh = ch;
            if (lastCh === '\\') {
              numConsecutiveSlashes++;
            } else {
              numConsecutiveSlashes = 0;
            }
          } else {
            break;
          }
        }
        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
        break;
      case '[':
        arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '{':
        objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      default:
        throw new Error(
          'unexpectedly reached end of input: ' + collationIndex);
    }
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvYXJnc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL21lc3NhZ2VDaGFubmVsLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3F1ZXVlTWljcm90YXNrLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL2xpYi9pbmRleC1icm93c2VyLmVzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3BhcmstbWQ1L3NwYXJrLW1kNS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdnV2dXplbGEvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLG1CQUFZO0FBQ3RCLEVBQUUsbUJBQU8sQ0FBQyw0RUFBa0I7QUFDNUIsRUFBRSxtQkFBTyxDQUFDLG1FQUFlO0FBQ3pCLEVBQUUsbUJBQU8sQ0FBQyw0RUFBa0I7QUFDNUIsRUFBRSxtQkFBTyxDQUFDLHNFQUFlO0FBQ3pCLEVBQUUsbUJBQU8sQ0FBQyw4REFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEdBLDhDQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ2pCQSw4Q0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUNyQkEsOENBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQSw4Q0FBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFFO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsV0FBVztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQUcsU0FBUyxnREFBRzs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsZ0RBQUc7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtDQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVcsdUNBQUUsQ0FBQzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsNENBQTRDLFNBQVM7QUFDckQsc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEw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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELHVCQUF1QjtBQUN4RTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHVCQUF1QixLQUFLO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQixtQ0FBbUM7QUFDbkMsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCxnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsUUFBUTtBQUNSLE9BQU87QUFDUDs7QUFFQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJDQUEyQyxTQUFTO0FBQ3BELDRCQUE0QixrQkFBa0I7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRyxPQUFPO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLEdBQUcsT0FBTztBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFD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QUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCO0FBQ2pCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFTO0FBQ2Y7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxlQUFlO0FBQ25FLHdDQUF3QyxvQkFBb0I7QUFDNUQsa0RBQWtELGFBQWE7QUFDL0Qsd0NBQXdDLGtCQUFrQjtBQUMxRCxzQ0FBc0Msb0NBQW9DO0FBQzFFOztBQUVBO0FBQ0EsOERBQThELGVBQWU7O0FBRTdFO0FBQ0EsdUNBQXVDLGVBQWU7O0FBRXREO0FBQ0E7QUFDQSxPQUFPLG9CQUFvQjtBQUMzQjtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZUFBZTs7QUFFN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQsa0RBQWtELGFBQWE7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9CQUFvQjtBQUMzQjtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1Q0FBdUM7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsZ0RBQVk7QUFDeEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLEVBQUUsZ0RBQVM7QUFDWDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQyxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLCtDQUErQyxJQUFlO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkNBQTZDLElBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVUsRUFBRSxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FB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QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQSxxQ0FBcUM7QUFDckMsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEMsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1AsMEJBQTBCO0FBQzFCLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQiw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBUSxjQUFjLDZDQUFFO0FBQ3hCO0FBQ0EsRUFBRSw2Q0FBRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBUSxPQUFPLDZDQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JELHFEQUFxRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUM1aFV2QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVlLDBFQUFXLEU7Ozs7Ozs7Ozs7OztBQ2xCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRnhDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEOztBQUVBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxrRUFBRyxFOzs7Ozs7Ozs7Ozs7QUN0TmxCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7O0FBRWQsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7O0FBRWQsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwNTJiOTg2OTY0OGI0NDVlN2Q5ZS92ZW5kb3JzfmNvdXJzZV8kY291cnNlTmFtZX5jb3Vyc2VfJGNvdXJzZU5hbWUkOTNfc2tpbGxfJDkxaWR+bG9naW5+c2lnbiQ0NXVwfnNpZ24kNDV1cCQ0NXN1Y2Nlc3MudmVuZG9yc35jb3Vyc2VfJGNvdXJzZU5hbWV+Y291cnNlXyRjb3Vyc2VOYW1lJDkzX3NraWxsXyQ5MWlkfmxvZ2lufnNpZ24kNDV1cH5zaWduJDQ1dXAkNDVzdWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFyZ3NBcnJheTtcblxuZnVuY3Rpb24gYXJnc0FycmF5KGZ1bikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW4pIHtcbiAgICAgIHZhciBhcmdzID0gW107XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bi5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuLmNhbGwodGhpcywgW10pO1xuICAgIH1cbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgdHlwZXMgPSBbXG4gIHJlcXVpcmUoJy4vbmV4dFRpY2snKSxcbiAgcmVxdWlyZSgnLi9xdWV1ZU1pY3JvdGFzaycpLFxuICByZXF1aXJlKCcuL211dGF0aW9uLmpzJyksXG4gIHJlcXVpcmUoJy4vbWVzc2FnZUNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi9zdGF0ZUNoYW5nZScpLFxuICByZXF1aXJlKCcuL3RpbWVvdXQnKVxuXTtcbnZhciBkcmFpbmluZztcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xudmFyIHF1ZXVlID0gW107XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBuZXh0VGljaygpO1xuICB9XG59XG5cbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnRRdWV1ZSAmJiArK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICB9XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBxdWV1ZUluZGV4ID0gLTE7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cbnZhciBzY2hlZHVsZURyYWluO1xudmFyIGkgPSAtMTtcbnZhciBsZW4gPSB0eXBlcy5sZW5ndGg7XG53aGlsZSAoKytpIDwgbGVuKSB7XG4gIGlmICh0eXBlc1tpXSAmJiB0eXBlc1tpXS50ZXN0ICYmIHR5cGVzW2ldLnRlc3QoKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSB0eXBlc1tpXS5pbnN0YWxsKG5leHRUaWNrKTtcbiAgICBicmVhaztcbiAgfVxufVxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW4gPSB0aGlzLmZ1bjtcbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgY2FzZSAwOlxuICAgIHJldHVybiBmdW4oKTtcbiAgY2FzZSAxOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gZnVuLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgfVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cbiAgcXVldWUucHVzaChuZXcgSXRlbSh0YXNrLCBhcmdzKSk7XG4gIGlmICghc2NoZWR1bGVkICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAvLyB3ZSBjYW4gb25seSBnZXQgaGVyZSBpbiBJRTEwXG4gICAgLy8gd2hpY2ggZG9lc24ndCBoYW5kZWwgcG9zdE1lc3NhZ2Ugd2VsbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vYmFzZWQgb2ZmIHJzdnAgaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qc1xuLy9saWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLy9odHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL2xpYi9yc3ZwL2FzYXAuanNcblxudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE11dGF0aW9uO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKGhhbmRsZSk7XG4gIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIGdsb2JhbC5xdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZ2xvYmFsLnF1ZXVlTWljcm90YXNrKGZ1bmMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlKCk7XG5cbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICB9O1xuICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuXG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCh0LCAwKTtcbiAgfTtcbn07IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJpbXBvcnQgaW1tZWRpYXRlIGZyb20gJ2ltbWVkaWF0ZSc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IE1kNSBmcm9tICdzcGFyay1tZDUnO1xuaW1wb3J0IHZ1dnV6ZWxhIGZyb20gJ3Z1dnV6ZWxhJztcbmltcG9ydCBnZXRBcmd1bWVudHMgZnJvbSAnYXJnc2FycmF5JztcbmltcG9ydCBpbmhlcml0cyBmcm9tICdpbmhlcml0cyc7XG5pbXBvcnQgRUUgZnJvbSAnZXZlbnRzJztcblxuZnVuY3Rpb24gbWFuZ2xlKGtleSkge1xuICByZXR1cm4gJyQnICsga2V5O1xufVxuZnVuY3Rpb24gdW5tYW5nbGUoa2V5KSB7XG4gIHJldHVybiBrZXkuc3Vic3RyaW5nKDEpO1xufVxuZnVuY3Rpb24gTWFwJDEoKSB7XG4gIHRoaXMuX3N0b3JlID0ge307XG59XG5NYXAkMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgbWFuZ2xlZCA9IG1hbmdsZShrZXkpO1xuICByZXR1cm4gdGhpcy5fc3RvcmVbbWFuZ2xlZF07XG59O1xuTWFwJDEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciBtYW5nbGVkID0gbWFuZ2xlKGtleSk7XG4gIHRoaXMuX3N0b3JlW21hbmdsZWRdID0gdmFsdWU7XG4gIHJldHVybiB0cnVlO1xufTtcbk1hcCQxLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBtYW5nbGVkID0gbWFuZ2xlKGtleSk7XG4gIHJldHVybiBtYW5nbGVkIGluIHRoaXMuX3N0b3JlO1xufTtcbk1hcCQxLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBtYW5nbGVkID0gbWFuZ2xlKGtleSk7XG4gIHZhciByZXMgPSBtYW5nbGVkIGluIHRoaXMuX3N0b3JlO1xuICBkZWxldGUgdGhpcy5fc3RvcmVbbWFuZ2xlZF07XG4gIHJldHVybiByZXM7XG59O1xuTWFwJDEucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9zdG9yZSk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fc3RvcmVba2V5XTtcbiAgICBrZXkgPSB1bm1hbmdsZShrZXkpO1xuICAgIGNiKHZhbHVlLCBrZXkpO1xuICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcCQxLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9zdG9yZSkubGVuZ3RoO1xuICB9XG59KTtcblxuZnVuY3Rpb24gU2V0JDEoYXJyYXkpIHtcbiAgdGhpcy5fc3RvcmUgPSBuZXcgTWFwJDEoKTtcblxuICAvLyBpbml0IHdpdGggYW4gYXJyYXlcbiAgaWYgKGFycmF5ICYmIEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmFkZChhcnJheVtpXSk7XG4gICAgfVxuICB9XG59XG5TZXQkMS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5fc3RvcmUuc2V0KGtleSwgdHJ1ZSk7XG59O1xuU2V0JDEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX3N0b3JlLmhhcyhrZXkpO1xufTtcblNldCQxLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX3N0b3JlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjYihrZXkpO1xuICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0JDEucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNpemU7XG4gIH1cbn0pO1xuXG4vKiBnbG9iYWwgTWFwLFNldCxTeW1ib2wgKi9cbi8vIEJhc2VkIG9uIGh0dHBzOi8va2FuZ2F4LmdpdGh1Yi5pby9jb21wYXQtdGFibGUvZXM2LyB3ZSBjYW4gc25pZmYgb3V0XG4vLyBpbmNvbXBsZXRlIE1hcC9TZXQgaW1wbGVtZW50YXRpb25zIHdoaWNoIHdvdWxkIG90aGVyd2lzZSBjYXVzZSBvdXIgdGVzdHMgdG8gZmFpbC5cbi8vIE5vdGFibHkgdGhleSBmYWlsIGluIElFMTEgYW5kIGlPUyA4LjQsIHdoaWNoIHRoaXMgcHJldmVudHMuXG5mdW5jdGlvbiBzdXBwb3J0c01hcEFuZFNldCgpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihNYXAsIFN5bWJvbC5zcGVjaWVzKTtcbiAgcmV0dXJuIHByb3AgJiYgJ2dldCcgaW4gcHJvcCAmJiBNYXBbU3ltYm9sLnNwZWNpZXNdID09PSBNYXA7XG59XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9tb250YWdlanMvY29sbGVjdGlvbnNcblxudmFyIEV4cG9ydGVkU2V0O1xudmFyIEV4cG9ydGVkTWFwO1xuXG57XG4gIGlmIChzdXBwb3J0c01hcEFuZFNldCgpKSB7IC8vIHByZWZlciBidWlsdC1pbiBNYXAvU2V0XG4gICAgRXhwb3J0ZWRTZXQgPSBTZXQ7XG4gICAgRXhwb3J0ZWRNYXAgPSBNYXA7XG4gIH0gZWxzZSB7IC8vIGZhbGwgYmFjayB0byBvdXIgcG9seWZpbGxcbiAgICBFeHBvcnRlZFNldCA9IFNldCQxO1xuICAgIEV4cG9ydGVkTWFwID0gTWFwJDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCaW5hcnlPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIG9iamVjdCBpbnN0YW5jZW9mIEJsb2IpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGJ1ZmYpIHtcbiAgaWYgKHR5cGVvZiBidWZmLnNsaWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJ1ZmYuc2xpY2UoMCk7XG4gIH1cbiAgLy8gSUUxMC0xMSBzbGljZSgpIHBvbHlmaWxsXG4gIHZhciB0YXJnZXQgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZi5ieXRlTGVuZ3RoKTtcbiAgdmFyIHRhcmdldEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGFyZ2V0KTtcbiAgdmFyIHNvdXJjZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZik7XG4gIHRhcmdldEFycmF5LnNldChzb3VyY2VBcnJheSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNsb25lQmluYXJ5T2JqZWN0KG9iamVjdCkge1xuICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuICB9XG4gIHZhciBzaXplID0gb2JqZWN0LnNpemU7XG4gIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG4gIC8vIEJsb2JcbiAgaWYgKHR5cGVvZiBvYmplY3Quc2xpY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb2JqZWN0LnNsaWNlKDAsIHNpemUsIHR5cGUpO1xuICB9XG4gIC8vIFBoYW50b21KUyBzbGljZSgpIHJlcGxhY2VtZW50XG4gIHJldHVybiBvYmplY3Qud2Via2l0U2xpY2UoMCwgc2l6ZSwgdHlwZSk7XG59XG5cbi8vIG1vc3Qgb2YgdGhpcyBpcyBib3Jyb3dlZCBmcm9tIGxvZGFzaC5pc1BsYWluT2JqZWN0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zpcy1jb21wb25lbnRzL2xvZGFzaC5pc3BsYWlub2JqZWN0L1xuLy8gYmxvYi8yOWMzNTgxNDBhNzRmMjUyYWViMDhjOWViMjhiZWY4NmYyMjE3ZDRhL2luZGV4LmpzXG5cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm90byA9PT0gbnVsbCkgeyAvLyBub3Qgc3VyZSB3aGVuIHRoaXMgaGFwcGVucywgYnV0IEkgZ3Vlc3MgaXQgY2FuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICB2YXIgbmV3T2JqZWN0O1xuICB2YXIgaTtcbiAgdmFyIGxlbjtcblxuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgbmV3T2JqZWN0ID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gb2JqZWN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBuZXdPYmplY3RbaV0gPSBjbG9uZShvYmplY3RbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG5cbiAgLy8gc3BlY2lhbCBjYXNlOiB0byBhdm9pZCBpbmNvbnNpc3RlbmNpZXMgYmV0d2VlbiBJbmRleGVkREJcbiAgLy8gYW5kIG90aGVyIGJhY2tlbmRzLCB3ZSBhdXRvbWF0aWNhbGx5IHN0cmluZ2lmeSBEYXRlc1xuICBpZiAob2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBvYmplY3QudG9JU09TdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChpc0JpbmFyeU9iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGNsb25lQmluYXJ5T2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3Q7IC8vIGRvbid0IGNsb25lIG9iamVjdHMgbGlrZSBXb3JrZXJzXG4gIH1cblxuICBuZXdPYmplY3QgPSB7fTtcbiAgZm9yIChpIGluIG9iamVjdCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBjbG9uZShvYmplY3RbaV0pO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmV3T2JqZWN0W2ldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZnVuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGdldEFyZ3VtZW50cyhmdW5jdGlvbiAoYXJncykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIC8vIHRoaXMgaXMgYSBzbW9rZSB0ZXN0IGFuZCBzaG91bGQgbmV2ZXIgYWN0dWFsbHkgaGFwcGVuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uY2UgY2FsbGVkIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmdW4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9Qcm9taXNlKGZ1bmMpIHtcbiAgLy9jcmVhdGUgdGhlIGZ1bmN0aW9uIHdlIHdpbGwgYmUgcmV0dXJuaW5nXG4gIHJldHVybiBnZXRBcmd1bWVudHMoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAvLyBDbG9uZSBhcmd1bWVudHNcbiAgICBhcmdzID0gY2xvbmUoYXJncyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGlmIHRoZSBsYXN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdHMgYSBjYWxsYmFja1xuICAgIHZhciB1c2VkQ0IgPSAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykgPyBhcmdzLnBvcCgpIDogZmFsc2U7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVzcDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IG9uY2UoZnVuY3Rpb24gKGVyciwgbWVzZykge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmdWxmaWxsKG1lc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB0aGlzIGludm9jYXRpb25cbiAgICAgICAgLy8gYXBwbHkgdGhlIGZ1bmN0aW9uIGluIHRoZSBvcmlnIGNvbnRleHRcbiAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmVzcCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIGlmIChyZXNwICYmIHR5cGVvZiByZXNwLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBmdWxmaWxsKHJlc3ApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpZiB0aGVyZSBpcyBhIGNhbGxiYWNrLCBjYWxsIGl0IGJhY2tcbiAgICBpZiAodXNlZENCKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB1c2VkQ0IobnVsbCwgcmVzdWx0KTtcbiAgICAgIH0sIHVzZWRDQik7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9nQXBpQ2FsbChzZWxmLCBuYW1lLCBhcmdzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoc2VsZi5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMoJ2RlYnVnJykubGVuZ3RoKSB7XG4gICAgdmFyIGxvZ0FyZ3MgPSBbJ2FwaScsIHNlbGYubmFtZSwgbmFtZV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgbG9nQXJncy5wdXNoKGFyZ3NbaV0pO1xuICAgIH1cbiAgICBzZWxmLmNvbnN0cnVjdG9yLmVtaXQoJ2RlYnVnJywgbG9nQXJncyk7XG5cbiAgICAvLyBvdmVycmlkZSB0aGUgY2FsbGJhY2sgaXRzZWxmIHRvIGxvZyB0aGUgcmVzcG9uc2VcbiAgICB2YXIgb3JpZ0NhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgdmFyIHJlc3BvbnNlQXJncyA9IFsnYXBpJywgc2VsZi5uYW1lLCBuYW1lXTtcbiAgICAgIHJlc3BvbnNlQXJncyA9IHJlc3BvbnNlQXJncy5jb25jYXQoXG4gICAgICAgIGVyciA/IFsnZXJyb3InLCBlcnJdIDogWydzdWNjZXNzJywgcmVzXVxuICAgICAgKTtcbiAgICAgIHNlbGYuY29uc3RydWN0b3IuZW1pdCgnZGVidWcnLCByZXNwb25zZUFyZ3MpO1xuICAgICAgb3JpZ0NhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkYXB0ZXJGdW4obmFtZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRvUHJvbWlzZShnZXRBcmd1bWVudHMoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdkYXRhYmFzZSBpcyBjbG9zZWQnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2RhdGFiYXNlIGlzIGRlc3Ryb3llZCcpKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGxvZ0FwaUNhbGwoc2VsZiwgbmFtZSwgYXJncyk7XG4gICAgaWYgKCF0aGlzLnRhc2txdWV1ZS5pc1JlYWR5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnRhc2txdWV1ZS5hZGRUYXNrKGZ1bmN0aW9uIChmYWlsZWQpIHtcbiAgICAgICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgICAgICByZWplY3QoZmFpbGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVsZmlsbChzZWxmW25hbWVdLmFwcGx5KHNlbGYsIGFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSkpO1xufVxuXG4vLyBsaWtlIHVuZGVyc2NvcmUvbG9kYXNoIF8ucGljaygpXG5mdW5jdGlvbiBwaWNrKG9iaiwgYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBwcm9wID0gYXJyW2ldO1xuICAgIGlmIChwcm9wIGluIG9iaikge1xuICAgICAgcmVzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vLyBNb3N0IGJyb3dzZXJzIHRocm90dGxlIGNvbmN1cnJlbnQgcmVxdWVzdHMgYXQgNiwgc28gaXQncyBzaWxseVxuLy8gdG8gc2hpbSBfYnVsa19nZXQgYnkgdHJ5aW5nIHRvIGxhdW5jaCBwb3RlbnRpYWxseSBodW5kcmVkcyBvZiByZXF1ZXN0c1xuLy8gYW5kIHRoZW4gbGV0dGluZyB0aGUgbWFqb3JpdHkgdGltZSBvdXQuIFdlIGNhbiBoYW5kbGUgdGhpcyBvdXJzZWx2ZXMuXG52YXIgTUFYX05VTV9DT05DVVJSRU5UX1JFUVVFU1RTID0gNjtcblxuZnVuY3Rpb24gaWRlbnRpdHlGdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZXN1bHRGb3JPcGVuUmV2c0dldChyZXN1bHQpIHtcbiAgcmV0dXJuIFt7XG4gICAgb2s6IHJlc3VsdFxuICB9XTtcbn1cblxuLy8gc2hpbSBmb3IgUC9Db3VjaERCIGFkYXB0ZXJzIHRoYXQgZG9uJ3QgZGlyZWN0bHkgaW1wbGVtZW50IF9idWxrX2dldFxuZnVuY3Rpb24gYnVsa0dldChkYiwgb3B0cywgY2FsbGJhY2spIHtcbiAgdmFyIHJlcXVlc3RzID0gb3B0cy5kb2NzO1xuXG4gIC8vIGNvbnNvbGlkYXRlIGludG8gb25lIHJlcXVlc3QgcGVyIGRvYyBpZiBwb3NzaWJsZVxuICB2YXIgcmVxdWVzdHNCeUlkID0gbmV3IEV4cG9ydGVkTWFwKCk7XG4gIHJlcXVlc3RzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICBpZiAocmVxdWVzdHNCeUlkLmhhcyhyZXF1ZXN0LmlkKSkge1xuICAgICAgcmVxdWVzdHNCeUlkLmdldChyZXF1ZXN0LmlkKS5wdXNoKHJlcXVlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0c0J5SWQuc2V0KHJlcXVlc3QuaWQsIFtyZXF1ZXN0XSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgbnVtRG9jcyA9IHJlcXVlc3RzQnlJZC5zaXplO1xuICB2YXIgbnVtRG9uZSA9IDA7XG4gIHZhciBwZXJEb2NSZXN1bHRzID0gbmV3IEFycmF5KG51bURvY3MpO1xuXG4gIGZ1bmN0aW9uIGNvbGxhcHNlUmVzdWx0c0FuZEZpbmlzaCgpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHBlckRvY1Jlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXMuZG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWQ6IHJlcy5pZCxcbiAgICAgICAgICBkb2NzOiBbaW5mb11cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjYWxsYmFjayhudWxsLCB7cmVzdWx0czogcmVzdWx0c30pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tEb25lKCkge1xuICAgIGlmICgrK251bURvbmUgPT09IG51bURvY3MpIHtcbiAgICAgIGNvbGxhcHNlUmVzdWx0c0FuZEZpbmlzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvdFJlc3VsdChkb2NJbmRleCwgaWQsIGRvY3MpIHtcbiAgICBwZXJEb2NSZXN1bHRzW2RvY0luZGV4XSA9IHtpZDogaWQsIGRvY3M6IGRvY3N9O1xuICAgIGNoZWNrRG9uZSgpO1xuICB9XG5cbiAgdmFyIGFsbFJlcXVlc3RzID0gW107XG4gIHJlcXVlc3RzQnlJZC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgYWxsUmVxdWVzdHMucHVzaChrZXkpO1xuICB9KTtcblxuICB2YXIgaSA9IDA7XG5cbiAgZnVuY3Rpb24gbmV4dEJhdGNoKCkge1xuXG4gICAgaWYgKGkgPj0gYWxsUmVxdWVzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVwVG8gPSBNYXRoLm1pbihpICsgTUFYX05VTV9DT05DVVJSRU5UX1JFUVVFU1RTLCBhbGxSZXF1ZXN0cy5sZW5ndGgpO1xuICAgIHZhciBiYXRjaCA9IGFsbFJlcXVlc3RzLnNsaWNlKGksIHVwVG8pO1xuICAgIHByb2Nlc3NCYXRjaChiYXRjaCwgaSk7XG4gICAgaSArPSBiYXRjaC5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQmF0Y2goYmF0Y2gsIG9mZnNldCkge1xuICAgIGJhdGNoLmZvckVhY2goZnVuY3Rpb24gKGRvY0lkLCBqKSB7XG4gICAgICB2YXIgZG9jSWR4ID0gb2Zmc2V0ICsgajtcbiAgICAgIHZhciBkb2NSZXF1ZXN0cyA9IHJlcXVlc3RzQnlJZC5nZXQoZG9jSWQpO1xuXG4gICAgICAvLyBqdXN0IHVzZSB0aGUgZmlyc3QgcmVxdWVzdCBhcyB0aGUgXCJ0ZW1wbGF0ZVwiXG4gICAgICAvLyBUT0RPOiBUaGUgX2J1bGtfZ2V0IEFQSSBhbGxvd3MgZm9yIG1vcmUgc3VidGxlIHVzZSBjYXNlcyB0aGFuIHRoaXMsXG4gICAgICAvLyBidXQgZm9yIG5vdyBpdCBpcyB1bmxpa2VseSB0aGF0IHRoZXJlIHdpbGwgYmUgYSBtaXggb2YgZGlmZmVyZW50XG4gICAgICAvLyBcImF0dHNfc2luY2VcIiBvciBcImF0dGFjaG1lbnRzXCIgaW4gdGhlIHNhbWUgcmVxdWVzdCwgc2luY2UgaXQncyBqdXN0XG4gICAgICAvLyByZXBsaWNhdGUuanMgdGhhdCBpcyB1c2luZyB0aGlzIGZvciB0aGUgbW9tZW50LlxuICAgICAgLy8gQWxzbywgYXR0c19zaW5jZSBpcyBhc3BpcmF0aW9uYWwsIHNpbmNlIHdlIGRvbid0IHN1cHBvcnQgaXQgeWV0LlxuICAgICAgdmFyIGRvY09wdHMgPSBwaWNrKGRvY1JlcXVlc3RzWzBdLCBbJ2F0dHNfc2luY2UnLCAnYXR0YWNobWVudHMnXSk7XG4gICAgICBkb2NPcHRzLm9wZW5fcmV2cyA9IGRvY1JlcXVlc3RzLm1hcChmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAvLyByZXYgaXMgb3B0aW9uYWwsIG9wZW5fcmV2cyBkaXNhbGxvd2VkXG4gICAgICAgIHJldHVybiByZXF1ZXN0LnJldjtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZW1vdmUgZmFsc2V5IC8gdW5kZWZpbmVkIHJldmlzaW9uc1xuICAgICAgZG9jT3B0cy5vcGVuX3JldnMgPSBkb2NPcHRzLm9wZW5fcmV2cy5maWx0ZXIoaWRlbnRpdHlGdW5jdGlvbik7XG5cbiAgICAgIHZhciBmb3JtYXRSZXN1bHQgPSBpZGVudGl0eUZ1bmN0aW9uO1xuXG4gICAgICBpZiAoZG9jT3B0cy5vcGVuX3JldnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBkb2NPcHRzLm9wZW5fcmV2cztcblxuICAgICAgICAvLyB3aGVuIGZldGNoaW5nIG9ubHkgdGhlIFwid2lubmluZ1wiIGxlYWYsXG4gICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgcmVzdWx0IHNvIGl0IGxvb2tzIGxpa2UgYW4gb3Blbl9yZXZzXG4gICAgICAgIC8vIHJlcXVlc3RcbiAgICAgICAgZm9ybWF0UmVzdWx0ID0gZm9ybWF0UmVzdWx0Rm9yT3BlblJldnNHZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGdsb2JhbGx5LXN1cHBsaWVkIG9wdGlvbnNcbiAgICAgIFsncmV2cycsICdhdHRhY2htZW50cycsICdiaW5hcnknLCAnYWpheCcsICdsYXRlc3QnXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBpZiAocGFyYW0gaW4gb3B0cykge1xuICAgICAgICAgIGRvY09wdHNbcGFyYW1dID0gb3B0c1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGIuZ2V0KGRvY0lkLCBkb2NPcHRzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBbe2Vycm9yOiBlcnJ9XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBmb3JtYXRSZXN1bHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBnb3RSZXN1bHQoZG9jSWR4LCBkb2NJZCwgcmVzdWx0KTtcbiAgICAgICAgbmV4dEJhdGNoKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5leHRCYXRjaCgpO1xuXG59XG5cbnZhciBoYXNMb2NhbDtcblxudHJ5IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19wb3VjaF9jaGVja19sb2NhbHN0b3JhZ2UnLCAxKTtcbiAgaGFzTG9jYWwgPSAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfcG91Y2hfY2hlY2tfbG9jYWxzdG9yYWdlJyk7XG59IGNhdGNoIChlKSB7XG4gIGhhc0xvY2FsID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhc0xvY2FsU3RvcmFnZSgpIHtcbiAgcmV0dXJuIGhhc0xvY2FsO1xufVxuXG4vLyBDdXN0b20gbmV4dFRpY2soKSBzaGltIGZvciBicm93c2Vycy4gSW4gbm9kZSwgdGhpcyB3aWxsIGp1c3QgYmUgcHJvY2Vzcy5uZXh0VGljaygpLiBXZVxuXG5pbmhlcml0cyhDaGFuZ2VzLCBFRSk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBhdHRhY2hCcm93c2VyRXZlbnRzKHNlbGYpIHtcbiAgaWYgKGhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuZW1pdChlLmtleSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQ2hhbmdlcygpIHtcbiAgRUUuY2FsbCh0aGlzKTtcbiAgdGhpcy5fbGlzdGVuZXJzID0ge307XG5cbiAgYXR0YWNoQnJvd3NlckV2ZW50cyh0aGlzKTtcbn1cbkNoYW5nZXMucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGRiTmFtZSwgaWQsIGRiLCBvcHRzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodGhpcy5fbGlzdGVuZXJzW2lkXSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBpbnByb2dyZXNzID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGV2ZW50RnVuY3Rpb24oKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFzZWxmLl9saXN0ZW5lcnNbaWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbnByb2dyZXNzKSB7XG4gICAgICBpbnByb2dyZXNzID0gJ3dhaXRpbmcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgY2hhbmdlc09wdHMgPSBwaWNrKG9wdHMsIFtcbiAgICAgICdzdHlsZScsICdpbmNsdWRlX2RvY3MnLCAnYXR0YWNobWVudHMnLCAnY29uZmxpY3RzJywgJ2ZpbHRlcicsXG4gICAgICAnZG9jX2lkcycsICd2aWV3JywgJ3NpbmNlJywgJ3F1ZXJ5X3BhcmFtcycsICdiaW5hcnknLCAncmV0dXJuX2RvY3MnXG4gICAgXSk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICBpbnByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGIuY2hhbmdlcyhjaGFuZ2VzT3B0cykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChjKSB7XG4gICAgICBpZiAoYy5zZXEgPiBvcHRzLnNpbmNlICYmICFvcHRzLmNhbmNlbGxlZCkge1xuICAgICAgICBvcHRzLnNpbmNlID0gYy5zZXE7XG4gICAgICAgIG9wdHMub25DaGFuZ2UoYyk7XG4gICAgICB9XG4gICAgfSkub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlucHJvZ3Jlc3MgPT09ICd3YWl0aW5nJykge1xuICAgICAgICBpbW1lZGlhdGUoZXZlbnRGdW5jdGlvbik7XG4gICAgICB9XG4gICAgICBpbnByb2dyZXNzID0gZmFsc2U7XG4gICAgfSkub24oJ2Vycm9yJywgb25FcnJvcik7XG4gIH1cbiAgdGhpcy5fbGlzdGVuZXJzW2lkXSA9IGV2ZW50RnVuY3Rpb247XG4gIHRoaXMub24oZGJOYW1lLCBldmVudEZ1bmN0aW9uKTtcbn07XG5cbkNoYW5nZXMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGRiTmFtZSwgaWQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghKGlkIGluIHRoaXMuX2xpc3RlbmVycykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgRUUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLmNhbGwodGhpcywgZGJOYW1lLFxuICAgIHRoaXMuX2xpc3RlbmVyc1tpZF0pO1xuICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2lkXTtcbn07XG5cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbkNoYW5nZXMucHJvdG90eXBlLm5vdGlmeUxvY2FsV2luZG93cyA9IGZ1bmN0aW9uIChkYk5hbWUpIHtcbiAgLy9kbyBhIHVzZWxlc3MgY2hhbmdlIG9uIGEgc3RvcmFnZSB0aGluZ1xuICAvL2luIG9yZGVyIHRvIGdldCBvdGhlciB3aW5kb3dzJ3MgbGlzdGVuZXJzIHRvIGFjdGl2YXRlXG4gIGlmIChoYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgIGxvY2FsU3RvcmFnZVtkYk5hbWVdID0gKGxvY2FsU3RvcmFnZVtkYk5hbWVdID09PSBcImFcIikgPyBcImJcIiA6IFwiYVwiO1xuICB9XG59O1xuXG5DaGFuZ2VzLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoZGJOYW1lKSB7XG4gIHRoaXMuZW1pdChkYk5hbWUpO1xuICB0aGlzLm5vdGlmeUxvY2FsV2luZG93cyhkYk5hbWUpO1xufTtcblxuZnVuY3Rpb24gZ3VhcmRlZENvbnNvbGUobWV0aG9kKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gIHZhciBtYXhUaW1lb3V0ID0gNjAwMDAwOyAvLyBIYXJkLWNvZGVkIGRlZmF1bHQgb2YgMTAgbWludXRlc1xuICBtaW4gPSBwYXJzZUludChtaW4sIDEwKSB8fCAwO1xuICBtYXggPSBwYXJzZUludChtYXgsIDEwKTtcbiAgaWYgKG1heCAhPT0gbWF4IHx8IG1heCA8PSBtaW4pIHtcbiAgICBtYXggPSAobWluIHx8IDEpIDw8IDE7IC8vZG91YmxpbmdcbiAgfSBlbHNlIHtcbiAgICBtYXggPSBtYXggKyAxO1xuICB9XG4gIC8vIEluIG9yZGVyIHRvIG5vdCBleGNlZWQgbWF4VGltZW91dCwgcGljayBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIGhhbGYgb2YgbWF4VGltZW91dCBhbmQgbWF4VGltZW91dFxuICBpZiAobWF4ID4gbWF4VGltZW91dCkge1xuICAgIG1pbiA9IG1heFRpbWVvdXQgPj4gMTsgLy8gZGl2aWRlIGJ5IHR3b1xuICAgIG1heCA9IG1heFRpbWVvdXQ7XG4gIH1cbiAgdmFyIHJhdGlvID0gTWF0aC5yYW5kb20oKTtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuXG4gIHJldHVybiB+fihyYW5nZSAqIHJhdGlvICsgbWluKTsgLy8gfn4gY29lcmNlcyB0byBhbiBpbnQsIGJ1dCBmYXN0LlxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QmFja09mZihtaW4pIHtcbiAgdmFyIG1heCA9IDA7XG4gIGlmICghbWluKSB7XG4gICAgbWF4ID0gMjAwMDtcbiAgfVxuICByZXR1cm4gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KTtcbn1cblxuLy8gZGVzaWduZWQgdG8gZ2l2ZSBpbmZvIHRvIGJyb3dzZXIgdXNlcnMsIHdobyBhcmUgZGlzdHVyYmVkXG4vLyB3aGVuIHRoZXkgc2VlIGh0dHAgZXJyb3JzIGluIHRoZSBjb25zb2xlXG5mdW5jdGlvbiBleHBsYWluRXJyb3Ioc3RhdHVzLCBzdHIpIHtcbiAgZ3VhcmRlZENvbnNvbGUoJ2luZm8nLCAnVGhlIGFib3ZlICcgKyBzdGF0dXMgKyAnIGlzIHRvdGFsbHkgbm9ybWFsLiAnICsgc3RyKTtcbn1cblxudmFyIGFzc2lnbjtcbntcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBsaXRlIE9iamVjdC5hc3NpZ24gcG9seWZpbGwgYmFzZWQgb25cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gICAgYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7IC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0bztcbiAgICB9O1xuICB9XG59XG5cbnZhciAkaW5qZWN0X09iamVjdF9hc3NpZ24gPSBhc3NpZ247XG5cbmluaGVyaXRzKFBvdWNoRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gUG91Y2hFcnJvcihzdGF0dXMsIGVycm9yLCByZWFzb24pIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCByZWFzb24pO1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5uYW1lID0gZXJyb3I7XG4gIHRoaXMubWVzc2FnZSA9IHJlYXNvbjtcbiAgdGhpcy5lcnJvciA9IHRydWU7XG59XG5cblBvdWNoRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICByZWFzb246IHRoaXMucmVhc29uXG4gIH0pO1xufTtcblxudmFyIFVOQVVUSE9SSVpFRCA9IG5ldyBQb3VjaEVycm9yKDQwMSwgJ3VuYXV0aG9yaXplZCcsIFwiTmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QuXCIpO1xudmFyIE1JU1NJTkdfQlVMS19ET0NTID0gbmV3IFBvdWNoRXJyb3IoNDAwLCAnYmFkX3JlcXVlc3QnLCBcIk1pc3NpbmcgSlNPTiBsaXN0IG9mICdkb2NzJ1wiKTtcbnZhciBNSVNTSU5HX0RPQyA9IG5ldyBQb3VjaEVycm9yKDQwNCwgJ25vdF9mb3VuZCcsICdtaXNzaW5nJyk7XG52YXIgUkVWX0NPTkZMSUNUID0gbmV3IFBvdWNoRXJyb3IoNDA5LCAnY29uZmxpY3QnLCAnRG9jdW1lbnQgdXBkYXRlIGNvbmZsaWN0Jyk7XG52YXIgSU5WQUxJRF9JRCA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2JhZF9yZXF1ZXN0JywgJ19pZCBmaWVsZCBtdXN0IGNvbnRhaW4gYSBzdHJpbmcnKTtcbnZhciBNSVNTSU5HX0lEID0gbmV3IFBvdWNoRXJyb3IoNDEyLCAnbWlzc2luZ19pZCcsICdfaWQgaXMgcmVxdWlyZWQgZm9yIHB1dHMnKTtcbnZhciBSRVNFUlZFRF9JRCA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2JhZF9yZXF1ZXN0JywgJ09ubHkgcmVzZXJ2ZWQgZG9jdW1lbnQgaWRzIG1heSBzdGFydCB3aXRoIHVuZGVyc2NvcmUuJyk7XG52YXIgTk9UX09QRU4gPSBuZXcgUG91Y2hFcnJvcig0MTIsICdwcmVjb25kaXRpb25fZmFpbGVkJywgJ0RhdGFiYXNlIG5vdCBvcGVuJyk7XG52YXIgVU5LTk9XTl9FUlJPUiA9IG5ldyBQb3VjaEVycm9yKDUwMCwgJ3Vua25vd25fZXJyb3InLCAnRGF0YWJhc2UgZW5jb3VudGVyZWQgYW4gdW5rbm93biBlcnJvcicpO1xudmFyIEJBRF9BUkcgPSBuZXcgUG91Y2hFcnJvcig1MDAsICdiYWRhcmcnLCAnU29tZSBxdWVyeSBhcmd1bWVudCBpcyBpbnZhbGlkJyk7XG52YXIgSU5WQUxJRF9SRVFVRVNUID0gbmV3IFBvdWNoRXJyb3IoNDAwLCAnaW52YWxpZF9yZXF1ZXN0JywgJ1JlcXVlc3Qgd2FzIGludmFsaWQnKTtcbnZhciBRVUVSWV9QQVJTRV9FUlJPUiA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ3F1ZXJ5X3BhcnNlX2Vycm9yJywgJ1NvbWUgcXVlcnkgcGFyYW1ldGVyIGlzIGludmFsaWQnKTtcbnZhciBET0NfVkFMSURBVElPTiA9IG5ldyBQb3VjaEVycm9yKDUwMCwgJ2RvY192YWxpZGF0aW9uJywgJ0JhZCBzcGVjaWFsIGRvY3VtZW50IG1lbWJlcicpO1xudmFyIEJBRF9SRVFVRVNUID0gbmV3IFBvdWNoRXJyb3IoNDAwLCAnYmFkX3JlcXVlc3QnLCAnU29tZXRoaW5nIHdyb25nIHdpdGggdGhlIHJlcXVlc3QnKTtcbnZhciBOT1RfQU5fT0JKRUNUID0gbmV3IFBvdWNoRXJyb3IoNDAwLCAnYmFkX3JlcXVlc3QnLCAnRG9jdW1lbnQgbXVzdCBiZSBhIEpTT04gb2JqZWN0Jyk7XG52YXIgREJfTUlTU0lORyA9IG5ldyBQb3VjaEVycm9yKDQwNCwgJ25vdF9mb3VuZCcsICdEYXRhYmFzZSBub3QgZm91bmQnKTtcbnZhciBJREJfRVJST1IgPSBuZXcgUG91Y2hFcnJvcig1MDAsICdpbmRleGVkX2RiX3dlbnRfYmFkJywgJ3Vua25vd24nKTtcbnZhciBXU1FfRVJST1IgPSBuZXcgUG91Y2hFcnJvcig1MDAsICd3ZWJfc3FsX3dlbnRfYmFkJywgJ3Vua25vd24nKTtcbnZhciBMREJfRVJST1IgPSBuZXcgUG91Y2hFcnJvcig1MDAsICdsZXZlbERCX3dlbnRfd2VudF9iYWQnLCAndW5rbm93bicpO1xudmFyIEZPUkJJRERFTiA9IG5ldyBQb3VjaEVycm9yKDQwMywgJ2ZvcmJpZGRlbicsICdGb3JiaWRkZW4gYnkgZGVzaWduIGRvYyB2YWxpZGF0ZV9kb2NfdXBkYXRlIGZ1bmN0aW9uJyk7XG52YXIgSU5WQUxJRF9SRVYgPSBuZXcgUG91Y2hFcnJvcig0MDAsICdiYWRfcmVxdWVzdCcsICdJbnZhbGlkIHJldiBmb3JtYXQnKTtcbnZhciBGSUxFX0VYSVNUUyA9IG5ldyBQb3VjaEVycm9yKDQxMiwgJ2ZpbGVfZXhpc3RzJywgJ1RoZSBkYXRhYmFzZSBjb3VsZCBub3QgYmUgY3JlYXRlZCwgdGhlIGZpbGUgYWxyZWFkeSBleGlzdHMuJyk7XG52YXIgTUlTU0lOR19TVFVCID0gbmV3IFBvdWNoRXJyb3IoNDEyLCAnbWlzc2luZ19zdHViJywgJ0EgcHJlLWV4aXN0aW5nIGF0dGFjaG1lbnQgc3R1YiB3YXNuXFwndCBmb3VuZCcpO1xudmFyIElOVkFMSURfVVJMID0gbmV3IFBvdWNoRXJyb3IoNDEzLCAnaW52YWxpZF91cmwnLCAnUHJvdmlkZWQgVVJMIGlzIGludmFsaWQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRXJyb3IoZXJyb3IsIHJlYXNvbikge1xuICBmdW5jdGlvbiBDdXN0b21Qb3VjaEVycm9yKHJlYXNvbikge1xuICAgIC8vIGluaGVyaXQgZXJyb3IgcHJvcGVydGllcyBmcm9tIG91ciBwYXJlbnQgZXJyb3IgbWFudWFsbHlcbiAgICAvLyBzbyBhcyB0byBhbGxvdyBwcm9wZXIgSlNPTiBwYXJzaW5nLlxuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICB2YXIgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlcnJvcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mIGVycm9yW25hbWVzW2ldXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW25hbWVzW2ldXSA9IGVycm9yW25hbWVzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiAgICBpZiAocmVhc29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIH1cbiAgfVxuICBDdXN0b21Qb3VjaEVycm9yLnByb3RvdHlwZSA9IFBvdWNoRXJyb3IucHJvdG90eXBlO1xuICByZXR1cm4gbmV3IEN1c3RvbVBvdWNoRXJyb3IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZShlcnIpIHtcblxuICBpZiAodHlwZW9mIGVyciAhPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgZGF0YSA9IGVycjtcbiAgICBlcnIgPSBVTktOT1dOX0VSUk9SO1xuICAgIGVyci5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICgnZXJyb3InIGluIGVyciAmJiBlcnIuZXJyb3IgPT09ICdjb25mbGljdCcpIHtcbiAgICBlcnIubmFtZSA9ICdjb25mbGljdCc7XG4gICAgZXJyLnN0YXR1cyA9IDQwOTtcbiAgfVxuXG4gIGlmICghKCduYW1lJyBpbiBlcnIpKSB7XG4gICAgZXJyLm5hbWUgPSBlcnIuZXJyb3IgfHwgJ3Vua25vd24nO1xuICB9XG5cbiAgaWYgKCEoJ3N0YXR1cycgaW4gZXJyKSkge1xuICAgIGVyci5zdGF0dXMgPSA1MDA7XG4gIH1cblxuICBpZiAoISgnbWVzc2FnZScgaW4gZXJyKSkge1xuICAgIGVyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2UgfHwgZXJyLnJlYXNvbjtcbiAgfVxuXG4gIHJldHVybiBlcnI7XG59XG5cbmZ1bmN0aW9uIHRyeUZpbHRlcihmaWx0ZXIsIGRvYywgcmVxKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICFmaWx0ZXIoZG9jLCByZXEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgbXNnID0gJ0ZpbHRlciBmdW5jdGlvbiB0aHJldzogJyArIGVyci50b1N0cmluZygpO1xuICAgIHJldHVybiBjcmVhdGVFcnJvcihCQURfUkVRVUVTVCwgbXNnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDaGFuZ2Uob3B0cykge1xuICB2YXIgcmVxID0ge307XG4gIHZhciBoYXNGaWx0ZXIgPSBvcHRzLmZpbHRlciAmJiB0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbic7XG4gIHJlcS5xdWVyeSA9IG9wdHMucXVlcnlfcGFyYW1zO1xuXG4gIHJldHVybiBmdW5jdGlvbiBmaWx0ZXIoY2hhbmdlKSB7XG4gICAgaWYgKCFjaGFuZ2UuZG9jKSB7XG4gICAgICAvLyBDU0cgc2VuZHMgZXZlbnRzIG9uIHRoZSBjaGFuZ2VzIGZlZWQgdGhhdCBkb24ndCBoYXZlIGRvY3VtZW50cyxcbiAgICAgIC8vIHRoaXMgaGFjayBtYWtlcyBhIHdob2xlIGxvdCBvZiBleGlzdGluZyBjb2RlIHJvYnVzdC5cbiAgICAgIGNoYW5nZS5kb2MgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyUmV0dXJuID0gaGFzRmlsdGVyICYmIHRyeUZpbHRlcihvcHRzLmZpbHRlciwgY2hhbmdlLmRvYywgcmVxKTtcblxuICAgIGlmICh0eXBlb2YgZmlsdGVyUmV0dXJuID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZpbHRlclJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyUmV0dXJuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgZGVsZXRlIGNoYW5nZS5kb2M7XG4gICAgfSBlbHNlIGlmICghb3B0cy5hdHRhY2htZW50cykge1xuICAgICAgZm9yICh2YXIgYXR0IGluIGNoYW5nZS5kb2MuX2F0dGFjaG1lbnRzKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChjaGFuZ2UuZG9jLl9hdHRhY2htZW50cy5oYXNPd25Qcm9wZXJ0eShhdHQpKSB7XG4gICAgICAgICAgY2hhbmdlLmRvYy5fYXR0YWNobWVudHNbYXR0XS5zdHViID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXMgPSByZXMuY29uY2F0KGFycnNbaV0pO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8vIHNoaW0gZm9yIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lLFxuXG4vLyBEZXRlcm1pbmUgaWQgYW4gSUQgaXMgdmFsaWRcbi8vICAgLSBpbnZhbGlkIElEcyBiZWdpbiB3aXRoIGFuIHVuZGVyZXNjb3JlIHRoYXQgZG9lcyBub3QgYmVnaW4gJ19kZXNpZ24nIG9yXG4vLyAgICAgJ19sb2NhbCdcbi8vICAgLSBhbnkgb3RoZXIgc3RyaW5nIHZhbHVlIGlzIGEgdmFsaWQgaWRcbi8vIFJldHVybnMgdGhlIHNwZWNpZmljIGVycm9yIG9iamVjdCBmb3IgZWFjaCBjYXNlXG5mdW5jdGlvbiBpbnZhbGlkSWRFcnJvcihpZCkge1xuICB2YXIgZXJyO1xuICBpZiAoIWlkKSB7XG4gICAgZXJyID0gY3JlYXRlRXJyb3IoTUlTU0lOR19JRCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIGVyciA9IGNyZWF0ZUVycm9yKElOVkFMSURfSUQpO1xuICB9IGVsc2UgaWYgKC9eXy8udGVzdChpZCkgJiYgISgvXl8oZGVzaWdufGxvY2FsKS8pLnRlc3QoaWQpKSB7XG4gICAgZXJyID0gY3JlYXRlRXJyb3IoUkVTRVJWRURfSUQpO1xuICB9XG4gIGlmIChlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cblxuLy8gQ2hlY2tzIGlmIGEgUG91Y2hEQiBvYmplY3QgaXMgXCJyZW1vdGVcIiBvciBub3QuIFRoaXMgaXNcblxuZnVuY3Rpb24gaXNSZW1vdGUoZGIpIHtcbiAgaWYgKHR5cGVvZiBkYi5fcmVtb3RlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gZGIuX3JlbW90ZTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodHlwZW9mIGRiLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBndWFyZGVkQ29uc29sZSgnd2FybicsXG4gICAgICAnZGIudHlwZSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICtcbiAgICAgICdhIGZ1dHVyZSB2ZXJzaW9uIG9mIFBvdWNoREInKTtcbiAgICByZXR1cm4gZGIudHlwZSgpID09PSAnaHR0cCc7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KGVlLCB0eXBlKSB7XG4gIHJldHVybiAnbGlzdGVuZXJDb3VudCcgaW4gZWUgPyBlZS5saXN0ZW5lckNvdW50KHR5cGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVFLmxpc3RlbmVyQ291bnQoZWUsIHR5cGUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShzKSB7XG4gIGlmICghcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBwYXJ0cyA9IHMuc3BsaXQoJy8nKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFtzLCBzXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGVzaWduRG9jRnVuY3Rpb25OYW1lKHMpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBwYXJzZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShzKTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWQgPyBub3JtYWxpemVkLmpvaW4oJy8nKSA6IG51bGw7XG59XG5cbi8vIG9yaWdpbmFsbHkgcGFyc2VVcmkgMS4yLjIsIG5vdyBwYXRjaGVkIGJ5IHVzXG4vLyAoYykgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+XG4vLyBNSVQgTGljZW5zZVxudmFyIGtleXMgPSBbXCJzb3VyY2VcIiwgXCJwcm90b2NvbFwiLCBcImF1dGhvcml0eVwiLCBcInVzZXJJbmZvXCIsIFwidXNlclwiLCBcInBhc3N3b3JkXCIsXG4gICAgXCJob3N0XCIsIFwicG9ydFwiLCBcInJlbGF0aXZlXCIsIFwicGF0aFwiLCBcImRpcmVjdG9yeVwiLCBcImZpbGVcIiwgXCJxdWVyeVwiLCBcImFuY2hvclwiXTtcbnZhciBxTmFtZSA9XCJxdWVyeUtleVwiO1xudmFyIHFQYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2c7XG5cbi8vIHVzZSB0aGUgXCJsb29zZVwiIHBhcnNlclxuLyogZXNsaW50IG1heGxlbjogMCwgbm8tdXNlbGVzcy1lc2NhcGU6IDAgKi9cbnZhciBwYXJzZXIgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbmZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xuICB2YXIgbSA9IHBhcnNlci5leGVjKHN0cik7XG4gIHZhciB1cmkgPSB7fTtcbiAgdmFyIGkgPSAxNDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gbVtpXSB8fCBcIlwiO1xuICAgIHZhciBlbmNvZGVkID0gWyd1c2VyJywgJ3Bhc3N3b3JkJ10uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgICB1cmlba2V5XSA9IGVuY29kZWQgPyBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICB1cmlbcU5hbWVdID0ge307XG4gIHVyaVtrZXlzWzEyXV0ucmVwbGFjZShxUGFyc2VyLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgIGlmICgkMSkge1xuICAgICAgdXJpW3FOYW1lXVskMV0gPSAkMjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB1cmk7XG59XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZGF2aWQvc2NvcGUtZXZhbCB2MC4wLjNcbi8vIChzb3VyY2U6IGh0dHBzOi8vdW5wa2cuY29tL3Njb3BlLWV2YWxAMC4wLjMvc2NvcGVfZXZhbC5qcylcbi8vIFRoaXMgaXMgYmFzaWNhbGx5IGp1c3QgYSB3cmFwcGVyIGFyb3VuZCBuZXcgRnVuY3Rpb24oKVxuXG5mdW5jdGlvbiBzY29wZUV2YWwoc291cmNlLCBzY29wZSkge1xuICB2YXIga2V5cyA9IFtdO1xuICB2YXIgdmFsdWVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBzY29wZSkge1xuICAgIGlmIChzY29wZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhbHVlcy5wdXNoKHNjb3BlW2tleV0pO1xuICAgIH1cbiAgfVxuICBrZXlzLnB1c2goc291cmNlKTtcbiAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIGtleXMpLmFwcGx5KG51bGwsIHZhbHVlcyk7XG59XG5cbi8vIHRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIFwidXBkYXRlIHN1Z2FyXCIgZnVuY3Rpb24gZnJvbSBkYWxlaGFydmV5L3BvdWNoZGIjMTM4OFxuLy8gdGhlIGRpZmZGdW4gdGVsbHMgdXMgd2hhdCBkZWx0YSB0byBhcHBseSB0byB0aGUgZG9jLiAgaXQgZWl0aGVyIHJldHVybnNcbi8vIHRoZSBkb2MsIG9yIGZhbHNlIGlmIGl0IGRvZXNuJ3QgbmVlZCB0byBkbyBhbiB1cGRhdGUgYWZ0ZXIgYWxsXG5mdW5jdGlvbiB1cHNlcnQoZGIsIGRvY0lkLCBkaWZmRnVuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gICAgZGIuZ2V0KGRvY0lkLCBmdW5jdGlvbiAoZXJyLCBkb2MpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKGVyci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBkb2MgPSB7fTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhlIHVzZXIgbWlnaHQgY2hhbmdlIHRoZSBfcmV2LCBzbyBzYXZlIGl0IGZvciBwb3N0ZXJpdHlcbiAgICAgIHZhciBkb2NSZXYgPSBkb2MuX3JldjtcbiAgICAgIHZhciBuZXdEb2MgPSBkaWZmRnVuKGRvYyk7XG5cbiAgICAgIGlmICghbmV3RG9jKSB7XG4gICAgICAgIC8vIGlmIHRoZSBkaWZmRnVuIHJldHVybnMgZmFsc3ksIHdlIHNob3J0LWNpcmN1aXQgYXNcbiAgICAgICAgLy8gYW4gb3B0aW1pemF0aW9uXG4gICAgICAgIHJldHVybiBmdWxmaWxsKHt1cGRhdGVkOiBmYWxzZSwgcmV2OiBkb2NSZXZ9KTtcbiAgICAgIH1cblxuICAgICAgLy8gdXNlcnMgYXJlbid0IGFsbG93ZWQgdG8gbW9kaWZ5IHRoZXNlIHZhbHVlcyxcbiAgICAgIC8vIHNvIHJlc2V0IHRoZW0gaGVyZVxuICAgICAgbmV3RG9jLl9pZCA9IGRvY0lkO1xuICAgICAgbmV3RG9jLl9yZXYgPSBkb2NSZXY7XG4gICAgICBmdWxmaWxsKHRyeUFuZFB1dChkYiwgbmV3RG9jLCBkaWZmRnVuKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cnlBbmRQdXQoZGIsIGRvYywgZGlmZkZ1bikge1xuICByZXR1cm4gZGIucHV0KGRvYykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZWQ6IHRydWUsXG4gICAgICByZXY6IHJlcy5yZXZcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoZXJyLnN0YXR1cyAhPT0gNDA5KSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHJldHVybiB1cHNlcnQoZGIsIGRvYy5faWQsIGRpZmZGdW4pO1xuICB9KTtcbn1cblxudmFyIHRoaXNBdG9iID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gYXRvYihzdHIpO1xufTtcblxudmFyIHRoaXNCdG9hID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gYnRvYShzdHIpO1xufTtcblxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yIChlLmcuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIEFuZHJvaWQgPCA0LjQpLlxuZnVuY3Rpb24gY3JlYXRlQmxvYihwYXJ0cywgcHJvcGVydGllcykge1xuICAvKiBnbG9iYWwgQmxvYkJ1aWxkZXIsTVNCbG9iQnVpbGRlcixNb3pCbG9iQnVpbGRlcixXZWJLaXRCbG9iQnVpbGRlciAqL1xuICBwYXJ0cyA9IHBhcnRzIHx8IFtdO1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSAhPT0gXCJUeXBlRXJyb3JcIikge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgdmFyIEJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOlxuICAgICAgICAgICAgICAgICAgdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6XG4gICAgICAgICAgICAgICAgICB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOlxuICAgICAgICAgICAgICAgICAgV2ViS2l0QmxvYkJ1aWxkZXI7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgQnVpbGRlcigpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGJ1aWxkZXIuYXBwZW5kKHBhcnRzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkZXIuZ2V0QmxvYihwcm9wZXJ0aWVzLnR5cGUpO1xuICB9XG59XG5cbi8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDk2NzY0Ny8gKGNvbnRpbnVlcyBvbiBuZXh0IGxpbmUpXG4vLyBlbmNvZGUtZGVjb2RlLWltYWdlLXdpdGgtYmFzZTY0LWJyZWFrcy1pbWFnZSAoMjAxMy0wNC0yMSlcbmZ1bmN0aW9uIGJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluKSB7XG4gIHZhciBsZW5ndGggPSBiaW4ubGVuZ3RoO1xuICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuZnVuY3Rpb24gYmluU3RyaW5nVG9CbHVmZmVyKGJpblN0cmluZywgdHlwZSkge1xuICByZXR1cm4gY3JlYXRlQmxvYihbYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihiaW5TdHJpbmcpXSwge3R5cGU6IHR5cGV9KTtcbn1cblxuZnVuY3Rpb24gYjY0VG9CbHVmZmVyKGI2NCwgdHlwZSkge1xuICByZXR1cm4gYmluU3RyaW5nVG9CbHVmZmVyKHRoaXNBdG9iKGI2NCksIHR5cGUpO1xufVxuXG4vL0Nhbid0IGZpbmQgb3JpZ2luYWwgcG9zdCwgYnV0IHRoaXMgaXMgY2xvc2Vcbi8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82OTY1MTA3LyAoY29udGludWVzIG9uIG5leHQgbGluZSlcbi8vY29udmVydGluZy1iZXR3ZWVuLXN0cmluZ3MtYW5kLWFycmF5YnVmZmVyc1xuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhidWZmZXIpIHtcbiAgdmFyIGJpbmFyeSA9ICcnO1xuICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICB2YXIgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgfVxuICByZXR1cm4gYmluYXJ5O1xufVxuXG4vLyBzaGltIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgaXRcbmZ1bmN0aW9uIHJlYWRBc0JpbmFyeVN0cmluZyhibG9iLCBjYWxsYmFjaykge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgdmFyIGhhc0JpbmFyeVN0cmluZyA9IHR5cGVvZiByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nID09PSAnZnVuY3Rpb24nO1xuICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0IHx8ICcnO1xuICAgIGlmIChoYXNCaW5hcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cbiAgICBjYWxsYmFjayhhcnJheUJ1ZmZlclRvQmluYXJ5U3RyaW5nKHJlc3VsdCkpO1xuICB9O1xuICBpZiAoaGFzQmluYXJ5U3RyaW5nKSB7XG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgfSBlbHNlIHtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmxvYlRvQmluYXJ5U3RyaW5nKGJsb2JPckJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKGJsb2JPckJ1ZmZlciwgZnVuY3Rpb24gKGJpbikge1xuICAgIGNhbGxiYWNrKGJpbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBibG9iVG9CYXNlNjQoYmxvYk9yQnVmZmVyLCBjYWxsYmFjaykge1xuICBibG9iVG9CaW5hcnlTdHJpbmcoYmxvYk9yQnVmZmVyLCBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgY2FsbGJhY2sodGhpc0J0b2EoYmFzZTY0KSk7XG4gIH0pO1xufVxuXG4vLyBzaW1wbGlmaWVkIEFQSS4gdW5pdmVyc2FsIGJyb3dzZXIgc3VwcG9ydCBpcyBhc3N1bWVkXG5mdW5jdGlvbiByZWFkQXNBcnJheUJ1ZmZlcihibG9iLCBjYWxsYmFjaykge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdCB8fCBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfTtcbiAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xufVxuXG4vLyB0aGlzIGlzIG5vdCB1c2VkIGluIHRoZSBicm93c2VyXG5cbnZhciBzZXRJbW1lZGlhdGVTaGltID0gc2VsZi5zZXRJbW1lZGlhdGUgfHwgc2VsZi5zZXRUaW1lb3V0O1xudmFyIE1ENV9DSFVOS19TSVpFID0gMzI3Njg7XG5cbmZ1bmN0aW9uIHJhd1RvQmFzZTY0KHJhdykge1xuICByZXR1cm4gdGhpc0J0b2EocmF3KTtcbn1cblxuZnVuY3Rpb24gc2xpY2VCbG9iKGJsb2IsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKGJsb2Iud2Via2l0U2xpY2UpIHtcbiAgICByZXR1cm4gYmxvYi53ZWJraXRTbGljZShzdGFydCwgZW5kKTtcbiAgfVxuICByZXR1cm4gYmxvYi5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQmxvYihidWZmZXIsIGJsb2IsIHN0YXJ0LCBlbmQsIGNhbGxiYWNrKSB7XG4gIGlmIChzdGFydCA+IDAgfHwgZW5kIDwgYmxvYi5zaXplKSB7XG4gICAgLy8gb25seSBzbGljZSBibG9iIGlmIHdlIHJlYWxseSBuZWVkIHRvXG4gICAgYmxvYiA9IHNsaWNlQmxvYihibG9iLCBzdGFydCwgZW5kKTtcbiAgfVxuICByZWFkQXNBcnJheUJ1ZmZlcihibG9iLCBmdW5jdGlvbiAoYXJyYXlCdWZmZXIpIHtcbiAgICBidWZmZXIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICBjYWxsYmFjaygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kU3RyaW5nKGJ1ZmZlciwgc3RyaW5nLCBzdGFydCwgZW5kLCBjYWxsYmFjaykge1xuICBpZiAoc3RhcnQgPiAwIHx8IGVuZCA8IHN0cmluZy5sZW5ndGgpIHtcbiAgICAvLyBvbmx5IGNyZWF0ZSBhIHN1YnN0cmluZyBpZiB3ZSByZWFsbHkgbmVlZCB0b1xuICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gIH1cbiAgYnVmZmVyLmFwcGVuZEJpbmFyeShzdHJpbmcpO1xuICBjYWxsYmFjaygpO1xufVxuXG5mdW5jdGlvbiBiaW5hcnlNZDUoZGF0YSwgY2FsbGJhY2spIHtcbiAgdmFyIGlucHV0SXNTdHJpbmcgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZyc7XG4gIHZhciBsZW4gPSBpbnB1dElzU3RyaW5nID8gZGF0YS5sZW5ndGggOiBkYXRhLnNpemU7XG4gIHZhciBjaHVua1NpemUgPSBNYXRoLm1pbihNRDVfQ0hVTktfU0laRSwgbGVuKTtcbiAgdmFyIGNodW5rcyA9IE1hdGguY2VpbChsZW4gLyBjaHVua1NpemUpO1xuICB2YXIgY3VycmVudENodW5rID0gMDtcbiAgdmFyIGJ1ZmZlciA9IGlucHV0SXNTdHJpbmcgPyBuZXcgTWQ1KCkgOiBuZXcgTWQ1LkFycmF5QnVmZmVyKCk7XG5cbiAgdmFyIGFwcGVuZCA9IGlucHV0SXNTdHJpbmcgPyBhcHBlbmRTdHJpbmcgOiBhcHBlbmRCbG9iO1xuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgc2V0SW1tZWRpYXRlU2hpbShsb2FkTmV4dENodW5rKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgdmFyIHJhdyA9IGJ1ZmZlci5lbmQodHJ1ZSk7XG4gICAgdmFyIGJhc2U2NCA9IHJhd1RvQmFzZTY0KHJhdyk7XG4gICAgY2FsbGJhY2soYmFzZTY0KTtcbiAgICBidWZmZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZE5leHRDaHVuaygpIHtcbiAgICB2YXIgc3RhcnQgPSBjdXJyZW50Q2h1bmsgKiBjaHVua1NpemU7XG4gICAgdmFyIGVuZCA9IHN0YXJ0ICsgY2h1bmtTaXplO1xuICAgIGN1cnJlbnRDaHVuaysrO1xuICAgIGlmIChjdXJyZW50Q2h1bmsgPCBjaHVua3MpIHtcbiAgICAgIGFwcGVuZChidWZmZXIsIGRhdGEsIHN0YXJ0LCBlbmQsIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmQoYnVmZmVyLCBkYXRhLCBzdGFydCwgZW5kLCBkb25lKTtcbiAgICB9XG4gIH1cbiAgbG9hZE5leHRDaHVuaygpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdNZDUoc3RyaW5nKSB7XG4gIHJldHVybiBNZDUuaGFzaChzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiByZXYoZG9jLCBkZXRlcm1pbmlzdGljX3JldnMpIHtcbiAgdmFyIGNsb25lZERvYyA9IGNsb25lKGRvYyk7XG4gIGlmICghZGV0ZXJtaW5pc3RpY19yZXZzKSB7XG4gICAgcmV0dXJuIHY0KCkucmVwbGFjZSgvLS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGRlbGV0ZSBjbG9uZWREb2MuX3Jldl90cmVlO1xuICByZXR1cm4gc3RyaW5nTWQ1KEpTT04uc3RyaW5naWZ5KGNsb25lZERvYykpO1xufVxuXG52YXIgdXVpZCA9IHY0OyAvLyBtaW1pYyBvbGQgaW1wb3J0LCBvbmx5IHY0IGlzIGV2ZXIgdXNlZCBlbHNld2hlcmVcblxuLy8gV2UgZmV0Y2ggYWxsIGxlYWZzIG9mIHRoZSByZXZpc2lvbiB0cmVlLCBhbmQgc29ydCB0aGVtIGJhc2VkIG9uIHRyZWUgbGVuZ3RoXG4vLyBhbmQgd2hldGhlciB0aGV5IHdlcmUgZGVsZXRlZCwgdW5kZWxldGVkIGRvY3VtZW50cyB3aXRoIHRoZSBsb25nZXN0IHJldmlzaW9uXG4vLyB0cmVlIChtb3N0IGVkaXRzKSB3aW5cbi8vIFRoZSBmaW5hbCBzb3J0IGFsZ29yaXRobSBpcyBzbGlnaHRseSBkb2N1bWVudGVkIGluIGEgc2lkZWJhciBoZXJlOlxuLy8gaHR0cDovL2d1aWRlLmNvdWNoZGIub3JnL2RyYWZ0L2NvbmZsaWN0cy5odG1sXG5mdW5jdGlvbiB3aW5uaW5nUmV2KG1ldGFkYXRhKSB7XG4gIHZhciB3aW5uaW5nSWQ7XG4gIHZhciB3aW5uaW5nUG9zO1xuICB2YXIgd2lubmluZ0RlbGV0ZWQ7XG4gIHZhciB0b1Zpc2l0ID0gbWV0YWRhdGEucmV2X3RyZWUuc2xpY2UoKTtcbiAgdmFyIG5vZGU7XG4gIHdoaWxlICgobm9kZSA9IHRvVmlzaXQucG9wKCkpKSB7XG4gICAgdmFyIHRyZWUgPSBub2RlLmlkcztcbiAgICB2YXIgYnJhbmNoZXMgPSB0cmVlWzJdO1xuICAgIHZhciBwb3MgPSBub2RlLnBvcztcbiAgICBpZiAoYnJhbmNoZXMubGVuZ3RoKSB7IC8vIG5vbi1sZWFmXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnJhbmNoZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdG9WaXNpdC5wdXNoKHtwb3M6IHBvcyArIDEsIGlkczogYnJhbmNoZXNbaV19KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgZGVsZXRlZCA9ICEhdHJlZVsxXS5kZWxldGVkO1xuICAgIHZhciBpZCA9IHRyZWVbMF07XG4gICAgLy8gc29ydCBieSBkZWxldGVkLCB0aGVuIHBvcywgdGhlbiBpZFxuICAgIGlmICghd2lubmluZ0lkIHx8ICh3aW5uaW5nRGVsZXRlZCAhPT0gZGVsZXRlZCA/IHdpbm5pbmdEZWxldGVkIDpcbiAgICAgICAgd2lubmluZ1BvcyAhPT0gcG9zID8gd2lubmluZ1BvcyA8IHBvcyA6IHdpbm5pbmdJZCA8IGlkKSkge1xuICAgICAgd2lubmluZ0lkID0gaWQ7XG4gICAgICB3aW5uaW5nUG9zID0gcG9zO1xuICAgICAgd2lubmluZ0RlbGV0ZWQgPSBkZWxldGVkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aW5uaW5nUG9zICsgJy0nICsgd2lubmluZ0lkO1xufVxuXG4vLyBQcmV0dHkgbXVjaCBhbGwgYmVsb3cgY2FuIGJlIGNvbWJpbmVkIGludG8gYSBoaWdoZXIgb3JkZXIgZnVuY3Rpb24gdG9cbi8vIHRyYXZlcnNlIHJldmlzaW9uc1xuLy8gVGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCBhcyBjb250ZXh0IHRvIGFsbFxuLy8gY2hpbGRyZW4gb2YgdGhhdCBub2RlXG5mdW5jdGlvbiB0cmF2ZXJzZVJldlRyZWUocmV2cywgY2FsbGJhY2spIHtcbiAgdmFyIHRvVmlzaXQgPSByZXZzLnNsaWNlKCk7XG5cbiAgdmFyIG5vZGU7XG4gIHdoaWxlICgobm9kZSA9IHRvVmlzaXQucG9wKCkpKSB7XG4gICAgdmFyIHBvcyA9IG5vZGUucG9zO1xuICAgIHZhciB0cmVlID0gbm9kZS5pZHM7XG4gICAgdmFyIGJyYW5jaGVzID0gdHJlZVsyXTtcbiAgICB2YXIgbmV3Q3R4ID1cbiAgICAgIGNhbGxiYWNrKGJyYW5jaGVzLmxlbmd0aCA9PT0gMCwgcG9zLCB0cmVlWzBdLCBub2RlLmN0eCwgdHJlZVsxXSk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJyYW5jaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b1Zpc2l0LnB1c2goe3BvczogcG9zICsgMSwgaWRzOiBicmFuY2hlc1tpXSwgY3R4OiBuZXdDdHh9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydEJ5UG9zKGEsIGIpIHtcbiAgcmV0dXJuIGEucG9zIC0gYi5wb3M7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RMZWF2ZXMocmV2cykge1xuICB2YXIgbGVhdmVzID0gW107XG4gIHRyYXZlcnNlUmV2VHJlZShyZXZzLCBmdW5jdGlvbiAoaXNMZWFmLCBwb3MsIGlkLCBhY2MsIG9wdHMpIHtcbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICBsZWF2ZXMucHVzaCh7cmV2OiBwb3MgKyBcIi1cIiArIGlkLCBwb3M6IHBvcywgb3B0czogb3B0c30pO1xuICAgIH1cbiAgfSk7XG4gIGxlYXZlcy5zb3J0KHNvcnRCeVBvcykucmV2ZXJzZSgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGVhdmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgZGVsZXRlIGxlYXZlc1tpXS5wb3M7XG4gIH1cbiAgcmV0dXJuIGxlYXZlcztcbn1cblxuLy8gcmV0dXJucyByZXZzIG9mIGFsbCBjb25mbGljdHMgdGhhdCBpcyBsZWF2ZXMgc3VjaCB0aGF0XG4vLyAxLiBhcmUgbm90IGRlbGV0ZWQgYW5kXG4vLyAyLiBhcmUgZGlmZmVyZW50IHRoYW4gd2lubmluZyByZXZpc2lvblxuZnVuY3Rpb24gY29sbGVjdENvbmZsaWN0cyhtZXRhZGF0YSkge1xuICB2YXIgd2luID0gd2lubmluZ1JldihtZXRhZGF0YSk7XG4gIHZhciBsZWF2ZXMgPSBjb2xsZWN0TGVhdmVzKG1ldGFkYXRhLnJldl90cmVlKTtcbiAgdmFyIGNvbmZsaWN0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGVhdmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGxlYWYgPSBsZWF2ZXNbaV07XG4gICAgaWYgKGxlYWYucmV2ICE9PSB3aW4gJiYgIWxlYWYub3B0cy5kZWxldGVkKSB7XG4gICAgICBjb25mbGljdHMucHVzaChsZWFmLnJldik7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25mbGljdHM7XG59XG5cbi8vIGNvbXBhY3QgYSB0cmVlIGJ5IG1hcmtpbmcgaXRzIG5vbi1sZWFmcyBhcyBtaXNzaW5nLFxuLy8gYW5kIHJldHVybiBhIGxpc3Qgb2YgcmV2cyB0byBkZWxldGVcbmZ1bmN0aW9uIGNvbXBhY3RUcmVlKG1ldGFkYXRhKSB7XG4gIHZhciByZXZzID0gW107XG4gIHRyYXZlcnNlUmV2VHJlZShtZXRhZGF0YS5yZXZfdHJlZSwgZnVuY3Rpb24gKGlzTGVhZiwgcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZIYXNoLCBjdHgsIG9wdHMpIHtcbiAgICBpZiAob3B0cy5zdGF0dXMgPT09ICdhdmFpbGFibGUnICYmICFpc0xlYWYpIHtcbiAgICAgIHJldnMucHVzaChwb3MgKyAnLScgKyByZXZIYXNoKTtcbiAgICAgIG9wdHMuc3RhdHVzID0gJ21pc3NpbmcnO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXZzO1xufVxuXG4vLyBidWlsZCB1cCBhIGxpc3Qgb2YgYWxsIHRoZSBwYXRocyB0byB0aGUgbGVhZnMgaW4gdGhpcyByZXZpc2lvbiB0cmVlXG5mdW5jdGlvbiByb290VG9MZWFmKHJldnMpIHtcbiAgdmFyIHBhdGhzID0gW107XG4gIHZhciB0b1Zpc2l0ID0gcmV2cy5zbGljZSgpO1xuICB2YXIgbm9kZTtcbiAgd2hpbGUgKChub2RlID0gdG9WaXNpdC5wb3AoKSkpIHtcbiAgICB2YXIgcG9zID0gbm9kZS5wb3M7XG4gICAgdmFyIHRyZWUgPSBub2RlLmlkcztcbiAgICB2YXIgaWQgPSB0cmVlWzBdO1xuICAgIHZhciBvcHRzID0gdHJlZVsxXTtcbiAgICB2YXIgYnJhbmNoZXMgPSB0cmVlWzJdO1xuICAgIHZhciBpc0xlYWYgPSBicmFuY2hlcy5sZW5ndGggPT09IDA7XG5cbiAgICB2YXIgaGlzdG9yeSA9IG5vZGUuaGlzdG9yeSA/IG5vZGUuaGlzdG9yeS5zbGljZSgpIDogW107XG4gICAgaGlzdG9yeS5wdXNoKHtpZDogaWQsIG9wdHM6IG9wdHN9KTtcbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICBwYXRocy5wdXNoKHtwb3M6IChwb3MgKyAxIC0gaGlzdG9yeS5sZW5ndGgpLCBpZHM6IGhpc3Rvcnl9KTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJyYW5jaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b1Zpc2l0LnB1c2goe3BvczogcG9zICsgMSwgaWRzOiBicmFuY2hlc1tpXSwgaGlzdG9yeTogaGlzdG9yeX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGF0aHMucmV2ZXJzZSgpO1xufVxuXG4vLyBmb3IgYSBiZXR0ZXIgb3ZlcnZpZXcgb2Ygd2hhdCB0aGlzIGlzIGRvaW5nLCByZWFkOlxuXG5mdW5jdGlvbiBzb3J0QnlQb3MkMShhLCBiKSB7XG4gIHJldHVybiBhLnBvcyAtIGIucG9zO1xufVxuXG4vLyBjbGFzc2ljIGJpbmFyeSBzZWFyY2hcbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnIsIGl0ZW0sIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGxvdyA9IDA7XG4gIHZhciBoaWdoID0gYXJyLmxlbmd0aDtcbiAgdmFyIG1pZDtcbiAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICBtaWQgPSAobG93ICsgaGlnaCkgPj4+IDE7XG4gICAgaWYgKGNvbXBhcmF0b3IoYXJyW21pZF0sIGl0ZW0pIDwgMCkge1xuICAgICAgbG93ID0gbWlkICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlnaCA9IG1pZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxvdztcbn1cblxuLy8gYXNzdW1pbmcgdGhlIGFyciBpcyBzb3J0ZWQsIGluc2VydCB0aGUgaXRlbSBpbiB0aGUgcHJvcGVyIHBsYWNlXG5mdW5jdGlvbiBpbnNlcnRTb3J0ZWQoYXJyLCBpdGVtLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpZHggPSBiaW5hcnlTZWFyY2goYXJyLCBpdGVtLCBjb21wYXJhdG9yKTtcbiAgYXJyLnNwbGljZShpZHgsIDAsIGl0ZW0pO1xufVxuXG4vLyBUdXJuIGEgcGF0aCBhcyBhIGZsYXQgYXJyYXkgaW50byBhIHRyZWUgd2l0aCBhIHNpbmdsZSBicmFuY2guXG4vLyBJZiBhbnkgc2hvdWxkIGJlIHN0ZW1tZWQgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheSwgdGhhdCdzIHBhc3NlZFxuLy8gaW4gYXMgdGhlIHNlY29uZCBhcmd1bWVudFxuZnVuY3Rpb24gcGF0aFRvVHJlZShwYXRoLCBudW1TdGVtbWVkKSB7XG4gIHZhciByb290O1xuICB2YXIgbGVhZjtcbiAgZm9yICh2YXIgaSA9IG51bVN0ZW1tZWQsIGxlbiA9IHBhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IHBhdGhbaV07XG4gICAgdmFyIGN1cnJlbnRMZWFmID0gW25vZGUuaWQsIG5vZGUub3B0cywgW11dO1xuICAgIGlmIChsZWFmKSB7XG4gICAgICBsZWFmWzJdLnB1c2goY3VycmVudExlYWYpO1xuICAgICAgbGVhZiA9IGN1cnJlbnRMZWFmO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290ID0gbGVhZiA9IGN1cnJlbnRMZWFmO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLy8gY29tcGFyZSB0aGUgSURzIG9mIHR3byB0cmVlc1xuZnVuY3Rpb24gY29tcGFyZVRyZWUoYSwgYikge1xuICByZXR1cm4gYVswXSA8IGJbMF0gPyAtMSA6IDE7XG59XG5cbi8vIE1lcmdlIHR3byB0cmVlcyB0b2dldGhlclxuLy8gVGhlIHJvb3RzIG9mIHRyZWUxIGFuZCB0cmVlMiBtdXN0IGJlIHRoZSBzYW1lIHJldmlzaW9uXG5mdW5jdGlvbiBtZXJnZVRyZWUoaW5fdHJlZTEsIGluX3RyZWUyKSB7XG4gIHZhciBxdWV1ZSA9IFt7dHJlZTE6IGluX3RyZWUxLCB0cmVlMjogaW5fdHJlZTJ9XTtcbiAgdmFyIGNvbmZsaWN0cyA9IGZhbHNlO1xuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgdmFyIHRyZWUxID0gaXRlbS50cmVlMTtcbiAgICB2YXIgdHJlZTIgPSBpdGVtLnRyZWUyO1xuXG4gICAgaWYgKHRyZWUxWzFdLnN0YXR1cyB8fCB0cmVlMlsxXS5zdGF0dXMpIHtcbiAgICAgIHRyZWUxWzFdLnN0YXR1cyA9XG4gICAgICAgICh0cmVlMVsxXS5zdGF0dXMgPT09ICAnYXZhaWxhYmxlJyB8fFxuICAgICAgICB0cmVlMlsxXS5zdGF0dXMgPT09ICdhdmFpbGFibGUnKSA/ICdhdmFpbGFibGUnIDogJ21pc3NpbmcnO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZTJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdHJlZTFbMl1bMF0pIHtcbiAgICAgICAgY29uZmxpY3RzID0gJ25ld19sZWFmJztcbiAgICAgICAgdHJlZTFbMl1bMF0gPSB0cmVlMlsyXVtpXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXJnZWQgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdHJlZTFbMl0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRyZWUxWzJdW2pdWzBdID09PSB0cmVlMlsyXVtpXVswXSkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goe3RyZWUxOiB0cmVlMVsyXVtqXSwgdHJlZTI6IHRyZWUyWzJdW2ldfSk7XG4gICAgICAgICAgbWVyZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFtZXJnZWQpIHtcbiAgICAgICAgY29uZmxpY3RzID0gJ25ld19icmFuY2gnO1xuICAgICAgICBpbnNlcnRTb3J0ZWQodHJlZTFbMl0sIHRyZWUyWzJdW2ldLCBjb21wYXJlVHJlZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7Y29uZmxpY3RzOiBjb25mbGljdHMsIHRyZWU6IGluX3RyZWUxfTtcbn1cblxuZnVuY3Rpb24gZG9NZXJnZSh0cmVlLCBwYXRoLCBkb250RXhwYW5kKSB7XG4gIHZhciByZXN0cmVlID0gW107XG4gIHZhciBjb25mbGljdHMgPSBmYWxzZTtcbiAgdmFyIG1lcmdlZCA9IGZhbHNlO1xuICB2YXIgcmVzO1xuXG4gIGlmICghdHJlZS5sZW5ndGgpIHtcbiAgICByZXR1cm4ge3RyZWU6IFtwYXRoXSwgY29uZmxpY3RzOiAnbmV3X2xlYWYnfTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0cmVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGJyYW5jaCA9IHRyZWVbaV07XG4gICAgaWYgKGJyYW5jaC5wb3MgPT09IHBhdGgucG9zICYmIGJyYW5jaC5pZHNbMF0gPT09IHBhdGguaWRzWzBdKSB7XG4gICAgICAvLyBQYXRocyBzdGFydCBhdCB0aGUgc2FtZSBwb3NpdGlvbiBhbmQgaGF2ZSB0aGUgc2FtZSByb290LCBzbyB0aGV5IG5lZWRcbiAgICAgIC8vIG1lcmdlZFxuICAgICAgcmVzID0gbWVyZ2VUcmVlKGJyYW5jaC5pZHMsIHBhdGguaWRzKTtcbiAgICAgIHJlc3RyZWUucHVzaCh7cG9zOiBicmFuY2gucG9zLCBpZHM6IHJlcy50cmVlfSk7XG4gICAgICBjb25mbGljdHMgPSBjb25mbGljdHMgfHwgcmVzLmNvbmZsaWN0cztcbiAgICAgIG1lcmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChkb250RXhwYW5kICE9PSB0cnVlKSB7XG4gICAgICAvLyBUaGUgcGF0aHMgc3RhcnQgYXQgYSBkaWZmZXJlbnQgcG9zaXRpb24sIHRha2UgdGhlIGVhcmxpZXN0IHBhdGggYW5kXG4gICAgICAvLyB0cmF2ZXJzZSB1cCB1bnRpbCBpdCBhcyBhdCB0aGUgc2FtZSBwb2ludCBmcm9tIHJvb3QgYXMgdGhlIHBhdGggd2VcbiAgICAgIC8vIHdhbnQgdG8gbWVyZ2UuICBJZiB0aGUga2V5cyBtYXRjaCB3ZSByZXR1cm4gdGhlIGxvbmdlciBwYXRoIHdpdGggdGhlXG4gICAgICAvLyBvdGhlciBtZXJnZWQgQWZ0ZXIgc3RlbW1pbmcgd2UgZG9udCB3YW50IHRvIGV4cGFuZCB0aGUgdHJlZXNcblxuICAgICAgdmFyIHQxID0gYnJhbmNoLnBvcyA8IHBhdGgucG9zID8gYnJhbmNoIDogcGF0aDtcbiAgICAgIHZhciB0MiA9IGJyYW5jaC5wb3MgPCBwYXRoLnBvcyA/IHBhdGggOiBicmFuY2g7XG4gICAgICB2YXIgZGlmZiA9IHQyLnBvcyAtIHQxLnBvcztcblxuICAgICAgdmFyIGNhbmRpZGF0ZVBhcmVudHMgPSBbXTtcblxuICAgICAgdmFyIHRyZWVzID0gW107XG4gICAgICB0cmVlcy5wdXNoKHtpZHM6IHQxLmlkcywgZGlmZjogZGlmZiwgcGFyZW50OiBudWxsLCBwYXJlbnRJZHg6IG51bGx9KTtcbiAgICAgIHdoaWxlICh0cmVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpdGVtID0gdHJlZXMucG9wKCk7XG4gICAgICAgIGlmIChpdGVtLmRpZmYgPT09IDApIHtcbiAgICAgICAgICBpZiAoaXRlbS5pZHNbMF0gPT09IHQyLmlkc1swXSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlUGFyZW50cy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBpdGVtLmlkc1syXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGVsZW1lbnRzTGVuID0gZWxlbWVudHMubGVuZ3RoOyBqIDwgZWxlbWVudHNMZW47IGorKykge1xuICAgICAgICAgIHRyZWVzLnB1c2goe1xuICAgICAgICAgICAgaWRzOiBlbGVtZW50c1tqXSxcbiAgICAgICAgICAgIGRpZmY6IGl0ZW0uZGlmZiAtIDEsXG4gICAgICAgICAgICBwYXJlbnQ6IGl0ZW0uaWRzLFxuICAgICAgICAgICAgcGFyZW50SWR4OiBqXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVsID0gY2FuZGlkYXRlUGFyZW50c1swXTtcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXN0cmVlLnB1c2goYnJhbmNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IG1lcmdlVHJlZShlbC5pZHMsIHQyLmlkcyk7XG4gICAgICAgIGVsLnBhcmVudFsyXVtlbC5wYXJlbnRJZHhdID0gcmVzLnRyZWU7XG4gICAgICAgIHJlc3RyZWUucHVzaCh7cG9zOiB0MS5wb3MsIGlkczogdDEuaWRzfSk7XG4gICAgICAgIGNvbmZsaWN0cyA9IGNvbmZsaWN0cyB8fCByZXMuY29uZmxpY3RzO1xuICAgICAgICBtZXJnZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN0cmVlLnB1c2goYnJhbmNoKTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSBkaWRudCBmaW5kXG4gIGlmICghbWVyZ2VkKSB7XG4gICAgcmVzdHJlZS5wdXNoKHBhdGgpO1xuICB9XG5cbiAgcmVzdHJlZS5zb3J0KHNvcnRCeVBvcyQxKTtcblxuICByZXR1cm4ge1xuICAgIHRyZWU6IHJlc3RyZWUsXG4gICAgY29uZmxpY3RzOiBjb25mbGljdHMgfHwgJ2ludGVybmFsX25vZGUnXG4gIH07XG59XG5cbi8vIFRvIGVuc3VyZSB3ZSBkb250IGdyb3cgdGhlIHJldmlzaW9uIHRyZWUgaW5maW5pdGVseSwgd2Ugc3RlbSBvbGQgcmV2aXNpb25zXG5mdW5jdGlvbiBzdGVtKHRyZWUsIGRlcHRoKSB7XG4gIC8vIEZpcnN0IHdlIGJyZWFrIG91dCB0aGUgdHJlZSBpbnRvIGEgY29tcGxldGUgbGlzdCBvZiByb290IHRvIGxlYWYgcGF0aHNcbiAgdmFyIHBhdGhzID0gcm9vdFRvTGVhZih0cmVlKTtcbiAgdmFyIHN0ZW1tZWRSZXZzO1xuXG4gIHZhciByZXN1bHQ7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIC8vIFRoZW4gZm9yIGVhY2ggcGF0aCwgd2UgY3V0IG9mZiB0aGUgc3RhcnQgb2YgdGhlIHBhdGggYmFzZWQgb24gdGhlXG4gICAgLy8gYGRlcHRoYCB0byBzdGVtIHRvLCBhbmQgZ2VuZXJhdGUgYSBuZXcgc2V0IG9mIGZsYXQgdHJlZXNcbiAgICB2YXIgcGF0aCA9IHBhdGhzW2ldO1xuICAgIHZhciBzdGVtbWVkID0gcGF0aC5pZHM7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHN0ZW1tZWQubGVuZ3RoID4gZGVwdGgpIHtcbiAgICAgIC8vIG9ubHkgZG8gdGhlIHN0ZW1taW5nIHdvcmsgaWYgd2UgYWN0dWFsbHkgbmVlZCB0byBzdGVtXG4gICAgICBpZiAoIXN0ZW1tZWRSZXZzKSB7XG4gICAgICAgIHN0ZW1tZWRSZXZzID0ge307IC8vIGF2b2lkIGFsbG9jYXRpbmcgdGhpcyBvYmplY3QgdW5uZWNlc3NhcmlseVxuICAgICAgfVxuICAgICAgdmFyIG51bVN0ZW1tZWQgPSBzdGVtbWVkLmxlbmd0aCAtIGRlcHRoO1xuICAgICAgbm9kZSA9IHtcbiAgICAgICAgcG9zOiBwYXRoLnBvcyArIG51bVN0ZW1tZWQsXG4gICAgICAgIGlkczogcGF0aFRvVHJlZShzdGVtbWVkLCBudW1TdGVtbWVkKVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBudW1TdGVtbWVkOyBzKyspIHtcbiAgICAgICAgdmFyIHJldiA9IChwYXRoLnBvcyArIHMpICsgJy0nICsgc3RlbW1lZFtzXS5pZDtcbiAgICAgICAgc3RlbW1lZFJldnNbcmV2XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gbm8gbmVlZCB0byBhY3R1YWxseSBzdGVtXG4gICAgICBub2RlID0ge1xuICAgICAgICBwb3M6IHBhdGgucG9zLFxuICAgICAgICBpZHM6IHBhdGhUb1RyZWUoc3RlbW1lZCwgMClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVGhlbiB3ZSByZW1lcmdlIGFsbCB0aG9zZSBmbGF0IHRyZWVzIHRvZ2V0aGVyLCBlbnN1cmluZyB0aGF0IHdlIGRvbnRcbiAgICAvLyBjb25uZWN0IHRyZWVzIHRoYXQgd291bGQgZ28gYmV5b25kIHRoZSBkZXB0aCBsaW1pdFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IGRvTWVyZ2UocmVzdWx0LCBub2RlLCB0cnVlKS50cmVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBbbm9kZV07XG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcyBpcyBtZW1vcnktaGVhdnkgcGVyIENocm9tZSBwcm9maWxlciwgYXZvaWQgdW5sZXNzIHdlIGFjdHVhbGx5IHN0ZW1tZWRcbiAgaWYgKHN0ZW1tZWRSZXZzKSB7XG4gICAgdHJhdmVyc2VSZXZUcmVlKHJlc3VsdCwgZnVuY3Rpb24gKGlzTGVhZiwgcG9zLCByZXZIYXNoKSB7XG4gICAgICAvLyBzb21lIHJldmlzaW9ucyBtYXkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gYSBicmFuY2ggYnV0IG5vdCBpbiBhbm90aGVyXG4gICAgICBkZWxldGUgc3RlbW1lZFJldnNbcG9zICsgJy0nICsgcmV2SGFzaF07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRyZWU6IHJlc3VsdCxcbiAgICByZXZzOiBzdGVtbWVkUmV2cyA/IE9iamVjdC5rZXlzKHN0ZW1tZWRSZXZzKSA6IFtdXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlKHRyZWUsIHBhdGgsIGRlcHRoKSB7XG4gIHZhciBuZXdUcmVlID0gZG9NZXJnZSh0cmVlLCBwYXRoKTtcbiAgdmFyIHN0ZW1tZWQgPSBzdGVtKG5ld1RyZWUudHJlZSwgZGVwdGgpO1xuICByZXR1cm4ge1xuICAgIHRyZWU6IHN0ZW1tZWQudHJlZSxcbiAgICBzdGVtbWVkUmV2czogc3RlbW1lZC5yZXZzLFxuICAgIGNvbmZsaWN0czogbmV3VHJlZS5jb25mbGljdHNcbiAgfTtcbn1cblxuLy8gcmV0dXJuIHRydWUgaWYgYSByZXYgZXhpc3RzIGluIHRoZSByZXYgdHJlZSwgZmFsc2Ugb3RoZXJ3aXNlXG5mdW5jdGlvbiByZXZFeGlzdHMocmV2cywgcmV2KSB7XG4gIHZhciB0b1Zpc2l0ID0gcmV2cy5zbGljZSgpO1xuICB2YXIgc3BsaXRSZXYgPSByZXYuc3BsaXQoJy0nKTtcbiAgdmFyIHRhcmdldFBvcyA9IHBhcnNlSW50KHNwbGl0UmV2WzBdLCAxMCk7XG4gIHZhciB0YXJnZXRJZCA9IHNwbGl0UmV2WzFdO1xuXG4gIHZhciBub2RlO1xuICB3aGlsZSAoKG5vZGUgPSB0b1Zpc2l0LnBvcCgpKSkge1xuICAgIGlmIChub2RlLnBvcyA9PT0gdGFyZ2V0UG9zICYmIG5vZGUuaWRzWzBdID09PSB0YXJnZXRJZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBicmFuY2hlcyA9IG5vZGUuaWRzWzJdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBicmFuY2hlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9WaXNpdC5wdXNoKHtwb3M6IG5vZGUucG9zICsgMSwgaWRzOiBicmFuY2hlc1tpXX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFRyZWVzKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaWRzO1xufVxuXG4vLyBjaGVjayBpZiBhIHNwZWNpZmljIHJldmlzaW9uIG9mIGEgZG9jIGhhcyBiZWVuIGRlbGV0ZWRcbi8vICAtIG1ldGFkYXRhOiB0aGUgbWV0YWRhdGEgb2JqZWN0IGZyb20gdGhlIGRvYyBzdG9yZVxuLy8gIC0gcmV2OiAob3B0aW9uYWwpIHRoZSByZXZpc2lvbiB0byBjaGVjay4gZGVmYXVsdHMgdG8gd2lubmluZyByZXZpc2lvblxuZnVuY3Rpb24gaXNEZWxldGVkKG1ldGFkYXRhLCByZXYpIHtcbiAgaWYgKCFyZXYpIHtcbiAgICByZXYgPSB3aW5uaW5nUmV2KG1ldGFkYXRhKTtcbiAgfVxuICB2YXIgaWQgPSByZXYuc3Vic3RyaW5nKHJldi5pbmRleE9mKCctJykgKyAxKTtcbiAgdmFyIHRvVmlzaXQgPSBtZXRhZGF0YS5yZXZfdHJlZS5tYXAoZ2V0VHJlZXMpO1xuXG4gIHZhciB0cmVlO1xuICB3aGlsZSAoKHRyZWUgPSB0b1Zpc2l0LnBvcCgpKSkge1xuICAgIGlmICh0cmVlWzBdID09PSBpZCkge1xuICAgICAgcmV0dXJuICEhdHJlZVsxXS5kZWxldGVkO1xuICAgIH1cbiAgICB0b1Zpc2l0ID0gdG9WaXNpdC5jb25jYXQodHJlZVsyXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNMb2NhbElkKGlkKSB7XG4gIHJldHVybiAoL15fbG9jYWwvKS50ZXN0KGlkKTtcbn1cblxuLy8gcmV0dXJucyB0aGUgY3VycmVudCBsZWFmIG5vZGUgZm9yIGEgZ2l2ZW4gcmV2aXNpb25cbmZ1bmN0aW9uIGxhdGVzdChyZXYsIG1ldGFkYXRhKSB7XG4gIHZhciB0b1Zpc2l0ID0gbWV0YWRhdGEucmV2X3RyZWUuc2xpY2UoKTtcbiAgdmFyIG5vZGU7XG4gIHdoaWxlICgobm9kZSA9IHRvVmlzaXQucG9wKCkpKSB7XG4gICAgdmFyIHBvcyA9IG5vZGUucG9zO1xuICAgIHZhciB0cmVlID0gbm9kZS5pZHM7XG4gICAgdmFyIGlkID0gdHJlZVswXTtcbiAgICB2YXIgb3B0cyA9IHRyZWVbMV07XG4gICAgdmFyIGJyYW5jaGVzID0gdHJlZVsyXTtcbiAgICB2YXIgaXNMZWFmID0gYnJhbmNoZXMubGVuZ3RoID09PSAwO1xuXG4gICAgdmFyIGhpc3RvcnkgPSBub2RlLmhpc3RvcnkgPyBub2RlLmhpc3Rvcnkuc2xpY2UoKSA6IFtdO1xuICAgIGhpc3RvcnkucHVzaCh7aWQ6IGlkLCBwb3M6IHBvcywgb3B0czogb3B0c30pO1xuXG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhpc3RvcnkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhpc3RvcnlOb2RlID0gaGlzdG9yeVtpXTtcbiAgICAgICAgdmFyIGhpc3RvcnlSZXYgPSBoaXN0b3J5Tm9kZS5wb3MgKyAnLScgKyBoaXN0b3J5Tm9kZS5pZDtcblxuICAgICAgICBpZiAoaGlzdG9yeVJldiA9PT0gcmV2KSB7XG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSByZXYgb2YgdGhpcyBsZWFmXG4gICAgICAgICAgcmV0dXJuIHBvcyArICctJyArIGlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDAsIGwgPSBicmFuY2hlcy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgIHRvVmlzaXQucHVzaCh7cG9zOiBwb3MgKyAxLCBpZHM6IGJyYW5jaGVzW2pdLCBoaXN0b3J5OiBoaXN0b3J5fSk7XG4gICAgfVxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcmVzb2x2ZSBsYXRlc3QgcmV2aXNpb24gZm9yIGlkICcgKyBtZXRhZGF0YS5pZCArICcsIHJldiAnICsgcmV2KTtcbn1cblxuaW5oZXJpdHMoQ2hhbmdlcyQxLCBFRSk7XG5cbmZ1bmN0aW9uIHRyeUNhdGNoSW5DaGFuZ2VMaXN0ZW5lcihzZWxmLCBjaGFuZ2UsIHBlbmRpbmcsIGxhc3RTZXEpIHtcbiAgLy8gaXNvbGF0ZSB0cnkvY2F0Y2hlcyB0byBhdm9pZCBWOCBkZW9wdGltaXphdGlvbnNcbiAgdHJ5IHtcbiAgICBzZWxmLmVtaXQoJ2NoYW5nZScsIGNoYW5nZSwgcGVuZGluZywgbGFzdFNlcSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBndWFyZGVkQ29uc29sZSgnZXJyb3InLCAnRXJyb3IgaW4gLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKTonLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBDaGFuZ2VzJDEoZGIsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIEVFLmNhbGwodGhpcyk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5kYiA9IGRiO1xuICBvcHRzID0gb3B0cyA/IGNsb25lKG9wdHMpIDoge307XG4gIHZhciBjb21wbGV0ZSA9IG9wdHMuY29tcGxldGUgPSBvbmNlKGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBpZiAobGlzdGVuZXJDb3VudChzZWxmLCAnZXJyb3InKSA+IDApIHtcbiAgICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuZW1pdCgnY29tcGxldGUnLCByZXNwKTtcbiAgICB9XG4gICAgc2VsZi5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICBkYi5yZW1vdmVMaXN0ZW5lcignZGVzdHJveWVkJywgb25EZXN0cm95KTtcbiAgfSk7XG4gIGlmIChjYWxsYmFjaykge1xuICAgIHNlbGYub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3ApO1xuICAgIH0pO1xuICAgIHNlbGYub24oJ2Vycm9yJywgY2FsbGJhY2spO1xuICB9XG4gIGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICBzZWxmLmNhbmNlbCgpO1xuICB9XG4gIGRiLm9uY2UoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveSk7XG5cbiAgb3B0cy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UsIHBlbmRpbmcsIGxhc3RTZXEpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoc2VsZi5pc0NhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnlDYXRjaEluQ2hhbmdlTGlzdGVuZXIoc2VsZiwgY2hhbmdlLCBwZW5kaW5nLCBsYXN0U2VxKTtcbiAgfTtcblxuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgICBvcHRzLmNvbXBsZXRlID0gZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChyZXMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBzZWxmLm9uY2UoJ2NhbmNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkYi5yZW1vdmVMaXN0ZW5lcignZGVzdHJveWVkJywgb25EZXN0cm95KTtcbiAgICBvcHRzLmNvbXBsZXRlKG51bGwsIHtzdGF0dXM6ICdjYW5jZWxsZWQnfSk7XG4gIH0pO1xuICB0aGlzLnRoZW4gPSBwcm9taXNlLnRoZW4uYmluZChwcm9taXNlKTtcbiAgdGhpc1snY2F0Y2gnXSA9IHByb21pc2VbJ2NhdGNoJ10uYmluZChwcm9taXNlKTtcbiAgdGhpcy50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBjb21wbGV0ZShudWxsLCByZXN1bHQpO1xuICB9LCBjb21wbGV0ZSk7XG5cblxuXG4gIGlmICghZGIudGFza3F1ZXVlLmlzUmVhZHkpIHtcbiAgICBkYi50YXNrcXVldWUuYWRkVGFzayhmdW5jdGlvbiAoZmFpbGVkKSB7XG4gICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgIG9wdHMuY29tcGxldGUoZmFpbGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0NhbmNlbGxlZCkge1xuICAgICAgICBzZWxmLmVtaXQoJ2NhbmNlbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi52YWxpZGF0ZUNoYW5nZXMob3B0cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi52YWxpZGF0ZUNoYW5nZXMob3B0cyk7XG4gIH1cbn1cbkNoYW5nZXMkMS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgaWYgKHRoaXMuZGIudGFza3F1ZXVlLmlzUmVhZHkpIHtcbiAgICB0aGlzLmVtaXQoJ2NhbmNlbCcpO1xuICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NoYW5nZShkb2MsIG1ldGFkYXRhLCBvcHRzKSB7XG4gIHZhciBjaGFuZ2VMaXN0ID0gW3tyZXY6IGRvYy5fcmV2fV07XG4gIGlmIChvcHRzLnN0eWxlID09PSAnYWxsX2RvY3MnKSB7XG4gICAgY2hhbmdlTGlzdCA9IGNvbGxlY3RMZWF2ZXMobWV0YWRhdGEucmV2X3RyZWUpXG4gICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4ge3JldjogeC5yZXZ9OyB9KTtcbiAgfVxuICB2YXIgY2hhbmdlID0ge1xuICAgIGlkOiBtZXRhZGF0YS5pZCxcbiAgICBjaGFuZ2VzOiBjaGFuZ2VMaXN0LFxuICAgIGRvYzogZG9jXG4gIH07XG5cbiAgaWYgKGlzRGVsZXRlZChtZXRhZGF0YSwgZG9jLl9yZXYpKSB7XG4gICAgY2hhbmdlLmRlbGV0ZWQgPSB0cnVlO1xuICB9XG4gIGlmIChvcHRzLmNvbmZsaWN0cykge1xuICAgIGNoYW5nZS5kb2MuX2NvbmZsaWN0cyA9IGNvbGxlY3RDb25mbGljdHMobWV0YWRhdGEpO1xuICAgIGlmICghY2hhbmdlLmRvYy5fY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGNoYW5nZS5kb2MuX2NvbmZsaWN0cztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYW5nZTtcbn1cblxuQ2hhbmdlcyQxLnByb3RvdHlwZS52YWxpZGF0ZUNoYW5nZXMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgY2FsbGJhY2sgPSBvcHRzLmNvbXBsZXRlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKFBvdWNoREIuX2NoYW5nZXNGaWx0ZXJQbHVnaW4pIHtcbiAgICBQb3VjaERCLl9jaGFuZ2VzRmlsdGVyUGx1Z2luLnZhbGlkYXRlKG9wdHMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG4gICAgICBzZWxmLmRvQ2hhbmdlcyhvcHRzKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLmRvQ2hhbmdlcyhvcHRzKTtcbiAgfVxufTtcblxuQ2hhbmdlcyQxLnByb3RvdHlwZS5kb0NoYW5nZXMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjYWxsYmFjayA9IG9wdHMuY29tcGxldGU7XG5cbiAgb3B0cyA9IGNsb25lKG9wdHMpO1xuICBpZiAoJ2xpdmUnIGluIG9wdHMgJiYgISgnY29udGludW91cycgaW4gb3B0cykpIHtcbiAgICBvcHRzLmNvbnRpbnVvdXMgPSBvcHRzLmxpdmU7XG4gIH1cbiAgb3B0cy5wcm9jZXNzQ2hhbmdlID0gcHJvY2Vzc0NoYW5nZTtcblxuICBpZiAob3B0cy5zaW5jZSA9PT0gJ2xhdGVzdCcpIHtcbiAgICBvcHRzLnNpbmNlID0gJ25vdyc7XG4gIH1cbiAgaWYgKCFvcHRzLnNpbmNlKSB7XG4gICAgb3B0cy5zaW5jZSA9IDA7XG4gIH1cbiAgaWYgKG9wdHMuc2luY2UgPT09ICdub3cnKSB7XG4gICAgdGhpcy5kYi5pbmZvKCkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoc2VsZi5pc0NhbmNlbGxlZCkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCB7c3RhdHVzOiAnY2FuY2VsbGVkJ30pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvcHRzLnNpbmNlID0gaW5mby51cGRhdGVfc2VxO1xuICAgICAgc2VsZi5kb0NoYW5nZXMob3B0cyk7XG4gICAgfSwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChQb3VjaERCLl9jaGFuZ2VzRmlsdGVyUGx1Z2luKSB7XG4gICAgUG91Y2hEQi5fY2hhbmdlc0ZpbHRlclBsdWdpbi5ub3JtYWxpemUob3B0cyk7XG4gICAgaWYgKFBvdWNoREIuX2NoYW5nZXNGaWx0ZXJQbHVnaW4uc2hvdWxkRmlsdGVyKHRoaXMsIG9wdHMpKSB7XG4gICAgICByZXR1cm4gUG91Y2hEQi5fY2hhbmdlc0ZpbHRlclBsdWdpbi5maWx0ZXIodGhpcywgb3B0cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFsnZG9jX2lkcycsICdmaWx0ZXInLCAnc2VsZWN0b3InLCAndmlldyddLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICAgIGd1YXJkZWRDb25zb2xlKCd3YXJuJyxcbiAgICAgICAgICAnVGhlIFwiJyArIGtleSArICdcIiBvcHRpb24gd2FzIHBhc3NlZCBpbiB0byBjaGFuZ2VzL3JlcGxpY2F0ZSwgJyArXG4gICAgICAgICAgJ2J1dCBwb3VjaGRiLWNoYW5nZXMtZmlsdGVyIHBsdWdpbiBpcyBub3QgaW5zdGFsbGVkLCBzbyBpdCAnICtcbiAgICAgICAgICAnd2FzIGlnbm9yZWQuIFBsZWFzZSBpbnN0YWxsIHRoZSBwbHVnaW4gdG8gZW5hYmxlIGZpbHRlcmluZy4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoISgnZGVzY2VuZGluZycgaW4gb3B0cykpIHtcbiAgICBvcHRzLmRlc2NlbmRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIDAgYW5kIDEgc2hvdWxkIHJldHVybiAxIGRvY3VtZW50XG4gIG9wdHMubGltaXQgPSBvcHRzLmxpbWl0ID09PSAwID8gMSA6IG9wdHMubGltaXQ7XG4gIG9wdHMuY29tcGxldGUgPSBjYWxsYmFjaztcbiAgdmFyIG5ld1Byb21pc2UgPSB0aGlzLmRiLl9jaGFuZ2VzKG9wdHMpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAobmV3UHJvbWlzZSAmJiB0eXBlb2YgbmV3UHJvbWlzZS5jYW5jZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgY2FuY2VsID0gc2VsZi5jYW5jZWw7XG4gICAgc2VsZi5jYW5jZWwgPSBnZXRBcmd1bWVudHMoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIG5ld1Byb21pc2UuY2FuY2VsKCk7XG4gICAgICBjYW5jZWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qXG4gKiBBIGdlbmVyaWMgcG91Y2ggYWRhcHRlclxuICovXG5cbmZ1bmN0aW9uIGNvbXBhcmUobGVmdCwgcmlnaHQpIHtcbiAgcmV0dXJuIGxlZnQgPCByaWdodCA/IC0xIDogbGVmdCA+IHJpZ2h0ID8gMSA6IDA7XG59XG5cbi8vIFdyYXBwZXIgZm9yIGZ1bmN0aW9ucyB0aGF0IGNhbGwgdGhlIGJ1bGtkb2NzIGFwaSB3aXRoIGEgc2luZ2xlIGRvYyxcbi8vIGlmIHRoZSBmaXJzdCByZXN1bHQgaXMgYW4gZXJyb3IsIHJldHVybiBhbiBlcnJvclxuZnVuY3Rpb24geWFua0Vycm9yKGNhbGxiYWNrLCBkb2NJZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgIGlmIChlcnIgfHwgKHJlc3VsdHNbMF0gJiYgcmVzdWx0c1swXS5lcnJvcikpIHtcbiAgICAgIGVyciA9IGVyciB8fCByZXN1bHRzWzBdO1xuICAgICAgZXJyLmRvY0lkID0gZG9jSWQ7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzLmxlbmd0aCA/IHJlc3VsdHNbMF0gIDogcmVzdWx0cyk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBjbGVhbiBkb2NzIGdpdmVuIHRvIHVzIGJ5IHRoZSB1c2VyXG5mdW5jdGlvbiBjbGVhbkRvY3MoZG9jcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9jID0gZG9jc1tpXTtcbiAgICBpZiAoZG9jLl9kZWxldGVkKSB7XG4gICAgICBkZWxldGUgZG9jLl9hdHRhY2htZW50czsgLy8gaWdub3JlIGF0dHMgZm9yIGRlbGV0ZWQgZG9jc1xuICAgIH0gZWxzZSBpZiAoZG9jLl9hdHRhY2htZW50cykge1xuICAgICAgLy8gZmlsdGVyIG91dCBleHRyYW5lb3VzIGtleXMgZnJvbSBfYXR0YWNobWVudHNcbiAgICAgIHZhciBhdHRzID0gT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cyk7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGF0dHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGF0dCA9IGF0dHNbal07XG4gICAgICAgIGRvYy5fYXR0YWNobWVudHNbYXR0XSA9IHBpY2soZG9jLl9hdHRhY2htZW50c1thdHRdLFxuICAgICAgICAgIFsnZGF0YScsICdkaWdlc3QnLCAnY29udGVudF90eXBlJywgJ2xlbmd0aCcsICdyZXZwb3MnLCAnc3R1YiddKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gY29tcGFyZSB0d28gZG9jcywgZmlyc3QgYnkgX2lkIHRoZW4gYnkgX3JldlxuZnVuY3Rpb24gY29tcGFyZUJ5SWRUaGVuUmV2KGEsIGIpIHtcbiAgdmFyIGlkQ29tcGFyZSA9IGNvbXBhcmUoYS5faWQsIGIuX2lkKTtcbiAgaWYgKGlkQ29tcGFyZSAhPT0gMCkge1xuICAgIHJldHVybiBpZENvbXBhcmU7XG4gIH1cbiAgdmFyIGFTdGFydCA9IGEuX3JldmlzaW9ucyA/IGEuX3JldmlzaW9ucy5zdGFydCA6IDA7XG4gIHZhciBiU3RhcnQgPSBiLl9yZXZpc2lvbnMgPyBiLl9yZXZpc2lvbnMuc3RhcnQgOiAwO1xuICByZXR1cm4gY29tcGFyZShhU3RhcnQsIGJTdGFydCk7XG59XG5cbi8vIGZvciBldmVyeSBub2RlIGluIGEgcmV2aXNpb24gdHJlZSBjb21wdXRlcyBpdHMgZGlzdGFuY2UgZnJvbSB0aGUgY2xvc2VzdFxuLy8gbGVhZlxuZnVuY3Rpb24gY29tcHV0ZUhlaWdodChyZXZzKSB7XG4gIHZhciBoZWlnaHQgPSB7fTtcbiAgdmFyIGVkZ2VzID0gW107XG4gIHRyYXZlcnNlUmV2VHJlZShyZXZzLCBmdW5jdGlvbiAoaXNMZWFmLCBwb3MsIGlkLCBwcm50KSB7XG4gICAgdmFyIHJldiQkMSA9IHBvcyArIFwiLVwiICsgaWQ7XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgaGVpZ2h0W3JldiQkMV0gPSAwO1xuICAgIH1cbiAgICBpZiAocHJudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlZGdlcy5wdXNoKHtmcm9tOiBwcm50LCB0bzogcmV2JCQxfSk7XG4gICAgfVxuICAgIHJldHVybiByZXYkJDE7XG4gIH0pO1xuXG4gIGVkZ2VzLnJldmVyc2UoKTtcbiAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgIGlmIChoZWlnaHRbZWRnZS5mcm9tXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHRbZWRnZS5mcm9tXSA9IDEgKyBoZWlnaHRbZWRnZS50b107XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlaWdodFtlZGdlLmZyb21dID0gTWF0aC5taW4oaGVpZ2h0W2VkZ2UuZnJvbV0sIDEgKyBoZWlnaHRbZWRnZS50b10pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGFsbERvY3NLZXlzUGFyc2Uob3B0cykge1xuICB2YXIga2V5cyA9ICAoJ2xpbWl0JyBpbiBvcHRzKSA/XG4gICAgb3B0cy5rZXlzLnNsaWNlKG9wdHMuc2tpcCwgb3B0cy5saW1pdCArIG9wdHMuc2tpcCkgOlxuICAgIChvcHRzLnNraXAgPiAwKSA/IG9wdHMua2V5cy5zbGljZShvcHRzLnNraXApIDogb3B0cy5rZXlzO1xuICBvcHRzLmtleXMgPSBrZXlzO1xuICBvcHRzLnNraXAgPSAwO1xuICBkZWxldGUgb3B0cy5saW1pdDtcbiAgaWYgKG9wdHMuZGVzY2VuZGluZykge1xuICAgIGtleXMucmV2ZXJzZSgpO1xuICAgIG9wdHMuZGVzY2VuZGluZyA9IGZhbHNlO1xuICB9XG59XG5cbi8vIGFsbCBjb21wYWN0aW9uIGlzIGRvbmUgaW4gYSBxdWV1ZSwgdG8gYXZvaWQgYXR0YWNoaW5nXG4vLyB0b28gbWFueSBsaXN0ZW5lcnMgYXQgb25jZVxuZnVuY3Rpb24gZG9OZXh0Q29tcGFjdGlvbihzZWxmKSB7XG4gIHZhciB0YXNrID0gc2VsZi5fY29tcGFjdGlvblF1ZXVlWzBdO1xuICB2YXIgb3B0cyA9IHRhc2sub3B0cztcbiAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgc2VsZi5nZXQoJ19sb2NhbC9jb21wYWN0aW9uJykuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSkudGhlbihmdW5jdGlvbiAoZG9jKSB7XG4gICAgaWYgKGRvYyAmJiBkb2MubGFzdF9zZXEpIHtcbiAgICAgIG9wdHMubGFzdF9zZXEgPSBkb2MubGFzdF9zZXE7XG4gICAgfVxuICAgIHNlbGYuX2NvbXBhY3Qob3B0cywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9XG4gICAgICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9jb21wYWN0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHNlbGYuX2NvbXBhY3Rpb25RdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBkb05leHRDb21wYWN0aW9uKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaG1lbnROYW1lRXJyb3IobmFtZSkge1xuICBpZiAobmFtZS5jaGFyQXQoMCkgPT09ICdfJykge1xuICAgIHJldHVybiBuYW1lICsgJyBpcyBub3QgYSB2YWxpZCBhdHRhY2htZW50IG5hbWUsIGF0dGFjaG1lbnQgJyArXG4gICAgICAnbmFtZXMgY2Fubm90IHN0YXJ0IHdpdGggXFwnX1xcJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5pbmhlcml0cyhBYnN0cmFjdFBvdWNoREIsIEVFKTtcblxuZnVuY3Rpb24gQWJzdHJhY3RQb3VjaERCKCkge1xuICBFRS5jYWxsKHRoaXMpO1xuXG4gIC8vIHJlLWJpbmQgcHJvdG90eXBlZCBtZXRob2RzXG4gIGZvciAodmFyIHAgaW4gQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZSkge1xuICAgIGlmICh0eXBlb2YgdGhpc1twXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1twXSA9IHRoaXNbcF0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5wb3N0ID1cbiAgYWRhcHRlckZ1bigncG9zdCcsIGZ1bmN0aW9uIChkb2MsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2MgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZG9jKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihOT1RfQU5fT0JKRUNUKSk7XG4gIH1cbiAgdGhpcy5idWxrRG9jcyh7ZG9jczogW2RvY119LCBvcHRzLCB5YW5rRXJyb3IoY2FsbGJhY2ssIGRvYy5faWQpKTtcbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLnB1dCA9IGFkYXB0ZXJGdW4oJ3B1dCcsIGZ1bmN0aW9uIChkb2MsIG9wdHMsIGNiKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2MgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZG9jKSkge1xuICAgIHJldHVybiBjYihjcmVhdGVFcnJvcihOT1RfQU5fT0JKRUNUKSk7XG4gIH1cbiAgaW52YWxpZElkRXJyb3IoZG9jLl9pZCk7XG4gIGlmIChpc0xvY2FsSWQoZG9jLl9pZCkgJiYgdHlwZW9mIHRoaXMuX3B1dExvY2FsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGRvYy5fZGVsZXRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZUxvY2FsKGRvYywgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHV0TG9jYWwoZG9jLCBjYik7XG4gICAgfVxuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKG9wdHMuZm9yY2UgJiYgZG9jLl9yZXYpIHtcbiAgICB0cmFuc2Zvcm1Gb3JjZU9wdGlvblRvTmV3RWRpdHNPcHRpb24oKTtcbiAgICBwdXREb2MoZnVuY3Rpb24gKGVycikge1xuICAgICAgdmFyIHJlc3VsdCA9IGVyciA/IG51bGwgOiB7b2s6IHRydWUsIGlkOiBkb2MuX2lkLCByZXY6IGRvYy5fcmV2fTtcbiAgICAgIGNiKGVyciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwdXREb2MoY2IpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRm9yY2VPcHRpb25Ub05ld0VkaXRzT3B0aW9uKCkge1xuICAgIHZhciBwYXJ0cyA9IGRvYy5fcmV2LnNwbGl0KCctJyk7XG4gICAgdmFyIG9sZFJldklkID0gcGFydHNbMV07XG4gICAgdmFyIG9sZFJldk51bSA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG5cbiAgICB2YXIgbmV3UmV2TnVtID0gb2xkUmV2TnVtICsgMTtcbiAgICB2YXIgbmV3UmV2SWQgPSByZXYoKTtcblxuICAgIGRvYy5fcmV2aXNpb25zID0ge1xuICAgICAgc3RhcnQ6IG5ld1Jldk51bSxcbiAgICAgIGlkczogW25ld1JldklkLCBvbGRSZXZJZF1cbiAgICB9O1xuICAgIGRvYy5fcmV2ID0gbmV3UmV2TnVtICsgJy0nICsgbmV3UmV2SWQ7XG4gICAgb3B0cy5uZXdfZWRpdHMgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBwdXREb2MobmV4dCkge1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fcHV0ID09PSAnZnVuY3Rpb24nICYmIG9wdHMubmV3X2VkaXRzICE9PSBmYWxzZSkge1xuICAgICAgc2VsZi5fcHV0KGRvYywgb3B0cywgbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuYnVsa0RvY3Moe2RvY3M6IFtkb2NdfSwgb3B0cywgeWFua0Vycm9yKG5leHQsIGRvYy5faWQpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLnB1dEF0dGFjaG1lbnQgPVxuICBhZGFwdGVyRnVuKCdwdXRBdHRhY2htZW50JywgZnVuY3Rpb24gKGRvY0lkLCBhdHRhY2htZW50SWQsIHJldiQkMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9iLCB0eXBlKSB7XG4gIHZhciBhcGkgPSB0aGlzO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0eXBlID0gYmxvYjtcbiAgICBibG9iID0gcmV2JCQxO1xuICAgIHJldiQkMSA9IG51bGw7XG4gIH1cbiAgLy8gTGV0cyBmaXggaW4gaHR0cHM6Ly9naXRodWIuY29tL3BvdWNoZGIvcG91Y2hkYi9pc3N1ZXMvMzI2N1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSBibG9iO1xuICAgIGJsb2IgPSByZXYkJDE7XG4gICAgcmV2JCQxID0gbnVsbDtcbiAgfVxuICBpZiAoIXR5cGUpIHtcbiAgICBndWFyZGVkQ29uc29sZSgnd2FybicsICdBdHRhY2htZW50JywgYXR0YWNobWVudElkLCAnb24gZG9jdW1lbnQnLCBkb2NJZCwgJ2lzIG1pc3NpbmcgY29udGVudF90eXBlJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBdHRhY2htZW50KGRvYykge1xuICAgIHZhciBwcmV2cmV2cG9zID0gJ19yZXYnIGluIGRvYyA/IHBhcnNlSW50KGRvYy5fcmV2LCAxMCkgOiAwO1xuICAgIGRvYy5fYXR0YWNobWVudHMgPSBkb2MuX2F0dGFjaG1lbnRzIHx8IHt9O1xuICAgIGRvYy5fYXR0YWNobWVudHNbYXR0YWNobWVudElkXSA9IHtcbiAgICAgIGNvbnRlbnRfdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGJsb2IsXG4gICAgICByZXZwb3M6ICsrcHJldnJldnBvc1xuICAgIH07XG4gICAgcmV0dXJuIGFwaS5wdXQoZG9jKTtcbiAgfVxuXG4gIHJldHVybiBhcGkuZ2V0KGRvY0lkKS50aGVuKGZ1bmN0aW9uIChkb2MpIHtcbiAgICBpZiAoZG9jLl9yZXYgIT09IHJldiQkMSkge1xuICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoUkVWX0NPTkZMSUNUKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQXR0YWNobWVudChkb2MpO1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgIC8vIGNyZWF0ZSBuZXcgZG9jXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZXJyLnJlYXNvbiA9PT0gTUlTU0lOR19ET0MubWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUF0dGFjaG1lbnQoe19pZDogZG9jSWR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5yZW1vdmVBdHRhY2htZW50ID1cbiAgYWRhcHRlckZ1bigncmVtb3ZlQXR0YWNobWVudCcsIGZ1bmN0aW9uIChkb2NJZCwgYXR0YWNobWVudElkLCByZXYkJDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmdldChkb2NJZCwgZnVuY3Rpb24gKGVyciwgb2JqKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGVycikge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9iai5fcmV2ICE9PSByZXYkJDEpIHtcbiAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKFJFVl9DT05GTElDVCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIW9iai5fYXR0YWNobWVudHMpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBkZWxldGUgb2JqLl9hdHRhY2htZW50c1thdHRhY2htZW50SWRdO1xuICAgIGlmIChPYmplY3Qua2V5cyhvYmouX2F0dGFjaG1lbnRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBvYmouX2F0dGFjaG1lbnRzO1xuICAgIH1cbiAgICBzZWxmLnB1dChvYmosIGNhbGxiYWNrKTtcbiAgfSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5yZW1vdmUgPVxuICBhZGFwdGVyRnVuKCdyZW1vdmUnLCBmdW5jdGlvbiAoZG9jT3JJZCwgb3B0c09yUmV2LCBvcHRzLCBjYWxsYmFjaykge1xuICB2YXIgZG9jO1xuICBpZiAodHlwZW9mIG9wdHNPclJldiA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBpZCwgcmV2LCBvcHRzLCBjYWxsYmFjayBzdHlsZVxuICAgIGRvYyA9IHtcbiAgICAgIF9pZDogZG9jT3JJZCxcbiAgICAgIF9yZXY6IG9wdHNPclJldlxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRvYywgb3B0cywgY2FsbGJhY2sgc3R5bGVcbiAgICBkb2MgPSBkb2NPcklkO1xuICAgIGlmICh0eXBlb2Ygb3B0c09yUmV2ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHNPclJldjtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IG9wdHNPclJldjtcbiAgICB9XG4gIH1cbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMud2FzX2RlbGV0ZSA9IHRydWU7XG4gIHZhciBuZXdEb2MgPSB7X2lkOiBkb2MuX2lkLCBfcmV2OiAoZG9jLl9yZXYgfHwgb3B0cy5yZXYpfTtcbiAgbmV3RG9jLl9kZWxldGVkID0gdHJ1ZTtcbiAgaWYgKGlzTG9jYWxJZChuZXdEb2MuX2lkKSAmJiB0eXBlb2YgdGhpcy5fcmVtb3ZlTG9jYWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlTG9jYWwoZG9jLCBjYWxsYmFjayk7XG4gIH1cbiAgdGhpcy5idWxrRG9jcyh7ZG9jczogW25ld0RvY119LCBvcHRzLCB5YW5rRXJyb3IoY2FsbGJhY2ssIG5ld0RvYy5faWQpKTtcbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLnJldnNEaWZmID1cbiAgYWRhcHRlckZ1bigncmV2c0RpZmYnLCBmdW5jdGlvbiAocmVxLCBvcHRzLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIHZhciBpZHMgPSBPYmplY3Qua2V5cyhyZXEpO1xuXG4gIGlmICghaWRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7fSk7XG4gIH1cblxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgbWlzc2luZyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGFkZFRvTWlzc2luZyhpZCwgcmV2SWQpIHtcbiAgICBpZiAoIW1pc3NpbmcuaGFzKGlkKSkge1xuICAgICAgbWlzc2luZy5zZXQoaWQsIHttaXNzaW5nOiBbXX0pO1xuICAgIH1cbiAgICBtaXNzaW5nLmdldChpZCkubWlzc2luZy5wdXNoKHJldklkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEb2MoaWQsIHJldl90cmVlKSB7XG4gICAgLy8gSXMgdGhpcyBmYXN0IGVub3VnaD8gTWF5YmUgd2Ugc2hvdWxkIHN3aXRjaCB0byBhIHNldCBzaW11bGF0ZWQgYnkgYSBtYXBcbiAgICB2YXIgbWlzc2luZ0ZvcklkID0gcmVxW2lkXS5zbGljZSgwKTtcbiAgICB0cmF2ZXJzZVJldlRyZWUocmV2X3RyZWUsIGZ1bmN0aW9uIChpc0xlYWYsIHBvcywgcmV2SGFzaCwgY3R4LFxuICAgICAgb3B0cykge1xuICAgICAgICB2YXIgcmV2JCQxID0gcG9zICsgJy0nICsgcmV2SGFzaDtcbiAgICAgICAgdmFyIGlkeCA9IG1pc3NpbmdGb3JJZC5pbmRleE9mKHJldiQkMSk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbWlzc2luZ0ZvcklkLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKG9wdHMuc3RhdHVzICE9PSAnYXZhaWxhYmxlJykge1xuICAgICAgICAgIGFkZFRvTWlzc2luZyhpZCwgcmV2JCQxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBUcmF2ZXJzaW5nIHRoZSB0cmVlIGlzIHN5bmNocm9ub3VzLCBzbyBub3cgYG1pc3NpbmdGb3JJZGAgY29udGFpbnNcbiAgICAvLyByZXZpc2lvbnMgdGhhdCB3ZXJlIG5vdCBmb3VuZCBpbiB0aGUgdHJlZVxuICAgIG1pc3NpbmdGb3JJZC5mb3JFYWNoKGZ1bmN0aW9uIChyZXYkJDEpIHtcbiAgICAgIGFkZFRvTWlzc2luZyhpZCwgcmV2JCQxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgdGhpcy5fZ2V0UmV2aXNpb25UcmVlKGlkLCBmdW5jdGlvbiAoZXJyLCByZXZfdHJlZSkge1xuICAgICAgaWYgKGVyciAmJiBlcnIuc3RhdHVzID09PSA0MDQgJiYgZXJyLm1lc3NhZ2UgPT09ICdtaXNzaW5nJykge1xuICAgICAgICBtaXNzaW5nLnNldChpZCwge21pc3Npbmc6IHJlcVtpZF19KTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc0RvYyhpZCwgcmV2X3RyZWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKytjb3VudCA9PT0gaWRzLmxlbmd0aCkge1xuICAgICAgICAvLyBjb252ZXJ0IExhenlNYXAgdG8gb2JqZWN0XG4gICAgICAgIHZhciBtaXNzaW5nT2JqID0ge307XG4gICAgICAgIG1pc3NpbmcuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgIG1pc3NpbmdPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG1pc3NpbmdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB0aGlzKTtcbn0pO1xuXG4vLyBfYnVsa19nZXQgQVBJIGZvciBmYXN0ZXIgcmVwbGljYXRpb24sIGFzIGRlc2NyaWJlZCBpblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3VjaGRiLWNodHRwZC9wdWxsLzMzXG4vLyBBdCB0aGUgXCJhYnN0cmFjdFwiIGxldmVsLCBpdCB3aWxsIGp1c3QgcnVuIG11bHRpcGxlIGdldCgpcyBpblxuLy8gcGFyYWxsZWwsIGJlY2F1c2UgdGhpcyBpc24ndCBtdWNoIG9mIGEgcGVyZm9ybWFuY2UgY29zdFxuLy8gZm9yIGxvY2FsIGRhdGFiYXNlcyAoZXhjZXB0IHRoZSBjb3N0IG9mIG11bHRpcGxlIHRyYW5zYWN0aW9ucywgd2hpY2ggaXNcbi8vIHNtYWxsKS4gVGhlIGh0dHAgYWRhcHRlciBvdmVycmlkZXMgdGhpcyBpbiBvcmRlclxuLy8gdG8gZG8gYSBtb3JlIGVmZmljaWVudCBzaW5nbGUgSFRUUCByZXF1ZXN0LlxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5idWxrR2V0ID1cbiAgYWRhcHRlckZ1bignYnVsa0dldCcsIGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICBidWxrR2V0KHRoaXMsIG9wdHMsIGNhbGxiYWNrKTtcbn0pO1xuXG4vLyBjb21wYWN0IG9uZSBkb2N1bWVudCBhbmQgZmlyZSBjYWxsYmFja1xuLy8gYnkgY29tcGFjdGluZyB3ZSBtZWFuIHJlbW92aW5nIGFsbCByZXZpc2lvbnMgd2hpY2hcbi8vIGFyZSBmdXJ0aGVyIGZyb20gdGhlIGxlYWYgaW4gcmV2aXNpb24gdHJlZSB0aGFuIG1heF9oZWlnaHRcbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuY29tcGFjdERvY3VtZW50ID1cbiAgYWRhcHRlckZ1bignY29tcGFjdERvY3VtZW50JywgZnVuY3Rpb24gKGRvY0lkLCBtYXhIZWlnaHQsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fZ2V0UmV2aXNpb25UcmVlKGRvY0lkLCBmdW5jdGlvbiAoZXJyLCByZXZUcmVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIHZhciBoZWlnaHQgPSBjb21wdXRlSGVpZ2h0KHJldlRyZWUpO1xuICAgIHZhciBjYW5kaWRhdGVzID0gW107XG4gICAgdmFyIHJldnMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhoZWlnaHQpLmZvckVhY2goZnVuY3Rpb24gKHJldiQkMSkge1xuICAgICAgaWYgKGhlaWdodFtyZXYkJDFdID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaChyZXYkJDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJhdmVyc2VSZXZUcmVlKHJldlRyZWUsIGZ1bmN0aW9uIChpc0xlYWYsIHBvcywgcmV2SGFzaCwgY3R4LCBvcHRzKSB7XG4gICAgICB2YXIgcmV2JCQxID0gcG9zICsgJy0nICsgcmV2SGFzaDtcbiAgICAgIGlmIChvcHRzLnN0YXR1cyA9PT0gJ2F2YWlsYWJsZScgJiYgY2FuZGlkYXRlcy5pbmRleE9mKHJldiQkMSkgIT09IC0xKSB7XG4gICAgICAgIHJldnMucHVzaChyZXYkJDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYuX2RvQ29tcGFjdGlvbihkb2NJZCwgcmV2cywgY2FsbGJhY2spO1xuICB9KTtcbn0pO1xuXG4vLyBjb21wYWN0IHRoZSB3aG9sZSBkYXRhYmFzZSB1c2luZyBzaW5nbGUgZG9jdW1lbnRcbi8vIGNvbXBhY3Rpb25cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuY29tcGFjdCA9XG4gIGFkYXB0ZXJGdW4oJ2NvbXBhY3QnLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgc2VsZi5fY29tcGFjdGlvblF1ZXVlID0gc2VsZi5fY29tcGFjdGlvblF1ZXVlIHx8IFtdO1xuICBzZWxmLl9jb21wYWN0aW9uUXVldWUucHVzaCh7b3B0czogb3B0cywgY2FsbGJhY2s6IGNhbGxiYWNrfSk7XG4gIGlmIChzZWxmLl9jb21wYWN0aW9uUXVldWUubGVuZ3RoID09PSAxKSB7XG4gICAgZG9OZXh0Q29tcGFjdGlvbihzZWxmKTtcbiAgfVxufSk7XG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLl9jb21wYWN0ID0gZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNoYW5nZXNPcHRzID0ge1xuICAgIHJldHVybl9kb2NzOiBmYWxzZSxcbiAgICBsYXN0X3NlcTogb3B0cy5sYXN0X3NlcSB8fCAwXG4gIH07XG4gIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHJvdykge1xuICAgIHByb21pc2VzLnB1c2goc2VsZi5jb21wYWN0RG9jdW1lbnQocm93LmlkLCAwKSk7XG4gIH1cbiAgZnVuY3Rpb24gb25Db21wbGV0ZShyZXNwKSB7XG4gICAgdmFyIGxhc3RTZXEgPSByZXNwLmxhc3Rfc2VxO1xuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1cHNlcnQoc2VsZiwgJ19sb2NhbC9jb21wYWN0aW9uJywgZnVuY3Rpb24gZGVsdGFGdW5jKGRvYykge1xuICAgICAgICBpZiAoIWRvYy5sYXN0X3NlcSB8fCBkb2MubGFzdF9zZXEgPCBsYXN0U2VxKSB7XG4gICAgICAgICAgZG9jLmxhc3Rfc2VxID0gbGFzdFNlcTtcbiAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gc29tZWJvZHkgZWxzZSBnb3QgaGVyZSBmaXJzdCwgZG9uJ3QgdXBkYXRlXG4gICAgICB9KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHtvazogdHJ1ZX0pO1xuICAgIH0pLmNhdGNoKGNhbGxiYWNrKTtcbiAgfVxuICBzZWxmLmNoYW5nZXMoY2hhbmdlc09wdHMpXG4gICAgLm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSlcbiAgICAub24oJ2NvbXBsZXRlJywgb25Db21wbGV0ZSlcbiAgICAub24oJ2Vycm9yJywgY2FsbGJhY2spO1xufTtcblxuLyogQmVnaW4gYXBpIHdyYXBwZXJzLiBTcGVjaWZpYyBmdW5jdGlvbmFsaXR5IHRvIHN0b3JhZ2UgYmVsb25ncyBpbiB0aGVcbiAgIF9bbWV0aG9kXSAqL1xuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5nZXQgPSBhZGFwdGVyRnVuKCdnZXQnLCBmdW5jdGlvbiAoaWQsIG9wdHMsIGNiKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gY2IoY3JlYXRlRXJyb3IoSU5WQUxJRF9JRCkpO1xuICB9XG4gIGlmIChpc0xvY2FsSWQoaWQpICYmIHR5cGVvZiB0aGlzLl9nZXRMb2NhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLl9nZXRMb2NhbChpZCwgY2IpO1xuICB9XG4gIHZhciBsZWF2ZXMgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZmluaXNoT3BlblJldnMoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBjb3VudCA9IGxlYXZlcy5sZW5ndGg7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjb3VudCkge1xuICAgICAgcmV0dXJuIGNiKG51bGwsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gb3JkZXIgd2l0aCBvcGVuX3JldnMgaXMgdW5zcGVjaWZpZWRcbiAgICBsZWF2ZXMuZm9yRWFjaChmdW5jdGlvbiAobGVhZikge1xuICAgICAgc2VsZi5nZXQoaWQsIHtcbiAgICAgICAgcmV2OiBsZWFmLFxuICAgICAgICByZXZzOiBvcHRzLnJldnMsXG4gICAgICAgIGxhdGVzdDogb3B0cy5sYXRlc3QsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBvcHRzLmF0dGFjaG1lbnRzLFxuICAgICAgICBiaW5hcnk6IG9wdHMuYmluYXJ5XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyLCBkb2MpIHtcbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAvLyB1c2luZyBsYXRlc3Q9dHJ1ZSBjYW4gcHJvZHVjZSBkdXBsaWNhdGVzXG4gICAgICAgICAgdmFyIGV4aXN0aW5nO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtpXS5vayAmJiByZXN1bHRbaV0ub2suX3JldiA9PT0gZG9jLl9yZXYpIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe29rOiBkb2N9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe21pc3Npbmc6IGxlYWZ9KTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudC0tO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgY2IobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAob3B0cy5vcGVuX3JldnMpIHtcbiAgICBpZiAob3B0cy5vcGVuX3JldnMgPT09IFwiYWxsXCIpIHtcbiAgICAgIHRoaXMuX2dldFJldmlzaW9uVHJlZShpZCwgZnVuY3Rpb24gKGVyciwgcmV2X3RyZWUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBsZWF2ZXMgPSBjb2xsZWN0TGVhdmVzKHJldl90cmVlKS5tYXAoZnVuY3Rpb24gKGxlYWYpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZi5yZXY7XG4gICAgICAgIH0pO1xuICAgICAgICBmaW5pc2hPcGVuUmV2cygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdHMub3Blbl9yZXZzKSkge1xuICAgICAgICBsZWF2ZXMgPSBvcHRzLm9wZW5fcmV2cztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZWF2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgbCA9IGxlYXZlc1tpXTtcbiAgICAgICAgICAvLyBsb29rcyBsaWtlIGl0J3MgdGhlIG9ubHkgdGhpbmcgY291Y2hkYiBjaGVja3NcbiAgICAgICAgICBpZiAoISh0eXBlb2YgKGwpID09PSBcInN0cmluZ1wiICYmIC9eXFxkKy0vLnRlc3QobCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IoY3JlYXRlRXJyb3IoSU5WQUxJRF9SRVYpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoT3BlblJldnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYihjcmVhdGVFcnJvcihVTktOT1dOX0VSUk9SLCAnZnVuY3Rpb25fY2xhdXNlJykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47IC8vIG9wZW5fcmV2cyBkb2VzIG5vdCBsaWtlIG90aGVyIG9wdGlvbnNcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9nZXQoaWQsIG9wdHMsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGVyci5kb2NJZCA9IGlkO1xuICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgfVxuXG4gICAgdmFyIGRvYyA9IHJlc3VsdC5kb2M7XG4gICAgdmFyIG1ldGFkYXRhID0gcmVzdWx0Lm1ldGFkYXRhO1xuICAgIHZhciBjdHggPSByZXN1bHQuY3R4O1xuXG4gICAgaWYgKG9wdHMuY29uZmxpY3RzKSB7XG4gICAgICB2YXIgY29uZmxpY3RzID0gY29sbGVjdENvbmZsaWN0cyhtZXRhZGF0YSk7XG4gICAgICBpZiAoY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgICBkb2MuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNEZWxldGVkKG1ldGFkYXRhLCBkb2MuX3JldikpIHtcbiAgICAgIGRvYy5fZGVsZXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucmV2cyB8fCBvcHRzLnJldnNfaW5mbykge1xuICAgICAgdmFyIHNwbGl0dGVkUmV2ID0gZG9jLl9yZXYuc3BsaXQoJy0nKTtcbiAgICAgIHZhciByZXZObyAgICAgICA9IHBhcnNlSW50KHNwbGl0dGVkUmV2WzBdLCAxMCk7XG4gICAgICB2YXIgcmV2SGFzaCAgICAgPSBzcGxpdHRlZFJldlsxXTtcblxuICAgICAgdmFyIHBhdGhzID0gcm9vdFRvTGVhZihtZXRhZGF0YS5yZXZfdHJlZSk7XG4gICAgICB2YXIgcGF0aCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aHNbaV07XG4gICAgICAgIHZhciBoYXNoSW5kZXggPSBjdXJyZW50UGF0aC5pZHMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmlkOyB9KVxuICAgICAgICAgIC5pbmRleE9mKHJldkhhc2gpO1xuICAgICAgICB2YXIgaGFzaEZvdW5kQXRSZXZQb3MgPSBoYXNoSW5kZXggPT09IChyZXZObyAtIDEpO1xuXG4gICAgICAgIGlmIChoYXNoRm91bmRBdFJldlBvcyB8fCAoIXBhdGggJiYgaGFzaEluZGV4ICE9PSAtMSkpIHtcbiAgICAgICAgICBwYXRoID0gY3VycmVudFBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgZXJyID0gbmV3IEVycm9yKCdpbnZhbGlkIHJldiB0cmVlJyk7XG4gICAgICAgIGVyci5kb2NJZCA9IGlkO1xuICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZGV4T2ZSZXYgPSBwYXRoLmlkcy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguaWQ7IH0pXG4gICAgICAgIC5pbmRleE9mKGRvYy5fcmV2LnNwbGl0KCctJylbMV0pICsgMTtcbiAgICAgIHZhciBob3dNYW55ID0gcGF0aC5pZHMubGVuZ3RoIC0gaW5kZXhPZlJldjtcbiAgICAgIHBhdGguaWRzLnNwbGljZShpbmRleE9mUmV2LCBob3dNYW55KTtcbiAgICAgIHBhdGguaWRzLnJldmVyc2UoKTtcblxuICAgICAgaWYgKG9wdHMucmV2cykge1xuICAgICAgICBkb2MuX3JldmlzaW9ucyA9IHtcbiAgICAgICAgICBzdGFydDogKHBhdGgucG9zICsgcGF0aC5pZHMubGVuZ3RoKSAtIDEsXG4gICAgICAgICAgaWRzOiBwYXRoLmlkcy5tYXAoZnVuY3Rpb24gKHJldiQkMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJldiQkMS5pZDtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKG9wdHMucmV2c19pbmZvKSB7XG4gICAgICAgIHZhciBwb3MgPSAgcGF0aC5wb3MgKyBwYXRoLmlkcy5sZW5ndGg7XG4gICAgICAgIGRvYy5fcmV2c19pbmZvID0gcGF0aC5pZHMubWFwKGZ1bmN0aW9uIChyZXYkJDEpIHtcbiAgICAgICAgICBwb3MtLTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmV2OiBwb3MgKyAnLScgKyByZXYkJDEuaWQsXG4gICAgICAgICAgICBzdGF0dXM6IHJldiQkMS5vcHRzLnN0YXR1c1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzICYmIGRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgIHZhciBhdHRhY2htZW50cyA9IGRvYy5fYXR0YWNobWVudHM7XG4gICAgICB2YXIgY291bnQgPSBPYmplY3Qua2V5cyhhdHRhY2htZW50cykubGVuZ3RoO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjYihudWxsLCBkb2MpO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoYXR0YWNobWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLl9nZXRBdHRhY2htZW50KGRvYy5faWQsIGtleSwgYXR0YWNobWVudHNba2V5XSwge1xuICAgICAgICAgIC8vIFByZXZpb3VzbHkgdGhlIHJldmlzaW9uIGhhbmRsaW5nIHdhcyBkb25lIGluIGFkYXB0ZXIuanNcbiAgICAgICAgICAvLyBnZXRBdHRhY2htZW50LCBob3dldmVyIHNpbmNlIGlkYi1uZXh0IGRvZXNudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgLy8gcGFzcyB0aGUgcmV2IHRocm91Z2hcbiAgICAgICAgICByZXY6IGRvYy5fcmV2LFxuICAgICAgICAgIGJpbmFyeTogb3B0cy5iaW5hcnksXG4gICAgICAgICAgY3R4OiBjdHhcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgIHZhciBhdHQgPSBkb2MuX2F0dGFjaG1lbnRzW2tleV07XG4gICAgICAgICAgYXR0LmRhdGEgPSBkYXRhO1xuICAgICAgICAgIGRlbGV0ZSBhdHQuc3R1YjtcbiAgICAgICAgICBkZWxldGUgYXR0Lmxlbmd0aDtcbiAgICAgICAgICBpZiAoIS0tY291bnQpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIGRvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jLl9hdHRhY2htZW50cykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZG9jLl9hdHRhY2htZW50cykge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgaWYgKGRvYy5fYXR0YWNobWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZG9jLl9hdHRhY2htZW50c1trZXldLnN0dWIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IobnVsbCwgZG9jKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFRPRE86IEkgZG9udCBsaWtlIHRoaXMsIGl0IGZvcmNlcyBhbiBleHRyYSByZWFkIGZvciBldmVyeVxuLy8gYXR0YWNobWVudCByZWFkIGFuZCBlbmZvcmNlcyBhIGNvbmZ1c2luZyBhcGkgYmV0d2VlblxuLy8gYWRhcHRlci5qcyBhbmQgdGhlIGFkYXB0ZXIgaW1wbGVtZW50YXRpb25cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuZ2V0QXR0YWNobWVudCA9XG4gIGFkYXB0ZXJGdW4oJ2dldEF0dGFjaG1lbnQnLCBmdW5jdGlvbiAoZG9jSWQsIGF0dGFjaG1lbnRJZCwgb3B0cywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAob3B0cyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB0aGlzLl9nZXQoZG9jSWQsIG9wdHMsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIH1cbiAgICBpZiAocmVzLmRvYy5fYXR0YWNobWVudHMgJiYgcmVzLmRvYy5fYXR0YWNobWVudHNbYXR0YWNobWVudElkXSkge1xuICAgICAgb3B0cy5jdHggPSByZXMuY3R4O1xuICAgICAgb3B0cy5iaW5hcnkgPSB0cnVlO1xuICAgICAgc2VsZi5fZ2V0QXR0YWNobWVudChkb2NJZCwgYXR0YWNobWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZG9jLl9hdHRhY2htZW50c1thdHRhY2htZW50SWRdLCBvcHRzLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0RPQykpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5hbGxEb2NzID1cbiAgYWRhcHRlckZ1bignYWxsRG9jcycsIGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIG9wdHMuc2tpcCA9IHR5cGVvZiBvcHRzLnNraXAgIT09ICd1bmRlZmluZWQnID8gb3B0cy5za2lwIDogMDtcbiAgaWYgKG9wdHMuc3RhcnRfa2V5KSB7XG4gICAgb3B0cy5zdGFydGtleSA9IG9wdHMuc3RhcnRfa2V5O1xuICB9XG4gIGlmIChvcHRzLmVuZF9rZXkpIHtcbiAgICBvcHRzLmVuZGtleSA9IG9wdHMuZW5kX2tleTtcbiAgfVxuICBpZiAoJ2tleXMnIGluIG9wdHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0cy5rZXlzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMua2V5cyBtdXN0IGJlIGFuIGFycmF5JykpO1xuICAgIH1cbiAgICB2YXIgaW5jb21wYXRpYmxlT3B0ID1cbiAgICAgIFsnc3RhcnRrZXknLCAnZW5ka2V5JywgJ2tleSddLmZpbHRlcihmdW5jdGlvbiAoaW5jb21wYXRpYmxlT3B0KSB7XG4gICAgICByZXR1cm4gaW5jb21wYXRpYmxlT3B0IGluIG9wdHM7XG4gICAgfSlbMF07XG4gICAgaWYgKGluY29tcGF0aWJsZU9wdCkge1xuICAgICAgY2FsbGJhY2soY3JlYXRlRXJyb3IoUVVFUllfUEFSU0VfRVJST1IsXG4gICAgICAgICdRdWVyeSBwYXJhbWV0ZXIgYCcgKyBpbmNvbXBhdGlibGVPcHQgK1xuICAgICAgICAnYCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIG11bHRpLWdldCdcbiAgICAgICkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzUmVtb3RlKHRoaXMpKSB7XG4gICAgICBhbGxEb2NzS2V5c1BhcnNlKG9wdHMpO1xuICAgICAgaWYgKG9wdHMua2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbERvY3Moe2xpbWl0OiAwfSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLl9hbGxEb2NzKG9wdHMsIGNhbGxiYWNrKTtcbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmNoYW5nZXMgPSBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIC8vIEJ5IGRlZmF1bHQgc2V0IHJldHVybl9kb2NzIHRvIGZhbHNlIGlmIHRoZSBjYWxsZXIgaGFzIG9wdHMubGl2ZSA9IHRydWUsXG4gIC8vIHRoaXMgd2lsbCBwcmV2ZW50IHVzIGZyb20gY29sbGVjdGluZyB0aGUgc2V0IG9mIGNoYW5nZXMgaW5kZWZpbml0ZWx5XG4gIC8vIHJlc3VsdGluZyBpbiBncm93aW5nIG1lbW9yeVxuICBvcHRzLnJldHVybl9kb2NzID0gKCdyZXR1cm5fZG9jcycgaW4gb3B0cykgPyBvcHRzLnJldHVybl9kb2NzIDogIW9wdHMubGl2ZTtcblxuICByZXR1cm4gbmV3IENoYW5nZXMkMSh0aGlzLCBvcHRzLCBjYWxsYmFjayk7XG59O1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmNsb3NlID0gYWRhcHRlckZ1bignY2xvc2UnLCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdjbG9zZWQnKTtcbiAgcmV0dXJuIHRoaXMuX2Nsb3NlKGNhbGxiYWNrKTtcbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmluZm8gPSBhZGFwdGVyRnVuKCdpbmZvJywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5faW5mbyhmdW5jdGlvbiAoZXJyLCBpbmZvKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIC8vIGFzc3VtZSB3ZSBrbm93IGJldHRlciB0aGFuIHRoZSBhZGFwdGVyLCB1bmxlc3MgaXQgaW5mb3JtcyB1c1xuICAgIGluZm8uZGJfbmFtZSA9IGluZm8uZGJfbmFtZSB8fCBzZWxmLm5hbWU7XG4gICAgaW5mby5hdXRvX2NvbXBhY3Rpb24gPSAhIShzZWxmLmF1dG9fY29tcGFjdGlvbiAmJiAhaXNSZW1vdGUoc2VsZikpO1xuICAgIGluZm8uYWRhcHRlciA9IHNlbGYuYWRhcHRlcjtcbiAgICBjYWxsYmFjayhudWxsLCBpbmZvKTtcbiAgfSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5pZCA9IGFkYXB0ZXJGdW4oJ2lkJywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLl9pZChjYWxsYmFjayk7XG59KTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0eXBlb2YgdGhpcy5fdHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyB0aGlzLl90eXBlKCkgOiB0aGlzLmFkYXB0ZXI7XG59O1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmJ1bGtEb2NzID1cbiAgYWRhcHRlckZ1bignYnVsa0RvY3MnLCBmdW5jdGlvbiAocmVxLCBvcHRzLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVxKSkge1xuICAgIHJlcSA9IHtcbiAgICAgIGRvY3M6IHJlcVxuICAgIH07XG4gIH1cblxuICBpZiAoIXJlcSB8fCAhcmVxLmRvY3MgfHwgIUFycmF5LmlzQXJyYXkocmVxLmRvY3MpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfQlVMS19ET0NTKSk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcS5kb2NzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHR5cGVvZiByZXEuZG9jc1tpXSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShyZXEuZG9jc1tpXSkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihOT1RfQU5fT0JKRUNUKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGF0dGFjaG1lbnRFcnJvcjtcbiAgcmVxLmRvY3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgaWYgKGRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgYXR0YWNobWVudEVycm9yID0gYXR0YWNobWVudEVycm9yIHx8IGF0dGFjaG1lbnROYW1lRXJyb3IobmFtZSk7XG4gICAgICAgIGlmICghZG9jLl9hdHRhY2htZW50c1tuYW1lXS5jb250ZW50X3R5cGUpIHtcbiAgICAgICAgICBndWFyZGVkQ29uc29sZSgnd2FybicsICdBdHRhY2htZW50JywgbmFtZSwgJ29uIGRvY3VtZW50JywgZG9jLl9pZCwgJ2lzIG1pc3NpbmcgY29udGVudF90eXBlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGF0dGFjaG1lbnRFcnJvcikge1xuICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihCQURfUkVRVUVTVCwgYXR0YWNobWVudEVycm9yKSk7XG4gIH1cblxuICBpZiAoISgnbmV3X2VkaXRzJyBpbiBvcHRzKSkge1xuICAgIGlmICgnbmV3X2VkaXRzJyBpbiByZXEpIHtcbiAgICAgIG9wdHMubmV3X2VkaXRzID0gcmVxLm5ld19lZGl0cztcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5uZXdfZWRpdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhZGFwdGVyID0gdGhpcztcbiAgaWYgKCFvcHRzLm5ld19lZGl0cyAmJiAhaXNSZW1vdGUoYWRhcHRlcikpIHtcbiAgICAvLyBlbnN1cmUgcmV2aXNpb25zIG9mIHRoZSBzYW1lIGRvYyBhcmUgc29ydGVkLCBzbyB0aGF0XG4gICAgLy8gdGhlIGxvY2FsIGFkYXB0ZXIgcHJvY2Vzc2VzIHRoZW0gY29ycmVjdGx5ICgjMjkzNSlcbiAgICByZXEuZG9jcy5zb3J0KGNvbXBhcmVCeUlkVGhlblJldik7XG4gIH1cblxuICBjbGVhbkRvY3MocmVxLmRvY3MpO1xuXG4gIC8vIGluIHRoZSBjYXNlIG9mIGNvbmZsaWN0cywgd2Ugd2FudCB0byByZXR1cm4gdGhlIF9pZHMgdG8gdGhlIHVzZXJcbiAgLy8gaG93ZXZlciwgdGhlIHVuZGVybHlpbmcgYWRhcHRlciBtYXkgZGVzdHJveSB0aGUgZG9jcyBhcnJheSwgc29cbiAgLy8gY3JlYXRlIGEgY29weSBoZXJlXG4gIHZhciBpZHMgPSByZXEuZG9jcy5tYXAoZnVuY3Rpb24gKGRvYykge1xuICAgIHJldHVybiBkb2MuX2lkO1xuICB9KTtcblxuICByZXR1cm4gdGhpcy5fYnVsa0RvY3MocmVxLCBvcHRzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gICAgaWYgKCFvcHRzLm5ld19lZGl0cykge1xuICAgICAgLy8gdGhpcyBpcyB3aGF0IGNvdWNoIGRvZXMgd2hlbiBuZXdfZWRpdHMgaXMgZmFsc2VcbiAgICAgIHJlcyA9IHJlcy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHguZXJyb3I7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gYWRkIGlkcyBmb3IgZXJyb3IvY29uZmxpY3QgcmVzcG9uc2VzIChub3QgcmVxdWlyZWQgZm9yIENvdWNoREIpXG4gICAgaWYgKCFpc1JlbW90ZShhZGFwdGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJlc1tpXS5pZCA9IHJlc1tpXS5pZCB8fCBpZHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgfSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5yZWdpc3RlckRlcGVuZGVudERhdGFiYXNlID1cbiAgYWRhcHRlckZ1bigncmVnaXN0ZXJEZXBlbmRlbnREYXRhYmFzZScsIGZ1bmN0aW9uIChkZXBlbmRlbnREYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaykge1xuICB2YXIgZGVwREIgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihkZXBlbmRlbnREYiwgdGhpcy5fX29wdHMpO1xuXG4gIGZ1bmN0aW9uIGRpZmZGdW4oZG9jKSB7XG4gICAgZG9jLmRlcGVuZGVudERicyA9IGRvYy5kZXBlbmRlbnREYnMgfHwge307XG4gICAgaWYgKGRvYy5kZXBlbmRlbnREYnNbZGVwZW5kZW50RGJdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIHVwZGF0ZSByZXF1aXJlZFxuICAgIH1cbiAgICBkb2MuZGVwZW5kZW50RGJzW2RlcGVuZGVudERiXSA9IHRydWU7XG4gICAgcmV0dXJuIGRvYztcbiAgfVxuICB1cHNlcnQodGhpcywgJ19sb2NhbC9fcG91Y2hfZGVwZW5kZW50RGJzJywgZGlmZkZ1bilcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB7ZGI6IGRlcERCfSk7XG4gICAgfSkuY2F0Y2goY2FsbGJhY2spO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuZGVzdHJveSA9XG4gIGFkYXB0ZXJGdW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdXNlUHJlZml4ID0gJ3VzZV9wcmVmaXgnIGluIHNlbGYgPyBzZWxmLnVzZV9wcmVmaXggOiB0cnVlO1xuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lEYigpIHtcbiAgICAvLyBjYWxsIGRlc3Ryb3kgbWV0aG9kIG9mIHRoZSBwYXJ0aWN1bGFyIGFkYXB0b3JcbiAgICBzZWxmLl9kZXN0cm95KG9wdHMsIGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG4gICAgICBzZWxmLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgc2VsZi5lbWl0KCdkZXN0cm95ZWQnKTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3AgfHwgeyAnb2snOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzUmVtb3RlKHNlbGYpKSB7XG4gICAgLy8gbm8gbmVlZCB0byBjaGVjayBmb3IgZGVwZW5kZW50IERCcyBpZiBpdCdzIGEgcmVtb3RlIERCXG4gICAgcmV0dXJuIGRlc3Ryb3lEYigpO1xuICB9XG5cbiAgc2VsZi5nZXQoJ19sb2NhbC9fcG91Y2hfZGVwZW5kZW50RGJzJywgZnVuY3Rpb24gKGVyciwgbG9jYWxEb2MpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlcnIuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9IGVsc2UgeyAvLyBubyBkZXBlbmRlbmNpZXNcbiAgICAgICAgcmV0dXJuIGRlc3Ryb3lEYigpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVwZW5kZW50RGJzID0gbG9jYWxEb2MuZGVwZW5kZW50RGJzO1xuICAgIHZhciBQb3VjaERCID0gc2VsZi5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgZGVsZXRlZE1hcCA9IE9iamVjdC5rZXlzKGRlcGVuZGVudERicykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAvLyB1c2VfcHJlZml4IGlzIG9ubHkgZmFsc2UgaW4gdGhlIGJyb3dzZXJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICB2YXIgdHJ1ZU5hbWUgPSB1c2VQcmVmaXggP1xuICAgICAgICBuYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnXicgKyBQb3VjaERCLnByZWZpeCksICcnKSA6IG5hbWU7XG4gICAgICByZXR1cm4gbmV3IFBvdWNoREIodHJ1ZU5hbWUsIHNlbGYuX19vcHRzKS5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgUHJvbWlzZS5hbGwoZGVsZXRlZE1hcCkudGhlbihkZXN0cm95RGIsIGNhbGxiYWNrKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gVGFza1F1ZXVlKCkge1xuICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcbiAgdGhpcy5mYWlsZWQgPSBmYWxzZTtcbiAgdGhpcy5xdWV1ZSA9IFtdO1xufVxuXG5UYXNrUXVldWUucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW47XG4gIGlmICh0aGlzLmZhaWxlZCkge1xuICAgIHdoaWxlICgoZnVuID0gdGhpcy5xdWV1ZS5zaGlmdCgpKSkge1xuICAgICAgZnVuKHRoaXMuZmFpbGVkKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKChmdW4gPSB0aGlzLnF1ZXVlLnNoaWZ0KCkpKSB7XG4gICAgICBmdW4oKTtcbiAgICB9XG4gIH1cbn07XG5cblRhc2tRdWV1ZS5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgdGhpcy5mYWlsZWQgPSBlcnI7XG4gIHRoaXMuZXhlY3V0ZSgpO1xufTtcblxuVGFza1F1ZXVlLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uIChkYikge1xuICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICB0aGlzLmRiID0gZGI7XG4gIHRoaXMuZXhlY3V0ZSgpO1xufTtcblxuVGFza1F1ZXVlLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gKGZ1bikge1xuICB0aGlzLnF1ZXVlLnB1c2goZnVuKTtcbiAgaWYgKHRoaXMuZmFpbGVkKSB7XG4gICAgdGhpcy5leGVjdXRlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlQWRhcHRlcihuYW1lLCBvcHRzKSB7XG4gIHZhciBtYXRjaCA9IG5hbWUubWF0Y2goLyhbYS16LV0qKTpcXC9cXC8oLiopLyk7XG4gIGlmIChtYXRjaCkge1xuICAgIC8vIHRoZSBodHRwIGFkYXB0ZXIgZXhwZWN0cyB0aGUgZnVsbHkgcXVhbGlmaWVkIG5hbWVcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogL2h0dHBzPy8udGVzdChtYXRjaFsxXSkgPyBtYXRjaFsxXSArICc6Ly8nICsgbWF0Y2hbMl0gOiBtYXRjaFsyXSxcbiAgICAgIGFkYXB0ZXI6IG1hdGNoWzFdXG4gICAgfTtcbiAgfVxuXG4gIHZhciBhZGFwdGVycyA9IFBvdWNoREIuYWRhcHRlcnM7XG4gIHZhciBwcmVmZXJyZWRBZGFwdGVycyA9IFBvdWNoREIucHJlZmVycmVkQWRhcHRlcnM7XG4gIHZhciBwcmVmaXggPSBQb3VjaERCLnByZWZpeDtcbiAgdmFyIGFkYXB0ZXJOYW1lID0gb3B0cy5hZGFwdGVyO1xuXG4gIGlmICghYWRhcHRlck5hbWUpIHsgLy8gYXV0b21hdGljYWxseSBkZXRlcm1pbmUgYWRhcHRlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZmVycmVkQWRhcHRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGFkYXB0ZXJOYW1lID0gcHJlZmVycmVkQWRhcHRlcnNbaV07XG4gICAgICAvLyBjaGVjayBmb3IgYnJvd3NlcnMgdGhhdCBoYXZlIGJlZW4gdXBncmFkZWQgZnJvbSB3ZWJzcWwtb25seSB0byB3ZWJzcWwraWRiXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChhZGFwdGVyTmFtZSA9PT0gJ2lkYicgJiYgJ3dlYnNxbCcgaW4gYWRhcHRlcnMgJiZcbiAgICAgICAgICBoYXNMb2NhbFN0b3JhZ2UoKSAmJiBsb2NhbFN0b3JhZ2VbJ19wb3VjaF9fd2Vic3FsZGJfJyArIHByZWZpeCArIG5hbWVdKSB7XG4gICAgICAgIC8vIGxvZyBpdCwgYmVjYXVzZSB0aGlzIGNhbiBiZSBjb25mdXNpbmcgZHVyaW5nIGRldmVsb3BtZW50XG4gICAgICAgIGd1YXJkZWRDb25zb2xlKCdsb2cnLCAnUG91Y2hEQiBpcyBkb3duZ3JhZGluZyBcIicgKyBuYW1lICsgJ1wiIHRvIFdlYlNRTCB0bycgK1xuICAgICAgICAgICcgYXZvaWQgZGF0YSBsb3NzLCBiZWNhdXNlIGl0IHdhcyBhbHJlYWR5IG9wZW5lZCB3aXRoIFdlYlNRTC4nKTtcbiAgICAgICAgY29udGludWU7IC8vIGtlZXAgdXNpbmcgd2Vic3FsIHRvIGF2b2lkIHVzZXIgZGF0YSBsb3NzXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgYWRhcHRlciA9IGFkYXB0ZXJzW2FkYXB0ZXJOYW1lXTtcblxuICAvLyBpZiBhZGFwdGVyIGlzIGludmFsaWQsIHRoZW4gYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gbGF0ZXJcbiAgdmFyIHVzZVByZWZpeCA9IChhZGFwdGVyICYmICd1c2VfcHJlZml4JyBpbiBhZGFwdGVyKSA/XG4gICAgYWRhcHRlci51c2VfcHJlZml4IDogdHJ1ZTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHVzZVByZWZpeCA/IChwcmVmaXggKyBuYW1lKSA6IG5hbWUsXG4gICAgYWRhcHRlcjogYWRhcHRlck5hbWVcbiAgfTtcbn1cblxuLy8gT0ssIHNvIGhlcmUncyB0aGUgZGVhbC4gQ29uc2lkZXIgdGhpcyBjb2RlOlxuLy8gICAgIHZhciBkYjEgPSBuZXcgUG91Y2hEQignZm9vJyk7XG4vLyAgICAgdmFyIGRiMiA9IG5ldyBQb3VjaERCKCdmb28nKTtcbi8vICAgICBkYjEuZGVzdHJveSgpO1xuLy8gXiB0aGVzZSB0d28gYm90aCBuZWVkIHRvIGVtaXQgJ2Rlc3Ryb3llZCcgZXZlbnRzLFxuLy8gYXMgd2VsbCBhcyB0aGUgUG91Y2hEQiBjb25zdHJ1Y3RvciBpdHNlbGYuXG4vLyBTbyB3ZSBoYXZlIG9uZSBkYiBvYmplY3QgKHdoaWNoZXZlciBvbmUgZ290IGRlc3Ryb3koKSBjYWxsZWQgb24gaXQpXG4vLyByZXNwb25zaWJsZSBmb3IgZW1pdHRpbmcgdGhlIGluaXRpYWwgZXZlbnQsIHdoaWNoIHRoZW4gZ2V0cyBlbWl0dGVkXG4vLyBieSB0aGUgY29uc3RydWN0b3IsIHdoaWNoIHRoZW4gYnJvYWRjYXN0cyBpdCB0byBhbnkgb3RoZXIgZGJzXG4vLyB0aGF0IG1heSBoYXZlIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG5mdW5jdGlvbiBwcmVwYXJlRm9yRGVzdHJ1Y3Rpb24oc2VsZikge1xuXG4gIGZ1bmN0aW9uIG9uRGVzdHJveWVkKGZyb21fY29uc3RydWN0b3IpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgaWYgKCFmcm9tX2NvbnN0cnVjdG9yKSB7XG4gICAgICBzZWxmLmNvbnN0cnVjdG9yLmVtaXQoJ2Rlc3Ryb3llZCcsIHNlbGYubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DbG9zZWQoKSB7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignZGVzdHJveWVkJywgb25EZXN0cm95ZWQpO1xuICAgIHNlbGYuY29uc3RydWN0b3IuZW1pdCgndW5yZWYnLCBzZWxmKTtcbiAgfVxuXG4gIHNlbGYub25jZSgnZGVzdHJveWVkJywgb25EZXN0cm95ZWQpO1xuICBzZWxmLm9uY2UoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgc2VsZi5jb25zdHJ1Y3Rvci5lbWl0KCdyZWYnLCBzZWxmKTtcbn1cblxuaW5oZXJpdHMoUG91Y2hEQiwgQWJzdHJhY3RQb3VjaERCKTtcbmZ1bmN0aW9uIFBvdWNoREIobmFtZSwgb3B0cykge1xuICAvLyBJbiBOb2RlIG91ciB0ZXN0IHN1aXRlIG9ubHkgdGVzdHMgdGhpcyBmb3IgUG91Y2hBbHQgdW5mb3J0dW5hdGVseVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFBvdWNoREIpKSB7XG4gICAgcmV0dXJuIG5ldyBQb3VjaERCKG5hbWUsIG9wdHMpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBpZiAobmFtZSAmJiB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0gbmFtZTtcbiAgICBuYW1lID0gb3B0cy5uYW1lO1xuICAgIGRlbGV0ZSBvcHRzLm5hbWU7XG4gIH1cblxuICBpZiAob3B0cy5kZXRlcm1pbmlzdGljX3JldnMgPT09IHVuZGVmaW5lZCkge1xuICAgIG9wdHMuZGV0ZXJtaW5pc3RpY19yZXZzID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuX19vcHRzID0gb3B0cyA9IGNsb25lKG9wdHMpO1xuXG4gIHNlbGYuYXV0b19jb21wYWN0aW9uID0gb3B0cy5hdXRvX2NvbXBhY3Rpb247XG4gIHNlbGYucHJlZml4ID0gUG91Y2hEQi5wcmVmaXg7XG5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZy9pbnZhbGlkIERCIG5hbWUnKTtcbiAgfVxuXG4gIHZhciBwcmVmaXhlZE5hbWUgPSAob3B0cy5wcmVmaXggfHwgJycpICsgbmFtZTtcbiAgdmFyIGJhY2tlbmQgPSBwYXJzZUFkYXB0ZXIocHJlZml4ZWROYW1lLCBvcHRzKTtcblxuICBvcHRzLm5hbWUgPSBiYWNrZW5kLm5hbWU7XG4gIG9wdHMuYWRhcHRlciA9IG9wdHMuYWRhcHRlciB8fCBiYWNrZW5kLmFkYXB0ZXI7XG5cbiAgc2VsZi5uYW1lID0gbmFtZTtcbiAgc2VsZi5fYWRhcHRlciA9IG9wdHMuYWRhcHRlcjtcbiAgUG91Y2hEQi5lbWl0KCdkZWJ1ZycsIFsnYWRhcHRlcicsICdQaWNrZWQgYWRhcHRlcjogJywgb3B0cy5hZGFwdGVyXSk7XG5cbiAgaWYgKCFQb3VjaERCLmFkYXB0ZXJzW29wdHMuYWRhcHRlcl0gfHxcbiAgICAgICFQb3VjaERCLmFkYXB0ZXJzW29wdHMuYWRhcHRlcl0udmFsaWQoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBZGFwdGVyOiAnICsgb3B0cy5hZGFwdGVyKTtcbiAgfVxuXG4gIEFic3RyYWN0UG91Y2hEQi5jYWxsKHNlbGYpO1xuICBzZWxmLnRhc2txdWV1ZSA9IG5ldyBUYXNrUXVldWUoKTtcblxuICBzZWxmLmFkYXB0ZXIgPSBvcHRzLmFkYXB0ZXI7XG5cbiAgUG91Y2hEQi5hZGFwdGVyc1tvcHRzLmFkYXB0ZXJdLmNhbGwoc2VsZiwgb3B0cywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLnRhc2txdWV1ZS5mYWlsKGVycik7XG4gICAgfVxuICAgIHByZXBhcmVGb3JEZXN0cnVjdGlvbihzZWxmKTtcblxuICAgIHNlbGYuZW1pdCgnY3JlYXRlZCcsIHNlbGYpO1xuICAgIFBvdWNoREIuZW1pdCgnY3JlYXRlZCcsIHNlbGYubmFtZSk7XG4gICAgc2VsZi50YXNrcXVldWUucmVhZHkoc2VsZik7XG4gIH0pO1xuXG59XG5cbi8vIEFib3J0Q29udHJvbGxlciB3YXMgaW50cm9kdWNlZCBxdWl0ZSBhIHdoaWxlIGFmdGVyIGZldGNoIGFuZFxuLy8gaXNudCByZXF1aXJlZCBmb3IgUG91Y2hEQiB0byBmdW5jdGlvbiBzbyBwb2x5ZmlsbCBpZiBuZWVkZWRcbnZhciBhID0gKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09ICd1bmRlZmluZWQnKVxuICAgID8gQWJvcnRDb250cm9sbGVyXG4gICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiB7YWJvcnQ6IGZ1bmN0aW9uICgpIHt9fTsgfTtcblxudmFyIGYkMSA9IGZldGNoO1xudmFyIGggPSBIZWFkZXJzO1xuXG5Qb3VjaERCLmFkYXB0ZXJzID0ge307XG5Qb3VjaERCLnByZWZlcnJlZEFkYXB0ZXJzID0gW107XG5cblBvdWNoREIucHJlZml4ID0gJ19wb3VjaF8nO1xuXG52YXIgZXZlbnRFbWl0dGVyID0gbmV3IEVFKCk7XG5cbmZ1bmN0aW9uIHNldFVwRXZlbnRFbWl0dGVyKFBvdWNoKSB7XG4gIE9iamVjdC5rZXlzKEVFLnByb3RvdHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBFRS5wcm90b3R5cGVba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUG91Y2hba2V5XSA9IGV2ZW50RW1pdHRlcltrZXldLmJpbmQoZXZlbnRFbWl0dGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHRoZXNlIGFyZSBjcmVhdGVkIGluIGNvbnN0cnVjdG9yLmpzLCBhbmQgYWxsb3cgdXMgdG8gbm90aWZ5IGVhY2ggREIgd2l0aFxuICAvLyB0aGUgc2FtZSBuYW1lIHRoYXQgaXQgd2FzIGRlc3Ryb3llZCwgdmlhIHRoZSBjb25zdHJ1Y3RvciBvYmplY3RcbiAgdmFyIGRlc3RydWN0TGlzdGVuZXJzID0gUG91Y2guX2Rlc3RydWN0aW9uTGlzdGVuZXJzID0gbmV3IEV4cG9ydGVkTWFwKCk7XG5cbiAgUG91Y2gub24oJ3JlZicsIGZ1bmN0aW9uIG9uQ29uc3RydWN0b3JSZWYoZGIpIHtcbiAgICBpZiAoIWRlc3RydWN0TGlzdGVuZXJzLmhhcyhkYi5uYW1lKSkge1xuICAgICAgZGVzdHJ1Y3RMaXN0ZW5lcnMuc2V0KGRiLm5hbWUsIFtdKTtcbiAgICB9XG4gICAgZGVzdHJ1Y3RMaXN0ZW5lcnMuZ2V0KGRiLm5hbWUpLnB1c2goZGIpO1xuICB9KTtcblxuICBQb3VjaC5vbigndW5yZWYnLCBmdW5jdGlvbiBvbkNvbnN0cnVjdG9yVW5yZWYoZGIpIHtcbiAgICBpZiAoIWRlc3RydWN0TGlzdGVuZXJzLmhhcyhkYi5uYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGJMaXN0ID0gZGVzdHJ1Y3RMaXN0ZW5lcnMuZ2V0KGRiLm5hbWUpO1xuICAgIHZhciBwb3MgPSBkYkxpc3QuaW5kZXhPZihkYik7XG4gICAgaWYgKHBvcyA8IDApIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRiTGlzdC5zcGxpY2UocG9zLCAxKTtcbiAgICBpZiAoZGJMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBkZXN0cnVjdExpc3RlbmVycy5zZXQoZGIubmFtZSwgZGJMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdHJ1Y3RMaXN0ZW5lcnMuZGVsZXRlKGRiLm5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgUG91Y2gub24oJ2Rlc3Ryb3llZCcsIGZ1bmN0aW9uIG9uQ29uc3RydWN0b3JEZXN0cm95ZWQobmFtZSkge1xuICAgIGlmICghZGVzdHJ1Y3RMaXN0ZW5lcnMuaGFzKG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBkYkxpc3QgPSBkZXN0cnVjdExpc3RlbmVycy5nZXQobmFtZSk7XG4gICAgZGVzdHJ1Y3RMaXN0ZW5lcnMuZGVsZXRlKG5hbWUpO1xuICAgIGRiTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChkYikge1xuICAgICAgZGIuZW1pdCgnZGVzdHJveWVkJyx0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnNldFVwRXZlbnRFbWl0dGVyKFBvdWNoREIpO1xuXG5Qb3VjaERCLmFkYXB0ZXIgPSBmdW5jdGlvbiAoaWQsIG9iaiwgYWRkVG9QcmVmZXJyZWRBZGFwdGVycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAob2JqLnZhbGlkKCkpIHtcbiAgICBQb3VjaERCLmFkYXB0ZXJzW2lkXSA9IG9iajtcbiAgICBpZiAoYWRkVG9QcmVmZXJyZWRBZGFwdGVycykge1xuICAgICAgUG91Y2hEQi5wcmVmZXJyZWRBZGFwdGVycy5wdXNoKGlkKTtcbiAgICB9XG4gIH1cbn07XG5cblBvdWNoREIucGx1Z2luID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBmdW5jdGlvbiBzdHlsZSBmb3IgcGx1Z2luc1xuICAgIG9iaihQb3VjaERCKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwbHVnaW46IGdvdCBcIicgKyBvYmogKyAnXCIsIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uJyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkgeyAvLyBvYmplY3Qgc3R5bGUgZm9yIHBsdWdpbnNcbiAgICAgIFBvdWNoREIucHJvdG90eXBlW2lkXSA9IG9ialtpZF07XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRoaXMuX19kZWZhdWx0cykge1xuICAgIFBvdWNoREIuX19kZWZhdWx0cyA9ICRpbmplY3RfT2JqZWN0X2Fzc2lnbih7fSwgdGhpcy5fX2RlZmF1bHRzKTtcbiAgfVxuICByZXR1cm4gUG91Y2hEQjtcbn07XG5cblBvdWNoREIuZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmYXVsdE9wdHMpIHtcbiAgZnVuY3Rpb24gUG91Y2hBbHQobmFtZSwgb3B0cykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQb3VjaEFsdCkpIHtcbiAgICAgIHJldHVybiBuZXcgUG91Y2hBbHQobmFtZSwgb3B0cyk7XG4gICAgfVxuXG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAobmFtZSAmJiB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdHMgPSBuYW1lO1xuICAgICAgbmFtZSA9IG9wdHMubmFtZTtcbiAgICAgIGRlbGV0ZSBvcHRzLm5hbWU7XG4gICAgfVxuXG4gICAgb3B0cyA9ICRpbmplY3RfT2JqZWN0X2Fzc2lnbih7fSwgUG91Y2hBbHQuX19kZWZhdWx0cywgb3B0cyk7XG4gICAgUG91Y2hEQi5jYWxsKHRoaXMsIG5hbWUsIG9wdHMpO1xuICB9XG5cbiAgaW5oZXJpdHMoUG91Y2hBbHQsIFBvdWNoREIpO1xuXG4gIFBvdWNoQWx0LnByZWZlcnJlZEFkYXB0ZXJzID0gUG91Y2hEQi5wcmVmZXJyZWRBZGFwdGVycy5zbGljZSgpO1xuICBPYmplY3Qua2V5cyhQb3VjaERCKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIShrZXkgaW4gUG91Y2hBbHQpKSB7XG4gICAgICBQb3VjaEFsdFtrZXldID0gUG91Y2hEQltrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgdHJhbnNpdGl2ZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81OTIyXG4gIFBvdWNoQWx0Ll9fZGVmYXVsdHMgPSAkaW5qZWN0X09iamVjdF9hc3NpZ24oe30sIHRoaXMuX19kZWZhdWx0cywgZGVmYXVsdE9wdHMpO1xuXG4gIHJldHVybiBQb3VjaEFsdDtcbn07XG5cblBvdWNoREIuZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRzKSB7XG4gIHJldHVybiBmJDEodXJsLCBvcHRzKTtcbn07XG5cbi8vIG1hbmFnZWQgYXV0b21hdGljYWxseSBieSBzZXQtdmVyc2lvbi5qc1xudmFyIHZlcnNpb24gPSBcIjcuMi4yXCI7XG5cbi8vIHRoaXMgd291bGQganVzdCBiZSBcInJldHVybiBkb2NbZmllbGRdXCIsIGJ1dCBmaWVsZHNcbi8vIGNhbiBiZSBcImRlZXBcIiBkdWUgdG8gZG90IG5vdGF0aW9uXG5mdW5jdGlvbiBnZXRGaWVsZEZyb21Eb2MoZG9jLCBwYXJzZWRGaWVsZCkge1xuICB2YXIgdmFsdWUgPSBkb2M7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJzZWRGaWVsZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBwYXJzZWRGaWVsZFtpXTtcbiAgICB2YWx1ZSA9IHZhbHVlW2tleV07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZSQxKGxlZnQsIHJpZ2h0KSB7XG4gIHJldHVybiBsZWZ0IDwgcmlnaHQgPyAtMSA6IGxlZnQgPiByaWdodCA/IDEgOiAwO1xufVxuXG4vLyBDb252ZXJ0cyBhIHN0cmluZyBpbiBkb3Qgbm90YXRpb24gdG8gYW4gYXJyYXkgb2YgaXRzIGNvbXBvbmVudHMsIHdpdGggYmFja3NsYXNoIGVzY2FwaW5nXG5mdW5jdGlvbiBwYXJzZUZpZWxkKGZpZWxkTmFtZSkge1xuICAvLyBmaWVsZHMgbWF5IGJlIGRlZXAgKGUuZy4gXCJmb28uYmFyLmJhelwiKSwgc28gcGFyc2VcbiAgdmFyIGZpZWxkcyA9IFtdO1xuICB2YXIgY3VycmVudCA9ICcnO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmllbGROYW1lLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNoID0gZmllbGROYW1lW2ldO1xuICAgIGlmIChjaCA9PT0gJy4nKSB7XG4gICAgICBpZiAoaSA+IDAgJiYgZmllbGROYW1lW2kgLSAxXSA9PT0gJ1xcXFwnKSB7IC8vIGVzY2FwZWQgZGVsaW1pdGVyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnN1YnN0cmluZygwLCBjdXJyZW50Lmxlbmd0aCAtIDEpICsgJy4nO1xuICAgICAgfSBlbHNlIHsgLy8gbm90IGVzY2FwZWQsIHNvIGRlbGltaXRlclxuICAgICAgICBmaWVsZHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9ICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vcm1hbCBjaGFyYWN0ZXJcbiAgICAgIGN1cnJlbnQgKz0gY2g7XG4gICAgfVxuICB9XG4gIGZpZWxkcy5wdXNoKGN1cnJlbnQpO1xuICByZXR1cm4gZmllbGRzO1xufVxuXG52YXIgY29tYmluYXRpb25GaWVsZHMgPSBbJyRvcicsICckbm9yJywgJyRub3QnXTtcbmZ1bmN0aW9uIGlzQ29tYmluYXRpb25hbEZpZWxkKGZpZWxkKSB7XG4gIHJldHVybiBjb21iaW5hdGlvbkZpZWxkcy5pbmRleE9mKGZpZWxkKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBnZXRLZXkob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmopIHtcbiAgcmV0dXJuIG9ialtnZXRLZXkob2JqKV07XG59XG5cblxuLy8gZmxhdHRlbiBhbiBhcnJheSBvZiBzZWxlY3RvcnMgam9pbmVkIGJ5IGFuICRhbmQgb3BlcmF0b3JcbmZ1bmN0aW9uIG1lcmdlQW5kZWRTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG5cbiAgLy8gc29ydCB0byBlbnN1cmUgdGhhdCBlLmcuIGlmIHRoZSB1c2VyIHNwZWNpZmllZFxuICAvLyAkYW5kOiBbeyRndDogJ2EnfSwgeyRndDogJ2InfV0sIHRoZW4gaXQncyBjb2xsYXBzZWQgaW50b1xuICAvLyBqdXN0IHskZ3Q6ICdiJ31cbiAgdmFyIHJlcyA9IHt9O1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIE9iamVjdC5rZXlzKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgdmFyIG1hdGNoZXIgPSBzZWxlY3RvcltmaWVsZF07XG4gICAgICBpZiAodHlwZW9mIG1hdGNoZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1hdGNoZXIgPSB7JGVxOiBtYXRjaGVyfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ29tYmluYXRpb25hbEZpZWxkKGZpZWxkKSkge1xuICAgICAgICBpZiAobWF0Y2hlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgcmVzW2ZpZWxkXSA9IG1hdGNoZXIubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VBbmRlZFNlbGVjdG9ycyhbbV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc1tmaWVsZF0gPSBtZXJnZUFuZGVkU2VsZWN0b3JzKFttYXRjaGVyXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaWVsZE1hdGNoZXJzID0gcmVzW2ZpZWxkXSA9IHJlc1tmaWVsZF0gfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGNoZXIpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbWF0Y2hlcltvcGVyYXRvcl07XG5cbiAgICAgICAgICBpZiAob3BlcmF0b3IgPT09ICckZ3QnIHx8IG9wZXJhdG9yID09PSAnJGd0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZUd0R3RlKG9wZXJhdG9yLCB2YWx1ZSwgZmllbGRNYXRjaGVycyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PT0gJyRsdCcgfHwgb3BlcmF0b3IgPT09ICckbHRlJykge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlTHRMdGUob3BlcmF0b3IsIHZhbHVlLCBmaWVsZE1hdGNoZXJzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSAnJG5lJykge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlTmUodmFsdWUsIGZpZWxkTWF0Y2hlcnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09ICckZXEnKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VFcSh2YWx1ZSwgZmllbGRNYXRjaGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkTWF0Y2hlcnNbb3BlcmF0b3JdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzO1xufVxuXG5cblxuLy8gY29sbGFwc2UgbG9naWNhbGx5IGVxdWl2YWxlbnQgZ3QvZ3RlIHZhbHVlc1xuZnVuY3Rpb24gbWVyZ2VHdEd0ZShvcGVyYXRvciwgdmFsdWUsIGZpZWxkTWF0Y2hlcnMpIHtcbiAgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRlcSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47IC8vIGRvIG5vdGhpbmdcbiAgfVxuICBpZiAodHlwZW9mIGZpZWxkTWF0Y2hlcnMuJGd0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09ICckZ3RlJykge1xuICAgICAgaWYgKHZhbHVlID4gZmllbGRNYXRjaGVycy4kZ3RlKSB7IC8vIG1vcmUgc3BlY2lmaWNpdHlcbiAgICAgICAgZmllbGRNYXRjaGVycy4kZ3RlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gb3BlcmF0b3IgPT09ICckZ3QnXG4gICAgICBpZiAodmFsdWUgPj0gZmllbGRNYXRjaGVycy4kZ3RlKSB7IC8vIG1vcmUgc3BlY2lmaWNpdHlcbiAgICAgICAgZGVsZXRlIGZpZWxkTWF0Y2hlcnMuJGd0ZTtcbiAgICAgICAgZmllbGRNYXRjaGVycy4kZ3QgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpZWxkTWF0Y2hlcnMuJGd0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChvcGVyYXRvciA9PT0gJyRndGUnKSB7XG4gICAgICBpZiAodmFsdWUgPiBmaWVsZE1hdGNoZXJzLiRndCkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRndDtcbiAgICAgICAgZmllbGRNYXRjaGVycy4kZ3RlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gb3BlcmF0b3IgPT09ICckZ3QnXG4gICAgICBpZiAodmFsdWUgPiBmaWVsZE1hdGNoZXJzLiRndCkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGd0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpZWxkTWF0Y2hlcnNbb3BlcmF0b3JdID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gY29sbGFwc2UgbG9naWNhbGx5IGVxdWl2YWxlbnQgbHQvbHRlIHZhbHVlc1xuZnVuY3Rpb24gbWVyZ2VMdEx0ZShvcGVyYXRvciwgdmFsdWUsIGZpZWxkTWF0Y2hlcnMpIHtcbiAgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRlcSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47IC8vIGRvIG5vdGhpbmdcbiAgfVxuICBpZiAodHlwZW9mIGZpZWxkTWF0Y2hlcnMuJGx0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09ICckbHRlJykge1xuICAgICAgaWYgKHZhbHVlIDwgZmllbGRNYXRjaGVycy4kbHRlKSB7IC8vIG1vcmUgc3BlY2lmaWNpdHlcbiAgICAgICAgZmllbGRNYXRjaGVycy4kbHRlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gb3BlcmF0b3IgPT09ICckZ3QnXG4gICAgICBpZiAodmFsdWUgPD0gZmllbGRNYXRjaGVycy4kbHRlKSB7IC8vIG1vcmUgc3BlY2lmaWNpdHlcbiAgICAgICAgZGVsZXRlIGZpZWxkTWF0Y2hlcnMuJGx0ZTtcbiAgICAgICAgZmllbGRNYXRjaGVycy4kbHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpZWxkTWF0Y2hlcnMuJGx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChvcGVyYXRvciA9PT0gJyRsdGUnKSB7XG4gICAgICBpZiAodmFsdWUgPCBmaWVsZE1hdGNoZXJzLiRsdCkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRsdDtcbiAgICAgICAgZmllbGRNYXRjaGVycy4kbHRlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gb3BlcmF0b3IgPT09ICckZ3QnXG4gICAgICBpZiAodmFsdWUgPCBmaWVsZE1hdGNoZXJzLiRsdCkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGx0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpZWxkTWF0Y2hlcnNbb3BlcmF0b3JdID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gY29tYmluZSAkbmUgdmFsdWVzIGludG8gb25lIGFycmF5XG5mdW5jdGlvbiBtZXJnZU5lKHZhbHVlLCBmaWVsZE1hdGNoZXJzKSB7XG4gIGlmICgnJG5lJyBpbiBmaWVsZE1hdGNoZXJzKSB7XG4gICAgLy8gdGhlcmUgYXJlIG1hbnkgdGhpbmdzIHRoaXMgY291bGQgXCJub3RcIiBiZVxuICAgIGZpZWxkTWF0Y2hlcnMuJG5lLnB1c2godmFsdWUpO1xuICB9IGVsc2UgeyAvLyBkb2Vzbid0IGV4aXN0IHlldFxuICAgIGZpZWxkTWF0Y2hlcnMuJG5lID0gW3ZhbHVlXTtcbiAgfVxufVxuXG4vLyBhZGQgJGVxIGludG8gdGhlIG1peFxuZnVuY3Rpb24gbWVyZ2VFcSh2YWx1ZSwgZmllbGRNYXRjaGVycykge1xuICAvLyB0aGVzZSBhbGwgaGF2ZSBsZXNzIHNwZWNpZmljaXR5IHRoYW4gdGhlICRlcVxuICAvLyBUT0RPOiBjaGVjayBmb3IgdXNlciBlcnJvcnMgaGVyZVxuICBkZWxldGUgZmllbGRNYXRjaGVycy4kZ3Q7XG4gIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRndGU7XG4gIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRsdDtcbiAgZGVsZXRlIGZpZWxkTWF0Y2hlcnMuJGx0ZTtcbiAgZGVsZXRlIGZpZWxkTWF0Y2hlcnMuJG5lO1xuICBmaWVsZE1hdGNoZXJzLiRlcSA9IHZhbHVlO1xufVxuXG4vLyM3NDU4OiBleGVjdXRlIGZ1bmN0aW9uIG1lcmdlQW5kZWRTZWxlY3RvcnMgb24gbmVzdGVkICRhbmRcbmZ1bmN0aW9uIG1lcmdlQW5kZWRTZWxlY3RvcnNOZXN0ZWQob2JqKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqW2ldWyckYW5kJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gbWVyZ2VBbmRlZFNlbGVjdG9ycyhvYmpbaV1bJyRhbmQnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IG9ialtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG1lcmdlQW5kZWRTZWxlY3RvcnNOZXN0ZWQodmFsdWUpOyAvLyA8LSByZWN1cnNpdmUgY2FsbFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbi8vIzc0NTg6IGRldGVybWluZSBpZCAkYW5kIGlzIHByZXNlbnQgaW4gc2VsZWN0b3IgKGF0IGFueSBsZXZlbClcbmZ1bmN0aW9uIGlzQW5kSW5TZWxlY3RvcihvYmosIGlzQW5kKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICckYW5kJykge1xuICAgICAgICAgICAgaXNBbmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IG9ialtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlzQW5kID0gaXNBbmRJblNlbGVjdG9yKHZhbHVlLCBpc0FuZCk7IC8vIDwtIHJlY3Vyc2l2ZSBjYWxsXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQW5kO1xufVxuXG4vL1xuLy8gbm9ybWFsaXplIHRoZSBzZWxlY3RvclxuLy9cbmZ1bmN0aW9uIG1hc3NhZ2VTZWxlY3RvcihpbnB1dCkge1xuICB2YXIgcmVzdWx0ID0gY2xvbmUoaW5wdXQpO1xuICB2YXIgd2FzQW5kZWQgPSBmYWxzZTtcbiAgICAvLyM3NDU4OiBpZiAkYW5kIGlzIHByZXNlbnQgaW4gc2VsZWN0b3IgKGF0IGFueSBsZXZlbCkgbWVyZ2UgbmVzdGVkICRhbmRcbiAgICBpZiAoaXNBbmRJblNlbGVjdG9yKHJlc3VsdCwgZmFsc2UpKSB7XG4gICAgICAgIHJlc3VsdCA9IG1lcmdlQW5kZWRTZWxlY3RvcnNOZXN0ZWQocmVzdWx0KTtcbiAgICAgICAgaWYgKCckYW5kJyBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG1lcmdlQW5kZWRTZWxlY3RvcnMocmVzdWx0WyckYW5kJ10pO1xuICAgICAgICB9XG4gICAgICAgIHdhc0FuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgWyckb3InLCAnJG5vciddLmZvckVhY2goZnVuY3Rpb24gKG9yT3JOb3IpIHtcbiAgICBpZiAob3JPck5vciBpbiByZXN1bHQpIHtcbiAgICAgIC8vIG1lc3NhZ2UgZWFjaCBpbmRpdmlkdWFsIHNlbGVjdG9yXG4gICAgICAvLyBlLmcuIHtmb286ICdiYXInfSBiZWNvbWVzIHtmb286IHskZXE6ICdiYXInfX1cbiAgICAgIHJlc3VsdFtvck9yTm9yXS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJTZWxlY3Rvcikge1xuICAgICAgICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXMoc3ViU2VsZWN0b3IpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tpXTtcbiAgICAgICAgICB2YXIgbWF0Y2hlciA9IHN1YlNlbGVjdG9yW2ZpZWxkXTtcbiAgICAgICAgICBpZiAodHlwZW9mIG1hdGNoZXIgIT09ICdvYmplY3QnIHx8IG1hdGNoZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YlNlbGVjdG9yW2ZpZWxkXSA9IHskZXE6IG1hdGNoZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoJyRub3QnIGluIHJlc3VsdCkge1xuICAgIC8vVGhpcyBmZWVscyBhIGxpdHRsZSBsaWtlIGZvcmNpbmcsIGJ1dCBpdCB3aWxsIHdvcmsgZm9yIG5vdyxcbiAgICAvL0kgd291bGQgbGlrZSB0byBjb21lIGJhY2sgdG8gdGhpcyBhbmQgbWFrZSB0aGUgbWVyZ2luZyBvZiBzZWxlY3RvcnMgYSBsaXR0bGUgbW9yZSBnZW5lcmljXG4gICAgcmVzdWx0Wyckbm90J10gPSBtZXJnZUFuZGVkU2VsZWN0b3JzKFtyZXN1bHRbJyRub3QnXV0pO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgdmFyIG1hdGNoZXIgPSByZXN1bHRbZmllbGRdO1xuXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVyICE9PSAnb2JqZWN0JyB8fCBtYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBtYXRjaGVyID0geyRlcTogbWF0Y2hlcn07XG4gICAgfSBlbHNlIGlmICgnJG5lJyBpbiBtYXRjaGVyICYmICF3YXNBbmRlZCkge1xuICAgICAgLy8gSSBwdXQgdGhlc2UgaW4gYW4gYXJyYXksIHNpbmNlIHRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lXG4gICAgICAvLyBidXQgaW4gdGhlIFwibWVyZ2VBbmRlZFwiIG9wZXJhdGlvbiwgSSBhbHJlYWR5IHRha2UgY2FyZSBvZiB0aGF0XG4gICAgICBtYXRjaGVyLiRuZSA9IFttYXRjaGVyLiRuZV07XG4gICAgfVxuICAgIHJlc3VsdFtmaWVsZF0gPSBtYXRjaGVyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFkKHN0ciwgcGFkV2l0aCwgdXBUb0xlbmd0aCkge1xuICB2YXIgcGFkZGluZyA9ICcnO1xuICB2YXIgdGFyZ2V0TGVuZ3RoID0gdXBUb0xlbmd0aCAtIHN0ci5sZW5ndGg7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdoaWxlIChwYWRkaW5nLmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIHBhZGRpbmcgKz0gcGFkV2l0aDtcbiAgfVxuICByZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gcGFkTGVmdChzdHIsIHBhZFdpdGgsIHVwVG9MZW5ndGgpIHtcbiAgdmFyIHBhZGRpbmcgPSBwYWQoc3RyLCBwYWRXaXRoLCB1cFRvTGVuZ3RoKTtcbiAgcmV0dXJuIHBhZGRpbmcgKyBzdHI7XG59XG5cbnZhciBNSU5fTUFHTklUVURFID0gLTMyNDsgLy8gdmVyaWZpZWQgYnkgLU51bWJlci5NSU5fVkFMVUVcbnZhciBNQUdOSVRVREVfRElHSVRTID0gMzsgLy8gZGl0dG9cbnZhciBTRVAgPSAnJzsgLy8gc2V0IHRvICdfJyBmb3IgZWFzaWVyIGRlYnVnZ2luZyBcblxuZnVuY3Rpb24gY29sbGF0ZShhLCBiKSB7XG5cbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGEgPSBub3JtYWxpemVLZXkoYSk7XG4gIGIgPSBub3JtYWxpemVLZXkoYik7XG5cbiAgdmFyIGFpID0gY29sbGF0aW9uSW5kZXgoYSk7XG4gIHZhciBiaSA9IGNvbGxhdGlvbkluZGV4KGIpO1xuICBpZiAoKGFpIC0gYmkpICE9PSAwKSB7XG4gICAgcmV0dXJuIGFpIC0gYmk7XG4gIH1cbiAgc3dpdGNoICh0eXBlb2YgYSkge1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdDb2xsYXRlKGEsIGIpO1xuICB9XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYXJyYXlDb2xsYXRlKGEsIGIpIDogb2JqZWN0Q29sbGF0ZShhLCBiKTtcbn1cblxuLy8gY291Y2ggY29uc2lkZXJzIG51bGwvTmFOL0luZmluaXR5Ly1JbmZpbml0eSA9PT0gdW5kZWZpbmVkLFxuLy8gZm9yIHRoZSBwdXJwb3NlcyBvZiBtYXByZWR1Y2UgaW5kZXhlcy4gYWxzbywgZGF0ZXMgZ2V0IHN0cmluZ2lmaWVkLlxuZnVuY3Rpb24gbm9ybWFsaXplS2V5KGtleSkge1xuICBzd2l0Y2ggKHR5cGVvZiBrZXkpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGlmIChrZXkgPT09IEluZmluaXR5IHx8IGtleSA9PT0gLUluZmluaXR5IHx8IGlzTmFOKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB2YXIgb3JpZ0tleSA9IGtleTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgdmFyIGxlbiA9IGtleS5sZW5ndGg7XG4gICAgICAgIGtleSA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAga2V5W2ldID0gbm9ybWFsaXplS2V5KG9yaWdLZXlbaV0pO1xuICAgICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgfSBlbHNlIGlmIChrZXkgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBrZXkudG9KU09OKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSAhPT0gbnVsbCkgeyAvLyBnZW5lcmljIG9iamVjdFxuICAgICAgICBrZXkgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvcmlnS2V5KSB7XG4gICAgICAgICAgaWYgKG9yaWdLZXkuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvcmlnS2V5W2tdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGtleVtrXSA9IG5vcm1hbGl6ZUtleSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGluZGV4aWZ5KGtleSkge1xuICBpZiAoa2V5ICE9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlb2Yga2V5KSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuIGtleSA/IDEgOiAwO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0dXJuIG51bVRvSW5kZXhhYmxlU3RyaW5nKGtleSk7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAvLyBXZSd2ZSB0byBiZSBzdXJlIHRoYXQga2V5IGRvZXMgbm90IGNvbnRhaW4gXFx1MDAwMFxuICAgICAgICAvLyBEbyBvcmRlci1wcmVzZXJ2aW5nIHJlcGxhY2VtZW50czpcbiAgICAgICAgLy8gMCAtPiAxLCAxXG4gICAgICAgIC8vIDEgLT4gMSwgMlxuICAgICAgICAvLyAyIC0+IDIsIDJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xuICAgICAgICByZXR1cm4ga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcdTAwMDIvZywgJ1xcdTAwMDJcXHUwMDAyJylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1MDAwMS9nLCAnXFx1MDAwMVxcdTAwMDInKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHUwMDAwL2csICdcXHUwMDAxXFx1MDAwMScpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShrZXkpO1xuICAgICAgICB2YXIgYXJyID0gaXNBcnJheSA/IGtleSA6IE9iamVjdC5rZXlzKGtleSk7XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRvSW5kZXhhYmxlU3RyaW5nKGFycltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIHZhciBvYmpLZXkgPSBhcnJbaV07XG4gICAgICAgICAgICByZXN1bHQgKz0gdG9JbmRleGFibGVTdHJpbmcob2JqS2V5KSArXG4gICAgICAgICAgICAgICAgdG9JbmRleGFibGVTdHJpbmcoa2V5W29iaktleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8vIGNvbnZlcnQgdGhlIGdpdmVuIGtleSB0byBhIHN0cmluZyB0aGF0IHdvdWxkIGJlIGFwcHJvcHJpYXRlXG4vLyBmb3IgbGV4aWNhbCBzb3J0aW5nLCBlLmcuIHdpdGhpbiBhIGRhdGFiYXNlLCB3aGVyZSB0aGVcbi8vIHNvcnRpbmcgaXMgdGhlIHNhbWUgZ2l2ZW4gYnkgdGhlIGNvbGxhdGUoKSBmdW5jdGlvbi5cbmZ1bmN0aW9uIHRvSW5kZXhhYmxlU3RyaW5nKGtleSkge1xuICB2YXIgemVybyA9ICdcXHUwMDAwJztcbiAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG4gIHJldHVybiBjb2xsYXRpb25JbmRleChrZXkpICsgU0VQICsgaW5kZXhpZnkoa2V5KSArIHplcm87XG59XG5cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHN0ciwgaSkge1xuICB2YXIgb3JpZ2luYWxJZHggPSBpO1xuICB2YXIgbnVtO1xuICB2YXIgemVybyA9IHN0cltpXSA9PT0gJzEnO1xuICBpZiAoemVybykge1xuICAgIG51bSA9IDA7XG4gICAgaSsrO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZWcgPSBzdHJbaV0gPT09ICcwJztcbiAgICBpKys7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gJyc7XG4gICAgdmFyIG1hZ0FzU3RyaW5nID0gc3RyLnN1YnN0cmluZyhpLCBpICsgTUFHTklUVURFX0RJR0lUUyk7XG4gICAgdmFyIG1hZ25pdHVkZSA9IHBhcnNlSW50KG1hZ0FzU3RyaW5nLCAxMCkgKyBNSU5fTUFHTklUVURFO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKG5lZykge1xuICAgICAgbWFnbml0dWRlID0gLW1hZ25pdHVkZTtcbiAgICB9XG4gICAgaSArPSBNQUdOSVRVREVfRElHSVRTO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgY2ggPSBzdHJbaV07XG4gICAgICBpZiAoY2ggPT09ICdcXHUwMDAwJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUFzU3RyaW5nICs9IGNoO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBudW1Bc1N0cmluZyA9IG51bUFzU3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgaWYgKG51bUFzU3RyaW5nLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbnVtID0gcGFyc2VJbnQobnVtQXNTdHJpbmcsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmdbMF0gKyAnLicgKyBudW1Bc1N0cmluZ1sxXSk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKG5lZykge1xuICAgICAgbnVtID0gbnVtIC0gMTA7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKG1hZ25pdHVkZSAhPT0gMCkge1xuICAgICAgLy8gcGFyc2VGbG9hdCBpcyBtb3JlIHJlbGlhYmxlIHRoYW4gcG93IGR1ZSB0byByb3VuZGluZyBlcnJvcnNcbiAgICAgIC8vIGUuZy4gTnVtYmVyLk1BWF9WQUxVRSB3b3VsZCByZXR1cm4gSW5maW5pdHkgaWYgd2UgZGlkXG4gICAgICAvLyBudW0gKiBNYXRoLnBvdygxMCwgbWFnbml0dWRlKTtcbiAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtICsgJ2UnICsgbWFnbml0dWRlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtudW06IG51bSwgbGVuZ3RoIDogaSAtIG9yaWdpbmFsSWR4fTtcbn1cblxuLy8gbW92ZSB1cCB0aGUgc3RhY2sgd2hpbGUgcGFyc2luZ1xuLy8gdGhpcyBmdW5jdGlvbiBtb3ZlZCBvdXRzaWRlIG9mIHBhcnNlSW5kZXhhYmxlU3RyaW5nIGZvciBwZXJmb3JtYW5jZVxuZnVuY3Rpb24gcG9wKHN0YWNrLCBtZXRhU3RhY2spIHtcbiAgdmFyIG9iaiA9IHN0YWNrLnBvcCgpO1xuXG4gIGlmIChtZXRhU3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGxhc3RNZXRhRWxlbWVudCA9IG1ldGFTdGFja1ttZXRhU3RhY2subGVuZ3RoIC0gMV07XG4gICAgaWYgKG9iaiA9PT0gbGFzdE1ldGFFbGVtZW50LmVsZW1lbnQpIHtcbiAgICAgIC8vIHBvcHBpbmcgYSBtZXRhLWVsZW1lbnQsIGUuZy4gYW4gb2JqZWN0IHdob3NlIHZhbHVlIGlzIGFub3RoZXIgb2JqZWN0XG4gICAgICBtZXRhU3RhY2sucG9wKCk7XG4gICAgICBsYXN0TWV0YUVsZW1lbnQgPSBtZXRhU3RhY2tbbWV0YVN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IGxhc3RNZXRhRWxlbWVudC5lbGVtZW50O1xuICAgIHZhciBsYXN0RWxlbWVudEluZGV4ID0gbGFzdE1ldGFFbGVtZW50LmluZGV4O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50LnB1c2gob2JqKTtcbiAgICB9IGVsc2UgaWYgKGxhc3RFbGVtZW50SW5kZXggPT09IHN0YWNrLmxlbmd0aCAtIDIpIHsgLy8gb2JqIHdpdGgga2V5K3ZhbHVlXG4gICAgICB2YXIga2V5ID0gc3RhY2sucG9wKCk7XG4gICAgICBlbGVtZW50W2tleV0gPSBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTsgLy8gb2JqIHdpdGgga2V5IG9ubHlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VJbmRleGFibGVTdHJpbmcoc3RyKSB7XG4gIHZhciBzdGFjayA9IFtdO1xuICB2YXIgbWV0YVN0YWNrID0gW107IC8vIHN0YWNrIGZvciBhcnJheXMgYW5kIG9iamVjdHNcbiAgdmFyIGkgPSAwO1xuXG4gIC8qZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogW1wiZXJyb3JcIiwgeyBcImNoZWNrTG9vcHNcIjogZmFsc2UgfV0qL1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBjb2xsYXRpb25JbmRleCA9IHN0cltpKytdO1xuICAgIGlmIChjb2xsYXRpb25JbmRleCA9PT0gJ1xcdTAwMDAnKSB7XG4gICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcChzdGFjaywgbWV0YVN0YWNrKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoY29sbGF0aW9uSW5kZXgpIHtcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgICBzdGFjay5wdXNoKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICBzdGFjay5wdXNoKHN0cltpXSA9PT0gJzEnKTtcbiAgICAgICAgaSsrO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICB2YXIgcGFyc2VkTnVtID0gcGFyc2VOdW1iZXIoc3RyLCBpKTtcbiAgICAgICAgc3RhY2sucHVzaChwYXJzZWROdW0ubnVtKTtcbiAgICAgICAgaSArPSBwYXJzZWROdW0ubGVuZ3RoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICB2YXIgcGFyc2VkU3RyID0gJyc7XG4gICAgICAgIC8qZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogW1wiZXJyb3JcIiwgeyBcImNoZWNrTG9vcHNcIjogZmFsc2UgfV0qL1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBjaCA9IHN0cltpXTtcbiAgICAgICAgICBpZiAoY2ggPT09ICdcXHUwMDAwJykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnNlZFN0ciArPSBjaDtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGVyZm9ybSB0aGUgcmV2ZXJzZSBvZiB0aGUgb3JkZXItcHJlc2VydmluZyByZXBsYWNlbWVudFxuICAgICAgICAvLyBhbGdvcml0aG0gKHNlZSBhYm92ZSlcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xuICAgICAgICBwYXJzZWRTdHIgPSBwYXJzZWRTdHIucmVwbGFjZSgvXFx1MDAwMVxcdTAwMDEvZywgJ1xcdTAwMDAnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHUwMDAxXFx1MDAwMi9nLCAnXFx1MDAwMScpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcdTAwMDJcXHUwMDAyL2csICdcXHUwMDAyJyk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuICAgICAgICBzdGFjay5wdXNoKHBhcnNlZFN0cik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnNSc6XG4gICAgICAgIHZhciBhcnJheUVsZW1lbnQgPSB7IGVsZW1lbnQ6IFtdLCBpbmRleDogc3RhY2subGVuZ3RoIH07XG4gICAgICAgIHN0YWNrLnB1c2goYXJyYXlFbGVtZW50LmVsZW1lbnQpO1xuICAgICAgICBtZXRhU3RhY2sucHVzaChhcnJheUVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzYnOlxuICAgICAgICB2YXIgb2JqRWxlbWVudCA9IHsgZWxlbWVudDoge30sIGluZGV4OiBzdGFjay5sZW5ndGggfTtcbiAgICAgICAgc3RhY2sucHVzaChvYmpFbGVtZW50LmVsZW1lbnQpO1xuICAgICAgICBtZXRhU3RhY2sucHVzaChvYmpFbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdiYWQgY29sbGF0aW9uSW5kZXggb3IgdW5leHBlY3RlZGx5IHJlYWNoZWQgZW5kIG9mIGlucHV0OiAnICtcbiAgICAgICAgICAgIGNvbGxhdGlvbkluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJyYXlDb2xsYXRlKGEsIGIpIHtcbiAgdmFyIGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgc29ydCA9IGNvbGxhdGUoYVtpXSwgYltpXSk7XG4gICAgaWYgKHNvcnQgIT09IDApIHtcbiAgICAgIHJldHVybiBzb3J0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGEubGVuZ3RoID09PSBiLmxlbmd0aCkgPyAwIDpcbiAgICAoYS5sZW5ndGggPiBiLmxlbmd0aCkgPyAxIDogLTE7XG59XG5mdW5jdGlvbiBzdHJpbmdDb2xsYXRlKGEsIGIpIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGFsZWhhcnZleS9wb3VjaGRiL2lzc3Vlcy80MFxuICAvLyBUaGlzIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBDb3VjaERCIGltcGxlbWVudGF0aW9uLCBidXQgaXRzIHRoZVxuICAvLyBiZXN0IHdlIGNhbiBkbyBmb3Igbm93XG4gIHJldHVybiAoYSA9PT0gYikgPyAwIDogKChhID4gYikgPyAxIDogLTEpO1xufVxuZnVuY3Rpb24gb2JqZWN0Q29sbGF0ZShhLCBiKSB7XG4gIHZhciBhayA9IE9iamVjdC5rZXlzKGEpLCBiayA9IE9iamVjdC5rZXlzKGIpO1xuICB2YXIgbGVuID0gTWF0aC5taW4oYWsubGVuZ3RoLCBiay5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgLy8gRmlyc3Qgc29ydCB0aGUga2V5c1xuICAgIHZhciBzb3J0ID0gY29sbGF0ZShha1tpXSwgYmtbaV0pO1xuICAgIGlmIChzb3J0ICE9PSAwKSB7XG4gICAgICByZXR1cm4gc29ydDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGtleXMgYXJlIGVxdWFsIHNvcnQgdGhlIHZhbHVlc1xuICAgIHNvcnQgPSBjb2xsYXRlKGFbYWtbaV1dLCBiW2JrW2ldXSk7XG4gICAgaWYgKHNvcnQgIT09IDApIHtcbiAgICAgIHJldHVybiBzb3J0O1xuICAgIH1cblxuICB9XG4gIHJldHVybiAoYWsubGVuZ3RoID09PSBiay5sZW5ndGgpID8gMCA6XG4gICAgKGFrLmxlbmd0aCA+IGJrLmxlbmd0aCkgPyAxIDogLTE7XG59XG4vLyBUaGUgY29sbGF0aW9uIGlzIGRlZmluZWQgYnkgZXJsYW5ncyBvcmRlcmVkIHRlcm1zXG4vLyB0aGUgYXRvbXMgbnVsbCwgdHJ1ZSwgZmFsc2UgY29tZSBmaXJzdCwgdGhlbiBudW1iZXJzLCBzdHJpbmdzLFxuLy8gYXJyYXlzLCB0aGVuIG9iamVjdHNcbi8vIG51bGwvdW5kZWZpbmVkL05hTi9JbmZpbml0eS8tSW5maW5pdHkgYXJlIGFsbCBjb25zaWRlcmVkIG51bGxcbmZ1bmN0aW9uIGNvbGxhdGlvbkluZGV4KHgpIHtcbiAgdmFyIGlkID0gWydib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnLCAnb2JqZWN0J107XG4gIHZhciBpZHggPSBpZC5pbmRleE9mKHR5cGVvZiB4KTtcbiAgLy9mYWxzZSBpZiAtMSBvdGhlcndpc2UgdHJ1ZSwgYnV0IGZhc3QhISEhMVxuICBpZiAofmlkeCkge1xuICAgIGlmICh4ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiA1O1xuICAgIH1cbiAgICByZXR1cm4gaWR4IDwgMyA/IChpZHggKyAyKSA6IChpZHggKyAzKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiA1O1xuICB9XG59XG5cbi8vIGNvbnZlcnNpb246XG4vLyB4IHl5eSB6ei4uLnp6XG4vLyB4ID0gMCBmb3IgbmVnYXRpdmUsIDEgZm9yIDAsIDIgZm9yIHBvc2l0aXZlXG4vLyB5ID0gZXhwb25lbnQgKGZvciBuZWdhdGl2ZSBudW1iZXJzIG5lZ2F0ZWQpIG1vdmVkIHNvIHRoYXQgaXQncyA+PSAwXG4vLyB6ID0gbWFudGlzc2VcbmZ1bmN0aW9uIG51bVRvSW5kZXhhYmxlU3RyaW5nKG51bSkge1xuXG4gIGlmIChudW0gPT09IDApIHtcbiAgICByZXR1cm4gJzEnO1xuICB9XG5cbiAgLy8gY29udmVydCBudW1iZXIgdG8gZXhwb25lbnRpYWwgZm9ybWF0IGZvciBlYXNpZXIgYW5kXG4gIC8vIG1vcmUgc3VjY2luY3Qgc3RyaW5nIHNvcnRpbmdcbiAgdmFyIGV4cEZvcm1hdCA9IG51bS50b0V4cG9uZW50aWFsKCkuc3BsaXQoL2VcXCs/Lyk7XG4gIHZhciBtYWduaXR1ZGUgPSBwYXJzZUludChleHBGb3JtYXRbMV0sIDEwKTtcblxuICB2YXIgbmVnID0gbnVtIDwgMDtcblxuICB2YXIgcmVzdWx0ID0gbmVnID8gJzAnIDogJzInO1xuXG4gIC8vIGZpcnN0IHNvcnQgYnkgbWFnbml0dWRlXG4gIC8vIGl0J3MgZWFzaWVyIGlmIGFsbCBtYWduaXR1ZGVzIGFyZSBwb3NpdGl2ZVxuICB2YXIgbWFnRm9yQ29tcGFyaXNvbiA9ICgobmVnID8gLW1hZ25pdHVkZSA6IG1hZ25pdHVkZSkgLSBNSU5fTUFHTklUVURFKTtcbiAgdmFyIG1hZ1N0cmluZyA9IHBhZExlZnQoKG1hZ0ZvckNvbXBhcmlzb24pLnRvU3RyaW5nKCksICcwJywgTUFHTklUVURFX0RJR0lUUyk7XG5cbiAgcmVzdWx0ICs9IFNFUCArIG1hZ1N0cmluZztcblxuICAvLyB0aGVuIHNvcnQgYnkgdGhlIGZhY3RvclxuICB2YXIgZmFjdG9yID0gTWF0aC5hYnMocGFyc2VGbG9hdChleHBGb3JtYXRbMF0pKTsgLy8gWzEuLjEwKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAobmVnKSB7IC8vIGZvciBuZWdhdGl2ZSByZXZlcnNlIG9yZGVyaW5nXG4gICAgZmFjdG9yID0gMTAgLSBmYWN0b3I7XG4gIH1cblxuICB2YXIgZmFjdG9yU3RyID0gZmFjdG9yLnRvRml4ZWQoMjApO1xuXG4gIC8vIHN0cmlwIHplcm9zIGZyb20gdGhlIGVuZFxuICBmYWN0b3JTdHIgPSBmYWN0b3JTdHIucmVwbGFjZSgvXFwuPzArJC8sICcnKTtcblxuICByZXN1bHQgKz0gU0VQICsgZmFjdG9yU3RyO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGNyZWF0ZSBhIGNvbXBhcmF0b3IgYmFzZWQgb24gdGhlIHNvcnQgb2JqZWN0XG5mdW5jdGlvbiBjcmVhdGVGaWVsZFNvcnRlcihzb3J0KSB7XG5cbiAgZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZXNBc0FycmF5KGRvYykge1xuICAgIHJldHVybiBzb3J0Lm1hcChmdW5jdGlvbiAoc29ydGluZykge1xuICAgICAgdmFyIGZpZWxkTmFtZSA9IGdldEtleShzb3J0aW5nKTtcbiAgICAgIHZhciBwYXJzZWRGaWVsZCA9IHBhcnNlRmllbGQoZmllbGROYW1lKTtcbiAgICAgIHZhciBkb2NGaWVsZFZhbHVlID0gZ2V0RmllbGRGcm9tRG9jKGRvYywgcGFyc2VkRmllbGQpO1xuICAgICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFSb3csIGJSb3cpIHtcbiAgICB2YXIgYUZpZWxkVmFsdWVzID0gZ2V0RmllbGRWYWx1ZXNBc0FycmF5KGFSb3cuZG9jKTtcbiAgICB2YXIgYkZpZWxkVmFsdWVzID0gZ2V0RmllbGRWYWx1ZXNBc0FycmF5KGJSb3cuZG9jKTtcbiAgICB2YXIgY29sbGF0aW9uID0gY29sbGF0ZShhRmllbGRWYWx1ZXMsIGJGaWVsZFZhbHVlcyk7XG4gICAgaWYgKGNvbGxhdGlvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxhdGlvbjtcbiAgICB9XG4gICAgLy8gdGhpcyBpcyB3aGF0IG1hbmdvIHNlZW1zIHRvIGRvXG4gICAgcmV0dXJuIGNvbXBhcmUkMShhUm93LmRvYy5faWQsIGJSb3cuZG9jLl9pZCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckluTWVtb3J5RmllbGRzKHJvd3MsIHJlcXVlc3REZWYsIGluTWVtb3J5RmllbGRzKSB7XG4gIHJvd3MgPSByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHJvd0ZpbHRlcihyb3cuZG9jLCByZXF1ZXN0RGVmLnNlbGVjdG9yLCBpbk1lbW9yeUZpZWxkcyk7XG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0RGVmLnNvcnQpIHtcbiAgICAvLyBpbi1tZW1vcnkgc29ydFxuICAgIHZhciBmaWVsZFNvcnRlciA9IGNyZWF0ZUZpZWxkU29ydGVyKHJlcXVlc3REZWYuc29ydCk7XG4gICAgcm93cyA9IHJvd3Muc29ydChmaWVsZFNvcnRlcik7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0RGVmLnNvcnRbMF0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGdldFZhbHVlKHJlcXVlc3REZWYuc29ydFswXSkgPT09ICdkZXNjJykge1xuICAgICAgcm93cyA9IHJvd3MucmV2ZXJzZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICgnbGltaXQnIGluIHJlcXVlc3REZWYgfHwgJ3NraXAnIGluIHJlcXVlc3REZWYpIHtcbiAgICAvLyBoYXZlIHRvIGRvIHRoZSBsaW1pdCBpbi1tZW1vcnlcbiAgICB2YXIgc2tpcCA9IHJlcXVlc3REZWYuc2tpcCB8fCAwO1xuICAgIHZhciBsaW1pdCA9ICgnbGltaXQnIGluIHJlcXVlc3REZWYgPyByZXF1ZXN0RGVmLmxpbWl0IDogcm93cy5sZW5ndGgpICsgc2tpcDtcbiAgICByb3dzID0gcm93cy5zbGljZShza2lwLCBsaW1pdCk7XG4gIH1cbiAgcmV0dXJuIHJvd3M7XG59XG5cbmZ1bmN0aW9uIHJvd0ZpbHRlcihkb2MsIHNlbGVjdG9yLCBpbk1lbW9yeUZpZWxkcykge1xuICByZXR1cm4gaW5NZW1vcnlGaWVsZHMuZXZlcnkoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIG1hdGNoZXIgPSBzZWxlY3RvcltmaWVsZF07XG4gICAgdmFyIHBhcnNlZEZpZWxkID0gcGFyc2VGaWVsZChmaWVsZCk7XG4gICAgdmFyIGRvY0ZpZWxkVmFsdWUgPSBnZXRGaWVsZEZyb21Eb2MoZG9jLCBwYXJzZWRGaWVsZCk7XG4gICAgaWYgKGlzQ29tYmluYXRpb25hbEZpZWxkKGZpZWxkKSkge1xuICAgICAgcmV0dXJuIG1hdGNoQ29taW5hdGlvbmFsU2VsZWN0b3IoZmllbGQsIG1hdGNoZXIsIGRvYyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoU2VsZWN0b3IobWF0Y2hlciwgZG9jLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXRjaFNlbGVjdG9yKG1hdGNoZXIsIGRvYywgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgaWYgKCFtYXRjaGVyKSB7XG4gICAgLy8gbm8gZmlsdGVyaW5nIG5lY2Vzc2FyeTsgdGhpcyBmaWVsZCBpcyBqdXN0IG5lZWRlZCBmb3Igc29ydGluZ1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgbWF0Y2hlciBhbiBvYmplY3QsIGlmIHNvIGNvbnRpbnVlIHJlY3Vyc2lvblxuICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hdGNoZXIpLmV2ZXJ5KGZ1bmN0aW9uICh1c2VyT3BlcmF0b3IpIHtcbiAgICAgIHZhciB1c2VyVmFsdWUgPSBtYXRjaGVyW3VzZXJPcGVyYXRvcl07XG4gICAgICByZXR1cm4gbWF0Y2godXNlck9wZXJhdG9yLCBkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbm8gbW9yZSBkZXB0aCwgTm8gbmVlZCB0byByZWN1cnNlIGZ1cnRoZXJcbiAgcmV0dXJuIG1hdGNoZXIgPT09IGRvY0ZpZWxkVmFsdWU7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29taW5hdGlvbmFsU2VsZWN0b3IoZmllbGQsIG1hdGNoZXIsIGRvYykge1xuXG4gIGlmIChmaWVsZCA9PT0gJyRvcicpIHtcbiAgICByZXR1cm4gbWF0Y2hlci5zb21lKGZ1bmN0aW9uIChvck1hdGNoZXJzKSB7XG4gICAgICByZXR1cm4gcm93RmlsdGVyKGRvYywgb3JNYXRjaGVycywgT2JqZWN0LmtleXMob3JNYXRjaGVycykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGZpZWxkID09PSAnJG5vdCcpIHtcbiAgICByZXR1cm4gIXJvd0ZpbHRlcihkb2MsIG1hdGNoZXIsIE9iamVjdC5rZXlzKG1hdGNoZXIpKTtcbiAgfVxuXG4gIC8vYCRub3JgXG4gIHJldHVybiAhbWF0Y2hlci5maW5kKGZ1bmN0aW9uIChvck1hdGNoZXJzKSB7XG4gICAgcmV0dXJuIHJvd0ZpbHRlcihkb2MsIG9yTWF0Y2hlcnMsIE9iamVjdC5rZXlzKG9yTWF0Y2hlcnMpKTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gbWF0Y2godXNlck9wZXJhdG9yLCBkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgaWYgKCFtYXRjaGVyc1t1c2VyT3BlcmF0b3JdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIG9wZXJhdG9yIFwiJyArIHVzZXJPcGVyYXRvciArXG4gICAgICAnXCIgLSBzaG91bGQgYmUgb25lIG9mICRlcSwgJGx0ZSwgJGx0LCAkZ3QsICRndGUsICRleGlzdHMsICRuZSwgJGluLCAnICtcbiAgICAgICckbmluLCAkc2l6ZSwgJG1vZCwgJHJlZ2V4LCAkZWxlbU1hdGNoLCAkdHlwZSwgJGFsbE1hdGNoIG9yICRhbGwnKTtcbiAgfVxuICByZXR1cm4gbWF0Y2hlcnNbdXNlck9wZXJhdG9yXShkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpO1xufVxuXG5mdW5jdGlvbiBmaWVsZEV4aXN0cyhkb2NGaWVsZFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgZG9jRmllbGRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jRmllbGRWYWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZmllbGRJc05vdFVuZGVmaW5lZChkb2NGaWVsZFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgZG9jRmllbGRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIG1vZEZpZWxkKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkge1xuICB2YXIgZGl2aXNvciA9IHVzZXJWYWx1ZVswXTtcbiAgdmFyIG1vZCA9IHVzZXJWYWx1ZVsxXTtcbiAgaWYgKGRpdmlzb3IgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBkaXZpc29yLCBjYW5ub3QgZGl2aWRlIGJ5IHplcm8nKTtcbiAgfVxuXG4gIGlmIChwYXJzZUludChkaXZpc29yLCAxMCkgIT09IGRpdmlzb3IgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaXZpc29yIGlzIG5vdCBhbiBpbnRlZ2VyJyk7XG4gIH1cblxuICBpZiAocGFyc2VJbnQobW9kLCAxMCkgIT09IG1vZCApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsdXMgaXMgbm90IGFuIGludGVnZXInKTtcbiAgfVxuXG4gIGlmIChwYXJzZUludChkb2NGaWVsZFZhbHVlLCAxMCkgIT09IGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZG9jRmllbGRWYWx1ZSAlIGRpdmlzb3IgPT09IG1vZDtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWluc1ZhbHVlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkge1xuICByZXR1cm4gdXNlclZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkge1xuICAgIGlmIChkb2NGaWVsZFZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBkb2NGaWVsZFZhbHVlLmluZGV4T2YodmFsKSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkb2NGaWVsZFZhbHVlID09PSB2YWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zQWxsVmFsdWVzKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkge1xuICByZXR1cm4gdXNlclZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gZG9jRmllbGRWYWx1ZS5pbmRleE9mKHZhbCkgPiAtMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5U2l6ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIHtcbiAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUubGVuZ3RoID09PSB1c2VyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlZ2V4TWF0Y2goZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAodXNlclZhbHVlKTtcblxuICByZXR1cm4gcmUudGVzdChkb2NGaWVsZFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdHlwZU1hdGNoKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkge1xuXG4gIHN3aXRjaCAodXNlclZhbHVlKSB7XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gZG9jRmllbGRWYWx1ZSA9PT0gbnVsbDtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB0eXBlb2YgKGRvY0ZpZWxkVmFsdWUpID09PSAnYm9vbGVhbic7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiB0eXBlb2YgKGRvY0ZpZWxkVmFsdWUpID09PSAnbnVtYmVyJztcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHR5cGVvZiAoZG9jRmllbGRWYWx1ZSkgPT09ICdzdHJpbmcnO1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBkb2NGaWVsZFZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwoZG9jRmllbGRWYWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKHVzZXJWYWx1ZSArICcgbm90IHN1cHBvcnRlZCBhcyBhIHR5cGUuJyArXG4gICAgICAgICAgICAgICAgICAnUGxlYXNlIHVzZSBvbmUgb2Ygb2JqZWN0LCBzdHJpbmcsIGFycmF5LCBudW1iZXIsIGJvb2xlYW4gb3IgbnVsbC4nKTtcblxufVxuXG52YXIgbWF0Y2hlcnMgPSB7XG5cbiAgJyRlbGVtTWF0Y2gnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRvY0ZpZWxkVmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRvY0ZpZWxkVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2NGaWVsZFZhbHVlWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUuc29tZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiByb3dGaWx0ZXIodmFsLCB1c2VyVmFsdWUsIE9iamVjdC5rZXlzKHVzZXJWYWx1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUuc29tZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gbWF0Y2hTZWxlY3Rvcih1c2VyVmFsdWUsIGRvYywgcGFyc2VkRmllbGQsIHZhbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgJyRhbGxNYXRjaCc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZG9jRmllbGRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChkb2NGaWVsZFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jRmllbGRWYWx1ZVswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkb2NGaWVsZFZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHJvd0ZpbHRlcih2YWwsIHVzZXJWYWx1ZSwgT2JqZWN0LmtleXModXNlclZhbHVlKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jRmllbGRWYWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gbWF0Y2hTZWxlY3Rvcih1c2VyVmFsdWUsIGRvYywgcGFyc2VkRmllbGQsIHZhbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgJyRlcSc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmllbGRJc05vdFVuZGVmaW5lZChkb2NGaWVsZFZhbHVlKSAmJiBjb2xsYXRlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkgPT09IDA7XG4gIH0sXG5cbiAgJyRndGUnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSkgJiYgY29sbGF0ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpID49IDA7XG4gIH0sXG5cbiAgJyRndCc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmllbGRJc05vdFVuZGVmaW5lZChkb2NGaWVsZFZhbHVlKSAmJiBjb2xsYXRlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkgPiAwO1xuICB9LFxuXG4gICckbHRlJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZElzTm90VW5kZWZpbmVkKGRvY0ZpZWxkVmFsdWUpICYmIGNvbGxhdGUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKSA8PSAwO1xuICB9LFxuXG4gICckbHQnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSkgJiYgY29sbGF0ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIDwgMDtcbiAgfSxcblxuICAnJGV4aXN0cyc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICAvL2EgZmllbGQgdGhhdCBpcyBudWxsIGlzIHN0aWxsIGNvbnNpZGVyZWQgdG8gZXhpc3RcbiAgICBpZiAodXNlclZhbHVlKSB7XG4gICAgICByZXR1cm4gZmllbGRJc05vdFVuZGVmaW5lZChkb2NGaWVsZFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSk7XG4gIH0sXG5cbiAgJyRtb2QnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkRXhpc3RzKGRvY0ZpZWxkVmFsdWUpICYmIG1vZEZpZWxkKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH0sXG5cbiAgJyRuZSc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gdXNlclZhbHVlLmV2ZXJ5KGZ1bmN0aW9uIChuZVZhbHVlKSB7XG4gICAgICByZXR1cm4gY29sbGF0ZShkb2NGaWVsZFZhbHVlLCBuZVZhbHVlKSAhPT0gMDtcbiAgICB9KTtcbiAgfSxcbiAgJyRpbic6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmllbGRFeGlzdHMoZG9jRmllbGRWYWx1ZSkgJiYgYXJyYXlDb250YWluc1ZhbHVlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH0sXG5cbiAgJyRuaW4nOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkRXhpc3RzKGRvY0ZpZWxkVmFsdWUpICYmICFhcnJheUNvbnRhaW5zVmFsdWUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKTtcbiAgfSxcblxuICAnJHNpemUnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkRXhpc3RzKGRvY0ZpZWxkVmFsdWUpICYmIGFycmF5U2l6ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpO1xuICB9LFxuXG4gICckYWxsJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRvY0ZpZWxkVmFsdWUpICYmIGFycmF5Q29udGFpbnNBbGxWYWx1ZXMoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKTtcbiAgfSxcblxuICAnJHJlZ2V4JzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZEV4aXN0cyhkb2NGaWVsZFZhbHVlKSAmJiByZWdleE1hdGNoKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH0sXG5cbiAgJyR0eXBlJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiB0eXBlTWF0Y2goZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKTtcbiAgfVxufTtcblxuLy8gcmV0dXJuIHRydWUgaWYgdGhlIGdpdmVuIGRvYyBtYXRjaGVzIHRoZSBzdXBwbGllZCBzZWxlY3RvclxuZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGRvYywgc2VsZWN0b3IpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gbWF0Y2ggdGhlIENvdWNoREIgZXJyb3IgbWVzc2FnZVxuICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0b3IgZXJyb3I6IGV4cGVjdGVkIGEgSlNPTiBvYmplY3QnKTtcbiAgfVxuXG4gIHNlbGVjdG9yID0gbWFzc2FnZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgdmFyIHJvdyA9IHtcbiAgICAnZG9jJzogZG9jXG4gIH07XG5cbiAgdmFyIHJvd3NNYXRjaGVkID0gZmlsdGVySW5NZW1vcnlGaWVsZHMoW3Jvd10sIHsgJ3NlbGVjdG9yJzogc2VsZWN0b3IgfSwgT2JqZWN0LmtleXMoc2VsZWN0b3IpKTtcbiAgcmV0dXJuIHJvd3NNYXRjaGVkICYmIHJvd3NNYXRjaGVkLmxlbmd0aCA9PT0gMTtcbn1cblxuZnVuY3Rpb24gZXZhbEZpbHRlcihpbnB1dCkge1xuICByZXR1cm4gc2NvcGVFdmFsKCdcInVzZSBzdHJpY3RcIjtcXG5yZXR1cm4gJyArIGlucHV0ICsgJzsnLCB7fSk7XG59XG5cbmZ1bmN0aW9uIGV2YWxWaWV3KGlucHV0KSB7XG4gIHZhciBjb2RlID0gW1xuICAgICdyZXR1cm4gZnVuY3Rpb24oZG9jKSB7JyxcbiAgICAnICBcInVzZSBzdHJpY3RcIjsnLFxuICAgICcgIHZhciBlbWl0dGVkID0gZmFsc2U7JyxcbiAgICAnICB2YXIgZW1pdCA9IGZ1bmN0aW9uIChhLCBiKSB7JyxcbiAgICAnICAgIGVtaXR0ZWQgPSB0cnVlOycsXG4gICAgJyAgfTsnLFxuICAgICcgIHZhciB2aWV3ID0gJyArIGlucHV0ICsgJzsnLFxuICAgICcgIHZpZXcoZG9jKTsnLFxuICAgICcgIGlmIChlbWl0dGVkKSB7JyxcbiAgICAnICAgIHJldHVybiB0cnVlOycsXG4gICAgJyAgfScsXG4gICAgJ307J1xuICBdLmpvaW4oJ1xcbicpO1xuXG4gIHJldHVybiBzY29wZUV2YWwoY29kZSwge30pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZShvcHRzLCBjYWxsYmFjaykge1xuICBpZiAob3B0cy5zZWxlY3Rvcikge1xuICAgIGlmIChvcHRzLmZpbHRlciAmJiBvcHRzLmZpbHRlciAhPT0gJ19zZWxlY3RvcicpIHtcbiAgICAgIHZhciBmaWx0ZXJOYW1lID0gdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnc3RyaW5nJyA/XG4gICAgICAgIG9wdHMuZmlsdGVyIDogJ2Z1bmN0aW9uJztcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ3NlbGVjdG9yIGludmFsaWQgZm9yIGZpbHRlciBcIicgKyBmaWx0ZXJOYW1lICsgJ1wiJykpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjaygpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemUob3B0cykge1xuICBpZiAob3B0cy52aWV3ICYmICFvcHRzLmZpbHRlcikge1xuICAgIG9wdHMuZmlsdGVyID0gJ192aWV3JztcbiAgfVxuXG4gIGlmIChvcHRzLnNlbGVjdG9yICYmICFvcHRzLmZpbHRlcikge1xuICAgIG9wdHMuZmlsdGVyID0gJ19zZWxlY3Rvcic7XG4gIH1cblxuICBpZiAob3B0cy5maWx0ZXIgJiYgdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgIGlmIChvcHRzLmZpbHRlciA9PT0gJ192aWV3Jykge1xuICAgICAgb3B0cy52aWV3ID0gbm9ybWFsaXplRGVzaWduRG9jRnVuY3Rpb25OYW1lKG9wdHMudmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMuZmlsdGVyID0gbm9ybWFsaXplRGVzaWduRG9jRnVuY3Rpb25OYW1lKG9wdHMuZmlsdGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkRmlsdGVyKGNoYW5nZXNIYW5kbGVyLCBvcHRzKSB7XG4gIHJldHVybiBvcHRzLmZpbHRlciAmJiB0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdzdHJpbmcnICYmXG4gICAgIW9wdHMuZG9jX2lkcyAmJiAhaXNSZW1vdGUoY2hhbmdlc0hhbmRsZXIuZGIpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoY2hhbmdlc0hhbmRsZXIsIG9wdHMpIHtcbiAgdmFyIGNhbGxiYWNrID0gb3B0cy5jb21wbGV0ZTtcbiAgaWYgKG9wdHMuZmlsdGVyID09PSAnX3ZpZXcnKSB7XG4gICAgaWYgKCFvcHRzLnZpZXcgfHwgdHlwZW9mIG9wdHMudmlldyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBlcnIgPSBjcmVhdGVFcnJvcihCQURfUkVRVUVTVCxcbiAgICAgICAgJ2B2aWV3YCBmaWx0ZXIgcGFyYW1ldGVyIG5vdCBmb3VuZCBvciBpbnZhbGlkLicpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIC8vIGZldGNoIGEgdmlldyBmcm9tIGEgZGVzaWduIGRvYywgbWFrZSBpdCBiZWhhdmUgbGlrZSBhIGZpbHRlclxuICAgIHZhciB2aWV3TmFtZSA9IHBhcnNlRGVzaWduRG9jRnVuY3Rpb25OYW1lKG9wdHMudmlldyk7XG4gICAgY2hhbmdlc0hhbmRsZXIuZGIuZ2V0KCdfZGVzaWduLycgKyB2aWV3TmFtZVswXSwgZnVuY3Rpb24gKGVyciwgZGRvYykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoY2hhbmdlc0hhbmRsZXIuaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHtzdGF0dXM6ICdjYW5jZWxsZWQnfSk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZShlcnIpKTtcbiAgICAgIH1cbiAgICAgIHZhciBtYXBGdW4gPSBkZG9jICYmIGRkb2Mudmlld3MgJiYgZGRvYy52aWV3c1t2aWV3TmFtZVsxXV0gJiZcbiAgICAgICAgZGRvYy52aWV3c1t2aWV3TmFtZVsxXV0ubWFwO1xuICAgICAgaWYgKCFtYXBGdW4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DLFxuICAgICAgICAgIChkZG9jLnZpZXdzID8gJ21pc3NpbmcganNvbiBrZXk6ICcgKyB2aWV3TmFtZVsxXSA6XG4gICAgICAgICAgICAnbWlzc2luZyBqc29uIGtleTogdmlld3MnKSkpO1xuICAgICAgfVxuICAgICAgb3B0cy5maWx0ZXIgPSBldmFsVmlldyhtYXBGdW4pO1xuICAgICAgY2hhbmdlc0hhbmRsZXIuZG9DaGFuZ2VzKG9wdHMpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG9wdHMuc2VsZWN0b3IpIHtcbiAgICBvcHRzLmZpbHRlciA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzU2VsZWN0b3IoZG9jLCBvcHRzLnNlbGVjdG9yKTtcbiAgICB9O1xuICAgIGNoYW5nZXNIYW5kbGVyLmRvQ2hhbmdlcyhvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBmZXRjaCBhIGZpbHRlciBmcm9tIGEgZGVzaWduIGRvY1xuICAgIHZhciBmaWx0ZXJOYW1lID0gcGFyc2VEZXNpZ25Eb2NGdW5jdGlvbk5hbWUob3B0cy5maWx0ZXIpO1xuICAgIGNoYW5nZXNIYW5kbGVyLmRiLmdldCgnX2Rlc2lnbi8nICsgZmlsdGVyTmFtZVswXSwgZnVuY3Rpb24gKGVyciwgZGRvYykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoY2hhbmdlc0hhbmRsZXIuaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHtzdGF0dXM6ICdjYW5jZWxsZWQnfSk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZShlcnIpKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWx0ZXJGdW4gPSBkZG9jICYmIGRkb2MuZmlsdGVycyAmJiBkZG9jLmZpbHRlcnNbZmlsdGVyTmFtZVsxXV07XG4gICAgICBpZiAoIWZpbHRlckZ1bikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoTUlTU0lOR19ET0MsXG4gICAgICAgICAgKChkZG9jICYmIGRkb2MuZmlsdGVycykgPyAnbWlzc2luZyBqc29uIGtleTogJyArIGZpbHRlck5hbWVbMV1cbiAgICAgICAgICAgIDogJ21pc3NpbmcganNvbiBrZXk6IGZpbHRlcnMnKSkpO1xuICAgICAgfVxuICAgICAgb3B0cy5maWx0ZXIgPSBldmFsRmlsdGVyKGZpbHRlckZ1bik7XG4gICAgICBjaGFuZ2VzSGFuZGxlci5kb0NoYW5nZXMob3B0cyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzRmlsdGVyUGx1Z2luKFBvdWNoREIpIHtcbiAgUG91Y2hEQi5fY2hhbmdlc0ZpbHRlclBsdWdpbiA9IHtcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgc2hvdWxkRmlsdGVyOiBzaG91bGRGaWx0ZXIsXG4gICAgZmlsdGVyOiBmaWx0ZXJcbiAgfTtcbn1cblxuLy8gVE9ETzogcmVtb3ZlIGZyb20gcG91Y2hkYi1jb3JlIChicmVha2luZylcblBvdWNoREIucGx1Z2luKGFwcGx5Q2hhbmdlc0ZpbHRlclBsdWdpbik7XG5cblBvdWNoREIudmVyc2lvbiA9IHZlcnNpb247XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaXRlbSkge1xuICAgIG9ialtpdGVtXSA9IHRydWU7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufVxuLy8gTGlzdCBvZiB0b3AgbGV2ZWwgcmVzZXJ2ZWQgd29yZHMgZm9yIGRvY1xudmFyIHJlc2VydmVkV29yZHMgPSB0b09iamVjdChbXG4gICdfaWQnLFxuICAnX3JldicsXG4gICdfYXR0YWNobWVudHMnLFxuICAnX2RlbGV0ZWQnLFxuICAnX3JldmlzaW9ucycsXG4gICdfcmV2c19pbmZvJyxcbiAgJ19jb25mbGljdHMnLFxuICAnX2RlbGV0ZWRfY29uZmxpY3RzJyxcbiAgJ19sb2NhbF9zZXEnLFxuICAnX3Jldl90cmVlJyxcbiAgLy9yZXBsaWNhdGlvbiBkb2N1bWVudHNcbiAgJ19yZXBsaWNhdGlvbl9pZCcsXG4gICdfcmVwbGljYXRpb25fc3RhdGUnLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRlX3RpbWUnLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRlX3JlYXNvbicsXG4gICdfcmVwbGljYXRpb25fc3RhdHMnLFxuICAvLyBTcGVjaWZpYyB0byBDb3VjaGJhc2UgU3luYyBHYXRld2F5XG4gICdfcmVtb3ZlZCdcbl0pO1xuXG4vLyBMaXN0IG9mIHJlc2VydmVkIHdvcmRzIHRoYXQgc2hvdWxkIGVuZCB1cCB0aGUgZG9jdW1lbnRcbnZhciBkYXRhV29yZHMgPSB0b09iamVjdChbXG4gICdfYXR0YWNobWVudHMnLFxuICAvL3JlcGxpY2F0aW9uIGRvY3VtZW50c1xuICAnX3JlcGxpY2F0aW9uX2lkJyxcbiAgJ19yZXBsaWNhdGlvbl9zdGF0ZScsXG4gICdfcmVwbGljYXRpb25fc3RhdGVfdGltZScsXG4gICdfcmVwbGljYXRpb25fc3RhdGVfcmVhc29uJyxcbiAgJ19yZXBsaWNhdGlvbl9zdGF0cydcbl0pO1xuXG5mdW5jdGlvbiBwYXJzZVJldmlzaW9uSW5mbyhyZXYkJDEpIHtcbiAgaWYgKCEvXlxcZCstLy50ZXN0KHJldiQkMSkpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoSU5WQUxJRF9SRVYpO1xuICB9XG4gIHZhciBpZHggPSByZXYkJDEuaW5kZXhPZignLScpO1xuICB2YXIgbGVmdCA9IHJldiQkMS5zdWJzdHJpbmcoMCwgaWR4KTtcbiAgdmFyIHJpZ2h0ID0gcmV2JCQxLnN1YnN0cmluZyhpZHggKyAxKTtcbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IHBhcnNlSW50KGxlZnQsIDEwKSxcbiAgICBpZDogcmlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVJldlRyZWVGcm9tUmV2aXNpb25zKHJldmlzaW9ucywgb3B0cykge1xuICB2YXIgcG9zID0gcmV2aXNpb25zLnN0YXJ0IC0gcmV2aXNpb25zLmlkcy5sZW5ndGggKyAxO1xuXG4gIHZhciByZXZpc2lvbklkcyA9IHJldmlzaW9ucy5pZHM7XG4gIHZhciBpZHMgPSBbcmV2aXNpb25JZHNbMF0sIG9wdHMsIFtdXTtcblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gcmV2aXNpb25JZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZHMgPSBbcmV2aXNpb25JZHNbaV0sIHtzdGF0dXM6ICdtaXNzaW5nJ30sIFtpZHNdXTtcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHBvczogcG9zLFxuICAgIGlkczogaWRzXG4gIH1dO1xufVxuXG4vLyBQcmVwcm9jZXNzIGRvY3VtZW50cywgcGFyc2UgdGhlaXIgcmV2aXNpb25zLCBhc3NpZ24gYW4gaWQgYW5kIGFcbi8vIHJldmlzaW9uIGZvciBuZXcgd3JpdGVzIHRoYXQgYXJlIG1pc3NpbmcgdGhlbSwgZXRjXG5mdW5jdGlvbiBwYXJzZURvYyhkb2MsIG5ld0VkaXRzLCBkYk9wdHMpIHtcbiAgaWYgKCFkYk9wdHMpIHtcbiAgICBkYk9wdHMgPSB7XG4gICAgICBkZXRlcm1pbmlzdGljX3JldnM6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdmFyIG5SZXZOdW07XG4gIHZhciBuZXdSZXZJZDtcbiAgdmFyIHJldkluZm87XG4gIHZhciBvcHRzID0ge3N0YXR1czogJ2F2YWlsYWJsZSd9O1xuICBpZiAoZG9jLl9kZWxldGVkKSB7XG4gICAgb3B0cy5kZWxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChuZXdFZGl0cykge1xuICAgIGlmICghZG9jLl9pZCkge1xuICAgICAgZG9jLl9pZCA9IHV1aWQoKTtcbiAgICB9XG4gICAgbmV3UmV2SWQgPSByZXYoZG9jLCBkYk9wdHMuZGV0ZXJtaW5pc3RpY19yZXZzKTtcbiAgICBpZiAoZG9jLl9yZXYpIHtcbiAgICAgIHJldkluZm8gPSBwYXJzZVJldmlzaW9uSW5mbyhkb2MuX3Jldik7XG4gICAgICBpZiAocmV2SW5mby5lcnJvcikge1xuICAgICAgICByZXR1cm4gcmV2SW5mbztcbiAgICAgIH1cbiAgICAgIGRvYy5fcmV2X3RyZWUgPSBbe1xuICAgICAgICBwb3M6IHJldkluZm8ucHJlZml4LFxuICAgICAgICBpZHM6IFtyZXZJbmZvLmlkLCB7c3RhdHVzOiAnbWlzc2luZyd9LCBbW25ld1JldklkLCBvcHRzLCBbXV1dXVxuICAgICAgfV07XG4gICAgICBuUmV2TnVtID0gcmV2SW5mby5wcmVmaXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuX3Jldl90cmVlID0gW3tcbiAgICAgICAgcG9zOiAxLFxuICAgICAgICBpZHMgOiBbbmV3UmV2SWQsIG9wdHMsIFtdXVxuICAgICAgfV07XG4gICAgICBuUmV2TnVtID0gMTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRvYy5fcmV2aXNpb25zKSB7XG4gICAgICBkb2MuX3Jldl90cmVlID0gbWFrZVJldlRyZWVGcm9tUmV2aXNpb25zKGRvYy5fcmV2aXNpb25zLCBvcHRzKTtcbiAgICAgIG5SZXZOdW0gPSBkb2MuX3JldmlzaW9ucy5zdGFydDtcbiAgICAgIG5ld1JldklkID0gZG9jLl9yZXZpc2lvbnMuaWRzWzBdO1xuICAgIH1cbiAgICBpZiAoIWRvYy5fcmV2X3RyZWUpIHtcbiAgICAgIHJldkluZm8gPSBwYXJzZVJldmlzaW9uSW5mbyhkb2MuX3Jldik7XG4gICAgICBpZiAocmV2SW5mby5lcnJvcikge1xuICAgICAgICByZXR1cm4gcmV2SW5mbztcbiAgICAgIH1cbiAgICAgIG5SZXZOdW0gPSByZXZJbmZvLnByZWZpeDtcbiAgICAgIG5ld1JldklkID0gcmV2SW5mby5pZDtcbiAgICAgIGRvYy5fcmV2X3RyZWUgPSBbe1xuICAgICAgICBwb3M6IG5SZXZOdW0sXG4gICAgICAgIGlkczogW25ld1JldklkLCBvcHRzLCBbXV1cbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuXG4gIGludmFsaWRJZEVycm9yKGRvYy5faWQpO1xuXG4gIGRvYy5fcmV2ID0gblJldk51bSArICctJyArIG5ld1JldklkO1xuXG4gIHZhciByZXN1bHQgPSB7bWV0YWRhdGEgOiB7fSwgZGF0YSA6IHt9fTtcbiAgZm9yICh2YXIga2V5IGluIGRvYykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkb2MsIGtleSkpIHtcbiAgICAgIHZhciBzcGVjaWFsS2V5ID0ga2V5WzBdID09PSAnXyc7XG4gICAgICBpZiAoc3BlY2lhbEtleSAmJiAhcmVzZXJ2ZWRXb3Jkc1trZXldKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGNyZWF0ZUVycm9yKERPQ19WQUxJREFUSU9OLCBrZXkpO1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gRE9DX1ZBTElEQVRJT04ubWVzc2FnZSArICc6ICcgKyBrZXk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBlbHNlIGlmIChzcGVjaWFsS2V5ICYmICFkYXRhV29yZHNba2V5XSkge1xuICAgICAgICByZXN1bHQubWV0YWRhdGFba2V5LnNsaWNlKDEpXSA9IGRvY1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LmRhdGFba2V5XSA9IGRvY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUJhc2U2NChkYXRhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHRoaXNBdG9iKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGVyciA9IGNyZWF0ZUVycm9yKEJBRF9BUkcsXG4gICAgICAnQXR0YWNobWVudCBpcyBub3QgYSB2YWxpZCBiYXNlNjQgc3RyaW5nJyk7XG4gICAgcmV0dXJuIHtlcnJvcjogZXJyfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzU3RyaW5nKGF0dCwgYmxvYlR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhc0JpbmFyeSA9IHBhcnNlQmFzZTY0KGF0dC5kYXRhKTtcbiAgaWYgKGFzQmluYXJ5LmVycm9yKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGFzQmluYXJ5LmVycm9yKTtcbiAgfVxuXG4gIGF0dC5sZW5ndGggPSBhc0JpbmFyeS5sZW5ndGg7XG4gIGlmIChibG9iVHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgYXR0LmRhdGEgPSBiaW5TdHJpbmdUb0JsdWZmZXIoYXNCaW5hcnksIGF0dC5jb250ZW50X3R5cGUpO1xuICB9IGVsc2UgaWYgKGJsb2JUeXBlID09PSAnYmFzZTY0Jykge1xuICAgIGF0dC5kYXRhID0gdGhpc0J0b2EoYXNCaW5hcnkpO1xuICB9IGVsc2UgeyAvLyBiaW5hcnlcbiAgICBhdHQuZGF0YSA9IGFzQmluYXJ5O1xuICB9XG4gIGJpbmFyeU1kNShhc0JpbmFyeSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGF0dC5kaWdlc3QgPSAnbWQ1LScgKyByZXN1bHQ7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NCbG9iKGF0dCwgYmxvYlR5cGUsIGNhbGxiYWNrKSB7XG4gIGJpbmFyeU1kNShhdHQuZGF0YSwgZnVuY3Rpb24gKG1kNSkge1xuICAgIGF0dC5kaWdlc3QgPSAnbWQ1LScgKyBtZDU7XG4gICAgLy8gc2l6ZSBpcyBmb3IgYmxvYnMgKGJyb3dzZXIpLCBsZW5ndGggaXMgZm9yIGJ1ZmZlcnMgKG5vZGUpXG4gICAgYXR0Lmxlbmd0aCA9IGF0dC5kYXRhLnNpemUgfHwgYXR0LmRhdGEubGVuZ3RoIHx8IDA7XG4gICAgaWYgKGJsb2JUeXBlID09PSAnYmluYXJ5Jykge1xuICAgICAgYmxvYlRvQmluYXJ5U3RyaW5nKGF0dC5kYXRhLCBmdW5jdGlvbiAoYmluU3RyaW5nKSB7XG4gICAgICAgIGF0dC5kYXRhID0gYmluU3RyaW5nO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChibG9iVHlwZSA9PT0gJ2Jhc2U2NCcpIHtcbiAgICAgIGJsb2JUb0Jhc2U2NChhdHQuZGF0YSwgZnVuY3Rpb24gKGI2NCkge1xuICAgICAgICBhdHQuZGF0YSA9IGI2NDtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NBdHRhY2htZW50KGF0dCwgYmxvYlR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmIChhdHQuc3R1Yikge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIGlmICh0eXBlb2YgYXR0LmRhdGEgPT09ICdzdHJpbmcnKSB7IC8vIGlucHV0IGlzIGEgYmFzZTY0IHN0cmluZ1xuICAgIHByZXByb2Nlc3NTdHJpbmcoYXR0LCBibG9iVHlwZSwgY2FsbGJhY2spO1xuICB9IGVsc2UgeyAvLyBpbnB1dCBpcyBhIGJsb2JcbiAgICBwcmVwcm9jZXNzQmxvYihhdHQsIGJsb2JUeXBlLCBjYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc0F0dGFjaG1lbnRzKGRvY0luZm9zLCBibG9iVHlwZSwgY2FsbGJhY2spIHtcblxuICBpZiAoIWRvY0luZm9zLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIGRvY3YgPSAwO1xuICB2YXIgb3ZlcmFsbEVycjtcblxuICBkb2NJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2NJbmZvKSB7XG4gICAgdmFyIGF0dGFjaG1lbnRzID0gZG9jSW5mby5kYXRhICYmIGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMgP1xuICAgICAgT2JqZWN0LmtleXMoZG9jSW5mby5kYXRhLl9hdHRhY2htZW50cykgOiBbXTtcbiAgICB2YXIgcmVjdiA9IDA7XG5cbiAgICBpZiAoIWF0dGFjaG1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzZWRBdHRhY2htZW50KGVycikge1xuICAgICAgb3ZlcmFsbEVyciA9IGVycjtcbiAgICAgIHJlY3YrKztcbiAgICAgIGlmIChyZWN2ID09PSBhdHRhY2htZW50cy5sZW5ndGgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBkb2NJbmZvLmRhdGEuX2F0dGFjaG1lbnRzKSB7XG4gICAgICBpZiAoZG9jSW5mby5kYXRhLl9hdHRhY2htZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByZXByb2Nlc3NBdHRhY2htZW50KGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHNba2V5XSxcbiAgICAgICAgICBibG9iVHlwZSwgcHJvY2Vzc2VkQXR0YWNobWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGRvY3YrKztcbiAgICBpZiAoZG9jSW5mb3MubGVuZ3RoID09PSBkb2N2KSB7XG4gICAgICBpZiAob3ZlcmFsbEVycikge1xuICAgICAgICBjYWxsYmFjayhvdmVyYWxsRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvYyhyZXZMaW1pdCwgcHJldiwgZG9jSW5mbywgcmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICBpLCBjYiwgd3JpdGVEb2MsIG5ld0VkaXRzKSB7XG5cbiAgaWYgKHJldkV4aXN0cyhwcmV2LnJldl90cmVlLCBkb2NJbmZvLm1ldGFkYXRhLnJldikgJiYgIW5ld0VkaXRzKSB7XG4gICAgcmVzdWx0c1tpXSA9IGRvY0luZm87XG4gICAgcmV0dXJuIGNiKCk7XG4gIH1cblxuICAvLyBzb21ldGltZXMgdGhpcyBpcyBwcmUtY2FsY3VsYXRlZC4gaGlzdG9yaWNhbGx5IG5vdCBhbHdheXNcbiAgdmFyIHByZXZpb3VzV2lubmluZ1JldiA9IHByZXYud2lubmluZ1JldiB8fCB3aW5uaW5nUmV2KHByZXYpO1xuICB2YXIgcHJldmlvdXNseURlbGV0ZWQgPSAnZGVsZXRlZCcgaW4gcHJldiA/IHByZXYuZGVsZXRlZCA6XG4gICAgaXNEZWxldGVkKHByZXYsIHByZXZpb3VzV2lubmluZ1Jldik7XG4gIHZhciBkZWxldGVkID0gJ2RlbGV0ZWQnIGluIGRvY0luZm8ubWV0YWRhdGEgPyBkb2NJbmZvLm1ldGFkYXRhLmRlbGV0ZWQgOlxuICAgIGlzRGVsZXRlZChkb2NJbmZvLm1ldGFkYXRhKTtcbiAgdmFyIGlzUm9vdCA9IC9eMS0vLnRlc3QoZG9jSW5mby5tZXRhZGF0YS5yZXYpO1xuXG4gIGlmIChwcmV2aW91c2x5RGVsZXRlZCAmJiAhZGVsZXRlZCAmJiBuZXdFZGl0cyAmJiBpc1Jvb3QpIHtcbiAgICB2YXIgbmV3RG9jID0gZG9jSW5mby5kYXRhO1xuICAgIG5ld0RvYy5fcmV2ID0gcHJldmlvdXNXaW5uaW5nUmV2O1xuICAgIG5ld0RvYy5faWQgPSBkb2NJbmZvLm1ldGFkYXRhLmlkO1xuICAgIGRvY0luZm8gPSBwYXJzZURvYyhuZXdEb2MsIG5ld0VkaXRzKTtcbiAgfVxuXG4gIHZhciBtZXJnZWQgPSBtZXJnZShwcmV2LnJldl90cmVlLCBkb2NJbmZvLm1ldGFkYXRhLnJldl90cmVlWzBdLCByZXZMaW1pdCk7XG5cbiAgdmFyIGluQ29uZmxpY3QgPSBuZXdFZGl0cyAmJiAoKFxuICAgIChwcmV2aW91c2x5RGVsZXRlZCAmJiBkZWxldGVkICYmIG1lcmdlZC5jb25mbGljdHMgIT09ICduZXdfbGVhZicpIHx8XG4gICAgKCFwcmV2aW91c2x5RGVsZXRlZCAmJiBtZXJnZWQuY29uZmxpY3RzICE9PSAnbmV3X2xlYWYnKSB8fFxuICAgIChwcmV2aW91c2x5RGVsZXRlZCAmJiAhZGVsZXRlZCAmJiBtZXJnZWQuY29uZmxpY3RzID09PSAnbmV3X2JyYW5jaCcpKSk7XG5cbiAgaWYgKGluQ29uZmxpY3QpIHtcbiAgICB2YXIgZXJyID0gY3JlYXRlRXJyb3IoUkVWX0NPTkZMSUNUKTtcbiAgICByZXN1bHRzW2ldID0gZXJyO1xuICAgIHJldHVybiBjYigpO1xuICB9XG5cbiAgdmFyIG5ld1JldiA9IGRvY0luZm8ubWV0YWRhdGEucmV2O1xuICBkb2NJbmZvLm1ldGFkYXRhLnJldl90cmVlID0gbWVyZ2VkLnRyZWU7XG4gIGRvY0luZm8uc3RlbW1lZFJldnMgPSBtZXJnZWQuc3RlbW1lZFJldnMgfHwgW107XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcmV2LnJldl9tYXApIHtcbiAgICBkb2NJbmZvLm1ldGFkYXRhLnJldl9tYXAgPSBwcmV2LnJldl9tYXA7IC8vIHVzZWQgb25seSBieSBsZXZlbGRiXG4gIH1cblxuICAvLyByZWNhbGN1bGF0ZVxuICB2YXIgd2lubmluZ1JldiQkMSA9IHdpbm5pbmdSZXYoZG9jSW5mby5tZXRhZGF0YSk7XG4gIHZhciB3aW5uaW5nUmV2SXNEZWxldGVkID0gaXNEZWxldGVkKGRvY0luZm8ubWV0YWRhdGEsIHdpbm5pbmdSZXYkJDEpO1xuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyB0aGF0IHdlcmUgYWRkZWQvcmVtb3ZlZCxcbiAgLy8gZnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgdG90YWxfcm93cy9kb2NfY291bnRcbiAgdmFyIGRlbHRhID0gKHByZXZpb3VzbHlEZWxldGVkID09PSB3aW5uaW5nUmV2SXNEZWxldGVkKSA/IDAgOlxuICAgIHByZXZpb3VzbHlEZWxldGVkIDwgd2lubmluZ1JldklzRGVsZXRlZCA/IC0xIDogMTtcblxuICB2YXIgbmV3UmV2SXNEZWxldGVkO1xuICBpZiAobmV3UmV2ID09PSB3aW5uaW5nUmV2JCQxKSB7XG4gICAgLy8gaWYgdGhlIG5ldyByZXYgaXMgdGhlIHNhbWUgYXMgdGhlIHdpbm5pbmcgcmV2LCB3ZSBjYW4gcmV1c2UgdGhhdCB2YWx1ZVxuICAgIG5ld1JldklzRGVsZXRlZCA9IHdpbm5pbmdSZXZJc0RlbGV0ZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhleSdyZSBub3QgdGhlIHNhbWUsIHRoZW4gd2UgbmVlZCB0byByZWNhbGN1bGF0ZVxuICAgIG5ld1JldklzRGVsZXRlZCA9IGlzRGVsZXRlZChkb2NJbmZvLm1ldGFkYXRhLCBuZXdSZXYpO1xuICB9XG5cbiAgd3JpdGVEb2MoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCwgbmV3UmV2SXNEZWxldGVkLFxuICAgIHRydWUsIGRlbHRhLCBpLCBjYik7XG59XG5cbmZ1bmN0aW9uIHJvb3RJc01pc3NpbmcoZG9jSW5mbykge1xuICByZXR1cm4gZG9jSW5mby5tZXRhZGF0YS5yZXZfdHJlZVswXS5pZHNbMV0uc3RhdHVzID09PSAnbWlzc2luZyc7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NEb2NzKHJldkxpbWl0LCBkb2NJbmZvcywgYXBpLCBmZXRjaGVkRG9jcywgdHgsIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICB3cml0ZURvYywgb3B0cywgb3ZlcmFsbENhbGxiYWNrKSB7XG5cbiAgLy8gRGVmYXVsdCB0byAxMDAwIGxvY2FsbHlcbiAgcmV2TGltaXQgPSByZXZMaW1pdCB8fCAxMDAwO1xuXG4gIGZ1bmN0aW9uIGluc2VydERvYyhkb2NJbmZvLCByZXN1bHRzSWR4LCBjYWxsYmFjaykge1xuICAgIC8vIENhbnQgaW5zZXJ0IG5ldyBkZWxldGVkIGRvY3VtZW50c1xuICAgIHZhciB3aW5uaW5nUmV2JCQxID0gd2lubmluZ1Jldihkb2NJbmZvLm1ldGFkYXRhKTtcbiAgICB2YXIgZGVsZXRlZCA9IGlzRGVsZXRlZChkb2NJbmZvLm1ldGFkYXRhLCB3aW5uaW5nUmV2JCQxKTtcbiAgICBpZiAoJ3dhc19kZWxldGUnIGluIG9wdHMgJiYgZGVsZXRlZCkge1xuICAgICAgcmVzdWx0c1tyZXN1bHRzSWR4XSA9IGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DLCAnZGVsZXRlZCcpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gNDcxMiAtIGRldGVjdCB3aGV0aGVyIGEgbmV3IGRvY3VtZW50IHdhcyBpbnNlcnRlZCB3aXRoIGEgX3JldlxuICAgIHZhciBpbkNvbmZsaWN0ID0gbmV3RWRpdHMgJiYgcm9vdElzTWlzc2luZyhkb2NJbmZvKTtcblxuICAgIGlmIChpbkNvbmZsaWN0KSB7XG4gICAgICB2YXIgZXJyID0gY3JlYXRlRXJyb3IoUkVWX0NPTkZMSUNUKTtcbiAgICAgIHJlc3VsdHNbcmVzdWx0c0lkeF0gPSBlcnI7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSBkZWxldGVkID8gMCA6IDE7XG5cbiAgICB3cml0ZURvYyhkb2NJbmZvLCB3aW5uaW5nUmV2JCQxLCBkZWxldGVkLCBkZWxldGVkLCBmYWxzZSxcbiAgICAgIGRlbHRhLCByZXN1bHRzSWR4LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgbmV3RWRpdHMgPSBvcHRzLm5ld19lZGl0cztcbiAgdmFyIGlkc1RvRG9jcyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuXG4gIHZhciBkb2NzRG9uZSA9IDA7XG4gIHZhciBkb2NzVG9EbyA9IGRvY0luZm9zLmxlbmd0aDtcblxuICBmdW5jdGlvbiBjaGVja0FsbERvY3NEb25lKCkge1xuICAgIGlmICgrK2RvY3NEb25lID09PSBkb2NzVG9EbyAmJiBvdmVyYWxsQ2FsbGJhY2spIHtcbiAgICAgIG92ZXJhbGxDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGRvY0luZm9zLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnREb2MsIHJlc3VsdHNJZHgpIHtcblxuICAgIGlmIChjdXJyZW50RG9jLl9pZCAmJiBpc0xvY2FsSWQoY3VycmVudERvYy5faWQpKSB7XG4gICAgICB2YXIgZnVuID0gY3VycmVudERvYy5fZGVsZXRlZCA/ICdfcmVtb3ZlTG9jYWwnIDogJ19wdXRMb2NhbCc7XG4gICAgICBhcGlbZnVuXShjdXJyZW50RG9jLCB7Y3R4OiB0eH0sIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICByZXN1bHRzW3Jlc3VsdHNJZHhdID0gZXJyIHx8IHJlcztcbiAgICAgICAgY2hlY2tBbGxEb2NzRG9uZSgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlkID0gY3VycmVudERvYy5tZXRhZGF0YS5pZDtcbiAgICBpZiAoaWRzVG9Eb2NzLmhhcyhpZCkpIHtcbiAgICAgIGRvY3NUb0RvLS07IC8vIGR1cGxpY2F0ZVxuICAgICAgaWRzVG9Eb2NzLmdldChpZCkucHVzaChbY3VycmVudERvYywgcmVzdWx0c0lkeF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHNUb0RvY3Muc2V0KGlkLCBbW2N1cnJlbnREb2MsIHJlc3VsdHNJZHhdXSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBpbiB0aGUgY2FzZSBvZiBuZXdfZWRpdHMsIHRoZSB1c2VyIGNhbiBwcm92aWRlIG11bHRpcGxlIGRvY3NcbiAgLy8gd2l0aCB0aGUgc2FtZSBpZC4gdGhlc2UgbmVlZCB0byBiZSBwcm9jZXNzZWQgc2VxdWVudGlhbGx5XG4gIGlkc1RvRG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2NzLCBpZCkge1xuICAgIHZhciBudW1Eb25lID0gMDtcblxuICAgIGZ1bmN0aW9uIGRvY1dyaXR0ZW4oKSB7XG4gICAgICBpZiAoKytudW1Eb25lIDwgZG9jcy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dERvYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tBbGxEb2NzRG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBuZXh0RG9jKCkge1xuICAgICAgdmFyIHZhbHVlID0gZG9jc1tudW1Eb25lXTtcbiAgICAgIHZhciBjdXJyZW50RG9jID0gdmFsdWVbMF07XG4gICAgICB2YXIgcmVzdWx0c0lkeCA9IHZhbHVlWzFdO1xuXG4gICAgICBpZiAoZmV0Y2hlZERvY3MuaGFzKGlkKSkge1xuICAgICAgICB1cGRhdGVEb2MocmV2TGltaXQsIGZldGNoZWREb2NzLmdldChpZCksIGN1cnJlbnREb2MsIHJlc3VsdHMsXG4gICAgICAgICAgcmVzdWx0c0lkeCwgZG9jV3JpdHRlbiwgd3JpdGVEb2MsIG5ld0VkaXRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVuc3VyZSBzdGVtbWluZyBhcHBsaWVzIHRvIG5ldyB3cml0ZXMgYXMgd2VsbFxuICAgICAgICB2YXIgbWVyZ2VkID0gbWVyZ2UoW10sIGN1cnJlbnREb2MubWV0YWRhdGEucmV2X3RyZWVbMF0sIHJldkxpbWl0KTtcbiAgICAgICAgY3VycmVudERvYy5tZXRhZGF0YS5yZXZfdHJlZSA9IG1lcmdlZC50cmVlO1xuICAgICAgICBjdXJyZW50RG9jLnN0ZW1tZWRSZXZzID0gbWVyZ2VkLnN0ZW1tZWRSZXZzIHx8IFtdO1xuICAgICAgICBpbnNlcnREb2MoY3VycmVudERvYywgcmVzdWx0c0lkeCwgZG9jV3JpdHRlbik7XG4gICAgICB9XG4gICAgfVxuICAgIG5leHREb2MoKTtcbiAgfSk7XG59XG5cbi8vIEluZGV4ZWREQiByZXF1aXJlcyBhIHZlcnNpb25lZCBkYXRhYmFzZSBzdHJ1Y3R1cmUsIHNvIHdlIHVzZSB0aGVcbi8vIHZlcnNpb24gaGVyZSB0byBtYW5hZ2UgbWlncmF0aW9ucy5cbnZhciBBREFQVEVSX1ZFUlNJT04gPSA1O1xuXG4vLyBUaGUgb2JqZWN0IHN0b3JlcyBjcmVhdGVkIGZvciBlYWNoIGRhdGFiYXNlXG4vLyBET0NfU1RPUkUgc3RvcmVzIHRoZSBkb2N1bWVudCBtZXRhIGRhdGEsIGl0cyByZXZpc2lvbiBoaXN0b3J5IGFuZCBzdGF0ZVxuLy8gS2V5ZWQgYnkgZG9jdW1lbnQgaWRcbnZhciBET0NfU1RPUkUgPSAnZG9jdW1lbnQtc3RvcmUnO1xuLy8gQllfU0VRX1NUT1JFIHN0b3JlcyBhIHBhcnRpY3VsYXIgdmVyc2lvbiBvZiBhIGRvY3VtZW50LCBrZXllZCBieSBpdHNcbi8vIHNlcXVlbmNlIGlkXG52YXIgQllfU0VRX1NUT1JFID0gJ2J5LXNlcXVlbmNlJztcbi8vIFdoZXJlIHdlIHN0b3JlIGF0dGFjaG1lbnRzXG52YXIgQVRUQUNIX1NUT1JFID0gJ2F0dGFjaC1zdG9yZSc7XG4vLyBXaGVyZSB3ZSBzdG9yZSBtYW55LXRvLW1hbnkgcmVsYXRpb25zXG4vLyBiZXR3ZWVuIGF0dGFjaG1lbnQgZGlnZXN0cyBhbmQgc2Vxc1xudmFyIEFUVEFDSF9BTkRfU0VRX1NUT1JFID0gJ2F0dGFjaC1zZXEtc3RvcmUnO1xuXG4vLyBXaGVyZSB3ZSBzdG9yZSBkYXRhYmFzZS13aWRlIG1ldGEgZGF0YSBpbiBhIHNpbmdsZSByZWNvcmRcbi8vIGtleWVkIGJ5IGlkOiBNRVRBX1NUT1JFXG52YXIgTUVUQV9TVE9SRSA9ICdtZXRhLXN0b3JlJztcbi8vIFdoZXJlIHdlIHN0b3JlIGxvY2FsIGRvY3VtZW50c1xudmFyIExPQ0FMX1NUT1JFID0gJ2xvY2FsLXN0b3JlJztcbi8vIFdoZXJlIHdlIGRldGVjdCBibG9iIHN1cHBvcnRcbnZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2RldGVjdC1ibG9iLXN1cHBvcnQnO1xuXG5mdW5jdGlvbiBzYWZlSnNvblBhcnNlKHN0cikge1xuICAvLyBUaGlzIHRyeS9jYXRjaCBndWFyZHMgYWdhaW5zdCBzdGFjayBvdmVyZmxvdyBlcnJvcnMuXG4gIC8vIEpTT04ucGFyc2UoKSBpcyBmYXN0ZXIgdGhhbiB2dXZ1emVsYS5wYXJzZSgpIGJ1dCB2dXZ1emVsYVxuICAvLyBjYW5ub3Qgb3ZlcmZsb3cuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHZ1dnV6ZWxhLnBhcnNlKHN0cik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZUpzb25TdHJpbmdpZnkoanNvbikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHZ1dnV6ZWxhLnN0cmluZ2lmeShqc29uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpZGJFcnJvcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ3Vua25vd25fZXJyb3InO1xuICAgIGlmIChldnQudGFyZ2V0ICYmIGV2dC50YXJnZXQuZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UgPSBldnQudGFyZ2V0LmVycm9yLm5hbWUgfHwgZXZ0LnRhcmdldC5lcnJvci5tZXNzYWdlO1xuICAgIH1cbiAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihJREJfRVJST1IsIG1lc3NhZ2UsIGV2dC50eXBlKSk7XG4gIH07XG59XG5cbi8vIFVuZm9ydHVuYXRlbHksIHRoZSBtZXRhZGF0YSBoYXMgdG8gYmUgc3RyaW5naWZpZWRcbi8vIHdoZW4gaXQgaXMgcHV0IGludG8gdGhlIGRhdGFiYXNlLCBiZWNhdXNlIG90aGVyd2lzZVxuLy8gSW5kZXhlZERCIGNhbiB0aHJvdyBlcnJvcnMgZm9yIGRlZXBseS1uZXN0ZWQgb2JqZWN0cy5cbi8vIE9yaWdpbmFsbHkgd2UganVzdCB1c2VkIEpTT04ucGFyc2UvSlNPTi5zdHJpbmdpZnk7IG5vd1xuLy8gd2UgdXNlIHRoaXMgY3VzdG9tIHZ1dnV6ZWxhIGxpYnJhcnkgdGhhdCBhdm9pZHMgcmVjdXJzaW9uLlxuLy8gSWYgd2UgY291bGQgZG8gaXQgYWxsIG92ZXIgYWdhaW4sIHdlJ2QgcHJvYmFibHkgdXNlIGFcbi8vIGZvcm1hdCBmb3IgdGhlIHJldmlzaW9uIHRyZWVzIG90aGVyIHRoYW4gSlNPTi5cbmZ1bmN0aW9uIGVuY29kZU1ldGFkYXRhKG1ldGFkYXRhLCB3aW5uaW5nUmV2LCBkZWxldGVkKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YTogc2FmZUpzb25TdHJpbmdpZnkobWV0YWRhdGEpLFxuICAgIHdpbm5pbmdSZXY6IHdpbm5pbmdSZXYsXG4gICAgZGVsZXRlZE9yTG9jYWw6IGRlbGV0ZWQgPyAnMScgOiAnMCcsXG4gICAgc2VxOiBtZXRhZGF0YS5zZXEsIC8vIGhpZ2hlc3Qgc2VxIGZvciB0aGlzIGRvY1xuICAgIGlkOiBtZXRhZGF0YS5pZFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVNZXRhZGF0YShzdG9yZWRPYmplY3QpIHtcbiAgaWYgKCFzdG9yZWRPYmplY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWV0YWRhdGEgPSBzYWZlSnNvblBhcnNlKHN0b3JlZE9iamVjdC5kYXRhKTtcbiAgbWV0YWRhdGEud2lubmluZ1JldiA9IHN0b3JlZE9iamVjdC53aW5uaW5nUmV2O1xuICBtZXRhZGF0YS5kZWxldGVkID0gc3RvcmVkT2JqZWN0LmRlbGV0ZWRPckxvY2FsID09PSAnMSc7XG4gIG1ldGFkYXRhLnNlcSA9IHN0b3JlZE9iamVjdC5zZXE7XG4gIHJldHVybiBtZXRhZGF0YTtcbn1cblxuLy8gcmVhZCB0aGUgZG9jIGJhY2sgb3V0IGZyb20gdGhlIGRhdGFiYXNlLiB3ZSBkb24ndCBzdG9yZSB0aGVcbi8vIF9pZCBvciBfcmV2IGJlY2F1c2Ugd2UgYWxyZWFkeSBoYXZlIF9kb2NfaWRfcmV2LlxuZnVuY3Rpb24gZGVjb2RlRG9jKGRvYykge1xuICBpZiAoIWRvYykge1xuICAgIHJldHVybiBkb2M7XG4gIH1cbiAgdmFyIGlkeCA9IGRvYy5fZG9jX2lkX3Jldi5sYXN0SW5kZXhPZignOicpO1xuICBkb2MuX2lkID0gZG9jLl9kb2NfaWRfcmV2LnN1YnN0cmluZygwLCBpZHggLSAxKTtcbiAgZG9jLl9yZXYgPSBkb2MuX2RvY19pZF9yZXYuc3Vic3RyaW5nKGlkeCArIDEpO1xuICBkZWxldGUgZG9jLl9kb2NfaWRfcmV2O1xuICByZXR1cm4gZG9jO1xufVxuXG4vLyBSZWFkIGEgYmxvYiBmcm9tIHRoZSBkYXRhYmFzZSwgZW5jb2RpbmcgYXMgbmVjZXNzYXJ5XG4vLyBhbmQgdHJhbnNsYXRpbmcgZnJvbSBiYXNlNjQgaWYgdGhlIElEQiBkb2Vzbid0IHN1cHBvcnRcbi8vIG5hdGl2ZSBCbG9ic1xuZnVuY3Rpb24gcmVhZEJsb2JEYXRhKGJvZHksIHR5cGUsIGFzQmxvYiwgY2FsbGJhY2spIHtcbiAgaWYgKGFzQmxvYikge1xuICAgIGlmICghYm9keSkge1xuICAgICAgY2FsbGJhY2soY3JlYXRlQmxvYihbJyddLCB7dHlwZTogdHlwZX0pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ICE9PSAnc3RyaW5nJykgeyAvLyB3ZSBoYXZlIGJsb2Igc3VwcG9ydFxuICAgICAgY2FsbGJhY2soYm9keSk7XG4gICAgfSBlbHNlIHsgLy8gbm8gYmxvYiBzdXBwb3J0XG4gICAgICBjYWxsYmFjayhiNjRUb0JsdWZmZXIoYm9keSwgdHlwZSkpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy8gYXMgYmFzZTY0IHN0cmluZ1xuICAgIGlmICghYm9keSkge1xuICAgICAgY2FsbGJhY2soJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKSB7IC8vIHdlIGhhdmUgYmxvYiBzdXBwb3J0XG4gICAgICByZWFkQXNCaW5hcnlTdHJpbmcoYm9keSwgZnVuY3Rpb24gKGJpbmFyeSkge1xuICAgICAgICBjYWxsYmFjayh0aGlzQnRvYShiaW5hcnkpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7IC8vIG5vIGJsb2Igc3VwcG9ydFxuICAgICAgY2FsbGJhY2soYm9keSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZldGNoQXR0YWNobWVudHNJZk5lY2Vzc2FyeShkb2MsIG9wdHMsIHR4biwgY2IpIHtcbiAgdmFyIGF0dGFjaG1lbnRzID0gT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cyB8fCB7fSk7XG4gIGlmICghYXR0YWNobWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gIH1cbiAgdmFyIG51bURvbmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRG9uZSgpIHtcbiAgICBpZiAoKytudW1Eb25lID09PSBhdHRhY2htZW50cy5sZW5ndGggJiYgY2IpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hBdHRhY2htZW50KGRvYywgYXR0KSB7XG4gICAgdmFyIGF0dE9iaiA9IGRvYy5fYXR0YWNobWVudHNbYXR0XTtcbiAgICB2YXIgZGlnZXN0ID0gYXR0T2JqLmRpZ2VzdDtcbiAgICB2YXIgcmVxID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9TVE9SRSkuZ2V0KGRpZ2VzdCk7XG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhdHRPYmouYm9keSA9IGUudGFyZ2V0LnJlc3VsdC5ib2R5O1xuICAgICAgY2hlY2tEb25lKCk7XG4gICAgfTtcbiAgfVxuXG4gIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGF0dCkge1xuICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzICYmIG9wdHMuaW5jbHVkZV9kb2NzKSB7XG4gICAgICBmZXRjaEF0dGFjaG1lbnQoZG9jLCBhdHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuX2F0dGFjaG1lbnRzW2F0dF0uc3R1YiA9IHRydWU7XG4gICAgICBjaGVja0RvbmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBJREItc3BlY2lmaWMgcG9zdHByb2Nlc3NpbmcgbmVjZXNzYXJ5IGJlY2F1c2Vcbi8vIHdlIGRvbid0IGtub3cgd2hldGhlciB3ZSBzdG9yZWQgYSB0cnVlIEJsb2Igb3Jcbi8vIGEgYmFzZTY0LWVuY29kZWQgc3RyaW5nLCBhbmQgaWYgaXQncyBhIEJsb2IgaXRcbi8vIG5lZWRzIHRvIGJlIHJlYWQgb3V0c2lkZSBvZiB0aGUgdHJhbnNhY3Rpb24gY29udGV4dFxuZnVuY3Rpb24gcG9zdFByb2Nlc3NBdHRhY2htZW50cyhyZXN1bHRzLCBhc0Jsb2IpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICBpZiAocm93LmRvYyAmJiByb3cuZG9jLl9hdHRhY2htZW50cykge1xuICAgICAgdmFyIGF0dE5hbWVzID0gT2JqZWN0LmtleXMocm93LmRvYy5fYXR0YWNobWVudHMpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGF0dE5hbWVzLm1hcChmdW5jdGlvbiAoYXR0KSB7XG4gICAgICAgIHZhciBhdHRPYmogPSByb3cuZG9jLl9hdHRhY2htZW50c1thdHRdO1xuICAgICAgICBpZiAoISgnYm9keScgaW4gYXR0T2JqKSkgeyAvLyBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYm9keSA9IGF0dE9iai5ib2R5O1xuICAgICAgICB2YXIgdHlwZSA9IGF0dE9iai5jb250ZW50X3R5cGU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlYWRCbG9iRGF0YShib2R5LCB0eXBlLCBhc0Jsb2IsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByb3cuZG9jLl9hdHRhY2htZW50c1thdHRdID0gJGluamVjdF9PYmplY3RfYXNzaWduKFxuICAgICAgICAgICAgICBwaWNrKGF0dE9iaiwgWydkaWdlc3QnLCAnY29udGVudF90eXBlJ10pLFxuICAgICAgICAgICAgICB7ZGF0YTogZGF0YX1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBjb21wYWN0UmV2cyhyZXZzLCBkb2NJZCwgdHhuKSB7XG5cbiAgdmFyIHBvc3NpYmx5T3JwaGFuZWREaWdlc3RzID0gW107XG4gIHZhciBzZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShCWV9TRVFfU1RPUkUpO1xuICB2YXIgYXR0U3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQVRUQUNIX1NUT1JFKTtcbiAgdmFyIGF0dEFuZFNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9BTkRfU0VRX1NUT1JFKTtcbiAgdmFyIGNvdW50ID0gcmV2cy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gY2hlY2tEb25lKCkge1xuICAgIGNvdW50LS07XG4gICAgaWYgKCFjb3VudCkgeyAvLyBkb25lIHByb2Nlc3NpbmcgYWxsIHJldnNcbiAgICAgIGRlbGV0ZU9ycGhhbmVkQXR0YWNobWVudHMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVPcnBoYW5lZEF0dGFjaG1lbnRzKCkge1xuICAgIGlmICghcG9zc2libHlPcnBoYW5lZERpZ2VzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvc3NpYmx5T3JwaGFuZWREaWdlc3RzLmZvckVhY2goZnVuY3Rpb24gKGRpZ2VzdCkge1xuICAgICAgdmFyIGNvdW50UmVxID0gYXR0QW5kU2VxU3RvcmUuaW5kZXgoJ2RpZ2VzdFNlcScpLmNvdW50KFxuICAgICAgICBJREJLZXlSYW5nZS5ib3VuZChcbiAgICAgICAgICBkaWdlc3QgKyAnOjonLCBkaWdlc3QgKyAnOjpcXHVmZmZmJywgZmFsc2UsIGZhbHNlKSk7XG4gICAgICBjb3VudFJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY291bnQgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAvLyBvcnBoYW5lZFxuICAgICAgICAgIGF0dFN0b3JlLmRlbGV0ZShkaWdlc3QpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmV2cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXYkJDEpIHtcbiAgICB2YXIgaW5kZXggPSBzZXFTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKTtcbiAgICB2YXIga2V5ID0gZG9jSWQgKyBcIjo6XCIgKyByZXYkJDE7XG4gICAgaW5kZXguZ2V0S2V5KGtleSkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBzZXEgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAodHlwZW9mIHNlcSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrRG9uZSgpO1xuICAgICAgfVxuICAgICAgc2VxU3RvcmUuZGVsZXRlKHNlcSk7XG5cbiAgICAgIHZhciBjdXJzb3IgPSBhdHRBbmRTZXFTdG9yZS5pbmRleCgnc2VxJylcbiAgICAgICAgLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2Uub25seShzZXEpKTtcblxuICAgICAgY3Vyc29yLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgIHZhciBkaWdlc3QgPSBjdXJzb3IudmFsdWUuZGlnZXN0U2VxLnNwbGl0KCc6OicpWzBdO1xuICAgICAgICAgIHBvc3NpYmx5T3JwaGFuZWREaWdlc3RzLnB1c2goZGlnZXN0KTtcbiAgICAgICAgICBhdHRBbmRTZXFTdG9yZS5kZWxldGUoY3Vyc29yLnByaW1hcnlLZXkpO1xuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9IGVsc2UgeyAvLyBkb25lXG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIHN0b3JlcywgbW9kZSkge1xuICB0cnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eG46IGlkYi50cmFuc2FjdGlvbihzdG9yZXMsIG1vZGUpXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnJcbiAgICB9O1xuICB9XG59XG5cbnZhciBjaGFuZ2VzSGFuZGxlciA9IG5ldyBDaGFuZ2VzKCk7XG5cbmZ1bmN0aW9uIGlkYkJ1bGtEb2NzKGRiT3B0cywgcmVxLCBvcHRzLCBhcGksIGlkYiwgY2FsbGJhY2spIHtcbiAgdmFyIGRvY0luZm9zID0gcmVxLmRvY3M7XG4gIHZhciB0eG47XG4gIHZhciBkb2NTdG9yZTtcbiAgdmFyIGJ5U2VxU3RvcmU7XG4gIHZhciBhdHRhY2hTdG9yZTtcbiAgdmFyIGF0dGFjaEFuZFNlcVN0b3JlO1xuICB2YXIgbWV0YVN0b3JlO1xuICB2YXIgZG9jSW5mb0Vycm9yO1xuICB2YXIgbWV0YURvYztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZG9jSW5mb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZG9jID0gZG9jSW5mb3NbaV07XG4gICAgaWYgKGRvYy5faWQgJiYgaXNMb2NhbElkKGRvYy5faWQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZG9jID0gZG9jSW5mb3NbaV0gPSBwYXJzZURvYyhkb2MsIG9wdHMubmV3X2VkaXRzLCBkYk9wdHMpO1xuICAgIGlmIChkb2MuZXJyb3IgJiYgIWRvY0luZm9FcnJvcikge1xuICAgICAgZG9jSW5mb0Vycm9yID0gZG9jO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkb2NJbmZvRXJyb3IpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soZG9jSW5mb0Vycm9yKTtcbiAgfVxuXG4gIHZhciBhbGxEb2NzUHJvY2Vzc2VkID0gZmFsc2U7XG4gIHZhciBkb2NDb3VudERlbHRhID0gMDtcbiAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkoZG9jSW5mb3MubGVuZ3RoKTtcbiAgdmFyIGZldGNoZWREb2NzID0gbmV3IEV4cG9ydGVkTWFwKCk7XG4gIHZhciBwcmVjb25kaXRpb25FcnJvcmVkID0gZmFsc2U7XG4gIHZhciBibG9iVHlwZSA9IGFwaS5fbWV0YS5ibG9iU3VwcG9ydCA/ICdibG9iJyA6ICdiYXNlNjQnO1xuXG4gIHByZXByb2Nlc3NBdHRhY2htZW50cyhkb2NJbmZvcywgYmxvYlR5cGUsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gICAgc3RhcnRUcmFuc2FjdGlvbigpO1xuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydFRyYW5zYWN0aW9uKCkge1xuXG4gICAgdmFyIHN0b3JlcyA9IFtcbiAgICAgIERPQ19TVE9SRSwgQllfU0VRX1NUT1JFLFxuICAgICAgQVRUQUNIX1NUT1JFLFxuICAgICAgTE9DQUxfU1RPUkUsIEFUVEFDSF9BTkRfU0VRX1NUT1JFLFxuICAgICAgTUVUQV9TVE9SRVxuICAgIF07XG4gICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIHN0b3JlcywgJ3JlYWR3cml0ZScpO1xuICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgIH1cbiAgICB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICAgIHR4bi5vbmFib3J0ID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICAgIHR4bi5vbnRpbWVvdXQgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gICAgdHhuLm9uY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICBkb2NTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpO1xuICAgIGJ5U2VxU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcbiAgICBhdHRhY2hTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfU1RPUkUpO1xuICAgIGF0dGFjaEFuZFNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9BTkRfU0VRX1NUT1JFKTtcbiAgICBtZXRhU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoTUVUQV9TVE9SRSk7XG5cbiAgICBtZXRhU3RvcmUuZ2V0KE1FVEFfU1RPUkUpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBtZXRhRG9jID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgdXBkYXRlRG9jQ291bnRJZlJlYWR5KCk7XG4gICAgfTtcblxuICAgIHZlcmlmeUF0dGFjaG1lbnRzKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJlY29uZGl0aW9uRXJyb3JlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgZmV0Y2hFeGlzdGluZ0RvY3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWxsRG9jc1Byb2Nlc3NlZCgpIHtcbiAgICBhbGxEb2NzUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICB1cGRhdGVEb2NDb3VudElmUmVhZHkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlkYlByb2Nlc3NEb2NzKCkge1xuICAgIHByb2Nlc3NEb2NzKGRiT3B0cy5yZXZzX2xpbWl0LCBkb2NJbmZvcywgYXBpLCBmZXRjaGVkRG9jcyxcbiAgICAgICAgICAgICAgICB0eG4sIHJlc3VsdHMsIHdyaXRlRG9jLCBvcHRzLCBvbkFsbERvY3NQcm9jZXNzZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRG9jQ291bnRJZlJlYWR5KCkge1xuICAgIGlmICghbWV0YURvYyB8fCAhYWxsRG9jc1Byb2Nlc3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjYWNoaW5nIHRoZSBkb2NDb3VudCBzYXZlcyBhIGxvdCBvZiB0aW1lIGluIGFsbERvY3MoKSBhbmRcbiAgICAvLyBpbmZvKCksIHdoaWNoIGlzIHdoeSB3ZSBnbyB0byBhbGwgdGhlIHRyb3VibGUgb2YgZG9pbmcgdGhpc1xuICAgIG1ldGFEb2MuZG9jQ291bnQgKz0gZG9jQ291bnREZWx0YTtcbiAgICBtZXRhU3RvcmUucHV0KG1ldGFEb2MpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hFeGlzdGluZ0RvY3MoKSB7XG5cbiAgICBpZiAoIWRvY0luZm9zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBudW1GZXRjaGVkID0gMDtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRG9uZSgpIHtcbiAgICAgIGlmICgrK251bUZldGNoZWQgPT09IGRvY0luZm9zLmxlbmd0aCkge1xuICAgICAgICBpZGJQcm9jZXNzRG9jcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRNZXRhZGF0YShldmVudCkge1xuICAgICAgdmFyIG1ldGFkYXRhID0gZGVjb2RlTWV0YWRhdGEoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cbiAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICBmZXRjaGVkRG9jcy5zZXQobWV0YWRhdGEuaWQsIG1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrRG9uZSgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkb2NJbmZvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGRvY0luZm8gPSBkb2NJbmZvc1tpXTtcbiAgICAgIGlmIChkb2NJbmZvLl9pZCAmJiBpc0xvY2FsSWQoZG9jSW5mby5faWQpKSB7XG4gICAgICAgIGNoZWNrRG9uZSgpOyAvLyBza2lwIGxvY2FsIGRvY3NcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVxID0gZG9jU3RvcmUuZ2V0KGRvY0luZm8ubWV0YWRhdGEuaWQpO1xuICAgICAgcmVxLm9uc3VjY2VzcyA9IHJlYWRNZXRhZGF0YTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICBpZiAocHJlY29uZGl0aW9uRXJyb3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNoYW5nZXNIYW5kbGVyLm5vdGlmeShhcGkuX21ldGEubmFtZSk7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlBdHRhY2htZW50KGRpZ2VzdCwgY2FsbGJhY2spIHtcblxuICAgIHZhciByZXEgPSBhdHRhY2hTdG9yZS5nZXQoZGlnZXN0KTtcbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZS50YXJnZXQucmVzdWx0KSB7XG4gICAgICAgIHZhciBlcnIgPSBjcmVhdGVFcnJvcihNSVNTSU5HX1NUVUIsXG4gICAgICAgICAgJ3Vua25vd24gc3R1YiBhdHRhY2htZW50IHdpdGggZGlnZXN0ICcgK1xuICAgICAgICAgIGRpZ2VzdCk7XG4gICAgICAgIGVyci5zdGF0dXMgPSA0MTI7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlBdHRhY2htZW50cyhmaW5pc2gpIHtcblxuXG4gICAgdmFyIGRpZ2VzdHMgPSBbXTtcbiAgICBkb2NJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2NJbmZvKSB7XG4gICAgICBpZiAoZG9jSW5mby5kYXRhICYmIGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZG9jSW5mby5kYXRhLl9hdHRhY2htZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgICB2YXIgYXR0ID0gZG9jSW5mby5kYXRhLl9hdHRhY2htZW50c1tmaWxlbmFtZV07XG4gICAgICAgICAgaWYgKGF0dC5zdHViKSB7XG4gICAgICAgICAgICBkaWdlc3RzLnB1c2goYXR0LmRpZ2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWRpZ2VzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgfVxuICAgIHZhciBudW1Eb25lID0gMDtcbiAgICB2YXIgZXJyO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tEb25lKCkge1xuICAgICAgaWYgKCsrbnVtRG9uZSA9PT0gZGlnZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgZmluaXNoKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIGRpZ2VzdHMuZm9yRWFjaChmdW5jdGlvbiAoZGlnZXN0KSB7XG4gICAgICB2ZXJpZnlBdHRhY2htZW50KGRpZ2VzdCwgZnVuY3Rpb24gKGF0dEVycikge1xuICAgICAgICBpZiAoYXR0RXJyICYmICFlcnIpIHtcbiAgICAgICAgICBlcnIgPSBhdHRFcnI7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlRG9jKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsIG5ld1JldklzRGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGUsIGRlbHRhLCByZXN1bHRzSWR4LCBjYWxsYmFjaykge1xuXG4gICAgZG9jSW5mby5tZXRhZGF0YS53aW5uaW5nUmV2ID0gd2lubmluZ1JldiQkMTtcbiAgICBkb2NJbmZvLm1ldGFkYXRhLmRlbGV0ZWQgPSB3aW5uaW5nUmV2SXNEZWxldGVkO1xuXG4gICAgdmFyIGRvYyA9IGRvY0luZm8uZGF0YTtcbiAgICBkb2MuX2lkID0gZG9jSW5mby5tZXRhZGF0YS5pZDtcbiAgICBkb2MuX3JldiA9IGRvY0luZm8ubWV0YWRhdGEucmV2O1xuXG4gICAgaWYgKG5ld1JldklzRGVsZXRlZCkge1xuICAgICAgZG9jLl9kZWxldGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaGFzQXR0YWNobWVudHMgPSBkb2MuX2F0dGFjaG1lbnRzICYmXG4gICAgICBPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKS5sZW5ndGg7XG4gICAgaWYgKGhhc0F0dGFjaG1lbnRzKSB7XG4gICAgICByZXR1cm4gd3JpdGVBdHRhY2htZW50cyhkb2NJbmZvLCB3aW5uaW5nUmV2JCQxLCB3aW5uaW5nUmV2SXNEZWxldGVkLFxuICAgICAgICBpc1VwZGF0ZSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGRvY0NvdW50RGVsdGEgKz0gZGVsdGE7XG4gICAgdXBkYXRlRG9jQ291bnRJZlJlYWR5KCk7XG5cbiAgICBmaW5pc2hEb2MoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCxcbiAgICAgIGlzVXBkYXRlLCByZXN1bHRzSWR4LCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hEb2MoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlLCByZXN1bHRzSWR4LCBjYWxsYmFjaykge1xuXG4gICAgdmFyIGRvYyA9IGRvY0luZm8uZGF0YTtcbiAgICB2YXIgbWV0YWRhdGEgPSBkb2NJbmZvLm1ldGFkYXRhO1xuXG4gICAgZG9jLl9kb2NfaWRfcmV2ID0gbWV0YWRhdGEuaWQgKyAnOjonICsgbWV0YWRhdGEucmV2O1xuICAgIGRlbGV0ZSBkb2MuX2lkO1xuICAgIGRlbGV0ZSBkb2MuX3JldjtcblxuICAgIGZ1bmN0aW9uIGFmdGVyUHV0RG9jKGUpIHtcbiAgICAgIHZhciByZXZzVG9EZWxldGUgPSBkb2NJbmZvLnN0ZW1tZWRSZXZzIHx8IFtdO1xuXG4gICAgICBpZiAoaXNVcGRhdGUgJiYgYXBpLmF1dG9fY29tcGFjdGlvbikge1xuICAgICAgICByZXZzVG9EZWxldGUgPSByZXZzVG9EZWxldGUuY29uY2F0KGNvbXBhY3RUcmVlKGRvY0luZm8ubWV0YWRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldnNUb0RlbGV0ZSAmJiByZXZzVG9EZWxldGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbXBhY3RSZXZzKHJldnNUb0RlbGV0ZSwgZG9jSW5mby5tZXRhZGF0YS5pZCwgdHhuKTtcbiAgICAgIH1cblxuICAgICAgbWV0YWRhdGEuc2VxID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgLy8gQ3VycmVudCBfcmV2IGlzIGNhbGN1bGF0ZWQgZnJvbSBfcmV2X3RyZWUgb24gcmVhZFxuICAgICAgLy8gZGVsZXRlIG1ldGFkYXRhLnJldjtcbiAgICAgIHZhciBtZXRhZGF0YVRvU3RvcmUgPSBlbmNvZGVNZXRhZGF0YShtZXRhZGF0YSwgd2lubmluZ1JldiQkMSxcbiAgICAgICAgd2lubmluZ1JldklzRGVsZXRlZCk7XG4gICAgICB2YXIgbWV0YURhdGFSZXEgPSBkb2NTdG9yZS5wdXQobWV0YWRhdGFUb1N0b3JlKTtcbiAgICAgIG1ldGFEYXRhUmVxLm9uc3VjY2VzcyA9IGFmdGVyUHV0TWV0YWRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJQdXREb2NFcnJvcihlKSB7XG4gICAgICAvLyBDb25zdHJhaW50RXJyb3IsIG5lZWQgdG8gdXBkYXRlLCBub3QgcHV0IChzZWUgIzE2MzggZm9yIGRldGFpbHMpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGF2b2lkIHRyYW5zYWN0aW9uIGFib3J0XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBhdm9pZCB0cmFuc2FjdGlvbiBvbmVycm9yXG4gICAgICB2YXIgaW5kZXggPSBieVNlcVN0b3JlLmluZGV4KCdfZG9jX2lkX3JldicpO1xuICAgICAgdmFyIGdldEtleVJlcSA9IGluZGV4LmdldEtleShkb2MuX2RvY19pZF9yZXYpO1xuICAgICAgZ2V0S2V5UmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBwdXRSZXEgPSBieVNlcVN0b3JlLnB1dChkb2MsIGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIHB1dFJlcS5vbnN1Y2Nlc3MgPSBhZnRlclB1dERvYztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJQdXRNZXRhZGF0YSgpIHtcbiAgICAgIHJlc3VsdHNbcmVzdWx0c0lkeF0gPSB7XG4gICAgICAgIG9rOiB0cnVlLFxuICAgICAgICBpZDogbWV0YWRhdGEuaWQsXG4gICAgICAgIHJldjogbWV0YWRhdGEucmV2XG4gICAgICB9O1xuICAgICAgZmV0Y2hlZERvY3Muc2V0KGRvY0luZm8ubWV0YWRhdGEuaWQsIGRvY0luZm8ubWV0YWRhdGEpO1xuICAgICAgaW5zZXJ0QXR0YWNobWVudE1hcHBpbmdzKGRvY0luZm8sIG1ldGFkYXRhLnNlcSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHZhciBwdXRSZXEgPSBieVNlcVN0b3JlLnB1dChkb2MpO1xuXG4gICAgcHV0UmVxLm9uc3VjY2VzcyA9IGFmdGVyUHV0RG9jO1xuICAgIHB1dFJlcS5vbmVycm9yID0gYWZ0ZXJQdXREb2NFcnJvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlQXR0YWNobWVudHMoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spIHtcblxuXG4gICAgdmFyIGRvYyA9IGRvY0luZm8uZGF0YTtcblxuICAgIHZhciBudW1Eb25lID0gMDtcbiAgICB2YXIgYXR0YWNobWVudHMgPSBPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKTtcblxuICAgIGZ1bmN0aW9uIGNvbGxlY3RSZXN1bHRzKCkge1xuICAgICAgaWYgKG51bURvbmUgPT09IGF0dGFjaG1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaW5pc2hEb2MoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCxcbiAgICAgICAgICBpc1VwZGF0ZSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGFjaG1lbnRTYXZlZCgpIHtcbiAgICAgIG51bURvbmUrKztcbiAgICAgIGNvbGxlY3RSZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgYXR0YWNobWVudHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgYXR0ID0gZG9jSW5mby5kYXRhLl9hdHRhY2htZW50c1trZXldO1xuICAgICAgaWYgKCFhdHQuc3R1Yikge1xuICAgICAgICB2YXIgZGF0YSA9IGF0dC5kYXRhO1xuICAgICAgICBkZWxldGUgYXR0LmRhdGE7XG4gICAgICAgIGF0dC5yZXZwb3MgPSBwYXJzZUludCh3aW5uaW5nUmV2JCQxLCAxMCk7XG4gICAgICAgIHZhciBkaWdlc3QgPSBhdHQuZGlnZXN0O1xuICAgICAgICBzYXZlQXR0YWNobWVudChkaWdlc3QsIGRhdGEsIGF0dGFjaG1lbnRTYXZlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Eb25lKys7XG4gICAgICAgIGNvbGxlY3RSZXN1bHRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBtYXAgc2VxcyB0byBhdHRhY2htZW50IGRpZ2VzdHMsIHdoaWNoXG4gIC8vIHdlIHdpbGwgbmVlZCBsYXRlciBkdXJpbmcgY29tcGFjdGlvblxuICBmdW5jdGlvbiBpbnNlcnRBdHRhY2htZW50TWFwcGluZ3MoZG9jSW5mbywgc2VxLCBjYWxsYmFjaykge1xuXG4gICAgdmFyIGF0dHNBZGRlZCA9IDA7XG4gICAgdmFyIGF0dHNUb0FkZCA9IE9iamVjdC5rZXlzKGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMgfHwge30pO1xuXG4gICAgaWYgKCFhdHRzVG9BZGQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0RvbmUoKSB7XG4gICAgICBpZiAoKythdHRzQWRkZWQgPT09IGF0dHNUb0FkZC5sZW5ndGgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQoYXR0KSB7XG4gICAgICB2YXIgZGlnZXN0ID0gZG9jSW5mby5kYXRhLl9hdHRhY2htZW50c1thdHRdLmRpZ2VzdDtcbiAgICAgIHZhciByZXEgPSBhdHRhY2hBbmRTZXFTdG9yZS5wdXQoe1xuICAgICAgICBzZXE6IHNlcSxcbiAgICAgICAgZGlnZXN0U2VxOiBkaWdlc3QgKyAnOjonICsgc2VxXG4gICAgICB9KTtcblxuICAgICAgcmVxLm9uc3VjY2VzcyA9IGNoZWNrRG9uZTtcbiAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gdGhpcyBjYWxsYmFjayBpcyBmb3IgYSBjb25zdGFpbnQgZXJyb3IsIHdoaWNoIHdlIGlnbm9yZVxuICAgICAgICAvLyBiZWNhdXNlIHRoaXMgZG9jaWQvcmV2IGhhcyBhbHJlYWR5IGJlZW4gYXNzb2NpYXRlZCB3aXRoXG4gICAgICAgIC8vIHRoZSBkaWdlc3QgKGUuZy4gd2hlbiBuZXdfZWRpdHMgPT0gZmFsc2UpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gYXZvaWQgdHJhbnNhY3Rpb24gYWJvcnRcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gYXZvaWQgdHJhbnNhY3Rpb24gb25lcnJvclxuICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0c1RvQWRkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhZGQoYXR0c1RvQWRkW2ldKTsgLy8gZG8gaW4gcGFyYWxsZWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlQXR0YWNobWVudChkaWdlc3QsIGRhdGEsIGNhbGxiYWNrKSB7XG5cblxuICAgIHZhciBnZXRLZXlSZXEgPSBhdHRhY2hTdG9yZS5jb3VudChkaWdlc3QpO1xuICAgIGdldEtleVJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGNvdW50ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpOyAvLyBhbHJlYWR5IGV4aXN0c1xuICAgICAgfVxuICAgICAgdmFyIG5ld0F0dCA9IHtcbiAgICAgICAgZGlnZXN0OiBkaWdlc3QsXG4gICAgICAgIGJvZHk6IGRhdGFcbiAgICAgIH07XG4gICAgICB2YXIgcHV0UmVxID0gYXR0YWNoU3RvcmUucHV0KG5ld0F0dCk7XG4gICAgICBwdXRSZXEub25zdWNjZXNzID0gY2FsbGJhY2s7XG4gICAgfTtcbiAgfVxufVxuXG4vLyBBYnN0cmFjdGlvbiBvdmVyIElEQkN1cnNvciBhbmQgZ2V0QWxsKCkvZ2V0QWxsS2V5cygpIHRoYXQgYWxsb3dzIHVzIHRvIGJhdGNoIG91ciBvcGVyYXRpb25zXG4vLyB3aGlsZSBmYWxsaW5nIGJhY2sgdG8gYSBub3JtYWwgSURCQ3Vyc29yIG9wZXJhdGlvbiBvbiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgZ2V0QWxsKCkgb3Jcbi8vIGdldEFsbEtleXMoKS4gVGhpcyBhbGxvd3MgZm9yIGEgbXVjaCBmYXN0ZXIgaW1wbGVtZW50YXRpb24gdGhhbiBqdXN0IHN0cmFpZ2h0LXVwIGN1cnNvcnMsIGJlY2F1c2Vcbi8vIHdlJ3JlIG5vdCBwcm9jZXNzaW5nIGVhY2ggZG9jdW1lbnQgb25lLWF0LWEtdGltZS5cbmZ1bmN0aW9uIHJ1bkJhdGNoZWRDdXJzb3Iob2JqZWN0U3RvcmUsIGtleVJhbmdlLCBkZXNjZW5kaW5nLCBiYXRjaFNpemUsIG9uQmF0Y2gpIHtcblxuICBpZiAoYmF0Y2hTaXplID09PSAtMSkge1xuICAgIGJhdGNoU2l6ZSA9IDEwMDA7XG4gIH1cblxuICAvLyBCYWlsIG91dCBvZiBnZXRBbGwoKS9nZXRBbGxLZXlzKCkgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgLy8gMSkgZWl0aGVyIG1ldGhvZCBpcyB1bnN1cHBvcnRlZCAtIHdlIG5lZWQgYm90aFxuICAvLyAyKSBiYXRjaFNpemUgaXMgMSAobWlnaHQgYXMgd2VsbCB1c2UgSURCQ3Vyc29yKVxuICAvLyAzKSBkZXNjZW5kaW5nIOKAkyBubyByZWFsIHdheSB0byBkbyB0aGlzIHZpYSBnZXRBbGwoKS9nZXRBbGxLZXlzKClcblxuICB2YXIgdXNlR2V0QWxsID0gdHlwZW9mIG9iamVjdFN0b3JlLmdldEFsbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBvYmplY3RTdG9yZS5nZXRBbGxLZXlzID09PSAnZnVuY3Rpb24nICYmXG4gICAgYmF0Y2hTaXplID4gMSAmJiAhZGVzY2VuZGluZztcblxuICB2YXIga2V5c0JhdGNoO1xuICB2YXIgdmFsdWVzQmF0Y2g7XG4gIHZhciBwc2V1ZG9DdXJzb3I7XG5cbiAgZnVuY3Rpb24gb25HZXRBbGwoZSkge1xuICAgIHZhbHVlc0JhdGNoID0gZS50YXJnZXQucmVzdWx0O1xuICAgIGlmIChrZXlzQmF0Y2gpIHtcbiAgICAgIG9uQmF0Y2goa2V5c0JhdGNoLCB2YWx1ZXNCYXRjaCwgcHNldWRvQ3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkdldEFsbEtleXMoZSkge1xuICAgIGtleXNCYXRjaCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICBpZiAodmFsdWVzQmF0Y2gpIHtcbiAgICAgIG9uQmF0Y2goa2V5c0JhdGNoLCB2YWx1ZXNCYXRjaCwgcHNldWRvQ3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51ZVBzZXVkb0N1cnNvcigpIHtcbiAgICBpZiAoIWtleXNCYXRjaC5sZW5ndGgpIHsgLy8gbm8gbW9yZSByZXN1bHRzXG4gICAgICByZXR1cm4gb25CYXRjaCgpO1xuICAgIH1cbiAgICAvLyBmZXRjaCBuZXh0IGJhdGNoLCBleGNsdXNpdmUgc3RhcnRcbiAgICB2YXIgbGFzdEtleSA9IGtleXNCYXRjaFtrZXlzQmF0Y2gubGVuZ3RoIC0gMV07XG4gICAgdmFyIG5ld0tleVJhbmdlO1xuICAgIGlmIChrZXlSYW5nZSAmJiBrZXlSYW5nZS51cHBlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3S2V5UmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChsYXN0S2V5LCBrZXlSYW5nZS51cHBlcixcbiAgICAgICAgICB0cnVlLCBrZXlSYW5nZS51cHBlck9wZW4pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSBcIkRhdGFFcnJvclwiICYmIGUuY29kZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvbkJhdGNoKCk7IC8vIHdlJ3JlIGRvbmUsIHN0YXJ0a2V5IGFuZCBlbmRrZXkgYXJlIGVxdWFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5UmFuZ2UgPSBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGxhc3RLZXksIHRydWUpO1xuICAgIH1cbiAgICBrZXlSYW5nZSA9IG5ld0tleVJhbmdlO1xuICAgIGtleXNCYXRjaCA9IG51bGw7XG4gICAgdmFsdWVzQmF0Y2ggPSBudWxsO1xuICAgIG9iamVjdFN0b3JlLmdldEFsbChrZXlSYW5nZSwgYmF0Y2hTaXplKS5vbnN1Y2Nlc3MgPSBvbkdldEFsbDtcbiAgICBvYmplY3RTdG9yZS5nZXRBbGxLZXlzKGtleVJhbmdlLCBiYXRjaFNpemUpLm9uc3VjY2VzcyA9IG9uR2V0QWxsS2V5cztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ3Vyc29yKGUpIHtcbiAgICB2YXIgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgIGlmICghY3Vyc29yKSB7IC8vIGRvbmVcbiAgICAgIHJldHVybiBvbkJhdGNoKCk7XG4gICAgfVxuICAgIC8vIHJlZ3VsYXIgSURCQ3Vyc29yIGFjdHMgbGlrZSBhIGJhdGNoIHdoZXJlIGJhdGNoIHNpemUgaXMgYWx3YXlzIDFcbiAgICBvbkJhdGNoKFtjdXJzb3Iua2V5XSwgW2N1cnNvci52YWx1ZV0sIGN1cnNvcik7XG4gIH1cblxuICBpZiAodXNlR2V0QWxsKSB7XG4gICAgcHNldWRvQ3Vyc29yID0ge1wiY29udGludWVcIjogY29udGludWVQc2V1ZG9DdXJzb3J9O1xuICAgIG9iamVjdFN0b3JlLmdldEFsbChrZXlSYW5nZSwgYmF0Y2hTaXplKS5vbnN1Y2Nlc3MgPSBvbkdldEFsbDtcbiAgICBvYmplY3RTdG9yZS5nZXRBbGxLZXlzKGtleVJhbmdlLCBiYXRjaFNpemUpLm9uc3VjY2VzcyA9IG9uR2V0QWxsS2V5cztcbiAgfSBlbHNlIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcihrZXlSYW5nZSwgJ3ByZXYnKS5vbnN1Y2Nlc3MgPSBvbkN1cnNvcjtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlKS5vbnN1Y2Nlc3MgPSBvbkN1cnNvcjtcbiAgfVxufVxuXG4vLyBzaW1wbGUgc2hpbSBmb3Igb2JqZWN0U3RvcmUuZ2V0QWxsKCksIGZhbGxpbmcgYmFjayB0byBJREJDdXJzb3JcbmZ1bmN0aW9uIGdldEFsbChvYmplY3RTdG9yZSwga2V5UmFuZ2UsIG9uU3VjY2Vzcykge1xuICBpZiAodHlwZW9mIG9iamVjdFN0b3JlLmdldEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHVzZSBuYXRpdmUgZ2V0QWxsXG4gICAgb2JqZWN0U3RvcmUuZ2V0QWxsKGtleVJhbmdlKS5vbnN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGZhbGwgYmFjayB0byBjdXJzb3JzXG4gIHZhciB2YWx1ZXMgPSBbXTtcblxuICBmdW5jdGlvbiBvbkN1cnNvcihlKSB7XG4gICAgdmFyIGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICBpZiAoY3Vyc29yKSB7XG4gICAgICB2YWx1ZXMucHVzaChjdXJzb3IudmFsdWUpO1xuICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHJlc3VsdDogdmFsdWVzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9iamVjdFN0b3JlLm9wZW5DdXJzb3Ioa2V5UmFuZ2UpLm9uc3VjY2VzcyA9IG9uQ3Vyc29yO1xufVxuXG5mdW5jdGlvbiBhbGxEb2NzS2V5cyhrZXlzLCBkb2NTdG9yZSwgb25CYXRjaCkge1xuICAvLyBJdCdzIG5vdCBndWFyYW50ZWQgdG8gYmUgcmV0dXJuZWQgaW4gcmlnaHQgb3JkZXIgIFxuICB2YXIgdmFsdWVzQmF0Y2ggPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuICB2YXIgY291bnQgPSAwO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICBkb2NTdG9yZS5nZXQoa2V5KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQucmVzdWx0KSB7XG4gICAgICAgIHZhbHVlc0JhdGNoW2luZGV4XSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXNCYXRjaFtpbmRleF0gPSB7a2V5OiBrZXksIGVycm9yOiAnbm90X2ZvdW5kJ307XG4gICAgICB9XG4gICAgICBjb3VudCsrO1xuICAgICAgaWYgKGNvdW50ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICBvbkJhdGNoKGtleXMsIHZhbHVlc0JhdGNoLCB7fSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVJhbmdlKHN0YXJ0LCBlbmQsIGluY2x1c2l2ZUVuZCwga2V5LCBkZXNjZW5kaW5nKSB7XG4gIHRyeSB7XG4gICAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlLmJvdW5kKGVuZCwgc3RhcnQsICFpbmNsdXNpdmVFbmQsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZS5ib3VuZChzdGFydCwgZW5kLCBmYWxzZSwgIWluY2x1c2l2ZUVuZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGFydCkge1xuICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlLnVwcGVyQm91bmQoc3RhcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlLmxvd2VyQm91bmQoc3RhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZW5kKSB7XG4gICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICByZXR1cm4gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChlbmQsICFpbmNsdXNpdmVFbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlLnVwcGVyQm91bmQoZW5kLCAhaW5jbHVzaXZlRW5kKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIElEQktleVJhbmdlLm9ubHkoa2V5KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaWRiQWxsRG9jcyhvcHRzLCBpZGIsIGNhbGxiYWNrKSB7XG4gIHZhciBzdGFydCA9ICdzdGFydGtleScgaW4gb3B0cyA/IG9wdHMuc3RhcnRrZXkgOiBmYWxzZTtcbiAgdmFyIGVuZCA9ICdlbmRrZXknIGluIG9wdHMgPyBvcHRzLmVuZGtleSA6IGZhbHNlO1xuICB2YXIga2V5ID0gJ2tleScgaW4gb3B0cyA/IG9wdHMua2V5IDogZmFsc2U7XG4gIHZhciBrZXlzID0gJ2tleXMnIGluIG9wdHMgPyBvcHRzLmtleXMgOiBmYWxzZTsgXG4gIHZhciBza2lwID0gb3B0cy5za2lwIHx8IDA7XG4gIHZhciBsaW1pdCA9IHR5cGVvZiBvcHRzLmxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMubGltaXQgOiAtMTtcbiAgdmFyIGluY2x1c2l2ZUVuZCA9IG9wdHMuaW5jbHVzaXZlX2VuZCAhPT0gZmFsc2U7XG5cbiAgdmFyIGtleVJhbmdlIDsgXG4gIHZhciBrZXlSYW5nZUVycm9yO1xuICBpZiAoIWtleXMpIHtcbiAgICBrZXlSYW5nZSA9IGNyZWF0ZUtleVJhbmdlKHN0YXJ0LCBlbmQsIGluY2x1c2l2ZUVuZCwga2V5LCBvcHRzLmRlc2NlbmRpbmcpO1xuICAgIGtleVJhbmdlRXJyb3IgPSBrZXlSYW5nZSAmJiBrZXlSYW5nZS5lcnJvcjtcbiAgICBpZiAoa2V5UmFuZ2VFcnJvciAmJiBcbiAgICAgICEoa2V5UmFuZ2VFcnJvci5uYW1lID09PSBcIkRhdGFFcnJvclwiICYmIGtleVJhbmdlRXJyb3IuY29kZSA9PT0gMCkpIHtcbiAgICAgIC8vIERhdGFFcnJvciB3aXRoIGVycm9yIGNvZGUgMCBpbmRpY2F0ZXMgc3RhcnQgaXMgbGVzcyB0aGFuIGVuZCwgc29cbiAgICAgIC8vIGNhbiBqdXN0IGRvIGFuIGVtcHR5IHF1ZXJ5LiBFbHNlIG5lZWQgdG8gdGhyb3dcbiAgICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihJREJfRVJST1IsXG4gICAgICAgIGtleVJhbmdlRXJyb3IubmFtZSwga2V5UmFuZ2VFcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0b3JlcyA9IFtET0NfU1RPUkUsIEJZX1NFUV9TVE9SRSwgTUVUQV9TVE9SRV07XG5cbiAgaWYgKG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICBzdG9yZXMucHVzaChBVFRBQ0hfU1RPUkUpO1xuICB9XG4gIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBzdG9yZXMsICdyZWFkb25seScpO1xuICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gIH1cbiAgdmFyIHR4biA9IHR4blJlc3VsdC50eG47XG4gIHR4bi5vbmNvbXBsZXRlID0gb25UeG5Db21wbGV0ZTtcbiAgdHhuLm9uYWJvcnQgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gIHZhciBkb2NTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpO1xuICB2YXIgc2VxU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcbiAgdmFyIG1ldGFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShNRVRBX1NUT1JFKTtcbiAgdmFyIGRvY0lkUmV2SW5kZXggPSBzZXFTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKTtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIGRvY0NvdW50O1xuICB2YXIgdXBkYXRlU2VxO1xuXG4gIG1ldGFTdG9yZS5nZXQoTUVUQV9TVE9SRSkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICBkb2NDb3VudCA9IGUudGFyZ2V0LnJlc3VsdC5kb2NDb3VudDtcbiAgfTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKG9wdHMudXBkYXRlX3NlcSkge1xuICAgIGdldE1heFVwZGF0ZVNlcShzZXFTdG9yZSwgZnVuY3Rpb24gKGUpIHsgXG4gICAgICBpZiAoZS50YXJnZXQucmVzdWx0ICYmIGUudGFyZ2V0LnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHVwZGF0ZVNlcSA9IGUudGFyZ2V0LnJlc3VsdFswXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1heFVwZGF0ZVNlcShvYmplY3RTdG9yZSwgb25TdWNjZXNzKSB7XG4gICAgZnVuY3Rpb24gb25DdXJzb3IoZSkge1xuICAgICAgdmFyIGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHZhciBtYXhLZXkgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoY3Vyc29yICYmIGN1cnNvci5rZXkpIHtcbiAgICAgICAgbWF4S2V5ID0gY3Vyc29yLmtleTtcbiAgICAgIH0gXG4gICAgICByZXR1cm4gb25TdWNjZXNzKHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgcmVzdWx0OiBbbWF4S2V5XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcihudWxsLCAncHJldicpLm9uc3VjY2VzcyA9IG9uQ3Vyc29yO1xuICB9XG5cbiAgLy8gaWYgdGhlIHVzZXIgc3BlY2lmaWVzIGluY2x1ZGVfZG9jcz10cnVlLCB0aGVuIHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gYmxvY2sgdGhlIG1haW4gY3Vyc29yIHdoaWxlIHdlJ3JlIGZldGNoaW5nIHRoZSBkb2NcbiAgZnVuY3Rpb24gZmV0Y2hEb2NBc3luY2hyb25vdXNseShtZXRhZGF0YSwgcm93LCB3aW5uaW5nUmV2JCQxKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhLmlkICsgXCI6OlwiICsgd2lubmluZ1JldiQkMTtcbiAgICBkb2NJZFJldkluZGV4LmdldChrZXkpLm9uc3VjY2VzcyA9ICBmdW5jdGlvbiBvbkdldERvYyhlKSB7XG4gICAgICByb3cuZG9jID0gZGVjb2RlRG9jKGUudGFyZ2V0LnJlc3VsdCkgfHwge307XG4gICAgICBpZiAob3B0cy5jb25mbGljdHMpIHtcbiAgICAgICAgdmFyIGNvbmZsaWN0cyA9IGNvbGxlY3RDb25mbGljdHMobWV0YWRhdGEpO1xuICAgICAgICBpZiAoY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgICAgIHJvdy5kb2MuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmV0Y2hBdHRhY2htZW50c0lmTmVjZXNzYXJ5KHJvdy5kb2MsIG9wdHMsIHR4bik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbERvY3NJbm5lcih3aW5uaW5nUmV2JCQxLCBtZXRhZGF0YSkge1xuICAgIHZhciByb3cgPSB7XG4gICAgICBpZDogbWV0YWRhdGEuaWQsXG4gICAgICBrZXk6IG1ldGFkYXRhLmlkLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmV2OiB3aW5uaW5nUmV2JCQxXG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgZGVsZXRlZCA9IG1ldGFkYXRhLmRlbGV0ZWQ7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgIGlmIChrZXlzKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChyb3cpO1xuICAgICAgICAvLyBkZWxldGVkIGRvY3MgYXJlIG9rYXkgd2l0aCBcImtleXNcIiByZXF1ZXN0c1xuICAgICAgICByb3cudmFsdWUuZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIHJvdy5kb2MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2tpcC0tIDw9IDApIHtcbiAgICAgIHJlc3VsdHMucHVzaChyb3cpO1xuICAgICAgaWYgKG9wdHMuaW5jbHVkZV9kb2NzKSB7XG4gICAgICAgIGZldGNoRG9jQXN5bmNocm9ub3VzbHkobWV0YWRhdGEsIHJvdywgd2lubmluZ1JldiQkMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0JhdGNoKGJhdGNoVmFsdWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJhdGNoVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IGxpbWl0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdmFyIGJhdGNoVmFsdWUgPSBiYXRjaFZhbHVlc1tpXTtcbiAgICAgIGlmIChiYXRjaFZhbHVlLmVycm9yICYmIGtleXMpIHtcbiAgICAgICAgLy8ga2V5IHdhcyBub3QgZm91bmQgd2l0aCBcImtleXNcIiByZXF1ZXN0c1xuICAgICAgICByZXN1bHRzLnB1c2goYmF0Y2hWYWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIG1ldGFkYXRhID0gZGVjb2RlTWV0YWRhdGEoYmF0Y2hWYWx1ZSk7XG4gICAgICB2YXIgd2lubmluZ1JldiQkMSA9IG1ldGFkYXRhLndpbm5pbmdSZXY7XG4gICAgICBhbGxEb2NzSW5uZXIod2lubmluZ1JldiQkMSwgbWV0YWRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmF0Y2goYmF0Y2hLZXlzLCBiYXRjaFZhbHVlcywgY3Vyc29yKSB7XG4gICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvY2Vzc0JhdGNoKGJhdGNoVmFsdWVzKTtcbiAgICBpZiAocmVzdWx0cy5sZW5ndGggPCBsaW1pdCkge1xuICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25HZXRBbGwoZSkge1xuICAgIHZhciB2YWx1ZXMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgaWYgKG9wdHMuZGVzY2VuZGluZykge1xuICAgICAgdmFsdWVzID0gdmFsdWVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcHJvY2Vzc0JhdGNoKHZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlc3VsdHNSZWFkeSgpIHtcbiAgICB2YXIgcmV0dXJuVmFsID0ge1xuICAgICAgdG90YWxfcm93czogZG9jQ291bnQsXG4gICAgICBvZmZzZXQ6IG9wdHMuc2tpcCxcbiAgICAgIHJvd3M6IHJlc3VsdHNcbiAgICB9O1xuICAgIFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChvcHRzLnVwZGF0ZV9zZXEgJiYgdXBkYXRlU2VxICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblZhbC51cGRhdGVfc2VxID0gdXBkYXRlU2VxO1xuICAgIH1cbiAgICBjYWxsYmFjayhudWxsLCByZXR1cm5WYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UeG5Db21wbGV0ZSgpIHtcbiAgICBpZiAob3B0cy5hdHRhY2htZW50cykge1xuICAgICAgcG9zdFByb2Nlc3NBdHRhY2htZW50cyhyZXN1bHRzLCBvcHRzLmJpbmFyeSkudGhlbihvblJlc3VsdHNSZWFkeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVzdWx0c1JlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZG9uJ3QgYm90aGVyIGRvaW5nIGFueSByZXF1ZXN0cyBpZiBzdGFydCA+IGVuZCBvciBsaW1pdCA9PT0gMFxuICBpZiAoa2V5UmFuZ2VFcnJvciB8fCBsaW1pdCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoa2V5cykge1xuICAgIHJldHVybiBhbGxEb2NzS2V5cyhvcHRzLmtleXMsIGRvY1N0b3JlLCBvbkJhdGNoKTtcbiAgfVxuICBpZiAobGltaXQgPT09IC0xKSB7IC8vIGp1c3QgZmV0Y2ggZXZlcnl0aGluZ1xuICAgIHJldHVybiBnZXRBbGwoZG9jU3RvcmUsIGtleVJhbmdlLCBvbkdldEFsbCk7XG4gIH1cbiAgLy8gZWxzZSBkbyBhIGN1cnNvclxuICAvLyBjaG9vc2UgYSBiYXRjaCBzaXplIGJhc2VkIG9uIHRoZSBza2lwLCBzaW5jZSB3ZSdsbCBuZWVkIHRvIHNraXAgdGhhdCBtYW55XG4gIHJ1bkJhdGNoZWRDdXJzb3IoZG9jU3RvcmUsIGtleVJhbmdlLCBvcHRzLmRlc2NlbmRpbmcsIGxpbWl0ICsgc2tpcCwgb25CYXRjaCk7XG59XG5cbi8vXG4vLyBCbG9icyBhcmUgbm90IHN1cHBvcnRlZCBpbiBhbGwgdmVyc2lvbnMgb2YgSW5kZXhlZERCLCBub3RhYmx5XG4vLyBDaHJvbWUgPDM3IGFuZCBBbmRyb2lkIDw1LiBJbiB0aG9zZSB2ZXJzaW9ucywgc3RvcmluZyBhIGJsb2Igd2lsbCB0aHJvdy5cbi8vXG4vLyBWYXJpb3VzIG90aGVyIGJsb2IgYnVncyBleGlzdCBpbiBDaHJvbWUgdjM3LTQyIChpbmNsdXNpdmUpLlxuLy8gRGV0ZWN0aW5nIHRoZW0gaXMgZXhwZW5zaXZlIGFuZCBjb25mdXNpbmcgdG8gdXNlcnMsIGFuZCBDaHJvbWUgMzctNDJcbi8vIGlzIGF0IHZlcnkgbG93IHVzYWdlIHdvcmxkd2lkZSwgc28gd2UgZG8gYSBoYWNreSB1c2VyQWdlbnQgY2hlY2sgaW5zdGVhZC5cbi8vXG4vLyBjb250ZW50LXR5cGUgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDA4MTIwXG4vLyA0MDQgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3OTE2XG4vLyBGaWxlUmVhZGVyIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzgzNlxuLy9cbmZ1bmN0aW9uIGNoZWNrQmxvYlN1cHBvcnQodHhuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHZhciBibG9iJCQxID0gY3JlYXRlQmxvYihbJyddKTtcbiAgICB2YXIgcmVxID0gdHhuLm9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpLnB1dChibG9iJCQxLCAna2V5Jyk7XG5cbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1hdGNoZWRDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICAgIHZhciBtYXRjaGVkRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcbiAgICAgIC8vIE1TIEVkZ2UgcHJldGVuZHMgdG8gYmUgQ2hyb21lIDQyOlxuICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9oaDg2OTMwMSUyOHY9dnMuODUlMjkuYXNweFxuICAgICAgcmVzb2x2ZShtYXRjaGVkRWRnZSB8fCAhbWF0Y2hlZENocm9tZSB8fFxuICAgICAgICBwYXJzZUludChtYXRjaGVkQ2hyb21lWzFdLCAxMCkgPj0gNDMpO1xuICAgIH07XG5cbiAgICByZXEub25lcnJvciA9IHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3IsIHNvIGFzc3VtZSB1bnN1cHBvcnRlZFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY291bnREb2NzKHR4biwgY2IpIHtcbiAgdmFyIGluZGV4ID0gdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSkuaW5kZXgoJ2RlbGV0ZWRPckxvY2FsJyk7XG4gIGluZGV4LmNvdW50KElEQktleVJhbmdlLm9ubHkoJzAnKSkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjYihlLnRhcmdldC5yZXN1bHQpO1xuICB9O1xufVxuXG4vLyBUaGlzIHRhc2sgcXVldWUgZW5zdXJlcyB0aGF0IElEQiBvcGVuIGNhbGxzIGFyZSBkb25lIGluIHRoZWlyIG93biB0aWNrXG5cbnZhciBydW5uaW5nID0gZmFsc2U7XG52YXIgcXVldWUgPSBbXTtcblxuZnVuY3Rpb24gdHJ5Q29kZShmdW4sIGVyciwgcmVzLCBQb3VjaERCKSB7XG4gIHRyeSB7XG4gICAgZnVuKGVyciwgcmVzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiwgYnV0IGluIHNvbWUgb2RkIGNhc2VzXG4gICAgLy8gSW5kZXhlZERCIGltcGxlbWVudGF0aW9ucyBtaWdodCB0aHJvdyBhIHN5bmNcbiAgICAvLyBlcnJvciwgaW4gd2hpY2ggY2FzZSB0aGlzIHdpbGwgYXQgbGVhc3QgbG9nIGl0LlxuICAgIFBvdWNoREIuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TmV4dCgpIHtcbiAgaWYgKHJ1bm5pbmcgfHwgIXF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWUuc2hpZnQoKSgpO1xufVxuXG5mdW5jdGlvbiBlbnF1ZXVlVGFzayhhY3Rpb24sIGNhbGxiYWNrLCBQb3VjaERCKSB7XG4gIHF1ZXVlLnB1c2goZnVuY3Rpb24gcnVuQWN0aW9uKCkge1xuICAgIGFjdGlvbihmdW5jdGlvbiBydW5DYWxsYmFjayhlcnIsIHJlcykge1xuICAgICAgdHJ5Q29kZShjYWxsYmFjaywgZXJyLCByZXMsIFBvdWNoREIpO1xuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgaW1tZWRpYXRlKGZ1bmN0aW9uIHJ1bk5leHQoKSB7XG4gICAgICAgIGFwcGx5TmV4dChQb3VjaERCKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgYXBwbHlOZXh0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZXMob3B0cywgYXBpLCBkYk5hbWUsIGlkYikge1xuICBvcHRzID0gY2xvbmUob3B0cyk7XG5cbiAgaWYgKG9wdHMuY29udGludW91cykge1xuICAgIHZhciBpZCA9IGRiTmFtZSArICc6JyArIHV1aWQoKTtcbiAgICBjaGFuZ2VzSGFuZGxlci5hZGRMaXN0ZW5lcihkYk5hbWUsIGlkLCBhcGksIG9wdHMpO1xuICAgIGNoYW5nZXNIYW5kbGVyLm5vdGlmeShkYk5hbWUpO1xuICAgIHJldHVybiB7XG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbmdlc0hhbmRsZXIucmVtb3ZlTGlzdGVuZXIoZGJOYW1lLCBpZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBkb2NJZHMgPSBvcHRzLmRvY19pZHMgJiYgbmV3IEV4cG9ydGVkU2V0KG9wdHMuZG9jX2lkcyk7XG5cbiAgb3B0cy5zaW5jZSA9IG9wdHMuc2luY2UgfHwgMDtcbiAgdmFyIGxhc3RTZXEgPSBvcHRzLnNpbmNlO1xuXG4gIHZhciBsaW1pdCA9ICdsaW1pdCcgaW4gb3B0cyA/IG9wdHMubGltaXQgOiAtMTtcbiAgaWYgKGxpbWl0ID09PSAwKSB7XG4gICAgbGltaXQgPSAxOyAvLyBwZXIgQ291Y2hEQiBfY2hhbmdlcyBzcGVjXG4gIH1cblxuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB2YXIgbnVtUmVzdWx0cyA9IDA7XG4gIHZhciBmaWx0ZXIgPSBmaWx0ZXJDaGFuZ2Uob3B0cyk7XG4gIHZhciBkb2NJZHNUb01ldGFkYXRhID0gbmV3IEV4cG9ydGVkTWFwKCk7XG5cbiAgdmFyIHR4bjtcbiAgdmFyIGJ5U2VxU3RvcmU7XG4gIHZhciBkb2NTdG9yZTtcbiAgdmFyIGRvY0lkUmV2SW5kZXg7XG5cbiAgZnVuY3Rpb24gb25CYXRjaChiYXRjaEtleXMsIGJhdGNoVmFsdWVzLCBjdXJzb3IpIHtcbiAgICBpZiAoIWN1cnNvciB8fCAhYmF0Y2hLZXlzLmxlbmd0aCkgeyAvLyBkb25lXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHdpbm5pbmdEb2NzID0gbmV3IEFycmF5KGJhdGNoS2V5cy5sZW5ndGgpO1xuICAgIHZhciBtZXRhZGF0YXMgPSBuZXcgQXJyYXkoYmF0Y2hLZXlzLmxlbmd0aCk7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTWV0YWRhdGFBbmRXaW5uaW5nRG9jKG1ldGFkYXRhLCB3aW5uaW5nRG9jKSB7XG4gICAgICB2YXIgY2hhbmdlID0gb3B0cy5wcm9jZXNzQ2hhbmdlKHdpbm5pbmdEb2MsIG1ldGFkYXRhLCBvcHRzKTtcbiAgICAgIGxhc3RTZXEgPSBjaGFuZ2Uuc2VxID0gbWV0YWRhdGEuc2VxO1xuXG4gICAgICB2YXIgZmlsdGVyZWQgPSBmaWx0ZXIoY2hhbmdlKTtcbiAgICAgIGlmICh0eXBlb2YgZmlsdGVyZWQgPT09ICdvYmplY3QnKSB7IC8vIGFueXRoaW5nIGJ1dCB0cnVlL2ZhbHNlIGluZGljYXRlcyBlcnJvclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmlsdGVyZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcmVkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIG51bVJlc3VsdHMrKztcbiAgICAgIGlmIChvcHRzLnJldHVybl9kb2NzKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChjaGFuZ2UpO1xuICAgICAgfVxuICAgICAgLy8gcHJvY2VzcyB0aGUgYXR0YWNobWVudCBpbW1lZGlhdGVseVxuICAgICAgLy8gZm9yIHRoZSBiZW5lZml0IG9mIGxpdmUgbGlzdGVuZXJzXG4gICAgICBpZiAob3B0cy5hdHRhY2htZW50cyAmJiBvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBmZXRjaEF0dGFjaG1lbnRzSWZOZWNlc3Nhcnkod2lubmluZ0RvYywgb3B0cywgdHhuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwb3N0UHJvY2Vzc0F0dGFjaG1lbnRzKFtjaGFuZ2VdLCBvcHRzLmJpbmFyeSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2hhbmdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhbmdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJhdGNoRG9uZSgpIHtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHdpbm5pbmdEb2NzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChudW1SZXN1bHRzID09PSBsaW1pdCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aW5uaW5nRG9jID0gd2lubmluZ0RvY3NbaV07XG4gICAgICAgIGlmICghd2lubmluZ0RvYykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IG1ldGFkYXRhc1tpXTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9jZXNzTWV0YWRhdGFBbmRXaW5uaW5nRG9jKG1ldGFkYXRhLCB3aW5uaW5nRG9jKSk7XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGFuZ2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZXNbaV0pIHtcbiAgICAgICAgICAgIG9wdHMub25DaGFuZ2UoY2hhbmdlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChvcHRzLmNvbXBsZXRlKTtcblxuICAgICAgaWYgKG51bVJlc3VsdHMgIT09IGxpbWl0KSB7XG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZldGNoIGFsbCBtZXRhZGF0YXMvd2lubmluZ2RvY3MgZnJvbSB0aGlzIGJhdGNoIGluIHBhcmFsbGVsLCB0aGVuIHByb2Nlc3NcbiAgICAvLyB0aGVtIGFsbCBvbmx5IG9uY2UgYWxsIGRhdGEgaGFzIGJlZW4gY29sbGVjdGVkLiBUaGlzIGlzIGRvbmUgaW4gcGFyYWxsZWxcbiAgICAvLyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZG9pbmcgaXQgb25lLWF0LWEtdGltZS5cbiAgICB2YXIgbnVtRG9uZSA9IDA7XG4gICAgYmF0Y2hWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgIHZhciBkb2MgPSBkZWNvZGVEb2ModmFsdWUpO1xuICAgICAgdmFyIHNlcSA9IGJhdGNoS2V5c1tpXTtcbiAgICAgIGZldGNoV2lubmluZ0RvY0FuZE1ldGFkYXRhKGRvYywgc2VxLCBmdW5jdGlvbiAobWV0YWRhdGEsIHdpbm5pbmdEb2MpIHtcbiAgICAgICAgbWV0YWRhdGFzW2ldID0gbWV0YWRhdGE7XG4gICAgICAgIHdpbm5pbmdEb2NzW2ldID0gd2lubmluZ0RvYztcbiAgICAgICAgaWYgKCsrbnVtRG9uZSA9PT0gYmF0Y2hLZXlzLmxlbmd0aCkge1xuICAgICAgICAgIG9uQmF0Y2hEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25HZXRNZXRhZGF0YShkb2MsIHNlcSwgbWV0YWRhdGEsIGNiKSB7XG4gICAgaWYgKG1ldGFkYXRhLnNlcSAhPT0gc2VxKSB7XG4gICAgICAvLyBzb21lIG90aGVyIHNlcSBpcyBsYXRlclxuICAgICAgcmV0dXJuIGNiKCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGFkYXRhLndpbm5pbmdSZXYgPT09IGRvYy5fcmV2KSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSB3aW5uaW5nIGRvY1xuICAgICAgcmV0dXJuIGNiKG1ldGFkYXRhLCBkb2MpO1xuICAgIH1cblxuICAgIC8vIGZldGNoIHdpbm5pbmcgZG9jIGluIHNlcGFyYXRlIHJlcXVlc3RcbiAgICB2YXIgZG9jSWRSZXYgPSBkb2MuX2lkICsgJzo6JyArIG1ldGFkYXRhLndpbm5pbmdSZXY7XG4gICAgdmFyIHJlcSA9IGRvY0lkUmV2SW5kZXguZ2V0KGRvY0lkUmV2KTtcbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNiKG1ldGFkYXRhLCBkZWNvZGVEb2MoZS50YXJnZXQucmVzdWx0KSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoV2lubmluZ0RvY0FuZE1ldGFkYXRhKGRvYywgc2VxLCBjYikge1xuICAgIGlmIChkb2NJZHMgJiYgIWRvY0lkcy5oYXMoZG9jLl9pZCkpIHtcbiAgICAgIHJldHVybiBjYigpO1xuICAgIH1cblxuICAgIHZhciBtZXRhZGF0YSA9IGRvY0lkc1RvTWV0YWRhdGEuZ2V0KGRvYy5faWQpO1xuICAgIGlmIChtZXRhZGF0YSkgeyAvLyBjYWNoZWRcbiAgICAgIHJldHVybiBvbkdldE1ldGFkYXRhKGRvYywgc2VxLCBtZXRhZGF0YSwgY2IpO1xuICAgIH1cbiAgICAvLyBtZXRhZGF0YSBub3QgY2FjaGVkLCBoYXZlIHRvIGdvIGZldGNoIGl0XG4gICAgZG9jU3RvcmUuZ2V0KGRvYy5faWQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBtZXRhZGF0YSA9IGRlY29kZU1ldGFkYXRhKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBkb2NJZHNUb01ldGFkYXRhLnNldChkb2MuX2lkLCBtZXRhZGF0YSk7XG4gICAgICBvbkdldE1ldGFkYXRhKGRvYywgc2VxLCBtZXRhZGF0YSwgY2IpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgb3B0cy5jb21wbGV0ZShudWxsLCB7XG4gICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgbGFzdF9zZXE6IGxhc3RTZXFcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHhuQ29tcGxldGUoKSB7XG4gICAgaWYgKCFvcHRzLmNvbnRpbnVvdXMgJiYgb3B0cy5hdHRhY2htZW50cykge1xuICAgICAgLy8gY2Fubm90IGd1YXJhbnRlZSB0aGF0IHBvc3RQcm9jZXNzaW5nIHdhcyBhbHJlYWR5IGRvbmUsXG4gICAgICAvLyBzbyBkbyBpdCBhZ2FpblxuICAgICAgcG9zdFByb2Nlc3NBdHRhY2htZW50cyhyZXN1bHRzKS50aGVuKGZpbmlzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvYmplY3RTdG9yZXMgPSBbRE9DX1NUT1JFLCBCWV9TRVFfU1RPUkVdO1xuICBpZiAob3B0cy5hdHRhY2htZW50cykge1xuICAgIG9iamVjdFN0b3Jlcy5wdXNoKEFUVEFDSF9TVE9SRSk7XG4gIH1cbiAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIG9iamVjdFN0b3JlcywgJ3JlYWRvbmx5Jyk7XG4gIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICByZXR1cm4gb3B0cy5jb21wbGV0ZSh0eG5SZXN1bHQuZXJyb3IpO1xuICB9XG4gIHR4biA9IHR4blJlc3VsdC50eG47XG4gIHR4bi5vbmFib3J0ID0gaWRiRXJyb3Iob3B0cy5jb21wbGV0ZSk7XG4gIHR4bi5vbmNvbXBsZXRlID0gb25UeG5Db21wbGV0ZTtcblxuICBieVNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG4gIGRvY1N0b3JlID0gdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSk7XG4gIGRvY0lkUmV2SW5kZXggPSBieVNlcVN0b3JlLmluZGV4KCdfZG9jX2lkX3JldicpO1xuXG4gIHZhciBrZXlSYW5nZSA9IChvcHRzLnNpbmNlICYmICFvcHRzLmRlc2NlbmRpbmcpID9cbiAgICBJREJLZXlSYW5nZS5sb3dlckJvdW5kKG9wdHMuc2luY2UsIHRydWUpIDogbnVsbDtcblxuICBydW5CYXRjaGVkQ3Vyc29yKGJ5U2VxU3RvcmUsIGtleVJhbmdlLCBvcHRzLmRlc2NlbmRpbmcsIGxpbWl0LCBvbkJhdGNoKTtcbn1cblxudmFyIGNhY2hlZERCcyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xudmFyIGJsb2JTdXBwb3J0UHJvbWlzZTtcbnZhciBvcGVuUmVxTGlzdCA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuXG5mdW5jdGlvbiBJZGJQb3VjaChvcHRzLCBjYWxsYmFjaykge1xuICB2YXIgYXBpID0gdGhpcztcblxuICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAodGhpc0NhbGxiYWNrKSB7XG4gICAgaW5pdChhcGksIG9wdHMsIHRoaXNDYWxsYmFjayk7XG4gIH0sIGNhbGxiYWNrLCBhcGkuY29uc3RydWN0b3IpO1xufVxuXG5mdW5jdGlvbiBpbml0KGFwaSwgb3B0cywgY2FsbGJhY2spIHtcblxuICB2YXIgZGJOYW1lID0gb3B0cy5uYW1lO1xuXG4gIHZhciBpZGIgPSBudWxsO1xuICBhcGkuX21ldGEgPSBudWxsO1xuXG4gIC8vIGNhbGxlZCB3aGVuIGNyZWF0aW5nIGEgZnJlc2ggbmV3IGRhdGFiYXNlXG4gIGZ1bmN0aW9uIGNyZWF0ZVNjaGVtYShkYikge1xuICAgIHZhciBkb2NTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKERPQ19TVE9SRSwge2tleVBhdGggOiAnaWQnfSk7XG4gICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFLCB7YXV0b0luY3JlbWVudDogdHJ1ZX0pXG4gICAgICAuY3JlYXRlSW5kZXgoJ19kb2NfaWRfcmV2JywgJ19kb2NfaWRfcmV2Jywge3VuaXF1ZTogdHJ1ZX0pO1xuICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKEFUVEFDSF9TVE9SRSwge2tleVBhdGg6ICdkaWdlc3QnfSk7XG4gICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoTUVUQV9TVE9SRSwge2tleVBhdGg6ICdpZCcsIGF1dG9JbmNyZW1lbnQ6IGZhbHNlfSk7XG4gICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSk7XG5cbiAgICAvLyBhZGRlZCBpbiB2MlxuICAgIGRvY1N0b3JlLmNyZWF0ZUluZGV4KCdkZWxldGVkT3JMb2NhbCcsICdkZWxldGVkT3JMb2NhbCcsIHt1bmlxdWUgOiBmYWxzZX0pO1xuXG4gICAgLy8gYWRkZWQgaW4gdjNcbiAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShMT0NBTF9TVE9SRSwge2tleVBhdGg6ICdfaWQnfSk7XG5cbiAgICAvLyBhZGRlZCBpbiB2NFxuICAgIHZhciBhdHRBbmRTZXFTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKEFUVEFDSF9BTkRfU0VRX1NUT1JFLFxuICAgICAge2F1dG9JbmNyZW1lbnQ6IHRydWV9KTtcbiAgICBhdHRBbmRTZXFTdG9yZS5jcmVhdGVJbmRleCgnc2VxJywgJ3NlcScpO1xuICAgIGF0dEFuZFNlcVN0b3JlLmNyZWF0ZUluZGV4KCdkaWdlc3RTZXEnLCAnZGlnZXN0U2VxJywge3VuaXF1ZTogdHJ1ZX0pO1xuICB9XG5cbiAgLy8gbWlncmF0aW9uIHRvIHZlcnNpb24gMlxuICAvLyB1bmZvcnR1bmF0ZWx5IFwiZGVsZXRlZE9yTG9jYWxcIiBpcyBhIG1pc25vbWVyIG5vdyB0aGF0IHdlIG5vIGxvbmdlclxuICAvLyBzdG9yZSBsb2NhbCBkb2NzIGluIHRoZSBtYWluIGRvYy1zdG9yZSwgYnV0IHdoYWRkeWFnb25uYWRvXG4gIGZ1bmN0aW9uIGFkZERlbGV0ZWRPckxvY2FsSW5kZXgodHhuLCBjYWxsYmFjaykge1xuICAgIHZhciBkb2NTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpO1xuICAgIGRvY1N0b3JlLmNyZWF0ZUluZGV4KCdkZWxldGVkT3JMb2NhbCcsICdkZWxldGVkT3JMb2NhbCcsIHt1bmlxdWUgOiBmYWxzZX0pO1xuXG4gICAgZG9jU3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgdmFyIGRlbGV0ZWQgPSBpc0RlbGV0ZWQobWV0YWRhdGEpO1xuICAgICAgICBtZXRhZGF0YS5kZWxldGVkT3JMb2NhbCA9IGRlbGV0ZWQgPyBcIjFcIiA6IFwiMFwiO1xuICAgICAgICBkb2NTdG9yZS5wdXQobWV0YWRhdGEpO1xuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIG1pZ3JhdGlvbiB0byB2ZXJzaW9uIDMgKHBhcnQgMSlcbiAgZnVuY3Rpb24gY3JlYXRlTG9jYWxTdG9yZVNjaGVtYShkYikge1xuICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKExPQ0FMX1NUT1JFLCB7a2V5UGF0aDogJ19pZCd9KVxuICAgICAgLmNyZWF0ZUluZGV4KCdfZG9jX2lkX3JldicsICdfZG9jX2lkX3JldicsIHt1bmlxdWU6IHRydWV9KTtcbiAgfVxuXG4gIC8vIG1pZ3JhdGlvbiB0byB2ZXJzaW9uIDMgKHBhcnQgMilcbiAgZnVuY3Rpb24gbWlncmF0ZUxvY2FsU3RvcmUodHhuLCBjYikge1xuICAgIHZhciBsb2NhbFN0b3JlID0gdHhuLm9iamVjdFN0b3JlKExPQ0FMX1NUT1JFKTtcbiAgICB2YXIgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcbiAgICB2YXIgc2VxU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcblxuICAgIHZhciBjdXJzb3IgPSBkb2NTdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgY3Vyc29yLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgdmFyIGRvY0lkID0gbWV0YWRhdGEuaWQ7XG4gICAgICAgIHZhciBsb2NhbCA9IGlzTG9jYWxJZChkb2NJZCk7XG4gICAgICAgIHZhciByZXYkJDEgPSB3aW5uaW5nUmV2KG1ldGFkYXRhKTtcbiAgICAgICAgaWYgKGxvY2FsKSB7XG4gICAgICAgICAgdmFyIGRvY0lkUmV2ID0gZG9jSWQgKyBcIjo6XCIgKyByZXYkJDE7XG4gICAgICAgICAgLy8gcmVtb3ZlIGFsbCBzZXEgZW50cmllc1xuICAgICAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY0lkXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gZG9jSWQgKyBcIjo6XCI7XG4gICAgICAgICAgdmFyIGVuZCA9IGRvY0lkICsgXCI6On5cIjtcbiAgICAgICAgICB2YXIgaW5kZXggPSBzZXFTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKTtcbiAgICAgICAgICB2YXIgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChzdGFydCwgZW5kLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgIHZhciBzZXFDdXJzb3IgPSBpbmRleC5vcGVuQ3Vyc29yKHJhbmdlKTtcbiAgICAgICAgICBzZXFDdXJzb3Iub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlcUN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGlmICghc2VxQ3Vyc29yKSB7XG4gICAgICAgICAgICAgIC8vIGRvbmVcbiAgICAgICAgICAgICAgZG9jU3RvcmUuZGVsZXRlKGN1cnNvci5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNlcUN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGRhdGEuX2RvY19pZF9yZXYgPT09IGRvY0lkUmV2KSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yZS5wdXQoZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VxU3RvcmUuZGVsZXRlKHNlcUN1cnNvci5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgc2VxQ3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBtaWdyYXRpb24gdG8gdmVyc2lvbiA0IChwYXJ0IDEpXG4gIGZ1bmN0aW9uIGFkZEF0dGFjaEFuZFNlcVN0b3JlKGRiKSB7XG4gICAgdmFyIGF0dEFuZFNlcVN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoQVRUQUNIX0FORF9TRVFfU1RPUkUsXG4gICAgICB7YXV0b0luY3JlbWVudDogdHJ1ZX0pO1xuICAgIGF0dEFuZFNlcVN0b3JlLmNyZWF0ZUluZGV4KCdzZXEnLCAnc2VxJyk7XG4gICAgYXR0QW5kU2VxU3RvcmUuY3JlYXRlSW5kZXgoJ2RpZ2VzdFNlcScsICdkaWdlc3RTZXEnLCB7dW5pcXVlOiB0cnVlfSk7XG4gIH1cblxuICAvLyBtaWdyYXRpb24gdG8gdmVyc2lvbiA0IChwYXJ0IDIpXG4gIGZ1bmN0aW9uIG1pZ3JhdGVBdHRzQW5kU2Vxcyh0eG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG4gICAgdmFyIGF0dFN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9TVE9SRSk7XG4gICAgdmFyIGF0dEFuZFNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9BTkRfU0VRX1NUT1JFKTtcblxuICAgIC8vIG5lZWQgdG8gYWN0dWFsbHkgcG9wdWxhdGUgdGhlIHRhYmxlLiB0aGlzIGlzIHRoZSBleHBlbnNpdmUgcGFydCxcbiAgICAvLyBzbyBhcyBhbiBvcHRpbWl6YXRpb24sIGNoZWNrIGZpcnN0IHRoYXQgdGhpcyBkYXRhYmFzZSBldmVuXG4gICAgLy8gY29udGFpbnMgYXR0YWNobWVudHNcbiAgICB2YXIgcmVxID0gYXR0U3RvcmUuY291bnQoKTtcbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjb3VudCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7IC8vIGRvbmVcbiAgICAgIH1cblxuICAgICAgc2VxU3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7IC8vIGRvbmVcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9jID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICB2YXIgc2VxID0gY3Vyc29yLnByaW1hcnlLZXk7XG4gICAgICAgIHZhciBhdHRzID0gT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cyB8fCB7fSk7XG4gICAgICAgIHZhciBkaWdlc3RNYXAgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhdHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdmFyIGF0dCA9IGRvYy5fYXR0YWNobWVudHNbYXR0c1tqXV07XG4gICAgICAgICAgZGlnZXN0TWFwW2F0dC5kaWdlc3RdID0gdHJ1ZTsgLy8gdW5pcSBkaWdlc3RzLCBqdXN0IGluIGNhc2VcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlnZXN0cyA9IE9iamVjdC5rZXlzKGRpZ2VzdE1hcCk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBkaWdlc3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdmFyIGRpZ2VzdCA9IGRpZ2VzdHNbal07XG4gICAgICAgICAgYXR0QW5kU2VxU3RvcmUucHV0KHtcbiAgICAgICAgICAgIHNlcTogc2VxLFxuICAgICAgICAgICAgZGlnZXN0U2VxOiBkaWdlc3QgKyAnOjonICsgc2VxXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICAvLyBtaWdyYXRpb24gdG8gdmVyc2lvbiA1XG4gIC8vIEluc3RlYWQgb2YgcmVseWluZyBvbiBvbi10aGUtZmx5IG1pZ3JhdGlvbiBvZiBtZXRhZGF0YSxcbiAgLy8gdGhpcyBicmluZ3MgdGhlIGRvYy1zdG9yZSB0byBpdHMgbW9kZXJuIGZvcm06XG4gIC8vIC0gbWV0YWRhdGEud2lubmluZ3JldlxuICAvLyAtIG1ldGFkYXRhLnNlcVxuICAvLyAtIHN0cmluZ2lmeSB0aGUgbWV0YWRhdGEgd2hlbiBzdG9yaW5nIGl0XG4gIGZ1bmN0aW9uIG1pZ3JhdGVNZXRhZGF0YSh0eG4pIHtcblxuICAgIGZ1bmN0aW9uIGRlY29kZU1ldGFkYXRhQ29tcGF0KHN0b3JlZE9iamVjdCkge1xuICAgICAgaWYgKCFzdG9yZWRPYmplY3QuZGF0YSkge1xuICAgICAgICAvLyBvbGQgZm9ybWF0LCB3aGVuIHdlIGRpZG4ndCBzdG9yZSBpdCBzdHJpbmdpZmllZFxuICAgICAgICBzdG9yZWRPYmplY3QuZGVsZXRlZCA9IHN0b3JlZE9iamVjdC5kZWxldGVkT3JMb2NhbCA9PT0gJzEnO1xuICAgICAgICByZXR1cm4gc3RvcmVkT2JqZWN0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlY29kZU1ldGFkYXRhKHN0b3JlZE9iamVjdCk7XG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIHRoYXQgZXZlcnkgbWV0YWRhdGEgaGFzIGEgd2lubmluZ1JldiBhbmQgc2VxLFxuICAgIC8vIHdoaWNoIHdhcyBwcmV2aW91c2x5IGNyZWF0ZWQgb24tdGhlLWZseSBidXQgYmV0dGVyIHRvIG1pZ3JhdGVcbiAgICB2YXIgYnlTZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShCWV9TRVFfU1RPUkUpO1xuICAgIHZhciBkb2NTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpO1xuICAgIHZhciBjdXJzb3IgPSBkb2NTdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgY3Vyc29yLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkb25lXG4gICAgICB9XG4gICAgICB2YXIgbWV0YWRhdGEgPSBkZWNvZGVNZXRhZGF0YUNvbXBhdChjdXJzb3IudmFsdWUpO1xuXG4gICAgICBtZXRhZGF0YS53aW5uaW5nUmV2ID0gbWV0YWRhdGEud2lubmluZ1JldiB8fFxuICAgICAgICB3aW5uaW5nUmV2KG1ldGFkYXRhKTtcblxuICAgICAgZnVuY3Rpb24gZmV0Y2hNZXRhZGF0YVNlcSgpIHtcbiAgICAgICAgLy8gbWV0YWRhdGEuc2VxIHdhcyBhZGRlZCBwb3N0LTMuMi4wLCBzbyBpZiBpdCdzIG1pc3NpbmcsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gZmV0Y2ggaXQgbWFudWFsbHlcbiAgICAgICAgdmFyIHN0YXJ0ID0gbWV0YWRhdGEuaWQgKyAnOjonO1xuICAgICAgICB2YXIgZW5kID0gbWV0YWRhdGEuaWQgKyAnOjpcXHVmZmZmJztcbiAgICAgICAgdmFyIHJlcSA9IGJ5U2VxU3RvcmUuaW5kZXgoJ19kb2NfaWRfcmV2Jykub3BlbkN1cnNvcihcbiAgICAgICAgICBJREJLZXlSYW5nZS5ib3VuZChzdGFydCwgZW5kKSk7XG5cbiAgICAgICAgdmFyIG1ldGFkYXRhU2VxID0gMDtcbiAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgbWV0YWRhdGEuc2VxID0gbWV0YWRhdGFTZXE7XG4gICAgICAgICAgICByZXR1cm4gb25HZXRNZXRhZGF0YVNlcSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2VxID0gY3Vyc29yLnByaW1hcnlLZXk7XG4gICAgICAgICAgaWYgKHNlcSA+IG1ldGFkYXRhU2VxKSB7XG4gICAgICAgICAgICBtZXRhZGF0YVNlcSA9IHNlcTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uR2V0TWV0YWRhdGFTZXEoKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YVRvU3RvcmUgPSBlbmNvZGVNZXRhZGF0YShtZXRhZGF0YSxcbiAgICAgICAgICBtZXRhZGF0YS53aW5uaW5nUmV2LCBtZXRhZGF0YS5kZWxldGVkKTtcblxuICAgICAgICB2YXIgcmVxID0gZG9jU3RvcmUucHV0KG1ldGFkYXRhVG9TdG9yZSk7XG4gICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhZGF0YS5zZXEpIHtcbiAgICAgICAgcmV0dXJuIG9uR2V0TWV0YWRhdGFTZXEoKTtcbiAgICAgIH1cblxuICAgICAgZmV0Y2hNZXRhZGF0YVNlcSgpO1xuICAgIH07XG5cbiAgfVxuXG4gIGFwaS5fcmVtb3RlID0gZmFsc2U7XG4gIGFwaS50eXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnaWRiJztcbiAgfTtcblxuICBhcGkuX2lkID0gdG9Qcm9taXNlKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKG51bGwsIGFwaS5fbWV0YS5pbnN0YW5jZUlkKTtcbiAgfSk7XG5cbiAgYXBpLl9idWxrRG9jcyA9IGZ1bmN0aW9uIGlkYl9idWxrRG9jcyhyZXEsIHJlcU9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWRiQnVsa0RvY3Mob3B0cywgcmVxLCByZXFPcHRzLCBhcGksIGlkYiwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8vIEZpcnN0IHdlIGxvb2sgdXAgdGhlIG1ldGFkYXRhIGluIHRoZSBpZHMgZGF0YWJhc2UsIHRoZW4gd2UgZmV0Y2ggdGhlXG4gIC8vIGN1cnJlbnQgcmV2aXNpb24ocykgZnJvbSB0aGUgYnkgc2VxdWVuY2Ugc3RvcmVcbiAgYXBpLl9nZXQgPSBmdW5jdGlvbiBpZGJfZ2V0KGlkLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIHZhciBkb2M7XG4gICAgdmFyIG1ldGFkYXRhO1xuICAgIHZhciBlcnI7XG4gICAgdmFyIHR4biA9IG9wdHMuY3R4O1xuICAgIGlmICghdHhuKSB7XG4gICAgICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYixcbiAgICAgICAgW0RPQ19TVE9SRSwgQllfU0VRX1NUT1JFLCBBVFRBQ0hfU1RPUkVdLCAncmVhZG9ubHknKTtcbiAgICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgICB9XG4gICAgICB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwge2RvYzogZG9jLCBtZXRhZGF0YTogbWV0YWRhdGEsIGN0eDogdHhufSk7XG4gICAgfVxuXG4gICAgdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSkuZ2V0KGlkKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbWV0YWRhdGEgPSBkZWNvZGVNZXRhZGF0YShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgLy8gd2UgY2FuIGRldGVybWluZSB0aGUgcmVzdWx0IGhlcmUgaWY6XG4gICAgICAvLyAxLiB0aGVyZSBpcyBubyBzdWNoIGRvY3VtZW50XG4gICAgICAvLyAyLiB0aGUgZG9jdW1lbnQgaXMgZGVsZXRlZCBhbmQgd2UgZG9uJ3QgYXNrIGFib3V0IHNwZWNpZmljIHJldlxuICAgICAgLy8gV2hlbiB3ZSBhc2sgd2l0aCBvcHRzLnJldiB3ZSBleHBlY3QgdGhlIGFuc3dlciB0byBiZSBlaXRoZXJcbiAgICAgIC8vIGRvYyAocG9zc2libHkgd2l0aCBfZGVsZXRlZD10cnVlKSBvciBtaXNzaW5nIGVycm9yXG4gICAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICAgIGVyciA9IGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DLCAnbWlzc2luZycpO1xuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXYkJDE7XG4gICAgICBpZiAoIW9wdHMucmV2KSB7XG4gICAgICAgIHJldiQkMSA9IG1ldGFkYXRhLndpbm5pbmdSZXY7XG4gICAgICAgIHZhciBkZWxldGVkID0gaXNEZWxldGVkKG1ldGFkYXRhKTtcbiAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICBlcnIgPSBjcmVhdGVFcnJvcihNSVNTSU5HX0RPQywgXCJkZWxldGVkXCIpO1xuICAgICAgICAgIHJldHVybiBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV2JCQxID0gb3B0cy5sYXRlc3QgPyBsYXRlc3Qob3B0cy5yZXYsIG1ldGFkYXRhKSA6IG9wdHMucmV2O1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JqZWN0U3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcbiAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5pZCArICc6OicgKyByZXYkJDE7XG5cbiAgICAgIG9iamVjdFN0b3JlLmluZGV4KCdfZG9jX2lkX3JldicpLmdldChrZXkpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgIGRvYyA9IGRlY29kZURvYyhkb2MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgZXJyID0gY3JlYXRlRXJyb3IoTUlTU0lOR19ET0MsICdtaXNzaW5nJyk7XG4gICAgICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmlzaCgpO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIGFwaS5fZ2V0QXR0YWNobWVudCA9IGZ1bmN0aW9uIChkb2NJZCwgYXR0YWNoSWQsIGF0dGFjaG1lbnQsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHR4bjtcbiAgICBpZiAob3B0cy5jdHgpIHtcbiAgICAgIHR4biA9IG9wdHMuY3R4O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYixcbiAgICAgICAgW0RPQ19TVE9SRSwgQllfU0VRX1NUT1JFLCBBVFRBQ0hfU1RPUkVdLCAncmVhZG9ubHknKTtcbiAgICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgICB9XG4gICAgICB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICAgIH1cbiAgICB2YXIgZGlnZXN0ID0gYXR0YWNobWVudC5kaWdlc3Q7XG4gICAgdmFyIHR5cGUgPSBhdHRhY2htZW50LmNvbnRlbnRfdHlwZTtcblxuICAgIHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfU1RPUkUpLmdldChkaWdlc3QpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgYm9keSA9IGUudGFyZ2V0LnJlc3VsdC5ib2R5O1xuICAgICAgcmVhZEJsb2JEYXRhKGJvZHksIHR5cGUsIG9wdHMuYmluYXJ5LCBmdW5jdGlvbiAoYmxvYkRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYmxvYkRhdGEpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBhcGkuX2luZm8gPSBmdW5jdGlvbiBpZGJfaW5mbyhjYWxsYmFjaykge1xuICAgIHZhciB1cGRhdGVTZXE7XG4gICAgdmFyIGRvY0NvdW50O1xuXG4gICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIFtNRVRBX1NUT1JFLCBCWV9TRVFfU1RPUkVdLCAncmVhZG9ubHknKTtcbiAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodHhuUmVzdWx0LmVycm9yKTtcbiAgICB9XG4gICAgdmFyIHR4biA9IHR4blJlc3VsdC50eG47XG4gICAgdHhuLm9iamVjdFN0b3JlKE1FVEFfU1RPUkUpLmdldChNRVRBX1NUT1JFKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9jQ291bnQgPSBlLnRhcmdldC5yZXN1bHQuZG9jQ291bnQ7XG4gICAgfTtcbiAgICB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKS5vcGVuQ3Vyc29yKG51bGwsICdwcmV2Jykub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICB1cGRhdGVTZXEgPSBjdXJzb3IgPyBjdXJzb3Iua2V5IDogMDtcbiAgICB9O1xuXG4gICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB7XG4gICAgICAgIGRvY19jb3VudDogZG9jQ291bnQsXG4gICAgICAgIHVwZGF0ZV9zZXE6IHVwZGF0ZVNlcSxcbiAgICAgICAgLy8gZm9yIGRlYnVnZ2luZ1xuICAgICAgICBpZGJfYXR0YWNobWVudF9mb3JtYXQ6IChhcGkuX21ldGEuYmxvYlN1cHBvcnQgPyAnYmluYXJ5JyA6ICdiYXNlNjQnKVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBhcGkuX2FsbERvY3MgPSBmdW5jdGlvbiBpZGJfYWxsRG9jcyhvcHRzLCBjYWxsYmFjaykge1xuICAgIGlkYkFsbERvY3Mob3B0cywgaWRiLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgYXBpLl9jaGFuZ2VzID0gZnVuY3Rpb24gaWRiQ2hhbmdlcyhvcHRzKSB7XG4gICAgcmV0dXJuIGNoYW5nZXMob3B0cywgYXBpLCBkYk5hbWUsIGlkYik7XG4gIH07XG5cbiAgYXBpLl9jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSW5kZXhlZERCL0lEQkRhdGFiYXNlI2Nsb3NlXG4gICAgLy8gXCJSZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCBjbG9zZXMgdGhlIGNvbm5lY3Rpb24gaW4gYSBzZXBhcmF0ZSB0aHJlYWQuLi5cIlxuICAgIGlkYi5jbG9zZSgpO1xuICAgIGNhY2hlZERCcy5kZWxldGUoZGJOYW1lKTtcbiAgICBjYWxsYmFjaygpO1xuICB9O1xuXG4gIGFwaS5fZ2V0UmV2aXNpb25UcmVlID0gZnVuY3Rpb24gKGRvY0lkLCBjYWxsYmFjaykge1xuICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBbRE9DX1NUT1JFXSwgJ3JlYWRvbmx5Jyk7XG4gICAgaWYgKHR4blJlc3VsdC5lcnJvcikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHZhciB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICAgIHZhciByZXEgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKS5nZXQoZG9jSWQpO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBkb2MgPSBkZWNvZGVNZXRhZGF0YShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGlmICghZG9jKSB7XG4gICAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkb2MucmV2X3RyZWUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHJldmlzaW9ucyBvZiBkb2N1bWVudCBkb2NJZFxuICAvLyB3aGljaCBhcmUgbGlzdGVkIGluIHJldnMgYW5kIHNldHMgdGhpcyBkb2N1bWVudFxuICAvLyByZXZpc2lvbiB0byB0byByZXZfdHJlZVxuICBhcGkuX2RvQ29tcGFjdGlvbiA9IGZ1bmN0aW9uIChkb2NJZCwgcmV2cywgY2FsbGJhY2spIHtcbiAgICB2YXIgc3RvcmVzID0gW1xuICAgICAgRE9DX1NUT1JFLFxuICAgICAgQllfU0VRX1NUT1JFLFxuICAgICAgQVRUQUNIX1NUT1JFLFxuICAgICAgQVRUQUNIX0FORF9TRVFfU1RPUkVcbiAgICBdO1xuICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBzdG9yZXMsICdyZWFkd3JpdGUnKTtcbiAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodHhuUmVzdWx0LmVycm9yKTtcbiAgICB9XG4gICAgdmFyIHR4biA9IHR4blJlc3VsdC50eG47XG5cbiAgICB2YXIgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcblxuICAgIGRvY1N0b3JlLmdldChkb2NJZCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgbWV0YWRhdGEgPSBkZWNvZGVNZXRhZGF0YShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIHRyYXZlcnNlUmV2VHJlZShtZXRhZGF0YS5yZXZfdHJlZSwgZnVuY3Rpb24gKGlzTGVhZiwgcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2SGFzaCwgY3R4LCBvcHRzKSB7XG4gICAgICAgIHZhciByZXYkJDEgPSBwb3MgKyAnLScgKyByZXZIYXNoO1xuICAgICAgICBpZiAocmV2cy5pbmRleE9mKHJldiQkMSkgIT09IC0xKSB7XG4gICAgICAgICAgb3B0cy5zdGF0dXMgPSAnbWlzc2luZyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29tcGFjdFJldnMocmV2cywgZG9jSWQsIHR4bik7XG4gICAgICB2YXIgd2lubmluZ1JldiQkMSA9IG1ldGFkYXRhLndpbm5pbmdSZXY7XG4gICAgICB2YXIgZGVsZXRlZCA9IG1ldGFkYXRhLmRlbGV0ZWQ7XG4gICAgICB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKS5wdXQoXG4gICAgICAgIGVuY29kZU1ldGFkYXRhKG1ldGFkYXRhLCB3aW5uaW5nUmV2JCQxLCBkZWxldGVkKSk7XG4gICAgfTtcbiAgICB0eG4ub25hYm9ydCA9IGlkYkVycm9yKGNhbGxiYWNrKTtcbiAgICB0eG4ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgfTtcblxuXG4gIGFwaS5fZ2V0TG9jYWwgPSBmdW5jdGlvbiAoaWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIFtMT0NBTF9TVE9SRV0sICdyZWFkb25seScpO1xuICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgIH1cbiAgICB2YXIgdHggPSB0eG5SZXN1bHQudHhuO1xuICAgIHZhciByZXEgPSB0eC5vYmplY3RTdG9yZShMT0NBTF9TVE9SRSkuZ2V0KGlkKTtcblxuICAgIHJlcS5vbmVycm9yID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGRvYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghZG9jKSB7XG4gICAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgZG9jWydfZG9jX2lkX3JldiddOyAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgICAgICBjYWxsYmFjayhudWxsLCBkb2MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgYXBpLl9wdXRMb2NhbCA9IGZ1bmN0aW9uIChkb2MsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIGRlbGV0ZSBkb2MuX3JldmlzaW9uczsgLy8gaWdub3JlIHRoaXMsIHRydXN0IHRoZSByZXZcbiAgICB2YXIgb2xkUmV2ID0gZG9jLl9yZXY7XG4gICAgdmFyIGlkID0gZG9jLl9pZDtcbiAgICBpZiAoIW9sZFJldikge1xuICAgICAgZG9jLl9yZXYgPSAnMC0xJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLl9yZXYgPSAnMC0nICsgKHBhcnNlSW50KG9sZFJldi5zcGxpdCgnLScpWzFdLCAxMCkgKyAxKTtcbiAgICB9XG5cbiAgICB2YXIgdHggPSBvcHRzLmN0eDtcbiAgICB2YXIgcmV0O1xuICAgIGlmICghdHgpIHtcbiAgICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBbTE9DQUxfU1RPUkVdLCAncmVhZHdyaXRlJyk7XG4gICAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHggPSB0eG5SZXN1bHQudHhuO1xuICAgICAgdHgub25lcnJvciA9IGlkYkVycm9yKGNhbGxiYWNrKTtcbiAgICAgIHR4Lm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBvU3RvcmUgPSB0eC5vYmplY3RTdG9yZShMT0NBTF9TVE9SRSk7XG4gICAgdmFyIHJlcTtcbiAgICBpZiAob2xkUmV2KSB7XG4gICAgICByZXEgPSBvU3RvcmUuZ2V0KGlkKTtcbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgb2xkRG9jID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBpZiAoIW9sZERvYyB8fCBvbGREb2MuX3JldiAhPT0gb2xkUmV2KSB7XG4gICAgICAgICAgY2FsbGJhY2soY3JlYXRlRXJyb3IoUkVWX0NPTkZMSUNUKSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHVwZGF0ZVxuICAgICAgICAgIHZhciByZXEgPSBvU3RvcmUucHV0KGRvYyk7XG4gICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldCA9IHtvazogdHJ1ZSwgaWQ6IGRvYy5faWQsIHJldjogZG9jLl9yZXZ9O1xuICAgICAgICAgICAgaWYgKG9wdHMuY3R4KSB7IC8vIHJldHVybiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHsgLy8gbmV3IGRvY1xuICAgICAgcmVxID0gb1N0b3JlLmFkZChkb2MpO1xuICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zdHJhaW50IGVycm9yLCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihSRVZfQ09ORkxJQ1QpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBhdm9pZCB0cmFuc2FjdGlvbiBhYm9ydFxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBhdm9pZCB0cmFuc2FjdGlvbiBvbmVycm9yXG4gICAgICB9O1xuICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0ID0ge29rOiB0cnVlLCBpZDogZG9jLl9pZCwgcmV2OiBkb2MuX3Jldn07XG4gICAgICAgIGlmIChvcHRzLmN0eCkgeyAvLyByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBhcGkuX3JlbW92ZUxvY2FsID0gZnVuY3Rpb24gKGRvYywgb3B0cywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIHR4ID0gb3B0cy5jdHg7XG4gICAgaWYgKCF0eCkge1xuICAgICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsIFtMT0NBTF9TVE9SRV0sICdyZWFkd3JpdGUnKTtcbiAgICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgICB9XG4gICAgICB0eCA9IHR4blJlc3VsdC50eG47XG4gICAgICB0eC5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHJldDtcbiAgICB2YXIgaWQgPSBkb2MuX2lkO1xuICAgIHZhciBvU3RvcmUgPSB0eC5vYmplY3RTdG9yZShMT0NBTF9TVE9SRSk7XG4gICAgdmFyIHJlcSA9IG9TdG9yZS5nZXQoaWQpO1xuXG4gICAgcmVxLm9uZXJyb3IgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb2xkRG9jID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKCFvbGREb2MgfHwgb2xkRG9jLl9yZXYgIT09IGRvYy5fcmV2KSB7XG4gICAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvU3RvcmUuZGVsZXRlKGlkKTtcbiAgICAgICAgcmV0ID0ge29rOiB0cnVlLCBpZDogaWQsIHJldjogJzAtMCd9O1xuICAgICAgICBpZiAob3B0cy5jdHgpIHsgLy8gcmV0dXJuIGltbWVkaWF0ZWx5XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgYXBpLl9kZXN0cm95ID0gZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgY2hhbmdlc0hhbmRsZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGRiTmFtZSk7XG5cbiAgICAvL0Nsb3NlIG9wZW4gcmVxdWVzdCBmb3IgXCJkYk5hbWVcIiBkYXRhYmFzZSB0byBmaXggaWUgZGVsYXkuXG4gICAgdmFyIG9wZW5SZXEgPSBvcGVuUmVxTGlzdC5nZXQoZGJOYW1lKTtcbiAgICBpZiAob3BlblJlcSAmJiBvcGVuUmVxLnJlc3VsdCkge1xuICAgICAgb3BlblJlcS5yZXN1bHQuY2xvc2UoKTtcbiAgICAgIGNhY2hlZERCcy5kZWxldGUoZGJOYW1lKTtcbiAgICB9XG4gICAgdmFyIHJlcSA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShkYk5hbWUpO1xuXG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vUmVtb3ZlIG9wZW4gcmVxdWVzdCBmcm9tIHRoZSBsaXN0LlxuICAgICAgb3BlblJlcUxpc3QuZGVsZXRlKGRiTmFtZSk7XG4gICAgICBpZiAoaGFzTG9jYWxTdG9yYWdlKCkgJiYgKGRiTmFtZSBpbiBsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbZGJOYW1lXTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHsgJ29rJzogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgcmVxLm9uZXJyb3IgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gIH07XG5cbiAgdmFyIGNhY2hlZCA9IGNhY2hlZERCcy5nZXQoZGJOYW1lKTtcblxuICBpZiAoY2FjaGVkKSB7XG4gICAgaWRiID0gY2FjaGVkLmlkYjtcbiAgICBhcGkuX21ldGEgPSBjYWNoZWQuZ2xvYmFsO1xuICAgIHJldHVybiBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgYXBpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciByZXEgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIEFEQVBURVJfVkVSU0lPTik7XG4gIG9wZW5SZXFMaXN0LnNldChkYk5hbWUsIHJlcSk7XG5cbiAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGRiID0gZS50YXJnZXQucmVzdWx0O1xuICAgIGlmIChlLm9sZFZlcnNpb24gPCAxKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU2NoZW1hKGRiKTsgLy8gbmV3IGRiLCBpbml0aWFsIHNjaGVtYVxuICAgIH1cbiAgICAvLyBkbyBtaWdyYXRpb25zXG5cbiAgICB2YXIgdHhuID0gZS5jdXJyZW50VGFyZ2V0LnRyYW5zYWN0aW9uO1xuICAgIC8vIHRoZXNlIG1pZ3JhdGlvbnMgaGF2ZSB0byBiZSBkb25lIGluIHRoaXMgZnVuY3Rpb24sIGJlZm9yZVxuICAgIC8vIGNvbnRyb2wgaXMgcmV0dXJuZWQgdG8gdGhlIGV2ZW50IGxvb3AsIGJlY2F1c2UgSW5kZXhlZERCXG5cbiAgICBpZiAoZS5vbGRWZXJzaW9uIDwgMykge1xuICAgICAgY3JlYXRlTG9jYWxTdG9yZVNjaGVtYShkYik7IC8vIHYyIC0+IHYzXG4gICAgfVxuICAgIGlmIChlLm9sZFZlcnNpb24gPCA0KSB7XG4gICAgICBhZGRBdHRhY2hBbmRTZXFTdG9yZShkYik7IC8vIHYzIC0+IHY0XG4gICAgfVxuXG4gICAgdmFyIG1pZ3JhdGlvbnMgPSBbXG4gICAgICBhZGREZWxldGVkT3JMb2NhbEluZGV4LCAvLyB2MSAtPiB2MlxuICAgICAgbWlncmF0ZUxvY2FsU3RvcmUsICAgICAgLy8gdjIgLT4gdjNcbiAgICAgIG1pZ3JhdGVBdHRzQW5kU2VxcywgICAgIC8vIHYzIC0+IHY0XG4gICAgICBtaWdyYXRlTWV0YWRhdGEgICAgICAgICAvLyB2NCAtPiB2NVxuICAgIF07XG5cbiAgICB2YXIgaSA9IGUub2xkVmVyc2lvbjtcblxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgbWlncmF0aW9uID0gbWlncmF0aW9uc1tpIC0gMV07XG4gICAgICBpKys7XG4gICAgICBpZiAobWlncmF0aW9uKSB7XG4gICAgICAgIG1pZ3JhdGlvbih0eG4sIG5leHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5leHQoKTtcbiAgfTtcblxuICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcblxuICAgIGlkYiA9IGUudGFyZ2V0LnJlc3VsdDtcblxuICAgIGlkYi5vbnZlcnNpb25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZGIuY2xvc2UoKTtcbiAgICAgIGNhY2hlZERCcy5kZWxldGUoZGJOYW1lKTtcbiAgICB9O1xuXG4gICAgaWRiLm9uYWJvcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZ3VhcmRlZENvbnNvbGUoJ2Vycm9yJywgJ0RhdGFiYXNlIGhhcyBhIGdsb2JhbCBmYWlsdXJlJywgZS50YXJnZXQuZXJyb3IpO1xuICAgICAgaWRiLmNsb3NlKCk7XG4gICAgICBjYWNoZWREQnMuZGVsZXRlKGRiTmFtZSk7XG4gICAgfTtcblxuICAgIC8vIERvIGEgZmV3IHNldHVwIG9wZXJhdGlvbnMgKGluIHBhcmFsbGVsIGFzIG11Y2ggYXMgcG9zc2libGUpOlxuICAgIC8vIDEuIEZldGNoIG1ldGEgZG9jXG4gICAgLy8gMi4gQ2hlY2sgYmxvYiBzdXBwb3J0XG4gICAgLy8gMy4gQ2FsY3VsYXRlIGRvY0NvdW50XG4gICAgLy8gNC4gR2VuZXJhdGUgYW4gaW5zdGFuY2VJZCBpZiBuZWNlc3NhcnlcbiAgICAvLyA1LiBTdG9yZSBkb2NDb3VudCBhbmQgaW5zdGFuY2VJZCBvbiBtZXRhIGRvY1xuXG4gICAgdmFyIHR4biA9IGlkYi50cmFuc2FjdGlvbihbXG4gICAgICBNRVRBX1NUT1JFLFxuICAgICAgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSxcbiAgICAgIERPQ19TVE9SRVxuICAgIF0sICdyZWFkd3JpdGUnKTtcblxuICAgIHZhciBzdG9yZWRNZXRhRG9jID0gZmFsc2U7XG4gICAgdmFyIG1ldGFEb2M7XG4gICAgdmFyIGRvY0NvdW50O1xuICAgIHZhciBibG9iU3VwcG9ydDtcbiAgICB2YXIgaW5zdGFuY2VJZDtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlU2V0dXAoKSB7XG4gICAgICBpZiAodHlwZW9mIGJsb2JTdXBwb3J0ID09PSAndW5kZWZpbmVkJyB8fCAhc3RvcmVkTWV0YURvYykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkuX21ldGEgPSB7XG4gICAgICAgIG5hbWU6IGRiTmFtZSxcbiAgICAgICAgaW5zdGFuY2VJZDogaW5zdGFuY2VJZCxcbiAgICAgICAgYmxvYlN1cHBvcnQ6IGJsb2JTdXBwb3J0XG4gICAgICB9O1xuXG4gICAgICBjYWNoZWREQnMuc2V0KGRiTmFtZSwge1xuICAgICAgICBpZGI6IGlkYixcbiAgICAgICAgZ2xvYmFsOiBhcGkuX21ldGFcbiAgICAgIH0pO1xuICAgICAgY2FsbGJhY2sobnVsbCwgYXBpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yZU1ldGFEb2NJZlJlYWR5KCkge1xuICAgICAgaWYgKHR5cGVvZiBkb2NDb3VudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG1ldGFEb2MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpbnN0YW5jZUtleSA9IGRiTmFtZSArICdfaWQnO1xuICAgICAgaWYgKGluc3RhbmNlS2V5IGluIG1ldGFEb2MpIHtcbiAgICAgICAgaW5zdGFuY2VJZCA9IG1ldGFEb2NbaW5zdGFuY2VLZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YURvY1tpbnN0YW5jZUtleV0gPSBpbnN0YW5jZUlkID0gdXVpZCgpO1xuICAgICAgfVxuICAgICAgbWV0YURvYy5kb2NDb3VudCA9IGRvY0NvdW50O1xuICAgICAgdHhuLm9iamVjdFN0b3JlKE1FVEFfU1RPUkUpLnB1dChtZXRhRG9jKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIGZldGNoIG9yIGdlbmVyYXRlIHRoZSBpbnN0YW5jZUlkXG4gICAgLy9cbiAgICB0eG4ub2JqZWN0U3RvcmUoTUVUQV9TVE9SRSkuZ2V0KE1FVEFfU1RPUkUpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBtZXRhRG9jID0gZS50YXJnZXQucmVzdWx0IHx8IHsgaWQ6IE1FVEFfU1RPUkUgfTtcbiAgICAgIHN0b3JlTWV0YURvY0lmUmVhZHkoKTtcbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBjb3VudERvY3NcbiAgICAvL1xuICAgIGNvdW50RG9jcyh0eG4sIGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgZG9jQ291bnQgPSBjb3VudDtcbiAgICAgIHN0b3JlTWV0YURvY0lmUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIC8vXG4gICAgLy8gY2hlY2sgYmxvYiBzdXBwb3J0XG4gICAgLy9cbiAgICBpZiAoIWJsb2JTdXBwb3J0UHJvbWlzZSkge1xuICAgICAgLy8gbWFrZSBzdXJlIGJsb2Igc3VwcG9ydCBpcyBvbmx5IGNoZWNrZWQgb25jZVxuICAgICAgYmxvYlN1cHBvcnRQcm9taXNlID0gY2hlY2tCbG9iU3VwcG9ydCh0eG4pO1xuICAgIH1cblxuICAgIGJsb2JTdXBwb3J0UHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGJsb2JTdXBwb3J0ID0gdmFsO1xuICAgICAgY29tcGxldGVTZXR1cCgpO1xuICAgIH0pO1xuXG4gICAgLy8gb25seSB3aGVuIHRoZSBtZXRhZGF0YSBwdXQgdHJhbnNhY3Rpb24gaGFzIGNvbXBsZXRlZCxcbiAgICAvLyBjb25zaWRlciB0aGUgc2V0dXAgZG9uZVxuICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3RvcmVkTWV0YURvYyA9IHRydWU7XG4gICAgICBjb21wbGV0ZVNldHVwKCk7XG4gICAgfTtcbiAgICB0eG4ub25hYm9ydCA9IGlkYkVycm9yKGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1zZyA9IGUudGFyZ2V0LmVycm9yICYmIGUudGFyZ2V0LmVycm9yLm1lc3NhZ2U7XG5cbiAgICBpZiAoIW1zZykge1xuICAgICAgbXNnID0gJ0ZhaWxlZCB0byBvcGVuIGluZGV4ZWREQiwgYXJlIHlvdSBpbiBwcml2YXRlIGJyb3dzaW5nIG1vZGU/JztcbiAgICB9IGVsc2UgaWYgKG1zZy5pbmRleE9mKFwic3RvcmVkIGRhdGFiYXNlIGlzIGEgaGlnaGVyIHZlcnNpb25cIikgIT09IC0xKSB7XG4gICAgICBtc2cgPSBuZXcgRXJyb3IoJ1RoaXMgREIgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgbmV3ZXIgXCJpbmRleGVkZGJcIiBhZGFwdGVyLCBidXQgeW91IGFyZSB0cnlpbmcgdG8gb3BlbiBpdCB3aXRoIHRoZSBvbGRlciBcImlkYlwiIGFkYXB0ZXInKTtcbiAgICB9XG5cbiAgICBndWFyZGVkQ29uc29sZSgnZXJyb3InLCBtc2cpO1xuICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKElEQl9FUlJPUiwgbXNnKSk7XG4gIH07XG59XG5cbklkYlBvdWNoLnZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAvLyBGb2xsb3dpbmcgIzcwODUgYnVnZ3kgaWRiIHZlcnNpb25zICh0eXBpY2FsbHkgU2FmYXJpIDwgMTAuMSkgYXJlXG4gIC8vIGNvbnNpZGVyZWQgdmFsaWQuXG5cbiAgLy8gT24gRmlyZWZveCBTZWN1cml0eUVycm9yIGlzIHRocm93biB3aGlsZSByZWZlcmVuY2luZyBpbmRleGVkREIgaWYgY29va2llc1xuICAvLyBhcmUgbm90IGFsbG93ZWQuIGB0eXBlb2YgaW5kZXhlZERCYCBhbHNvIHRyaWdnZXJzIHRoZSBlcnJvci5cbiAgdHJ5IHtcbiAgICAvLyBzb21lIG91dGRhdGVkIGltcGxlbWVudGF0aW9ucyBvZiBJREIgdGhhdCBhcHBlYXIgb24gU2Ftc3VuZ1xuICAgIC8vIGFuZCBIVEMgQW5kcm9pZCBkZXZpY2VzIDw0LjQgYXJlIG1pc3NpbmcgSURCS2V5UmFuZ2VcbiAgICByZXR1cm4gdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIElEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gSURCUG91Y2ggKFBvdWNoREIpIHtcbiAgUG91Y2hEQi5hZGFwdGVyKCdpZGInLCBJZGJQb3VjaCwgdHJ1ZSk7XG59XG5cbi8vIGRlYWQgc2ltcGxlIHByb21pc2UgcG9vbCwgaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3RpbWRwL2VzNi1wcm9taXNlLXBvb2xcbi8vIGJ1dCBtdWNoIHNtYWxsZXIgaW4gY29kZSBzaXplLiBsaW1pdHMgdGhlIG51bWJlciBvZiBjb25jdXJyZW50IHByb21pc2VzIHRoYXQgYXJlIGV4ZWN1dGVkXG5cblxuZnVuY3Rpb24gcG9vbChwcm9taXNlRmFjdG9yaWVzLCBsaW1pdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBydW5uaW5nID0gMDtcbiAgICB2YXIgY3VycmVudCA9IDA7XG4gICAgdmFyIGRvbmUgPSAwO1xuICAgIHZhciBsZW4gPSBwcm9taXNlRmFjdG9yaWVzLmxlbmd0aDtcbiAgICB2YXIgZXJyO1xuXG4gICAgZnVuY3Rpb24gcnVuTmV4dCgpIHtcbiAgICAgIHJ1bm5pbmcrKztcbiAgICAgIHByb21pc2VGYWN0b3JpZXNbY3VycmVudCsrXSgpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb05leHQoKSB7XG4gICAgICBpZiAoKytkb25lID09PSBsZW4pIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bk5leHRCYXRjaCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgIHJ1bm5pbmctLTtcbiAgICAgIGRvTmV4dCgpO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZnVuY3Rpb24gb25FcnJvcih0aGlzRXJyKSB7XG4gICAgICBydW5uaW5nLS07XG4gICAgICBlcnIgPSBlcnIgfHwgdGhpc0VycjtcbiAgICAgIGRvTmV4dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bk5leHRCYXRjaCgpIHtcbiAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgY3VycmVudCA8IGxlbikge1xuICAgICAgICBydW5OZXh0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcnVuTmV4dEJhdGNoKCk7XG4gIH0pO1xufVxuXG52YXIgQ0hBTkdFU19CQVRDSF9TSVpFID0gMjU7XG52YXIgTUFYX1NJTVVMVEFORU9VU19SRVZTID0gNTA7XG52YXIgQ0hBTkdFU19USU1FT1VUX0JVRkZFUiA9IDUwMDA7XG52YXIgREVGQVVMVF9IRUFSVEJFQVQgPSAxMDAwMDtcblxudmFyIHN1cHBvcnRzQnVsa0dldE1hcCA9IHt9O1xuXG5mdW5jdGlvbiByZWFkQXR0YWNobWVudHNBc0Jsb2JPckJ1ZmZlcihyb3cpIHtcbiAgdmFyIGRvYyA9IHJvdy5kb2MgfHwgcm93Lm9rO1xuICB2YXIgYXR0cyA9IGRvYyAmJiBkb2MuX2F0dGFjaG1lbnRzO1xuICBpZiAoIWF0dHMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgT2JqZWN0LmtleXMoYXR0cykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICB2YXIgYXR0ID0gYXR0c1tmaWxlbmFtZV07XG4gICAgYXR0LmRhdGEgPSBiNjRUb0JsdWZmZXIoYXR0LmRhdGEsIGF0dC5jb250ZW50X3R5cGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRG9jSWQoaWQpIHtcbiAgaWYgKC9eX2Rlc2lnbi8udGVzdChpZCkpIHtcbiAgICByZXR1cm4gJ19kZXNpZ24vJyArIGVuY29kZVVSSUNvbXBvbmVudChpZC5zbGljZSg4KSk7XG4gIH1cbiAgaWYgKC9eX2xvY2FsLy50ZXN0KGlkKSkge1xuICAgIHJldHVybiAnX2xvY2FsLycgKyBlbmNvZGVVUklDb21wb25lbnQoaWQuc2xpY2UoNykpO1xuICB9XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQpO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzQXR0YWNobWVudHMkMShkb2MpIHtcbiAgaWYgKCFkb2MuX2F0dGFjaG1lbnRzIHx8ICFPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBhdHRhY2htZW50ID0gZG9jLl9hdHRhY2htZW50c1trZXldO1xuICAgIGlmIChhdHRhY2htZW50LmRhdGEgJiYgdHlwZW9mIGF0dGFjaG1lbnQuZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBibG9iVG9CYXNlNjQoYXR0YWNobWVudC5kYXRhLCByZXNvbHZlKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGI2NCkge1xuICAgICAgICBhdHRhY2htZW50LmRhdGEgPSBiNjQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gaGFzVXJsUHJlZml4KG9wdHMpIHtcbiAgaWYgKCFvcHRzLnByZWZpeCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG9jb2wgPSBwYXJzZVVyaShvcHRzLnByZWZpeCkucHJvdG9jb2w7XG4gIHJldHVybiBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnO1xufVxuXG4vLyBHZXQgYWxsIHRoZSBpbmZvcm1hdGlvbiB5b3UgcG9zc2libHkgY2FuIGFib3V0IHRoZSBVUkkgZ2l2ZW4gYnkgbmFtZSBhbmRcbi8vIHJldHVybiBpdCBhcyBhIHN1aXRhYmxlIG9iamVjdC5cbmZ1bmN0aW9uIGdldEhvc3QobmFtZSwgb3B0cykge1xuICAvLyBlbmNvZGUgZGIgbmFtZSBpZiBvcHRzLnByZWZpeCBpcyBhIHVybCAoIzU1NzQpXG4gIGlmIChoYXNVcmxQcmVmaXgob3B0cykpIHtcbiAgICB2YXIgZGJOYW1lID0gb3B0cy5uYW1lLnN1YnN0cihvcHRzLnByZWZpeC5sZW5ndGgpO1xuICAgIC8vIEVuc3VyZSBwcmVmaXggaGFzIGEgdHJhaWxpbmcgc2xhc2hcbiAgICB2YXIgcHJlZml4ID0gb3B0cy5wcmVmaXgucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xuICAgIG5hbWUgPSBwcmVmaXggKyBlbmNvZGVVUklDb21wb25lbnQoZGJOYW1lKTtcbiAgfVxuXG4gIHZhciB1cmkgPSBwYXJzZVVyaShuYW1lKTtcbiAgaWYgKHVyaS51c2VyIHx8IHVyaS5wYXNzd29yZCkge1xuICAgIHVyaS5hdXRoID0ge3VzZXJuYW1lOiB1cmkudXNlciwgcGFzc3dvcmQ6IHVyaS5wYXNzd29yZH07XG4gIH1cblxuICAvLyBTcGxpdCB0aGUgcGF0aCBwYXJ0IG9mIHRoZSBVUkkgaW50byBwYXJ0cyB1c2luZyAnLycgYXMgdGhlIGRlbGltaXRlclxuICAvLyBhZnRlciByZW1vdmluZyBhbnkgbGVhZGluZyAnLycgYW5kIGFueSB0cmFpbGluZyAnLydcbiAgdmFyIHBhcnRzID0gdXJpLnBhdGgucmVwbGFjZSgvKF5cXC98XFwvJCkvZywgJycpLnNwbGl0KCcvJyk7XG5cbiAgdXJpLmRiID0gcGFydHMucG9wKCk7XG4gIC8vIFByZXZlbnQgZG91YmxlIGVuY29kaW5nIG9mIFVSSSBjb21wb25lbnRcbiAgaWYgKHVyaS5kYi5pbmRleE9mKCclJykgPT09IC0xKSB7XG4gICAgdXJpLmRiID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaS5kYik7XG4gIH1cblxuICB1cmkucGF0aCA9IHBhcnRzLmpvaW4oJy8nKTtcblxuICByZXR1cm4gdXJpO1xufVxuXG4vLyBHZW5lcmF0ZSBhIFVSTCB3aXRoIHRoZSBob3N0IGRhdGEgZ2l2ZW4gYnkgb3B0cyBhbmQgdGhlIGdpdmVuIHBhdGhcbmZ1bmN0aW9uIGdlbkRCVXJsKG9wdHMsIHBhdGgpIHtcbiAgcmV0dXJuIGdlblVybChvcHRzLCBvcHRzLmRiICsgJy8nICsgcGF0aCk7XG59XG5cbi8vIEdlbmVyYXRlIGEgVVJMIHdpdGggdGhlIGhvc3QgZGF0YSBnaXZlbiBieSBvcHRzIGFuZCB0aGUgZ2l2ZW4gcGF0aFxuZnVuY3Rpb24gZ2VuVXJsKG9wdHMsIHBhdGgpIHtcbiAgLy8gSWYgdGhlIGhvc3QgYWxyZWFkeSBoYXMgYSBwYXRoLCB0aGVuIHdlIG5lZWQgdG8gaGF2ZSBhIHBhdGggZGVsaW1pdGVyXG4gIC8vIE90aGVyd2lzZSwgdGhlIHBhdGggZGVsaW1pdGVyIGlzIHRoZSBlbXB0eSBzdHJpbmdcbiAgdmFyIHBhdGhEZWwgPSAhb3B0cy5wYXRoID8gJycgOiAnLyc7XG5cbiAgLy8gSWYgdGhlIGhvc3QgYWxyZWFkeSBoYXMgYSBwYXRoLCB0aGVuIHdlIG5lZWQgdG8gaGF2ZSBhIHBhdGggZGVsaW1pdGVyXG4gIC8vIE90aGVyd2lzZSwgdGhlIHBhdGggZGVsaW1pdGVyIGlzIHRoZSBlbXB0eSBzdHJpbmdcbiAgcmV0dXJuIG9wdHMucHJvdG9jb2wgKyAnOi8vJyArIG9wdHMuaG9zdCArXG4gICAgICAgICAob3B0cy5wb3J0ID8gKCc6JyArIG9wdHMucG9ydCkgOiAnJykgK1xuICAgICAgICAgJy8nICsgb3B0cy5wYXRoICsgcGF0aERlbCArIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHBhcmFtc1RvU3RyKHBhcmFtcykge1xuICByZXR1cm4gJz8nICsgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gayArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pO1xuICB9KS5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZENhY2hlQnVzdChvcHRzKSB7XG4gIHZhciB1YSA9ICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSA/XG4gICAgICBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgdmFyIGlzSUUgPSB1YS5pbmRleE9mKCdtc2llJykgIT09IC0xO1xuICB2YXIgaXNUcmlkZW50ID0gdWEuaW5kZXhPZigndHJpZGVudCcpICE9PSAtMTtcbiAgdmFyIGlzRWRnZSA9IHVhLmluZGV4T2YoJ2VkZ2UnKSAhPT0gLTE7XG4gIHZhciBpc0dFVCA9ICEoJ21ldGhvZCcgaW4gb3B0cykgfHwgb3B0cy5tZXRob2QgPT09ICdHRVQnO1xuICByZXR1cm4gKGlzSUUgfHwgaXNUcmlkZW50IHx8IGlzRWRnZSkgJiYgaXNHRVQ7XG59XG5cbi8vIEltcGxlbWVudHMgdGhlIFBvdWNoREIgQVBJIGZvciBkZWFsaW5nIHdpdGggQ291Y2hEQiBpbnN0YW5jZXMgb3ZlciBIVFRQXG5mdW5jdGlvbiBIdHRwUG91Y2gob3B0cywgY2FsbGJhY2spIHtcblxuICAvLyBUaGUgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBwdWJsaWNseSBhdmFpbGFibGUgZm9yIEh0dHBQb3VjaFxuICB2YXIgYXBpID0gdGhpcztcblxuICB2YXIgaG9zdCA9IGdldEhvc3Qob3B0cy5uYW1lLCBvcHRzKTtcbiAgdmFyIGRiVXJsID0gZ2VuREJVcmwoaG9zdCwgJycpO1xuXG4gIG9wdHMgPSBjbG9uZShvcHRzKTtcblxuICB2YXIgb3VyRmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwgbmV3IGgoKTtcblxuICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSAnaW5jbHVkZSc7XG5cbiAgICBpZiAob3B0cy5hdXRoIHx8IGhvc3QuYXV0aCkge1xuICAgICAgdmFyIG5BdXRoID0gb3B0cy5hdXRoIHx8IGhvc3QuYXV0aDtcbiAgICAgIHZhciBzdHIgPSBuQXV0aC51c2VybmFtZSArICc6JyArIG5BdXRoLnBhc3N3b3JkO1xuICAgICAgdmFyIHRva2VuID0gdGhpc0J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHRva2VuKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZGVycyA9IG9wdHMuaGVhZGVycyB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5hcHBlbmQoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHNob3VsZENhY2hlQnVzdChvcHRpb25zKSkge1xuICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAnX25vbmNlPScgKyBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHZhciBmZXRjaEZ1biA9IG9wdHMuZmV0Y2ggfHwgZiQxO1xuICAgIHJldHVybiBmZXRjaEZ1bih1cmwsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkYXB0ZXJGdW4kJDEobmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIGFkYXB0ZXJGdW4obmFtZSwgZ2V0QXJndW1lbnRzKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBzZXR1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICB9KTtcbiAgICB9KSkuYmluZChhcGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hKU09OKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcblxuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCBuZXcgaCgpO1xuXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuZ2V0KCdBY2NlcHQnKSkge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3VyRmV0Y2godXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmVzdWx0Lm9rID0gcmVzcG9uc2Uub2s7XG4gICAgICByZXN1bHQuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICByZXN1bHQuZGF0YSA9IGpzb247XG4gICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICByZXN1bHQuZGF0YS5zdGF0dXMgPSByZXN1bHQuc3RhdHVzO1xuICAgICAgICB2YXIgZXJyID0gZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZShyZXN1bHQuZGF0YSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQuZGF0YSkpIHtcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQuZGF0YS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAodi5lcnJvciB8fCB2Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUVycm9yRnJvbVJlc3BvbnNlKHYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZXR1cFByb21pc2U7XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgaWYgKG9wdHMuc2tpcF9zZXR1cCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2V0dXAgaW4gcHJvY2VzcyBvciBwcmV2aW91cyBzdWNjZXNzZnVsIHNldHVwXG4gICAgLy8gZG9uZSB0aGVuIHdlIHdpbGwgdXNlIHRoYXRcbiAgICAvLyBJZiBwcmV2aW91cyBzZXR1cHMgaGF2ZSBiZWVuIHJlamVjdGVkIHdlIHdpbGwgdHJ5IGFnYWluXG4gICAgaWYgKHNldHVwUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHNldHVwUHJvbWlzZTtcbiAgICB9XG5cbiAgICBzZXR1cFByb21pc2UgPSBmZXRjaEpTT04oZGJVcmwpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIgJiYgZXJyLnN0YXR1cyAmJiBlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gRG9lc250IGV4aXN0LCBjcmVhdGUgaXRcbiAgICAgICAgZXhwbGFpbkVycm9yKDQwNCwgJ1BvdWNoREIgaXMganVzdCBkZXRlY3RpbmcgaWYgdGhlIHJlbW90ZSBleGlzdHMuJyk7XG4gICAgICAgIHJldHVybiBmZXRjaEpTT04oZGJVcmwsIHttZXRob2Q6ICdQVVQnfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSB0cnkgdG8gY3JlYXRlIGEgZGF0YWJhc2UgdGhhdCBhbHJlYWR5IGV4aXN0cywgc2tpcHBlZCBpblxuICAgICAgLy8gaXN0YW5idWwgc2luY2UgaXRzIGNhdGNoaW5nIGEgcmFjZSBjb25kaXRpb24uXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlcnIgJiYgZXJyLnN0YXR1cyAmJiBlcnIuc3RhdHVzID09PSA0MTIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9KTtcblxuICAgIHNldHVwUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR1cFByb21pc2UgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNldHVwUHJvbWlzZTtcbiAgfVxuXG4gIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYXBpKTtcbiAgfSk7XG5cbiAgYXBpLl9yZW1vdGUgPSB0cnVlO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGFwaS50eXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnaHR0cCc7XG4gIH07XG5cbiAgYXBpLmlkID0gYWRhcHRlckZ1biQkMSgnaWQnLCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBvdXJGZXRjaChnZW5VcmwoaG9zdCwgJycpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAvLyBCYWQgcmVzcG9uc2Ugb3IgbWlzc2luZyBgdXVpZGAgc2hvdWxkIG5vdCBwcmV2ZW50IElEIGdlbmVyYXRpb24uXG4gICAgICB2YXIgdXVpZCQkMSA9IChyZXN1bHQgJiYgcmVzdWx0LnV1aWQpID9cbiAgICAgICAgICAocmVzdWx0LnV1aWQgKyBob3N0LmRiKSA6IGdlbkRCVXJsKGhvc3QsICcnKTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHV1aWQkJDEpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBTZW5kcyBhIFBPU1QgcmVxdWVzdCB0byB0aGUgaG9zdCBjYWxsaW5nIHRoZSBjb3VjaGRiIF9jb21wYWN0IGZ1bmN0aW9uXG4gIC8vICAgIHZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIENvdWNoREIgaXQgaXMgcnVubmluZ1xuICBhcGkuY29tcGFjdCA9IGFkYXB0ZXJGdW4kJDEoJ2NvbXBhY3QnLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cyA9IGNsb25lKG9wdHMpO1xuXG4gICAgZmV0Y2hKU09OKGdlbkRCVXJsKGhvc3QsICdfY29tcGFjdCcpLCB7bWV0aG9kOiAnUE9TVCd9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIHBpbmcoKSB7XG4gICAgICAgIGFwaS5pbmZvKGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgIC8vIENvdWNoREIgbWF5IHNlbmQgYSBcImNvbXBhY3RfcnVubmluZzp0cnVlXCIgaWYgaXQnc1xuICAgICAgICAgIC8vIGFscmVhZHkgY29tcGFjdGluZy4gUG91Y2hEQiBTZXJ2ZXIgZG9lc24ndC5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmIChyZXMgJiYgIXJlcy5jb21wYWN0X3J1bm5pbmcpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHtvazogdHJ1ZX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBpbmcsIG9wdHMuaW50ZXJ2YWwgfHwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gUGluZyB0aGUgaHR0cCBpZiBpdCdzIGZpbmlzaGVkIGNvbXBhY3Rpb25cbiAgICAgIHBpbmcoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgYXBpLmJ1bGtHZXQgPSBhZGFwdGVyRnVuKCdidWxrR2V0JywgZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZG9CdWxrR2V0KGNiKSB7XG4gICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICBpZiAob3B0cy5yZXZzKSB7XG4gICAgICAgIHBhcmFtcy5yZXZzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHBhcmFtcy5hdHRhY2htZW50cyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0cy5sYXRlc3QpIHtcbiAgICAgICAgcGFyYW1zLmxhdGVzdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBmZXRjaEpTT04oZ2VuREJVcmwoaG9zdCwgJ19idWxrX2dldCcgKyBwYXJhbXNUb1N0cihwYXJhbXMpKSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkb2NzOiBvcHRzLmRvY3N9KVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzICYmIG9wdHMuYmluYXJ5KSB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEucmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHJlcy5kb2NzLmZvckVhY2gocmVhZEF0dGFjaG1lbnRzQXNCbG9iT3JCdWZmZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNiKG51bGwsIHJlc3VsdC5kYXRhKTtcbiAgICAgIH0pLmNhdGNoKGNiKTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZ1bmN0aW9uIGRvQnVsa0dldFNoaW0oKSB7XG4gICAgICAvLyBhdm9pZCBcInVybCB0b28gbG9uZyBlcnJvclwiIGJ5IHNwbGl0dGluZyB1cCBpbnRvIG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICB2YXIgYmF0Y2hTaXplID0gTUFYX1NJTVVMVEFORU9VU19SRVZTO1xuICAgICAgdmFyIG51bUJhdGNoZXMgPSBNYXRoLmNlaWwob3B0cy5kb2NzLmxlbmd0aCAvIGJhdGNoU2l6ZSk7XG4gICAgICB2YXIgbnVtRG9uZSA9IDA7XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShudW1CYXRjaGVzKTtcblxuICAgICAgZnVuY3Rpb24gb25SZXN1bHQoYmF0Y2hOdW0pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgIC8vIGVyciBpcyBpbXBvc3NpYmxlIGJlY2F1c2Ugc2hpbSByZXR1cm5zIGEgbGlzdCBvZiBlcnJzIGluIHRoYXQgY2FzZVxuICAgICAgICAgIHJlc3VsdHNbYmF0Y2hOdW1dID0gcmVzLnJlc3VsdHM7XG4gICAgICAgICAgaWYgKCsrbnVtRG9uZSA9PT0gbnVtQmF0Y2hlcykge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge3Jlc3VsdHM6IGZsYXR0ZW4ocmVzdWx0cyl9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQmF0Y2hlczsgaSsrKSB7XG4gICAgICAgIHZhciBzdWJPcHRzID0gcGljayhvcHRzLCBbJ3JldnMnLCAnYXR0YWNobWVudHMnLCAnYmluYXJ5JywgJ2xhdGVzdCddKTtcbiAgICAgICAgc3ViT3B0cy5kb2NzID0gb3B0cy5kb2NzLnNsaWNlKGkgKiBiYXRjaFNpemUsXG4gICAgICAgICAgTWF0aC5taW4ob3B0cy5kb2NzLmxlbmd0aCwgKGkgKyAxKSAqIGJhdGNoU2l6ZSkpO1xuICAgICAgICBidWxrR2V0KHNlbGYsIHN1Yk9wdHMsIG9uUmVzdWx0KGkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYXJrIHRoZSB3aG9sZSBkYXRhYmFzZSBhcyBlaXRoZXIgc3VwcG9ydGluZyBvciBub3Qgc3VwcG9ydGluZyBfYnVsa19nZXRcbiAgICB2YXIgZGJVcmwgPSBnZW5VcmwoaG9zdCwgJycpO1xuICAgIHZhciBzdXBwb3J0c0J1bGtHZXQgPSBzdXBwb3J0c0J1bGtHZXRNYXBbZGJVcmxdO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQnVsa0dldCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGlzIGRhdGFiYXNlIHN1cHBvcnRzIF9idWxrX2dldFxuICAgICAgZG9CdWxrR2V0KGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgc3VwcG9ydHNCdWxrR2V0TWFwW2RiVXJsXSA9IGZhbHNlO1xuICAgICAgICAgIGV4cGxhaW5FcnJvcihcbiAgICAgICAgICAgIGVyci5zdGF0dXMsXG4gICAgICAgICAgICAnUG91Y2hEQiBpcyBqdXN0IGRldGVjdGluZyBpZiB0aGUgcmVtb3RlICcgK1xuICAgICAgICAgICAgJ3N1cHBvcnRzIHRoZSBfYnVsa19nZXQgQVBJLidcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvQnVsa0dldFNoaW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdXBwb3J0c0J1bGtHZXRNYXBbZGJVcmxdID0gdHJ1ZTtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnRzQnVsa0dldCkge1xuICAgICAgZG9CdWxrR2V0KGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9CdWxrR2V0U2hpbSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2FsbHMgR0VUIG9uIHRoZSBob3N0LCB3aGljaCBnZXRzIGJhY2sgYSBKU09OIHN0cmluZyBjb250YWluaW5nXG4gIC8vICAgIGNvdWNoZGI6IEEgd2VsY29tZSBzdHJpbmdcbiAgLy8gICAgdmVyc2lvbjogVGhlIHZlcnNpb24gb2YgQ291Y2hEQiBpdCBpcyBydW5uaW5nXG4gIGFwaS5faW5mbyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHNldHVwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb3VyRmV0Y2goZ2VuREJVcmwoaG9zdCwgJycpKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICBpbmZvLmhvc3QgPSBnZW5EQlVybChob3N0LCAnJyk7XG4gICAgICBjYWxsYmFjayhudWxsLCBpbmZvKTtcbiAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gIH07XG5cbiAgYXBpLmZldGNoID0gZnVuY3Rpb24gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2V0dXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB1cmwgPSBwYXRoLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nID9cbiAgICAgICAgZ2VuVXJsKGhvc3QsIHBhdGguc3Vic3RyaW5nKDEpKSA6XG4gICAgICAgIGdlbkRCVXJsKGhvc3QsIHBhdGgpO1xuICAgICAgcmV0dXJuIG91ckZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiBpZCBmcm9tIHRoZSBkYXRhYmFzZSBnaXZlbiBieSBob3N0LlxuICAvLyBUaGUgaWQgY291bGQgYmUgc29sZWx5IHRoZSBfaWQgaW4gdGhlIGRhdGFiYXNlLCBvciBpdCBtYXkgYmUgYVxuICAvLyBfZGVzaWduL0lEIG9yIF9sb2NhbC9JRCBwYXRoXG4gIGFwaS5nZXQgPSBhZGFwdGVyRnVuJCQxKCdnZXQnLCBmdW5jdGlvbiAoaWQsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgLy8gSWYgbm8gb3B0aW9ucyB3ZXJlIGdpdmVuLCBzZXQgdGhlIGNhbGxiYWNrIHRvIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIG9wdHMgPSBjbG9uZShvcHRzKTtcblxuICAgIC8vIExpc3Qgb2YgcGFyYW1ldGVycyB0byBhZGQgdG8gdGhlIEdFVCByZXF1ZXN0XG4gICAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKG9wdHMucmV2cykge1xuICAgICAgcGFyYW1zLnJldnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnJldnNfaW5mbykge1xuICAgICAgcGFyYW1zLnJldnNfaW5mbyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubGF0ZXN0KSB7XG4gICAgICBwYXJhbXMubGF0ZXN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5vcGVuX3JldnMpIHtcbiAgICAgIGlmIChvcHRzLm9wZW5fcmV2cyAhPT0gXCJhbGxcIikge1xuICAgICAgICBvcHRzLm9wZW5fcmV2cyA9IEpTT04uc3RyaW5naWZ5KG9wdHMub3Blbl9yZXZzKTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5vcGVuX3JldnMgPSBvcHRzLm9wZW5fcmV2cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5yZXYpIHtcbiAgICAgIHBhcmFtcy5yZXYgPSBvcHRzLnJldjtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5jb25mbGljdHMpIHtcbiAgICAgIHBhcmFtcy5jb25mbGljdHMgPSBvcHRzLmNvbmZsaWN0cztcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICBwYXJhbXMudXBkYXRlX3NlcSA9IG9wdHMudXBkYXRlX3NlcTtcbiAgICB9XG5cbiAgICBpZCA9IGVuY29kZURvY0lkKGlkKTtcblxuICAgIGZ1bmN0aW9uIGZldGNoQXR0YWNobWVudHMoZG9jKSB7XG4gICAgICB2YXIgYXR0cyA9IGRvYy5fYXR0YWNobWVudHM7XG4gICAgICB2YXIgZmlsZW5hbWVzID0gYXR0cyAmJiBPYmplY3Qua2V5cyhhdHRzKTtcbiAgICAgIGlmICghYXR0cyB8fCAhZmlsZW5hbWVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB3ZSBmZXRjaCB0aGVzZSBtYW51YWxseSBpbiBzZXBhcmF0ZSBYSFJzLCBiZWNhdXNlXG4gICAgICAvLyBTeW5jIEdhdGV3YXkgd291bGQgbm9ybWFsbHkgc2VuZCBpdCBiYWNrIGFzIG11bHRpcGFydC9taXhlZCxcbiAgICAgIC8vIHdoaWNoIHdlIGNhbm5vdCBwYXJzZS4gQWxzbywgdGhpcyBpcyBtb3JlIGVmZmljaWVudCB0aGFuXG4gICAgICAvLyByZWNlaXZpbmcgYXR0YWNobWVudHMgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5ncy5cbiAgICAgIGZ1bmN0aW9uIGZldGNoRGF0YShmaWxlbmFtZSkge1xuICAgICAgICB2YXIgYXR0ID0gYXR0c1tmaWxlbmFtZV07XG4gICAgICAgIHZhciBwYXRoID0gZW5jb2RlRG9jSWQoZG9jLl9pZCkgKyAnLycgKyBlbmNvZGVBdHRhY2htZW50SWQoZmlsZW5hbWUpICtcbiAgICAgICAgICAgICc/cmV2PScgKyBkb2MuX3JldjtcbiAgICAgICAgcmV0dXJuIG91ckZldGNoKGdlbkRCVXJsKGhvc3QsIHBhdGgpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGlmICgnYnVmZmVyJyBpbiByZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJ1ZmZlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICBpZiAob3B0cy5iaW5hcnkpIHtcbiAgICAgICAgICAgIHZhciB0eXBlRmllbGREZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihibG9iLl9fcHJvdG9fXywgJ3R5cGUnKTtcbiAgICAgICAgICAgIGlmICghdHlwZUZpZWxkRGVzY3JpcHRvciB8fCB0eXBlRmllbGREZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgICAgICBibG9iLnR5cGUgPSBhdHQuY29udGVudF90eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgYmxvYlRvQmFzZTY0KGJsb2IsIHJlc29sdmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgZGVsZXRlIGF0dC5zdHViO1xuICAgICAgICAgIGRlbGV0ZSBhdHQubGVuZ3RoO1xuICAgICAgICAgIGF0dC5kYXRhID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlRmFjdG9yaWVzID0gZmlsZW5hbWVzLm1hcChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2hEYXRhKGZpbGVuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGlzIGxpbWl0cyB0aGUgbnVtYmVyIG9mIHBhcmFsbGVsIHhociByZXF1ZXN0cyB0byA1IGFueSB0aW1lXG4gICAgICAvLyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBtYXhpbXVtIGJyb3dzZXIgcmVxdWVzdCBsaW1pdHNcbiAgICAgIHJldHVybiBwb29sKHByb21pc2VGYWN0b3JpZXMsIDUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZldGNoQWxsQXR0YWNobWVudHMoZG9jT3JEb2NzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkb2NPckRvY3MpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChkb2NPckRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICBpZiAoZG9jLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hBdHRhY2htZW50cyhkb2Mub2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZldGNoQXR0YWNobWVudHMoZG9jT3JEb2NzKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gZ2VuREJVcmwoaG9zdCwgaWQgKyBwYXJhbXNUb1N0cihwYXJhbXMpKTtcbiAgICBmZXRjaEpTT04odXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2hBbGxBdHRhY2htZW50cyhyZXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5kb2NJZCA9IGlkO1xuICAgICAgY2FsbGJhY2soZSk7XG4gICAgfSk7XG4gIH0pO1xuXG5cbiAgLy8gRGVsZXRlIHRoZSBkb2N1bWVudCBnaXZlbiBieSBkb2MgZnJvbSB0aGUgZGF0YWJhc2UgZ2l2ZW4gYnkgaG9zdC5cbiAgYXBpLnJlbW92ZSA9IGFkYXB0ZXJGdW4kJDEoJ3JlbW92ZScsIGZ1bmN0aW9uIChkb2NPcklkLCBvcHRzT3JSZXYsIG9wdHMsIGNiKSB7XG4gICAgdmFyIGRvYztcbiAgICBpZiAodHlwZW9mIG9wdHNPclJldiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGlkLCByZXYsIG9wdHMsIGNhbGxiYWNrIHN0eWxlXG4gICAgICBkb2MgPSB7XG4gICAgICAgIF9pZDogZG9jT3JJZCxcbiAgICAgICAgX3Jldjogb3B0c09yUmV2XG4gICAgICB9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gb3B0cztcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkb2MsIG9wdHMsIGNhbGxiYWNrIHN0eWxlXG4gICAgICBkb2MgPSBkb2NPcklkO1xuICAgICAgaWYgKHR5cGVvZiBvcHRzT3JSZXYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IgPSBvcHRzT3JSZXY7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiID0gb3B0cztcbiAgICAgICAgb3B0cyA9IG9wdHNPclJldjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmV2JCQxID0gKGRvYy5fcmV2IHx8IG9wdHMucmV2KTtcbiAgICB2YXIgdXJsID0gZ2VuREJVcmwoaG9zdCwgZW5jb2RlRG9jSWQoZG9jLl9pZCkpICsgJz9yZXY9JyArIHJldiQkMTtcblxuICAgIGZldGNoSlNPTih1cmwsIHttZXRob2Q6ICdERUxFVEUnfSwgY2IpLmNhdGNoKGNiKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZW5jb2RlQXR0YWNobWVudElkKGF0dGFjaG1lbnRJZCkge1xuICAgIHJldHVybiBhdHRhY2htZW50SWQuc3BsaXQoXCIvXCIpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBhdHRhY2htZW50XG4gIGFwaS5nZXRBdHRhY2htZW50ID0gYWRhcHRlckZ1biQkMSgnZ2V0QXR0YWNobWVudCcsIGZ1bmN0aW9uIChkb2NJZCwgYXR0YWNobWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIHBhcmFtcyA9IG9wdHMucmV2ID8gKCc/cmV2PScgKyBvcHRzLnJldikgOiAnJztcbiAgICB2YXIgdXJsID0gZ2VuREJVcmwoaG9zdCwgZW5jb2RlRG9jSWQoZG9jSWQpKSArICcvJyArXG4gICAgICAgIGVuY29kZUF0dGFjaG1lbnRJZChhdHRhY2htZW50SWQpICsgcGFyYW1zO1xuICAgIHZhciBjb250ZW50VHlwZTtcbiAgICBvdXJGZXRjaCh1cmwsIHttZXRob2Q6ICdHRVQnfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXByb2Nlc3MuYnJvd3NlciAmJiB0eXBlb2YgcmVzcG9uc2UuYnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJ1ZmZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgIC8vIFRPRE86IGFsc28gcmVtb3ZlXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgYmxvYi50eXBlID0gY29udGVudFR5cGU7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCBibG9iKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBSZW1vdmUgdGhlIGF0dGFjaG1lbnQgZ2l2ZW4gYnkgdGhlIGlkIGFuZCByZXZcbiAgYXBpLnJlbW92ZUF0dGFjaG1lbnQgPSAgYWRhcHRlckZ1biQkMSgncmVtb3ZlQXR0YWNobWVudCcsIGZ1bmN0aW9uIChkb2NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2JCQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKSB7XG4gICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsIGVuY29kZURvY0lkKGRvY0lkKSArICcvJyArXG4gICAgICAgICAgICAgICAgICAgICAgIGVuY29kZUF0dGFjaG1lbnRJZChhdHRhY2htZW50SWQpKSArICc/cmV2PScgKyByZXYkJDE7XG4gICAgZmV0Y2hKU09OKHVybCwge21ldGhvZDogJ0RFTEVURSd9LCBjYWxsYmFjaykuY2F0Y2goY2FsbGJhY2spO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGF0dGFjaG1lbnQgZ2l2ZW4gYnkgYmxvYiBhbmQgaXRzIGNvbnRlbnRUeXBlIHByb3BlcnR5XG4gIC8vIHRvIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiBpZCwgdGhlIHJldmlzaW9uIGdpdmVuIGJ5IHJldiwgYW5kXG4gIC8vIGFkZCBpdCB0byB0aGUgZGF0YWJhc2UgZ2l2ZW4gYnkgaG9zdC5cbiAgYXBpLnB1dEF0dGFjaG1lbnQgPSBhZGFwdGVyRnVuJCQxKCdwdXRBdHRhY2htZW50JywgZnVuY3Rpb24gKGRvY0lkLCBhdHRhY2htZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXYkJDEsIGJsb2IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB0eXBlO1xuICAgICAgdHlwZSA9IGJsb2I7XG4gICAgICBibG9iID0gcmV2JCQxO1xuICAgICAgcmV2JCQxID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGlkID0gZW5jb2RlRG9jSWQoZG9jSWQpICsgJy8nICsgZW5jb2RlQXR0YWNobWVudElkKGF0dGFjaG1lbnRJZCk7XG4gICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsIGlkKTtcbiAgICBpZiAocmV2JCQxKSB7XG4gICAgICB1cmwgKz0gJz9yZXY9JyArIHJldiQkMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJsb2IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpbnB1dCBpcyBhc3N1bWVkIHRvIGJlIGEgYmFzZTY0IHN0cmluZ1xuICAgICAgdmFyIGJpbmFyeTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJpbmFyeSA9IHRoaXNBdG9iKGJsb2IpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihCQURfQVJHLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F0dGFjaG1lbnQgaXMgbm90IGEgdmFsaWQgYmFzZTY0IHN0cmluZycpKTtcbiAgICAgIH1cbiAgICAgIGJsb2IgPSBiaW5hcnkgPyBiaW5TdHJpbmdUb0JsdWZmZXIoYmluYXJ5LCB0eXBlKSA6ICcnO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgYXR0YWNobWVudFxuICAgIGZldGNoSlNPTih1cmwsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBoKHsnQ29udGVudC1UeXBlJzogdHlwZX0pLFxuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IGJsb2JcbiAgICB9LCBjYWxsYmFjaykuY2F0Y2goY2FsbGJhY2spO1xuICB9KTtcblxuICAvLyBVcGRhdGUvY3JlYXRlIG11bHRpcGxlIGRvY3VtZW50cyBnaXZlbiBieSByZXEgaW4gdGhlIGRhdGFiYXNlXG4gIC8vIGdpdmVuIGJ5IGhvc3QuXG4gIGFwaS5fYnVsa0RvY3MgPSBmdW5jdGlvbiAocmVxLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIElmIG5ld19lZGl0cz1mYWxzZSB0aGVuIGl0IHByZXZlbnRzIHRoZSBkYXRhYmFzZSBmcm9tIGNyZWF0aW5nXG4gICAgLy8gbmV3IHJldmlzaW9uIG51bWJlcnMgZm9yIHRoZSBkb2N1bWVudHMuIEluc3RlYWQgaXQganVzdCB1c2VzXG4gICAgLy8gdGhlIG9sZCBvbmVzLiBUaGlzIGlzIHVzZWQgaW4gZGF0YWJhc2UgcmVwbGljYXRpb24uXG4gICAgcmVxLm5ld19lZGl0cyA9IG9wdHMubmV3X2VkaXRzO1xuXG4gICAgc2V0dXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXEuZG9jcy5tYXAocHJlcHJvY2Vzc0F0dGFjaG1lbnRzJDEpKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFVwZGF0ZS9jcmVhdGUgdGhlIGRvY3VtZW50c1xuICAgICAgcmV0dXJuIGZldGNoSlNPTihnZW5EQlVybChob3N0LCAnX2J1bGtfZG9jcycpLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXEpXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgfSkuY2F0Y2goY2FsbGJhY2spO1xuICB9O1xuXG5cbiAgLy8gVXBkYXRlL2NyZWF0ZSBkb2N1bWVudFxuICBhcGkuX3B1dCA9IGZ1bmN0aW9uIChkb2MsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgc2V0dXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwcmVwcm9jZXNzQXR0YWNobWVudHMkMShkb2MpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZldGNoSlNPTihnZW5EQlVybChob3N0LCBlbmNvZGVEb2NJZChkb2MuX2lkKSksIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZG9jKVxuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQuZGF0YSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgZXJyLmRvY0lkID0gZG9jICYmIGRvYy5faWQ7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgLy8gR2V0IGEgbGlzdGluZyBvZiB0aGUgZG9jdW1lbnRzIGluIHRoZSBkYXRhYmFzZSBnaXZlblxuICAvLyBieSBob3N0IGFuZCBvcmRlcmVkIGJ5IGluY3JlYXNpbmcgaWQuXG4gIGFwaS5hbGxEb2NzID0gYWRhcHRlckZ1biQkMSgnYWxsRG9jcycsIGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gY2xvbmUob3B0cyk7XG5cbiAgICAvLyBMaXN0IG9mIHBhcmFtZXRlcnMgdG8gYWRkIHRvIHRoZSBHRVQgcmVxdWVzdFxuICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICB2YXIgYm9keTtcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XG5cbiAgICBpZiAob3B0cy5jb25mbGljdHMpIHtcbiAgICAgIHBhcmFtcy5jb25mbGljdHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChvcHRzLnVwZGF0ZV9zZXEpIHtcbiAgICAgIHBhcmFtcy51cGRhdGVfc2VxID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZXNjZW5kaW5nKSB7XG4gICAgICBwYXJhbXMuZGVzY2VuZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuaW5jbHVkZV9kb2NzKSB7XG4gICAgICBwYXJhbXMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBhZGRlZCBpbiBDb3VjaERCIDEuNi4wXG4gICAgaWYgKG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICAgIHBhcmFtcy5hdHRhY2htZW50cyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMua2V5KSB7XG4gICAgICBwYXJhbXMua2V5ID0gSlNPTi5zdHJpbmdpZnkob3B0cy5rZXkpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnN0YXJ0X2tleSkge1xuICAgICAgb3B0cy5zdGFydGtleSA9IG9wdHMuc3RhcnRfa2V5O1xuICAgIH1cblxuICAgIGlmIChvcHRzLnN0YXJ0a2V5KSB7XG4gICAgICBwYXJhbXMuc3RhcnRrZXkgPSBKU09OLnN0cmluZ2lmeShvcHRzLnN0YXJ0a2V5KTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lbmRfa2V5KSB7XG4gICAgICBvcHRzLmVuZGtleSA9IG9wdHMuZW5kX2tleTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lbmRrZXkpIHtcbiAgICAgIHBhcmFtcy5lbmRrZXkgPSBKU09OLnN0cmluZ2lmeShvcHRzLmVuZGtleSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmluY2x1c2l2ZV9lbmQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXJhbXMuaW5jbHVzaXZlX2VuZCA9ICEhb3B0cy5pbmNsdXNpdmVfZW5kO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5saW1pdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcmFtcy5saW1pdCA9IG9wdHMubGltaXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLnNraXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXJhbXMuc2tpcCA9IG9wdHMuc2tpcDtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW1TdHIgPSBwYXJhbXNUb1N0cihwYXJhbXMpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmtleXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICBib2R5ID0ge2tleXM6IG9wdHMua2V5c307XG4gICAgfVxuXG4gICAgZmV0Y2hKU09OKGdlbkRCVXJsKGhvc3QsICdfYWxsX2RvY3MnICsgcGFyYW1TdHIpLCB7XG4gICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgaWYgKG9wdHMuaW5jbHVkZV9kb2NzICYmIG9wdHMuYXR0YWNobWVudHMgJiYgb3B0cy5iaW5hcnkpIHtcbiAgICAgICAgcmVzdWx0LmRhdGEucm93cy5mb3JFYWNoKHJlYWRBdHRhY2htZW50c0FzQmxvYk9yQnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdC5kYXRhKTtcbiAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gIH0pO1xuXG4gIC8vIEdldCBhIGxpc3Qgb2YgY2hhbmdlcyBtYWRlIHRvIGRvY3VtZW50cyBpbiB0aGUgZGF0YWJhc2UgZ2l2ZW4gYnkgaG9zdC5cbiAgLy8gVE9ETyBBY2NvcmRpbmcgdG8gdGhlIFJFQURNRSwgdGhlcmUgc2hvdWxkIGJlIHR3byBvdGhlciBtZXRob2RzIGhlcmUsXG4gIC8vIGFwaS5jaGFuZ2VzLmFkZExpc3RlbmVyIGFuZCBhcGkuY2hhbmdlcy5yZW1vdmVMaXN0ZW5lci5cbiAgYXBpLl9jaGFuZ2VzID0gZnVuY3Rpb24gKG9wdHMpIHtcblxuICAgIC8vIFdlIGludGVybmFsbHkgcGFnZSB0aGUgcmVzdWx0cyBvZiBhIGNoYW5nZXMgcmVxdWVzdCwgdGhpcyBtZWFuc1xuICAgIC8vIGlmIHRoZXJlIGlzIGEgbGFyZ2Ugc2V0IG9mIGNoYW5nZXMgdG8gYmUgcmV0dXJuZWQgd2UgY2FuIHN0YXJ0XG4gICAgLy8gcHJvY2Vzc2luZyB0aGVtIHF1aWNrZXIgaW5zdGVhZCBvZiB3YWl0aW5nIG9uIHRoZSBlbnRpcmVcbiAgICAvLyBzZXQgb2YgY2hhbmdlcyB0byByZXR1cm4gYW5kIGF0dGVtcHRpbmcgdG8gcHJvY2VzcyB0aGVtIGF0IG9uY2VcbiAgICB2YXIgYmF0Y2hTaXplID0gJ2JhdGNoX3NpemUnIGluIG9wdHMgPyBvcHRzLmJhdGNoX3NpemUgOiBDSEFOR0VTX0JBVENIX1NJWkU7XG5cbiAgICBvcHRzID0gY2xvbmUob3B0cyk7XG5cbiAgICBpZiAob3B0cy5jb250aW51b3VzICYmICEoJ2hlYXJ0YmVhdCcgaW4gb3B0cykpIHtcbiAgICAgIG9wdHMuaGVhcnRiZWF0ID0gREVGQVVMVF9IRUFSVEJFQVQ7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3RUaW1lb3V0ID0gKCd0aW1lb3V0JyBpbiBvcHRzKSA/IG9wdHMudGltZW91dCA6IDMwICogMTAwMDtcblxuICAgIC8vIGVuc3VyZSBDSEFOR0VTX1RJTUVPVVRfQlVGRkVSIGFwcGxpZXNcbiAgICBpZiAoJ3RpbWVvdXQnIGluIG9wdHMgJiYgb3B0cy50aW1lb3V0ICYmXG4gICAgICAocmVxdWVzdFRpbWVvdXQgLSBvcHRzLnRpbWVvdXQpIDwgQ0hBTkdFU19USU1FT1VUX0JVRkZFUikge1xuICAgICAgICByZXF1ZXN0VGltZW91dCA9IG9wdHMudGltZW91dCArIENIQU5HRVNfVElNRU9VVF9CVUZGRVI7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCdoZWFydGJlYXQnIGluIG9wdHMgJiYgb3B0cy5oZWFydGJlYXQgJiZcbiAgICAgICAocmVxdWVzdFRpbWVvdXQgLSBvcHRzLmhlYXJ0YmVhdCkgPCBDSEFOR0VTX1RJTUVPVVRfQlVGRkVSKSB7XG4gICAgICAgIHJlcXVlc3RUaW1lb3V0ID0gb3B0cy5oZWFydGJlYXQgKyBDSEFOR0VTX1RJTUVPVVRfQlVGRkVSO1xuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICBpZiAoJ3RpbWVvdXQnIGluIG9wdHMgJiYgb3B0cy50aW1lb3V0KSB7XG4gICAgICBwYXJhbXMudGltZW91dCA9IG9wdHMudGltZW91dDtcbiAgICB9XG5cbiAgICB2YXIgbGltaXQgPSAodHlwZW9mIG9wdHMubGltaXQgIT09ICd1bmRlZmluZWQnKSA/IG9wdHMubGltaXQgOiBmYWxzZTtcbiAgICB2YXIgbGVmdFRvRmV0Y2ggPSBsaW1pdDtcblxuICAgIGlmIChvcHRzLnN0eWxlKSB7XG4gICAgICBwYXJhbXMuc3R5bGUgPSBvcHRzLnN0eWxlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcyB8fCBvcHRzLmZpbHRlciAmJiB0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy5pbmNsdWRlX2RvY3MgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzKSB7XG4gICAgICBwYXJhbXMuYXR0YWNobWVudHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmNvbnRpbnVvdXMpIHtcbiAgICAgIHBhcmFtcy5mZWVkID0gJ2xvbmdwb2xsJztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zZXFfaW50ZXJ2YWwpIHtcbiAgICAgIHBhcmFtcy5zZXFfaW50ZXJ2YWwgPSBvcHRzLnNlcV9pbnRlcnZhbDtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5jb25mbGljdHMpIHtcbiAgICAgIHBhcmFtcy5jb25mbGljdHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmRlc2NlbmRpbmcpIHtcbiAgICAgIHBhcmFtcy5kZXNjZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICBwYXJhbXMudXBkYXRlX3NlcSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCdoZWFydGJlYXQnIGluIG9wdHMpIHtcbiAgICAgIC8vIElmIHRoZSBoZWFydGJlYXQgdmFsdWUgaXMgZmFsc2UsIGl0IGRpc2FibGVzIHRoZSBkZWZhdWx0IGhlYXJ0YmVhdFxuICAgICAgaWYgKG9wdHMuaGVhcnRiZWF0KSB7XG4gICAgICAgIHBhcmFtcy5oZWFydGJlYXQgPSBvcHRzLmhlYXJ0YmVhdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0cy5maWx0ZXIgJiYgdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zLmZpbHRlciA9IG9wdHMuZmlsdGVyO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnZpZXcgJiYgdHlwZW9mIG9wdHMudmlldyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy5maWx0ZXIgPSAnX3ZpZXcnO1xuICAgICAgcGFyYW1zLnZpZXcgPSBvcHRzLnZpZXc7XG4gICAgfVxuXG4gICAgLy8gSWYgb3B0cy5xdWVyeV9wYXJhbXMgZXhpc3RzLCBwYXNzIGl0IHRocm91Z2ggdG8gdGhlIGNoYW5nZXMgcmVxdWVzdC5cbiAgICAvLyBUaGVzZSBwYXJhbWV0ZXJzIG1heSBiZSB1c2VkIGJ5IHRoZSBmaWx0ZXIgb24gdGhlIHNvdXJjZSBkYXRhYmFzZS5cbiAgICBpZiAob3B0cy5xdWVyeV9wYXJhbXMgJiYgdHlwZW9mIG9wdHMucXVlcnlfcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIgcGFyYW1fbmFtZSBpbiBvcHRzLnF1ZXJ5X3BhcmFtcykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob3B0cy5xdWVyeV9wYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1fbmFtZSkpIHtcbiAgICAgICAgICBwYXJhbXNbcGFyYW1fbmFtZV0gPSBvcHRzLnF1ZXJ5X3BhcmFtc1twYXJhbV9uYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXRob2QgPSAnR0VUJztcbiAgICB2YXIgYm9keTtcblxuICAgIGlmIChvcHRzLmRvY19pZHMpIHtcbiAgICAgIC8vIHNldCB0aGlzIGF1dG9tYWdpY2FsbHkgZm9yIHRoZSB1c2VyOyBpdCdzIGFubm95aW5nIHRoYXQgY291Y2hkYlxuICAgICAgLy8gcmVxdWlyZXMgYm90aCBhIFwiZmlsdGVyXCIgYW5kIGEgXCJkb2NfaWRzXCIgcGFyYW0uXG4gICAgICBwYXJhbXMuZmlsdGVyID0gJ19kb2NfaWRzJztcbiAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgIGJvZHkgPSB7ZG9jX2lkczogb3B0cy5kb2NfaWRzIH07XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZWxzZSBpZiAob3B0cy5zZWxlY3Rvcikge1xuICAgICAgLy8gc2V0IHRoaXMgYXV0b21hZ2ljYWxseSBmb3IgdGhlIHVzZXIsIHNpbWlsYXIgdG8gYWJvdmVcbiAgICAgIHBhcmFtcy5maWx0ZXIgPSAnX3NlbGVjdG9yJztcbiAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgIGJvZHkgPSB7c2VsZWN0b3I6IG9wdHMuc2VsZWN0b3IgfTtcbiAgICB9XG5cbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBhKCk7XG4gICAgdmFyIGxhc3RGZXRjaGVkU2VxO1xuXG4gICAgLy8gR2V0IGFsbCB0aGUgY2hhbmdlcyBzdGFydGluZyB3dGloIHRoZSBvbmUgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlXG4gICAgLy8gc2VxdWVuY2UgbnVtYmVyIGdpdmVuIGJ5IHNpbmNlLlxuICAgIHZhciBmZXRjaERhdGEgPSBmdW5jdGlvbiAoc2luY2UsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAob3B0cy5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5zaW5jZSA9IHNpbmNlO1xuICAgICAgLy8gXCJzaW5jZVwiIGNhbiBiZSBhbnkga2luZCBvZiBqc29uIG9iamVjdCBpbiBDbG91ZGFudC9Db3VjaERCIDIueFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnNpbmNlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHBhcmFtcy5zaW5jZSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5zaW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmRlc2NlbmRpbmcpIHtcbiAgICAgICAgaWYgKGxpbWl0KSB7XG4gICAgICAgICAgcGFyYW1zLmxpbWl0ID0gbGVmdFRvRmV0Y2g7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5saW1pdCA9ICghbGltaXQgfHwgbGVmdFRvRmV0Y2ggPiBiYXRjaFNpemUpID9cbiAgICAgICAgICBiYXRjaFNpemUgOiBsZWZ0VG9GZXRjaDtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBvcHRpb25zIGZvciB0aGUgYWpheCBjYWxsXG4gICAgICB2YXIgdXJsID0gZ2VuREJVcmwoaG9zdCwgJ19jaGFuZ2VzJyArIHBhcmFtc1RvU3RyKHBhcmFtcykpO1xuICAgICAgdmFyIGZldGNoT3B0cyA9IHtcbiAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgICB9O1xuICAgICAgbGFzdEZldGNoZWRTZXEgPSBzaW5jZTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAob3B0cy5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBjaGFuZ2VzXG4gICAgICBzZXR1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hKU09OKHVybCwgZmV0Y2hPcHRzLCBjYWxsYmFjayk7XG4gICAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIElmIG9wdHMuc2luY2UgZXhpc3RzLCBnZXQgYWxsIHRoZSBjaGFuZ2VzIGZyb20gdGhlIHNlcXVlbmNlXG4gICAgLy8gbnVtYmVyIGdpdmVuIGJ5IG9wdHMuc2luY2UuIE90aGVyd2lzZSwgZ2V0IGFsbCB0aGUgY2hhbmdlc1xuICAgIC8vIGZyb20gdGhlIHNlcXVlbmNlIG51bWJlciAwLlxuICAgIHZhciByZXN1bHRzID0ge3Jlc3VsdHM6IFtdfTtcblxuICAgIHZhciBmZXRjaGVkID0gZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICBpZiAob3B0cy5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByYXdfcmVzdWx0c19sZW5ndGggPSAwO1xuICAgICAgLy8gSWYgdGhlIHJlc3VsdCBvZiB0aGUgYWpheCBjYWxsIChyZXMpIGNvbnRhaW5zIGNoYW5nZXMgKHJlcy5yZXN1bHRzKVxuICAgICAgaWYgKHJlcyAmJiByZXMucmVzdWx0cykge1xuICAgICAgICByYXdfcmVzdWx0c19sZW5ndGggPSByZXMucmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIHJlc3VsdHMubGFzdF9zZXEgPSByZXMubGFzdF9zZXE7XG4gICAgICAgIHZhciBwZW5kaW5nID0gbnVsbDtcbiAgICAgICAgdmFyIGxhc3RTZXEgPSBudWxsO1xuICAgICAgICAvLyBBdHRhY2ggJ3BlbmRpbmcnIHByb3BlcnR5IGlmIHNlcnZlciBzdXBwb3J0cyBpdCAoQ291Y2hEQiAyLjArKVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHR5cGVvZiByZXMucGVuZGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBwZW5kaW5nID0gcmVzLnBlbmRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRzLmxhc3Rfc2VxID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcmVzdWx0cy5sYXN0X3NlcSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBsYXN0U2VxID0gcmVzdWx0cy5sYXN0X3NlcTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgZWFjaCBjaGFuZ2VcbiAgICAgICAgdmFyIHJlcSA9IHt9O1xuICAgICAgICByZXEucXVlcnkgPSBvcHRzLnF1ZXJ5X3BhcmFtcztcbiAgICAgICAgcmVzLnJlc3VsdHMgPSByZXMucmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBsZWZ0VG9GZXRjaC0tO1xuICAgICAgICAgIHZhciByZXQgPSBmaWx0ZXJDaGFuZ2Uob3B0cykoYyk7XG4gICAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgaWYgKG9wdHMuaW5jbHVkZV9kb2NzICYmIG9wdHMuYXR0YWNobWVudHMgJiYgb3B0cy5iaW5hcnkpIHtcbiAgICAgICAgICAgICAgcmVhZEF0dGFjaG1lbnRzQXNCbG9iT3JCdWZmZXIoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5yZXR1cm5fZG9jcykge1xuICAgICAgICAgICAgICByZXN1bHRzLnJlc3VsdHMucHVzaChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdHMub25DaGFuZ2UoYywgcGVuZGluZywgbGFzdFNlcSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBhbiBlcnJvciwgc3RvcCBsaXN0ZW5pbmcgZm9yIGNoYW5nZXMgYW5kIGNhbGxcbiAgICAgICAgLy8gb3B0cy5jb21wbGV0ZVxuICAgICAgICBvcHRzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICBvcHRzLmNvbXBsZXRlKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZXMgZmVlZCBtYXkgaGF2ZSB0aW1lZCBvdXQgd2l0aCBubyByZXN1bHRzXG4gICAgICAvLyBpZiBzbyByZXVzZSBsYXN0IHVwZGF0ZSBzZXF1ZW5jZVxuICAgICAgaWYgKHJlcyAmJiByZXMubGFzdF9zZXEpIHtcbiAgICAgICAgbGFzdEZldGNoZWRTZXEgPSByZXMubGFzdF9zZXE7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaW5pc2hlZCA9IChsaW1pdCAmJiBsZWZ0VG9GZXRjaCA8PSAwKSB8fFxuICAgICAgICAocmVzICYmIHJhd19yZXN1bHRzX2xlbmd0aCA8IGJhdGNoU2l6ZSkgfHxcbiAgICAgICAgKG9wdHMuZGVzY2VuZGluZyk7XG5cbiAgICAgIGlmICgob3B0cy5jb250aW51b3VzICYmICEobGltaXQgJiYgbGVmdFRvRmV0Y2ggPD0gMCkpIHx8ICFmaW5pc2hlZCkge1xuICAgICAgICAvLyBRdWV1ZSBhIGNhbGwgdG8gZmV0Y2ggYWdhaW4gd2l0aCB0aGUgbmV3ZXN0IHNlcXVlbmNlIG51bWJlclxuICAgICAgICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkgeyBmZXRjaERhdGEobGFzdEZldGNoZWRTZXEsIGZldGNoZWQpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGRvbmUsIGNhbGwgdGhlIGNhbGxiYWNrXG4gICAgICAgIG9wdHMuY29tcGxldGUobnVsbCwgcmVzdWx0cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YShvcHRzLnNpbmNlIHx8IDAsIGZldGNoZWQpO1xuXG4gICAgLy8gUmV0dXJuIGEgbWV0aG9kIHRvIGNhbmNlbCB0aGlzIG1ldGhvZCBmcm9tIHByb2Nlc3NpbmcgYW55IG1vcmVcbiAgICByZXR1cm4ge1xuICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wdHMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIEdpdmVuIGEgc2V0IG9mIGRvY3VtZW50L3JldmlzaW9uIElEcyAoZ2l2ZW4gYnkgcmVxKSwgdGV0cyB0aGUgc3Vic2V0IG9mXG4gIC8vIHRob3NlIHRoYXQgZG8gTk9UIGNvcnJlc3BvbmQgdG8gcmV2aXNpb25zIHN0b3JlZCBpbiB0aGUgZGF0YWJhc2UuXG4gIC8vIFNlZSBodHRwOi8vd2lraS5hcGFjaGUub3JnL2NvdWNoZGIvSHR0cFBvc3RSZXZzRGlmZlxuICBhcGkucmV2c0RpZmYgPSBhZGFwdGVyRnVuJCQxKCdyZXZzRGlmZicsIGZ1bmN0aW9uIChyZXEsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgLy8gSWYgbm8gb3B0aW9ucyB3ZXJlIGdpdmVuLCBzZXQgdGhlIGNhbGxiYWNrIHRvIGJlIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBtaXNzaW5nIGRvY3VtZW50L3JldmlzaW9uIElEc1xuICAgIGZldGNoSlNPTihnZW5EQlVybChob3N0LCAnX3JldnNfZGlmZicpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcSlcbiAgICB9LCBjYWxsYmFjaykuY2F0Y2goY2FsbGJhY2spO1xuICB9KTtcblxuICBhcGkuX2Nsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfTtcblxuICBhcGkuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBmZXRjaEpTT04oZ2VuREJVcmwoaG9zdCwgJycpLCB7bWV0aG9kOiAnREVMRVRFJ30pLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGpzb24pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCB7b2s6IHRydWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbi8vIEh0dHBQb3VjaCBpcyBhIHZhbGlkIGFkYXB0ZXIuXG5IdHRwUG91Y2gudmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gSHR0cFBvdWNoJDEgKFBvdWNoREIpIHtcbiAgUG91Y2hEQi5hZGFwdGVyKCdodHRwJywgSHR0cFBvdWNoLCBmYWxzZSk7XG4gIFBvdWNoREIuYWRhcHRlcignaHR0cHMnLCBIdHRwUG91Y2gsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gUXVlcnlQYXJzZUVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5zdGF0dXMgPSA0MDA7XG4gIHRoaXMubmFtZSA9ICdxdWVyeV9wYXJzZV9lcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMuZXJyb3IgPSB0cnVlO1xuICB0cnkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFF1ZXJ5UGFyc2VFcnJvcik7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmluaGVyaXRzKFF1ZXJ5UGFyc2VFcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiBOb3RGb3VuZEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5zdGF0dXMgPSA0MDQ7XG4gIHRoaXMubmFtZSA9ICdub3RfZm91bmQnO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBOb3RGb3VuZEVycm9yKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuaW5oZXJpdHMoTm90Rm91bmRFcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiBCdWlsdEluRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLnN0YXR1cyA9IDUwMDtcbiAgdGhpcy5uYW1lID0gJ2ludmFsaWRfdmFsdWUnO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBCdWlsdEluRXJyb3IpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5pbmhlcml0cyhCdWlsdEluRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gcHJvbWlzZWRDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkoZnVuKSB7XG4gIHJldHVybiBnZXRBcmd1bWVudHMoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICB2YXIgY2IgPSBhcmdzLnBvcCgpO1xuICAgIHZhciBwcm9taXNlID0gZnVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb21pc2VkQ2FsbGJhY2socHJvbWlzZSwgY2IpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfSk7XG59XG5cbi8vIFByb21pc2UgZmluYWxseSB1dGlsIHNpbWlsYXIgdG8gUS5maW5hbGx5XG5mdW5jdGlvbiBmaW4ocHJvbWlzZSwgZmluYWxQcm9taXNlRmFjdG9yeSkge1xuICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZXR1cm4gZmluYWxQcm9taXNlRmFjdG9yeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiBmaW5hbFByb21pc2VGYWN0b3J5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyByZWFzb247XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXF1ZW50aWFsaXplKHF1ZXVlLCBwcm9taXNlRmFjdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gcXVldWUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlRmFjdG9yeS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gdW5pcSBhbiBhcnJheSBvZiBzdHJpbmdzLCBvcmRlciBub3QgZ3VhcmFudGVlZFxuLy8gc2ltaWxhciB0byB1bmRlcnNjb3JlL2xvZGFzaCBfLnVuaXFcbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XG4gIHZhciB0aGVTZXQgPSBuZXcgRXhwb3J0ZWRTZXQoYXJyKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0aGVTZXQuc2l6ZSk7XG4gIHZhciBpbmRleCA9IC0xO1xuICB0aGVTZXQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1hcFRvS2V5c0FycmF5KG1hcCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG1hcC5zaXplKTtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0ga2V5O1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVpbHRJbkVycm9yKG5hbWUpIHtcbiAgdmFyIG1lc3NhZ2UgPSAnYnVpbHRpbiAnICsgbmFtZSArXG4gICAgJyBmdW5jdGlvbiByZXF1aXJlcyBtYXAgdmFsdWVzIHRvIGJlIG51bWJlcnMnICtcbiAgICAnIG9yIG51bWJlciBhcnJheXMnO1xuICByZXR1cm4gbmV3IEJ1aWx0SW5FcnJvcihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3VtKHZhbHVlcykge1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBudW0gPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShudW0pKSB7XG4gICAgICAgIC8vIGxpc3RzIG9mIG51bWJlcnMgYXJlIGFsc28gYWxsb3dlZCwgc3VtIHRoZW0gc2VwYXJhdGVseVxuICAgICAgICByZXN1bHQgPSB0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJyA/IFtyZXN1bHRdIDogcmVzdWx0O1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgakxlbiA9IG51bS5sZW5ndGg7IGogPCBqTGVuOyBqKyspIHtcbiAgICAgICAgICB2YXIgak51bSA9IG51bVtqXTtcbiAgICAgICAgICBpZiAodHlwZW9mIGpOdW0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBjcmVhdGVCdWlsdEluRXJyb3IoJ19zdW0nKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHRbal0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChqTnVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2pdICs9IGpOdW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBub3QgYXJyYXkvbnVtYmVyXG4gICAgICAgIHRocm93IGNyZWF0ZUJ1aWx0SW5FcnJvcignX3N1bScpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCArPSBudW07XG4gICAgfSBlbHNlIHsgLy8gYWRkIG51bWJlciB0byBhcnJheVxuICAgICAgcmVzdWx0WzBdICs9IG51bTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGxvZyA9IGd1YXJkZWRDb25zb2xlLmJpbmQobnVsbCwgJ2xvZycpO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHRvSlNPTiA9IEpTT04ucGFyc2U7XG5cbmZ1bmN0aW9uIGV2YWxGdW5jdGlvbldpdGhFdmFsKGZ1bmMsIGVtaXQpIHtcbiAgcmV0dXJuIHNjb3BlRXZhbChcbiAgICBcInJldHVybiAoXCIgKyBmdW5jLnJlcGxhY2UoLztcXHMqJC8sIFwiXCIpICsgXCIpO1wiLFxuICAgIHtcbiAgICAgIGVtaXQ6IGVtaXQsXG4gICAgICBzdW06IHN1bSxcbiAgICAgIGxvZzogbG9nLFxuICAgICAgaXNBcnJheTogaXNBcnJheSxcbiAgICAgIHRvSlNPTjogdG9KU09OXG4gICAgfVxuICApO1xufVxuXG4vKlxuICogU2ltcGxlIHRhc2sgcXVldWUgdG8gc2VxdWVudGlhbGl6ZSBhY3Rpb25zLiBBc3N1bWVzXG4gKiBjYWxsYmFja3Mgd2lsbCBldmVudHVhbGx5IGZpcmUgKG9uY2UpLlxuICovXG5cblxuZnVuY3Rpb24gVGFza1F1ZXVlJDEoKSB7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsKSB7ZnVsZmlsbCgpOyB9KTtcbn1cblRhc2tRdWV1ZSQxLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAocHJvbWlzZUZhY3RvcnkpIHtcbiAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBqdXN0IHJlY292ZXJcbiAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb21pc2VGYWN0b3J5KCk7XG4gIH0pO1xuICByZXR1cm4gdGhpcy5wcm9taXNlO1xufTtcblRhc2tRdWV1ZSQxLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnByb21pc2U7XG59O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkoaW5wdXQpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJzsgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3IgZW1wdHkgcmVkdWNlXG4gIH1cbiAgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBtYXByZWR1Y2UsIGZ1bmN0aW9ucy9zdHJpbmdzIGFyZSBzdHJpbmdpZmllZFxuICAvLyBhcy1pcy4gZXZlcnl0aGluZyBlbHNlIGlzIEpTT04tc3RyaW5naWZpZWQuXG4gIHN3aXRjaCAodHlwZW9mIGlucHV0KSB7XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgLy8gZS5nLiBhIG1hcHJlZHVjZSBtYXBcbiAgICAgIHJldHVybiBpbnB1dC50b1N0cmluZygpO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAvLyBlLmcuIGEgbWFwcmVkdWNlIGJ1aWx0LWluIF9yZWR1Y2UgZnVuY3Rpb25cbiAgICAgIHJldHVybiBpbnB1dC50b1N0cmluZygpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBlLmcuIGEgSlNPTiBvYmplY3QgaW4gdGhlIGNhc2Ugb2YgbWFuZ28gcXVlcmllc1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGlucHV0KTtcbiAgfVxufVxuXG4vKiBjcmVhdGUgYSBzdHJpbmcgc2lnbmF0dXJlIGZvciBhIHZpZXcgc28gd2UgY2FuIGNhY2hlIGl0IGFuZCB1bmlxIGl0ICovXG5mdW5jdGlvbiBjcmVhdGVWaWV3U2lnbmF0dXJlKG1hcEZ1biwgcmVkdWNlRnVuKSB7XG4gIC8vIHRoZSBcInVuZGVmaW5lZFwiIHBhcnQgaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIHJldHVybiBzdHJpbmdpZnkobWFwRnVuKSArIHN0cmluZ2lmeShyZWR1Y2VGdW4pICsgJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXcoc291cmNlREIsIHZpZXdOYW1lLCBtYXBGdW4sIHJlZHVjZUZ1biwgdGVtcG9yYXJ5LCBsb2NhbERvY05hbWUpIHtcbiAgdmFyIHZpZXdTaWduYXR1cmUgPSBjcmVhdGVWaWV3U2lnbmF0dXJlKG1hcEZ1biwgcmVkdWNlRnVuKTtcblxuICB2YXIgY2FjaGVkVmlld3M7XG4gIGlmICghdGVtcG9yYXJ5KSB7XG4gICAgLy8gY2FjaGUgdGhpcyB0byBlbnN1cmUgd2UgZG9uJ3QgdHJ5IHRvIHVwZGF0ZSB0aGUgc2FtZSB2aWV3IHR3aWNlXG4gICAgY2FjaGVkVmlld3MgPSBzb3VyY2VEQi5fY2FjaGVkVmlld3MgPSBzb3VyY2VEQi5fY2FjaGVkVmlld3MgfHwge307XG4gICAgaWYgKGNhY2hlZFZpZXdzW3ZpZXdTaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gY2FjaGVkVmlld3Nbdmlld1NpZ25hdHVyZV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb21pc2VGb3JWaWV3ID0gc291cmNlREIuaW5mbygpLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcblxuICAgIHZhciBkZXBEYk5hbWUgPSBpbmZvLmRiX25hbWUgKyAnLW1ydmlldy0nICtcbiAgICAgICh0ZW1wb3JhcnkgPyAndGVtcCcgOiBzdHJpbmdNZDUodmlld1NpZ25hdHVyZSkpO1xuXG4gICAgLy8gc2F2ZSB0aGUgdmlldyBuYW1lIGluIHRoZSBzb3VyY2UgZGIgc28gaXQgY2FuIGJlIGNsZWFuZWQgdXAgaWYgbmVjZXNzYXJ5XG4gICAgLy8gKGUuZy4gd2hlbiB0aGUgX2Rlc2lnbiBkb2MgaXMgZGVsZXRlZCwgcmVtb3ZlIGFsbCBhc3NvY2lhdGVkIHZpZXcgZGF0YSlcbiAgICBmdW5jdGlvbiBkaWZmRnVuY3Rpb24oZG9jKSB7XG4gICAgICBkb2Mudmlld3MgPSBkb2Mudmlld3MgfHwge307XG4gICAgICB2YXIgZnVsbFZpZXdOYW1lID0gdmlld05hbWU7XG4gICAgICBpZiAoZnVsbFZpZXdOYW1lLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcbiAgICAgICAgZnVsbFZpZXdOYW1lID0gdmlld05hbWUgKyAnLycgKyB2aWV3TmFtZTtcbiAgICAgIH1cbiAgICAgIHZhciBkZXBEYnMgPSBkb2Mudmlld3NbZnVsbFZpZXdOYW1lXSA9IGRvYy52aWV3c1tmdWxsVmlld05hbWVdIHx8IHt9O1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZGVwRGJzW2RlcERiTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuOyAvLyBubyB1cGRhdGUgbmVjZXNzYXJ5XG4gICAgICB9XG4gICAgICBkZXBEYnNbZGVwRGJOYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gZG9jO1xuICAgIH1cbiAgICByZXR1cm4gdXBzZXJ0KHNvdXJjZURCLCAnX2xvY2FsLycgKyBsb2NhbERvY05hbWUsIGRpZmZGdW5jdGlvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc291cmNlREIucmVnaXN0ZXJEZXBlbmRlbnREYXRhYmFzZShkZXBEYk5hbWUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgZGIgPSByZXMuZGI7XG4gICAgICAgIGRiLmF1dG9fY29tcGFjdGlvbiA9IHRydWU7XG4gICAgICAgIHZhciB2aWV3ID0ge1xuICAgICAgICAgIG5hbWU6IGRlcERiTmFtZSxcbiAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgc291cmNlREI6IHNvdXJjZURCLFxuICAgICAgICAgIGFkYXB0ZXI6IHNvdXJjZURCLmFkYXB0ZXIsXG4gICAgICAgICAgbWFwRnVuOiBtYXBGdW4sXG4gICAgICAgICAgcmVkdWNlRnVuOiByZWR1Y2VGdW5cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZpZXcuZGIuZ2V0KCdfbG9jYWwvbGFzdFNlcScpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChsYXN0U2VxRG9jKSB7XG4gICAgICAgICAgdmlldy5zZXEgPSBsYXN0U2VxRG9jID8gbGFzdFNlcURvYy5zZXEgOiAwO1xuICAgICAgICAgIGlmIChjYWNoZWRWaWV3cykge1xuICAgICAgICAgICAgdmlldy5kYi5vbmNlKCdkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZWRWaWV3c1t2aWV3U2lnbmF0dXJlXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKGNhY2hlZFZpZXdzKSB7XG4gICAgY2FjaGVkVmlld3Nbdmlld1NpZ25hdHVyZV0gPSBwcm9taXNlRm9yVmlldztcbiAgfVxuICByZXR1cm4gcHJvbWlzZUZvclZpZXc7XG59XG5cbnZhciBwZXJzaXN0ZW50UXVldWVzID0ge307XG52YXIgdGVtcFZpZXdRdWV1ZSA9IG5ldyBUYXNrUXVldWUkMSgpO1xudmFyIENIQU5HRVNfQkFUQ0hfU0laRSQxID0gNTA7XG5cbmZ1bmN0aW9uIHBhcnNlVmlld05hbWUobmFtZSkge1xuICAvLyBjYW4gYmUgZWl0aGVyICdkZG9jbmFtZS92aWV3bmFtZScgb3IganVzdCAndmlld25hbWUnXG4gIC8vICh3aGVyZSB0aGUgZGRvYyBuYW1lIGlzIHRoZSBzYW1lKVxuICByZXR1cm4gbmFtZS5pbmRleE9mKCcvJykgPT09IC0xID8gW25hbWUsIG5hbWVdIDogbmFtZS5zcGxpdCgnLycpO1xufVxuXG5mdW5jdGlvbiBpc0dlbk9uZShjaGFuZ2VzKSB7XG4gIC8vIG9ubHkgcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgY2hhbmdlIGlzIDEtXG4gIC8vIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgbGVhZnNcbiAgcmV0dXJuIGNoYW5nZXMubGVuZ3RoID09PSAxICYmIC9eMS0vLnRlc3QoY2hhbmdlc1swXS5yZXYpO1xufVxuXG5mdW5jdGlvbiBlbWl0RXJyb3IoZGIsIGUpIHtcbiAgdHJ5IHtcbiAgICBkYi5lbWl0KCdlcnJvcicsIGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBndWFyZGVkQ29uc29sZSgnZXJyb3InLFxuICAgICAgJ1RoZSB1c2VyXFwncyBtYXAvcmVkdWNlIGZ1bmN0aW9uIHRocmV3IGFuIHVuY2F1Z2h0IGVycm9yLlxcbicgK1xuICAgICAgJ1lvdSBjYW4gZGVidWcgdGhpcyBlcnJvciBieSBkb2luZzpcXG4nICtcbiAgICAgICdteURhdGFiYXNlLm9uKFxcJ2Vycm9yXFwnLCBmdW5jdGlvbiAoZXJyKSB7IGRlYnVnZ2VyOyB9KTtcXG4nICtcbiAgICAgICdQbGVhc2UgZG91YmxlLWNoZWNrIHlvdXIgbWFwL3JlZHVjZSBmdW5jdGlvbi4nKTtcbiAgICBndWFyZGVkQ29uc29sZSgnZXJyb3InLCBlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gXCJhYnN0cmFjdFwiIG1hcHJlZHVjZSBvYmplY3Qgb2YgdGhlIGZvcm06XG4gKlxuICogICB7XG4gKiAgICAgcXVlcnk6IHF1ZXJ5RnVuLFxuICogICAgIHZpZXdDbGVhbnVwOiB2aWV3Q2xlYW51cEZ1blxuICogICB9XG4gKlxuICogQXJndW1lbnRzIGFyZTpcbiAqXG4gKiBsb2NhbERvYzogc3RyaW5nXG4gKiAgIFRoaXMgaXMgZm9yIHRoZSBsb2NhbCBkb2MgdGhhdCBnZXRzIHNhdmVkIGluIG9yZGVyIHRvIHRyYWNrIHRoZVxuICogICBcImRlcGVuZGVudFwiIERCcyBhbmQgY2xlYW4gdGhlbSB1cCBmb3Igdmlld0NsZWFudXAuIEl0IHNob3VsZCBiZVxuICogICB1bmlxdWUsIHNvIHRoYXQgaW5kZXhlciBwbHVnaW5zIGRvbid0IGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyLlxuICogbWFwcGVyOiBmdW5jdGlvbiAobWFwRnVuRGVmLCBlbWl0KVxuICogICBSZXR1cm5zIGEgbWFwIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBtYXBGdW5EZWYsIHdoaWNoIGluIHRoZSBjYXNlIG9mXG4gKiAgIG5vcm1hbCBtYXAvcmVkdWNlIGlzIGp1c3QgdGhlIGRlLXN0cmluZ2lmaWVkIGZ1bmN0aW9uLCBidXQgbWF5IGJlXG4gKiAgIHNvbWV0aGluZyBlbHNlLCBzdWNoIGFzIGFuIG9iamVjdCBpbiB0aGUgY2FzZSBvZiBwb3VjaGRiLWZpbmQuXG4gKiByZWR1Y2VyOiBmdW5jdGlvbiAocmVkdWNlRnVuRGVmKVxuICogICBEaXR0bywgYnV0IGZvciByZWR1Y2luZy4gTW9kdWxlcyBkb24ndCBoYXZlIHRvIHN1cHBvcnQgcmVkdWNpbmdcbiAqICAgKGUuZy4gcG91Y2hkYi1maW5kKS5cbiAqIGRkb2NWYWxpZGF0b3I6IGZ1bmN0aW9uIChkZG9jLCB2aWV3TmFtZSlcbiAqICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBkZG9jIG9yIHZpZXdOYW1lIGlzIG5vdCB2YWxpZC5cbiAqICAgVGhpcyBjb3VsZCBiZSBhIHdheSB0byBjb21tdW5pY2F0ZSB0byB0aGUgdXNlciB0aGF0IHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGVcbiAqICAgaW5kZXhlciBpcyBpbnZhbGlkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBYnN0cmFjdE1hcFJlZHVjZShsb2NhbERvY05hbWUsIG1hcHBlciwgcmVkdWNlciwgZGRvY1ZhbGlkYXRvcikge1xuXG4gIGZ1bmN0aW9uIHRyeU1hcChkYiwgZnVuLCBkb2MpIHtcbiAgICAvLyBlbWl0IGFuIGV2ZW50IGlmIHRoZXJlIHdhcyBhbiBlcnJvciB0aHJvd24gYnkgYSBtYXAgZnVuY3Rpb24uXG4gICAgLy8gcHV0dGluZyB0cnkvY2F0Y2hlcyBpbiBhIHNpbmdsZSBmdW5jdGlvbiBhbHNvIGF2b2lkcyBkZW9wdGltaXphdGlvbnMuXG4gICAgdHJ5IHtcbiAgICAgIGZ1bihkb2MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVtaXRFcnJvcihkYiwgZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJ5UmVkdWNlKGRiLCBmdW4sIGtleXMsIHZhbHVlcywgcmVyZWR1Y2UpIHtcbiAgICAvLyBzYW1lIGFzIGFib3ZlLCBidXQgcmV0dXJuaW5nIHRoZSByZXN1bHQgb3IgYW4gZXJyb3IuIHRoZXJlIGFyZSB0d28gc2VwYXJhdGVcbiAgICAvLyBmdW5jdGlvbnMgdG8gYXZvaWQgZXh0cmEgbWVtb3J5IGFsbG9jYXRpb25zIHNpbmNlIHRoZSB0cnlDb2RlKCkgY2FzZSBpcyB1c2VkXG4gICAgLy8gZm9yIGN1c3RvbSBtYXAgZnVuY3Rpb25zIChjb21tb24pIHZzIHRoaXMgZnVuY3Rpb24sIHdoaWNoIGlzIG9ubHkgdXNlZCBmb3JcbiAgICAvLyBjdXN0b20gcmVkdWNlIGZ1bmN0aW9ucyAocmFyZSlcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtvdXRwdXQgOiBmdW4oa2V5cywgdmFsdWVzLCByZXJlZHVjZSl9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVtaXRFcnJvcihkYiwgZSk7XG4gICAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzb3J0QnlLZXlUaGVuVmFsdWUoeCwgeSkge1xuICAgIHZhciBrZXlDb21wYXJlID0gY29sbGF0ZSh4LmtleSwgeS5rZXkpO1xuICAgIHJldHVybiBrZXlDb21wYXJlICE9PSAwID8ga2V5Q29tcGFyZSA6IGNvbGxhdGUoeC52YWx1ZSwgeS52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGljZVJlc3VsdHMocmVzdWx0cywgbGltaXQsIHNraXApIHtcbiAgICBza2lwID0gc2tpcCB8fCAwO1xuICAgIGlmICh0eXBlb2YgbGltaXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cy5zbGljZShza2lwLCBsaW1pdCArIHNraXApO1xuICAgIH0gZWxzZSBpZiAoc2tpcCA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHRzLnNsaWNlKHNraXApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvd1RvRG9jSWQocm93KSB7XG4gICAgdmFyIHZhbCA9IHJvdy52YWx1ZTtcbiAgICAvLyBVc2VycyBjYW4gZXhwbGljaXRseSBzcGVjaWZ5IGEgam9pbmVkIGRvYyBfaWQsIG9yIGl0XG4gICAgLy8gZGVmYXVsdHMgdG8gdGhlIGRvYyBfaWQgdGhhdCBlbWl0dGVkIHRoZSBrZXkvdmFsdWUuXG4gICAgdmFyIGRvY0lkID0gKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwuX2lkKSB8fCByb3cuaWQ7XG4gICAgcmV0dXJuIGRvY0lkO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEF0dGFjaG1lbnRzQXNCbG9iT3JCdWZmZXIocmVzKSB7XG4gICAgcmVzLnJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICB2YXIgYXR0cyA9IHJvdy5kb2MgJiYgcm93LmRvYy5fYXR0YWNobWVudHM7XG4gICAgICBpZiAoIWF0dHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoYXR0cykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgdmFyIGF0dCA9IGF0dHNbZmlsZW5hbWVdO1xuICAgICAgICBhdHRzW2ZpbGVuYW1lXS5kYXRhID0gYjY0VG9CbHVmZmVyKGF0dC5kYXRhLCBhdHQuY29udGVudF90eXBlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zdHByb2Nlc3NBdHRhY2htZW50cyhvcHRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcyAmJiBvcHRzLmF0dGFjaG1lbnRzICYmIG9wdHMuYmluYXJ5KSB7XG4gICAgICAgIHJlYWRBdHRhY2htZW50c0FzQmxvYk9yQnVmZmVyKHJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRIdHRwUGFyYW0ocGFyYW1OYW1lLCBvcHRzLCBwYXJhbXMsIGFzSnNvbikge1xuICAgIC8vIGFkZCBhbiBodHRwIHBhcmFtIGZyb20gb3B0cyB0byBwYXJhbXMsIG9wdGlvbmFsbHkganNvbi1lbmNvZGVkXG4gICAgdmFyIHZhbCA9IG9wdHNbcGFyYW1OYW1lXTtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChhc0pzb24pIHtcbiAgICAgICAgdmFsID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgICAgfVxuICAgICAgcGFyYW1zLnB1c2gocGFyYW1OYW1lICsgJz0nICsgdmFsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb2VyY2VJbnRlZ2VyKGludGVnZXJDYW5kaWRhdGUpIHtcbiAgICBpZiAodHlwZW9mIGludGVnZXJDYW5kaWRhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXNOdW1iZXIgPSBOdW1iZXIoaW50ZWdlckNhbmRpZGF0ZSk7XG4gICAgICAvLyBwcmV2ZW50cyBlLmcuICcxZm9vJyBvciAnMS4xJyBiZWluZyBjb2VyY2VkIHRvIDFcbiAgICAgIGlmICghaXNOYU4oYXNOdW1iZXIpICYmIGFzTnVtYmVyID09PSBwYXJzZUludChpbnRlZ2VyQ2FuZGlkYXRlLCAxMCkpIHtcbiAgICAgICAgcmV0dXJuIGFzTnVtYmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGludGVnZXJDYW5kaWRhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29lcmNlT3B0aW9ucyhvcHRzKSB7XG4gICAgb3B0cy5ncm91cF9sZXZlbCA9IGNvZXJjZUludGVnZXIob3B0cy5ncm91cF9sZXZlbCk7XG4gICAgb3B0cy5saW1pdCA9IGNvZXJjZUludGVnZXIob3B0cy5saW1pdCk7XG4gICAgb3B0cy5za2lwID0gY29lcmNlSW50ZWdlcihvcHRzLnNraXApO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tQb3NpdGl2ZUludGVnZXIobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlcikge1xuICAgICAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAgbmV3IFF1ZXJ5UGFyc2VFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgaW50ZWdlcjogXCInICtcbiAgICAgICAgICBudW1iZXIgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUXVlcnlQYXJzZUVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwb3NpdGl2ZSBpbnRlZ2VyOiAnICtcbiAgICAgICAgICAnXCInICsgbnVtYmVyICsgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tRdWVyeVBhcnNlRXJyb3Iob3B0aW9ucywgZnVuKSB7XG4gICAgdmFyIHN0YXJ0a2V5TmFtZSA9IG9wdGlvbnMuZGVzY2VuZGluZyA/ICdlbmRrZXknIDogJ3N0YXJ0a2V5JztcbiAgICB2YXIgZW5ka2V5TmFtZSA9IG9wdGlvbnMuZGVzY2VuZGluZyA/ICdzdGFydGtleScgOiAnZW5ka2V5JztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tzdGFydGtleU5hbWVdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIG9wdGlvbnNbZW5ka2V5TmFtZV0gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBjb2xsYXRlKG9wdGlvbnNbc3RhcnRrZXlOYW1lXSwgb3B0aW9uc1tlbmRrZXlOYW1lXSkgPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgUXVlcnlQYXJzZUVycm9yKCdObyByb3dzIGNhbiBtYXRjaCB5b3VyIGtleSByYW5nZSwgJyArXG4gICAgICAgICdyZXZlcnNlIHlvdXIgc3RhcnRfa2V5IGFuZCBlbmRfa2V5IG9yIHNldCB7ZGVzY2VuZGluZyA6IHRydWV9Jyk7XG4gICAgfSBlbHNlIGlmIChmdW4ucmVkdWNlICYmIG9wdGlvbnMucmVkdWNlICE9PSBmYWxzZSkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZV9kb2NzKSB7XG4gICAgICAgIHRocm93IG5ldyBRdWVyeVBhcnNlRXJyb3IoJ3tpbmNsdWRlX2RvY3M6dHJ1ZX0gaXMgaW52YWxpZCBmb3IgcmVkdWNlJyk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua2V5cyAmJiBvcHRpb25zLmtleXMubGVuZ3RoID4gMSAmJlxuICAgICAgICAhb3B0aW9ucy5ncm91cCAmJiAhb3B0aW9ucy5ncm91cF9sZXZlbCkge1xuICAgICAgICB0aHJvdyBuZXcgUXVlcnlQYXJzZUVycm9yKCdNdWx0aS1rZXkgZmV0Y2hlcyBmb3IgcmVkdWNlIHZpZXdzIG11c3QgdXNlICcgK1xuICAgICAgICAgICd7Z3JvdXA6IHRydWV9Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIFsnZ3JvdXBfbGV2ZWwnLCAnbGltaXQnLCAnc2tpcCddLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbk5hbWUpIHtcbiAgICAgIHZhciBlcnJvciA9IGNoZWNrUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnNbb3B0aW9uTmFtZV0pO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaHR0cFF1ZXJ5KGRiLCBmdW4sIG9wdHMpIHtcbiAgICAvLyBMaXN0IG9mIHBhcmFtZXRlcnMgdG8gYWRkIHRvIHRoZSBQVVQgcmVxdWVzdFxuICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICB2YXIgYm9keTtcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XG4gICAgdmFyIG9rLCBzdGF0dXM7XG5cbiAgICAvLyBJZiBvcHRzLnJlZHVjZSBleGlzdHMgYW5kIGlzIGRlZmluZWQsIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgLy8gb2YgcGFyYW1ldGVycy5cbiAgICAvLyBJZiByZWR1Y2U9ZmFsc2UgdGhlbiB0aGUgcmVzdWx0cyBhcmUgdGhhdCBvZiBvbmx5IHRoZSBtYXAgZnVuY3Rpb25cbiAgICAvLyBub3QgdGhlIGZpbmFsIHJlc3VsdCBvZiBtYXAgYW5kIHJlZHVjZS5cbiAgICBhZGRIdHRwUGFyYW0oJ3JlZHVjZScsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdpbmNsdWRlX2RvY3MnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnYXR0YWNobWVudHMnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnbGltaXQnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnZGVzY2VuZGluZycsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdncm91cCcsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdncm91cF9sZXZlbCcsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdza2lwJywgb3B0cywgcGFyYW1zKTtcbiAgICBhZGRIdHRwUGFyYW0oJ3N0YWxlJywgb3B0cywgcGFyYW1zKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2NvbmZsaWN0cycsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdzdGFydGtleScsIG9wdHMsIHBhcmFtcywgdHJ1ZSk7XG4gICAgYWRkSHR0cFBhcmFtKCdzdGFydF9rZXknLCBvcHRzLCBwYXJhbXMsIHRydWUpO1xuICAgIGFkZEh0dHBQYXJhbSgnZW5ka2V5Jywgb3B0cywgcGFyYW1zLCB0cnVlKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2VuZF9rZXknLCBvcHRzLCBwYXJhbXMsIHRydWUpO1xuICAgIGFkZEh0dHBQYXJhbSgnaW5jbHVzaXZlX2VuZCcsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdrZXknLCBvcHRzLCBwYXJhbXMsIHRydWUpO1xuICAgIGFkZEh0dHBQYXJhbSgndXBkYXRlX3NlcScsIG9wdHMsIHBhcmFtcyk7XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxpc3Qgb2YgcGFyYW1ldGVycyBpbnRvIGEgdmFsaWQgVVJJIHF1ZXJ5IHN0cmluZ1xuICAgIHBhcmFtcyA9IHBhcmFtcy5qb2luKCcmJyk7XG4gICAgcGFyYW1zID0gcGFyYW1zID09PSAnJyA/ICcnIDogJz8nICsgcGFyYW1zO1xuXG4gICAgLy8gSWYga2V5cyBhcmUgc3VwcGxpZWQsIGlzc3VlIGEgUE9TVCB0byBjaXJjdW12ZW50IEdFVCBxdWVyeSBzdHJpbmcgbGltaXRzXG4gICAgLy8gc2VlIGh0dHA6Ly93aWtpLmFwYWNoZS5vcmcvY291Y2hkYi9IVFRQX3ZpZXdfQVBJI1F1ZXJ5aW5nX09wdGlvbnNcbiAgICBpZiAodHlwZW9mIG9wdHMua2V5cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBNQVhfVVJMX0xFTkdUSCA9IDIwMDA7XG4gICAgICAvLyBhY2NvcmRpbmcgdG8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDE3MTg0LzY4MDc0MixcbiAgICAgIC8vIHRoZSBkZSBmYWN0byBVUkwgbGVuZ3RoIGxpbWl0IGlzIDIwMDAgY2hhcmFjdGVyc1xuXG4gICAgICB2YXIga2V5c0FzU3RyaW5nID1cbiAgICAgICAgJ2tleXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShvcHRzLmtleXMpKTtcbiAgICAgIGlmIChrZXlzQXNTdHJpbmcubGVuZ3RoICsgcGFyYW1zLmxlbmd0aCArIDEgPD0gTUFYX1VSTF9MRU5HVEgpIHtcbiAgICAgICAgLy8gSWYgdGhlIGtleXMgYXJlIHNob3J0IGVub3VnaCwgZG8gYSBHRVQuIHdlIGRvIHRoaXMgdG8gd29yayBhcm91bmRcbiAgICAgICAgLy8gU2FmYXJpIG5vdCB1bmRlcnN0YW5kaW5nIDMwNHMgb24gUE9TVHMgKHNlZSBwb3VjaGRiL3BvdWNoZGIjMTIzOSlcbiAgICAgICAgcGFyYW1zICs9IChwYXJhbXNbMF0gPT09ICc/JyA/ICcmJyA6ICc/JykgKyBrZXlzQXNTdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGJvZHkgPSB7a2V5czogb3B0cy5rZXlzfTtcbiAgICAgICAgfSBlbHNlIHsgLy8gZnVuIGlzIHttYXAgOiBtYXBmdW59LCBzbyBhcHBlbmQgdG8gdGhpc1xuICAgICAgICAgIGZ1bi5rZXlzID0gb3B0cy5rZXlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIHJlZmVyZW5jaW5nIGEgcXVlcnkgZGVmaW5lZCBpbiB0aGUgZGVzaWduIGRvY1xuICAgIGlmICh0eXBlb2YgZnVuID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHBhcnRzID0gcGFyc2VWaWV3TmFtZShmdW4pO1xuICAgICAgcmV0dXJuIGRiLmZldGNoKCdfZGVzaWduLycgKyBwYXJ0c1swXSArICcvX3ZpZXcvJyArIHBhcnRzWzFdICsgcGFyYW1zLCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBoKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgb2sgPSByZXNwb25zZS5vaztcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICByZXN1bHQuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgIHRocm93IGdlbmVyYXRlRXJyb3JGcm9tUmVzcG9uc2UocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmYWlsIHRoZSBlbnRpcmUgcmVxdWVzdCBpZiB0aGUgcmVzdWx0IGNvbnRhaW5zIGFuIGVycm9yXG4gICAgICAgIHJlc3VsdC5yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgIGlmIChyb3cudmFsdWUgJiYgcm93LnZhbHVlLmVycm9yICYmIHJvdy52YWx1ZS5lcnJvciA9PT0gXCJidWlsdGluX3JlZHVjZV9lcnJvclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iocm93LnJlYXNvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLnRoZW4ocG9zdHByb2Nlc3NBdHRhY2htZW50cyhvcHRzKSk7XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIHVzaW5nIGEgdGVtcG9yYXJ5IHZpZXcsIHRlcnJpYmxlIGZvciBwZXJmb3JtYW5jZSwgZ29vZCBmb3IgdGVzdGluZ1xuICAgIGJvZHkgPSBib2R5IHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGZ1bikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5ba2V5XSkpIHtcbiAgICAgICAgYm9keVtrZXldID0gZnVuW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5W2tleV0gPSBmdW5ba2V5XS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRiLmZldGNoKCdfdGVtcF92aWV3JyArIHBhcmFtcywge1xuICAgICAgaGVhZGVyczogbmV3IGgoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBvayA9IHJlc3BvbnNlLm9rO1xuICAgICAgICBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgaWYgKCFvaykge1xuICAgICAgICByZXN1bHQuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aHJvdyBnZW5lcmF0ZUVycm9yRnJvbVJlc3BvbnNlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLnRoZW4ocG9zdHByb2Nlc3NBdHRhY2htZW50cyhvcHRzKSk7XG4gIH1cblxuICAvLyBjdXN0b20gYWRhcHRlcnMgY2FuIGRlZmluZSB0aGVpciBvd24gYXBpLl9xdWVyeVxuICAvLyBhbmQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gY3VzdG9tUXVlcnkoZGIsIGZ1biwgb3B0cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBkYi5fcXVlcnkoZnVuLCBvcHRzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGN1c3RvbSBhZGFwdGVycyBjYW4gZGVmaW5lIHRoZWlyIG93biBhcGkuX3ZpZXdDbGVhbnVwXG4gIC8vIGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiBjdXN0b21WaWV3Q2xlYW51cChkYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBkYi5fdmlld0NsZWFudXAoZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0c1RvKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocmVhc29uLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJucyBhIHByb21pc2UgZm9yIGEgbGlzdCBvZiBkb2NzIHRvIHVwZGF0ZSwgYmFzZWQgb24gdGhlIGlucHV0IGRvY0lkLlxuICAvLyB0aGUgb3JkZXIgZG9lc24ndCBtYXR0ZXIsIGJlY2F1c2UgcG9zdC0zLjIuMCwgYnVsa0RvY3NcbiAgLy8gaXMgYW4gYXRvbWljIG9wZXJhdGlvbiBpbiBhbGwgdGhyZWUgYWRhcHRlcnMuXG4gIGZ1bmN0aW9uIGdldERvY3NUb1BlcnNpc3QoZG9jSWQsIHZpZXcsIGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzKSB7XG4gICAgdmFyIG1ldGFEb2NJZCA9ICdfbG9jYWwvZG9jXycgKyBkb2NJZDtcbiAgICB2YXIgZGVmYXVsdE1ldGFEb2MgPSB7X2lkOiBtZXRhRG9jSWQsIGtleXM6IFtdfTtcbiAgICB2YXIgZG9jRGF0YSA9IGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzLmdldChkb2NJZCk7XG4gICAgdmFyIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcyA9IGRvY0RhdGFbMF07XG4gICAgdmFyIGNoYW5nZXMgPSBkb2NEYXRhWzFdO1xuXG4gICAgZnVuY3Rpb24gZ2V0TWV0YURvYygpIHtcbiAgICAgIGlmIChpc0dlbk9uZShjaGFuZ2VzKSkge1xuICAgICAgICAvLyBnZW5lcmF0aW9uIDEsIHNvIHdlIGNhbiBzYWZlbHkgYXNzdW1lIGluaXRpYWwgc3RhdGVcbiAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKGF2b2lkcyB1bm5lY2Vzc2FyeSBHRVRzKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRNZXRhRG9jKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2aWV3LmRiLmdldChtZXRhRG9jSWQpLmNhdGNoKGRlZmF1bHRzVG8oZGVmYXVsdE1ldGFEb2MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRLZXlWYWx1ZURvY3MobWV0YURvYykge1xuICAgICAgaWYgKCFtZXRhRG9jLmtleXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIG5vIGtleXMsIG5vIG5lZWQgZm9yIGEgbG9va3VwXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe3Jvd3M6IFtdfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmlldy5kYi5hbGxEb2NzKHtcbiAgICAgICAga2V5czogbWV0YURvYy5rZXlzLFxuICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NLZXlWYWx1ZURvY3MobWV0YURvYywga3ZEb2NzUmVzKSB7XG4gICAgICB2YXIga3ZEb2NzID0gW107XG4gICAgICB2YXIgb2xkS2V5cyA9IG5ldyBFeHBvcnRlZFNldCgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga3ZEb2NzUmVzLnJvd3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHJvdyA9IGt2RG9jc1Jlcy5yb3dzW2ldO1xuICAgICAgICB2YXIgZG9jID0gcm93LmRvYztcbiAgICAgICAgaWYgKCFkb2MpIHsgLy8gZGVsZXRlZFxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGt2RG9jcy5wdXNoKGRvYyk7XG4gICAgICAgIG9sZEtleXMuYWRkKGRvYy5faWQpO1xuICAgICAgICBkb2MuX2RlbGV0ZWQgPSAhaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzLmhhcyhkb2MuX2lkKTtcbiAgICAgICAgaWYgKCFkb2MuX2RlbGV0ZWQpIHtcbiAgICAgICAgICB2YXIga2V5VmFsdWUgPSBpbmRleGFibGVLZXlzVG9LZXlWYWx1ZXMuZ2V0KGRvYy5faWQpO1xuICAgICAgICAgIGlmICgndmFsdWUnIGluIGtleVZhbHVlKSB7XG4gICAgICAgICAgICBkb2MudmFsdWUgPSBrZXlWYWx1ZS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBuZXdLZXlzID0gbWFwVG9LZXlzQXJyYXkoaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzKTtcbiAgICAgIG5ld0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghb2xkS2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgIC8vIG5ldyBkb2NcbiAgICAgICAgICB2YXIga3ZEb2MgPSB7XG4gICAgICAgICAgICBfaWQ6IGtleVxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGtleVZhbHVlID0gaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzLmdldChrZXkpO1xuICAgICAgICAgIGlmICgndmFsdWUnIGluIGtleVZhbHVlKSB7XG4gICAgICAgICAgICBrdkRvYy52YWx1ZSA9IGtleVZhbHVlLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrdkRvY3MucHVzaChrdkRvYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbWV0YURvYy5rZXlzID0gdW5pcShuZXdLZXlzLmNvbmNhdChtZXRhRG9jLmtleXMpKTtcbiAgICAgIGt2RG9jcy5wdXNoKG1ldGFEb2MpO1xuXG4gICAgICByZXR1cm4ga3ZEb2NzO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRNZXRhRG9jKCkudGhlbihmdW5jdGlvbiAobWV0YURvYykge1xuICAgICAgcmV0dXJuIGdldEtleVZhbHVlRG9jcyhtZXRhRG9jKS50aGVuKGZ1bmN0aW9uIChrdkRvY3NSZXMpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NLZXlWYWx1ZURvY3MobWV0YURvYywga3ZEb2NzUmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlcyBhbGwgZW1pdHRlZCBrZXkvdmFsdWUgZG9jcyBhbmQgbWV0YURvY3MgaW4gdGhlIG1ydmlldyBkYXRhYmFzZVxuICAvLyBmb3IgdGhlIGdpdmVuIGJhdGNoIG9mIGRvY3VtZW50cyBmcm9tIHRoZSBzb3VyY2UgZGF0YWJhc2VcbiAgZnVuY3Rpb24gc2F2ZUtleVZhbHVlcyh2aWV3LCBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cywgc2VxKSB7XG4gICAgdmFyIHNlcURvY0lkID0gJ19sb2NhbC9sYXN0U2VxJztcbiAgICByZXR1cm4gdmlldy5kYi5nZXQoc2VxRG9jSWQpXG4gICAgICAuY2F0Y2goZGVmYXVsdHNUbyh7X2lkOiBzZXFEb2NJZCwgc2VxOiAwfSkpXG4gICAgICAudGhlbihmdW5jdGlvbiAobGFzdFNlcURvYykge1xuICAgICAgICB2YXIgZG9jSWRzID0gbWFwVG9LZXlzQXJyYXkoZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZG9jSWRzLm1hcChmdW5jdGlvbiAoZG9jSWQpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0RG9jc1RvUGVyc2lzdChkb2NJZCwgdmlldywgZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMpO1xuICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAobGlzdE9mRG9jc1RvUGVyc2lzdCkge1xuICAgICAgICAgIHZhciBkb2NzVG9QZXJzaXN0ID0gZmxhdHRlbihsaXN0T2ZEb2NzVG9QZXJzaXN0KTtcbiAgICAgICAgICBsYXN0U2VxRG9jLnNlcSA9IHNlcTtcbiAgICAgICAgICBkb2NzVG9QZXJzaXN0LnB1c2gobGFzdFNlcURvYyk7XG4gICAgICAgICAgLy8gd3JpdGUgYWxsIGRvY3MgaW4gYSBzaW5nbGUgb3BlcmF0aW9uLCB1cGRhdGUgdGhlIHNlcSBvbmNlXG4gICAgICAgICAgcmV0dXJuIHZpZXcuZGIuYnVsa0RvY3Moe2RvY3MgOiBkb2NzVG9QZXJzaXN0fSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRRdWV1ZSh2aWV3KSB7XG4gICAgdmFyIHZpZXdOYW1lID0gdHlwZW9mIHZpZXcgPT09ICdzdHJpbmcnID8gdmlldyA6IHZpZXcubmFtZTtcbiAgICB2YXIgcXVldWUgPSBwZXJzaXN0ZW50UXVldWVzW3ZpZXdOYW1lXTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICBxdWV1ZSA9IHBlcnNpc3RlbnRRdWV1ZXNbdmlld05hbWVdID0gbmV3IFRhc2tRdWV1ZSQxKCk7XG4gICAgfVxuICAgIHJldHVybiBxdWV1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpZXcodmlldykge1xuICAgIHJldHVybiBzZXF1ZW50aWFsaXplKGdldFF1ZXVlKHZpZXcpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdXBkYXRlVmlld0luUXVldWUodmlldyk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpZXdJblF1ZXVlKHZpZXcpIHtcbiAgICAvLyBiaW5kIHRoZSBlbWl0IGZ1bmN0aW9uIG9uY2VcbiAgICB2YXIgbWFwUmVzdWx0cztcbiAgICB2YXIgZG9jO1xuXG4gICAgZnVuY3Rpb24gZW1pdChrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgb3V0cHV0ID0ge2lkOiBkb2MuX2lkLCBrZXk6IG5vcm1hbGl6ZUtleShrZXkpfTtcbiAgICAgIC8vIERvbid0IGV4cGxpY2l0bHkgc3RvcmUgdGhlIHZhbHVlIHVubGVzcyBpdCdzIGRlZmluZWQgYW5kIG5vbi1udWxsLlxuICAgICAgLy8gVGhpcyBzYXZlcyBvbiBzdG9yYWdlIHNwYWNlLCBiZWNhdXNlIG9mdGVuIHBlb3BsZSBkb24ndCB1c2UgaXQuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBvdXRwdXQudmFsdWUgPSBub3JtYWxpemVLZXkodmFsdWUpO1xuICAgICAgfVxuICAgICAgbWFwUmVzdWx0cy5wdXNoKG91dHB1dCk7XG4gICAgfVxuXG4gICAgdmFyIG1hcEZ1biA9IG1hcHBlcih2aWV3Lm1hcEZ1biwgZW1pdCk7XG5cbiAgICB2YXIgY3VycmVudFNlcSA9IHZpZXcuc2VxIHx8IDA7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ2hhbmdlKGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzLCBzZXEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzYXZlS2V5VmFsdWVzKHZpZXcsIGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzLCBzZXEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBuZXcgVGFza1F1ZXVlJDEoKTtcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0QmF0Y2goKSB7XG4gICAgICByZXR1cm4gdmlldy5zb3VyY2VEQi5jaGFuZ2VzKHtcbiAgICAgICAgcmV0dXJuX2RvY3M6IHRydWUsXG4gICAgICAgIGNvbmZsaWN0czogdHJ1ZSxcbiAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlLFxuICAgICAgICBzdHlsZTogJ2FsbF9kb2NzJyxcbiAgICAgICAgc2luY2U6IGN1cnJlbnRTZXEsXG4gICAgICAgIGxpbWl0OiBDSEFOR0VTX0JBVENIX1NJWkUkMVxuICAgICAgfSkudGhlbihwcm9jZXNzQmF0Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCYXRjaChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzO1xuICAgICAgaWYgKCFyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMgPSBjcmVhdGVEb2NJZHNUb0NoYW5nZXNBbmRFbWl0cyhyZXN1bHRzKTtcbiAgICAgIHF1ZXVlLmFkZChwcm9jZXNzQ2hhbmdlKGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzLCBjdXJyZW50U2VxKSk7XG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCBDSEFOR0VTX0JBVENIX1NJWkUkMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc05leHRCYXRjaCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzKHJlc3VsdHMpIHtcbiAgICAgIHZhciBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IHJlc3VsdHNbaV07XG4gICAgICAgIGlmIChjaGFuZ2UuZG9jLl9pZFswXSAhPT0gJ18nKSB7XG4gICAgICAgICAgbWFwUmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGRvYyA9IGNoYW5nZS5kb2M7XG5cbiAgICAgICAgICBpZiAoIWRvYy5fZGVsZXRlZCkge1xuICAgICAgICAgICAgdHJ5TWFwKHZpZXcuc291cmNlREIsIG1hcEZ1biwgZG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFwUmVzdWx0cy5zb3J0KHNvcnRCeUtleVRoZW5WYWx1ZSk7XG5cbiAgICAgICAgICB2YXIgaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzID0gY3JlYXRlSW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzKG1hcFJlc3VsdHMpO1xuICAgICAgICAgIGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzLnNldChjaGFuZ2UuZG9jLl9pZCwgW1xuICAgICAgICAgICAgaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzLFxuICAgICAgICAgICAgY2hhbmdlLmNoYW5nZXNcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U2VxID0gY2hhbmdlLnNlcTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbmRleGFibGVLZXlzVG9LZXlWYWx1ZXMobWFwUmVzdWx0cykge1xuICAgICAgdmFyIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuICAgICAgdmFyIGxhc3RLZXk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWFwUmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZW1pdHRlZEtleVZhbHVlID0gbWFwUmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIGNvbXBsZXhLZXkgPSBbZW1pdHRlZEtleVZhbHVlLmtleSwgZW1pdHRlZEtleVZhbHVlLmlkXTtcbiAgICAgICAgaWYgKGkgPiAwICYmIGNvbGxhdGUoZW1pdHRlZEtleVZhbHVlLmtleSwgbGFzdEtleSkgPT09IDApIHtcbiAgICAgICAgICBjb21wbGV4S2V5LnB1c2goaSk7IC8vIGR1cCBrZXkraWQsIHNvIG1ha2UgaXQgdW5pcXVlXG4gICAgICAgIH1cbiAgICAgICAgaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzLnNldCh0b0luZGV4YWJsZVN0cmluZyhjb21wbGV4S2V5KSwgZW1pdHRlZEtleVZhbHVlKTtcbiAgICAgICAgbGFzdEtleSA9IGVtaXR0ZWRLZXlWYWx1ZS5rZXk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzTmV4dEJhdGNoKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcXVldWUuZmluaXNoKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2aWV3LnNlcSA9IGN1cnJlbnRTZXE7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWR1Y2VWaWV3KHZpZXcsIHJlc3VsdHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5ncm91cF9sZXZlbCA9PT0gMCkge1xuICAgICAgZGVsZXRlIG9wdGlvbnMuZ3JvdXBfbGV2ZWw7XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZEdyb3VwID0gb3B0aW9ucy5ncm91cCB8fCBvcHRpb25zLmdyb3VwX2xldmVsO1xuXG4gICAgdmFyIHJlZHVjZUZ1biA9IHJlZHVjZXIodmlldy5yZWR1Y2VGdW4pO1xuXG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIHZhciBsdmwgPSBpc05hTihvcHRpb25zLmdyb3VwX2xldmVsKSA/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA6XG4gICAgICBvcHRpb25zLmdyb3VwX2xldmVsO1xuICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGxhc3QgPSBncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIGdyb3VwS2V5ID0gc2hvdWxkR3JvdXAgPyBlLmtleSA6IG51bGw7XG5cbiAgICAgIC8vIG9ubHkgc2V0IGdyb3VwX2xldmVsIGZvciBhcnJheSBrZXlzXG4gICAgICBpZiAoc2hvdWxkR3JvdXAgJiYgQXJyYXkuaXNBcnJheShncm91cEtleSkpIHtcbiAgICAgICAgZ3JvdXBLZXkgPSBncm91cEtleS5zbGljZSgwLCBsdmwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFzdCAmJiBjb2xsYXRlKGxhc3QuZ3JvdXBLZXksIGdyb3VwS2V5KSA9PT0gMCkge1xuICAgICAgICBsYXN0LmtleXMucHVzaChbZS5rZXksIGUuaWRdKTtcbiAgICAgICAgbGFzdC52YWx1ZXMucHVzaChlLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICBrZXlzOiBbW2Uua2V5LCBlLmlkXV0sXG4gICAgICAgIHZhbHVlczogW2UudmFsdWVdLFxuICAgICAgICBncm91cEtleTogZ3JvdXBLZXlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZ3JvdXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgZSA9IGdyb3Vwc1tpXTtcbiAgICAgIHZhciByZWR1Y2VUcnkgPSB0cnlSZWR1Y2Uodmlldy5zb3VyY2VEQiwgcmVkdWNlRnVuLCBlLmtleXMsIGUudmFsdWVzLCBmYWxzZSk7XG4gICAgICBpZiAocmVkdWNlVHJ5LmVycm9yICYmIHJlZHVjZVRyeS5lcnJvciBpbnN0YW5jZW9mIEJ1aWx0SW5FcnJvcikge1xuICAgICAgICAvLyBDb3VjaERCIHJldHVybnMgYW4gZXJyb3IgaWYgYSBidWlsdC1pbiBlcnJvcnMgb3V0XG4gICAgICAgIHRocm93IHJlZHVjZVRyeS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIC8vIENvdWNoREIganVzdCBzZXRzIHRoZSB2YWx1ZSB0byBudWxsIGlmIGEgbm9uLWJ1aWx0LWluIGVycm9ycyBvdXRcbiAgICAgICAgdmFsdWU6IHJlZHVjZVRyeS5lcnJvciA/IG51bGwgOiByZWR1Y2VUcnkub3V0cHV0LFxuICAgICAgICBrZXk6IGUuZ3JvdXBLZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBubyB0b3RhbF9yb3dzL29mZnNldCB3aGVuIHJlZHVjaW5nXG4gICAgcmV0dXJuIHtyb3dzOiBzbGljZVJlc3VsdHMocmVzdWx0cywgb3B0aW9ucy5saW1pdCwgb3B0aW9ucy5za2lwKX07XG4gIH1cblxuICBmdW5jdGlvbiBxdWVyeVZpZXcodmlldywgb3B0cykge1xuICAgIHJldHVybiBzZXF1ZW50aWFsaXplKGdldFF1ZXVlKHZpZXcpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcXVlcnlWaWV3SW5RdWV1ZSh2aWV3LCBvcHRzKTtcbiAgICB9KSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVlcnlWaWV3SW5RdWV1ZSh2aWV3LCBvcHRzKSB7XG4gICAgdmFyIHRvdGFsUm93cztcbiAgICB2YXIgc2hvdWxkUmVkdWNlID0gdmlldy5yZWR1Y2VGdW4gJiYgb3B0cy5yZWR1Y2UgIT09IGZhbHNlO1xuICAgIHZhciBza2lwID0gb3B0cy5za2lwIHx8IDA7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmtleXMgIT09ICd1bmRlZmluZWQnICYmICFvcHRzLmtleXMubGVuZ3RoKSB7XG4gICAgICAvLyBlcXVpdmFsZW50IHF1ZXJ5XG4gICAgICBvcHRzLmxpbWl0ID0gMDtcbiAgICAgIGRlbGV0ZSBvcHRzLmtleXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmV0Y2hGcm9tVmlldyh2aWV3T3B0cykge1xuICAgICAgdmlld09wdHMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICAgIHJldHVybiB2aWV3LmRiLmFsbERvY3Modmlld09wdHMpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB0b3RhbFJvd3MgPSByZXMudG90YWxfcm93cztcbiAgICAgICAgcmV0dXJuIHJlcy5yb3dzLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgICAvLyBpbXBsaWNpdCBtaWdyYXRpb24gLSBpbiBvbGRlciB2ZXJzaW9ucyBvZiBQb3VjaERCLFxuICAgICAgICAgIC8vIHdlIGV4cGxpY2l0bHkgc3RvcmVkIHRoZSBkb2MgYXMge2lkOiAuLi4sIGtleTogLi4uLCB2YWx1ZTogLi4ufVxuICAgICAgICAgIC8vIHRoaXMgaXMgdGVzdGVkIGluIGEgbWlncmF0aW9uIHRlc3RcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmICgndmFsdWUnIGluIHJlc3VsdC5kb2MgJiYgdHlwZW9mIHJlc3VsdC5kb2MudmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICByZXN1bHQuZG9jLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdC5kb2MudmFsdWUpLnNvcnQoKTtcbiAgICAgICAgICAgIC8vIHRoaXMgZGV0ZWN0aW9uIG1ldGhvZCBpcyBub3QgcGVyZmVjdCwgYnV0IGl0J3MgdW5saWtlbHkgdGhlIHVzZXJcbiAgICAgICAgICAgIC8vIGVtaXR0ZWQgYSB2YWx1ZSB3aGljaCB3YXMgYW4gb2JqZWN0IHdpdGggdGhlc2UgMyBleGFjdCBrZXlzXG4gICAgICAgICAgICB2YXIgZXhwZWN0ZWRLZXlzID0gWydpZCcsICdrZXknLCAndmFsdWUnXTtcbiAgICAgICAgICAgIGlmICghKGtleXMgPCBleHBlY3RlZEtleXMgfHwga2V5cyA+IGV4cGVjdGVkS2V5cykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb2MudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHBhcnNlZEtleUFuZERvY0lkID0gcGFyc2VJbmRleGFibGVTdHJpbmcocmVzdWx0LmRvYy5faWQpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IHBhcnNlZEtleUFuZERvY0lkWzBdLFxuICAgICAgICAgICAgaWQ6IHBhcnNlZEtleUFuZERvY0lkWzFdLFxuICAgICAgICAgICAgdmFsdWU6ICgndmFsdWUnIGluIHJlc3VsdC5kb2MgPyByZXN1bHQuZG9jLnZhbHVlIDogbnVsbClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWFwUmVzdWx0c1JlYWR5KHJvd3MpIHtcbiAgICAgIHZhciBmaW5hbFJlc3VsdHM7XG4gICAgICBpZiAoc2hvdWxkUmVkdWNlKSB7XG4gICAgICAgIGZpbmFsUmVzdWx0cyA9IHJlZHVjZVZpZXcodmlldywgcm93cywgb3B0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5hbFJlc3VsdHMgPSB7XG4gICAgICAgICAgdG90YWxfcm93czogdG90YWxSb3dzLFxuICAgICAgICAgIG9mZnNldDogc2tpcCxcbiAgICAgICAgICByb3dzOiByb3dzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChvcHRzLnVwZGF0ZV9zZXEpIHtcbiAgICAgICAgZmluYWxSZXN1bHRzLnVwZGF0ZV9zZXEgPSB2aWV3LnNlcTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgICB2YXIgZG9jSWRzID0gdW5pcShyb3dzLm1hcChyb3dUb0RvY0lkKSk7XG5cbiAgICAgICAgcmV0dXJuIHZpZXcuc291cmNlREIuYWxsRG9jcyh7XG4gICAgICAgICAga2V5czogZG9jSWRzLFxuICAgICAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgICAgICBjb25mbGljdHM6IG9wdHMuY29uZmxpY3RzLFxuICAgICAgICAgIGF0dGFjaG1lbnRzOiBvcHRzLmF0dGFjaG1lbnRzLFxuICAgICAgICAgIGJpbmFyeTogb3B0cy5iaW5hcnlcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoYWxsRG9jc1Jlcykge1xuICAgICAgICAgIHZhciBkb2NJZHNUb0RvY3MgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcbiAgICAgICAgICBhbGxEb2NzUmVzLnJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICBkb2NJZHNUb0RvY3Muc2V0KHJvdy5pZCwgcm93LmRvYyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHZhciBkb2NJZCA9IHJvd1RvRG9jSWQocm93KTtcbiAgICAgICAgICAgIHZhciBkb2MgPSBkb2NJZHNUb0RvY3MuZ2V0KGRvY0lkKTtcbiAgICAgICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICAgICAgcm93LmRvYyA9IGRvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmluYWxSZXN1bHRzO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaW5hbFJlc3VsdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmtleXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIga2V5cyA9IG9wdHMua2V5cztcbiAgICAgIHZhciBmZXRjaFByb21pc2VzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmlld09wdHMgPSB7XG4gICAgICAgICAgc3RhcnRrZXkgOiB0b0luZGV4YWJsZVN0cmluZyhba2V5XSksXG4gICAgICAgICAgZW5ka2V5ICAgOiB0b0luZGV4YWJsZVN0cmluZyhba2V5LCB7fV0pXG4gICAgICAgIH07XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICAgICAgdmlld09wdHMudXBkYXRlX3NlcSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoRnJvbVZpZXcodmlld09wdHMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmV0Y2hQcm9taXNlcykudGhlbihmbGF0dGVuKS50aGVuKG9uTWFwUmVzdWx0c1JlYWR5KTtcbiAgICB9IGVsc2UgeyAvLyBub3JtYWwgcXVlcnksIG5vICdrZXlzJ1xuICAgICAgdmFyIHZpZXdPcHRzID0ge1xuICAgICAgICBkZXNjZW5kaW5nIDogb3B0cy5kZXNjZW5kaW5nXG4gICAgICB9O1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICAgIHZpZXdPcHRzLnVwZGF0ZV9zZXEgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIHN0YXJ0a2V5O1xuICAgICAgdmFyIGVuZGtleTtcbiAgICAgIGlmICgnc3RhcnRfa2V5JyBpbiBvcHRzKSB7XG4gICAgICAgIHN0YXJ0a2V5ID0gb3B0cy5zdGFydF9rZXk7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0YXJ0a2V5JyBpbiBvcHRzKSB7XG4gICAgICAgIHN0YXJ0a2V5ID0gb3B0cy5zdGFydGtleTtcbiAgICAgIH1cbiAgICAgIGlmICgnZW5kX2tleScgaW4gb3B0cykge1xuICAgICAgICBlbmRrZXkgPSBvcHRzLmVuZF9rZXk7XG4gICAgICB9XG4gICAgICBpZiAoJ2VuZGtleScgaW4gb3B0cykge1xuICAgICAgICBlbmRrZXkgPSBvcHRzLmVuZGtleTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc3RhcnRrZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZpZXdPcHRzLnN0YXJ0a2V5ID0gb3B0cy5kZXNjZW5kaW5nID9cbiAgICAgICAgICB0b0luZGV4YWJsZVN0cmluZyhbc3RhcnRrZXksIHt9XSkgOlxuICAgICAgICAgIHRvSW5kZXhhYmxlU3RyaW5nKFtzdGFydGtleV0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbmRrZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBpbmNsdXNpdmVFbmQgPSBvcHRzLmluY2x1c2l2ZV9lbmQgIT09IGZhbHNlO1xuICAgICAgICBpZiAob3B0cy5kZXNjZW5kaW5nKSB7XG4gICAgICAgICAgaW5jbHVzaXZlRW5kID0gIWluY2x1c2l2ZUVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXdPcHRzLmVuZGtleSA9IHRvSW5kZXhhYmxlU3RyaW5nKFxuICAgICAgICAgIGluY2x1c2l2ZUVuZCA/IFtlbmRrZXksIHt9XSA6IFtlbmRrZXldKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5rZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBrZXlTdGFydCA9IHRvSW5kZXhhYmxlU3RyaW5nKFtvcHRzLmtleV0pO1xuICAgICAgICB2YXIga2V5RW5kID0gdG9JbmRleGFibGVTdHJpbmcoW29wdHMua2V5LCB7fV0pO1xuICAgICAgICBpZiAodmlld09wdHMuZGVzY2VuZGluZykge1xuICAgICAgICAgIHZpZXdPcHRzLmVuZGtleSA9IGtleVN0YXJ0O1xuICAgICAgICAgIHZpZXdPcHRzLnN0YXJ0a2V5ID0ga2V5RW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXdPcHRzLnN0YXJ0a2V5ID0ga2V5U3RhcnQ7XG4gICAgICAgICAgdmlld09wdHMuZW5ka2V5ID0ga2V5RW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3VsZFJlZHVjZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMubGltaXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmlld09wdHMubGltaXQgPSBvcHRzLmxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHZpZXdPcHRzLnNraXAgPSBza2lwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZldGNoRnJvbVZpZXcodmlld09wdHMpLnRoZW4ob25NYXBSZXN1bHRzUmVhZHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGh0dHBWaWV3Q2xlYW51cChkYikge1xuICAgIHJldHVybiBkYi5mZXRjaCgnX3ZpZXdfY2xlYW51cCcsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBoKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9jYWxWaWV3Q2xlYW51cChkYikge1xuICAgIHJldHVybiBkYi5nZXQoJ19sb2NhbC8nICsgbG9jYWxEb2NOYW1lKS50aGVuKGZ1bmN0aW9uIChtZXRhRG9jKSB7XG4gICAgICB2YXIgZG9jc1RvVmlld3MgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcbiAgICAgIE9iamVjdC5rZXlzKG1ldGFEb2Mudmlld3MpLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxWaWV3TmFtZSkge1xuICAgICAgICB2YXIgcGFydHMgPSBwYXJzZVZpZXdOYW1lKGZ1bGxWaWV3TmFtZSk7XG4gICAgICAgIHZhciBkZXNpZ25Eb2NOYW1lID0gJ19kZXNpZ24vJyArIHBhcnRzWzBdO1xuICAgICAgICB2YXIgdmlld05hbWUgPSBwYXJ0c1sxXTtcbiAgICAgICAgdmFyIHZpZXdzID0gZG9jc1RvVmlld3MuZ2V0KGRlc2lnbkRvY05hbWUpO1xuICAgICAgICBpZiAoIXZpZXdzKSB7XG4gICAgICAgICAgdmlld3MgPSBuZXcgRXhwb3J0ZWRTZXQoKTtcbiAgICAgICAgICBkb2NzVG9WaWV3cy5zZXQoZGVzaWduRG9jTmFtZSwgdmlld3MpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdzLmFkZCh2aWV3TmFtZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICBrZXlzIDogbWFwVG9LZXlzQXJyYXkoZG9jc1RvVmlld3MpLFxuICAgICAgICBpbmNsdWRlX2RvY3MgOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRiLmFsbERvY3Mob3B0cykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciB2aWV3c1RvU3RhdHVzID0ge307XG4gICAgICAgIHJlcy5yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHZhciBkZG9jTmFtZSA9IHJvdy5rZXkuc3Vic3RyaW5nKDgpOyAvLyBjdXRzIG9mZiAnX2Rlc2lnbi8nXG4gICAgICAgICAgZG9jc1RvVmlld3MuZ2V0KHJvdy5rZXkpLmZvckVhY2goZnVuY3Rpb24gKHZpZXdOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZnVsbFZpZXdOYW1lID0gZGRvY05hbWUgKyAnLycgKyB2aWV3TmFtZTtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgaWYgKCFtZXRhRG9jLnZpZXdzW2Z1bGxWaWV3TmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gbmV3IGZvcm1hdCwgd2l0aG91dCBzbGFzaGVzLCB0byBzdXBwb3J0IFBvdWNoREIgMi4yLjBcbiAgICAgICAgICAgICAgLy8gbWlncmF0aW9uIHRlc3QgaW4gcG91Y2hkYidzIGJyb3dzZXIubWlncmF0aW9uLmpzIHZlcmlmaWVzIHRoaXNcbiAgICAgICAgICAgICAgZnVsbFZpZXdOYW1lID0gdmlld05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmlld0RCTmFtZXMgPSBPYmplY3Qua2V5cyhtZXRhRG9jLnZpZXdzW2Z1bGxWaWV3TmFtZV0pO1xuICAgICAgICAgICAgLy8gZGVzaWduIGRvYyBkZWxldGVkLCBvciB2aWV3IGZ1bmN0aW9uIG5vbmV4aXN0ZW50XG4gICAgICAgICAgICB2YXIgc3RhdHVzSXNHb29kID0gcm93LmRvYyAmJiByb3cuZG9jLnZpZXdzICYmXG4gICAgICAgICAgICAgIHJvdy5kb2Mudmlld3Nbdmlld05hbWVdO1xuICAgICAgICAgICAgdmlld0RCTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodmlld0RCTmFtZSkge1xuICAgICAgICAgICAgICB2aWV3c1RvU3RhdHVzW3ZpZXdEQk5hbWVdID1cbiAgICAgICAgICAgICAgICB2aWV3c1RvU3RhdHVzW3ZpZXdEQk5hbWVdIHx8IHN0YXR1c0lzR29vZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRic1RvRGVsZXRlID0gT2JqZWN0LmtleXModmlld3NUb1N0YXR1cykuZmlsdGVyKFxuICAgICAgICAgIGZ1bmN0aW9uICh2aWV3REJOYW1lKSB7IHJldHVybiAhdmlld3NUb1N0YXR1c1t2aWV3REJOYW1lXTsgfSk7XG4gICAgICAgIHZhciBkZXN0cm95UHJvbWlzZXMgPSBkYnNUb0RlbGV0ZS5tYXAoZnVuY3Rpb24gKHZpZXdEQk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gc2VxdWVudGlhbGl6ZShnZXRRdWV1ZSh2aWV3REJOYW1lKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBkYi5jb25zdHJ1Y3Rvcih2aWV3REJOYW1lLCBkYi5fX29wdHMpLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGRlc3Ryb3lQcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtvazogdHJ1ZX07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgZGVmYXVsdHNUbyh7b2s6IHRydWV9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWVyeVByb21pc2VkKGRiLCBmdW4sIG9wdHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGIuX3F1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY3VzdG9tUXVlcnkoZGIsIGZ1biwgb3B0cyk7XG4gICAgfVxuICAgIGlmIChpc1JlbW90ZShkYikpIHtcbiAgICAgIHJldHVybiBodHRwUXVlcnkoZGIsIGZ1biwgb3B0cyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmdW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyB0ZW1wX3ZpZXdcbiAgICAgIGNoZWNrUXVlcnlQYXJzZUVycm9yKG9wdHMsIGZ1bik7XG5cbiAgICAgIHRlbXBWaWV3UXVldWUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNyZWF0ZVZpZXdQcm9taXNlID0gY3JlYXRlVmlldyhcbiAgICAgICAgICAvKiBzb3VyY2VEQiAqLyBkYixcbiAgICAgICAgICAvKiB2aWV3TmFtZSAqLyAndGVtcF92aWV3L3RlbXBfdmlldycsXG4gICAgICAgICAgLyogbWFwRnVuICovIGZ1bi5tYXAsXG4gICAgICAgICAgLyogcmVkdWNlRnVuICovIGZ1bi5yZWR1Y2UsXG4gICAgICAgICAgLyogdGVtcG9yYXJ5ICovIHRydWUsXG4gICAgICAgICAgLyogbG9jYWxEb2NOYW1lICovIGxvY2FsRG9jTmFtZSk7XG4gICAgICAgIHJldHVybiBjcmVhdGVWaWV3UHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgcmV0dXJuIGZpbih1cGRhdGVWaWV3KHZpZXcpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Vmlldyh2aWV3LCBvcHRzKTtcbiAgICAgICAgICB9KSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZGIuZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRlbXBWaWV3UXVldWUuZmluaXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHBlcnNpc3RlbnQgdmlld1xuICAgICAgdmFyIGZ1bGxWaWV3TmFtZSA9IGZ1bjtcbiAgICAgIHZhciBwYXJ0cyA9IHBhcnNlVmlld05hbWUoZnVsbFZpZXdOYW1lKTtcbiAgICAgIHZhciBkZXNpZ25Eb2NOYW1lID0gcGFydHNbMF07XG4gICAgICB2YXIgdmlld05hbWUgPSBwYXJ0c1sxXTtcbiAgICAgIHJldHVybiBkYi5nZXQoJ19kZXNpZ24vJyArIGRlc2lnbkRvY05hbWUpLnRoZW4oZnVuY3Rpb24gKGRvYykge1xuICAgICAgICB2YXIgZnVuID0gZG9jLnZpZXdzICYmIGRvYy52aWV3c1t2aWV3TmFtZV07XG5cbiAgICAgICAgaWYgKCFmdW4pIHtcbiAgICAgICAgICAvLyBiYXNpYyB2YWxpZGF0b3I7IGl0J3MgYXNzdW1lZCB0aGF0IGV2ZXJ5IHN1YmNsYXNzIHdvdWxkIHdhbnQgdGhpc1xuICAgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdkZG9jICcgKyBkb2MuX2lkICsgJyBoYXMgbm8gdmlldyBuYW1lZCAnICtcbiAgICAgICAgICAgIHZpZXdOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRkb2NWYWxpZGF0b3IoZG9jLCB2aWV3TmFtZSk7XG4gICAgICAgIGNoZWNrUXVlcnlQYXJzZUVycm9yKG9wdHMsIGZ1bik7XG5cbiAgICAgICAgdmFyIGNyZWF0ZVZpZXdQcm9taXNlID0gY3JlYXRlVmlldyhcbiAgICAgICAgICAvKiBzb3VyY2VEQiAqLyBkYixcbiAgICAgICAgICAvKiB2aWV3TmFtZSAqLyBmdWxsVmlld05hbWUsXG4gICAgICAgICAgLyogbWFwRnVuICovIGZ1bi5tYXAsXG4gICAgICAgICAgLyogcmVkdWNlRnVuICovIGZ1bi5yZWR1Y2UsXG4gICAgICAgICAgLyogdGVtcG9yYXJ5ICovIGZhbHNlLFxuICAgICAgICAgIC8qIGxvY2FsRG9jTmFtZSAqLyBsb2NhbERvY05hbWUpO1xuICAgICAgICByZXR1cm4gY3JlYXRlVmlld1Byb21pc2UudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgIGlmIChvcHRzLnN0YWxlID09PSAnb2snIHx8IG9wdHMuc3RhbGUgPT09ICd1cGRhdGVfYWZ0ZXInKSB7XG4gICAgICAgICAgICBpZiAob3B0cy5zdGFsZSA9PT0gJ3VwZGF0ZV9hZnRlcicpIHtcbiAgICAgICAgICAgICAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KHZpZXcpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBxdWVyeVZpZXcodmlldywgb3B0cyk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gc3RhbGUgbm90IG9rXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlVmlldyh2aWV3KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Vmlldyh2aWV3LCBvcHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhYnN0cmFjdFF1ZXJ5KGZ1biwgb3B0cywgY2FsbGJhY2spIHtcbiAgICB2YXIgZGIgPSB0aGlzO1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyA/IGNvZXJjZU9wdGlvbnMob3B0cykgOiB7fTtcblxuICAgIGlmICh0eXBlb2YgZnVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW4gPSB7bWFwIDogZnVufTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5UHJvbWlzZWQoZGIsIGZ1biwgb3B0cyk7XG4gICAgfSk7XG4gICAgcHJvbWlzZWRDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB2YXIgYWJzdHJhY3RWaWV3Q2xlYW51cCA9IGNhbGxiYWNraWZ5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGIgPSB0aGlzO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBkYi5fdmlld0NsZWFudXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjdXN0b21WaWV3Q2xlYW51cChkYik7XG4gICAgfVxuICAgIGlmIChpc1JlbW90ZShkYikpIHtcbiAgICAgIHJldHVybiBodHRwVmlld0NsZWFudXAoZGIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxWaWV3Q2xlYW51cChkYik7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGFic3RyYWN0UXVlcnksXG4gICAgdmlld0NsZWFudXA6IGFic3RyYWN0Vmlld0NsZWFudXBcbiAgfTtcbn1cblxudmFyIGJ1aWx0SW5SZWR1Y2UgPSB7XG4gIF9zdW06IGZ1bmN0aW9uIChrZXlzLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4gc3VtKHZhbHVlcyk7XG4gIH0sXG5cbiAgX2NvdW50OiBmdW5jdGlvbiAoa2V5cywgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGg7XG4gIH0sXG5cbiAgX3N0YXRzOiBmdW5jdGlvbiAoa2V5cywgdmFsdWVzKSB7XG4gICAgLy8gbm8gbmVlZCB0byBpbXBsZW1lbnQgcmVyZWR1Y2U9dHJ1ZSwgYmVjYXVzZSBQb3VjaFxuICAgIC8vIHdpbGwgbmV2ZXIgY2FsbCBpdFxuICAgIGZ1bmN0aW9uIHN1bXNxcih2YWx1ZXMpIHtcbiAgICAgIHZhciBfc3Vtc3FyID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIG51bSA9IHZhbHVlc1tpXTtcbiAgICAgICAgX3N1bXNxciArPSAobnVtICogbnVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfc3Vtc3FyO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3VtICAgICA6IHN1bSh2YWx1ZXMpLFxuICAgICAgbWluICAgICA6IE1hdGgubWluLmFwcGx5KG51bGwsIHZhbHVlcyksXG4gICAgICBtYXggICAgIDogTWF0aC5tYXguYXBwbHkobnVsbCwgdmFsdWVzKSxcbiAgICAgIGNvdW50ICAgOiB2YWx1ZXMubGVuZ3RoLFxuICAgICAgc3Vtc3FyIDogc3Vtc3FyKHZhbHVlcylcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRCdWlsdEluKHJlZHVjZUZ1blN0cmluZykge1xuICBpZiAoL15fc3VtLy50ZXN0KHJlZHVjZUZ1blN0cmluZykpIHtcbiAgICByZXR1cm4gYnVpbHRJblJlZHVjZS5fc3VtO1xuICB9IGVsc2UgaWYgKC9eX2NvdW50Ly50ZXN0KHJlZHVjZUZ1blN0cmluZykpIHtcbiAgICByZXR1cm4gYnVpbHRJblJlZHVjZS5fY291bnQ7XG4gIH0gZWxzZSBpZiAoL15fc3RhdHMvLnRlc3QocmVkdWNlRnVuU3RyaW5nKSkge1xuICAgIHJldHVybiBidWlsdEluUmVkdWNlLl9zdGF0cztcbiAgfSBlbHNlIGlmICgvXl8vLnRlc3QocmVkdWNlRnVuU3RyaW5nKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihyZWR1Y2VGdW5TdHJpbmcgKyAnIGlzIG5vdCBhIHN1cHBvcnRlZCByZWR1Y2UgZnVuY3Rpb24uJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwcGVyKG1hcEZ1biwgZW1pdCkge1xuICAvLyBmb3IgdGVtcF92aWV3cyBvbmUgY2FuIHVzZSBlbWl0KGRvYywgZW1pdCksIHNlZSAjMzhcbiAgaWYgKHR5cGVvZiBtYXBGdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBtYXBGdW4ubGVuZ3RoID09PSAyKSB7XG4gICAgdmFyIG9yaWdNYXAgPSBtYXBGdW47XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgIHJldHVybiBvcmlnTWFwKGRvYywgZW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXZhbEZ1bmN0aW9uV2l0aEV2YWwobWFwRnVuLnRvU3RyaW5nKCksIGVtaXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIocmVkdWNlRnVuKSB7XG4gIHZhciByZWR1Y2VGdW5TdHJpbmcgPSByZWR1Y2VGdW4udG9TdHJpbmcoKTtcbiAgdmFyIGJ1aWx0SW4gPSBnZXRCdWlsdEluKHJlZHVjZUZ1blN0cmluZyk7XG4gIGlmIChidWlsdEluKSB7XG4gICAgcmV0dXJuIGJ1aWx0SW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV2YWxGdW5jdGlvbldpdGhFdmFsKHJlZHVjZUZ1blN0cmluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGRvY1ZhbGlkYXRvcihkZG9jLCB2aWV3TmFtZSkge1xuICB2YXIgZnVuID0gZGRvYy52aWV3cyAmJiBkZG9jLnZpZXdzW3ZpZXdOYW1lXTtcbiAgaWYgKHR5cGVvZiBmdW4ubWFwICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdkZG9jICcgKyBkZG9jLl9pZCArICcgaGFzIG5vIHN0cmluZyB2aWV3IG5hbWVkICcgK1xuICAgICAgdmlld05hbWUgKyAnLCBpbnN0ZWFkIGZvdW5kIG9iamVjdCBvZiB0eXBlOiAnICsgdHlwZW9mIGZ1bi5tYXApO1xuICB9XG59XG5cbnZhciBsb2NhbERvY05hbWUgPSAnbXJ2aWV3cyc7XG52YXIgYWJzdHJhY3QgPSBjcmVhdGVBYnN0cmFjdE1hcFJlZHVjZShsb2NhbERvY05hbWUsIG1hcHBlciwgcmVkdWNlciwgZGRvY1ZhbGlkYXRvcik7XG5cbmZ1bmN0aW9uIHF1ZXJ5KGZ1biwgb3B0cywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGFic3RyYWN0LnF1ZXJ5LmNhbGwodGhpcywgZnVuLCBvcHRzLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHZpZXdDbGVhbnVwKGNhbGxiYWNrKSB7XG4gIHJldHVybiBhYnN0cmFjdC52aWV3Q2xlYW51cC5jYWxsKHRoaXMsIGNhbGxiYWNrKTtcbn1cblxudmFyIG1hcHJlZHVjZSA9IHtcbiAgcXVlcnk6IHF1ZXJ5LFxuICB2aWV3Q2xlYW51cDogdmlld0NsZWFudXBcbn07XG5cbmZ1bmN0aW9uIGlzR2VuT25lJDEocmV2JCQxKSB7XG4gIHJldHVybiAvXjEtLy50ZXN0KHJldiQkMSk7XG59XG5cbmZ1bmN0aW9uIGZpbGVIYXNDaGFuZ2VkKGxvY2FsRG9jLCByZW1vdGVEb2MsIGZpbGVuYW1lKSB7XG4gIHJldHVybiAhbG9jYWxEb2MuX2F0dGFjaG1lbnRzIHx8XG4gICAgICAgICAhbG9jYWxEb2MuX2F0dGFjaG1lbnRzW2ZpbGVuYW1lXSB8fFxuICAgICAgICAgbG9jYWxEb2MuX2F0dGFjaG1lbnRzW2ZpbGVuYW1lXS5kaWdlc3QgIT09IHJlbW90ZURvYy5fYXR0YWNobWVudHNbZmlsZW5hbWVdLmRpZ2VzdDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jQXR0YWNobWVudHMoZGIsIGRvYykge1xuICB2YXIgZmlsZW5hbWVzID0gT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cyk7XG4gIHJldHVybiBQcm9taXNlLmFsbChmaWxlbmFtZXMubWFwKGZ1bmN0aW9uIChmaWxlbmFtZSkge1xuICAgIHJldHVybiBkYi5nZXRBdHRhY2htZW50KGRvYy5faWQsIGZpbGVuYW1lLCB7cmV2OiBkb2MuX3Jldn0pO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldERvY0F0dGFjaG1lbnRzRnJvbVRhcmdldE9yU291cmNlKHRhcmdldCwgc3JjLCBkb2MpIHtcbiAgdmFyIGRvQ2hlY2tGb3JMb2NhbEF0dGFjaG1lbnRzID0gaXNSZW1vdGUoc3JjKSAmJiAhaXNSZW1vdGUodGFyZ2V0KTtcbiAgdmFyIGZpbGVuYW1lcyA9IE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMpO1xuXG4gIGlmICghZG9DaGVja0ZvckxvY2FsQXR0YWNobWVudHMpIHtcbiAgICByZXR1cm4gZ2V0RG9jQXR0YWNobWVudHMoc3JjLCBkb2MpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldC5nZXQoZG9jLl9pZCkudGhlbihmdW5jdGlvbiAobG9jYWxEb2MpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZW5hbWVzLm1hcChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgIGlmIChmaWxlSGFzQ2hhbmdlZChsb2NhbERvYywgZG9jLCBmaWxlbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5nZXRBdHRhY2htZW50KGRvYy5faWQsIGZpbGVuYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRhY2htZW50KGxvY2FsRG9jLl9pZCwgZmlsZW5hbWUpO1xuICAgIH0pKTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0RG9jQXR0YWNobWVudHMoc3JjLCBkb2MpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVsa0dldE9wdHMoZGlmZnMpIHtcbiAgdmFyIHJlcXVlc3RzID0gW107XG4gIE9iamVjdC5rZXlzKGRpZmZzKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBtaXNzaW5nUmV2cyA9IGRpZmZzW2lkXS5taXNzaW5nO1xuICAgIG1pc3NpbmdSZXZzLmZvckVhY2goZnVuY3Rpb24gKG1pc3NpbmdSZXYpIHtcbiAgICAgIHJlcXVlc3RzLnB1c2goe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJldjogbWlzc2luZ1JldlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZG9jczogcmVxdWVzdHMsXG4gICAgcmV2czogdHJ1ZSxcbiAgICBsYXRlc3Q6IHRydWVcbiAgfTtcbn1cblxuLy9cbi8vIEZldGNoIGFsbCB0aGUgZG9jdW1lbnRzIGZyb20gdGhlIHNyYyBhcyBkZXNjcmliZWQgaW4gdGhlIFwiZGlmZnNcIixcbi8vIHdoaWNoIGlzIGEgbWFwcGluZyBvZiBkb2NzIElEcyB0byByZXZpc2lvbnMuIElmIHRoZSBzdGF0ZSBldmVyXG4vLyBjaGFuZ2VzIHRvIFwiY2FuY2VsbGVkXCIsIHRoZW4gdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbi8vIEVsc2UgaXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIGEgbGlzdCBvZiBmZXRjaGVkIGRvY3VtZW50cy5cbi8vXG5mdW5jdGlvbiBnZXREb2NzKHNyYywgdGFyZ2V0LCBkaWZmcywgc3RhdGUpIHtcbiAgZGlmZnMgPSBjbG9uZShkaWZmcyk7IC8vIHdlIGRvIG5vdCBuZWVkIHRvIG1vZGlmeSB0aGlzXG5cbiAgdmFyIHJlc3VsdERvY3MgPSBbXSxcbiAgICAgIG9rID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBnZXRBbGxEb2NzKCkge1xuXG4gICAgdmFyIGJ1bGtHZXRPcHRzID0gY3JlYXRlQnVsa0dldE9wdHMoZGlmZnMpO1xuXG4gICAgaWYgKCFidWxrR2V0T3B0cy5kb2NzLmxlbmd0aCkgeyAvLyBvcHRpbWl6YXRpb246IHNraXAgZW1wdHkgcmVxdWVzdHNcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjLmJ1bGtHZXQoYnVsa0dldE9wdHMpLnRoZW4oZnVuY3Rpb24gKGJ1bGtHZXRSZXNwb25zZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoc3RhdGUuY2FuY2VsbGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsbGVkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYnVsa0dldFJlc3BvbnNlLnJlc3VsdHMubWFwKGZ1bmN0aW9uIChidWxrR2V0SW5mbykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYnVsa0dldEluZm8uZG9jcy5tYXAoZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgIHZhciByZW1vdGVEb2MgPSBkb2Mub2s7XG5cbiAgICAgICAgICBpZiAoZG9jLmVycm9yKSB7XG4gICAgICAgICAgICAvLyB3aGVuIEFVVE9fQ09NUEFDVElPTiBpcyBzZXQsIGRvY3MgY2FuIGJlIHJldHVybmVkIHdoaWNoIGxvb2tcbiAgICAgICAgICAgIC8vIGxpa2UgdGhpczoge1wibWlzc2luZ1wiOlwiMS03YzNhYzI1NmI2OTNjNDYyYWY4NDQyZjk5MmI4MzY5NlwifVxuICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXJlbW90ZURvYyB8fCAhcmVtb3RlRG9jLl9hdHRhY2htZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZURvYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZ2V0RG9jQXR0YWNobWVudHNGcm9tVGFyZ2V0T3JTb3VyY2UodGFyZ2V0LCBzcmMsIHJlbW90ZURvYylcbiAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlbmFtZXMgPSBPYmplY3Qua2V5cyhyZW1vdGVEb2MuX2F0dGFjaG1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRhY2htZW50LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dCA9IHJlbW90ZURvYy5fYXR0YWNobWVudHNbZmlsZW5hbWVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXR0LnN0dWI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGF0dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0LmRhdGEgPSBhdHRhY2htZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3RlRG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pKVxuXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICByZXN1bHREb2NzID0gcmVzdWx0RG9jcy5jb25jYXQoZmxhdHRlbihyZXN1bHRzKS5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNBdHRhY2htZW50cyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLl9hdHRhY2htZW50cyAmJiBPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ29uZmxpY3RzKGRvYykge1xuICAgIHJldHVybiBkb2MuX2NvbmZsaWN0cyAmJiBkb2MuX2NvbmZsaWN0cy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hSZXZpc2lvbk9uZURvY3MoaWRzKSB7XG4gICAgLy8gT3B0aW1pemF0aW9uOiBmZXRjaCBnZW4tMSBkb2NzIGFuZCBhdHRhY2htZW50cyBpblxuICAgIC8vIGEgc2luZ2xlIHJlcXVlc3QgdXNpbmcgX2FsbF9kb2NzXG4gICAgcmV0dXJuIHNyYy5hbGxEb2NzKHtcbiAgICAgIGtleXM6IGlkcyxcbiAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgIGNvbmZsaWN0czogdHJ1ZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKHN0YXRlLmNhbmNlbGxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgcmVzLnJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIGlmIChyb3cuZGVsZXRlZCB8fCAhcm93LmRvYyB8fCAhaXNHZW5PbmUkMShyb3cudmFsdWUucmV2KSB8fFxuICAgICAgICAgICAgaGFzQXR0YWNobWVudHMocm93LmRvYykgfHwgaGFzQ29uZmxpY3RzKHJvdy5kb2MpKSB7XG4gICAgICAgICAgLy8gaWYgYW55IG9mIHRoZXNlIGNvbmRpdGlvbnMgYXBwbHksIHdlIG5lZWQgdG8gZmV0Y2ggdXNpbmcgZ2V0KClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdHJpcCBfY29uZmxpY3RzIGFycmF5IHRvIGFwcGVhc2UgQ1NHICgjNTc5MylcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChyb3cuZG9jLl9jb25mbGljdHMpIHtcbiAgICAgICAgICBkZWxldGUgcm93LmRvYy5fY29uZmxpY3RzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlIGRvYyB3ZSBnb3QgYmFjayBmcm9tIGFsbERvY3MoKSBpcyBzdWZmaWNpZW50XG4gICAgICAgIHJlc3VsdERvY3MucHVzaChyb3cuZG9jKTtcbiAgICAgICAgZGVsZXRlIGRpZmZzW3Jvdy5pZF07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJldmlzaW9uT25lRG9jcygpIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHRoZSBnZW5lcmF0aW9uIDEgZG9jcyBhbmQgZ2V0IHRoZW1cbiAgICAvLyBsZWF2aW5nIHRoZSBub24tZ2VuZXJhdGlvbiBvbmUgZG9jcyB0byBiZSBnb3Qgb3RoZXJ3aXNlXG4gICAgdmFyIGlkcyA9IE9iamVjdC5rZXlzKGRpZmZzKS5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICB2YXIgbWlzc2luZyA9IGRpZmZzW2lkXS5taXNzaW5nO1xuICAgICAgcmV0dXJuIG1pc3NpbmcubGVuZ3RoID09PSAxICYmIGlzR2VuT25lJDEobWlzc2luZ1swXSk7XG4gICAgfSk7XG4gICAgaWYgKGlkcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmV0Y2hSZXZpc2lvbk9uZURvY3MoaWRzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5SZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgb2s6b2ssIGRvY3M6cmVzdWx0RG9jcyB9O1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgLnRoZW4oZ2V0UmV2aXNpb25PbmVEb2NzKVxuICAgIC50aGVuKGdldEFsbERvY3MpXG4gICAgLnRoZW4ocmV0dXJuUmVzdWx0KTtcbn1cblxudmFyIENIRUNLUE9JTlRfVkVSU0lPTiA9IDE7XG52YXIgUkVQTElDQVRPUiA9IFwicG91Y2hkYlwiO1xuLy8gVGhpcyBpcyBhbiBhcmJpdHJhcnkgbnVtYmVyIHRvIGxpbWl0IHRoZVxuLy8gYW1vdW50IG9mIHJlcGxpY2F0aW9uIGhpc3Rvcnkgd2Ugc2F2ZSBpbiB0aGUgY2hlY2twb2ludC5cbi8vIElmIHdlIHNhdmUgdG9vIG11Y2gsIHRoZSBjaGVja3BvaW5nIGRvY3Mgd2lsbCBiZWNvbWUgdmVyeSBiaWcsXG4vLyBpZiB3ZSBzYXZlIGZld2VyLCB3ZSdsbCBydW4gYSBncmVhdGVyIHJpc2sgb2YgaGF2aW5nIHRvXG4vLyByZWFkIGFsbCB0aGUgY2hhbmdlcyBmcm9tIDAgd2hlbiBjaGVja3BvaW50IFBVVHMgZmFpbFxuLy8gQ291Y2hEQiAyLjAgaGFzIGEgbW9yZSBpbnZvbHZlZCBoaXN0b3J5IHBydW5pbmcsXG4vLyBidXQgbGV0J3MgZ28gZm9yIHRoZSBzaW1wbGUgdmVyc2lvbiBmb3Igbm93LlxudmFyIENIRUNLUE9JTlRfSElTVE9SWV9TSVpFID0gNTtcbnZhciBMT1dFU1RfU0VRID0gMDtcblxuZnVuY3Rpb24gdXBkYXRlQ2hlY2twb2ludChkYiwgaWQsIGNoZWNrcG9pbnQsIHNlc3Npb24sIHJldHVyblZhbHVlKSB7XG4gIHJldHVybiBkYi5nZXQoaWQpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICBpZiAoZGIuYWRhcHRlciA9PT0gJ2h0dHAnIHx8IGRiLmFkYXB0ZXIgPT09ICdodHRwcycpIHtcbiAgICAgICAgZXhwbGFpbkVycm9yKFxuICAgICAgICAgIDQwNCwgJ1BvdWNoREIgaXMganVzdCBjaGVja2luZyBpZiBhIHJlbW90ZSBjaGVja3BvaW50IGV4aXN0cy4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uLFxuICAgICAgICBfaWQ6IGlkLFxuICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgcmVwbGljYXRvcjogUkVQTElDQVRPUixcbiAgICAgICAgdmVyc2lvbjogQ0hFQ0tQT0lOVF9WRVJTSU9OXG4gICAgICB9O1xuICAgIH1cbiAgICB0aHJvdyBlcnI7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKGRvYykge1xuICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgY2hlY2twb2ludCBoYXMgbm90IGNoYW5nZWQsIGRvIG5vdCB1cGRhdGVcbiAgICBpZiAoZG9jLmxhc3Rfc2VxID09PSBjaGVja3BvaW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmlsdGVyIG91dCBjdXJyZW50IGVudHJ5IGZvciB0aGlzIHJlcGxpY2F0aW9uXG4gICAgZG9jLmhpc3RvcnkgPSAoZG9jLmhpc3RvcnkgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uc2Vzc2lvbl9pZCAhPT0gc2Vzc2lvbjtcbiAgICB9KTtcblxuICAgIC8vIEFkZCB0aGUgbGF0ZXN0IGNoZWNrcG9pbnQgdG8gaGlzdG9yeVxuICAgIGRvYy5oaXN0b3J5LnVuc2hpZnQoe1xuICAgICAgbGFzdF9zZXE6IGNoZWNrcG9pbnQsXG4gICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uXG4gICAgfSk7XG5cbiAgICAvLyBKdXN0IHRha2UgdGhlIGxhc3QgcGllY2VzIGluIGhpc3RvcnksIHRvXG4gICAgLy8gYXZvaWQgcmVhbGx5IGJpZyBjaGVja3BvaW50IGRvY3MuXG4gICAgLy8gc2VlIGNvbW1lbnQgb24gaGlzdG9yeSBzaXplIGFib3ZlXG4gICAgZG9jLmhpc3RvcnkgPSBkb2MuaGlzdG9yeS5zbGljZSgwLCBDSEVDS1BPSU5UX0hJU1RPUllfU0laRSk7XG5cbiAgICBkb2MudmVyc2lvbiA9IENIRUNLUE9JTlRfVkVSU0lPTjtcbiAgICBkb2MucmVwbGljYXRvciA9IFJFUExJQ0FUT1I7XG5cbiAgICBkb2Muc2Vzc2lvbl9pZCA9IHNlc3Npb247XG4gICAgZG9jLmxhc3Rfc2VxID0gY2hlY2twb2ludDtcblxuICAgIHJldHVybiBkYi5wdXQoZG9jKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgIC8vIHJldHJ5OyBzb21lb25lIGlzIHRyeWluZyB0byB3cml0ZSBhIGNoZWNrcG9pbnQgc2ltdWx0YW5lb3VzbHlcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUNoZWNrcG9pbnQoZGIsIGlkLCBjaGVja3BvaW50LCBzZXNzaW9uLCByZXR1cm5WYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBDaGVja3BvaW50ZXIoc3JjLCB0YXJnZXQsIGlkLCByZXR1cm5WYWx1ZSwgb3B0cykge1xuICB0aGlzLnNyYyA9IHNyYztcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy5yZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlO1xuICB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xufVxuXG5DaGVja3BvaW50ZXIucHJvdG90eXBlLndyaXRlQ2hlY2twb2ludCA9IGZ1bmN0aW9uIChjaGVja3BvaW50LCBzZXNzaW9uKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHRoaXMudXBkYXRlVGFyZ2V0KGNoZWNrcG9pbnQsIHNlc3Npb24pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZWxmLnVwZGF0ZVNvdXJjZShjaGVja3BvaW50LCBzZXNzaW9uKTtcbiAgfSk7XG59O1xuXG5DaGVja3BvaW50ZXIucHJvdG90eXBlLnVwZGF0ZVRhcmdldCA9IGZ1bmN0aW9uIChjaGVja3BvaW50LCBzZXNzaW9uKSB7XG4gIGlmICh0aGlzLm9wdHMud3JpdGVUYXJnZXRDaGVja3BvaW50KSB7XG4gICAgcmV0dXJuIHVwZGF0ZUNoZWNrcG9pbnQodGhpcy50YXJnZXQsIHRoaXMuaWQsIGNoZWNrcG9pbnQsXG4gICAgICBzZXNzaW9uLCB0aGlzLnJldHVyblZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG59O1xuXG5DaGVja3BvaW50ZXIucHJvdG90eXBlLnVwZGF0ZVNvdXJjZSA9IGZ1bmN0aW9uIChjaGVja3BvaW50LCBzZXNzaW9uKSB7XG4gIGlmICh0aGlzLm9wdHMud3JpdGVTb3VyY2VDaGVja3BvaW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiB1cGRhdGVDaGVja3BvaW50KHRoaXMuc3JjLCB0aGlzLmlkLCBjaGVja3BvaW50LFxuICAgICAgc2Vzc2lvbiwgdGhpcy5yZXR1cm5WYWx1ZSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChpc0ZvcmJpZGRlbkVycm9yKGVycikpIHtcbiAgICAgICAgICBzZWxmLm9wdHMud3JpdGVTb3VyY2VDaGVja3BvaW50ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxufTtcblxudmFyIGNvbXBhcmlzb25zID0ge1xuICBcInVuZGVmaW5lZFwiOiBmdW5jdGlvbiAodGFyZ2V0RG9jLCBzb3VyY2VEb2MpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBwcmV2aW91cyBjb21wYXJpc29uIGZ1bmN0aW9uXG4gICAgaWYgKGNvbGxhdGUodGFyZ2V0RG9jLmxhc3Rfc2VxLCBzb3VyY2VEb2MubGFzdF9zZXEpID09PSAwKSB7XG4gICAgICByZXR1cm4gc291cmNlRG9jLmxhc3Rfc2VxO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiAwO1xuICB9LFxuICBcIjFcIjogZnVuY3Rpb24gKHRhcmdldERvYywgc291cmNlRG9jKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgY29tcGFyaXNvbiBmdW5jdGlvbiBwb3J0ZWQgZnJvbSBDb3VjaERCXG4gICAgcmV0dXJuIGNvbXBhcmVSZXBsaWNhdGlvbkxvZ3Moc291cmNlRG9jLCB0YXJnZXREb2MpLmxhc3Rfc2VxO1xuICB9XG59O1xuXG5DaGVja3BvaW50ZXIucHJvdG90eXBlLmdldENoZWNrcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoc2VsZi5vcHRzICYmIHNlbGYub3B0cy53cml0ZVNvdXJjZUNoZWNrcG9pbnQgJiYgIXNlbGYub3B0cy53cml0ZVRhcmdldENoZWNrcG9pbnQpIHtcbiAgICByZXR1cm4gc2VsZi5zcmMuZ2V0KHNlbGYuaWQpLnRoZW4oZnVuY3Rpb24gKHNvdXJjZURvYykge1xuICAgICAgcmV0dXJuIHNvdXJjZURvYy5sYXN0X3NlcSB8fCBMT1dFU1RfU0VRO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGVyci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICByZXR1cm4gTE9XRVNUX1NFUTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZWxmLnRhcmdldC5nZXQoc2VsZi5pZCkudGhlbihmdW5jdGlvbiAodGFyZ2V0RG9jKSB7XG4gICAgaWYgKHNlbGYub3B0cyAmJiBzZWxmLm9wdHMud3JpdGVUYXJnZXRDaGVja3BvaW50ICYmICFzZWxmLm9wdHMud3JpdGVTb3VyY2VDaGVja3BvaW50KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0RG9jLmxhc3Rfc2VxIHx8IExPV0VTVF9TRVE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuc3JjLmdldChzZWxmLmlkKS50aGVuKGZ1bmN0aW9uIChzb3VyY2VEb2MpIHtcbiAgICAgIC8vIFNpbmNlIHdlIGNhbid0IG1pZ3JhdGUgYW4gb2xkIHZlcnNpb24gZG9jIHRvIGEgbmV3IG9uZVxuICAgICAgLy8gKG5vIHNlc3Npb24gaWQpLCB3ZSBqdXN0IGdvIHdpdGggdGhlIGxvd2VzdCBzZXEgaW4gdGhpcyBjYXNlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0YXJnZXREb2MudmVyc2lvbiAhPT0gc291cmNlRG9jLnZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIExPV0VTVF9TRVE7XG4gICAgICB9XG5cbiAgICAgIHZhciB2ZXJzaW9uO1xuICAgICAgaWYgKHRhcmdldERvYy52ZXJzaW9uKSB7XG4gICAgICAgIHZlcnNpb24gPSB0YXJnZXREb2MudmVyc2lvbi50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyc2lvbiA9IFwidW5kZWZpbmVkXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJzaW9uIGluIGNvbXBhcmlzb25zKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJpc29uc1t2ZXJzaW9uXSh0YXJnZXREb2MsIHNvdXJjZURvYyk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIExPV0VTVF9TRVE7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCAmJiB0YXJnZXREb2MubGFzdF9zZXEpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc3JjLnB1dCh7XG4gICAgICAgICAgX2lkOiBzZWxmLmlkLFxuICAgICAgICAgIGxhc3Rfc2VxOiBMT1dFU1RfU0VRXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBMT1dFU1RfU0VRO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKGlzRm9yYmlkZGVuRXJyb3IoZXJyKSkge1xuICAgICAgICAgICAgc2VsZi5vcHRzLndyaXRlU291cmNlQ2hlY2twb2ludCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldERvYy5sYXN0X3NlcTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICByZXR1cm4gTE9XRVNUX1NFUTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHJldHVybiBMT1dFU1RfU0VRO1xuICB9KTtcbn07XG4vLyBUaGlzIGNoZWNrcG9pbnQgY29tcGFyaXNvbiBpcyBwb3J0ZWQgZnJvbSBDb3VjaERCcyBzb3VyY2Vcbi8vIHRoZXkgY29tZSBmcm9tIGhlcmU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvdWNoZGItY291Y2gtcmVwbGljYXRvci9ibG9iL21hc3Rlci9zcmMvY291Y2hfcmVwbGljYXRvci5lcmwjTDg2My1MOTA2XG5cbmZ1bmN0aW9uIGNvbXBhcmVSZXBsaWNhdGlvbkxvZ3Moc3JjRG9jLCB0Z3REb2MpIHtcbiAgaWYgKHNyY0RvYy5zZXNzaW9uX2lkID09PSB0Z3REb2Muc2Vzc2lvbl9pZCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0X3NlcTogc3JjRG9jLmxhc3Rfc2VxLFxuICAgICAgaGlzdG9yeTogc3JjRG9jLmhpc3RvcnlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVSZXBsaWNhdGlvbkhpc3Rvcnkoc3JjRG9jLmhpc3RvcnksIHRndERvYy5oaXN0b3J5KTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVJlcGxpY2F0aW9uSGlzdG9yeShzb3VyY2VIaXN0b3J5LCB0YXJnZXRIaXN0b3J5KSB7XG4gIC8vIHRoZSBlcmxhbmcgbG9vcCB2aWEgZnVuY3Rpb24gYXJndW1lbnRzIGlzIG5vdCBzbyBlYXN5IHRvIHJlcGVhdCBpbiBKU1xuICAvLyB0aGVyZWZvcmUsIGRvaW5nIHRoaXMgYXMgcmVjdXJzaW9uXG4gIHZhciBTID0gc291cmNlSGlzdG9yeVswXTtcbiAgdmFyIHNvdXJjZVJlc3QgPSBzb3VyY2VIaXN0b3J5LnNsaWNlKDEpO1xuICB2YXIgVCA9IHRhcmdldEhpc3RvcnlbMF07XG4gIHZhciB0YXJnZXRSZXN0ID0gdGFyZ2V0SGlzdG9yeS5zbGljZSgxKTtcblxuICBpZiAoIVMgfHwgdGFyZ2V0SGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdF9zZXE6IExPV0VTVF9TRVEsXG4gICAgICBoaXN0b3J5OiBbXVxuICAgIH07XG4gIH1cblxuICB2YXIgc291cmNlSWQgPSBTLnNlc3Npb25faWQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaGFzU2Vzc2lvbklkKHNvdXJjZUlkLCB0YXJnZXRIaXN0b3J5KSkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0X3NlcTogUy5sYXN0X3NlcSxcbiAgICAgIGhpc3Rvcnk6IHNvdXJjZUhpc3RvcnlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHRhcmdldElkID0gVC5zZXNzaW9uX2lkO1xuICBpZiAoaGFzU2Vzc2lvbklkKHRhcmdldElkLCBzb3VyY2VSZXN0KSkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0X3NlcTogVC5sYXN0X3NlcSxcbiAgICAgIGhpc3Rvcnk6IHRhcmdldFJlc3RcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVSZXBsaWNhdGlvbkhpc3Rvcnkoc291cmNlUmVzdCwgdGFyZ2V0UmVzdCk7XG59XG5cbmZ1bmN0aW9uIGhhc1Nlc3Npb25JZChzZXNzaW9uSWQsIGhpc3RvcnkpIHtcbiAgdmFyIHByb3BzID0gaGlzdG9yeVswXTtcbiAgdmFyIHJlc3QgPSBoaXN0b3J5LnNsaWNlKDEpO1xuXG4gIGlmICghc2Vzc2lvbklkIHx8IGhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlc3Npb25JZCA9PT0gcHJvcHMuc2Vzc2lvbl9pZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGhhc1Nlc3Npb25JZChzZXNzaW9uSWQsIHJlc3QpO1xufVxuXG5mdW5jdGlvbiBpc0ZvcmJpZGRlbkVycm9yKGVycikge1xuICByZXR1cm4gdHlwZW9mIGVyci5zdGF0dXMgPT09ICdudW1iZXInICYmIE1hdGguZmxvb3IoZXJyLnN0YXR1cyAvIDEwMCkgPT09IDQ7XG59XG5cbnZhciBTVEFSVElOR19CQUNLX09GRiA9IDA7XG5cbmZ1bmN0aW9uIGJhY2tPZmYob3B0cywgcmV0dXJuVmFsdWUsIGVycm9yLCBjYWxsYmFjaykge1xuICBpZiAob3B0cy5yZXRyeSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5WYWx1ZS5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm5WYWx1ZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2Ygb3B0cy5iYWNrX29mZl9mdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMuYmFja19vZmZfZnVuY3Rpb24gPSBkZWZhdWx0QmFja09mZjtcbiAgfVxuICByZXR1cm5WYWx1ZS5lbWl0KCdyZXF1ZXN0RXJyb3InLCBlcnJvcik7XG4gIGlmIChyZXR1cm5WYWx1ZS5zdGF0ZSA9PT0gJ2FjdGl2ZScgfHwgcmV0dXJuVmFsdWUuc3RhdGUgPT09ICdwZW5kaW5nJykge1xuICAgIHJldHVyblZhbHVlLmVtaXQoJ3BhdXNlZCcsIGVycm9yKTtcbiAgICByZXR1cm5WYWx1ZS5zdGF0ZSA9ICdzdG9wcGVkJztcbiAgICB2YXIgYmFja09mZlNldCA9IGZ1bmN0aW9uIGJhY2tvZmZUaW1lU2V0KCkge1xuICAgICAgb3B0cy5jdXJyZW50X2JhY2tfb2ZmID0gU1RBUlRJTkdfQkFDS19PRkY7XG4gICAgfTtcbiAgICB2YXIgcmVtb3ZlQmFja09mZlNldHRlciA9IGZ1bmN0aW9uIHJlbW92ZUJhY2tPZmZUaW1lU2V0KCkge1xuICAgICAgcmV0dXJuVmFsdWUucmVtb3ZlTGlzdGVuZXIoJ2FjdGl2ZScsIGJhY2tPZmZTZXQpO1xuICAgIH07XG4gICAgcmV0dXJuVmFsdWUub25jZSgncGF1c2VkJywgcmVtb3ZlQmFja09mZlNldHRlcik7XG4gICAgcmV0dXJuVmFsdWUub25jZSgnYWN0aXZlJywgYmFja09mZlNldCk7XG4gIH1cblxuICBvcHRzLmN1cnJlbnRfYmFja19vZmYgPSBvcHRzLmN1cnJlbnRfYmFja19vZmYgfHwgU1RBUlRJTkdfQkFDS19PRkY7XG4gIG9wdHMuY3VycmVudF9iYWNrX29mZiA9IG9wdHMuYmFja19vZmZfZnVuY3Rpb24ob3B0cy5jdXJyZW50X2JhY2tfb2ZmKTtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgb3B0cy5jdXJyZW50X2JhY2tfb2ZmKTtcbn1cblxuZnVuY3Rpb24gc29ydE9iamVjdFByb3BlcnRpZXNCeUtleShxdWVyeVBhcmFtcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLnNvcnQoY29sbGF0ZSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG5cbi8vIEdlbmVyYXRlIGEgdW5pcXVlIGlkIHBhcnRpY3VsYXIgdG8gdGhpcyByZXBsaWNhdGlvbi5cbi8vIE5vdCBndWFyYW50ZWVkIHRvIGFsaWduIHBlcmZlY3RseSB3aXRoIENvdWNoREIncyByZXAgaWRzLlxuZnVuY3Rpb24gZ2VuZXJhdGVSZXBsaWNhdGlvbklkKHNyYywgdGFyZ2V0LCBvcHRzKSB7XG4gIHZhciBkb2NJZHMgPSBvcHRzLmRvY19pZHMgPyBvcHRzLmRvY19pZHMuc29ydChjb2xsYXRlKSA6ICcnO1xuICB2YXIgZmlsdGVyRnVuID0gb3B0cy5maWx0ZXIgPyBvcHRzLmZpbHRlci50b1N0cmluZygpIDogJyc7XG4gIHZhciBxdWVyeVBhcmFtcyA9ICcnO1xuICB2YXIgZmlsdGVyVmlld05hbWUgPSAgJyc7XG4gIHZhciBzZWxlY3RvciA9ICcnO1xuXG4gIC8vIHBvc3NpYmlsaXR5IGZvciBjaGVja3BvaW50cyB0byBiZSBsb3N0IGhlcmUgYXMgYmVoYXZpb3VyIG9mXG4gIC8vIEpTT04uc3RyaW5naWZ5IGlzIG5vdCBzdGFibGUgKHNlZSAjNjIyNilcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChvcHRzLnNlbGVjdG9yKSB7XG4gICAgc2VsZWN0b3IgPSBKU09OLnN0cmluZ2lmeShvcHRzLnNlbGVjdG9yKTtcbiAgfVxuXG4gIGlmIChvcHRzLmZpbHRlciAmJiBvcHRzLnF1ZXJ5X3BhcmFtcykge1xuICAgIHF1ZXJ5UGFyYW1zID0gSlNPTi5zdHJpbmdpZnkoc29ydE9iamVjdFByb3BlcnRpZXNCeUtleShvcHRzLnF1ZXJ5X3BhcmFtcykpO1xuICB9XG5cbiAgaWYgKG9wdHMuZmlsdGVyICYmIG9wdHMuZmlsdGVyID09PSAnX3ZpZXcnKSB7XG4gICAgZmlsdGVyVmlld05hbWUgPSBvcHRzLnZpZXcudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChbc3JjLmlkKCksIHRhcmdldC5pZCgpXSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgdmFyIHF1ZXJ5RGF0YSA9IHJlc1swXSArIHJlc1sxXSArIGZpbHRlckZ1biArIGZpbHRlclZpZXdOYW1lICtcbiAgICAgIHF1ZXJ5UGFyYW1zICsgZG9jSWRzICsgc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBiaW5hcnlNZDUocXVlcnlEYXRhLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfSkudGhlbihmdW5jdGlvbiAobWQ1c3VtKSB7XG4gICAgLy8gY2FuJ3QgdXNlIHN0cmFpZ2h0LXVwIG1kNSBhbHBoYWJldCwgYmVjYXVzZVxuICAgIC8vIHRoZSBjaGFyICcvJyBpcyBpbnRlcnByZXRlZCBhcyBiZWluZyBmb3IgYXR0YWNobWVudHMsXG4gICAgLy8gYW5kICsgaXMgYWxzbyBub3QgdXJsLXNhZmVcbiAgICBtZDVzdW0gPSBtZDVzdW0ucmVwbGFjZSgvXFwvL2csICcuJykucmVwbGFjZSgvXFwrL2csICdfJyk7XG4gICAgcmV0dXJuICdfbG9jYWwvJyArIG1kNXN1bTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxpY2F0ZShzcmMsIHRhcmdldCwgb3B0cywgcmV0dXJuVmFsdWUsIHJlc3VsdCkge1xuICB2YXIgYmF0Y2hlcyA9IFtdOyAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgYmF0Y2hlcyB0byBiZSBwcm9jZXNzZWRcbiAgdmFyIGN1cnJlbnRCYXRjaDsgICAgICAgICAgICAgICAvLyB0aGUgYmF0Y2ggY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZFxuICB2YXIgcGVuZGluZ0JhdGNoID0ge1xuICAgIHNlcTogMCxcbiAgICBjaGFuZ2VzOiBbXSxcbiAgICBkb2NzOiBbXVxuICB9OyAvLyBuZXh0IGJhdGNoLCBub3QgeWV0IHJlYWR5IHRvIGJlIHByb2Nlc3NlZFxuICB2YXIgd3JpdGluZ0NoZWNrcG9pbnQgPSBmYWxzZTsgIC8vIHRydWUgd2hpbGUgY2hlY2twb2ludCBpcyBiZWluZyB3cml0dGVuXG4gIHZhciBjaGFuZ2VzQ29tcGxldGVkID0gZmFsc2U7ICAgLy8gdHJ1ZSB3aGVuIGFsbCBjaGFuZ2VzIHJlY2VpdmVkXG4gIHZhciByZXBsaWNhdGlvbkNvbXBsZXRlZCA9IGZhbHNlOyAvLyB0cnVlIHdoZW4gcmVwbGljYXRpb24gaGFzIGNvbXBsZXRlZFxuICB2YXIgbGFzdF9zZXEgPSAwO1xuICB2YXIgY29udGludW91cyA9IG9wdHMuY29udGludW91cyB8fCBvcHRzLmxpdmUgfHwgZmFsc2U7XG4gIHZhciBiYXRjaF9zaXplID0gb3B0cy5iYXRjaF9zaXplIHx8IDEwMDtcbiAgdmFyIGJhdGNoZXNfbGltaXQgPSBvcHRzLmJhdGNoZXNfbGltaXQgfHwgMTA7XG4gIHZhciBjaGFuZ2VzUGVuZGluZyA9IGZhbHNlOyAgICAgLy8gdHJ1ZSB3aGlsZSBzcmMuY2hhbmdlcyBpcyBydW5uaW5nXG4gIHZhciBkb2NfaWRzID0gb3B0cy5kb2NfaWRzO1xuICB2YXIgc2VsZWN0b3IgPSBvcHRzLnNlbGVjdG9yO1xuICB2YXIgcmVwSWQ7XG4gIHZhciBjaGVja3BvaW50ZXI7XG4gIHZhciBjaGFuZ2VkRG9jcyA9IFtdO1xuICAvLyBMaWtlIGNvdWNoZGIsIGV2ZXJ5IHJlcGxpY2F0aW9uIGdldHMgYSB1bmlxdWUgc2Vzc2lvbiBpZFxuICB2YXIgc2Vzc2lvbiA9IHV1aWQoKTtcblxuICByZXN1bHQgPSByZXN1bHQgfHwge1xuICAgIG9rOiB0cnVlLFxuICAgIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBkb2NzX3JlYWQ6IDAsXG4gICAgZG9jc193cml0dGVuOiAwLFxuICAgIGRvY193cml0ZV9mYWlsdXJlczogMCxcbiAgICBlcnJvcnM6IFtdXG4gIH07XG5cbiAgdmFyIGNoYW5nZXNPcHRzID0ge307XG4gIHJldHVyblZhbHVlLnJlYWR5KHNyYywgdGFyZ2V0KTtcblxuICBmdW5jdGlvbiBpbml0Q2hlY2twb2ludGVyKCkge1xuICAgIGlmIChjaGVja3BvaW50ZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlUmVwbGljYXRpb25JZChzcmMsIHRhcmdldCwgb3B0cykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXBJZCA9IHJlcztcblxuICAgICAgdmFyIGNoZWNrcG9pbnRPcHRzID0ge307XG4gICAgICBpZiAob3B0cy5jaGVja3BvaW50ID09PSBmYWxzZSkge1xuICAgICAgICBjaGVja3BvaW50T3B0cyA9IHsgd3JpdGVTb3VyY2VDaGVja3BvaW50OiBmYWxzZSwgd3JpdGVUYXJnZXRDaGVja3BvaW50OiBmYWxzZSB9O1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmNoZWNrcG9pbnQgPT09ICdzb3VyY2UnKSB7XG4gICAgICAgIGNoZWNrcG9pbnRPcHRzID0geyB3cml0ZVNvdXJjZUNoZWNrcG9pbnQ6IHRydWUsIHdyaXRlVGFyZ2V0Q2hlY2twb2ludDogZmFsc2UgfTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5jaGVja3BvaW50ID09PSAndGFyZ2V0Jykge1xuICAgICAgICBjaGVja3BvaW50T3B0cyA9IHsgd3JpdGVTb3VyY2VDaGVja3BvaW50OiBmYWxzZSwgd3JpdGVUYXJnZXRDaGVja3BvaW50OiB0cnVlIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja3BvaW50T3B0cyA9IHsgd3JpdGVTb3VyY2VDaGVja3BvaW50OiB0cnVlLCB3cml0ZVRhcmdldENoZWNrcG9pbnQ6IHRydWUgfTtcbiAgICAgIH1cblxuICAgICAgY2hlY2twb2ludGVyID0gbmV3IENoZWNrcG9pbnRlcihzcmMsIHRhcmdldCwgcmVwSWQsIHJldHVyblZhbHVlLCBjaGVja3BvaW50T3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZURvY3MoKSB7XG4gICAgY2hhbmdlZERvY3MgPSBbXTtcblxuICAgIGlmIChjdXJyZW50QmF0Y2guZG9jcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGRvY3MgPSBjdXJyZW50QmF0Y2guZG9jcztcbiAgICB2YXIgYnVsa09wdHMgPSB7dGltZW91dDogb3B0cy50aW1lb3V0fTtcbiAgICByZXR1cm4gdGFyZ2V0LmJ1bGtEb2NzKHtkb2NzOiBkb2NzLCBuZXdfZWRpdHM6IGZhbHNlfSwgYnVsa09wdHMpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxsZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gYHJlc2AgZG9lc24ndCBpbmNsdWRlIGZ1bGwgZG9jdW1lbnRzICh3aGljaCBsaXZlIGluIGBkb2NzYCksIHNvIHdlIGNyZWF0ZSBhIG1hcCBvZiBcbiAgICAgIC8vIChpZCAtPiBlcnJvciksIGFuZCBjaGVjayBmb3IgZXJyb3JzIHdoaWxlIGl0ZXJhdGluZyBvdmVyIGBkb2NzYFxuICAgICAgdmFyIGVycm9yc0J5SWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgZXJyb3JzQnlJZFtyZXMuaWRdID0gcmVzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIGVycm9yc05vID0gT2JqZWN0LmtleXMoZXJyb3JzQnlJZCkubGVuZ3RoO1xuICAgICAgcmVzdWx0LmRvY193cml0ZV9mYWlsdXJlcyArPSBlcnJvcnNObztcbiAgICAgIHJlc3VsdC5kb2NzX3dyaXR0ZW4gKz0gZG9jcy5sZW5ndGggLSBlcnJvcnNObztcblxuICAgICAgZG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzQnlJZFtkb2MuX2lkXTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAvLyBOb3JtYWxpemUgZXJyb3IgbmFtZS4gaS5lLiAnVW5hdXRob3JpemVkJyAtPiAndW5hdXRob3JpemVkJyAoZWcgU3luYyBHYXRld2F5KVxuICAgICAgICAgIHZhciBlcnJvck5hbWUgPSAoZXJyb3IubmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoZXJyb3JOYW1lID09PSAndW5hdXRob3JpemVkJyB8fCBlcnJvck5hbWUgPT09ICdmb3JiaWRkZW4nKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZS5lbWl0KCdkZW5pZWQnLCBjbG9uZShlcnJvcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZERvY3MucHVzaChkb2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJlc3VsdC5kb2Nfd3JpdGVfZmFpbHVyZXMgKz0gZG9jcy5sZW5ndGg7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hCYXRjaCgpIHtcbiAgICBpZiAoY3VycmVudEJhdGNoLmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gZ2V0dGluZyBkb2NzLicpO1xuICAgIH1cbiAgICByZXN1bHQubGFzdF9zZXEgPSBsYXN0X3NlcSA9IGN1cnJlbnRCYXRjaC5zZXE7XG4gICAgdmFyIG91dFJlc3VsdCA9IGNsb25lKHJlc3VsdCk7XG4gICAgaWYgKGNoYW5nZWREb2NzLmxlbmd0aCkge1xuICAgICAgb3V0UmVzdWx0LmRvY3MgPSBjaGFuZ2VkRG9jcztcbiAgICAgIC8vIEF0dGFjaCAncGVuZGluZycgcHJvcGVydHkgaWYgc2VydmVyIHN1cHBvcnRzIGl0IChDb3VjaERCIDIuMCspXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0eXBlb2YgY3VycmVudEJhdGNoLnBlbmRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG91dFJlc3VsdC5wZW5kaW5nID0gY3VycmVudEJhdGNoLnBlbmRpbmc7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50QmF0Y2gucGVuZGluZztcbiAgICAgIH1cbiAgICAgIHJldHVyblZhbHVlLmVtaXQoJ2NoYW5nZScsIG91dFJlc3VsdCk7XG4gICAgfVxuICAgIHdyaXRpbmdDaGVja3BvaW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gY2hlY2twb2ludGVyLndyaXRlQ2hlY2twb2ludChjdXJyZW50QmF0Y2guc2VxLFxuICAgICAgICBzZXNzaW9uKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHdyaXRpbmdDaGVja3BvaW50ID0gZmFsc2U7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgY3VycmVudEJhdGNoID0gdW5kZWZpbmVkO1xuICAgICAgZ2V0Q2hhbmdlcygpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIG9uQ2hlY2twb2ludEVycm9yKGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaWZmcygpIHtcbiAgICB2YXIgZGlmZiA9IHt9O1xuICAgIGN1cnJlbnRCYXRjaC5jaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgLy8gQ291Y2hiYXNlIFN5bmMgR2F0ZXdheSBlbWl0cyB0aGVzZSwgYnV0IHdlIGNhbiBpZ25vcmUgdGhlbVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoY2hhbmdlLmlkID09PSBcIl91c2VyL1wiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRpZmZbY2hhbmdlLmlkXSA9IGNoYW5nZS5jaGFuZ2VzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5yZXY7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0LnJldnNEaWZmKGRpZmYpLnRoZW4oZnVuY3Rpb24gKGRpZmZzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgLy8gY3VycmVudEJhdGNoLmRpZmZzIGVsZW1lbnRzIGFyZSBkZWxldGVkIGFzIHRoZSBkb2N1bWVudHMgYXJlIHdyaXR0ZW5cbiAgICAgIGN1cnJlbnRCYXRjaC5kaWZmcyA9IGRpZmZzO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmF0Y2hEb2NzKCkge1xuICAgIHJldHVybiBnZXREb2NzKHNyYywgdGFyZ2V0LCBjdXJyZW50QmF0Y2guZGlmZnMsIHJldHVyblZhbHVlKS50aGVuKGZ1bmN0aW9uIChnb3QpIHtcbiAgICAgIGN1cnJlbnRCYXRjaC5lcnJvciA9ICFnb3Qub2s7XG4gICAgICBnb3QuZG9jcy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRCYXRjaC5kaWZmc1tkb2MuX2lkXTtcbiAgICAgICAgcmVzdWx0LmRvY3NfcmVhZCsrO1xuICAgICAgICBjdXJyZW50QmF0Y2guZG9jcy5wdXNoKGRvYyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV4dEJhdGNoKCkge1xuICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQgfHwgY3VycmVudEJhdGNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChiYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcHJvY2Vzc1BlbmRpbmdCYXRjaCh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3VycmVudEJhdGNoID0gYmF0Y2hlcy5zaGlmdCgpO1xuICAgIGdldERpZmZzKClcbiAgICAgIC50aGVuKGdldEJhdGNoRG9jcylcbiAgICAgIC50aGVuKHdyaXRlRG9jcylcbiAgICAgIC50aGVuKGZpbmlzaEJhdGNoKVxuICAgICAgLnRoZW4oc3RhcnROZXh0QmF0Y2gpXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBhYm9ydFJlcGxpY2F0aW9uKCdiYXRjaCBwcm9jZXNzaW5nIHRlcm1pbmF0ZWQgd2l0aCBlcnJvcicsIGVycik7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlbmRpbmdCYXRjaChpbW1lZGlhdGUkJDEpIHtcbiAgICBpZiAocGVuZGluZ0JhdGNoLmNoYW5nZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoYmF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWN1cnJlbnRCYXRjaCkge1xuICAgICAgICBpZiAoKGNvbnRpbnVvdXMgJiYgY2hhbmdlc09wdHMubGl2ZSkgfHwgY2hhbmdlc0NvbXBsZXRlZCkge1xuICAgICAgICAgIHJldHVyblZhbHVlLnN0YXRlID0gJ3BlbmRpbmcnO1xuICAgICAgICAgIHJldHVyblZhbHVlLmVtaXQoJ3BhdXNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzQ29tcGxldGVkKSB7XG4gICAgICAgICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGltbWVkaWF0ZSQkMSB8fFxuICAgICAgY2hhbmdlc0NvbXBsZXRlZCB8fFxuICAgICAgcGVuZGluZ0JhdGNoLmNoYW5nZXMubGVuZ3RoID49IGJhdGNoX3NpemVcbiAgICApIHtcbiAgICAgIGJhdGNoZXMucHVzaChwZW5kaW5nQmF0Y2gpO1xuICAgICAgcGVuZGluZ0JhdGNoID0ge1xuICAgICAgICBzZXE6IDAsXG4gICAgICAgIGNoYW5nZXM6IFtdLFxuICAgICAgICBkb2NzOiBbXVxuICAgICAgfTtcbiAgICAgIGlmIChyZXR1cm5WYWx1ZS5zdGF0ZSA9PT0gJ3BlbmRpbmcnIHx8IHJldHVyblZhbHVlLnN0YXRlID09PSAnc3RvcHBlZCcpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUuc3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgcmV0dXJuVmFsdWUuZW1pdCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBzdGFydE5leHRCYXRjaCgpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gYWJvcnRSZXBsaWNhdGlvbihyZWFzb24sIGVycikge1xuICAgIGlmIChyZXBsaWNhdGlvbkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWVyci5tZXNzYWdlKSB7XG4gICAgICBlcnIubWVzc2FnZSA9IHJlYXNvbjtcbiAgICB9XG4gICAgcmVzdWx0Lm9rID0gZmFsc2U7XG4gICAgcmVzdWx0LnN0YXR1cyA9ICdhYm9ydGluZyc7XG4gICAgYmF0Y2hlcyA9IFtdO1xuICAgIHBlbmRpbmdCYXRjaCA9IHtcbiAgICAgIHNlcTogMCxcbiAgICAgIGNoYW5nZXM6IFtdLFxuICAgICAgZG9jczogW11cbiAgICB9O1xuICAgIGNvbXBsZXRlUmVwbGljYXRpb24oZXJyKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29tcGxldGVSZXBsaWNhdGlvbihmYXRhbEVycm9yKSB7XG4gICAgaWYgKHJlcGxpY2F0aW9uQ29tcGxldGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSAnY2FuY2VsbGVkJztcbiAgICAgIGlmICh3cml0aW5nQ2hlY2twb2ludCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zdGF0dXMgPSByZXN1bHQuc3RhdHVzIHx8ICdjb21wbGV0ZSc7XG4gICAgcmVzdWx0LmVuZF90aW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIHJlc3VsdC5sYXN0X3NlcSA9IGxhc3Rfc2VxO1xuICAgIHJlcGxpY2F0aW9uQ29tcGxldGVkID0gdHJ1ZTtcblxuICAgIGlmIChmYXRhbEVycm9yKSB7XG4gICAgICAvLyBuZWVkIHRvIGV4dGVuZCB0aGUgZXJyb3IgYmVjYXVzZSBGaXJlZm94IGNvbnNpZGVycyBcIi5yZXN1bHRcIiByZWFkLW9ubHlcbiAgICAgIGZhdGFsRXJyb3IgPSBjcmVhdGVFcnJvcihmYXRhbEVycm9yKTtcbiAgICAgIGZhdGFsRXJyb3IucmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICAvLyBOb3JtYWxpemUgZXJyb3IgbmFtZS4gaS5lLiAnVW5hdXRob3JpemVkJyAtPiAndW5hdXRob3JpemVkJyAoZWcgU3luYyBHYXRld2F5KVxuICAgICAgdmFyIGVycm9yTmFtZSA9IChmYXRhbEVycm9yLm5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoZXJyb3JOYW1lID09PSAndW5hdXRob3JpemVkJyB8fCBlcnJvck5hbWUgPT09ICdmb3JiaWRkZW4nKSB7XG4gICAgICAgIHJldHVyblZhbHVlLmVtaXQoJ2Vycm9yJywgZmF0YWxFcnJvcik7XG4gICAgICAgIHJldHVyblZhbHVlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja09mZihvcHRzLCByZXR1cm5WYWx1ZSwgZmF0YWxFcnJvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlcGxpY2F0ZShzcmMsIHRhcmdldCwgb3B0cywgcmV0dXJuVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuVmFsdWUuZW1pdCgnY29tcGxldGUnLCByZXN1bHQpO1xuICAgICAgcmV0dXJuVmFsdWUucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2UsIHBlbmRpbmcsIGxhc3RTZXEpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggJ3BlbmRpbmcnIHByb3BlcnR5IGlmIHNlcnZlciBzdXBwb3J0cyBpdCAoQ291Y2hEQiAyLjArKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgcGVuZGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHBlbmRpbmdCYXRjaC5wZW5kaW5nID0gcGVuZGluZztcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyID0gZmlsdGVyQ2hhbmdlKG9wdHMpKGNoYW5nZSk7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGVuZGluZ0JhdGNoLnNlcSA9IGNoYW5nZS5zZXEgfHwgbGFzdFNlcTtcbiAgICBwZW5kaW5nQmF0Y2guY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3NQZW5kaW5nQmF0Y2goYmF0Y2hlcy5sZW5ndGggPT09IDAgJiYgY2hhbmdlc09wdHMubGl2ZSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlc0NvbXBsZXRlKGNoYW5nZXMpIHtcbiAgICBjaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZVJlcGxpY2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgbm8gcmVzdWx0cyB3ZXJlIHJldHVybmVkIHRoZW4gd2UncmUgZG9uZSxcbiAgICAvLyBlbHNlIGZldGNoIG1vcmVcbiAgICBpZiAoY2hhbmdlcy5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYW5nZXNPcHRzLnNpbmNlID0gY2hhbmdlcy5yZXN1bHRzW2NoYW5nZXMucmVzdWx0cy5sZW5ndGggLSAxXS5zZXE7XG4gICAgICBnZXRDaGFuZ2VzKCk7XG4gICAgICBwcm9jZXNzUGVuZGluZ0JhdGNoKHRydWUpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRpbnVvdXMpIHtcbiAgICAgICAgICBjaGFuZ2VzT3B0cy5saXZlID0gdHJ1ZTtcbiAgICAgICAgICBnZXRDaGFuZ2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc1BlbmRpbmdCYXRjaCh0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHVwZGF0ZSB0aGUgY2hlY2twb2ludCBzbyB3ZSBzdGFydCBmcm9tIHRoZSByaWdodCBzZXEgbmV4dCB0aW1lXG4gICAgICBpZiAoIWN1cnJlbnRCYXRjaCAmJiBjaGFuZ2VzLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHdyaXRpbmdDaGVja3BvaW50ID0gdHJ1ZTtcbiAgICAgICAgY2hlY2twb2ludGVyLndyaXRlQ2hlY2twb2ludChjaGFuZ2VzLmxhc3Rfc2VxLFxuICAgICAgICAgICAgc2Vzc2lvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd3JpdGluZ0NoZWNrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgICByZXN1bHQubGFzdF9zZXEgPSBsYXN0X3NlcSA9IGNoYW5nZXMubGFzdF9zZXE7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKG9uQ2hlY2twb2ludEVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBvbkNoYW5nZXNFcnJvcihlcnIpIHtcbiAgICBjaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZVJlcGxpY2F0aW9uKCk7XG4gICAgfVxuICAgIGFib3J0UmVwbGljYXRpb24oJ2NoYW5nZXMgcmVqZWN0ZWQnLCBlcnIpO1xuICB9XG5cblxuICBmdW5jdGlvbiBnZXRDaGFuZ2VzKCkge1xuICAgIGlmICghKFxuICAgICAgIWNoYW5nZXNQZW5kaW5nICYmXG4gICAgICAhY2hhbmdlc0NvbXBsZXRlZCAmJlxuICAgICAgYmF0Y2hlcy5sZW5ndGggPCBiYXRjaGVzX2xpbWl0XG4gICAgICApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5nZXNQZW5kaW5nID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBhYm9ydENoYW5nZXMoKSB7XG4gICAgICBjaGFuZ2VzLmNhbmNlbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgIHJldHVyblZhbHVlLnJlbW92ZUxpc3RlbmVyKCdjYW5jZWwnLCBhYm9ydENoYW5nZXMpO1xuICAgIH1cblxuICAgIGlmIChyZXR1cm5WYWx1ZS5fY2hhbmdlcykgeyAvLyByZW1vdmUgb2xkIGNoYW5nZXMoKSBhbmQgbGlzdGVuZXJzXG4gICAgICByZXR1cm5WYWx1ZS5yZW1vdmVMaXN0ZW5lcignY2FuY2VsJywgcmV0dXJuVmFsdWUuX2Fib3J0Q2hhbmdlcyk7XG4gICAgICByZXR1cm5WYWx1ZS5fY2hhbmdlcy5jYW5jZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuVmFsdWUub25jZSgnY2FuY2VsJywgYWJvcnRDaGFuZ2VzKTtcblxuICAgIHZhciBjaGFuZ2VzID0gc3JjLmNoYW5nZXMoY2hhbmdlc09wdHMpXG4gICAgICAub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBjaGFuZ2VzLnRoZW4ocmVtb3ZlTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyKTtcbiAgICBjaGFuZ2VzLnRoZW4ob25DaGFuZ2VzQ29tcGxldGUpXG4gICAgICAuY2F0Y2gob25DaGFuZ2VzRXJyb3IpO1xuXG4gICAgaWYgKG9wdHMucmV0cnkpIHtcbiAgICAgIC8vIHNhdmUgZm9yIGxhdGVyIHNvIHdlIGNhbiBjYW5jZWwgaWYgbmVjZXNzYXJ5XG4gICAgICByZXR1cm5WYWx1ZS5fY2hhbmdlcyA9IGNoYW5nZXM7XG4gICAgICByZXR1cm5WYWx1ZS5fYWJvcnRDaGFuZ2VzID0gYWJvcnRDaGFuZ2VzO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gc3RhcnRDaGFuZ2VzKCkge1xuICAgIGluaXRDaGVja3BvaW50ZXIoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHJldHVyblZhbHVlLmNhbmNlbGxlZCkge1xuICAgICAgICBjb21wbGV0ZVJlcGxpY2F0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVja3BvaW50ZXIuZ2V0Q2hlY2twb2ludCgpLnRoZW4oZnVuY3Rpb24gKGNoZWNrcG9pbnQpIHtcbiAgICAgICAgbGFzdF9zZXEgPSBjaGVja3BvaW50O1xuICAgICAgICBjaGFuZ2VzT3B0cyA9IHtcbiAgICAgICAgICBzaW5jZTogbGFzdF9zZXEsXG4gICAgICAgICAgbGltaXQ6IGJhdGNoX3NpemUsXG4gICAgICAgICAgYmF0Y2hfc2l6ZTogYmF0Y2hfc2l6ZSxcbiAgICAgICAgICBzdHlsZTogJ2FsbF9kb2NzJyxcbiAgICAgICAgICBkb2NfaWRzOiBkb2NfaWRzLFxuICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICByZXR1cm5fZG9jczogdHJ1ZSAvLyByZXF1aXJlZCBzbyB3ZSBrbm93IHdoZW4gd2UncmUgZG9uZVxuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0cy5maWx0ZXIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuZmlsdGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gcmVxdWlyZWQgZm9yIHRoZSBjbGllbnQtc2lkZSBmaWx0ZXIgaW4gb25DaGFuZ2VcbiAgICAgICAgICAgIGNoYW5nZXNPcHRzLmluY2x1ZGVfZG9jcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gZGRvYyBmaWx0ZXJcbiAgICAgICAgICAgIGNoYW5nZXNPcHRzLmZpbHRlciA9IG9wdHMuZmlsdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2hlYXJ0YmVhdCcgaW4gb3B0cykge1xuICAgICAgICAgIGNoYW5nZXNPcHRzLmhlYXJ0YmVhdCA9IG9wdHMuaGVhcnRiZWF0O1xuICAgICAgICB9XG4gICAgICAgIGlmICgndGltZW91dCcgaW4gb3B0cykge1xuICAgICAgICAgIGNoYW5nZXNPcHRzLnRpbWVvdXQgPSBvcHRzLnRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMucXVlcnlfcGFyYW1zKSB7XG4gICAgICAgICAgY2hhbmdlc09wdHMucXVlcnlfcGFyYW1zID0gb3B0cy5xdWVyeV9wYXJhbXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMudmlldykge1xuICAgICAgICAgIGNoYW5nZXNPcHRzLnZpZXcgPSBvcHRzLnZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgYWJvcnRSZXBsaWNhdGlvbignZ2V0Q2hlY2twb2ludCByZWplY3RlZCB3aXRoICcsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiBvbkNoZWNrcG9pbnRFcnJvcihlcnIpIHtcbiAgICB3cml0aW5nQ2hlY2twb2ludCA9IGZhbHNlO1xuICAgIGFib3J0UmVwbGljYXRpb24oJ3dyaXRlQ2hlY2twb2ludCBjb21wbGV0ZWQgd2l0aCBlcnJvcicsIGVycik7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHJldHVyblZhbHVlLmNhbmNlbGxlZCkgeyAvLyBjYW5jZWxsZWQgaW1tZWRpYXRlbHlcbiAgICBjb21wbGV0ZVJlcGxpY2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFyZXR1cm5WYWx1ZS5fYWRkZWRMaXN0ZW5lcnMpIHtcbiAgICByZXR1cm5WYWx1ZS5vbmNlKCdjYW5jZWwnLCBjb21wbGV0ZVJlcGxpY2F0aW9uKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0cy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuVmFsdWUub25jZSgnZXJyb3InLCBvcHRzLmNvbXBsZXRlKTtcbiAgICAgIHJldHVyblZhbHVlLm9uY2UoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvcHRzLmNvbXBsZXRlKG51bGwsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuVmFsdWUuX2FkZGVkTGlzdGVuZXJzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0cy5zaW5jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGFydENoYW5nZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBpbml0Q2hlY2twb2ludGVyKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB3cml0aW5nQ2hlY2twb2ludCA9IHRydWU7XG4gICAgICByZXR1cm4gY2hlY2twb2ludGVyLndyaXRlQ2hlY2twb2ludChvcHRzLnNpbmNlLCBzZXNzaW9uKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHdyaXRpbmdDaGVja3BvaW50ID0gZmFsc2U7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsYXN0X3NlcSA9IG9wdHMuc2luY2U7XG4gICAgICBzdGFydENoYW5nZXMoKTtcbiAgICB9KS5jYXRjaChvbkNoZWNrcG9pbnRFcnJvcik7XG4gIH1cbn1cblxuLy8gV2UgY3JlYXRlIGEgYmFzaWMgcHJvbWlzZSBzbyB0aGUgY2FsbGVyIGNhbiBjYW5jZWwgdGhlIHJlcGxpY2F0aW9uIHBvc3NpYmx5XG4vLyBiZWZvcmUgd2UgaGF2ZSBhY3R1YWxseSBzdGFydGVkIGxpc3RlbmluZyB0byBjaGFuZ2VzIGV0Y1xuaW5oZXJpdHMoUmVwbGljYXRpb24sIEVFKTtcbmZ1bmN0aW9uIFJlcGxpY2F0aW9uKCkge1xuICBFRS5jYWxsKHRoaXMpO1xuICB0aGlzLmNhbmNlbGxlZCA9IGZhbHNlO1xuICB0aGlzLnN0YXRlID0gJ3BlbmRpbmcnO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuICAgIHNlbGYub25jZSgnY29tcGxldGUnLCBmdWxmaWxsKTtcbiAgICBzZWxmLm9uY2UoJ2Vycm9yJywgcmVqZWN0KTtcbiAgfSk7XG4gIHNlbGYudGhlbiA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gIH07XG4gIHNlbGYuY2F0Y2ggPSBmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgcmV0dXJuIHByb21pc2UuY2F0Y2gocmVqZWN0KTtcbiAgfTtcbiAgLy8gQXMgd2UgYWxsb3cgZXJyb3IgaGFuZGxpbmcgdmlhIFwiZXJyb3JcIiBldmVudCBhcyB3ZWxsLFxuICAvLyBwdXQgYSBzdHViIGluIGhlcmUgc28gdGhhdCByZWplY3RpbmcgbmV2ZXIgdGhyb3dzIFVuaGFuZGxlZEVycm9yLlxuICBzZWxmLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuUmVwbGljYXRpb24ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICB0aGlzLnN0YXRlID0gJ2NhbmNlbGxlZCc7XG4gIHRoaXMuZW1pdCgnY2FuY2VsJyk7XG59O1xuXG5SZXBsaWNhdGlvbi5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiAoc3JjLCB0YXJnZXQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoc2VsZi5fcmVhZHlDYWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2VsZi5fcmVhZHlDYWxsZWQgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICBzZWxmLmNhbmNlbCgpO1xuICB9XG4gIHNyYy5vbmNlKCdkZXN0cm95ZWQnLCBvbkRlc3Ryb3kpO1xuICB0YXJnZXQub25jZSgnZGVzdHJveWVkJywgb25EZXN0cm95KTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveSk7XG4gICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKCdkZXN0cm95ZWQnLCBvbkRlc3Ryb3kpO1xuICB9XG4gIHNlbGYub25jZSgnY29tcGxldGUnLCBjbGVhbnVwKTtcbn07XG5cbmZ1bmN0aW9uIHRvUG91Y2goZGIsIG9wdHMpIHtcbiAgdmFyIFBvdWNoQ29uc3RydWN0b3IgPSBvcHRzLlBvdWNoQ29uc3RydWN0b3I7XG4gIGlmICh0eXBlb2YgZGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBQb3VjaENvbnN0cnVjdG9yKGRiLCBvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGljYXRlV3JhcHBlcihzcmMsIHRhcmdldCwgb3B0cywgY2FsbGJhY2spIHtcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICBpZiAob3B0cy5kb2NfaWRzICYmICFBcnJheS5pc0FycmF5KG9wdHMuZG9jX2lkcykpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihCQURfUkVRVUVTVCxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJgZG9jX2lkc2AgZmlsdGVyIHBhcmFtZXRlciBpcyBub3QgYSBsaXN0LlwiKTtcbiAgfVxuXG4gIG9wdHMuY29tcGxldGUgPSBjYWxsYmFjaztcbiAgb3B0cyA9IGNsb25lKG9wdHMpO1xuICBvcHRzLmNvbnRpbnVvdXMgPSBvcHRzLmNvbnRpbnVvdXMgfHwgb3B0cy5saXZlO1xuICBvcHRzLnJldHJ5ID0gKCdyZXRyeScgaW4gb3B0cykgPyBvcHRzLnJldHJ5IDogZmFsc2U7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIG9wdHMuUG91Y2hDb25zdHJ1Y3RvciA9IG9wdHMuUG91Y2hDb25zdHJ1Y3RvciB8fCB0aGlzO1xuICB2YXIgcmVwbGljYXRlUmV0ID0gbmV3IFJlcGxpY2F0aW9uKG9wdHMpO1xuICB2YXIgc3JjUG91Y2ggPSB0b1BvdWNoKHNyYywgb3B0cyk7XG4gIHZhciB0YXJnZXRQb3VjaCA9IHRvUG91Y2godGFyZ2V0LCBvcHRzKTtcbiAgcmVwbGljYXRlKHNyY1BvdWNoLCB0YXJnZXRQb3VjaCwgb3B0cywgcmVwbGljYXRlUmV0KTtcbiAgcmV0dXJuIHJlcGxpY2F0ZVJldDtcbn1cblxuaW5oZXJpdHMoU3luYywgRUUpO1xuZnVuY3Rpb24gc3luYyhzcmMsIHRhcmdldCwgb3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBpZiAodHlwZW9mIG9wdHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIG9wdHMgPSBjbG9uZShvcHRzKTtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgb3B0cy5Qb3VjaENvbnN0cnVjdG9yID0gb3B0cy5Qb3VjaENvbnN0cnVjdG9yIHx8IHRoaXM7XG4gIHNyYyA9IHRvUG91Y2goc3JjLCBvcHRzKTtcbiAgdGFyZ2V0ID0gdG9Qb3VjaCh0YXJnZXQsIG9wdHMpO1xuICByZXR1cm4gbmV3IFN5bmMoc3JjLCB0YXJnZXQsIG9wdHMsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gU3luYyhzcmMsIHRhcmdldCwgb3B0cywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLmNhbmNlbGVkID0gZmFsc2U7XG5cbiAgdmFyIG9wdHNQdXNoID0gb3B0cy5wdXNoID8gJGluamVjdF9PYmplY3RfYXNzaWduKHt9LCBvcHRzLCBvcHRzLnB1c2gpIDogb3B0cztcbiAgdmFyIG9wdHNQdWxsID0gb3B0cy5wdWxsID8gJGluamVjdF9PYmplY3RfYXNzaWduKHt9LCBvcHRzLCBvcHRzLnB1bGwpIDogb3B0cztcblxuICB0aGlzLnB1c2ggPSByZXBsaWNhdGVXcmFwcGVyKHNyYywgdGFyZ2V0LCBvcHRzUHVzaCk7XG4gIHRoaXMucHVsbCA9IHJlcGxpY2F0ZVdyYXBwZXIodGFyZ2V0LCBzcmMsIG9wdHNQdWxsKTtcblxuICB0aGlzLnB1c2hQYXVzZWQgPSB0cnVlO1xuICB0aGlzLnB1bGxQYXVzZWQgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIHB1bGxDaGFuZ2UoY2hhbmdlKSB7XG4gICAgc2VsZi5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICBkaXJlY3Rpb246ICdwdWxsJyxcbiAgICAgIGNoYW5nZTogY2hhbmdlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaENoYW5nZShjaGFuZ2UpIHtcbiAgICBzZWxmLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgIGRpcmVjdGlvbjogJ3B1c2gnLFxuICAgICAgY2hhbmdlOiBjaGFuZ2VcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoRGVuaWVkKGRvYykge1xuICAgIHNlbGYuZW1pdCgnZGVuaWVkJywge1xuICAgICAgZGlyZWN0aW9uOiAncHVzaCcsXG4gICAgICBkb2M6IGRvY1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHB1bGxEZW5pZWQoZG9jKSB7XG4gICAgc2VsZi5lbWl0KCdkZW5pZWQnLCB7XG4gICAgICBkaXJlY3Rpb246ICdwdWxsJyxcbiAgICAgIGRvYzogZG9jXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFBhdXNlZCgpIHtcbiAgICBzZWxmLnB1c2hQYXVzZWQgPSB0cnVlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChzZWxmLnB1bGxQYXVzZWQpIHtcbiAgICAgIHNlbGYuZW1pdCgncGF1c2VkJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHB1bGxQYXVzZWQoKSB7XG4gICAgc2VsZi5wdWxsUGF1c2VkID0gdHJ1ZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoc2VsZi5wdXNoUGF1c2VkKSB7XG4gICAgICBzZWxmLmVtaXQoJ3BhdXNlZCcpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdXNoQWN0aXZlKCkge1xuICAgIHNlbGYucHVzaFBhdXNlZCA9IGZhbHNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChzZWxmLnB1bGxQYXVzZWQpIHtcbiAgICAgIHNlbGYuZW1pdCgnYWN0aXZlJywge1xuICAgICAgICBkaXJlY3Rpb246ICdwdXNoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHB1bGxBY3RpdmUoKSB7XG4gICAgc2VsZi5wdWxsUGF1c2VkID0gZmFsc2U7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHNlbGYucHVzaFBhdXNlZCkge1xuICAgICAgc2VsZi5lbWl0KCdhY3RpdmUnLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ3B1bGwnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVtb3ZlZCA9IHt9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbCh0eXBlKSB7IC8vIHR5cGUgaXMgJ3B1c2gnIG9yICdwdWxsJ1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHZhciBpc0NoYW5nZSA9IGV2ZW50ID09PSAnY2hhbmdlJyAmJlxuICAgICAgICAoZnVuYyA9PT0gcHVsbENoYW5nZSB8fCBmdW5jID09PSBwdXNoQ2hhbmdlKTtcbiAgICAgIHZhciBpc0RlbmllZCA9IGV2ZW50ID09PSAnZGVuaWVkJyAmJlxuICAgICAgICAoZnVuYyA9PT0gcHVsbERlbmllZCB8fCBmdW5jID09PSBwdXNoRGVuaWVkKTtcbiAgICAgIHZhciBpc1BhdXNlZCA9IGV2ZW50ID09PSAncGF1c2VkJyAmJlxuICAgICAgICAoZnVuYyA9PT0gcHVsbFBhdXNlZCB8fCBmdW5jID09PSBwdXNoUGF1c2VkKTtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IGV2ZW50ID09PSAnYWN0aXZlJyAmJlxuICAgICAgICAoZnVuYyA9PT0gcHVsbEFjdGl2ZSB8fCBmdW5jID09PSBwdXNoQWN0aXZlKTtcblxuICAgICAgaWYgKGlzQ2hhbmdlIHx8IGlzRGVuaWVkIHx8IGlzUGF1c2VkIHx8IGlzQWN0aXZlKSB7XG4gICAgICAgIGlmICghKGV2ZW50IGluIHJlbW92ZWQpKSB7XG4gICAgICAgICAgcmVtb3ZlZFtldmVudF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVkW2V2ZW50XVt0eXBlXSA9IHRydWU7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhyZW1vdmVkW2V2ZW50XSkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgLy8gYm90aCBwdXNoIGFuZCBwdWxsIGhhdmUgYXNrZWQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgIHNlbGYucmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAob3B0cy5saXZlKSB7XG4gICAgdGhpcy5wdXNoLm9uKCdjb21wbGV0ZScsIHNlbGYucHVsbC5jYW5jZWwuYmluZChzZWxmLnB1bGwpKTtcbiAgICB0aGlzLnB1bGwub24oJ2NvbXBsZXRlJywgc2VsZi5wdXNoLmNhbmNlbC5iaW5kKHNlbGYucHVzaCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkT25lTGlzdGVuZXIoZWUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmIChlZS5saXN0ZW5lcnMoZXZlbnQpLmluZGV4T2YobGlzdGVuZXIpID09IC0xKSB7XG4gICAgICBlZS5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMub24oJ25ld0xpc3RlbmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ID09PSAnY2hhbmdlJykge1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdWxsLCAnY2hhbmdlJywgcHVsbENoYW5nZSk7XG4gICAgICBhZGRPbmVMaXN0ZW5lcihzZWxmLnB1c2gsICdjaGFuZ2UnLCBwdXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZGVuaWVkJykge1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdWxsLCAnZGVuaWVkJywgcHVsbERlbmllZCk7XG4gICAgICBhZGRPbmVMaXN0ZW5lcihzZWxmLnB1c2gsICdkZW5pZWQnLCBwdXNoRGVuaWVkKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnYWN0aXZlJykge1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdWxsLCAnYWN0aXZlJywgcHVsbEFjdGl2ZSk7XG4gICAgICBhZGRPbmVMaXN0ZW5lcihzZWxmLnB1c2gsICdhY3RpdmUnLCBwdXNoQWN0aXZlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncGF1c2VkJykge1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdWxsLCAncGF1c2VkJywgcHVsbFBhdXNlZCk7XG4gICAgICBhZGRPbmVMaXN0ZW5lcihzZWxmLnB1c2gsICdwYXVzZWQnLCBwdXNoUGF1c2VkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMub24oJ3JlbW92ZUxpc3RlbmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ID09PSAnY2hhbmdlJykge1xuICAgICAgc2VsZi5wdWxsLnJlbW92ZUxpc3RlbmVyKCdjaGFuZ2UnLCBwdWxsQ2hhbmdlKTtcbiAgICAgIHNlbGYucHVzaC5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgcHVzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2RlbmllZCcpIHtcbiAgICAgIHNlbGYucHVsbC5yZW1vdmVMaXN0ZW5lcignZGVuaWVkJywgcHVsbERlbmllZCk7XG4gICAgICBzZWxmLnB1c2gucmVtb3ZlTGlzdGVuZXIoJ2RlbmllZCcsIHB1c2hEZW5pZWQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdhY3RpdmUnKSB7XG4gICAgICBzZWxmLnB1bGwucmVtb3ZlTGlzdGVuZXIoJ2FjdGl2ZScsIHB1bGxBY3RpdmUpO1xuICAgICAgc2VsZi5wdXNoLnJlbW92ZUxpc3RlbmVyKCdhY3RpdmUnLCBwdXNoQWN0aXZlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncGF1c2VkJykge1xuICAgICAgc2VsZi5wdWxsLnJlbW92ZUxpc3RlbmVyKCdwYXVzZWQnLCBwdWxsUGF1c2VkKTtcbiAgICAgIHNlbGYucHVzaC5yZW1vdmVMaXN0ZW5lcigncGF1c2VkJywgcHVzaFBhdXNlZCk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLnB1bGwub24oJ3JlbW92ZUxpc3RlbmVyJywgcmVtb3ZlQWxsKCdwdWxsJykpO1xuICB0aGlzLnB1c2gub24oJ3JlbW92ZUxpc3RlbmVyJywgcmVtb3ZlQWxsKCdwdXNoJykpO1xuXG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgIHRoaXMucHVzaCxcbiAgICB0aGlzLnB1bGxcbiAgXSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgIHZhciBvdXQgPSB7XG4gICAgICBwdXNoOiByZXNwWzBdLFxuICAgICAgcHVsbDogcmVzcFsxXVxuICAgIH07XG4gICAgc2VsZi5lbWl0KCdjb21wbGV0ZScsIG91dCk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBvdXQpO1xuICAgIH1cbiAgICBzZWxmLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBvdXQ7XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLmNhbmNlbCgpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGNhbGxiYWNrLCB0aGVuIHRoZSBjYWxsYmFjayBjYW4gcmVjZWl2ZVxuICAgICAgLy8gdGhlIGVycm9yIGV2ZW50XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIGNhbGxiYWNrLCB0aGVuIHdlJ3JlIHNhZmUgdG8gZW1pdCBhbiBlcnJvclxuICAgICAgLy8gZXZlbnQsIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyBhbiB1bmhhbmRsZWQgZXJyb3JcbiAgICAgIC8vIGR1ZSB0byAnZXJyb3InIGJlaW5nIGEgc3BlY2lhbCBldmVudCBpbiBFdmVudEVtaXR0ZXJzXG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICB9XG4gICAgc2VsZi5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vIG5vIHNlbnNlIHRocm93aW5nIGlmIHdlJ3JlIGFscmVhZHkgZW1pdHRpbmcgYW4gJ2Vycm9yJyBldmVudFxuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy50aGVuID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGVycikge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oc3VjY2VzcywgZXJyKTtcbiAgfTtcblxuICB0aGlzLmNhdGNoID0gZnVuY3Rpb24gKGVycikge1xuICAgIHJldHVybiBwcm9taXNlLmNhdGNoKGVycik7XG4gIH07XG59XG5cblN5bmMucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNhbmNlbGVkKSB7XG4gICAgdGhpcy5jYW5jZWxlZCA9IHRydWU7XG4gICAgdGhpcy5wdXNoLmNhbmNlbCgpO1xuICAgIHRoaXMucHVsbC5jYW5jZWwoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVwbGljYXRpb24oUG91Y2hEQikge1xuICBQb3VjaERCLnJlcGxpY2F0ZSA9IHJlcGxpY2F0ZVdyYXBwZXI7XG4gIFBvdWNoREIuc3luYyA9IHN5bmM7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBvdWNoREIucHJvdG90eXBlLCAncmVwbGljYXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlcGxpY2F0ZU1ldGhvZHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucmVwbGljYXRlTWV0aG9kcyA9IHtcbiAgICAgICAgICBmcm9tOiBmdW5jdGlvbiAob3RoZXIsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25zdHJ1Y3Rvci5yZXBsaWNhdGUob3RoZXIsIHNlbGYsIG9wdHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvOiBmdW5jdGlvbiAob3RoZXIsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25zdHJ1Y3Rvci5yZXBsaWNhdGUoc2VsZiwgb3RoZXIsIG9wdHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZXBsaWNhdGVNZXRob2RzO1xuICAgIH1cbiAgfSk7XG5cbiAgUG91Y2hEQi5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uIChkYk5hbWUsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iuc3luYyh0aGlzLCBkYk5hbWUsIG9wdHMsIGNhbGxiYWNrKTtcbiAgfTtcbn1cblxuUG91Y2hEQi5wbHVnaW4oSURCUG91Y2gpXG4gIC5wbHVnaW4oSHR0cFBvdWNoJDEpXG4gIC5wbHVnaW4obWFwcmVkdWNlKVxuICAucGx1Z2luKHJlcGxpY2F0aW9uKTtcblxuLy8gUHVsbCBmcm9tIHNyYyBiZWNhdXNlIHBvdWNoZGItbm9kZS9wb3VjaGRiLWJyb3dzZXIgdGhlbXNlbHZlc1xuXG5leHBvcnQgZGVmYXVsdCBQb3VjaERCO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7IC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuXG4gIHJldHVybiAoYnRoW2J1ZltpICsgMF1dICsgYnRoW2J1ZltpICsgMV1dICsgYnRoW2J1ZltpICsgMl1dICsgYnRoW2J1ZltpICsgM11dICsgJy0nICsgYnRoW2J1ZltpICsgNF1dICsgYnRoW2J1ZltpICsgNV1dICsgJy0nICsgYnRoW2J1ZltpICsgNl1dICsgYnRoW2J1ZltpICsgN11dICsgJy0nICsgYnRoW2J1ZltpICsgOF1dICsgYnRoW2J1ZltpICsgOV1dICsgJy0nICsgYnRoW2J1ZltpICsgMTBdXSArIGJ0aFtidWZbaSArIDExXV0gKyBidGhbYnVmW2kgKyAxMl1dICsgYnRoW2J1ZltpICsgMTNdXSArIGJ0aFtidWZbaSArIDE0XV0gKyBidGhbYnVmW2kgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBieXRlc1RvVXVpZDsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZC5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnO1xuXG5mdW5jdGlvbiB1dWlkVG9CeXRlcyh1dWlkKSB7XG4gIC8vIE5vdGU6IFdlIGFzc3VtZSB3ZSdyZSBiZWluZyBwYXNzZWQgYSB2YWxpZCB1dWlkIHN0cmluZ1xuICB2YXIgYnl0ZXMgPSBbXTtcbiAgdXVpZC5yZXBsYWNlKC9bYS1mQS1GMC05XXsyfS9nLCBmdW5jdGlvbiAoaGV4KSB7XG4gICAgYnl0ZXMucHVzaChwYXJzZUludChoZXgsIDE2KSk7XG4gIH0pO1xuICByZXR1cm4gYnl0ZXM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgb2ZmID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykgbmFtZXNwYWNlID0gdXVpZFRvQnl0ZXMobmFtZXNwYWNlKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBhbiBhcnJheSBvZiBieXRlcycpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShuYW1lc3BhY2UpIHx8IG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ25hbWVzcGFjZSBtdXN0IGJlIHV1aWQgc3RyaW5nIG9yIGFuIEFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzJyk7XG4gICAgfSAvLyBQZXIgNC4zXG5cblxuICAgIHZhciBieXRlcyA9IGhhc2hmdW5jKG5hbWVzcGFjZS5jb25jYXQodmFsdWUpKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgMTY7ICsraWR4KSB7XG4gICAgICAgIGJ1ZltvZmYgKyBpZHhdID0gYnl0ZXNbaWR4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IFVpbnQ4QXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgdmFyIHN0YXJ0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltzdGFydCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1EXG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHdpdGggc3VwcG9ydCBmb3Igd2ViIHdvcmtlcnMpXG4gICAgICAgIHZhciBnbG9iO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iID0gd2luZG93O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBnbG9iID0gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsb2IuU3BhcmtNRDUgPSBmYWN0b3J5KCk7XG4gICAgfVxufShmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKlxuICAgICAqIEZhc3Rlc3QgbWQ1IGltcGxlbWVudGF0aW9uIGFyb3VuZCAoSktNIG1kNSkuXG4gICAgICogQ3JlZGl0czogSm9zZXBoIE15ZXJzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHA6Ly93d3cubXllcnNkYWlseS5vcmcvam9zZXBoL2phdmFzY3JpcHQvbWQ1LXRleHQuaHRtbFxuICAgICAqIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vbWQ1LXNob290b3V0LzdcbiAgICAgKi9cblxuICAgIC8qIHRoaXMgZnVuY3Rpb24gaXMgbXVjaCBmYXN0ZXIsXG4gICAgICBzbyBpZiBwb3NzaWJsZSB3ZSB1c2UgaXQuIFNvbWUgSUVzXG4gICAgICBhcmUgdGhlIG9ubHkgb25lcyBJIGtub3cgb2YgdGhhdFxuICAgICAgbmVlZCB0aGUgaWRpb3RpYyBzZWNvbmQgZnVuY3Rpb24sXG4gICAgICBnZW5lcmF0ZWQgYnkgYW4gaWYgY2xhdXNlLiAgKi9cbiAgICB2YXIgYWRkMzIgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGEgKyBiKSAmIDB4RkZGRkZGRkY7XG4gICAgfSxcbiAgICAgICAgaGV4X2NociA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xuXG5cbiAgICBmdW5jdGlvbiBjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICAgICAgICBhID0gYWRkMzIoYWRkMzIoYSwgcSksIGFkZDMyKHgsIHQpKTtcbiAgICAgICAgcmV0dXJuIGFkZDMyKChhIDw8IHMpIHwgKGEgPj4+ICgzMiAtIHMpKSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWQ1Y3ljbGUoeCwgaykge1xuICAgICAgICB2YXIgYSA9IHhbMF0sXG4gICAgICAgICAgICBiID0geFsxXSxcbiAgICAgICAgICAgIGMgPSB4WzJdLFxuICAgICAgICAgICAgZCA9IHhbM107XG5cbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1swXSAtIDY4MDg3NjkzNiB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzFdIC0gMzg5NTY0NTg2IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzJdICsgNjA2MTA1ODE5IHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzNdIC0gMTA0NDUyNTMzMCB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s0XSAtIDE3NjQxODg5NyB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzVdICsgMTIwMDA4MDQyNiB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1s2XSAtIDE0NzMyMzEzNDEgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbN10gLSA0NTcwNTk4MyB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s4XSArIDE3NzAwMzU0MTYgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s5XSAtIDE5NTg0MTQ0MTcgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTBdIC0gNDIwNjMgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTFdIC0gMTk5MDQwNDE2MiB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1sxMl0gKyAxODA0NjAzNjgyIHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbMTNdIC0gNDAzNDExMDEgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTRdIC0gMTUwMjAwMjI5MCB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1sxNV0gKyAxMjM2NTM1MzI5IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xuXG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMV0gLSAxNjU3OTY1MTAgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxMV0gKyA2NDM3MTc3MTMgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMF0gLSAzNzM4OTczMDIgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxMF0gKyAzODAxNjA4MyB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzE1XSAtIDY2MDQ3ODMzNSB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiAmIGQgfCBjICYgfmQpICsga1s5XSArIDU2ODQ0NjQzOCB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzE0XSAtIDEwMTk4MDM2OTAgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s4XSArIDExNjM1MzE1MDEgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbMTNdIC0gMTQ0NDY4MTQ2NyB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1s3XSArIDE3MzUzMjg0NzMgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbMTJdIC0gMTkyNjYwNzczNCB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcblxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s1XSAtIDM3ODU1OCB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s4XSAtIDIwMjI1NzQ0NjMgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzExXSArIDE4MzkwMzA1NjIgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzE0XSAtIDM1MzA5NTU2IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzFdIC0gMTUzMDk5MjA2MCB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1s0XSArIDEyNzI4OTMzNTMgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzddIC0gMTU1NDk3NjMyIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxMF0gLSAxMDk0NzMwNjQwIHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzEzXSArIDY4MTI3OTE3NCB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1swXSAtIDM1ODUzNzIyMiB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbM10gLSA3MjI1MjE5NzkgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzZdICsgNzYwMjkxODkgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbOV0gLSA2NDAzNjQ0ODcgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMTJdIC0gNDIxODE1ODM1IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxNV0gKyA1MzA3NDI1MjAgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzJdIC0gOTk1MzM4NjUxIHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XG5cbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMF0gLSAxOTg2MzA4NDQgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbN10gKyAxMTI2ODkxNDE1IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxNF0gLSAxNDE2MzU0OTA1IHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s1XSAtIDU3NDM0MDU1IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMSB8YiA+Pj4gMTEpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzEyXSArIDE3MDA0ODU1NzEgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbM10gLSAxODk0OTg2NjA2IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxMF0gLSAxMDUxNTIzIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxXSAtIDIwNTQ5MjI3OTkgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIxIHxiID4+PiAxMSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbOF0gKyAxODczMzEzMzU5IHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzE1XSAtIDMwNjExNzQ0IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzEzXSArIDEzMDkxNTE2NDkgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIxIHxiID4+PiAxMSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbNF0gLSAxNDU1MjMwNzAgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGtbMTFdIC0gMTEyMDIxMDM3OSB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMl0gKyA3MTg3ODcyNTkgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzldIC0gMzQzNDg1NTUxIHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xuXG4gICAgICAgIHhbMF0gPSBhICsgeFswXSB8IDA7XG4gICAgICAgIHhbMV0gPSBiICsgeFsxXSB8IDA7XG4gICAgICAgIHhbMl0gPSBjICsgeFsyXSB8IDA7XG4gICAgICAgIHhbM10gPSBkICsgeFszXSB8IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWQ1YmxrKHMpIHtcbiAgICAgICAgdmFyIG1kNWJsa3MgPSBbXSxcbiAgICAgICAgICAgIGk7IC8qIEFuZHkgS2luZyBzYWlkIGRvIGl0IHRoaXMgd2F5LiAqL1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA2NDsgaSArPSA0KSB7XG4gICAgICAgICAgICBtZDVibGtzW2kgPj4gMl0gPSBzLmNoYXJDb2RlQXQoaSkgKyAocy5jaGFyQ29kZUF0KGkgKyAxKSA8PCA4KSArIChzLmNoYXJDb2RlQXQoaSArIDIpIDw8IDE2KSArIChzLmNoYXJDb2RlQXQoaSArIDMpIDw8IDI0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWQ1YmxrcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZDVibGtfYXJyYXkoYSkge1xuICAgICAgICB2YXIgbWQ1YmxrcyA9IFtdLFxuICAgICAgICAgICAgaTsgLyogQW5keSBLaW5nIHNhaWQgZG8gaXQgdGhpcyB3YXkuICovXG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDY0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG1kNWJsa3NbaSA+PiAyXSA9IGFbaV0gKyAoYVtpICsgMV0gPDwgOCkgKyAoYVtpICsgMl0gPDwgMTYpICsgKGFbaSArIDNdIDw8IDI0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWQ1YmxrcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZDUxKHMpIHtcbiAgICAgICAgdmFyIG4gPSBzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXRlID0gWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHRhaWwsXG4gICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICBsbyxcbiAgICAgICAgICAgIGhpO1xuXG4gICAgICAgIGZvciAoaSA9IDY0OyBpIDw9IG47IGkgKz0gNjQpIHtcbiAgICAgICAgICAgIG1kNWN5Y2xlKHN0YXRlLCBtZDVibGsocy5zdWJzdHJpbmcoaSAtIDY0LCBpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHMgPSBzLnN1YnN0cmluZyhpIC0gNjQpO1xuICAgICAgICBsZW5ndGggPSBzLmxlbmd0aDtcbiAgICAgICAgdGFpbCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0YWlsW2kgPj4gMl0gfD0gcy5jaGFyQ29kZUF0KGkpIDw8ICgoaSAlIDQpIDw8IDMpO1xuICAgICAgICB9XG4gICAgICAgIHRhaWxbaSA+PiAyXSB8PSAweDgwIDw8ICgoaSAlIDQpIDw8IDMpO1xuICAgICAgICBpZiAoaSA+IDU1KSB7XG4gICAgICAgICAgICBtZDVjeWNsZShzdGF0ZSwgdGFpbCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRhaWxbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmV3YXJlIHRoYXQgdGhlIGZpbmFsIGxlbmd0aCBtaWdodCBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcbiAgICAgICAgdG1wID0gbiAqIDg7XG4gICAgICAgIHRtcCA9IHRtcC50b1N0cmluZygxNikubWF0Y2goLyguKj8pKC57MCw4fSkkLyk7XG4gICAgICAgIGxvID0gcGFyc2VJbnQodG1wWzJdLCAxNik7XG4gICAgICAgIGhpID0gcGFyc2VJbnQodG1wWzFdLCAxNikgfHwgMDtcblxuICAgICAgICB0YWlsWzE0XSA9IGxvO1xuICAgICAgICB0YWlsWzE1XSA9IGhpO1xuXG4gICAgICAgIG1kNWN5Y2xlKHN0YXRlLCB0YWlsKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1kNTFfYXJyYXkoYSkge1xuICAgICAgICB2YXIgbiA9IGEubGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGUgPSBbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF0sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgdGFpbCxcbiAgICAgICAgICAgIHRtcCxcbiAgICAgICAgICAgIGxvLFxuICAgICAgICAgICAgaGk7XG5cbiAgICAgICAgZm9yIChpID0gNjQ7IGkgPD0gbjsgaSArPSA2NCkge1xuICAgICAgICAgICAgbWQ1Y3ljbGUoc3RhdGUsIG1kNWJsa19hcnJheShhLnN1YmFycmF5KGkgLSA2NCwgaSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdCBzdXJlIGlmIGl0IGlzIGEgYnVnLCBob3dldmVyIElFMTAgd2lsbCBhbHdheXMgcHJvZHVjZSBhIHN1YiBhcnJheSBvZiBsZW5ndGggMVxuICAgICAgICAvLyBjb250YWluaW5nIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIHBhcmVudCBhcnJheSBpZiB0aGUgc3ViIGFycmF5IHNwZWNpZmllZCBzdGFydHNcbiAgICAgICAgLy8gYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHBhcmVudCBhcnJheSAtIHdlaXJkLlxuICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzc3MTQ1Mi90eXBlZC1hcnJheS1zdWJhcnJheS1pc3N1ZVxuICAgICAgICBhID0gKGkgLSA2NCkgPCBuID8gYS5zdWJhcnJheShpIC0gNjQpIDogbmV3IFVpbnQ4QXJyYXkoMCk7XG5cbiAgICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICAgIHRhaWwgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGFpbFtpID4+IDJdIHw9IGFbaV0gPDwgKChpICUgNCkgPDwgMyk7XG4gICAgICAgIH1cblxuICAgICAgICB0YWlsW2kgPj4gMl0gfD0gMHg4MCA8PCAoKGkgJSA0KSA8PCAzKTtcbiAgICAgICAgaWYgKGkgPiA1NSkge1xuICAgICAgICAgICAgbWQ1Y3ljbGUoc3RhdGUsIHRhaWwpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0YWlsW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWlnaHQgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XG4gICAgICAgIHRtcCA9IG4gKiA4O1xuICAgICAgICB0bXAgPSB0bXAudG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xuICAgICAgICBsbyA9IHBhcnNlSW50KHRtcFsyXSwgMTYpO1xuICAgICAgICBoaSA9IHBhcnNlSW50KHRtcFsxXSwgMTYpIHx8IDA7XG5cbiAgICAgICAgdGFpbFsxNF0gPSBsbztcbiAgICAgICAgdGFpbFsxNV0gPSBoaTtcblxuICAgICAgICBtZDVjeWNsZShzdGF0ZSwgdGFpbCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJoZXgobikge1xuICAgICAgICB2YXIgcyA9ICcnLFxuICAgICAgICAgICAgajtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IDQ7IGogKz0gMSkge1xuICAgICAgICAgICAgcyArPSBoZXhfY2hyWyhuID4+IChqICogOCArIDQpKSAmIDB4MEZdICsgaGV4X2NoclsobiA+PiAoaiAqIDgpKSAmIDB4MEZdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhleCh4KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgeFtpXSA9IHJoZXgoeFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHguam9pbignJyk7XG4gICAgfVxuXG4gICAgLy8gSW4gc29tZSBjYXNlcyB0aGUgZmFzdCBhZGQzMiBmdW5jdGlvbiBjYW5ub3QgYmUgdXNlZC4uXG4gICAgaWYgKGhleChtZDUxKCdoZWxsbycpKSAhPT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xuICAgICAgICBhZGQzMiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpLFxuICAgICAgICAgICAgICAgIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBBcnJheUJ1ZmZlciBzbGljZSBwb2x5ZmlsbC5cbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R0YXViZXJ0L25vZGUtYXJyYXlidWZmZXItc2xpY2VcbiAgICAgKi9cblxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmICFBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYW1wKHZhbCwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gKHZhbCB8IDApIHx8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodmFsICsgbGVuZ3RoLCAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5taW4odmFsLCBsZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbiA9IGNsYW1wKGZyb20sIGxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgbnVtLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VBcnJheTtcblxuICAgICAgICAgICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGNsYW1wKHRvLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChiZWdpbiA+IGVuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bSA9IGVuZCAtIGJlZ2luO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBcnJheUJ1ZmZlcihudW0pO1xuICAgICAgICAgICAgICAgIHRhcmdldEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHNvdXJjZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGhpcywgYmVnaW4sIG51bSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkuc2V0KHNvdXJjZUFycmF5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogSGVscGVycy5cbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIHRvVXRmOChzdHIpIHtcbiAgICAgICAgaWYgKC9bXFx1MDA4MC1cXHVGRkZGXS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHV0ZjhTdHIyQXJyYXlCdWZmZXIoc3RyLCByZXR1cm5VSW50OEFycmF5KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoLFxuICAgICAgICAgICBidWZmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCksXG4gICAgICAgICAgIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpLFxuICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYXJyW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVUludDhBcnJheSA/IGFyciA6IGJ1ZmY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXIyVXRmOFN0cihidWZmKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KGJ1ZmYpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25jYXRlbmF0ZUFycmF5QnVmZmVycyhmaXJzdCwgc2Vjb25kLCByZXR1cm5VSW50OEFycmF5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShmaXJzdC5ieXRlTGVuZ3RoICsgc2Vjb25kLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgIHJlc3VsdC5zZXQobmV3IFVpbnQ4QXJyYXkoZmlyc3QpKTtcbiAgICAgICAgcmVzdWx0LnNldChuZXcgVWludDhBcnJheShzZWNvbmQpLCBmaXJzdC5ieXRlTGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuVUludDhBcnJheSA/IHJlc3VsdCA6IHJlc3VsdC5idWZmZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGV4VG9CaW5hcnlTdHJpbmcoaGV4KSB7XG4gICAgICAgIHZhciBieXRlcyA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gaGV4Lmxlbmd0aCxcbiAgICAgICAgICAgIHg7XG5cbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IGxlbmd0aCAtIDE7IHggKz0gMikge1xuICAgICAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKHgsIDIpLCAxNikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBieXRlcyk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBTcGFya01ENSBPT1AgaW1wbGVtZW50YXRpb24uXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBjbGFzcyB0byBwZXJmb3JtIGFuIGluY3JlbWVudGFsIG1kNSwgb3RoZXJ3aXNlIHVzZSB0aGVcbiAgICAgKiBzdGF0aWMgbWV0aG9kcyBpbnN0ZWFkLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gU3BhcmtNRDUoKSB7XG4gICAgICAgIC8vIGNhbGwgcmVzZXQgdG8gaW5pdCB0aGUgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzdHJpbmcuXG4gICAgICogQSBjb252ZXJzaW9uIHdpbGwgYmUgYXBwbGllZCBpZiBhbiB1dGY4IHN0cmluZyBpcyBkZXRlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBiZSBhcHBlbmRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3BhcmtNRDV9IFRoZSBpbnN0YW5jZSBpdHNlbGZcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAvLyBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIHV0ZjggYnl0ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgIC8vIFRoZW4gYXBwZW5kIGFzIGJpbmFyeVxuICAgICAgICB0aGlzLmFwcGVuZEJpbmFyeSh0b1V0Zjgoc3RyKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBiaW5hcnkgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRzIFRoZSBiaW5hcnkgc3RyaW5nIHRvIGJlIGFwcGVuZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTcGFya01ENX0gVGhlIGluc3RhbmNlIGl0c2VsZlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LnByb3RvdHlwZS5hcHBlbmRCaW5hcnkgPSBmdW5jdGlvbiAoY29udGVudHMpIHtcbiAgICAgICAgdGhpcy5fYnVmZiArPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5fbGVuZ3RoICs9IGNvbnRlbnRzLmxlbmd0aDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5fYnVmZi5sZW5ndGgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDY0OyBpIDw9IGxlbmd0aDsgaSArPSA2NCkge1xuICAgICAgICAgICAgbWQ1Y3ljbGUodGhpcy5faGFzaCwgbWQ1YmxrKHRoaXMuX2J1ZmYuc3Vic3RyaW5nKGkgLSA2NCwgaSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmYgPSB0aGlzLl9idWZmLnN1YnN0cmluZyhpIC0gNjQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5pc2hlcyB0aGUgaW5jcmVtZW50YWwgY29tcHV0YXRpb24sIHJlc2V0aW5nIHRoZSBpbnRlcm5hbCBzdGF0ZSBhbmRcbiAgICAgKiByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmF3IFRydWUgdG8gZ2V0IHRoZSByYXcgc3RyaW5nLCBmYWxzZSB0byBnZXQgdGhlIGhleCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdFxuICAgICAqL1xuICAgIFNwYXJrTUQ1LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAocmF3KSB7XG4gICAgICAgIHZhciBidWZmID0gdGhpcy5fYnVmZixcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ1ZmYubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHRhaWwgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICByZXQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0YWlsW2kgPj4gMl0gfD0gYnVmZi5jaGFyQ29kZUF0KGkpIDw8ICgoaSAlIDQpIDw8IDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmluaXNoKHRhaWwsIGxlbmd0aCk7XG4gICAgICAgIHJldCA9IGhleCh0aGlzLl9oYXNoKTtcblxuICAgICAgICBpZiAocmF3KSB7XG4gICAgICAgICAgICByZXQgPSBoZXhUb0JpbmFyeVN0cmluZyhyZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGNvbXB1dGF0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3BhcmtNRDV9IFRoZSBpbnN0YW5jZSBpdHNlbGZcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2J1ZmYgPSAnJztcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5faGFzaCA9IFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGNvbXB1dGF0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgc3RhdGVcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWZmOiB0aGlzLl9idWZmLFxuICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLl9sZW5ndGgsXG4gICAgICAgICAgICBoYXNoOiB0aGlzLl9oYXNoLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGNvbXB1dGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIFRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7U3BhcmtNRDV9IFRoZSBpbnN0YW5jZSBpdHNlbGZcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fYnVmZiA9IHN0YXRlLmJ1ZmY7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5faGFzaCA9IHN0YXRlLmhhc2g7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIG1lbW9yeSB1c2VkIGJ5IHRoZSBpbmNyZW1lbnRhbCBidWZmZXIgYW5kIG90aGVyIGFkZGl0aW9uYWxcbiAgICAgKiByZXNvdXJjZXMuIElmIHlvdSBwbGFuIHRvIHVzZSB0aGUgaW5zdGFuY2UgYWdhaW4sIHVzZSByZXNldCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5faGFzaDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2J1ZmY7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sZW5ndGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmlzaCB0aGUgZmluYWwgY2FsY3VsYXRpb24gYmFzZWQgb24gdGhlIHRhaWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgdGFpbCAgIFRoZSB0YWlsICh3aWxsIGJlIG1vZGlmaWVkKVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgcmVtYWluaW5nIGJ1ZmZlclxuICAgICAqL1xuICAgIFNwYXJrTUQ1LnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24gKHRhaWwsIGxlbmd0aCkge1xuICAgICAgICB2YXIgaSA9IGxlbmd0aCxcbiAgICAgICAgICAgIHRtcCxcbiAgICAgICAgICAgIGxvLFxuICAgICAgICAgICAgaGk7XG5cbiAgICAgICAgdGFpbFtpID4+IDJdIHw9IDB4ODAgPDwgKChpICUgNCkgPDwgMyk7XG4gICAgICAgIGlmIChpID4gNTUpIHtcbiAgICAgICAgICAgIG1kNWN5Y2xlKHRoaXMuX2hhc2gsIHRhaWwpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0YWlsW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvIHRoZSBmaW5hbCBjb21wdXRhdGlvbiBiYXNlZCBvbiB0aGUgdGFpbCBhbmQgbGVuZ3RoXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWF5IG5vdCBmaXQgaW4gMzIgYml0cyBzbyB3ZSB0YWtlIGNhcmUgb2YgdGhhdFxuICAgICAgICB0bXAgPSB0aGlzLl9sZW5ndGggKiA4O1xuICAgICAgICB0bXAgPSB0bXAudG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xuICAgICAgICBsbyA9IHBhcnNlSW50KHRtcFsyXSwgMTYpO1xuICAgICAgICBoaSA9IHBhcnNlSW50KHRtcFsxXSwgMTYpIHx8IDA7XG5cbiAgICAgICAgdGFpbFsxNF0gPSBsbztcbiAgICAgICAgdGFpbFsxNV0gPSBoaTtcbiAgICAgICAgbWQ1Y3ljbGUodGhpcy5faGFzaCwgdGFpbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHRoZSBtZDUgaGFzaCBvbiBhIHN0cmluZy5cbiAgICAgKiBBIGNvbnZlcnNpb24gd2lsbCBiZSBhcHBsaWVkIGlmIHV0Zjggc3RyaW5nIGlzIGRldGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBzdHIgVGhlIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Jhd10gVHJ1ZSB0byBnZXQgdGhlIHJhdyBzdHJpbmcsIGZhbHNlIHRvIGdldCB0aGUgaGV4IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgcmVzdWx0XG4gICAgICovXG4gICAgU3BhcmtNRDUuaGFzaCA9IGZ1bmN0aW9uIChzdHIsIHJhdykge1xuICAgICAgICAvLyBDb252ZXJ0cyB0aGUgc3RyaW5nIHRvIHV0ZjggYnl0ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgIC8vIFRoZW4gY29tcHV0ZSBpdCB1c2luZyB0aGUgYmluYXJ5IGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiBTcGFya01ENS5oYXNoQmluYXJ5KHRvVXRmOChzdHIpLCByYXcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyB0aGUgbWQ1IGhhc2ggb24gYSBiaW5hcnkgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBjb250ZW50IFRoZSBiaW5hcnkgc3RyaW5nXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmF3XSAgICAgVHJ1ZSB0byBnZXQgdGhlIHJhdyBzdHJpbmcsIGZhbHNlIHRvIGdldCB0aGUgaGV4IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgcmVzdWx0XG4gICAgICovXG4gICAgU3BhcmtNRDUuaGFzaEJpbmFyeSA9IGZ1bmN0aW9uIChjb250ZW50LCByYXcpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBtZDUxKGNvbnRlbnQpLFxuICAgICAgICAgICAgcmV0ID0gaGV4KGhhc2gpO1xuXG4gICAgICAgIHJldHVybiByYXcgPyBoZXhUb0JpbmFyeVN0cmluZyhyZXQpIDogcmV0O1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIFNwYXJrTUQ1IE9PUCBpbXBsZW1lbnRhdGlvbiBmb3IgYXJyYXkgYnVmZmVycy5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGNsYXNzIHRvIHBlcmZvcm0gYW4gaW5jcmVtZW50YWwgbWQ1IE9OTFkgZm9yIGFycmF5IGJ1ZmZlcnMuXG4gICAgICovXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNhbGwgcmVzZXQgdG8gaW5pdCB0aGUgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGFuIGFycmF5IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFyciBUaGUgYXJyYXkgdG8gYmUgYXBwZW5kZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1LkFycmF5QnVmZmVyfSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdmFyIGJ1ZmYgPSBjb25jYXRlbmF0ZUFycmF5QnVmZmVycyh0aGlzLl9idWZmLmJ1ZmZlciwgYXJyLCB0cnVlKSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ1ZmYubGVuZ3RoLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICB0aGlzLl9sZW5ndGggKz0gYXJyLmJ5dGVMZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gNjQ7IGkgPD0gbGVuZ3RoOyBpICs9IDY0KSB7XG4gICAgICAgICAgICBtZDVjeWNsZSh0aGlzLl9oYXNoLCBtZDVibGtfYXJyYXkoYnVmZi5zdWJhcnJheShpIC0gNjQsIGkpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9idWZmID0gKGkgLSA2NCkgPCBsZW5ndGggPyBuZXcgVWludDhBcnJheShidWZmLmJ1ZmZlci5zbGljZShpIC0gNjQpKSA6IG5ldyBVaW50OEFycmF5KDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5pc2hlcyB0aGUgaW5jcmVtZW50YWwgY29tcHV0YXRpb24sIHJlc2V0aW5nIHRoZSBpbnRlcm5hbCBzdGF0ZSBhbmRcbiAgICAgKiByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmF3IFRydWUgdG8gZ2V0IHRoZSByYXcgc3RyaW5nLCBmYWxzZSB0byBnZXQgdGhlIGhleCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdFxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAocmF3KSB7XG4gICAgICAgIHZhciBidWZmID0gdGhpcy5fYnVmZixcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ1ZmYubGVuZ3RoLFxuICAgICAgICAgICAgdGFpbCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0YWlsW2kgPj4gMl0gfD0gYnVmZltpXSA8PCAoKGkgJSA0KSA8PCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpbmlzaCh0YWlsLCBsZW5ndGgpO1xuICAgICAgICByZXQgPSBoZXgodGhpcy5faGFzaCk7XG5cbiAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgICAgcmV0ID0gaGV4VG9CaW5hcnlTdHJpbmcocmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1LkFycmF5QnVmZmVyfSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9idWZmID0gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2hhc2ggPSBbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHN0YXRlXG4gICAgICovXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBTcGFya01ENS5wcm90b3R5cGUuZ2V0U3RhdGUuY2FsbCh0aGlzKTtcblxuICAgICAgICAvLyBDb252ZXJ0IGJ1ZmZlciB0byBhIHN0cmluZ1xuICAgICAgICBzdGF0ZS5idWZmID0gYXJyYXlCdWZmZXIyVXRmOFN0cihzdGF0ZS5idWZmKTtcblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBUaGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1LkFycmF5QnVmZmVyfSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIGJ1ZmZlclxuICAgICAgICBzdGF0ZS5idWZmID0gdXRmOFN0cjJBcnJheUJ1ZmZlcihzdGF0ZS5idWZmLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gU3BhcmtNRDUucHJvdG90eXBlLnNldFN0YXRlLmNhbGwodGhpcywgc3RhdGUpO1xuICAgIH07XG5cbiAgICBTcGFya01ENS5BcnJheUJ1ZmZlci5wcm90b3R5cGUuZGVzdHJveSA9IFNwYXJrTUQ1LnByb3RvdHlwZS5kZXN0cm95O1xuXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLl9maW5pc2ggPSBTcGFya01ENS5wcm90b3R5cGUuX2ZpbmlzaDtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHRoZSBtZDUgaGFzaCBvbiBhbiBhcnJheSBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnIgVGhlIGFycmF5IGJ1ZmZlclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgIFtyYXddIFRydWUgdG8gZ2V0IHRoZSByYXcgc3RyaW5nLCBmYWxzZSB0byBnZXQgdGhlIGhleCBvbmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdFxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLmhhc2ggPSBmdW5jdGlvbiAoYXJyLCByYXcpIHtcbiAgICAgICAgdmFyIGhhc2ggPSBtZDUxX2FycmF5KG5ldyBVaW50OEFycmF5KGFycikpLFxuICAgICAgICAgICAgcmV0ID0gaGV4KGhhc2gpO1xuXG4gICAgICAgIHJldHVybiByYXcgPyBoZXhUb0JpbmFyeVN0cmluZyhyZXQpIDogcmV0O1xuICAgIH07XG5cbiAgICByZXR1cm4gU3BhcmtNRDU7XG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3RyaW5naWZ5L3BhcnNlIGZ1bmN0aW9ucyB0aGF0IGRvbid0IG9wZXJhdGVcbiAqIHJlY3Vyc2l2ZWx5LCBzbyB0aGV5IGF2b2lkIGNhbGwgc3RhY2sgZXhjZWVkZWRcbiAqIGVycm9ycy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaW5wdXQpIHtcbiAgdmFyIHF1ZXVlID0gW107XG4gIHF1ZXVlLnB1c2goe29iajogaW5wdXR9KTtcblxuICB2YXIgcmVzID0gJyc7XG4gIHZhciBuZXh0LCBvYmosIHByZWZpeCwgdmFsLCBpLCBhcnJheVByZWZpeCwga2V5cywgaywga2V5LCB2YWx1ZSwgb2JqUHJlZml4O1xuICB3aGlsZSAoKG5leHQgPSBxdWV1ZS5wb3AoKSkpIHtcbiAgICBvYmogPSBuZXh0Lm9iajtcbiAgICBwcmVmaXggPSBuZXh0LnByZWZpeCB8fCAnJztcbiAgICB2YWwgPSBuZXh0LnZhbCB8fCAnJztcbiAgICByZXMgKz0gcHJlZml4O1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHJlcyArPSB2YWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmVzICs9IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgIHJlcyArPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHF1ZXVlLnB1c2goe3ZhbDogJ10nfSk7XG4gICAgICBmb3IgKGkgPSBvYmoubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJyYXlQcmVmaXggPSBpID09PSAwID8gJycgOiAnLCc7XG4gICAgICAgIHF1ZXVlLnB1c2goe29iajogb2JqW2ldLCBwcmVmaXg6IGFycmF5UHJlZml4fSk7XG4gICAgICB9XG4gICAgICBxdWV1ZS5wdXNoKHt2YWw6ICdbJ30pO1xuICAgIH0gZWxzZSB7IC8vIG9iamVjdFxuICAgICAga2V5cyA9IFtdO1xuICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxdWV1ZS5wdXNoKHt2YWw6ICd9J30pO1xuICAgICAgZm9yIChpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBvYmpQcmVmaXggPSAoaSA+IDAgPyAnLCcgOiAnJyk7XG4gICAgICAgIG9ialByZWZpeCArPSBKU09OLnN0cmluZ2lmeShrZXkpICsgJzonO1xuICAgICAgICBxdWV1ZS5wdXNoKHtvYmo6IHZhbHVlLCBwcmVmaXg6IG9ialByZWZpeH0pO1xuICAgICAgfVxuICAgICAgcXVldWUucHVzaCh7dmFsOiAneyd9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciB0aGUgcGFyc2UgZnVuY3Rpb24uXG4vLyBUaGlzIHBvcCBmdW5jdGlvbiBpcyBiYXNpY2FsbHkgY29waWVkIGZyb21cbi8vIHBvdWNoQ29sbGF0ZS5wYXJzZUluZGV4YWJsZVN0cmluZ1xuZnVuY3Rpb24gcG9wKG9iaiwgc3RhY2ssIG1ldGFTdGFjaykge1xuICB2YXIgbGFzdE1ldGFFbGVtZW50ID0gbWV0YVN0YWNrW21ldGFTdGFjay5sZW5ndGggLSAxXTtcbiAgaWYgKG9iaiA9PT0gbGFzdE1ldGFFbGVtZW50LmVsZW1lbnQpIHtcbiAgICAvLyBwb3BwaW5nIGEgbWV0YS1lbGVtZW50LCBlLmcuIGFuIG9iamVjdCB3aG9zZSB2YWx1ZSBpcyBhbm90aGVyIG9iamVjdFxuICAgIG1ldGFTdGFjay5wb3AoKTtcbiAgICBsYXN0TWV0YUVsZW1lbnQgPSBtZXRhU3RhY2tbbWV0YVN0YWNrLmxlbmd0aCAtIDFdO1xuICB9XG4gIHZhciBlbGVtZW50ID0gbGFzdE1ldGFFbGVtZW50LmVsZW1lbnQ7XG4gIHZhciBsYXN0RWxlbWVudEluZGV4ID0gbGFzdE1ldGFFbGVtZW50LmluZGV4O1xuICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgIGVsZW1lbnQucHVzaChvYmopO1xuICB9IGVsc2UgaWYgKGxhc3RFbGVtZW50SW5kZXggPT09IHN0YWNrLmxlbmd0aCAtIDIpIHsgLy8gb2JqIHdpdGgga2V5K3ZhbHVlXG4gICAgdmFyIGtleSA9IHN0YWNrLnBvcCgpO1xuICAgIGVsZW1lbnRba2V5XSA9IG9iajtcbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wdXNoKG9iaik7IC8vIG9iaiB3aXRoIGtleSBvbmx5XG4gIH1cbn1cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIHN0YWNrID0gW107XG4gIHZhciBtZXRhU3RhY2sgPSBbXTsgLy8gc3RhY2sgZm9yIGFycmF5cyBhbmQgb2JqZWN0c1xuICB2YXIgaSA9IDA7XG4gIHZhciBjb2xsYXRpb25JbmRleCxwYXJzZWROdW0sbnVtQ2hhcjtcbiAgdmFyIHBhcnNlZFN0cmluZyxsYXN0Q2gsbnVtQ29uc2VjdXRpdmVTbGFzaGVzLGNoO1xuICB2YXIgYXJyYXlFbGVtZW50LCBvYmpFbGVtZW50O1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbGxhdGlvbkluZGV4ID0gc3RyW2krK107XG4gICAgaWYgKGNvbGxhdGlvbkluZGV4ID09PSAnfScgfHxcbiAgICAgICAgY29sbGF0aW9uSW5kZXggPT09ICddJyB8fFxuICAgICAgICB0eXBlb2YgY29sbGF0aW9uSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcChzdGFjay5wb3AoKSwgc3RhY2ssIG1ldGFTdGFjayk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKGNvbGxhdGlvbkluZGV4KSB7XG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICBjYXNlICdcXG4nOlxuICAgICAgY2FzZSAnOic6XG4gICAgICBjYXNlICcsJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICduJzpcbiAgICAgICAgaSArPSAzOyAvLyAndWxsJ1xuICAgICAgICBwb3AobnVsbCwgc3RhY2ssIG1ldGFTdGFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIGkgKz0gMzsgLy8gJ3J1ZSdcbiAgICAgICAgcG9wKHRydWUsIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBpICs9IDQ7IC8vICdhbHNlJ1xuICAgICAgICBwb3AoZmFsc2UsIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzAnOlxuICAgICAgY2FzZSAnMSc6XG4gICAgICBjYXNlICcyJzpcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICBjYXNlICc1JzpcbiAgICAgIGNhc2UgJzYnOlxuICAgICAgY2FzZSAnNyc6XG4gICAgICBjYXNlICc4JzpcbiAgICAgIGNhc2UgJzknOlxuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIHBhcnNlZE51bSA9ICcnO1xuICAgICAgICBpLS07XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgbnVtQ2hhciA9IHN0cltpKytdO1xuICAgICAgICAgIGlmICgvW1xcZFxcLlxcLWVcXCtdLy50ZXN0KG51bUNoYXIpKSB7XG4gICAgICAgICAgICBwYXJzZWROdW0gKz0gbnVtQ2hhcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvcChwYXJzZUZsb2F0KHBhcnNlZE51bSksIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gJyc7XG4gICAgICAgIGxhc3RDaCA9IHZvaWQgMDtcbiAgICAgICAgbnVtQ29uc2VjdXRpdmVTbGFzaGVzID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjaCA9IHN0cltpKytdO1xuICAgICAgICAgIGlmIChjaCAhPT0gJ1wiJyB8fCAobGFzdENoID09PSAnXFxcXCcgJiZcbiAgICAgICAgICAgICAgbnVtQ29uc2VjdXRpdmVTbGFzaGVzICUgMiA9PT0gMSkpIHtcbiAgICAgICAgICAgIHBhcnNlZFN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGxhc3RDaCA9IGNoO1xuICAgICAgICAgICAgaWYgKGxhc3RDaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgIG51bUNvbnNlY3V0aXZlU2xhc2hlcysrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbnVtQ29uc2VjdXRpdmVTbGFzaGVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvcChKU09OLnBhcnNlKCdcIicgKyBwYXJzZWRTdHJpbmcgKyAnXCInKSwgc3RhY2ssIG1ldGFTdGFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnWyc6XG4gICAgICAgIGFycmF5RWxlbWVudCA9IHsgZWxlbWVudDogW10sIGluZGV4OiBzdGFjay5sZW5ndGggfTtcbiAgICAgICAgc3RhY2sucHVzaChhcnJheUVsZW1lbnQuZWxlbWVudCk7XG4gICAgICAgIG1ldGFTdGFjay5wdXNoKGFycmF5RWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneyc6XG4gICAgICAgIG9iakVsZW1lbnQgPSB7IGVsZW1lbnQ6IHt9LCBpbmRleDogc3RhY2subGVuZ3RoIH07XG4gICAgICAgIHN0YWNrLnB1c2gob2JqRWxlbWVudC5lbGVtZW50KTtcbiAgICAgICAgbWV0YVN0YWNrLnB1c2gob2JqRWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICd1bmV4cGVjdGVkbHkgcmVhY2hlZCBlbmQgb2YgaW5wdXQ6ICcgKyBjb2xsYXRpb25JbmRleCk7XG4gICAgfVxuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==