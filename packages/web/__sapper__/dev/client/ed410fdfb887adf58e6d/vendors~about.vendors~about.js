(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~about"],{

/***/ "../../node_modules/bail/index.js":
/*!***************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/bail/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "../../node_modules/ccount/index.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/ccount/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ccount

function ccount(value, character) {
  var val = String(value)
  var count = 0
  var index

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  index = val.indexOf(character)

  while (index !== -1) {
    count++
    index = val.indexOf(character, index + 1)
  }

  return count
}


/***/ }),

/***/ "../../node_modules/character-entities-html4/index.json":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/character-entities-html4/index.json ***!
  \*************************************************************************************/
/*! exports provided: nbsp, iexcl, cent, pound, curren, yen, brvbar, sect, uml, copy, ordf, laquo, not, shy, reg, macr, deg, plusmn, sup2, sup3, acute, micro, para, middot, cedil, sup1, ordm, raquo, frac14, frac12, frac34, iquest, Agrave, Aacute, Acirc, Atilde, Auml, Aring, AElig, Ccedil, Egrave, Eacute, Ecirc, Euml, Igrave, Iacute, Icirc, Iuml, ETH, Ntilde, Ograve, Oacute, Ocirc, Otilde, Ouml, times, Oslash, Ugrave, Uacute, Ucirc, Uuml, Yacute, THORN, szlig, agrave, aacute, acirc, atilde, auml, aring, aelig, ccedil, egrave, eacute, ecirc, euml, igrave, iacute, icirc, iuml, eth, ntilde, ograve, oacute, ocirc, otilde, ouml, divide, oslash, ugrave, uacute, ucirc, uuml, yacute, thorn, yuml, fnof, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega, alpha, beta, gamma, delta, epsilon, zeta, eta, theta, iota, kappa, lambda, mu, nu, xi, omicron, pi, rho, sigmaf, sigma, tau, upsilon, phi, chi, psi, omega, thetasym, upsih, piv, bull, hellip, prime, Prime, oline, frasl, weierp, image, real, trade, alefsym, larr, uarr, rarr, darr, harr, crarr, lArr, uArr, rArr, dArr, hArr, forall, part, exist, empty, nabla, isin, notin, ni, prod, sum, minus, lowast, radic, prop, infin, ang, and, or, cap, cup, int, there4, sim, cong, asymp, ne, equiv, le, ge, sub, sup, nsub, sube, supe, oplus, otimes, perp, sdot, lceil, rceil, lfloor, rfloor, lang, rang, loz, spades, clubs, hearts, diams, quot, amp, lt, gt, OElig, oelig, Scaron, scaron, Yuml, circ, tilde, ensp, emsp, thinsp, zwnj, zwj, lrm, rlm, ndash, mdash, lsquo, rsquo, sbquo, ldquo, rdquo, bdquo, dagger, Dagger, permil, lsaquo, rsaquo, euro, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nbsp\":\" \",\"iexcl\":\"¡\",\"cent\":\"¢\",\"pound\":\"£\",\"curren\":\"¤\",\"yen\":\"¥\",\"brvbar\":\"¦\",\"sect\":\"§\",\"uml\":\"¨\",\"copy\":\"©\",\"ordf\":\"ª\",\"laquo\":\"«\",\"not\":\"¬\",\"shy\":\"­\",\"reg\":\"®\",\"macr\":\"¯\",\"deg\":\"°\",\"plusmn\":\"±\",\"sup2\":\"²\",\"sup3\":\"³\",\"acute\":\"´\",\"micro\":\"µ\",\"para\":\"¶\",\"middot\":\"·\",\"cedil\":\"¸\",\"sup1\":\"¹\",\"ordm\":\"º\",\"raquo\":\"»\",\"frac14\":\"¼\",\"frac12\":\"½\",\"frac34\":\"¾\",\"iquest\":\"¿\",\"Agrave\":\"À\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"Aring\":\"Å\",\"AElig\":\"Æ\",\"Ccedil\":\"Ç\",\"Egrave\":\"È\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Euml\":\"Ë\",\"Igrave\":\"Ì\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Iuml\":\"Ï\",\"ETH\":\"Ð\",\"Ntilde\":\"Ñ\",\"Ograve\":\"Ò\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"times\":\"×\",\"Oslash\":\"Ø\",\"Ugrave\":\"Ù\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"THORN\":\"Þ\",\"szlig\":\"ß\",\"agrave\":\"à\",\"aacute\":\"á\",\"acirc\":\"â\",\"atilde\":\"ã\",\"auml\":\"ä\",\"aring\":\"å\",\"aelig\":\"æ\",\"ccedil\":\"ç\",\"egrave\":\"è\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"euml\":\"ë\",\"igrave\":\"ì\",\"iacute\":\"í\",\"icirc\":\"î\",\"iuml\":\"ï\",\"eth\":\"ð\",\"ntilde\":\"ñ\",\"ograve\":\"ò\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"divide\":\"÷\",\"oslash\":\"ø\",\"ugrave\":\"ù\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"thorn\":\"þ\",\"yuml\":\"ÿ\",\"fnof\":\"ƒ\",\"Alpha\":\"Α\",\"Beta\":\"Β\",\"Gamma\":\"Γ\",\"Delta\":\"Δ\",\"Epsilon\":\"Ε\",\"Zeta\":\"Ζ\",\"Eta\":\"Η\",\"Theta\":\"Θ\",\"Iota\":\"Ι\",\"Kappa\":\"Κ\",\"Lambda\":\"Λ\",\"Mu\":\"Μ\",\"Nu\":\"Ν\",\"Xi\":\"Ξ\",\"Omicron\":\"Ο\",\"Pi\":\"Π\",\"Rho\":\"Ρ\",\"Sigma\":\"Σ\",\"Tau\":\"Τ\",\"Upsilon\":\"Υ\",\"Phi\":\"Φ\",\"Chi\":\"Χ\",\"Psi\":\"Ψ\",\"Omega\":\"Ω\",\"alpha\":\"α\",\"beta\":\"β\",\"gamma\":\"γ\",\"delta\":\"δ\",\"epsilon\":\"ε\",\"zeta\":\"ζ\",\"eta\":\"η\",\"theta\":\"θ\",\"iota\":\"ι\",\"kappa\":\"κ\",\"lambda\":\"λ\",\"mu\":\"μ\",\"nu\":\"ν\",\"xi\":\"ξ\",\"omicron\":\"ο\",\"pi\":\"π\",\"rho\":\"ρ\",\"sigmaf\":\"ς\",\"sigma\":\"σ\",\"tau\":\"τ\",\"upsilon\":\"υ\",\"phi\":\"φ\",\"chi\":\"χ\",\"psi\":\"ψ\",\"omega\":\"ω\",\"thetasym\":\"ϑ\",\"upsih\":\"ϒ\",\"piv\":\"ϖ\",\"bull\":\"•\",\"hellip\":\"…\",\"prime\":\"′\",\"Prime\":\"″\",\"oline\":\"‾\",\"frasl\":\"⁄\",\"weierp\":\"℘\",\"image\":\"ℑ\",\"real\":\"ℜ\",\"trade\":\"™\",\"alefsym\":\"ℵ\",\"larr\":\"←\",\"uarr\":\"↑\",\"rarr\":\"→\",\"darr\":\"↓\",\"harr\":\"↔\",\"crarr\":\"↵\",\"lArr\":\"⇐\",\"uArr\":\"⇑\",\"rArr\":\"⇒\",\"dArr\":\"⇓\",\"hArr\":\"⇔\",\"forall\":\"∀\",\"part\":\"∂\",\"exist\":\"∃\",\"empty\":\"∅\",\"nabla\":\"∇\",\"isin\":\"∈\",\"notin\":\"∉\",\"ni\":\"∋\",\"prod\":\"∏\",\"sum\":\"∑\",\"minus\":\"−\",\"lowast\":\"∗\",\"radic\":\"√\",\"prop\":\"∝\",\"infin\":\"∞\",\"ang\":\"∠\",\"and\":\"∧\",\"or\":\"∨\",\"cap\":\"∩\",\"cup\":\"∪\",\"int\":\"∫\",\"there4\":\"∴\",\"sim\":\"∼\",\"cong\":\"≅\",\"asymp\":\"≈\",\"ne\":\"≠\",\"equiv\":\"≡\",\"le\":\"≤\",\"ge\":\"≥\",\"sub\":\"⊂\",\"sup\":\"⊃\",\"nsub\":\"⊄\",\"sube\":\"⊆\",\"supe\":\"⊇\",\"oplus\":\"⊕\",\"otimes\":\"⊗\",\"perp\":\"⊥\",\"sdot\":\"⋅\",\"lceil\":\"⌈\",\"rceil\":\"⌉\",\"lfloor\":\"⌊\",\"rfloor\":\"⌋\",\"lang\":\"〈\",\"rang\":\"〉\",\"loz\":\"◊\",\"spades\":\"♠\",\"clubs\":\"♣\",\"hearts\":\"♥\",\"diams\":\"♦\",\"quot\":\"\\\"\",\"amp\":\"&\",\"lt\":\"<\",\"gt\":\">\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Yuml\":\"Ÿ\",\"circ\":\"ˆ\",\"tilde\":\"˜\",\"ensp\":\" \",\"emsp\":\" \",\"thinsp\":\" \",\"zwnj\":\"‌\",\"zwj\":\"‍\",\"lrm\":\"‎\",\"rlm\":\"‏\",\"ndash\":\"–\",\"mdash\":\"—\",\"lsquo\":\"‘\",\"rsquo\":\"’\",\"sbquo\":\"‚\",\"ldquo\":\"“\",\"rdquo\":\"”\",\"bdquo\":\"„\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"permil\":\"‰\",\"lsaquo\":\"‹\",\"rsaquo\":\"›\",\"euro\":\"€\"}");

/***/ }),

/***/ "../../node_modules/character-entities-legacy/index.json":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/character-entities-legacy/index.json ***!
  \**************************************************************************************/
/*! exports provided: AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "../../node_modules/character-reference-invalid/index.json":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/character-reference-invalid/index.json ***!
  \****************************************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "../../node_modules/collapse-white-space/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/collapse-white-space/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse

// `collapse(' \t\nbar \nbaz\t') // ' bar baz '`
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}


/***/ }),

/***/ "../../node_modules/extend/index.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/extend/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
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

/***/ "../../node_modules/is-alphabetical/index.js":
/*!**************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-alphabetical/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "../../node_modules/is-alphanumeric/index.js":
/*!**************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-alphanumeric/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return !/[^0-9a-z\xDF-\xFF]/.test(str.toLowerCase());
};


/***/ }),

/***/ "../../node_modules/is-alphanumerical/index.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-alphanumerical/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "../../node_modules/is-decimal/index.js":
/*!*********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-decimal/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "../../node_modules/is-hexadecimal/index.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-hexadecimal/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "../../node_modules/is-whitespace-character/index.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-whitespace-character/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

// Check if the given character code, or the character code at the first
// character, is a whitespace character.
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),

/***/ "../../node_modules/is-word-character/index.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/is-word-character/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

// Check if the given character code, or the character code at the first
// character, is a word character.
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),

/***/ "../../node_modules/longest-streak/index.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/longest-streak/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = longestStreak

// Get the count of the longest repeating streak of `character` in `value`.
function longestStreak(value, character) {
  var count = 0
  var maximum = 0
  var expected
  var index

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  value = String(value)
  index = value.indexOf(character)
  expected = index

  while (index !== -1) {
    count++

    if (index === expected) {
      if (count > maximum) {
        maximum = count
      }
    } else {
      count = 1
    }

    expected = index + 1
    index = value.indexOf(character, expected)
  }

  return maximum
}


/***/ }),

/***/ "../../node_modules/markdown-escapes/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/markdown-escapes/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

// Get markdown escapes.
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ }),

/***/ "../../node_modules/markdown-table/index.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/markdown-table/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = markdownTable

var trailingWhitespace = / +$/

// Characters.
var space = ' '
var lineFeed = '\n'
var dash = '-'
var colon = ':'
var verticalBar = '|'

var x = 0
var C = 67
var L = 76
var R = 82
var c = 99
var l = 108
var r = 114

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {}
  var padding = settings.padding !== false
  var start = settings.delimiterStart !== false
  var end = settings.delimiterEnd !== false
  var align = (settings.align || []).concat()
  var alignDelimiters = settings.alignDelimiters !== false
  var alignments = []
  var stringLength = settings.stringLength || defaultStringLength
  var rowIndex = -1
  var rowLength = table.length
  var cellMatrix = []
  var sizeMatrix = []
  var row = []
  var sizes = []
  var longestCellByColumn = []
  var mostCellsPerRow = 0
  var cells
  var columnIndex
  var columnLength
  var largest
  var size
  var cell
  var lines
  var line
  var before
  var after
  var code

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex]
    columnIndex = -1
    columnLength = cells.length
    row = []
    sizes = []

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex])

      if (alignDelimiters === true) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        largest = longestCellByColumn[columnIndex]

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1
  columnLength = mostCellsPerRow

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  columnLength = mostCellsPerRow
  row = []
  sizes = []

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === l) {
      before = colon
    } else if (code === r) {
      after = colon
    } else if (code === c) {
      before = colon
      after = colon
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        )
      : 1

    cell = before + repeat(dash, size) + after

    if (alignDelimiters === true) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  rowLength = cellMatrix.length
  lines = []

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    columnLength = mostCellsPerRow
    line = []

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === r) {
          before = repeat(space, size)
        } else if (code === c) {
          if (size % 2 === 0) {
            before = repeat(space, size / 2)
            after = before
          } else {
            before = repeat(space, size / 2 + 0.5)
            after = repeat(space, size / 2 - 0.5)
          }
        } else {
          after = repeat(space, size)
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar)
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space)
      }

      if (alignDelimiters === true) {
        line.push(before)
      }

      line.push(cell)

      if (alignDelimiters === true) {
        line.push(after)
      }

      if (padding === true) {
        line.push(space)
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar)
      }
    }

    line = line.join('')

    if (end === false) {
      line = line.replace(trailingWhitespace, '')
    }

    lines.push(line)
  }

  return lines.join(lineFeed)
}

function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value) {
  return value.length
}

function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : x

  return code === L || code === l
    ? l
    : code === R || code === r
    ? r
    : code === C || code === c
    ? c
    : x
}


/***/ }),

/***/ "../../node_modules/mdast-util-compact/index.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-compact/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../../node_modules/unist-util-visit/index.js")

module.exports = compact

// Make an mdast tree compact by merging adjacent text nodes.
function compact(tree, commonmark) {
  visit(tree, visitor)

  return tree

  function visitor(child, index, parent) {
    var siblings = parent ? parent.children : []
    var prev = index && siblings[index - 1]

    if (
      prev &&
      child.type === prev.type &&
      mergeable(prev, commonmark) &&
      mergeable(child, commonmark)
    ) {
      if (child.value) {
        prev.value += child.value
      }

      if (child.children) {
        prev.children = prev.children.concat(child.children)
      }

      siblings.splice(index, 1)

      if (prev.position && child.position) {
        prev.position.end = child.position.end
      }

      return index
    }
  }
}

function mergeable(node, commonmark) {
  var start
  var end

  if (node.type === 'text') {
    if (!node.position) {
      return true
    }

    start = node.position.start
    end = node.position.end

    // Only merge nodes which occupy the same size as their `value`.
    return (
      start.line !== end.line || end.column - start.column === node.value.length
    )
  }

  return commonmark && node.type === 'blockquote'
}


/***/ }),

/***/ "../../node_modules/parse-entities/decode-entity.browser.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/parse-entities/decode-entity.browser.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "../../node_modules/parse-entities/index.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/parse-entities/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "../../node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "../../node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "../../node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "../../node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "../../node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 // '\f'
var space = 32 // ' '
var ampersand = 38 // '&'
var semicolon = 59 // ';'
var lessThan = 60 // '<'
var equalsTo = 61 // '='
var numberSign = 35 // '#'
var uppercaseX = 88 // 'X'
var lowercaseX = 120 // 'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end
  // (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "../../node_modules/path-browserify/index.js":
/*!**************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/path-browserify/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/remark-stringify/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../../node_modules/unherit/index.js")
var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var Compiler = __webpack_require__(/*! ./lib/compiler.js */ "../../node_modules/remark-stringify/lib/compiler.js")

module.exports = stringify
stringify.Compiler = Compiler

function stringify(options) {
  var Local = unherit(Compiler)
  Local.prototype.options = xtend(
    Local.prototype.options,
    this.data('settings'),
    options
  )
  this.Compiler = Local
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/compiler.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/compiler.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var toggle = __webpack_require__(/*! state-toggle */ "../../node_modules/state-toggle/index.js")

module.exports = Compiler

// Construct a new compiler.
function Compiler(tree, file) {
  this.inLink = false
  this.inTable = false
  this.tree = tree
  this.file = file
  this.options = xtend(this.options)
  this.setOptions({})
}

var proto = Compiler.prototype

// Enter and exit helpers. */
proto.enterLink = toggle('inLink', false)
proto.enterTable = toggle('inTable', false)
proto.enterLinkReference = __webpack_require__(/*! ./util/enter-link-reference */ "../../node_modules/remark-stringify/lib/util/enter-link-reference.js")

// Configuration.
proto.options = __webpack_require__(/*! ./defaults */ "../../node_modules/remark-stringify/lib/defaults.js")
proto.setOptions = __webpack_require__(/*! ./set-options */ "../../node_modules/remark-stringify/lib/set-options.js")

proto.compile = __webpack_require__(/*! ./macro/compile */ "../../node_modules/remark-stringify/lib/macro/compile.js")
proto.visit = __webpack_require__(/*! ./macro/one */ "../../node_modules/remark-stringify/lib/macro/one.js")
proto.all = __webpack_require__(/*! ./macro/all */ "../../node_modules/remark-stringify/lib/macro/all.js")
proto.block = __webpack_require__(/*! ./macro/block */ "../../node_modules/remark-stringify/lib/macro/block.js")
proto.visitOrderedItems = __webpack_require__(/*! ./macro/ordered-items */ "../../node_modules/remark-stringify/lib/macro/ordered-items.js")
proto.visitUnorderedItems = __webpack_require__(/*! ./macro/unordered-items */ "../../node_modules/remark-stringify/lib/macro/unordered-items.js")

// Expose visitors.
proto.visitors = {
  root: __webpack_require__(/*! ./visitors/root */ "../../node_modules/remark-stringify/lib/visitors/root.js"),
  text: __webpack_require__(/*! ./visitors/text */ "../../node_modules/remark-stringify/lib/visitors/text.js"),
  heading: __webpack_require__(/*! ./visitors/heading */ "../../node_modules/remark-stringify/lib/visitors/heading.js"),
  paragraph: __webpack_require__(/*! ./visitors/paragraph */ "../../node_modules/remark-stringify/lib/visitors/paragraph.js"),
  blockquote: __webpack_require__(/*! ./visitors/blockquote */ "../../node_modules/remark-stringify/lib/visitors/blockquote.js"),
  list: __webpack_require__(/*! ./visitors/list */ "../../node_modules/remark-stringify/lib/visitors/list.js"),
  listItem: __webpack_require__(/*! ./visitors/list-item */ "../../node_modules/remark-stringify/lib/visitors/list-item.js"),
  inlineCode: __webpack_require__(/*! ./visitors/inline-code */ "../../node_modules/remark-stringify/lib/visitors/inline-code.js"),
  code: __webpack_require__(/*! ./visitors/code */ "../../node_modules/remark-stringify/lib/visitors/code.js"),
  html: __webpack_require__(/*! ./visitors/html */ "../../node_modules/remark-stringify/lib/visitors/html.js"),
  thematicBreak: __webpack_require__(/*! ./visitors/thematic-break */ "../../node_modules/remark-stringify/lib/visitors/thematic-break.js"),
  strong: __webpack_require__(/*! ./visitors/strong */ "../../node_modules/remark-stringify/lib/visitors/strong.js"),
  emphasis: __webpack_require__(/*! ./visitors/emphasis */ "../../node_modules/remark-stringify/lib/visitors/emphasis.js"),
  break: __webpack_require__(/*! ./visitors/break */ "../../node_modules/remark-stringify/lib/visitors/break.js"),
  delete: __webpack_require__(/*! ./visitors/delete */ "../../node_modules/remark-stringify/lib/visitors/delete.js"),
  link: __webpack_require__(/*! ./visitors/link */ "../../node_modules/remark-stringify/lib/visitors/link.js"),
  linkReference: __webpack_require__(/*! ./visitors/link-reference */ "../../node_modules/remark-stringify/lib/visitors/link-reference.js"),
  imageReference: __webpack_require__(/*! ./visitors/image-reference */ "../../node_modules/remark-stringify/lib/visitors/image-reference.js"),
  definition: __webpack_require__(/*! ./visitors/definition */ "../../node_modules/remark-stringify/lib/visitors/definition.js"),
  image: __webpack_require__(/*! ./visitors/image */ "../../node_modules/remark-stringify/lib/visitors/image.js"),
  table: __webpack_require__(/*! ./visitors/table */ "../../node_modules/remark-stringify/lib/visitors/table.js"),
  tableCell: __webpack_require__(/*! ./visitors/table-cell */ "../../node_modules/remark-stringify/lib/visitors/table-cell.js")
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/defaults.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/defaults.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  gfm: true,
  commonmark: false,
  pedantic: false,
  entities: 'false',
  setext: false,
  closeAtx: false,
  tableCellPadding: true,
  tablePipeAlign: true,
  stringLength: stringLength,
  incrementListMarker: true,
  fences: false,
  fence: '`',
  bullet: '-',
  listItemIndent: 'tab',
  rule: '*',
  ruleSpaces: true,
  ruleRepetition: 3,
  strong: '*',
  emphasis: '_'
}

function stringLength(value) {
  return value.length
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/escape.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/escape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphanumeric = __webpack_require__(/*! is-alphanumeric */ "../../node_modules/is-alphanumeric/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var escapes = __webpack_require__(/*! markdown-escapes */ "../../node_modules/markdown-escapes/index.js")
var prefix = __webpack_require__(/*! ./util/entity-prefix-length */ "../../node_modules/remark-stringify/lib/util/entity-prefix-length.js")

module.exports = factory

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var numberSign = '#'
var ampersand = '&'
var leftParenthesis = '('
var rightParenthesis = ')'
var asterisk = '*'
var plusSign = '+'
var dash = '-'
var dot = '.'
var colon = ':'
var lessThan = '<'
var greaterThan = '>'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'
var underscore = '_'
var graveAccent = '`'
var verticalBar = '|'
var tilde = '~'
var exclamationMark = '!'

var entities = {
  '<': '&lt;',
  ':': '&#x3A;',
  '&': '&amp;',
  '|': '&#x7C;',
  '~': '&#x7E;'
}

var shortcut = 'shortcut'
var mailto = 'mailto'
var https = 'https'
var http = 'http'

var blankExpression = /\n\s*$/

// Factory to escape characters.
function factory(options) {
  return escape

  // Escape punctuation characters in a node’s value.
  function escape(value, node, parent) {
    var self = this
    var gfm = options.gfm
    var commonmark = options.commonmark
    var pedantic = options.pedantic
    var markers = commonmark ? [dot, rightParenthesis] : [dot]
    var siblings = parent && parent.children
    var index = siblings && siblings.indexOf(node)
    var previous = siblings && siblings[index - 1]
    var next = siblings && siblings[index + 1]
    var length = value.length
    var escapable = escapes(options)
    var position = -1
    var queue = []
    var escaped = queue
    var afterNewLine
    var character
    var wordCharBefore
    var wordCharAfter
    var offset
    var replace

    if (previous) {
      afterNewLine = text(previous) && blankExpression.test(previous.value)
    } else {
      afterNewLine =
        !parent || parent.type === 'root' || parent.type === 'paragraph'
    }

    while (++position < length) {
      character = value.charAt(position)
      replace = false

      if (character === '\n') {
        afterNewLine = true
      } else if (
        character === backslash ||
        character === graveAccent ||
        character === asterisk ||
        character === leftSquareBracket ||
        character === lessThan ||
        (character === ampersand && prefix(value.slice(position)) > 0) ||
        (character === rightSquareBracket && self.inLink) ||
        (gfm && character === tilde && value.charAt(position + 1) === tilde) ||
        (gfm &&
          character === verticalBar &&
          (self.inTable || alignment(value, position))) ||
        (character === underscore &&
          // Delegate leading/trailing underscores to the multinode version below.
          position > 0 &&
          position < length - 1 &&
          (pedantic ||
            !alphanumeric(value.charAt(position - 1)) ||
            !alphanumeric(value.charAt(position + 1)))) ||
        (gfm && !self.inLink && character === colon && protocol(queue.join('')))
      ) {
        replace = true
      } else if (afterNewLine) {
        if (
          character === greaterThan ||
          character === numberSign ||
          character === asterisk ||
          character === dash ||
          character === plusSign
        ) {
          replace = true
        } else if (decimal(character)) {
          offset = position + 1

          while (offset < length) {
            if (!decimal(value.charAt(offset))) {
              break
            }

            offset++
          }

          if (markers.indexOf(value.charAt(offset)) !== -1) {
            next = value.charAt(offset + 1)

            if (!next || next === space || next === tab || next === lineFeed) {
              queue.push(value.slice(position, offset))
              position = offset
              character = value.charAt(position)
              replace = true
            }
          }
        }
      }

      if (afterNewLine && !whitespace(character)) {
        afterNewLine = false
      }

      queue.push(replace ? one(character) : character)
    }

    // Multi-node versions.
    if (siblings && text(node)) {
      // Check for an opening parentheses after a link-reference (which can be
      // joined by white-space).
      if (previous && previous.referenceType === shortcut) {
        position = -1
        length = escaped.length

        while (++position < length) {
          character = escaped[position]

          if (character === space || character === tab) {
            continue
          }

          if (character === leftParenthesis || character === colon) {
            escaped[position] = one(character)
          }

          break
        }

        // If the current node is all spaces / tabs, preceded by a shortcut,
        // and followed by a text starting with `(`, escape it.
        if (
          text(next) &&
          position === length &&
          next.value.charAt(0) === leftParenthesis
        ) {
          escaped.push(backslash)
        }
      }

      // Ensure non-auto-links are not seen as links.  This pattern needs to
      // check the preceding nodes too.
      if (
        gfm &&
        !self.inLink &&
        text(previous) &&
        value.charAt(0) === colon &&
        protocol(previous.value.slice(-6))
      ) {
        escaped[0] = one(colon)
      }

      // Escape ampersand if it would otherwise start an entity.
      if (
        text(next) &&
        value.charAt(length - 1) === ampersand &&
        prefix(ampersand + next.value) !== 0
      ) {
        escaped[escaped.length - 1] = one(ampersand)
      }

      // Escape exclamation marks immediately followed by links.
      if (
        next &&
        next.type === 'link' &&
        value.charAt(length - 1) === exclamationMark
      ) {
        escaped[escaped.length - 1] = one(exclamationMark)
      }

      // Escape double tildes in GFM.
      if (
        gfm &&
        text(next) &&
        value.charAt(length - 1) === tilde &&
        next.value.charAt(0) === tilde
      ) {
        escaped.splice(-1, 0, backslash)
      }

      // Escape underscores, but not mid-word (unless in pedantic mode).
      wordCharBefore = text(previous) && alphanumeric(previous.value.slice(-1))
      wordCharAfter = text(next) && alphanumeric(next.value.charAt(0))

      if (length === 1) {
        if (
          value === underscore &&
          (pedantic || !wordCharBefore || !wordCharAfter)
        ) {
          escaped.unshift(backslash)
        }
      } else {
        if (
          value.charAt(0) === underscore &&
          (pedantic || !wordCharBefore || !alphanumeric(value.charAt(1)))
        ) {
          escaped.unshift(backslash)
        }

        if (
          value.charAt(length - 1) === underscore &&
          (pedantic ||
            !wordCharAfter ||
            !alphanumeric(value.charAt(length - 2)))
        ) {
          escaped.splice(-1, 0, backslash)
        }
      }
    }

    return escaped.join('')

    function one(character) {
      return escapable.indexOf(character) === -1
        ? entities[character]
        : backslash + character
    }
  }
}

// Check if `index` in `value` is inside an alignment row.
function alignment(value, index) {
  var start = value.lastIndexOf(lineFeed, index)
  var end = value.indexOf(lineFeed, index)
  var char

  end = end === -1 ? value.length : end

  while (++start < end) {
    char = value.charAt(start)

    if (
      char !== colon &&
      char !== dash &&
      char !== space &&
      char !== verticalBar
    ) {
      return false
    }
  }

  return true
}

// Check if `node` is a text node.
function text(node) {
  return node && node.type === 'text'
}

// Check if `value` ends in a protocol.
function protocol(value) {
  var tail = value.slice(-6).toLowerCase()
  return tail === mailto || tail.slice(-5) === https || tail.slice(-4) === http
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/all.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/all.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

// Visit all children of `parent`.
function all(parent) {
  var self = this
  var children = parent.children
  var length = children.length
  var results = []
  var index = -1

  while (++index < length) {
    results[index] = self.visit(children[index], parent)
  }

  return results
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/block.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/block.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = block

var lineFeed = '\n'

var blank = lineFeed + lineFeed
var triple = blank + lineFeed
var comment = blank + '<!---->' + blank

// Stringify a block node with block children (e.g., `root` or `blockquote`).
// Knows about code following a list, or adjacent lists with similar bullets,
// and places an extra line feed between them.
function block(node) {
  var self = this
  var options = self.options
  var fences = options.fences
  var gap = options.commonmark ? comment : triple
  var values = []
  var children = node.children
  var length = children.length
  var index = -1
  var previous
  var child

  while (++index < length) {
    previous = child
    child = children[index]

    if (previous) {
      // A list preceding another list that are equally ordered, or a
      // list preceding an indented code block, need a gap between them,
      // so as not to see them as one list, or content of the list,
      // respectively.
      //
      // In commonmark, only something that breaks both up can do that,
      // so we opt for an empty, invisible comment.  In other flavours,
      // two blank lines are fine.
      if (
        previous.type === 'list' &&
        ((child.type === 'list' && previous.ordered === child.ordered) ||
          (child.type === 'code' && !child.lang && !fences))
      ) {
        values.push(gap)
      } else {
        values.push(blank)
      }
    }

    values.push(self.visit(child, node))
  }

  return values.join('')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/compile.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/compile.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compact = __webpack_require__(/*! mdast-util-compact */ "../../node_modules/mdast-util-compact/index.js")

module.exports = compile

// Stringify the given tree.
function compile() {
  return this.visit(compact(this.tree, this.options.commonmark))
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/one.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/one.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

function one(node, parent) {
  var self = this
  var visitors = self.visitors

  // Fail on unknown nodes.
  if (typeof visitors[node.type] !== 'function') {
    self.file.fail(
      new Error(
        'Missing compiler for node of type `' + node.type + '`: `' + node + '`'
      ),
      node
    )
  }

  return visitors[node.type].call(self, node, parent)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/ordered-items.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/ordered-items.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = orderedItems

var lineFeed = '\n'
var dot = '.'

var blank = lineFeed + lineFeed

// Visit ordered list items.
//
// Starts the list with
// `node.start` and increments each following list item
// bullet by one:
//
//     2. foo
//     3. bar
//
// In `incrementListMarker: false` mode, does not increment
// each marker and stays on `node.start`:
//
//     1. foo
//     1. bar
function orderedItems(node) {
  var self = this
  var fn = self.visitors.listItem
  var increment = self.options.incrementListMarker
  var values = []
  var start = node.start
  var children = node.children
  var length = children.length
  var index = -1
  var bullet

  start = start == null ? 1 : start

  while (++index < length) {
    bullet = (increment ? start + index : start) + dot
    values[index] = fn.call(self, children[index], node, index, bullet)
  }

  return values.join(node.spread ? blank : lineFeed)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/macro/unordered-items.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/macro/unordered-items.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = unorderedItems

var lineFeed = '\n'

var blank = lineFeed + lineFeed

// Visit unordered list items.  Uses `options.bullet` as each item’s bullet.
function unorderedItems(node) {
  var self = this
  var bullet = self.options.bullet
  var fn = self.visitors.listItem
  var children = node.children
  var length = children.length
  var index = -1
  var values = []

  while (++index < length) {
    values[index] = fn.call(self, children[index], node, index, bullet)
  }

  return values.join(node.spread ? blank : lineFeed)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/set-options.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/set-options.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var encode = __webpack_require__(/*! stringify-entities */ "../../node_modules/stringify-entities/index.js")
var defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/remark-stringify/lib/defaults.js")
var escapeFactory = __webpack_require__(/*! ./escape */ "../../node_modules/remark-stringify/lib/escape.js")
var identity = __webpack_require__(/*! ./util/identity */ "../../node_modules/remark-stringify/lib/util/identity.js")

module.exports = setOptions

// Map of applicable enums.
var maps = {
  entities: {true: true, false: true, numbers: true, escape: true},
  bullet: {'*': true, '-': true, '+': true},
  rule: {'-': true, _: true, '*': true},
  listItemIndent: {tab: true, mixed: true, 1: true},
  emphasis: {_: true, '*': true},
  strong: {_: true, '*': true},
  fence: {'`': true, '~': true}
}

// Expose `validate`.
var validate = {
  boolean: validateBoolean,
  string: validateString,
  number: validateNumber,
  function: validateFunction
}

// Set options.  Does not overwrite previously set options.
function setOptions(options) {
  var self = this
  var current = self.options
  var ruleRepetition
  var key

  if (options == null) {
    options = {}
  } else if (typeof options === 'object') {
    options = xtend(options)
  } else {
    throw new Error('Invalid value `' + options + '` for setting `options`')
  }

  for (key in defaults) {
    validate[typeof defaults[key]](options, key, current[key], maps[key])
  }

  ruleRepetition = options.ruleRepetition

  if (ruleRepetition && ruleRepetition < 3) {
    raise(ruleRepetition, 'options.ruleRepetition')
  }

  self.encode = encodeFactory(String(options.entities))
  self.escape = escapeFactory(options)

  self.options = options

  return self
}

// Validate a value to be boolean. Defaults to `def`.  Raises an exception with
// `context[name]` when not a boolean.
function validateBoolean(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (typeof value !== 'boolean') {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be boolean. Defaults to `def`.  Raises an exception with
// `context[name]` when not a boolean.
function validateNumber(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (isNaN(value)) {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be in `map`. Defaults to `def`.  Raises an exception
// with `context[name]` when not in `map`.
function validateString(context, name, def, map) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  value = String(value)

  if (!(value in map)) {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be function. Defaults to `def`.  Raises an exception
// with `context[name]` when not a function.
function validateFunction(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (typeof value !== 'function') {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Factory to encode HTML entities.  Creates a no-operation function when
// `type` is `'false'`, a function which encodes using named references when
// `type` is `'true'`, and a function which encodes using numbered references
// when `type` is `'numbers'`.
function encodeFactory(type) {
  var options = {}

  if (type === 'false') {
    return identity
  }

  if (type === 'true') {
    options.useNamedReferences = true
  }

  if (type === 'escape') {
    options.escapeOnly = true
    options.useNamedReferences = true
  }

  return wrapped

  // Encode HTML entities using the bound options.
  function wrapped(value) {
    return encode(value, options)
  }
}

// Throw an exception with in its `message` `value` and `name`.
function raise(value, name) {
  throw new Error('Invalid value `' + value + '` for setting `' + name + '`')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/copy-identifier-encoding.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/copy-identifier-encoding.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var entityPrefixLength = __webpack_require__(/*! ./entity-prefix-length */ "../../node_modules/remark-stringify/lib/util/entity-prefix-length.js")

module.exports = copy

var ampersand = '&'

var punctuationExppresion = /[-!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~_]/

// For shortcut and collapsed reference links, the contents is also an
// identifier, so we need to restore the original encoding and escaping
// that were present in the source string.
//
// This function takes the unescaped & unencoded value from shortcut’s
// child nodes and the identifier and encodes the former according to
// the latter.
function copy(value, identifier) {
  var length = value.length
  var count = identifier.length
  var result = []
  var position = 0
  var index = 0
  var start

  while (index < length) {
    // Take next non-punctuation characters from `value`.
    start = index

    while (index < length && !punctuationExppresion.test(value.charAt(index))) {
      index += 1
    }

    result.push(value.slice(start, index))

    // Advance `position` to the next punctuation character.
    while (
      position < count &&
      !punctuationExppresion.test(identifier.charAt(position))
    ) {
      position += 1
    }

    // Take next punctuation characters from `identifier`.
    start = position

    while (
      position < count &&
      punctuationExppresion.test(identifier.charAt(position))
    ) {
      if (identifier.charAt(position) === ampersand) {
        position += entityPrefixLength(identifier.slice(position))
      }

      position += 1
    }

    result.push(identifier.slice(start, position))

    // Advance `index` to the next non-punctuation character.
    while (index < length && punctuationExppresion.test(value.charAt(index))) {
      index += 1
    }
  }

  return result.join('')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/enclose-title.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/enclose-title.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = enclose

var quotationMark = '"'
var apostrophe = "'"

// There is currently no way to support nested delimiters across Markdown.pl,
// CommonMark, and GitHub (RedCarpet).  The following code supports Markdown.pl
// and GitHub.
// CommonMark is not supported when mixing double- and single quotes inside a
// title.
function enclose(title) {
  var delimiter =
    title.indexOf(quotationMark) === -1 ? quotationMark : apostrophe
  return delimiter + title + delimiter
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/enclose-uri.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/enclose-uri.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var count = __webpack_require__(/*! ccount */ "../../node_modules/ccount/index.js")

module.exports = enclose

var leftParenthesis = '('
var rightParenthesis = ')'
var lessThan = '<'
var greaterThan = '>'

var expression = /\s/

// Wrap `url` in angle brackets when needed, or when
// forced.
// In links, images, and definitions, the URL part needs
// to be enclosed when it:
//
// - has a length of `0`
// - contains white-space
// - has more or less opening than closing parentheses
function enclose(uri, always) {
  if (
    always ||
    uri.length === 0 ||
    expression.test(uri) ||
    count(uri, leftParenthesis) !== count(uri, rightParenthesis)
  ) {
    return lessThan + uri + greaterThan
  }

  return uri
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/enter-link-reference.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/enter-link-reference.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(/*! ./identity */ "../../node_modules/remark-stringify/lib/util/identity.js")

module.exports = enter

// Shortcut and collapsed link references need no escaping and encoding during
// the processing of child nodes (it must be implied from identifier).
//
// This toggler turns encoding and escaping off for shortcut and collapsed
// references.
//
// Implies `enterLink`.
function enter(compiler, node) {
  var encode = compiler.encode
  var escape = compiler.escape
  var exitLink = compiler.enterLink()

  if (node.referenceType !== 'shortcut' && node.referenceType !== 'collapsed') {
    return exitLink
  }

  compiler.escape = identity
  compiler.encode = identity

  return exit

  function exit() {
    compiler.encode = encode
    compiler.escape = escape
    exitLink()
  }
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/entity-prefix-length.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/entity-prefix-length.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")

module.exports = length

var ampersand = '&'

// Returns the length of HTML entity that is a prefix of the given string
// (excluding the ampersand), 0 if it does not start with an entity.
function length(value) {
  var prefix

  /* istanbul ignore if - Currently also tested for at implemention, but we
   * keep it here because that’s proper. */
  if (value.charAt(0) !== ampersand) {
    return 0
  }

  prefix = value.split(ampersand, 2).join(ampersand)

  return prefix.length - decode(prefix).length
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/identity.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/identity.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = identity

function identity(value) {
  return value
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/label.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/label.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = label

var leftSquareBracket = '['
var rightSquareBracket = ']'

var shortcut = 'shortcut'
var collapsed = 'collapsed'

// Stringify a reference label.
// Because link references are easily, mistakingly, created (for example,
// `[foo]`), reference nodes have an extra property depicting how it looked in
// the original document, so stringification can cause minimal changes.
function label(node) {
  var type = node.referenceType

  if (type === shortcut) {
    return ''
  }

  return (
    leftSquareBracket +
    (type === collapsed ? '' : node.label || node.identifier) +
    rightSquareBracket
  )
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/util/pad.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/util/pad.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = pad

var lineFeed = '\n'
var space = ' '

var tabSize = 4

// Pad `value` with `level * tabSize` spaces.  Respects lines.  Ignores empty
// lines.
function pad(value, level) {
  var values = value.split(lineFeed)
  var index = values.length
  var padding = repeat(space, level * tabSize)

  while (index--) {
    if (values[index].length !== 0) {
      values[index] = padding + values[index]
    }
  }

  return values.join(lineFeed)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/blockquote.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/blockquote.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var lineFeed = '\n'
var space = ' '
var greaterThan = '>'

function blockquote(node) {
  var values = this.block(node).split(lineFeed)
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]
    result[index] = (value ? space : '') + value
  }

  return greaterThan + result.join(lineFeed + greaterThan)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/break.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/break.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lineBreak

var backslash = '\\'
var lineFeed = '\n'
var space = ' '

var commonmark = backslash + lineFeed
var normal = space + space + lineFeed

function lineBreak() {
  return this.options.commonmark ? commonmark : normal
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/code.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/code.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var streak = __webpack_require__(/*! longest-streak */ "../../node_modules/longest-streak/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var pad = __webpack_require__(/*! ../util/pad */ "../../node_modules/remark-stringify/lib/util/pad.js")

module.exports = code

var lineFeed = '\n'
var space = ' '
var tilde = '~'
var graveAccent = '`'

// Stringify code.
// Creates indented code when:
//
// - No language tag exists
// - Not in `fences: true` mode
// - A non-empty value exists
//
// Otherwise, GFM fenced code is created:
//
// ````markdown
// ```js
// foo();
// ```
// ````
//
// When in ``fence: `~` `` mode, uses tildes as fences:
//
// ```markdown
// ~~~js
// foo();
// ~~~
// ```
//
// Knows about internal fences:
//
// `````markdown
// ````markdown
// ```javascript
// foo();
// ```
// ````
// `````
function code(node, parent) {
  var self = this
  var value = node.value
  var options = self.options
  var marker = options.fence
  var info = node.lang || ''
  var fence

  if (info && node.meta) {
    info += space + node.meta
  }

  info = self.encode(self.escape(info, node))

  // Without (needed) fences.
  if (
    !info &&
    !options.fences &&
    value &&
    value.charAt(0) !== lineFeed &&
    value.charAt(value.length - 1) !== lineFeed
  ) {
    // Throw when pedantic, in a list item which isn’t compiled using a tab.
    if (
      parent &&
      parent.type === 'listItem' &&
      options.listItemIndent !== 'tab' &&
      options.pedantic
    ) {
      self.file.fail(
        'Cannot indent code properly. See https://git.io/fxKR8',
        node.position
      )
    }

    return pad(value, 1)
  }

  // Backticks in the info string don’t work with backtick fenced code.
  // Backticks (and tildes) are fine in tilde fenced code.
  if (marker === graveAccent && info.indexOf(graveAccent) !== -1) {
    marker = tilde
  }

  fence = repeat(marker, Math.max(streak(value, marker) + 1, 3))

  return fence + info + lineFeed + value + lineFeed + fence
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/definition.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/definition.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "../../node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "../../node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = definition

var space = ' '
var colon = ':'
var leftSquareBracket = '['
var rightSquareBracket = ']'

// Stringify an URL definition.
//
// Is smart about enclosing `url` (see `encloseURI()`) and `title` (see
// `encloseTitle()`).
//
// ```markdown
// [foo]: <foo at bar dot com> 'An "example" e-mail'
// ```
function definition(node) {
  var content = uri(node.url)

  if (node.title) {
    content += space + title(node.title)
  }

  return (
    leftSquareBracket +
    (node.label || node.identifier) +
    rightSquareBracket +
    colon +
    space +
    content
  )
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/delete.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/delete.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var tilde = '~'

var fence = tilde + tilde

function strikethrough(node) {
  return fence + this.all(node).join('') + fence
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/emphasis.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/emphasis.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var underscore = '_'
var asterisk = '*'

// Stringify an `emphasis`.
//
// The marker used is configurable through `emphasis`, which defaults to an
// underscore (`'_'`) but also accepts an asterisk (`'*'`):
//
// ```markdown
// *foo*
// ```
//
// In `pedantic` mode, text which itself contains an underscore will cause the
// marker to default to an asterisk instead:
//
// ```markdown
// *foo_bar*
// ```
function emphasis(node) {
  var marker = this.options.emphasis
  var content = this.all(node).join('')

  // When in pedantic mode, prevent using underscore as the marker when there
  // are underscores in the content.
  if (
    this.options.pedantic &&
    marker === underscore &&
    content.indexOf(marker) !== -1
  ) {
    marker = asterisk
  }

  return marker + content + marker
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/heading.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/heading.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = heading

var lineFeed = '\n'
var space = ' '
var numberSign = '#'
var dash = '-'
var equalsTo = '='

// Stringify a heading.
//
// In `setext: true` mode and when `depth` is smaller than three, creates a
// setext header:
//
// ```markdown
// Foo
// ===
// ```
//
// Otherwise, an ATX header is generated:
//
// ```markdown
// ### Foo
// ```
//
// In `closeAtx: true` mode, the header is closed with hashes:
//
// ```markdown
// ### Foo ###
// ```
function heading(node) {
  var self = this
  var depth = node.depth
  var setext = self.options.setext
  var closeAtx = self.options.closeAtx
  var content = self.all(node).join('')
  var prefix

  if (setext && depth < 3) {
    return (
      content + lineFeed + repeat(depth === 1 ? equalsTo : dash, content.length)
    )
  }

  prefix = repeat(numberSign, node.depth)

  return prefix + space + content + (closeAtx ? space + prefix : '')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/html.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/html.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = html

function html(node) {
  return node.value
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/image-reference.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/image-reference.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var label = __webpack_require__(/*! ../util/label */ "../../node_modules/remark-stringify/lib/util/label.js")

module.exports = imageReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

function imageReference(node) {
  return (
    exclamationMark +
    leftSquareBracket +
    (this.encode(node.alt, node) || '') +
    rightSquareBracket +
    label(node)
  )
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/image.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/image.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "../../node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "../../node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = image

var space = ' '
var leftParenthesis = '('
var rightParenthesis = ')'
var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

// Stringify an image.
//
// Is smart about enclosing `url` (see `encloseURI()`) and `title` (see
// `encloseTitle()`).
//
// ```markdown
// ![foo](</fav icon.png> 'My "favourite" icon')
// ```
//
// Supports named entities in `url`, `alt`, and `title` when in
// `settings.encode` mode.
function image(node) {
  var self = this
  var content = uri(self.encode(node.url || '', node))
  var exit = self.enterLink()
  var alt = self.encode(self.escape(node.alt || '', node))

  exit()

  if (node.title) {
    content += space + title(self.encode(node.title, node))
  }

  return (
    exclamationMark +
    leftSquareBracket +
    alt +
    rightSquareBracket +
    leftParenthesis +
    content +
    rightParenthesis
  )
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/inline-code.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/inline-code.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var streak = __webpack_require__(/*! longest-streak */ "../../node_modules/longest-streak/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = inlineCode

var graveAccentChar = '`'
var lineFeed = 10 //  '\n'
var space = 32 // ' '
var graveAccent = 96 //  '`'

// Stringify inline code.
//
// Knows about internal ticks (`\``), and ensures one more tick is used to
// enclose the inline code:
//
// ````markdown
// ```foo ``bar`` baz```
// ````
//
// Even knows about inital and final ticks:
//
// ``markdown
// `` `foo ``
// `` foo` ``
// ```
function inlineCode(node) {
  var value = node.value
  var ticks = repeat(graveAccentChar, streak(value, graveAccentChar) + 1)
  var start = ticks
  var end = ticks
  var head = value.charCodeAt(0)
  var tail = value.charCodeAt(value.length - 1)
  var wrap = false
  var index
  var length

  if (head === graveAccent || tail === graveAccent) {
    wrap = true
  } else if (value.length > 2 && ws(head) && ws(tail)) {
    index = 1
    length = value.length - 1

    while (++index < length) {
      if (!ws(value.charCodeAt(index))) {
        wrap = true
        break
      }
    }
  }

  if (wrap) {
    start += ' '
    end = ' ' + end
  }

  return start + value + end
}

function ws(code) {
  return code === lineFeed || code === space
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/link-reference.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/link-reference.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copy = __webpack_require__(/*! ../util/copy-identifier-encoding */ "../../node_modules/remark-stringify/lib/util/copy-identifier-encoding.js")
var label = __webpack_require__(/*! ../util/label */ "../../node_modules/remark-stringify/lib/util/label.js")

module.exports = linkReference

var leftSquareBracket = '['
var rightSquareBracket = ']'

var shortcut = 'shortcut'
var collapsed = 'collapsed'

function linkReference(node) {
  var self = this
  var type = node.referenceType
  var exit = self.enterLinkReference(self, node)
  var value = self.all(node).join('')

  exit()

  if (type === shortcut || type === collapsed) {
    value = copy(value, node.label || node.identifier)
  }

  return leftSquareBracket + value + rightSquareBracket + label(node)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/link.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/link.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "../../node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "../../node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = link

var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var leftParenthesis = '('
var rightParenthesis = ')'

// Expression for a protocol:
// See <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Generic_syntax>.
var protocol = /^[a-z][a-z+.-]+:\/?/i

// Stringify a link.
//
// When no title exists, the compiled `children` equal `url`, and `url` starts
// with a protocol, an auto link is created:
//
// ```markdown
// <http://example.com>
// ```
//
// Otherwise, is smart about enclosing `url` (see `encloseURI()`) and `title`
// (see `encloseTitle()`).
// ```
//
// ```markdown
// [foo](<foo at bar dot com> 'An "example" e-mail')
// ```
//
// Supports named entities in the `url` and `title` when in `settings.encode`
// mode.
function link(node) {
  var self = this
  var content = self.encode(node.url || '', node)
  var exit = self.enterLink()
  var escaped = self.encode(self.escape(node.url || '', node))
  var value = self.all(node).join('')

  exit()

  if (node.title == null && protocol.test(content) && escaped === value) {
    // Backslash escapes do not work in autolinks, so we do not escape.
    return uri(self.encode(node.url), true)
  }

  content = uri(content)

  if (node.title) {
    content += space + title(self.encode(self.escape(node.title, node), node))
  }

  return (
    leftSquareBracket +
    value +
    rightSquareBracket +
    leftParenthesis +
    content +
    rightParenthesis
  )
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/list-item.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/list-item.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var pad = __webpack_require__(/*! ../util/pad */ "../../node_modules/remark-stringify/lib/util/pad.js")

module.exports = listItem

var lineFeed = '\n'
var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var lowercaseX = 'x'

var ceil = Math.ceil
var blank = lineFeed + lineFeed

var tabSize = 4

// Stringify a list item.
//
// Prefixes the content with a checked checkbox when `checked: true`:
//
// ```markdown
// [x] foo
// ```
//
// Prefixes the content with an unchecked checkbox when `checked: false`:
//
// ```markdown
// [ ] foo
// ```
function listItem(node, parent, position, bullet) {
  var self = this
  var style = self.options.listItemIndent
  var marker = bullet || self.options.bullet
  var spread = node.spread == null ? true : node.spread
  var checked = node.checked
  var children = node.children
  var length = children.length
  var values = []
  var index = -1
  var value
  var indent
  var spacing

  while (++index < length) {
    values[index] = self.visit(children[index], node)
  }

  value = values.join(spread ? blank : lineFeed)

  if (typeof checked === 'boolean') {
    // Note: I’d like to be able to only add the space between the check and
    // the value, but unfortunately github does not support empty list-items
    // with a checkbox :(
    value =
      leftSquareBracket +
      (checked ? lowercaseX : space) +
      rightSquareBracket +
      space +
      value
  }

  if (style === '1' || (style === 'mixed' && value.indexOf(lineFeed) === -1)) {
    indent = marker.length + 1
    spacing = space
  } else {
    indent = ceil((marker.length + 1) / tabSize) * tabSize
    spacing = repeat(space, indent - marker.length)
  }

  return value
    ? marker + spacing + pad(value, indent / tabSize).slice(indent)
    : marker
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/list.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/list.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

function list(node) {
  var fn = node.ordered ? this.visitOrderedItems : this.visitUnorderedItems
  return fn.call(this, node)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/paragraph.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/paragraph.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

function paragraph(node) {
  return this.all(node).join('')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/root.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/root.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var lineFeed = '\n'

// Stringify a root.
// Adds a final newline to ensure valid POSIX files. */
function root(node) {
  var doc = this.block(node)

  if (doc.charAt(doc.length - 1) !== lineFeed) {
    doc += lineFeed
  }

  return doc
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/strong.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/strong.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = strong

// Stringify a `strong`.
//
// The marker used is configurable by `strong`, which defaults to an asterisk
// (`'*'`) but also accepts an underscore (`'_'`):
//
// ```markdown
// __foo__
// ```
function strong(node) {
  var marker = repeat(this.options.strong, 2)
  return marker + this.all(node).join('') + marker
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/table-cell.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/table-cell.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = tableCell

var lineFeed = /\r?\n/g

function tableCell(node) {
  return this.all(node).join('').replace(lineFeed, ' ')
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/table.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/table.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownTable = __webpack_require__(/*! markdown-table */ "../../node_modules/markdown-table/index.js")

module.exports = table

// Stringify table.
//
// Creates a fenced table.
// The table has aligned delimiters by default, but not in
// `tablePipeAlign: false`:
//
// ```markdown
// | Header 1 | Header 2 |
// | :-: | - |
// | Alpha | Bravo |
// ```
//
// The table is spaced by default, but not in `tableCellPadding: false`:
//
// ```markdown
// |Foo|Bar|
// |:-:|---|
// |Baz|Qux|
// ```
function table(node) {
  var self = this
  var options = self.options
  var padding = options.tableCellPadding
  var alignDelimiters = options.tablePipeAlign
  var stringLength = options.stringLength
  var rows = node.children
  var index = rows.length
  var exit = self.enterTable()
  var result = []

  while (index--) {
    result[index] = self.all(rows[index])
  }

  exit()

  return markdownTable(result, {
    align: node.align,
    alignDelimiters: alignDelimiters,
    padding: padding,
    stringLength: stringLength
  })
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/text.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/text.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

// Stringify text.
// Supports named entities in `settings.encode: true` mode:
//
// ```markdown
// AT&amp;T
// ```
//
// Supports numbered entities in `settings.encode: numbers` mode:
//
// ```markdown
// AT&#x26;T
// ```
function text(node, parent) {
  return this.encode(this.escape(node.value, node, parent), node)
}


/***/ }),

/***/ "../../node_modules/remark-stringify/lib/visitors/thematic-break.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/lib/visitors/thematic-break.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = thematic

var space = ' '

// Stringify a `thematic-break`.
// The character used is configurable through `rule`: (`'_'`):
//
// ```markdown
// ___
// ```
//
// The number of repititions is defined through `ruleRepetition` (`6`):
//
// ```markdown
// ******
// ```
//
// Whether spaces delimit each character, is configured through `ruleSpaces`
// (`true`):
// ```markdown
// * * *
// ```
function thematic() {
  var options = this.options
  var rule = repeat(options.rule, options.ruleRepetition)
  return options.ruleSpaces ? rule.split('').join(space) : rule
}


/***/ }),

/***/ "../../node_modules/remark/index.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unified = __webpack_require__(/*! unified */ "../../node_modules/unified/index.js")
var parse = __webpack_require__(/*! remark-parse */ "../../node_modules/remark/node_modules/remark-parse/index.js")
var stringify = __webpack_require__(/*! remark-stringify */ "../../node_modules/remark-stringify/index.js")

module.exports = unified().use(parse).use(stringify).freeze()


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/index.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../../node_modules/unherit/index.js")
var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var Parser = __webpack_require__(/*! ./lib/parser.js */ "../../node_modules/remark/node_modules/remark-parse/lib/parser.js")

module.exports = parse
parse.Parser = Parser

function parse(options) {
  var settings = this.data('settings')
  var Local = unherit(Parser)

  Local.prototype.options = xtend(Local.prototype.options, settings, options)

  this.Parser = Local
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/block-elements.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/block-elements.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'meta',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'pre',
  'section',
  'source',
  'title',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/decode.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/decode.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var entities = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")

module.exports = factory

// Factory to create an entity decoder.
function factory(ctx) {
  decoder.raw = decodeRaw

  return decoder

  // Normalize `position` to add an `indent`.
  function normalize(position) {
    var offsets = ctx.offset
    var line = position.line
    var result = []

    while (++line) {
      if (!(line in offsets)) {
        break
      }

      result.push((offsets[line] || 0) + 1)
    }

    return {start: position, indent: result}
  }

  // Decode `value` (at `position`) into text-nodes.
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    })
  }

  // Decode `value` (at `position`) into a string.
  function decodeRaw(value, position, options) {
    return entities(
      value,
      xtend(options, {position: normalize(position), warning: handleWarning})
    )
  }

  // Handle a warning.
  // See <https://github.com/wooorm/parse-entities> for the warnings.
  function handleWarning(reason, position, code) {
    if (code !== 3) {
      ctx.file.message(reason, position)
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/defaults.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/defaults.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements */ "../../node_modules/remark/node_modules/remark-parse/lib/block-elements.js")
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/break.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/break.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex)

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break
    }

    index--
  }

  return index
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/code-inline.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/code-inline.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/delete.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/delete.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/email.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/email.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")

var plusSign = 43 // '+'
var dash = 45 // '-'
var dot = 46 // '.'
var underscore = 95 // '_'

module.exports = locate

// See: <https://github.github.com/gfm/#extended-email-autolink>
function locate(value, fromIndex) {
  var self = this
  var at
  var position

  if (!this.options.gfm) {
    return -1
  }

  at = value.indexOf('@', fromIndex)

  if (at === -1) {
    return -1
  }

  position = at

  if (position === fromIndex || !isGfmAtext(value.charCodeAt(position - 1))) {
    return locate.call(self, value, at + 1)
  }

  while (position > fromIndex && isGfmAtext(value.charCodeAt(position - 1))) {
    position--
  }

  return position
}

function isGfmAtext(code) {
  return (
    decimal(code) ||
    alphabetical(code) ||
    code === plusSign ||
    code === dash ||
    code === dot ||
    code === underscore
  )
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/emphasis.js":
/*!*********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/emphasis.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex)
  var underscore = value.indexOf('_', fromIndex)

  if (underscore === -1) {
    return asterisk
  }

  if (asterisk === -1) {
    return underscore
  }

  return underscore < asterisk ? underscore : asterisk
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/escape.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/escape.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/link.js":
/*!*****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/link.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex)
  var image = value.indexOf('![', fromIndex)

  if (image === -1) {
    return link
  }

  // Link can never be `-1` if an image is found, so we don’t need to check
  // for that :)
  return link < image ? link : image
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/strong.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/strong.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex)
  var underscore = value.indexOf('__', fromIndex)

  if (underscore === -1) {
    return asterisk
  }

  if (asterisk === -1) {
    return underscore
  }

  return underscore < asterisk ? underscore : asterisk
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/tag.js":
/*!****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/tag.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/locate/url.js":
/*!****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/locate/url.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

var values = ['www.', 'http://', 'https://']

function locate(value, fromIndex) {
  var min = -1
  var index
  var length
  var position

  if (!this.options.gfm) {
    return min
  }

  length = values.length
  index = -1

  while (++index < length) {
    position = value.indexOf(values[index], fromIndex)

    if (position !== -1 && (min === -1 || position < min)) {
      min = position
    }
  }

  return min
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/parse.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/parse.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var removePosition = __webpack_require__(/*! unist-util-remove-position */ "../../node_modules/unist-util-remove-position/index.js")

module.exports = parse

var lineFeed = '\n'
var lineBreaksExpression = /\r\n|\r/g

// Parse the bound file.
function parse() {
  var self = this
  var value = String(self.file)
  var start = {line: 1, column: 1, offset: 0}
  var content = xtend(start)
  var node

  // Clean non-unix newlines: `\r\n` and `\r` are all changed to `\n`.
  // This should not affect positional information.
  value = value.replace(lineBreaksExpression, lineFeed)

  // BOM.
  if (value.charCodeAt(0) === 0xfeff) {
    value = value.slice(1)

    content.column++
    content.offset++
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {start: start, end: self.eof || xtend(start)}
  }

  if (!self.options.position) {
    removePosition(node, true)
  }

  return node
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/parser.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/parser.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var toggle = __webpack_require__(/*! state-toggle */ "../../node_modules/state-toggle/index.js")
var vfileLocation = __webpack_require__(/*! vfile-location */ "../../node_modules/vfile-location/index.js")
var unescape = __webpack_require__(/*! ./unescape */ "../../node_modules/remark/node_modules/remark-parse/lib/unescape.js")
var decode = __webpack_require__(/*! ./decode */ "../../node_modules/remark/node_modules/remark-parse/lib/decode.js")
var tokenizer = __webpack_require__(/*! ./tokenizer */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenizer.js")

module.exports = Parser

function Parser(doc, file) {
  this.file = file
  this.offset = {}
  this.options = xtend(this.options)
  this.setOptions({})

  this.inList = false
  this.inBlock = false
  this.inLink = false
  this.atStart = true

  this.toOffset = vfileLocation(file).toOffset
  this.unescape = unescape(this, 'escape')
  this.decode = decode(this)
}

var proto = Parser.prototype

// Expose core.
proto.setOptions = __webpack_require__(/*! ./set-options */ "../../node_modules/remark/node_modules/remark-parse/lib/set-options.js")
proto.parse = __webpack_require__(/*! ./parse */ "../../node_modules/remark/node_modules/remark-parse/lib/parse.js")

// Expose `defaults`.
proto.options = __webpack_require__(/*! ./defaults */ "../../node_modules/remark/node_modules/remark-parse/lib/defaults.js")

// Enter and exit helpers.
proto.exitStart = toggle('atStart', true)
proto.enterList = toggle('inList', false)
proto.enterLink = toggle('inLink', false)
proto.enterBlock = toggle('inBlock', false)

// Nodes that can interupt a paragraph:
//
// ```markdown
// A paragraph, followed by a thematic break.
// ___
// ```
//
// In the above example, the thematic break “interupts” the paragraph.
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}]
]

// Nodes that can interupt a list:
//
// ```markdown
// - One
// ___
// ```
//
// In the above example, the thematic break “interupts” the list.
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}]
]

// Nodes that can interupt a blockquote:
//
// ```markdown
// > A paragraph.
// ___
// ```
//
// In the above example, the thematic break “interupts” the blockquote.
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}]
]

// Handlers.
proto.blockTokenizers = {
  blankLine: __webpack_require__(/*! ./tokenize/blank-line */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/blank-line.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/html-block.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/paragraph.js")
}

proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/url.js"),
  email: __webpack_require__(/*! ./tokenize/email */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/email.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-inline.js"),
  break: __webpack_require__(/*! ./tokenize/break */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/text.js")
}

// Expose precedence.
proto.blockMethods = keys(proto.blockTokenizers)
proto.inlineMethods = keys(proto.inlineTokenizers)

// Tokenizers.
proto.tokenizeBlock = tokenizer('block')
proto.tokenizeInline = tokenizer('inline')
proto.tokenizeFactory = tokenizer

// Get all keys in `value`.
function keys(value) {
  var result = []
  var key

  for (key in value) {
    result.push(key)
  }

  return result
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/set-options.js":
/*!*****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/set-options.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var escapes = __webpack_require__(/*! markdown-escapes */ "../../node_modules/markdown-escapes/index.js")
var defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/remark/node_modules/remark-parse/lib/defaults.js")

module.exports = setOptions

function setOptions(options) {
  var self = this
  var current = self.options
  var key
  var value

  if (options == null) {
    options = {}
  } else if (typeof options === 'object') {
    options = xtend(options)
  } else {
    throw new Error('Invalid value `' + options + '` for setting `options`')
  }

  for (key in defaults) {
    value = options[key]

    if (value == null) {
      value = current[key]
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error(
        'Invalid value `' + value + '` for setting `options.' + key + '`'
      )
    }

    options[key] = value
  }

  self.options = options
  self.escape = escapes(options)

  return self
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var locate = __webpack_require__(/*! ../locate/tag */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/tag.js")

module.exports = autoLink
autoLink.locator = locate
autoLink.notInLink = true

var lessThan = '<'
var greaterThan = '>'
var atSign = '@'
var slash = '/'
var mailto = 'mailto:'
var mailtoLength = mailto.length

function autoLink(eat, value, silent) {
  var self = this
  var subvalue = ''
  var length = value.length
  var index = 0
  var queue = ''
  var hasAtCharacter = false
  var link = ''
  var character
  var now
  var content
  var tokenizers
  var exit

  if (value.charAt(0) !== lessThan) {
    return
  }

  index++
  subvalue = lessThan

  while (index < length) {
    character = value.charAt(index)

    if (
      whitespace(character) ||
      character === greaterThan ||
      character === atSign ||
      (character === ':' && value.charAt(index + 1) === slash)
    ) {
      break
    }

    queue += character
    index++
  }

  if (!queue) {
    return
  }

  link += queue
  queue = ''

  character = value.charAt(index)
  link += character
  index++

  if (character === atSign) {
    hasAtCharacter = true
  } else {
    if (character !== ':' || value.charAt(index + 1) !== slash) {
      return
    }

    link += slash
    index++
  }

  while (index < length) {
    character = value.charAt(index)

    if (whitespace(character) || character === greaterThan) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)

  if (!queue || character !== greaterThan) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  link += queue
  content = link
  subvalue += link + character
  now = eat.now()
  now.column++
  now.offset++

  if (hasAtCharacter) {
    if (link.slice(0, mailtoLength).toLowerCase() === mailto) {
      content = content.slice(mailtoLength)
      now.column += mailtoLength
      now.offset += mailtoLength
    } else {
      link = mailto + link
    }
  }

  // Temporarily remove all tokenizers except text in autolinks.
  tokenizers = self.inlineTokenizers
  self.inlineTokenizers = {text: tokenizers.text}

  exit = self.enterLink()

  content = self.tokenizeInline(content, now)

  self.inlineTokenizers = tokenizers
  exit()

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/blank-line.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/blank-line.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A line containing no characters, or a line containing only spaces (U+0020) or
// tabs (U+0009), is called a blank line.
// See <https://spec.commonmark.org/0.29/#blank-line>.
var reBlankLine = /^[ \t]*(\n|$)/

// Note that though blank lines play a special role in lists to determine
// whether the list is tight or loose
// (<https://spec.commonmark.org/0.29/#blank-lines>), it’s done by the list
// tokenizer and this blank line tokenizer does not have to be responsible for
// that.
// Therefore, configs such as `blankLine.notInList` do not have to be set here.
module.exports = blankLine

function blankLine(eat, value, silent) {
  var match
  var subvalue = ''
  var index = 0
  var length = value.length

  while (index < length) {
    match = reBlankLine.exec(value.slice(index))

    if (match == null) {
      break
    }

    index += match[0].length
    subvalue += match[0]
  }

  if (subvalue === '') {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  eat(subvalue)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark/node_modules/remark-parse/lib/util/interrupt.js")

module.exports = blockquote

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var greaterThan = '>'

function blockquote(eat, value, silent) {
  var self = this
  var offsets = self.offset
  var tokenizers = self.blockTokenizers
  var interruptors = self.interruptBlockquote
  var now = eat.now()
  var currentLine = now.line
  var length = value.length
  var values = []
  var contents = []
  var indents = []
  var add
  var index = 0
  var character
  var rest
  var nextIndex
  var content
  var line
  var startIndex
  var prefixed
  var exit

  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    index++
  }

  if (value.charAt(index) !== greaterThan) {
    return
  }

  if (silent) {
    return true
  }

  index = 0

  while (index < length) {
    nextIndex = value.indexOf(lineFeed, index)
    startIndex = index
    prefixed = false

    if (nextIndex === -1) {
      nextIndex = length
    }

    while (index < length) {
      character = value.charAt(index)

      if (character !== space && character !== tab) {
        break
      }

      index++
    }

    if (value.charAt(index) === greaterThan) {
      index++
      prefixed = true

      if (value.charAt(index) === space) {
        index++
      }
    } else {
      index = startIndex
    }

    content = value.slice(index, nextIndex)

    if (!prefixed && !trim(content)) {
      index = startIndex
      break
    }

    if (!prefixed) {
      rest = value.slice(index)

      // Check if the following code contains a possible block.
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex)

    indents.push(index - startIndex)
    values.push(line)
    contents.push(content)

    index = nextIndex + 1
  }

  index = -1
  length = indents.length
  add = eat(values.join(lineFeed))

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index]
    currentLine++
  }

  exit = self.enterBlock()
  contents = self.tokenizeBlock(contents.join(lineFeed), now)
  exit()

  return add({type: 'blockquote', children: contents})
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/break.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/break.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/break.js")

module.exports = hardBreak
hardBreak.locator = locate

var space = ' '
var lineFeed = '\n'
var minBreakLength = 2

function hardBreak(eat, value, silent) {
  var length = value.length
  var index = -1
  var queue = ''
  var character

  while (++index < length) {
    character = value.charAt(index)

    if (character === lineFeed) {
      if (index < minBreakLength) {
        return
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      queue += character

      return eat(queue)({type: 'break'})
    }

    if (character !== space) {
      return
    }

    queue += character
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!**************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fencedCode

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var tilde = '~'
var graveAccent = '`'

var minFenceCount = 3
var tabSize = 4

function fencedCode(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var length = value.length + 1
  var index = 0
  var subvalue = ''
  var fenceCount
  var marker
  var character
  var flag
  var lang
  var meta
  var queue
  var content
  var exdentedContent
  var closing
  var exdentedClosing
  var indent
  var now

  if (!gfm) {
    return
  }

  // Eat initial spacing.
  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  indent = index

  // Eat the fence.
  character = value.charAt(index)

  if (character !== tilde && character !== graveAccent) {
    return
  }

  index++
  marker = character
  fenceCount = 1
  subvalue += character

  while (index < length) {
    character = value.charAt(index)

    if (character !== marker) {
      break
    }

    subvalue += character
    fenceCount++
    index++
  }

  if (fenceCount < minFenceCount) {
    return
  }

  // Eat spacing before flag.
  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  // Eat flag.
  flag = ''
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (
      character === lineFeed ||
      (marker === graveAccent && character === marker)
    ) {
      break
    }

    if (character === space || character === tab) {
      queue += character
    } else {
      flag += queue + character
      queue = ''
    }

    index++
  }

  character = value.charAt(index)

  if (character && character !== lineFeed) {
    return
  }

  if (silent) {
    return true
  }

  now = eat.now()
  now.column += subvalue.length
  now.offset += subvalue.length

  subvalue += flag
  flag = self.decode.raw(self.unescape(flag), now)

  if (queue) {
    subvalue += queue
  }

  queue = ''
  closing = ''
  exdentedClosing = ''
  content = ''
  exdentedContent = ''
  var skip = true

  // Eat content.
  while (index < length) {
    character = value.charAt(index)
    content += closing
    exdentedContent += exdentedClosing
    closing = ''
    exdentedClosing = ''

    if (character !== lineFeed) {
      content += character
      exdentedClosing += character
      index++
      continue
    }

    // The first line feed is ignored. Others aren’t.
    if (skip) {
      subvalue += character
      skip = false
    } else {
      closing += character
      exdentedClosing += character
    }

    queue = ''
    index++

    while (index < length) {
      character = value.charAt(index)

      if (character !== space) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue.slice(indent)

    if (queue.length >= tabSize) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== marker) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue

    if (queue.length < fenceCount) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== space && character !== tab) {
        break
      }

      closing += character
      exdentedClosing += character
      index++
    }

    if (!character || character === lineFeed) {
      break
    }
  }

  subvalue += content + closing

  // Get lang and meta from the flag.
  index = -1
  length = flag.length

  while (++index < length) {
    character = flag.charAt(index)

    if (character === space || character === tab) {
      if (!lang) {
        lang = flag.slice(0, index)
      }
    } else if (lang) {
      meta = flag.slice(index)
      break
    }
  }

  return eat(subvalue)({
    type: 'code',
    lang: lang || flag || null,
    meta: meta || null,
    value: exdentedContent
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!****************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var trim = __webpack_require__(/*! trim-trailing-lines */ "../../node_modules/trim-trailing-lines/index.js")

module.exports = indentedCode

var lineFeed = '\n'
var tab = '\t'
var space = ' '

var tabSize = 4
var codeIndent = repeat(space, tabSize)

function indentedCode(eat, value, silent) {
  var index = -1
  var length = value.length
  var subvalue = ''
  var content = ''
  var subvalueQueue = ''
  var contentQueue = ''
  var character
  var blankQueue
  var indent

  while (++index < length) {
    character = value.charAt(index)

    if (indent) {
      indent = false

      subvalue += subvalueQueue
      content += contentQueue
      subvalueQueue = ''
      contentQueue = ''

      if (character === lineFeed) {
        subvalueQueue = character
        contentQueue = character
      } else {
        subvalue += character
        content += character

        while (++index < length) {
          character = value.charAt(index)

          if (!character || character === lineFeed) {
            contentQueue = character
            subvalueQueue = character
            break
          }

          subvalue += character
          content += character
        }
      }
    } else if (
      character === space &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += codeIndent
      index += 3
      indent = true
    } else if (character === tab) {
      subvalueQueue += character
      indent = true
    } else {
      blankQueue = ''

      while (character === tab || character === space) {
        blankQueue += character
        character = value.charAt(++index)
      }

      if (character !== lineFeed) {
        break
      }

      subvalueQueue += blankQueue + character
      contentQueue += character
    }
  }

  if (content) {
    if (silent) {
      return true
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      meta: null,
      value: trim(content)
    })
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!**************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/code-inline */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/code-inline.js")

module.exports = inlineCode
inlineCode.locator = locate

var lineFeed = 10 //  '\n'
var space = 32 // ' '
var graveAccent = 96 //  '`'

function inlineCode(eat, value, silent) {
  var length = value.length
  var index = 0
  var openingFenceEnd
  var closingFenceStart
  var closingFenceEnd
  var code
  var next
  var found

  while (index < length) {
    if (value.charCodeAt(index) !== graveAccent) {
      break
    }

    index++
  }

  if (index === 0 || index === length) {
    return
  }

  openingFenceEnd = index
  next = value.charCodeAt(index)

  while (index < length) {
    code = next
    next = value.charCodeAt(index + 1)

    if (code === graveAccent) {
      if (closingFenceStart === undefined) {
        closingFenceStart = index
      }

      closingFenceEnd = index + 1

      if (
        next !== graveAccent &&
        closingFenceEnd - closingFenceStart === openingFenceEnd
      ) {
        found = true
        break
      }
    } else if (closingFenceStart !== undefined) {
      closingFenceStart = undefined
      closingFenceEnd = undefined
    }

    index++
  }

  if (!found) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  // Remove the initial and final space (or line feed), iff they exist and there
  // are non-space characters in the content.
  index = openingFenceEnd
  length = closingFenceStart
  code = value.charCodeAt(index)
  next = value.charCodeAt(length - 1)
  found = false

  if (
    length - index > 2 &&
    (code === space || code === lineFeed) &&
    (next === space || next === lineFeed)
  ) {
    index++
    length--

    while (index < length) {
      code = value.charCodeAt(index)

      if (code !== space && code !== lineFeed) {
        found = true
        break
      }

      index++
    }

    if (found === true) {
      openingFenceEnd++
      closingFenceStart--
    }
  }

  return eat(value.slice(0, closingFenceEnd))({
    type: 'inlineCode',
    value: value.slice(openingFenceEnd, closingFenceStart)
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/definition.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/definition.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var normalize = __webpack_require__(/*! ../util/normalize */ "../../node_modules/remark/node_modules/remark-parse/lib/util/normalize.js")

module.exports = definition

var quotationMark = '"'
var apostrophe = "'"
var backslash = '\\'
var lineFeed = '\n'
var tab = '\t'
var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var leftParenthesis = '('
var rightParenthesis = ')'
var colon = ':'
var lessThan = '<'
var greaterThan = '>'

function definition(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var index = 0
  var length = value.length
  var subvalue = ''
  var beforeURL
  var beforeTitle
  var queue
  var character
  var test
  var identifier
  var url
  var title

  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)

  if (character !== leftSquareBracket) {
    return
  }

  index++
  subvalue += character
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character === rightSquareBracket) {
      break
    } else if (character === backslash) {
      queue += character
      index++
      character = value.charAt(index)
    }

    queue += character
    index++
  }

  if (
    !queue ||
    value.charAt(index) !== rightSquareBracket ||
    value.charAt(index + 1) !== colon
  ) {
    return
  }

  identifier = queue
  subvalue += queue + rightSquareBracket + colon
  index = subvalue.length
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space && character !== lineFeed) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)
  queue = ''
  beforeURL = subvalue

  if (character === lessThan) {
    index++

    while (index < length) {
      character = value.charAt(index)

      if (!isEnclosedURLCharacter(character)) {
        break
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += lessThan + queue + character
      index++
    } else {
      if (commonmark) {
        return
      }

      index -= queue.length + 1
      queue = ''
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index)

      if (!isUnclosedURLCharacter(character)) {
        break
      }

      queue += character
      index++
    }

    subvalue += queue
  }

  if (!queue) {
    return
  }

  url = queue
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space && character !== lineFeed) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)
  test = null

  if (character === quotationMark) {
    test = quotationMark
  } else if (character === apostrophe) {
    test = apostrophe
  } else if (character === leftParenthesis) {
    test = rightParenthesis
  }

  if (!test) {
    queue = ''
    index = subvalue.length
  } else if (queue) {
    subvalue += queue + character
    index = subvalue.length
    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character === test) {
        break
      }

      if (character === lineFeed) {
        index++
        character = value.charAt(index)

        if (character === lineFeed || character === test) {
          return
        }

        queue += lineFeed
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (character !== test) {
      return
    }

    beforeTitle = subvalue
    subvalue += queue + character
    index++
    title = queue
    queue = ''
  } else {
    return
  }

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)

  if (!character || character === lineFeed) {
    if (silent) {
      return true
    }

    beforeURL = eat(beforeURL).test().end
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false})

    if (title) {
      beforeTitle = eat(beforeTitle).test().end
      title = self.decode.raw(self.unescape(title), beforeTitle)
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      label: identifier,
      title: title || null,
      url: url
    })
  }
}

// Check if `character` can be inside an enclosed URI.
function isEnclosedURLCharacter(character) {
  return (
    character !== greaterThan &&
    character !== leftSquareBracket &&
    character !== rightSquareBracket
  )
}

isEnclosedURLCharacter.delimiter = greaterThan

// Check if `character` can be inside an unclosed URI.
function isUnclosedURLCharacter(character) {
  return (
    character !== leftSquareBracket &&
    character !== rightSquareBracket &&
    !whitespace(character)
  )
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/delete.js":
/*!*********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/delete.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/delete */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/delete.js")

module.exports = strikethrough
strikethrough.locator = locate

var tilde = '~'
var fence = '~~'

function strikethrough(eat, value, silent) {
  var self = this
  var character = ''
  var previous = ''
  var preceding = ''
  var subvalue = ''
  var index
  var length
  var now

  if (
    !self.options.gfm ||
    value.charAt(0) !== tilde ||
    value.charAt(1) !== tilde ||
    whitespace(value.charAt(2))
  ) {
    return
  }

  index = 1
  length = value.length
  now = eat.now()
  now.column += 2
  now.offset += 2

  while (++index < length) {
    character = value.charAt(index)

    if (
      character === tilde &&
      previous === tilde &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      return eat(fence + subvalue + fence)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      })
    }

    subvalue += previous
    preceding = previous
    previous = character
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/email.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/email.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var locate = __webpack_require__(/*! ../locate/email */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/email.js")

module.exports = email
email.locator = locate
email.notInLink = true

var plusSign = 43 // '+'
var dash = 45 // '-'
var dot = 46 // '.'
var atSign = 64 // '@'
var underscore = 95 // '_'

function email(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var tokenizers = self.inlineTokenizers
  var index = 0
  var length = value.length
  var firstDot = -1
  var code
  var content
  var children
  var exit

  if (!gfm) {
    return
  }

  code = value.charCodeAt(index)

  while (
    decimal(code) ||
    alphabetical(code) ||
    code === plusSign ||
    code === dash ||
    code === dot ||
    code === underscore
  ) {
    code = value.charCodeAt(++index)
  }

  if (index === 0) {
    return
  }

  if (code !== atSign) {
    return
  }

  index++

  while (index < length) {
    code = value.charCodeAt(index)

    if (
      decimal(code) ||
      alphabetical(code) ||
      code === dash ||
      code === dot ||
      code === underscore
    ) {
      index++

      if (firstDot === -1 && code === dot) {
        firstDot = index
      }

      continue
    }

    break
  }

  if (
    firstDot === -1 ||
    firstDot === index ||
    code === dash ||
    code === underscore
  ) {
    return
  }

  if (code === dot) {
    index--
  }

  content = value.slice(0, index)

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  exit = self.enterLink()

  // Temporarily remove all tokenizers except text in url.
  self.inlineTokenizers = {text: tokenizers.text}
  children = self.tokenizeInline(content, eat.now())
  self.inlineTokenizers = tokenizers

  exit()

  return eat(content)({
    type: 'link',
    title: null,
    url: 'mailto:' + decode(content, {nonTerminated: false}),
    children: children
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!***********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var word = __webpack_require__(/*! is-word-character */ "../../node_modules/is-word-character/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/emphasis */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/emphasis.js")

module.exports = emphasis
emphasis.locator = locate

var asterisk = '*'
var underscore = '_'
var backslash = '\\'

function emphasis(eat, value, silent) {
  var self = this
  var index = 0
  var character = value.charAt(index)
  var now
  var pedantic
  var marker
  var queue
  var subvalue
  var length
  var previous

  if (character !== asterisk && character !== underscore) {
    return
  }

  pedantic = self.options.pedantic
  subvalue = character
  marker = character
  length = value.length
  index++
  queue = ''
  character = ''

  if (pedantic && whitespace(value.charAt(index))) {
    return
  }

  while (index < length) {
    previous = character
    character = value.charAt(index)

    if (character === marker && (!pedantic || !whitespace(previous))) {
      character = value.charAt(++index)

      if (character !== marker) {
        if (!trim(queue) || previous === marker) {
          return
        }

        if (!pedantic && marker === underscore && word(character)) {
          queue += marker
          continue
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true
        }

        now = eat.now()
        now.column++
        now.offset++

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        })
      }

      queue += marker
    }

    if (!pedantic && character === backslash) {
      queue += character
      character = value.charAt(++index)
    }

    queue += character
    index++
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/escape.js":
/*!*********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/escape.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/escape.js")

module.exports = escape
escape.locator = locate

var lineFeed = '\n'
var backslash = '\\'

function escape(eat, value, silent) {
  var self = this
  var character
  var node

  if (value.charAt(0) === backslash) {
    character = value.charAt(1)

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      if (character === lineFeed) {
        node = {type: 'break'}
      } else {
        node = {type: 'text', value: character}
      }

      return eat(backslash + character)(node)
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!**************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var numberSign = '#'

var maxFenceCount = 6

function atxHeading(eat, value, silent) {
  var self = this
  var pedantic = self.options.pedantic
  var length = value.length + 1
  var index = -1
  var now = eat.now()
  var subvalue = ''
  var content = ''
  var character
  var queue
  var depth

  // Eat initial spacing.
  while (++index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      index--
      break
    }

    subvalue += character
  }

  // Eat hashes.
  depth = 0

  while (++index <= length) {
    character = value.charAt(index)

    if (character !== numberSign) {
      index--
      break
    }

    subvalue += character
    depth++
  }

  if (depth > maxFenceCount) {
    return
  }

  if (!depth || (!pedantic && value.charAt(index + 1) === numberSign)) {
    return
  }

  length = value.length + 1

  // Eat intermediate white-space.
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      index--
      break
    }

    queue += character
  }

  // Exit when not in pedantic mode without spacing.
  if (!pedantic && queue.length === 0 && character && character !== lineFeed) {
    return
  }

  if (silent) {
    return true
  }

  // Eat content.
  subvalue += queue
  queue = ''
  content = ''

  while (++index < length) {
    character = value.charAt(index)

    if (!character || character === lineFeed) {
      break
    }

    if (character !== space && character !== tab && character !== numberSign) {
      content += queue + character
      queue = ''
      continue
    }

    while (character === space || character === tab) {
      queue += character
      character = value.charAt(++index)
    }

    // `#` without a queue is part of the content.
    if (!pedantic && content && !queue && character === numberSign) {
      content += character
      continue
    }

    while (character === numberSign) {
      queue += character
      character = value.charAt(++index)
    }

    while (character === space || character === tab) {
      queue += character
      character = value.charAt(++index)
    }

    index--
  }

  now.column += subvalue.length
  now.offset += subvalue.length
  subvalue += content + queue

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!*****************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var equalsTo = '='
var dash = '-'

var maxIndent = 3

var equalsToDepth = 1
var dashDepth = 2

function setextHeading(eat, value, silent) {
  var self = this
  var now = eat.now()
  var length = value.length
  var index = -1
  var subvalue = ''
  var content
  var queue
  var character
  var marker
  var depth

  // Eat initial indentation.
  while (++index < length) {
    character = value.charAt(index)

    if (character !== space || index >= maxIndent) {
      index--
      break
    }

    subvalue += character
  }

  // Eat content.
  content = ''
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character === lineFeed) {
      index--
      break
    }

    if (character === space || character === tab) {
      queue += character
    } else {
      content += queue + character
      queue = ''
    }
  }

  now.column += subvalue.length
  now.offset += subvalue.length
  subvalue += content + queue

  // Ensure the content is followed by a newline and a valid marker.
  character = value.charAt(++index)
  marker = value.charAt(++index)

  if (character !== lineFeed || (marker !== equalsTo && marker !== dash)) {
    return
  }

  subvalue += character

  // Eat Setext-line.
  queue = marker
  depth = marker === equalsTo ? equalsToDepth : dashDepth

  while (++index < length) {
    character = value.charAt(index)

    if (character !== marker) {
      if (character !== lineFeed) {
        return
      }

      index--
      break
    }

    queue += character
  }

  if (silent) {
    return true
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/html-block.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "../../node_modules/remark/node_modules/remark-parse/lib/util/html.js").openCloseTag

module.exports = blockHtml

var tab = '\t'
var space = ' '
var lineFeed = '\n'
var lessThan = '<'

var rawOpenExpression = /^<(script|pre|style)(?=(\s|>|$))/i
var rawCloseExpression = /<\/(script|pre|style)>/i
var commentOpenExpression = /^<!--/
var commentCloseExpression = /-->/
var instructionOpenExpression = /^<\?/
var instructionCloseExpression = /\?>/
var directiveOpenExpression = /^<![A-Za-z]/
var directiveCloseExpression = />/
var cdataOpenExpression = /^<!\[CDATA\[/
var cdataCloseExpression = /]]>/
var elementCloseExpression = /^$/
var otherElementOpenExpression = new RegExp(openCloseTag.source + '\\s*$')

function blockHtml(eat, value, silent) {
  var self = this
  var blocks = self.options.blocks.join('|')
  var elementOpenExpression = new RegExp(
    '^</?(' + blocks + ')(?=(\\s|/?>|$))',
    'i'
  )
  var length = value.length
  var index = 0
  var next
  var line
  var offset
  var character
  var count
  var sequence
  var subvalue

  var sequences = [
    [rawOpenExpression, rawCloseExpression, true],
    [commentOpenExpression, commentCloseExpression, true],
    [instructionOpenExpression, instructionCloseExpression, true],
    [directiveOpenExpression, directiveCloseExpression, true],
    [cdataOpenExpression, cdataCloseExpression, true],
    [elementOpenExpression, elementCloseExpression, true],
    [otherElementOpenExpression, elementCloseExpression, false]
  ]

  // Eat initial spacing.
  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    index++
  }

  if (value.charAt(index) !== lessThan) {
    return
  }

  next = value.indexOf(lineFeed, index + 1)
  next = next === -1 ? length : next
  line = value.slice(index, next)
  offset = -1
  count = sequences.length

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset]
      break
    }
  }

  if (!sequence) {
    return
  }

  if (silent) {
    return sequence[2]
  }

  index = next

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(lineFeed, index + 1)
      next = next === -1 ? length : next
      line = value.slice(index + 1, next)

      if (sequence[1].test(line)) {
        if (line) {
          index = next
        }

        break
      }

      index = next
    }
  }

  subvalue = value.slice(0, index)

  return eat(subvalue)({type: 'html', value: subvalue})
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!**************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var locate = __webpack_require__(/*! ../locate/tag */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/tag.js")
var tag = __webpack_require__(/*! ../util/html */ "../../node_modules/remark/node_modules/remark-parse/lib/util/html.js").tag

module.exports = inlineHTML
inlineHTML.locator = locate

var lessThan = '<'
var questionMark = '?'
var exclamationMark = '!'
var slash = '/'

var htmlLinkOpenExpression = /^<a /i
var htmlLinkCloseExpression = /^<\/a>/i

function inlineHTML(eat, value, silent) {
  var self = this
  var length = value.length
  var character
  var subvalue

  if (value.charAt(0) !== lessThan || length < 3) {
    return
  }

  character = value.charAt(1)

  if (
    !alphabetical(character) &&
    character !== questionMark &&
    character !== exclamationMark &&
    character !== slash
  ) {
    return
  }

  subvalue = value.match(tag)

  if (!subvalue) {
    return
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true
  }

  subvalue = subvalue[0]

  if (!self.inLink && htmlLinkOpenExpression.test(subvalue)) {
    self.inLink = true
  } else if (self.inLink && htmlLinkCloseExpression.test(subvalue)) {
    self.inLink = false
  }

  return eat(subvalue)({type: 'html', value: subvalue})
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/link.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/link.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/link */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/link.js")

module.exports = link
link.locator = locate

var lineFeed = '\n'
var exclamationMark = '!'
var quotationMark = '"'
var apostrophe = "'"
var leftParenthesis = '('
var rightParenthesis = ')'
var lessThan = '<'
var greaterThan = '>'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'
var graveAccent = '`'

function link(eat, value, silent) {
  var self = this
  var subvalue = ''
  var index = 0
  var character = value.charAt(0)
  var pedantic = self.options.pedantic
  var commonmark = self.options.commonmark
  var gfm = self.options.gfm
  var closed
  var count
  var opening
  var beforeURL
  var beforeTitle
  var subqueue
  var hasMarker
  var isImage
  var content
  var marker
  var length
  var title
  var depth
  var queue
  var url
  var now
  var exit
  var node

  // Detect whether this is an image.
  if (character === exclamationMark) {
    isImage = true
    subvalue = character
    character = value.charAt(++index)
  }

  // Eat the opening.
  if (character !== leftSquareBracket) {
    return
  }

  // Exit when this is a link and we’re already inside a link.
  if (!isImage && self.inLink) {
    return
  }

  subvalue += character
  queue = ''
  index++

  // Eat the content.
  length = value.length
  now = eat.now()
  depth = 0

  now.column += index
  now.offset += index

  while (index < length) {
    character = value.charAt(index)
    subqueue = character

    if (character === graveAccent) {
      // Inline-code in link content.
      count = 1

      while (value.charAt(index + 1) === graveAccent) {
        subqueue += character
        index++
        count++
      }

      if (!opening) {
        opening = count
      } else if (count >= opening) {
        opening = 0
      }
    } else if (character === backslash) {
      // Allow brackets to be escaped.
      index++
      subqueue += value.charAt(index)
    } else if ((!opening || gfm) && character === leftSquareBracket) {
      // In GFM mode, brackets in code still count.  In all other modes,
      // they don’t.
      depth++
    } else if ((!opening || gfm) && character === rightSquareBracket) {
      if (depth) {
        depth--
      } else {
        if (value.charAt(index + 1) !== leftParenthesis) {
          return
        }

        subqueue += leftParenthesis
        closed = true
        index++

        break
      }
    }

    queue += subqueue
    subqueue = ''
    index++
  }

  // Eat the content closing.
  if (!closed) {
    return
  }

  content = queue
  subvalue += queue + subqueue
  index++

  // Eat white-space.
  while (index < length) {
    character = value.charAt(index)

    if (!whitespace(character)) {
      break
    }

    subvalue += character
    index++
  }

  // Eat the URL.
  character = value.charAt(index)
  queue = ''
  beforeURL = subvalue

  if (character === lessThan) {
    index++
    beforeURL += lessThan

    while (index < length) {
      character = value.charAt(index)

      if (character === greaterThan) {
        break
      }

      if (commonmark && character === lineFeed) {
        return
      }

      queue += character
      index++
    }

    if (value.charAt(index) !== greaterThan) {
      return
    }

    subvalue += lessThan + queue + greaterThan
    url = queue
    index++
  } else {
    character = null
    subqueue = ''

    while (index < length) {
      character = value.charAt(index)

      if (
        subqueue &&
        (character === quotationMark ||
          character === apostrophe ||
          (commonmark && character === leftParenthesis))
      ) {
        break
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break
        }

        subqueue += character
      } else {
        if (character === leftParenthesis) {
          depth++
        } else if (character === rightParenthesis) {
          if (depth === 0) {
            break
          }

          depth--
        }

        queue += subqueue
        subqueue = ''

        if (character === backslash) {
          queue += backslash
          character = value.charAt(++index)
        }

        queue += character
      }

      index++
    }

    subvalue += queue
    url = queue
    index = subvalue.length
  }

  // Eat white-space.
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (!whitespace(character)) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)
  subvalue += queue

  // Eat the title.
  if (
    queue &&
    (character === quotationMark ||
      character === apostrophe ||
      (commonmark && character === leftParenthesis))
  ) {
    index++
    subvalue += character
    queue = ''
    marker = character === leftParenthesis ? rightParenthesis : character
    beforeTitle = subvalue

    // In commonmark-mode, things are pretty easy: the marker cannot occur
    // inside the title.  Non-commonmark does, however, support nested
    // delimiters.
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index)

        if (character === marker) {
          break
        }

        if (character === backslash) {
          queue += backslash
          character = value.charAt(++index)
        }

        index++
        queue += character
      }

      character = value.charAt(index)

      if (character !== marker) {
        return
      }

      title = queue
      subvalue += queue + character
      index++

      while (index < length) {
        character = value.charAt(index)

        if (!whitespace(character)) {
          break
        }

        subvalue += character
        index++
      }
    } else {
      subqueue = ''

      while (index < length) {
        character = value.charAt(index)

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue
            subqueue = ''
          }

          hasMarker = true
        } else if (!hasMarker) {
          queue += character
        } else if (character === rightParenthesis) {
          subvalue += queue + marker + subqueue
          title = queue
          break
        } else if (whitespace(character)) {
          subqueue += character
        } else {
          queue += marker + subqueue + character
          subqueue = ''
          hasMarker = false
        }

        index++
      }
    }
  }

  if (value.charAt(index) !== rightParenthesis) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  subvalue += rightParenthesis

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
    nonTerminated: false
  })

  if (title) {
    beforeTitle = eat(beforeTitle).test().end
    title = self.decode.raw(self.unescape(title), beforeTitle)
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  }

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null
  } else {
    exit = self.enterLink()
    node.children = self.tokenizeInline(content, now)
    exit()
  }

  return eat(subvalue)(node)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/list.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/list.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var getIndent = __webpack_require__(/*! ../util/get-indentation */ "../../node_modules/remark/node_modules/remark-parse/lib/util/get-indentation.js")
var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "../../node_modules/remark/node_modules/remark-parse/lib/util/remove-indentation.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark/node_modules/remark-parse/lib/util/interrupt.js")

module.exports = list

var asterisk = '*'
var underscore = '_'
var plusSign = '+'
var dash = '-'
var dot = '.'
var space = ' '
var lineFeed = '\n'
var tab = '\t'
var rightParenthesis = ')'
var lowercaseX = 'x'

var tabSize = 4
var looseListItemExpression = /\n\n(?!\s*$)/
var taskItemExpression = /^\[([ X\tx])][ \t]/
var bulletExpression = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/
var pedanticBulletExpression = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/
var initialIndentExpression = /^( {1,4}|\t)?/gm

function list(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var pedantic = self.options.pedantic
  var tokenizers = self.blockTokenizers
  var interuptors = self.interruptList
  var index = 0
  var length = value.length
  var start = null
  var size = 0
  var queue
  var ordered
  var character
  var marker
  var nextIndex
  var startIndex
  var prefixed
  var currentMarker
  var content
  var line
  var previousEmpty
  var empty
  var items
  var allLines
  var emptyLines
  var item
  var enterTop
  var exitBlockquote
  var spread = false
  var node
  var now
  var end
  var indented

  while (index < length) {
    character = value.charAt(index)

    if (character === tab) {
      size += tabSize - (size % tabSize)
    } else if (character === space) {
      size++
    } else {
      break
    }

    index++
  }

  if (size >= tabSize) {
    return
  }

  character = value.charAt(index)

  if (character === asterisk || character === plusSign || character === dash) {
    marker = character
    ordered = false
  } else {
    ordered = true
    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (!decimal(character)) {
        break
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (
      !queue ||
      !(character === dot || (commonmark && character === rightParenthesis))
    ) {
      return
    }

    start = parseInt(queue, 10)
    marker = character
  }

  character = value.charAt(++index)

  if (
    character !== space &&
    character !== tab &&
    (pedantic || (character !== lineFeed && character !== ''))
  ) {
    return
  }

  if (silent) {
    return true
  }

  index = 0
  items = []
  allLines = []
  emptyLines = []

  while (index < length) {
    nextIndex = value.indexOf(lineFeed, index)
    startIndex = index
    prefixed = false
    indented = false

    if (nextIndex === -1) {
      nextIndex = length
    }

    end = index + tabSize
    size = 0

    while (index < length) {
      character = value.charAt(index)

      if (character === tab) {
        size += tabSize - (size % tabSize)
      } else if (character === space) {
        size++
      } else {
        break
      }

      index++
    }

    if (size >= tabSize) {
      indented = true
    }

    if (item && size >= item.indent) {
      indented = true
    }

    character = value.charAt(index)
    currentMarker = null

    if (!indented) {
      if (
        character === asterisk ||
        character === plusSign ||
        character === dash
      ) {
        currentMarker = character
        index++
        size++
      } else {
        queue = ''

        while (index < length) {
          character = value.charAt(index)

          if (!decimal(character)) {
            break
          }

          queue += character
          index++
        }

        character = value.charAt(index)
        index++

        if (
          queue &&
          (character === dot || (commonmark && character === rightParenthesis))
        ) {
          currentMarker = character
          size += queue.length + 1
        }
      }

      if (currentMarker) {
        character = value.charAt(index)

        if (character === tab) {
          size += tabSize - (size % tabSize)
          index++
        } else if (character === space) {
          end = index + tabSize

          while (index < end) {
            if (value.charAt(index) !== space) {
              break
            }

            index++
            size++
          }

          if (index === end && value.charAt(index) === space) {
            index -= tabSize - 1
            size -= tabSize - 1
          }
        } else if (character !== lineFeed && character !== '') {
          currentMarker = null
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break
      }

      prefixed = true
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === space) {
        indented = true
      } else if (commonmark && item) {
        indented = size >= item.indent || size > tabSize
      }

      prefixed = false
      index = startIndex
    }

    line = value.slice(startIndex, nextIndex)
    content = startIndex === index ? line : value.slice(index, nextIndex)

    if (
      currentMarker === asterisk ||
      currentMarker === underscore ||
      currentMarker === dash
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break
      }
    }

    previousEmpty = empty
    empty = !prefixed && !trim(content).length

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        spread = true
        item.value.push('')
        item.trail = emptyLines.concat()
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      }

      items.push(item)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    } else if (empty) {
      if (previousEmpty && !commonmark) {
        break
      }

      emptyLines.push(line)
    } else {
      if (previousEmpty) {
        break
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break
      }

      item.value = item.value.concat(emptyLines, line)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    }

    index = nextIndex + 1
  }

  node = eat(allLines.join(lineFeed)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    spread: spread,
    children: []
  })

  enterTop = self.enterList()
  exitBlockquote = self.enterBlock()
  index = -1
  length = items.length

  while (++index < length) {
    item = items[index].value.join(lineFeed)
    now = eat.now()

    eat(item)(listItem(self, item, now), node)

    item = items[index].trail.join(lineFeed)

    if (index !== length - 1) {
      item += lineFeed
    }

    eat(item)
  }

  enterTop()
  exitBlockquote()

  return node
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem
  var checked = null
  var task
  var indent

  value = fn.apply(null, arguments)

  if (ctx.options.gfm) {
    task = value.match(taskItemExpression)

    if (task) {
      indent = task[0].length
      checked = task[1].toLowerCase() === lowercaseX
      offsets[position.line] += indent
      value = value.slice(indent)
    }
  }

  return {
    type: 'listItem',
    spread: looseListItemExpression.test(value),
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  }
}

// Create a list-item using overly simple mechanics.
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset
  var line = position.line

  // Remove the list-item’s bullet.
  value = value.replace(pedanticBulletExpression, replacer)

  // The initial line was also matched by the below, so we reset the `line`.
  line = position.line

  return value.replace(initialIndentExpression, replacer)

  // A simple replacer which removed all matches, and adds their length to
  // `offset`.
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length
    line++

    return ''
  }
}

// Create a list-item using sane mechanics.
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset
  var line = position.line
  var max
  var bullet
  var rest
  var lines
  var trimmedLines
  var index
  var length

  // Remove the list-item’s bullet.
  value = value.replace(bulletExpression, replacer)

  lines = value.split(lineFeed)

  trimmedLines = removeIndent(value, getIndent(max).indent).split(lineFeed)

  // We replaced the initial bullet with something else above, which was used
  // to trick `removeIndentation` into removing some more characters when
  // possible.  However, that could result in the initial line to be stripped
  // more than it should be.
  trimmedLines[0] = rest

  offsets[line] = (offsets[line] || 0) + bullet.length
  line++

  index = 0
  length = lines.length

  while (++index < length) {
    offsets[line] =
      (offsets[line] || 0) + lines[index].length - trimmedLines[index].length
    line++
  }

  return trimmedLines.join(lineFeed)

  /* eslint-disable-next-line max-params */
  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3
    rest = $4

    // Make sure that the first nine numbered list items can indent with an
    // extra space.  That is, when the bullet did not receive an extra final
    // space.
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = space + $2
    }

    max = $1 + repeat(space, $2.length) + $3

    return max + rest
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "../../node_modules/trim-trailing-lines/index.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark/node_modules/remark-parse/lib/util/interrupt.js")

module.exports = paragraph

var tab = '\t'
var lineFeed = '\n'
var space = ' '

var tabSize = 4

// Tokenise paragraph.
function paragraph(eat, value, silent) {
  var self = this
  var settings = self.options
  var commonmark = settings.commonmark
  var gfm = settings.gfm
  var tokenizers = self.blockTokenizers
  var interruptors = self.interruptParagraph
  var index = value.indexOf(lineFeed)
  var length = value.length
  var position
  var subvalue
  var character
  var size
  var now

  while (index < length) {
    // Eat everything if there’s no following newline.
    if (index === -1) {
      index = length
      break
    }

    // Stop if the next character is NEWLINE.
    if (value.charAt(index + 1) === lineFeed) {
      break
    }

    // In commonmark-mode, following indented lines are part of the paragraph.
    if (commonmark) {
      size = 0
      position = index + 1

      while (position < length) {
        character = value.charAt(position)

        if (character === tab) {
          size = tabSize
          break
        } else if (character === space) {
          size++
        } else {
          break
        }

        position++
      }

      if (size >= tabSize && character !== lineFeed) {
        index = value.indexOf(lineFeed, index + 1)
        continue
      }
    }

    subvalue = value.slice(index + 1)

    // Check if the following code contains a possible block.
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break
    }

    // Break if the following line starts a list, when already in a list, or
    // when in commonmark, or when in gfm mode and the bullet is *not* numeric.
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0))))
    ) {
      break
    }

    position = index
    index = value.indexOf(lineFeed, index + 1)

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position
      break
    }
  }

  subvalue = value.slice(0, index)

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  now = eat.now()
  subvalue = trimTrailingLines(subvalue)

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/reference.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/reference.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/link */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/link.js")
var normalize = __webpack_require__(/*! ../util/normalize */ "../../node_modules/remark/node_modules/remark-parse/lib/util/normalize.js")

module.exports = reference
reference.locator = locate

var link = 'link'
var image = 'image'
var shortcut = 'shortcut'
var collapsed = 'collapsed'
var full = 'full'
var exclamationMark = '!'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'

function reference(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var character = value.charAt(0)
  var index = 0
  var length = value.length
  var subvalue = ''
  var intro = ''
  var type = link
  var referenceType = shortcut
  var content
  var identifier
  var now
  var node
  var exit
  var queue
  var bracketed
  var depth

  // Check whether we’re eating an image.
  if (character === exclamationMark) {
    type = image
    intro = character
    character = value.charAt(++index)
  }

  if (character !== leftSquareBracket) {
    return
  }

  index++
  intro += character
  queue = ''

  // Eat the text.
  depth = 0

  while (index < length) {
    character = value.charAt(index)

    if (character === leftSquareBracket) {
      bracketed = true
      depth++
    } else if (character === rightSquareBracket) {
      if (!depth) {
        break
      }

      depth--
    }

    if (character === backslash) {
      queue += backslash
      character = value.charAt(++index)
    }

    queue += character
    index++
  }

  subvalue = queue
  content = queue
  character = value.charAt(index)

  if (character !== rightSquareBracket) {
    return
  }

  index++
  subvalue += character
  queue = ''

  if (!commonmark) {
    // The original markdown syntax definition explicitly allows for whitespace
    // between the link text and link label; commonmark departs from this, in
    // part to improve support for shortcut reference links
    while (index < length) {
      character = value.charAt(index)

      if (!whitespace(character)) {
        break
      }

      queue += character
      index++
    }
  }

  character = value.charAt(index)

  if (character === leftSquareBracket) {
    identifier = ''
    queue += character
    index++

    while (index < length) {
      character = value.charAt(index)

      if (character === leftSquareBracket || character === rightSquareBracket) {
        break
      }

      if (character === backslash) {
        identifier += backslash
        character = value.charAt(++index)
      }

      identifier += character
      index++
    }

    character = value.charAt(index)

    if (character === rightSquareBracket) {
      referenceType = identifier ? full : collapsed
      queue += identifier + character
      index++
    } else {
      identifier = ''
    }

    subvalue += queue
    queue = ''
  } else {
    if (!content) {
      return
    }

    identifier = content
  }

  // Brackets cannot be inside the identifier.
  if (referenceType !== full && bracketed) {
    return
  }

  subvalue = intro + subvalue

  if (type === link && self.inLink) {
    return null
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  now = eat.now()
  now.column += intro.length
  now.offset += intro.length
  identifier = referenceType === full ? identifier : content

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier),
    label: identifier,
    referenceType: referenceType
  }

  if (type === link) {
    exit = self.enterLink()
    node.children = self.tokenizeInline(content, now)
    exit()
  } else {
    node.alt = self.decode.raw(self.unescape(content), now) || null
  }

  return eat(subvalue)(node)
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/strong.js":
/*!*********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/strong.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/strong */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/strong.js")

module.exports = strong
strong.locator = locate

var backslash = '\\'
var asterisk = '*'
var underscore = '_'

function strong(eat, value, silent) {
  var self = this
  var index = 0
  var character = value.charAt(index)
  var now
  var pedantic
  var marker
  var queue
  var subvalue
  var length
  var previous

  if (
    (character !== asterisk && character !== underscore) ||
    value.charAt(++index) !== character
  ) {
    return
  }

  pedantic = self.options.pedantic
  marker = character
  subvalue = marker + marker
  length = value.length
  index++
  queue = ''
  character = ''

  if (pedantic && whitespace(value.charAt(index))) {
    return
  }

  while (index < length) {
    previous = character
    character = value.charAt(index)

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(previous))
    ) {
      character = value.charAt(index + 2)

      if (character !== marker) {
        if (!trim(queue)) {
          return
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true
        }

        now = eat.now()
        now.column += 2
        now.offset += 2

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        })
      }
    }

    if (!pedantic && character === backslash) {
      queue += character
      character = value.charAt(++index)
    }

    queue += character
    index++
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/table.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/table.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")

module.exports = table

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var dash = '-'
var colon = ':'
var backslash = '\\'
var verticalBar = '|'

var minColumns = 1
var minRows = 2

var left = 'left'
var center = 'center'
var right = 'right'

function table(eat, value, silent) {
  var self = this
  var index
  var alignments
  var alignment
  var subvalue
  var row
  var length
  var lines
  var queue
  var character
  var hasDash
  var align
  var cell
  var preamble
  var now
  var position
  var lineCount
  var line
  var rows
  var table
  var lineIndex
  var pipeIndex
  var first

  // Exit when not in gfm-mode.
  if (!self.options.gfm) {
    return
  }

  // Get the rows.
  // Detecting tables soon is hard, so there are some checks for performance
  // here, such as the minimum number of rows, and allowed characters in the
  // alignment row.
  index = 0
  lineCount = 0
  length = value.length + 1
  lines = []

  while (index < length) {
    lineIndex = value.indexOf(lineFeed, index)
    pipeIndex = value.indexOf(verticalBar, index + 1)

    if (lineIndex === -1) {
      lineIndex = value.length
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < minRows) {
        return
      }

      break
    }

    lines.push(value.slice(index, lineIndex))
    lineCount++
    index = lineIndex + 1
  }

  // Parse the alignment row.
  subvalue = lines.join(lineFeed)
  alignments = lines.splice(1, 1)[0] || []
  index = 0
  length = alignments.length
  lineCount--
  alignment = false
  align = []

  while (index < length) {
    character = alignments.charAt(index)

    if (character === verticalBar) {
      hasDash = null

      if (alignment === false) {
        if (first === false) {
          return
        }
      } else {
        align.push(alignment)
        alignment = false
      }

      first = false
    } else if (character === dash) {
      hasDash = true
      alignment = alignment || null
    } else if (character === colon) {
      if (alignment === left) {
        alignment = center
      } else if (hasDash && alignment === null) {
        alignment = right
      } else {
        alignment = left
      }
    } else if (!whitespace(character)) {
      return
    }

    index++
  }

  if (alignment !== false) {
    align.push(alignment)
  }

  // Exit when without enough columns.
  if (align.length < minColumns) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  // Parse the rows.
  position = -1
  rows = []

  table = eat(subvalue).reset({type: 'table', align: align, children: rows})

  while (++position < lineCount) {
    line = lines[position]
    row = {type: 'tableRow', children: []}

    // Eat a newline character when this is not the first row.
    if (position) {
      eat(lineFeed)
    }

    // Eat the row.
    eat(line).reset(row, table)

    length = line.length + 1
    index = 0
    queue = ''
    cell = ''
    preamble = true

    while (index < length) {
      character = line.charAt(index)

      if (character === tab || character === space) {
        if (cell) {
          queue += character
        } else {
          eat(character)
        }

        index++
        continue
      }

      if (character === '' || character === verticalBar) {
        if (preamble) {
          eat(character)
        } else {
          if ((cell || character) && !preamble) {
            subvalue = cell

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, -1)
                queue = queue.charAt(queue.length - 1)
              } else {
                subvalue += queue
                queue = ''
              }
            }

            now = eat.now()

            eat(subvalue)(
              {type: 'tableCell', children: self.tokenizeInline(cell, now)},
              row
            )
          }

          eat(queue + character)

          queue = ''
          cell = ''
        }
      } else {
        if (queue) {
          cell += queue
          queue = ''
        }

        cell += character

        if (character === backslash && index !== length - 2) {
          cell += line.charAt(index + 1)
          index++
        }
      }

      preamble = false
      index++
    }

    // Eat the alignment row.
    if (!position) {
      eat(lineFeed + alignments)
    }
  }

  return table
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/text.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/text.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

function text(eat, value, silent) {
  var self = this
  var methods
  var tokenizers
  var index
  var length
  var subvalue
  var position
  var tokenizer
  var name
  var min
  var now

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  methods = self.inlineMethods
  length = methods.length
  tokenizers = self.inlineTokenizers
  index = -1
  min = value.length

  while (++index < length) {
    name = methods[index]

    if (name === 'text' || !tokenizers[name]) {
      continue
    }

    tokenizer = tokenizers[name].locator

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`')
    }

    position = tokenizer.call(self, value, 1)

    if (position !== -1 && position < min) {
      min = position
    }
  }

  subvalue = value.slice(0, min)
  now = eat.now()

  self.decode(subvalue, now, handler)

  function handler(content, position, source) {
    eat(source || content)({type: 'text', value: content})
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!*****************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var asterisk = '*'
var dash = '-'
var underscore = '_'

var maxCount = 3

function thematicBreak(eat, value, silent) {
  var index = -1
  var length = value.length + 1
  var subvalue = ''
  var character
  var marker
  var markerCount
  var queue

  while (++index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    subvalue += character
  }

  if (
    character !== asterisk &&
    character !== dash &&
    character !== underscore
  ) {
    return
  }

  marker = character
  subvalue += character
  markerCount = 1
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character === marker) {
      markerCount++
      subvalue += queue + marker
      queue = ''
    } else if (character === space) {
      queue += character
    } else if (
      markerCount >= maxCount &&
      (!character || character === lineFeed)
    ) {
      subvalue += queue

      if (silent) {
        return true
      }

      return eat(subvalue)({type: 'thematicBreak'})
    } else {
      return
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenize/url.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenize/url.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ccount = __webpack_require__(/*! ccount */ "../../node_modules/ccount/index.js")
var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/url */ "../../node_modules/remark/node_modules/remark-parse/lib/locate/url.js")

module.exports = url
url.locator = locate
url.notInLink = true

var exclamationMark = 33 // '!'
var ampersand = 38 // '&'
var rightParenthesis = 41 // ')'
var asterisk = 42 // '*'
var comma = 44 // ','
var dash = 45 // '-'
var dot = 46 // '.'
var colon = 58 // ':'
var semicolon = 59 // ';'
var questionMark = 63 // '?'
var lessThan = 60 // '<'
var underscore = 95 // '_'
var tilde = 126 // '~'

var leftParenthesisCharacter = '('
var rightParenthesisCharacter = ')'

function url(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var tokenizers = self.inlineTokenizers
  var length = value.length
  var previousDot = -1
  var protocolless = false
  var dots
  var lastTwoPartsStart
  var start
  var index
  var pathStart
  var path
  var code
  var end
  var leftCount
  var rightCount
  var content
  var children
  var url
  var exit

  if (!gfm) {
    return
  }

  // `WWW.` doesn’t work.
  if (value.slice(0, 4) === 'www.') {
    protocolless = true
    index = 4
  } else if (value.slice(0, 7).toLowerCase() === 'http://') {
    index = 7
  } else if (value.slice(0, 8).toLowerCase() === 'https://') {
    index = 8
  } else {
    return
  }

  // Act as if the starting boundary is a dot.
  previousDot = index - 1

  // Parse a valid domain.
  start = index
  dots = []

  while (index < length) {
    code = value.charCodeAt(index)

    if (code === dot) {
      // Dots may not appear after each other.
      if (previousDot === index - 1) {
        break
      }

      dots.push(index)
      previousDot = index
      index++
      continue
    }

    if (
      decimal(code) ||
      alphabetical(code) ||
      code === dash ||
      code === underscore
    ) {
      index++
      continue
    }

    break
  }

  // Ignore a final dot:
  if (code === dot) {
    dots.pop()
    index--
  }

  // If there are not dots, exit.
  if (dots[0] === undefined) {
    return
  }

  // If there is an underscore in the last two domain parts, exit:
  // `www.example.c_m` and `www.ex_ample.com` are not OK, but
  // `www.sub_domain.example.com` is.
  lastTwoPartsStart = dots.length < 2 ? start : dots[dots.length - 2] + 1

  if (value.slice(lastTwoPartsStart, index).indexOf('_') !== -1) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  end = index
  pathStart = index

  // Parse a path.
  while (index < length) {
    code = value.charCodeAt(index)

    if (whitespace(code) || code === lessThan) {
      break
    }

    index++

    if (
      code === exclamationMark ||
      code === asterisk ||
      code === comma ||
      code === dot ||
      code === colon ||
      code === questionMark ||
      code === underscore ||
      code === tilde
    ) {
      // Empty
    } else {
      end = index
    }
  }

  index = end

  // If the path ends in a closing paren, and the count of closing parens is
  // higher than the opening count, then remove the supefluous closing parens.
  if (value.charCodeAt(index - 1) === rightParenthesis) {
    path = value.slice(pathStart, index)
    leftCount = ccount(path, leftParenthesisCharacter)
    rightCount = ccount(path, rightParenthesisCharacter)

    while (rightCount > leftCount) {
      index = pathStart + path.lastIndexOf(rightParenthesisCharacter)
      path = value.slice(pathStart, index)
      rightCount--
    }
  }

  if (value.charCodeAt(index - 1) === semicolon) {
    // GitHub doesn’t document this, but final semicolons aren’t paret of the
    // URL either.
    index--

    // // If the path ends in what looks like an entity, it’s not part of the path.
    if (alphabetical(value.charCodeAt(index - 1))) {
      end = index - 2

      while (alphabetical(value.charCodeAt(end))) {
        end--
      }

      if (value.charCodeAt(end) === ampersand) {
        index = end
      }
    }
  }

  content = value.slice(0, index)
  url = decode(content, {nonTerminated: false})

  if (protocolless) {
    url = 'http://' + url
  }

  exit = self.enterLink()

  // Temporarily remove all tokenizers except text in url.
  self.inlineTokenizers = {text: tokenizers.text}
  children = self.tokenizeInline(content, eat.now())
  self.inlineTokenizers = tokenizers

  exit()

  return eat(content)({type: 'link', title: null, url: url, children: children})
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/tokenizer.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/tokenizer.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a tokenizer.  This creates both `tokenizeInline` and `tokenizeBlock`.
function factory(type) {
  return tokenize

  // Tokenizer for a bound `type`.
  function tokenize(value, location) {
    var self = this
    var offset = self.offset
    var tokens = []
    var methods = self[type + 'Methods']
    var tokenizers = self[type + 'Tokenizers']
    var line = location.line
    var column = location.column
    var index
    var length
    var method
    var name
    var matched
    var valueLength

    // Trim white space only lines.
    if (!value) {
      return tokens
    }

    // Expose on `eat`.
    eat.now = now
    eat.file = self.file

    // Sync initial offset.
    updatePosition('')

    // Iterate over `value`, and iterate over all tokenizers.  When one eats
    // something, re-iterate with the remaining value.  If no tokenizer eats,
    // something failed (should not happen) and an exception is thrown.
    while (value) {
      index = -1
      length = methods.length
      matched = false

      while (++index < length) {
        name = methods[index]
        method = tokenizers[name]

        // Previously, we had constructs such as footnotes and YAML that used
        // these properties.
        // Those are now external (plus there are userland extensions), that may
        // still use them.
        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          /* istanbul ignore next */ (!method.notInList || !self.inList) &&
          /* istanbul ignore next */ (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length

          method.apply(self, [eat, value])

          matched = valueLength !== value.length

          if (matched) {
            break
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now())
      }
    }

    self.eof = now()

    return tokens

    // Update line, column, and offset based on `value`.
    function updatePosition(subvalue) {
      var lastIndex = -1
      var index = subvalue.indexOf('\n')

      while (index !== -1) {
        line++
        lastIndex = index
        index = subvalue.indexOf('\n', index + 1)
      }

      if (lastIndex === -1) {
        column += subvalue.length
      } else {
        column = subvalue.length - lastIndex
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line]
        } else if (column <= offset[line]) {
          column = offset[line] + 1
        }
      }
    }

    // Get offset.  Called before the first character is eaten to retrieve the
    // range’s offsets.
    function getOffset() {
      var indentation = []
      var pos = line + 1

      // Done.  Called when the last character is eaten to retrieve the range’s
      // offsets.
      return function () {
        var last = line + 1

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1)

          pos++
        }

        return indentation
      }
    }

    // Get the current position.
    function now() {
      var pos = {line: line, column: column}

      pos.offset = self.toOffset(pos)

      return pos
    }

    // Store position information for a node.
    function Position(start) {
      this.start = start
      this.end = now()
    }

    // Throw when a value is incorrectly eaten.  This shouldn’t happen but will
    // throw on new, incorrect rules.
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.slice(0, subvalue.length) !== subvalue) {
        // Capture stack-trace.
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this warning on https://git.io/vg5Ft'
          ),
          now()
        )
      }
    }

    // Mark position and patch `node.position`.
    function position() {
      var before = now()

      return update

      // Add the position to a node.
      function update(node, indent) {
        var previous = node.position
        var start = previous ? previous.start : before
        var combined = []
        var n = previous && previous.end.line
        var l = before.line

        node.position = new Position(start)

        // If there was already a `position`, this node was merged.  Fixing
        // `start` wasn’t hard, but the indent is different.  Especially
        // because some information, the indent between `n` and `l` wasn’t
        // tracked.  Luckily, that space is (should be?) empty, so we can
        // safely check for it now.
        if (previous && indent && previous.indent) {
          combined = previous.indent

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1)
            }

            combined.push(before.column)
          }

          indent = combined.concat(indent)
        }

        node.position.indent = indent || []

        return node
      }
    }

    // Add `node` to `parent`s children or to `tokens`.  Performs merges where
    // possible.
    function add(node, parent) {
      var children = parent ? parent.children : tokens
      var previous = children[children.length - 1]
      var fn

      if (
        previous &&
        node.type === previous.type &&
        (node.type === 'text' || node.type === 'blockquote') &&
        mergeable(previous) &&
        mergeable(node)
      ) {
        fn = node.type === 'text' ? mergeText : mergeBlockquote
        node = fn.call(self, previous, node)
      }

      if (node !== previous) {
        children.push(node)
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart()
      }

      return node
    }

    // Remove `subvalue` from `value`.  `subvalue` must be at the start of
    // `value`.
    function eat(subvalue) {
      var indent = getOffset()
      var pos = position()
      var current = now()

      validateEat(subvalue)

      apply.reset = reset
      reset.test = test
      apply.test = test

      value = value.slice(subvalue.length)

      updatePosition(subvalue)

      indent = indent()

      return apply

      // Add the given arguments, add `position` to the returned node, and
      // return the node.
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent)
      }

      // Functions just like apply, but resets the content: the line and
      // column are reversed, and the eaten value is re-added.   This is
      // useful for nodes with a single type of content, such as lists and
      // tables.  See `apply` above for what parameters are expected.
      function reset() {
        var node = apply.apply(null, arguments)

        line = current.line
        column = current.column
        value = subvalue + value

        return node
      }

      // Test the position, after eating, and reverse to a not-eaten state.
      function test() {
        var result = pos({})

        line = current.line
        column = current.column
        value = subvalue + value

        return result.position
      }
    }
  }
}

// Check whether a node is mergeable with adjacent nodes.
function mergeable(node) {
  var start
  var end

  if (node.type !== 'text' || !node.position) {
    return true
  }

  start = node.position.start
  end = node.position.end

  // Only merge nodes which occupy the same size as their `value`.
  return (
    start.line !== end.line || end.column - start.column === node.value.length
  )
}

// Merge two text nodes: `node` into `prev`.
function mergeText(previous, node) {
  previous.value += node.value

  return previous
}

// Merge two blockquotes: `node` into `prev`, unless in CommonMark or gfm modes.
function mergeBlockquote(previous, node) {
  if (this.options.commonmark || this.options.gfm) {
    return node
  }

  previous.children = previous.children.concat(node.children)

  return previous
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/unescape.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/unescape.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

var backslash = '\\'

// Factory to de-escape a value, based on a list at `key` in `ctx`.
function factory(ctx, key) {
  return unescape

  // De-escape a string using the expression at `key` in `ctx`.
  function unescape(value) {
    var previous = 0
    var index = value.indexOf(backslash)
    var escape = ctx[key]
    var queue = []
    var character

    while (index !== -1) {
      queue.push(value.slice(previous, index))
      previous = index + 1
      character = value.charAt(previous)

      // If the following character is not a valid escape, add the slash.
      if (!character || escape.indexOf(character) === -1) {
        queue.push(backslash)
      }

      index = value.indexOf(backslash, previous + 1)
    }

    queue.push(value.slice(previous))

    return queue.join('')
  }
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/util/get-indentation.js":
/*!**************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/util/get-indentation.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation

var tab = '\t'
var space = ' '

var spaceSize = 1
var tabSize = 4

// Gets indentation information for a line.
function indentation(value) {
  var index = 0
  var indent = 0
  var character = value.charAt(index)
  var stops = {}
  var size

  while (character === tab || character === space) {
    size = character === tab ? tabSize : spaceSize

    indent += size

    if (size > 1) {
      indent = Math.floor(indent / size) * size
    }

    stops[indent] = index
    character = value.charAt(++index)
  }

  return {indent: indent, stops: stops}
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/util/html.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/util/html.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*'
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+'
var singleQuoted = "'[^']*'"
var doubleQuoted = '"[^"]*"'
var attributeValue =
  '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')'
var attribute =
  '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)'
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>'
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>'
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->'
var processing = '<[?].*?[?]>'
var declaration = '<![A-Za-z]+\\s+[^>]*>'
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')')

exports.tag = new RegExp(
  '^(?:' +
    openTag +
    '|' +
    closeTag +
    '|' +
    comment +
    '|' +
    processing +
    '|' +
    declaration +
    '|' +
    cdata +
    ')'
)


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/util/interrupt.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/util/interrupt.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt

function interrupt(interruptors, tokenizers, ctx, parameters) {
  var length = interruptors.length
  var index = -1
  var interruptor
  var config

  while (++index < length) {
    interruptor = interruptors[index]
    config = interruptor[1] || {}

    if (
      config.pedantic !== undefined &&
      config.pedantic !== ctx.options.pedantic
    ) {
      continue
    }

    if (
      config.commonmark !== undefined &&
      config.commonmark !== ctx.options.commonmark
    ) {
      continue
    }

    if (tokenizers[interruptor[0]].apply(ctx, parameters)) {
      return true
    }
  }

  return false
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/util/normalize.js":
/*!********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/util/normalize.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "../../node_modules/collapse-white-space/index.js")

module.exports = normalize

// Normalize an identifier.  Collapses multiple white space characters into a
// single space, and removes casing.
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase()
}


/***/ }),

/***/ "../../node_modules/remark/node_modules/remark-parse/lib/util/remove-indentation.js":
/*!*****************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark/node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var getIndent = __webpack_require__(/*! ./get-indentation */ "../../node_modules/remark/node_modules/remark-parse/lib/util/get-indentation.js")

module.exports = indentation

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var exclamationMark = '!'

// Remove the minimum indent from every line in `value`.  Supports both tab,
// spaced, and mixed indentation (as well as possible).
function indentation(value, maximum) {
  var values = value.split(lineFeed)
  var position = values.length + 1
  var minIndent = Infinity
  var matrix = []
  var index
  var indentation
  var stops
  var padding

  values.unshift(repeat(space, maximum) + exclamationMark)

  while (position--) {
    indentation = getIndent(values[position])

    matrix[position] = indentation.stops

    if (trim(values[position]).length === 0) {
      continue
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent
      }
    } else {
      minIndent = Infinity

      break
    }
  }

  if (minIndent !== Infinity) {
    position = values.length

    while (position--) {
      stops = matrix[position]
      index = minIndent

      while (index && !(index in stops)) {
        index--
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = tab
      } else {
        padding = ''
      }

      values[position] =
        padding + values[position].slice(index in stops ? stops[index] + 1 : 0)
    }
  }

  values.shift()

  return values.join(lineFeed)
}


/***/ }),

/***/ "../../node_modules/repeat-string/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/repeat-string/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "../../node_modules/replace-ext/index.js":
/*!**********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/replace-ext/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),

/***/ "../../node_modules/state-toggle/index.js":
/*!***********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/state-toggle/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ }),

/***/ "../../node_modules/stringify-entities/dangerous.json":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/stringify-entities/dangerous.json ***!
  \***********************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"cent\",\"copy\",\"divide\",\"gt\",\"lt\",\"not\",\"para\",\"times\"]");

/***/ }),

/***/ "../../node_modules/stringify-entities/index.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/stringify-entities/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var entities = __webpack_require__(/*! character-entities-html4 */ "../../node_modules/character-entities-html4/index.json")
var legacy = __webpack_require__(/*! character-entities-legacy */ "../../node_modules/character-entities-legacy/index.json")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "../../node_modules/is-hexadecimal/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "../../node_modules/is-alphanumerical/index.js")
var dangerous = __webpack_require__(/*! ./dangerous.json */ "../../node_modules/stringify-entities/dangerous.json")

module.exports = encode
encode.escape = escape

var own = {}.hasOwnProperty

// Characters
var equalsTo = 61

// List of enforced escapes.
var escapes = ['"', "'", '<', '>', '&', '`']

// Map of characters to names.
var characters = construct()

// Default escapes.
var defaultEscapes = toExpression(escapes)

// Surrogate pairs.
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g

// Non-ASCII characters.
// eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
var bmp = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g

// Encode special characters in `value`.
function encode(value, options) {
  var settings = options || {}
  var subset = settings.subset
  var set = subset ? toExpression(subset) : defaultEscapes
  var escapeOnly = settings.escapeOnly
  var omit = settings.omitOptionalSemicolons

  value = value.replace(set, replace)

  if (subset || escapeOnly) {
    return value
  }

  return value
    .replace(surrogatePair, replaceSurrogatePair)
    .replace(bmp, replace)

  function replaceSurrogatePair(pair, pos, val) {
    return toHexReference(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      val.charCodeAt(pos + 2),
      omit
    )
  }

  function replace(char, pos, val) {
    return one(char, val.charCodeAt(pos + 1), settings)
  }
}

// Shortcut to escape special characters in HTML.
function escape(value) {
  return encode(value, {escapeOnly: true, useNamedReferences: true})
}

// Encode `char` according to `options`.
function one(char, next, options) {
  var shortest = options.useShortestReferences
  var omit = options.omitOptionalSemicolons
  var named
  var code
  var numeric
  var decimal

  if ((shortest || options.useNamedReferences) && own.call(characters, char)) {
    named = toNamed(characters[char], next, omit, options.attribute)
  }

  if (shortest || !named) {
    code = char.charCodeAt(0)
    numeric = toHexReference(code, next, omit)

    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if (shortest) {
      decimal = toDecimalReference(code, next, omit)

      if (decimal.length < numeric.length) {
        numeric = decimal
      }
    }
  }

  if (named && (!shortest || named.length < numeric.length)) {
    return named
  }

  return numeric
}

// Transform `code` into an entity.
function toNamed(name, next, omit, attribute) {
  var value = '&' + name

  if (
    omit &&
    own.call(legacy, name) &&
    dangerous.indexOf(name) === -1 &&
    (!attribute || (next && next !== equalsTo && !alphanumerical(next)))
  ) {
    return value
  }

  return value + ';'
}

// Transform `code` into a hexadecimal character reference.
function toHexReference(code, next, omit) {
  var value = '&#x' + code.toString(16).toUpperCase()
  return omit && next && !hexadecimal(next) ? value : value + ';'
}

// Transform `code` into a decimal character reference.
function toDecimalReference(code, next, omit) {
  var value = '&#' + String(code)
  return omit && next && !decimal(next) ? value : value + ';'
}

// Create an expression for `characters`.
function toExpression(characters) {
  return new RegExp('[' + characters.join('') + ']', 'g')
}

// Construct the map.
function construct() {
  var chars = {}
  var name

  for (name in entities) {
    chars[entities[name]] = name
  }

  return chars
}


/***/ }),

/***/ "../../node_modules/trim-trailing-lines/index.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/trim-trailing-lines/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

var line = '\n'

// Remove final newline characters from `value`.
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    // Empty
  }

  return val.slice(0, index + 1)
}


/***/ }),

/***/ "../../node_modules/trim/index.js":
/*!***************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/trim/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),

/***/ "../../node_modules/trough/index.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/trough/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "../../node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "../../node_modules/trough/wrap.js":
/*!****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/trough/wrap.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "../../node_modules/unherit/index.js":
/*!******************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unherit/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js")

module.exports = unherit

// Create a custom constructor which can be modified without affecting the
// original class.
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  // Clone values.
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  // Constructor accepting a single argument, which itself is an `arguments`
  // object.
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  // Constructor accepting variadic arguments.
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ }),

/***/ "../../node_modules/unified/index.js":
/*!******************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unified/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bail = __webpack_require__(/*! bail */ "../../node_modules/bail/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "../../node_modules/unified/node_modules/is-buffer/index.js")
var extend = __webpack_require__(/*! extend */ "../../node_modules/extend/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "../../node_modules/unified/node_modules/is-plain-obj/index.js")
var trough = __webpack_require__(/*! trough */ "../../node_modules/trough/index.js")
var vfile = __webpack_require__(/*! vfile */ "../../node_modules/vfile/index.js")

// Expose a frozen processor.
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

// Process pipeline.
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  var result = p.stringify(ctx.tree, ctx.file)
  var file = ctx.file

  if (result === undefined || result === null) {
    // Empty.
  } else if (typeof result === 'string' || buffer(result)) {
    file.contents = result
  } else {
    file.result = result
  }
}

// Function to create the first processor.
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  // Data management.
  processor.data = data

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "../../node_modules/unified/node_modules/is-buffer/index.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unified/node_modules/is-buffer/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "../../node_modules/unified/node_modules/is-plain-obj/index.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unified/node_modules/is-plain-obj/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ "../../node_modules/unist-util-is/convert.js":
/*!**************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-is/convert.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "../../node_modules/unist-util-remove-position/index.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-remove-position/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../../node_modules/unist-util-visit/index.js")

module.exports = removePosition

function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}


/***/ }),

/***/ "../../node_modules/unist-util-stringify-position/index.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-stringify-position/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "../../node_modules/unist-util-visit-parents/index.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-visit-parents/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "../../node_modules/unist-util-visit/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-visit/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "../../node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "../../node_modules/vfile-location/index.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vfile-location/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

// Factory to get the line and column-based `position` for `offset` in the bound
// indices.
function offsetToPositionFactory(indices) {
  return offsetToPosition

  // Get the line and column-based `position` for `offset` in the bound indices.
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

// Factory to get the `offset` for a line and column-based `position` in the
// bound indices.
function positionToOffsetFactory(indices) {
  return positionToOffset

  // Get the `offset` for a line and column-based `position` in the bound
  // indices.
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

// Get indices of line-breaks in `value`.
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}


/***/ }),

/***/ "../../node_modules/vfile-message/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vfile-message/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "../../node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "../../node_modules/vfile/core.js":
/*!***************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vfile/core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js")
var replace = __webpack_require__(/*! replace-ext */ "../../node_modules/replace-ext/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "../../node_modules/vfile/node_modules/is-buffer/index.js")

module.exports = VFile

var own = {}.hasOwnProperty
var proto = VFile.prototype

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

proto.toString = toString

// Access full path (`~/index.min.js`).
Object.defineProperty(proto, 'path', {get: getPath, set: setPath})

// Access parent path (`~`).
Object.defineProperty(proto, 'dirname', {get: getDirname, set: setDirname})

// Access basename (`index.min.js`).
Object.defineProperty(proto, 'basename', {get: getBasename, set: setBasename})

// Access extname (`.js`).
Object.defineProperty(proto, 'extname', {get: getExtname, set: setExtname})

// Access stem (`index.min`).
Object.defineProperty(proto, 'stem', {get: getStem, set: setStem})

// Construct a new file.
function VFile(options) {
  var prop
  var index
  var length

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = process.cwd()

  // Set path related properties in the correct order.
  index = -1
  length = order.length

  while (++index < length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop]
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path')

  if (path !== this.path) {
    this.history.push(path)
  }
}

function getDirname() {
  return typeof this.path === 'string' ? path.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname')
  this.path = path.join(dirname || '', this.basename)
}

function getBasename() {
  return typeof this.path === 'string' ? path.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename')
  assertPart(basename, 'basename')
  this.path = path.join(this.dirname || '', basename)
}

function getExtname() {
  return typeof this.path === 'string' ? path.extname(this.path) : undefined
}

function setExtname(extname) {
  var ext = extname || ''

  assertPart(ext, 'extname')
  assertPath(this.path, 'extname')

  if (ext) {
    if (ext.charAt(0) !== '.') {
      throw new Error('`extname` must start with `.`')
    }

    if (ext.indexOf('.', 1) !== -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = replace(this.path, ext)
}

function getStem() {
  return typeof this.path === 'string'
    ? path.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem')
  assertPart(stem, 'stem')
  this.path = path.join(this.dirname || '', stem + (this.extname || ''))
}

// Get the value of the file.
function toString(encoding) {
  var value = this.contents || ''
  return buffer(value) ? value.toString(encoding) : String(value)
}

// Assert that `part` is not a path (i.e., does not contain `path.sep`).
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/vfile/index.js":
/*!****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vfile/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "../../node_modules/vfile-message/index.js")
var VFile = __webpack_require__(/*! ./core.js */ "../../node_modules/vfile/core.js")

module.exports = VFile

var proto = VFile.prototype

proto.message = message
proto.info = info
proto.fail = fail

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var filePath = this.path
  var message = new VMessage(reason, position, origin)

  if (filePath) {
    message.name = filePath + ':' + message.name
    message.file = filePath
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}


/***/ }),

/***/ "../../node_modules/vfile/node_modules/is-buffer/index.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/vfile/node_modules/is-buffer/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "../../node_modules/xtend/immutable.js":
/*!********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/xtend/immutable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2JhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9jb2xsYXBzZS13aGl0ZS1zcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWNhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1oZXhhZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9sb25nZXN0LXN0cmVhay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21hcmtkb3duLWVzY2FwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tYXJrZG93bi10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtY29tcGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9hbGwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL2NvbXBpbGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9vbmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9vcmRlcmVkLWl0ZW1zLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvbWFjcm8vdW5vcmRlcmVkLWl0ZW1zLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2NvcHktaWRlbnRpZmllci1lbmNvZGluZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW5jbG9zZS10aXRsZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW5jbG9zZS11cmkuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2VudGVyLWxpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9lbnRpdHktcHJlZml4LWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2xhYmVsLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9wYWQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9jb2RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2lubGluZS1jb2RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvbGluay1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saW5rLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvbGlzdC1pdGVtLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS1jZWxsLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90ZXh0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9ibG9jay1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2JyZWFrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9jb2RlLWlubGluZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvc3Ryb25nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS90YWcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3VybC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYXV0by1saW5rLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JsYW5rLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9icmVhay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWZlbmNlZC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VtYWlsLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9oZWFkaW5nLWF0eC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9oZWFkaW5nLXNldGV4dC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWJsb2NrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2h0bWwtaW5saW5lLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90ZXh0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3VybC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9nZXQtaW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9odG1sLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlcGxhY2UtZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3RhdGUtdG9nZ2xlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3RyaW5naWZ5LWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3RyaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cm91Z2gvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaGVyaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pZmllZC9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pZmllZC9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS1sb2NhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9jb3JlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdmZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixrREFBa0Q7O0FBRTdFO0FBQ0EsTUFBTTtBQUNOLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQWTs7QUFFWixtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLDBEQUFZOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RFk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGdFQUFlOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFBZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNURZOztBQUVaOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFO0FBQzFFLCtCQUErQjtBQUMvQixrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQywwRkFBMkI7QUFDaEQsY0FBYyxtQkFBTyxDQUFDLDhGQUE2QjtBQUNuRCxjQUFjLG1CQUFPLENBQUMsMERBQVk7QUFDbEMsa0JBQWtCLG1CQUFPLENBQUMsa0VBQWdCO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHdFQUFtQjtBQUNoRCxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBaUI7O0FBRTVDOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyx3QkFBd0I7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsY0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0Es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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hTWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCWTs7QUFFWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRFk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLDBFQUFvQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQlk7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDWTs7QUFFWjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Qlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQywwRUFBb0I7QUFDekMsZUFBZSxtQkFBTyxDQUFDLHVFQUFZO0FBQ25DLG9CQUFvQixtQkFBTyxDQUFDLG1FQUFVO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyxpRkFBaUI7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHFEQUFxRDtBQUNsRSxXQUFXLGdDQUFnQztBQUMzQyxTQUFTLDhCQUE4QjtBQUN2QyxtQkFBbUIsZ0NBQWdDO0FBQ25ELGFBQWEsbUJBQW1CO0FBQ2hDLFdBQVcsbUJBQW1CO0FBQzlCLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0pZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLG9HQUF3Qjs7QUFFekQ7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWEsRUFBRTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1Q0FBdUM7QUFDckQ7Ozs7Ozs7Ozs7Ozs7QUMzSFk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGdHQUFpQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixjQUFjO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1UFk7O0FBRVos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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3JHWTs7QUFFWixtQkFBbUIsbUJBQU8sQ0FBQywwRkFBYzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REOzs7Ozs7Ozs7Ozs7O0FDOUdZOztBQUVaLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFpQjtBQUM1QyxhQUFhLG1CQUFPLENBQUMsNEZBQWU7QUFDcEMsVUFBVSxtQkFBTyxDQUFDLDBGQUFjOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7Ozs7Ozs7Ozs7Ozs7QUMxRFk7O0FBRVosaUJBQWlCLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyw4RkFBZ0I7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5V1k7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsMERBQVk7QUFDbEMsZ0JBQWdCLG1CQUFPLENBQUMsZ0hBQXlCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLHNIQUE0QjtBQUN2RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvR0FBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEO0FBQ0EsbUNBQW1DLElBQUk7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQiw0Q0FBNEM7O0FBRTNFO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWUsNERBQTREO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdk9ZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeERZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHNCQUFzQjtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCLGFBQWEsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFpQjtBQUM1QyxpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLDRGQUFlOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIscUJBQXFCOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsd0RBQXdEO0FBQy9FOzs7Ozs7Ozs7Ozs7O0FDak5ZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3VFk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7O0FDaENZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixXQUFXOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEZZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQlk7O0FBRVosWUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRZOztBQUVaOztBQUVBLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RVk7O0FBRVo7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsc0ZBQTBCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Qlk7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekVZOztBQUVaLGdCQUFnQixtQkFBTyxDQUFDLGdHQUErQjs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckMsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdGQSwrQ0FBWTs7QUFFWixXQUFXLG1CQUFPLENBQUMseURBQU07QUFDekIsY0FBYyxtQkFBTyxDQUFDLDREQUFhO0FBQ25DLGFBQWEsbUJBQU8sQ0FBQywyRUFBVzs7QUFFaEM7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsS0FBSywwQkFBMEI7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQywyQkFBMkI7O0FBRWpFO0FBQ0EseUNBQXlDLGlDQUFpQzs7QUFFMUU7QUFDQSwwQ0FBMEMsbUNBQW1DOztBQUU3RTtBQUNBLHlDQUF5QyxpQ0FBaUM7O0FBRTFFO0FBQ0Esc0NBQXNDLDJCQUEyQjs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWU7QUFDZixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDektZOztBQUVaLGVBQWUsbUJBQU8sQ0FBQyxnRUFBZTtBQUN0QyxZQUFZLG1CQUFPLENBQUMsbURBQVc7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImVkNDEwZmRmYjg4N2FkZjU4ZTZkL3ZlbmRvcnN+YWJvdXQudmVuZG9yc35hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhaWxcblxuZnVuY3Rpb24gYmFpbChlcnIpIHtcbiAgaWYgKGVycikge1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjY291bnRcblxuZnVuY3Rpb24gY2NvdW50KHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIHZhbCA9IFN0cmluZyh2YWx1ZSlcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycgfHwgY2hhcmFjdGVyLmxlbmd0aCAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIGluZGV4ID0gdmFsLmluZGV4T2YoY2hhcmFjdGVyKVxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb3VudCsrXG4gICAgaW5kZXggPSB2YWwuaW5kZXhPZihjaGFyYWN0ZXIsIGluZGV4ICsgMSlcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29sbGFwc2VcblxuLy8gYGNvbGxhcHNlKCcgXFx0XFxuYmFyIFxcbmJhelxcdCcpIC8vICcgYmFyIGJheiAnYFxuZnVuY3Rpb24gY29sbGFwc2UodmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFxzKy9nLCAnICcpXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhYmV0aWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFiZXRpY2FsLlxuZnVuY3Rpb24gYWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSAvKiBhLXogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSAvKiBBLVogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRyZXR1cm4gIS9bXjAtOWEtelxceERGLVxceEZGXS8udGVzdChzdHIudG9Mb3dlckNhc2UoKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYW51bWVyaWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFudW1lcmljYWwuXG5mdW5jdGlvbiBhbHBoYW51bWVyaWNhbChjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHx8IGRlY2ltYWwoY2hhcmFjdGVyKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgZGVjaW1hbC5cbmZ1bmN0aW9uIGRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgLyogMC05ICovXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZXhhZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgaGV4YWRlY2ltYWwuXG5mdW5jdGlvbiBoZXhhZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTAyKSAvKiB6ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDcwKSAvKiBaICovIHx8XG4gICAgKGNvZGUgPj0gNDggLyogQSAqLyAmJiBjb2RlIDw9IDU3KSAvKiBaICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdoaXRlc3BhY2VcblxudmFyIGZyb21Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZVxudmFyIHJlID0gL1xccy9cblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGNoYXJhY3Rlcikge1xuICByZXR1cm4gcmUudGVzdChcbiAgICB0eXBlb2YgY2hhcmFjdGVyID09PSAnbnVtYmVyJyA/IGZyb21Db2RlKGNoYXJhY3RlcikgOiBjaGFyYWN0ZXIuY2hhckF0KDApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRDaGFyYWN0ZXJcblxudmFyIGZyb21Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZVxudmFyIHJlID0gL1xcdy9cblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGEgd29yZCBjaGFyYWN0ZXIuXG5mdW5jdGlvbiB3b3JkQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gcmUudGVzdChcbiAgICB0eXBlb2YgY2hhcmFjdGVyID09PSAnbnVtYmVyJyA/IGZyb21Db2RlKGNoYXJhY3RlcikgOiBjaGFyYWN0ZXIuY2hhckF0KDApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvbmdlc3RTdHJlYWtcblxuLy8gR2V0IHRoZSBjb3VudCBvZiB0aGUgbG9uZ2VzdCByZXBlYXRpbmcgc3RyZWFrIG9mIGBjaGFyYWN0ZXJgIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBsb25nZXN0U3RyZWFrKHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgbWF4aW11bSA9IDBcbiAgdmFyIGV4cGVjdGVkXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG4gIGV4cGVjdGVkID0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuXG4gICAgaWYgKGluZGV4ID09PSBleHBlY3RlZCkge1xuICAgICAgaWYgKGNvdW50ID4gbWF4aW11bSkge1xuICAgICAgICBtYXhpbXVtID0gY291bnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAxXG4gICAgfVxuXG4gICAgZXhwZWN0ZWQgPSBpbmRleCArIDFcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBleHBlY3RlZClcbiAgfVxuXG4gIHJldHVybiBtYXhpbXVtXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVzXG5cbnZhciBkZWZhdWx0cyA9IFtcbiAgJ1xcXFwnLFxuICAnYCcsXG4gICcqJyxcbiAgJ3snLFxuICAnfScsXG4gICdbJyxcbiAgJ10nLFxuICAnKCcsXG4gICcpJyxcbiAgJyMnLFxuICAnKycsXG4gICctJyxcbiAgJy4nLFxuICAnIScsXG4gICdfJyxcbiAgJz4nXG5dXG5cbnZhciBnZm0gPSBkZWZhdWx0cy5jb25jYXQoWyd+JywgJ3wnXSlcblxudmFyIGNvbW1vbm1hcmsgPSBnZm0uY29uY2F0KFtcbiAgJ1xcbicsXG4gICdcIicsXG4gICckJyxcbiAgJyUnLFxuICAnJicsXG4gIFwiJ1wiLFxuICAnLCcsXG4gICcvJyxcbiAgJzonLFxuICAnOycsXG4gICc8JyxcbiAgJz0nLFxuICAnPycsXG4gICdAJyxcbiAgJ14nXG5dKVxuXG5lc2NhcGVzLmRlZmF1bHQgPSBkZWZhdWx0c1xuZXNjYXBlcy5nZm0gPSBnZm1cbmVzY2FwZXMuY29tbW9ubWFyayA9IGNvbW1vbm1hcmtcblxuLy8gR2V0IG1hcmtkb3duIGVzY2FwZXMuXG5mdW5jdGlvbiBlc2NhcGVzKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChzZXR0aW5ncy5jb21tb25tYXJrKSB7XG4gICAgcmV0dXJuIGNvbW1vbm1hcmtcbiAgfVxuXG4gIHJldHVybiBzZXR0aW5ncy5nZm0gPyBnZm0gOiBkZWZhdWx0c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBtYXJrZG93blRhYmxlXG5cbnZhciB0cmFpbGluZ1doaXRlc3BhY2UgPSAvICskL1xuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIHZlcnRpY2FsQmFyID0gJ3wnXG5cbnZhciB4ID0gMFxudmFyIEMgPSA2N1xudmFyIEwgPSA3NlxudmFyIFIgPSA4MlxudmFyIGMgPSA5OVxudmFyIGwgPSAxMDhcbnZhciByID0gMTE0XG5cbi8vIENyZWF0ZSBhIHRhYmxlIGZyb20gYSBtYXRyaXggb2Ygc3RyaW5ncy5cbmZ1bmN0aW9uIG1hcmtkb3duVGFibGUodGFibGUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcGFkZGluZyA9IHNldHRpbmdzLnBhZGRpbmcgIT09IGZhbHNlXG4gIHZhciBzdGFydCA9IHNldHRpbmdzLmRlbGltaXRlclN0YXJ0ICE9PSBmYWxzZVxuICB2YXIgZW5kID0gc2V0dGluZ3MuZGVsaW1pdGVyRW5kICE9PSBmYWxzZVxuICB2YXIgYWxpZ24gPSAoc2V0dGluZ3MuYWxpZ24gfHwgW10pLmNvbmNhdCgpXG4gIHZhciBhbGlnbkRlbGltaXRlcnMgPSBzZXR0aW5ncy5hbGlnbkRlbGltaXRlcnMgIT09IGZhbHNlXG4gIHZhciBhbGlnbm1lbnRzID0gW11cbiAgdmFyIHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aCB8fCBkZWZhdWx0U3RyaW5nTGVuZ3RoXG4gIHZhciByb3dJbmRleCA9IC0xXG4gIHZhciByb3dMZW5ndGggPSB0YWJsZS5sZW5ndGhcbiAgdmFyIGNlbGxNYXRyaXggPSBbXVxuICB2YXIgc2l6ZU1hdHJpeCA9IFtdXG4gIHZhciByb3cgPSBbXVxuICB2YXIgc2l6ZXMgPSBbXVxuICB2YXIgbG9uZ2VzdENlbGxCeUNvbHVtbiA9IFtdXG4gIHZhciBtb3N0Q2VsbHNQZXJSb3cgPSAwXG4gIHZhciBjZWxsc1xuICB2YXIgY29sdW1uSW5kZXhcbiAgdmFyIGNvbHVtbkxlbmd0aFxuICB2YXIgbGFyZ2VzdFxuICB2YXIgc2l6ZVxuICB2YXIgY2VsbFxuICB2YXIgbGluZXNcbiAgdmFyIGxpbmVcbiAgdmFyIGJlZm9yZVxuICB2YXIgYWZ0ZXJcbiAgdmFyIGNvZGVcblxuICAvLyBUaGlzIGlzIGEgc3VwZXJmbHVvdXMgbG9vcCBpZiB3ZSBkb27igJl0IGFsaWduIGRlbGltaXRlcnMsIGJ1dCBvdGhlcndpc2Ugd2XigJlkXG4gIC8vIGRvIHN1cGVyZmx1b3VzIHdvcmsgd2hlbiBhbGlnbmluZywgc28gb3B0aW1pemUgZm9yIGFsaWduaW5nLlxuICB3aGlsZSAoKytyb3dJbmRleCA8IHJvd0xlbmd0aCkge1xuICAgIGNlbGxzID0gdGFibGVbcm93SW5kZXhdXG4gICAgY29sdW1uSW5kZXggPSAtMVxuICAgIGNvbHVtbkxlbmd0aCA9IGNlbGxzLmxlbmd0aFxuICAgIHJvdyA9IFtdXG4gICAgc2l6ZXMgPSBbXVxuXG4gICAgaWYgKGNvbHVtbkxlbmd0aCA+IG1vc3RDZWxsc1BlclJvdykge1xuICAgICAgbW9zdENlbGxzUGVyUm93ID0gY29sdW1uTGVuZ3RoXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGNlbGwgPSBzZXJpYWxpemUoY2VsbHNbY29sdW1uSW5kZXhdKVxuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIHNpemUgPSBzdHJpbmdMZW5ndGgoY2VsbClcbiAgICAgICAgc2l6ZXNbY29sdW1uSW5kZXhdID0gc2l6ZVxuXG4gICAgICAgIGxhcmdlc3QgPSBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XVxuXG4gICAgICAgIGlmIChsYXJnZXN0ID09PSB1bmRlZmluZWQgfHwgc2l6ZSA+IGxhcmdlc3QpIHtcbiAgICAgICAgICBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cucHVzaChjZWxsKVxuICAgIH1cblxuICAgIGNlbGxNYXRyaXhbcm93SW5kZXhdID0gcm93XG4gICAgc2l6ZU1hdHJpeFtyb3dJbmRleF0gPSBzaXplc1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBhbGlnbm1lbnRzIHRvIHVzZS5cbiAgY29sdW1uSW5kZXggPSAtMVxuICBjb2x1bW5MZW5ndGggPSBtb3N0Q2VsbHNQZXJSb3dcblxuICBpZiAodHlwZW9mIGFsaWduID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhbGlnbikge1xuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XSA9IHRvQWxpZ25tZW50KGFsaWduW2NvbHVtbkluZGV4XSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29kZSA9IHRvQWxpZ25tZW50KGFsaWduKVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGFsaWdubWVudHNbY29sdW1uSW5kZXhdID0gY29kZVxuICAgIH1cbiAgfVxuXG4gIC8vIEluamVjdCB0aGUgYWxpZ25tZW50IHJvdy5cbiAgY29sdW1uSW5kZXggPSAtMVxuICBjb2x1bW5MZW5ndGggPSBtb3N0Q2VsbHNQZXJSb3dcbiAgcm93ID0gW11cbiAgc2l6ZXMgPSBbXVxuXG4gIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgY29kZSA9IGFsaWdubWVudHNbY29sdW1uSW5kZXhdXG4gICAgYmVmb3JlID0gJydcbiAgICBhZnRlciA9ICcnXG5cbiAgICBpZiAoY29kZSA9PT0gbCkge1xuICAgICAgYmVmb3JlID0gY29sb25cbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IHIpIHtcbiAgICAgIGFmdGVyID0gY29sb25cbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IGMpIHtcbiAgICAgIGJlZm9yZSA9IGNvbG9uXG4gICAgICBhZnRlciA9IGNvbG9uXG4gICAgfVxuXG4gICAgLy8gVGhlcmUgKm11c3QqIGJlIGF0IGxlYXN0IG9uZSBoeXBoZW4tbWludXMgaW4gZWFjaCBhbGlnbm1lbnQgY2VsbC5cbiAgICBzaXplID0gYWxpZ25EZWxpbWl0ZXJzXG4gICAgICA/IE1hdGgubWF4KFxuICAgICAgICAgIDEsXG4gICAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gLSBiZWZvcmUubGVuZ3RoIC0gYWZ0ZXIubGVuZ3RoXG4gICAgICAgIClcbiAgICAgIDogMVxuXG4gICAgY2VsbCA9IGJlZm9yZSArIHJlcGVhdChkYXNoLCBzaXplKSArIGFmdGVyXG5cbiAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICBzaXplID0gYmVmb3JlLmxlbmd0aCArIHNpemUgKyBhZnRlci5sZW5ndGhcblxuICAgICAgaWYgKHNpemUgPiBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSkge1xuICAgICAgICBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICAgIH1cblxuICAgICAgc2l6ZXNbY29sdW1uSW5kZXhdID0gc2l6ZVxuICAgIH1cblxuICAgIHJvd1tjb2x1bW5JbmRleF0gPSBjZWxsXG4gIH1cblxuICAvLyBJbmplY3QgdGhlIGFsaWdubWVudCByb3cuXG4gIGNlbGxNYXRyaXguc3BsaWNlKDEsIDAsIHJvdylcbiAgc2l6ZU1hdHJpeC5zcGxpY2UoMSwgMCwgc2l6ZXMpXG5cbiAgcm93SW5kZXggPSAtMVxuICByb3dMZW5ndGggPSBjZWxsTWF0cml4Lmxlbmd0aFxuICBsaW5lcyA9IFtdXG5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICByb3cgPSBjZWxsTWF0cml4W3Jvd0luZGV4XVxuICAgIHNpemVzID0gc2l6ZU1hdHJpeFtyb3dJbmRleF1cbiAgICBjb2x1bW5JbmRleCA9IC0xXG4gICAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG4gICAgbGluZSA9IFtdXG5cbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgY2VsbCA9IHJvd1tjb2x1bW5JbmRleF0gfHwgJydcbiAgICAgIGJlZm9yZSA9ICcnXG4gICAgICBhZnRlciA9ICcnXG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgc2l6ZSA9IGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdIC0gKHNpemVzW2NvbHVtbkluZGV4XSB8fCAwKVxuICAgICAgICBjb2RlID0gYWxpZ25tZW50c1tjb2x1bW5JbmRleF1cblxuICAgICAgICBpZiAoY29kZSA9PT0gcikge1xuICAgICAgICAgIGJlZm9yZSA9IHJlcGVhdChzcGFjZSwgc2l6ZSlcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSBjKSB7XG4gICAgICAgICAgaWYgKHNpemUgJSAyID09PSAwKSB7XG4gICAgICAgICAgICBiZWZvcmUgPSByZXBlYXQoc3BhY2UsIHNpemUgLyAyKVxuICAgICAgICAgICAgYWZ0ZXIgPSBiZWZvcmVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmVmb3JlID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMiArIDAuNSlcbiAgICAgICAgICAgIGFmdGVyID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMiAtIDAuNSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZ0ZXIgPSByZXBlYXQoc3BhY2UsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0ID09PSB0cnVlICYmIGNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgIGxpbmUucHVzaCh2ZXJ0aWNhbEJhcilcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYWRkaW5nID09PSB0cnVlICYmXG4gICAgICAgIC8vIERvbuKAmXQgYWRkIHRoZSBvcGVuaW5nIHNwYWNlIGlmIHdl4oCZcmUgbm90IGFsaWduaW5nIGFuZCB0aGUgY2VsbCBpc1xuICAgICAgICAvLyBlbXB0eTogdGhlcmUgd2lsbCBiZSBhIGNsb3Npbmcgc3BhY2UuXG4gICAgICAgICEoYWxpZ25EZWxpbWl0ZXJzID09PSBmYWxzZSAmJiBjZWxsID09PSAnJykgJiZcbiAgICAgICAgKHN0YXJ0ID09PSB0cnVlIHx8IGNvbHVtbkluZGV4ICE9PSAwKVxuICAgICAgKSB7XG4gICAgICAgIGxpbmUucHVzaChzcGFjZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goYmVmb3JlKVxuICAgICAgfVxuXG4gICAgICBsaW5lLnB1c2goY2VsbClcblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goYWZ0ZXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWRkaW5nID09PSB0cnVlKSB7XG4gICAgICAgIGxpbmUucHVzaChzcGFjZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZCA9PT0gdHJ1ZSB8fCBjb2x1bW5JbmRleCAhPT0gY29sdW1uTGVuZ3RoIC0gMSkge1xuICAgICAgICBsaW5lLnB1c2godmVydGljYWxCYXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZSA9IGxpbmUuam9pbignJylcblxuICAgIGlmIChlbmQgPT09IGZhbHNlKSB7XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKHRyYWlsaW5nV2hpdGVzcGFjZSwgJycpXG4gICAgfVxuXG4gICAgbGluZXMucHVzaChsaW5lKVxuICB9XG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4obGluZUZlZWQpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RyaW5nTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gdG9BbGlnbm1lbnQodmFsdWUpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUuY2hhckNvZGVBdCgwKSA6IHhcblxuICByZXR1cm4gY29kZSA9PT0gTCB8fCBjb2RlID09PSBsXG4gICAgPyBsXG4gICAgOiBjb2RlID09PSBSIHx8IGNvZGUgPT09IHJcbiAgICA/IHJcbiAgICA6IGNvZGUgPT09IEMgfHwgY29kZSA9PT0gY1xuICAgID8gY1xuICAgIDogeFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhY3RcblxuLy8gTWFrZSBhbiBtZGFzdCB0cmVlIGNvbXBhY3QgYnkgbWVyZ2luZyBhZGphY2VudCB0ZXh0IG5vZGVzLlxuZnVuY3Rpb24gY29tcGFjdCh0cmVlLCBjb21tb25tYXJrKSB7XG4gIHZpc2l0KHRyZWUsIHZpc2l0b3IpXG5cbiAgcmV0dXJuIHRyZWVcblxuICBmdW5jdGlvbiB2aXNpdG9yKGNoaWxkLCBpbmRleCwgcGFyZW50KSB7XG4gICAgdmFyIHNpYmxpbmdzID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogW11cbiAgICB2YXIgcHJldiA9IGluZGV4ICYmIHNpYmxpbmdzW2luZGV4IC0gMV1cblxuICAgIGlmIChcbiAgICAgIHByZXYgJiZcbiAgICAgIGNoaWxkLnR5cGUgPT09IHByZXYudHlwZSAmJlxuICAgICAgbWVyZ2VhYmxlKHByZXYsIGNvbW1vbm1hcmspICYmXG4gICAgICBtZXJnZWFibGUoY2hpbGQsIGNvbW1vbm1hcmspXG4gICAgKSB7XG4gICAgICBpZiAoY2hpbGQudmFsdWUpIHtcbiAgICAgICAgcHJldi52YWx1ZSArPSBjaGlsZC52YWx1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQuY2hpbGRyZW4pIHtcbiAgICAgICAgcHJldi5jaGlsZHJlbiA9IHByZXYuY2hpbGRyZW4uY29uY2F0KGNoaWxkLmNoaWxkcmVuKVxuICAgICAgfVxuXG4gICAgICBzaWJsaW5ncy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICAgIGlmIChwcmV2LnBvc2l0aW9uICYmIGNoaWxkLnBvc2l0aW9uKSB7XG4gICAgICAgIHByZXYucG9zaXRpb24uZW5kID0gY2hpbGQucG9zaXRpb24uZW5kXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZWFibGUobm9kZSwgY29tbW9ubWFyaykge1xuICB2YXIgc3RhcnRcbiAgdmFyIGVuZFxuXG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGlmICghbm9kZS5wb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBzdGFydCA9IG5vZGUucG9zaXRpb24uc3RhcnRcbiAgICBlbmQgPSBub2RlLnBvc2l0aW9uLmVuZFxuXG4gICAgLy8gT25seSBtZXJnZSBub2RlcyB3aGljaCBvY2N1cHkgdGhlIHNhbWUgc2l6ZSBhcyB0aGVpciBgdmFsdWVgLlxuICAgIHJldHVybiAoXG4gICAgICBzdGFydC5saW5lICE9PSBlbmQubGluZSB8fCBlbmQuY29sdW1uIC0gc3RhcnQuY29sdW1uID09PSBub2RlLnZhbHVlLmxlbmd0aFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBjb21tb25tYXJrICYmIG5vZGUudHlwZSA9PT0gJ2Jsb2NrcXVvdGUnXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbnZhciBlbFxuXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUVudGl0eVxuXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkoY2hhcmFjdGVycykge1xuICB2YXIgZW50aXR5ID0gJyYnICsgY2hhcmFjdGVycyArICc7J1xuICB2YXIgY2hhclxuXG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gIGVsLmlubmVySFRNTCA9IGVudGl0eVxuICBjaGFyID0gZWwudGV4dENvbnRlbnRcblxuICAvLyBTb21lIGVudGl0aWVzIGRvIG5vdCByZXF1aXJlIHRoZSBjbG9zaW5nIHNlbWljb2xvbiAoYCZub3RgIC0gZm9yIGluc3RhbmNlKSxcbiAgLy8gd2hpY2ggbGVhZHMgdG8gc2l0dWF0aW9ucyB3aGVyZSBwYXJzaW5nIHRoZSBhc3N1bWVkIGVudGl0eSBvZiAmbm90aXQ7IHdpbGxcbiAgLy8gcmVzdWx0IGluIHRoZSBzdHJpbmcgYMKsaXQ7YC4gIFdoZW4gd2UgZW5jb3VudGVyIGEgdHJhaWxpbmcgc2VtaWNvbG9uIGFmdGVyXG4gIC8vIHBhcnNpbmcgYW5kIHRoZSBlbnRpdHkgdG8gZGVjb2RlIHdhcyBub3QgYSBzZW1pY29sb24gKGAmc2VtaTtgKSwgd2UgY2FuXG4gIC8vIGFzc3VtZSB0aGF0IHRoZSBtYXRjaGluZyB3YXMgaW5jb21wbGV0ZVxuICBpZiAoY2hhci5jaGFyQ29kZUF0KGNoYXIubGVuZ3RoIC0gMSkgPT09IHNlbWljb2xvbiAmJiBjaGFyYWN0ZXJzICE9PSAnc2VtaScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIElmIHRoZSBkZWNvZGVkIHN0cmluZyBpcyBlcXVhbCB0byB0aGUgaW5wdXQsIHRoZSBlbnRpdHkgd2FzIG5vdCB2YWxpZFxuICByZXR1cm4gY2hhciA9PT0gZW50aXR5ID8gZmFsc2UgOiBjaGFyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxlZ2FjeSA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1sZWdhY3knKVxudmFyIGludmFsaWQgPSByZXF1aXJlKCdjaGFyYWN0ZXItcmVmZXJlbmNlLWludmFsaWQnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBoZXhhZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWhleGFkZWNpbWFsJylcbnZhciBhbHBoYW51bWVyaWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhbnVtZXJpY2FsJylcbnZhciBkZWNvZGVFbnRpdHkgPSByZXF1aXJlKCcuL2RlY29kZS1lbnRpdHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlRW50aXRpZXNcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZVxudmFyIG5vb3AgPSBGdW5jdGlvbi5wcm90b3R5cGVcblxuLy8gRGVmYXVsdCBzZXR0aW5ncy5cbnZhciBkZWZhdWx0cyA9IHtcbiAgd2FybmluZzogbnVsbCxcbiAgcmVmZXJlbmNlOiBudWxsLFxuICB0ZXh0OiBudWxsLFxuICB3YXJuaW5nQ29udGV4dDogbnVsbCxcbiAgcmVmZXJlbmNlQ29udGV4dDogbnVsbCxcbiAgdGV4dENvbnRleHQ6IG51bGwsXG4gIHBvc2l0aW9uOiB7fSxcbiAgYWRkaXRpb25hbDogbnVsbCxcbiAgYXR0cmlidXRlOiBmYWxzZSxcbiAgbm9uVGVybWluYXRlZDogdHJ1ZVxufVxuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIHRhYiA9IDkgLy8gJ1xcdCdcbnZhciBsaW5lRmVlZCA9IDEwIC8vICdcXG4nXG52YXIgZm9ybUZlZWQgPSAxMiAvLyAnXFxmJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgYW1wZXJzYW5kID0gMzggLy8gJyYnXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gJzsnXG52YXIgbGVzc1RoYW4gPSA2MCAvLyAnPCdcbnZhciBlcXVhbHNUbyA9IDYxIC8vICc9J1xudmFyIG51bWJlclNpZ24gPSAzNSAvLyAnIydcbnZhciB1cHBlcmNhc2VYID0gODggLy8gJ1gnXG52YXIgbG93ZXJjYXNlWCA9IDEyMCAvLyAneCdcbnZhciByZXBsYWNlbWVudENoYXJhY3RlciA9IDY1NTMzIC8vICfvv70nXG5cbi8vIFJlZmVyZW5jZSB0eXBlcy5cbnZhciBuYW1lID0gJ25hbWVkJ1xudmFyIGhleGEgPSAnaGV4YWRlY2ltYWwnXG52YXIgZGVjaSA9ICdkZWNpbWFsJ1xuXG4vLyBNYXAgb2YgYmFzZXMuXG52YXIgYmFzZXMgPSB7fVxuXG5iYXNlc1toZXhhXSA9IDE2XG5iYXNlc1tkZWNpXSA9IDEwXG5cbi8vIE1hcCBvZiB0eXBlcyB0byB0ZXN0cy5cbi8vIEVhY2ggdHlwZSBvZiBjaGFyYWN0ZXIgcmVmZXJlbmNlIGFjY2VwdHMgZGlmZmVyZW50IGNoYXJhY3RlcnMuXG4vLyBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlY3Qgd2hldGhlciBhIHJlZmVyZW5jZSBoYXMgZW5kZWQgKGFzIHRoZSBzZW1pY29sb25cbi8vIGlzIG5vdCBzdHJpY3RseSBuZWVkZWQpLlxudmFyIHRlc3RzID0ge31cblxudGVzdHNbbmFtZV0gPSBhbHBoYW51bWVyaWNhbFxudGVzdHNbZGVjaV0gPSBkZWNpbWFsXG50ZXN0c1toZXhhXSA9IGhleGFkZWNpbWFsXG5cbi8vIFdhcm5pbmcgdHlwZXMuXG52YXIgbmFtZWROb3RUZXJtaW5hdGVkID0gMVxudmFyIG51bWVyaWNOb3RUZXJtaW5hdGVkID0gMlxudmFyIG5hbWVkRW1wdHkgPSAzXG52YXIgbnVtZXJpY0VtcHR5ID0gNFxudmFyIG5hbWVkVW5rbm93biA9IDVcbnZhciBudW1lcmljRGlzYWxsb3dlZCA9IDZcbnZhciBudW1lcmljUHJvaGliaXRlZCA9IDdcblxuLy8gV2FybmluZyBtZXNzYWdlcy5cbnZhciBtZXNzYWdlcyA9IHt9XG5cbm1lc3NhZ2VzW25hbWVkTm90VGVybWluYXRlZF0gPVxuICAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbnVtZXJpY05vdFRlcm1pbmF0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbmFtZWRFbXB0eV0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbnVtZXJpY0VtcHR5XSA9ICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW25hbWVkVW5rbm93bl0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSBrbm93bidcbm1lc3NhZ2VzW251bWVyaWNEaXNhbGxvd2VkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBkaXNhbGxvd2VkJ1xubWVzc2FnZXNbbnVtZXJpY1Byb2hpYml0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIFVuaWNvZGUgcmFuZ2UnXG5cbi8vIFdyYXAgdG8gZW5zdXJlIGNsZWFuIHBhcmFtZXRlcnMgYXJlIGdpdmVuIHRvIGBwYXJzZWAuXG5mdW5jdGlvbiBwYXJzZUVudGl0aWVzKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHt9XG4gIHZhciBvcHRpb25cbiAgdmFyIGtleVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBvcHRpb24gPSBvcHRpb25zW2tleV1cbiAgICBzZXR0aW5nc1trZXldID1cbiAgICAgIG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzW2tleV0gOiBvcHRpb25cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgc2V0dGluZ3MucG9zaXRpb24uc3RhcnQpIHtcbiAgICBzZXR0aW5ncy5pbmRlbnQgPSBzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgW11cbiAgICBzZXR0aW5ncy5wb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0XG4gIH1cblxuICByZXR1cm4gcGFyc2UodmFsdWUsIHNldHRpbmdzKVxufVxuXG4vLyBQYXJzZSBlbnRpdGllcy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpIHtcbiAgdmFyIGFkZGl0aW9uYWwgPSBzZXR0aW5ncy5hZGRpdGlvbmFsXG4gIHZhciBub25UZXJtaW5hdGVkID0gc2V0dGluZ3Mubm9uVGVybWluYXRlZFxuICB2YXIgaGFuZGxlVGV4dCA9IHNldHRpbmdzLnRleHRcbiAgdmFyIGhhbmRsZVJlZmVyZW5jZSA9IHNldHRpbmdzLnJlZmVyZW5jZVxuICB2YXIgaGFuZGxlV2FybmluZyA9IHNldHRpbmdzLndhcm5pbmdcbiAgdmFyIHRleHRDb250ZXh0ID0gc2V0dGluZ3MudGV4dENvbnRleHRcbiAgdmFyIHJlZmVyZW5jZUNvbnRleHQgPSBzZXR0aW5ncy5yZWZlcmVuY2VDb250ZXh0XG4gIHZhciB3YXJuaW5nQ29udGV4dCA9IHNldHRpbmdzLndhcm5pbmdDb250ZXh0XG4gIHZhciBwb3MgPSBzZXR0aW5ncy5wb3NpdGlvblxuICB2YXIgaW5kZW50ID0gc2V0dGluZ3MuaW5kZW50IHx8IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGluZXMgPSAtMVxuICB2YXIgY29sdW1uID0gcG9zLmNvbHVtbiB8fCAxXG4gIHZhciBsaW5lID0gcG9zLmxpbmUgfHwgMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGVudGl0eUNoYXJhY3RlcnNcbiAgdmFyIG5hbWVkRW50aXR5XG4gIHZhciB0ZXJtaW5hdGVkXG4gIHZhciBjaGFyYWN0ZXJzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlZmVyZW5jZVxuICB2YXIgZm9sbG93aW5nXG4gIHZhciB3YXJuaW5nXG4gIHZhciByZWFzb25cbiAgdmFyIG91dHB1dFxuICB2YXIgZW50aXR5XG4gIHZhciBiZWdpblxuICB2YXIgc3RhcnRcbiAgdmFyIHR5cGVcbiAgdmFyIHRlc3RcbiAgdmFyIHByZXZcbiAgdmFyIG5leHRcbiAgdmFyIGRpZmZcbiAgdmFyIGVuZFxuXG4gIGlmICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRpdGlvbmFsID0gYWRkaXRpb25hbC5jaGFyQ29kZUF0KDApXG4gIH1cblxuICAvLyBDYWNoZSB0aGUgY3VycmVudCBwb2ludC5cbiAgcHJldiA9IG5vdygpXG5cbiAgLy8gV3JhcCBgaGFuZGxlV2FybmluZ2AuXG4gIHdhcm5pbmcgPSBoYW5kbGVXYXJuaW5nID8gcGFyc2VFcnJvciA6IG5vb3BcblxuICAvLyBFbnN1cmUgdGhlIGFsZ29yaXRobSB3YWxrcyBvdmVyIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIHRoZSBlbmRcbiAgLy8gKGluY2x1c2l2ZSkuXG4gIGluZGV4LS1cbiAgbGVuZ3RoKytcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgd2FzIGEgbmV3bGluZS5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgY29sdW1uID0gaW5kZW50W2xpbmVzXSB8fCAxXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGFtcGVyc2FuZCkge1xuICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZGVwZW5kcyBvbiB0aGUgaWRlbnRpdHkgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgaWYgKFxuICAgICAgICBmb2xsb3dpbmcgPT09IHRhYiB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxpbmVGZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gZm9ybUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBzcGFjZSB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGFtcGVyc2FuZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxlc3NUaGFuIHx8XG4gICAgICAgIGZvbGxvd2luZyAhPT0gZm9sbG93aW5nIHx8XG4gICAgICAgIChhZGRpdGlvbmFsICYmIGZvbGxvd2luZyA9PT0gYWRkaXRpb25hbClcbiAgICAgICkge1xuICAgICAgICAvLyBOb3QgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICAgICAgICAvLyBObyBjaGFyYWN0ZXJzIGFyZSBjb25zdW1lZCwgYW5kIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGFuIGVycm9yLCBlaXRoZXIuXG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGJlZ2luID0gc3RhcnRcbiAgICAgIGVuZCA9IHN0YXJ0XG5cbiAgICAgIGlmIChmb2xsb3dpbmcgPT09IG51bWJlclNpZ24pIHtcbiAgICAgICAgLy8gTnVtZXJpY2FsIGVudGl0eS5cbiAgICAgICAgZW5kID0gKytiZWdpblxuXG4gICAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZnVydGhlciBkZXBlbmRzIG9uIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gdXBwZXJjYXNlWCB8fCBmb2xsb3dpbmcgPT09IGxvd2VyY2FzZVgpIHtcbiAgICAgICAgICAvLyBBU0NJSSBoZXggZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBoZXhhXG4gICAgICAgICAgZW5kID0gKytiZWdpblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFTQ0lJIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gZGVjaVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOYW1lZCBlbnRpdHkuXG4gICAgICAgIHR5cGUgPSBuYW1lXG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSAnJ1xuICAgICAgZW50aXR5ID0gJydcbiAgICAgIGNoYXJhY3RlcnMgPSAnJ1xuICAgICAgdGVzdCA9IHRlc3RzW3R5cGVdXG4gICAgICBlbmQtLVxuXG4gICAgICB3aGlsZSAoKytlbmQgPCBsZW5ndGgpIHtcbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKCF0ZXN0KGZvbGxvd2luZykpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVycyArPSBmcm9tQ2hhckNvZGUoZm9sbG93aW5nKVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBtYXRjaCBhIGxlZ2FjeSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIHNvLCB3ZSBjYWNoZSB0aGF0IGFzIHRoZSBsYXN0IHZpYWJsZSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBkbyBub3QgbmVlZCB0byB3YWxrIGJhY2t3YXJkcyBsYXRlci5cbiAgICAgICAgaWYgKHR5cGUgPT09IG5hbWUgJiYgb3duLmNhbGwobGVnYWN5LCBjaGFyYWN0ZXJzKSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbGVnYWN5W2NoYXJhY3RlcnNdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGVybWluYXRlZCA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gc2VtaWNvbG9uXG5cbiAgICAgIGlmICh0ZXJtaW5hdGVkKSB7XG4gICAgICAgIGVuZCsrXG5cbiAgICAgICAgbmFtZWRFbnRpdHkgPSB0eXBlID09PSBuYW1lID8gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIDogZmFsc2VcblxuICAgICAgICBpZiAobmFtZWRFbnRpdHkpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IG5hbWVkRW50aXR5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGlmZiA9IDEgKyBlbmQgLSBzdGFydFxuXG4gICAgICBpZiAoIXRlcm1pbmF0ZWQgJiYgIW5vblRlcm1pbmF0ZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgICAgIC8vIEFuIGVtcHR5IChwb3NzaWJsZSkgZW50aXR5IGlzIHZhbGlkLCB1bmxlc3MgaXTigJlzIG51bWVyaWMgKHRodXMgYW5cbiAgICAgICAgLy8gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFuIG9jdG90aG9ycCkuXG4gICAgICAgIGlmICh0eXBlICE9PSBuYW1lKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljRW1wdHksIGRpZmYpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyBBbiBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW55dGhpbmcgdW5rbm93biwgYW5kIG5vdCB0ZXJtaW5hdGVkLCBpc1xuICAgICAgICAvLyBpbnZhbGlkLlxuICAgICAgICBpZiAodGVybWluYXRlZCAmJiAhZW50aXR5KSB7XG4gICAgICAgICAgd2FybmluZyhuYW1lZFVua25vd24sIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmVzIHNvbWV0aGluZyBhZnRlciBhbiBlbnRpdHkgbmFtZSB3aGljaCBpcyBub3Qga25vd24sIGNhcFxuICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAgaWYgKGVudGl0eUNoYXJhY3RlcnMgIT09IGNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGVuZCA9IGJlZ2luICsgZW50aXR5Q2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgIGRpZmYgPSAxICsgZW5kIC0gYmVnaW5cbiAgICAgICAgICAgIHRlcm1pbmF0ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgbm90IHRlcm1pbmF0ZWQsIHdhcm4uXG4gICAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgICByZWFzb24gPSBlbnRpdHlDaGFyYWN0ZXJzID8gbmFtZWROb3RUZXJtaW5hdGVkIDogbmFtZWRFbXB0eVxuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgICAgICAgIGlmIChmb2xsb3dpbmcgPT09IGVxdWFsc1RvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhbnVtZXJpY2FsKGZvbGxvd2luZykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZSA9IGVudGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgLy8gQWxsIG5vbi10ZXJtaW5hdGVkIG51bWVyaWMgZW50aXRpZXMgYXJlIG5vdCByZW5kZXJlZCwgYW5kIHRyaWdnZXIgYVxuICAgICAgICAgIC8vIHdhcm5pbmcuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljTm90VGVybWluYXRlZCwgZGlmZilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGVybWluYXRlZCBhbmQgbnVtYmVyLCBwYXJzZSBhcyBlaXRoZXIgaGV4YWRlY2ltYWwgb3IgZGVjaW1hbC5cbiAgICAgICAgcmVmZXJlbmNlID0gcGFyc2VJbnQoY2hhcmFjdGVycywgYmFzZXNbdHlwZV0pXG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBwcm9oaWJpdGVkLCBhbmQgcmVwbGFjZVxuICAgICAgICAvLyB3aXRoIHJlcGxhY2VtZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKHByb2hpYml0ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY1Byb2hpYml0ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gZnJvbUNoYXJDb2RlKHJlcGxhY2VtZW50Q2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZW5jZSBpbiBpbnZhbGlkKSB7XG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBkaXNhbGxvd2VkLCBhbmQgcmVwbGFjZVxuICAgICAgICAgIC8vIGJ5IGFuIGFsdGVybmF0aXZlLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gaW52YWxpZFtyZWZlcmVuY2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUGFyc2UgdGhlIG51bWJlci5cbiAgICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgICAgICAgaWYgKGRpc2FsbG93ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdHJpbmdpZnkgdGhlIG51bWJlci5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlID4gMHhmZmZmKSB7XG4gICAgICAgICAgICByZWZlcmVuY2UgLT0gMHgxMDAwMFxuICAgICAgICAgICAgb3V0cHV0ICs9IGZyb21DaGFyQ29kZSgocmVmZXJlbmNlID4+PiAoMTAgJiAweDNmZikpIHwgMHhkODAwKVxuICAgICAgICAgICAgcmVmZXJlbmNlID0gMHhkYzAwIHwgKHJlZmVyZW5jZSAmIDB4M2ZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlZmVyZW5jZSA9IG91dHB1dCArIGZyb21DaGFyQ29kZShyZWZlcmVuY2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm91bmQgaXQhXG4gICAgICAvLyBGaXJzdCBlYXQgdGhlIHF1ZXVlZCBjaGFyYWN0ZXJzIGFzIG5vcm1hbCB0ZXh0LCB0aGVuIGVhdCBhbiBlbnRpdHkuXG4gICAgICBpZiAocmVmZXJlbmNlKSB7XG4gICAgICAgIGZsdXNoKClcblxuICAgICAgICBwcmV2ID0gbm93KClcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICAgIGNvbHVtbiArPSBlbmQgLSBzdGFydCArIDFcbiAgICAgICAgcmVzdWx0LnB1c2gocmVmZXJlbmNlKVxuICAgICAgICBuZXh0ID0gbm93KClcbiAgICAgICAgbmV4dC5vZmZzZXQrK1xuXG4gICAgICAgIGlmIChoYW5kbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBoYW5kbGVSZWZlcmVuY2UuY2FsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICB7c3RhcnQ6IHByZXYsIGVuZDogbmV4dH0sXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gbmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgY291bGQgbm90IGZpbmQgYSByZWZlcmVuY2UsIHF1ZXVlIHRoZSBjaGVja2VkIGNoYXJhY3RlcnMgKGFzXG4gICAgICAgIC8vIG5vcm1hbCBjaGFyYWN0ZXJzKSwgYW5kIG1vdmUgdGhlIHBvaW50ZXIgdG8gdGhlaXIgZW5kLlxuICAgICAgICAvLyBUaGlzIGlzIHBvc3NpYmxlIGJlY2F1c2Ugd2UgY2FuIGJlIGNlcnRhaW4gbmVpdGhlciBuZXdsaW5lcyBub3JcbiAgICAgICAgLy8gYW1wZXJzYW5kcyBhcmUgaW5jbHVkZWQuXG4gICAgICAgIGNoYXJhY3RlcnMgPSB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyc1xuICAgICAgICBjb2x1bW4gKz0gY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBhbnl0aGluZyBvdGhlciB0aGFuIGFuIGFtcGVyc2FuZCwgaW5jbHVkaW5nIG5ld2xpbmVzIGFuZCBFT0YuXG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gMTAgLy8gTGluZSBmZWVkXG4gICAgICApIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxpbmVzKytcbiAgICAgICAgY29sdW1uID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsdXNoKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHJlZHVjZWQgbm9kZXMuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICAvLyBHZXQgY3VycmVudCBwb3NpdGlvbi5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICBvZmZzZXQ6IGluZGV4ICsgKHBvcy5vZmZzZXQgfHwgMClcbiAgICB9XG4gIH1cblxuICAvLyDigJxUaHJvd+KAnSBhIHBhcnNlLWVycm9yOiBhIHdhcm5pbmcuXG4gIGZ1bmN0aW9uIHBhcnNlRXJyb3IoY29kZSwgb2Zmc2V0KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbm93KClcblxuICAgIHBvc2l0aW9uLmNvbHVtbiArPSBvZmZzZXRcbiAgICBwb3NpdGlvbi5vZmZzZXQgKz0gb2Zmc2V0XG5cbiAgICBoYW5kbGVXYXJuaW5nLmNhbGwod2FybmluZ0NvbnRleHQsIG1lc3NhZ2VzW2NvZGVdLCBwb3NpdGlvbiwgY29kZSlcbiAgfVxuXG4gIC8vIEZsdXNoIGBxdWV1ZWAgKG5vcm1hbCB0ZXh0KS5cbiAgLy8gTWFjcm8gaW52b2tlZCBiZWZvcmUgZWFjaCBlbnRpdHkgYW5kIGF0IHRoZSBlbmQgb2YgYHZhbHVlYC5cbiAgLy8gRG9lcyBub3RoaW5nIHdoZW4gYHF1ZXVlYCBpcyBlbXB0eS5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICByZXN1bHQucHVzaChxdWV1ZSlcblxuICAgICAgaWYgKGhhbmRsZVRleHQpIHtcbiAgICAgICAgaGFuZGxlVGV4dC5jYWxsKHRleHRDb250ZXh0LCBxdWV1ZSwge3N0YXJ0OiBwcmV2LCBlbmQ6IG5vdygpfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSB1bmljb2RlIHJhbmdlLlxuZnVuY3Rpb24gcHJvaGliaXRlZChjb2RlKSB7XG4gIHJldHVybiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHx8IGNvZGUgPiAweDEwZmZmZlxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBkaXNhbGxvd2VkLlxuZnVuY3Rpb24gZGlzYWxsb3dlZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMHgwMDAxICYmIGNvZGUgPD0gMHgwMDA4KSB8fFxuICAgIGNvZGUgPT09IDB4MDAwYiB8fFxuICAgIChjb2RlID49IDB4MDAwZCAmJiBjb2RlIDw9IDB4MDAxZikgfHxcbiAgICAoY29kZSA+PSAweDAwN2YgJiYgY29kZSA8PSAweDAwOWYpIHx8XG4gICAgKGNvZGUgPj0gMHhmZGQwICYmIGNvZGUgPD0gMHhmZGVmKSB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZmIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmVcbiAgKVxufVxuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5oZXJpdCA9IHJlcXVpcmUoJ3VuaGVyaXQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIENvbXBpbGVyID0gcmVxdWlyZSgnLi9saWIvY29tcGlsZXIuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LkNvbXBpbGVyID0gQ29tcGlsZXJcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9wdGlvbnMpIHtcbiAgdmFyIExvY2FsID0gdW5oZXJpdChDb21waWxlcilcbiAgTG9jYWwucHJvdG90eXBlLm9wdGlvbnMgPSB4dGVuZChcbiAgICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyxcbiAgICB0aGlzLmRhdGEoJ3NldHRpbmdzJyksXG4gICAgb3B0aW9uc1xuICApXG4gIHRoaXMuQ29tcGlsZXIgPSBMb2NhbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciB0b2dnbGUgPSByZXF1aXJlKCdzdGF0ZS10b2dnbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBpbGVyXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBjb21waWxlci5cbmZ1bmN0aW9uIENvbXBpbGVyKHRyZWUsIGZpbGUpIHtcbiAgdGhpcy5pbkxpbmsgPSBmYWxzZVxuICB0aGlzLmluVGFibGUgPSBmYWxzZVxuICB0aGlzLnRyZWUgPSB0cmVlXG4gIHRoaXMuZmlsZSA9IGZpbGVcbiAgdGhpcy5vcHRpb25zID0geHRlbmQodGhpcy5vcHRpb25zKVxuICB0aGlzLnNldE9wdGlvbnMoe30pXG59XG5cbnZhciBwcm90byA9IENvbXBpbGVyLnByb3RvdHlwZVxuXG4vLyBFbnRlciBhbmQgZXhpdCBoZWxwZXJzLiAqL1xucHJvdG8uZW50ZXJMaW5rID0gdG9nZ2xlKCdpbkxpbmsnLCBmYWxzZSlcbnByb3RvLmVudGVyVGFibGUgPSB0b2dnbGUoJ2luVGFibGUnLCBmYWxzZSlcbnByb3RvLmVudGVyTGlua1JlZmVyZW5jZSA9IHJlcXVpcmUoJy4vdXRpbC9lbnRlci1saW5rLXJlZmVyZW5jZScpXG5cbi8vIENvbmZpZ3VyYXRpb24uXG5wcm90by5vcHRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG5wcm90by5zZXRPcHRpb25zID0gcmVxdWlyZSgnLi9zZXQtb3B0aW9ucycpXG5cbnByb3RvLmNvbXBpbGUgPSByZXF1aXJlKCcuL21hY3JvL2NvbXBpbGUnKVxucHJvdG8udmlzaXQgPSByZXF1aXJlKCcuL21hY3JvL29uZScpXG5wcm90by5hbGwgPSByZXF1aXJlKCcuL21hY3JvL2FsbCcpXG5wcm90by5ibG9jayA9IHJlcXVpcmUoJy4vbWFjcm8vYmxvY2snKVxucHJvdG8udmlzaXRPcmRlcmVkSXRlbXMgPSByZXF1aXJlKCcuL21hY3JvL29yZGVyZWQtaXRlbXMnKVxucHJvdG8udmlzaXRVbm9yZGVyZWRJdGVtcyA9IHJlcXVpcmUoJy4vbWFjcm8vdW5vcmRlcmVkLWl0ZW1zJylcblxuLy8gRXhwb3NlIHZpc2l0b3JzLlxucHJvdG8udmlzaXRvcnMgPSB7XG4gIHJvb3Q6IHJlcXVpcmUoJy4vdmlzaXRvcnMvcm9vdCcpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3Zpc2l0b3JzL3RleHQnKSxcbiAgaGVhZGluZzogcmVxdWlyZSgnLi92aXNpdG9ycy9oZWFkaW5nJyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi92aXNpdG9ycy9wYXJhZ3JhcGgnKSxcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi92aXNpdG9ycy9ibG9ja3F1b3RlJyksXG4gIGxpc3Q6IHJlcXVpcmUoJy4vdmlzaXRvcnMvbGlzdCcpLFxuICBsaXN0SXRlbTogcmVxdWlyZSgnLi92aXNpdG9ycy9saXN0LWl0ZW0nKSxcbiAgaW5saW5lQ29kZTogcmVxdWlyZSgnLi92aXNpdG9ycy9pbmxpbmUtY29kZScpLFxuICBjb2RlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2NvZGUnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi92aXNpdG9ycy9odG1sJyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGhlbWF0aWMtYnJlYWsnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3N0cm9uZycpLFxuICBlbXBoYXNpczogcmVxdWlyZSgnLi92aXNpdG9ycy9lbXBoYXNpcycpLFxuICBicmVhazogcmVxdWlyZSgnLi92aXNpdG9ycy9icmVhaycpLFxuICBkZWxldGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvZGVsZXRlJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vdmlzaXRvcnMvbGluaycpLFxuICBsaW5rUmVmZXJlbmNlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2xpbmstcmVmZXJlbmNlJyksXG4gIGltYWdlUmVmZXJlbmNlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2ltYWdlLXJlZmVyZW5jZScpLFxuICBkZWZpbml0aW9uOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2RlZmluaXRpb24nKSxcbiAgaW1hZ2U6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaW1hZ2UnKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGFibGUnKSxcbiAgdGFibGVDZWxsOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3RhYmxlLWNlbGwnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZm06IHRydWUsXG4gIGNvbW1vbm1hcms6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIGVudGl0aWVzOiAnZmFsc2UnLFxuICBzZXRleHQ6IGZhbHNlLFxuICBjbG9zZUF0eDogZmFsc2UsXG4gIHRhYmxlQ2VsbFBhZGRpbmc6IHRydWUsXG4gIHRhYmxlUGlwZUFsaWduOiB0cnVlLFxuICBzdHJpbmdMZW5ndGg6IHN0cmluZ0xlbmd0aCxcbiAgaW5jcmVtZW50TGlzdE1hcmtlcjogdHJ1ZSxcbiAgZmVuY2VzOiBmYWxzZSxcbiAgZmVuY2U6ICdgJyxcbiAgYnVsbGV0OiAnLScsXG4gIGxpc3RJdGVtSW5kZW50OiAndGFiJyxcbiAgcnVsZTogJyonLFxuICBydWxlU3BhY2VzOiB0cnVlLFxuICBydWxlUmVwZXRpdGlvbjogMyxcbiAgc3Ryb25nOiAnKicsXG4gIGVtcGhhc2lzOiAnXydcbn1cblxuZnVuY3Rpb24gc3RyaW5nTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJ2lzLWFscGhhbnVtZXJpYycpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBlc2NhcGVzID0gcmVxdWlyZSgnbWFya2Rvd24tZXNjYXBlcycpXG52YXIgcHJlZml4ID0gcmVxdWlyZSgnLi91dGlsL2VudGl0eS1wcmVmaXgtbGVuZ3RoJylcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIG51bWJlclNpZ24gPSAnIydcbnZhciBhbXBlcnNhbmQgPSAnJidcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciBwbHVzU2lnbiA9ICcrJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBkb3QgPSAnLidcbnZhciBjb2xvbiA9ICc6J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xudmFyIHZlcnRpY2FsQmFyID0gJ3wnXG52YXIgdGlsZGUgPSAnfidcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxudmFyIGVudGl0aWVzID0ge1xuICAnPCc6ICcmbHQ7JyxcbiAgJzonOiAnJiN4M0E7JyxcbiAgJyYnOiAnJmFtcDsnLFxuICAnfCc6ICcmI3g3QzsnLFxuICAnfic6ICcmI3g3RTsnXG59XG5cbnZhciBzaG9ydGN1dCA9ICdzaG9ydGN1dCdcbnZhciBtYWlsdG8gPSAnbWFpbHRvJ1xudmFyIGh0dHBzID0gJ2h0dHBzJ1xudmFyIGh0dHAgPSAnaHR0cCdcblxudmFyIGJsYW5rRXhwcmVzc2lvbiA9IC9cXG5cXHMqJC9cblxuLy8gRmFjdG9yeSB0byBlc2NhcGUgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gZXNjYXBlXG5cbiAgLy8gRXNjYXBlIHB1bmN0dWF0aW9uIGNoYXJhY3RlcnMgaW4gYSBub2Rl4oCZcyB2YWx1ZS5cbiAgZnVuY3Rpb24gZXNjYXBlKHZhbHVlLCBub2RlLCBwYXJlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgZ2ZtID0gb3B0aW9ucy5nZm1cbiAgICB2YXIgY29tbW9ubWFyayA9IG9wdGlvbnMuY29tbW9ubWFya1xuICAgIHZhciBwZWRhbnRpYyA9IG9wdGlvbnMucGVkYW50aWNcbiAgICB2YXIgbWFya2VycyA9IGNvbW1vbm1hcmsgPyBbZG90LCByaWdodFBhcmVudGhlc2lzXSA6IFtkb3RdXG4gICAgdmFyIHNpYmxpbmdzID0gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlblxuICAgIHZhciBpbmRleCA9IHNpYmxpbmdzICYmIHNpYmxpbmdzLmluZGV4T2Yobm9kZSlcbiAgICB2YXIgcHJldmlvdXMgPSBzaWJsaW5ncyAmJiBzaWJsaW5nc1tpbmRleCAtIDFdXG4gICAgdmFyIG5leHQgPSBzaWJsaW5ncyAmJiBzaWJsaW5nc1tpbmRleCArIDFdXG4gICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICAgIHZhciBlc2NhcGFibGUgPSBlc2NhcGVzKG9wdGlvbnMpXG4gICAgdmFyIHBvc2l0aW9uID0gLTFcbiAgICB2YXIgcXVldWUgPSBbXVxuICAgIHZhciBlc2NhcGVkID0gcXVldWVcbiAgICB2YXIgYWZ0ZXJOZXdMaW5lXG4gICAgdmFyIGNoYXJhY3RlclxuICAgIHZhciB3b3JkQ2hhckJlZm9yZVxuICAgIHZhciB3b3JkQ2hhckFmdGVyXG4gICAgdmFyIG9mZnNldFxuICAgIHZhciByZXBsYWNlXG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIGFmdGVyTmV3TGluZSA9IHRleHQocHJldmlvdXMpICYmIGJsYW5rRXhwcmVzc2lvbi50ZXN0KHByZXZpb3VzLnZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlck5ld0xpbmUgPVxuICAgICAgICAhcGFyZW50IHx8IHBhcmVudC50eXBlID09PSAncm9vdCcgfHwgcGFyZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwb3NpdGlvbilcbiAgICAgIHJlcGxhY2UgPSBmYWxzZVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuICAgICAgICBhZnRlck5ld0xpbmUgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGdyYXZlQWNjZW50IHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGxlc3NUaGFuIHx8XG4gICAgICAgIChjaGFyYWN0ZXIgPT09IGFtcGVyc2FuZCAmJiBwcmVmaXgodmFsdWUuc2xpY2UocG9zaXRpb24pKSA+IDApIHx8XG4gICAgICAgIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCAmJiBzZWxmLmluTGluaykgfHxcbiAgICAgICAgKGdmbSAmJiBjaGFyYWN0ZXIgPT09IHRpbGRlICYmIHZhbHVlLmNoYXJBdChwb3NpdGlvbiArIDEpID09PSB0aWxkZSkgfHxcbiAgICAgICAgKGdmbSAmJlxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gdmVydGljYWxCYXIgJiZcbiAgICAgICAgICAoc2VsZi5pblRhYmxlIHx8IGFsaWdubWVudCh2YWx1ZSwgcG9zaXRpb24pKSkgfHxcbiAgICAgICAgKGNoYXJhY3RlciA9PT0gdW5kZXJzY29yZSAmJlxuICAgICAgICAgIC8vIERlbGVnYXRlIGxlYWRpbmcvdHJhaWxpbmcgdW5kZXJzY29yZXMgdG8gdGhlIG11bHRpbm9kZSB2ZXJzaW9uIGJlbG93LlxuICAgICAgICAgIHBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgIHBvc2l0aW9uIDwgbGVuZ3RoIC0gMSAmJlxuICAgICAgICAgIChwZWRhbnRpYyB8fFxuICAgICAgICAgICAgIWFscGhhbnVtZXJpYyh2YWx1ZS5jaGFyQXQocG9zaXRpb24gLSAxKSkgfHxcbiAgICAgICAgICAgICFhbHBoYW51bWVyaWModmFsdWUuY2hhckF0KHBvc2l0aW9uICsgMSkpKSkgfHxcbiAgICAgICAgKGdmbSAmJiAhc2VsZi5pbkxpbmsgJiYgY2hhcmFjdGVyID09PSBjb2xvbiAmJiBwcm90b2NvbChxdWV1ZS5qb2luKCcnKSkpXG4gICAgICApIHtcbiAgICAgICAgcmVwbGFjZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoYWZ0ZXJOZXdMaW5lKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBudW1iZXJTaWduIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gZGFzaCB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gcGx1c1NpZ25cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVwbGFjZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBvZmZzZXQgPSBwb3NpdGlvbiArIDFcblxuICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghZGVjaW1hbCh2YWx1ZS5jaGFyQXQob2Zmc2V0KSkpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0KytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWFya2Vycy5pbmRleE9mKHZhbHVlLmNoYXJBdChvZmZzZXQpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5leHQgPSB2YWx1ZS5jaGFyQXQob2Zmc2V0ICsgMSlcblxuICAgICAgICAgICAgaWYgKCFuZXh0IHx8IG5leHQgPT09IHNwYWNlIHx8IG5leHQgPT09IHRhYiB8fCBuZXh0ID09PSBsaW5lRmVlZCkge1xuICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHBvc2l0aW9uLCBvZmZzZXQpKVxuICAgICAgICAgICAgICBwb3NpdGlvbiA9IG9mZnNldFxuICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pXG4gICAgICAgICAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZnRlck5ld0xpbmUgJiYgIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICBhZnRlck5ld0xpbmUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBxdWV1ZS5wdXNoKHJlcGxhY2UgPyBvbmUoY2hhcmFjdGVyKSA6IGNoYXJhY3RlcilcbiAgICB9XG5cbiAgICAvLyBNdWx0aS1ub2RlIHZlcnNpb25zLlxuICAgIGlmIChzaWJsaW5ncyAmJiB0ZXh0KG5vZGUpKSB7XG4gICAgICAvLyBDaGVjayBmb3IgYW4gb3BlbmluZyBwYXJlbnRoZXNlcyBhZnRlciBhIGxpbmstcmVmZXJlbmNlICh3aGljaCBjYW4gYmVcbiAgICAgIC8vIGpvaW5lZCBieSB3aGl0ZS1zcGFjZSkuXG4gICAgICBpZiAocHJldmlvdXMgJiYgcHJldmlvdXMucmVmZXJlbmNlVHlwZSA9PT0gc2hvcnRjdXQpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMVxuICAgICAgICBsZW5ndGggPSBlc2NhcGVkLmxlbmd0aFxuXG4gICAgICAgIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gZXNjYXBlZFtwb3NpdGlvbl1cblxuICAgICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcyB8fCBjaGFyYWN0ZXIgPT09IGNvbG9uKSB7XG4gICAgICAgICAgICBlc2NhcGVkW3Bvc2l0aW9uXSA9IG9uZShjaGFyYWN0ZXIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IG5vZGUgaXMgYWxsIHNwYWNlcyAvIHRhYnMsIHByZWNlZGVkIGJ5IGEgc2hvcnRjdXQsXG4gICAgICAgIC8vIGFuZCBmb2xsb3dlZCBieSBhIHRleHQgc3RhcnRpbmcgd2l0aCBgKGAsIGVzY2FwZSBpdC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRleHQobmV4dCkgJiZcbiAgICAgICAgICBwb3NpdGlvbiA9PT0gbGVuZ3RoICYmXG4gICAgICAgICAgbmV4dC52YWx1ZS5jaGFyQXQoMCkgPT09IGxlZnRQYXJlbnRoZXNpc1xuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnB1c2goYmFja3NsYXNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBub24tYXV0by1saW5rcyBhcmUgbm90IHNlZW4gYXMgbGlua3MuICBUaGlzIHBhdHRlcm4gbmVlZHMgdG9cbiAgICAgIC8vIGNoZWNrIHRoZSBwcmVjZWRpbmcgbm9kZXMgdG9vLlxuICAgICAgaWYgKFxuICAgICAgICBnZm0gJiZcbiAgICAgICAgIXNlbGYuaW5MaW5rICYmXG4gICAgICAgIHRleHQocHJldmlvdXMpICYmXG4gICAgICAgIHZhbHVlLmNoYXJBdCgwKSA9PT0gY29sb24gJiZcbiAgICAgICAgcHJvdG9jb2wocHJldmlvdXMudmFsdWUuc2xpY2UoLTYpKVxuICAgICAgKSB7XG4gICAgICAgIGVzY2FwZWRbMF0gPSBvbmUoY29sb24pXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSBhbXBlcnNhbmQgaWYgaXQgd291bGQgb3RoZXJ3aXNlIHN0YXJ0IGFuIGVudGl0eS5cbiAgICAgIGlmIChcbiAgICAgICAgdGV4dChuZXh0KSAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMSkgPT09IGFtcGVyc2FuZCAmJlxuICAgICAgICBwcmVmaXgoYW1wZXJzYW5kICsgbmV4dC52YWx1ZSkgIT09IDBcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkW2VzY2FwZWQubGVuZ3RoIC0gMV0gPSBvbmUoYW1wZXJzYW5kKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgZXhjbGFtYXRpb24gbWFya3MgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgbGlua3MuXG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgJiZcbiAgICAgICAgbmV4dC50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSBleGNsYW1hdGlvbk1hcmtcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkW2VzY2FwZWQubGVuZ3RoIC0gMV0gPSBvbmUoZXhjbGFtYXRpb25NYXJrKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgZG91YmxlIHRpbGRlcyBpbiBHRk0uXG4gICAgICBpZiAoXG4gICAgICAgIGdmbSAmJlxuICAgICAgICB0ZXh0KG5leHQpICYmXG4gICAgICAgIHZhbHVlLmNoYXJBdChsZW5ndGggLSAxKSA9PT0gdGlsZGUgJiZcbiAgICAgICAgbmV4dC52YWx1ZS5jaGFyQXQoMCkgPT09IHRpbGRlXG4gICAgICApIHtcbiAgICAgICAgZXNjYXBlZC5zcGxpY2UoLTEsIDAsIGJhY2tzbGFzaClcbiAgICAgIH1cblxuICAgICAgLy8gRXNjYXBlIHVuZGVyc2NvcmVzLCBidXQgbm90IG1pZC13b3JkICh1bmxlc3MgaW4gcGVkYW50aWMgbW9kZSkuXG4gICAgICB3b3JkQ2hhckJlZm9yZSA9IHRleHQocHJldmlvdXMpICYmIGFscGhhbnVtZXJpYyhwcmV2aW91cy52YWx1ZS5zbGljZSgtMSkpXG4gICAgICB3b3JkQ2hhckFmdGVyID0gdGV4dChuZXh0KSAmJiBhbHBoYW51bWVyaWMobmV4dC52YWx1ZS5jaGFyQXQoMCkpXG5cbiAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8ICF3b3JkQ2hhckJlZm9yZSB8fCAhd29yZENoYXJBZnRlcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXNjYXBlZC51bnNoaWZ0KGJhY2tzbGFzaClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLmNoYXJBdCgwKSA9PT0gdW5kZXJzY29yZSAmJlxuICAgICAgICAgIChwZWRhbnRpYyB8fCAhd29yZENoYXJCZWZvcmUgfHwgIWFscGhhbnVtZXJpYyh2YWx1ZS5jaGFyQXQoMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnVuc2hpZnQoYmFja3NsYXNoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLmNoYXJBdChsZW5ndGggLSAxKSA9PT0gdW5kZXJzY29yZSAmJlxuICAgICAgICAgIChwZWRhbnRpYyB8fFxuICAgICAgICAgICAgIXdvcmRDaGFyQWZ0ZXIgfHxcbiAgICAgICAgICAgICFhbHBoYW51bWVyaWModmFsdWUuY2hhckF0KGxlbmd0aCAtIDIpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXNjYXBlZC5zcGxpY2UoLTEsIDAsIGJhY2tzbGFzaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGVkLmpvaW4oJycpXG5cbiAgICBmdW5jdGlvbiBvbmUoY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gZXNjYXBhYmxlLmluZGV4T2YoY2hhcmFjdGVyKSA9PT0gLTFcbiAgICAgICAgPyBlbnRpdGllc1tjaGFyYWN0ZXJdXG4gICAgICAgIDogYmFja3NsYXNoICsgY2hhcmFjdGVyXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBpbmRleGAgaW4gYHZhbHVlYCBpcyBpbnNpZGUgYW4gYWxpZ25tZW50IHJvdy5cbmZ1bmN0aW9uIGFsaWdubWVudCh2YWx1ZSwgaW5kZXgpIHtcbiAgdmFyIHN0YXJ0ID0gdmFsdWUubGFzdEluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICB2YXIgZW5kID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gIHZhciBjaGFyXG5cbiAgZW5kID0gZW5kID09PSAtMSA/IHZhbHVlLmxlbmd0aCA6IGVuZFxuXG4gIHdoaWxlICgrK3N0YXJ0IDwgZW5kKSB7XG4gICAgY2hhciA9IHZhbHVlLmNoYXJBdChzdGFydClcblxuICAgIGlmIChcbiAgICAgIGNoYXIgIT09IGNvbG9uICYmXG4gICAgICBjaGFyICE9PSBkYXNoICYmXG4gICAgICBjaGFyICE9PSBzcGFjZSAmJlxuICAgICAgY2hhciAhPT0gdmVydGljYWxCYXJcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8vIENoZWNrIGlmIGBub2RlYCBpcyBhIHRleHQgbm9kZS5cbmZ1bmN0aW9uIHRleHQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09ICd0ZXh0J1xufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGVuZHMgaW4gYSBwcm90b2NvbC5cbmZ1bmN0aW9uIHByb3RvY29sKHZhbHVlKSB7XG4gIHZhciB0YWlsID0gdmFsdWUuc2xpY2UoLTYpLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIHRhaWwgPT09IG1haWx0byB8fCB0YWlsLnNsaWNlKC01KSA9PT0gaHR0cHMgfHwgdGFpbC5zbGljZSgtNCkgPT09IGh0dHBcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbFxuXG4vLyBWaXNpdCBhbGwgY2hpbGRyZW4gb2YgYHBhcmVudGAuXG5mdW5jdGlvbiBhbGwocGFyZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRzW2luZGV4XSA9IHNlbGYudmlzaXQoY2hpbGRyZW5baW5kZXhdLCBwYXJlbnQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcblxudmFyIGJsYW5rID0gbGluZUZlZWQgKyBsaW5lRmVlZFxudmFyIHRyaXBsZSA9IGJsYW5rICsgbGluZUZlZWRcbnZhciBjb21tZW50ID0gYmxhbmsgKyAnPCEtLS0tPicgKyBibGFua1xuXG4vLyBTdHJpbmdpZnkgYSBibG9jayBub2RlIHdpdGggYmxvY2sgY2hpbGRyZW4gKGUuZy4sIGByb290YCBvciBgYmxvY2txdW90ZWApLlxuLy8gS25vd3MgYWJvdXQgY29kZSBmb2xsb3dpbmcgYSBsaXN0LCBvciBhZGphY2VudCBsaXN0cyB3aXRoIHNpbWlsYXIgYnVsbGV0cyxcbi8vIGFuZCBwbGFjZXMgYW4gZXh0cmEgbGluZSBmZWVkIGJldHdlZW4gdGhlbS5cbmZ1bmN0aW9uIGJsb2NrKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvcHRpb25zID0gc2VsZi5vcHRpb25zXG4gIHZhciBmZW5jZXMgPSBvcHRpb25zLmZlbmNlc1xuICB2YXIgZ2FwID0gb3B0aW9ucy5jb21tb25tYXJrID8gY29tbWVudCA6IHRyaXBsZVxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBwcmV2aW91c1xuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXZpb3VzID0gY2hpbGRcbiAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAvLyBBIGxpc3QgcHJlY2VkaW5nIGFub3RoZXIgbGlzdCB0aGF0IGFyZSBlcXVhbGx5IG9yZGVyZWQsIG9yIGFcbiAgICAgIC8vIGxpc3QgcHJlY2VkaW5nIGFuIGluZGVudGVkIGNvZGUgYmxvY2ssIG5lZWQgYSBnYXAgYmV0d2VlbiB0aGVtLFxuICAgICAgLy8gc28gYXMgbm90IHRvIHNlZSB0aGVtIGFzIG9uZSBsaXN0LCBvciBjb250ZW50IG9mIHRoZSBsaXN0LFxuICAgICAgLy8gcmVzcGVjdGl2ZWx5LlxuICAgICAgLy9cbiAgICAgIC8vIEluIGNvbW1vbm1hcmssIG9ubHkgc29tZXRoaW5nIHRoYXQgYnJlYWtzIGJvdGggdXAgY2FuIGRvIHRoYXQsXG4gICAgICAvLyBzbyB3ZSBvcHQgZm9yIGFuIGVtcHR5LCBpbnZpc2libGUgY29tbWVudC4gIEluIG90aGVyIGZsYXZvdXJzLFxuICAgICAgLy8gdHdvIGJsYW5rIGxpbmVzIGFyZSBmaW5lLlxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cy50eXBlID09PSAnbGlzdCcgJiZcbiAgICAgICAgKChjaGlsZC50eXBlID09PSAnbGlzdCcgJiYgcHJldmlvdXMub3JkZXJlZCA9PT0gY2hpbGQub3JkZXJlZCkgfHxcbiAgICAgICAgICAoY2hpbGQudHlwZSA9PT0gJ2NvZGUnICYmICFjaGlsZC5sYW5nICYmICFmZW5jZXMpKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGdhcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGJsYW5rKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlcy5wdXNoKHNlbGYudmlzaXQoY2hpbGQsIG5vZGUpKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb21wYWN0ID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1jb21wYWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjb21waWxlXG5cbi8vIFN0cmluZ2lmeSB0aGUgZ2l2ZW4gdHJlZS5cbmZ1bmN0aW9uIGNvbXBpbGUoKSB7XG4gIHJldHVybiB0aGlzLnZpc2l0KGNvbXBhY3QodGhpcy50cmVlLCB0aGlzLm9wdGlvbnMuY29tbW9ubWFyaykpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbmVcblxuZnVuY3Rpb24gb25lKG5vZGUsIHBhcmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHZpc2l0b3JzID0gc2VsZi52aXNpdG9yc1xuXG4gIC8vIEZhaWwgb24gdW5rbm93biBub2Rlcy5cbiAgaWYgKHR5cGVvZiB2aXNpdG9yc1tub2RlLnR5cGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgICdNaXNzaW5nIGNvbXBpbGVyIGZvciBub2RlIG9mIHR5cGUgYCcgKyBub2RlLnR5cGUgKyAnYDogYCcgKyBub2RlICsgJ2AnXG4gICAgICApLFxuICAgICAgbm9kZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB2aXNpdG9yc1tub2RlLnR5cGVdLmNhbGwoc2VsZiwgbm9kZSwgcGFyZW50KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb3JkZXJlZEl0ZW1zXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZG90ID0gJy4nXG5cbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcblxuLy8gVmlzaXQgb3JkZXJlZCBsaXN0IGl0ZW1zLlxuLy9cbi8vIFN0YXJ0cyB0aGUgbGlzdCB3aXRoXG4vLyBgbm9kZS5zdGFydGAgYW5kIGluY3JlbWVudHMgZWFjaCBmb2xsb3dpbmcgbGlzdCBpdGVtXG4vLyBidWxsZXQgYnkgb25lOlxuLy9cbi8vICAgICAyLiBmb29cbi8vICAgICAzLiBiYXJcbi8vXG4vLyBJbiBgaW5jcmVtZW50TGlzdE1hcmtlcjogZmFsc2VgIG1vZGUsIGRvZXMgbm90IGluY3JlbWVudFxuLy8gZWFjaCBtYXJrZXIgYW5kIHN0YXlzIG9uIGBub2RlLnN0YXJ0YDpcbi8vXG4vLyAgICAgMS4gZm9vXG4vLyAgICAgMS4gYmFyXG5mdW5jdGlvbiBvcmRlcmVkSXRlbXMobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGZuID0gc2VsZi52aXNpdG9ycy5saXN0SXRlbVxuICB2YXIgaW5jcmVtZW50ID0gc2VsZi5vcHRpb25zLmluY3JlbWVudExpc3RNYXJrZXJcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBzdGFydCA9IG5vZGUuc3RhcnRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBidWxsZXRcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAxIDogc3RhcnRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGJ1bGxldCA9IChpbmNyZW1lbnQgPyBzdGFydCArIGluZGV4IDogc3RhcnQpICsgZG90XG4gICAgdmFsdWVzW2luZGV4XSA9IGZuLmNhbGwoc2VsZiwgY2hpbGRyZW5baW5kZXhdLCBub2RlLCBpbmRleCwgYnVsbGV0KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKG5vZGUuc3ByZWFkID8gYmxhbmsgOiBsaW5lRmVlZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVub3JkZXJlZEl0ZW1zXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG5cbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcblxuLy8gVmlzaXQgdW5vcmRlcmVkIGxpc3QgaXRlbXMuICBVc2VzIGBvcHRpb25zLmJ1bGxldGAgYXMgZWFjaCBpdGVt4oCZcyBidWxsZXQuXG5mdW5jdGlvbiB1bm9yZGVyZWRJdGVtcyhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYnVsbGV0ID0gc2VsZi5vcHRpb25zLmJ1bGxldFxuICB2YXIgZm4gPSBzZWxmLnZpc2l0b3JzLmxpc3RJdGVtXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdmFsdWVzID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlc1tpbmRleF0gPSBmbi5jYWxsKHNlbGYsIGNoaWxkcmVuW2luZGV4XSwgbm9kZSwgaW5kZXgsIGJ1bGxldClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihub2RlLnNwcmVhZCA/IGJsYW5rIDogbGluZUZlZWQpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVuY29kZSA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcbnZhciBlc2NhcGVGYWN0b3J5ID0gcmVxdWlyZSgnLi9lc2NhcGUnKVxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi91dGlsL2lkZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRPcHRpb25zXG5cbi8vIE1hcCBvZiBhcHBsaWNhYmxlIGVudW1zLlxudmFyIG1hcHMgPSB7XG4gIGVudGl0aWVzOiB7dHJ1ZTogdHJ1ZSwgZmFsc2U6IHRydWUsIG51bWJlcnM6IHRydWUsIGVzY2FwZTogdHJ1ZX0sXG4gIGJ1bGxldDogeycqJzogdHJ1ZSwgJy0nOiB0cnVlLCAnKyc6IHRydWV9LFxuICBydWxlOiB7Jy0nOiB0cnVlLCBfOiB0cnVlLCAnKic6IHRydWV9LFxuICBsaXN0SXRlbUluZGVudDoge3RhYjogdHJ1ZSwgbWl4ZWQ6IHRydWUsIDE6IHRydWV9LFxuICBlbXBoYXNpczoge186IHRydWUsICcqJzogdHJ1ZX0sXG4gIHN0cm9uZzoge186IHRydWUsICcqJzogdHJ1ZX0sXG4gIGZlbmNlOiB7J2AnOiB0cnVlLCAnfic6IHRydWV9XG59XG5cbi8vIEV4cG9zZSBgdmFsaWRhdGVgLlxudmFyIHZhbGlkYXRlID0ge1xuICBib29sZWFuOiB2YWxpZGF0ZUJvb2xlYW4sXG4gIHN0cmluZzogdmFsaWRhdGVTdHJpbmcsXG4gIG51bWJlcjogdmFsaWRhdGVOdW1iZXIsXG4gIGZ1bmN0aW9uOiB2YWxpZGF0ZUZ1bmN0aW9uXG59XG5cbi8vIFNldCBvcHRpb25zLiAgRG9lcyBub3Qgb3ZlcndyaXRlIHByZXZpb3VzbHkgc2V0IG9wdGlvbnMuXG5mdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjdXJyZW50ID0gc2VsZi5vcHRpb25zXG4gIHZhciBydWxlUmVwZXRpdGlvblxuICB2YXIga2V5XG5cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBgJyArIG9wdGlvbnMgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9uc2AnKVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICB2YWxpZGF0ZVt0eXBlb2YgZGVmYXVsdHNba2V5XV0ob3B0aW9ucywga2V5LCBjdXJyZW50W2tleV0sIG1hcHNba2V5XSlcbiAgfVxuXG4gIHJ1bGVSZXBldGl0aW9uID0gb3B0aW9ucy5ydWxlUmVwZXRpdGlvblxuXG4gIGlmIChydWxlUmVwZXRpdGlvbiAmJiBydWxlUmVwZXRpdGlvbiA8IDMpIHtcbiAgICByYWlzZShydWxlUmVwZXRpdGlvbiwgJ29wdGlvbnMucnVsZVJlcGV0aXRpb24nKVxuICB9XG5cbiAgc2VsZi5lbmNvZGUgPSBlbmNvZGVGYWN0b3J5KFN0cmluZyhvcHRpb25zLmVudGl0aWVzKSlcbiAgc2VsZi5lc2NhcGUgPSBlc2NhcGVGYWN0b3J5KG9wdGlvbnMpXG5cbiAgc2VsZi5vcHRpb25zID0gb3B0aW9uc1xuXG4gIHJldHVybiBzZWxmXG59XG5cbi8vIFZhbGlkYXRlIGEgdmFsdWUgdG8gYmUgYm9vbGVhbi4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uIHdpdGhcbi8vIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBhIGJvb2xlYW4uXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY29udGV4dCwgbmFtZSwgZGVmKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRbbmFtZV1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHZhbHVlID0gZGVmXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBib29sZWFuLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb24gd2l0aFxuLy8gYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGEgYm9vbGVhbi5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNvbnRleHQsIG5hbWUsIGRlZikge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W25hbWVdXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IGRlZlxuICB9XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgIHJhaXNlKHZhbHVlLCAnb3B0aW9ucy4nICsgbmFtZSlcbiAgfVxuXG4gIGNvbnRleHRbbmFtZV0gPSB2YWx1ZVxufVxuXG4vLyBWYWxpZGF0ZSBhIHZhbHVlIHRvIGJlIGluIGBtYXBgLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb25cbi8vIHdpdGggYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGluIGBtYXBgLlxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY29udGV4dCwgbmFtZSwgZGVmLCBtYXApIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gIGlmICghKHZhbHVlIGluIG1hcCkpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBmdW5jdGlvbi4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uXG4vLyB3aXRoIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gdmFsaWRhdGVGdW5jdGlvbihjb250ZXh0LCBuYW1lLCBkZWYpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gRmFjdG9yeSB0byBlbmNvZGUgSFRNTCBlbnRpdGllcy4gIENyZWF0ZXMgYSBuby1vcGVyYXRpb24gZnVuY3Rpb24gd2hlblxuLy8gYHR5cGVgIGlzIGAnZmFsc2UnYCwgYSBmdW5jdGlvbiB3aGljaCBlbmNvZGVzIHVzaW5nIG5hbWVkIHJlZmVyZW5jZXMgd2hlblxuLy8gYHR5cGVgIGlzIGAndHJ1ZSdgLCBhbmQgYSBmdW5jdGlvbiB3aGljaCBlbmNvZGVzIHVzaW5nIG51bWJlcmVkIHJlZmVyZW5jZXNcbi8vIHdoZW4gYHR5cGVgIGlzIGAnbnVtYmVycydgLlxuZnVuY3Rpb24gZW5jb2RlRmFjdG9yeSh0eXBlKSB7XG4gIHZhciBvcHRpb25zID0ge31cblxuICBpZiAodHlwZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBpZGVudGl0eVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICd0cnVlJykge1xuICAgIG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdlc2NhcGUnKSB7XG4gICAgb3B0aW9ucy5lc2NhcGVPbmx5ID0gdHJ1ZVxuICAgIG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICAvLyBFbmNvZGUgSFRNTCBlbnRpdGllcyB1c2luZyB0aGUgYm91bmQgb3B0aW9ucy5cbiAgZnVuY3Rpb24gd3JhcHBlZCh2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXG4gIH1cbn1cblxuLy8gVGhyb3cgYW4gZXhjZXB0aW9uIHdpdGggaW4gaXRzIGBtZXNzYWdlYCBgdmFsdWVgIGFuZCBgbmFtZWAuXG5mdW5jdGlvbiByYWlzZSh2YWx1ZSwgbmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyB2YWx1ZSArICdgIGZvciBzZXR0aW5nIGAnICsgbmFtZSArICdgJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZW50aXR5UHJlZml4TGVuZ3RoID0gcmVxdWlyZSgnLi9lbnRpdHktcHJlZml4LWxlbmd0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29weVxuXG52YXIgYW1wZXJzYW5kID0gJyYnXG5cbnZhciBwdW5jdHVhdGlvbkV4cHByZXNpb24gPSAvWy0hXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX5fXS9cblxuLy8gRm9yIHNob3J0Y3V0IGFuZCBjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmtzLCB0aGUgY29udGVudHMgaXMgYWxzbyBhblxuLy8gaWRlbnRpZmllciwgc28gd2UgbmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCBlbmNvZGluZyBhbmQgZXNjYXBpbmdcbi8vIHRoYXQgd2VyZSBwcmVzZW50IGluIHRoZSBzb3VyY2Ugc3RyaW5nLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIHVuZXNjYXBlZCAmIHVuZW5jb2RlZCB2YWx1ZSBmcm9tIHNob3J0Y3V04oCZc1xuLy8gY2hpbGQgbm9kZXMgYW5kIHRoZSBpZGVudGlmaWVyIGFuZCBlbmNvZGVzIHRoZSBmb3JtZXIgYWNjb3JkaW5nIHRvXG4vLyB0aGUgbGF0dGVyLlxuZnVuY3Rpb24gY29weSh2YWx1ZSwgaWRlbnRpZmllcikge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBjb3VudCA9IGlkZW50aWZpZXIubGVuZ3RoXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgcG9zaXRpb24gPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHN0YXJ0XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gVGFrZSBuZXh0IG5vbi1wdW5jdHVhdGlvbiBjaGFyYWN0ZXJzIGZyb20gYHZhbHVlYC5cbiAgICBzdGFydCA9IGluZGV4XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGggJiYgIXB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGluZGV4KSlcblxuICAgIC8vIEFkdmFuY2UgYHBvc2l0aW9uYCB0byB0aGUgbmV4dCBwdW5jdHVhdGlvbiBjaGFyYWN0ZXIuXG4gICAgd2hpbGUgKFxuICAgICAgcG9zaXRpb24gPCBjb3VudCAmJlxuICAgICAgIXB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KGlkZW50aWZpZXIuY2hhckF0KHBvc2l0aW9uKSlcbiAgICApIHtcbiAgICAgIHBvc2l0aW9uICs9IDFcbiAgICB9XG5cbiAgICAvLyBUYWtlIG5leHQgcHVuY3R1YXRpb24gY2hhcmFjdGVycyBmcm9tIGBpZGVudGlmaWVyYC5cbiAgICBzdGFydCA9IHBvc2l0aW9uXG5cbiAgICB3aGlsZSAoXG4gICAgICBwb3NpdGlvbiA8IGNvdW50ICYmXG4gICAgICBwdW5jdHVhdGlvbkV4cHByZXNpb24udGVzdChpZGVudGlmaWVyLmNoYXJBdChwb3NpdGlvbikpXG4gICAgKSB7XG4gICAgICBpZiAoaWRlbnRpZmllci5jaGFyQXQocG9zaXRpb24pID09PSBhbXBlcnNhbmQpIHtcbiAgICAgICAgcG9zaXRpb24gKz0gZW50aXR5UHJlZml4TGVuZ3RoKGlkZW50aWZpZXIuc2xpY2UocG9zaXRpb24pKVxuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbiArPSAxXG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goaWRlbnRpZmllci5zbGljZShzdGFydCwgcG9zaXRpb24pKVxuXG4gICAgLy8gQWR2YW5jZSBgaW5kZXhgIHRvIHRoZSBuZXh0IG5vbi1wdW5jdHVhdGlvbiBjaGFyYWN0ZXIuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIHB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jbG9zZVxuXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcblxuLy8gVGhlcmUgaXMgY3VycmVudGx5IG5vIHdheSB0byBzdXBwb3J0IG5lc3RlZCBkZWxpbWl0ZXJzIGFjcm9zcyBNYXJrZG93bi5wbCxcbi8vIENvbW1vbk1hcmssIGFuZCBHaXRIdWIgKFJlZENhcnBldCkuICBUaGUgZm9sbG93aW5nIGNvZGUgc3VwcG9ydHMgTWFya2Rvd24ucGxcbi8vIGFuZCBHaXRIdWIuXG4vLyBDb21tb25NYXJrIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiBtaXhpbmcgZG91YmxlLSBhbmQgc2luZ2xlIHF1b3RlcyBpbnNpZGUgYVxuLy8gdGl0bGUuXG5mdW5jdGlvbiBlbmNsb3NlKHRpdGxlKSB7XG4gIHZhciBkZWxpbWl0ZXIgPVxuICAgIHRpdGxlLmluZGV4T2YocXVvdGF0aW9uTWFyaykgPT09IC0xID8gcXVvdGF0aW9uTWFyayA6IGFwb3N0cm9waGVcbiAgcmV0dXJuIGRlbGltaXRlciArIHRpdGxlICsgZGVsaW1pdGVyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNsb3NlXG5cbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG52YXIgZXhwcmVzc2lvbiA9IC9cXHMvXG5cbi8vIFdyYXAgYHVybGAgaW4gYW5nbGUgYnJhY2tldHMgd2hlbiBuZWVkZWQsIG9yIHdoZW5cbi8vIGZvcmNlZC5cbi8vIEluIGxpbmtzLCBpbWFnZXMsIGFuZCBkZWZpbml0aW9ucywgdGhlIFVSTCBwYXJ0IG5lZWRzXG4vLyB0byBiZSBlbmNsb3NlZCB3aGVuIGl0OlxuLy9cbi8vIC0gaGFzIGEgbGVuZ3RoIG9mIGAwYFxuLy8gLSBjb250YWlucyB3aGl0ZS1zcGFjZVxuLy8gLSBoYXMgbW9yZSBvciBsZXNzIG9wZW5pbmcgdGhhbiBjbG9zaW5nIHBhcmVudGhlc2VzXG5mdW5jdGlvbiBlbmNsb3NlKHVyaSwgYWx3YXlzKSB7XG4gIGlmIChcbiAgICBhbHdheXMgfHxcbiAgICB1cmkubGVuZ3RoID09PSAwIHx8XG4gICAgZXhwcmVzc2lvbi50ZXN0KHVyaSkgfHxcbiAgICBjb3VudCh1cmksIGxlZnRQYXJlbnRoZXNpcykgIT09IGNvdW50KHVyaSwgcmlnaHRQYXJlbnRoZXNpcylcbiAgKSB7XG4gICAgcmV0dXJuIGxlc3NUaGFuICsgdXJpICsgZ3JlYXRlclRoYW5cbiAgfVxuXG4gIHJldHVybiB1cmlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRlclxuXG4vLyBTaG9ydGN1dCBhbmQgY29sbGFwc2VkIGxpbmsgcmVmZXJlbmNlcyBuZWVkIG5vIGVzY2FwaW5nIGFuZCBlbmNvZGluZyBkdXJpbmdcbi8vIHRoZSBwcm9jZXNzaW5nIG9mIGNoaWxkIG5vZGVzIChpdCBtdXN0IGJlIGltcGxpZWQgZnJvbSBpZGVudGlmaWVyKS5cbi8vXG4vLyBUaGlzIHRvZ2dsZXIgdHVybnMgZW5jb2RpbmcgYW5kIGVzY2FwaW5nIG9mZiBmb3Igc2hvcnRjdXQgYW5kIGNvbGxhcHNlZFxuLy8gcmVmZXJlbmNlcy5cbi8vXG4vLyBJbXBsaWVzIGBlbnRlckxpbmtgLlxuZnVuY3Rpb24gZW50ZXIoY29tcGlsZXIsIG5vZGUpIHtcbiAgdmFyIGVuY29kZSA9IGNvbXBpbGVyLmVuY29kZVxuICB2YXIgZXNjYXBlID0gY29tcGlsZXIuZXNjYXBlXG4gIHZhciBleGl0TGluayA9IGNvbXBpbGVyLmVudGVyTGluaygpXG5cbiAgaWYgKG5vZGUucmVmZXJlbmNlVHlwZSAhPT0gJ3Nob3J0Y3V0JyAmJiBub2RlLnJlZmVyZW5jZVR5cGUgIT09ICdjb2xsYXBzZWQnKSB7XG4gICAgcmV0dXJuIGV4aXRMaW5rXG4gIH1cblxuICBjb21waWxlci5lc2NhcGUgPSBpZGVudGl0eVxuICBjb21waWxlci5lbmNvZGUgPSBpZGVudGl0eVxuXG4gIHJldHVybiBleGl0XG5cbiAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICBjb21waWxlci5lbmNvZGUgPSBlbmNvZGVcbiAgICBjb21waWxlci5lc2NhcGUgPSBlc2NhcGVcbiAgICBleGl0TGluaygpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG52YXIgYW1wZXJzYW5kID0gJyYnXG5cbi8vIFJldHVybnMgdGhlIGxlbmd0aCBvZiBIVE1MIGVudGl0eSB0aGF0IGlzIGEgcHJlZml4IG9mIHRoZSBnaXZlbiBzdHJpbmdcbi8vIChleGNsdWRpbmcgdGhlIGFtcGVyc2FuZCksIDAgaWYgaXQgZG9lcyBub3Qgc3RhcnQgd2l0aCBhbiBlbnRpdHkuXG5mdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgdmFyIHByZWZpeFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIEN1cnJlbnRseSBhbHNvIHRlc3RlZCBmb3IgYXQgaW1wbGVtZW50aW9uLCBidXQgd2VcbiAgICoga2VlcCBpdCBoZXJlIGJlY2F1c2UgdGhhdOKAmXMgcHJvcGVyLiAqL1xuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBhbXBlcnNhbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHJlZml4ID0gdmFsdWUuc3BsaXQoYW1wZXJzYW5kLCAyKS5qb2luKGFtcGVyc2FuZClcblxuICByZXR1cm4gcHJlZml4Lmxlbmd0aCAtIGRlY29kZShwcmVmaXgpLmxlbmd0aFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHlcblxuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsYWJlbFxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG5cbi8vIFN0cmluZ2lmeSBhIHJlZmVyZW5jZSBsYWJlbC5cbi8vIEJlY2F1c2UgbGluayByZWZlcmVuY2VzIGFyZSBlYXNpbHksIG1pc3Rha2luZ2x5LCBjcmVhdGVkIChmb3IgZXhhbXBsZSxcbi8vIGBbZm9vXWApLCByZWZlcmVuY2Ugbm9kZXMgaGF2ZSBhbiBleHRyYSBwcm9wZXJ0eSBkZXBpY3RpbmcgaG93IGl0IGxvb2tlZCBpblxuLy8gdGhlIG9yaWdpbmFsIGRvY3VtZW50LCBzbyBzdHJpbmdpZmljYXRpb24gY2FuIGNhdXNlIG1pbmltYWwgY2hhbmdlcy5cbmZ1bmN0aW9uIGxhYmVsKG5vZGUpIHtcbiAgdmFyIHR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcblxuICBpZiAodHlwZSA9PT0gc2hvcnRjdXQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICh0eXBlID09PSBjb2xsYXBzZWQgPyAnJyA6IG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFkXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG5cbi8vIFBhZCBgdmFsdWVgIHdpdGggYGxldmVsICogdGFiU2l6ZWAgc3BhY2VzLiAgUmVzcGVjdHMgbGluZXMuICBJZ25vcmVzIGVtcHR5XG4vLyBsaW5lcy5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgbGV2ZWwpIHtcbiAgdmFyIHZhbHVlcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuICB2YXIgaW5kZXggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBwYWRkaW5nID0gcmVwZWF0KHNwYWNlLCBsZXZlbCAqIHRhYlNpemUpXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAodmFsdWVzW2luZGV4XS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhbHVlc1tpbmRleF0gPSBwYWRkaW5nICsgdmFsdWVzW2luZGV4XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihsaW5lRmVlZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGJsb2NrcXVvdGUobm9kZSkge1xuICB2YXIgdmFsdWVzID0gdGhpcy5ibG9jayhub2RlKS5zcGxpdChsaW5lRmVlZClcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgcmVzdWx0W2luZGV4XSA9ICh2YWx1ZSA/IHNwYWNlIDogJycpICsgdmFsdWVcbiAgfVxuXG4gIHJldHVybiBncmVhdGVyVGhhbiArIHJlc3VsdC5qb2luKGxpbmVGZWVkICsgZ3JlYXRlclRoYW4pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lQnJlYWtcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgY29tbW9ubWFyayA9IGJhY2tzbGFzaCArIGxpbmVGZWVkXG52YXIgbm9ybWFsID0gc3BhY2UgKyBzcGFjZSArIGxpbmVGZWVkXG5cbmZ1bmN0aW9uIGxpbmVCcmVhaygpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21tb25tYXJrID8gY29tbW9ubWFyayA6IG5vcm1hbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJlYWsgPSByZXF1aXJlKCdsb25nZXN0LXN0cmVhaycpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgcGFkID0gcmVxdWlyZSgnLi4vdXRpbC9wYWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHRpbGRlID0gJ34nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxuLy8gU3RyaW5naWZ5IGNvZGUuXG4vLyBDcmVhdGVzIGluZGVudGVkIGNvZGUgd2hlbjpcbi8vXG4vLyAtIE5vIGxhbmd1YWdlIHRhZyBleGlzdHNcbi8vIC0gTm90IGluIGBmZW5jZXM6IHRydWVgIG1vZGVcbi8vIC0gQSBub24tZW1wdHkgdmFsdWUgZXhpc3RzXG4vL1xuLy8gT3RoZXJ3aXNlLCBHRk0gZmVuY2VkIGNvZGUgaXMgY3JlYXRlZDpcbi8vXG4vLyBgYGBgbWFya2Rvd25cbi8vIGBgYGpzXG4vLyBmb28oKTtcbi8vIGBgYFxuLy8gYGBgYFxuLy9cbi8vIFdoZW4gaW4gYGBmZW5jZTogYH5gIGBgIG1vZGUsIHVzZXMgdGlsZGVzIGFzIGZlbmNlczpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gfn5+anNcbi8vIGZvbygpO1xuLy8gfn5+XG4vLyBgYGBcbi8vXG4vLyBLbm93cyBhYm91dCBpbnRlcm5hbCBmZW5jZXM6XG4vL1xuLy8gYGBgYGBtYXJrZG93blxuLy8gYGBgYG1hcmtkb3duXG4vLyBgYGBqYXZhc2NyaXB0XG4vLyBmb28oKTtcbi8vIGBgYFxuLy8gYGBgYFxuLy8gYGBgYGBcbmZ1bmN0aW9uIGNvZGUobm9kZSwgcGFyZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlXG4gIHZhciBvcHRpb25zID0gc2VsZi5vcHRpb25zXG4gIHZhciBtYXJrZXIgPSBvcHRpb25zLmZlbmNlXG4gIHZhciBpbmZvID0gbm9kZS5sYW5nIHx8ICcnXG4gIHZhciBmZW5jZVxuXG4gIGlmIChpbmZvICYmIG5vZGUubWV0YSkge1xuICAgIGluZm8gKz0gc3BhY2UgKyBub2RlLm1ldGFcbiAgfVxuXG4gIGluZm8gPSBzZWxmLmVuY29kZShzZWxmLmVzY2FwZShpbmZvLCBub2RlKSlcblxuICAvLyBXaXRob3V0IChuZWVkZWQpIGZlbmNlcy5cbiAgaWYgKFxuICAgICFpbmZvICYmXG4gICAgIW9wdGlvbnMuZmVuY2VzICYmXG4gICAgdmFsdWUgJiZcbiAgICB2YWx1ZS5jaGFyQXQoMCkgIT09IGxpbmVGZWVkICYmXG4gICAgdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpICE9PSBsaW5lRmVlZFxuICApIHtcbiAgICAvLyBUaHJvdyB3aGVuIHBlZGFudGljLCBpbiBhIGxpc3QgaXRlbSB3aGljaCBpc27igJl0IGNvbXBpbGVkIHVzaW5nIGEgdGFiLlxuICAgIGlmIChcbiAgICAgIHBhcmVudCAmJlxuICAgICAgcGFyZW50LnR5cGUgPT09ICdsaXN0SXRlbScgJiZcbiAgICAgIG9wdGlvbnMubGlzdEl0ZW1JbmRlbnQgIT09ICd0YWInICYmXG4gICAgICBvcHRpb25zLnBlZGFudGljXG4gICAgKSB7XG4gICAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgICAgJ0Nhbm5vdCBpbmRlbnQgY29kZSBwcm9wZXJseS4gU2VlIGh0dHBzOi8vZ2l0LmlvL2Z4S1I4JyxcbiAgICAgICAgbm9kZS5wb3NpdGlvblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBwYWQodmFsdWUsIDEpXG4gIH1cblxuICAvLyBCYWNrdGlja3MgaW4gdGhlIGluZm8gc3RyaW5nIGRvbuKAmXQgd29yayB3aXRoIGJhY2t0aWNrIGZlbmNlZCBjb2RlLlxuICAvLyBCYWNrdGlja3MgKGFuZCB0aWxkZXMpIGFyZSBmaW5lIGluIHRpbGRlIGZlbmNlZCBjb2RlLlxuICBpZiAobWFya2VyID09PSBncmF2ZUFjY2VudCAmJiBpbmZvLmluZGV4T2YoZ3JhdmVBY2NlbnQpICE9PSAtMSkge1xuICAgIG1hcmtlciA9IHRpbGRlXG4gIH1cblxuICBmZW5jZSA9IHJlcGVhdChtYXJrZXIsIE1hdGgubWF4KHN0cmVhayh2YWx1ZSwgbWFya2VyKSArIDEsIDMpKVxuXG4gIHJldHVybiBmZW5jZSArIGluZm8gKyBsaW5lRmVlZCArIHZhbHVlICsgbGluZUZlZWQgKyBmZW5jZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1cmkgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdXJpJylcbnZhciB0aXRsZSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS10aXRsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvblxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbi8vIFN0cmluZ2lmeSBhbiBVUkwgZGVmaW5pdGlvbi5cbi8vXG4vLyBJcyBzbWFydCBhYm91dCBlbmNsb3NpbmcgYHVybGAgKHNlZSBgZW5jbG9zZVVSSSgpYCkgYW5kIGB0aXRsZWAgKHNlZVxuLy8gYGVuY2xvc2VUaXRsZSgpYCkuXG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFtmb29dOiA8Zm9vIGF0IGJhciBkb3QgY29tPiAnQW4gXCJleGFtcGxlXCIgZS1tYWlsJ1xuLy8gYGBgXG5mdW5jdGlvbiBkZWZpbml0aW9uKG5vZGUpIHtcbiAgdmFyIGNvbnRlbnQgPSB1cmkobm9kZS51cmwpXG5cbiAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICBjb250ZW50ICs9IHNwYWNlICsgdGl0bGUobm9kZS50aXRsZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgIChub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcikgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgY29sb24gK1xuICAgIHNwYWNlICtcbiAgICBjb250ZW50XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIHRpbGRlID0gJ34nXG5cbnZhciBmZW5jZSA9IHRpbGRlICsgdGlsZGVcblxuZnVuY3Rpb24gc3RyaWtldGhyb3VnaChub2RlKSB7XG4gIHJldHVybiBmZW5jZSArIHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpICsgZmVuY2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5cbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgYXN0ZXJpc2sgPSAnKidcblxuLy8gU3RyaW5naWZ5IGFuIGBlbXBoYXNpc2AuXG4vL1xuLy8gVGhlIG1hcmtlciB1c2VkIGlzIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGBlbXBoYXNpc2AsIHdoaWNoIGRlZmF1bHRzIHRvIGFuXG4vLyB1bmRlcnNjb3JlIChgJ18nYCkgYnV0IGFsc28gYWNjZXB0cyBhbiBhc3RlcmlzayAoYCcqJ2ApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqZm9vKlxuLy8gYGBgXG4vL1xuLy8gSW4gYHBlZGFudGljYCBtb2RlLCB0ZXh0IHdoaWNoIGl0c2VsZiBjb250YWlucyBhbiB1bmRlcnNjb3JlIHdpbGwgY2F1c2UgdGhlXG4vLyBtYXJrZXIgdG8gZGVmYXVsdCB0byBhbiBhc3RlcmlzayBpbnN0ZWFkOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqZm9vX2Jhcipcbi8vIGBgYFxuZnVuY3Rpb24gZW1waGFzaXMobm9kZSkge1xuICB2YXIgbWFya2VyID0gdGhpcy5vcHRpb25zLmVtcGhhc2lzXG4gIHZhciBjb250ZW50ID0gdGhpcy5hbGwobm9kZSkuam9pbignJylcblxuICAvLyBXaGVuIGluIHBlZGFudGljIG1vZGUsIHByZXZlbnQgdXNpbmcgdW5kZXJzY29yZSBhcyB0aGUgbWFya2VyIHdoZW4gdGhlcmVcbiAgLy8gYXJlIHVuZGVyc2NvcmVzIGluIHRoZSBjb250ZW50LlxuICBpZiAoXG4gICAgdGhpcy5vcHRpb25zLnBlZGFudGljICYmXG4gICAgbWFya2VyID09PSB1bmRlcnNjb3JlICYmXG4gICAgY29udGVudC5pbmRleE9mKG1hcmtlcikgIT09IC0xXG4gICkge1xuICAgIG1hcmtlciA9IGFzdGVyaXNrXG4gIH1cblxuICByZXR1cm4gbWFya2VyICsgY29udGVudCArIG1hcmtlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBoZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBudW1iZXJTaWduID0gJyMnXG52YXIgZGFzaCA9ICctJ1xudmFyIGVxdWFsc1RvID0gJz0nXG5cbi8vIFN0cmluZ2lmeSBhIGhlYWRpbmcuXG4vL1xuLy8gSW4gYHNldGV4dDogdHJ1ZWAgbW9kZSBhbmQgd2hlbiBgZGVwdGhgIGlzIHNtYWxsZXIgdGhhbiB0aHJlZSwgY3JlYXRlcyBhXG4vLyBzZXRleHQgaGVhZGVyOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBGb29cbi8vID09PVxuLy8gYGBgXG4vL1xuLy8gT3RoZXJ3aXNlLCBhbiBBVFggaGVhZGVyIGlzIGdlbmVyYXRlZDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIyMjIEZvb1xuLy8gYGBgXG4vL1xuLy8gSW4gYGNsb3NlQXR4OiB0cnVlYCBtb2RlLCB0aGUgaGVhZGVyIGlzIGNsb3NlZCB3aXRoIGhhc2hlczpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIyMjIEZvbyAjIyNcbi8vIGBgYFxuZnVuY3Rpb24gaGVhZGluZyhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZGVwdGggPSBub2RlLmRlcHRoXG4gIHZhciBzZXRleHQgPSBzZWxmLm9wdGlvbnMuc2V0ZXh0XG4gIHZhciBjbG9zZUF0eCA9IHNlbGYub3B0aW9ucy5jbG9zZUF0eFxuICB2YXIgY29udGVudCA9IHNlbGYuYWxsKG5vZGUpLmpvaW4oJycpXG4gIHZhciBwcmVmaXhcblxuICBpZiAoc2V0ZXh0ICYmIGRlcHRoIDwgMykge1xuICAgIHJldHVybiAoXG4gICAgICBjb250ZW50ICsgbGluZUZlZWQgKyByZXBlYXQoZGVwdGggPT09IDEgPyBlcXVhbHNUbyA6IGRhc2gsIGNvbnRlbnQubGVuZ3RoKVxuICAgIClcbiAgfVxuXG4gIHByZWZpeCA9IHJlcGVhdChudW1iZXJTaWduLCBub2RlLmRlcHRoKVxuXG4gIHJldHVybiBwcmVmaXggKyBzcGFjZSArIGNvbnRlbnQgKyAoY2xvc2VBdHggPyBzcGFjZSArIHByZWZpeCA6ICcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbFxuXG5mdW5jdGlvbiBodG1sKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudmFsdWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbGFiZWwgPSByZXF1aXJlKCcuLi91dGlsL2xhYmVsJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2Uobm9kZSkge1xuICByZXR1cm4gKFxuICAgIGV4Y2xhbWF0aW9uTWFyayArXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICh0aGlzLmVuY29kZShub2RlLmFsdCwgbm9kZSkgfHwgJycpICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGxhYmVsKG5vZGUpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXJpID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXVyaScpXG52YXIgdGl0bGUgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdGl0bGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG4vLyBTdHJpbmdpZnkgYW4gaW1hZ2UuXG4vL1xuLy8gSXMgc21hcnQgYWJvdXQgZW5jbG9zaW5nIGB1cmxgIChzZWUgYGVuY2xvc2VVUkkoKWApIGFuZCBgdGl0bGVgIChzZWVcbi8vIGBlbmNsb3NlVGl0bGUoKWApLlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAhW2Zvb10oPC9mYXYgaWNvbi5wbmc+ICdNeSBcImZhdm91cml0ZVwiIGljb24nKVxuLy8gYGBgXG4vL1xuLy8gU3VwcG9ydHMgbmFtZWQgZW50aXRpZXMgaW4gYHVybGAsIGBhbHRgLCBhbmQgYHRpdGxlYCB3aGVuIGluXG4vLyBgc2V0dGluZ3MuZW5jb2RlYCBtb2RlLlxuZnVuY3Rpb24gaW1hZ2Uobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbnRlbnQgPSB1cmkoc2VsZi5lbmNvZGUobm9kZS51cmwgfHwgJycsIG5vZGUpKVxuICB2YXIgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgdmFyIGFsdCA9IHNlbGYuZW5jb2RlKHNlbGYuZXNjYXBlKG5vZGUuYWx0IHx8ICcnLCBub2RlKSlcblxuICBleGl0KClcblxuICBpZiAobm9kZS50aXRsZSkge1xuICAgIGNvbnRlbnQgKz0gc3BhY2UgKyB0aXRsZShzZWxmLmVuY29kZShub2RlLnRpdGxlLCBub2RlKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgZXhjbGFtYXRpb25NYXJrICtcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgYWx0ICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGxlZnRQYXJlbnRoZXNpcyArXG4gICAgY29udGVudCArXG4gICAgcmlnaHRQYXJlbnRoZXNpc1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0cmVhayA9IHJlcXVpcmUoJ2xvbmdlc3Qtc3RyZWFrJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5cbnZhciBncmF2ZUFjY2VudENoYXIgPSAnYCdcbnZhciBsaW5lRmVlZCA9IDEwIC8vICAnXFxuJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgZ3JhdmVBY2NlbnQgPSA5NiAvLyAgJ2AnXG5cbi8vIFN0cmluZ2lmeSBpbmxpbmUgY29kZS5cbi8vXG4vLyBLbm93cyBhYm91dCBpbnRlcm5hbCB0aWNrcyAoYFxcYGApLCBhbmQgZW5zdXJlcyBvbmUgbW9yZSB0aWNrIGlzIHVzZWQgdG9cbi8vIGVuY2xvc2UgdGhlIGlubGluZSBjb2RlOlxuLy9cbi8vIGBgYGBtYXJrZG93blxuLy8gYGBgZm9vIGBgYmFyYGAgYmF6YGBgXG4vLyBgYGBgXG4vL1xuLy8gRXZlbiBrbm93cyBhYm91dCBpbml0YWwgYW5kIGZpbmFsIHRpY2tzOlxuLy9cbi8vIGBgbWFya2Rvd25cbi8vIGBgIGBmb28gYGBcbi8vIGBgIGZvb2AgYGBcbi8vIGBgYFxuZnVuY3Rpb24gaW5saW5lQ29kZShub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWVcbiAgdmFyIHRpY2tzID0gcmVwZWF0KGdyYXZlQWNjZW50Q2hhciwgc3RyZWFrKHZhbHVlLCBncmF2ZUFjY2VudENoYXIpICsgMSlcbiAgdmFyIHN0YXJ0ID0gdGlja3NcbiAgdmFyIGVuZCA9IHRpY2tzXG4gIHZhciBoZWFkID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB2YXIgdGFpbCA9IHZhbHVlLmNoYXJDb2RlQXQodmFsdWUubGVuZ3RoIC0gMSlcbiAgdmFyIHdyYXAgPSBmYWxzZVxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIGlmIChoZWFkID09PSBncmF2ZUFjY2VudCB8fCB0YWlsID09PSBncmF2ZUFjY2VudCkge1xuICAgIHdyYXAgPSB0cnVlXG4gIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMiAmJiB3cyhoZWFkKSAmJiB3cyh0YWlsKSkge1xuICAgIGluZGV4ID0gMVxuICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCAtIDFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoIXdzKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpKSkge1xuICAgICAgICB3cmFwID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh3cmFwKSB7XG4gICAgc3RhcnQgKz0gJyAnXG4gICAgZW5kID0gJyAnICsgZW5kXG4gIH1cblxuICByZXR1cm4gc3RhcnQgKyB2YWx1ZSArIGVuZFxufVxuXG5mdW5jdGlvbiB3cyhjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSBsaW5lRmVlZCB8fCBjb2RlID09PSBzcGFjZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb3B5ID0gcmVxdWlyZSgnLi4vdXRpbC9jb3B5LWlkZW50aWZpZXItZW5jb2RpbmcnKVxudmFyIGxhYmVsID0gcmVxdWlyZSgnLi4vdXRpbC9sYWJlbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1JlZmVyZW5jZVxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG5cbmZ1bmN0aW9uIGxpbmtSZWZlcmVuY2Uobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyTGlua1JlZmVyZW5jZShzZWxmLCBub2RlKVxuICB2YXIgdmFsdWUgPSBzZWxmLmFsbChub2RlKS5qb2luKCcnKVxuXG4gIGV4aXQoKVxuXG4gIGlmICh0eXBlID09PSBzaG9ydGN1dCB8fCB0eXBlID09PSBjb2xsYXBzZWQpIHtcbiAgICB2YWx1ZSA9IGNvcHkodmFsdWUsIG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKVxuICB9XG5cbiAgcmV0dXJuIGxlZnRTcXVhcmVCcmFja2V0ICsgdmFsdWUgKyByaWdodFNxdWFyZUJyYWNrZXQgKyBsYWJlbChub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1cmkgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdXJpJylcbnZhciB0aXRsZSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS10aXRsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcblxuLy8gRXhwcmVzc2lvbiBmb3IgYSBwcm90b2NvbDpcbi8vIFNlZSA8aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9JZGVudGlmaWVyI0dlbmVyaWNfc3ludGF4Pi5cbnZhciBwcm90b2NvbCA9IC9eW2Etel1bYS16Ky4tXSs6XFwvPy9pXG5cbi8vIFN0cmluZ2lmeSBhIGxpbmsuXG4vL1xuLy8gV2hlbiBubyB0aXRsZSBleGlzdHMsIHRoZSBjb21waWxlZCBgY2hpbGRyZW5gIGVxdWFsIGB1cmxgLCBhbmQgYHVybGAgc3RhcnRzXG4vLyB3aXRoIGEgcHJvdG9jb2wsIGFuIGF1dG8gbGluayBpcyBjcmVhdGVkOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA8aHR0cDovL2V4YW1wbGUuY29tPlxuLy8gYGBgXG4vL1xuLy8gT3RoZXJ3aXNlLCBpcyBzbWFydCBhYm91dCBlbmNsb3NpbmcgYHVybGAgKHNlZSBgZW5jbG9zZVVSSSgpYCkgYW5kIGB0aXRsZWBcbi8vIChzZWUgYGVuY2xvc2VUaXRsZSgpYCkuXG4vLyBgYGBcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gW2Zvb10oPGZvbyBhdCBiYXIgZG90IGNvbT4gJ0FuIFwiZXhhbXBsZVwiIGUtbWFpbCcpXG4vLyBgYGBcbi8vXG4vLyBTdXBwb3J0cyBuYW1lZCBlbnRpdGllcyBpbiB0aGUgYHVybGAgYW5kIGB0aXRsZWAgd2hlbiBpbiBgc2V0dGluZ3MuZW5jb2RlYFxuLy8gbW9kZS5cbmZ1bmN0aW9uIGxpbmsobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbnRlbnQgPSBzZWxmLmVuY29kZShub2RlLnVybCB8fCAnJywgbm9kZSlcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gIHZhciBlc2NhcGVkID0gc2VsZi5lbmNvZGUoc2VsZi5lc2NhcGUobm9kZS51cmwgfHwgJycsIG5vZGUpKVxuICB2YXIgdmFsdWUgPSBzZWxmLmFsbChub2RlKS5qb2luKCcnKVxuXG4gIGV4aXQoKVxuXG4gIGlmIChub2RlLnRpdGxlID09IG51bGwgJiYgcHJvdG9jb2wudGVzdChjb250ZW50KSAmJiBlc2NhcGVkID09PSB2YWx1ZSkge1xuICAgIC8vIEJhY2tzbGFzaCBlc2NhcGVzIGRvIG5vdCB3b3JrIGluIGF1dG9saW5rcywgc28gd2UgZG8gbm90IGVzY2FwZS5cbiAgICByZXR1cm4gdXJpKHNlbGYuZW5jb2RlKG5vZGUudXJsKSwgdHJ1ZSlcbiAgfVxuXG4gIGNvbnRlbnQgPSB1cmkoY29udGVudClcblxuICBpZiAobm9kZS50aXRsZSkge1xuICAgIGNvbnRlbnQgKz0gc3BhY2UgKyB0aXRsZShzZWxmLmVuY29kZShzZWxmLmVzY2FwZShub2RlLnRpdGxlLCBub2RlKSwgbm9kZSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICB2YWx1ZSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBsZWZ0UGFyZW50aGVzaXMgK1xuICAgIGNvbnRlbnQgK1xuICAgIHJpZ2h0UGFyZW50aGVzaXNcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBwYWQgPSByZXF1aXJlKCcuLi91dGlsL3BhZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdEl0ZW1cblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgbG93ZXJjYXNlWCA9ICd4J1xuXG52YXIgY2VpbCA9IE1hdGguY2VpbFxudmFyIGJsYW5rID0gbGluZUZlZWQgKyBsaW5lRmVlZFxuXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gU3RyaW5naWZ5IGEgbGlzdCBpdGVtLlxuLy9cbi8vIFByZWZpeGVzIHRoZSBjb250ZW50IHdpdGggYSBjaGVja2VkIGNoZWNrYm94IHdoZW4gYGNoZWNrZWQ6IHRydWVgOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbeF0gZm9vXG4vLyBgYGBcbi8vXG4vLyBQcmVmaXhlcyB0aGUgY29udGVudCB3aXRoIGFuIHVuY2hlY2tlZCBjaGVja2JveCB3aGVuIGBjaGVja2VkOiBmYWxzZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFsgXSBmb29cbi8vIGBgYFxuZnVuY3Rpb24gbGlzdEl0ZW0obm9kZSwgcGFyZW50LCBwb3NpdGlvbiwgYnVsbGV0KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3R5bGUgPSBzZWxmLm9wdGlvbnMubGlzdEl0ZW1JbmRlbnRcbiAgdmFyIG1hcmtlciA9IGJ1bGxldCB8fCBzZWxmLm9wdGlvbnMuYnVsbGV0XG4gIHZhciBzcHJlYWQgPSBub2RlLnNwcmVhZCA9PSBudWxsID8gdHJ1ZSA6IG5vZGUuc3ByZWFkXG4gIHZhciBjaGVja2VkID0gbm9kZS5jaGVja2VkXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHZhbHVlXG4gIHZhciBpbmRlbnRcbiAgdmFyIHNwYWNpbmdcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlc1tpbmRleF0gPSBzZWxmLnZpc2l0KGNoaWxkcmVuW2luZGV4XSwgbm9kZSlcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWVzLmpvaW4oc3ByZWFkID8gYmxhbmsgOiBsaW5lRmVlZClcblxuICBpZiAodHlwZW9mIGNoZWNrZWQgPT09ICdib29sZWFuJykge1xuICAgIC8vIE5vdGU6IEnigJlkIGxpa2UgdG8gYmUgYWJsZSB0byBvbmx5IGFkZCB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY2hlY2sgYW5kXG4gICAgLy8gdGhlIHZhbHVlLCBidXQgdW5mb3J0dW5hdGVseSBnaXRodWIgZG9lcyBub3Qgc3VwcG9ydCBlbXB0eSBsaXN0LWl0ZW1zXG4gICAgLy8gd2l0aCBhIGNoZWNrYm94IDooXG4gICAgdmFsdWUgPVxuICAgICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICAgKGNoZWNrZWQgPyBsb3dlcmNhc2VYIDogc3BhY2UpICtcbiAgICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgICBzcGFjZSArXG4gICAgICB2YWx1ZVxuICB9XG5cbiAgaWYgKHN0eWxlID09PSAnMScgfHwgKHN0eWxlID09PSAnbWl4ZWQnICYmIHZhbHVlLmluZGV4T2YobGluZUZlZWQpID09PSAtMSkpIHtcbiAgICBpbmRlbnQgPSBtYXJrZXIubGVuZ3RoICsgMVxuICAgIHNwYWNpbmcgPSBzcGFjZVxuICB9IGVsc2Uge1xuICAgIGluZGVudCA9IGNlaWwoKG1hcmtlci5sZW5ndGggKyAxKSAvIHRhYlNpemUpICogdGFiU2l6ZVxuICAgIHNwYWNpbmcgPSByZXBlYXQoc3BhY2UsIGluZGVudCAtIG1hcmtlci5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbiAgICA/IG1hcmtlciArIHNwYWNpbmcgKyBwYWQodmFsdWUsIGluZGVudCAvIHRhYlNpemUpLnNsaWNlKGluZGVudClcbiAgICA6IG1hcmtlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG5mdW5jdGlvbiBsaXN0KG5vZGUpIHtcbiAgdmFyIGZuID0gbm9kZS5vcmRlcmVkID8gdGhpcy52aXNpdE9yZGVyZWRJdGVtcyA6IHRoaXMudmlzaXRVbm9yZGVyZWRJdGVtc1xuICByZXR1cm4gZm4uY2FsbCh0aGlzLCBub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChub2RlKSB7XG4gIHJldHVybiB0aGlzLmFsbChub2RlKS5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xuXG4vLyBTdHJpbmdpZnkgYSByb290LlxuLy8gQWRkcyBhIGZpbmFsIG5ld2xpbmUgdG8gZW5zdXJlIHZhbGlkIFBPU0lYIGZpbGVzLiAqL1xuZnVuY3Rpb24gcm9vdChub2RlKSB7XG4gIHZhciBkb2MgPSB0aGlzLmJsb2NrKG5vZGUpXG5cbiAgaWYgKGRvYy5jaGFyQXQoZG9jLmxlbmd0aCAtIDEpICE9PSBsaW5lRmVlZCkge1xuICAgIGRvYyArPSBsaW5lRmVlZFxuICB9XG5cbiAgcmV0dXJuIGRvY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcblxuLy8gU3RyaW5naWZ5IGEgYHN0cm9uZ2AuXG4vL1xuLy8gVGhlIG1hcmtlciB1c2VkIGlzIGNvbmZpZ3VyYWJsZSBieSBgc3Ryb25nYCwgd2hpY2ggZGVmYXVsdHMgdG8gYW4gYXN0ZXJpc2tcbi8vIChgJyonYCkgYnV0IGFsc28gYWNjZXB0cyBhbiB1bmRlcnNjb3JlIChgJ18nYCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIF9fZm9vX19cbi8vIGBgYFxuZnVuY3Rpb24gc3Ryb25nKG5vZGUpIHtcbiAgdmFyIG1hcmtlciA9IHJlcGVhdCh0aGlzLm9wdGlvbnMuc3Ryb25nLCAyKVxuICByZXR1cm4gbWFya2VyICsgdGhpcy5hbGwobm9kZSkuam9pbignJykgKyBtYXJrZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlQ2VsbFxuXG52YXIgbGluZUZlZWQgPSAvXFxyP1xcbi9nXG5cbmZ1bmN0aW9uIHRhYmxlQ2VsbChub2RlKSB7XG4gIHJldHVybiB0aGlzLmFsbChub2RlKS5qb2luKCcnKS5yZXBsYWNlKGxpbmVGZWVkLCAnICcpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duVGFibGUgPSByZXF1aXJlKCdtYXJrZG93bi10YWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxuLy8gU3RyaW5naWZ5IHRhYmxlLlxuLy9cbi8vIENyZWF0ZXMgYSBmZW5jZWQgdGFibGUuXG4vLyBUaGUgdGFibGUgaGFzIGFsaWduZWQgZGVsaW1pdGVycyBieSBkZWZhdWx0LCBidXQgbm90IGluXG4vLyBgdGFibGVQaXBlQWxpZ246IGZhbHNlYDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gfCBIZWFkZXIgMSB8IEhlYWRlciAyIHxcbi8vIHwgOi06IHwgLSB8XG4vLyB8IEFscGhhIHwgQnJhdm8gfFxuLy8gYGBgXG4vL1xuLy8gVGhlIHRhYmxlIGlzIHNwYWNlZCBieSBkZWZhdWx0LCBidXQgbm90IGluIGB0YWJsZUNlbGxQYWRkaW5nOiBmYWxzZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIHxGb298QmFyfFxuLy8gfDotOnwtLS18XG4vLyB8QmF6fFF1eHxcbi8vIGBgYFxuZnVuY3Rpb24gdGFibGUobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9wdGlvbnMgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnRhYmxlQ2VsbFBhZGRpbmdcbiAgdmFyIGFsaWduRGVsaW1pdGVycyA9IG9wdGlvbnMudGFibGVQaXBlQWxpZ25cbiAgdmFyIHN0cmluZ0xlbmd0aCA9IG9wdGlvbnMuc3RyaW5nTGVuZ3RoXG4gIHZhciByb3dzID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaW5kZXggPSByb3dzLmxlbmd0aFxuICB2YXIgZXhpdCA9IHNlbGYuZW50ZXJUYWJsZSgpXG4gIHZhciByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IHNlbGYuYWxsKHJvd3NbaW5kZXhdKVxuICB9XG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIG1hcmtkb3duVGFibGUocmVzdWx0LCB7XG4gICAgYWxpZ246IG5vZGUuYWxpZ24sXG4gICAgYWxpZ25EZWxpbWl0ZXJzOiBhbGlnbkRlbGltaXRlcnMsXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBzdHJpbmdMZW5ndGg6IHN0cmluZ0xlbmd0aFxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dFxuXG4vLyBTdHJpbmdpZnkgdGV4dC5cbi8vIFN1cHBvcnRzIG5hbWVkIGVudGl0aWVzIGluIGBzZXR0aW5ncy5lbmNvZGU6IHRydWVgIG1vZGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEFUJmFtcDtUXG4vLyBgYGBcbi8vXG4vLyBTdXBwb3J0cyBudW1iZXJlZCBlbnRpdGllcyBpbiBgc2V0dGluZ3MuZW5jb2RlOiBudW1iZXJzYCBtb2RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBBVCYjeDI2O1Rcbi8vIGBgYFxuZnVuY3Rpb24gdGV4dChub2RlLCBwYXJlbnQpIHtcbiAgcmV0dXJuIHRoaXMuZW5jb2RlKHRoaXMuZXNjYXBlKG5vZGUudmFsdWUsIG5vZGUsIHBhcmVudCksIG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljXG5cbnZhciBzcGFjZSA9ICcgJ1xuXG4vLyBTdHJpbmdpZnkgYSBgdGhlbWF0aWMtYnJlYWtgLlxuLy8gVGhlIGNoYXJhY3RlciB1c2VkIGlzIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGBydWxlYDogKGAnXydgKTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBUaGUgbnVtYmVyIG9mIHJlcGl0aXRpb25zIGlzIGRlZmluZWQgdGhyb3VnaCBgcnVsZVJlcGV0aXRpb25gIChgNmApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqKioqKipcbi8vIGBgYFxuLy9cbi8vIFdoZXRoZXIgc3BhY2VzIGRlbGltaXQgZWFjaCBjaGFyYWN0ZXIsIGlzIGNvbmZpZ3VyZWQgdGhyb3VnaCBgcnVsZVNwYWNlc2Bcbi8vIChgdHJ1ZWApOlxuLy8gYGBgbWFya2Rvd25cbi8vICogKiAqXG4vLyBgYGBcbmZ1bmN0aW9uIHRoZW1hdGljKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICB2YXIgcnVsZSA9IHJlcGVhdChvcHRpb25zLnJ1bGUsIG9wdGlvbnMucnVsZVJlcGV0aXRpb24pXG4gIHJldHVybiBvcHRpb25zLnJ1bGVTcGFjZXMgPyBydWxlLnNwbGl0KCcnKS5qb2luKHNwYWNlKSA6IHJ1bGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5pZmllZCA9IHJlcXVpcmUoJ3VuaWZpZWQnKVxudmFyIHBhcnNlID0gcmVxdWlyZSgncmVtYXJrLXBhcnNlJylcbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCdyZW1hcmstc3RyaW5naWZ5JylcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkudXNlKHBhcnNlKS51c2Uoc3RyaW5naWZ5KS5mcmVlemUoKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmhlcml0ID0gcmVxdWlyZSgndW5oZXJpdCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgUGFyc2VyID0gcmVxdWlyZSgnLi9saWIvcGFyc2VyLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxucGFyc2UuUGFyc2VyID0gUGFyc2VyXG5cbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gdGhpcy5kYXRhKCdzZXR0aW5ncycpXG4gIHZhciBMb2NhbCA9IHVuaGVyaXQoUGFyc2VyKVxuXG4gIExvY2FsLnByb3RvdHlwZS5vcHRpb25zID0geHRlbmQoTG9jYWwucHJvdG90eXBlLm9wdGlvbnMsIHNldHRpbmdzLCBvcHRpb25zKVxuXG4gIHRoaXMuUGFyc2VyID0gTG9jYWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaHRtbCcsXG4gICdpZnJhbWUnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ2xpbmsnLFxuICAnbWFpbicsXG4gICdtZW51JyxcbiAgJ21lbnVpdGVtJyxcbiAgJ21ldGEnLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZScsXG4gICdzZWN0aW9uJyxcbiAgJ3NvdXJjZScsXG4gICd0aXRsZScsXG4gICdzdW1tYXJ5JyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyJyxcbiAgJ3RyYWNrJyxcbiAgJ3VsJ1xuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIEZhY3RvcnkgdG8gY3JlYXRlIGFuIGVudGl0eSBkZWNvZGVyLlxuZnVuY3Rpb24gZmFjdG9yeShjdHgpIHtcbiAgZGVjb2Rlci5yYXcgPSBkZWNvZGVSYXdcblxuICByZXR1cm4gZGVjb2RlclxuXG4gIC8vIE5vcm1hbGl6ZSBgcG9zaXRpb25gIHRvIGFkZCBhbiBgaW5kZW50YC5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHBvc2l0aW9uKSB7XG4gICAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG4gICAgdmFyIHJlc3VsdCA9IFtdXG5cbiAgICB3aGlsZSAoKytsaW5lKSB7XG4gICAgICBpZiAoIShsaW5lIGluIG9mZnNldHMpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKChvZmZzZXRzW2xpbmVdIHx8IDApICsgMSlcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXJ0OiBwb3NpdGlvbiwgaW5kZW50OiByZXN1bHR9XG4gIH1cblxuICAvLyBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byB0ZXh0LW5vZGVzLlxuICBmdW5jdGlvbiBkZWNvZGVyKHZhbHVlLCBwb3NpdGlvbiwgaGFuZGxlcikge1xuICAgIGVudGl0aWVzKHZhbHVlLCB7XG4gICAgICBwb3NpdGlvbjogbm9ybWFsaXplKHBvc2l0aW9uKSxcbiAgICAgIHdhcm5pbmc6IGhhbmRsZVdhcm5pbmcsXG4gICAgICB0ZXh0OiBoYW5kbGVyLFxuICAgICAgcmVmZXJlbmNlOiBoYW5kbGVyLFxuICAgICAgdGV4dENvbnRleHQ6IGN0eCxcbiAgICAgIHJlZmVyZW5jZUNvbnRleHQ6IGN0eFxuICAgIH0pXG4gIH1cblxuICAvLyBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byBhIHN0cmluZy5cbiAgZnVuY3Rpb24gZGVjb2RlUmF3KHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBlbnRpdGllcyhcbiAgICAgIHZhbHVlLFxuICAgICAgeHRlbmQob3B0aW9ucywge3Bvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLCB3YXJuaW5nOiBoYW5kbGVXYXJuaW5nfSlcbiAgICApXG4gIH1cblxuICAvLyBIYW5kbGUgYSB3YXJuaW5nLlxuICAvLyBTZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vcGFyc2UtZW50aXRpZXM+IGZvciB0aGUgd2FybmluZ3MuXG4gIGZ1bmN0aW9uIGhhbmRsZVdhcm5pbmcocmVhc29uLCBwb3NpdGlvbiwgY29kZSkge1xuICAgIGlmIChjb2RlICE9PSAzKSB7XG4gICAgICBjdHguZmlsZS5tZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24pXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBvc2l0aW9uOiB0cnVlLFxuICBnZm06IHRydWUsXG4gIGNvbW1vbm1hcms6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIGJsb2NrczogcmVxdWlyZSgnLi9ibG9jay1lbGVtZW50cycpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxuJywgZnJvbUluZGV4KVxuXG4gIHdoaWxlIChpbmRleCA+IGZyb21JbmRleCkge1xuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggLSAxKSAhPT0gJyAnKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4LS1cbiAgfVxuXG4gIHJldHVybiBpbmRleFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdgJywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd+ficsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG5cbnZhciBwbHVzU2lnbiA9IDQzIC8vICcrJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbi8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmdpdGh1Yi5jb20vZ2ZtLyNleHRlbmRlZC1lbWFpbC1hdXRvbGluaz5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYXRcbiAgdmFyIHBvc2l0aW9uXG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBhdCA9IHZhbHVlLmluZGV4T2YoJ0AnLCBmcm9tSW5kZXgpXG5cbiAgaWYgKGF0ID09PSAtMSkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgcG9zaXRpb24gPSBhdFxuXG4gIGlmIChwb3NpdGlvbiA9PT0gZnJvbUluZGV4IHx8ICFpc0dmbUF0ZXh0KHZhbHVlLmNoYXJDb2RlQXQocG9zaXRpb24gLSAxKSkpIHtcbiAgICByZXR1cm4gbG9jYXRlLmNhbGwoc2VsZiwgdmFsdWUsIGF0ICsgMSlcbiAgfVxuXG4gIHdoaWxlIChwb3NpdGlvbiA+IGZyb21JbmRleCAmJiBpc0dmbUF0ZXh0KHZhbHVlLmNoYXJDb2RlQXQocG9zaXRpb24gLSAxKSkpIHtcbiAgICBwb3NpdGlvbi0tXG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25cbn1cblxuZnVuY3Rpb24gaXNHZm1BdGV4dChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgZGVjaW1hbChjb2RlKSB8fFxuICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgIGNvZGUgPT09IHBsdXNTaWduIHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IGRvdCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBhc3RlcmlzayA9IHZhbHVlLmluZGV4T2YoJyonLCBmcm9tSW5kZXgpXG4gIHZhciB1bmRlcnNjb3JlID0gdmFsdWUuaW5kZXhPZignXycsIGZyb21JbmRleClcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2tcbiAgfVxuXG4gIGlmIChhc3RlcmlzayA9PT0gLTEpIHtcbiAgICByZXR1cm4gdW5kZXJzY29yZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlza1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdcXFxcJywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsaW5rID0gdmFsdWUuaW5kZXhPZignWycsIGZyb21JbmRleClcbiAgdmFyIGltYWdlID0gdmFsdWUuaW5kZXhPZignIVsnLCBmcm9tSW5kZXgpXG5cbiAgaWYgKGltYWdlID09PSAtMSkge1xuICAgIHJldHVybiBsaW5rXG4gIH1cblxuICAvLyBMaW5rIGNhbiBuZXZlciBiZSBgLTFgIGlmIGFuIGltYWdlIGlzIGZvdW5kLCBzbyB3ZSBkb27igJl0IG5lZWQgdG8gY2hlY2tcbiAgLy8gZm9yIHRoYXQgOilcbiAgcmV0dXJuIGxpbmsgPCBpbWFnZSA/IGxpbmsgOiBpbWFnZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBhc3RlcmlzayA9IHZhbHVlLmluZGV4T2YoJyoqJywgZnJvbUluZGV4KVxuICB2YXIgdW5kZXJzY29yZSA9IHZhbHVlLmluZGV4T2YoJ19fJywgZnJvbUluZGV4KVxuXG4gIGlmICh1bmRlcnNjb3JlID09PSAtMSkge1xuICAgIHJldHVybiBhc3Rlcmlza1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlXG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJzwnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxudmFyIHZhbHVlcyA9IFsnd3d3LicsICdodHRwOi8vJywgJ2h0dHBzOi8vJ11cblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIG1pbiA9IC0xXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBwb3NpdGlvblxuXG4gIGlmICghdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiBtaW5cbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZS5pbmRleE9mKHZhbHVlc1tpbmRleF0sIGZyb21JbmRleClcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgKG1pbiA9PT0gLTEgfHwgcG9zaXRpb24gPCBtaW4pKSB7XG4gICAgICBtaW4gPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtaW5cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgcmVtb3ZlUG9zaXRpb24gPSByZXF1aXJlKCd1bmlzdC11dGlsLXJlbW92ZS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBsaW5lQnJlYWtzRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyL2dcblxuLy8gUGFyc2UgdGhlIGJvdW5kIGZpbGUuXG5mdW5jdGlvbiBwYXJzZSgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciB2YWx1ZSA9IFN0cmluZyhzZWxmLmZpbGUpXG4gIHZhciBzdGFydCA9IHtsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMH1cbiAgdmFyIGNvbnRlbnQgPSB4dGVuZChzdGFydClcbiAgdmFyIG5vZGVcblxuICAvLyBDbGVhbiBub24tdW5peCBuZXdsaW5lczogYFxcclxcbmAgYW5kIGBcXHJgIGFyZSBhbGwgY2hhbmdlZCB0byBgXFxuYC5cbiAgLy8gVGhpcyBzaG91bGQgbm90IGFmZmVjdCBwb3NpdGlvbmFsIGluZm9ybWF0aW9uLlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobGluZUJyZWFrc0V4cHJlc3Npb24sIGxpbmVGZWVkKVxuXG4gIC8vIEJPTS5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDB4ZmVmZikge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSlcblxuICAgIGNvbnRlbnQuY29sdW1uKytcbiAgICBjb250ZW50Lm9mZnNldCsrXG4gIH1cblxuICBub2RlID0ge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUJsb2NrKHZhbHVlLCBjb250ZW50KSxcbiAgICBwb3NpdGlvbjoge3N0YXJ0OiBzdGFydCwgZW5kOiBzZWxmLmVvZiB8fCB4dGVuZChzdGFydCl9XG4gIH1cblxuICBpZiAoIXNlbGYub3B0aW9ucy5wb3NpdGlvbikge1xuICAgIHJlbW92ZVBvc2l0aW9uKG5vZGUsIHRydWUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciB0b2dnbGUgPSByZXF1aXJlKCdzdGF0ZS10b2dnbGUnKVxudmFyIHZmaWxlTG9jYXRpb24gPSByZXF1aXJlKCd2ZmlsZS1sb2NhdGlvbicpXG52YXIgdW5lc2NhcGUgPSByZXF1aXJlKCcuL3VuZXNjYXBlJylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpXG52YXIgdG9rZW5pemVyID0gcmVxdWlyZSgnLi90b2tlbml6ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlclxuXG5mdW5jdGlvbiBQYXJzZXIoZG9jLCBmaWxlKSB7XG4gIHRoaXMuZmlsZSA9IGZpbGVcbiAgdGhpcy5vZmZzZXQgPSB7fVxuICB0aGlzLm9wdGlvbnMgPSB4dGVuZCh0aGlzLm9wdGlvbnMpXG4gIHRoaXMuc2V0T3B0aW9ucyh7fSlcblxuICB0aGlzLmluTGlzdCA9IGZhbHNlXG4gIHRoaXMuaW5CbG9jayA9IGZhbHNlXG4gIHRoaXMuaW5MaW5rID0gZmFsc2VcbiAgdGhpcy5hdFN0YXJ0ID0gdHJ1ZVxuXG4gIHRoaXMudG9PZmZzZXQgPSB2ZmlsZUxvY2F0aW9uKGZpbGUpLnRvT2Zmc2V0XG4gIHRoaXMudW5lc2NhcGUgPSB1bmVzY2FwZSh0aGlzLCAnZXNjYXBlJylcbiAgdGhpcy5kZWNvZGUgPSBkZWNvZGUodGhpcylcbn1cblxudmFyIHByb3RvID0gUGFyc2VyLnByb3RvdHlwZVxuXG4vLyBFeHBvc2UgY29yZS5cbnByb3RvLnNldE9wdGlvbnMgPSByZXF1aXJlKCcuL3NldC1vcHRpb25zJylcbnByb3RvLnBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8vIEV4cG9zZSBgZGVmYXVsdHNgLlxucHJvdG8ub3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxuXG4vLyBFbnRlciBhbmQgZXhpdCBoZWxwZXJzLlxucHJvdG8uZXhpdFN0YXJ0ID0gdG9nZ2xlKCdhdFN0YXJ0JywgdHJ1ZSlcbnByb3RvLmVudGVyTGlzdCA9IHRvZ2dsZSgnaW5MaXN0JywgZmFsc2UpXG5wcm90by5lbnRlckxpbmsgPSB0b2dnbGUoJ2luTGluaycsIGZhbHNlKVxucHJvdG8uZW50ZXJCbG9jayA9IHRvZ2dsZSgnaW5CbG9jaycsIGZhbHNlKVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIHBhcmFncmFwaDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gQSBwYXJhZ3JhcGgsIGZvbGxvd2VkIGJ5IGEgdGhlbWF0aWMgYnJlYWsuXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBwYXJhZ3JhcGguXG5wcm90by5pbnRlcnJ1cHRQYXJhZ3JhcGggPSBbXG4gIFsndGhlbWF0aWNCcmVhayddLFxuICBbJ2F0eEhlYWRpbmcnXSxcbiAgWydmZW5jZWRDb2RlJ10sXG4gIFsnYmxvY2txdW90ZSddLFxuICBbJ2h0bWwnXSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgbGlzdDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gLSBPbmVcbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIGxpc3QuXG5wcm90by5pbnRlcnJ1cHRMaXN0ID0gW1xuICBbJ2F0eEhlYWRpbmcnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIGJsb2NrcXVvdGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vID4gQSBwYXJhZ3JhcGguXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBibG9ja3F1b3RlLlxucHJvdG8uaW50ZXJydXB0QmxvY2txdW90ZSA9IFtcbiAgWydpbmRlbnRlZENvZGUnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2ZlbmNlZENvZGUnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2F0eEhlYWRpbmcnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ3NldGV4dEhlYWRpbmcnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ3RoZW1hdGljQnJlYWsnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2h0bWwnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2xpc3QnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBIYW5kbGVycy5cbnByb3RvLmJsb2NrVG9rZW5pemVycyA9IHtcbiAgYmxhbmtMaW5lOiByZXF1aXJlKCcuL3Rva2VuaXplL2JsYW5rLWxpbmUnKSxcbiAgaW5kZW50ZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQnKSxcbiAgZmVuY2VkQ29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWZlbmNlZCcpLFxuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2Jsb2NrcXVvdGUnKSxcbiAgYXR4SGVhZGluZzogcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eCcpLFxuICB0aGVtYXRpY0JyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrJyksXG4gIGxpc3Q6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGlzdCcpLFxuICBzZXRleHRIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctc2V0ZXh0JyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvaHRtbC1ibG9jaycpLFxuICBkZWZpbml0aW9uOiByZXF1aXJlKCcuL3Rva2VuaXplL2RlZmluaXRpb24nKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGFibGUnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3Rva2VuaXplL3BhcmFncmFwaCcpXG59XG5cbnByb3RvLmlubGluZVRva2VuaXplcnMgPSB7XG4gIGVzY2FwZTogcmVxdWlyZSgnLi90b2tlbml6ZS9lc2NhcGUnKSxcbiAgYXV0b0xpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvYXV0by1saW5rJyksXG4gIHVybDogcmVxdWlyZSgnLi90b2tlbml6ZS91cmwnKSxcbiAgZW1haWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvZW1haWwnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWlubGluZScpLFxuICBsaW5rOiByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmsnKSxcbiAgcmVmZXJlbmNlOiByZXF1aXJlKCcuL3Rva2VuaXplL3JlZmVyZW5jZScpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvc3Ryb25nJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL3Rva2VuaXplL2VtcGhhc2lzJyksXG4gIGRlbGV0aW9uOiByZXF1aXJlKCcuL3Rva2VuaXplL2RlbGV0ZScpLFxuICBjb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5saW5lJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL2JyZWFrJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGV4dCcpXG59XG5cbi8vIEV4cG9zZSBwcmVjZWRlbmNlLlxucHJvdG8uYmxvY2tNZXRob2RzID0ga2V5cyhwcm90by5ibG9ja1Rva2VuaXplcnMpXG5wcm90by5pbmxpbmVNZXRob2RzID0ga2V5cyhwcm90by5pbmxpbmVUb2tlbml6ZXJzKVxuXG4vLyBUb2tlbml6ZXJzLlxucHJvdG8udG9rZW5pemVCbG9jayA9IHRva2VuaXplcignYmxvY2snKVxucHJvdG8udG9rZW5pemVJbmxpbmUgPSB0b2tlbml6ZXIoJ2lubGluZScpXG5wcm90by50b2tlbml6ZUZhY3RvcnkgPSB0b2tlbml6ZXJcblxuLy8gR2V0IGFsbCBrZXlzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIga2V5XG5cbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXN1bHQucHVzaChrZXkpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVzY2FwZXMgPSByZXF1aXJlKCdtYXJrZG93bi1lc2NhcGVzJylcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE9wdGlvbnNcblxuZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY3VycmVudCA9IHNlbGYub3B0aW9uc1xuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0geHRlbmQob3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyBvcHRpb25zICsgJ2AgZm9yIHNldHRpbmcgYG9wdGlvbnNgJylcbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgdmFsdWUgPSBvcHRpb25zW2tleV1cblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGN1cnJlbnRba2V5XVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChrZXkgIT09ICdibG9ja3MnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSB8fFxuICAgICAgKGtleSA9PT0gJ2Jsb2NrcycgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgdmFsdWUgYCcgKyB2YWx1ZSArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zLicgKyBrZXkgKyAnYCdcbiAgICAgIClcbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgc2VsZi5vcHRpb25zID0gb3B0aW9uc1xuICBzZWxmLmVzY2FwZSA9IGVzY2FwZXMob3B0aW9ucylcblxuICByZXR1cm4gc2VsZlxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJylcblxubW9kdWxlLmV4cG9ydHMgPSBhdXRvTGlua1xuYXV0b0xpbmsubG9jYXRvciA9IGxvY2F0ZVxuYXV0b0xpbmsubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGF0U2lnbiA9ICdAJ1xudmFyIHNsYXNoID0gJy8nXG52YXIgbWFpbHRvID0gJ21haWx0bzonXG52YXIgbWFpbHRvTGVuZ3RoID0gbWFpbHRvLmxlbmd0aFxuXG5mdW5jdGlvbiBhdXRvTGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgaGFzQXRDaGFyYWN0ZXIgPSBmYWxzZVxuICB2YXIgbGluayA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG5vd1xuICB2YXIgY29udGVudFxuICB2YXIgdG9rZW5pemVyc1xuICB2YXIgZXhpdFxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09IGxlc3NUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlID0gbGVzc1RoYW5cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICB3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4gfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gYXRTaWduIHx8XG4gICAgICAoY2hhcmFjdGVyID09PSAnOicgJiYgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IHNsYXNoKVxuICAgICkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsaW5rICs9IHF1ZXVlXG4gIHF1ZXVlID0gJydcblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIGxpbmsgKz0gY2hhcmFjdGVyXG4gIGluZGV4KytcblxuICBpZiAoY2hhcmFjdGVyID09PSBhdFNpZ24pIHtcbiAgICBoYXNBdENoYXJhY3RlciA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hhcmFjdGVyICE9PSAnOicgfHwgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IHNsYXNoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsaW5rICs9IHNsYXNoXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB8fCBjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoIXF1ZXVlIHx8IGNoYXJhY3RlciAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBsaW5rICs9IHF1ZXVlXG4gIGNvbnRlbnQgPSBsaW5rXG4gIHN1YnZhbHVlICs9IGxpbmsgKyBjaGFyYWN0ZXJcbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4rK1xuICBub3cub2Zmc2V0KytcblxuICBpZiAoaGFzQXRDaGFyYWN0ZXIpIHtcbiAgICBpZiAobGluay5zbGljZSgwLCBtYWlsdG9MZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IG1haWx0bykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UobWFpbHRvTGVuZ3RoKVxuICAgICAgbm93LmNvbHVtbiArPSBtYWlsdG9MZW5ndGhcbiAgICAgIG5vdy5vZmZzZXQgKz0gbWFpbHRvTGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsgPSBtYWlsdG8gKyBsaW5rXG4gICAgfVxuICB9XG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIGF1dG9saW5rcy5cbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgY29udGVudCA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6IGRlY29kZShsaW5rLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY29udGVudFxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIEEgbGluZSBjb250YWluaW5nIG5vIGNoYXJhY3RlcnMsIG9yIGEgbGluZSBjb250YWluaW5nIG9ubHkgc3BhY2VzIChVKzAwMjApIG9yXG4vLyB0YWJzIChVKzAwMDkpLCBpcyBjYWxsZWQgYSBibGFuayBsaW5lLlxuLy8gU2VlIDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jYmxhbmstbGluZT4uXG52YXIgcmVCbGFua0xpbmUgPSAvXlsgXFx0XSooXFxufCQpL1xuXG4vLyBOb3RlIHRoYXQgdGhvdWdoIGJsYW5rIGxpbmVzIHBsYXkgYSBzcGVjaWFsIHJvbGUgaW4gbGlzdHMgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIHRoZSBsaXN0IGlzIHRpZ2h0IG9yIGxvb3NlXG4vLyAoPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNibGFuay1saW5lcz4pLCBpdOKAmXMgZG9uZSBieSB0aGUgbGlzdFxuLy8gdG9rZW5pemVyIGFuZCB0aGlzIGJsYW5rIGxpbmUgdG9rZW5pemVyIGRvZXMgbm90IGhhdmUgdG8gYmUgcmVzcG9uc2libGUgZm9yXG4vLyB0aGF0LlxuLy8gVGhlcmVmb3JlLCBjb25maWdzIHN1Y2ggYXMgYGJsYW5rTGluZS5ub3RJbkxpc3RgIGRvIG5vdCBoYXZlIHRvIGJlIHNldCBoZXJlLlxubW9kdWxlLmV4cG9ydHMgPSBibGFua0xpbmVcblxuZnVuY3Rpb24gYmxhbmtMaW5lKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbWF0Y2hcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbWF0Y2ggPSByZUJsYW5rTGluZS5leGVjKHZhbHVlLnNsaWNlKGluZGV4KSlcblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIHN1YnZhbHVlICs9IG1hdGNoWzBdXG4gIH1cblxuICBpZiAoc3VidmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZWF0KHN1YnZhbHVlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxuZnVuY3Rpb24gYmxvY2txdW90ZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvZmZzZXRzID0gc2VsZi5vZmZzZXRcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRCbG9ja3F1b3RlXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIGN1cnJlbnRMaW5lID0gbm93LmxpbmVcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGNvbnRlbnRzID0gW11cbiAgdmFyIGluZGVudHMgPSBbXVxuICB2YXIgYWRkXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcmVzdFxuICB2YXIgbmV4dEluZGV4XG4gIHZhciBjb250ZW50XG4gIHZhciBsaW5lXG4gIHZhciBzdGFydEluZGV4XG4gIHZhciBwcmVmaXhlZFxuICB2YXIgZXhpdFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBncmVhdGVyVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpbmRleCA9IDBcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICBwcmVmaXhlZCA9IGZhbHNlXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoXG4gICAgfVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIGluZGV4KytcbiAgICAgIHByZWZpeGVkID0gdHJ1ZVxuXG4gICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICB9XG5cbiAgICBjb250ZW50ID0gdmFsdWUuc2xpY2UoaW5kZXgsIG5leHRJbmRleClcblxuICAgIGlmICghcHJlZml4ZWQgJiYgIXRyaW0oY29udGVudCkpIHtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoIXByZWZpeGVkKSB7XG4gICAgICByZXN0ID0gdmFsdWUuc2xpY2UoaW5kZXgpXG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlIGJsb2NrLlxuICAgICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHJlc3QsIHRydWVdKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmUgPSBzdGFydEluZGV4ID09PSBpbmRleCA/IGNvbnRlbnQgOiB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpbmRlbnRzLnB1c2goaW5kZXggLSBzdGFydEluZGV4KVxuICAgIHZhbHVlcy5wdXNoKGxpbmUpXG4gICAgY29udGVudHMucHVzaChjb250ZW50KVxuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxXG4gIH1cblxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGluZGVudHMubGVuZ3RoXG4gIGFkZCA9IGVhdCh2YWx1ZXMuam9pbihsaW5lRmVlZCkpXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBvZmZzZXRzW2N1cnJlbnRMaW5lXSA9IChvZmZzZXRzW2N1cnJlbnRMaW5lXSB8fCAwKSArIGluZGVudHNbaW5kZXhdXG4gICAgY3VycmVudExpbmUrK1xuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJCbG9jaygpXG4gIGNvbnRlbnRzID0gc2VsZi50b2tlbml6ZUJsb2NrKGNvbnRlbnRzLmpvaW4obGluZUZlZWQpLCBub3cpXG4gIGV4aXQoKVxuXG4gIHJldHVybiBhZGQoe3R5cGU6ICdibG9ja3F1b3RlJywgY2hpbGRyZW46IGNvbnRlbnRzfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2JyZWFrJylcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkQnJlYWtcbmhhcmRCcmVhay5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBtaW5CcmVha0xlbmd0aCA9IDJcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBpZiAoaW5kZXggPCBtaW5CcmVha0xlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcblxuICAgICAgcmV0dXJuIGVhdChxdWV1ZSkoe3R5cGU6ICdicmVhayd9KVxuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmVuY2VkQ29kZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciB0aWxkZSA9ICd+J1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG5cbnZhciBtaW5GZW5jZUNvdW50ID0gM1xudmFyIHRhYlNpemUgPSA0XG5cbmZ1bmN0aW9uIGZlbmNlZENvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBmZW5jZUNvdW50XG4gIHZhciBtYXJrZXJcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgZmxhZ1xuICB2YXIgbGFuZ1xuICB2YXIgbWV0YVxuICB2YXIgcXVldWVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGV4ZGVudGVkQ29udGVudFxuICB2YXIgY2xvc2luZ1xuICB2YXIgZXhkZW50ZWRDbG9zaW5nXG4gIHZhciBpbmRlbnRcbiAgdmFyIG5vd1xuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpbmRlbnQgPSBpbmRleFxuXG4gIC8vIEVhdCB0aGUgZmVuY2UuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSB0aWxkZSAmJiBjaGFyYWN0ZXIgIT09IGdyYXZlQWNjZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBmZW5jZUNvdW50ID0gMVxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgZmVuY2VDb3VudCsrXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGZlbmNlQ291bnQgPCBtaW5GZW5jZUNvdW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFYXQgc3BhY2luZyBiZWZvcmUgZmxhZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IGZsYWcuXG4gIGZsYWcgPSAnJ1xuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBsaW5lRmVlZCB8fFxuICAgICAgKG1hcmtlciA9PT0gZ3JhdmVBY2NlbnQgJiYgY2hhcmFjdGVyID09PSBtYXJrZXIpXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhZyArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG5cbiAgc3VidmFsdWUgKz0gZmxhZ1xuICBmbGFnID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoZmxhZyksIG5vdylcblxuICBpZiAocXVldWUpIHtcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICB9XG5cbiAgcXVldWUgPSAnJ1xuICBjbG9zaW5nID0gJydcbiAgZXhkZW50ZWRDbG9zaW5nID0gJydcbiAgY29udGVudCA9ICcnXG4gIGV4ZGVudGVkQ29udGVudCA9ICcnXG4gIHZhciBza2lwID0gdHJ1ZVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgY29udGVudCArPSBjbG9zaW5nXG4gICAgZXhkZW50ZWRDb250ZW50ICs9IGV4ZGVudGVkQ2xvc2luZ1xuICAgIGNsb3NpbmcgPSAnJ1xuICAgIGV4ZGVudGVkQ2xvc2luZyA9ICcnXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGZpcnN0IGxpbmUgZmVlZCBpcyBpZ25vcmVkLiBPdGhlcnMgYXJlbuKAmXQuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgc2tpcCA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjbG9zaW5nICs9IHF1ZXVlXG4gICAgZXhkZW50ZWRDbG9zaW5nICs9IHF1ZXVlLnNsaWNlKGluZGVudClcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPj0gdGFiU2l6ZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNsb3NpbmcgKz0gcXVldWVcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWVcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPCBmZW5jZUNvdW50KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgKz0gY29udGVudCArIGNsb3NpbmdcblxuICAvLyBHZXQgbGFuZyBhbmQgbWV0YSBmcm9tIHRoZSBmbGFnLlxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGZsYWcubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBmbGFnLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBpZiAoIWxhbmcpIHtcbiAgICAgICAgbGFuZyA9IGZsYWcuc2xpY2UoMCwgaW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsYW5nKSB7XG4gICAgICBtZXRhID0gZmxhZy5zbGljZShpbmRleClcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdjb2RlJyxcbiAgICBsYW5nOiBsYW5nIHx8IGZsYWcgfHwgbnVsbCxcbiAgICBtZXRhOiBtZXRhIHx8IG51bGwsXG4gICAgdmFsdWU6IGV4ZGVudGVkQ29udGVudFxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciB0cmltID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50ZWRDb2RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgdGFiU2l6ZSA9IDRcbnZhciBjb2RlSW5kZW50ID0gcmVwZWF0KHNwYWNlLCB0YWJTaXplKVxuXG5mdW5jdGlvbiBpbmRlbnRlZENvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnQgPSAnJ1xuICB2YXIgc3VidmFsdWVRdWV1ZSA9ICcnXG4gIHZhciBjb250ZW50UXVldWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBibGFua1F1ZXVlXG4gIHZhciBpbmRlbnRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChpbmRlbnQpIHtcbiAgICAgIGluZGVudCA9IGZhbHNlXG5cbiAgICAgIHN1YnZhbHVlICs9IHN1YnZhbHVlUXVldWVcbiAgICAgIGNvbnRlbnQgKz0gY29udGVudFF1ZXVlXG4gICAgICBzdWJ2YWx1ZVF1ZXVlID0gJydcbiAgICAgIGNvbnRlbnRRdWV1ZSA9ICcnXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gc3BhY2UgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDIpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDMpID09PSBjaGFyYWN0ZXJcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gY29kZUluZGVudFxuICAgICAgaW5kZXggKz0gM1xuICAgICAgaW5kZW50ID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRlbnQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGJsYW5rUXVldWUgPSAnJ1xuXG4gICAgICB3aGlsZSAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBibGFua1F1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgc3VidmFsdWVRdWV1ZSArPSBibGFua1F1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBjb250ZW50UXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBpZiAoc2lsZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgIGxhbmc6IG51bGwsXG4gICAgICBtZXRhOiBudWxsLFxuICAgICAgdmFsdWU6IHRyaW0oY29udGVudClcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9jb2RlLWlubGluZScpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuaW5saW5lQ29kZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9IDEwIC8vICAnXFxuJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgZ3JhdmVBY2NlbnQgPSA5NiAvLyAgJ2AnXG5cbmZ1bmN0aW9uIGlubGluZUNvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgb3BlbmluZ0ZlbmNlRW5kXG4gIHZhciBjbG9zaW5nRmVuY2VTdGFydFxuICB2YXIgY2xvc2luZ0ZlbmNlRW5kXG4gIHZhciBjb2RlXG4gIHZhciBuZXh0XG4gIHZhciBmb3VuZFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSAhPT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBsZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG9wZW5pbmdGZW5jZUVuZCA9IGluZGV4XG4gIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSBuZXh0XG4gICAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgaWYgKGNvZGUgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICBpZiAoY2xvc2luZ0ZlbmNlU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjbG9zaW5nRmVuY2VTdGFydCA9IGluZGV4XG4gICAgICB9XG5cbiAgICAgIGNsb3NpbmdGZW5jZUVuZCA9IGluZGV4ICsgMVxuXG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgIT09IGdyYXZlQWNjZW50ICYmXG4gICAgICAgIGNsb3NpbmdGZW5jZUVuZCAtIGNsb3NpbmdGZW5jZVN0YXJ0ID09PSBvcGVuaW5nRmVuY2VFbmRcbiAgICAgICkge1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsb3NpbmdGZW5jZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0ID0gdW5kZWZpbmVkXG4gICAgICBjbG9zaW5nRmVuY2VFbmQgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsIGFuZCBmaW5hbCBzcGFjZSAob3IgbGluZSBmZWVkKSwgaWZmIHRoZXkgZXhpc3QgYW5kIHRoZXJlXG4gIC8vIGFyZSBub24tc3BhY2UgY2hhcmFjdGVycyBpbiB0aGUgY29udGVudC5cbiAgaW5kZXggPSBvcGVuaW5nRmVuY2VFbmRcbiAgbGVuZ3RoID0gY2xvc2luZ0ZlbmNlU3RhcnRcbiAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG4gIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpXG4gIGZvdW5kID0gZmFsc2VcblxuICBpZiAoXG4gICAgbGVuZ3RoIC0gaW5kZXggPiAyICYmXG4gICAgKGNvZGUgPT09IHNwYWNlIHx8IGNvZGUgPT09IGxpbmVGZWVkKSAmJlxuICAgIChuZXh0ID09PSBzcGFjZSB8fCBuZXh0ID09PSBsaW5lRmVlZClcbiAgKSB7XG4gICAgaW5kZXgrK1xuICAgIGxlbmd0aC0tXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgICBpZiAoY29kZSAhPT0gc3BhY2UgJiYgY29kZSAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoZm91bmQgPT09IHRydWUpIHtcbiAgICAgIG9wZW5pbmdGZW5jZUVuZCsrXG4gICAgICBjbG9zaW5nRmVuY2VTdGFydC0tXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhdCh2YWx1ZS5zbGljZSgwLCBjbG9zaW5nRmVuY2VFbmQpKSh7XG4gICAgdHlwZTogJ2lubGluZUNvZGUnLFxuICAgIHZhbHVlOiB2YWx1ZS5zbGljZShvcGVuaW5nRmVuY2VFbmQsIGNsb3NpbmdGZW5jZVN0YXJ0KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJylcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uXG5cbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgY29sb24gPSAnOidcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGRlZmluaXRpb24oZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgYmVmb3JlVVJMXG4gIHZhciBiZWZvcmVUaXRsZVxuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgdGVzdFxuICB2YXIgaWRlbnRpZmllclxuICB2YXIgdXJsXG4gIHZhciB0aXRsZVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgYnJlYWtcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoXG4gICAgIXF1ZXVlIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4KSAhPT0gcmlnaHRTcXVhcmVCcmFja2V0IHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IGNvbG9uXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWRlbnRpZmllciA9IHF1ZXVlXG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgcmlnaHRTcXVhcmVCcmFja2V0ICsgY29sb25cbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBxdWV1ZSA9ICcnXG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVzc1RoYW4pIHtcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIpIHtcbiAgICAgIHN1YnZhbHVlICs9IGxlc3NUaGFuICsgcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4IC09IHF1ZXVlLmxlbmd0aCArIDFcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghaXNVbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB1cmwgPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHRlc3QgPSBudWxsXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyaykge1xuICAgIHRlc3QgPSBxdW90YXRpb25NYXJrXG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlKSB7XG4gICAgdGVzdCA9IGFwb3N0cm9waGVcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgIHRlc3QgPSByaWdodFBhcmVudGhlc2lzXG4gIH1cblxuICBpZiAoIXRlc3QpIHtcbiAgICBxdWV1ZSA9ICcnXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgfSBlbHNlIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCB8fCBjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IGxpbmVGZWVkXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRlc3QpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJlZm9yZVRpdGxlID0gc3VidmFsdWVcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgICB0aXRsZSA9IHF1ZXVlXG4gICAgcXVldWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICBpZiAoc2lsZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGJlZm9yZVVSTCA9IGVhdChiZWZvcmVVUkwpLnRlc3QoKS5lbmRcbiAgICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBiZWZvcmVVUkwsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pXG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGJlZm9yZVRpdGxlID0gZWF0KGJlZm9yZVRpdGxlKS50ZXN0KCkuZW5kXG4gICAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2RlZmluaXRpb24nLFxuICAgICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpLFxuICAgICAgbGFiZWw6IGlkZW50aWZpZXIsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIGVuY2xvc2VkIFVSSS5cbmZ1bmN0aW9uIGlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiAoXG4gICAgY2hhcmFjdGVyICE9PSBncmVhdGVyVGhhbiAmJlxuICAgIGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldFxuICApXG59XG5cbmlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIuZGVsaW1pdGVyID0gZ3JlYXRlclRoYW5cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgY2FuIGJlIGluc2lkZSBhbiB1bmNsb3NlZCBVUkkuXG5mdW5jdGlvbiBpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gKFxuICAgIGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCAmJlxuICAgICF3aGl0ZXNwYWNlKGNoYXJhY3RlcilcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9kZWxldGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcbnN0cmlrZXRocm91Z2gubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgdGlsZGUgPSAnfidcbnZhciBmZW5jZSA9ICd+fidcblxuZnVuY3Rpb24gc3RyaWtldGhyb3VnaChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGFyYWN0ZXIgPSAnJ1xuICB2YXIgcHJldmlvdXMgPSAnJ1xuICB2YXIgcHJlY2VkaW5nID0gJydcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIG5vd1xuXG4gIGlmIChcbiAgICAhc2VsZi5vcHRpb25zLmdmbSB8fFxuICAgIHZhbHVlLmNoYXJBdCgwKSAhPT0gdGlsZGUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoMSkgIT09IHRpbGRlIHx8XG4gICAgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoMikpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXggPSAxXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSAyXG4gIG5vdy5vZmZzZXQgKz0gMlxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSB0aWxkZSAmJlxuICAgICAgcHJldmlvdXMgPT09IHRpbGRlICYmXG4gICAgICAoIXByZWNlZGluZyB8fCAhd2hpdGVzcGFjZShwcmVjZWRpbmcpKVxuICAgICkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KGZlbmNlICsgc3VidmFsdWUgKyBmZW5jZSkoe1xuICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcHJldmlvdXNcbiAgICBwcmVjZWRpbmcgPSBwcmV2aW91c1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lbWFpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1haWxcbmVtYWlsLmxvY2F0b3IgPSBsb2NhdGVcbmVtYWlsLm5vdEluTGluayA9IHRydWVcblxudmFyIHBsdXNTaWduID0gNDMgLy8gJysnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIGF0U2lnbiA9IDY0IC8vICdAJ1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcblxuZnVuY3Rpb24gZW1haWwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGZpcnN0RG90ID0gLTFcbiAgdmFyIGNvZGVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGNoaWxkcmVuXG4gIHZhciBleGl0XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gIHdoaWxlIChcbiAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gcGx1c1NpZ24gfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gZG90IHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdCgrK2luZGV4KVxuICB9XG5cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY29kZSAhPT0gYXRTaWduKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICAgIGNvZGUgPT09IGRvdCB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICAgICkge1xuICAgICAgaW5kZXgrK1xuXG4gICAgICBpZiAoZmlyc3REb3QgPT09IC0xICYmIGNvZGUgPT09IGRvdCkge1xuICAgICAgICBmaXJzdERvdCA9IGluZGV4XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgYnJlYWtcbiAgfVxuXG4gIGlmIChcbiAgICBmaXJzdERvdCA9PT0gLTEgfHxcbiAgICBmaXJzdERvdCA9PT0gaW5kZXggfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICBpbmRleC0tXG4gIH1cblxuICBjb250ZW50ID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIHVybC5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cbiAgY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSlcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoY29udGVudCkoe1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6ICdtYWlsdG86JyArIGRlY29kZShjb250ZW50LCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHdvcmQgPSByZXF1aXJlKCdpcy13b3JkLWNoYXJhY3RlcicpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZW1waGFzaXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5lbXBoYXNpcy5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuZnVuY3Rpb24gZW1waGFzaXMoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBub3dcbiAgdmFyIHBlZGFudGljXG4gIHZhciBtYXJrZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgbGVuZ3RoXG4gIHZhciBwcmV2aW91c1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgc3VidmFsdWUgPSBjaGFyYWN0ZXJcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBpbmRleCsrXG4gIHF1ZXVlID0gJydcbiAgY2hhcmFjdGVyID0gJydcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIgJiYgKCFwZWRhbnRpYyB8fCAhd2hpdGVzcGFjZShwcmV2aW91cykpKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGlmICghdHJpbShxdWV1ZSkgfHwgcHJldmlvdXMgPT09IG1hcmtlcikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwZWRhbnRpYyAmJiBtYXJrZXIgPT09IHVuZGVyc2NvcmUgJiYgd29yZChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KClcbiAgICAgICAgbm93LmNvbHVtbisrXG4gICAgICAgIG5vdy5vZmZzZXQrK1xuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIG1hcmtlcikoe1xuICAgICAgICAgIHR5cGU6ICdlbXBoYXNpcycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gbWFya2VyXG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VzY2FwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlXG5lc2NhcGUubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG5mdW5jdGlvbiBlc2NhcGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBub2RlXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSA9PT0gYmFja3NsYXNoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDEpXG5cbiAgICBpZiAoc2VsZi5lc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpICE9PSAtMSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBub2RlID0ge3R5cGU6ICdicmVhayd9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0ge3R5cGU6ICd0ZXh0JywgdmFsdWU6IGNoYXJhY3Rlcn1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChiYWNrc2xhc2ggKyBjaGFyYWN0ZXIpKG5vZGUpXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdHhIZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIG51bWJlclNpZ24gPSAnIydcblxudmFyIG1heEZlbmNlQ291bnQgPSA2XG5cbmZ1bmN0aW9uIGF0eEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudCA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBkZXB0aFxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFYXQgaGFzaGVzLlxuICBkZXB0aCA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8PSBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBudW1iZXJTaWduKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGRlcHRoKytcbiAgfVxuXG4gIGlmIChkZXB0aCA+IG1heEZlbmNlQ291bnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghZGVwdGggfHwgKCFwZWRhbnRpYyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbnVtYmVyU2lnbikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcblxuICAvLyBFYXQgaW50ZXJtZWRpYXRlIHdoaXRlLXNwYWNlLlxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiBub3QgaW4gcGVkYW50aWMgbW9kZSB3aXRob3V0IHNwYWNpbmcuXG4gIGlmICghcGVkYW50aWMgJiYgcXVldWUubGVuZ3RoID09PSAwICYmIGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG4gIGNvbnRlbnQgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IG51bWJlclNpZ24pIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgLy8gYCNgIHdpdGhvdXQgYSBxdWV1ZSBpcyBwYXJ0IG9mIHRoZSBjb250ZW50LlxuICAgIGlmICghcGVkYW50aWMgJiYgY29udGVudCAmJiAhcXVldWUgJiYgY2hhcmFjdGVyID09PSBudW1iZXJTaWduKSB7XG4gICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBudW1iZXJTaWduKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIGluZGV4LS1cbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldGV4dEhlYWRpbmdcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgZXF1YWxzVG8gPSAnPSdcbnZhciBkYXNoID0gJy0nXG5cbnZhciBtYXhJbmRlbnQgPSAzXG5cbnZhciBlcXVhbHNUb0RlcHRoID0gMVxudmFyIGRhc2hEZXB0aCA9IDJcblxuZnVuY3Rpb24gc2V0ZXh0SGVhZGluZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudFxuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBkZXB0aFxuXG4gIC8vIEVhdCBpbml0aWFsIGluZGVudGF0aW9uLlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlIHx8IGluZGV4ID49IG1heEluZGVudCkge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICBjb250ZW50ID0gJydcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgc3VidmFsdWUgKz0gY29udGVudCArIHF1ZXVlXG5cbiAgLy8gRW5zdXJlIHRoZSBjb250ZW50IGlzIGZvbGxvd2VkIGJ5IGEgbmV3bGluZSBhbmQgYSB2YWxpZCBtYXJrZXIuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICBtYXJrZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCB8fCAobWFya2VyICE9PSBlcXVhbHNUbyAmJiBtYXJrZXIgIT09IGRhc2gpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcblxuICAvLyBFYXQgU2V0ZXh0LWxpbmUuXG4gIHF1ZXVlID0gbWFya2VyXG4gIGRlcHRoID0gbWFya2VyID09PSBlcXVhbHNUbyA/IGVxdWFsc1RvRGVwdGggOiBkYXNoRGVwdGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSkoe1xuICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvcGVuQ2xvc2VUYWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS5vcGVuQ2xvc2VUYWdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja0h0bWxcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbGVzc1RoYW4gPSAnPCdcblxudmFyIHJhd09wZW5FeHByZXNzaW9uID0gL148KHNjcmlwdHxwcmV8c3R5bGUpKD89KFxcc3w+fCQpKS9pXG52YXIgcmF3Q2xvc2VFeHByZXNzaW9uID0gLzxcXC8oc2NyaXB0fHByZXxzdHlsZSk+L2lcbnZhciBjb21tZW50T3BlbkV4cHJlc3Npb24gPSAvXjwhLS0vXG52YXIgY29tbWVudENsb3NlRXhwcmVzc2lvbiA9IC8tLT4vXG52YXIgaW5zdHJ1Y3Rpb25PcGVuRXhwcmVzc2lvbiA9IC9ePFxcPy9cbnZhciBpbnN0cnVjdGlvbkNsb3NlRXhwcmVzc2lvbiA9IC9cXD8+L1xudmFyIGRpcmVjdGl2ZU9wZW5FeHByZXNzaW9uID0gL148IVtBLVphLXpdL1xudmFyIGRpcmVjdGl2ZUNsb3NlRXhwcmVzc2lvbiA9IC8+L1xudmFyIGNkYXRhT3BlbkV4cHJlc3Npb24gPSAvXjwhXFxbQ0RBVEFcXFsvXG52YXIgY2RhdGFDbG9zZUV4cHJlc3Npb24gPSAvXV0+L1xudmFyIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24gPSAvXiQvXG52YXIgb3RoZXJFbGVtZW50T3BlbkV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKG9wZW5DbG9zZVRhZy5zb3VyY2UgKyAnXFxcXHMqJCcpXG5cbmZ1bmN0aW9uIGJsb2NrSHRtbChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBibG9ja3MgPSBzZWxmLm9wdGlvbnMuYmxvY2tzLmpvaW4oJ3wnKVxuICB2YXIgZWxlbWVudE9wZW5FeHByZXNzaW9uID0gbmV3IFJlZ0V4cChcbiAgICAnXjwvPygnICsgYmxvY2tzICsgJykoPz0oXFxcXHN8Lz8+fCQpKScsXG4gICAgJ2knXG4gIClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBuZXh0XG4gIHZhciBsaW5lXG4gIHZhciBvZmZzZXRcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgY291bnRcbiAgdmFyIHNlcXVlbmNlXG4gIHZhciBzdWJ2YWx1ZVxuXG4gIHZhciBzZXF1ZW5jZXMgPSBbXG4gICAgW3Jhd09wZW5FeHByZXNzaW9uLCByYXdDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtjb21tZW50T3BlbkV4cHJlc3Npb24sIGNvbW1lbnRDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtpbnN0cnVjdGlvbk9wZW5FeHByZXNzaW9uLCBpbnN0cnVjdGlvbkNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2RpcmVjdGl2ZU9wZW5FeHByZXNzaW9uLCBkaXJlY3RpdmVDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtjZGF0YU9wZW5FeHByZXNzaW9uLCBjZGF0YUNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2VsZW1lbnRPcGVuRXhwcmVzc2lvbiwgZWxlbWVudENsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW290aGVyRWxlbWVudE9wZW5FeHByZXNzaW9uLCBlbGVtZW50Q2xvc2VFeHByZXNzaW9uLCBmYWxzZV1cbiAgXVxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBsZXNzVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbmV4dCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dFxuICBsaW5lID0gdmFsdWUuc2xpY2UoaW5kZXgsIG5leHQpXG4gIG9mZnNldCA9IC0xXG4gIGNvdW50ID0gc2VxdWVuY2VzLmxlbmd0aFxuXG4gIHdoaWxlICgrK29mZnNldCA8IGNvdW50KSB7XG4gICAgaWYgKHNlcXVlbmNlc1tvZmZzZXRdWzBdLnRlc3QobGluZSkpIHtcbiAgICAgIHNlcXVlbmNlID0gc2VxdWVuY2VzW29mZnNldF1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFzZXF1ZW5jZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiBzZXF1ZW5jZVsyXVxuICB9XG5cbiAgaW5kZXggPSBuZXh0XG5cbiAgaWYgKCFzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICAgICAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dFxuICAgICAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSwgbmV4dClcblxuICAgICAgaWYgKHNlcXVlbmNlWzFdLnRlc3QobGluZSkpIHtcbiAgICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgICBpbmRleCA9IG5leHRcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJylcbnZhciB0YWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS50YWdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVIVE1MXG5pbmxpbmVIVE1MLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgcXVlc3Rpb25NYXJrID0gJz8nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgc2xhc2ggPSAnLydcblxudmFyIGh0bWxMaW5rT3BlbkV4cHJlc3Npb24gPSAvXjxhIC9pXG52YXIgaHRtbExpbmtDbG9zZUV4cHJlc3Npb24gPSAvXjxcXC9hPi9pXG5cbmZ1bmN0aW9uIGlubGluZUhUTUwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHN1YnZhbHVlXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gbGVzc1RoYW4gfHwgbGVuZ3RoIDwgMykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDEpXG5cbiAgaWYgKFxuICAgICFhbHBoYWJldGljYWwoY2hhcmFjdGVyKSAmJlxuICAgIGNoYXJhY3RlciAhPT0gcXVlc3Rpb25NYXJrICYmXG4gICAgY2hhcmFjdGVyICE9PSBleGNsYW1hdGlvbk1hcmsgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHNsYXNoXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5tYXRjaCh0YWcpXG5cbiAgaWYgKCFzdWJ2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbm90IHVzZWQgeWV0LiAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YnZhbHVlID0gc3VidmFsdWVbMF1cblxuICBpZiAoIXNlbGYuaW5MaW5rICYmIGh0bWxMaW5rT3BlbkV4cHJlc3Npb24udGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IHRydWVcbiAgfSBlbHNlIGlmIChzZWxmLmluTGluayAmJiBodG1sTGlua0Nsb3NlRXhwcmVzc2lvbi50ZXN0KHN1YnZhbHVlKSkge1xuICAgIHNlbGYuaW5MaW5rID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAnaHRtbCcsIHZhbHVlOiBzdWJ2YWx1ZX0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2xpbmsnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcbmxpbmsubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG5cbmZ1bmN0aW9uIGxpbmsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMClcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIGNsb3NlZFxuICB2YXIgY291bnRcbiAgdmFyIG9wZW5pbmdcbiAgdmFyIGJlZm9yZVVSTFxuICB2YXIgYmVmb3JlVGl0bGVcbiAgdmFyIHN1YnF1ZXVlXG4gIHZhciBoYXNNYXJrZXJcbiAgdmFyIGlzSW1hZ2VcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIG1hcmtlclxuICB2YXIgbGVuZ3RoXG4gIHZhciB0aXRsZVxuICB2YXIgZGVwdGhcbiAgdmFyIHF1ZXVlXG4gIHZhciB1cmxcbiAgdmFyIG5vd1xuICB2YXIgZXhpdFxuICB2YXIgbm9kZVxuXG4gIC8vIERldGVjdCB3aGV0aGVyIHRoaXMgaXMgYW4gaW1hZ2UuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGV4Y2xhbWF0aW9uTWFyaykge1xuICAgIGlzSW1hZ2UgPSB0cnVlXG4gICAgc3VidmFsdWUgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIC8vIEVhdCB0aGUgb3BlbmluZy5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiB0aGlzIGlzIGEgbGluayBhbmQgd2XigJlyZSBhbHJlYWR5IGluc2lkZSBhIGxpbmsuXG4gIGlmICghaXNJbWFnZSAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcbiAgaW5kZXgrK1xuXG4gIC8vIEVhdCB0aGUgY29udGVudC5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIG5vdyA9IGVhdC5ub3coKVxuICBkZXB0aCA9IDBcblxuICBub3cuY29sdW1uICs9IGluZGV4XG4gIG5vdy5vZmZzZXQgKz0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgc3VicXVldWUgPSBjaGFyYWN0ZXJcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICAvLyBJbmxpbmUtY29kZSBpbiBsaW5rIGNvbnRlbnQuXG4gICAgICBjb3VudCA9IDFcblxuICAgICAgd2hpbGUgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjb3VudCsrXG4gICAgICB9XG5cbiAgICAgIGlmICghb3BlbmluZykge1xuICAgICAgICBvcGVuaW5nID0gY291bnRcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gb3BlbmluZykge1xuICAgICAgICBvcGVuaW5nID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIC8vIEFsbG93IGJyYWNrZXRzIHRvIGJlIGVzY2FwZWQuXG4gICAgICBpbmRleCsrXG4gICAgICBzdWJxdWV1ZSArPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgICAvLyBJbiBHRk0gbW9kZSwgYnJhY2tldHMgaW4gY29kZSBzdGlsbCBjb3VudC4gIEluIGFsbCBvdGhlciBtb2RlcyxcbiAgICAgIC8vIHRoZXkgZG9u4oCZdC5cbiAgICAgIGRlcHRoKytcbiAgICB9IGVsc2UgaWYgKCghb3BlbmluZyB8fCBnZm0pICYmIGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBpZiAoZGVwdGgpIHtcbiAgICAgICAgZGVwdGgtLVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGxlZnRQYXJlbnRoZXNpc1xuICAgICAgICBjbG9zZWQgPSB0cnVlXG4gICAgICAgIGluZGV4KytcblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXVlICs9IHN1YnF1ZXVlXG4gICAgc3VicXVldWUgPSAnJ1xuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCB0aGUgY29udGVudCBjbG9zaW5nLlxuICBpZiAoIWNsb3NlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29udGVudCA9IHF1ZXVlXG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgc3VicXVldWVcbiAgaW5kZXgrK1xuXG4gIC8vIEVhdCB3aGl0ZS1zcGFjZS5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IHRoZSBVUkwuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgcXVldWUgPSAnJ1xuICBiZWZvcmVVUkwgPSBzdWJ2YWx1ZVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlc3NUaGFuKSB7XG4gICAgaW5kZXgrK1xuICAgIGJlZm9yZVVSTCArPSBsZXNzVGhhblxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBncmVhdGVyVGhhbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gbGVzc1RoYW4gKyBxdWV1ZSArIGdyZWF0ZXJUaGFuXG4gICAgdXJsID0gcXVldWVcbiAgICBpbmRleCsrXG4gIH0gZWxzZSB7XG4gICAgY2hhcmFjdGVyID0gbnVsbFxuICAgIHN1YnF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoXG4gICAgICAgIHN1YnF1ZXVlICYmXG4gICAgICAgIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmsgfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUgfHxcbiAgICAgICAgICAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICBpZiAoIXBlZGFudGljKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgZGVwdGgrK1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXB0aC0tXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBzdWJxdWV1ZVxuICAgICAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgdXJsID0gcXVldWVcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICB9XG5cbiAgLy8gRWF0IHdoaXRlLXNwYWNlLlxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBzdWJ2YWx1ZSArPSBxdWV1ZVxuXG4gIC8vIEVhdCB0aGUgdGl0bGUuXG4gIGlmIChcbiAgICBxdWV1ZSAmJlxuICAgIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmsgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSB8fFxuICAgICAgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpKVxuICApIHtcbiAgICBpbmRleCsrXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgcXVldWUgPSAnJ1xuICAgIG1hcmtlciA9IGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzID8gcmlnaHRQYXJlbnRoZXNpcyA6IGNoYXJhY3RlclxuICAgIGJlZm9yZVRpdGxlID0gc3VidmFsdWVcblxuICAgIC8vIEluIGNvbW1vbm1hcmstbW9kZSwgdGhpbmdzIGFyZSBwcmV0dHkgZWFzeTogdGhlIG1hcmtlciBjYW5ub3Qgb2NjdXJcbiAgICAvLyBpbnNpZGUgdGhlIHRpdGxlLiAgTm9uLWNvbW1vbm1hcmsgZG9lcywgaG93ZXZlciwgc3VwcG9ydCBuZXN0ZWRcbiAgICAvLyBkZWxpbWl0ZXJzLlxuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9XG5cbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aXRsZSA9IHF1ZXVlXG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnF1ZXVlID0gJydcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBpZiAoaGFzTWFya2VyKSB7XG4gICAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZVxuICAgICAgICAgICAgc3VicXVldWUgPSAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhc01hcmtlciA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICghaGFzTWFya2VyKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBtYXJrZXIgKyBzdWJxdWV1ZVxuICAgICAgICAgIHRpdGxlID0gcXVldWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IGVsc2UgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXVlICs9IG1hcmtlciArIHN1YnF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICAgICAgc3VicXVldWUgPSAnJ1xuICAgICAgICAgIGhhc01hcmtlciA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdWJ2YWx1ZSArPSByaWdodFBhcmVudGhlc2lzXG5cbiAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZCwge1xuICAgIG5vblRlcm1pbmF0ZWQ6IGZhbHNlXG4gIH0pXG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmRcbiAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpXG4gIH1cblxuICBub2RlID0ge1xuICAgIHR5cGU6IGlzSW1hZ2UgPyAnaW1hZ2UnIDogJ2xpbmsnLFxuICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgIHVybDogdXJsXG4gIH1cblxuICBpZiAoaXNJbWFnZSkge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbFxuICB9IGVsc2Uge1xuICAgIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gICAgbm9kZS5jaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICAgIGV4aXQoKVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBnZXRJbmRlbnQgPSByZXF1aXJlKCcuLi91dGlsL2dldC1pbmRlbnRhdGlvbicpXG52YXIgcmVtb3ZlSW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9yZW1vdmUtaW5kZW50YXRpb24nKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0XG5cbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBwbHVzU2lnbiA9ICcrJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBkb3QgPSAnLidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsb3dlcmNhc2VYID0gJ3gnXG5cbnZhciB0YWJTaXplID0gNFxudmFyIGxvb3NlTGlzdEl0ZW1FeHByZXNzaW9uID0gL1xcblxcbig/IVxccyokKS9cbnZhciB0YXNrSXRlbUV4cHJlc3Npb24gPSAvXlxcWyhbIFhcXHR4XSldWyBcXHRdL1xudmFyIGJ1bGxldEV4cHJlc3Npb24gPSAvXihbIFxcdF0qKShbKistXXxcXGQrWy4pXSkoIHsxLDR9KD8hICl8IHxcXHR8JHwoPz1cXG4pKShbXlxcbl0qKS9cbnZhciBwZWRhbnRpY0J1bGxldEV4cHJlc3Npb24gPSAvXihbIFxcdF0qKShbKistXXxcXGQrWy4pXSkoWyBcXHRdKykvXG52YXIgaW5pdGlhbEluZGVudEV4cHJlc3Npb24gPSAvXiggezEsNH18XFx0KT8vZ21cblxuZnVuY3Rpb24gbGlzdChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRMaXN0XG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3RhcnQgPSBudWxsXG4gIHZhciBzaXplID0gMFxuICB2YXIgcXVldWVcbiAgdmFyIG9yZGVyZWRcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBuZXh0SW5kZXhcbiAgdmFyIHN0YXJ0SW5kZXhcbiAgdmFyIHByZWZpeGVkXG4gIHZhciBjdXJyZW50TWFya2VyXG4gIHZhciBjb250ZW50XG4gIHZhciBsaW5lXG4gIHZhciBwcmV2aW91c0VtcHR5XG4gIHZhciBlbXB0eVxuICB2YXIgaXRlbXNcbiAgdmFyIGFsbExpbmVzXG4gIHZhciBlbXB0eUxpbmVzXG4gIHZhciBpdGVtXG4gIHZhciBlbnRlclRvcFxuICB2YXIgZXhpdEJsb2NrcXVvdGVcbiAgdmFyIHNwcmVhZCA9IGZhbHNlXG4gIHZhciBub2RlXG4gIHZhciBub3dcbiAgdmFyIGVuZFxuICB2YXIgaW5kZW50ZWRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHNpemUgKz0gdGFiU2l6ZSAtIChzaXplICUgdGFiU2l6ZSlcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgIHNpemUrK1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChzaXplID49IHRhYlNpemUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fCBjaGFyYWN0ZXIgPT09IHBsdXNTaWduIHx8IGNoYXJhY3RlciA9PT0gZGFzaCkge1xuICAgIG1hcmtlciA9IGNoYXJhY3RlclxuICAgIG9yZGVyZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIG9yZGVyZWQgPSB0cnVlXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgICFxdWV1ZSB8fFxuICAgICAgIShjaGFyYWN0ZXIgPT09IGRvdCB8fCAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhcnQgPSBwYXJzZUludChxdWV1ZSwgMTApXG4gICAgbWFya2VyID0gY2hhcmFjdGVyXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICBpZiAoXG4gICAgY2hhcmFjdGVyICE9PSBzcGFjZSAmJlxuICAgIGNoYXJhY3RlciAhPT0gdGFiICYmXG4gICAgKHBlZGFudGljIHx8IChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkICYmIGNoYXJhY3RlciAhPT0gJycpKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaW5kZXggPSAwXG4gIGl0ZW1zID0gW11cbiAgYWxsTGluZXMgPSBbXVxuICBlbXB0eUxpbmVzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICBwcmVmaXhlZCA9IGZhbHNlXG4gICAgaW5kZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIG5leHRJbmRleCA9IGxlbmd0aFxuICAgIH1cblxuICAgIGVuZCA9IGluZGV4ICsgdGFiU2l6ZVxuICAgIHNpemUgPSAwXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgIHNpemUgKz0gdGFiU2l6ZSAtIChzaXplICUgdGFiU2l6ZSlcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBzaXplKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA+PSB0YWJTaXplKSB7XG4gICAgICBpbmRlbnRlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoaXRlbSAmJiBzaXplID49IGl0ZW0uaW5kZW50KSB7XG4gICAgICBpbmRlbnRlZCA9IHRydWVcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgY3VycmVudE1hcmtlciA9IG51bGxcblxuICAgIGlmICghaW5kZW50ZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IHBsdXNTaWduIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gZGFzaFxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBzaXplKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlID0gJydcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgICBpZiAoIWRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cblxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgICAgIGluZGV4KytcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcXVldWUgJiZcbiAgICAgICAgICAoY2hhcmFjdGVyID09PSBkb3QgfHwgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlclxuICAgICAgICAgIHNpemUgKz0gcXVldWUubGVuZ3RoICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICBzaXplICs9IHRhYlNpemUgLSAoc2l6ZSAlIHRhYlNpemUpXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgICBlbmQgPSBpbmRleCArIHRhYlNpemVcblxuICAgICAgICAgIHdoaWxlIChpbmRleCA8IGVuZCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHNwYWNlKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgIHNpemUrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kICYmIHZhbHVlLmNoYXJBdChpbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgICAgICBpbmRleCAtPSB0YWJTaXplIC0gMVxuICAgICAgICAgICAgc2l6ZSAtPSB0YWJTaXplIC0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkICYmIGNoYXJhY3RlciAhPT0gJycpIHtcbiAgICAgICAgICBjdXJyZW50TWFya2VyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyICE9PSBjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbW1vbm1hcmsgJiYgIWluZGVudGVkICYmIHZhbHVlLmNoYXJBdChzdGFydEluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgaW5kZW50ZWQgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGNvbW1vbm1hcmsgJiYgaXRlbSkge1xuICAgICAgICBpbmRlbnRlZCA9IHNpemUgPj0gaXRlbS5pbmRlbnQgfHwgc2l6ZSA+IHRhYlNpemVcbiAgICAgIH1cblxuICAgICAgcHJlZml4ZWQgPSBmYWxzZVxuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgfVxuXG4gICAgbGluZSA9IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleClcbiAgICBjb250ZW50ID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBsaW5lIDogdmFsdWUuc2xpY2UoaW5kZXgsIG5leHRJbmRleClcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSB1bmRlcnNjb3JlIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSBkYXNoXG4gICAgKSB7XG4gICAgICBpZiAodG9rZW5pemVycy50aGVtYXRpY0JyZWFrLmNhbGwoc2VsZiwgZWF0LCBsaW5lLCB0cnVlKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzRW1wdHkgPSBlbXB0eVxuICAgIGVtcHR5ID0gIXByZWZpeGVkICYmICF0cmltKGNvbnRlbnQpLmxlbmd0aFxuXG4gICAgaWYgKGluZGVudGVkICYmIGl0ZW0pIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH0gZWxzZSBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGlmIChlbXB0eUxpbmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzcHJlYWQgPSB0cnVlXG4gICAgICAgIGl0ZW0udmFsdWUucHVzaCgnJylcbiAgICAgICAgaXRlbS50cmFpbCA9IGVtcHR5TGluZXMuY29uY2F0KClcbiAgICAgIH1cblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdmFsdWU6IFtsaW5lXSxcbiAgICAgICAgaW5kZW50OiBzaXplLFxuICAgICAgICB0cmFpbDogW11cbiAgICAgIH1cblxuICAgICAgaXRlbXMucHVzaChpdGVtKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH0gZWxzZSBpZiAoZW1wdHkpIHtcbiAgICAgIGlmIChwcmV2aW91c0VtcHR5ICYmICFjb21tb25tYXJrKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGVtcHR5TGluZXMucHVzaChsaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldmlvdXNFbXB0eSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoaW50ZXJydXB0KGludGVydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCBsaW5lLCB0cnVlXSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfVxuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxXG4gIH1cblxuICBub2RlID0gZWF0KGFsbExpbmVzLmpvaW4obGluZUZlZWQpKS5yZXNldCh7XG4gICAgdHlwZTogJ2xpc3QnLFxuICAgIG9yZGVyZWQ6IG9yZGVyZWQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHNwcmVhZDogc3ByZWFkLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9KVxuXG4gIGVudGVyVG9wID0gc2VsZi5lbnRlckxpc3QoKVxuICBleGl0QmxvY2txdW90ZSA9IHNlbGYuZW50ZXJCbG9jaygpXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpdGVtID0gaXRlbXNbaW5kZXhdLnZhbHVlLmpvaW4obGluZUZlZWQpXG4gICAgbm93ID0gZWF0Lm5vdygpXG5cbiAgICBlYXQoaXRlbSkobGlzdEl0ZW0oc2VsZiwgaXRlbSwgbm93KSwgbm9kZSlcblxuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udHJhaWwuam9pbihsaW5lRmVlZClcblxuICAgIGlmIChpbmRleCAhPT0gbGVuZ3RoIC0gMSkge1xuICAgICAgaXRlbSArPSBsaW5lRmVlZFxuICAgIH1cblxuICAgIGVhdChpdGVtKVxuICB9XG5cbiAgZW50ZXJUb3AoKVxuICBleGl0QmxvY2txdW90ZSgpXG5cbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBmbiA9IGN0eC5vcHRpb25zLnBlZGFudGljID8gcGVkYW50aWNMaXN0SXRlbSA6IG5vcm1hbExpc3RJdGVtXG4gIHZhciBjaGVja2VkID0gbnVsbFxuICB2YXIgdGFza1xuICB2YXIgaW5kZW50XG5cbiAgdmFsdWUgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgaWYgKGN0eC5vcHRpb25zLmdmbSkge1xuICAgIHRhc2sgPSB2YWx1ZS5tYXRjaCh0YXNrSXRlbUV4cHJlc3Npb24pXG5cbiAgICBpZiAodGFzaykge1xuICAgICAgaW5kZW50ID0gdGFza1swXS5sZW5ndGhcbiAgICAgIGNoZWNrZWQgPSB0YXNrWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyY2FzZVhcbiAgICAgIG9mZnNldHNbcG9zaXRpb24ubGluZV0gKz0gaW5kZW50XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgc3ByZWFkOiBsb29zZUxpc3RJdGVtRXhwcmVzc2lvbi50ZXN0KHZhbHVlKSxcbiAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgIGNoaWxkcmVuOiBjdHgudG9rZW5pemVCbG9jayh2YWx1ZSwgcG9zaXRpb24pXG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIG92ZXJseSBzaW1wbGUgbWVjaGFuaWNzLlxuZnVuY3Rpb24gcGVkYW50aWNMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG5cbiAgLy8gUmVtb3ZlIHRoZSBsaXN0LWl0ZW3igJlzIGJ1bGxldC5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHBlZGFudGljQnVsbGV0RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgLy8gVGhlIGluaXRpYWwgbGluZSB3YXMgYWxzbyBtYXRjaGVkIGJ5IHRoZSBiZWxvdywgc28gd2UgcmVzZXQgdGhlIGBsaW5lYC5cbiAgbGluZSA9IHBvc2l0aW9uLmxpbmVcblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShpbml0aWFsSW5kZW50RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgLy8gQSBzaW1wbGUgcmVwbGFjZXIgd2hpY2ggcmVtb3ZlZCBhbGwgbWF0Y2hlcywgYW5kIGFkZHMgdGhlaXIgbGVuZ3RoIHRvXG4gIC8vIGBvZmZzZXRgLlxuICBmdW5jdGlvbiByZXBsYWNlcigkMCkge1xuICAgIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArICQwLmxlbmd0aFxuICAgIGxpbmUrK1xuXG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIHNhbmUgbWVjaGFuaWNzLlxuZnVuY3Rpb24gbm9ybWFsTGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuICB2YXIgbWF4XG4gIHZhciBidWxsZXRcbiAgdmFyIHJlc3RcbiAgdmFyIGxpbmVzXG4gIHZhciB0cmltbWVkTGluZXNcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICAvLyBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoYnVsbGV0RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgbGluZXMgPSB2YWx1ZS5zcGxpdChsaW5lRmVlZClcblxuICB0cmltbWVkTGluZXMgPSByZW1vdmVJbmRlbnQodmFsdWUsIGdldEluZGVudChtYXgpLmluZGVudCkuc3BsaXQobGluZUZlZWQpXG5cbiAgLy8gV2UgcmVwbGFjZWQgdGhlIGluaXRpYWwgYnVsbGV0IHdpdGggc29tZXRoaW5nIGVsc2UgYWJvdmUsIHdoaWNoIHdhcyB1c2VkXG4gIC8vIHRvIHRyaWNrIGByZW1vdmVJbmRlbnRhdGlvbmAgaW50byByZW1vdmluZyBzb21lIG1vcmUgY2hhcmFjdGVycyB3aGVuXG4gIC8vIHBvc3NpYmxlLiAgSG93ZXZlciwgdGhhdCBjb3VsZCByZXN1bHQgaW4gdGhlIGluaXRpYWwgbGluZSB0byBiZSBzdHJpcHBlZFxuICAvLyBtb3JlIHRoYW4gaXQgc2hvdWxkIGJlLlxuICB0cmltbWVkTGluZXNbMF0gPSByZXN0XG5cbiAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgYnVsbGV0Lmxlbmd0aFxuICBsaW5lKytcblxuICBpbmRleCA9IDBcbiAgbGVuZ3RoID0gbGluZXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBvZmZzZXRzW2xpbmVdID1cbiAgICAgIChvZmZzZXRzW2xpbmVdIHx8IDApICsgbGluZXNbaW5kZXhdLmxlbmd0aCAtIHRyaW1tZWRMaW5lc1tpbmRleF0ubGVuZ3RoXG4gICAgbGluZSsrXG4gIH1cblxuICByZXR1cm4gdHJpbW1lZExpbmVzLmpvaW4obGluZUZlZWQpXG5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXMgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZXIoJDAsICQxLCAkMiwgJDMsICQ0KSB7XG4gICAgYnVsbGV0ID0gJDEgKyAkMiArICQzXG4gICAgcmVzdCA9ICQ0XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgZmlyc3QgbmluZSBudW1iZXJlZCBsaXN0IGl0ZW1zIGNhbiBpbmRlbnQgd2l0aCBhblxuICAgIC8vIGV4dHJhIHNwYWNlLiAgVGhhdCBpcywgd2hlbiB0aGUgYnVsbGV0IGRpZCBub3QgcmVjZWl2ZSBhbiBleHRyYSBmaW5hbFxuICAgIC8vIHNwYWNlLlxuICAgIGlmIChOdW1iZXIoJDIpIDwgMTAgJiYgYnVsbGV0Lmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICQyID0gc3BhY2UgKyAkMlxuICAgIH1cblxuICAgIG1heCA9ICQxICsgcmVwZWF0KHNwYWNlLCAkMi5sZW5ndGgpICsgJDNcblxuICAgIHJldHVybiBtYXggKyByZXN0XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciB0cmltVHJhaWxpbmdMaW5lcyA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciB0YWJTaXplID0gNFxuXG4vLyBUb2tlbmlzZSBwYXJhZ3JhcGguXG5mdW5jdGlvbiBwYXJhZ3JhcGgoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2V0dGluZ3MgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZXR0aW5ncy5jb21tb25tYXJrXG4gIHZhciBnZm0gPSBzZXR0aW5ncy5nZm1cbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRQYXJhZ3JhcGhcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgcG9zaXRpb25cbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHNpemVcbiAgdmFyIG5vd1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIEVhdCBldmVyeXRoaW5nIGlmIHRoZXJl4oCZcyBubyBmb2xsb3dpbmcgbmV3bGluZS5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGxlbmd0aFxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBORVdMSU5FLlxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gSW4gY29tbW9ubWFyay1tb2RlLCBmb2xsb3dpbmcgaW5kZW50ZWQgbGluZXMgYXJlIHBhcnQgb2YgdGhlIHBhcmFncmFwaC5cbiAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgc2l6ZSA9IDBcbiAgICAgIHBvc2l0aW9uID0gaW5kZXggKyAxXG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgICAgc2l6ZSA9IHRhYlNpemVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgICBzaXplKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24rK1xuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA+PSB0YWJTaXplICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZShpbmRleCArIDEpXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZm9sbG93aW5nIGNvZGUgY29udGFpbnMgYSBwb3NzaWJsZSBibG9jay5cbiAgICBpZiAoaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgc3VidmFsdWUsIHRydWVdKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBCcmVhayBpZiB0aGUgZm9sbG93aW5nIGxpbmUgc3RhcnRzIGEgbGlzdCwgd2hlbiBhbHJlYWR5IGluIGEgbGlzdCwgb3JcbiAgICAvLyB3aGVuIGluIGNvbW1vbm1hcmssIG9yIHdoZW4gaW4gZ2ZtIG1vZGUgYW5kIHRoZSBidWxsZXQgaXMgKm5vdCogbnVtZXJpYy5cbiAgICBpZiAoXG4gICAgICB0b2tlbml6ZXJzLmxpc3QuY2FsbChzZWxmLCBlYXQsIHN1YnZhbHVlLCB0cnVlKSAmJlxuICAgICAgKHNlbGYuaW5MaXN0IHx8XG4gICAgICAgIGNvbW1vbm1hcmsgfHxcbiAgICAgICAgKGdmbSAmJiAhZGVjaW1hbCh0cmltLmxlZnQoc3VidmFsdWUpLmNoYXJBdCgwKSkpKVxuICAgICkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IGluZGV4XG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG5cbiAgICBpZiAoaW5kZXggIT09IC0xICYmIHRyaW0odmFsdWUuc2xpY2UocG9zaXRpb24sIGluZGV4KSkgPT09ICcnKSB7XG4gICAgICBpbmRleCA9IHBvc2l0aW9uXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBzdWJ2YWx1ZSA9IHRyaW1UcmFpbGluZ0xpbmVzKHN1YnZhbHVlKVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShzdWJ2YWx1ZSwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9saW5rJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVmZXJlbmNlXG5yZWZlcmVuY2UubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluayA9ICdsaW5rJ1xudmFyIGltYWdlID0gJ2ltYWdlJ1xudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG52YXIgZnVsbCA9ICdmdWxsJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgwKVxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGludHJvID0gJydcbiAgdmFyIHR5cGUgPSBsaW5rXG4gIHZhciByZWZlcmVuY2VUeXBlID0gc2hvcnRjdXRcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGlkZW50aWZpZXJcbiAgdmFyIG5vd1xuICB2YXIgbm9kZVxuICB2YXIgZXhpdFxuICB2YXIgcXVldWVcbiAgdmFyIGJyYWNrZXRlZFxuICB2YXIgZGVwdGhcblxuICAvLyBDaGVjayB3aGV0aGVyIHdl4oCZcmUgZWF0aW5nIGFuIGltYWdlLlxuICBpZiAoY2hhcmFjdGVyID09PSBleGNsYW1hdGlvbk1hcmspIHtcbiAgICB0eXBlID0gaW1hZ2VcbiAgICBpbnRybyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgaW50cm8gKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICAvLyBFYXQgdGhlIHRleHQuXG4gIGRlcHRoID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBicmFja2V0ZWQgPSB0cnVlXG4gICAgICBkZXB0aCsrXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgaWYgKCFkZXB0aCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZXB0aC0tXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIHN1YnZhbHVlID0gcXVldWVcbiAgY29udGVudCA9IHF1ZXVlXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICBpZiAoIWNvbW1vbm1hcmspIHtcbiAgICAvLyBUaGUgb3JpZ2luYWwgbWFya2Rvd24gc3ludGF4IGRlZmluaXRpb24gZXhwbGljaXRseSBhbGxvd3MgZm9yIHdoaXRlc3BhY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBsaW5rIHRleHQgYW5kIGxpbmsgbGFiZWw7IGNvbW1vbm1hcmsgZGVwYXJ0cyBmcm9tIHRoaXMsIGluXG4gICAgLy8gcGFydCB0byBpbXByb3ZlIHN1cHBvcnQgZm9yIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rc1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICBpZGVudGlmaWVyID0gJydcbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQgfHwgY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgIGlkZW50aWZpZXIgKz0gYmFja3NsYXNoXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgfVxuXG4gICAgICBpZGVudGlmaWVyICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgcmVmZXJlbmNlVHlwZSA9IGlkZW50aWZpZXIgPyBmdWxsIDogY29sbGFwc2VkXG4gICAgICBxdWV1ZSArPSBpZGVudGlmaWVyICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkZW50aWZpZXIgPSAnJ1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgcXVldWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWRlbnRpZmllciA9IGNvbnRlbnRcbiAgfVxuXG4gIC8vIEJyYWNrZXRzIGNhbm5vdCBiZSBpbnNpZGUgdGhlIGlkZW50aWZpZXIuXG4gIGlmIChyZWZlcmVuY2VUeXBlICE9PSBmdWxsICYmIGJyYWNrZXRlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgPSBpbnRybyArIHN1YnZhbHVlXG5cbiAgaWYgKHR5cGUgPT09IGxpbmsgJiYgc2VsZi5pbkxpbmspIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IGludHJvLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IGludHJvLmxlbmd0aFxuICBpZGVudGlmaWVyID0gcmVmZXJlbmNlVHlwZSA9PT0gZnVsbCA/IGlkZW50aWZpZXIgOiBjb250ZW50XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiB0eXBlICsgJ1JlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpLFxuICAgIGxhYmVsOiBpZGVudGlmaWVyLFxuICAgIHJlZmVyZW5jZVR5cGU6IHJlZmVyZW5jZVR5cGVcbiAgfVxuXG4gIGlmICh0eXBlID09PSBsaW5rKSB7XG4gICAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gICAgZXhpdCgpXG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKShub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvc3Ryb25nJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcbnN0cm9uZy5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcblxuZnVuY3Rpb24gc3Ryb25nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgbm93XG4gIHZhciBwZWRhbnRpY1xuICB2YXIgbWFya2VyXG4gIHZhciBxdWV1ZVxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGxlbmd0aFxuICB2YXIgcHJldmlvdXNcblxuICBpZiAoXG4gICAgKGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiYgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlKSB8fFxuICAgIHZhbHVlLmNoYXJBdCgrK2luZGV4KSAhPT0gY2hhcmFjdGVyXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIHN1YnZhbHVlID0gbWFya2VyICsgbWFya2VyXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBpbmRleCsrXG4gIHF1ZXVlID0gJydcbiAgY2hhcmFjdGVyID0gJydcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IG1hcmtlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IG1hcmtlciAmJlxuICAgICAgKCFwZWRhbnRpYyB8fCAhd2hpdGVzcGFjZShwcmV2aW91cykpXG4gICAgKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgaWYgKCF0cmltKHF1ZXVlKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdyA9IGVhdC5ub3coKVxuICAgICAgICBub3cuY29sdW1uICs9IDJcbiAgICAgICAgbm93Lm9mZnNldCArPSAyXG5cbiAgICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlICsgc3VidmFsdWUpKHtcbiAgICAgICAgICB0eXBlOiAnc3Ryb25nJyxcbiAgICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShxdWV1ZSwgbm93KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGVkYW50aWMgJiYgY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZGFzaCA9ICctJ1xudmFyIGNvbG9uID0gJzonXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgdmVydGljYWxCYXIgPSAnfCdcblxudmFyIG1pbkNvbHVtbnMgPSAxXG52YXIgbWluUm93cyA9IDJcblxudmFyIGxlZnQgPSAnbGVmdCdcbnZhciBjZW50ZXIgPSAnY2VudGVyJ1xudmFyIHJpZ2h0ID0gJ3JpZ2h0J1xuXG5mdW5jdGlvbiB0YWJsZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleFxuICB2YXIgYWxpZ25tZW50c1xuICB2YXIgYWxpZ25tZW50XG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcm93XG4gIHZhciBsZW5ndGhcbiAgdmFyIGxpbmVzXG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBoYXNEYXNoXG4gIHZhciBhbGlnblxuICB2YXIgY2VsbFxuICB2YXIgcHJlYW1ibGVcbiAgdmFyIG5vd1xuICB2YXIgcG9zaXRpb25cbiAgdmFyIGxpbmVDb3VudFxuICB2YXIgbGluZVxuICB2YXIgcm93c1xuICB2YXIgdGFibGVcbiAgdmFyIGxpbmVJbmRleFxuICB2YXIgcGlwZUluZGV4XG4gIHZhciBmaXJzdFxuXG4gIC8vIEV4aXQgd2hlbiBub3QgaW4gZ2ZtLW1vZGUuXG4gIGlmICghc2VsZi5vcHRpb25zLmdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gR2V0IHRoZSByb3dzLlxuICAvLyBEZXRlY3RpbmcgdGFibGVzIHNvb24gaXMgaGFyZCwgc28gdGhlcmUgYXJlIHNvbWUgY2hlY2tzIGZvciBwZXJmb3JtYW5jZVxuICAvLyBoZXJlLCBzdWNoIGFzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzLCBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzIGluIHRoZVxuICAvLyBhbGlnbm1lbnQgcm93LlxuICBpbmRleCA9IDBcbiAgbGluZUNvdW50ID0gMFxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIGxpbmVzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBsaW5lSW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBwaXBlSW5kZXggPSB2YWx1ZS5pbmRleE9mKHZlcnRpY2FsQmFyLCBpbmRleCArIDEpXG5cbiAgICBpZiAobGluZUluZGV4ID09PSAtMSkge1xuICAgICAgbGluZUluZGV4ID0gdmFsdWUubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKHBpcGVJbmRleCA9PT0gLTEgfHwgcGlwZUluZGV4ID4gbGluZUluZGV4KSB7XG4gICAgICBpZiAobGluZUNvdW50IDwgbWluUm93cykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsaW5lcy5wdXNoKHZhbHVlLnNsaWNlKGluZGV4LCBsaW5lSW5kZXgpKVxuICAgIGxpbmVDb3VudCsrXG4gICAgaW5kZXggPSBsaW5lSW5kZXggKyAxXG4gIH1cblxuICAvLyBQYXJzZSB0aGUgYWxpZ25tZW50IHJvdy5cbiAgc3VidmFsdWUgPSBsaW5lcy5qb2luKGxpbmVGZWVkKVxuICBhbGlnbm1lbnRzID0gbGluZXMuc3BsaWNlKDEsIDEpWzBdIHx8IFtdXG4gIGluZGV4ID0gMFxuICBsZW5ndGggPSBhbGlnbm1lbnRzLmxlbmd0aFxuICBsaW5lQ291bnQtLVxuICBhbGlnbm1lbnQgPSBmYWxzZVxuICBhbGlnbiA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gYWxpZ25tZW50cy5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSB2ZXJ0aWNhbEJhcikge1xuICAgICAgaGFzRGFzaCA9IG51bGxcblxuICAgICAgaWYgKGFsaWdubWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbi5wdXNoKGFsaWdubWVudClcbiAgICAgICAgYWxpZ25tZW50ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZmlyc3QgPSBmYWxzZVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBkYXNoKSB7XG4gICAgICBoYXNEYXNoID0gdHJ1ZVxuICAgICAgYWxpZ25tZW50ID0gYWxpZ25tZW50IHx8IG51bGxcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gY29sb24pIHtcbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IGxlZnQpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gY2VudGVyXG4gICAgICB9IGVsc2UgaWYgKGhhc0Rhc2ggJiYgYWxpZ25tZW50ID09PSBudWxsKSB7XG4gICAgICAgIGFsaWdubWVudCA9IHJpZ2h0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbm1lbnQgPSBsZWZ0XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoYWxpZ25tZW50ICE9PSBmYWxzZSkge1xuICAgIGFsaWduLnB1c2goYWxpZ25tZW50KVxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIHdpdGhvdXQgZW5vdWdoIGNvbHVtbnMuXG4gIGlmIChhbGlnbi5sZW5ndGggPCBtaW5Db2x1bW5zKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gUGFyc2UgdGhlIHJvd3MuXG4gIHBvc2l0aW9uID0gLTFcbiAgcm93cyA9IFtdXG5cbiAgdGFibGUgPSBlYXQoc3VidmFsdWUpLnJlc2V0KHt0eXBlOiAndGFibGUnLCBhbGlnbjogYWxpZ24sIGNoaWxkcmVuOiByb3dzfSlcblxuICB3aGlsZSAoKytwb3NpdGlvbiA8IGxpbmVDb3VudCkge1xuICAgIGxpbmUgPSBsaW5lc1twb3NpdGlvbl1cbiAgICByb3cgPSB7dHlwZTogJ3RhYmxlUm93JywgY2hpbGRyZW46IFtdfVxuXG4gICAgLy8gRWF0IGEgbmV3bGluZSBjaGFyYWN0ZXIgd2hlbiB0aGlzIGlzIG5vdCB0aGUgZmlyc3Qgcm93LlxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgZWF0KGxpbmVGZWVkKVxuICAgIH1cblxuICAgIC8vIEVhdCB0aGUgcm93LlxuICAgIGVhdChsaW5lKS5yZXNldChyb3csIHRhYmxlKVxuXG4gICAgbGVuZ3RoID0gbGluZS5sZW5ndGggKyAxXG4gICAgaW5kZXggPSAwXG4gICAgcXVldWUgPSAnJ1xuICAgIGNlbGwgPSAnJ1xuICAgIHByZWFtYmxlID0gdHJ1ZVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSBsaW5lLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnJyB8fCBjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyKSB7XG4gICAgICAgIGlmIChwcmVhbWJsZSkge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKChjZWxsIHx8IGNoYXJhY3RlcikgJiYgIXByZWFtYmxlKSB7XG4gICAgICAgICAgICBzdWJ2YWx1ZSA9IGNlbGxcblxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlLnNsaWNlKDAsIC0xKVxuICAgICAgICAgICAgICAgIHF1ZXVlID0gcXVldWUuY2hhckF0KHF1ZXVlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICAgICAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm93ID0gZWF0Lm5vdygpXG5cbiAgICAgICAgICAgIGVhdChzdWJ2YWx1ZSkoXG4gICAgICAgICAgICAgIHt0eXBlOiAndGFibGVDZWxsJywgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY2VsbCwgbm93KX0sXG4gICAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVhdChxdWV1ZSArIGNoYXJhY3RlcilcblxuICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgICBjZWxsID0gJydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHF1ZXVlKSB7XG4gICAgICAgICAgY2VsbCArPSBxdWV1ZVxuICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwgKz0gY2hhcmFjdGVyXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoICYmIGluZGV4ICE9PSBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgY2VsbCArPSBsaW5lLmNoYXJBdChpbmRleCArIDEpXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZWFtYmxlID0gZmFsc2VcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICAvLyBFYXQgdGhlIGFsaWdubWVudCByb3cuXG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgZWF0KGxpbmVGZWVkICsgYWxpZ25tZW50cylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFibGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxuZnVuY3Rpb24gdGV4dChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBtZXRob2RzXG4gIHZhciB0b2tlbml6ZXJzXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcG9zaXRpb25cbiAgdmFyIHRva2VuaXplclxuICB2YXIgbmFtZVxuICB2YXIgbWluXG4gIHZhciBub3dcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWV0aG9kcyA9IHNlbGYuaW5saW5lTWV0aG9kc1xuICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIGluZGV4ID0gLTFcbiAgbWluID0gdmFsdWUubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBuYW1lID0gbWV0aG9kc1tpbmRleF1cblxuICAgIGlmIChuYW1lID09PSAndGV4dCcgfHwgIXRva2VuaXplcnNbbmFtZV0pIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdG9rZW5pemVyID0gdG9rZW5pemVyc1tuYW1lXS5sb2NhdG9yXG5cbiAgICBpZiAoIXRva2VuaXplcikge1xuICAgICAgZWF0LmZpbGUuZmFpbCgnTWlzc2luZyBsb2NhdG9yOiBgJyArIG5hbWUgKyAnYCcpXG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSB0b2tlbml6ZXIuY2FsbChzZWxmLCB2YWx1ZSwgMSlcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgcG9zaXRpb24gPCBtaW4pIHtcbiAgICAgIG1pbiA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBtaW4pXG4gIG5vdyA9IGVhdC5ub3coKVxuXG4gIHNlbGYuZGVjb2RlKHN1YnZhbHVlLCBub3csIGhhbmRsZXIpXG5cbiAgZnVuY3Rpb24gaGFuZGxlcihjb250ZW50LCBwb3NpdGlvbiwgc291cmNlKSB7XG4gICAgZWF0KHNvdXJjZSB8fCBjb250ZW50KSh7dHlwZTogJ3RleHQnLCB2YWx1ZTogY29udGVudH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciBkYXNoID0gJy0nXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xuXG52YXIgbWF4Q291bnQgPSAzXG5cbmZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgbWFya2VyQ291bnRcbiAgdmFyIHF1ZXVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGlmIChcbiAgICBjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmXG4gICAgY2hhcmFjdGVyICE9PSBkYXNoICYmXG4gICAgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBtYXJrZXJDb3VudCA9IDFcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICBtYXJrZXJDb3VudCsrXG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIG1hcmtlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG1hcmtlckNvdW50ID49IG1heENvdW50ICYmXG4gICAgICAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKVxuICAgICkge1xuICAgICAgc3VidmFsdWUgKz0gcXVldWVcblxuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ3RoZW1hdGljQnJlYWsnfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNjb3VudCA9IHJlcXVpcmUoJ2Njb3VudCcpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3VybCcpXG5cbm1vZHVsZS5leHBvcnRzID0gdXJsXG51cmwubG9jYXRvciA9IGxvY2F0ZVxudXJsLm5vdEluTGluayA9IHRydWVcblxudmFyIGV4Y2xhbWF0aW9uTWFyayA9IDMzIC8vICchJ1xudmFyIGFtcGVyc2FuZCA9IDM4IC8vICcmJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSA0MSAvLyAnKSdcbnZhciBhc3RlcmlzayA9IDQyIC8vICcqJ1xudmFyIGNvbW1hID0gNDQgLy8gJywnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIGNvbG9uID0gNTggLy8gJzonXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gJzsnXG52YXIgcXVlc3Rpb25NYXJrID0gNjMgLy8gJz8nXG52YXIgbGVzc1RoYW4gPSA2MCAvLyAnPCdcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG52YXIgdGlsZGUgPSAxMjYgLy8gJ34nXG5cbnZhciBsZWZ0UGFyZW50aGVzaXNDaGFyYWN0ZXIgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyID0gJyknXG5cbmZ1bmN0aW9uIHVybChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHByZXZpb3VzRG90ID0gLTFcbiAgdmFyIHByb3RvY29sbGVzcyA9IGZhbHNlXG4gIHZhciBkb3RzXG4gIHZhciBsYXN0VHdvUGFydHNTdGFydFxuICB2YXIgc3RhcnRcbiAgdmFyIGluZGV4XG4gIHZhciBwYXRoU3RhcnRcbiAgdmFyIHBhdGhcbiAgdmFyIGNvZGVcbiAgdmFyIGVuZFxuICB2YXIgbGVmdENvdW50XG4gIHZhciByaWdodENvdW50XG4gIHZhciBjb250ZW50XG4gIHZhciBjaGlsZHJlblxuICB2YXIgdXJsXG4gIHZhciBleGl0XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGBXV1cuYCBkb2VzbuKAmXQgd29yay5cbiAgaWYgKHZhbHVlLnNsaWNlKDAsIDQpID09PSAnd3d3LicpIHtcbiAgICBwcm90b2NvbGxlc3MgPSB0cnVlXG4gICAgaW5kZXggPSA0XG4gIH0gZWxzZSBpZiAodmFsdWUuc2xpY2UoMCwgNykudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHA6Ly8nKSB7XG4gICAgaW5kZXggPSA3XG4gIH0gZWxzZSBpZiAodmFsdWUuc2xpY2UoMCwgOCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHBzOi8vJykge1xuICAgIGluZGV4ID0gOFxuICB9IGVsc2Uge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQWN0IGFzIGlmIHRoZSBzdGFydGluZyBib3VuZGFyeSBpcyBhIGRvdC5cbiAgcHJldmlvdXNEb3QgPSBpbmRleCAtIDFcblxuICAvLyBQYXJzZSBhIHZhbGlkIGRvbWFpbi5cbiAgc3RhcnQgPSBpbmRleFxuICBkb3RzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICAgIC8vIERvdHMgbWF5IG5vdCBhcHBlYXIgYWZ0ZXIgZWFjaCBvdGhlci5cbiAgICAgIGlmIChwcmV2aW91c0RvdCA9PT0gaW5kZXggLSAxKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRvdHMucHVzaChpbmRleClcbiAgICAgIHByZXZpb3VzRG90ID0gaW5kZXhcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVjaW1hbChjb2RlKSB8fFxuICAgICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICAgKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGJyZWFrXG4gIH1cblxuICAvLyBJZ25vcmUgYSBmaW5hbCBkb3Q6XG4gIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICBkb3RzLnBvcCgpXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vdCBkb3RzLCBleGl0LlxuICBpZiAoZG90c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZiB0aGVyZSBpcyBhbiB1bmRlcnNjb3JlIGluIHRoZSBsYXN0IHR3byBkb21haW4gcGFydHMsIGV4aXQ6XG4gIC8vIGB3d3cuZXhhbXBsZS5jX21gIGFuZCBgd3d3LmV4X2FtcGxlLmNvbWAgYXJlIG5vdCBPSywgYnV0XG4gIC8vIGB3d3cuc3ViX2RvbWFpbi5leGFtcGxlLmNvbWAgaXMuXG4gIGxhc3RUd29QYXJ0c1N0YXJ0ID0gZG90cy5sZW5ndGggPCAyID8gc3RhcnQgOiBkb3RzW2RvdHMubGVuZ3RoIC0gMl0gKyAxXG5cbiAgaWYgKHZhbHVlLnNsaWNlKGxhc3RUd29QYXJ0c1N0YXJ0LCBpbmRleCkuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGVuZCA9IGluZGV4XG4gIHBhdGhTdGFydCA9IGluZGV4XG5cbiAgLy8gUGFyc2UgYSBwYXRoLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNvZGUpIHx8IGNvZGUgPT09IGxlc3NUaGFuKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcblxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGV4Y2xhbWF0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgIGNvZGUgPT09IGNvbW1hIHx8XG4gICAgICBjb2RlID09PSBkb3QgfHxcbiAgICAgIGNvZGUgPT09IGNvbG9uIHx8XG4gICAgICBjb2RlID09PSBxdWVzdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmUgfHxcbiAgICAgIGNvZGUgPT09IHRpbGRlXG4gICAgKSB7XG4gICAgICAvLyBFbXB0eVxuICAgIH0gZWxzZSB7XG4gICAgICBlbmQgPSBpbmRleFxuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gZW5kXG5cbiAgLy8gSWYgdGhlIHBhdGggZW5kcyBpbiBhIGNsb3NpbmcgcGFyZW4sIGFuZCB0aGUgY291bnQgb2YgY2xvc2luZyBwYXJlbnMgaXNcbiAgLy8gaGlnaGVyIHRoYW4gdGhlIG9wZW5pbmcgY291bnQsIHRoZW4gcmVtb3ZlIHRoZSBzdXBlZmx1b3VzIGNsb3NpbmcgcGFyZW5zLlxuICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgcGF0aCA9IHZhbHVlLnNsaWNlKHBhdGhTdGFydCwgaW5kZXgpXG4gICAgbGVmdENvdW50ID0gY2NvdW50KHBhdGgsIGxlZnRQYXJlbnRoZXNpc0NoYXJhY3RlcilcbiAgICByaWdodENvdW50ID0gY2NvdW50KHBhdGgsIHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG5cbiAgICB3aGlsZSAocmlnaHRDb3VudCA+IGxlZnRDb3VudCkge1xuICAgICAgaW5kZXggPSBwYXRoU3RhcnQgKyBwYXRoLmxhc3RJbmRleE9mKHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG4gICAgICBwYXRoID0gdmFsdWUuc2xpY2UocGF0aFN0YXJ0LCBpbmRleClcbiAgICAgIHJpZ2h0Q291bnQtLVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkgPT09IHNlbWljb2xvbikge1xuICAgIC8vIEdpdEh1YiBkb2VzbuKAmXQgZG9jdW1lbnQgdGhpcywgYnV0IGZpbmFsIHNlbWljb2xvbnMgYXJlbuKAmXQgcGFyZXQgb2YgdGhlXG4gICAgLy8gVVJMIGVpdGhlci5cbiAgICBpbmRleC0tXG5cbiAgICAvLyAvLyBJZiB0aGUgcGF0aCBlbmRzIGluIHdoYXQgbG9va3MgbGlrZSBhbiBlbnRpdHksIGl04oCZcyBub3QgcGFydCBvZiB0aGUgcGF0aC5cbiAgICBpZiAoYWxwaGFiZXRpY2FsKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSkpIHtcbiAgICAgIGVuZCA9IGluZGV4IC0gMlxuXG4gICAgICB3aGlsZSAoYWxwaGFiZXRpY2FsKHZhbHVlLmNoYXJDb2RlQXQoZW5kKSkpIHtcbiAgICAgICAgZW5kLS1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gYW1wZXJzYW5kKSB7XG4gICAgICAgIGluZGV4ID0gZW5kXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuICB1cmwgPSBkZWNvZGUoY29udGVudCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSlcblxuICBpZiAocHJvdG9jb2xsZXNzKSB7XG4gICAgdXJsID0gJ2h0dHA6Ly8nICsgdXJsXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiB1cmwuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG4gIGNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBlYXQubm93KCkpXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcblxuICBleGl0KClcblxuICByZXR1cm4gZWF0KGNvbnRlbnQpKHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6IHVybCwgY2hpbGRyZW46IGNoaWxkcmVufSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gQ29uc3RydWN0IGEgdG9rZW5pemVyLiAgVGhpcyBjcmVhdGVzIGJvdGggYHRva2VuaXplSW5saW5lYCBhbmQgYHRva2VuaXplQmxvY2tgLlxuZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gIHJldHVybiB0b2tlbml6ZVxuXG4gIC8vIFRva2VuaXplciBmb3IgYSBib3VuZCBgdHlwZWAuXG4gIGZ1bmN0aW9uIHRva2VuaXplKHZhbHVlLCBsb2NhdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBvZmZzZXQgPSBzZWxmLm9mZnNldFxuICAgIHZhciB0b2tlbnMgPSBbXVxuICAgIHZhciBtZXRob2RzID0gc2VsZlt0eXBlICsgJ01ldGhvZHMnXVxuICAgIHZhciB0b2tlbml6ZXJzID0gc2VsZlt0eXBlICsgJ1Rva2VuaXplcnMnXVxuICAgIHZhciBsaW5lID0gbG9jYXRpb24ubGluZVxuICAgIHZhciBjb2x1bW4gPSBsb2NhdGlvbi5jb2x1bW5cbiAgICB2YXIgaW5kZXhcbiAgICB2YXIgbGVuZ3RoXG4gICAgdmFyIG1ldGhvZFxuICAgIHZhciBuYW1lXG4gICAgdmFyIG1hdGNoZWRcbiAgICB2YXIgdmFsdWVMZW5ndGhcblxuICAgIC8vIFRyaW0gd2hpdGUgc3BhY2Ugb25seSBsaW5lcy5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9rZW5zXG4gICAgfVxuXG4gICAgLy8gRXhwb3NlIG9uIGBlYXRgLlxuICAgIGVhdC5ub3cgPSBub3dcbiAgICBlYXQuZmlsZSA9IHNlbGYuZmlsZVxuXG4gICAgLy8gU3luYyBpbml0aWFsIG9mZnNldC5cbiAgICB1cGRhdGVQb3NpdGlvbignJylcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBgdmFsdWVgLCBhbmQgaXRlcmF0ZSBvdmVyIGFsbCB0b2tlbml6ZXJzLiAgV2hlbiBvbmUgZWF0c1xuICAgIC8vIHNvbWV0aGluZywgcmUtaXRlcmF0ZSB3aXRoIHRoZSByZW1haW5pbmcgdmFsdWUuICBJZiBubyB0b2tlbml6ZXIgZWF0cyxcbiAgICAvLyBzb21ldGhpbmcgZmFpbGVkIChzaG91bGQgbm90IGhhcHBlbikgYW5kIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgd2hpbGUgKHZhbHVlKSB7XG4gICAgICBpbmRleCA9IC0xXG4gICAgICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICAgICAgbWF0Y2hlZCA9IGZhbHNlXG5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIG5hbWUgPSBtZXRob2RzW2luZGV4XVxuICAgICAgICBtZXRob2QgPSB0b2tlbml6ZXJzW25hbWVdXG5cbiAgICAgICAgLy8gUHJldmlvdXNseSwgd2UgaGFkIGNvbnN0cnVjdHMgc3VjaCBhcyBmb290bm90ZXMgYW5kIFlBTUwgdGhhdCB1c2VkXG4gICAgICAgIC8vIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICAgIC8vIFRob3NlIGFyZSBub3cgZXh0ZXJuYWwgKHBsdXMgdGhlcmUgYXJlIHVzZXJsYW5kIGV4dGVuc2lvbnMpLCB0aGF0IG1heVxuICAgICAgICAvLyBzdGlsbCB1c2UgdGhlbS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1ldGhvZCAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm9ubHlBdFN0YXJ0IHx8IHNlbGYuYXRTdGFydCkgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5ub3RJbkxpc3QgfHwgIXNlbGYuaW5MaXN0KSAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm5vdEluQmxvY2sgfHwgIXNlbGYuaW5CbG9jaykgJiZcbiAgICAgICAgICAoIW1ldGhvZC5ub3RJbkxpbmsgfHwgIXNlbGYuaW5MaW5rKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuXG4gICAgICAgICAgbWV0aG9kLmFwcGx5KHNlbGYsIFtlYXQsIHZhbHVlXSlcblxuICAgICAgICAgIG1hdGNoZWQgPSB2YWx1ZUxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgc2VsZi5maWxlLmZhaWwobmV3IEVycm9yKCdJbmZpbml0ZSBsb29wJyksIGVhdC5ub3coKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLmVvZiA9IG5vdygpXG5cbiAgICByZXR1cm4gdG9rZW5zXG5cbiAgICAvLyBVcGRhdGUgbGluZSwgY29sdW1uLCBhbmQgb2Zmc2V0IGJhc2VkIG9uIGB2YWx1ZWAuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oc3VidmFsdWUpIHtcbiAgICAgIHZhciBsYXN0SW5kZXggPSAtMVxuICAgICAgdmFyIGluZGV4ID0gc3VidmFsdWUuaW5kZXhPZignXFxuJylcblxuICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBsaW5lKytcbiAgICAgICAgbGFzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nLCBpbmRleCArIDEpXG4gICAgICB9XG5cbiAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHN1YnZhbHVlLmxlbmd0aCAtIGxhc3RJbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAobGluZSBpbiBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb2x1bW4gKz0gb2Zmc2V0W2xpbmVdXG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uIDw9IG9mZnNldFtsaW5lXSkge1xuICAgICAgICAgIGNvbHVtbiA9IG9mZnNldFtsaW5lXSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBvZmZzZXQuICBDYWxsZWQgYmVmb3JlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgZWF0ZW4gdG8gcmV0cmlldmUgdGhlXG4gICAgLy8gcmFuZ2XigJlzIG9mZnNldHMuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIGluZGVudGF0aW9uID0gW11cbiAgICAgIHZhciBwb3MgPSBsaW5lICsgMVxuXG4gICAgICAvLyBEb25lLiAgQ2FsbGVkIHdoZW4gdGhlIGxhc3QgY2hhcmFjdGVyIGlzIGVhdGVuIHRvIHJldHJpZXZlIHRoZSByYW5nZeKAmXNcbiAgICAgIC8vIG9mZnNldHMuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdCA9IGxpbmUgKyAxXG5cbiAgICAgICAgd2hpbGUgKHBvcyA8IGxhc3QpIHtcbiAgICAgICAgICBpbmRlbnRhdGlvbi5wdXNoKChvZmZzZXRbcG9zXSB8fCAwKSArIDEpXG5cbiAgICAgICAgICBwb3MrK1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudGF0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgIGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgIHZhciBwb3MgPSB7bGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59XG5cbiAgICAgIHBvcy5vZmZzZXQgPSBzZWxmLnRvT2Zmc2V0KHBvcylcblxuICAgICAgcmV0dXJuIHBvc1xuICAgIH1cblxuICAgIC8vIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydFxuICAgICAgdGhpcy5lbmQgPSBub3coKVxuICAgIH1cblxuICAgIC8vIFRocm93IHdoZW4gYSB2YWx1ZSBpcyBpbmNvcnJlY3RseSBlYXRlbi4gIFRoaXMgc2hvdWxkbuKAmXQgaGFwcGVuIGJ1dCB3aWxsXG4gICAgLy8gdGhyb3cgb24gbmV3LCBpbmNvcnJlY3QgcnVsZXMuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFYXQoc3VidmFsdWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHZhbHVlLnNsaWNlKDAsIHN1YnZhbHVlLmxlbmd0aCkgIT09IHN1YnZhbHVlKSB7XG4gICAgICAgIC8vIENhcHR1cmUgc3RhY2stdHJhY2UuXG4gICAgICAgIHNlbGYuZmlsZS5mYWlsKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdJbmNvcnJlY3RseSBlYXRlbiB2YWx1ZTogcGxlYXNlIHJlcG9ydCB0aGlzIHdhcm5pbmcgb24gaHR0cHM6Ly9naXQuaW8vdmc1RnQnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBub3coKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFyayBwb3NpdGlvbiBhbmQgcGF0Y2ggYG5vZGUucG9zaXRpb25gLlxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgdmFyIGJlZm9yZSA9IG5vdygpXG5cbiAgICAgIHJldHVybiB1cGRhdGVcblxuICAgICAgLy8gQWRkIHRoZSBwb3NpdGlvbiB0byBhIG5vZGUuXG4gICAgICBmdW5jdGlvbiB1cGRhdGUobm9kZSwgaW5kZW50KSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IG5vZGUucG9zaXRpb25cbiAgICAgICAgdmFyIHN0YXJ0ID0gcHJldmlvdXMgPyBwcmV2aW91cy5zdGFydCA6IGJlZm9yZVxuICAgICAgICB2YXIgY29tYmluZWQgPSBbXVxuICAgICAgICB2YXIgbiA9IHByZXZpb3VzICYmIHByZXZpb3VzLmVuZC5saW5lXG4gICAgICAgIHZhciBsID0gYmVmb3JlLmxpbmVcblxuICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHN0YXJ0KVxuXG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBhbHJlYWR5IGEgYHBvc2l0aW9uYCwgdGhpcyBub2RlIHdhcyBtZXJnZWQuICBGaXhpbmdcbiAgICAgICAgLy8gYHN0YXJ0YCB3YXNu4oCZdCBoYXJkLCBidXQgdGhlIGluZGVudCBpcyBkaWZmZXJlbnQuICBFc3BlY2lhbGx5XG4gICAgICAgIC8vIGJlY2F1c2Ugc29tZSBpbmZvcm1hdGlvbiwgdGhlIGluZGVudCBiZXR3ZWVuIGBuYCBhbmQgYGxgIHdhc27igJl0XG4gICAgICAgIC8vIHRyYWNrZWQuICBMdWNraWx5LCB0aGF0IHNwYWNlIGlzIChzaG91bGQgYmU/KSBlbXB0eSwgc28gd2UgY2FuXG4gICAgICAgIC8vIHNhZmVseSBjaGVjayBmb3IgaXQgbm93LlxuICAgICAgICBpZiAocHJldmlvdXMgJiYgaW5kZW50ICYmIHByZXZpb3VzLmluZGVudCkge1xuICAgICAgICAgIGNvbWJpbmVkID0gcHJldmlvdXMuaW5kZW50XG5cbiAgICAgICAgICBpZiAobiA8IGwpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK24gPCBsKSB7XG4gICAgICAgICAgICAgIGNvbWJpbmVkLnB1c2goKG9mZnNldFtuXSB8fCAwKSArIDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbWJpbmVkLnB1c2goYmVmb3JlLmNvbHVtbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRlbnQgPSBjb21iaW5lZC5jb25jYXQoaW5kZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbi5pbmRlbnQgPSBpbmRlbnQgfHwgW11cblxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBgbm9kZWAgdG8gYHBhcmVudGBzIGNoaWxkcmVuIG9yIHRvIGB0b2tlbnNgLiAgUGVyZm9ybXMgbWVyZ2VzIHdoZXJlXG4gICAgLy8gcG9zc2libGUuXG4gICAgZnVuY3Rpb24gYWRkKG5vZGUsIHBhcmVudCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogdG9rZW5zXG4gICAgICB2YXIgcHJldmlvdXMgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgICAgdmFyIGZuXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXMgJiZcbiAgICAgICAgbm9kZS50eXBlID09PSBwcmV2aW91cy50eXBlICYmXG4gICAgICAgIChub2RlLnR5cGUgPT09ICd0ZXh0JyB8fCBub2RlLnR5cGUgPT09ICdibG9ja3F1b3RlJykgJiZcbiAgICAgICAgbWVyZ2VhYmxlKHByZXZpb3VzKSAmJlxuICAgICAgICBtZXJnZWFibGUobm9kZSlcbiAgICAgICkge1xuICAgICAgICBmbiA9IG5vZGUudHlwZSA9PT0gJ3RleHQnID8gbWVyZ2VUZXh0IDogbWVyZ2VCbG9ja3F1b3RlXG4gICAgICAgIG5vZGUgPSBmbi5jYWxsKHNlbGYsIHByZXZpb3VzLCBub2RlKVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSAhPT0gcHJldmlvdXMpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5hdFN0YXJ0ICYmIHRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2VsZi5leGl0U3RhcnQoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBgc3VidmFsdWVgIGZyb20gYHZhbHVlYC4gIGBzdWJ2YWx1ZWAgbXVzdCBiZSBhdCB0aGUgc3RhcnQgb2ZcbiAgICAvLyBgdmFsdWVgLlxuICAgIGZ1bmN0aW9uIGVhdChzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGluZGVudCA9IGdldE9mZnNldCgpXG4gICAgICB2YXIgcG9zID0gcG9zaXRpb24oKVxuICAgICAgdmFyIGN1cnJlbnQgPSBub3coKVxuXG4gICAgICB2YWxpZGF0ZUVhdChzdWJ2YWx1ZSlcblxuICAgICAgYXBwbHkucmVzZXQgPSByZXNldFxuICAgICAgcmVzZXQudGVzdCA9IHRlc3RcbiAgICAgIGFwcGx5LnRlc3QgPSB0ZXN0XG5cbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2Uoc3VidmFsdWUubGVuZ3RoKVxuXG4gICAgICB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSlcblxuICAgICAgaW5kZW50ID0gaW5kZW50KClcblxuICAgICAgcmV0dXJuIGFwcGx5XG5cbiAgICAgIC8vIEFkZCB0aGUgZ2l2ZW4gYXJndW1lbnRzLCBhZGQgYHBvc2l0aW9uYCB0byB0aGUgcmV0dXJuZWQgbm9kZSwgYW5kXG4gICAgICAvLyByZXR1cm4gdGhlIG5vZGUuXG4gICAgICBmdW5jdGlvbiBhcHBseShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyhhZGQocG9zKG5vZGUpLCBwYXJlbnQpLCBpbmRlbnQpXG4gICAgICB9XG5cbiAgICAgIC8vIEZ1bmN0aW9ucyBqdXN0IGxpa2UgYXBwbHksIGJ1dCByZXNldHMgdGhlIGNvbnRlbnQ6IHRoZSBsaW5lIGFuZFxuICAgICAgLy8gY29sdW1uIGFyZSByZXZlcnNlZCwgYW5kIHRoZSBlYXRlbiB2YWx1ZSBpcyByZS1hZGRlZC4gICBUaGlzIGlzXG4gICAgICAvLyB1c2VmdWwgZm9yIG5vZGVzIHdpdGggYSBzaW5nbGUgdHlwZSBvZiBjb250ZW50LCBzdWNoIGFzIGxpc3RzIGFuZFxuICAgICAgLy8gdGFibGVzLiAgU2VlIGBhcHBseWAgYWJvdmUgZm9yIHdoYXQgcGFyYW1ldGVycyBhcmUgZXhwZWN0ZWQuXG4gICAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcHBseS5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZVxuICAgICAgICBjb2x1bW4gPSBjdXJyZW50LmNvbHVtblxuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWVcblxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuXG4gICAgICAvLyBUZXN0IHRoZSBwb3NpdGlvbiwgYWZ0ZXIgZWF0aW5nLCBhbmQgcmV2ZXJzZSB0byBhIG5vdC1lYXRlbiBzdGF0ZS5cbiAgICAgIGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwb3Moe30pXG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZVxuICAgICAgICBjb2x1bW4gPSBjdXJyZW50LmNvbHVtblxuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWVcblxuICAgICAgICByZXR1cm4gcmVzdWx0LnBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIHdoZXRoZXIgYSBub2RlIGlzIG1lcmdlYWJsZSB3aXRoIGFkamFjZW50IG5vZGVzLlxuZnVuY3Rpb24gbWVyZ2VhYmxlKG5vZGUpIHtcbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICBpZiAobm9kZS50eXBlICE9PSAndGV4dCcgfHwgIW5vZGUucG9zaXRpb24pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3RhcnQgPSBub2RlLnBvc2l0aW9uLnN0YXJ0XG4gIGVuZCA9IG5vZGUucG9zaXRpb24uZW5kXG5cbiAgLy8gT25seSBtZXJnZSBub2RlcyB3aGljaCBvY2N1cHkgdGhlIHNhbWUgc2l6ZSBhcyB0aGVpciBgdmFsdWVgLlxuICByZXR1cm4gKFxuICAgIHN0YXJ0LmxpbmUgIT09IGVuZC5saW5lIHx8IGVuZC5jb2x1bW4gLSBzdGFydC5jb2x1bW4gPT09IG5vZGUudmFsdWUubGVuZ3RoXG4gIClcbn1cblxuLy8gTWVyZ2UgdHdvIHRleHQgbm9kZXM6IGBub2RlYCBpbnRvIGBwcmV2YC5cbmZ1bmN0aW9uIG1lcmdlVGV4dChwcmV2aW91cywgbm9kZSkge1xuICBwcmV2aW91cy52YWx1ZSArPSBub2RlLnZhbHVlXG5cbiAgcmV0dXJuIHByZXZpb3VzXG59XG5cbi8vIE1lcmdlIHR3byBibG9ja3F1b3RlczogYG5vZGVgIGludG8gYHByZXZgLCB1bmxlc3MgaW4gQ29tbW9uTWFyayBvciBnZm0gbW9kZXMuXG5mdW5jdGlvbiBtZXJnZUJsb2NrcXVvdGUocHJldmlvdXMsIG5vZGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jb21tb25tYXJrIHx8IHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcHJldmlvdXMuY2hpbGRyZW4gPSBwcmV2aW91cy5jaGlsZHJlbi5jb25jYXQobm9kZS5jaGlsZHJlbilcblxuICByZXR1cm4gcHJldmlvdXNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG4vLyBGYWN0b3J5IHRvIGRlLWVzY2FwZSBhIHZhbHVlLCBiYXNlZCBvbiBhIGxpc3QgYXQgYGtleWAgaW4gYGN0eGAuXG5mdW5jdGlvbiBmYWN0b3J5KGN0eCwga2V5KSB7XG4gIHJldHVybiB1bmVzY2FwZVxuXG4gIC8vIERlLWVzY2FwZSBhIHN0cmluZyB1c2luZyB0aGUgZXhwcmVzc2lvbiBhdCBga2V5YCBpbiBgY3R4YC5cbiAgZnVuY3Rpb24gdW5lc2NhcGUodmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXMgPSAwXG4gICAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZihiYWNrc2xhc2gpXG4gICAgdmFyIGVzY2FwZSA9IGN0eFtrZXldXG4gICAgdmFyIHF1ZXVlID0gW11cbiAgICB2YXIgY2hhcmFjdGVyXG5cbiAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXZpb3VzLCBpbmRleCkpXG4gICAgICBwcmV2aW91cyA9IGluZGV4ICsgMVxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHByZXZpb3VzKVxuXG4gICAgICAvLyBJZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlciBpcyBub3QgYSB2YWxpZCBlc2NhcGUsIGFkZCB0aGUgc2xhc2guXG4gICAgICBpZiAoIWNoYXJhY3RlciB8fCBlc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpID09PSAtMSkge1xuICAgICAgICBxdWV1ZS5wdXNoKGJhY2tzbGFzaClcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGJhY2tzbGFzaCwgcHJldmlvdXMgKyAxKVxuICAgIH1cblxuICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldmlvdXMpKVxuXG4gICAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciBzcGFjZVNpemUgPSAxXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gR2V0cyBpbmRlbnRhdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBsaW5lLlxuZnVuY3Rpb24gaW5kZW50YXRpb24odmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgaW5kZW50ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgc3RvcHMgPSB7fVxuICB2YXIgc2l6ZVxuXG4gIHdoaWxlIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgc2l6ZSA9IGNoYXJhY3RlciA9PT0gdGFiID8gdGFiU2l6ZSA6IHNwYWNlU2l6ZVxuXG4gICAgaW5kZW50ICs9IHNpemVcblxuICAgIGlmIChzaXplID4gMSkge1xuICAgICAgaW5kZW50ID0gTWF0aC5mbG9vcihpbmRlbnQgLyBzaXplKSAqIHNpemVcbiAgICB9XG5cbiAgICBzdG9wc1tpbmRlbnRdID0gaW5kZXhcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIHJldHVybiB7aW5kZW50OiBpbmRlbnQsIHN0b3BzOiBzdG9wc31cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXR0cmlidXRlTmFtZSA9ICdbYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKidcbnZhciB1bnF1b3RlZCA9ICdbXlwiXFwnPTw+YFxcXFx1MDAwMC1cXFxcdTAwMjBdKydcbnZhciBzaW5nbGVRdW90ZWQgPSBcIidbXiddKidcIlxudmFyIGRvdWJsZVF1b3RlZCA9ICdcIlteXCJdKlwiJ1xudmFyIGF0dHJpYnV0ZVZhbHVlID1cbiAgJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZVF1b3RlZCArICd8JyArIGRvdWJsZVF1b3RlZCArICcpJ1xudmFyIGF0dHJpYnV0ZSA9XG4gICcoPzpcXFxccysnICsgYXR0cmlidXRlTmFtZSArICcoPzpcXFxccyo9XFxcXHMqJyArIGF0dHJpYnV0ZVZhbHVlICsgJyk/KSdcbnZhciBvcGVuVGFnID0gJzxbQS1aYS16XVtBLVphLXowLTlcXFxcLV0qJyArIGF0dHJpYnV0ZSArICcqXFxcXHMqXFxcXC8/PidcbnZhciBjbG9zZVRhZyA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPidcbnZhciBjb21tZW50ID0gJzwhLS0tLT58PCEtLSg/Oi0/W14+LV0pKD86LT9bXi1dKSotLT4nXG52YXIgcHJvY2Vzc2luZyA9ICc8Wz9dLio/Wz9dPidcbnZhciBkZWNsYXJhdGlvbiA9ICc8IVtBLVphLXpdK1xcXFxzK1tePl0qPidcbnZhciBjZGF0YSA9ICc8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT4nXG5cbmV4cG9ydHMub3BlbkNsb3NlVGFnID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuVGFnICsgJ3wnICsgY2xvc2VUYWcgKyAnKScpXG5cbmV4cG9ydHMudGFnID0gbmV3IFJlZ0V4cChcbiAgJ14oPzonICtcbiAgICBvcGVuVGFnICtcbiAgICAnfCcgK1xuICAgIGNsb3NlVGFnICtcbiAgICAnfCcgK1xuICAgIGNvbW1lbnQgK1xuICAgICd8JyArXG4gICAgcHJvY2Vzc2luZyArXG4gICAgJ3wnICtcbiAgICBkZWNsYXJhdGlvbiArXG4gICAgJ3wnICtcbiAgICBjZGF0YSArXG4gICAgJyknXG4pXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnJ1cHRcblxuZnVuY3Rpb24gaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgY3R4LCBwYXJhbWV0ZXJzKSB7XG4gIHZhciBsZW5ndGggPSBpbnRlcnJ1cHRvcnMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBpbnRlcnJ1cHRvclxuICB2YXIgY29uZmlnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpbnRlcnJ1cHRvciA9IGludGVycnVwdG9yc1tpbmRleF1cbiAgICBjb25maWcgPSBpbnRlcnJ1cHRvclsxXSB8fCB7fVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLnBlZGFudGljICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbmZpZy5wZWRhbnRpYyAhPT0gY3R4Lm9wdGlvbnMucGVkYW50aWNcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLmNvbW1vbm1hcmsgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29uZmlnLmNvbW1vbm1hcmsgIT09IGN0eC5vcHRpb25zLmNvbW1vbm1hcmtcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRva2VuaXplcnNbaW50ZXJydXB0b3JbMF1dLmFwcGx5KGN0eCwgcGFyYW1ldGVycykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbGxhcHNlV2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2NvbGxhcHNlLXdoaXRlLXNwYWNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLy8gTm9ybWFsaXplIGFuIGlkZW50aWZpZXIuICBDb2xsYXBzZXMgbXVsdGlwbGUgd2hpdGUgc3BhY2UgY2hhcmFjdGVycyBpbnRvIGFcbi8vIHNpbmdsZSBzcGFjZSwgYW5kIHJlbW92ZXMgY2FzaW5nLlxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiBjb2xsYXBzZVdoaXRlU3BhY2UodmFsdWUpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4vZ2V0LWluZGVudGF0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRhdGlvblxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxuLy8gUmVtb3ZlIHRoZSBtaW5pbXVtIGluZGVudCBmcm9tIGV2ZXJ5IGxpbmUgaW4gYHZhbHVlYC4gIFN1cHBvcnRzIGJvdGggdGFiLFxuLy8gc3BhY2VkLCBhbmQgbWl4ZWQgaW5kZW50YXRpb24gKGFzIHdlbGwgYXMgcG9zc2libGUpLlxuZnVuY3Rpb24gaW5kZW50YXRpb24odmFsdWUsIG1heGltdW0pIHtcbiAgdmFyIHZhbHVlcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuICB2YXIgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoICsgMVxuICB2YXIgbWluSW5kZW50ID0gSW5maW5pdHlcbiAgdmFyIG1hdHJpeCA9IFtdXG4gIHZhciBpbmRleFxuICB2YXIgaW5kZW50YXRpb25cbiAgdmFyIHN0b3BzXG4gIHZhciBwYWRkaW5nXG5cbiAgdmFsdWVzLnVuc2hpZnQocmVwZWF0KHNwYWNlLCBtYXhpbXVtKSArIGV4Y2xhbWF0aW9uTWFyaylcblxuICB3aGlsZSAocG9zaXRpb24tLSkge1xuICAgIGluZGVudGF0aW9uID0gZ2V0SW5kZW50KHZhbHVlc1twb3NpdGlvbl0pXG5cbiAgICBtYXRyaXhbcG9zaXRpb25dID0gaW5kZW50YXRpb24uc3RvcHNcblxuICAgIGlmICh0cmltKHZhbHVlc1twb3NpdGlvbl0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoaW5kZW50YXRpb24uaW5kZW50KSB7XG4gICAgICBpZiAoaW5kZW50YXRpb24uaW5kZW50ID4gMCAmJiBpbmRlbnRhdGlvbi5pbmRlbnQgPCBtaW5JbmRlbnQpIHtcbiAgICAgICAgbWluSW5kZW50ID0gaW5kZW50YXRpb24uaW5kZW50XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbkluZGVudCA9IEluZmluaXR5XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbkluZGVudCAhPT0gSW5maW5pdHkpIHtcbiAgICBwb3NpdGlvbiA9IHZhbHVlcy5sZW5ndGhcblxuICAgIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgICBzdG9wcyA9IG1hdHJpeFtwb3NpdGlvbl1cbiAgICAgIGluZGV4ID0gbWluSW5kZW50XG5cbiAgICAgIHdoaWxlIChpbmRleCAmJiAhKGluZGV4IGluIHN0b3BzKSkge1xuICAgICAgICBpbmRleC0tXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHJpbSh2YWx1ZXNbcG9zaXRpb25dKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbWluSW5kZW50ICYmXG4gICAgICAgIGluZGV4ICE9PSBtaW5JbmRlbnRcbiAgICAgICkge1xuICAgICAgICBwYWRkaW5nID0gdGFiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWRkaW5nID0gJydcbiAgICAgIH1cblxuICAgICAgdmFsdWVzW3Bvc2l0aW9uXSA9XG4gICAgICAgIHBhZGRpbmcgKyB2YWx1ZXNbcG9zaXRpb25dLnNsaWNlKGluZGV4IGluIHN0b3BzID8gc3RvcHNbaW5kZXhdICsgMSA6IDApXG4gICAgfVxuICB9XG5cbiAgdmFsdWVzLnNoaWZ0KClcblxuICByZXR1cm4gdmFsdWVzLmpvaW4obGluZUZlZWQpXG59XG4iLCIvKiFcbiAqIHJlcGVhdC1zdHJpbmcgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3JlcGVhdC1zdHJpbmc+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSZXN1bHRzIGNhY2hlXG4gKi9cblxudmFyIHJlcyA9ICcnO1xudmFyIGNhY2hlO1xuXG4vKipcbiAqIEV4cG9zZSBgcmVwZWF0YFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVwZWF0O1xuXG4vKipcbiAqIFJlcGVhdCB0aGUgZ2l2ZW4gYHN0cmluZ2AgdGhlIHNwZWNpZmllZCBgbnVtYmVyYFxuICogb2YgdGltZXMuXG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJyk7XG4gKiByZXBlYXQoJ0EnLCA1KTtcbiAqIC8vPT4gQUFBQUFcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyaW5nYCBUaGUgc3RyaW5nIHRvIHJlcGVhdFxuICogQHBhcmFtIHtOdW1iZXJ9IGBudW1iZXJgIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gUmVwZWF0ZWQgc3RyaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIG51bSkge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG5cbiAgLy8gY292ZXIgY29tbW9uLCBxdWljayB1c2UgY2FzZXNcbiAgaWYgKG51bSA9PT0gMSkgcmV0dXJuIHN0cjtcbiAgaWYgKG51bSA9PT0gMikgcmV0dXJuIHN0ciArIHN0cjtcblxuICB2YXIgbWF4ID0gc3RyLmxlbmd0aCAqIG51bTtcbiAgaWYgKGNhY2hlICE9PSBzdHIgfHwgdHlwZW9mIGNhY2hlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNhY2hlID0gc3RyO1xuICAgIHJlcyA9ICcnO1xuICB9IGVsc2UgaWYgKHJlcy5sZW5ndGggPj0gbWF4KSB7XG4gICAgcmV0dXJuIHJlcy5zdWJzdHIoMCwgbWF4KTtcbiAgfVxuXG4gIHdoaWxlIChtYXggPiByZXMubGVuZ3RoICYmIG51bSA+IDEpIHtcbiAgICBpZiAobnVtICYgMSkge1xuICAgICAgcmVzICs9IHN0cjtcbiAgICB9XG5cbiAgICBudW0gPj49IDE7XG4gICAgc3RyICs9IHN0cjtcbiAgfVxuXG4gIHJlcyArPSBzdHI7XG4gIHJlcyA9IHJlcy5zdWJzdHIoMCwgbWF4KTtcbiAgcmV0dXJuIHJlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFeHQobnBhdGgsIGV4dCkge1xuICBpZiAodHlwZW9mIG5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIGlmIChucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICB2YXIgbkZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShucGF0aCwgcGF0aC5leHRuYW1lKG5wYXRoKSkgKyBleHQ7XG4gIHJldHVybiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG5wYXRoKSwgbkZpbGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlRXh0O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBDb25zdHJ1Y3QgYSBzdGF0ZSBgdG9nZ2xlcmA6IGEgZnVuY3Rpb24gd2hpY2ggaW52ZXJzZXMgYHByb3BlcnR5YCBpbiBjb250ZXh0XG4vLyBiYXNlZCBvbiBpdHMgY3VycmVudCB2YWx1ZS5cbi8vIFRoZSBieSBgdG9nZ2xlcmAgcmV0dXJuZWQgZnVuY3Rpb24gcmVzdG9yZXMgdGhhdCB2YWx1ZS5cbmZ1bmN0aW9uIGZhY3Rvcnkoa2V5LCBzdGF0ZSwgY3R4KSB7XG4gIHJldHVybiBlbnRlclxuXG4gIGZ1bmN0aW9uIGVudGVyKCkge1xuICAgIHZhciBjb250ZXh0ID0gY3R4IHx8IHRoaXNcbiAgICB2YXIgY3VycmVudCA9IGNvbnRleHRba2V5XVxuXG4gICAgY29udGV4dFtrZXldID0gIXN0YXRlXG5cbiAgICByZXR1cm4gZXhpdFxuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIGNvbnRleHRba2V5XSA9IGN1cnJlbnRcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtaHRtbDQnKVxudmFyIGxlZ2FjeSA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1sZWdhY3knKVxudmFyIGhleGFkZWNpbWFsID0gcmVxdWlyZSgnaXMtaGV4YWRlY2ltYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYW51bWVyaWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhbnVtZXJpY2FsJylcbnZhciBkYW5nZXJvdXMgPSByZXF1aXJlKCcuL2Rhbmdlcm91cy5qc29uJylcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVcbmVuY29kZS5lc2NhcGUgPSBlc2NhcGVcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIENoYXJhY3RlcnNcbnZhciBlcXVhbHNUbyA9IDYxXG5cbi8vIExpc3Qgb2YgZW5mb3JjZWQgZXNjYXBlcy5cbnZhciBlc2NhcGVzID0gWydcIicsIFwiJ1wiLCAnPCcsICc+JywgJyYnLCAnYCddXG5cbi8vIE1hcCBvZiBjaGFyYWN0ZXJzIHRvIG5hbWVzLlxudmFyIGNoYXJhY3RlcnMgPSBjb25zdHJ1Y3QoKVxuXG4vLyBEZWZhdWx0IGVzY2FwZXMuXG52YXIgZGVmYXVsdEVzY2FwZXMgPSB0b0V4cHJlc3Npb24oZXNjYXBlcylcblxuLy8gU3Vycm9nYXRlIHBhaXJzLlxudmFyIHN1cnJvZ2F0ZVBhaXIgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nXG5cbi8vIE5vbi1BU0NJSSBjaGFyYWN0ZXJzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXgsIHVuaWNvcm4vbm8taGV4LWVzY2FwZVxudmFyIGJtcCA9IC9bXFx4MDEtXFx0XFx4MEJcXGZcXHgwRS1cXHgxRlxceDdGXFx4ODFcXHg4RFxceDhGXFx4OTBcXHg5RFxceEEwLVxcdUZGRkZdL2dcblxuLy8gRW5jb2RlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBgdmFsdWVgLlxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHN1YnNldCA9IHNldHRpbmdzLnN1YnNldFxuICB2YXIgc2V0ID0gc3Vic2V0ID8gdG9FeHByZXNzaW9uKHN1YnNldCkgOiBkZWZhdWx0RXNjYXBlc1xuICB2YXIgZXNjYXBlT25seSA9IHNldHRpbmdzLmVzY2FwZU9ubHlcbiAgdmFyIG9taXQgPSBzZXR0aW5ncy5vbWl0T3B0aW9uYWxTZW1pY29sb25zXG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHNldCwgcmVwbGFjZSlcblxuICBpZiAoc3Vic2V0IHx8IGVzY2FwZU9ubHkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKHN1cnJvZ2F0ZVBhaXIsIHJlcGxhY2VTdXJyb2dhdGVQYWlyKVxuICAgIC5yZXBsYWNlKGJtcCwgcmVwbGFjZSlcblxuICBmdW5jdGlvbiByZXBsYWNlU3Vycm9nYXRlUGFpcihwYWlyLCBwb3MsIHZhbCkge1xuICAgIHJldHVybiB0b0hleFJlZmVyZW5jZShcbiAgICAgIChwYWlyLmNoYXJDb2RlQXQoMCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICBwYWlyLmNoYXJDb2RlQXQoMSkgLVxuICAgICAgICAweGRjMDAgK1xuICAgICAgICAweDEwMDAwLFxuICAgICAgdmFsLmNoYXJDb2RlQXQocG9zICsgMiksXG4gICAgICBvbWl0XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShjaGFyLCBwb3MsIHZhbCkge1xuICAgIHJldHVybiBvbmUoY2hhciwgdmFsLmNoYXJDb2RlQXQocG9zICsgMSksIHNldHRpbmdzKVxuICB9XG59XG5cbi8vIFNob3J0Y3V0IHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gSFRNTC5cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSkge1xuICByZXR1cm4gZW5jb2RlKHZhbHVlLCB7ZXNjYXBlT25seTogdHJ1ZSwgdXNlTmFtZWRSZWZlcmVuY2VzOiB0cnVlfSlcbn1cblxuLy8gRW5jb2RlIGBjaGFyYCBhY2NvcmRpbmcgdG8gYG9wdGlvbnNgLlxuZnVuY3Rpb24gb25lKGNoYXIsIG5leHQsIG9wdGlvbnMpIHtcbiAgdmFyIHNob3J0ZXN0ID0gb3B0aW9ucy51c2VTaG9ydGVzdFJlZmVyZW5jZXNcbiAgdmFyIG9taXQgPSBvcHRpb25zLm9taXRPcHRpb25hbFNlbWljb2xvbnNcbiAgdmFyIG5hbWVkXG4gIHZhciBjb2RlXG4gIHZhciBudW1lcmljXG4gIHZhciBkZWNpbWFsXG5cbiAgaWYgKChzaG9ydGVzdCB8fCBvcHRpb25zLnVzZU5hbWVkUmVmZXJlbmNlcykgJiYgb3duLmNhbGwoY2hhcmFjdGVycywgY2hhcikpIHtcbiAgICBuYW1lZCA9IHRvTmFtZWQoY2hhcmFjdGVyc1tjaGFyXSwgbmV4dCwgb21pdCwgb3B0aW9ucy5hdHRyaWJ1dGUpXG4gIH1cblxuICBpZiAoc2hvcnRlc3QgfHwgIW5hbWVkKSB7XG4gICAgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKVxuICAgIG51bWVyaWMgPSB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KVxuXG4gICAgLy8gVXNlIHRoZSBzaG9ydGVzdCBudW1lcmljIHJlZmVyZW5jZSB3aGVuIHJlcXVlc3RlZC5cbiAgICAvLyBBIHNpbXBsZSBhbGdvcml0aG0gd291bGQgdXNlIGRlY2ltYWwgZm9yIGFsbCBjb2RlIHBvaW50cyB1bmRlciAxMDAsIGFzXG4gICAgLy8gdGhvc2UgYXJlIHNob3J0ZXIgdGhhbiBoZXhhZGVjaW1hbDpcbiAgICAvL1xuICAgIC8vICogYCYjOTk7YCB2cyBgJiN4NjM7YCAoZGVjaW1hbCBzaG9ydGVyKVxuICAgIC8vICogYCYjMTAwO2AgdnMgYCYjeDY0O2AgKGVxdWFsKVxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgYmVjYXVzZSB3ZSB0YWtlIGBuZXh0YCBpbnRvIGNvbnNpZGVyYXRpb24gd2hlbiBgb21pdGAgaXMgdXNlZCxcbiAgICAvLyBBbmQgaXQgd291bGQgYmUgcG9zc2libGUgdGhhdCBkZWNpbWFscyBhcmUgc2hvcnRlciBvbiBiaWdnZXIgdmFsdWVzIGFzXG4gICAgLy8gd2VsbCBpZiBgbmV4dGAgaXMgaGV4YWRlY2ltYWwgYnV0IG5vdCBkZWNpbWFsLCB3ZSBpbnN0ZWFkIGNvbXBhcmUgYm90aC5cbiAgICBpZiAoc2hvcnRlc3QpIHtcbiAgICAgIGRlY2ltYWwgPSB0b0RlY2ltYWxSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdClcblxuICAgICAgaWYgKGRlY2ltYWwubGVuZ3RoIDwgbnVtZXJpYy5sZW5ndGgpIHtcbiAgICAgICAgbnVtZXJpYyA9IGRlY2ltYWxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobmFtZWQgJiYgKCFzaG9ydGVzdCB8fCBuYW1lZC5sZW5ndGggPCBudW1lcmljLmxlbmd0aCkpIHtcbiAgICByZXR1cm4gbmFtZWRcbiAgfVxuXG4gIHJldHVybiBudW1lcmljXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhbiBlbnRpdHkuXG5mdW5jdGlvbiB0b05hbWVkKG5hbWUsIG5leHQsIG9taXQsIGF0dHJpYnV0ZSkge1xuICB2YXIgdmFsdWUgPSAnJicgKyBuYW1lXG5cbiAgaWYgKFxuICAgIG9taXQgJiZcbiAgICBvd24uY2FsbChsZWdhY3ksIG5hbWUpICYmXG4gICAgZGFuZ2Vyb3VzLmluZGV4T2YobmFtZSkgPT09IC0xICYmXG4gICAgKCFhdHRyaWJ1dGUgfHwgKG5leHQgJiYgbmV4dCAhPT0gZXF1YWxzVG8gJiYgIWFscGhhbnVtZXJpY2FsKG5leHQpKSlcbiAgKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnOydcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGEgaGV4YWRlY2ltYWwgY2hhcmFjdGVyIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIHRvSGV4UmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpIHtcbiAgdmFyIHZhbHVlID0gJyYjeCcgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIHJldHVybiBvbWl0ICYmIG5leHQgJiYgIWhleGFkZWNpbWFsKG5leHQpID8gdmFsdWUgOiB2YWx1ZSArICc7J1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYSBkZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2UuXG5mdW5jdGlvbiB0b0RlY2ltYWxSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdCkge1xuICB2YXIgdmFsdWUgPSAnJiMnICsgU3RyaW5nKGNvZGUpXG4gIHJldHVybiBvbWl0ICYmIG5leHQgJiYgIWRlY2ltYWwobmV4dCkgPyB2YWx1ZSA6IHZhbHVlICsgJzsnXG59XG5cbi8vIENyZWF0ZSBhbiBleHByZXNzaW9uIGZvciBgY2hhcmFjdGVyc2AuXG5mdW5jdGlvbiB0b0V4cHJlc3Npb24oY2hhcmFjdGVycykge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnWycgKyBjaGFyYWN0ZXJzLmpvaW4oJycpICsgJ10nLCAnZycpXG59XG5cbi8vIENvbnN0cnVjdCB0aGUgbWFwLlxuZnVuY3Rpb24gY29uc3RydWN0KCkge1xuICB2YXIgY2hhcnMgPSB7fVxuICB2YXIgbmFtZVxuXG4gIGZvciAobmFtZSBpbiBlbnRpdGllcykge1xuICAgIGNoYXJzW2VudGl0aWVzW25hbWVdXSA9IG5hbWVcbiAgfVxuXG4gIHJldHVybiBjaGFyc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbVRyYWlsaW5nTGluZXNcblxudmFyIGxpbmUgPSAnXFxuJ1xuXG4vLyBSZW1vdmUgZmluYWwgbmV3bGluZSBjaGFyYWN0ZXJzIGZyb20gYHZhbHVlYC5cbmZ1bmN0aW9uIHRyaW1UcmFpbGluZ0xpbmVzKHZhbHVlKSB7XG4gIHZhciB2YWwgPSBTdHJpbmcodmFsdWUpXG4gIHZhciBpbmRleCA9IHZhbC5sZW5ndGhcblxuICB3aGlsZSAodmFsLmNoYXJBdCgtLWluZGV4KSA9PT0gbGluZSkge1xuICAgIC8vIEVtcHR5XG4gIH1cblxuICByZXR1cm4gdmFsLnNsaWNlKDAsIGluZGV4ICsgMSlcbn1cbiIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gdHJvdWdoXG5cbnRyb3VnaC53cmFwID0gd3JhcFxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG4vLyBDcmVhdGUgbmV3IG1pZGRsZXdhcmUuXG5mdW5jdGlvbiB0cm91Z2goKSB7XG4gIHZhciBmbnMgPSBbXVxuICB2YXIgbWlkZGxld2FyZSA9IHt9XG5cbiAgbWlkZGxld2FyZS5ydW4gPSBydW5cbiAgbWlkZGxld2FyZS51c2UgPSB1c2VcblxuICByZXR1cm4gbWlkZGxld2FyZVxuXG4gIC8vIFJ1biBgZm5zYC4gIExhc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBsZXRpb24gaGFuZGxlci5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGlucHV0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKVxuICAgIHZhciBkb25lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKHR5cGVvZiBkb25lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uIGFzIGxhc3QgYXJndW1lbnQsIG5vdCAnICsgZG9uZSlcbiAgICB9XG5cbiAgICBuZXh0LmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuXG4gICAgLy8gUnVuIHRoZSBuZXh0IGBmbmAsIGlmIGFueS5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgdmFyIGZuID0gZm5zWysraW5kZXhdXG4gICAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgICB2YXIgdmFsdWVzID0gcGFyYW1zLnNsaWNlKDEpXG4gICAgICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgICB2YXIgcG9zID0gLTFcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBkb25lKGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgbm9uLW51bGx5IGlucHV0IGludG8gdmFsdWVzLlxuICAgICAgd2hpbGUgKCsrcG9zIDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbcG9zXSA9PT0gbnVsbCB8fCB2YWx1ZXNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWVzW3Bvc10gPSBpbnB1dFtwb3NdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQgPSB2YWx1ZXNcblxuICAgICAgLy8gTmV4dCBvciBkb25lLlxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHdyYXAoZm4sIG5leHQpLmFwcGx5KG51bGwsIGlucHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZS5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYGZuYCB0byB0aGUgbGlzdC5cbiAgZnVuY3Rpb24gdXNlKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgZm5gIHRvIGJlIGEgZnVuY3Rpb24sIG5vdCAnICsgZm4pXG4gICAgfVxuXG4gICAgZm5zLnB1c2goZm4pXG5cbiAgICByZXR1cm4gbWlkZGxld2FyZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbi8vIFdyYXAgYGZuYC5cbi8vIENhbiBiZSBzeW5jIG9yIGFzeW5jOyByZXR1cm4gYSBwcm9taXNlLCByZWNlaXZlIGEgY29tcGxldGlvbiBoYW5kbGVyLCByZXR1cm5cbi8vIG5ldyB2YWx1ZXMgYW5kIGVycm9ycy5cbmZ1bmN0aW9uIHdyYXAoZm4sIGNhbGxiYWNrKSB7XG4gIHZhciBpbnZva2VkXG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICBmdW5jdGlvbiB3cmFwcGVkKCkge1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICB2YXIgY2FsbGJhY2sgPSBmbi5sZW5ndGggPiBwYXJhbXMubGVuZ3RoXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwYXJhbXMucHVzaChkb25lKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmbi5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFdlbGwsIHRoaXMgaXMgcXVpdGUgdGhlIHBpY2tsZS5cbiAgICAgIC8vIGBmbmAgcmVjZWl2ZWQgYSBjYWxsYmFjayBhbmQgaW52b2tlZCBpdCAodGh1cyBjb250aW51aW5nIHRoZSBwaXBlbGluZSksXG4gICAgICAvLyBidXQgbGF0ZXIgYWxzbyB0aHJldyBhbiBlcnJvci5cbiAgICAgIC8vIFdl4oCZcmUgbm90IGFib3V0IHRvIHJlc3RhcnQgdGhlIHBpcGVsaW5lIGFnYWluLCBzbyB0aGUgb25seSB0aGluZyBsZWZ0XG4gICAgICAvLyB0byBkbyBpcyB0byB0aHJvdyB0aGUgdGhpbmcgaW5zdGVhZC5cbiAgICAgIGlmIChjYWxsYmFjayAmJiBpbnZva2VkKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb25lKGVycm9yKVxuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKHRoZW4sIGRvbmUpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRvbmUocmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbihyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBuZXh0YCwgb25seSBvbmNlLlxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmICghaW52b2tlZCkge1xuICAgICAgaW52b2tlZCA9IHRydWVcblxuICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgZG9uZWAgd2l0aCBvbmUgdmFsdWUuXG4gIC8vIFRyYWNrcyBpZiBhbiBlcnJvciBpcyBwYXNzZWQsIHRvby5cbiAgZnVuY3Rpb24gdGhlbih2YWx1ZSkge1xuICAgIGRvbmUobnVsbCwgdmFsdWUpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG5cbm1vZHVsZS5leHBvcnRzID0gdW5oZXJpdFxuXG4vLyBDcmVhdGUgYSBjdXN0b20gY29uc3RydWN0b3Igd2hpY2ggY2FuIGJlIG1vZGlmaWVkIHdpdGhvdXQgYWZmZWN0aW5nIHRoZVxuLy8gb3JpZ2luYWwgY2xhc3MuXG5mdW5jdGlvbiB1bmhlcml0KFN1cGVyKSB7XG4gIHZhciByZXN1bHRcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpbmhlcml0cyhPZiwgU3VwZXIpXG4gIGluaGVyaXRzKEZyb20sIE9mKVxuXG4gIC8vIENsb25lIHZhbHVlcy5cbiAgcmVzdWx0ID0gT2YucHJvdG90eXBlXG5cbiAgZm9yIChrZXkgaW4gcmVzdWx0KSB7XG4gICAgdmFsdWUgPSByZXN1bHRba2V5XVxuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gJ2NvbmNhdCcgaW4gdmFsdWUgPyB2YWx1ZS5jb25jYXQoKSA6IHh0ZW5kKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPZlxuXG4gIC8vIENvbnN0cnVjdG9yIGFjY2VwdGluZyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXRzZWxmIGlzIGFuIGBhcmd1bWVudHNgXG4gIC8vIG9iamVjdC5cbiAgZnVuY3Rpb24gRnJvbShwYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIFN1cGVyLmFwcGx5KHRoaXMsIHBhcmFtZXRlcnMpXG4gIH1cblxuICAvLyBDb25zdHJ1Y3RvciBhY2NlcHRpbmcgdmFyaWFkaWMgYXJndW1lbnRzLlxuICBmdW5jdGlvbiBPZigpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgT2YpKSB7XG4gICAgICByZXR1cm4gbmV3IEZyb20oYXJndW1lbnRzKVxuICAgIH1cblxuICAgIHJldHVybiBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYmFpbCA9IHJlcXVpcmUoJ2JhaWwnKVxudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJylcbnZhciBwbGFpbiA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iaicpXG52YXIgdHJvdWdoID0gcmVxdWlyZSgndHJvdWdoJylcbnZhciB2ZmlsZSA9IHJlcXVpcmUoJ3ZmaWxlJylcblxuLy8gRXhwb3NlIGEgZnJvemVuIHByb2Nlc3Nvci5cbm1vZHVsZS5leHBvcnRzID0gdW5pZmllZCgpLmZyZWV6ZSgpXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gUHJvY2VzcyBwaXBlbGluZS5cbnZhciBwaXBlbGluZSA9IHRyb3VnaCgpXG4gIC51c2UocGlwZWxpbmVQYXJzZSlcbiAgLnVzZShwaXBlbGluZVJ1bilcbiAgLnVzZShwaXBlbGluZVN0cmluZ2lmeSlcblxuZnVuY3Rpb24gcGlwZWxpbmVQYXJzZShwLCBjdHgpIHtcbiAgY3R4LnRyZWUgPSBwLnBhcnNlKGN0eC5maWxlKVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVJ1bihwLCBjdHgsIG5leHQpIHtcbiAgcC5ydW4oY3R4LnRyZWUsIGN0eC5maWxlLCBkb25lKVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgbmV4dChlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC50cmVlID0gdHJlZVxuICAgICAgY3R4LmZpbGUgPSBmaWxlXG4gICAgICBuZXh0KClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVTdHJpbmdpZnkocCwgY3R4KSB7XG4gIHZhciByZXN1bHQgPSBwLnN0cmluZ2lmeShjdHgudHJlZSwgY3R4LmZpbGUpXG4gIHZhciBmaWxlID0gY3R4LmZpbGVcblxuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgfHwgcmVzdWx0ID09PSBudWxsKSB7XG4gICAgLy8gRW1wdHkuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKHJlc3VsdCkpIHtcbiAgICBmaWxlLmNvbnRlbnRzID0gcmVzdWx0XG4gIH0gZWxzZSB7XG4gICAgZmlsZS5yZXN1bHQgPSByZXN1bHRcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpcnN0IHByb2Nlc3Nvci5cbmZ1bmN0aW9uIHVuaWZpZWQoKSB7XG4gIHZhciBhdHRhY2hlcnMgPSBbXVxuICB2YXIgdHJhbnNmb3JtZXJzID0gdHJvdWdoKClcbiAgdmFyIG5hbWVzcGFjZSA9IHt9XG4gIHZhciBmcm96ZW4gPSBmYWxzZVxuICB2YXIgZnJlZXplSW5kZXggPSAtMVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgcHJvY2Vzc29yLmRhdGEgPSBkYXRhXG5cbiAgLy8gTG9jay5cbiAgcHJvY2Vzc29yLmZyZWV6ZSA9IGZyZWV6ZVxuXG4gIC8vIFBsdWdpbnMuXG4gIHByb2Nlc3Nvci5hdHRhY2hlcnMgPSBhdHRhY2hlcnNcbiAgcHJvY2Vzc29yLnVzZSA9IHVzZVxuXG4gIC8vIEFQSS5cbiAgcHJvY2Vzc29yLnBhcnNlID0gcGFyc2VcbiAgcHJvY2Vzc29yLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuICBwcm9jZXNzb3IucnVuID0gcnVuXG4gIHByb2Nlc3Nvci5ydW5TeW5jID0gcnVuU3luY1xuICBwcm9jZXNzb3IucHJvY2VzcyA9IHByb2Nlc3NcbiAgcHJvY2Vzc29yLnByb2Nlc3NTeW5jID0gcHJvY2Vzc1N5bmNcblxuICAvLyBFeHBvc2UuXG4gIHJldHVybiBwcm9jZXNzb3JcblxuICAvLyBDcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGJhc2VkIG9uIHRoZSBwcm9jZXNzb3IgaW4gdGhlIGN1cnJlbnQgc2NvcGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3NvcigpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB1bmlmaWVkKClcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZGVzdGluYXRpb24udXNlLmFwcGx5KG51bGwsIGF0dGFjaGVyc1tpbmRleF0pXG4gICAgfVxuXG4gICAgZGVzdGluYXRpb24uZGF0YShleHRlbmQodHJ1ZSwge30sIG5hbWVzcGFjZSkpXG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25cbiAgfVxuXG4gIC8vIEZyZWV6ZTogdXNlZCB0byBzaWduYWwgYSBwcm9jZXNzb3IgdGhhdCBoYXMgZmluaXNoZWQgY29uZmlndXJhdGlvbi5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIHRha2UgdW5pZmllZCBpdHNlbGY6IGl04oCZcyBmcm96ZW4uXG4gIC8vIFBsdWdpbnMgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBpdC5cbiAgLy8gUmF0aGVyLCBpdCBzaG91bGQgYmUgZXh0ZW5kZWQsIGJ5IGludm9raW5nIGl0LCBiZWZvcmUgbW9kaWZ5aW5nIGl0LlxuICAvL1xuICAvLyBJbiBlc3NlbmNlLCBhbHdheXMgaW52b2tlIHRoaXMgd2hlbiBleHBvcnRpbmcgYSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICB2YXIgdmFsdWVzXG4gICAgdmFyIHBsdWdpblxuICAgIHZhciBvcHRpb25zXG4gICAgdmFyIHRyYW5zZm9ybWVyXG5cbiAgICBpZiAoZnJvemVuKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrZnJlZXplSW5kZXggPCBhdHRhY2hlcnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZXMgPSBhdHRhY2hlcnNbZnJlZXplSW5kZXhdXG4gICAgICBwbHVnaW4gPSB2YWx1ZXNbMF1cbiAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMV1cbiAgICAgIHRyYW5zZm9ybWVyID0gbnVsbFxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWVzWzFdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybWVyID0gcGx1Z2luLmFwcGx5KHByb2Nlc3NvciwgdmFsdWVzLnNsaWNlKDEpKVxuXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy51c2UodHJhbnNmb3JtZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnJvemVuID0gdHJ1ZVxuICAgIGZyZWV6ZUluZGV4ID0gSW5maW5pdHlcblxuICAgIHJldHVybiBwcm9jZXNzb3JcbiAgfVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgLy8gR2V0dGVyIC8gc2V0dGVyIGZvciBwcm9jZXNzb3Itc3BlY2lmaWMgaW5mb3JtdGlvbi5cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBTZXQgYGtleWAuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcblxuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgYGtleWAuXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8vIFNldCBzcGFjZS5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8vIEdldCBzcGFjZS5cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvLyBQbHVnaW4gbWFuYWdlbWVudC5cbiAgLy9cbiAgLy8gUGFzcyBpdDpcbiAgLy8gKiAgIGFuIGF0dGFjaGVyIGFuZCBvcHRpb25zLFxuICAvLyAqICAgYSBwcmVzZXQsXG4gIC8vICogICBhIGxpc3Qgb2YgcHJlc2V0cywgYXR0YWNoZXJzLCBhbmQgYXJndW1lbnRzIChsaXN0IG9mIGF0dGFjaGVycyBhbmRcbiAgLy8gICAgIG9wdGlvbnMpLlxuICBmdW5jdGlvbiB1c2UodmFsdWUpIHtcbiAgICB2YXIgc2V0dGluZ3NcblxuICAgIGFzc2VydFVuZnJvemVuKCd1c2UnLCBmcm96ZW4pXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRW1wdHkuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGxlbmd0aFxuICAgICAgdmFyIGluZGV4XG5cbiAgICAgIGlmIChwbHVnaW5zID09PSBudWxsIHx8IHBsdWdpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHBsdWdpbnMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGx1Z2lucy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSAtMVxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgYWRkKHBsdWdpbnNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgbGlzdCBvZiBwbHVnaW5zLCBub3QgYCcgKyBwbHVnaW5zICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW4sIHZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSBmaW5kKHBsdWdpbilcblxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmIChwbGFpbihlbnRyeVsxXSkgJiYgcGxhaW4odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBleHRlbmQoZW50cnlbMV0sIHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cnlbMV0gPSB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNoZXJzLnB1c2goc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQocGx1Z2luKSB7XG4gICAgdmFyIGxlbmd0aCA9IGF0dGFjaGVycy5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBlbnRyeVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gYXR0YWNoZXJzW2luZGV4XVxuXG4gICAgICBpZiAoZW50cnlbMF0gPT09IHBsdWdpbikge1xuICAgICAgICByZXR1cm4gZW50cnlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHBhcnNlKGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBQYXJzZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgUGFyc2VyID0gcHJvY2Vzc29yLlBhcnNlclxuICAgIGFzc2VydFBhcnNlcigncGFyc2UnLCBQYXJzZXIpXG5cbiAgICBpZiAobmV3YWJsZShQYXJzZXIsICdwYXJzZScpKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlcihTdHJpbmcoZmlsZSksIGZpbGUpLnBhcnNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBSdW4gdHJhbnNmb3JtcyBvbiBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3JcbiAgLy8gdmZpbGUgcmVwcmVzZW50YXRpb24pLCBhc3luYy5cbiAgZnVuY3Rpb24gcnVuKG5vZGUsIGZpbGUsIGNiKSB7XG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuICAgIGZyZWV6ZSgpXG5cbiAgICBpZiAoIWNiICYmIHR5cGVvZiBmaWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGZpbGVcbiAgICAgIGZpbGUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0cmFuc2Zvcm1lcnMucnVuKG5vZGUsIHZmaWxlKGZpbGUpLCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSwgZmlsZSkge1xuICAgICAgICB0cmVlID0gdHJlZSB8fCBub2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKHRyZWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgdHJlZSwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHJ1blN5bmMobm9kZSwgZmlsZSkge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgcnVuKG5vZGUsIGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdydW5TeW5jJywgJ3J1bicsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgICByZXN1bHQgPSB0cmVlXG4gICAgfVxuICB9XG5cbiAgLy8gU3RyaW5naWZ5IGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZVxuICAvLyByZXByZXNlbnRhdGlvbikgaW50byBhIHN0cmluZyB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIENvbXBpbGVyXG5cbiAgICBmcmVlemUoKVxuICAgIENvbXBpbGVyID0gcHJvY2Vzc29yLkNvbXBpbGVyXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3N0cmluZ2lmeScsIENvbXBpbGVyKVxuICAgIGFzc2VydE5vZGUobm9kZSlcblxuICAgIGlmIChuZXdhYmxlKENvbXBpbGVyLCAnY29tcGlsZScpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBpbGVyKG5vZGUsIGZpbGUpLmNvbXBpbGUoKVxuICAgIH1cblxuICAgIHJldHVybiBDb21waWxlcihub2RlLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3NvciwgdGhlbiBydW4gdHJhbnNmb3JtcyBvbiB0aGF0IG5vZGUsIGFuZFxuICAvLyBjb21waWxlIHRoZSByZXN1bHRpbmcgbm9kZSB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLCBhbmRcbiAgLy8gc3RvcmUgdGhhdCByZXN1bHQgb24gdGhlIHZmaWxlLlxuICBmdW5jdGlvbiBwcm9jZXNzKGRvYywgY2IpIHtcbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2VzcycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgICBwaXBlbGluZS5ydW4ocHJvY2Vzc29yLCB7ZmlsZTogZmlsZX0sIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgdGhlIGdpdmVuIGRvY3VtZW50IChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pLCBzeW5jLlxuICBmdW5jdGlvbiBwcm9jZXNzU3luYyhkb2MpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciBmaWxlXG5cbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5Db21waWxlcilcbiAgICBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgcHJvY2VzcyhmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncHJvY2Vzc1N5bmMnLCAncHJvY2VzcycsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIGZpbGVcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGEgY29uc3RydWN0b3IuXG5mdW5jdGlvbiBuZXdhYmxlKHZhbHVlLCBuYW1lKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmXG4gICAgdmFsdWUucHJvdG90eXBlICYmXG4gICAgLy8gQSBmdW5jdGlvbiB3aXRoIGtleXMgaW4gaXRzIHByb3RvdHlwZSBpcyBwcm9iYWJseSBhIGNvbnN0cnVjdG9yLlxuICAgIC8vIENsYXNzZXPigJkgcHJvdG90eXBlIG1ldGhvZHMgYXJlIG5vdCBlbnVtZXJhYmxlLCBzbyB3ZSBjaGVjayBpZiBzb21lIHZhbHVlXG4gICAgLy8gZXhpc3RzIGluIHRoZSBwcm90b3R5cGUuXG4gICAgKGtleXModmFsdWUucHJvdG90eXBlKSB8fCBuYW1lIGluIHZhbHVlLnByb3RvdHlwZSlcbiAgKVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCB3aXRoIGtleXMuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciBrZXlcbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEFzc2VydCBhIHBhcnNlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgUGFyc2VyKSB7XG4gIGlmICh0eXBlb2YgUGFyc2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgUGFyc2VyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGEgY29tcGlsZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0Q29tcGlsZXIobmFtZSwgQ29tcGlsZXIpIHtcbiAgaWYgKHR5cGVvZiBDb21waWxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYENvbXBpbGVyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoZSBwcm9jZXNzb3IgaXMgbm90IGZyb3plbi5cbmZ1bmN0aW9uIGFzc2VydFVuZnJvemVuKG5hbWUsIGZyb3plbikge1xuICBpZiAoZnJvemVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBpbnZva2UgYCcgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgJ2Agb24gYSBmcm96ZW4gcHJvY2Vzc29yLlxcbkNyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgZmlyc3QsIGJ5IGludm9raW5nIGl0OiB1c2UgYHByb2Nlc3NvcigpYCBpbnN0ZWFkIG9mIGBwcm9jZXNzb3JgLidcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBub2RlYCBpcyBhIHVuaXN0IG5vZGUuXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBjb21wbGV0ZWAgaXMgYHRydWVgLlxuZnVuY3Rpb24gYXNzZXJ0RG9uZShuYW1lLCBhc3luY05hbWUsIGNvbXBsZXRlKSB7XG4gIGlmICghY29tcGxldGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgZmluaXNoZWQgYXN5bmMuIFVzZSBgJyArIGFzeW5jTmFtZSArICdgIGluc3RlYWQnXG4gICAgKVxuICB9XG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4ge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXHRyZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn07XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0XG5cbmZ1bmN0aW9uIGNvbnZlcnQodGVzdCkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb2tcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gKCdsZW5ndGgnIGluIHRlc3QgPyBhbnlGYWN0b3J5IDogbWF0Y2hlc0ZhY3RvcnkpKHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVzdFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBbGwodGVzdHMpIHtcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgbGVuZ3RoID0gdGVzdHMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuLy8gVXRpbGl0eSBhc3NlcnQgZWFjaCBwcm9wZXJ0eSBpbiBgdGVzdGAgaXMgcmVwcmVzZW50ZWQgaW4gYG5vZGVgLCBhbmQgZWFjaFxuLy8gdmFsdWVzIGFyZSBzdHJpY3RseSBlcXVhbC5cbmZ1bmN0aW9uIG1hdGNoZXNGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKG5vZGUpIHtcbiAgICB2YXIga2V5XG5cbiAgICBmb3IgKGtleSBpbiB0ZXN0KSB7XG4gICAgICBpZiAobm9kZVtrZXldICE9PSB0ZXN0W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIHZhciBjaGVja3MgPSBjb252ZXJ0QWxsKHRlc3RzKVxuICB2YXIgbGVuZ3RoID0gY2hlY2tzLmxlbmd0aFxuXG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcygpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUudHlwZSA9PT0gdGVzdClcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlUG9zaXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlUG9zaXRpb24obm9kZSwgZm9yY2UpIHtcbiAgdmlzaXQobm9kZSwgZm9yY2UgPyBoYXJkIDogc29mdClcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gaGFyZChub2RlKSB7XG4gIGRlbGV0ZSBub2RlLnBvc2l0aW9uXG59XG5cbmZ1bmN0aW9uIHNvZnQobm9kZSkge1xuICBub2RlLnBvc2l0aW9uID0gdW5kZWZpbmVkXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICAvLyBOb3RoaW5nLlxuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3Bvc2l0aW9uJykgfHwgb3duLmNhbGwodmFsdWUsICd0eXBlJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUucG9zaXRpb24pXG4gIH1cblxuICAvLyBQb3NpdGlvbi5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnc3RhcnQnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2VuZCcpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlKVxuICB9XG5cbiAgLy8gUG9pbnQuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ2xpbmUnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2NvbHVtbicpKSB7XG4gICAgcmV0dXJuIHBvaW50KHZhbHVlKVxuICB9XG5cbiAgLy8gP1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gcG9pbnQocG9pbnQpIHtcbiAgaWYgKCFwb2ludCB8fCB0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnKSB7XG4gICAgcG9pbnQgPSB7fVxuICB9XG5cbiAgcmV0dXJuIGluZGV4KHBvaW50LmxpbmUpICsgJzonICsgaW5kZXgocG9pbnQuY29sdW1uKVxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgaWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICBwb3MgPSB7fVxuICB9XG5cbiAgcmV0dXJuIHBvaW50KHBvcy5zdGFydCkgKyAnLScgKyBwb2ludChwb3MuZW5kKVxufVxuXG5mdW5jdGlvbiBpbmRleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcblxudmFyIENPTlRJTlVFID0gdHJ1ZVxudmFyIFNLSVAgPSAnc2tpcCdcbnZhciBFWElUID0gZmFsc2VcblxudmlzaXRQYXJlbnRzLkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0UGFyZW50cy5TS0lQID0gU0tJUFxudmlzaXRQYXJlbnRzLkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIHZhciBpc1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgaXMgPSBjb252ZXJ0KHRlc3QpXG5cbiAgb25lKHRyZWUsIG51bGwsIFtdKVxuXG4gIC8vIFZpc2l0IGEgc2luZ2xlIG5vZGUuXG4gIGZ1bmN0aW9uIG9uZShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHZhciBzdWJyZXN1bHRcblxuICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IG51bGwpKSB7XG4gICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgIHN1YnJlc3VsdCA9IHRvUmVzdWx0KGFsbChub2RlLmNoaWxkcmVuLCBwYXJlbnRzLmNvbmNhdChub2RlKSkpXG4gICAgICByZXR1cm4gc3VicmVzdWx0WzBdID09PSBFWElUID8gc3VicmVzdWx0IDogcmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gVmlzaXQgY2hpbGRyZW4gaW4gYHBhcmVudGAuXG4gIGZ1bmN0aW9uIGFsbChjaGlsZHJlbiwgcGFyZW50cykge1xuICAgIHZhciBtaW4gPSAtMVxuICAgIHZhciBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuICAgIHZhciBpbmRleCA9IChyZXZlcnNlID8gY2hpbGRyZW4ubGVuZ3RoIDogbWluKSArIHN0ZXBcbiAgICB2YXIgcmVzdWx0XG5cbiAgICB3aGlsZSAoaW5kZXggPiBtaW4gJiYgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IG9uZShjaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnRzKVxuXG4gICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSB0eXBlb2YgcmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHJlc3VsdFsxXSA6IGluZGV4ICsgc3RlcFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFxuXG52YXIgdmlzaXRQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcblxudmFyIENPTlRJTlVFID0gdmlzaXRQYXJlbnRzLkNPTlRJTlVFXG52YXIgU0tJUCA9IHZpc2l0UGFyZW50cy5TS0lQXG52YXIgRVhJVCA9IHZpc2l0UGFyZW50cy5FWElUXG5cbnZpc2l0LkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0LlNLSVAgPSBTS0lQXG52aXNpdC5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdCh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgdmFyIGluZGV4ID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsXG4gICAgcmV0dXJuIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG5mdW5jdGlvbiBmYWN0b3J5KGZpbGUpIHtcbiAgdmFyIGNvbnRlbnRzID0gaW5kaWNlcyhTdHJpbmcoZmlsZSkpXG5cbiAgcmV0dXJuIHtcbiAgICB0b1Bvc2l0aW9uOiBvZmZzZXRUb1Bvc2l0aW9uRmFjdG9yeShjb250ZW50cyksXG4gICAgdG9PZmZzZXQ6IHBvc2l0aW9uVG9PZmZzZXRGYWN0b3J5KGNvbnRlbnRzKVxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IHRoZSBsaW5lIGFuZCBjb2x1bW4tYmFzZWQgYHBvc2l0aW9uYCBmb3IgYG9mZnNldGAgaW4gdGhlIGJvdW5kXG4vLyBpbmRpY2VzLlxuZnVuY3Rpb24gb2Zmc2V0VG9Qb3NpdGlvbkZhY3RvcnkoaW5kaWNlcykge1xuICByZXR1cm4gb2Zmc2V0VG9Qb3NpdGlvblxuXG4gIC8vIEdldCB0aGUgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgZm9yIGBvZmZzZXRgIGluIHRoZSBib3VuZCBpbmRpY2VzLlxuICBmdW5jdGlvbiBvZmZzZXRUb1Bvc2l0aW9uKG9mZnNldCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGluZGljZXMubGVuZ3RoXG5cbiAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChpbmRpY2VzW2luZGV4XSA+IG9mZnNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpbmU6IGluZGV4ICsgMSxcbiAgICAgICAgICBjb2x1bW46IG9mZnNldCAtIChpbmRpY2VzW2luZGV4IC0gMV0gfHwgMCkgKyAxLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCB0aGUgYG9mZnNldGAgZm9yIGEgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgaW4gdGhlXG4vLyBib3VuZCBpbmRpY2VzLlxuZnVuY3Rpb24gcG9zaXRpb25Ub09mZnNldEZhY3RvcnkoaW5kaWNlcykge1xuICByZXR1cm4gcG9zaXRpb25Ub09mZnNldFxuXG4gIC8vIEdldCB0aGUgYG9mZnNldGAgZm9yIGEgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgaW4gdGhlIGJvdW5kXG4gIC8vIGluZGljZXMuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uVG9PZmZzZXQocG9zaXRpb24pIHtcbiAgICB2YXIgbGluZSA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLmxpbmVcbiAgICB2YXIgY29sdW1uID0gcG9zaXRpb24gJiYgcG9zaXRpb24uY29sdW1uXG5cbiAgICBpZiAoIWlzTmFOKGxpbmUpICYmICFpc05hTihjb2x1bW4pICYmIGxpbmUgLSAxIGluIGluZGljZXMpIHtcbiAgICAgIHJldHVybiAoaW5kaWNlc1tsaW5lIC0gMl0gfHwgMCkgKyBjb2x1bW4gLSAxIHx8IDBcbiAgICB9XG5cbiAgICByZXR1cm4gLTFcbiAgfVxufVxuXG4vLyBHZXQgaW5kaWNlcyBvZiBsaW5lLWJyZWFrcyBpbiBgdmFsdWVgLlxuZnVuY3Rpb24gaW5kaWNlcyh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxuJylcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgcmVzdWx0LnB1c2goaW5kZXggKyAxKVxuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxuJywgaW5kZXggKyAxKVxuICB9XG5cbiAgcmVzdWx0LnB1c2godmFsdWUubGVuZ3RoICsgMSlcblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBWTWVzc2FnZVxuXG4vLyBJbmhlcml0IGZyb20gYEVycm9yI2AuXG5mdW5jdGlvbiBWTWVzc2FnZVByb3RvdHlwZSgpIHt9XG5WTWVzc2FnZVByb3RvdHlwZS5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGVcblZNZXNzYWdlLnByb3RvdHlwZSA9IG5ldyBWTWVzc2FnZVByb3RvdHlwZSgpXG5cbi8vIE1lc3NhZ2UgcHJvcGVydGllcy5cbnZhciBwcm90byA9IFZNZXNzYWdlLnByb3RvdHlwZVxuXG5wcm90by5maWxlID0gJydcbnByb3RvLm5hbWUgPSAnJ1xucHJvdG8ucmVhc29uID0gJydcbnByb3RvLm1lc3NhZ2UgPSAnJ1xucHJvdG8uc3RhY2sgPSAnJ1xucHJvdG8uZmF0YWwgPSBudWxsXG5wcm90by5jb2x1bW4gPSBudWxsXG5wcm90by5saW5lID0gbnVsbFxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgVk1lc3NhZ2UuXG4vL1xuLy8gTm90ZTogV2UgY2Fubm90IGludm9rZSBgRXJyb3JgIG9uIHRoZSBjcmVhdGVkIGNvbnRleHQsIGFzIHRoYXQgYWRkcyByZWFkb25seVxuLy8gYGxpbmVgIGFuZCBgY29sdW1uYCBhdHRyaWJ1dGVzIG9uIFNhZmFyaSA5LCB0aHVzIHRocm93aW5nIGFuZCBmYWlsaW5nIHRoZVxuLy8gZGF0YS5cbmZ1bmN0aW9uIFZNZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgcGFydHNcbiAgdmFyIHJhbmdlXG4gIHZhciBsb2NhdGlvblxuXG4gIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgb3JpZ2luID0gcG9zaXRpb25cbiAgICBwb3NpdGlvbiA9IG51bGxcbiAgfVxuXG4gIHBhcnRzID0gcGFyc2VPcmlnaW4ob3JpZ2luKVxuICByYW5nZSA9IHN0cmluZ2lmeShwb3NpdGlvbikgfHwgJzE6MSdcblxuICBsb2NhdGlvbiA9IHtcbiAgICBzdGFydDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH0sXG4gICAgZW5kOiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfVxuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKHBvc2l0aW9uICYmIHBvc2l0aW9uLnBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbi5wb3NpdGlvblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uKSB7XG4gICAgLy8gUG9zaXRpb24uXG4gICAgaWYgKHBvc2l0aW9uLnN0YXJ0KSB7XG4gICAgICBsb2NhdGlvbiA9IHBvc2l0aW9uXG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnN0YXJ0XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBvaW50LlxuICAgICAgbG9jYXRpb24uc3RhcnQgPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGlmIChyZWFzb24uc3RhY2spIHtcbiAgICB0aGlzLnN0YWNrID0gcmVhc29uLnN0YWNrXG4gICAgcmVhc29uID0gcmVhc29uLm1lc3NhZ2VcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IHJlYXNvblxuICB0aGlzLm5hbWUgPSByYW5nZVxuICB0aGlzLnJlYXNvbiA9IHJlYXNvblxuICB0aGlzLmxpbmUgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLmxpbmUgOiBudWxsXG4gIHRoaXMuY29sdW1uID0gcG9zaXRpb24gPyBwb3NpdGlvbi5jb2x1bW4gOiBudWxsXG4gIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICB0aGlzLnNvdXJjZSA9IHBhcnRzWzBdXG4gIHRoaXMucnVsZUlkID0gcGFydHNbMV1cbn1cblxuZnVuY3Rpb24gcGFyc2VPcmlnaW4ob3JpZ2luKSB7XG4gIHZhciByZXN1bHQgPSBbbnVsbCwgbnVsbF1cbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnKSB7XG4gICAgaW5kZXggPSBvcmlnaW4uaW5kZXhPZignOicpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXN1bHRbMV0gPSBvcmlnaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0WzBdID0gb3JpZ2luLnNsaWNlKDAsIGluZGV4KVxuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luLnNsaWNlKGluZGV4ICsgMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbnZhciByZXBsYWNlID0gcmVxdWlyZSgncmVwbGFjZS1leHQnKVxudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG52YXIgcHJvdG8gPSBWRmlsZS5wcm90b3R5cGVcblxuLy8gT3JkZXIgb2Ygc2V0dGluZyAobGVhc3Qgc3BlY2lmaWMgdG8gbW9zdCksIHdlIG5lZWQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZVxuLy8gYHtzdGVtOiAnYScsIHBhdGg6ICd+L2IuanMnfWAgd291bGQgdGhyb3csIGFzIGEgcGF0aCBpcyBuZWVkZWQgYmVmb3JlIGFcbi8vIHN0ZW0gY2FuIGJlIHNldC5cbnZhciBvcmRlciA9IFsnaGlzdG9yeScsICdwYXRoJywgJ2Jhc2VuYW1lJywgJ3N0ZW0nLCAnZXh0bmFtZScsICdkaXJuYW1lJ11cblxucHJvdG8udG9TdHJpbmcgPSB0b1N0cmluZ1xuXG4vLyBBY2Nlc3MgZnVsbCBwYXRoIChgfi9pbmRleC5taW4uanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3BhdGgnLCB7Z2V0OiBnZXRQYXRoLCBzZXQ6IHNldFBhdGh9KVxuXG4vLyBBY2Nlc3MgcGFyZW50IHBhdGggKGB+YCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdkaXJuYW1lJywge2dldDogZ2V0RGlybmFtZSwgc2V0OiBzZXREaXJuYW1lfSlcblxuLy8gQWNjZXNzIGJhc2VuYW1lIChgaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdiYXNlbmFtZScsIHtnZXQ6IGdldEJhc2VuYW1lLCBzZXQ6IHNldEJhc2VuYW1lfSlcblxuLy8gQWNjZXNzIGV4dG5hbWUgKGAuanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2V4dG5hbWUnLCB7Z2V0OiBnZXRFeHRuYW1lLCBzZXQ6IHNldEV4dG5hbWV9KVxuXG4vLyBBY2Nlc3Mgc3RlbSAoYGluZGV4Lm1pbmApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnc3RlbScsIHtnZXQ6IGdldFN0ZW0sIHNldDogc2V0U3RlbX0pXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBmaWxlLlxuZnVuY3Rpb24gVkZpbGUob3B0aW9ucykge1xuICB2YXIgcHJvcFxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyB8fCBidWZmZXIob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge2NvbnRlbnRzOiBvcHRpb25zfVxuICB9IGVsc2UgaWYgKCdtZXNzYWdlJyBpbiBvcHRpb25zICYmICdtZXNzYWdlcycgaW4gb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBWRmlsZShvcHRpb25zKVxuICB9XG5cbiAgdGhpcy5kYXRhID0ge31cbiAgdGhpcy5tZXNzYWdlcyA9IFtdXG4gIHRoaXMuaGlzdG9yeSA9IFtdXG4gIHRoaXMuY3dkID0gcHJvY2Vzcy5jd2QoKVxuXG4gIC8vIFNldCBwYXRoIHJlbGF0ZWQgcHJvcGVydGllcyBpbiB0aGUgY29ycmVjdCBvcmRlci5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBvcmRlci5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHByb3AgPSBvcmRlcltpbmRleF1cblxuICAgIGlmIChvd24uY2FsbChvcHRpb25zLCBwcm9wKSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgbm9uLXBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzLlxuICBmb3IgKHByb3AgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcmRlci5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gc2V0UGF0aChwYXRoKSB7XG4gIGFzc2VydE5vbkVtcHR5KHBhdGgsICdwYXRoJylcblxuICBpZiAocGF0aCAhPT0gdGhpcy5wYXRoKSB7XG4gICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREaXJuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmRpcm5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXREaXJuYW1lKGRpcm5hbWUpIHtcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdkaXJuYW1lJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKGRpcm5hbWUgfHwgJycsIHRoaXMuYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEJhc2VuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmJhc2VuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0QmFzZW5hbWUoYmFzZW5hbWUpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIGFzc2VydFBhcnQoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIGJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRFeHRuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmV4dG5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRFeHRuYW1lKGV4dG5hbWUpIHtcbiAgdmFyIGV4dCA9IGV4dG5hbWUgfHwgJydcblxuICBhc3NlcnRQYXJ0KGV4dCwgJ2V4dG5hbWUnKVxuICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2V4dG5hbWUnKVxuXG4gIGlmIChleHQpIHtcbiAgICBpZiAoZXh0LmNoYXJBdCgwKSAhPT0gJy4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBtdXN0IHN0YXJ0IHdpdGggYC5gJylcbiAgICB9XG5cbiAgICBpZiAoZXh0LmluZGV4T2YoJy4nLCAxKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIGNhbm5vdCBjb250YWluIG11bHRpcGxlIGRvdHMnKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMucGF0aCA9IHJlcGxhY2UodGhpcy5wYXRoLCBleHQpXG59XG5cbmZ1bmN0aW9uIGdldFN0ZW0oKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJ1xuICAgID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgsIHRoaXMuZXh0bmFtZSlcbiAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRTdGVtKHN0ZW0pIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoc3RlbSwgJ3N0ZW0nKVxuICBhc3NlcnRQYXJ0KHN0ZW0sICdzdGVtJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgc3RlbSArICh0aGlzLmV4dG5hbWUgfHwgJycpKVxufVxuXG4vLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBmaWxlLlxuZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2RpbmcpIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5jb250ZW50cyB8fCAnJ1xuICByZXR1cm4gYnVmZmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKGVuY29kaW5nKSA6IFN0cmluZyh2YWx1ZSlcbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBhIHBhdGggKGkuZS4sIGRvZXMgbm90IGNvbnRhaW4gYHBhdGguc2VwYCkuXG5mdW5jdGlvbiBhc3NlcnRQYXJ0KHBhcnQsIG5hbWUpIHtcbiAgaWYgKHBhcnQuaW5kZXhPZihwYXRoLnNlcCkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBhIHBhdGg6IGRpZCBub3QgZXhwZWN0IGAnICsgcGF0aC5zZXAgKyAnYCdcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBlbXB0eS5cbmZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5KHBhcnQsIG5hbWUpIHtcbiAgaWYgKCFwYXJ0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgZW1wdHknKVxuICB9XG59XG5cbi8vIEFzc2VydCBgcGF0aGAgZXhpc3RzLlxuZnVuY3Rpb24gYXNzZXJ0UGF0aChwYXRoLCBuYW1lKSB7XG4gIGlmICghcGF0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2V0dGluZyBgJyArIG5hbWUgKyAnYCByZXF1aXJlcyBgcGF0aGAgdG8gYmUgc2V0IHRvbycpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVk1lc3NhZ2UgPSByZXF1aXJlKCd2ZmlsZS1tZXNzYWdlJylcbnZhciBWRmlsZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbnByb3RvLm1lc3NhZ2UgPSBtZXNzYWdlXG5wcm90by5pbmZvID0gaW5mb1xucHJvdG8uZmFpbCA9IGZhaWxcblxuLy8gQ3JlYXRlIGEgbWVzc2FnZSB3aXRoIGByZWFzb25gIGF0IGBwb3NpdGlvbmAuXG4vLyBXaGVuIGFuIGVycm9yIGlzIHBhc3NlZCBpbiBhcyBgcmVhc29uYCwgY29waWVzIHRoZSBzdGFjay5cbmZ1bmN0aW9uIG1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBmaWxlUGF0aCA9IHRoaXMucGF0aFxuICB2YXIgbWVzc2FnZSA9IG5ldyBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pXG5cbiAgaWYgKGZpbGVQYXRoKSB7XG4gICAgbWVzc2FnZS5uYW1lID0gZmlsZVBhdGggKyAnOicgKyBtZXNzYWdlLm5hbWVcbiAgICBtZXNzYWdlLmZpbGUgPSBmaWxlUGF0aFxuICB9XG5cbiAgbWVzc2FnZS5mYXRhbCA9IGZhbHNlXG5cbiAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuLy8gRmFpbDogY3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsIGFuZCB0aHJvd3MgaXQuXG5mdW5jdGlvbiBmYWlsKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cbiAgbWVzc2FnZS5mYXRhbCA9IHRydWVcblxuICB0aHJvdyBtZXNzYWdlXG59XG5cbi8vIEluZm86IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgbWFya3MgdGhlIGZhdGFsaXR5XG4vLyBhcyBudWxsLlxuZnVuY3Rpb24gaW5mbygpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBudWxsXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9