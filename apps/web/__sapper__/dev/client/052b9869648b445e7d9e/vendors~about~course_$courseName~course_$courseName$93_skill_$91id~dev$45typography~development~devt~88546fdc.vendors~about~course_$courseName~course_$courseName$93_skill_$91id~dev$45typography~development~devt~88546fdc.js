(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~about~course_$courseName~course_$courseName$93_skill_$91id~dev$45typography~development~devt~88546fdc"],{

/***/ "../../node_modules/js-cookie/src/js.cookie.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/js-cookie/src/js.cookie.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../node_modules/map-age-cleaner/dist/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/map-age-cleaner/dist/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_defer_1 = __importDefault(__webpack_require__(/*! p-defer */ "../../node_modules/p-defer/index.js"));
function mapAgeCleaner(map, property = 'maxAge') {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = () => __awaiter(this, void 0, void 0, function* () {
        if (processingKey !== undefined) {
            // If we are already processing an item, we can safely exit
            return;
        }
        const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {
            processingDeferred = p_defer_1.default();
            const delay = item[1][property] - Date.now();
            if (delay <= 0) {
                // Remove the item immediately if the delay is equal to or below 0
                map.delete(item[0]);
                processingDeferred.resolve();
                return;
            }
            // Keep track of the current processed key
            processingKey = item[0];
            processingTimer = setTimeout(() => {
                // Remove the item when the timeout fires
                map.delete(item[0]);
                if (processingDeferred) {
                    processingDeferred.resolve();
                }
            }, delay);
            // tslint:disable-next-line:strict-type-predicates
            if (typeof processingTimer.unref === 'function') {
                // Don't hold up the process from exiting
                processingTimer.unref();
            }
            return processingDeferred.promise;
        });
        try {
            for (const entry of map) {
                yield setupTimer(entry);
            }
        }
        catch (_a) {
            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
        }
        processingKey = undefined;
    });
    const reset = () => {
        processingKey = undefined;
        if (processingTimer !== undefined) {
            clearTimeout(processingTimer);
            processingTimer = undefined;
        }
        if (processingDeferred !== undefined) { // tslint:disable-line:early-exit
            processingDeferred.reject(undefined);
            processingDeferred = undefined;
        }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value) => {
        if (map.has(key)) {
            // If the key already exist, remove it so we can add it back at the end of the map.
            map.delete(key);
        }
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) {
            reset();
        }
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
    };
    cleanup(); // tslint:disable-line:no-floating-promises
    return map;
}
exports.default = mapAgeCleaner;
// Add support for CJS
module.exports = mapAgeCleaner;
module.exports.default = mapAgeCleaner;


/***/ }),

/***/ "../../node_modules/mem/index.js":
/*!**************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mem/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const mimicFn = __webpack_require__(/*! mimic-fn */ "../../node_modules/mem/node_modules/mimic-fn/index.js");
const mapAgeCleaner = __webpack_require__(/*! map-age-cleaner */ "../../node_modules/map-age-cleaner/dist/index.js");

const cacheStore = new WeakMap();

const mem = (fn, options = {}) => {
	// Automatically use WeakMap unless the user provided their own cache
	const weakCache = options.cache || new WeakMap();
	const {
		cacheKey = ([firstArgument]) => firstArgument,
		cache = new Map(),
		maxAge
	} = options;

	if (typeof maxAge === 'number') {
		mapAgeCleaner(cache);
	}

	const memoized = function (...arguments_) {
		const key = cacheKey(arguments_);

		// Prefer WeakMap if the key allows it
		const bestCache = key && (typeof key === 'object' || typeof key === 'function') ?
			weakCache :
			cache;

		if (bestCache.has(key)) {
			return bestCache.get(key).data;
		}

		const cacheItem = fn.apply(this, arguments_);

		bestCache.set(key, {
			data: cacheItem,
			maxAge: maxAge ? Date.now() + maxAge : Infinity
		});

		return cacheItem;
	};

	try {
		// The below call will throw in some host environments
		// See https://github.com/sindresorhus/mimic-fn/issues/10
		mimicFn(memoized, fn);
	} catch (_) {}

	cacheStore.set(memoized, cache);

	return memoized;
};

module.exports = mem;

module.exports.clear = fn => {
	if (!cacheStore.has(fn)) {
		throw new Error('Can\'t clear a function that was not memoized!');
	}

	const cache = cacheStore.get(fn);
	if (typeof cache.clear === 'function') {
		cache.clear();
	}
};


/***/ }),

/***/ "../../node_modules/mem/node_modules/mimic-fn/index.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mem/node_modules/mimic-fn/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

const mimicFn = (to, from, {ignoreNonConfigurable = false} = {}) => {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
};

module.exports = mimicFn;


/***/ }),

/***/ "../../node_modules/p-defer/index.js":
/*!******************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/p-defer/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = () => {
	const ret = {};

	ret.promise = new Promise((resolve, reject) => {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};


/***/ }),

/***/ "../../node_modules/p-memoize/index.js":
/*!********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/p-memoize/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const mem = __webpack_require__(/*! mem */ "../../node_modules/mem/index.js");
const mimicFn = __webpack_require__(/*! mimic-fn */ "../../node_modules/p-memoize/node_modules/mimic-fn/index.js");

const memoizedFunctions = new WeakMap();

const pMemoize = (fn, {cachePromiseRejection = false, ...options} = {}) => {
	const cache = options.cache || new Map();
	const cacheKey = options.cacheKey || (([firstArgument]) => firstArgument);

	const memoized = mem(fn, {
		...options,
		cache,
		cacheKey
	});

	const memoizedAdapter = function (...arguments_) {
		const cacheItem = memoized.apply(this, arguments_);

		if (!cachePromiseRejection && cacheItem && cacheItem.catch) {
			cacheItem.catch(() => {
				cache.delete(cacheKey(arguments_));
			});
		}

		return cacheItem;
	};

	mimicFn(memoizedAdapter, fn);
	memoizedFunctions.set(memoizedAdapter, memoized);

	return memoizedAdapter;
};

module.exports = pMemoize;

module.exports.clear = memoized => {
	if (!memoizedFunctions.has(memoized)) {
		throw new Error('Can\'t clear a function that was not memoized!');
	}

	mem.clear(memoizedFunctions.get(memoized));
};


/***/ }),

/***/ "../../node_modules/p-memoize/node_modules/mimic-fn/index.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/p-memoize/node_modules/mimic-fn/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

const mimicFn = (to, from, {ignoreNonConfigurable = false} = {}) => {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
};

module.exports = mimicFn;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21hcC1hZ2UtY2xlYW5lci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21lbS9ub2RlX21vZHVsZXMvbWltaWMtZm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3AtZGVmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3AtbWVtb2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcC1tZW1vaXplL25vZGVfbW9kdWxlcy9taW1pYy1mbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDakI7QUFDQTtBQUNBLEtBQUssSUFBMkI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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S0FBSzs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6IjA1MmI5ODY5NjQ4YjQ0NWU3ZDllL3ZlbmRvcnN+YWJvdXR+Y291cnNlXyRjb3Vyc2VOYW1lfmNvdXJzZV8kY291cnNlTmFtZSQ5M19za2lsbF8kOTFpZH5kZXYkNDV0eXBvZ3JhcGh5fmRldmVsb3BtZW50fmRldnR+ODg1NDZmZGMudmVuZG9yc35hYm91dH5jb3Vyc2VfJGNvdXJzZU5hbWV+Y291cnNlXyRjb3Vyc2VOYW1lJDkzX3NraWxsXyQ5MWlkfmRldiQ0NXR5cG9ncmFwaHl+ZGV2ZWxvcG1lbnR+ZGV2dH44ODU0NmZkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwX2RlZmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInAtZGVmZXJcIikpO1xuZnVuY3Rpb24gbWFwQWdlQ2xlYW5lcihtYXAsIHByb3BlcnR5ID0gJ21heEFnZScpIHtcbiAgICBsZXQgcHJvY2Vzc2luZ0tleTtcbiAgICBsZXQgcHJvY2Vzc2luZ1RpbWVyO1xuICAgIGxldCBwcm9jZXNzaW5nRGVmZXJyZWQ7XG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgcHJvY2Vzc2luZyBhbiBpdGVtLCB3ZSBjYW4gc2FmZWx5IGV4aXRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXR1cFRpbWVyID0gKGl0ZW0pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZCA9IHBfZGVmZXJfMS5kZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGl0ZW1bMV1bcHJvcGVydHldIC0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChkZWxheSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpdGVtIGltbWVkaWF0ZWx5IGlmIHRoZSBkZWxheSBpcyBlcXVhbCB0byBvciBiZWxvdyAwXG4gICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgcHJvY2Vzc2VkIGtleVxuICAgICAgICAgICAgcHJvY2Vzc2luZ0tleSA9IGl0ZW1bMF07XG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGl0ZW0gd2hlbiB0aGUgdGltZW91dCBmaXJlc1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NpbmdEZWZlcnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb2Nlc3NpbmdUaW1lci51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IGhvbGQgdXAgdGhlIHByb2Nlc3MgZnJvbSBleGl0aW5nXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2luZ0RlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBtYXApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBzZXR1cFRpbWVyKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgYW4gZXJyb3Igb2NjdXJzLCB0aGlzIG1lYW5zIHRoZSB0aW1lciB3YXMgY2xlYW5lZCB1cCBhbmQgd2Ugc2hvdWxkIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NpbmdLZXkgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHByb2Nlc3NpbmdLZXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzaW5nVGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHByb2Nlc3NpbmdUaW1lcik7XG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3NpbmdEZWZlcnJlZCAhPT0gdW5kZWZpbmVkKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6ZWFybHktZXhpdFxuICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlamVjdCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFNldCA9IG1hcC5zZXQuYmluZChtYXApO1xuICAgIG1hcC5zZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUga2V5IGFscmVhZHkgZXhpc3QsIHJlbW92ZSBpdCBzbyB3ZSBjYW4gYWRkIGl0IGJhY2sgYXQgdGhlIGVuZCBvZiB0aGUgbWFwLlxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGBtYXAuc2V0YFxuICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbFNldChrZXksIHZhbHVlKTtcbiAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgcHJvY2Vzc2luZyBhIGtleSBhbmQgdGhlIGtleSBhZGRlZCBpcyB0aGUgY3VycmVudCBwcm9jZXNzZWQga2V5LCBzdG9wIHByb2Nlc3NpbmcgaXRcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdLZXkgJiYgcHJvY2Vzc2luZ0tleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsd2F5cyBydW4gdGhlIGNsZWFudXAgbWV0aG9kIGluIGNhc2UgaXQgd2Fzbid0IHN0YXJ0ZWQgeWV0XG4gICAgICAgIGNsZWFudXAoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgY2xlYW51cCgpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgcmV0dXJuIG1hcDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1hcEFnZUNsZWFuZXI7XG4vLyBBZGQgc3VwcG9ydCBmb3IgQ0pTXG5tb2R1bGUuZXhwb3J0cyA9IG1hcEFnZUNsZWFuZXI7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbWFwQWdlQ2xlYW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG1pbWljRm4gPSByZXF1aXJlKCdtaW1pYy1mbicpO1xuY29uc3QgbWFwQWdlQ2xlYW5lciA9IHJlcXVpcmUoJ21hcC1hZ2UtY2xlYW5lcicpO1xuXG5jb25zdCBjYWNoZVN0b3JlID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgbWVtID0gKGZuLCBvcHRpb25zID0ge30pID0+IHtcblx0Ly8gQXV0b21hdGljYWxseSB1c2UgV2Vha01hcCB1bmxlc3MgdGhlIHVzZXIgcHJvdmlkZWQgdGhlaXIgb3duIGNhY2hlXG5cdGNvbnN0IHdlYWtDYWNoZSA9IG9wdGlvbnMuY2FjaGUgfHwgbmV3IFdlYWtNYXAoKTtcblx0Y29uc3Qge1xuXHRcdGNhY2hlS2V5ID0gKFtmaXJzdEFyZ3VtZW50XSkgPT4gZmlyc3RBcmd1bWVudCxcblx0XHRjYWNoZSA9IG5ldyBNYXAoKSxcblx0XHRtYXhBZ2Vcblx0fSA9IG9wdGlvbnM7XG5cblx0aWYgKHR5cGVvZiBtYXhBZ2UgPT09ICdudW1iZXInKSB7XG5cdFx0bWFwQWdlQ2xlYW5lcihjYWNoZSk7XG5cdH1cblxuXHRjb25zdCBtZW1vaXplZCA9IGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0Y29uc3Qga2V5ID0gY2FjaGVLZXkoYXJndW1lbnRzXyk7XG5cblx0XHQvLyBQcmVmZXIgV2Vha01hcCBpZiB0aGUga2V5IGFsbG93cyBpdFxuXHRcdGNvbnN0IGJlc3RDYWNoZSA9IGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykgP1xuXHRcdFx0d2Vha0NhY2hlIDpcblx0XHRcdGNhY2hlO1xuXG5cdFx0aWYgKGJlc3RDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIGJlc3RDYWNoZS5nZXQoa2V5KS5kYXRhO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhY2hlSXRlbSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50c18pO1xuXG5cdFx0YmVzdENhY2hlLnNldChrZXksIHtcblx0XHRcdGRhdGE6IGNhY2hlSXRlbSxcblx0XHRcdG1heEFnZTogbWF4QWdlID8gRGF0ZS5ub3coKSArIG1heEFnZSA6IEluZmluaXR5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2FjaGVJdGVtO1xuXHR9O1xuXG5cdHRyeSB7XG5cdFx0Ly8gVGhlIGJlbG93IGNhbGwgd2lsbCB0aHJvdyBpbiBzb21lIGhvc3QgZW52aXJvbm1lbnRzXG5cdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbWltaWMtZm4vaXNzdWVzLzEwXG5cdFx0bWltaWNGbihtZW1vaXplZCwgZm4pO1xuXHR9IGNhdGNoIChfKSB7fVxuXG5cdGNhY2hlU3RvcmUuc2V0KG1lbW9pemVkLCBjYWNoZSk7XG5cblx0cmV0dXJuIG1lbW9pemVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW07XG5cbm1vZHVsZS5leHBvcnRzLmNsZWFyID0gZm4gPT4ge1xuXHRpZiAoIWNhY2hlU3RvcmUuaGFzKGZuKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBjbGVhciBhIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtZW1vaXplZCEnKTtcblx0fVxuXG5cdGNvbnN0IGNhY2hlID0gY2FjaGVTdG9yZS5nZXQoZm4pO1xuXHRpZiAodHlwZW9mIGNhY2hlLmNsZWFyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y2FjaGUuY2xlYXIoKTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29weVByb3BlcnR5ID0gKHRvLCBmcm9tLCBwcm9wZXJ0eSwgaWdub3JlTm9uQ29uZmlndXJhYmxlKSA9PiB7XG5cdC8vIGBGdW5jdGlvbiNsZW5ndGhgIHNob3VsZCByZWZsZWN0IHRoZSBwYXJhbWV0ZXJzIG9mIGB0b2Agbm90IGBmcm9tYCBzaW5jZSB3ZSBrZWVwIGl0cyBib2R5LlxuXHQvLyBgRnVuY3Rpb24jcHJvdG90eXBlYCBpcyBub24td3JpdGFibGUgYW5kIG5vbi1jb25maWd1cmFibGUgc28gY2FuIG5ldmVyIGJlIG1vZGlmaWVkLlxuXHRpZiAocHJvcGVydHkgPT09ICdsZW5ndGgnIHx8IHByb3BlcnR5ID09PSAncHJvdG90eXBlJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRvRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG8sIHByb3BlcnR5KTtcblx0Y29uc3QgZnJvbURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIHByb3BlcnR5KTtcblxuXHRpZiAoIWNhbkNvcHlQcm9wZXJ0eSh0b0Rlc2NyaXB0b3IsIGZyb21EZXNjcmlwdG9yKSAmJiBpZ25vcmVOb25Db25maWd1cmFibGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIHByb3BlcnR5LCBmcm9tRGVzY3JpcHRvcik7XG59O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5KClgIHRocm93cyBpZiB0aGUgcHJvcGVydHkgZXhpc3RzLCBpcyBub3QgY29uZmlndXJhYmxlIGFuZCBlaXRoZXI6XG4vLyAgLSBvbmUgaXRzIGRlc2NyaXB0b3JzIGlzIGNoYW5nZWRcbi8vICAtIGl0IGlzIG5vbi13cml0YWJsZSBhbmQgaXRzIHZhbHVlIGlzIGNoYW5nZWRcbmNvbnN0IGNhbkNvcHlQcm9wZXJ0eSA9IGZ1bmN0aW9uICh0b0Rlc2NyaXB0b3IsIGZyb21EZXNjcmlwdG9yKSB7XG5cdHJldHVybiB0b0Rlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCB0b0Rlc2NyaXB0b3IuY29uZmlndXJhYmxlIHx8IChcblx0XHR0b0Rlc2NyaXB0b3Iud3JpdGFibGUgPT09IGZyb21EZXNjcmlwdG9yLndyaXRhYmxlICYmXG5cdFx0dG9EZXNjcmlwdG9yLmVudW1lcmFibGUgPT09IGZyb21EZXNjcmlwdG9yLmVudW1lcmFibGUgJiZcblx0XHR0b0Rlc2NyaXB0b3IuY29uZmlndXJhYmxlID09PSBmcm9tRGVzY3JpcHRvci5jb25maWd1cmFibGUgJiZcblx0XHQodG9EZXNjcmlwdG9yLndyaXRhYmxlIHx8IHRvRGVzY3JpcHRvci52YWx1ZSA9PT0gZnJvbURlc2NyaXB0b3IudmFsdWUpXG5cdCk7XG59O1xuXG5jb25zdCBjaGFuZ2VQcm90b3R5cGUgPSAodG8sIGZyb20pID0+IHtcblx0Y29uc3QgZnJvbVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihmcm9tKTtcblx0aWYgKGZyb21Qcm90b3R5cGUgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0bykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YodG8sIGZyb21Qcm90b3R5cGUpO1xufTtcblxuY29uc3Qgd3JhcHBlZFRvU3RyaW5nID0gKHdpdGhOYW1lLCBmcm9tQm9keSkgPT4gYC8qIFdyYXBwZWQgJHt3aXRoTmFtZX0qL1xcbiR7ZnJvbUJvZHl9YDtcblxuY29uc3QgdG9TdHJpbmdEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycpO1xuY29uc3QgdG9TdHJpbmdOYW1lID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsICduYW1lJyk7XG5cbi8vIFdlIGNhbGwgYGZyb20udG9TdHJpbmcoKWAgZWFybHkgKG5vdCBsYXppbHkpIHRvIGVuc3VyZSBgZnJvbWAgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuLy8gV2UgdXNlIGBiaW5kKClgIGluc3RlYWQgb2YgYSBjbG9zdXJlIGZvciB0aGUgc2FtZSByZWFzb24uXG4vLyBDYWxsaW5nIGBmcm9tLnRvU3RyaW5nKClgIGVhcmx5IGFsc28gYWxsb3dzIGNhY2hpbmcgaXQgaW4gY2FzZSBgdG8udG9TdHJpbmcoKWAgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMuXG5jb25zdCBjaGFuZ2VUb1N0cmluZyA9ICh0bywgZnJvbSwgbmFtZSkgPT4ge1xuXHRjb25zdCB3aXRoTmFtZSA9IG5hbWUgPT09ICcnID8gJycgOiBgd2l0aCAke25hbWUudHJpbSgpfSgpIGA7XG5cdGNvbnN0IG5ld1RvU3RyaW5nID0gd3JhcHBlZFRvU3RyaW5nLmJpbmQobnVsbCwgd2l0aE5hbWUsIGZyb20udG9TdHJpbmcoKSk7XG5cdC8vIEVuc3VyZSBgdG8udG9TdHJpbmcudG9TdHJpbmdgIGlzIG5vbi1lbnVtZXJhYmxlIGFuZCBoYXMgdGhlIHNhbWUgYHNhbWVgXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdUb1N0cmluZywgJ25hbWUnLCB0b1N0cmluZ05hbWUpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sICd0b1N0cmluZycsIHsuLi50b1N0cmluZ0Rlc2NyaXB0b3IsIHZhbHVlOiBuZXdUb1N0cmluZ30pO1xufTtcblxuY29uc3QgbWltaWNGbiA9ICh0bywgZnJvbSwge2lnbm9yZU5vbkNvbmZpZ3VyYWJsZSA9IGZhbHNlfSA9IHt9KSA9PiB7XG5cdGNvbnN0IHtuYW1lfSA9IHRvO1xuXG5cdGZvciAoY29uc3QgcHJvcGVydHkgb2YgUmVmbGVjdC5vd25LZXlzKGZyb20pKSB7XG5cdFx0Y29weVByb3BlcnR5KHRvLCBmcm9tLCBwcm9wZXJ0eSwgaWdub3JlTm9uQ29uZmlndXJhYmxlKTtcblx0fVxuXG5cdGNoYW5nZVByb3RvdHlwZSh0bywgZnJvbSk7XG5cdGNoYW5nZVRvU3RyaW5nKHRvLCBmcm9tLCBuYW1lKTtcblxuXHRyZXR1cm4gdG87XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1pbWljRm47XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcblx0Y29uc3QgcmV0ID0ge307XG5cblx0cmV0LnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0cmV0LnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdHJldC5yZWplY3QgPSByZWplY3Q7XG5cdH0pO1xuXG5cdHJldHVybiByZXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgbWVtID0gcmVxdWlyZSgnbWVtJyk7XG5jb25zdCBtaW1pY0ZuID0gcmVxdWlyZSgnbWltaWMtZm4nKTtcblxuY29uc3QgbWVtb2l6ZWRGdW5jdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBwTWVtb2l6ZSA9IChmbiwge2NhY2hlUHJvbWlzZVJlamVjdGlvbiA9IGZhbHNlLCAuLi5vcHRpb25zfSA9IHt9KSA9PiB7XG5cdGNvbnN0IGNhY2hlID0gb3B0aW9ucy5jYWNoZSB8fCBuZXcgTWFwKCk7XG5cdGNvbnN0IGNhY2hlS2V5ID0gb3B0aW9ucy5jYWNoZUtleSB8fCAoKFtmaXJzdEFyZ3VtZW50XSkgPT4gZmlyc3RBcmd1bWVudCk7XG5cblx0Y29uc3QgbWVtb2l6ZWQgPSBtZW0oZm4sIHtcblx0XHQuLi5vcHRpb25zLFxuXHRcdGNhY2hlLFxuXHRcdGNhY2hlS2V5XG5cdH0pO1xuXG5cdGNvbnN0IG1lbW9pemVkQWRhcHRlciA9IGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0Y29uc3QgY2FjaGVJdGVtID0gbWVtb2l6ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzXyk7XG5cblx0XHRpZiAoIWNhY2hlUHJvbWlzZVJlamVjdGlvbiAmJiBjYWNoZUl0ZW0gJiYgY2FjaGVJdGVtLmNhdGNoKSB7XG5cdFx0XHRjYWNoZUl0ZW0uY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHRjYWNoZS5kZWxldGUoY2FjaGVLZXkoYXJndW1lbnRzXykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhY2hlSXRlbTtcblx0fTtcblxuXHRtaW1pY0ZuKG1lbW9pemVkQWRhcHRlciwgZm4pO1xuXHRtZW1vaXplZEZ1bmN0aW9ucy5zZXQobWVtb2l6ZWRBZGFwdGVyLCBtZW1vaXplZCk7XG5cblx0cmV0dXJuIG1lbW9pemVkQWRhcHRlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcE1lbW9pemU7XG5cbm1vZHVsZS5leHBvcnRzLmNsZWFyID0gbWVtb2l6ZWQgPT4ge1xuXHRpZiAoIW1lbW9pemVkRnVuY3Rpb25zLmhhcyhtZW1vaXplZCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgY2xlYXIgYSBmdW5jdGlvbiB0aGF0IHdhcyBub3QgbWVtb2l6ZWQhJyk7XG5cdH1cblxuXHRtZW0uY2xlYXIobWVtb2l6ZWRGdW5jdGlvbnMuZ2V0KG1lbW9pemVkKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb3B5UHJvcGVydHkgPSAodG8sIGZyb20sIHByb3BlcnR5LCBpZ25vcmVOb25Db25maWd1cmFibGUpID0+IHtcblx0Ly8gYEZ1bmN0aW9uI2xlbmd0aGAgc2hvdWxkIHJlZmxlY3QgdGhlIHBhcmFtZXRlcnMgb2YgYHRvYCBub3QgYGZyb21gIHNpbmNlIHdlIGtlZXAgaXRzIGJvZHkuXG5cdC8vIGBGdW5jdGlvbiNwcm90b3R5cGVgIGlzIG5vbi13cml0YWJsZSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSBzbyBjYW4gbmV2ZXIgYmUgbW9kaWZpZWQuXG5cdGlmIChwcm9wZXJ0eSA9PT0gJ2xlbmd0aCcgfHwgcHJvcGVydHkgPT09ICdwcm90b3R5cGUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdG9EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0bywgcHJvcGVydHkpO1xuXHRjb25zdCBmcm9tRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwgcHJvcGVydHkpO1xuXG5cdGlmICghY2FuQ29weVByb3BlcnR5KHRvRGVzY3JpcHRvciwgZnJvbURlc2NyaXB0b3IpICYmIGlnbm9yZU5vbkNvbmZpZ3VyYWJsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgcHJvcGVydHksIGZyb21EZXNjcmlwdG9yKTtcbn07XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHkoKWAgdGhyb3dzIGlmIHRoZSBwcm9wZXJ0eSBleGlzdHMsIGlzIG5vdCBjb25maWd1cmFibGUgYW5kIGVpdGhlcjpcbi8vICAtIG9uZSBpdHMgZGVzY3JpcHRvcnMgaXMgY2hhbmdlZFxuLy8gIC0gaXQgaXMgbm9uLXdyaXRhYmxlIGFuZCBpdHMgdmFsdWUgaXMgY2hhbmdlZFxuY29uc3QgY2FuQ29weVByb3BlcnR5ID0gZnVuY3Rpb24gKHRvRGVzY3JpcHRvciwgZnJvbURlc2NyaXB0b3IpIHtcblx0cmV0dXJuIHRvRGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IHRvRGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgKFxuXHRcdHRvRGVzY3JpcHRvci53cml0YWJsZSA9PT0gZnJvbURlc2NyaXB0b3Iud3JpdGFibGUgJiZcblx0XHR0b0Rlc2NyaXB0b3IuZW51bWVyYWJsZSA9PT0gZnJvbURlc2NyaXB0b3IuZW51bWVyYWJsZSAmJlxuXHRcdHRvRGVzY3JpcHRvci5jb25maWd1cmFibGUgPT09IGZyb21EZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAmJlxuXHRcdCh0b0Rlc2NyaXB0b3Iud3JpdGFibGUgfHwgdG9EZXNjcmlwdG9yLnZhbHVlID09PSBmcm9tRGVzY3JpcHRvci52YWx1ZSlcblx0KTtcbn07XG5cbmNvbnN0IGNoYW5nZVByb3RvdHlwZSA9ICh0bywgZnJvbSkgPT4ge1xuXHRjb25zdCBmcm9tUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZyb20pO1xuXHRpZiAoZnJvbVByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRvKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZih0bywgZnJvbVByb3RvdHlwZSk7XG59O1xuXG5jb25zdCB3cmFwcGVkVG9TdHJpbmcgPSAod2l0aE5hbWUsIGZyb21Cb2R5KSA9PiBgLyogV3JhcHBlZCAke3dpdGhOYW1lfSovXFxuJHtmcm9tQm9keX1gO1xuXG5jb25zdCB0b1N0cmluZ0Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJyk7XG5jb25zdCB0b1N0cmluZ05hbWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZywgJ25hbWUnKTtcblxuLy8gV2UgY2FsbCBgZnJvbS50b1N0cmluZygpYCBlYXJseSAobm90IGxhemlseSkgdG8gZW5zdXJlIGBmcm9tYCBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZSB1c2UgYGJpbmQoKWAgaW5zdGVhZCBvZiBhIGNsb3N1cmUgZm9yIHRoZSBzYW1lIHJlYXNvbi5cbi8vIENhbGxpbmcgYGZyb20udG9TdHJpbmcoKWAgZWFybHkgYWxzbyBhbGxvd3MgY2FjaGluZyBpdCBpbiBjYXNlIGB0by50b1N0cmluZygpYCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcy5cbmNvbnN0IGNoYW5nZVRvU3RyaW5nID0gKHRvLCBmcm9tLCBuYW1lKSA9PiB7XG5cdGNvbnN0IHdpdGhOYW1lID0gbmFtZSA9PT0gJycgPyAnJyA6IGB3aXRoICR7bmFtZS50cmltKCl9KCkgYDtcblx0Y29uc3QgbmV3VG9TdHJpbmcgPSB3cmFwcGVkVG9TdHJpbmcuYmluZChudWxsLCB3aXRoTmFtZSwgZnJvbS50b1N0cmluZygpKTtcblx0Ly8gRW5zdXJlIGB0by50b1N0cmluZy50b1N0cmluZ2AgaXMgbm9uLWVudW1lcmFibGUgYW5kIGhhcyB0aGUgc2FtZSBgc2FtZWBcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld1RvU3RyaW5nLCAnbmFtZScsIHRvU3RyaW5nTmFtZSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgJ3RvU3RyaW5nJywgey4uLnRvU3RyaW5nRGVzY3JpcHRvciwgdmFsdWU6IG5ld1RvU3RyaW5nfSk7XG59O1xuXG5jb25zdCBtaW1pY0ZuID0gKHRvLCBmcm9tLCB7aWdub3JlTm9uQ29uZmlndXJhYmxlID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3Qge25hbWV9ID0gdG87XG5cblx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBSZWZsZWN0Lm93bktleXMoZnJvbSkpIHtcblx0XHRjb3B5UHJvcGVydHkodG8sIGZyb20sIHByb3BlcnR5LCBpZ25vcmVOb25Db25maWd1cmFibGUpO1xuXHR9XG5cblx0Y2hhbmdlUHJvdG90eXBlKHRvLCBmcm9tKTtcblx0Y2hhbmdlVG9TdHJpbmcodG8sIGZyb20sIG5hbWUpO1xuXG5cdHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWltaWNGbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=