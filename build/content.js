/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 141);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apply; });
/* unused harmony export curry2 */
/* unused harmony export curry3 */
/* unused harmony export curry4 */
/** @license MIT License (c) copyright 2010-2016 original author or authors */

// Non-mutating array operations

// cons :: a -> [a] -> [a]
// a with x prepended
function cons(x, a) {
  var l = a.length;
  var b = new Array(l + 1);
  b[0] = x;
  for (var i = 0; i < l; ++i) {
    b[i + 1] = a[i];
  }
  return b;
}

// append :: a -> [a] -> [a]
// a with x appended
function append(x, a) {
  var l = a.length;
  var b = new Array(l + 1);
  for (var i = 0; i < l; ++i) {
    b[i] = a[i];
  }

  b[l] = x;
  return b;
}

// drop :: Int -> [a] -> [a]
// drop first n elements
function drop(n, a) {
  // eslint-disable-line complexity
  if (n < 0) {
    throw new TypeError('n must be >= 0');
  }

  var l = a.length;
  if (n === 0 || l === 0) {
    return a;
  }

  if (n >= l) {
    return [];
  }

  return unsafeDrop(n, a, l - n);
}

// unsafeDrop :: Int -> [a] -> Int -> [a]
// Internal helper for drop
function unsafeDrop(n, a, l) {
  var b = new Array(l);
  for (var i = 0; i < l; ++i) {
    b[i] = a[n + i];
  }
  return b;
}

// tail :: [a] -> [a]
// drop head element
function tail(a) {
  return drop(1, a);
}

// copy :: [a] -> [a]
// duplicate a (shallow duplication)
function copy(a) {
  var l = a.length;
  var b = new Array(l);
  for (var i = 0; i < l; ++i) {
    b[i] = a[i];
  }
  return b;
}

// map :: (a -> b) -> [a] -> [b]
// transform each element with f
function map(f, a) {
  var l = a.length;
  var b = new Array(l);
  for (var i = 0; i < l; ++i) {
    b[i] = f(a[i]);
  }
  return b;
}

// reduce :: (a -> b -> a) -> a -> [b] -> a
// accumulate via left-fold
function reduce(f, z, a) {
  var r = z;
  for (var i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i);
  }
  return r;
}

// replace :: a -> Int -> [a]
// replace element at index
function replace(x, i, a) {
  // eslint-disable-line complexity
  if (i < 0) {
    throw new TypeError('i must be >= 0');
  }

  var l = a.length;
  var b = new Array(l);
  for (var j = 0; j < l; ++j) {
    b[j] = i === j ? x : a[j];
  }
  return b;
}

// remove :: Int -> [a] -> [a]
// remove element at index
function remove(i, a) {
  // eslint-disable-line complexity
  if (i < 0) {
    throw new TypeError('i must be >= 0');
  }

  var l = a.length;
  if (l === 0 || i >= l) {
    // exit early if index beyond end of array
    return a;
  }

  if (l === 1) {
    // exit early if index in bounds and length === 1
    return [];
  }

  return unsafeRemove(i, a, l - 1);
}

// unsafeRemove :: Int -> [a] -> Int -> [a]
// Internal helper to remove element at index
function unsafeRemove(i, a, l) {
  var b = new Array(l);
  var j = void 0;
  for (j = 0; j < i; ++j) {
    b[j] = a[j];
  }
  for (j = i; j < l; ++j) {
    b[j] = a[j + 1];
  }

  return b;
}

// removeAll :: (a -> boolean) -> [a] -> [a]
// remove all elements matching a predicate
// @deprecated
function removeAll(f, a) {
  var l = a.length;
  var b = new Array(l);
  var j = 0;
  for (var x, i = 0; i < l; ++i) {
    x = a[i];
    if (!f(x)) {
      b[j] = x;
      ++j;
    }
  }

  b.length = j;
  return b;
}

// findIndex :: a -> [a] -> Int
// find index of x in a, from the left
function findIndex(x, a) {
  for (var i = 0, l = a.length; i < l; ++i) {
    if (x === a[i]) {
      return i;
    }
  }
  return -1;
}

// isArrayLike :: * -> boolean
// Return true iff x is array-like
function isArrayLike(x) {
  return x != null && typeof x.length === 'number' && typeof x !== 'function';
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */

// id :: a -> a
var id = function id(x) {
  return x;
};

// compose :: (b -> c) -> (a -> b) -> (a -> c)
var compose = function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
};

// apply :: (a -> b) -> a -> b
var apply = function apply(f, x) {
  return f(x);
};

// curry2 :: ((a, b) -> c) -> (a -> b -> c)
function curry2(f) {
  function curried(a, b) {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return function (b) {
          return f(a, b);
        };
      default:
        return f(a, b);
    }
  }
  return curried;
}

// curry3 :: ((a, b, c) -> d) -> (a -> b -> c -> d)
function curry3(f) {
  function curried(a, b, c) {
    // eslint-disable-line complexity
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry2(function (b, c) {
          return f(a, b, c);
        });
      case 2:
        return function (c) {
          return f(a, b, c);
        };
      default:
        return f(a, b, c);
    }
  }
  return curried;
}

// curry4 :: ((a, b, c, d) -> e) -> (a -> b -> c -> d -> e)
function curry4(f) {
  function curried(a, b, c, d) {
    // eslint-disable-line complexity
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry3(function (b, c, d) {
          return f(a, b, c, d);
        });
      case 2:
        return curry2(function (c, d) {
          return f(a, b, c, d);
        });
      case 3:
        return function (d) {
          return f(a, b, c, d);
        };
      default:
        return f(a, b, c, d);
    }
  }
  return curried;
}

/** @license MIT License (c) copyright 2016 original author or authors */


//# sourceMappingURL=index.es.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry1; });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry2; });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? f2 : Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        });

      default:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? f2 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_a) {
          return fn(_a, b);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isPlaceholder; });
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ isNotNil; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ stringify; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ safeWhenIsNotNil; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ parse; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getElementById; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ clickStreamFromId; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ mapIndexed; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ selectIndex; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ click; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ locationIncludes; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ tapF; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Monad; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ querySelector; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ setProperty; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ setValue; });

// UNUSED EXPORTS: streamFromEvent

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_reduce.js + 2 modules
var _reduce = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ramda/es/ap.js
var ap = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ramda/es/curryN.js + 1 modules
var curryN = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ramda/es/map.js + 1 modules
var map = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/ramda/es/liftN.js





/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */

var liftN_liftN =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function liftN(arity, fn) {
  var lifted = Object(curryN["a" /* default */])(arity, fn);
  return Object(curryN["a" /* default */])(arity, function () {
    return Object(_reduce["a" /* default */])(ap["a" /* default */], Object(map["a" /* default */])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

/* harmony default export */ var es_liftN = (liftN_liftN);
// CONCATENATED MODULE: ./node_modules/ramda/es/lift.js


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */

var lift_lift =
/*#__PURE__*/
Object(_curry1["a" /* default */])(function lift(fn) {
  return es_liftN(fn.length, fn);
});

/* harmony default export */ var es_lift = (lift_lift);
// CONCATENATED MODULE: ./node_modules/ramda/es/not.js

/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */

var not =
/*#__PURE__*/
Object(_curry1["a" /* default */])(function not(a) {
  return !a;
});

/* harmony default export */ var es_not = (not);
// CONCATENATED MODULE: ./node_modules/ramda/es/complement.js


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */

var complement =
/*#__PURE__*/
es_lift(es_not);
/* harmony default export */ var es_complement = (complement);
// CONCATENATED MODULE: ./node_modules/ramda/es/isNil.js

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
/*#__PURE__*/
Object(_curry1["a" /* default */])(function isNil(x) {
  return x == null;
});

/* harmony default export */ var es_isNil = (isNil);
// EXTERNAL MODULE: ./node_modules/ramda/es/pipeK.js + 3 modules
var pipeK = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_concat.js
var _concat = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/ramda/es/addIndex.js



/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> ((a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */

var addIndex_addIndex =
/*#__PURE__*/
Object(_curry1["a" /* default */])(function addIndex(fn) {
  return Object(curryN["a" /* default */])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);

    args[0] = function () {
      var result = origFn.apply(this, Object(_concat["a" /* default */])(arguments, [idx, list]));
      idx += 1;
      return result;
    };

    return fn.apply(this, args);
  });
});

/* harmony default export */ var es_addIndex = (addIndex_addIndex);
// EXTERNAL MODULE: ./node_modules/ramda/es/curry.js
var curry = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/ramda/es/always.js
var always = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/crocks/Maybe/safe.js
var safe = __webpack_require__(66);
var safe_default = /*#__PURE__*/__webpack_require__.n(safe);

// EXTERNAL MODULE: ./node_modules/crocks/IO/index.js
var IO = __webpack_require__(6);
var IO_default = /*#__PURE__*/__webpack_require__.n(IO);

// EXTERNAL MODULE: ./node_modules/most/src/index.js + 65 modules
var src = __webpack_require__(29);

// EXTERNAL MODULE: ./chrome/src/naturalTransformations.js
var naturalTransformations = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/crocks/predicates/index.js
var predicates = __webpack_require__(40);

// CONCATENATED MODULE: ./chrome/src/helpers.js







// isNotNil :: a -> Boolean
const isNotNil = es_complement(es_isNil);

// stringify :: JSON -> String
const stringify = (x) => JSON.stringify(x, null, 2);

// safeWhenIsNotNil :: a -> Maybe a
const safeWhenIsNotNil = safe_default()(isNotNil);

// parse :: String -> JSON
const parse = JSON.parse;

// getElementById :: String -> IO HTMLElement
const getElementById = (id) => IO_default()(() => document.getElementById(id));

// streamFromEvent :: String -> HTMLElement -> Stream a
const streamFromEvent = Object(curryN["a" /* default */])(2, src["b" /* fromEvent */]);

// clickStreamFromId :: String -> Stream Events
const clickStreamFromId = Object(pipeK["a" /* default */])(Object(naturalTransformations["a" /* ioToStream */])(getElementById), streamFromEvent('click'));

// mapIndexed :: ((a, String) -> b) -> F a -> F b
const mapIndexed = es_addIndex(map["a" /* default */]);

// selectIndex :: (String, Number) -> IO ()
const selectIndex = Object(curry["a" /* default */])((selector, index) =>
	IO_default()(() => (document.querySelector(selector).selectedIndex = index))
);

// click :: ( String | HTMLElement )-> IO ()
const click = (selector) =>
	IO_default()(() => {
		const el = Object(predicates["isString"])(selector) ? document.querySelector(selector) : selector;
		return el.click();
	});

// locationIncludes :: String -> IO Boolean
const locationIncludes = (x) => IO_default()(() => window.location.href.includes(x));

// tapF :: Functor F => a -> F b -> a -> F a
const tapF = (f) => (x) => Object(map["a" /* default */])(Object(always["a" /* default */])(x), f(x));

const Monad = {
	do: (gen) => {
		let g = gen();
		const step = (value) => {
			const result = g.next(value);
			if (result.done) {
				g = gen();
				return result.value;
			} else {
				return result.value.chain(step);
			}
		};
		return step();
	}
};

// querySelector :: String -> IO HTMLElement
const querySelector = (selector) => IO_default()(() => document.querySelector(selector));

// setProperty :: String -> String -> HTMLElement -> IO HTMLElement
const setProperty = Object(curry["a" /* default */])((prop, value, el) => {
	return IO_default()(() => {
		el[prop] = value;
		return el;
	});
});

// setProperty :: String -> HTMLElement -> IO HTMLElement
const setValue = setProperty('value');


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)
var fl = __webpack_require__(32)

var check = function (alg, m) { return isFunction(m[fl[alg]]) || isFunction(m[alg]); }

var checkImpl = function (alg, m) { return isFunction(m['@@implements']) && !!m['@@implements'](alg); }

var hasAlg = function (alg, m) { return !!m && (check(alg, m) || checkImpl(alg, m)); }

module.exports = hasAlg


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var VERSION = 2

var _implements = __webpack_require__(48)
var _inspect = __webpack_require__(49)
var type = __webpack_require__(23).type('IO')
var _type = __webpack_require__(23).typeFn(type(), VERSION)
var fl = __webpack_require__(32)

var compose = __webpack_require__(56)
var isFunction = __webpack_require__(7)
var isSameType = __webpack_require__(22)

var _of =
  function (x) { return IO(function () { return x; }); }

function IO(run) {
  var obj;

  if(!isFunction(run)) {
    throw new TypeError('IO: Must wrap a function')
  }

  var of =
    _of

  var inspect =
    function () { return ("IO" + (_inspect(run))); }

  function map(method) {
    return function(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(("IO." + method + ": Function required"))
      }

      return IO(compose(fn, run))
    }
  }

  function ap(m) {
    if(!isSameType(IO, m)) {
      throw new TypeError('IO.ap: IO required')
    }
    return IO(function () {
      var fn = run()
      if(!isFunction(fn)) {
        throw new TypeError('IO.ap: Wrapped value must be a function')
      }

      return m.map(fn).run()
    })

  }

  function chain(method) {
    return function(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(("IO." + method + ": Function required"))
      }

      return IO(function() {
        var m = fn(run())

        if(!isSameType(IO, m)) {
          throw new TypeError(("IO." + method + ": Function must return an IO"))
        }

        return m.run()
      })
    }
  }

  return ( obj = {
    inspect: inspect, toString: inspect,
    run: run, type: type, ap: ap, of: of,
    map: map('map'),
    chain: chain('chain')
  }, obj[fl.of] = of, obj[fl.map] = map(fl.map), obj[fl.chain] = chain(fl.chain), obj['@@type'] = _type, obj.constructor = IO, obj )
}

IO.of = _of
IO.type = type

IO[fl.of] = _of
IO['@@type'] = _type

IO['@@implements'] = _implements(
  [ 'ap', 'chain', 'map', 'of' ]
)

module.exports = IO


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// isFunction : a -> Boolean
function isFunction(fn) {
  return typeof fn === 'function'
}

module.exports = isFunction


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _reduce; });

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xwrap.js
var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_arity.js
var _arity = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/ramda/es/bind.js


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind_bind =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function bind(fn, thisObj) {
  return Object(_arity["a" /* default */])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

/* harmony default export */ var es_bind = (bind_bind);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_reduce.js




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](es_bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (Object(_isArrayLike["a" /* default */])(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)

var CURRY_SYMB =
  '@@crocks/curried'

function applyCurry(fn, arg) {
  if(!isFunction(fn)) { return fn }

  return fn.length > 1 ? fn.bind(null, arg) : fn.call(null, arg)
}

// curry : ((a, b, c) -> d) -> a -> b -> c -> d
function curry(fn) {
  if(fn[CURRY_SYMB]) {
    return fn
  }

  function curried() {
    var xs = [], len = arguments.length;
    while ( len-- ) xs[ len ] = arguments[ len ];

    var args =
      xs.length ? xs : [ undefined ]

    if(args.length < fn.length) {
      return curry(Function.bind.apply(fn, [ null ].concat(args)))
    }

    var val = args.length === fn.length
      ? fn.apply(null, args)
      : args.reduce(applyCurry, fn)

    if(isFunction(val)) {
      return curry(val)
    }

    return val
  }

  Object.defineProperty(curried, CURRY_SYMB, {
    enumerable: false,
    writable: false,
    value: true
  })

  return curried
}

module.exports = curry


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// isString : a -> Boolean
function isString(x) {
  return typeof x === 'string'
}

module.exports = isString


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_dispatchable.js + 1 modules
var _dispatchable = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_map.js
var _map = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_reduce.js + 2 modules
var _reduce = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_xfBase.js
var _xfBase = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xmap.js



var _xmap_XMap =
/*#__PURE__*/
function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase["a" /* default */].init;
  XMap.prototype['@@transducer/result'] = _xfBase["a" /* default */].result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function _xmap(f, xf) {
  return new _xmap_XMap(f, xf);
});

/* harmony default export */ var internal_xmap = (_xmap);
// EXTERNAL MODULE: ./node_modules/ramda/es/curryN.js + 1 modules
var curryN = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ramda/es/keys.js + 1 modules
var keys = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/ramda/es/map.js







/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

var map_map =
/*#__PURE__*/
Object(_curry2["a" /* default */])(
/*#__PURE__*/
Object(_dispatchable["a" /* default */])(['fantasy-land/map', 'map'], internal_xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(curryN["a" /* default */])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });

    case '[object Object]':
      return Object(_reduce["a" /* default */])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(keys["a" /* default */])(functor));

    default:
      return Object(_map["a" /* default */])(fn, functor);
  }
}));

/* harmony default export */ var es_map = __webpack_exports__["a"] = (map_map);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_arity.js
var _arity = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isPlaceholder.js
var _isPlaceholder = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curryN.js


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!Object(_isPlaceholder["a" /* default */])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!Object(_isPlaceholder["a" /* default */])(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : Object(_arity["a" /* default */])(left, _curryN(length, combined, fn));
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/curryN.js




/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN_curryN =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function curryN(length, fn) {
  if (length === 1) {
    return Object(_curry1["a" /* default */])(fn);
  }

  return Object(_arity["a" /* default */])(length, _curryN(length, [], fn));
});

/* harmony default export */ var es_curryN = __webpack_exports__["a"] = (curryN_curryN);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
var isObject = __webpack_require__(36)
var isMonoid = __webpack_require__(51)
var equals = __webpack_require__(37)
var fl = __webpack_require__(32)

function isEmpty(x) {
  if(isMonoid(x)) {
    var empty = x.constructor[fl['empty']] || x.constructor['empty'] || x['empty']

    return equals(x, empty())
  }

  if(isObject(x)) {
    return !Object.keys(x).length
  }

  if(x && x.length !== undefined) {
    return !x.length
  }

  return true
}

module.exports = isEmpty


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

/* eslint eqeqeq: "off" */

// isNil : a -> Boolean
function isNil(x) {
  return x == null || x !== x
}

module.exports = isNil


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arity; });
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isNumber = __webpack_require__(57)

// isInteger : a -> Boolean
function isInteger(x) {
  return isNumber(x)
    && isFinite(x)
    && Math.floor(x) === x
}

module.exports = isInteger


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

function isArray(x) {
  return Array.isArray(x)
}

module.exports = isArray


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)

// isFunctor : a -> Boolean
function isFunctor(m) {
  return !!m && hasAlg('map', m)
}

module.exports = isFunctor


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _has; });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_has.js
var _has = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArguments.js

var _isArguments_toString = Object.prototype.toString;

var _isArguments_isArguments =
/*#__PURE__*/
function () {
  return _isArguments_toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return _isArguments_toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(_has["a" /* default */])('callee', x);
  };
}();

/* harmony default export */ var internal_isArguments = (_isArguments_isArguments);
// CONCATENATED MODULE: ./node_modules/ramda/es/keys.js


 // cover IE < 9 keys issues

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys_keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
Object(_curry1["a" /* default */])(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
Object(_curry1["a" /* default */])(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && internal_isArguments(obj);

  for (prop in obj) {
    if (Object(_has["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (Object(_has["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
/* harmony default export */ var es_keys = __webpack_exports__["a"] = (keys_keys);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)
var isFunction = __webpack_require__(7)
var type = __webpack_require__(52)

// isSameType :: Container m => (m, m) -> Boolean
function isSameType(x, y) {
  var tX = type(x)
  var tY = type(y)

  return tX === tY
    || isFunction(x) && x.name === tY
    || isFunction(y) && y.name === tX
}

module.exports = curry(isSameType)


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var _types = {
  'unk': function () { return 'unknown'; },
  'All': function () { return 'All'; },
  'Any': function () { return 'Any'; },
  'Arrow': function () { return 'Arrow'; },
  'Assign': function () { return 'Assign'; },
  'Async': function () { return 'Async'; },
  'Const': function (inner) { return ("Const(" + inner + ")"); },
  'Either': function () { return 'Either'; },
  'Endo': function () { return 'Endo'; },
  'Equiv': function () { return 'Equiv'; },
  'First': function () { return 'First'; },
  'Identity': function () { return 'Identity'; },
  'IO': function () { return 'IO'; },
  'Last': function () { return 'Last'; },
  'List': function () { return 'List'; },
  'Max': function () { return 'Max'; },
  'Maybe': function () { return 'Maybe'; },
  'Min': function () { return 'Min'; },
  'Pair': function () { return 'Pair'; },
  'Pred': function () { return 'Pred'; },
  'Prod': function () { return 'Prod'; },
  'Reader': function () { return 'Reader'; },
  'Result': function () { return 'Result'; },
  'Star': function () { return 'Star'; },
  'State': function () { return 'State'; },
  'Sum': function () { return 'Sum'; },
  'Tuple': function (n) { return (n + "-Tuple"); },
  'Unit': function () { return 'Unit'; },
  'Writer': function () { return 'Writer'; }
}

var type =
  function (type) { return _types[type] || _types['unk']; }

var proxy =
  function (t, ctx) { return ({ type: function () { return type(t)(ctx); } }); }

var typeFn = function (t, ver, ctx) {
  var typeStr = type(t)(ctx)
  return ("crocks/" + typeStr + "@" + (ver || 0))
}

module.exports = {
  proxy: proxy, type: type, typeFn: typeFn
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

function isDefined(x) {
  return x !== undefined
}

module.exports = isDefined


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);



/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
/*#__PURE__*/
Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function isArrayLike(x) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _concat; });
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;

  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }

  idx = 0;

  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }

  return result;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry3; });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? f3 : Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? f3 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? f3 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_a) {
          return fn(_a, b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Stream; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ periodic; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ fromEvent; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ take; });

// UNUSED EXPORTS: of, just, empty, never, from, observe, forEach, drain, loop, scan, reduce, unfold, iterate, generate, concat, startWith, map, constant, tap, ap, transduce, flatMap, chain, join, continueWith, flatMapEnd, concatMap, mergeConcurrently, merge, mergeArray, combine, combineArray, sample, sampleArray, sampleWith, zip, zipArray, switchLatest, switch, filter, skipRepeats, distinct, skipRepeatsWith, distinctBy, skip, slice, takeWhile, skipWhile, skipAfter, takeUntil, until, skipUntil, since, during, delay, timestamp, throttle, debounce, fromPromise, awaitPromises, await, recoverWith, flatMapError, throwError, multicast, defaultScheduler, PropagateTask

// CONCATENATED MODULE: ./node_modules/most/src/Stream.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function Stream (source) {
  this.source = source
}

Stream.prototype.run = function (sink, scheduler) {
  return this.source.run(sink, scheduler)
}

// EXTERNAL MODULE: ./node_modules/@most/prelude/dist/index.es.js
var index_es = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/most/src/disposable/Disposable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Create a new Disposable which will dispose its underlying resource.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @constructor
 */
function Disposable (dispose, data) {
  this._dispose = dispose
  this._data = data
}

Disposable.prototype.dispose = function () {
  return this._dispose(this._data)
}

// CONCATENATED MODULE: ./node_modules/most/src/disposable/SettableDisposable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function SettableDisposable () {
  this.disposable = void 0
  this.disposed = false
  this._resolve = void 0

  var self = this
  this.result = new Promise(function (resolve) {
    self._resolve = resolve
  })
}

SettableDisposable.prototype.setDisposable = function (disposable) {
  if (this.disposable !== void 0) {
    throw new Error('setDisposable called more than once')
  }

  this.disposable = disposable

  if (this.disposed) {
    this._resolve(disposable.dispose())
  }
}

SettableDisposable.prototype.dispose = function () {
  if (this.disposed) {
    return this.result
  }

  this.disposed = true

  if (this.disposable !== void 0) {
    this.result = this.disposable.dispose()
  }

  return this.result
}

// CONCATENATED MODULE: ./node_modules/most/src/Promise.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function isPromise (p) {
  return p !== null && typeof p === 'object' && typeof p.then === 'function'
}

// CONCATENATED MODULE: ./node_modules/most/src/disposable/dispose.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





var map = index_es["j" /* map */]
var identity = index_es["h" /* id */]

/**
 * Call disposable.dispose.  If it returns a promise, catch promise
 * error and forward it through the provided sink.
 * @param {number} t time
 * @param {{dispose: function}} disposable
 * @param {{error: function}} sink
 * @return {*} result of disposable.dispose
 */
function tryDispose (t, disposable, sink) {
  var result = disposeSafely(disposable)
  return isPromise(result)
    ? result.catch(function (e) {
      sink.error(t, e)
    })
    : result
}

/**
 * Create a new Disposable which will dispose its underlying resource
 * at most once.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @return {Disposable}
 */
function create (dispose, data) {
  return once(new Disposable(dispose, data))
}

/**
 * Create a noop disposable. Can be used to satisfy a Disposable
 * requirement when no actual resource needs to be disposed.
 * @return {Disposable|exports|module.exports}
 */
function empty () {
  return new Disposable(identity, void 0)
}

/**
 * Create a disposable that will dispose all input disposables in parallel.
 * @param {Array<Disposable>} disposables
 * @return {Disposable}
 */
function dispose_all (disposables) {
  return create(disposeAll, disposables)
}

function disposeAll (disposables) {
  return Promise.all(map(disposeSafely, disposables))
}

function disposeSafely (disposable) {
  try {
    return disposable.dispose()
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * Create a disposable from a promise for another disposable
 * @param {Promise<Disposable>} disposablePromise
 * @return {Disposable}
 */
function promised (disposablePromise) {
  return create(disposePromise, disposablePromise)
}

function disposePromise (disposablePromise) {
  return disposablePromise.then(disposeOne)
}

function disposeOne (disposable) {
  return disposable.dispose()
}

/**
 * Create a disposable proxy that allows its underlying disposable to
 * be set later.
 * @return {SettableDisposable}
 */
function settable () {
  return new SettableDisposable()
}

/**
 * Wrap an existing disposable (which may not already have been once()d)
 * so that it will only dispose its underlying resource at most once.
 * @param {{ dispose: function() }} disposable
 * @return {Disposable} wrapped disposable
 */
function once (disposable) {
  return new Disposable(disposeMemoized, memoized(disposable))
}

function disposeMemoized (memoized) {
  if (!memoized.disposed) {
    memoized.disposed = true
    memoized.value = disposeSafely(memoized.disposable)
    memoized.disposable = void 0
  }

  return memoized.value
}

function memoized (disposable) {
  return { disposed: false, disposable: disposable, value: void 0 }
}

// CONCATENATED MODULE: ./node_modules/most/src/fatalError.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function fatalError (e) {
  setTimeout(function () {
    throw e
  }, 0)
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/PropagateTask.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function PropagateTask (run, value, sink) {
  this._run = run
  this.value = value
  this.sink = sink
  this.active = true
}

PropagateTask.event = function (value, sink) {
  return new PropagateTask(emit, value, sink)
}

PropagateTask.end = function (value, sink) {
  return new PropagateTask(PropagateTask_end, value, sink)
}

PropagateTask.error = function (value, sink) {
  return new PropagateTask(error, value, sink)
}

PropagateTask.prototype.dispose = function () {
  this.active = false
}

PropagateTask.prototype.run = function (t) {
  if (!this.active) {
    return
  }
  this._run(t, this.value, this.sink)
}

PropagateTask.prototype.error = function (t, e) {
  if (!this.active) {
    return fatalError(e)
  }
  this.sink.error(t, e)
}

function error (t, e, sink) {
  sink.error(t, e)
}

function emit (t, x, sink) {
  sink.event(t, x)
}

function PropagateTask_end (t, x, sink) {
  sink.end(t, x)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/core.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Stream containing only x
 * @param {*} x
 * @returns {Stream}
 */
function of (x) {
  return new Stream(new Just(x))
}

function Just (x) {
  this.value = x
}

Just.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new PropagateTask(runJust, this.value, sink))
}

function runJust (t, x, sink) {
  sink.event(t, x)
  sink.end(t, void 0)
}

/**
 * Stream containing no events and ends immediately
 * @returns {Stream}
 */
function core_empty () {
  return EMPTY
}

function EmptySource () {}

EmptySource.prototype.run = function (sink, scheduler) {
  var task = PropagateTask.end(void 0, sink)
  scheduler.asap(task)

  return create(disposeEmpty, task)
}

function disposeEmpty (task) {
  return task.dispose()
}

var EMPTY = new Stream(new EmptySource())

/**
 * Stream containing no events and never ends
 * @returns {Stream}
 */
function never () {
  return NEVER
}

function NeverSource () {}

NeverSource.prototype.run = function () {
  return empty()
}

var NEVER = new Stream(new NeverSource())

// CONCATENATED MODULE: ./node_modules/most/src/source/fromArray.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function fromArray (a) {
  return new Stream(new ArraySource(a))
}

function ArraySource (a) {
  this.array = a
}

ArraySource.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new PropagateTask(runProducer, this.array, sink))
}

function runProducer (t, array, sink) {
  for (var i = 0, l = array.length; i < l && this.active; ++i) {
    sink.event(t, array[i])
  }

  this.active && sink.end(t)
}

// CONCATENATED MODULE: ./node_modules/most/src/iterable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/* global Set, Symbol */
var iteratorSymbol
// Firefox ships a partial implementation using the name @@iterator.
// https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
if (typeof Set === 'function' && typeof new Set()['@@iterator'] === 'function') {
  iteratorSymbol = '@@iterator'
} else {
  iteratorSymbol = typeof Symbol === 'function' ? Symbol.iterator
  : '_es6shim_iterator_'
}

function isIterable (o) {
  return typeof o[iteratorSymbol] === 'function'
}

function getIterator (o) {
  return o[iteratorSymbol]()
}

function makeIterable (f, o) {
  o[iteratorSymbol] = f
  return o
}

// CONCATENATED MODULE: ./node_modules/most/src/source/fromIterable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function fromIterable (iterable) {
  return new Stream(new IterableSource(iterable))
}

function IterableSource (iterable) {
  this.iterable = iterable
}

IterableSource.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new PropagateTask(fromIterable_runProducer, getIterator(this.iterable), sink))
}

function fromIterable_runProducer (t, iterator, sink) {
  var r = iterator.next()

  while (!r.done && this.active) {
    sink.event(t, r.value)
    r = iterator.next()
  }

  sink.end(t, r.value)
}

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/most/src/observable/getObservable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function getObservable (o) { // eslint-disable-line complexity
  var obs = null
  if (o) {
  // Access foreign method only once
    var method = o[es["a" /* default */]]
    if (typeof method === 'function') {
      obs = method.call(o)
      if (!(obs && typeof obs.subscribe === 'function')) {
        throw new TypeError('invalid observable ' + obs)
      }
    }
  }

  return obs
}

// CONCATENATED MODULE: ./node_modules/most/src/source/tryEvent.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

function tryEnd (t, x, sink) {
  try {
    sink.end(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/observable/fromObservable.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function fromObservable (observable) {
  return new Stream(new ObservableSource(observable))
}

function ObservableSource (observable) {
  this.observable = observable
}

ObservableSource.prototype.run = function (sink, scheduler) {
  var sub = this.observable.subscribe(new SubscriberSink(sink, scheduler))
  if (typeof sub === 'function') {
    return create(sub)
  } else if (sub && typeof sub.unsubscribe === 'function') {
    return create(unsubscribe, sub)
  }

  throw new TypeError('Observable returned invalid subscription ' + String(sub))
}

function SubscriberSink (sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
}

SubscriberSink.prototype.next = function (x) {
  tryEvent(this.scheduler.now(), x, this.sink)
}

SubscriberSink.prototype.complete = function (x) {
  tryEnd(this.scheduler.now(), x, this.sink)
}

SubscriberSink.prototype.error = function (e) {
  this.sink.error(this.scheduler.now(), e)
}

function unsubscribe (subscription) {
  return subscription.unsubscribe()
}

// CONCATENATED MODULE: ./node_modules/most/src/source/from.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */









function from (a) { // eslint-disable-line complexity
  if (a instanceof Stream) {
    return a
  }

  var observable = getObservable(a)
  if (observable != null) {
    return fromObservable(observable)
  }

  if (Array.isArray(a) || Object(index_es["i" /* isArrayLike */])(a)) {
    return fromArray(a)
  }

  if (isIterable(a)) {
    return fromIterable(a)
  }

  throw new TypeError('from(x) must be observable, iterable, or array-like: ' + a)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/periodic.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Create a stream that emits the current time periodically
 * @param {Number} period periodicity of events in millis
 * @param {*} deprecatedValue @deprecated value to emit each period
 * @returns {Stream} new stream that emits the current time every period
 */
function periodic (period, deprecatedValue) {
  return new Stream(new Periodic(period, deprecatedValue))
}

function Periodic (period, value) {
  this.period = period
  this.value = value
}

Periodic.prototype.run = function (sink, scheduler) {
  return scheduler.periodic(this.period, PropagateTask.event(this.value, sink))
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/ScheduledTask.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function ScheduledTask (delay, period, task, scheduler) {
  this.time = delay
  this.period = period
  this.task = task
  this.scheduler = scheduler
  this.active = true
}

ScheduledTask.prototype.run = function () {
  return this.task.run(this.time)
}

ScheduledTask.prototype.error = function (e) {
  return this.task.error(this.time, e)
}

ScheduledTask.prototype.dispose = function () {
  this.scheduler.cancel(this)
  return this.task.dispose()
}

// CONCATENATED MODULE: ./node_modules/most/src/task.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function defer (task) {
  return Promise.resolve(task).then(runTask)
}

function runTask (task) {
  try {
    return task.run()
  } catch (e) {
    return task.error(e)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/Scheduler.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function Scheduler (timer, timeline) {
  this.timer = timer
  this.timeline = timeline

  this._timer = null
  this._nextArrival = Infinity

  var self = this
  this._runReadyTasksBound = function () {
    self._runReadyTasks(self.now())
  }
}

Scheduler.prototype.now = function () {
  return this.timer.now()
}

Scheduler.prototype.asap = function (task) {
  return this.schedule(0, -1, task)
}

Scheduler.prototype.delay = function (delay, task) {
  return this.schedule(delay, -1, task)
}

Scheduler.prototype.periodic = function (period, task) {
  return this.schedule(0, period, task)
}

Scheduler.prototype.schedule = function (delay, period, task) {
  var now = this.now()
  var st = new ScheduledTask(now + Math.max(0, delay), period, task, this)

  this.timeline.add(st)
  this._scheduleNextRun(now)
  return st
}

Scheduler.prototype.cancel = function (task) {
  task.active = false
  if (this.timeline.remove(task)) {
    this._reschedule()
  }
}

Scheduler.prototype.cancelAll = function (f) {
  this.timeline.removeAll(f)
  this._reschedule()
}

Scheduler.prototype._reschedule = function () {
  if (this.timeline.isEmpty()) {
    this._unschedule()
  } else {
    this._scheduleNextRun(this.now())
  }
}

Scheduler.prototype._unschedule = function () {
  this.timer.clearTimer(this._timer)
  this._timer = null
}

Scheduler.prototype._scheduleNextRun = function (now) { // eslint-disable-line complexity
  if (this.timeline.isEmpty()) {
    return
  }

  var nextArrival = this.timeline.nextArrival()

  if (this._timer === null) {
    this._scheduleNextArrival(nextArrival, now)
  } else if (nextArrival < this._nextArrival) {
    this._unschedule()
    this._scheduleNextArrival(nextArrival, now)
  }
}

Scheduler.prototype._scheduleNextArrival = function (nextArrival, now) {
  this._nextArrival = nextArrival
  var delay = Math.max(0, nextArrival - now)
  this._timer = this.timer.setTimer(this._runReadyTasksBound, delay)
}

Scheduler.prototype._runReadyTasks = function (now) {
  this._timer = null
  this.timeline.runTasks(now, runTask)
  this._scheduleNextRun(this.now())
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/ClockTimer.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/* global setTimeout, clearTimeout */

function ClockTimer () {}

ClockTimer.prototype.now = Date.now

ClockTimer.prototype.setTimer = function (f, dt) {
  return dt <= 0 ? runAsap(f) : setTimeout(f, dt)
}

ClockTimer.prototype.clearTimer = function (t) {
  return t instanceof Asap ? t.cancel() : clearTimeout(t)
}

function Asap (f) {
  this.f = f
  this.active = true
}

Asap.prototype.run = function () {
  return this.active && this.f()
}

Asap.prototype.error = function (e) {
  throw e
}

Asap.prototype.cancel = function () {
  this.active = false
}

function runAsap (f) {
  var task = new Asap(f)
  defer(task)
  return task
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/Timeline.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function Timeline () {
  this.tasks = []
}

Timeline.prototype.nextArrival = function () {
  return this.isEmpty() ? Infinity : this.tasks[0].time
}

Timeline.prototype.isEmpty = function () {
  return this.tasks.length === 0
}

Timeline.prototype.add = function (st) {
  insertByTime(st, this.tasks)
}

Timeline.prototype.remove = function (st) {
  var i = binarySearch(st.time, this.tasks)

  if (i >= 0 && i < this.tasks.length) {
    var at = index_es["g" /* findIndex */](st, this.tasks[i].events)
    if (at >= 0) {
      this.tasks[i].events.splice(at, 1)
      return true
    }
  }

  return false
}

Timeline.prototype.removeAll = function (f) {
  for (var i = 0, l = this.tasks.length; i < l; ++i) {
    removeAllFrom(f, this.tasks[i])
  }
}

Timeline.prototype.runTasks = function (t, runTask) {
  var tasks = this.tasks
  var l = tasks.length
  var i = 0

  while (i < l && tasks[i].time <= t) {
    ++i
  }

  this.tasks = tasks.slice(i)

  // Run all ready tasks
  for (var j = 0; j < i; ++j) {
    this.tasks = runTasks(runTask, tasks[j], this.tasks)
  }
}

function runTasks (runTask, timeslot, tasks) { // eslint-disable-line complexity
  var events = timeslot.events
  for (var i = 0; i < events.length; ++i) {
    var task = events[i]

    if (task.active) {
      runTask(task)

      // Reschedule periodic repeating tasks
      // Check active again, since a task may have canceled itself
      if (task.period >= 0 && task.active) {
        task.time = task.time + task.period
        insertByTime(task, tasks)
      }
    }
  }

  return tasks
}

function insertByTime (task, timeslots) { // eslint-disable-line complexity
  var l = timeslots.length

  if (l === 0) {
    timeslots.push(newTimeslot(task.time, [task]))
    return
  }

  var i = binarySearch(task.time, timeslots)

  if (i >= l) {
    timeslots.push(newTimeslot(task.time, [task]))
  } else if (task.time === timeslots[i].time) {
    timeslots[i].events.push(task)
  } else {
    timeslots.splice(i, 0, newTimeslot(task.time, [task]))
  }
}

function removeAllFrom (f, timeslot) {
  timeslot.events = index_es["m" /* removeAll */](f, timeslot.events)
}

function binarySearch (t, sortedArray) { // eslint-disable-line complexity
  var lo = 0
  var hi = sortedArray.length
  var mid, y

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2)
    y = sortedArray[mid]

    if (t === y.time) {
      return mid
    } else if (t < y.time) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return hi
}

function newTimeslot (t, events) {
  return { time: t, events: events }
}

// CONCATENATED MODULE: ./node_modules/most/src/scheduler/defaultScheduler.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





var defaultScheduler = new Scheduler(new ClockTimer(), new Timeline())

/* harmony default export */ var scheduler_defaultScheduler = (defaultScheduler);

// CONCATENATED MODULE: ./node_modules/most/src/observable/subscribe.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function subscribe (subscriber, stream) {
  if (Object(subscriber) !== subscriber) {
    throw new TypeError('subscriber must be an object')
  }

  var disposable = settable()
  var observer = new SubscribeObserver(fatalError, subscriber, disposable)

  disposable.setDisposable(stream.source.run(observer, scheduler_defaultScheduler))

  return new Subscription(disposable)
}

function SubscribeObserver (fatalError, subscriber, disposable) {
  this.fatalError = fatalError
  this.subscriber = subscriber
  this.disposable = disposable
}

SubscribeObserver.prototype.event = function (t, x) {
  if (!this.disposable.disposed && typeof this.subscriber.next === 'function') {
    this.subscriber.next(x)
  }
}

SubscribeObserver.prototype.end = function (t, x) {
  if (!this.disposable.disposed) {
    var s = this.subscriber
    var fatalError = this.fatalError
    Promise.resolve(this.disposable.dispose()).then(function () {
      if (typeof s.complete === 'function') {
        s.complete(x)
      }
    }).catch(function (e) {
      throwError(e, s, fatalError)
    })
  }
}

SubscribeObserver.prototype.error = function (t, e) {
  var s = this.subscriber
  var fatalError = this.fatalError
  Promise.resolve(this.disposable.dispose()).then(function () {
    throwError(e, s, fatalError)
  })
}

function Subscription (disposable) {
  this.disposable = disposable
}

Subscription.prototype.unsubscribe = function () {
  this.disposable.dispose()
}

function throwError (e1, subscriber, throwError) {
  if (typeof subscriber.error === 'function') {
    try {
      subscriber.error(e1)
    } catch (e2) {
      throwError(e2)
    }
  } else {
    throwError(e1)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/thru.js
/** @license MIT License (c) copyright 2010-2017 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function thru (f, stream) {
  return f(stream)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/EventTargetSource.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function EventTargetSource (event, source, capture) {
  this.event = event
  this.source = source
  this.capture = capture
}

EventTargetSource.prototype.run = function (sink, scheduler) {
  function addEvent (e) {
    tryEvent(scheduler.now(), e, sink)
  }

  this.source.addEventListener(this.event, addEvent, this.capture)

  return create(disposeEventTarget,
    { target: this, addEvent: addEvent })
}

function disposeEventTarget (info) {
  var target = info.target
  target.source.removeEventListener(target.event, info.addEvent, target.capture)
}

// CONCATENATED MODULE: ./node_modules/most/src/sink/DeferredSink.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function DeferredSink (sink) {
  this.sink = sink
  this.events = []
  this.active = true
}

DeferredSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }

  if (this.events.length === 0) {
    defer(new PropagateAllTask(this.sink, t, this.events))
  }

  this.events.push({ time: t, value: x })
}

DeferredSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }

  this._end(new EndTask(t, x, this.sink))
}

DeferredSink.prototype.error = function (t, e) {
  this._end(new ErrorTask(t, e, this.sink))
}

DeferredSink.prototype._end = function (task) {
  this.active = false
  defer(task)
}

function PropagateAllTask (sink, time, events) {
  this.sink = sink
  this.events = events
  this.time = time
}

PropagateAllTask.prototype.run = function () {
  var events = this.events
  var sink = this.sink
  var event

  for (var i = 0, l = events.length; i < l; ++i) {
    event = events[i]
    this.time = event.time
    sink.event(event.time, event.value)
  }

  events.length = 0
}

PropagateAllTask.prototype.error = function (e) {
  this.sink.error(this.time, e)
}

function EndTask (t, x, sink) {
  this.time = t
  this.value = x
  this.sink = sink
}

EndTask.prototype.run = function () {
  this.sink.end(this.time, this.value)
}

EndTask.prototype.error = function (e) {
  this.sink.error(this.time, e)
}

function ErrorTask (t, e, sink) {
  this.time = t
  this.value = e
  this.sink = sink
}

ErrorTask.prototype.run = function () {
  this.sink.error(this.time, this.value)
}

ErrorTask.prototype.error = function (e) {
  throw e
}

// CONCATENATED MODULE: ./node_modules/most/src/source/EventEmitterSource.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function EventEmitterSource (event, source) {
  this.event = event
  this.source = source
}

EventEmitterSource.prototype.run = function (sink, scheduler) {
  // NOTE: Because EventEmitter allows events in the same call stack as
  // a listener is added, use a DeferredSink to buffer events
  // until the stack clears, then propagate.  This maintains most.js's
  // invariant that no event will be delivered in the same call stack
  // as an observer begins observing.
  var dsink = new DeferredSink(sink)

  function addEventVariadic (a) {
    var l = arguments.length
    if (l > 1) {
      var arr = new Array(l)
      for (var i = 0; i < l; ++i) {
        arr[i] = arguments[i]
      }
      tryEvent(scheduler.now(), arr, dsink)
    } else {
      tryEvent(scheduler.now(), a, dsink)
    }
  }

  this.source.addListener(this.event, addEventVariadic)

  return create(disposeEventEmitter, { target: this, addEvent: addEventVariadic })
}

function disposeEventEmitter (info) {
  var target = info.target
  target.source.removeListener(target.event, info.addEvent)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/fromEvent.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Create a stream from an EventTarget, such as a DOM Node, or EventEmitter.
 * @param {String} event event type name, e.g. 'click'
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter
 * @param {*?} capture for DOM events, whether to use
 *  capturing--passed as 3rd parameter to addEventListener.
 * @returns {Stream} stream containing all events of the specified type
 * from the source.
 */
function fromEvent (event, source, capture) { // eslint-disable-line complexity
  var s

  if (typeof source.addEventListener === 'function' && typeof source.removeEventListener === 'function') {
    if (arguments.length < 3) {
      capture = false
    }

    s = new EventTargetSource(event, source, capture)
  } else if (typeof source.addListener === 'function' && typeof source.removeListener === 'function') {
    s = new EventEmitterSource(event, source)
  } else {
    throw new Error('source must support addEventListener/removeEventListener or addListener/removeListener')
  }

  return new Stream(s)
}

// CONCATENATED MODULE: ./node_modules/most/src/runSource.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function withDefaultScheduler (source) {
  return withScheduler(source, scheduler_defaultScheduler)
}

function withScheduler (source, scheduler) {
  return new Promise(function (resolve, reject) {
    runSource(source, scheduler, resolve, reject)
  })
}

function runSource (source, scheduler, resolve, reject) {
  var disposable = settable()
  var observer = new Drain(resolve, reject, disposable)

  disposable.setDisposable(source.run(observer, scheduler))
}

function Drain (end, error, disposable) {
  this._end = end
  this._error = error
  this._disposable = disposable
  this.active = true
}

Drain.prototype.event = function (t, x) {}

Drain.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.active = false
  disposeThen(this._end, this._error, this._disposable, x)
}

Drain.prototype.error = function (t, e) {
  this.active = false
  disposeThen(this._error, this._error, this._disposable, e)
}

function disposeThen (end, error, disposable, x) {
  Promise.resolve(disposable.dispose()).then(function () {
    end(x)
  }, error)
}

// CONCATENATED MODULE: ./node_modules/most/src/sink/Pipe.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * A sink mixin that simply forwards event, end, and error to
 * another sink.
 * @param sink
 * @constructor
 */
function Pipe (sink) {
  this.sink = sink
}

Pipe.prototype.event = function (t, x) {
  return this.sink.event(t, x)
}

Pipe.prototype.end = function (t, x) {
  return this.sink.end(t, x)
}

Pipe.prototype.error = function (t, e) {
  return this.sink.error(t, e)
}

// CONCATENATED MODULE: ./node_modules/most/src/fusion/Filter.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function Filter (p, source) {
  this.p = p
  this.source = source
}

/**
 * Create a filtered source, fusing adjacent filter.filter if possible
 * @param {function(x:*):boolean} p filtering predicate
 * @param {{run:function}} source source to filter
 * @returns {Filter} filtered source
 */
Filter.create = function createFilter (p, source) {
  if (source instanceof Filter) {
    return new Filter(and(source.p, p), source.source)
  }

  return new Filter(p, source)
}

Filter.prototype.run = function (sink, scheduler) {
  return this.source.run(new FilterSink(this.p, sink), scheduler)
}

function FilterSink (p, sink) {
  this.p = p
  this.sink = sink
}

FilterSink.prototype.end = Pipe.prototype.end
FilterSink.prototype.error = Pipe.prototype.error

FilterSink.prototype.event = function (t, x) {
  var p = this.p
  p(x) && this.sink.event(t, x)
}

function and (p, q) {
  return function (x) {
    return p(x) && q(x)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/fusion/FilterMap.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function FilterMap (p, f, source) {
  this.p = p
  this.f = f
  this.source = source
}

FilterMap.prototype.run = function (sink, scheduler) {
  return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler)
}

function FilterMapSink (p, f, sink) {
  this.p = p
  this.f = f
  this.sink = sink
}

FilterMapSink.prototype.event = function (t, x) {
  var f = this.f
  var p = this.p
  p(x) && this.sink.event(t, f(x))
}

FilterMapSink.prototype.end = Pipe.prototype.end
FilterMapSink.prototype.error = Pipe.prototype.error

// CONCATENATED MODULE: ./node_modules/most/src/fusion/Map.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function Map (f, source) {
  this.f = f
  this.source = source
}

/**
 * Create a mapped source, fusing adjacent map.map, filter.map,
 * and filter.map.map if possible
 * @param {function(*):*} f mapping function
 * @param {{run:function}} source source to map
 * @returns {Map|FilterMap} mapped source, possibly fused
 */
Map.create = function createMap (f, source) {
  if (source instanceof Map) {
    return new Map(index_es["c" /* compose */](f, source.f), source.source)
  }

  if (source instanceof Filter) {
    return new FilterMap(source.p, f, source.source)
  }

  return new Map(f, source)
}

Map.prototype.run = function (sink, scheduler) { // eslint-disable-line no-extend-native
  return this.source.run(new MapSink(this.f, sink), scheduler)
}

function MapSink (f, sink) {
  this.f = f
  this.sink = sink
}

MapSink.prototype.end = Pipe.prototype.end
MapSink.prototype.error = Pipe.prototype.error

MapSink.prototype.event = function (t, x) {
  var f = this.f
  this.sink.event(t, f(x))
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/transform.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @param {Stream} stream stream to map
 * @returns {Stream} stream containing items transformed by f
 */
function transform_map (f, stream) {
  return new Stream(Map.create(f, stream.source))
}

/**
* Replace each value in the stream with x
* @param {*} x
* @param {Stream} stream
* @returns {Stream} stream containing items replaced with x
*/
function constant (x, stream) {
  return transform_map(function () {
    return x
  }, stream)
}

/**
* Perform a side effect for each item in the stream
* @param {function(x:*):*} f side effect to execute for each item. The
*  return value will be discarded.
* @param {Stream} stream stream to tap
* @returns {Stream} new stream containing the same items as this stream
*/
function tap (f, stream) {
  return new Stream(new Tap(f, stream.source))
}

function Tap (f, source) {
  this.source = source
  this.f = f
}

Tap.prototype.run = function (sink, scheduler) {
  return this.source.run(new TapSink(this.f, sink), scheduler)
}

function TapSink (f, sink) {
  this.sink = sink
  this.f = f
}

TapSink.prototype.end = Pipe.prototype.end
TapSink.prototype.error = Pipe.prototype.error

TapSink.prototype.event = function (t, x) {
  var f = this.f
  f(x)
  this.sink.event(t, x)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/observe.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Observe all the event values in the stream in time order. The
 * provided function `f` will be called for each event value
 * @param {function(x:T):*} f function to call with each event value
 * @param {Stream<T>} stream stream to observe
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function observe (f, stream) {
  return drain(tap(f, stream))
}

/**
 * "Run" a stream by creating demand and consuming all events
 * @param {Stream<T>} stream stream to drain
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function drain (stream) {
  return withDefaultScheduler(stream.source)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/loop.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @param {Stream} stream event stream
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
function loop (stepper, seed, stream) {
  return new Stream(new Loop(stepper, seed, stream.source))
}

function Loop (stepper, seed, source) {
  this.step = stepper
  this.seed = seed
  this.source = source
}

Loop.prototype.run = function (sink, scheduler) {
  return this.source.run(new LoopSink(this.step, this.seed, sink), scheduler)
}

function LoopSink (stepper, seed, sink) {
  this.step = stepper
  this.seed = seed
  this.sink = sink
}

LoopSink.prototype.error = Pipe.prototype.error

LoopSink.prototype.event = function (t, x) {
  var result = this.step(this.seed, x)
  this.seed = result.seed
  this.sink.event(t, result.value)
}

LoopSink.prototype.end = function (t) {
  this.sink.end(t, this.seed)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/accumulate.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream stream to scan
 * @returns {Stream} new stream containing successive reduce results
 */
function scan (f, initial, stream) {
  return new Stream(new Scan(f, initial, stream.source))
}

function Scan (f, z, source) {
  this.source = source
  this.f = f
  this.value = z
}

Scan.prototype.run = function (sink, scheduler) {
  var d1 = scheduler.asap(PropagateTask.event(this.value, sink))
  var d2 = this.source.run(new ScanSink(this.f, this.value, sink), scheduler)
  return dispose_all([d1, d2])
}

function ScanSink (f, z, sink) {
  this.f = f
  this.value = z
  this.sink = sink
}

ScanSink.prototype.event = function (t, x) {
  var f = this.f
  this.value = f(this.value, x)
  this.sink.event(t, this.value)
}

ScanSink.prototype.error = Pipe.prototype.error
ScanSink.prototype.end = Pipe.prototype.end

/**
* Reduce a stream to produce a single result.  Note that reducing an infinite
* stream will return a Promise that never fulfills, but that may reject if an error
* occurs.
* @param {function(result:*, x:*):*} f reducer function
* @param {*} initial initial value
* @param {Stream} stream to reduce
* @returns {Promise} promise for the file result of the reduce
*/
function reduce (f, initial, stream) {
  return withDefaultScheduler(new Reduce(f, initial, stream.source))
}

function Reduce (f, z, source) {
  this.source = source
  this.f = f
  this.value = z
}

Reduce.prototype.run = function (sink, scheduler) {
  return this.source.run(new ReduceSink(this.f, this.value, sink), scheduler)
}

function ReduceSink (f, z, sink) {
  this.f = f
  this.value = z
  this.sink = sink
}

ReduceSink.prototype.event = function (t, x) {
  var f = this.f
  this.value = f(this.value, x)
  this.sink.event(t, this.value)
}

ReduceSink.prototype.error = Pipe.prototype.error

ReduceSink.prototype.end = function (t) {
  this.sink.end(t, this.value)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/unfold.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Compute a stream by unfolding tuples of future values from a seed value
 * Event times may be controlled by returning a Promise from f
 * @param {function(seed:*):{value:*, seed:*, done:boolean}|Promise<{value:*, seed:*, done:boolean}>} f unfolding function accepts
 *  a seed and returns a new tuple with a value, new seed, and boolean done flag.
 *  If tuple.done is true, the stream will end.
 * @param {*} seed seed value
 * @returns {Stream} stream containing all value of all tuples produced by the
 *  unfolding function.
 */
function unfold (f, seed) {
  return new Stream(new UnfoldSource(f, seed))
}

function UnfoldSource (f, seed) {
  this.f = f
  this.value = seed
}

UnfoldSource.prototype.run = function (sink, scheduler) {
  return new Unfold(this.f, this.value, sink, scheduler)
}

function Unfold (f, x, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  function start (unfold) {
    return stepUnfold(unfold, x)
  }

  Promise.resolve(this).then(start).catch(err)
}

Unfold.prototype.dispose = function () {
  this.active = false
}

function stepUnfold (unfold, x) {
  var f = unfold.f
  return Promise.resolve(f(x)).then(function (tuple) {
    return continueUnfold(unfold, tuple)
  })
}

function continueUnfold (unfold, tuple) {
  if (tuple.done) {
    unfold.sink.end(unfold.scheduler.now(), tuple.value)
    return tuple.value
  }

  unfold.sink.event(unfold.scheduler.now(), tuple.value)

  if (!unfold.active) {
    return tuple.value
  }
  return stepUnfold(unfold, tuple.seed)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/iterate.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Compute a stream by iteratively calling f to produce values
 * Event times may be controlled by returning a Promise from f
 * @param {function(x:*):*|Promise<*>} f
 * @param {*} x initial value
 * @returns {Stream}
 */
function iterate (f, x) {
  return new Stream(new IterateSource(f, x))
}

function IterateSource (f, x) {
  this.f = f
  this.value = x
}

IterateSource.prototype.run = function (sink, scheduler) {
  return new Iterate(this.f, this.value, sink, scheduler)
}

function Iterate (f, initial, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var x = initial

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  function start (iterate) {
    return stepIterate(iterate, x)
  }

  Promise.resolve(this).then(start).catch(err)
}

Iterate.prototype.dispose = function () {
  this.active = false
}

function stepIterate (iterate, x) {
  iterate.sink.event(iterate.scheduler.now(), x)

  if (!iterate.active) {
    return x
  }

  var f = iterate.f
  return Promise.resolve(f(x)).then(function (y) {
    return continueIterate(iterate, y)
  })
}

function continueIterate (iterate, x) {
  return !iterate.active ? iterate.value : stepIterate(iterate, x)
}

// CONCATENATED MODULE: ./node_modules/most/src/source/generate.js
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Compute a stream using an *async* generator, which yields promises
 * to control event times.
 * @param f
 * @returns {Stream}
 */
function generate (f /*, ...args */) {
  return new Stream(new GenerateSource(f, index_es["o" /* tail */](arguments)))
}

function GenerateSource (f, args) {
  this.f = f
  this.args = args
}

GenerateSource.prototype.run = function (sink, scheduler) {
  return new Generate(this.f.apply(void 0, this.args), sink, scheduler)
}

function Generate (iterator, sink, scheduler) {
  this.iterator = iterator
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  Promise.resolve(this).then(next).catch(err)
}

function next (generate, x) {
  return generate.active ? handle(generate, generate.iterator.next(x)) : x
}

function handle (generate, result) {
  if (result.done) {
    return generate.sink.end(generate.scheduler.now(), result.value)
  }

  return Promise.resolve(result.value).then(function (x) {
    return generate_emit(generate, x)
  }, function (e) {
    return generate_error(generate, e)
  })
}

function generate_emit (generate, x) {
  generate.sink.event(generate.scheduler.now(), x)
  return next(generate, x)
}

function generate_error (generate, e) {
  return handle(generate, generate.iterator.throw(e))
}

Generate.prototype.dispose = function () {
  this.active = false
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/continueWith.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function continueWith (f, stream) {
  return new Stream(new ContinueWith(f, stream.source))
}

function ContinueWith (f, source) {
  this.f = f
  this.source = source
}

ContinueWith.prototype.run = function (sink, scheduler) {
  return new ContinueWithSink(this.f, this.source, sink, scheduler)
}

function ContinueWithSink (f, source, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true
  this.disposable = once(source.run(this, scheduler))
}

ContinueWithSink.prototype.error = Pipe.prototype.error

ContinueWithSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.sink.event(t, x)
}

ContinueWithSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }

  tryDispose(t, this.disposable, this.sink)
  this._startNext(t, x, this.sink)
}

ContinueWithSink.prototype._startNext = function (t, x, sink) {
  try {
    this.disposable = this._continue(this.f, x, sink)
  } catch (e) {
    sink.error(t, e)
  }
}

ContinueWithSink.prototype._continue = function (f, x, sink) {
  return f(x).source.run(sink, this.scheduler)
}

ContinueWithSink.prototype.dispose = function () {
  this.active = false
  return this.disposable.dispose()
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/build.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * @param {*} x value to prepend
 * @param {Stream} stream
 * @returns {Stream} new stream with x prepended
 */
function cons (x, stream) {
  return concat(of(x), stream)
}

/**
* @param {Stream} left
* @param {Stream} right
* @returns {Stream} new stream containing all events in left followed by all
*  events in right.  This *timeshifts* right to the end of left.
*/
function concat (left, right) {
  return continueWith(function () {
    return right
  }, left)
}

// CONCATENATED MODULE: ./node_modules/most/src/sink/IndexSink.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function IndexSink (i, sink) {
  this.sink = sink
  this.index = i
  this.active = true
  this.value = void 0
}

IndexSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.value = x
  this.sink.event(t, this)
}

IndexSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.active = false
  this.sink.end(t, { index: this.index, value: x })
}

IndexSink.prototype.error = Pipe.prototype.error

// CONCATENATED MODULE: ./node_modules/most/src/invoke.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function invoke (f, args) {
  /* eslint complexity: [2,7] */
  switch (args.length) {
    case 0: return f()
    case 1: return f(args[0])
    case 2: return f(args[0], args[1])
    case 3: return f(args[0], args[1], args[2])
    case 4: return f(args[0], args[1], args[2], args[3])
    case 5: return f(args[0], args[1], args[2], args[3], args[4])
    default:
      return f.apply(void 0, args)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/combine.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */










var combine_map = index_es["j" /* map */]
var combine_tail = index_es["o" /* tail */]

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combine (f /*, ...streams */) {
  return combineArray(f, combine_tail(arguments))
}

/**
* Combine latest events from all input streams
* @param {function(...events):*} f function to combine most recent events
* @param {[Stream]} streams most recent events
* @returns {Stream} stream containing the result of applying f to the most recent
*  event of each input stream, whenever a new event arrives on any stream.
*/
function combineArray (f, streams) {
  var l = streams.length
  return l === 0 ? core_empty()
  : l === 1 ? transform_map(f, streams[0])
  : new Stream(combineSources(f, streams))
}

function combineSources (f, streams) {
  return new Combine(f, combine_map(getSource, streams))
}

function getSource (stream) {
  return stream.source
}

function Combine (f, sources) {
  this.f = f
  this.sources = sources
}

Combine.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)

  var mergeSink = new CombineSink(disposables, sinks, sink, this.f)

  for (var indexSink, i = 0; i < l; ++i) {
    indexSink = sinks[i] = new IndexSink(i, mergeSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return dispose_all(disposables)
}

function CombineSink (disposables, sinks, sink, f) {
  this.sink = sink
  this.disposables = disposables
  this.sinks = sinks
  this.f = f

  var l = sinks.length
  this.awaiting = l
  this.values = new Array(l)
  this.hasValue = new Array(l)
  for (var i = 0; i < l; ++i) {
    this.hasValue[i] = false
  }

  this.activeCount = sinks.length
}

CombineSink.prototype.error = Pipe.prototype.error

CombineSink.prototype.event = function (t, indexedValue) {
  var i = indexedValue.index
  var awaiting = this._updateReady(i)

  this.values[i] = indexedValue.value
  if (awaiting === 0) {
    this.sink.event(t, invoke(this.f, this.values))
  }
}

CombineSink.prototype._updateReady = function (index) {
  if (this.awaiting > 0) {
    if (!this.hasValue[index]) {
      this.hasValue[index] = true
      this.awaiting -= 1
    }
  }
  return this.awaiting
}

CombineSink.prototype.end = function (t, indexedValue) {
  tryDispose(t, this.disposables[indexedValue.index], this.sink)
  if (--this.activeCount === 0) {
    this.sink.end(t, indexedValue.value)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/applicative.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Assume fs is a stream containing functions, and apply the latest function
 * in fs to the latest value in xs.
 * fs:         --f---------g--------h------>
 * xs:         -a-------b-------c-------d-->
 * ap(fs, xs): --fa-----fb-gb---gc--hc--hd->
 * @param {Stream} fs stream of functions to apply to the latest x
 * @param {Stream} xs stream of values to which to apply all the latest f
 * @returns {Stream} stream containing all the applications of fs to xs
 */
function ap (fs, xs) {
  return combine(index_es["b" /* apply */], fs, xs)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/transduce.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Transform a stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @param  {Stream} stream stream whose events will be passed through the
 *  transducer
 * @return {Stream} stream of events transformed by the transducer
 */
function transduce (transducer, stream) {
  return new Stream(new Transduce(transducer, stream.source))
}

function Transduce (transducer, source) {
  this.transducer = transducer
  this.source = source
}

Transduce.prototype.run = function (sink, scheduler) {
  var xf = this.transducer(new Transformer(sink))
  return this.source.run(new TransduceSink(getTxHandler(xf), sink), scheduler)
}

function TransduceSink (adapter, sink) {
  this.xf = adapter
  this.sink = sink
}

TransduceSink.prototype.event = function (t, x) {
  var next = this.xf.step(t, x)

  return this.xf.isReduced(next)
    ? this.sink.end(t, this.xf.getResult(next))
    : next
}

TransduceSink.prototype.end = function (t, x) {
  return this.xf.result(x)
}

TransduceSink.prototype.error = function (t, e) {
  return this.sink.error(t, e)
}

function Transformer (sink) {
  this.time = -Infinity
  this.sink = sink
}

Transformer.prototype['@@transducer/init'] = Transformer.prototype.init = function () {}

Transformer.prototype['@@transducer/step'] = Transformer.prototype.step = function (t, x) {
  if (!isNaN(t)) {
    this.time = Math.max(t, this.time)
  }
  return this.sink.event(this.time, x)
}

Transformer.prototype['@@transducer/result'] = Transformer.prototype.result = function (x) {
  return this.sink.end(this.time, x)
}

/**
* Given an object supporting the new or legacy transducer protocol,
* create an adapter for it.
* @param {object} tx transform
* @returns {TxAdapter|LegacyTxAdapter}
*/
function getTxHandler (tx) {
  return typeof tx['@@transducer/step'] === 'function'
    ? new TxAdapter(tx)
    : new LegacyTxAdapter(tx)
}

/**
* Adapter for new official transducer protocol
* @param {object} tx transform
* @constructor
*/
function TxAdapter (tx) {
  this.tx = tx
}

TxAdapter.prototype.step = function (t, x) {
  return this.tx['@@transducer/step'](t, x)
}
TxAdapter.prototype.result = function (x) {
  return this.tx['@@transducer/result'](x)
}
TxAdapter.prototype.isReduced = function (x) {
  return x != null && x['@@transducer/reduced']
}
TxAdapter.prototype.getResult = function (x) {
  return x['@@transducer/value']
}

/**
* Adapter for older transducer protocol
* @param {object} tx transform
* @constructor
*/
function LegacyTxAdapter (tx) {
  this.tx = tx
}

LegacyTxAdapter.prototype.step = function (t, x) {
  return this.tx.step(t, x)
}
LegacyTxAdapter.prototype.result = function (x) {
  return this.tx.result(x)
}
LegacyTxAdapter.prototype.isReduced = function (x) {
  return x != null && x.__transducers_reduced__
}
LegacyTxAdapter.prototype.getResult = function (x) {
  return x.value
}

// CONCATENATED MODULE: ./node_modules/most/src/LinkedList.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Doubly linked list
 * @constructor
 */
function LinkedList () {
  this.head = null
  this.length = 0
}

/**
 * Add a node to the end of the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to add
 */
LinkedList.prototype.add = function (x) {
  if (this.head !== null) {
    this.head.prev = x
    x.next = this.head
  }
  this.head = x
  ++this.length
}

/**
 * Remove the provided node from the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to remove
 */
LinkedList.prototype.remove = function (x) { // eslint-disable-line  complexity
  --this.length
  if (x === this.head) {
    this.head = this.head.next
  }
  if (x.next !== null) {
    x.next.prev = x.prev
    x.next = null
  }
  if (x.prev !== null) {
    x.prev.next = x.next
    x.prev = null
  }
}

/**
 * @returns {boolean} true iff there are no nodes in the list
 */
LinkedList.prototype.isEmpty = function () {
  return this.length === 0
}

/**
 * Dispose all nodes
 * @returns {Promise} promise that fulfills when all nodes have been disposed,
 *  or rejects if an error occurs while disposing
 */
LinkedList.prototype.dispose = function () {
  if (this.isEmpty()) {
    return Promise.resolve()
  }

  var promises = []
  var x = this.head
  this.head = null
  this.length = 0

  while (x !== null) {
    promises.push(x.dispose())
    x = x.next
  }

  return Promise.all(promises)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/mergeConcurrently.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function mergeConcurrently (concurrency, stream) {
  return mergeMapConcurrently(index_es["h" /* id */], concurrency, stream)
}

function mergeMapConcurrently (f, concurrency, stream) {
  return new Stream(new MergeConcurrently(f, concurrency, stream.source))
}

function MergeConcurrently (f, concurrency, source) {
  this.f = f
  this.concurrency = concurrency
  this.source = source
}

MergeConcurrently.prototype.run = function (sink, scheduler) {
  return new Outer(this.f, this.concurrency, this.source, sink, scheduler)
}

function Outer (f, concurrency, source, sink, scheduler) {
  this.f = f
  this.concurrency = concurrency
  this.sink = sink
  this.scheduler = scheduler
  this.pending = []
  this.current = new LinkedList()
  this.disposable = once(source.run(this, scheduler))
  this.active = true
}

Outer.prototype.event = function (t, x) {
  this._addInner(t, x)
}

Outer.prototype._addInner = function (t, x) {
  if (this.current.length < this.concurrency) {
    this._startInner(t, x)
  } else {
    this.pending.push(x)
  }
}

Outer.prototype._startInner = function (t, x) {
  try {
    this._initInner(t, x)
  } catch (e) {
    this.error(t, e)
  }
}

Outer.prototype._initInner = function (t, x) {
  var innerSink = new Inner(t, this, this.sink)
  innerSink.disposable = mapAndRun(this.f, x, innerSink, this.scheduler)
  this.current.add(innerSink)
}

function mapAndRun (f, x, sink, scheduler) {
  return f(x).source.run(sink, scheduler)
}

Outer.prototype.end = function (t, x) {
  this.active = false
  tryDispose(t, this.disposable, this.sink)
  this._checkEnd(t, x)
}

Outer.prototype.error = function (t, e) {
  this.active = false
  this.sink.error(t, e)
}

Outer.prototype.dispose = function () {
  this.active = false
  this.pending.length = 0
  return Promise.all([this.disposable.dispose(), this.current.dispose()])
}

Outer.prototype._endInner = function (t, x, inner) {
  this.current.remove(inner)
  tryDispose(t, inner, this)

  if (this.pending.length === 0) {
    this._checkEnd(t, x)
  } else {
    this._startInner(t, this.pending.shift())
  }
}

Outer.prototype._checkEnd = function (t, x) {
  if (!this.active && this.current.isEmpty()) {
    this.sink.end(t, x)
  }
}

function Inner (time, outer, sink) {
  this.prev = this.next = null
  this.time = time
  this.outer = outer
  this.sink = sink
  this.disposable = void 0
}

Inner.prototype.event = function (t, x) {
  this.sink.event(Math.max(t, this.time), x)
}

Inner.prototype.end = function (t, x) {
  this.outer._endInner(Math.max(t, this.time), x, this)
}

Inner.prototype.error = function (t, e) {
  this.outer.error(Math.max(t, this.time), e)
}

Inner.prototype.dispose = function () {
  return this.disposable.dispose()
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/flatMap.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function flatMap (f, stream) {
  return mergeMapConcurrently(f, Infinity, stream)
}

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @param {Stream<Stream<X>>} stream stream of streams
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
function join (stream) {
  return mergeConcurrently(Infinity, stream)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/concatMap.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Map each value in stream to a new stream, and concatenate them all
 * stream:              -a---b---cX
 * f(a):                 1-1-1-1X
 * f(b):                        -2-2-2-2X
 * f(c):                                -3-3-3-3X
 * stream.concatMap(f): -1-1-1-1-2-2-2-2-3-3-3-3X
 * @param {function(x:*):Stream} f function to map each value to a stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function concatMap (f, stream) {
  return mergeMapConcurrently(f, 1, stream)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/merge.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */








var copy = index_es["e" /* copy */]
var merge_reduce = index_es["k" /* reduce */]

/**
 * @returns {Stream} stream containing events from all streams in the argument
 * list in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function merge (/* ...streams */) {
  return mergeArray(copy(arguments))
}

/**
 * @param {Array} streams array of stream to merge
 * @returns {Stream} stream containing events from all input observables
 * in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function mergeArray (streams) {
  var l = streams.length
  return l === 0 ? core_empty()
    : l === 1 ? streams[0]
    : new Stream(mergeSources(streams))
}

/**
 * This implements fusion/flattening for merge.  It will
 * fuse adjacent merge operations.  For example:
 * - a.merge(b).merge(c) effectively becomes merge(a, b, c)
 * - merge(a, merge(b, c)) effectively becomes merge(a, b, c)
 * It does this by concatenating the sources arrays of
 * any nested Merge sources, in effect "flattening" nested
 * merge operations into a single merge.
 */
function mergeSources (streams) {
  return new Merge(merge_reduce(appendSources, [], streams))
}

function appendSources (sources, stream) {
  var source = stream.source
  return source instanceof Merge
    ? sources.concat(source.sources)
    : sources.concat(source)
}

function Merge (sources) {
  this.sources = sources
}

Merge.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)

  var mergeSink = new MergeSink(disposables, sinks, sink)

  for (var indexSink, i = 0; i < l; ++i) {
    indexSink = sinks[i] = new IndexSink(i, mergeSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return dispose_all(disposables)
}

function MergeSink (disposables, sinks, sink) {
  this.sink = sink
  this.disposables = disposables
  this.activeCount = sinks.length
}

MergeSink.prototype.error = Pipe.prototype.error

MergeSink.prototype.event = function (t, indexValue) {
  this.sink.event(t, indexValue.value)
}

MergeSink.prototype.end = function (t, indexedValue) {
  tryDispose(t, this.disposables[indexedValue.index], this.sink)
  if (--this.activeCount === 0) {
    this.sink.end(t, indexedValue.value)
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/sample.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * When an event arrives on sampler, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @param {Stream} sampler streams will be sampled whenever an event arrives
 *  on sampler
 * @returns {Stream} stream of sampled and transformed values
 */
function sample (f, sampler /*, ...streams */) {
  return sampleArray(f, sampler, index_es["f" /* drop */](2, arguments))
}

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  stream's latest value will be propagated
 * @param {Stream} stream stream of values
 * @returns {Stream} sampled stream of values
 */
function sampleWith (sampler, stream) {
  return new Stream(new Sampler(index_es["h" /* id */], sampler.source, [stream.source]))
}

function sampleArray (f, sampler, streams) {
  return new Stream(new Sampler(f, sampler.source, index_es["j" /* map */](sample_getSource, streams)))
}

function sample_getSource (stream) {
  return stream.source
}

function Sampler (f, sampler, sources) {
  this.f = f
  this.sampler = sampler
  this.sources = sources
}

Sampler.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l + 1)
  var sinks = new Array(l)

  var sampleSink = new SampleSink(this.f, sinks, sink)

  for (var hold, i = 0; i < l; ++i) {
    hold = sinks[i] = new Hold(sampleSink)
    disposables[i] = this.sources[i].run(hold, scheduler)
  }

  disposables[i] = this.sampler.run(sampleSink, scheduler)

  return dispose_all(disposables)
}

function Hold (sink) {
  this.sink = sink
  this.hasValue = false
}

Hold.prototype.event = function (t, x) {
  this.value = x
  this.hasValue = true
  this.sink._notify(this)
}

Hold.prototype.end = function () {}
Hold.prototype.error = Pipe.prototype.error

function SampleSink (f, sinks, sink) {
  this.f = f
  this.sinks = sinks
  this.sink = sink
  this.active = false
}

SampleSink.prototype._notify = function () {
  if (!this.active) {
    this.active = this.sinks.every(hasValue)
  }
}

SampleSink.prototype.event = function (t) {
  if (this.active) {
    this.sink.event(t, invoke(this.f, index_es["j" /* map */](getValue, this.sinks)))
  }
}

SampleSink.prototype.end = Pipe.prototype.end
SampleSink.prototype.error = Pipe.prototype.error

function hasValue (hold) {
  return hold.hasValue
}

function getValue (hold) {
  return hold.value
}

// CONCATENATED MODULE: ./node_modules/most/src/Queue.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

// Based on https://github.com/petkaantonov/deque

function Queue (capPow2) {
  this._capacity = capPow2 || 32
  this._length = 0
  this._head = 0
}

Queue.prototype.push = function (x) {
  var len = this._length
  this._checkCapacity(len + 1)

  var i = (this._head + len) & (this._capacity - 1)
  this[i] = x
  this._length = len + 1
}

Queue.prototype.shift = function () {
  var head = this._head
  var x = this[head]

  this[head] = void 0
  this._head = (head + 1) & (this._capacity - 1)
  this._length--
  return x
}

Queue.prototype.isEmpty = function () {
  return this._length === 0
}

Queue.prototype.length = function () {
  return this._length
}

Queue.prototype._checkCapacity = function (size) {
  if (this._capacity < size) {
    this._ensureCapacity(this._capacity << 1)
  }
}

Queue.prototype._ensureCapacity = function (capacity) {
  var oldCapacity = this._capacity
  this._capacity = capacity

  var last = this._head + this._length

  if (last > oldCapacity) {
    Queue_copy(this, 0, this, oldCapacity, last & (oldCapacity - 1))
  }
}

function Queue_copy (src, srcIndex, dst, dstIndex, len) {
  for (var j = 0; j < len; ++j) {
    dst[j + dstIndex] = src[j + srcIndex]
    src[j + srcIndex] = void 0
  }
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/zip.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */











var zip_map = index_es["j" /* map */]
var zip_tail = index_es["o" /* tail */]

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zip (f /*, ...streams */) {
  return zipArray(f, zip_tail(arguments))
}

/**
* Combine streams pairwise (or tuple-wise) by index by applying f to values
* at corresponding indices.  The returned stream ends when any of the input
* streams ends.
* @param {function} f function to combine values
* @param {[Stream]} streams streams to zip using f
* @returns {Stream} new stream with items at corresponding indices combined
*  using f
*/
function zipArray (f, streams) {
  return streams.length === 0 ? core_empty()
: streams.length === 1 ? transform_map(f, streams[0])
: new Stream(new Zip(f, zip_map(zip_getSource, streams)))
}

function zip_getSource (stream) {
  return stream.source
}

function Zip (f, sources) {
  this.f = f
  this.sources = sources
}

Zip.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)
  var buffers = new Array(l)

  var zipSink = new ZipSink(this.f, buffers, sinks, sink)

  for (var indexSink, i = 0; i < l; ++i) {
    buffers[i] = new Queue()
    indexSink = sinks[i] = new IndexSink(i, zipSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return dispose_all(disposables)
}

function ZipSink (f, buffers, sinks, sink) {
  this.f = f
  this.sinks = sinks
  this.sink = sink
  this.buffers = buffers
}

ZipSink.prototype.event = function (t, indexedValue) { // eslint-disable-line complexity
  var buffers = this.buffers
  var buffer = buffers[indexedValue.index]

  buffer.push(indexedValue.value)

  if (buffer.length() === 1) {
    if (!ready(this.buffers)) {
      return
    }

    emitZipped(this.f, t, buffers, this.sink)

    if (ended(this.buffers, this.sinks)) {
      this.sink.end(t, void 0)
    }
  }
}

ZipSink.prototype.end = function (t, indexedValue) {
  var buffer = this.buffers[indexedValue.index]
  if (buffer.isEmpty()) {
    this.sink.end(t, indexedValue.value)
  }
}

ZipSink.prototype.error = Pipe.prototype.error

function emitZipped (f, t, buffers, sink) {
  sink.event(t, invoke(f, zip_map(head, buffers)))
}

function head (buffer) {
  return buffer.shift()
}

function ended (buffers, sinks) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty() && !sinks[i].active) {
      return true
    }
  }
  return false
}

function ready (buffers) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty()) {
      return false
    }
  }
  return true
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/switch.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @param {Stream} stream of streams on which to switch
 * @returns {Stream} switching stream
 */
function switchLatest (stream) {
  return new Stream(new Switch(stream.source))
}



function Switch (source) {
  this.source = source
}

Switch.prototype.run = function (sink, scheduler) {
  var switchSink = new SwitchSink(sink, scheduler)
  return dispose_all([switchSink, this.source.run(switchSink, scheduler)])
}

function SwitchSink (sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
  this.current = null
  this.ended = false
}

SwitchSink.prototype.event = function (t, stream) {
  this._disposeCurrent(t) // TODO: capture the result of this dispose
  this.current = new Segment(t, Infinity, this, this.sink)
  this.current.disposable = stream.source.run(this.current, this.scheduler)
}

SwitchSink.prototype.end = function (t, x) {
  this.ended = true
  this._checkEnd(t, x)
}

SwitchSink.prototype.error = function (t, e) {
  this.ended = true
  this.sink.error(t, e)
}

SwitchSink.prototype.dispose = function () {
  return this._disposeCurrent(this.scheduler.now())
}

SwitchSink.prototype._disposeCurrent = function (t) {
  if (this.current !== null) {
    return this.current._dispose(t)
  }
}

SwitchSink.prototype._disposeInner = function (t, inner) {
  inner._dispose(t) // TODO: capture the result of this dispose
  if (inner === this.current) {
    this.current = null
  }
}

SwitchSink.prototype._checkEnd = function (t, x) {
  if (this.ended && this.current === null) {
    this.sink.end(t, x)
  }
}

SwitchSink.prototype._endInner = function (t, x, inner) {
  this._disposeInner(t, inner)
  this._checkEnd(t, x)
}

SwitchSink.prototype._errorInner = function (t, e, inner) {
  this._disposeInner(t, inner)
  this.sink.error(t, e)
}

function Segment (min, max, outer, sink) {
  this.min = min
  this.max = max
  this.outer = outer
  this.sink = sink
  this.disposable = empty()
}

Segment.prototype.event = function (t, x) {
  if (t < this.max) {
    this.sink.event(Math.max(t, this.min), x)
  }
}

Segment.prototype.end = function (t, x) {
  this.outer._endInner(Math.max(t, this.min), x, this)
}

Segment.prototype.error = function (t, e) {
  this.outer._errorInner(Math.max(t, this.min), e, this)
}

Segment.prototype._dispose = function (t) {
  this.max = t
  tryDispose(t, this.disposable, this.sink)
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/filter.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Retain only items matching a predicate
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @param {Stream} stream stream to filter
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
function filter (p, stream) {
  return new Stream(Filter.create(p, stream.source))
}

/**
 * Skip repeated events, using === to detect duplicates
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeats (stream) {
  return skipRepeatsWith(same, stream)
}

/**
 * Skip repeated events using the provided equals function to detect duplicates
 * @param {function(a:*, b:*):boolean} equals optional function to compare items
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeatsWith (equals, stream) {
  return new Stream(new SkipRepeats(equals, stream.source))
}

function SkipRepeats (equals, source) {
  this.equals = equals
  this.source = source
}

SkipRepeats.prototype.run = function (sink, scheduler) {
  return this.source.run(new SkipRepeatsSink(this.equals, sink), scheduler)
}

function SkipRepeatsSink (equals, sink) {
  this.equals = equals
  this.sink = sink
  this.value = void 0
  this.init = true
}

SkipRepeatsSink.prototype.end = Pipe.prototype.end
SkipRepeatsSink.prototype.error = Pipe.prototype.error

SkipRepeatsSink.prototype.event = function (t, x) {
  if (this.init) {
    this.init = false
    this.value = x
    this.sink.event(t, x)
  } else if (!this.equals(this.value, x)) {
    this.value = x
    this.sink.event(t, x)
  }
}

function same (a, b) {
  return a === b
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/slice.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream containing only up to the first n items from stream
 */
function take (n, stream) {
  return slice(0, n, stream)
}

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream with the first n items removed
 */
function skip (n, stream) {
  return slice(n, Infinity, stream)
}

/**
 * Slice a stream by index. Negative start/end indexes are not supported
 * @param {number} start
 * @param {number} end
 * @param {Stream} stream
 * @returns {Stream} stream containing items where start <= index < end
 */
function slice (start, end, stream) {
  return end <= start ? core_empty()
    : new Stream(sliceSource(start, end, stream.source))
}

function sliceSource (start, end, source) {
  return source instanceof Map ? commuteMapSlice(start, end, source)
    : source instanceof Slice ? fuseSlice(start, end, source)
    : new Slice(start, end, source)
}

function commuteMapSlice (start, end, source) {
  return Map.create(source.f, sliceSource(start, end, source.source))
}

function fuseSlice (start, end, source) {
  start += source.min
  end = Math.min(end + source.min, source.max)
  return new Slice(start, end, source.source)
}

function Slice (min, max, source) {
  this.source = source
  this.min = min
  this.max = max
}

Slice.prototype.run = function (sink, scheduler) {
  var disposable = settable()
  var sliceSink = new SliceSink(this.min, this.max - this.min, sink, disposable)

  disposable.setDisposable(this.source.run(sliceSink, scheduler))
  return disposable
}

function SliceSink (skip, take, sink, disposable) {
  this.sink = sink
  this.skip = skip
  this.take = take
  this.disposable = disposable
}

SliceSink.prototype.end = Pipe.prototype.end
SliceSink.prototype.error = Pipe.prototype.error

SliceSink.prototype.event = function (t, x) {
  /* eslint complexity: [1, 4] */
  if (this.skip > 0) {
    this.skip -= 1
    return
  }

  if (this.take === 0) {
    return
  }

  this.take -= 1
  this.sink.event(t, x)
  if (this.take === 0) {
    this.disposable.dispose()
    this.sink.end(t, x)
  }
}

function takeWhile (p, stream) {
  return new Stream(new TakeWhile(p, stream.source))
}

function TakeWhile (p, source) {
  this.p = p
  this.source = source
}

TakeWhile.prototype.run = function (sink, scheduler) {
  var disposable = settable()
  var takeWhileSink = new TakeWhileSink(this.p, sink, disposable)

  disposable.setDisposable(this.source.run(takeWhileSink, scheduler))
  return disposable
}

function TakeWhileSink (p, sink, disposable) {
  this.p = p
  this.sink = sink
  this.active = true
  this.disposable = disposable
}

TakeWhileSink.prototype.end = Pipe.prototype.end
TakeWhileSink.prototype.error = Pipe.prototype.error

TakeWhileSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }

  var p = this.p
  this.active = p(x)
  if (this.active) {
    this.sink.event(t, x)
  } else {
    this.disposable.dispose()
    this.sink.end(t, x)
  }
}

function skipWhile (p, stream) {
  return new Stream(new SkipWhile(p, stream.source))
}

function SkipWhile (p, source) {
  this.p = p
  this.source = source
}

SkipWhile.prototype.run = function (sink, scheduler) {
  return this.source.run(new SkipWhileSink(this.p, sink), scheduler)
}

function SkipWhileSink (p, sink) {
  this.p = p
  this.sink = sink
  this.skipping = true
}

SkipWhileSink.prototype.end = Pipe.prototype.end
SkipWhileSink.prototype.error = Pipe.prototype.error

SkipWhileSink.prototype.event = function (t, x) {
  if (this.skipping) {
    var p = this.p
    this.skipping = p(x)
    if (this.skipping) {
      return
    }
  }

  this.sink.event(t, x)
}

function skipAfter (p, stream) {
  return new Stream(new SkipAfter(p, stream.source))
}

function SkipAfter (p, source) {
  this.p = p
  this.source = source
}

SkipAfter.prototype.run = function run (sink, scheduler) {
  return this.source.run(new SkipAfterSink(this.p, sink), scheduler)
}

function SkipAfterSink (p, sink) {
  this.p = p
  this.sink = sink
  this.skipping = false
}

SkipAfterSink.prototype.event = function event (t, x) {
  if (this.skipping) {
    return
  }

  var p = this.p
  this.skipping = p(x)
  this.sink.event(t, x)

  if (this.skipping) {
    this.sink.end(t, x)
  }
}

SkipAfterSink.prototype.end = Pipe.prototype.end
SkipAfterSink.prototype.error = Pipe.prototype.error

// CONCATENATED MODULE: ./node_modules/most/src/combinator/timeslice.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function takeUntil (signal, stream) {
  return new Stream(new Until(signal.source, stream.source))
}

function skipUntil (signal, stream) {
  return new Stream(new Since(signal.source, stream.source))
}

function during (timeWindow, stream) {
  return takeUntil(join(timeWindow), skipUntil(timeWindow, stream))
}

function Until (maxSignal, source) {
  this.maxSignal = maxSignal
  this.source = source
}

Until.prototype.run = function (sink, scheduler) {
  var min = new Bound(-Infinity, sink)
  var max = new UpperBound(this.maxSignal, sink, scheduler)
  var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler)

  return dispose_all([min, max, disposable])
}

function Since (minSignal, source) {
  this.minSignal = minSignal
  this.source = source
}

Since.prototype.run = function (sink, scheduler) {
  var min = new LowerBound(this.minSignal, sink, scheduler)
  var max = new Bound(Infinity, sink)
  var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler)

  return dispose_all([min, max, disposable])
}

function Bound (value, sink) {
  this.value = value
  this.sink = sink
}

Bound.prototype.error = Pipe.prototype.error
Bound.prototype.event = noop
Bound.prototype.end = noop
Bound.prototype.dispose = noop

function TimeWindowSink (min, max, sink) {
  this.min = min
  this.max = max
  this.sink = sink
}

TimeWindowSink.prototype.event = function (t, x) {
  if (t >= this.min.value && t < this.max.value) {
    this.sink.event(t, x)
  }
}

TimeWindowSink.prototype.error = Pipe.prototype.error
TimeWindowSink.prototype.end = Pipe.prototype.end

function LowerBound (signal, sink, scheduler) {
  this.value = Infinity
  this.sink = sink
  this.disposable = signal.run(this, scheduler)
}

LowerBound.prototype.event = function (t /*, x */) {
  if (t < this.value) {
    this.value = t
  }
}

LowerBound.prototype.end = noop
LowerBound.prototype.error = Pipe.prototype.error

LowerBound.prototype.dispose = function () {
  return this.disposable.dispose()
}

function UpperBound (signal, sink, scheduler) {
  this.value = Infinity
  this.sink = sink
  this.disposable = signal.run(this, scheduler)
}

UpperBound.prototype.event = function (t, x) {
  if (t < this.value) {
    this.value = t
    this.sink.end(t, x)
  }
}

UpperBound.prototype.end = noop
UpperBound.prototype.error = Pipe.prototype.error

UpperBound.prototype.dispose = function () {
  return this.disposable.dispose()
}

function noop () {}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/delay.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






/**
 * @param {Number} delayTime milliseconds to delay each item
 * @param {Stream} stream
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
function delay_delay (delayTime, stream) {
  return delayTime <= 0 ? stream
    : new Stream(new Delay(delayTime, stream.source))
}

function Delay (dt, source) {
  this.dt = dt
  this.source = source
}

Delay.prototype.run = function (sink, scheduler) {
  var delaySink = new DelaySink(this.dt, sink, scheduler)
  return dispose_all([delaySink, this.source.run(delaySink, scheduler)])
}

function DelaySink (dt, sink, scheduler) {
  this.dt = dt
  this.sink = sink
  this.scheduler = scheduler
}

DelaySink.prototype.dispose = function () {
  var self = this
  this.scheduler.cancelAll(function (scheduledTask) {
    return scheduledTask.task.sink === self.sink
  })
}

DelaySink.prototype.event = function (t, x) {
  this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink))
}

DelaySink.prototype.end = function (t, x) {
  this.scheduler.delay(this.dt, PropagateTask.end(x, this.sink))
}

DelaySink.prototype.error = Pipe.prototype.error

// CONCATENATED MODULE: ./node_modules/most/src/combinator/timestamp.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function timestamp (stream) {
  return new Stream(new Timestamp(stream.source))
}

function Timestamp (source) {
  this.source = source
}

Timestamp.prototype.run = function (sink, scheduler) {
  return this.source.run(new TimestampSink(sink), scheduler)
}

function TimestampSink (sink) {
  this.sink = sink
}

TimestampSink.prototype.end = Pipe.prototype.end
TimestampSink.prototype.error = Pipe.prototype.error

TimestampSink.prototype.event = function (t, x) {
  this.sink.event(t, { time: t, value: x })
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/limit.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Limit the rate of events by suppressing events that occur too often
 * @param {Number} period time to suppress events
 * @param {Stream} stream
 * @returns {Stream}
 */
function throttle (period, stream) {
  return new Stream(throttleSource(period, stream.source))
}

function throttleSource (period, source) {
  return source instanceof Map ? commuteMapThrottle(period, source)
    : source instanceof Throttle ? fuseThrottle(period, source)
    : new Throttle(period, source)
}

function commuteMapThrottle (period, source) {
  return Map.create(source.f, throttleSource(period, source.source))
}

function fuseThrottle (period, source) {
  return new Throttle(Math.max(period, source.period), source.source)
}

function Throttle (period, source) {
  this.period = period
  this.source = source
}

Throttle.prototype.run = function (sink, scheduler) {
  return this.source.run(new ThrottleSink(this.period, sink), scheduler)
}

function ThrottleSink (period, sink) {
  this.time = 0
  this.period = period
  this.sink = sink
}

ThrottleSink.prototype.event = function (t, x) {
  if (t >= this.time) {
    this.time = t + this.period
    this.sink.event(t, x)
  }
}

ThrottleSink.prototype.end = Pipe.prototype.end

ThrottleSink.prototype.error = Pipe.prototype.error

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * @param {Number} period events occurring more frequently than this
 *  will be suppressed
 * @param {Stream} stream stream to debounce
 * @returns {Stream} new debounced stream
 */
function debounce (period, stream) {
  return new Stream(new Debounce(period, stream.source))
}

function Debounce (dt, source) {
  this.dt = dt
  this.source = source
}

Debounce.prototype.run = function (sink, scheduler) {
  return new DebounceSink(this.dt, this.source, sink, scheduler)
}

function DebounceSink (dt, source, sink, scheduler) {
  this.dt = dt
  this.sink = sink
  this.scheduler = scheduler
  this.value = void 0
  this.timer = null
  this.disposable = source.run(this, scheduler)
}

DebounceSink.prototype.event = function (t, x) {
  this._clearTimer()
  this.value = x
  this.timer = this.scheduler.delay(this.dt, new DebounceTask(this, x))
}

DebounceSink.prototype._event = function (t, x) {
  this._clearTimer()
  this.sink.event(t, x)
}

DebounceSink.prototype.end = function (t, x) {
  if (this._clearTimer()) {
    this.sink.event(t, this.value)
    this.value = void 0
  }
  this.sink.end(t, x)
}

DebounceSink.prototype.error = function (t, x) {
  this._clearTimer()
  this.sink.error(t, x)
}

DebounceSink.prototype.dispose = function () {
  this._clearTimer()
  return this.disposable.dispose()
}

DebounceSink.prototype._clearTimer = function () {
  if (this.timer === null) {
    return false
  }
  this.timer.dispose()
  this.timer = null
  return true
}

function DebounceTask (debounce, value) {
  this.debounce = debounce
  this.value = value
}

DebounceTask.prototype.run = function (t) {
  this.debounce._event(t, this.value)
}

DebounceTask.prototype.error = function (t, e) {
  this.debounce.error(t, e)
}

DebounceTask.prototype.dispose = function () {}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/promises.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Create a stream containing only the promise's fulfillment
 * value at the time it fulfills.
 * @param {Promise<T>} p promise
 * @return {Stream<T>} stream containing promise's fulfillment value.
 *  If the promise rejects, the stream will error
 */
function fromPromise (p) {
  return awaitPromises(of(p))
}

/**
 * Turn a Stream<Promise<T>> into Stream<T> by awaiting each promise.
 * Event order is preserved.
 * @param {Stream<Promise<T>>} stream
 * @return {Stream<T>} stream of fulfillment values.  The stream will
 * error if any promise rejects.
 */
function awaitPromises (stream) {
  return new Stream(new Await(stream.source))
}

function Await (source) {
  this.source = source
}

Await.prototype.run = function (sink, scheduler) {
  return new AwaitSink(this.source, sink, scheduler)
}

function AwaitSink (source, sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
  this.queue = Promise.resolve()
  this.disposable = source.run(this, scheduler)
  this.active = true
  var self = this

  // Pre-create closures, to avoid creating them per event
  this._eventBound = function (x) {
    if (!self.active) return
    self.sink.event(self.scheduler.now(), x)
  }

  this._endBound = function (x) {
    if (!self.active) return
    self.sink.end(self.scheduler.now(), x)
  }

  this._errorBound = function (e) {
    self.sink.error(self.scheduler.now(), e)
  }
}

AwaitSink.prototype.dispose = function () {
  this.active = false
  return this.disposable.dispose()
}

AwaitSink.prototype.event = function (t, promise) {
  var self = this
  this.queue = this.queue.then(function () {
    return self._event(promise)
  }).catch(this._errorBound)
}

AwaitSink.prototype.end = function (t, x) {
  var self = this
  this.queue = this.queue.then(function () {
    return self._end(x)
  }).catch(this._errorBound)
}

AwaitSink.prototype.error = function (t, e) {
  var self = this
  // Don't resolve error values, propagate directly
  this.queue = this.queue.then(function () {
    return self._errorBound(e)
  }).catch(fatalError)
}

AwaitSink.prototype._event = function (promise) {
  return promise.then(this._eventBound)
}

AwaitSink.prototype._end = function (x) {
  return Promise.resolve(x).then(this._endBound)
}

// CONCATENATED MODULE: ./node_modules/most/src/sink/SafeSink.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function SafeSink (sink) {
  this.sink = sink
  this.active = true
}

SafeSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.sink.event(t, x)
}

SafeSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.disable()
  this.sink.end(t, x)
}

SafeSink.prototype.error = function (t, e) {
  this.disable()
  this.sink.error(t, e)
}

SafeSink.prototype.disable = function () {
  this.active = false
  return this.sink
}

// CONCATENATED MODULE: ./node_modules/most/src/combinator/errors.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * If stream encounters an error, recover and continue with items from stream
 * returned by f.
 * @param {function(error:*):Stream} f function which returns a new stream
 * @param {Stream} stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
function recoverWith (f, stream) {
  return new Stream(new RecoverWith(f, stream.source))
}

var flatMapError = recoverWith

/**
 * Create a stream containing only an error
 * @param {*} e error value, preferably an Error or Error subtype
 * @returns {Stream} new stream containing only an error
 */
function errors_throwError (e) {
  return new Stream(new ErrorSource(e))
}

function ErrorSource (e) {
  this.value = e
}

ErrorSource.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new PropagateTask(runError, this.value, sink))
}

function runError (t, e, sink) {
  sink.error(t, e)
}

function RecoverWith (f, source) {
  this.f = f
  this.source = source
}

RecoverWith.prototype.run = function (sink, scheduler) {
  return new RecoverWithSink(this.f, this.source, sink, scheduler)
}

function RecoverWithSink (f, source, sink, scheduler) {
  this.f = f
  this.sink = new SafeSink(sink)
  this.scheduler = scheduler
  this.disposable = source.run(this, scheduler)
}

RecoverWithSink.prototype.event = function (t, x) {
  tryEvent(t, x, this.sink)
}

RecoverWithSink.prototype.end = function (t, x) {
  tryEnd(t, x, this.sink)
}

RecoverWithSink.prototype.error = function (t, e) {
  var nextSink = this.sink.disable()

  tryDispose(t, this.disposable, this.sink)
  this._startNext(t, e, nextSink)
}

RecoverWithSink.prototype._startNext = function (t, x, sink) {
  try {
    this.disposable = this._continue(this.f, x, sink)
  } catch (e) {
    sink.error(t, e)
  }
}

RecoverWithSink.prototype._continue = function (f, x, sink) {
  var stream = f(x)
  return stream.source.run(sink, this.scheduler)
}

RecoverWithSink.prototype.dispose = function () {
  return this.disposable.dispose()
}

// EXTERNAL MODULE: ./node_modules/@most/multicast/dist/multicast.es.js
var multicast_es = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/most/src/index.js
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/* eslint import/first: 0 */








/**
 * Core stream type
 * @type {Stream}
 */


// Add of and empty to constructor for fantasy-land compat
Stream.of = of
Stream.empty = core_empty
// Add from to constructor for ES Observable compat
Stream.from = from


// -----------------------------------------------------------------------
// Draft ES Observable proposal interop
// https://github.com/zenparsing/es-observable



Stream.prototype.subscribe = function (subscriber) {
  return subscribe(subscriber, this)
}

Stream.prototype[es["a" /* default */]] = function () {
  return this
}

// -----------------------------------------------------------------------
// Fluent adapter



/**
 * Adapt a functional stream transform to fluent style.
 * It applies f to the this stream object
 * @param  {function(s: Stream): Stream} f function that
 * receives the stream itself and must return a new stream
 * @return {Stream}
 */
Stream.prototype.thru = function (f) {
  return thru(f, this)
}

// -----------------------------------------------------------------------
// Adapting other sources

/**
 * Create a stream of events from the supplied EventTarget or EventEmitter
 * @param {String} event event name
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter. The source
 *  must support either addEventListener/removeEventListener (w3c EventTarget:
 *  http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget),
 *  or addListener/removeListener (node EventEmitter: http://nodejs.org/api/events.html)
 * @returns {Stream} stream of events of the specified type from the source
 */


// -----------------------------------------------------------------------
// Observing





/**
 * Process all the events in the stream
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.observe = Stream.prototype.forEach = function (f) {
  return observe(f, this)
}

/**
 * Consume all events in the stream, without providing a function to process each.
 * This causes a stream to become active and begin emitting events, and is useful
 * in cases where all processing has been setup upstream via other combinators, and
 * there is no need to process the terminal events.
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.drain = function () {
  return drain(this)
}

// -------------------------------------------------------





/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
Stream.prototype.loop = function (stepper, seed) {
  return loop(stepper, seed, this)
}

// -------------------------------------------------------





/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @returns {Stream} new stream containing successive reduce results
 */
Stream.prototype.scan = function (f, initial) {
  return scan(f, initial, this)
}

/**
 * Reduce the stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial optional initial value
 * @returns {Promise} promise for the file result of the reduce
 */
Stream.prototype.reduce = function (f, initial) {
  return reduce(f, initial, this)
}

// -----------------------------------------------------------------------
// Building and extending








/**
 * @param {Stream} tail
 * @returns {Stream} new stream containing all items in this followed by
 *  all items in tail
 */
Stream.prototype.concat = function (tail) {
  return concat(this, tail)
}

/**
 * @param {*} x value to prepend
 * @returns {Stream} a new stream with x prepended
 */
Stream.prototype.startWith = function (x) {
  return cons(x, this)
}

// -----------------------------------------------------------------------
// Transforming






/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @returns {Stream} stream containing items transformed by f
 */
Stream.prototype.map = function (f) {
  return transform_map(f, this)
}

/**
 * Assume this stream contains functions, and apply each function to each item
 * in the provided stream.  This generates, in effect, a cross product.
 * @param {Stream} xs stream of items to which
 * @returns {Stream} stream containing the cross product of items
 */
Stream.prototype.ap = function (xs) {
  return ap(this, xs)
}

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @returns {Stream} stream containing items replaced with x
 */
Stream.prototype.constant = function (x) {
  return constant(x, this)
}

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @returns {Stream} new stream containing the same items as this stream
 */
Stream.prototype.tap = function (f) {
  return tap(f, this)
}

// -----------------------------------------------------------------------
// Transducer support





/**
 * Transform this stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @return {Stream} stream of events transformed by the transducer
 */
Stream.prototype.transduce = function (transducer) {
  return transduce(transducer, this)
}

// -----------------------------------------------------------------------
// FlatMapping



// @deprecated flatMap, use chain instead


/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
Stream.prototype.chain = function (f) {
  return flatMap(f, this)
}

// @deprecated use chain instead
Stream.prototype.flatMap = Stream.prototype.chain

  /**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
Stream.prototype.join = function () {
  return join(this)
}



// @deprecated flatMapEnd, use continueWith instead


/**
 * Map the end event to a new stream, and begin emitting its values.
 * @param {function(x:*):Stream} f function that receives the end event value,
 * and *must* return a new Stream to continue with.
 * @returns {Stream} new stream that emits all events from the original stream,
 * followed by all events from the stream returned by f.
 */
Stream.prototype.continueWith = function (f) {
  return continueWith(f, this)
}

// @deprecated use continueWith instead
Stream.prototype.flatMapEnd = Stream.prototype.continueWith





Stream.prototype.concatMap = function (f) {
  return concatMap(f, this)
}

// -----------------------------------------------------------------------
// Concurrent merging





/**
 * Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer, limiting the number of inner streams that may
 * be active concurrently.
 * @param {number} concurrency at most this many inner streams will be
 *  allowed to be active concurrently.
 * @return {Stream<X>} new stream containing all events of all inner
 *  streams, with limited concurrency.
 */
Stream.prototype.mergeConcurrently = function (concurrency) {
  return mergeConcurrently(concurrency, this)
}

// -----------------------------------------------------------------------
// Merging





/**
 * Merge this stream and all the provided streams
 * @returns {Stream} stream containing items from this stream and s in time
 * order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
Stream.prototype.merge = function (/* ...streams */) {
  return mergeArray(index_es["d" /* cons */](this, arguments))
}

// -----------------------------------------------------------------------
// Combining





/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
Stream.prototype.combine = function (f /*, ...streams */) {
  return combineArray(f, index_es["n" /* replace */](this, 0, arguments))
}

// -----------------------------------------------------------------------
// Sampling





/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  signal's latest value will be propagated
 * @returns {Stream} sampled stream of values
 */
Stream.prototype.sampleWith = function (sampler) {
  return sampleWith(sampler, this)
}

/**
 * When an event arrives on this stream, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @returns {Stream} stream of sampled and transformed values
 */
Stream.prototype.sample = function (f /* ...streams */) {
  return sampleArray(f, this, index_es["o" /* tail */](arguments))
}

// -----------------------------------------------------------------------
// Zipping





/**
 * Pair-wise combine items with those in s. Given 2 streams:
 * [1,2,3] zipWith f [4,5,6] -> [f(1,4),f(2,5),f(3,6)]
 * Note: zip causes fast streams to buffer and wait for slow streams.
 * @param {function(a:Stream, b:Stream, ...):*} f function to combine items
 * @returns {Stream} new stream containing pairs
 */
Stream.prototype.zip = function (f /*, ...streams */) {
  return zipArray(f, index_es["n" /* replace */](this, 0, arguments))
}

// -----------------------------------------------------------------------
// Switching



// @deprecated switch, use switchLatest instead


/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @returns {Stream} switching stream
 */
Stream.prototype.switchLatest = function () {
  return switchLatest(this)
}

// @deprecated use switchLatest instead
Stream.prototype.switch = Stream.prototype.switchLatest

// -----------------------------------------------------------------------
// Filtering



// @deprecated distinct, use skipRepeats instead
// @deprecated distinctBy, use skipRepeatsWith instead


/**
 * Retain only items matching a predicate
 * stream:                           -12345678-
 * filter(x => x % 2 === 0, stream): --2-4-6-8-
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
Stream.prototype.filter = function (p) {
  return filter(p, this)
}

/**
 * Skip repeated events, using === to compare items
 * stream:           -abbcd-
 * distinct(stream): -ab-cd-
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeats = function () {
  return skipRepeats(this)
}

/**
 * Skip repeated events, using supplied equals function to compare items
 * @param {function(a:*, b:*):boolean} equals function to compare items
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeatsWith = function (equals) {
  return skipRepeatsWith(equals, this)
}

// -----------------------------------------------------------------------
// Slicing





/**
 * stream:          -abcd-
 * take(2, stream): -ab|
 * @param {Number} n take up to this many events
 * @returns {Stream} stream containing at most the first n items from this stream
 */
Stream.prototype.take = function (n) {
  return take(n, this)
}

/**
 * stream:          -abcd->
 * skip(2, stream): ---cd->
 * @param {Number} n skip this many events
 * @returns {Stream} stream not containing the first n events
 */
Stream.prototype.skip = function (n) {
  return skip(n, this)
}

/**
 * Slice a stream by event index. Equivalent to, but more efficient than
 * stream.take(end).skip(start);
 * NOTE: Negative start and end are not supported
 * @param {Number} start skip all events before the start index
 * @param {Number} end allow all events from the start index to the end index
 * @returns {Stream} stream containing items where start <= index < end
 */
Stream.prototype.slice = function (start, end) {
  return slice(start, end, this)
}

/**
 * stream:                        -123451234->
 * takeWhile(x => x < 5, stream): -1234|
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items up to, but not including, the
 * first item for which p returns falsy.
 */
Stream.prototype.takeWhile = function (p) {
  return takeWhile(p, this)
}

/**
 * stream:                        -123451234->
 * skipWhile(x => x < 5, stream): -----51234->
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items following *and including* the
 * first item for which p returns falsy.
 */
Stream.prototype.skipWhile = function (p) {
  return skipWhile(p, this)
}

/**
 * stream:                         -123456789->
 * skipAfter(x => x === 5, stream):-12345|
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items up to, *and including*, the
 * first item for which p returns truthy.
 */
Stream.prototype.skipAfter = function (p) {
  return skipAfter(p, this)
}

// -----------------------------------------------------------------------
// Time slicing



// @deprecated takeUntil, use until instead
// @deprecated skipUntil, use since instead


/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -a-b-c-|
 * @param {Stream} signal retain only events in stream before the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur before
 * the first event in signal.
 */
Stream.prototype.until = function (signal) {
  return takeUntil(signal, this)
}

// @deprecated use until instead
Stream.prototype.takeUntil = Stream.prototype.until

  /**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -------d-e-f-g->
 * @param {Stream} signal retain only events in stream at or after the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur after
 * the first event in signal.
 */
Stream.prototype.since = function (signal) {
  return skipUntil(signal, this)
}

// @deprecated use since instead
Stream.prototype.skipUntil = Stream.prototype.since

  /**
 * stream:                    -a-b-c-d-e-f-g->
 * timeWindow:                -----s
 * s:                               -----t
 * stream.during(timeWindow): -----c-d-e-|
 * @param {Stream<Stream>} timeWindow a stream whose first event (s) represents
 *  the window start time.  That event (s) is itself a stream whose first event (t)
 *  represents the window end time
 * @returns {Stream} new stream containing only events within the provided timespan
 */
Stream.prototype.during = function (timeWindow) {
  return during(timeWindow, this)
}

// -----------------------------------------------------------------------
// Delaying





/**
 * @param {Number} delayTime milliseconds to delay each item
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
Stream.prototype.delay = function (delayTime) {
  return delay_delay(delayTime, this)
}

// -----------------------------------------------------------------------
// Getting event timestamp




/**
 * Expose event timestamps into the stream. Turns a Stream<X> into
 * Stream<{time:t, value:X}>
 * @returns {Stream<{time:number, value:*}>}
 */
Stream.prototype.timestamp = function () {
  return timestamp(this)
}

// -----------------------------------------------------------------------
// Rate limiting





/**
 * Limit the rate of events
 * stream:              abcd----abcd----
 * throttle(2, stream): a-c-----a-c-----
 * @param {Number} period time to suppress events
 * @returns {Stream} new stream that skips events for throttle period
 */
Stream.prototype.throttle = function (period) {
  return throttle(period, this)
}

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * stream:              abcd----abcd----
 * debounce(2, stream): -----d-------d--
 * @param {Number} period events occurring more frequently than this
 *  on the provided scheduler will be suppressed
 * @returns {Stream} new debounced stream
 */
Stream.prototype.debounce = function (period) {
  return debounce(period, this)
}

// -----------------------------------------------------------------------
// Awaiting Promises



// @deprecated await, use awaitPromises instead


/**
 * Await promises, turning a Stream<Promise<X>> into Stream<X>.  Preserves
 * event order, but timeshifts events based on promise resolution time.
 * @returns {Stream<X>} stream containing non-promise values
 */
Stream.prototype.awaitPromises = function () {
  return awaitPromises(this)
}

// @deprecated use awaitPromises instead
Stream.prototype.await = Stream.prototype.awaitPromises

// -----------------------------------------------------------------------
// Error handling



// @deprecated flatMapError, use recoverWith instead


/**
 * If this stream encounters an error, recover and continue with items from stream
 * returned by f.
 * stream:                  -a-b-c-X-
 * f(X):                           d-e-f-g-
 * flatMapError(f, stream): -a-b-c-d-e-f-g-
 * @param {function(error:*):Stream} f function which returns a new stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
Stream.prototype.recoverWith = function (f) {
  return flatMapError(f, this)
}

// @deprecated use recoverWith instead
Stream.prototype.flatMapError = Stream.prototype.recoverWith

// -----------------------------------------------------------------------
// Multicasting





/**
 * Transform the stream into multicast stream.  That means that many subscribers
 * to the stream will not cause multiple invocations of the internal machinery.
 * @returns {Stream} new stream which will multicast events to all observers.
 */
Stream.prototype.multicast = function () {
  return Object(multicast_es["b" /* default */])(this)
}

// export the instance of the defaultScheduler for third-party libraries




// export an implementation of Task used internally for third-party libraries





/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _dispatchable; });

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isArray.js
var _isArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_dispatchable.js


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();

    if (!Object(_isArray["a" /* default */])(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var most__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _most_multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);



/** @license MIT License (c) copyright 2010-2016 original author or authors */

function defer (task) { return Promise.resolve(task).then(runTask); }

function runTask (task) {
  try {
    return task.run()
  } catch (e) {
    return task.error(e)
  }
}

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var PropagateAllTask = function PropagateAllTask (sink, time, events) {
  this.sink = sink
  this.time = time
  this.events = events
};

PropagateAllTask.prototype.run = function run () {
    var this$1 = this;

  var events = this.events
  var sink = this.sink
  var event

  for (var i = 0, l = events.length; i < l; ++i) {
    event = events[i]
    this$1.time = event.time
    sink.event(event.time, event.value)
  }

  events.length = 0
};

PropagateAllTask.prototype.error = function error (e) {
  this.sink.error(this.time, e)
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var EndTask = function EndTask (t, x, sink) {
  this.time = t
  this.value = x
  this.sink = sink
};

EndTask.prototype.run = function run () {
  this.sink.end(this.time, this.value)
};

EndTask.prototype.error = function error (e) {
  this.sink.error(this.time, e)
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var ErrorTask = function ErrorTask (t, e, sink) {
  this.time = t
  this.value = e
  this.sink = sink
};

ErrorTask.prototype.run = function run () {
  this.sink.error(this.time, this.value)
};

ErrorTask.prototype.error = function error (e) {
  throw e
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var DeferredSink = function DeferredSink (sink) {
  this.sink = sink
  this.events = []
  this.active = true
};

DeferredSink.prototype.event = function event (t, x) {
  if (!this.active) {
    return
  }

  if (this.events.length === 0) {
    defer(new PropagateAllTask(this.sink, t, this.events))
  }

  this.events.push({ time: t, value: x })
};

DeferredSink.prototype.end = function end (t, x) {
  if (!this.active) {
    return
  }

  this._end(new EndTask(t, x, this.sink))
};

DeferredSink.prototype.error = function error (t, e) {
  this._end(new ErrorTask(t, e, this.sink))
};

DeferredSink.prototype._end = function _end (task) {
  this.active = false
  defer(task)
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var CreateSubscriber = function CreateSubscriber (sink, scheduler, subscribe) {
  this.sink = sink
  this.scheduler = scheduler
  this._unsubscribe = this._init(subscribe)
};

CreateSubscriber.prototype._init = function _init (subscribe) {
    var this$1 = this;

  var add = function (x) { return this$1.sink.event(this$1.scheduler.now(), x); }
  var end = function (x) { return this$1.sink.end(this$1.scheduler.now(), x); }
  var error = function (e) { return this$1.sink.error(this$1.scheduler.now(), e); }

  try {
    return subscribe(add, end, error)
  } catch (e) {
    error(e)
  }
};

CreateSubscriber.prototype.dispose = function dispose () {
  if (typeof this._unsubscribe === 'function') {
    return this._unsubscribe.call(void 0)
  }
};

/** @license MIT License (c) copyright 2010-2016 original author or authors */

var Create = function Create (subscribe) {
  this._subscribe = subscribe
};

Create.prototype.run = function run (sink, scheduler) {
  return new CreateSubscriber(new DeferredSink(sink), scheduler, this._subscribe)
};

/** @license MIT License (c) copyright 2016 original author or authors */

function create (run) {
  return new most__WEBPACK_IMPORTED_MODULE_0__[/* Stream */ "a"](new _most_multicast__WEBPACK_IMPORTED_MODULE_1__[/* MulticastSource */ "a"](new Create(run)))
}



/***/ }),
/* 32 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports = {
  alt: 'fantasy-land/alt',
  bimap: 'fantasy-land/bimap',
  chain: 'fantasy-land/chain',
  compose: 'fantasy-land/compose',
  concat: 'fantasy-land/concat',
  contramap: 'fantasy-land/contramap',
  empty: 'fantasy-land/empty',
  equals: 'fantasy-land/equals',
  extend: 'fantasy-land/extend',
  filter: 'fantasy-land/filter',
  id: 'fantasy-land/id',
  map: 'fantasy-land/map',
  of: 'fantasy-land/of',
  promap: 'fantasy-land/promap',
  reduce: 'fantasy-land/reduce',
  zero: 'fantasy-land/zero'
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isApply = __webpack_require__(38)

// isApplicative : a -> Boolean
function isApplicative(m) {
  return isApply(m)
    && (hasAlg('of', m) || hasAlg('of', m.constructor))
}

module.exports = isApplicative


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MulticastSource; });
/* harmony import */ var _most_prelude__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


var MulticastDisposable = function MulticastDisposable (source, sink) {
  this.source = source
  this.sink = sink
  this.disposed = false
};

MulticastDisposable.prototype.dispose = function dispose () {
  if (this.disposed) {
    return
  }
  this.disposed = true
  var remaining = this.source.remove(this.sink)
  return remaining === 0 && this.source._dispose()
};

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

function tryEnd (t, x, sink) {
  try {
    sink.end(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

var dispose = function (disposable) { return disposable.dispose(); }

var emptyDisposable = {
  dispose: function dispose$1 () {}
}

var MulticastSource = function MulticastSource (source) {
  this.source = source
  this.sinks = []
  this._disposable = emptyDisposable
};

MulticastSource.prototype.run = function run (sink, scheduler) {
  var n = this.add(sink)
  if (n === 1) {
    this._disposable = this.source.run(this, scheduler)
  }
  return new MulticastDisposable(this, sink)
};

MulticastSource.prototype._dispose = function _dispose () {
  var disposable = this._disposable
  this._disposable = emptyDisposable
  return Promise.resolve(disposable).then(dispose)
};

MulticastSource.prototype.add = function add (sink) {
  this.sinks = Object(_most_prelude__WEBPACK_IMPORTED_MODULE_0__[/* append */ "a"])(sink, this.sinks)
  return this.sinks.length
};

MulticastSource.prototype.remove = function remove$1 (sink) {
  var i = Object(_most_prelude__WEBPACK_IMPORTED_MODULE_0__[/* findIndex */ "g"])(sink, this.sinks)
  // istanbul ignore next
  if (i >= 0) {
    this.sinks = Object(_most_prelude__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "l"])(i, this.sinks)
  }

  return this.sinks.length
};

MulticastSource.prototype.event = function event (time, value) {
  var s = this.sinks
  if (s.length === 1) {
    return s[0].event(time, value)
  }
  for (var i = 0; i < s.length; ++i) {
    tryEvent(time, value, s[i])
  }
};

MulticastSource.prototype.end = function end (time, value) {
  var s = this.sinks
  for (var i = 0; i < s.length; ++i) {
    tryEnd(time, value, s[i])
  }
};

MulticastSource.prototype.error = function error (time, err) {
  var s = this.sinks
  for (var i = 0; i < s.length; ++i) {
    s[i].error(time, err)
  }
};

function multicast (stream) {
  var source = stream.source
  return source instanceof MulticastSource
    ? stream
    : new stream.constructor(new MulticastSource(source))
}

/* harmony default export */ __webpack_exports__["b"] = (multicast);
//# sourceMappingURL=multicast.es.js.map


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export overloadForFunctions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ioToStream; });
/* harmony import */ var _most_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var crocks_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var crocks_predicates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crocks_predicates__WEBPACK_IMPORTED_MODULE_1__);



const overloadForFunctions = (nt) => (x) => (Object(crocks_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(x) ? (...args) => nt(x(...args)) : nt(x));

// ioToStream :: (IO a | * -> IO a) -> (Stream a | * -> Stream a)
const ioToStream = overloadForFunctions((io) =>
	Object(_most_create__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])((next, end, error) => {
		try {
			next(io.run());
		} catch (e) {
			error(e);
		}
		end();
	})
);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var toString = Object.prototype.toString

// isObject : a -> Boolean
function isObject(x) {
  return !!x
    && toString.call(x) === '[object Object]'
}

module.exports = isObject


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isSameType = __webpack_require__(22)
var isSame = __webpack_require__(53)
var hasAlg = __webpack_require__(5)
var type = __webpack_require__(52)
var fl = __webpack_require__(32)

var comp = function (a, b) { return a.valueOf() === b.valueOf(); }

var strats = {
  'Array': function (a, b) { return a.length === b.length
      && deepEquals(a, b); },

  'Date': function (a, b) { return isSame(a.valueOf(), b.valueOf()); },

  'Error': function (a, b) { return a.name === b.name
      && a.message === b.message; },

  'Object': function (a, b) { return Object.keys(a).length === Object.keys(b).length
      && deepEquals(a, b); },

  'RegExp': function (a, b) { return a.source === b.source
      && a.ignoreCase === b.ignoreCase
      && a.global === b.global
      && a.multiline === b.multiline
      && a.unicode === b.unicode; }
}

function deepEquals(a, b) {
  for(var key in a) {
    if(!equals(a[key], b[key])) {
      return false
    }
  }
  return true
}

function equals(a, b) {
  if(isSame(a, b)) {
    return true
  }

  if(!isSameType(a, b)) {
    return false
  }

  if(hasAlg('equals', a)) {
    return (b[fl.equals] || b.equals).call(b, a)
  }

  return (strats[type(a)] || comp)(a, b)
}

module.exports = equals


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isFunctor = __webpack_require__(19)

// isApply : a -> Boolean
function isApply(m) {
  return isFunctor(m)
    && hasAlg('ap', m)
}

module.exports = isApply


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76), __webpack_require__(77)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  hasProp: __webpack_require__(78),
  hasProps: __webpack_require__(79),
  hasPropPath: __webpack_require__(80),
  isAlt: __webpack_require__(81),
  isAlternative: __webpack_require__(82),
  isApplicative: __webpack_require__(83),
  isApply: __webpack_require__(84),
  isArray: __webpack_require__(85),
  isBifunctor: __webpack_require__(86),
  isBichain: __webpack_require__(88),
  isBoolean: __webpack_require__(90),
  isCategory: __webpack_require__(91),
  isChain: __webpack_require__(92),
  isContravariant: __webpack_require__(94),
  isDate: __webpack_require__(95),
  isDefined: __webpack_require__(96),
  isEmpty: __webpack_require__(97),
  isExtend: __webpack_require__(98),
  isFalse: __webpack_require__(100),
  isFalsy: __webpack_require__(101),
  isFoldable: __webpack_require__(102),
  isFunction: __webpack_require__(103),
  isFunctor: __webpack_require__(104),
  isInteger: __webpack_require__(105),
  isIterable: __webpack_require__(106),
  isMap: __webpack_require__(108),
  isMonad: __webpack_require__(110),
  isMonoid: __webpack_require__(111),
  isNil: __webpack_require__(112),
  isNumber: __webpack_require__(113),
  isObject: __webpack_require__(114),
  isPlus: __webpack_require__(115),
  isProfunctor: __webpack_require__(116),
  isPromise: __webpack_require__(118),
  isSame: __webpack_require__(120),
  isSameType: __webpack_require__(121),
  isSemigroup: __webpack_require__(122),
  isSemigroupoid: __webpack_require__(123),
  isSetoid: __webpack_require__(124),
  isString: __webpack_require__(65),
  isSymbol: __webpack_require__(125),
  isTraversable: __webpack_require__(126),
  isTrue: __webpack_require__(127),
  isTruthy: __webpack_require__(128),
  pathEq: __webpack_require__(63),
  pathSatisfies: __webpack_require__(64),
  propEq: __webpack_require__(129),
  propPathEq: __webpack_require__(130),
  propSatisfies: __webpack_require__(131),
  propPathSatisfies: __webpack_require__(132)
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isString; });
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _map; });
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isString = __webpack_require__(10)
var hasAlg = __webpack_require__(5)

// isSemigroup : a -> Boolean
function isSemigroup(m) {
  return isString(m)
    || !!m && hasAlg('concat', m)
}

module.exports = isSemigroup


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)

function predOrFunc(pred, x) {
  if(isFunction(pred)) {
    return pred(x)
  }
  return pred.runWith(x)
}

module.exports = predOrFunc


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Dale Francis (dalefrancis88) */

var Pred = __webpack_require__(23).proxy('Pred')

var isFunction = __webpack_require__(7)
var isSameType = __webpack_require__(22)

// isPredOrFunc :: ((a -> b) | pred) -> bool
var isPredOrFunc = function (predOrFunc) { return isFunction(predOrFunc) || isSameType(Pred, predOrFunc); }

module.exports = isPredOrFunc


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);




/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */

var ap =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } : Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (acc, f) {
    return Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(acc, Object(_map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(f, applyX));
  }, [], applyF);
});

/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChromeMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendChromeMessageToActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendChromeMessageToPopup; });
/* harmony import */ var _most_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


// getChromeMessages :: () -> Stream a
const getChromeMessages = () =>
	Object(_most_create__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])((next) => chrome.extension.onMessage.addListener((message) => next(message)));

// sendChromeMessage :: a -> Stream ()
const sendChromeMessageToActiveTab = (data) =>
	Object(_most_create__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])((next, end) => {
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			next(chrome.tabs.sendMessage(tabs[0].id, data));
			end();
		});
	});

// sendChromeMessageToPopUp :: a -> Stream ()
const sendChromeMessageToPopup = (data) =>
	Object(_most_create__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])((next, end) => {
		next(chrome.runtime.sendMessage(data));
		end();
	});


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var fulfills =
  function (algs) { return function (test) { return algs.indexOf(test) !== -1; }; }

module.exports = fulfills


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isArray = __webpack_require__(18)
var isFunction = __webpack_require__(7)
var isObject = __webpack_require__(36)
var isString = __webpack_require__(10)
var isSymbol = __webpack_require__(54)
var isDate = __webpack_require__(55)

function arrayInspect(xs) {
  return xs.length
    ? xs.map(inspect).reduce(function (a, x) { return a + ',' + x; })
    : xs
}

// inspect : a -> String
function inspect(x) {
  if(x && isFunction(x.inspect)) {
    return (" " + (x.inspect()))
  }

  if(isFunction(x)) {
    return ' Function'
  }

  if(isArray(x)) {
    return (" [" + (arrayInspect(x)) + " ]")
  }

  if(isObject(x)) {
    return (" { " + (Object.keys(x).reduce(function (acc, key) {
      return acc.concat([ (key + ":" + (inspect(x[key]))) ])
    }, []).join(', ')) + " }")
  }

  if(isString(x)) {
    return (" \"" + x + "\"")
  }

  if(isSymbol(x) || isDate(x)) {
    return (" " + (x.toString()))
  }

  return (" " + x)
}

module.exports = inspect


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isSemigroup = __webpack_require__(43)

// isMonoid :: a -> Boolean
function isMonoid(m) {
  return isSemigroup(m)
    && (hasAlg('empty', m) || hasAlg('empty', m.constructor))
}

module.exports = isMonoid


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)

function type(x) {
  if(x) {
    if(isFunction(x.type)) {
      return x.type()
    }
  }
  return {}.toString.call(x).slice(8, -1)
}

module.exports = type


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// isSame : (a, b) -> Boolean
function isSame(x, y) {
  if(x === y) {
    return x !== 0 || 1 / x === 1 / y
  }

  return x !== x && y !== y
}

module.exports = isSame


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Robert Pearce (rpearce) */

// isSymbol : a -> Boolean
function isSymbol(x) {
  return typeof x === 'symbol'
}

module.exports = isSymbol


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isDate : a -> Boolean
function isDate(x) {
  return Object.prototype.toString.apply(x) === '[object Date]'
    && !isNaN(x.valueOf())
}

module.exports = isDate



/***/ }),
/* 56 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// Composition (Bluebird)
// compose : (b -> c) -> (a -> b) -> a -> c
function compose(f, g) {
  return function(x) {
    return f(g(x))
  }
}

module.exports = compose


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// isNumber : a -> Boolean
function isNumber(x) {
  return typeof x === 'number'
    && !isNaN(x)
}

module.exports = isNumber


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)

// isFoldable : a -> Boolean
function isFoldable(m) {
  return !!m
    && hasAlg('reduce', m)
}

module.exports = isFoldable


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isFunctor = __webpack_require__(19)

// isAlt : a -> Boolean
function isAlt(m) {
  return isFunctor(m)
    && hasAlg('alt', m)
}

module.exports = isAlt


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isAlt = __webpack_require__(59)

// isPlus : a -> Boolean
function isPlus(m) {
  return isAlt(m)
    && (hasAlg('zero', m) || hasAlg('zero', m.constructor))
}

module.exports = isPlus


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)

// isSemigroupoid : a -> Boolean
function isSemigroupoid(m) {
  return !!m && hasAlg('compose', m)
}

module.exports = isSemigroupoid


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)

// isContravariant : a -> Boolean
function isContravariant(m) {
  return !!m && hasAlg('contramap', m)
}

module.exports = isContravariant


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Karthik Iyengar (karthikiyengar) */
/** @author Ian Hofmann-Hicks */

var curry = __webpack_require__(9)
var equals = __webpack_require__(37)
var isArray = __webpack_require__(18)
var isDefined = __webpack_require__(24)
var isEmpty  = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isString = __webpack_require__(10)

var err = function (name) { return (name + ": First argument must be an Array of non-empty Strings or Integers"); }

function fn(name) {
  // pathEq :: [ String | Number ] -> a -> Object -> Boolean
  function pathEq(keys, value, target) {
    if(!isArray(keys)) {
      throw new TypeError(err(name))
    }

    if(isNil(target)) {
      return false
    }

    var acc = target
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i]

      if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
        throw new TypeError(err(name))
      }

      if(isNil(acc)) {
        return false
      }

      acc = acc[key]

      if(!isDefined(acc)) {
        return false
      }
    }

    return equals(acc, value)
  }

  return curry(pathEq)
}

var pathEq =
  fn('pathEq')

pathEq.origFn =
  fn

module.exports = pathEq


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Ian Hofmann-Hicks (evilsoft) */

var curry = __webpack_require__(9)
var isArray = __webpack_require__(18)
var isEmpty  = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isPredOrFunc = __webpack_require__(45)
var isString = __webpack_require__(10)
var predOrFunc = __webpack_require__(44)

var err = function (name) { return (name + ": First argument must be an Array of non-empty Strings or Integers"); }

function fn(name) {
  // pathSatisfies: [ (String | Integer) ] -> (a -> Boolean) -> b -> Boolean
  // pathSatisfies: [ (String | Integer) ] -> Pred a -> b -> Boolean
  function pathSatisfies(keys, pred, x) {
    if(!isArray(keys)) {
      throw new TypeError(err(name))
    }

    if(!isPredOrFunc(pred)) {
      throw new TypeError(
        (name + ": Second argument must be a Pred or predicate Function")
      )
    }

    if(isNil(x)) {
      return false
    }

    var target = x
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i]

      if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
        throw new TypeError(err(name))
      }

      if(isNil(target)) {
        return false
      }

      target = target[key]
    }

    return !!predOrFunc(pred, target)
  }

  return curry(pathSatisfies)
}

var pathSatisfies =
  fn('pathSatisfies')

pathSatisfies.origFn =
  fn

module.exports = pathSatisfies


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(10)


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var ref = __webpack_require__(71);
var Nothing = ref.Nothing;
var Just = ref.Just;
var predOrFunc = __webpack_require__(44)

var curry = __webpack_require__(9)
var isPredOrFunc = __webpack_require__(45)

// safe : ((a -> Boolean) | Pred) -> a -> Maybe a
function safe(pred, x) {
  if(!isPredOrFunc(pred)) {
    throw new TypeError('safe: Pred or predicate function required for first argument')
  }

  return predOrFunc(pred, x)
    ? Just(x)
    : Nothing()
}

module.exports = curry(safe)


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ pipe; });

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_arity.js
var _arity = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry3.js
var _curry3 = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_reduce.js + 2 modules
var _reduce = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/ramda/es/reduce.js


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce =
/*#__PURE__*/
Object(_curry3["a" /* default */])(_reduce["a" /* default */]);

/* harmony default export */ var es_reduce = (reduce);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isArray.js
var _isArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_checkForMethod.js

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;

    if (length === 0) {
      return fn();
    }

    var obj = arguments[length - 1];
    return Object(_isArray["a" /* default */])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/ramda/es/slice.js


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

var slice =
/*#__PURE__*/
Object(_curry3["a" /* default */])(
/*#__PURE__*/
_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/* harmony default export */ var es_slice = (slice);
// CONCATENATED MODULE: ./node_modules/ramda/es/tail.js



/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

var tail =
/*#__PURE__*/
Object(_curry1["a" /* default */])(
/*#__PURE__*/
_checkForMethod('tail',
/*#__PURE__*/
es_slice(1, Infinity)));

/* harmony default export */ var es_tail = (tail);
// CONCATENATED MODULE: ./node_modules/ramda/es/pipe.js




/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return Object(_arity["a" /* default */])(arguments[0].length, es_reduce(_pipe, arguments[0], es_tail(arguments)));
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_dispatchable.js + 1 modules
var _dispatchable = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_makeFlat.js

/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */

function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(_isArrayLike["a" /* default */])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;

        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }

      idx += 1;
    }

    return result;
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_forceReduced.js
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_reduce.js + 2 modules
var _reduce = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_xfBase.js
var _xfBase = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_flatCat.js





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase["a" /* default */].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase["a" /* default */].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(_isArrayLike["a" /* default */])(input) ? Object(_reduce["a" /* default */])(rxf, result, [input]) : Object(_reduce["a" /* default */])(rxf, result, input);
    }
  };
};

/* harmony default export */ var internal_flatCat = (_flatCat);
// EXTERNAL MODULE: ./node_modules/ramda/es/map.js + 1 modules
var map = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xchain.js




var _xchain_xchain =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function _xchain(f, xf) {
  return Object(map["a" /* default */])(f, internal_flatCat(xf));
});

/* harmony default export */ var internal_xchain = (_xchain_xchain);
// CONCATENATED MODULE: ./node_modules/ramda/es/chain.js





/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */

var chain_chain =
/*#__PURE__*/
Object(_curry2["a" /* default */])(
/*#__PURE__*/
Object(_dispatchable["a" /* default */])(['fantasy-land/chain', 'chain'], internal_xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }

  return _makeFlat(false)(Object(map["a" /* default */])(fn, monad));
}));

/* harmony default export */ var es_chain = __webpack_exports__["a"] = (chain_chain);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isApplicative = __webpack_require__(33)

// isMonad : a -> Boolean
function isMonad(m) {
  return isApplicative(m)
    && hasAlg('chain', m)
}

module.exports = isMonad



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var VERSION = 4

var _defineUnion = __webpack_require__(72)
var _equals = __webpack_require__(37)
var _implements = __webpack_require__(48)
var _innerConcat = __webpack_require__(73)
var _inspect = __webpack_require__(49)
var type = __webpack_require__(23).type('Maybe')
var _type = __webpack_require__(23).typeFn(type(), VERSION)
var fl = __webpack_require__(32)

var apOrFunc = __webpack_require__(74)
var compose = __webpack_require__(56)
var isApplicative = __webpack_require__(33)
var isApply = __webpack_require__(38)
var isArray = __webpack_require__(18)
var isFunction = __webpack_require__(7)
var isSameType = __webpack_require__(22)

var constant = function (x) { return function () { return x; }; }
var identity = function (x) { return x; }

var _maybe =
  _defineUnion({ Nothing: [], Just: [ 'a' ] })

var Nothing =
  _maybe.Nothing

var Just =
  _maybe.Just

Maybe.Nothing =
  compose(Maybe, Nothing)

Maybe.Just =
  compose(Maybe, Just)

var _of =
  compose(Maybe, Just)

var _zero =
  compose(Maybe, Nothing)

function runSequence(x) {
  if(!(isApply(x) || isArray(x))) {
    throw new TypeError(
      'Maybe.sequence: Must wrap an Apply'
    )
  }

  return x.map(_of)
}

function Maybe(u) {
  var obj;

  if(!arguments.length) {
    throw new TypeError('Maybe: Must wrap something, try using Nothing or Just constructors')
  }

  var x =
    !_maybe.includes(u) ? Just(u) : u

  var of =
    _of

  var zero =
    _zero

  var option =
    function (n) { return either(constant(n), identity); }

  var equals =
    function (m) { return isSameType(Maybe, m) && either(
      constant(m.either(constant(true), constant(false))),
      function (x) { return m.either(constant(false), function (y) { return _equals(y, x); }); }
    ); }

  var inspect = function () { return either(
      constant('Nothing'),
      function (x) { return ("Just" + (_inspect(x))); }
    ); }

  function either(f, g) {
    if(!isFunction(f) || !isFunction(g)) {
      throw new TypeError('Maybe.either: Requires both left and right functions')
    }

    return _maybe.caseOf({
      Nothing: f,
      Just: g
    }, x)
  }

  function concat(method) {
    return function(m) {
      if(!isSameType(Maybe, m)) {
        throw new TypeError(("Maybe." + method + ": Maybe of Semigroup required"))
      }

      return either(
        Maybe.Nothing,
        _innerConcat(("Maybe." + method), m)
      )
    }
  }

  function coalesce(f, g) {
    if(!isFunction(f) || !isFunction(g)) {
      throw new TypeError('Maybe.coalesce: Requires both left and right functions')
    }

    return Maybe.Just(either(f, g))
  }

  function bichain(l, r) {
    var bichainErr =
      'Maybe.bichain: Both arguments must be Maybe returning functions'

    if(!(isFunction(l) && isFunction(r))) {
      throw new TypeError(bichainErr)
    }

    var m = either(l, r)

    if(!isSameType(Maybe, m)) {
      throw new TypeError(bichainErr)
    }

    return m
  }

  function map(method) {
    return function(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(("Maybe." + method + ": Function required"))
      }

      return either(
        Maybe.Nothing,
        compose(Maybe.Just, fn)
      )
    }
  }

  function alt(method) {
    return function(m) {
      if(!isSameType(Maybe, m)) {
        throw new TypeError(("Maybe." + method + ": Maybe required"))
      }

      return either(
        constant(m),
        Maybe.Just
      )
    }
  }

  function ap(m) {
    var fn = option(constant(undefined))

    if(!isFunction(fn)) {
      throw new TypeError('Maybe.ap: Wrapped value must be a function')
    }

    else if(!isSameType(Maybe, m)) {
      throw new TypeError('Maybe.ap: Maybe required')
    }

    return either(
      Maybe.Nothing,
      m.map
    )
  }

  function chain(method) {
    return function(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(("Maybe." + method + ": Function required"))
      }

      var m = either(Maybe.Nothing, fn)

      if(!isSameType(Maybe, m)) {
        throw new TypeError(("Maybe." + method + ": Function must return a Maybe"))
      }

      return m
    }
  }

  function sequence(f) {
    if(!(isApplicative(f) || isFunction(f))) {
      throw new TypeError(
        'Maybe.sequence: Applicative TypeRep or Apply returning function required'
      )
    }

    var af =
      apOrFunc(f)

    return either(
      compose(af, Maybe.Nothing),
      runSequence
    )
  }

  function traverse(f, fn) {
    if(!(isApplicative(f) || isFunction(f))) {
      throw new TypeError(
        'Maybe.traverse: Applicative TypeRep or Apply returning function required for first argument'
      )
    }

    if(!isFunction(fn)) {
      throw new TypeError(
        'Maybe.traverse: Apply returning function required for second argument'
      )
    }

    var af =
      apOrFunc(f)

    var m =
      either(compose(af, Maybe.Nothing), fn)

    if(!(isApply(m) || isArray(m))) {
      throw new TypeError(
        'Maybe.traverse: Both functions must return an Apply of the same type'
      )
    }

    return either(
      constant(m),
      constant(m.map(_of))
    )
  }

  return ( obj = {
    inspect: inspect, toString: inspect, either: either,
    option: option, type: type, equals: equals, bichain: bichain, coalesce: coalesce,
    zero: zero, ap: ap, of: of, sequence: sequence,
    traverse: traverse,
    alt: alt('alt'),
    chain: chain('chain'),
    concat: concat('concat'),
    map: map('map')
  }, obj[fl.zero] = zero, obj[fl.of] = of, obj[fl.equals] = equals, obj[fl.alt] = alt(fl.alt), obj[fl.concat] = concat(fl.concat), obj[fl.map] = map(fl.map), obj[fl.chain] = chain(fl.chain), obj['@@type'] = _type, obj.constructor = Maybe, obj )
}

Maybe.of = _of
Maybe.zero = _zero
Maybe.type = type

Maybe[fl.of] = _of
Maybe[fl.zero] = _zero
Maybe['@@type'] = _type

Maybe['@@implements'] = _implements(
  [ 'alt', 'ap', 'chain', 'concat', 'equals', 'map', 'of', 'traverse', 'zero' ]
)

module.exports = Maybe


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)
var isArray = __webpack_require__(18)
var isEmpty = __webpack_require__(13)
var isFunction = __webpack_require__(7)
var isObject = __webpack_require__(36)
var isString = __webpack_require__(10)

var constant = function (x) { return function () { return x; }; }

var isDefinition =
  function (x) { return isString(x) && x.length; }

function caseOf(defs) {
  return function(cases, m) {
    var tag = m.tag
    var def = defs[tag()]

    var args = def.reduce(
      function (xs, x) { return xs.concat([ m[x].value() ]); },
      []
    )

    return cases[tag()].apply(null, args)
  }
}

var includes =
  function (defs) { return function (m) { return !!m && isFunction(m.tag) && Object.keys(defs).indexOf(m.tag()) !== -1; }; }

function construction(def, tag) {
  return function() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return def.reduce(function(obj, key, index) {
      obj[key] = { value: constant(args[index]) }
      return obj
    }, { tag: constant(tag) })
  }
}

function defineUnion(defs) {
  if(!isObject(defs) || isEmpty(defs)) {
    throw new TypeError('defineUnion: Argument must be an Object containing definition lists')
  }

  return Object.keys(defs).reduce(function(obj, tag) {
    var def = defs[tag]

    if(!isArray(def) || !def.reduce(function (x, y) { return x && isDefinition(y); }, true)) {
      throw new TypeError('defineUnion: Definitions must be a list of non-empty string identifiers')
    }

    obj[tag] = construction(def, tag)

    return obj
  }, { caseOf: curry(caseOf(defs)), includes: curry(includes(defs)) })
}

module.exports = defineUnion


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isSameType = __webpack_require__(22)
var isSemigroup = __webpack_require__(43)

function innerConcat(method, m) {
  return function(left) {
    if(!isSemigroup(left)) {
      throw new TypeError((method + ": Both containers must contain Semigroups of the same type"))
    }

    return m.map(function (right) {
      if(!isSameType(left, right)) {
        throw new TypeError((method + ": Both containers must contain Semigroups of the same type"))
      }

      return left.concat(right)
    })
  }
}

module.exports = innerConcat


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isApplicative = __webpack_require__(33)
var isTypeRepOf = __webpack_require__(75)

var apOrFunc = function (af) { return function (x) { return isApplicative(af)
    ? af.of(x)
    : isTypeRepOf(Array, af) ? [ x ] : af(x); }; }

module.exports = apOrFunc


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)

var isTypeRepOf = function (x, y) { return isFunction(y)
    && (x === y || x.name === y.name); }

module.exports = isTypeRepOf


/***/ }),
/* 76 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)
var isDefined = __webpack_require__(24)
var isEmpty = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isString = __webpack_require__(10)

// hasProp : (String | Integer) -> a -> Boolean
function hasProp(key, x) {
  if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
    throw new TypeError(
      'hasProp: Non-empty String or Integer required for first argument'
    )
  }

  if(isNil(x)) {
    return false
  }

  return isDefined(x[key])
}

module.exports = curry(hasProp)


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

var curry = __webpack_require__(9)
var isDefined = __webpack_require__(24)
var isEmpty = __webpack_require__(13)
var isFoldable = __webpack_require__(58)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isString = __webpack_require__(10)

// err :: String
var err =
  'hasProps: First argument must be a Foldable of Non-empty Strings or Integers'

// isKeyValid :: a -> Boolean
var isKeyValid = function (key) { return isString(key) && !isEmpty(key) || isInteger(key); }

// hasKey :: a -> (String | Integer) -> Boolean
var hasKey = function (obj) { return function (key) {
  if(!isKeyValid(key)) {
    throw new TypeError(err)
  }

  return isDefined(obj[key])
}; }

// every :: (a -> Boolean) -> ((Null | Boolean), a) -> Boolean
var every = function (fn) { return function (acc, x) { return (acc === null ? true : acc) && fn(x); }; }

// hasProps :: Foldable f => f (String | Integer) -> a -> Boolean
function hasProps(keys, x) {
  if(!isFoldable(keys)) {
    throw new TypeError(err)
  }

  if(isNil(x)) {
    return false
  }

  var result = keys.reduce(
    every(hasKey(x)),
    null
  )

  return result === null || result
}

module.exports = curry(hasProps)


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)
var isArray = __webpack_require__(18)
var isDefined = __webpack_require__(24)
var isEmpty = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isString = __webpack_require__(10)

// hasPropPath : [ String | Integer ] -> a -> Boolean
function hasPropPath(keys, target) {
  if(!isArray(keys)) {
    throw new TypeError(
      'hasPropPath: Array of Non-empty Strings or Integers required for first argument'
    )
  }

  if(isNil(target)) {
    return false
  }

  var value = target

  for(var i = 0; i < keys.length; i++) {
    var key = keys[i]

    if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
      throw new TypeError(
        'hasPropPath: Array of Non-empty Strings or Integers required for first argument'
      )
    }

    if(isNil(value)) {
      return false
    }

    value = value[key]

    if(!isDefined(value)) {
      return false
    }
  }

  return true
}

module.exports = curry(hasPropPath)


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(59)


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isApplicative = __webpack_require__(33)
var isPlus = __webpack_require__(60)

// isAlternative : a -> Boolean
function isAlternative(m) {
  return isPlus(m)
    && isApplicative(m)
}

module.exports = isAlternative


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(33)


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(38)


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(18)


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(87)


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isFunctor = __webpack_require__(19)

// isBifunctor : a -> Boolean
function isBifunctor(m) {
  return isFunctor(m)
    && hasAlg('bimap', m)
}

module.exports = isBifunctor


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

module.exports =
  __webpack_require__(89)


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

var hasAlg = __webpack_require__(5)

// isBichain : a -> Boolean
function isBichain(m) {
  return hasAlg('bichain', m)
}

module.exports = isBichain


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

// isBoolean : a -> Boolean
function isBoolean(x) {
  return typeof x === 'boolean'
}

module.exports = isBoolean


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isSemigroupoid = __webpack_require__(61)

// isCategory : a -> Boolean
function isCategory(m) {
  return isSemigroupoid(m)
    && (hasAlg('id', m) || hasAlg('id', m.constructor))
}

module.exports = isCategory


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(93)


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isApply = __webpack_require__(38)

// isChain : a -> Boolean
function isChain(m) {
  return isApply(m)
    && hasAlg('chain', m)
}

module.exports = isChain


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(62)


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Dale Francis (dalefrancis88) */

module.exports =
  __webpack_require__(55)


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(24)


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(13)


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(99)


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isFunctor = __webpack_require__(19)

// isExtend : a -> Boolean
function isExtend(m) {
  return isFunctor(m)
    && hasAlg('extend', m)
}

module.exports = isExtend


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isFalse : a -> Boolean
function isFalse(x) {
  return x === false
}

module.exports = isFalse


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isFalsy : a -> Boolean
function isFalsy(x) {
  return !x
}

module.exports = isFalsy


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(58)


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(7)


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(19)


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(17)


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Dale Francis (dalefrancis88) */

module.exports =
  __webpack_require__(107)


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Dale Francis (dalefrancis88) */

var isFunction = __webpack_require__(7)
var isNil = __webpack_require__(14)

function isIterable(iterable) {
  return !isNil(iterable) && isFunction(iterable[Symbol.iterator])
}

module.exports = isIterable


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Benny Powers (bennypowers) */

module.exports =
  __webpack_require__(109)


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Benny Powers (bennypowers) */

function isMap(x) {
  return x instanceof Map
}

module.exports = isMap


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(70)


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(51)


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(14)


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(57)


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(36)


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(60)


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(117)


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isContravariant = __webpack_require__(62)
var isFunctor = __webpack_require__(19)

// isProfunctor :: a -> Boolean
function isProfunctor(m) {
  return isContravariant(m)
    && isFunctor(m)
    && hasAlg('promap', m)
}

module.exports = isProfunctor


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(119)


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var isFunction = __webpack_require__(7)

// isPromise : a -> Boolean
function isPromise(p) {
  return !!p
    && isFunction(p.then)
    && isFunction(p.catch)
}

module.exports = isPromise


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)

var isSame = __webpack_require__(53)

module.exports = curry(isSame)


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(22)


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(43)


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

module.exports =
  __webpack_require__(61)


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)

// isSetoid : a -> Boolean
function isSetoid(m) {
  return !!m
    && hasAlg('equals', m)
}

module.exports = isSetoid



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Robert Pearce (rpearce) */

module.exports =
  __webpack_require__(54)


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var hasAlg = __webpack_require__(5)
var isFunctor = __webpack_require__(19)

// isTraversable : a -> Boolean
function isTraversable(m) {
  return isFunctor(m)
    && hasAlg('traverse', m)
}

module.exports = isTraversable


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isTrue : a -> Boolean
function isTrue(x) {
  return x === true
}

module.exports = isTrue


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/** @license ISC License (c) copyright 2019 original and current authors */
/** @author Dale Francis (dalefrancis88) */

// isTruthy : a -> Boolean
function isTruthy(x) {
  return !!x
}

module.exports = isTruthy


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Karthik Iyengar (karthikiyengar) */

var curry = __webpack_require__(9)
var equals = __webpack_require__(37)
var isDefined = __webpack_require__(24)
var isEmpty = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isString = __webpack_require__(10)

// propEq: (String | Integer) -> a -> b -> Boolean
function propEq(key, value, x) {
  if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
    throw new TypeError(
      'propEq: Non-empty String or Integer required for first argument'
    )
  }

  if(isNil(x)) {
    return false
  }

  var target = x[key]

  return isDefined(target) && equals(target, value)
}

module.exports = curry(propEq)


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Karthik Iyengar (karthikiyengar) */
/** @author Ian Hofmann-Hicks */

var pathEq = __webpack_require__(63)

module.exports =
  pathEq.origFn('propPathEq')


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Ian Hofmann-Hicks (evilsoft) */

var curry = __webpack_require__(9)
var isEmpty = __webpack_require__(13)
var isInteger = __webpack_require__(17)
var isNil = __webpack_require__(14)
var isPredOrFunc = __webpack_require__(45)
var isString = __webpack_require__(10)
var predOrFunc = __webpack_require__(44)

// propSatisfies: (String | Integer) -> (a -> Boolean) -> b -> Boolean
// propSatisfies: (String | Integer) -> Pred a -> b -> Boolean
function propSatisfies(key, pred, x) {
  if(!(isString(key) && !isEmpty(key) || isInteger(key))) {
    throw new TypeError(
      'propSatisfies: Non-empty String or Integer required for first argument'
    )
  }

  if(!isPredOrFunc(pred)) {
    throw new TypeError(
      'propSatisfies: Pred or predicate function required for second argument'
    )
  }

  return isNil(x) ? false : !!predOrFunc(pred, x[key])
}

module.exports = curry(propSatisfies)


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2018 original and current authors */
/** @author Ian Hofmann-Hicks (evilsoft) */

var pathSatisfies = __webpack_require__(64)

module.exports =
  pathSatisfies.origFn('propPathSatisfies')


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_dispatchable.js + 1 modules
var _dispatchable = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_filter.js
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_reduce.js + 2 modules
var _reduce = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_xfBase.js
var _xfBase = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xfilter.js



var _xfilter_XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase["a" /* default */].init;
  XFilter.prototype['@@transducer/result'] = _xfBase["a" /* default */].result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function _xfilter(f, xf) {
  return new _xfilter_XFilter(f, xf);
});

/* harmony default export */ var internal_xfilter = (_xfilter);
// EXTERNAL MODULE: ./node_modules/ramda/es/keys.js + 1 modules
var keys = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/ramda/es/filter.js







/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter =
/*#__PURE__*/
Object(_curry2["a" /* default */])(
/*#__PURE__*/
Object(_dispatchable["a" /* default */])(['filter'], internal_xfilter, function (pred, filterable) {
  return _isObject(filterable) ? Object(_reduce["a" /* default */])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, Object(keys["a" /* default */])(filterable)) : // else
  _filter(pred, filterable);
}));

/* harmony default export */ var es_filter = __webpack_exports__["a"] = (filter);

/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var curry = __webpack_require__(9)
var isFunction = __webpack_require__(7)

function option(x, m) {
  if(!(m && isFunction(m.option))) {
    throw new TypeError('option: Last argument must be a Maybe, First or Last')
  }

  return m.option(x)
}

module.exports = curry(option)


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

var VERSION = 1

var _implements = __webpack_require__(48)
var _inspect = __webpack_require__(49)
var _type = __webpack_require__(23).type('Reader')()
var _typeString = __webpack_require__(23).typeFn(_type, VERSION)
var fl = __webpack_require__(32)

var curry = __webpack_require__(9)
var isFunction = __webpack_require__(7)
var isMonad = __webpack_require__(70)
var isSameType = __webpack_require__(22)

function _ReaderT(Monad) {
  if(!isMonad(Monad)) {
    throw new TypeError('ReaderT: Monad required for construction')
  }

  var type =
    function () { return (_type + "( " + (Monad.type()) + " )"); }

  var typeString =
    _typeString + "( " + (Monad['@@type']) + " )"

  var of =
    function (x) { return ReaderT(function () { return Monad.of(x); }); }

  function ask(fn) {
    if(!arguments.length) {
      return ReaderT(Monad.of)
    }

    if(isFunction(fn)) {
      return ReaderT(Monad.of).map(fn)
    }

    throw new TypeError(((type()) + ".ask: No argument or function required"))
  }

  function lift(m) {
    if(!isSameType(Monad, m)) {
      throw new TypeError(((type()) + ".lift: " + (Monad.type()) + " instance required"))
    }

    return ReaderT(function () { return m; })
  }

  function liftFn(fn, x) {
    if(!isFunction(fn)) {
      throw new TypeError(((type()) + ".liftFn: " + (Monad.type()) + " returning function required"))
    }

    return ReaderT(function() {
      var m = fn(x)

      if(!isSameType(Monad, m)) {
        throw new TypeError(((type()) + ".liftFn: " + (Monad.type()) + " returning function required"))
      }

      return m
    })
  }

  function ReaderT(wrapped) {
    var obj;

    if(!isFunction(wrapped)) {
      throw new TypeError(((type()) + ": " + (Monad.type()) + " returning function required"))
    }

    var inspect =
      function () { return ("" + (type()) + (_inspect(wrapped))); }

    function runWith(x) {
      var result = wrapped(x)

      if(!isSameType(Monad, result)) {
        throw new TypeError(((type()) + ": " + (Monad.type()) + " must be returned by wrapped function"))
      }

      return result
    }

    function map(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(((type()) + ".map: Function required"))
      }

      return ReaderT(function (e) { return runWith(e).map(fn); })
    }

    function ap(m) {
      if(!isSameType(ReaderT, m)) {
        throw new TypeError(((type()) + ".ap: " + (type()) + " required"))
      }

      return ReaderT(function (e) { return runWith(e).ap(m.runWith(e)); })
    }

    function chain(fn) {
      if(!isFunction(fn)) {
        throw new TypeError(((type()) + ".chain: " + (type()) + " returning function required"))
      }

      return ReaderT(function (e) { return runWith(e).chain(function (inner) {
          var m = fn(inner)

          if(!isSameType(ReaderT, m)) {
            throw new TypeError(((type()) + ".chain: Function must return a " + (type())))
          }

          return m.runWith(e)
        }); }
      )
    }

    return ( obj = {
      inspect: inspect, toString: inspect, type: type,
      runWith: runWith, of: of, map: map, ap: ap, chain: chain
    }, obj[fl.of] = of, obj[fl.map] = map, obj[fl.chain] = chain, obj['@@type'] = typeString, obj.constructor = ReaderT, obj )
  }

  ReaderT.type = type
  ReaderT.of = of
  ReaderT.ask = ask
  ReaderT.lift = lift
  ReaderT.liftFn = curry(liftFn)

  ReaderT[fl.of] = of
  ReaderT['@@type'] = typeString

  ReaderT['@@implements'] = _implements(
    [ 'ap', 'chain', 'map', 'of' ]
  )

  return ReaderT
}

module.exports = _ReaderT


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curry =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function curry(fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn.length, fn);
});

/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */

var always =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function always(val) {
  return function () {
    return val;
  };
});

/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./chrome/src/chromeRuntime.js
var chromeRuntime = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ramda/es/pipe.js + 5 modules
var pipe = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ramda/es/chain.js + 4 modules
var chain = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ramda/es/map.js + 1 modules
var map = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ramda/es/filter.js + 3 modules
var filter = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ramda/es/pipeK.js + 3 modules
var pipeK = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_has.js
var _has = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_objectAssign.js
 // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;

  while (idx < length) {
    var source = arguments[idx];

    if (source != null) {
      for (var nextKey in source) {
        if (Object(_has["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }

    idx += 1;
  }

  return output;
}

/* harmony default export */ var internal_objectAssign = (typeof Object.assign === 'function' ? Object.assign : _objectAssign);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/ramda/es/merge.js


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @deprecated since v0.26.0
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.merge({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge(a, b) = {...a, ...b}
 */

var merge_merge =
/*#__PURE__*/
Object(_curry2["a" /* default */])(function merge(l, r) {
  return internal_objectAssign({}, l, r);
});

/* harmony default export */ var es_merge = (merge_merge);
// EXTERNAL MODULE: ./node_modules/crocks/IO/index.js
var IO = __webpack_require__(6);
var IO_default = /*#__PURE__*/__webpack_require__.n(IO);

// EXTERNAL MODULE: ./chrome/src/helpers.js + 6 modules
var helpers = __webpack_require__(4);

// CONCATENATED MODULE: ./chrome/src/storage.js




const KEYS = {
	FRONT_STEP_KEY: 'APPOINTMENT_STEP',
	USER_DATA: 'APPOINTMENT_STEP_USER_DATA'
};

// setNextStep :: Number -> IO ()
const setNextStep = Object(pipe["a" /* default */])(String, (step) => IO_default()(() => localStorage.setItem(KEYS.FRONT_STEP_KEY, step)));

// getNextStep :: () -> IO Number
const getNextStep = Object(pipe["a" /* default */])(() => IO_default()(() => localStorage.getItem(KEYS.FRONT_STEP_KEY)), Object(map["a" /* default */])(Number));

// saveUserData :: User -> IO ()
const saveUser = Object(pipe["a" /* default */])(helpers["n" /* stringify */], (record) => IO_default()(() => localStorage.setItem(KEYS.USER_DATA, record)));

// getUser :: () -> IO (Maybe User)
const getUser = Object(pipe["a" /* default */])(
	() => IO_default()(() => localStorage.getItem(KEYS.USER_DATA)),
	Object(map["a" /* default */])(helpers["j" /* safeWhenIsNotNil */]),
	Object(map["a" /* default */])(Object(map["a" /* default */])(helpers["h" /* parse */]))
);

// EXTERNAL MODULE: ./chrome/src/naturalTransformations.js
var naturalTransformations = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/crocks/pointfree/option.js
var pointfree_option = __webpack_require__(135);
var option_default = /*#__PURE__*/__webpack_require__.n(pointfree_option);

// EXTERNAL MODULE: ./node_modules/most/src/index.js + 65 modules
var src = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/crocks/Reader/ReaderT.js
var ReaderT = __webpack_require__(136);
var ReaderT_default = /*#__PURE__*/__webpack_require__.n(ReaderT);

// EXTERNAL MODULE: ./node_modules/ramda/es/curry.js
var curry = __webpack_require__(137);

// CONCATENATED MODULE: ./chrome/src/speechSynthesis.js


// speak :: String -> IO ()
const speak = (text) =>
	IO_default()(() => {
		const msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	});

// CONCATENATED MODULE: ./chrome/src/pageSteps.js





const SELECTORS = {
	BTN_ACCEPT: '#btnAceptar',
	BTN_NEXT: '#btnSiguiente',
	BTN_ENTER: '#btnEntrar',
	BTN_SEND: '#btnEnviar',
	BTN_SUBMIT: '#btnSubmit',
	OPT_CITY: '#form',
	OPT_PROCESS_TYPE: '#tramiteGrupo\\[0\\]',
	OPT_OFFICE: '#idSede',
	INP_NATIONALITY: '#txtPaisNac',
	INP_DOC_NUMBER: '#txtIdCitado',
	INP_NAME: '#txtDesCitado',
	INP_DATE: '#txtFecha',
	INP_TEL: '#txtTelefonoCitado',
	INP_EMAIL: '#emailUNO',
	INP_REPEAT_EMAIL: '#emailDOS',
	CB_DOC_TYPE: '#rdbTipoDocPas',
	TEXT_NO_APPOINTMENT: '#mensajeInfo > p.mf-msg__info > span > b'
};

const MESSAGES = {
	SOLVE_CAPTCHA: 'Resolver captcha',
	NO_APPOINTMENT: 'NO HAY SUFICIENTES CITAS DISPONIBLES',
	HAVE_APPOINTMENT: 'Si tienes citas disponibles'
};

// _clickAcceptButton :: () -> IO ()
const _clickAcceptButton = () => Object(helpers["b" /* click */])(SELECTORS.BTN_ACCEPT);

// _clickNextButton :: () -> IO ()
const _clickNextButton = () => Object(helpers["b" /* click */])(SELECTORS.BTN_NEXT);

// getIndexByValue :: (HTMLElement, value) -> String
const getIndexByValue = (options, value) => Array.from(options).find((x) => x.text === value).index;

// notifySolveCaptcha :: Number -> HTMLElement -> IO ()
const notifySolveCaptcha = Object(curry["a" /* default */])((ms, btn) => {
	const action = helpers["a" /* Monad */].do(function*() {
		const value = btn.disabled ? speak(MESSAGES.SOLVE_CAPTCHA) : Object(helpers["b" /* click */])(btn);
		return IO_default.a.of(yield value);
	});

	return IO_default.a.of(setInterval(() => action.run(), ms));
});

// selectCity :: Number -> IO ()
const selectCity = Object(pipeK["a" /* default */])(Object(helpers["k" /* selectIndex */])(SELECTORS.OPT_CITY), _clickAcceptButton);

// selectProcessType :: Number -> IO ()
const selectProcessType = Object(pipeK["a" /* default */])(Object(helpers["k" /* selectIndex */])(SELECTORS.OPT_PROCESS_TYPE), _clickAcceptButton);

// enterToProcedure :: () -> IO ()
const enterToProcedure = () => Object(helpers["b" /* click */])(SELECTORS.BTN_ENTER);

// setPersonalInformation :: User -> Stream ()
const setPersonalInformation = (user) =>
	helpers["a" /* Monad */].do(function*() {
		const sendBtn = yield Object(helpers["i" /* querySelector */])(SELECTORS.BTN_SEND);
		const countryNationalityInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_NATIONALITY);
		const documentNumberInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_DOC_NUMBER);
		const nameInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_NAME);
		const cardExpirationInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_DATE);
		const countryIndex = getIndexByValue(countryNationalityInput, user.country);

		if (user.isPassport) yield Object(helpers["b" /* click */])(SELECTORS.CB_DOC_TYPE);

		yield Object(helpers["m" /* setValue */])(user.docNumber, documentNumberInput);
		yield Object(helpers["m" /* setValue */])(user.name, nameInput);
		yield Object(helpers["m" /* setValue */])(user.cardExpiration, cardExpirationInput);
		yield Object(helpers["l" /* setProperty */])('selectedIndex', countryIndex, countryNationalityInput);
		yield notifySolveCaptcha(250, sendBtn);

		return IO_default.a.of();
	});

// askForAppointment :: () -> IO ()
const askForAppointment = () => Object(helpers["b" /* click */])(SELECTORS.BTN_SEND);

// selectOffice :: Number -> IO ()
const selectOffice = Object(pipeK["a" /* default */])(Object(helpers["k" /* selectIndex */])(SELECTORS.OPT_OFFICE), _clickNextButton);

// setContactInformation :: User -> IO ()
const setContactInformation = (user) =>
	helpers["a" /* Monad */].do(function*() {
		const telInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_TEL);
		const emailInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_EMAIL);
		const repeatEmailInput = yield Object(helpers["i" /* querySelector */])(SELECTORS.INP_REPEAT_EMAIL);

		yield Object(helpers["m" /* setValue */])(user.tel, telInput);
		yield Object(helpers["m" /* setValue */])(user.email, emailInput);
		yield Object(helpers["m" /* setValue */])(user.email, repeatEmailInput);
		yield _clickNextButton();

		return IO_default.a.of();
	});

// verifyAppointment :: () -> IO ()
const verifyAppointment = () =>
	helpers["a" /* Monad */].do(function*() {
		const { NO_APPOINTMENT, HAVE_APPOINTMENT } = MESSAGES;
		const messageArea = yield Object(helpers["i" /* querySelector */])(SELECTORS.TEXT_NO_APPOINTMENT);
		const submitBtn = yield Object(helpers["i" /* querySelector */])(SELECTORS.BTN_SUBMIT);
		const msg = messageArea.textContent;
		const action = msg === NO_APPOINTMENT ? Object(helpers["b" /* click */])(submitBtn) : speak(HAVE_APPOINTMENT);
		return IO_default.a.of(yield action);
	});

// CONCATENATED MODULE: ./chrome/content.js












const ReaderIO = ReaderT_default()(IO_default.a);

const userCodes = {
	MADRID_CITY: 33,
	PROCESS_RENOVATION_AND_FINGERPRINT: 19,
	FIRST_OFFICE_AVAILABLE: 0
};

const steps = {
	1: () => ReaderIO((user) => selectCity(user.MADRID_CITY)),
	2: () => ReaderIO((user) => selectProcessType(user.PROCESS_RENOVATION_AND_FINGERPRINT)),
	3: ReaderIO.liftFn(enterToProcedure),
	4: () => ReaderIO((user) => setPersonalInformation(user)),
	5: ReaderIO.liftFn(askForAppointment),
	6: () => ReaderIO((user) => selectOffice(user.FIRST_OFFICE_AVAILABLE)),
	7: () => ReaderIO((user) => setContactInformation(user)),
	8: ReaderIO.liftFn(verifyAppointment)
};

// persistUserDataFromPopup :: () -> Stream ()
const persistUserDataFromPopup = Object(pipe["a" /* default */])(chromeRuntime["a" /* getChromeMessages */], Object(chain["a" /* default */])(Object(naturalTransformations["a" /* ioToStream */])(saveUser)));

// sendStoredUserToPopup :: () -> Stream ()
const sendStoredUserToPopup = Object(pipe["a" /* default */])(
	() => Object(src["c" /* periodic */])(500),
	Object(chain["a" /* default */])(Object(naturalTransformations["a" /* ioToStream */])(getUser)),
	Object(map["a" /* default */])(option_default()(null)),
	Object(filter["a" /* default */])(helpers["e" /* isNotNil */]),
	Object(chain["a" /* default */])(chromeRuntime["c" /* sendChromeMessageToPopup */])
);

// fillPageFormSteps :: () -> Reader (IO ())
const fillPageFormSteps = Object(pipeK["a" /* default */])(
	ReaderIO.liftFn(() => Object(helpers["f" /* locationIncludes */])('index.html')),
	ReaderIO.liftFn((isIndexPage) => (isIndexPage ? IO_default.a.of(1) : getNextStep())),
	ReaderIO.liftFn(Object(helpers["o" /* tapF */])((step) => setNextStep(step + 1))),
	(step) => steps[step]() // run page Steps
);

const fillPageFormStepsWithUserData = Object(pipe["a" /* default */])(
	getUser, //
	Object(map["a" /* default */])(option_default()({})), //
	Object(map["a" /* default */])(es_merge(userCodes)),
	Object(chain["a" /* default */])((user) => fillPageFormSteps().runWith(user)) //
);

window.onload = function() {
	persistUserDataFromPopup().forEach(() => console.log('User Stored'));
	sendStoredUserToPopup().forEach(console.log, console.error, () => console.log('Sended stored User'));
	fillPageFormStepsWithUserData().run();
};


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ pipeK; });

// EXTERNAL MODULE: ./node_modules/ramda/es/chain.js + 4 modules
var chain = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ramda/es/pipe.js + 5 modules
var pipe = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isString.js
var _isString = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/ramda/es/reverse.js


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */

var reverse_reverse =
/*#__PURE__*/
Object(_curry1["a" /* default */])(function reverse(list) {
  return Object(_isString["a" /* default */])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

/* harmony default export */ var es_reverse = (reverse_reverse);
// CONCATENATED MODULE: ./node_modules/ramda/es/compose.js


/**
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */

function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return pipe["a" /* default */].apply(this, es_reverse(arguments));
}
// EXTERNAL MODULE: ./node_modules/ramda/es/map.js + 1 modules
var map = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/ramda/es/composeK.js



/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @deprecated since v0.26.0
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       const get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       const getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */

function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }

  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, Object(map["a" /* default */])(chain["a" /* default */], init)), last);
}
// CONCATENATED MODULE: ./node_modules/ramda/es/pipeK.js


/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @deprecated since v0.26.0
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      const getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */

function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }

  return composeK.apply(this, es_reverse(arguments));
}

/***/ })
/******/ ]);