(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~about~course_$courseName~course_$courseName$93_skill_$91id~development~index"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWFwLWFnZS1jbGVhbmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21lbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWVtL25vZGVfbW9kdWxlcy9taW1pYy1mbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcC1kZWZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcC1tZW1vaXplL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wLW1lbW9pemUvbm9kZV9tb2R1bGVzL21pbWljLWZuL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsb0RBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cnNlTmFtZX5jb3Vyc2VfJGNvdXJzZU5hbWUkOTNfc2tpbGxfJDkxaWR+ZGV2ZWxvcG1lbnR+aW5kZXgudmVuZG9yc35hYm91dH5jb3Vyc2VfJGNvdXJzZU5hbWV+Y291cnNlXyRjb3Vyc2VOYW1lJDkzX3NraWxsXyQ5MWlkfmRldmVsb3BtZW50fmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBfZGVmZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicC1kZWZlclwiKSk7XG5mdW5jdGlvbiBtYXBBZ2VDbGVhbmVyKG1hcCwgcHJvcGVydHkgPSAnbWF4QWdlJykge1xuICAgIGxldCBwcm9jZXNzaW5nS2V5O1xuICAgIGxldCBwcm9jZXNzaW5nVGltZXI7XG4gICAgbGV0IHByb2Nlc3NpbmdEZWZlcnJlZDtcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAocHJvY2Vzc2luZ0tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBwcm9jZXNzaW5nIGFuIGl0ZW0sIHdlIGNhbiBzYWZlbHkgZXhpdFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNldHVwVGltZXIgPSAoaXRlbSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkID0gcF9kZWZlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gaXRlbVsxXVtwcm9wZXJ0eV0gLSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKGRlbGF5IDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGl0ZW0gaW1tZWRpYXRlbHkgaWYgdGhlIGRlbGF5IGlzIGVxdWFsIHRvIG9yIGJlbG93IDBcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBwcm9jZXNzZWQga2V5XG4gICAgICAgICAgICBwcm9jZXNzaW5nS2V5ID0gaXRlbVswXTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaXRlbSB3aGVuIHRoZSB0aW1lb3V0IGZpcmVzXG4gICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc2luZ0RlZmVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvY2Vzc2luZ1RpbWVyLnVucmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgaG9sZCB1cCB0aGUgcHJvY2VzcyBmcm9tIGV4aXRpbmdcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nVGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzaW5nRGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1hcCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHNldHVwVGltZXIoZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBhbiBlcnJvciBvY2N1cnMsIHRoaXMgbWVhbnMgdGhlIHRpbWVyIHdhcyBjbGVhbmVkIHVwIGFuZCB3ZSBzaG91bGQgc3RvcCBwcm9jZXNzaW5nXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc2luZ0tleSA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgcHJvY2Vzc2luZ0tleSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdUaW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzc2luZ0RlZmVycmVkICE9PSB1bmRlZmluZWQpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTplYXJseS1leGl0XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQucmVqZWN0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsU2V0ID0gbWFwLnNldC5iaW5kKG1hcCk7XG4gICAgbWFwLnNldCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdCwgcmVtb3ZlIGl0IHNvIHdlIGNhbiBhZGQgaXQgYmFjayBhdCB0aGUgZW5kIG9mIHRoZSBtYXAuXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYG1hcC5zZXRgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsU2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBwcm9jZXNzaW5nIGEga2V5IGFuZCB0aGUga2V5IGFkZGVkIGlzIHRoZSBjdXJyZW50IHByb2Nlc3NlZCBrZXksIHN0b3AgcHJvY2Vzc2luZyBpdFxuICAgICAgICBpZiAocHJvY2Vzc2luZ0tleSAmJiBwcm9jZXNzaW5nS2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHJ1biB0aGUgY2xlYW51cCBtZXRob2QgaW4gY2FzZSBpdCB3YXNuJ3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgY2xlYW51cCgpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBjbGVhbnVwKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICByZXR1cm4gbWFwO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWFwQWdlQ2xlYW5lcjtcbi8vIEFkZCBzdXBwb3J0IGZvciBDSlNcbm1vZHVsZS5leHBvcnRzID0gbWFwQWdlQ2xlYW5lcjtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtYXBBZ2VDbGVhbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgbWltaWNGbiA9IHJlcXVpcmUoJ21pbWljLWZuJyk7XG5jb25zdCBtYXBBZ2VDbGVhbmVyID0gcmVxdWlyZSgnbWFwLWFnZS1jbGVhbmVyJyk7XG5cbmNvbnN0IGNhY2hlU3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBtZW0gPSAoZm4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHQvLyBBdXRvbWF0aWNhbGx5IHVzZSBXZWFrTWFwIHVubGVzcyB0aGUgdXNlciBwcm92aWRlZCB0aGVpciBvd24gY2FjaGVcblx0Y29uc3Qgd2Vha0NhY2hlID0gb3B0aW9ucy5jYWNoZSB8fCBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCB7XG5cdFx0Y2FjaGVLZXkgPSAoW2ZpcnN0QXJndW1lbnRdKSA9PiBmaXJzdEFyZ3VtZW50LFxuXHRcdGNhY2hlID0gbmV3IE1hcCgpLFxuXHRcdG1heEFnZVxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAodHlwZW9mIG1heEFnZSA9PT0gJ251bWJlcicpIHtcblx0XHRtYXBBZ2VDbGVhbmVyKGNhY2hlKTtcblx0fVxuXG5cdGNvbnN0IG1lbW9pemVkID0gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRjb25zdCBrZXkgPSBjYWNoZUtleShhcmd1bWVudHNfKTtcblxuXHRcdC8vIFByZWZlciBXZWFrTWFwIGlmIHRoZSBrZXkgYWxsb3dzIGl0XG5cdFx0Y29uc3QgYmVzdENhY2hlID0ga2V5ICYmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSA/XG5cdFx0XHR3ZWFrQ2FjaGUgOlxuXHRcdFx0Y2FjaGU7XG5cblx0XHRpZiAoYmVzdENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gYmVzdENhY2hlLmdldChrZXkpLmRhdGE7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FjaGVJdGVtID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzXyk7XG5cblx0XHRiZXN0Q2FjaGUuc2V0KGtleSwge1xuXHRcdFx0ZGF0YTogY2FjaGVJdGVtLFxuXHRcdFx0bWF4QWdlOiBtYXhBZ2UgPyBEYXRlLm5vdygpICsgbWF4QWdlIDogSW5maW5pdHlcblx0XHR9KTtcblxuXHRcdHJldHVybiBjYWNoZUl0ZW07XG5cdH07XG5cblx0dHJ5IHtcblx0XHQvLyBUaGUgYmVsb3cgY2FsbCB3aWxsIHRocm93IGluIHNvbWUgaG9zdCBlbnZpcm9ubWVudHNcblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9taW1pYy1mbi9pc3N1ZXMvMTBcblx0XHRtaW1pY0ZuKG1lbW9pemVkLCBmbik7XG5cdH0gY2F0Y2ggKF8pIHt9XG5cblx0Y2FjaGVTdG9yZS5zZXQobWVtb2l6ZWQsIGNhY2hlKTtcblxuXHRyZXR1cm4gbWVtb2l6ZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbTtcblxubW9kdWxlLmV4cG9ydHMuY2xlYXIgPSBmbiA9PiB7XG5cdGlmICghY2FjaGVTdG9yZS5oYXMoZm4pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGNsZWFyIGEgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1lbW9pemVkIScpO1xuXHR9XG5cblx0Y29uc3QgY2FjaGUgPSBjYWNoZVN0b3JlLmdldChmbik7XG5cdGlmICh0eXBlb2YgY2FjaGUuY2xlYXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjYWNoZS5jbGVhcigpO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb3B5UHJvcGVydHkgPSAodG8sIGZyb20sIHByb3BlcnR5LCBpZ25vcmVOb25Db25maWd1cmFibGUpID0+IHtcblx0Ly8gYEZ1bmN0aW9uI2xlbmd0aGAgc2hvdWxkIHJlZmxlY3QgdGhlIHBhcmFtZXRlcnMgb2YgYHRvYCBub3QgYGZyb21gIHNpbmNlIHdlIGtlZXAgaXRzIGJvZHkuXG5cdC8vIGBGdW5jdGlvbiNwcm90b3R5cGVgIGlzIG5vbi13cml0YWJsZSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSBzbyBjYW4gbmV2ZXIgYmUgbW9kaWZpZWQuXG5cdGlmIChwcm9wZXJ0eSA9PT0gJ2xlbmd0aCcgfHwgcHJvcGVydHkgPT09ICdwcm90b3R5cGUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdG9EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0bywgcHJvcGVydHkpO1xuXHRjb25zdCBmcm9tRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwgcHJvcGVydHkpO1xuXG5cdGlmICghY2FuQ29weVByb3BlcnR5KHRvRGVzY3JpcHRvciwgZnJvbURlc2NyaXB0b3IpICYmIGlnbm9yZU5vbkNvbmZpZ3VyYWJsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgcHJvcGVydHksIGZyb21EZXNjcmlwdG9yKTtcbn07XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHkoKWAgdGhyb3dzIGlmIHRoZSBwcm9wZXJ0eSBleGlzdHMsIGlzIG5vdCBjb25maWd1cmFibGUgYW5kIGVpdGhlcjpcbi8vICAtIG9uZSBpdHMgZGVzY3JpcHRvcnMgaXMgY2hhbmdlZFxuLy8gIC0gaXQgaXMgbm9uLXdyaXRhYmxlIGFuZCBpdHMgdmFsdWUgaXMgY2hhbmdlZFxuY29uc3QgY2FuQ29weVByb3BlcnR5ID0gZnVuY3Rpb24gKHRvRGVzY3JpcHRvciwgZnJvbURlc2NyaXB0b3IpIHtcblx0cmV0dXJuIHRvRGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IHRvRGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgKFxuXHRcdHRvRGVzY3JpcHRvci53cml0YWJsZSA9PT0gZnJvbURlc2NyaXB0b3Iud3JpdGFibGUgJiZcblx0XHR0b0Rlc2NyaXB0b3IuZW51bWVyYWJsZSA9PT0gZnJvbURlc2NyaXB0b3IuZW51bWVyYWJsZSAmJlxuXHRcdHRvRGVzY3JpcHRvci5jb25maWd1cmFibGUgPT09IGZyb21EZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAmJlxuXHRcdCh0b0Rlc2NyaXB0b3Iud3JpdGFibGUgfHwgdG9EZXNjcmlwdG9yLnZhbHVlID09PSBmcm9tRGVzY3JpcHRvci52YWx1ZSlcblx0KTtcbn07XG5cbmNvbnN0IGNoYW5nZVByb3RvdHlwZSA9ICh0bywgZnJvbSkgPT4ge1xuXHRjb25zdCBmcm9tUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZyb20pO1xuXHRpZiAoZnJvbVByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRvKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZih0bywgZnJvbVByb3RvdHlwZSk7XG59O1xuXG5jb25zdCB3cmFwcGVkVG9TdHJpbmcgPSAod2l0aE5hbWUsIGZyb21Cb2R5KSA9PiBgLyogV3JhcHBlZCAke3dpdGhOYW1lfSovXFxuJHtmcm9tQm9keX1gO1xuXG5jb25zdCB0b1N0cmluZ0Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJyk7XG5jb25zdCB0b1N0cmluZ05hbWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZywgJ25hbWUnKTtcblxuLy8gV2UgY2FsbCBgZnJvbS50b1N0cmluZygpYCBlYXJseSAobm90IGxhemlseSkgdG8gZW5zdXJlIGBmcm9tYCBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZSB1c2UgYGJpbmQoKWAgaW5zdGVhZCBvZiBhIGNsb3N1cmUgZm9yIHRoZSBzYW1lIHJlYXNvbi5cbi8vIENhbGxpbmcgYGZyb20udG9TdHJpbmcoKWAgZWFybHkgYWxzbyBhbGxvd3MgY2FjaGluZyBpdCBpbiBjYXNlIGB0by50b1N0cmluZygpYCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcy5cbmNvbnN0IGNoYW5nZVRvU3RyaW5nID0gKHRvLCBmcm9tLCBuYW1lKSA9PiB7XG5cdGNvbnN0IHdpdGhOYW1lID0gbmFtZSA9PT0gJycgPyAnJyA6IGB3aXRoICR7bmFtZS50cmltKCl9KCkgYDtcblx0Y29uc3QgbmV3VG9TdHJpbmcgPSB3cmFwcGVkVG9TdHJpbmcuYmluZChudWxsLCB3aXRoTmFtZSwgZnJvbS50b1N0cmluZygpKTtcblx0Ly8gRW5zdXJlIGB0by50b1N0cmluZy50b1N0cmluZ2AgaXMgbm9uLWVudW1lcmFibGUgYW5kIGhhcyB0aGUgc2FtZSBgc2FtZWBcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld1RvU3RyaW5nLCAnbmFtZScsIHRvU3RyaW5nTmFtZSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgJ3RvU3RyaW5nJywgey4uLnRvU3RyaW5nRGVzY3JpcHRvciwgdmFsdWU6IG5ld1RvU3RyaW5nfSk7XG59O1xuXG5jb25zdCBtaW1pY0ZuID0gKHRvLCBmcm9tLCB7aWdub3JlTm9uQ29uZmlndXJhYmxlID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3Qge25hbWV9ID0gdG87XG5cblx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBSZWZsZWN0Lm93bktleXMoZnJvbSkpIHtcblx0XHRjb3B5UHJvcGVydHkodG8sIGZyb20sIHByb3BlcnR5LCBpZ25vcmVOb25Db25maWd1cmFibGUpO1xuXHR9XG5cblx0Y2hhbmdlUHJvdG90eXBlKHRvLCBmcm9tKTtcblx0Y2hhbmdlVG9TdHJpbmcodG8sIGZyb20sIG5hbWUpO1xuXG5cdHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWltaWNGbjtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHRjb25zdCByZXQgPSB7fTtcblxuXHRyZXQucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRyZXQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0cmV0LnJlamVjdCA9IHJlamVjdDtcblx0fSk7XG5cblx0cmV0dXJuIHJldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBtZW0gPSByZXF1aXJlKCdtZW0nKTtcbmNvbnN0IG1pbWljRm4gPSByZXF1aXJlKCdtaW1pYy1mbicpO1xuXG5jb25zdCBtZW1vaXplZEZ1bmN0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNvbnN0IHBNZW1vaXplID0gKGZuLCB7Y2FjaGVQcm9taXNlUmVqZWN0aW9uID0gZmFsc2UsIC4uLm9wdGlvbnN9ID0ge30pID0+IHtcblx0Y29uc3QgY2FjaGUgPSBvcHRpb25zLmNhY2hlIHx8IG5ldyBNYXAoKTtcblx0Y29uc3QgY2FjaGVLZXkgPSBvcHRpb25zLmNhY2hlS2V5IHx8ICgoW2ZpcnN0QXJndW1lbnRdKSA9PiBmaXJzdEFyZ3VtZW50KTtcblxuXHRjb25zdCBtZW1vaXplZCA9IG1lbShmbiwge1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0Y2FjaGUsXG5cdFx0Y2FjaGVLZXlcblx0fSk7XG5cblx0Y29uc3QgbWVtb2l6ZWRBZGFwdGVyID0gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRjb25zdCBjYWNoZUl0ZW0gPSBtZW1vaXplZC5hcHBseSh0aGlzLCBhcmd1bWVudHNfKTtcblxuXHRcdGlmICghY2FjaGVQcm9taXNlUmVqZWN0aW9uICYmIGNhY2hlSXRlbSAmJiBjYWNoZUl0ZW0uY2F0Y2gpIHtcblx0XHRcdGNhY2hlSXRlbS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdGNhY2hlLmRlbGV0ZShjYWNoZUtleShhcmd1bWVudHNfKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGVJdGVtO1xuXHR9O1xuXG5cdG1pbWljRm4obWVtb2l6ZWRBZGFwdGVyLCBmbik7XG5cdG1lbW9pemVkRnVuY3Rpb25zLnNldChtZW1vaXplZEFkYXB0ZXIsIG1lbW9pemVkKTtcblxuXHRyZXR1cm4gbWVtb2l6ZWRBZGFwdGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwTWVtb2l6ZTtcblxubW9kdWxlLmV4cG9ydHMuY2xlYXIgPSBtZW1vaXplZCA9PiB7XG5cdGlmICghbWVtb2l6ZWRGdW5jdGlvbnMuaGFzKG1lbW9pemVkKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBjbGVhciBhIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtZW1vaXplZCEnKTtcblx0fVxuXG5cdG1lbS5jbGVhcihtZW1vaXplZEZ1bmN0aW9ucy5nZXQobWVtb2l6ZWQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvcHlQcm9wZXJ0eSA9ICh0bywgZnJvbSwgcHJvcGVydHksIGlnbm9yZU5vbkNvbmZpZ3VyYWJsZSkgPT4ge1xuXHQvLyBgRnVuY3Rpb24jbGVuZ3RoYCBzaG91bGQgcmVmbGVjdCB0aGUgcGFyYW1ldGVycyBvZiBgdG9gIG5vdCBgZnJvbWAgc2luY2Ugd2Uga2VlcCBpdHMgYm9keS5cblx0Ly8gYEZ1bmN0aW9uI3Byb3RvdHlwZWAgaXMgbm9uLXdyaXRhYmxlIGFuZCBub24tY29uZmlndXJhYmxlIHNvIGNhbiBuZXZlciBiZSBtb2RpZmllZC5cblx0aWYgKHByb3BlcnR5ID09PSAnbGVuZ3RoJyB8fCBwcm9wZXJ0eSA9PT0gJ3Byb3RvdHlwZScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0b0Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvLCBwcm9wZXJ0eSk7XG5cdGNvbnN0IGZyb21EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihmcm9tLCBwcm9wZXJ0eSk7XG5cblx0aWYgKCFjYW5Db3B5UHJvcGVydHkodG9EZXNjcmlwdG9yLCBmcm9tRGVzY3JpcHRvcikgJiYgaWdub3JlTm9uQ29uZmlndXJhYmxlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wZXJ0eSwgZnJvbURlc2NyaXB0b3IpO1xufTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpYCB0aHJvd3MgaWYgdGhlIHByb3BlcnR5IGV4aXN0cywgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgZWl0aGVyOlxuLy8gIC0gb25lIGl0cyBkZXNjcmlwdG9ycyBpcyBjaGFuZ2VkXG4vLyAgLSBpdCBpcyBub24td3JpdGFibGUgYW5kIGl0cyB2YWx1ZSBpcyBjaGFuZ2VkXG5jb25zdCBjYW5Db3B5UHJvcGVydHkgPSBmdW5jdGlvbiAodG9EZXNjcmlwdG9yLCBmcm9tRGVzY3JpcHRvcikge1xuXHRyZXR1cm4gdG9EZXNjcmlwdG9yID09PSB1bmRlZmluZWQgfHwgdG9EZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAoXG5cdFx0dG9EZXNjcmlwdG9yLndyaXRhYmxlID09PSBmcm9tRGVzY3JpcHRvci53cml0YWJsZSAmJlxuXHRcdHRvRGVzY3JpcHRvci5lbnVtZXJhYmxlID09PSBmcm9tRGVzY3JpcHRvci5lbnVtZXJhYmxlICYmXG5cdFx0dG9EZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9PT0gZnJvbURlc2NyaXB0b3IuY29uZmlndXJhYmxlICYmXG5cdFx0KHRvRGVzY3JpcHRvci53cml0YWJsZSB8fCB0b0Rlc2NyaXB0b3IudmFsdWUgPT09IGZyb21EZXNjcmlwdG9yLnZhbHVlKVxuXHQpO1xufTtcblxuY29uc3QgY2hhbmdlUHJvdG90eXBlID0gKHRvLCBmcm9tKSA9PiB7XG5cdGNvbnN0IGZyb21Qcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJvbSk7XG5cdGlmIChmcm9tUHJvdG90eXBlID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodG8pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRvLCBmcm9tUHJvdG90eXBlKTtcbn07XG5cbmNvbnN0IHdyYXBwZWRUb1N0cmluZyA9ICh3aXRoTmFtZSwgZnJvbUJvZHkpID0+IGAvKiBXcmFwcGVkICR7d2l0aE5hbWV9Ki9cXG4ke2Zyb21Cb2R5fWA7XG5cbmNvbnN0IHRvU3RyaW5nRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnKTtcbmNvbnN0IHRvU3RyaW5nTmFtZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLCAnbmFtZScpO1xuXG4vLyBXZSBjYWxsIGBmcm9tLnRvU3RyaW5nKClgIGVhcmx5IChub3QgbGF6aWx5KSB0byBlbnN1cmUgYGZyb21gIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlIHVzZSBgYmluZCgpYCBpbnN0ZWFkIG9mIGEgY2xvc3VyZSBmb3IgdGhlIHNhbWUgcmVhc29uLlxuLy8gQ2FsbGluZyBgZnJvbS50b1N0cmluZygpYCBlYXJseSBhbHNvIGFsbG93cyBjYWNoaW5nIGl0IGluIGNhc2UgYHRvLnRvU3RyaW5nKClgIGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzLlxuY29uc3QgY2hhbmdlVG9TdHJpbmcgPSAodG8sIGZyb20sIG5hbWUpID0+IHtcblx0Y29uc3Qgd2l0aE5hbWUgPSBuYW1lID09PSAnJyA/ICcnIDogYHdpdGggJHtuYW1lLnRyaW0oKX0oKSBgO1xuXHRjb25zdCBuZXdUb1N0cmluZyA9IHdyYXBwZWRUb1N0cmluZy5iaW5kKG51bGwsIHdpdGhOYW1lLCBmcm9tLnRvU3RyaW5nKCkpO1xuXHQvLyBFbnN1cmUgYHRvLnRvU3RyaW5nLnRvU3RyaW5nYCBpcyBub24tZW51bWVyYWJsZSBhbmQgaGFzIHRoZSBzYW1lIGBzYW1lYFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3VG9TdHJpbmcsICduYW1lJywgdG9TdHJpbmdOYW1lKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCAndG9TdHJpbmcnLCB7Li4udG9TdHJpbmdEZXNjcmlwdG9yLCB2YWx1ZTogbmV3VG9TdHJpbmd9KTtcbn07XG5cbmNvbnN0IG1pbWljRm4gPSAodG8sIGZyb20sIHtpZ25vcmVOb25Db25maWd1cmFibGUgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCB7bmFtZX0gPSB0bztcblxuXHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIFJlZmxlY3Qub3duS2V5cyhmcm9tKSkge1xuXHRcdGNvcHlQcm9wZXJ0eSh0bywgZnJvbSwgcHJvcGVydHksIGlnbm9yZU5vbkNvbmZpZ3VyYWJsZSk7XG5cdH1cblxuXHRjaGFuZ2VQcm90b3R5cGUodG8sIGZyb20pO1xuXHRjaGFuZ2VUb1N0cmluZyh0bywgZnJvbSwgbmFtZSk7XG5cblx0cmV0dXJuIHRvO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtaW1pY0ZuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==