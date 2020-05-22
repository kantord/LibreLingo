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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9iYWlsL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9jb2xsYXBzZS13aGl0ZS1zcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtYWxwaGFudW1lcmljL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWFscGhhbnVtZXJpY2FsL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtaGV4YWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbG9uZ2VzdC1zdHJlYWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWFya2Rvd24tZXNjYXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tYXJrZG93bi10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWNvbXBhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5icm93c2VyLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9hbGwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvbWFjcm8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvbWFjcm8vY29tcGlsZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9vbmUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvbWFjcm8vb3JkZXJlZC1pdGVtcy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby91bm9yZGVyZWQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9jb3B5LWlkZW50aWZpZXItZW5jb2RpbmcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9lbmNsb3NlLXRpdGxlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW5jbG9zZS11cmkuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9lbnRlci1saW5rLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2VudGl0eS1wcmVmaXgtbGVuZ3RoLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdXRpbC9sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL3BhZC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9odG1sLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2ltYWdlLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbmxpbmUtY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saW5rLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saW5rLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saXN0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9yb290LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS1jZWxsLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9ibG9jay1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZXNjYXBlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3RhZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3VybC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2F1dG8tbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxhbmstbGluZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtZmVuY2VkLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWlubGluZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaGVhZGluZy1hdHguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctc2V0ZXh0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWJsb2NrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWlubGluZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvcGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS91cmwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvZ2V0LWluZGVudGF0aW9uLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmsvbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9yZW1vdmUtaW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZXBsYWNlLWV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9zdGF0ZS10b2dnbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3RyaW5naWZ5LWVudGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3RyaW0tdHJhaWxpbmctbGluZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJvdWdoL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcmVtb3ZlLXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlLWxvY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdmZpbGUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hQWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsc0VBQWtCOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEWTs7QUFFWjs7QUFFQTs7QUFFQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRTtBQUMxRSwrQkFBK0I7QUFDL0Isa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsMEZBQTJCO0FBQ2hELGNBQWMsbUJBQU8sQ0FBQyw4RkFBNkI7QUFDbkQsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDLGtCQUFrQixtQkFBTyxDQUFDLGtFQUFnQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBbUI7QUFDaEQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQWlCOztBQUU1Qzs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsd0JBQXdCO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbGNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4U1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLGtEQUFROztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ1k7O0FBRVosZUFBZSxtQkFBTyxDQUFDLDRFQUFZOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsa0VBQWdCOztBQUVyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTlk7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJZOztBQUVaLGFBQWEsbUJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNVBZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxXQUFXLG1CQUFPLENBQUMsNEVBQXFCOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakdZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyw0R0FBdUI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNUdZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxnQkFBZ0IsbUJBQU8sQ0FBQyxvR0FBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN0SVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNyR1k7O0FBRVosbUJBQW1CLG1CQUFPLENBQUMsMEZBQWM7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLDhCQUE4QjtBQUN0RDs7Ozs7Ozs7Ozs7OztBQzlHWTs7QUFFWixtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDNUMsYUFBYSxtQkFBTyxDQUFDLDRGQUFlO0FBQ3BDLFVBQVUsbUJBQU8sQ0FBQywwRkFBYzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REOzs7Ozs7Ozs7Ozs7O0FDMURZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsOEZBQWdCOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVdZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsZ0VBQWU7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDLGdCQUFnQixtQkFBTyxDQUFDLGdIQUF5QjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxzSEFBNEI7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsb0dBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RDtBQUNBLG1DQUFtQyxJQUFJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFCQUFxQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLHdEQUF3RDtBQUMvRTs7Ozs7Ozs7Ozs7OztBQ2pOWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1RZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7OztBQ2hDWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ1k7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsOEVBQXNCOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVlk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxnQkFBZ0IsbUJBQU8sQ0FBQywwR0FBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLHlEQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDakJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWTs7QUFFWixlQUFlLG1CQUFPLENBQUMsd0ZBQTBCO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQywwRkFBMkI7QUFDaEQsa0JBQWtCLG1CQUFPLENBQUMsa0VBQWdCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywwREFBWTtBQUNsQyxxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBbUI7QUFDaEQsZ0JBQWdCLG1CQUFPLENBQUMsOEVBQWtCOztBQUUxQztBQUNBOztBQUVBLFlBQVk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQTJDO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlKWTs7QUFFWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYlk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLG9EQUFXOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLGlFQUFVOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVDWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLDZFQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxrREFBUTtBQUM3QixZQUFZLG1CQUFPLENBQUMsbUZBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCLFlBQVksbUJBQU8sQ0FBQyxnREFBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RGWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsc0VBQWtCOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJZOztBQUVaLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEWTs7QUFFWjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsMEVBQXVCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0VZOztBQUVaOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLHNGQUEwQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUE7QUFDQSIsImZpbGUiOiJlZDQxMGZkZmI4ODdhZGY1OGU2ZC92ZW5kb3JzfmFib3V0LnZlbmRvcnN+YWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYWlsXG5cbmZ1bmN0aW9uIGJhaWwoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2NvdW50XG5cbmZ1bmN0aW9uIGNjb3VudCh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIHZhciB2YWwgPSBTdHJpbmcodmFsdWUpXG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnIHx8IGNoYXJhY3Rlci5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNoYXJhY3RlcicpXG4gIH1cblxuICBpbmRleCA9IHZhbC5pbmRleE9mKGNoYXJhY3RlcilcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuICAgIGluZGV4ID0gdmFsLmluZGV4T2YoY2hhcmFjdGVyLCBpbmRleCArIDEpXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxhcHNlXG5cbi8vIGBjb2xsYXBzZSgnIFxcdFxcbmJhciBcXG5iYXpcXHQnKSAvLyAnIGJhciBiYXogJ2BcbmZ1bmN0aW9uIGNvbGxhcHNlKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1xccysvZywgJyAnKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgeyAvKiovIH1cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxuLy8gSWYgbmFtZSBpcyAnX19wcm90b19fJywgYW5kIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBhdmFpbGFibGUsIGRlZmluZSBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5IG9uIHRhcmdldFxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBvcHRpb25zKSB7XG5cdGlmIChkZWZpbmVQcm9wZXJ0eSAmJiBvcHRpb25zLm5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBvcHRpb25zLm5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogb3B0aW9ucy5uZXdWYWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0W29wdGlvbnMubmFtZV0gPSBvcHRpb25zLm5ld1ZhbHVlO1xuXHR9XG59O1xuXG4vLyBSZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgX19wcm90b19fIGlmICdfX3Byb3RvX18nIGlzIG5vdCBhbiBvd24gcHJvcGVydHlcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgbmFtZSkge1xuXHRpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRpZiAoIWhhc093bi5jYWxsKG9iaiwgbmFtZSkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fSBlbHNlIGlmIChnT1BEKSB7XG5cdFx0XHQvLyBJbiBlYXJseSB2ZXJzaW9ucyBvZiBub2RlLCBvYmpbJ19fcHJvdG9fXyddIGlzIGJ1Z2d5IHdoZW4gb2JqIGhhc1xuXHRcdFx0Ly8gX19wcm90b19fIGFzIGFuIG93biBwcm9wZXJ0eS4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpIHdvcmtzLlxuXHRcdFx0cmV0dXJuIGdPUEQob2JqLCBuYW1lKS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqW25hbWVdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZTtcblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIGkgPSAxO1xuXHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0dmFyIGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH1cblx0aWYgKHRhcmdldCA9PSBudWxsIHx8ICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IGdldFByb3BlcnR5KHRhcmdldCwgbmFtZSk7XG5cdFx0XHRcdGNvcHkgPSBnZXRQcm9wZXJ0eShvcHRpb25zLCBuYW1lKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0c2V0UHJvcGVydHkodGFyZ2V0LCB7IG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpIH0pO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGNvcHkgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYWJldGljYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGFscGhhYmV0aWNhbC5cbmZ1bmN0aW9uIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLyogYS16ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgLyogQS1aICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuICEvW14wLTlhLXpcXHhERi1cXHhGRl0vLnRlc3Qoc3RyLnRvTG93ZXJDYXNlKCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYWxwaGFudW1lcmljYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGFscGhhbnVtZXJpY2FsLlxuZnVuY3Rpb24gYWxwaGFudW1lcmljYWwoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBhbHBoYWJldGljYWwoY2hhcmFjdGVyKSB8fCBkZWNpbWFsKGNoYXJhY3Rlcilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY2ltYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGRlY2ltYWwuXG5mdW5jdGlvbiBkZWNpbWFsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IC8qIDAtOSAqL1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGV4YWRlY2ltYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGhleGFkZWNpbWFsLlxuZnVuY3Rpb24gaGV4YWRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEwMikgLyogeiAqLyB8fFxuICAgIChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA3MCkgLyogWiAqLyB8fFxuICAgIChjb2RlID49IDQ4IC8qIEEgKi8gJiYgY29kZSA8PSA1NykgLyogWiAqL1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3aGl0ZXNwYWNlXG5cbnZhciBmcm9tQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciByZSA9IC9cXHMvXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuZnVuY3Rpb24gd2hpdGVzcGFjZShjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIHJlLnRlc3QoXG4gICAgdHlwZW9mIGNoYXJhY3RlciA9PT0gJ251bWJlcicgPyBmcm9tQ29kZShjaGFyYWN0ZXIpIDogY2hhcmFjdGVyLmNoYXJBdCgwKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkQ2hhcmFjdGVyXG5cbnZhciBmcm9tQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciByZSA9IC9cXHcvXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhIHdvcmQgY2hhcmFjdGVyLlxuZnVuY3Rpb24gd29yZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIHJlLnRlc3QoXG4gICAgdHlwZW9mIGNoYXJhY3RlciA9PT0gJ251bWJlcicgPyBmcm9tQ29kZShjaGFyYWN0ZXIpIDogY2hhcmFjdGVyLmNoYXJBdCgwKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb25nZXN0U3RyZWFrXG5cbi8vIEdldCB0aGUgY291bnQgb2YgdGhlIGxvbmdlc3QgcmVwZWF0aW5nIHN0cmVhayBvZiBgY2hhcmFjdGVyYCBpbiBgdmFsdWVgLlxuZnVuY3Rpb24gbG9uZ2VzdFN0cmVhayh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIG1heGltdW0gPSAwXG4gIHZhciBleHBlY3RlZFxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycgfHwgY2hhcmFjdGVyLmxlbmd0aCAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyKVxuICBleHBlY3RlZCA9IGluZGV4XG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcblxuICAgIGlmIChpbmRleCA9PT0gZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChjb3VudCA+IG1heGltdW0pIHtcbiAgICAgICAgbWF4aW11bSA9IGNvdW50XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMVxuICAgIH1cblxuICAgIGV4cGVjdGVkID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlciwgZXhwZWN0ZWQpXG4gIH1cblxuICByZXR1cm4gbWF4aW11bVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlc1xuXG52YXIgZGVmYXVsdHMgPSBbXG4gICdcXFxcJyxcbiAgJ2AnLFxuICAnKicsXG4gICd7JyxcbiAgJ30nLFxuICAnWycsXG4gICddJyxcbiAgJygnLFxuICAnKScsXG4gICcjJyxcbiAgJysnLFxuICAnLScsXG4gICcuJyxcbiAgJyEnLFxuICAnXycsXG4gICc+J1xuXVxuXG52YXIgZ2ZtID0gZGVmYXVsdHMuY29uY2F0KFsnficsICd8J10pXG5cbnZhciBjb21tb25tYXJrID0gZ2ZtLmNvbmNhdChbXG4gICdcXG4nLFxuICAnXCInLFxuICAnJCcsXG4gICclJyxcbiAgJyYnLFxuICBcIidcIixcbiAgJywnLFxuICAnLycsXG4gICc6JyxcbiAgJzsnLFxuICAnPCcsXG4gICc9JyxcbiAgJz8nLFxuICAnQCcsXG4gICdeJ1xuXSlcblxuZXNjYXBlcy5kZWZhdWx0ID0gZGVmYXVsdHNcbmVzY2FwZXMuZ2ZtID0gZ2ZtXG5lc2NhcGVzLmNvbW1vbm1hcmsgPSBjb21tb25tYXJrXG5cbi8vIEdldCBtYXJrZG93biBlc2NhcGVzLlxuZnVuY3Rpb24gZXNjYXBlcyhvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAoc2V0dGluZ3MuY29tbW9ubWFyaykge1xuICAgIHJldHVybiBjb21tb25tYXJrXG4gIH1cblxuICByZXR1cm4gc2V0dGluZ3MuZ2ZtID8gZ2ZtIDogZGVmYXVsdHNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25UYWJsZVxuXG52YXIgdHJhaWxpbmdXaGl0ZXNwYWNlID0gLyArJC9cblxuLy8gQ2hhcmFjdGVycy5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBkYXNoID0gJy0nXG52YXIgY29sb24gPSAnOidcbnZhciB2ZXJ0aWNhbEJhciA9ICd8J1xuXG52YXIgeCA9IDBcbnZhciBDID0gNjdcbnZhciBMID0gNzZcbnZhciBSID0gODJcbnZhciBjID0gOTlcbnZhciBsID0gMTA4XG52YXIgciA9IDExNFxuXG4vLyBDcmVhdGUgYSB0YWJsZSBmcm9tIGEgbWF0cml4IG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBtYXJrZG93blRhYmxlKHRhYmxlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHBhZGRpbmcgPSBzZXR0aW5ncy5wYWRkaW5nICE9PSBmYWxzZVxuICB2YXIgc3RhcnQgPSBzZXR0aW5ncy5kZWxpbWl0ZXJTdGFydCAhPT0gZmFsc2VcbiAgdmFyIGVuZCA9IHNldHRpbmdzLmRlbGltaXRlckVuZCAhPT0gZmFsc2VcbiAgdmFyIGFsaWduID0gKHNldHRpbmdzLmFsaWduIHx8IFtdKS5jb25jYXQoKVxuICB2YXIgYWxpZ25EZWxpbWl0ZXJzID0gc2V0dGluZ3MuYWxpZ25EZWxpbWl0ZXJzICE9PSBmYWxzZVxuICB2YXIgYWxpZ25tZW50cyA9IFtdXG4gIHZhciBzdHJpbmdMZW5ndGggPSBzZXR0aW5ncy5zdHJpbmdMZW5ndGggfHwgZGVmYXVsdFN0cmluZ0xlbmd0aFxuICB2YXIgcm93SW5kZXggPSAtMVxuICB2YXIgcm93TGVuZ3RoID0gdGFibGUubGVuZ3RoXG4gIHZhciBjZWxsTWF0cml4ID0gW11cbiAgdmFyIHNpemVNYXRyaXggPSBbXVxuICB2YXIgcm93ID0gW11cbiAgdmFyIHNpemVzID0gW11cbiAgdmFyIGxvbmdlc3RDZWxsQnlDb2x1bW4gPSBbXVxuICB2YXIgbW9zdENlbGxzUGVyUm93ID0gMFxuICB2YXIgY2VsbHNcbiAgdmFyIGNvbHVtbkluZGV4XG4gIHZhciBjb2x1bW5MZW5ndGhcbiAgdmFyIGxhcmdlc3RcbiAgdmFyIHNpemVcbiAgdmFyIGNlbGxcbiAgdmFyIGxpbmVzXG4gIHZhciBsaW5lXG4gIHZhciBiZWZvcmVcbiAgdmFyIGFmdGVyXG4gIHZhciBjb2RlXG5cbiAgLy8gVGhpcyBpcyBhIHN1cGVyZmx1b3VzIGxvb3AgaWYgd2UgZG9u4oCZdCBhbGlnbiBkZWxpbWl0ZXJzLCBidXQgb3RoZXJ3aXNlIHdl4oCZZFxuICAvLyBkbyBzdXBlcmZsdW91cyB3b3JrIHdoZW4gYWxpZ25pbmcsIHNvIG9wdGltaXplIGZvciBhbGlnbmluZy5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICBjZWxscyA9IHRhYmxlW3Jvd0luZGV4XVxuICAgIGNvbHVtbkluZGV4ID0gLTFcbiAgICBjb2x1bW5MZW5ndGggPSBjZWxscy5sZW5ndGhcbiAgICByb3cgPSBbXVxuICAgIHNpemVzID0gW11cblxuICAgIGlmIChjb2x1bW5MZW5ndGggPiBtb3N0Q2VsbHNQZXJSb3cpIHtcbiAgICAgIG1vc3RDZWxsc1BlclJvdyA9IGNvbHVtbkxlbmd0aFxuICAgIH1cblxuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBjZWxsID0gc2VyaWFsaXplKGNlbGxzW2NvbHVtbkluZGV4XSlcblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBzaXplID0gc3RyaW5nTGVuZ3RoKGNlbGwpXG4gICAgICAgIHNpemVzW2NvbHVtbkluZGV4XSA9IHNpemVcblxuICAgICAgICBsYXJnZXN0ID0gbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF1cblxuICAgICAgICBpZiAobGFyZ2VzdCA9PT0gdW5kZWZpbmVkIHx8IHNpemUgPiBsYXJnZXN0KSB7XG4gICAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gPSBzaXplXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93LnB1c2goY2VsbClcbiAgICB9XG5cbiAgICBjZWxsTWF0cml4W3Jvd0luZGV4XSA9IHJvd1xuICAgIHNpemVNYXRyaXhbcm93SW5kZXhdID0gc2l6ZXNcbiAgfVxuXG4gIC8vIEZpZ3VyZSBvdXQgd2hpY2ggYWxpZ25tZW50cyB0byB1c2UuXG4gIGNvbHVtbkluZGV4ID0gLTFcbiAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG5cbiAgaWYgKHR5cGVvZiBhbGlnbiA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYWxpZ24pIHtcbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgYWxpZ25tZW50c1tjb2x1bW5JbmRleF0gPSB0b0FsaWdubWVudChhbGlnbltjb2x1bW5JbmRleF0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvZGUgPSB0b0FsaWdubWVudChhbGlnbilcblxuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XSA9IGNvZGVcbiAgICB9XG4gIH1cblxuICAvLyBJbmplY3QgdGhlIGFsaWdubWVudCByb3cuXG4gIGNvbHVtbkluZGV4ID0gLTFcbiAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG4gIHJvdyA9IFtdXG4gIHNpemVzID0gW11cblxuICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgIGNvZGUgPSBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XVxuICAgIGJlZm9yZSA9ICcnXG4gICAgYWZ0ZXIgPSAnJ1xuXG4gICAgaWYgKGNvZGUgPT09IGwpIHtcbiAgICAgIGJlZm9yZSA9IGNvbG9uXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSByKSB7XG4gICAgICBhZnRlciA9IGNvbG9uXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSBjKSB7XG4gICAgICBiZWZvcmUgPSBjb2xvblxuICAgICAgYWZ0ZXIgPSBjb2xvblxuICAgIH1cblxuICAgIC8vIFRoZXJlICptdXN0KiBiZSBhdCBsZWFzdCBvbmUgaHlwaGVuLW1pbnVzIGluIGVhY2ggYWxpZ25tZW50IGNlbGwuXG4gICAgc2l6ZSA9IGFsaWduRGVsaW1pdGVyc1xuICAgICAgPyBNYXRoLm1heChcbiAgICAgICAgICAxLFxuICAgICAgICAgIGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdIC0gYmVmb3JlLmxlbmd0aCAtIGFmdGVyLmxlbmd0aFxuICAgICAgICApXG4gICAgICA6IDFcblxuICAgIGNlbGwgPSBiZWZvcmUgKyByZXBlYXQoZGFzaCwgc2l6ZSkgKyBhZnRlclxuXG4gICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgc2l6ZSA9IGJlZm9yZS5sZW5ndGggKyBzaXplICsgYWZ0ZXIubGVuZ3RoXG5cbiAgICAgIGlmIChzaXplID4gbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gPSBzaXplXG4gICAgICB9XG5cbiAgICAgIHNpemVzW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICB9XG5cbiAgICByb3dbY29sdW1uSW5kZXhdID0gY2VsbFxuICB9XG5cbiAgLy8gSW5qZWN0IHRoZSBhbGlnbm1lbnQgcm93LlxuICBjZWxsTWF0cml4LnNwbGljZSgxLCAwLCByb3cpXG4gIHNpemVNYXRyaXguc3BsaWNlKDEsIDAsIHNpemVzKVxuXG4gIHJvd0luZGV4ID0gLTFcbiAgcm93TGVuZ3RoID0gY2VsbE1hdHJpeC5sZW5ndGhcbiAgbGluZXMgPSBbXVxuXG4gIHdoaWxlICgrK3Jvd0luZGV4IDwgcm93TGVuZ3RoKSB7XG4gICAgcm93ID0gY2VsbE1hdHJpeFtyb3dJbmRleF1cbiAgICBzaXplcyA9IHNpemVNYXRyaXhbcm93SW5kZXhdXG4gICAgY29sdW1uSW5kZXggPSAtMVxuICAgIGNvbHVtbkxlbmd0aCA9IG1vc3RDZWxsc1BlclJvd1xuICAgIGxpbmUgPSBbXVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGNlbGwgPSByb3dbY29sdW1uSW5kZXhdIHx8ICcnXG4gICAgICBiZWZvcmUgPSAnJ1xuICAgICAgYWZ0ZXIgPSAnJ1xuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIHNpemUgPSBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSAtIChzaXplc1tjb2x1bW5JbmRleF0gfHwgMClcbiAgICAgICAgY29kZSA9IGFsaWdubWVudHNbY29sdW1uSW5kZXhdXG5cbiAgICAgICAgaWYgKGNvZGUgPT09IHIpIHtcbiAgICAgICAgICBiZWZvcmUgPSByZXBlYXQoc3BhY2UsIHNpemUpXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gYykge1xuICAgICAgICAgIGlmIChzaXplICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgYmVmb3JlID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMilcbiAgICAgICAgICAgIGFmdGVyID0gYmVmb3JlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlZm9yZSA9IHJlcGVhdChzcGFjZSwgc2l6ZSAvIDIgKyAwLjUpXG4gICAgICAgICAgICBhZnRlciA9IHJlcGVhdChzcGFjZSwgc2l6ZSAvIDIgLSAwLjUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmdGVyID0gcmVwZWF0KHNwYWNlLCBzaXplKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydCA9PT0gdHJ1ZSAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICBsaW5lLnB1c2godmVydGljYWxCYXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFkZGluZyA9PT0gdHJ1ZSAmJlxuICAgICAgICAvLyBEb27igJl0IGFkZCB0aGUgb3BlbmluZyBzcGFjZSBpZiB3ZeKAmXJlIG5vdCBhbGlnbmluZyBhbmQgdGhlIGNlbGwgaXNcbiAgICAgICAgLy8gZW1wdHk6IHRoZXJlIHdpbGwgYmUgYSBjbG9zaW5nIHNwYWNlLlxuICAgICAgICAhKGFsaWduRGVsaW1pdGVycyA9PT0gZmFsc2UgJiYgY2VsbCA9PT0gJycpICYmXG4gICAgICAgIChzdGFydCA9PT0gdHJ1ZSB8fCBjb2x1bW5JbmRleCAhPT0gMClcbiAgICAgICkge1xuICAgICAgICBsaW5lLnB1c2goc3BhY2UpXG4gICAgICB9XG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgbGluZS5wdXNoKGJlZm9yZSlcbiAgICAgIH1cblxuICAgICAgbGluZS5wdXNoKGNlbGwpXG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgbGluZS5wdXNoKGFmdGVyKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFkZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goc3BhY2UpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbmQgPT09IHRydWUgfHwgY29sdW1uSW5kZXggIT09IGNvbHVtbkxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGluZS5wdXNoKHZlcnRpY2FsQmFyKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmUgPSBsaW5lLmpvaW4oJycpXG5cbiAgICBpZiAoZW5kID09PSBmYWxzZSkge1xuICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSh0cmFpbGluZ1doaXRlc3BhY2UsICcnKVxuICAgIH1cblxuICAgIGxpbmVzLnB1c2gobGluZSlcbiAgfVxuXG4gIHJldHVybiBsaW5lcy5qb2luKGxpbmVGZWVkKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFN0cmluZ0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbmZ1bmN0aW9uIHRvQWxpZ25tZW50KHZhbHVlKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLmNoYXJDb2RlQXQoMCkgOiB4XG5cbiAgcmV0dXJuIGNvZGUgPT09IEwgfHwgY29kZSA9PT0gbFxuICAgID8gbFxuICAgIDogY29kZSA9PT0gUiB8fCBjb2RlID09PSByXG4gICAgPyByXG4gICAgOiBjb2RlID09PSBDIHx8IGNvZGUgPT09IGNcbiAgICA/IGNcbiAgICA6IHhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYWN0XG5cbi8vIE1ha2UgYW4gbWRhc3QgdHJlZSBjb21wYWN0IGJ5IG1lcmdpbmcgYWRqYWNlbnQgdGV4dCBub2Rlcy5cbmZ1bmN0aW9uIGNvbXBhY3QodHJlZSwgY29tbW9ubWFyaykge1xuICB2aXNpdCh0cmVlLCB2aXNpdG9yKVxuXG4gIHJldHVybiB0cmVlXG5cbiAgZnVuY3Rpb24gdmlzaXRvcihjaGlsZCwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IFtdXG4gICAgdmFyIHByZXYgPSBpbmRleCAmJiBzaWJsaW5nc1tpbmRleCAtIDFdXG5cbiAgICBpZiAoXG4gICAgICBwcmV2ICYmXG4gICAgICBjaGlsZC50eXBlID09PSBwcmV2LnR5cGUgJiZcbiAgICAgIG1lcmdlYWJsZShwcmV2LCBjb21tb25tYXJrKSAmJlxuICAgICAgbWVyZ2VhYmxlKGNoaWxkLCBjb21tb25tYXJrKVxuICAgICkge1xuICAgICAgaWYgKGNoaWxkLnZhbHVlKSB7XG4gICAgICAgIHByZXYudmFsdWUgKz0gY2hpbGQudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuKSB7XG4gICAgICAgIHByZXYuY2hpbGRyZW4gPSBwcmV2LmNoaWxkcmVuLmNvbmNhdChjaGlsZC5jaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgc2libGluZ3Muc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICBpZiAocHJldi5wb3NpdGlvbiAmJiBjaGlsZC5wb3NpdGlvbikge1xuICAgICAgICBwcmV2LnBvc2l0aW9uLmVuZCA9IGNoaWxkLnBvc2l0aW9uLmVuZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VhYmxlKG5vZGUsIGNvbW1vbm1hcmspIHtcbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICBpZiAoIW5vZGUucG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgc3RhcnQgPSBub2RlLnBvc2l0aW9uLnN0YXJ0XG4gICAgZW5kID0gbm9kZS5wb3NpdGlvbi5lbmRcblxuICAgIC8vIE9ubHkgbWVyZ2Ugbm9kZXMgd2hpY2ggb2NjdXB5IHRoZSBzYW1lIHNpemUgYXMgdGhlaXIgYHZhbHVlYC5cbiAgICByZXR1cm4gKFxuICAgICAgc3RhcnQubGluZSAhPT0gZW5kLmxpbmUgfHwgZW5kLmNvbHVtbiAtIHN0YXJ0LmNvbHVtbiA9PT0gbm9kZS52YWx1ZS5sZW5ndGhcbiAgICApXG4gIH1cblxuICByZXR1cm4gY29tbW9ubWFyayAmJiBub2RlLnR5cGUgPT09ICdibG9ja3F1b3RlJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBpbnZhbGlkID0gcmVxdWlyZSgnY2hhcmFjdGVyLXJlZmVyZW5jZS1pbnZhbGlkJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGVjb2RlRW50aXR5ID0gcmVxdWlyZSgnLi9kZWNvZGUtZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUVudGl0aWVzXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciBub29wID0gRnVuY3Rpb24ucHJvdG90eXBlXG5cbi8vIERlZmF1bHQgc2V0dGluZ3MuXG52YXIgZGVmYXVsdHMgPSB7XG4gIHdhcm5pbmc6IG51bGwsXG4gIHJlZmVyZW5jZTogbnVsbCxcbiAgdGV4dDogbnVsbCxcbiAgd2FybmluZ0NvbnRleHQ6IG51bGwsXG4gIHJlZmVyZW5jZUNvbnRleHQ6IG51bGwsXG4gIHRleHRDb250ZXh0OiBudWxsLFxuICBwb3NpdGlvbjoge30sXG4gIGFkZGl0aW9uYWw6IG51bGwsXG4gIGF0dHJpYnV0ZTogZmFsc2UsXG4gIG5vblRlcm1pbmF0ZWQ6IHRydWVcbn1cblxuLy8gQ2hhcmFjdGVycy5cbnZhciB0YWIgPSA5IC8vICdcXHQnXG52YXIgbGluZUZlZWQgPSAxMCAvLyAnXFxuJ1xudmFyIGZvcm1GZWVkID0gMTIgLy8gJ1xcZidcbnZhciBzcGFjZSA9IDMyIC8vICcgJ1xudmFyIGFtcGVyc2FuZCA9IDM4IC8vICcmJ1xudmFyIHNlbWljb2xvbiA9IDU5IC8vICc7J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gJzwnXG52YXIgZXF1YWxzVG8gPSA2MSAvLyAnPSdcbnZhciBudW1iZXJTaWduID0gMzUgLy8gJyMnXG52YXIgdXBwZXJjYXNlWCA9IDg4IC8vICdYJ1xudmFyIGxvd2VyY2FzZVggPSAxMjAgLy8gJ3gnXG52YXIgcmVwbGFjZW1lbnRDaGFyYWN0ZXIgPSA2NTUzMyAvLyAn77+9J1xuXG4vLyBSZWZlcmVuY2UgdHlwZXMuXG52YXIgbmFtZSA9ICduYW1lZCdcbnZhciBoZXhhID0gJ2hleGFkZWNpbWFsJ1xudmFyIGRlY2kgPSAnZGVjaW1hbCdcblxuLy8gTWFwIG9mIGJhc2VzLlxudmFyIGJhc2VzID0ge31cblxuYmFzZXNbaGV4YV0gPSAxNlxuYmFzZXNbZGVjaV0gPSAxMFxuXG4vLyBNYXAgb2YgdHlwZXMgdG8gdGVzdHMuXG4vLyBFYWNoIHR5cGUgb2YgY2hhcmFjdGVyIHJlZmVyZW5jZSBhY2NlcHRzIGRpZmZlcmVudCBjaGFyYWN0ZXJzLlxuLy8gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZWN0IHdoZXRoZXIgYSByZWZlcmVuY2UgaGFzIGVuZGVkIChhcyB0aGUgc2VtaWNvbG9uXG4vLyBpcyBub3Qgc3RyaWN0bHkgbmVlZGVkKS5cbnZhciB0ZXN0cyA9IHt9XG5cbnRlc3RzW25hbWVdID0gYWxwaGFudW1lcmljYWxcbnRlc3RzW2RlY2ldID0gZGVjaW1hbFxudGVzdHNbaGV4YV0gPSBoZXhhZGVjaW1hbFxuXG4vLyBXYXJuaW5nIHR5cGVzLlxudmFyIG5hbWVkTm90VGVybWluYXRlZCA9IDFcbnZhciBudW1lcmljTm90VGVybWluYXRlZCA9IDJcbnZhciBuYW1lZEVtcHR5ID0gM1xudmFyIG51bWVyaWNFbXB0eSA9IDRcbnZhciBuYW1lZFVua25vd24gPSA1XG52YXIgbnVtZXJpY0Rpc2FsbG93ZWQgPSA2XG52YXIgbnVtZXJpY1Byb2hpYml0ZWQgPSA3XG5cbi8vIFdhcm5pbmcgbWVzc2FnZXMuXG52YXIgbWVzc2FnZXMgPSB7fVxuXG5tZXNzYWdlc1tuYW1lZE5vdFRlcm1pbmF0ZWRdID1cbiAgJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbidcbm1lc3NhZ2VzW251bWVyaWNOb3RUZXJtaW5hdGVkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbidcbm1lc3NhZ2VzW25hbWVkRW1wdHldID0gJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW251bWVyaWNFbXB0eV0gPSAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZW1wdHknXG5tZXNzYWdlc1tuYW1lZFVua25vd25dID0gJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUga25vd24nXG5tZXNzYWdlc1tudW1lcmljRGlzYWxsb3dlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZGlzYWxsb3dlZCdcbm1lc3NhZ2VzW251bWVyaWNQcm9oaWJpdGVkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSBVbmljb2RlIHJhbmdlJ1xuXG4vLyBXcmFwIHRvIGVuc3VyZSBjbGVhbiBwYXJhbWV0ZXJzIGFyZSBnaXZlbiB0byBgcGFyc2VgLlxuZnVuY3Rpb24gcGFyc2VFbnRpdGllcyh2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSB7fVxuICB2YXIgb3B0aW9uXG4gIHZhciBrZXlcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uc1trZXldXG4gICAgc2V0dGluZ3Nba2V5XSA9XG4gICAgICBvcHRpb24gPT09IG51bGwgfHwgb3B0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0c1trZXldIDogb3B0aW9uXG4gIH1cblxuICBpZiAoc2V0dGluZ3MucG9zaXRpb24uaW5kZW50IHx8IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0KSB7XG4gICAgc2V0dGluZ3MuaW5kZW50ID0gc2V0dGluZ3MucG9zaXRpb24uaW5kZW50IHx8IFtdXG4gICAgc2V0dGluZ3MucG9zaXRpb24gPSBzZXR0aW5ncy5wb3NpdGlvbi5zdGFydFxuICB9XG5cbiAgcmV0dXJuIHBhcnNlKHZhbHVlLCBzZXR0aW5ncylcbn1cblxuLy8gUGFyc2UgZW50aXRpZXMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gcGFyc2UodmFsdWUsIHNldHRpbmdzKSB7XG4gIHZhciBhZGRpdGlvbmFsID0gc2V0dGluZ3MuYWRkaXRpb25hbFxuICB2YXIgbm9uVGVybWluYXRlZCA9IHNldHRpbmdzLm5vblRlcm1pbmF0ZWRcbiAgdmFyIGhhbmRsZVRleHQgPSBzZXR0aW5ncy50ZXh0XG4gIHZhciBoYW5kbGVSZWZlcmVuY2UgPSBzZXR0aW5ncy5yZWZlcmVuY2VcbiAgdmFyIGhhbmRsZVdhcm5pbmcgPSBzZXR0aW5ncy53YXJuaW5nXG4gIHZhciB0ZXh0Q29udGV4dCA9IHNldHRpbmdzLnRleHRDb250ZXh0XG4gIHZhciByZWZlcmVuY2VDb250ZXh0ID0gc2V0dGluZ3MucmVmZXJlbmNlQ29udGV4dFxuICB2YXIgd2FybmluZ0NvbnRleHQgPSBzZXR0aW5ncy53YXJuaW5nQ29udGV4dFxuICB2YXIgcG9zID0gc2V0dGluZ3MucG9zaXRpb25cbiAgdmFyIGluZGVudCA9IHNldHRpbmdzLmluZGVudCB8fCBbXVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxpbmVzID0gLTFcbiAgdmFyIGNvbHVtbiA9IHBvcy5jb2x1bW4gfHwgMVxuICB2YXIgbGluZSA9IHBvcy5saW5lIHx8IDFcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBlbnRpdHlDaGFyYWN0ZXJzXG4gIHZhciBuYW1lZEVudGl0eVxuICB2YXIgdGVybWluYXRlZFxuICB2YXIgY2hhcmFjdGVyc1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciByZWZlcmVuY2VcbiAgdmFyIGZvbGxvd2luZ1xuICB2YXIgd2FybmluZ1xuICB2YXIgcmVhc29uXG4gIHZhciBvdXRwdXRcbiAgdmFyIGVudGl0eVxuICB2YXIgYmVnaW5cbiAgdmFyIHN0YXJ0XG4gIHZhciB0eXBlXG4gIHZhciB0ZXN0XG4gIHZhciBwcmV2XG4gIHZhciBuZXh0XG4gIHZhciBkaWZmXG4gIHZhciBlbmRcblxuICBpZiAodHlwZW9mIGFkZGl0aW9uYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgLy8gQ2FjaGUgdGhlIGN1cnJlbnQgcG9pbnQuXG4gIHByZXYgPSBub3coKVxuXG4gIC8vIFdyYXAgYGhhbmRsZVdhcm5pbmdgLlxuICB3YXJuaW5nID0gaGFuZGxlV2FybmluZyA/IHBhcnNlRXJyb3IgOiBub29wXG5cbiAgLy8gRW5zdXJlIHRoZSBhbGdvcml0aG0gd2Fsa3Mgb3ZlciB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCB0aGUgZW5kXG4gIC8vIChpbmNsdXNpdmUpLlxuICBpbmRleC0tXG4gIGxlbmd0aCsrXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIHdhcyBhIG5ld2xpbmUuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGNvbHVtbiA9IGluZGVudFtsaW5lc10gfHwgMVxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBhbXBlcnNhbmQpIHtcbiAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgICAvLyBUaGUgYmVoYXZpb3VyIGRlcGVuZHMgb24gdGhlIGlkZW50aXR5IG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgIGlmIChcbiAgICAgICAgZm9sbG93aW5nID09PSB0YWIgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBsaW5lRmVlZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGZvcm1GZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gc3BhY2UgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBhbXBlcnNhbmQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBsZXNzVGhhbiB8fFxuICAgICAgICBmb2xsb3dpbmcgIT09IGZvbGxvd2luZyB8fFxuICAgICAgICAoYWRkaXRpb25hbCAmJiBmb2xsb3dpbmcgPT09IGFkZGl0aW9uYWwpXG4gICAgICApIHtcbiAgICAgICAgLy8gTm90IGEgY2hhcmFjdGVyIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gTm8gY2hhcmFjdGVycyBhcmUgY29uc3VtZWQsIGFuZCBub3RoaW5nIGlzIHJldHVybmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBhbiBlcnJvciwgZWl0aGVyLlxuICAgICAgICBxdWV1ZSArPSBmcm9tQ2hhckNvZGUoY2hhcmFjdGVyKVxuICAgICAgICBjb2x1bW4rK1xuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgICBiZWdpbiA9IHN0YXJ0XG4gICAgICBlbmQgPSBzdGFydFxuXG4gICAgICBpZiAoZm9sbG93aW5nID09PSBudW1iZXJTaWduKSB7XG4gICAgICAgIC8vIE51bWVyaWNhbCBlbnRpdHkuXG4gICAgICAgIGVuZCA9ICsrYmVnaW5cblxuICAgICAgICAvLyBUaGUgYmVoYXZpb3VyIGZ1cnRoZXIgZGVwZW5kcyBvbiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgIGlmIChmb2xsb3dpbmcgPT09IHVwcGVyY2FzZVggfHwgZm9sbG93aW5nID09PSBsb3dlcmNhc2VYKSB7XG4gICAgICAgICAgLy8gQVNDSUkgaGV4IGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gaGV4YVxuICAgICAgICAgIGVuZCA9ICsrYmVnaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBU0NJSSBkaWdpdHMuXG4gICAgICAgICAgdHlwZSA9IGRlY2lcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTmFtZWQgZW50aXR5LlxuICAgICAgICB0eXBlID0gbmFtZVxuICAgICAgfVxuXG4gICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gJydcbiAgICAgIGVudGl0eSA9ICcnXG4gICAgICBjaGFyYWN0ZXJzID0gJydcbiAgICAgIHRlc3QgPSB0ZXN0c1t0eXBlXVxuICAgICAgZW5kLS1cblxuICAgICAgd2hpbGUgKCsrZW5kIDwgbGVuZ3RoKSB7XG4gICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgIGlmICghdGVzdChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlcnMgKz0gZnJvbUNoYXJDb2RlKGZvbGxvd2luZylcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gbWF0Y2ggYSBsZWdhY3kgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBJZiBzbywgd2UgY2FjaGUgdGhhdCBhcyB0aGUgbGFzdCB2aWFibGUgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZG8gbm90IG5lZWQgdG8gd2FsayBiYWNrd2FyZHMgbGF0ZXIuXG4gICAgICAgIGlmICh0eXBlID09PSBuYW1lICYmIG93bi5jYWxsKGxlZ2FjeSwgY2hhcmFjdGVycykpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IGxlZ2FjeVtjaGFyYWN0ZXJzXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRlcm1pbmF0ZWQgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZCkgPT09IHNlbWljb2xvblxuXG4gICAgICBpZiAodGVybWluYXRlZCkge1xuICAgICAgICBlbmQrK1xuXG4gICAgICAgIG5hbWVkRW50aXR5ID0gdHlwZSA9PT0gbmFtZSA/IGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSA6IGZhbHNlXG5cbiAgICAgICAgaWYgKG5hbWVkRW50aXR5KSB7XG4gICAgICAgICAgZW50aXR5Q2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICBlbnRpdHkgPSBuYW1lZEVudGl0eVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRpZmYgPSAxICsgZW5kIC0gc3RhcnRcblxuICAgICAgaWYgKCF0ZXJtaW5hdGVkICYmICFub25UZXJtaW5hdGVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICghY2hhcmFjdGVycykge1xuICAgICAgICAvLyBBbiBlbXB0eSAocG9zc2libGUpIGVudGl0eSBpcyB2YWxpZCwgdW5sZXNzIGl04oCZcyBudW1lcmljICh0aHVzIGFuXG4gICAgICAgIC8vIGFtcGVyc2FuZCBmb2xsb3dlZCBieSBhbiBvY3RvdGhvcnApLlxuICAgICAgICBpZiAodHlwZSAhPT0gbmFtZSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0VtcHR5LCBkaWZmKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IG5hbWUpIHtcbiAgICAgICAgLy8gQW4gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFueXRoaW5nIHVua25vd24sIGFuZCBub3QgdGVybWluYXRlZCwgaXNcbiAgICAgICAgLy8gaW52YWxpZC5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQgJiYgIWVudGl0eSkge1xuICAgICAgICAgIHdhcm5pbmcobmFtZWRVbmtub3duLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZXJlcyBzb21ldGhpbmcgYWZ0ZXIgYW4gZW50aXR5IG5hbWUgd2hpY2ggaXMgbm90IGtub3duLCBjYXBcbiAgICAgICAgICAvLyB0aGUgcmVmZXJlbmNlLlxuICAgICAgICAgIGlmIChlbnRpdHlDaGFyYWN0ZXJzICE9PSBjaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICBlbmQgPSBiZWdpbiArIGVudGl0eUNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICBkaWZmID0gMSArIGVuZCAtIGJlZ2luXG4gICAgICAgICAgICB0ZXJtaW5hdGVkID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgcmVmZXJlbmNlIGlzIG5vdCB0ZXJtaW5hdGVkLCB3YXJuLlxuICAgICAgICAgIGlmICghdGVybWluYXRlZCkge1xuICAgICAgICAgICAgcmVhc29uID0gZW50aXR5Q2hhcmFjdGVycyA/IG5hbWVkTm90VGVybWluYXRlZCA6IG5hbWVkRW1wdHlcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICAgICAgICBpZiAoZm9sbG93aW5nID09PSBlcXVhbHNUbykge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgICAgIGVudGl0eSA9IG51bGxcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbHBoYW51bWVyaWNhbChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2UgPSBlbnRpdHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGVybWluYXRlZCkge1xuICAgICAgICAgIC8vIEFsbCBub24tdGVybWluYXRlZCBudW1lcmljIGVudGl0aWVzIGFyZSBub3QgcmVuZGVyZWQsIGFuZCB0cmlnZ2VyIGFcbiAgICAgICAgICAvLyB3YXJuaW5nLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY05vdFRlcm1pbmF0ZWQsIGRpZmYpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHRlcm1pbmF0ZWQgYW5kIG51bWJlciwgcGFyc2UgYXMgZWl0aGVyIGhleGFkZWNpbWFsIG9yIGRlY2ltYWwuXG4gICAgICAgIHJlZmVyZW5jZSA9IHBhcnNlSW50KGNoYXJhY3RlcnMsIGJhc2VzW3R5cGVdKVxuXG4gICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgaXMgcHJvaGliaXRlZCwgYW5kIHJlcGxhY2VcbiAgICAgICAgLy8gd2l0aCByZXBsYWNlbWVudCBjaGFyYWN0ZXIuXG4gICAgICAgIGlmIChwcm9oaWJpdGVkKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNQcm9oaWJpdGVkLCBkaWZmKVxuICAgICAgICAgIHJlZmVyZW5jZSA9IGZyb21DaGFyQ29kZShyZXBsYWNlbWVudENoYXJhY3RlcilcbiAgICAgICAgfSBlbHNlIGlmIChyZWZlcmVuY2UgaW4gaW52YWxpZCkge1xuICAgICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgaXMgZGlzYWxsb3dlZCwgYW5kIHJlcGxhY2VcbiAgICAgICAgICAvLyBieSBhbiBhbHRlcm5hdGl2ZS5cbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNEaXNhbGxvd2VkLCBkaWZmKVxuICAgICAgICAgIHJlZmVyZW5jZSA9IGludmFsaWRbcmVmZXJlbmNlXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFBhcnNlIHRoZSBudW1iZXIuXG4gICAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgICAgICAgIGlmIChkaXNhbGxvd2VkKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RyaW5naWZ5IHRoZSBudW1iZXIuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZSA+IDB4ZmZmZikge1xuICAgICAgICAgICAgcmVmZXJlbmNlIC09IDB4MTAwMDBcbiAgICAgICAgICAgIG91dHB1dCArPSBmcm9tQ2hhckNvZGUoKHJlZmVyZW5jZSA+Pj4gKDEwICYgMHgzZmYpKSB8IDB4ZDgwMClcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IDB4ZGMwMCB8IChyZWZlcmVuY2UgJiAweDNmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWZlcmVuY2UgPSBvdXRwdXQgKyBmcm9tQ2hhckNvZGUocmVmZXJlbmNlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvdW5kIGl0IVxuICAgICAgLy8gRmlyc3QgZWF0IHRoZSBxdWV1ZWQgY2hhcmFjdGVycyBhcyBub3JtYWwgdGV4dCwgdGhlbiBlYXQgYW4gZW50aXR5LlxuICAgICAgaWYgKHJlZmVyZW5jZSkge1xuICAgICAgICBmbHVzaCgpXG5cbiAgICAgICAgcHJldiA9IG5vdygpXG4gICAgICAgIGluZGV4ID0gZW5kIC0gMVxuICAgICAgICBjb2x1bW4gKz0gZW5kIC0gc3RhcnQgKyAxXG4gICAgICAgIHJlc3VsdC5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgbmV4dCA9IG5vdygpXG4gICAgICAgIG5leHQub2Zmc2V0KytcblxuICAgICAgICBpZiAoaGFuZGxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgaGFuZGxlUmVmZXJlbmNlLmNhbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VDb250ZXh0LFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAge3N0YXJ0OiBwcmV2LCBlbmQ6IG5leHR9LFxuICAgICAgICAgICAgdmFsdWUuc2xpY2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IG5leHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIGNvdWxkIG5vdCBmaW5kIGEgcmVmZXJlbmNlLCBxdWV1ZSB0aGUgY2hlY2tlZCBjaGFyYWN0ZXJzIChhc1xuICAgICAgICAvLyBub3JtYWwgY2hhcmFjdGVycyksIGFuZCBtb3ZlIHRoZSBwb2ludGVyIHRvIHRoZWlyIGVuZC5cbiAgICAgICAgLy8gVGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHdlIGNhbiBiZSBjZXJ0YWluIG5laXRoZXIgbmV3bGluZXMgbm9yXG4gICAgICAgIC8vIGFtcGVyc2FuZHMgYXJlIGluY2x1ZGVkLlxuICAgICAgICBjaGFyYWN0ZXJzID0gdmFsdWUuc2xpY2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcnNcbiAgICAgICAgY29sdW1uICs9IGNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgIGluZGV4ID0gZW5kIC0gMVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIYW5kbGUgYW55dGhpbmcgb3RoZXIgdGhhbiBhbiBhbXBlcnNhbmQsIGluY2x1ZGluZyBuZXdsaW5lcyBhbmQgRU9GLlxuICAgICAgaWYgKFxuICAgICAgICBjaGFyYWN0ZXIgPT09IDEwIC8vIExpbmUgZmVlZFxuICAgICAgKSB7XG4gICAgICAgIGxpbmUrK1xuICAgICAgICBsaW5lcysrXG4gICAgICAgIGNvbHVtbiA9IDBcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbHVzaCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSByZWR1Y2VkIG5vZGVzLlxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG5cbiAgLy8gR2V0IGN1cnJlbnQgcG9zaXRpb24uXG4gIGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbGluZSxcbiAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgb2Zmc2V0OiBpbmRleCArIChwb3Mub2Zmc2V0IHx8IDApXG4gICAgfVxuICB9XG5cbiAgLy8g4oCcVGhyb3figJ0gYSBwYXJzZS1lcnJvcjogYSB3YXJuaW5nLlxuICBmdW5jdGlvbiBwYXJzZUVycm9yKGNvZGUsIG9mZnNldCkge1xuICAgIHZhciBwb3NpdGlvbiA9IG5vdygpXG5cbiAgICBwb3NpdGlvbi5jb2x1bW4gKz0gb2Zmc2V0XG4gICAgcG9zaXRpb24ub2Zmc2V0ICs9IG9mZnNldFxuXG4gICAgaGFuZGxlV2FybmluZy5jYWxsKHdhcm5pbmdDb250ZXh0LCBtZXNzYWdlc1tjb2RlXSwgcG9zaXRpb24sIGNvZGUpXG4gIH1cblxuICAvLyBGbHVzaCBgcXVldWVgIChub3JtYWwgdGV4dCkuXG4gIC8vIE1hY3JvIGludm9rZWQgYmVmb3JlIGVhY2ggZW50aXR5IGFuZCBhdCB0aGUgZW5kIG9mIGB2YWx1ZWAuXG4gIC8vIERvZXMgbm90aGluZyB3aGVuIGBxdWV1ZWAgaXMgZW1wdHkuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgcmVzdWx0LnB1c2gocXVldWUpXG5cbiAgICAgIGlmIChoYW5kbGVUZXh0KSB7XG4gICAgICAgIGhhbmRsZVRleHQuY2FsbCh0ZXh0Q29udGV4dCwgcXVldWUsIHtzdGFydDogcHJldiwgZW5kOiBub3coKX0pXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgaXMgb3V0c2lkZSB0aGUgcGVybWlzc2libGUgdW5pY29kZSByYW5nZS5cbmZ1bmN0aW9uIHByb2hpYml0ZWQoY29kZSkge1xuICByZXR1cm4gKGNvZGUgPj0gMHhkODAwICYmIGNvZGUgPD0gMHhkZmZmKSB8fCBjb2RlID4gMHgxMGZmZmZcbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgaXMgZGlzYWxsb3dlZC5cbmZ1bmN0aW9uIGRpc2FsbG93ZWQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIChjb2RlID49IDB4MDAwMSAmJiBjb2RlIDw9IDB4MDAwOCkgfHxcbiAgICBjb2RlID09PSAweDAwMGIgfHxcbiAgICAoY29kZSA+PSAweDAwMGQgJiYgY29kZSA8PSAweDAwMWYpIHx8XG4gICAgKGNvZGUgPj0gMHgwMDdmICYmIGNvZGUgPD0gMHgwMDlmKSB8fFxuICAgIChjb2RlID49IDB4ZmRkMCAmJiBjb2RlIDw9IDB4ZmRlZikgfHxcbiAgICAoY29kZSAmIDB4ZmZmZikgPT09IDB4ZmZmZiB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZlXG4gIClcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVuaGVyaXQgPSByZXF1aXJlKCd1bmhlcml0JylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBDb21waWxlciA9IHJlcXVpcmUoJy4vbGliL2NvbXBpbGVyLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5Db21waWxlciA9IENvbXBpbGVyXG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvcHRpb25zKSB7XG4gIHZhciBMb2NhbCA9IHVuaGVyaXQoQ29tcGlsZXIpXG4gIExvY2FsLnByb3RvdHlwZS5vcHRpb25zID0geHRlbmQoXG4gICAgTG9jYWwucHJvdG90eXBlLm9wdGlvbnMsXG4gICAgdGhpcy5kYXRhKCdzZXR0aW5ncycpLFxuICAgIG9wdGlvbnNcbiAgKVxuICB0aGlzLkNvbXBpbGVyID0gTG9jYWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgdG9nZ2xlID0gcmVxdWlyZSgnc3RhdGUtdG9nZ2xlJylcblxubW9kdWxlLmV4cG9ydHMgPSBDb21waWxlclxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgY29tcGlsZXIuXG5mdW5jdGlvbiBDb21waWxlcih0cmVlLCBmaWxlKSB7XG4gIHRoaXMuaW5MaW5rID0gZmFsc2VcbiAgdGhpcy5pblRhYmxlID0gZmFsc2VcbiAgdGhpcy50cmVlID0gdHJlZVxuICB0aGlzLmZpbGUgPSBmaWxlXG4gIHRoaXMub3B0aW9ucyA9IHh0ZW5kKHRoaXMub3B0aW9ucylcbiAgdGhpcy5zZXRPcHRpb25zKHt9KVxufVxuXG52YXIgcHJvdG8gPSBDb21waWxlci5wcm90b3R5cGVcblxuLy8gRW50ZXIgYW5kIGV4aXQgaGVscGVycy4gKi9cbnByb3RvLmVudGVyTGluayA9IHRvZ2dsZSgnaW5MaW5rJywgZmFsc2UpXG5wcm90by5lbnRlclRhYmxlID0gdG9nZ2xlKCdpblRhYmxlJywgZmFsc2UpXG5wcm90by5lbnRlckxpbmtSZWZlcmVuY2UgPSByZXF1aXJlKCcuL3V0aWwvZW50ZXItbGluay1yZWZlcmVuY2UnKVxuXG4vLyBDb25maWd1cmF0aW9uLlxucHJvdG8ub3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxucHJvdG8uc2V0T3B0aW9ucyA9IHJlcXVpcmUoJy4vc2V0LW9wdGlvbnMnKVxuXG5wcm90by5jb21waWxlID0gcmVxdWlyZSgnLi9tYWNyby9jb21waWxlJylcbnByb3RvLnZpc2l0ID0gcmVxdWlyZSgnLi9tYWNyby9vbmUnKVxucHJvdG8uYWxsID0gcmVxdWlyZSgnLi9tYWNyby9hbGwnKVxucHJvdG8uYmxvY2sgPSByZXF1aXJlKCcuL21hY3JvL2Jsb2NrJylcbnByb3RvLnZpc2l0T3JkZXJlZEl0ZW1zID0gcmVxdWlyZSgnLi9tYWNyby9vcmRlcmVkLWl0ZW1zJylcbnByb3RvLnZpc2l0VW5vcmRlcmVkSXRlbXMgPSByZXF1aXJlKCcuL21hY3JvL3Vub3JkZXJlZC1pdGVtcycpXG5cbi8vIEV4cG9zZSB2aXNpdG9ycy5cbnByb3RvLnZpc2l0b3JzID0ge1xuICByb290OiByZXF1aXJlKCcuL3Zpc2l0b3JzL3Jvb3QnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi92aXNpdG9ycy90ZXh0JyksXG4gIGhlYWRpbmc6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaGVhZGluZycpLFxuICBwYXJhZ3JhcGg6IHJlcXVpcmUoJy4vdmlzaXRvcnMvcGFyYWdyYXBoJyksXG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvYmxvY2txdW90ZScpLFxuICBsaXN0OiByZXF1aXJlKCcuL3Zpc2l0b3JzL2xpc3QnKSxcbiAgbGlzdEl0ZW06IHJlcXVpcmUoJy4vdmlzaXRvcnMvbGlzdC1pdGVtJyksXG4gIGlubGluZUNvZGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaW5saW5lLWNvZGUnKSxcbiAgY29kZTogcmVxdWlyZSgnLi92aXNpdG9ycy9jb2RlJyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaHRtbCcpLFxuICB0aGVtYXRpY0JyZWFrOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3RoZW1hdGljLWJyZWFrJyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi92aXNpdG9ycy9zdHJvbmcnKSxcbiAgZW1waGFzaXM6IHJlcXVpcmUoJy4vdmlzaXRvcnMvZW1waGFzaXMnKSxcbiAgYnJlYWs6IHJlcXVpcmUoJy4vdmlzaXRvcnMvYnJlYWsnKSxcbiAgZGVsZXRlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2RlbGV0ZScpLFxuICBsaW5rOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2xpbmsnKSxcbiAgbGlua1JlZmVyZW5jZTogcmVxdWlyZSgnLi92aXNpdG9ycy9saW5rLXJlZmVyZW5jZScpLFxuICBpbWFnZVJlZmVyZW5jZTogcmVxdWlyZSgnLi92aXNpdG9ycy9pbWFnZS1yZWZlcmVuY2UnKSxcbiAgZGVmaW5pdGlvbjogcmVxdWlyZSgnLi92aXNpdG9ycy9kZWZpbml0aW9uJyksXG4gIGltYWdlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2ltYWdlJyksXG4gIHRhYmxlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3RhYmxlJyksXG4gIHRhYmxlQ2VsbDogcmVxdWlyZSgnLi92aXNpdG9ycy90YWJsZS1jZWxsJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2ZtOiB0cnVlLFxuICBjb21tb25tYXJrOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBlbnRpdGllczogJ2ZhbHNlJyxcbiAgc2V0ZXh0OiBmYWxzZSxcbiAgY2xvc2VBdHg6IGZhbHNlLFxuICB0YWJsZUNlbGxQYWRkaW5nOiB0cnVlLFxuICB0YWJsZVBpcGVBbGlnbjogdHJ1ZSxcbiAgc3RyaW5nTGVuZ3RoOiBzdHJpbmdMZW5ndGgsXG4gIGluY3JlbWVudExpc3RNYXJrZXI6IHRydWUsXG4gIGZlbmNlczogZmFsc2UsXG4gIGZlbmNlOiAnYCcsXG4gIGJ1bGxldDogJy0nLFxuICBsaXN0SXRlbUluZGVudDogJ3RhYicsXG4gIHJ1bGU6ICcqJyxcbiAgcnVsZVNwYWNlczogdHJ1ZSxcbiAgcnVsZVJlcGV0aXRpb246IDMsXG4gIHN0cm9uZzogJyonLFxuICBlbXBoYXNpczogJ18nXG59XG5cbmZ1bmN0aW9uIHN0cmluZ0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUubGVuZ3RoXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYW51bWVyaWMgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWMnKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgZXNjYXBlcyA9IHJlcXVpcmUoJ21hcmtkb3duLWVzY2FwZXMnKVxudmFyIHByZWZpeCA9IHJlcXVpcmUoJy4vdXRpbC9lbnRpdHktcHJlZml4LWxlbmd0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBudW1iZXJTaWduID0gJyMnXG52YXIgYW1wZXJzYW5kID0gJyYnXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGFzdGVyaXNrID0gJyonXG52YXIgcGx1c1NpZ24gPSAnKydcbnZhciBkYXNoID0gJy0nXG52YXIgZG90ID0gJy4nXG52YXIgY29sb24gPSAnOidcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcbnZhciB2ZXJ0aWNhbEJhciA9ICd8J1xudmFyIHRpbGRlID0gJ34nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG5cbnZhciBlbnRpdGllcyA9IHtcbiAgJzwnOiAnJmx0OycsXG4gICc6JzogJyYjeDNBOycsXG4gICcmJzogJyZhbXA7JyxcbiAgJ3wnOiAnJiN4N0M7JyxcbiAgJ34nOiAnJiN4N0U7J1xufVxuXG52YXIgc2hvcnRjdXQgPSAnc2hvcnRjdXQnXG52YXIgbWFpbHRvID0gJ21haWx0bydcbnZhciBodHRwcyA9ICdodHRwcydcbnZhciBodHRwID0gJ2h0dHAnXG5cbnZhciBibGFua0V4cHJlc3Npb24gPSAvXFxuXFxzKiQvXG5cbi8vIEZhY3RvcnkgdG8gZXNjYXBlIGNoYXJhY3RlcnMuXG5mdW5jdGlvbiBmYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIGVzY2FwZVxuXG4gIC8vIEVzY2FwZSBwdW5jdHVhdGlvbiBjaGFyYWN0ZXJzIGluIGEgbm9kZeKAmXMgdmFsdWUuXG4gIGZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSwgbm9kZSwgcGFyZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGdmbSA9IG9wdGlvbnMuZ2ZtXG4gICAgdmFyIGNvbW1vbm1hcmsgPSBvcHRpb25zLmNvbW1vbm1hcmtcbiAgICB2YXIgcGVkYW50aWMgPSBvcHRpb25zLnBlZGFudGljXG4gICAgdmFyIG1hcmtlcnMgPSBjb21tb25tYXJrID8gW2RvdCwgcmlnaHRQYXJlbnRoZXNpc10gOiBbZG90XVxuICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW5cbiAgICB2YXIgaW5kZXggPSBzaWJsaW5ncyAmJiBzaWJsaW5ncy5pbmRleE9mKG5vZGUpXG4gICAgdmFyIHByZXZpb3VzID0gc2libGluZ3MgJiYgc2libGluZ3NbaW5kZXggLSAxXVxuICAgIHZhciBuZXh0ID0gc2libGluZ3MgJiYgc2libGluZ3NbaW5kZXggKyAxXVxuICAgIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgICB2YXIgZXNjYXBhYmxlID0gZXNjYXBlcyhvcHRpb25zKVxuICAgIHZhciBwb3NpdGlvbiA9IC0xXG4gICAgdmFyIHF1ZXVlID0gW11cbiAgICB2YXIgZXNjYXBlZCA9IHF1ZXVlXG4gICAgdmFyIGFmdGVyTmV3TGluZVxuICAgIHZhciBjaGFyYWN0ZXJcbiAgICB2YXIgd29yZENoYXJCZWZvcmVcbiAgICB2YXIgd29yZENoYXJBZnRlclxuICAgIHZhciBvZmZzZXRcbiAgICB2YXIgcmVwbGFjZVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBhZnRlck5ld0xpbmUgPSB0ZXh0KHByZXZpb3VzKSAmJiBibGFua0V4cHJlc3Npb24udGVzdChwcmV2aW91cy52YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJOZXdMaW5lID1cbiAgICAgICAgIXBhcmVudCB8fCBwYXJlbnQudHlwZSA9PT0gJ3Jvb3QnIHx8IHBhcmVudC50eXBlID09PSAncGFyYWdyYXBoJ1xuICAgIH1cblxuICAgIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pXG4gICAgICByZXBsYWNlID0gZmFsc2VcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgICAgYWZ0ZXJOZXdMaW5lID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSBiYWNrc2xhc2ggfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBncmF2ZUFjY2VudCB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBsZXNzVGhhbiB8fFxuICAgICAgICAoY2hhcmFjdGVyID09PSBhbXBlcnNhbmQgJiYgcHJlZml4KHZhbHVlLnNsaWNlKHBvc2l0aW9uKSkgPiAwKSB8fFxuICAgICAgICAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQgJiYgc2VsZi5pbkxpbmspIHx8XG4gICAgICAgIChnZm0gJiYgY2hhcmFjdGVyID09PSB0aWxkZSAmJiB2YWx1ZS5jaGFyQXQocG9zaXRpb24gKyAxKSA9PT0gdGlsZGUpIHx8XG4gICAgICAgIChnZm0gJiZcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyICYmXG4gICAgICAgICAgKHNlbGYuaW5UYWJsZSB8fCBhbGlnbm1lbnQodmFsdWUsIHBvc2l0aW9uKSkpIHx8XG4gICAgICAgIChjaGFyYWN0ZXIgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBsZWFkaW5nL3RyYWlsaW5nIHVuZGVyc2NvcmVzIHRvIHRoZSBtdWx0aW5vZGUgdmVyc2lvbiBiZWxvdy5cbiAgICAgICAgICBwb3NpdGlvbiA+IDAgJiZcbiAgICAgICAgICBwb3NpdGlvbiA8IGxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHxcbiAgICAgICAgICAgICFhbHBoYW51bWVyaWModmFsdWUuY2hhckF0KHBvc2l0aW9uIC0gMSkpIHx8XG4gICAgICAgICAgICAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdChwb3NpdGlvbiArIDEpKSkpIHx8XG4gICAgICAgIChnZm0gJiYgIXNlbGYuaW5MaW5rICYmIGNoYXJhY3RlciA9PT0gY29sb24gJiYgcHJvdG9jb2wocXVldWUuam9pbignJykpKVxuICAgICAgKSB7XG4gICAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGFmdGVyTmV3TGluZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbiB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbiB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGRhc2ggfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IHBsdXNTaWduXG4gICAgICAgICkge1xuICAgICAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gcG9zaXRpb24gKyAxXG5cbiAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWRlY2ltYWwodmFsdWUuY2hhckF0KG9mZnNldCkpKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCsrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hcmtlcnMuaW5kZXhPZih2YWx1ZS5jaGFyQXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICAgICAgICBuZXh0ID0gdmFsdWUuY2hhckF0KG9mZnNldCArIDEpXG5cbiAgICAgICAgICAgIGlmICghbmV4dCB8fCBuZXh0ID09PSBzcGFjZSB8fCBuZXh0ID09PSB0YWIgfHwgbmV4dCA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgICAgICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwb3NpdGlvbiwgb2Zmc2V0KSlcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSBvZmZzZXRcbiAgICAgICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuICAgICAgICAgICAgICByZXBsYWNlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWZ0ZXJOZXdMaW5lICYmICF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYWZ0ZXJOZXdMaW5lID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgcXVldWUucHVzaChyZXBsYWNlID8gb25lKGNoYXJhY3RlcikgOiBjaGFyYWN0ZXIpXG4gICAgfVxuXG4gICAgLy8gTXVsdGktbm9kZSB2ZXJzaW9ucy5cbiAgICBpZiAoc2libGluZ3MgJiYgdGV4dChub2RlKSkge1xuICAgICAgLy8gQ2hlY2sgZm9yIGFuIG9wZW5pbmcgcGFyZW50aGVzZXMgYWZ0ZXIgYSBsaW5rLXJlZmVyZW5jZSAod2hpY2ggY2FuIGJlXG4gICAgICAvLyBqb2luZWQgYnkgd2hpdGUtc3BhY2UpLlxuICAgICAgaWYgKHByZXZpb3VzICYmIHByZXZpb3VzLnJlZmVyZW5jZVR5cGUgPT09IHNob3J0Y3V0KSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTFcbiAgICAgICAgbGVuZ3RoID0gZXNjYXBlZC5sZW5ndGhcblxuICAgICAgICB3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IGVzY2FwZWRbcG9zaXRpb25dXG5cbiAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMgfHwgY2hhcmFjdGVyID09PSBjb2xvbikge1xuICAgICAgICAgICAgZXNjYXBlZFtwb3NpdGlvbl0gPSBvbmUoY2hhcmFjdGVyKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBub2RlIGlzIGFsbCBzcGFjZXMgLyB0YWJzLCBwcmVjZWRlZCBieSBhIHNob3J0Y3V0LFxuICAgICAgICAvLyBhbmQgZm9sbG93ZWQgYnkgYSB0ZXh0IHN0YXJ0aW5nIHdpdGggYChgLCBlc2NhcGUgaXQuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXh0KG5leHQpICYmXG4gICAgICAgICAgcG9zaXRpb24gPT09IGxlbmd0aCAmJlxuICAgICAgICAgIG5leHQudmFsdWUuY2hhckF0KDApID09PSBsZWZ0UGFyZW50aGVzaXNcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXNjYXBlZC5wdXNoKGJhY2tzbGFzaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmUgbm9uLWF1dG8tbGlua3MgYXJlIG5vdCBzZWVuIGFzIGxpbmtzLiAgVGhpcyBwYXR0ZXJuIG5lZWRzIHRvXG4gICAgICAvLyBjaGVjayB0aGUgcHJlY2VkaW5nIG5vZGVzIHRvby5cbiAgICAgIGlmIChcbiAgICAgICAgZ2ZtICYmXG4gICAgICAgICFzZWxmLmluTGluayAmJlxuICAgICAgICB0ZXh0KHByZXZpb3VzKSAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQoMCkgPT09IGNvbG9uICYmXG4gICAgICAgIHByb3RvY29sKHByZXZpb3VzLnZhbHVlLnNsaWNlKC02KSlcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkWzBdID0gb25lKGNvbG9uKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgYW1wZXJzYW5kIGlmIGl0IHdvdWxkIG90aGVyd2lzZSBzdGFydCBhbiBlbnRpdHkuXG4gICAgICBpZiAoXG4gICAgICAgIHRleHQobmV4dCkgJiZcbiAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSBhbXBlcnNhbmQgJiZcbiAgICAgICAgcHJlZml4KGFtcGVyc2FuZCArIG5leHQudmFsdWUpICE9PSAwXG4gICAgICApIHtcbiAgICAgICAgZXNjYXBlZFtlc2NhcGVkLmxlbmd0aCAtIDFdID0gb25lKGFtcGVyc2FuZClcbiAgICAgIH1cblxuICAgICAgLy8gRXNjYXBlIGV4Y2xhbWF0aW9uIG1hcmtzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGxpbmtzLlxuICAgICAgaWYgKFxuICAgICAgICBuZXh0ICYmXG4gICAgICAgIG5leHQudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIHZhbHVlLmNoYXJBdChsZW5ndGggLSAxKSA9PT0gZXhjbGFtYXRpb25NYXJrXG4gICAgICApIHtcbiAgICAgICAgZXNjYXBlZFtlc2NhcGVkLmxlbmd0aCAtIDFdID0gb25lKGV4Y2xhbWF0aW9uTWFyaylcbiAgICAgIH1cblxuICAgICAgLy8gRXNjYXBlIGRvdWJsZSB0aWxkZXMgaW4gR0ZNLlxuICAgICAgaWYgKFxuICAgICAgICBnZm0gJiZcbiAgICAgICAgdGV4dChuZXh0KSAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMSkgPT09IHRpbGRlICYmXG4gICAgICAgIG5leHQudmFsdWUuY2hhckF0KDApID09PSB0aWxkZVxuICAgICAgKSB7XG4gICAgICAgIGVzY2FwZWQuc3BsaWNlKC0xLCAwLCBiYWNrc2xhc2gpXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSB1bmRlcnNjb3JlcywgYnV0IG5vdCBtaWQtd29yZCAodW5sZXNzIGluIHBlZGFudGljIG1vZGUpLlxuICAgICAgd29yZENoYXJCZWZvcmUgPSB0ZXh0KHByZXZpb3VzKSAmJiBhbHBoYW51bWVyaWMocHJldmlvdXMudmFsdWUuc2xpY2UoLTEpKVxuICAgICAgd29yZENoYXJBZnRlciA9IHRleHQobmV4dCkgJiYgYWxwaGFudW1lcmljKG5leHQudmFsdWUuY2hhckF0KDApKVxuXG4gICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZSA9PT0gdW5kZXJzY29yZSAmJlxuICAgICAgICAgIChwZWRhbnRpYyB8fCAhd29yZENoYXJCZWZvcmUgfHwgIXdvcmRDaGFyQWZ0ZXIpXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQudW5zaGlmdChiYWNrc2xhc2gpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5jaGFyQXQoMCkgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHwgIXdvcmRDaGFyQmVmb3JlIHx8ICFhbHBoYW51bWVyaWModmFsdWUuY2hhckF0KDEpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXNjYXBlZC51bnNoaWZ0KGJhY2tzbGFzaClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMSkgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHxcbiAgICAgICAgICAgICF3b3JkQ2hhckFmdGVyIHx8XG4gICAgICAgICAgICAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdChsZW5ndGggLSAyKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQuc3BsaWNlKC0xLCAwLCBiYWNrc2xhc2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXNjYXBlZC5qb2luKCcnKVxuXG4gICAgZnVuY3Rpb24gb25lKGNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIGVzY2FwYWJsZS5pbmRleE9mKGNoYXJhY3RlcikgPT09IC0xXG4gICAgICAgID8gZW50aXRpZXNbY2hhcmFjdGVyXVxuICAgICAgICA6IGJhY2tzbGFzaCArIGNoYXJhY3RlclxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgaW5kZXhgIGluIGB2YWx1ZWAgaXMgaW5zaWRlIGFuIGFsaWdubWVudCByb3cuXG5mdW5jdGlvbiBhbGlnbm1lbnQodmFsdWUsIGluZGV4KSB7XG4gIHZhciBzdGFydCA9IHZhbHVlLmxhc3RJbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgdmFyIGVuZCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICB2YXIgY2hhclxuXG4gIGVuZCA9IGVuZCA9PT0gLTEgPyB2YWx1ZS5sZW5ndGggOiBlbmRcblxuICB3aGlsZSAoKytzdGFydCA8IGVuZCkge1xuICAgIGNoYXIgPSB2YWx1ZS5jaGFyQXQoc3RhcnQpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyICE9PSBjb2xvbiAmJlxuICAgICAgY2hhciAhPT0gZGFzaCAmJlxuICAgICAgY2hhciAhPT0gc3BhY2UgJiZcbiAgICAgIGNoYXIgIT09IHZlcnRpY2FsQmFyXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vLyBDaGVjayBpZiBgbm9kZWAgaXMgYSB0ZXh0IG5vZGUuXG5mdW5jdGlvbiB0ZXh0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlID09PSAndGV4dCdcbn1cblxuLy8gQ2hlY2sgaWYgYHZhbHVlYCBlbmRzIGluIGEgcHJvdG9jb2wuXG5mdW5jdGlvbiBwcm90b2NvbCh2YWx1ZSkge1xuICB2YXIgdGFpbCA9IHZhbHVlLnNsaWNlKC02KS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiB0YWlsID09PSBtYWlsdG8gfHwgdGFpbC5zbGljZSgtNSkgPT09IGh0dHBzIHx8IHRhaWwuc2xpY2UoLTQpID09PSBodHRwXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbGxcblxuLy8gVmlzaXQgYWxsIGNoaWxkcmVuIG9mIGBwYXJlbnRgLlxuZnVuY3Rpb24gYWxsKHBhcmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBzZWxmLnZpc2l0KGNoaWxkcmVuW2luZGV4XSwgcGFyZW50KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG5cbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcbnZhciB0cmlwbGUgPSBibGFuayArIGxpbmVGZWVkXG52YXIgY29tbWVudCA9IGJsYW5rICsgJzwhLS0tLT4nICsgYmxhbmtcblxuLy8gU3RyaW5naWZ5IGEgYmxvY2sgbm9kZSB3aXRoIGJsb2NrIGNoaWxkcmVuIChlLmcuLCBgcm9vdGAgb3IgYGJsb2NrcXVvdGVgKS5cbi8vIEtub3dzIGFib3V0IGNvZGUgZm9sbG93aW5nIGEgbGlzdCwgb3IgYWRqYWNlbnQgbGlzdHMgd2l0aCBzaW1pbGFyIGJ1bGxldHMsXG4vLyBhbmQgcGxhY2VzIGFuIGV4dHJhIGxpbmUgZmVlZCBiZXR3ZWVuIHRoZW0uXG5mdW5jdGlvbiBibG9jayhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb3B0aW9ucyA9IHNlbGYub3B0aW9uc1xuICB2YXIgZmVuY2VzID0gb3B0aW9ucy5mZW5jZXNcbiAgdmFyIGdhcCA9IG9wdGlvbnMuY29tbW9ubWFyayA/IGNvbW1lbnQgOiB0cmlwbGVcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcHJldmlvdXNcbiAgdmFyIGNoaWxkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2aW91cyA9IGNoaWxkXG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgLy8gQSBsaXN0IHByZWNlZGluZyBhbm90aGVyIGxpc3QgdGhhdCBhcmUgZXF1YWxseSBvcmRlcmVkLCBvciBhXG4gICAgICAvLyBsaXN0IHByZWNlZGluZyBhbiBpbmRlbnRlZCBjb2RlIGJsb2NrLCBuZWVkIGEgZ2FwIGJldHdlZW4gdGhlbSxcbiAgICAgIC8vIHNvIGFzIG5vdCB0byBzZWUgdGhlbSBhcyBvbmUgbGlzdCwgb3IgY29udGVudCBvZiB0aGUgbGlzdCxcbiAgICAgIC8vIHJlc3BlY3RpdmVseS5cbiAgICAgIC8vXG4gICAgICAvLyBJbiBjb21tb25tYXJrLCBvbmx5IHNvbWV0aGluZyB0aGF0IGJyZWFrcyBib3RoIHVwIGNhbiBkbyB0aGF0LFxuICAgICAgLy8gc28gd2Ugb3B0IGZvciBhbiBlbXB0eSwgaW52aXNpYmxlIGNvbW1lbnQuICBJbiBvdGhlciBmbGF2b3VycyxcbiAgICAgIC8vIHR3byBibGFuayBsaW5lcyBhcmUgZmluZS5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXMudHlwZSA9PT0gJ2xpc3QnICYmXG4gICAgICAgICgoY2hpbGQudHlwZSA9PT0gJ2xpc3QnICYmIHByZXZpb3VzLm9yZGVyZWQgPT09IGNoaWxkLm9yZGVyZWQpIHx8XG4gICAgICAgICAgKGNoaWxkLnR5cGUgPT09ICdjb2RlJyAmJiAhY2hpbGQubGFuZyAmJiAhZmVuY2VzKSlcbiAgICAgICkge1xuICAgICAgICB2YWx1ZXMucHVzaChnYXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChibGFuaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZXMucHVzaChzZWxmLnZpc2l0KGNoaWxkLCBub2RlKSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29tcGFjdCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtY29tcGFjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZVxuXG4vLyBTdHJpbmdpZnkgdGhlIGdpdmVuIHRyZWUuXG5mdW5jdGlvbiBjb21waWxlKCkge1xuICByZXR1cm4gdGhpcy52aXNpdChjb21wYWN0KHRoaXMudHJlZSwgdGhpcy5vcHRpb25zLmNvbW1vbm1hcmspKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb25lXG5cbmZ1bmN0aW9uIG9uZShub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciB2aXNpdG9ycyA9IHNlbGYudmlzaXRvcnNcblxuICAvLyBGYWlsIG9uIHVua25vd24gbm9kZXMuXG4gIGlmICh0eXBlb2YgdmlzaXRvcnNbbm9kZS50eXBlXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlbGYuZmlsZS5mYWlsKFxuICAgICAgbmV3IEVycm9yKFxuICAgICAgICAnTWlzc2luZyBjb21waWxlciBmb3Igbm9kZSBvZiB0eXBlIGAnICsgbm9kZS50eXBlICsgJ2A6IGAnICsgbm9kZSArICdgJ1xuICAgICAgKSxcbiAgICAgIG5vZGVcbiAgICApXG4gIH1cblxuICByZXR1cm4gdmlzaXRvcnNbbm9kZS50eXBlXS5jYWxsKHNlbGYsIG5vZGUsIHBhcmVudClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9yZGVyZWRJdGVtc1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGRvdCA9ICcuJ1xuXG52YXIgYmxhbmsgPSBsaW5lRmVlZCArIGxpbmVGZWVkXG5cbi8vIFZpc2l0IG9yZGVyZWQgbGlzdCBpdGVtcy5cbi8vXG4vLyBTdGFydHMgdGhlIGxpc3Qgd2l0aFxuLy8gYG5vZGUuc3RhcnRgIGFuZCBpbmNyZW1lbnRzIGVhY2ggZm9sbG93aW5nIGxpc3QgaXRlbVxuLy8gYnVsbGV0IGJ5IG9uZTpcbi8vXG4vLyAgICAgMi4gZm9vXG4vLyAgICAgMy4gYmFyXG4vL1xuLy8gSW4gYGluY3JlbWVudExpc3RNYXJrZXI6IGZhbHNlYCBtb2RlLCBkb2VzIG5vdCBpbmNyZW1lbnRcbi8vIGVhY2ggbWFya2VyIGFuZCBzdGF5cyBvbiBgbm9kZS5zdGFydGA6XG4vL1xuLy8gICAgIDEuIGZvb1xuLy8gICAgIDEuIGJhclxuZnVuY3Rpb24gb3JkZXJlZEl0ZW1zKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBmbiA9IHNlbGYudmlzaXRvcnMubGlzdEl0ZW1cbiAgdmFyIGluY3JlbWVudCA9IHNlbGYub3B0aW9ucy5pbmNyZW1lbnRMaXN0TWFya2VyXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgc3RhcnQgPSBub2RlLnN0YXJ0XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgYnVsbGV0XG5cbiAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMSA6IHN0YXJ0XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBidWxsZXQgPSAoaW5jcmVtZW50ID8gc3RhcnQgKyBpbmRleCA6IHN0YXJ0KSArIGRvdFxuICAgIHZhbHVlc1tpbmRleF0gPSBmbi5jYWxsKHNlbGYsIGNoaWxkcmVuW2luZGV4XSwgbm9kZSwgaW5kZXgsIGJ1bGxldClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihub2RlLnNwcmVhZCA/IGJsYW5rIDogbGluZUZlZWQpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB1bm9yZGVyZWRJdGVtc1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xuXG52YXIgYmxhbmsgPSBsaW5lRmVlZCArIGxpbmVGZWVkXG5cbi8vIFZpc2l0IHVub3JkZXJlZCBsaXN0IGl0ZW1zLiAgVXNlcyBgb3B0aW9ucy5idWxsZXRgIGFzIGVhY2ggaXRlbeKAmXMgYnVsbGV0LlxuZnVuY3Rpb24gdW5vcmRlcmVkSXRlbXMobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGJ1bGxldCA9IHNlbGYub3B0aW9ucy5idWxsZXRcbiAgdmFyIGZuID0gc2VsZi52aXNpdG9ycy5saXN0SXRlbVxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHZhbHVlcyA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YWx1ZXNbaW5kZXhdID0gZm4uY2FsbChzZWxmLCBjaGlsZHJlbltpbmRleF0sIG5vZGUsIGluZGV4LCBidWxsZXQpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4obm9kZS5zcHJlYWQgPyBibGFuayA6IGxpbmVGZWVkKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlbmNvZGUgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG52YXIgZXNjYXBlRmFjdG9yeSA9IHJlcXVpcmUoJy4vZXNjYXBlJylcbnZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vdXRpbC9pZGVudGl0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0T3B0aW9uc1xuXG4vLyBNYXAgb2YgYXBwbGljYWJsZSBlbnVtcy5cbnZhciBtYXBzID0ge1xuICBlbnRpdGllczoge3RydWU6IHRydWUsIGZhbHNlOiB0cnVlLCBudW1iZXJzOiB0cnVlLCBlc2NhcGU6IHRydWV9LFxuICBidWxsZXQ6IHsnKic6IHRydWUsICctJzogdHJ1ZSwgJysnOiB0cnVlfSxcbiAgcnVsZTogeyctJzogdHJ1ZSwgXzogdHJ1ZSwgJyonOiB0cnVlfSxcbiAgbGlzdEl0ZW1JbmRlbnQ6IHt0YWI6IHRydWUsIG1peGVkOiB0cnVlLCAxOiB0cnVlfSxcbiAgZW1waGFzaXM6IHtfOiB0cnVlLCAnKic6IHRydWV9LFxuICBzdHJvbmc6IHtfOiB0cnVlLCAnKic6IHRydWV9LFxuICBmZW5jZTogeydgJzogdHJ1ZSwgJ34nOiB0cnVlfVxufVxuXG4vLyBFeHBvc2UgYHZhbGlkYXRlYC5cbnZhciB2YWxpZGF0ZSA9IHtcbiAgYm9vbGVhbjogdmFsaWRhdGVCb29sZWFuLFxuICBzdHJpbmc6IHZhbGlkYXRlU3RyaW5nLFxuICBudW1iZXI6IHZhbGlkYXRlTnVtYmVyLFxuICBmdW5jdGlvbjogdmFsaWRhdGVGdW5jdGlvblxufVxuXG4vLyBTZXQgb3B0aW9ucy4gIERvZXMgbm90IG92ZXJ3cml0ZSBwcmV2aW91c2x5IHNldCBvcHRpb25zLlxuZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY3VycmVudCA9IHNlbGYub3B0aW9uc1xuICB2YXIgcnVsZVJlcGV0aXRpb25cbiAgdmFyIGtleVxuXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0geHRlbmQob3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyBvcHRpb25zICsgJ2AgZm9yIHNldHRpbmcgYG9wdGlvbnNgJylcbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgdmFsaWRhdGVbdHlwZW9mIGRlZmF1bHRzW2tleV1dKG9wdGlvbnMsIGtleSwgY3VycmVudFtrZXldLCBtYXBzW2tleV0pXG4gIH1cblxuICBydWxlUmVwZXRpdGlvbiA9IG9wdGlvbnMucnVsZVJlcGV0aXRpb25cblxuICBpZiAocnVsZVJlcGV0aXRpb24gJiYgcnVsZVJlcGV0aXRpb24gPCAzKSB7XG4gICAgcmFpc2UocnVsZVJlcGV0aXRpb24sICdvcHRpb25zLnJ1bGVSZXBldGl0aW9uJylcbiAgfVxuXG4gIHNlbGYuZW5jb2RlID0gZW5jb2RlRmFjdG9yeShTdHJpbmcob3B0aW9ucy5lbnRpdGllcykpXG4gIHNlbGYuZXNjYXBlID0gZXNjYXBlRmFjdG9yeShvcHRpb25zKVxuXG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnNcblxuICByZXR1cm4gc2VsZlxufVxuXG4vLyBWYWxpZGF0ZSBhIHZhbHVlIHRvIGJlIGJvb2xlYW4uIERlZmF1bHRzIHRvIGBkZWZgLiAgUmFpc2VzIGFuIGV4Y2VwdGlvbiB3aXRoXG4vLyBgY29udGV4dFtuYW1lXWAgd2hlbiBub3QgYSBib29sZWFuLlxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNvbnRleHQsIG5hbWUsIGRlZikge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W25hbWVdXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IGRlZlxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmFpc2UodmFsdWUsICdvcHRpb25zLicgKyBuYW1lKVxuICB9XG5cbiAgY29udGV4dFtuYW1lXSA9IHZhbHVlXG59XG5cbi8vIFZhbGlkYXRlIGEgdmFsdWUgdG8gYmUgYm9vbGVhbi4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uIHdpdGhcbi8vIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBhIGJvb2xlYW4uXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlcihjb250ZXh0LCBuYW1lLCBkZWYpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBpbiBgbWFwYC4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uXG4vLyB3aXRoIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBpbiBgbWFwYC5cbmZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKGNvbnRleHQsIG5hbWUsIGRlZiwgbWFwKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRbbmFtZV1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHZhbHVlID0gZGVmXG4gIH1cblxuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblxuICBpZiAoISh2YWx1ZSBpbiBtYXApKSB7XG4gICAgcmFpc2UodmFsdWUsICdvcHRpb25zLicgKyBuYW1lKVxuICB9XG5cbiAgY29udGV4dFtuYW1lXSA9IHZhbHVlXG59XG5cbi8vIFZhbGlkYXRlIGEgdmFsdWUgdG8gYmUgZnVuY3Rpb24uIERlZmF1bHRzIHRvIGBkZWZgLiAgUmFpc2VzIGFuIGV4Y2VwdGlvblxuLy8gd2l0aCBgY29udGV4dFtuYW1lXWAgd2hlbiBub3QgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIHZhbGlkYXRlRnVuY3Rpb24oY29udGV4dCwgbmFtZSwgZGVmKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRbbmFtZV1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHZhbHVlID0gZGVmXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFpc2UodmFsdWUsICdvcHRpb25zLicgKyBuYW1lKVxuICB9XG5cbiAgY29udGV4dFtuYW1lXSA9IHZhbHVlXG59XG5cbi8vIEZhY3RvcnkgdG8gZW5jb2RlIEhUTUwgZW50aXRpZXMuICBDcmVhdGVzIGEgbm8tb3BlcmF0aW9uIGZ1bmN0aW9uIHdoZW5cbi8vIGB0eXBlYCBpcyBgJ2ZhbHNlJ2AsIGEgZnVuY3Rpb24gd2hpY2ggZW5jb2RlcyB1c2luZyBuYW1lZCByZWZlcmVuY2VzIHdoZW5cbi8vIGB0eXBlYCBpcyBgJ3RydWUnYCwgYW5kIGEgZnVuY3Rpb24gd2hpY2ggZW5jb2RlcyB1c2luZyBudW1iZXJlZCByZWZlcmVuY2VzXG4vLyB3aGVuIGB0eXBlYCBpcyBgJ251bWJlcnMnYC5cbmZ1bmN0aW9uIGVuY29kZUZhY3RvcnkodHlwZSkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG5cbiAgaWYgKHR5cGUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gaWRlbnRpdHlcbiAgfVxuXG4gIGlmICh0eXBlID09PSAndHJ1ZScpIHtcbiAgICBvcHRpb25zLnVzZU5hbWVkUmVmZXJlbmNlcyA9IHRydWVcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnZXNjYXBlJykge1xuICAgIG9wdGlvbnMuZXNjYXBlT25seSA9IHRydWVcbiAgICBvcHRpb25zLnVzZU5hbWVkUmVmZXJlbmNlcyA9IHRydWVcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVkXG5cbiAgLy8gRW5jb2RlIEhUTUwgZW50aXRpZXMgdXNpbmcgdGhlIGJvdW5kIG9wdGlvbnMuXG4gIGZ1bmN0aW9uIHdyYXBwZWQodmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2RlKHZhbHVlLCBvcHRpb25zKVxuICB9XG59XG5cbi8vIFRocm93IGFuIGV4Y2VwdGlvbiB3aXRoIGluIGl0cyBgbWVzc2FnZWAgYHZhbHVlYCBhbmQgYG5hbWVgLlxuZnVuY3Rpb24gcmFpc2UodmFsdWUsIG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGAnICsgdmFsdWUgKyAnYCBmb3Igc2V0dGluZyBgJyArIG5hbWUgKyAnYCcpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGVudGl0eVByZWZpeExlbmd0aCA9IHJlcXVpcmUoJy4vZW50aXR5LXByZWZpeC1sZW5ndGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxudmFyIGFtcGVyc2FuZCA9ICcmJ1xuXG52YXIgcHVuY3R1YXRpb25FeHBwcmVzaW9uID0gL1stIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+X10vXG5cbi8vIEZvciBzaG9ydGN1dCBhbmQgY29sbGFwc2VkIHJlZmVyZW5jZSBsaW5rcywgdGhlIGNvbnRlbnRzIGlzIGFsc28gYW5cbi8vIGlkZW50aWZpZXIsIHNvIHdlIG5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgZW5jb2RpbmcgYW5kIGVzY2FwaW5nXG4vLyB0aGF0IHdlcmUgcHJlc2VudCBpbiB0aGUgc291cmNlIHN0cmluZy5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSB1bmVzY2FwZWQgJiB1bmVuY29kZWQgdmFsdWUgZnJvbSBzaG9ydGN1dOKAmXNcbi8vIGNoaWxkIG5vZGVzIGFuZCB0aGUgaWRlbnRpZmllciBhbmQgZW5jb2RlcyB0aGUgZm9ybWVyIGFjY29yZGluZyB0b1xuLy8gdGhlIGxhdHRlci5cbmZ1bmN0aW9uIGNvcHkodmFsdWUsIGlkZW50aWZpZXIpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgY291bnQgPSBpZGVudGlmaWVyLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc2l0aW9uID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBzdGFydFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIFRha2UgbmV4dCBub24tcHVuY3R1YXRpb24gY2hhcmFjdGVycyBmcm9tIGB2YWx1ZWAuXG4gICAgc3RhcnQgPSBpbmRleFxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmICFwdW5jdHVhdGlvbkV4cHByZXNpb24udGVzdCh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgICAgaW5kZXggKz0gMVxuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBpbmRleCkpXG5cbiAgICAvLyBBZHZhbmNlIGBwb3NpdGlvbmAgdG8gdGhlIG5leHQgcHVuY3R1YXRpb24gY2hhcmFjdGVyLlxuICAgIHdoaWxlIChcbiAgICAgIHBvc2l0aW9uIDwgY291bnQgJiZcbiAgICAgICFwdW5jdHVhdGlvbkV4cHByZXNpb24udGVzdChpZGVudGlmaWVyLmNoYXJBdChwb3NpdGlvbikpXG4gICAgKSB7XG4gICAgICBwb3NpdGlvbiArPSAxXG4gICAgfVxuXG4gICAgLy8gVGFrZSBuZXh0IHB1bmN0dWF0aW9uIGNoYXJhY3RlcnMgZnJvbSBgaWRlbnRpZmllcmAuXG4gICAgc3RhcnQgPSBwb3NpdGlvblxuXG4gICAgd2hpbGUgKFxuICAgICAgcG9zaXRpb24gPCBjb3VudCAmJlxuICAgICAgcHVuY3R1YXRpb25FeHBwcmVzaW9uLnRlc3QoaWRlbnRpZmllci5jaGFyQXQocG9zaXRpb24pKVxuICAgICkge1xuICAgICAgaWYgKGlkZW50aWZpZXIuY2hhckF0KHBvc2l0aW9uKSA9PT0gYW1wZXJzYW5kKSB7XG4gICAgICAgIHBvc2l0aW9uICs9IGVudGl0eVByZWZpeExlbmd0aChpZGVudGlmaWVyLnNsaWNlKHBvc2l0aW9uKSlcbiAgICAgIH1cblxuICAgICAgcG9zaXRpb24gKz0gMVxuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKGlkZW50aWZpZXIuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKSlcblxuICAgIC8vIEFkdmFuY2UgYGluZGV4YCB0byB0aGUgbmV4dCBub24tcHVuY3R1YXRpb24gY2hhcmFjdGVyLlxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiBwdW5jdHVhdGlvbkV4cHByZXNpb24udGVzdCh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgICAgaW5kZXggKz0gMVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY2xvc2VcblxudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG5cbi8vIFRoZXJlIGlzIGN1cnJlbnRseSBubyB3YXkgdG8gc3VwcG9ydCBuZXN0ZWQgZGVsaW1pdGVycyBhY3Jvc3MgTWFya2Rvd24ucGwsXG4vLyBDb21tb25NYXJrLCBhbmQgR2l0SHViIChSZWRDYXJwZXQpLiAgVGhlIGZvbGxvd2luZyBjb2RlIHN1cHBvcnRzIE1hcmtkb3duLnBsXG4vLyBhbmQgR2l0SHViLlxuLy8gQ29tbW9uTWFyayBpcyBub3Qgc3VwcG9ydGVkIHdoZW4gbWl4aW5nIGRvdWJsZS0gYW5kIHNpbmdsZSBxdW90ZXMgaW5zaWRlIGFcbi8vIHRpdGxlLlxuZnVuY3Rpb24gZW5jbG9zZSh0aXRsZSkge1xuICB2YXIgZGVsaW1pdGVyID1cbiAgICB0aXRsZS5pbmRleE9mKHF1b3RhdGlvbk1hcmspID09PSAtMSA/IHF1b3RhdGlvbk1hcmsgOiBhcG9zdHJvcGhlXG4gIHJldHVybiBkZWxpbWl0ZXIgKyB0aXRsZSArIGRlbGltaXRlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb3VudCA9IHJlcXVpcmUoJ2Njb3VudCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jbG9zZVxuXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxudmFyIGV4cHJlc3Npb24gPSAvXFxzL1xuXG4vLyBXcmFwIGB1cmxgIGluIGFuZ2xlIGJyYWNrZXRzIHdoZW4gbmVlZGVkLCBvciB3aGVuXG4vLyBmb3JjZWQuXG4vLyBJbiBsaW5rcywgaW1hZ2VzLCBhbmQgZGVmaW5pdGlvbnMsIHRoZSBVUkwgcGFydCBuZWVkc1xuLy8gdG8gYmUgZW5jbG9zZWQgd2hlbiBpdDpcbi8vXG4vLyAtIGhhcyBhIGxlbmd0aCBvZiBgMGBcbi8vIC0gY29udGFpbnMgd2hpdGUtc3BhY2Vcbi8vIC0gaGFzIG1vcmUgb3IgbGVzcyBvcGVuaW5nIHRoYW4gY2xvc2luZyBwYXJlbnRoZXNlc1xuZnVuY3Rpb24gZW5jbG9zZSh1cmksIGFsd2F5cykge1xuICBpZiAoXG4gICAgYWx3YXlzIHx8XG4gICAgdXJpLmxlbmd0aCA9PT0gMCB8fFxuICAgIGV4cHJlc3Npb24udGVzdCh1cmkpIHx8XG4gICAgY291bnQodXJpLCBsZWZ0UGFyZW50aGVzaXMpICE9PSBjb3VudCh1cmksIHJpZ2h0UGFyZW50aGVzaXMpXG4gICkge1xuICAgIHJldHVybiBsZXNzVGhhbiArIHVyaSArIGdyZWF0ZXJUaGFuXG4gIH1cblxuICByZXR1cm4gdXJpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gZW50ZXJcblxuLy8gU2hvcnRjdXQgYW5kIGNvbGxhcHNlZCBsaW5rIHJlZmVyZW5jZXMgbmVlZCBubyBlc2NhcGluZyBhbmQgZW5jb2RpbmcgZHVyaW5nXG4vLyB0aGUgcHJvY2Vzc2luZyBvZiBjaGlsZCBub2RlcyAoaXQgbXVzdCBiZSBpbXBsaWVkIGZyb20gaWRlbnRpZmllcikuXG4vL1xuLy8gVGhpcyB0b2dnbGVyIHR1cm5zIGVuY29kaW5nIGFuZCBlc2NhcGluZyBvZmYgZm9yIHNob3J0Y3V0IGFuZCBjb2xsYXBzZWRcbi8vIHJlZmVyZW5jZXMuXG4vL1xuLy8gSW1wbGllcyBgZW50ZXJMaW5rYC5cbmZ1bmN0aW9uIGVudGVyKGNvbXBpbGVyLCBub2RlKSB7XG4gIHZhciBlbmNvZGUgPSBjb21waWxlci5lbmNvZGVcbiAgdmFyIGVzY2FwZSA9IGNvbXBpbGVyLmVzY2FwZVxuICB2YXIgZXhpdExpbmsgPSBjb21waWxlci5lbnRlckxpbmsoKVxuXG4gIGlmIChub2RlLnJlZmVyZW5jZVR5cGUgIT09ICdzaG9ydGN1dCcgJiYgbm9kZS5yZWZlcmVuY2VUeXBlICE9PSAnY29sbGFwc2VkJykge1xuICAgIHJldHVybiBleGl0TGlua1xuICB9XG5cbiAgY29tcGlsZXIuZXNjYXBlID0gaWRlbnRpdHlcbiAgY29tcGlsZXIuZW5jb2RlID0gaWRlbnRpdHlcblxuICByZXR1cm4gZXhpdFxuXG4gIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgY29tcGlsZXIuZW5jb2RlID0gZW5jb2RlXG4gICAgY29tcGlsZXIuZXNjYXBlID0gZXNjYXBlXG4gICAgZXhpdExpbmsoKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBsZW5ndGhcblxudmFyIGFtcGVyc2FuZCA9ICcmJ1xuXG4vLyBSZXR1cm5zIHRoZSBsZW5ndGggb2YgSFRNTCBlbnRpdHkgdGhhdCBpcyBhIHByZWZpeCBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4vLyAoZXhjbHVkaW5nIHRoZSBhbXBlcnNhbmQpLCAwIGlmIGl0IGRvZXMgbm90IHN0YXJ0IHdpdGggYW4gZW50aXR5LlxuZnVuY3Rpb24gbGVuZ3RoKHZhbHVlKSB7XG4gIHZhciBwcmVmaXhcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBDdXJyZW50bHkgYWxzbyB0ZXN0ZWQgZm9yIGF0IGltcGxlbWVudGlvbiwgYnV0IHdlXG4gICAqIGtlZXAgaXQgaGVyZSBiZWNhdXNlIHRoYXTigJlzIHByb3Blci4gKi9cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gYW1wZXJzYW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHByZWZpeCA9IHZhbHVlLnNwbGl0KGFtcGVyc2FuZCwgMikuam9pbihhbXBlcnNhbmQpXG5cbiAgcmV0dXJuIHByZWZpeC5sZW5ndGggLSBkZWNvZGUocHJlZml4KS5sZW5ndGhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5XG5cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGFiZWxcblxudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbnZhciBzaG9ydGN1dCA9ICdzaG9ydGN1dCdcbnZhciBjb2xsYXBzZWQgPSAnY29sbGFwc2VkJ1xuXG4vLyBTdHJpbmdpZnkgYSByZWZlcmVuY2UgbGFiZWwuXG4vLyBCZWNhdXNlIGxpbmsgcmVmZXJlbmNlcyBhcmUgZWFzaWx5LCBtaXN0YWtpbmdseSwgY3JlYXRlZCAoZm9yIGV4YW1wbGUsXG4vLyBgW2Zvb11gKSwgcmVmZXJlbmNlIG5vZGVzIGhhdmUgYW4gZXh0cmEgcHJvcGVydHkgZGVwaWN0aW5nIGhvdyBpdCBsb29rZWQgaW5cbi8vIHRoZSBvcmlnaW5hbCBkb2N1bWVudCwgc28gc3RyaW5naWZpY2F0aW9uIGNhbiBjYXVzZSBtaW5pbWFsIGNoYW5nZXMuXG5mdW5jdGlvbiBsYWJlbChub2RlKSB7XG4gIHZhciB0eXBlID0gbm9kZS5yZWZlcmVuY2VUeXBlXG5cbiAgaWYgKHR5cGUgPT09IHNob3J0Y3V0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICAodHlwZSA9PT0gY29sbGFwc2VkID8gJycgOiBub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcikgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldFxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhZFxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciB0YWJTaXplID0gNFxuXG4vLyBQYWQgYHZhbHVlYCB3aXRoIGBsZXZlbCAqIHRhYlNpemVgIHNwYWNlcy4gIFJlc3BlY3RzIGxpbmVzLiAgSWdub3JlcyBlbXB0eVxuLy8gbGluZXMuXG5mdW5jdGlvbiBwYWQodmFsdWUsIGxldmVsKSB7XG4gIHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChsaW5lRmVlZClcbiAgdmFyIGluZGV4ID0gdmFsdWVzLmxlbmd0aFxuICB2YXIgcGFkZGluZyA9IHJlcGVhdChzcGFjZSwgbGV2ZWwgKiB0YWJTaXplKVxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKHZhbHVlc1tpbmRleF0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YWx1ZXNbaW5kZXhdID0gcGFkZGluZyArIHZhbHVlc1tpbmRleF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4obGluZUZlZWQpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG5mdW5jdGlvbiBibG9ja3F1b3RlKG5vZGUpIHtcbiAgdmFyIHZhbHVlcyA9IHRoaXMuYmxvY2sobm9kZSkuc3BsaXQobGluZUZlZWQpXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdFtpbmRleF0gPSAodmFsdWUgPyBzcGFjZSA6ICcnKSArIHZhbHVlXG4gIH1cblxuICByZXR1cm4gZ3JlYXRlclRoYW4gKyByZXN1bHQuam9pbihsaW5lRmVlZCArIGdyZWF0ZXJUaGFuKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGluZUJyZWFrXG5cbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcblxudmFyIGNvbW1vbm1hcmsgPSBiYWNrc2xhc2ggKyBsaW5lRmVlZFxudmFyIG5vcm1hbCA9IHNwYWNlICsgc3BhY2UgKyBsaW5lRmVlZFxuXG5mdW5jdGlvbiBsaW5lQnJlYWsoKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMuY29tbW9ubWFyayA/IGNvbW1vbm1hcmsgOiBub3JtYWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RyZWFrID0gcmVxdWlyZSgnbG9uZ2VzdC1zdHJlYWsnKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIHBhZCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFkJylcblxubW9kdWxlLmV4cG9ydHMgPSBjb2RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciB0aWxkZSA9ICd+J1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG5cbi8vIFN0cmluZ2lmeSBjb2RlLlxuLy8gQ3JlYXRlcyBpbmRlbnRlZCBjb2RlIHdoZW46XG4vL1xuLy8gLSBObyBsYW5ndWFnZSB0YWcgZXhpc3RzXG4vLyAtIE5vdCBpbiBgZmVuY2VzOiB0cnVlYCBtb2RlXG4vLyAtIEEgbm9uLWVtcHR5IHZhbHVlIGV4aXN0c1xuLy9cbi8vIE90aGVyd2lzZSwgR0ZNIGZlbmNlZCBjb2RlIGlzIGNyZWF0ZWQ6XG4vL1xuLy8gYGBgYG1hcmtkb3duXG4vLyBgYGBqc1xuLy8gZm9vKCk7XG4vLyBgYGBcbi8vIGBgYGBcbi8vXG4vLyBXaGVuIGluIGBgZmVuY2U6IGB+YCBgYCBtb2RlLCB1c2VzIHRpbGRlcyBhcyBmZW5jZXM6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIH5+fmpzXG4vLyBmb28oKTtcbi8vIH5+flxuLy8gYGBgXG4vL1xuLy8gS25vd3MgYWJvdXQgaW50ZXJuYWwgZmVuY2VzOlxuLy9cbi8vIGBgYGBgbWFya2Rvd25cbi8vIGBgYGBtYXJrZG93blxuLy8gYGBgamF2YXNjcmlwdFxuLy8gZm9vKCk7XG4vLyBgYGBcbi8vIGBgYGBcbi8vIGBgYGBgXG5mdW5jdGlvbiBjb2RlKG5vZGUsIHBhcmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuICB2YXIgb3B0aW9ucyA9IHNlbGYub3B0aW9uc1xuICB2YXIgbWFya2VyID0gb3B0aW9ucy5mZW5jZVxuICB2YXIgaW5mbyA9IG5vZGUubGFuZyB8fCAnJ1xuICB2YXIgZmVuY2VcblxuICBpZiAoaW5mbyAmJiBub2RlLm1ldGEpIHtcbiAgICBpbmZvICs9IHNwYWNlICsgbm9kZS5tZXRhXG4gIH1cblxuICBpbmZvID0gc2VsZi5lbmNvZGUoc2VsZi5lc2NhcGUoaW5mbywgbm9kZSkpXG5cbiAgLy8gV2l0aG91dCAobmVlZGVkKSBmZW5jZXMuXG4gIGlmIChcbiAgICAhaW5mbyAmJlxuICAgICFvcHRpb25zLmZlbmNlcyAmJlxuICAgIHZhbHVlICYmXG4gICAgdmFsdWUuY2hhckF0KDApICE9PSBsaW5lRmVlZCAmJlxuICAgIHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSAhPT0gbGluZUZlZWRcbiAgKSB7XG4gICAgLy8gVGhyb3cgd2hlbiBwZWRhbnRpYywgaW4gYSBsaXN0IGl0ZW0gd2hpY2ggaXNu4oCZdCBjb21waWxlZCB1c2luZyBhIHRhYi5cbiAgICBpZiAoXG4gICAgICBwYXJlbnQgJiZcbiAgICAgIHBhcmVudC50eXBlID09PSAnbGlzdEl0ZW0nICYmXG4gICAgICBvcHRpb25zLmxpc3RJdGVtSW5kZW50ICE9PSAndGFiJyAmJlxuICAgICAgb3B0aW9ucy5wZWRhbnRpY1xuICAgICkge1xuICAgICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICAgICdDYW5ub3QgaW5kZW50IGNvZGUgcHJvcGVybHkuIFNlZSBodHRwczovL2dpdC5pby9meEtSOCcsXG4gICAgICAgIG5vZGUucG9zaXRpb25cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gcGFkKHZhbHVlLCAxKVxuICB9XG5cbiAgLy8gQmFja3RpY2tzIGluIHRoZSBpbmZvIHN0cmluZyBkb27igJl0IHdvcmsgd2l0aCBiYWNrdGljayBmZW5jZWQgY29kZS5cbiAgLy8gQmFja3RpY2tzIChhbmQgdGlsZGVzKSBhcmUgZmluZSBpbiB0aWxkZSBmZW5jZWQgY29kZS5cbiAgaWYgKG1hcmtlciA9PT0gZ3JhdmVBY2NlbnQgJiYgaW5mby5pbmRleE9mKGdyYXZlQWNjZW50KSAhPT0gLTEpIHtcbiAgICBtYXJrZXIgPSB0aWxkZVxuICB9XG5cbiAgZmVuY2UgPSByZXBlYXQobWFya2VyLCBNYXRoLm1heChzdHJlYWsodmFsdWUsIG1hcmtlcikgKyAxLCAzKSlcblxuICByZXR1cm4gZmVuY2UgKyBpbmZvICsgbGluZUZlZWQgKyB2YWx1ZSArIGxpbmVGZWVkICsgZmVuY2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXJpID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXVyaScpXG52YXIgdGl0bGUgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdGl0bGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb25cblxudmFyIHNwYWNlID0gJyAnXG52YXIgY29sb24gPSAnOidcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xuXG4vLyBTdHJpbmdpZnkgYW4gVVJMIGRlZmluaXRpb24uXG4vL1xuLy8gSXMgc21hcnQgYWJvdXQgZW5jbG9zaW5nIGB1cmxgIChzZWUgYGVuY2xvc2VVUkkoKWApIGFuZCBgdGl0bGVgIChzZWVcbi8vIGBlbmNsb3NlVGl0bGUoKWApLlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbZm9vXTogPGZvbyBhdCBiYXIgZG90IGNvbT4gJ0FuIFwiZXhhbXBsZVwiIGUtbWFpbCdcbi8vIGBgYFxuZnVuY3Rpb24gZGVmaW5pdGlvbihub2RlKSB7XG4gIHZhciBjb250ZW50ID0gdXJpKG5vZGUudXJsKVxuXG4gIGlmIChub2RlLnRpdGxlKSB7XG4gICAgY29udGVudCArPSBzcGFjZSArIHRpdGxlKG5vZGUudGl0bGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICAobm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGNvbG9uICtcbiAgICBzcGFjZSArXG4gICAgY29udGVudFxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoXG5cbnZhciB0aWxkZSA9ICd+J1xuXG52YXIgZmVuY2UgPSB0aWxkZSArIHRpbGRlXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2gobm9kZSkge1xuICByZXR1cm4gZmVuY2UgKyB0aGlzLmFsbChub2RlKS5qb2luKCcnKSArIGZlbmNlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIGFzdGVyaXNrID0gJyonXG5cbi8vIFN0cmluZ2lmeSBhbiBgZW1waGFzaXNgLlxuLy9cbi8vIFRoZSBtYXJrZXIgdXNlZCBpcyBjb25maWd1cmFibGUgdGhyb3VnaCBgZW1waGFzaXNgLCB3aGljaCBkZWZhdWx0cyB0byBhblxuLy8gdW5kZXJzY29yZSAoYCdfJ2ApIGJ1dCBhbHNvIGFjY2VwdHMgYW4gYXN0ZXJpc2sgKGAnKidgKTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gKmZvbypcbi8vIGBgYFxuLy9cbi8vIEluIGBwZWRhbnRpY2AgbW9kZSwgdGV4dCB3aGljaCBpdHNlbGYgY29udGFpbnMgYW4gdW5kZXJzY29yZSB3aWxsIGNhdXNlIHRoZVxuLy8gbWFya2VyIHRvIGRlZmF1bHQgdG8gYW4gYXN0ZXJpc2sgaW5zdGVhZDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gKmZvb19iYXIqXG4vLyBgYGBcbmZ1bmN0aW9uIGVtcGhhc2lzKG5vZGUpIHtcbiAgdmFyIG1hcmtlciA9IHRoaXMub3B0aW9ucy5lbXBoYXNpc1xuICB2YXIgY29udGVudCA9IHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpXG5cbiAgLy8gV2hlbiBpbiBwZWRhbnRpYyBtb2RlLCBwcmV2ZW50IHVzaW5nIHVuZGVyc2NvcmUgYXMgdGhlIG1hcmtlciB3aGVuIHRoZXJlXG4gIC8vIGFyZSB1bmRlcnNjb3JlcyBpbiB0aGUgY29udGVudC5cbiAgaWYgKFxuICAgIHRoaXMub3B0aW9ucy5wZWRhbnRpYyAmJlxuICAgIG1hcmtlciA9PT0gdW5kZXJzY29yZSAmJlxuICAgIGNvbnRlbnQuaW5kZXhPZihtYXJrZXIpICE9PSAtMVxuICApIHtcbiAgICBtYXJrZXIgPSBhc3Rlcmlza1xuICB9XG5cbiAgcmV0dXJuIG1hcmtlciArIGNvbnRlbnQgKyBtYXJrZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGluZ1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbnVtYmVyU2lnbiA9ICcjJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBlcXVhbHNUbyA9ICc9J1xuXG4vLyBTdHJpbmdpZnkgYSBoZWFkaW5nLlxuLy9cbi8vIEluIGBzZXRleHQ6IHRydWVgIG1vZGUgYW5kIHdoZW4gYGRlcHRoYCBpcyBzbWFsbGVyIHRoYW4gdGhyZWUsIGNyZWF0ZXMgYVxuLy8gc2V0ZXh0IGhlYWRlcjpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gRm9vXG4vLyA9PT1cbi8vIGBgYFxuLy9cbi8vIE90aGVyd2lzZSwgYW4gQVRYIGhlYWRlciBpcyBnZW5lcmF0ZWQ6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICMjIyBGb29cbi8vIGBgYFxuLy9cbi8vIEluIGBjbG9zZUF0eDogdHJ1ZWAgbW9kZSwgdGhlIGhlYWRlciBpcyBjbG9zZWQgd2l0aCBoYXNoZXM6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICMjIyBGb28gIyMjXG4vLyBgYGBcbmZ1bmN0aW9uIGhlYWRpbmcobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGRlcHRoID0gbm9kZS5kZXB0aFxuICB2YXIgc2V0ZXh0ID0gc2VsZi5vcHRpb25zLnNldGV4dFxuICB2YXIgY2xvc2VBdHggPSBzZWxmLm9wdGlvbnMuY2xvc2VBdHhcbiAgdmFyIGNvbnRlbnQgPSBzZWxmLmFsbChub2RlKS5qb2luKCcnKVxuICB2YXIgcHJlZml4XG5cbiAgaWYgKHNldGV4dCAmJiBkZXB0aCA8IDMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29udGVudCArIGxpbmVGZWVkICsgcmVwZWF0KGRlcHRoID09PSAxID8gZXF1YWxzVG8gOiBkYXNoLCBjb250ZW50Lmxlbmd0aClcbiAgICApXG4gIH1cblxuICBwcmVmaXggPSByZXBlYXQobnVtYmVyU2lnbiwgbm9kZS5kZXB0aClcblxuICByZXR1cm4gcHJlZml4ICsgc3BhY2UgKyBjb250ZW50ICsgKGNsb3NlQXR4ID8gc3BhY2UgKyBwcmVmaXggOiAnJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWxcblxuZnVuY3Rpb24gaHRtbChub2RlKSB7XG4gIHJldHVybiBub2RlLnZhbHVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxhYmVsID0gcmVxdWlyZSgnLi4vdXRpbC9sYWJlbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VSZWZlcmVuY2VcblxudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG5cbmZ1bmN0aW9uIGltYWdlUmVmZXJlbmNlKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBleGNsYW1hdGlvbk1hcmsgK1xuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICAodGhpcy5lbmNvZGUobm9kZS5hbHQsIG5vZGUpIHx8ICcnKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBsYWJlbChub2RlKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVyaSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS11cmknKVxudmFyIHRpdGxlID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXRpdGxlJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxuLy8gU3RyaW5naWZ5IGFuIGltYWdlLlxuLy9cbi8vIElzIHNtYXJ0IGFib3V0IGVuY2xvc2luZyBgdXJsYCAoc2VlIGBlbmNsb3NlVVJJKClgKSBhbmQgYHRpdGxlYCAoc2VlXG4vLyBgZW5jbG9zZVRpdGxlKClgKS5cbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIVtmb29dKDwvZmF2IGljb24ucG5nPiAnTXkgXCJmYXZvdXJpdGVcIiBpY29uJylcbi8vIGBgYFxuLy9cbi8vIFN1cHBvcnRzIG5hbWVkIGVudGl0aWVzIGluIGB1cmxgLCBgYWx0YCwgYW5kIGB0aXRsZWAgd2hlbiBpblxuLy8gYHNldHRpbmdzLmVuY29kZWAgbW9kZS5cbmZ1bmN0aW9uIGltYWdlKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb250ZW50ID0gdXJpKHNlbGYuZW5jb2RlKG5vZGUudXJsIHx8ICcnLCBub2RlKSlcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gIHZhciBhbHQgPSBzZWxmLmVuY29kZShzZWxmLmVzY2FwZShub2RlLmFsdCB8fCAnJywgbm9kZSkpXG5cbiAgZXhpdCgpXG5cbiAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICBjb250ZW50ICs9IHNwYWNlICsgdGl0bGUoc2VsZi5lbmNvZGUobm9kZS50aXRsZSwgbm9kZSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGV4Y2xhbWF0aW9uTWFyayArXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgIGFsdCArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBsZWZ0UGFyZW50aGVzaXMgK1xuICAgIGNvbnRlbnQgK1xuICAgIHJpZ2h0UGFyZW50aGVzaXNcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJlYWsgPSByZXF1aXJlKCdsb25nZXN0LXN0cmVhaycpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuXG52YXIgZ3JhdmVBY2NlbnRDaGFyID0gJ2AnXG52YXIgbGluZUZlZWQgPSAxMCAvLyAgJ1xcbidcbnZhciBzcGFjZSA9IDMyIC8vICcgJ1xudmFyIGdyYXZlQWNjZW50ID0gOTYgLy8gICdgJ1xuXG4vLyBTdHJpbmdpZnkgaW5saW5lIGNvZGUuXG4vL1xuLy8gS25vd3MgYWJvdXQgaW50ZXJuYWwgdGlja3MgKGBcXGBgKSwgYW5kIGVuc3VyZXMgb25lIG1vcmUgdGljayBpcyB1c2VkIHRvXG4vLyBlbmNsb3NlIHRoZSBpbmxpbmUgY29kZTpcbi8vXG4vLyBgYGBgbWFya2Rvd25cbi8vIGBgYGZvbyBgYGJhcmBgIGJhemBgYFxuLy8gYGBgYFxuLy9cbi8vIEV2ZW4ga25vd3MgYWJvdXQgaW5pdGFsIGFuZCBmaW5hbCB0aWNrczpcbi8vXG4vLyBgYG1hcmtkb3duXG4vLyBgYCBgZm9vIGBgXG4vLyBgYCBmb29gIGBgXG4vLyBgYGBcbmZ1bmN0aW9uIGlubGluZUNvZGUobm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlXG4gIHZhciB0aWNrcyA9IHJlcGVhdChncmF2ZUFjY2VudENoYXIsIHN0cmVhayh2YWx1ZSwgZ3JhdmVBY2NlbnRDaGFyKSArIDEpXG4gIHZhciBzdGFydCA9IHRpY2tzXG4gIHZhciBlbmQgPSB0aWNrc1xuICB2YXIgaGVhZCA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgdmFyIHRhaWwgPSB2YWx1ZS5jaGFyQ29kZUF0KHZhbHVlLmxlbmd0aCAtIDEpXG4gIHZhciB3cmFwID0gZmFsc2VcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAoaGVhZCA9PT0gZ3JhdmVBY2NlbnQgfHwgdGFpbCA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICB3cmFwID0gdHJ1ZVxuICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDIgJiYgd3MoaGVhZCkgJiYgd3ModGFpbCkpIHtcbiAgICBpbmRleCA9IDFcbiAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggLSAxXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKCF3cyh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSkpIHtcbiAgICAgICAgd3JhcCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAod3JhcCkge1xuICAgIHN0YXJ0ICs9ICcgJ1xuICAgIGVuZCA9ICcgJyArIGVuZFxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ICsgdmFsdWUgKyBlbmRcbn1cblxuZnVuY3Rpb24gd3MoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gbGluZUZlZWQgfHwgY29kZSA9PT0gc3BhY2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29weSA9IHJlcXVpcmUoJy4uL3V0aWwvY29weS1pZGVudGlmaWVyLWVuY29kaW5nJylcbnZhciBsYWJlbCA9IHJlcXVpcmUoJy4uL3V0aWwvbGFiZWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtSZWZlcmVuY2VcblxudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbnZhciBzaG9ydGN1dCA9ICdzaG9ydGN1dCdcbnZhciBjb2xsYXBzZWQgPSAnY29sbGFwc2VkJ1xuXG5mdW5jdGlvbiBsaW5rUmVmZXJlbmNlKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciB0eXBlID0gbm9kZS5yZWZlcmVuY2VUeXBlXG4gIHZhciBleGl0ID0gc2VsZi5lbnRlckxpbmtSZWZlcmVuY2Uoc2VsZiwgbm9kZSlcbiAgdmFyIHZhbHVlID0gc2VsZi5hbGwobm9kZSkuam9pbignJylcblxuICBleGl0KClcblxuICBpZiAodHlwZSA9PT0gc2hvcnRjdXQgfHwgdHlwZSA9PT0gY29sbGFwc2VkKSB7XG4gICAgdmFsdWUgPSBjb3B5KHZhbHVlLCBub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcilcbiAgfVxuXG4gIHJldHVybiBsZWZ0U3F1YXJlQnJhY2tldCArIHZhbHVlICsgcmlnaHRTcXVhcmVCcmFja2V0ICsgbGFiZWwobm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXJpID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXVyaScpXG52YXIgdGl0bGUgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdGl0bGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcblxudmFyIHNwYWNlID0gJyAnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG5cbi8vIEV4cHJlc3Npb24gZm9yIGEgcHJvdG9jb2w6XG4vLyBTZWUgPGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWZvcm1fUmVzb3VyY2VfSWRlbnRpZmllciNHZW5lcmljX3N5bnRheD4uXG52YXIgcHJvdG9jb2wgPSAvXlthLXpdW2EteisuLV0rOlxcLz8vaVxuXG4vLyBTdHJpbmdpZnkgYSBsaW5rLlxuLy9cbi8vIFdoZW4gbm8gdGl0bGUgZXhpc3RzLCB0aGUgY29tcGlsZWQgYGNoaWxkcmVuYCBlcXVhbCBgdXJsYCwgYW5kIGB1cmxgIHN0YXJ0c1xuLy8gd2l0aCBhIHByb3RvY29sLCBhbiBhdXRvIGxpbmsgaXMgY3JlYXRlZDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gPGh0dHA6Ly9leGFtcGxlLmNvbT5cbi8vIGBgYFxuLy9cbi8vIE90aGVyd2lzZSwgaXMgc21hcnQgYWJvdXQgZW5jbG9zaW5nIGB1cmxgIChzZWUgYGVuY2xvc2VVUkkoKWApIGFuZCBgdGl0bGVgXG4vLyAoc2VlIGBlbmNsb3NlVGl0bGUoKWApLlxuLy8gYGBgXG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFtmb29dKDxmb28gYXQgYmFyIGRvdCBjb20+ICdBbiBcImV4YW1wbGVcIiBlLW1haWwnKVxuLy8gYGBgXG4vL1xuLy8gU3VwcG9ydHMgbmFtZWQgZW50aXRpZXMgaW4gdGhlIGB1cmxgIGFuZCBgdGl0bGVgIHdoZW4gaW4gYHNldHRpbmdzLmVuY29kZWBcbi8vIG1vZGUuXG5mdW5jdGlvbiBsaW5rKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb250ZW50ID0gc2VsZi5lbmNvZGUobm9kZS51cmwgfHwgJycsIG5vZGUpXG4gIHZhciBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICB2YXIgZXNjYXBlZCA9IHNlbGYuZW5jb2RlKHNlbGYuZXNjYXBlKG5vZGUudXJsIHx8ICcnLCBub2RlKSlcbiAgdmFyIHZhbHVlID0gc2VsZi5hbGwobm9kZSkuam9pbignJylcblxuICBleGl0KClcblxuICBpZiAobm9kZS50aXRsZSA9PSBudWxsICYmIHByb3RvY29sLnRlc3QoY29udGVudCkgJiYgZXNjYXBlZCA9PT0gdmFsdWUpIHtcbiAgICAvLyBCYWNrc2xhc2ggZXNjYXBlcyBkbyBub3Qgd29yayBpbiBhdXRvbGlua3MsIHNvIHdlIGRvIG5vdCBlc2NhcGUuXG4gICAgcmV0dXJuIHVyaShzZWxmLmVuY29kZShub2RlLnVybCksIHRydWUpXG4gIH1cblxuICBjb250ZW50ID0gdXJpKGNvbnRlbnQpXG5cbiAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICBjb250ZW50ICs9IHNwYWNlICsgdGl0bGUoc2VsZi5lbmNvZGUoc2VsZi5lc2NhcGUobm9kZS50aXRsZSwgbm9kZSksIG5vZGUpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgdmFsdWUgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgbGVmdFBhcmVudGhlc2lzICtcbiAgICBjb250ZW50ICtcbiAgICByaWdodFBhcmVudGhlc2lzXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgcGFkID0gcmVxdWlyZSgnLi4vdXRpbC9wYWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGxvd2VyY2FzZVggPSAneCdcblxudmFyIGNlaWwgPSBNYXRoLmNlaWxcbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcblxudmFyIHRhYlNpemUgPSA0XG5cbi8vIFN0cmluZ2lmeSBhIGxpc3QgaXRlbS5cbi8vXG4vLyBQcmVmaXhlcyB0aGUgY29udGVudCB3aXRoIGEgY2hlY2tlZCBjaGVja2JveCB3aGVuIGBjaGVja2VkOiB0cnVlYDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gW3hdIGZvb1xuLy8gYGBgXG4vL1xuLy8gUHJlZml4ZXMgdGhlIGNvbnRlbnQgd2l0aCBhbiB1bmNoZWNrZWQgY2hlY2tib3ggd2hlbiBgY2hlY2tlZDogZmFsc2VgOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbIF0gZm9vXG4vLyBgYGBcbmZ1bmN0aW9uIGxpc3RJdGVtKG5vZGUsIHBhcmVudCwgcG9zaXRpb24sIGJ1bGxldCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN0eWxlID0gc2VsZi5vcHRpb25zLmxpc3RJdGVtSW5kZW50XG4gIHZhciBtYXJrZXIgPSBidWxsZXQgfHwgc2VsZi5vcHRpb25zLmJ1bGxldFxuICB2YXIgc3ByZWFkID0gbm9kZS5zcHJlYWQgPT0gbnVsbCA/IHRydWUgOiBub2RlLnNwcmVhZFxuICB2YXIgY2hlY2tlZCA9IG5vZGUuY2hlY2tlZFxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuICB2YXIgaW5kZW50XG4gIHZhciBzcGFjaW5nXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YWx1ZXNbaW5kZXhdID0gc2VsZi52aXNpdChjaGlsZHJlbltpbmRleF0sIG5vZGUpXG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlcy5qb2luKHNwcmVhZCA/IGJsYW5rIDogbGluZUZlZWQpXG5cbiAgaWYgKHR5cGVvZiBjaGVja2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBOb3RlOiBJ4oCZZCBsaWtlIHRvIGJlIGFibGUgdG8gb25seSBhZGQgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNoZWNrIGFuZFxuICAgIC8vIHRoZSB2YWx1ZSwgYnV0IHVuZm9ydHVuYXRlbHkgZ2l0aHViIGRvZXMgbm90IHN1cHBvcnQgZW1wdHkgbGlzdC1pdGVtc1xuICAgIC8vIHdpdGggYSBjaGVja2JveCA6KFxuICAgIHZhbHVlID1cbiAgICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICAgIChjaGVja2VkID8gbG93ZXJjYXNlWCA6IHNwYWNlKSArXG4gICAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgICAgc3BhY2UgK1xuICAgICAgdmFsdWVcbiAgfVxuXG4gIGlmIChzdHlsZSA9PT0gJzEnIHx8IChzdHlsZSA9PT0gJ21peGVkJyAmJiB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkKSA9PT0gLTEpKSB7XG4gICAgaW5kZW50ID0gbWFya2VyLmxlbmd0aCArIDFcbiAgICBzcGFjaW5nID0gc3BhY2VcbiAgfSBlbHNlIHtcbiAgICBpbmRlbnQgPSBjZWlsKChtYXJrZXIubGVuZ3RoICsgMSkgLyB0YWJTaXplKSAqIHRhYlNpemVcbiAgICBzcGFjaW5nID0gcmVwZWF0KHNwYWNlLCBpbmRlbnQgLSBtYXJrZXIubGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgPyBtYXJrZXIgKyBzcGFjaW5nICsgcGFkKHZhbHVlLCBpbmRlbnQgLyB0YWJTaXplKS5zbGljZShpbmRlbnQpXG4gICAgOiBtYXJrZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxuZnVuY3Rpb24gbGlzdChub2RlKSB7XG4gIHZhciBmbiA9IG5vZGUub3JkZXJlZCA/IHRoaXMudmlzaXRPcmRlcmVkSXRlbXMgOiB0aGlzLnZpc2l0VW5vcmRlcmVkSXRlbXNcbiAgcmV0dXJuIGZuLmNhbGwodGhpcywgbm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFncmFwaFxuXG5mdW5jdGlvbiBwYXJhZ3JhcGgobm9kZSkge1xuICByZXR1cm4gdGhpcy5hbGwobm9kZSkuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3RcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcblxuLy8gU3RyaW5naWZ5IGEgcm9vdC5cbi8vIEFkZHMgYSBmaW5hbCBuZXdsaW5lIHRvIGVuc3VyZSB2YWxpZCBQT1NJWCBmaWxlcy4gKi9cbmZ1bmN0aW9uIHJvb3Qobm9kZSkge1xuICB2YXIgZG9jID0gdGhpcy5ibG9jayhub2RlKVxuXG4gIGlmIChkb2MuY2hhckF0KGRvYy5sZW5ndGggLSAxKSAhPT0gbGluZUZlZWQpIHtcbiAgICBkb2MgKz0gbGluZUZlZWRcbiAgfVxuXG4gIHJldHVybiBkb2Ncbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gc3Ryb25nXG5cbi8vIFN0cmluZ2lmeSBhIGBzdHJvbmdgLlxuLy9cbi8vIFRoZSBtYXJrZXIgdXNlZCBpcyBjb25maWd1cmFibGUgYnkgYHN0cm9uZ2AsIHdoaWNoIGRlZmF1bHRzIHRvIGFuIGFzdGVyaXNrXG4vLyAoYCcqJ2ApIGJ1dCBhbHNvIGFjY2VwdHMgYW4gdW5kZXJzY29yZSAoYCdfJ2ApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBfX2Zvb19fXG4vLyBgYGBcbmZ1bmN0aW9uIHN0cm9uZyhub2RlKSB7XG4gIHZhciBtYXJrZXIgPSByZXBlYXQodGhpcy5vcHRpb25zLnN0cm9uZywgMilcbiAgcmV0dXJuIG1hcmtlciArIHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpICsgbWFya2VyXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZUNlbGxcblxudmFyIGxpbmVGZWVkID0gL1xccj9cXG4vZ1xuXG5mdW5jdGlvbiB0YWJsZUNlbGwobm9kZSkge1xuICByZXR1cm4gdGhpcy5hbGwobm9kZSkuam9pbignJykucmVwbGFjZShsaW5lRmVlZCwgJyAnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtYXJrZG93blRhYmxlID0gcmVxdWlyZSgnbWFya2Rvd24tdGFibGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbi8vIFN0cmluZ2lmeSB0YWJsZS5cbi8vXG4vLyBDcmVhdGVzIGEgZmVuY2VkIHRhYmxlLlxuLy8gVGhlIHRhYmxlIGhhcyBhbGlnbmVkIGRlbGltaXRlcnMgYnkgZGVmYXVsdCwgYnV0IG5vdCBpblxuLy8gYHRhYmxlUGlwZUFsaWduOiBmYWxzZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIHwgSGVhZGVyIDEgfCBIZWFkZXIgMiB8XG4vLyB8IDotOiB8IC0gfFxuLy8gfCBBbHBoYSB8IEJyYXZvIHxcbi8vIGBgYFxuLy9cbi8vIFRoZSB0YWJsZSBpcyBzcGFjZWQgYnkgZGVmYXVsdCwgYnV0IG5vdCBpbiBgdGFibGVDZWxsUGFkZGluZzogZmFsc2VgOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyB8Rm9vfEJhcnxcbi8vIHw6LTp8LS0tfFxuLy8gfEJhenxRdXh8XG4vLyBgYGBcbmZ1bmN0aW9uIHRhYmxlKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvcHRpb25zID0gc2VsZi5vcHRpb25zXG4gIHZhciBwYWRkaW5nID0gb3B0aW9ucy50YWJsZUNlbGxQYWRkaW5nXG4gIHZhciBhbGlnbkRlbGltaXRlcnMgPSBvcHRpb25zLnRhYmxlUGlwZUFsaWduXG4gIHZhciBzdHJpbmdMZW5ndGggPSBvcHRpb25zLnN0cmluZ0xlbmd0aFxuICB2YXIgcm93cyA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGluZGV4ID0gcm93cy5sZW5ndGhcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyVGFibGUoKVxuICB2YXIgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBzZWxmLmFsbChyb3dzW2luZGV4XSlcbiAgfVxuXG4gIGV4aXQoKVxuXG4gIHJldHVybiBtYXJrZG93blRhYmxlKHJlc3VsdCwge1xuICAgIGFsaWduOiBub2RlLmFsaWduLFxuICAgIGFsaWduRGVsaW1pdGVyczogYWxpZ25EZWxpbWl0ZXJzLFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgc3RyaW5nTGVuZ3RoOiBzdHJpbmdMZW5ndGhcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxuLy8gU3RyaW5naWZ5IHRleHQuXG4vLyBTdXBwb3J0cyBuYW1lZCBlbnRpdGllcyBpbiBgc2V0dGluZ3MuZW5jb2RlOiB0cnVlYCBtb2RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBBVCZhbXA7VFxuLy8gYGBgXG4vL1xuLy8gU3VwcG9ydHMgbnVtYmVyZWQgZW50aXRpZXMgaW4gYHNldHRpbmdzLmVuY29kZTogbnVtYmVyc2AgbW9kZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gQVQmI3gyNjtUXG4vLyBgYGBcbmZ1bmN0aW9uIHRleHQobm9kZSwgcGFyZW50KSB7XG4gIHJldHVybiB0aGlzLmVuY29kZSh0aGlzLmVzY2FwZShub2RlLnZhbHVlLCBub2RlLCBwYXJlbnQpLCBub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY1xuXG52YXIgc3BhY2UgPSAnICdcblxuLy8gU3RyaW5naWZ5IGEgYHRoZW1hdGljLWJyZWFrYC5cbi8vIFRoZSBjaGFyYWN0ZXIgdXNlZCBpcyBjb25maWd1cmFibGUgdGhyb3VnaCBgcnVsZWA6IChgJ18nYCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gVGhlIG51bWJlciBvZiByZXBpdGl0aW9ucyBpcyBkZWZpbmVkIHRocm91Z2ggYHJ1bGVSZXBldGl0aW9uYCAoYDZgKTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gKioqKioqXG4vLyBgYGBcbi8vXG4vLyBXaGV0aGVyIHNwYWNlcyBkZWxpbWl0IGVhY2ggY2hhcmFjdGVyLCBpcyBjb25maWd1cmVkIHRocm91Z2ggYHJ1bGVTcGFjZXNgXG4vLyAoYHRydWVgKTpcbi8vIGBgYG1hcmtkb3duXG4vLyAqICogKlxuLy8gYGBgXG5mdW5jdGlvbiB0aGVtYXRpYygpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgdmFyIHJ1bGUgPSByZXBlYXQob3B0aW9ucy5ydWxlLCBvcHRpb25zLnJ1bGVSZXBldGl0aW9uKVxuICByZXR1cm4gb3B0aW9ucy5ydWxlU3BhY2VzID8gcnVsZS5zcGxpdCgnJykuam9pbihzcGFjZSkgOiBydWxlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHVuaWZpZWQgPSByZXF1aXJlKCd1bmlmaWVkJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJ3JlbWFyay1wYXJzZScpXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgncmVtYXJrLXN0cmluZ2lmeScpXG5cbm1vZHVsZS5leHBvcnRzID0gdW5pZmllZCgpLnVzZShwYXJzZSkudXNlKHN0cmluZ2lmeSkuZnJlZXplKClcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5oZXJpdCA9IHJlcXVpcmUoJ3VuaGVyaXQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFBhcnNlciA9IHJlcXVpcmUoJy4vbGliL3BhcnNlci5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbnBhcnNlLlBhcnNlciA9IFBhcnNlclxuXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHRoaXMuZGF0YSgnc2V0dGluZ3MnKVxuICB2YXIgTG9jYWwgPSB1bmhlcml0KFBhcnNlcilcblxuICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyA9IHh0ZW5kKExvY2FsLnByb3RvdHlwZS5vcHRpb25zLCBzZXR0aW5ncywgb3B0aW9ucylcblxuICB0aGlzLlBhcnNlciA9IExvY2FsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmFzZScsXG4gICdiYXNlZm9udCcsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnY2FwdGlvbicsXG4gICdjZW50ZXInLFxuICAnY29sJyxcbiAgJ2NvbGdyb3VwJyxcbiAgJ2RkJyxcbiAgJ2RldGFpbHMnLFxuICAnZGlhbG9nJyxcbiAgJ2RpcicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnZnJhbWUnLFxuICAnZnJhbWVzZXQnLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZCcsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICdtZXRhJyxcbiAgJ25hdicsXG4gICdub2ZyYW1lcycsXG4gICdvbCcsXG4gICdvcHRncm91cCcsXG4gICdvcHRpb24nLFxuICAncCcsXG4gICdwYXJhbScsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAndGl0bGUnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBGYWN0b3J5IHRvIGNyZWF0ZSBhbiBlbnRpdHkgZGVjb2Rlci5cbmZ1bmN0aW9uIGZhY3RvcnkoY3R4KSB7XG4gIGRlY29kZXIucmF3ID0gZGVjb2RlUmF3XG5cbiAgcmV0dXJuIGRlY29kZXJcblxuICAvLyBOb3JtYWxpemUgYHBvc2l0aW9uYCB0byBhZGQgYW4gYGluZGVudGAuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb3NpdGlvbikge1xuICAgIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICAgIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuICAgIHZhciByZXN1bHQgPSBbXVxuXG4gICAgd2hpbGUgKCsrbGluZSkge1xuICAgICAgaWYgKCEobGluZSBpbiBvZmZzZXRzKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaCgob2Zmc2V0c1tsaW5lXSB8fCAwKSArIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGFydDogcG9zaXRpb24sIGluZGVudDogcmVzdWx0fVxuICB9XG5cbiAgLy8gRGVjb2RlIGB2YWx1ZWAgKGF0IGBwb3NpdGlvbmApIGludG8gdGV4dC1ub2Rlcy5cbiAgZnVuY3Rpb24gZGVjb2Rlcih2YWx1ZSwgcG9zaXRpb24sIGhhbmRsZXIpIHtcbiAgICBlbnRpdGllcyh2YWx1ZSwge1xuICAgICAgcG9zaXRpb246IG5vcm1hbGl6ZShwb3NpdGlvbiksXG4gICAgICB3YXJuaW5nOiBoYW5kbGVXYXJuaW5nLFxuICAgICAgdGV4dDogaGFuZGxlcixcbiAgICAgIHJlZmVyZW5jZTogaGFuZGxlcixcbiAgICAgIHRleHRDb250ZXh0OiBjdHgsXG4gICAgICByZWZlcmVuY2VDb250ZXh0OiBjdHhcbiAgICB9KVxuICB9XG5cbiAgLy8gRGVjb2RlIGB2YWx1ZWAgKGF0IGBwb3NpdGlvbmApIGludG8gYSBzdHJpbmcuXG4gIGZ1bmN0aW9uIGRlY29kZVJhdyh2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZW50aXRpZXMoXG4gICAgICB2YWx1ZSxcbiAgICAgIHh0ZW5kKG9wdGlvbnMsIHtwb3NpdGlvbjogbm9ybWFsaXplKHBvc2l0aW9uKSwgd2FybmluZzogaGFuZGxlV2FybmluZ30pXG4gICAgKVxuICB9XG5cbiAgLy8gSGFuZGxlIGEgd2FybmluZy5cbiAgLy8gU2VlIDxodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL3BhcnNlLWVudGl0aWVzPiBmb3IgdGhlIHdhcm5pbmdzLlxuICBmdW5jdGlvbiBoYW5kbGVXYXJuaW5nKHJlYXNvbiwgcG9zaXRpb24sIGNvZGUpIHtcbiAgICBpZiAoY29kZSAhPT0gMykge1xuICAgICAgY3R4LmZpbGUubWVzc2FnZShyZWFzb24sIHBvc2l0aW9uKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3NpdGlvbjogdHJ1ZSxcbiAgZ2ZtOiB0cnVlLFxuICBjb21tb25tYXJrOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBibG9ja3M6IHJlcXVpcmUoJy4vYmxvY2stZWxlbWVudHMnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGZyb21JbmRleClcblxuICB3aGlsZSAoaW5kZXggPiBmcm9tSW5kZXgpIHtcbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4IC0gMSkgIT09ICcgJykge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleC0tXG4gIH1cblxuICByZXR1cm4gaW5kZXhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignYCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignfn4nLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxuXG52YXIgcGx1c1NpZ24gPSA0MyAvLyAnKydcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG4vLyBTZWU6IDxodHRwczovL2dpdGh1Yi5naXRodWIuY29tL2dmbS8jZXh0ZW5kZWQtZW1haWwtYXV0b2xpbms+XG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGF0XG4gIHZhciBwb3NpdGlvblxuXG4gIGlmICghdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgYXQgPSB2YWx1ZS5pbmRleE9mKCdAJywgZnJvbUluZGV4KVxuXG4gIGlmIChhdCA9PT0gLTEpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIHBvc2l0aW9uID0gYXRcblxuICBpZiAocG9zaXRpb24gPT09IGZyb21JbmRleCB8fCAhaXNHZm1BdGV4dCh2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uIC0gMSkpKSB7XG4gICAgcmV0dXJuIGxvY2F0ZS5jYWxsKHNlbGYsIHZhbHVlLCBhdCArIDEpXG4gIH1cblxuICB3aGlsZSAocG9zaXRpb24gPiBmcm9tSW5kZXggJiYgaXNHZm1BdGV4dCh2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uIC0gMSkpKSB7XG4gICAgcG9zaXRpb24tLVxuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uXG59XG5cbmZ1bmN0aW9uIGlzR2ZtQXRleHQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICBjb2RlID09PSBwbHVzU2lnbiB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSBkb3QgfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgYXN0ZXJpc2sgPSB2YWx1ZS5pbmRleE9mKCcqJywgZnJvbUluZGV4KVxuICB2YXIgdW5kZXJzY29yZSA9IHZhbHVlLmluZGV4T2YoJ18nLCBmcm9tSW5kZXgpXG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrXG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmVcbiAgfVxuXG4gIHJldHVybiB1bmRlcnNjb3JlIDwgYXN0ZXJpc2sgPyB1bmRlcnNjb3JlIDogYXN0ZXJpc2tcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignXFxcXCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgbGluayA9IHZhbHVlLmluZGV4T2YoJ1snLCBmcm9tSW5kZXgpXG4gIHZhciBpbWFnZSA9IHZhbHVlLmluZGV4T2YoJyFbJywgZnJvbUluZGV4KVxuXG4gIGlmIChpbWFnZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbGlua1xuICB9XG5cbiAgLy8gTGluayBjYW4gbmV2ZXIgYmUgYC0xYCBpZiBhbiBpbWFnZSBpcyBmb3VuZCwgc28gd2UgZG9u4oCZdCBuZWVkIHRvIGNoZWNrXG4gIC8vIGZvciB0aGF0IDopXG4gIHJldHVybiBsaW5rIDwgaW1hZ2UgPyBsaW5rIDogaW1hZ2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgYXN0ZXJpc2sgPSB2YWx1ZS5pbmRleE9mKCcqKicsIGZyb21JbmRleClcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfXycsIGZyb21JbmRleClcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2tcbiAgfVxuXG4gIGlmIChhc3RlcmlzayA9PT0gLTEpIHtcbiAgICByZXR1cm4gdW5kZXJzY29yZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlza1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCc8JywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbnZhciB2YWx1ZXMgPSBbJ3d3dy4nLCAnaHR0cDovLycsICdodHRwczovLyddXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBtaW4gPSAtMVxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgcG9zaXRpb25cblxuICBpZiAoIXRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gbWluXG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gdmFsdWUuaW5kZXhPZih2YWx1ZXNbaW5kZXhdLCBmcm9tSW5kZXgpXG5cbiAgICBpZiAocG9zaXRpb24gIT09IC0xICYmIChtaW4gPT09IC0xIHx8IHBvc2l0aW9uIDwgbWluKSkge1xuICAgICAgbWluID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWluXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHJlbW92ZVBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbGluZUJyZWFrc0V4cHJlc3Npb24gPSAvXFxyXFxufFxcci9nXG5cbi8vIFBhcnNlIHRoZSBib3VuZCBmaWxlLlxuZnVuY3Rpb24gcGFyc2UoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdmFsdWUgPSBTdHJpbmcoc2VsZi5maWxlKVxuICB2YXIgc3RhcnQgPSB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9XG4gIHZhciBjb250ZW50ID0geHRlbmQoc3RhcnQpXG4gIHZhciBub2RlXG5cbiAgLy8gQ2xlYW4gbm9uLXVuaXggbmV3bGluZXM6IGBcXHJcXG5gIGFuZCBgXFxyYCBhcmUgYWxsIGNoYW5nZWQgdG8gYFxcbmAuXG4gIC8vIFRoaXMgc2hvdWxkIG5vdCBhZmZlY3QgcG9zaXRpb25hbCBpbmZvcm1hdGlvbi5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGxpbmVCcmVha3NFeHByZXNzaW9uLCBsaW5lRmVlZClcblxuICAvLyBCT00uXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAweGZlZmYpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpXG5cbiAgICBjb250ZW50LmNvbHVtbisrXG4gICAgY29udGVudC5vZmZzZXQrK1xuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiAncm9vdCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVCbG9jayh2YWx1ZSwgY29udGVudCksXG4gICAgcG9zaXRpb246IHtzdGFydDogc3RhcnQsIGVuZDogc2VsZi5lb2YgfHwgeHRlbmQoc3RhcnQpfVxuICB9XG5cbiAgaWYgKCFzZWxmLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICByZW1vdmVQb3NpdGlvbihub2RlLCB0cnVlKVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgdG9nZ2xlID0gcmVxdWlyZSgnc3RhdGUtdG9nZ2xlJylcbnZhciB2ZmlsZUxvY2F0aW9uID0gcmVxdWlyZSgndmZpbGUtbG9jYXRpb24nKVxudmFyIHVuZXNjYXBlID0gcmVxdWlyZSgnLi91bmVzY2FwZScpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKVxudmFyIHRva2VuaXplciA9IHJlcXVpcmUoJy4vdG9rZW5pemVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJcblxuZnVuY3Rpb24gUGFyc2VyKGRvYywgZmlsZSkge1xuICB0aGlzLmZpbGUgPSBmaWxlXG4gIHRoaXMub2Zmc2V0ID0ge31cbiAgdGhpcy5vcHRpb25zID0geHRlbmQodGhpcy5vcHRpb25zKVxuICB0aGlzLnNldE9wdGlvbnMoe30pXG5cbiAgdGhpcy5pbkxpc3QgPSBmYWxzZVxuICB0aGlzLmluQmxvY2sgPSBmYWxzZVxuICB0aGlzLmluTGluayA9IGZhbHNlXG4gIHRoaXMuYXRTdGFydCA9IHRydWVcblxuICB0aGlzLnRvT2Zmc2V0ID0gdmZpbGVMb2NhdGlvbihmaWxlKS50b09mZnNldFxuICB0aGlzLnVuZXNjYXBlID0gdW5lc2NhcGUodGhpcywgJ2VzY2FwZScpXG4gIHRoaXMuZGVjb2RlID0gZGVjb2RlKHRoaXMpXG59XG5cbnZhciBwcm90byA9IFBhcnNlci5wcm90b3R5cGVcblxuLy8gRXhwb3NlIGNvcmUuXG5wcm90by5zZXRPcHRpb25zID0gcmVxdWlyZSgnLi9zZXQtb3B0aW9ucycpXG5wcm90by5wYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG4vLyBFeHBvc2UgYGRlZmF1bHRzYC5cbnByb3RvLm9wdGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcblxuLy8gRW50ZXIgYW5kIGV4aXQgaGVscGVycy5cbnByb3RvLmV4aXRTdGFydCA9IHRvZ2dsZSgnYXRTdGFydCcsIHRydWUpXG5wcm90by5lbnRlckxpc3QgPSB0b2dnbGUoJ2luTGlzdCcsIGZhbHNlKVxucHJvdG8uZW50ZXJMaW5rID0gdG9nZ2xlKCdpbkxpbmsnLCBmYWxzZSlcbnByb3RvLmVudGVyQmxvY2sgPSB0b2dnbGUoJ2luQmxvY2snLCBmYWxzZSlcblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBwYXJhZ3JhcGg6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEEgcGFyYWdyYXBoLCBmb2xsb3dlZCBieSBhIHRoZW1hdGljIGJyZWFrLlxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgcGFyYWdyYXBoLlxucHJvdG8uaW50ZXJydXB0UGFyYWdyYXBoID0gW1xuICBbJ3RoZW1hdGljQnJlYWsnXSxcbiAgWydhdHhIZWFkaW5nJ10sXG4gIFsnZmVuY2VkQ29kZSddLFxuICBbJ2Jsb2NrcXVvdGUnXSxcbiAgWydodG1sJ10sXG4gIFsnc2V0ZXh0SGVhZGluZycsIHtjb21tb25tYXJrOiBmYWxzZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIGxpc3Q6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIC0gT25lXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBsaXN0LlxucHJvdG8uaW50ZXJydXB0TGlzdCA9IFtcbiAgWydhdHhIZWFkaW5nJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2ZlbmNlZENvZGUnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBibG9ja3F1b3RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA+IEEgcGFyYWdyYXBoLlxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgYmxvY2txdW90ZS5cbnByb3RvLmludGVycnVwdEJsb2NrcXVvdGUgPSBbXG4gIFsnaW5kZW50ZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydmZW5jZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydhdHhIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydodG1sJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydsaXN0Jywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gSGFuZGxlcnMuXG5wcm90by5ibG9ja1Rva2VuaXplcnMgPSB7XG4gIGJsYW5rTGluZTogcmVxdWlyZSgnLi90b2tlbml6ZS9ibGFuay1saW5lJyksXG4gIGluZGVudGVkQ29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWluZGVudGVkJyksXG4gIGZlbmNlZENvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1mZW5jZWQnKSxcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi90b2tlbml6ZS9ibG9ja3F1b3RlJyksXG4gIGF0eEhlYWRpbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvaGVhZGluZy1hdHgnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi90b2tlbml6ZS90aGVtYXRpYy1icmVhaycpLFxuICBsaXN0OiByZXF1aXJlKCcuL3Rva2VuaXplL2xpc3QnKSxcbiAgc2V0ZXh0SGVhZGluZzogcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLXNldGV4dCcpLFxuICBodG1sOiByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtYmxvY2snKSxcbiAgZGVmaW5pdGlvbjogcmVxdWlyZSgnLi90b2tlbml6ZS9kZWZpbml0aW9uJyksXG4gIHRhYmxlOiByZXF1aXJlKCcuL3Rva2VuaXplL3RhYmxlJyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi90b2tlbml6ZS9wYXJhZ3JhcGgnKVxufVxuXG5wcm90by5pbmxpbmVUb2tlbml6ZXJzID0ge1xuICBlc2NhcGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvZXNjYXBlJyksXG4gIGF1dG9MaW5rOiByZXF1aXJlKCcuL3Rva2VuaXplL2F1dG8tbGluaycpLFxuICB1cmw6IHJlcXVpcmUoJy4vdG9rZW5pemUvdXJsJyksXG4gIGVtYWlsOiByZXF1aXJlKCcuL3Rva2VuaXplL2VtYWlsJyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvaHRtbC1pbmxpbmUnKSxcbiAgbGluazogcmVxdWlyZSgnLi90b2tlbml6ZS9saW5rJyksXG4gIHJlZmVyZW5jZTogcmVxdWlyZSgnLi90b2tlbml6ZS9yZWZlcmVuY2UnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3Rva2VuaXplL3N0cm9uZycpLFxuICBlbXBoYXNpczogcmVxdWlyZSgnLi90b2tlbml6ZS9lbXBoYXNpcycpLFxuICBkZWxldGlvbjogcmVxdWlyZSgnLi90b2tlbml6ZS9kZWxldGUnKSxcbiAgY29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWlubGluZScpLFxuICBicmVhazogcmVxdWlyZSgnLi90b2tlbml6ZS9icmVhaycpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3Rva2VuaXplL3RleHQnKVxufVxuXG4vLyBFeHBvc2UgcHJlY2VkZW5jZS5cbnByb3RvLmJsb2NrTWV0aG9kcyA9IGtleXMocHJvdG8uYmxvY2tUb2tlbml6ZXJzKVxucHJvdG8uaW5saW5lTWV0aG9kcyA9IGtleXMocHJvdG8uaW5saW5lVG9rZW5pemVycylcblxuLy8gVG9rZW5pemVycy5cbnByb3RvLnRva2VuaXplQmxvY2sgPSB0b2tlbml6ZXIoJ2Jsb2NrJylcbnByb3RvLnRva2VuaXplSW5saW5lID0gdG9rZW5pemVyKCdpbmxpbmUnKVxucHJvdG8udG9rZW5pemVGYWN0b3J5ID0gdG9rZW5pemVyXG5cbi8vIEdldCBhbGwga2V5cyBpbiBgdmFsdWVgLlxuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goa2V5KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlc2NhcGVzID0gcmVxdWlyZSgnbWFya2Rvd24tZXNjYXBlcycpXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRPcHRpb25zXG5cbmZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGN1cnJlbnQgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGAnICsgb3B0aW9ucyArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zYCcpXG4gIH1cblxuICBmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuICAgIHZhbHVlID0gb3B0aW9uc1trZXldXG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50W2tleV1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoa2V5ICE9PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykgfHxcbiAgICAgIChrZXkgPT09ICdibG9ja3MnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIHZhbHVlIGAnICsgdmFsdWUgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9ucy4nICsga2V5ICsgJ2AnXG4gICAgICApXG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnNcbiAgc2VsZi5lc2NhcGUgPSBlc2NhcGVzKG9wdGlvbnMpXG5cbiAgcmV0dXJuIHNlbGZcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3RhZycpXG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b0xpbmtcbmF1dG9MaW5rLmxvY2F0b3IgPSBsb2NhdGVcbmF1dG9MaW5rLm5vdEluTGluayA9IHRydWVcblxudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBhdFNpZ24gPSAnQCdcbnZhciBzbGFzaCA9ICcvJ1xudmFyIG1haWx0byA9ICdtYWlsdG86J1xudmFyIG1haWx0b0xlbmd0aCA9IG1haWx0by5sZW5ndGhcblxuZnVuY3Rpb24gYXV0b0xpbmsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIGhhc0F0Q2hhcmFjdGVyID0gZmFsc2VcbiAgdmFyIGxpbmsgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBub3dcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHRva2VuaXplcnNcbiAgdmFyIGV4aXRcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBsZXNzVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSA9IGxlc3NUaGFuXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgd2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGF0U2lnbiB8fFxuICAgICAgKGNoYXJhY3RlciA9PT0gJzonICYmIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBzbGFzaClcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGluayArPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBsaW5rICs9IGNoYXJhY3RlclxuICBpbmRleCsrXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gYXRTaWduKSB7XG4gICAgaGFzQXRDaGFyYWN0ZXIgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgaWYgKGNoYXJhY3RlciAhPT0gJzonIHx8IHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBzbGFzaCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGluayArPSBzbGFzaFxuICAgIGluZGV4KytcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHwgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKCFxdWV1ZSB8fCBjaGFyYWN0ZXIgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbGluayArPSBxdWV1ZVxuICBjb250ZW50ID0gbGlua1xuICBzdWJ2YWx1ZSArPSBsaW5rICsgY2hhcmFjdGVyXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uKytcbiAgbm93Lm9mZnNldCsrXG5cbiAgaWYgKGhhc0F0Q2hhcmFjdGVyKSB7XG4gICAgaWYgKGxpbmsuc2xpY2UoMCwgbWFpbHRvTGVuZ3RoKS50b0xvd2VyQ2FzZSgpID09PSBtYWlsdG8pIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKG1haWx0b0xlbmd0aClcbiAgICAgIG5vdy5jb2x1bW4gKz0gbWFpbHRvTGVuZ3RoXG4gICAgICBub3cub2Zmc2V0ICs9IG1haWx0b0xlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rID0gbWFpbHRvICsgbGlua1xuICAgIH1cbiAgfVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiBhdXRvbGlua3MuXG4gIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIGNvbnRlbnQgPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcblxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiBkZWNvZGUobGluaywge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSksXG4gICAgY2hpbGRyZW46IGNvbnRlbnRcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBBIGxpbmUgY29udGFpbmluZyBubyBjaGFyYWN0ZXJzLCBvciBhIGxpbmUgY29udGFpbmluZyBvbmx5IHNwYWNlcyAoVSswMDIwKSBvclxuLy8gdGFicyAoVSswMDA5KSwgaXMgY2FsbGVkIGEgYmxhbmsgbGluZS5cbi8vIFNlZSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2JsYW5rLWxpbmU+LlxudmFyIHJlQmxhbmtMaW5lID0gL15bIFxcdF0qKFxcbnwkKS9cblxuLy8gTm90ZSB0aGF0IHRob3VnaCBibGFuayBsaW5lcyBwbGF5IGEgc3BlY2lhbCByb2xlIGluIGxpc3RzIHRvIGRldGVybWluZVxuLy8gd2hldGhlciB0aGUgbGlzdCBpcyB0aWdodCBvciBsb29zZVxuLy8gKDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jYmxhbmstbGluZXM+KSwgaXTigJlzIGRvbmUgYnkgdGhlIGxpc3Rcbi8vIHRva2VuaXplciBhbmQgdGhpcyBibGFuayBsaW5lIHRva2VuaXplciBkb2VzIG5vdCBoYXZlIHRvIGJlIHJlc3BvbnNpYmxlIGZvclxuLy8gdGhhdC5cbi8vIFRoZXJlZm9yZSwgY29uZmlncyBzdWNoIGFzIGBibGFua0xpbmUubm90SW5MaXN0YCBkbyBub3QgaGF2ZSB0byBiZSBzZXQgaGVyZS5cbm1vZHVsZS5leHBvcnRzID0gYmxhbmtMaW5lXG5cbmZ1bmN0aW9uIGJsYW5rTGluZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIG1hdGNoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG1hdGNoID0gcmVCbGFua0xpbmUuZXhlYyh2YWx1ZS5zbGljZShpbmRleCkpXG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCArPSBtYXRjaFswXS5sZW5ndGhcbiAgICBzdWJ2YWx1ZSArPSBtYXRjaFswXVxuICB9XG5cbiAgaWYgKHN1YnZhbHVlID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGVhdChzdWJ2YWx1ZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGJsb2NrcXVvdGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb2Zmc2V0cyA9IHNlbGYub2Zmc2V0XG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0QmxvY2txdW90ZVxuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBjdXJyZW50TGluZSA9IG5vdy5saW5lXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBjb250ZW50cyA9IFtdXG4gIHZhciBpbmRlbnRzID0gW11cbiAgdmFyIGFkZFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlc3RcbiAgdmFyIG5leHRJbmRleFxuICB2YXIgY29udGVudFxuICB2YXIgbGluZVxuICB2YXIgc3RhcnRJbmRleFxuICB2YXIgcHJlZml4ZWRcbiAgdmFyIGV4aXRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaW5kZXggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmV4dEluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgcHJlZml4ZWQgPSBmYWxzZVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIG5leHRJbmRleCA9IGxlbmd0aFxuICAgIH1cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBwcmVmaXhlZCA9IHRydWVcblxuICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgfVxuXG4gICAgY29udGVudCA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpZiAoIXByZWZpeGVkICYmICF0cmltKGNvbnRlbnQpKSB7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKCFwcmVmaXhlZCkge1xuICAgICAgcmVzdCA9IHZhbHVlLnNsaWNlKGluZGV4KVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgZm9sbG93aW5nIGNvZGUgY29udGFpbnMgYSBwb3NzaWJsZSBibG9jay5cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCByZXN0LCB0cnVlXSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBjb250ZW50IDogdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaW5kZW50cy5wdXNoKGluZGV4IC0gc3RhcnRJbmRleClcbiAgICB2YWx1ZXMucHVzaChsaW5lKVxuICAgIGNvbnRlbnRzLnB1c2goY29udGVudClcblxuICAgIGluZGV4ID0gbmV4dEluZGV4ICsgMVxuICB9XG5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBpbmRlbnRzLmxlbmd0aFxuICBhZGQgPSBlYXQodmFsdWVzLmpvaW4obGluZUZlZWQpKVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tjdXJyZW50TGluZV0gPSAob2Zmc2V0c1tjdXJyZW50TGluZV0gfHwgMCkgKyBpbmRlbnRzW2luZGV4XVxuICAgIGN1cnJlbnRMaW5lKytcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyQmxvY2soKVxuICBjb250ZW50cyA9IHNlbGYudG9rZW5pemVCbG9jayhjb250ZW50cy5qb2luKGxpbmVGZWVkKSwgbm93KVxuICBleGl0KClcblxuICByZXR1cm4gYWRkKHt0eXBlOiAnYmxvY2txdW90ZScsIGNoaWxkcmVuOiBjb250ZW50c30pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9icmVhaycpXG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrXG5oYXJkQnJlYWsubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbWluQnJlYWtMZW5ndGggPSAyXG5cbmZ1bmN0aW9uIGhhcmRCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgaWYgKGluZGV4IDwgbWluQnJlYWtMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG5cbiAgICAgIHJldHVybiBlYXQocXVldWUpKHt0eXBlOiAnYnJlYWsnfSlcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZlbmNlZENvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgdGlsZGUgPSAnfidcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xuXG52YXIgbWluRmVuY2VDb3VudCA9IDNcbnZhciB0YWJTaXplID0gNFxuXG5mdW5jdGlvbiBmZW5jZWRDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgZmVuY2VDb3VudFxuICB2YXIgbWFya2VyXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGZsYWdcbiAgdmFyIGxhbmdcbiAgdmFyIG1ldGFcbiAgdmFyIHF1ZXVlXG4gIHZhciBjb250ZW50XG4gIHZhciBleGRlbnRlZENvbnRlbnRcbiAgdmFyIGNsb3NpbmdcbiAgdmFyIGV4ZGVudGVkQ2xvc2luZ1xuICB2YXIgaW5kZW50XG4gIHZhciBub3dcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaW5kZW50ID0gaW5kZXhcblxuICAvLyBFYXQgdGhlIGZlbmNlLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gdGlsZGUgJiYgY2hhcmFjdGVyICE9PSBncmF2ZUFjY2VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgZmVuY2VDb3VudCA9IDFcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGZlbmNlQ291bnQrK1xuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChmZW5jZUNvdW50IDwgbWluRmVuY2VDb3VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRWF0IHNwYWNpbmcgYmVmb3JlIGZsYWcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCBmbGFnLlxuICBmbGFnID0gJydcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gbGluZUZlZWQgfHxcbiAgICAgIChtYXJrZXIgPT09IGdyYXZlQWNjZW50ICYmIGNoYXJhY3RlciA9PT0gbWFya2VyKVxuICAgICkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWcgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuXG4gIHN1YnZhbHVlICs9IGZsYWdcbiAgZmxhZyA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGZsYWcpLCBub3cpXG5cbiAgaWYgKHF1ZXVlKSB7XG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgfVxuXG4gIHF1ZXVlID0gJydcbiAgY2xvc2luZyA9ICcnXG4gIGV4ZGVudGVkQ2xvc2luZyA9ICcnXG4gIGNvbnRlbnQgPSAnJ1xuICBleGRlbnRlZENvbnRlbnQgPSAnJ1xuICB2YXIgc2tpcCA9IHRydWVcblxuICAvLyBFYXQgY29udGVudC5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIGNvbnRlbnQgKz0gY2xvc2luZ1xuICAgIGV4ZGVudGVkQ29udGVudCArPSBleGRlbnRlZENsb3NpbmdcbiAgICBjbG9zaW5nID0gJydcbiAgICBleGRlbnRlZENsb3NpbmcgPSAnJ1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCBsaW5lIGZlZWQgaXMgaWdub3JlZC4gT3RoZXJzIGFyZW7igJl0LlxuICAgIGlmIChza2lwKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIHNraXAgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZVxuICAgIGV4ZGVudGVkQ2xvc2luZyArPSBxdWV1ZS5zbGljZShpbmRlbnQpXG5cbiAgICBpZiAocXVldWUubGVuZ3RoID49IHRhYlNpemUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjbG9zaW5nICs9IHF1ZXVlXG4gICAgZXhkZW50ZWRDbG9zaW5nICs9IHF1ZXVlXG5cbiAgICBpZiAocXVldWUubGVuZ3RoIDwgZmVuY2VDb3VudCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBjbG9zaW5nXG5cbiAgLy8gR2V0IGxhbmcgYW5kIG1ldGEgZnJvbSB0aGUgZmxhZy5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBmbGFnLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gZmxhZy5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgaWYgKCFsYW5nKSB7XG4gICAgICAgIGxhbmcgPSBmbGFnLnNsaWNlKDAsIGluZGV4KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFuZykge1xuICAgICAgbWV0YSA9IGZsYWcuc2xpY2UoaW5kZXgpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnY29kZScsXG4gICAgbGFuZzogbGFuZyB8fCBmbGFnIHx8IG51bGwsXG4gICAgbWV0YTogbWV0YSB8fCBudWxsLFxuICAgIHZhbHVlOiBleGRlbnRlZENvbnRlbnRcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGVkQ29kZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG52YXIgY29kZUluZGVudCA9IHJlcGVhdChzcGFjZSwgdGFiU2l6ZSlcblxuZnVuY3Rpb24gaW5kZW50ZWRDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50ID0gJydcbiAgdmFyIHN1YnZhbHVlUXVldWUgPSAnJ1xuICB2YXIgY29udGVudFF1ZXVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgYmxhbmtRdWV1ZVxuICB2YXIgaW5kZW50XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoaW5kZW50KSB7XG4gICAgICBpbmRlbnQgPSBmYWxzZVxuXG4gICAgICBzdWJ2YWx1ZSArPSBzdWJ2YWx1ZVF1ZXVlXG4gICAgICBjb250ZW50ICs9IGNvbnRlbnRRdWV1ZVxuICAgICAgc3VidmFsdWVRdWV1ZSA9ICcnXG4gICAgICBjb250ZW50UXVldWUgPSAnJ1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBzdWJ2YWx1ZVF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgICAgICBjb250ZW50UXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IHNwYWNlICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAzKSA9PT0gY2hhcmFjdGVyXG4gICAgKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGNvZGVJbmRlbnRcbiAgICAgIGluZGV4ICs9IDNcbiAgICAgIGluZGVudCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZW50ID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBibGFua1F1ZXVlID0gJydcblxuICAgICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgYmxhbmtRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gYmxhbmtRdWV1ZSArIGNoYXJhY3RlclxuICAgICAgY29udGVudFF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH1cbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgICB0eXBlOiAnY29kZScsXG4gICAgICBsYW5nOiBudWxsLFxuICAgICAgbWV0YTogbnVsbCxcbiAgICAgIHZhbHVlOiB0cmltKGNvbnRlbnQpXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvY29kZS1pbmxpbmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcbmlubGluZUNvZGUubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAxMCAvLyAgJ1xcbidcbnZhciBzcGFjZSA9IDMyIC8vICcgJ1xudmFyIGdyYXZlQWNjZW50ID0gOTYgLy8gICdgJ1xuXG5mdW5jdGlvbiBpbmxpbmVDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIG9wZW5pbmdGZW5jZUVuZFxuICB2YXIgY2xvc2luZ0ZlbmNlU3RhcnRcbiAgdmFyIGNsb3NpbmdGZW5jZUVuZFxuICB2YXIgY29kZVxuICB2YXIgbmV4dFxuICB2YXIgZm91bmRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCkgIT09IGdyYXZlQWNjZW50KSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBvcGVuaW5nRmVuY2VFbmQgPSBpbmRleFxuICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gbmV4dFxuICAgIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgIGlmIChjb2RlID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgaWYgKGNsb3NpbmdGZW5jZVN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQgPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBjbG9zaW5nRmVuY2VFbmQgPSBpbmRleCArIDFcblxuICAgICAgaWYgKFxuICAgICAgICBuZXh0ICE9PSBncmF2ZUFjY2VudCAmJlxuICAgICAgICBjbG9zaW5nRmVuY2VFbmQgLSBjbG9zaW5nRmVuY2VTdGFydCA9PT0gb3BlbmluZ0ZlbmNlRW5kXG4gICAgICApIHtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjbG9zaW5nRmVuY2VTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbG9zaW5nRmVuY2VTdGFydCA9IHVuZGVmaW5lZFxuICAgICAgY2xvc2luZ0ZlbmNlRW5kID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBhbmQgZmluYWwgc3BhY2UgKG9yIGxpbmUgZmVlZCksIGlmZiB0aGV5IGV4aXN0IGFuZCB0aGVyZVxuICAvLyBhcmUgbm9uLXNwYWNlIGNoYXJhY3RlcnMgaW4gdGhlIGNvbnRlbnQuXG4gIGluZGV4ID0gb3BlbmluZ0ZlbmNlRW5kXG4gIGxlbmd0aCA9IGNsb3NpbmdGZW5jZVN0YXJ0XG4gIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChsZW5ndGggLSAxKVxuICBmb3VuZCA9IGZhbHNlXG5cbiAgaWYgKFxuICAgIGxlbmd0aCAtIGluZGV4ID4gMiAmJlxuICAgIChjb2RlID09PSBzcGFjZSB8fCBjb2RlID09PSBsaW5lRmVlZCkgJiZcbiAgICAobmV4dCA9PT0gc3BhY2UgfHwgbmV4dCA9PT0gbGluZUZlZWQpXG4gICkge1xuICAgIGluZGV4KytcbiAgICBsZW5ndGgtLVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgICAgaWYgKGNvZGUgIT09IHNwYWNlICYmIGNvZGUgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGZvdW5kID09PSB0cnVlKSB7XG4gICAgICBvcGVuaW5nRmVuY2VFbmQrK1xuICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQtLVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlYXQodmFsdWUuc2xpY2UoMCwgY2xvc2luZ0ZlbmNlRW5kKSkoe1xuICAgIHR5cGU6ICdpbmxpbmVDb2RlJyxcbiAgICB2YWx1ZTogdmFsdWUuc2xpY2Uob3BlbmluZ0ZlbmNlRW5kLCBjbG9zaW5nRmVuY2VTdGFydClcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvblxuXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGJlZm9yZVVSTFxuICB2YXIgYmVmb3JlVGl0bGVcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHRlc3RcbiAgdmFyIGlkZW50aWZpZXJcbiAgdmFyIHVybFxuICB2YXIgdGl0bGVcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKFxuICAgICFxdWV1ZSB8fFxuICAgIHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCB8fFxuICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBjb2xvblxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlkZW50aWZpZXIgPSBxdWV1ZVxuICBzdWJ2YWx1ZSArPSBxdWV1ZSArIHJpZ2h0U3F1YXJlQnJhY2tldCArIGNvbG9uXG4gIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgcXVldWUgPSAnJ1xuICBiZWZvcmVVUkwgPSBzdWJ2YWx1ZVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlc3NUaGFuKSB7XG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIuZGVsaW1pdGVyKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBsZXNzVGhhbiArIHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCAtPSBxdWV1ZS5sZW5ndGggKyAxXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdXJsID0gcXVldWVcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB0ZXN0ID0gbnVsbFxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmspIHtcbiAgICB0ZXN0ID0gcXVvdGF0aW9uTWFya1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSkge1xuICAgIHRlc3QgPSBhcG9zdHJvcGhlXG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICB0ZXN0ID0gcmlnaHRQYXJlbnRoZXNpc1xuICB9XG5cbiAgaWYgKCF0ZXN0KSB7XG4gICAgcXVldWUgPSAnJ1xuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIH0gZWxzZSBpZiAocXVldWUpIHtcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQgfHwgY2hhcmFjdGVyID09PSB0ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBsaW5lRmVlZFxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0ZXN0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlXG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gICAgdGl0bGUgPSBxdWV1ZVxuICAgIHF1ZXVlID0gJydcbiAgfSBlbHNlIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBiZWZvcmVVUkwgPSBlYXQoYmVmb3JlVVJMKS50ZXN0KCkuZW5kXG4gICAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgYmVmb3JlVVJMLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZFxuICAgICAgdGl0bGUgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh0aXRsZSksIGJlZm9yZVRpdGxlKVxuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdkZWZpbml0aW9uJyxcbiAgICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKSxcbiAgICAgIGxhYmVsOiBpZGVudGlmaWVyLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgY2FuIGJlIGluc2lkZSBhbiBlbmNsb3NlZCBVUkkuXG5mdW5jdGlvbiBpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gKFxuICAgIGNoYXJhY3RlciAhPT0gZ3JlYXRlclRoYW4gJiZcbiAgICBjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0ICYmXG4gICAgY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXRcbiAgKVxufVxuXG5pc0VuY2xvc2VkVVJMQ2hhcmFjdGVyLmRlbGltaXRlciA9IGdyZWF0ZXJUaGFuXG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGNhbiBiZSBpbnNpZGUgYW4gdW5jbG9zZWQgVVJJLlxuZnVuY3Rpb24gaXNVbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIChcbiAgICBjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0ICYmXG4gICAgY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXQgJiZcbiAgICAhd2hpdGVzcGFjZShjaGFyYWN0ZXIpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZGVsZXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoXG5zdHJpa2V0aHJvdWdoLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIHRpbGRlID0gJ34nXG52YXIgZmVuY2UgPSAnfn4nXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2hhcmFjdGVyID0gJydcbiAgdmFyIHByZXZpb3VzID0gJydcbiAgdmFyIHByZWNlZGluZyA9ICcnXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBub3dcblxuICBpZiAoXG4gICAgIXNlbGYub3B0aW9ucy5nZm0gfHxcbiAgICB2YWx1ZS5jaGFyQXQoMCkgIT09IHRpbGRlIHx8XG4gICAgdmFsdWUuY2hhckF0KDEpICE9PSB0aWxkZSB8fFxuICAgIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KDIpKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4ID0gMVxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gMlxuICBub3cub2Zmc2V0ICs9IDJcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gdGlsZGUgJiZcbiAgICAgIHByZXZpb3VzID09PSB0aWxkZSAmJlxuICAgICAgKCFwcmVjZWRpbmcgfHwgIXdoaXRlc3BhY2UocHJlY2VkaW5nKSlcbiAgICApIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChmZW5jZSArIHN1YnZhbHVlICsgZmVuY2UpKHtcbiAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHN1YnZhbHVlLCBub3cpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHByZXZpb3VzXG4gICAgcHJlY2VkaW5nID0gcHJldmlvdXNcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZW1haWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtYWlsXG5lbWFpbC5sb2NhdG9yID0gbG9jYXRlXG5lbWFpbC5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBwbHVzU2lnbiA9IDQzIC8vICcrJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciBhdFNpZ24gPSA2NCAvLyAnQCdcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG5cbmZ1bmN0aW9uIGVtYWlsKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBmaXJzdERvdCA9IC0xXG4gIHZhciBjb2RlXG4gIHZhciBjb250ZW50XG4gIHZhciBjaGlsZHJlblxuICB2YXIgZXhpdFxuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICB3aGlsZSAoXG4gICAgZGVjaW1hbChjb2RlKSB8fFxuICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgIGNvZGUgPT09IHBsdXNTaWduIHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IGRvdCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoKytpbmRleClcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGNvZGUgIT09IGF0U2lnbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgZGVjaW1hbChjb2RlKSB8fFxuICAgICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgICBjb2RlID09PSBkb3QgfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgICApIHtcbiAgICAgIGluZGV4KytcblxuICAgICAgaWYgKGZpcnN0RG90ID09PSAtMSAmJiBjb2RlID09PSBkb3QpIHtcbiAgICAgICAgZmlyc3REb3QgPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGJyZWFrXG4gIH1cblxuICBpZiAoXG4gICAgZmlyc3REb3QgPT09IC0xIHx8XG4gICAgZmlyc3REb3QgPT09IGluZGV4IHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgaW5kZXgtLVxuICB9XG5cbiAgY29udGVudCA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiB1cmwuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG4gIGNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBlYXQubm93KCkpXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcblxuICBleGl0KClcblxuICByZXR1cm4gZWF0KGNvbnRlbnQpKHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiAnbWFpbHRvOicgKyBkZWNvZGUoY29udGVudCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciB3b3JkID0gcmVxdWlyZSgnaXMtd29yZC1jaGFyYWN0ZXInKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VtcGhhc2lzJylcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuZW1waGFzaXMubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbmZ1bmN0aW9uIGVtcGhhc2lzKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgbm93XG4gIHZhciBwZWRhbnRpY1xuICB2YXIgbWFya2VyXG4gIHZhciBxdWV1ZVxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGxlbmd0aFxuICB2YXIgcHJldmlvdXNcblxuICBpZiAoY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJiBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHN1YnZhbHVlID0gY2hhcmFjdGVyXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgaW5kZXgrK1xuICBxdWV1ZSA9ICcnXG4gIGNoYXJhY3RlciA9ICcnXG5cbiAgaWYgKHBlZGFudGljICYmIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyICYmICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldmlvdXMpKSkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpIHx8IHByZXZpb3VzID09PSBtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyID09PSB1bmRlcnNjb3JlICYmIHdvcmQoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHF1ZXVlICs9IG1hcmtlclxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbm93ID0gZWF0Lm5vdygpXG4gICAgICAgIG5vdy5jb2x1bW4rK1xuICAgICAgICBub3cub2Zmc2V0KytcblxuICAgICAgICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUgKyBtYXJrZXIpKHtcbiAgICAgICAgICB0eXBlOiAnZW1waGFzaXMnLFxuICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHF1ZXVlLCBub3cpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IG1hcmtlclxuICAgIH1cblxuICAgIGlmICghcGVkYW50aWMgJiYgY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lc2NhcGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZVxuZXNjYXBlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuZnVuY3Rpb24gZXNjYXBlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbm9kZVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgPT09IGJhY2tzbGFzaCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgxKVxuXG4gICAgaWYgKHNlbGYuZXNjYXBlLmluZGV4T2YoY2hhcmFjdGVyKSAhPT0gLTEpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgbm9kZSA9IHt0eXBlOiAnYnJlYWsnfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHt0eXBlOiAndGV4dCcsIHZhbHVlOiBjaGFyYWN0ZXJ9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoYmFja3NsYXNoICsgY2hhcmFjdGVyKShub2RlKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXR4SGVhZGluZ1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBudW1iZXJTaWduID0gJyMnXG5cbnZhciBtYXhGZW5jZUNvdW50ID0gNlxuXG5mdW5jdGlvbiBhdHhIZWFkaW5nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnQgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBxdWV1ZVxuICB2YXIgZGVwdGhcblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRWF0IGhhc2hlcy5cbiAgZGVwdGggPSAwXG5cbiAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbnVtYmVyU2lnbikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBkZXB0aCsrXG4gIH1cblxuICBpZiAoZGVwdGggPiBtYXhGZW5jZUNvdW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWRlcHRoIHx8ICghcGVkYW50aWMgJiYgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IG51bWJlclNpZ24pKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG5cbiAgLy8gRWF0IGludGVybWVkaWF0ZSB3aGl0ZS1zcGFjZS5cbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gbm90IGluIHBlZGFudGljIG1vZGUgd2l0aG91dCBzcGFjaW5nLlxuICBpZiAoIXBlZGFudGljICYmIHF1ZXVlLmxlbmd0aCA9PT0gMCAmJiBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBFYXQgY29udGVudC5cbiAgc3VidmFsdWUgKz0gcXVldWVcbiAgcXVldWUgPSAnJ1xuICBjb250ZW50ID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBudW1iZXJTaWduKSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIC8vIGAjYCB3aXRob3V0IGEgcXVldWUgaXMgcGFydCBvZiB0aGUgY29udGVudC5cbiAgICBpZiAoIXBlZGFudGljICYmIGNvbnRlbnQgJiYgIXF1ZXVlICYmIGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBpbmRleC0tXG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgcXVldWVcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRleHRIZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVxdWFsc1RvID0gJz0nXG52YXIgZGFzaCA9ICctJ1xuXG52YXIgbWF4SW5kZW50ID0gM1xuXG52YXIgZXF1YWxzVG9EZXB0aCA9IDFcbnZhciBkYXNoRGVwdGggPSAyXG5cbmZ1bmN0aW9uIHNldGV4dEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgZGVwdGhcblxuICAvLyBFYXQgaW5pdGlhbCBpbmRlbnRhdGlvbi5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSB8fCBpbmRleCA+PSBtYXhJbmRlbnQpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFYXQgY29udGVudC5cbiAgY29udGVudCA9ICcnXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZVxuXG4gIC8vIEVuc3VyZSB0aGUgY29udGVudCBpcyBmb2xsb3dlZCBieSBhIG5ld2xpbmUgYW5kIGEgdmFsaWQgbWFya2VyLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgbWFya2VyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgfHwgKG1hcmtlciAhPT0gZXF1YWxzVG8gJiYgbWFya2VyICE9PSBkYXNoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG5cbiAgLy8gRWF0IFNldGV4dC1saW5lLlxuICBxdWV1ZSA9IG1hcmtlclxuICBkZXB0aCA9IG1hcmtlciA9PT0gZXF1YWxzVG8gPyBlcXVhbHNUb0RlcHRoIDogZGFzaERlcHRoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb3BlbkNsb3NlVGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykub3BlbkNsb3NlVGFnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tIdG1sXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGxlc3NUaGFuID0gJzwnXG5cbnZhciByYXdPcGVuRXhwcmVzc2lvbiA9IC9ePChzY3JpcHR8cHJlfHN0eWxlKSg/PShcXHN8PnwkKSkvaVxudmFyIHJhd0Nsb3NlRXhwcmVzc2lvbiA9IC88XFwvKHNjcmlwdHxwcmV8c3R5bGUpPi9pXG52YXIgY29tbWVudE9wZW5FeHByZXNzaW9uID0gL148IS0tL1xudmFyIGNvbW1lbnRDbG9zZUV4cHJlc3Npb24gPSAvLS0+L1xudmFyIGluc3RydWN0aW9uT3BlbkV4cHJlc3Npb24gPSAvXjxcXD8vXG52YXIgaW5zdHJ1Y3Rpb25DbG9zZUV4cHJlc3Npb24gPSAvXFw/Pi9cbnZhciBkaXJlY3RpdmVPcGVuRXhwcmVzc2lvbiA9IC9ePCFbQS1aYS16XS9cbnZhciBkaXJlY3RpdmVDbG9zZUV4cHJlc3Npb24gPSAvPi9cbnZhciBjZGF0YU9wZW5FeHByZXNzaW9uID0gL148IVxcW0NEQVRBXFxbL1xudmFyIGNkYXRhQ2xvc2VFeHByZXNzaW9uID0gL11dPi9cbnZhciBlbGVtZW50Q2xvc2VFeHByZXNzaW9uID0gL14kL1xudmFyIG90aGVyRWxlbWVudE9wZW5FeHByZXNzaW9uID0gbmV3IFJlZ0V4cChvcGVuQ2xvc2VUYWcuc291cmNlICsgJ1xcXFxzKiQnKVxuXG5mdW5jdGlvbiBibG9ja0h0bWwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYmxvY2tzID0gc2VsZi5vcHRpb25zLmJsb2Nrcy5qb2luKCd8JylcbiAgdmFyIGVsZW1lbnRPcGVuRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoXG4gICAgJ148Lz8oJyArIGJsb2NrcyArICcpKD89KFxcXFxzfC8/PnwkKSknLFxuICAgICdpJ1xuICApXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbmV4dFxuICB2YXIgbGluZVxuICB2YXIgb2Zmc2V0XG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGNvdW50XG4gIHZhciBzZXF1ZW5jZVxuICB2YXIgc3VidmFsdWVcblxuICB2YXIgc2VxdWVuY2VzID0gW1xuICAgIFtyYXdPcGVuRXhwcmVzc2lvbiwgcmF3Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbY29tbWVudE9wZW5FeHByZXNzaW9uLCBjb21tZW50Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbaW5zdHJ1Y3Rpb25PcGVuRXhwcmVzc2lvbiwgaW5zdHJ1Y3Rpb25DbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtkaXJlY3RpdmVPcGVuRXhwcmVzc2lvbiwgZGlyZWN0aXZlQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbY2RhdGFPcGVuRXhwcmVzc2lvbiwgY2RhdGFDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtlbGVtZW50T3BlbkV4cHJlc3Npb24sIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtvdGhlckVsZW1lbnRPcGVuRXhwcmVzc2lvbiwgZWxlbWVudENsb3NlRXhwcmVzc2lvbiwgZmFsc2VdXG4gIF1cblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gbGVzc1RoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5leHQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gIG5leHQgPSBuZXh0ID09PSAtMSA/IGxlbmd0aCA6IG5leHRcbiAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0KVxuICBvZmZzZXQgPSAtMVxuICBjb3VudCA9IHNlcXVlbmNlcy5sZW5ndGhcblxuICB3aGlsZSAoKytvZmZzZXQgPCBjb3VudCkge1xuICAgIGlmIChzZXF1ZW5jZXNbb2Zmc2V0XVswXS50ZXN0KGxpbmUpKSB7XG4gICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlc1tvZmZzZXRdXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2VxdWVuY2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gc2VxdWVuY2VbMl1cbiAgfVxuXG4gIGluZGV4ID0gbmV4dFxuXG4gIGlmICghc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgbmV4dCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgICAgIG5leHQgPSBuZXh0ID09PSAtMSA/IGxlbmd0aCA6IG5leHRcbiAgICAgIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCArIDEsIG5leHQpXG5cbiAgICAgIGlmIChzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgaW5kZXggPSBuZXh0XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCA9IG5leHRcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAnaHRtbCcsIHZhbHVlOiBzdWJ2YWx1ZX0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3RhZycpXG52YXIgdGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykudGFnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lSFRNTFxuaW5saW5lSFRNTC5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIHF1ZXN0aW9uTWFyayA9ICc/J1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIHNsYXNoID0gJy8nXG5cbnZhciBodG1sTGlua09wZW5FeHByZXNzaW9uID0gL148YSAvaVxudmFyIGh0bWxMaW5rQ2xvc2VFeHByZXNzaW9uID0gL148XFwvYT4vaVxuXG5mdW5jdGlvbiBpbmxpbmVIVE1MKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBzdWJ2YWx1ZVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09IGxlc3NUaGFuIHx8IGxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgxKVxuXG4gIGlmIChcbiAgICAhYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHF1ZXN0aW9uTWFyayAmJlxuICAgIGNoYXJhY3RlciAhPT0gZXhjbGFtYXRpb25NYXJrICYmXG4gICAgY2hhcmFjdGVyICE9PSBzbGFzaFxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUubWF0Y2godGFnKVxuXG4gIGlmICghc3VidmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5vdCB1c2VkIHlldC4gKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHN1YnZhbHVlWzBdXG5cbiAgaWYgKCFzZWxmLmluTGluayAmJiBodG1sTGlua09wZW5FeHByZXNzaW9uLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSB0cnVlXG4gIH0gZWxzZSBpZiAoc2VsZi5pbkxpbmsgJiYgaHRtbExpbmtDbG9zZUV4cHJlc3Npb24udGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ2h0bWwnLCB2YWx1ZTogc3VidmFsdWV9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9saW5rJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5saW5rLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xuXG5mdW5jdGlvbiBsaW5rKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciBjbG9zZWRcbiAgdmFyIGNvdW50XG4gIHZhciBvcGVuaW5nXG4gIHZhciBiZWZvcmVVUkxcbiAgdmFyIGJlZm9yZVRpdGxlXG4gIHZhciBzdWJxdWV1ZVxuICB2YXIgaGFzTWFya2VyXG4gIHZhciBpc0ltYWdlXG4gIHZhciBjb250ZW50XG4gIHZhciBtYXJrZXJcbiAgdmFyIGxlbmd0aFxuICB2YXIgdGl0bGVcbiAgdmFyIGRlcHRoXG4gIHZhciBxdWV1ZVxuICB2YXIgdXJsXG4gIHZhciBub3dcbiAgdmFyIGV4aXRcbiAgdmFyIG5vZGVcblxuICAvLyBEZXRlY3Qgd2hldGhlciB0aGlzIGlzIGFuIGltYWdlLlxuICBpZiAoY2hhcmFjdGVyID09PSBleGNsYW1hdGlvbk1hcmspIHtcbiAgICBpc0ltYWdlID0gdHJ1ZVxuICAgIHN1YnZhbHVlID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICAvLyBFYXQgdGhlIG9wZW5pbmcuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gdGhpcyBpcyBhIGxpbmsgYW5kIHdl4oCZcmUgYWxyZWFkeSBpbnNpZGUgYSBsaW5rLlxuICBpZiAoIWlzSW1hZ2UgJiYgc2VsZi5pbkxpbmspIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG4gIGluZGV4KytcblxuICAvLyBFYXQgdGhlIGNvbnRlbnQuXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBub3cgPSBlYXQubm93KClcbiAgZGVwdGggPSAwXG5cbiAgbm93LmNvbHVtbiArPSBpbmRleFxuICBub3cub2Zmc2V0ICs9IGluZGV4XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIHN1YnF1ZXVlID0gY2hhcmFjdGVyXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgLy8gSW5saW5lLWNvZGUgaW4gbGluayBjb250ZW50LlxuICAgICAgY291bnQgPSAxXG5cbiAgICAgIHdoaWxlICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY291bnQrK1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wZW5pbmcpIHtcbiAgICAgICAgb3BlbmluZyA9IGNvdW50XG4gICAgICB9IGVsc2UgaWYgKGNvdW50ID49IG9wZW5pbmcpIHtcbiAgICAgICAgb3BlbmluZyA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAvLyBBbGxvdyBicmFja2V0cyB0byBiZSBlc2NhcGVkLlxuICAgICAgaW5kZXgrK1xuICAgICAgc3VicXVldWUgKz0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIH0gZWxzZSBpZiAoKCFvcGVuaW5nIHx8IGdmbSkgJiYgY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgICAgLy8gSW4gR0ZNIG1vZGUsIGJyYWNrZXRzIGluIGNvZGUgc3RpbGwgY291bnQuICBJbiBhbGwgb3RoZXIgbW9kZXMsXG4gICAgICAvLyB0aGV5IGRvbuKAmXQuXG4gICAgICBkZXB0aCsrXG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgIGRlcHRoLS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJxdWV1ZSArPSBsZWZ0UGFyZW50aGVzaXNcbiAgICAgICAgY2xvc2VkID0gdHJ1ZVxuICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBzdWJxdWV1ZVxuICAgIHN1YnF1ZXVlID0gJydcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgdGhlIGNvbnRlbnQgY2xvc2luZy5cbiAgaWYgKCFjbG9zZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnRlbnQgPSBxdWV1ZVxuICBzdWJ2YWx1ZSArPSBxdWV1ZSArIHN1YnF1ZXVlXG4gIGluZGV4KytcblxuICAvLyBFYXQgd2hpdGUtc3BhY2UuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCB0aGUgVVJMLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHF1ZXVlID0gJydcbiAgYmVmb3JlVVJMID0gc3VidmFsdWVcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZXNzVGhhbikge1xuICAgIGluZGV4KytcbiAgICBiZWZvcmVVUkwgKz0gbGVzc1RoYW5cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGxlc3NUaGFuICsgcXVldWUgKyBncmVhdGVyVGhhblxuICAgIHVybCA9IHF1ZXVlXG4gICAgaW5kZXgrK1xuICB9IGVsc2Uge1xuICAgIGNoYXJhY3RlciA9IG51bGxcbiAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKFxuICAgICAgICBzdWJxdWV1ZSAmJlxuICAgICAgICAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlIHx8XG4gICAgICAgICAgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgaWYgKCFwZWRhbnRpYykge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIGRlcHRoKytcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVwdGgtLVxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gc3VicXVldWVcbiAgICAgICAgc3VicXVldWUgPSAnJ1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgIHVybCA9IHF1ZXVlXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgfVxuXG4gIC8vIEVhdCB3aGl0ZS1zcGFjZS5cbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgc3VidmFsdWUgKz0gcXVldWVcblxuICAvLyBFYXQgdGhlIHRpdGxlLlxuICBpZiAoXG4gICAgcXVldWUgJiZcbiAgICAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUgfHxcbiAgICAgIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSlcbiAgKSB7XG4gICAgaW5kZXgrK1xuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIHF1ZXVlID0gJydcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcyA/IHJpZ2h0UGFyZW50aGVzaXMgOiBjaGFyYWN0ZXJcbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlXG5cbiAgICAvLyBJbiBjb21tb25tYXJrLW1vZGUsIHRoaW5ncyBhcmUgcHJldHR5IGVhc3k6IHRoZSBtYXJrZXIgY2Fubm90IG9jY3VyXG4gICAgLy8gaW5zaWRlIHRoZSB0aXRsZS4gIE5vbi1jb21tb25tYXJrIGRvZXMsIGhvd2V2ZXIsIHN1cHBvcnQgbmVzdGVkXG4gICAgLy8gZGVsaW1pdGVycy5cbiAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGl0bGUgPSBxdWV1ZVxuICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgaWYgKGhhc01hcmtlcikge1xuICAgICAgICAgICAgcXVldWUgKz0gbWFya2VyICsgc3VicXVldWVcbiAgICAgICAgICAgIHN1YnF1ZXVlID0gJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYXNNYXJrZXIgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc01hcmtlcikge1xuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyICsgc3VicXVldWVcbiAgICAgICAgICB0aXRsZSA9IHF1ZXVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgICAgIHN1YnF1ZXVlID0gJydcbiAgICAgICAgICBoYXNNYXJrZXIgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3VidmFsdWUgKz0gcmlnaHRQYXJlbnRoZXNpc1xuXG4gIHVybCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHVybCksIGVhdChiZWZvcmVVUkwpLnRlc3QoKS5lbmQsIHtcbiAgICBub25UZXJtaW5hdGVkOiBmYWxzZVxuICB9KVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGJlZm9yZVRpdGxlID0gZWF0KGJlZm9yZVRpdGxlKS50ZXN0KCkuZW5kXG4gICAgdGl0bGUgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh0aXRsZSksIGJlZm9yZVRpdGxlKVxuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiBpc0ltYWdlID8gJ2ltYWdlJyA6ICdsaW5rJyxcbiAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICB1cmw6IHVybFxuICB9XG5cbiAgaWYgKGlzSW1hZ2UpIHtcbiAgICBub2RlLmFsdCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGNvbnRlbnQpLCBub3cpIHx8IG51bGxcbiAgfSBlbHNlIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICAgIG5vZGUuY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgICBleGl0KClcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgZ2V0SW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9nZXQtaW5kZW50YXRpb24nKVxudmFyIHJlbW92ZUluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgcGx1c1NpZ24gPSAnKydcbnZhciBkYXNoID0gJy0nXG52YXIgZG90ID0gJy4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbG93ZXJjYXNlWCA9ICd4J1xuXG52YXIgdGFiU2l6ZSA9IDRcbnZhciBsb29zZUxpc3RJdGVtRXhwcmVzc2lvbiA9IC9cXG5cXG4oPyFcXHMqJCkvXG52YXIgdGFza0l0ZW1FeHByZXNzaW9uID0gL15cXFsoWyBYXFx0eF0pXVsgXFx0XS9cbnZhciBidWxsZXRFeHByZXNzaW9uID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKCB7MSw0fSg/ISApfCB8XFx0fCR8KD89XFxuKSkoW15cXG5dKikvXG52YXIgcGVkYW50aWNCdWxsZXRFeHByZXNzaW9uID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKFsgXFx0XSspL1xudmFyIGluaXRpYWxJbmRlbnRFeHByZXNzaW9uID0gL14oIHsxLDR9fFxcdCk/L2dtXG5cbmZ1bmN0aW9uIGxpc3QoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0TGlzdFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN0YXJ0ID0gbnVsbFxuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIHF1ZXVlXG4gIHZhciBvcmRlcmVkXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgbmV4dEluZGV4XG4gIHZhciBzdGFydEluZGV4XG4gIHZhciBwcmVmaXhlZFxuICB2YXIgY3VycmVudE1hcmtlclxuICB2YXIgY29udGVudFxuICB2YXIgbGluZVxuICB2YXIgcHJldmlvdXNFbXB0eVxuICB2YXIgZW1wdHlcbiAgdmFyIGl0ZW1zXG4gIHZhciBhbGxMaW5lc1xuICB2YXIgZW1wdHlMaW5lc1xuICB2YXIgaXRlbVxuICB2YXIgZW50ZXJUb3BcbiAgdmFyIGV4aXRCbG9ja3F1b3RlXG4gIHZhciBzcHJlYWQgPSBmYWxzZVxuICB2YXIgbm9kZVxuICB2YXIgbm93XG4gIHZhciBlbmRcbiAgdmFyIGluZGVudGVkXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBzaXplICs9IHRhYlNpemUgLSAoc2l6ZSAlIHRhYlNpemUpXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICBzaXplKytcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoc2l6ZSA+PSB0YWJTaXplKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHwgY2hhcmFjdGVyID09PSBwbHVzU2lnbiB8fCBjaGFyYWN0ZXIgPT09IGRhc2gpIHtcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICBvcmRlcmVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBvcmRlcmVkID0gdHJ1ZVxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICAhcXVldWUgfHxcbiAgICAgICEoY2hhcmFjdGVyID09PSBkb3QgfHwgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YXJ0ID0gcGFyc2VJbnQocXVldWUsIDEwKVxuICAgIG1hcmtlciA9IGNoYXJhY3RlclxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgaWYgKFxuICAgIGNoYXJhY3RlciAhPT0gc3BhY2UgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHRhYiAmJlxuICAgIChwZWRhbnRpYyB8fCAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCAmJiBjaGFyYWN0ZXIgIT09ICcnKSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGluZGV4ID0gMFxuICBpdGVtcyA9IFtdXG4gIGFsbExpbmVzID0gW11cbiAgZW1wdHlMaW5lcyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmV4dEluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgcHJlZml4ZWQgPSBmYWxzZVxuICAgIGluZGVudGVkID0gZmFsc2VcblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0SW5kZXggPSBsZW5ndGhcbiAgICB9XG5cbiAgICBlbmQgPSBpbmRleCArIHRhYlNpemVcbiAgICBzaXplID0gMFxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICBzaXplICs9IHRhYlNpemUgLSAoc2l6ZSAlIHRhYlNpemUpXG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgc2l6ZSsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKHNpemUgPj0gdGFiU2l6ZSkge1xuICAgICAgaW5kZW50ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gJiYgc2l6ZSA+PSBpdGVtLmluZGVudCkge1xuICAgICAgaW5kZW50ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIGN1cnJlbnRNYXJrZXIgPSBudWxsXG5cbiAgICBpZiAoIWluZGVudGVkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBwbHVzU2lnbiB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGRhc2hcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50TWFya2VyID0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgc2l6ZSsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZSA9ICcnXG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHF1ZXVlICYmXG4gICAgICAgICAgKGNoYXJhY3RlciA9PT0gZG90IHx8IChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykpXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgICBzaXplICs9IHF1ZXVlLmxlbmd0aCArIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudE1hcmtlcikge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgICAgc2l6ZSArPSB0YWJTaXplIC0gKHNpemUgJSB0YWJTaXplKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgICAgZW5kID0gaW5kZXggKyB0YWJTaXplXG5cbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBzcGFjZSkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICBzaXplKytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZCAmJiB2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICAgICAgaW5kZXggLT0gdGFiU2l6ZSAtIDFcbiAgICAgICAgICAgIHNpemUgLT0gdGFiU2l6ZSAtIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCAmJiBjaGFyYWN0ZXIgIT09ICcnKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50TWFya2VyKSB7XG4gICAgICBpZiAoIXBlZGFudGljICYmIG1hcmtlciAhPT0gY3VycmVudE1hcmtlcikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwcmVmaXhlZCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb21tb25tYXJrICYmICFpbmRlbnRlZCAmJiB2YWx1ZS5jaGFyQXQoc3RhcnRJbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgIGluZGVudGVkID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChjb21tb25tYXJrICYmIGl0ZW0pIHtcbiAgICAgICAgaW5kZW50ZWQgPSBzaXplID49IGl0ZW0uaW5kZW50IHx8IHNpemUgPiB0YWJTaXplXG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gZmFsc2VcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgIH1cblxuICAgIGxpbmUgPSB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBuZXh0SW5kZXgpXG4gICAgY29udGVudCA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gbGluZSA6IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50TWFya2VyID09PSBhc3RlcmlzayB8fFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gdW5kZXJzY29yZSB8fFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gZGFzaFxuICAgICkge1xuICAgICAgaWYgKHRva2VuaXplcnMudGhlbWF0aWNCcmVhay5jYWxsKHNlbGYsIGVhdCwgbGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91c0VtcHR5ID0gZW1wdHlcbiAgICBlbXB0eSA9ICFwcmVmaXhlZCAmJiAhdHJpbShjb250ZW50KS5sZW5ndGhcblxuICAgIGlmIChpbmRlbnRlZCAmJiBpdGVtKSB7XG4gICAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZS5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9IGVsc2UgaWYgKHByZWZpeGVkKSB7XG4gICAgICBpZiAoZW1wdHlMaW5lcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc3ByZWFkID0gdHJ1ZVxuICAgICAgICBpdGVtLnZhbHVlLnB1c2goJycpXG4gICAgICAgIGl0ZW0udHJhaWwgPSBlbXB0eUxpbmVzLmNvbmNhdCgpXG4gICAgICB9XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHZhbHVlOiBbbGluZV0sXG4gICAgICAgIGluZGVudDogc2l6ZSxcbiAgICAgICAgdHJhaWw6IFtdXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zLnB1c2goaXRlbSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9IGVsc2UgaWYgKGVtcHR5KSB7XG4gICAgICBpZiAocHJldmlvdXNFbXB0eSAmJiAhY29tbW9ubWFyaykge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBlbXB0eUxpbmVzLnB1c2gobGluZSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZpb3VzRW1wdHkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGludGVycnVwdChpbnRlcnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgbGluZSwgdHJ1ZV0pKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH1cblxuICAgIGluZGV4ID0gbmV4dEluZGV4ICsgMVxuICB9XG5cbiAgbm9kZSA9IGVhdChhbGxMaW5lcy5qb2luKGxpbmVGZWVkKSkucmVzZXQoe1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBvcmRlcmVkOiBvcmRlcmVkLFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBzcHJlYWQ6IHNwcmVhZCxcbiAgICBjaGlsZHJlbjogW11cbiAgfSlcblxuICBlbnRlclRvcCA9IHNlbGYuZW50ZXJMaXN0KClcbiAgZXhpdEJsb2NrcXVvdGUgPSBzZWxmLmVudGVyQmxvY2soKVxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XS52YWx1ZS5qb2luKGxpbmVGZWVkKVxuICAgIG5vdyA9IGVhdC5ub3coKVxuXG4gICAgZWF0KGl0ZW0pKGxpc3RJdGVtKHNlbGYsIGl0ZW0sIG5vdyksIG5vZGUpXG5cbiAgICBpdGVtID0gaXRlbXNbaW5kZXhdLnRyYWlsLmpvaW4obGluZUZlZWQpXG5cbiAgICBpZiAoaW5kZXggIT09IGxlbmd0aCAtIDEpIHtcbiAgICAgIGl0ZW0gKz0gbGluZUZlZWRcbiAgICB9XG5cbiAgICBlYXQoaXRlbSlcbiAgfVxuXG4gIGVudGVyVG9wKClcbiAgZXhpdEJsb2NrcXVvdGUoKVxuXG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgZm4gPSBjdHgub3B0aW9ucy5wZWRhbnRpYyA/IHBlZGFudGljTGlzdEl0ZW0gOiBub3JtYWxMaXN0SXRlbVxuICB2YXIgY2hlY2tlZCA9IG51bGxcbiAgdmFyIHRhc2tcbiAgdmFyIGluZGVudFxuXG4gIHZhbHVlID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuXG4gIGlmIChjdHgub3B0aW9ucy5nZm0pIHtcbiAgICB0YXNrID0gdmFsdWUubWF0Y2godGFza0l0ZW1FeHByZXNzaW9uKVxuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGluZGVudCA9IHRhc2tbMF0ubGVuZ3RoXG4gICAgICBjaGVja2VkID0gdGFza1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb3dlcmNhc2VYXG4gICAgICBvZmZzZXRzW3Bvc2l0aW9uLmxpbmVdICs9IGluZGVudFxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShpbmRlbnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgIHNwcmVhZDogbG9vc2VMaXN0SXRlbUV4cHJlc3Npb24udGVzdCh2YWx1ZSksXG4gICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICBjaGlsZHJlbjogY3R4LnRva2VuaXplQmxvY2sodmFsdWUsIHBvc2l0aW9uKVxuICB9XG59XG5cbi8vIENyZWF0ZSBhIGxpc3QtaXRlbSB1c2luZyBvdmVybHkgc2ltcGxlIG1lY2hhbmljcy5cbmZ1bmN0aW9uIHBlZGFudGljTGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuXG4gIC8vIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShwZWRhbnRpY0J1bGxldEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIC8vIFRoZSBpbml0aWFsIGxpbmUgd2FzIGFsc28gbWF0Y2hlZCBieSB0aGUgYmVsb3csIHNvIHdlIHJlc2V0IHRoZSBgbGluZWAuXG4gIGxpbmUgPSBwb3NpdGlvbi5saW5lXG5cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoaW5pdGlhbEluZGVudEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIC8vIEEgc2ltcGxlIHJlcGxhY2VyIHdoaWNoIHJlbW92ZWQgYWxsIG1hdGNoZXMsIGFuZCBhZGRzIHRoZWlyIGxlbmd0aCB0b1xuICAvLyBgb2Zmc2V0YC5cbiAgZnVuY3Rpb24gcmVwbGFjZXIoJDApIHtcbiAgICBvZmZzZXRzW2xpbmVdID0gKG9mZnNldHNbbGluZV0gfHwgMCkgKyAkMC5sZW5ndGhcbiAgICBsaW5lKytcblxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbi8vIENyZWF0ZSBhIGxpc3QtaXRlbSB1c2luZyBzYW5lIG1lY2hhbmljcy5cbmZ1bmN0aW9uIG5vcm1hbExpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcbiAgdmFyIG1heFxuICB2YXIgYnVsbGV0XG4gIHZhciByZXN0XG4gIHZhciBsaW5lc1xuICB2YXIgdHJpbW1lZExpbmVzXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgLy8gUmVtb3ZlIHRoZSBsaXN0LWl0ZW3igJlzIGJ1bGxldC5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGJ1bGxldEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIGxpbmVzID0gdmFsdWUuc3BsaXQobGluZUZlZWQpXG5cbiAgdHJpbW1lZExpbmVzID0gcmVtb3ZlSW5kZW50KHZhbHVlLCBnZXRJbmRlbnQobWF4KS5pbmRlbnQpLnNwbGl0KGxpbmVGZWVkKVxuXG4gIC8vIFdlIHJlcGxhY2VkIHRoZSBpbml0aWFsIGJ1bGxldCB3aXRoIHNvbWV0aGluZyBlbHNlIGFib3ZlLCB3aGljaCB3YXMgdXNlZFxuICAvLyB0byB0cmljayBgcmVtb3ZlSW5kZW50YXRpb25gIGludG8gcmVtb3Zpbmcgc29tZSBtb3JlIGNoYXJhY3RlcnMgd2hlblxuICAvLyBwb3NzaWJsZS4gIEhvd2V2ZXIsIHRoYXQgY291bGQgcmVzdWx0IGluIHRoZSBpbml0aWFsIGxpbmUgdG8gYmUgc3RyaXBwZWRcbiAgLy8gbW9yZSB0aGFuIGl0IHNob3VsZCBiZS5cbiAgdHJpbW1lZExpbmVzWzBdID0gcmVzdFxuXG4gIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArIGJ1bGxldC5sZW5ndGhcbiAgbGluZSsrXG5cbiAgaW5kZXggPSAwXG4gIGxlbmd0aCA9IGxpbmVzLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9XG4gICAgICAob2Zmc2V0c1tsaW5lXSB8fCAwKSArIGxpbmVzW2luZGV4XS5sZW5ndGggLSB0cmltbWVkTGluZXNbaW5kZXhdLmxlbmd0aFxuICAgIGxpbmUrK1xuICB9XG5cbiAgcmV0dXJuIHRyaW1tZWRMaW5lcy5qb2luKGxpbmVGZWVkKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VyKCQwLCAkMSwgJDIsICQzLCAkNCkge1xuICAgIGJ1bGxldCA9ICQxICsgJDIgKyAkM1xuICAgIHJlc3QgPSAkNFxuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGZpcnN0IG5pbmUgbnVtYmVyZWQgbGlzdCBpdGVtcyBjYW4gaW5kZW50IHdpdGggYW5cbiAgICAvLyBleHRyYSBzcGFjZS4gIFRoYXQgaXMsIHdoZW4gdGhlIGJ1bGxldCBkaWQgbm90IHJlY2VpdmUgYW4gZXh0cmEgZmluYWxcbiAgICAvLyBzcGFjZS5cbiAgICBpZiAoTnVtYmVyKCQyKSA8IDEwICYmIGJ1bGxldC5sZW5ndGggJSAyID09PSAxKSB7XG4gICAgICAkMiA9IHNwYWNlICsgJDJcbiAgICB9XG5cbiAgICBtYXggPSAkMSArIHJlcGVhdChzcGFjZSwgJDIubGVuZ3RoKSArICQzXG5cbiAgICByZXR1cm4gbWF4ICsgcmVzdFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgdHJpbVRyYWlsaW5nTGluZXMgPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gVG9rZW5pc2UgcGFyYWdyYXBoLlxuZnVuY3Rpb24gcGFyYWdyYXBoKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNldHRpbmdzID0gc2VsZi5vcHRpb25zXG4gIHZhciBjb21tb25tYXJrID0gc2V0dGluZ3MuY29tbW9ubWFya1xuICB2YXIgZ2ZtID0gc2V0dGluZ3MuZ2ZtXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0UGFyYWdyYXBoXG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQpXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBzaXplXG4gIHZhciBub3dcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAvLyBFYXQgZXZlcnl0aGluZyBpZiB0aGVyZeKAmXMgbm8gZm9sbG93aW5nIG5ld2xpbmUuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBsZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gU3RvcCBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgTkVXTElORS5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIEluIGNvbW1vbm1hcmstbW9kZSwgZm9sbG93aW5nIGluZGVudGVkIGxpbmVzIGFyZSBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGguXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHNpemUgPSAwXG4gICAgICBwb3NpdGlvbiA9IGluZGV4ICsgMVxuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICAgIHNpemUgPSB0YWJTaXplXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgICAgc2l6ZSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uKytcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPj0gdGFiU2l6ZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoaW5kZXggKyAxKVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGZvbGxvd2luZyBjb2RlIGNvbnRhaW5zIGEgcG9zc2libGUgYmxvY2suXG4gICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHN1YnZhbHVlLCB0cnVlXSkpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gQnJlYWsgaWYgdGhlIGZvbGxvd2luZyBsaW5lIHN0YXJ0cyBhIGxpc3QsIHdoZW4gYWxyZWFkeSBpbiBhIGxpc3QsIG9yXG4gICAgLy8gd2hlbiBpbiBjb21tb25tYXJrLCBvciB3aGVuIGluIGdmbSBtb2RlIGFuZCB0aGUgYnVsbGV0IGlzICpub3QqIG51bWVyaWMuXG4gICAgaWYgKFxuICAgICAgdG9rZW5pemVycy5saXN0LmNhbGwoc2VsZiwgZWF0LCBzdWJ2YWx1ZSwgdHJ1ZSkgJiZcbiAgICAgIChzZWxmLmluTGlzdCB8fFxuICAgICAgICBjb21tb25tYXJrIHx8XG4gICAgICAgIChnZm0gJiYgIWRlY2ltYWwodHJpbS5sZWZ0KHN1YnZhbHVlKS5jaGFyQXQoMCkpKSlcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSBpbmRleFxuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiB0cmltKHZhbHVlLnNsaWNlKHBvc2l0aW9uLCBpbmRleCkpID09PSAnJykge1xuICAgICAgaW5kZXggPSBwb3NpdGlvblxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgc3VidmFsdWUgPSB0cmltVHJhaWxpbmdMaW5lcyhzdWJ2YWx1ZSlcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmVyZW5jZVxucmVmZXJlbmNlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmsgPSAnbGluaydcbnZhciBpbWFnZSA9ICdpbWFnZSdcbnZhciBzaG9ydGN1dCA9ICdzaG9ydGN1dCdcbnZhciBjb2xsYXBzZWQgPSAnY29sbGFwc2VkJ1xudmFyIGZ1bGwgPSAnZnVsbCdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xuXG5mdW5jdGlvbiByZWZlcmVuY2UoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMClcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbnRybyA9ICcnXG4gIHZhciB0eXBlID0gbGlua1xuICB2YXIgcmVmZXJlbmNlVHlwZSA9IHNob3J0Y3V0XG4gIHZhciBjb250ZW50XG4gIHZhciBpZGVudGlmaWVyXG4gIHZhciBub3dcbiAgdmFyIG5vZGVcbiAgdmFyIGV4aXRcbiAgdmFyIHF1ZXVlXG4gIHZhciBicmFja2V0ZWRcbiAgdmFyIGRlcHRoXG5cbiAgLy8gQ2hlY2sgd2hldGhlciB3ZeKAmXJlIGVhdGluZyBhbiBpbWFnZS5cbiAgaWYgKGNoYXJhY3RlciA9PT0gZXhjbGFtYXRpb25NYXJrKSB7XG4gICAgdHlwZSA9IGltYWdlXG4gICAgaW50cm8gPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIGludHJvICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgLy8gRWF0IHRoZSB0ZXh0LlxuICBkZXB0aCA9IDBcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgICAgYnJhY2tldGVkID0gdHJ1ZVxuICAgICAgZGVwdGgrK1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGlmICghZGVwdGgpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVwdGgtLVxuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHF1ZXVlXG4gIGNvbnRlbnQgPSBxdWV1ZVxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgaWYgKCFjb21tb25tYXJrKSB7XG4gICAgLy8gVGhlIG9yaWdpbmFsIG1hcmtkb3duIHN5bnRheCBkZWZpbml0aW9uIGV4cGxpY2l0bHkgYWxsb3dzIGZvciB3aGl0ZXNwYWNlXG4gICAgLy8gYmV0d2VlbiB0aGUgbGluayB0ZXh0IGFuZCBsaW5rIGxhYmVsOyBjb21tb25tYXJrIGRlcGFydHMgZnJvbSB0aGlzLCBpblxuICAgIC8vIHBhcnQgdG8gaW1wcm92ZSBzdXBwb3J0IGZvciBzaG9ydGN1dCByZWZlcmVuY2UgbGlua3NcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgaWRlbnRpZmllciA9ICcnXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0IHx8IGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICBpZGVudGlmaWVyICs9IGJhY2tzbGFzaFxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgIH1cblxuICAgICAgaWRlbnRpZmllciArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIHJlZmVyZW5jZVR5cGUgPSBpZGVudGlmaWVyID8gZnVsbCA6IGNvbGxhcHNlZFxuICAgICAgcXVldWUgKz0gaWRlbnRpZmllciArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH0gZWxzZSB7XG4gICAgICBpZGVudGlmaWVyID0gJydcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgIHF1ZXVlID0gJydcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlkZW50aWZpZXIgPSBjb250ZW50XG4gIH1cblxuICAvLyBCcmFja2V0cyBjYW5ub3QgYmUgaW5zaWRlIHRoZSBpZGVudGlmaWVyLlxuICBpZiAocmVmZXJlbmNlVHlwZSAhPT0gZnVsbCAmJiBicmFja2V0ZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlID0gaW50cm8gKyBzdWJ2YWx1ZVxuXG4gIGlmICh0eXBlID09PSBsaW5rICYmIHNlbGYuaW5MaW5rKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSBpbnRyby5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBpbnRyby5sZW5ndGhcbiAgaWRlbnRpZmllciA9IHJlZmVyZW5jZVR5cGUgPT09IGZ1bGwgPyBpZGVudGlmaWVyIDogY29udGVudFxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogdHlwZSArICdSZWZlcmVuY2UnLFxuICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKSxcbiAgICBsYWJlbDogaWRlbnRpZmllcixcbiAgICByZWZlcmVuY2VUeXBlOiByZWZlcmVuY2VUeXBlXG4gIH1cblxuICBpZiAodHlwZSA9PT0gbGluaykge1xuICAgIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gICAgbm9kZS5jaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICAgIGV4aXQoKVxuICB9IGVsc2Uge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbFxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3N0cm9uZycpXG5cbm1vZHVsZS5leHBvcnRzID0gc3Ryb25nXG5zdHJvbmcubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG5cbmZ1bmN0aW9uIHN0cm9uZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIG5vd1xuICB2YXIgcGVkYW50aWNcbiAgdmFyIG1hcmtlclxuICB2YXIgcXVldWVcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBsZW5ndGhcbiAgdmFyIHByZXZpb3VzXG5cbiAgaWYgKFxuICAgIChjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZSkgfHxcbiAgICB2YWx1ZS5jaGFyQXQoKytpbmRleCkgIT09IGNoYXJhY3RlclxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBzdWJ2YWx1ZSA9IG1hcmtlciArIG1hcmtlclxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgaW5kZXgrK1xuICBxdWV1ZSA9ICcnXG4gIGNoYXJhY3RlciA9ICcnXG5cbiAgaWYgKHBlZGFudGljICYmIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBtYXJrZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBtYXJrZXIgJiZcbiAgICAgICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldmlvdXMpKVxuICAgICkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMilcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGlmICghdHJpbShxdWV1ZSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KClcbiAgICAgICAgbm93LmNvbHVtbiArPSAyXG4gICAgICAgIG5vdy5vZmZzZXQgKz0gMlxuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIHN1YnZhbHVlKSh7XG4gICAgICAgICAgdHlwZTogJ3N0cm9uZycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHZlcnRpY2FsQmFyID0gJ3wnXG5cbnZhciBtaW5Db2x1bW5zID0gMVxudmFyIG1pblJvd3MgPSAyXG5cbnZhciBsZWZ0ID0gJ2xlZnQnXG52YXIgY2VudGVyID0gJ2NlbnRlcidcbnZhciByaWdodCA9ICdyaWdodCdcblxuZnVuY3Rpb24gdGFibGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXhcbiAgdmFyIGFsaWdubWVudHNcbiAgdmFyIGFsaWdubWVudFxuICB2YXIgc3VidmFsdWVcbiAgdmFyIHJvd1xuICB2YXIgbGVuZ3RoXG4gIHZhciBsaW5lc1xuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgaGFzRGFzaFxuICB2YXIgYWxpZ25cbiAgdmFyIGNlbGxcbiAgdmFyIHByZWFtYmxlXG4gIHZhciBub3dcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciBsaW5lQ291bnRcbiAgdmFyIGxpbmVcbiAgdmFyIHJvd3NcbiAgdmFyIHRhYmxlXG4gIHZhciBsaW5lSW5kZXhcbiAgdmFyIHBpcGVJbmRleFxuICB2YXIgZmlyc3RcblxuICAvLyBFeGl0IHdoZW4gbm90IGluIGdmbS1tb2RlLlxuICBpZiAoIXNlbGYub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEdldCB0aGUgcm93cy5cbiAgLy8gRGV0ZWN0aW5nIHRhYmxlcyBzb29uIGlzIGhhcmQsIHNvIHRoZXJlIGFyZSBzb21lIGNoZWNrcyBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gaGVyZSwgc3VjaCBhcyB0aGUgbWluaW11bSBudW1iZXIgb2Ygcm93cywgYW5kIGFsbG93ZWQgY2hhcmFjdGVycyBpbiB0aGVcbiAgLy8gYWxpZ25tZW50IHJvdy5cbiAgaW5kZXggPSAwXG4gIGxpbmVDb3VudCA9IDBcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICBsaW5lcyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbGluZUluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgcGlwZUluZGV4ID0gdmFsdWUuaW5kZXhPZih2ZXJ0aWNhbEJhciwgaW5kZXggKyAxKVxuXG4gICAgaWYgKGxpbmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGxpbmVJbmRleCA9IHZhbHVlLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChwaXBlSW5kZXggPT09IC0xIHx8IHBpcGVJbmRleCA+IGxpbmVJbmRleCkge1xuICAgICAgaWYgKGxpbmVDb3VudCA8IG1pblJvd3MpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGluZXMucHVzaCh2YWx1ZS5zbGljZShpbmRleCwgbGluZUluZGV4KSlcbiAgICBsaW5lQ291bnQrK1xuICAgIGluZGV4ID0gbGluZUluZGV4ICsgMVxuICB9XG5cbiAgLy8gUGFyc2UgdGhlIGFsaWdubWVudCByb3cuXG4gIHN1YnZhbHVlID0gbGluZXMuam9pbihsaW5lRmVlZClcbiAgYWxpZ25tZW50cyA9IGxpbmVzLnNwbGljZSgxLCAxKVswXSB8fCBbXVxuICBpbmRleCA9IDBcbiAgbGVuZ3RoID0gYWxpZ25tZW50cy5sZW5ndGhcbiAgbGluZUNvdW50LS1cbiAgYWxpZ25tZW50ID0gZmFsc2VcbiAgYWxpZ24gPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IGFsaWdubWVudHMuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gdmVydGljYWxCYXIpIHtcbiAgICAgIGhhc0Rhc2ggPSBudWxsXG5cbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24ucHVzaChhbGlnbm1lbnQpXG4gICAgICAgIGFsaWdubWVudCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGZpcnN0ID0gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gZGFzaCkge1xuICAgICAgaGFzRGFzaCA9IHRydWVcbiAgICAgIGFsaWdubWVudCA9IGFsaWdubWVudCB8fCBudWxsXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGNvbG9uKSB7XG4gICAgICBpZiAoYWxpZ25tZW50ID09PSBsZWZ0KSB7XG4gICAgICAgIGFsaWdubWVudCA9IGNlbnRlclxuICAgICAgfSBlbHNlIGlmIChoYXNEYXNoICYmIGFsaWdubWVudCA9PT0gbnVsbCkge1xuICAgICAgICBhbGlnbm1lbnQgPSByaWdodFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ25tZW50ID0gbGVmdFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCAhPT0gZmFsc2UpIHtcbiAgICBhbGlnbi5wdXNoKGFsaWdubWVudClcbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiB3aXRob3V0IGVub3VnaCBjb2x1bW5zLlxuICBpZiAoYWxpZ24ubGVuZ3RoIDwgbWluQ29sdW1ucykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFBhcnNlIHRoZSByb3dzLlxuICBwb3NpdGlvbiA9IC0xXG4gIHJvd3MgPSBbXVxuXG4gIHRhYmxlID0gZWF0KHN1YnZhbHVlKS5yZXNldCh7dHlwZTogJ3RhYmxlJywgYWxpZ246IGFsaWduLCBjaGlsZHJlbjogcm93c30pXG5cbiAgd2hpbGUgKCsrcG9zaXRpb24gPCBsaW5lQ291bnQpIHtcbiAgICBsaW5lID0gbGluZXNbcG9zaXRpb25dXG4gICAgcm93ID0ge3R5cGU6ICd0YWJsZVJvdycsIGNoaWxkcmVuOiBbXX1cblxuICAgIC8vIEVhdCBhIG5ld2xpbmUgY2hhcmFjdGVyIHdoZW4gdGhpcyBpcyBub3QgdGhlIGZpcnN0IHJvdy5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIGVhdChsaW5lRmVlZClcbiAgICB9XG5cbiAgICAvLyBFYXQgdGhlIHJvdy5cbiAgICBlYXQobGluZSkucmVzZXQocm93LCB0YWJsZSlcblxuICAgIGxlbmd0aCA9IGxpbmUubGVuZ3RoICsgMVxuICAgIGluZGV4ID0gMFxuICAgIHF1ZXVlID0gJydcbiAgICBjZWxsID0gJydcbiAgICBwcmVhbWJsZSA9IHRydWVcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gbGluZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWF0KGNoYXJhY3RlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJycgfHwgY2hhcmFjdGVyID09PSB2ZXJ0aWNhbEJhcikge1xuICAgICAgICBpZiAocHJlYW1ibGUpIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgoY2VsbCB8fCBjaGFyYWN0ZXIpICYmICFwcmVhbWJsZSkge1xuICAgICAgICAgICAgc3VidmFsdWUgPSBjZWxsXG5cbiAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZS5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlLmNoYXJBdChxdWV1ZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgICAgICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vdyA9IGVhdC5ub3coKVxuXG4gICAgICAgICAgICBlYXQoc3VidmFsdWUpKFxuICAgICAgICAgICAgICB7dHlwZTogJ3RhYmxlQ2VsbCcsIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNlbGwsIG5vdyl9LFxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlYXQocXVldWUgKyBjaGFyYWN0ZXIpXG5cbiAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgICAgY2VsbCA9ICcnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChxdWV1ZSkge1xuICAgICAgICAgIGNlbGwgKz0gcXVldWVcbiAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBjZWxsICs9IGNoYXJhY3RlclxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCAmJiBpbmRleCAhPT0gbGVuZ3RoIC0gMikge1xuICAgICAgICAgIGNlbGwgKz0gbGluZS5jaGFyQXQoaW5kZXggKyAxKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmVhbWJsZSA9IGZhbHNlXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gRWF0IHRoZSBhbGlnbm1lbnQgcm93LlxuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIGVhdChsaW5lRmVlZCArIGFsaWdubWVudHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhYmxlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbmZ1bmN0aW9uIHRleHQoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbWV0aG9kc1xuICB2YXIgdG9rZW5pemVyc1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgc3VidmFsdWVcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciB0b2tlbml6ZXJcbiAgdmFyIG5hbWVcbiAgdmFyIG1pblxuICB2YXIgbm93XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1ldGhvZHMgPSBzZWxmLmlubGluZU1ldGhvZHNcbiAgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGhcbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICBpbmRleCA9IC0xXG4gIG1pbiA9IHZhbHVlLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdXG5cbiAgICBpZiAobmFtZSA9PT0gJ3RleHQnIHx8ICF0b2tlbml6ZXJzW25hbWVdKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHRva2VuaXplciA9IHRva2VuaXplcnNbbmFtZV0ubG9jYXRvclxuXG4gICAgaWYgKCF0b2tlbml6ZXIpIHtcbiAgICAgIGVhdC5maWxlLmZhaWwoJ01pc3NpbmcgbG9jYXRvcjogYCcgKyBuYW1lICsgJ2AnKVxuICAgIH1cblxuICAgIHBvc2l0aW9uID0gdG9rZW5pemVyLmNhbGwoc2VsZiwgdmFsdWUsIDEpXG5cbiAgICBpZiAocG9zaXRpb24gIT09IC0xICYmIHBvc2l0aW9uIDwgbWluKSB7XG4gICAgICBtaW4gPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgbWluKVxuICBub3cgPSBlYXQubm93KClcblxuICBzZWxmLmRlY29kZShzdWJ2YWx1ZSwgbm93LCBoYW5kbGVyKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZXIoY29udGVudCwgcG9zaXRpb24sIHNvdXJjZSkge1xuICAgIGVhdChzb3VyY2UgfHwgY29udGVudCkoe3R5cGU6ICd0ZXh0JywgdmFsdWU6IGNvbnRlbnR9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY0JyZWFrXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGFzdGVyaXNrID0gJyonXG52YXIgZGFzaCA9ICctJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcblxudmFyIG1heENvdW50ID0gM1xuXG5mdW5jdGlvbiB0aGVtYXRpY0JyZWFrKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIG1hcmtlckNvdW50XG4gIHZhciBxdWV1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICBpZiAoXG4gICAgY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJlxuICAgIGNoYXJhY3RlciAhPT0gZGFzaCAmJlxuICAgIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgbWFya2VyQ291bnQgPSAxXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgbWFya2VyQ291bnQrK1xuICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBtYXJrZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBtYXJrZXJDb3VudCA+PSBtYXhDb3VudCAmJlxuICAgICAgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZClcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlXG5cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICd0aGVtYXRpY0JyZWFrJ30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS91cmwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVybFxudXJsLmxvY2F0b3IgPSBsb2NhdGVcbnVybC5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBleGNsYW1hdGlvbk1hcmsgPSAzMyAvLyAnISdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAnJidcbnZhciByaWdodFBhcmVudGhlc2lzID0gNDEgLy8gJyknXG52YXIgYXN0ZXJpc2sgPSA0MiAvLyAnKidcbnZhciBjb21tYSA9IDQ0IC8vICcsJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciBjb2xvbiA9IDU4IC8vICc6J1xudmFyIHNlbWljb2xvbiA9IDU5IC8vICc7J1xudmFyIHF1ZXN0aW9uTWFyayA9IDYzIC8vICc/J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gJzwnXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xudmFyIHRpbGRlID0gMTI2IC8vICd+J1xuXG52YXIgbGVmdFBhcmVudGhlc2lzQ2hhcmFjdGVyID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlciA9ICcpJ1xuXG5mdW5jdGlvbiB1cmwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBwcmV2aW91c0RvdCA9IC0xXG4gIHZhciBwcm90b2NvbGxlc3MgPSBmYWxzZVxuICB2YXIgZG90c1xuICB2YXIgbGFzdFR3b1BhcnRzU3RhcnRcbiAgdmFyIHN0YXJ0XG4gIHZhciBpbmRleFxuICB2YXIgcGF0aFN0YXJ0XG4gIHZhciBwYXRoXG4gIHZhciBjb2RlXG4gIHZhciBlbmRcbiAgdmFyIGxlZnRDb3VudFxuICB2YXIgcmlnaHRDb3VudFxuICB2YXIgY29udGVudFxuICB2YXIgY2hpbGRyZW5cbiAgdmFyIHVybFxuICB2YXIgZXhpdFxuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBgV1dXLmAgZG9lc27igJl0IHdvcmsuXG4gIGlmICh2YWx1ZS5zbGljZSgwLCA0KSA9PT0gJ3d3dy4nKSB7XG4gICAgcHJvdG9jb2xsZXNzID0gdHJ1ZVxuICAgIGluZGV4ID0gNFxuICB9IGVsc2UgaWYgKHZhbHVlLnNsaWNlKDAsIDcpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwOi8vJykge1xuICAgIGluZGV4ID0gN1xuICB9IGVsc2UgaWYgKHZhbHVlLnNsaWNlKDAsIDgpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwczovLycpIHtcbiAgICBpbmRleCA9IDhcbiAgfSBlbHNlIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEFjdCBhcyBpZiB0aGUgc3RhcnRpbmcgYm91bmRhcnkgaXMgYSBkb3QuXG4gIHByZXZpb3VzRG90ID0gaW5kZXggLSAxXG5cbiAgLy8gUGFyc2UgYSB2YWxpZCBkb21haW4uXG4gIHN0YXJ0ID0gaW5kZXhcbiAgZG90cyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgICAvLyBEb3RzIG1heSBub3QgYXBwZWFyIGFmdGVyIGVhY2ggb3RoZXIuXG4gICAgICBpZiAocHJldmlvdXNEb3QgPT09IGluZGV4IC0gMSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkb3RzLnB1c2goaW5kZXgpXG4gICAgICBwcmV2aW91c0RvdCA9IGluZGV4XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgICAgY29kZSA9PT0gZGFzaCB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICAgICkge1xuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBicmVha1xuICB9XG5cbiAgLy8gSWdub3JlIGEgZmluYWwgZG90OlxuICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgZG90cy5wb3AoKVxuICAgIGluZGV4LS1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBub3QgZG90cywgZXhpdC5cbiAgaWYgKGRvdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgdGhlcmUgaXMgYW4gdW5kZXJzY29yZSBpbiB0aGUgbGFzdCB0d28gZG9tYWluIHBhcnRzLCBleGl0OlxuICAvLyBgd3d3LmV4YW1wbGUuY19tYCBhbmQgYHd3dy5leF9hbXBsZS5jb21gIGFyZSBub3QgT0ssIGJ1dFxuICAvLyBgd3d3LnN1Yl9kb21haW4uZXhhbXBsZS5jb21gIGlzLlxuICBsYXN0VHdvUGFydHNTdGFydCA9IGRvdHMubGVuZ3RoIDwgMiA/IHN0YXJ0IDogZG90c1tkb3RzLmxlbmd0aCAtIDJdICsgMVxuXG4gIGlmICh2YWx1ZS5zbGljZShsYXN0VHdvUGFydHNTdGFydCwgaW5kZXgpLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBlbmQgPSBpbmRleFxuICBwYXRoU3RhcnQgPSBpbmRleFxuXG4gIC8vIFBhcnNlIGEgcGF0aC5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAod2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBsZXNzVGhhbikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBleGNsYW1hdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IGFzdGVyaXNrIHx8XG4gICAgICBjb2RlID09PSBjb21tYSB8fFxuICAgICAgY29kZSA9PT0gZG90IHx8XG4gICAgICBjb2RlID09PSBjb2xvbiB8fFxuICAgICAgY29kZSA9PT0gcXVlc3Rpb25NYXJrIHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlIHx8XG4gICAgICBjb2RlID09PSB0aWxkZVxuICAgICkge1xuICAgICAgLy8gRW1wdHlcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IGVuZFxuXG4gIC8vIElmIHRoZSBwYXRoIGVuZHMgaW4gYSBjbG9zaW5nIHBhcmVuLCBhbmQgdGhlIGNvdW50IG9mIGNsb3NpbmcgcGFyZW5zIGlzXG4gIC8vIGhpZ2hlciB0aGFuIHRoZSBvcGVuaW5nIGNvdW50LCB0aGVuIHJlbW92ZSB0aGUgc3VwZWZsdW91cyBjbG9zaW5nIHBhcmVucy5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgIHBhdGggPSB2YWx1ZS5zbGljZShwYXRoU3RhcnQsIGluZGV4KVxuICAgIGxlZnRDb3VudCA9IGNjb3VudChwYXRoLCBsZWZ0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG4gICAgcmlnaHRDb3VudCA9IGNjb3VudChwYXRoLCByaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuXG4gICAgd2hpbGUgKHJpZ2h0Q291bnQgPiBsZWZ0Q291bnQpIHtcbiAgICAgIGluZGV4ID0gcGF0aFN0YXJ0ICsgcGF0aC5sYXN0SW5kZXhPZihyaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuICAgICAgcGF0aCA9IHZhbHVlLnNsaWNlKHBhdGhTdGFydCwgaW5kZXgpXG4gICAgICByaWdodENvdW50LS1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpID09PSBzZW1pY29sb24pIHtcbiAgICAvLyBHaXRIdWIgZG9lc27igJl0IGRvY3VtZW50IHRoaXMsIGJ1dCBmaW5hbCBzZW1pY29sb25zIGFyZW7igJl0IHBhcmV0IG9mIHRoZVxuICAgIC8vIFVSTCBlaXRoZXIuXG4gICAgaW5kZXgtLVxuXG4gICAgLy8gLy8gSWYgdGhlIHBhdGggZW5kcyBpbiB3aGF0IGxvb2tzIGxpa2UgYW4gZW50aXR5LCBpdOKAmXMgbm90IHBhcnQgb2YgdGhlIHBhdGguXG4gICAgaWYgKGFscGhhYmV0aWNhbCh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkpKSB7XG4gICAgICBlbmQgPSBpbmRleCAtIDJcblxuICAgICAgd2hpbGUgKGFscGhhYmV0aWNhbCh2YWx1ZS5jaGFyQ29kZUF0KGVuZCkpKSB7XG4gICAgICAgIGVuZC0tXG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGVuZCkgPT09IGFtcGVyc2FuZCkge1xuICAgICAgICBpbmRleCA9IGVuZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcbiAgdXJsID0gZGVjb2RlKGNvbnRlbnQsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pXG5cbiAgaWYgKHByb3RvY29sbGVzcykge1xuICAgIHVybCA9ICdodHRwOi8vJyArIHVybFxuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gdXJsLlxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuICBjaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKVxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChjb250ZW50KSh7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiB1cmwsIGNoaWxkcmVuOiBjaGlsZHJlbn0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIENvbnN0cnVjdCBhIHRva2VuaXplci4gIFRoaXMgY3JlYXRlcyBib3RoIGB0b2tlbml6ZUlubGluZWAgYW5kIGB0b2tlbml6ZUJsb2NrYC5cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICByZXR1cm4gdG9rZW5pemVcblxuICAvLyBUb2tlbml6ZXIgZm9yIGEgYm91bmQgYHR5cGVgLlxuICBmdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgb2Zmc2V0ID0gc2VsZi5vZmZzZXRcbiAgICB2YXIgdG9rZW5zID0gW11cbiAgICB2YXIgbWV0aG9kcyA9IHNlbGZbdHlwZSArICdNZXRob2RzJ11cbiAgICB2YXIgdG9rZW5pemVycyA9IHNlbGZbdHlwZSArICdUb2tlbml6ZXJzJ11cbiAgICB2YXIgbGluZSA9IGxvY2F0aW9uLmxpbmVcbiAgICB2YXIgY29sdW1uID0gbG9jYXRpb24uY29sdW1uXG4gICAgdmFyIGluZGV4XG4gICAgdmFyIGxlbmd0aFxuICAgIHZhciBtZXRob2RcbiAgICB2YXIgbmFtZVxuICAgIHZhciBtYXRjaGVkXG4gICAgdmFyIHZhbHVlTGVuZ3RoXG5cbiAgICAvLyBUcmltIHdoaXRlIHNwYWNlIG9ubHkgbGluZXMuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRva2Vuc1xuICAgIH1cblxuICAgIC8vIEV4cG9zZSBvbiBgZWF0YC5cbiAgICBlYXQubm93ID0gbm93XG4gICAgZWF0LmZpbGUgPSBzZWxmLmZpbGVcblxuICAgIC8vIFN5bmMgaW5pdGlhbCBvZmZzZXQuXG4gICAgdXBkYXRlUG9zaXRpb24oJycpXG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYHZhbHVlYCwgYW5kIGl0ZXJhdGUgb3ZlciBhbGwgdG9rZW5pemVycy4gIFdoZW4gb25lIGVhdHNcbiAgICAvLyBzb21ldGhpbmcsIHJlLWl0ZXJhdGUgd2l0aCB0aGUgcmVtYWluaW5nIHZhbHVlLiAgSWYgbm8gdG9rZW5pemVyIGVhdHMsXG4gICAgLy8gc29tZXRoaW5nIGZhaWxlZCAoc2hvdWxkIG5vdCBoYXBwZW4pIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgIHdoaWxlICh2YWx1ZSkge1xuICAgICAgaW5kZXggPSAtMVxuICAgICAgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGhcbiAgICAgIG1hdGNoZWQgPSBmYWxzZVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBuYW1lID0gbWV0aG9kc1tpbmRleF1cbiAgICAgICAgbWV0aG9kID0gdG9rZW5pemVyc1tuYW1lXVxuXG4gICAgICAgIC8vIFByZXZpb3VzbHksIHdlIGhhZCBjb25zdHJ1Y3RzIHN1Y2ggYXMgZm9vdG5vdGVzIGFuZCBZQU1MIHRoYXQgdXNlZFxuICAgICAgICAvLyB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAgICAvLyBUaG9zZSBhcmUgbm93IGV4dGVybmFsIChwbHVzIHRoZXJlIGFyZSB1c2VybGFuZCBleHRlbnNpb25zKSwgdGhhdCBtYXlcbiAgICAgICAgLy8gc3RpbGwgdXNlIHRoZW0uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtZXRob2QgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5vbmx5QXRTdGFydCB8fCBzZWxmLmF0U3RhcnQpICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qubm90SW5MaXN0IHx8ICFzZWxmLmluTGlzdCkgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5ub3RJbkJsb2NrIHx8ICFzZWxmLmluQmxvY2spICYmXG4gICAgICAgICAgKCFtZXRob2Qubm90SW5MaW5rIHx8ICFzZWxmLmluTGluaylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgICAgICAgIG1ldGhvZC5hcHBseShzZWxmLCBbZWF0LCB2YWx1ZV0pXG5cbiAgICAgICAgICBtYXRjaGVkID0gdmFsdWVMZW5ndGggIT09IHZhbHVlLmxlbmd0aFxuXG4gICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgIHNlbGYuZmlsZS5mYWlsKG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCcpLCBlYXQubm93KCkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5lb2YgPSBub3coKVxuXG4gICAgcmV0dXJuIHRva2Vuc1xuXG4gICAgLy8gVXBkYXRlIGxpbmUsIGNvbHVtbiwgYW5kIG9mZnNldCBiYXNlZCBvbiBgdmFsdWVgLlxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN1YnZhbHVlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gLTFcbiAgICAgIHZhciBpbmRleCA9IHN1YnZhbHVlLmluZGV4T2YoJ1xcbicpXG5cbiAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxhc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGluZGV4ID0gc3VidmFsdWUuaW5kZXhPZignXFxuJywgaW5kZXggKyAxKVxuICAgICAgfVxuXG4gICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICBjb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gPSBzdWJ2YWx1ZS5sZW5ndGggLSBsYXN0SW5kZXhcbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmUgaW4gb2Zmc2V0KSB7XG4gICAgICAgIGlmIChsYXN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29sdW1uICs9IG9mZnNldFtsaW5lXVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA8PSBvZmZzZXRbbGluZV0pIHtcbiAgICAgICAgICBjb2x1bW4gPSBvZmZzZXRbbGluZV0gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgb2Zmc2V0LiAgQ2FsbGVkIGJlZm9yZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIGVhdGVuIHRvIHJldHJpZXZlIHRoZVxuICAgIC8vIHJhbmdl4oCZcyBvZmZzZXRzLlxuICAgIGZ1bmN0aW9uIGdldE9mZnNldCgpIHtcbiAgICAgIHZhciBpbmRlbnRhdGlvbiA9IFtdXG4gICAgICB2YXIgcG9zID0gbGluZSArIDFcblxuICAgICAgLy8gRG9uZS4gIENhbGxlZCB3aGVuIHRoZSBsYXN0IGNoYXJhY3RlciBpcyBlYXRlbiB0byByZXRyaWV2ZSB0aGUgcmFuZ2XigJlzXG4gICAgICAvLyBvZmZzZXRzLlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhc3QgPSBsaW5lICsgMVxuXG4gICAgICAgIHdoaWxlIChwb3MgPCBsYXN0KSB7XG4gICAgICAgICAgaW5kZW50YXRpb24ucHVzaCgob2Zmc2V0W3Bvc10gfHwgMCkgKyAxKVxuXG4gICAgICAgICAgcG9zKytcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRlbnRhdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICBmdW5jdGlvbiBub3coKSB7XG4gICAgICB2YXIgcG9zID0ge2xpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1ufVxuXG4gICAgICBwb3Mub2Zmc2V0ID0gc2VsZi50b09mZnNldChwb3MpXG5cbiAgICAgIHJldHVybiBwb3NcbiAgICB9XG5cbiAgICAvLyBTdG9yZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBub2RlLlxuICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgICAgIHRoaXMuZW5kID0gbm93KClcbiAgICB9XG5cbiAgICAvLyBUaHJvdyB3aGVuIGEgdmFsdWUgaXMgaW5jb3JyZWN0bHkgZWF0ZW4uICBUaGlzIHNob3VsZG7igJl0IGhhcHBlbiBidXQgd2lsbFxuICAgIC8vIHRocm93IG9uIG5ldywgaW5jb3JyZWN0IHJ1bGVzLlxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRWF0KHN1YnZhbHVlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh2YWx1ZS5zbGljZSgwLCBzdWJ2YWx1ZS5sZW5ndGgpICE9PSBzdWJ2YWx1ZSkge1xuICAgICAgICAvLyBDYXB0dXJlIHN0YWNrLXRyYWNlLlxuICAgICAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnSW5jb3JyZWN0bHkgZWF0ZW4gdmFsdWU6IHBsZWFzZSByZXBvcnQgdGhpcyB3YXJuaW5nIG9uIGh0dHBzOi8vZ2l0LmlvL3ZnNUZ0J1xuICAgICAgICAgICksXG4gICAgICAgICAgbm93KClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgcG9zaXRpb24gYW5kIHBhdGNoIGBub2RlLnBvc2l0aW9uYC5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgIHZhciBiZWZvcmUgPSBub3coKVxuXG4gICAgICByZXR1cm4gdXBkYXRlXG5cbiAgICAgIC8vIEFkZCB0aGUgcG9zaXRpb24gdG8gYSBub2RlLlxuICAgICAgZnVuY3Rpb24gdXBkYXRlKG5vZGUsIGluZGVudCkge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBub2RlLnBvc2l0aW9uXG4gICAgICAgIHZhciBzdGFydCA9IHByZXZpb3VzID8gcHJldmlvdXMuc3RhcnQgOiBiZWZvcmVcbiAgICAgICAgdmFyIGNvbWJpbmVkID0gW11cbiAgICAgICAgdmFyIG4gPSBwcmV2aW91cyAmJiBwcmV2aW91cy5lbmQubGluZVxuICAgICAgICB2YXIgbCA9IGJlZm9yZS5saW5lXG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydClcblxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYWxyZWFkeSBhIGBwb3NpdGlvbmAsIHRoaXMgbm9kZSB3YXMgbWVyZ2VkLiAgRml4aW5nXG4gICAgICAgIC8vIGBzdGFydGAgd2FzbuKAmXQgaGFyZCwgYnV0IHRoZSBpbmRlbnQgaXMgZGlmZmVyZW50LiAgRXNwZWNpYWxseVxuICAgICAgICAvLyBiZWNhdXNlIHNvbWUgaW5mb3JtYXRpb24sIHRoZSBpbmRlbnQgYmV0d2VlbiBgbmAgYW5kIGBsYCB3YXNu4oCZdFxuICAgICAgICAvLyB0cmFja2VkLiAgTHVja2lseSwgdGhhdCBzcGFjZSBpcyAoc2hvdWxkIGJlPykgZW1wdHksIHNvIHdlIGNhblxuICAgICAgICAvLyBzYWZlbHkgY2hlY2sgZm9yIGl0IG5vdy5cbiAgICAgICAgaWYgKHByZXZpb3VzICYmIGluZGVudCAmJiBwcmV2aW91cy5pbmRlbnQpIHtcbiAgICAgICAgICBjb21iaW5lZCA9IHByZXZpb3VzLmluZGVudFxuXG4gICAgICAgICAgaWYgKG4gPCBsKSB7XG4gICAgICAgICAgICB3aGlsZSAoKytuIDwgbCkge1xuICAgICAgICAgICAgICBjb21iaW5lZC5wdXNoKChvZmZzZXRbbl0gfHwgMCkgKyAxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21iaW5lZC5wdXNoKGJlZm9yZS5jb2x1bW4pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZW50ID0gY29tYmluZWQuY29uY2F0KGluZGVudClcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucG9zaXRpb24uaW5kZW50ID0gaW5kZW50IHx8IFtdXG5cbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYG5vZGVgIHRvIGBwYXJlbnRgcyBjaGlsZHJlbiBvciB0byBgdG9rZW5zYC4gIFBlcmZvcm1zIG1lcmdlcyB3aGVyZVxuICAgIC8vIHBvc3NpYmxlLlxuICAgIGZ1bmN0aW9uIGFkZChub2RlLCBwYXJlbnQpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IHRva2Vuc1xuICAgICAgdmFyIHByZXZpb3VzID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgIHZhciBmblxuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzICYmXG4gICAgICAgIG5vZGUudHlwZSA9PT0gcHJldmlvdXMudHlwZSAmJlxuICAgICAgICAobm9kZS50eXBlID09PSAndGV4dCcgfHwgbm9kZS50eXBlID09PSAnYmxvY2txdW90ZScpICYmXG4gICAgICAgIG1lcmdlYWJsZShwcmV2aW91cykgJiZcbiAgICAgICAgbWVyZ2VhYmxlKG5vZGUpXG4gICAgICApIHtcbiAgICAgICAgZm4gPSBub2RlLnR5cGUgPT09ICd0ZXh0JyA/IG1lcmdlVGV4dCA6IG1lcmdlQmxvY2txdW90ZVxuICAgICAgICBub2RlID0gZm4uY2FsbChzZWxmLCBwcmV2aW91cywgbm9kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgIT09IHByZXZpb3VzKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuYXRTdGFydCAmJiB0b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHNlbGYuZXhpdFN0YXJ0KClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYHN1YnZhbHVlYCBmcm9tIGB2YWx1ZWAuICBgc3VidmFsdWVgIG11c3QgYmUgYXQgdGhlIHN0YXJ0IG9mXG4gICAgLy8gYHZhbHVlYC5cbiAgICBmdW5jdGlvbiBlYXQoc3VidmFsdWUpIHtcbiAgICAgIHZhciBpbmRlbnQgPSBnZXRPZmZzZXQoKVxuICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKClcbiAgICAgIHZhciBjdXJyZW50ID0gbm93KClcblxuICAgICAgdmFsaWRhdGVFYXQoc3VidmFsdWUpXG5cbiAgICAgIGFwcGx5LnJlc2V0ID0gcmVzZXRcbiAgICAgIHJlc2V0LnRlc3QgPSB0ZXN0XG4gICAgICBhcHBseS50ZXN0ID0gdGVzdFxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKHN1YnZhbHVlLmxlbmd0aClcblxuICAgICAgdXBkYXRlUG9zaXRpb24oc3VidmFsdWUpXG5cbiAgICAgIGluZGVudCA9IGluZGVudCgpXG5cbiAgICAgIHJldHVybiBhcHBseVxuXG4gICAgICAvLyBBZGQgdGhlIGdpdmVuIGFyZ3VtZW50cywgYWRkIGBwb3NpdGlvbmAgdG8gdGhlIHJldHVybmVkIG5vZGUsIGFuZFxuICAgICAgLy8gcmV0dXJuIHRoZSBub2RlLlxuICAgICAgZnVuY3Rpb24gYXBwbHkobm9kZSwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwb3MoYWRkKHBvcyhub2RlKSwgcGFyZW50KSwgaW5kZW50KVxuICAgICAgfVxuXG4gICAgICAvLyBGdW5jdGlvbnMganVzdCBsaWtlIGFwcGx5LCBidXQgcmVzZXRzIHRoZSBjb250ZW50OiB0aGUgbGluZSBhbmRcbiAgICAgIC8vIGNvbHVtbiBhcmUgcmV2ZXJzZWQsIGFuZCB0aGUgZWF0ZW4gdmFsdWUgaXMgcmUtYWRkZWQuICAgVGhpcyBpc1xuICAgICAgLy8gdXNlZnVsIGZvciBub2RlcyB3aXRoIGEgc2luZ2xlIHR5cGUgb2YgY29udGVudCwgc3VjaCBhcyBsaXN0cyBhbmRcbiAgICAgIC8vIHRhYmxlcy4gIFNlZSBgYXBwbHlgIGFib3ZlIGZvciB3aGF0IHBhcmFtZXRlcnMgYXJlIGV4cGVjdGVkLlxuICAgICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHZhciBub2RlID0gYXBwbHkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmVcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW5cbiAgICAgICAgdmFsdWUgPSBzdWJ2YWx1ZSArIHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH1cblxuICAgICAgLy8gVGVzdCB0aGUgcG9zaXRpb24sIGFmdGVyIGVhdGluZywgYW5kIHJldmVyc2UgdG8gYSBub3QtZWF0ZW4gc3RhdGUuXG4gICAgICBmdW5jdGlvbiB0ZXN0KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcG9zKHt9KVxuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmVcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW5cbiAgICAgICAgdmFsdWUgPSBzdWJ2YWx1ZSArIHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5wb3NpdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBtZXJnZWFibGUgd2l0aCBhZGphY2VudCBub2Rlcy5cbmZ1bmN0aW9uIG1lcmdlYWJsZShub2RlKSB7XG4gIHZhciBzdGFydFxuICB2YXIgZW5kXG5cbiAgaWYgKG5vZGUudHlwZSAhPT0gJ3RleHQnIHx8ICFub2RlLnBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN0YXJ0ID0gbm9kZS5wb3NpdGlvbi5zdGFydFxuICBlbmQgPSBub2RlLnBvc2l0aW9uLmVuZFxuXG4gIC8vIE9ubHkgbWVyZ2Ugbm9kZXMgd2hpY2ggb2NjdXB5IHRoZSBzYW1lIHNpemUgYXMgdGhlaXIgYHZhbHVlYC5cbiAgcmV0dXJuIChcbiAgICBzdGFydC5saW5lICE9PSBlbmQubGluZSB8fCBlbmQuY29sdW1uIC0gc3RhcnQuY29sdW1uID09PSBub2RlLnZhbHVlLmxlbmd0aFxuICApXG59XG5cbi8vIE1lcmdlIHR3byB0ZXh0IG5vZGVzOiBgbm9kZWAgaW50byBgcHJldmAuXG5mdW5jdGlvbiBtZXJnZVRleHQocHJldmlvdXMsIG5vZGUpIHtcbiAgcHJldmlvdXMudmFsdWUgKz0gbm9kZS52YWx1ZVxuXG4gIHJldHVybiBwcmV2aW91c1xufVxuXG4vLyBNZXJnZSB0d28gYmxvY2txdW90ZXM6IGBub2RlYCBpbnRvIGBwcmV2YCwgdW5sZXNzIGluIENvbW1vbk1hcmsgb3IgZ2ZtIG1vZGVzLlxuZnVuY3Rpb24gbWVyZ2VCbG9ja3F1b3RlKHByZXZpb3VzLCBub2RlKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuY29tbW9ubWFyayB8fCB0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHByZXZpb3VzLmNoaWxkcmVuID0gcHJldmlvdXMuY2hpbGRyZW4uY29uY2F0KG5vZGUuY2hpbGRyZW4pXG5cbiAgcmV0dXJuIHByZXZpb3VzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuLy8gRmFjdG9yeSB0byBkZS1lc2NhcGUgYSB2YWx1ZSwgYmFzZWQgb24gYSBsaXN0IGF0IGBrZXlgIGluIGBjdHhgLlxuZnVuY3Rpb24gZmFjdG9yeShjdHgsIGtleSkge1xuICByZXR1cm4gdW5lc2NhcGVcblxuICAvLyBEZS1lc2NhcGUgYSBzdHJpbmcgdXNpbmcgdGhlIGV4cHJlc3Npb24gYXQgYGtleWAgaW4gYGN0eGAuXG4gIGZ1bmN0aW9uIHVuZXNjYXBlKHZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzID0gMFxuICAgIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoYmFja3NsYXNoKVxuICAgIHZhciBlc2NhcGUgPSBjdHhba2V5XVxuICAgIHZhciBxdWV1ZSA9IFtdXG4gICAgdmFyIGNoYXJhY3RlclxuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwcmV2aW91cywgaW5kZXgpKVxuICAgICAgcHJldmlvdXMgPSBpbmRleCArIDFcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwcmV2aW91cylcblxuICAgICAgLy8gSWYgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXIgaXMgbm90IGEgdmFsaWQgZXNjYXBlLCBhZGQgdGhlIHNsYXNoLlxuICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgZXNjYXBlLmluZGV4T2YoY2hhcmFjdGVyKSA9PT0gLTEpIHtcbiAgICAgICAgcXVldWUucHVzaChiYWNrc2xhc2gpXG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihiYWNrc2xhc2gsIHByZXZpb3VzICsgMSlcbiAgICB9XG5cbiAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXZpb3VzKSlcblxuICAgIHJldHVybiBxdWV1ZS5qb2luKCcnKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRhdGlvblxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgc3BhY2VTaXplID0gMVxudmFyIHRhYlNpemUgPSA0XG5cbi8vIEdldHMgaW5kZW50YXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbGluZS5cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGluZGVudCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIHN0b3BzID0ge31cbiAgdmFyIHNpemVcblxuICB3aGlsZSAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgIHNpemUgPSBjaGFyYWN0ZXIgPT09IHRhYiA/IHRhYlNpemUgOiBzcGFjZVNpemVcblxuICAgIGluZGVudCArPSBzaXplXG5cbiAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgIGluZGVudCA9IE1hdGguZmxvb3IoaW5kZW50IC8gc2l6ZSkgKiBzaXplXG4gICAgfVxuXG4gICAgc3RvcHNbaW5kZW50XSA9IGluZGV4XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICByZXR1cm4ge2luZGVudDogaW5kZW50LCBzdG9wczogc3RvcHN9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGF0dHJpYnV0ZU5hbWUgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonXG52YXIgdW5xdW90ZWQgPSAnW15cIlxcJz08PmBcXFxcdTAwMDAtXFxcXHUwMDIwXSsnXG52YXIgc2luZ2xlUXVvdGVkID0gXCInW14nXSonXCJcbnZhciBkb3VibGVRdW90ZWQgPSAnXCJbXlwiXSpcIidcbnZhciBhdHRyaWJ1dGVWYWx1ZSA9XG4gICcoPzonICsgdW5xdW90ZWQgKyAnfCcgKyBzaW5nbGVRdW90ZWQgKyAnfCcgKyBkb3VibGVRdW90ZWQgKyAnKSdcbnZhciBhdHRyaWJ1dGUgPVxuICAnKD86XFxcXHMrJyArIGF0dHJpYnV0ZU5hbWUgKyAnKD86XFxcXHMqPVxcXFxzKicgKyBhdHRyaWJ1dGVWYWx1ZSArICcpPyknXG52YXIgb3BlblRhZyA9ICc8W0EtWmEtel1bQS1aYS16MC05XFxcXC1dKicgKyBhdHRyaWJ1dGUgKyAnKlxcXFxzKlxcXFwvPz4nXG52YXIgY2xvc2VUYWcgPSAnPFxcXFwvW0EtWmEtel1bQS1aYS16MC05XFxcXC1dKlxcXFxzKj4nXG52YXIgY29tbWVudCA9ICc8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+J1xudmFyIHByb2Nlc3NpbmcgPSAnPFs/XS4qP1s/XT4nXG52YXIgZGVjbGFyYXRpb24gPSAnPCFbQS1aYS16XStcXFxccytbXj5dKj4nXG52YXIgY2RhdGEgPSAnPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+J1xuXG5leHBvcnRzLm9wZW5DbG9zZVRhZyA9IG5ldyBSZWdFeHAoJ14oPzonICsgb3BlblRhZyArICd8JyArIGNsb3NlVGFnICsgJyknKVxuXG5leHBvcnRzLnRhZyA9IG5ldyBSZWdFeHAoXG4gICdeKD86JyArXG4gICAgb3BlblRhZyArXG4gICAgJ3wnICtcbiAgICBjbG9zZVRhZyArXG4gICAgJ3wnICtcbiAgICBjb21tZW50ICtcbiAgICAnfCcgK1xuICAgIHByb2Nlc3NpbmcgK1xuICAgICd8JyArXG4gICAgZGVjbGFyYXRpb24gK1xuICAgICd8JyArXG4gICAgY2RhdGEgK1xuICAgICcpJ1xuKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJydXB0XG5cbmZ1bmN0aW9uIGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIGN0eCwgcGFyYW1ldGVycykge1xuICB2YXIgbGVuZ3RoID0gaW50ZXJydXB0b3JzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW50ZXJydXB0b3JcbiAgdmFyIGNvbmZpZ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaW50ZXJydXB0b3IgPSBpbnRlcnJ1cHRvcnNbaW5kZXhdXG4gICAgY29uZmlnID0gaW50ZXJydXB0b3JbMV0gfHwge31cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5wZWRhbnRpYyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBjb25maWcucGVkYW50aWMgIT09IGN0eC5vcHRpb25zLnBlZGFudGljXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5jb21tb25tYXJrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbmZpZy5jb21tb25tYXJrICE9PSBjdHgub3B0aW9ucy5jb21tb25tYXJrXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0b2tlbml6ZXJzW2ludGVycnVwdG9yWzBdXS5hcHBseShjdHgsIHBhcmFtZXRlcnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb2xsYXBzZVdoaXRlU3BhY2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbi8vIE5vcm1hbGl6ZSBhbiBpZGVudGlmaWVyLiAgQ29sbGFwc2VzIG11bHRpcGxlIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgaW50byBhXG4vLyBzaW5nbGUgc3BhY2UsIGFuZCByZW1vdmVzIGNhc2luZy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gY29sbGFwc2VXaGl0ZVNwYWNlKHZhbHVlKS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBnZXRJbmRlbnQgPSByZXF1aXJlKCcuL2dldC1pbmRlbnRhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb25cblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG5cbi8vIFJlbW92ZSB0aGUgbWluaW11bSBpbmRlbnQgZnJvbSBldmVyeSBsaW5lIGluIGB2YWx1ZWAuICBTdXBwb3J0cyBib3RoIHRhYixcbi8vIHNwYWNlZCwgYW5kIG1peGVkIGluZGVudGF0aW9uIChhcyB3ZWxsIGFzIHBvc3NpYmxlKS5cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlLCBtYXhpbXVtKSB7XG4gIHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChsaW5lRmVlZClcbiAgdmFyIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aCArIDFcbiAgdmFyIG1pbkluZGVudCA9IEluZmluaXR5XG4gIHZhciBtYXRyaXggPSBbXVxuICB2YXIgaW5kZXhcbiAgdmFyIGluZGVudGF0aW9uXG4gIHZhciBzdG9wc1xuICB2YXIgcGFkZGluZ1xuXG4gIHZhbHVlcy51bnNoaWZ0KHJlcGVhdChzcGFjZSwgbWF4aW11bSkgKyBleGNsYW1hdGlvbk1hcmspXG5cbiAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICBpbmRlbnRhdGlvbiA9IGdldEluZGVudCh2YWx1ZXNbcG9zaXRpb25dKVxuXG4gICAgbWF0cml4W3Bvc2l0aW9uXSA9IGluZGVudGF0aW9uLnN0b3BzXG5cbiAgICBpZiAodHJpbSh2YWx1ZXNbcG9zaXRpb25dKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGluZGVudGF0aW9uLmluZGVudCkge1xuICAgICAgaWYgKGluZGVudGF0aW9uLmluZGVudCA+IDAgJiYgaW5kZW50YXRpb24uaW5kZW50IDwgbWluSW5kZW50KSB7XG4gICAgICAgIG1pbkluZGVudCA9IGluZGVudGF0aW9uLmluZGVudFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtaW5JbmRlbnQgPSBJbmZpbml0eVxuXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5JbmRlbnQgIT09IEluZmluaXR5KSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoXG5cbiAgICB3aGlsZSAocG9zaXRpb24tLSkge1xuICAgICAgc3RvcHMgPSBtYXRyaXhbcG9zaXRpb25dXG4gICAgICBpbmRleCA9IG1pbkluZGVudFxuXG4gICAgICB3aGlsZSAoaW5kZXggJiYgIShpbmRleCBpbiBzdG9wcykpIHtcbiAgICAgICAgaW5kZXgtLVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRyaW0odmFsdWVzW3Bvc2l0aW9uXSkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIG1pbkluZGVudCAmJlxuICAgICAgICBpbmRleCAhPT0gbWluSW5kZW50XG4gICAgICApIHtcbiAgICAgICAgcGFkZGluZyA9IHRhYlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFkZGluZyA9ICcnXG4gICAgICB9XG5cbiAgICAgIHZhbHVlc1twb3NpdGlvbl0gPVxuICAgICAgICBwYWRkaW5nICsgdmFsdWVzW3Bvc2l0aW9uXS5zbGljZShpbmRleCBpbiBzdG9wcyA/IHN0b3BzW2luZGV4XSArIDEgOiAwKVxuICAgIH1cbiAgfVxuXG4gIHZhbHVlcy5zaGlmdCgpXG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKGxpbmVGZWVkKVxufVxuIiwiLyohXG4gKiByZXBlYXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9yZXBlYXQtc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVzdWx0cyBjYWNoZVxuICovXG5cbnZhciByZXMgPSAnJztcbnZhciBjYWNoZTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcGVhdGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGVhdDtcblxuLyoqXG4gKiBSZXBlYXQgdGhlIGdpdmVuIGBzdHJpbmdgIHRoZSBzcGVjaWZpZWQgYG51bWJlcmBcbiAqIG9mIHRpbWVzLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuICogcmVwZWF0KCdBJywgNSk7XG4gKiAvLz0+IEFBQUFBXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmluZ2AgVGhlIHN0cmluZyB0byByZXBlYXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbnVtYmVyYCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcGVhdGVkIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBudW0pIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIC8vIGNvdmVyIGNvbW1vbiwgcXVpY2sgdXNlIGNhc2VzXG4gIGlmIChudW0gPT09IDEpIHJldHVybiBzdHI7XG4gIGlmIChudW0gPT09IDIpIHJldHVybiBzdHIgKyBzdHI7XG5cbiAgdmFyIG1heCA9IHN0ci5sZW5ndGggKiBudW07XG4gIGlmIChjYWNoZSAhPT0gc3RyIHx8IHR5cGVvZiBjYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWNoZSA9IHN0cjtcbiAgICByZXMgPSAnJztcbiAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID49IG1heCkge1xuICAgIHJldHVybiByZXMuc3Vic3RyKDAsIG1heCk7XG4gIH1cblxuICB3aGlsZSAobWF4ID4gcmVzLmxlbmd0aCAmJiBudW0gPiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgfVxuXG4gICAgbnVtID4+PSAxO1xuICAgIHN0ciArPSBzdHI7XG4gIH1cblxuICByZXMgKz0gc3RyO1xuICByZXMgPSByZXMuc3Vic3RyKDAsIG1heCk7XG4gIHJldHVybiByZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5mdW5jdGlvbiByZXBsYWNlRXh0KG5wYXRoLCBleHQpIHtcbiAgaWYgKHR5cGVvZiBucGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICBpZiAobnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgdmFyIG5GaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUobnBhdGgsIHBhdGguZXh0bmFtZShucGF0aCkpICsgZXh0O1xuICByZXR1cm4gcGF0aC5qb2luKHBhdGguZGlybmFtZShucGF0aCksIG5GaWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVwbGFjZUV4dDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gQ29uc3RydWN0IGEgc3RhdGUgYHRvZ2dsZXJgOiBhIGZ1bmN0aW9uIHdoaWNoIGludmVyc2VzIGBwcm9wZXJ0eWAgaW4gY29udGV4dFxuLy8gYmFzZWQgb24gaXRzIGN1cnJlbnQgdmFsdWUuXG4vLyBUaGUgYnkgYHRvZ2dsZXJgIHJldHVybmVkIGZ1bmN0aW9uIHJlc3RvcmVzIHRoYXQgdmFsdWUuXG5mdW5jdGlvbiBmYWN0b3J5KGtleSwgc3RhdGUsIGN0eCkge1xuICByZXR1cm4gZW50ZXJcblxuICBmdW5jdGlvbiBlbnRlcigpIHtcbiAgICB2YXIgY29udGV4dCA9IGN0eCB8fCB0aGlzXG4gICAgdmFyIGN1cnJlbnQgPSBjb250ZXh0W2tleV1cblxuICAgIGNvbnRleHRba2V5XSA9ICFzdGF0ZVxuXG4gICAgcmV0dXJuIGV4aXRcblxuICAgIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgICBjb250ZXh0W2tleV0gPSBjdXJyZW50XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWh0bWw0JylcbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBoZXhhZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWhleGFkZWNpbWFsJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGFuZ2Vyb3VzID0gcmVxdWlyZSgnLi9kYW5nZXJvdXMuanNvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlXG5lbmNvZGUuZXNjYXBlID0gZXNjYXBlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBDaGFyYWN0ZXJzXG52YXIgZXF1YWxzVG8gPSA2MVxuXG4vLyBMaXN0IG9mIGVuZm9yY2VkIGVzY2FwZXMuXG52YXIgZXNjYXBlcyA9IFsnXCInLCBcIidcIiwgJzwnLCAnPicsICcmJywgJ2AnXVxuXG4vLyBNYXAgb2YgY2hhcmFjdGVycyB0byBuYW1lcy5cbnZhciBjaGFyYWN0ZXJzID0gY29uc3RydWN0KClcblxuLy8gRGVmYXVsdCBlc2NhcGVzLlxudmFyIGRlZmF1bHRFc2NhcGVzID0gdG9FeHByZXNzaW9uKGVzY2FwZXMpXG5cbi8vIFN1cnJvZ2F0ZSBwYWlycy5cbnZhciBzdXJyb2dhdGVQYWlyID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZ1xuXG4vLyBOb24tQVNDSUkgY2hhcmFjdGVycy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4LCB1bmljb3JuL25vLWhleC1lc2NhcGVcbnZhciBibXAgPSAvW1xceDAxLVxcdFxceDBCXFxmXFx4MEUtXFx4MUZcXHg3RlxceDgxXFx4OERcXHg4RlxceDkwXFx4OURcXHhBMC1cXHVGRkZGXS9nXG5cbi8vIEVuY29kZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBzdWJzZXQgPSBzZXR0aW5ncy5zdWJzZXRcbiAgdmFyIHNldCA9IHN1YnNldCA/IHRvRXhwcmVzc2lvbihzdWJzZXQpIDogZGVmYXVsdEVzY2FwZXNcbiAgdmFyIGVzY2FwZU9ubHkgPSBzZXR0aW5ncy5lc2NhcGVPbmx5XG4gIHZhciBvbWl0ID0gc2V0dGluZ3Mub21pdE9wdGlvbmFsU2VtaWNvbG9uc1xuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShzZXQsIHJlcGxhY2UpXG5cbiAgaWYgKHN1YnNldCB8fCBlc2NhcGVPbmx5KSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZShzdXJyb2dhdGVQYWlyLCByZXBsYWNlU3Vycm9nYXRlUGFpcilcbiAgICAucmVwbGFjZShibXAsIHJlcGxhY2UpXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVN1cnJvZ2F0ZVBhaXIocGFpciwgcG9zLCB2YWwpIHtcbiAgICByZXR1cm4gdG9IZXhSZWZlcmVuY2UoXG4gICAgICAocGFpci5jaGFyQ29kZUF0KDApIC0gMHhkODAwKSAqIDB4NDAwICtcbiAgICAgICAgcGFpci5jaGFyQ29kZUF0KDEpIC1cbiAgICAgICAgMHhkYzAwICtcbiAgICAgICAgMHgxMDAwMCxcbiAgICAgIHZhbC5jaGFyQ29kZUF0KHBvcyArIDIpLFxuICAgICAgb21pdFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UoY2hhciwgcG9zLCB2YWwpIHtcbiAgICByZXR1cm4gb25lKGNoYXIsIHZhbC5jaGFyQ29kZUF0KHBvcyArIDEpLCBzZXR0aW5ncylcbiAgfVxufVxuXG4vLyBTaG9ydGN1dCB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIEhUTUwuXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgcmV0dXJuIGVuY29kZSh2YWx1ZSwge2VzY2FwZU9ubHk6IHRydWUsIHVzZU5hbWVkUmVmZXJlbmNlczogdHJ1ZX0pXG59XG5cbi8vIEVuY29kZSBgY2hhcmAgYWNjb3JkaW5nIHRvIGBvcHRpb25zYC5cbmZ1bmN0aW9uIG9uZShjaGFyLCBuZXh0LCBvcHRpb25zKSB7XG4gIHZhciBzaG9ydGVzdCA9IG9wdGlvbnMudXNlU2hvcnRlc3RSZWZlcmVuY2VzXG4gIHZhciBvbWl0ID0gb3B0aW9ucy5vbWl0T3B0aW9uYWxTZW1pY29sb25zXG4gIHZhciBuYW1lZFxuICB2YXIgY29kZVxuICB2YXIgbnVtZXJpY1xuICB2YXIgZGVjaW1hbFxuXG4gIGlmICgoc2hvcnRlc3QgfHwgb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMpICYmIG93bi5jYWxsKGNoYXJhY3RlcnMsIGNoYXIpKSB7XG4gICAgbmFtZWQgPSB0b05hbWVkKGNoYXJhY3RlcnNbY2hhcl0sIG5leHQsIG9taXQsIG9wdGlvbnMuYXR0cmlidXRlKVxuICB9XG5cbiAgaWYgKHNob3J0ZXN0IHx8ICFuYW1lZCkge1xuICAgIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgICBudW1lcmljID0gdG9IZXhSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdClcblxuICAgIC8vIFVzZSB0aGUgc2hvcnRlc3QgbnVtZXJpYyByZWZlcmVuY2Ugd2hlbiByZXF1ZXN0ZWQuXG4gICAgLy8gQSBzaW1wbGUgYWxnb3JpdGhtIHdvdWxkIHVzZSBkZWNpbWFsIGZvciBhbGwgY29kZSBwb2ludHMgdW5kZXIgMTAwLCBhc1xuICAgIC8vIHRob3NlIGFyZSBzaG9ydGVyIHRoYW4gaGV4YWRlY2ltYWw6XG4gICAgLy9cbiAgICAvLyAqIGAmIzk5O2AgdnMgYCYjeDYzO2AgKGRlY2ltYWwgc2hvcnRlcilcbiAgICAvLyAqIGAmIzEwMDtgIHZzIGAmI3g2NDtgIChlcXVhbClcbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIGJlY2F1c2Ugd2UgdGFrZSBgbmV4dGAgaW50byBjb25zaWRlcmF0aW9uIHdoZW4gYG9taXRgIGlzIHVzZWQsXG4gICAgLy8gQW5kIGl0IHdvdWxkIGJlIHBvc3NpYmxlIHRoYXQgZGVjaW1hbHMgYXJlIHNob3J0ZXIgb24gYmlnZ2VyIHZhbHVlcyBhc1xuICAgIC8vIHdlbGwgaWYgYG5leHRgIGlzIGhleGFkZWNpbWFsIGJ1dCBub3QgZGVjaW1hbCwgd2UgaW5zdGVhZCBjb21wYXJlIGJvdGguXG4gICAgaWYgKHNob3J0ZXN0KSB7XG4gICAgICBkZWNpbWFsID0gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpXG5cbiAgICAgIGlmIChkZWNpbWFsLmxlbmd0aCA8IG51bWVyaWMubGVuZ3RoKSB7XG4gICAgICAgIG51bWVyaWMgPSBkZWNpbWFsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5hbWVkICYmICghc2hvcnRlc3QgfHwgbmFtZWQubGVuZ3RoIDwgbnVtZXJpYy5sZW5ndGgpKSB7XG4gICAgcmV0dXJuIG5hbWVkXG4gIH1cblxuICByZXR1cm4gbnVtZXJpY1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYW4gZW50aXR5LlxuZnVuY3Rpb24gdG9OYW1lZChuYW1lLCBuZXh0LCBvbWl0LCBhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gJyYnICsgbmFtZVxuXG4gIGlmIChcbiAgICBvbWl0ICYmXG4gICAgb3duLmNhbGwobGVnYWN5LCBuYW1lKSAmJlxuICAgIGRhbmdlcm91cy5pbmRleE9mKG5hbWUpID09PSAtMSAmJlxuICAgICghYXR0cmlidXRlIHx8IChuZXh0ICYmIG5leHQgIT09IGVxdWFsc1RvICYmICFhbHBoYW51bWVyaWNhbChuZXh0KSkpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGhleGFkZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2UuXG5mdW5jdGlvbiB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmI3gnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFoZXhhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGEgZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpIHtcbiAgdmFyIHZhbHVlID0gJyYjJyArIFN0cmluZyhjb2RlKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFkZWNpbWFsKG5leHQpID8gdmFsdWUgOiB2YWx1ZSArICc7J1xufVxuXG4vLyBDcmVhdGUgYW4gZXhwcmVzc2lvbiBmb3IgYGNoYXJhY3RlcnNgLlxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGNoYXJhY3RlcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ1snICsgY2hhcmFjdGVycy5qb2luKCcnKSArICddJywgJ2cnKVxufVxuXG4vLyBDb25zdHJ1Y3QgdGhlIG1hcC5cbmZ1bmN0aW9uIGNvbnN0cnVjdCgpIHtcbiAgdmFyIGNoYXJzID0ge31cbiAgdmFyIG5hbWVcblxuICBmb3IgKG5hbWUgaW4gZW50aXRpZXMpIHtcbiAgICBjaGFyc1tlbnRpdGllc1tuYW1lXV0gPSBuYW1lXG4gIH1cblxuICByZXR1cm4gY2hhcnNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1UcmFpbGluZ0xpbmVzXG5cbnZhciBsaW5lID0gJ1xcbidcblxuLy8gUmVtb3ZlIGZpbmFsIG5ld2xpbmUgY2hhcmFjdGVycyBmcm9tIGB2YWx1ZWAuXG5mdW5jdGlvbiB0cmltVHJhaWxpbmdMaW5lcyh2YWx1ZSkge1xuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgaW5kZXggPSB2YWwubGVuZ3RoXG5cbiAgd2hpbGUgKHZhbC5jaGFyQXQoLS1pbmRleCkgPT09IGxpbmUpIHtcbiAgICAvLyBFbXB0eVxuICB9XG5cbiAgcmV0dXJuIHZhbC5zbGljZSgwLCBpbmRleCArIDEpXG59XG4iLCJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaW07XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydHMubGVmdCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJyk7XG59O1xuXG5leHBvcnRzLnJpZ2h0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn07XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyb3VnaFxuXG50cm91Z2gud3JhcCA9IHdyYXBcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxuLy8gQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuZnVuY3Rpb24gdHJvdWdoKCkge1xuICB2YXIgZm5zID0gW11cbiAgdmFyIG1pZGRsZXdhcmUgPSB7fVxuXG4gIG1pZGRsZXdhcmUucnVuID0gcnVuXG4gIG1pZGRsZXdhcmUudXNlID0gdXNlXG5cbiAgcmV0dXJuIG1pZGRsZXdhcmVcblxuICAvLyBSdW4gYGZuc2AuICBMYXN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wbGV0aW9uIGhhbmRsZXIuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBpbnB1dCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSlcbiAgICB2YXIgZG9uZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0eXBlb2YgZG9uZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiBhcyBsYXN0IGFyZ3VtZW50LCBub3QgJyArIGRvbmUpXG4gICAgfVxuXG4gICAgbmV4dC5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcblxuICAgIC8vIFJ1biB0aGUgbmV4dCBgZm5gLCBpZiBhbnkuXG4gICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgIHZhciBmbiA9IGZuc1srK2luZGV4XVxuICAgICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgICAgdmFyIHZhbHVlcyA9IHBhcmFtcy5zbGljZSgxKVxuICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuICAgICAgdmFyIHBvcyA9IC0xXG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZG9uZShlcnIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IG5vbi1udWxseSBpbnB1dCBpbnRvIHZhbHVlcy5cbiAgICAgIHdoaWxlICgrK3BvcyA8IGxlbmd0aCkge1xuICAgICAgICBpZiAodmFsdWVzW3Bvc10gPT09IG51bGwgfHwgdmFsdWVzW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlc1twb3NdID0gaW5wdXRbcG9zXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0ID0gdmFsdWVzXG5cbiAgICAgIC8vIE5leHQgb3IgZG9uZS5cbiAgICAgIGlmIChmbikge1xuICAgICAgICB3cmFwKGZuLCBuZXh0KS5hcHBseShudWxsLCBpbnB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGBmbmAgdG8gdGhlIGxpc3QuXG4gIGZ1bmN0aW9uIHVzZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYGZuYCB0byBiZSBhIGZ1bmN0aW9uLCBub3QgJyArIGZuKVxuICAgIH1cblxuICAgIGZucy5wdXNoKGZuKVxuXG4gICAgcmV0dXJuIG1pZGRsZXdhcmVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG4vLyBXcmFwIGBmbmAuXG4vLyBDYW4gYmUgc3luYyBvciBhc3luYzsgcmV0dXJuIGEgcHJvbWlzZSwgcmVjZWl2ZSBhIGNvbXBsZXRpb24gaGFuZGxlciwgcmV0dXJuXG4vLyBuZXcgdmFsdWVzIGFuZCBlcnJvcnMuXG5mdW5jdGlvbiB3cmFwKGZuLCBjYWxsYmFjaykge1xuICB2YXIgaW52b2tlZFxuXG4gIHJldHVybiB3cmFwcGVkXG5cbiAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgdmFyIGNhbGxiYWNrID0gZm4ubGVuZ3RoID4gcGFyYW1zLmxlbmd0aFxuICAgIHZhciByZXN1bHRcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyYW1zLnB1c2goZG9uZSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBXZWxsLCB0aGlzIGlzIHF1aXRlIHRoZSBwaWNrbGUuXG4gICAgICAvLyBgZm5gIHJlY2VpdmVkIGEgY2FsbGJhY2sgYW5kIGludm9rZWQgaXQgKHRodXMgY29udGludWluZyB0aGUgcGlwZWxpbmUpLFxuICAgICAgLy8gYnV0IGxhdGVyIGFsc28gdGhyZXcgYW4gZXJyb3IuXG4gICAgICAvLyBXZeKAmXJlIG5vdCBhYm91dCB0byByZXN0YXJ0IHRoZSBwaXBlbGluZSBhZ2Fpbiwgc28gdGhlIG9ubHkgdGhpbmcgbGVmdFxuICAgICAgLy8gdG8gZG8gaXMgdG8gdGhyb3cgdGhlIHRoaW5nIGluc3RlYWQuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaW52b2tlZCkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9uZShlcnJvcilcbiAgICB9XG5cbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQudGhlbih0aGVuLCBkb25lKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkb25lKHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4ocmVzdWx0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgbmV4dGAsIG9ubHkgb25jZS5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoIWludm9rZWQpIHtcbiAgICAgIGludm9rZWQgPSB0cnVlXG5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYGRvbmVgIHdpdGggb25lIHZhbHVlLlxuICAvLyBUcmFja3MgaWYgYW4gZXJyb3IgaXMgcGFzc2VkLCB0b28uXG4gIGZ1bmN0aW9uIHRoZW4odmFsdWUpIHtcbiAgICBkb25lKG51bGwsIHZhbHVlKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaGVyaXRcblxuLy8gQ3JlYXRlIGEgY3VzdG9tIGNvbnN0cnVjdG9yIHdoaWNoIGNhbiBiZSBtb2RpZmllZCB3aXRob3V0IGFmZmVjdGluZyB0aGVcbi8vIG9yaWdpbmFsIGNsYXNzLlxuZnVuY3Rpb24gdW5oZXJpdChTdXBlcikge1xuICB2YXIgcmVzdWx0XG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaW5oZXJpdHMoT2YsIFN1cGVyKVxuICBpbmhlcml0cyhGcm9tLCBPZilcblxuICAvLyBDbG9uZSB2YWx1ZXMuXG4gIHJlc3VsdCA9IE9mLnByb3RvdHlwZVxuXG4gIGZvciAoa2V5IGluIHJlc3VsdCkge1xuICAgIHZhbHVlID0gcmVzdWx0W2tleV1cblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9ICdjb25jYXQnIGluIHZhbHVlID8gdmFsdWUuY29uY2F0KCkgOiB4dGVuZCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2ZcblxuICAvLyBDb25zdHJ1Y3RvciBhY2NlcHRpbmcgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGl0c2VsZiBpcyBhbiBgYXJndW1lbnRzYFxuICAvLyBvYmplY3QuXG4gIGZ1bmN0aW9uIEZyb20ocGFyYW1ldGVycykge1xuICAgIHJldHVybiBTdXBlci5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKVxuICB9XG5cbiAgLy8gQ29uc3RydWN0b3IgYWNjZXB0aW5nIHZhcmlhZGljIGFyZ3VtZW50cy5cbiAgZnVuY3Rpb24gT2YoKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9mKSkge1xuICAgICAgcmV0dXJuIG5ldyBGcm9tKGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGJhaWwgPSByZXF1aXJlKCdiYWlsJylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxudmFyIHRyb3VnaCA9IHJlcXVpcmUoJ3Ryb3VnaCcpXG52YXIgdmZpbGUgPSByZXF1aXJlKCd2ZmlsZScpXG5cbi8vIEV4cG9zZSBhIGZyb3plbiBwcm9jZXNzb3IuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWZpZWQoKS5mcmVlemUoKVxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFByb2Nlc3MgcGlwZWxpbmUuXG52YXIgcGlwZWxpbmUgPSB0cm91Z2goKVxuICAudXNlKHBpcGVsaW5lUGFyc2UpXG4gIC51c2UocGlwZWxpbmVSdW4pXG4gIC51c2UocGlwZWxpbmVTdHJpbmdpZnkpXG5cbmZ1bmN0aW9uIHBpcGVsaW5lUGFyc2UocCwgY3R4KSB7XG4gIGN0eC50cmVlID0gcC5wYXJzZShjdHguZmlsZSlcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVSdW4ocCwgY3R4LCBuZXh0KSB7XG4gIHAucnVuKGN0eC50cmVlLCBjdHguZmlsZSwgZG9uZSlcblxuICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSwgZmlsZSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHgudHJlZSA9IHRyZWVcbiAgICAgIGN0eC5maWxlID0gZmlsZVxuICAgICAgbmV4dCgpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lU3RyaW5naWZ5KHAsIGN0eCkge1xuICB2YXIgcmVzdWx0ID0gcC5zdHJpbmdpZnkoY3R4LnRyZWUsIGN0eC5maWxlKVxuICB2YXIgZmlsZSA9IGN0eC5maWxlXG5cbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkIHx8IHJlc3VsdCA9PT0gbnVsbCkge1xuICAgIC8vIEVtcHR5LlxuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihyZXN1bHQpKSB7XG4gICAgZmlsZS5jb250ZW50cyA9IHJlc3VsdFxuICB9IGVsc2Uge1xuICAgIGZpbGUucmVzdWx0ID0gcmVzdWx0XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaXJzdCBwcm9jZXNzb3IuXG5mdW5jdGlvbiB1bmlmaWVkKCkge1xuICB2YXIgYXR0YWNoZXJzID0gW11cbiAgdmFyIHRyYW5zZm9ybWVycyA9IHRyb3VnaCgpXG4gIHZhciBuYW1lc3BhY2UgPSB7fVxuICB2YXIgZnJvemVuID0gZmFsc2VcbiAgdmFyIGZyZWV6ZUluZGV4ID0gLTFcblxuICAvLyBEYXRhIG1hbmFnZW1lbnQuXG4gIHByb2Nlc3Nvci5kYXRhID0gZGF0YVxuXG4gIC8vIExvY2suXG4gIHByb2Nlc3Nvci5mcmVlemUgPSBmcmVlemVcblxuICAvLyBQbHVnaW5zLlxuICBwcm9jZXNzb3IuYXR0YWNoZXJzID0gYXR0YWNoZXJzXG4gIHByb2Nlc3Nvci51c2UgPSB1c2VcblxuICAvLyBBUEkuXG4gIHByb2Nlc3Nvci5wYXJzZSA9IHBhcnNlXG4gIHByb2Nlc3Nvci5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcbiAgcHJvY2Vzc29yLnJ1biA9IHJ1blxuICBwcm9jZXNzb3IucnVuU3luYyA9IHJ1blN5bmNcbiAgcHJvY2Vzc29yLnByb2Nlc3MgPSBwcm9jZXNzXG4gIHByb2Nlc3Nvci5wcm9jZXNzU3luYyA9IHByb2Nlc3NTeW5jXG5cbiAgLy8gRXhwb3NlLlxuICByZXR1cm4gcHJvY2Vzc29yXG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2Nlc3NvciBiYXNlZCBvbiB0aGUgcHJvY2Vzc29yIGluIHRoZSBjdXJyZW50IHNjb3BlLlxuICBmdW5jdGlvbiBwcm9jZXNzb3IoKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdW5pZmllZCgpXG4gICAgdmFyIGxlbmd0aCA9IGF0dGFjaGVycy5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnVzZS5hcHBseShudWxsLCBhdHRhY2hlcnNbaW5kZXhdKVxuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uLmRhdGEoZXh0ZW5kKHRydWUsIHt9LCBuYW1lc3BhY2UpKVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG4gIH1cblxuICAvLyBGcmVlemU6IHVzZWQgdG8gc2lnbmFsIGEgcHJvY2Vzc29yIHRoYXQgaGFzIGZpbmlzaGVkIGNvbmZpZ3VyYXRpb24uXG4gIC8vXG4gIC8vIEZvciBleGFtcGxlLCB0YWtlIHVuaWZpZWQgaXRzZWxmOiBpdOKAmXMgZnJvemVuLlxuICAvLyBQbHVnaW5zIHNob3VsZCBub3QgYmUgYWRkZWQgdG8gaXQuXG4gIC8vIFJhdGhlciwgaXQgc2hvdWxkIGJlIGV4dGVuZGVkLCBieSBpbnZva2luZyBpdCwgYmVmb3JlIG1vZGlmeWluZyBpdC5cbiAgLy9cbiAgLy8gSW4gZXNzZW5jZSwgYWx3YXlzIGludm9rZSB0aGlzIHdoZW4gZXhwb3J0aW5nIGEgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgdmFyIHZhbHVlc1xuICAgIHZhciBwbHVnaW5cbiAgICB2YXIgb3B0aW9uc1xuICAgIHZhciB0cmFuc2Zvcm1lclxuXG4gICAgaWYgKGZyb3plbikge1xuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIHdoaWxlICgrK2ZyZWV6ZUluZGV4IDwgYXR0YWNoZXJzLmxlbmd0aCkge1xuICAgICAgdmFsdWVzID0gYXR0YWNoZXJzW2ZyZWV6ZUluZGV4XVxuICAgICAgcGx1Z2luID0gdmFsdWVzWzBdXG4gICAgICBvcHRpb25zID0gdmFsdWVzWzFdXG4gICAgICB0cmFuc2Zvcm1lciA9IG51bGxcblxuICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgICAgIHZhbHVlc1sxXSA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICB0cmFuc2Zvcm1lciA9IHBsdWdpbi5hcHBseShwcm9jZXNzb3IsIHZhbHVlcy5zbGljZSgxKSlcblxuICAgICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cmFuc2Zvcm1lcnMudXNlKHRyYW5zZm9ybWVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZyb3plbiA9IHRydWVcbiAgICBmcmVlemVJbmRleCA9IEluZmluaXR5XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG4gIH1cblxuICAvLyBEYXRhIG1hbmFnZW1lbnQuXG4gIC8vIEdldHRlciAvIHNldHRlciBmb3IgcHJvY2Vzc29yLXNwZWNpZmljIGluZm9ybXRpb24uXG4gIGZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gU2V0IGBrZXlgLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgYXNzZXJ0VW5mcm96ZW4oJ2RhdGEnLCBmcm96ZW4pXG5cbiAgICAgICAgbmFtZXNwYWNlW2tleV0gPSB2YWx1ZVxuXG4gICAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGBrZXlgLlxuICAgICAgcmV0dXJuIChvd24uY2FsbChuYW1lc3BhY2UsIGtleSkgJiYgbmFtZXNwYWNlW2tleV0pIHx8IG51bGxcbiAgICB9XG5cbiAgICAvLyBTZXQgc3BhY2UuXG4gICAgaWYgKGtleSkge1xuICAgICAgYXNzZXJ0VW5mcm96ZW4oJ2RhdGEnLCBmcm96ZW4pXG4gICAgICBuYW1lc3BhY2UgPSBrZXlcbiAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICB9XG5cbiAgICAvLyBHZXQgc3BhY2UuXG4gICAgcmV0dXJuIG5hbWVzcGFjZVxuICB9XG5cbiAgLy8gUGx1Z2luIG1hbmFnZW1lbnQuXG4gIC8vXG4gIC8vIFBhc3MgaXQ6XG4gIC8vICogICBhbiBhdHRhY2hlciBhbmQgb3B0aW9ucyxcbiAgLy8gKiAgIGEgcHJlc2V0LFxuICAvLyAqICAgYSBsaXN0IG9mIHByZXNldHMsIGF0dGFjaGVycywgYW5kIGFyZ3VtZW50cyAobGlzdCBvZiBhdHRhY2hlcnMgYW5kXG4gIC8vICAgICBvcHRpb25zKS5cbiAgZnVuY3Rpb24gdXNlKHZhbHVlKSB7XG4gICAgdmFyIHNldHRpbmdzXG5cbiAgICBhc3NlcnRVbmZyb3plbigndXNlJywgZnJvemVuKVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRQbHVnaW4uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgIGFkZExpc3QodmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRQcmVzZXQodmFsdWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdXNhYmxlIHZhbHVlLCBub3QgYCcgKyB2YWx1ZSArICdgJylcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgIG5hbWVzcGFjZS5zZXR0aW5ncyA9IGV4dGVuZChuYW1lc3BhY2Uuc2V0dGluZ3MgfHwge30sIHNldHRpbmdzKVxuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzb3JcblxuICAgIGZ1bmN0aW9uIGFkZFByZXNldChyZXN1bHQpIHtcbiAgICAgIGFkZExpc3QocmVzdWx0LnBsdWdpbnMpXG5cbiAgICAgIGlmIChyZXN1bHQuc2V0dGluZ3MpIHtcbiAgICAgICAgc2V0dGluZ3MgPSBleHRlbmQoc2V0dGluZ3MgfHwge30sIHJlc3VsdC5zZXR0aW5ncylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWRkUGx1Z2luKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRQcmVzZXQodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdXNhYmxlIHZhbHVlLCBub3QgYCcgKyB2YWx1ZSArICdgJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0KHBsdWdpbnMpIHtcbiAgICAgIHZhciBsZW5ndGhcbiAgICAgIHZhciBpbmRleFxuXG4gICAgICBpZiAocGx1Z2lucyA9PT0gbnVsbCB8fCBwbHVnaW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBwbHVnaW5zKSB7XG4gICAgICAgIGxlbmd0aCA9IHBsdWdpbnMubGVuZ3RoXG4gICAgICAgIGluZGV4ID0gLTFcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGFkZChwbHVnaW5zW2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGxpc3Qgb2YgcGx1Z2lucywgbm90IGAnICsgcGx1Z2lucyArICdgJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luLCB2YWx1ZSkge1xuICAgICAgdmFyIGVudHJ5ID0gZmluZChwbHVnaW4pXG5cbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAocGxhaW4oZW50cnlbMV0pICYmIHBsYWluKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gZXh0ZW5kKGVudHJ5WzFdLCB2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJ5WzFdID0gdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFjaGVycy5wdXNoKHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKHBsdWdpbikge1xuICAgIHZhciBsZW5ndGggPSBhdHRhY2hlcnMubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgZW50cnlcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGF0dGFjaGVyc1tpbmRleF1cblxuICAgICAgaWYgKGVudHJ5WzBdID09PSBwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2UgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pIGludG8gYSB1bmlzdCBub2RlIHVzaW5nXG4gIC8vIHRoZSBgUGFyc2VyYCBvbiB0aGUgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBwYXJzZShkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgUGFyc2VyXG5cbiAgICBmcmVlemUoKVxuICAgIFBhcnNlciA9IHByb2Nlc3Nvci5QYXJzZXJcbiAgICBhc3NlcnRQYXJzZXIoJ3BhcnNlJywgUGFyc2VyKVxuXG4gICAgaWYgKG5ld2FibGUoUGFyc2VyLCAncGFyc2UnKSkge1xuICAgICAgcmV0dXJuIG5ldyBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKS5wYXJzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBhcnNlcihTdHJpbmcoZmlsZSksIGZpbGUpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgYXN5bmMuXG4gIGZ1bmN0aW9uIHJ1bihub2RlLCBmaWxlLCBjYikge1xuICAgIGFzc2VydE5vZGUobm9kZSlcbiAgICBmcmVlemUoKVxuXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgZmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBmaWxlXG4gICAgICBmaWxlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcbiAgICB9XG5cbiAgICBleGVjdXRvcihudWxsLCBjYilcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJhbnNmb3JtZXJzLnJ1bihub2RlLCB2ZmlsZShmaWxlKSwgZG9uZSlcblxuICAgICAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICAgICAgdHJlZSA9IHRyZWUgfHwgbm9kZVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cmVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG51bGwsIHRyZWUsIGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSdW4gdHJhbnNmb3JtcyBvbiBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3JcbiAgLy8gdmZpbGUgcmVwcmVzZW50YXRpb24pLCBzeW5jLlxuICBmdW5jdGlvbiBydW5TeW5jKG5vZGUsIGZpbGUpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciByZXN1bHRcblxuICAgIHJ1bihub2RlLCBmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncnVuU3luYycsICdydW4nLCBjb21wbGV0ZSlcblxuICAgIHJldHVybiByZXN1bHRcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgICAgcmVzdWx0ID0gdHJlZVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0cmluZ2lmeSBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGVcbiAgLy8gcmVwcmVzZW50YXRpb24pIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5KG5vZGUsIGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBDb21waWxlclxuXG4gICAgZnJlZXplKClcbiAgICBDb21waWxlciA9IHByb2Nlc3Nvci5Db21waWxlclxuICAgIGFzc2VydENvbXBpbGVyKCdzdHJpbmdpZnknLCBDb21waWxlcilcbiAgICBhc3NlcnROb2RlKG5vZGUpXG5cbiAgICBpZiAobmV3YWJsZShDb21waWxlciwgJ2NvbXBpbGUnKSkge1xuICAgICAgcmV0dXJuIG5ldyBDb21waWxlcihub2RlLCBmaWxlKS5jb21waWxlKClcbiAgICB9XG5cbiAgICByZXR1cm4gQ29tcGlsZXIobm9kZSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IsIHRoZW4gcnVuIHRyYW5zZm9ybXMgb24gdGhhdCBub2RlLCBhbmRcbiAgLy8gY29tcGlsZSB0aGUgcmVzdWx0aW5nIG5vZGUgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3NvciwgYW5kXG4gIC8vIHN0b3JlIHRoYXQgcmVzdWx0IG9uIHRoZSB2ZmlsZS5cbiAgZnVuY3Rpb24gcHJvY2Vzcyhkb2MsIGNiKSB7XG4gICAgZnJlZXplKClcbiAgICBhc3NlcnRQYXJzZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcblxuICAgICAgcGlwZWxpbmUucnVuKHByb2Nlc3Nvciwge2ZpbGU6IGZpbGV9LCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG51bGwsIGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIHRoZSBnaXZlbiBkb2N1bWVudCAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcHJvY2Vzc1N5bmMoZG9jKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgZmlsZVxuXG4gICAgZnJlZXplKClcbiAgICBhc3NlcnRQYXJzZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLlBhcnNlcilcbiAgICBhc3NlcnRDb21waWxlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG4gICAgZmlsZSA9IHZmaWxlKGRvYylcblxuICAgIHByb2Nlc3MoZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3Byb2Nlc3NTeW5jJywgJ3Byb2Nlc3MnLCBjb21wbGV0ZSlcblxuICAgIHJldHVybiBmaWxlXG5cbiAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYHZhbHVlYCBpcyBhIGNvbnN0cnVjdG9yLlxuZnVuY3Rpb24gbmV3YWJsZSh2YWx1ZSwgbmFtZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHZhbHVlLnByb3RvdHlwZSAmJlxuICAgIC8vIEEgZnVuY3Rpb24gd2l0aCBrZXlzIGluIGl0cyBwcm90b3R5cGUgaXMgcHJvYmFibHkgYSBjb25zdHJ1Y3Rvci5cbiAgICAvLyBDbGFzc2Vz4oCZIHByb3RvdHlwZSBtZXRob2RzIGFyZSBub3QgZW51bWVyYWJsZSwgc28gd2UgY2hlY2sgaWYgc29tZSB2YWx1ZVxuICAgIC8vIGV4aXN0cyBpbiB0aGUgcHJvdG90eXBlLlxuICAgIChrZXlzKHZhbHVlLnByb3RvdHlwZSkgfHwgbmFtZSBpbiB2YWx1ZS5wcm90b3R5cGUpXG4gIClcbn1cblxuLy8gQ2hlY2sgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3Qgd2l0aCBrZXlzLlxuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIga2V5XG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBBc3NlcnQgYSBwYXJzZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIFBhcnNlcikge1xuICBpZiAodHlwZW9mIFBhcnNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYFBhcnNlcmAnKVxuICB9XG59XG5cbi8vIEFzc2VydCBhIGNvbXBpbGVyIGlzIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGFzc2VydENvbXBpbGVyKG5hbWUsIENvbXBpbGVyKSB7XG4gIGlmICh0eXBlb2YgQ29tcGlsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBDb21waWxlcmAnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGUgcHJvY2Vzc29yIGlzIG5vdCBmcm96ZW4uXG5mdW5jdGlvbiBhc3NlcnRVbmZyb3plbihuYW1lLCBmcm96ZW4pIHtcbiAgaWYgKGZyb3plbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3QgaW52b2tlIGAnICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgICdgIG9uIGEgZnJvemVuIHByb2Nlc3Nvci5cXG5DcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGZpcnN0LCBieSBpbnZva2luZyBpdDogdXNlIGBwcm9jZXNzb3IoKWAgaW5zdGVhZCBvZiBgcHJvY2Vzc29yYC4nXG4gICAgKVxuICB9XG59XG5cbi8vIEFzc2VydCBgbm9kZWAgaXMgYSB1bmlzdCBub2RlLlxuZnVuY3Rpb24gYXNzZXJ0Tm9kZShub2RlKSB7XG4gIGlmICghbm9kZSB8fCB0eXBlb2Ygbm9kZS50eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgY29tcGxldGVgIGlzIGB0cnVlYC5cbmZ1bmN0aW9uIGFzc2VydERvbmUobmFtZSwgYXN5bmNOYW1lLCBjb21wbGV0ZSkge1xuICBpZiAoIWNvbXBsZXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGZpbmlzaGVkIGFzeW5jLiBVc2UgYCcgKyBhc3luY05hbWUgKyAnYCBpbnN0ZWFkJ1xuICAgIClcbiAgfVxufVxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IHtcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcblx0cmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICgnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSA6IG1hdGNoZXNGYWN0b3J5KSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0QWxsKHRlc3RzKSB7XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGxlbmd0aCA9IHRlc3RzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBtYXRjaGVzRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gY29udmVydEFsbCh0ZXN0cylcbiAgdmFyIGxlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZVBvc2l0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVBvc2l0aW9uKG5vZGUsIGZvcmNlKSB7XG4gIHZpc2l0KG5vZGUsIGZvcmNlID8gaGFyZCA6IHNvZnQpXG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIGhhcmQobm9kZSkge1xuICBkZWxldGUgbm9kZS5wb3NpdGlvblxufVxuXG5mdW5jdGlvbiBzb2Z0KG5vZGUpIHtcbiAgbm9kZS5wb3NpdGlvbiA9IHVuZGVmaW5lZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgLy8gTm90aGluZy5cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdwb3NpdGlvbicpIHx8IG93bi5jYWxsKHZhbHVlLCAndHlwZScpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlLnBvc2l0aW9uKVxuICB9XG5cbiAgLy8gUG9zaXRpb24uXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3N0YXJ0JykgfHwgb3duLmNhbGwodmFsdWUsICdlbmQnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZSlcbiAgfVxuXG4gIC8vIFBvaW50LlxuICBpZiAob3duLmNhbGwodmFsdWUsICdsaW5lJykgfHwgb3duLmNhbGwodmFsdWUsICdjb2x1bW4nKSkge1xuICAgIHJldHVybiBwb2ludCh2YWx1ZSlcbiAgfVxuXG4gIC8vID9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIGlmICghcG9pbnQgfHwgdHlwZW9mIHBvaW50ICE9PSAnb2JqZWN0Jykge1xuICAgIHBvaW50ID0ge31cbiAgfVxuXG4gIHJldHVybiBpbmRleChwb2ludC5saW5lKSArICc6JyArIGluZGV4KHBvaW50LmNvbHVtbilcbn1cblxuZnVuY3Rpb24gcG9zaXRpb24ocG9zKSB7XG4gIGlmICghcG9zIHx8IHR5cGVvZiBwb3MgIT09ICdvYmplY3QnKSB7XG4gICAgcG9zID0ge31cbiAgfVxuXG4gIHJldHVybiBwb2ludChwb3Muc3RhcnQpICsgJy0nICsgcG9pbnQocG9zLmVuZClcbn1cblxuZnVuY3Rpb24gaW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IDFcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuXG4gIG9uZSh0cmVlLCBudWxsLCBbXSlcblxuICAvLyBWaXNpdCBhIHNpbmdsZSBub2RlLlxuICBmdW5jdGlvbiBvbmUobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgc3VicmVzdWx0XG5cbiAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICBzdWJyZXN1bHQgPSB0b1Jlc3VsdChhbGwobm9kZS5jaGlsZHJlbiwgcGFyZW50cy5jb25jYXQobm9kZSkpKVxuICAgICAgcmV0dXJuIHN1YnJlc3VsdFswXSA9PT0gRVhJVCA/IHN1YnJlc3VsdCA6IHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudHMpIHtcbiAgICB2YXIgbWluID0gLTFcbiAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcbiAgICB2YXIgaW5kZXggPSAocmV2ZXJzZSA/IGNoaWxkcmVuLmxlbmd0aCA6IG1pbikgKyBzdGVwXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKGluZGV4ID4gbWluICYmIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBvbmUoY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50cylcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdHlwZW9mIHJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyByZXN1bHRbMV0gOiBpbmRleCArIHN0ZXBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuZnVuY3Rpb24gZmFjdG9yeShmaWxlKSB7XG4gIHZhciBjb250ZW50cyA9IGluZGljZXMoU3RyaW5nKGZpbGUpKVxuXG4gIHJldHVybiB7XG4gICAgdG9Qb3NpdGlvbjogb2Zmc2V0VG9Qb3NpdGlvbkZhY3RvcnkoY29udGVudHMpLFxuICAgIHRvT2Zmc2V0OiBwb3NpdGlvblRvT2Zmc2V0RmFjdG9yeShjb250ZW50cylcbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCB0aGUgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgZm9yIGBvZmZzZXRgIGluIHRoZSBib3VuZFxuLy8gaW5kaWNlcy5cbmZ1bmN0aW9uIG9mZnNldFRvUG9zaXRpb25GYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIG9mZnNldFRvUG9zaXRpb25cblxuICAvLyBHZXQgdGhlIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGZvciBgb2Zmc2V0YCBpbiB0aGUgYm91bmQgaW5kaWNlcy5cbiAgZnVuY3Rpb24gb2Zmc2V0VG9Qb3NpdGlvbihvZmZzZXQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aFxuXG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoaW5kaWNlc1tpbmRleF0gPiBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiBpbmRleCArIDEsXG4gICAgICAgICAgY29sdW1uOiBvZmZzZXQgLSAoaW5kaWNlc1tpbmRleCAtIDFdIHx8IDApICsgMSxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuLy8gRmFjdG9yeSB0byBnZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZVxuLy8gYm91bmQgaW5kaWNlcy5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9PZmZzZXRGYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIHBvc2l0aW9uVG9PZmZzZXRcblxuICAvLyBHZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZSBib3VuZFxuICAvLyBpbmRpY2VzLlxuICBmdW5jdGlvbiBwb3NpdGlvblRvT2Zmc2V0KHBvc2l0aW9uKSB7XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi5saW5lXG4gICAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLmNvbHVtblxuXG4gICAgaWYgKCFpc05hTihsaW5lKSAmJiAhaXNOYU4oY29sdW1uKSAmJiBsaW5lIC0gMSBpbiBpbmRpY2VzKSB7XG4gICAgICByZXR1cm4gKGluZGljZXNbbGluZSAtIDJdIHx8IDApICsgY29sdW1uIC0gMSB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIC0xXG4gIH1cbn1cblxuLy8gR2V0IGluZGljZXMgb2YgbGluZS1icmVha3MgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGluZGljZXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIHJlc3VsdC5wdXNoKGluZGV4ICsgMSlcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSlcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKHZhbHVlLmxlbmd0aCArIDEpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gVk1lc3NhZ2VcblxuLy8gSW5oZXJpdCBmcm9tIGBFcnJvciNgLlxuZnVuY3Rpb24gVk1lc3NhZ2VQcm90b3R5cGUoKSB7fVxuVk1lc3NhZ2VQcm90b3R5cGUucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlXG5WTWVzc2FnZS5wcm90b3R5cGUgPSBuZXcgVk1lc3NhZ2VQcm90b3R5cGUoKVxuXG4vLyBNZXNzYWdlIHByb3BlcnRpZXMuXG52YXIgcHJvdG8gPSBWTWVzc2FnZS5wcm90b3R5cGVcblxucHJvdG8uZmlsZSA9ICcnXG5wcm90by5uYW1lID0gJydcbnByb3RvLnJlYXNvbiA9ICcnXG5wcm90by5tZXNzYWdlID0gJydcbnByb3RvLnN0YWNrID0gJydcbnByb3RvLmZhdGFsID0gbnVsbFxucHJvdG8uY29sdW1uID0gbnVsbFxucHJvdG8ubGluZSA9IG51bGxcblxuLy8gQ29uc3RydWN0IGEgbmV3IFZNZXNzYWdlLlxuLy9cbi8vIE5vdGU6IFdlIGNhbm5vdCBpbnZva2UgYEVycm9yYCBvbiB0aGUgY3JlYXRlZCBjb250ZXh0LCBhcyB0aGF0IGFkZHMgcmVhZG9ubHlcbi8vIGBsaW5lYCBhbmQgYGNvbHVtbmAgYXR0cmlidXRlcyBvbiBTYWZhcmkgOSwgdGh1cyB0aHJvd2luZyBhbmQgZmFpbGluZyB0aGVcbi8vIGRhdGEuXG5mdW5jdGlvbiBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIHBhcnRzXG4gIHZhciByYW5nZVxuICB2YXIgbG9jYXRpb25cblxuICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG9yaWdpbiA9IHBvc2l0aW9uXG4gICAgcG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBwYXJ0cyA9IHBhcnNlT3JpZ2luKG9yaWdpbilcbiAgcmFuZ2UgPSBzdHJpbmdpZnkocG9zaXRpb24pIHx8ICcxOjEnXG5cbiAgbG9jYXRpb24gPSB7XG4gICAgc3RhcnQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9LFxuICAgIGVuZDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH1cbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5wb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucG9zaXRpb25cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIC8vIFBvc2l0aW9uLlxuICAgIGlmIChwb3NpdGlvbi5zdGFydCkge1xuICAgICAgbG9jYXRpb24gPSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGxvY2F0aW9uLnN0YXJ0ID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpZiAocmVhc29uLnN0YWNrKSB7XG4gICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIHJlYXNvbiA9IHJlYXNvbi5tZXNzYWdlXG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cbiAgdGhpcy5uYW1lID0gcmFuZ2VcbiAgdGhpcy5yZWFzb24gPSByZWFzb25cbiAgdGhpcy5saW5lID0gcG9zaXRpb24gPyBwb3NpdGlvbi5saW5lIDogbnVsbFxuICB0aGlzLmNvbHVtbiA9IHBvc2l0aW9uID8gcG9zaXRpb24uY29sdW1uIDogbnVsbFxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zb3VyY2UgPSBwYXJ0c1swXVxuICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT3JpZ2luKG9yaWdpbikge1xuICB2YXIgcmVzdWx0ID0gW251bGwsIG51bGxdXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFswXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgcmVwbGFjZSA9IHJlcXVpcmUoJ3JlcGxhY2UtZXh0JylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbi8vIE9yZGVyIG9mIHNldHRpbmcgKGxlYXN0IHNwZWNpZmljIHRvIG1vc3QpLCB3ZSBuZWVkIHRoaXMgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIGB7c3RlbTogJ2EnLCBwYXRoOiAnfi9iLmpzJ31gIHdvdWxkIHRocm93LCBhcyBhIHBhdGggaXMgbmVlZGVkIGJlZm9yZSBhXG4vLyBzdGVtIGNhbiBiZSBzZXQuXG52YXIgb3JkZXIgPSBbJ2hpc3RvcnknLCAncGF0aCcsICdiYXNlbmFtZScsICdzdGVtJywgJ2V4dG5hbWUnLCAnZGlybmFtZSddXG5cbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmdcblxuLy8gQWNjZXNzIGZ1bGwgcGF0aCAoYH4vaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXRoJywge2dldDogZ2V0UGF0aCwgc2V0OiBzZXRQYXRofSlcblxuLy8gQWNjZXNzIHBhcmVudCBwYXRoIChgfmApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZGlybmFtZScsIHtnZXQ6IGdldERpcm5hbWUsIHNldDogc2V0RGlybmFtZX0pXG5cbi8vIEFjY2VzcyBiYXNlbmFtZSAoYGluZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnYmFzZW5hbWUnLCB7Z2V0OiBnZXRCYXNlbmFtZSwgc2V0OiBzZXRCYXNlbmFtZX0pXG5cbi8vIEFjY2VzcyBleHRuYW1lIChgLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdleHRuYW1lJywge2dldDogZ2V0RXh0bmFtZSwgc2V0OiBzZXRFeHRuYW1lfSlcblxuLy8gQWNjZXNzIHN0ZW0gKGBpbmRleC5taW5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3N0ZW0nLCB7Z2V0OiBnZXRTdGVtLCBzZXQ6IHNldFN0ZW19KVxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgZmlsZS5cbmZ1bmN0aW9uIFZGaWxlKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtjb250ZW50czogb3B0aW9uc31cbiAgfSBlbHNlIGlmICgnbWVzc2FnZScgaW4gb3B0aW9ucyAmJiAnbWVzc2FnZXMnIGluIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZGaWxlKSkge1xuICAgIHJldHVybiBuZXcgVkZpbGUob3B0aW9ucylcbiAgfVxuXG4gIHRoaXMuZGF0YSA9IHt9XG4gIHRoaXMubWVzc2FnZXMgPSBbXVxuICB0aGlzLmhpc3RvcnkgPSBbXVxuICB0aGlzLmN3ZCA9IHByb2Nlc3MuY3dkKClcblxuICAvLyBTZXQgcGF0aCByZWxhdGVkIHByb3BlcnRpZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gb3JkZXIubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcm9wID0gb3JkZXJbaW5kZXhdXG5cbiAgICBpZiAob3duLmNhbGwob3B0aW9ucywgcHJvcCkpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG5vbi1wYXRoIHJlbGF0ZWQgcHJvcGVydGllcy5cbiAgZm9yIChwcm9wIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3JkZXIuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHNldFBhdGgocGF0aCkge1xuICBhc3NlcnROb25FbXB0eShwYXRoLCAncGF0aCcpXG5cbiAgaWYgKHBhdGggIT09IHRoaXMucGF0aCkge1xuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlybmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5kaXJuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RGlybmFtZShkaXJuYW1lKSB7XG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZGlybmFtZScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbihkaXJuYW1lIHx8ICcnLCB0aGlzLmJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRCYXNlbmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEJhc2VuYW1lKGJhc2VuYW1lKSB7XG4gIGFzc2VydE5vbkVtcHR5KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICBhc3NlcnRQYXJ0KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBiYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0RXh0bmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5leHRuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RXh0bmFtZShleHRuYW1lKSB7XG4gIHZhciBleHQgPSBleHRuYW1lIHx8ICcnXG5cbiAgYXNzZXJ0UGFydChleHQsICdleHRuYW1lJylcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdleHRuYW1lJylcblxuICBpZiAoZXh0KSB7XG4gICAgaWYgKGV4dC5jaGFyQXQoMCkgIT09ICcuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgbXVzdCBzdGFydCB3aXRoIGAuYCcpXG4gICAgfVxuXG4gICAgaWYgKGV4dC5pbmRleE9mKCcuJywgMSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBjYW5ub3QgY29udGFpbiBtdWx0aXBsZSBkb3RzJylcbiAgICB9XG4gIH1cblxuICB0aGlzLnBhdGggPSByZXBsYWNlKHRoaXMucGF0aCwgZXh0KVxufVxuXG5mdW5jdGlvbiBnZXRTdGVtKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZydcbiAgICA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoLCB0aGlzLmV4dG5hbWUpXG4gICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0U3RlbShzdGVtKSB7XG4gIGFzc2VydE5vbkVtcHR5KHN0ZW0sICdzdGVtJylcbiAgYXNzZXJ0UGFydChzdGVtLCAnc3RlbScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIHN0ZW0gKyAodGhpcy5leHRuYW1lIHx8ICcnKSlcbn1cblxuLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlsZS5cbmZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kaW5nKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuY29udGVudHMgfHwgJydcbiAgcmV0dXJuIGJ1ZmZlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZykgOiBTdHJpbmcodmFsdWUpXG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgYSBwYXRoIChpLmUuLCBkb2VzIG5vdCBjb250YWluIGBwYXRoLnNlcGApLlxuZnVuY3Rpb24gYXNzZXJ0UGFydChwYXJ0LCBuYW1lKSB7XG4gIGlmIChwYXJ0LmluZGV4T2YocGF0aC5zZXApICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgYSBwYXRoOiBkaWQgbm90IGV4cGVjdCBgJyArIHBhdGguc2VwICsgJ2AnXG4gICAgKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgZW1wdHkuXG5mdW5jdGlvbiBhc3NlcnROb25FbXB0eShwYXJ0LCBuYW1lKSB7XG4gIGlmICghcGFydCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGVtcHR5JylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYHBhdGhgIGV4aXN0cy5cbmZ1bmN0aW9uIGFzc2VydFBhdGgocGF0aCwgbmFtZSkge1xuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHRpbmcgYCcgKyBuYW1lICsgJ2AgcmVxdWlyZXMgYHBhdGhgIHRvIGJlIHNldCB0b28nKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIFZNZXNzYWdlID0gcmVxdWlyZSgndmZpbGUtbWVzc2FnZScpXG52YXIgVkZpbGUgPSByZXF1aXJlKCcuL2NvcmUuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG5wcm90by5tZXNzYWdlID0gbWVzc2FnZVxucHJvdG8uaW5mbyA9IGluZm9cbnByb3RvLmZhaWwgPSBmYWlsXG5cbi8vIENyZWF0ZSBhIG1lc3NhZ2Ugd2l0aCBgcmVhc29uYCBhdCBgcG9zaXRpb25gLlxuLy8gV2hlbiBhbiBlcnJvciBpcyBwYXNzZWQgaW4gYXMgYHJlYXNvbmAsIGNvcGllcyB0aGUgc3RhY2suXG5mdW5jdGlvbiBtZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgZmlsZVBhdGggPSB0aGlzLnBhdGhcbiAgdmFyIG1lc3NhZ2UgPSBuZXcgVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKVxuXG4gIGlmIChmaWxlUGF0aCkge1xuICAgIG1lc3NhZ2UubmFtZSA9IGZpbGVQYXRoICsgJzonICsgbWVzc2FnZS5uYW1lXG4gICAgbWVzc2FnZS5maWxlID0gZmlsZVBhdGhcbiAgfVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBmYWxzZVxuXG4gIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKVxuXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8vIEZhaWw6IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgdGhyb3dzIGl0LlxuZnVuY3Rpb24gZmFpbCgpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSB0cnVlXG5cbiAgdGhyb3cgbWVzc2FnZVxufVxuXG4vLyBJbmZvOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIG1hcmtzIHRoZSBmYXRhbGl0eVxuLy8gYXMgbnVsbC5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gbnVsbFxuXG4gIHJldHVybiBtZXNzYWdlXG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==