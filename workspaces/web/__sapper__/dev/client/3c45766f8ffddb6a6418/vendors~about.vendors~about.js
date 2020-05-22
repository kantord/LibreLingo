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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvYmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9jb2xsYXBzZS13aGl0ZS1zcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWFscGhhbnVtZXJpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtYWxwaGFudW1lcmljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWhleGFkZWNpbWFsL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy13aGl0ZXNwYWNlLWNoYXJhY3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2xvbmdlc3Qtc3RyZWFrL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tYXJrZG93bi1lc2NhcGVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tYXJrZG93bi10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1jb21wYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvZXNjYXBlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9hbGwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL2Jsb2NrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9jb21waWxlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9vbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL29yZGVyZWQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL3Vub3JkZXJlZC1pdGVtcy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvY29weS1pZGVudGlmaWVyLWVuY29kaW5nLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2VuY2xvc2UtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW5jbG9zZS11cmkuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW50ZXItbGluay1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW50aXR5LXByZWZpeC1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvcGFkLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9icmVhay5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVsZXRlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaW1hZ2UtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saW5rLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvc3Ryb25nLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS1jZWxsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9ibG9jay1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdGFnLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3VybC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9hdXRvLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9ibGFuay1saW5lLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1mZW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaGVhZGluZy1zZXRleHQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWJsb2NrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9saW5rLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3JlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdXJsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2dldC1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL3JlbW92ZS1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVwbGFjZS1leHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3N0YXRlLXRvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3RyaW5naWZ5LWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cmltLXRyYWlsaW5nLWxpbmVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cmltL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Ryb3VnaC93cmFwLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmhlcml0L2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXJlbW92ZS1wb3NpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4UFk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLHNFQUFrQjs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RFk7O0FBRVo7O0FBRUE7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUUsK0JBQStCO0FBQy9CLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Qlk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLDBGQUEyQjtBQUNoRCxjQUFjLG1CQUFPLENBQUMsOEZBQTZCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQywwREFBWTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDMUMscUJBQXFCLG1CQUFPLENBQUMsd0VBQW1CO0FBQ2hELG1CQUFtQixtQkFBTyxDQUFDLG1GQUFpQjs7QUFFNUM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JEWTs7QUFFWixjQUFjLG1CQUFPLENBQUMsMEVBQW9COztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNZOztBQUVaOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCWTs7QUFFWixZQUFZLG1CQUFPLENB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O0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCLGNBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVQWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsZ0VBQWU7QUFDcEMsV0FBVyxtQkFBTyxDQUFDLDRFQUFxQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pHWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsNEdBQXVCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVHWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsZ0JBQWdCLG1CQUFPLENBQUMsb0dBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxxQkFBcUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hSWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLGtHQUFrQjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRFk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGtFQUFnQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsMERBQVk7QUFDbEMsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWlCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyxnR0FBaUI7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDakhZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixXQUFXLG1CQUFPLENBQUMsd0VBQW1CO0FBQ3RDLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsc0dBQW9COztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckZZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxrR0FBa0I7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdElZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDckdZOztBQUVaLG1CQUFtQixtQkFBTyxDQUFDLDBGQUFjOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7Ozs7Ozs7Ozs7Ozs7QUM5R1k7O0FBRVosbUJBQW1CLG1CQUFPLENBQUMsb0VBQWlCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyw0RkFBZTtBQUNwQyxVQUFVLG1CQUFPLENBQUMsMEZBQWM7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsd0JBQXdCLDhCQUE4QjtBQUN0RDs7Ozs7Ozs7Ozs7OztBQzFEWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLDhGQUFnQjs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlXWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLGdFQUFlO0FBQ3BDLGNBQWMsbUJBQU8sQ0FBQywwREFBWTtBQUNsQyxnQkFBZ0IsbUJBQU8sQ0FBQyxnSEFBeUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsc0hBQTRCO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLG9HQUFtQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQ7QUFDQSxtQ0FBbUMsSUFBSTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xjWTs7QUFFWixXQUFXLG1CQUFPLENBQUMs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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSw0REFBNEQ7QUFDM0U7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2T1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdUWTs7QUFFWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ1k7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Q0FBQyxrREFBUTtBQUM3QixZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLFdBQVc7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Rlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLHNFQUFrQjs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiM2M0NTc2NmY4ZmZkZGI2YTY0MTgvdmVuZG9yc35hYm91dC52ZW5kb3JzfmFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmFpbFxuXG5mdW5jdGlvbiBiYWlsKGVycikge1xuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjb3VudFxuXG5mdW5jdGlvbiBjY291bnQodmFsdWUsIGNoYXJhY3Rlcikge1xuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgY291bnQgPSAwXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgaW5kZXggPSB2YWwuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHZhbC5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyAxKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xsYXBzZVxuXG4vLyBgY29sbGFwc2UoJyBcXHRcXG5iYXIgXFxuYmF6XFx0JykgLy8gJyBiYXIgYmF6ICdgXG5mdW5jdGlvbiBjb2xsYXBzZSh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXHMrL2csICcgJylcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsgLyoqLyB9XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbi8vIElmIG5hbWUgaXMgJ19fcHJvdG9fXycsIGFuZCBPYmplY3QuZGVmaW5lUHJvcGVydHkgaXMgYXZhaWxhYmxlLCBkZWZpbmUgX19wcm90b19fIGFzIGFuIG93biBwcm9wZXJ0eSBvbiB0YXJnZXRcbnZhciBzZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIHNldFByb3BlcnR5KHRhcmdldCwgb3B0aW9ucykge1xuXHRpZiAoZGVmaW5lUHJvcGVydHkgJiYgb3B0aW9ucy5uYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGRlZmluZVByb3BlcnR5KHRhcmdldCwgb3B0aW9ucy5uYW1lLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IG9wdGlvbnMubmV3VmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHRhcmdldFtvcHRpb25zLm5hbWVdID0gb3B0aW9ucy5uZXdWYWx1ZTtcblx0fVxufTtcblxuLy8gUmV0dXJuIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIF9fcHJvdG9fXyBpZiAnX19wcm90b19fJyBpcyBub3QgYW4gb3duIHByb3BlcnR5XG52YXIgZ2V0UHJvcGVydHkgPSBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIG5hbWUpIHtcblx0aWYgKG5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0aWYgKCFoYXNPd24uY2FsbChvYmosIG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdm9pZCAwO1xuXHRcdH0gZWxzZSBpZiAoZ09QRCkge1xuXHRcdFx0Ly8gSW4gZWFybHkgdmVyc2lvbnMgb2Ygbm9kZSwgb2JqWydfX3Byb3RvX18nXSBpcyBidWdneSB3aGVuIG9iaiBoYXNcblx0XHRcdC8vIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoKSB3b3Jrcy5cblx0XHRcdHJldHVybiBnT1BEKG9iaiwgbmFtZSkudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9ialtuYW1lXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmU7XG5cdHZhciB0YXJnZXQgPSBhcmd1bWVudHNbMF07XG5cdHZhciBpID0gMTtcblx0dmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdHZhciBkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9XG5cdGlmICh0YXJnZXQgPT0gbnVsbCB8fCAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSBnZXRQcm9wZXJ0eSh0YXJnZXQsIG5hbWUpO1xuXHRcdFx0XHRjb3B5ID0gZ2V0UHJvcGVydHkob3B0aW9ucywgbmFtZSk7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KSB9KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c2V0UHJvcGVydHkodGFyZ2V0LCB7IG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBjb3B5IH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWxwaGFiZXRpY2FsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhbHBoYWJldGljYWwuXG5mdW5jdGlvbiBhbHBoYWJldGljYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIC8qIGEteiAqLyB8fFxuICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIC8qIEEtWiAqL1xuICApXG59XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHJldHVybiAhL1teMC05YS16XFx4REYtXFx4RkZdLy50ZXN0KHN0ci50b0xvd2VyQ2FzZSgpKTtcbn07XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhbnVtZXJpY2FsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhbHBoYW51bWVyaWNhbC5cbmZ1bmN0aW9uIGFscGhhbnVtZXJpY2FsKGNoYXJhY3Rlcikge1xuICByZXR1cm4gYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgfHwgZGVjaW1hbChjaGFyYWN0ZXIpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBkZWNpbWFsLlxuZnVuY3Rpb24gZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyAvKiAwLTkgKi9cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhleGFkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBoZXhhZGVjaW1hbC5cbmZ1bmN0aW9uIGhleGFkZWNpbWFsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMDIpIC8qIHogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gNzApIC8qIFogKi8gfHxcbiAgICAoY29kZSA+PSA0OCAvKiBBICovICYmIGNvZGUgPD0gNTcpIC8qIFogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd2hpdGVzcGFjZVxuXG52YXIgZnJvbUNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgcmUgPSAvXFxzL1xuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB7XG4gIHJldHVybiByZS50ZXN0KFxuICAgIHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdudW1iZXInID8gZnJvbUNvZGUoY2hhcmFjdGVyKSA6IGNoYXJhY3Rlci5jaGFyQXQoMClcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd29yZENoYXJhY3RlclxuXG52YXIgZnJvbUNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgcmUgPSAvXFx3L1xuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYSB3b3JkIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHdvcmRDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiByZS50ZXN0KFxuICAgIHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdudW1iZXInID8gZnJvbUNvZGUoY2hhcmFjdGVyKSA6IGNoYXJhY3Rlci5jaGFyQXQoMClcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9uZ2VzdFN0cmVha1xuXG4vLyBHZXQgdGhlIGNvdW50IG9mIHRoZSBsb25nZXN0IHJlcGVhdGluZyBzdHJlYWsgb2YgYGNoYXJhY3RlcmAgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGxvbmdlc3RTdHJlYWsodmFsdWUsIGNoYXJhY3Rlcikge1xuICB2YXIgY291bnQgPSAwXG4gIHZhciBtYXhpbXVtID0gMFxuICB2YXIgZXhwZWN0ZWRcbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnIHx8IGNoYXJhY3Rlci5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNoYXJhY3RlcicpXG4gIH1cblxuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlcilcbiAgZXhwZWN0ZWQgPSBpbmRleFxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb3VudCsrXG5cbiAgICBpZiAoaW5kZXggPT09IGV4cGVjdGVkKSB7XG4gICAgICBpZiAoY291bnQgPiBtYXhpbXVtKSB7XG4gICAgICAgIG1heGltdW0gPSBjb3VudFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDFcbiAgICB9XG5cbiAgICBleHBlY3RlZCA9IGluZGV4ICsgMVxuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIsIGV4cGVjdGVkKVxuICB9XG5cbiAgcmV0dXJuIG1heGltdW1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZXNcblxudmFyIGRlZmF1bHRzID0gW1xuICAnXFxcXCcsXG4gICdgJyxcbiAgJyonLFxuICAneycsXG4gICd9JyxcbiAgJ1snLFxuICAnXScsXG4gICcoJyxcbiAgJyknLFxuICAnIycsXG4gICcrJyxcbiAgJy0nLFxuICAnLicsXG4gICchJyxcbiAgJ18nLFxuICAnPidcbl1cblxudmFyIGdmbSA9IGRlZmF1bHRzLmNvbmNhdChbJ34nLCAnfCddKVxuXG52YXIgY29tbW9ubWFyayA9IGdmbS5jb25jYXQoW1xuICAnXFxuJyxcbiAgJ1wiJyxcbiAgJyQnLFxuICAnJScsXG4gICcmJyxcbiAgXCInXCIsXG4gICcsJyxcbiAgJy8nLFxuICAnOicsXG4gICc7JyxcbiAgJzwnLFxuICAnPScsXG4gICc/JyxcbiAgJ0AnLFxuICAnXidcbl0pXG5cbmVzY2FwZXMuZGVmYXVsdCA9IGRlZmF1bHRzXG5lc2NhcGVzLmdmbSA9IGdmbVxuZXNjYXBlcy5jb21tb25tYXJrID0gY29tbW9ubWFya1xuXG4vLyBHZXQgbWFya2Rvd24gZXNjYXBlcy5cbmZ1bmN0aW9uIGVzY2FwZXMob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHNldHRpbmdzLmNvbW1vbm1hcmspIHtcbiAgICByZXR1cm4gY29tbW9ubWFya1xuICB9XG5cbiAgcmV0dXJuIHNldHRpbmdzLmdmbSA/IGdmbSA6IGRlZmF1bHRzXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duVGFibGVcblxudmFyIHRyYWlsaW5nV2hpdGVzcGFjZSA9IC8gKyQvXG5cbi8vIENoYXJhY3RlcnMuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZGFzaCA9ICctJ1xudmFyIGNvbG9uID0gJzonXG52YXIgdmVydGljYWxCYXIgPSAnfCdcblxudmFyIHggPSAwXG52YXIgQyA9IDY3XG52YXIgTCA9IDc2XG52YXIgUiA9IDgyXG52YXIgYyA9IDk5XG52YXIgbCA9IDEwOFxudmFyIHIgPSAxMTRcblxuLy8gQ3JlYXRlIGEgdGFibGUgZnJvbSBhIG1hdHJpeCBvZiBzdHJpbmdzLlxuZnVuY3Rpb24gbWFya2Rvd25UYWJsZSh0YWJsZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBwYWRkaW5nID0gc2V0dGluZ3MucGFkZGluZyAhPT0gZmFsc2VcbiAgdmFyIHN0YXJ0ID0gc2V0dGluZ3MuZGVsaW1pdGVyU3RhcnQgIT09IGZhbHNlXG4gIHZhciBlbmQgPSBzZXR0aW5ncy5kZWxpbWl0ZXJFbmQgIT09IGZhbHNlXG4gIHZhciBhbGlnbiA9IChzZXR0aW5ncy5hbGlnbiB8fCBbXSkuY29uY2F0KClcbiAgdmFyIGFsaWduRGVsaW1pdGVycyA9IHNldHRpbmdzLmFsaWduRGVsaW1pdGVycyAhPT0gZmFsc2VcbiAgdmFyIGFsaWdubWVudHMgPSBbXVxuICB2YXIgc3RyaW5nTGVuZ3RoID0gc2V0dGluZ3Muc3RyaW5nTGVuZ3RoIHx8IGRlZmF1bHRTdHJpbmdMZW5ndGhcbiAgdmFyIHJvd0luZGV4ID0gLTFcbiAgdmFyIHJvd0xlbmd0aCA9IHRhYmxlLmxlbmd0aFxuICB2YXIgY2VsbE1hdHJpeCA9IFtdXG4gIHZhciBzaXplTWF0cml4ID0gW11cbiAgdmFyIHJvdyA9IFtdXG4gIHZhciBzaXplcyA9IFtdXG4gIHZhciBsb25nZXN0Q2VsbEJ5Q29sdW1uID0gW11cbiAgdmFyIG1vc3RDZWxsc1BlclJvdyA9IDBcbiAgdmFyIGNlbGxzXG4gIHZhciBjb2x1bW5JbmRleFxuICB2YXIgY29sdW1uTGVuZ3RoXG4gIHZhciBsYXJnZXN0XG4gIHZhciBzaXplXG4gIHZhciBjZWxsXG4gIHZhciBsaW5lc1xuICB2YXIgbGluZVxuICB2YXIgYmVmb3JlXG4gIHZhciBhZnRlclxuICB2YXIgY29kZVxuXG4gIC8vIFRoaXMgaXMgYSBzdXBlcmZsdW91cyBsb29wIGlmIHdlIGRvbuKAmXQgYWxpZ24gZGVsaW1pdGVycywgYnV0IG90aGVyd2lzZSB3ZeKAmWRcbiAgLy8gZG8gc3VwZXJmbHVvdXMgd29yayB3aGVuIGFsaWduaW5nLCBzbyBvcHRpbWl6ZSBmb3IgYWxpZ25pbmcuXG4gIHdoaWxlICgrK3Jvd0luZGV4IDwgcm93TGVuZ3RoKSB7XG4gICAgY2VsbHMgPSB0YWJsZVtyb3dJbmRleF1cbiAgICBjb2x1bW5JbmRleCA9IC0xXG4gICAgY29sdW1uTGVuZ3RoID0gY2VsbHMubGVuZ3RoXG4gICAgcm93ID0gW11cbiAgICBzaXplcyA9IFtdXG5cbiAgICBpZiAoY29sdW1uTGVuZ3RoID4gbW9zdENlbGxzUGVyUm93KSB7XG4gICAgICBtb3N0Q2VsbHNQZXJSb3cgPSBjb2x1bW5MZW5ndGhcbiAgICB9XG5cbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgY2VsbCA9IHNlcmlhbGl6ZShjZWxsc1tjb2x1bW5JbmRleF0pXG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgc2l6ZSA9IHN0cmluZ0xlbmd0aChjZWxsKVxuICAgICAgICBzaXplc1tjb2x1bW5JbmRleF0gPSBzaXplXG5cbiAgICAgICAgbGFyZ2VzdCA9IGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdXG5cbiAgICAgICAgaWYgKGxhcmdlc3QgPT09IHVuZGVmaW5lZCB8fCBzaXplID4gbGFyZ2VzdCkge1xuICAgICAgICAgIGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdID0gc2l6ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJvdy5wdXNoKGNlbGwpXG4gICAgfVxuXG4gICAgY2VsbE1hdHJpeFtyb3dJbmRleF0gPSByb3dcbiAgICBzaXplTWF0cml4W3Jvd0luZGV4XSA9IHNpemVzXG4gIH1cblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGFsaWdubWVudHMgdG8gdXNlLlxuICBjb2x1bW5JbmRleCA9IC0xXG4gIGNvbHVtbkxlbmd0aCA9IG1vc3RDZWxsc1BlclJvd1xuXG4gIGlmICh0eXBlb2YgYWxpZ24gPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFsaWduKSB7XG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGFsaWdubWVudHNbY29sdW1uSW5kZXhdID0gdG9BbGlnbm1lbnQoYWxpZ25bY29sdW1uSW5kZXhdKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb2RlID0gdG9BbGlnbm1lbnQoYWxpZ24pXG5cbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgYWxpZ25tZW50c1tjb2x1bW5JbmRleF0gPSBjb2RlXG4gICAgfVxuICB9XG5cbiAgLy8gSW5qZWN0IHRoZSBhbGlnbm1lbnQgcm93LlxuICBjb2x1bW5JbmRleCA9IC0xXG4gIGNvbHVtbkxlbmd0aCA9IG1vc3RDZWxsc1BlclJvd1xuICByb3cgPSBbXVxuICBzaXplcyA9IFtdXG5cbiAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICBjb2RlID0gYWxpZ25tZW50c1tjb2x1bW5JbmRleF1cbiAgICBiZWZvcmUgPSAnJ1xuICAgIGFmdGVyID0gJydcblxuICAgIGlmIChjb2RlID09PSBsKSB7XG4gICAgICBiZWZvcmUgPSBjb2xvblxuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gcikge1xuICAgICAgYWZ0ZXIgPSBjb2xvblxuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gYykge1xuICAgICAgYmVmb3JlID0gY29sb25cbiAgICAgIGFmdGVyID0gY29sb25cbiAgICB9XG5cbiAgICAvLyBUaGVyZSAqbXVzdCogYmUgYXQgbGVhc3Qgb25lIGh5cGhlbi1taW51cyBpbiBlYWNoIGFsaWdubWVudCBjZWxsLlxuICAgIHNpemUgPSBhbGlnbkRlbGltaXRlcnNcbiAgICAgID8gTWF0aC5tYXgoXG4gICAgICAgICAgMSxcbiAgICAgICAgICBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSAtIGJlZm9yZS5sZW5ndGggLSBhZnRlci5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgOiAxXG5cbiAgICBjZWxsID0gYmVmb3JlICsgcmVwZWF0KGRhc2gsIHNpemUpICsgYWZ0ZXJcblxuICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgIHNpemUgPSBiZWZvcmUubGVuZ3RoICsgc2l6ZSArIGFmdGVyLmxlbmd0aFxuXG4gICAgICBpZiAoc2l6ZSA+IGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdKSB7XG4gICAgICAgIGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdID0gc2l6ZVxuICAgICAgfVxuXG4gICAgICBzaXplc1tjb2x1bW5JbmRleF0gPSBzaXplXG4gICAgfVxuXG4gICAgcm93W2NvbHVtbkluZGV4XSA9IGNlbGxcbiAgfVxuXG4gIC8vIEluamVjdCB0aGUgYWxpZ25tZW50IHJvdy5cbiAgY2VsbE1hdHJpeC5zcGxpY2UoMSwgMCwgcm93KVxuICBzaXplTWF0cml4LnNwbGljZSgxLCAwLCBzaXplcylcblxuICByb3dJbmRleCA9IC0xXG4gIHJvd0xlbmd0aCA9IGNlbGxNYXRyaXgubGVuZ3RoXG4gIGxpbmVzID0gW11cblxuICB3aGlsZSAoKytyb3dJbmRleCA8IHJvd0xlbmd0aCkge1xuICAgIHJvdyA9IGNlbGxNYXRyaXhbcm93SW5kZXhdXG4gICAgc2l6ZXMgPSBzaXplTWF0cml4W3Jvd0luZGV4XVxuICAgIGNvbHVtbkluZGV4ID0gLTFcbiAgICBjb2x1bW5MZW5ndGggPSBtb3N0Q2VsbHNQZXJSb3dcbiAgICBsaW5lID0gW11cblxuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBjZWxsID0gcm93W2NvbHVtbkluZGV4XSB8fCAnJ1xuICAgICAgYmVmb3JlID0gJydcbiAgICAgIGFmdGVyID0gJydcblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBzaXplID0gbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gLSAoc2l6ZXNbY29sdW1uSW5kZXhdIHx8IDApXG4gICAgICAgIGNvZGUgPSBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XVxuXG4gICAgICAgIGlmIChjb2RlID09PSByKSB7XG4gICAgICAgICAgYmVmb3JlID0gcmVwZWF0KHNwYWNlLCBzaXplKVxuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IGMpIHtcbiAgICAgICAgICBpZiAoc2l6ZSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIGJlZm9yZSA9IHJlcGVhdChzcGFjZSwgc2l6ZSAvIDIpXG4gICAgICAgICAgICBhZnRlciA9IGJlZm9yZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiZWZvcmUgPSByZXBlYXQoc3BhY2UsIHNpemUgLyAyICsgMC41KVxuICAgICAgICAgICAgYWZ0ZXIgPSByZXBlYXQoc3BhY2UsIHNpemUgLyAyIC0gMC41KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZnRlciA9IHJlcGVhdChzcGFjZSwgc2l6ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnQgPT09IHRydWUgJiYgY29sdW1uSW5kZXggPT09IDApIHtcbiAgICAgICAgbGluZS5wdXNoKHZlcnRpY2FsQmFyKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhZGRpbmcgPT09IHRydWUgJiZcbiAgICAgICAgLy8gRG9u4oCZdCBhZGQgdGhlIG9wZW5pbmcgc3BhY2UgaWYgd2XigJlyZSBub3QgYWxpZ25pbmcgYW5kIHRoZSBjZWxsIGlzXG4gICAgICAgIC8vIGVtcHR5OiB0aGVyZSB3aWxsIGJlIGEgY2xvc2luZyBzcGFjZS5cbiAgICAgICAgIShhbGlnbkRlbGltaXRlcnMgPT09IGZhbHNlICYmIGNlbGwgPT09ICcnKSAmJlxuICAgICAgICAoc3RhcnQgPT09IHRydWUgfHwgY29sdW1uSW5kZXggIT09IDApXG4gICAgICApIHtcbiAgICAgICAgbGluZS5wdXNoKHNwYWNlKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIGxpbmUucHVzaChiZWZvcmUpXG4gICAgICB9XG5cbiAgICAgIGxpbmUucHVzaChjZWxsKVxuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIGxpbmUucHVzaChhZnRlcilcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZGRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgbGluZS5wdXNoKHNwYWNlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5kID09PSB0cnVlIHx8IGNvbHVtbkluZGV4ICE9PSBjb2x1bW5MZW5ndGggLSAxKSB7XG4gICAgICAgIGxpbmUucHVzaCh2ZXJ0aWNhbEJhcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lID0gbGluZS5qb2luKCcnKVxuXG4gICAgaWYgKGVuZCA9PT0gZmFsc2UpIHtcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UodHJhaWxpbmdXaGl0ZXNwYWNlLCAnJylcbiAgICB9XG5cbiAgICBsaW5lcy5wdXNoKGxpbmUpXG4gIH1cblxuICByZXR1cm4gbGluZXMuam9pbihsaW5lRmVlZClcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcodmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG5mdW5jdGlvbiB0b0FsaWdubWVudCh2YWx1ZSkge1xuICB2YXIgY29kZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS5jaGFyQ29kZUF0KDApIDogeFxuXG4gIHJldHVybiBjb2RlID09PSBMIHx8IGNvZGUgPT09IGxcbiAgICA/IGxcbiAgICA6IGNvZGUgPT09IFIgfHwgY29kZSA9PT0gclxuICAgID8gclxuICAgIDogY29kZSA9PT0gQyB8fCBjb2RlID09PSBjXG4gICAgPyBjXG4gICAgOiB4XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFjdFxuXG4vLyBNYWtlIGFuIG1kYXN0IHRyZWUgY29tcGFjdCBieSBtZXJnaW5nIGFkamFjZW50IHRleHQgbm9kZXMuXG5mdW5jdGlvbiBjb21wYWN0KHRyZWUsIGNvbW1vbm1hcmspIHtcbiAgdmlzaXQodHJlZSwgdmlzaXRvcilcblxuICByZXR1cm4gdHJlZVxuXG4gIGZ1bmN0aW9uIHZpc2l0b3IoY2hpbGQsIGluZGV4LCBwYXJlbnQpIHtcbiAgICB2YXIgc2libGluZ3MgPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiBbXVxuICAgIHZhciBwcmV2ID0gaW5kZXggJiYgc2libGluZ3NbaW5kZXggLSAxXVxuXG4gICAgaWYgKFxuICAgICAgcHJldiAmJlxuICAgICAgY2hpbGQudHlwZSA9PT0gcHJldi50eXBlICYmXG4gICAgICBtZXJnZWFibGUocHJldiwgY29tbW9ubWFyaykgJiZcbiAgICAgIG1lcmdlYWJsZShjaGlsZCwgY29tbW9ubWFyaylcbiAgICApIHtcbiAgICAgIGlmIChjaGlsZC52YWx1ZSkge1xuICAgICAgICBwcmV2LnZhbHVlICs9IGNoaWxkLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbikge1xuICAgICAgICBwcmV2LmNoaWxkcmVuID0gcHJldi5jaGlsZHJlbi5jb25jYXQoY2hpbGQuY2hpbGRyZW4pXG4gICAgICB9XG5cbiAgICAgIHNpYmxpbmdzLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgaWYgKHByZXYucG9zaXRpb24gJiYgY2hpbGQucG9zaXRpb24pIHtcbiAgICAgICAgcHJldi5wb3NpdGlvbi5lbmQgPSBjaGlsZC5wb3NpdGlvbi5lbmRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlYWJsZShub2RlLCBjb21tb25tYXJrKSB7XG4gIHZhciBzdGFydFxuICB2YXIgZW5kXG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgaWYgKCFub2RlLnBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHN0YXJ0ID0gbm9kZS5wb3NpdGlvbi5zdGFydFxuICAgIGVuZCA9IG5vZGUucG9zaXRpb24uZW5kXG5cbiAgICAvLyBPbmx5IG1lcmdlIG5vZGVzIHdoaWNoIG9jY3VweSB0aGUgc2FtZSBzaXplIGFzIHRoZWlyIGB2YWx1ZWAuXG4gICAgcmV0dXJuIChcbiAgICAgIHN0YXJ0LmxpbmUgIT09IGVuZC5saW5lIHx8IGVuZC5jb2x1bW4gLSBzdGFydC5jb2x1bW4gPT09IG5vZGUudmFsdWUubGVuZ3RoXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNvbW1vbm1hcmsgJiYgbm9kZS50eXBlID09PSAnYmxvY2txdW90ZSdcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxudmFyIGVsXG5cbnZhciBzZW1pY29sb24gPSA1OSAvLyAgJzsnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlRW50aXR5XG5cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSB7XG4gIHZhciBlbnRpdHkgPSAnJicgKyBjaGFyYWN0ZXJzICsgJzsnXG4gIHZhciBjaGFyXG5cbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgZWwuaW5uZXJIVE1MID0gZW50aXR5XG4gIGNoYXIgPSBlbC50ZXh0Q29udGVudFxuXG4gIC8vIFNvbWUgZW50aXRpZXMgZG8gbm90IHJlcXVpcmUgdGhlIGNsb3Npbmcgc2VtaWNvbG9uIChgJm5vdGAgLSBmb3IgaW5zdGFuY2UpLFxuICAvLyB3aGljaCBsZWFkcyB0byBzaXR1YXRpb25zIHdoZXJlIHBhcnNpbmcgdGhlIGFzc3VtZWQgZW50aXR5IG9mICZub3RpdDsgd2lsbFxuICAvLyByZXN1bHQgaW4gdGhlIHN0cmluZyBgwqxpdDtgLiAgV2hlbiB3ZSBlbmNvdW50ZXIgYSB0cmFpbGluZyBzZW1pY29sb24gYWZ0ZXJcbiAgLy8gcGFyc2luZyBhbmQgdGhlIGVudGl0eSB0byBkZWNvZGUgd2FzIG5vdCBhIHNlbWljb2xvbiAoYCZzZW1pO2ApLCB3ZSBjYW5cbiAgLy8gYXNzdW1lIHRoYXQgdGhlIG1hdGNoaW5nIHdhcyBpbmNvbXBsZXRlXG4gIGlmIChjaGFyLmNoYXJDb2RlQXQoY2hhci5sZW5ndGggLSAxKSA9PT0gc2VtaWNvbG9uICYmIGNoYXJhY3RlcnMgIT09ICdzZW1pJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gSWYgdGhlIGRlY29kZWQgc3RyaW5nIGlzIGVxdWFsIHRvIHRoZSBpbnB1dCwgdGhlIGVudGl0eSB3YXMgbm90IHZhbGlkXG4gIHJldHVybiBjaGFyID09PSBlbnRpdHkgPyBmYWxzZSA6IGNoYXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaW52YWxpZCA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1yZWZlcmVuY2UtaW52YWxpZCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGhleGFkZWNpbWFsID0gcmVxdWlyZSgnaXMtaGV4YWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRlY29kZUVudGl0eSA9IHJlcXVpcmUoJy4vZGVjb2RlLWVudGl0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VFbnRpdGllc1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgbm9vcCA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuXG4vLyBEZWZhdWx0IHNldHRpbmdzLlxudmFyIGRlZmF1bHRzID0ge1xuICB3YXJuaW5nOiBudWxsLFxuICByZWZlcmVuY2U6IG51bGwsXG4gIHRleHQ6IG51bGwsXG4gIHdhcm5pbmdDb250ZXh0OiBudWxsLFxuICByZWZlcmVuY2VDb250ZXh0OiBudWxsLFxuICB0ZXh0Q29udGV4dDogbnVsbCxcbiAgcG9zaXRpb246IHt9LFxuICBhZGRpdGlvbmFsOiBudWxsLFxuICBhdHRyaWJ1dGU6IGZhbHNlLFxuICBub25UZXJtaW5hdGVkOiB0cnVlXG59XG5cbi8vIENoYXJhY3RlcnMuXG52YXIgdGFiID0gOSAvLyAnXFx0J1xudmFyIGxpbmVGZWVkID0gMTAgLy8gJ1xcbidcbnZhciBmb3JtRmVlZCA9IDEyIC8vICdcXGYnXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAnJidcbnZhciBzZW1pY29sb24gPSA1OSAvLyAnOydcbnZhciBsZXNzVGhhbiA9IDYwIC8vICc8J1xudmFyIGVxdWFsc1RvID0gNjEgLy8gJz0nXG52YXIgbnVtYmVyU2lnbiA9IDM1IC8vICcjJ1xudmFyIHVwcGVyY2FzZVggPSA4OCAvLyAnWCdcbnZhciBsb3dlcmNhc2VYID0gMTIwIC8vICd4J1xudmFyIHJlcGxhY2VtZW50Q2hhcmFjdGVyID0gNjU1MzMgLy8gJ++/vSdcblxuLy8gUmVmZXJlbmNlIHR5cGVzLlxudmFyIG5hbWUgPSAnbmFtZWQnXG52YXIgaGV4YSA9ICdoZXhhZGVjaW1hbCdcbnZhciBkZWNpID0gJ2RlY2ltYWwnXG5cbi8vIE1hcCBvZiBiYXNlcy5cbnZhciBiYXNlcyA9IHt9XG5cbmJhc2VzW2hleGFdID0gMTZcbmJhc2VzW2RlY2ldID0gMTBcblxuLy8gTWFwIG9mIHR5cGVzIHRvIHRlc3RzLlxuLy8gRWFjaCB0eXBlIG9mIGNoYXJhY3RlciByZWZlcmVuY2UgYWNjZXB0cyBkaWZmZXJlbnQgY2hhcmFjdGVycy5cbi8vIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVjdCB3aGV0aGVyIGEgcmVmZXJlbmNlIGhhcyBlbmRlZCAoYXMgdGhlIHNlbWljb2xvblxuLy8gaXMgbm90IHN0cmljdGx5IG5lZWRlZCkuXG52YXIgdGVzdHMgPSB7fVxuXG50ZXN0c1tuYW1lXSA9IGFscGhhbnVtZXJpY2FsXG50ZXN0c1tkZWNpXSA9IGRlY2ltYWxcbnRlc3RzW2hleGFdID0gaGV4YWRlY2ltYWxcblxuLy8gV2FybmluZyB0eXBlcy5cbnZhciBuYW1lZE5vdFRlcm1pbmF0ZWQgPSAxXG52YXIgbnVtZXJpY05vdFRlcm1pbmF0ZWQgPSAyXG52YXIgbmFtZWRFbXB0eSA9IDNcbnZhciBudW1lcmljRW1wdHkgPSA0XG52YXIgbmFtZWRVbmtub3duID0gNVxudmFyIG51bWVyaWNEaXNhbGxvd2VkID0gNlxudmFyIG51bWVyaWNQcm9oaWJpdGVkID0gN1xuXG4vLyBXYXJuaW5nIG1lc3NhZ2VzLlxudmFyIG1lc3NhZ2VzID0ge31cblxubWVzc2FnZXNbbmFtZWROb3RUZXJtaW5hdGVkXSA9XG4gICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5tZXNzYWdlc1tudW1lcmljTm90VGVybWluYXRlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5tZXNzYWdlc1tuYW1lZEVtcHR5XSA9ICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZW1wdHknXG5tZXNzYWdlc1tudW1lcmljRW1wdHldID0gJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbmFtZWRVbmtub3duXSA9ICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIGtub3duJ1xubWVzc2FnZXNbbnVtZXJpY0Rpc2FsbG93ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGRpc2FsbG93ZWQnXG5tZXNzYWdlc1tudW1lcmljUHJvaGliaXRlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgb3V0c2lkZSB0aGUgcGVybWlzc2libGUgVW5pY29kZSByYW5nZSdcblxuLy8gV3JhcCB0byBlbnN1cmUgY2xlYW4gcGFyYW1ldGVycyBhcmUgZ2l2ZW4gdG8gYHBhcnNlYC5cbmZ1bmN0aW9uIHBhcnNlRW50aXRpZXModmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0ge31cbiAgdmFyIG9wdGlvblxuICB2YXIga2V5XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuICAgIG9wdGlvbiA9IG9wdGlvbnNba2V5XVxuICAgIHNldHRpbmdzW2tleV0gPVxuICAgICAgb3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdHNba2V5XSA6IG9wdGlvblxuICB9XG5cbiAgaWYgKHNldHRpbmdzLnBvc2l0aW9uLmluZGVudCB8fCBzZXR0aW5ncy5wb3NpdGlvbi5zdGFydCkge1xuICAgIHNldHRpbmdzLmluZGVudCA9IHNldHRpbmdzLnBvc2l0aW9uLmluZGVudCB8fCBbXVxuICAgIHNldHRpbmdzLnBvc2l0aW9uID0gc2V0dGluZ3MucG9zaXRpb24uc3RhcnRcbiAgfVxuXG4gIHJldHVybiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpXG59XG5cbi8vIFBhcnNlIGVudGl0aWVzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHBhcnNlKHZhbHVlLCBzZXR0aW5ncykge1xuICB2YXIgYWRkaXRpb25hbCA9IHNldHRpbmdzLmFkZGl0aW9uYWxcbiAgdmFyIG5vblRlcm1pbmF0ZWQgPSBzZXR0aW5ncy5ub25UZXJtaW5hdGVkXG4gIHZhciBoYW5kbGVUZXh0ID0gc2V0dGluZ3MudGV4dFxuICB2YXIgaGFuZGxlUmVmZXJlbmNlID0gc2V0dGluZ3MucmVmZXJlbmNlXG4gIHZhciBoYW5kbGVXYXJuaW5nID0gc2V0dGluZ3Mud2FybmluZ1xuICB2YXIgdGV4dENvbnRleHQgPSBzZXR0aW5ncy50ZXh0Q29udGV4dFxuICB2YXIgcmVmZXJlbmNlQ29udGV4dCA9IHNldHRpbmdzLnJlZmVyZW5jZUNvbnRleHRcbiAgdmFyIHdhcm5pbmdDb250ZXh0ID0gc2V0dGluZ3Mud2FybmluZ0NvbnRleHRcbiAgdmFyIHBvcyA9IHNldHRpbmdzLnBvc2l0aW9uXG4gIHZhciBpbmRlbnQgPSBzZXR0aW5ncy5pbmRlbnQgfHwgW11cbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsaW5lcyA9IC0xXG4gIHZhciBjb2x1bW4gPSBwb3MuY29sdW1uIHx8IDFcbiAgdmFyIGxpbmUgPSBwb3MubGluZSB8fCAxXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgZW50aXR5Q2hhcmFjdGVyc1xuICB2YXIgbmFtZWRFbnRpdHlcbiAgdmFyIHRlcm1pbmF0ZWRcbiAgdmFyIGNoYXJhY3RlcnNcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcmVmZXJlbmNlXG4gIHZhciBmb2xsb3dpbmdcbiAgdmFyIHdhcm5pbmdcbiAgdmFyIHJlYXNvblxuICB2YXIgb3V0cHV0XG4gIHZhciBlbnRpdHlcbiAgdmFyIGJlZ2luXG4gIHZhciBzdGFydFxuICB2YXIgdHlwZVxuICB2YXIgdGVzdFxuICB2YXIgcHJldlxuICB2YXIgbmV4dFxuICB2YXIgZGlmZlxuICB2YXIgZW5kXG5cbiAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsID09PSAnc3RyaW5nJykge1xuICAgIGFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIC8vIENhY2hlIHRoZSBjdXJyZW50IHBvaW50LlxuICBwcmV2ID0gbm93KClcblxuICAvLyBXcmFwIGBoYW5kbGVXYXJuaW5nYC5cbiAgd2FybmluZyA9IGhhbmRsZVdhcm5pbmcgPyBwYXJzZUVycm9yIDogbm9vcFxuXG4gIC8vIEVuc3VyZSB0aGUgYWxnb3JpdGhtIHdhbGtzIG92ZXIgdGhlIGZpcnN0IGNoYXJhY3RlciBhbmQgdGhlIGVuZFxuICAvLyAoaW5jbHVzaXZlKS5cbiAgaW5kZXgtLVxuICBsZW5ndGgrK1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoYXJhY3RlciB3YXMgYSBuZXdsaW5lLlxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBjb2x1bW4gPSBpbmRlbnRbbGluZXNdIHx8IDFcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gYW1wZXJzYW5kKSB7XG4gICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgLy8gVGhlIGJlaGF2aW91ciBkZXBlbmRzIG9uIHRoZSBpZGVudGl0eSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgICBpZiAoXG4gICAgICAgIGZvbGxvd2luZyA9PT0gdGFiIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gbGluZUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBmb3JtRmVlZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IHNwYWNlIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gYW1wZXJzYW5kIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gbGVzc1RoYW4gfHxcbiAgICAgICAgZm9sbG93aW5nICE9PSBmb2xsb3dpbmcgfHxcbiAgICAgICAgKGFkZGl0aW9uYWwgJiYgZm9sbG93aW5nID09PSBhZGRpdGlvbmFsKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vdCBhIGNoYXJhY3RlciByZWZlcmVuY2UuXG4gICAgICAgIC8vIE5vIGNoYXJhY3RlcnMgYXJlIGNvbnN1bWVkLCBhbmQgbm90aGluZyBpcyByZXR1cm5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgYW4gZXJyb3IsIGVpdGhlci5cbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzdGFydCA9IGluZGV4ICsgMVxuICAgICAgYmVnaW4gPSBzdGFydFxuICAgICAgZW5kID0gc3RhcnRcblxuICAgICAgaWYgKGZvbGxvd2luZyA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgICAvLyBOdW1lcmljYWwgZW50aXR5LlxuICAgICAgICBlbmQgPSArK2JlZ2luXG5cbiAgICAgICAgLy8gVGhlIGJlaGF2aW91ciBmdXJ0aGVyIGRlcGVuZHMgb24gdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICBpZiAoZm9sbG93aW5nID09PSB1cHBlcmNhc2VYIHx8IGZvbGxvd2luZyA9PT0gbG93ZXJjYXNlWCkge1xuICAgICAgICAgIC8vIEFTQ0lJIGhleCBkaWdpdHMuXG4gICAgICAgICAgdHlwZSA9IGhleGFcbiAgICAgICAgICBlbmQgPSArK2JlZ2luXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQVNDSUkgZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBkZWNpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5hbWVkIGVudGl0eS5cbiAgICAgICAgdHlwZSA9IG5hbWVcbiAgICAgIH1cblxuICAgICAgZW50aXR5Q2hhcmFjdGVycyA9ICcnXG4gICAgICBlbnRpdHkgPSAnJ1xuICAgICAgY2hhcmFjdGVycyA9ICcnXG4gICAgICB0ZXN0ID0gdGVzdHNbdHlwZV1cbiAgICAgIGVuZC0tXG5cbiAgICAgIHdoaWxlICgrK2VuZCA8IGxlbmd0aCkge1xuICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICBpZiAoIXRlc3QoZm9sbG93aW5nKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBjaGFyYWN0ZXJzICs9IGZyb21DaGFyQ29kZShmb2xsb3dpbmcpXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIG1hdGNoIGEgbGVnYWN5IG5hbWVkIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gSWYgc28sIHdlIGNhY2hlIHRoYXQgYXMgdGhlIGxhc3QgdmlhYmxlIG5hbWVkIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHdlIGRvIG5vdCBuZWVkIHRvIHdhbGsgYmFja3dhcmRzIGxhdGVyLlxuICAgICAgICBpZiAodHlwZSA9PT0gbmFtZSAmJiBvd24uY2FsbChsZWdhY3ksIGNoYXJhY3RlcnMpKSB7XG4gICAgICAgICAgZW50aXR5Q2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICBlbnRpdHkgPSBsZWdhY3lbY2hhcmFjdGVyc11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXJtaW5hdGVkID0gdmFsdWUuY2hhckNvZGVBdChlbmQpID09PSBzZW1pY29sb25cblxuICAgICAgaWYgKHRlcm1pbmF0ZWQpIHtcbiAgICAgICAgZW5kKytcblxuICAgICAgICBuYW1lZEVudGl0eSA9IHR5cGUgPT09IG5hbWUgPyBkZWNvZGVFbnRpdHkoY2hhcmFjdGVycykgOiBmYWxzZVxuXG4gICAgICAgIGlmIChuYW1lZEVudGl0eSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbmFtZWRFbnRpdHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkaWZmID0gMSArIGVuZCAtIHN0YXJ0XG5cbiAgICAgIGlmICghdGVybWluYXRlZCAmJiAhbm9uVGVybWluYXRlZCkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAoIWNoYXJhY3RlcnMpIHtcbiAgICAgICAgLy8gQW4gZW1wdHkgKHBvc3NpYmxlKSBlbnRpdHkgaXMgdmFsaWQsIHVubGVzcyBpdOKAmXMgbnVtZXJpYyAodGh1cyBhblxuICAgICAgICAvLyBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW4gb2N0b3Rob3JwKS5cbiAgICAgICAgaWYgKHR5cGUgIT09IG5hbWUpIHtcbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNFbXB0eSwgZGlmZilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBuYW1lKSB7XG4gICAgICAgIC8vIEFuIGFtcGVyc2FuZCBmb2xsb3dlZCBieSBhbnl0aGluZyB1bmtub3duLCBhbmQgbm90IHRlcm1pbmF0ZWQsIGlzXG4gICAgICAgIC8vIGludmFsaWQuXG4gICAgICAgIGlmICh0ZXJtaW5hdGVkICYmICFlbnRpdHkpIHtcbiAgICAgICAgICB3YXJuaW5nKG5hbWVkVW5rbm93biwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZXMgc29tZXRoaW5nIGFmdGVyIGFuIGVudGl0eSBuYW1lIHdoaWNoIGlzIG5vdCBrbm93biwgY2FwXG4gICAgICAgICAgLy8gdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICBpZiAoZW50aXR5Q2hhcmFjdGVycyAhPT0gY2hhcmFjdGVycykge1xuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyBlbnRpdHlDaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgZGlmZiA9IDEgKyBlbmQgLSBiZWdpblxuICAgICAgICAgICAgdGVybWluYXRlZCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBpcyBub3QgdGVybWluYXRlZCwgd2Fybi5cbiAgICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAgIHJlYXNvbiA9IGVudGl0eUNoYXJhY3RlcnMgPyBuYW1lZE5vdFRlcm1pbmF0ZWQgOiBuYW1lZEVtcHR5XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gZXF1YWxzVG8pIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxwaGFudW1lcmljYWwoZm9sbG93aW5nKSkge1xuICAgICAgICAgICAgICAgIGVudGl0eSA9IG51bGxcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZW50aXR5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAvLyBBbGwgbm9uLXRlcm1pbmF0ZWQgbnVtZXJpYyBlbnRpdGllcyBhcmUgbm90IHJlbmRlcmVkLCBhbmQgdHJpZ2dlciBhXG4gICAgICAgICAgLy8gd2FybmluZy5cbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNOb3RUZXJtaW5hdGVkLCBkaWZmKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB0ZXJtaW5hdGVkIGFuZCBudW1iZXIsIHBhcnNlIGFzIGVpdGhlciBoZXhhZGVjaW1hbCBvciBkZWNpbWFsLlxuICAgICAgICByZWZlcmVuY2UgPSBwYXJzZUludChjaGFyYWN0ZXJzLCBiYXNlc1t0eXBlXSlcblxuICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIGlzIHByb2hpYml0ZWQsIGFuZCByZXBsYWNlXG4gICAgICAgIC8vIHdpdGggcmVwbGFjZW1lbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAocHJvaGliaXRlZChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljUHJvaGliaXRlZCwgZGlmZilcbiAgICAgICAgICByZWZlcmVuY2UgPSBmcm9tQ2hhckNvZGUocmVwbGFjZW1lbnRDaGFyYWN0ZXIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVmZXJlbmNlIGluIGludmFsaWQpIHtcbiAgICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIGlzIGRpc2FsbG93ZWQsIGFuZCByZXBsYWNlXG4gICAgICAgICAgLy8gYnkgYW4gYWx0ZXJuYXRpdmUuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICByZWZlcmVuY2UgPSBpbnZhbGlkW3JlZmVyZW5jZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQYXJzZSB0aGUgbnVtYmVyLlxuICAgICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICAgICAgICBpZiAoZGlzYWxsb3dlZChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICB3YXJuaW5nKG51bWVyaWNEaXNhbGxvd2VkLCBkaWZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0cmluZ2lmeSB0aGUgbnVtYmVyLlxuICAgICAgICAgIGlmIChyZWZlcmVuY2UgPiAweGZmZmYpIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSAtPSAweDEwMDAwXG4gICAgICAgICAgICBvdXRwdXQgKz0gZnJvbUNoYXJDb2RlKChyZWZlcmVuY2UgPj4+ICgxMCAmIDB4M2ZmKSkgfCAweGQ4MDApXG4gICAgICAgICAgICByZWZlcmVuY2UgPSAweGRjMDAgfCAocmVmZXJlbmNlICYgMHgzZmYpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVmZXJlbmNlID0gb3V0cHV0ICsgZnJvbUNoYXJDb2RlKHJlZmVyZW5jZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3VuZCBpdCFcbiAgICAgIC8vIEZpcnN0IGVhdCB0aGUgcXVldWVkIGNoYXJhY3RlcnMgYXMgbm9ybWFsIHRleHQsIHRoZW4gZWF0IGFuIGVudGl0eS5cbiAgICAgIGlmIChyZWZlcmVuY2UpIHtcbiAgICAgICAgZmx1c2goKVxuXG4gICAgICAgIHByZXYgPSBub3coKVxuICAgICAgICBpbmRleCA9IGVuZCAtIDFcbiAgICAgICAgY29sdW1uICs9IGVuZCAtIHN0YXJ0ICsgMVxuICAgICAgICByZXN1bHQucHVzaChyZWZlcmVuY2UpXG4gICAgICAgIG5leHQgPSBub3coKVxuICAgICAgICBuZXh0Lm9mZnNldCsrXG5cbiAgICAgICAgaWYgKGhhbmRsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIGhhbmRsZVJlZmVyZW5jZS5jYWxsKFxuICAgICAgICAgICAgcmVmZXJlbmNlQ29udGV4dCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHtzdGFydDogcHJldiwgZW5kOiBuZXh0fSxcbiAgICAgICAgICAgIHZhbHVlLnNsaWNlKHN0YXJ0IC0gMSwgZW5kKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgPSBuZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB3ZSBjb3VsZCBub3QgZmluZCBhIHJlZmVyZW5jZSwgcXVldWUgdGhlIGNoZWNrZWQgY2hhcmFjdGVycyAoYXNcbiAgICAgICAgLy8gbm9ybWFsIGNoYXJhY3RlcnMpLCBhbmQgbW92ZSB0aGUgcG9pbnRlciB0byB0aGVpciBlbmQuXG4gICAgICAgIC8vIFRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSB3ZSBjYW4gYmUgY2VydGFpbiBuZWl0aGVyIG5ld2xpbmVzIG5vclxuICAgICAgICAvLyBhbXBlcnNhbmRzIGFyZSBpbmNsdWRlZC5cbiAgICAgICAgY2hhcmFjdGVycyA9IHZhbHVlLnNsaWNlKHN0YXJ0IC0gMSwgZW5kKVxuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJzXG4gICAgICAgIGNvbHVtbiArPSBjaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICBpbmRleCA9IGVuZCAtIDFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGFuZGxlIGFueXRoaW5nIG90aGVyIHRoYW4gYW4gYW1wZXJzYW5kLCBpbmNsdWRpbmcgbmV3bGluZXMgYW5kIEVPRi5cbiAgICAgIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSAxMCAvLyBMaW5lIGZlZWRcbiAgICAgICkge1xuICAgICAgICBsaW5lKytcbiAgICAgICAgbGluZXMrK1xuICAgICAgICBjb2x1bW4gPSAwXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICBxdWV1ZSArPSBmcm9tQ2hhckNvZGUoY2hhcmFjdGVyKVxuICAgICAgICBjb2x1bW4rK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmx1c2goKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcmVkdWNlZCBub2Rlcy5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxuXG4gIC8vIEdldCBjdXJyZW50IHBvc2l0aW9uLlxuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IGxpbmUsXG4gICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIG9mZnNldDogaW5kZXggKyAocG9zLm9mZnNldCB8fCAwKVxuICAgIH1cbiAgfVxuXG4gIC8vIOKAnFRocm934oCdIGEgcGFyc2UtZXJyb3I6IGEgd2FybmluZy5cbiAgZnVuY3Rpb24gcGFyc2VFcnJvcihjb2RlLCBvZmZzZXQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBub3coKVxuXG4gICAgcG9zaXRpb24uY29sdW1uICs9IG9mZnNldFxuICAgIHBvc2l0aW9uLm9mZnNldCArPSBvZmZzZXRcblxuICAgIGhhbmRsZVdhcm5pbmcuY2FsbCh3YXJuaW5nQ29udGV4dCwgbWVzc2FnZXNbY29kZV0sIHBvc2l0aW9uLCBjb2RlKVxuICB9XG5cbiAgLy8gRmx1c2ggYHF1ZXVlYCAobm9ybWFsIHRleHQpLlxuICAvLyBNYWNybyBpbnZva2VkIGJlZm9yZSBlYWNoIGVudGl0eSBhbmQgYXQgdGhlIGVuZCBvZiBgdmFsdWVgLlxuICAvLyBEb2VzIG5vdGhpbmcgd2hlbiBgcXVldWVgIGlzIGVtcHR5LlxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHF1ZXVlKVxuXG4gICAgICBpZiAoaGFuZGxlVGV4dCkge1xuICAgICAgICBoYW5kbGVUZXh0LmNhbGwodGV4dENvbnRleHQsIHF1ZXVlLCB7c3RhcnQ6IHByZXYsIGVuZDogbm93KCl9KVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGlzIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIHVuaWNvZGUgcmFuZ2UuXG5mdW5jdGlvbiBwcm9oaWJpdGVkKGNvZGUpIHtcbiAgcmV0dXJuIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGZmZikgfHwgY29kZSA+IDB4MTBmZmZmXG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGlzIGRpc2FsbG93ZWQuXG5mdW5jdGlvbiBkaXNhbGxvd2VkKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSAweDAwMDEgJiYgY29kZSA8PSAweDAwMDgpIHx8XG4gICAgY29kZSA9PT0gMHgwMDBiIHx8XG4gICAgKGNvZGUgPj0gMHgwMDBkICYmIGNvZGUgPD0gMHgwMDFmKSB8fFxuICAgIChjb2RlID49IDB4MDA3ZiAmJiBjb2RlIDw9IDB4MDA5ZikgfHxcbiAgICAoY29kZSA+PSAweGZkZDAgJiYgY29kZSA8PSAweGZkZWYpIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmYgfHxcbiAgICAoY29kZSAmIDB4ZmZmZikgPT09IDB4ZmZmZVxuICApXG59XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmhlcml0ID0gcmVxdWlyZSgndW5oZXJpdCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgQ29tcGlsZXIgPSByZXF1aXJlKCcuL2xpYi9jb21waWxlci5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5zdHJpbmdpZnkuQ29tcGlsZXIgPSBDb21waWxlclxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob3B0aW9ucykge1xuICB2YXIgTG9jYWwgPSB1bmhlcml0KENvbXBpbGVyKVxuICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyA9IHh0ZW5kKFxuICAgIExvY2FsLnByb3RvdHlwZS5vcHRpb25zLFxuICAgIHRoaXMuZGF0YSgnc2V0dGluZ3MnKSxcbiAgICBvcHRpb25zXG4gIClcbiAgdGhpcy5Db21waWxlciA9IExvY2FsXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRvZ2dsZSA9IHJlcXVpcmUoJ3N0YXRlLXRvZ2dsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGlsZXJcblxuLy8gQ29uc3RydWN0IGEgbmV3IGNvbXBpbGVyLlxuZnVuY3Rpb24gQ29tcGlsZXIodHJlZSwgZmlsZSkge1xuICB0aGlzLmluTGluayA9IGZhbHNlXG4gIHRoaXMuaW5UYWJsZSA9IGZhbHNlXG4gIHRoaXMudHJlZSA9IHRyZWVcbiAgdGhpcy5maWxlID0gZmlsZVxuICB0aGlzLm9wdGlvbnMgPSB4dGVuZCh0aGlzLm9wdGlvbnMpXG4gIHRoaXMuc2V0T3B0aW9ucyh7fSlcbn1cblxudmFyIHByb3RvID0gQ29tcGlsZXIucHJvdG90eXBlXG5cbi8vIEVudGVyIGFuZCBleGl0IGhlbHBlcnMuICovXG5wcm90by5lbnRlckxpbmsgPSB0b2dnbGUoJ2luTGluaycsIGZhbHNlKVxucHJvdG8uZW50ZXJUYWJsZSA9IHRvZ2dsZSgnaW5UYWJsZScsIGZhbHNlKVxucHJvdG8uZW50ZXJMaW5rUmVmZXJlbmNlID0gcmVxdWlyZSgnLi91dGlsL2VudGVyLWxpbmstcmVmZXJlbmNlJylcblxuLy8gQ29uZmlndXJhdGlvbi5cbnByb3RvLm9wdGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcbnByb3RvLnNldE9wdGlvbnMgPSByZXF1aXJlKCcuL3NldC1vcHRpb25zJylcblxucHJvdG8uY29tcGlsZSA9IHJlcXVpcmUoJy4vbWFjcm8vY29tcGlsZScpXG5wcm90by52aXNpdCA9IHJlcXVpcmUoJy4vbWFjcm8vb25lJylcbnByb3RvLmFsbCA9IHJlcXVpcmUoJy4vbWFjcm8vYWxsJylcbnByb3RvLmJsb2NrID0gcmVxdWlyZSgnLi9tYWNyby9ibG9jaycpXG5wcm90by52aXNpdE9yZGVyZWRJdGVtcyA9IHJlcXVpcmUoJy4vbWFjcm8vb3JkZXJlZC1pdGVtcycpXG5wcm90by52aXNpdFVub3JkZXJlZEl0ZW1zID0gcmVxdWlyZSgnLi9tYWNyby91bm9yZGVyZWQtaXRlbXMnKVxuXG4vLyBFeHBvc2UgdmlzaXRvcnMuXG5wcm90by52aXNpdG9ycyA9IHtcbiAgcm9vdDogcmVxdWlyZSgnLi92aXNpdG9ycy9yb290JyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGV4dCcpLFxuICBoZWFkaW5nOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2hlYWRpbmcnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3BhcmFncmFwaCcpLFxuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2Jsb2NrcXVvdGUnKSxcbiAgbGlzdDogcmVxdWlyZSgnLi92aXNpdG9ycy9saXN0JyksXG4gIGxpc3RJdGVtOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2xpc3QtaXRlbScpLFxuICBpbmxpbmVDb2RlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2lubGluZS1jb2RlJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvY29kZScpLFxuICBodG1sOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2h0bWwnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi92aXNpdG9ycy90aGVtYXRpYy1icmVhaycpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vdmlzaXRvcnMvc3Ryb25nJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2VtcGhhc2lzJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2JyZWFrJyksXG4gIGRlbGV0ZTogcmVxdWlyZSgnLi92aXNpdG9ycy9kZWxldGUnKSxcbiAgbGluazogcmVxdWlyZSgnLi92aXNpdG9ycy9saW5rJyksXG4gIGxpbmtSZWZlcmVuY2U6IHJlcXVpcmUoJy4vdmlzaXRvcnMvbGluay1yZWZlcmVuY2UnKSxcbiAgaW1hZ2VSZWZlcmVuY2U6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaW1hZ2UtcmVmZXJlbmNlJyksXG4gIGRlZmluaXRpb246IHJlcXVpcmUoJy4vdmlzaXRvcnMvZGVmaW5pdGlvbicpLFxuICBpbWFnZTogcmVxdWlyZSgnLi92aXNpdG9ycy9pbWFnZScpLFxuICB0YWJsZTogcmVxdWlyZSgnLi92aXNpdG9ycy90YWJsZScpLFxuICB0YWJsZUNlbGw6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGFibGUtY2VsbCcpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdmbTogdHJ1ZSxcbiAgY29tbW9ubWFyazogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgZW50aXRpZXM6ICdmYWxzZScsXG4gIHNldGV4dDogZmFsc2UsXG4gIGNsb3NlQXR4OiBmYWxzZSxcbiAgdGFibGVDZWxsUGFkZGluZzogdHJ1ZSxcbiAgdGFibGVQaXBlQWxpZ246IHRydWUsXG4gIHN0cmluZ0xlbmd0aDogc3RyaW5nTGVuZ3RoLFxuICBpbmNyZW1lbnRMaXN0TWFya2VyOiB0cnVlLFxuICBmZW5jZXM6IGZhbHNlLFxuICBmZW5jZTogJ2AnLFxuICBidWxsZXQ6ICctJyxcbiAgbGlzdEl0ZW1JbmRlbnQ6ICd0YWInLFxuICBydWxlOiAnKicsXG4gIHJ1bGVTcGFjZXM6IHRydWUsXG4gIHJ1bGVSZXBldGl0aW9uOiAzLFxuICBzdHJvbmc6ICcqJyxcbiAgZW1waGFzaXM6ICdfJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGVzY2FwZXMgPSByZXF1aXJlKCdtYXJrZG93bi1lc2NhcGVzJylcbnZhciBwcmVmaXggPSByZXF1aXJlKCcuL3V0aWwvZW50aXR5LXByZWZpeC1sZW5ndGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbnVtYmVyU2lnbiA9ICcjJ1xudmFyIGFtcGVyc2FuZCA9ICcmJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHBsdXNTaWduID0gJysnXG52YXIgZGFzaCA9ICctJ1xudmFyIGRvdCA9ICcuJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG52YXIgdmVydGljYWxCYXIgPSAnfCdcbnZhciB0aWxkZSA9ICd+J1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG52YXIgZW50aXRpZXMgPSB7XG4gICc8JzogJyZsdDsnLFxuICAnOic6ICcmI3gzQTsnLFxuICAnJic6ICcmYW1wOycsXG4gICd8JzogJyYjeDdDOycsXG4gICd+JzogJyYjeDdFOydcbn1cblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIG1haWx0byA9ICdtYWlsdG8nXG52YXIgaHR0cHMgPSAnaHR0cHMnXG52YXIgaHR0cCA9ICdodHRwJ1xuXG52YXIgYmxhbmtFeHByZXNzaW9uID0gL1xcblxccyokL1xuXG4vLyBGYWN0b3J5IHRvIGVzY2FwZSBjaGFyYWN0ZXJzLlxuZnVuY3Rpb24gZmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiBlc2NhcGVcblxuICAvLyBFc2NhcGUgcHVuY3R1YXRpb24gY2hhcmFjdGVycyBpbiBhIG5vZGXigJlzIHZhbHVlLlxuICBmdW5jdGlvbiBlc2NhcGUodmFsdWUsIG5vZGUsIHBhcmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBnZm0gPSBvcHRpb25zLmdmbVxuICAgIHZhciBjb21tb25tYXJrID0gb3B0aW9ucy5jb21tb25tYXJrXG4gICAgdmFyIHBlZGFudGljID0gb3B0aW9ucy5wZWRhbnRpY1xuICAgIHZhciBtYXJrZXJzID0gY29tbW9ubWFyayA/IFtkb3QsIHJpZ2h0UGFyZW50aGVzaXNdIDogW2RvdF1cbiAgICB2YXIgc2libGluZ3MgPSBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuXG4gICAgdmFyIGluZGV4ID0gc2libGluZ3MgJiYgc2libGluZ3MuaW5kZXhPZihub2RlKVxuICAgIHZhciBwcmV2aW91cyA9IHNpYmxpbmdzICYmIHNpYmxpbmdzW2luZGV4IC0gMV1cbiAgICB2YXIgbmV4dCA9IHNpYmxpbmdzICYmIHNpYmxpbmdzW2luZGV4ICsgMV1cbiAgICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gICAgdmFyIGVzY2FwYWJsZSA9IGVzY2FwZXMob3B0aW9ucylcbiAgICB2YXIgcG9zaXRpb24gPSAtMVxuICAgIHZhciBxdWV1ZSA9IFtdXG4gICAgdmFyIGVzY2FwZWQgPSBxdWV1ZVxuICAgIHZhciBhZnRlck5ld0xpbmVcbiAgICB2YXIgY2hhcmFjdGVyXG4gICAgdmFyIHdvcmRDaGFyQmVmb3JlXG4gICAgdmFyIHdvcmRDaGFyQWZ0ZXJcbiAgICB2YXIgb2Zmc2V0XG4gICAgdmFyIHJlcGxhY2VcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgYWZ0ZXJOZXdMaW5lID0gdGV4dChwcmV2aW91cykgJiYgYmxhbmtFeHByZXNzaW9uLnRlc3QocHJldmlvdXMudmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyTmV3TGluZSA9XG4gICAgICAgICFwYXJlbnQgfHwgcGFyZW50LnR5cGUgPT09ICdyb290JyB8fCBwYXJlbnQudHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgICB9XG5cbiAgICB3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuICAgICAgcmVwbGFjZSA9IGZhbHNlXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG4gICAgICAgIGFmdGVyTmV3TGluZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gYmFja3NsYXNoIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gZ3JhdmVBY2NlbnQgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0IHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gbGVzc1RoYW4gfHxcbiAgICAgICAgKGNoYXJhY3RlciA9PT0gYW1wZXJzYW5kICYmIHByZWZpeCh2YWx1ZS5zbGljZShwb3NpdGlvbikpID4gMCkgfHxcbiAgICAgICAgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0ICYmIHNlbGYuaW5MaW5rKSB8fFxuICAgICAgICAoZ2ZtICYmIGNoYXJhY3RlciA9PT0gdGlsZGUgJiYgdmFsdWUuY2hhckF0KHBvc2l0aW9uICsgMSkgPT09IHRpbGRlKSB8fFxuICAgICAgICAoZ2ZtICYmXG4gICAgICAgICAgY2hhcmFjdGVyID09PSB2ZXJ0aWNhbEJhciAmJlxuICAgICAgICAgIChzZWxmLmluVGFibGUgfHwgYWxpZ25tZW50KHZhbHVlLCBwb3NpdGlvbikpKSB8fFxuICAgICAgICAoY2hhcmFjdGVyID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgLy8gRGVsZWdhdGUgbGVhZGluZy90cmFpbGluZyB1bmRlcnNjb3JlcyB0byB0aGUgbXVsdGlub2RlIHZlcnNpb24gYmVsb3cuXG4gICAgICAgICAgcG9zaXRpb24gPiAwICYmXG4gICAgICAgICAgcG9zaXRpb24gPCBsZW5ndGggLSAxICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8XG4gICAgICAgICAgICAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdChwb3NpdGlvbiAtIDEpKSB8fFxuICAgICAgICAgICAgIWFscGhhbnVtZXJpYyh2YWx1ZS5jaGFyQXQocG9zaXRpb24gKyAxKSkpKSB8fFxuICAgICAgICAoZ2ZtICYmICFzZWxmLmluTGluayAmJiBjaGFyYWN0ZXIgPT09IGNvbG9uICYmIHByb3RvY29sKHF1ZXVlLmpvaW4oJycpKSlcbiAgICAgICkge1xuICAgICAgICByZXBsYWNlID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChhZnRlck5ld0xpbmUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4gfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IG51bWJlclNpZ24gfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBkYXNoIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBwbHVzU2lnblxuICAgICAgICApIHtcbiAgICAgICAgICByZXBsYWNlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIG9mZnNldCA9IHBvc2l0aW9uICsgMVxuXG4gICAgICAgICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFkZWNpbWFsKHZhbHVlLmNoYXJBdChvZmZzZXQpKSkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvZmZzZXQrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXJrZXJzLmluZGV4T2YodmFsdWUuY2hhckF0KG9mZnNldCkpICE9PSAtMSkge1xuICAgICAgICAgICAgbmV4dCA9IHZhbHVlLmNoYXJBdChvZmZzZXQgKyAxKVxuXG4gICAgICAgICAgICBpZiAoIW5leHQgfHwgbmV4dCA9PT0gc3BhY2UgfHwgbmV4dCA9PT0gdGFiIHx8IG5leHQgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocG9zaXRpb24sIG9mZnNldCkpXG4gICAgICAgICAgICAgIHBvc2l0aW9uID0gb2Zmc2V0XG4gICAgICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwb3NpdGlvbilcbiAgICAgICAgICAgICAgcmVwbGFjZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFmdGVyTmV3TGluZSAmJiAhd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGFmdGVyTmV3TGluZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlLnB1c2gocmVwbGFjZSA/IG9uZShjaGFyYWN0ZXIpIDogY2hhcmFjdGVyKVxuICAgIH1cblxuICAgIC8vIE11bHRpLW5vZGUgdmVyc2lvbnMuXG4gICAgaWYgKHNpYmxpbmdzICYmIHRleHQobm9kZSkpIHtcbiAgICAgIC8vIENoZWNrIGZvciBhbiBvcGVuaW5nIHBhcmVudGhlc2VzIGFmdGVyIGEgbGluay1yZWZlcmVuY2UgKHdoaWNoIGNhbiBiZVxuICAgICAgLy8gam9pbmVkIGJ5IHdoaXRlLXNwYWNlKS5cbiAgICAgIGlmIChwcmV2aW91cyAmJiBwcmV2aW91cy5yZWZlcmVuY2VUeXBlID09PSBzaG9ydGN1dCkge1xuICAgICAgICBwb3NpdGlvbiA9IC0xXG4gICAgICAgIGxlbmd0aCA9IGVzY2FwZWQubGVuZ3RoXG5cbiAgICAgICAgd2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBlc2NhcGVkW3Bvc2l0aW9uXVxuXG4gICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzIHx8IGNoYXJhY3RlciA9PT0gY29sb24pIHtcbiAgICAgICAgICAgIGVzY2FwZWRbcG9zaXRpb25dID0gb25lKGNoYXJhY3RlcilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgbm9kZSBpcyBhbGwgc3BhY2VzIC8gdGFicywgcHJlY2VkZWQgYnkgYSBzaG9ydGN1dCxcbiAgICAgICAgLy8gYW5kIGZvbGxvd2VkIGJ5IGEgdGV4dCBzdGFydGluZyB3aXRoIGAoYCwgZXNjYXBlIGl0LlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGV4dChuZXh0KSAmJlxuICAgICAgICAgIHBvc2l0aW9uID09PSBsZW5ndGggJiZcbiAgICAgICAgICBuZXh0LnZhbHVlLmNoYXJBdCgwKSA9PT0gbGVmdFBhcmVudGhlc2lzXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQucHVzaChiYWNrc2xhc2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIG5vbi1hdXRvLWxpbmtzIGFyZSBub3Qgc2VlbiBhcyBsaW5rcy4gIFRoaXMgcGF0dGVybiBuZWVkcyB0b1xuICAgICAgLy8gY2hlY2sgdGhlIHByZWNlZGluZyBub2RlcyB0b28uXG4gICAgICBpZiAoXG4gICAgICAgIGdmbSAmJlxuICAgICAgICAhc2VsZi5pbkxpbmsgJiZcbiAgICAgICAgdGV4dChwcmV2aW91cykgJiZcbiAgICAgICAgdmFsdWUuY2hhckF0KDApID09PSBjb2xvbiAmJlxuICAgICAgICBwcm90b2NvbChwcmV2aW91cy52YWx1ZS5zbGljZSgtNikpXG4gICAgICApIHtcbiAgICAgICAgZXNjYXBlZFswXSA9IG9uZShjb2xvbilcbiAgICAgIH1cblxuICAgICAgLy8gRXNjYXBlIGFtcGVyc2FuZCBpZiBpdCB3b3VsZCBvdGhlcndpc2Ugc3RhcnQgYW4gZW50aXR5LlxuICAgICAgaWYgKFxuICAgICAgICB0ZXh0KG5leHQpICYmXG4gICAgICAgIHZhbHVlLmNoYXJBdChsZW5ndGggLSAxKSA9PT0gYW1wZXJzYW5kICYmXG4gICAgICAgIHByZWZpeChhbXBlcnNhbmQgKyBuZXh0LnZhbHVlKSAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIGVzY2FwZWRbZXNjYXBlZC5sZW5ndGggLSAxXSA9IG9uZShhbXBlcnNhbmQpXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSBleGNsYW1hdGlvbiBtYXJrcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBsaW5rcy5cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dCAmJlxuICAgICAgICBuZXh0LnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMSkgPT09IGV4Y2xhbWF0aW9uTWFya1xuICAgICAgKSB7XG4gICAgICAgIGVzY2FwZWRbZXNjYXBlZC5sZW5ndGggLSAxXSA9IG9uZShleGNsYW1hdGlvbk1hcmspXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSBkb3VibGUgdGlsZGVzIGluIEdGTS5cbiAgICAgIGlmIChcbiAgICAgICAgZ2ZtICYmXG4gICAgICAgIHRleHQobmV4dCkgJiZcbiAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSB0aWxkZSAmJlxuICAgICAgICBuZXh0LnZhbHVlLmNoYXJBdCgwKSA9PT0gdGlsZGVcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkLnNwbGljZSgtMSwgMCwgYmFja3NsYXNoKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgdW5kZXJzY29yZXMsIGJ1dCBub3QgbWlkLXdvcmQgKHVubGVzcyBpbiBwZWRhbnRpYyBtb2RlKS5cbiAgICAgIHdvcmRDaGFyQmVmb3JlID0gdGV4dChwcmV2aW91cykgJiYgYWxwaGFudW1lcmljKHByZXZpb3VzLnZhbHVlLnNsaWNlKC0xKSlcbiAgICAgIHdvcmRDaGFyQWZ0ZXIgPSB0ZXh0KG5leHQpICYmIGFscGhhbnVtZXJpYyhuZXh0LnZhbHVlLmNoYXJBdCgwKSlcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHwgIXdvcmRDaGFyQmVmb3JlIHx8ICF3b3JkQ2hhckFmdGVyKVxuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnVuc2hpZnQoYmFja3NsYXNoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY2hhckF0KDApID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8ICF3b3JkQ2hhckJlZm9yZSB8fCAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdCgxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQudW5zaGlmdChiYWNrc2xhc2gpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8XG4gICAgICAgICAgICAhd29yZENoYXJBZnRlciB8fFxuICAgICAgICAgICAgIWFscGhhbnVtZXJpYyh2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMikpKVxuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnNwbGljZSgtMSwgMCwgYmFja3NsYXNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZWQuam9pbignJylcblxuICAgIGZ1bmN0aW9uIG9uZShjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBlc2NhcGFibGUuaW5kZXhPZihjaGFyYWN0ZXIpID09PSAtMVxuICAgICAgICA/IGVudGl0aWVzW2NoYXJhY3Rlcl1cbiAgICAgICAgOiBiYWNrc2xhc2ggKyBjaGFyYWN0ZXJcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGluZGV4YCBpbiBgdmFsdWVgIGlzIGluc2lkZSBhbiBhbGlnbm1lbnQgcm93LlxuZnVuY3Rpb24gYWxpZ25tZW50KHZhbHVlLCBpbmRleCkge1xuICB2YXIgc3RhcnQgPSB2YWx1ZS5sYXN0SW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gIHZhciBlbmQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgdmFyIGNoYXJcblxuICBlbmQgPSBlbmQgPT09IC0xID8gdmFsdWUubGVuZ3RoIDogZW5kXG5cbiAgd2hpbGUgKCsrc3RhcnQgPCBlbmQpIHtcbiAgICBjaGFyID0gdmFsdWUuY2hhckF0KHN0YXJ0KVxuXG4gICAgaWYgKFxuICAgICAgY2hhciAhPT0gY29sb24gJiZcbiAgICAgIGNoYXIgIT09IGRhc2ggJiZcbiAgICAgIGNoYXIgIT09IHNwYWNlICYmXG4gICAgICBjaGFyICE9PSB2ZXJ0aWNhbEJhclxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gQ2hlY2sgaWYgYG5vZGVgIGlzIGEgdGV4dCBub2RlLlxuZnVuY3Rpb24gdGV4dChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUudHlwZSA9PT0gJ3RleHQnXG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgZW5kcyBpbiBhIHByb3RvY29sLlxuZnVuY3Rpb24gcHJvdG9jb2wodmFsdWUpIHtcbiAgdmFyIHRhaWwgPSB2YWx1ZS5zbGljZSgtNikudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gdGFpbCA9PT0gbWFpbHRvIHx8IHRhaWwuc2xpY2UoLTUpID09PSBodHRwcyB8fCB0YWlsLnNsaWNlKC00KSA9PT0gaHR0cFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWxsXG5cbi8vIFZpc2l0IGFsbCBjaGlsZHJlbiBvZiBgcGFyZW50YC5cbmZ1bmN0aW9uIGFsbChwYXJlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gc2VsZi52aXNpdChjaGlsZHJlbltpbmRleF0sIHBhcmVudClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xuXG52YXIgYmxhbmsgPSBsaW5lRmVlZCArIGxpbmVGZWVkXG52YXIgdHJpcGxlID0gYmxhbmsgKyBsaW5lRmVlZFxudmFyIGNvbW1lbnQgPSBibGFuayArICc8IS0tLS0+JyArIGJsYW5rXG5cbi8vIFN0cmluZ2lmeSBhIGJsb2NrIG5vZGUgd2l0aCBibG9jayBjaGlsZHJlbiAoZS5nLiwgYHJvb3RgIG9yIGBibG9ja3F1b3RlYCkuXG4vLyBLbm93cyBhYm91dCBjb2RlIGZvbGxvd2luZyBhIGxpc3QsIG9yIGFkamFjZW50IGxpc3RzIHdpdGggc2ltaWxhciBidWxsZXRzLFxuLy8gYW5kIHBsYWNlcyBhbiBleHRyYSBsaW5lIGZlZWQgYmV0d2VlbiB0aGVtLlxuZnVuY3Rpb24gYmxvY2sobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9wdGlvbnMgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGZlbmNlcyA9IG9wdGlvbnMuZmVuY2VzXG4gIHZhciBnYXAgPSBvcHRpb25zLmNvbW1vbm1hcmsgPyBjb21tZW50IDogdHJpcGxlXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHByZXZpb3VzXG4gIHZhciBjaGlsZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldmlvdXMgPSBjaGlsZFxuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIC8vIEEgbGlzdCBwcmVjZWRpbmcgYW5vdGhlciBsaXN0IHRoYXQgYXJlIGVxdWFsbHkgb3JkZXJlZCwgb3IgYVxuICAgICAgLy8gbGlzdCBwcmVjZWRpbmcgYW4gaW5kZW50ZWQgY29kZSBibG9jaywgbmVlZCBhIGdhcCBiZXR3ZWVuIHRoZW0sXG4gICAgICAvLyBzbyBhcyBub3QgdG8gc2VlIHRoZW0gYXMgb25lIGxpc3QsIG9yIGNvbnRlbnQgb2YgdGhlIGxpc3QsXG4gICAgICAvLyByZXNwZWN0aXZlbHkuXG4gICAgICAvL1xuICAgICAgLy8gSW4gY29tbW9ubWFyaywgb25seSBzb21ldGhpbmcgdGhhdCBicmVha3MgYm90aCB1cCBjYW4gZG8gdGhhdCxcbiAgICAgIC8vIHNvIHdlIG9wdCBmb3IgYW4gZW1wdHksIGludmlzaWJsZSBjb21tZW50LiAgSW4gb3RoZXIgZmxhdm91cnMsXG4gICAgICAvLyB0d28gYmxhbmsgbGluZXMgYXJlIGZpbmUuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzLnR5cGUgPT09ICdsaXN0JyAmJlxuICAgICAgICAoKGNoaWxkLnR5cGUgPT09ICdsaXN0JyAmJiBwcmV2aW91cy5vcmRlcmVkID09PSBjaGlsZC5vcmRlcmVkKSB8fFxuICAgICAgICAgIChjaGlsZC50eXBlID09PSAnY29kZScgJiYgIWNoaWxkLmxhbmcgJiYgIWZlbmNlcykpXG4gICAgICApIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZ2FwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goYmxhbmspXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsdWVzLnB1c2goc2VsZi52aXNpdChjaGlsZCwgbm9kZSkpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4oJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbXBhY3QgPSByZXF1aXJlKCdtZGFzdC11dGlsLWNvbXBhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVcblxuLy8gU3RyaW5naWZ5IHRoZSBnaXZlbiB0cmVlLlxuZnVuY3Rpb24gY29tcGlsZSgpIHtcbiAgcmV0dXJuIHRoaXMudmlzaXQoY29tcGFjdCh0aGlzLnRyZWUsIHRoaXMub3B0aW9ucy5jb21tb25tYXJrKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uZVxuXG5mdW5jdGlvbiBvbmUobm9kZSwgcGFyZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdmlzaXRvcnMgPSBzZWxmLnZpc2l0b3JzXG5cbiAgLy8gRmFpbCBvbiB1bmtub3duIG5vZGVzLlxuICBpZiAodHlwZW9mIHZpc2l0b3JzW25vZGUudHlwZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgJ01pc3NpbmcgY29tcGlsZXIgZm9yIG5vZGUgb2YgdHlwZSBgJyArIG5vZGUudHlwZSArICdgOiBgJyArIG5vZGUgKyAnYCdcbiAgICAgICksXG4gICAgICBub2RlXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHZpc2l0b3JzW25vZGUudHlwZV0uY2FsbChzZWxmLCBub2RlLCBwYXJlbnQpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvcmRlcmVkSXRlbXNcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBkb3QgPSAnLidcblxudmFyIGJsYW5rID0gbGluZUZlZWQgKyBsaW5lRmVlZFxuXG4vLyBWaXNpdCBvcmRlcmVkIGxpc3QgaXRlbXMuXG4vL1xuLy8gU3RhcnRzIHRoZSBsaXN0IHdpdGhcbi8vIGBub2RlLnN0YXJ0YCBhbmQgaW5jcmVtZW50cyBlYWNoIGZvbGxvd2luZyBsaXN0IGl0ZW1cbi8vIGJ1bGxldCBieSBvbmU6XG4vL1xuLy8gICAgIDIuIGZvb1xuLy8gICAgIDMuIGJhclxuLy9cbi8vIEluIGBpbmNyZW1lbnRMaXN0TWFya2VyOiBmYWxzZWAgbW9kZSwgZG9lcyBub3QgaW5jcmVtZW50XG4vLyBlYWNoIG1hcmtlciBhbmQgc3RheXMgb24gYG5vZGUuc3RhcnRgOlxuLy9cbi8vICAgICAxLiBmb29cbi8vICAgICAxLiBiYXJcbmZ1bmN0aW9uIG9yZGVyZWRJdGVtcyhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZm4gPSBzZWxmLnZpc2l0b3JzLmxpc3RJdGVtXG4gIHZhciBpbmNyZW1lbnQgPSBzZWxmLm9wdGlvbnMuaW5jcmVtZW50TGlzdE1hcmtlclxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIHN0YXJ0ID0gbm9kZS5zdGFydFxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGJ1bGxldFxuXG4gIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDEgOiBzdGFydFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYnVsbGV0ID0gKGluY3JlbWVudCA/IHN0YXJ0ICsgaW5kZXggOiBzdGFydCkgKyBkb3RcbiAgICB2YWx1ZXNbaW5kZXhdID0gZm4uY2FsbChzZWxmLCBjaGlsZHJlbltpbmRleF0sIG5vZGUsIGluZGV4LCBidWxsZXQpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4obm9kZS5zcHJlYWQgPyBibGFuayA6IGxpbmVGZWVkKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdW5vcmRlcmVkSXRlbXNcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcblxudmFyIGJsYW5rID0gbGluZUZlZWQgKyBsaW5lRmVlZFxuXG4vLyBWaXNpdCB1bm9yZGVyZWQgbGlzdCBpdGVtcy4gIFVzZXMgYG9wdGlvbnMuYnVsbGV0YCBhcyBlYWNoIGl0ZW3igJlzIGJ1bGxldC5cbmZ1bmN0aW9uIHVub3JkZXJlZEl0ZW1zKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBidWxsZXQgPSBzZWxmLm9wdGlvbnMuYnVsbGV0XG4gIHZhciBmbiA9IHNlbGYudmlzaXRvcnMubGlzdEl0ZW1cbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZXMgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWVzW2luZGV4XSA9IGZuLmNhbGwoc2VsZiwgY2hpbGRyZW5baW5kZXhdLCBub2RlLCBpbmRleCwgYnVsbGV0KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKG5vZGUuc3ByZWFkID8gYmxhbmsgOiBsaW5lRmVlZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxudmFyIGVzY2FwZUZhY3RvcnkgPSByZXF1aXJlKCcuL2VzY2FwZScpXG52YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL3V0aWwvaWRlbnRpdHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE9wdGlvbnNcblxuLy8gTWFwIG9mIGFwcGxpY2FibGUgZW51bXMuXG52YXIgbWFwcyA9IHtcbiAgZW50aXRpZXM6IHt0cnVlOiB0cnVlLCBmYWxzZTogdHJ1ZSwgbnVtYmVyczogdHJ1ZSwgZXNjYXBlOiB0cnVlfSxcbiAgYnVsbGV0OiB7JyonOiB0cnVlLCAnLSc6IHRydWUsICcrJzogdHJ1ZX0sXG4gIHJ1bGU6IHsnLSc6IHRydWUsIF86IHRydWUsICcqJzogdHJ1ZX0sXG4gIGxpc3RJdGVtSW5kZW50OiB7dGFiOiB0cnVlLCBtaXhlZDogdHJ1ZSwgMTogdHJ1ZX0sXG4gIGVtcGhhc2lzOiB7XzogdHJ1ZSwgJyonOiB0cnVlfSxcbiAgc3Ryb25nOiB7XzogdHJ1ZSwgJyonOiB0cnVlfSxcbiAgZmVuY2U6IHsnYCc6IHRydWUsICd+JzogdHJ1ZX1cbn1cblxuLy8gRXhwb3NlIGB2YWxpZGF0ZWAuXG52YXIgdmFsaWRhdGUgPSB7XG4gIGJvb2xlYW46IHZhbGlkYXRlQm9vbGVhbixcbiAgc3RyaW5nOiB2YWxpZGF0ZVN0cmluZyxcbiAgbnVtYmVyOiB2YWxpZGF0ZU51bWJlcixcbiAgZnVuY3Rpb246IHZhbGlkYXRlRnVuY3Rpb25cbn1cblxuLy8gU2V0IG9wdGlvbnMuICBEb2VzIG5vdCBvdmVyd3JpdGUgcHJldmlvdXNseSBzZXQgb3B0aW9ucy5cbmZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGN1cnJlbnQgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIHJ1bGVSZXBldGl0aW9uXG4gIHZhciBrZXlcblxuICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGAnICsgb3B0aW9ucyArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zYCcpXG4gIH1cblxuICBmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuICAgIHZhbGlkYXRlW3R5cGVvZiBkZWZhdWx0c1trZXldXShvcHRpb25zLCBrZXksIGN1cnJlbnRba2V5XSwgbWFwc1trZXldKVxuICB9XG5cbiAgcnVsZVJlcGV0aXRpb24gPSBvcHRpb25zLnJ1bGVSZXBldGl0aW9uXG5cbiAgaWYgKHJ1bGVSZXBldGl0aW9uICYmIHJ1bGVSZXBldGl0aW9uIDwgMykge1xuICAgIHJhaXNlKHJ1bGVSZXBldGl0aW9uLCAnb3B0aW9ucy5ydWxlUmVwZXRpdGlvbicpXG4gIH1cblxuICBzZWxmLmVuY29kZSA9IGVuY29kZUZhY3RvcnkoU3RyaW5nKG9wdGlvbnMuZW50aXRpZXMpKVxuICBzZWxmLmVzY2FwZSA9IGVzY2FwZUZhY3Rvcnkob3B0aW9ucylcblxuICBzZWxmLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBib29sZWFuLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb24gd2l0aFxuLy8gYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGEgYm9vbGVhbi5cbmZ1bmN0aW9uIHZhbGlkYXRlQm9vbGVhbihjb250ZXh0LCBuYW1lLCBkZWYpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykge1xuICAgIHJhaXNlKHZhbHVlLCAnb3B0aW9ucy4nICsgbmFtZSlcbiAgfVxuXG4gIGNvbnRleHRbbmFtZV0gPSB2YWx1ZVxufVxuXG4vLyBWYWxpZGF0ZSBhIHZhbHVlIHRvIGJlIGJvb2xlYW4uIERlZmF1bHRzIHRvIGBkZWZgLiAgUmFpc2VzIGFuIGV4Y2VwdGlvbiB3aXRoXG4vLyBgY29udGV4dFtuYW1lXWAgd2hlbiBub3QgYSBib29sZWFuLlxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoY29udGV4dCwgbmFtZSwgZGVmKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRbbmFtZV1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHZhbHVlID0gZGVmXG4gIH1cblxuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgcmFpc2UodmFsdWUsICdvcHRpb25zLicgKyBuYW1lKVxuICB9XG5cbiAgY29udGV4dFtuYW1lXSA9IHZhbHVlXG59XG5cbi8vIFZhbGlkYXRlIGEgdmFsdWUgdG8gYmUgaW4gYG1hcGAuIERlZmF1bHRzIHRvIGBkZWZgLiAgUmFpc2VzIGFuIGV4Y2VwdGlvblxuLy8gd2l0aCBgY29udGV4dFtuYW1lXWAgd2hlbiBub3QgaW4gYG1hcGAuXG5mdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhjb250ZXh0LCBuYW1lLCBkZWYsIG1hcCkge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W25hbWVdXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IGRlZlxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG5cbiAgaWYgKCEodmFsdWUgaW4gbWFwKSkge1xuICAgIHJhaXNlKHZhbHVlLCAnb3B0aW9ucy4nICsgbmFtZSlcbiAgfVxuXG4gIGNvbnRleHRbbmFtZV0gPSB2YWx1ZVxufVxuXG4vLyBWYWxpZGF0ZSBhIHZhbHVlIHRvIGJlIGZ1bmN0aW9uLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb25cbi8vIHdpdGggYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGEgZnVuY3Rpb24uXG5mdW5jdGlvbiB2YWxpZGF0ZUZ1bmN0aW9uKGNvbnRleHQsIG5hbWUsIGRlZikge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W25hbWVdXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IGRlZlxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhaXNlKHZhbHVlLCAnb3B0aW9ucy4nICsgbmFtZSlcbiAgfVxuXG4gIGNvbnRleHRbbmFtZV0gPSB2YWx1ZVxufVxuXG4vLyBGYWN0b3J5IHRvIGVuY29kZSBIVE1MIGVudGl0aWVzLiAgQ3JlYXRlcyBhIG5vLW9wZXJhdGlvbiBmdW5jdGlvbiB3aGVuXG4vLyBgdHlwZWAgaXMgYCdmYWxzZSdgLCBhIGZ1bmN0aW9uIHdoaWNoIGVuY29kZXMgdXNpbmcgbmFtZWQgcmVmZXJlbmNlcyB3aGVuXG4vLyBgdHlwZWAgaXMgYCd0cnVlJ2AsIGFuZCBhIGZ1bmN0aW9uIHdoaWNoIGVuY29kZXMgdXNpbmcgbnVtYmVyZWQgcmVmZXJlbmNlc1xuLy8gd2hlbiBgdHlwZWAgaXMgYCdudW1iZXJzJ2AuXG5mdW5jdGlvbiBlbmNvZGVGYWN0b3J5KHR5cGUpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuXG4gIGlmICh0eXBlID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3RydWUnKSB7XG4gICAgb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMgPSB0cnVlXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2VzY2FwZScpIHtcbiAgICBvcHRpb25zLmVzY2FwZU9ubHkgPSB0cnVlXG4gICAgb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gd3JhcHBlZFxuXG4gIC8vIEVuY29kZSBIVE1MIGVudGl0aWVzIHVzaW5nIHRoZSBib3VuZCBvcHRpb25zLlxuICBmdW5jdGlvbiB3cmFwcGVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZSh2YWx1ZSwgb3B0aW9ucylcbiAgfVxufVxuXG4vLyBUaHJvdyBhbiBleGNlcHRpb24gd2l0aCBpbiBpdHMgYG1lc3NhZ2VgIGB2YWx1ZWAgYW5kIGBuYW1lYC5cbmZ1bmN0aW9uIHJhaXNlKHZhbHVlLCBuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBgJyArIHZhbHVlICsgJ2AgZm9yIHNldHRpbmcgYCcgKyBuYW1lICsgJ2AnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBlbnRpdHlQcmVmaXhMZW5ndGggPSByZXF1aXJlKCcuL2VudGl0eS1wcmVmaXgtbGVuZ3RoJylcblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbnZhciBhbXBlcnNhbmQgPSAnJidcblxudmFyIHB1bmN0dWF0aW9uRXhwcHJlc2lvbiA9IC9bLSFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxcXFxcXV5ge3x9fl9dL1xuXG4vLyBGb3Igc2hvcnRjdXQgYW5kIGNvbGxhcHNlZCByZWZlcmVuY2UgbGlua3MsIHRoZSBjb250ZW50cyBpcyBhbHNvIGFuXG4vLyBpZGVudGlmaWVyLCBzbyB3ZSBuZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIGVuY29kaW5nIGFuZCBlc2NhcGluZ1xuLy8gdGhhdCB3ZXJlIHByZXNlbnQgaW4gdGhlIHNvdXJjZSBzdHJpbmcuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgdW5lc2NhcGVkICYgdW5lbmNvZGVkIHZhbHVlIGZyb20gc2hvcnRjdXTigJlzXG4vLyBjaGlsZCBub2RlcyBhbmQgdGhlIGlkZW50aWZpZXIgYW5kIGVuY29kZXMgdGhlIGZvcm1lciBhY2NvcmRpbmcgdG9cbi8vIHRoZSBsYXR0ZXIuXG5mdW5jdGlvbiBjb3B5KHZhbHVlLCBpZGVudGlmaWVyKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGNvdW50ID0gaWRlbnRpZmllci5sZW5ndGhcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBwb3NpdGlvbiA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgc3RhcnRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAvLyBUYWtlIG5leHQgbm9uLXB1bmN0dWF0aW9uIGNoYXJhY3RlcnMgZnJvbSBgdmFsdWVgLlxuICAgIHN0YXJ0ID0gaW5kZXhcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiAhcHVuY3R1YXRpb25FeHBwcmVzaW9uLnRlc3QodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICAgIGluZGV4ICs9IDFcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaCh2YWx1ZS5zbGljZShzdGFydCwgaW5kZXgpKVxuXG4gICAgLy8gQWR2YW5jZSBgcG9zaXRpb25gIHRvIHRoZSBuZXh0IHB1bmN0dWF0aW9uIGNoYXJhY3Rlci5cbiAgICB3aGlsZSAoXG4gICAgICBwb3NpdGlvbiA8IGNvdW50ICYmXG4gICAgICAhcHVuY3R1YXRpb25FeHBwcmVzaW9uLnRlc3QoaWRlbnRpZmllci5jaGFyQXQocG9zaXRpb24pKVxuICAgICkge1xuICAgICAgcG9zaXRpb24gKz0gMVxuICAgIH1cblxuICAgIC8vIFRha2UgbmV4dCBwdW5jdHVhdGlvbiBjaGFyYWN0ZXJzIGZyb20gYGlkZW50aWZpZXJgLlxuICAgIHN0YXJ0ID0gcG9zaXRpb25cblxuICAgIHdoaWxlIChcbiAgICAgIHBvc2l0aW9uIDwgY291bnQgJiZcbiAgICAgIHB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KGlkZW50aWZpZXIuY2hhckF0KHBvc2l0aW9uKSlcbiAgICApIHtcbiAgICAgIGlmIChpZGVudGlmaWVyLmNoYXJBdChwb3NpdGlvbikgPT09IGFtcGVyc2FuZCkge1xuICAgICAgICBwb3NpdGlvbiArPSBlbnRpdHlQcmVmaXhMZW5ndGgoaWRlbnRpZmllci5zbGljZShwb3NpdGlvbikpXG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9uICs9IDFcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChpZGVudGlmaWVyLnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpXG5cbiAgICAvLyBBZHZhbmNlIGBpbmRleGAgdG8gdGhlIG5leHQgbm9uLXB1bmN0dWF0aW9uIGNoYXJhY3Rlci5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGggJiYgcHVuY3R1YXRpb25FeHBwcmVzaW9uLnRlc3QodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICAgIGluZGV4ICs9IDFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNsb3NlXG5cbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxuXG4vLyBUaGVyZSBpcyBjdXJyZW50bHkgbm8gd2F5IHRvIHN1cHBvcnQgbmVzdGVkIGRlbGltaXRlcnMgYWNyb3NzIE1hcmtkb3duLnBsLFxuLy8gQ29tbW9uTWFyaywgYW5kIEdpdEh1YiAoUmVkQ2FycGV0KS4gIFRoZSBmb2xsb3dpbmcgY29kZSBzdXBwb3J0cyBNYXJrZG93bi5wbFxuLy8gYW5kIEdpdEh1Yi5cbi8vIENvbW1vbk1hcmsgaXMgbm90IHN1cHBvcnRlZCB3aGVuIG1peGluZyBkb3VibGUtIGFuZCBzaW5nbGUgcXVvdGVzIGluc2lkZSBhXG4vLyB0aXRsZS5cbmZ1bmN0aW9uIGVuY2xvc2UodGl0bGUpIHtcbiAgdmFyIGRlbGltaXRlciA9XG4gICAgdGl0bGUuaW5kZXhPZihxdW90YXRpb25NYXJrKSA9PT0gLTEgPyBxdW90YXRpb25NYXJrIDogYXBvc3Ryb3BoZVxuICByZXR1cm4gZGVsaW1pdGVyICsgdGl0bGUgKyBkZWxpbWl0ZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY2xvc2VcblxudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbnZhciBleHByZXNzaW9uID0gL1xccy9cblxuLy8gV3JhcCBgdXJsYCBpbiBhbmdsZSBicmFja2V0cyB3aGVuIG5lZWRlZCwgb3Igd2hlblxuLy8gZm9yY2VkLlxuLy8gSW4gbGlua3MsIGltYWdlcywgYW5kIGRlZmluaXRpb25zLCB0aGUgVVJMIHBhcnQgbmVlZHNcbi8vIHRvIGJlIGVuY2xvc2VkIHdoZW4gaXQ6XG4vL1xuLy8gLSBoYXMgYSBsZW5ndGggb2YgYDBgXG4vLyAtIGNvbnRhaW5zIHdoaXRlLXNwYWNlXG4vLyAtIGhhcyBtb3JlIG9yIGxlc3Mgb3BlbmluZyB0aGFuIGNsb3NpbmcgcGFyZW50aGVzZXNcbmZ1bmN0aW9uIGVuY2xvc2UodXJpLCBhbHdheXMpIHtcbiAgaWYgKFxuICAgIGFsd2F5cyB8fFxuICAgIHVyaS5sZW5ndGggPT09IDAgfHxcbiAgICBleHByZXNzaW9uLnRlc3QodXJpKSB8fFxuICAgIGNvdW50KHVyaSwgbGVmdFBhcmVudGhlc2lzKSAhPT0gY291bnQodXJpLCByaWdodFBhcmVudGhlc2lzKVxuICApIHtcbiAgICByZXR1cm4gbGVzc1RoYW4gKyB1cmkgKyBncmVhdGVyVGhhblxuICB9XG5cbiAgcmV0dXJuIHVyaVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudGVyXG5cbi8vIFNob3J0Y3V0IGFuZCBjb2xsYXBzZWQgbGluayByZWZlcmVuY2VzIG5lZWQgbm8gZXNjYXBpbmcgYW5kIGVuY29kaW5nIGR1cmluZ1xuLy8gdGhlIHByb2Nlc3Npbmcgb2YgY2hpbGQgbm9kZXMgKGl0IG11c3QgYmUgaW1wbGllZCBmcm9tIGlkZW50aWZpZXIpLlxuLy9cbi8vIFRoaXMgdG9nZ2xlciB0dXJucyBlbmNvZGluZyBhbmQgZXNjYXBpbmcgb2ZmIGZvciBzaG9ydGN1dCBhbmQgY29sbGFwc2VkXG4vLyByZWZlcmVuY2VzLlxuLy9cbi8vIEltcGxpZXMgYGVudGVyTGlua2AuXG5mdW5jdGlvbiBlbnRlcihjb21waWxlciwgbm9kZSkge1xuICB2YXIgZW5jb2RlID0gY29tcGlsZXIuZW5jb2RlXG4gIHZhciBlc2NhcGUgPSBjb21waWxlci5lc2NhcGVcbiAgdmFyIGV4aXRMaW5rID0gY29tcGlsZXIuZW50ZXJMaW5rKClcblxuICBpZiAobm9kZS5yZWZlcmVuY2VUeXBlICE9PSAnc2hvcnRjdXQnICYmIG5vZGUucmVmZXJlbmNlVHlwZSAhPT0gJ2NvbGxhcHNlZCcpIHtcbiAgICByZXR1cm4gZXhpdExpbmtcbiAgfVxuXG4gIGNvbXBpbGVyLmVzY2FwZSA9IGlkZW50aXR5XG4gIGNvbXBpbGVyLmVuY29kZSA9IGlkZW50aXR5XG5cbiAgcmV0dXJuIGV4aXRcblxuICBmdW5jdGlvbiBleGl0KCkge1xuICAgIGNvbXBpbGVyLmVuY29kZSA9IGVuY29kZVxuICAgIGNvbXBpbGVyLmVzY2FwZSA9IGVzY2FwZVxuICAgIGV4aXRMaW5rKClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbnZhciBhbXBlcnNhbmQgPSAnJidcblxuLy8gUmV0dXJucyB0aGUgbGVuZ3RoIG9mIEhUTUwgZW50aXR5IHRoYXQgaXMgYSBwcmVmaXggb2YgdGhlIGdpdmVuIHN0cmluZ1xuLy8gKGV4Y2x1ZGluZyB0aGUgYW1wZXJzYW5kKSwgMCBpZiBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIGFuIGVudGl0eS5cbmZ1bmN0aW9uIGxlbmd0aCh2YWx1ZSkge1xuICB2YXIgcHJlZml4XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gQ3VycmVudGx5IGFsc28gdGVzdGVkIGZvciBhdCBpbXBsZW1lbnRpb24sIGJ1dCB3ZVxuICAgKiBrZWVwIGl0IGhlcmUgYmVjYXVzZSB0aGF04oCZcyBwcm9wZXIuICovXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09IGFtcGVyc2FuZCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBwcmVmaXggPSB2YWx1ZS5zcGxpdChhbXBlcnNhbmQsIDIpLmpvaW4oYW1wZXJzYW5kKVxuXG4gIHJldHVybiBwcmVmaXgubGVuZ3RoIC0gZGVjb2RlKHByZWZpeCkubGVuZ3RoXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhYmVsXG5cbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xuXG52YXIgc2hvcnRjdXQgPSAnc2hvcnRjdXQnXG52YXIgY29sbGFwc2VkID0gJ2NvbGxhcHNlZCdcblxuLy8gU3RyaW5naWZ5IGEgcmVmZXJlbmNlIGxhYmVsLlxuLy8gQmVjYXVzZSBsaW5rIHJlZmVyZW5jZXMgYXJlIGVhc2lseSwgbWlzdGFraW5nbHksIGNyZWF0ZWQgKGZvciBleGFtcGxlLFxuLy8gYFtmb29dYCksIHJlZmVyZW5jZSBub2RlcyBoYXZlIGFuIGV4dHJhIHByb3BlcnR5IGRlcGljdGluZyBob3cgaXQgbG9va2VkIGluXG4vLyB0aGUgb3JpZ2luYWwgZG9jdW1lbnQsIHNvIHN0cmluZ2lmaWNhdGlvbiBjYW4gY2F1c2UgbWluaW1hbCBjaGFuZ2VzLlxuZnVuY3Rpb24gbGFiZWwobm9kZSkge1xuICB2YXIgdHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuXG4gIGlmICh0eXBlID09PSBzaG9ydGN1dCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgKHR5cGUgPT09IGNvbGxhcHNlZCA/ICcnIDogbm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXRcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBwYWRcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gUGFkIGB2YWx1ZWAgd2l0aCBgbGV2ZWwgKiB0YWJTaXplYCBzcGFjZXMuICBSZXNwZWN0cyBsaW5lcy4gIElnbm9yZXMgZW1wdHlcbi8vIGxpbmVzLlxuZnVuY3Rpb24gcGFkKHZhbHVlLCBsZXZlbCkge1xuICB2YXIgdmFsdWVzID0gdmFsdWUuc3BsaXQobGluZUZlZWQpXG4gIHZhciBpbmRleCA9IHZhbHVlcy5sZW5ndGhcbiAgdmFyIHBhZGRpbmcgPSByZXBlYXQoc3BhY2UsIGxldmVsICogdGFiU2l6ZSlcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmICh2YWx1ZXNbaW5kZXhdLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFsdWVzW2luZGV4XSA9IHBhZGRpbmcgKyB2YWx1ZXNbaW5kZXhdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKGxpbmVGZWVkKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxuZnVuY3Rpb24gYmxvY2txdW90ZShub2RlKSB7XG4gIHZhciB2YWx1ZXMgPSB0aGlzLmJsb2NrKG5vZGUpLnNwbGl0KGxpbmVGZWVkKVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHZhbHVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHZhbHVlc1tpbmRleF1cbiAgICByZXN1bHRbaW5kZXhdID0gKHZhbHVlID8gc3BhY2UgOiAnJykgKyB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIGdyZWF0ZXJUaGFuICsgcmVzdWx0LmpvaW4obGluZUZlZWQgKyBncmVhdGVyVGhhbilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVCcmVha1xuXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciBjb21tb25tYXJrID0gYmFja3NsYXNoICsgbGluZUZlZWRcbnZhciBub3JtYWwgPSBzcGFjZSArIHNwYWNlICsgbGluZUZlZWRcblxuZnVuY3Rpb24gbGluZUJyZWFrKCkge1xuICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbW1vbm1hcmsgPyBjb21tb25tYXJrIDogbm9ybWFsXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0cmVhayA9IHJlcXVpcmUoJ2xvbmdlc3Qtc3RyZWFrJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBwYWQgPSByZXF1aXJlKCcuLi91dGlsL3BhZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgdGlsZGUgPSAnfidcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xuXG4vLyBTdHJpbmdpZnkgY29kZS5cbi8vIENyZWF0ZXMgaW5kZW50ZWQgY29kZSB3aGVuOlxuLy9cbi8vIC0gTm8gbGFuZ3VhZ2UgdGFnIGV4aXN0c1xuLy8gLSBOb3QgaW4gYGZlbmNlczogdHJ1ZWAgbW9kZVxuLy8gLSBBIG5vbi1lbXB0eSB2YWx1ZSBleGlzdHNcbi8vXG4vLyBPdGhlcndpc2UsIEdGTSBmZW5jZWQgY29kZSBpcyBjcmVhdGVkOlxuLy9cbi8vIGBgYGBtYXJrZG93blxuLy8gYGBganNcbi8vIGZvbygpO1xuLy8gYGBgXG4vLyBgYGBgXG4vL1xuLy8gV2hlbiBpbiBgYGZlbmNlOiBgfmAgYGAgbW9kZSwgdXNlcyB0aWxkZXMgYXMgZmVuY2VzOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyB+fn5qc1xuLy8gZm9vKCk7XG4vLyB+fn5cbi8vIGBgYFxuLy9cbi8vIEtub3dzIGFib3V0IGludGVybmFsIGZlbmNlczpcbi8vXG4vLyBgYGBgYG1hcmtkb3duXG4vLyBgYGBgbWFya2Rvd25cbi8vIGBgYGphdmFzY3JpcHRcbi8vIGZvbygpO1xuLy8gYGBgXG4vLyBgYGBgXG4vLyBgYGBgYFxuZnVuY3Rpb24gY29kZShub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWVcbiAgdmFyIG9wdGlvbnMgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIG1hcmtlciA9IG9wdGlvbnMuZmVuY2VcbiAgdmFyIGluZm8gPSBub2RlLmxhbmcgfHwgJydcbiAgdmFyIGZlbmNlXG5cbiAgaWYgKGluZm8gJiYgbm9kZS5tZXRhKSB7XG4gICAgaW5mbyArPSBzcGFjZSArIG5vZGUubWV0YVxuICB9XG5cbiAgaW5mbyA9IHNlbGYuZW5jb2RlKHNlbGYuZXNjYXBlKGluZm8sIG5vZGUpKVxuXG4gIC8vIFdpdGhvdXQgKG5lZWRlZCkgZmVuY2VzLlxuICBpZiAoXG4gICAgIWluZm8gJiZcbiAgICAhb3B0aW9ucy5mZW5jZXMgJiZcbiAgICB2YWx1ZSAmJlxuICAgIHZhbHVlLmNoYXJBdCgwKSAhPT0gbGluZUZlZWQgJiZcbiAgICB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgIT09IGxpbmVGZWVkXG4gICkge1xuICAgIC8vIFRocm93IHdoZW4gcGVkYW50aWMsIGluIGEgbGlzdCBpdGVtIHdoaWNoIGlzbuKAmXQgY29tcGlsZWQgdXNpbmcgYSB0YWIuXG4gICAgaWYgKFxuICAgICAgcGFyZW50ICYmXG4gICAgICBwYXJlbnQudHlwZSA9PT0gJ2xpc3RJdGVtJyAmJlxuICAgICAgb3B0aW9ucy5saXN0SXRlbUluZGVudCAhPT0gJ3RhYicgJiZcbiAgICAgIG9wdGlvbnMucGVkYW50aWNcbiAgICApIHtcbiAgICAgIHNlbGYuZmlsZS5mYWlsKFxuICAgICAgICAnQ2Fubm90IGluZGVudCBjb2RlIHByb3Blcmx5LiBTZWUgaHR0cHM6Ly9naXQuaW8vZnhLUjgnLFxuICAgICAgICBub2RlLnBvc2l0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZCh2YWx1ZSwgMSlcbiAgfVxuXG4gIC8vIEJhY2t0aWNrcyBpbiB0aGUgaW5mbyBzdHJpbmcgZG9u4oCZdCB3b3JrIHdpdGggYmFja3RpY2sgZmVuY2VkIGNvZGUuXG4gIC8vIEJhY2t0aWNrcyAoYW5kIHRpbGRlcykgYXJlIGZpbmUgaW4gdGlsZGUgZmVuY2VkIGNvZGUuXG4gIGlmIChtYXJrZXIgPT09IGdyYXZlQWNjZW50ICYmIGluZm8uaW5kZXhPZihncmF2ZUFjY2VudCkgIT09IC0xKSB7XG4gICAgbWFya2VyID0gdGlsZGVcbiAgfVxuXG4gIGZlbmNlID0gcmVwZWF0KG1hcmtlciwgTWF0aC5tYXgoc3RyZWFrKHZhbHVlLCBtYXJrZXIpICsgMSwgMykpXG5cbiAgcmV0dXJuIGZlbmNlICsgaW5mbyArIGxpbmVGZWVkICsgdmFsdWUgKyBsaW5lRmVlZCArIGZlbmNlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVyaSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS11cmknKVxudmFyIHRpdGxlID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXRpdGxlJylcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxuLy8gU3RyaW5naWZ5IGFuIFVSTCBkZWZpbml0aW9uLlxuLy9cbi8vIElzIHNtYXJ0IGFib3V0IGVuY2xvc2luZyBgdXJsYCAoc2VlIGBlbmNsb3NlVVJJKClgKSBhbmQgYHRpdGxlYCAoc2VlXG4vLyBgZW5jbG9zZVRpdGxlKClgKS5cbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gW2Zvb106IDxmb28gYXQgYmFyIGRvdCBjb20+ICdBbiBcImV4YW1wbGVcIiBlLW1haWwnXG4vLyBgYGBcbmZ1bmN0aW9uIGRlZmluaXRpb24obm9kZSkge1xuICB2YXIgY29udGVudCA9IHVyaShub2RlLnVybClcblxuICBpZiAobm9kZS50aXRsZSkge1xuICAgIGNvbnRlbnQgKz0gc3BhY2UgKyB0aXRsZShub2RlLnRpdGxlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgKG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBjb2xvbiArXG4gICAgc3BhY2UgK1xuICAgIGNvbnRlbnRcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWtldGhyb3VnaFxuXG52YXIgdGlsZGUgPSAnfidcblxudmFyIGZlbmNlID0gdGlsZGUgKyB0aWxkZVxuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKG5vZGUpIHtcbiAgcmV0dXJuIGZlbmNlICsgdGhpcy5hbGwobm9kZSkuam9pbignJykgKyBmZW5jZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcblxudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBhc3RlcmlzayA9ICcqJ1xuXG4vLyBTdHJpbmdpZnkgYW4gYGVtcGhhc2lzYC5cbi8vXG4vLyBUaGUgbWFya2VyIHVzZWQgaXMgY29uZmlndXJhYmxlIHRocm91Z2ggYGVtcGhhc2lzYCwgd2hpY2ggZGVmYXVsdHMgdG8gYW5cbi8vIHVuZGVyc2NvcmUgKGAnXydgKSBidXQgYWxzbyBhY2NlcHRzIGFuIGFzdGVyaXNrIChgJyonYCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICpmb28qXG4vLyBgYGBcbi8vXG4vLyBJbiBgcGVkYW50aWNgIG1vZGUsIHRleHQgd2hpY2ggaXRzZWxmIGNvbnRhaW5zIGFuIHVuZGVyc2NvcmUgd2lsbCBjYXVzZSB0aGVcbi8vIG1hcmtlciB0byBkZWZhdWx0IHRvIGFuIGFzdGVyaXNrIGluc3RlYWQ6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICpmb29fYmFyKlxuLy8gYGBgXG5mdW5jdGlvbiBlbXBoYXNpcyhub2RlKSB7XG4gIHZhciBtYXJrZXIgPSB0aGlzLm9wdGlvbnMuZW1waGFzaXNcbiAgdmFyIGNvbnRlbnQgPSB0aGlzLmFsbChub2RlKS5qb2luKCcnKVxuXG4gIC8vIFdoZW4gaW4gcGVkYW50aWMgbW9kZSwgcHJldmVudCB1c2luZyB1bmRlcnNjb3JlIGFzIHRoZSBtYXJrZXIgd2hlbiB0aGVyZVxuICAvLyBhcmUgdW5kZXJzY29yZXMgaW4gdGhlIGNvbnRlbnQuXG4gIGlmIChcbiAgICB0aGlzLm9wdGlvbnMucGVkYW50aWMgJiZcbiAgICBtYXJrZXIgPT09IHVuZGVyc2NvcmUgJiZcbiAgICBjb250ZW50LmluZGV4T2YobWFya2VyKSAhPT0gLTFcbiAgKSB7XG4gICAgbWFya2VyID0gYXN0ZXJpc2tcbiAgfVxuXG4gIHJldHVybiBtYXJrZXIgKyBjb250ZW50ICsgbWFya2VyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYWRpbmdcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIG51bWJlclNpZ24gPSAnIydcbnZhciBkYXNoID0gJy0nXG52YXIgZXF1YWxzVG8gPSAnPSdcblxuLy8gU3RyaW5naWZ5IGEgaGVhZGluZy5cbi8vXG4vLyBJbiBgc2V0ZXh0OiB0cnVlYCBtb2RlIGFuZCB3aGVuIGBkZXB0aGAgaXMgc21hbGxlciB0aGFuIHRocmVlLCBjcmVhdGVzIGFcbi8vIHNldGV4dCBoZWFkZXI6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEZvb1xuLy8gPT09XG4vLyBgYGBcbi8vXG4vLyBPdGhlcndpc2UsIGFuIEFUWCBoZWFkZXIgaXMgZ2VuZXJhdGVkOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAjIyMgRm9vXG4vLyBgYGBcbi8vXG4vLyBJbiBgY2xvc2VBdHg6IHRydWVgIG1vZGUsIHRoZSBoZWFkZXIgaXMgY2xvc2VkIHdpdGggaGFzaGVzOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAjIyMgRm9vICMjI1xuLy8gYGBgXG5mdW5jdGlvbiBoZWFkaW5nKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBkZXB0aCA9IG5vZGUuZGVwdGhcbiAgdmFyIHNldGV4dCA9IHNlbGYub3B0aW9ucy5zZXRleHRcbiAgdmFyIGNsb3NlQXR4ID0gc2VsZi5vcHRpb25zLmNsb3NlQXR4XG4gIHZhciBjb250ZW50ID0gc2VsZi5hbGwobm9kZSkuam9pbignJylcbiAgdmFyIHByZWZpeFxuXG4gIGlmIChzZXRleHQgJiYgZGVwdGggPCAzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbnRlbnQgKyBsaW5lRmVlZCArIHJlcGVhdChkZXB0aCA9PT0gMSA/IGVxdWFsc1RvIDogZGFzaCwgY29udGVudC5sZW5ndGgpXG4gICAgKVxuICB9XG5cbiAgcHJlZml4ID0gcmVwZWF0KG51bWJlclNpZ24sIG5vZGUuZGVwdGgpXG5cbiAgcmV0dXJuIHByZWZpeCArIHNwYWNlICsgY29udGVudCArIChjbG9zZUF0eCA/IHNwYWNlICsgcHJlZml4IDogJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG5cbmZ1bmN0aW9uIGh0bWwobm9kZSkge1xuICByZXR1cm4gbm9kZS52YWx1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsYWJlbCA9IHJlcXVpcmUoJy4uL3V0aWwvbGFiZWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlUmVmZXJlbmNlXG5cbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZShub2RlKSB7XG4gIHJldHVybiAoXG4gICAgZXhjbGFtYXRpb25NYXJrICtcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgKHRoaXMuZW5jb2RlKG5vZGUuYWx0LCBub2RlKSB8fCAnJykgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgbGFiZWwobm9kZSlcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1cmkgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdXJpJylcbnZhciB0aXRsZSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS10aXRsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VcblxudmFyIHNwYWNlID0gJyAnXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG5cbi8vIFN0cmluZ2lmeSBhbiBpbWFnZS5cbi8vXG4vLyBJcyBzbWFydCBhYm91dCBlbmNsb3NpbmcgYHVybGAgKHNlZSBgZW5jbG9zZVVSSSgpYCkgYW5kIGB0aXRsZWAgKHNlZVxuLy8gYGVuY2xvc2VUaXRsZSgpYCkuXG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICFbZm9vXSg8L2ZhdiBpY29uLnBuZz4gJ015IFwiZmF2b3VyaXRlXCIgaWNvbicpXG4vLyBgYGBcbi8vXG4vLyBTdXBwb3J0cyBuYW1lZCBlbnRpdGllcyBpbiBgdXJsYCwgYGFsdGAsIGFuZCBgdGl0bGVgIHdoZW4gaW5cbi8vIGBzZXR0aW5ncy5lbmNvZGVgIG1vZGUuXG5mdW5jdGlvbiBpbWFnZShub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29udGVudCA9IHVyaShzZWxmLmVuY29kZShub2RlLnVybCB8fCAnJywgbm9kZSkpXG4gIHZhciBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICB2YXIgYWx0ID0gc2VsZi5lbmNvZGUoc2VsZi5lc2NhcGUobm9kZS5hbHQgfHwgJycsIG5vZGUpKVxuXG4gIGV4aXQoKVxuXG4gIGlmIChub2RlLnRpdGxlKSB7XG4gICAgY29udGVudCArPSBzcGFjZSArIHRpdGxlKHNlbGYuZW5jb2RlKG5vZGUudGl0bGUsIG5vZGUpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBleGNsYW1hdGlvbk1hcmsgK1xuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICBhbHQgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgbGVmdFBhcmVudGhlc2lzICtcbiAgICBjb250ZW50ICtcbiAgICByaWdodFBhcmVudGhlc2lzXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RyZWFrID0gcmVxdWlyZSgnbG9uZ2VzdC1zdHJlYWsnKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcblxudmFyIGdyYXZlQWNjZW50Q2hhciA9ICdgJ1xudmFyIGxpbmVGZWVkID0gMTAgLy8gICdcXG4nXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBncmF2ZUFjY2VudCA9IDk2IC8vICAnYCdcblxuLy8gU3RyaW5naWZ5IGlubGluZSBjb2RlLlxuLy9cbi8vIEtub3dzIGFib3V0IGludGVybmFsIHRpY2tzIChgXFxgYCksIGFuZCBlbnN1cmVzIG9uZSBtb3JlIHRpY2sgaXMgdXNlZCB0b1xuLy8gZW5jbG9zZSB0aGUgaW5saW5lIGNvZGU6XG4vL1xuLy8gYGBgYG1hcmtkb3duXG4vLyBgYGBmb28gYGBiYXJgYCBiYXpgYGBcbi8vIGBgYGBcbi8vXG4vLyBFdmVuIGtub3dzIGFib3V0IGluaXRhbCBhbmQgZmluYWwgdGlja3M6XG4vL1xuLy8gYGBtYXJrZG93blxuLy8gYGAgYGZvbyBgYFxuLy8gYGAgZm9vYCBgYFxuLy8gYGBgXG5mdW5jdGlvbiBpbmxpbmVDb2RlKG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuICB2YXIgdGlja3MgPSByZXBlYXQoZ3JhdmVBY2NlbnRDaGFyLCBzdHJlYWsodmFsdWUsIGdyYXZlQWNjZW50Q2hhcikgKyAxKVxuICB2YXIgc3RhcnQgPSB0aWNrc1xuICB2YXIgZW5kID0gdGlja3NcbiAgdmFyIGhlYWQgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIHZhciB0YWlsID0gdmFsdWUuY2hhckNvZGVBdCh2YWx1ZS5sZW5ndGggLSAxKVxuICB2YXIgd3JhcCA9IGZhbHNlXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKGhlYWQgPT09IGdyYXZlQWNjZW50IHx8IHRhaWwgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgd3JhcCA9IHRydWVcbiAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAyICYmIHdzKGhlYWQpICYmIHdzKHRhaWwpKSB7XG4gICAgaW5kZXggPSAxXG4gICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoIC0gMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmICghd3ModmFsdWUuY2hhckNvZGVBdChpbmRleCkpKSB7XG4gICAgICAgIHdyYXAgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHdyYXApIHtcbiAgICBzdGFydCArPSAnICdcbiAgICBlbmQgPSAnICcgKyBlbmRcbiAgfVxuXG4gIHJldHVybiBzdGFydCArIHZhbHVlICsgZW5kXG59XG5cbmZ1bmN0aW9uIHdzKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IGxpbmVGZWVkIHx8IGNvZGUgPT09IHNwYWNlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvcHkgPSByZXF1aXJlKCcuLi91dGlsL2NvcHktaWRlbnRpZmllci1lbmNvZGluZycpXG52YXIgbGFiZWwgPSByZXF1aXJlKCcuLi91dGlsL2xhYmVsJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rUmVmZXJlbmNlXG5cbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xuXG52YXIgc2hvcnRjdXQgPSAnc2hvcnRjdXQnXG52YXIgY29sbGFwc2VkID0gJ2NvbGxhcHNlZCdcblxuZnVuY3Rpb24gbGlua1JlZmVyZW5jZShub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuICB2YXIgZXhpdCA9IHNlbGYuZW50ZXJMaW5rUmVmZXJlbmNlKHNlbGYsIG5vZGUpXG4gIHZhciB2YWx1ZSA9IHNlbGYuYWxsKG5vZGUpLmpvaW4oJycpXG5cbiAgZXhpdCgpXG5cbiAgaWYgKHR5cGUgPT09IHNob3J0Y3V0IHx8IHR5cGUgPT09IGNvbGxhcHNlZCkge1xuICAgIHZhbHVlID0gY29weSh2YWx1ZSwgbm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpXG4gIH1cblxuICByZXR1cm4gbGVmdFNxdWFyZUJyYWNrZXQgKyB2YWx1ZSArIHJpZ2h0U3F1YXJlQnJhY2tldCArIGxhYmVsKG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVyaSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS11cmknKVxudmFyIHRpdGxlID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXRpdGxlJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xuXG4vLyBFeHByZXNzaW9uIGZvciBhIHByb3RvY29sOlxuLy8gU2VlIDxodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX1Jlc291cmNlX0lkZW50aWZpZXIjR2VuZXJpY19zeW50YXg+LlxudmFyIHByb3RvY29sID0gL15bYS16XVthLXorLi1dKzpcXC8/L2lcblxuLy8gU3RyaW5naWZ5IGEgbGluay5cbi8vXG4vLyBXaGVuIG5vIHRpdGxlIGV4aXN0cywgdGhlIGNvbXBpbGVkIGBjaGlsZHJlbmAgZXF1YWwgYHVybGAsIGFuZCBgdXJsYCBzdGFydHNcbi8vIHdpdGggYSBwcm90b2NvbCwgYW4gYXV0byBsaW5rIGlzIGNyZWF0ZWQ6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIDxodHRwOi8vZXhhbXBsZS5jb20+XG4vLyBgYGBcbi8vXG4vLyBPdGhlcndpc2UsIGlzIHNtYXJ0IGFib3V0IGVuY2xvc2luZyBgdXJsYCAoc2VlIGBlbmNsb3NlVVJJKClgKSBhbmQgYHRpdGxlYFxuLy8gKHNlZSBgZW5jbG9zZVRpdGxlKClgKS5cbi8vIGBgYFxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbZm9vXSg8Zm9vIGF0IGJhciBkb3QgY29tPiAnQW4gXCJleGFtcGxlXCIgZS1tYWlsJylcbi8vIGBgYFxuLy9cbi8vIFN1cHBvcnRzIG5hbWVkIGVudGl0aWVzIGluIHRoZSBgdXJsYCBhbmQgYHRpdGxlYCB3aGVuIGluIGBzZXR0aW5ncy5lbmNvZGVgXG4vLyBtb2RlLlxuZnVuY3Rpb24gbGluayhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29udGVudCA9IHNlbGYuZW5jb2RlKG5vZGUudXJsIHx8ICcnLCBub2RlKVxuICB2YXIgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgdmFyIGVzY2FwZWQgPSBzZWxmLmVuY29kZShzZWxmLmVzY2FwZShub2RlLnVybCB8fCAnJywgbm9kZSkpXG4gIHZhciB2YWx1ZSA9IHNlbGYuYWxsKG5vZGUpLmpvaW4oJycpXG5cbiAgZXhpdCgpXG5cbiAgaWYgKG5vZGUudGl0bGUgPT0gbnVsbCAmJiBwcm90b2NvbC50ZXN0KGNvbnRlbnQpICYmIGVzY2FwZWQgPT09IHZhbHVlKSB7XG4gICAgLy8gQmFja3NsYXNoIGVzY2FwZXMgZG8gbm90IHdvcmsgaW4gYXV0b2xpbmtzLCBzbyB3ZSBkbyBub3QgZXNjYXBlLlxuICAgIHJldHVybiB1cmkoc2VsZi5lbmNvZGUobm9kZS51cmwpLCB0cnVlKVxuICB9XG5cbiAgY29udGVudCA9IHVyaShjb250ZW50KVxuXG4gIGlmIChub2RlLnRpdGxlKSB7XG4gICAgY29udGVudCArPSBzcGFjZSArIHRpdGxlKHNlbGYuZW5jb2RlKHNlbGYuZXNjYXBlKG5vZGUudGl0bGUsIG5vZGUpLCBub2RlKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgIHZhbHVlICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGxlZnRQYXJlbnRoZXNpcyArXG4gICAgY29udGVudCArXG4gICAgcmlnaHRQYXJlbnRoZXNpc1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIHBhZCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFkJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0SXRlbVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBsb3dlcmNhc2VYID0gJ3gnXG5cbnZhciBjZWlsID0gTWF0aC5jZWlsXG52YXIgYmxhbmsgPSBsaW5lRmVlZCArIGxpbmVGZWVkXG5cbnZhciB0YWJTaXplID0gNFxuXG4vLyBTdHJpbmdpZnkgYSBsaXN0IGl0ZW0uXG4vL1xuLy8gUHJlZml4ZXMgdGhlIGNvbnRlbnQgd2l0aCBhIGNoZWNrZWQgY2hlY2tib3ggd2hlbiBgY2hlY2tlZDogdHJ1ZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFt4XSBmb29cbi8vIGBgYFxuLy9cbi8vIFByZWZpeGVzIHRoZSBjb250ZW50IHdpdGggYW4gdW5jaGVja2VkIGNoZWNrYm94IHdoZW4gYGNoZWNrZWQ6IGZhbHNlYDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gWyBdIGZvb1xuLy8gYGBgXG5mdW5jdGlvbiBsaXN0SXRlbShub2RlLCBwYXJlbnQsIHBvc2l0aW9uLCBidWxsZXQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdHlsZSA9IHNlbGYub3B0aW9ucy5saXN0SXRlbUluZGVudFxuICB2YXIgbWFya2VyID0gYnVsbGV0IHx8IHNlbGYub3B0aW9ucy5idWxsZXRcbiAgdmFyIHNwcmVhZCA9IG5vZGUuc3ByZWFkID09IG51bGwgPyB0cnVlIDogbm9kZS5zcHJlYWRcbiAgdmFyIGNoZWNrZWQgPSBub2RlLmNoZWNrZWRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdmFsdWVcbiAgdmFyIGluZGVudFxuICB2YXIgc3BhY2luZ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWVzW2luZGV4XSA9IHNlbGYudmlzaXQoY2hpbGRyZW5baW5kZXhdLCBub2RlKVxuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZXMuam9pbihzcHJlYWQgPyBibGFuayA6IGxpbmVGZWVkKVxuXG4gIGlmICh0eXBlb2YgY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gTm90ZTogSeKAmWQgbGlrZSB0byBiZSBhYmxlIHRvIG9ubHkgYWRkIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjaGVjayBhbmRcbiAgICAvLyB0aGUgdmFsdWUsIGJ1dCB1bmZvcnR1bmF0ZWx5IGdpdGh1YiBkb2VzIG5vdCBzdXBwb3J0IGVtcHR5IGxpc3QtaXRlbXNcbiAgICAvLyB3aXRoIGEgY2hlY2tib3ggOihcbiAgICB2YWx1ZSA9XG4gICAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgICAoY2hlY2tlZCA/IGxvd2VyY2FzZVggOiBzcGFjZSkgK1xuICAgICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICAgIHNwYWNlICtcbiAgICAgIHZhbHVlXG4gIH1cblxuICBpZiAoc3R5bGUgPT09ICcxJyB8fCAoc3R5bGUgPT09ICdtaXhlZCcgJiYgdmFsdWUuaW5kZXhPZihsaW5lRmVlZCkgPT09IC0xKSkge1xuICAgIGluZGVudCA9IG1hcmtlci5sZW5ndGggKyAxXG4gICAgc3BhY2luZyA9IHNwYWNlXG4gIH0gZWxzZSB7XG4gICAgaW5kZW50ID0gY2VpbCgobWFya2VyLmxlbmd0aCArIDEpIC8gdGFiU2l6ZSkgKiB0YWJTaXplXG4gICAgc3BhY2luZyA9IHJlcGVhdChzcGFjZSwgaW5kZW50IC0gbWFya2VyLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxuICAgID8gbWFya2VyICsgc3BhY2luZyArIHBhZCh2YWx1ZSwgaW5kZW50IC8gdGFiU2l6ZSkuc2xpY2UoaW5kZW50KVxuICAgIDogbWFya2VyXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0XG5cbmZ1bmN0aW9uIGxpc3Qobm9kZSkge1xuICB2YXIgZm4gPSBub2RlLm9yZGVyZWQgPyB0aGlzLnZpc2l0T3JkZXJlZEl0ZW1zIDogdGhpcy52aXNpdFVub3JkZXJlZEl0ZW1zXG4gIHJldHVybiBmbi5jYWxsKHRoaXMsIG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxuZnVuY3Rpb24gcGFyYWdyYXBoKG5vZGUpIHtcbiAgcmV0dXJuIHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByb290XG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG5cbi8vIFN0cmluZ2lmeSBhIHJvb3QuXG4vLyBBZGRzIGEgZmluYWwgbmV3bGluZSB0byBlbnN1cmUgdmFsaWQgUE9TSVggZmlsZXMuICovXG5mdW5jdGlvbiByb290KG5vZGUpIHtcbiAgdmFyIGRvYyA9IHRoaXMuYmxvY2sobm9kZSlcblxuICBpZiAoZG9jLmNoYXJBdChkb2MubGVuZ3RoIC0gMSkgIT09IGxpbmVGZWVkKSB7XG4gICAgZG9jICs9IGxpbmVGZWVkXG4gIH1cblxuICByZXR1cm4gZG9jXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuXG4vLyBTdHJpbmdpZnkgYSBgc3Ryb25nYC5cbi8vXG4vLyBUaGUgbWFya2VyIHVzZWQgaXMgY29uZmlndXJhYmxlIGJ5IGBzdHJvbmdgLCB3aGljaCBkZWZhdWx0cyB0byBhbiBhc3Rlcmlza1xuLy8gKGAnKidgKSBidXQgYWxzbyBhY2NlcHRzIGFuIHVuZGVyc2NvcmUgKGAnXydgKTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gX19mb29fX1xuLy8gYGBgXG5mdW5jdGlvbiBzdHJvbmcobm9kZSkge1xuICB2YXIgbWFya2VyID0gcmVwZWF0KHRoaXMub3B0aW9ucy5zdHJvbmcsIDIpXG4gIHJldHVybiBtYXJrZXIgKyB0aGlzLmFsbChub2RlKS5qb2luKCcnKSArIG1hcmtlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVDZWxsXG5cbnZhciBsaW5lRmVlZCA9IC9cXHI/XFxuL2dcblxuZnVuY3Rpb24gdGFibGVDZWxsKG5vZGUpIHtcbiAgcmV0dXJuIHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpLnJlcGxhY2UobGluZUZlZWQsICcgJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25UYWJsZSA9IHJlcXVpcmUoJ21hcmtkb3duLXRhYmxlJylcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZVxuXG4vLyBTdHJpbmdpZnkgdGFibGUuXG4vL1xuLy8gQ3JlYXRlcyBhIGZlbmNlZCB0YWJsZS5cbi8vIFRoZSB0YWJsZSBoYXMgYWxpZ25lZCBkZWxpbWl0ZXJzIGJ5IGRlZmF1bHQsIGJ1dCBub3QgaW5cbi8vIGB0YWJsZVBpcGVBbGlnbjogZmFsc2VgOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyB8IEhlYWRlciAxIHwgSGVhZGVyIDIgfFxuLy8gfCA6LTogfCAtIHxcbi8vIHwgQWxwaGEgfCBCcmF2byB8XG4vLyBgYGBcbi8vXG4vLyBUaGUgdGFibGUgaXMgc3BhY2VkIGJ5IGRlZmF1bHQsIGJ1dCBub3QgaW4gYHRhYmxlQ2VsbFBhZGRpbmc6IGZhbHNlYDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gfEZvb3xCYXJ8XG4vLyB8Oi06fC0tLXxcbi8vIHxCYXp8UXV4fFxuLy8gYGBgXG5mdW5jdGlvbiB0YWJsZShub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb3B0aW9ucyA9IHNlbGYub3B0aW9uc1xuICB2YXIgcGFkZGluZyA9IG9wdGlvbnMudGFibGVDZWxsUGFkZGluZ1xuICB2YXIgYWxpZ25EZWxpbWl0ZXJzID0gb3B0aW9ucy50YWJsZVBpcGVBbGlnblxuICB2YXIgc3RyaW5nTGVuZ3RoID0gb3B0aW9ucy5zdHJpbmdMZW5ndGhcbiAgdmFyIHJvd3MgPSBub2RlLmNoaWxkcmVuXG4gIHZhciBpbmRleCA9IHJvd3MubGVuZ3RoXG4gIHZhciBleGl0ID0gc2VsZi5lbnRlclRhYmxlKClcbiAgdmFyIHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gc2VsZi5hbGwocm93c1tpbmRleF0pXG4gIH1cblxuICBleGl0KClcblxuICByZXR1cm4gbWFya2Rvd25UYWJsZShyZXN1bHQsIHtcbiAgICBhbGlnbjogbm9kZS5hbGlnbixcbiAgICBhbGlnbkRlbGltaXRlcnM6IGFsaWduRGVsaW1pdGVycyxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIHN0cmluZ0xlbmd0aDogc3RyaW5nTGVuZ3RoXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbi8vIFN0cmluZ2lmeSB0ZXh0LlxuLy8gU3VwcG9ydHMgbmFtZWQgZW50aXRpZXMgaW4gYHNldHRpbmdzLmVuY29kZTogdHJ1ZWAgbW9kZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gQVQmYW1wO1Rcbi8vIGBgYFxuLy9cbi8vIFN1cHBvcnRzIG51bWJlcmVkIGVudGl0aWVzIGluIGBzZXR0aW5ncy5lbmNvZGU6IG51bWJlcnNgIG1vZGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEFUJiN4MjY7VFxuLy8gYGBgXG5mdW5jdGlvbiB0ZXh0KG5vZGUsIHBhcmVudCkge1xuICByZXR1cm4gdGhpcy5lbmNvZGUodGhpcy5lc2NhcGUobm9kZS52YWx1ZSwgbm9kZSwgcGFyZW50KSwgbm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNcblxudmFyIHNwYWNlID0gJyAnXG5cbi8vIFN0cmluZ2lmeSBhIGB0aGVtYXRpYy1icmVha2AuXG4vLyBUaGUgY2hhcmFjdGVyIHVzZWQgaXMgY29uZmlndXJhYmxlIHRocm91Z2ggYHJ1bGVgOiAoYCdfJ2ApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIFRoZSBudW1iZXIgb2YgcmVwaXRpdGlvbnMgaXMgZGVmaW5lZCB0aHJvdWdoIGBydWxlUmVwZXRpdGlvbmAgKGA2YCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICoqKioqKlxuLy8gYGBgXG4vL1xuLy8gV2hldGhlciBzcGFjZXMgZGVsaW1pdCBlYWNoIGNoYXJhY3RlciwgaXMgY29uZmlndXJlZCB0aHJvdWdoIGBydWxlU3BhY2VzYFxuLy8gKGB0cnVlYCk6XG4vLyBgYGBtYXJrZG93blxuLy8gKiAqICpcbi8vIGBgYFxuZnVuY3Rpb24gdGhlbWF0aWMoKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gIHZhciBydWxlID0gcmVwZWF0KG9wdGlvbnMucnVsZSwgb3B0aW9ucy5ydWxlUmVwZXRpdGlvbilcbiAgcmV0dXJuIG9wdGlvbnMucnVsZVNwYWNlcyA/IHJ1bGUuc3BsaXQoJycpLmpvaW4oc3BhY2UpIDogcnVsZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmlmaWVkID0gcmVxdWlyZSgndW5pZmllZCcpXG52YXIgcGFyc2UgPSByZXF1aXJlKCdyZW1hcmstcGFyc2UnKVxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJ3JlbWFyay1zdHJpbmdpZnknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWZpZWQoKS51c2UocGFyc2UpLnVzZShzdHJpbmdpZnkpLmZyZWV6ZSgpXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVuaGVyaXQgPSByZXF1aXJlKCd1bmhlcml0JylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuL2xpYi9wYXJzZXIuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5wYXJzZS5QYXJzZXIgPSBQYXJzZXJcblxuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSB0aGlzLmRhdGEoJ3NldHRpbmdzJylcbiAgdmFyIExvY2FsID0gdW5oZXJpdChQYXJzZXIpXG5cbiAgTG9jYWwucHJvdG90eXBlLm9wdGlvbnMgPSB4dGVuZChMb2NhbC5wcm90b3R5cGUub3B0aW9ucywgc2V0dGluZ3MsIG9wdGlvbnMpXG5cbiAgdGhpcy5QYXJzZXIgPSBMb2NhbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbWV0YScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAnc291cmNlJyxcbiAgJ3RpdGxlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gRmFjdG9yeSB0byBjcmVhdGUgYW4gZW50aXR5IGRlY29kZXIuXG5mdW5jdGlvbiBmYWN0b3J5KGN0eCkge1xuICBkZWNvZGVyLnJhdyA9IGRlY29kZVJhd1xuXG4gIHJldHVybiBkZWNvZGVyXG5cbiAgLy8gTm9ybWFsaXplIGBwb3NpdGlvbmAgdG8gYWRkIGFuIGBpbmRlbnRgLlxuICBmdW5jdGlvbiBub3JtYWxpemUocG9zaXRpb24pIHtcbiAgICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcbiAgICB2YXIgcmVzdWx0ID0gW11cblxuICAgIHdoaWxlICgrK2xpbmUpIHtcbiAgICAgIGlmICghKGxpbmUgaW4gb2Zmc2V0cykpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goKG9mZnNldHNbbGluZV0gfHwgMCkgKyAxKVxuICAgIH1cblxuICAgIHJldHVybiB7c3RhcnQ6IHBvc2l0aW9uLCBpbmRlbnQ6IHJlc3VsdH1cbiAgfVxuXG4gIC8vIERlY29kZSBgdmFsdWVgIChhdCBgcG9zaXRpb25gKSBpbnRvIHRleHQtbm9kZXMuXG4gIGZ1bmN0aW9uIGRlY29kZXIodmFsdWUsIHBvc2l0aW9uLCBoYW5kbGVyKSB7XG4gICAgZW50aXRpZXModmFsdWUsIHtcbiAgICAgIHBvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLFxuICAgICAgd2FybmluZzogaGFuZGxlV2FybmluZyxcbiAgICAgIHRleHQ6IGhhbmRsZXIsXG4gICAgICByZWZlcmVuY2U6IGhhbmRsZXIsXG4gICAgICB0ZXh0Q29udGV4dDogY3R4LFxuICAgICAgcmVmZXJlbmNlQ29udGV4dDogY3R4XG4gICAgfSlcbiAgfVxuXG4gIC8vIERlY29kZSBgdmFsdWVgIChhdCBgcG9zaXRpb25gKSBpbnRvIGEgc3RyaW5nLlxuICBmdW5jdGlvbiBkZWNvZGVSYXcodmFsdWUsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzKFxuICAgICAgdmFsdWUsXG4gICAgICB4dGVuZChvcHRpb25zLCB7cG9zaXRpb246IG5vcm1hbGl6ZShwb3NpdGlvbiksIHdhcm5pbmc6IGhhbmRsZVdhcm5pbmd9KVxuICAgIClcbiAgfVxuXG4gIC8vIEhhbmRsZSBhIHdhcm5pbmcuXG4gIC8vIFNlZSA8aHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9wYXJzZS1lbnRpdGllcz4gZm9yIHRoZSB3YXJuaW5ncy5cbiAgZnVuY3Rpb24gaGFuZGxlV2FybmluZyhyZWFzb24sIHBvc2l0aW9uLCBjb2RlKSB7XG4gICAgaWYgKGNvZGUgIT09IDMpIHtcbiAgICAgIGN0eC5maWxlLm1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbilcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIGdmbTogdHJ1ZSxcbiAgY29tbW9ubWFyazogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgYmxvY2tzOiByZXF1aXJlKCcuL2Jsb2NrLWVsZW1lbnRzJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCdcXG4nLCBmcm9tSW5kZXgpXG5cbiAgd2hpbGUgKGluZGV4ID4gZnJvbUluZGV4KSB7XG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCAtIDEpICE9PSAnICcpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgcmV0dXJuIGluZGV4XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ2AnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ35+JywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcblxudmFyIHBsdXNTaWduID0gNDMgLy8gJysnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vI2V4dGVuZGVkLWVtYWlsLWF1dG9saW5rPlxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBhdFxuICB2YXIgcG9zaXRpb25cblxuICBpZiAoIXRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGF0ID0gdmFsdWUuaW5kZXhPZignQCcsIGZyb21JbmRleClcblxuICBpZiAoYXQgPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBwb3NpdGlvbiA9IGF0XG5cbiAgaWYgKHBvc2l0aW9uID09PSBmcm9tSW5kZXggfHwgIWlzR2ZtQXRleHQodmFsdWUuY2hhckNvZGVBdChwb3NpdGlvbiAtIDEpKSkge1xuICAgIHJldHVybiBsb2NhdGUuY2FsbChzZWxmLCB2YWx1ZSwgYXQgKyAxKVxuICB9XG5cbiAgd2hpbGUgKHBvc2l0aW9uID4gZnJvbUluZGV4ICYmIGlzR2ZtQXRleHQodmFsdWUuY2hhckNvZGVBdChwb3NpdGlvbiAtIDEpKSkge1xuICAgIHBvc2l0aW9uLS1cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvblxufVxuXG5mdW5jdGlvbiBpc0dmbUF0ZXh0KGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gcGx1c1NpZ24gfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gZG90IHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKicsIGZyb21JbmRleClcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfJywgZnJvbUluZGV4KVxuXG4gIGlmICh1bmRlcnNjb3JlID09PSAtMSkge1xuICAgIHJldHVybiBhc3Rlcmlza1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlXG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ1xcXFwnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxpbmsgPSB2YWx1ZS5pbmRleE9mKCdbJywgZnJvbUluZGV4KVxuICB2YXIgaW1hZ2UgPSB2YWx1ZS5pbmRleE9mKCchWycsIGZyb21JbmRleClcblxuICBpZiAoaW1hZ2UgPT09IC0xKSB7XG4gICAgcmV0dXJuIGxpbmtcbiAgfVxuXG4gIC8vIExpbmsgY2FuIG5ldmVyIGJlIGAtMWAgaWYgYW4gaW1hZ2UgaXMgZm91bmQsIHNvIHdlIGRvbuKAmXQgbmVlZCB0byBjaGVja1xuICAvLyBmb3IgdGhhdCA6KVxuICByZXR1cm4gbGluayA8IGltYWdlID8gbGluayA6IGltYWdlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKionLCBmcm9tSW5kZXgpXG4gIHZhciB1bmRlcnNjb3JlID0gdmFsdWUuaW5kZXhPZignX18nLCBmcm9tSW5kZXgpXG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrXG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmVcbiAgfVxuXG4gIHJldHVybiB1bmRlcnNjb3JlIDwgYXN0ZXJpc2sgPyB1bmRlcnNjb3JlIDogYXN0ZXJpc2tcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignPCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG52YXIgdmFsdWVzID0gWyd3d3cuJywgJ2h0dHA6Ly8nLCAnaHR0cHM6Ly8nXVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgbWluID0gLTFcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHBvc2l0aW9uXG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIG1pblxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHZhbHVlLmluZGV4T2YodmFsdWVzW2luZGV4XSwgZnJvbUluZGV4KVxuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAtMSAmJiAobWluID09PSAtMSB8fCBwb3NpdGlvbiA8IG1pbikpIHtcbiAgICAgIG1pbiA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pblxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciByZW1vdmVQb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcmVtb3ZlLXBvc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGxpbmVCcmVha3NFeHByZXNzaW9uID0gL1xcclxcbnxcXHIvZ1xuXG4vLyBQYXJzZSB0aGUgYm91bmQgZmlsZS5cbmZ1bmN0aW9uIHBhcnNlKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHZhbHVlID0gU3RyaW5nKHNlbGYuZmlsZSlcbiAgdmFyIHN0YXJ0ID0ge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICB2YXIgY29udGVudCA9IHh0ZW5kKHN0YXJ0KVxuICB2YXIgbm9kZVxuXG4gIC8vIENsZWFuIG5vbi11bml4IG5ld2xpbmVzOiBgXFxyXFxuYCBhbmQgYFxccmAgYXJlIGFsbCBjaGFuZ2VkIHRvIGBcXG5gLlxuICAvLyBUaGlzIHNob3VsZCBub3QgYWZmZWN0IHBvc2l0aW9uYWwgaW5mb3JtYXRpb24uXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShsaW5lQnJlYWtzRXhwcmVzc2lvbiwgbGluZUZlZWQpXG5cbiAgLy8gQk9NLlxuICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKVxuXG4gICAgY29udGVudC5jb2x1bW4rK1xuICAgIGNvbnRlbnQub2Zmc2V0KytcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogJ3Jvb3QnLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplQmxvY2sodmFsdWUsIGNvbnRlbnQpLFxuICAgIHBvc2l0aW9uOiB7c3RhcnQ6IHN0YXJ0LCBlbmQ6IHNlbGYuZW9mIHx8IHh0ZW5kKHN0YXJ0KX1cbiAgfVxuXG4gIGlmICghc2VsZi5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgcmVtb3ZlUG9zaXRpb24obm9kZSwgdHJ1ZSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRvZ2dsZSA9IHJlcXVpcmUoJ3N0YXRlLXRvZ2dsZScpXG52YXIgdmZpbGVMb2NhdGlvbiA9IHJlcXVpcmUoJ3ZmaWxlLWxvY2F0aW9uJylcbnZhciB1bmVzY2FwZSA9IHJlcXVpcmUoJy4vdW5lc2NhcGUnKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJylcbnZhciB0b2tlbml6ZXIgPSByZXF1aXJlKCcuL3Rva2VuaXplcicpXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyXG5cbmZ1bmN0aW9uIFBhcnNlcihkb2MsIGZpbGUpIHtcbiAgdGhpcy5maWxlID0gZmlsZVxuICB0aGlzLm9mZnNldCA9IHt9XG4gIHRoaXMub3B0aW9ucyA9IHh0ZW5kKHRoaXMub3B0aW9ucylcbiAgdGhpcy5zZXRPcHRpb25zKHt9KVxuXG4gIHRoaXMuaW5MaXN0ID0gZmFsc2VcbiAgdGhpcy5pbkJsb2NrID0gZmFsc2VcbiAgdGhpcy5pbkxpbmsgPSBmYWxzZVxuICB0aGlzLmF0U3RhcnQgPSB0cnVlXG5cbiAgdGhpcy50b09mZnNldCA9IHZmaWxlTG9jYXRpb24oZmlsZSkudG9PZmZzZXRcbiAgdGhpcy51bmVzY2FwZSA9IHVuZXNjYXBlKHRoaXMsICdlc2NhcGUnKVxuICB0aGlzLmRlY29kZSA9IGRlY29kZSh0aGlzKVxufVxuXG52YXIgcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlXG5cbi8vIEV4cG9zZSBjb3JlLlxucHJvdG8uc2V0T3B0aW9ucyA9IHJlcXVpcmUoJy4vc2V0LW9wdGlvbnMnKVxucHJvdG8ucGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLy8gRXhwb3NlIGBkZWZhdWx0c2AuXG5wcm90by5vcHRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG5cbi8vIEVudGVyIGFuZCBleGl0IGhlbHBlcnMuXG5wcm90by5leGl0U3RhcnQgPSB0b2dnbGUoJ2F0U3RhcnQnLCB0cnVlKVxucHJvdG8uZW50ZXJMaXN0ID0gdG9nZ2xlKCdpbkxpc3QnLCBmYWxzZSlcbnByb3RvLmVudGVyTGluayA9IHRvZ2dsZSgnaW5MaW5rJywgZmFsc2UpXG5wcm90by5lbnRlckJsb2NrID0gdG9nZ2xlKCdpbkJsb2NrJywgZmFsc2UpXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgcGFyYWdyYXBoOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBBIHBhcmFncmFwaCwgZm9sbG93ZWQgYnkgYSB0aGVtYXRpYyBicmVhay5cbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIHBhcmFncmFwaC5cbnByb3RvLmludGVycnVwdFBhcmFncmFwaCA9IFtcbiAgWyd0aGVtYXRpY0JyZWFrJ10sXG4gIFsnYXR4SGVhZGluZyddLFxuICBbJ2ZlbmNlZENvZGUnXSxcbiAgWydibG9ja3F1b3RlJ10sXG4gIFsnaHRtbCddLFxuICBbJ3NldGV4dEhlYWRpbmcnLCB7Y29tbW9ubWFyazogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBsaXN0OlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAtIE9uZVxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgbGlzdC5cbnByb3RvLmludGVycnVwdExpc3QgPSBbXG4gIFsnYXR4SGVhZGluZycsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWydmZW5jZWRDb2RlJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ3RoZW1hdGljQnJlYWsnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgYmxvY2txdW90ZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gPiBBIHBhcmFncmFwaC5cbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIGJsb2NrcXVvdGUuXG5wcm90by5pbnRlcnJ1cHRCbG9ja3F1b3RlID0gW1xuICBbJ2luZGVudGVkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnYXR4SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnc2V0ZXh0SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnaHRtbCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnbGlzdCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIEhhbmRsZXJzLlxucHJvdG8uYmxvY2tUb2tlbml6ZXJzID0ge1xuICBibGFua0xpbmU6IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxhbmstbGluZScpLFxuICBpbmRlbnRlZENvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmRlbnRlZCcpLFxuICBmZW5jZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtZmVuY2VkJyksXG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxvY2txdW90ZScpLFxuICBhdHhIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctYXR4JyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsnKSxcbiAgbGlzdDogcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0JyksXG4gIHNldGV4dEhlYWRpbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvaGVhZGluZy1zZXRleHQnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWJsb2NrJyksXG4gIGRlZmluaXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVmaW5pdGlvbicpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90b2tlbml6ZS90YWJsZScpLFxuICBwYXJhZ3JhcGg6IHJlcXVpcmUoJy4vdG9rZW5pemUvcGFyYWdyYXBoJylcbn1cblxucHJvdG8uaW5saW5lVG9rZW5pemVycyA9IHtcbiAgZXNjYXBlOiByZXF1aXJlKCcuL3Rva2VuaXplL2VzY2FwZScpLFxuICBhdXRvTGluazogcmVxdWlyZSgnLi90b2tlbml6ZS9hdXRvLWxpbmsnKSxcbiAgdXJsOiByZXF1aXJlKCcuL3Rva2VuaXplL3VybCcpLFxuICBlbWFpbDogcmVxdWlyZSgnLi90b2tlbml6ZS9lbWFpbCcpLFxuICBodG1sOiByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtaW5saW5lJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGluaycpLFxuICByZWZlcmVuY2U6IHJlcXVpcmUoJy4vdG9rZW5pemUvcmVmZXJlbmNlJyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi90b2tlbml6ZS9zdHJvbmcnKSxcbiAgZW1waGFzaXM6IHJlcXVpcmUoJy4vdG9rZW5pemUvZW1waGFzaXMnKSxcbiAgZGVsZXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVsZXRlJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmxpbmUnKSxcbiAgYnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvYnJlYWsnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi90b2tlbml6ZS90ZXh0Jylcbn1cblxuLy8gRXhwb3NlIHByZWNlZGVuY2UuXG5wcm90by5ibG9ja01ldGhvZHMgPSBrZXlzKHByb3RvLmJsb2NrVG9rZW5pemVycylcbnByb3RvLmlubGluZU1ldGhvZHMgPSBrZXlzKHByb3RvLmlubGluZVRva2VuaXplcnMpXG5cbi8vIFRva2VuaXplcnMuXG5wcm90by50b2tlbml6ZUJsb2NrID0gdG9rZW5pemVyKCdibG9jaycpXG5wcm90by50b2tlbml6ZUlubGluZSA9IHRva2VuaXplcignaW5saW5lJylcbnByb3RvLnRva2VuaXplRmFjdG9yeSA9IHRva2VuaXplclxuXG4vLyBHZXQgYWxsIGtleXMgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBrZXlcblxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJlc3VsdC5wdXNoKGtleSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZXNjYXBlcyA9IHJlcXVpcmUoJ21hcmtkb3duLWVzY2FwZXMnKVxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0T3B0aW9uc1xuXG5mdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjdXJyZW50ID0gc2VsZi5vcHRpb25zXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBgJyArIG9wdGlvbnMgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9uc2AnKVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICB2YWx1ZSA9IG9wdGlvbnNba2V5XVxuXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudFtrZXldXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGtleSAhPT0gJ2Jsb2NrcycgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHx8XG4gICAgICAoa2V5ID09PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCB2YWx1ZSBgJyArIHZhbHVlICsgJ2AgZm9yIHNldHRpbmcgYG9wdGlvbnMuJyArIGtleSArICdgJ1xuICAgICAgKVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH1cblxuICBzZWxmLm9wdGlvbnMgPSBvcHRpb25zXG4gIHNlbGYuZXNjYXBlID0gZXNjYXBlcyhvcHRpb25zKVxuXG4gIHJldHVybiBzZWxmXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS90YWcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGF1dG9MaW5rXG5hdXRvTGluay5sb2NhdG9yID0gbG9jYXRlXG5hdXRvTGluay5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgYXRTaWduID0gJ0AnXG52YXIgc2xhc2ggPSAnLydcbnZhciBtYWlsdG8gPSAnbWFpbHRvOidcbnZhciBtYWlsdG9MZW5ndGggPSBtYWlsdG8ubGVuZ3RoXG5cbmZ1bmN0aW9uIGF1dG9MaW5rKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciBoYXNBdENoYXJhY3RlciA9IGZhbHNlXG4gIHZhciBsaW5rID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbm93XG4gIHZhciBjb250ZW50XG4gIHZhciB0b2tlbml6ZXJzXG4gIHZhciBleGl0XG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gbGVzc1RoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgPSBsZXNzVGhhblxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB8fFxuICAgICAgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbiB8fFxuICAgICAgY2hhcmFjdGVyID09PSBhdFNpZ24gfHxcbiAgICAgIChjaGFyYWN0ZXIgPT09ICc6JyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gc2xhc2gpXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxpbmsgKz0gcXVldWVcbiAgcXVldWUgPSAnJ1xuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgbGluayArPSBjaGFyYWN0ZXJcbiAgaW5kZXgrK1xuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGF0U2lnbikge1xuICAgIGhhc0F0Q2hhcmFjdGVyID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGlmIChjaGFyYWN0ZXIgIT09ICc6JyB8fCB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gc2xhc2gpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxpbmsgKz0gc2xhc2hcbiAgICBpbmRleCsrXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8IGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmICghcXVldWUgfHwgY2hhcmFjdGVyICE9PSBncmVhdGVyVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxpbmsgKz0gcXVldWVcbiAgY29udGVudCA9IGxpbmtcbiAgc3VidmFsdWUgKz0gbGluayArIGNoYXJhY3RlclxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbisrXG4gIG5vdy5vZmZzZXQrK1xuXG4gIGlmIChoYXNBdENoYXJhY3Rlcikge1xuICAgIGlmIChsaW5rLnNsaWNlKDAsIG1haWx0b0xlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gbWFpbHRvKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShtYWlsdG9MZW5ndGgpXG4gICAgICBub3cuY29sdW1uICs9IG1haWx0b0xlbmd0aFxuICAgICAgbm93Lm9mZnNldCArPSBtYWlsdG9MZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgbGluayA9IG1haWx0byArIGxpbmtcbiAgICB9XG4gIH1cblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gYXV0b2xpbmtzLlxuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICBjb250ZW50ID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuICBleGl0KClcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogZGVjb2RlKGxpbmssIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjb250ZW50XG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gQSBsaW5lIGNvbnRhaW5pbmcgbm8gY2hhcmFjdGVycywgb3IgYSBsaW5lIGNvbnRhaW5pbmcgb25seSBzcGFjZXMgKFUrMDAyMCkgb3Jcbi8vIHRhYnMgKFUrMDAwOSksIGlzIGNhbGxlZCBhIGJsYW5rIGxpbmUuXG4vLyBTZWUgPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNibGFuay1saW5lPi5cbnZhciByZUJsYW5rTGluZSA9IC9eWyBcXHRdKihcXG58JCkvXG5cbi8vIE5vdGUgdGhhdCB0aG91Z2ggYmxhbmsgbGluZXMgcGxheSBhIHNwZWNpYWwgcm9sZSBpbiBsaXN0cyB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgdGhlIGxpc3QgaXMgdGlnaHQgb3IgbG9vc2Vcbi8vICg8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2JsYW5rLWxpbmVzPiksIGl04oCZcyBkb25lIGJ5IHRoZSBsaXN0XG4vLyB0b2tlbml6ZXIgYW5kIHRoaXMgYmxhbmsgbGluZSB0b2tlbml6ZXIgZG9lcyBub3QgaGF2ZSB0byBiZSByZXNwb25zaWJsZSBmb3Jcbi8vIHRoYXQuXG4vLyBUaGVyZWZvcmUsIGNvbmZpZ3Mgc3VjaCBhcyBgYmxhbmtMaW5lLm5vdEluTGlzdGAgZG8gbm90IGhhdmUgdG8gYmUgc2V0IGhlcmUuXG5tb2R1bGUuZXhwb3J0cyA9IGJsYW5rTGluZVxuXG5mdW5jdGlvbiBibGFua0xpbmUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBtYXRjaFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBtYXRjaCA9IHJlQmxhbmtMaW5lLmV4ZWModmFsdWUuc2xpY2UoaW5kZXgpKVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgc3VidmFsdWUgKz0gbWF0Y2hbMF1cbiAgfVxuXG4gIGlmIChzdWJ2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBlYXQoc3VidmFsdWUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG5mdW5jdGlvbiBibG9ja3F1b3RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9mZnNldHMgPSBzZWxmLm9mZnNldFxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnJ1cHRvcnMgPSBzZWxmLmludGVycnVwdEJsb2NrcXVvdGVcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgY3VycmVudExpbmUgPSBub3cubGluZVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgY29udGVudHMgPSBbXVxuICB2YXIgaW5kZW50cyA9IFtdXG4gIHZhciBhZGRcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciByZXN0XG4gIHZhciBuZXh0SW5kZXhcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGxpbmVcbiAgdmFyIHN0YXJ0SW5kZXhcbiAgdmFyIHByZWZpeGVkXG4gIHZhciBleGl0XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGluZGV4ID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgIHByZWZpeGVkID0gZmFsc2VcblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0SW5kZXggPSBsZW5ndGhcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBncmVhdGVyVGhhbikge1xuICAgICAgaW5kZXgrK1xuICAgICAgcHJlZml4ZWQgPSB0cnVlXG5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgIH1cblxuICAgIGNvbnRlbnQgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaWYgKCFwcmVmaXhlZCAmJiAhdHJpbShjb250ZW50KSkge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmICghcHJlZml4ZWQpIHtcbiAgICAgIHJlc3QgPSB2YWx1ZS5zbGljZShpbmRleClcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGZvbGxvd2luZyBjb2RlIGNvbnRhaW5zIGEgcG9zc2libGUgYmxvY2suXG4gICAgICBpZiAoaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgcmVzdCwgdHJ1ZV0pKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gY29udGVudCA6IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleClcblxuICAgIGluZGVudHMucHVzaChpbmRleCAtIHN0YXJ0SW5kZXgpXG4gICAgdmFsdWVzLnB1c2gobGluZSlcbiAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpXG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDFcbiAgfVxuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gaW5kZW50cy5sZW5ndGhcbiAgYWRkID0gZWF0KHZhbHVlcy5qb2luKGxpbmVGZWVkKSlcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbY3VycmVudExpbmVdID0gKG9mZnNldHNbY3VycmVudExpbmVdIHx8IDApICsgaW5kZW50c1tpbmRleF1cbiAgICBjdXJyZW50TGluZSsrXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckJsb2NrKClcbiAgY29udGVudHMgPSBzZWxmLnRva2VuaXplQmxvY2soY29udGVudHMuam9pbihsaW5lRmVlZCksIG5vdylcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGFkZCh7dHlwZTogJ2Jsb2NrcXVvdGUnLCBjaGlsZHJlbjogY29udGVudHN9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvYnJlYWsnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVha1xuaGFyZEJyZWFrLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIG1pbkJyZWFrTGVuZ3RoID0gMlxuXG5mdW5jdGlvbiBoYXJkQnJlYWsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGlmIChpbmRleCA8IG1pbkJyZWFrTGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuXG4gICAgICByZXR1cm4gZWF0KHF1ZXVlKSh7dHlwZTogJ2JyZWFrJ30pXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmZW5jZWRDb2RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHRpbGRlID0gJ34nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxudmFyIG1pbkZlbmNlQ291bnQgPSAzXG52YXIgdGFiU2l6ZSA9IDRcblxuZnVuY3Rpb24gZmVuY2VkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGZlbmNlQ291bnRcbiAgdmFyIG1hcmtlclxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBmbGFnXG4gIHZhciBsYW5nXG4gIHZhciBtZXRhXG4gIHZhciBxdWV1ZVxuICB2YXIgY29udGVudFxuICB2YXIgZXhkZW50ZWRDb250ZW50XG4gIHZhciBjbG9zaW5nXG4gIHZhciBleGRlbnRlZENsb3NpbmdcbiAgdmFyIGluZGVudFxuICB2YXIgbm93XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGluZGVudCA9IGluZGV4XG5cbiAgLy8gRWF0IHRoZSBmZW5jZS5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IHRpbGRlICYmIGNoYXJhY3RlciAhPT0gZ3JhdmVBY2NlbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIGZlbmNlQ291bnQgPSAxXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBmZW5jZUNvdW50KytcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoZmVuY2VDb3VudCA8IG1pbkZlbmNlQ291bnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVhdCBzcGFjaW5nIGJlZm9yZSBmbGFnLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgZmxhZy5cbiAgZmxhZyA9ICcnXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkIHx8XG4gICAgICAobWFya2VyID09PSBncmF2ZUFjY2VudCAmJiBjaGFyYWN0ZXIgPT09IG1hcmtlcilcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcblxuICBzdWJ2YWx1ZSArPSBmbGFnXG4gIGZsYWcgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShmbGFnKSwgbm93KVxuXG4gIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gIH1cblxuICBxdWV1ZSA9ICcnXG4gIGNsb3NpbmcgPSAnJ1xuICBleGRlbnRlZENsb3NpbmcgPSAnJ1xuICBjb250ZW50ID0gJydcbiAgZXhkZW50ZWRDb250ZW50ID0gJydcbiAgdmFyIHNraXAgPSB0cnVlXG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBjb250ZW50ICs9IGNsb3NpbmdcbiAgICBleGRlbnRlZENvbnRlbnQgKz0gZXhkZW50ZWRDbG9zaW5nXG4gICAgY2xvc2luZyA9ICcnXG4gICAgZXhkZW50ZWRDbG9zaW5nID0gJydcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBUaGUgZmlyc3QgbGluZSBmZWVkIGlzIGlnbm9yZWQuIE90aGVycyBhcmVu4oCZdC5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICBza2lwID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNsb3NpbmcgKz0gcXVldWVcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWUuc2xpY2UoaW5kZW50KVxuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+PSB0YWJTaXplKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZVxuICAgIGV4ZGVudGVkQ2xvc2luZyArPSBxdWV1ZVxuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA8IGZlbmNlQ291bnQpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgY2xvc2luZ1xuXG4gIC8vIEdldCBsYW5nIGFuZCBtZXRhIGZyb20gdGhlIGZsYWcuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gZmxhZy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IGZsYWcuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIGlmICghbGFuZykge1xuICAgICAgICBsYW5nID0gZmxhZy5zbGljZSgwLCBpbmRleClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhbmcpIHtcbiAgICAgIG1ldGEgPSBmbGFnLnNsaWNlKGluZGV4KVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2NvZGUnLFxuICAgIGxhbmc6IGxhbmcgfHwgZmxhZyB8fCBudWxsLFxuICAgIG1ldGE6IG1ldGEgfHwgbnVsbCxcbiAgICB2YWx1ZTogZXhkZW50ZWRDb250ZW50XG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRlZENvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciB0YWJTaXplID0gNFxudmFyIGNvZGVJbmRlbnQgPSByZXBlYXQoc3BhY2UsIHRhYlNpemUpXG5cbmZ1bmN0aW9uIGluZGVudGVkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudCA9ICcnXG4gIHZhciBzdWJ2YWx1ZVF1ZXVlID0gJydcbiAgdmFyIGNvbnRlbnRRdWV1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGJsYW5rUXVldWVcbiAgdmFyIGluZGVudFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGluZGVudCkge1xuICAgICAgaW5kZW50ID0gZmFsc2VcblxuICAgICAgc3VidmFsdWUgKz0gc3VidmFsdWVRdWV1ZVxuICAgICAgY29udGVudCArPSBjb250ZW50UXVldWVcbiAgICAgIHN1YnZhbHVlUXVldWUgPSAnJ1xuICAgICAgY29udGVudFF1ZXVlID0gJydcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICBjb250ZW50UXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgICAgICBzdWJ2YWx1ZVF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBzcGFjZSAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGNoYXJhY3RlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMikgPT09IGNoYXJhY3RlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMykgPT09IGNoYXJhY3RlclxuICAgICkge1xuICAgICAgc3VidmFsdWVRdWV1ZSArPSBjb2RlSW5kZW50XG4gICAgICBpbmRleCArPSAzXG4gICAgICBpbmRlbnQgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgc3VidmFsdWVRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGVudCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgYmxhbmtRdWV1ZSA9ICcnXG5cbiAgICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIGJsYW5rUXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGJsYW5rUXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGNvbnRlbnRRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGVudCkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgbGFuZzogbnVsbCxcbiAgICAgIG1ldGE6IG51bGwsXG4gICAgICB2YWx1ZTogdHJpbShjb250ZW50KVxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2NvZGUtaW5saW5lJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5pbmxpbmVDb2RlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gMTAgLy8gICdcXG4nXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBncmF2ZUFjY2VudCA9IDk2IC8vICAnYCdcblxuZnVuY3Rpb24gaW5saW5lQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBvcGVuaW5nRmVuY2VFbmRcbiAgdmFyIGNsb3NpbmdGZW5jZVN0YXJ0XG4gIHZhciBjbG9zaW5nRmVuY2VFbmRcbiAgdmFyIGNvZGVcbiAgdmFyIG5leHRcbiAgdmFyIGZvdW5kXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpICE9PSBncmF2ZUFjY2VudCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IGxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgb3BlbmluZ0ZlbmNlRW5kID0gaW5kZXhcbiAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IG5leHRcbiAgICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICBpZiAoY29kZSA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIGlmIChjbG9zaW5nRmVuY2VTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0ID0gaW5kZXhcbiAgICAgIH1cblxuICAgICAgY2xvc2luZ0ZlbmNlRW5kID0gaW5kZXggKyAxXG5cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dCAhPT0gZ3JhdmVBY2NlbnQgJiZcbiAgICAgICAgY2xvc2luZ0ZlbmNlRW5kIC0gY2xvc2luZ0ZlbmNlU3RhcnQgPT09IG9wZW5pbmdGZW5jZUVuZFxuICAgICAgKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2xvc2luZ0ZlbmNlU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQgPSB1bmRlZmluZWRcbiAgICAgIGNsb3NpbmdGZW5jZUVuZCA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgYW5kIGZpbmFsIHNwYWNlIChvciBsaW5lIGZlZWQpLCBpZmYgdGhleSBleGlzdCBhbmQgdGhlcmVcbiAgLy8gYXJlIG5vbi1zcGFjZSBjaGFyYWN0ZXJzIGluIHRoZSBjb250ZW50LlxuICBpbmRleCA9IG9wZW5pbmdGZW5jZUVuZFxuICBsZW5ndGggPSBjbG9zaW5nRmVuY2VTdGFydFxuICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcbiAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQobGVuZ3RoIC0gMSlcbiAgZm91bmQgPSBmYWxzZVxuXG4gIGlmIChcbiAgICBsZW5ndGggLSBpbmRleCA+IDIgJiZcbiAgICAoY29kZSA9PT0gc3BhY2UgfHwgY29kZSA9PT0gbGluZUZlZWQpICYmXG4gICAgKG5leHQgPT09IHNwYWNlIHx8IG5leHQgPT09IGxpbmVGZWVkKVxuICApIHtcbiAgICBpbmRleCsrXG4gICAgbGVuZ3RoLS1cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjb2RlICE9PSBzcGFjZSAmJiBjb2RlICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChmb3VuZCA9PT0gdHJ1ZSkge1xuICAgICAgb3BlbmluZ0ZlbmNlRW5kKytcbiAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0LS1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWF0KHZhbHVlLnNsaWNlKDAsIGNsb3NpbmdGZW5jZUVuZCkpKHtcbiAgICB0eXBlOiAnaW5saW5lQ29kZScsXG4gICAgdmFsdWU6IHZhbHVlLnNsaWNlKG9wZW5pbmdGZW5jZUVuZCwgY2xvc2luZ0ZlbmNlU3RhcnQpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb25cblxudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxuZnVuY3Rpb24gZGVmaW5pdGlvbihlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBiZWZvcmVVUkxcbiAgdmFyIGJlZm9yZVRpdGxlXG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciB0ZXN0XG4gIHZhciBpZGVudGlmaWVyXG4gIHZhciB1cmxcbiAgdmFyIHRpdGxlXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBicmVha1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChcbiAgICAhcXVldWUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSByaWdodFNxdWFyZUJyYWNrZXQgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gY29sb25cbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZGVudGlmaWVyID0gcXVldWVcbiAgc3VidmFsdWUgKz0gcXVldWUgKyByaWdodFNxdWFyZUJyYWNrZXQgKyBjb2xvblxuICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHF1ZXVlID0gJydcbiAgYmVmb3JlVVJMID0gc3VidmFsdWVcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZXNzVGhhbikge1xuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyLmRlbGltaXRlcikge1xuICAgICAgc3VidmFsdWUgKz0gbGVzc1RoYW4gKyBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXggLT0gcXVldWUubGVuZ3RoICsgMVxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHVybCA9IHF1ZXVlXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdGVzdCA9IG51bGxcblxuICBpZiAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrKSB7XG4gICAgdGVzdCA9IHF1b3RhdGlvbk1hcmtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUpIHtcbiAgICB0ZXN0ID0gYXBvc3Ryb3BoZVxuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgdGVzdCA9IHJpZ2h0UGFyZW50aGVzaXNcbiAgfVxuXG4gIGlmICghdGVzdCkge1xuICAgIHF1ZXVlID0gJydcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICB9IGVsc2UgaWYgKHF1ZXVlKSB7XG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0ZXN0KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkIHx8IGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gbGluZUZlZWRcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGVzdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYmVmb3JlVGl0bGUgPSBzdWJ2YWx1ZVxuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICAgIHRpdGxlID0gcXVldWVcbiAgICBxdWV1ZSA9ICcnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgYmVmb3JlVVJMID0gZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZFxuICAgIHVybCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHVybCksIGJlZm9yZVVSTCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSlcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmRcbiAgICAgIHRpdGxlID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodGl0bGUpLCBiZWZvcmVUaXRsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgICB0eXBlOiAnZGVmaW5pdGlvbicsXG4gICAgICBpZGVudGlmaWVyOiBub3JtYWxpemUoaWRlbnRpZmllciksXG4gICAgICBsYWJlbDogaWRlbnRpZmllcixcbiAgICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGNhbiBiZSBpbnNpZGUgYW4gZW5jbG9zZWQgVVJJLlxuZnVuY3Rpb24gaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIChcbiAgICBjaGFyYWN0ZXIgIT09IGdyZWF0ZXJUaGFuICYmXG4gICAgY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCAmJlxuICAgIGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0XG4gIClcbn1cblxuaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIgPSBncmVhdGVyVGhhblxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIHVuY2xvc2VkIFVSSS5cbmZ1bmN0aW9uIGlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiAoXG4gICAgY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCAmJlxuICAgIGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0ICYmXG4gICAgIXdoaXRlc3BhY2UoY2hhcmFjdGVyKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2RlbGV0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWtldGhyb3VnaFxuc3RyaWtldGhyb3VnaC5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciB0aWxkZSA9ICd+J1xudmFyIGZlbmNlID0gJ35+J1xuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNoYXJhY3RlciA9ICcnXG4gIHZhciBwcmV2aW91cyA9ICcnXG4gIHZhciBwcmVjZWRpbmcgPSAnJ1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgbm93XG5cbiAgaWYgKFxuICAgICFzZWxmLm9wdGlvbnMuZ2ZtIHx8XG4gICAgdmFsdWUuY2hhckF0KDApICE9PSB0aWxkZSB8fFxuICAgIHZhbHVlLmNoYXJBdCgxKSAhPT0gdGlsZGUgfHxcbiAgICB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdCgyKSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCA9IDFcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IDJcbiAgbm93Lm9mZnNldCArPSAyXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IHRpbGRlICYmXG4gICAgICBwcmV2aW91cyA9PT0gdGlsZGUgJiZcbiAgICAgICghcHJlY2VkaW5nIHx8ICF3aGl0ZXNwYWNlKHByZWNlZGluZykpXG4gICAgKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoZmVuY2UgKyBzdWJ2YWx1ZSArIGZlbmNlKSh7XG4gICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShzdWJ2YWx1ZSwgbm93KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBwcmV2aW91c1xuICAgIHByZWNlZGluZyA9IHByZXZpb3VzXG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VtYWlsJylcblxubW9kdWxlLmV4cG9ydHMgPSBlbWFpbFxuZW1haWwubG9jYXRvciA9IGxvY2F0ZVxuZW1haWwubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgcGx1c1NpZ24gPSA0MyAvLyAnKydcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgYXRTaWduID0gNjQgLy8gJ0AnXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xuXG5mdW5jdGlvbiBlbWFpbChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgZmlyc3REb3QgPSAtMVxuICB2YXIgY29kZVxuICB2YXIgY29udGVudFxuICB2YXIgY2hpbGRyZW5cbiAgdmFyIGV4aXRcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgd2hpbGUgKFxuICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICBjb2RlID09PSBwbHVzU2lnbiB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSBkb3QgfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KCsraW5kZXgpXG4gIH1cblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChjb2RlICE9PSBhdFNpZ24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgICAgY29kZSA9PT0gZGFzaCB8fFxuICAgICAgY29kZSA9PT0gZG90IHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICAgKSB7XG4gICAgICBpbmRleCsrXG5cbiAgICAgIGlmIChmaXJzdERvdCA9PT0gLTEgJiYgY29kZSA9PT0gZG90KSB7XG4gICAgICAgIGZpcnN0RG90ID0gaW5kZXhcbiAgICAgIH1cblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBicmVha1xuICB9XG5cbiAgaWYgKFxuICAgIGZpcnN0RG90ID09PSAtMSB8fFxuICAgIGZpcnN0RG90ID09PSBpbmRleCB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgIGluZGV4LS1cbiAgfVxuXG4gIGNvbnRlbnQgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gdXJsLlxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuICBjaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKVxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChjb250ZW50KSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogJ21haWx0bzonICsgZGVjb2RlKGNvbnRlbnQsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgd29yZCA9IHJlcXVpcmUoJ2lzLXdvcmQtY2hhcmFjdGVyJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lbXBoYXNpcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcbmVtcGhhc2lzLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG5mdW5jdGlvbiBlbXBoYXNpcyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIG5vd1xuICB2YXIgcGVkYW50aWNcbiAgdmFyIG1hcmtlclxuICB2YXIgcXVldWVcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBsZW5ndGhcbiAgdmFyIHByZXZpb3VzXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiYgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICBzdWJ2YWx1ZSA9IGNoYXJhY3RlclxuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4KytcbiAgcXVldWUgPSAnJ1xuICBjaGFyYWN0ZXIgPSAnJ1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlciAmJiAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXZpb3VzKSkpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgaWYgKCF0cmltKHF1ZXVlKSB8fCBwcmV2aW91cyA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBlZGFudGljICYmIG1hcmtlciA9PT0gdW5kZXJzY29yZSAmJiB3b3JkKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBxdWV1ZSArPSBtYXJrZXJcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdyA9IGVhdC5ub3coKVxuICAgICAgICBub3cuY29sdW1uKytcbiAgICAgICAgbm93Lm9mZnNldCsrXG5cbiAgICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlICsgbWFya2VyKSh7XG4gICAgICAgICAgdHlwZTogJ2VtcGhhc2lzJyxcbiAgICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShxdWV1ZSwgbm93KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBtYXJrZXJcbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZXNjYXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVcbmVzY2FwZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbmZ1bmN0aW9uIGVzY2FwZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG5vZGVcblxuICBpZiAodmFsdWUuY2hhckF0KDApID09PSBiYWNrc2xhc2gpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSlcblxuICAgIGlmIChzZWxmLmVzY2FwZS5pbmRleE9mKGNoYXJhY3RlcikgIT09IC0xKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIG5vZGUgPSB7dHlwZTogJ2JyZWFrJ31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogY2hhcmFjdGVyfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KGJhY2tzbGFzaCArIGNoYXJhY3Rlcikobm9kZSlcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0eEhlYWRpbmdcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbnVtYmVyU2lnbiA9ICcjJ1xuXG52YXIgbWF4RmVuY2VDb3VudCA9IDZcblxuZnVuY3Rpb24gYXR4SGVhZGluZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50ID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcXVldWVcbiAgdmFyIGRlcHRoXG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEVhdCBoYXNoZXMuXG4gIGRlcHRoID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDw9IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG51bWJlclNpZ24pIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgZGVwdGgrK1xuICB9XG5cbiAgaWYgKGRlcHRoID4gbWF4RmVuY2VDb3VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFkZXB0aCB8fCAoIXBlZGFudGljICYmIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBudW1iZXJTaWduKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuXG4gIC8vIEVhdCBpbnRlcm1lZGlhdGUgd2hpdGUtc3BhY2UuXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIG5vdCBpbiBwZWRhbnRpYyBtb2RlIHdpdGhvdXQgc3BhY2luZy5cbiAgaWYgKCFwZWRhbnRpYyAmJiBxdWV1ZS5sZW5ndGggPT09IDAgJiYgY2hhcmFjdGVyICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIHN1YnZhbHVlICs9IHF1ZXVlXG4gIHF1ZXVlID0gJydcbiAgY29udGVudCA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gbnVtYmVyU2lnbikge1xuICAgICAgY29udGVudCArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICAvLyBgI2Agd2l0aG91dCBhIHF1ZXVlIGlzIHBhcnQgb2YgdGhlIGNvbnRlbnQuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjb250ZW50ICYmICFxdWV1ZSAmJiBjaGFyYWN0ZXIgPT09IG51bWJlclNpZ24pIHtcbiAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IG51bWJlclNpZ24pIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgc3VidmFsdWUgKz0gY29udGVudCArIHF1ZXVlXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0ZXh0SGVhZGluZ1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBlcXVhbHNUbyA9ICc9J1xudmFyIGRhc2ggPSAnLSdcblxudmFyIG1heEluZGVudCA9IDNcblxudmFyIGVxdWFsc1RvRGVwdGggPSAxXG52YXIgZGFzaERlcHRoID0gMlxuXG5mdW5jdGlvbiBzZXRleHRIZWFkaW5nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50XG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIGRlcHRoXG5cbiAgLy8gRWF0IGluaXRpYWwgaW5kZW50YXRpb24uXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgfHwgaW5kZXggPj0gbWF4SW5kZW50KSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIGNvbnRlbnQgPSAnJ1xuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgcXVldWVcblxuICAvLyBFbnN1cmUgdGhlIGNvbnRlbnQgaXMgZm9sbG93ZWQgYnkgYSBuZXdsaW5lIGFuZCBhIHZhbGlkIG1hcmtlci5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIG1hcmtlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkIHx8IChtYXJrZXIgIT09IGVxdWFsc1RvICYmIG1hcmtlciAhPT0gZGFzaCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuXG4gIC8vIEVhdCBTZXRleHQtbGluZS5cbiAgcXVldWUgPSBtYXJrZXJcbiAgZGVwdGggPSBtYXJrZXIgPT09IGVxdWFsc1RvID8gZXF1YWxzVG9EZXB0aCA6IGRhc2hEZXB0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG9wZW5DbG9zZVRhZyA9IHJlcXVpcmUoJy4uL3V0aWwvaHRtbCcpLm9wZW5DbG9zZVRhZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrSHRtbFxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBsZXNzVGhhbiA9ICc8J1xuXG52YXIgcmF3T3BlbkV4cHJlc3Npb24gPSAvXjwoc2NyaXB0fHByZXxzdHlsZSkoPz0oXFxzfD58JCkpL2lcbnZhciByYXdDbG9zZUV4cHJlc3Npb24gPSAvPFxcLyhzY3JpcHR8cHJlfHN0eWxlKT4vaVxudmFyIGNvbW1lbnRPcGVuRXhwcmVzc2lvbiA9IC9ePCEtLS9cbnZhciBjb21tZW50Q2xvc2VFeHByZXNzaW9uID0gLy0tPi9cbnZhciBpbnN0cnVjdGlvbk9wZW5FeHByZXNzaW9uID0gL148XFw/L1xudmFyIGluc3RydWN0aW9uQ2xvc2VFeHByZXNzaW9uID0gL1xcPz4vXG52YXIgZGlyZWN0aXZlT3BlbkV4cHJlc3Npb24gPSAvXjwhW0EtWmEtel0vXG52YXIgZGlyZWN0aXZlQ2xvc2VFeHByZXNzaW9uID0gLz4vXG52YXIgY2RhdGFPcGVuRXhwcmVzc2lvbiA9IC9ePCFcXFtDREFUQVxcWy9cbnZhciBjZGF0YUNsb3NlRXhwcmVzc2lvbiA9IC9dXT4vXG52YXIgZWxlbWVudENsb3NlRXhwcmVzc2lvbiA9IC9eJC9cbnZhciBvdGhlckVsZW1lbnRPcGVuRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAob3BlbkNsb3NlVGFnLnNvdXJjZSArICdcXFxccyokJylcblxuZnVuY3Rpb24gYmxvY2tIdG1sKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGJsb2NrcyA9IHNlbGYub3B0aW9ucy5ibG9ja3Muam9pbignfCcpXG4gIHZhciBlbGVtZW50T3BlbkV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKFxuICAgICdePC8/KCcgKyBibG9ja3MgKyAnKSg/PShcXFxcc3wvPz58JCkpJyxcbiAgICAnaSdcbiAgKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIG5leHRcbiAgdmFyIGxpbmVcbiAgdmFyIG9mZnNldFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBjb3VudFxuICB2YXIgc2VxdWVuY2VcbiAgdmFyIHN1YnZhbHVlXG5cbiAgdmFyIHNlcXVlbmNlcyA9IFtcbiAgICBbcmF3T3BlbkV4cHJlc3Npb24sIHJhd0Nsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2NvbW1lbnRPcGVuRXhwcmVzc2lvbiwgY29tbWVudENsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2luc3RydWN0aW9uT3BlbkV4cHJlc3Npb24sIGluc3RydWN0aW9uQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbZGlyZWN0aXZlT3BlbkV4cHJlc3Npb24sIGRpcmVjdGl2ZUNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2NkYXRhT3BlbkV4cHJlc3Npb24sIGNkYXRhQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbZWxlbWVudE9wZW5FeHByZXNzaW9uLCBlbGVtZW50Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbb3RoZXJFbGVtZW50T3BlbkV4cHJlc3Npb24sIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24sIGZhbHNlXVxuICBdXG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGxlc3NUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBuZXh0ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICBuZXh0ID0gbmV4dCA9PT0gLTEgPyBsZW5ndGggOiBuZXh0XG4gIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dClcbiAgb2Zmc2V0ID0gLTFcbiAgY291bnQgPSBzZXF1ZW5jZXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsrb2Zmc2V0IDwgY291bnQpIHtcbiAgICBpZiAoc2VxdWVuY2VzW29mZnNldF1bMF0udGVzdChsaW5lKSkge1xuICAgICAgc2VxdWVuY2UgPSBzZXF1ZW5jZXNbb2Zmc2V0XVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNlcXVlbmNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHNlcXVlbmNlWzJdXG4gIH1cblxuICBpbmRleCA9IG5leHRcblxuICBpZiAoIXNlcXVlbmNlWzFdLnRlc3QobGluZSkpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIG5leHQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gICAgICBuZXh0ID0gbmV4dCA9PT0gLTEgPyBsZW5ndGggOiBuZXh0XG4gICAgICBsaW5lID0gdmFsdWUuc2xpY2UoaW5kZXggKyAxLCBuZXh0KVxuXG4gICAgICBpZiAoc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgICAgICBpZiAobGluZSkge1xuICAgICAgICAgIGluZGV4ID0gbmV4dFxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSBuZXh0XG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ2h0bWwnLCB2YWx1ZTogc3VidmFsdWV9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS90YWcnKVxudmFyIHRhZyA9IHJlcXVpcmUoJy4uL3V0aWwvaHRtbCcpLnRhZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUhUTUxcbmlubGluZUhUTUwubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBxdWVzdGlvbk1hcmsgPSAnPydcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBzbGFzaCA9ICcvJ1xuXG52YXIgaHRtbExpbmtPcGVuRXhwcmVzc2lvbiA9IC9ePGEgL2lcbnZhciBodG1sTGlua0Nsb3NlRXhwcmVzc2lvbiA9IC9ePFxcL2E+L2lcblxuZnVuY3Rpb24gaW5saW5lSFRNTChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgc3VidmFsdWVcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBsZXNzVGhhbiB8fCBsZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSlcblxuICBpZiAoXG4gICAgIWFscGhhYmV0aWNhbChjaGFyYWN0ZXIpICYmXG4gICAgY2hhcmFjdGVyICE9PSBxdWVzdGlvbk1hcmsgJiZcbiAgICBjaGFyYWN0ZXIgIT09IGV4Y2xhbWF0aW9uTWFyayAmJlxuICAgIGNoYXJhY3RlciAhPT0gc2xhc2hcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLm1hdGNoKHRhZylcblxuICBpZiAoIXN1YnZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBub3QgdXNlZCB5ZXQuICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3VidmFsdWUgPSBzdWJ2YWx1ZVswXVxuXG4gIGlmICghc2VsZi5pbkxpbmsgJiYgaHRtbExpbmtPcGVuRXhwcmVzc2lvbi50ZXN0KHN1YnZhbHVlKSkge1xuICAgIHNlbGYuaW5MaW5rID0gdHJ1ZVxuICB9IGVsc2UgaWYgKHNlbGYuaW5MaW5rICYmIGh0bWxMaW5rQ2xvc2VFeHByZXNzaW9uLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xubGluay5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxuZnVuY3Rpb24gbGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgwKVxuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgY2xvc2VkXG4gIHZhciBjb3VudFxuICB2YXIgb3BlbmluZ1xuICB2YXIgYmVmb3JlVVJMXG4gIHZhciBiZWZvcmVUaXRsZVxuICB2YXIgc3VicXVldWVcbiAgdmFyIGhhc01hcmtlclxuICB2YXIgaXNJbWFnZVxuICB2YXIgY29udGVudFxuICB2YXIgbWFya2VyXG4gIHZhciBsZW5ndGhcbiAgdmFyIHRpdGxlXG4gIHZhciBkZXB0aFxuICB2YXIgcXVldWVcbiAgdmFyIHVybFxuICB2YXIgbm93XG4gIHZhciBleGl0XG4gIHZhciBub2RlXG5cbiAgLy8gRGV0ZWN0IHdoZXRoZXIgdGhpcyBpcyBhbiBpbWFnZS5cbiAgaWYgKGNoYXJhY3RlciA9PT0gZXhjbGFtYXRpb25NYXJrKSB7XG4gICAgaXNJbWFnZSA9IHRydWVcbiAgICBzdWJ2YWx1ZSA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgLy8gRWF0IHRoZSBvcGVuaW5nLlxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIHRoaXMgaXMgYSBsaW5rIGFuZCB3ZeKAmXJlIGFscmVhZHkgaW5zaWRlIGEgbGluay5cbiAgaWYgKCFpc0ltYWdlICYmIHNlbGYuaW5MaW5rKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuICBpbmRleCsrXG5cbiAgLy8gRWF0IHRoZSBjb250ZW50LlxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgbm93ID0gZWF0Lm5vdygpXG4gIGRlcHRoID0gMFxuXG4gIG5vdy5jb2x1bW4gKz0gaW5kZXhcbiAgbm93Lm9mZnNldCArPSBpbmRleFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBzdWJxdWV1ZSA9IGNoYXJhY3RlclxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIC8vIElubGluZS1jb2RlIGluIGxpbmsgY29udGVudC5cbiAgICAgIGNvdW50ID0gMVxuXG4gICAgICB3aGlsZSAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvdW50KytcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSBjb3VudFxuICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSBvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSAwXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgLy8gQWxsb3cgYnJhY2tldHMgdG8gYmUgZXNjYXBlZC5cbiAgICAgIGluZGV4KytcbiAgICAgIHN1YnF1ZXVlICs9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICB9IGVsc2UgaWYgKCghb3BlbmluZyB8fCBnZm0pICYmIGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIC8vIEluIEdGTSBtb2RlLCBicmFja2V0cyBpbiBjb2RlIHN0aWxsIGNvdW50LiAgSW4gYWxsIG90aGVyIG1vZGVzLFxuICAgICAgLy8gdGhleSBkb27igJl0LlxuICAgICAgZGVwdGgrK1xuICAgIH0gZWxzZSBpZiAoKCFvcGVuaW5nIHx8IGdmbSkgJiYgY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGlmIChkZXB0aCkge1xuICAgICAgICBkZXB0aC0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gbGVmdFBhcmVudGhlc2lzXG4gICAgICAgIGNsb3NlZCA9IHRydWVcbiAgICAgICAgaW5kZXgrK1xuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWUgKz0gc3VicXVldWVcbiAgICBzdWJxdWV1ZSA9ICcnXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IHRoZSBjb250ZW50IGNsb3NpbmcuXG4gIGlmICghY2xvc2VkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb250ZW50ID0gcXVldWVcbiAgc3VidmFsdWUgKz0gcXVldWUgKyBzdWJxdWV1ZVxuICBpbmRleCsrXG5cbiAgLy8gRWF0IHdoaXRlLXNwYWNlLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgdGhlIFVSTC5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBxdWV1ZSA9ICcnXG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVzc1RoYW4pIHtcbiAgICBpbmRleCsrXG4gICAgYmVmb3JlVVJMICs9IGxlc3NUaGFuXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBsZXNzVGhhbiArIHF1ZXVlICsgZ3JlYXRlclRoYW5cbiAgICB1cmwgPSBxdWV1ZVxuICAgIGluZGV4KytcbiAgfSBlbHNlIHtcbiAgICBjaGFyYWN0ZXIgPSBudWxsXG4gICAgc3VicXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgc3VicXVldWUgJiZcbiAgICAgICAgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyayB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSB8fFxuICAgICAgICAgIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSlcbiAgICAgICkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGlmICghcGVkYW50aWMpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBkZXB0aCsrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlcHRoLS1cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IHN1YnF1ZXVlXG4gICAgICAgIHN1YnF1ZXVlID0gJydcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICB1cmwgPSBxdWV1ZVxuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIH1cblxuICAvLyBFYXQgd2hpdGUtc3BhY2UuXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHN1YnZhbHVlICs9IHF1ZXVlXG5cbiAgLy8gRWF0IHRoZSB0aXRsZS5cbiAgaWYgKFxuICAgIHF1ZXVlICYmXG4gICAgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyayB8fFxuICAgICAgY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlIHx8XG4gICAgICAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykpXG4gICkge1xuICAgIGluZGV4KytcbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBxdWV1ZSA9ICcnXG4gICAgbWFya2VyID0gY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMgPyByaWdodFBhcmVudGhlc2lzIDogY2hhcmFjdGVyXG4gICAgYmVmb3JlVGl0bGUgPSBzdWJ2YWx1ZVxuXG4gICAgLy8gSW4gY29tbW9ubWFyay1tb2RlLCB0aGluZ3MgYXJlIHByZXR0eSBlYXN5OiB0aGUgbWFya2VyIGNhbm5vdCBvY2N1clxuICAgIC8vIGluc2lkZSB0aGUgdGl0bGUuICBOb24tY29tbW9ubWFyayBkb2VzLCBob3dldmVyLCBzdXBwb3J0IG5lc3RlZFxuICAgIC8vIGRlbGltaXRlcnMuXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH1cblxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRpdGxlID0gcXVldWVcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VicXVldWUgPSAnJ1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGlmIChoYXNNYXJrZXIpIHtcbiAgICAgICAgICAgIHF1ZXVlICs9IG1hcmtlciArIHN1YnF1ZXVlXG4gICAgICAgICAgICBzdWJxdWV1ZSA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFzTWFya2VyID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNNYXJrZXIpIHtcbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIG1hcmtlciArIHN1YnF1ZXVlXG4gICAgICAgICAgdGl0bGUgPSBxdWV1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyICsgc3VicXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgICAgICBzdWJxdWV1ZSA9ICcnXG4gICAgICAgICAgaGFzTWFya2VyID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YnZhbHVlICs9IHJpZ2h0UGFyZW50aGVzaXNcblxuICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBlYXQoYmVmb3JlVVJMKS50ZXN0KCkuZW5kLCB7XG4gICAgbm9uVGVybWluYXRlZDogZmFsc2VcbiAgfSlcblxuICBpZiAodGl0bGUpIHtcbiAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZFxuICAgIHRpdGxlID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodGl0bGUpLCBiZWZvcmVUaXRsZSlcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogaXNJbWFnZSA/ICdpbWFnZScgOiAnbGluaycsXG4gICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgdXJsOiB1cmxcbiAgfVxuXG4gIGlmIChpc0ltYWdlKSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsXG4gIH0gZWxzZSB7XG4gICAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gICAgZXhpdCgpXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKShub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvZ2V0LWluZGVudGF0aW9uJylcbnZhciByZW1vdmVJbmRlbnQgPSByZXF1aXJlKCcuLi91dGlsL3JlbW92ZS1pbmRlbnRhdGlvbicpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIHBsdXNTaWduID0gJysnXG52YXIgZGFzaCA9ICctJ1xudmFyIGRvdCA9ICcuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxvd2VyY2FzZVggPSAneCdcblxudmFyIHRhYlNpemUgPSA0XG52YXIgbG9vc2VMaXN0SXRlbUV4cHJlc3Npb24gPSAvXFxuXFxuKD8hXFxzKiQpL1xudmFyIHRhc2tJdGVtRXhwcmVzc2lvbiA9IC9eXFxbKFsgWFxcdHhdKV1bIFxcdF0vXG52YXIgYnVsbGV0RXhwcmVzc2lvbiA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKSggezEsNH0oPyEgKXwgfFxcdHwkfCg/PVxcbikpKFteXFxuXSopL1xudmFyIHBlZGFudGljQnVsbGV0RXhwcmVzc2lvbiA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKShbIFxcdF0rKS9cbnZhciBpbml0aWFsSW5kZW50RXhwcmVzc2lvbiA9IC9eKCB7MSw0fXxcXHQpPy9nbVxuXG5mdW5jdGlvbiBsaXN0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJ1cHRvcnMgPSBzZWxmLmludGVycnVwdExpc3RcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdGFydCA9IG51bGxcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBxdWV1ZVxuICB2YXIgb3JkZXJlZFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIG5leHRJbmRleFxuICB2YXIgc3RhcnRJbmRleFxuICB2YXIgcHJlZml4ZWRcbiAgdmFyIGN1cnJlbnRNYXJrZXJcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGxpbmVcbiAgdmFyIHByZXZpb3VzRW1wdHlcbiAgdmFyIGVtcHR5XG4gIHZhciBpdGVtc1xuICB2YXIgYWxsTGluZXNcbiAgdmFyIGVtcHR5TGluZXNcbiAgdmFyIGl0ZW1cbiAgdmFyIGVudGVyVG9wXG4gIHZhciBleGl0QmxvY2txdW90ZVxuICB2YXIgc3ByZWFkID0gZmFsc2VcbiAgdmFyIG5vZGVcbiAgdmFyIG5vd1xuICB2YXIgZW5kXG4gIHZhciBpbmRlbnRlZFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgc2l6ZSArPSB0YWJTaXplIC0gKHNpemUgJSB0YWJTaXplKVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgc2l6ZSsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKHNpemUgPj0gdGFiU2l6ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8IGNoYXJhY3RlciA9PT0gcGx1c1NpZ24gfHwgY2hhcmFjdGVyID09PSBkYXNoKSB7XG4gICAgbWFya2VyID0gY2hhcmFjdGVyXG4gICAgb3JkZXJlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgb3JkZXJlZCA9IHRydWVcbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgIXF1ZXVlIHx8XG4gICAgICAhKGNoYXJhY3RlciA9PT0gZG90IHx8IChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykpXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdGFydCA9IHBhcnNlSW50KHF1ZXVlLCAxMClcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gIGlmIChcbiAgICBjaGFyYWN0ZXIgIT09IHNwYWNlICYmXG4gICAgY2hhcmFjdGVyICE9PSB0YWIgJiZcbiAgICAocGVkYW50aWMgfHwgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgJiYgY2hhcmFjdGVyICE9PSAnJykpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpbmRleCA9IDBcbiAgaXRlbXMgPSBbXVxuICBhbGxMaW5lcyA9IFtdXG4gIGVtcHR5TGluZXMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgIHByZWZpeGVkID0gZmFsc2VcbiAgICBpbmRlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoXG4gICAgfVxuXG4gICAgZW5kID0gaW5kZXggKyB0YWJTaXplXG4gICAgc2l6ZSA9IDBcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgc2l6ZSArPSB0YWJTaXplIC0gKHNpemUgJSB0YWJTaXplKVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIHNpemUrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChzaXplID49IHRhYlNpemUpIHtcbiAgICAgIGluZGVudGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChpdGVtICYmIHNpemUgPj0gaXRlbS5pbmRlbnQpIHtcbiAgICAgIGluZGVudGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBjdXJyZW50TWFya2VyID0gbnVsbFxuXG4gICAgaWYgKCFpbmRlbnRlZCkge1xuICAgICAgaWYgKFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gcGx1c1NpZ24gfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBkYXNoXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICAgIHNpemUrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSAnJ1xuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICAgIGlmICghZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICAgICAgaW5kZXgrK1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxdWV1ZSAmJlxuICAgICAgICAgIChjaGFyYWN0ZXIgPT09IGRvdCB8fCAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjdXJyZW50TWFya2VyID0gY2hhcmFjdGVyXG4gICAgICAgICAgc2l6ZSArPSBxdWV1ZS5sZW5ndGggKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICAgIHNpemUgKz0gdGFiU2l6ZSAtIChzaXplICUgdGFiU2l6ZSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICAgIGVuZCA9IGluZGV4ICsgdGFiU2l6ZVxuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gc3BhY2UpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgICAgc2l6ZSsrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQgJiYgdmFsdWUuY2hhckF0KGluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgICAgIGluZGV4IC09IHRhYlNpemUgLSAxXG4gICAgICAgICAgICBzaXplIC09IHRhYlNpemUgLSAxXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgJiYgY2hhcmFjdGVyICE9PSAnJykge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE1hcmtlcikge1xuICAgICAgaWYgKCFwZWRhbnRpYyAmJiBtYXJrZXIgIT09IGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcHJlZml4ZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29tbW9ubWFyayAmJiAhaW5kZW50ZWQgJiYgdmFsdWUuY2hhckF0KHN0YXJ0SW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICBpbmRlbnRlZCA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoY29tbW9ubWFyayAmJiBpdGVtKSB7XG4gICAgICAgIGluZGVudGVkID0gc2l6ZSA+PSBpdGVtLmluZGVudCB8fCBzaXplID4gdGFiU2l6ZVxuICAgICAgfVxuXG4gICAgICBwcmVmaXhlZCA9IGZhbHNlXG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICB9XG5cbiAgICBsaW5lID0gdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KVxuICAgIGNvbnRlbnQgPSBzdGFydEluZGV4ID09PSBpbmRleCA/IGxpbmUgOiB2YWx1ZS5zbGljZShpbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IHVuZGVyc2NvcmUgfHxcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IGRhc2hcbiAgICApIHtcbiAgICAgIGlmICh0b2tlbml6ZXJzLnRoZW1hdGljQnJlYWsuY2FsbChzZWxmLCBlYXQsIGxpbmUsIHRydWUpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXNFbXB0eSA9IGVtcHR5XG4gICAgZW1wdHkgPSAhcHJlZml4ZWQgJiYgIXRyaW0oY29udGVudCkubGVuZ3RoXG5cbiAgICBpZiAoaW5kZW50ZWQgJiYgaXRlbSkge1xuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfSBlbHNlIGlmIChwcmVmaXhlZCkge1xuICAgICAgaWYgKGVtcHR5TGluZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHNwcmVhZCA9IHRydWVcbiAgICAgICAgaXRlbS52YWx1ZS5wdXNoKCcnKVxuICAgICAgICBpdGVtLnRyYWlsID0gZW1wdHlMaW5lcy5jb25jYXQoKVxuICAgICAgfVxuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB2YWx1ZTogW2xpbmVdLFxuICAgICAgICBpbmRlbnQ6IHNpemUsXG4gICAgICAgIHRyYWlsOiBbXVxuICAgICAgfVxuXG4gICAgICBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfSBlbHNlIGlmIChlbXB0eSkge1xuICAgICAgaWYgKHByZXZpb3VzRW1wdHkgJiYgIWNvbW1vbm1hcmspIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZW1wdHlMaW5lcy5wdXNoKGxpbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2aW91c0VtcHR5KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIGxpbmUsIHRydWVdKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZS5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9XG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDFcbiAgfVxuXG4gIG5vZGUgPSBlYXQoYWxsTGluZXMuam9pbihsaW5lRmVlZCkpLnJlc2V0KHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgb3JkZXJlZDogb3JkZXJlZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgc3ByZWFkOiBzcHJlYWQsXG4gICAgY2hpbGRyZW46IFtdXG4gIH0pXG5cbiAgZW50ZXJUb3AgPSBzZWxmLmVudGVyTGlzdCgpXG4gIGV4aXRCbG9ja3F1b3RlID0gc2VsZi5lbnRlckJsb2NrKClcbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBpdGVtcy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udmFsdWUuam9pbihsaW5lRmVlZClcbiAgICBub3cgPSBlYXQubm93KClcblxuICAgIGVhdChpdGVtKShsaXN0SXRlbShzZWxmLCBpdGVtLCBub3cpLCBub2RlKVxuXG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XS50cmFpbC5qb2luKGxpbmVGZWVkKVxuXG4gICAgaWYgKGluZGV4ICE9PSBsZW5ndGggLSAxKSB7XG4gICAgICBpdGVtICs9IGxpbmVGZWVkXG4gICAgfVxuXG4gICAgZWF0KGl0ZW0pXG4gIH1cblxuICBlbnRlclRvcCgpXG4gIGV4aXRCbG9ja3F1b3RlKClcblxuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGZuID0gY3R4Lm9wdGlvbnMucGVkYW50aWMgPyBwZWRhbnRpY0xpc3RJdGVtIDogbm9ybWFsTGlzdEl0ZW1cbiAgdmFyIGNoZWNrZWQgPSBudWxsXG4gIHZhciB0YXNrXG4gIHZhciBpbmRlbnRcblxuICB2YWx1ZSA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcblxuICBpZiAoY3R4Lm9wdGlvbnMuZ2ZtKSB7XG4gICAgdGFzayA9IHZhbHVlLm1hdGNoKHRhc2tJdGVtRXhwcmVzc2lvbilcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICBpbmRlbnQgPSB0YXNrWzBdLmxlbmd0aFxuICAgICAgY2hlY2tlZCA9IHRhc2tbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlWFxuICAgICAgb2Zmc2V0c1twb3NpdGlvbi5saW5lXSArPSBpbmRlbnRcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoaW5kZW50KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICBzcHJlYWQ6IGxvb3NlTGlzdEl0ZW1FeHByZXNzaW9uLnRlc3QodmFsdWUpLFxuICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgY2hpbGRyZW46IGN0eC50b2tlbml6ZUJsb2NrKHZhbHVlLCBwb3NpdGlvbilcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgb3Zlcmx5IHNpbXBsZSBtZWNoYW5pY3MuXG5mdW5jdGlvbiBwZWRhbnRpY0xpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcblxuICAvLyBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocGVkYW50aWNCdWxsZXRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICAvLyBUaGUgaW5pdGlhbCBsaW5lIHdhcyBhbHNvIG1hdGNoZWQgYnkgdGhlIGJlbG93LCBzbyB3ZSByZXNldCB0aGUgYGxpbmVgLlxuICBsaW5lID0gcG9zaXRpb24ubGluZVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKGluaXRpYWxJbmRlbnRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICAvLyBBIHNpbXBsZSByZXBsYWNlciB3aGljaCByZW1vdmVkIGFsbCBtYXRjaGVzLCBhbmQgYWRkcyB0aGVpciBsZW5ndGggdG9cbiAgLy8gYG9mZnNldGAuXG4gIGZ1bmN0aW9uIHJlcGxhY2VyKCQwKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgJDAubGVuZ3RoXG4gICAgbGluZSsrXG5cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgc2FuZSBtZWNoYW5pY3MuXG5mdW5jdGlvbiBub3JtYWxMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG4gIHZhciBtYXhcbiAgdmFyIGJ1bGxldFxuICB2YXIgcmVzdFxuICB2YXIgbGluZXNcbiAgdmFyIHRyaW1tZWRMaW5lc1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIC8vIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShidWxsZXRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICBsaW5lcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuXG4gIHRyaW1tZWRMaW5lcyA9IHJlbW92ZUluZGVudCh2YWx1ZSwgZ2V0SW5kZW50KG1heCkuaW5kZW50KS5zcGxpdChsaW5lRmVlZClcblxuICAvLyBXZSByZXBsYWNlZCB0aGUgaW5pdGlhbCBidWxsZXQgd2l0aCBzb21ldGhpbmcgZWxzZSBhYm92ZSwgd2hpY2ggd2FzIHVzZWRcbiAgLy8gdG8gdHJpY2sgYHJlbW92ZUluZGVudGF0aW9uYCBpbnRvIHJlbW92aW5nIHNvbWUgbW9yZSBjaGFyYWN0ZXJzIHdoZW5cbiAgLy8gcG9zc2libGUuICBIb3dldmVyLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgaW5pdGlhbCBsaW5lIHRvIGJlIHN0cmlwcGVkXG4gIC8vIG1vcmUgdGhhbiBpdCBzaG91bGQgYmUuXG4gIHRyaW1tZWRMaW5lc1swXSA9IHJlc3RcblxuICBvZmZzZXRzW2xpbmVdID0gKG9mZnNldHNbbGluZV0gfHwgMCkgKyBidWxsZXQubGVuZ3RoXG4gIGxpbmUrK1xuXG4gIGluZGV4ID0gMFxuICBsZW5ndGggPSBsaW5lcy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbbGluZV0gPVxuICAgICAgKG9mZnNldHNbbGluZV0gfHwgMCkgKyBsaW5lc1tpbmRleF0ubGVuZ3RoIC0gdHJpbW1lZExpbmVzW2luZGV4XS5sZW5ndGhcbiAgICBsaW5lKytcbiAgfVxuXG4gIHJldHVybiB0cmltbWVkTGluZXMuam9pbihsaW5lRmVlZClcblxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtcyAqL1xuICBmdW5jdGlvbiByZXBsYWNlcigkMCwgJDEsICQyLCAkMywgJDQpIHtcbiAgICBidWxsZXQgPSAkMSArICQyICsgJDNcbiAgICByZXN0ID0gJDRcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBmaXJzdCBuaW5lIG51bWJlcmVkIGxpc3QgaXRlbXMgY2FuIGluZGVudCB3aXRoIGFuXG4gICAgLy8gZXh0cmEgc3BhY2UuICBUaGF0IGlzLCB3aGVuIHRoZSBidWxsZXQgZGlkIG5vdCByZWNlaXZlIGFuIGV4dHJhIGZpbmFsXG4gICAgLy8gc3BhY2UuXG4gICAgaWYgKE51bWJlcigkMikgPCAxMCAmJiBidWxsZXQubGVuZ3RoICUgMiA9PT0gMSkge1xuICAgICAgJDIgPSBzcGFjZSArICQyXG4gICAgfVxuXG4gICAgbWF4ID0gJDEgKyByZXBlYXQoc3BhY2UsICQyLmxlbmd0aCkgKyAkM1xuXG4gICAgcmV0dXJuIG1heCArIHJlc3RcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIHRyaW1UcmFpbGluZ0xpbmVzID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFncmFwaFxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG5cbi8vIFRva2VuaXNlIHBhcmFncmFwaC5cbmZ1bmN0aW9uIHBhcmFncmFwaChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzZXR0aW5ncyA9IHNlbGYub3B0aW9uc1xuICB2YXIgY29tbW9ubWFyayA9IHNldHRpbmdzLmNvbW1vbm1hcmtcbiAgdmFyIGdmbSA9IHNldHRpbmdzLmdmbVxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnJ1cHRvcnMgPSBzZWxmLmludGVycnVwdFBhcmFncmFwaFxuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBwb3NpdGlvblxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgc2l6ZVxuICB2YXIgbm93XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gRWF0IGV2ZXJ5dGhpbmcgaWYgdGhlcmXigJlzIG5vIGZvbGxvd2luZyBuZXdsaW5lLlxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gbGVuZ3RoXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIFN0b3AgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIE5FV0xJTkUuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBJbiBjb21tb25tYXJrLW1vZGUsIGZvbGxvd2luZyBpbmRlbnRlZCBsaW5lcyBhcmUgcGFydCBvZiB0aGUgcGFyYWdyYXBoLlxuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICBzaXplID0gMFxuICAgICAgcG9zaXRpb24gPSBpbmRleCArIDFcblxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwb3NpdGlvbilcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICBzaXplID0gdGFiU2l6ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICAgIHNpemUrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbisrXG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplID49IHRhYlNpemUgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSlcblxuICAgIC8vIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlIGJsb2NrLlxuICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCBzdWJ2YWx1ZSwgdHJ1ZV0pKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIEJyZWFrIGlmIHRoZSBmb2xsb3dpbmcgbGluZSBzdGFydHMgYSBsaXN0LCB3aGVuIGFscmVhZHkgaW4gYSBsaXN0LCBvclxuICAgIC8vIHdoZW4gaW4gY29tbW9ubWFyaywgb3Igd2hlbiBpbiBnZm0gbW9kZSBhbmQgdGhlIGJ1bGxldCBpcyAqbm90KiBudW1lcmljLlxuICAgIGlmIChcbiAgICAgIHRva2VuaXplcnMubGlzdC5jYWxsKHNlbGYsIGVhdCwgc3VidmFsdWUsIHRydWUpICYmXG4gICAgICAoc2VsZi5pbkxpc3QgfHxcbiAgICAgICAgY29tbW9ubWFyayB8fFxuICAgICAgICAoZ2ZtICYmICFkZWNpbWFsKHRyaW0ubGVmdChzdWJ2YWx1ZSkuY2hhckF0KDApKSkpXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gaW5kZXhcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcblxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgdHJpbSh2YWx1ZS5zbGljZShwb3NpdGlvbiwgaW5kZXgpKSA9PT0gJycpIHtcbiAgICAgIGluZGV4ID0gcG9zaXRpb25cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIHN1YnZhbHVlID0gdHJpbVRyYWlsaW5nTGluZXMoc3VidmFsdWUpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHN1YnZhbHVlLCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2xpbmsnKVxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJylcblxubW9kdWxlLmV4cG9ydHMgPSByZWZlcmVuY2VcbnJlZmVyZW5jZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5rID0gJ2xpbmsnXG52YXIgaW1hZ2UgPSAnaW1hZ2UnXG52YXIgc2hvcnRjdXQgPSAnc2hvcnRjdXQnXG52YXIgY29sbGFwc2VkID0gJ2NvbGxhcHNlZCdcbnZhciBmdWxsID0gJ2Z1bGwnXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxuZnVuY3Rpb24gcmVmZXJlbmNlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW50cm8gPSAnJ1xuICB2YXIgdHlwZSA9IGxpbmtcbiAgdmFyIHJlZmVyZW5jZVR5cGUgPSBzaG9ydGN1dFxuICB2YXIgY29udGVudFxuICB2YXIgaWRlbnRpZmllclxuICB2YXIgbm93XG4gIHZhciBub2RlXG4gIHZhciBleGl0XG4gIHZhciBxdWV1ZVxuICB2YXIgYnJhY2tldGVkXG4gIHZhciBkZXB0aFxuXG4gIC8vIENoZWNrIHdoZXRoZXIgd2XigJlyZSBlYXRpbmcgYW4gaW1hZ2UuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGV4Y2xhbWF0aW9uTWFyaykge1xuICAgIHR5cGUgPSBpbWFnZVxuICAgIGludHJvID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBpbnRybyArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIC8vIEVhdCB0aGUgdGV4dC5cbiAgZGVwdGggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGJyYWNrZXRlZCA9IHRydWVcbiAgICAgIGRlcHRoKytcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBpZiAoIWRlcHRoKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlcHRoLS1cbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgc3VidmFsdWUgPSBxdWV1ZVxuICBjb250ZW50ID0gcXVldWVcbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIGlmICghY29tbW9ubWFyaykge1xuICAgIC8vIFRoZSBvcmlnaW5hbCBtYXJrZG93biBzeW50YXggZGVmaW5pdGlvbiBleHBsaWNpdGx5IGFsbG93cyBmb3Igd2hpdGVzcGFjZVxuICAgIC8vIGJldHdlZW4gdGhlIGxpbmsgdGV4dCBhbmQgbGluayBsYWJlbDsgY29tbW9ubWFyayBkZXBhcnRzIGZyb20gdGhpcywgaW5cbiAgICAvLyBwYXJ0IHRvIGltcHJvdmUgc3VwcG9ydCBmb3Igc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmtzXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIGlkZW50aWZpZXIgPSAnJ1xuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCB8fCBjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgaWRlbnRpZmllciArPSBiYWNrc2xhc2hcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGlkZW50aWZpZXIgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICByZWZlcmVuY2VUeXBlID0gaWRlbnRpZmllciA/IGZ1bGwgOiBjb2xsYXBzZWRcbiAgICAgIHF1ZXVlICs9IGlkZW50aWZpZXIgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9IGVsc2Uge1xuICAgICAgaWRlbnRpZmllciA9ICcnXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICBxdWV1ZSA9ICcnXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZGVudGlmaWVyID0gY29udGVudFxuICB9XG5cbiAgLy8gQnJhY2tldHMgY2Fubm90IGJlIGluc2lkZSB0aGUgaWRlbnRpZmllci5cbiAgaWYgKHJlZmVyZW5jZVR5cGUgIT09IGZ1bGwgJiYgYnJhY2tldGVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSA9IGludHJvICsgc3VidmFsdWVcblxuICBpZiAodHlwZSA9PT0gbGluayAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gaW50cm8ubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gaW50cm8ubGVuZ3RoXG4gIGlkZW50aWZpZXIgPSByZWZlcmVuY2VUeXBlID09PSBmdWxsID8gaWRlbnRpZmllciA6IGNvbnRlbnRcblxuICBub2RlID0ge1xuICAgIHR5cGU6IHR5cGUgKyAnUmVmZXJlbmNlJyxcbiAgICBpZGVudGlmaWVyOiBub3JtYWxpemUoaWRlbnRpZmllciksXG4gICAgbGFiZWw6IGlkZW50aWZpZXIsXG4gICAgcmVmZXJlbmNlVHlwZTogcmVmZXJlbmNlVHlwZVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGxpbmspIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICAgIG5vZGUuY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgICBleGl0KClcbiAgfSBlbHNlIHtcbiAgICBub2RlLmFsdCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGNvbnRlbnQpLCBub3cpIHx8IG51bGxcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9zdHJvbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuc3Ryb25nLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xuXG5mdW5jdGlvbiBzdHJvbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBub3dcbiAgdmFyIHBlZGFudGljXG4gIHZhciBtYXJrZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgbGVuZ3RoXG4gIHZhciBwcmV2aW91c1xuXG4gIGlmIChcbiAgICAoY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJiBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmUpIHx8XG4gICAgdmFsdWUuY2hhckF0KCsraW5kZXgpICE9PSBjaGFyYWN0ZXJcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgc3VidmFsdWUgPSBtYXJrZXIgKyBtYXJrZXJcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4KytcbiAgcXVldWUgPSAnJ1xuICBjaGFyYWN0ZXIgPSAnJ1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gbWFya2VyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbWFya2VyICYmXG4gICAgICAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXZpb3VzKSlcbiAgICApIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCArIDIpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbm93ID0gZWF0Lm5vdygpXG4gICAgICAgIG5vdy5jb2x1bW4gKz0gMlxuICAgICAgICBub3cub2Zmc2V0ICs9IDJcblxuICAgICAgICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUgKyBzdWJ2YWx1ZSkoe1xuICAgICAgICAgIHR5cGU6ICdzdHJvbmcnLFxuICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHF1ZXVlLCBub3cpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZVxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBkYXNoID0gJy0nXG52YXIgY29sb24gPSAnOidcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciB2ZXJ0aWNhbEJhciA9ICd8J1xuXG52YXIgbWluQ29sdW1ucyA9IDFcbnZhciBtaW5Sb3dzID0gMlxuXG52YXIgbGVmdCA9ICdsZWZ0J1xudmFyIGNlbnRlciA9ICdjZW50ZXInXG52YXIgcmlnaHQgPSAncmlnaHQnXG5cbmZ1bmN0aW9uIHRhYmxlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4XG4gIHZhciBhbGlnbm1lbnRzXG4gIHZhciBhbGlnbm1lbnRcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciByb3dcbiAgdmFyIGxlbmd0aFxuICB2YXIgbGluZXNcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGhhc0Rhc2hcbiAgdmFyIGFsaWduXG4gIHZhciBjZWxsXG4gIHZhciBwcmVhbWJsZVxuICB2YXIgbm93XG4gIHZhciBwb3NpdGlvblxuICB2YXIgbGluZUNvdW50XG4gIHZhciBsaW5lXG4gIHZhciByb3dzXG4gIHZhciB0YWJsZVxuICB2YXIgbGluZUluZGV4XG4gIHZhciBwaXBlSW5kZXhcbiAgdmFyIGZpcnN0XG5cbiAgLy8gRXhpdCB3aGVuIG5vdCBpbiBnZm0tbW9kZS5cbiAgaWYgKCFzZWxmLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBHZXQgdGhlIHJvd3MuXG4gIC8vIERldGVjdGluZyB0YWJsZXMgc29vbiBpcyBoYXJkLCBzbyB0aGVyZSBhcmUgc29tZSBjaGVja3MgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGhlcmUsIHN1Y2ggYXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJvd3MsIGFuZCBhbGxvd2VkIGNoYXJhY3RlcnMgaW4gdGhlXG4gIC8vIGFsaWdubWVudCByb3cuXG4gIGluZGV4ID0gMFxuICBsaW5lQ291bnQgPSAwXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgbGluZXMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGxpbmVJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHBpcGVJbmRleCA9IHZhbHVlLmluZGV4T2YodmVydGljYWxCYXIsIGluZGV4ICsgMSlcblxuICAgIGlmIChsaW5lSW5kZXggPT09IC0xKSB7XG4gICAgICBsaW5lSW5kZXggPSB2YWx1ZS5sZW5ndGhcbiAgICB9XG5cbiAgICBpZiAocGlwZUluZGV4ID09PSAtMSB8fCBwaXBlSW5kZXggPiBsaW5lSW5kZXgpIHtcbiAgICAgIGlmIChsaW5lQ291bnQgPCBtaW5Sb3dzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxpbmVzLnB1c2godmFsdWUuc2xpY2UoaW5kZXgsIGxpbmVJbmRleCkpXG4gICAgbGluZUNvdW50KytcbiAgICBpbmRleCA9IGxpbmVJbmRleCArIDFcbiAgfVxuXG4gIC8vIFBhcnNlIHRoZSBhbGlnbm1lbnQgcm93LlxuICBzdWJ2YWx1ZSA9IGxpbmVzLmpvaW4obGluZUZlZWQpXG4gIGFsaWdubWVudHMgPSBsaW5lcy5zcGxpY2UoMSwgMSlbMF0gfHwgW11cbiAgaW5kZXggPSAwXG4gIGxlbmd0aCA9IGFsaWdubWVudHMubGVuZ3RoXG4gIGxpbmVDb3VudC0tXG4gIGFsaWdubWVudCA9IGZhbHNlXG4gIGFsaWduID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBhbGlnbm1lbnRzLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyKSB7XG4gICAgICBoYXNEYXNoID0gbnVsbFxuXG4gICAgICBpZiAoYWxpZ25tZW50ID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduLnB1c2goYWxpZ25tZW50KVxuICAgICAgICBhbGlnbm1lbnQgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBmaXJzdCA9IGZhbHNlXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGRhc2gpIHtcbiAgICAgIGhhc0Rhc2ggPSB0cnVlXG4gICAgICBhbGlnbm1lbnQgPSBhbGlnbm1lbnQgfHwgbnVsbFxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBjb2xvbikge1xuICAgICAgaWYgKGFsaWdubWVudCA9PT0gbGVmdCkge1xuICAgICAgICBhbGlnbm1lbnQgPSBjZW50ZXJcbiAgICAgIH0gZWxzZSBpZiAoaGFzRGFzaCAmJiBhbGlnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gcmlnaHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWdubWVudCA9IGxlZnRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgIT09IGZhbHNlKSB7XG4gICAgYWxpZ24ucHVzaChhbGlnbm1lbnQpXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gd2l0aG91dCBlbm91Z2ggY29sdW1ucy5cbiAgaWYgKGFsaWduLmxlbmd0aCA8IG1pbkNvbHVtbnMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBQYXJzZSB0aGUgcm93cy5cbiAgcG9zaXRpb24gPSAtMVxuICByb3dzID0gW11cblxuICB0YWJsZSA9IGVhdChzdWJ2YWx1ZSkucmVzZXQoe3R5cGU6ICd0YWJsZScsIGFsaWduOiBhbGlnbiwgY2hpbGRyZW46IHJvd3N9KVxuXG4gIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGluZUNvdW50KSB7XG4gICAgbGluZSA9IGxpbmVzW3Bvc2l0aW9uXVxuICAgIHJvdyA9IHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119XG5cbiAgICAvLyBFYXQgYSBuZXdsaW5lIGNoYXJhY3RlciB3aGVuIHRoaXMgaXMgbm90IHRoZSBmaXJzdCByb3cuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICBlYXQobGluZUZlZWQpXG4gICAgfVxuXG4gICAgLy8gRWF0IHRoZSByb3cuXG4gICAgZWF0KGxpbmUpLnJlc2V0KHJvdywgdGFibGUpXG5cbiAgICBsZW5ndGggPSBsaW5lLmxlbmd0aCArIDFcbiAgICBpbmRleCA9IDBcbiAgICBxdWV1ZSA9ICcnXG4gICAgY2VsbCA9ICcnXG4gICAgcHJlYW1ibGUgPSB0cnVlXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IGxpbmUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICcnIHx8IGNoYXJhY3RlciA9PT0gdmVydGljYWxCYXIpIHtcbiAgICAgICAgaWYgKHByZWFtYmxlKSB7XG4gICAgICAgICAgZWF0KGNoYXJhY3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKGNlbGwgfHwgY2hhcmFjdGVyKSAmJiAhcHJlYW1ibGUpIHtcbiAgICAgICAgICAgIHN1YnZhbHVlID0gY2VsbFxuXG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUuc2xpY2UoMCwgLTEpXG4gICAgICAgICAgICAgICAgcXVldWUgPSBxdWV1ZS5jaGFyQXQocXVldWUubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgICAgICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3cgPSBlYXQubm93KClcblxuICAgICAgICAgICAgZWF0KHN1YnZhbHVlKShcbiAgICAgICAgICAgICAge3R5cGU6ICd0YWJsZUNlbGwnLCBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjZWxsLCBub3cpfSxcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWF0KHF1ZXVlICsgY2hhcmFjdGVyKVxuXG4gICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICAgIGNlbGwgPSAnJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocXVldWUpIHtcbiAgICAgICAgICBjZWxsICs9IHF1ZXVlXG4gICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbCArPSBjaGFyYWN0ZXJcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2ggJiYgaW5kZXggIT09IGxlbmd0aCAtIDIpIHtcbiAgICAgICAgICBjZWxsICs9IGxpbmUuY2hhckF0KGluZGV4ICsgMSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJlYW1ibGUgPSBmYWxzZVxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIC8vIEVhdCB0aGUgYWxpZ25tZW50IHJvdy5cbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICBlYXQobGluZUZlZWQgKyBhbGlnbm1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWJsZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dFxuXG5mdW5jdGlvbiB0ZXh0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG1ldGhvZHNcbiAgdmFyIHRva2VuaXplcnNcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBwb3NpdGlvblxuICB2YXIgdG9rZW5pemVyXG4gIHZhciBuYW1lXG4gIHZhciBtaW5cbiAgdmFyIG5vd1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtZXRob2RzID0gc2VsZi5pbmxpbmVNZXRob2RzXG4gIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoXG4gIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgaW5kZXggPSAtMVxuICBtaW4gPSB2YWx1ZS5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG5hbWUgPSBtZXRob2RzW2luZGV4XVxuXG4gICAgaWYgKG5hbWUgPT09ICd0ZXh0JyB8fCAhdG9rZW5pemVyc1tuYW1lXSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0b2tlbml6ZXIgPSB0b2tlbml6ZXJzW25hbWVdLmxvY2F0b3JcblxuICAgIGlmICghdG9rZW5pemVyKSB7XG4gICAgICBlYXQuZmlsZS5mYWlsKCdNaXNzaW5nIGxvY2F0b3I6IGAnICsgbmFtZSArICdgJylcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IHRva2VuaXplci5jYWxsKHNlbGYsIHZhbHVlLCAxKVxuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAtMSAmJiBwb3NpdGlvbiA8IG1pbikge1xuICAgICAgbWluID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIG1pbilcbiAgbm93ID0gZWF0Lm5vdygpXG5cbiAgc2VsZi5kZWNvZGUoc3VidmFsdWUsIG5vdywgaGFuZGxlcilcblxuICBmdW5jdGlvbiBoYW5kbGVyKGNvbnRlbnQsIHBvc2l0aW9uLCBzb3VyY2UpIHtcbiAgICBlYXQoc291cmNlIHx8IGNvbnRlbnQpKHt0eXBlOiAndGV4dCcsIHZhbHVlOiBjb250ZW50fSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIGRhc2ggPSAnLSdcbnZhciB1bmRlcnNjb3JlID0gJ18nXG5cbnZhciBtYXhDb3VudCA9IDNcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBtYXJrZXJDb3VudFxuICB2YXIgcXVldWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgaWYgKFxuICAgIGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiZcbiAgICBjaGFyYWN0ZXIgIT09IGRhc2ggJiZcbiAgICBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIG1hcmtlckNvdW50ID0gMVxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgIG1hcmtlckNvdW50KytcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbWFya2VyQ291bnQgPj0gbWF4Q291bnQgJiZcbiAgICAgICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpXG4gICAgKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAndGhlbWF0aWNCcmVhayd9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdXJsJylcblxubW9kdWxlLmV4cG9ydHMgPSB1cmxcbnVybC5sb2NhdG9yID0gbG9jYXRlXG51cmwubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgZXhjbGFtYXRpb25NYXJrID0gMzMgLy8gJyEnXG52YXIgYW1wZXJzYW5kID0gMzggLy8gJyYnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9IDQxIC8vICcpJ1xudmFyIGFzdGVyaXNrID0gNDIgLy8gJyonXG52YXIgY29tbWEgPSA0NCAvLyAnLCdcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgY29sb24gPSA1OCAvLyAnOidcbnZhciBzZW1pY29sb24gPSA1OSAvLyAnOydcbnZhciBxdWVzdGlvbk1hcmsgPSA2MyAvLyAnPydcbnZhciBsZXNzVGhhbiA9IDYwIC8vICc8J1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcbnZhciB0aWxkZSA9IDEyNiAvLyAnfidcblxudmFyIGxlZnRQYXJlbnRoZXNpc0NoYXJhY3RlciA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIgPSAnKSdcblxuZnVuY3Rpb24gdXJsKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgcHJldmlvdXNEb3QgPSAtMVxuICB2YXIgcHJvdG9jb2xsZXNzID0gZmFsc2VcbiAgdmFyIGRvdHNcbiAgdmFyIGxhc3RUd29QYXJ0c1N0YXJ0XG4gIHZhciBzdGFydFxuICB2YXIgaW5kZXhcbiAgdmFyIHBhdGhTdGFydFxuICB2YXIgcGF0aFxuICB2YXIgY29kZVxuICB2YXIgZW5kXG4gIHZhciBsZWZ0Q291bnRcbiAgdmFyIHJpZ2h0Q291bnRcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGNoaWxkcmVuXG4gIHZhciB1cmxcbiAgdmFyIGV4aXRcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYFdXVy5gIGRvZXNu4oCZdCB3b3JrLlxuICBpZiAodmFsdWUuc2xpY2UoMCwgNCkgPT09ICd3d3cuJykge1xuICAgIHByb3RvY29sbGVzcyA9IHRydWVcbiAgICBpbmRleCA9IDRcbiAgfSBlbHNlIGlmICh2YWx1ZS5zbGljZSgwLCA3KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cDovLycpIHtcbiAgICBpbmRleCA9IDdcbiAgfSBlbHNlIGlmICh2YWx1ZS5zbGljZSgwLCA4KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cHM6Ly8nKSB7XG4gICAgaW5kZXggPSA4XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBBY3QgYXMgaWYgdGhlIHN0YXJ0aW5nIGJvdW5kYXJ5IGlzIGEgZG90LlxuICBwcmV2aW91c0RvdCA9IGluZGV4IC0gMVxuXG4gIC8vIFBhcnNlIGEgdmFsaWQgZG9tYWluLlxuICBzdGFydCA9IGluZGV4XG4gIGRvdHMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgICAgLy8gRG90cyBtYXkgbm90IGFwcGVhciBhZnRlciBlYWNoIG90aGVyLlxuICAgICAgaWYgKHByZXZpb3VzRG90ID09PSBpbmRleCAtIDEpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZG90cy5wdXNoKGluZGV4KVxuICAgICAgcHJldmlvdXNEb3QgPSBpbmRleFxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgICApIHtcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgYnJlYWtcbiAgfVxuXG4gIC8vIElnbm9yZSBhIGZpbmFsIGRvdDpcbiAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgIGRvdHMucG9wKClcbiAgICBpbmRleC0tXG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm90IGRvdHMsIGV4aXQuXG4gIGlmIChkb3RzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGlzIGFuIHVuZGVyc2NvcmUgaW4gdGhlIGxhc3QgdHdvIGRvbWFpbiBwYXJ0cywgZXhpdDpcbiAgLy8gYHd3dy5leGFtcGxlLmNfbWAgYW5kIGB3d3cuZXhfYW1wbGUuY29tYCBhcmUgbm90IE9LLCBidXRcbiAgLy8gYHd3dy5zdWJfZG9tYWluLmV4YW1wbGUuY29tYCBpcy5cbiAgbGFzdFR3b1BhcnRzU3RhcnQgPSBkb3RzLmxlbmd0aCA8IDIgPyBzdGFydCA6IGRvdHNbZG90cy5sZW5ndGggLSAyXSArIDFcblxuICBpZiAodmFsdWUuc2xpY2UobGFzdFR3b1BhcnRzU3RhcnQsIGluZGV4KS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZW5kID0gaW5kZXhcbiAgcGF0aFN0YXJ0ID0gaW5kZXhcblxuICAvLyBQYXJzZSBhIHBhdGguXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKHdoaXRlc3BhY2UoY29kZSkgfHwgY29kZSA9PT0gbGVzc1RoYW4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gZXhjbGFtYXRpb25NYXJrIHx8XG4gICAgICBjb2RlID09PSBhc3RlcmlzayB8fFxuICAgICAgY29kZSA9PT0gY29tbWEgfHxcbiAgICAgIGNvZGUgPT09IGRvdCB8fFxuICAgICAgY29kZSA9PT0gY29sb24gfHxcbiAgICAgIGNvZGUgPT09IHF1ZXN0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZSB8fFxuICAgICAgY29kZSA9PT0gdGlsZGVcbiAgICApIHtcbiAgICAgIC8vIEVtcHR5XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZCA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgaW5kZXggPSBlbmRcblxuICAvLyBJZiB0aGUgcGF0aCBlbmRzIGluIGEgY2xvc2luZyBwYXJlbiwgYW5kIHRoZSBjb3VudCBvZiBjbG9zaW5nIHBhcmVucyBpc1xuICAvLyBoaWdoZXIgdGhhbiB0aGUgb3BlbmluZyBjb3VudCwgdGhlbiByZW1vdmUgdGhlIHN1cGVmbHVvdXMgY2xvc2luZyBwYXJlbnMuXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICBwYXRoID0gdmFsdWUuc2xpY2UocGF0aFN0YXJ0LCBpbmRleClcbiAgICBsZWZ0Q291bnQgPSBjY291bnQocGF0aCwgbGVmdFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuICAgIHJpZ2h0Q291bnQgPSBjY291bnQocGF0aCwgcmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlcilcblxuICAgIHdoaWxlIChyaWdodENvdW50ID4gbGVmdENvdW50KSB7XG4gICAgICBpbmRleCA9IHBhdGhTdGFydCArIHBhdGgubGFzdEluZGV4T2YocmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlcilcbiAgICAgIHBhdGggPSB2YWx1ZS5zbGljZShwYXRoU3RhcnQsIGluZGV4KVxuICAgICAgcmlnaHRDb3VudC0tXG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSA9PT0gc2VtaWNvbG9uKSB7XG4gICAgLy8gR2l0SHViIGRvZXNu4oCZdCBkb2N1bWVudCB0aGlzLCBidXQgZmluYWwgc2VtaWNvbG9ucyBhcmVu4oCZdCBwYXJldCBvZiB0aGVcbiAgICAvLyBVUkwgZWl0aGVyLlxuICAgIGluZGV4LS1cblxuICAgIC8vIC8vIElmIHRoZSBwYXRoIGVuZHMgaW4gd2hhdCBsb29rcyBsaWtlIGFuIGVudGl0eSwgaXTigJlzIG5vdCBwYXJ0IG9mIHRoZSBwYXRoLlxuICAgIGlmIChhbHBoYWJldGljYWwodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpKSkge1xuICAgICAgZW5kID0gaW5kZXggLSAyXG5cbiAgICAgIHdoaWxlIChhbHBoYWJldGljYWwodmFsdWUuY2hhckNvZGVBdChlbmQpKSkge1xuICAgICAgICBlbmQtLVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuY2hhckNvZGVBdChlbmQpID09PSBhbXBlcnNhbmQpIHtcbiAgICAgICAgaW5kZXggPSBlbmRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250ZW50ID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG4gIHVybCA9IGRlY29kZShjb250ZW50LCB7bm9uVGVybWluYXRlZDogZmFsc2V9KVxuXG4gIGlmIChwcm90b2NvbGxlc3MpIHtcbiAgICB1cmwgPSAnaHR0cDovLycgKyB1cmxcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIHVybC5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cbiAgY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSlcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoY29udGVudCkoe3R5cGU6ICdsaW5rJywgdGl0bGU6IG51bGwsIHVybDogdXJsLCBjaGlsZHJlbjogY2hpbGRyZW59KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBDb25zdHJ1Y3QgYSB0b2tlbml6ZXIuICBUaGlzIGNyZWF0ZXMgYm90aCBgdG9rZW5pemVJbmxpbmVgIGFuZCBgdG9rZW5pemVCbG9ja2AuXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcmV0dXJuIHRva2VuaXplXG5cbiAgLy8gVG9rZW5pemVyIGZvciBhIGJvdW5kIGB0eXBlYC5cbiAgZnVuY3Rpb24gdG9rZW5pemUodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIG9mZnNldCA9IHNlbGYub2Zmc2V0XG4gICAgdmFyIHRva2VucyA9IFtdXG4gICAgdmFyIG1ldGhvZHMgPSBzZWxmW3R5cGUgKyAnTWV0aG9kcyddXG4gICAgdmFyIHRva2VuaXplcnMgPSBzZWxmW3R5cGUgKyAnVG9rZW5pemVycyddXG4gICAgdmFyIGxpbmUgPSBsb2NhdGlvbi5saW5lXG4gICAgdmFyIGNvbHVtbiA9IGxvY2F0aW9uLmNvbHVtblxuICAgIHZhciBpbmRleFxuICAgIHZhciBsZW5ndGhcbiAgICB2YXIgbWV0aG9kXG4gICAgdmFyIG5hbWVcbiAgICB2YXIgbWF0Y2hlZFxuICAgIHZhciB2YWx1ZUxlbmd0aFxuXG4gICAgLy8gVHJpbSB3aGl0ZSBzcGFjZSBvbmx5IGxpbmVzLlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0b2tlbnNcbiAgICB9XG5cbiAgICAvLyBFeHBvc2Ugb24gYGVhdGAuXG4gICAgZWF0Lm5vdyA9IG5vd1xuICAgIGVhdC5maWxlID0gc2VsZi5maWxlXG5cbiAgICAvLyBTeW5jIGluaXRpYWwgb2Zmc2V0LlxuICAgIHVwZGF0ZVBvc2l0aW9uKCcnKVxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGB2YWx1ZWAsIGFuZCBpdGVyYXRlIG92ZXIgYWxsIHRva2VuaXplcnMuICBXaGVuIG9uZSBlYXRzXG4gICAgLy8gc29tZXRoaW5nLCByZS1pdGVyYXRlIHdpdGggdGhlIHJlbWFpbmluZyB2YWx1ZS4gIElmIG5vIHRva2VuaXplciBlYXRzLFxuICAgIC8vIHNvbWV0aGluZyBmYWlsZWQgKHNob3VsZCBub3QgaGFwcGVuKSBhbmQgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICB3aGlsZSAodmFsdWUpIHtcbiAgICAgIGluZGV4ID0gLTFcbiAgICAgIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoXG4gICAgICBtYXRjaGVkID0gZmFsc2VcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdXG4gICAgICAgIG1ldGhvZCA9IHRva2VuaXplcnNbbmFtZV1cblxuICAgICAgICAvLyBQcmV2aW91c2x5LCB3ZSBoYWQgY29uc3RydWN0cyBzdWNoIGFzIGZvb3Rub3RlcyBhbmQgWUFNTCB0aGF0IHVzZWRcbiAgICAgICAgLy8gdGhlc2UgcHJvcGVydGllcy5cbiAgICAgICAgLy8gVGhvc2UgYXJlIG5vdyBleHRlcm5hbCAocGx1cyB0aGVyZSBhcmUgdXNlcmxhbmQgZXh0ZW5zaW9ucyksIHRoYXQgbWF5XG4gICAgICAgIC8vIHN0aWxsIHVzZSB0aGVtLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgbWV0aG9kICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qub25seUF0U3RhcnQgfHwgc2VsZi5hdFN0YXJ0KSAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm5vdEluTGlzdCB8fCAhc2VsZi5pbkxpc3QpICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qubm90SW5CbG9jayB8fCAhc2VsZi5pbkJsb2NrKSAmJlxuICAgICAgICAgICghbWV0aG9kLm5vdEluTGluayB8fCAhc2VsZi5pbkxpbmspXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBtZXRob2QuYXBwbHkoc2VsZiwgW2VhdCwgdmFsdWVdKVxuXG4gICAgICAgICAgbWF0Y2hlZCA9IHZhbHVlTGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGhcblxuICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICBzZWxmLmZpbGUuZmFpbChuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AnKSwgZWF0Lm5vdygpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuZW9mID0gbm93KClcblxuICAgIHJldHVybiB0b2tlbnNcblxuICAgIC8vIFVwZGF0ZSBsaW5lLCBjb2x1bW4sIGFuZCBvZmZzZXQgYmFzZWQgb24gYHZhbHVlYC5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IC0xXG4gICAgICB2YXIgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nKVxuXG4gICAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpbmUrK1xuICAgICAgICBsYXN0SW5kZXggPSBpbmRleFxuICAgICAgICBpbmRleCA9IHN1YnZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSlcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gc3VidmFsdWUubGVuZ3RoIC0gbGFzdEluZGV4XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5lIGluIG9mZnNldCkge1xuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvbHVtbiArPSBvZmZzZXRbbGluZV1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPD0gb2Zmc2V0W2xpbmVdKSB7XG4gICAgICAgICAgY29sdW1uID0gb2Zmc2V0W2xpbmVdICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IG9mZnNldC4gIENhbGxlZCBiZWZvcmUgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBlYXRlbiB0byByZXRyaWV2ZSB0aGVcbiAgICAvLyByYW5nZeKAmXMgb2Zmc2V0cy5cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgaW5kZW50YXRpb24gPSBbXVxuICAgICAgdmFyIHBvcyA9IGxpbmUgKyAxXG5cbiAgICAgIC8vIERvbmUuICBDYWxsZWQgd2hlbiB0aGUgbGFzdCBjaGFyYWN0ZXIgaXMgZWF0ZW4gdG8gcmV0cmlldmUgdGhlIHJhbmdl4oCZc1xuICAgICAgLy8gb2Zmc2V0cy5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gbGluZSArIDFcblxuICAgICAgICB3aGlsZSAocG9zIDwgbGFzdCkge1xuICAgICAgICAgIGluZGVudGF0aW9uLnB1c2goKG9mZnNldFtwb3NdIHx8IDApICsgMSlcblxuICAgICAgICAgIHBvcysrXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZW50YXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgZnVuY3Rpb24gbm93KCkge1xuICAgICAgdmFyIHBvcyA9IHtsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbn1cblxuICAgICAgcG9zLm9mZnNldCA9IHNlbGYudG9PZmZzZXQocG9zKVxuXG4gICAgICByZXR1cm4gcG9zXG4gICAgfVxuXG4gICAgLy8gU3RvcmUgcG9zaXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbm9kZS5cbiAgICBmdW5jdGlvbiBQb3NpdGlvbihzdGFydCkge1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gICAgICB0aGlzLmVuZCA9IG5vdygpXG4gICAgfVxuXG4gICAgLy8gVGhyb3cgd2hlbiBhIHZhbHVlIGlzIGluY29ycmVjdGx5IGVhdGVuLiAgVGhpcyBzaG91bGRu4oCZdCBoYXBwZW4gYnV0IHdpbGxcbiAgICAvLyB0aHJvdyBvbiBuZXcsIGluY29ycmVjdCBydWxlcy5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVhdChzdWJ2YWx1ZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodmFsdWUuc2xpY2UoMCwgc3VidmFsdWUubGVuZ3RoKSAhPT0gc3VidmFsdWUpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSBzdGFjay10cmFjZS5cbiAgICAgICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0luY29ycmVjdGx5IGVhdGVuIHZhbHVlOiBwbGVhc2UgcmVwb3J0IHRoaXMgd2FybmluZyBvbiBodHRwczovL2dpdC5pby92ZzVGdCdcbiAgICAgICAgICApLFxuICAgICAgICAgIG5vdygpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXJrIHBvc2l0aW9uIGFuZCBwYXRjaCBgbm9kZS5wb3NpdGlvbmAuXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICB2YXIgYmVmb3JlID0gbm93KClcblxuICAgICAgcmV0dXJuIHVwZGF0ZVxuXG4gICAgICAvLyBBZGQgdGhlIHBvc2l0aW9uIHRvIGEgbm9kZS5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZShub2RlLCBpbmRlbnQpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gbm9kZS5wb3NpdGlvblxuICAgICAgICB2YXIgc3RhcnQgPSBwcmV2aW91cyA/IHByZXZpb3VzLnN0YXJ0IDogYmVmb3JlXG4gICAgICAgIHZhciBjb21iaW5lZCA9IFtdXG4gICAgICAgIHZhciBuID0gcHJldmlvdXMgJiYgcHJldmlvdXMuZW5kLmxpbmVcbiAgICAgICAgdmFyIGwgPSBiZWZvcmUubGluZVxuXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpXG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFscmVhZHkgYSBgcG9zaXRpb25gLCB0aGlzIG5vZGUgd2FzIG1lcmdlZC4gIEZpeGluZ1xuICAgICAgICAvLyBgc3RhcnRgIHdhc27igJl0IGhhcmQsIGJ1dCB0aGUgaW5kZW50IGlzIGRpZmZlcmVudC4gIEVzcGVjaWFsbHlcbiAgICAgICAgLy8gYmVjYXVzZSBzb21lIGluZm9ybWF0aW9uLCB0aGUgaW5kZW50IGJldHdlZW4gYG5gIGFuZCBgbGAgd2FzbuKAmXRcbiAgICAgICAgLy8gdHJhY2tlZC4gIEx1Y2tpbHksIHRoYXQgc3BhY2UgaXMgKHNob3VsZCBiZT8pIGVtcHR5LCBzbyB3ZSBjYW5cbiAgICAgICAgLy8gc2FmZWx5IGNoZWNrIGZvciBpdCBub3cuXG4gICAgICAgIGlmIChwcmV2aW91cyAmJiBpbmRlbnQgJiYgcHJldmlvdXMuaW5kZW50KSB7XG4gICAgICAgICAgY29tYmluZWQgPSBwcmV2aW91cy5pbmRlbnRcblxuICAgICAgICAgIGlmIChuIDwgbCkge1xuICAgICAgICAgICAgd2hpbGUgKCsrbiA8IGwpIHtcbiAgICAgICAgICAgICAgY29tYmluZWQucHVzaCgob2Zmc2V0W25dIHx8IDApICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tYmluZWQucHVzaChiZWZvcmUuY29sdW1uKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZGVudCA9IGNvbWJpbmVkLmNvbmNhdChpbmRlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnBvc2l0aW9uLmluZGVudCA9IGluZGVudCB8fCBbXVxuXG4gICAgICAgIHJldHVybiBub2RlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGBub2RlYCB0byBgcGFyZW50YHMgY2hpbGRyZW4gb3IgdG8gYHRva2Vuc2AuICBQZXJmb3JtcyBtZXJnZXMgd2hlcmVcbiAgICAvLyBwb3NzaWJsZS5cbiAgICBmdW5jdGlvbiBhZGQobm9kZSwgcGFyZW50KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0b2tlbnNcbiAgICAgIHZhciBwcmV2aW91cyA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgICB2YXIgZm5cblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cyAmJlxuICAgICAgICBub2RlLnR5cGUgPT09IHByZXZpb3VzLnR5cGUgJiZcbiAgICAgICAgKG5vZGUudHlwZSA9PT0gJ3RleHQnIHx8IG5vZGUudHlwZSA9PT0gJ2Jsb2NrcXVvdGUnKSAmJlxuICAgICAgICBtZXJnZWFibGUocHJldmlvdXMpICYmXG4gICAgICAgIG1lcmdlYWJsZShub2RlKVxuICAgICAgKSB7XG4gICAgICAgIGZuID0gbm9kZS50eXBlID09PSAndGV4dCcgPyBtZXJnZVRleHQgOiBtZXJnZUJsb2NrcXVvdGVcbiAgICAgICAgbm9kZSA9IGZuLmNhbGwoc2VsZiwgcHJldmlvdXMsIG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICE9PSBwcmV2aW91cykge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmF0U3RhcnQgJiYgdG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzZWxmLmV4aXRTdGFydCgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGBzdWJ2YWx1ZWAgZnJvbSBgdmFsdWVgLiAgYHN1YnZhbHVlYCBtdXN0IGJlIGF0IHRoZSBzdGFydCBvZlxuICAgIC8vIGB2YWx1ZWAuXG4gICAgZnVuY3Rpb24gZWF0KHN1YnZhbHVlKSB7XG4gICAgICB2YXIgaW5kZW50ID0gZ2V0T2Zmc2V0KClcbiAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpXG4gICAgICB2YXIgY3VycmVudCA9IG5vdygpXG5cbiAgICAgIHZhbGlkYXRlRWF0KHN1YnZhbHVlKVxuXG4gICAgICBhcHBseS5yZXNldCA9IHJlc2V0XG4gICAgICByZXNldC50ZXN0ID0gdGVzdFxuICAgICAgYXBwbHkudGVzdCA9IHRlc3RcblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShzdWJ2YWx1ZS5sZW5ndGgpXG5cbiAgICAgIHVwZGF0ZVBvc2l0aW9uKHN1YnZhbHVlKVxuXG4gICAgICBpbmRlbnQgPSBpbmRlbnQoKVxuXG4gICAgICByZXR1cm4gYXBwbHlcblxuICAgICAgLy8gQWRkIHRoZSBnaXZlbiBhcmd1bWVudHMsIGFkZCBgcG9zaXRpb25gIHRvIHRoZSByZXR1cm5lZCBub2RlLCBhbmRcbiAgICAgIC8vIHJldHVybiB0aGUgbm9kZS5cbiAgICAgIGZ1bmN0aW9uIGFwcGx5KG5vZGUsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gcG9zKGFkZChwb3Mobm9kZSksIHBhcmVudCksIGluZGVudClcbiAgICAgIH1cblxuICAgICAgLy8gRnVuY3Rpb25zIGp1c3QgbGlrZSBhcHBseSwgYnV0IHJlc2V0cyB0aGUgY29udGVudDogdGhlIGxpbmUgYW5kXG4gICAgICAvLyBjb2x1bW4gYXJlIHJldmVyc2VkLCBhbmQgdGhlIGVhdGVuIHZhbHVlIGlzIHJlLWFkZGVkLiAgIFRoaXMgaXNcbiAgICAgIC8vIHVzZWZ1bCBmb3Igbm9kZXMgd2l0aCBhIHNpbmdsZSB0eXBlIG9mIGNvbnRlbnQsIHN1Y2ggYXMgbGlzdHMgYW5kXG4gICAgICAvLyB0YWJsZXMuICBTZWUgYGFwcGx5YCBhYm92ZSBmb3Igd2hhdCBwYXJhbWV0ZXJzIGFyZSBleHBlY3RlZC5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB2YXIgbm9kZSA9IGFwcGx5LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcblxuICAgICAgICBsaW5lID0gY3VycmVudC5saW5lXG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uXG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZVxuXG4gICAgICAgIHJldHVybiBub2RlXG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3QgdGhlIHBvc2l0aW9uLCBhZnRlciBlYXRpbmcsIGFuZCByZXZlcnNlIHRvIGEgbm90LWVhdGVuIHN0YXRlLlxuICAgICAgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBvcyh7fSlcblxuICAgICAgICBsaW5lID0gY3VycmVudC5saW5lXG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uXG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZVxuXG4gICAgICAgIHJldHVybiByZXN1bHQucG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgd2hldGhlciBhIG5vZGUgaXMgbWVyZ2VhYmxlIHdpdGggYWRqYWNlbnQgbm9kZXMuXG5mdW5jdGlvbiBtZXJnZWFibGUobm9kZSkge1xuICB2YXIgc3RhcnRcbiAgdmFyIGVuZFxuXG4gIGlmIChub2RlLnR5cGUgIT09ICd0ZXh0JyB8fCAhbm9kZS5wb3NpdGlvbikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdGFydCA9IG5vZGUucG9zaXRpb24uc3RhcnRcbiAgZW5kID0gbm9kZS5wb3NpdGlvbi5lbmRcblxuICAvLyBPbmx5IG1lcmdlIG5vZGVzIHdoaWNoIG9jY3VweSB0aGUgc2FtZSBzaXplIGFzIHRoZWlyIGB2YWx1ZWAuXG4gIHJldHVybiAoXG4gICAgc3RhcnQubGluZSAhPT0gZW5kLmxpbmUgfHwgZW5kLmNvbHVtbiAtIHN0YXJ0LmNvbHVtbiA9PT0gbm9kZS52YWx1ZS5sZW5ndGhcbiAgKVxufVxuXG4vLyBNZXJnZSB0d28gdGV4dCBub2RlczogYG5vZGVgIGludG8gYHByZXZgLlxuZnVuY3Rpb24gbWVyZ2VUZXh0KHByZXZpb3VzLCBub2RlKSB7XG4gIHByZXZpb3VzLnZhbHVlICs9IG5vZGUudmFsdWVcblxuICByZXR1cm4gcHJldmlvdXNcbn1cblxuLy8gTWVyZ2UgdHdvIGJsb2NrcXVvdGVzOiBgbm9kZWAgaW50byBgcHJldmAsIHVubGVzcyBpbiBDb21tb25NYXJrIG9yIGdmbSBtb2Rlcy5cbmZ1bmN0aW9uIG1lcmdlQmxvY2txdW90ZShwcmV2aW91cywgbm9kZSkge1xuICBpZiAodGhpcy5vcHRpb25zLmNvbW1vbm1hcmsgfHwgdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBwcmV2aW91cy5jaGlsZHJlbiA9IHByZXZpb3VzLmNoaWxkcmVuLmNvbmNhdChub2RlLmNoaWxkcmVuKVxuXG4gIHJldHVybiBwcmV2aW91c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbi8vIEZhY3RvcnkgdG8gZGUtZXNjYXBlIGEgdmFsdWUsIGJhc2VkIG9uIGEgbGlzdCBhdCBga2V5YCBpbiBgY3R4YC5cbmZ1bmN0aW9uIGZhY3RvcnkoY3R4LCBrZXkpIHtcbiAgcmV0dXJuIHVuZXNjYXBlXG5cbiAgLy8gRGUtZXNjYXBlIGEgc3RyaW5nIHVzaW5nIHRoZSBleHByZXNzaW9uIGF0IGBrZXlgIGluIGBjdHhgLlxuICBmdW5jdGlvbiB1bmVzY2FwZSh2YWx1ZSkge1xuICAgIHZhciBwcmV2aW91cyA9IDBcbiAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGJhY2tzbGFzaClcbiAgICB2YXIgZXNjYXBlID0gY3R4W2tleV1cbiAgICB2YXIgcXVldWUgPSBbXVxuICAgIHZhciBjaGFyYWN0ZXJcblxuICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldmlvdXMsIGluZGV4KSlcbiAgICAgIHByZXZpb3VzID0gaW5kZXggKyAxXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocHJldmlvdXMpXG5cbiAgICAgIC8vIElmIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyIGlzIG5vdCBhIHZhbGlkIGVzY2FwZSwgYWRkIHRoZSBzbGFzaC5cbiAgICAgIGlmICghY2hhcmFjdGVyIHx8IGVzY2FwZS5pbmRleE9mKGNoYXJhY3RlcikgPT09IC0xKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goYmFja3NsYXNoKVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoYmFja3NsYXNoLCBwcmV2aW91cyArIDEpXG4gICAgfVxuXG4gICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwcmV2aW91cykpXG5cbiAgICByZXR1cm4gcXVldWUuam9pbignJylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb25cblxudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHNwYWNlU2l6ZSA9IDFcbnZhciB0YWJTaXplID0gNFxuXG4vLyBHZXRzIGluZGVudGF0aW9uIGluZm9ybWF0aW9uIGZvciBhIGxpbmUuXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBpbmRlbnQgPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBzdG9wcyA9IHt9XG4gIHZhciBzaXplXG5cbiAgd2hpbGUgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICBzaXplID0gY2hhcmFjdGVyID09PSB0YWIgPyB0YWJTaXplIDogc3BhY2VTaXplXG5cbiAgICBpbmRlbnQgKz0gc2l6ZVxuXG4gICAgaWYgKHNpemUgPiAxKSB7XG4gICAgICBpbmRlbnQgPSBNYXRoLmZsb29yKGluZGVudCAvIHNpemUpICogc2l6ZVxuICAgIH1cblxuICAgIHN0b3BzW2luZGVudF0gPSBpbmRleFxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtpbmRlbnQ6IGluZGVudCwgc3RvcHM6IHN0b3BzfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhdHRyaWJ1dGVOYW1lID0gJ1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qJ1xudmFyIHVucXVvdGVkID0gJ1teXCJcXCc9PD5gXFxcXHUwMDAwLVxcXFx1MDAyMF0rJ1xudmFyIHNpbmdsZVF1b3RlZCA9IFwiJ1teJ10qJ1wiXG52YXIgZG91YmxlUXVvdGVkID0gJ1wiW15cIl0qXCInXG52YXIgYXR0cmlidXRlVmFsdWUgPVxuICAnKD86JyArIHVucXVvdGVkICsgJ3wnICsgc2luZ2xlUXVvdGVkICsgJ3wnICsgZG91YmxlUXVvdGVkICsgJyknXG52YXIgYXR0cmlidXRlID1cbiAgJyg/OlxcXFxzKycgKyBhdHRyaWJ1dGVOYW1lICsgJyg/OlxcXFxzKj1cXFxccyonICsgYXR0cmlidXRlVmFsdWUgKyAnKT8pJ1xudmFyIG9wZW5UYWcgPSAnPFtBLVphLXpdW0EtWmEtejAtOVxcXFwtXSonICsgYXR0cmlidXRlICsgJypcXFxccypcXFxcLz8+J1xudmFyIGNsb3NlVGFnID0gJzxcXFxcL1tBLVphLXpdW0EtWmEtejAtOVxcXFwtXSpcXFxccyo+J1xudmFyIGNvbW1lbnQgPSAnPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPidcbnZhciBwcm9jZXNzaW5nID0gJzxbP10uKj9bP10+J1xudmFyIGRlY2xhcmF0aW9uID0gJzwhW0EtWmEtel0rXFxcXHMrW14+XSo+J1xudmFyIGNkYXRhID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPidcblxuZXhwb3J0cy5vcGVuQ2xvc2VUYWcgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5UYWcgKyAnfCcgKyBjbG9zZVRhZyArICcpJylcblxuZXhwb3J0cy50YWcgPSBuZXcgUmVnRXhwKFxuICAnXig/OicgK1xuICAgIG9wZW5UYWcgK1xuICAgICd8JyArXG4gICAgY2xvc2VUYWcgK1xuICAgICd8JyArXG4gICAgY29tbWVudCArXG4gICAgJ3wnICtcbiAgICBwcm9jZXNzaW5nICtcbiAgICAnfCcgK1xuICAgIGRlY2xhcmF0aW9uICtcbiAgICAnfCcgK1xuICAgIGNkYXRhICtcbiAgICAnKSdcbilcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVycnVwdFxuXG5mdW5jdGlvbiBpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBjdHgsIHBhcmFtZXRlcnMpIHtcbiAgdmFyIGxlbmd0aCA9IGludGVycnVwdG9ycy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGludGVycnVwdG9yXG4gIHZhciBjb25maWdcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGludGVycnVwdG9yID0gaW50ZXJydXB0b3JzW2luZGV4XVxuICAgIGNvbmZpZyA9IGludGVycnVwdG9yWzFdIHx8IHt9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcucGVkYW50aWMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29uZmlnLnBlZGFudGljICE9PSBjdHgub3B0aW9ucy5wZWRhbnRpY1xuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcuY29tbW9ubWFyayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBjb25maWcuY29tbW9ubWFyayAhPT0gY3R4Lm9wdGlvbnMuY29tbW9ubWFya1xuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodG9rZW5pemVyc1tpbnRlcnJ1cHRvclswXV0uYXBwbHkoY3R4LCBwYXJhbWV0ZXJzKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29sbGFwc2VXaGl0ZVNwYWNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG4vLyBOb3JtYWxpemUgYW4gaWRlbnRpZmllci4gIENvbGxhcHNlcyBtdWx0aXBsZSB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzIGludG8gYVxuLy8gc2luZ2xlIHNwYWNlLCBhbmQgcmVtb3ZlcyBjYXNpbmcuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIGNvbGxhcHNlV2hpdGVTcGFjZSh2YWx1ZSkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgZ2V0SW5kZW50ID0gcmVxdWlyZSgnLi9nZXQtaW5kZW50YXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG4vLyBSZW1vdmUgdGhlIG1pbmltdW0gaW5kZW50IGZyb20gZXZlcnkgbGluZSBpbiBgdmFsdWVgLiAgU3VwcG9ydHMgYm90aCB0YWIsXG4vLyBzcGFjZWQsIGFuZCBtaXhlZCBpbmRlbnRhdGlvbiAoYXMgd2VsbCBhcyBwb3NzaWJsZSkuXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSwgbWF4aW11bSkge1xuICB2YXIgdmFsdWVzID0gdmFsdWUuc3BsaXQobGluZUZlZWQpXG4gIHZhciBwb3NpdGlvbiA9IHZhbHVlcy5sZW5ndGggKyAxXG4gIHZhciBtaW5JbmRlbnQgPSBJbmZpbml0eVxuICB2YXIgbWF0cml4ID0gW11cbiAgdmFyIGluZGV4XG4gIHZhciBpbmRlbnRhdGlvblxuICB2YXIgc3RvcHNcbiAgdmFyIHBhZGRpbmdcblxuICB2YWx1ZXMudW5zaGlmdChyZXBlYXQoc3BhY2UsIG1heGltdW0pICsgZXhjbGFtYXRpb25NYXJrKVxuXG4gIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgaW5kZW50YXRpb24gPSBnZXRJbmRlbnQodmFsdWVzW3Bvc2l0aW9uXSlcblxuICAgIG1hdHJpeFtwb3NpdGlvbl0gPSBpbmRlbnRhdGlvbi5zdG9wc1xuXG4gICAgaWYgKHRyaW0odmFsdWVzW3Bvc2l0aW9uXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQpIHtcbiAgICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQgPiAwICYmIGluZGVudGF0aW9uLmluZGVudCA8IG1pbkluZGVudCkge1xuICAgICAgICBtaW5JbmRlbnQgPSBpbmRlbnRhdGlvbi5pbmRlbnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWluSW5kZW50ID0gSW5maW5pdHlcblxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAobWluSW5kZW50ICE9PSBJbmZpbml0eSkge1xuICAgIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aFxuXG4gICAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICAgIHN0b3BzID0gbWF0cml4W3Bvc2l0aW9uXVxuICAgICAgaW5kZXggPSBtaW5JbmRlbnRcblxuICAgICAgd2hpbGUgKGluZGV4ICYmICEoaW5kZXggaW4gc3RvcHMpKSB7XG4gICAgICAgIGluZGV4LS1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0cmltKHZhbHVlc1twb3NpdGlvbl0pLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICBtaW5JbmRlbnQgJiZcbiAgICAgICAgaW5kZXggIT09IG1pbkluZGVudFxuICAgICAgKSB7XG4gICAgICAgIHBhZGRpbmcgPSB0YWJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZGRpbmcgPSAnJ1xuICAgICAgfVxuXG4gICAgICB2YWx1ZXNbcG9zaXRpb25dID1cbiAgICAgICAgcGFkZGluZyArIHZhbHVlc1twb3NpdGlvbl0uc2xpY2UoaW5kZXggaW4gc3RvcHMgPyBzdG9wc1tpbmRleF0gKyAxIDogMClcbiAgICB9XG4gIH1cblxuICB2YWx1ZXMuc2hpZnQoKVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihsaW5lRmVlZClcbn1cbiIsIi8qIVxuICogcmVwZWF0LXN0cmluZyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvcmVwZWF0LXN0cmluZz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlc3VsdHMgY2FjaGVcbiAqL1xuXG52YXIgcmVzID0gJyc7XG52YXIgY2FjaGU7XG5cbi8qKlxuICogRXhwb3NlIGByZXBlYXRgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXBlYXQ7XG5cbi8qKlxuICogUmVwZWF0IHRoZSBnaXZlbiBgc3RyaW5nYCB0aGUgc3BlY2lmaWVkIGBudW1iZXJgXG4gKiBvZiB0aW1lcy5cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcbiAqIHJlcGVhdCgnQScsIDUpO1xuICogLy89PiBBQUFBQVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJpbmdgIFRoZSBzdHJpbmcgdG8gcmVwZWF0XG4gKiBAcGFyYW0ge051bWJlcn0gYG51bWJlcmAgVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBSZXBlYXRlZCBzdHJpbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgbnVtKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIH1cblxuICAvLyBjb3ZlciBjb21tb24sIHF1aWNrIHVzZSBjYXNlc1xuICBpZiAobnVtID09PSAxKSByZXR1cm4gc3RyO1xuICBpZiAobnVtID09PSAyKSByZXR1cm4gc3RyICsgc3RyO1xuXG4gIHZhciBtYXggPSBzdHIubGVuZ3RoICogbnVtO1xuICBpZiAoY2FjaGUgIT09IHN0ciB8fCB0eXBlb2YgY2FjaGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FjaGUgPSBzdHI7XG4gICAgcmVzID0gJyc7XG4gIH0gZWxzZSBpZiAocmVzLmxlbmd0aCA+PSBtYXgpIHtcbiAgICByZXR1cm4gcmVzLnN1YnN0cigwLCBtYXgpO1xuICB9XG5cbiAgd2hpbGUgKG1heCA+IHJlcy5sZW5ndGggJiYgbnVtID4gMSkge1xuICAgIGlmIChudW0gJiAxKSB7XG4gICAgICByZXMgKz0gc3RyO1xuICAgIH1cblxuICAgIG51bSA+Pj0gMTtcbiAgICBzdHIgKz0gc3RyO1xuICB9XG5cbiAgcmVzICs9IHN0cjtcbiAgcmVzID0gcmVzLnN1YnN0cigwLCBtYXgpO1xuICByZXR1cm4gcmVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZnVuY3Rpb24gcmVwbGFjZUV4dChucGF0aCwgZXh0KSB7XG4gIGlmICh0eXBlb2YgbnBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgaWYgKG5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIHZhciBuRmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKG5wYXRoLCBwYXRoLmV4dG5hbWUobnBhdGgpKSArIGV4dDtcbiAgcmV0dXJuIHBhdGguam9pbihwYXRoLmRpcm5hbWUobnBhdGgpLCBuRmlsZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGxhY2VFeHQ7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIENvbnN0cnVjdCBhIHN0YXRlIGB0b2dnbGVyYDogYSBmdW5jdGlvbiB3aGljaCBpbnZlcnNlcyBgcHJvcGVydHlgIGluIGNvbnRleHRcbi8vIGJhc2VkIG9uIGl0cyBjdXJyZW50IHZhbHVlLlxuLy8gVGhlIGJ5IGB0b2dnbGVyYCByZXR1cm5lZCBmdW5jdGlvbiByZXN0b3JlcyB0aGF0IHZhbHVlLlxuZnVuY3Rpb24gZmFjdG9yeShrZXksIHN0YXRlLCBjdHgpIHtcbiAgcmV0dXJuIGVudGVyXG5cbiAgZnVuY3Rpb24gZW50ZXIoKSB7XG4gICAgdmFyIGNvbnRleHQgPSBjdHggfHwgdGhpc1xuICAgIHZhciBjdXJyZW50ID0gY29udGV4dFtrZXldXG5cbiAgICBjb250ZXh0W2tleV0gPSAhc3RhdGVcblxuICAgIHJldHVybiBleGl0XG5cbiAgICBmdW5jdGlvbiBleGl0KCkge1xuICAgICAgY29udGV4dFtrZXldID0gY3VycmVudFxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1odG1sNCcpXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRhbmdlcm91cyA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzLmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuZW5jb2RlLmVzY2FwZSA9IGVzY2FwZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gQ2hhcmFjdGVyc1xudmFyIGVxdWFsc1RvID0gNjFcblxuLy8gTGlzdCBvZiBlbmZvcmNlZCBlc2NhcGVzLlxudmFyIGVzY2FwZXMgPSBbJ1wiJywgXCInXCIsICc8JywgJz4nLCAnJicsICdgJ11cblxuLy8gTWFwIG9mIGNoYXJhY3RlcnMgdG8gbmFtZXMuXG52YXIgY2hhcmFjdGVycyA9IGNvbnN0cnVjdCgpXG5cbi8vIERlZmF1bHQgZXNjYXBlcy5cbnZhciBkZWZhdWx0RXNjYXBlcyA9IHRvRXhwcmVzc2lvbihlc2NhcGVzKVxuXG4vLyBTdXJyb2dhdGUgcGFpcnMuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2dcblxuLy8gTm9uLUFTQ0lJIGNoYXJhY3RlcnMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleCwgdW5pY29ybi9uby1oZXgtZXNjYXBlXG52YXIgYm1wID0gL1tcXHgwMS1cXHRcXHgwQlxcZlxceDBFLVxceDFGXFx4N0ZcXHg4MVxceDhEXFx4OEZcXHg5MFxceDlEXFx4QTAtXFx1RkZGRl0vZ1xuXG4vLyBFbmNvZGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc3Vic2V0ID0gc2V0dGluZ3Muc3Vic2V0XG4gIHZhciBzZXQgPSBzdWJzZXQgPyB0b0V4cHJlc3Npb24oc3Vic2V0KSA6IGRlZmF1bHRFc2NhcGVzXG4gIHZhciBlc2NhcGVPbmx5ID0gc2V0dGluZ3MuZXNjYXBlT25seVxuICB2YXIgb21pdCA9IHNldHRpbmdzLm9taXRPcHRpb25hbFNlbWljb2xvbnNcblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2V0LCByZXBsYWNlKVxuXG4gIGlmIChzdWJzZXQgfHwgZXNjYXBlT25seSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3Vycm9nYXRlUGFpciwgcmVwbGFjZVN1cnJvZ2F0ZVBhaXIpXG4gICAgLnJlcGxhY2UoYm1wLCByZXBsYWNlKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdXJyb2dhdGVQYWlyKHBhaXIsIHBvcywgdmFsKSB7XG4gICAgcmV0dXJuIHRvSGV4UmVmZXJlbmNlKFxuICAgICAgKHBhaXIuY2hhckNvZGVBdCgwKSAtIDB4ZDgwMCkgKiAweDQwMCArXG4gICAgICAgIHBhaXIuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgIDB4ZGMwMCArXG4gICAgICAgIDB4MTAwMDAsXG4gICAgICB2YWwuY2hhckNvZGVBdChwb3MgKyAyKSxcbiAgICAgIG9taXRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGNoYXIsIHBvcywgdmFsKSB7XG4gICAgcmV0dXJuIG9uZShjaGFyLCB2YWwuY2hhckNvZGVBdChwb3MgKyAxKSwgc2V0dGluZ3MpXG4gIH1cbn1cblxuLy8gU2hvcnRjdXQgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBIVE1MLlxuZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG4gIHJldHVybiBlbmNvZGUodmFsdWUsIHtlc2NhcGVPbmx5OiB0cnVlLCB1c2VOYW1lZFJlZmVyZW5jZXM6IHRydWV9KVxufVxuXG4vLyBFbmNvZGUgYGNoYXJgIGFjY29yZGluZyB0byBgb3B0aW9uc2AuXG5mdW5jdGlvbiBvbmUoY2hhciwgbmV4dCwgb3B0aW9ucykge1xuICB2YXIgc2hvcnRlc3QgPSBvcHRpb25zLnVzZVNob3J0ZXN0UmVmZXJlbmNlc1xuICB2YXIgb21pdCA9IG9wdGlvbnMub21pdE9wdGlvbmFsU2VtaWNvbG9uc1xuICB2YXIgbmFtZWRcbiAgdmFyIGNvZGVcbiAgdmFyIG51bWVyaWNcbiAgdmFyIGRlY2ltYWxcblxuICBpZiAoKHNob3J0ZXN0IHx8IG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzKSAmJiBvd24uY2FsbChjaGFyYWN0ZXJzLCBjaGFyKSkge1xuICAgIG5hbWVkID0gdG9OYW1lZChjaGFyYWN0ZXJzW2NoYXJdLCBuZXh0LCBvbWl0LCBvcHRpb25zLmF0dHJpYnV0ZSlcbiAgfVxuXG4gIGlmIChzaG9ydGVzdCB8fCAhbmFtZWQpIHtcbiAgICBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApXG4gICAgbnVtZXJpYyA9IHRvSGV4UmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpXG5cbiAgICAvLyBVc2UgdGhlIHNob3J0ZXN0IG51bWVyaWMgcmVmZXJlbmNlIHdoZW4gcmVxdWVzdGVkLlxuICAgIC8vIEEgc2ltcGxlIGFsZ29yaXRobSB3b3VsZCB1c2UgZGVjaW1hbCBmb3IgYWxsIGNvZGUgcG9pbnRzIHVuZGVyIDEwMCwgYXNcbiAgICAvLyB0aG9zZSBhcmUgc2hvcnRlciB0aGFuIGhleGFkZWNpbWFsOlxuICAgIC8vXG4gICAgLy8gKiBgJiM5OTtgIHZzIGAmI3g2MztgIChkZWNpbWFsIHNob3J0ZXIpXG4gICAgLy8gKiBgJiMxMDA7YCB2cyBgJiN4NjQ7YCAoZXF1YWwpXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBiZWNhdXNlIHdlIHRha2UgYG5leHRgIGludG8gY29uc2lkZXJhdGlvbiB3aGVuIGBvbWl0YCBpcyB1c2VkLFxuICAgIC8vIEFuZCBpdCB3b3VsZCBiZSBwb3NzaWJsZSB0aGF0IGRlY2ltYWxzIGFyZSBzaG9ydGVyIG9uIGJpZ2dlciB2YWx1ZXMgYXNcbiAgICAvLyB3ZWxsIGlmIGBuZXh0YCBpcyBoZXhhZGVjaW1hbCBidXQgbm90IGRlY2ltYWwsIHdlIGluc3RlYWQgY29tcGFyZSBib3RoLlxuICAgIGlmIChzaG9ydGVzdCkge1xuICAgICAgZGVjaW1hbCA9IHRvRGVjaW1hbFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KVxuXG4gICAgICBpZiAoZGVjaW1hbC5sZW5ndGggPCBudW1lcmljLmxlbmd0aCkge1xuICAgICAgICBudW1lcmljID0gZGVjaW1hbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChuYW1lZCAmJiAoIXNob3J0ZXN0IHx8IG5hbWVkLmxlbmd0aCA8IG51bWVyaWMubGVuZ3RoKSkge1xuICAgIHJldHVybiBuYW1lZFxuICB9XG5cbiAgcmV0dXJuIG51bWVyaWNcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGFuIGVudGl0eS5cbmZ1bmN0aW9uIHRvTmFtZWQobmFtZSwgbmV4dCwgb21pdCwgYXR0cmlidXRlKSB7XG4gIHZhciB2YWx1ZSA9ICcmJyArIG5hbWVcblxuICBpZiAoXG4gICAgb21pdCAmJlxuICAgIG93bi5jYWxsKGxlZ2FjeSwgbmFtZSkgJiZcbiAgICBkYW5nZXJvdXMuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiZcbiAgICAoIWF0dHJpYnV0ZSB8fCAobmV4dCAmJiBuZXh0ICE9PSBlcXVhbHNUbyAmJiAhYWxwaGFudW1lcmljYWwobmV4dCkpKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICc7J1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYSBoZXhhZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9IZXhSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdCkge1xuICB2YXIgdmFsdWUgPSAnJiN4JyArIGNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG9taXQgJiYgbmV4dCAmJiAhaGV4YWRlY2ltYWwobmV4dCkgPyB2YWx1ZSA6IHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGRlY2ltYWwgY2hhcmFjdGVyIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIHRvRGVjaW1hbFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmIycgKyBTdHJpbmcoY29kZSlcbiAgcmV0dXJuIG9taXQgJiYgbmV4dCAmJiAhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gQ3JlYXRlIGFuIGV4cHJlc3Npb24gZm9yIGBjaGFyYWN0ZXJzYC5cbmZ1bmN0aW9uIHRvRXhwcmVzc2lvbihjaGFyYWN0ZXJzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdbJyArIGNoYXJhY3RlcnMuam9pbignJykgKyAnXScsICdnJylcbn1cblxuLy8gQ29uc3RydWN0IHRoZSBtYXAuXG5mdW5jdGlvbiBjb25zdHJ1Y3QoKSB7XG4gIHZhciBjaGFycyA9IHt9XG4gIHZhciBuYW1lXG5cbiAgZm9yIChuYW1lIGluIGVudGl0aWVzKSB7XG4gICAgY2hhcnNbZW50aXRpZXNbbmFtZV1dID0gbmFtZVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0cmltVHJhaWxpbmdMaW5lc1xuXG52YXIgbGluZSA9ICdcXG4nXG5cbi8vIFJlbW92ZSBmaW5hbCBuZXdsaW5lIGNoYXJhY3RlcnMgZnJvbSBgdmFsdWVgLlxuZnVuY3Rpb24gdHJpbVRyYWlsaW5nTGluZXModmFsdWUpIHtcbiAgdmFyIHZhbCA9IFN0cmluZyh2YWx1ZSlcbiAgdmFyIGluZGV4ID0gdmFsLmxlbmd0aFxuXG4gIHdoaWxlICh2YWwuY2hhckF0KC0taW5kZXgpID09PSBsaW5lKSB7XG4gICAgLy8gRW1wdHlcbiAgfVxuXG4gIHJldHVybiB2YWwuc2xpY2UoMCwgaW5kZXggKyAxKVxufVxuIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSB0cm91Z2hcblxudHJvdWdoLndyYXAgPSB3cmFwXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbi8vIENyZWF0ZSBuZXcgbWlkZGxld2FyZS5cbmZ1bmN0aW9uIHRyb3VnaCgpIHtcbiAgdmFyIGZucyA9IFtdXG4gIHZhciBtaWRkbGV3YXJlID0ge31cblxuICBtaWRkbGV3YXJlLnJ1biA9IHJ1blxuICBtaWRkbGV3YXJlLnVzZSA9IHVzZVxuXG4gIHJldHVybiBtaWRkbGV3YXJlXG5cbiAgLy8gUnVuIGBmbnNgLiAgTGFzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcGxldGlvbiBoYW5kbGVyLlxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgaW5wdXQgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgLTEpXG4gICAgdmFyIGRvbmUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAodHlwZW9mIGRvbmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24gYXMgbGFzdCBhcmd1bWVudCwgbm90ICcgKyBkb25lKVxuICAgIH1cblxuICAgIG5leHQuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG5cbiAgICAvLyBSdW4gdGhlIG5leHQgYGZuYCwgaWYgYW55LlxuICAgIGZ1bmN0aW9uIG5leHQoZXJyKSB7XG4gICAgICB2YXIgZm4gPSBmbnNbKytpbmRleF1cbiAgICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICAgIHZhciB2YWx1ZXMgPSBwYXJhbXMuc2xpY2UoMSlcbiAgICAgIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAgIHZhciBwb3MgPSAtMVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGRvbmUoZXJyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ29weSBub24tbnVsbHkgaW5wdXQgaW50byB2YWx1ZXMuXG4gICAgICB3aGlsZSAoKytwb3MgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHZhbHVlc1twb3NdID09PSBudWxsIHx8IHZhbHVlc1twb3NdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWx1ZXNbcG9zXSA9IGlucHV0W3Bvc11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dCA9IHZhbHVlc1xuXG4gICAgICAvLyBOZXh0IG9yIGRvbmUuXG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgd3JhcChmbiwgbmV4dCkuYXBwbHkobnVsbCwgaW5wdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBgZm5gIHRvIHRoZSBsaXN0LlxuICBmdW5jdGlvbiB1c2UoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGBmbmAgdG8gYmUgYSBmdW5jdGlvbiwgbm90ICcgKyBmbilcbiAgICB9XG5cbiAgICBmbnMucHVzaChmbilcblxuICAgIHJldHVybiBtaWRkbGV3YXJlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBcblxuLy8gV3JhcCBgZm5gLlxuLy8gQ2FuIGJlIHN5bmMgb3IgYXN5bmM7IHJldHVybiBhIHByb21pc2UsIHJlY2VpdmUgYSBjb21wbGV0aW9uIGhhbmRsZXIsIHJldHVyblxuLy8gbmV3IHZhbHVlcyBhbmQgZXJyb3JzLlxuZnVuY3Rpb24gd3JhcChmbiwgY2FsbGJhY2spIHtcbiAgdmFyIGludm9rZWRcblxuICByZXR1cm4gd3JhcHBlZFxuXG4gIGZ1bmN0aW9uIHdyYXBwZWQoKSB7XG4gICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgIHZhciBjYWxsYmFjayA9IGZuLmxlbmd0aCA+IHBhcmFtcy5sZW5ndGhcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRvbmUpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KG51bGwsIHBhcmFtcylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gV2VsbCwgdGhpcyBpcyBxdWl0ZSB0aGUgcGlja2xlLlxuICAgICAgLy8gYGZuYCByZWNlaXZlZCBhIGNhbGxiYWNrIGFuZCBpbnZva2VkIGl0ICh0aHVzIGNvbnRpbnVpbmcgdGhlIHBpcGVsaW5lKSxcbiAgICAgIC8vIGJ1dCBsYXRlciBhbHNvIHRocmV3IGFuIGVycm9yLlxuICAgICAgLy8gV2XigJlyZSBub3QgYWJvdXQgdG8gcmVzdGFydCB0aGUgcGlwZWxpbmUgYWdhaW4sIHNvIHRoZSBvbmx5IHRoaW5nIGxlZnRcbiAgICAgIC8vIHRvIGRvIGlzIHRvIHRocm93IHRoZSB0aGluZyBpbnN0ZWFkLlxuICAgICAgaWYgKGNhbGxiYWNrICYmIGludm9rZWQpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvbmUoZXJyb3IpXG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0LnRoZW4odGhlbiwgZG9uZSlcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZG9uZShyZXN1bHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYG5leHRgLCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaWYgKCFpbnZva2VkKSB7XG4gICAgICBpbnZva2VkID0gdHJ1ZVxuXG4gICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBkb25lYCB3aXRoIG9uZSB2YWx1ZS5cbiAgLy8gVHJhY2tzIGlmIGFuIGVycm9yIGlzIHBhc3NlZCwgdG9vLlxuICBmdW5jdGlvbiB0aGVuKHZhbHVlKSB7XG4gICAgZG9uZShudWxsLCB2YWx1ZSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxubW9kdWxlLmV4cG9ydHMgPSB1bmhlcml0XG5cbi8vIENyZWF0ZSBhIGN1c3RvbSBjb25zdHJ1Y3RvciB3aGljaCBjYW4gYmUgbW9kaWZpZWQgd2l0aG91dCBhZmZlY3RpbmcgdGhlXG4vLyBvcmlnaW5hbCBjbGFzcy5cbmZ1bmN0aW9uIHVuaGVyaXQoU3VwZXIpIHtcbiAgdmFyIHJlc3VsdFxuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuXG4gIGluaGVyaXRzKE9mLCBTdXBlcilcbiAgaW5oZXJpdHMoRnJvbSwgT2YpXG5cbiAgLy8gQ2xvbmUgdmFsdWVzLlxuICByZXN1bHQgPSBPZi5wcm90b3R5cGVcblxuICBmb3IgKGtleSBpbiByZXN1bHQpIHtcbiAgICB2YWx1ZSA9IHJlc3VsdFtrZXldXG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSAnY29uY2F0JyBpbiB2YWx1ZSA/IHZhbHVlLmNvbmNhdCgpIDogeHRlbmQodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9mXG5cbiAgLy8gQ29uc3RydWN0b3IgYWNjZXB0aW5nIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpdHNlbGYgaXMgYW4gYGFyZ3VtZW50c2BcbiAgLy8gb2JqZWN0LlxuICBmdW5jdGlvbiBGcm9tKHBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4gU3VwZXIuYXBwbHkodGhpcywgcGFyYW1ldGVycylcbiAgfVxuXG4gIC8vIENvbnN0cnVjdG9yIGFjY2VwdGluZyB2YXJpYWRpYyBhcmd1bWVudHMuXG4gIGZ1bmN0aW9uIE9mKCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBPZikpIHtcbiAgICAgIHJldHVybiBuZXcgRnJvbShhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBiYWlsID0gcmVxdWlyZSgnYmFpbCcpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKVxudmFyIHBsYWluID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqJylcbnZhciB0cm91Z2ggPSByZXF1aXJlKCd0cm91Z2gnKVxudmFyIHZmaWxlID0gcmVxdWlyZSgndmZpbGUnKVxuXG4vLyBFeHBvc2UgYSBmcm96ZW4gcHJvY2Vzc29yLlxubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkuZnJlZXplKClcblxudmFyIHNsaWNlID0gW10uc2xpY2VcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBQcm9jZXNzIHBpcGVsaW5lLlxudmFyIHBpcGVsaW5lID0gdHJvdWdoKClcbiAgLnVzZShwaXBlbGluZVBhcnNlKVxuICAudXNlKHBpcGVsaW5lUnVuKVxuICAudXNlKHBpcGVsaW5lU3RyaW5naWZ5KVxuXG5mdW5jdGlvbiBwaXBlbGluZVBhcnNlKHAsIGN0eCkge1xuICBjdHgudHJlZSA9IHAucGFyc2UoY3R4LmZpbGUpXG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lUnVuKHAsIGN0eCwgbmV4dCkge1xuICBwLnJ1bihjdHgudHJlZSwgY3R4LmZpbGUsIGRvbmUpXG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnRyZWUgPSB0cmVlXG4gICAgICBjdHguZmlsZSA9IGZpbGVcbiAgICAgIG5leHQoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVN0cmluZ2lmeShwLCBjdHgpIHtcbiAgdmFyIHJlc3VsdCA9IHAuc3RyaW5naWZ5KGN0eC50cmVlLCBjdHguZmlsZSlcbiAgdmFyIGZpbGUgPSBjdHguZmlsZVxuXG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAvLyBFbXB0eS5cbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJyB8fCBidWZmZXIocmVzdWx0KSkge1xuICAgIGZpbGUuY29udGVudHMgPSByZXN1bHRcbiAgfSBlbHNlIHtcbiAgICBmaWxlLnJlc3VsdCA9IHJlc3VsdFxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmlyc3QgcHJvY2Vzc29yLlxuZnVuY3Rpb24gdW5pZmllZCgpIHtcbiAgdmFyIGF0dGFjaGVycyA9IFtdXG4gIHZhciB0cmFuc2Zvcm1lcnMgPSB0cm91Z2goKVxuICB2YXIgbmFtZXNwYWNlID0ge31cbiAgdmFyIGZyb3plbiA9IGZhbHNlXG4gIHZhciBmcmVlemVJbmRleCA9IC0xXG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvLyBMb2NrLlxuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLy8gUGx1Z2lucy5cbiAgcHJvY2Vzc29yLmF0dGFjaGVycyA9IGF0dGFjaGVyc1xuICBwcm9jZXNzb3IudXNlID0gdXNlXG5cbiAgLy8gQVBJLlxuICBwcm9jZXNzb3IucGFyc2UgPSBwYXJzZVxuICBwcm9jZXNzb3Iuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gIHByb2Nlc3Nvci5ydW4gPSBydW5cbiAgcHJvY2Vzc29yLnJ1blN5bmMgPSBydW5TeW5jXG4gIHByb2Nlc3Nvci5wcm9jZXNzID0gcHJvY2Vzc1xuICBwcm9jZXNzb3IucHJvY2Vzc1N5bmMgPSBwcm9jZXNzU3luY1xuXG4gIC8vIEV4cG9zZS5cbiAgcmV0dXJuIHByb2Nlc3NvclxuXG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgYmFzZWQgb24gdGhlIHByb2Nlc3NvciBpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgZnVuY3Rpb24gcHJvY2Vzc29yKCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHVuaWZpZWQoKVxuICAgIHZhciBsZW5ndGggPSBhdHRhY2hlcnMubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBkZXN0aW5hdGlvbi51c2UuYXBwbHkobnVsbCwgYXR0YWNoZXJzW2luZGV4XSlcbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5kYXRhKGV4dGVuZCh0cnVlLCB7fSwgbmFtZXNwYWNlKSlcblxuICAgIHJldHVybiBkZXN0aW5hdGlvblxuICB9XG5cbiAgLy8gRnJlZXplOiB1c2VkIHRvIHNpZ25hbCBhIHByb2Nlc3NvciB0aGF0IGhhcyBmaW5pc2hlZCBjb25maWd1cmF0aW9uLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgdGFrZSB1bmlmaWVkIGl0c2VsZjogaXTigJlzIGZyb3plbi5cbiAgLy8gUGx1Z2lucyBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGl0LlxuICAvLyBSYXRoZXIsIGl0IHNob3VsZCBiZSBleHRlbmRlZCwgYnkgaW52b2tpbmcgaXQsIGJlZm9yZSBtb2RpZnlpbmcgaXQuXG4gIC8vXG4gIC8vIEluIGVzc2VuY2UsIGFsd2F5cyBpbnZva2UgdGhpcyB3aGVuIGV4cG9ydGluZyBhIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gZnJlZXplKCkge1xuICAgIHZhciB2YWx1ZXNcbiAgICB2YXIgcGx1Z2luXG4gICAgdmFyIG9wdGlvbnNcbiAgICB2YXIgdHJhbnNmb3JtZXJcblxuICAgIGlmIChmcm96ZW4pIHtcbiAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICB9XG5cbiAgICB3aGlsZSAoKytmcmVlemVJbmRleCA8IGF0dGFjaGVycy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlcyA9IGF0dGFjaGVyc1tmcmVlemVJbmRleF1cbiAgICAgIHBsdWdpbiA9IHZhbHVlc1swXVxuICAgICAgb3B0aW9ucyA9IHZhbHVlc1sxXVxuICAgICAgdHJhbnNmb3JtZXIgPSBudWxsXG5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWx1ZXNbMV0gPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgdHJhbnNmb3JtZXIgPSBwbHVnaW4uYXBwbHkocHJvY2Vzc29yLCB2YWx1ZXMuc2xpY2UoMSkpXG5cbiAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJhbnNmb3JtZXJzLnVzZSh0cmFuc2Zvcm1lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmcm96ZW4gPSB0cnVlXG4gICAgZnJlZXplSW5kZXggPSBJbmZpbml0eVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuICB9XG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICAvLyBHZXR0ZXIgLyBzZXR0ZXIgZm9yIHByb2Nlc3Nvci1zcGVjaWZpYyBpbmZvcm10aW9uLlxuICBmdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFNldCBga2V5YC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuXG4gICAgICAgIG5hbWVzcGFjZVtrZXldID0gdmFsdWVcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBga2V5YC5cbiAgICAgIHJldHVybiAob3duLmNhbGwobmFtZXNwYWNlLCBrZXkpICYmIG5hbWVzcGFjZVtrZXldKSB8fCBudWxsXG4gICAgfVxuXG4gICAgLy8gU2V0IHNwYWNlLlxuICAgIGlmIChrZXkpIHtcbiAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuICAgICAgbmFtZXNwYWNlID0ga2V5XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgLy8gR2V0IHNwYWNlLlxuICAgIHJldHVybiBuYW1lc3BhY2VcbiAgfVxuXG4gIC8vIFBsdWdpbiBtYW5hZ2VtZW50LlxuICAvL1xuICAvLyBQYXNzIGl0OlxuICAvLyAqICAgYW4gYXR0YWNoZXIgYW5kIG9wdGlvbnMsXG4gIC8vICogICBhIHByZXNldCxcbiAgLy8gKiAgIGEgbGlzdCBvZiBwcmVzZXRzLCBhdHRhY2hlcnMsIGFuZCBhcmd1bWVudHMgKGxpc3Qgb2YgYXR0YWNoZXJzIGFuZFxuICAvLyAgICAgb3B0aW9ucykuXG4gIGZ1bmN0aW9uIHVzZSh2YWx1ZSkge1xuICAgIHZhciBzZXR0aW5nc1xuXG4gICAgYXNzZXJ0VW5mcm96ZW4oJ3VzZScsIGZyb3plbilcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICBhZGRMaXN0KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICBuYW1lc3BhY2Uuc2V0dGluZ3MgPSBleHRlbmQobmFtZXNwYWNlLnNldHRpbmdzIHx8IHt9LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG5cbiAgICBmdW5jdGlvbiBhZGRQcmVzZXQocmVzdWx0KSB7XG4gICAgICBhZGRMaXN0KHJlc3VsdC5wbHVnaW5zKVxuXG4gICAgICBpZiAocmVzdWx0LnNldHRpbmdzKSB7XG4gICAgICAgIHNldHRpbmdzID0gZXh0ZW5kKHNldHRpbmdzIHx8IHt9LCByZXN1bHQuc2V0dGluZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFkZFBsdWdpbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhZGRQbHVnaW4uYXBwbHkobnVsbCwgdmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdChwbHVnaW5zKSB7XG4gICAgICB2YXIgbGVuZ3RoXG4gICAgICB2YXIgaW5kZXhcblxuICAgICAgaWYgKHBsdWdpbnMgPT09IG51bGwgfHwgcGx1Z2lucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICBsZW5ndGggPSBwbHVnaW5zLmxlbmd0aFxuICAgICAgICBpbmRleCA9IC0xXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhZGQocGx1Z2luc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBsaXN0IG9mIHBsdWdpbnMsIG5vdCBgJyArIHBsdWdpbnMgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbiwgdmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IGZpbmQocGx1Z2luKVxuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHBsYWluKGVudHJ5WzFdKSAmJiBwbGFpbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGV4dGVuZChlbnRyeVsxXSwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeVsxXSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2hlcnMucHVzaChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChwbHVnaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudHJ5XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZW50cnkgPSBhdHRhY2hlcnNbaW5kZXhdXG5cbiAgICAgIGlmIChlbnRyeVswXSA9PT0gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlciwgJ3BhcnNlJykpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLlxuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgICAgIHRyZWUgPSB0cmVlIHx8IG5vZGVcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBydW4obm9kZSwgZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3J1blN5bmMnLCAncnVuJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbiAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICAgIHJlc3VsdCA9IHRyZWVcbiAgICB9XG4gIH1cblxuICAvLyBTdHJpbmdpZnkgYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlXG4gIC8vIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeShub2RlLCBkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgQ29tcGlsZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgQ29tcGlsZXIgPSBwcm9jZXNzb3IuQ29tcGlsZXJcbiAgICBhc3NlcnRDb21waWxlcignc3RyaW5naWZ5JywgQ29tcGlsZXIpXG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuXG4gICAgaWYgKG5ld2FibGUoQ29tcGlsZXIsICdjb21waWxlJykpIHtcbiAgICAgIHJldHVybiBuZXcgQ29tcGlsZXIobm9kZSwgZmlsZSkuY29tcGlsZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBpbGVyKG5vZGUsIGZpbGUpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICB9XG5cbiAgLy8gUGFyc2UgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pIGludG8gYSB1bmlzdCBub2RlIHVzaW5nXG4gIC8vIHRoZSBgUGFyc2VyYCBvbiB0aGUgcHJvY2Vzc29yLCB0aGVuIHJ1biB0cmFuc2Zvcm1zIG9uIHRoYXQgbm9kZSwgYW5kXG4gIC8vIGNvbXBpbGUgdGhlIHJlc3VsdGluZyBub2RlIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IsIGFuZFxuICAvLyBzdG9yZSB0aGF0IHJlc3VsdCBvbiB0aGUgdmZpbGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoZG9jLCBjYikge1xuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzJywgcHJvY2Vzc29yLlBhcnNlcilcbiAgICBhc3NlcnRDb21waWxlcigncHJvY2VzcycsIHByb2Nlc3Nvci5Db21waWxlcilcblxuICAgIGlmICghY2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcbiAgICB9XG5cbiAgICBleGVjdXRvcihudWxsLCBjYilcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICAgIHBpcGVsaW5lLnJ1bihwcm9jZXNzb3IsIHtmaWxlOiBmaWxlfSwgZG9uZSlcblxuICAgICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUoZmlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyB0aGUgZ2l2ZW4gZG9jdW1lbnQgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTeW5jKGRvYykge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIGZpbGVcblxuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuICAgIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICBwcm9jZXNzKGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdwcm9jZXNzU3luYycsICdwcm9jZXNzJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gZmlsZVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYSBjb25zdHJ1Y3Rvci5cbmZ1bmN0aW9uIG5ld2FibGUodmFsdWUsIG5hbWUpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB2YWx1ZS5wcm90b3R5cGUgJiZcbiAgICAvLyBBIGZ1bmN0aW9uIHdpdGgga2V5cyBpbiBpdHMgcHJvdG90eXBlIGlzIHByb2JhYmx5IGEgY29uc3RydWN0b3IuXG4gICAgLy8gQ2xhc3Nlc+KAmSBwcm90b3R5cGUgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUsIHNvIHdlIGNoZWNrIGlmIHNvbWUgdmFsdWVcbiAgICAvLyBleGlzdHMgaW4gdGhlIHByb3RvdHlwZS5cbiAgICAoa2V5cyh2YWx1ZS5wcm90b3R5cGUpIHx8IG5hbWUgaW4gdmFsdWUucHJvdG90eXBlKVxuICApXG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0IHdpdGgga2V5cy5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIGtleVxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gQXNzZXJ0IGEgcGFyc2VyIGlzIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCBQYXJzZXIpIHtcbiAgaWYgKHR5cGVvZiBQYXJzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBQYXJzZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYSBjb21waWxlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRDb21waWxlcihuYW1lLCBDb21waWxlcikge1xuICBpZiAodHlwZW9mIENvbXBpbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgQ29tcGlsZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhlIHByb2Nlc3NvciBpcyBub3QgZnJvemVuLlxuZnVuY3Rpb24gYXNzZXJ0VW5mcm96ZW4obmFtZSwgZnJvemVuKSB7XG4gIGlmIChmcm96ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IGludm9rZSBgJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnYCBvbiBhIGZyb3plbiBwcm9jZXNzb3IuXFxuQ3JlYXRlIGEgbmV3IHByb2Nlc3NvciBmaXJzdCwgYnkgaW52b2tpbmcgaXQ6IHVzZSBgcHJvY2Vzc29yKClgIGluc3RlYWQgb2YgYHByb2Nlc3NvcmAuJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgYG5vZGVgIGlzIGEgdW5pc3Qgbm9kZS5cbmZ1bmN0aW9uIGFzc2VydE5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgdHlwZW9mIG5vZGUudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIGdvdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYGNvbXBsZXRlYCBpcyBgdHJ1ZWAuXG5mdW5jdGlvbiBhc3NlcnREb25lKG5hbWUsIGFzeW5jTmFtZSwgY29tcGxldGUpIHtcbiAgaWYgKCFjb21wbGV0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBmaW5pc2hlZCBhc3luYy4gVXNlIGAnICsgYXN5bmNOYW1lICsgJ2AgaW5zdGVhZCdcbiAgICApXG4gIH1cbn1cbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG5cdHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVQb3NpdGlvblxuXG5mdW5jdGlvbiByZW1vdmVQb3NpdGlvbihub2RlLCBmb3JjZSkge1xuICB2aXNpdChub2RlLCBmb3JjZSA/IGhhcmQgOiBzb2Z0KVxuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiBoYXJkKG5vZGUpIHtcbiAgZGVsZXRlIG5vZGUucG9zaXRpb25cbn1cblxuZnVuY3Rpb24gc29mdChub2RlKSB7XG4gIG5vZGUucG9zaXRpb24gPSB1bmRlZmluZWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIC8vIE5vdGhpbmcuXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAncG9zaXRpb24nKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ3R5cGUnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZS5wb3NpdGlvbilcbiAgfVxuXG4gIC8vIFBvc2l0aW9uLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdzdGFydCcpIHx8IG93bi5jYWxsKHZhbHVlLCAnZW5kJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUpXG4gIH1cblxuICAvLyBQb2ludC5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnbGluZScpIHx8IG93bi5jYWxsKHZhbHVlLCAnY29sdW1uJykpIHtcbiAgICByZXR1cm4gcG9pbnQodmFsdWUpXG4gIH1cblxuICAvLyA/XG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBwb2ludChwb2ludCkge1xuICBpZiAoIXBvaW50IHx8IHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcpIHtcbiAgICBwb2ludCA9IHt9XG4gIH1cblxuICByZXR1cm4gaW5kZXgocG9pbnQubGluZSkgKyAnOicgKyBpbmRleChwb2ludC5jb2x1bW4pXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICBpZiAoIXBvcyB8fCB0eXBlb2YgcG9zICE9PSAnb2JqZWN0Jykge1xuICAgIHBvcyA9IHt9XG4gIH1cblxuICByZXR1cm4gcG9pbnQocG9zLnN0YXJ0KSArICctJyArIHBvaW50KHBvcy5lbmQpXG59XG5cbmZ1bmN0aW9uIGluZGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAxXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcblxuICBvbmUodHJlZSwgbnVsbCwgW10pXG5cbiAgLy8gVmlzaXQgYSBzaW5nbGUgbm9kZS5cbiAgZnVuY3Rpb24gb25lKG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHN1YnJlc3VsdFxuXG4gICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgc3VicmVzdWx0ID0gdG9SZXN1bHQoYWxsKG5vZGUuY2hpbGRyZW4sIHBhcmVudHMuY29uY2F0KG5vZGUpKSlcbiAgICAgIHJldHVybiBzdWJyZXN1bHRbMF0gPT09IEVYSVQgPyBzdWJyZXN1bHQgOiByZXN1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBWaXNpdCBjaGlsZHJlbiBpbiBgcGFyZW50YC5cbiAgZnVuY3Rpb24gYWxsKGNoaWxkcmVuLCBwYXJlbnRzKSB7XG4gICAgdmFyIG1pbiA9IC0xXG4gICAgdmFyIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG4gICAgdmFyIGluZGV4ID0gKHJldmVyc2UgPyBjaGlsZHJlbi5sZW5ndGggOiBtaW4pICsgc3RlcFxuICAgIHZhciByZXN1bHRcblxuICAgIHdoaWxlIChpbmRleCA+IG1pbiAmJiBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gb25lKGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudHMpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHR5cGVvZiByZXN1bHRbMV0gPT09ICdudW1iZXInID8gcmVzdWx0WzFdIDogaW5kZXggKyBzdGVwXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0XG5cbnZhciB2aXNpdFBhcmVudHMgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKVxuXG52YXIgQ09OVElOVUUgPSB2aXNpdFBhcmVudHMuQ09OVElOVUVcbnZhciBTS0lQID0gdmlzaXRQYXJlbnRzLlNLSVBcbnZhciBFWElUID0gdmlzaXRQYXJlbnRzLkVYSVRcblxudmlzaXQuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXQuU0tJUCA9IFNLSVBcbnZpc2l0LkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0KHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICB2YXIgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGxcbiAgICByZXR1cm4gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbmZ1bmN0aW9uIGZhY3RvcnkoZmlsZSkge1xuICB2YXIgY29udGVudHMgPSBpbmRpY2VzKFN0cmluZyhmaWxlKSlcblxuICByZXR1cm4ge1xuICAgIHRvUG9zaXRpb246IG9mZnNldFRvUG9zaXRpb25GYWN0b3J5KGNvbnRlbnRzKSxcbiAgICB0b09mZnNldDogcG9zaXRpb25Ub09mZnNldEZhY3RvcnkoY29udGVudHMpXG4gIH1cbn1cblxuLy8gRmFjdG9yeSB0byBnZXQgdGhlIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGZvciBgb2Zmc2V0YCBpbiB0aGUgYm91bmRcbi8vIGluZGljZXMuXG5mdW5jdGlvbiBvZmZzZXRUb1Bvc2l0aW9uRmFjdG9yeShpbmRpY2VzKSB7XG4gIHJldHVybiBvZmZzZXRUb1Bvc2l0aW9uXG5cbiAgLy8gR2V0IHRoZSBsaW5lIGFuZCBjb2x1bW4tYmFzZWQgYHBvc2l0aW9uYCBmb3IgYG9mZnNldGAgaW4gdGhlIGJvdW5kIGluZGljZXMuXG4gIGZ1bmN0aW9uIG9mZnNldFRvUG9zaXRpb24ob2Zmc2V0KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGhcblxuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGluZGljZXNbaW5kZXhdID4gb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGluZTogaW5kZXggKyAxLFxuICAgICAgICAgIGNvbHVtbjogb2Zmc2V0IC0gKGluZGljZXNbaW5kZXggLSAxXSB8fCAwKSArIDEsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IHRoZSBgb2Zmc2V0YCBmb3IgYSBsaW5lIGFuZCBjb2x1bW4tYmFzZWQgYHBvc2l0aW9uYCBpbiB0aGVcbi8vIGJvdW5kIGluZGljZXMuXG5mdW5jdGlvbiBwb3NpdGlvblRvT2Zmc2V0RmFjdG9yeShpbmRpY2VzKSB7XG4gIHJldHVybiBwb3NpdGlvblRvT2Zmc2V0XG5cbiAgLy8gR2V0IHRoZSBgb2Zmc2V0YCBmb3IgYSBsaW5lIGFuZCBjb2x1bW4tYmFzZWQgYHBvc2l0aW9uYCBpbiB0aGUgYm91bmRcbiAgLy8gaW5kaWNlcy5cbiAgZnVuY3Rpb24gcG9zaXRpb25Ub09mZnNldChwb3NpdGlvbikge1xuICAgIHZhciBsaW5lID0gcG9zaXRpb24gJiYgcG9zaXRpb24ubGluZVxuICAgIHZhciBjb2x1bW4gPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi5jb2x1bW5cblxuICAgIGlmICghaXNOYU4obGluZSkgJiYgIWlzTmFOKGNvbHVtbikgJiYgbGluZSAtIDEgaW4gaW5kaWNlcykge1xuICAgICAgcmV0dXJuIChpbmRpY2VzW2xpbmUgLSAyXSB8fCAwKSArIGNvbHVtbiAtIDEgfHwgMFxuICAgIH1cblxuICAgIHJldHVybiAtMVxuICB9XG59XG5cbi8vIEdldCBpbmRpY2VzIG9mIGxpbmUtYnJlYWtzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBpbmRpY2VzKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCdcXG4nKVxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXN1bHQucHVzaChpbmRleCArIDEpXG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCdcXG4nLCBpbmRleCArIDEpXG4gIH1cblxuICByZXN1bHQucHVzaCh2YWx1ZS5sZW5ndGggKyAxKVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZNZXNzYWdlXG5cbi8vIEluaGVyaXQgZnJvbSBgRXJyb3IjYC5cbmZ1bmN0aW9uIFZNZXNzYWdlUHJvdG90eXBlKCkge31cblZNZXNzYWdlUHJvdG90eXBlLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZVxuVk1lc3NhZ2UucHJvdG90eXBlID0gbmV3IFZNZXNzYWdlUHJvdG90eXBlKClcblxuLy8gTWVzc2FnZSBwcm9wZXJ0aWVzLlxudmFyIHByb3RvID0gVk1lc3NhZ2UucHJvdG90eXBlXG5cbnByb3RvLmZpbGUgPSAnJ1xucHJvdG8ubmFtZSA9ICcnXG5wcm90by5yZWFzb24gPSAnJ1xucHJvdG8ubWVzc2FnZSA9ICcnXG5wcm90by5zdGFjayA9ICcnXG5wcm90by5mYXRhbCA9IG51bGxcbnByb3RvLmNvbHVtbiA9IG51bGxcbnByb3RvLmxpbmUgPSBudWxsXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBWTWVzc2FnZS5cbi8vXG4vLyBOb3RlOiBXZSBjYW5ub3QgaW52b2tlIGBFcnJvcmAgb24gdGhlIGNyZWF0ZWQgY29udGV4dCwgYXMgdGhhdCBhZGRzIHJlYWRvbmx5XG4vLyBgbGluZWAgYW5kIGBjb2x1bW5gIGF0dHJpYnV0ZXMgb24gU2FmYXJpIDksIHRodXMgdGhyb3dpbmcgYW5kIGZhaWxpbmcgdGhlXG4vLyBkYXRhLlxuZnVuY3Rpb24gVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBwYXJ0c1xuICB2YXIgcmFuZ2VcbiAgdmFyIGxvY2F0aW9uXG5cbiAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBvcmlnaW4gPSBwb3NpdGlvblxuICAgIHBvc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgcGFydHMgPSBwYXJzZU9yaWdpbihvcmlnaW4pXG4gIHJhbmdlID0gc3RyaW5naWZ5KHBvc2l0aW9uKSB8fCAnMToxJ1xuXG4gIGxvY2F0aW9uID0ge1xuICAgIHN0YXJ0OiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfSxcbiAgICBlbmQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9XG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAocG9zaXRpb24gJiYgcG9zaXRpb24ucG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uXG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICAvLyBQb3NpdGlvbi5cbiAgICBpZiAocG9zaXRpb24uc3RhcnQpIHtcbiAgICAgIGxvY2F0aW9uID0gcG9zaXRpb25cbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc3RhcnRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUG9pbnQuXG4gICAgICBsb2NhdGlvbi5zdGFydCA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlYXNvbi5zdGFjaykge1xuICAgIHRoaXMuc3RhY2sgPSByZWFzb24uc3RhY2tcbiAgICByZWFzb24gPSByZWFzb24ubWVzc2FnZVxuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gcmVhc29uXG4gIHRoaXMubmFtZSA9IHJhbmdlXG4gIHRoaXMucmVhc29uID0gcmVhc29uXG4gIHRoaXMubGluZSA9IHBvc2l0aW9uID8gcG9zaXRpb24ubGluZSA6IG51bGxcbiAgdGhpcy5jb2x1bW4gPSBwb3NpdGlvbiA/IHBvc2l0aW9uLmNvbHVtbiA6IG51bGxcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc291cmNlID0gcGFydHNbMF1cbiAgdGhpcy5ydWxlSWQgPSBwYXJ0c1sxXVxufVxuXG5mdW5jdGlvbiBwYXJzZU9yaWdpbihvcmlnaW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtudWxsLCBudWxsXVxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycpIHtcbiAgICBpbmRleCA9IG9yaWdpbi5pbmRleE9mKCc6JylcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpblxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbMF0gPSBvcmlnaW4uc2xpY2UoMCwgaW5kZXgpXG4gICAgICByZXN1bHRbMV0gPSBvcmlnaW4uc2xpY2UoaW5kZXggKyAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIHJlcGxhY2UgPSByZXF1aXJlKCdyZXBsYWNlLWV4dCcpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG4vLyBPcmRlciBvZiBzZXR0aW5nIChsZWFzdCBzcGVjaWZpYyB0byBtb3N0KSwgd2UgbmVlZCB0aGlzIGJlY2F1c2Ugb3RoZXJ3aXNlXG4vLyBge3N0ZW06ICdhJywgcGF0aDogJ34vYi5qcyd9YCB3b3VsZCB0aHJvdywgYXMgYSBwYXRoIGlzIG5lZWRlZCBiZWZvcmUgYVxuLy8gc3RlbSBjYW4gYmUgc2V0LlxudmFyIG9yZGVyID0gWydoaXN0b3J5JywgJ3BhdGgnLCAnYmFzZW5hbWUnLCAnc3RlbScsICdleHRuYW1lJywgJ2Rpcm5hbWUnXVxuXG5wcm90by50b1N0cmluZyA9IHRvU3RyaW5nXG5cbi8vIEFjY2VzcyBmdWxsIHBhdGggKGB+L2luZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncGF0aCcsIHtnZXQ6IGdldFBhdGgsIHNldDogc2V0UGF0aH0pXG5cbi8vIEFjY2VzcyBwYXJlbnQgcGF0aCAoYH5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Rpcm5hbWUnLCB7Z2V0OiBnZXREaXJuYW1lLCBzZXQ6IHNldERpcm5hbWV9KVxuXG4vLyBBY2Nlc3MgYmFzZW5hbWUgKGBpbmRleC5taW4uanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Jhc2VuYW1lJywge2dldDogZ2V0QmFzZW5hbWUsIHNldDogc2V0QmFzZW5hbWV9KVxuXG4vLyBBY2Nlc3MgZXh0bmFtZSAoYC5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZXh0bmFtZScsIHtnZXQ6IGdldEV4dG5hbWUsIHNldDogc2V0RXh0bmFtZX0pXG5cbi8vIEFjY2VzcyBzdGVtIChgaW5kZXgubWluYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzdGVtJywge2dldDogZ2V0U3RlbSwgc2V0OiBzZXRTdGVtfSlcblxuLy8gQ29uc3RydWN0IGEgbmV3IGZpbGUuXG5mdW5jdGlvbiBWRmlsZShvcHRpb25zKSB7XG4gIHZhciBwcm9wXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7Y29udGVudHM6IG9wdGlvbnN9XG4gIH0gZWxzZSBpZiAoJ21lc3NhZ2UnIGluIG9wdGlvbnMgJiYgJ21lc3NhZ2VzJyBpbiBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IFZGaWxlKG9wdGlvbnMpXG4gIH1cblxuICB0aGlzLmRhdGEgPSB7fVxuICB0aGlzLm1lc3NhZ2VzID0gW11cbiAgdGhpcy5oaXN0b3J5ID0gW11cbiAgdGhpcy5jd2QgPSBwcm9jZXNzLmN3ZCgpXG5cbiAgLy8gU2V0IHBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IG9yZGVyLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJvcCA9IG9yZGVyW2luZGV4XVxuXG4gICAgaWYgKG93bi5jYWxsKG9wdGlvbnMsIHByb3ApKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBub24tcGF0aCByZWxhdGVkIHByb3BlcnRpZXMuXG4gIGZvciAocHJvcCBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9yZGVyLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiBzZXRQYXRoKHBhdGgpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkocGF0aCwgJ3BhdGgnKVxuXG4gIGlmIChwYXRoICE9PSB0aGlzLnBhdGgpIHtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERpcm5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZGlybmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldERpcm5hbWUoZGlybmFtZSkge1xuICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2Rpcm5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4oZGlybmFtZSB8fCAnJywgdGhpcy5iYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZW5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRCYXNlbmFtZShiYXNlbmFtZSkge1xuICBhc3NlcnROb25FbXB0eShiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgYXNzZXJ0UGFydChiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEV4dG5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZXh0bmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEV4dG5hbWUoZXh0bmFtZSkge1xuICB2YXIgZXh0ID0gZXh0bmFtZSB8fCAnJ1xuXG4gIGFzc2VydFBhcnQoZXh0LCAnZXh0bmFtZScpXG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZXh0bmFtZScpXG5cbiAgaWYgKGV4dCkge1xuICAgIGlmIChleHQuY2hhckF0KDApICE9PSAnLicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIG11c3Qgc3RhcnQgd2l0aCBgLmAnKVxuICAgIH1cblxuICAgIGlmIChleHQuaW5kZXhPZignLicsIDEpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgY2Fubm90IGNvbnRhaW4gbXVsdGlwbGUgZG90cycpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5wYXRoID0gcmVwbGFjZSh0aGlzLnBhdGgsIGV4dClcbn1cblxuZnVuY3Rpb24gZ2V0U3RlbSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnXG4gICAgPyBwYXRoLmJhc2VuYW1lKHRoaXMucGF0aCwgdGhpcy5leHRuYW1lKVxuICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldFN0ZW0oc3RlbSkge1xuICBhc3NlcnROb25FbXB0eShzdGVtLCAnc3RlbScpXG4gIGFzc2VydFBhcnQoc3RlbSwgJ3N0ZW0nKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBzdGVtICsgKHRoaXMuZXh0bmFtZSB8fCAnJykpXG59XG5cbi8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGZpbGUuXG5mdW5jdGlvbiB0b1N0cmluZyhlbmNvZGluZykge1xuICB2YXIgdmFsdWUgPSB0aGlzLmNvbnRlbnRzIHx8ICcnXG4gIHJldHVybiBidWZmZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpIDogU3RyaW5nKHZhbHVlKVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGEgcGF0aCAoaS5lLiwgZG9lcyBub3QgY29udGFpbiBgcGF0aC5zZXBgKS5cbmZ1bmN0aW9uIGFzc2VydFBhcnQocGFydCwgbmFtZSkge1xuICBpZiAocGFydC5pbmRleE9mKHBhdGguc2VwKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGEgcGF0aDogZGlkIG5vdCBleHBlY3QgYCcgKyBwYXRoLnNlcCArICdgJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGVtcHR5LlxuZnVuY3Rpb24gYXNzZXJ0Tm9uRW1wdHkocGFydCwgbmFtZSkge1xuICBpZiAoIXBhcnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBlbXB0eScpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBwYXRoYCBleGlzdHMuXG5mdW5jdGlvbiBhc3NlcnRQYXRoKHBhdGgsIG5hbWUpIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXR0aW5nIGAnICsgbmFtZSArICdgIHJlcXVpcmVzIGBwYXRoYCB0byBiZSBzZXQgdG9vJylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBWTWVzc2FnZSA9IHJlcXVpcmUoJ3ZmaWxlLW1lc3NhZ2UnKVxudmFyIFZGaWxlID0gcmVxdWlyZSgnLi9jb3JlLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgcHJvdG8gPSBWRmlsZS5wcm90b3R5cGVcblxucHJvdG8ubWVzc2FnZSA9IG1lc3NhZ2VcbnByb3RvLmluZm8gPSBpbmZvXG5wcm90by5mYWlsID0gZmFpbFxuXG4vLyBDcmVhdGUgYSBtZXNzYWdlIHdpdGggYHJlYXNvbmAgYXQgYHBvc2l0aW9uYC5cbi8vIFdoZW4gYW4gZXJyb3IgaXMgcGFzc2VkIGluIGFzIGByZWFzb25gLCBjb3BpZXMgdGhlIHN0YWNrLlxuZnVuY3Rpb24gbWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoXG4gIHZhciBtZXNzYWdlID0gbmV3IFZNZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbilcblxuICBpZiAoZmlsZVBhdGgpIHtcbiAgICBtZXNzYWdlLm5hbWUgPSBmaWxlUGF0aCArICc6JyArIG1lc3NhZ2UubmFtZVxuICAgIG1lc3NhZ2UuZmlsZSA9IGZpbGVQYXRoXG4gIH1cblxuICBtZXNzYWdlLmZhdGFsID0gZmFsc2VcblxuICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcblxuICByZXR1cm4gbWVzc2FnZVxufVxuXG4vLyBGYWlsOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIHRocm93cyBpdC5cbmZ1bmN0aW9uIGZhaWwoKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gdHJ1ZVxuXG4gIHRocm93IG1lc3NhZ2Vcbn1cblxuLy8gSW5mbzogY3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsIGFuZCBtYXJrcyB0aGUgZmF0YWxpdHlcbi8vIGFzIG51bGwuXG5mdW5jdGlvbiBpbmZvKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cbiAgbWVzc2FnZS5mYXRhbCA9IG51bGxcblxuICByZXR1cm4gbWVzc2FnZVxufVxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=