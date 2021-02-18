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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2FyZ3NhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL21lc3NhZ2VDaGFubmVsLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvcXVldWVNaWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi90aW1lb3V0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9saWIvaW5kZXgtYnJvd3Nlci5lcy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BvdWNoZGIvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wb3VjaGRiL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcG91Y2hkYi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3BhcmstbWQ1L3NwYXJrLW1kNS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Z1dnV6ZWxhL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYjtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxtQkFBWTtBQUN0QixFQUFFLG1CQUFPLENBQUMsNEVBQWtCO0FBQzVCLEVBQUUsbUJBQU8sQ0FBQyxtRUFBZTtBQUN6QixFQUFFLG1CQUFPLENBQUMsNEVBQWtCO0FBQzVCLEVBQUUsbUJBQU8sQ0FBQyxzRUFBZTtBQUN6QixFQUFFLG1CQUFPLENBQUMsOERBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hHQSw4Q0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUNqQkEsOENBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDckJBLDhDQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEEsOENBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUFRLFVBQVUsNkNBQUU7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkNBQUU7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFTO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUU7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsMEJBQTBCO0FBQ25EOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBRTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFHLFNBQVMsZ0RBQUc7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGdEQUFHO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQ0FBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHVDQUFFLENBQUM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDRDQUE0QyxTQUFTO0FBQ3JELHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRCxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdEO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQSxrQkFBa0IsOENBQThDO0FBQ2hFO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQsb0JBQW9CLGlEQUFpRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsdURBQXVEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQix5QkFBeUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25ELG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDZCQUE2Qjs7QUFFL0M7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsT0FBTztBQUMvQyxvQkFBb0IsaURBQWlEO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtDQUFRLFlBQVksNkNBQUU7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkNBQUU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxZQUFZLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFZO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLGdEQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBUSxrQkFBa0IsNkNBQUU7O0FBRTVCO0FBQ0EsRUFBRSw2Q0FBRTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQyxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixPQUFPO0FBQ1AsS0FBSztBQUNMLHNCQUFzQixTQUFTO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0EsU0FBUztBQUNULHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0EsMERBQTBELGFBQWEsRUFBRTtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsYUFBYSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0MsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyx1QkFBdUI7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsNkNBQUU7O0FBRXpCO0FBQ0EsY0FBYyw2Q0FBRTtBQUNoQixlQUFlLDZDQUFFO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCw0Q0FBNEM7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBLEVBQUUsK0NBQVE7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVMsR0FBRyxTQUFTO0FBQ2xDLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSyxPQUFPO0FBQ1osd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU87QUFDWixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVcsVUFBVSxNQUFNO0FBQzFDO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPLHlCQUF5QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrREFBa0Q7QUFDdkQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUEsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsV0FBVywrQ0FBUTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFdBQVcsK0NBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMsS0FBSyxxQ0FBcUM7QUFDMUM7QUFDQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0EsR0FBRyxPQUFPO0FBQ1Y7QUFDQTtBQUNBLEtBQUsscUNBQXFDO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qyx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQjtBQUNqQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBUztBQUNmO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsZUFBZTtBQUNuRSx3Q0FBd0Msb0JBQW9CO0FBQzVELGtEQUFrRCxhQUFhO0FBQy9ELHdDQUF3QyxrQkFBa0I7QUFDMUQsc0NBQXNDLG9DQUFvQztBQUMxRTs7QUFFQTtBQUNBLDhEQUE4RCxlQUFlOztBQUU3RTtBQUNBLHVDQUF1QyxlQUFlOztBQUV0RDtBQUNBO0FBQ0EsT0FBTyxvQkFBb0I7QUFDM0I7QUFDQSwwREFBMEQsYUFBYTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGVBQWU7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3RELGtEQUFrRCxhQUFhO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQkFBb0I7QUFDM0I7QUFDQSwwREFBMEQsYUFBYTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsdUNBQXVDO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLGVBQWU7QUFDZix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFTO0FBQ3BCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwrQ0FBK0MsSUFBZTtBQUM5RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDZDQUE2QyxJQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVLEVBQUUsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFLEtBQUs7QUFDTDtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVMsT0FBTyxZQUFZLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLE9BQU87QUFDUCwwQkFBMEI7QUFDMUIsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1AsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQVEsY0FBYyw2Q0FBRTtBQUN4QjtBQUNBLEVBQUUsNkNBQUU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQVEsT0FBTyw2Q0FBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRCxxREFBcUQ7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDNWhVdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0Z4QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsa0VBQUcsRTs7Ozs7Ozs7Ozs7O0FDdE5sQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEOztBQUVsRDs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixTQUFTO0FBQzVCOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDNUZuQjtBQUFBO0FBQUE7QUFBMkI7QUFDZ0I7QUFDM0M7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWM7OztBQUdkO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsK0NBQUc7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0EsdUVBQXVFO0FBQ3ZFOztBQUVBLDJFQUEyRTs7QUFFM0UsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCLG1DQUFtQzs7QUFFbkMsNkJBQTZCOztBQUU3QixpQ0FBaUM7O0FBRWpDLDJCQUEyQjs7QUFFM0IsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQSxnQkFBZ0IsK0RBQVc7QUFDM0I7O0FBRWUsaUVBQUUsRTs7Ozs7Ozs7Ozs7O0FDOUZqQjtBQUFBO0FBQUE7QUFBMkI7QUFDQTtBQUMzQixTQUFTLHVEQUFHLGFBQWEsK0NBQUc7QUFDYixpRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNIakI7QUFBQTtBQUFBO0FBQUE7QUFBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixFQUFFO0FBQzlCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ0E7QUFDUTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwrREFBVztBQUM3QixHQUFHOzs7QUFHSDtBQUNBLDZCQUE2QjtBQUM3QixHQUFHLGVBQWU7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQTJCO0FBQ2dCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLCtDQUFHLElBQUk7O0FBRXREO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLCtEQUFXO0FBQ3BCOztBQUVlLGlFQUFFLEU7Ozs7Ozs7Ozs7OztBQzVCakI7QUFBQTtBQUFBO0FBQTJCO0FBQ0U7QUFDN0IsU0FBUyx1REFBRyxhQUFhLGdEQUFJO0FBQ2QsaUVBQUUsRTs7Ozs7Ozs7Ozs7QUNIakI7QUFDQSxRQUFRLElBQTJCO0FBQ25DO0FBQ0E7QUFDQSxLQUFLLE1BQU0sYUFjTjtBQUNMLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLElBQUk7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLElBQUk7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiODFmNjZkNjYxNjIwNjc3YTU3MzcvdmVuZG9yc35jb3Vyc2VfJGNvdXJzZU5hbWV+Y291cnNlXyRjb3Vyc2VOYW1lJDkzX3NraWxsXyQ5MWlkfmxvZ2lufnNpZ24kNDV1cH5zaWduJDQ1dXAkNDVzdWNjZXNzLnZlbmRvcnN+Y291cnNlXyRjb3Vyc2VOYW1lfmNvdXJzZV8kY291cnNlTmFtZSQ5M19za2lsbF8kOTFpZH5sb2dpbn5zaWduJDQ1dXB+c2lnbiQ0NXVwJDQ1c3VjY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBhcmdzQXJyYXk7XG5cbmZ1bmN0aW9uIGFyZ3NBcnJheShmdW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuKSB7XG4gICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgdmFyIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW4uY2FsbCh0aGlzLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bi5jYWxsKHRoaXMsIFtdKTtcbiAgICB9XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHR5cGVzID0gW1xuICByZXF1aXJlKCcuL25leHRUaWNrJyksXG4gIHJlcXVpcmUoJy4vcXVldWVNaWNyb3Rhc2snKSxcbiAgcmVxdWlyZSgnLi9tdXRhdGlvbi5qcycpLFxuICByZXF1aXJlKCcuL21lc3NhZ2VDaGFubmVsJyksXG4gIHJlcXVpcmUoJy4vc3RhdGVDaGFuZ2UnKSxcbiAgcmVxdWlyZSgnLi90aW1lb3V0Jylcbl07XG52YXIgZHJhaW5pbmc7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgfVxuICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgbmV4dFRpY2soKTtcbiAgfVxufVxuXG4vL25hbWVkIG5leHRUaWNrIGZvciBsZXNzIGNvbmZ1c2luZyBzdGFjayB0cmFjZXNcbmZ1bmN0aW9uIG5leHRUaWNrKCkge1xuICBpZiAoZHJhaW5pbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2NoZWR1bGVkID0gZmFsc2U7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50UXVldWUgJiYgKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgfVxuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgcXVldWVJbmRleCA9IC0xO1xuICBkcmFpbmluZyA9IGZhbHNlO1xuICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG52YXIgc2NoZWR1bGVEcmFpbjtcbnZhciBpID0gLTE7XG52YXIgbGVuID0gdHlwZXMubGVuZ3RoO1xud2hpbGUgKCsraSA8IGxlbikge1xuICBpZiAodHlwZXNbaV0gJiYgdHlwZXNbaV0udGVzdCAmJiB0eXBlc1tpXS50ZXN0KCkpIHtcbiAgICBzY2hlZHVsZURyYWluID0gdHlwZXNbaV0uaW5zdGFsbChuZXh0VGljayk7XG4gICAgYnJlYWs7XG4gIH1cbn1cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuID0gdGhpcy5mdW47XG4gIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gIHN3aXRjaCAoYXJyYXkubGVuZ3RoKSB7XG4gIGNhc2UgMDpcbiAgICByZXR1cm4gZnVuKCk7XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gZnVuKGFycmF5WzBdKTtcbiAgY2FzZSAyOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgY2FzZSAzOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIGZ1bi5hcHBseShudWxsLCBhcnJheSk7XG4gIH1cblxufTtcbm1vZHVsZS5leHBvcnRzID0gaW1tZWRpYXRlO1xuZnVuY3Rpb24gaW1tZWRpYXRlKHRhc2spIHtcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG4gIHF1ZXVlLnB1c2gobmV3IEl0ZW0odGFzaywgYXJncykpO1xuICBpZiAoIXNjaGVkdWxlZCAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgIHNjaGVkdWxlRHJhaW4oKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgLy8gd2UgY2FuIG9ubHkgZ2V0IGhlcmUgaW4gSUUxMFxuICAgIC8vIHdoaWNoIGRvZXNuJ3QgaGFuZGVsIHBvc3RNZXNzYWdlIHdlbGxcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBnbG9iYWwuTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKCk7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG4vL2Jhc2VkIG9mZiByc3ZwIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanNcbi8vbGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0Vcbi8vaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL21hc3Rlci9saWIvcnN2cC9hc2FwLmpzXG5cbnZhciBNdXRhdGlvbiA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNdXRhdGlvbjtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbihoYW5kbGUpO1xuICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgfSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudC5kYXRhID0gKGNhbGxlZCA9ICsrY2FsbGVkICUgMik7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBnbG9iYWwucXVldWVNaWNyb3Rhc2sgPT09ICdmdW5jdGlvbic7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGdsb2JhbC5xdWV1ZU1pY3JvdGFzayhmdW5jKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdkb2N1bWVudCcgaW4gZ2xvYmFsICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZSgpO1xuXG4gICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgc2NyaXB0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbCk7XG4gICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgfTtcbiAgICBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcblxuICAgIHJldHVybiBoYW5kbGU7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAodCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQodCwgMCk7XG4gIH07XG59OyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiaW1wb3J0IGltbWVkaWF0ZSBmcm9tICdpbW1lZGlhdGUnO1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBNZDUgZnJvbSAnc3BhcmstbWQ1JztcbmltcG9ydCB2dXZ1emVsYSBmcm9tICd2dXZ1emVsYSc7XG5pbXBvcnQgZ2V0QXJndW1lbnRzIGZyb20gJ2FyZ3NhcnJheSc7XG5pbXBvcnQgaW5oZXJpdHMgZnJvbSAnaW5oZXJpdHMnO1xuaW1wb3J0IEVFIGZyb20gJ2V2ZW50cyc7XG5cbmZ1bmN0aW9uIG1hbmdsZShrZXkpIHtcbiAgcmV0dXJuICckJyArIGtleTtcbn1cbmZ1bmN0aW9uIHVubWFuZ2xlKGtleSkge1xuICByZXR1cm4ga2V5LnN1YnN0cmluZygxKTtcbn1cbmZ1bmN0aW9uIE1hcCQxKCkge1xuICB0aGlzLl9zdG9yZSA9IHt9O1xufVxuTWFwJDEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIG1hbmdsZWQgPSBtYW5nbGUoa2V5KTtcbiAgcmV0dXJuIHRoaXMuX3N0b3JlW21hbmdsZWRdO1xufTtcbk1hcCQxLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgbWFuZ2xlZCA9IG1hbmdsZShrZXkpO1xuICB0aGlzLl9zdG9yZVttYW5nbGVkXSA9IHZhbHVlO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5NYXAkMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgbWFuZ2xlZCA9IG1hbmdsZShrZXkpO1xuICByZXR1cm4gbWFuZ2xlZCBpbiB0aGlzLl9zdG9yZTtcbn07XG5NYXAkMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgbWFuZ2xlZCA9IG1hbmdsZShrZXkpO1xuICB2YXIgcmVzID0gbWFuZ2xlZCBpbiB0aGlzLl9zdG9yZTtcbiAgZGVsZXRlIHRoaXMuX3N0b3JlW21hbmdsZWRdO1xuICByZXR1cm4gcmVzO1xufTtcbk1hcCQxLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fc3RvcmUpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX3N0b3JlW2tleV07XG4gICAga2V5ID0gdW5tYW5nbGUoa2V5KTtcbiAgICBjYih2YWx1ZSwga2V5KTtcbiAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAkMS5wcm90b3R5cGUsICdzaXplJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fc3RvcmUpLmxlbmd0aDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIFNldCQxKGFycmF5KSB7XG4gIHRoaXMuX3N0b3JlID0gbmV3IE1hcCQxKCk7XG5cbiAgLy8gaW5pdCB3aXRoIGFuIGFycmF5XG4gIGlmIChhcnJheSAmJiBBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGhpcy5hZGQoYXJyYXlbaV0pO1xuICAgIH1cbiAgfVxufVxuU2V0JDEucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX3N0b3JlLnNldChrZXksIHRydWUpO1xufTtcblNldCQxLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9zdG9yZS5oYXMoa2V5KTtcbn07XG5TZXQkMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9zdG9yZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgY2Ioa2V5KTtcbiAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldCQxLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaXplO1xuICB9XG59KTtcblxuLyogZ2xvYmFsIE1hcCxTZXQsU3ltYm9sICovXG4vLyBCYXNlZCBvbiBodHRwczovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNi8gd2UgY2FuIHNuaWZmIG91dFxuLy8gaW5jb21wbGV0ZSBNYXAvU2V0IGltcGxlbWVudGF0aW9ucyB3aGljaCB3b3VsZCBvdGhlcndpc2UgY2F1c2Ugb3VyIHRlc3RzIHRvIGZhaWwuXG4vLyBOb3RhYmx5IHRoZXkgZmFpbCBpbiBJRTExIGFuZCBpT1MgOC40LCB3aGljaCB0aGlzIHByZXZlbnRzLlxuZnVuY3Rpb24gc3VwcG9ydHNNYXBBbmRTZXQoKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTWFwLCBTeW1ib2wuc3BlY2llcyk7XG4gIHJldHVybiBwcm9wICYmICdnZXQnIGluIHByb3AgJiYgTWFwW1N5bWJvbC5zcGVjaWVzXSA9PT0gTWFwO1xufVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbW9udGFnZWpzL2NvbGxlY3Rpb25zXG5cbnZhciBFeHBvcnRlZFNldDtcbnZhciBFeHBvcnRlZE1hcDtcblxue1xuICBpZiAoc3VwcG9ydHNNYXBBbmRTZXQoKSkgeyAvLyBwcmVmZXIgYnVpbHQtaW4gTWFwL1NldFxuICAgIEV4cG9ydGVkU2V0ID0gU2V0O1xuICAgIEV4cG9ydGVkTWFwID0gTWFwO1xuICB9IGVsc2UgeyAvLyBmYWxsIGJhY2sgdG8gb3VyIHBvbHlmaWxsXG4gICAgRXhwb3J0ZWRTZXQgPSBTZXQkMTtcbiAgICBFeHBvcnRlZE1hcCA9IE1hcCQxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQmluYXJ5T2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqZWN0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QgaW5zdGFuY2VvZiBCbG9iKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihidWZmKSB7XG4gIGlmICh0eXBlb2YgYnVmZi5zbGljZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBidWZmLnNsaWNlKDApO1xuICB9XG4gIC8vIElFMTAtMTEgc2xpY2UoKSBwb2x5ZmlsbFxuICB2YXIgdGFyZ2V0ID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmYuYnl0ZUxlbmd0aCk7XG4gIHZhciB0YXJnZXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHRhcmdldCk7XG4gIHZhciBzb3VyY2VBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICB0YXJnZXRBcnJheS5zZXQoc291cmNlQXJyYXkpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUJpbmFyeU9iamVjdChvYmplY3QpIHtcbiAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcbiAgfVxuICB2YXIgc2l6ZSA9IG9iamVjdC5zaXplO1xuICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuICAvLyBCbG9iXG4gIGlmICh0eXBlb2Ygb2JqZWN0LnNsaWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9iamVjdC5zbGljZSgwLCBzaXplLCB0eXBlKTtcbiAgfVxuICAvLyBQaGFudG9tSlMgc2xpY2UoKSByZXBsYWNlbWVudFxuICByZXR1cm4gb2JqZWN0LndlYmtpdFNsaWNlKDAsIHNpemUsIHR5cGUpO1xufVxuXG4vLyBtb3N0IG9mIHRoaXMgaXMgYm9ycm93ZWQgZnJvbSBsb2Rhc2guaXNQbGFpbk9iamVjdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maXMtY29tcG9uZW50cy9sb2Rhc2guaXNwbGFpbm9iamVjdC9cbi8vIGJsb2IvMjljMzU4MTQwYTc0ZjI1MmFlYjA4YzllYjI4YmVmODZmMjIxN2Q0YS9pbmRleC5qc1xuXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAocHJvdG8gPT09IG51bGwpIHsgLy8gbm90IHN1cmUgd2hlbiB0aGlzIGhhcHBlbnMsIGJ1dCBJIGd1ZXNzIGl0IGNhblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgdmFyIG5ld09iamVjdDtcbiAgdmFyIGk7XG4gIHZhciBsZW47XG5cbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIG5ld09iamVjdCA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IG9iamVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbmV3T2JqZWN0W2ldID0gY2xvbmUob2JqZWN0W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuXG4gIC8vIHNwZWNpYWwgY2FzZTogdG8gYXZvaWQgaW5jb25zaXN0ZW5jaWVzIGJldHdlZW4gSW5kZXhlZERCXG4gIC8vIGFuZCBvdGhlciBiYWNrZW5kcywgd2UgYXV0b21hdGljYWxseSBzdHJpbmdpZnkgRGF0ZXNcbiAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gb2JqZWN0LnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICBpZiAoaXNCaW5hcnlPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBjbG9uZUJpbmFyeU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0OyAvLyBkb24ndCBjbG9uZSBvYmplY3RzIGxpa2UgV29ya2Vyc1xuICB9XG5cbiAgbmV3T2JqZWN0ID0ge307XG4gIGZvciAoaSBpbiBvYmplY3QpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBpKSkge1xuICAgICAgdmFyIHZhbHVlID0gY2xvbmUob2JqZWN0W2ldKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5ld09iamVjdFtpXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqZWN0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGZ1bikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBnZXRBcmd1bWVudHMoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAvLyB0aGlzIGlzIGEgc21va2UgdGVzdCBhbmQgc2hvdWxkIG5ldmVyIGFjdHVhbGx5IGhhcHBlblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbmNlIGNhbGxlZCBtb3JlIHRoYW4gb25jZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZnVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZShmdW5jKSB7XG4gIC8vY3JlYXRlIHRoZSBmdW5jdGlvbiB3ZSB3aWxsIGJlIHJldHVybmluZ1xuICByZXR1cm4gZ2V0QXJndW1lbnRzKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgLy8gQ2xvbmUgYXJndW1lbnRzXG4gICAgYXJncyA9IGNsb25lKGFyZ3MpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBpZiB0aGUgbGFzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgaXRzIGEgY2FsbGJhY2tcbiAgICB2YXIgdXNlZENCID0gKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuICAgICAgdmFyIHJlc3A7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBvbmNlKGZ1bmN0aW9uIChlcnIsIG1lc2cpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVsZmlsbChtZXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3IgdGhpcyBpbnZvY2F0aW9uXG4gICAgICAgIC8vIGFwcGx5IHRoZSBmdW5jdGlvbiBpbiB0aGUgb3JpZyBjb250ZXh0XG4gICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJlc3AgPSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICBpZiAocmVzcCAmJiB0eXBlb2YgcmVzcC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZnVsZmlsbChyZXNwKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaWYgdGhlcmUgaXMgYSBjYWxsYmFjaywgY2FsbCBpdCBiYWNrXG4gICAgaWYgKHVzZWRDQikge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdXNlZENCKG51bGwsIHJlc3VsdCk7XG4gICAgICB9LCB1c2VkQ0IpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ0FwaUNhbGwoc2VsZiwgbmFtZSwgYXJncykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHNlbGYuY29uc3RydWN0b3IubGlzdGVuZXJzKCdkZWJ1ZycpLmxlbmd0aCkge1xuICAgIHZhciBsb2dBcmdzID0gWydhcGknLCBzZWxmLm5hbWUsIG5hbWVdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGxvZ0FyZ3MucHVzaChhcmdzW2ldKTtcbiAgICB9XG4gICAgc2VsZi5jb25zdHJ1Y3Rvci5lbWl0KCdkZWJ1ZycsIGxvZ0FyZ3MpO1xuXG4gICAgLy8gb3ZlcnJpZGUgdGhlIGNhbGxiYWNrIGl0c2VsZiB0byBsb2cgdGhlIHJlc3BvbnNlXG4gICAgdmFyIG9yaWdDYWxsYmFjayA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgIHZhciByZXNwb25zZUFyZ3MgPSBbJ2FwaScsIHNlbGYubmFtZSwgbmFtZV07XG4gICAgICByZXNwb25zZUFyZ3MgPSByZXNwb25zZUFyZ3MuY29uY2F0KFxuICAgICAgICBlcnIgPyBbJ2Vycm9yJywgZXJyXSA6IFsnc3VjY2VzcycsIHJlc11cbiAgICAgICk7XG4gICAgICBzZWxmLmNvbnN0cnVjdG9yLmVtaXQoJ2RlYnVnJywgcmVzcG9uc2VBcmdzKTtcbiAgICAgIG9yaWdDYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGFwdGVyRnVuKG5hbWUsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0b1Byb21pc2UoZ2V0QXJndW1lbnRzKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignZGF0YWJhc2UgaXMgY2xvc2VkJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdkYXRhYmFzZSBpcyBkZXN0cm95ZWQnKSk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBsb2dBcGlDYWxsKHNlbGYsIG5hbWUsIGFyZ3MpO1xuICAgIGlmICghdGhpcy50YXNrcXVldWUuaXNSZWFkeSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi50YXNrcXVldWUuYWRkVGFzayhmdW5jdGlvbiAoZmFpbGVkKSB7XG4gICAgICAgICAgaWYgKGZhaWxlZCkge1xuICAgICAgICAgICAgcmVqZWN0KGZhaWxlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZ1bGZpbGwoc2VsZltuYW1lXS5hcHBseShzZWxmLCBhcmdzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gIH0pKTtcbn1cblxuLy8gbGlrZSB1bmRlcnNjb3JlL2xvZGFzaCBfLnBpY2soKVxuZnVuY3Rpb24gcGljayhvYmosIGFycikge1xuICB2YXIgcmVzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcHJvcCA9IGFycltpXTtcbiAgICBpZiAocHJvcCBpbiBvYmopIHtcbiAgICAgIHJlc1twcm9wXSA9IG9ialtwcm9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLy8gTW9zdCBicm93c2VycyB0aHJvdHRsZSBjb25jdXJyZW50IHJlcXVlc3RzIGF0IDYsIHNvIGl0J3Mgc2lsbHlcbi8vIHRvIHNoaW0gX2J1bGtfZ2V0IGJ5IHRyeWluZyB0byBsYXVuY2ggcG90ZW50aWFsbHkgaHVuZHJlZHMgb2YgcmVxdWVzdHNcbi8vIGFuZCB0aGVuIGxldHRpbmcgdGhlIG1ham9yaXR5IHRpbWUgb3V0LiBXZSBjYW4gaGFuZGxlIHRoaXMgb3Vyc2VsdmVzLlxudmFyIE1BWF9OVU1fQ09OQ1VSUkVOVF9SRVFVRVNUUyA9IDY7XG5cbmZ1bmN0aW9uIGlkZW50aXR5RnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UmVzdWx0Rm9yT3BlblJldnNHZXQocmVzdWx0KSB7XG4gIHJldHVybiBbe1xuICAgIG9rOiByZXN1bHRcbiAgfV07XG59XG5cbi8vIHNoaW0gZm9yIFAvQ291Y2hEQiBhZGFwdGVycyB0aGF0IGRvbid0IGRpcmVjdGx5IGltcGxlbWVudCBfYnVsa19nZXRcbmZ1bmN0aW9uIGJ1bGtHZXQoZGIsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIHZhciByZXF1ZXN0cyA9IG9wdHMuZG9jcztcblxuICAvLyBjb25zb2xpZGF0ZSBpbnRvIG9uZSByZXF1ZXN0IHBlciBkb2MgaWYgcG9zc2libGVcbiAgdmFyIHJlcXVlc3RzQnlJZCA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuICByZXF1ZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgaWYgKHJlcXVlc3RzQnlJZC5oYXMocmVxdWVzdC5pZCkpIHtcbiAgICAgIHJlcXVlc3RzQnlJZC5nZXQocmVxdWVzdC5pZCkucHVzaChyZXF1ZXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdHNCeUlkLnNldChyZXF1ZXN0LmlkLCBbcmVxdWVzdF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG51bURvY3MgPSByZXF1ZXN0c0J5SWQuc2l6ZTtcbiAgdmFyIG51bURvbmUgPSAwO1xuICB2YXIgcGVyRG9jUmVzdWx0cyA9IG5ldyBBcnJheShudW1Eb2NzKTtcblxuICBmdW5jdGlvbiBjb2xsYXBzZVJlc3VsdHNBbmRGaW5pc2goKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBwZXJEb2NSZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmVzLmRvY3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGlkOiByZXMuaWQsXG4gICAgICAgICAgZG9jczogW2luZm9dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2FsbGJhY2sobnVsbCwge3Jlc3VsdHM6IHJlc3VsdHN9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRG9uZSgpIHtcbiAgICBpZiAoKytudW1Eb25lID09PSBudW1Eb2NzKSB7XG4gICAgICBjb2xsYXBzZVJlc3VsdHNBbmRGaW5pc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb3RSZXN1bHQoZG9jSW5kZXgsIGlkLCBkb2NzKSB7XG4gICAgcGVyRG9jUmVzdWx0c1tkb2NJbmRleF0gPSB7aWQ6IGlkLCBkb2NzOiBkb2NzfTtcbiAgICBjaGVja0RvbmUoKTtcbiAgfVxuXG4gIHZhciBhbGxSZXF1ZXN0cyA9IFtdO1xuICByZXF1ZXN0c0J5SWQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGFsbFJlcXVlc3RzLnB1c2goa2V5KTtcbiAgfSk7XG5cbiAgdmFyIGkgPSAwO1xuXG4gIGZ1bmN0aW9uIG5leHRCYXRjaCgpIHtcblxuICAgIGlmIChpID49IGFsbFJlcXVlc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cFRvID0gTWF0aC5taW4oaSArIE1BWF9OVU1fQ09OQ1VSUkVOVF9SRVFVRVNUUywgYWxsUmVxdWVzdHMubGVuZ3RoKTtcbiAgICB2YXIgYmF0Y2ggPSBhbGxSZXF1ZXN0cy5zbGljZShpLCB1cFRvKTtcbiAgICBwcm9jZXNzQmF0Y2goYmF0Y2gsIGkpO1xuICAgIGkgKz0gYmF0Y2gubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0JhdGNoKGJhdGNoLCBvZmZzZXQpIHtcbiAgICBiYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChkb2NJZCwgaikge1xuICAgICAgdmFyIGRvY0lkeCA9IG9mZnNldCArIGo7XG4gICAgICB2YXIgZG9jUmVxdWVzdHMgPSByZXF1ZXN0c0J5SWQuZ2V0KGRvY0lkKTtcblxuICAgICAgLy8ganVzdCB1c2UgdGhlIGZpcnN0IHJlcXVlc3QgYXMgdGhlIFwidGVtcGxhdGVcIlxuICAgICAgLy8gVE9ETzogVGhlIF9idWxrX2dldCBBUEkgYWxsb3dzIGZvciBtb3JlIHN1YnRsZSB1c2UgY2FzZXMgdGhhbiB0aGlzLFxuICAgICAgLy8gYnV0IGZvciBub3cgaXQgaXMgdW5saWtlbHkgdGhhdCB0aGVyZSB3aWxsIGJlIGEgbWl4IG9mIGRpZmZlcmVudFxuICAgICAgLy8gXCJhdHRzX3NpbmNlXCIgb3IgXCJhdHRhY2htZW50c1wiIGluIHRoZSBzYW1lIHJlcXVlc3QsIHNpbmNlIGl0J3MganVzdFxuICAgICAgLy8gcmVwbGljYXRlLmpzIHRoYXQgaXMgdXNpbmcgdGhpcyBmb3IgdGhlIG1vbWVudC5cbiAgICAgIC8vIEFsc28sIGF0dHNfc2luY2UgaXMgYXNwaXJhdGlvbmFsLCBzaW5jZSB3ZSBkb24ndCBzdXBwb3J0IGl0IHlldC5cbiAgICAgIHZhciBkb2NPcHRzID0gcGljayhkb2NSZXF1ZXN0c1swXSwgWydhdHRzX3NpbmNlJywgJ2F0dGFjaG1lbnRzJ10pO1xuICAgICAgZG9jT3B0cy5vcGVuX3JldnMgPSBkb2NSZXF1ZXN0cy5tYXAoZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgLy8gcmV2IGlzIG9wdGlvbmFsLCBvcGVuX3JldnMgZGlzYWxsb3dlZFxuICAgICAgICByZXR1cm4gcmVxdWVzdC5yZXY7XG4gICAgICB9KTtcblxuICAgICAgLy8gcmVtb3ZlIGZhbHNleSAvIHVuZGVmaW5lZCByZXZpc2lvbnNcbiAgICAgIGRvY09wdHMub3Blbl9yZXZzID0gZG9jT3B0cy5vcGVuX3JldnMuZmlsdGVyKGlkZW50aXR5RnVuY3Rpb24pO1xuXG4gICAgICB2YXIgZm9ybWF0UmVzdWx0ID0gaWRlbnRpdHlGdW5jdGlvbjtcblxuICAgICAgaWYgKGRvY09wdHMub3Blbl9yZXZzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgZG9jT3B0cy5vcGVuX3JldnM7XG5cbiAgICAgICAgLy8gd2hlbiBmZXRjaGluZyBvbmx5IHRoZSBcIndpbm5pbmdcIiBsZWFmLFxuICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIHJlc3VsdCBzbyBpdCBsb29rcyBsaWtlIGFuIG9wZW5fcmV2c1xuICAgICAgICAvLyByZXF1ZXN0XG4gICAgICAgIGZvcm1hdFJlc3VsdCA9IGZvcm1hdFJlc3VsdEZvck9wZW5SZXZzR2V0O1xuICAgICAgfVxuXG4gICAgICAvLyBnbG9iYWxseS1zdXBwbGllZCBvcHRpb25zXG4gICAgICBbJ3JldnMnLCAnYXR0YWNobWVudHMnLCAnYmluYXJ5JywgJ2FqYXgnLCAnbGF0ZXN0J10uZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgaWYgKHBhcmFtIGluIG9wdHMpIHtcbiAgICAgICAgICBkb2NPcHRzW3BhcmFtXSA9IG9wdHNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRiLmdldChkb2NJZCwgZG9jT3B0cywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gW3tlcnJvcjogZXJyfV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZm9ybWF0UmVzdWx0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZ290UmVzdWx0KGRvY0lkeCwgZG9jSWQsIHJlc3VsdCk7XG4gICAgICAgIG5leHRCYXRjaCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZXh0QmF0Y2goKTtcblxufVxuXG52YXIgaGFzTG9jYWw7XG5cbnRyeSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfcG91Y2hfY2hlY2tfbG9jYWxzdG9yYWdlJywgMSk7XG4gIGhhc0xvY2FsID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX3BvdWNoX2NoZWNrX2xvY2Fsc3RvcmFnZScpO1xufSBjYXRjaCAoZSkge1xuICBoYXNMb2NhbCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBoYXNMb2NhbDtcbn1cblxuLy8gQ3VzdG9tIG5leHRUaWNrKCkgc2hpbSBmb3IgYnJvd3NlcnMuIEluIG5vZGUsIHRoaXMgd2lsbCBqdXN0IGJlIHByb2Nlc3MubmV4dFRpY2soKS4gV2VcblxuaW5oZXJpdHMoQ2hhbmdlcywgRUUpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gYXR0YWNoQnJvd3NlckV2ZW50cyhzZWxmKSB7XG4gIGlmIChoYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoZS5rZXkpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIENoYW5nZXMoKSB7XG4gIEVFLmNhbGwodGhpcyk7XG4gIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuXG4gIGF0dGFjaEJyb3dzZXJFdmVudHModGhpcyk7XG59XG5DaGFuZ2VzLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChkYk5hbWUsIGlkLCBkYiwgb3B0cykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHRoaXMuX2xpc3RlbmVyc1tpZF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgaW5wcm9ncmVzcyA9IGZhbHNlO1xuICBmdW5jdGlvbiBldmVudEZ1bmN0aW9uKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghc2VsZi5fbGlzdGVuZXJzW2lkXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5wcm9ncmVzcykge1xuICAgICAgaW5wcm9ncmVzcyA9ICd3YWl0aW5nJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5wcm9ncmVzcyA9IHRydWU7XG4gICAgdmFyIGNoYW5nZXNPcHRzID0gcGljayhvcHRzLCBbXG4gICAgICAnc3R5bGUnLCAnaW5jbHVkZV9kb2NzJywgJ2F0dGFjaG1lbnRzJywgJ2NvbmZsaWN0cycsICdmaWx0ZXInLFxuICAgICAgJ2RvY19pZHMnLCAndmlldycsICdzaW5jZScsICdxdWVyeV9wYXJhbXMnLCAnYmluYXJ5JywgJ3JldHVybl9kb2NzJ1xuICAgIF0pO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xuICAgICAgaW5wcm9ncmVzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRiLmNoYW5nZXMoY2hhbmdlc09wdHMpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoYykge1xuICAgICAgaWYgKGMuc2VxID4gb3B0cy5zaW5jZSAmJiAhb3B0cy5jYW5jZWxsZWQpIHtcbiAgICAgICAgb3B0cy5zaW5jZSA9IGMuc2VxO1xuICAgICAgICBvcHRzLm9uQ2hhbmdlKGMpO1xuICAgICAgfVxuICAgIH0pLm9uKCdjb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbnByb2dyZXNzID09PSAnd2FpdGluZycpIHtcbiAgICAgICAgaW1tZWRpYXRlKGV2ZW50RnVuY3Rpb24pO1xuICAgICAgfVxuICAgICAgaW5wcm9ncmVzcyA9IGZhbHNlO1xuICAgIH0pLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuICB9XG4gIHRoaXMuX2xpc3RlbmVyc1tpZF0gPSBldmVudEZ1bmN0aW9uO1xuICB0aGlzLm9uKGRiTmFtZSwgZXZlbnRGdW5jdGlvbik7XG59O1xuXG5DaGFuZ2VzLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChkYk5hbWUsIGlkKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIShpZCBpbiB0aGlzLl9saXN0ZW5lcnMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEVFLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lci5jYWxsKHRoaXMsIGRiTmFtZSxcbiAgICB0aGlzLl9saXN0ZW5lcnNbaWRdKTtcbiAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tpZF07XG59O1xuXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5DaGFuZ2VzLnByb3RvdHlwZS5ub3RpZnlMb2NhbFdpbmRvd3MgPSBmdW5jdGlvbiAoZGJOYW1lKSB7XG4gIC8vZG8gYSB1c2VsZXNzIGNoYW5nZSBvbiBhIHN0b3JhZ2UgdGhpbmdcbiAgLy9pbiBvcmRlciB0byBnZXQgb3RoZXIgd2luZG93cydzIGxpc3RlbmVycyB0byBhY3RpdmF0ZVxuICBpZiAoaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICBsb2NhbFN0b3JhZ2VbZGJOYW1lXSA9IChsb2NhbFN0b3JhZ2VbZGJOYW1lXSA9PT0gXCJhXCIpID8gXCJiXCIgOiBcImFcIjtcbiAgfVxufTtcblxuQ2hhbmdlcy5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKGRiTmFtZSkge1xuICB0aGlzLmVtaXQoZGJOYW1lKTtcbiAgdGhpcy5ub3RpZnlMb2NhbFdpbmRvd3MoZGJOYW1lKTtcbn07XG5cbmZ1bmN0aW9uIGd1YXJkZWRDb25zb2xlKG1ldGhvZCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICB2YXIgbWF4VGltZW91dCA9IDYwMDAwMDsgLy8gSGFyZC1jb2RlZCBkZWZhdWx0IG9mIDEwIG1pbnV0ZXNcbiAgbWluID0gcGFyc2VJbnQobWluLCAxMCkgfHwgMDtcbiAgbWF4ID0gcGFyc2VJbnQobWF4LCAxMCk7XG4gIGlmIChtYXggIT09IG1heCB8fCBtYXggPD0gbWluKSB7XG4gICAgbWF4ID0gKG1pbiB8fCAxKSA8PCAxOyAvL2RvdWJsaW5nXG4gIH0gZWxzZSB7XG4gICAgbWF4ID0gbWF4ICsgMTtcbiAgfVxuICAvLyBJbiBvcmRlciB0byBub3QgZXhjZWVkIG1heFRpbWVvdXQsIHBpY2sgYSByYW5kb20gdmFsdWUgYmV0d2VlbiBoYWxmIG9mIG1heFRpbWVvdXQgYW5kIG1heFRpbWVvdXRcbiAgaWYgKG1heCA+IG1heFRpbWVvdXQpIHtcbiAgICBtaW4gPSBtYXhUaW1lb3V0ID4+IDE7IC8vIGRpdmlkZSBieSB0d29cbiAgICBtYXggPSBtYXhUaW1lb3V0O1xuICB9XG4gIHZhciByYXRpbyA9IE1hdGgucmFuZG9tKCk7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcblxuICByZXR1cm4gfn4ocmFuZ2UgKiByYXRpbyArIG1pbik7IC8vIH5+IGNvZXJjZXMgdG8gYW4gaW50LCBidXQgZmFzdC5cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEJhY2tPZmYobWluKSB7XG4gIHZhciBtYXggPSAwO1xuICBpZiAoIW1pbikge1xuICAgIG1heCA9IDIwMDA7XG4gIH1cbiAgcmV0dXJuIHJhbmRvbU51bWJlcihtaW4sIG1heCk7XG59XG5cbi8vIGRlc2lnbmVkIHRvIGdpdmUgaW5mbyB0byBicm93c2VyIHVzZXJzLCB3aG8gYXJlIGRpc3R1cmJlZFxuLy8gd2hlbiB0aGV5IHNlZSBodHRwIGVycm9ycyBpbiB0aGUgY29uc29sZVxuZnVuY3Rpb24gZXhwbGFpbkVycm9yKHN0YXR1cywgc3RyKSB7XG4gIGd1YXJkZWRDb25zb2xlKCdpbmZvJywgJ1RoZSBhYm92ZSAnICsgc3RhdHVzICsgJyBpcyB0b3RhbGx5IG5vcm1hbC4gJyArIHN0cik7XG59XG5cbnZhciBhc3NpZ247XG57XG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG4gIH0gZWxzZSB7XG4gICAgLy8gbGl0ZSBPYmplY3QuYXNzaWduIHBvbHlmaWxsIGJhc2VkIG9uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICAgIGFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkgeyAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG87XG4gICAgfTtcbiAgfVxufVxuXG52YXIgJGluamVjdF9PYmplY3RfYXNzaWduID0gYXNzaWduO1xuXG5pbmhlcml0cyhQb3VjaEVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIFBvdWNoRXJyb3Ioc3RhdHVzLCBlcnJvciwgcmVhc29uKSB7XG4gIEVycm9yLmNhbGwodGhpcywgcmVhc29uKTtcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMubmFtZSA9IGVycm9yO1xuICB0aGlzLm1lc3NhZ2UgPSByZWFzb247XG4gIHRoaXMuZXJyb3IgPSB0cnVlO1xufVxuXG5Qb3VjaEVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgcmVhc29uOiB0aGlzLnJlYXNvblxuICB9KTtcbn07XG5cbnZhciBVTkFVVEhPUklaRUQgPSBuZXcgUG91Y2hFcnJvcig0MDEsICd1bmF1dGhvcml6ZWQnLCBcIk5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0LlwiKTtcbnZhciBNSVNTSU5HX0JVTEtfRE9DUyA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2JhZF9yZXF1ZXN0JywgXCJNaXNzaW5nIEpTT04gbGlzdCBvZiAnZG9jcydcIik7XG52YXIgTUlTU0lOR19ET0MgPSBuZXcgUG91Y2hFcnJvcig0MDQsICdub3RfZm91bmQnLCAnbWlzc2luZycpO1xudmFyIFJFVl9DT05GTElDVCA9IG5ldyBQb3VjaEVycm9yKDQwOSwgJ2NvbmZsaWN0JywgJ0RvY3VtZW50IHVwZGF0ZSBjb25mbGljdCcpO1xudmFyIElOVkFMSURfSUQgPSBuZXcgUG91Y2hFcnJvcig0MDAsICdiYWRfcmVxdWVzdCcsICdfaWQgZmllbGQgbXVzdCBjb250YWluIGEgc3RyaW5nJyk7XG52YXIgTUlTU0lOR19JRCA9IG5ldyBQb3VjaEVycm9yKDQxMiwgJ21pc3NpbmdfaWQnLCAnX2lkIGlzIHJlcXVpcmVkIGZvciBwdXRzJyk7XG52YXIgUkVTRVJWRURfSUQgPSBuZXcgUG91Y2hFcnJvcig0MDAsICdiYWRfcmVxdWVzdCcsICdPbmx5IHJlc2VydmVkIGRvY3VtZW50IGlkcyBtYXkgc3RhcnQgd2l0aCB1bmRlcnNjb3JlLicpO1xudmFyIE5PVF9PUEVOID0gbmV3IFBvdWNoRXJyb3IoNDEyLCAncHJlY29uZGl0aW9uX2ZhaWxlZCcsICdEYXRhYmFzZSBub3Qgb3BlbicpO1xudmFyIFVOS05PV05fRVJST1IgPSBuZXcgUG91Y2hFcnJvcig1MDAsICd1bmtub3duX2Vycm9yJywgJ0RhdGFiYXNlIGVuY291bnRlcmVkIGFuIHVua25vd24gZXJyb3InKTtcbnZhciBCQURfQVJHID0gbmV3IFBvdWNoRXJyb3IoNTAwLCAnYmFkYXJnJywgJ1NvbWUgcXVlcnkgYXJndW1lbnQgaXMgaW52YWxpZCcpO1xudmFyIElOVkFMSURfUkVRVUVTVCA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2ludmFsaWRfcmVxdWVzdCcsICdSZXF1ZXN0IHdhcyBpbnZhbGlkJyk7XG52YXIgUVVFUllfUEFSU0VfRVJST1IgPSBuZXcgUG91Y2hFcnJvcig0MDAsICdxdWVyeV9wYXJzZV9lcnJvcicsICdTb21lIHF1ZXJ5IHBhcmFtZXRlciBpcyBpbnZhbGlkJyk7XG52YXIgRE9DX1ZBTElEQVRJT04gPSBuZXcgUG91Y2hFcnJvcig1MDAsICdkb2NfdmFsaWRhdGlvbicsICdCYWQgc3BlY2lhbCBkb2N1bWVudCBtZW1iZXInKTtcbnZhciBCQURfUkVRVUVTVCA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2JhZF9yZXF1ZXN0JywgJ1NvbWV0aGluZyB3cm9uZyB3aXRoIHRoZSByZXF1ZXN0Jyk7XG52YXIgTk9UX0FOX09CSkVDVCA9IG5ldyBQb3VjaEVycm9yKDQwMCwgJ2JhZF9yZXF1ZXN0JywgJ0RvY3VtZW50IG11c3QgYmUgYSBKU09OIG9iamVjdCcpO1xudmFyIERCX01JU1NJTkcgPSBuZXcgUG91Y2hFcnJvcig0MDQsICdub3RfZm91bmQnLCAnRGF0YWJhc2Ugbm90IGZvdW5kJyk7XG52YXIgSURCX0VSUk9SID0gbmV3IFBvdWNoRXJyb3IoNTAwLCAnaW5kZXhlZF9kYl93ZW50X2JhZCcsICd1bmtub3duJyk7XG52YXIgV1NRX0VSUk9SID0gbmV3IFBvdWNoRXJyb3IoNTAwLCAnd2ViX3NxbF93ZW50X2JhZCcsICd1bmtub3duJyk7XG52YXIgTERCX0VSUk9SID0gbmV3IFBvdWNoRXJyb3IoNTAwLCAnbGV2ZWxEQl93ZW50X3dlbnRfYmFkJywgJ3Vua25vd24nKTtcbnZhciBGT1JCSURERU4gPSBuZXcgUG91Y2hFcnJvcig0MDMsICdmb3JiaWRkZW4nLCAnRm9yYmlkZGVuIGJ5IGRlc2lnbiBkb2MgdmFsaWRhdGVfZG9jX3VwZGF0ZSBmdW5jdGlvbicpO1xudmFyIElOVkFMSURfUkVWID0gbmV3IFBvdWNoRXJyb3IoNDAwLCAnYmFkX3JlcXVlc3QnLCAnSW52YWxpZCByZXYgZm9ybWF0Jyk7XG52YXIgRklMRV9FWElTVFMgPSBuZXcgUG91Y2hFcnJvcig0MTIsICdmaWxlX2V4aXN0cycsICdUaGUgZGF0YWJhc2UgY291bGQgbm90IGJlIGNyZWF0ZWQsIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzLicpO1xudmFyIE1JU1NJTkdfU1RVQiA9IG5ldyBQb3VjaEVycm9yKDQxMiwgJ21pc3Npbmdfc3R1YicsICdBIHByZS1leGlzdGluZyBhdHRhY2htZW50IHN0dWIgd2FzblxcJ3QgZm91bmQnKTtcbnZhciBJTlZBTElEX1VSTCA9IG5ldyBQb3VjaEVycm9yKDQxMywgJ2ludmFsaWRfdXJsJywgJ1Byb3ZpZGVkIFVSTCBpcyBpbnZhbGlkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yKGVycm9yLCByZWFzb24pIHtcbiAgZnVuY3Rpb24gQ3VzdG9tUG91Y2hFcnJvcihyZWFzb24pIHtcbiAgICAvLyBpbmhlcml0IGVycm9yIHByb3BlcnRpZXMgZnJvbSBvdXIgcGFyZW50IGVycm9yIG1hbnVhbGx5XG4gICAgLy8gc28gYXMgdG8gYWxsb3cgcHJvcGVyIEpTT04gcGFyc2luZy5cbiAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgdmFyIG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXJyb3IpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBlcnJvcltuYW1lc1tpXV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tuYW1lc1tpXV0gPSBlcnJvcltuYW1lc1tpXV07XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4gICAgaWYgKHJlYXNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB9XG4gIH1cbiAgQ3VzdG9tUG91Y2hFcnJvci5wcm90b3R5cGUgPSBQb3VjaEVycm9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIG5ldyBDdXN0b21Qb3VjaEVycm9yKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRXJyb3JGcm9tUmVzcG9uc2UoZXJyKSB7XG5cbiAgaWYgKHR5cGVvZiBlcnIgIT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGRhdGEgPSBlcnI7XG4gICAgZXJyID0gVU5LTk9XTl9FUlJPUjtcbiAgICBlcnIuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoJ2Vycm9yJyBpbiBlcnIgJiYgZXJyLmVycm9yID09PSAnY29uZmxpY3QnKSB7XG4gICAgZXJyLm5hbWUgPSAnY29uZmxpY3QnO1xuICAgIGVyci5zdGF0dXMgPSA0MDk7XG4gIH1cblxuICBpZiAoISgnbmFtZScgaW4gZXJyKSkge1xuICAgIGVyci5uYW1lID0gZXJyLmVycm9yIHx8ICd1bmtub3duJztcbiAgfVxuXG4gIGlmICghKCdzdGF0dXMnIGluIGVycikpIHtcbiAgICBlcnIuc3RhdHVzID0gNTAwO1xuICB9XG5cbiAgaWYgKCEoJ21lc3NhZ2UnIGluIGVycikpIHtcbiAgICBlcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlIHx8IGVyci5yZWFzb247XG4gIH1cblxuICByZXR1cm4gZXJyO1xufVxuXG5mdW5jdGlvbiB0cnlGaWx0ZXIoZmlsdGVyLCBkb2MsIHJlcSkge1xuICB0cnkge1xuICAgIHJldHVybiAhZmlsdGVyKGRvYywgcmVxKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdmFyIG1zZyA9ICdGaWx0ZXIgZnVuY3Rpb24gdGhyZXc6ICcgKyBlcnIudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoQkFEX1JFUVVFU1QsIG1zZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ2hhbmdlKG9wdHMpIHtcbiAgdmFyIHJlcSA9IHt9O1xuICB2YXIgaGFzRmlsdGVyID0gb3B0cy5maWx0ZXIgJiYgdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnZnVuY3Rpb24nO1xuICByZXEucXVlcnkgPSBvcHRzLnF1ZXJ5X3BhcmFtcztcblxuICByZXR1cm4gZnVuY3Rpb24gZmlsdGVyKGNoYW5nZSkge1xuICAgIGlmICghY2hhbmdlLmRvYykge1xuICAgICAgLy8gQ1NHIHNlbmRzIGV2ZW50cyBvbiB0aGUgY2hhbmdlcyBmZWVkIHRoYXQgZG9uJ3QgaGF2ZSBkb2N1bWVudHMsXG4gICAgICAvLyB0aGlzIGhhY2sgbWFrZXMgYSB3aG9sZSBsb3Qgb2YgZXhpc3RpbmcgY29kZSByb2J1c3QuXG4gICAgICBjaGFuZ2UuZG9jID0ge307XG4gICAgfVxuXG4gICAgdmFyIGZpbHRlclJldHVybiA9IGhhc0ZpbHRlciAmJiB0cnlGaWx0ZXIob3B0cy5maWx0ZXIsIGNoYW5nZS5kb2MsIHJlcSk7XG5cbiAgICBpZiAodHlwZW9mIGZpbHRlclJldHVybiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJSZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlclJldHVybikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghb3B0cy5pbmNsdWRlX2RvY3MpIHtcbiAgICAgIGRlbGV0ZSBjaGFuZ2UuZG9jO1xuICAgIH0gZWxzZSBpZiAoIW9wdHMuYXR0YWNobWVudHMpIHtcbiAgICAgIGZvciAodmFyIGF0dCBpbiBjaGFuZ2UuZG9jLl9hdHRhY2htZW50cykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoY2hhbmdlLmRvYy5fYXR0YWNobWVudHMuaGFzT3duUHJvcGVydHkoYXR0KSkge1xuICAgICAgICAgIGNoYW5nZS5kb2MuX2F0dGFjaG1lbnRzW2F0dF0uc3R1YiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJycykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgcmVzID0gcmVzLmNvbmNhdChhcnJzW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vLyBzaGltIGZvciBGdW5jdGlvbi5wcm90b3R5cGUubmFtZSxcblxuLy8gRGV0ZXJtaW5lIGlkIGFuIElEIGlzIHZhbGlkXG4vLyAgIC0gaW52YWxpZCBJRHMgYmVnaW4gd2l0aCBhbiB1bmRlcmVzY29yZSB0aGF0IGRvZXMgbm90IGJlZ2luICdfZGVzaWduJyBvclxuLy8gICAgICdfbG9jYWwnXG4vLyAgIC0gYW55IG90aGVyIHN0cmluZyB2YWx1ZSBpcyBhIHZhbGlkIGlkXG4vLyBSZXR1cm5zIHRoZSBzcGVjaWZpYyBlcnJvciBvYmplY3QgZm9yIGVhY2ggY2FzZVxuZnVuY3Rpb24gaW52YWxpZElkRXJyb3IoaWQpIHtcbiAgdmFyIGVycjtcbiAgaWYgKCFpZCkge1xuICAgIGVyciA9IGNyZWF0ZUVycm9yKE1JU1NJTkdfSUQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICBlcnIgPSBjcmVhdGVFcnJvcihJTlZBTElEX0lEKTtcbiAgfSBlbHNlIGlmICgvXl8vLnRlc3QoaWQpICYmICEoL15fKGRlc2lnbnxsb2NhbCkvKS50ZXN0KGlkKSkge1xuICAgIGVyciA9IGNyZWF0ZUVycm9yKFJFU0VSVkVEX0lEKTtcbiAgfVxuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG5cbi8vIENoZWNrcyBpZiBhIFBvdWNoREIgb2JqZWN0IGlzIFwicmVtb3RlXCIgb3Igbm90LiBUaGlzIGlzXG5cbmZ1bmN0aW9uIGlzUmVtb3RlKGRiKSB7XG4gIGlmICh0eXBlb2YgZGIuX3JlbW90ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGRiLl9yZW1vdGU7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHR5cGVvZiBkYi50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZ3VhcmRlZENvbnNvbGUoJ3dhcm4nLFxuICAgICAgJ2RiLnR5cGUoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArXG4gICAgICAnYSBmdXR1cmUgdmVyc2lvbiBvZiBQb3VjaERCJyk7XG4gICAgcmV0dXJuIGRiLnR5cGUoKSA9PT0gJ2h0dHAnO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuZXJDb3VudChlZSwgdHlwZSkge1xuICByZXR1cm4gJ2xpc3RlbmVyQ291bnQnIGluIGVlID8gZWUubGlzdGVuZXJDb3VudCh0eXBlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFRS5saXN0ZW5lckNvdW50KGVlLCB0eXBlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEZXNpZ25Eb2NGdW5jdGlvbk5hbWUocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcGFydHMgPSBzLnNwbGl0KCcvJyk7XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gcGFydHM7XG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBbcywgc107XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShzKSB7XG4gIHZhciBub3JtYWxpemVkID0gcGFyc2VEZXNpZ25Eb2NGdW5jdGlvbk5hbWUocyk7XG4gIHJldHVybiBub3JtYWxpemVkID8gbm9ybWFsaXplZC5qb2luKCcvJykgOiBudWxsO1xufVxuXG4vLyBvcmlnaW5hbGx5IHBhcnNlVXJpIDEuMi4yLCBub3cgcGF0Y2hlZCBieSB1c1xuLy8gKGMpIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuLy8gTUlUIExpY2Vuc2VcbnZhciBrZXlzID0gW1wic291cmNlXCIsIFwicHJvdG9jb2xcIiwgXCJhdXRob3JpdHlcIiwgXCJ1c2VySW5mb1wiLCBcInVzZXJcIiwgXCJwYXNzd29yZFwiLFxuICAgIFwiaG9zdFwiLCBcInBvcnRcIiwgXCJyZWxhdGl2ZVwiLCBcInBhdGhcIiwgXCJkaXJlY3RvcnlcIiwgXCJmaWxlXCIsIFwicXVlcnlcIiwgXCJhbmNob3JcIl07XG52YXIgcU5hbWUgPVwicXVlcnlLZXlcIjtcbnZhciBxUGFyc2VyID0gLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nO1xuXG4vLyB1c2UgdGhlIFwibG9vc2VcIiBwYXJzZXJcbi8qIGVzbGludCBtYXhsZW46IDAsIG5vLXVzZWxlc3MtZXNjYXBlOiAwICovXG52YXIgcGFyc2VyID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoW146XFwvPyMuXSspOik/KD86XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPyhbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG5mdW5jdGlvbiBwYXJzZVVyaShzdHIpIHtcbiAgdmFyIG0gPSBwYXJzZXIuZXhlYyhzdHIpO1xuICB2YXIgdXJpID0ge307XG4gIHZhciBpID0gMTQ7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciB2YWx1ZSA9IG1baV0gfHwgXCJcIjtcbiAgICB2YXIgZW5jb2RlZCA9IFsndXNlcicsICdwYXNzd29yZCddLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgdXJpW2tleV0gPSBlbmNvZGVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgdXJpW3FOYW1lXSA9IHt9O1xuICB1cmlba2V5c1sxMl1dLnJlcGxhY2UocVBhcnNlciwgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICBpZiAoJDEpIHtcbiAgICAgIHVyaVtxTmFtZV1bJDFdID0gJDI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdXJpO1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vYWxleGRhdmlkL3Njb3BlLWV2YWwgdjAuMC4zXG4vLyAoc291cmNlOiBodHRwczovL3VucGtnLmNvbS9zY29wZS1ldmFsQDAuMC4zL3Njb3BlX2V2YWwuanMpXG4vLyBUaGlzIGlzIGJhc2ljYWxseSBqdXN0IGEgd3JhcHBlciBhcm91bmQgbmV3IEZ1bmN0aW9uKClcblxuZnVuY3Rpb24gc2NvcGVFdmFsKHNvdXJjZSwgc2NvcGUpIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gc2NvcGUpIHtcbiAgICBpZiAoc2NvcGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YWx1ZXMucHVzaChzY29wZVtrZXldKTtcbiAgICB9XG4gIH1cbiAga2V5cy5wdXNoKHNvdXJjZSk7XG4gIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBrZXlzKS5hcHBseShudWxsLCB2YWx1ZXMpO1xufVxuXG4vLyB0aGlzIGlzIGVzc2VudGlhbGx5IHRoZSBcInVwZGF0ZSBzdWdhclwiIGZ1bmN0aW9uIGZyb20gZGFsZWhhcnZleS9wb3VjaGRiIzEzODhcbi8vIHRoZSBkaWZmRnVuIHRlbGxzIHVzIHdoYXQgZGVsdGEgdG8gYXBwbHkgdG8gdGhlIGRvYy4gIGl0IGVpdGhlciByZXR1cm5zXG4vLyB0aGUgZG9jLCBvciBmYWxzZSBpZiBpdCBkb2Vzbid0IG5lZWQgdG8gZG8gYW4gdXBkYXRlIGFmdGVyIGFsbFxuZnVuY3Rpb24gdXBzZXJ0KGRiLCBkb2NJZCwgZGlmZkZ1bikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuICAgIGRiLmdldChkb2NJZCwgZnVuY3Rpb24gKGVyciwgZG9jKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChlcnIuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZG9jID0ge307XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSB1c2VyIG1pZ2h0IGNoYW5nZSB0aGUgX3Jldiwgc28gc2F2ZSBpdCBmb3IgcG9zdGVyaXR5XG4gICAgICB2YXIgZG9jUmV2ID0gZG9jLl9yZXY7XG4gICAgICB2YXIgbmV3RG9jID0gZGlmZkZ1bihkb2MpO1xuXG4gICAgICBpZiAoIW5ld0RvYykge1xuICAgICAgICAvLyBpZiB0aGUgZGlmZkZ1biByZXR1cm5zIGZhbHN5LCB3ZSBzaG9ydC1jaXJjdWl0IGFzXG4gICAgICAgIC8vIGFuIG9wdGltaXphdGlvblxuICAgICAgICByZXR1cm4gZnVsZmlsbCh7dXBkYXRlZDogZmFsc2UsIHJldjogZG9jUmV2fSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVzZXJzIGFyZW4ndCBhbGxvd2VkIHRvIG1vZGlmeSB0aGVzZSB2YWx1ZXMsXG4gICAgICAvLyBzbyByZXNldCB0aGVtIGhlcmVcbiAgICAgIG5ld0RvYy5faWQgPSBkb2NJZDtcbiAgICAgIG5ld0RvYy5fcmV2ID0gZG9jUmV2O1xuICAgICAgZnVsZmlsbCh0cnlBbmRQdXQoZGIsIG5ld0RvYywgZGlmZkZ1bikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJ5QW5kUHV0KGRiLCBkb2MsIGRpZmZGdW4pIHtcbiAgcmV0dXJuIGRiLnB1dChkb2MpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVkOiB0cnVlLFxuICAgICAgcmV2OiByZXMucmV2XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKGVyci5zdGF0dXMgIT09IDQwOSkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICByZXR1cm4gdXBzZXJ0KGRiLCBkb2MuX2lkLCBkaWZmRnVuKTtcbiAgfSk7XG59XG5cbnZhciB0aGlzQXRvYiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIGF0b2Ioc3RyKTtcbn07XG5cbnZhciB0aGlzQnRvYSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIGJ0b2Eoc3RyKTtcbn07XG5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3RvciAoZS5nLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBBbmRyb2lkIDwgNC40KS5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgLyogZ2xvYmFsIEJsb2JCdWlsZGVyLE1TQmxvYkJ1aWxkZXIsTW96QmxvYkJ1aWxkZXIsV2ViS2l0QmxvYkJ1aWxkZXIgKi9cbiAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgIT09IFwiVHlwZUVycm9yXCIpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICAgIHZhciBCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDpcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBNU0Jsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1TQmxvYkJ1aWxkZXIgOlxuICAgICAgICAgICAgICAgICAgdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDpcbiAgICAgICAgICAgICAgICAgIFdlYktpdEJsb2JCdWlsZGVyO1xuICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBidWlsZGVyLmFwcGVuZChwYXJ0c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IocHJvcGVydGllcy50eXBlKTtcbiAgfVxufVxuXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG5mdW5jdGlvbiBiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGJpbikge1xuICB2YXIgbGVuZ3RoID0gYmluLmxlbmd0aDtcbiAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycltpXSA9IGJpbi5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5cbmZ1bmN0aW9uIGJpblN0cmluZ1RvQmx1ZmZlcihiaW5TdHJpbmcsIHR5cGUpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2IoW2JpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluU3RyaW5nKV0sIHt0eXBlOiB0eXBlfSk7XG59XG5cbmZ1bmN0aW9uIGI2NFRvQmx1ZmZlcihiNjQsIHR5cGUpIHtcbiAgcmV0dXJuIGJpblN0cmluZ1RvQmx1ZmZlcih0aGlzQXRvYihiNjQpLCB0eXBlKTtcbn1cblxuLy9DYW4ndCBmaW5kIG9yaWdpbmFsIHBvc3QsIGJ1dCB0aGlzIGlzIGNsb3NlXG4vL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjk2NTEwNy8gKGNvbnRpbnVlcyBvbiBuZXh0IGxpbmUpXG4vL2NvbnZlcnRpbmctYmV0d2Vlbi1zdHJpbmdzLWFuZC1hcnJheWJ1ZmZlcnNcbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcoYnVmZmVyKSB7XG4gIHZhciBiaW5hcnkgPSAnJztcbiAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgdmFyIGxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGJpbmFyeTtcbn1cblxuLy8gc2hpbSBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGl0XG5mdW5jdGlvbiByZWFkQXNCaW5hcnlTdHJpbmcoYmxvYiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHZhciBoYXNCaW5hcnlTdHJpbmcgPSB0eXBlb2YgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyA9PT0gJ2Z1bmN0aW9uJztcbiAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdCB8fCAnJztcbiAgICBpZiAoaGFzQmluYXJ5U3RyaW5nKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG4gICAgY2FsbGJhY2soYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhyZXN1bHQpKTtcbiAgfTtcbiAgaWYgKGhhc0JpbmFyeVN0cmluZykge1xuICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoYmxvYik7XG4gIH0gZWxzZSB7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJsb2JUb0JpbmFyeVN0cmluZyhibG9iT3JCdWZmZXIsIGNhbGxiYWNrKSB7XG4gIHJlYWRBc0JpbmFyeVN0cmluZyhibG9iT3JCdWZmZXIsIGZ1bmN0aW9uIChiaW4pIHtcbiAgICBjYWxsYmFjayhiaW4pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYmxvYlRvQmFzZTY0KGJsb2JPckJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgYmxvYlRvQmluYXJ5U3RyaW5nKGJsb2JPckJ1ZmZlciwgZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgIGNhbGxiYWNrKHRoaXNCdG9hKGJhc2U2NCkpO1xuICB9KTtcbn1cblxuLy8gc2ltcGxpZmllZCBBUEkuIHVuaXZlcnNhbCBicm93c2VyIHN1cHBvcnQgaXMgYXNzdW1lZFxuZnVuY3Rpb24gcmVhZEFzQXJyYXlCdWZmZXIoYmxvYiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciByZXN1bHQgPSBlLnRhcmdldC5yZXN1bHQgfHwgbmV3IEFycmF5QnVmZmVyKDApO1xuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH07XG4gIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbn1cblxuLy8gdGhpcyBpcyBub3QgdXNlZCBpbiB0aGUgYnJvd3NlclxuXG52YXIgc2V0SW1tZWRpYXRlU2hpbSA9IHNlbGYuc2V0SW1tZWRpYXRlIHx8IHNlbGYuc2V0VGltZW91dDtcbnZhciBNRDVfQ0hVTktfU0laRSA9IDMyNzY4O1xuXG5mdW5jdGlvbiByYXdUb0Jhc2U2NChyYXcpIHtcbiAgcmV0dXJuIHRoaXNCdG9hKHJhdyk7XG59XG5cbmZ1bmN0aW9uIHNsaWNlQmxvYihibG9iLCBzdGFydCwgZW5kKSB7XG4gIGlmIChibG9iLndlYmtpdFNsaWNlKSB7XG4gICAgcmV0dXJuIGJsb2Iud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH1cbiAgcmV0dXJuIGJsb2Iuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJsb2IoYnVmZmVyLCBibG9iLCBzdGFydCwgZW5kLCBjYWxsYmFjaykge1xuICBpZiAoc3RhcnQgPiAwIHx8IGVuZCA8IGJsb2Iuc2l6ZSkge1xuICAgIC8vIG9ubHkgc2xpY2UgYmxvYiBpZiB3ZSByZWFsbHkgbmVlZCB0b1xuICAgIGJsb2IgPSBzbGljZUJsb2IoYmxvYiwgc3RhcnQsIGVuZCk7XG4gIH1cbiAgcmVhZEFzQXJyYXlCdWZmZXIoYmxvYiwgZnVuY3Rpb24gKGFycmF5QnVmZmVyKSB7XG4gICAgYnVmZmVyLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFN0cmluZyhidWZmZXIsIHN0cmluZywgc3RhcnQsIGVuZCwgY2FsbGJhY2spIHtcbiAgaWYgKHN0YXJ0ID4gMCB8fCBlbmQgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgLy8gb25seSBjcmVhdGUgYSBzdWJzdHJpbmcgaWYgd2UgcmVhbGx5IG5lZWQgdG9cbiAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICB9XG4gIGJ1ZmZlci5hcHBlbmRCaW5hcnkoc3RyaW5nKTtcbiAgY2FsbGJhY2soKTtcbn1cblxuZnVuY3Rpb24gYmluYXJ5TWQ1KGRhdGEsIGNhbGxiYWNrKSB7XG4gIHZhciBpbnB1dElzU3RyaW5nID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnO1xuICB2YXIgbGVuID0gaW5wdXRJc1N0cmluZyA/IGRhdGEubGVuZ3RoIDogZGF0YS5zaXplO1xuICB2YXIgY2h1bmtTaXplID0gTWF0aC5taW4oTUQ1X0NIVU5LX1NJWkUsIGxlbik7XG4gIHZhciBjaHVua3MgPSBNYXRoLmNlaWwobGVuIC8gY2h1bmtTaXplKTtcbiAgdmFyIGN1cnJlbnRDaHVuayA9IDA7XG4gIHZhciBidWZmZXIgPSBpbnB1dElzU3RyaW5nID8gbmV3IE1kNSgpIDogbmV3IE1kNS5BcnJheUJ1ZmZlcigpO1xuXG4gIHZhciBhcHBlbmQgPSBpbnB1dElzU3RyaW5nID8gYXBwZW5kU3RyaW5nIDogYXBwZW5kQmxvYjtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHNldEltbWVkaWF0ZVNoaW0obG9hZE5leHRDaHVuayk7XG4gIH1cblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIHZhciByYXcgPSBidWZmZXIuZW5kKHRydWUpO1xuICAgIHZhciBiYXNlNjQgPSByYXdUb0Jhc2U2NChyYXcpO1xuICAgIGNhbGxiYWNrKGJhc2U2NCk7XG4gICAgYnVmZmVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWROZXh0Q2h1bmsoKSB7XG4gICAgdmFyIHN0YXJ0ID0gY3VycmVudENodW5rICogY2h1bmtTaXplO1xuICAgIHZhciBlbmQgPSBzdGFydCArIGNodW5rU2l6ZTtcbiAgICBjdXJyZW50Q2h1bmsrKztcbiAgICBpZiAoY3VycmVudENodW5rIDwgY2h1bmtzKSB7XG4gICAgICBhcHBlbmQoYnVmZmVyLCBkYXRhLCBzdGFydCwgZW5kLCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kKGJ1ZmZlciwgZGF0YSwgc3RhcnQsIGVuZCwgZG9uZSk7XG4gICAgfVxuICB9XG4gIGxvYWROZXh0Q2h1bmsoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nTWQ1KHN0cmluZykge1xuICByZXR1cm4gTWQ1Lmhhc2goc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmV2KGRvYywgZGV0ZXJtaW5pc3RpY19yZXZzKSB7XG4gIHZhciBjbG9uZWREb2MgPSBjbG9uZShkb2MpO1xuICBpZiAoIWRldGVybWluaXN0aWNfcmV2cykge1xuICAgIHJldHVybiB2NCgpLnJlcGxhY2UoLy0vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBkZWxldGUgY2xvbmVkRG9jLl9yZXZfdHJlZTtcbiAgcmV0dXJuIHN0cmluZ01kNShKU09OLnN0cmluZ2lmeShjbG9uZWREb2MpKTtcbn1cblxudmFyIHV1aWQgPSB2NDsgLy8gbWltaWMgb2xkIGltcG9ydCwgb25seSB2NCBpcyBldmVyIHVzZWQgZWxzZXdoZXJlXG5cbi8vIFdlIGZldGNoIGFsbCBsZWFmcyBvZiB0aGUgcmV2aXNpb24gdHJlZSwgYW5kIHNvcnQgdGhlbSBiYXNlZCBvbiB0cmVlIGxlbmd0aFxuLy8gYW5kIHdoZXRoZXIgdGhleSB3ZXJlIGRlbGV0ZWQsIHVuZGVsZXRlZCBkb2N1bWVudHMgd2l0aCB0aGUgbG9uZ2VzdCByZXZpc2lvblxuLy8gdHJlZSAobW9zdCBlZGl0cykgd2luXG4vLyBUaGUgZmluYWwgc29ydCBhbGdvcml0aG0gaXMgc2xpZ2h0bHkgZG9jdW1lbnRlZCBpbiBhIHNpZGViYXIgaGVyZTpcbi8vIGh0dHA6Ly9ndWlkZS5jb3VjaGRiLm9yZy9kcmFmdC9jb25mbGljdHMuaHRtbFxuZnVuY3Rpb24gd2lubmluZ1JldihtZXRhZGF0YSkge1xuICB2YXIgd2lubmluZ0lkO1xuICB2YXIgd2lubmluZ1BvcztcbiAgdmFyIHdpbm5pbmdEZWxldGVkO1xuICB2YXIgdG9WaXNpdCA9IG1ldGFkYXRhLnJldl90cmVlLnNsaWNlKCk7XG4gIHZhciBub2RlO1xuICB3aGlsZSAoKG5vZGUgPSB0b1Zpc2l0LnBvcCgpKSkge1xuICAgIHZhciB0cmVlID0gbm9kZS5pZHM7XG4gICAgdmFyIGJyYW5jaGVzID0gdHJlZVsyXTtcbiAgICB2YXIgcG9zID0gbm9kZS5wb3M7XG4gICAgaWYgKGJyYW5jaGVzLmxlbmd0aCkgeyAvLyBub24tbGVhZlxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJyYW5jaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRvVmlzaXQucHVzaCh7cG9zOiBwb3MgKyAxLCBpZHM6IGJyYW5jaGVzW2ldfSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGRlbGV0ZWQgPSAhIXRyZWVbMV0uZGVsZXRlZDtcbiAgICB2YXIgaWQgPSB0cmVlWzBdO1xuICAgIC8vIHNvcnQgYnkgZGVsZXRlZCwgdGhlbiBwb3MsIHRoZW4gaWRcbiAgICBpZiAoIXdpbm5pbmdJZCB8fCAod2lubmluZ0RlbGV0ZWQgIT09IGRlbGV0ZWQgPyB3aW5uaW5nRGVsZXRlZCA6XG4gICAgICAgIHdpbm5pbmdQb3MgIT09IHBvcyA/IHdpbm5pbmdQb3MgPCBwb3MgOiB3aW5uaW5nSWQgPCBpZCkpIHtcbiAgICAgIHdpbm5pbmdJZCA9IGlkO1xuICAgICAgd2lubmluZ1BvcyA9IHBvcztcbiAgICAgIHdpbm5pbmdEZWxldGVkID0gZGVsZXRlZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2lubmluZ1BvcyArICctJyArIHdpbm5pbmdJZDtcbn1cblxuLy8gUHJldHR5IG11Y2ggYWxsIGJlbG93IGNhbiBiZSBjb21iaW5lZCBpbnRvIGEgaGlnaGVyIG9yZGVyIGZ1bmN0aW9uIHRvXG4vLyB0cmF2ZXJzZSByZXZpc2lvbnNcbi8vIFRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgYXMgY29udGV4dCB0byBhbGxcbi8vIGNoaWxkcmVuIG9mIHRoYXQgbm9kZVxuZnVuY3Rpb24gdHJhdmVyc2VSZXZUcmVlKHJldnMsIGNhbGxiYWNrKSB7XG4gIHZhciB0b1Zpc2l0ID0gcmV2cy5zbGljZSgpO1xuXG4gIHZhciBub2RlO1xuICB3aGlsZSAoKG5vZGUgPSB0b1Zpc2l0LnBvcCgpKSkge1xuICAgIHZhciBwb3MgPSBub2RlLnBvcztcbiAgICB2YXIgdHJlZSA9IG5vZGUuaWRzO1xuICAgIHZhciBicmFuY2hlcyA9IHRyZWVbMl07XG4gICAgdmFyIG5ld0N0eCA9XG4gICAgICBjYWxsYmFjayhicmFuY2hlcy5sZW5ndGggPT09IDAsIHBvcywgdHJlZVswXSwgbm9kZS5jdHgsIHRyZWVbMV0pO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBicmFuY2hlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9WaXNpdC5wdXNoKHtwb3M6IHBvcyArIDEsIGlkczogYnJhbmNoZXNbaV0sIGN0eDogbmV3Q3R4fSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRCeVBvcyhhLCBiKSB7XG4gIHJldHVybiBhLnBvcyAtIGIucG9zO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0TGVhdmVzKHJldnMpIHtcbiAgdmFyIGxlYXZlcyA9IFtdO1xuICB0cmF2ZXJzZVJldlRyZWUocmV2cywgZnVuY3Rpb24gKGlzTGVhZiwgcG9zLCBpZCwgYWNjLCBvcHRzKSB7XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgbGVhdmVzLnB1c2goe3JldjogcG9zICsgXCItXCIgKyBpZCwgcG9zOiBwb3MsIG9wdHM6IG9wdHN9KTtcbiAgICB9XG4gIH0pO1xuICBsZWF2ZXMuc29ydChzb3J0QnlQb3MpLnJldmVyc2UoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxlYXZlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlbGV0ZSBsZWF2ZXNbaV0ucG9zO1xuICB9XG4gIHJldHVybiBsZWF2ZXM7XG59XG5cbi8vIHJldHVybnMgcmV2cyBvZiBhbGwgY29uZmxpY3RzIHRoYXQgaXMgbGVhdmVzIHN1Y2ggdGhhdFxuLy8gMS4gYXJlIG5vdCBkZWxldGVkIGFuZFxuLy8gMi4gYXJlIGRpZmZlcmVudCB0aGFuIHdpbm5pbmcgcmV2aXNpb25cbmZ1bmN0aW9uIGNvbGxlY3RDb25mbGljdHMobWV0YWRhdGEpIHtcbiAgdmFyIHdpbiA9IHdpbm5pbmdSZXYobWV0YWRhdGEpO1xuICB2YXIgbGVhdmVzID0gY29sbGVjdExlYXZlcyhtZXRhZGF0YS5yZXZfdHJlZSk7XG4gIHZhciBjb25mbGljdHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxlYXZlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsZWFmID0gbGVhdmVzW2ldO1xuICAgIGlmIChsZWFmLnJldiAhPT0gd2luICYmICFsZWFmLm9wdHMuZGVsZXRlZCkge1xuICAgICAgY29uZmxpY3RzLnB1c2gobGVhZi5yZXYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmxpY3RzO1xufVxuXG4vLyBjb21wYWN0IGEgdHJlZSBieSBtYXJraW5nIGl0cyBub24tbGVhZnMgYXMgbWlzc2luZyxcbi8vIGFuZCByZXR1cm4gYSBsaXN0IG9mIHJldnMgdG8gZGVsZXRlXG5mdW5jdGlvbiBjb21wYWN0VHJlZShtZXRhZGF0YSkge1xuICB2YXIgcmV2cyA9IFtdO1xuICB0cmF2ZXJzZVJldlRyZWUobWV0YWRhdGEucmV2X3RyZWUsIGZ1bmN0aW9uIChpc0xlYWYsIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2SGFzaCwgY3R4LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMuc3RhdHVzID09PSAnYXZhaWxhYmxlJyAmJiAhaXNMZWFmKSB7XG4gICAgICByZXZzLnB1c2gocG9zICsgJy0nICsgcmV2SGFzaCk7XG4gICAgICBvcHRzLnN0YXR1cyA9ICdtaXNzaW5nJztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV2cztcbn1cblxuLy8gYnVpbGQgdXAgYSBsaXN0IG9mIGFsbCB0aGUgcGF0aHMgdG8gdGhlIGxlYWZzIGluIHRoaXMgcmV2aXNpb24gdHJlZVxuZnVuY3Rpb24gcm9vdFRvTGVhZihyZXZzKSB7XG4gIHZhciBwYXRocyA9IFtdO1xuICB2YXIgdG9WaXNpdCA9IHJldnMuc2xpY2UoKTtcbiAgdmFyIG5vZGU7XG4gIHdoaWxlICgobm9kZSA9IHRvVmlzaXQucG9wKCkpKSB7XG4gICAgdmFyIHBvcyA9IG5vZGUucG9zO1xuICAgIHZhciB0cmVlID0gbm9kZS5pZHM7XG4gICAgdmFyIGlkID0gdHJlZVswXTtcbiAgICB2YXIgb3B0cyA9IHRyZWVbMV07XG4gICAgdmFyIGJyYW5jaGVzID0gdHJlZVsyXTtcbiAgICB2YXIgaXNMZWFmID0gYnJhbmNoZXMubGVuZ3RoID09PSAwO1xuXG4gICAgdmFyIGhpc3RvcnkgPSBub2RlLmhpc3RvcnkgPyBub2RlLmhpc3Rvcnkuc2xpY2UoKSA6IFtdO1xuICAgIGhpc3RvcnkucHVzaCh7aWQ6IGlkLCBvcHRzOiBvcHRzfSk7XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcGF0aHMucHVzaCh7cG9zOiAocG9zICsgMSAtIGhpc3RvcnkubGVuZ3RoKSwgaWRzOiBoaXN0b3J5fSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBicmFuY2hlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9WaXNpdC5wdXNoKHtwb3M6IHBvcyArIDEsIGlkczogYnJhbmNoZXNbaV0sIGhpc3Rvcnk6IGhpc3Rvcnl9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhdGhzLnJldmVyc2UoKTtcbn1cblxuLy8gZm9yIGEgYmV0dGVyIG92ZXJ2aWV3IG9mIHdoYXQgdGhpcyBpcyBkb2luZywgcmVhZDpcblxuZnVuY3Rpb24gc29ydEJ5UG9zJDEoYSwgYikge1xuICByZXR1cm4gYS5wb3MgLSBiLnBvcztcbn1cblxuLy8gY2xhc3NpYyBiaW5hcnkgc2VhcmNoXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyLCBpdGVtLCBjb21wYXJhdG9yKSB7XG4gIHZhciBsb3cgPSAwO1xuICB2YXIgaGlnaCA9IGFyci5sZW5ndGg7XG4gIHZhciBtaWQ7XG4gIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgIGlmIChjb21wYXJhdG9yKGFyclttaWRdLCBpdGVtKSA8IDApIHtcbiAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBsb3c7XG59XG5cbi8vIGFzc3VtaW5nIHRoZSBhcnIgaXMgc29ydGVkLCBpbnNlcnQgdGhlIGl0ZW0gaW4gdGhlIHByb3BlciBwbGFjZVxuZnVuY3Rpb24gaW5zZXJ0U29ydGVkKGFyciwgaXRlbSwgY29tcGFyYXRvcikge1xuICB2YXIgaWR4ID0gYmluYXJ5U2VhcmNoKGFyciwgaXRlbSwgY29tcGFyYXRvcik7XG4gIGFyci5zcGxpY2UoaWR4LCAwLCBpdGVtKTtcbn1cblxuLy8gVHVybiBhIHBhdGggYXMgYSBmbGF0IGFycmF5IGludG8gYSB0cmVlIHdpdGggYSBzaW5nbGUgYnJhbmNoLlxuLy8gSWYgYW55IHNob3VsZCBiZSBzdGVtbWVkIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXksIHRoYXQncyBwYXNzZWRcbi8vIGluIGFzIHRoZSBzZWNvbmQgYXJndW1lbnRcbmZ1bmN0aW9uIHBhdGhUb1RyZWUocGF0aCwgbnVtU3RlbW1lZCkge1xuICB2YXIgcm9vdDtcbiAgdmFyIGxlYWY7XG4gIGZvciAodmFyIGkgPSBudW1TdGVtbWVkLCBsZW4gPSBwYXRoLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBwYXRoW2ldO1xuICAgIHZhciBjdXJyZW50TGVhZiA9IFtub2RlLmlkLCBub2RlLm9wdHMsIFtdXTtcbiAgICBpZiAobGVhZikge1xuICAgICAgbGVhZlsyXS5wdXNoKGN1cnJlbnRMZWFmKTtcbiAgICAgIGxlYWYgPSBjdXJyZW50TGVhZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdCA9IGxlYWYgPSBjdXJyZW50TGVhZjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8vIGNvbXBhcmUgdGhlIElEcyBvZiB0d28gdHJlZXNcbmZ1bmN0aW9uIGNvbXBhcmVUcmVlKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPCBiWzBdID8gLTEgOiAxO1xufVxuXG4vLyBNZXJnZSB0d28gdHJlZXMgdG9nZXRoZXJcbi8vIFRoZSByb290cyBvZiB0cmVlMSBhbmQgdHJlZTIgbXVzdCBiZSB0aGUgc2FtZSByZXZpc2lvblxuZnVuY3Rpb24gbWVyZ2VUcmVlKGluX3RyZWUxLCBpbl90cmVlMikge1xuICB2YXIgcXVldWUgPSBbe3RyZWUxOiBpbl90cmVlMSwgdHJlZTI6IGluX3RyZWUyfV07XG4gIHZhciBjb25mbGljdHMgPSBmYWxzZTtcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgaXRlbSA9IHF1ZXVlLnBvcCgpO1xuICAgIHZhciB0cmVlMSA9IGl0ZW0udHJlZTE7XG4gICAgdmFyIHRyZWUyID0gaXRlbS50cmVlMjtcblxuICAgIGlmICh0cmVlMVsxXS5zdGF0dXMgfHwgdHJlZTJbMV0uc3RhdHVzKSB7XG4gICAgICB0cmVlMVsxXS5zdGF0dXMgPVxuICAgICAgICAodHJlZTFbMV0uc3RhdHVzID09PSAgJ2F2YWlsYWJsZScgfHxcbiAgICAgICAgdHJlZTJbMV0uc3RhdHVzID09PSAnYXZhaWxhYmxlJykgPyAnYXZhaWxhYmxlJyA6ICdtaXNzaW5nJztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRyZWUxWzJdWzBdKSB7XG4gICAgICAgIGNvbmZsaWN0cyA9ICduZXdfbGVhZic7XG4gICAgICAgIHRyZWUxWzJdWzBdID0gdHJlZTJbMl1baV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWVyZ2VkID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRyZWUxWzJdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0cmVlMVsyXVtqXVswXSA9PT0gdHJlZTJbMl1baV1bMF0pIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKHt0cmVlMTogdHJlZTFbMl1bal0sIHRyZWUyOiB0cmVlMlsyXVtpXX0pO1xuICAgICAgICAgIG1lcmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghbWVyZ2VkKSB7XG4gICAgICAgIGNvbmZsaWN0cyA9ICduZXdfYnJhbmNoJztcbiAgICAgICAgaW5zZXJ0U29ydGVkKHRyZWUxWzJdLCB0cmVlMlsyXVtpXSwgY29tcGFyZVRyZWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge2NvbmZsaWN0czogY29uZmxpY3RzLCB0cmVlOiBpbl90cmVlMX07XG59XG5cbmZ1bmN0aW9uIGRvTWVyZ2UodHJlZSwgcGF0aCwgZG9udEV4cGFuZCkge1xuICB2YXIgcmVzdHJlZSA9IFtdO1xuICB2YXIgY29uZmxpY3RzID0gZmFsc2U7XG4gIHZhciBtZXJnZWQgPSBmYWxzZTtcbiAgdmFyIHJlcztcblxuICBpZiAoIXRyZWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt0cmVlOiBbcGF0aF0sIGNvbmZsaWN0czogJ25ld19sZWFmJ307XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdHJlZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBicmFuY2ggPSB0cmVlW2ldO1xuICAgIGlmIChicmFuY2gucG9zID09PSBwYXRoLnBvcyAmJiBicmFuY2guaWRzWzBdID09PSBwYXRoLmlkc1swXSkge1xuICAgICAgLy8gUGF0aHMgc3RhcnQgYXQgdGhlIHNhbWUgcG9zaXRpb24gYW5kIGhhdmUgdGhlIHNhbWUgcm9vdCwgc28gdGhleSBuZWVkXG4gICAgICAvLyBtZXJnZWRcbiAgICAgIHJlcyA9IG1lcmdlVHJlZShicmFuY2guaWRzLCBwYXRoLmlkcyk7XG4gICAgICByZXN0cmVlLnB1c2goe3BvczogYnJhbmNoLnBvcywgaWRzOiByZXMudHJlZX0pO1xuICAgICAgY29uZmxpY3RzID0gY29uZmxpY3RzIHx8IHJlcy5jb25mbGljdHM7XG4gICAgICBtZXJnZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZG9udEV4cGFuZCAhPT0gdHJ1ZSkge1xuICAgICAgLy8gVGhlIHBhdGhzIHN0YXJ0IGF0IGEgZGlmZmVyZW50IHBvc2l0aW9uLCB0YWtlIHRoZSBlYXJsaWVzdCBwYXRoIGFuZFxuICAgICAgLy8gdHJhdmVyc2UgdXAgdW50aWwgaXQgYXMgYXQgdGhlIHNhbWUgcG9pbnQgZnJvbSByb290IGFzIHRoZSBwYXRoIHdlXG4gICAgICAvLyB3YW50IHRvIG1lcmdlLiAgSWYgdGhlIGtleXMgbWF0Y2ggd2UgcmV0dXJuIHRoZSBsb25nZXIgcGF0aCB3aXRoIHRoZVxuICAgICAgLy8gb3RoZXIgbWVyZ2VkIEFmdGVyIHN0ZW1taW5nIHdlIGRvbnQgd2FudCB0byBleHBhbmQgdGhlIHRyZWVzXG5cbiAgICAgIHZhciB0MSA9IGJyYW5jaC5wb3MgPCBwYXRoLnBvcyA/IGJyYW5jaCA6IHBhdGg7XG4gICAgICB2YXIgdDIgPSBicmFuY2gucG9zIDwgcGF0aC5wb3MgPyBwYXRoIDogYnJhbmNoO1xuICAgICAgdmFyIGRpZmYgPSB0Mi5wb3MgLSB0MS5wb3M7XG5cbiAgICAgIHZhciBjYW5kaWRhdGVQYXJlbnRzID0gW107XG5cbiAgICAgIHZhciB0cmVlcyA9IFtdO1xuICAgICAgdHJlZXMucHVzaCh7aWRzOiB0MS5pZHMsIGRpZmY6IGRpZmYsIHBhcmVudDogbnVsbCwgcGFyZW50SWR4OiBudWxsfSk7XG4gICAgICB3aGlsZSAodHJlZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaXRlbSA9IHRyZWVzLnBvcCgpO1xuICAgICAgICBpZiAoaXRlbS5kaWZmID09PSAwKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWRzWzBdID09PSB0Mi5pZHNbMF0pIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZVBhcmVudHMucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gaXRlbS5pZHNbMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBlbGVtZW50c0xlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaiA8IGVsZW1lbnRzTGVuOyBqKyspIHtcbiAgICAgICAgICB0cmVlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkczogZWxlbWVudHNbal0sXG4gICAgICAgICAgICBkaWZmOiBpdGVtLmRpZmYgLSAxLFxuICAgICAgICAgICAgcGFyZW50OiBpdGVtLmlkcyxcbiAgICAgICAgICAgIHBhcmVudElkeDogalxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlbCA9IGNhbmRpZGF0ZVBhcmVudHNbMF07XG5cbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmVzdHJlZS5wdXNoKGJyYW5jaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMgPSBtZXJnZVRyZWUoZWwuaWRzLCB0Mi5pZHMpO1xuICAgICAgICBlbC5wYXJlbnRbMl1bZWwucGFyZW50SWR4XSA9IHJlcy50cmVlO1xuICAgICAgICByZXN0cmVlLnB1c2goe3BvczogdDEucG9zLCBpZHM6IHQxLmlkc30pO1xuICAgICAgICBjb25mbGljdHMgPSBjb25mbGljdHMgfHwgcmVzLmNvbmZsaWN0cztcbiAgICAgICAgbWVyZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdHJlZS5wdXNoKGJyYW5jaCk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgZGlkbnQgZmluZFxuICBpZiAoIW1lcmdlZCkge1xuICAgIHJlc3RyZWUucHVzaChwYXRoKTtcbiAgfVxuXG4gIHJlc3RyZWUuc29ydChzb3J0QnlQb3MkMSk7XG5cbiAgcmV0dXJuIHtcbiAgICB0cmVlOiByZXN0cmVlLFxuICAgIGNvbmZsaWN0czogY29uZmxpY3RzIHx8ICdpbnRlcm5hbF9ub2RlJ1xuICB9O1xufVxuXG4vLyBUbyBlbnN1cmUgd2UgZG9udCBncm93IHRoZSByZXZpc2lvbiB0cmVlIGluZmluaXRlbHksIHdlIHN0ZW0gb2xkIHJldmlzaW9uc1xuZnVuY3Rpb24gc3RlbSh0cmVlLCBkZXB0aCkge1xuICAvLyBGaXJzdCB3ZSBicmVhayBvdXQgdGhlIHRyZWUgaW50byBhIGNvbXBsZXRlIGxpc3Qgb2Ygcm9vdCB0byBsZWFmIHBhdGhzXG4gIHZhciBwYXRocyA9IHJvb3RUb0xlYWYodHJlZSk7XG4gIHZhciBzdGVtbWVkUmV2cztcblxuICB2YXIgcmVzdWx0O1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0aHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAvLyBUaGVuIGZvciBlYWNoIHBhdGgsIHdlIGN1dCBvZmYgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoIGJhc2VkIG9uIHRoZVxuICAgIC8vIGBkZXB0aGAgdG8gc3RlbSB0bywgYW5kIGdlbmVyYXRlIGEgbmV3IHNldCBvZiBmbGF0IHRyZWVzXG4gICAgdmFyIHBhdGggPSBwYXRoc1tpXTtcbiAgICB2YXIgc3RlbW1lZCA9IHBhdGguaWRzO1xuICAgIHZhciBub2RlO1xuICAgIGlmIChzdGVtbWVkLmxlbmd0aCA+IGRlcHRoKSB7XG4gICAgICAvLyBvbmx5IGRvIHRoZSBzdGVtbWluZyB3b3JrIGlmIHdlIGFjdHVhbGx5IG5lZWQgdG8gc3RlbVxuICAgICAgaWYgKCFzdGVtbWVkUmV2cykge1xuICAgICAgICBzdGVtbWVkUmV2cyA9IHt9OyAvLyBhdm9pZCBhbGxvY2F0aW5nIHRoaXMgb2JqZWN0IHVubmVjZXNzYXJpbHlcbiAgICAgIH1cbiAgICAgIHZhciBudW1TdGVtbWVkID0gc3RlbW1lZC5sZW5ndGggLSBkZXB0aDtcbiAgICAgIG5vZGUgPSB7XG4gICAgICAgIHBvczogcGF0aC5wb3MgKyBudW1TdGVtbWVkLFxuICAgICAgICBpZHM6IHBhdGhUb1RyZWUoc3RlbW1lZCwgbnVtU3RlbW1lZClcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbnVtU3RlbW1lZDsgcysrKSB7XG4gICAgICAgIHZhciByZXYgPSAocGF0aC5wb3MgKyBzKSArICctJyArIHN0ZW1tZWRbc10uaWQ7XG4gICAgICAgIHN0ZW1tZWRSZXZzW3Jldl0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vIG5lZWQgdG8gYWN0dWFsbHkgc3RlbVxuICAgICAgbm9kZSA9IHtcbiAgICAgICAgcG9zOiBwYXRoLnBvcyxcbiAgICAgICAgaWRzOiBwYXRoVG9UcmVlKHN0ZW1tZWQsIDApXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRoZW4gd2UgcmVtZXJnZSBhbGwgdGhvc2UgZmxhdCB0cmVlcyB0b2dldGhlciwgZW5zdXJpbmcgdGhhdCB3ZSBkb250XG4gICAgLy8gY29ubmVjdCB0cmVlcyB0aGF0IHdvdWxkIGdvIGJleW9uZCB0aGUgZGVwdGggbGltaXRcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSBkb01lcmdlKHJlc3VsdCwgbm9kZSwgdHJ1ZSkudHJlZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gW25vZGVdO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgaXMgbWVtb3J5LWhlYXZ5IHBlciBDaHJvbWUgcHJvZmlsZXIsIGF2b2lkIHVubGVzcyB3ZSBhY3R1YWxseSBzdGVtbWVkXG4gIGlmIChzdGVtbWVkUmV2cykge1xuICAgIHRyYXZlcnNlUmV2VHJlZShyZXN1bHQsIGZ1bmN0aW9uIChpc0xlYWYsIHBvcywgcmV2SGFzaCkge1xuICAgICAgLy8gc29tZSByZXZpc2lvbnMgbWF5IGhhdmUgYmVlbiByZW1vdmVkIGluIGEgYnJhbmNoIGJ1dCBub3QgaW4gYW5vdGhlclxuICAgICAgZGVsZXRlIHN0ZW1tZWRSZXZzW3BvcyArICctJyArIHJldkhhc2hdO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0cmVlOiByZXN1bHQsXG4gICAgcmV2czogc3RlbW1lZFJldnMgPyBPYmplY3Qua2V5cyhzdGVtbWVkUmV2cykgOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZSh0cmVlLCBwYXRoLCBkZXB0aCkge1xuICB2YXIgbmV3VHJlZSA9IGRvTWVyZ2UodHJlZSwgcGF0aCk7XG4gIHZhciBzdGVtbWVkID0gc3RlbShuZXdUcmVlLnRyZWUsIGRlcHRoKTtcbiAgcmV0dXJuIHtcbiAgICB0cmVlOiBzdGVtbWVkLnRyZWUsXG4gICAgc3RlbW1lZFJldnM6IHN0ZW1tZWQucmV2cyxcbiAgICBjb25mbGljdHM6IG5ld1RyZWUuY29uZmxpY3RzXG4gIH07XG59XG5cbi8vIHJldHVybiB0cnVlIGlmIGEgcmV2IGV4aXN0cyBpbiB0aGUgcmV2IHRyZWUsIGZhbHNlIG90aGVyd2lzZVxuZnVuY3Rpb24gcmV2RXhpc3RzKHJldnMsIHJldikge1xuICB2YXIgdG9WaXNpdCA9IHJldnMuc2xpY2UoKTtcbiAgdmFyIHNwbGl0UmV2ID0gcmV2LnNwbGl0KCctJyk7XG4gIHZhciB0YXJnZXRQb3MgPSBwYXJzZUludChzcGxpdFJldlswXSwgMTApO1xuICB2YXIgdGFyZ2V0SWQgPSBzcGxpdFJldlsxXTtcblxuICB2YXIgbm9kZTtcbiAgd2hpbGUgKChub2RlID0gdG9WaXNpdC5wb3AoKSkpIHtcbiAgICBpZiAobm9kZS5wb3MgPT09IHRhcmdldFBvcyAmJiBub2RlLmlkc1swXSA9PT0gdGFyZ2V0SWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgYnJhbmNoZXMgPSBub2RlLmlkc1syXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnJhbmNoZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRvVmlzaXQucHVzaCh7cG9zOiBub2RlLnBvcyArIDEsIGlkczogYnJhbmNoZXNbaV19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmVlcyhub2RlKSB7XG4gIHJldHVybiBub2RlLmlkcztcbn1cblxuLy8gY2hlY2sgaWYgYSBzcGVjaWZpYyByZXZpc2lvbiBvZiBhIGRvYyBoYXMgYmVlbiBkZWxldGVkXG4vLyAgLSBtZXRhZGF0YTogdGhlIG1ldGFkYXRhIG9iamVjdCBmcm9tIHRoZSBkb2Mgc3RvcmVcbi8vICAtIHJldjogKG9wdGlvbmFsKSB0aGUgcmV2aXNpb24gdG8gY2hlY2suIGRlZmF1bHRzIHRvIHdpbm5pbmcgcmV2aXNpb25cbmZ1bmN0aW9uIGlzRGVsZXRlZChtZXRhZGF0YSwgcmV2KSB7XG4gIGlmICghcmV2KSB7XG4gICAgcmV2ID0gd2lubmluZ1JldihtZXRhZGF0YSk7XG4gIH1cbiAgdmFyIGlkID0gcmV2LnN1YnN0cmluZyhyZXYuaW5kZXhPZignLScpICsgMSk7XG4gIHZhciB0b1Zpc2l0ID0gbWV0YWRhdGEucmV2X3RyZWUubWFwKGdldFRyZWVzKTtcblxuICB2YXIgdHJlZTtcbiAgd2hpbGUgKCh0cmVlID0gdG9WaXNpdC5wb3AoKSkpIHtcbiAgICBpZiAodHJlZVswXSA9PT0gaWQpIHtcbiAgICAgIHJldHVybiAhIXRyZWVbMV0uZGVsZXRlZDtcbiAgICB9XG4gICAgdG9WaXNpdCA9IHRvVmlzaXQuY29uY2F0KHRyZWVbMl0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxJZChpZCkge1xuICByZXR1cm4gKC9eX2xvY2FsLykudGVzdChpZCk7XG59XG5cbi8vIHJldHVybnMgdGhlIGN1cnJlbnQgbGVhZiBub2RlIGZvciBhIGdpdmVuIHJldmlzaW9uXG5mdW5jdGlvbiBsYXRlc3QocmV2LCBtZXRhZGF0YSkge1xuICB2YXIgdG9WaXNpdCA9IG1ldGFkYXRhLnJldl90cmVlLnNsaWNlKCk7XG4gIHZhciBub2RlO1xuICB3aGlsZSAoKG5vZGUgPSB0b1Zpc2l0LnBvcCgpKSkge1xuICAgIHZhciBwb3MgPSBub2RlLnBvcztcbiAgICB2YXIgdHJlZSA9IG5vZGUuaWRzO1xuICAgIHZhciBpZCA9IHRyZWVbMF07XG4gICAgdmFyIG9wdHMgPSB0cmVlWzFdO1xuICAgIHZhciBicmFuY2hlcyA9IHRyZWVbMl07XG4gICAgdmFyIGlzTGVhZiA9IGJyYW5jaGVzLmxlbmd0aCA9PT0gMDtcblxuICAgIHZhciBoaXN0b3J5ID0gbm9kZS5oaXN0b3J5ID8gbm9kZS5oaXN0b3J5LnNsaWNlKCkgOiBbXTtcbiAgICBoaXN0b3J5LnB1c2goe2lkOiBpZCwgcG9zOiBwb3MsIG9wdHM6IG9wdHN9KTtcblxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBoaXN0b3J5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBoaXN0b3J5Tm9kZSA9IGhpc3RvcnlbaV07XG4gICAgICAgIHZhciBoaXN0b3J5UmV2ID0gaGlzdG9yeU5vZGUucG9zICsgJy0nICsgaGlzdG9yeU5vZGUuaWQ7XG5cbiAgICAgICAgaWYgKGhpc3RvcnlSZXYgPT09IHJldikge1xuICAgICAgICAgIC8vIHJldHVybiB0aGUgcmV2IG9mIHRoaXMgbGVhZlxuICAgICAgICAgIHJldHVybiBwb3MgKyAnLScgKyBpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwLCBsID0gYnJhbmNoZXMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICB0b1Zpc2l0LnB1c2goe3BvczogcG9zICsgMSwgaWRzOiBicmFuY2hlc1tqXSwgaGlzdG9yeTogaGlzdG9yeX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlc29sdmUgbGF0ZXN0IHJldmlzaW9uIGZvciBpZCAnICsgbWV0YWRhdGEuaWQgKyAnLCByZXYgJyArIHJldik7XG59XG5cbmluaGVyaXRzKENoYW5nZXMkMSwgRUUpO1xuXG5mdW5jdGlvbiB0cnlDYXRjaEluQ2hhbmdlTGlzdGVuZXIoc2VsZiwgY2hhbmdlLCBwZW5kaW5nLCBsYXN0U2VxKSB7XG4gIC8vIGlzb2xhdGUgdHJ5L2NhdGNoZXMgdG8gYXZvaWQgVjggZGVvcHRpbWl6YXRpb25zXG4gIHRyeSB7XG4gICAgc2VsZi5lbWl0KCdjaGFuZ2UnLCBjaGFuZ2UsIHBlbmRpbmcsIGxhc3RTZXEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZ3VhcmRlZENvbnNvbGUoJ2Vycm9yJywgJ0Vycm9yIGluIC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbik6JywgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQ2hhbmdlcyQxKGRiLCBvcHRzLCBjYWxsYmFjaykge1xuICBFRS5jYWxsKHRoaXMpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuZGIgPSBkYjtcbiAgb3B0cyA9IG9wdHMgPyBjbG9uZShvcHRzKSA6IHt9O1xuICB2YXIgY29tcGxldGUgPSBvcHRzLmNvbXBsZXRlID0gb25jZShmdW5jdGlvbiAoZXJyLCByZXNwKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgaWYgKGxpc3RlbmVyQ291bnQoc2VsZiwgJ2Vycm9yJykgPiAwKSB7XG4gICAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmVtaXQoJ2NvbXBsZXRlJywgcmVzcCk7XG4gICAgfVxuICAgIHNlbGYucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgZGIucmVtb3ZlTGlzdGVuZXIoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveSk7XG4gIH0pO1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICBzZWxmLm9uKCdjb21wbGV0ZScsIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXNwKTtcbiAgICB9KTtcbiAgICBzZWxmLm9uKCdlcnJvcicsIGNhbGxiYWNrKTtcbiAgfVxuICBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgc2VsZi5jYW5jZWwoKTtcbiAgfVxuICBkYi5vbmNlKCdkZXN0cm95ZWQnLCBvbkRlc3Ryb3kpO1xuXG4gIG9wdHMub25DaGFuZ2UgPSBmdW5jdGlvbiAoY2hhbmdlLCBwZW5kaW5nLCBsYXN0U2VxKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHNlbGYuaXNDYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5Q2F0Y2hJbkNoYW5nZUxpc3RlbmVyKHNlbGYsIGNoYW5nZSwgcGVuZGluZywgbGFzdFNlcSk7XG4gIH07XG5cbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gICAgb3B0cy5jb21wbGV0ZSA9IGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGZpbGwocmVzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgc2VsZi5vbmNlKCdjYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGIucmVtb3ZlTGlzdGVuZXIoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveSk7XG4gICAgb3B0cy5jb21wbGV0ZShudWxsLCB7c3RhdHVzOiAnY2FuY2VsbGVkJ30pO1xuICB9KTtcbiAgdGhpcy50aGVuID0gcHJvbWlzZS50aGVuLmJpbmQocHJvbWlzZSk7XG4gIHRoaXNbJ2NhdGNoJ10gPSBwcm9taXNlWydjYXRjaCddLmJpbmQocHJvbWlzZSk7XG4gIHRoaXMudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29tcGxldGUobnVsbCwgcmVzdWx0KTtcbiAgfSwgY29tcGxldGUpO1xuXG5cblxuICBpZiAoIWRiLnRhc2txdWV1ZS5pc1JlYWR5KSB7XG4gICAgZGIudGFza3F1ZXVlLmFkZFRhc2soZnVuY3Rpb24gKGZhaWxlZCkge1xuICAgICAgaWYgKGZhaWxlZCkge1xuICAgICAgICBvcHRzLmNvbXBsZXRlKGZhaWxlZCk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgc2VsZi5lbWl0KCdjYW5jZWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYudmFsaWRhdGVDaGFuZ2VzKG9wdHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNlbGYudmFsaWRhdGVDaGFuZ2VzKG9wdHMpO1xuICB9XG59XG5DaGFuZ2VzJDEucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pc0NhbmNlbGxlZCA9IHRydWU7XG4gIGlmICh0aGlzLmRiLnRhc2txdWV1ZS5pc1JlYWR5KSB7XG4gICAgdGhpcy5lbWl0KCdjYW5jZWwnKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDaGFuZ2UoZG9jLCBtZXRhZGF0YSwgb3B0cykge1xuICB2YXIgY2hhbmdlTGlzdCA9IFt7cmV2OiBkb2MuX3Jldn1dO1xuICBpZiAob3B0cy5zdHlsZSA9PT0gJ2FsbF9kb2NzJykge1xuICAgIGNoYW5nZUxpc3QgPSBjb2xsZWN0TGVhdmVzKG1ldGFkYXRhLnJldl90cmVlKVxuICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHtyZXY6IHgucmV2fTsgfSk7XG4gIH1cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBpZDogbWV0YWRhdGEuaWQsXG4gICAgY2hhbmdlczogY2hhbmdlTGlzdCxcbiAgICBkb2M6IGRvY1xuICB9O1xuXG4gIGlmIChpc0RlbGV0ZWQobWV0YWRhdGEsIGRvYy5fcmV2KSkge1xuICAgIGNoYW5nZS5kZWxldGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAob3B0cy5jb25mbGljdHMpIHtcbiAgICBjaGFuZ2UuZG9jLl9jb25mbGljdHMgPSBjb2xsZWN0Q29uZmxpY3RzKG1ldGFkYXRhKTtcbiAgICBpZiAoIWNoYW5nZS5kb2MuX2NvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBjaGFuZ2UuZG9jLl9jb25mbGljdHM7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGFuZ2U7XG59XG5cbkNoYW5nZXMkMS5wcm90b3R5cGUudmFsaWRhdGVDaGFuZ2VzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIGNhbGxiYWNrID0gb3B0cy5jb21wbGV0ZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChQb3VjaERCLl9jaGFuZ2VzRmlsdGVyUGx1Z2luKSB7XG4gICAgUG91Y2hEQi5fY2hhbmdlc0ZpbHRlclBsdWdpbi52YWxpZGF0ZShvcHRzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgc2VsZi5kb0NoYW5nZXMob3B0cyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5kb0NoYW5nZXMob3B0cyk7XG4gIH1cbn07XG5cbkNoYW5nZXMkMS5wcm90b3R5cGUuZG9DaGFuZ2VzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2FsbGJhY2sgPSBvcHRzLmNvbXBsZXRlO1xuXG4gIG9wdHMgPSBjbG9uZShvcHRzKTtcbiAgaWYgKCdsaXZlJyBpbiBvcHRzICYmICEoJ2NvbnRpbnVvdXMnIGluIG9wdHMpKSB7XG4gICAgb3B0cy5jb250aW51b3VzID0gb3B0cy5saXZlO1xuICB9XG4gIG9wdHMucHJvY2Vzc0NoYW5nZSA9IHByb2Nlc3NDaGFuZ2U7XG5cbiAgaWYgKG9wdHMuc2luY2UgPT09ICdsYXRlc3QnKSB7XG4gICAgb3B0cy5zaW5jZSA9ICdub3cnO1xuICB9XG4gIGlmICghb3B0cy5zaW5jZSkge1xuICAgIG9wdHMuc2luY2UgPSAwO1xuICB9XG4gIGlmIChvcHRzLnNpbmNlID09PSAnbm93Jykge1xuICAgIHRoaXMuZGIuaW5mbygpLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHNlbGYuaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwge3N0YXR1czogJ2NhbmNlbGxlZCd9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb3B0cy5zaW5jZSA9IGluZm8udXBkYXRlX3NlcTtcbiAgICAgIHNlbGYuZG9DaGFuZ2VzKG9wdHMpO1xuICAgIH0sIGNhbGxiYWNrKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoUG91Y2hEQi5fY2hhbmdlc0ZpbHRlclBsdWdpbikge1xuICAgIFBvdWNoREIuX2NoYW5nZXNGaWx0ZXJQbHVnaW4ubm9ybWFsaXplKG9wdHMpO1xuICAgIGlmIChQb3VjaERCLl9jaGFuZ2VzRmlsdGVyUGx1Z2luLnNob3VsZEZpbHRlcih0aGlzLCBvcHRzKSkge1xuICAgICAgcmV0dXJuIFBvdWNoREIuX2NoYW5nZXNGaWx0ZXJQbHVnaW4uZmlsdGVyKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBbJ2RvY19pZHMnLCAnZmlsdGVyJywgJ3NlbGVjdG9yJywgJ3ZpZXcnXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgICBndWFyZGVkQ29uc29sZSgnd2FybicsXG4gICAgICAgICAgJ1RoZSBcIicgKyBrZXkgKyAnXCIgb3B0aW9uIHdhcyBwYXNzZWQgaW4gdG8gY2hhbmdlcy9yZXBsaWNhdGUsICcgK1xuICAgICAgICAgICdidXQgcG91Y2hkYi1jaGFuZ2VzLWZpbHRlciBwbHVnaW4gaXMgbm90IGluc3RhbGxlZCwgc28gaXQgJyArXG4gICAgICAgICAgJ3dhcyBpZ25vcmVkLiBQbGVhc2UgaW5zdGFsbCB0aGUgcGx1Z2luIHRvIGVuYWJsZSBmaWx0ZXJpbmcuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCEoJ2Rlc2NlbmRpbmcnIGluIG9wdHMpKSB7XG4gICAgb3B0cy5kZXNjZW5kaW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyAwIGFuZCAxIHNob3VsZCByZXR1cm4gMSBkb2N1bWVudFxuICBvcHRzLmxpbWl0ID0gb3B0cy5saW1pdCA9PT0gMCA/IDEgOiBvcHRzLmxpbWl0O1xuICBvcHRzLmNvbXBsZXRlID0gY2FsbGJhY2s7XG4gIHZhciBuZXdQcm9taXNlID0gdGhpcy5kYi5fY2hhbmdlcyhvcHRzKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKG5ld1Byb21pc2UgJiYgdHlwZW9mIG5ld1Byb21pc2UuY2FuY2VsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGNhbmNlbCA9IHNlbGYuY2FuY2VsO1xuICAgIHNlbGYuY2FuY2VsID0gZ2V0QXJndW1lbnRzKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBuZXdQcm9taXNlLmNhbmNlbCgpO1xuICAgICAgY2FuY2VsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKlxuICogQSBnZW5lcmljIHBvdWNoIGFkYXB0ZXJcbiAqL1xuXG5mdW5jdGlvbiBjb21wYXJlKGxlZnQsIHJpZ2h0KSB7XG4gIHJldHVybiBsZWZ0IDwgcmlnaHQgPyAtMSA6IGxlZnQgPiByaWdodCA/IDEgOiAwO1xufVxuXG4vLyBXcmFwcGVyIGZvciBmdW5jdGlvbnMgdGhhdCBjYWxsIHRoZSBidWxrZG9jcyBhcGkgd2l0aCBhIHNpbmdsZSBkb2MsXG4vLyBpZiB0aGUgZmlyc3QgcmVzdWx0IGlzIGFuIGVycm9yLCByZXR1cm4gYW4gZXJyb3JcbmZ1bmN0aW9uIHlhbmtFcnJvcihjYWxsYmFjaywgZG9jSWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICBpZiAoZXJyIHx8IChyZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0uZXJyb3IpKSB7XG4gICAgICBlcnIgPSBlcnIgfHwgcmVzdWx0c1swXTtcbiAgICAgIGVyci5kb2NJZCA9IGRvY0lkO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cy5sZW5ndGggPyByZXN1bHRzWzBdICA6IHJlc3VsdHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gY2xlYW4gZG9jcyBnaXZlbiB0byB1cyBieSB0aGUgdXNlclxuZnVuY3Rpb24gY2xlYW5Eb2NzKGRvY3MpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2NzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvYyA9IGRvY3NbaV07XG4gICAgaWYgKGRvYy5fZGVsZXRlZCkge1xuICAgICAgZGVsZXRlIGRvYy5fYXR0YWNobWVudHM7IC8vIGlnbm9yZSBhdHRzIGZvciBkZWxldGVkIGRvY3NcbiAgICB9IGVsc2UgaWYgKGRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgIC8vIGZpbHRlciBvdXQgZXh0cmFuZW91cyBrZXlzIGZyb20gX2F0dGFjaG1lbnRzXG4gICAgICB2YXIgYXR0cyA9IE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMpO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhdHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBhdHQgPSBhdHRzW2pdO1xuICAgICAgICBkb2MuX2F0dGFjaG1lbnRzW2F0dF0gPSBwaWNrKGRvYy5fYXR0YWNobWVudHNbYXR0XSxcbiAgICAgICAgICBbJ2RhdGEnLCAnZGlnZXN0JywgJ2NvbnRlbnRfdHlwZScsICdsZW5ndGgnLCAncmV2cG9zJywgJ3N0dWInXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGNvbXBhcmUgdHdvIGRvY3MsIGZpcnN0IGJ5IF9pZCB0aGVuIGJ5IF9yZXZcbmZ1bmN0aW9uIGNvbXBhcmVCeUlkVGhlblJldihhLCBiKSB7XG4gIHZhciBpZENvbXBhcmUgPSBjb21wYXJlKGEuX2lkLCBiLl9pZCk7XG4gIGlmIChpZENvbXBhcmUgIT09IDApIHtcbiAgICByZXR1cm4gaWRDb21wYXJlO1xuICB9XG4gIHZhciBhU3RhcnQgPSBhLl9yZXZpc2lvbnMgPyBhLl9yZXZpc2lvbnMuc3RhcnQgOiAwO1xuICB2YXIgYlN0YXJ0ID0gYi5fcmV2aXNpb25zID8gYi5fcmV2aXNpb25zLnN0YXJ0IDogMDtcbiAgcmV0dXJuIGNvbXBhcmUoYVN0YXJ0LCBiU3RhcnQpO1xufVxuXG4vLyBmb3IgZXZlcnkgbm9kZSBpbiBhIHJldmlzaW9uIHRyZWUgY29tcHV0ZXMgaXRzIGRpc3RhbmNlIGZyb20gdGhlIGNsb3Nlc3Rcbi8vIGxlYWZcbmZ1bmN0aW9uIGNvbXB1dGVIZWlnaHQocmV2cykge1xuICB2YXIgaGVpZ2h0ID0ge307XG4gIHZhciBlZGdlcyA9IFtdO1xuICB0cmF2ZXJzZVJldlRyZWUocmV2cywgZnVuY3Rpb24gKGlzTGVhZiwgcG9zLCBpZCwgcHJudCkge1xuICAgIHZhciByZXYkJDEgPSBwb3MgKyBcIi1cIiArIGlkO1xuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIGhlaWdodFtyZXYkJDFdID0gMDtcbiAgICB9XG4gICAgaWYgKHBybnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZWRnZXMucHVzaCh7ZnJvbTogcHJudCwgdG86IHJldiQkMX0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV2JCQxO1xuICB9KTtcblxuICBlZGdlcy5yZXZlcnNlKCk7XG4gIGVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICBpZiAoaGVpZ2h0W2VkZ2UuZnJvbV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGVpZ2h0W2VkZ2UuZnJvbV0gPSAxICsgaGVpZ2h0W2VkZ2UudG9dO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWlnaHRbZWRnZS5mcm9tXSA9IE1hdGgubWluKGhlaWdodFtlZGdlLmZyb21dLCAxICsgaGVpZ2h0W2VkZ2UudG9dKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBhbGxEb2NzS2V5c1BhcnNlKG9wdHMpIHtcbiAgdmFyIGtleXMgPSAgKCdsaW1pdCcgaW4gb3B0cykgP1xuICAgIG9wdHMua2V5cy5zbGljZShvcHRzLnNraXAsIG9wdHMubGltaXQgKyBvcHRzLnNraXApIDpcbiAgICAob3B0cy5za2lwID4gMCkgPyBvcHRzLmtleXMuc2xpY2Uob3B0cy5za2lwKSA6IG9wdHMua2V5cztcbiAgb3B0cy5rZXlzID0ga2V5cztcbiAgb3B0cy5za2lwID0gMDtcbiAgZGVsZXRlIG9wdHMubGltaXQ7XG4gIGlmIChvcHRzLmRlc2NlbmRpbmcpIHtcbiAgICBrZXlzLnJldmVyc2UoKTtcbiAgICBvcHRzLmRlc2NlbmRpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG4vLyBhbGwgY29tcGFjdGlvbiBpcyBkb25lIGluIGEgcXVldWUsIHRvIGF2b2lkIGF0dGFjaGluZ1xuLy8gdG9vIG1hbnkgbGlzdGVuZXJzIGF0IG9uY2VcbmZ1bmN0aW9uIGRvTmV4dENvbXBhY3Rpb24oc2VsZikge1xuICB2YXIgdGFzayA9IHNlbGYuX2NvbXBhY3Rpb25RdWV1ZVswXTtcbiAgdmFyIG9wdHMgPSB0YXNrLm9wdHM7XG4gIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gIHNlbGYuZ2V0KCdfbG9jYWwvY29tcGFjdGlvbicpLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKGRvYykge1xuICAgIGlmIChkb2MgJiYgZG9jLmxhc3Rfc2VxKSB7XG4gICAgICBvcHRzLmxhc3Rfc2VxID0gZG9jLmxhc3Rfc2VxO1xuICAgIH1cbiAgICBzZWxmLl9jb21wYWN0KG9wdHMsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgfVxuICAgICAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fY29tcGFjdGlvblF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChzZWxmLl9jb21wYWN0aW9uUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgZG9OZXh0Q29tcGFjdGlvbihzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRhY2htZW50TmFtZUVycm9yKG5hbWUpIHtcbiAgaWYgKG5hbWUuY2hhckF0KDApID09PSAnXycpIHtcbiAgICByZXR1cm4gbmFtZSArICcgaXMgbm90IGEgdmFsaWQgYXR0YWNobWVudCBuYW1lLCBhdHRhY2htZW50ICcgK1xuICAgICAgJ25hbWVzIGNhbm5vdCBzdGFydCB3aXRoIFxcJ19cXCcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuaW5oZXJpdHMoQWJzdHJhY3RQb3VjaERCLCBFRSk7XG5cbmZ1bmN0aW9uIEFic3RyYWN0UG91Y2hEQigpIHtcbiAgRUUuY2FsbCh0aGlzKTtcblxuICAvLyByZS1iaW5kIHByb3RvdHlwZWQgbWV0aG9kc1xuICBmb3IgKHZhciBwIGluIEFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXNbcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbcF0gPSB0aGlzW3BdLmJpbmQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUucG9zdCA9XG4gIGFkYXB0ZXJGdW4oJ3Bvc3QnLCBmdW5jdGlvbiAoZG9jLCBvcHRzLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2YgZG9jICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGRvYykpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoTk9UX0FOX09CSkVDVCkpO1xuICB9XG4gIHRoaXMuYnVsa0RvY3Moe2RvY3M6IFtkb2NdfSwgb3B0cywgeWFua0Vycm9yKGNhbGxiYWNrLCBkb2MuX2lkKSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5wdXQgPSBhZGFwdGVyRnVuKCdwdXQnLCBmdW5jdGlvbiAoZG9jLCBvcHRzLCBjYikge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2YgZG9jICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGRvYykpIHtcbiAgICByZXR1cm4gY2IoY3JlYXRlRXJyb3IoTk9UX0FOX09CSkVDVCkpO1xuICB9XG4gIGludmFsaWRJZEVycm9yKGRvYy5faWQpO1xuICBpZiAoaXNMb2NhbElkKGRvYy5faWQpICYmIHR5cGVvZiB0aGlzLl9wdXRMb2NhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChkb2MuX2RlbGV0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVMb2NhbChkb2MsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3B1dExvY2FsKGRvYywgY2IpO1xuICAgIH1cbiAgfVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChvcHRzLmZvcmNlICYmIGRvYy5fcmV2KSB7XG4gICAgdHJhbnNmb3JtRm9yY2VPcHRpb25Ub05ld0VkaXRzT3B0aW9uKCk7XG4gICAgcHV0RG9jKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHZhciByZXN1bHQgPSBlcnIgPyBudWxsIDoge29rOiB0cnVlLCBpZDogZG9jLl9pZCwgcmV2OiBkb2MuX3Jldn07XG4gICAgICBjYihlcnIsIHJlc3VsdCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcHV0RG9jKGNiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUZvcmNlT3B0aW9uVG9OZXdFZGl0c09wdGlvbigpIHtcbiAgICB2YXIgcGFydHMgPSBkb2MuX3Jldi5zcGxpdCgnLScpO1xuICAgIHZhciBvbGRSZXZJZCA9IHBhcnRzWzFdO1xuICAgIHZhciBvbGRSZXZOdW0gPSBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuXG4gICAgdmFyIG5ld1Jldk51bSA9IG9sZFJldk51bSArIDE7XG4gICAgdmFyIG5ld1JldklkID0gcmV2KCk7XG5cbiAgICBkb2MuX3JldmlzaW9ucyA9IHtcbiAgICAgIHN0YXJ0OiBuZXdSZXZOdW0sXG4gICAgICBpZHM6IFtuZXdSZXZJZCwgb2xkUmV2SWRdXG4gICAgfTtcbiAgICBkb2MuX3JldiA9IG5ld1Jldk51bSArICctJyArIG5ld1JldklkO1xuICAgIG9wdHMubmV3X2VkaXRzID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gcHV0RG9jKG5leHQpIHtcbiAgICBpZiAodHlwZW9mIHNlbGYuX3B1dCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRzLm5ld19lZGl0cyAhPT0gZmFsc2UpIHtcbiAgICAgIHNlbGYuX3B1dChkb2MsIG9wdHMsIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmJ1bGtEb2NzKHtkb2NzOiBbZG9jXX0sIG9wdHMsIHlhbmtFcnJvcihuZXh0LCBkb2MuX2lkKSk7XG4gICAgfVxuICB9XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5wdXRBdHRhY2htZW50ID1cbiAgYWRhcHRlckZ1bigncHV0QXR0YWNobWVudCcsIGZ1bmN0aW9uIChkb2NJZCwgYXR0YWNobWVudElkLCByZXYkJDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvYiwgdHlwZSkge1xuICB2YXIgYXBpID0gdGhpcztcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHlwZSA9IGJsb2I7XG4gICAgYmxvYiA9IHJldiQkMTtcbiAgICByZXYkJDEgPSBudWxsO1xuICB9XG4gIC8vIExldHMgZml4IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvaXNzdWVzLzMyNjdcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gYmxvYjtcbiAgICBibG9iID0gcmV2JCQxO1xuICAgIHJldiQkMSA9IG51bGw7XG4gIH1cbiAgaWYgKCF0eXBlKSB7XG4gICAgZ3VhcmRlZENvbnNvbGUoJ3dhcm4nLCAnQXR0YWNobWVudCcsIGF0dGFjaG1lbnRJZCwgJ29uIGRvY3VtZW50JywgZG9jSWQsICdpcyBtaXNzaW5nIGNvbnRlbnRfdHlwZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXR0YWNobWVudChkb2MpIHtcbiAgICB2YXIgcHJldnJldnBvcyA9ICdfcmV2JyBpbiBkb2MgPyBwYXJzZUludChkb2MuX3JldiwgMTApIDogMDtcbiAgICBkb2MuX2F0dGFjaG1lbnRzID0gZG9jLl9hdHRhY2htZW50cyB8fCB7fTtcbiAgICBkb2MuX2F0dGFjaG1lbnRzW2F0dGFjaG1lbnRJZF0gPSB7XG4gICAgICBjb250ZW50X3R5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBibG9iLFxuICAgICAgcmV2cG9zOiArK3ByZXZyZXZwb3NcbiAgICB9O1xuICAgIHJldHVybiBhcGkucHV0KGRvYyk7XG4gIH1cblxuICByZXR1cm4gYXBpLmdldChkb2NJZCkudGhlbihmdW5jdGlvbiAoZG9jKSB7XG4gICAgaWYgKGRvYy5fcmV2ICE9PSByZXYkJDEpIHtcbiAgICAgIHRocm93IGNyZWF0ZUVycm9yKFJFVl9DT05GTElDVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUF0dGFjaG1lbnQoZG9jKTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAvLyBjcmVhdGUgbmV3IGRvY1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVyci5yZWFzb24gPT09IE1JU1NJTkdfRE9DLm1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBjcmVhdGVBdHRhY2htZW50KHtfaWQ6IGRvY0lkfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUucmVtb3ZlQXR0YWNobWVudCA9XG4gIGFkYXB0ZXJGdW4oJ3JlbW92ZUF0dGFjaG1lbnQnLCBmdW5jdGlvbiAoZG9jSWQsIGF0dGFjaG1lbnRJZCwgcmV2JCQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5nZXQoZG9jSWQsIGZ1bmN0aW9uIChlcnIsIG9iaikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvYmouX3JldiAhPT0gcmV2JCQxKSB7XG4gICAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihSRVZfQ09ORkxJQ1QpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFvYmouX2F0dGFjaG1lbnRzKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgZGVsZXRlIG9iai5fYXR0YWNobWVudHNbYXR0YWNobWVudElkXTtcbiAgICBpZiAoT2JqZWN0LmtleXMob2JqLl9hdHRhY2htZW50cykubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgb2JqLl9hdHRhY2htZW50cztcbiAgICB9XG4gICAgc2VsZi5wdXQob2JqLCBjYWxsYmFjayk7XG4gIH0pO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUucmVtb3ZlID1cbiAgYWRhcHRlckZ1bigncmVtb3ZlJywgZnVuY3Rpb24gKGRvY09ySWQsIG9wdHNPclJldiwgb3B0cywgY2FsbGJhY2spIHtcbiAgdmFyIGRvYztcbiAgaWYgKHR5cGVvZiBvcHRzT3JSZXYgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gaWQsIHJldiwgb3B0cywgY2FsbGJhY2sgc3R5bGVcbiAgICBkb2MgPSB7XG4gICAgICBfaWQ6IGRvY09ySWQsXG4gICAgICBfcmV2OiBvcHRzT3JSZXZcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MsIG9wdHMsIGNhbGxiYWNrIHN0eWxlXG4gICAgZG9jID0gZG9jT3JJZDtcbiAgICBpZiAodHlwZW9mIG9wdHNPclJldiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzT3JSZXY7XG4gICAgICBvcHRzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSBvcHRzT3JSZXY7XG4gICAgfVxuICB9XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBvcHRzLndhc19kZWxldGUgPSB0cnVlO1xuICB2YXIgbmV3RG9jID0ge19pZDogZG9jLl9pZCwgX3JldjogKGRvYy5fcmV2IHx8IG9wdHMucmV2KX07XG4gIG5ld0RvYy5fZGVsZXRlZCA9IHRydWU7XG4gIGlmIChpc0xvY2FsSWQobmV3RG9jLl9pZCkgJiYgdHlwZW9mIHRoaXMuX3JlbW92ZUxvY2FsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUxvY2FsKGRvYywgY2FsbGJhY2spO1xuICB9XG4gIHRoaXMuYnVsa0RvY3Moe2RvY3M6IFtuZXdEb2NdfSwgb3B0cywgeWFua0Vycm9yKGNhbGxiYWNrLCBuZXdEb2MuX2lkKSk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5yZXZzRGlmZiA9XG4gIGFkYXB0ZXJGdW4oJ3JldnNEaWZmJywgZnVuY3Rpb24gKHJlcSwgb3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB2YXIgaWRzID0gT2JqZWN0LmtleXMocmVxKTtcblxuICBpZiAoIWlkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwge30pO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIG1pc3NpbmcgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcblxuICBmdW5jdGlvbiBhZGRUb01pc3NpbmcoaWQsIHJldklkKSB7XG4gICAgaWYgKCFtaXNzaW5nLmhhcyhpZCkpIHtcbiAgICAgIG1pc3Npbmcuc2V0KGlkLCB7bWlzc2luZzogW119KTtcbiAgICB9XG4gICAgbWlzc2luZy5nZXQoaWQpLm1pc3NpbmcucHVzaChyZXZJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRG9jKGlkLCByZXZfdHJlZSkge1xuICAgIC8vIElzIHRoaXMgZmFzdCBlbm91Z2g/IE1heWJlIHdlIHNob3VsZCBzd2l0Y2ggdG8gYSBzZXQgc2ltdWxhdGVkIGJ5IGEgbWFwXG4gICAgdmFyIG1pc3NpbmdGb3JJZCA9IHJlcVtpZF0uc2xpY2UoMCk7XG4gICAgdHJhdmVyc2VSZXZUcmVlKHJldl90cmVlLCBmdW5jdGlvbiAoaXNMZWFmLCBwb3MsIHJldkhhc2gsIGN0eCxcbiAgICAgIG9wdHMpIHtcbiAgICAgICAgdmFyIHJldiQkMSA9IHBvcyArICctJyArIHJldkhhc2g7XG4gICAgICAgIHZhciBpZHggPSBtaXNzaW5nRm9ySWQuaW5kZXhPZihyZXYkJDEpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1pc3NpbmdGb3JJZC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChvcHRzLnN0YXR1cyAhPT0gJ2F2YWlsYWJsZScpIHtcbiAgICAgICAgICBhZGRUb01pc3NpbmcoaWQsIHJldiQkMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gVHJhdmVyc2luZyB0aGUgdHJlZSBpcyBzeW5jaHJvbm91cywgc28gbm93IGBtaXNzaW5nRm9ySWRgIGNvbnRhaW5zXG4gICAgLy8gcmV2aXNpb25zIHRoYXQgd2VyZSBub3QgZm91bmQgaW4gdGhlIHRyZWVcbiAgICBtaXNzaW5nRm9ySWQuZm9yRWFjaChmdW5jdGlvbiAocmV2JCQxKSB7XG4gICAgICBhZGRUb01pc3NpbmcoaWQsIHJldiQkMSk7XG4gICAgfSk7XG4gIH1cblxuICBpZHMubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgIHRoaXMuX2dldFJldmlzaW9uVHJlZShpZCwgZnVuY3Rpb24gKGVyciwgcmV2X3RyZWUpIHtcbiAgICAgIGlmIChlcnIgJiYgZXJyLnN0YXR1cyA9PT0gNDA0ICYmIGVyci5tZXNzYWdlID09PSAnbWlzc2luZycpIHtcbiAgICAgICAgbWlzc2luZy5zZXQoaWQsIHttaXNzaW5nOiByZXFbaWRdfSk7XG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NEb2MoaWQsIHJldl90cmVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCsrY291bnQgPT09IGlkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gY29udmVydCBMYXp5TWFwIHRvIG9iamVjdFxuICAgICAgICB2YXIgbWlzc2luZ09iaiA9IHt9O1xuICAgICAgICBtaXNzaW5nLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICBtaXNzaW5nT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBtaXNzaW5nT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgdGhpcyk7XG59KTtcblxuLy8gX2J1bGtfZ2V0IEFQSSBmb3IgZmFzdGVyIHJlcGxpY2F0aW9uLCBhcyBkZXNjcmliZWQgaW5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY291Y2hkYi1jaHR0cGQvcHVsbC8zM1xuLy8gQXQgdGhlIFwiYWJzdHJhY3RcIiBsZXZlbCwgaXQgd2lsbCBqdXN0IHJ1biBtdWx0aXBsZSBnZXQoKXMgaW5cbi8vIHBhcmFsbGVsLCBiZWNhdXNlIHRoaXMgaXNuJ3QgbXVjaCBvZiBhIHBlcmZvcm1hbmNlIGNvc3Rcbi8vIGZvciBsb2NhbCBkYXRhYmFzZXMgKGV4Y2VwdCB0aGUgY29zdCBvZiBtdWx0aXBsZSB0cmFuc2FjdGlvbnMsIHdoaWNoIGlzXG4vLyBzbWFsbCkuIFRoZSBodHRwIGFkYXB0ZXIgb3ZlcnJpZGVzIHRoaXMgaW4gb3JkZXJcbi8vIHRvIGRvIGEgbW9yZSBlZmZpY2llbnQgc2luZ2xlIEhUVFAgcmVxdWVzdC5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuYnVsa0dldCA9XG4gIGFkYXB0ZXJGdW4oJ2J1bGtHZXQnLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgYnVsa0dldCh0aGlzLCBvcHRzLCBjYWxsYmFjayk7XG59KTtcblxuLy8gY29tcGFjdCBvbmUgZG9jdW1lbnQgYW5kIGZpcmUgY2FsbGJhY2tcbi8vIGJ5IGNvbXBhY3Rpbmcgd2UgbWVhbiByZW1vdmluZyBhbGwgcmV2aXNpb25zIHdoaWNoXG4vLyBhcmUgZnVydGhlciBmcm9tIHRoZSBsZWFmIGluIHJldmlzaW9uIHRyZWUgdGhhbiBtYXhfaGVpZ2h0XG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmNvbXBhY3REb2N1bWVudCA9XG4gIGFkYXB0ZXJGdW4oJ2NvbXBhY3REb2N1bWVudCcsIGZ1bmN0aW9uIChkb2NJZCwgbWF4SGVpZ2h0LCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2dldFJldmlzaW9uVHJlZShkb2NJZCwgZnVuY3Rpb24gKGVyciwgcmV2VHJlZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIH1cbiAgICB2YXIgaGVpZ2h0ID0gY29tcHV0ZUhlaWdodChyZXZUcmVlKTtcbiAgICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICAgIHZhciByZXZzID0gW107XG4gICAgT2JqZWN0LmtleXMoaGVpZ2h0KS5mb3JFYWNoKGZ1bmN0aW9uIChyZXYkJDEpIHtcbiAgICAgIGlmIChoZWlnaHRbcmV2JCQxXSA+IG1heEhlaWdodCkge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2gocmV2JCQxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyYXZlcnNlUmV2VHJlZShyZXZUcmVlLCBmdW5jdGlvbiAoaXNMZWFmLCBwb3MsIHJldkhhc2gsIGN0eCwgb3B0cykge1xuICAgICAgdmFyIHJldiQkMSA9IHBvcyArICctJyArIHJldkhhc2g7XG4gICAgICBpZiAob3B0cy5zdGF0dXMgPT09ICdhdmFpbGFibGUnICYmIGNhbmRpZGF0ZXMuaW5kZXhPZihyZXYkJDEpICE9PSAtMSkge1xuICAgICAgICByZXZzLnB1c2gocmV2JCQxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxmLl9kb0NvbXBhY3Rpb24oZG9jSWQsIHJldnMsIGNhbGxiYWNrKTtcbiAgfSk7XG59KTtcblxuLy8gY29tcGFjdCB0aGUgd2hvbGUgZGF0YWJhc2UgdXNpbmcgc2luZ2xlIGRvY3VtZW50XG4vLyBjb21wYWN0aW9uXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmNvbXBhY3QgPVxuICBhZGFwdGVyRnVuKCdjb21wYWN0JywgZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHNlbGYuX2NvbXBhY3Rpb25RdWV1ZSA9IHNlbGYuX2NvbXBhY3Rpb25RdWV1ZSB8fCBbXTtcbiAgc2VsZi5fY29tcGFjdGlvblF1ZXVlLnB1c2goe29wdHM6IG9wdHMsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xuICBpZiAoc2VsZi5fY29tcGFjdGlvblF1ZXVlLmxlbmd0aCA9PT0gMSkge1xuICAgIGRvTmV4dENvbXBhY3Rpb24oc2VsZik7XG4gIH1cbn0pO1xuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5fY29tcGFjdCA9IGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFuZ2VzT3B0cyA9IHtcbiAgICByZXR1cm5fZG9jczogZmFsc2UsXG4gICAgbGFzdF9zZXE6IG9wdHMubGFzdF9zZXEgfHwgMFxuICB9O1xuICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShyb3cpIHtcbiAgICBwcm9taXNlcy5wdXNoKHNlbGYuY29tcGFjdERvY3VtZW50KHJvdy5pZCwgMCkpO1xuICB9XG4gIGZ1bmN0aW9uIG9uQ29tcGxldGUocmVzcCkge1xuICAgIHZhciBsYXN0U2VxID0gcmVzcC5sYXN0X3NlcTtcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdXBzZXJ0KHNlbGYsICdfbG9jYWwvY29tcGFjdGlvbicsIGZ1bmN0aW9uIGRlbHRhRnVuYyhkb2MpIHtcbiAgICAgICAgaWYgKCFkb2MubGFzdF9zZXEgfHwgZG9jLmxhc3Rfc2VxIDwgbGFzdFNlcSkge1xuICAgICAgICAgIGRvYy5sYXN0X3NlcSA9IGxhc3RTZXE7XG4gICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHNvbWVib2R5IGVsc2UgZ290IGhlcmUgZmlyc3QsIGRvbid0IHVwZGF0ZVxuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB7b2s6IHRydWV9KTtcbiAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gIH1cbiAgc2VsZi5jaGFuZ2VzKGNoYW5nZXNPcHRzKVxuICAgIC5vbignY2hhbmdlJywgb25DaGFuZ2UpXG4gICAgLm9uKCdjb21wbGV0ZScsIG9uQ29tcGxldGUpXG4gICAgLm9uKCdlcnJvcicsIGNhbGxiYWNrKTtcbn07XG5cbi8qIEJlZ2luIGFwaSB3cmFwcGVycy4gU3BlY2lmaWMgZnVuY3Rpb25hbGl0eSB0byBzdG9yYWdlIGJlbG9uZ3MgaW4gdGhlXG4gICBfW21ldGhvZF0gKi9cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuZ2V0ID0gYWRhcHRlckZ1bignZ2V0JywgZnVuY3Rpb24gKGlkLCBvcHRzLCBjYikge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGNiKGNyZWF0ZUVycm9yKElOVkFMSURfSUQpKTtcbiAgfVxuICBpZiAoaXNMb2NhbElkKGlkKSAmJiB0eXBlb2YgdGhpcy5fZ2V0TG9jYWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TG9jYWwoaWQsIGNiKTtcbiAgfVxuICB2YXIgbGVhdmVzID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpbmlzaE9wZW5SZXZzKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY291bnQgPSBsZWF2ZXMubGVuZ3RoO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY291bnQpIHtcbiAgICAgIHJldHVybiBjYihudWxsLCByZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIG9yZGVyIHdpdGggb3Blbl9yZXZzIGlzIHVuc3BlY2lmaWVkXG4gICAgbGVhdmVzLmZvckVhY2goZnVuY3Rpb24gKGxlYWYpIHtcbiAgICAgIHNlbGYuZ2V0KGlkLCB7XG4gICAgICAgIHJldjogbGVhZixcbiAgICAgICAgcmV2czogb3B0cy5yZXZzLFxuICAgICAgICBsYXRlc3Q6IG9wdHMubGF0ZXN0LFxuICAgICAgICBhdHRhY2htZW50czogb3B0cy5hdHRhY2htZW50cyxcbiAgICAgICAgYmluYXJ5OiBvcHRzLmJpbmFyeVxuICAgICAgfSwgZnVuY3Rpb24gKGVyciwgZG9jKSB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgLy8gdXNpbmcgbGF0ZXN0PXRydWUgY2FuIHByb2R1Y2UgZHVwbGljYXRlc1xuICAgICAgICAgIHZhciBleGlzdGluZztcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbaV0ub2sgJiYgcmVzdWx0W2ldLm9rLl9yZXYgPT09IGRvYy5fcmV2KSB7XG4gICAgICAgICAgICAgIGV4aXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtvazogZG9jfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHttaXNzaW5nOiBsZWFmfSk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgIGNiKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKG9wdHMub3Blbl9yZXZzKSB7XG4gICAgaWYgKG9wdHMub3Blbl9yZXZzID09PSBcImFsbFwiKSB7XG4gICAgICB0aGlzLl9nZXRSZXZpc2lvblRyZWUoaWQsIGZ1bmN0aW9uIChlcnIsIHJldl90cmVlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgbGVhdmVzID0gY29sbGVjdExlYXZlcyhyZXZfdHJlZSkubWFwKGZ1bmN0aW9uIChsZWFmKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWYucmV2O1xuICAgICAgICB9KTtcbiAgICAgICAgZmluaXNoT3BlblJldnMoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLm9wZW5fcmV2cykpIHtcbiAgICAgICAgbGVhdmVzID0gb3B0cy5vcGVuX3JldnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVhdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGwgPSBsZWF2ZXNbaV07XG4gICAgICAgICAgLy8gbG9va3MgbGlrZSBpdCdzIHRoZSBvbmx5IHRoaW5nIGNvdWNoZGIgY2hlY2tzXG4gICAgICAgICAgaWYgKCEodHlwZW9mIChsKSA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcZCstLy50ZXN0KGwpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKGNyZWF0ZUVycm9yKElOVkFMSURfUkVWKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmlzaE9wZW5SZXZzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2IoY3JlYXRlRXJyb3IoVU5LTk9XTl9FUlJPUiwgJ2Z1bmN0aW9uX2NsYXVzZScpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuOyAvLyBvcGVuX3JldnMgZG9lcyBub3QgbGlrZSBvdGhlciBvcHRpb25zXG4gIH1cblxuICByZXR1cm4gdGhpcy5fZ2V0KGlkLCBvcHRzLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBlcnIuZG9jSWQgPSBpZDtcbiAgICAgIHJldHVybiBjYihlcnIpO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSByZXN1bHQuZG9jO1xuICAgIHZhciBtZXRhZGF0YSA9IHJlc3VsdC5tZXRhZGF0YTtcbiAgICB2YXIgY3R4ID0gcmVzdWx0LmN0eDtcblxuICAgIGlmIChvcHRzLmNvbmZsaWN0cykge1xuICAgICAgdmFyIGNvbmZsaWN0cyA9IGNvbGxlY3RDb25mbGljdHMobWV0YWRhdGEpO1xuICAgICAgaWYgKGNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9jLl9jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRGVsZXRlZChtZXRhZGF0YSwgZG9jLl9yZXYpKSB7XG4gICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnJldnMgfHwgb3B0cy5yZXZzX2luZm8pIHtcbiAgICAgIHZhciBzcGxpdHRlZFJldiA9IGRvYy5fcmV2LnNwbGl0KCctJyk7XG4gICAgICB2YXIgcmV2Tm8gICAgICAgPSBwYXJzZUludChzcGxpdHRlZFJldlswXSwgMTApO1xuICAgICAgdmFyIHJldkhhc2ggICAgID0gc3BsaXR0ZWRSZXZbMV07XG5cbiAgICAgIHZhciBwYXRocyA9IHJvb3RUb0xlYWYobWV0YWRhdGEucmV2X3RyZWUpO1xuICAgICAgdmFyIHBhdGggPSBudWxsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IHBhdGhzW2ldO1xuICAgICAgICB2YXIgaGFzaEluZGV4ID0gY3VycmVudFBhdGguaWRzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5pZDsgfSlcbiAgICAgICAgICAuaW5kZXhPZihyZXZIYXNoKTtcbiAgICAgICAgdmFyIGhhc2hGb3VuZEF0UmV2UG9zID0gaGFzaEluZGV4ID09PSAocmV2Tm8gLSAxKTtcblxuICAgICAgICBpZiAoaGFzaEZvdW5kQXRSZXZQb3MgfHwgKCFwYXRoICYmIGhhc2hJbmRleCAhPT0gLTEpKSB7XG4gICAgICAgICAgcGF0aCA9IGN1cnJlbnRQYXRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIGVyciA9IG5ldyBFcnJvcignaW52YWxpZCByZXYgdHJlZScpO1xuICAgICAgICBlcnIuZG9jSWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleE9mUmV2ID0gcGF0aC5pZHMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmlkOyB9KVxuICAgICAgICAuaW5kZXhPZihkb2MuX3Jldi5zcGxpdCgnLScpWzFdKSArIDE7XG4gICAgICB2YXIgaG93TWFueSA9IHBhdGguaWRzLmxlbmd0aCAtIGluZGV4T2ZSZXY7XG4gICAgICBwYXRoLmlkcy5zcGxpY2UoaW5kZXhPZlJldiwgaG93TWFueSk7XG4gICAgICBwYXRoLmlkcy5yZXZlcnNlKCk7XG5cbiAgICAgIGlmIChvcHRzLnJldnMpIHtcbiAgICAgICAgZG9jLl9yZXZpc2lvbnMgPSB7XG4gICAgICAgICAgc3RhcnQ6IChwYXRoLnBvcyArIHBhdGguaWRzLmxlbmd0aCkgLSAxLFxuICAgICAgICAgIGlkczogcGF0aC5pZHMubWFwKGZ1bmN0aW9uIChyZXYkJDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXYkJDEuaWQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLnJldnNfaW5mbykge1xuICAgICAgICB2YXIgcG9zID0gIHBhdGgucG9zICsgcGF0aC5pZHMubGVuZ3RoO1xuICAgICAgICBkb2MuX3JldnNfaW5mbyA9IHBhdGguaWRzLm1hcChmdW5jdGlvbiAocmV2JCQxKSB7XG4gICAgICAgICAgcG9zLS07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJldjogcG9zICsgJy0nICsgcmV2JCQxLmlkLFxuICAgICAgICAgICAgc3RhdHVzOiByZXYkJDEub3B0cy5zdGF0dXNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0cy5hdHRhY2htZW50cyAmJiBkb2MuX2F0dGFjaG1lbnRzKSB7XG4gICAgICB2YXIgYXR0YWNobWVudHMgPSBkb2MuX2F0dGFjaG1lbnRzO1xuICAgICAgdmFyIGNvdW50ID0gT2JqZWN0LmtleXMoYXR0YWNobWVudHMpLmxlbmd0aDtcbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgZG9jKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGF0dGFjaG1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5fZ2V0QXR0YWNobWVudChkb2MuX2lkLCBrZXksIGF0dGFjaG1lbnRzW2tleV0sIHtcbiAgICAgICAgICAvLyBQcmV2aW91c2x5IHRoZSByZXZpc2lvbiBoYW5kbGluZyB3YXMgZG9uZSBpbiBhZGFwdGVyLmpzXG4gICAgICAgICAgLy8gZ2V0QXR0YWNobWVudCwgaG93ZXZlciBzaW5jZSBpZGItbmV4dCBkb2VzbnQgd2UgbmVlZCB0b1xuICAgICAgICAgIC8vIHBhc3MgdGhlIHJldiB0aHJvdWdoXG4gICAgICAgICAgcmV2OiBkb2MuX3JldixcbiAgICAgICAgICBiaW5hcnk6IG9wdHMuYmluYXJ5LFxuICAgICAgICAgIGN0eDogY3R4XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgICB2YXIgYXR0ID0gZG9jLl9hdHRhY2htZW50c1trZXldO1xuICAgICAgICAgIGF0dC5kYXRhID0gZGF0YTtcbiAgICAgICAgICBkZWxldGUgYXR0LnN0dWI7XG4gICAgICAgICAgZGVsZXRlIGF0dC5sZW5ndGg7XG4gICAgICAgICAgaWYgKCEtLWNvdW50KSB7XG4gICAgICAgICAgICBjYihudWxsLCBkb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBzZWxmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmIChkb2MuX2F0dGFjaG1lbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGRvYy5fYXR0YWNobWVudHNba2V5XS5zdHViID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKG51bGwsIGRvYyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBUT0RPOiBJIGRvbnQgbGlrZSB0aGlzLCBpdCBmb3JjZXMgYW4gZXh0cmEgcmVhZCBmb3IgZXZlcnlcbi8vIGF0dGFjaG1lbnQgcmVhZCBhbmQgZW5mb3JjZXMgYSBjb25mdXNpbmcgYXBpIGJldHdlZW5cbi8vIGFkYXB0ZXIuanMgYW5kIHRoZSBhZGFwdGVyIGltcGxlbWVudGF0aW9uXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmdldEF0dGFjaG1lbnQgPVxuICBhZGFwdGVyRnVuKCdnZXRBdHRhY2htZW50JywgZnVuY3Rpb24gKGRvY0lkLCBhdHRhY2htZW50SWQsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKG9wdHMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgdGhpcy5fZ2V0KGRvY0lkLCBvcHRzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gICAgaWYgKHJlcy5kb2MuX2F0dGFjaG1lbnRzICYmIHJlcy5kb2MuX2F0dGFjaG1lbnRzW2F0dGFjaG1lbnRJZF0pIHtcbiAgICAgIG9wdHMuY3R4ID0gcmVzLmN0eDtcbiAgICAgIG9wdHMuYmluYXJ5ID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2dldEF0dGFjaG1lbnQoZG9jSWQsIGF0dGFjaG1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRvYy5fYXR0YWNobWVudHNbYXR0YWNobWVudElkXSwgb3B0cywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoTUlTU0lOR19ET0MpKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuYWxsRG9jcyA9XG4gIGFkYXB0ZXJGdW4oJ2FsbERvY3MnLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBvcHRzLnNraXAgPSB0eXBlb2Ygb3B0cy5za2lwICE9PSAndW5kZWZpbmVkJyA/IG9wdHMuc2tpcCA6IDA7XG4gIGlmIChvcHRzLnN0YXJ0X2tleSkge1xuICAgIG9wdHMuc3RhcnRrZXkgPSBvcHRzLnN0YXJ0X2tleTtcbiAgfVxuICBpZiAob3B0cy5lbmRfa2V5KSB7XG4gICAgb3B0cy5lbmRrZXkgPSBvcHRzLmVuZF9rZXk7XG4gIH1cbiAgaWYgKCdrZXlzJyBpbiBvcHRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdHMua2V5cykpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVHlwZUVycm9yKCdvcHRpb25zLmtleXMgbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgICB9XG4gICAgdmFyIGluY29tcGF0aWJsZU9wdCA9XG4gICAgICBbJ3N0YXJ0a2V5JywgJ2VuZGtleScsICdrZXknXS5maWx0ZXIoZnVuY3Rpb24gKGluY29tcGF0aWJsZU9wdCkge1xuICAgICAgcmV0dXJuIGluY29tcGF0aWJsZU9wdCBpbiBvcHRzO1xuICAgIH0pWzBdO1xuICAgIGlmIChpbmNvbXBhdGlibGVPcHQpIHtcbiAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKFFVRVJZX1BBUlNFX0VSUk9SLFxuICAgICAgICAnUXVlcnkgcGFyYW1ldGVyIGAnICsgaW5jb21wYXRpYmxlT3B0ICtcbiAgICAgICAgJ2AgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBtdWx0aS1nZXQnXG4gICAgICApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1JlbW90ZSh0aGlzKSkge1xuICAgICAgYWxsRG9jc0tleXNQYXJzZShvcHRzKTtcbiAgICAgIGlmIChvcHRzLmtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxEb2NzKHtsaW1pdDogMH0sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5fYWxsRG9jcyhvcHRzLCBjYWxsYmFjayk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5jaGFuZ2VzID0gZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAvLyBCeSBkZWZhdWx0IHNldCByZXR1cm5fZG9jcyB0byBmYWxzZSBpZiB0aGUgY2FsbGVyIGhhcyBvcHRzLmxpdmUgPSB0cnVlLFxuICAvLyB0aGlzIHdpbGwgcHJldmVudCB1cyBmcm9tIGNvbGxlY3RpbmcgdGhlIHNldCBvZiBjaGFuZ2VzIGluZGVmaW5pdGVseVxuICAvLyByZXN1bHRpbmcgaW4gZ3Jvd2luZyBtZW1vcnlcbiAgb3B0cy5yZXR1cm5fZG9jcyA9ICgncmV0dXJuX2RvY3MnIGluIG9wdHMpID8gb3B0cy5yZXR1cm5fZG9jcyA6ICFvcHRzLmxpdmU7XG5cbiAgcmV0dXJuIG5ldyBDaGFuZ2VzJDEodGhpcywgb3B0cywgY2FsbGJhY2spO1xufTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5jbG9zZSA9IGFkYXB0ZXJGdW4oJ2Nsb3NlJywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gIHRoaXMuZW1pdCgnY2xvc2VkJyk7XG4gIHJldHVybiB0aGlzLl9jbG9zZShjYWxsYmFjayk7XG59KTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5pbmZvID0gYWRhcHRlckZ1bignaW5mbycsIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2luZm8oZnVuY3Rpb24gKGVyciwgaW5mbykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIH1cbiAgICAvLyBhc3N1bWUgd2Uga25vdyBiZXR0ZXIgdGhhbiB0aGUgYWRhcHRlciwgdW5sZXNzIGl0IGluZm9ybXMgdXNcbiAgICBpbmZvLmRiX25hbWUgPSBpbmZvLmRiX25hbWUgfHwgc2VsZi5uYW1lO1xuICAgIGluZm8uYXV0b19jb21wYWN0aW9uID0gISEoc2VsZi5hdXRvX2NvbXBhY3Rpb24gJiYgIWlzUmVtb3RlKHNlbGYpKTtcbiAgICBpbmZvLmFkYXB0ZXIgPSBzZWxmLmFkYXB0ZXI7XG4gICAgY2FsbGJhY2sobnVsbCwgaW5mbyk7XG4gIH0pO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUuaWQgPSBhZGFwdGVyRnVuKCdpZCcsIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy5faWQoY2FsbGJhY2spO1xufSk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaXMuX3R5cGUgPT09ICdmdW5jdGlvbicpID8gdGhpcy5fdHlwZSgpIDogdGhpcy5hZGFwdGVyO1xufTtcblxuQWJzdHJhY3RQb3VjaERCLnByb3RvdHlwZS5idWxrRG9jcyA9XG4gIGFkYXB0ZXJGdW4oJ2J1bGtEb2NzJywgZnVuY3Rpb24gKHJlcSwgb3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlcSkpIHtcbiAgICByZXEgPSB7XG4gICAgICBkb2NzOiByZXFcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFyZXEgfHwgIXJlcS5kb2NzIHx8ICFBcnJheS5pc0FycmF5KHJlcS5kb2NzKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0JVTEtfRE9DUykpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXEuZG9jcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0eXBlb2YgcmVxLmRvY3NbaV0gIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocmVxLmRvY3NbaV0pKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoTk9UX0FOX09CSkVDVCkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhdHRhY2htZW50RXJyb3I7XG4gIHJlcS5kb2NzLmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgIGlmIChkb2MuX2F0dGFjaG1lbnRzKSB7XG4gICAgICBPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGF0dGFjaG1lbnRFcnJvciA9IGF0dGFjaG1lbnRFcnJvciB8fCBhdHRhY2htZW50TmFtZUVycm9yKG5hbWUpO1xuICAgICAgICBpZiAoIWRvYy5fYXR0YWNobWVudHNbbmFtZV0uY29udGVudF90eXBlKSB7XG4gICAgICAgICAgZ3VhcmRlZENvbnNvbGUoJ3dhcm4nLCAnQXR0YWNobWVudCcsIG5hbWUsICdvbiBkb2N1bWVudCcsIGRvYy5faWQsICdpcyBtaXNzaW5nIGNvbnRlbnRfdHlwZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChhdHRhY2htZW50RXJyb3IpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoQkFEX1JFUVVFU1QsIGF0dGFjaG1lbnRFcnJvcikpO1xuICB9XG5cbiAgaWYgKCEoJ25ld19lZGl0cycgaW4gb3B0cykpIHtcbiAgICBpZiAoJ25ld19lZGl0cycgaW4gcmVxKSB7XG4gICAgICBvcHRzLm5ld19lZGl0cyA9IHJlcS5uZXdfZWRpdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMubmV3X2VkaXRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB2YXIgYWRhcHRlciA9IHRoaXM7XG4gIGlmICghb3B0cy5uZXdfZWRpdHMgJiYgIWlzUmVtb3RlKGFkYXB0ZXIpKSB7XG4gICAgLy8gZW5zdXJlIHJldmlzaW9ucyBvZiB0aGUgc2FtZSBkb2MgYXJlIHNvcnRlZCwgc28gdGhhdFxuICAgIC8vIHRoZSBsb2NhbCBhZGFwdGVyIHByb2Nlc3NlcyB0aGVtIGNvcnJlY3RseSAoIzI5MzUpXG4gICAgcmVxLmRvY3Muc29ydChjb21wYXJlQnlJZFRoZW5SZXYpO1xuICB9XG5cbiAgY2xlYW5Eb2NzKHJlcS5kb2NzKTtcblxuICAvLyBpbiB0aGUgY2FzZSBvZiBjb25mbGljdHMsIHdlIHdhbnQgdG8gcmV0dXJuIHRoZSBfaWRzIHRvIHRoZSB1c2VyXG4gIC8vIGhvd2V2ZXIsIHRoZSB1bmRlcmx5aW5nIGFkYXB0ZXIgbWF5IGRlc3Ryb3kgdGhlIGRvY3MgYXJyYXksIHNvXG4gIC8vIGNyZWF0ZSBhIGNvcHkgaGVyZVxuICB2YXIgaWRzID0gcmVxLmRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICByZXR1cm4gZG9jLl9pZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXMuX2J1bGtEb2NzKHJlcSwgb3B0cywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIGlmICghb3B0cy5uZXdfZWRpdHMpIHtcbiAgICAgIC8vIHRoaXMgaXMgd2hhdCBjb3VjaCBkb2VzIHdoZW4gbmV3X2VkaXRzIGlzIGZhbHNlXG4gICAgICByZXMgPSByZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmVycm9yO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGFkZCBpZHMgZm9yIGVycm9yL2NvbmZsaWN0IHJlc3BvbnNlcyAobm90IHJlcXVpcmVkIGZvciBDb3VjaERCKVxuICAgIGlmICghaXNSZW1vdGUoYWRhcHRlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXNbaV0uaWQgPSByZXNbaV0uaWQgfHwgaWRzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gIH0pO1xufSk7XG5cbkFic3RyYWN0UG91Y2hEQi5wcm90b3R5cGUucmVnaXN0ZXJEZXBlbmRlbnREYXRhYmFzZSA9XG4gIGFkYXB0ZXJGdW4oJ3JlZ2lzdGVyRGVwZW5kZW50RGF0YWJhc2UnLCBmdW5jdGlvbiAoZGVwZW5kZW50RGIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2spIHtcbiAgdmFyIGRlcERCID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZGVwZW5kZW50RGIsIHRoaXMuX19vcHRzKTtcblxuICBmdW5jdGlvbiBkaWZmRnVuKGRvYykge1xuICAgIGRvYy5kZXBlbmRlbnREYnMgPSBkb2MuZGVwZW5kZW50RGJzIHx8IHt9O1xuICAgIGlmIChkb2MuZGVwZW5kZW50RGJzW2RlcGVuZGVudERiXSkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyB1cGRhdGUgcmVxdWlyZWRcbiAgICB9XG4gICAgZG9jLmRlcGVuZGVudERic1tkZXBlbmRlbnREYl0gPSB0cnVlO1xuICAgIHJldHVybiBkb2M7XG4gIH1cbiAgdXBzZXJ0KHRoaXMsICdfbG9jYWwvX3BvdWNoX2RlcGVuZGVudERicycsIGRpZmZGdW4pXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwge2RiOiBkZXBEQn0pO1xuICAgIH0pLmNhdGNoKGNhbGxiYWNrKTtcbn0pO1xuXG5BYnN0cmFjdFBvdWNoREIucHJvdG90eXBlLmRlc3Ryb3kgPVxuICBhZGFwdGVyRnVuKCdkZXN0cm95JywgZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHVzZVByZWZpeCA9ICd1c2VfcHJlZml4JyBpbiBzZWxmID8gc2VsZi51c2VfcHJlZml4IDogdHJ1ZTtcblxuICBmdW5jdGlvbiBkZXN0cm95RGIoKSB7XG4gICAgLy8gY2FsbCBkZXN0cm95IG1ldGhvZCBvZiB0aGUgcGFydGljdWxhciBhZGFwdG9yXG4gICAgc2VsZi5fZGVzdHJveShvcHRzLCBmdW5jdGlvbiAoZXJyLCByZXNwKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgc2VsZi5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuZW1pdCgnZGVzdHJveWVkJyk7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXNwIHx8IHsgJ29rJzogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc1JlbW90ZShzZWxmKSkge1xuICAgIC8vIG5vIG5lZWQgdG8gY2hlY2sgZm9yIGRlcGVuZGVudCBEQnMgaWYgaXQncyBhIHJlbW90ZSBEQlxuICAgIHJldHVybiBkZXN0cm95RGIoKTtcbiAgfVxuXG4gIHNlbGYuZ2V0KCdfbG9jYWwvX3BvdWNoX2RlcGVuZGVudERicycsIGZ1bmN0aW9uIChlcnIsIGxvY2FsRG9jKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZXJyLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfSBlbHNlIHsgLy8gbm8gZGVwZW5kZW5jaWVzXG4gICAgICAgIHJldHVybiBkZXN0cm95RGIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRlcGVuZGVudERicyA9IGxvY2FsRG9jLmRlcGVuZGVudERicztcbiAgICB2YXIgUG91Y2hEQiA9IHNlbGYuY29uc3RydWN0b3I7XG4gICAgdmFyIGRlbGV0ZWRNYXAgPSBPYmplY3Qua2V5cyhkZXBlbmRlbnREYnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgLy8gdXNlX3ByZWZpeCBpcyBvbmx5IGZhbHNlIGluIHRoZSBicm93c2VyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdmFyIHRydWVOYW1lID0gdXNlUHJlZml4ID9cbiAgICAgICAgbmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ14nICsgUG91Y2hEQi5wcmVmaXgpLCAnJykgOiBuYW1lO1xuICAgICAgcmV0dXJuIG5ldyBQb3VjaERCKHRydWVOYW1lLCBzZWxmLl9fb3B0cykuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIFByb21pc2UuYWxsKGRlbGV0ZWRNYXApLnRoZW4oZGVzdHJveURiLCBjYWxsYmFjayk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIFRhc2tRdWV1ZSgpIHtcbiAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gIHRoaXMuZmFpbGVkID0gZmFsc2U7XG4gIHRoaXMucXVldWUgPSBbXTtcbn1cblxuVGFza1F1ZXVlLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuO1xuICBpZiAodGhpcy5mYWlsZWQpIHtcbiAgICB3aGlsZSAoKGZ1biA9IHRoaXMucXVldWUuc2hpZnQoKSkpIHtcbiAgICAgIGZ1bih0aGlzLmZhaWxlZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdoaWxlICgoZnVuID0gdGhpcy5xdWV1ZS5zaGlmdCgpKSkge1xuICAgICAgZnVuKCk7XG4gICAgfVxuICB9XG59O1xuXG5UYXNrUXVldWUucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIHRoaXMuZmFpbGVkID0gZXJyO1xuICB0aGlzLmV4ZWN1dGUoKTtcbn07XG5cblRhc2tRdWV1ZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiAoZGIpIHtcbiAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgdGhpcy5kYiA9IGRiO1xuICB0aGlzLmV4ZWN1dGUoKTtcbn07XG5cblRhc2tRdWV1ZS5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgdGhpcy5xdWV1ZS5wdXNoKGZ1bik7XG4gIGlmICh0aGlzLmZhaWxlZCkge1xuICAgIHRoaXMuZXhlY3V0ZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwYXJzZUFkYXB0ZXIobmFtZSwgb3B0cykge1xuICB2YXIgbWF0Y2ggPSBuYW1lLm1hdGNoKC8oW2Etei1dKik6XFwvXFwvKC4qKS8pO1xuICBpZiAobWF0Y2gpIHtcbiAgICAvLyB0aGUgaHR0cCBhZGFwdGVyIGV4cGVjdHMgdGhlIGZ1bGx5IHF1YWxpZmllZCBuYW1lXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IC9odHRwcz8vLnRlc3QobWF0Y2hbMV0pID8gbWF0Y2hbMV0gKyAnOi8vJyArIG1hdGNoWzJdIDogbWF0Y2hbMl0sXG4gICAgICBhZGFwdGVyOiBtYXRjaFsxXVxuICAgIH07XG4gIH1cblxuICB2YXIgYWRhcHRlcnMgPSBQb3VjaERCLmFkYXB0ZXJzO1xuICB2YXIgcHJlZmVycmVkQWRhcHRlcnMgPSBQb3VjaERCLnByZWZlcnJlZEFkYXB0ZXJzO1xuICB2YXIgcHJlZml4ID0gUG91Y2hEQi5wcmVmaXg7XG4gIHZhciBhZGFwdGVyTmFtZSA9IG9wdHMuYWRhcHRlcjtcblxuICBpZiAoIWFkYXB0ZXJOYW1lKSB7IC8vIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lIGFkYXB0ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZlcnJlZEFkYXB0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICBhZGFwdGVyTmFtZSA9IHByZWZlcnJlZEFkYXB0ZXJzW2ldO1xuICAgICAgLy8gY2hlY2sgZm9yIGJyb3dzZXJzIHRoYXQgaGF2ZSBiZWVuIHVwZ3JhZGVkIGZyb20gd2Vic3FsLW9ubHkgdG8gd2Vic3FsK2lkYlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoYWRhcHRlck5hbWUgPT09ICdpZGInICYmICd3ZWJzcWwnIGluIGFkYXB0ZXJzICYmXG4gICAgICAgICAgaGFzTG9jYWxTdG9yYWdlKCkgJiYgbG9jYWxTdG9yYWdlWydfcG91Y2hfX3dlYnNxbGRiXycgKyBwcmVmaXggKyBuYW1lXSkge1xuICAgICAgICAvLyBsb2cgaXQsIGJlY2F1c2UgdGhpcyBjYW4gYmUgY29uZnVzaW5nIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgICBndWFyZGVkQ29uc29sZSgnbG9nJywgJ1BvdWNoREIgaXMgZG93bmdyYWRpbmcgXCInICsgbmFtZSArICdcIiB0byBXZWJTUUwgdG8nICtcbiAgICAgICAgICAnIGF2b2lkIGRhdGEgbG9zcywgYmVjYXVzZSBpdCB3YXMgYWxyZWFkeSBvcGVuZWQgd2l0aCBXZWJTUUwuJyk7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBrZWVwIHVzaW5nIHdlYnNxbCB0byBhdm9pZCB1c2VyIGRhdGEgbG9zc1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFkYXB0ZXIgPSBhZGFwdGVyc1thZGFwdGVyTmFtZV07XG5cbiAgLy8gaWYgYWRhcHRlciBpcyBpbnZhbGlkLCB0aGVuIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGxhdGVyXG4gIHZhciB1c2VQcmVmaXggPSAoYWRhcHRlciAmJiAndXNlX3ByZWZpeCcgaW4gYWRhcHRlcikgP1xuICAgIGFkYXB0ZXIudXNlX3ByZWZpeCA6IHRydWU7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiB1c2VQcmVmaXggPyAocHJlZml4ICsgbmFtZSkgOiBuYW1lLFxuICAgIGFkYXB0ZXI6IGFkYXB0ZXJOYW1lXG4gIH07XG59XG5cbi8vIE9LLCBzbyBoZXJlJ3MgdGhlIGRlYWwuIENvbnNpZGVyIHRoaXMgY29kZTpcbi8vICAgICB2YXIgZGIxID0gbmV3IFBvdWNoREIoJ2ZvbycpO1xuLy8gICAgIHZhciBkYjIgPSBuZXcgUG91Y2hEQignZm9vJyk7XG4vLyAgICAgZGIxLmRlc3Ryb3koKTtcbi8vIF4gdGhlc2UgdHdvIGJvdGggbmVlZCB0byBlbWl0ICdkZXN0cm95ZWQnIGV2ZW50cyxcbi8vIGFzIHdlbGwgYXMgdGhlIFBvdWNoREIgY29uc3RydWN0b3IgaXRzZWxmLlxuLy8gU28gd2UgaGF2ZSBvbmUgZGIgb2JqZWN0ICh3aGljaGV2ZXIgb25lIGdvdCBkZXN0cm95KCkgY2FsbGVkIG9uIGl0KVxuLy8gcmVzcG9uc2libGUgZm9yIGVtaXR0aW5nIHRoZSBpbml0aWFsIGV2ZW50LCB3aGljaCB0aGVuIGdldHMgZW1pdHRlZFxuLy8gYnkgdGhlIGNvbnN0cnVjdG9yLCB3aGljaCB0aGVuIGJyb2FkY2FzdHMgaXQgdG8gYW55IG90aGVyIGRic1xuLy8gdGhhdCBtYXkgaGF2ZSBiZWVuIGNyZWF0ZWQgd2l0aCB0aGUgc2FtZSBuYW1lLlxuZnVuY3Rpb24gcHJlcGFyZUZvckRlc3RydWN0aW9uKHNlbGYpIHtcblxuICBmdW5jdGlvbiBvbkRlc3Ryb3llZChmcm9tX2NvbnN0cnVjdG9yKSB7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignY2xvc2VkJywgb25DbG9zZWQpO1xuICAgIGlmICghZnJvbV9jb25zdHJ1Y3Rvcikge1xuICAgICAgc2VsZi5jb25zdHJ1Y3Rvci5lbWl0KCdkZXN0cm95ZWQnLCBzZWxmLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xvc2VkKCkge1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveWVkKTtcbiAgICBzZWxmLmNvbnN0cnVjdG9yLmVtaXQoJ3VucmVmJywgc2VsZik7XG4gIH1cblxuICBzZWxmLm9uY2UoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveWVkKTtcbiAgc2VsZi5vbmNlKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gIHNlbGYuY29uc3RydWN0b3IuZW1pdCgncmVmJywgc2VsZik7XG59XG5cbmluaGVyaXRzKFBvdWNoREIsIEFic3RyYWN0UG91Y2hEQik7XG5mdW5jdGlvbiBQb3VjaERCKG5hbWUsIG9wdHMpIHtcbiAgLy8gSW4gTm9kZSBvdXIgdGVzdCBzdWl0ZSBvbmx5IHRlc3RzIHRoaXMgZm9yIFBvdWNoQWx0IHVuZm9ydHVuYXRlbHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQb3VjaERCKSkge1xuICAgIHJldHVybiBuZXcgUG91Y2hEQihuYW1lLCBvcHRzKTtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgaWYgKG5hbWUgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0cyA9IG5hbWU7XG4gICAgbmFtZSA9IG9wdHMubmFtZTtcbiAgICBkZWxldGUgb3B0cy5uYW1lO1xuICB9XG5cbiAgaWYgKG9wdHMuZGV0ZXJtaW5pc3RpY19yZXZzID09PSB1bmRlZmluZWQpIHtcbiAgICBvcHRzLmRldGVybWluaXN0aWNfcmV2cyA9IHRydWU7XG4gIH1cblxuICB0aGlzLl9fb3B0cyA9IG9wdHMgPSBjbG9uZShvcHRzKTtcblxuICBzZWxmLmF1dG9fY29tcGFjdGlvbiA9IG9wdHMuYXV0b19jb21wYWN0aW9uO1xuICBzZWxmLnByZWZpeCA9IFBvdWNoREIucHJlZml4O1xuXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcvaW52YWxpZCBEQiBuYW1lJyk7XG4gIH1cblxuICB2YXIgcHJlZml4ZWROYW1lID0gKG9wdHMucHJlZml4IHx8ICcnKSArIG5hbWU7XG4gIHZhciBiYWNrZW5kID0gcGFyc2VBZGFwdGVyKHByZWZpeGVkTmFtZSwgb3B0cyk7XG5cbiAgb3B0cy5uYW1lID0gYmFja2VuZC5uYW1lO1xuICBvcHRzLmFkYXB0ZXIgPSBvcHRzLmFkYXB0ZXIgfHwgYmFja2VuZC5hZGFwdGVyO1xuXG4gIHNlbGYubmFtZSA9IG5hbWU7XG4gIHNlbGYuX2FkYXB0ZXIgPSBvcHRzLmFkYXB0ZXI7XG4gIFBvdWNoREIuZW1pdCgnZGVidWcnLCBbJ2FkYXB0ZXInLCAnUGlja2VkIGFkYXB0ZXI6ICcsIG9wdHMuYWRhcHRlcl0pO1xuXG4gIGlmICghUG91Y2hEQi5hZGFwdGVyc1tvcHRzLmFkYXB0ZXJdIHx8XG4gICAgICAhUG91Y2hEQi5hZGFwdGVyc1tvcHRzLmFkYXB0ZXJdLnZhbGlkKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQWRhcHRlcjogJyArIG9wdHMuYWRhcHRlcik7XG4gIH1cblxuICBBYnN0cmFjdFBvdWNoREIuY2FsbChzZWxmKTtcbiAgc2VsZi50YXNrcXVldWUgPSBuZXcgVGFza1F1ZXVlKCk7XG5cbiAgc2VsZi5hZGFwdGVyID0gb3B0cy5hZGFwdGVyO1xuXG4gIFBvdWNoREIuYWRhcHRlcnNbb3B0cy5hZGFwdGVyXS5jYWxsKHNlbGYsIG9wdHMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gc2VsZi50YXNrcXVldWUuZmFpbChlcnIpO1xuICAgIH1cbiAgICBwcmVwYXJlRm9yRGVzdHJ1Y3Rpb24oc2VsZik7XG5cbiAgICBzZWxmLmVtaXQoJ2NyZWF0ZWQnLCBzZWxmKTtcbiAgICBQb3VjaERCLmVtaXQoJ2NyZWF0ZWQnLCBzZWxmLm5hbWUpO1xuICAgIHNlbGYudGFza3F1ZXVlLnJlYWR5KHNlbGYpO1xuICB9KTtcblxufVxuXG4vLyBBYm9ydENvbnRyb2xsZXIgd2FzIGludHJvZHVjZWQgcXVpdGUgYSB3aGlsZSBhZnRlciBmZXRjaCBhbmRcbi8vIGlzbnQgcmVxdWlyZWQgZm9yIFBvdWNoREIgdG8gZnVuY3Rpb24gc28gcG9seWZpbGwgaWYgbmVlZGVkXG52YXIgYSA9ICh0eXBlb2YgQWJvcnRDb250cm9sbGVyICE9PSAndW5kZWZpbmVkJylcbiAgICA/IEFib3J0Q29udHJvbGxlclxuICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4ge2Fib3J0OiBmdW5jdGlvbiAoKSB7fX07IH07XG5cbnZhciBmJDEgPSBmZXRjaDtcbnZhciBoID0gSGVhZGVycztcblxuUG91Y2hEQi5hZGFwdGVycyA9IHt9O1xuUG91Y2hEQi5wcmVmZXJyZWRBZGFwdGVycyA9IFtdO1xuXG5Qb3VjaERCLnByZWZpeCA9ICdfcG91Y2hfJztcblxudmFyIGV2ZW50RW1pdHRlciA9IG5ldyBFRSgpO1xuXG5mdW5jdGlvbiBzZXRVcEV2ZW50RW1pdHRlcihQb3VjaCkge1xuICBPYmplY3Qua2V5cyhFRS5wcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICh0eXBlb2YgRUUucHJvdG90eXBlW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFBvdWNoW2tleV0gPSBldmVudEVtaXR0ZXJba2V5XS5iaW5kKGV2ZW50RW1pdHRlcik7XG4gICAgfVxuICB9KTtcblxuICAvLyB0aGVzZSBhcmUgY3JlYXRlZCBpbiBjb25zdHJ1Y3Rvci5qcywgYW5kIGFsbG93IHVzIHRvIG5vdGlmeSBlYWNoIERCIHdpdGhcbiAgLy8gdGhlIHNhbWUgbmFtZSB0aGF0IGl0IHdhcyBkZXN0cm95ZWQsIHZpYSB0aGUgY29uc3RydWN0b3Igb2JqZWN0XG4gIHZhciBkZXN0cnVjdExpc3RlbmVycyA9IFBvdWNoLl9kZXN0cnVjdGlvbkxpc3RlbmVycyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuXG4gIFBvdWNoLm9uKCdyZWYnLCBmdW5jdGlvbiBvbkNvbnN0cnVjdG9yUmVmKGRiKSB7XG4gICAgaWYgKCFkZXN0cnVjdExpc3RlbmVycy5oYXMoZGIubmFtZSkpIHtcbiAgICAgIGRlc3RydWN0TGlzdGVuZXJzLnNldChkYi5uYW1lLCBbXSk7XG4gICAgfVxuICAgIGRlc3RydWN0TGlzdGVuZXJzLmdldChkYi5uYW1lKS5wdXNoKGRiKTtcbiAgfSk7XG5cbiAgUG91Y2gub24oJ3VucmVmJywgZnVuY3Rpb24gb25Db25zdHJ1Y3RvclVucmVmKGRiKSB7XG4gICAgaWYgKCFkZXN0cnVjdExpc3RlbmVycy5oYXMoZGIubmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGRiTGlzdCA9IGRlc3RydWN0TGlzdGVuZXJzLmdldChkYi5uYW1lKTtcbiAgICB2YXIgcG9zID0gZGJMaXN0LmluZGV4T2YoZGIpO1xuICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYkxpc3Quc3BsaWNlKHBvcywgMSk7XG4gICAgaWYgKGRiTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZGVzdHJ1Y3RMaXN0ZW5lcnMuc2V0KGRiLm5hbWUsIGRiTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RydWN0TGlzdGVuZXJzLmRlbGV0ZShkYi5uYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIFBvdWNoLm9uKCdkZXN0cm95ZWQnLCBmdW5jdGlvbiBvbkNvbnN0cnVjdG9yRGVzdHJveWVkKG5hbWUpIHtcbiAgICBpZiAoIWRlc3RydWN0TGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGJMaXN0ID0gZGVzdHJ1Y3RMaXN0ZW5lcnMuZ2V0KG5hbWUpO1xuICAgIGRlc3RydWN0TGlzdGVuZXJzLmRlbGV0ZShuYW1lKTtcbiAgICBkYkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZGIpIHtcbiAgICAgIGRiLmVtaXQoJ2Rlc3Ryb3llZCcsdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5zZXRVcEV2ZW50RW1pdHRlcihQb3VjaERCKTtcblxuUG91Y2hEQi5hZGFwdGVyID0gZnVuY3Rpb24gKGlkLCBvYmosIGFkZFRvUHJlZmVycmVkQWRhcHRlcnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKG9iai52YWxpZCgpKSB7XG4gICAgUG91Y2hEQi5hZGFwdGVyc1tpZF0gPSBvYmo7XG4gICAgaWYgKGFkZFRvUHJlZmVycmVkQWRhcHRlcnMpIHtcbiAgICAgIFBvdWNoREIucHJlZmVycmVkQWRhcHRlcnMucHVzaChpZCk7XG4gICAgfVxuICB9XG59O1xuXG5Qb3VjaERCLnBsdWdpbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHsgLy8gZnVuY3Rpb24gc3R5bGUgZm9yIHBsdWdpbnNcbiAgICBvYmooUG91Y2hEQik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGx1Z2luOiBnb3QgXCInICsgb2JqICsgJ1wiLCBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbicpO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHsgLy8gb2JqZWN0IHN0eWxlIGZvciBwbHVnaW5zXG4gICAgICBQb3VjaERCLnByb3RvdHlwZVtpZF0gPSBvYmpbaWRdO1xuICAgIH0pO1xuICB9XG4gIGlmICh0aGlzLl9fZGVmYXVsdHMpIHtcbiAgICBQb3VjaERCLl9fZGVmYXVsdHMgPSAkaW5qZWN0X09iamVjdF9hc3NpZ24oe30sIHRoaXMuX19kZWZhdWx0cyk7XG4gIH1cbiAgcmV0dXJuIFBvdWNoREI7XG59O1xuXG5Qb3VjaERCLmRlZmF1bHRzID0gZnVuY3Rpb24gKGRlZmF1bHRPcHRzKSB7XG4gIGZ1bmN0aW9uIFBvdWNoQWx0KG5hbWUsIG9wdHMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUG91Y2hBbHQpKSB7XG4gICAgICByZXR1cm4gbmV3IFBvdWNoQWx0KG5hbWUsIG9wdHMpO1xuICAgIH1cblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKG5hbWUgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRzID0gbmFtZTtcbiAgICAgIG5hbWUgPSBvcHRzLm5hbWU7XG4gICAgICBkZWxldGUgb3B0cy5uYW1lO1xuICAgIH1cblxuICAgIG9wdHMgPSAkaW5qZWN0X09iamVjdF9hc3NpZ24oe30sIFBvdWNoQWx0Ll9fZGVmYXVsdHMsIG9wdHMpO1xuICAgIFBvdWNoREIuY2FsbCh0aGlzLCBuYW1lLCBvcHRzKTtcbiAgfVxuXG4gIGluaGVyaXRzKFBvdWNoQWx0LCBQb3VjaERCKTtcblxuICBQb3VjaEFsdC5wcmVmZXJyZWRBZGFwdGVycyA9IFBvdWNoREIucHJlZmVycmVkQWRhcHRlcnMuc2xpY2UoKTtcbiAgT2JqZWN0LmtleXMoUG91Y2hEQikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCEoa2V5IGluIFBvdWNoQWx0KSkge1xuICAgICAgUG91Y2hBbHRba2V5XSA9IFBvdWNoREJba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIG1ha2UgZGVmYXVsdCBvcHRpb25zIHRyYW5zaXRpdmVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvdWNoZGIvcG91Y2hkYi9pc3N1ZXMvNTkyMlxuICBQb3VjaEFsdC5fX2RlZmF1bHRzID0gJGluamVjdF9PYmplY3RfYXNzaWduKHt9LCB0aGlzLl9fZGVmYXVsdHMsIGRlZmF1bHRPcHRzKTtcblxuICByZXR1cm4gUG91Y2hBbHQ7XG59O1xuXG5Qb3VjaERCLmZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0cykge1xuICByZXR1cm4gZiQxKHVybCwgb3B0cyk7XG59O1xuXG4vLyBtYW5hZ2VkIGF1dG9tYXRpY2FsbHkgYnkgc2V0LXZlcnNpb24uanNcbnZhciB2ZXJzaW9uID0gXCI3LjIuMlwiO1xuXG4vLyB0aGlzIHdvdWxkIGp1c3QgYmUgXCJyZXR1cm4gZG9jW2ZpZWxkXVwiLCBidXQgZmllbGRzXG4vLyBjYW4gYmUgXCJkZWVwXCIgZHVlIHRvIGRvdCBub3RhdGlvblxuZnVuY3Rpb24gZ2V0RmllbGRGcm9tRG9jKGRvYywgcGFyc2VkRmllbGQpIHtcbiAgdmFyIHZhbHVlID0gZG9jO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFyc2VkRmllbGQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcGFyc2VkRmllbGRbaV07XG4gICAgdmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUkMShsZWZ0LCByaWdodCkge1xuICByZXR1cm4gbGVmdCA8IHJpZ2h0ID8gLTEgOiBsZWZ0ID4gcmlnaHQgPyAxIDogMDtcbn1cblxuLy8gQ29udmVydHMgYSBzdHJpbmcgaW4gZG90IG5vdGF0aW9uIHRvIGFuIGFycmF5IG9mIGl0cyBjb21wb25lbnRzLCB3aXRoIGJhY2tzbGFzaCBlc2NhcGluZ1xuZnVuY3Rpb24gcGFyc2VGaWVsZChmaWVsZE5hbWUpIHtcbiAgLy8gZmllbGRzIG1heSBiZSBkZWVwIChlLmcuIFwiZm9vLmJhci5iYXpcIiksIHNvIHBhcnNlXG4gIHZhciBmaWVsZHMgPSBbXTtcbiAgdmFyIGN1cnJlbnQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZpZWxkTmFtZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjaCA9IGZpZWxkTmFtZVtpXTtcbiAgICBpZiAoY2ggPT09ICcuJykge1xuICAgICAgaWYgKGkgPiAwICYmIGZpZWxkTmFtZVtpIC0gMV0gPT09ICdcXFxcJykgeyAvLyBlc2NhcGVkIGRlbGltaXRlclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5zdWJzdHJpbmcoMCwgY3VycmVudC5sZW5ndGggLSAxKSArICcuJztcbiAgICAgIH0gZWxzZSB7IC8vIG5vdCBlc2NhcGVkLCBzbyBkZWxpbWl0ZXJcbiAgICAgICAgZmllbGRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSAnJztcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBub3JtYWwgY2hhcmFjdGVyXG4gICAgICBjdXJyZW50ICs9IGNoO1xuICAgIH1cbiAgfVxuICBmaWVsZHMucHVzaChjdXJyZW50KTtcbiAgcmV0dXJuIGZpZWxkcztcbn1cblxudmFyIGNvbWJpbmF0aW9uRmllbGRzID0gWyckb3InLCAnJG5vcicsICckbm90J107XG5mdW5jdGlvbiBpc0NvbWJpbmF0aW9uYWxGaWVsZChmaWVsZCkge1xuICByZXR1cm4gY29tYmluYXRpb25GaWVsZHMuaW5kZXhPZihmaWVsZCkgPiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUob2JqKSB7XG4gIHJldHVybiBvYmpbZ2V0S2V5KG9iaildO1xufVxuXG5cbi8vIGZsYXR0ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3JzIGpvaW5lZCBieSBhbiAkYW5kIG9wZXJhdG9yXG5mdW5jdGlvbiBtZXJnZUFuZGVkU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuXG4gIC8vIHNvcnQgdG8gZW5zdXJlIHRoYXQgZS5nLiBpZiB0aGUgdXNlciBzcGVjaWZpZWRcbiAgLy8gJGFuZDogW3skZ3Q6ICdhJ30sIHskZ3Q6ICdiJ31dLCB0aGVuIGl0J3MgY29sbGFwc2VkIGludG9cbiAgLy8ganVzdCB7JGd0OiAnYid9XG4gIHZhciByZXMgPSB7fTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHZhciBtYXRjaGVyID0gc2VsZWN0b3JbZmllbGRdO1xuICAgICAgaWYgKHR5cGVvZiBtYXRjaGVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBtYXRjaGVyID0geyRlcTogbWF0Y2hlcn07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NvbWJpbmF0aW9uYWxGaWVsZChmaWVsZCkpIHtcbiAgICAgICAgaWYgKG1hdGNoZXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHJlc1tmaWVsZF0gPSBtYXRjaGVyLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlQW5kZWRTZWxlY3RvcnMoW21dKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNbZmllbGRdID0gbWVyZ2VBbmRlZFNlbGVjdG9ycyhbbWF0Y2hlcl0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmllbGRNYXRjaGVycyA9IHJlc1tmaWVsZF0gPSByZXNbZmllbGRdIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhtYXRjaGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG1hdGNoZXJbb3BlcmF0b3JdO1xuXG4gICAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnJGd0JyB8fCBvcGVyYXRvciA9PT0gJyRndGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VHdEd0ZShvcGVyYXRvciwgdmFsdWUsIGZpZWxkTWF0Y2hlcnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09ICckbHQnIHx8IG9wZXJhdG9yID09PSAnJGx0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZUx0THRlKG9wZXJhdG9yLCB2YWx1ZSwgZmllbGRNYXRjaGVycyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PT0gJyRuZScpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZU5lKHZhbHVlLCBmaWVsZE1hdGNoZXJzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSAnJGVxJykge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlRXEodmFsdWUsIGZpZWxkTWF0Y2hlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1hdGNoZXJzW29wZXJhdG9yXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuXG5cbi8vIGNvbGxhcHNlIGxvZ2ljYWxseSBlcXVpdmFsZW50IGd0L2d0ZSB2YWx1ZXNcbmZ1bmN0aW9uIG1lcmdlR3RHdGUob3BlcmF0b3IsIHZhbHVlLCBmaWVsZE1hdGNoZXJzKSB7XG4gIGlmICh0eXBlb2YgZmllbGRNYXRjaGVycy4kZXEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuOyAvLyBkbyBub3RoaW5nXG4gIH1cbiAgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRndGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSAnJGd0ZScpIHtcbiAgICAgIGlmICh2YWx1ZSA+IGZpZWxkTWF0Y2hlcnMuJGd0ZSkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGd0ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG9wZXJhdG9yID09PSAnJGd0J1xuICAgICAgaWYgKHZhbHVlID49IGZpZWxkTWF0Y2hlcnMuJGd0ZSkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRndGU7XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGd0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRndCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09ICckZ3RlJykge1xuICAgICAgaWYgKHZhbHVlID4gZmllbGRNYXRjaGVycy4kZ3QpIHsgLy8gbW9yZSBzcGVjaWZpY2l0eVxuICAgICAgICBkZWxldGUgZmllbGRNYXRjaGVycy4kZ3Q7XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGd0ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG9wZXJhdG9yID09PSAnJGd0J1xuICAgICAgaWYgKHZhbHVlID4gZmllbGRNYXRjaGVycy4kZ3QpIHsgLy8gbW9yZSBzcGVjaWZpY2l0eVxuICAgICAgICBmaWVsZE1hdGNoZXJzLiRndCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmaWVsZE1hdGNoZXJzW29wZXJhdG9yXSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIGNvbGxhcHNlIGxvZ2ljYWxseSBlcXVpdmFsZW50IGx0L2x0ZSB2YWx1ZXNcbmZ1bmN0aW9uIG1lcmdlTHRMdGUob3BlcmF0b3IsIHZhbHVlLCBmaWVsZE1hdGNoZXJzKSB7XG4gIGlmICh0eXBlb2YgZmllbGRNYXRjaGVycy4kZXEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuOyAvLyBkbyBub3RoaW5nXG4gIH1cbiAgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRsdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSAnJGx0ZScpIHtcbiAgICAgIGlmICh2YWx1ZSA8IGZpZWxkTWF0Y2hlcnMuJGx0ZSkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGx0ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG9wZXJhdG9yID09PSAnJGd0J1xuICAgICAgaWYgKHZhbHVlIDw9IGZpZWxkTWF0Y2hlcnMuJGx0ZSkgeyAvLyBtb3JlIHNwZWNpZmljaXR5XG4gICAgICAgIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRsdGU7XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGx0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBmaWVsZE1hdGNoZXJzLiRsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09ICckbHRlJykge1xuICAgICAgaWYgKHZhbHVlIDwgZmllbGRNYXRjaGVycy4kbHQpIHsgLy8gbW9yZSBzcGVjaWZpY2l0eVxuICAgICAgICBkZWxldGUgZmllbGRNYXRjaGVycy4kbHQ7XG4gICAgICAgIGZpZWxkTWF0Y2hlcnMuJGx0ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG9wZXJhdG9yID09PSAnJGd0J1xuICAgICAgaWYgKHZhbHVlIDwgZmllbGRNYXRjaGVycy4kbHQpIHsgLy8gbW9yZSBzcGVjaWZpY2l0eVxuICAgICAgICBmaWVsZE1hdGNoZXJzLiRsdCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmaWVsZE1hdGNoZXJzW29wZXJhdG9yXSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIGNvbWJpbmUgJG5lIHZhbHVlcyBpbnRvIG9uZSBhcnJheVxuZnVuY3Rpb24gbWVyZ2VOZSh2YWx1ZSwgZmllbGRNYXRjaGVycykge1xuICBpZiAoJyRuZScgaW4gZmllbGRNYXRjaGVycykge1xuICAgIC8vIHRoZXJlIGFyZSBtYW55IHRoaW5ncyB0aGlzIGNvdWxkIFwibm90XCIgYmVcbiAgICBmaWVsZE1hdGNoZXJzLiRuZS5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHsgLy8gZG9lc24ndCBleGlzdCB5ZXRcbiAgICBmaWVsZE1hdGNoZXJzLiRuZSA9IFt2YWx1ZV07XG4gIH1cbn1cblxuLy8gYWRkICRlcSBpbnRvIHRoZSBtaXhcbmZ1bmN0aW9uIG1lcmdlRXEodmFsdWUsIGZpZWxkTWF0Y2hlcnMpIHtcbiAgLy8gdGhlc2UgYWxsIGhhdmUgbGVzcyBzcGVjaWZpY2l0eSB0aGFuIHRoZSAkZXFcbiAgLy8gVE9ETzogY2hlY2sgZm9yIHVzZXIgZXJyb3JzIGhlcmVcbiAgZGVsZXRlIGZpZWxkTWF0Y2hlcnMuJGd0O1xuICBkZWxldGUgZmllbGRNYXRjaGVycy4kZ3RlO1xuICBkZWxldGUgZmllbGRNYXRjaGVycy4kbHQ7XG4gIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRsdGU7XG4gIGRlbGV0ZSBmaWVsZE1hdGNoZXJzLiRuZTtcbiAgZmllbGRNYXRjaGVycy4kZXEgPSB2YWx1ZTtcbn1cblxuLy8jNzQ1ODogZXhlY3V0ZSBmdW5jdGlvbiBtZXJnZUFuZGVkU2VsZWN0b3JzIG9uIG5lc3RlZCAkYW5kXG5mdW5jdGlvbiBtZXJnZUFuZGVkU2VsZWN0b3JzTmVzdGVkKG9iaikge1xuICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtpXVsnJGFuZCddKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IG1lcmdlQW5kZWRTZWxlY3RvcnMob2JqW2ldWyckYW5kJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBvYmpbcHJvcF07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBtZXJnZUFuZGVkU2VsZWN0b3JzTmVzdGVkKHZhbHVlKTsgLy8gPC0gcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG4vLyM3NDU4OiBkZXRlcm1pbmUgaWQgJGFuZCBpcyBwcmVzZW50IGluIHNlbGVjdG9yIChhdCBhbnkgbGV2ZWwpXG5mdW5jdGlvbiBpc0FuZEluU2VsZWN0b3Iob2JqLCBpc0FuZCkge1xuICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnJGFuZCcpIHtcbiAgICAgICAgICAgIGlzQW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBvYmpbcHJvcF07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpc0FuZCA9IGlzQW5kSW5TZWxlY3Rvcih2YWx1ZSwgaXNBbmQpOyAvLyA8LSByZWN1cnNpdmUgY2FsbFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FuZDtcbn1cblxuLy9cbi8vIG5vcm1hbGl6ZSB0aGUgc2VsZWN0b3Jcbi8vXG5mdW5jdGlvbiBtYXNzYWdlU2VsZWN0b3IoaW5wdXQpIHtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKGlucHV0KTtcbiAgdmFyIHdhc0FuZGVkID0gZmFsc2U7XG4gICAgLy8jNzQ1ODogaWYgJGFuZCBpcyBwcmVzZW50IGluIHNlbGVjdG9yIChhdCBhbnkgbGV2ZWwpIG1lcmdlIG5lc3RlZCAkYW5kXG4gICAgaWYgKGlzQW5kSW5TZWxlY3RvcihyZXN1bHQsIGZhbHNlKSkge1xuICAgICAgICByZXN1bHQgPSBtZXJnZUFuZGVkU2VsZWN0b3JzTmVzdGVkKHJlc3VsdCk7XG4gICAgICAgIGlmICgnJGFuZCcgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBtZXJnZUFuZGVkU2VsZWN0b3JzKHJlc3VsdFsnJGFuZCddKTtcbiAgICAgICAgfVxuICAgICAgICB3YXNBbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gIFsnJG9yJywgJyRub3InXS5mb3JFYWNoKGZ1bmN0aW9uIChvck9yTm9yKSB7XG4gICAgaWYgKG9yT3JOb3IgaW4gcmVzdWx0KSB7XG4gICAgICAvLyBtZXNzYWdlIGVhY2ggaW5kaXZpZHVhbCBzZWxlY3RvclxuICAgICAgLy8gZS5nLiB7Zm9vOiAnYmFyJ30gYmVjb21lcyB7Zm9vOiB7JGVxOiAnYmFyJ319XG4gICAgICByZXN1bHRbb3JPck5vcl0uZm9yRWFjaChmdW5jdGlvbiAoc3ViU2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHN1YlNlbGVjdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgICAgICAgdmFyIG1hdGNoZXIgPSBzdWJTZWxlY3RvcltmaWVsZF07XG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaGVyICE9PSAnb2JqZWN0JyB8fCBtYXRjaGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJTZWxlY3RvcltmaWVsZF0gPSB7JGVxOiBtYXRjaGVyfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCckbm90JyBpbiByZXN1bHQpIHtcbiAgICAvL1RoaXMgZmVlbHMgYSBsaXR0bGUgbGlrZSBmb3JjaW5nLCBidXQgaXQgd2lsbCB3b3JrIGZvciBub3csXG4gICAgLy9JIHdvdWxkIGxpa2UgdG8gY29tZSBiYWNrIHRvIHRoaXMgYW5kIG1ha2UgdGhlIG1lcmdpbmcgb2Ygc2VsZWN0b3JzIGEgbGl0dGxlIG1vcmUgZ2VuZXJpY1xuICAgIHJlc3VsdFsnJG5vdCddID0gbWVyZ2VBbmRlZFNlbGVjdG9ycyhbcmVzdWx0Wyckbm90J11dKTtcbiAgfVxuXG4gIHZhciBmaWVsZHMgPSBPYmplY3Qua2V5cyhyZXN1bHQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkID0gZmllbGRzW2ldO1xuICAgIHZhciBtYXRjaGVyID0gcmVzdWx0W2ZpZWxkXTtcblxuICAgIGlmICh0eXBlb2YgbWF0Y2hlciAhPT0gJ29iamVjdCcgfHwgbWF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgbWF0Y2hlciA9IHskZXE6IG1hdGNoZXJ9O1xuICAgIH0gZWxzZSBpZiAoJyRuZScgaW4gbWF0Y2hlciAmJiAhd2FzQW5kZWQpIHtcbiAgICAgIC8vIEkgcHV0IHRoZXNlIGluIGFuIGFycmF5LCBzaW5jZSB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZVxuICAgICAgLy8gYnV0IGluIHRoZSBcIm1lcmdlQW5kZWRcIiBvcGVyYXRpb24sIEkgYWxyZWFkeSB0YWtlIGNhcmUgb2YgdGhhdFxuICAgICAgbWF0Y2hlci4kbmUgPSBbbWF0Y2hlci4kbmVdO1xuICAgIH1cbiAgICByZXN1bHRbZmllbGRdID0gbWF0Y2hlcjtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBhZChzdHIsIHBhZFdpdGgsIHVwVG9MZW5ndGgpIHtcbiAgdmFyIHBhZGRpbmcgPSAnJztcbiAgdmFyIHRhcmdldExlbmd0aCA9IHVwVG9MZW5ndGggLSBzdHIubGVuZ3RoO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3aGlsZSAocGFkZGluZy5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBwYWRkaW5nICs9IHBhZFdpdGg7XG4gIH1cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZExlZnQoc3RyLCBwYWRXaXRoLCB1cFRvTGVuZ3RoKSB7XG4gIHZhciBwYWRkaW5nID0gcGFkKHN0ciwgcGFkV2l0aCwgdXBUb0xlbmd0aCk7XG4gIHJldHVybiBwYWRkaW5nICsgc3RyO1xufVxuXG52YXIgTUlOX01BR05JVFVERSA9IC0zMjQ7IC8vIHZlcmlmaWVkIGJ5IC1OdW1iZXIuTUlOX1ZBTFVFXG52YXIgTUFHTklUVURFX0RJR0lUUyA9IDM7IC8vIGRpdHRvXG52YXIgU0VQID0gJyc7IC8vIHNldCB0byAnXycgZm9yIGVhc2llciBkZWJ1Z2dpbmcgXG5cbmZ1bmN0aW9uIGNvbGxhdGUoYSwgYikge1xuXG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBhID0gbm9ybWFsaXplS2V5KGEpO1xuICBiID0gbm9ybWFsaXplS2V5KGIpO1xuXG4gIHZhciBhaSA9IGNvbGxhdGlvbkluZGV4KGEpO1xuICB2YXIgYmkgPSBjb2xsYXRpb25JbmRleChiKTtcbiAgaWYgKChhaSAtIGJpKSAhPT0gMCkge1xuICAgIHJldHVybiBhaSAtIGJpO1xuICB9XG4gIHN3aXRjaCAodHlwZW9mIGEpIHtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nQ29sbGF0ZShhLCBiKTtcbiAgfVxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGFycmF5Q29sbGF0ZShhLCBiKSA6IG9iamVjdENvbGxhdGUoYSwgYik7XG59XG5cbi8vIGNvdWNoIGNvbnNpZGVycyBudWxsL05hTi9JbmZpbml0eS8tSW5maW5pdHkgPT09IHVuZGVmaW5lZCxcbi8vIGZvciB0aGUgcHVycG9zZXMgb2YgbWFwcmVkdWNlIGluZGV4ZXMuIGFsc28sIGRhdGVzIGdldCBzdHJpbmdpZmllZC5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAgc3dpdGNoICh0eXBlb2Yga2V5KSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBpZiAoa2V5ID09PSBJbmZpbml0eSB8fCBrZXkgPT09IC1JbmZpbml0eSB8fCBpc05hTihrZXkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtleTtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIG9yaWdLZXkgPSBrZXk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIHZhciBsZW4gPSBrZXkubGVuZ3RoO1xuICAgICAgICBrZXkgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGtleVtpXSA9IG5vcm1hbGl6ZUtleShvcmlnS2V5W2ldKTtcbiAgICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIH0gZWxzZSBpZiAoa2V5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4ga2V5LnRvSlNPTigpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09IG51bGwpIHsgLy8gZ2VuZXJpYyBvYmplY3RcbiAgICAgICAga2V5ID0ge307XG4gICAgICAgIGZvciAodmFyIGsgaW4gb3JpZ0tleSkge1xuICAgICAgICAgIGlmIChvcmlnS2V5Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gb3JpZ0tleVtrXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBrZXlba10gPSBub3JtYWxpemVLZXkodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBpbmRleGlmeShrZXkpIHtcbiAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgIHN3aXRjaCAodHlwZW9mIGtleSkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiBrZXkgPyAxIDogMDtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldHVybiBudW1Ub0luZGV4YWJsZVN0cmluZyhrZXkpO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgLy8gV2UndmUgdG8gYmUgc3VyZSB0aGF0IGtleSBkb2VzIG5vdCBjb250YWluIFxcdTAwMDBcbiAgICAgICAgLy8gRG8gb3JkZXItcHJlc2VydmluZyByZXBsYWNlbWVudHM6XG4gICAgICAgIC8vIDAgLT4gMSwgMVxuICAgICAgICAvLyAxIC0+IDEsIDJcbiAgICAgICAgLy8gMiAtPiAyLCAyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbiAgICAgICAgcmV0dXJuIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHUwMDAyL2csICdcXHUwMDAyXFx1MDAwMicpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcdTAwMDEvZywgJ1xcdTAwMDFcXHUwMDAyJylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1MDAwMC9nLCAnXFx1MDAwMVxcdTAwMDEnKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoa2V5KTtcbiAgICAgICAgdmFyIGFyciA9IGlzQXJyYXkgPyBrZXkgOiBPYmplY3Qua2V5cyhrZXkpO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0b0luZGV4YWJsZVN0cmluZyhhcnJbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICB2YXIgb2JqS2V5ID0gYXJyW2ldO1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRvSW5kZXhhYmxlU3RyaW5nKG9iaktleSkgK1xuICAgICAgICAgICAgICAgIHRvSW5kZXhhYmxlU3RyaW5nKGtleVtvYmpLZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vLyBjb252ZXJ0IHRoZSBnaXZlbiBrZXkgdG8gYSBzdHJpbmcgdGhhdCB3b3VsZCBiZSBhcHByb3ByaWF0ZVxuLy8gZm9yIGxleGljYWwgc29ydGluZywgZS5nLiB3aXRoaW4gYSBkYXRhYmFzZSwgd2hlcmUgdGhlXG4vLyBzb3J0aW5nIGlzIHRoZSBzYW1lIGdpdmVuIGJ5IHRoZSBjb2xsYXRlKCkgZnVuY3Rpb24uXG5mdW5jdGlvbiB0b0luZGV4YWJsZVN0cmluZyhrZXkpIHtcbiAgdmFyIHplcm8gPSAnXFx1MDAwMCc7XG4gIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuICByZXR1cm4gY29sbGF0aW9uSW5kZXgoa2V5KSArIFNFUCArIGluZGV4aWZ5KGtleSkgKyB6ZXJvO1xufVxuXG5mdW5jdGlvbiBwYXJzZU51bWJlcihzdHIsIGkpIHtcbiAgdmFyIG9yaWdpbmFsSWR4ID0gaTtcbiAgdmFyIG51bTtcbiAgdmFyIHplcm8gPSBzdHJbaV0gPT09ICcxJztcbiAgaWYgKHplcm8pIHtcbiAgICBudW0gPSAwO1xuICAgIGkrKztcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmVnID0gc3RyW2ldID09PSAnMCc7XG4gICAgaSsrO1xuICAgIHZhciBudW1Bc1N0cmluZyA9ICcnO1xuICAgIHZhciBtYWdBc1N0cmluZyA9IHN0ci5zdWJzdHJpbmcoaSwgaSArIE1BR05JVFVERV9ESUdJVFMpO1xuICAgIHZhciBtYWduaXR1ZGUgPSBwYXJzZUludChtYWdBc1N0cmluZywgMTApICsgTUlOX01BR05JVFVERTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChuZWcpIHtcbiAgICAgIG1hZ25pdHVkZSA9IC1tYWduaXR1ZGU7XG4gICAgfVxuICAgIGkgKz0gTUFHTklUVURFX0RJR0lUUztcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGNoID0gc3RyW2ldO1xuICAgICAgaWYgKGNoID09PSAnXFx1MDAwMCcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Bc1N0cmluZyArPSBjaDtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgbnVtQXNTdHJpbmcgPSBudW1Bc1N0cmluZy5zcGxpdCgnLicpO1xuICAgIGlmIChudW1Bc1N0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgIG51bSA9IHBhcnNlSW50KG51bUFzU3RyaW5nLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBudW0gPSBwYXJzZUZsb2F0KG51bUFzU3RyaW5nWzBdICsgJy4nICsgbnVtQXNTdHJpbmdbMV0pO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChuZWcpIHtcbiAgICAgIG51bSA9IG51bSAtIDEwO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChtYWduaXR1ZGUgIT09IDApIHtcbiAgICAgIC8vIHBhcnNlRmxvYXQgaXMgbW9yZSByZWxpYWJsZSB0aGFuIHBvdyBkdWUgdG8gcm91bmRpbmcgZXJyb3JzXG4gICAgICAvLyBlLmcuIE51bWJlci5NQVhfVkFMVUUgd291bGQgcmV0dXJuIEluZmluaXR5IGlmIHdlIGRpZFxuICAgICAgLy8gbnVtICogTWF0aC5wb3coMTAsIG1hZ25pdHVkZSk7XG4gICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSArICdlJyArIG1hZ25pdHVkZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7bnVtOiBudW0sIGxlbmd0aCA6IGkgLSBvcmlnaW5hbElkeH07XG59XG5cbi8vIG1vdmUgdXAgdGhlIHN0YWNrIHdoaWxlIHBhcnNpbmdcbi8vIHRoaXMgZnVuY3Rpb24gbW92ZWQgb3V0c2lkZSBvZiBwYXJzZUluZGV4YWJsZVN0cmluZyBmb3IgcGVyZm9ybWFuY2VcbmZ1bmN0aW9uIHBvcChzdGFjaywgbWV0YVN0YWNrKSB7XG4gIHZhciBvYmogPSBzdGFjay5wb3AoKTtcblxuICBpZiAobWV0YVN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBsYXN0TWV0YUVsZW1lbnQgPSBtZXRhU3RhY2tbbWV0YVN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIGlmIChvYmogPT09IGxhc3RNZXRhRWxlbWVudC5lbGVtZW50KSB7XG4gICAgICAvLyBwb3BwaW5nIGEgbWV0YS1lbGVtZW50LCBlLmcuIGFuIG9iamVjdCB3aG9zZSB2YWx1ZSBpcyBhbm90aGVyIG9iamVjdFxuICAgICAgbWV0YVN0YWNrLnBvcCgpO1xuICAgICAgbGFzdE1ldGFFbGVtZW50ID0gbWV0YVN0YWNrW21ldGFTdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSBsYXN0TWV0YUVsZW1lbnQuZWxlbWVudDtcbiAgICB2YXIgbGFzdEVsZW1lbnRJbmRleCA9IGxhc3RNZXRhRWxlbWVudC5pbmRleDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgZWxlbWVudC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIGlmIChsYXN0RWxlbWVudEluZGV4ID09PSBzdGFjay5sZW5ndGggLSAyKSB7IC8vIG9iaiB3aXRoIGtleSt2YWx1ZVxuICAgICAgdmFyIGtleSA9IHN0YWNrLnBvcCgpO1xuICAgICAgZWxlbWVudFtrZXldID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7IC8vIG9iaiB3aXRoIGtleSBvbmx5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5kZXhhYmxlU3RyaW5nKHN0cikge1xuICB2YXIgc3RhY2sgPSBbXTtcbiAgdmFyIG1ldGFTdGFjayA9IFtdOyAvLyBzdGFjayBmb3IgYXJyYXlzIGFuZCBvYmplY3RzXG4gIHZhciBpID0gMDtcblxuICAvKmVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IFtcImVycm9yXCIsIHsgXCJjaGVja0xvb3BzXCI6IGZhbHNlIH1dKi9cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY29sbGF0aW9uSW5kZXggPSBzdHJbaSsrXTtcbiAgICBpZiAoY29sbGF0aW9uSW5kZXggPT09ICdcXHUwMDAwJykge1xuICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gc3RhY2sucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3Aoc3RhY2ssIG1ldGFTdGFjayk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKGNvbGxhdGlvbkluZGV4KSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgc3RhY2sucHVzaChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgc3RhY2sucHVzaChzdHJbaV0gPT09ICcxJyk7XG4gICAgICAgIGkrKztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgdmFyIHBhcnNlZE51bSA9IHBhcnNlTnVtYmVyKHN0ciwgaSk7XG4gICAgICAgIHN0YWNrLnB1c2gocGFyc2VkTnVtLm51bSk7XG4gICAgICAgIGkgKz0gcGFyc2VkTnVtLmxlbmd0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgdmFyIHBhcnNlZFN0ciA9ICcnO1xuICAgICAgICAvKmVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IFtcImVycm9yXCIsIHsgXCJjaGVja0xvb3BzXCI6IGZhbHNlIH1dKi9cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICB2YXIgY2ggPSBzdHJbaV07XG4gICAgICAgICAgaWYgKGNoID09PSAnXFx1MDAwMCcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJzZWRTdHIgKz0gY2g7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBlcmZvcm0gdGhlIHJldmVyc2Ugb2YgdGhlIG9yZGVyLXByZXNlcnZpbmcgcmVwbGFjZW1lbnRcbiAgICAgICAgLy8gYWxnb3JpdGhtIChzZWUgYWJvdmUpXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbiAgICAgICAgcGFyc2VkU3RyID0gcGFyc2VkU3RyLnJlcGxhY2UoL1xcdTAwMDFcXHUwMDAxL2csICdcXHUwMDAwJylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1MDAwMVxcdTAwMDIvZywgJ1xcdTAwMDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHUwMDAyXFx1MDAwMi9nLCAnXFx1MDAwMicpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbiAgICAgICAgc3RhY2sucHVzaChwYXJzZWRTdHIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgICB2YXIgYXJyYXlFbGVtZW50ID0geyBlbGVtZW50OiBbXSwgaW5kZXg6IHN0YWNrLmxlbmd0aCB9O1xuICAgICAgICBzdGFjay5wdXNoKGFycmF5RWxlbWVudC5lbGVtZW50KTtcbiAgICAgICAgbWV0YVN0YWNrLnB1c2goYXJyYXlFbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc2JzpcbiAgICAgICAgdmFyIG9iakVsZW1lbnQgPSB7IGVsZW1lbnQ6IHt9LCBpbmRleDogc3RhY2subGVuZ3RoIH07XG4gICAgICAgIHN0YWNrLnB1c2gob2JqRWxlbWVudC5lbGVtZW50KTtcbiAgICAgICAgbWV0YVN0YWNrLnB1c2gob2JqRWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYmFkIGNvbGxhdGlvbkluZGV4IG9yIHVuZXhwZWN0ZWRseSByZWFjaGVkIGVuZCBvZiBpbnB1dDogJyArXG4gICAgICAgICAgICBjb2xsYXRpb25JbmRleCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29sbGF0ZShhLCBiKSB7XG4gIHZhciBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHNvcnQgPSBjb2xsYXRlKGFbaV0sIGJbaV0pO1xuICAgIGlmIChzb3J0ICE9PSAwKSB7XG4gICAgICByZXR1cm4gc29ydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChhLmxlbmd0aCA9PT0gYi5sZW5ndGgpID8gMCA6XG4gICAgKGEubGVuZ3RoID4gYi5sZW5ndGgpID8gMSA6IC0xO1xufVxuZnVuY3Rpb24gc3RyaW5nQ29sbGF0ZShhLCBiKSB7XG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhbGVoYXJ2ZXkvcG91Y2hkYi9pc3N1ZXMvNDBcbiAgLy8gVGhpcyBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgQ291Y2hEQiBpbXBsZW1lbnRhdGlvbiwgYnV0IGl0cyB0aGVcbiAgLy8gYmVzdCB3ZSBjYW4gZG8gZm9yIG5vd1xuICByZXR1cm4gKGEgPT09IGIpID8gMCA6ICgoYSA+IGIpID8gMSA6IC0xKTtcbn1cbmZ1bmN0aW9uIG9iamVjdENvbGxhdGUoYSwgYikge1xuICB2YXIgYWsgPSBPYmplY3Qua2V5cyhhKSwgYmsgPSBPYmplY3Qua2V5cyhiKTtcbiAgdmFyIGxlbiA9IE1hdGgubWluKGFrLmxlbmd0aCwgYmsubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIC8vIEZpcnN0IHNvcnQgdGhlIGtleXNcbiAgICB2YXIgc29ydCA9IGNvbGxhdGUoYWtbaV0sIGJrW2ldKTtcbiAgICBpZiAoc29ydCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHNvcnQ7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBrZXlzIGFyZSBlcXVhbCBzb3J0IHRoZSB2YWx1ZXNcbiAgICBzb3J0ID0gY29sbGF0ZShhW2FrW2ldXSwgYltia1tpXV0pO1xuICAgIGlmIChzb3J0ICE9PSAwKSB7XG4gICAgICByZXR1cm4gc29ydDtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gKGFrLmxlbmd0aCA9PT0gYmsubGVuZ3RoKSA/IDAgOlxuICAgIChhay5sZW5ndGggPiBiay5sZW5ndGgpID8gMSA6IC0xO1xufVxuLy8gVGhlIGNvbGxhdGlvbiBpcyBkZWZpbmVkIGJ5IGVybGFuZ3Mgb3JkZXJlZCB0ZXJtc1xuLy8gdGhlIGF0b21zIG51bGwsIHRydWUsIGZhbHNlIGNvbWUgZmlyc3QsIHRoZW4gbnVtYmVycywgc3RyaW5ncyxcbi8vIGFycmF5cywgdGhlbiBvYmplY3RzXG4vLyBudWxsL3VuZGVmaW5lZC9OYU4vSW5maW5pdHkvLUluZmluaXR5IGFyZSBhbGwgY29uc2lkZXJlZCBudWxsXG5mdW5jdGlvbiBjb2xsYXRpb25JbmRleCh4KSB7XG4gIHZhciBpZCA9IFsnYm9vbGVhbicsICdudW1iZXInLCAnc3RyaW5nJywgJ29iamVjdCddO1xuICB2YXIgaWR4ID0gaWQuaW5kZXhPZih0eXBlb2YgeCk7XG4gIC8vZmFsc2UgaWYgLTEgb3RoZXJ3aXNlIHRydWUsIGJ1dCBmYXN0ISEhITFcbiAgaWYgKH5pZHgpIHtcbiAgICBpZiAoeCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICByZXR1cm4gNTtcbiAgICB9XG4gICAgcmV0dXJuIGlkeCA8IDMgPyAoaWR4ICsgMikgOiAoaWR4ICsgMyk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gNTtcbiAgfVxufVxuXG4vLyBjb252ZXJzaW9uOlxuLy8geCB5eXkgenouLi56elxuLy8geCA9IDAgZm9yIG5lZ2F0aXZlLCAxIGZvciAwLCAyIGZvciBwb3NpdGl2ZVxuLy8geSA9IGV4cG9uZW50IChmb3IgbmVnYXRpdmUgbnVtYmVycyBuZWdhdGVkKSBtb3ZlZCBzbyB0aGF0IGl0J3MgPj0gMFxuLy8geiA9IG1hbnRpc3NlXG5mdW5jdGlvbiBudW1Ub0luZGV4YWJsZVN0cmluZyhudW0pIHtcblxuICBpZiAobnVtID09PSAwKSB7XG4gICAgcmV0dXJuICcxJztcbiAgfVxuXG4gIC8vIGNvbnZlcnQgbnVtYmVyIHRvIGV4cG9uZW50aWFsIGZvcm1hdCBmb3IgZWFzaWVyIGFuZFxuICAvLyBtb3JlIHN1Y2NpbmN0IHN0cmluZyBzb3J0aW5nXG4gIHZhciBleHBGb3JtYXQgPSBudW0udG9FeHBvbmVudGlhbCgpLnNwbGl0KC9lXFwrPy8pO1xuICB2YXIgbWFnbml0dWRlID0gcGFyc2VJbnQoZXhwRm9ybWF0WzFdLCAxMCk7XG5cbiAgdmFyIG5lZyA9IG51bSA8IDA7XG5cbiAgdmFyIHJlc3VsdCA9IG5lZyA/ICcwJyA6ICcyJztcblxuICAvLyBmaXJzdCBzb3J0IGJ5IG1hZ25pdHVkZVxuICAvLyBpdCdzIGVhc2llciBpZiBhbGwgbWFnbml0dWRlcyBhcmUgcG9zaXRpdmVcbiAgdmFyIG1hZ0ZvckNvbXBhcmlzb24gPSAoKG5lZyA/IC1tYWduaXR1ZGUgOiBtYWduaXR1ZGUpIC0gTUlOX01BR05JVFVERSk7XG4gIHZhciBtYWdTdHJpbmcgPSBwYWRMZWZ0KChtYWdGb3JDb21wYXJpc29uKS50b1N0cmluZygpLCAnMCcsIE1BR05JVFVERV9ESUdJVFMpO1xuXG4gIHJlc3VsdCArPSBTRVAgKyBtYWdTdHJpbmc7XG5cbiAgLy8gdGhlbiBzb3J0IGJ5IHRoZSBmYWN0b3JcbiAgdmFyIGZhY3RvciA9IE1hdGguYWJzKHBhcnNlRmxvYXQoZXhwRm9ybWF0WzBdKSk7IC8vIFsxLi4xMClcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKG5lZykgeyAvLyBmb3IgbmVnYXRpdmUgcmV2ZXJzZSBvcmRlcmluZ1xuICAgIGZhY3RvciA9IDEwIC0gZmFjdG9yO1xuICB9XG5cbiAgdmFyIGZhY3RvclN0ciA9IGZhY3Rvci50b0ZpeGVkKDIwKTtcblxuICAvLyBzdHJpcCB6ZXJvcyBmcm9tIHRoZSBlbmRcbiAgZmFjdG9yU3RyID0gZmFjdG9yU3RyLnJlcGxhY2UoL1xcLj8wKyQvLCAnJyk7XG5cbiAgcmVzdWx0ICs9IFNFUCArIGZhY3RvclN0cjtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBjcmVhdGUgYSBjb21wYXJhdG9yIGJhc2VkIG9uIHRoZSBzb3J0IG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlRmllbGRTb3J0ZXIoc29ydCkge1xuXG4gIGZ1bmN0aW9uIGdldEZpZWxkVmFsdWVzQXNBcnJheShkb2MpIHtcbiAgICByZXR1cm4gc29ydC5tYXAoZnVuY3Rpb24gKHNvcnRpbmcpIHtcbiAgICAgIHZhciBmaWVsZE5hbWUgPSBnZXRLZXkoc29ydGluZyk7XG4gICAgICB2YXIgcGFyc2VkRmllbGQgPSBwYXJzZUZpZWxkKGZpZWxkTmFtZSk7XG4gICAgICB2YXIgZG9jRmllbGRWYWx1ZSA9IGdldEZpZWxkRnJvbURvYyhkb2MsIHBhcnNlZEZpZWxkKTtcbiAgICAgIHJldHVybiBkb2NGaWVsZFZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhUm93LCBiUm93KSB7XG4gICAgdmFyIGFGaWVsZFZhbHVlcyA9IGdldEZpZWxkVmFsdWVzQXNBcnJheShhUm93LmRvYyk7XG4gICAgdmFyIGJGaWVsZFZhbHVlcyA9IGdldEZpZWxkVmFsdWVzQXNBcnJheShiUm93LmRvYyk7XG4gICAgdmFyIGNvbGxhdGlvbiA9IGNvbGxhdGUoYUZpZWxkVmFsdWVzLCBiRmllbGRWYWx1ZXMpO1xuICAgIGlmIChjb2xsYXRpb24gIT09IDApIHtcbiAgICAgIHJldHVybiBjb2xsYXRpb247XG4gICAgfVxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYW5nbyBzZWVtcyB0byBkb1xuICAgIHJldHVybiBjb21wYXJlJDEoYVJvdy5kb2MuX2lkLCBiUm93LmRvYy5faWQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJJbk1lbW9yeUZpZWxkcyhyb3dzLCByZXF1ZXN0RGVmLCBpbk1lbW9yeUZpZWxkcykge1xuICByb3dzID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiByb3dGaWx0ZXIocm93LmRvYywgcmVxdWVzdERlZi5zZWxlY3RvciwgaW5NZW1vcnlGaWVsZHMpO1xuICB9KTtcblxuICBpZiAocmVxdWVzdERlZi5zb3J0KSB7XG4gICAgLy8gaW4tbWVtb3J5IHNvcnRcbiAgICB2YXIgZmllbGRTb3J0ZXIgPSBjcmVhdGVGaWVsZFNvcnRlcihyZXF1ZXN0RGVmLnNvcnQpO1xuICAgIHJvd3MgPSByb3dzLnNvcnQoZmllbGRTb3J0ZXIpO1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdERlZi5zb3J0WzBdICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICBnZXRWYWx1ZShyZXF1ZXN0RGVmLnNvcnRbMF0pID09PSAnZGVzYycpIHtcbiAgICAgIHJvd3MgPSByb3dzLnJldmVyc2UoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoJ2xpbWl0JyBpbiByZXF1ZXN0RGVmIHx8ICdza2lwJyBpbiByZXF1ZXN0RGVmKSB7XG4gICAgLy8gaGF2ZSB0byBkbyB0aGUgbGltaXQgaW4tbWVtb3J5XG4gICAgdmFyIHNraXAgPSByZXF1ZXN0RGVmLnNraXAgfHwgMDtcbiAgICB2YXIgbGltaXQgPSAoJ2xpbWl0JyBpbiByZXF1ZXN0RGVmID8gcmVxdWVzdERlZi5saW1pdCA6IHJvd3MubGVuZ3RoKSArIHNraXA7XG4gICAgcm93cyA9IHJvd3Muc2xpY2Uoc2tpcCwgbGltaXQpO1xuICB9XG4gIHJldHVybiByb3dzO1xufVxuXG5mdW5jdGlvbiByb3dGaWx0ZXIoZG9jLCBzZWxlY3RvciwgaW5NZW1vcnlGaWVsZHMpIHtcbiAgcmV0dXJuIGluTWVtb3J5RmllbGRzLmV2ZXJ5KGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBtYXRjaGVyID0gc2VsZWN0b3JbZmllbGRdO1xuICAgIHZhciBwYXJzZWRGaWVsZCA9IHBhcnNlRmllbGQoZmllbGQpO1xuICAgIHZhciBkb2NGaWVsZFZhbHVlID0gZ2V0RmllbGRGcm9tRG9jKGRvYywgcGFyc2VkRmllbGQpO1xuICAgIGlmIChpc0NvbWJpbmF0aW9uYWxGaWVsZChmaWVsZCkpIHtcbiAgICAgIHJldHVybiBtYXRjaENvbWluYXRpb25hbFNlbGVjdG9yKGZpZWxkLCBtYXRjaGVyLCBkb2MpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaFNlbGVjdG9yKG1hdGNoZXIsIGRvYywgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hTZWxlY3RvcihtYXRjaGVyLCBkb2MsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gIGlmICghbWF0Y2hlcikge1xuICAgIC8vIG5vIGZpbHRlcmluZyBuZWNlc3Nhcnk7IHRoaXMgZmllbGQgaXMganVzdCBuZWVkZWQgZm9yIHNvcnRpbmdcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIG1hdGNoZXIgYW4gb2JqZWN0LCBpZiBzbyBjb250aW51ZSByZWN1cnNpb25cbiAgaWYgKHR5cGVvZiBtYXRjaGVyID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXRjaGVyKS5ldmVyeShmdW5jdGlvbiAodXNlck9wZXJhdG9yKSB7XG4gICAgICB2YXIgdXNlclZhbHVlID0gbWF0Y2hlclt1c2VyT3BlcmF0b3JdO1xuICAgICAgcmV0dXJuIG1hdGNoKHVzZXJPcGVyYXRvciwgZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIG5vIG1vcmUgZGVwdGgsIE5vIG5lZWQgdG8gcmVjdXJzZSBmdXJ0aGVyXG4gIHJldHVybiBtYXRjaGVyID09PSBkb2NGaWVsZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbWluYXRpb25hbFNlbGVjdG9yKGZpZWxkLCBtYXRjaGVyLCBkb2MpIHtcblxuICBpZiAoZmllbGQgPT09ICckb3InKSB7XG4gICAgcmV0dXJuIG1hdGNoZXIuc29tZShmdW5jdGlvbiAob3JNYXRjaGVycykge1xuICAgICAgcmV0dXJuIHJvd0ZpbHRlcihkb2MsIG9yTWF0Y2hlcnMsIE9iamVjdC5rZXlzKG9yTWF0Y2hlcnMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChmaWVsZCA9PT0gJyRub3QnKSB7XG4gICAgcmV0dXJuICFyb3dGaWx0ZXIoZG9jLCBtYXRjaGVyLCBPYmplY3Qua2V5cyhtYXRjaGVyKSk7XG4gIH1cblxuICAvL2Akbm9yYFxuICByZXR1cm4gIW1hdGNoZXIuZmluZChmdW5jdGlvbiAob3JNYXRjaGVycykge1xuICAgIHJldHVybiByb3dGaWx0ZXIoZG9jLCBvck1hdGNoZXJzLCBPYmplY3Qua2V5cyhvck1hdGNoZXJzKSk7XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIG1hdGNoKHVzZXJPcGVyYXRvciwgZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gIGlmICghbWF0Y2hlcnNbdXNlck9wZXJhdG9yXSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBvcGVyYXRvciBcIicgKyB1c2VyT3BlcmF0b3IgK1xuICAgICAgJ1wiIC0gc2hvdWxkIGJlIG9uZSBvZiAkZXEsICRsdGUsICRsdCwgJGd0LCAkZ3RlLCAkZXhpc3RzLCAkbmUsICRpbiwgJyArXG4gICAgICAnJG5pbiwgJHNpemUsICRtb2QsICRyZWdleCwgJGVsZW1NYXRjaCwgJHR5cGUsICRhbGxNYXRjaCBvciAkYWxsJyk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXJzW3VzZXJPcGVyYXRvcl0oZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZmllbGRFeGlzdHMoZG9jRmllbGRWYWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIGRvY0ZpZWxkVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIGRvY0ZpZWxkVmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIGRvY0ZpZWxkVmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBtb2RGaWVsZChkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIHtcbiAgdmFyIGRpdmlzb3IgPSB1c2VyVmFsdWVbMF07XG4gIHZhciBtb2QgPSB1c2VyVmFsdWVbMV07XG4gIGlmIChkaXZpc29yID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgZGl2aXNvciwgY2Fubm90IGRpdmlkZSBieSB6ZXJvJyk7XG4gIH1cblxuICBpZiAocGFyc2VJbnQoZGl2aXNvciwgMTApICE9PSBkaXZpc29yICkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGl2aXNvciBpcyBub3QgYW4gaW50ZWdlcicpO1xuICB9XG5cbiAgaWYgKHBhcnNlSW50KG1vZCwgMTApICE9PSBtb2QgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNb2R1bHVzIGlzIG5vdCBhbiBpbnRlZ2VyJyk7XG4gIH1cblxuICBpZiAocGFyc2VJbnQoZG9jRmllbGRWYWx1ZSwgMTApICE9PSBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUgJSBkaXZpc29yID09PSBtb2Q7XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnNWYWx1ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIHtcbiAgcmV0dXJuIHVzZXJWYWx1ZS5zb21lKGZ1bmN0aW9uICh2YWwpIHtcbiAgICBpZiAoZG9jRmllbGRWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gZG9jRmllbGRWYWx1ZS5pbmRleE9mKHZhbCkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jRmllbGRWYWx1ZSA9PT0gdmFsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWluc0FsbFZhbHVlcyhkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIHtcbiAgcmV0dXJuIHVzZXJWYWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUuaW5kZXhPZih2YWwpID4gLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcnJheVNpemUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKSB7XG4gIHJldHVybiBkb2NGaWVsZFZhbHVlLmxlbmd0aCA9PT0gdXNlclZhbHVlO1xufVxuXG5mdW5jdGlvbiByZWdleE1hdGNoKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKHVzZXJWYWx1ZSk7XG5cbiAgcmV0dXJuIHJlLnRlc3QoZG9jRmllbGRWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVNYXRjaChkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpIHtcblxuICBzd2l0Y2ggKHVzZXJWYWx1ZSkge1xuICAgIGNhc2UgJ251bGwnOlxuICAgICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUgPT09IG51bGw7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdHlwZW9mIChkb2NGaWVsZFZhbHVlKSA9PT0gJ2Jvb2xlYW4nO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gdHlwZW9mIChkb2NGaWVsZFZhbHVlKSA9PT0gJ251bWJlcic7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB0eXBlb2YgKGRvY0ZpZWxkVmFsdWUpID09PSAnc3RyaW5nJztcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gZG9jRmllbGRWYWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICByZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKGRvY0ZpZWxkVmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcih1c2VyVmFsdWUgKyAnIG5vdCBzdXBwb3J0ZWQgYXMgYSB0eXBlLicgK1xuICAgICAgICAgICAgICAgICAgJ1BsZWFzZSB1c2Ugb25lIG9mIG9iamVjdCwgc3RyaW5nLCBhcnJheSwgbnVtYmVyLCBib29sZWFuIG9yIG51bGwuJyk7XG5cbn1cblxudmFyIG1hdGNoZXJzID0ge1xuXG4gICckZWxlbU1hdGNoJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkb2NGaWVsZFZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkb2NGaWVsZFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jRmllbGRWYWx1ZVswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkb2NGaWVsZFZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gcm93RmlsdGVyKHZhbCwgdXNlclZhbHVlLCBPYmplY3Qua2V5cyh1c2VyVmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2NGaWVsZFZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIG1hdGNoU2VsZWN0b3IodXNlclZhbHVlLCBkb2MsIHBhcnNlZEZpZWxkLCB2YWwpO1xuICAgIH0pO1xuICB9LFxuXG4gICckYWxsTWF0Y2gnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRvY0ZpZWxkVmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoZG9jRmllbGRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY0ZpZWxkVmFsdWVbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZG9jRmllbGRWYWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiByb3dGaWx0ZXIodmFsLCB1c2VyVmFsdWUsIE9iamVjdC5rZXlzKHVzZXJWYWx1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY0ZpZWxkVmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIG1hdGNoU2VsZWN0b3IodXNlclZhbHVlLCBkb2MsIHBhcnNlZEZpZWxkLCB2YWwpO1xuICAgIH0pO1xuICB9LFxuXG4gICckZXEnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSkgJiYgY29sbGF0ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpID09PSAwO1xuICB9LFxuXG4gICckZ3RlJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZElzTm90VW5kZWZpbmVkKGRvY0ZpZWxkVmFsdWUpICYmIGNvbGxhdGUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKSA+PSAwO1xuICB9LFxuXG4gICckZ3QnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSkgJiYgY29sbGF0ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpID4gMDtcbiAgfSxcblxuICAnJGx0ZSc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmllbGRJc05vdFVuZGVmaW5lZChkb2NGaWVsZFZhbHVlKSAmJiBjb2xsYXRlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSkgPD0gMDtcbiAgfSxcblxuICAnJGx0JzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZElzTm90VW5kZWZpbmVkKGRvY0ZpZWxkVmFsdWUpICYmIGNvbGxhdGUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKSA8IDA7XG4gIH0sXG5cbiAgJyRleGlzdHMnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgLy9hIGZpZWxkIHRoYXQgaXMgbnVsbCBpcyBzdGlsbCBjb25zaWRlcmVkIHRvIGV4aXN0XG4gICAgaWYgKHVzZXJWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZpZWxkSXNOb3RVbmRlZmluZWQoZG9jRmllbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFmaWVsZElzTm90VW5kZWZpbmVkKGRvY0ZpZWxkVmFsdWUpO1xuICB9LFxuXG4gICckbW9kJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZEV4aXN0cyhkb2NGaWVsZFZhbHVlKSAmJiBtb2RGaWVsZChkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpO1xuICB9LFxuXG4gICckbmUnOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIHVzZXJWYWx1ZS5ldmVyeShmdW5jdGlvbiAobmVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvbGxhdGUoZG9jRmllbGRWYWx1ZSwgbmVWYWx1ZSkgIT09IDA7XG4gICAgfSk7XG4gIH0sXG4gICckaW4nOiBmdW5jdGlvbiAoZG9jLCB1c2VyVmFsdWUsIHBhcnNlZEZpZWxkLCBkb2NGaWVsZFZhbHVlKSB7XG4gICAgcmV0dXJuIGZpZWxkRXhpc3RzKGRvY0ZpZWxkVmFsdWUpICYmIGFycmF5Q29udGFpbnNWYWx1ZShkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpO1xuICB9LFxuXG4gICckbmluJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZEV4aXN0cyhkb2NGaWVsZFZhbHVlKSAmJiAhYXJyYXlDb250YWluc1ZhbHVlKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH0sXG5cbiAgJyRzaXplJzogZnVuY3Rpb24gKGRvYywgdXNlclZhbHVlLCBwYXJzZWRGaWVsZCwgZG9jRmllbGRWYWx1ZSkge1xuICAgIHJldHVybiBmaWVsZEV4aXN0cyhkb2NGaWVsZFZhbHVlKSAmJiBhcnJheVNpemUoZG9jRmllbGRWYWx1ZSwgdXNlclZhbHVlKTtcbiAgfSxcblxuICAnJGFsbCc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkb2NGaWVsZFZhbHVlKSAmJiBhcnJheUNvbnRhaW5zQWxsVmFsdWVzKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH0sXG5cbiAgJyRyZWdleCc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gZmllbGRFeGlzdHMoZG9jRmllbGRWYWx1ZSkgJiYgcmVnZXhNYXRjaChkb2NGaWVsZFZhbHVlLCB1c2VyVmFsdWUpO1xuICB9LFxuXG4gICckdHlwZSc6IGZ1bmN0aW9uIChkb2MsIHVzZXJWYWx1ZSwgcGFyc2VkRmllbGQsIGRvY0ZpZWxkVmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZU1hdGNoKGRvY0ZpZWxkVmFsdWUsIHVzZXJWYWx1ZSk7XG4gIH1cbn07XG5cbi8vIHJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBkb2MgbWF0Y2hlcyB0aGUgc3VwcGxpZWQgc2VsZWN0b3JcbmZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcihkb2MsIHNlbGVjdG9yKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnb2JqZWN0Jykge1xuICAgIC8vIG1hdGNoIHRoZSBDb3VjaERCIGVycm9yIG1lc3NhZ2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGVycm9yOiBleHBlY3RlZCBhIEpTT04gb2JqZWN0Jyk7XG4gIH1cblxuICBzZWxlY3RvciA9IG1hc3NhZ2VTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHZhciByb3cgPSB7XG4gICAgJ2RvYyc6IGRvY1xuICB9O1xuXG4gIHZhciByb3dzTWF0Y2hlZCA9IGZpbHRlckluTWVtb3J5RmllbGRzKFtyb3ddLCB7ICdzZWxlY3Rvcic6IHNlbGVjdG9yIH0sIE9iamVjdC5rZXlzKHNlbGVjdG9yKSk7XG4gIHJldHVybiByb3dzTWF0Y2hlZCAmJiByb3dzTWF0Y2hlZC5sZW5ndGggPT09IDE7XG59XG5cbmZ1bmN0aW9uIGV2YWxGaWx0ZXIoaW5wdXQpIHtcbiAgcmV0dXJuIHNjb3BlRXZhbCgnXCJ1c2Ugc3RyaWN0XCI7XFxucmV0dXJuICcgKyBpbnB1dCArICc7Jywge30pO1xufVxuXG5mdW5jdGlvbiBldmFsVmlldyhpbnB1dCkge1xuICB2YXIgY29kZSA9IFtcbiAgICAncmV0dXJuIGZ1bmN0aW9uKGRvYykgeycsXG4gICAgJyAgXCJ1c2Ugc3RyaWN0XCI7JyxcbiAgICAnICB2YXIgZW1pdHRlZCA9IGZhbHNlOycsXG4gICAgJyAgdmFyIGVtaXQgPSBmdW5jdGlvbiAoYSwgYikgeycsXG4gICAgJyAgICBlbWl0dGVkID0gdHJ1ZTsnLFxuICAgICcgIH07JyxcbiAgICAnICB2YXIgdmlldyA9ICcgKyBpbnB1dCArICc7JyxcbiAgICAnICB2aWV3KGRvYyk7JyxcbiAgICAnICBpZiAoZW1pdHRlZCkgeycsXG4gICAgJyAgICByZXR1cm4gdHJ1ZTsnLFxuICAgICcgIH0nLFxuICAgICd9OydcbiAgXS5qb2luKCdcXG4nKTtcblxuICByZXR1cm4gc2NvcGVFdmFsKGNvZGUsIHt9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUob3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKG9wdHMuc2VsZWN0b3IpIHtcbiAgICBpZiAob3B0cy5maWx0ZXIgJiYgb3B0cy5maWx0ZXIgIT09ICdfc2VsZWN0b3InKSB7XG4gICAgICB2YXIgZmlsdGVyTmFtZSA9IHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ3N0cmluZycgP1xuICAgICAgICBvcHRzLmZpbHRlciA6ICdmdW5jdGlvbic7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdzZWxlY3RvciBpbnZhbGlkIGZvciBmaWx0ZXIgXCInICsgZmlsdGVyTmFtZSArICdcIicpKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKG9wdHMpIHtcbiAgaWYgKG9wdHMudmlldyAmJiAhb3B0cy5maWx0ZXIpIHtcbiAgICBvcHRzLmZpbHRlciA9ICdfdmlldyc7XG4gIH1cblxuICBpZiAob3B0cy5zZWxlY3RvciAmJiAhb3B0cy5maWx0ZXIpIHtcbiAgICBvcHRzLmZpbHRlciA9ICdfc2VsZWN0b3InO1xuICB9XG5cbiAgaWYgKG9wdHMuZmlsdGVyICYmIHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAob3B0cy5maWx0ZXIgPT09ICdfdmlldycpIHtcbiAgICAgIG9wdHMudmlldyA9IG5vcm1hbGl6ZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShvcHRzLnZpZXcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRzLmZpbHRlciA9IG5vcm1hbGl6ZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShvcHRzLmZpbHRlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZpbHRlcihjaGFuZ2VzSGFuZGxlciwgb3B0cykge1xuICByZXR1cm4gb3B0cy5maWx0ZXIgJiYgdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnc3RyaW5nJyAmJlxuICAgICFvcHRzLmRvY19pZHMgJiYgIWlzUmVtb3RlKGNoYW5nZXNIYW5kbGVyLmRiKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGNoYW5nZXNIYW5kbGVyLCBvcHRzKSB7XG4gIHZhciBjYWxsYmFjayA9IG9wdHMuY29tcGxldGU7XG4gIGlmIChvcHRzLmZpbHRlciA9PT0gJ192aWV3Jykge1xuICAgIGlmICghb3B0cy52aWV3IHx8IHR5cGVvZiBvcHRzLnZpZXcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZXJyID0gY3JlYXRlRXJyb3IoQkFEX1JFUVVFU1QsXG4gICAgICAgICdgdmlld2AgZmlsdGVyIHBhcmFtZXRlciBub3QgZm91bmQgb3IgaW52YWxpZC4nKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIH1cbiAgICAvLyBmZXRjaCBhIHZpZXcgZnJvbSBhIGRlc2lnbiBkb2MsIG1ha2UgaXQgYmVoYXZlIGxpa2UgYSBmaWx0ZXJcbiAgICB2YXIgdmlld05hbWUgPSBwYXJzZURlc2lnbkRvY0Z1bmN0aW9uTmFtZShvcHRzLnZpZXcpO1xuICAgIGNoYW5nZXNIYW5kbGVyLmRiLmdldCgnX2Rlc2lnbi8nICsgdmlld05hbWVbMF0sIGZ1bmN0aW9uIChlcnIsIGRkb2MpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNoYW5nZXNIYW5kbGVyLmlzQ2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7c3RhdHVzOiAnY2FuY2VsbGVkJ30pO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGdlbmVyYXRlRXJyb3JGcm9tUmVzcG9uc2UoZXJyKSk7XG4gICAgICB9XG4gICAgICB2YXIgbWFwRnVuID0gZGRvYyAmJiBkZG9jLnZpZXdzICYmIGRkb2Mudmlld3Nbdmlld05hbWVbMV1dICYmXG4gICAgICAgIGRkb2Mudmlld3Nbdmlld05hbWVbMV1dLm1hcDtcbiAgICAgIGlmICghbWFwRnVuKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0RPQyxcbiAgICAgICAgICAoZGRvYy52aWV3cyA/ICdtaXNzaW5nIGpzb24ga2V5OiAnICsgdmlld05hbWVbMV0gOlxuICAgICAgICAgICAgJ21pc3NpbmcganNvbiBrZXk6IHZpZXdzJykpKTtcbiAgICAgIH1cbiAgICAgIG9wdHMuZmlsdGVyID0gZXZhbFZpZXcobWFwRnVuKTtcbiAgICAgIGNoYW5nZXNIYW5kbGVyLmRvQ2hhbmdlcyhvcHRzKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChvcHRzLnNlbGVjdG9yKSB7XG4gICAgb3B0cy5maWx0ZXIgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yKGRvYywgb3B0cy5zZWxlY3Rvcik7XG4gICAgfTtcbiAgICBjaGFuZ2VzSGFuZGxlci5kb0NoYW5nZXMob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmV0Y2ggYSBmaWx0ZXIgZnJvbSBhIGRlc2lnbiBkb2NcbiAgICB2YXIgZmlsdGVyTmFtZSA9IHBhcnNlRGVzaWduRG9jRnVuY3Rpb25OYW1lKG9wdHMuZmlsdGVyKTtcbiAgICBjaGFuZ2VzSGFuZGxlci5kYi5nZXQoJ19kZXNpZ24vJyArIGZpbHRlck5hbWVbMF0sIGZ1bmN0aW9uIChlcnIsIGRkb2MpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNoYW5nZXNIYW5kbGVyLmlzQ2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7c3RhdHVzOiAnY2FuY2VsbGVkJ30pO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGdlbmVyYXRlRXJyb3JGcm9tUmVzcG9uc2UoZXJyKSk7XG4gICAgICB9XG4gICAgICB2YXIgZmlsdGVyRnVuID0gZGRvYyAmJiBkZG9jLmZpbHRlcnMgJiYgZGRvYy5maWx0ZXJzW2ZpbHRlck5hbWVbMV1dO1xuICAgICAgaWYgKCFmaWx0ZXJGdW4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DLFxuICAgICAgICAgICgoZGRvYyAmJiBkZG9jLmZpbHRlcnMpID8gJ21pc3NpbmcganNvbiBrZXk6ICcgKyBmaWx0ZXJOYW1lWzFdXG4gICAgICAgICAgICA6ICdtaXNzaW5nIGpzb24ga2V5OiBmaWx0ZXJzJykpKTtcbiAgICAgIH1cbiAgICAgIG9wdHMuZmlsdGVyID0gZXZhbEZpbHRlcihmaWx0ZXJGdW4pO1xuICAgICAgY2hhbmdlc0hhbmRsZXIuZG9DaGFuZ2VzKG9wdHMpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0ZpbHRlclBsdWdpbihQb3VjaERCKSB7XG4gIFBvdWNoREIuX2NoYW5nZXNGaWx0ZXJQbHVnaW4gPSB7XG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIHNob3VsZEZpbHRlcjogc2hvdWxkRmlsdGVyLFxuICAgIGZpbHRlcjogZmlsdGVyXG4gIH07XG59XG5cbi8vIFRPRE86IHJlbW92ZSBmcm9tIHBvdWNoZGItY29yZSAoYnJlYWtpbmcpXG5Qb3VjaERCLnBsdWdpbihhcHBseUNoYW5nZXNGaWx0ZXJQbHVnaW4pO1xuXG5Qb3VjaERCLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG5mdW5jdGlvbiB0b09iamVjdChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGl0ZW0pIHtcbiAgICBvYmpbaXRlbV0gPSB0cnVlO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn1cbi8vIExpc3Qgb2YgdG9wIGxldmVsIHJlc2VydmVkIHdvcmRzIGZvciBkb2NcbnZhciByZXNlcnZlZFdvcmRzID0gdG9PYmplY3QoW1xuICAnX2lkJyxcbiAgJ19yZXYnLFxuICAnX2F0dGFjaG1lbnRzJyxcbiAgJ19kZWxldGVkJyxcbiAgJ19yZXZpc2lvbnMnLFxuICAnX3JldnNfaW5mbycsXG4gICdfY29uZmxpY3RzJyxcbiAgJ19kZWxldGVkX2NvbmZsaWN0cycsXG4gICdfbG9jYWxfc2VxJyxcbiAgJ19yZXZfdHJlZScsXG4gIC8vcmVwbGljYXRpb24gZG9jdW1lbnRzXG4gICdfcmVwbGljYXRpb25faWQnLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRlJyxcbiAgJ19yZXBsaWNhdGlvbl9zdGF0ZV90aW1lJyxcbiAgJ19yZXBsaWNhdGlvbl9zdGF0ZV9yZWFzb24nLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRzJyxcbiAgLy8gU3BlY2lmaWMgdG8gQ291Y2hiYXNlIFN5bmMgR2F0ZXdheVxuICAnX3JlbW92ZWQnXG5dKTtcblxuLy8gTGlzdCBvZiByZXNlcnZlZCB3b3JkcyB0aGF0IHNob3VsZCBlbmQgdXAgdGhlIGRvY3VtZW50XG52YXIgZGF0YVdvcmRzID0gdG9PYmplY3QoW1xuICAnX2F0dGFjaG1lbnRzJyxcbiAgLy9yZXBsaWNhdGlvbiBkb2N1bWVudHNcbiAgJ19yZXBsaWNhdGlvbl9pZCcsXG4gICdfcmVwbGljYXRpb25fc3RhdGUnLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRlX3RpbWUnLFxuICAnX3JlcGxpY2F0aW9uX3N0YXRlX3JlYXNvbicsXG4gICdfcmVwbGljYXRpb25fc3RhdHMnXG5dKTtcblxuZnVuY3Rpb24gcGFyc2VSZXZpc2lvbkluZm8ocmV2JCQxKSB7XG4gIGlmICghL15cXGQrLS8udGVzdChyZXYkJDEpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVycm9yKElOVkFMSURfUkVWKTtcbiAgfVxuICB2YXIgaWR4ID0gcmV2JCQxLmluZGV4T2YoJy0nKTtcbiAgdmFyIGxlZnQgPSByZXYkJDEuc3Vic3RyaW5nKDAsIGlkeCk7XG4gIHZhciByaWdodCA9IHJldiQkMS5zdWJzdHJpbmcoaWR4ICsgMSk7XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBwYXJzZUludChsZWZ0LCAxMCksXG4gICAgaWQ6IHJpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXZUcmVlRnJvbVJldmlzaW9ucyhyZXZpc2lvbnMsIG9wdHMpIHtcbiAgdmFyIHBvcyA9IHJldmlzaW9ucy5zdGFydCAtIHJldmlzaW9ucy5pZHMubGVuZ3RoICsgMTtcblxuICB2YXIgcmV2aXNpb25JZHMgPSByZXZpc2lvbnMuaWRzO1xuICB2YXIgaWRzID0gW3JldmlzaW9uSWRzWzBdLCBvcHRzLCBbXV07XG5cbiAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHJldmlzaW9uSWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWRzID0gW3JldmlzaW9uSWRzW2ldLCB7c3RhdHVzOiAnbWlzc2luZyd9LCBbaWRzXV07XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICBwb3M6IHBvcyxcbiAgICBpZHM6IGlkc1xuICB9XTtcbn1cblxuLy8gUHJlcHJvY2VzcyBkb2N1bWVudHMsIHBhcnNlIHRoZWlyIHJldmlzaW9ucywgYXNzaWduIGFuIGlkIGFuZCBhXG4vLyByZXZpc2lvbiBmb3IgbmV3IHdyaXRlcyB0aGF0IGFyZSBtaXNzaW5nIHRoZW0sIGV0Y1xuZnVuY3Rpb24gcGFyc2VEb2MoZG9jLCBuZXdFZGl0cywgZGJPcHRzKSB7XG4gIGlmICghZGJPcHRzKSB7XG4gICAgZGJPcHRzID0ge1xuICAgICAgZGV0ZXJtaW5pc3RpY19yZXZzOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBuUmV2TnVtO1xuICB2YXIgbmV3UmV2SWQ7XG4gIHZhciByZXZJbmZvO1xuICB2YXIgb3B0cyA9IHtzdGF0dXM6ICdhdmFpbGFibGUnfTtcbiAgaWYgKGRvYy5fZGVsZXRlZCkge1xuICAgIG9wdHMuZGVsZXRlZCA9IHRydWU7XG4gIH1cblxuICBpZiAobmV3RWRpdHMpIHtcbiAgICBpZiAoIWRvYy5faWQpIHtcbiAgICAgIGRvYy5faWQgPSB1dWlkKCk7XG4gICAgfVxuICAgIG5ld1JldklkID0gcmV2KGRvYywgZGJPcHRzLmRldGVybWluaXN0aWNfcmV2cyk7XG4gICAgaWYgKGRvYy5fcmV2KSB7XG4gICAgICByZXZJbmZvID0gcGFyc2VSZXZpc2lvbkluZm8oZG9jLl9yZXYpO1xuICAgICAgaWYgKHJldkluZm8uZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJldkluZm87XG4gICAgICB9XG4gICAgICBkb2MuX3Jldl90cmVlID0gW3tcbiAgICAgICAgcG9zOiByZXZJbmZvLnByZWZpeCxcbiAgICAgICAgaWRzOiBbcmV2SW5mby5pZCwge3N0YXR1czogJ21pc3NpbmcnfSwgW1tuZXdSZXZJZCwgb3B0cywgW11dXV1cbiAgICAgIH1dO1xuICAgICAgblJldk51bSA9IHJldkluZm8ucHJlZml4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLl9yZXZfdHJlZSA9IFt7XG4gICAgICAgIHBvczogMSxcbiAgICAgICAgaWRzIDogW25ld1JldklkLCBvcHRzLCBbXV1cbiAgICAgIH1dO1xuICAgICAgblJldk51bSA9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkb2MuX3JldmlzaW9ucykge1xuICAgICAgZG9jLl9yZXZfdHJlZSA9IG1ha2VSZXZUcmVlRnJvbVJldmlzaW9ucyhkb2MuX3JldmlzaW9ucywgb3B0cyk7XG4gICAgICBuUmV2TnVtID0gZG9jLl9yZXZpc2lvbnMuc3RhcnQ7XG4gICAgICBuZXdSZXZJZCA9IGRvYy5fcmV2aXNpb25zLmlkc1swXTtcbiAgICB9XG4gICAgaWYgKCFkb2MuX3Jldl90cmVlKSB7XG4gICAgICByZXZJbmZvID0gcGFyc2VSZXZpc2lvbkluZm8oZG9jLl9yZXYpO1xuICAgICAgaWYgKHJldkluZm8uZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJldkluZm87XG4gICAgICB9XG4gICAgICBuUmV2TnVtID0gcmV2SW5mby5wcmVmaXg7XG4gICAgICBuZXdSZXZJZCA9IHJldkluZm8uaWQ7XG4gICAgICBkb2MuX3Jldl90cmVlID0gW3tcbiAgICAgICAgcG9zOiBuUmV2TnVtLFxuICAgICAgICBpZHM6IFtuZXdSZXZJZCwgb3B0cywgW11dXG4gICAgICB9XTtcbiAgICB9XG4gIH1cblxuICBpbnZhbGlkSWRFcnJvcihkb2MuX2lkKTtcblxuICBkb2MuX3JldiA9IG5SZXZOdW0gKyAnLScgKyBuZXdSZXZJZDtcblxuICB2YXIgcmVzdWx0ID0ge21ldGFkYXRhIDoge30sIGRhdGEgOiB7fX07XG4gIGZvciAodmFyIGtleSBpbiBkb2MpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZG9jLCBrZXkpKSB7XG4gICAgICB2YXIgc3BlY2lhbEtleSA9IGtleVswXSA9PT0gJ18nO1xuICAgICAgaWYgKHNwZWNpYWxLZXkgJiYgIXJlc2VydmVkV29yZHNba2V5XSkge1xuICAgICAgICB2YXIgZXJyb3IgPSBjcmVhdGVFcnJvcihET0NfVkFMSURBVElPTiwga2V5KTtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9IERPQ19WQUxJREFUSU9OLm1lc3NhZ2UgKyAnOiAnICsga2V5O1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZWxzZSBpZiAoc3BlY2lhbEtleSAmJiAhZGF0YVdvcmRzW2tleV0pIHtcbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhW2tleS5zbGljZSgxKV0gPSBkb2Nba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5kYXRhW2tleV0gPSBkb2Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VCYXNlNjQoZGF0YSkge1xuICB0cnkge1xuICAgIHJldHVybiB0aGlzQXRvYihkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBlcnIgPSBjcmVhdGVFcnJvcihCQURfQVJHLFxuICAgICAgJ0F0dGFjaG1lbnQgaXMgbm90IGEgdmFsaWQgYmFzZTY0IHN0cmluZycpO1xuICAgIHJldHVybiB7ZXJyb3I6IGVycn07XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1N0cmluZyhhdHQsIGJsb2JUeXBlLCBjYWxsYmFjaykge1xuICB2YXIgYXNCaW5hcnkgPSBwYXJzZUJhc2U2NChhdHQuZGF0YSk7XG4gIGlmIChhc0JpbmFyeS5lcnJvcikge1xuICAgIHJldHVybiBjYWxsYmFjayhhc0JpbmFyeS5lcnJvcik7XG4gIH1cblxuICBhdHQubGVuZ3RoID0gYXNCaW5hcnkubGVuZ3RoO1xuICBpZiAoYmxvYlR5cGUgPT09ICdibG9iJykge1xuICAgIGF0dC5kYXRhID0gYmluU3RyaW5nVG9CbHVmZmVyKGFzQmluYXJ5LCBhdHQuY29udGVudF90eXBlKTtcbiAgfSBlbHNlIGlmIChibG9iVHlwZSA9PT0gJ2Jhc2U2NCcpIHtcbiAgICBhdHQuZGF0YSA9IHRoaXNCdG9hKGFzQmluYXJ5KTtcbiAgfSBlbHNlIHsgLy8gYmluYXJ5XG4gICAgYXR0LmRhdGEgPSBhc0JpbmFyeTtcbiAgfVxuICBiaW5hcnlNZDUoYXNCaW5hcnksIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBhdHQuZGlnZXN0ID0gJ21kNS0nICsgcmVzdWx0O1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzQmxvYihhdHQsIGJsb2JUeXBlLCBjYWxsYmFjaykge1xuICBiaW5hcnlNZDUoYXR0LmRhdGEsIGZ1bmN0aW9uIChtZDUpIHtcbiAgICBhdHQuZGlnZXN0ID0gJ21kNS0nICsgbWQ1O1xuICAgIC8vIHNpemUgaXMgZm9yIGJsb2JzIChicm93c2VyKSwgbGVuZ3RoIGlzIGZvciBidWZmZXJzIChub2RlKVxuICAgIGF0dC5sZW5ndGggPSBhdHQuZGF0YS5zaXplIHx8IGF0dC5kYXRhLmxlbmd0aCB8fCAwO1xuICAgIGlmIChibG9iVHlwZSA9PT0gJ2JpbmFyeScpIHtcbiAgICAgIGJsb2JUb0JpbmFyeVN0cmluZyhhdHQuZGF0YSwgZnVuY3Rpb24gKGJpblN0cmluZykge1xuICAgICAgICBhdHQuZGF0YSA9IGJpblN0cmluZztcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYmxvYlR5cGUgPT09ICdiYXNlNjQnKSB7XG4gICAgICBibG9iVG9CYXNlNjQoYXR0LmRhdGEsIGZ1bmN0aW9uIChiNjQpIHtcbiAgICAgICAgYXR0LmRhdGEgPSBiNjQ7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzQXR0YWNobWVudChhdHQsIGJsb2JUeXBlLCBjYWxsYmFjaykge1xuICBpZiAoYXR0LnN0dWIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICBpZiAodHlwZW9mIGF0dC5kYXRhID09PSAnc3RyaW5nJykgeyAvLyBpbnB1dCBpcyBhIGJhc2U2NCBzdHJpbmdcbiAgICBwcmVwcm9jZXNzU3RyaW5nKGF0dCwgYmxvYlR5cGUsIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHsgLy8gaW5wdXQgaXMgYSBibG9iXG4gICAgcHJlcHJvY2Vzc0Jsb2IoYXR0LCBibG9iVHlwZSwgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NBdHRhY2htZW50cyhkb2NJbmZvcywgYmxvYlR5cGUsIGNhbGxiYWNrKSB7XG5cbiAgaWYgKCFkb2NJbmZvcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuXG4gIHZhciBkb2N2ID0gMDtcbiAgdmFyIG92ZXJhbGxFcnI7XG5cbiAgZG9jSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jSW5mbykge1xuICAgIHZhciBhdHRhY2htZW50cyA9IGRvY0luZm8uZGF0YSAmJiBkb2NJbmZvLmRhdGEuX2F0dGFjaG1lbnRzID9cbiAgICAgIE9iamVjdC5rZXlzKGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMpIDogW107XG4gICAgdmFyIHJlY3YgPSAwO1xuXG4gICAgaWYgKCFhdHRhY2htZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc2VkQXR0YWNobWVudChlcnIpIHtcbiAgICAgIG92ZXJhbGxFcnIgPSBlcnI7XG4gICAgICByZWN2Kys7XG4gICAgICBpZiAocmVjdiA9PT0gYXR0YWNobWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZG9jSW5mby5kYXRhLl9hdHRhY2htZW50cykge1xuICAgICAgaWYgKGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcmVwcm9jZXNzQXR0YWNobWVudChkb2NJbmZvLmRhdGEuX2F0dGFjaG1lbnRzW2tleV0sXG4gICAgICAgICAgYmxvYlR5cGUsIHByb2Nlc3NlZEF0dGFjaG1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBkb2N2Kys7XG4gICAgaWYgKGRvY0luZm9zLmxlbmd0aCA9PT0gZG9jdikge1xuICAgICAgaWYgKG92ZXJhbGxFcnIpIHtcbiAgICAgICAgY2FsbGJhY2sob3ZlcmFsbEVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEb2MocmV2TGltaXQsIHByZXYsIGRvY0luZm8sIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgaSwgY2IsIHdyaXRlRG9jLCBuZXdFZGl0cykge1xuXG4gIGlmIChyZXZFeGlzdHMocHJldi5yZXZfdHJlZSwgZG9jSW5mby5tZXRhZGF0YS5yZXYpICYmICFuZXdFZGl0cykge1xuICAgIHJlc3VsdHNbaV0gPSBkb2NJbmZvO1xuICAgIHJldHVybiBjYigpO1xuICB9XG5cbiAgLy8gc29tZXRpbWVzIHRoaXMgaXMgcHJlLWNhbGN1bGF0ZWQuIGhpc3RvcmljYWxseSBub3QgYWx3YXlzXG4gIHZhciBwcmV2aW91c1dpbm5pbmdSZXYgPSBwcmV2Lndpbm5pbmdSZXYgfHwgd2lubmluZ1JldihwcmV2KTtcbiAgdmFyIHByZXZpb3VzbHlEZWxldGVkID0gJ2RlbGV0ZWQnIGluIHByZXYgPyBwcmV2LmRlbGV0ZWQgOlxuICAgIGlzRGVsZXRlZChwcmV2LCBwcmV2aW91c1dpbm5pbmdSZXYpO1xuICB2YXIgZGVsZXRlZCA9ICdkZWxldGVkJyBpbiBkb2NJbmZvLm1ldGFkYXRhID8gZG9jSW5mby5tZXRhZGF0YS5kZWxldGVkIDpcbiAgICBpc0RlbGV0ZWQoZG9jSW5mby5tZXRhZGF0YSk7XG4gIHZhciBpc1Jvb3QgPSAvXjEtLy50ZXN0KGRvY0luZm8ubWV0YWRhdGEucmV2KTtcblxuICBpZiAocHJldmlvdXNseURlbGV0ZWQgJiYgIWRlbGV0ZWQgJiYgbmV3RWRpdHMgJiYgaXNSb290KSB7XG4gICAgdmFyIG5ld0RvYyA9IGRvY0luZm8uZGF0YTtcbiAgICBuZXdEb2MuX3JldiA9IHByZXZpb3VzV2lubmluZ1JldjtcbiAgICBuZXdEb2MuX2lkID0gZG9jSW5mby5tZXRhZGF0YS5pZDtcbiAgICBkb2NJbmZvID0gcGFyc2VEb2MobmV3RG9jLCBuZXdFZGl0cyk7XG4gIH1cblxuICB2YXIgbWVyZ2VkID0gbWVyZ2UocHJldi5yZXZfdHJlZSwgZG9jSW5mby5tZXRhZGF0YS5yZXZfdHJlZVswXSwgcmV2TGltaXQpO1xuXG4gIHZhciBpbkNvbmZsaWN0ID0gbmV3RWRpdHMgJiYgKChcbiAgICAocHJldmlvdXNseURlbGV0ZWQgJiYgZGVsZXRlZCAmJiBtZXJnZWQuY29uZmxpY3RzICE9PSAnbmV3X2xlYWYnKSB8fFxuICAgICghcHJldmlvdXNseURlbGV0ZWQgJiYgbWVyZ2VkLmNvbmZsaWN0cyAhPT0gJ25ld19sZWFmJykgfHxcbiAgICAocHJldmlvdXNseURlbGV0ZWQgJiYgIWRlbGV0ZWQgJiYgbWVyZ2VkLmNvbmZsaWN0cyA9PT0gJ25ld19icmFuY2gnKSkpO1xuXG4gIGlmIChpbkNvbmZsaWN0KSB7XG4gICAgdmFyIGVyciA9IGNyZWF0ZUVycm9yKFJFVl9DT05GTElDVCk7XG4gICAgcmVzdWx0c1tpXSA9IGVycjtcbiAgICByZXR1cm4gY2IoKTtcbiAgfVxuXG4gIHZhciBuZXdSZXYgPSBkb2NJbmZvLm1ldGFkYXRhLnJldjtcbiAgZG9jSW5mby5tZXRhZGF0YS5yZXZfdHJlZSA9IG1lcmdlZC50cmVlO1xuICBkb2NJbmZvLnN0ZW1tZWRSZXZzID0gbWVyZ2VkLnN0ZW1tZWRSZXZzIHx8IFtdO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJldi5yZXZfbWFwKSB7XG4gICAgZG9jSW5mby5tZXRhZGF0YS5yZXZfbWFwID0gcHJldi5yZXZfbWFwOyAvLyB1c2VkIG9ubHkgYnkgbGV2ZWxkYlxuICB9XG5cbiAgLy8gcmVjYWxjdWxhdGVcbiAgdmFyIHdpbm5pbmdSZXYkJDEgPSB3aW5uaW5nUmV2KGRvY0luZm8ubWV0YWRhdGEpO1xuICB2YXIgd2lubmluZ1JldklzRGVsZXRlZCA9IGlzRGVsZXRlZChkb2NJbmZvLm1ldGFkYXRhLCB3aW5uaW5nUmV2JCQxKTtcblxuICAvLyBjYWxjdWxhdGUgdGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMgdGhhdCB3ZXJlIGFkZGVkL3JlbW92ZWQsXG4gIC8vIGZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIHRvdGFsX3Jvd3MvZG9jX2NvdW50XG4gIHZhciBkZWx0YSA9IChwcmV2aW91c2x5RGVsZXRlZCA9PT0gd2lubmluZ1JldklzRGVsZXRlZCkgPyAwIDpcbiAgICBwcmV2aW91c2x5RGVsZXRlZCA8IHdpbm5pbmdSZXZJc0RlbGV0ZWQgPyAtMSA6IDE7XG5cbiAgdmFyIG5ld1JldklzRGVsZXRlZDtcbiAgaWYgKG5ld1JldiA9PT0gd2lubmluZ1JldiQkMSkge1xuICAgIC8vIGlmIHRoZSBuZXcgcmV2IGlzIHRoZSBzYW1lIGFzIHRoZSB3aW5uaW5nIHJldiwgd2UgY2FuIHJldXNlIHRoYXQgdmFsdWVcbiAgICBuZXdSZXZJc0RlbGV0ZWQgPSB3aW5uaW5nUmV2SXNEZWxldGVkO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZXkncmUgbm90IHRoZSBzYW1lLCB0aGVuIHdlIG5lZWQgdG8gcmVjYWxjdWxhdGVcbiAgICBuZXdSZXZJc0RlbGV0ZWQgPSBpc0RlbGV0ZWQoZG9jSW5mby5tZXRhZGF0YSwgbmV3UmV2KTtcbiAgfVxuXG4gIHdyaXRlRG9jKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsIG5ld1JldklzRGVsZXRlZCxcbiAgICB0cnVlLCBkZWx0YSwgaSwgY2IpO1xufVxuXG5mdW5jdGlvbiByb290SXNNaXNzaW5nKGRvY0luZm8pIHtcbiAgcmV0dXJuIGRvY0luZm8ubWV0YWRhdGEucmV2X3RyZWVbMF0uaWRzWzFdLnN0YXR1cyA9PT0gJ21pc3NpbmcnO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRG9jcyhyZXZMaW1pdCwgZG9jSW5mb3MsIGFwaSwgZmV0Y2hlZERvY3MsIHR4LCByZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgd3JpdGVEb2MsIG9wdHMsIG92ZXJhbGxDYWxsYmFjaykge1xuXG4gIC8vIERlZmF1bHQgdG8gMTAwMCBsb2NhbGx5XG4gIHJldkxpbWl0ID0gcmV2TGltaXQgfHwgMTAwMDtcblxuICBmdW5jdGlvbiBpbnNlcnREb2MoZG9jSW5mbywgcmVzdWx0c0lkeCwgY2FsbGJhY2spIHtcbiAgICAvLyBDYW50IGluc2VydCBuZXcgZGVsZXRlZCBkb2N1bWVudHNcbiAgICB2YXIgd2lubmluZ1JldiQkMSA9IHdpbm5pbmdSZXYoZG9jSW5mby5tZXRhZGF0YSk7XG4gICAgdmFyIGRlbGV0ZWQgPSBpc0RlbGV0ZWQoZG9jSW5mby5tZXRhZGF0YSwgd2lubmluZ1JldiQkMSk7XG4gICAgaWYgKCd3YXNfZGVsZXRlJyBpbiBvcHRzICYmIGRlbGV0ZWQpIHtcbiAgICAgIHJlc3VsdHNbcmVzdWx0c0lkeF0gPSBjcmVhdGVFcnJvcihNSVNTSU5HX0RPQywgJ2RlbGV0ZWQnKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIDQ3MTIgLSBkZXRlY3Qgd2hldGhlciBhIG5ldyBkb2N1bWVudCB3YXMgaW5zZXJ0ZWQgd2l0aCBhIF9yZXZcbiAgICB2YXIgaW5Db25mbGljdCA9IG5ld0VkaXRzICYmIHJvb3RJc01pc3NpbmcoZG9jSW5mbyk7XG5cbiAgICBpZiAoaW5Db25mbGljdCkge1xuICAgICAgdmFyIGVyciA9IGNyZWF0ZUVycm9yKFJFVl9DT05GTElDVCk7XG4gICAgICByZXN1bHRzW3Jlc3VsdHNJZHhdID0gZXJyO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhID0gZGVsZXRlZCA/IDAgOiAxO1xuXG4gICAgd3JpdGVEb2MoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgZGVsZXRlZCwgZGVsZXRlZCwgZmFsc2UsXG4gICAgICBkZWx0YSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIG5ld0VkaXRzID0gb3B0cy5uZXdfZWRpdHM7XG4gIHZhciBpZHNUb0RvY3MgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcblxuICB2YXIgZG9jc0RvbmUgPSAwO1xuICB2YXIgZG9jc1RvRG8gPSBkb2NJbmZvcy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gY2hlY2tBbGxEb2NzRG9uZSgpIHtcbiAgICBpZiAoKytkb2NzRG9uZSA9PT0gZG9jc1RvRG8gJiYgb3ZlcmFsbENhbGxiYWNrKSB7XG4gICAgICBvdmVyYWxsQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBkb2NJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50RG9jLCByZXN1bHRzSWR4KSB7XG5cbiAgICBpZiAoY3VycmVudERvYy5faWQgJiYgaXNMb2NhbElkKGN1cnJlbnREb2MuX2lkKSkge1xuICAgICAgdmFyIGZ1biA9IGN1cnJlbnREb2MuX2RlbGV0ZWQgPyAnX3JlbW92ZUxvY2FsJyA6ICdfcHV0TG9jYWwnO1xuICAgICAgYXBpW2Z1bl0oY3VycmVudERvYywge2N0eDogdHh9LCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgcmVzdWx0c1tyZXN1bHRzSWR4XSA9IGVyciB8fCByZXM7XG4gICAgICAgIGNoZWNrQWxsRG9jc0RvbmUoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpZCA9IGN1cnJlbnREb2MubWV0YWRhdGEuaWQ7XG4gICAgaWYgKGlkc1RvRG9jcy5oYXMoaWQpKSB7XG4gICAgICBkb2NzVG9Eby0tOyAvLyBkdXBsaWNhdGVcbiAgICAgIGlkc1RvRG9jcy5nZXQoaWQpLnB1c2goW2N1cnJlbnREb2MsIHJlc3VsdHNJZHhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzVG9Eb2NzLnNldChpZCwgW1tjdXJyZW50RG9jLCByZXN1bHRzSWR4XV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gaW4gdGhlIGNhc2Ugb2YgbmV3X2VkaXRzLCB0aGUgdXNlciBjYW4gcHJvdmlkZSBtdWx0aXBsZSBkb2NzXG4gIC8vIHdpdGggdGhlIHNhbWUgaWQuIHRoZXNlIG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHNlcXVlbnRpYWxseVxuICBpZHNUb0RvY3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jcywgaWQpIHtcbiAgICB2YXIgbnVtRG9uZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBkb2NXcml0dGVuKCkge1xuICAgICAgaWYgKCsrbnVtRG9uZSA8IGRvY3MubGVuZ3RoKSB7XG4gICAgICAgIG5leHREb2MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQWxsRG9jc0RvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbmV4dERvYygpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGRvY3NbbnVtRG9uZV07XG4gICAgICB2YXIgY3VycmVudERvYyA9IHZhbHVlWzBdO1xuICAgICAgdmFyIHJlc3VsdHNJZHggPSB2YWx1ZVsxXTtcblxuICAgICAgaWYgKGZldGNoZWREb2NzLmhhcyhpZCkpIHtcbiAgICAgICAgdXBkYXRlRG9jKHJldkxpbWl0LCBmZXRjaGVkRG9jcy5nZXQoaWQpLCBjdXJyZW50RG9jLCByZXN1bHRzLFxuICAgICAgICAgIHJlc3VsdHNJZHgsIGRvY1dyaXR0ZW4sIHdyaXRlRG9jLCBuZXdFZGl0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFbnN1cmUgc3RlbW1pbmcgYXBwbGllcyB0byBuZXcgd3JpdGVzIGFzIHdlbGxcbiAgICAgICAgdmFyIG1lcmdlZCA9IG1lcmdlKFtdLCBjdXJyZW50RG9jLm1ldGFkYXRhLnJldl90cmVlWzBdLCByZXZMaW1pdCk7XG4gICAgICAgIGN1cnJlbnREb2MubWV0YWRhdGEucmV2X3RyZWUgPSBtZXJnZWQudHJlZTtcbiAgICAgICAgY3VycmVudERvYy5zdGVtbWVkUmV2cyA9IG1lcmdlZC5zdGVtbWVkUmV2cyB8fCBbXTtcbiAgICAgICAgaW5zZXJ0RG9jKGN1cnJlbnREb2MsIHJlc3VsdHNJZHgsIGRvY1dyaXR0ZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0RG9jKCk7XG4gIH0pO1xufVxuXG4vLyBJbmRleGVkREIgcmVxdWlyZXMgYSB2ZXJzaW9uZWQgZGF0YWJhc2Ugc3RydWN0dXJlLCBzbyB3ZSB1c2UgdGhlXG4vLyB2ZXJzaW9uIGhlcmUgdG8gbWFuYWdlIG1pZ3JhdGlvbnMuXG52YXIgQURBUFRFUl9WRVJTSU9OID0gNTtcblxuLy8gVGhlIG9iamVjdCBzdG9yZXMgY3JlYXRlZCBmb3IgZWFjaCBkYXRhYmFzZVxuLy8gRE9DX1NUT1JFIHN0b3JlcyB0aGUgZG9jdW1lbnQgbWV0YSBkYXRhLCBpdHMgcmV2aXNpb24gaGlzdG9yeSBhbmQgc3RhdGVcbi8vIEtleWVkIGJ5IGRvY3VtZW50IGlkXG52YXIgRE9DX1NUT1JFID0gJ2RvY3VtZW50LXN0b3JlJztcbi8vIEJZX1NFUV9TVE9SRSBzdG9yZXMgYSBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgYSBkb2N1bWVudCwga2V5ZWQgYnkgaXRzXG4vLyBzZXF1ZW5jZSBpZFxudmFyIEJZX1NFUV9TVE9SRSA9ICdieS1zZXF1ZW5jZSc7XG4vLyBXaGVyZSB3ZSBzdG9yZSBhdHRhY2htZW50c1xudmFyIEFUVEFDSF9TVE9SRSA9ICdhdHRhY2gtc3RvcmUnO1xuLy8gV2hlcmUgd2Ugc3RvcmUgbWFueS10by1tYW55IHJlbGF0aW9uc1xuLy8gYmV0d2VlbiBhdHRhY2htZW50IGRpZ2VzdHMgYW5kIHNlcXNcbnZhciBBVFRBQ0hfQU5EX1NFUV9TVE9SRSA9ICdhdHRhY2gtc2VxLXN0b3JlJztcblxuLy8gV2hlcmUgd2Ugc3RvcmUgZGF0YWJhc2Utd2lkZSBtZXRhIGRhdGEgaW4gYSBzaW5nbGUgcmVjb3JkXG4vLyBrZXllZCBieSBpZDogTUVUQV9TVE9SRVxudmFyIE1FVEFfU1RPUkUgPSAnbWV0YS1zdG9yZSc7XG4vLyBXaGVyZSB3ZSBzdG9yZSBsb2NhbCBkb2N1bWVudHNcbnZhciBMT0NBTF9TVE9SRSA9ICdsb2NhbC1zdG9yZSc7XG4vLyBXaGVyZSB3ZSBkZXRlY3QgYmxvYiBzdXBwb3J0XG52YXIgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSA9ICdkZXRlY3QtYmxvYi1zdXBwb3J0JztcblxuZnVuY3Rpb24gc2FmZUpzb25QYXJzZShzdHIpIHtcbiAgLy8gVGhpcyB0cnkvY2F0Y2ggZ3VhcmRzIGFnYWluc3Qgc3RhY2sgb3ZlcmZsb3cgZXJyb3JzLlxuICAvLyBKU09OLnBhcnNlKCkgaXMgZmFzdGVyIHRoYW4gdnV2dXplbGEucGFyc2UoKSBidXQgdnV2dXplbGFcbiAgLy8gY2Fubm90IG92ZXJmbG93LlxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB2dXZ1emVsYS5wYXJzZShzdHIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVKc29uU3RyaW5naWZ5KGpzb24pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB2dXZ1emVsYS5zdHJpbmdpZnkoanNvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaWRiRXJyb3IoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICd1bmtub3duX2Vycm9yJztcbiAgICBpZiAoZXZ0LnRhcmdldCAmJiBldnQudGFyZ2V0LmVycm9yKSB7XG4gICAgICBtZXNzYWdlID0gZXZ0LnRhcmdldC5lcnJvci5uYW1lIHx8IGV2dC50YXJnZXQuZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgY2FsbGJhY2soY3JlYXRlRXJyb3IoSURCX0VSUk9SLCBtZXNzYWdlLCBldnQudHlwZSkpO1xuICB9O1xufVxuXG4vLyBVbmZvcnR1bmF0ZWx5LCB0aGUgbWV0YWRhdGEgaGFzIHRvIGJlIHN0cmluZ2lmaWVkXG4vLyB3aGVuIGl0IGlzIHB1dCBpbnRvIHRoZSBkYXRhYmFzZSwgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIEluZGV4ZWREQiBjYW4gdGhyb3cgZXJyb3JzIGZvciBkZWVwbHktbmVzdGVkIG9iamVjdHMuXG4vLyBPcmlnaW5hbGx5IHdlIGp1c3QgdXNlZCBKU09OLnBhcnNlL0pTT04uc3RyaW5naWZ5OyBub3dcbi8vIHdlIHVzZSB0aGlzIGN1c3RvbSB2dXZ1emVsYSBsaWJyYXJ5IHRoYXQgYXZvaWRzIHJlY3Vyc2lvbi5cbi8vIElmIHdlIGNvdWxkIGRvIGl0IGFsbCBvdmVyIGFnYWluLCB3ZSdkIHByb2JhYmx5IHVzZSBhXG4vLyBmb3JtYXQgZm9yIHRoZSByZXZpc2lvbiB0cmVlcyBvdGhlciB0aGFuIEpTT04uXG5mdW5jdGlvbiBlbmNvZGVNZXRhZGF0YShtZXRhZGF0YSwgd2lubmluZ1JldiwgZGVsZXRlZCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHNhZmVKc29uU3RyaW5naWZ5KG1ldGFkYXRhKSxcbiAgICB3aW5uaW5nUmV2OiB3aW5uaW5nUmV2LFxuICAgIGRlbGV0ZWRPckxvY2FsOiBkZWxldGVkID8gJzEnIDogJzAnLFxuICAgIHNlcTogbWV0YWRhdGEuc2VxLCAvLyBoaWdoZXN0IHNlcSBmb3IgdGhpcyBkb2NcbiAgICBpZDogbWV0YWRhdGEuaWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlTWV0YWRhdGEoc3RvcmVkT2JqZWN0KSB7XG4gIGlmICghc3RvcmVkT2JqZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1ldGFkYXRhID0gc2FmZUpzb25QYXJzZShzdG9yZWRPYmplY3QuZGF0YSk7XG4gIG1ldGFkYXRhLndpbm5pbmdSZXYgPSBzdG9yZWRPYmplY3Qud2lubmluZ1JldjtcbiAgbWV0YWRhdGEuZGVsZXRlZCA9IHN0b3JlZE9iamVjdC5kZWxldGVkT3JMb2NhbCA9PT0gJzEnO1xuICBtZXRhZGF0YS5zZXEgPSBzdG9yZWRPYmplY3Quc2VxO1xuICByZXR1cm4gbWV0YWRhdGE7XG59XG5cbi8vIHJlYWQgdGhlIGRvYyBiYWNrIG91dCBmcm9tIHRoZSBkYXRhYmFzZS4gd2UgZG9uJ3Qgc3RvcmUgdGhlXG4vLyBfaWQgb3IgX3JldiBiZWNhdXNlIHdlIGFscmVhZHkgaGF2ZSBfZG9jX2lkX3Jldi5cbmZ1bmN0aW9uIGRlY29kZURvYyhkb2MpIHtcbiAgaWYgKCFkb2MpIHtcbiAgICByZXR1cm4gZG9jO1xuICB9XG4gIHZhciBpZHggPSBkb2MuX2RvY19pZF9yZXYubGFzdEluZGV4T2YoJzonKTtcbiAgZG9jLl9pZCA9IGRvYy5fZG9jX2lkX3Jldi5zdWJzdHJpbmcoMCwgaWR4IC0gMSk7XG4gIGRvYy5fcmV2ID0gZG9jLl9kb2NfaWRfcmV2LnN1YnN0cmluZyhpZHggKyAxKTtcbiAgZGVsZXRlIGRvYy5fZG9jX2lkX3JldjtcbiAgcmV0dXJuIGRvYztcbn1cblxuLy8gUmVhZCBhIGJsb2IgZnJvbSB0aGUgZGF0YWJhc2UsIGVuY29kaW5nIGFzIG5lY2Vzc2FyeVxuLy8gYW5kIHRyYW5zbGF0aW5nIGZyb20gYmFzZTY0IGlmIHRoZSBJREIgZG9lc24ndCBzdXBwb3J0XG4vLyBuYXRpdmUgQmxvYnNcbmZ1bmN0aW9uIHJlYWRCbG9iRGF0YShib2R5LCB0eXBlLCBhc0Jsb2IsIGNhbGxiYWNrKSB7XG4gIGlmIChhc0Jsb2IpIHtcbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIGNhbGxiYWNrKGNyZWF0ZUJsb2IoWycnXSwge3R5cGU6IHR5cGV9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSAhPT0gJ3N0cmluZycpIHsgLy8gd2UgaGF2ZSBibG9iIHN1cHBvcnRcbiAgICAgIGNhbGxiYWNrKGJvZHkpO1xuICAgIH0gZWxzZSB7IC8vIG5vIGJsb2Igc3VwcG9ydFxuICAgICAgY2FsbGJhY2soYjY0VG9CbHVmZmVyKGJvZHksIHR5cGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7IC8vIGFzIGJhc2U2NCBzdHJpbmdcbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIGNhbGxiYWNrKCcnKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ICE9PSAnc3RyaW5nJykgeyAvLyB3ZSBoYXZlIGJsb2Igc3VwcG9ydFxuICAgICAgcmVhZEFzQmluYXJ5U3RyaW5nKGJvZHksIGZ1bmN0aW9uIChiaW5hcnkpIHtcbiAgICAgICAgY2FsbGJhY2sodGhpc0J0b2EoYmluYXJ5KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgeyAvLyBubyBibG9iIHN1cHBvcnRcbiAgICAgIGNhbGxiYWNrKGJvZHkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmZXRjaEF0dGFjaG1lbnRzSWZOZWNlc3NhcnkoZG9jLCBvcHRzLCB0eG4sIGNiKSB7XG4gIHZhciBhdHRhY2htZW50cyA9IE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMgfHwge30pO1xuICBpZiAoIWF0dGFjaG1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYiAmJiBjYigpO1xuICB9XG4gIHZhciBudW1Eb25lID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RvbmUoKSB7XG4gICAgaWYgKCsrbnVtRG9uZSA9PT0gYXR0YWNobWVudHMubGVuZ3RoICYmIGNiKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoQXR0YWNobWVudChkb2MsIGF0dCkge1xuICAgIHZhciBhdHRPYmogPSBkb2MuX2F0dGFjaG1lbnRzW2F0dF07XG4gICAgdmFyIGRpZ2VzdCA9IGF0dE9iai5kaWdlc3Q7XG4gICAgdmFyIHJlcSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfU1RPUkUpLmdldChkaWdlc3QpO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgYXR0T2JqLmJvZHkgPSBlLnRhcmdldC5yZXN1bHQuYm9keTtcbiAgICAgIGNoZWNrRG9uZSgpO1xuICAgIH07XG4gIH1cblxuICBhdHRhY2htZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhdHQpIHtcbiAgICBpZiAob3B0cy5hdHRhY2htZW50cyAmJiBvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgZmV0Y2hBdHRhY2htZW50KGRvYywgYXR0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLl9hdHRhY2htZW50c1thdHRdLnN0dWIgPSB0cnVlO1xuICAgICAgY2hlY2tEb25lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gSURCLXNwZWNpZmljIHBvc3Rwcm9jZXNzaW5nIG5lY2Vzc2FyeSBiZWNhdXNlXG4vLyB3ZSBkb24ndCBrbm93IHdoZXRoZXIgd2Ugc3RvcmVkIGEgdHJ1ZSBCbG9iIG9yXG4vLyBhIGJhc2U2NC1lbmNvZGVkIHN0cmluZywgYW5kIGlmIGl0J3MgYSBCbG9iIGl0XG4vLyBuZWVkcyB0byBiZSByZWFkIG91dHNpZGUgb2YgdGhlIHRyYW5zYWN0aW9uIGNvbnRleHRcbmZ1bmN0aW9uIHBvc3RQcm9jZXNzQXR0YWNobWVudHMocmVzdWx0cywgYXNCbG9iKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgaWYgKHJvdy5kb2MgJiYgcm93LmRvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgIHZhciBhdHROYW1lcyA9IE9iamVjdC5rZXlzKHJvdy5kb2MuX2F0dGFjaG1lbnRzKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChhdHROYW1lcy5tYXAoZnVuY3Rpb24gKGF0dCkge1xuICAgICAgICB2YXIgYXR0T2JqID0gcm93LmRvYy5fYXR0YWNobWVudHNbYXR0XTtcbiAgICAgICAgaWYgKCEoJ2JvZHknIGluIGF0dE9iaikpIHsgLy8gYWxyZWFkeSBwcm9jZXNzZWRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJvZHkgPSBhdHRPYmouYm9keTtcbiAgICAgICAgdmFyIHR5cGUgPSBhdHRPYmouY29udGVudF90eXBlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZWFkQmxvYkRhdGEoYm9keSwgdHlwZSwgYXNCbG9iLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgcm93LmRvYy5fYXR0YWNobWVudHNbYXR0XSA9ICRpbmplY3RfT2JqZWN0X2Fzc2lnbihcbiAgICAgICAgICAgICAgcGljayhhdHRPYmosIFsnZGlnZXN0JywgJ2NvbnRlbnRfdHlwZSddKSxcbiAgICAgICAgICAgICAge2RhdGE6IGRhdGF9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gY29tcGFjdFJldnMocmV2cywgZG9jSWQsIHR4bikge1xuXG4gIHZhciBwb3NzaWJseU9ycGhhbmVkRGlnZXN0cyA9IFtdO1xuICB2YXIgc2VxU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcbiAgdmFyIGF0dFN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEFUVEFDSF9TVE9SRSk7XG4gIHZhciBhdHRBbmRTZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfQU5EX1NFUV9TVE9SRSk7XG4gIHZhciBjb3VudCA9IHJldnMubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRG9uZSgpIHtcbiAgICBjb3VudC0tO1xuICAgIGlmICghY291bnQpIHsgLy8gZG9uZSBwcm9jZXNzaW5nIGFsbCByZXZzXG4gICAgICBkZWxldGVPcnBoYW5lZEF0dGFjaG1lbnRzKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlT3JwaGFuZWRBdHRhY2htZW50cygpIHtcbiAgICBpZiAoIXBvc3NpYmx5T3JwaGFuZWREaWdlc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3NzaWJseU9ycGhhbmVkRGlnZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChkaWdlc3QpIHtcbiAgICAgIHZhciBjb3VudFJlcSA9IGF0dEFuZFNlcVN0b3JlLmluZGV4KCdkaWdlc3RTZXEnKS5jb3VudChcbiAgICAgICAgSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICAgICAgZGlnZXN0ICsgJzo6JywgZGlnZXN0ICsgJzo6XFx1ZmZmZicsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgY291bnRSZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgLy8gb3JwaGFuZWRcbiAgICAgICAgICBhdHRTdG9yZS5kZWxldGUoZGlnZXN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldnMuZm9yRWFjaChmdW5jdGlvbiAocmV2JCQxKSB7XG4gICAgdmFyIGluZGV4ID0gc2VxU3RvcmUuaW5kZXgoJ19kb2NfaWRfcmV2Jyk7XG4gICAgdmFyIGtleSA9IGRvY0lkICsgXCI6OlwiICsgcmV2JCQxO1xuICAgIGluZGV4LmdldEtleShrZXkpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VxID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKHR5cGVvZiBzZXEgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBjaGVja0RvbmUoKTtcbiAgICAgIH1cbiAgICAgIHNlcVN0b3JlLmRlbGV0ZShzZXEpO1xuXG4gICAgICB2YXIgY3Vyc29yID0gYXR0QW5kU2VxU3RvcmUuaW5kZXgoJ3NlcScpXG4gICAgICAgIC5vcGVuQ3Vyc29yKElEQktleVJhbmdlLm9ubHkoc2VxKSk7XG5cbiAgICAgIGN1cnNvci5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICB2YXIgZGlnZXN0ID0gY3Vyc29yLnZhbHVlLmRpZ2VzdFNlcS5zcGxpdCgnOjonKVswXTtcbiAgICAgICAgICBwb3NzaWJseU9ycGhhbmVkRGlnZXN0cy5wdXNoKGRpZ2VzdCk7XG4gICAgICAgICAgYXR0QW5kU2VxU3RvcmUuZGVsZXRlKGN1cnNvci5wcmltYXJ5S2V5KTtcbiAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gZG9uZVxuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBzdG9yZXMsIG1vZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHhuOiBpZGIudHJhbnNhY3Rpb24oc3RvcmVzLCBtb2RlKVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyXG4gICAgfTtcbiAgfVxufVxuXG52YXIgY2hhbmdlc0hhbmRsZXIgPSBuZXcgQ2hhbmdlcygpO1xuXG5mdW5jdGlvbiBpZGJCdWxrRG9jcyhkYk9wdHMsIHJlcSwgb3B0cywgYXBpLCBpZGIsIGNhbGxiYWNrKSB7XG4gIHZhciBkb2NJbmZvcyA9IHJlcS5kb2NzO1xuICB2YXIgdHhuO1xuICB2YXIgZG9jU3RvcmU7XG4gIHZhciBieVNlcVN0b3JlO1xuICB2YXIgYXR0YWNoU3RvcmU7XG4gIHZhciBhdHRhY2hBbmRTZXFTdG9yZTtcbiAgdmFyIG1ldGFTdG9yZTtcbiAgdmFyIGRvY0luZm9FcnJvcjtcbiAgdmFyIG1ldGFEb2M7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRvY0luZm9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGRvYyA9IGRvY0luZm9zW2ldO1xuICAgIGlmIChkb2MuX2lkICYmIGlzTG9jYWxJZChkb2MuX2lkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGRvYyA9IGRvY0luZm9zW2ldID0gcGFyc2VEb2MoZG9jLCBvcHRzLm5ld19lZGl0cywgZGJPcHRzKTtcbiAgICBpZiAoZG9jLmVycm9yICYmICFkb2NJbmZvRXJyb3IpIHtcbiAgICAgIGRvY0luZm9FcnJvciA9IGRvYztcbiAgICB9XG4gIH1cblxuICBpZiAoZG9jSW5mb0Vycm9yKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGRvY0luZm9FcnJvcik7XG4gIH1cblxuICB2YXIgYWxsRG9jc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICB2YXIgZG9jQ291bnREZWx0YSA9IDA7XG4gIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGRvY0luZm9zLmxlbmd0aCk7XG4gIHZhciBmZXRjaGVkRG9jcyA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuICB2YXIgcHJlY29uZGl0aW9uRXJyb3JlZCA9IGZhbHNlO1xuICB2YXIgYmxvYlR5cGUgPSBhcGkuX21ldGEuYmxvYlN1cHBvcnQgPyAnYmxvYicgOiAnYmFzZTY0JztcblxuICBwcmVwcm9jZXNzQXR0YWNobWVudHMoZG9jSW5mb3MsIGJsb2JUeXBlLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIHN0YXJ0VHJhbnNhY3Rpb24oKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbigpIHtcblxuICAgIHZhciBzdG9yZXMgPSBbXG4gICAgICBET0NfU1RPUkUsIEJZX1NFUV9TVE9SRSxcbiAgICAgIEFUVEFDSF9TVE9SRSxcbiAgICAgIExPQ0FMX1NUT1JFLCBBVFRBQ0hfQU5EX1NFUV9TVE9SRSxcbiAgICAgIE1FVEFfU1RPUkVcbiAgICBdO1xuICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBzdG9yZXMsICdyZWFkd3JpdGUnKTtcbiAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodHhuUmVzdWx0LmVycm9yKTtcbiAgICB9XG4gICAgdHhuID0gdHhuUmVzdWx0LnR4bjtcbiAgICB0eG4ub25hYm9ydCA9IGlkYkVycm9yKGNhbGxiYWNrKTtcbiAgICB0eG4ub250aW1lb3V0ID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICAgIHR4bi5vbmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcbiAgICBieVNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG4gICAgYXR0YWNoU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQVRUQUNIX1NUT1JFKTtcbiAgICBhdHRhY2hBbmRTZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfQU5EX1NFUV9TVE9SRSk7XG4gICAgbWV0YVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKE1FVEFfU1RPUkUpO1xuXG4gICAgbWV0YVN0b3JlLmdldChNRVRBX1NUT1JFKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbWV0YURvYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHVwZGF0ZURvY0NvdW50SWZSZWFkeSgpO1xuICAgIH07XG5cbiAgICB2ZXJpZnlBdHRhY2htZW50cyhmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByZWNvbmRpdGlvbkVycm9yZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cbiAgICAgIGZldGNoRXhpc3RpbmdEb2NzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkFsbERvY3NQcm9jZXNzZWQoKSB7XG4gICAgYWxsRG9jc1Byb2Nlc3NlZCA9IHRydWU7XG4gICAgdXBkYXRlRG9jQ291bnRJZlJlYWR5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpZGJQcm9jZXNzRG9jcygpIHtcbiAgICBwcm9jZXNzRG9jcyhkYk9wdHMucmV2c19saW1pdCwgZG9jSW5mb3MsIGFwaSwgZmV0Y2hlZERvY3MsXG4gICAgICAgICAgICAgICAgdHhuLCByZXN1bHRzLCB3cml0ZURvYywgb3B0cywgb25BbGxEb2NzUHJvY2Vzc2VkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURvY0NvdW50SWZSZWFkeSgpIHtcbiAgICBpZiAoIW1ldGFEb2MgfHwgIWFsbERvY3NQcm9jZXNzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY2FjaGluZyB0aGUgZG9jQ291bnQgc2F2ZXMgYSBsb3Qgb2YgdGltZSBpbiBhbGxEb2NzKCkgYW5kXG4gICAgLy8gaW5mbygpLCB3aGljaCBpcyB3aHkgd2UgZ28gdG8gYWxsIHRoZSB0cm91YmxlIG9mIGRvaW5nIHRoaXNcbiAgICBtZXRhRG9jLmRvY0NvdW50ICs9IGRvY0NvdW50RGVsdGE7XG4gICAgbWV0YVN0b3JlLnB1dChtZXRhRG9jKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoRXhpc3RpbmdEb2NzKCkge1xuXG4gICAgaWYgKCFkb2NJbmZvcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbnVtRmV0Y2hlZCA9IDA7XG5cbiAgICBmdW5jdGlvbiBjaGVja0RvbmUoKSB7XG4gICAgICBpZiAoKytudW1GZXRjaGVkID09PSBkb2NJbmZvcy5sZW5ndGgpIHtcbiAgICAgICAgaWRiUHJvY2Vzc0RvY3MoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkTWV0YWRhdGEoZXZlbnQpIHtcbiAgICAgIHZhciBtZXRhZGF0YSA9IGRlY29kZU1ldGFkYXRhKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuXG4gICAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgZmV0Y2hlZERvY3Muc2V0KG1ldGFkYXRhLmlkLCBtZXRhZGF0YSk7XG4gICAgICB9XG4gICAgICBjaGVja0RvbmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZG9jSW5mb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBkb2NJbmZvID0gZG9jSW5mb3NbaV07XG4gICAgICBpZiAoZG9jSW5mby5faWQgJiYgaXNMb2NhbElkKGRvY0luZm8uX2lkKSkge1xuICAgICAgICBjaGVja0RvbmUoKTsgLy8gc2tpcCBsb2NhbCBkb2NzXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIHJlcSA9IGRvY1N0b3JlLmdldChkb2NJbmZvLm1ldGFkYXRhLmlkKTtcbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSByZWFkTWV0YWRhdGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgaWYgKHByZWNvbmRpdGlvbkVycm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaGFuZ2VzSGFuZGxlci5ub3RpZnkoYXBpLl9tZXRhLm5hbWUpO1xuICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5QXR0YWNobWVudChkaWdlc3QsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgcmVxID0gYXR0YWNoU3RvcmUuZ2V0KGRpZ2VzdCk7XG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0LnJlc3VsdCkge1xuICAgICAgICB2YXIgZXJyID0gY3JlYXRlRXJyb3IoTUlTU0lOR19TVFVCLFxuICAgICAgICAgICd1bmtub3duIHN0dWIgYXR0YWNobWVudCB3aXRoIGRpZ2VzdCAnICtcbiAgICAgICAgICBkaWdlc3QpO1xuICAgICAgICBlcnIuc3RhdHVzID0gNDEyO1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5QXR0YWNobWVudHMoZmluaXNoKSB7XG5cblxuICAgIHZhciBkaWdlc3RzID0gW107XG4gICAgZG9jSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jSW5mbykge1xuICAgICAgaWYgKGRvY0luZm8uZGF0YSAmJiBkb2NJbmZvLmRhdGEuX2F0dGFjaG1lbnRzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICAgICAgdmFyIGF0dCA9IGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHNbZmlsZW5hbWVdO1xuICAgICAgICAgIGlmIChhdHQuc3R1Yikge1xuICAgICAgICAgICAgZGlnZXN0cy5wdXNoKGF0dC5kaWdlc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFkaWdlc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgIH1cbiAgICB2YXIgbnVtRG9uZSA9IDA7XG4gICAgdmFyIGVycjtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRG9uZSgpIHtcbiAgICAgIGlmICgrK251bURvbmUgPT09IGRpZ2VzdHMubGVuZ3RoKSB7XG4gICAgICAgIGZpbmlzaChlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBkaWdlc3RzLmZvckVhY2goZnVuY3Rpb24gKGRpZ2VzdCkge1xuICAgICAgdmVyaWZ5QXR0YWNobWVudChkaWdlc3QsIGZ1bmN0aW9uIChhdHRFcnIpIHtcbiAgICAgICAgaWYgKGF0dEVyciAmJiAhZXJyKSB7XG4gICAgICAgICAgZXJyID0gYXR0RXJyO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZURvYyhkb2NJbmZvLCB3aW5uaW5nUmV2JCQxLCB3aW5uaW5nUmV2SXNEZWxldGVkLCBuZXdSZXZJc0RlbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlLCBkZWx0YSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spIHtcblxuICAgIGRvY0luZm8ubWV0YWRhdGEud2lubmluZ1JldiA9IHdpbm5pbmdSZXYkJDE7XG4gICAgZG9jSW5mby5tZXRhZGF0YS5kZWxldGVkID0gd2lubmluZ1JldklzRGVsZXRlZDtcblxuICAgIHZhciBkb2MgPSBkb2NJbmZvLmRhdGE7XG4gICAgZG9jLl9pZCA9IGRvY0luZm8ubWV0YWRhdGEuaWQ7XG4gICAgZG9jLl9yZXYgPSBkb2NJbmZvLm1ldGFkYXRhLnJldjtcblxuICAgIGlmIChuZXdSZXZJc0RlbGV0ZWQpIHtcbiAgICAgIGRvYy5fZGVsZXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGhhc0F0dGFjaG1lbnRzID0gZG9jLl9hdHRhY2htZW50cyAmJlxuICAgICAgT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cykubGVuZ3RoO1xuICAgIGlmIChoYXNBdHRhY2htZW50cykge1xuICAgICAgcmV0dXJuIHdyaXRlQXR0YWNobWVudHMoZG9jSW5mbywgd2lubmluZ1JldiQkMSwgd2lubmluZ1JldklzRGVsZXRlZCxcbiAgICAgICAgaXNVcGRhdGUsIHJlc3VsdHNJZHgsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBkb2NDb3VudERlbHRhICs9IGRlbHRhO1xuICAgIHVwZGF0ZURvY0NvdW50SWZSZWFkeSgpO1xuXG4gICAgZmluaXNoRG9jKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsXG4gICAgICBpc1VwZGF0ZSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoRG9jKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZSwgcmVzdWx0c0lkeCwgY2FsbGJhY2spIHtcblxuICAgIHZhciBkb2MgPSBkb2NJbmZvLmRhdGE7XG4gICAgdmFyIG1ldGFkYXRhID0gZG9jSW5mby5tZXRhZGF0YTtcblxuICAgIGRvYy5fZG9jX2lkX3JldiA9IG1ldGFkYXRhLmlkICsgJzo6JyArIG1ldGFkYXRhLnJldjtcbiAgICBkZWxldGUgZG9jLl9pZDtcbiAgICBkZWxldGUgZG9jLl9yZXY7XG5cbiAgICBmdW5jdGlvbiBhZnRlclB1dERvYyhlKSB7XG4gICAgICB2YXIgcmV2c1RvRGVsZXRlID0gZG9jSW5mby5zdGVtbWVkUmV2cyB8fCBbXTtcblxuICAgICAgaWYgKGlzVXBkYXRlICYmIGFwaS5hdXRvX2NvbXBhY3Rpb24pIHtcbiAgICAgICAgcmV2c1RvRGVsZXRlID0gcmV2c1RvRGVsZXRlLmNvbmNhdChjb21wYWN0VHJlZShkb2NJbmZvLm1ldGFkYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXZzVG9EZWxldGUgJiYgcmV2c1RvRGVsZXRlLmxlbmd0aCkge1xuICAgICAgICBjb21wYWN0UmV2cyhyZXZzVG9EZWxldGUsIGRvY0luZm8ubWV0YWRhdGEuaWQsIHR4bik7XG4gICAgICB9XG5cbiAgICAgIG1ldGFkYXRhLnNlcSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIC8vIEN1cnJlbnQgX3JldiBpcyBjYWxjdWxhdGVkIGZyb20gX3Jldl90cmVlIG9uIHJlYWRcbiAgICAgIC8vIGRlbGV0ZSBtZXRhZGF0YS5yZXY7XG4gICAgICB2YXIgbWV0YWRhdGFUb1N0b3JlID0gZW5jb2RlTWV0YWRhdGEobWV0YWRhdGEsIHdpbm5pbmdSZXYkJDEsXG4gICAgICAgIHdpbm5pbmdSZXZJc0RlbGV0ZWQpO1xuICAgICAgdmFyIG1ldGFEYXRhUmVxID0gZG9jU3RvcmUucHV0KG1ldGFkYXRhVG9TdG9yZSk7XG4gICAgICBtZXRhRGF0YVJlcS5vbnN1Y2Nlc3MgPSBhZnRlclB1dE1ldGFkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyUHV0RG9jRXJyb3IoZSkge1xuICAgICAgLy8gQ29uc3RyYWludEVycm9yLCBuZWVkIHRvIHVwZGF0ZSwgbm90IHB1dCAoc2VlICMxNjM4IGZvciBkZXRhaWxzKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBhdm9pZCB0cmFuc2FjdGlvbiBhYm9ydFxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gYXZvaWQgdHJhbnNhY3Rpb24gb25lcnJvclxuICAgICAgdmFyIGluZGV4ID0gYnlTZXFTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKTtcbiAgICAgIHZhciBnZXRLZXlSZXEgPSBpbmRleC5nZXRLZXkoZG9jLl9kb2NfaWRfcmV2KTtcbiAgICAgIGdldEtleVJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcHV0UmVxID0gYnlTZXFTdG9yZS5wdXQoZG9jLCBlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBwdXRSZXEub25zdWNjZXNzID0gYWZ0ZXJQdXREb2M7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyUHV0TWV0YWRhdGEoKSB7XG4gICAgICByZXN1bHRzW3Jlc3VsdHNJZHhdID0ge1xuICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgaWQ6IG1ldGFkYXRhLmlkLFxuICAgICAgICByZXY6IG1ldGFkYXRhLnJldlxuICAgICAgfTtcbiAgICAgIGZldGNoZWREb2NzLnNldChkb2NJbmZvLm1ldGFkYXRhLmlkLCBkb2NJbmZvLm1ldGFkYXRhKTtcbiAgICAgIGluc2VydEF0dGFjaG1lbnRNYXBwaW5ncyhkb2NJbmZvLCBtZXRhZGF0YS5zZXEsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICB2YXIgcHV0UmVxID0gYnlTZXFTdG9yZS5wdXQoZG9jKTtcblxuICAgIHB1dFJlcS5vbnN1Y2Nlc3MgPSBhZnRlclB1dERvYztcbiAgICBwdXRSZXEub25lcnJvciA9IGFmdGVyUHV0RG9jRXJyb3I7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZUF0dGFjaG1lbnRzKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGUsIHJlc3VsdHNJZHgsIGNhbGxiYWNrKSB7XG5cblxuICAgIHZhciBkb2MgPSBkb2NJbmZvLmRhdGE7XG5cbiAgICB2YXIgbnVtRG9uZSA9IDA7XG4gICAgdmFyIGF0dGFjaG1lbnRzID0gT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cyk7XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0UmVzdWx0cygpIHtcbiAgICAgIGlmIChudW1Eb25lID09PSBhdHRhY2htZW50cy5sZW5ndGgpIHtcbiAgICAgICAgZmluaXNoRG9jKGRvY0luZm8sIHdpbm5pbmdSZXYkJDEsIHdpbm5pbmdSZXZJc0RlbGV0ZWQsXG4gICAgICAgICAgaXNVcGRhdGUsIHJlc3VsdHNJZHgsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRhY2htZW50U2F2ZWQoKSB7XG4gICAgICBudW1Eb25lKys7XG4gICAgICBjb2xsZWN0UmVzdWx0cygpO1xuICAgIH1cblxuICAgIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGF0dCA9IGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHNba2V5XTtcbiAgICAgIGlmICghYXR0LnN0dWIpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBhdHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIGF0dC5kYXRhO1xuICAgICAgICBhdHQucmV2cG9zID0gcGFyc2VJbnQod2lubmluZ1JldiQkMSwgMTApO1xuICAgICAgICB2YXIgZGlnZXN0ID0gYXR0LmRpZ2VzdDtcbiAgICAgICAgc2F2ZUF0dGFjaG1lbnQoZGlnZXN0LCBkYXRhLCBhdHRhY2htZW50U2F2ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtRG9uZSsrO1xuICAgICAgICBjb2xsZWN0UmVzdWx0cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gbWFwIHNlcXMgdG8gYXR0YWNobWVudCBkaWdlc3RzLCB3aGljaFxuICAvLyB3ZSB3aWxsIG5lZWQgbGF0ZXIgZHVyaW5nIGNvbXBhY3Rpb25cbiAgZnVuY3Rpb24gaW5zZXJ0QXR0YWNobWVudE1hcHBpbmdzKGRvY0luZm8sIHNlcSwgY2FsbGJhY2spIHtcblxuICAgIHZhciBhdHRzQWRkZWQgPSAwO1xuICAgIHZhciBhdHRzVG9BZGQgPSBPYmplY3Qua2V5cyhkb2NJbmZvLmRhdGEuX2F0dGFjaG1lbnRzIHx8IHt9KTtcblxuICAgIGlmICghYXR0c1RvQWRkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tEb25lKCkge1xuICAgICAgaWYgKCsrYXR0c0FkZGVkID09PSBhdHRzVG9BZGQubGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKGF0dCkge1xuICAgICAgdmFyIGRpZ2VzdCA9IGRvY0luZm8uZGF0YS5fYXR0YWNobWVudHNbYXR0XS5kaWdlc3Q7XG4gICAgICB2YXIgcmVxID0gYXR0YWNoQW5kU2VxU3RvcmUucHV0KHtcbiAgICAgICAgc2VxOiBzZXEsXG4gICAgICAgIGRpZ2VzdFNlcTogZGlnZXN0ICsgJzo6JyArIHNlcVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBjaGVja0RvbmU7XG4gICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHRoaXMgY2FsbGJhY2sgaXMgZm9yIGEgY29uc3RhaW50IGVycm9yLCB3aGljaCB3ZSBpZ25vcmVcbiAgICAgICAgLy8gYmVjYXVzZSB0aGlzIGRvY2lkL3JldiBoYXMgYWxyZWFkeSBiZWVuIGFzc29jaWF0ZWQgd2l0aFxuICAgICAgICAvLyB0aGUgZGlnZXN0IChlLmcuIHdoZW4gbmV3X2VkaXRzID09IGZhbHNlKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGF2b2lkIHRyYW5zYWN0aW9uIGFib3J0XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIGF2b2lkIHRyYW5zYWN0aW9uIG9uZXJyb3JcbiAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHNUb0FkZC5sZW5ndGg7IGkrKykge1xuICAgICAgYWRkKGF0dHNUb0FkZFtpXSk7IC8vIGRvIGluIHBhcmFsbGVsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUF0dGFjaG1lbnQoZGlnZXN0LCBkYXRhLCBjYWxsYmFjaykge1xuXG5cbiAgICB2YXIgZ2V0S2V5UmVxID0gYXR0YWNoU3RvcmUuY291bnQoZGlnZXN0KTtcbiAgICBnZXRLZXlSZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjb3VudCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTsgLy8gYWxyZWFkeSBleGlzdHNcbiAgICAgIH1cbiAgICAgIHZhciBuZXdBdHQgPSB7XG4gICAgICAgIGRpZ2VzdDogZGlnZXN0LFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9O1xuICAgICAgdmFyIHB1dFJlcSA9IGF0dGFjaFN0b3JlLnB1dChuZXdBdHQpO1xuICAgICAgcHV0UmVxLm9uc3VjY2VzcyA9IGNhbGxiYWNrO1xuICAgIH07XG4gIH1cbn1cblxuLy8gQWJzdHJhY3Rpb24gb3ZlciBJREJDdXJzb3IgYW5kIGdldEFsbCgpL2dldEFsbEtleXMoKSB0aGF0IGFsbG93cyB1cyB0byBiYXRjaCBvdXIgb3BlcmF0aW9uc1xuLy8gd2hpbGUgZmFsbGluZyBiYWNrIHRvIGEgbm9ybWFsIElEQkN1cnNvciBvcGVyYXRpb24gb24gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGdldEFsbCgpIG9yXG4vLyBnZXRBbGxLZXlzKCkuIFRoaXMgYWxsb3dzIGZvciBhIG11Y2ggZmFzdGVyIGltcGxlbWVudGF0aW9uIHRoYW4ganVzdCBzdHJhaWdodC11cCBjdXJzb3JzLCBiZWNhdXNlXG4vLyB3ZSdyZSBub3QgcHJvY2Vzc2luZyBlYWNoIGRvY3VtZW50IG9uZS1hdC1hLXRpbWUuXG5mdW5jdGlvbiBydW5CYXRjaGVkQ3Vyc29yKG9iamVjdFN0b3JlLCBrZXlSYW5nZSwgZGVzY2VuZGluZywgYmF0Y2hTaXplLCBvbkJhdGNoKSB7XG5cbiAgaWYgKGJhdGNoU2l6ZSA9PT0gLTEpIHtcbiAgICBiYXRjaFNpemUgPSAxMDAwO1xuICB9XG5cbiAgLy8gQmFpbCBvdXQgb2YgZ2V0QWxsKCkvZ2V0QWxsS2V5cygpIGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIC8vIDEpIGVpdGhlciBtZXRob2QgaXMgdW5zdXBwb3J0ZWQgLSB3ZSBuZWVkIGJvdGhcbiAgLy8gMikgYmF0Y2hTaXplIGlzIDEgKG1pZ2h0IGFzIHdlbGwgdXNlIElEQkN1cnNvcilcbiAgLy8gMykgZGVzY2VuZGluZyDigJMgbm8gcmVhbCB3YXkgdG8gZG8gdGhpcyB2aWEgZ2V0QWxsKCkvZ2V0QWxsS2V5cygpXG5cbiAgdmFyIHVzZUdldEFsbCA9IHR5cGVvZiBvYmplY3RTdG9yZS5nZXRBbGwgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2Ygb2JqZWN0U3RvcmUuZ2V0QWxsS2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGJhdGNoU2l6ZSA+IDEgJiYgIWRlc2NlbmRpbmc7XG5cbiAgdmFyIGtleXNCYXRjaDtcbiAgdmFyIHZhbHVlc0JhdGNoO1xuICB2YXIgcHNldWRvQ3Vyc29yO1xuXG4gIGZ1bmN0aW9uIG9uR2V0QWxsKGUpIHtcbiAgICB2YWx1ZXNCYXRjaCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICBpZiAoa2V5c0JhdGNoKSB7XG4gICAgICBvbkJhdGNoKGtleXNCYXRjaCwgdmFsdWVzQmF0Y2gsIHBzZXVkb0N1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25HZXRBbGxLZXlzKGUpIHtcbiAgICBrZXlzQmF0Y2ggPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgaWYgKHZhbHVlc0JhdGNoKSB7XG4gICAgICBvbkJhdGNoKGtleXNCYXRjaCwgdmFsdWVzQmF0Y2gsIHBzZXVkb0N1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVQc2V1ZG9DdXJzb3IoKSB7XG4gICAgaWYgKCFrZXlzQmF0Y2gubGVuZ3RoKSB7IC8vIG5vIG1vcmUgcmVzdWx0c1xuICAgICAgcmV0dXJuIG9uQmF0Y2goKTtcbiAgICB9XG4gICAgLy8gZmV0Y2ggbmV4dCBiYXRjaCwgZXhjbHVzaXZlIHN0YXJ0XG4gICAgdmFyIGxhc3RLZXkgPSBrZXlzQmF0Y2hba2V5c0JhdGNoLmxlbmd0aCAtIDFdO1xuICAgIHZhciBuZXdLZXlSYW5nZTtcbiAgICBpZiAoa2V5UmFuZ2UgJiYga2V5UmFuZ2UudXBwZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0tleVJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQobGFzdEtleSwga2V5UmFuZ2UudXBwZXIsXG4gICAgICAgICAgdHJ1ZSwga2V5UmFuZ2UudXBwZXJPcGVuKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gXCJEYXRhRXJyb3JcIiAmJiBlLmNvZGUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gb25CYXRjaCgpOyAvLyB3ZSdyZSBkb25lLCBzdGFydGtleSBhbmQgZW5ka2V5IGFyZSBlcXVhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0tleVJhbmdlID0gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChsYXN0S2V5LCB0cnVlKTtcbiAgICB9XG4gICAga2V5UmFuZ2UgPSBuZXdLZXlSYW5nZTtcbiAgICBrZXlzQmF0Y2ggPSBudWxsO1xuICAgIHZhbHVlc0JhdGNoID0gbnVsbDtcbiAgICBvYmplY3RTdG9yZS5nZXRBbGwoa2V5UmFuZ2UsIGJhdGNoU2l6ZSkub25zdWNjZXNzID0gb25HZXRBbGw7XG4gICAgb2JqZWN0U3RvcmUuZ2V0QWxsS2V5cyhrZXlSYW5nZSwgYmF0Y2hTaXplKS5vbnN1Y2Nlc3MgPSBvbkdldEFsbEtleXM7XG4gIH1cblxuICBmdW5jdGlvbiBvbkN1cnNvcihlKSB7XG4gICAgdmFyIGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICBpZiAoIWN1cnNvcikgeyAvLyBkb25lXG4gICAgICByZXR1cm4gb25CYXRjaCgpO1xuICAgIH1cbiAgICAvLyByZWd1bGFyIElEQkN1cnNvciBhY3RzIGxpa2UgYSBiYXRjaCB3aGVyZSBiYXRjaCBzaXplIGlzIGFsd2F5cyAxXG4gICAgb25CYXRjaChbY3Vyc29yLmtleV0sIFtjdXJzb3IudmFsdWVdLCBjdXJzb3IpO1xuICB9XG5cbiAgaWYgKHVzZUdldEFsbCkge1xuICAgIHBzZXVkb0N1cnNvciA9IHtcImNvbnRpbnVlXCI6IGNvbnRpbnVlUHNldWRvQ3Vyc29yfTtcbiAgICBvYmplY3RTdG9yZS5nZXRBbGwoa2V5UmFuZ2UsIGJhdGNoU2l6ZSkub25zdWNjZXNzID0gb25HZXRBbGw7XG4gICAgb2JqZWN0U3RvcmUuZ2V0QWxsS2V5cyhrZXlSYW5nZSwgYmF0Y2hTaXplKS5vbnN1Y2Nlc3MgPSBvbkdldEFsbEtleXM7XG4gIH0gZWxzZSBpZiAoZGVzY2VuZGluZykge1xuICAgIG9iamVjdFN0b3JlLm9wZW5DdXJzb3Ioa2V5UmFuZ2UsICdwcmV2Jykub25zdWNjZXNzID0gb25DdXJzb3I7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcihrZXlSYW5nZSkub25zdWNjZXNzID0gb25DdXJzb3I7XG4gIH1cbn1cblxuLy8gc2ltcGxlIHNoaW0gZm9yIG9iamVjdFN0b3JlLmdldEFsbCgpLCBmYWxsaW5nIGJhY2sgdG8gSURCQ3Vyc29yXG5mdW5jdGlvbiBnZXRBbGwob2JqZWN0U3RvcmUsIGtleVJhbmdlLCBvblN1Y2Nlc3MpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3RTdG9yZS5nZXRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyB1c2UgbmF0aXZlIGdldEFsbFxuICAgIG9iamVjdFN0b3JlLmdldEFsbChrZXlSYW5nZSkub25zdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBmYWxsIGJhY2sgdG8gY3Vyc29yc1xuICB2YXIgdmFsdWVzID0gW107XG5cbiAgZnVuY3Rpb24gb25DdXJzb3IoZSkge1xuICAgIHZhciBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgaWYgKGN1cnNvcikge1xuICAgICAgdmFsdWVzLnB1c2goY3Vyc29yLnZhbHVlKTtcbiAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICByZXN1bHQ6IHZhbHVlc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlKS5vbnN1Y2Nlc3MgPSBvbkN1cnNvcjtcbn1cblxuZnVuY3Rpb24gYWxsRG9jc0tleXMoa2V5cywgZG9jU3RvcmUsIG9uQmF0Y2gpIHtcbiAgLy8gSXQncyBub3QgZ3VhcmFudGVkIHRvIGJlIHJldHVybmVkIGluIHJpZ2h0IG9yZGVyICBcbiAgdmFyIHZhbHVlc0JhdGNoID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgdmFyIGNvdW50ID0gMDtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgZG9jU3RvcmUuZ2V0KGtleSkub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnJlc3VsdCkge1xuICAgICAgICB2YWx1ZXNCYXRjaFtpbmRleF0gPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzQmF0Y2hbaW5kZXhdID0ge2tleToga2V5LCBlcnJvcjogJ25vdF9mb3VuZCd9O1xuICAgICAgfVxuICAgICAgY291bnQrKztcbiAgICAgIGlmIChjb3VudCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgb25CYXRjaChrZXlzLCB2YWx1ZXNCYXRjaCwge30pO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlSYW5nZShzdGFydCwgZW5kLCBpbmNsdXNpdmVFbmQsIGtleSwgZGVzY2VuZGluZykge1xuICB0cnkge1xuICAgIGlmIChzdGFydCAmJiBlbmQpIHtcbiAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZS5ib3VuZChlbmQsIHN0YXJ0LCAhaW5jbHVzaXZlRW5kLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnQsIGVuZCwgZmFsc2UsICFpbmNsdXNpdmVFbmQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhcnQpIHtcbiAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZS51cHBlckJvdW5kKHN0YXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZS5sb3dlckJvdW5kKHN0YXJ0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVuZCkge1xuICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlLmxvd2VyQm91bmQoZW5kLCAhaW5jbHVzaXZlRW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZS51cHBlckJvdW5kKGVuZCwgIWluY2x1c2l2ZUVuZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBJREJLZXlSYW5nZS5vbmx5KGtleSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGlkYkFsbERvY3Mob3B0cywgaWRiLCBjYWxsYmFjaykge1xuICB2YXIgc3RhcnQgPSAnc3RhcnRrZXknIGluIG9wdHMgPyBvcHRzLnN0YXJ0a2V5IDogZmFsc2U7XG4gIHZhciBlbmQgPSAnZW5ka2V5JyBpbiBvcHRzID8gb3B0cy5lbmRrZXkgOiBmYWxzZTtcbiAgdmFyIGtleSA9ICdrZXknIGluIG9wdHMgPyBvcHRzLmtleSA6IGZhbHNlO1xuICB2YXIga2V5cyA9ICdrZXlzJyBpbiBvcHRzID8gb3B0cy5rZXlzIDogZmFsc2U7IFxuICB2YXIgc2tpcCA9IG9wdHMuc2tpcCB8fCAwO1xuICB2YXIgbGltaXQgPSB0eXBlb2Ygb3B0cy5saW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLmxpbWl0IDogLTE7XG4gIHZhciBpbmNsdXNpdmVFbmQgPSBvcHRzLmluY2x1c2l2ZV9lbmQgIT09IGZhbHNlO1xuXG4gIHZhciBrZXlSYW5nZSA7IFxuICB2YXIga2V5UmFuZ2VFcnJvcjtcbiAgaWYgKCFrZXlzKSB7XG4gICAga2V5UmFuZ2UgPSBjcmVhdGVLZXlSYW5nZShzdGFydCwgZW5kLCBpbmNsdXNpdmVFbmQsIGtleSwgb3B0cy5kZXNjZW5kaW5nKTtcbiAgICBrZXlSYW5nZUVycm9yID0ga2V5UmFuZ2UgJiYga2V5UmFuZ2UuZXJyb3I7XG4gICAgaWYgKGtleVJhbmdlRXJyb3IgJiYgXG4gICAgICAhKGtleVJhbmdlRXJyb3IubmFtZSA9PT0gXCJEYXRhRXJyb3JcIiAmJiBrZXlSYW5nZUVycm9yLmNvZGUgPT09IDApKSB7XG4gICAgICAvLyBEYXRhRXJyb3Igd2l0aCBlcnJvciBjb2RlIDAgaW5kaWNhdGVzIHN0YXJ0IGlzIGxlc3MgdGhhbiBlbmQsIHNvXG4gICAgICAvLyBjYW4ganVzdCBkbyBhbiBlbXB0eSBxdWVyeS4gRWxzZSBuZWVkIHRvIHRocm93XG4gICAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoSURCX0VSUk9SLFxuICAgICAgICBrZXlSYW5nZUVycm9yLm5hbWUsIGtleVJhbmdlRXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdG9yZXMgPSBbRE9DX1NUT1JFLCBCWV9TRVFfU1RPUkUsIE1FVEFfU1RPUkVdO1xuXG4gIGlmIChvcHRzLmF0dGFjaG1lbnRzKSB7XG4gICAgc3RvcmVzLnB1c2goQVRUQUNIX1NUT1JFKTtcbiAgfVxuICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYiwgc3RvcmVzLCAncmVhZG9ubHknKTtcbiAgaWYgKHR4blJlc3VsdC5lcnJvcikge1xuICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICB9XG4gIHZhciB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICB0eG4ub25jb21wbGV0ZSA9IG9uVHhuQ29tcGxldGU7XG4gIHR4bi5vbmFib3J0ID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICB2YXIgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcbiAgdmFyIHNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG4gIHZhciBtZXRhU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoTUVUQV9TVE9SRSk7XG4gIHZhciBkb2NJZFJldkluZGV4ID0gc2VxU3RvcmUuaW5kZXgoJ19kb2NfaWRfcmV2Jyk7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHZhciBkb2NDb3VudDtcbiAgdmFyIHVwZGF0ZVNlcTtcblxuICBtZXRhU3RvcmUuZ2V0KE1FVEFfU1RPUkUpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZG9jQ291bnQgPSBlLnRhcmdldC5yZXN1bHQuZG9jQ291bnQ7XG4gIH07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChvcHRzLnVwZGF0ZV9zZXEpIHtcbiAgICBnZXRNYXhVcGRhdGVTZXEoc2VxU3RvcmUsIGZ1bmN0aW9uIChlKSB7IFxuICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdCAmJiBlLnRhcmdldC5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICB1cGRhdGVTZXEgPSBlLnRhcmdldC5yZXN1bHRbMF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXhVcGRhdGVTZXEob2JqZWN0U3RvcmUsIG9uU3VjY2Vzcykge1xuICAgIGZ1bmN0aW9uIG9uQ3Vyc29yKGUpIHtcbiAgICAgIHZhciBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICB2YXIgbWF4S2V5ID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGN1cnNvciAmJiBjdXJzb3Iua2V5KSB7XG4gICAgICAgIG1heEtleSA9IGN1cnNvci5rZXk7XG4gICAgICB9IFxuICAgICAgcmV0dXJuIG9uU3VjY2Vzcyh7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHJlc3VsdDogW21heEtleV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIG9iamVjdFN0b3JlLm9wZW5DdXJzb3IobnVsbCwgJ3ByZXYnKS5vbnN1Y2Nlc3MgPSBvbkN1cnNvcjtcbiAgfVxuXG4gIC8vIGlmIHRoZSB1c2VyIHNwZWNpZmllcyBpbmNsdWRlX2RvY3M9dHJ1ZSwgdGhlbiB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGJsb2NrIHRoZSBtYWluIGN1cnNvciB3aGlsZSB3ZSdyZSBmZXRjaGluZyB0aGUgZG9jXG4gIGZ1bmN0aW9uIGZldGNoRG9jQXN5bmNocm9ub3VzbHkobWV0YWRhdGEsIHJvdywgd2lubmluZ1JldiQkMSkge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YS5pZCArIFwiOjpcIiArIHdpbm5pbmdSZXYkJDE7XG4gICAgZG9jSWRSZXZJbmRleC5nZXQoa2V5KS5vbnN1Y2Nlc3MgPSAgZnVuY3Rpb24gb25HZXREb2MoZSkge1xuICAgICAgcm93LmRvYyA9IGRlY29kZURvYyhlLnRhcmdldC5yZXN1bHQpIHx8IHt9O1xuICAgICAgaWYgKG9wdHMuY29uZmxpY3RzKSB7XG4gICAgICAgIHZhciBjb25mbGljdHMgPSBjb2xsZWN0Q29uZmxpY3RzKG1ldGFkYXRhKTtcbiAgICAgICAgaWYgKGNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICByb3cuZG9jLl9jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZldGNoQXR0YWNobWVudHNJZk5lY2Vzc2FyeShyb3cuZG9jLCBvcHRzLCB0eG4pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxEb2NzSW5uZXIod2lubmluZ1JldiQkMSwgbWV0YWRhdGEpIHtcbiAgICB2YXIgcm93ID0ge1xuICAgICAgaWQ6IG1ldGFkYXRhLmlkLFxuICAgICAga2V5OiBtZXRhZGF0YS5pZCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHJldjogd2lubmluZ1JldiQkMVxuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGRlbGV0ZWQgPSBtZXRhZGF0YS5kZWxldGVkO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICBpZiAoa2V5cykge1xuICAgICAgICByZXN1bHRzLnB1c2gocm93KTtcbiAgICAgICAgLy8gZGVsZXRlZCBkb2NzIGFyZSBva2F5IHdpdGggXCJrZXlzXCIgcmVxdWVzdHNcbiAgICAgICAgcm93LnZhbHVlLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICByb3cuZG9jID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNraXAtLSA8PSAwKSB7XG4gICAgICByZXN1bHRzLnB1c2gocm93KTtcbiAgICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgICBmZXRjaERvY0FzeW5jaHJvbm91c2x5KG1ldGFkYXRhLCByb3csIHdpbm5pbmdSZXYkJDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NCYXRjaChiYXRjaFZhbHVlcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBiYXRjaFZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSBsaW1pdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciBiYXRjaFZhbHVlID0gYmF0Y2hWYWx1ZXNbaV07XG4gICAgICBpZiAoYmF0Y2hWYWx1ZS5lcnJvciAmJiBrZXlzKSB7XG4gICAgICAgIC8vIGtleSB3YXMgbm90IGZvdW5kIHdpdGggXCJrZXlzXCIgcmVxdWVzdHNcbiAgICAgICAgcmVzdWx0cy5wdXNoKGJhdGNoVmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBtZXRhZGF0YSA9IGRlY29kZU1ldGFkYXRhKGJhdGNoVmFsdWUpO1xuICAgICAgdmFyIHdpbm5pbmdSZXYkJDEgPSBtZXRhZGF0YS53aW5uaW5nUmV2O1xuICAgICAgYWxsRG9jc0lubmVyKHdpbm5pbmdSZXYkJDEsIG1ldGFkYXRhKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJhdGNoKGJhdGNoS2V5cywgYmF0Y2hWYWx1ZXMsIGN1cnNvcikge1xuICAgIGlmICghY3Vyc29yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb2Nlc3NCYXRjaChiYXRjaFZhbHVlcyk7XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR2V0QWxsKGUpIHtcbiAgICB2YXIgdmFsdWVzID0gZS50YXJnZXQucmVzdWx0O1xuICAgIGlmIChvcHRzLmRlc2NlbmRpbmcpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHByb2Nlc3NCYXRjaCh2YWx1ZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25SZXN1bHRzUmVhZHkoKSB7XG4gICAgdmFyIHJldHVyblZhbCA9IHtcbiAgICAgIHRvdGFsX3Jvd3M6IGRvY0NvdW50LFxuICAgICAgb2Zmc2V0OiBvcHRzLnNraXAsXG4gICAgICByb3dzOiByZXN1bHRzXG4gICAgfTtcbiAgICBcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAob3B0cy51cGRhdGVfc2VxICYmIHVwZGF0ZVNlcSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm5WYWwudXBkYXRlX3NlcSA9IHVwZGF0ZVNlcTtcbiAgICB9XG4gICAgY2FsbGJhY2sobnVsbCwgcmV0dXJuVmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHhuQ29tcGxldGUoKSB7XG4gICAgaWYgKG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICAgIHBvc3RQcm9jZXNzQXR0YWNobWVudHMocmVzdWx0cywgb3B0cy5iaW5hcnkpLnRoZW4ob25SZXN1bHRzUmVhZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblJlc3VsdHNSZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRvbid0IGJvdGhlciBkb2luZyBhbnkgcmVxdWVzdHMgaWYgc3RhcnQgPiBlbmQgb3IgbGltaXQgPT09IDBcbiAgaWYgKGtleVJhbmdlRXJyb3IgfHwgbGltaXQgPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGtleXMpIHtcbiAgICByZXR1cm4gYWxsRG9jc0tleXMob3B0cy5rZXlzLCBkb2NTdG9yZSwgb25CYXRjaCk7XG4gIH1cbiAgaWYgKGxpbWl0ID09PSAtMSkgeyAvLyBqdXN0IGZldGNoIGV2ZXJ5dGhpbmdcbiAgICByZXR1cm4gZ2V0QWxsKGRvY1N0b3JlLCBrZXlSYW5nZSwgb25HZXRBbGwpO1xuICB9XG4gIC8vIGVsc2UgZG8gYSBjdXJzb3JcbiAgLy8gY2hvb3NlIGEgYmF0Y2ggc2l6ZSBiYXNlZCBvbiB0aGUgc2tpcCwgc2luY2Ugd2UnbGwgbmVlZCB0byBza2lwIHRoYXQgbWFueVxuICBydW5CYXRjaGVkQ3Vyc29yKGRvY1N0b3JlLCBrZXlSYW5nZSwgb3B0cy5kZXNjZW5kaW5nLCBsaW1pdCArIHNraXAsIG9uQmF0Y2gpO1xufVxuXG4vL1xuLy8gQmxvYnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIHZlcnNpb25zIG9mIEluZGV4ZWREQiwgbm90YWJseVxuLy8gQ2hyb21lIDwzNyBhbmQgQW5kcm9pZCA8NS4gSW4gdGhvc2UgdmVyc2lvbnMsIHN0b3JpbmcgYSBibG9iIHdpbGwgdGhyb3cuXG4vL1xuLy8gVmFyaW91cyBvdGhlciBibG9iIGJ1Z3MgZXhpc3QgaW4gQ2hyb21lIHYzNy00MiAoaW5jbHVzaXZlKS5cbi8vIERldGVjdGluZyB0aGVtIGlzIGV4cGVuc2l2ZSBhbmQgY29uZnVzaW5nIHRvIHVzZXJzLCBhbmQgQ2hyb21lIDM3LTQyXG4vLyBpcyBhdCB2ZXJ5IGxvdyB1c2FnZSB3b3JsZHdpZGUsIHNvIHdlIGRvIGEgaGFja3kgdXNlckFnZW50IGNoZWNrIGluc3RlYWQuXG4vL1xuLy8gY29udGVudC10eXBlIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQwODEyMFxuLy8gNDA0IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzkxNlxuLy8gRmlsZVJlYWRlciBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc4MzZcbi8vXG5mdW5jdGlvbiBjaGVja0Jsb2JTdXBwb3J0KHR4bikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgYmxvYiQkMSA9IGNyZWF0ZUJsb2IoWycnXSk7XG4gICAgdmFyIHJlcSA9IHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiQkMSwgJ2tleScpO1xuXG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtYXRjaGVkQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgICB2YXIgbWF0Y2hlZEVkZ2UgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLyk7XG4gICAgICAvLyBNUyBFZGdlIHByZXRlbmRzIHRvIGJlIENocm9tZSA0MjpcbiAgICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaGg4NjkzMDElMjh2PXZzLjg1JTI5LmFzcHhcbiAgICAgIHJlc29sdmUobWF0Y2hlZEVkZ2UgfHwgIW1hdGNoZWRDaHJvbWUgfHxcbiAgICAgICAgcGFyc2VJbnQobWF0Y2hlZENocm9tZVsxXSwgMTApID49IDQzKTtcbiAgICB9O1xuXG4gICAgcmVxLm9uZXJyb3IgPSB0eG4ub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gYWJvcnRzIG5vdyBpdHMgZHVlIHRvIG5vdCBiZWluZyBhYmxlIHRvXG4gICAgICAvLyB3cml0ZSB0byB0aGUgZGF0YWJhc2UsIGxpa2VseSBkdWUgdG8gdGhlIGRpc2sgYmVpbmcgZnVsbFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgIH07XG4gIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvdW50RG9jcyh0eG4sIGNiKSB7XG4gIHZhciBpbmRleCA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpLmluZGV4KCdkZWxldGVkT3JMb2NhbCcpO1xuICBpbmRleC5jb3VudChJREJLZXlSYW5nZS5vbmx5KCcwJykpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY2IoZS50YXJnZXQucmVzdWx0KTtcbiAgfTtcbn1cblxuLy8gVGhpcyB0YXNrIHF1ZXVlIGVuc3VyZXMgdGhhdCBJREIgb3BlbiBjYWxscyBhcmUgZG9uZSBpbiB0aGVpciBvd24gdGlja1xuXG52YXIgcnVubmluZyA9IGZhbHNlO1xudmFyIHF1ZXVlID0gW107XG5cbmZ1bmN0aW9uIHRyeUNvZGUoZnVuLCBlcnIsIHJlcywgUG91Y2hEQikge1xuICB0cnkge1xuICAgIGZ1bihlcnIsIHJlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFNob3VsZG4ndCBoYXBwZW4sIGJ1dCBpbiBzb21lIG9kZCBjYXNlc1xuICAgIC8vIEluZGV4ZWREQiBpbXBsZW1lbnRhdGlvbnMgbWlnaHQgdGhyb3cgYSBzeW5jXG4gICAgLy8gZXJyb3IsIGluIHdoaWNoIGNhc2UgdGhpcyB3aWxsIGF0IGxlYXN0IGxvZyBpdC5cbiAgICBQb3VjaERCLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5leHQoKSB7XG4gIGlmIChydW5uaW5nIHx8ICFxdWV1ZS5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcnVubmluZyA9IHRydWU7XG4gIHF1ZXVlLnNoaWZ0KCkoKTtcbn1cblxuZnVuY3Rpb24gZW5xdWV1ZVRhc2soYWN0aW9uLCBjYWxsYmFjaywgUG91Y2hEQikge1xuICBxdWV1ZS5wdXNoKGZ1bmN0aW9uIHJ1bkFjdGlvbigpIHtcbiAgICBhY3Rpb24oZnVuY3Rpb24gcnVuQ2FsbGJhY2soZXJyLCByZXMpIHtcbiAgICAgIHRyeUNvZGUoY2FsbGJhY2ssIGVyciwgcmVzLCBQb3VjaERCKTtcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIGltbWVkaWF0ZShmdW5jdGlvbiBydW5OZXh0KCkge1xuICAgICAgICBhcHBseU5leHQoUG91Y2hEQik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGFwcGx5TmV4dCgpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VzKG9wdHMsIGFwaSwgZGJOYW1lLCBpZGIpIHtcbiAgb3B0cyA9IGNsb25lKG9wdHMpO1xuXG4gIGlmIChvcHRzLmNvbnRpbnVvdXMpIHtcbiAgICB2YXIgaWQgPSBkYk5hbWUgKyAnOicgKyB1dWlkKCk7XG4gICAgY2hhbmdlc0hhbmRsZXIuYWRkTGlzdGVuZXIoZGJOYW1lLCBpZCwgYXBpLCBvcHRzKTtcbiAgICBjaGFuZ2VzSGFuZGxlci5ub3RpZnkoZGJOYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5nZXNIYW5kbGVyLnJlbW92ZUxpc3RlbmVyKGRiTmFtZSwgaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZG9jSWRzID0gb3B0cy5kb2NfaWRzICYmIG5ldyBFeHBvcnRlZFNldChvcHRzLmRvY19pZHMpO1xuXG4gIG9wdHMuc2luY2UgPSBvcHRzLnNpbmNlIHx8IDA7XG4gIHZhciBsYXN0U2VxID0gb3B0cy5zaW5jZTtcblxuICB2YXIgbGltaXQgPSAnbGltaXQnIGluIG9wdHMgPyBvcHRzLmxpbWl0IDogLTE7XG4gIGlmIChsaW1pdCA9PT0gMCkge1xuICAgIGxpbWl0ID0gMTsgLy8gcGVyIENvdWNoREIgX2NoYW5nZXMgc3BlY1xuICB9XG5cbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIG51bVJlc3VsdHMgPSAwO1xuICB2YXIgZmlsdGVyID0gZmlsdGVyQ2hhbmdlKG9wdHMpO1xuICB2YXIgZG9jSWRzVG9NZXRhZGF0YSA9IG5ldyBFeHBvcnRlZE1hcCgpO1xuXG4gIHZhciB0eG47XG4gIHZhciBieVNlcVN0b3JlO1xuICB2YXIgZG9jU3RvcmU7XG4gIHZhciBkb2NJZFJldkluZGV4O1xuXG4gIGZ1bmN0aW9uIG9uQmF0Y2goYmF0Y2hLZXlzLCBiYXRjaFZhbHVlcywgY3Vyc29yKSB7XG4gICAgaWYgKCFjdXJzb3IgfHwgIWJhdGNoS2V5cy5sZW5ndGgpIHsgLy8gZG9uZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB3aW5uaW5nRG9jcyA9IG5ldyBBcnJheShiYXRjaEtleXMubGVuZ3RoKTtcbiAgICB2YXIgbWV0YWRhdGFzID0gbmV3IEFycmF5KGJhdGNoS2V5cy5sZW5ndGgpO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc01ldGFkYXRhQW5kV2lubmluZ0RvYyhtZXRhZGF0YSwgd2lubmluZ0RvYykge1xuICAgICAgdmFyIGNoYW5nZSA9IG9wdHMucHJvY2Vzc0NoYW5nZSh3aW5uaW5nRG9jLCBtZXRhZGF0YSwgb3B0cyk7XG4gICAgICBsYXN0U2VxID0gY2hhbmdlLnNlcSA9IG1ldGFkYXRhLnNlcTtcblxuICAgICAgdmFyIGZpbHRlcmVkID0gZmlsdGVyKGNoYW5nZSk7XG4gICAgICBpZiAodHlwZW9mIGZpbHRlcmVkID09PSAnb2JqZWN0JykgeyAvLyBhbnl0aGluZyBidXQgdHJ1ZS9mYWxzZSBpbmRpY2F0ZXMgZXJyb3JcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZpbHRlcmVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJlZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICBudW1SZXN1bHRzKys7XG4gICAgICBpZiAob3B0cy5yZXR1cm5fZG9jcykge1xuICAgICAgICByZXN1bHRzLnB1c2goY2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIC8vIHByb2Nlc3MgdGhlIGF0dGFjaG1lbnQgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGZvciB0aGUgYmVuZWZpdCBvZiBsaXZlIGxpc3RlbmVyc1xuICAgICAgaWYgKG9wdHMuYXR0YWNobWVudHMgJiYgb3B0cy5pbmNsdWRlX2RvY3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgZmV0Y2hBdHRhY2htZW50c0lmTmVjZXNzYXJ5KHdpbm5pbmdEb2MsIG9wdHMsIHR4biwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9zdFByb2Nlc3NBdHRhY2htZW50cyhbY2hhbmdlXSwgb3B0cy5iaW5hcnkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXNvbHZlKGNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CYXRjaERvbmUoKSB7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB3aW5uaW5nRG9jcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAobnVtUmVzdWx0cyA9PT0gbGltaXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2lubmluZ0RvYyA9IHdpbm5pbmdEb2NzW2ldO1xuICAgICAgICBpZiAoIXdpbm5pbmdEb2MpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0YWRhdGEgPSBtZXRhZGF0YXNbaV07XG4gICAgICAgIHByb21pc2VzLnB1c2gocHJvY2Vzc01ldGFkYXRhQW5kV2lubmluZ0RvYyhtZXRhZGF0YSwgd2lubmluZ0RvYykpO1xuICAgICAgfVxuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hhbmdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChjaGFuZ2VzW2ldKSB7XG4gICAgICAgICAgICBvcHRzLm9uQ2hhbmdlKGNoYW5nZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2gob3B0cy5jb21wbGV0ZSk7XG5cbiAgICAgIGlmIChudW1SZXN1bHRzICE9PSBsaW1pdCkge1xuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGZXRjaCBhbGwgbWV0YWRhdGFzL3dpbm5pbmdkb2NzIGZyb20gdGhpcyBiYXRjaCBpbiBwYXJhbGxlbCwgdGhlbiBwcm9jZXNzXG4gICAgLy8gdGhlbSBhbGwgb25seSBvbmNlIGFsbCBkYXRhIGhhcyBiZWVuIGNvbGxlY3RlZC4gVGhpcyBpcyBkb25lIGluIHBhcmFsbGVsXG4gICAgLy8gYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGRvaW5nIGl0IG9uZS1hdC1hLXRpbWUuXG4gICAgdmFyIG51bURvbmUgPSAwO1xuICAgIGJhdGNoVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICB2YXIgZG9jID0gZGVjb2RlRG9jKHZhbHVlKTtcbiAgICAgIHZhciBzZXEgPSBiYXRjaEtleXNbaV07XG4gICAgICBmZXRjaFdpbm5pbmdEb2NBbmRNZXRhZGF0YShkb2MsIHNlcSwgZnVuY3Rpb24gKG1ldGFkYXRhLCB3aW5uaW5nRG9jKSB7XG4gICAgICAgIG1ldGFkYXRhc1tpXSA9IG1ldGFkYXRhO1xuICAgICAgICB3aW5uaW5nRG9jc1tpXSA9IHdpbm5pbmdEb2M7XG4gICAgICAgIGlmICgrK251bURvbmUgPT09IGJhdGNoS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICBvbkJhdGNoRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR2V0TWV0YWRhdGEoZG9jLCBzZXEsIG1ldGFkYXRhLCBjYikge1xuICAgIGlmIChtZXRhZGF0YS5zZXEgIT09IHNlcSkge1xuICAgICAgLy8gc29tZSBvdGhlciBzZXEgaXMgbGF0ZXJcbiAgICAgIHJldHVybiBjYigpO1xuICAgIH1cblxuICAgIGlmIChtZXRhZGF0YS53aW5uaW5nUmV2ID09PSBkb2MuX3Jldikge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgd2lubmluZyBkb2NcbiAgICAgIHJldHVybiBjYihtZXRhZGF0YSwgZG9jKTtcbiAgICB9XG5cbiAgICAvLyBmZXRjaCB3aW5uaW5nIGRvYyBpbiBzZXBhcmF0ZSByZXF1ZXN0XG4gICAgdmFyIGRvY0lkUmV2ID0gZG9jLl9pZCArICc6OicgKyBtZXRhZGF0YS53aW5uaW5nUmV2O1xuICAgIHZhciByZXEgPSBkb2NJZFJldkluZGV4LmdldChkb2NJZFJldik7XG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYihtZXRhZGF0YSwgZGVjb2RlRG9jKGUudGFyZ2V0LnJlc3VsdCkpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFdpbm5pbmdEb2NBbmRNZXRhZGF0YShkb2MsIHNlcSwgY2IpIHtcbiAgICBpZiAoZG9jSWRzICYmICFkb2NJZHMuaGFzKGRvYy5faWQpKSB7XG4gICAgICByZXR1cm4gY2IoKTtcbiAgICB9XG5cbiAgICB2YXIgbWV0YWRhdGEgPSBkb2NJZHNUb01ldGFkYXRhLmdldChkb2MuX2lkKTtcbiAgICBpZiAobWV0YWRhdGEpIHsgLy8gY2FjaGVkXG4gICAgICByZXR1cm4gb25HZXRNZXRhZGF0YShkb2MsIHNlcSwgbWV0YWRhdGEsIGNiKTtcbiAgICB9XG4gICAgLy8gbWV0YWRhdGEgbm90IGNhY2hlZCwgaGF2ZSB0byBnbyBmZXRjaCBpdFxuICAgIGRvY1N0b3JlLmdldChkb2MuX2lkKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbWV0YWRhdGEgPSBkZWNvZGVNZXRhZGF0YShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgZG9jSWRzVG9NZXRhZGF0YS5zZXQoZG9jLl9pZCwgbWV0YWRhdGEpO1xuICAgICAgb25HZXRNZXRhZGF0YShkb2MsIHNlcSwgbWV0YWRhdGEsIGNiKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgIG9wdHMuY29tcGxldGUobnVsbCwge1xuICAgICAgcmVzdWx0czogcmVzdWx0cyxcbiAgICAgIGxhc3Rfc2VxOiBsYXN0U2VxXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblR4bkNvbXBsZXRlKCkge1xuICAgIGlmICghb3B0cy5jb250aW51b3VzICYmIG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICAgIC8vIGNhbm5vdCBndWFyYW50ZWUgdGhhdCBwb3N0UHJvY2Vzc2luZyB3YXMgYWxyZWFkeSBkb25lLFxuICAgICAgLy8gc28gZG8gaXQgYWdhaW5cbiAgICAgIHBvc3RQcm9jZXNzQXR0YWNobWVudHMocmVzdWx0cykudGhlbihmaW5pc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5pc2goKTtcbiAgICB9XG4gIH1cblxuICB2YXIgb2JqZWN0U3RvcmVzID0gW0RPQ19TVE9SRSwgQllfU0VRX1NUT1JFXTtcbiAgaWYgKG9wdHMuYXR0YWNobWVudHMpIHtcbiAgICBvYmplY3RTdG9yZXMucHVzaChBVFRBQ0hfU1RPUkUpO1xuICB9XG4gIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBvYmplY3RTdG9yZXMsICdyZWFkb25seScpO1xuICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgcmV0dXJuIG9wdHMuY29tcGxldGUodHhuUmVzdWx0LmVycm9yKTtcbiAgfVxuICB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICB0eG4ub25hYm9ydCA9IGlkYkVycm9yKG9wdHMuY29tcGxldGUpO1xuICB0eG4ub25jb21wbGV0ZSA9IG9uVHhuQ29tcGxldGU7XG5cbiAgYnlTZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShCWV9TRVFfU1RPUkUpO1xuICBkb2NTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpO1xuICBkb2NJZFJldkluZGV4ID0gYnlTZXFTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKTtcblxuICB2YXIga2V5UmFuZ2UgPSAob3B0cy5zaW5jZSAmJiAhb3B0cy5kZXNjZW5kaW5nKSA/XG4gICAgSURCS2V5UmFuZ2UubG93ZXJCb3VuZChvcHRzLnNpbmNlLCB0cnVlKSA6IG51bGw7XG5cbiAgcnVuQmF0Y2hlZEN1cnNvcihieVNlcVN0b3JlLCBrZXlSYW5nZSwgb3B0cy5kZXNjZW5kaW5nLCBsaW1pdCwgb25CYXRjaCk7XG59XG5cbnZhciBjYWNoZWREQnMgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcbnZhciBibG9iU3VwcG9ydFByb21pc2U7XG52YXIgb3BlblJlcUxpc3QgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcblxuZnVuY3Rpb24gSWRiUG91Y2gob3B0cywgY2FsbGJhY2spIHtcbiAgdmFyIGFwaSA9IHRoaXM7XG5cbiAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKHRoaXNDYWxsYmFjaykge1xuICAgIGluaXQoYXBpLCBvcHRzLCB0aGlzQ2FsbGJhY2spO1xuICB9LCBjYWxsYmFjaywgYXBpLmNvbnN0cnVjdG9yKTtcbn1cblxuZnVuY3Rpb24gaW5pdChhcGksIG9wdHMsIGNhbGxiYWNrKSB7XG5cbiAgdmFyIGRiTmFtZSA9IG9wdHMubmFtZTtcblxuICB2YXIgaWRiID0gbnVsbDtcbiAgYXBpLl9tZXRhID0gbnVsbDtcblxuICAvLyBjYWxsZWQgd2hlbiBjcmVhdGluZyBhIGZyZXNoIG5ldyBkYXRhYmFzZVxuICBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoZGIpIHtcbiAgICB2YXIgZG9jU3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShET0NfU1RPUkUsIHtrZXlQYXRoIDogJ2lkJ30pO1xuICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSwge2F1dG9JbmNyZW1lbnQ6IHRydWV9KVxuICAgICAgLmNyZWF0ZUluZGV4KCdfZG9jX2lkX3JldicsICdfZG9jX2lkX3JldicsIHt1bmlxdWU6IHRydWV9KTtcbiAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShBVFRBQ0hfU1RPUkUsIHtrZXlQYXRoOiAnZGlnZXN0J30pO1xuICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKE1FVEFfU1RPUkUsIHtrZXlQYXRoOiAnaWQnLCBhdXRvSW5jcmVtZW50OiBmYWxzZX0pO1xuICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpO1xuXG4gICAgLy8gYWRkZWQgaW4gdjJcbiAgICBkb2NTdG9yZS5jcmVhdGVJbmRleCgnZGVsZXRlZE9yTG9jYWwnLCAnZGVsZXRlZE9yTG9jYWwnLCB7dW5pcXVlIDogZmFsc2V9KTtcblxuICAgIC8vIGFkZGVkIGluIHYzXG4gICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoTE9DQUxfU1RPUkUsIHtrZXlQYXRoOiAnX2lkJ30pO1xuXG4gICAgLy8gYWRkZWQgaW4gdjRcbiAgICB2YXIgYXR0QW5kU2VxU3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShBVFRBQ0hfQU5EX1NFUV9TVE9SRSxcbiAgICAgIHthdXRvSW5jcmVtZW50OiB0cnVlfSk7XG4gICAgYXR0QW5kU2VxU3RvcmUuY3JlYXRlSW5kZXgoJ3NlcScsICdzZXEnKTtcbiAgICBhdHRBbmRTZXFTdG9yZS5jcmVhdGVJbmRleCgnZGlnZXN0U2VxJywgJ2RpZ2VzdFNlcScsIHt1bmlxdWU6IHRydWV9KTtcbiAgfVxuXG4gIC8vIG1pZ3JhdGlvbiB0byB2ZXJzaW9uIDJcbiAgLy8gdW5mb3J0dW5hdGVseSBcImRlbGV0ZWRPckxvY2FsXCIgaXMgYSBtaXNub21lciBub3cgdGhhdCB3ZSBubyBsb25nZXJcbiAgLy8gc3RvcmUgbG9jYWwgZG9jcyBpbiB0aGUgbWFpbiBkb2Mtc3RvcmUsIGJ1dCB3aGFkZHlhZ29ubmFkb1xuICBmdW5jdGlvbiBhZGREZWxldGVkT3JMb2NhbEluZGV4KHR4biwgY2FsbGJhY2spIHtcbiAgICB2YXIgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcbiAgICBkb2NTdG9yZS5jcmVhdGVJbmRleCgnZGVsZXRlZE9yTG9jYWwnLCAnZGVsZXRlZE9yTG9jYWwnLCB7dW5pcXVlIDogZmFsc2V9KTtcblxuICAgIGRvY1N0b3JlLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgIHZhciBkZWxldGVkID0gaXNEZWxldGVkKG1ldGFkYXRhKTtcbiAgICAgICAgbWV0YWRhdGEuZGVsZXRlZE9yTG9jYWwgPSBkZWxldGVkID8gXCIxXCIgOiBcIjBcIjtcbiAgICAgICAgZG9jU3RvcmUucHV0KG1ldGFkYXRhKTtcbiAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBtaWdyYXRpb24gdG8gdmVyc2lvbiAzIChwYXJ0IDEpXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvY2FsU3RvcmVTY2hlbWEoZGIpIHtcbiAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShMT0NBTF9TVE9SRSwge2tleVBhdGg6ICdfaWQnfSlcbiAgICAgIC5jcmVhdGVJbmRleCgnX2RvY19pZF9yZXYnLCAnX2RvY19pZF9yZXYnLCB7dW5pcXVlOiB0cnVlfSk7XG4gIH1cblxuICAvLyBtaWdyYXRpb24gdG8gdmVyc2lvbiAzIChwYXJ0IDIpXG4gIGZ1bmN0aW9uIG1pZ3JhdGVMb2NhbFN0b3JlKHR4biwgY2IpIHtcbiAgICB2YXIgbG9jYWxTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShMT0NBTF9TVE9SRSk7XG4gICAgdmFyIGRvY1N0b3JlID0gdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSk7XG4gICAgdmFyIHNlcVN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG5cbiAgICB2YXIgY3Vyc29yID0gZG9jU3RvcmUub3BlbkN1cnNvcigpO1xuICAgIGN1cnNvci5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgIHZhciBkb2NJZCA9IG1ldGFkYXRhLmlkO1xuICAgICAgICB2YXIgbG9jYWwgPSBpc0xvY2FsSWQoZG9jSWQpO1xuICAgICAgICB2YXIgcmV2JCQxID0gd2lubmluZ1JldihtZXRhZGF0YSk7XG4gICAgICAgIGlmIChsb2NhbCkge1xuICAgICAgICAgIHZhciBkb2NJZFJldiA9IGRvY0lkICsgXCI6OlwiICsgcmV2JCQxO1xuICAgICAgICAgIC8vIHJlbW92ZSBhbGwgc2VxIGVudHJpZXNcbiAgICAgICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2NJZFxuICAgICAgICAgIHZhciBzdGFydCA9IGRvY0lkICsgXCI6OlwiO1xuICAgICAgICAgIHZhciBlbmQgPSBkb2NJZCArIFwiOjp+XCI7XG4gICAgICAgICAgdmFyIGluZGV4ID0gc2VxU3RvcmUuaW5kZXgoJ19kb2NfaWRfcmV2Jyk7XG4gICAgICAgICAgdmFyIHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoc3RhcnQsIGVuZCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICB2YXIgc2VxQ3Vyc29yID0gaW5kZXgub3BlbkN1cnNvcihyYW5nZSk7XG4gICAgICAgICAgc2VxQ3Vyc29yLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZXFDdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAoIXNlcUN1cnNvcikge1xuICAgICAgICAgICAgICAvLyBkb25lXG4gICAgICAgICAgICAgIGRvY1N0b3JlLmRlbGV0ZShjdXJzb3IucHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzZXFDdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChkYXRhLl9kb2NfaWRfcmV2ID09PSBkb2NJZFJldikge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmUucHV0KGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlcVN0b3JlLmRlbGV0ZShzZXFDdXJzb3IucHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgIHNlcUN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gbWlncmF0aW9uIHRvIHZlcnNpb24gNCAocGFydCAxKVxuICBmdW5jdGlvbiBhZGRBdHRhY2hBbmRTZXFTdG9yZShkYikge1xuICAgIHZhciBhdHRBbmRTZXFTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKEFUVEFDSF9BTkRfU0VRX1NUT1JFLFxuICAgICAge2F1dG9JbmNyZW1lbnQ6IHRydWV9KTtcbiAgICBhdHRBbmRTZXFTdG9yZS5jcmVhdGVJbmRleCgnc2VxJywgJ3NlcScpO1xuICAgIGF0dEFuZFNlcVN0b3JlLmNyZWF0ZUluZGV4KCdkaWdlc3RTZXEnLCAnZGlnZXN0U2VxJywge3VuaXF1ZTogdHJ1ZX0pO1xuICB9XG5cbiAgLy8gbWlncmF0aW9uIHRvIHZlcnNpb24gNCAocGFydCAyKVxuICBmdW5jdGlvbiBtaWdyYXRlQXR0c0FuZFNlcXModHhuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShCWV9TRVFfU1RPUkUpO1xuICAgIHZhciBhdHRTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfU1RPUkUpO1xuICAgIHZhciBhdHRBbmRTZXFTdG9yZSA9IHR4bi5vYmplY3RTdG9yZShBVFRBQ0hfQU5EX1NFUV9TVE9SRSk7XG5cbiAgICAvLyBuZWVkIHRvIGFjdHVhbGx5IHBvcHVsYXRlIHRoZSB0YWJsZS4gdGhpcyBpcyB0aGUgZXhwZW5zaXZlIHBhcnQsXG4gICAgLy8gc28gYXMgYW4gb3B0aW1pemF0aW9uLCBjaGVjayBmaXJzdCB0aGF0IHRoaXMgZGF0YWJhc2UgZXZlblxuICAgIC8vIGNvbnRhaW5zIGF0dGFjaG1lbnRzXG4gICAgdmFyIHJlcSA9IGF0dFN0b3JlLmNvdW50KCk7XG4gICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY291bnQgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpOyAvLyBkb25lXG4gICAgICB9XG5cbiAgICAgIHNlcVN0b3JlLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpOyAvLyBkb25lXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvYyA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgdmFyIHNlcSA9IGN1cnNvci5wcmltYXJ5S2V5O1xuICAgICAgICB2YXIgYXR0cyA9IE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMgfHwge30pO1xuICAgICAgICB2YXIgZGlnZXN0TWFwID0ge307XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXR0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciBhdHQgPSBkb2MuX2F0dGFjaG1lbnRzW2F0dHNbal1dO1xuICAgICAgICAgIGRpZ2VzdE1hcFthdHQuZGlnZXN0XSA9IHRydWU7IC8vIHVuaXEgZGlnZXN0cywganVzdCBpbiBjYXNlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZ2VzdHMgPSBPYmplY3Qua2V5cyhkaWdlc3RNYXApO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgZGlnZXN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciBkaWdlc3QgPSBkaWdlc3RzW2pdO1xuICAgICAgICAgIGF0dEFuZFNlcVN0b3JlLnB1dCh7XG4gICAgICAgICAgICBzZXE6IHNlcSxcbiAgICAgICAgICAgIGRpZ2VzdFNlcTogZGlnZXN0ICsgJzo6JyArIHNlcVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgLy8gbWlncmF0aW9uIHRvIHZlcnNpb24gNVxuICAvLyBJbnN0ZWFkIG9mIHJlbHlpbmcgb24gb24tdGhlLWZseSBtaWdyYXRpb24gb2YgbWV0YWRhdGEsXG4gIC8vIHRoaXMgYnJpbmdzIHRoZSBkb2Mtc3RvcmUgdG8gaXRzIG1vZGVybiBmb3JtOlxuICAvLyAtIG1ldGFkYXRhLndpbm5pbmdyZXZcbiAgLy8gLSBtZXRhZGF0YS5zZXFcbiAgLy8gLSBzdHJpbmdpZnkgdGhlIG1ldGFkYXRhIHdoZW4gc3RvcmluZyBpdFxuICBmdW5jdGlvbiBtaWdyYXRlTWV0YWRhdGEodHhuKSB7XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVNZXRhZGF0YUNvbXBhdChzdG9yZWRPYmplY3QpIHtcbiAgICAgIGlmICghc3RvcmVkT2JqZWN0LmRhdGEpIHtcbiAgICAgICAgLy8gb2xkIGZvcm1hdCwgd2hlbiB3ZSBkaWRuJ3Qgc3RvcmUgaXQgc3RyaW5naWZpZWRcbiAgICAgICAgc3RvcmVkT2JqZWN0LmRlbGV0ZWQgPSBzdG9yZWRPYmplY3QuZGVsZXRlZE9yTG9jYWwgPT09ICcxJztcbiAgICAgICAgcmV0dXJuIHN0b3JlZE9iamVjdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWNvZGVNZXRhZGF0YShzdG9yZWRPYmplY3QpO1xuICAgIH1cblxuICAgIC8vIGVuc3VyZSB0aGF0IGV2ZXJ5IG1ldGFkYXRhIGhhcyBhIHdpbm5pbmdSZXYgYW5kIHNlcSxcbiAgICAvLyB3aGljaCB3YXMgcHJldmlvdXNseSBjcmVhdGVkIG9uLXRoZS1mbHkgYnV0IGJldHRlciB0byBtaWdyYXRlXG4gICAgdmFyIGJ5U2VxU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoQllfU0VRX1NUT1JFKTtcbiAgICB2YXIgZG9jU3RvcmUgPSB0eG4ub2JqZWN0U3RvcmUoRE9DX1NUT1JFKTtcbiAgICB2YXIgY3Vyc29yID0gZG9jU3RvcmUub3BlbkN1cnNvcigpO1xuICAgIGN1cnNvci5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG9uZVxuICAgICAgfVxuICAgICAgdmFyIG1ldGFkYXRhID0gZGVjb2RlTWV0YWRhdGFDb21wYXQoY3Vyc29yLnZhbHVlKTtcblxuICAgICAgbWV0YWRhdGEud2lubmluZ1JldiA9IG1ldGFkYXRhLndpbm5pbmdSZXYgfHxcbiAgICAgICAgd2lubmluZ1JldihtZXRhZGF0YSk7XG5cbiAgICAgIGZ1bmN0aW9uIGZldGNoTWV0YWRhdGFTZXEoKSB7XG4gICAgICAgIC8vIG1ldGFkYXRhLnNlcSB3YXMgYWRkZWQgcG9zdC0zLjIuMCwgc28gaWYgaXQncyBtaXNzaW5nLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGZldGNoIGl0IG1hbnVhbGx5XG4gICAgICAgIHZhciBzdGFydCA9IG1ldGFkYXRhLmlkICsgJzo6JztcbiAgICAgICAgdmFyIGVuZCA9IG1ldGFkYXRhLmlkICsgJzo6XFx1ZmZmZic7XG4gICAgICAgIHZhciByZXEgPSBieVNlcVN0b3JlLmluZGV4KCdfZG9jX2lkX3JldicpLm9wZW5DdXJzb3IoXG4gICAgICAgICAgSURCS2V5UmFuZ2UuYm91bmQoc3RhcnQsIGVuZCkpO1xuXG4gICAgICAgIHZhciBtZXRhZGF0YVNlcSA9IDA7XG4gICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLnNlcSA9IG1ldGFkYXRhU2VxO1xuICAgICAgICAgICAgcmV0dXJuIG9uR2V0TWV0YWRhdGFTZXEoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHNlcSA9IGN1cnNvci5wcmltYXJ5S2V5O1xuICAgICAgICAgIGlmIChzZXEgPiBtZXRhZGF0YVNlcSkge1xuICAgICAgICAgICAgbWV0YWRhdGFTZXEgPSBzZXE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbkdldE1ldGFkYXRhU2VxKCkge1xuICAgICAgICB2YXIgbWV0YWRhdGFUb1N0b3JlID0gZW5jb2RlTWV0YWRhdGEobWV0YWRhdGEsXG4gICAgICAgICAgbWV0YWRhdGEud2lubmluZ1JldiwgbWV0YWRhdGEuZGVsZXRlZCk7XG5cbiAgICAgICAgdmFyIHJlcSA9IGRvY1N0b3JlLnB1dChtZXRhZGF0YVRvU3RvcmUpO1xuICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YWRhdGEuc2VxKSB7XG4gICAgICAgIHJldHVybiBvbkdldE1ldGFkYXRhU2VxKCk7XG4gICAgICB9XG5cbiAgICAgIGZldGNoTWV0YWRhdGFTZXEoKTtcbiAgICB9O1xuXG4gIH1cblxuICBhcGkuX3JlbW90ZSA9IGZhbHNlO1xuICBhcGkudHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ2lkYic7XG4gIH07XG5cbiAgYXBpLl9pZCA9IHRvUHJvbWlzZShmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhudWxsLCBhcGkuX21ldGEuaW5zdGFuY2VJZCk7XG4gIH0pO1xuXG4gIGFwaS5fYnVsa0RvY3MgPSBmdW5jdGlvbiBpZGJfYnVsa0RvY3MocmVxLCByZXFPcHRzLCBjYWxsYmFjaykge1xuICAgIGlkYkJ1bGtEb2NzKG9wdHMsIHJlcSwgcmVxT3B0cywgYXBpLCBpZGIsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvLyBGaXJzdCB3ZSBsb29rIHVwIHRoZSBtZXRhZGF0YSBpbiB0aGUgaWRzIGRhdGFiYXNlLCB0aGVuIHdlIGZldGNoIHRoZVxuICAvLyBjdXJyZW50IHJldmlzaW9uKHMpIGZyb20gdGhlIGJ5IHNlcXVlbmNlIHN0b3JlXG4gIGFwaS5fZ2V0ID0gZnVuY3Rpb24gaWRiX2dldChpZCwgb3B0cywgY2FsbGJhY2spIHtcbiAgICB2YXIgZG9jO1xuICAgIHZhciBtZXRhZGF0YTtcbiAgICB2YXIgZXJyO1xuICAgIHZhciB0eG4gPSBvcHRzLmN0eDtcbiAgICBpZiAoIXR4bikge1xuICAgICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsXG4gICAgICAgIFtET0NfU1RPUkUsIEJZX1NFUV9TVE9SRSwgQVRUQUNIX1NUT1JFXSwgJ3JlYWRvbmx5Jyk7XG4gICAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHhuID0gdHhuUmVzdWx0LnR4bjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIHtkb2M6IGRvYywgbWV0YWRhdGE6IG1ldGFkYXRhLCBjdHg6IHR4bn0pO1xuICAgIH1cblxuICAgIHR4bi5vYmplY3RTdG9yZShET0NfU1RPUkUpLmdldChpZCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIG1ldGFkYXRhID0gZGVjb2RlTWV0YWRhdGEoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgIC8vIHdlIGNhbiBkZXRlcm1pbmUgdGhlIHJlc3VsdCBoZXJlIGlmOlxuICAgICAgLy8gMS4gdGhlcmUgaXMgbm8gc3VjaCBkb2N1bWVudFxuICAgICAgLy8gMi4gdGhlIGRvY3VtZW50IGlzIGRlbGV0ZWQgYW5kIHdlIGRvbid0IGFzayBhYm91dCBzcGVjaWZpYyByZXZcbiAgICAgIC8vIFdoZW4gd2UgYXNrIHdpdGggb3B0cy5yZXYgd2UgZXhwZWN0IHRoZSBhbnN3ZXIgdG8gYmUgZWl0aGVyXG4gICAgICAvLyBkb2MgKHBvc3NpYmx5IHdpdGggX2RlbGV0ZWQ9dHJ1ZSkgb3IgbWlzc2luZyBlcnJvclxuICAgICAgaWYgKCFtZXRhZGF0YSkge1xuICAgICAgICBlcnIgPSBjcmVhdGVFcnJvcihNSVNTSU5HX0RPQywgJ21pc3NpbmcnKTtcbiAgICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV2JCQxO1xuICAgICAgaWYgKCFvcHRzLnJldikge1xuICAgICAgICByZXYkJDEgPSBtZXRhZGF0YS53aW5uaW5nUmV2O1xuICAgICAgICB2YXIgZGVsZXRlZCA9IGlzRGVsZXRlZChtZXRhZGF0YSk7XG4gICAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgICAgZXJyID0gY3JlYXRlRXJyb3IoTUlTU0lOR19ET0MsIFwiZGVsZXRlZFwiKTtcbiAgICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldiQkMSA9IG9wdHMubGF0ZXN0ID8gbGF0ZXN0KG9wdHMucmV2LCBtZXRhZGF0YSkgOiBvcHRzLnJldjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9iamVjdFN0b3JlID0gdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSk7XG4gICAgICB2YXIga2V5ID0gbWV0YWRhdGEuaWQgKyAnOjonICsgcmV2JCQxO1xuXG4gICAgICBvYmplY3RTdG9yZS5pbmRleCgnX2RvY19pZF9yZXYnKS5nZXQoa2V5KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb2MgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICBkb2MgPSBkZWNvZGVEb2MoZG9jKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRvYykge1xuICAgICAgICAgIGVyciA9IGNyZWF0ZUVycm9yKE1JU1NJTkdfRE9DLCAnbWlzc2luZycpO1xuICAgICAgICAgIHJldHVybiBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICBhcGkuX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiAoZG9jSWQsIGF0dGFjaElkLCBhdHRhY2htZW50LCBvcHRzLCBjYWxsYmFjaykge1xuICAgIHZhciB0eG47XG4gICAgaWYgKG9wdHMuY3R4KSB7XG4gICAgICB0eG4gPSBvcHRzLmN0eDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHR4blJlc3VsdCA9IG9wZW5UcmFuc2FjdGlvblNhZmVseShpZGIsXG4gICAgICAgIFtET0NfU1RPUkUsIEJZX1NFUV9TVE9SRSwgQVRUQUNIX1NUT1JFXSwgJ3JlYWRvbmx5Jyk7XG4gICAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHhuID0gdHhuUmVzdWx0LnR4bjtcbiAgICB9XG4gICAgdmFyIGRpZ2VzdCA9IGF0dGFjaG1lbnQuZGlnZXN0O1xuICAgIHZhciB0eXBlID0gYXR0YWNobWVudC5jb250ZW50X3R5cGU7XG5cbiAgICB0eG4ub2JqZWN0U3RvcmUoQVRUQUNIX1NUT1JFKS5nZXQoZGlnZXN0KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGJvZHkgPSBlLnRhcmdldC5yZXN1bHQuYm9keTtcbiAgICAgIHJlYWRCbG9iRGF0YShib2R5LCB0eXBlLCBvcHRzLmJpbmFyeSwgZnVuY3Rpb24gKGJsb2JEYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGJsb2JEYXRhKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgYXBpLl9pbmZvID0gZnVuY3Rpb24gaWRiX2luZm8oY2FsbGJhY2spIHtcbiAgICB2YXIgdXBkYXRlU2VxO1xuICAgIHZhciBkb2NDb3VudDtcblxuICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBbTUVUQV9TVE9SRSwgQllfU0VRX1NUT1JFXSwgJ3JlYWRvbmx5Jyk7XG4gICAgaWYgKHR4blJlc3VsdC5lcnJvcikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHZhciB0eG4gPSB0eG5SZXN1bHQudHhuO1xuICAgIHR4bi5vYmplY3RTdG9yZShNRVRBX1NUT1JFKS5nZXQoTUVUQV9TVE9SRSkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvY0NvdW50ID0gZS50YXJnZXQucmVzdWx0LmRvY0NvdW50O1xuICAgIH07XG4gICAgdHhuLm9iamVjdFN0b3JlKEJZX1NFUV9TVE9SRSkub3BlbkN1cnNvcihudWxsLCAncHJldicpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgdXBkYXRlU2VxID0gY3Vyc29yID8gY3Vyc29yLmtleSA6IDA7XG4gICAgfTtcblxuICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwge1xuICAgICAgICBkb2NfY291bnQ6IGRvY0NvdW50LFxuICAgICAgICB1cGRhdGVfc2VxOiB1cGRhdGVTZXEsXG4gICAgICAgIC8vIGZvciBkZWJ1Z2dpbmdcbiAgICAgICAgaWRiX2F0dGFjaG1lbnRfZm9ybWF0OiAoYXBpLl9tZXRhLmJsb2JTdXBwb3J0ID8gJ2JpbmFyeScgOiAnYmFzZTY0JylcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgYXBpLl9hbGxEb2NzID0gZnVuY3Rpb24gaWRiX2FsbERvY3Mob3B0cywgY2FsbGJhY2spIHtcbiAgICBpZGJBbGxEb2NzKG9wdHMsIGlkYiwgY2FsbGJhY2spO1xuICB9O1xuXG4gIGFwaS5fY2hhbmdlcyA9IGZ1bmN0aW9uIGlkYkNoYW5nZXMob3B0cykge1xuICAgIHJldHVybiBjaGFuZ2VzKG9wdHMsIGFwaSwgZGJOYW1lLCBpZGIpO1xuICB9O1xuXG4gIGFwaS5fY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0luZGV4ZWREQi9JREJEYXRhYmFzZSNjbG9zZVxuICAgIC8vIFwiUmV0dXJucyBpbW1lZGlhdGVseSBhbmQgY2xvc2VzIHRoZSBjb25uZWN0aW9uIGluIGEgc2VwYXJhdGUgdGhyZWFkLi4uXCJcbiAgICBpZGIuY2xvc2UoKTtcbiAgICBjYWNoZWREQnMuZGVsZXRlKGRiTmFtZSk7XG4gICAgY2FsbGJhY2soKTtcbiAgfTtcblxuICBhcGkuX2dldFJldmlzaW9uVHJlZSA9IGZ1bmN0aW9uIChkb2NJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYiwgW0RPQ19TVE9SRV0sICdyZWFkb25seScpO1xuICAgIGlmICh0eG5SZXN1bHQuZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgIH1cbiAgICB2YXIgdHhuID0gdHhuUmVzdWx0LnR4bjtcbiAgICB2YXIgcmVxID0gdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSkuZ2V0KGRvY0lkKTtcbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgZG9jID0gZGVjb2RlTWV0YWRhdGEoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBpZiAoIWRvYykge1xuICAgICAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0RPQykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZG9jLnJldl90cmVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyByZXZpc2lvbnMgb2YgZG9jdW1lbnQgZG9jSWRcbiAgLy8gd2hpY2ggYXJlIGxpc3RlZCBpbiByZXZzIGFuZCBzZXRzIHRoaXMgZG9jdW1lbnRcbiAgLy8gcmV2aXNpb24gdG8gdG8gcmV2X3RyZWVcbiAgYXBpLl9kb0NvbXBhY3Rpb24gPSBmdW5jdGlvbiAoZG9jSWQsIHJldnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHN0b3JlcyA9IFtcbiAgICAgIERPQ19TVE9SRSxcbiAgICAgIEJZX1NFUV9TVE9SRSxcbiAgICAgIEFUVEFDSF9TVE9SRSxcbiAgICAgIEFUVEFDSF9BTkRfU0VRX1NUT1JFXG4gICAgXTtcbiAgICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYiwgc3RvcmVzLCAncmVhZHdyaXRlJyk7XG4gICAgaWYgKHR4blJlc3VsdC5lcnJvcikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHR4blJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHZhciB0eG4gPSB0eG5SZXN1bHQudHhuO1xuXG4gICAgdmFyIGRvY1N0b3JlID0gdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSk7XG5cbiAgICBkb2NTdG9yZS5nZXQoZG9jSWQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG1ldGFkYXRhID0gZGVjb2RlTWV0YWRhdGEoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICB0cmF2ZXJzZVJldlRyZWUobWV0YWRhdGEucmV2X3RyZWUsIGZ1bmN0aW9uIChpc0xlYWYsIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldkhhc2gsIGN0eCwgb3B0cykge1xuICAgICAgICB2YXIgcmV2JCQxID0gcG9zICsgJy0nICsgcmV2SGFzaDtcbiAgICAgICAgaWYgKHJldnMuaW5kZXhPZihyZXYkJDEpICE9PSAtMSkge1xuICAgICAgICAgIG9wdHMuc3RhdHVzID0gJ21pc3NpbmcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbXBhY3RSZXZzKHJldnMsIGRvY0lkLCB0eG4pO1xuICAgICAgdmFyIHdpbm5pbmdSZXYkJDEgPSBtZXRhZGF0YS53aW5uaW5nUmV2O1xuICAgICAgdmFyIGRlbGV0ZWQgPSBtZXRhZGF0YS5kZWxldGVkO1xuICAgICAgdHhuLm9iamVjdFN0b3JlKERPQ19TVE9SRSkucHV0KFxuICAgICAgICBlbmNvZGVNZXRhZGF0YShtZXRhZGF0YSwgd2lubmluZ1JldiQkMSwgZGVsZXRlZCkpO1xuICAgIH07XG4gICAgdHhuLm9uYWJvcnQgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gIH07XG5cblxuICBhcGkuX2dldExvY2FsID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xuICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBbTE9DQUxfU1RPUkVdLCAncmVhZG9ubHknKTtcbiAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodHhuUmVzdWx0LmVycm9yKTtcbiAgICB9XG4gICAgdmFyIHR4ID0gdHhuUmVzdWx0LnR4bjtcbiAgICB2YXIgcmVxID0gdHgub2JqZWN0U3RvcmUoTE9DQUxfU1RPUkUpLmdldChpZCk7XG5cbiAgICByZXEub25lcnJvciA9IGlkYkVycm9yKGNhbGxiYWNrKTtcbiAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBkb2MgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoIWRvYykge1xuICAgICAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0RPQykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGRvY1snX2RvY19pZF9yZXYnXTsgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZG9jKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGFwaS5fcHV0TG9jYWwgPSBmdW5jdGlvbiAoZG9jLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBkZWxldGUgZG9jLl9yZXZpc2lvbnM7IC8vIGlnbm9yZSB0aGlzLCB0cnVzdCB0aGUgcmV2XG4gICAgdmFyIG9sZFJldiA9IGRvYy5fcmV2O1xuICAgIHZhciBpZCA9IGRvYy5faWQ7XG4gICAgaWYgKCFvbGRSZXYpIHtcbiAgICAgIGRvYy5fcmV2ID0gJzAtMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5fcmV2ID0gJzAtJyArIChwYXJzZUludChvbGRSZXYuc3BsaXQoJy0nKVsxXSwgMTApICsgMSk7XG4gICAgfVxuXG4gICAgdmFyIHR4ID0gb3B0cy5jdHg7XG4gICAgdmFyIHJldDtcbiAgICBpZiAoIXR4KSB7XG4gICAgICB2YXIgdHhuUmVzdWx0ID0gb3BlblRyYW5zYWN0aW9uU2FmZWx5KGlkYiwgW0xPQ0FMX1NUT1JFXSwgJ3JlYWR3cml0ZScpO1xuICAgICAgaWYgKHR4blJlc3VsdC5lcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sodHhuUmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICAgIHR4ID0gdHhuUmVzdWx0LnR4bjtcbiAgICAgIHR4Lm9uZXJyb3IgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gICAgICB0eC5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgb1N0b3JlID0gdHgub2JqZWN0U3RvcmUoTE9DQUxfU1RPUkUpO1xuICAgIHZhciByZXE7XG4gICAgaWYgKG9sZFJldikge1xuICAgICAgcmVxID0gb1N0b3JlLmdldChpZCk7XG4gICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9sZERvYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgaWYgKCFvbGREb2MgfHwgb2xkRG9jLl9yZXYgIT09IG9sZFJldikge1xuICAgICAgICAgIGNhbGxiYWNrKGNyZWF0ZUVycm9yKFJFVl9DT05GTElDVCkpO1xuICAgICAgICB9IGVsc2UgeyAvLyB1cGRhdGVcbiAgICAgICAgICB2YXIgcmVxID0gb1N0b3JlLnB1dChkb2MpO1xuICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXQgPSB7b2s6IHRydWUsIGlkOiBkb2MuX2lkLCByZXY6IGRvYy5fcmV2fTtcbiAgICAgICAgICAgIGlmIChvcHRzLmN0eCkgeyAvLyByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7IC8vIG5ldyBkb2NcbiAgICAgIHJlcSA9IG9TdG9yZS5hZGQoZG9jKTtcbiAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc3RyYWludCBlcnJvciwgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY2FsbGJhY2soY3JlYXRlRXJyb3IoUkVWX0NPTkZMSUNUKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gYXZvaWQgdHJhbnNhY3Rpb24gYWJvcnRcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gYXZvaWQgdHJhbnNhY3Rpb24gb25lcnJvclxuICAgICAgfTtcbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldCA9IHtvazogdHJ1ZSwgaWQ6IGRvYy5faWQsIHJldjogZG9jLl9yZXZ9O1xuICAgICAgICBpZiAob3B0cy5jdHgpIHsgLy8gcmV0dXJuIGltbWVkaWF0ZWx5XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgYXBpLl9yZW1vdmVMb2NhbCA9IGZ1bmN0aW9uIChkb2MsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciB0eCA9IG9wdHMuY3R4O1xuICAgIGlmICghdHgpIHtcbiAgICAgIHZhciB0eG5SZXN1bHQgPSBvcGVuVHJhbnNhY3Rpb25TYWZlbHkoaWRiLCBbTE9DQUxfU1RPUkVdLCAncmVhZHdyaXRlJyk7XG4gICAgICBpZiAodHhuUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayh0eG5SZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHggPSB0eG5SZXN1bHQudHhuO1xuICAgICAgdHgub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdmFyIGlkID0gZG9jLl9pZDtcbiAgICB2YXIgb1N0b3JlID0gdHgub2JqZWN0U3RvcmUoTE9DQUxfU1RPUkUpO1xuICAgIHZhciByZXEgPSBvU3RvcmUuZ2V0KGlkKTtcblxuICAgIHJlcS5vbmVycm9yID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9sZERvYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghb2xkRG9jIHx8IG9sZERvYy5fcmV2ICE9PSBkb2MuX3Jldikge1xuICAgICAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihNSVNTSU5HX0RPQykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb1N0b3JlLmRlbGV0ZShpZCk7XG4gICAgICAgIHJldCA9IHtvazogdHJ1ZSwgaWQ6IGlkLCByZXY6ICcwLTAnfTtcbiAgICAgICAgaWYgKG9wdHMuY3R4KSB7IC8vIHJldHVybiBpbW1lZGlhdGVseVxuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGFwaS5fZGVzdHJveSA9IGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICAgIGNoYW5nZXNIYW5kbGVyLnJlbW92ZUFsbExpc3RlbmVycyhkYk5hbWUpO1xuXG4gICAgLy9DbG9zZSBvcGVuIHJlcXVlc3QgZm9yIFwiZGJOYW1lXCIgZGF0YWJhc2UgdG8gZml4IGllIGRlbGF5LlxuICAgIHZhciBvcGVuUmVxID0gb3BlblJlcUxpc3QuZ2V0KGRiTmFtZSk7XG4gICAgaWYgKG9wZW5SZXEgJiYgb3BlblJlcS5yZXN1bHQpIHtcbiAgICAgIG9wZW5SZXEucmVzdWx0LmNsb3NlKCk7XG4gICAgICBjYWNoZWREQnMuZGVsZXRlKGRiTmFtZSk7XG4gICAgfVxuICAgIHZhciByZXEgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoZGJOYW1lKTtcblxuICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvL1JlbW92ZSBvcGVuIHJlcXVlc3QgZnJvbSB0aGUgbGlzdC5cbiAgICAgIG9wZW5SZXFMaXN0LmRlbGV0ZShkYk5hbWUpO1xuICAgICAgaWYgKGhhc0xvY2FsU3RvcmFnZSgpICYmIChkYk5hbWUgaW4gbG9jYWxTdG9yYWdlKSkge1xuICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW2RiTmFtZV07XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCB7ICdvayc6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIHJlcS5vbmVycm9yID0gaWRiRXJyb3IoY2FsbGJhY2spO1xuICB9O1xuXG4gIHZhciBjYWNoZWQgPSBjYWNoZWREQnMuZ2V0KGRiTmFtZSk7XG5cbiAgaWYgKGNhY2hlZCkge1xuICAgIGlkYiA9IGNhY2hlZC5pZGI7XG4gICAgYXBpLl9tZXRhID0gY2FjaGVkLmdsb2JhbDtcbiAgICByZXR1cm4gaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGFwaSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCBBREFQVEVSX1ZFUlNJT04pO1xuICBvcGVuUmVxTGlzdC5zZXQoZGJOYW1lLCByZXEpO1xuXG4gIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkYiA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICBpZiAoZS5vbGRWZXJzaW9uIDwgMSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNjaGVtYShkYik7IC8vIG5ldyBkYiwgaW5pdGlhbCBzY2hlbWFcbiAgICB9XG4gICAgLy8gZG8gbWlncmF0aW9uc1xuXG4gICAgdmFyIHR4biA9IGUuY3VycmVudFRhcmdldC50cmFuc2FjdGlvbjtcbiAgICAvLyB0aGVzZSBtaWdyYXRpb25zIGhhdmUgdG8gYmUgZG9uZSBpbiB0aGlzIGZ1bmN0aW9uLCBiZWZvcmVcbiAgICAvLyBjb250cm9sIGlzIHJldHVybmVkIHRvIHRoZSBldmVudCBsb29wLCBiZWNhdXNlIEluZGV4ZWREQlxuXG4gICAgaWYgKGUub2xkVmVyc2lvbiA8IDMpIHtcbiAgICAgIGNyZWF0ZUxvY2FsU3RvcmVTY2hlbWEoZGIpOyAvLyB2MiAtPiB2M1xuICAgIH1cbiAgICBpZiAoZS5vbGRWZXJzaW9uIDwgNCkge1xuICAgICAgYWRkQXR0YWNoQW5kU2VxU3RvcmUoZGIpOyAvLyB2MyAtPiB2NFxuICAgIH1cblxuICAgIHZhciBtaWdyYXRpb25zID0gW1xuICAgICAgYWRkRGVsZXRlZE9yTG9jYWxJbmRleCwgLy8gdjEgLT4gdjJcbiAgICAgIG1pZ3JhdGVMb2NhbFN0b3JlLCAgICAgIC8vIHYyIC0+IHYzXG4gICAgICBtaWdyYXRlQXR0c0FuZFNlcXMsICAgICAvLyB2MyAtPiB2NFxuICAgICAgbWlncmF0ZU1ldGFkYXRhICAgICAgICAgLy8gdjQgLT4gdjVcbiAgICBdO1xuXG4gICAgdmFyIGkgPSBlLm9sZFZlcnNpb247XG5cbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdmFyIG1pZ3JhdGlvbiA9IG1pZ3JhdGlvbnNbaSAtIDFdO1xuICAgICAgaSsrO1xuICAgICAgaWYgKG1pZ3JhdGlvbikge1xuICAgICAgICBtaWdyYXRpb24odHhuLCBuZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH07XG5cbiAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICBpZGIgPSBlLnRhcmdldC5yZXN1bHQ7XG5cbiAgICBpZGIub252ZXJzaW9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWRiLmNsb3NlKCk7XG4gICAgICBjYWNoZWREQnMuZGVsZXRlKGRiTmFtZSk7XG4gICAgfTtcblxuICAgIGlkYi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGd1YXJkZWRDb25zb2xlKCdlcnJvcicsICdEYXRhYmFzZSBoYXMgYSBnbG9iYWwgZmFpbHVyZScsIGUudGFyZ2V0LmVycm9yKTtcbiAgICAgIGlkYi5jbG9zZSgpO1xuICAgICAgY2FjaGVkREJzLmRlbGV0ZShkYk5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBEbyBhIGZldyBzZXR1cCBvcGVyYXRpb25zIChpbiBwYXJhbGxlbCBhcyBtdWNoIGFzIHBvc3NpYmxlKTpcbiAgICAvLyAxLiBGZXRjaCBtZXRhIGRvY1xuICAgIC8vIDIuIENoZWNrIGJsb2Igc3VwcG9ydFxuICAgIC8vIDMuIENhbGN1bGF0ZSBkb2NDb3VudFxuICAgIC8vIDQuIEdlbmVyYXRlIGFuIGluc3RhbmNlSWQgaWYgbmVjZXNzYXJ5XG4gICAgLy8gNS4gU3RvcmUgZG9jQ291bnQgYW5kIGluc3RhbmNlSWQgb24gbWV0YSBkb2NcblxuICAgIHZhciB0eG4gPSBpZGIudHJhbnNhY3Rpb24oW1xuICAgICAgTUVUQV9TVE9SRSxcbiAgICAgIERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUsXG4gICAgICBET0NfU1RPUkVcbiAgICBdLCAncmVhZHdyaXRlJyk7XG5cbiAgICB2YXIgc3RvcmVkTWV0YURvYyA9IGZhbHNlO1xuICAgIHZhciBtZXRhRG9jO1xuICAgIHZhciBkb2NDb3VudDtcbiAgICB2YXIgYmxvYlN1cHBvcnQ7XG4gICAgdmFyIGluc3RhbmNlSWQ7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZVNldHVwKCkge1xuICAgICAgaWYgKHR5cGVvZiBibG9iU3VwcG9ydCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXN0b3JlZE1ldGFEb2MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLl9tZXRhID0ge1xuICAgICAgICBuYW1lOiBkYk5hbWUsXG4gICAgICAgIGluc3RhbmNlSWQ6IGluc3RhbmNlSWQsXG4gICAgICAgIGJsb2JTdXBwb3J0OiBibG9iU3VwcG9ydFxuICAgICAgfTtcblxuICAgICAgY2FjaGVkREJzLnNldChkYk5hbWUsIHtcbiAgICAgICAgaWRiOiBpZGIsXG4gICAgICAgIGdsb2JhbDogYXBpLl9tZXRhXG4gICAgICB9KTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGFwaSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVNZXRhRG9jSWZSZWFkeSgpIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jQ291bnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBtZXRhRG9jID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2VLZXkgPSBkYk5hbWUgKyAnX2lkJztcbiAgICAgIGlmIChpbnN0YW5jZUtleSBpbiBtZXRhRG9jKSB7XG4gICAgICAgIGluc3RhbmNlSWQgPSBtZXRhRG9jW2luc3RhbmNlS2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGFEb2NbaW5zdGFuY2VLZXldID0gaW5zdGFuY2VJZCA9IHV1aWQoKTtcbiAgICAgIH1cbiAgICAgIG1ldGFEb2MuZG9jQ291bnQgPSBkb2NDb3VudDtcbiAgICAgIHR4bi5vYmplY3RTdG9yZShNRVRBX1NUT1JFKS5wdXQobWV0YURvYyk7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBmZXRjaCBvciBnZW5lcmF0ZSB0aGUgaW5zdGFuY2VJZFxuICAgIC8vXG4gICAgdHhuLm9iamVjdFN0b3JlKE1FVEFfU1RPUkUpLmdldChNRVRBX1NUT1JFKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbWV0YURvYyA9IGUudGFyZ2V0LnJlc3VsdCB8fCB7IGlkOiBNRVRBX1NUT1JFIH07XG4gICAgICBzdG9yZU1ldGFEb2NJZlJlYWR5KCk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gY291bnREb2NzXG4gICAgLy9cbiAgICBjb3VudERvY3ModHhuLCBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgIGRvY0NvdW50ID0gY291bnQ7XG4gICAgICBzdG9yZU1ldGFEb2NJZlJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICAvL1xuICAgIC8vIGNoZWNrIGJsb2Igc3VwcG9ydFxuICAgIC8vXG4gICAgaWYgKCFibG9iU3VwcG9ydFByb21pc2UpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBibG9iIHN1cHBvcnQgaXMgb25seSBjaGVja2VkIG9uY2VcbiAgICAgIGJsb2JTdXBwb3J0UHJvbWlzZSA9IGNoZWNrQmxvYlN1cHBvcnQodHhuKTtcbiAgICB9XG5cbiAgICBibG9iU3VwcG9ydFByb21pc2UudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICBibG9iU3VwcG9ydCA9IHZhbDtcbiAgICAgIGNvbXBsZXRlU2V0dXAoKTtcbiAgICB9KTtcblxuICAgIC8vIG9ubHkgd2hlbiB0aGUgbWV0YWRhdGEgcHV0IHRyYW5zYWN0aW9uIGhhcyBjb21wbGV0ZWQsXG4gICAgLy8gY29uc2lkZXIgdGhlIHNldHVwIGRvbmVcbiAgICB0eG4ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3JlZE1ldGFEb2MgPSB0cnVlO1xuICAgICAgY29tcGxldGVTZXR1cCgpO1xuICAgIH07XG4gICAgdHhuLm9uYWJvcnQgPSBpZGJFcnJvcihjYWxsYmFjayk7XG4gIH07XG5cbiAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtc2cgPSBlLnRhcmdldC5lcnJvciAmJiBlLnRhcmdldC5lcnJvci5tZXNzYWdlO1xuXG4gICAgaWYgKCFtc2cpIHtcbiAgICAgIG1zZyA9ICdGYWlsZWQgdG8gb3BlbiBpbmRleGVkREIsIGFyZSB5b3UgaW4gcHJpdmF0ZSBicm93c2luZyBtb2RlPyc7XG4gICAgfSBlbHNlIGlmIChtc2cuaW5kZXhPZihcInN0b3JlZCBkYXRhYmFzZSBpcyBhIGhpZ2hlciB2ZXJzaW9uXCIpICE9PSAtMSkge1xuICAgICAgbXNnID0gbmV3IEVycm9yKCdUaGlzIERCIHdhcyBjcmVhdGVkIHdpdGggdGhlIG5ld2VyIFwiaW5kZXhlZGRiXCIgYWRhcHRlciwgYnV0IHlvdSBhcmUgdHJ5aW5nIHRvIG9wZW4gaXQgd2l0aCB0aGUgb2xkZXIgXCJpZGJcIiBhZGFwdGVyJyk7XG4gICAgfVxuXG4gICAgZ3VhcmRlZENvbnNvbGUoJ2Vycm9yJywgbXNnKTtcbiAgICBjYWxsYmFjayhjcmVhdGVFcnJvcihJREJfRVJST1IsIG1zZykpO1xuICB9O1xufVxuXG5JZGJQb3VjaC52YWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gRm9sbG93aW5nICM3MDg1IGJ1Z2d5IGlkYiB2ZXJzaW9ucyAodHlwaWNhbGx5IFNhZmFyaSA8IDEwLjEpIGFyZVxuICAvLyBjb25zaWRlcmVkIHZhbGlkLlxuXG4gIC8vIE9uIEZpcmVmb3ggU2VjdXJpdHlFcnJvciBpcyB0aHJvd24gd2hpbGUgcmVmZXJlbmNpbmcgaW5kZXhlZERCIGlmIGNvb2tpZXNcbiAgLy8gYXJlIG5vdCBhbGxvd2VkLiBgdHlwZW9mIGluZGV4ZWREQmAgYWxzbyB0cmlnZ2VycyB0aGUgZXJyb3IuXG4gIHRyeSB7XG4gICAgLy8gc29tZSBvdXRkYXRlZCBpbXBsZW1lbnRhdGlvbnMgb2YgSURCIHRoYXQgYXBwZWFyIG9uIFNhbXN1bmdcbiAgICAvLyBhbmQgSFRDIEFuZHJvaWQgZGV2aWNlcyA8NC40IGFyZSBtaXNzaW5nIElEQktleVJhbmdlXG4gICAgcmV0dXJuIHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIElEQlBvdWNoIChQb3VjaERCKSB7XG4gIFBvdWNoREIuYWRhcHRlcignaWRiJywgSWRiUG91Y2gsIHRydWUpO1xufVxuXG4vLyBkZWFkIHNpbXBsZSBwcm9taXNlIHBvb2wsIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS90aW1kcC9lczYtcHJvbWlzZS1wb29sXG4vLyBidXQgbXVjaCBzbWFsbGVyIGluIGNvZGUgc2l6ZS4gbGltaXRzIHRoZSBudW1iZXIgb2YgY29uY3VycmVudCBwcm9taXNlcyB0aGF0IGFyZSBleGVjdXRlZFxuXG5cbmZ1bmN0aW9uIHBvb2wocHJvbWlzZUZhY3RvcmllcywgbGltaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcnVubmluZyA9IDA7XG4gICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgIHZhciBkb25lID0gMDtcbiAgICB2YXIgbGVuID0gcHJvbWlzZUZhY3Rvcmllcy5sZW5ndGg7XG4gICAgdmFyIGVycjtcblxuICAgIGZ1bmN0aW9uIHJ1bk5leHQoKSB7XG4gICAgICBydW5uaW5nKys7XG4gICAgICBwcm9taXNlRmFjdG9yaWVzW2N1cnJlbnQrK10oKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9OZXh0KCkge1xuICAgICAgaWYgKCsrZG9uZSA9PT0gbGVuKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydW5OZXh0QmF0Y2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICBydW5uaW5nLS07XG4gICAgICBkb05leHQoKTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZ1bmN0aW9uIG9uRXJyb3IodGhpc0Vycikge1xuICAgICAgcnVubmluZy0tO1xuICAgICAgZXJyID0gZXJyIHx8IHRoaXNFcnI7XG4gICAgICBkb05leHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5OZXh0QmF0Y2goKSB7XG4gICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmIGN1cnJlbnQgPCBsZW4pIHtcbiAgICAgICAgcnVuTmV4dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJ1bk5leHRCYXRjaCgpO1xuICB9KTtcbn1cblxudmFyIENIQU5HRVNfQkFUQ0hfU0laRSA9IDI1O1xudmFyIE1BWF9TSU1VTFRBTkVPVVNfUkVWUyA9IDUwO1xudmFyIENIQU5HRVNfVElNRU9VVF9CVUZGRVIgPSA1MDAwO1xudmFyIERFRkFVTFRfSEVBUlRCRUFUID0gMTAwMDA7XG5cbnZhciBzdXBwb3J0c0J1bGtHZXRNYXAgPSB7fTtcblxuZnVuY3Rpb24gcmVhZEF0dGFjaG1lbnRzQXNCbG9iT3JCdWZmZXIocm93KSB7XG4gIHZhciBkb2MgPSByb3cuZG9jIHx8IHJvdy5vaztcbiAgdmFyIGF0dHMgPSBkb2MgJiYgZG9jLl9hdHRhY2htZW50cztcbiAgaWYgKCFhdHRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIE9iamVjdC5rZXlzKGF0dHMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgdmFyIGF0dCA9IGF0dHNbZmlsZW5hbWVdO1xuICAgIGF0dC5kYXRhID0gYjY0VG9CbHVmZmVyKGF0dC5kYXRhLCBhdHQuY29udGVudF90eXBlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZURvY0lkKGlkKSB7XG4gIGlmICgvXl9kZXNpZ24vLnRlc3QoaWQpKSB7XG4gICAgcmV0dXJuICdfZGVzaWduLycgKyBlbmNvZGVVUklDb21wb25lbnQoaWQuc2xpY2UoOCkpO1xuICB9XG4gIGlmICgvXl9sb2NhbC8udGVzdChpZCkpIHtcbiAgICByZXR1cm4gJ19sb2NhbC8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnNsaWNlKDcpKTtcbiAgfVxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkKTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc0F0dGFjaG1lbnRzJDEoZG9jKSB7XG4gIGlmICghZG9jLl9hdHRhY2htZW50cyB8fCAhT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cykpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgYXR0YWNobWVudCA9IGRvYy5fYXR0YWNobWVudHNba2V5XTtcbiAgICBpZiAoYXR0YWNobWVudC5kYXRhICYmIHR5cGVvZiBhdHRhY2htZW50LmRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgYmxvYlRvQmFzZTY0KGF0dGFjaG1lbnQuZGF0YSwgcmVzb2x2ZSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChiNjQpIHtcbiAgICAgICAgYXR0YWNobWVudC5kYXRhID0gYjY0O1xuICAgICAgfSk7XG4gICAgfVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGhhc1VybFByZWZpeChvcHRzKSB7XG4gIGlmICghb3B0cy5wcmVmaXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvY29sID0gcGFyc2VVcmkob3B0cy5wcmVmaXgpLnByb3RvY29sO1xuICByZXR1cm4gcHJvdG9jb2wgPT09ICdodHRwJyB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzJztcbn1cblxuLy8gR2V0IGFsbCB0aGUgaW5mb3JtYXRpb24geW91IHBvc3NpYmx5IGNhbiBhYm91dCB0aGUgVVJJIGdpdmVuIGJ5IG5hbWUgYW5kXG4vLyByZXR1cm4gaXQgYXMgYSBzdWl0YWJsZSBvYmplY3QuXG5mdW5jdGlvbiBnZXRIb3N0KG5hbWUsIG9wdHMpIHtcbiAgLy8gZW5jb2RlIGRiIG5hbWUgaWYgb3B0cy5wcmVmaXggaXMgYSB1cmwgKCM1NTc0KVxuICBpZiAoaGFzVXJsUHJlZml4KG9wdHMpKSB7XG4gICAgdmFyIGRiTmFtZSA9IG9wdHMubmFtZS5zdWJzdHIob3B0cy5wcmVmaXgubGVuZ3RoKTtcbiAgICAvLyBFbnN1cmUgcHJlZml4IGhhcyBhIHRyYWlsaW5nIHNsYXNoXG4gICAgdmFyIHByZWZpeCA9IG9wdHMucHJlZml4LnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbiAgICBuYW1lID0gcHJlZml4ICsgZW5jb2RlVVJJQ29tcG9uZW50KGRiTmFtZSk7XG4gIH1cblxuICB2YXIgdXJpID0gcGFyc2VVcmkobmFtZSk7XG4gIGlmICh1cmkudXNlciB8fCB1cmkucGFzc3dvcmQpIHtcbiAgICB1cmkuYXV0aCA9IHt1c2VybmFtZTogdXJpLnVzZXIsIHBhc3N3b3JkOiB1cmkucGFzc3dvcmR9O1xuICB9XG5cbiAgLy8gU3BsaXQgdGhlIHBhdGggcGFydCBvZiB0aGUgVVJJIGludG8gcGFydHMgdXNpbmcgJy8nIGFzIHRoZSBkZWxpbWl0ZXJcbiAgLy8gYWZ0ZXIgcmVtb3ZpbmcgYW55IGxlYWRpbmcgJy8nIGFuZCBhbnkgdHJhaWxpbmcgJy8nXG4gIHZhciBwYXJ0cyA9IHVyaS5wYXRoLnJlcGxhY2UoLyheXFwvfFxcLyQpL2csICcnKS5zcGxpdCgnLycpO1xuXG4gIHVyaS5kYiA9IHBhcnRzLnBvcCgpO1xuICAvLyBQcmV2ZW50IGRvdWJsZSBlbmNvZGluZyBvZiBVUkkgY29tcG9uZW50XG4gIGlmICh1cmkuZGIuaW5kZXhPZignJScpID09PSAtMSkge1xuICAgIHVyaS5kYiA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmkuZGIpO1xuICB9XG5cbiAgdXJpLnBhdGggPSBwYXJ0cy5qb2luKCcvJyk7XG5cbiAgcmV0dXJuIHVyaTtcbn1cblxuLy8gR2VuZXJhdGUgYSBVUkwgd2l0aCB0aGUgaG9zdCBkYXRhIGdpdmVuIGJ5IG9wdHMgYW5kIHRoZSBnaXZlbiBwYXRoXG5mdW5jdGlvbiBnZW5EQlVybChvcHRzLCBwYXRoKSB7XG4gIHJldHVybiBnZW5Vcmwob3B0cywgb3B0cy5kYiArICcvJyArIHBhdGgpO1xufVxuXG4vLyBHZW5lcmF0ZSBhIFVSTCB3aXRoIHRoZSBob3N0IGRhdGEgZ2l2ZW4gYnkgb3B0cyBhbmQgdGhlIGdpdmVuIHBhdGhcbmZ1bmN0aW9uIGdlblVybChvcHRzLCBwYXRoKSB7XG4gIC8vIElmIHRoZSBob3N0IGFscmVhZHkgaGFzIGEgcGF0aCwgdGhlbiB3ZSBuZWVkIHRvIGhhdmUgYSBwYXRoIGRlbGltaXRlclxuICAvLyBPdGhlcndpc2UsIHRoZSBwYXRoIGRlbGltaXRlciBpcyB0aGUgZW1wdHkgc3RyaW5nXG4gIHZhciBwYXRoRGVsID0gIW9wdHMucGF0aCA/ICcnIDogJy8nO1xuXG4gIC8vIElmIHRoZSBob3N0IGFscmVhZHkgaGFzIGEgcGF0aCwgdGhlbiB3ZSBuZWVkIHRvIGhhdmUgYSBwYXRoIGRlbGltaXRlclxuICAvLyBPdGhlcndpc2UsIHRoZSBwYXRoIGRlbGltaXRlciBpcyB0aGUgZW1wdHkgc3RyaW5nXG4gIHJldHVybiBvcHRzLnByb3RvY29sICsgJzovLycgKyBvcHRzLmhvc3QgK1xuICAgICAgICAgKG9wdHMucG9ydCA/ICgnOicgKyBvcHRzLnBvcnQpIDogJycpICtcbiAgICAgICAgICcvJyArIG9wdHMucGF0aCArIHBhdGhEZWwgKyBwYXRoO1xufVxuXG5mdW5jdGlvbiBwYXJhbXNUb1N0cihwYXJhbXMpIHtcbiAgcmV0dXJuICc/JyArIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKTtcbiAgfSkuam9pbignJicpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRDYWNoZUJ1c3Qob3B0cykge1xuICB2YXIgdWEgPSAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCkgP1xuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpIDogJyc7XG4gIHZhciBpc0lFID0gdWEuaW5kZXhPZignbXNpZScpICE9PSAtMTtcbiAgdmFyIGlzVHJpZGVudCA9IHVhLmluZGV4T2YoJ3RyaWRlbnQnKSAhPT0gLTE7XG4gIHZhciBpc0VkZ2UgPSB1YS5pbmRleE9mKCdlZGdlJykgIT09IC0xO1xuICB2YXIgaXNHRVQgPSAhKCdtZXRob2QnIGluIG9wdHMpIHx8IG9wdHMubWV0aG9kID09PSAnR0VUJztcbiAgcmV0dXJuIChpc0lFIHx8IGlzVHJpZGVudCB8fCBpc0VkZ2UpICYmIGlzR0VUO1xufVxuXG4vLyBJbXBsZW1lbnRzIHRoZSBQb3VjaERCIEFQSSBmb3IgZGVhbGluZyB3aXRoIENvdWNoREIgaW5zdGFuY2VzIG92ZXIgSFRUUFxuZnVuY3Rpb24gSHR0cFBvdWNoKG9wdHMsIGNhbGxiYWNrKSB7XG5cbiAgLy8gVGhlIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgcHVibGljbHkgYXZhaWxhYmxlIGZvciBIdHRwUG91Y2hcbiAgdmFyIGFwaSA9IHRoaXM7XG5cbiAgdmFyIGhvc3QgPSBnZXRIb3N0KG9wdHMubmFtZSwgb3B0cyk7XG4gIHZhciBkYlVybCA9IGdlbkRCVXJsKGhvc3QsICcnKTtcblxuICBvcHRzID0gY2xvbmUob3B0cyk7XG5cbiAgdmFyIG91ckZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IG5ldyBoKCk7XG5cbiAgICBvcHRpb25zLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnO1xuXG4gICAgaWYgKG9wdHMuYXV0aCB8fCBob3N0LmF1dGgpIHtcbiAgICAgIHZhciBuQXV0aCA9IG9wdHMuYXV0aCB8fCBob3N0LmF1dGg7XG4gICAgICB2YXIgc3RyID0gbkF1dGgudXNlcm5hbWUgKyAnOicgKyBuQXV0aC5wYXNzd29yZDtcbiAgICAgIHZhciB0b2tlbiA9IHRoaXNCdG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyB0b2tlbik7XG4gICAgfVxuXG4gICAgdmFyIGhlYWRlcnMgPSBvcHRzLmhlYWRlcnMgfHwge307XG4gICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChzaG91bGRDYWNoZUJ1c3Qob3B0aW9ucykpIHtcbiAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ19ub25jZT0nICsgRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB2YXIgZmV0Y2hGdW4gPSBvcHRzLmZldGNoIHx8IGYkMTtcbiAgICByZXR1cm4gZmV0Y2hGdW4odXJsLCBvcHRpb25zKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhZGFwdGVyRnVuJCQxKG5hbWUsIGZ1bikge1xuICAgIHJldHVybiBhZGFwdGVyRnVuKG5hbWUsIGdldEFyZ3VtZW50cyhmdW5jdGlvbiAoYXJncykge1xuICAgICAgc2V0dXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfSk7XG4gICAgfSkpLmJpbmQoYXBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoSlNPTih1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwgbmV3IGgoKTtcblxuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzLmdldCgnQWNjZXB0JykpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91ckZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJlc3VsdC5vayA9IHJlc3BvbnNlLm9rO1xuICAgICAgcmVzdWx0LnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgcmVzdWx0LmRhdGEgPSBqc29uO1xuICAgICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgICAgcmVzdWx0LmRhdGEuc3RhdHVzID0gcmVzdWx0LnN0YXR1cztcbiAgICAgICAgdmFyIGVyciA9IGdlbmVyYXRlRXJyb3JGcm9tUmVzcG9uc2UocmVzdWx0LmRhdGEpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0LmRhdGEpKSB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgaWYgKHYuZXJyb3IgfHwgdi5taXNzaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZSh2KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2V0dXBQcm9taXNlO1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIGlmIChvcHRzLnNraXBfc2V0dXApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNldHVwIGluIHByb2Nlc3Mgb3IgcHJldmlvdXMgc3VjY2Vzc2Z1bCBzZXR1cFxuICAgIC8vIGRvbmUgdGhlbiB3ZSB3aWxsIHVzZSB0aGF0XG4gICAgLy8gSWYgcHJldmlvdXMgc2V0dXBzIGhhdmUgYmVlbiByZWplY3RlZCB3ZSB3aWxsIHRyeSBhZ2FpblxuICAgIGlmIChzZXR1cFByb21pc2UpIHtcbiAgICAgIHJldHVybiBzZXR1cFByb21pc2U7XG4gICAgfVxuXG4gICAgc2V0dXBQcm9taXNlID0gZmV0Y2hKU09OKGRiVXJsKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyICYmIGVyci5zdGF0dXMgJiYgZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIERvZXNudCBleGlzdCwgY3JlYXRlIGl0XG4gICAgICAgIGV4cGxhaW5FcnJvcig0MDQsICdQb3VjaERCIGlzIGp1c3QgZGV0ZWN0aW5nIGlmIHRoZSByZW1vdGUgZXhpc3RzLicpO1xuICAgICAgICByZXR1cm4gZmV0Y2hKU09OKGRiVXJsLCB7bWV0aG9kOiAnUFVUJ30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gSWYgd2UgdHJ5IHRvIGNyZWF0ZSBhIGRhdGFiYXNlIHRoYXQgYWxyZWFkeSBleGlzdHMsIHNraXBwZWQgaW5cbiAgICAgIC8vIGlzdGFuYnVsIHNpbmNlIGl0cyBjYXRjaGluZyBhIHJhY2UgY29uZGl0aW9uLlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZXJyICYmIGVyci5zdGF0dXMgJiYgZXJyLnN0YXR1cyA9PT0gNDEyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfSk7XG5cbiAgICBzZXR1cFByb21pc2UuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dXBQcm9taXNlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZXR1cFByb21pc2U7XG4gIH1cblxuICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIGFwaSk7XG4gIH0pO1xuXG4gIGFwaS5fcmVtb3RlID0gdHJ1ZTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBhcGkudHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ2h0dHAnO1xuICB9O1xuXG4gIGFwaS5pZCA9IGFkYXB0ZXJGdW4kJDEoJ2lkJywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgb3VyRmV0Y2goZ2VuVXJsKGhvc3QsICcnKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgLy8gQmFkIHJlc3BvbnNlIG9yIG1pc3NpbmcgYHV1aWRgIHNob3VsZCBub3QgcHJldmVudCBJRCBnZW5lcmF0aW9uLlxuICAgICAgdmFyIHV1aWQkJDEgPSAocmVzdWx0ICYmIHJlc3VsdC51dWlkKSA/XG4gICAgICAgICAgKHJlc3VsdC51dWlkICsgaG9zdC5kYikgOiBnZW5EQlVybChob3N0LCAnJyk7XG4gICAgICBjYWxsYmFjayhudWxsLCB1dWlkJCQxKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gU2VuZHMgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGhvc3QgY2FsbGluZyB0aGUgY291Y2hkYiBfY29tcGFjdCBmdW5jdGlvblxuICAvLyAgICB2ZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiBDb3VjaERCIGl0IGlzIHJ1bm5pbmdcbiAgYXBpLmNvbXBhY3QgPSBhZGFwdGVyRnVuJCQxKCdjb21wYWN0JywgZnVuY3Rpb24gKG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIG9wdHMgPSBjbG9uZShvcHRzKTtcblxuICAgIGZldGNoSlNPTihnZW5EQlVybChob3N0LCAnX2NvbXBhY3QnKSwge21ldGhvZDogJ1BPU1QnfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBwaW5nKCkge1xuICAgICAgICBhcGkuaW5mbyhmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAvLyBDb3VjaERCIG1heSBzZW5kIGEgXCJjb21wYWN0X3J1bm5pbmc6dHJ1ZVwiIGlmIGl0J3NcbiAgICAgICAgICAvLyBhbHJlYWR5IGNvbXBhY3RpbmcuIFBvdWNoREIgU2VydmVyIGRvZXNuJ3QuXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICBpZiAocmVzICYmICFyZXMuY29tcGFjdF9ydW5uaW5nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7b2s6IHRydWV9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChwaW5nLCBvcHRzLmludGVydmFsIHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFBpbmcgdGhlIGh0dHAgaWYgaXQncyBmaW5pc2hlZCBjb21wYWN0aW9uXG4gICAgICBwaW5nKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFwaS5idWxrR2V0ID0gYWRhcHRlckZ1bignYnVsa0dldCcsIGZ1bmN0aW9uIChvcHRzLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGRvQnVsa0dldChjYikge1xuICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgaWYgKG9wdHMucmV2cykge1xuICAgICAgICBwYXJhbXMucmV2cyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0cy5hdHRhY2htZW50cykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBwYXJhbXMuYXR0YWNobWVudHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG9wdHMubGF0ZXN0KSB7XG4gICAgICAgIHBhcmFtcy5sYXRlc3QgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZmV0Y2hKU09OKGdlbkRCVXJsKGhvc3QsICdfYnVsa19nZXQnICsgcGFyYW1zVG9TdHIocGFyYW1zKSksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZG9jczogb3B0cy5kb2NzfSlcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAob3B0cy5hdHRhY2htZW50cyAmJiBvcHRzLmJpbmFyeSkge1xuICAgICAgICAgIHJlc3VsdC5kYXRhLnJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICByZXMuZG9jcy5mb3JFYWNoKHJlYWRBdHRhY2htZW50c0FzQmxvYk9yQnVmZmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYihudWxsLCByZXN1bHQuZGF0YSk7XG4gICAgICB9KS5jYXRjaChjYik7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmdW5jdGlvbiBkb0J1bGtHZXRTaGltKCkge1xuICAgICAgLy8gYXZvaWQgXCJ1cmwgdG9vIGxvbmcgZXJyb3JcIiBieSBzcGxpdHRpbmcgdXAgaW50byBtdWx0aXBsZSByZXF1ZXN0c1xuICAgICAgdmFyIGJhdGNoU2l6ZSA9IE1BWF9TSU1VTFRBTkVPVVNfUkVWUztcbiAgICAgIHZhciBudW1CYXRjaGVzID0gTWF0aC5jZWlsKG9wdHMuZG9jcy5sZW5ndGggLyBiYXRjaFNpemUpO1xuICAgICAgdmFyIG51bURvbmUgPSAwO1xuICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobnVtQmF0Y2hlcyk7XG5cbiAgICAgIGZ1bmN0aW9uIG9uUmVzdWx0KGJhdGNoTnVtKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAvLyBlcnIgaXMgaW1wb3NzaWJsZSBiZWNhdXNlIHNoaW0gcmV0dXJucyBhIGxpc3Qgb2YgZXJycyBpbiB0aGF0IGNhc2VcbiAgICAgICAgICByZXN1bHRzW2JhdGNoTnVtXSA9IHJlcy5yZXN1bHRzO1xuICAgICAgICAgIGlmICgrK251bURvbmUgPT09IG51bUJhdGNoZXMpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHtyZXN1bHRzOiBmbGF0dGVuKHJlc3VsdHMpfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUJhdGNoZXM7IGkrKykge1xuICAgICAgICB2YXIgc3ViT3B0cyA9IHBpY2sob3B0cywgWydyZXZzJywgJ2F0dGFjaG1lbnRzJywgJ2JpbmFyeScsICdsYXRlc3QnXSk7XG4gICAgICAgIHN1Yk9wdHMuZG9jcyA9IG9wdHMuZG9jcy5zbGljZShpICogYmF0Y2hTaXplLFxuICAgICAgICAgIE1hdGgubWluKG9wdHMuZG9jcy5sZW5ndGgsIChpICsgMSkgKiBiYXRjaFNpemUpKTtcbiAgICAgICAgYnVsa0dldChzZWxmLCBzdWJPcHRzLCBvblJlc3VsdChpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFyayB0aGUgd2hvbGUgZGF0YWJhc2UgYXMgZWl0aGVyIHN1cHBvcnRpbmcgb3Igbm90IHN1cHBvcnRpbmcgX2J1bGtfZ2V0XG4gICAgdmFyIGRiVXJsID0gZ2VuVXJsKGhvc3QsICcnKTtcbiAgICB2YXIgc3VwcG9ydHNCdWxrR2V0ID0gc3VwcG9ydHNCdWxrR2V0TWFwW2RiVXJsXTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0J1bGtHZXQgIT09ICdib29sZWFuJykge1xuICAgICAgLy8gY2hlY2sgaWYgdGhpcyBkYXRhYmFzZSBzdXBwb3J0cyBfYnVsa19nZXRcbiAgICAgIGRvQnVsa0dldChmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHN1cHBvcnRzQnVsa0dldE1hcFtkYlVybF0gPSBmYWxzZTtcbiAgICAgICAgICBleHBsYWluRXJyb3IoXG4gICAgICAgICAgICBlcnIuc3RhdHVzLFxuICAgICAgICAgICAgJ1BvdWNoREIgaXMganVzdCBkZXRlY3RpbmcgaWYgdGhlIHJlbW90ZSAnICtcbiAgICAgICAgICAgICdzdXBwb3J0cyB0aGUgX2J1bGtfZ2V0IEFQSS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb0J1bGtHZXRTaGltKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VwcG9ydHNCdWxrR2V0TWFwW2RiVXJsXSA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0c0J1bGtHZXQpIHtcbiAgICAgIGRvQnVsa0dldChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvQnVsa0dldFNoaW0oKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENhbGxzIEdFVCBvbiB0aGUgaG9zdCwgd2hpY2ggZ2V0cyBiYWNrIGEgSlNPTiBzdHJpbmcgY29udGFpbmluZ1xuICAvLyAgICBjb3VjaGRiOiBBIHdlbGNvbWUgc3RyaW5nXG4gIC8vICAgIHZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIENvdWNoREIgaXQgaXMgcnVubmluZ1xuICBhcGkuX2luZm8gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBzZXR1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG91ckZldGNoKGdlbkRCVXJsKGhvc3QsICcnKSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgaW5mby5ob3N0ID0gZ2VuREJVcmwoaG9zdCwgJycpO1xuICAgICAgY2FsbGJhY2sobnVsbCwgaW5mbyk7XG4gICAgfSkuY2F0Y2goY2FsbGJhY2spO1xuICB9O1xuXG4gIGFwaS5mZXRjaCA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNldHVwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdXJsID0gcGF0aC5zdWJzdHJpbmcoMCwgMSkgPT09ICcvJyA/XG4gICAgICAgIGdlblVybChob3N0LCBwYXRoLnN1YnN0cmluZygxKSkgOlxuICAgICAgICBnZW5EQlVybChob3N0LCBwYXRoKTtcbiAgICAgIHJldHVybiBvdXJGZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaWQgZnJvbSB0aGUgZGF0YWJhc2UgZ2l2ZW4gYnkgaG9zdC5cbiAgLy8gVGhlIGlkIGNvdWxkIGJlIHNvbGVseSB0aGUgX2lkIGluIHRoZSBkYXRhYmFzZSwgb3IgaXQgbWF5IGJlIGFcbiAgLy8gX2Rlc2lnbi9JRCBvciBfbG9jYWwvSUQgcGF0aFxuICBhcGkuZ2V0ID0gYWRhcHRlckZ1biQkMSgnZ2V0JywgZnVuY3Rpb24gKGlkLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIElmIG5vIG9wdGlvbnMgd2VyZSBnaXZlbiwgc2V0IHRoZSBjYWxsYmFjayB0byB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gY2xvbmUob3B0cyk7XG5cbiAgICAvLyBMaXN0IG9mIHBhcmFtZXRlcnMgdG8gYWRkIHRvIHRoZSBHRVQgcmVxdWVzdFxuICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgIGlmIChvcHRzLnJldnMpIHtcbiAgICAgIHBhcmFtcy5yZXZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5yZXZzX2luZm8pIHtcbiAgICAgIHBhcmFtcy5yZXZzX2luZm8gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxhdGVzdCkge1xuICAgICAgcGFyYW1zLmxhdGVzdCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMub3Blbl9yZXZzKSB7XG4gICAgICBpZiAob3B0cy5vcGVuX3JldnMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgb3B0cy5vcGVuX3JldnMgPSBKU09OLnN0cmluZ2lmeShvcHRzLm9wZW5fcmV2cyk7XG4gICAgICB9XG4gICAgICBwYXJhbXMub3Blbl9yZXZzID0gb3B0cy5vcGVuX3JldnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucmV2KSB7XG4gICAgICBwYXJhbXMucmV2ID0gb3B0cy5yZXY7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuY29uZmxpY3RzKSB7XG4gICAgICBwYXJhbXMuY29uZmxpY3RzID0gb3B0cy5jb25mbGljdHM7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG9wdHMudXBkYXRlX3NlcSkge1xuICAgICAgcGFyYW1zLnVwZGF0ZV9zZXEgPSBvcHRzLnVwZGF0ZV9zZXE7XG4gICAgfVxuXG4gICAgaWQgPSBlbmNvZGVEb2NJZChpZCk7XG5cbiAgICBmdW5jdGlvbiBmZXRjaEF0dGFjaG1lbnRzKGRvYykge1xuICAgICAgdmFyIGF0dHMgPSBkb2MuX2F0dGFjaG1lbnRzO1xuICAgICAgdmFyIGZpbGVuYW1lcyA9IGF0dHMgJiYgT2JqZWN0LmtleXMoYXR0cyk7XG4gICAgICBpZiAoIWF0dHMgfHwgIWZpbGVuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gd2UgZmV0Y2ggdGhlc2UgbWFudWFsbHkgaW4gc2VwYXJhdGUgWEhScywgYmVjYXVzZVxuICAgICAgLy8gU3luYyBHYXRld2F5IHdvdWxkIG5vcm1hbGx5IHNlbmQgaXQgYmFjayBhcyBtdWx0aXBhcnQvbWl4ZWQsXG4gICAgICAvLyB3aGljaCB3ZSBjYW5ub3QgcGFyc2UuIEFsc28sIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQgdGhhblxuICAgICAgLy8gcmVjZWl2aW5nIGF0dGFjaG1lbnRzIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZ3MuXG4gICAgICBmdW5jdGlvbiBmZXRjaERhdGEoZmlsZW5hbWUpIHtcbiAgICAgICAgdmFyIGF0dCA9IGF0dHNbZmlsZW5hbWVdO1xuICAgICAgICB2YXIgcGF0aCA9IGVuY29kZURvY0lkKGRvYy5faWQpICsgJy8nICsgZW5jb2RlQXR0YWNobWVudElkKGZpbGVuYW1lKSArXG4gICAgICAgICAgICAnP3Jldj0nICsgZG9jLl9yZXY7XG4gICAgICAgIHJldHVybiBvdXJGZXRjaChnZW5EQlVybChob3N0LCBwYXRoKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAoJ2J1ZmZlcicgaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5idWZmZXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgICAgaWYgKG9wdHMuYmluYXJ5KSB7XG4gICAgICAgICAgICB2YXIgdHlwZUZpZWxkRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmxvYi5fX3Byb3RvX18sICd0eXBlJyk7XG4gICAgICAgICAgICBpZiAoIXR5cGVGaWVsZERlc2NyaXB0b3IgfHwgdHlwZUZpZWxkRGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgYmxvYi50eXBlID0gYXR0LmNvbnRlbnRfdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBibG9iO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGJsb2JUb0Jhc2U2NChibG9iLCByZXNvbHZlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRlbGV0ZSBhdHQuc3R1YjtcbiAgICAgICAgICBkZWxldGUgYXR0Lmxlbmd0aDtcbiAgICAgICAgICBhdHQuZGF0YSA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZUZhY3RvcmllcyA9IGZpbGVuYW1lcy5tYXAoZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoRGF0YShmaWxlbmFtZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhpcyBsaW1pdHMgdGhlIG51bWJlciBvZiBwYXJhbGxlbCB4aHIgcmVxdWVzdHMgdG8gNSBhbnkgdGltZVxuICAgICAgLy8gdG8gYXZvaWQgaXNzdWVzIHdpdGggbWF4aW11bSBicm93c2VyIHJlcXVlc3QgbGltaXRzXG4gICAgICByZXR1cm4gcG9vbChwcm9taXNlRmFjdG9yaWVzLCA1KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZXRjaEFsbEF0dGFjaG1lbnRzKGRvY09yRG9jcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jT3JEb2NzKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZG9jT3JEb2NzLm1hcChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgaWYgKGRvYy5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoQXR0YWNobWVudHMoZG9jLm9rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZXRjaEF0dGFjaG1lbnRzKGRvY09yRG9jcyk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsIGlkICsgcGFyYW1zVG9TdHIocGFyYW1zKSk7XG4gICAgZmV0Y2hKU09OKHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoQWxsQXR0YWNobWVudHMocmVzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuZG9jSWQgPSBpZDtcbiAgICAgIGNhbGxiYWNrKGUpO1xuICAgIH0pO1xuICB9KTtcblxuXG4gIC8vIERlbGV0ZSB0aGUgZG9jdW1lbnQgZ2l2ZW4gYnkgZG9jIGZyb20gdGhlIGRhdGFiYXNlIGdpdmVuIGJ5IGhvc3QuXG4gIGFwaS5yZW1vdmUgPSBhZGFwdGVyRnVuJCQxKCdyZW1vdmUnLCBmdW5jdGlvbiAoZG9jT3JJZCwgb3B0c09yUmV2LCBvcHRzLCBjYikge1xuICAgIHZhciBkb2M7XG4gICAgaWYgKHR5cGVvZiBvcHRzT3JSZXYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZCwgcmV2LCBvcHRzLCBjYWxsYmFjayBzdHlsZVxuICAgICAgZG9jID0ge1xuICAgICAgICBfaWQ6IGRvY09ySWQsXG4gICAgICAgIF9yZXY6IG9wdHNPclJldlxuICAgICAgfTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9jLCBvcHRzLCBjYWxsYmFjayBzdHlsZVxuICAgICAgZG9jID0gZG9jT3JJZDtcbiAgICAgIGlmICh0eXBlb2Ygb3B0c09yUmV2ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gb3B0c09yUmV2O1xuICAgICAgICBvcHRzID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYiA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSBvcHRzT3JSZXY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJldiQkMSA9IChkb2MuX3JldiB8fCBvcHRzLnJldik7XG4gICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsIGVuY29kZURvY0lkKGRvYy5faWQpKSArICc/cmV2PScgKyByZXYkJDE7XG5cbiAgICBmZXRjaEpTT04odXJsLCB7bWV0aG9kOiAnREVMRVRFJ30sIGNiKS5jYXRjaChjYik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGVuY29kZUF0dGFjaG1lbnRJZChhdHRhY2htZW50SWQpIHtcbiAgICByZXR1cm4gYXR0YWNobWVudElkLnNwbGl0KFwiL1wiKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgYXR0YWNobWVudFxuICBhcGkuZ2V0QXR0YWNobWVudCA9IGFkYXB0ZXJGdW4kJDEoJ2dldEF0dGFjaG1lbnQnLCBmdW5jdGlvbiAoZG9jSWQsIGF0dGFjaG1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBwYXJhbXMgPSBvcHRzLnJldiA/ICgnP3Jldj0nICsgb3B0cy5yZXYpIDogJyc7XG4gICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsIGVuY29kZURvY0lkKGRvY0lkKSkgKyAnLycgK1xuICAgICAgICBlbmNvZGVBdHRhY2htZW50SWQoYXR0YWNobWVudElkKSArIHBhcmFtcztcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgb3VyRmV0Y2godXJsLCB7bWV0aG9kOiAnR0VUJ30pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICFwcm9jZXNzLmJyb3dzZXIgJiYgdHlwZW9mIHJlc3BvbnNlLmJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5idWZmZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAvLyBUT0RPOiBhbHNvIHJlbW92ZVxuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAhcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGJsb2IudHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2sobnVsbCwgYmxvYik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBhdHRhY2htZW50IGdpdmVuIGJ5IHRoZSBpZCBhbmQgcmV2XG4gIGFwaS5yZW1vdmVBdHRhY2htZW50ID0gIGFkYXB0ZXJGdW4kJDEoJ3JlbW92ZUF0dGFjaG1lbnQnLCBmdW5jdGlvbiAoZG9jSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldiQkMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaykge1xuICAgIHZhciB1cmwgPSBnZW5EQlVybChob3N0LCBlbmNvZGVEb2NJZChkb2NJZCkgKyAnLycgK1xuICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVBdHRhY2htZW50SWQoYXR0YWNobWVudElkKSkgKyAnP3Jldj0nICsgcmV2JCQxO1xuICAgIGZldGNoSlNPTih1cmwsIHttZXRob2Q6ICdERUxFVEUnfSwgY2FsbGJhY2spLmNhdGNoKGNhbGxiYWNrKTtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBhdHRhY2htZW50IGdpdmVuIGJ5IGJsb2IgYW5kIGl0cyBjb250ZW50VHlwZSBwcm9wZXJ0eVxuICAvLyB0byB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaWQsIHRoZSByZXZpc2lvbiBnaXZlbiBieSByZXYsIGFuZFxuICAvLyBhZGQgaXQgdG8gdGhlIGRhdGFiYXNlIGdpdmVuIGJ5IGhvc3QuXG4gIGFwaS5wdXRBdHRhY2htZW50ID0gYWRhcHRlckZ1biQkMSgncHV0QXR0YWNobWVudCcsIGZ1bmN0aW9uIChkb2NJZCwgYXR0YWNobWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2JCQxLCBibG9iLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdHlwZTtcbiAgICAgIHR5cGUgPSBibG9iO1xuICAgICAgYmxvYiA9IHJldiQkMTtcbiAgICAgIHJldiQkMSA9IG51bGw7XG4gICAgfVxuICAgIHZhciBpZCA9IGVuY29kZURvY0lkKGRvY0lkKSArICcvJyArIGVuY29kZUF0dGFjaG1lbnRJZChhdHRhY2htZW50SWQpO1xuICAgIHZhciB1cmwgPSBnZW5EQlVybChob3N0LCBpZCk7XG4gICAgaWYgKHJldiQkMSkge1xuICAgICAgdXJsICs9ICc/cmV2PScgKyByZXYkJDE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBibG9iID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gaW5wdXQgaXMgYXNzdW1lZCB0byBiZSBhIGJhc2U2NCBzdHJpbmdcbiAgICAgIHZhciBiaW5hcnk7XG4gICAgICB0cnkge1xuICAgICAgICBiaW5hcnkgPSB0aGlzQXRvYihibG9iKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY3JlYXRlRXJyb3IoQkFEX0FSRyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdHRhY2htZW50IGlzIG5vdCBhIHZhbGlkIGJhc2U2NCBzdHJpbmcnKSk7XG4gICAgICB9XG4gICAgICBibG9iID0gYmluYXJ5ID8gYmluU3RyaW5nVG9CbHVmZmVyKGJpbmFyeSwgdHlwZSkgOiAnJztcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGF0dGFjaG1lbnRcbiAgICBmZXRjaEpTT04odXJsLCB7XG4gICAgICBoZWFkZXJzOiBuZXcgaCh7J0NvbnRlbnQtVHlwZSc6IHR5cGV9KSxcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBib2R5OiBibG9iXG4gICAgfSwgY2FsbGJhY2spLmNhdGNoKGNhbGxiYWNrKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlL2NyZWF0ZSBtdWx0aXBsZSBkb2N1bWVudHMgZ2l2ZW4gYnkgcmVxIGluIHRoZSBkYXRhYmFzZVxuICAvLyBnaXZlbiBieSBob3N0LlxuICBhcGkuX2J1bGtEb2NzID0gZnVuY3Rpb24gKHJlcSwgb3B0cywgY2FsbGJhY2spIHtcbiAgICAvLyBJZiBuZXdfZWRpdHM9ZmFsc2UgdGhlbiBpdCBwcmV2ZW50cyB0aGUgZGF0YWJhc2UgZnJvbSBjcmVhdGluZ1xuICAgIC8vIG5ldyByZXZpc2lvbiBudW1iZXJzIGZvciB0aGUgZG9jdW1lbnRzLiBJbnN0ZWFkIGl0IGp1c3QgdXNlc1xuICAgIC8vIHRoZSBvbGQgb25lcy4gVGhpcyBpcyB1c2VkIGluIGRhdGFiYXNlIHJlcGxpY2F0aW9uLlxuICAgIHJlcS5uZXdfZWRpdHMgPSBvcHRzLm5ld19lZGl0cztcblxuICAgIHNldHVwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxLmRvY3MubWFwKHByZXByb2Nlc3NBdHRhY2htZW50cyQxKSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBVcGRhdGUvY3JlYXRlIHRoZSBkb2N1bWVudHNcbiAgICAgIHJldHVybiBmZXRjaEpTT04oZ2VuREJVcmwoaG9zdCwgJ19idWxrX2RvY3MnKSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxKVxuICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH0pLmNhdGNoKGNhbGxiYWNrKTtcbiAgfTtcblxuXG4gIC8vIFVwZGF0ZS9jcmVhdGUgZG9jdW1lbnRcbiAgYXBpLl9wdXQgPSBmdW5jdGlvbiAoZG9jLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIHNldHVwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJlcHJvY2Vzc0F0dGFjaG1lbnRzJDEoZG9jKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmZXRjaEpTT04oZ2VuREJVcmwoaG9zdCwgZW5jb2RlRG9jSWQoZG9jLl9pZCkpLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRvYylcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0LmRhdGEpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGVyci5kb2NJZCA9IGRvYyAmJiBkb2MuX2lkO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIC8vIEdldCBhIGxpc3Rpbmcgb2YgdGhlIGRvY3VtZW50cyBpbiB0aGUgZGF0YWJhc2UgZ2l2ZW5cbiAgLy8gYnkgaG9zdCBhbmQgb3JkZXJlZCBieSBpbmNyZWFzaW5nIGlkLlxuICBhcGkuYWxsRG9jcyA9IGFkYXB0ZXJGdW4kJDEoJ2FsbERvY3MnLCBmdW5jdGlvbiAob3B0cywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cyA9IGNsb25lKG9wdHMpO1xuXG4gICAgLy8gTGlzdCBvZiBwYXJhbWV0ZXJzIHRvIGFkZCB0byB0aGUgR0VUIHJlcXVlc3RcbiAgICB2YXIgcGFyYW1zID0ge307XG4gICAgdmFyIGJvZHk7XG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xuXG4gICAgaWYgKG9wdHMuY29uZmxpY3RzKSB7XG4gICAgICBwYXJhbXMuY29uZmxpY3RzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICBwYXJhbXMudXBkYXRlX3NlcSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVzY2VuZGluZykge1xuICAgICAgcGFyYW1zLmRlc2NlbmRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcykge1xuICAgICAgcGFyYW1zLmluY2x1ZGVfZG9jcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gYWRkZWQgaW4gQ291Y2hEQiAxLjYuMFxuICAgIGlmIChvcHRzLmF0dGFjaG1lbnRzKSB7XG4gICAgICBwYXJhbXMuYXR0YWNobWVudHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmtleSkge1xuICAgICAgcGFyYW1zLmtleSA9IEpTT04uc3RyaW5naWZ5KG9wdHMua2V5KTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zdGFydF9rZXkpIHtcbiAgICAgIG9wdHMuc3RhcnRrZXkgPSBvcHRzLnN0YXJ0X2tleTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zdGFydGtleSkge1xuICAgICAgcGFyYW1zLnN0YXJ0a2V5ID0gSlNPTi5zdHJpbmdpZnkob3B0cy5zdGFydGtleSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5kX2tleSkge1xuICAgICAgb3B0cy5lbmRrZXkgPSBvcHRzLmVuZF9rZXk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5ka2V5KSB7XG4gICAgICBwYXJhbXMuZW5ka2V5ID0gSlNPTi5zdHJpbmdpZnkob3B0cy5lbmRrZXkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5pbmNsdXNpdmVfZW5kICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGFyYW1zLmluY2x1c2l2ZV9lbmQgPSAhIW9wdHMuaW5jbHVzaXZlX2VuZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMubGltaXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXJhbXMubGltaXQgPSBvcHRzLmxpbWl0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5za2lwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGFyYW1zLnNraXAgPSBvcHRzLnNraXA7XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtU3RyID0gcGFyYW1zVG9TdHIocGFyYW1zKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0cy5rZXlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgYm9keSA9IHtrZXlzOiBvcHRzLmtleXN9O1xuICAgIH1cblxuICAgIGZldGNoSlNPTihnZW5EQlVybChob3N0LCAnX2FsbF9kb2NzJyArIHBhcmFtU3RyKSwge1xuICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcyAmJiBvcHRzLmF0dGFjaG1lbnRzICYmIG9wdHMuYmluYXJ5KSB7XG4gICAgICAgIHJlc3VsdC5kYXRhLnJvd3MuZm9yRWFjaChyZWFkQXR0YWNobWVudHNBc0Jsb2JPckJ1ZmZlcik7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQuZGF0YSk7XG4gICAgfSkuY2F0Y2goY2FsbGJhY2spO1xuICB9KTtcblxuICAvLyBHZXQgYSBsaXN0IG9mIGNoYW5nZXMgbWFkZSB0byBkb2N1bWVudHMgaW4gdGhlIGRhdGFiYXNlIGdpdmVuIGJ5IGhvc3QuXG4gIC8vIFRPRE8gQWNjb3JkaW5nIHRvIHRoZSBSRUFETUUsIHRoZXJlIHNob3VsZCBiZSB0d28gb3RoZXIgbWV0aG9kcyBoZXJlLFxuICAvLyBhcGkuY2hhbmdlcy5hZGRMaXN0ZW5lciBhbmQgYXBpLmNoYW5nZXMucmVtb3ZlTGlzdGVuZXIuXG4gIGFwaS5fY2hhbmdlcyA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cbiAgICAvLyBXZSBpbnRlcm5hbGx5IHBhZ2UgdGhlIHJlc3VsdHMgb2YgYSBjaGFuZ2VzIHJlcXVlc3QsIHRoaXMgbWVhbnNcbiAgICAvLyBpZiB0aGVyZSBpcyBhIGxhcmdlIHNldCBvZiBjaGFuZ2VzIHRvIGJlIHJldHVybmVkIHdlIGNhbiBzdGFydFxuICAgIC8vIHByb2Nlc3NpbmcgdGhlbSBxdWlja2VyIGluc3RlYWQgb2Ygd2FpdGluZyBvbiB0aGUgZW50aXJlXG4gICAgLy8gc2V0IG9mIGNoYW5nZXMgdG8gcmV0dXJuIGFuZCBhdHRlbXB0aW5nIHRvIHByb2Nlc3MgdGhlbSBhdCBvbmNlXG4gICAgdmFyIGJhdGNoU2l6ZSA9ICdiYXRjaF9zaXplJyBpbiBvcHRzID8gb3B0cy5iYXRjaF9zaXplIDogQ0hBTkdFU19CQVRDSF9TSVpFO1xuXG4gICAgb3B0cyA9IGNsb25lKG9wdHMpO1xuXG4gICAgaWYgKG9wdHMuY29udGludW91cyAmJiAhKCdoZWFydGJlYXQnIGluIG9wdHMpKSB7XG4gICAgICBvcHRzLmhlYXJ0YmVhdCA9IERFRkFVTFRfSEVBUlRCRUFUO1xuICAgIH1cblxuICAgIHZhciByZXF1ZXN0VGltZW91dCA9ICgndGltZW91dCcgaW4gb3B0cykgPyBvcHRzLnRpbWVvdXQgOiAzMCAqIDEwMDA7XG5cbiAgICAvLyBlbnN1cmUgQ0hBTkdFU19USU1FT1VUX0JVRkZFUiBhcHBsaWVzXG4gICAgaWYgKCd0aW1lb3V0JyBpbiBvcHRzICYmIG9wdHMudGltZW91dCAmJlxuICAgICAgKHJlcXVlc3RUaW1lb3V0IC0gb3B0cy50aW1lb3V0KSA8IENIQU5HRVNfVElNRU9VVF9CVUZGRVIpIHtcbiAgICAgICAgcmVxdWVzdFRpbWVvdXQgPSBvcHRzLnRpbWVvdXQgKyBDSEFOR0VTX1RJTUVPVVRfQlVGRkVSO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgnaGVhcnRiZWF0JyBpbiBvcHRzICYmIG9wdHMuaGVhcnRiZWF0ICYmXG4gICAgICAgKHJlcXVlc3RUaW1lb3V0IC0gb3B0cy5oZWFydGJlYXQpIDwgQ0hBTkdFU19USU1FT1VUX0JVRkZFUikge1xuICAgICAgICByZXF1ZXN0VGltZW91dCA9IG9wdHMuaGVhcnRiZWF0ICsgQ0hBTkdFU19USU1FT1VUX0JVRkZFUjtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW1zID0ge307XG4gICAgaWYgKCd0aW1lb3V0JyBpbiBvcHRzICYmIG9wdHMudGltZW91dCkge1xuICAgICAgcGFyYW1zLnRpbWVvdXQgPSBvcHRzLnRpbWVvdXQ7XG4gICAgfVxuXG4gICAgdmFyIGxpbWl0ID0gKHR5cGVvZiBvcHRzLmxpbWl0ICE9PSAndW5kZWZpbmVkJykgPyBvcHRzLmxpbWl0IDogZmFsc2U7XG4gICAgdmFyIGxlZnRUb0ZldGNoID0gbGltaXQ7XG5cbiAgICBpZiAob3B0cy5zdHlsZSkge1xuICAgICAgcGFyYW1zLnN0eWxlID0gb3B0cy5zdHlsZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlX2RvY3MgfHwgb3B0cy5maWx0ZXIgJiYgdHlwZW9mIG9wdHMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hdHRhY2htZW50cykge1xuICAgICAgcGFyYW1zLmF0dGFjaG1lbnRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5jb250aW51b3VzKSB7XG4gICAgICBwYXJhbXMuZmVlZCA9ICdsb25ncG9sbCc7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuc2VxX2ludGVydmFsKSB7XG4gICAgICBwYXJhbXMuc2VxX2ludGVydmFsID0gb3B0cy5zZXFfaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuY29uZmxpY3RzKSB7XG4gICAgICBwYXJhbXMuY29uZmxpY3RzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZXNjZW5kaW5nKSB7XG4gICAgICBwYXJhbXMuZGVzY2VuZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG9wdHMudXBkYXRlX3NlcSkge1xuICAgICAgcGFyYW1zLnVwZGF0ZV9zZXEgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgnaGVhcnRiZWF0JyBpbiBvcHRzKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhcnRiZWF0IHZhbHVlIGlzIGZhbHNlLCBpdCBkaXNhYmxlcyB0aGUgZGVmYXVsdCBoZWFydGJlYXRcbiAgICAgIGlmIChvcHRzLmhlYXJ0YmVhdCkge1xuICAgICAgICBwYXJhbXMuaGVhcnRiZWF0ID0gb3B0cy5oZWFydGJlYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZmlsdGVyICYmIHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy5maWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAob3B0cy52aWV3ICYmIHR5cGVvZiBvcHRzLnZpZXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMuZmlsdGVyID0gJ192aWV3JztcbiAgICAgIHBhcmFtcy52aWV3ID0gb3B0cy52aWV3O1xuICAgIH1cblxuICAgIC8vIElmIG9wdHMucXVlcnlfcGFyYW1zIGV4aXN0cywgcGFzcyBpdCB0aHJvdWdoIHRvIHRoZSBjaGFuZ2VzIHJlcXVlc3QuXG4gICAgLy8gVGhlc2UgcGFyYW1ldGVycyBtYXkgYmUgdXNlZCBieSB0aGUgZmlsdGVyIG9uIHRoZSBzb3VyY2UgZGF0YWJhc2UuXG4gICAgaWYgKG9wdHMucXVlcnlfcGFyYW1zICYmIHR5cGVvZiBvcHRzLnF1ZXJ5X3BhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIHBhcmFtX25hbWUgaW4gb3B0cy5xdWVyeV9wYXJhbXMpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9wdHMucXVlcnlfcGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtX25hbWUpKSB7XG4gICAgICAgICAgcGFyYW1zW3BhcmFtX25hbWVdID0gb3B0cy5xdWVyeV9wYXJhbXNbcGFyYW1fbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XG4gICAgdmFyIGJvZHk7XG5cbiAgICBpZiAob3B0cy5kb2NfaWRzKSB7XG4gICAgICAvLyBzZXQgdGhpcyBhdXRvbWFnaWNhbGx5IGZvciB0aGUgdXNlcjsgaXQncyBhbm5veWluZyB0aGF0IGNvdWNoZGJcbiAgICAgIC8vIHJlcXVpcmVzIGJvdGggYSBcImZpbHRlclwiIGFuZCBhIFwiZG9jX2lkc1wiIHBhcmFtLlxuICAgICAgcGFyYW1zLmZpbHRlciA9ICdfZG9jX2lkcyc7XG4gICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICBib2R5ID0ge2RvY19pZHM6IG9wdHMuZG9jX2lkcyB9O1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGVsc2UgaWYgKG9wdHMuc2VsZWN0b3IpIHtcbiAgICAgIC8vIHNldCB0aGlzIGF1dG9tYWdpY2FsbHkgZm9yIHRoZSB1c2VyLCBzaW1pbGFyIHRvIGFib3ZlXG4gICAgICBwYXJhbXMuZmlsdGVyID0gJ19zZWxlY3Rvcic7XG4gICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICBib2R5ID0ge3NlbGVjdG9yOiBvcHRzLnNlbGVjdG9yIH07XG4gICAgfVxuXG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgYSgpO1xuICAgIHZhciBsYXN0RmV0Y2hlZFNlcTtcblxuICAgIC8vIEdldCBhbGwgdGhlIGNoYW5nZXMgc3RhcnRpbmcgd3RpaCB0aGUgb25lIGltbWVkaWF0ZWx5IGFmdGVyIHRoZVxuICAgIC8vIHNlcXVlbmNlIG51bWJlciBnaXZlbiBieSBzaW5jZS5cbiAgICB2YXIgZmV0Y2hEYXRhID0gZnVuY3Rpb24gKHNpbmNlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKG9wdHMuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYXJhbXMuc2luY2UgPSBzaW5jZTtcbiAgICAgIC8vIFwic2luY2VcIiBjYW4gYmUgYW55IGtpbmQgb2YganNvbiBvYmplY3QgaW4gQ2xvdWRhbnQvQ291Y2hEQiAyLnhcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5zaW5jZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBwYXJhbXMuc2luY2UgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMuc2luY2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5kZXNjZW5kaW5nKSB7XG4gICAgICAgIGlmIChsaW1pdCkge1xuICAgICAgICAgIHBhcmFtcy5saW1pdCA9IGxlZnRUb0ZldGNoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMubGltaXQgPSAoIWxpbWl0IHx8IGxlZnRUb0ZldGNoID4gYmF0Y2hTaXplKSA/XG4gICAgICAgICAgYmF0Y2hTaXplIDogbGVmdFRvRmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgb3B0aW9ucyBmb3IgdGhlIGFqYXggY2FsbFxuICAgICAgdmFyIHVybCA9IGdlbkRCVXJsKGhvc3QsICdfY2hhbmdlcycgKyBwYXJhbXNUb1N0cihwYXJhbXMpKTtcbiAgICAgIHZhciBmZXRjaE9wdHMgPSB7XG4gICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgICAgfTtcbiAgICAgIGxhc3RGZXRjaGVkU2VxID0gc2luY2U7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKG9wdHMuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgY2hhbmdlc1xuICAgICAgc2V0dXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoSlNPTih1cmwsIGZldGNoT3B0cywgY2FsbGJhY2spO1xuICAgICAgfSkuY2F0Y2goY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBJZiBvcHRzLnNpbmNlIGV4aXN0cywgZ2V0IGFsbCB0aGUgY2hhbmdlcyBmcm9tIHRoZSBzZXF1ZW5jZVxuICAgIC8vIG51bWJlciBnaXZlbiBieSBvcHRzLnNpbmNlLiBPdGhlcndpc2UsIGdldCBhbGwgdGhlIGNoYW5nZXNcbiAgICAvLyBmcm9tIHRoZSBzZXF1ZW5jZSBudW1iZXIgMC5cbiAgICB2YXIgcmVzdWx0cyA9IHtyZXN1bHRzOiBbXX07XG5cbiAgICB2YXIgZmV0Y2hlZCA9IGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgaWYgKG9wdHMuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmF3X3Jlc3VsdHNfbGVuZ3RoID0gMDtcbiAgICAgIC8vIElmIHRoZSByZXN1bHQgb2YgdGhlIGFqYXggY2FsbCAocmVzKSBjb250YWlucyBjaGFuZ2VzIChyZXMucmVzdWx0cylcbiAgICAgIGlmIChyZXMgJiYgcmVzLnJlc3VsdHMpIHtcbiAgICAgICAgcmF3X3Jlc3VsdHNfbGVuZ3RoID0gcmVzLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICByZXN1bHRzLmxhc3Rfc2VxID0gcmVzLmxhc3Rfc2VxO1xuICAgICAgICB2YXIgcGVuZGluZyA9IG51bGw7XG4gICAgICAgIHZhciBsYXN0U2VxID0gbnVsbDtcbiAgICAgICAgLy8gQXR0YWNoICdwZW5kaW5nJyBwcm9wZXJ0eSBpZiBzZXJ2ZXIgc3VwcG9ydHMgaXQgKENvdWNoREIgMi4wKylcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0eXBlb2YgcmVzLnBlbmRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHJlcy5wZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0cy5sYXN0X3NlcSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJlc3VsdHMubGFzdF9zZXEgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgbGFzdFNlcSA9IHJlc3VsdHMubGFzdF9zZXE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggY2hhbmdlXG4gICAgICAgIHZhciByZXEgPSB7fTtcbiAgICAgICAgcmVxLnF1ZXJ5ID0gb3B0cy5xdWVyeV9wYXJhbXM7XG4gICAgICAgIHJlcy5yZXN1bHRzID0gcmVzLnJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgbGVmdFRvRmV0Y2gtLTtcbiAgICAgICAgICB2YXIgcmV0ID0gZmlsdGVyQ2hhbmdlKG9wdHMpKGMpO1xuICAgICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIGlmIChvcHRzLmluY2x1ZGVfZG9jcyAmJiBvcHRzLmF0dGFjaG1lbnRzICYmIG9wdHMuYmluYXJ5KSB7XG4gICAgICAgICAgICAgIHJlYWRBdHRhY2htZW50c0FzQmxvYk9yQnVmZmVyKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMucmV0dXJuX2RvY3MpIHtcbiAgICAgICAgICAgICAgcmVzdWx0cy5yZXN1bHRzLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRzLm9uQ2hhbmdlKGMsIHBlbmRpbmcsIGxhc3RTZXEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgIC8vIEluIGNhc2Ugb2YgYW4gZXJyb3IsIHN0b3AgbGlzdGVuaW5nIGZvciBjaGFuZ2VzIGFuZCBjYWxsXG4gICAgICAgIC8vIG9wdHMuY29tcGxldGVcbiAgICAgICAgb3B0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgb3B0cy5jb21wbGV0ZShlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2VzIGZlZWQgbWF5IGhhdmUgdGltZWQgb3V0IHdpdGggbm8gcmVzdWx0c1xuICAgICAgLy8gaWYgc28gcmV1c2UgbGFzdCB1cGRhdGUgc2VxdWVuY2VcbiAgICAgIGlmIChyZXMgJiYgcmVzLmxhc3Rfc2VxKSB7XG4gICAgICAgIGxhc3RGZXRjaGVkU2VxID0gcmVzLmxhc3Rfc2VxO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmluaXNoZWQgPSAobGltaXQgJiYgbGVmdFRvRmV0Y2ggPD0gMCkgfHxcbiAgICAgICAgKHJlcyAmJiByYXdfcmVzdWx0c19sZW5ndGggPCBiYXRjaFNpemUpIHx8XG4gICAgICAgIChvcHRzLmRlc2NlbmRpbmcpO1xuXG4gICAgICBpZiAoKG9wdHMuY29udGludW91cyAmJiAhKGxpbWl0ICYmIGxlZnRUb0ZldGNoIDw9IDApKSB8fCAhZmluaXNoZWQpIHtcbiAgICAgICAgLy8gUXVldWUgYSBjYWxsIHRvIGZldGNoIGFnYWluIHdpdGggdGhlIG5ld2VzdCBzZXF1ZW5jZSBudW1iZXJcbiAgICAgICAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHsgZmV0Y2hEYXRhKGxhc3RGZXRjaGVkU2VxLCBmZXRjaGVkKTsgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSdyZSBkb25lLCBjYWxsIHRoZSBjYWxsYmFja1xuICAgICAgICBvcHRzLmNvbXBsZXRlKG51bGwsIHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEob3B0cy5zaW5jZSB8fCAwLCBmZXRjaGVkKTtcblxuICAgIC8vIFJldHVybiBhIG1ldGhvZCB0byBjYW5jZWwgdGhpcyBtZXRob2QgZnJvbSBwcm9jZXNzaW5nIGFueSBtb3JlXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBvcHRzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBHaXZlbiBhIHNldCBvZiBkb2N1bWVudC9yZXZpc2lvbiBJRHMgKGdpdmVuIGJ5IHJlcSksIHRldHMgdGhlIHN1YnNldCBvZlxuICAvLyB0aG9zZSB0aGF0IGRvIE5PVCBjb3JyZXNwb25kIHRvIHJldmlzaW9ucyBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlLlxuICAvLyBTZWUgaHR0cDovL3dpa2kuYXBhY2hlLm9yZy9jb3VjaGRiL0h0dHBQb3N0UmV2c0RpZmZcbiAgYXBpLnJldnNEaWZmID0gYWRhcHRlckZ1biQkMSgncmV2c0RpZmYnLCBmdW5jdGlvbiAocmVxLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIElmIG5vIG9wdGlvbnMgd2VyZSBnaXZlbiwgc2V0IHRoZSBjYWxsYmFjayB0byBiZSB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbWlzc2luZyBkb2N1bWVudC9yZXZpc2lvbiBJRHNcbiAgICBmZXRjaEpTT04oZ2VuREJVcmwoaG9zdCwgJ19yZXZzX2RpZmYnKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXEpXG4gICAgfSwgY2FsbGJhY2spLmNhdGNoKGNhbGxiYWNrKTtcbiAgfSk7XG5cbiAgYXBpLl9jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgYXBpLl9kZXN0cm95ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgZmV0Y2hKU09OKGdlbkRCVXJsKGhvc3QsICcnKSwge21ldGhvZDogJ0RFTEVURSd9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBqc29uKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwge29rOiB0cnVlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG4vLyBIdHRwUG91Y2ggaXMgYSB2YWxpZCBhZGFwdGVyLlxuSHR0cFBvdWNoLnZhbGlkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIEh0dHBQb3VjaCQxIChQb3VjaERCKSB7XG4gIFBvdWNoREIuYWRhcHRlcignaHR0cCcsIEh0dHBQb3VjaCwgZmFsc2UpO1xuICBQb3VjaERCLmFkYXB0ZXIoJ2h0dHBzJywgSHR0cFBvdWNoLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIFF1ZXJ5UGFyc2VFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMuc3RhdHVzID0gNDAwO1xuICB0aGlzLm5hbWUgPSAncXVlcnlfcGFyc2VfZXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBRdWVyeVBhcnNlRXJyb3IpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5pbmhlcml0cyhRdWVyeVBhcnNlRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gTm90Rm91bmRFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMuc3RhdHVzID0gNDA0O1xuICB0aGlzLm5hbWUgPSAnbm90X2ZvdW5kJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5lcnJvciA9IHRydWU7XG4gIHRyeSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmluaGVyaXRzKE5vdEZvdW5kRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gQnVpbHRJbkVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5zdGF0dXMgPSA1MDA7XG4gIHRoaXMubmFtZSA9ICdpbnZhbGlkX3ZhbHVlJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5lcnJvciA9IHRydWU7XG4gIHRyeSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQnVpbHRJbkVycm9yKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuaW5oZXJpdHMoQnVpbHRJbkVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIHByb21pc2VkQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KGZ1bikge1xuICByZXR1cm4gZ2V0QXJndW1lbnRzKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGNiID0gYXJncy5wb3AoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZ1bi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9taXNlZENhbGxiYWNrKHByb21pc2UsIGNiKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH0pO1xufVxuXG4vLyBQcm9taXNlIGZpbmFsbHkgdXRpbCBzaW1pbGFyIHRvIFEuZmluYWxseVxuZnVuY3Rpb24gZmluKHByb21pc2UsIGZpbmFsUHJvbWlzZUZhY3RvcnkpIHtcbiAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIGZpbmFsUHJvbWlzZUZhY3RvcnkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gZmluYWxQcm9taXNlRmFjdG9yeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgcmVhc29uO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VxdWVudGlhbGl6ZShxdWV1ZSwgcHJvbWlzZUZhY3RvcnkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHF1ZXVlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZUZhY3RvcnkuYXBwbHkodGhhdCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59XG5cbi8vIHVuaXEgYW4gYXJyYXkgb2Ygc3RyaW5ncywgb3JkZXIgbm90IGd1YXJhbnRlZWRcbi8vIHNpbWlsYXIgdG8gdW5kZXJzY29yZS9sb2Rhc2ggXy51bmlxXG5mdW5jdGlvbiB1bmlxKGFycikge1xuICB2YXIgdGhlU2V0ID0gbmV3IEV4cG9ydGVkU2V0KGFycik7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodGhlU2V0LnNpemUpO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdGhlU2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYXBUb0tleXNBcnJheShtYXApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShtYXAuc2l6ZSk7XG4gIHZhciBpbmRleCA9IC0xO1xuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGtleTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1aWx0SW5FcnJvcihuYW1lKSB7XG4gIHZhciBtZXNzYWdlID0gJ2J1aWx0aW4gJyArIG5hbWUgK1xuICAgICcgZnVuY3Rpb24gcmVxdWlyZXMgbWFwIHZhbHVlcyB0byBiZSBudW1iZXJzJyArXG4gICAgJyBvciBudW1iZXIgYXJyYXlzJztcbiAgcmV0dXJuIG5ldyBCdWlsdEluRXJyb3IobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN1bSh2YWx1ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbnVtID0gdmFsdWVzW2ldO1xuICAgIGlmICh0eXBlb2YgbnVtICE9PSAnbnVtYmVyJykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobnVtKSkge1xuICAgICAgICAvLyBsaXN0cyBvZiBudW1iZXJzIGFyZSBhbHNvIGFsbG93ZWQsIHN1bSB0aGVtIHNlcGFyYXRlbHlcbiAgICAgICAgcmVzdWx0ID0gdHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicgPyBbcmVzdWx0XSA6IHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpMZW4gPSBudW0ubGVuZ3RoOyBqIDwgakxlbjsgaisrKSB7XG4gICAgICAgICAgdmFyIGpOdW0gPSBudW1bal07XG4gICAgICAgICAgaWYgKHR5cGVvZiBqTnVtICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgY3JlYXRlQnVpbHRJbkVycm9yKCdfc3VtJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0W2pdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goak51bSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtqXSArPSBqTnVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gbm90IGFycmF5L251bWJlclxuICAgICAgICB0aHJvdyBjcmVhdGVCdWlsdEluRXJyb3IoJ19zdW0nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXN1bHQgKz0gbnVtO1xuICAgIH0gZWxzZSB7IC8vIGFkZCBudW1iZXIgdG8gYXJyYXlcbiAgICAgIHJlc3VsdFswXSArPSBudW07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBsb2cgPSBndWFyZGVkQ29uc29sZS5iaW5kKG51bGwsICdsb2cnKTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciB0b0pTT04gPSBKU09OLnBhcnNlO1xuXG5mdW5jdGlvbiBldmFsRnVuY3Rpb25XaXRoRXZhbChmdW5jLCBlbWl0KSB7XG4gIHJldHVybiBzY29wZUV2YWwoXG4gICAgXCJyZXR1cm4gKFwiICsgZnVuYy5yZXBsYWNlKC87XFxzKiQvLCBcIlwiKSArIFwiKTtcIixcbiAgICB7XG4gICAgICBlbWl0OiBlbWl0LFxuICAgICAgc3VtOiBzdW0sXG4gICAgICBsb2c6IGxvZyxcbiAgICAgIGlzQXJyYXk6IGlzQXJyYXksXG4gICAgICB0b0pTT046IHRvSlNPTlxuICAgIH1cbiAgKTtcbn1cblxuLypcbiAqIFNpbXBsZSB0YXNrIHF1ZXVlIHRvIHNlcXVlbnRpYWxpemUgYWN0aW9ucy4gQXNzdW1lc1xuICogY2FsbGJhY2tzIHdpbGwgZXZlbnR1YWxseSBmaXJlIChvbmNlKS5cbiAqL1xuXG5cbmZ1bmN0aW9uIFRhc2tRdWV1ZSQxKCkge1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCkge2Z1bGZpbGwoKTsgfSk7XG59XG5UYXNrUXVldWUkMS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHByb21pc2VGYWN0b3J5KSB7XG4gIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgLy8ganVzdCByZWNvdmVyXG4gIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9taXNlRmFjdG9yeSgpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbn07XG5UYXNrUXVldWUkMS5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wcm9taXNlO1xufTtcblxuZnVuY3Rpb24gc3RyaW5naWZ5KGlucHV0KSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7IC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIGVtcHR5IHJlZHVjZVxuICB9XG4gIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0IHdpdGggbWFwcmVkdWNlLCBmdW5jdGlvbnMvc3RyaW5ncyBhcmUgc3RyaW5naWZpZWRcbiAgLy8gYXMtaXMuIGV2ZXJ5dGhpbmcgZWxzZSBpcyBKU09OLXN0cmluZ2lmaWVkLlxuICBzd2l0Y2ggKHR5cGVvZiBpbnB1dCkge1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIC8vIGUuZy4gYSBtYXByZWR1Y2UgbWFwXG4gICAgICByZXR1cm4gaW5wdXQudG9TdHJpbmcoKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgLy8gZS5nLiBhIG1hcHJlZHVjZSBidWlsdC1pbiBfcmVkdWNlIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gaW5wdXQudG9TdHJpbmcoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gZS5nLiBhIEpTT04gb2JqZWN0IGluIHRoZSBjYXNlIG9mIG1hbmdvIHF1ZXJpZXNcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbnB1dCk7XG4gIH1cbn1cblxuLyogY3JlYXRlIGEgc3RyaW5nIHNpZ25hdHVyZSBmb3IgYSB2aWV3IHNvIHdlIGNhbiBjYWNoZSBpdCBhbmQgdW5pcSBpdCAqL1xuZnVuY3Rpb24gY3JlYXRlVmlld1NpZ25hdHVyZShtYXBGdW4sIHJlZHVjZUZ1bikge1xuICAvLyB0aGUgXCJ1bmRlZmluZWRcIiBwYXJ0IGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICByZXR1cm4gc3RyaW5naWZ5KG1hcEZ1bikgKyBzdHJpbmdpZnkocmVkdWNlRnVuKSArICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWV3KHNvdXJjZURCLCB2aWV3TmFtZSwgbWFwRnVuLCByZWR1Y2VGdW4sIHRlbXBvcmFyeSwgbG9jYWxEb2NOYW1lKSB7XG4gIHZhciB2aWV3U2lnbmF0dXJlID0gY3JlYXRlVmlld1NpZ25hdHVyZShtYXBGdW4sIHJlZHVjZUZ1bik7XG5cbiAgdmFyIGNhY2hlZFZpZXdzO1xuICBpZiAoIXRlbXBvcmFyeSkge1xuICAgIC8vIGNhY2hlIHRoaXMgdG8gZW5zdXJlIHdlIGRvbid0IHRyeSB0byB1cGRhdGUgdGhlIHNhbWUgdmlldyB0d2ljZVxuICAgIGNhY2hlZFZpZXdzID0gc291cmNlREIuX2NhY2hlZFZpZXdzID0gc291cmNlREIuX2NhY2hlZFZpZXdzIHx8IHt9O1xuICAgIGlmIChjYWNoZWRWaWV3c1t2aWV3U2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZFZpZXdzW3ZpZXdTaWduYXR1cmVdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9taXNlRm9yVmlldyA9IHNvdXJjZURCLmluZm8oKS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG5cbiAgICB2YXIgZGVwRGJOYW1lID0gaW5mby5kYl9uYW1lICsgJy1tcnZpZXctJyArXG4gICAgICAodGVtcG9yYXJ5ID8gJ3RlbXAnIDogc3RyaW5nTWQ1KHZpZXdTaWduYXR1cmUpKTtcblxuICAgIC8vIHNhdmUgdGhlIHZpZXcgbmFtZSBpbiB0aGUgc291cmNlIGRiIHNvIGl0IGNhbiBiZSBjbGVhbmVkIHVwIGlmIG5lY2Vzc2FyeVxuICAgIC8vIChlLmcuIHdoZW4gdGhlIF9kZXNpZ24gZG9jIGlzIGRlbGV0ZWQsIHJlbW92ZSBhbGwgYXNzb2NpYXRlZCB2aWV3IGRhdGEpXG4gICAgZnVuY3Rpb24gZGlmZkZ1bmN0aW9uKGRvYykge1xuICAgICAgZG9jLnZpZXdzID0gZG9jLnZpZXdzIHx8IHt9O1xuICAgICAgdmFyIGZ1bGxWaWV3TmFtZSA9IHZpZXdOYW1lO1xuICAgICAgaWYgKGZ1bGxWaWV3TmFtZS5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICAgIGZ1bGxWaWV3TmFtZSA9IHZpZXdOYW1lICsgJy8nICsgdmlld05hbWU7XG4gICAgICB9XG4gICAgICB2YXIgZGVwRGJzID0gZG9jLnZpZXdzW2Z1bGxWaWV3TmFtZV0gPSBkb2Mudmlld3NbZnVsbFZpZXdOYW1lXSB8fCB7fTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGRlcERic1tkZXBEYk5hbWVdKSB7XG4gICAgICAgIHJldHVybjsgLy8gbm8gdXBkYXRlIG5lY2Vzc2FyeVxuICAgICAgfVxuICAgICAgZGVwRGJzW2RlcERiTmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG4gICAgcmV0dXJuIHVwc2VydChzb3VyY2VEQiwgJ19sb2NhbC8nICsgbG9jYWxEb2NOYW1lLCBkaWZmRnVuY3Rpb24pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNvdXJjZURCLnJlZ2lzdGVyRGVwZW5kZW50RGF0YWJhc2UoZGVwRGJOYW1lKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIGRiID0gcmVzLmRiO1xuICAgICAgICBkYi5hdXRvX2NvbXBhY3Rpb24gPSB0cnVlO1xuICAgICAgICB2YXIgdmlldyA9IHtcbiAgICAgICAgICBuYW1lOiBkZXBEYk5hbWUsXG4gICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgIHNvdXJjZURCOiBzb3VyY2VEQixcbiAgICAgICAgICBhZGFwdGVyOiBzb3VyY2VEQi5hZGFwdGVyLFxuICAgICAgICAgIG1hcEZ1bjogbWFwRnVuLFxuICAgICAgICAgIHJlZHVjZUZ1bjogcmVkdWNlRnVuXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2aWV3LmRiLmdldCgnX2xvY2FsL2xhc3RTZXEnKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgaWYgKGVyci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAobGFzdFNlcURvYykge1xuICAgICAgICAgIHZpZXcuc2VxID0gbGFzdFNlcURvYyA/IGxhc3RTZXFEb2Muc2VxIDogMDtcbiAgICAgICAgICBpZiAoY2FjaGVkVmlld3MpIHtcbiAgICAgICAgICAgIHZpZXcuZGIub25jZSgnZGVzdHJveWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBkZWxldGUgY2FjaGVkVmlld3Nbdmlld1NpZ25hdHVyZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChjYWNoZWRWaWV3cykge1xuICAgIGNhY2hlZFZpZXdzW3ZpZXdTaWduYXR1cmVdID0gcHJvbWlzZUZvclZpZXc7XG4gIH1cbiAgcmV0dXJuIHByb21pc2VGb3JWaWV3O1xufVxuXG52YXIgcGVyc2lzdGVudFF1ZXVlcyA9IHt9O1xudmFyIHRlbXBWaWV3UXVldWUgPSBuZXcgVGFza1F1ZXVlJDEoKTtcbnZhciBDSEFOR0VTX0JBVENIX1NJWkUkMSA9IDUwO1xuXG5mdW5jdGlvbiBwYXJzZVZpZXdOYW1lKG5hbWUpIHtcbiAgLy8gY2FuIGJlIGVpdGhlciAnZGRvY25hbWUvdmlld25hbWUnIG9yIGp1c3QgJ3ZpZXduYW1lJ1xuICAvLyAod2hlcmUgdGhlIGRkb2MgbmFtZSBpcyB0aGUgc2FtZSlcbiAgcmV0dXJuIG5hbWUuaW5kZXhPZignLycpID09PSAtMSA/IFtuYW1lLCBuYW1lXSA6IG5hbWUuc3BsaXQoJy8nKTtcbn1cblxuZnVuY3Rpb24gaXNHZW5PbmUoY2hhbmdlcykge1xuICAvLyBvbmx5IHJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IGNoYW5nZSBpcyAxLVxuICAvLyBhbmQgdGhlcmUgYXJlIG5vIG90aGVyIGxlYWZzXG4gIHJldHVybiBjaGFuZ2VzLmxlbmd0aCA9PT0gMSAmJiAvXjEtLy50ZXN0KGNoYW5nZXNbMF0ucmV2KTtcbn1cblxuZnVuY3Rpb24gZW1pdEVycm9yKGRiLCBlKSB7XG4gIHRyeSB7XG4gICAgZGIuZW1pdCgnZXJyb3InLCBlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZ3VhcmRlZENvbnNvbGUoJ2Vycm9yJyxcbiAgICAgICdUaGUgdXNlclxcJ3MgbWFwL3JlZHVjZSBmdW5jdGlvbiB0aHJldyBhbiB1bmNhdWdodCBlcnJvci5cXG4nICtcbiAgICAgICdZb3UgY2FuIGRlYnVnIHRoaXMgZXJyb3IgYnkgZG9pbmc6XFxuJyArXG4gICAgICAnbXlEYXRhYmFzZS5vbihcXCdlcnJvclxcJywgZnVuY3Rpb24gKGVycikgeyBkZWJ1Z2dlcjsgfSk7XFxuJyArXG4gICAgICAnUGxlYXNlIGRvdWJsZS1jaGVjayB5b3VyIG1hcC9yZWR1Y2UgZnVuY3Rpb24uJyk7XG4gICAgZ3VhcmRlZENvbnNvbGUoJ2Vycm9yJywgZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIFwiYWJzdHJhY3RcIiBtYXByZWR1Y2Ugb2JqZWN0IG9mIHRoZSBmb3JtOlxuICpcbiAqICAge1xuICogICAgIHF1ZXJ5OiBxdWVyeUZ1bixcbiAqICAgICB2aWV3Q2xlYW51cDogdmlld0NsZWFudXBGdW5cbiAqICAgfVxuICpcbiAqIEFyZ3VtZW50cyBhcmU6XG4gKlxuICogbG9jYWxEb2M6IHN0cmluZ1xuICogICBUaGlzIGlzIGZvciB0aGUgbG9jYWwgZG9jIHRoYXQgZ2V0cyBzYXZlZCBpbiBvcmRlciB0byB0cmFjayB0aGVcbiAqICAgXCJkZXBlbmRlbnRcIiBEQnMgYW5kIGNsZWFuIHRoZW0gdXAgZm9yIHZpZXdDbGVhbnVwLiBJdCBzaG91bGQgYmVcbiAqICAgdW5pcXVlLCBzbyB0aGF0IGluZGV4ZXIgcGx1Z2lucyBkb24ndCBjb2xsaWRlIHdpdGggZWFjaCBvdGhlci5cbiAqIG1hcHBlcjogZnVuY3Rpb24gKG1hcEZ1bkRlZiwgZW1pdClcbiAqICAgUmV0dXJucyBhIG1hcCBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgbWFwRnVuRGVmLCB3aGljaCBpbiB0aGUgY2FzZSBvZlxuICogICBub3JtYWwgbWFwL3JlZHVjZSBpcyBqdXN0IHRoZSBkZS1zdHJpbmdpZmllZCBmdW5jdGlvbiwgYnV0IG1heSBiZVxuICogICBzb21ldGhpbmcgZWxzZSwgc3VjaCBhcyBhbiBvYmplY3QgaW4gdGhlIGNhc2Ugb2YgcG91Y2hkYi1maW5kLlxuICogcmVkdWNlcjogZnVuY3Rpb24gKHJlZHVjZUZ1bkRlZilcbiAqICAgRGl0dG8sIGJ1dCBmb3IgcmVkdWNpbmcuIE1vZHVsZXMgZG9uJ3QgaGF2ZSB0byBzdXBwb3J0IHJlZHVjaW5nXG4gKiAgIChlLmcuIHBvdWNoZGItZmluZCkuXG4gKiBkZG9jVmFsaWRhdG9yOiBmdW5jdGlvbiAoZGRvYywgdmlld05hbWUpXG4gKiAgIFRocm93cyBhbiBlcnJvciBpZiB0aGUgZGRvYyBvciB2aWV3TmFtZSBpcyBub3QgdmFsaWQuXG4gKiAgIFRoaXMgY291bGQgYmUgYSB3YXkgdG8gY29tbXVuaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlXG4gKiAgIGluZGV4ZXIgaXMgaW52YWxpZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWJzdHJhY3RNYXBSZWR1Y2UobG9jYWxEb2NOYW1lLCBtYXBwZXIsIHJlZHVjZXIsIGRkb2NWYWxpZGF0b3IpIHtcblxuICBmdW5jdGlvbiB0cnlNYXAoZGIsIGZ1biwgZG9jKSB7XG4gICAgLy8gZW1pdCBhbiBldmVudCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IgdGhyb3duIGJ5IGEgbWFwIGZ1bmN0aW9uLlxuICAgIC8vIHB1dHRpbmcgdHJ5L2NhdGNoZXMgaW4gYSBzaW5nbGUgZnVuY3Rpb24gYWxzbyBhdm9pZHMgZGVvcHRpbWl6YXRpb25zLlxuICAgIHRyeSB7XG4gICAgICBmdW4oZG9jKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbWl0RXJyb3IoZGIsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVJlZHVjZShkYiwgZnVuLCBrZXlzLCB2YWx1ZXMsIHJlcmVkdWNlKSB7XG4gICAgLy8gc2FtZSBhcyBhYm92ZSwgYnV0IHJldHVybmluZyB0aGUgcmVzdWx0IG9yIGFuIGVycm9yLiB0aGVyZSBhcmUgdHdvIHNlcGFyYXRlXG4gICAgLy8gZnVuY3Rpb25zIHRvIGF2b2lkIGV4dHJhIG1lbW9yeSBhbGxvY2F0aW9ucyBzaW5jZSB0aGUgdHJ5Q29kZSgpIGNhc2UgaXMgdXNlZFxuICAgIC8vIGZvciBjdXN0b20gbWFwIGZ1bmN0aW9ucyAoY29tbW9uKSB2cyB0aGlzIGZ1bmN0aW9uLCB3aGljaCBpcyBvbmx5IHVzZWQgZm9yXG4gICAgLy8gY3VzdG9tIHJlZHVjZSBmdW5jdGlvbnMgKHJhcmUpXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7b3V0cHV0IDogZnVuKGtleXMsIHZhbHVlcywgcmVyZWR1Y2UpfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbWl0RXJyb3IoZGIsIGUpO1xuICAgICAgcmV0dXJuIHtlcnJvcjogZX07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc29ydEJ5S2V5VGhlblZhbHVlKHgsIHkpIHtcbiAgICB2YXIga2V5Q29tcGFyZSA9IGNvbGxhdGUoeC5rZXksIHkua2V5KTtcbiAgICByZXR1cm4ga2V5Q29tcGFyZSAhPT0gMCA/IGtleUNvbXBhcmUgOiBjb2xsYXRlKHgudmFsdWUsIHkudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpY2VSZXN1bHRzKHJlc3VsdHMsIGxpbWl0LCBza2lwKSB7XG4gICAgc2tpcCA9IHNraXAgfHwgMDtcbiAgICBpZiAodHlwZW9mIGxpbWl0ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJlc3VsdHMuc2xpY2Uoc2tpcCwgbGltaXQgKyBza2lwKTtcbiAgICB9IGVsc2UgaWYgKHNraXAgPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cy5zbGljZShza2lwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBmdW5jdGlvbiByb3dUb0RvY0lkKHJvdykge1xuICAgIHZhciB2YWwgPSByb3cudmFsdWU7XG4gICAgLy8gVXNlcnMgY2FuIGV4cGxpY2l0bHkgc3BlY2lmeSBhIGpvaW5lZCBkb2MgX2lkLCBvciBpdFxuICAgIC8vIGRlZmF1bHRzIHRvIHRoZSBkb2MgX2lkIHRoYXQgZW1pdHRlZCB0aGUga2V5L3ZhbHVlLlxuICAgIHZhciBkb2NJZCA9ICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsLl9pZCkgfHwgcm93LmlkO1xuICAgIHJldHVybiBkb2NJZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBdHRhY2htZW50c0FzQmxvYk9yQnVmZmVyKHJlcykge1xuICAgIHJlcy5yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgdmFyIGF0dHMgPSByb3cuZG9jICYmIHJvdy5kb2MuX2F0dGFjaG1lbnRzO1xuICAgICAgaWYgKCFhdHRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGF0dHMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICAgIHZhciBhdHQgPSBhdHRzW2ZpbGVuYW1lXTtcbiAgICAgICAgYXR0c1tmaWxlbmFtZV0uZGF0YSA9IGI2NFRvQmx1ZmZlcihhdHQuZGF0YSwgYXR0LmNvbnRlbnRfdHlwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc3Rwcm9jZXNzQXR0YWNobWVudHMob3B0cykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAob3B0cy5pbmNsdWRlX2RvY3MgJiYgb3B0cy5hdHRhY2htZW50cyAmJiBvcHRzLmJpbmFyeSkge1xuICAgICAgICByZWFkQXR0YWNobWVudHNBc0Jsb2JPckJ1ZmZlcihyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSHR0cFBhcmFtKHBhcmFtTmFtZSwgb3B0cywgcGFyYW1zLCBhc0pzb24pIHtcbiAgICAvLyBhZGQgYW4gaHR0cCBwYXJhbSBmcm9tIG9wdHMgdG8gcGFyYW1zLCBvcHRpb25hbGx5IGpzb24tZW5jb2RlZFxuICAgIHZhciB2YWwgPSBvcHRzW3BhcmFtTmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoYXNKc29uKSB7XG4gICAgICAgIHZhbCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5wdXNoKHBhcmFtTmFtZSArICc9JyArIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29lcmNlSW50ZWdlcihpbnRlZ2VyQ2FuZGlkYXRlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnRlZ2VyQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKGludGVnZXJDYW5kaWRhdGUpO1xuICAgICAgLy8gcHJldmVudHMgZS5nLiAnMWZvbycgb3IgJzEuMScgYmVpbmcgY29lcmNlZCB0byAxXG4gICAgICBpZiAoIWlzTmFOKGFzTnVtYmVyKSAmJiBhc051bWJlciA9PT0gcGFyc2VJbnQoaW50ZWdlckNhbmRpZGF0ZSwgMTApKSB7XG4gICAgICAgIHJldHVybiBhc051bWJlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnRlZ2VyQ2FuZGlkYXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZXJjZU9wdGlvbnMob3B0cykge1xuICAgIG9wdHMuZ3JvdXBfbGV2ZWwgPSBjb2VyY2VJbnRlZ2VyKG9wdHMuZ3JvdXBfbGV2ZWwpO1xuICAgIG9wdHMubGltaXQgPSBjb2VyY2VJbnRlZ2VyKG9wdHMubGltaXQpO1xuICAgIG9wdHMuc2tpcCA9IGNvZXJjZUludGVnZXIob3B0cy5za2lwKTtcbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUG9zaXRpdmVJbnRlZ2VyKG51bWJlcikge1xuICAgIGlmIChudW1iZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gIG5ldyBRdWVyeVBhcnNlRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIGludGVnZXI6IFwiJyArXG4gICAgICAgICAgbnVtYmVyICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gbmV3IFF1ZXJ5UGFyc2VFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgcG9zaXRpdmUgaW50ZWdlcjogJyArXG4gICAgICAgICAgJ1wiJyArIG51bWJlciArICdcIicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUXVlcnlQYXJzZUVycm9yKG9wdGlvbnMsIGZ1bikge1xuICAgIHZhciBzdGFydGtleU5hbWUgPSBvcHRpb25zLmRlc2NlbmRpbmcgPyAnZW5ka2V5JyA6ICdzdGFydGtleSc7XG4gICAgdmFyIGVuZGtleU5hbWUgPSBvcHRpb25zLmRlc2NlbmRpbmcgPyAnc3RhcnRrZXknIDogJ2VuZGtleSc7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnNbc3RhcnRrZXlOYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBvcHRpb25zW2VuZGtleU5hbWVdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgY29sbGF0ZShvcHRpb25zW3N0YXJ0a2V5TmFtZV0sIG9wdGlvbnNbZW5ka2V5TmFtZV0pID4gMCkge1xuICAgICAgdGhyb3cgbmV3IFF1ZXJ5UGFyc2VFcnJvcignTm8gcm93cyBjYW4gbWF0Y2ggeW91ciBrZXkgcmFuZ2UsICcgK1xuICAgICAgICAncmV2ZXJzZSB5b3VyIHN0YXJ0X2tleSBhbmQgZW5kX2tleSBvciBzZXQge2Rlc2NlbmRpbmcgOiB0cnVlfScpO1xuICAgIH0gZWxzZSBpZiAoZnVuLnJlZHVjZSAmJiBvcHRpb25zLnJlZHVjZSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVfZG9jcykge1xuICAgICAgICB0aHJvdyBuZXcgUXVlcnlQYXJzZUVycm9yKCd7aW5jbHVkZV9kb2NzOnRydWV9IGlzIGludmFsaWQgZm9yIHJlZHVjZScpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmtleXMgJiYgb3B0aW9ucy5rZXlzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgIW9wdGlvbnMuZ3JvdXAgJiYgIW9wdGlvbnMuZ3JvdXBfbGV2ZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFF1ZXJ5UGFyc2VFcnJvcignTXVsdGkta2V5IGZldGNoZXMgZm9yIHJlZHVjZSB2aWV3cyBtdXN0IHVzZSAnICtcbiAgICAgICAgICAne2dyb3VwOiB0cnVlfScpO1xuICAgICAgfVxuICAgIH1cbiAgICBbJ2dyb3VwX2xldmVsJywgJ2xpbWl0JywgJ3NraXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XG4gICAgICB2YXIgZXJyb3IgPSBjaGVja1Bvc2l0aXZlSW50ZWdlcihvcHRpb25zW29wdGlvbk5hbWVdKTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGh0dHBRdWVyeShkYiwgZnVuLCBvcHRzKSB7XG4gICAgLy8gTGlzdCBvZiBwYXJhbWV0ZXJzIHRvIGFkZCB0byB0aGUgUFVUIHJlcXVlc3RcbiAgICB2YXIgcGFyYW1zID0gW107XG4gICAgdmFyIGJvZHk7XG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xuICAgIHZhciBvaywgc3RhdHVzO1xuXG4gICAgLy8gSWYgb3B0cy5yZWR1Y2UgZXhpc3RzIGFuZCBpcyBkZWZpbmVkLCB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgIC8vIG9mIHBhcmFtZXRlcnMuXG4gICAgLy8gSWYgcmVkdWNlPWZhbHNlIHRoZW4gdGhlIHJlc3VsdHMgYXJlIHRoYXQgb2Ygb25seSB0aGUgbWFwIGZ1bmN0aW9uXG4gICAgLy8gbm90IHRoZSBmaW5hbCByZXN1bHQgb2YgbWFwIGFuZCByZWR1Y2UuXG4gICAgYWRkSHR0cFBhcmFtKCdyZWR1Y2UnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnaW5jbHVkZV9kb2NzJywgb3B0cywgcGFyYW1zKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2F0dGFjaG1lbnRzJywgb3B0cywgcGFyYW1zKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2xpbWl0Jywgb3B0cywgcGFyYW1zKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2Rlc2NlbmRpbmcnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnZ3JvdXAnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnZ3JvdXBfbGV2ZWwnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnc2tpcCcsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdzdGFsZScsIG9wdHMsIHBhcmFtcyk7XG4gICAgYWRkSHR0cFBhcmFtKCdjb25mbGljdHMnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgnc3RhcnRrZXknLCBvcHRzLCBwYXJhbXMsIHRydWUpO1xuICAgIGFkZEh0dHBQYXJhbSgnc3RhcnRfa2V5Jywgb3B0cywgcGFyYW1zLCB0cnVlKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2VuZGtleScsIG9wdHMsIHBhcmFtcywgdHJ1ZSk7XG4gICAgYWRkSHR0cFBhcmFtKCdlbmRfa2V5Jywgb3B0cywgcGFyYW1zLCB0cnVlKTtcbiAgICBhZGRIdHRwUGFyYW0oJ2luY2x1c2l2ZV9lbmQnLCBvcHRzLCBwYXJhbXMpO1xuICAgIGFkZEh0dHBQYXJhbSgna2V5Jywgb3B0cywgcGFyYW1zLCB0cnVlKTtcbiAgICBhZGRIdHRwUGFyYW0oJ3VwZGF0ZV9zZXEnLCBvcHRzLCBwYXJhbXMpO1xuXG4gICAgLy8gRm9ybWF0IHRoZSBsaXN0IG9mIHBhcmFtZXRlcnMgaW50byBhIHZhbGlkIFVSSSBxdWVyeSBzdHJpbmdcbiAgICBwYXJhbXMgPSBwYXJhbXMuam9pbignJicpO1xuICAgIHBhcmFtcyA9IHBhcmFtcyA9PT0gJycgPyAnJyA6ICc/JyArIHBhcmFtcztcblxuICAgIC8vIElmIGtleXMgYXJlIHN1cHBsaWVkLCBpc3N1ZSBhIFBPU1QgdG8gY2lyY3VtdmVudCBHRVQgcXVlcnkgc3RyaW5nIGxpbWl0c1xuICAgIC8vIHNlZSBodHRwOi8vd2lraS5hcGFjaGUub3JnL2NvdWNoZGIvSFRUUF92aWV3X0FQSSNRdWVyeWluZ19PcHRpb25zXG4gICAgaWYgKHR5cGVvZiBvcHRzLmtleXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgTUFYX1VSTF9MRU5HVEggPSAyMDAwO1xuICAgICAgLy8gYWNjb3JkaW5nIHRvIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQxNzE4NC82ODA3NDIsXG4gICAgICAvLyB0aGUgZGUgZmFjdG8gVVJMIGxlbmd0aCBsaW1pdCBpcyAyMDAwIGNoYXJhY3RlcnNcblxuICAgICAgdmFyIGtleXNBc1N0cmluZyA9XG4gICAgICAgICdrZXlzPScgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkob3B0cy5rZXlzKSk7XG4gICAgICBpZiAoa2V5c0FzU3RyaW5nLmxlbmd0aCArIHBhcmFtcy5sZW5ndGggKyAxIDw9IE1BWF9VUkxfTEVOR1RIKSB7XG4gICAgICAgIC8vIElmIHRoZSBrZXlzIGFyZSBzaG9ydCBlbm91Z2gsIGRvIGEgR0VULiB3ZSBkbyB0aGlzIHRvIHdvcmsgYXJvdW5kXG4gICAgICAgIC8vIFNhZmFyaSBub3QgdW5kZXJzdGFuZGluZyAzMDRzIG9uIFBPU1RzIChzZWUgcG91Y2hkYi9wb3VjaGRiIzEyMzkpXG4gICAgICAgIHBhcmFtcyArPSAocGFyYW1zWzBdID09PSAnPycgPyAnJicgOiAnPycpICsga2V5c0FzU3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICBpZiAodHlwZW9mIGZ1biA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBib2R5ID0ge2tleXM6IG9wdHMua2V5c307XG4gICAgICAgIH0gZWxzZSB7IC8vIGZ1biBpcyB7bWFwIDogbWFwZnVufSwgc28gYXBwZW5kIHRvIHRoaXNcbiAgICAgICAgICBmdW4ua2V5cyA9IG9wdHMua2V5cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlIGFyZSByZWZlcmVuY2luZyBhIHF1ZXJ5IGRlZmluZWQgaW4gdGhlIGRlc2lnbiBkb2NcbiAgICBpZiAodHlwZW9mIGZ1biA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHBhcnNlVmlld05hbWUoZnVuKTtcbiAgICAgIHJldHVybiBkYi5mZXRjaCgnX2Rlc2lnbi8nICsgcGFydHNbMF0gKyAnL192aWV3LycgKyBwYXJ0c1sxXSArIHBhcmFtcywge1xuICAgICAgICBoZWFkZXJzOiBuZXcgaCh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIG9rID0gcmVzcG9uc2Uub2s7XG4gICAgICAgIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICB0aHJvdyBnZW5lcmF0ZUVycm9yRnJvbVJlc3BvbnNlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmFpbCB0aGUgZW50aXJlIHJlcXVlc3QgaWYgdGhlIHJlc3VsdCBjb250YWlucyBhbiBlcnJvclxuICAgICAgICByZXN1bHQucm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAocm93LnZhbHVlICYmIHJvdy52YWx1ZS5lcnJvciAmJiByb3cudmFsdWUuZXJyb3IgPT09IFwiYnVpbHRpbl9yZWR1Y2VfZXJyb3JcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJvdy5yZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KS50aGVuKHBvc3Rwcm9jZXNzQXR0YWNobWVudHMob3B0cykpO1xuICAgIH1cblxuICAgIC8vIFdlIGFyZSB1c2luZyBhIHRlbXBvcmFyeSB2aWV3LCB0ZXJyaWJsZSBmb3IgcGVyZm9ybWFuY2UsIGdvb2QgZm9yIHRlc3RpbmdcbiAgICBib2R5ID0gYm9keSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhmdW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuW2tleV0pKSB7XG4gICAgICAgIGJvZHlba2V5XSA9IGZ1bltrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keVtrZXldID0gZnVuW2tleV0udG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYi5mZXRjaCgnX3RlbXBfdmlldycgKyBwYXJhbXMsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBoKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgb2sgPSByZXNwb25zZS5vaztcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmICghb2spIHtcbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhyb3cgZ2VuZXJhdGVFcnJvckZyb21SZXNwb25zZShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS50aGVuKHBvc3Rwcm9jZXNzQXR0YWNobWVudHMob3B0cykpO1xuICB9XG5cbiAgLy8gY3VzdG9tIGFkYXB0ZXJzIGNhbiBkZWZpbmUgdGhlaXIgb3duIGFwaS5fcXVlcnlcbiAgLy8gYW5kIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIGN1c3RvbVF1ZXJ5KGRiLCBmdW4sIG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZGIuX3F1ZXJ5KGZ1biwgb3B0cywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjdXN0b20gYWRhcHRlcnMgY2FuIGRlZmluZSB0aGVpciBvd24gYXBpLl92aWV3Q2xlYW51cFxuICAvLyBhbmQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gY3VzdG9tVmlld0NsZWFudXAoZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZGIuX3ZpZXdDbGVhbnVwKGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdHNUbyh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHJlYXNvbi5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIGZvciBhIGxpc3Qgb2YgZG9jcyB0byB1cGRhdGUsIGJhc2VkIG9uIHRoZSBpbnB1dCBkb2NJZC5cbiAgLy8gdGhlIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLCBiZWNhdXNlIHBvc3QtMy4yLjAsIGJ1bGtEb2NzXG4gIC8vIGlzIGFuIGF0b21pYyBvcGVyYXRpb24gaW4gYWxsIHRocmVlIGFkYXB0ZXJzLlxuICBmdW5jdGlvbiBnZXREb2NzVG9QZXJzaXN0KGRvY0lkLCB2aWV3LCBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cykge1xuICAgIHZhciBtZXRhRG9jSWQgPSAnX2xvY2FsL2RvY18nICsgZG9jSWQ7XG4gICAgdmFyIGRlZmF1bHRNZXRhRG9jID0ge19pZDogbWV0YURvY0lkLCBrZXlzOiBbXX07XG4gICAgdmFyIGRvY0RhdGEgPSBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cy5nZXQoZG9jSWQpO1xuICAgIHZhciBpbmRleGFibGVLZXlzVG9LZXlWYWx1ZXMgPSBkb2NEYXRhWzBdO1xuICAgIHZhciBjaGFuZ2VzID0gZG9jRGF0YVsxXTtcblxuICAgIGZ1bmN0aW9uIGdldE1ldGFEb2MoKSB7XG4gICAgICBpZiAoaXNHZW5PbmUoY2hhbmdlcykpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGlvbiAxLCBzbyB3ZSBjYW4gc2FmZWx5IGFzc3VtZSBpbml0aWFsIHN0YXRlXG4gICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIChhdm9pZHMgdW5uZWNlc3NhcnkgR0VUcylcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZWZhdWx0TWV0YURvYyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmlldy5kYi5nZXQobWV0YURvY0lkKS5jYXRjaChkZWZhdWx0c1RvKGRlZmF1bHRNZXRhRG9jKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0S2V5VmFsdWVEb2NzKG1ldGFEb2MpIHtcbiAgICAgIGlmICghbWV0YURvYy5rZXlzLmxlbmd0aCkge1xuICAgICAgICAvLyBubyBrZXlzLCBubyBuZWVkIGZvciBhIGxvb2t1cFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtyb3dzOiBbXX0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZpZXcuZGIuYWxsRG9jcyh7XG4gICAgICAgIGtleXM6IG1ldGFEb2Mua2V5cyxcbiAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzS2V5VmFsdWVEb2NzKG1ldGFEb2MsIGt2RG9jc1Jlcykge1xuICAgICAgdmFyIGt2RG9jcyA9IFtdO1xuICAgICAgdmFyIG9sZEtleXMgPSBuZXcgRXhwb3J0ZWRTZXQoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGt2RG9jc1Jlcy5yb3dzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciByb3cgPSBrdkRvY3NSZXMucm93c1tpXTtcbiAgICAgICAgdmFyIGRvYyA9IHJvdy5kb2M7XG4gICAgICAgIGlmICghZG9jKSB7IC8vIGRlbGV0ZWRcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBrdkRvY3MucHVzaChkb2MpO1xuICAgICAgICBvbGRLZXlzLmFkZChkb2MuX2lkKTtcbiAgICAgICAgZG9jLl9kZWxldGVkID0gIWluZGV4YWJsZUtleXNUb0tleVZhbHVlcy5oYXMoZG9jLl9pZCk7XG4gICAgICAgIGlmICghZG9jLl9kZWxldGVkKSB7XG4gICAgICAgICAgdmFyIGtleVZhbHVlID0gaW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzLmdldChkb2MuX2lkKTtcbiAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBrZXlWYWx1ZSkge1xuICAgICAgICAgICAgZG9jLnZhbHVlID0ga2V5VmFsdWUudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbmV3S2V5cyA9IG1hcFRvS2V5c0FycmF5KGluZGV4YWJsZUtleXNUb0tleVZhbHVlcyk7XG4gICAgICBuZXdLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIW9sZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAvLyBuZXcgZG9jXG4gICAgICAgICAgdmFyIGt2RG9jID0ge1xuICAgICAgICAgICAgX2lkOiBrZXlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGluZGV4YWJsZUtleXNUb0tleVZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBrZXlWYWx1ZSkge1xuICAgICAgICAgICAga3ZEb2MudmFsdWUgPSBrZXlWYWx1ZS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAga3ZEb2NzLnB1c2goa3ZEb2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1ldGFEb2Mua2V5cyA9IHVuaXEobmV3S2V5cy5jb25jYXQobWV0YURvYy5rZXlzKSk7XG4gICAgICBrdkRvY3MucHVzaChtZXRhRG9jKTtcblxuICAgICAgcmV0dXJuIGt2RG9jcztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TWV0YURvYygpLnRoZW4oZnVuY3Rpb24gKG1ldGFEb2MpIHtcbiAgICAgIHJldHVybiBnZXRLZXlWYWx1ZURvY3MobWV0YURvYykudGhlbihmdW5jdGlvbiAoa3ZEb2NzUmVzKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzS2V5VmFsdWVEb2NzKG1ldGFEb2MsIGt2RG9jc1Jlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZXMgYWxsIGVtaXR0ZWQga2V5L3ZhbHVlIGRvY3MgYW5kIG1ldGFEb2NzIGluIHRoZSBtcnZpZXcgZGF0YWJhc2VcbiAgLy8gZm9yIHRoZSBnaXZlbiBiYXRjaCBvZiBkb2N1bWVudHMgZnJvbSB0aGUgc291cmNlIGRhdGFiYXNlXG4gIGZ1bmN0aW9uIHNhdmVLZXlWYWx1ZXModmlldywgZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMsIHNlcSkge1xuICAgIHZhciBzZXFEb2NJZCA9ICdfbG9jYWwvbGFzdFNlcSc7XG4gICAgcmV0dXJuIHZpZXcuZGIuZ2V0KHNlcURvY0lkKVxuICAgICAgLmNhdGNoKGRlZmF1bHRzVG8oe19pZDogc2VxRG9jSWQsIHNlcTogMH0pKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGxhc3RTZXFEb2MpIHtcbiAgICAgICAgdmFyIGRvY0lkcyA9IG1hcFRvS2V5c0FycmF5KGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGRvY0lkcy5tYXAoZnVuY3Rpb24gKGRvY0lkKSB7XG4gICAgICAgICAgcmV0dXJuIGdldERvY3NUb1BlcnNpc3QoZG9jSWQsIHZpZXcsIGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzKTtcbiAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGxpc3RPZkRvY3NUb1BlcnNpc3QpIHtcbiAgICAgICAgICB2YXIgZG9jc1RvUGVyc2lzdCA9IGZsYXR0ZW4obGlzdE9mRG9jc1RvUGVyc2lzdCk7XG4gICAgICAgICAgbGFzdFNlcURvYy5zZXEgPSBzZXE7XG4gICAgICAgICAgZG9jc1RvUGVyc2lzdC5wdXNoKGxhc3RTZXFEb2MpO1xuICAgICAgICAgIC8vIHdyaXRlIGFsbCBkb2NzIGluIGEgc2luZ2xlIG9wZXJhdGlvbiwgdXBkYXRlIHRoZSBzZXEgb25jZVxuICAgICAgICAgIHJldHVybiB2aWV3LmRiLmJ1bGtEb2NzKHtkb2NzIDogZG9jc1RvUGVyc2lzdH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXVldWUodmlldykge1xuICAgIHZhciB2aWV3TmFtZSA9IHR5cGVvZiB2aWV3ID09PSAnc3RyaW5nJyA/IHZpZXcgOiB2aWV3Lm5hbWU7XG4gICAgdmFyIHF1ZXVlID0gcGVyc2lzdGVudFF1ZXVlc1t2aWV3TmFtZV07XG4gICAgaWYgKCFxdWV1ZSkge1xuICAgICAgcXVldWUgPSBwZXJzaXN0ZW50UXVldWVzW3ZpZXdOYW1lXSA9IG5ldyBUYXNrUXVldWUkMSgpO1xuICAgIH1cbiAgICByZXR1cm4gcXVldWU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaWV3KHZpZXcpIHtcbiAgICByZXR1cm4gc2VxdWVudGlhbGl6ZShnZXRRdWV1ZSh2aWV3KSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVZpZXdJblF1ZXVlKHZpZXcpO1xuICAgIH0pKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaWV3SW5RdWV1ZSh2aWV3KSB7XG4gICAgLy8gYmluZCB0aGUgZW1pdCBmdW5jdGlvbiBvbmNlXG4gICAgdmFyIG1hcFJlc3VsdHM7XG4gICAgdmFyIGRvYztcblxuICAgIGZ1bmN0aW9uIGVtaXQoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG91dHB1dCA9IHtpZDogZG9jLl9pZCwga2V5OiBub3JtYWxpemVLZXkoa2V5KX07XG4gICAgICAvLyBEb24ndCBleHBsaWNpdGx5IHN0b3JlIHRoZSB2YWx1ZSB1bmxlc3MgaXQncyBkZWZpbmVkIGFuZCBub24tbnVsbC5cbiAgICAgIC8vIFRoaXMgc2F2ZXMgb24gc3RvcmFnZSBzcGFjZSwgYmVjYXVzZSBvZnRlbiBwZW9wbGUgZG9uJ3QgdXNlIGl0LlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gbm9ybWFsaXplS2V5KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIG1hcFJlc3VsdHMucHVzaChvdXRwdXQpO1xuICAgIH1cblxuICAgIHZhciBtYXBGdW4gPSBtYXBwZXIodmlldy5tYXBGdW4sIGVtaXQpO1xuXG4gICAgdmFyIGN1cnJlbnRTZXEgPSB2aWV3LnNlcSB8fCAwO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0NoYW5nZShkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cywgc2VxKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2F2ZUtleVZhbHVlcyh2aWV3LCBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cywgc2VxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gbmV3IFRhc2tRdWV1ZSQxKCk7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dEJhdGNoKCkge1xuICAgICAgcmV0dXJuIHZpZXcuc291cmNlREIuY2hhbmdlcyh7XG4gICAgICAgIHJldHVybl9kb2NzOiB0cnVlLFxuICAgICAgICBjb25mbGljdHM6IHRydWUsXG4gICAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgICAgc3R5bGU6ICdhbGxfZG9jcycsXG4gICAgICAgIHNpbmNlOiBjdXJyZW50U2VxLFxuICAgICAgICBsaW1pdDogQ0hBTkdFU19CQVRDSF9TSVpFJDFcbiAgICAgIH0pLnRoZW4ocHJvY2Vzc0JhdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQmF0Y2gocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRvY0lkc1RvQ2hhbmdlc0FuZEVtaXRzID0gY3JlYXRlRG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMocmVzdWx0cyk7XG4gICAgICBxdWV1ZS5hZGQocHJvY2Vzc0NoYW5nZShkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cywgY3VycmVudFNlcSkpO1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgQ0hBTkdFU19CQVRDSF9TSVpFJDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3NOZXh0QmF0Y2goKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEb2NJZHNUb0NoYW5nZXNBbmRFbWl0cyhyZXN1bHRzKSB7XG4gICAgICB2YXIgZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHMgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSByZXN1bHRzW2ldO1xuICAgICAgICBpZiAoY2hhbmdlLmRvYy5faWRbMF0gIT09ICdfJykge1xuICAgICAgICAgIG1hcFJlc3VsdHMgPSBbXTtcbiAgICAgICAgICBkb2MgPSBjaGFuZ2UuZG9jO1xuXG4gICAgICAgICAgaWYgKCFkb2MuX2RlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRyeU1hcCh2aWV3LnNvdXJjZURCLCBtYXBGdW4sIGRvYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hcFJlc3VsdHMuc29ydChzb3J0QnlLZXlUaGVuVmFsdWUpO1xuXG4gICAgICAgICAgdmFyIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcyA9IGNyZWF0ZUluZGV4YWJsZUtleXNUb0tleVZhbHVlcyhtYXBSZXN1bHRzKTtcbiAgICAgICAgICBkb2NJZHNUb0NoYW5nZXNBbmRFbWl0cy5zZXQoY2hhbmdlLmRvYy5faWQsIFtcbiAgICAgICAgICAgIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcyxcbiAgICAgICAgICAgIGNoYW5nZS5jaGFuZ2VzXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNlcSA9IGNoYW5nZS5zZXE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9jSWRzVG9DaGFuZ2VzQW5kRW1pdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5kZXhhYmxlS2V5c1RvS2V5VmFsdWVzKG1hcFJlc3VsdHMpIHtcbiAgICAgIHZhciBpbmRleGFibGVLZXlzVG9LZXlWYWx1ZXMgPSBuZXcgRXhwb3J0ZWRNYXAoKTtcbiAgICAgIHZhciBsYXN0S2V5O1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG1hcFJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGVtaXR0ZWRLZXlWYWx1ZSA9IG1hcFJlc3VsdHNbaV07XG4gICAgICAgIHZhciBjb21wbGV4S2V5ID0gW2VtaXR0ZWRLZXlWYWx1ZS5rZXksIGVtaXR0ZWRLZXlWYWx1ZS5pZF07XG4gICAgICAgIGlmIChpID4gMCAmJiBjb2xsYXRlKGVtaXR0ZWRLZXlWYWx1ZS5rZXksIGxhc3RLZXkpID09PSAwKSB7XG4gICAgICAgICAgY29tcGxleEtleS5wdXNoKGkpOyAvLyBkdXAga2V5K2lkLCBzbyBtYWtlIGl0IHVuaXF1ZVxuICAgICAgICB9XG4gICAgICAgIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcy5zZXQodG9JbmRleGFibGVTdHJpbmcoY29tcGxleEtleSksIGVtaXR0ZWRLZXlWYWx1ZSk7XG4gICAgICAgIGxhc3RLZXkgPSBlbWl0dGVkS2V5VmFsdWUua2V5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4YWJsZUtleXNUb0tleVZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc05leHRCYXRjaCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHF1ZXVlLmZpbmlzaCgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmlldy5zZXEgPSBjdXJyZW50U2VxO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlVmlldyh2aWV3LCByZXN1bHRzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZ3JvdXBfbGV2ZWwgPT09IDApIHtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLmdyb3VwX2xldmVsO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRHcm91cCA9IG9wdGlvbnMuZ3JvdXAgfHwgb3B0aW9ucy5ncm91cF9sZXZlbDtcblxuICAgIHZhciByZWR1Y2VGdW4gPSByZWR1Y2VyKHZpZXcucmVkdWNlRnVuKTtcblxuICAgIHZhciBncm91cHMgPSBbXTtcbiAgICB2YXIgbHZsID0gaXNOYU4ob3B0aW9ucy5ncm91cF9sZXZlbCkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOlxuICAgICAgb3B0aW9ucy5ncm91cF9sZXZlbDtcbiAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBsYXN0ID0gZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBncm91cEtleSA9IHNob3VsZEdyb3VwID8gZS5rZXkgOiBudWxsO1xuXG4gICAgICAvLyBvbmx5IHNldCBncm91cF9sZXZlbCBmb3IgYXJyYXkga2V5c1xuICAgICAgaWYgKHNob3VsZEdyb3VwICYmIEFycmF5LmlzQXJyYXkoZ3JvdXBLZXkpKSB7XG4gICAgICAgIGdyb3VwS2V5ID0gZ3JvdXBLZXkuc2xpY2UoMCwgbHZsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3QgJiYgY29sbGF0ZShsYXN0Lmdyb3VwS2V5LCBncm91cEtleSkgPT09IDApIHtcbiAgICAgICAgbGFzdC5rZXlzLnB1c2goW2Uua2V5LCBlLmlkXSk7XG4gICAgICAgIGxhc3QudmFsdWVzLnB1c2goZS52YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAga2V5czogW1tlLmtleSwgZS5pZF1dLFxuICAgICAgICB2YWx1ZXM6IFtlLnZhbHVlXSxcbiAgICAgICAgZ3JvdXBLZXk6IGdyb3VwS2V5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGUgPSBncm91cHNbaV07XG4gICAgICB2YXIgcmVkdWNlVHJ5ID0gdHJ5UmVkdWNlKHZpZXcuc291cmNlREIsIHJlZHVjZUZ1biwgZS5rZXlzLCBlLnZhbHVlcywgZmFsc2UpO1xuICAgICAgaWYgKHJlZHVjZVRyeS5lcnJvciAmJiByZWR1Y2VUcnkuZXJyb3IgaW5zdGFuY2VvZiBCdWlsdEluRXJyb3IpIHtcbiAgICAgICAgLy8gQ291Y2hEQiByZXR1cm5zIGFuIGVycm9yIGlmIGEgYnVpbHQtaW4gZXJyb3JzIG91dFxuICAgICAgICB0aHJvdyByZWR1Y2VUcnkuZXJyb3I7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAvLyBDb3VjaERCIGp1c3Qgc2V0cyB0aGUgdmFsdWUgdG8gbnVsbCBpZiBhIG5vbi1idWlsdC1pbiBlcnJvcnMgb3V0XG4gICAgICAgIHZhbHVlOiByZWR1Y2VUcnkuZXJyb3IgPyBudWxsIDogcmVkdWNlVHJ5Lm91dHB1dCxcbiAgICAgICAga2V5OiBlLmdyb3VwS2V5XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gbm8gdG90YWxfcm93cy9vZmZzZXQgd2hlbiByZWR1Y2luZ1xuICAgIHJldHVybiB7cm93czogc2xpY2VSZXN1bHRzKHJlc3VsdHMsIG9wdGlvbnMubGltaXQsIG9wdGlvbnMuc2tpcCl9O1xuICB9XG5cbiAgZnVuY3Rpb24gcXVlcnlWaWV3KHZpZXcsIG9wdHMpIHtcbiAgICByZXR1cm4gc2VxdWVudGlhbGl6ZShnZXRRdWV1ZSh2aWV3KSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5Vmlld0luUXVldWUodmlldywgb3B0cyk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1ZXJ5Vmlld0luUXVldWUodmlldywgb3B0cykge1xuICAgIHZhciB0b3RhbFJvd3M7XG4gICAgdmFyIHNob3VsZFJlZHVjZSA9IHZpZXcucmVkdWNlRnVuICYmIG9wdHMucmVkdWNlICE9PSBmYWxzZTtcbiAgICB2YXIgc2tpcCA9IG9wdHMuc2tpcCB8fCAwO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5rZXlzICE9PSAndW5kZWZpbmVkJyAmJiAhb3B0cy5rZXlzLmxlbmd0aCkge1xuICAgICAgLy8gZXF1aXZhbGVudCBxdWVyeVxuICAgICAgb3B0cy5saW1pdCA9IDA7XG4gICAgICBkZWxldGUgb3B0cy5rZXlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZldGNoRnJvbVZpZXcodmlld09wdHMpIHtcbiAgICAgIHZpZXdPcHRzLmluY2x1ZGVfZG9jcyA9IHRydWU7XG4gICAgICByZXR1cm4gdmlldy5kYi5hbGxEb2NzKHZpZXdPcHRzKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdG90YWxSb3dzID0gcmVzLnRvdGFsX3Jvd3M7XG4gICAgICAgIHJldHVybiByZXMucm93cy5tYXAoZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgICAgLy8gaW1wbGljaXQgbWlncmF0aW9uIC0gaW4gb2xkZXIgdmVyc2lvbnMgb2YgUG91Y2hEQixcbiAgICAgICAgICAvLyB3ZSBleHBsaWNpdGx5IHN0b3JlZCB0aGUgZG9jIGFzIHtpZDogLi4uLCBrZXk6IC4uLiwgdmFsdWU6IC4uLn1cbiAgICAgICAgICAvLyB0aGlzIGlzIHRlc3RlZCBpbiBhIG1pZ3JhdGlvbiB0ZXN0XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiByZXN1bHQuZG9jICYmIHR5cGVvZiByZXN1bHQuZG9jLnZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgcmVzdWx0LmRvYy52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQuZG9jLnZhbHVlKS5zb3J0KCk7XG4gICAgICAgICAgICAvLyB0aGlzIGRldGVjdGlvbiBtZXRob2QgaXMgbm90IHBlcmZlY3QsIGJ1dCBpdCdzIHVubGlrZWx5IHRoZSB1c2VyXG4gICAgICAgICAgICAvLyBlbWl0dGVkIGEgdmFsdWUgd2hpY2ggd2FzIGFuIG9iamVjdCB3aXRoIHRoZXNlIDMgZXhhY3Qga2V5c1xuICAgICAgICAgICAgdmFyIGV4cGVjdGVkS2V5cyA9IFsnaWQnLCAna2V5JywgJ3ZhbHVlJ107XG4gICAgICAgICAgICBpZiAoIShrZXlzIDwgZXhwZWN0ZWRLZXlzIHx8IGtleXMgPiBleHBlY3RlZEtleXMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZG9jLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwYXJzZWRLZXlBbmREb2NJZCA9IHBhcnNlSW5kZXhhYmxlU3RyaW5nKHJlc3VsdC5kb2MuX2lkKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBwYXJzZWRLZXlBbmREb2NJZFswXSxcbiAgICAgICAgICAgIGlkOiBwYXJzZWRLZXlBbmREb2NJZFsxXSxcbiAgICAgICAgICAgIHZhbHVlOiAoJ3ZhbHVlJyBpbiByZXN1bHQuZG9jID8gcmVzdWx0LmRvYy52YWx1ZSA6IG51bGwpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1hcFJlc3VsdHNSZWFkeShyb3dzKSB7XG4gICAgICB2YXIgZmluYWxSZXN1bHRzO1xuICAgICAgaWYgKHNob3VsZFJlZHVjZSkge1xuICAgICAgICBmaW5hbFJlc3VsdHMgPSByZWR1Y2VWaWV3KHZpZXcsIHJvd3MsIG9wdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmluYWxSZXN1bHRzID0ge1xuICAgICAgICAgIHRvdGFsX3Jvd3M6IHRvdGFsUm93cyxcbiAgICAgICAgICBvZmZzZXQ6IHNraXAsXG4gICAgICAgICAgcm93czogcm93c1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAob3B0cy51cGRhdGVfc2VxKSB7XG4gICAgICAgIGZpbmFsUmVzdWx0cy51cGRhdGVfc2VxID0gdmlldy5zZXE7XG4gICAgICB9XG4gICAgICBpZiAob3B0cy5pbmNsdWRlX2RvY3MpIHtcbiAgICAgICAgdmFyIGRvY0lkcyA9IHVuaXEocm93cy5tYXAocm93VG9Eb2NJZCkpO1xuXG4gICAgICAgIHJldHVybiB2aWV3LnNvdXJjZURCLmFsbERvY3Moe1xuICAgICAgICAgIGtleXM6IGRvY0lkcyxcbiAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWUsXG4gICAgICAgICAgY29uZmxpY3RzOiBvcHRzLmNvbmZsaWN0cyxcbiAgICAgICAgICBhdHRhY2htZW50czogb3B0cy5hdHRhY2htZW50cyxcbiAgICAgICAgICBiaW5hcnk6IG9wdHMuYmluYXJ5XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGFsbERvY3NSZXMpIHtcbiAgICAgICAgICB2YXIgZG9jSWRzVG9Eb2NzID0gbmV3IEV4cG9ydGVkTWFwKCk7XG4gICAgICAgICAgYWxsRG9jc1Jlcy5yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgZG9jSWRzVG9Eb2NzLnNldChyb3cuaWQsIHJvdy5kb2MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICB2YXIgZG9jSWQgPSByb3dUb0RvY0lkKHJvdyk7XG4gICAgICAgICAgICB2YXIgZG9jID0gZG9jSWRzVG9Eb2NzLmdldChkb2NJZCk7XG4gICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgIHJvdy5kb2MgPSBkb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZpbmFsUmVzdWx0cztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5rZXlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGtleXMgPSBvcHRzLmtleXM7XG4gICAgICB2YXIgZmV0Y2hQcm9taXNlcyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZpZXdPcHRzID0ge1xuICAgICAgICAgIHN0YXJ0a2V5IDogdG9JbmRleGFibGVTdHJpbmcoW2tleV0pLFxuICAgICAgICAgIGVuZGtleSAgIDogdG9JbmRleGFibGVTdHJpbmcoW2tleSwge31dKVxuICAgICAgICB9O1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKG9wdHMudXBkYXRlX3NlcSkge1xuICAgICAgICAgIHZpZXdPcHRzLnVwZGF0ZV9zZXEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaEZyb21WaWV3KHZpZXdPcHRzKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZldGNoUHJvbWlzZXMpLnRoZW4oZmxhdHRlbikudGhlbihvbk1hcFJlc3VsdHNSZWFkeSk7XG4gICAgfSBlbHNlIHsgLy8gbm9ybWFsIHF1ZXJ5LCBubyAna2V5cydcbiAgICAgIHZhciB2aWV3T3B0cyA9IHtcbiAgICAgICAgZGVzY2VuZGluZyA6IG9wdHMuZGVzY2VuZGluZ1xuICAgICAgfTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKG9wdHMudXBkYXRlX3NlcSkge1xuICAgICAgICB2aWV3T3B0cy51cGRhdGVfc2VxID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGFydGtleTtcbiAgICAgIHZhciBlbmRrZXk7XG4gICAgICBpZiAoJ3N0YXJ0X2tleScgaW4gb3B0cykge1xuICAgICAgICBzdGFydGtleSA9IG9wdHMuc3RhcnRfa2V5O1xuICAgICAgfVxuICAgICAgaWYgKCdzdGFydGtleScgaW4gb3B0cykge1xuICAgICAgICBzdGFydGtleSA9IG9wdHMuc3RhcnRrZXk7XG4gICAgICB9XG4gICAgICBpZiAoJ2VuZF9rZXknIGluIG9wdHMpIHtcbiAgICAgICAgZW5ka2V5ID0gb3B0cy5lbmRfa2V5O1xuICAgICAgfVxuICAgICAgaWYgKCdlbmRrZXknIGluIG9wdHMpIHtcbiAgICAgICAgZW5ka2V5ID0gb3B0cy5lbmRrZXk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0a2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2aWV3T3B0cy5zdGFydGtleSA9IG9wdHMuZGVzY2VuZGluZyA/XG4gICAgICAgICAgdG9JbmRleGFibGVTdHJpbmcoW3N0YXJ0a2V5LCB7fV0pIDpcbiAgICAgICAgICB0b0luZGV4YWJsZVN0cmluZyhbc3RhcnRrZXldKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZW5ka2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgaW5jbHVzaXZlRW5kID0gb3B0cy5pbmNsdXNpdmVfZW5kICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdHMuZGVzY2VuZGluZykge1xuICAgICAgICAgIGluY2x1c2l2ZUVuZCA9ICFpbmNsdXNpdmVFbmQ7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3T3B0cy5lbmRrZXkgPSB0b0luZGV4YWJsZVN0cmluZyhcbiAgICAgICAgICBpbmNsdXNpdmVFbmQgPyBbZW5ka2V5LCB7fV0gOiBbZW5ka2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdHMua2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIga2V5U3RhcnQgPSB0b0luZGV4YWJsZVN0cmluZyhbb3B0cy5rZXldKTtcbiAgICAgICAgdmFyIGtleUVuZCA9IHRvSW5kZXhhYmxlU3RyaW5nKFtvcHRzLmtleSwge31dKTtcbiAgICAgICAgaWYgKHZpZXdPcHRzLmRlc2NlbmRpbmcpIHtcbiAgICAgICAgICB2aWV3T3B0cy5lbmRrZXkgPSBrZXlTdGFydDtcbiAgICAgICAgICB2aWV3T3B0cy5zdGFydGtleSA9IGtleUVuZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3T3B0cy5zdGFydGtleSA9IGtleVN0YXJ0O1xuICAgICAgICAgIHZpZXdPcHRzLmVuZGtleSA9IGtleUVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG91bGRSZWR1Y2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmxpbWl0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZpZXdPcHRzLmxpbWl0ID0gb3B0cy5saW1pdDtcbiAgICAgICAgfVxuICAgICAgICB2aWV3T3B0cy5za2lwID0gc2tpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZXRjaEZyb21WaWV3KHZpZXdPcHRzKS50aGVuKG9uTWFwUmVzdWx0c1JlYWR5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodHRwVmlld0NsZWFudXAoZGIpIHtcbiAgICByZXR1cm4gZGIuZmV0Y2goJ192aWV3X2NsZWFudXAnLCB7XG4gICAgICBoZWFkZXJzOiBuZXcgaCh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pLFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsVmlld0NsZWFudXAoZGIpIHtcbiAgICByZXR1cm4gZGIuZ2V0KCdfbG9jYWwvJyArIGxvY2FsRG9jTmFtZSkudGhlbihmdW5jdGlvbiAobWV0YURvYykge1xuICAgICAgdmFyIGRvY3NUb1ZpZXdzID0gbmV3IEV4cG9ydGVkTWFwKCk7XG4gICAgICBPYmplY3Qua2V5cyhtZXRhRG9jLnZpZXdzKS5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsVmlld05hbWUpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gcGFyc2VWaWV3TmFtZShmdWxsVmlld05hbWUpO1xuICAgICAgICB2YXIgZGVzaWduRG9jTmFtZSA9ICdfZGVzaWduLycgKyBwYXJ0c1swXTtcbiAgICAgICAgdmFyIHZpZXdOYW1lID0gcGFydHNbMV07XG4gICAgICAgIHZhciB2aWV3cyA9IGRvY3NUb1ZpZXdzLmdldChkZXNpZ25Eb2NOYW1lKTtcbiAgICAgICAgaWYgKCF2aWV3cykge1xuICAgICAgICAgIHZpZXdzID0gbmV3IEV4cG9ydGVkU2V0KCk7XG4gICAgICAgICAgZG9jc1RvVmlld3Muc2V0KGRlc2lnbkRvY05hbWUsIHZpZXdzKTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3cy5hZGQodmlld05hbWUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAga2V5cyA6IG1hcFRvS2V5c0FycmF5KGRvY3NUb1ZpZXdzKSxcbiAgICAgICAgaW5jbHVkZV9kb2NzIDogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBkYi5hbGxEb2NzKG9wdHMpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgdmlld3NUb1N0YXR1cyA9IHt9O1xuICAgICAgICByZXMucm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICB2YXIgZGRvY05hbWUgPSByb3cua2V5LnN1YnN0cmluZyg4KTsgLy8gY3V0cyBvZmYgJ19kZXNpZ24vJ1xuICAgICAgICAgIGRvY3NUb1ZpZXdzLmdldChyb3cua2V5KS5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3TmFtZSkge1xuICAgICAgICAgICAgdmFyIGZ1bGxWaWV3TmFtZSA9IGRkb2NOYW1lICsgJy8nICsgdmlld05hbWU7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgIGlmICghbWV0YURvYy52aWV3c1tmdWxsVmlld05hbWVdKSB7XG4gICAgICAgICAgICAgIC8vIG5ldyBmb3JtYXQsIHdpdGhvdXQgc2xhc2hlcywgdG8gc3VwcG9ydCBQb3VjaERCIDIuMi4wXG4gICAgICAgICAgICAgIC8vIG1pZ3JhdGlvbiB0ZXN0IGluIHBvdWNoZGIncyBicm93c2VyLm1pZ3JhdGlvbi5qcyB2ZXJpZmllcyB0aGlzXG4gICAgICAgICAgICAgIGZ1bGxWaWV3TmFtZSA9IHZpZXdOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZpZXdEQk5hbWVzID0gT2JqZWN0LmtleXMobWV0YURvYy52aWV3c1tmdWxsVmlld05hbWVdKTtcbiAgICAgICAgICAgIC8vIGRlc2lnbiBkb2MgZGVsZXRlZCwgb3IgdmlldyBmdW5jdGlvbiBub25leGlzdGVudFxuICAgICAgICAgICAgdmFyIHN0YXR1c0lzR29vZCA9IHJvdy5kb2MgJiYgcm93LmRvYy52aWV3cyAmJlxuICAgICAgICAgICAgICByb3cuZG9jLnZpZXdzW3ZpZXdOYW1lXTtcbiAgICAgICAgICAgIHZpZXdEQk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHZpZXdEQk5hbWUpIHtcbiAgICAgICAgICAgICAgdmlld3NUb1N0YXR1c1t2aWV3REJOYW1lXSA9XG4gICAgICAgICAgICAgICAgdmlld3NUb1N0YXR1c1t2aWV3REJOYW1lXSB8fCBzdGF0dXNJc0dvb2Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkYnNUb0RlbGV0ZSA9IE9iamVjdC5rZXlzKHZpZXdzVG9TdGF0dXMpLmZpbHRlcihcbiAgICAgICAgICBmdW5jdGlvbiAodmlld0RCTmFtZSkgeyByZXR1cm4gIXZpZXdzVG9TdGF0dXNbdmlld0RCTmFtZV07IH0pO1xuICAgICAgICB2YXIgZGVzdHJveVByb21pc2VzID0gZGJzVG9EZWxldGUubWFwKGZ1bmN0aW9uICh2aWV3REJOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHNlcXVlbnRpYWxpemUoZ2V0UXVldWUodmlld0RCTmFtZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZGIuY29uc3RydWN0b3Iodmlld0RCTmFtZSwgZGIuX19vcHRzKS5kZXN0cm95KCk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChkZXN0cm95UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7b2s6IHRydWV9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIGRlZmF1bHRzVG8oe29rOiB0cnVlfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVlcnlQcm9taXNlZChkYiwgZnVuLCBvcHRzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRiLl9xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGN1c3RvbVF1ZXJ5KGRiLCBmdW4sIG9wdHMpO1xuICAgIH1cbiAgICBpZiAoaXNSZW1vdGUoZGIpKSB7XG4gICAgICByZXR1cm4gaHR0cFF1ZXJ5KGRiLCBmdW4sIG9wdHMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZnVuICE9PSAnc3RyaW5nJykge1xuICAgICAgLy8gdGVtcF92aWV3XG4gICAgICBjaGVja1F1ZXJ5UGFyc2VFcnJvcihvcHRzLCBmdW4pO1xuXG4gICAgICB0ZW1wVmlld1F1ZXVlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjcmVhdGVWaWV3UHJvbWlzZSA9IGNyZWF0ZVZpZXcoXG4gICAgICAgICAgLyogc291cmNlREIgKi8gZGIsXG4gICAgICAgICAgLyogdmlld05hbWUgKi8gJ3RlbXBfdmlldy90ZW1wX3ZpZXcnLFxuICAgICAgICAgIC8qIG1hcEZ1biAqLyBmdW4ubWFwLFxuICAgICAgICAgIC8qIHJlZHVjZUZ1biAqLyBmdW4ucmVkdWNlLFxuICAgICAgICAgIC8qIHRlbXBvcmFyeSAqLyB0cnVlLFxuICAgICAgICAgIC8qIGxvY2FsRG9jTmFtZSAqLyBsb2NhbERvY05hbWUpO1xuICAgICAgICByZXR1cm4gY3JlYXRlVmlld1Byb21pc2UudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgIHJldHVybiBmaW4odXBkYXRlVmlldyh2aWV3KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeVZpZXcodmlldywgb3B0cyk7XG4gICAgICAgICAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmRiLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0ZW1wVmlld1F1ZXVlLmZpbmlzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwZXJzaXN0ZW50IHZpZXdcbiAgICAgIHZhciBmdWxsVmlld05hbWUgPSBmdW47XG4gICAgICB2YXIgcGFydHMgPSBwYXJzZVZpZXdOYW1lKGZ1bGxWaWV3TmFtZSk7XG4gICAgICB2YXIgZGVzaWduRG9jTmFtZSA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHZpZXdOYW1lID0gcGFydHNbMV07XG4gICAgICByZXR1cm4gZGIuZ2V0KCdfZGVzaWduLycgKyBkZXNpZ25Eb2NOYW1lKS50aGVuKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIGZ1biA9IGRvYy52aWV3cyAmJiBkb2Mudmlld3Nbdmlld05hbWVdO1xuXG4gICAgICAgIGlmICghZnVuKSB7XG4gICAgICAgICAgLy8gYmFzaWMgdmFsaWRhdG9yOyBpdCdzIGFzc3VtZWQgdGhhdCBldmVyeSBzdWJjbGFzcyB3b3VsZCB3YW50IHRoaXNcbiAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignZGRvYyAnICsgZG9jLl9pZCArICcgaGFzIG5vIHZpZXcgbmFtZWQgJyArXG4gICAgICAgICAgICB2aWV3TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZG9jVmFsaWRhdG9yKGRvYywgdmlld05hbWUpO1xuICAgICAgICBjaGVja1F1ZXJ5UGFyc2VFcnJvcihvcHRzLCBmdW4pO1xuXG4gICAgICAgIHZhciBjcmVhdGVWaWV3UHJvbWlzZSA9IGNyZWF0ZVZpZXcoXG4gICAgICAgICAgLyogc291cmNlREIgKi8gZGIsXG4gICAgICAgICAgLyogdmlld05hbWUgKi8gZnVsbFZpZXdOYW1lLFxuICAgICAgICAgIC8qIG1hcEZ1biAqLyBmdW4ubWFwLFxuICAgICAgICAgIC8qIHJlZHVjZUZ1biAqLyBmdW4ucmVkdWNlLFxuICAgICAgICAgIC8qIHRlbXBvcmFyeSAqLyBmYWxzZSxcbiAgICAgICAgICAvKiBsb2NhbERvY05hbWUgKi8gbG9jYWxEb2NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZpZXdQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICBpZiAob3B0cy5zdGFsZSA9PT0gJ29rJyB8fCBvcHRzLnN0YWxlID09PSAndXBkYXRlX2FmdGVyJykge1xuICAgICAgICAgICAgaWYgKG9wdHMuc3RhbGUgPT09ICd1cGRhdGVfYWZ0ZXInKSB7XG4gICAgICAgICAgICAgIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmlldyh2aWV3KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnlWaWV3KHZpZXcsIG9wdHMpO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIHN0YWxlIG5vdCBva1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVZpZXcodmlldykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBxdWVyeVZpZXcodmlldywgb3B0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWJzdHJhY3RRdWVyeShmdW4sIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGRiID0gdGhpcztcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgPyBjb2VyY2VPcHRpb25zKG9wdHMpIDoge307XG5cbiAgICBpZiAodHlwZW9mIGZ1biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuID0ge21hcCA6IGZ1bn07XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBxdWVyeVByb21pc2VkKGRiLCBmdW4sIG9wdHMpO1xuICAgIH0pO1xuICAgIHByb21pc2VkQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIGFic3RyYWN0Vmlld0NsZWFudXAgPSBjYWxsYmFja2lmeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRiID0gdGhpcztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGIuX3ZpZXdDbGVhbnVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY3VzdG9tVmlld0NsZWFudXAoZGIpO1xuICAgIH1cbiAgICBpZiAoaXNSZW1vdGUoZGIpKSB7XG4gICAgICByZXR1cm4gaHR0cFZpZXdDbGVhbnVwKGRiKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsVmlld0NsZWFudXAoZGIpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBhYnN0cmFjdFF1ZXJ5LFxuICAgIHZpZXdDbGVhbnVwOiBhYnN0cmFjdFZpZXdDbGVhbnVwXG4gIH07XG59XG5cbnZhciBidWlsdEluUmVkdWNlID0ge1xuICBfc3VtOiBmdW5jdGlvbiAoa2V5cywgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHN1bSh2YWx1ZXMpO1xuICB9LFxuXG4gIF9jb3VudDogZnVuY3Rpb24gKGtleXMsIHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoO1xuICB9LFxuXG4gIF9zdGF0czogZnVuY3Rpb24gKGtleXMsIHZhbHVlcykge1xuICAgIC8vIG5vIG5lZWQgdG8gaW1wbGVtZW50IHJlcmVkdWNlPXRydWUsIGJlY2F1c2UgUG91Y2hcbiAgICAvLyB3aWxsIG5ldmVyIGNhbGwgaXRcbiAgICBmdW5jdGlvbiBzdW1zcXIodmFsdWVzKSB7XG4gICAgICB2YXIgX3N1bXNxciA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBudW0gPSB2YWx1ZXNbaV07XG4gICAgICAgIF9zdW1zcXIgKz0gKG51bSAqIG51bSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3N1bXNxcjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1bSAgICAgOiBzdW0odmFsdWVzKSxcbiAgICAgIG1pbiAgICAgOiBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZXMpLFxuICAgICAgbWF4ICAgICA6IE1hdGgubWF4LmFwcGx5KG51bGwsIHZhbHVlcyksXG4gICAgICBjb3VudCAgIDogdmFsdWVzLmxlbmd0aCxcbiAgICAgIHN1bXNxciA6IHN1bXNxcih2YWx1ZXMpXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QnVpbHRJbihyZWR1Y2VGdW5TdHJpbmcpIHtcbiAgaWYgKC9eX3N1bS8udGVzdChyZWR1Y2VGdW5TdHJpbmcpKSB7XG4gICAgcmV0dXJuIGJ1aWx0SW5SZWR1Y2UuX3N1bTtcbiAgfSBlbHNlIGlmICgvXl9jb3VudC8udGVzdChyZWR1Y2VGdW5TdHJpbmcpKSB7XG4gICAgcmV0dXJuIGJ1aWx0SW5SZWR1Y2UuX2NvdW50O1xuICB9IGVsc2UgaWYgKC9eX3N0YXRzLy50ZXN0KHJlZHVjZUZ1blN0cmluZykpIHtcbiAgICByZXR1cm4gYnVpbHRJblJlZHVjZS5fc3RhdHM7XG4gIH0gZWxzZSBpZiAoL15fLy50ZXN0KHJlZHVjZUZ1blN0cmluZykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVkdWNlRnVuU3RyaW5nICsgJyBpcyBub3QgYSBzdXBwb3J0ZWQgcmVkdWNlIGZ1bmN0aW9uLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcHBlcihtYXBGdW4sIGVtaXQpIHtcbiAgLy8gZm9yIHRlbXBfdmlld3Mgb25lIGNhbiB1c2UgZW1pdChkb2MsIGVtaXQpLCBzZWUgIzM4XG4gIGlmICh0eXBlb2YgbWFwRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgbWFwRnVuLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciBvcmlnTWFwID0gbWFwRnVuO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICByZXR1cm4gb3JpZ01hcChkb2MsIGVtaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV2YWxGdW5jdGlvbldpdGhFdmFsKG1hcEZ1bi50b1N0cmluZygpLCBlbWl0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHJlZHVjZUZ1bikge1xuICB2YXIgcmVkdWNlRnVuU3RyaW5nID0gcmVkdWNlRnVuLnRvU3RyaW5nKCk7XG4gIHZhciBidWlsdEluID0gZ2V0QnVpbHRJbihyZWR1Y2VGdW5TdHJpbmcpO1xuICBpZiAoYnVpbHRJbikge1xuICAgIHJldHVybiBidWlsdEluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBldmFsRnVuY3Rpb25XaXRoRXZhbChyZWR1Y2VGdW5TdHJpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRkb2NWYWxpZGF0b3IoZGRvYywgdmlld05hbWUpIHtcbiAgdmFyIGZ1biA9IGRkb2Mudmlld3MgJiYgZGRvYy52aWV3c1t2aWV3TmFtZV07XG4gIGlmICh0eXBlb2YgZnVuLm1hcCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignZGRvYyAnICsgZGRvYy5faWQgKyAnIGhhcyBubyBzdHJpbmcgdmlldyBuYW1lZCAnICtcbiAgICAgIHZpZXdOYW1lICsgJywgaW5zdGVhZCBmb3VuZCBvYmplY3Qgb2YgdHlwZTogJyArIHR5cGVvZiBmdW4ubWFwKTtcbiAgfVxufVxuXG52YXIgbG9jYWxEb2NOYW1lID0gJ21ydmlld3MnO1xudmFyIGFic3RyYWN0ID0gY3JlYXRlQWJzdHJhY3RNYXBSZWR1Y2UobG9jYWxEb2NOYW1lLCBtYXBwZXIsIHJlZHVjZXIsIGRkb2NWYWxpZGF0b3IpO1xuXG5mdW5jdGlvbiBxdWVyeShmdW4sIG9wdHMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBhYnN0cmFjdC5xdWVyeS5jYWxsKHRoaXMsIGZ1biwgb3B0cywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiB2aWV3Q2xlYW51cChjYWxsYmFjaykge1xuICByZXR1cm4gYWJzdHJhY3Qudmlld0NsZWFudXAuY2FsbCh0aGlzLCBjYWxsYmFjayk7XG59XG5cbnZhciBtYXByZWR1Y2UgPSB7XG4gIHF1ZXJ5OiBxdWVyeSxcbiAgdmlld0NsZWFudXA6IHZpZXdDbGVhbnVwXG59O1xuXG5mdW5jdGlvbiBpc0dlbk9uZSQxKHJldiQkMSkge1xuICByZXR1cm4gL14xLS8udGVzdChyZXYkJDEpO1xufVxuXG5mdW5jdGlvbiBmaWxlSGFzQ2hhbmdlZChsb2NhbERvYywgcmVtb3RlRG9jLCBmaWxlbmFtZSkge1xuICByZXR1cm4gIWxvY2FsRG9jLl9hdHRhY2htZW50cyB8fFxuICAgICAgICAgIWxvY2FsRG9jLl9hdHRhY2htZW50c1tmaWxlbmFtZV0gfHxcbiAgICAgICAgIGxvY2FsRG9jLl9hdHRhY2htZW50c1tmaWxlbmFtZV0uZGlnZXN0ICE9PSByZW1vdGVEb2MuX2F0dGFjaG1lbnRzW2ZpbGVuYW1lXS5kaWdlc3Q7XG59XG5cbmZ1bmN0aW9uIGdldERvY0F0dGFjaG1lbnRzKGRiLCBkb2MpIHtcbiAgdmFyIGZpbGVuYW1lcyA9IE9iamVjdC5rZXlzKGRvYy5fYXR0YWNobWVudHMpO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZW5hbWVzLm1hcChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gZGIuZ2V0QXR0YWNobWVudChkb2MuX2lkLCBmaWxlbmFtZSwge3JldjogZG9jLl9yZXZ9KTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXREb2NBdHRhY2htZW50c0Zyb21UYXJnZXRPclNvdXJjZSh0YXJnZXQsIHNyYywgZG9jKSB7XG4gIHZhciBkb0NoZWNrRm9yTG9jYWxBdHRhY2htZW50cyA9IGlzUmVtb3RlKHNyYykgJiYgIWlzUmVtb3RlKHRhcmdldCk7XG4gIHZhciBmaWxlbmFtZXMgPSBPYmplY3Qua2V5cyhkb2MuX2F0dGFjaG1lbnRzKTtcblxuICBpZiAoIWRvQ2hlY2tGb3JMb2NhbEF0dGFjaG1lbnRzKSB7XG4gICAgcmV0dXJuIGdldERvY0F0dGFjaG1lbnRzKHNyYywgZG9jKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQuZ2V0KGRvYy5faWQpLnRoZW4oZnVuY3Rpb24gKGxvY2FsRG9jKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGZpbGVuYW1lcy5tYXAoZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICBpZiAoZmlsZUhhc0NoYW5nZWQobG9jYWxEb2MsIGRvYywgZmlsZW5hbWUpKSB7XG4gICAgICAgIHJldHVybiBzcmMuZ2V0QXR0YWNobWVudChkb2MuX2lkLCBmaWxlbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0YWNobWVudChsb2NhbERvYy5faWQsIGZpbGVuYW1lKTtcbiAgICB9KSk7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldERvY0F0dGFjaG1lbnRzKHNyYywgZG9jKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1bGtHZXRPcHRzKGRpZmZzKSB7XG4gIHZhciByZXF1ZXN0cyA9IFtdO1xuICBPYmplY3Qua2V5cyhkaWZmcykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgbWlzc2luZ1JldnMgPSBkaWZmc1tpZF0ubWlzc2luZztcbiAgICBtaXNzaW5nUmV2cy5mb3JFYWNoKGZ1bmN0aW9uIChtaXNzaW5nUmV2KSB7XG4gICAgICByZXF1ZXN0cy5wdXNoKHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZXY6IG1pc3NpbmdSZXZcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGRvY3M6IHJlcXVlc3RzLFxuICAgIHJldnM6IHRydWUsXG4gICAgbGF0ZXN0OiB0cnVlXG4gIH07XG59XG5cbi8vXG4vLyBGZXRjaCBhbGwgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzcmMgYXMgZGVzY3JpYmVkIGluIHRoZSBcImRpZmZzXCIsXG4vLyB3aGljaCBpcyBhIG1hcHBpbmcgb2YgZG9jcyBJRHMgdG8gcmV2aXNpb25zLiBJZiB0aGUgc3RhdGUgZXZlclxuLy8gY2hhbmdlcyB0byBcImNhbmNlbGxlZFwiLCB0aGVuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXG4vLyBFbHNlIGl0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBhIGxpc3Qgb2YgZmV0Y2hlZCBkb2N1bWVudHMuXG4vL1xuZnVuY3Rpb24gZ2V0RG9jcyhzcmMsIHRhcmdldCwgZGlmZnMsIHN0YXRlKSB7XG4gIGRpZmZzID0gY2xvbmUoZGlmZnMpOyAvLyB3ZSBkbyBub3QgbmVlZCB0byBtb2RpZnkgdGhpc1xuXG4gIHZhciByZXN1bHREb2NzID0gW10sXG4gICAgICBvayA9IHRydWU7XG5cbiAgZnVuY3Rpb24gZ2V0QWxsRG9jcygpIHtcblxuICAgIHZhciBidWxrR2V0T3B0cyA9IGNyZWF0ZUJ1bGtHZXRPcHRzKGRpZmZzKTtcblxuICAgIGlmICghYnVsa0dldE9wdHMuZG9jcy5sZW5ndGgpIHsgLy8gb3B0aW1pemF0aW9uOiBza2lwIGVtcHR5IHJlcXVlc3RzXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYy5idWxrR2V0KGJ1bGtHZXRPcHRzKS50aGVuKGZ1bmN0aW9uIChidWxrR2V0UmVzcG9uc2UpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHN0YXRlLmNhbmNlbGxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGJ1bGtHZXRSZXNwb25zZS5yZXN1bHRzLm1hcChmdW5jdGlvbiAoYnVsa0dldEluZm8pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGJ1bGtHZXRJbmZvLmRvY3MubWFwKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICB2YXIgcmVtb3RlRG9jID0gZG9jLm9rO1xuXG4gICAgICAgICAgaWYgKGRvYy5lcnJvcikge1xuICAgICAgICAgICAgLy8gd2hlbiBBVVRPX0NPTVBBQ1RJT04gaXMgc2V0LCBkb2NzIGNhbiBiZSByZXR1cm5lZCB3aGljaCBsb29rXG4gICAgICAgICAgICAvLyBsaWtlIHRoaXM6IHtcIm1pc3NpbmdcIjpcIjEtN2MzYWMyNTZiNjkzYzQ2MmFmODQ0MmY5OTJiODM2OTZcIn1cbiAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFyZW1vdGVEb2MgfHwgIXJlbW90ZURvYy5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdGVEb2M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGdldERvY0F0dGFjaG1lbnRzRnJvbVRhcmdldE9yU291cmNlKHRhcmdldCwgc3JjLCByZW1vdGVEb2MpXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWVzID0gT2JqZWN0LmtleXMocmVtb3RlRG9jLl9hdHRhY2htZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoYXR0YWNobWVudCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHQgPSByZW1vdGVEb2MuX2F0dGFjaG1lbnRzW2ZpbGVuYW1lc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGF0dC5zdHViO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhdHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dC5kYXRhID0gYXR0YWNobWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZURvYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9KSlcblxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0RG9jcyA9IHJlc3VsdERvY3MuY29uY2F0KGZsYXR0ZW4ocmVzdWx0cykuZmlsdGVyKEJvb2xlYW4pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQXR0YWNobWVudHMoZG9jKSB7XG4gICAgcmV0dXJuIGRvYy5fYXR0YWNobWVudHMgJiYgT2JqZWN0LmtleXMoZG9jLl9hdHRhY2htZW50cykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NvbmZsaWN0cyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLl9jb25mbGljdHMgJiYgZG9jLl9jb25mbGljdHMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoUmV2aXNpb25PbmVEb2NzKGlkcykge1xuICAgIC8vIE9wdGltaXphdGlvbjogZmV0Y2ggZ2VuLTEgZG9jcyBhbmQgYXR0YWNobWVudHMgaW5cbiAgICAvLyBhIHNpbmdsZSByZXF1ZXN0IHVzaW5nIF9hbGxfZG9jc1xuICAgIHJldHVybiBzcmMuYWxsRG9jcyh7XG4gICAgICBrZXlzOiBpZHMsXG4gICAgICBpbmNsdWRlX2RvY3M6IHRydWUsXG4gICAgICBjb25mbGljdHM6IHRydWVcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChzdGF0ZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxsZWQnKTtcbiAgICAgIH1cbiAgICAgIHJlcy5yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93LmRlbGV0ZWQgfHwgIXJvdy5kb2MgfHwgIWlzR2VuT25lJDEocm93LnZhbHVlLnJldikgfHxcbiAgICAgICAgICAgIGhhc0F0dGFjaG1lbnRzKHJvdy5kb2MpIHx8IGhhc0NvbmZsaWN0cyhyb3cuZG9jKSkge1xuICAgICAgICAgIC8vIGlmIGFueSBvZiB0aGVzZSBjb25kaXRpb25zIGFwcGx5LCB3ZSBuZWVkIHRvIGZldGNoIHVzaW5nIGdldCgpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RyaXAgX2NvbmZsaWN0cyBhcnJheSB0byBhcHBlYXNlIENTRyAoIzU3OTMpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocm93LmRvYy5fY29uZmxpY3RzKSB7XG4gICAgICAgICAgZGVsZXRlIHJvdy5kb2MuX2NvbmZsaWN0cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZSBkb2Mgd2UgZ290IGJhY2sgZnJvbSBhbGxEb2NzKCkgaXMgc3VmZmljaWVudFxuICAgICAgICByZXN1bHREb2NzLnB1c2gocm93LmRvYyk7XG4gICAgICAgIGRlbGV0ZSBkaWZmc1tyb3cuaWRdO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZXZpc2lvbk9uZURvY3MoKSB7XG4gICAgLy8gZmlsdGVyIG91dCB0aGUgZ2VuZXJhdGlvbiAxIGRvY3MgYW5kIGdldCB0aGVtXG4gICAgLy8gbGVhdmluZyB0aGUgbm9uLWdlbmVyYXRpb24gb25lIGRvY3MgdG8gYmUgZ290IG90aGVyd2lzZVxuICAgIHZhciBpZHMgPSBPYmplY3Qua2V5cyhkaWZmcykuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgdmFyIG1pc3NpbmcgPSBkaWZmc1tpZF0ubWlzc2luZztcbiAgICAgIHJldHVybiBtaXNzaW5nLmxlbmd0aCA9PT0gMSAmJiBpc0dlbk9uZSQxKG1pc3NpbmdbMF0pO1xuICAgIH0pO1xuICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZldGNoUmV2aXNpb25PbmVEb2NzKGlkcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV0dXJuUmVzdWx0KCkge1xuICAgIHJldHVybiB7IG9rOm9rLCBkb2NzOnJlc3VsdERvY3MgfTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIC50aGVuKGdldFJldmlzaW9uT25lRG9jcylcbiAgICAudGhlbihnZXRBbGxEb2NzKVxuICAgIC50aGVuKHJldHVyblJlc3VsdCk7XG59XG5cbnZhciBDSEVDS1BPSU5UX1ZFUlNJT04gPSAxO1xudmFyIFJFUExJQ0FUT1IgPSBcInBvdWNoZGJcIjtcbi8vIFRoaXMgaXMgYW4gYXJiaXRyYXJ5IG51bWJlciB0byBsaW1pdCB0aGVcbi8vIGFtb3VudCBvZiByZXBsaWNhdGlvbiBoaXN0b3J5IHdlIHNhdmUgaW4gdGhlIGNoZWNrcG9pbnQuXG4vLyBJZiB3ZSBzYXZlIHRvbyBtdWNoLCB0aGUgY2hlY2twb2luZyBkb2NzIHdpbGwgYmVjb21lIHZlcnkgYmlnLFxuLy8gaWYgd2Ugc2F2ZSBmZXdlciwgd2UnbGwgcnVuIGEgZ3JlYXRlciByaXNrIG9mIGhhdmluZyB0b1xuLy8gcmVhZCBhbGwgdGhlIGNoYW5nZXMgZnJvbSAwIHdoZW4gY2hlY2twb2ludCBQVVRzIGZhaWxcbi8vIENvdWNoREIgMi4wIGhhcyBhIG1vcmUgaW52b2x2ZWQgaGlzdG9yeSBwcnVuaW5nLFxuLy8gYnV0IGxldCdzIGdvIGZvciB0aGUgc2ltcGxlIHZlcnNpb24gZm9yIG5vdy5cbnZhciBDSEVDS1BPSU5UX0hJU1RPUllfU0laRSA9IDU7XG52YXIgTE9XRVNUX1NFUSA9IDA7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoZWNrcG9pbnQoZGIsIGlkLCBjaGVja3BvaW50LCBzZXNzaW9uLCByZXR1cm5WYWx1ZSkge1xuICByZXR1cm4gZGIuZ2V0KGlkKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgaWYgKGRiLmFkYXB0ZXIgPT09ICdodHRwJyB8fCBkYi5hZGFwdGVyID09PSAnaHR0cHMnKSB7XG4gICAgICAgIGV4cGxhaW5FcnJvcihcbiAgICAgICAgICA0MDQsICdQb3VjaERCIGlzIGp1c3QgY2hlY2tpbmcgaWYgYSByZW1vdGUgY2hlY2twb2ludCBleGlzdHMuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbixcbiAgICAgICAgX2lkOiBpZCxcbiAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgIHJlcGxpY2F0b3I6IFJFUExJQ0FUT1IsXG4gICAgICAgIHZlcnNpb246IENIRUNLUE9JTlRfVkVSU0lPTlxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xuICB9KS50aGVuKGZ1bmN0aW9uIChkb2MpIHtcbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGNoZWNrcG9pbnQgaGFzIG5vdCBjaGFuZ2VkLCBkbyBub3QgdXBkYXRlXG4gICAgaWYgKGRvYy5sYXN0X3NlcSA9PT0gY2hlY2twb2ludCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbHRlciBvdXQgY3VycmVudCBlbnRyeSBmb3IgdGhpcyByZXBsaWNhdGlvblxuICAgIGRvYy5oaXN0b3J5ID0gKGRvYy5oaXN0b3J5IHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnNlc3Npb25faWQgIT09IHNlc3Npb247XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgdGhlIGxhdGVzdCBjaGVja3BvaW50IHRvIGhpc3RvcnlcbiAgICBkb2MuaGlzdG9yeS51bnNoaWZ0KHtcbiAgICAgIGxhc3Rfc2VxOiBjaGVja3BvaW50LFxuICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvblxuICAgIH0pO1xuXG4gICAgLy8gSnVzdCB0YWtlIHRoZSBsYXN0IHBpZWNlcyBpbiBoaXN0b3J5LCB0b1xuICAgIC8vIGF2b2lkIHJlYWxseSBiaWcgY2hlY2twb2ludCBkb2NzLlxuICAgIC8vIHNlZSBjb21tZW50IG9uIGhpc3Rvcnkgc2l6ZSBhYm92ZVxuICAgIGRvYy5oaXN0b3J5ID0gZG9jLmhpc3Rvcnkuc2xpY2UoMCwgQ0hFQ0tQT0lOVF9ISVNUT1JZX1NJWkUpO1xuXG4gICAgZG9jLnZlcnNpb24gPSBDSEVDS1BPSU5UX1ZFUlNJT047XG4gICAgZG9jLnJlcGxpY2F0b3IgPSBSRVBMSUNBVE9SO1xuXG4gICAgZG9jLnNlc3Npb25faWQgPSBzZXNzaW9uO1xuICAgIGRvYy5sYXN0X3NlcSA9IGNoZWNrcG9pbnQ7XG5cbiAgICByZXR1cm4gZGIucHV0KGRvYykuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwOSkge1xuICAgICAgICAvLyByZXRyeTsgc29tZW9uZSBpcyB0cnlpbmcgdG8gd3JpdGUgYSBjaGVja3BvaW50IHNpbXVsdGFuZW91c2x5XG4gICAgICAgIHJldHVybiB1cGRhdGVDaGVja3BvaW50KGRiLCBpZCwgY2hlY2twb2ludCwgc2Vzc2lvbiwgcmV0dXJuVmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gQ2hlY2twb2ludGVyKHNyYywgdGFyZ2V0LCBpZCwgcmV0dXJuVmFsdWUsIG9wdHMpIHtcbiAgdGhpcy5zcmMgPSBzcmM7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMucmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZTtcbiAgdGhpcy5vcHRzID0gb3B0cyB8fCB7fTtcbn1cblxuQ2hlY2twb2ludGVyLnByb3RvdHlwZS53cml0ZUNoZWNrcG9pbnQgPSBmdW5jdGlvbiAoY2hlY2twb2ludCwgc2Vzc2lvbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB0aGlzLnVwZGF0ZVRhcmdldChjaGVja3BvaW50LCBzZXNzaW9uKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2VsZi51cGRhdGVTb3VyY2UoY2hlY2twb2ludCwgc2Vzc2lvbik7XG4gIH0pO1xufTtcblxuQ2hlY2twb2ludGVyLnByb3RvdHlwZS51cGRhdGVUYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2twb2ludCwgc2Vzc2lvbikge1xuICBpZiAodGhpcy5vcHRzLndyaXRlVGFyZ2V0Q2hlY2twb2ludCkge1xuICAgIHJldHVybiB1cGRhdGVDaGVja3BvaW50KHRoaXMudGFyZ2V0LCB0aGlzLmlkLCBjaGVja3BvaW50LFxuICAgICAgc2Vzc2lvbiwgdGhpcy5yZXR1cm5WYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxufTtcblxuQ2hlY2twb2ludGVyLnByb3RvdHlwZS51cGRhdGVTb3VyY2UgPSBmdW5jdGlvbiAoY2hlY2twb2ludCwgc2Vzc2lvbikge1xuICBpZiAodGhpcy5vcHRzLndyaXRlU291cmNlQ2hlY2twb2ludCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gdXBkYXRlQ2hlY2twb2ludCh0aGlzLnNyYywgdGhpcy5pZCwgY2hlY2twb2ludCxcbiAgICAgIHNlc3Npb24sIHRoaXMucmV0dXJuVmFsdWUpXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoaXNGb3JiaWRkZW5FcnJvcihlcnIpKSB7XG4gICAgICAgICAgc2VsZi5vcHRzLndyaXRlU291cmNlQ2hlY2twb2ludCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cbn07XG5cbnZhciBjb21wYXJpc29ucyA9IHtcbiAgXCJ1bmRlZmluZWRcIjogZnVuY3Rpb24gKHRhcmdldERvYywgc291cmNlRG9jKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgcHJldmlvdXMgY29tcGFyaXNvbiBmdW5jdGlvblxuICAgIGlmIChjb2xsYXRlKHRhcmdldERvYy5sYXN0X3NlcSwgc291cmNlRG9jLmxhc3Rfc2VxKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNvdXJjZURvYy5sYXN0X3NlcTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gMDtcbiAgfSxcbiAgXCIxXCI6IGZ1bmN0aW9uICh0YXJnZXREb2MsIHNvdXJjZURvYykge1xuICAgIC8vIFRoaXMgaXMgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gcG9ydGVkIGZyb20gQ291Y2hEQlxuICAgIHJldHVybiBjb21wYXJlUmVwbGljYXRpb25Mb2dzKHNvdXJjZURvYywgdGFyZ2V0RG9jKS5sYXN0X3NlcTtcbiAgfVxufTtcblxuQ2hlY2twb2ludGVyLnByb3RvdHlwZS5nZXRDaGVja3BvaW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHNlbGYub3B0cyAmJiBzZWxmLm9wdHMud3JpdGVTb3VyY2VDaGVja3BvaW50ICYmICFzZWxmLm9wdHMud3JpdGVUYXJnZXRDaGVja3BvaW50KSB7XG4gICAgcmV0dXJuIHNlbGYuc3JjLmdldChzZWxmLmlkKS50aGVuKGZ1bmN0aW9uIChzb3VyY2VEb2MpIHtcbiAgICAgIHJldHVybiBzb3VyY2VEb2MubGFzdF9zZXEgfHwgTE9XRVNUX1NFUTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlcnIuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIExPV0VTVF9TRVE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc2VsZi50YXJnZXQuZ2V0KHNlbGYuaWQpLnRoZW4oZnVuY3Rpb24gKHRhcmdldERvYykge1xuICAgIGlmIChzZWxmLm9wdHMgJiYgc2VsZi5vcHRzLndyaXRlVGFyZ2V0Q2hlY2twb2ludCAmJiAhc2VsZi5vcHRzLndyaXRlU291cmNlQ2hlY2twb2ludCkge1xuICAgICAgcmV0dXJuIHRhcmdldERvYy5sYXN0X3NlcSB8fCBMT1dFU1RfU0VRO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLnNyYy5nZXQoc2VsZi5pZCkudGhlbihmdW5jdGlvbiAoc291cmNlRG9jKSB7XG4gICAgICAvLyBTaW5jZSB3ZSBjYW4ndCBtaWdyYXRlIGFuIG9sZCB2ZXJzaW9uIGRvYyB0byBhIG5ldyBvbmVcbiAgICAgIC8vIChubyBzZXNzaW9uIGlkKSwgd2UganVzdCBnbyB3aXRoIHRoZSBsb3dlc3Qgc2VxIGluIHRoaXMgY2FzZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodGFyZ2V0RG9jLnZlcnNpb24gIT09IHNvdXJjZURvYy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBMT1dFU1RfU0VRO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmVyc2lvbjtcbiAgICAgIGlmICh0YXJnZXREb2MudmVyc2lvbikge1xuICAgICAgICB2ZXJzaW9uID0gdGFyZ2V0RG9jLnZlcnNpb24udG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcnNpb24gPSBcInVuZGVmaW5lZFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyc2lvbiBpbiBjb21wYXJpc29ucykge1xuICAgICAgICByZXR1cm4gY29tcGFyaXNvbnNbdmVyc2lvbl0odGFyZ2V0RG9jLCBzb3VyY2VEb2MpO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHJldHVybiBMT1dFU1RfU0VRO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQgJiYgdGFyZ2V0RG9jLmxhc3Rfc2VxKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNyYy5wdXQoe1xuICAgICAgICAgIF9pZDogc2VsZi5pZCxcbiAgICAgICAgICBsYXN0X3NlcTogTE9XRVNUX1NFUVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTE9XRVNUX1NFUTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmIChpc0ZvcmJpZGRlbkVycm9yKGVycikpIHtcbiAgICAgICAgICAgIHNlbGYub3B0cy53cml0ZVNvdXJjZUNoZWNrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXREb2MubGFzdF9zZXE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgcmV0dXJuIExPV0VTVF9TRVE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVyci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICByZXR1cm4gTE9XRVNUX1NFUTtcbiAgfSk7XG59O1xuLy8gVGhpcyBjaGVja3BvaW50IGNvbXBhcmlzb24gaXMgcG9ydGVkIGZyb20gQ291Y2hEQnMgc291cmNlXG4vLyB0aGV5IGNvbWUgZnJvbSBoZXJlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3VjaGRiLWNvdWNoLXJlcGxpY2F0b3IvYmxvYi9tYXN0ZXIvc3JjL2NvdWNoX3JlcGxpY2F0b3IuZXJsI0w4NjMtTDkwNlxuXG5mdW5jdGlvbiBjb21wYXJlUmVwbGljYXRpb25Mb2dzKHNyY0RvYywgdGd0RG9jKSB7XG4gIGlmIChzcmNEb2Muc2Vzc2lvbl9pZCA9PT0gdGd0RG9jLnNlc3Npb25faWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdF9zZXE6IHNyY0RvYy5sYXN0X3NlcSxcbiAgICAgIGhpc3Rvcnk6IHNyY0RvYy5oaXN0b3J5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlUmVwbGljYXRpb25IaXN0b3J5KHNyY0RvYy5oaXN0b3J5LCB0Z3REb2MuaGlzdG9yeSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVSZXBsaWNhdGlvbkhpc3Rvcnkoc291cmNlSGlzdG9yeSwgdGFyZ2V0SGlzdG9yeSkge1xuICAvLyB0aGUgZXJsYW5nIGxvb3AgdmlhIGZ1bmN0aW9uIGFyZ3VtZW50cyBpcyBub3Qgc28gZWFzeSB0byByZXBlYXQgaW4gSlNcbiAgLy8gdGhlcmVmb3JlLCBkb2luZyB0aGlzIGFzIHJlY3Vyc2lvblxuICB2YXIgUyA9IHNvdXJjZUhpc3RvcnlbMF07XG4gIHZhciBzb3VyY2VSZXN0ID0gc291cmNlSGlzdG9yeS5zbGljZSgxKTtcbiAgdmFyIFQgPSB0YXJnZXRIaXN0b3J5WzBdO1xuICB2YXIgdGFyZ2V0UmVzdCA9IHRhcmdldEhpc3Rvcnkuc2xpY2UoMSk7XG5cbiAgaWYgKCFTIHx8IHRhcmdldEhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3Rfc2VxOiBMT1dFU1RfU0VRLFxuICAgICAgaGlzdG9yeTogW11cbiAgICB9O1xuICB9XG5cbiAgdmFyIHNvdXJjZUlkID0gUy5zZXNzaW9uX2lkO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGhhc1Nlc3Npb25JZChzb3VyY2VJZCwgdGFyZ2V0SGlzdG9yeSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdF9zZXE6IFMubGFzdF9zZXEsXG4gICAgICBoaXN0b3J5OiBzb3VyY2VIaXN0b3J5XG4gICAgfTtcbiAgfVxuXG4gIHZhciB0YXJnZXRJZCA9IFQuc2Vzc2lvbl9pZDtcbiAgaWYgKGhhc1Nlc3Npb25JZCh0YXJnZXRJZCwgc291cmNlUmVzdCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdF9zZXE6IFQubGFzdF9zZXEsXG4gICAgICBoaXN0b3J5OiB0YXJnZXRSZXN0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlUmVwbGljYXRpb25IaXN0b3J5KHNvdXJjZVJlc3QsIHRhcmdldFJlc3QpO1xufVxuXG5mdW5jdGlvbiBoYXNTZXNzaW9uSWQoc2Vzc2lvbklkLCBoaXN0b3J5KSB7XG4gIHZhciBwcm9wcyA9IGhpc3RvcnlbMF07XG4gIHZhciByZXN0ID0gaGlzdG9yeS5zbGljZSgxKTtcblxuICBpZiAoIXNlc3Npb25JZCB8fCBoaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzZXNzaW9uSWQgPT09IHByb3BzLnNlc3Npb25faWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBoYXNTZXNzaW9uSWQoc2Vzc2lvbklkLCByZXN0KTtcbn1cblxuZnVuY3Rpb24gaXNGb3JiaWRkZW5FcnJvcihlcnIpIHtcbiAgcmV0dXJuIHR5cGVvZiBlcnIuc3RhdHVzID09PSAnbnVtYmVyJyAmJiBNYXRoLmZsb29yKGVyci5zdGF0dXMgLyAxMDApID09PSA0O1xufVxuXG52YXIgU1RBUlRJTkdfQkFDS19PRkYgPSAwO1xuXG5mdW5jdGlvbiBiYWNrT2ZmKG9wdHMsIHJldHVyblZhbHVlLCBlcnJvciwgY2FsbGJhY2spIHtcbiAgaWYgKG9wdHMucmV0cnkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuVmFsdWUuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuVmFsdWUucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIG9wdHMuYmFja19vZmZfZnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRzLmJhY2tfb2ZmX2Z1bmN0aW9uID0gZGVmYXVsdEJhY2tPZmY7XG4gIH1cbiAgcmV0dXJuVmFsdWUuZW1pdCgncmVxdWVzdEVycm9yJywgZXJyb3IpO1xuICBpZiAocmV0dXJuVmFsdWUuc3RhdGUgPT09ICdhY3RpdmUnIHx8IHJldHVyblZhbHVlLnN0YXRlID09PSAncGVuZGluZycpIHtcbiAgICByZXR1cm5WYWx1ZS5lbWl0KCdwYXVzZWQnLCBlcnJvcik7XG4gICAgcmV0dXJuVmFsdWUuc3RhdGUgPSAnc3RvcHBlZCc7XG4gICAgdmFyIGJhY2tPZmZTZXQgPSBmdW5jdGlvbiBiYWNrb2ZmVGltZVNldCgpIHtcbiAgICAgIG9wdHMuY3VycmVudF9iYWNrX29mZiA9IFNUQVJUSU5HX0JBQ0tfT0ZGO1xuICAgIH07XG4gICAgdmFyIHJlbW92ZUJhY2tPZmZTZXR0ZXIgPSBmdW5jdGlvbiByZW1vdmVCYWNrT2ZmVGltZVNldCgpIHtcbiAgICAgIHJldHVyblZhbHVlLnJlbW92ZUxpc3RlbmVyKCdhY3RpdmUnLCBiYWNrT2ZmU2V0KTtcbiAgICB9O1xuICAgIHJldHVyblZhbHVlLm9uY2UoJ3BhdXNlZCcsIHJlbW92ZUJhY2tPZmZTZXR0ZXIpO1xuICAgIHJldHVyblZhbHVlLm9uY2UoJ2FjdGl2ZScsIGJhY2tPZmZTZXQpO1xuICB9XG5cbiAgb3B0cy5jdXJyZW50X2JhY2tfb2ZmID0gb3B0cy5jdXJyZW50X2JhY2tfb2ZmIHx8IFNUQVJUSU5HX0JBQ0tfT0ZGO1xuICBvcHRzLmN1cnJlbnRfYmFja19vZmYgPSBvcHRzLmJhY2tfb2ZmX2Z1bmN0aW9uKG9wdHMuY3VycmVudF9iYWNrX29mZik7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIG9wdHMuY3VycmVudF9iYWNrX29mZik7XG59XG5cbmZ1bmN0aW9uIHNvcnRPYmplY3RQcm9wZXJ0aWVzQnlLZXkocXVlcnlQYXJhbXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5zb3J0KGNvbGxhdGUpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG4vLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpZCBwYXJ0aWN1bGFyIHRvIHRoaXMgcmVwbGljYXRpb24uXG4vLyBOb3QgZ3VhcmFudGVlZCB0byBhbGlnbiBwZXJmZWN0bHkgd2l0aCBDb3VjaERCJ3MgcmVwIGlkcy5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVwbGljYXRpb25JZChzcmMsIHRhcmdldCwgb3B0cykge1xuICB2YXIgZG9jSWRzID0gb3B0cy5kb2NfaWRzID8gb3B0cy5kb2NfaWRzLnNvcnQoY29sbGF0ZSkgOiAnJztcbiAgdmFyIGZpbHRlckZ1biA9IG9wdHMuZmlsdGVyID8gb3B0cy5maWx0ZXIudG9TdHJpbmcoKSA6ICcnO1xuICB2YXIgcXVlcnlQYXJhbXMgPSAnJztcbiAgdmFyIGZpbHRlclZpZXdOYW1lID0gICcnO1xuICB2YXIgc2VsZWN0b3IgPSAnJztcblxuICAvLyBwb3NzaWJpbGl0eSBmb3IgY2hlY2twb2ludHMgdG8gYmUgbG9zdCBoZXJlIGFzIGJlaGF2aW91ciBvZlxuICAvLyBKU09OLnN0cmluZ2lmeSBpcyBub3Qgc3RhYmxlIChzZWUgIzYyMjYpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAob3B0cy5zZWxlY3Rvcikge1xuICAgIHNlbGVjdG9yID0gSlNPTi5zdHJpbmdpZnkob3B0cy5zZWxlY3Rvcik7XG4gIH1cblxuICBpZiAob3B0cy5maWx0ZXIgJiYgb3B0cy5xdWVyeV9wYXJhbXMpIHtcbiAgICBxdWVyeVBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHNvcnRPYmplY3RQcm9wZXJ0aWVzQnlLZXkob3B0cy5xdWVyeV9wYXJhbXMpKTtcbiAgfVxuXG4gIGlmIChvcHRzLmZpbHRlciAmJiBvcHRzLmZpbHRlciA9PT0gJ192aWV3Jykge1xuICAgIGZpbHRlclZpZXdOYW1lID0gb3B0cy52aWV3LnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwoW3NyYy5pZCgpLCB0YXJnZXQuaWQoKV0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHZhciBxdWVyeURhdGEgPSByZXNbMF0gKyByZXNbMV0gKyBmaWx0ZXJGdW4gKyBmaWx0ZXJWaWV3TmFtZSArXG4gICAgICBxdWVyeVBhcmFtcyArIGRvY0lkcyArIHNlbGVjdG9yO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgYmluYXJ5TWQ1KHF1ZXJ5RGF0YSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKG1kNXN1bSkge1xuICAgIC8vIGNhbid0IHVzZSBzdHJhaWdodC11cCBtZDUgYWxwaGFiZXQsIGJlY2F1c2VcbiAgICAvLyB0aGUgY2hhciAnLycgaXMgaW50ZXJwcmV0ZWQgYXMgYmVpbmcgZm9yIGF0dGFjaG1lbnRzLFxuICAgIC8vIGFuZCArIGlzIGFsc28gbm90IHVybC1zYWZlXG4gICAgbWQ1c3VtID0gbWQ1c3VtLnJlcGxhY2UoL1xcLy9nLCAnLicpLnJlcGxhY2UoL1xcKy9nLCAnXycpO1xuICAgIHJldHVybiAnX2xvY2FsLycgKyBtZDVzdW07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsaWNhdGUoc3JjLCB0YXJnZXQsIG9wdHMsIHJldHVyblZhbHVlLCByZXN1bHQpIHtcbiAgdmFyIGJhdGNoZXMgPSBbXTsgICAgICAgICAgICAgICAvLyBsaXN0IG9mIGJhdGNoZXMgdG8gYmUgcHJvY2Vzc2VkXG4gIHZhciBjdXJyZW50QmF0Y2g7ICAgICAgICAgICAgICAgLy8gdGhlIGJhdGNoIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWRcbiAgdmFyIHBlbmRpbmdCYXRjaCA9IHtcbiAgICBzZXE6IDAsXG4gICAgY2hhbmdlczogW10sXG4gICAgZG9jczogW11cbiAgfTsgLy8gbmV4dCBiYXRjaCwgbm90IHlldCByZWFkeSB0byBiZSBwcm9jZXNzZWRcbiAgdmFyIHdyaXRpbmdDaGVja3BvaW50ID0gZmFsc2U7ICAvLyB0cnVlIHdoaWxlIGNoZWNrcG9pbnQgaXMgYmVpbmcgd3JpdHRlblxuICB2YXIgY2hhbmdlc0NvbXBsZXRlZCA9IGZhbHNlOyAgIC8vIHRydWUgd2hlbiBhbGwgY2hhbmdlcyByZWNlaXZlZFxuICB2YXIgcmVwbGljYXRpb25Db21wbGV0ZWQgPSBmYWxzZTsgLy8gdHJ1ZSB3aGVuIHJlcGxpY2F0aW9uIGhhcyBjb21wbGV0ZWRcbiAgdmFyIGxhc3Rfc2VxID0gMDtcbiAgdmFyIGNvbnRpbnVvdXMgPSBvcHRzLmNvbnRpbnVvdXMgfHwgb3B0cy5saXZlIHx8IGZhbHNlO1xuICB2YXIgYmF0Y2hfc2l6ZSA9IG9wdHMuYmF0Y2hfc2l6ZSB8fCAxMDA7XG4gIHZhciBiYXRjaGVzX2xpbWl0ID0gb3B0cy5iYXRjaGVzX2xpbWl0IHx8IDEwO1xuICB2YXIgY2hhbmdlc1BlbmRpbmcgPSBmYWxzZTsgICAgIC8vIHRydWUgd2hpbGUgc3JjLmNoYW5nZXMgaXMgcnVubmluZ1xuICB2YXIgZG9jX2lkcyA9IG9wdHMuZG9jX2lkcztcbiAgdmFyIHNlbGVjdG9yID0gb3B0cy5zZWxlY3RvcjtcbiAgdmFyIHJlcElkO1xuICB2YXIgY2hlY2twb2ludGVyO1xuICB2YXIgY2hhbmdlZERvY3MgPSBbXTtcbiAgLy8gTGlrZSBjb3VjaGRiLCBldmVyeSByZXBsaWNhdGlvbiBnZXRzIGEgdW5pcXVlIHNlc3Npb24gaWRcbiAgdmFyIHNlc3Npb24gPSB1dWlkKCk7XG5cbiAgcmVzdWx0ID0gcmVzdWx0IHx8IHtcbiAgICBvazogdHJ1ZSxcbiAgICBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZG9jc19yZWFkOiAwLFxuICAgIGRvY3Nfd3JpdHRlbjogMCxcbiAgICBkb2Nfd3JpdGVfZmFpbHVyZXM6IDAsXG4gICAgZXJyb3JzOiBbXVxuICB9O1xuXG4gIHZhciBjaGFuZ2VzT3B0cyA9IHt9O1xuICByZXR1cm5WYWx1ZS5yZWFkeShzcmMsIHRhcmdldCk7XG5cbiAgZnVuY3Rpb24gaW5pdENoZWNrcG9pbnRlcigpIHtcbiAgICBpZiAoY2hlY2twb2ludGVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZVJlcGxpY2F0aW9uSWQoc3JjLCB0YXJnZXQsIG9wdHMpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmVwSWQgPSByZXM7XG5cbiAgICAgIHZhciBjaGVja3BvaW50T3B0cyA9IHt9O1xuICAgICAgaWYgKG9wdHMuY2hlY2twb2ludCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2hlY2twb2ludE9wdHMgPSB7IHdyaXRlU291cmNlQ2hlY2twb2ludDogZmFsc2UsIHdyaXRlVGFyZ2V0Q2hlY2twb2ludDogZmFsc2UgfTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5jaGVja3BvaW50ID09PSAnc291cmNlJykge1xuICAgICAgICBjaGVja3BvaW50T3B0cyA9IHsgd3JpdGVTb3VyY2VDaGVja3BvaW50OiB0cnVlLCB3cml0ZVRhcmdldENoZWNrcG9pbnQ6IGZhbHNlIH07XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuY2hlY2twb2ludCA9PT0gJ3RhcmdldCcpIHtcbiAgICAgICAgY2hlY2twb2ludE9wdHMgPSB7IHdyaXRlU291cmNlQ2hlY2twb2ludDogZmFsc2UsIHdyaXRlVGFyZ2V0Q2hlY2twb2ludDogdHJ1ZSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2twb2ludE9wdHMgPSB7IHdyaXRlU291cmNlQ2hlY2twb2ludDogdHJ1ZSwgd3JpdGVUYXJnZXRDaGVja3BvaW50OiB0cnVlIH07XG4gICAgICB9XG5cbiAgICAgIGNoZWNrcG9pbnRlciA9IG5ldyBDaGVja3BvaW50ZXIoc3JjLCB0YXJnZXQsIHJlcElkLCByZXR1cm5WYWx1ZSwgY2hlY2twb2ludE9wdHMpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGVEb2NzKCkge1xuICAgIGNoYW5nZWREb2NzID0gW107XG5cbiAgICBpZiAoY3VycmVudEJhdGNoLmRvY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBkb2NzID0gY3VycmVudEJhdGNoLmRvY3M7XG4gICAgdmFyIGJ1bGtPcHRzID0ge3RpbWVvdXQ6IG9wdHMudGltZW91dH07XG4gICAgcmV0dXJuIHRhcmdldC5idWxrRG9jcyh7ZG9jczogZG9jcywgbmV3X2VkaXRzOiBmYWxzZX0sIGJ1bGtPcHRzKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHJldHVyblZhbHVlLmNhbmNlbGxlZCkge1xuICAgICAgICBjb21wbGV0ZVJlcGxpY2F0aW9uKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsbGVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGByZXNgIGRvZXNuJ3QgaW5jbHVkZSBmdWxsIGRvY3VtZW50cyAod2hpY2ggbGl2ZSBpbiBgZG9jc2ApLCBzbyB3ZSBjcmVhdGUgYSBtYXAgb2YgXG4gICAgICAvLyAoaWQgLT4gZXJyb3IpLCBhbmQgY2hlY2sgZm9yIGVycm9ycyB3aGlsZSBpdGVyYXRpbmcgb3ZlciBgZG9jc2BcbiAgICAgIHZhciBlcnJvcnNCeUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgICAgIGVycm9yc0J5SWRbcmVzLmlkXSA9IHJlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBlcnJvcnNObyA9IE9iamVjdC5rZXlzKGVycm9yc0J5SWQpLmxlbmd0aDtcbiAgICAgIHJlc3VsdC5kb2Nfd3JpdGVfZmFpbHVyZXMgKz0gZXJyb3JzTm87XG4gICAgICByZXN1bHQuZG9jc193cml0dGVuICs9IGRvY3MubGVuZ3RoIC0gZXJyb3JzTm87XG5cbiAgICAgIGRvY3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGVycm9yc0J5SWRbZG9jLl9pZF07XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlc3VsdC5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgLy8gTm9ybWFsaXplIGVycm9yIG5hbWUuIGkuZS4gJ1VuYXV0aG9yaXplZCcgLT4gJ3VuYXV0aG9yaXplZCcgKGVnIFN5bmMgR2F0ZXdheSlcbiAgICAgICAgICB2YXIgZXJyb3JOYW1lID0gKGVycm9yLm5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGVycm9yTmFtZSA9PT0gJ3VuYXV0aG9yaXplZCcgfHwgZXJyb3JOYW1lID09PSAnZm9yYmlkZGVuJykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUuZW1pdCgnZGVuaWVkJywgY2xvbmUoZXJyb3IpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWREb2NzLnB1c2goZG9jKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICByZXN1bHQuZG9jX3dyaXRlX2ZhaWx1cmVzICs9IGRvY3MubGVuZ3RoO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoQmF0Y2goKSB7XG4gICAgaWYgKGN1cnJlbnRCYXRjaC5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGdldHRpbmcgZG9jcy4nKTtcbiAgICB9XG4gICAgcmVzdWx0Lmxhc3Rfc2VxID0gbGFzdF9zZXEgPSBjdXJyZW50QmF0Y2guc2VxO1xuICAgIHZhciBvdXRSZXN1bHQgPSBjbG9uZShyZXN1bHQpO1xuICAgIGlmIChjaGFuZ2VkRG9jcy5sZW5ndGgpIHtcbiAgICAgIG91dFJlc3VsdC5kb2NzID0gY2hhbmdlZERvY3M7XG4gICAgICAvLyBBdHRhY2ggJ3BlbmRpbmcnIHByb3BlcnR5IGlmIHNlcnZlciBzdXBwb3J0cyBpdCAoQ291Y2hEQiAyLjArKVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRCYXRjaC5wZW5kaW5nID09PSAnbnVtYmVyJykge1xuICAgICAgICBvdXRSZXN1bHQucGVuZGluZyA9IGN1cnJlbnRCYXRjaC5wZW5kaW5nO1xuICAgICAgICBkZWxldGUgY3VycmVudEJhdGNoLnBlbmRpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm5WYWx1ZS5lbWl0KCdjaGFuZ2UnLCBvdXRSZXN1bHQpO1xuICAgIH1cbiAgICB3cml0aW5nQ2hlY2twb2ludCA9IHRydWU7XG4gICAgcmV0dXJuIGNoZWNrcG9pbnRlci53cml0ZUNoZWNrcG9pbnQoY3VycmVudEJhdGNoLnNlcSxcbiAgICAgICAgc2Vzc2lvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB3cml0aW5nQ2hlY2twb2ludCA9IGZhbHNlO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxsZWQnKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRCYXRjaCA9IHVuZGVmaW5lZDtcbiAgICAgIGdldENoYW5nZXMoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBvbkNoZWNrcG9pbnRFcnJvcihlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlmZnMoKSB7XG4gICAgdmFyIGRpZmYgPSB7fTtcbiAgICBjdXJyZW50QmF0Y2guY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgIC8vIENvdWNoYmFzZSBTeW5jIEdhdGV3YXkgZW1pdHMgdGhlc2UsIGJ1dCB3ZSBjYW4gaWdub3JlIHRoZW1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNoYW5nZS5pZCA9PT0gXCJfdXNlci9cIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaWZmW2NoYW5nZS5pZF0gPSBjaGFuZ2UuY2hhbmdlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgucmV2O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldC5yZXZzRGlmZihkaWZmKS50aGVuKGZ1bmN0aW9uIChkaWZmcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxsZWQnKTtcbiAgICAgIH1cbiAgICAgIC8vIGN1cnJlbnRCYXRjaC5kaWZmcyBlbGVtZW50cyBhcmUgZGVsZXRlZCBhcyB0aGUgZG9jdW1lbnRzIGFyZSB3cml0dGVuXG4gICAgICBjdXJyZW50QmF0Y2guZGlmZnMgPSBkaWZmcztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJhdGNoRG9jcygpIHtcbiAgICByZXR1cm4gZ2V0RG9jcyhzcmMsIHRhcmdldCwgY3VycmVudEJhdGNoLmRpZmZzLCByZXR1cm5WYWx1ZSkudGhlbihmdW5jdGlvbiAoZ290KSB7XG4gICAgICBjdXJyZW50QmF0Y2guZXJyb3IgPSAhZ290Lm9rO1xuICAgICAgZ290LmRvY3MuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50QmF0Y2guZGlmZnNbZG9jLl9pZF07XG4gICAgICAgIHJlc3VsdC5kb2NzX3JlYWQrKztcbiAgICAgICAgY3VycmVudEJhdGNoLmRvY3MucHVzaChkb2MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5leHRCYXRjaCgpIHtcbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkIHx8IGN1cnJlbnRCYXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYmF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHByb2Nlc3NQZW5kaW5nQmF0Y2godHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN1cnJlbnRCYXRjaCA9IGJhdGNoZXMuc2hpZnQoKTtcbiAgICBnZXREaWZmcygpXG4gICAgICAudGhlbihnZXRCYXRjaERvY3MpXG4gICAgICAudGhlbih3cml0ZURvY3MpXG4gICAgICAudGhlbihmaW5pc2hCYXRjaClcbiAgICAgIC50aGVuKHN0YXJ0TmV4dEJhdGNoKVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgYWJvcnRSZXBsaWNhdGlvbignYmF0Y2ggcHJvY2Vzc2luZyB0ZXJtaW5hdGVkIHdpdGggZXJyb3InLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZW5kaW5nQmF0Y2goaW1tZWRpYXRlJCQxKSB7XG4gICAgaWYgKHBlbmRpbmdCYXRjaC5jaGFuZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGJhdGNoZXMubGVuZ3RoID09PSAwICYmICFjdXJyZW50QmF0Y2gpIHtcbiAgICAgICAgaWYgKChjb250aW51b3VzICYmIGNoYW5nZXNPcHRzLmxpdmUpIHx8IGNoYW5nZXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZS5zdGF0ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICByZXR1cm5WYWx1ZS5lbWl0KCdwYXVzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc0NvbXBsZXRlZCkge1xuICAgICAgICAgIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBpbW1lZGlhdGUkJDEgfHxcbiAgICAgIGNoYW5nZXNDb21wbGV0ZWQgfHxcbiAgICAgIHBlbmRpbmdCYXRjaC5jaGFuZ2VzLmxlbmd0aCA+PSBiYXRjaF9zaXplXG4gICAgKSB7XG4gICAgICBiYXRjaGVzLnB1c2gocGVuZGluZ0JhdGNoKTtcbiAgICAgIHBlbmRpbmdCYXRjaCA9IHtcbiAgICAgICAgc2VxOiAwLFxuICAgICAgICBjaGFuZ2VzOiBbXSxcbiAgICAgICAgZG9jczogW11cbiAgICAgIH07XG4gICAgICBpZiAocmV0dXJuVmFsdWUuc3RhdGUgPT09ICdwZW5kaW5nJyB8fCByZXR1cm5WYWx1ZS5zdGF0ZSA9PT0gJ3N0b3BwZWQnKSB7XG4gICAgICAgIHJldHVyblZhbHVlLnN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgIHJldHVyblZhbHVlLmVtaXQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgc3RhcnROZXh0QmF0Y2goKTtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGFib3J0UmVwbGljYXRpb24ocmVhc29uLCBlcnIpIHtcbiAgICBpZiAocmVwbGljYXRpb25Db21wbGV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlcnIubWVzc2FnZSkge1xuICAgICAgZXJyLm1lc3NhZ2UgPSByZWFzb247XG4gICAgfVxuICAgIHJlc3VsdC5vayA9IGZhbHNlO1xuICAgIHJlc3VsdC5zdGF0dXMgPSAnYWJvcnRpbmcnO1xuICAgIGJhdGNoZXMgPSBbXTtcbiAgICBwZW5kaW5nQmF0Y2ggPSB7XG4gICAgICBzZXE6IDAsXG4gICAgICBjaGFuZ2VzOiBbXSxcbiAgICAgIGRvY3M6IFtdXG4gICAgfTtcbiAgICBjb21wbGV0ZVJlcGxpY2F0aW9uKGVycik7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlUmVwbGljYXRpb24oZmF0YWxFcnJvcikge1xuICAgIGlmIChyZXBsaWNhdGlvbkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICByZXN1bHQuc3RhdHVzID0gJ2NhbmNlbGxlZCc7XG4gICAgICBpZiAod3JpdGluZ0NoZWNrcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc3RhdHVzID0gcmVzdWx0LnN0YXR1cyB8fCAnY29tcGxldGUnO1xuICAgIHJlc3VsdC5lbmRfdGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICByZXN1bHQubGFzdF9zZXEgPSBsYXN0X3NlcTtcbiAgICByZXBsaWNhdGlvbkNvbXBsZXRlZCA9IHRydWU7XG5cbiAgICBpZiAoZmF0YWxFcnJvcikge1xuICAgICAgLy8gbmVlZCB0byBleHRlbmQgdGhlIGVycm9yIGJlY2F1c2UgRmlyZWZveCBjb25zaWRlcnMgXCIucmVzdWx0XCIgcmVhZC1vbmx5XG4gICAgICBmYXRhbEVycm9yID0gY3JlYXRlRXJyb3IoZmF0YWxFcnJvcik7XG4gICAgICBmYXRhbEVycm9yLnJlc3VsdCA9IHJlc3VsdDtcblxuICAgICAgLy8gTm9ybWFsaXplIGVycm9yIG5hbWUuIGkuZS4gJ1VuYXV0aG9yaXplZCcgLT4gJ3VuYXV0aG9yaXplZCcgKGVnIFN5bmMgR2F0ZXdheSlcbiAgICAgIHZhciBlcnJvck5hbWUgPSAoZmF0YWxFcnJvci5uYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGVycm9yTmFtZSA9PT0gJ3VuYXV0aG9yaXplZCcgfHwgZXJyb3JOYW1lID09PSAnZm9yYmlkZGVuJykge1xuICAgICAgICByZXR1cm5WYWx1ZS5lbWl0KCdlcnJvcicsIGZhdGFsRXJyb3IpO1xuICAgICAgICByZXR1cm5WYWx1ZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tPZmYob3B0cywgcmV0dXJuVmFsdWUsIGZhdGFsRXJyb3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXBsaWNhdGUoc3JjLCB0YXJnZXQsIG9wdHMsIHJldHVyblZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblZhbHVlLmVtaXQoJ2NvbXBsZXRlJywgcmVzdWx0KTtcbiAgICAgIHJldHVyblZhbHVlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlLCBwZW5kaW5nLCBsYXN0U2VxKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHJldHVyblZhbHVlLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICB9XG4gICAgLy8gQXR0YWNoICdwZW5kaW5nJyBwcm9wZXJ0eSBpZiBzZXJ2ZXIgc3VwcG9ydHMgaXQgKENvdWNoREIgMi4wKylcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHBlbmRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICBwZW5kaW5nQmF0Y2gucGVuZGluZyA9IHBlbmRpbmc7XG4gICAgfVxuXG4gICAgdmFyIGZpbHRlciA9IGZpbHRlckNoYW5nZShvcHRzKShjaGFuZ2UpO1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBlbmRpbmdCYXRjaC5zZXEgPSBjaGFuZ2Uuc2VxIHx8IGxhc3RTZXE7XG4gICAgcGVuZGluZ0JhdGNoLmNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzUGVuZGluZ0JhdGNoKGJhdGNoZXMubGVuZ3RoID09PSAwICYmIGNoYW5nZXNPcHRzLmxpdmUpO1xuICAgIH0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBvbkNoYW5nZXNDb21wbGV0ZShjaGFuZ2VzKSB7XG4gICAgY2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIGlmIG5vIHJlc3VsdHMgd2VyZSByZXR1cm5lZCB0aGVuIHdlJ3JlIGRvbmUsXG4gICAgLy8gZWxzZSBmZXRjaCBtb3JlXG4gICAgaWYgKGNoYW5nZXMucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFuZ2VzT3B0cy5zaW5jZSA9IGNoYW5nZXMucmVzdWx0c1tjaGFuZ2VzLnJlc3VsdHMubGVuZ3RoIC0gMV0uc2VxO1xuICAgICAgZ2V0Q2hhbmdlcygpO1xuICAgICAgcHJvY2Vzc1BlbmRpbmdCYXRjaCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgY2hhbmdlc09wdHMubGl2ZSA9IHRydWU7XG4gICAgICAgICAgZ2V0Q2hhbmdlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NQZW5kaW5nQmF0Y2godHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICAvLyB1cGRhdGUgdGhlIGNoZWNrcG9pbnQgc28gd2Ugc3RhcnQgZnJvbSB0aGUgcmlnaHQgc2VxIG5leHQgdGltZVxuICAgICAgaWYgKCFjdXJyZW50QmF0Y2ggJiYgY2hhbmdlcy5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB3cml0aW5nQ2hlY2twb2ludCA9IHRydWU7XG4gICAgICAgIGNoZWNrcG9pbnRlci53cml0ZUNoZWNrcG9pbnQoY2hhbmdlcy5sYXN0X3NlcSxcbiAgICAgICAgICAgIHNlc3Npb24pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdyaXRpbmdDaGVja3BvaW50ID0gZmFsc2U7XG4gICAgICAgICAgcmVzdWx0Lmxhc3Rfc2VxID0gbGFzdF9zZXEgPSBjaGFuZ2VzLmxhc3Rfc2VxO1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChvbkNoZWNrcG9pbnRFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VzRXJyb3IoZXJyKSB7XG4gICAgY2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgIH1cbiAgICBhYm9ydFJlcGxpY2F0aW9uKCdjaGFuZ2VzIHJlamVjdGVkJywgZXJyKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ2V0Q2hhbmdlcygpIHtcbiAgICBpZiAoIShcbiAgICAgICFjaGFuZ2VzUGVuZGluZyAmJlxuICAgICAgIWNoYW5nZXNDb21wbGV0ZWQgJiZcbiAgICAgIGJhdGNoZXMubGVuZ3RoIDwgYmF0Y2hlc19saW1pdFxuICAgICAgKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFuZ2VzUGVuZGluZyA9IHRydWU7XG4gICAgZnVuY3Rpb24gYWJvcnRDaGFuZ2VzKCkge1xuICAgICAgY2hhbmdlcy5jYW5jZWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICByZXR1cm5WYWx1ZS5yZW1vdmVMaXN0ZW5lcignY2FuY2VsJywgYWJvcnRDaGFuZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAocmV0dXJuVmFsdWUuX2NoYW5nZXMpIHsgLy8gcmVtb3ZlIG9sZCBjaGFuZ2VzKCkgYW5kIGxpc3RlbmVyc1xuICAgICAgcmV0dXJuVmFsdWUucmVtb3ZlTGlzdGVuZXIoJ2NhbmNlbCcsIHJldHVyblZhbHVlLl9hYm9ydENoYW5nZXMpO1xuICAgICAgcmV0dXJuVmFsdWUuX2NoYW5nZXMuY2FuY2VsKCk7XG4gICAgfVxuICAgIHJldHVyblZhbHVlLm9uY2UoJ2NhbmNlbCcsIGFib3J0Q2hhbmdlcyk7XG5cbiAgICB2YXIgY2hhbmdlcyA9IHNyYy5jaGFuZ2VzKGNoYW5nZXNPcHRzKVxuICAgICAgLm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgY2hhbmdlcy50aGVuKHJlbW92ZUxpc3RlbmVyLCByZW1vdmVMaXN0ZW5lcik7XG4gICAgY2hhbmdlcy50aGVuKG9uQ2hhbmdlc0NvbXBsZXRlKVxuICAgICAgLmNhdGNoKG9uQ2hhbmdlc0Vycm9yKTtcblxuICAgIGlmIChvcHRzLnJldHJ5KSB7XG4gICAgICAvLyBzYXZlIGZvciBsYXRlciBzbyB3ZSBjYW4gY2FuY2VsIGlmIG5lY2Vzc2FyeVxuICAgICAgcmV0dXJuVmFsdWUuX2NoYW5nZXMgPSBjaGFuZ2VzO1xuICAgICAgcmV0dXJuVmFsdWUuX2Fib3J0Q2hhbmdlcyA9IGFib3J0Q2hhbmdlcztcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHN0YXJ0Q2hhbmdlcygpIHtcbiAgICBpbml0Q2hlY2twb2ludGVyKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hlY2twb2ludGVyLmdldENoZWNrcG9pbnQoKS50aGVuKGZ1bmN0aW9uIChjaGVja3BvaW50KSB7XG4gICAgICAgIGxhc3Rfc2VxID0gY2hlY2twb2ludDtcbiAgICAgICAgY2hhbmdlc09wdHMgPSB7XG4gICAgICAgICAgc2luY2U6IGxhc3Rfc2VxLFxuICAgICAgICAgIGxpbWl0OiBiYXRjaF9zaXplLFxuICAgICAgICAgIGJhdGNoX3NpemU6IGJhdGNoX3NpemUsXG4gICAgICAgICAgc3R5bGU6ICdhbGxfZG9jcycsXG4gICAgICAgICAgZG9jX2lkczogZG9jX2lkcyxcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgcmV0dXJuX2RvY3M6IHRydWUgLy8gcmVxdWlyZWQgc28gd2Uga25vdyB3aGVuIHdlJ3JlIGRvbmVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdHMuZmlsdGVyKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciB0aGUgY2xpZW50LXNpZGUgZmlsdGVyIGluIG9uQ2hhbmdlXG4gICAgICAgICAgICBjaGFuZ2VzT3B0cy5pbmNsdWRlX2RvY3MgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIGRkb2MgZmlsdGVyXG4gICAgICAgICAgICBjaGFuZ2VzT3B0cy5maWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdoZWFydGJlYXQnIGluIG9wdHMpIHtcbiAgICAgICAgICBjaGFuZ2VzT3B0cy5oZWFydGJlYXQgPSBvcHRzLmhlYXJ0YmVhdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3RpbWVvdXQnIGluIG9wdHMpIHtcbiAgICAgICAgICBjaGFuZ2VzT3B0cy50aW1lb3V0ID0gb3B0cy50aW1lb3V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLnF1ZXJ5X3BhcmFtcykge1xuICAgICAgICAgIGNoYW5nZXNPcHRzLnF1ZXJ5X3BhcmFtcyA9IG9wdHMucXVlcnlfcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLnZpZXcpIHtcbiAgICAgICAgICBjaGFuZ2VzT3B0cy52aWV3ID0gb3B0cy52aWV3O1xuICAgICAgICB9XG4gICAgICAgIGdldENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGFib3J0UmVwbGljYXRpb24oJ2dldENoZWNrcG9pbnQgcmVqZWN0ZWQgd2l0aCAnLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gb25DaGVja3BvaW50RXJyb3IoZXJyKSB7XG4gICAgd3JpdGluZ0NoZWNrcG9pbnQgPSBmYWxzZTtcbiAgICBhYm9ydFJlcGxpY2F0aW9uKCd3cml0ZUNoZWNrcG9pbnQgY29tcGxldGVkIHdpdGggZXJyb3InLCBlcnIpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChyZXR1cm5WYWx1ZS5jYW5jZWxsZWQpIHsgLy8gY2FuY2VsbGVkIGltbWVkaWF0ZWx5XG4gICAgY29tcGxldGVSZXBsaWNhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcmV0dXJuVmFsdWUuX2FkZGVkTGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuVmFsdWUub25jZSgnY2FuY2VsJywgY29tcGxldGVSZXBsaWNhdGlvbik7XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVyblZhbHVlLm9uY2UoJ2Vycm9yJywgb3B0cy5jb21wbGV0ZSk7XG4gICAgICByZXR1cm5WYWx1ZS5vbmNlKCdjb21wbGV0ZScsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb3B0cy5jb21wbGV0ZShudWxsLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVyblZhbHVlLl9hZGRlZExpc3RlbmVycyA9IHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdHMuc2luY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhcnRDaGFuZ2VzKCk7XG4gIH0gZWxzZSB7XG4gICAgaW5pdENoZWNrcG9pbnRlcigpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgd3JpdGluZ0NoZWNrcG9pbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGNoZWNrcG9pbnRlci53cml0ZUNoZWNrcG9pbnQob3B0cy5zaW5jZSwgc2Vzc2lvbik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB3cml0aW5nQ2hlY2twb2ludCA9IGZhbHNlO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocmV0dXJuVmFsdWUuY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbXBsZXRlUmVwbGljYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGFzdF9zZXEgPSBvcHRzLnNpbmNlO1xuICAgICAgc3RhcnRDaGFuZ2VzKCk7XG4gICAgfSkuY2F0Y2gob25DaGVja3BvaW50RXJyb3IpO1xuICB9XG59XG5cbi8vIFdlIGNyZWF0ZSBhIGJhc2ljIHByb21pc2Ugc28gdGhlIGNhbGxlciBjYW4gY2FuY2VsIHRoZSByZXBsaWNhdGlvbiBwb3NzaWJseVxuLy8gYmVmb3JlIHdlIGhhdmUgYWN0dWFsbHkgc3RhcnRlZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBldGNcbmluaGVyaXRzKFJlcGxpY2F0aW9uLCBFRSk7XG5mdW5jdGlvbiBSZXBsaWNhdGlvbigpIHtcbiAgRUUuY2FsbCh0aGlzKTtcbiAgdGhpcy5jYW5jZWxsZWQgPSBmYWxzZTtcbiAgdGhpcy5zdGF0ZSA9ICdwZW5kaW5nJztcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgICBzZWxmLm9uY2UoJ2NvbXBsZXRlJywgZnVsZmlsbCk7XG4gICAgc2VsZi5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG4gIH0pO1xuICBzZWxmLnRoZW4gPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICB9O1xuICBzZWxmLmNhdGNoID0gZnVuY3Rpb24gKHJlamVjdCkge1xuICAgIHJldHVybiBwcm9taXNlLmNhdGNoKHJlamVjdCk7XG4gIH07XG4gIC8vIEFzIHdlIGFsbG93IGVycm9yIGhhbmRsaW5nIHZpYSBcImVycm9yXCIgZXZlbnQgYXMgd2VsbCxcbiAgLy8gcHV0IGEgc3R1YiBpbiBoZXJlIHNvIHRoYXQgcmVqZWN0aW5nIG5ldmVyIHRocm93cyBVbmhhbmRsZWRFcnJvci5cbiAgc2VsZi5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG59XG5cblJlcGxpY2F0aW9uLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgdGhpcy5zdGF0ZSA9ICdjYW5jZWxsZWQnO1xuICB0aGlzLmVtaXQoJ2NhbmNlbCcpO1xufTtcblxuUmVwbGljYXRpb24ucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gKHNyYywgdGFyZ2V0KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHNlbGYuX3JlYWR5Q2FsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuX3JlYWR5Q2FsbGVkID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgc2VsZi5jYW5jZWwoKTtcbiAgfVxuICBzcmMub25jZSgnZGVzdHJveWVkJywgb25EZXN0cm95KTtcbiAgdGFyZ2V0Lm9uY2UoJ2Rlc3Ryb3llZCcsIG9uRGVzdHJveSk7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdkZXN0cm95ZWQnLCBvbkRlc3Ryb3kpO1xuICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcignZGVzdHJveWVkJywgb25EZXN0cm95KTtcbiAgfVxuICBzZWxmLm9uY2UoJ2NvbXBsZXRlJywgY2xlYW51cCk7XG59O1xuXG5mdW5jdGlvbiB0b1BvdWNoKGRiLCBvcHRzKSB7XG4gIHZhciBQb3VjaENvbnN0cnVjdG9yID0gb3B0cy5Qb3VjaENvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGRiID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgUG91Y2hDb25zdHJ1Y3RvcihkYiwgb3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxpY2F0ZVdyYXBwZXIoc3JjLCB0YXJnZXQsIG9wdHMsIGNhbGxiYWNrKSB7XG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBpZiAodHlwZW9mIG9wdHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgaWYgKG9wdHMuZG9jX2lkcyAmJiAhQXJyYXkuaXNBcnJheShvcHRzLmRvY19pZHMpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoQkFEX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiYGRvY19pZHNgIGZpbHRlciBwYXJhbWV0ZXIgaXMgbm90IGEgbGlzdC5cIik7XG4gIH1cblxuICBvcHRzLmNvbXBsZXRlID0gY2FsbGJhY2s7XG4gIG9wdHMgPSBjbG9uZShvcHRzKTtcbiAgb3B0cy5jb250aW51b3VzID0gb3B0cy5jb250aW51b3VzIHx8IG9wdHMubGl2ZTtcbiAgb3B0cy5yZXRyeSA9ICgncmV0cnknIGluIG9wdHMpID8gb3B0cy5yZXRyeSA6IGZhbHNlO1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICBvcHRzLlBvdWNoQ29uc3RydWN0b3IgPSBvcHRzLlBvdWNoQ29uc3RydWN0b3IgfHwgdGhpcztcbiAgdmFyIHJlcGxpY2F0ZVJldCA9IG5ldyBSZXBsaWNhdGlvbihvcHRzKTtcbiAgdmFyIHNyY1BvdWNoID0gdG9Qb3VjaChzcmMsIG9wdHMpO1xuICB2YXIgdGFyZ2V0UG91Y2ggPSB0b1BvdWNoKHRhcmdldCwgb3B0cyk7XG4gIHJlcGxpY2F0ZShzcmNQb3VjaCwgdGFyZ2V0UG91Y2gsIG9wdHMsIHJlcGxpY2F0ZVJldCk7XG4gIHJldHVybiByZXBsaWNhdGVSZXQ7XG59XG5cbmluaGVyaXRzKFN5bmMsIEVFKTtcbmZ1bmN0aW9uIHN5bmMoc3JjLCB0YXJnZXQsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBvcHRzID0gY2xvbmUob3B0cyk7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIG9wdHMuUG91Y2hDb25zdHJ1Y3RvciA9IG9wdHMuUG91Y2hDb25zdHJ1Y3RvciB8fCB0aGlzO1xuICBzcmMgPSB0b1BvdWNoKHNyYywgb3B0cyk7XG4gIHRhcmdldCA9IHRvUG91Y2godGFyZ2V0LCBvcHRzKTtcbiAgcmV0dXJuIG5ldyBTeW5jKHNyYywgdGFyZ2V0LCBvcHRzLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIFN5bmMoc3JjLCB0YXJnZXQsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5jYW5jZWxlZCA9IGZhbHNlO1xuXG4gIHZhciBvcHRzUHVzaCA9IG9wdHMucHVzaCA/ICRpbmplY3RfT2JqZWN0X2Fzc2lnbih7fSwgb3B0cywgb3B0cy5wdXNoKSA6IG9wdHM7XG4gIHZhciBvcHRzUHVsbCA9IG9wdHMucHVsbCA/ICRpbmplY3RfT2JqZWN0X2Fzc2lnbih7fSwgb3B0cywgb3B0cy5wdWxsKSA6IG9wdHM7XG5cbiAgdGhpcy5wdXNoID0gcmVwbGljYXRlV3JhcHBlcihzcmMsIHRhcmdldCwgb3B0c1B1c2gpO1xuICB0aGlzLnB1bGwgPSByZXBsaWNhdGVXcmFwcGVyKHRhcmdldCwgc3JjLCBvcHRzUHVsbCk7XG5cbiAgdGhpcy5wdXNoUGF1c2VkID0gdHJ1ZTtcbiAgdGhpcy5wdWxsUGF1c2VkID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBwdWxsQ2hhbmdlKGNoYW5nZSkge1xuICAgIHNlbGYuZW1pdCgnY2hhbmdlJywge1xuICAgICAgZGlyZWN0aW9uOiAncHVsbCcsXG4gICAgICBjaGFuZ2U6IGNoYW5nZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgc2VsZi5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICBkaXJlY3Rpb246ICdwdXNoJyxcbiAgICAgIGNoYW5nZTogY2hhbmdlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaERlbmllZChkb2MpIHtcbiAgICBzZWxmLmVtaXQoJ2RlbmllZCcsIHtcbiAgICAgIGRpcmVjdGlvbjogJ3B1c2gnLFxuICAgICAgZG9jOiBkb2NcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBwdWxsRGVuaWVkKGRvYykge1xuICAgIHNlbGYuZW1pdCgnZGVuaWVkJywge1xuICAgICAgZGlyZWN0aW9uOiAncHVsbCcsXG4gICAgICBkb2M6IGRvY1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hQYXVzZWQoKSB7XG4gICAgc2VsZi5wdXNoUGF1c2VkID0gdHJ1ZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoc2VsZi5wdWxsUGF1c2VkKSB7XG4gICAgICBzZWxmLmVtaXQoJ3BhdXNlZCcpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdWxsUGF1c2VkKCkge1xuICAgIHNlbGYucHVsbFBhdXNlZCA9IHRydWU7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHNlbGYucHVzaFBhdXNlZCkge1xuICAgICAgc2VsZi5lbWl0KCdwYXVzZWQnKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHVzaEFjdGl2ZSgpIHtcbiAgICBzZWxmLnB1c2hQYXVzZWQgPSBmYWxzZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoc2VsZi5wdWxsUGF1c2VkKSB7XG4gICAgICBzZWxmLmVtaXQoJ2FjdGl2ZScsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAncHVzaCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdWxsQWN0aXZlKCkge1xuICAgIHNlbGYucHVsbFBhdXNlZCA9IGZhbHNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChzZWxmLnB1c2hQYXVzZWQpIHtcbiAgICAgIHNlbGYuZW1pdCgnYWN0aXZlJywge1xuICAgICAgICBkaXJlY3Rpb246ICdwdWxsJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlbW92ZWQgPSB7fTtcblxuICBmdW5jdGlvbiByZW1vdmVBbGwodHlwZSkgeyAvLyB0eXBlIGlzICdwdXNoJyBvciAncHVsbCdcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50LCBmdW5jKSB7XG4gICAgICB2YXIgaXNDaGFuZ2UgPSBldmVudCA9PT0gJ2NoYW5nZScgJiZcbiAgICAgICAgKGZ1bmMgPT09IHB1bGxDaGFuZ2UgfHwgZnVuYyA9PT0gcHVzaENoYW5nZSk7XG4gICAgICB2YXIgaXNEZW5pZWQgPSBldmVudCA9PT0gJ2RlbmllZCcgJiZcbiAgICAgICAgKGZ1bmMgPT09IHB1bGxEZW5pZWQgfHwgZnVuYyA9PT0gcHVzaERlbmllZCk7XG4gICAgICB2YXIgaXNQYXVzZWQgPSBldmVudCA9PT0gJ3BhdXNlZCcgJiZcbiAgICAgICAgKGZ1bmMgPT09IHB1bGxQYXVzZWQgfHwgZnVuYyA9PT0gcHVzaFBhdXNlZCk7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBldmVudCA9PT0gJ2FjdGl2ZScgJiZcbiAgICAgICAgKGZ1bmMgPT09IHB1bGxBY3RpdmUgfHwgZnVuYyA9PT0gcHVzaEFjdGl2ZSk7XG5cbiAgICAgIGlmIChpc0NoYW5nZSB8fCBpc0RlbmllZCB8fCBpc1BhdXNlZCB8fCBpc0FjdGl2ZSkge1xuICAgICAgICBpZiAoIShldmVudCBpbiByZW1vdmVkKSkge1xuICAgICAgICAgIHJlbW92ZWRbZXZlbnRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlZFtldmVudF1bdHlwZV0gPSB0cnVlO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVtb3ZlZFtldmVudF0pLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIC8vIGJvdGggcHVzaCBhbmQgcHVsbCBoYXZlIGFza2VkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICBzZWxmLnJlbW92ZUFsbExpc3RlbmVycyhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wdHMubGl2ZSkge1xuICAgIHRoaXMucHVzaC5vbignY29tcGxldGUnLCBzZWxmLnB1bGwuY2FuY2VsLmJpbmQoc2VsZi5wdWxsKSk7XG4gICAgdGhpcy5wdWxsLm9uKCdjb21wbGV0ZScsIHNlbGYucHVzaC5jYW5jZWwuYmluZChzZWxmLnB1c2gpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE9uZUxpc3RlbmVyKGVlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAoZWUubGlzdGVuZXJzKGV2ZW50KS5pbmRleE9mKGxpc3RlbmVyKSA9PSAtMSkge1xuICAgICAgZWUub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLm9uKCduZXdMaXN0ZW5lcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCA9PT0gJ2NoYW5nZScpIHtcbiAgICAgIGFkZE9uZUxpc3RlbmVyKHNlbGYucHVsbCwgJ2NoYW5nZScsIHB1bGxDaGFuZ2UpO1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdXNoLCAnY2hhbmdlJywgcHVzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2RlbmllZCcpIHtcbiAgICAgIGFkZE9uZUxpc3RlbmVyKHNlbGYucHVsbCwgJ2RlbmllZCcsIHB1bGxEZW5pZWQpO1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdXNoLCAnZGVuaWVkJywgcHVzaERlbmllZCk7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGFkZE9uZUxpc3RlbmVyKHNlbGYucHVsbCwgJ2FjdGl2ZScsIHB1bGxBY3RpdmUpO1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdXNoLCAnYWN0aXZlJywgcHVzaEFjdGl2ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgIGFkZE9uZUxpc3RlbmVyKHNlbGYucHVsbCwgJ3BhdXNlZCcsIHB1bGxQYXVzZWQpO1xuICAgICAgYWRkT25lTGlzdGVuZXIoc2VsZi5wdXNoLCAncGF1c2VkJywgcHVzaFBhdXNlZCk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLm9uKCdyZW1vdmVMaXN0ZW5lcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCA9PT0gJ2NoYW5nZScpIHtcbiAgICAgIHNlbGYucHVsbC5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgcHVsbENoYW5nZSk7XG4gICAgICBzZWxmLnB1c2gucmVtb3ZlTGlzdGVuZXIoJ2NoYW5nZScsIHB1c2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdkZW5pZWQnKSB7XG4gICAgICBzZWxmLnB1bGwucmVtb3ZlTGlzdGVuZXIoJ2RlbmllZCcsIHB1bGxEZW5pZWQpO1xuICAgICAgc2VsZi5wdXNoLnJlbW92ZUxpc3RlbmVyKCdkZW5pZWQnLCBwdXNoRGVuaWVkKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnYWN0aXZlJykge1xuICAgICAgc2VsZi5wdWxsLnJlbW92ZUxpc3RlbmVyKCdhY3RpdmUnLCBwdWxsQWN0aXZlKTtcbiAgICAgIHNlbGYucHVzaC5yZW1vdmVMaXN0ZW5lcignYWN0aXZlJywgcHVzaEFjdGl2ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgIHNlbGYucHVsbC5yZW1vdmVMaXN0ZW5lcigncGF1c2VkJywgcHVsbFBhdXNlZCk7XG4gICAgICBzZWxmLnB1c2gucmVtb3ZlTGlzdGVuZXIoJ3BhdXNlZCcsIHB1c2hQYXVzZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5wdWxsLm9uKCdyZW1vdmVMaXN0ZW5lcicsIHJlbW92ZUFsbCgncHVsbCcpKTtcbiAgdGhpcy5wdXNoLm9uKCdyZW1vdmVMaXN0ZW5lcicsIHJlbW92ZUFsbCgncHVzaCcpKTtcblxuICB2YXIgcHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICB0aGlzLnB1c2gsXG4gICAgdGhpcy5wdWxsXG4gIF0pLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICB2YXIgb3V0ID0ge1xuICAgICAgcHVzaDogcmVzcFswXSxcbiAgICAgIHB1bGw6IHJlc3BbMV1cbiAgICB9O1xuICAgIHNlbGYuZW1pdCgnY29tcGxldGUnLCBvdXQpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9XG4gICAgc2VsZi5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gb3V0O1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5jYW5jZWwoKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBjYWxsYmFjaywgdGhlbiB0aGUgY2FsbGJhY2sgY2FuIHJlY2VpdmVcbiAgICAgIC8vIHRoZSBlcnJvciBldmVudFxuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBubyBjYWxsYmFjaywgdGhlbiB3ZSdyZSBzYWZlIHRvIGVtaXQgYW4gZXJyb3JcbiAgICAgIC8vIGV2ZW50LCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgYW4gdW5oYW5kbGVkIGVycm9yXG4gICAgICAvLyBkdWUgdG8gJ2Vycm9yJyBiZWluZyBhIHNwZWNpYWwgZXZlbnQgaW4gRXZlbnRFbWl0dGVyc1xuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgfVxuICAgIHNlbGYucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAvLyBubyBzZW5zZSB0aHJvd2luZyBpZiB3ZSdyZSBhbHJlYWR5IGVtaXR0aW5nIGFuICdlcnJvcicgZXZlbnRcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMudGhlbiA9IGZ1bmN0aW9uIChzdWNjZXNzLCBlcnIpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGVycik7XG4gIH07XG5cbiAgdGhpcy5jYXRjaCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICByZXR1cm4gcHJvbWlzZS5jYXRjaChlcnIpO1xuICB9O1xufVxuXG5TeW5jLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jYW5jZWxlZCkge1xuICAgIHRoaXMuY2FuY2VsZWQgPSB0cnVlO1xuICAgIHRoaXMucHVzaC5jYW5jZWwoKTtcbiAgICB0aGlzLnB1bGwuY2FuY2VsKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlcGxpY2F0aW9uKFBvdWNoREIpIHtcbiAgUG91Y2hEQi5yZXBsaWNhdGUgPSByZXBsaWNhdGVXcmFwcGVyO1xuICBQb3VjaERCLnN5bmMgPSBzeW5jO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQb3VjaERCLnByb3RvdHlwZSwgJ3JlcGxpY2F0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXBsaWNhdGVNZXRob2RzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnJlcGxpY2F0ZU1ldGhvZHMgPSB7XG4gICAgICAgICAgZnJvbTogZnVuY3Rpb24gKG90aGVyLCBvcHRzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uc3RydWN0b3IucmVwbGljYXRlKG90aGVyLCBzZWxmLCBvcHRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bzogZnVuY3Rpb24gKG90aGVyLCBvcHRzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uc3RydWN0b3IucmVwbGljYXRlKHNlbGYsIG90aGVyLCBvcHRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVwbGljYXRlTWV0aG9kcztcbiAgICB9XG4gIH0pO1xuXG4gIFBvdWNoREIucHJvdG90eXBlLnN5bmMgPSBmdW5jdGlvbiAoZGJOYW1lLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnN5bmModGhpcywgZGJOYW1lLCBvcHRzLCBjYWxsYmFjayk7XG4gIH07XG59XG5cblBvdWNoREIucGx1Z2luKElEQlBvdWNoKVxuICAucGx1Z2luKEh0dHBQb3VjaCQxKVxuICAucGx1Z2luKG1hcHJlZHVjZSlcbiAgLnBsdWdpbihyZXBsaWNhdGlvbik7XG5cbi8vIFB1bGwgZnJvbSBzcmMgYmVjYXVzZSBwb3VjaGRiLW5vZGUvcG91Y2hkYi1icm93c2VyIHRoZW1zZWx2ZXNcblxuZXhwb3J0IGRlZmF1bHQgUG91Y2hEQjtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4OyAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcblxuICByZXR1cm4gKGJ0aFtidWZbaSArIDBdXSArIGJ0aFtidWZbaSArIDFdXSArIGJ0aFtidWZbaSArIDJdXSArIGJ0aFtidWZbaSArIDNdXSArICctJyArIGJ0aFtidWZbaSArIDRdXSArIGJ0aFtidWZbaSArIDVdXSArICctJyArIGJ0aFtidWZbaSArIDZdXSArIGJ0aFtidWZbaSArIDddXSArICctJyArIGJ0aFtidWZbaSArIDhdXSArIGJ0aFtidWZbaSArIDldXSArICctJyArIGJ0aFtidWZbaSArIDEwXV0gKyBidGhbYnVmW2kgKyAxMV1dICsgYnRoW2J1ZltpICsgMTJdXSArIGJ0aFtidWZbaSArIDEzXV0gKyBidGhbYnVmW2kgKyAxNF1dICsgYnRoW2J1ZltpICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnl0ZXNUb1V1aWQ7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnOyIsIi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbi8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJztcblxuZnVuY3Rpb24gdXVpZFRvQnl0ZXModXVpZCkge1xuICAvLyBOb3RlOiBXZSBhc3N1bWUgd2UncmUgYmVpbmcgcGFzc2VkIGEgdmFsaWQgdXVpZCBzdHJpbmdcbiAgdmFyIGJ5dGVzID0gW107XG4gIHV1aWQucmVwbGFjZSgvW2EtZkEtRjAtOV17Mn0vZywgZnVuY3Rpb24gKGhleCkge1xuICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LCAxNikpO1xuICB9KTtcbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIG9mZiA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIG5hbWVzcGFjZSA9IHV1aWRUb0J5dGVzKG5hbWVzcGFjZSk7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgYW4gYXJyYXkgb2YgYnl0ZXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCduYW1lc3BhY2UgbXVzdCBiZSB1dWlkIHN0cmluZyBvciBhbiBBcnJheSBvZiAxNiBieXRlIHZhbHVlcycpO1xuICAgIH0gLy8gUGVyIDQuM1xuXG5cbiAgICB2YXIgYnl0ZXMgPSBoYXNoZnVuYyhuYW1lc3BhY2UuY29uY2F0KHZhbHVlKSk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IDE2OyArK2lkeCkge1xuICAgICAgICBidWZbb2ZmICsgaWR4XSA9IGJ5dGVzW2lkeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZC5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBVaW50OEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIHZhciBzdGFydCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbc3RhcnQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBieXRlc1RvVXVpZChybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRFxuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzICh3aXRoIHN1cHBvcnQgZm9yIHdlYiB3b3JrZXJzKVxuICAgICAgICB2YXIgZ2xvYjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYiA9IHdpbmRvdztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZ2xvYiA9IHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iLlNwYXJrTUQ1ID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLypcbiAgICAgKiBGYXN0ZXN0IG1kNSBpbXBsZW1lbnRhdGlvbiBhcm91bmQgKEpLTSBtZDUpLlxuICAgICAqIENyZWRpdHM6IEpvc2VwaCBNeWVyc1xuICAgICAqXG4gICAgICogQHNlZSBodHRwOi8vd3d3Lm15ZXJzZGFpbHkub3JnL2pvc2VwaC9qYXZhc2NyaXB0L21kNS10ZXh0Lmh0bWxcbiAgICAgKiBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL21kNS1zaG9vdG91dC83XG4gICAgICovXG5cbiAgICAvKiB0aGlzIGZ1bmN0aW9uIGlzIG11Y2ggZmFzdGVyLFxuICAgICAgc28gaWYgcG9zc2libGUgd2UgdXNlIGl0LiBTb21lIElFc1xuICAgICAgYXJlIHRoZSBvbmx5IG9uZXMgSSBrbm93IG9mIHRoYXRcbiAgICAgIG5lZWQgdGhlIGlkaW90aWMgc2Vjb25kIGZ1bmN0aW9uLFxuICAgICAgZ2VuZXJhdGVkIGJ5IGFuIGlmIGNsYXVzZS4gICovXG4gICAgdmFyIGFkZDMyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhICsgYikgJiAweEZGRkZGRkZGO1xuICAgIH0sXG4gICAgICAgIGhleF9jaHIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnXTtcblxuXG4gICAgZnVuY3Rpb24gY21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICAgICAgYSA9IGFkZDMyKGFkZDMyKGEsIHEpLCBhZGQzMih4LCB0KSk7XG4gICAgICAgIHJldHVybiBhZGQzMigoYSA8PCBzKSB8IChhID4+PiAoMzIgLSBzKSksIGIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1kNWN5Y2xlKHgsIGspIHtcbiAgICAgICAgdmFyIGEgPSB4WzBdLFxuICAgICAgICAgICAgYiA9IHhbMV0sXG4gICAgICAgICAgICBjID0geFsyXSxcbiAgICAgICAgICAgIGQgPSB4WzNdO1xuXG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMF0gLSA2ODA4NzY5MzYgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGEgfCB+ZCAmIGIpICsga1syXSArIDYwNjEwNTgxOSB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyAmIGQgfCB+YyAmIGEpICsga1szXSAtIDEwNDQ1MjUzMzAgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1s1XSArIDEyMDAwODA0MjYgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbNl0gLSAxNDczMjMxMzQxIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbOF0gKyAxNzcwMDM1NDE2IHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgJiBiIHwgfmEgJiBjKSArIGtbOV0gLSAxOTU4NDE0NDE3IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzExXSAtIDE5OTA0MDQxNjIgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbMTJdICsgMTgwNDYwMzY4MiB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzE0XSAtIDE1MDIwMDIyOTAgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTVdICsgMTIzNjUzNTMyOSB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcblxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzFdIC0gMTY1Nzk2NTEwIHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbNl0gLSAxMDY5NTAxNjMyIHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbMTFdICsgNjQzNzE3NzEzIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzBdIC0gMzczODk3MzAyIHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzVdIC0gNzAxNTU4NjkxIHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgJiBjIHwgYiAmIH5jKSArIGtbMTBdICsgMzgwMTYwODMgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxNV0gLSA2NjA0NzgzMzUgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbNF0gLSA0MDU1Mzc4NDggfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbOV0gKyA1Njg0NDY0MzggfCAwO1xuICAgICAgICBhICA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxNF0gLSAxMDE5ODAzNjkwIHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbM10gLSAxODczNjM5NjEgfCAwO1xuICAgICAgICBjICA9IChjIDw8IDE0IHwgYyA+Pj4gMTgpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBhIHwgZCAmIH5hKSArIGtbOF0gKyAxMTYzNTMxNTAxIHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzEzXSAtIDE0NDQ2ODE0NjcgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1syXSAtIDUxNDAzNzg0IHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBiIHwgYSAmIH5iKSArIGtbN10gKyAxNzM1MzI4NDczIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzEyXSAtIDE5MjY2MDc3MzQgfCAwO1xuICAgICAgICBiICA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XG5cbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbNV0gLSAzNzg1NTggfCAwO1xuICAgICAgICBhICA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbOF0gLSAyMDIyNTc0NDYzIHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxMV0gKyAxODM5MDMwNTYyIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1sxNF0gLSAzNTMwOTU1NiB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxXSAtIDE1MzA5OTIwNjAgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbNF0gKyAxMjcyODkzMzUzIHwgMDtcbiAgICAgICAgZCAgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1s3XSAtIDE1NTQ5NzYzMiB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyBeIGQgXiBhKSArIGtbMTBdIC0gMTA5NDczMDY0MCB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxM10gKyA2ODEyNzkxNzQgfCAwO1xuICAgICAgICBhICA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbMF0gLSAzNTg1MzcyMjIgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzNdIC0gNzIyNTIxOTc5IHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1s2XSArIDc2MDI5MTg5IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMyB8IGIgPj4+IDkpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgXiBjIF4gZCkgKyBrWzldIC0gNjQwMzY0NDg3IHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzEyXSAtIDQyMTgxNTgzNSB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTVdICsgNTMwNzQyNTIwIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1syXSAtIDk5NTMzODY1MSB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xuXG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzBdIC0gMTk4NjMwODQ0IHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTRdIC0gMTQxNjM1NDkwNSB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbNV0gLSA1NzQzNDA1NSB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjEgfGIgPj4+IDExKSArIGMgfCAwO1xuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1sxMl0gKyAxNzAwNDg1NTcxIHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzNdIC0gMTg5NDk4NjYwNiB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMTBdIC0gMTA1MTUyMyB8IDA7XG4gICAgICAgIGMgID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMV0gLSAyMDU0OTIyNzk5IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMSB8YiA+Pj4gMTEpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzhdICsgMTg3MzMxMzM1OSB8IDA7XG4gICAgICAgIGEgID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxNV0gLSAzMDYxMTc0NCB8IDA7XG4gICAgICAgIGQgID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbNl0gLSAxNTYwMTk4MzgwIHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1sxM10gKyAxMzA5MTUxNjQ5IHwgMDtcbiAgICAgICAgYiAgPSAoYiA8PCAyMSB8YiA+Pj4gMTEpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBrWzRdIC0gMTQ1NTIzMDcwIHwgMDtcbiAgICAgICAgYSAgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xuICAgICAgICBkICA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBrWzJdICsgNzE4Nzg3MjU5IHwgMDtcbiAgICAgICAgYyAgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgfCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsga1s5XSAtIDM0MzQ4NTU1MSB8IDA7XG4gICAgICAgIGIgID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcblxuICAgICAgICB4WzBdID0gYSArIHhbMF0gfCAwO1xuICAgICAgICB4WzFdID0gYiArIHhbMV0gfCAwO1xuICAgICAgICB4WzJdID0gYyArIHhbMl0gfCAwO1xuICAgICAgICB4WzNdID0gZCArIHhbM10gfCAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1kNWJsayhzKSB7XG4gICAgICAgIHZhciBtZDVibGtzID0gW10sXG4gICAgICAgICAgICBpOyAvKiBBbmR5IEtpbmcgc2FpZCBkbyBpdCB0aGlzIHdheS4gKi9cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNjQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgbWQ1Ymxrc1tpID4+IDJdID0gcy5jaGFyQ29kZUF0KGkpICsgKHMuY2hhckNvZGVBdChpICsgMSkgPDwgOCkgKyAocy5jaGFyQ29kZUF0KGkgKyAyKSA8PCAxNikgKyAocy5jaGFyQ29kZUF0KGkgKyAzKSA8PCAyNCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1kNWJsa3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWQ1YmxrX2FycmF5KGEpIHtcbiAgICAgICAgdmFyIG1kNWJsa3MgPSBbXSxcbiAgICAgICAgICAgIGk7IC8qIEFuZHkgS2luZyBzYWlkIGRvIGl0IHRoaXMgd2F5LiAqL1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA2NDsgaSArPSA0KSB7XG4gICAgICAgICAgICBtZDVibGtzW2kgPj4gMl0gPSBhW2ldICsgKGFbaSArIDFdIDw8IDgpICsgKGFbaSArIDJdIDw8IDE2KSArIChhW2kgKyAzXSA8PCAyNCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1kNWJsa3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWQ1MShzKSB7XG4gICAgICAgIHZhciBuID0gcy5sZW5ndGgsXG4gICAgICAgICAgICBzdGF0ZSA9IFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICB0YWlsLFxuICAgICAgICAgICAgdG1wLFxuICAgICAgICAgICAgbG8sXG4gICAgICAgICAgICBoaTtcblxuICAgICAgICBmb3IgKGkgPSA2NDsgaSA8PSBuOyBpICs9IDY0KSB7XG4gICAgICAgICAgICBtZDVjeWNsZShzdGF0ZSwgbWQ1YmxrKHMuc3Vic3RyaW5nKGkgLSA2NCwgaSkpKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy5zdWJzdHJpbmcoaSAtIDY0KTtcbiAgICAgICAgbGVuZ3RoID0gcy5sZW5ndGg7XG4gICAgICAgIHRhaWwgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGFpbFtpID4+IDJdIHw9IHMuY2hhckNvZGVBdChpKSA8PCAoKGkgJSA0KSA8PCAzKTtcbiAgICAgICAgfVxuICAgICAgICB0YWlsW2kgPj4gMl0gfD0gMHg4MCA8PCAoKGkgJSA0KSA8PCAzKTtcbiAgICAgICAgaWYgKGkgPiA1NSkge1xuICAgICAgICAgICAgbWQ1Y3ljbGUoc3RhdGUsIHRhaWwpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0YWlsW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJld2FyZSB0aGF0IHRoZSBmaW5hbCBsZW5ndGggbWlnaHQgbm90IGZpdCBpbiAzMiBiaXRzIHNvIHdlIHRha2UgY2FyZSBvZiB0aGF0XG4gICAgICAgIHRtcCA9IG4gKiA4O1xuICAgICAgICB0bXAgPSB0bXAudG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO1xuICAgICAgICBsbyA9IHBhcnNlSW50KHRtcFsyXSwgMTYpO1xuICAgICAgICBoaSA9IHBhcnNlSW50KHRtcFsxXSwgMTYpIHx8IDA7XG5cbiAgICAgICAgdGFpbFsxNF0gPSBsbztcbiAgICAgICAgdGFpbFsxNV0gPSBoaTtcblxuICAgICAgICBtZDVjeWNsZShzdGF0ZSwgdGFpbCk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZDUxX2FycmF5KGEpIHtcbiAgICAgICAgdmFyIG4gPSBhLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXRlID0gWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHRhaWwsXG4gICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICBsbyxcbiAgICAgICAgICAgIGhpO1xuXG4gICAgICAgIGZvciAoaSA9IDY0OyBpIDw9IG47IGkgKz0gNjQpIHtcbiAgICAgICAgICAgIG1kNWN5Y2xlKHN0YXRlLCBtZDVibGtfYXJyYXkoYS5zdWJhcnJheShpIC0gNjQsIGkpKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3Qgc3VyZSBpZiBpdCBpcyBhIGJ1ZywgaG93ZXZlciBJRTEwIHdpbGwgYWx3YXlzIHByb2R1Y2UgYSBzdWIgYXJyYXkgb2YgbGVuZ3RoIDFcbiAgICAgICAgLy8gY29udGFpbmluZyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBwYXJlbnQgYXJyYXkgaWYgdGhlIHN1YiBhcnJheSBzcGVjaWZpZWQgc3RhcnRzXG4gICAgICAgIC8vIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXJlbnQgYXJyYXkgLSB3ZWlyZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy83NzE0NTIvdHlwZWQtYXJyYXktc3ViYXJyYXktaXNzdWVcbiAgICAgICAgYSA9IChpIC0gNjQpIDwgbiA/IGEuc3ViYXJyYXkoaSAtIDY0KSA6IG5ldyBVaW50OEFycmF5KDApO1xuXG4gICAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgICB0YWlsID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRhaWxbaSA+PiAyXSB8PSBhW2ldIDw8ICgoaSAlIDQpIDw8IDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFpbFtpID4+IDJdIHw9IDB4ODAgPDwgKChpICUgNCkgPDwgMyk7XG4gICAgICAgIGlmIChpID4gNTUpIHtcbiAgICAgICAgICAgIG1kNWN5Y2xlKHN0YXRlLCB0YWlsKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGFpbFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1pZ2h0IG5vdCBmaXQgaW4gMzIgYml0cyBzbyB3ZSB0YWtlIGNhcmUgb2YgdGhhdFxuICAgICAgICB0bXAgPSBuICogODtcbiAgICAgICAgdG1wID0gdG1wLnRvU3RyaW5nKDE2KS5tYXRjaCgvKC4qPykoLnswLDh9KSQvKTtcbiAgICAgICAgbG8gPSBwYXJzZUludCh0bXBbMl0sIDE2KTtcbiAgICAgICAgaGkgPSBwYXJzZUludCh0bXBbMV0sIDE2KSB8fCAwO1xuXG4gICAgICAgIHRhaWxbMTRdID0gbG87XG4gICAgICAgIHRhaWxbMTVdID0gaGk7XG5cbiAgICAgICAgbWQ1Y3ljbGUoc3RhdGUsIHRhaWwpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaGV4KG4pIHtcbiAgICAgICAgdmFyIHMgPSAnJyxcbiAgICAgICAgICAgIGo7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCA0OyBqICs9IDEpIHtcbiAgICAgICAgICAgIHMgKz0gaGV4X2NoclsobiA+PiAoaiAqIDggKyA0KSkgJiAweDBGXSArIGhleF9jaHJbKG4gPj4gKGogKiA4KSkgJiAweDBGXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoZXgoeCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHhbaV0gPSByaGV4KHhbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8vIEluIHNvbWUgY2FzZXMgdGhlIGZhc3QgYWRkMzIgZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQuLlxuICAgIGlmIChoZXgobWQ1MSgnaGVsbG8nKSkgIT09ICc1ZDQxNDAyYWJjNGIyYTc2Yjk3MTlkOTExMDE3YzU5MicpIHtcbiAgICAgICAgYWRkMzIgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKSxcbiAgICAgICAgICAgICAgICBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICAgICAgICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogQXJyYXlCdWZmZXIgc2xpY2UgcG9seWZpbGwuXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90dGF1YmVydC9ub2RlLWFycmF5YnVmZmVyLXNsaWNlXG4gICAgICovXG5cbiAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiAhQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjbGFtcCh2YWwsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbCA9ICh2YWwgfCAwKSB8fCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHZhbCArIGxlbmd0aCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHZhbCwgbGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSBjbGFtcChmcm9tLCBsZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIG51bSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQXJyYXk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjbGFtcCh0bywgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmVnaW4gPiBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudW0gPSBlbmQgLSBiZWdpbjtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBuZXcgQXJyYXlCdWZmZXIobnVtKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBzb3VyY2VBcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMsIGJlZ2luLCBudW0pO1xuICAgICAgICAgICAgICAgIHRhcmdldEFycmF5LnNldChzb3VyY2VBcnJheSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlcnMuXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiB0b1V0Zjgoc3RyKSB7XG4gICAgICAgIGlmICgvW1xcdTAwODAtXFx1RkZGRl0vLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1dGY4U3RyMkFycmF5QnVmZmVyKHN0ciwgcmV0dXJuVUludDhBcnJheSkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aCxcbiAgICAgICAgICAgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpLFxuICAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShidWZmKSxcbiAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGFycltpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblVJbnQ4QXJyYXkgPyBhcnIgOiBidWZmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyMlV0ZjhTdHIoYnVmZikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShidWZmKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uY2F0ZW5hdGVBcnJheUJ1ZmZlcnMoZmlyc3QsIHNlY29uZCwgcmV0dXJuVUludDhBcnJheSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZmlyc3QuYnl0ZUxlbmd0aCArIHNlY29uZC5ieXRlTGVuZ3RoKTtcblxuICAgICAgICByZXN1bHQuc2V0KG5ldyBVaW50OEFycmF5KGZpcnN0KSk7XG4gICAgICAgIHJlc3VsdC5zZXQobmV3IFVpbnQ4QXJyYXkoc2Vjb25kKSwgZmlyc3QuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblVJbnQ4QXJyYXkgPyByZXN1bHQgOiByZXN1bHQuYnVmZmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhleFRvQmluYXJ5U3RyaW5nKGhleCkge1xuICAgICAgICB2YXIgYnl0ZXMgPSBbXSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGhleC5sZW5ndGgsXG4gICAgICAgICAgICB4O1xuXG4gICAgICAgIGZvciAoeCA9IDA7IHggPCBsZW5ndGggLSAxOyB4ICs9IDIpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cih4LCAyKSwgMTYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgYnl0ZXMpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogU3BhcmtNRDUgT09QIGltcGxlbWVudGF0aW9uLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgY2xhc3MgdG8gcGVyZm9ybSBhbiBpbmNyZW1lbnRhbCBtZDUsIG90aGVyd2lzZSB1c2UgdGhlXG4gICAgICogc3RhdGljIG1ldGhvZHMgaW5zdGVhZC5cbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIFNwYXJrTUQ1KCkge1xuICAgICAgICAvLyBjYWxsIHJlc2V0IHRvIGluaXQgdGhlIGluc3RhbmNlXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc3RyaW5nLlxuICAgICAqIEEgY29udmVyc2lvbiB3aWxsIGJlIGFwcGxpZWQgaWYgYW4gdXRmOCBzdHJpbmcgaXMgZGV0ZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gYmUgYXBwZW5kZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1fSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gQ29udmVydHMgdGhlIHN0cmluZyB0byB1dGY4IGJ5dGVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAvLyBUaGVuIGFwcGVuZCBhcyBiaW5hcnlcbiAgICAgICAgdGhpcy5hcHBlbmRCaW5hcnkodG9VdGY4KHN0cikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgYmluYXJ5IHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50cyBUaGUgYmluYXJ5IHN0cmluZyB0byBiZSBhcHBlbmRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3BhcmtNRDV9IFRoZSBpbnN0YW5jZSBpdHNlbGZcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuYXBwZW5kQmluYXJ5ID0gZnVuY3Rpb24gKGNvbnRlbnRzKSB7XG4gICAgICAgIHRoaXMuX2J1ZmYgKz0gY29udGVudHM7XG4gICAgICAgIHRoaXMuX2xlbmd0aCArPSBjb250ZW50cy5sZW5ndGg7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuX2J1ZmYubGVuZ3RoLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSA2NDsgaSA8PSBsZW5ndGg7IGkgKz0gNjQpIHtcbiAgICAgICAgICAgIG1kNWN5Y2xlKHRoaXMuX2hhc2gsIG1kNWJsayh0aGlzLl9idWZmLnN1YnN0cmluZyhpIC0gNjQsIGkpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9idWZmID0gdGhpcy5fYnVmZi5zdWJzdHJpbmcoaSAtIDY0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluaXNoZXMgdGhlIGluY3JlbWVudGFsIGNvbXB1dGF0aW9uLCByZXNldGluZyB0aGUgaW50ZXJuYWwgc3RhdGUgYW5kXG4gICAgICogcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJhdyBUcnVlIHRvIGdldCB0aGUgcmF3IHN0cmluZywgZmFsc2UgdG8gZ2V0IHRoZSBoZXggc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSByZXN1bHRcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKHJhdykge1xuICAgICAgICB2YXIgYnVmZiA9IHRoaXMuX2J1ZmYsXG4gICAgICAgICAgICBsZW5ndGggPSBidWZmLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICB0YWlsID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgcmV0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGFpbFtpID4+IDJdIHw9IGJ1ZmYuY2hhckNvZGVBdChpKSA8PCAoKGkgJSA0KSA8PCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpbmlzaCh0YWlsLCBsZW5ndGgpO1xuICAgICAgICByZXQgPSBoZXgodGhpcy5faGFzaCk7XG5cbiAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgICAgcmV0ID0gaGV4VG9CaW5hcnlTdHJpbmcocmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1fSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9idWZmID0gJyc7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2hhc2ggPSBbMTczMjU4NDE5MywgLTI3MTczMzg3OSwgLTE3MzI1ODQxOTQsIDI3MTczMzg3OF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHN0YXRlXG4gICAgICovXG4gICAgU3BhcmtNRDUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVmZjogdGhpcy5fYnVmZixcbiAgICAgICAgICAgIGxlbmd0aDogdGhpcy5fbGVuZ3RoLFxuICAgICAgICAgICAgaGFzaDogdGhpcy5faGFzaC5zbGljZSgpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBjb21wdXRhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBUaGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYXJrTUQ1fSBUaGUgaW5zdGFuY2UgaXRzZWxmXG4gICAgICovXG4gICAgU3BhcmtNRDUucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2J1ZmYgPSBzdGF0ZS5idWZmO1xuICAgICAgICB0aGlzLl9sZW5ndGggPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2hhc2ggPSBzdGF0ZS5oYXNoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBtZW1vcnkgdXNlZCBieSB0aGUgaW5jcmVtZW50YWwgYnVmZmVyIGFuZCBvdGhlciBhZGRpdGlvbmFsXG4gICAgICogcmVzb3VyY2VzLiBJZiB5b3UgcGxhbiB0byB1c2UgdGhlIGluc3RhbmNlIGFnYWluLCB1c2UgcmVzZXQgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2hhc2g7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9idWZmO1xuICAgICAgICBkZWxldGUgdGhpcy5fbGVuZ3RoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5pc2ggdGhlIGZpbmFsIGNhbGN1bGF0aW9uIGJhc2VkIG9uIHRoZSB0YWlsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gIHRhaWwgICBUaGUgdGFpbCAod2lsbCBiZSBtb2RpZmllZClcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHJlbWFpbmluZyBidWZmZXJcbiAgICAgKi9cbiAgICBTcGFya01ENS5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uICh0YWlsLCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGkgPSBsZW5ndGgsXG4gICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICBsbyxcbiAgICAgICAgICAgIGhpO1xuXG4gICAgICAgIHRhaWxbaSA+PiAyXSB8PSAweDgwIDw8ICgoaSAlIDQpIDw8IDMpO1xuICAgICAgICBpZiAoaSA+IDU1KSB7XG4gICAgICAgICAgICBtZDVjeWNsZSh0aGlzLl9oYXNoLCB0YWlsKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGFpbFtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEbyB0aGUgZmluYWwgY29tcHV0YXRpb24gYmFzZWQgb24gdGhlIHRhaWwgYW5kIGxlbmd0aFxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1heSBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcbiAgICAgICAgdG1wID0gdGhpcy5fbGVuZ3RoICogODtcbiAgICAgICAgdG1wID0gdG1wLnRvU3RyaW5nKDE2KS5tYXRjaCgvKC4qPykoLnswLDh9KSQvKTtcbiAgICAgICAgbG8gPSBwYXJzZUludCh0bXBbMl0sIDE2KTtcbiAgICAgICAgaGkgPSBwYXJzZUludCh0bXBbMV0sIDE2KSB8fCAwO1xuXG4gICAgICAgIHRhaWxbMTRdID0gbG87XG4gICAgICAgIHRhaWxbMTVdID0gaGk7XG4gICAgICAgIG1kNWN5Y2xlKHRoaXMuX2hhc2gsIHRhaWwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyB0aGUgbWQ1IGhhc2ggb24gYSBzdHJpbmcuXG4gICAgICogQSBjb252ZXJzaW9uIHdpbGwgYmUgYXBwbGllZCBpZiB1dGY4IHN0cmluZyBpcyBkZXRlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIFRoZSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyYXddIFRydWUgdG8gZ2V0IHRoZSByYXcgc3RyaW5nLCBmYWxzZSB0byBnZXQgdGhlIGhleCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdFxuICAgICAqL1xuICAgIFNwYXJrTUQ1Lmhhc2ggPSBmdW5jdGlvbiAoc3RyLCByYXcpIHtcbiAgICAgICAgLy8gQ29udmVydHMgdGhlIHN0cmluZyB0byB1dGY4IGJ5dGVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAvLyBUaGVuIGNvbXB1dGUgaXQgdXNpbmcgdGhlIGJpbmFyeSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gU3BhcmtNRDUuaGFzaEJpbmFyeSh0b1V0Zjgoc3RyKSwgcmF3KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgdGhlIG1kNSBoYXNoIG9uIGEgYmluYXJ5IHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgY29udGVudCBUaGUgYmluYXJ5IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Jhd10gICAgIFRydWUgdG8gZ2V0IHRoZSByYXcgc3RyaW5nLCBmYWxzZSB0byBnZXQgdGhlIGhleCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdFxuICAgICAqL1xuICAgIFNwYXJrTUQ1Lmhhc2hCaW5hcnkgPSBmdW5jdGlvbiAoY29udGVudCwgcmF3KSB7XG4gICAgICAgIHZhciBoYXNoID0gbWQ1MShjb250ZW50KSxcbiAgICAgICAgICAgIHJldCA9IGhleChoYXNoKTtcblxuICAgICAgICByZXR1cm4gcmF3ID8gaGV4VG9CaW5hcnlTdHJpbmcocmV0KSA6IHJldDtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBTcGFya01ENSBPT1AgaW1wbGVtZW50YXRpb24gZm9yIGFycmF5IGJ1ZmZlcnMuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBjbGFzcyB0byBwZXJmb3JtIGFuIGluY3JlbWVudGFsIG1kNSBPTkxZIGZvciBhcnJheSBidWZmZXJzLlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYWxsIHJlc2V0IHRvIGluaXQgdGhlIGluc3RhbmNlXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhbiBhcnJheSBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnIgVGhlIGFycmF5IHRvIGJlIGFwcGVuZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTcGFya01ENS5BcnJheUJ1ZmZlcn0gVGhlIGluc3RhbmNlIGl0c2VsZlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHZhciBidWZmID0gY29uY2F0ZW5hdGVBcnJheUJ1ZmZlcnModGhpcy5fYnVmZi5idWZmZXIsIGFyciwgdHJ1ZSksXG4gICAgICAgICAgICBsZW5ndGggPSBidWZmLmxlbmd0aCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgdGhpcy5fbGVuZ3RoICs9IGFyci5ieXRlTGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDY0OyBpIDw9IGxlbmd0aDsgaSArPSA2NCkge1xuICAgICAgICAgICAgbWQ1Y3ljbGUodGhpcy5faGFzaCwgbWQ1YmxrX2FycmF5KGJ1ZmYuc3ViYXJyYXkoaSAtIDY0LCBpKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZiA9IChpIC0gNjQpIDwgbGVuZ3RoID8gbmV3IFVpbnQ4QXJyYXkoYnVmZi5idWZmZXIuc2xpY2UoaSAtIDY0KSkgOiBuZXcgVWludDhBcnJheSgwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluaXNoZXMgdGhlIGluY3JlbWVudGFsIGNvbXB1dGF0aW9uLCByZXNldGluZyB0aGUgaW50ZXJuYWwgc3RhdGUgYW5kXG4gICAgICogcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJhdyBUcnVlIHRvIGdldCB0aGUgcmF3IHN0cmluZywgZmFsc2UgdG8gZ2V0IHRoZSBoZXggc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSByZXN1bHRcbiAgICAgKi9cbiAgICBTcGFya01ENS5BcnJheUJ1ZmZlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKHJhdykge1xuICAgICAgICB2YXIgYnVmZiA9IHRoaXMuX2J1ZmYsXG4gICAgICAgICAgICBsZW5ndGggPSBidWZmLmxlbmd0aCxcbiAgICAgICAgICAgIHRhaWwgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGFpbFtpID4+IDJdIHw9IGJ1ZmZbaV0gPDwgKChpICUgNCkgPDwgMyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maW5pc2godGFpbCwgbGVuZ3RoKTtcbiAgICAgICAgcmV0ID0gaGV4KHRoaXMuX2hhc2gpO1xuXG4gICAgICAgIGlmIChyYXcpIHtcbiAgICAgICAgICAgIHJldCA9IGhleFRvQmluYXJ5U3RyaW5nKHJldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgY29tcHV0YXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTcGFya01ENS5BcnJheUJ1ZmZlcn0gVGhlIGluc3RhbmNlIGl0c2VsZlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYnVmZiA9IG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9oYXNoID0gWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgY29tcHV0YXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBzdGF0ZVxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gU3BhcmtNRDUucHJvdG90eXBlLmdldFN0YXRlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gQ29udmVydCBidWZmZXIgdG8gYSBzdHJpbmdcbiAgICAgICAgc3RhdGUuYnVmZiA9IGFycmF5QnVmZmVyMlV0ZjhTdHIoc3RhdGUuYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgY29tcHV0YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgVGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTcGFya01ENS5BcnJheUJ1ZmZlcn0gVGhlIGluc3RhbmNlIGl0c2VsZlxuICAgICAqL1xuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBidWZmZXJcbiAgICAgICAgc3RhdGUuYnVmZiA9IHV0ZjhTdHIyQXJyYXlCdWZmZXIoc3RhdGUuYnVmZiwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIFNwYXJrTUQ1LnByb3RvdHlwZS5zZXRTdGF0ZS5jYWxsKHRoaXMsIHN0YXRlKTtcbiAgICB9O1xuXG4gICAgU3BhcmtNRDUuQXJyYXlCdWZmZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBTcGFya01ENS5wcm90b3R5cGUuZGVzdHJveTtcblxuICAgIFNwYXJrTUQ1LkFycmF5QnVmZmVyLnByb3RvdHlwZS5fZmluaXNoID0gU3BhcmtNRDUucHJvdG90eXBlLl9maW5pc2g7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyB0aGUgbWQ1IGhhc2ggb24gYW4gYXJyYXkgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyIFRoZSBhcnJheSBidWZmZXJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBbcmF3XSBUcnVlIHRvIGdldCB0aGUgcmF3IHN0cmluZywgZmFsc2UgdG8gZ2V0IHRoZSBoZXggb25lXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSByZXN1bHRcbiAgICAgKi9cbiAgICBTcGFya01ENS5BcnJheUJ1ZmZlci5oYXNoID0gZnVuY3Rpb24gKGFyciwgcmF3KSB7XG4gICAgICAgIHZhciBoYXNoID0gbWQ1MV9hcnJheShuZXcgVWludDhBcnJheShhcnIpKSxcbiAgICAgICAgICAgIHJldCA9IGhleChoYXNoKTtcblxuICAgICAgICByZXR1cm4gcmF3ID8gaGV4VG9CaW5hcnlTdHJpbmcocmV0KSA6IHJldDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNwYXJrTUQ1O1xufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN0cmluZ2lmeS9wYXJzZSBmdW5jdGlvbnMgdGhhdCBkb24ndCBvcGVyYXRlXG4gKiByZWN1cnNpdmVseSwgc28gdGhleSBhdm9pZCBjYWxsIHN0YWNrIGV4Y2VlZGVkXG4gKiBlcnJvcnMuXG4gKi9cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGlucHV0KSB7XG4gIHZhciBxdWV1ZSA9IFtdO1xuICBxdWV1ZS5wdXNoKHtvYmo6IGlucHV0fSk7XG5cbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgbmV4dCwgb2JqLCBwcmVmaXgsIHZhbCwgaSwgYXJyYXlQcmVmaXgsIGtleXMsIGssIGtleSwgdmFsdWUsIG9ialByZWZpeDtcbiAgd2hpbGUgKChuZXh0ID0gcXVldWUucG9wKCkpKSB7XG4gICAgb2JqID0gbmV4dC5vYmo7XG4gICAgcHJlZml4ID0gbmV4dC5wcmVmaXggfHwgJyc7XG4gICAgdmFsID0gbmV4dC52YWwgfHwgJyc7XG4gICAgcmVzICs9IHByZWZpeDtcbiAgICBpZiAodmFsKSB7XG4gICAgICByZXMgKz0gdmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJlcyArPSB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICByZXMgKz0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICBxdWV1ZS5wdXNoKHt2YWw6ICddJ30pO1xuICAgICAgZm9yIChpID0gb2JqLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFycmF5UHJlZml4ID0gaSA9PT0gMCA/ICcnIDogJywnO1xuICAgICAgICBxdWV1ZS5wdXNoKHtvYmo6IG9ialtpXSwgcHJlZml4OiBhcnJheVByZWZpeH0pO1xuICAgICAgfVxuICAgICAgcXVldWUucHVzaCh7dmFsOiAnWyd9KTtcbiAgICB9IGVsc2UgeyAvLyBvYmplY3RcbiAgICAgIGtleXMgPSBbXTtcbiAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcXVldWUucHVzaCh7dmFsOiAnfSd9KTtcbiAgICAgIGZvciAoaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgb2JqUHJlZml4ID0gKGkgPiAwID8gJywnIDogJycpO1xuICAgICAgICBvYmpQcmVmaXggKz0gSlNPTi5zdHJpbmdpZnkoa2V5KSArICc6JztcbiAgICAgICAgcXVldWUucHVzaCh7b2JqOiB2YWx1ZSwgcHJlZml4OiBvYmpQcmVmaXh9KTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnB1c2goe3ZhbDogJ3snfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG4vLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgdGhlIHBhcnNlIGZ1bmN0aW9uLlxuLy8gVGhpcyBwb3AgZnVuY3Rpb24gaXMgYmFzaWNhbGx5IGNvcGllZCBmcm9tXG4vLyBwb3VjaENvbGxhdGUucGFyc2VJbmRleGFibGVTdHJpbmdcbmZ1bmN0aW9uIHBvcChvYmosIHN0YWNrLCBtZXRhU3RhY2spIHtcbiAgdmFyIGxhc3RNZXRhRWxlbWVudCA9IG1ldGFTdGFja1ttZXRhU3RhY2subGVuZ3RoIC0gMV07XG4gIGlmIChvYmogPT09IGxhc3RNZXRhRWxlbWVudC5lbGVtZW50KSB7XG4gICAgLy8gcG9wcGluZyBhIG1ldGEtZWxlbWVudCwgZS5nLiBhbiBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgYW5vdGhlciBvYmplY3RcbiAgICBtZXRhU3RhY2sucG9wKCk7XG4gICAgbGFzdE1ldGFFbGVtZW50ID0gbWV0YVN0YWNrW21ldGFTdGFjay5sZW5ndGggLSAxXTtcbiAgfVxuICB2YXIgZWxlbWVudCA9IGxhc3RNZXRhRWxlbWVudC5lbGVtZW50O1xuICB2YXIgbGFzdEVsZW1lbnRJbmRleCA9IGxhc3RNZXRhRWxlbWVudC5pbmRleDtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50LnB1c2gob2JqKTtcbiAgfSBlbHNlIGlmIChsYXN0RWxlbWVudEluZGV4ID09PSBzdGFjay5sZW5ndGggLSAyKSB7IC8vIG9iaiB3aXRoIGtleSt2YWx1ZVxuICAgIHZhciBrZXkgPSBzdGFjay5wb3AoKTtcbiAgICBlbGVtZW50W2tleV0gPSBvYmo7XG4gIH0gZWxzZSB7XG4gICAgc3RhY2sucHVzaChvYmopOyAvLyBvYmogd2l0aCBrZXkgb25seVxuICB9XG59XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBzdGFjayA9IFtdO1xuICB2YXIgbWV0YVN0YWNrID0gW107IC8vIHN0YWNrIGZvciBhcnJheXMgYW5kIG9iamVjdHNcbiAgdmFyIGkgPSAwO1xuICB2YXIgY29sbGF0aW9uSW5kZXgscGFyc2VkTnVtLG51bUNoYXI7XG4gIHZhciBwYXJzZWRTdHJpbmcsbGFzdENoLG51bUNvbnNlY3V0aXZlU2xhc2hlcyxjaDtcbiAgdmFyIGFycmF5RWxlbWVudCwgb2JqRWxlbWVudDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2xsYXRpb25JbmRleCA9IHN0cltpKytdO1xuICAgIGlmIChjb2xsYXRpb25JbmRleCA9PT0gJ30nIHx8XG4gICAgICAgIGNvbGxhdGlvbkluZGV4ID09PSAnXScgfHxcbiAgICAgICAgdHlwZW9mIGNvbGxhdGlvbkluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gc3RhY2sucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3Aoc3RhY2sucG9wKCksIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChjb2xsYXRpb25JbmRleCkge1xuICAgICAgY2FzZSAnICc6XG4gICAgICBjYXNlICdcXHQnOlxuICAgICAgY2FzZSAnXFxuJzpcbiAgICAgIGNhc2UgJzonOlxuICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbic6XG4gICAgICAgIGkgKz0gMzsgLy8gJ3VsbCdcbiAgICAgICAgcG9wKG51bGwsIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgICBpICs9IDM7IC8vICdydWUnXG4gICAgICAgIHBvcCh0cnVlLCBzdGFjaywgbWV0YVN0YWNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmJzpcbiAgICAgICAgaSArPSA0OyAvLyAnYWxzZSdcbiAgICAgICAgcG9wKGZhbHNlLCBzdGFjaywgbWV0YVN0YWNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcwJzpcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgY2FzZSAnMic6XG4gICAgICBjYXNlICczJzpcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc2JzpcbiAgICAgIGNhc2UgJzcnOlxuICAgICAgY2FzZSAnOCc6XG4gICAgICBjYXNlICc5JzpcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBwYXJzZWROdW0gPSAnJztcbiAgICAgICAgaS0tO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIG51bUNoYXIgPSBzdHJbaSsrXTtcbiAgICAgICAgICBpZiAoL1tcXGRcXC5cXC1lXFwrXS8udGVzdChudW1DaGFyKSkge1xuICAgICAgICAgICAgcGFyc2VkTnVtICs9IG51bUNoYXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3AocGFyc2VGbG9hdChwYXJzZWROdW0pLCBzdGFjaywgbWV0YVN0YWNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIHBhcnNlZFN0cmluZyA9ICcnO1xuICAgICAgICBsYXN0Q2ggPSB2b2lkIDA7XG4gICAgICAgIG51bUNvbnNlY3V0aXZlU2xhc2hlcyA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY2ggPSBzdHJbaSsrXTtcbiAgICAgICAgICBpZiAoY2ggIT09ICdcIicgfHwgKGxhc3RDaCA9PT0gJ1xcXFwnICYmXG4gICAgICAgICAgICAgIG51bUNvbnNlY3V0aXZlU2xhc2hlcyAlIDIgPT09IDEpKSB7XG4gICAgICAgICAgICBwYXJzZWRTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBsYXN0Q2ggPSBjaDtcbiAgICAgICAgICAgIGlmIChsYXN0Q2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICBudW1Db25zZWN1dGl2ZVNsYXNoZXMrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG51bUNvbnNlY3V0aXZlU2xhc2hlcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3AoSlNPTi5wYXJzZSgnXCInICsgcGFyc2VkU3RyaW5nICsgJ1wiJyksIHN0YWNrLCBtZXRhU3RhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICBhcnJheUVsZW1lbnQgPSB7IGVsZW1lbnQ6IFtdLCBpbmRleDogc3RhY2subGVuZ3RoIH07XG4gICAgICAgIHN0YWNrLnB1c2goYXJyYXlFbGVtZW50LmVsZW1lbnQpO1xuICAgICAgICBtZXRhU3RhY2sucHVzaChhcnJheUVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3snOlxuICAgICAgICBvYmpFbGVtZW50ID0geyBlbGVtZW50OiB7fSwgaW5kZXg6IHN0YWNrLmxlbmd0aCB9O1xuICAgICAgICBzdGFjay5wdXNoKG9iakVsZW1lbnQuZWxlbWVudCk7XG4gICAgICAgIG1ldGFTdGFjay5wdXNoKG9iakVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAndW5leHBlY3RlZGx5IHJlYWNoZWQgZW5kIG9mIGlucHV0OiAnICsgY29sbGF0aW9uSW5kZXgpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=