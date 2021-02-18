(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~about~license~tos"],{

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

/***/ "../../node_modules/mdast-util-from-markdown/index.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-from-markdown/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fromMarkdown

var decode = __webpack_require__(/*! parse-entities/decode-entity */ "../../node_modules/parse-entities/decode-entity.browser.js")
var toString = __webpack_require__(/*! mdast-util-to-string */ "../../node_modules/mdast-util-to-string/index.js")
var codes = __webpack_require__(/*! micromark/dist/character/codes */ "../../node_modules/micromark/dist/character/codes.js")
var constants = __webpack_require__(/*! micromark/dist/constant/constants */ "../../node_modules/micromark/dist/constant/constants.js")
var own = __webpack_require__(/*! micromark/dist/constant/has-own-property */ "../../node_modules/micromark/dist/constant/has-own-property.js")
var types = __webpack_require__(/*! micromark/dist/constant/types */ "../../node_modules/micromark/dist/constant/types.js")
var normalizeIdentifier = __webpack_require__(/*! micromark/dist/util/normalize-identifier */ "../../node_modules/micromark/dist/util/normalize-identifier.js")
var safeFromInt = __webpack_require__(/*! micromark/dist/util/safe-from-int */ "../../node_modules/micromark/dist/util/safe-from-int.js")
var parser = __webpack_require__(/*! micromark/dist/parse */ "../../node_modules/micromark/dist/parse.js")
var preprocessor = __webpack_require__(/*! micromark/dist/preprocess */ "../../node_modules/micromark/dist/preprocess.js")
var postprocess = __webpack_require__(/*! micromark/dist/postprocess */ "../../node_modules/micromark/dist/postprocess.js")

function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    postprocess(
      parser(options).document().write(preprocessor()(value, encoding, true))
    )
  )
}

// Note this compiler only understand complete buffering, not streaming.
function compiler(options) {
  var settings = options || {}
  var config = configure(
    {
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],
      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: closer(onexitcharacterreferencevalue),
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },
    settings.mdastExtensions || []
  )

  var data = {}

  return compile

  function compile(events) {
    var stack = [{type: 'root', children: []}]
    var index = -1
    var listStack = []
    var length
    var handler
    var listStart
    var event

    while (++index < events.length) {
      event = events[index]

      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        event[1].type === types.listOrdered ||
        event[1].type === types.listUnordered
      ) {
        if (event[0] === 'enter') {
          listStack.push(index)
        } else {
          listStart = listStack.pop(index)
          index = prepareList(events, listStart, index)
        }
      }
    }

    index = -1
    length = events.length

    while (++index < length) {
      handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          {
            stack: stack,
            config: config,
            enter: enter,
            exit: exit,
            buffer: buffer,
            resume: resume,
            sliceSerialize: events[index][2].sliceSerialize,
            setData: setData,
            getData: getData
          },
          events[index][1]
        )
      }
    }

    // Figure out `root` position.
    stack[0].position = {
      start: point(
        length ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),
      end: point(
        length
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    }

    return stack[0]
  }

  function prepareList(events, start, length) {
    var index = start - 1
    var containerBalance = -1
    var listSpread = false
    var listItem
    var tailIndex
    var lineIndex
    var tailEvent
    var event
    var firstBlankLineIndex
    var atMarker

    while (++index <= length) {
      event = events[index]

      if (
        event[1].type === types.listUnordered ||
        event[1].type === types.listOrdered ||
        event[1].type === types.blockQuote
      ) {
        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }

        atMarker = undefined
      } else if (event[1].type === types.lineEndingBlank) {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index
          }

          atMarker = undefined
        }
      } else if (
        event[1].type === types.linePrefix ||
        event[1].type === types.listItemValue ||
        event[1].type === types.listItemMarker ||
        event[1].type === types.listItemPrefix ||
        event[1].type === types.listItemPrefixWhitespace
      ) {
        // Empty.
      } else {
        atMarker = undefined
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === types.listItemPrefix) ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === types.listUnordered ||
            event[1].type === types.listOrdered))
      ) {
        if (listItem) {
          tailIndex = index
          lineIndex = undefined

          while (tailIndex--) {
            tailEvent = events[tailIndex]

            if (
              tailEvent[1].type === types.lineEnding ||
              tailEvent[1].type === types.lineEndingBlank
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = types.lineEndingBlank
                listSpread = true
              }

              tailEvent[1].type = types.lineEnding
              lineIndex = tailIndex
            } else if (
              tailEvent[1].type === types.linePrefix ||
              tailEvent[1].type === types.blockQuotePrefix ||
              tailEvent[1].type === types.blockQuotePrefixWhitespace ||
              tailEvent[1].type === types.blockQuoteMarker ||
              tailEvent[1].type === types.listItemIndent
            ) {
              // Empty
            } else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true
          }

          // Fix position.
          listItem.end = point(
            lineIndex ? events[lineIndex][1].start : event[1].end
          )

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])
          index++
          length++
        }

        // Create a new list item.
        if (event[1].type === types.listItemPrefix) {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          }
          events.splice(index, 0, ['enter', listItem, event[2]])
          index++
          length++
          firstBlankLineIndex = undefined
          atMarker = true
        }
      }
    }

    events[start][1]._spread = listSpread
    return length
  }

  function setData(key, value) {
    data[key] = value
  }

  function getData(key) {
    return data[key]
  }

  function point(d) {
    return {line: d.line, column: d.column, offset: d.offset}
  }

  function opener(create, and) {
    return open

    function open(token) {
      enter.call(this, create(token), token)
      if (and) and.call(this, token)
    }
  }

  function buffer() {
    this.stack.push({type: 'fragment', children: []})
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node)
    this.stack.push(node)
    node.position = {start: point(token.start)}
    return node
  }

  function closer(and) {
    return close

    function close(token) {
      if (and) and.call(this, token)
      exit.call(this, token)
    }
  }

  function exit(token) {
    var node = this.stack.pop()
    node.position.end = point(token.end)
    return node
  }

  function resume() {
    var value = toString(this.stack.pop())
    return value
  }

  //
  // Handlers.
  //

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true)
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(
        this.sliceSerialize(token),
        constants.numericBaseDecimal
      )
      setData('expectingFirstListItemValue')
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume()
    this.stack[this.stack.length - 1].lang = data
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume()
    this.stack[this.stack.length - 1].meta = data
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer()
    setData('flowCodeInside', true)
  }

  function onexitcodefenced() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data.replace(
      /^(\r?\n|\r)|(\r?\n|\r)$/g,
      ''
    )
    setData('flowCodeInside')
  }

  function onexitcodeindented() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(
        token
      ).length
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true)
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth =
      this.sliceSerialize(token).charCodeAt(0) === codes.equalsTo ? 1 : 2
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding')
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children
    var tail = siblings[siblings.length - 1]

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text()
      tail.position = {start: point(token.start)}
      this.stack[this.stack.length - 1].children.push(tail)
    }

    this.stack.push(tail)
  }

  function onexitdata(token) {
    var tail = this.stack.pop()
    tail.value += this.sliceSerialize(token)
    tail.position.end = point(token.end)
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1]

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(
        token.end
      )
      setData('atHardBreak')
      return
    }

    if (getData('setextHeadingSlurpLineEnding')) {
      return
    }

    if (config.canContainEols.indexOf(context.type) !== -1) {
      onenterdata.call(this, token)
      onexitdata.call(this, token)
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true)
  }

  function onexithtmlflow() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexithtmltext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitcodetext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitimage() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1]
    var value = this.resume()

    this.stack[this.stack.length - 1].label = value

    // Assume a reference.
    setData('inReference', true)

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children
    } else {
      this.stack[this.stack.length - 1].alt = value
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitresourcetitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitresource() {
    setData('inReference')
  }

  function onenterreference() {
    setData('referenceType', 'collapsed')
  }

  function onexitreferencestring(token) {
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
    setData('referenceType', 'full')
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token)
    var type = getData('characterReferenceType')
    var value

    if (type) {
      value = safeFromInt(
        data,
        type === types.characterReferenceMarkerNumeric
          ? constants.numericBaseDecimal
          : constants.numericBaseHexadecimal
      )
      setData('characterReferenceType')
    } else {
      value = decode(data)
    }

    this.stack[this.stack.length - 1].value += value
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token)
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url =
      'mailto:' + this.sliceSerialize(token)
  }

  //
  // Creaters.
  //

  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  function heading() {
    return {type: 'heading', depth: undefined, children: []}
  }

  function hardBreak() {
    return {type: 'break'}
  }

  function html() {
    return {type: 'html', value: ''}
  }

  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  function strong() {
    return {type: 'strong', children: []}
  }

  function text() {
    return {type: 'text', value: ''}
  }

  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

function configure(config, extensions) {
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../node_modules/mdast-util-to-markdown/lib/index.js")


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/blockquote.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = blockquote

var flow = __webpack_require__(/*! ../util/container-flow */ "../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")

function blockquote(node, _, context) {
  var exit = context.enter('blockquote')
  var value = indentLines(flow(node, context), map)
  exit()
  return value
}

function map(line, index, blank) {
  return '>' + (blank ? '' : ' ') + line
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/break.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/break.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = hardBreak

function hardBreak() {
  return '\\\n'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/code.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/code.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = code

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var streak = __webpack_require__(/*! longest-streak */ "../../node_modules/longest-streak/index.js")
var formatCodeAsIndented = __webpack_require__(/*! ../util/format-code-as-indented */ "../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js")
var checkFence = __webpack_require__(/*! ../util/check-fence */ "../../node_modules/mdast-util-to-markdown/lib/util/check-fence.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function code(node, _, context) {
  var marker = checkFence(context)
  var raw = node.value || ''
  var suffix = marker === '`' ? 'GraveAccent' : 'Tilde'
  var value
  var fence
  var exit
  var subexit

  if (formatCodeAsIndented(node, context)) {
    exit = context.enter('codeIndented')
    value = indentLines(raw, map)
  } else {
    fence = repeat(marker, Math.max(streak(raw, marker) + 1, 3))
    exit = context.enter('codeFenced')
    value = fence

    if (node.lang) {
      subexit = context.enter('codeFencedLang' + suffix)
      value += safe(context, node.lang, {
        before: '`',
        after: ' ',
        encode: ['`']
      })
      subexit()
    }

    if (node.lang && node.meta) {
      subexit = context.enter('codeFencedMeta' + suffix)
      value +=
        ' ' +
        safe(context, node.meta, {
          before: ' ',
          after: '\n',
          encode: ['`']
        })
      subexit()
    }

    value += '\n'

    if (raw) {
      value += raw + '\n'
    }

    value += fence
  }

  exit()
  return value
}

function map(line, _, blank) {
  return (blank ? '' : '    ') + line
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/definition.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/definition.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = definition

var association = __webpack_require__(/*! ../util/association */ "../../node_modules/mdast-util-to-markdown/lib/util/association.js")
var checkQuote = __webpack_require__(/*! ../util/check-quote */ "../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function definition(node, _, context) {
  var quote = checkQuote(context)
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe'
  var url = node.url || ''
  var title = node.title || ''
  var exit = context.enter('definition')
  var subexit = context.enter('label')
  var value =
    '[' + safe(context, association(node), {before: '[', after: ']'}) + ']: '

  subexit()

  if (
    // If there’s no url, or…
    !url ||
    // If there’s whitespace, enclosed is prettier.
    /[ \t\r\n]/.test(url)
  ) {
    subexit = context.enter('destinationLiteral')
    value += '<' + safe(context, url, {before: '<', after: '>'}) + '>'
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw')
    value += safe(context, url, {before: ' ', after: ' '})
  }

  subexit()

  if (title) {
    subexit = context.enter('title' + suffix)
    value +=
      ' ' + quote + safe(context, title, {before: quote, after: quote}) + quote
    subexit()
  }

  exit()

  return value
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/emphasis.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = emphasis
emphasis.peek = emphasisPeek

var checkEmphasis = __webpack_require__(/*! ../util/check-emphasis */ "../../node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js")
var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
function emphasis(node, _, context) {
  var marker = checkEmphasis(context)
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: marker, after: marker})
  exit()
  return marker + value + marker
}

function emphasisPeek(node, _, context) {
  return context.options.emphasis || '*'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/heading.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/heading.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = heading

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var formatHeadingAsSetext = __webpack_require__(/*! ../util/format-heading-as-setext */ "../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js")
var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

function heading(node, _, context) {
  var rank = Math.max(Math.min(6, node.depth || 1), 1)
  var value
  var exit
  var subexit
  var sequence

  if (formatHeadingAsSetext(node, context)) {
    exit = context.enter('headingSetext')
    subexit = context.enter('phrasing')
    value = phrasing(node, context, {before: '\n', after: '\n'})
    subexit()
    exit()

    return (
      value +
      '\n' +
      repeat(
        rank === 1 ? '=' : '-',
        // The whole size…
        value.length -
          // Minus the position of the character after the last EOL (or
          // 0 if there is none)…
          (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1)
      )
    )
  }

  sequence = repeat('#', rank)
  exit = context.enter('headingAtx')
  subexit = context.enter('phrasing')
  value = phrasing(node, context, {before: '# ', after: '\n'})
  value = value ? sequence + ' ' + value : sequence
  if (context.options.closeAtx) {
    value += ' ' + sequence
  }

  subexit()
  exit()

  return value
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/html.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = html

function html(node) {
  return node.value || ''
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/image-reference.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = imageReference
imageReference.peek = imageReferencePeek

var association = __webpack_require__(/*! ../util/association */ "../../node_modules/mdast-util-to-markdown/lib/util/association.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function imageReference(node, _, context) {
  var type = node.referenceType
  var exit = context.enter('imageReference')
  var subexit = context.enter('label')
  var alt = safe(context, node.alt, {before: '[', after: ']'})
  var reference
  var currentStack

  subexit()
  // Hide the fact that we’re in phrasing, because escapes don’t work.
  currentStack = context.stack
  context.stack = []
  subexit = context.enter('reference')
  reference = safe(context, association(node), {before: '[', after: ']'})
  subexit()
  context.stack = currentStack
  exit()

  if (type !== 'full' && alt && alt === reference) {
    return '![' + alt + ']' + (type === 'shortcut' ? '' : '[]')
  }

  return '![' + alt + '][' + reference + ']'
}

function imageReferencePeek() {
  return '!'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/image.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/image.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = image
image.peek = imagePeek

var checkQuote = __webpack_require__(/*! ../util/check-quote */ "../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function image(node, _, context) {
  var quote = checkQuote(context)
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe'
  var url = node.url || ''
  var title = node.title || ''
  var exit = context.enter('image')
  var subexit = context.enter('label')
  var value = '![' + safe(context, node.alt, {before: '[', after: ']'}) + ']('

  subexit()

  if (
    // If there’s no url but there is a title…
    (!url && title) ||
    // Or if there’s markdown whitespace or an eol, enclose.
    /[ \t\r\n]/.test(url)
  ) {
    subexit = context.enter('destinationLiteral')
    value += '<' + safe(context, url, {before: '<', after: '>'}) + '>'
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw')
    value += safe(context, url, {before: '(', after: title ? ' ' : ')'})
  }

  subexit()

  if (title) {
    subexit = context.enter('title' + suffix)
    value +=
      ' ' + quote + safe(context, title, {before: quote, after: quote}) + quote
    subexit()
  }

  value += ')'
  exit()

  return value
}

function imagePeek() {
  return '!'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/index.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.blockquote = __webpack_require__(/*! ./blockquote */ "../../node_modules/mdast-util-to-markdown/lib/handle/blockquote.js")
exports.break = __webpack_require__(/*! ./break */ "../../node_modules/mdast-util-to-markdown/lib/handle/break.js")
exports.code = __webpack_require__(/*! ./code */ "../../node_modules/mdast-util-to-markdown/lib/handle/code.js")
exports.definition = __webpack_require__(/*! ./definition */ "../../node_modules/mdast-util-to-markdown/lib/handle/definition.js")
exports.emphasis = __webpack_require__(/*! ./emphasis */ "../../node_modules/mdast-util-to-markdown/lib/handle/emphasis.js")
exports.hardBreak = __webpack_require__(/*! ./break */ "../../node_modules/mdast-util-to-markdown/lib/handle/break.js")
exports.heading = __webpack_require__(/*! ./heading */ "../../node_modules/mdast-util-to-markdown/lib/handle/heading.js")
exports.html = __webpack_require__(/*! ./html */ "../../node_modules/mdast-util-to-markdown/lib/handle/html.js")
exports.image = __webpack_require__(/*! ./image */ "../../node_modules/mdast-util-to-markdown/lib/handle/image.js")
exports.imageReference = __webpack_require__(/*! ./image-reference */ "../../node_modules/mdast-util-to-markdown/lib/handle/image-reference.js")
exports.inlineCode = __webpack_require__(/*! ./inline-code */ "../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js")
exports.link = __webpack_require__(/*! ./link */ "../../node_modules/mdast-util-to-markdown/lib/handle/link.js")
exports.linkReference = __webpack_require__(/*! ./link-reference */ "../../node_modules/mdast-util-to-markdown/lib/handle/link-reference.js")
exports.list = __webpack_require__(/*! ./list */ "../../node_modules/mdast-util-to-markdown/lib/handle/list.js")
exports.listItem = __webpack_require__(/*! ./list-item */ "../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js")
exports.paragraph = __webpack_require__(/*! ./paragraph */ "../../node_modules/mdast-util-to-markdown/lib/handle/paragraph.js")
exports.root = __webpack_require__(/*! ./root */ "../../node_modules/mdast-util-to-markdown/lib/handle/root.js")
exports.strong = __webpack_require__(/*! ./strong */ "../../node_modules/mdast-util-to-markdown/lib/handle/strong.js")
exports.text = __webpack_require__(/*! ./text */ "../../node_modules/mdast-util-to-markdown/lib/handle/text.js")
exports.thematicBreak = __webpack_require__(/*! ./thematic-break */ "../../node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js")


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = inlineCode
inlineCode.peek = inlineCodePeek

function inlineCode(node) {
  var value = node.value || ''
  var sequence = '`'
  var pad = ''

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`'
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n`]/.test(value.charAt(0)) ||
      /[ \r\n`]/.test(value.charAt(value.length - 1)))
  ) {
    pad = ' '
  }

  return sequence + pad + value + pad + sequence
}

function inlineCodePeek() {
  return '`'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/link-reference.js":
/*!*****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = linkReference
linkReference.peek = linkReferencePeek

var association = __webpack_require__(/*! ../util/association */ "../../node_modules/mdast-util-to-markdown/lib/util/association.js")
var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function linkReference(node, _, context) {
  var type = node.referenceType
  var exit = context.enter('linkReference')
  var subexit = context.enter('label')
  var text = phrasing(node, context, {before: '[', after: ']'})
  var reference
  var currentStack

  subexit()
  // Hide the fact that we’re in phrasing, because escapes don’t work.
  currentStack = context.stack
  context.stack = []
  subexit = context.enter('reference')
  reference = safe(context, association(node), {before: '[', after: ']'})
  subexit()
  context.stack = currentStack
  exit()

  if (type !== 'full' && text && text === reference) {
    return '[' + text + ']' + (type === 'shortcut' ? '' : '[]')
  }

  return '[' + text + '][' + reference + ']'
}

function linkReferencePeek() {
  return '['
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/link.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/link.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = link
link.peek = linkPeek

var checkQuote = __webpack_require__(/*! ../util/check-quote */ "../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js")
var formatLinkAsAutolink = __webpack_require__(/*! ../util/format-link-as-autolink */ "../../node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js")
var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")
var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function link(node, _, context) {
  var quote = checkQuote(context)
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe'
  var url = node.url || ''
  var title = node.title || ''
  var exit
  var value
  var subexit
  var currentStack

  if (formatLinkAsAutolink(node)) {
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    currentStack = context.stack
    context.stack = []
    exit = context.enter('autolink')
    value = '<' + phrasing(node, context, {before: '<', after: '>'}) + '>'
    exit()
    context.stack = currentStack
    return value
  }

  exit = context.enter('link')
  subexit = context.enter('label')
  value = '[' + phrasing(node, context, {before: '[', after: ']'}) + ']('
  subexit()

  if (
    // If there’s no url but there is a title…
    (!url && title) ||
    // Or if there’s markdown whitespace or an eol, enclose.
    /[ \t\r\n]/.test(url)
  ) {
    subexit = context.enter('destinationLiteral')
    value += '<' + safe(context, url, {before: '<', after: '>'}) + '>'
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw')
    value += safe(context, url, {before: ' ', after: ' '})
  }

  subexit()

  if (title) {
    subexit = context.enter('title' + suffix)
    value +=
      ' ' + quote + safe(context, title, {before: quote, after: quote}) + quote
    subexit()
  }

  value += ')'

  exit()
  return value
}

function linkPeek(node) {
  return formatLinkAsAutolink(node) ? '<' : '['
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/list-item.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = listItem

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var checkBullet = __webpack_require__(/*! ../util/check-bullet */ "../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js")
var checkListItemIndent = __webpack_require__(/*! ../util/check-list-item-indent */ "../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js")
var flow = __webpack_require__(/*! ../util/container-flow */ "../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")

function listItem(node, parent, context) {
  var bullet = checkBullet(context)
  var listItemIndent = checkListItemIndent(context)
  var indentSize
  var exit
  var value

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.'
  }

  indentSize = bullet.length + 1

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    indentSize = Math.ceil(indentSize / 4) * 4
  }

  exit = context.enter('listItem')
  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeat(' ', indentSize)) + line
    }

    return (
      (blank ? bullet : bullet + repeat(' ', indentSize - bullet.length)) + line
    )
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/list.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/list.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = list

var flow = __webpack_require__(/*! ../util/container-flow */ "../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js")

function list(node, _, context) {
  var exit = context.enter('list')
  var value = flow(node, context)
  exit()
  return value
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/paragraph.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paragraph

var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

function paragraph(node, _, context) {
  var exit = context.enter('paragraph')
  var subexit = context.enter('phrasing')
  var value = phrasing(node, context, {before: '\n', after: '\n'})
  subexit()
  exit()
  return value
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/root.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/root.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = root

var flow = __webpack_require__(/*! ../util/container-flow */ "../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js")

function root(node, _, context) {
  return flow(node, context)
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/strong.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/strong.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = strong
strong.peek = strongPeek

var checkStrong = __webpack_require__(/*! ../util/check-strong */ "../../node_modules/mdast-util-to-markdown/lib/util/check-strong.js")
var phrasing = __webpack_require__(/*! ../util/container-phrasing */ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
function strong(node, _, context) {
  var marker = checkStrong(context)
  var exit = context.enter('strong')
  var value = phrasing(node, context, {before: marker, after: marker})
  exit()
  return marker + marker + value + marker + marker
}

function strongPeek(node, _, context) {
  return context.options.strong || '*'
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/text.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/text.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = text

var safe = __webpack_require__(/*! ../util/safe */ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js")

function text(node, parent, context, safeOptions) {
  return safe(context, node.value, safeOptions)
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js":
/*!*****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = thematicBreak

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var checkRepeat = __webpack_require__(/*! ../util/check-rule-repeat */ "../../node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js")
var checkRule = __webpack_require__(/*! ../util/check-rule */ "../../node_modules/mdast-util-to-markdown/lib/util/check-rule.js")

function thematicBreak(node, parent, context) {
  var rule = checkRule(context)
  var repetition = checkRepeat(context)
  var spaces = context.options.ruleSpaces
  var value = repeat(rule + (spaces ? ' ' : ''), repetition)
  return spaces ? value.slice(0, -1) : value
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/index.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = toMarkdown

var zwitch = __webpack_require__(/*! zwitch */ "../../node_modules/zwitch/index.js")
var defaultHandlers = __webpack_require__(/*! ./handle */ "../../node_modules/mdast-util-to-markdown/lib/handle/index.js")
var defaultUnsafePatterns = __webpack_require__(/*! ./unsafe */ "../../node_modules/mdast-util-to-markdown/lib/unsafe.js")
var defaultJoin = __webpack_require__(/*! ./join */ "../../node_modules/mdast-util-to-markdown/lib/join.js")

function toMarkdown(tree, options) {
  var settings = options || {}
  var extensions = configure(settings)
  var stack = []
  var handle = zwitch('type', {
    invalid: invalid,
    unknown: unknown,
    handlers: extensions.handlers
  })
  var context = {
    handle: handle,
    stack: stack,
    enter: enter,
    options: settings,
    unsafePatterns: extensions.unsafe,
    join: extensions.join
  }
  var result = handle(tree, null, context, {before: '\n', after: '\n'})

  if (
    result &&
    result.charCodeAt(result.length - 1) !== 10 &&
    result.charCodeAt(result.length - 1) !== 13
  ) {
    result += '\n'
  }

  return result

  function enter(name) {
    stack.push(name)
    return exit

    function exit() {
      stack.pop()
    }
  }
}

function invalid(value) {
  throw new Error('Cannot handle value `' + value + '`, expected node')
}

function unknown(node) {
  throw new Error('Cannot handle unknown node `' + node.type + '`')
}

function configure(settings) {
  var unsafe = defaultUnsafePatterns
  var join = defaultJoin
  var handlers = Object.assign({}, defaultHandlers)
  var extensions = [
    {unsafe: settings.unsafe, handlers: settings.handlers, join: settings.join}
  ].concat(settings.extensions || [])
  var length = extensions.length
  var index = -1
  var extension

  if (settings.tightDefinitions) {
    join = [joinDefinition].concat(join)
  }

  while (++index < length) {
    extension = extensions[index]
    unsafe = unsafe.concat(extension.unsafe || [])
    join = join.concat(extension.join || [])
    Object.assign(handlers, extension.handlers || {})
  }

  return {unsafe: unsafe, join: join, handlers: handlers}
}

function joinDefinition(left, right) {
  // No blank line between adjacent definitions.
  if (left.type === 'definition' && left.type === right.type) {
    return 0
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/join.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/join.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [joinDefaults]

var formatCodeAsIndented = __webpack_require__(/*! ./util/format-code-as-indented */ "../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js")
var formatHeadingAsSetext = __webpack_require__(/*! ./util/format-heading-as-setext */ "../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js")

function joinDefaults(left, right, parent, context) {
  if (
    // Two lists with the same marker.
    (left.type === 'list' &&
      right.type === left.type &&
      Boolean(left.ordered) === Boolean(right.ordered)) ||
    // Indented code after list or another indented code.
    (right.type === 'code' &&
      formatCodeAsIndented(right, context) &&
      (left.type === 'list' ||
        (left.type === right.type && formatCodeAsIndented(left, context))))
  ) {
    return false
  }

  // Join children of a list or an item.
  // In which case, `parent` has a `spread` field.
  if (typeof parent.spread === 'boolean') {
    if (
      left.type === 'paragraph' &&
      // Two paragraphs.
      (left.type === right.type ||
        right.type === 'definition' ||
        // Paragraph followed by a setext heading.
        (right.type === 'heading' && formatHeadingAsSetext(right, context)))
    ) {
      return
    }

    return parent.spread ? 1 : 0
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/unsafe.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/unsafe.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  {
    character: '\t',
    inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']
  },
  {
    character: '\r',
    inConstruct: [
      'codeFencedLangGraveAccent',
      'codeFencedLangTilde',
      'codeFencedMetaGraveAccent',
      'codeFencedMetaTilde',
      'destinationLiteral',
      'headingAtx'
    ]
  },
  {
    character: '\n',
    inConstruct: [
      'codeFencedLangGraveAccent',
      'codeFencedLangTilde',
      'codeFencedMetaGraveAccent',
      'codeFencedMetaTilde',
      'destinationLiteral',
      'headingAtx'
    ]
  },
  {
    character: ' ',
    inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']
  },
  // An exclamation mark can start an image, if it is followed by a link or
  // a link reference.
  {character: '!', after: '\\[', inConstruct: 'phrasing'},
  // A quote can break out of a title.
  {character: '"', inConstruct: 'titleQuote'},
  // A number sign could start an ATX heading if it starts a line.
  {atBreak: true, character: '#'},
  // Dollar sign and percentage are not used in markdown.
  // An ampersand could start a character reference.
  {character: '&', after: '[#A-Za-z]', inConstruct: 'phrasing'},
  // An apostrophe can break out of a title.
  {character: "'", inConstruct: 'titleApostrophe'},
  // A left paren could break out of a destination raw.
  {character: '(', inConstruct: 'destinationRaw'},
  {before: '\\]', character: '(', inConstruct: 'phrasing'},
  // A right paren could start a list item or break out of a destination
  // raw.
  {atBreak: true, before: '\\d+', character: ')'},
  {character: ')', inConstruct: 'destinationRaw'},
  // An asterisk can start thematic breaks, list items, emphasis, strong.
  {atBreak: true, character: '*'},
  {character: '*', inConstruct: 'phrasing'},
  // A plus sign could start a list item.
  {atBreak: true, character: '+'},
  // A dash can start thematic breaks, list items, and setext heading
  // underlines.
  {atBreak: true, character: '-'},
  // A dot could start a list item.
  {atBreak: true, before: '\\d+', character: '.', after: '(?:[ \t\r\n]|$)'},
  // Slash, colon, and semicolon are not used in markdown for constructs.
  // A less than can start html (flow or text) or an autolink.
  // HTML could start with an exclamation mark (declaration, cdata, comment),
  // slash (closing tag), question mark (instruction), or a letter (tag).
  // An autolink also starts with a letter.
  // Finally, it could break out of a destination literal.
  {atBreak: true, character: '<', after: '[!/?A-Za-z]'},
  {character: '<', after: '[!/?A-Za-z]', inConstruct: 'phrasing'},
  {character: '<', inConstruct: 'destinationLiteral'},
  // An equals to can start setext heading underlines.
  {atBreak: true, character: '='},
  // A greater than can start block quotes and it can break out of a
  // destination literal.
  {atBreak: true, character: '>'},
  {character: '>', inConstruct: 'destinationLiteral'},
  // Question mark and at sign are not used in markdown for constructs.
  // A left bracket can start definitions, references, labels,
  {atBreak: true, character: '['},
  {
    character: '[',
    inConstruct: ['phrasing', 'label', 'reference']
  },
  // A backslash can start an escape (when followed by punctuation) or a
  // hard break (when followed by an eol).
  {character: '\\', after: '[!-/:-@[-`{-~]'},
  {character: '\\', after: '[\\r\\n]', inConstruct: 'phrasing'},
  // A right bracket can exit labels.
  {
    character: ']',
    inConstruct: ['label', 'reference']
  },
  // Caret is not used in markdown for constructs.
  // An underscore can start emphasis, strong, or a thematic break.
  {atBreak: true, character: '_'},
  {before: '[^A-Za-z]', character: '_', inConstruct: 'phrasing'},
  {character: '_', after: '[^A-Za-z]', inConstruct: 'phrasing'},
  // A grave accent can start code (fenced or text), or it can break out of
  // a grave accent code fence.
  {atBreak: true, character: '`'},
  {
    character: '`',
    inConstruct: [
      'codeFencedLangGraveAccent',
      'codeFencedMetaGraveAccent',
      'phrasing'
    ]
  },
  // Left brace, vertical bar, right brace are not used in markdown for
  // constructs.
  // A tilde can start code (fenced).
  {atBreak: true, character: '~'}
]


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/association.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/association.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = association

var decode = __webpack_require__(/*! parse-entities/decode-entity */ "../../node_modules/parse-entities/decode-entity.browser.js")

var characterEscape = /\\([!-/:-@[-`{-~])/g
var characterReference = /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi

// The `label` of an association is the string value: character escapes and
// references work, and casing is intact.
// The `identifier` is used to match one association to another: controversially,
// character escapes and references don’t work in this matching: `&copy;` does
// not match `©`, and `\+` does not match `+`.
// But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
// matches `a b`.
// So, we do prefer the label when figuring out how we’re going to serialize:
// it has whitespace, casing, and we can ignore most useless character escapes
// and all character references.
function association(node) {
  var value = node.label || ''
  var identifier = node.identifier

  if (value || !identifier) {
    return value
  }

  return identifier
    .replace(characterEscape, '$1')
    .replace(characterReference, decodeIfPossible)
}

function decodeIfPossible($0, $1) {
  return decode($1) || $0
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkBullet

function checkBullet(context) {
  var marker = context.options.bullet || '*'

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkEmphasis

function checkEmphasis(context) {
  var marker = context.options.emphasis || '*'

  if (marker !== '*' && marker !== '_') {
    throw new Error(
      'Cannot serialize emphasis with `' +
        marker +
        '` for `options.emphasis`, expected `*`, or `_`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-fence.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-fence.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkFence

function checkFence(context) {
  var marker = context.options.fence || '`'

  if (marker !== '`' && marker !== '~') {
    throw new Error(
      'Cannot serialize code with `' +
        marker +
        '` for `options.fence`, expected `` ` `` or `~`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
/*!***********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkListItemIndent

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab'

  if (style === 1 || style === '1') {
    style = 'one'
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-quote.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkQuote

function checkQuote(context) {
  var marker = context.options.quote || '"'

  if (marker !== '"' && marker !== "'") {
    throw new Error(
      'Cannot serialize title with `' +
        marker +
        '` for `options.quote`, expected `"`, or `\'`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkRule

function checkRule(context) {
  var repetition = context.options.ruleRepetition || 3

  if (repetition < 3) {
    throw new Error(
      'Cannot serialize rules with repetition `' +
        repetition +
        '` for `options.ruleRepetition`, expected `3` or more'
    )
  }

  return repetition
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-rule.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-rule.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkRule

function checkRule(context) {
  var marker = context.options.rule || '*'

  if (marker !== '*' && marker !== '-' && marker !== '_') {
    throw new Error(
      'Cannot serialize rules with `' +
        marker +
        '` for `options.rule`, expected `*`, `-`, or `_`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/check-strong.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/check-strong.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkStrong

function checkStrong(context) {
  var marker = context.options.strong || '*'

  if (marker !== '*' && marker !== '_') {
    throw new Error(
      'Cannot serialize strong with `' +
        marker +
        '` for `options.strong`, expected `*`, or `_`'
    )
  }

  return marker
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/container-flow.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = flow

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

function flow(parent, context) {
  var children = parent.children || []
  var length = children.length
  var next = children[0]
  var results = []
  var index = -1
  var child

  while (++index < length) {
    child = next
    next = children[index + 1]

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    )

    if (next) {
      results.push(between(child, next))
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1
    var result

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context)

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeat('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = phrasing

function phrasing(parent, context, safeOptions) {
  var children = parent.children || []
  var length = children.length
  var index = -1
  var results = []
  var current = ''
  var next = children[0]
  var before = safeOptions.before
  var after
  var handleNext
  var child

  while (++index < length) {
    child = next
    next = children[index + 1]

    if (next) {
      handleNext = context.handle.handlers[next.type]
      if (handleNext && handleNext.peek) handleNext = handleNext.peek
      after = handleNext
        ? handleNext(next, parent, context, {before: '', after: ''}).charAt(0)
        : ''
    } else {
      after = safeOptions.after
    }

    current = context.handle(child, parent, context, {
      before: before,
      after: after
    })
    results.push(current)
    before = current.charAt(current.length - 1)
  }

  return results.join('')
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = formatCodeAsIndented

function formatCodeAsIndented(node, context) {
  var value = node.value || ''

  return (
    !context.options.fences &&
    // If there’s no info…
    !node.lang &&
    // And there’s a non-whitespace character…
    /[^ \r\n]/.test(value) &&
    // And the value doesn’t start or end in a blank…
    !/^[\t ]*[\r\n]|[\r\n][\t ]*$/.test(value)
  )
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = formatHeadingAsSetext

var toString = __webpack_require__(/*! mdast-util-to-string */ "../../node_modules/mdast-util-to-string/index.js")

function formatHeadingAsSetext(node, context) {
  return (
    context.options.setext && (!node.depth || node.depth < 3) && toString(node)
  )
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js":
/*!************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = formatLinkAsAutolink

var toString = __webpack_require__(/*! mdast-util-to-string */ "../../node_modules/mdast-util-to-string/index.js")

function formatLinkAsAutolink(node) {
  var raw = toString(node)
  var url = node.url

  return (
    // If there’s a url…
    url &&
    // And there’s a no title…
    !node.title &&
    // And if the url is the same as the content…
    (raw === url || 'mailto:' + raw === url) &&
    // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(url) &&
    // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work) or angle brackets…
    !/[\0- <>\u007F]/.test(url)
  )
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = indentLines

var eol = /\r?\n|\r/g

function indentLines(value, map) {
  var result = []
  var start = 0
  var line = 0
  var match

  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index))
    result.push(match[0])
    start = match.index + match[0].length
    line++
  }

  one(value.slice(start))

  return result.join('')

  function one(value) {
    result.push(map(value, line, !value))
  }
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/lib/util/safe.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/lib/util/safe.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = safe

var encode = __webpack_require__(/*! stringify-entities */ "../../node_modules/mdast-util-to-markdown/node_modules/stringify-entities/index.js")

var regexPunctuation = /[|\\{}()[\]^$+*?.-]/
var markdownPunctuation = /[!-/:-@[-`{-~]/

function safe(context, input, config) {
  var value = input || ''
  var patterns = context.unsafePatterns
  var length = patterns.length
  var index = -1
  var positions = []
  var result = []
  var position
  var character
  var pattern
  var expression
  var match
  var start
  var end

  if (config.before) {
    value = config.before + value
  }

  if (config.after) {
    value += config.after
  }

  while (++index < length) {
    pattern = patterns[index]

    if (
      !inScope(context.stack, pattern.inConstruct, true) ||
      inScope(context.stack, pattern.notInConstruct)
    ) {
      continue
    }

    expression = toExpression(pattern)

    while ((match = expression.exec(value))) {
      positions.push(
        match.index + (pattern.before || pattern.atBreak ? match[1].length : 0)
      )
    }
  }

  positions.sort(numerical)

  start = config.before ? config.before.length : 0
  end = value.length - (config.after ? config.after.length : 0)
  index = -1
  length = positions.length

  while (++index < length) {
    position = positions[index]

    if (
      // Character before or after matched:
      position < start ||
      position >= end ||
      // Character matched multiple times:
      position === positions[index + 1]
    ) {
      continue
    }

    if (start !== position) {
      result.push(value.slice(start, position))
    }

    character = value.charAt(position)
    start = position

    if (
      markdownPunctuation.test(character) &&
      (!config.encode || config.encode.indexOf(character) === -1)
    ) {
      // Character escape.
      result.push('\\')
    } else {
      // Character reference.
      result.push(encode(character, {subset: [character]}))
      start++
    }
  }

  result.push(value.slice(start, end))

  return result.join('')
}

function inScope(stack, list, none) {
  var length
  var index

  if (!list) {
    return none
  }

  if (typeof list === 'string') {
    list = [list]
  }

  length = list.length
  index = -1

  while (++index < length) {
    if (stack.indexOf(list[index]) !== -1) {
      return true
    }
  }

  return false
}

function toExpression(pattern) {
  var before = pattern.before ? '(?:' + pattern.before + ')' : ''
  var after = pattern.after ? '(?:' + pattern.after + ')' : ''

  if (pattern.atBreak) {
    before = '[\\r\\n][\\t ]*' + before
  }

  return new RegExp(
    (before ? '(' + before + ')' : '') +
      (regexPunctuation.test(pattern.character) ? '\\' : '') +
      pattern.character +
      (after || ''),
    'g'
  )
}

function numerical(a, b) {
  return a - b
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/node_modules/stringify-entities/dangerous.json":
/*!***********************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/node_modules/stringify-entities/dangerous.json ***!
  \***********************************************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"cent\",\"copy\",\"divide\",\"gt\",\"lt\",\"not\",\"para\",\"times\"]");

/***/ }),

/***/ "../../node_modules/mdast-util-to-markdown/node_modules/stringify-entities/index.js":
/*!*****************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-markdown/node_modules/stringify-entities/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var entities = __webpack_require__(/*! character-entities-html4 */ "../../node_modules/character-entities-html4/index.json")
var legacy = __webpack_require__(/*! character-entities-legacy */ "../../node_modules/character-entities-legacy/index.json")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "../../node_modules/is-hexadecimal/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "../../node_modules/is-alphanumerical/index.js")
var dangerous = __webpack_require__(/*! ./dangerous.json */ "../../node_modules/mdast-util-to-markdown/node_modules/stringify-entities/dangerous.json")

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

/***/ "../../node_modules/mdast-util-to-string/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-string/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toString

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = []
  var length = values.length
  var index = -1

  while (++index < length) {
    result[index] = toString(values[index])
  }

  return result.join('')
}


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-alpha.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-alpha.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[A-Za-z]/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-alphanumeric.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-alphanumeric.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[\dA-Za-z]/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-atext.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-atext.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[#-'*+\--9=?A-Z^-~]/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-control.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-control.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = asciiControl

// Note: EOF is seen as ASCII control here, because `null < 32 == true`.
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  )
}


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-digit.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-digit.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/\d/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-hex-digit.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-hex-digit.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[\dA-Fa-f]/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/ascii-punctuation.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/ascii-punctuation.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[!-/:-@[-`{-~]/)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/codes.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/codes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is compiled away!
//
// micromark works based on character codes.
// This module contains constants for the ASCII block and the replacement
// character.
// A couple of them are handled in a special way, such as the line endings
// (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
// tab) and its expansion based on what column it’s at (virtual space),
// and the end-of-file (eof) character.
// As values are preprocessed before handling them, the actual characters LF,
// CR, HT, and NUL (which is present as the replacement character), are
// guaranteed to not exist.
//
// Unicode basic latin block.
exports.carriageReturn = -5
exports.lineFeed = -4
exports.carriageReturnLineFeed = -3
exports.horizontalTab = -2
exports.virtualSpace = -1
exports.eof = null
exports.nul = 0
exports.soh = 1
exports.stx = 2
exports.etx = 3
exports.eot = 4
exports.enq = 5
exports.ack = 6
exports.bel = 7
exports.bs = 8
exports.ht = 9 // `\t`
exports.lf = 10 // `\n`
exports.vt = 11 // `\v`
exports.ff = 12 // `\f`
exports.cr = 13 // `\r`
exports.so = 14
exports.si = 15
exports.dle = 16
exports.dc1 = 17
exports.dc2 = 18
exports.dc3 = 19
exports.dc4 = 20
exports.nak = 21
exports.syn = 22
exports.etb = 23
exports.can = 24
exports.em = 25
exports.sub = 26
exports.esc = 27
exports.fs = 28
exports.gs = 29
exports.rs = 30
exports.us = 31
exports.space = 32
exports.exclamationMark = 33 // `!`
exports.quotationMark = 34 // `"`
exports.numberSign = 35 // `#`
exports.dollarSign = 36 // `$`
exports.percentSign = 37 // `%`
exports.ampersand = 38 // `&`
exports.apostrophe = 39 // `'`
exports.leftParenthesis = 40 // `(`
exports.rightParenthesis = 41 // `)`
exports.asterisk = 42 // `*`
exports.plusSign = 43 // `+`
exports.comma = 44 // `,`
exports.dash = 45 // `-`
exports.dot = 46 // `.`
exports.slash = 47 // `/`
exports.digit0 = 48 // `0`
exports.digit1 = 49 // `1`
exports.digit2 = 50 // `2`
exports.digit3 = 51 // `3`
exports.digit4 = 52 // `4`
exports.digit5 = 53 // `5`
exports.digit6 = 54 // `6`
exports.digit7 = 55 // `7`
exports.digit8 = 56 // `8`
exports.digit9 = 57 // `9`
exports.colon = 58 // `:`
exports.semicolon = 59 // `;`
exports.lessThan = 60 // `<`
exports.equalsTo = 61 // `=`
exports.greaterThan = 62 // `>`
exports.questionMark = 63 // `?`
exports.atSign = 64 // `@`
exports.uppercaseA = 65 // `A`
exports.uppercaseB = 66 // `B`
exports.uppercaseC = 67 // `C`
exports.uppercaseD = 68 // `D`
exports.uppercaseE = 69 // `E`
exports.uppercaseF = 70 // `F`
exports.uppercaseG = 71 // `G`
exports.uppercaseH = 72 // `H`
exports.uppercaseI = 73 // `I`
exports.uppercaseJ = 74 // `J`
exports.uppercaseK = 75 // `K`
exports.uppercaseL = 76 // `L`
exports.uppercaseM = 77 // `M`
exports.uppercaseN = 78 // `N`
exports.uppercaseO = 79 // `O`
exports.uppercaseP = 80 // `P`
exports.uppercaseQ = 81 // `Q`
exports.uppercaseR = 82 // `R`
exports.uppercaseS = 83 // `S`
exports.uppercaseT = 84 // `T`
exports.uppercaseU = 85 // `U`
exports.uppercaseV = 86 // `V`
exports.uppercaseW = 87 // `W`
exports.uppercaseX = 88 // `X`
exports.uppercaseY = 89 // `Y`
exports.uppercaseZ = 90 // `Z`
exports.leftSquareBracket = 91 // `[`
exports.backslash = 92 // `\`
exports.rightSquareBracket = 93 // `]`
exports.caret = 94 // `^`
exports.underscore = 95 // `_`
exports.graveAccent = 96 // `` ` ``
exports.lowercaseA = 97 // `a`
exports.lowercaseB = 98 // `b`
exports.lowercaseC = 99 // `c`
exports.lowercaseD = 100 // `d`
exports.lowercaseE = 101 // `e`
exports.lowercaseF = 102 // `f`
exports.lowercaseG = 103 // `g`
exports.lowercaseH = 104 // `h`
exports.lowercaseI = 105 // `i`
exports.lowercaseJ = 106 // `j`
exports.lowercaseK = 107 // `k`
exports.lowercaseL = 108 // `l`
exports.lowercaseM = 109 // `m`
exports.lowercaseN = 110 // `n`
exports.lowercaseO = 111 // `o`
exports.lowercaseP = 112 // `p`
exports.lowercaseQ = 113 // `q`
exports.lowercaseR = 114 // `r`
exports.lowercaseS = 115 // `s`
exports.lowercaseT = 116 // `t`
exports.lowercaseU = 117 // `u`
exports.lowercaseV = 118 // `v`
exports.lowercaseW = 119 // `w`
exports.lowercaseX = 120 // `x`
exports.lowercaseY = 121 // `y`
exports.lowercaseZ = 122 // `z`
exports.leftCurlyBrace = 123 // `{`
exports.verticalBar = 124 // `|`
exports.rightCurlyBrace = 125 // `}`
exports.tilde = 126 // `~`
exports.del = 127
// Unicode Specials block.
exports.byteOrderMarker = 65279
// Unicode Specials block.
exports.replacementCharacter = 65533 // `�`


/***/ }),

/***/ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
/*!***********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/markdown-line-ending-or-space.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownLineEndingOrSpace

function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32
}


/***/ }),

/***/ "../../node_modules/micromark/dist/character/markdown-line-ending.js":
/*!**************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/markdown-line-ending.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownLineEnding

function markdownLineEnding(code) {
  return code < -2
}


/***/ }),

/***/ "../../node_modules/micromark/dist/character/markdown-space.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/markdown-space.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownSpace

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}


/***/ }),

/***/ "../../node_modules/micromark/dist/character/unicode-punctuation.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/unicode-punctuation.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var unicodePunctuation = __webpack_require__(/*! ../constant/unicode-punctuation-regex */ "../../node_modules/micromark/dist/constant/unicode-punctuation-regex.js")
var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

// Size note: removing ASCII from the regex and using `ascii-punctuation` here
// In fact adds to the bundle size.
module.exports = check(unicodePunctuation)


/***/ }),

/***/ "../../node_modules/micromark/dist/character/unicode-whitespace.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/character/unicode-whitespace.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "../../node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/\s/)


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/assign.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/assign.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Object.assign


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/constants.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/constants.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is compiled away!
//
// Parsing markdown comes with a couple of constants, such as minimum or maximum
// sizes of certain sequences.
// Additionally, there are a couple symbols used inside micromark.
// These are all defined here, but compiled away by scripts.
exports.asciiAlphaCaseDifference = 32 // The shift between lower- and uppercase is `0x20`.
exports.attentionSideBefore = 1 // Symbol to mark an attention sequence as before content: `*a`
exports.attentionSideAfter = 2 // Symbol to mark an attention sequence as after content: `a*`
exports.atxHeadingOpeningFenceSizeMax = 6 // 6 number signs is fine, 7 isn’t.
exports.autolinkDomainSizeMax = 63 // 63 characters is fine, 64 is too many.
exports.autolinkSchemeSizeMax = 32 // 32 characters is fine, 33 is too many.
exports.cdataOpeningString = 'CDATA[' // And preceded by `<![`.
exports.characterGroupWhitespace = 1 // Symbol used to indicate a character is whitespace
exports.characterGroupPunctuation = 2 // Symbol used to indicate a character is whitespace
exports.characterReferenceDecimalSizeMax = 7 // `&#9999999;`.
exports.characterReferenceHexadecimalSizeMax = 6 // `&#xff9999;`.
exports.characterReferenceNamedSizeMax = 31 // `&CounterClockwiseContourIntegral;`.
exports.codeFencedSequenceSizeMin = 3 // At least 3 ticks or tildes are needed.
exports.contentTypeFlow = 'flow'
exports.contentTypeContent = 'content'
exports.contentTypeString = 'string'
exports.contentTypeText = 'text'
exports.hardBreakPrefixSizeMin = 2 // At least 2 trailing spaces are needed.
exports.htmlRaw = 1 // Symbol for `<script>`
exports.htmlComment = 2 // Symbol for `<!---->`
exports.htmlInstruction = 3 // Symbol for `<?php?>`
exports.htmlDeclaration = 4 // Symbol for `<!doctype>`
exports.htmlCdata = 5 // Symbol for `<![CDATA[]]>`
exports.htmlBasic = 6 // Symbol for `<div`
exports.htmlComplete = 7 // Symbol for `<x>`
exports.htmlRawSizeMax = 6 // Length of `script`.
exports.linkResourceDestinationBalanceMax = 3 // See: <https://spec.commonmark.org/0.29/#link-destination>
exports.linkReferenceSizeMax = 999 // See: <https://spec.commonmark.org/0.29/#link-label>
exports.listItemValueSizeMax = 10 // See: <https://spec.commonmark.org/0.29/#ordered-list-marker>
exports.numericBaseDecimal = 10
exports.numericBaseHexadecimal = 0x10
exports.tabSize = 4 // Tabs have a hard-coded size of 4, per CommonMark.
exports.thematicBreakMarkerCountMin = 3 // At least 3 asterisks, dashes, or underscores are needed.
exports.v8MaxSafeChunkSize = 10000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/from-char-code.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/from-char-code.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = String.fromCharCode


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/has-own-property.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/has-own-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}.hasOwnProperty


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/html-block-names.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/html-block-names.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
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
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
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

/***/ "../../node_modules/micromark/dist/constant/html-raw-names.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/html-raw-names.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
module.exports = ['pre', 'script', 'style']


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/types.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/types.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is compiled away!
//
// Here is the list of all types of tokens exposed by micromark, with a short
// explanation of what they include and where they are found.
// In picking names, generally, the rule is to be as explicit as possible
// instead of reusing names.
// For example, there is a `definitionDestination` and a `resourceDestination`,
// instead of one shared name.

// Generic type for data, such as in a title, a destination, etc.
exports.data = 'data'

// Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
// Such as, between a fenced code fence and an info string.
exports.whitespace = 'whitespace'

// Generic type for line endings (line feed, carriage return, carriage return +
// line feed).
exports.lineEnding = 'lineEnding'

// A line ending, but ending a blank line.
exports.lineEndingBlank = 'lineEndingBlank'

// Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
// line.
exports.linePrefix = 'linePrefix'

// Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
// line.
exports.lineSuffix = 'lineSuffix'

// Whole ATX heading:
//
// ```markdown
// #
// ## Alpha
// ### Bravo ###
// ```
//
// Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
exports.atxHeading = 'atxHeading'

// Sequence of number signs in an ATX heading (`###`).
exports.atxHeadingSequence = 'atxHeadingSequence'

// Content in an ATX heading (`alpha`).
// Includes text.
exports.atxHeadingText = 'atxHeadingText'

// Whole autolink (`<https://example.com>` or `<admin@example.com>`)
// Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
exports.autolink = 'autolink'

// Email autolink w/o markers (`admin@example.com`)
exports.autolinkEmail = 'autolinkEmail'

// Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
exports.autolinkMarker = 'autolinkMarker'

// Protocol autolink w/o markers (`https://example.com`)
exports.autolinkProtocol = 'autolinkProtocol'

// A whole character escape (`\-`).
// Includes `escapeMarker` and `characterEscapeValue`.
exports.characterEscape = 'characterEscape'

// The escaped character (`-`).
exports.characterEscapeValue = 'characterEscapeValue'

// A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
// Includes `characterReferenceMarker`, an optional
// `characterReferenceMarkerNumeric`, in which case an optional
// `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
exports.characterReference = 'characterReference'

// The start or end marker (`&` or `;`).
exports.characterReferenceMarker = 'characterReferenceMarker'

// Mark reference as numeric (`#`).
exports.characterReferenceMarkerNumeric = 'characterReferenceMarkerNumeric'

// Mark reference as numeric (`x` or `X`).
exports.characterReferenceMarkerHexadecimal =
  'characterReferenceMarkerHexadecimal'

// Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
exports.characterReferenceValue = 'characterReferenceValue'

// Whole fenced code:
//
// ````markdown
// ```js
// alert(1)
// ```
// ````
exports.codeFenced = 'codeFenced'

// A fenced code fence, including whitespace, sequence, info, and meta
// (` ```js `).
exports.codeFencedFence = 'codeFencedFence'

// Sequence of grave accent or tilde characters (` ``` `) in a fence.
exports.codeFencedFenceSequence = 'codeFencedFenceSequence'

// Info word (`js`) in a fence.
// Includes string.
exports.codeFencedFenceInfo = 'codeFencedFenceInfo'

// Meta words (`highlight="1"`) in a fence.
// Includes string.
exports.codeFencedFenceMeta = 'codeFencedFenceMeta'

// A line of code.
exports.codeFlowValue = 'codeFlowValue'

// Whole indented code:
//
// ```markdown
//     alert(1)
// ```
//
// Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
exports.codeIndented = 'codeIndented'

// A text code (``` `alpha` ```).
// Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
// `codeTextPadding`.
exports.codeText = 'codeText'

exports.codeTextData = 'codeTextData'

// A space or line ending right after or before a tick.
exports.codeTextPadding = 'codeTextPadding'

// A text code fence (` `` `).
exports.codeTextSequence = 'codeTextSequence'

// Whole content:
//
// ```markdown
// [a]: b
// c
// =
// d
// ```
//
// Includes `paragraph` and `definition`.
exports.content = 'content'
// Whole definition:
//
// ```markdown
// [micromark]: https://github.com/micromark/micromark
// ```
//
// Includes `definitionLabel`, `definitionMarker`, `whitespace`,
// `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
exports.definition = 'definition'

// Destination of a definition (`https://github.com/micromark/micromark` or
// `<https://github.com/micromark/micromark>`).
// Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
exports.definitionDestination = 'definitionDestination'

// Enclosed destination of a definition
// (`<https://github.com/micromark/micromark>`).
// Includes `definitionDestinationLiteralMarker` and optionally
// `definitionDestinationString`.
exports.definitionDestinationLiteral = 'definitionDestinationLiteral'

// Markers of an enclosed definition destination (`<` or `>`).
exports.definitionDestinationLiteralMarker =
  'definitionDestinationLiteralMarker'

// Unenclosed destination of a definition
// (`https://github.com/micromark/micromark`).
// Includes `definitionDestinationString`.
exports.definitionDestinationRaw = 'definitionDestinationRaw'

// Text in an destination (`https://github.com/micromark/micromark`).
// Includes string.
exports.definitionDestinationString = 'definitionDestinationString'

// Label of a definition (`[micromark]`).
// Includes `definitionLabelMarker` and `definitionLabelString`.
exports.definitionLabel = 'definitionLabel'

// Markers of a definition label (`[` or `]`).
exports.definitionLabelMarker = 'definitionLabelMarker'

// Value of a definition label (`micromark`).
// Includes string.
exports.definitionLabelString = 'definitionLabelString'

// Marker between a label and a destination (`:`).
exports.definitionMarker = 'definitionMarker'

// Title of a definition (`"x"`, `'y'`, or `(z)`).
// Includes `definitionTitleMarker` and optionally `definitionTitleString`.
exports.definitionTitle = 'definitionTitle'

// Marker around a title of a definition (`"`, `'`, `(`, or `)`).
exports.definitionTitleMarker = 'definitionTitleMarker'

// Data without markers in a title (`z`).
// Includes string.
exports.definitionTitleString = 'definitionTitleString'

// Emphasis (`*alpha*`).
// Includes `emphasisSequence` and `emphasisText`.
exports.emphasis = 'emphasis'

// Sequence of emphasis markers (`*` or `_`).
exports.emphasisSequence = 'emphasisSequence'

// Emphasis text (`alpha`).
// Includes text.
exports.emphasisText = 'emphasisText'

// The character escape marker (`\`).
exports.escapeMarker = 'escapeMarker'

// A hard break created with a backslash (`\\n`).
// Includes `escapeMarker` (does not include the line ending)
exports.hardBreakEscape = 'hardBreakEscape'

// A hard break created with trailing spaces (`  \n`).
// Does not include the line ending.
exports.hardBreakTrailing = 'hardBreakTrailing'

// Flow HTML:
//
// ```markdown
// <div
// ```
//
// Inlcudes `lineEnding`, `htmlFlowData`.
exports.htmlFlow = 'htmlFlow'

exports.htmlFlowData = 'htmlFlowData'

// HTML in text (the tag in `a <i> b`).
// Includes `lineEnding`, `htmlTextData`.
exports.htmlText = 'htmlText'

exports.htmlTextData = 'htmlTextData'

// Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
// `![alpha]`).
// Includes `label` and an optional `resource` or `reference`.
exports.image = 'image'

// Whole link label (`[*alpha*]`).
// Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
exports.label = 'label'

// Text in an label (`*alpha*`).
// Includes text.
exports.labelText = 'labelText'

// Start a link label (`[`).
// Includes a `labelMarker`.
exports.labelLink = 'labelLink'

// Start an image label (`![`).
// Includes `labelImageMarker` and `labelMarker`.
exports.labelImage = 'labelImage'

// Marker of a label (`[` or `]`).
exports.labelMarker = 'labelMarker'

// Marker to start an image (`!`).
exports.labelImageMarker = 'labelImageMarker'

// End a label (`]`).
// Includes `labelMarker`.
exports.labelEnd = 'labelEnd'

// Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
// Includes `label` and an optional `resource` or `reference`.
exports.link = 'link'

// Whole paragraph:
//
// ```markdown
// alpha
// bravo.
// ```
//
// Includes text.
exports.paragraph = 'paragraph'

// A reference (`[alpha]` or `[]`).
// Includes `referenceMarker` and an optional `referenceString`.
exports.reference = 'reference'

// A reference marker (`[` or `]`).
exports.referenceMarker = 'referenceMarker'

// Reference text (`alpha`).
// Includes string.
exports.referenceString = 'referenceString'

// A resource (`(https://example.com "alpha")`).
// Includes `resourceMarker`, an optional `resourceDestination` with an optional
// `whitespace` and `resourceTitle`.
exports.resource = 'resource'

// A resource destination (`https://example.com`).
// Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
exports.resourceDestination = 'resourceDestination'

// A literal resource destination (`<https://example.com>`).
// Includes `resourceDestinationLiteralMarker` and optionally
// `resourceDestinationString`.
exports.resourceDestinationLiteral = 'resourceDestinationLiteral'

// A resource destination marker (`<` or `>`).
exports.resourceDestinationLiteralMarker = 'resourceDestinationLiteralMarker'

// A raw resource destination (`https://example.com`).
// Includes `resourceDestinationString`.
exports.resourceDestinationRaw = 'resourceDestinationRaw'

// Resource destination text (`https://example.com`).
// Includes string.
exports.resourceDestinationString = 'resourceDestinationString'

// A resource marker (`(` or `)`).
exports.resourceMarker = 'resourceMarker'

// A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
// Includes `resourceTitleMarker` and optionally `resourceTitleString`.
exports.resourceTitle = 'resourceTitle'

// A resource title marker (`"`, `'`, `(`, or `)`).
exports.resourceTitleMarker = 'resourceTitleMarker'

// Resource destination title (`alpha`).
// Includes string.
exports.resourceTitleString = 'resourceTitleString'

// Whole setext heading:
//
// ```markdown
// alpha
// bravo
// =====
// ```
//
// Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
// `setextHeadingLine`.
exports.setextHeading = 'setextHeading'

// Content in a setext heading (`alpha\nbravo`).
// Includes text.
exports.setextHeadingText = 'setextHeadingText'

// Underline in a setext heading, including whitespace suffix (`==`).
// Includes `setextHeadingLineSequence`.
exports.setextHeadingLine = 'setextHeadingLine'

// Sequence of equals or dash characters in underline in a setext heading (`-`).
exports.setextHeadingLineSequence = 'setextHeadingLineSequence'

// Strong (`**alpha**`).
// Includes `strongSequence` and `strongText`.
exports.strong = 'strong'

// Sequence of strong markers (`**` or `__`).
exports.strongSequence = 'strongSequence'

// Strong text (`alpha`).
// Includes text.
exports.strongText = 'strongText'

// Whole thematic break:
//
// ```markdown
// * * *
// ```
//
// Includes `thematicBreakSequence` and `whitespace`.
exports.thematicBreak = 'thematicBreak'

// A sequence of one or more thematic break markers (`***`).
exports.thematicBreakSequence = 'thematicBreakSequence'

// Whole block quote:
//
// ```markdown
// > a
// >
// > b
// ```
//
// Includes `blockQuotePrefix` and flow.
exports.blockQuote = 'blockQuote'
// The `>` or `> ` of a block quote.
exports.blockQuotePrefix = 'blockQuotePrefix'
// The `>` of a block quote prefix.
exports.blockQuoteMarker = 'blockQuoteMarker'
// The optional ` ` of a block quote prefix.
exports.blockQuotePrefixWhitespace = 'blockQuotePrefixWhitespace'

// Whole unordered list:
//
// ```markdown
// - a
//   b
// ```
//
// Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
// lines.
exports.listOrdered = 'listOrdered'

// Whole ordered list:
//
// ```markdown
// 1. a
//    b
// ```
//
// Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
// lines.
exports.listUnordered = 'listUnordered'

// The indent of further list item lines.
exports.listItemIndent = 'listItemIndent'

// A marker, as in, `*`, `+`, `-`, `.`, or `)`.
exports.listItemMarker = 'listItemMarker'

// The thing that starts a list item, such as `1. `.
// Includes `listItemValue` if ordered, `listItemMarker`, and
// `listItemPrefixWhitespace` (unless followed by a line ending).
exports.listItemPrefix = 'listItemPrefix'

// The whitespace after a marker.
exports.listItemPrefixWhitespace = 'listItemPrefixWhitespace'

// The numerical value of an ordered item.
exports.listItemValue = 'listItemValue'

// Internal types used for subtokenizers, compiled away
exports.chunkContent = 'chunkContent'
exports.chunkFlow = 'chunkFlow'
exports.chunkText = 'chunkText'
exports.chunkString = 'chunkString'


/***/ }),

/***/ "../../node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
/*!******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constant/unicode-punctuation-regex.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
module.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/


/***/ }),

/***/ "../../node_modules/micromark/dist/constructs.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/constructs.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var attention = __webpack_require__(/*! ./tokenize/attention */ "../../node_modules/micromark/dist/tokenize/attention.js")
var headingAtx = __webpack_require__(/*! ./tokenize/heading-atx */ "../../node_modules/micromark/dist/tokenize/heading-atx.js")
var autolink = __webpack_require__(/*! ./tokenize/autolink */ "../../node_modules/micromark/dist/tokenize/autolink.js")
var list = __webpack_require__(/*! ./tokenize/list */ "../../node_modules/micromark/dist/tokenize/list.js")
var blockQuote = __webpack_require__(/*! ./tokenize/block-quote */ "../../node_modules/micromark/dist/tokenize/block-quote.js")
var characterEscape = __webpack_require__(/*! ./tokenize/character-escape */ "../../node_modules/micromark/dist/tokenize/character-escape.js")
var characterReference = __webpack_require__(/*! ./tokenize/character-reference */ "../../node_modules/micromark/dist/tokenize/character-reference.js")
var codeFenced = __webpack_require__(/*! ./tokenize/code-fenced */ "../../node_modules/micromark/dist/tokenize/code-fenced.js")
var codeIndented = __webpack_require__(/*! ./tokenize/code-indented */ "../../node_modules/micromark/dist/tokenize/code-indented.js")
var codeText = __webpack_require__(/*! ./tokenize/code-text */ "../../node_modules/micromark/dist/tokenize/code-text.js")
var definition = __webpack_require__(/*! ./tokenize/definition */ "../../node_modules/micromark/dist/tokenize/definition.js")
var hardBreakEscape = __webpack_require__(/*! ./tokenize/hard-break-escape */ "../../node_modules/micromark/dist/tokenize/hard-break-escape.js")
var htmlFlow = __webpack_require__(/*! ./tokenize/html-flow */ "../../node_modules/micromark/dist/tokenize/html-flow.js")
var htmlText = __webpack_require__(/*! ./tokenize/html-text */ "../../node_modules/micromark/dist/tokenize/html-text.js")
var labelEnd = __webpack_require__(/*! ./tokenize/label-end */ "../../node_modules/micromark/dist/tokenize/label-end.js")
var labelImage = __webpack_require__(/*! ./tokenize/label-start-image */ "../../node_modules/micromark/dist/tokenize/label-start-image.js")
var labelLink = __webpack_require__(/*! ./tokenize/label-start-link */ "../../node_modules/micromark/dist/tokenize/label-start-link.js")
var setextUnderline = __webpack_require__(/*! ./tokenize/setext-underline */ "../../node_modules/micromark/dist/tokenize/setext-underline.js")
var thematicBreak = __webpack_require__(/*! ./tokenize/thematic-break */ "../../node_modules/micromark/dist/tokenize/thematic-break.js")
var lineEnding = __webpack_require__(/*! ./tokenize/line-ending */ "../../node_modules/micromark/dist/tokenize/line-ending.js")
var resolveText = __webpack_require__(/*! ./initialize/text */ "../../node_modules/micromark/dist/initialize/text.js").resolver

exports.document = {
  42: list, // Asterisk
  43: list, // Plus sign
  45: list, // Dash
  48: list, // 0
  49: list, // 1
  50: list, // 2
  51: list, // 3
  52: list, // 4
  53: list, // 5
  54: list, // 6
  55: list, // 7
  56: list, // 8
  57: list, // 9
  62: blockQuote // Greater than
}

exports.contentInitial = {
  91: definition // Left square bracket
}

exports.flowInitial = {
  '-2': codeIndented, // Horizontal tab
  '-1': codeIndented, // Virtual space
  32: codeIndented // Space
}

exports.flow = {
  35: headingAtx, // Number sign
  42: thematicBreak, // Asterisk
  45: [setextUnderline, thematicBreak], // Dash
  60: htmlFlow, // Less than
  61: setextUnderline, // Equals to
  95: thematicBreak, // Underscore
  96: codeFenced, // Grave accent
  126: codeFenced // Tilde
}

exports.string = {
  38: characterReference, // Ampersand
  92: characterEscape // Backslash
}

exports.text = {
  '-5': lineEnding, // Carriage return
  '-4': lineEnding, // Line feed
  '-3': lineEnding, // Carriage return + line feed
  33: labelImage, // Exclamation mark
  38: characterReference, // Ampersand
  42: attention, // Asterisk
  60: [autolink, htmlText], // Less than
  91: labelLink, // Left square bracket
  92: [hardBreakEscape, characterEscape], // Backslash
  93: labelEnd, // Right square bracket
  95: attention, // Underscore
  96: codeText // Grave accent
}

exports.insideSpan = {
  null: [attention, resolveText]
}


/***/ }),

/***/ "../../node_modules/micromark/dist/initialize/content.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/initialize/content.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeContent

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )

  var previous

  return contentStart

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, contentStart, 'linePrefix')
  }

  function paragraphInitial(code) {
    effects.enter('paragraph')
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token

    return data(code)
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText')
      effects.exit('paragraph')
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit('chunkText')
      return lineStart
    }

    // Data.
    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/initialize/document.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/initialize/document.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeDocument

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ "../../node_modules/micromark/dist/tokenize/partial-blank-line.js")

var container = {tokenize: tokenizeContainer}
var lazyFlow = {tokenize: tokenizeLazyFlow}

function initializeDocument(effects) {
  var self = this
  var stack = []
  var continued = 0
  var inspectResult
  var childFlow
  var childToken

  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1]
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible
    self.containerState = {}
    return effects.attempt(container, containerContinue, flowStart)(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState])
    self.containerState = undefined
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())

    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    })

    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'))
      return flowStart(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      continueFlow(effects.exit('chunkFlow'))
      return effects.check(
        {tokenize: tokenizeInspect, partial: true},
        documentAfterPeek
      )
    }

    effects.consume(code)
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    )

    continued = 0
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token
    childToken = token
    childFlow.lazy = inspectResult && inspectResult.lazy
    childFlow.defineSkip(token.start)
    childFlow.write(self.sliceStream(token))
  }

  function exitContainers(size, end) {
    var index = stack.length

    // Close the flow.
    if (childFlow && end) {
      childFlow.write([null])
      childToken = childFlow = undefined
    }

    // Exit open containers.
    while (index-- > size) {
      self.containerState = stack[index][1]
      stack[index][0].exit.call(self, effects)
    }

    stack.length = size
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0

    inspectResult = {}

    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1]
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      }

      // If we’re continued but in a concrete flow, we can’t have more
      // containers.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible
      self.containerState = {}
      return effects.attempt(container, inspectFlowEnd, inspectDone)(code)
    }

    function inspectContinue(code) {
      subcontinued++
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {}
        return effects.attempt(
          container,
          inspectFlowEnd,
          // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlow,
            inspectFlowEnd,
            effects.check(blank, inspectFlowEnd, inspectLazy)
          )
        )(code)
      }

      // Otherwise we’re interrupting.
      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length
      inspectResult.lazy = true
      inspectResult.flowContinue = true
      return inspectDone(code)
    }

    // We’re done with flow if we have more containers, or an interruption.
    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued
      self.interrupt = self.containerState = undefined
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return createSpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    4
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return createSpace(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    'linePrefix',
    4
  )
}


/***/ }),

/***/ "../../node_modules/micromark/dist/initialize/flow.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/initialize/flow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeFlow

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ "../../node_modules/micromark/dist/tokenize/partial-blank-line.js")
var content = __webpack_require__(/*! ../tokenize/content */ "../../node_modules/micromark/dist/tokenize/content.js")

function initializeFlow(effects) {
  var self = this
  var initial = effects.attempt(
    // Try to parse a blank line.
    blank,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      createSpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  )

  return initial

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    self.currentConstruct = undefined
    return initial
  }

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    self.currentConstruct = undefined
    return initial
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/initialize/text.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/initialize/text.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.text = initializeFactory('text')
exports.string = initializeFactory('string')
exports.resolver = {resolveAll: resolver()}

var assign = __webpack_require__(/*! ../constant/assign */ "../../node_modules/micromark/dist/constant/assign.js")

var shallow = __webpack_require__(/*! ../util/shallow */ "../../node_modules/micromark/dist/util/shallow.js")

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: resolver(field === 'text' ? resolveAllLineSuffixes : undefined)
  }

  function initializeText(effects) {
    var self = this
    var constructs = this.parser.constructs[field]
    var text = effects.attempt(constructs, start, notText)

    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code)
        return
      }

      effects.enter('data')
      effects.consume(code)
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data')
        return text(code)
      }

      // Data.
      effects.consume(code)
      return data
    }

    function atBreak(code) {
      var list = constructs[code]
      var index = -1

      if (code === null) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function resolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1
    var enter

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}

// A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)
function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1
  var chunks
  var data
  var chunk
  var index
  var bufferIndex
  var size
  var tabs
  var token

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      data = events[eventIndex - 1][1]
      chunks = context.sliceStream(data)
      index = chunks.length
      bufferIndex = -1
      size = 0
      tabs = undefined

      while (index--) {
        chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        }
        // Number
        else if (chunk === -2) {
          tabs = true
          size++
        } else if (chunk === -1) {
          // Empty
        } else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',

          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },

          end: shallow(data.end)
        }

        data.end = shallow(token.start)

        if (data.start.offset === data.end.offset) {
          assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )

          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}


/***/ }),

/***/ "../../node_modules/micromark/dist/parse.js":
/*!*************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/parse.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createParser

var initializeContent = __webpack_require__(/*! ./initialize/content */ "../../node_modules/micromark/dist/initialize/content.js")
var initializeDocument = __webpack_require__(/*! ./initialize/document */ "../../node_modules/micromark/dist/initialize/document.js")
var initializeFlow = __webpack_require__(/*! ./initialize/flow */ "../../node_modules/micromark/dist/initialize/flow.js")
var initializeText = __webpack_require__(/*! ./initialize/text */ "../../node_modules/micromark/dist/initialize/text.js")
var constructs = __webpack_require__(/*! ./constructs */ "../../node_modules/micromark/dist/constructs.js")
var createTokenizer = __webpack_require__(/*! ./util/create-tokenizer */ "../../node_modules/micromark/dist/util/create-tokenizer.js")
var combineExtensions = __webpack_require__(/*! ./util/combine-extensions */ "../../node_modules/micromark/dist/util/combine-extensions.js")
var miniflat = __webpack_require__(/*! ./util/miniflat */ "../../node_modules/micromark/dist/util/miniflat.js")

function createParser(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),

    content: create(initializeContent),
    document: create(initializeDocument),
    flow: create(initializeFlow),
    string: create(initializeText.string),
    text: create(initializeText.text)
  }

  return parser

  function create(initializer) {
    return creator
    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/postprocess.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/postprocess.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = postprocess

var subtokenize = __webpack_require__(/*! ./util/subtokenize */ "../../node_modules/micromark/dist/util/subtokenize.js")

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}


/***/ }),

/***/ "../../node_modules/micromark/dist/preprocess.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/preprocess.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = preprocessor

var search = /[\0\t\n\r]/g

function preprocessor() {
  var start = true
  var column = 1
  var buffer = ''
  var atCarriageReturn

  return preprocess

  function preprocess(value, encoding, end) {
    var chunks = []
    var match
    var next
    var startPosition
    var endPosition
    var code

    value = buffer + value.toString(encoding)
    startPosition = 0
    buffer = ''

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition = match ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(-5)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        if (code === 0) {
          chunks.push(65533)
          column++
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4
          chunks.push(-2)
          while (column++ < next) chunks.push(-1)
        } else if (code === 10) {
          chunks.push(-4)
          column = 1
        }
        // Must be carriage return.
        else {
          atCarriageReturn = true
          column = 1
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5)
      if (buffer) chunks.push(buffer)
      chunks.push(null)
    }

    return chunks
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/attention.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/attention.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAttention
exports.resolveAll = resolveAllAttention

var shallow = __webpack_require__(/*! ../util/shallow */ "../../node_modules/micromark/dist/util/shallow.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var classifyCharacter = __webpack_require__(/*! ../util/classify-character */ "../../node_modules/micromark/dist/util/classify-character.js")
var movePoint = __webpack_require__(/*! ../util/move-point */ "../../node_modules/micromark/dist/util/move-point.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all */ "../../node_modules/micromark/dist/util/resolve-all.js")

// Take all events and resolve attention to emphasis or strong.
function resolveAllAttention(events, context) {
  var index = -1
  var open
  var group
  var text
  var openingSequence
  var closingSequence
  var use
  var nextEvents
  var offset

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          }

          // Number of markers to use from the sequence.
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1

          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: movePoint(shallow(events[open][1].end), -use),
            end: shallow(events[open][1].end)
          }

          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: shallow(events[index][1].start),
            end: movePoint(shallow(events[index][1].start), use)
          }

          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: shallow(events[open][1].end),
            end: shallow(events[index][1].start)
          }

          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: shallow(openingSequence.start),
            end: shallow(closingSequence.end)
          }

          events[open][1].end = shallow(openingSequence.start)
          events[index][1].start = shallow(closingSequence.end)

          nextEvents = []

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ])
          }

          // Opening.
          chunkedSplice(nextEvents, nextEvents.length, 0, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ])

          // Between.
          chunkedSplice(
            nextEvents,
            nextEvents.length,
            0,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          )

          // Closing.
          chunkedSplice(nextEvents, nextEvents.length, 0, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ])

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ])
          } else {
            offset = 0
          }

          chunkedSplice(events, open - 1, index - open + 3, nextEvents)

          index = open + nextEvents.length - offset - 2
          break
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data'
    }
  }

  return events
}

function tokenizeAttention(effects, ok) {
  var before = classifyCharacter(this.previous)
  var marker

  return start

  function start(code) {
    effects.enter('attentionSequence')
    marker = code
    return sequence(code)
  }

  function sequence(code) {
    var token
    var after
    var open
    var close

    if (code === marker) {
      effects.consume(code)
      return sequence
    }

    token = effects.exit('attentionSequence')
    after = classifyCharacter(code)
    open = !after || (after === 2 && before)
    close = !before || (before === 2 && after)
    token._open = marker === 42 ? open : open && (before || !close)
    token._close = marker === 42 ? close : close && (after || !open)
    return ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/autolink.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/autolink.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAutolink

var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "../../node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "../../node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiAtext = __webpack_require__(/*! ../character/ascii-atext */ "../../node_modules/micromark/dist/character/ascii-atext.js")
var asciiControl = __webpack_require__(/*! ../character/ascii-control */ "../../node_modules/micromark/dist/character/ascii-control.js")

function tokenizeAutolink(effects, ok, nok) {
  var size

  return start

  function start(code) {
    effects.enter('autolink')
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.enter('autolinkProtocol')
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      size = 1
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code)
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol')
      return end(code)
    }

    if (code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail'
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code)
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.exit('autolink')
    return ok
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/block-quote.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/block-quote.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeBlockQuoteStart
exports.continuation = {tokenize: tokenizeBlockQuoteContinuation}
exports.exit = exit

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {_container: true})
        self.containerState.open = true
      }

      effects.enter('blockQuotePrefix')
      effects.enter('blockQuoteMarker')
      effects.consume(code)
      effects.exit('blockQuoteMarker')
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace')
      effects.consume(code)
      effects.exit('blockQuotePrefixWhitespace')
      effects.exit('blockQuotePrefix')
      return ok
    }

    effects.exit('blockQuotePrefix')
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return createSpace(
    effects,
    effects.attempt(exports, ok, nok),
    'linePrefix',
    4
  )
}

function exit(effects) {
  effects.exit('blockQuote')
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/character-escape.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/character-escape.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCharacterEscape

var asciiPunctuation = __webpack_require__(/*! ../character/ascii-punctuation */ "../../node_modules/micromark/dist/character/ascii-punctuation.js")

function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('characterEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    effects.exit('escapeMarker')
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue')
      effects.consume(code)
      effects.exit('characterEscapeValue')
      effects.exit('characterEscape')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/character-reference.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/character-reference.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCharacterReference

var decode = __webpack_require__(/*! parse-entities/decode-entity */ "../../node_modules/parse-entities/decode-entity.browser.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "../../node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ "../../node_modules/micromark/dist/character/ascii-digit.js")
var asciiHexDigit = __webpack_require__(/*! ../character/ascii-hex-digit */ "../../node_modules/micromark/dist/character/ascii-hex-digit.js")

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this
  var size = 0
  var max
  var test

  return start

  function start(code) {
    effects.enter('characterReference')
    effects.enter('characterReferenceMarker')
    effects.consume(code)
    effects.exit('characterReferenceMarker')
    return open
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric')
      effects.consume(code)
      effects.exit('characterReferenceMarkerNumeric')
      return numeric
    }

    effects.enter('characterReferenceValue')
    max = 31
    test = asciiAlphanumeric
    return value(code)
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal')
      effects.consume(code)
      effects.exit('characterReferenceMarkerHexadecimal')
      effects.enter('characterReferenceValue')
      max = 6
      test = asciiHexDigit
      return value
    }

    effects.enter('characterReferenceValue')
    max = 7
    test = asciiDigit
    return value(code)
  }

  function value(code) {
    var token

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue')

      if (test === asciiAlphanumeric && !decode(self.sliceSerialize(token))) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker')
      effects.consume(code)
      effects.exit('characterReferenceMarker')
      effects.exit('characterReference')
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code)
      return value
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/code-fenced.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/code-fenced.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeFenced
exports.concrete = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")

var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "../../node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this
  var initialPrefix = prefixSize(this.events, 'linePrefix')
  var sizeOpen = 0
  var marker

  return start

  function start(code) {
    effects.enter('codeFenced')
    effects.enter('codeFencedFence')
    effects.enter('codeFencedFenceSequence')
    marker = code
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence')
    return sizeOpen < 3
      ? nok(code)
      : createSpace(effects, infoOpen, 'whitespace')(code)
  }

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo')
    effects.enter('chunkString', {contentType: 'string'})
    return info(code)
  }

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceInfo')
      return createSpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return info
  }

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta')
    effects.enter('chunkString', {contentType: 'string'})
    return meta(code)
  }

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceMeta')
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return meta
  }

  function openAfter(code) {
    effects.exit('codeFencedFence')
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return effects.attempt(
        {tokenize: tokenizeClosingFence, partial: true},
        after,
        initialPrefix
          ? createSpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('codeFlowValue')
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return content(code)
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit('codeFenced')
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0

    return createSpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('codeFencedFence')
      effects.enter('codeFencedFenceSequence')
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence')
      return createSpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence')
        return ok(code)
      }

      return nok(code)
    }
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/code-indented.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/code-indented.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeIndented
exports.resolve = resolveCodeIndented

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "../../node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

var continuedIndent = {tokenize: tokenizeContinuedIndent, partial: true}

function resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }

  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])

  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterInitial,
    'linePrefix',

    4 + 1
  )

  function afterInitial(code) {
    // Flow checks blank lines first, so we don’t have EOL/EOF.

    if (prefixSize(self.events, 'linePrefix') < 4) {
      return nok(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function afterPrefix(code) {
    if (code === null) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(continuedIndent, afterPrefix, ok)(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeContinuedIndent(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'linePrefix',

    4 + 1
  )

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')

      return createSpace(
        effects,
        afterPrefix,
        'linePrefix',

        4 + 1
      )
    }

    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/code-text.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/code-text.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeText
exports.resolve = resolveCodeText
exports.previous = previous

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4
  var headEnterIndex = 3
  var index
  var enter

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          'codeTextPadding'

        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var self = this
  var sizeOpen = 0
  var size
  var token

  return start

  function start(code) {
    effects.enter('codeText')
    effects.enter('codeTextSequence')
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code)
      sizeOpen++
      return openingSequence
    }

    effects.exit('codeTextSequence')
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    }

    // Closing fence?
    // Could also be data.
    if (code === 96) {
      token = effects.enter('codeTextSequence')
      size = 0
      return closingSequence(code)
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return gap
    }

    // Data.
    effects.enter('codeTextData')
    return data(code)
  }

  // In code.
  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData')
      return gap(code)
    }

    effects.consume(code)
    return data
  }

  // Closing fence.
  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code)
      size++
      return closingSequence
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit('codeTextSequence')
      effects.exit('codeText')
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = 'codeTextData'
    return data(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/content.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/content.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeContent
exports.resolve = resolveContent
exports.interruptible = true
exports.lazy = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var subtokenize = __webpack_require__(/*! ../util/subtokenize */ "../../node_modules/micromark/dist/util/subtokenize.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "../../node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

var lookaheadConstruct = {tokenize: tokenizeLookaheadConstruct, partial: true}

// Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.
function resolveContent(events) {
  subtokenize(events)
  return events
}

function tokenizeContent(effects, ok) {
  var previous

  return start

  function start(code) {
    effects.enter('content')
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    })

    return data(code)
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        lookaheadConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code)
    return data
  }

  function contentEnd(code) {
    effects.exit('chunkContent')
    effects.exit('content')
    return ok(code)
  }

  function contentContinue(code) {
    effects.consume(code)
    effects.exit('chunkContent')
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    })

    return data
  }
}

function tokenizeLookaheadConstruct(effects, ok, nok) {
  var self = this

  return startLookahead

  function startLookahead(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, prefixed, 'linePrefix')
  }

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    if (prefixSize(self.events, 'linePrefix') < 4) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/definition.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/definition.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeDefinition

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ "../../node_modules/micromark/dist/util/normalize-identifier.js")

var createDestination = __webpack_require__(/*! ./factory-destination */ "../../node_modules/micromark/dist/tokenize/factory-destination.js")
var createLabel = __webpack_require__(/*! ./factory-label */ "../../node_modules/micromark/dist/tokenize/factory-label.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")
var createWhitespace = __webpack_require__(/*! ./factory-whitespace */ "../../node_modules/micromark/dist/tokenize/factory-whitespace.js")
var createTitle = __webpack_require__(/*! ./factory-title */ "../../node_modules/micromark/dist/tokenize/factory-title.js")

function tokenizeDefinition(effects, ok, nok) {
  var self = this
  var destinationAfter = effects.attempt(
    {tokenize: tokenizeTitle, partial: true},
    createSpace(effects, after, 'whitespace'),
    createSpace(effects, after, 'whitespace')
  )

  var identifier

  return start

  function start(code) {
    effects.enter('definition')
    return createLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === 58) {
      effects.enter('definitionMarker')
      effects.consume(code)
      effects.exit('definitionMarker')

      // Note: blank lines can’t exist in content.
      return createWhitespace(
        effects,
        createDestination(
          effects,
          destinationAfter,
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition')

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier)
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? createWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return createTitle(
        effects,
        createSpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/factory-destination.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/factory-destination.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createDestination

var asciiControl = __webpack_require__(/*! ../character/ascii-control */ "../../node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

// eslint-disable-next-line max-params
function createDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity
  var balance = 0

  return start

  function start(code) {
    if (code === 60) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return destinationEnclosedBefore
    }

    if (asciiControl(code)) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter('chunkString', {contentType: 'string'})
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter('chunkString', {contentType: 'string'})
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString')
      effects.exit(stringType)
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code)
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code)
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString')
        effects.exit(stringType)
        effects.exit(rawType)
        effects.exit(type)
        return ok(code)
      }

      effects.consume(code)
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString')
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code)
    return code === 92 ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code)
      return destinationRaw
    }

    return destinationRaw(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/factory-label.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/factory-label.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createLabel

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

// eslint-disable-next-line max-params
function createLabel(effects, ok, nok, type, markerType, stringType) {
  var self = this
  var size = 0
  var data

  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    effects.enter(stringType)
    return atBreak
  }

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* istanbul ignore next - footnotes. */
      (code === 94 &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return atBreak
    }

    effects.enter('chunkString', {contentType: 'string'})
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString')
      return atBreak(code)
    }

    effects.consume(code)
    data = data || !markdownSpace(code)
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return label
    }

    return label(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/factory-space.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/factory-space.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createSpace

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

function createSpace(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity
  var size

  return start

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type)
      size = 0
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/factory-title.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/factory-title.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createTitle

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

// eslint-disable-next-line max-params
function createTitle(effects, ok, nok, type, markerType, stringType) {
  var marker

  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    marker = code === 40 ? 41 : code
    return atFirstTitleBreak
  }

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    return atTitleBreak(code)
  }

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType)
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return createSpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {contentType: 'string'})
    return title(code)
  }

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      return atTitleBreak(code)
    }

    effects.consume(code)
    return code === 92 ? titleEscape : title
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code)
      return title
    }

    return title(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/factory-whitespace.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/factory-whitespace.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createWhitespace

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function createWhitespace(effects, ok) {
  var seen
  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return createSpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/hard-break-escape.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/hard-break-escape.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHardBreakEscape

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('hardBreakEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker')
      effects.exit('hardBreakEscape')
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/heading-atx.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/heading-atx.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAtxHeading
exports.resolve = resolveAtxHeading

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function resolveAtxHeading(events, context) {
  var contentEnd = events.length - 2
  var contentStart = 3
  var content
  var text

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }

    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    }

    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

function tokenizeAtxHeading(effects, ok, nok) {
  var self = this
  var size = 0

  return start

  function start(code) {
    effects.enter('atxHeading')
    effects.enter('atxHeadingSequence')
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code)
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence')
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence')
      return sequence(code)
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading')
      return ok(code)
    }

    if (markdownSpace(code)) {
      return createSpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText')
    return data(code)
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code)
      return sequence
    }

    effects.exit('atxHeadingSequence')
    return headingBreak(code)
  }

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText')
      return headingBreak(code)
    }

    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/html-flow.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/html-flow.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHtml
exports.resolveTo = resolveToHtml
exports.concrete = true

var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "../../node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "../../node_modules/micromark/dist/character/ascii-alphanumeric.js")

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "../../node_modules/micromark/dist/constant/from-char-code.js")
var basics = __webpack_require__(/*! ../constant/html-block-names */ "../../node_modules/micromark/dist/constant/html-block-names.js")
var raws = __webpack_require__(/*! ../constant/html-raw-names */ "../../node_modules/micromark/dist/constant/html-raw-names.js")

var blank = __webpack_require__(/*! ./partial-blank-line */ "../../node_modules/micromark/dist/tokenize/partial-blank-line.js")

var nextBlank = {tokenize: tokenizeNextBlank, partial: true}

function resolveToHtml(events) {
  var index = events.length

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start
    // Remove the line prefix.
    events.splice(index - 2, 2)
  }

  return events
}

function tokenizeHtml(effects, ok, nok) {
  var self = this
  var kind
  var startTag
  var buffer
  var index
  var marker

  return start

  function start(code) {
    effects.enter('htmlFlow')
    effects.enter('htmlFlowData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      kind = 3
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      startTag = true
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code)
      kind = 2
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code)
      kind = 5
      buffer = 'CDATA['
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      kind = 4
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code)
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      if (code !== 47 && startTag && raws.indexOf(buffer.toLowerCase()) > -1) {
        kind = 1
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (basics.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6

        if (code === 47) {
          effects.consume(code)
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7
      // Do not support complete HTML when interrupting.
      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code)
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code)
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    marker = undefined
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return completeAttributeValueQuotedAfter
    }

    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAfter
    }

    return code === null || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code)
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code)
      return continuationCharacterDataInside
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlank,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code)
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData')
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return htmlContinueStart
    }

    effects.enter('htmlFlowData')
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === 62 && raws.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code)
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 6) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code)
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData')
      return done(code)
    }

    effects.consume(code)
    return continuationClose
  }

  function done(code) {
    effects.exit('htmlFlow')
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    effects.exit('htmlFlowData')
    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    return effects.attempt(blank, ok, nok)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/html-text.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/html-text.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHtml

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")
var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "../../node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "../../node_modules/micromark/dist/character/ascii-alphanumeric.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeHtml(effects, ok, nok) {
  var marker
  var buffer
  var index
  var returnState

  return start

  function start(code) {
    effects.enter('htmlText')
    effects.enter('htmlTextData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code)
      buffer = 'CDATA['
      index = 0
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment
      return atLineEnding(code)
    }

    effects.consume(code)
    return comment
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code)
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataClose
    }

    effects.consume(code)
    return cdata
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return atLineEnding(code)
    }

    effects.consume(code)
    return declaration
  }

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code)
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction
      return atLineEnding(code)
    }

    effects.consume(code)
    return instruction
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code)
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    marker = undefined
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return atLineEnding(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  // We can’t have blank lines in content, so no need to worry about empty
  // tokens.
  function atLineEnding(code) {
    effects.exit('htmlTextData')
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, afterPrefix, 'linePrefix', 4)
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData')
    return returnState(code)
  }

  function end(code) {
    if (code === 62) {
      effects.consume(code)
      effects.exit('htmlTextData')
      effects.exit('htmlText')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/label-end.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/label-end.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeLabelEnd
exports.resolveTo = resolveToLabelEnd
exports.resolveAll = resolveAllLabelEnd

var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")

var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ "../../node_modules/micromark/dist/util/normalize-identifier.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all */ "../../node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow */ "../../node_modules/micromark/dist/util/shallow.js")
var createDestination = __webpack_require__(/*! ./factory-destination */ "../../node_modules/micromark/dist/tokenize/factory-destination.js")
var createLabel = __webpack_require__(/*! ./factory-label */ "../../node_modules/micromark/dist/tokenize/factory-label.js")
var createWhitespace = __webpack_require__(/*! ./factory-whitespace */ "../../node_modules/micromark/dist/tokenize/factory-whitespace.js")
var createTitle = __webpack_require__(/*! ./factory-title */ "../../node_modules/micromark/dist/tokenize/factory-title.js")

var resource = {tokenize: tokenizeResource}
var fullReference = {tokenize: tokenizeFullReference}
var collapsedReference = {tokenize: tokenizeCollapsedReference}

function resolveAllLabelEnd(events) {
  var index = -1
  var token

  while (++index < events.length) {
    token = events[index][1]

    if (
      !token._used &&
      (token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd')
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2)
      token.type = 'data'
      index++
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length
  var offset = 0
  var group
  var label
  var text
  var token
  var open
  var close
  var media

  // Find an opening.
  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index

        if (token.type !== 'labelLink') {
          offset = 2
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index
    }
  }

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: shallow(events[open][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  label = {
    type: 'label',
    start: shallow(events[open][1].start),
    end: shallow(events[close][1].end)
  }

  text = {
    type: 'labelText',
    start: shallow(events[open + offset + 2][1].end),
    end: shallow(events[close - 2][1].start)
  }

  media = [
    ['enter', group, context],
    ['enter', label, context]
  ]

  // Opening marker.
  chunkedSplice(
    media,
    media.length,
    0,
    events.slice(open + 1, open + offset + 3)
  )

  // Text open.
  chunkedSplice(media, media.length, 0, [['enter', text, context]])

  // Between.
  chunkedSplice(
    media,
    media.length,
    0,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  )

  // Text close, marker close, label close.
  chunkedSplice(media, media.length, 0, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ])

  // Reference, resource, or so.
  chunkedSplice(media, media.length, 0, events.slice(close + 1))

  // Media close.
  chunkedSplice(media, media.length, 0, [['exit', group, context]])

  chunkedSplice(events, open, events.length, media)

  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var labelStart
  var defined

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  function start(code) {
    if (!labelStart) {
      return nok(code)
    }

    // It’s a balanced bracket, but contains a link.
    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier(
          self.sliceSerialize({start: labelStart.end, end: self.now()})
        )
      ) > -1
    effects.enter('labelEnd')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelEnd')
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(resource, ok, defined ? ok : balanced)(code)
    }

    // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
    if (code === 91) {
      return effects.attempt(
        fullReference,
        ok,
        defined ? effects.attempt(collapsedReference, ok, balanced) : balanced
      )(code)
    }

    // Shortcut reference: `[asd]`?
    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('resource')
    effects.enter('resourceMarker')
    effects.consume(code)
    effects.exit('resourceMarker')
    return createWhitespace(effects, open)
  }

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return createDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? createWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return createTitle(
        effects,
        createWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker')
      effects.consume(code)
      effects.exit('resourceMarker')
      effects.exit('resource')
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    return createLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('reference')
    effects.enter('referenceMarker')
    effects.consume(code)
    effects.exit('referenceMarker')
    return open
  }

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker')
      effects.consume(code)
      effects.exit('referenceMarker')
      effects.exit('reference')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/label-start-image.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/label-start-image.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizelabelImage
exports.resolveAll = __webpack_require__(/*! ./label-end */ "../../node_modules/micromark/dist/tokenize/label-end.js").resolveAll

function tokenizelabelImage(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    effects.enter('labelImage')
    effects.enter('labelImageMarker')
    effects.consume(code)
    effects.exit('labelImageMarker')
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker')
      effects.consume(code)
      effects.exit('labelMarker')
      effects.exit('labelImage')
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/label-start-link.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/label-start-link.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizelabelLink
exports.resolveAll = __webpack_require__(/*! ./label-end */ "../../node_modules/micromark/dist/tokenize/label-end.js").resolveAll

function tokenizelabelLink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    effects.enter('labelLink')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelLink')
    return after
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/line-ending.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/line-ending.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeWhitespace

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeWhitespace(effects, ok) {
  return start

  function start(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, ok, 'linePrefix')
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/list.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/list.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeListStart
exports.continuation = {tokenize: tokenizeListContinuation}
exports.exit = tokenizeListEnd

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ "../../node_modules/micromark/dist/character/ascii-digit.js")

var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "../../node_modules/micromark/dist/util/prefix-size.js")
var sizeChunks = __webpack_require__(/*! ../util/size-chunks */ "../../node_modules/micromark/dist/util/size-chunks.js")
var thematicBreak = __webpack_require__(/*! ./thematic-break */ "../../node_modules/micromark/dist/tokenize/thematic-break.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ./partial-blank-line */ "../../node_modules/micromark/dist/tokenize/partial-blank-line.js")

function tokenizeListStart(effects, ok, nok) {
  var self = this
  var initialSize = prefixSize(self.events, 'linePrefix')
  var valueSize

  return start

  function start(code) {
    if (
      (code === 42 || code === 43 || code === 45) &&
      (!self.containerState.marker || code === self.containerState.marker)
    ) {
      return code === 42 || code === 45
        ? effects.check(thematicBreak, nok, unordered)(code)
        : unordered(code)
    }

    if (
      asciiDigit(code) &&
      (!self.containerState.type || self.containerState.type === 'listOrdered')
    ) {
      return ordered(code)
    }

    return nok(code)
  }

  function unordered(code) {
    if (!self.containerState.type) {
      self.containerState.type = 'listUnordered'
      effects.enter(self.containerState.type, {_container: true})
    }

    effects.enter('listItemPrefix')
    return atMarker(code)
  }

  function ordered(code) {
    if (self.containerState.type || !self.interrupt || code === 49) {
      if (!self.containerState.type) {
        self.containerState.type = 'listOrdered'
        effects.enter(self.containerState.type, {_container: true})
      }

      effects.enter('listItemPrefix')
      effects.enter('listItemValue')
      effects.consume(code)
      valueSize = 1
      return self.interrupt ? afterValue : inside
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++valueSize < 10) {
      effects.consume(code)
      return inside
    }

    return afterValue(code)
  }

  function afterValue(code) {
    effects.exit('listItemValue')

    return code === 41 || code === 46 ? atMarker(code) : nok(code)
  }

  function atMarker(code) {
    self.containerState.marker = self.containerState.marker || code

    if (code === self.containerState.marker) {
      effects.enter('listItemMarker')
      effects.consume(code)
      effects.exit('listItemMarker')
      return effects.check(
        blank,
        // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(
          {tokenize: tokenizeListItemPrefixWhitespace, partial: true},
          endOfPrefix,
          otherPrefix
        )
      )
    }

    return nok(code)
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace')
      effects.consume(code)
      effects.exit('listItemPrefixWhitespace')
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize + sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this

  self.containerState._closeFlow = undefined

  return effects.check(blank, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine
    return ok(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
    return effects.attempt(
      {tokenize: tokenizeIndent, partial: true},
      ok,
      notInCurrentItem
    )(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true
    // As we’re closing flow, we’re no longer interrupting
    self.interrupt = undefined
    return createSpace(
      effects,
      effects.attempt(exports, ok, nok),
      'linePrefix',
      4
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'listItemIndent',

    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize(self.events, 'listItemIndent') ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type)
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',

    4 + 1
  )

  function afterPrefix(code) {
    return markdownSpace(code) ||
      !prefixSize(self.events, 'listItemPrefixWhitespace')
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/partial-blank-line.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/partial-blank-line.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeBlankLine
exports.partial = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeBlankLine(effects, ok, nok) {
  return createSpace(effects, afterWhitespace, 'linePrefix')

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/setext-underline.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/setext-underline.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeSetextUnderline
exports.resolveTo = resolveToSetextUnderline

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")

var shallow = __webpack_require__(/*! ../util/shallow */ "../../node_modules/micromark/dist/util/shallow.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function resolveToSetextUnderline(events, context) {
  var index = events.length
  var content
  var text
  var definition
  var heading

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index
      }
    }
    // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index
      }
    }
  }

  heading = {
    type: 'setextHeading',
    start: shallow(events[text][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  // Change the paragraph to setext heading text.
  events[text][1].type = 'setextHeadingText'

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = shallow(events[definition][1].end)
  } else {
    events[content][1] = heading
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context])

  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var marker
  var paragraph

  // Find an opening.
  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph'
      break
    }
  }

  return start

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine')
      effects.enter('setextHeadingLineSequence')
      marker = code
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code)
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence')
    return createSpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine')
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/tokenize/thematic-break.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/tokenize/thematic-break.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeThematicBreak

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "../../node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "../../node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0
  var marker

  return start

  function start(code) {
    effects.enter('thematicBreak')
    marker = code
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence')
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return createSpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak')
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit('thematicBreakSequence')
    return atBreak(code)
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/chunked-splice.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/chunked-splice.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = chunkedSplice

var v8MaxSafeChunkSize = 10000

// `Array#splice` takes all items to be inserted as individual argument which
// causes a stack overflow in V8 when trying to insert 100k items for instance.
function chunkedSplice(list, start, remove, items) {
  var end = list.length
  var chunkStart = 0
  var result
  var parameters

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < v8MaxSafeChunkSize) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    return [].splice.apply(list, parameters)
  }

  // Delete `remove` items starting from `start`
  result = [].splice.apply(list, [start, remove])

  // Insert the items in chunks to not cause stack overflows.
  while (chunkStart < items.length) {
    parameters = items.slice(chunkStart, chunkStart + v8MaxSafeChunkSize)
    parameters.unshift(start, 0)
    ;[].splice.apply(list, parameters)

    chunkStart += v8MaxSafeChunkSize
    start += v8MaxSafeChunkSize
  }

  return result
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/classify-character.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/classify-character.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = classifyCharacter

var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var unicodePunctuation = __webpack_require__(/*! ../character/unicode-punctuation */ "../../node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! ../character/unicode-whitespace */ "../../node_modules/micromark/dist/character/unicode-whitespace.js")

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation(code)) {
    return 2
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/combine-extensions.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/combine-extensions.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = combineExtensions

var own = __webpack_require__(/*! ../constant/has-own-property */ "../../node_modules/micromark/dist/constant/has-own-property.js")
var miniflat = __webpack_require__(/*! ./miniflat */ "../../node_modules/micromark/dist/util/miniflat.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")

// Combine several syntax extensions into one.
function combineExtensions(extensions) {
  var all = {}
  var index = -1

  while (++index < extensions.length) {
    extension(all, extensions[index])
  }

  return all
}

function extension(all, extension) {
  var hook
  var left
  var right
  var code

  for (hook in extension) {
    left = own.call(all, hook) ? all[hook] : (all[hook] = {})
    right = extension[hook]

    for (code in right) {
      left[code] = constructs(
        miniflat(right[code]),
        own.call(left, code) ? left[code] : []
      )
    }
  }
}

function constructs(list, existing) {
  var index = -1
  var before = []

  while (++index < list.length) {
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  chunkedSplice(existing, 0, 0, before)
  return existing
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/create-tokenizer.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/create-tokenizer.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createTokenizer

var assign = __webpack_require__(/*! ../constant/assign */ "../../node_modules/micromark/dist/constant/assign.js")

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "../../node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow */ "../../node_modules/micromark/dist/util/shallow.js")
var serializeChunks = __webpack_require__(/*! ./serialize-chunks */ "../../node_modules/micromark/dist/util/serialize-chunks.js")
var sliceChunks = __webpack_require__(/*! ./slice-chunks */ "../../node_modules/micromark/dist/util/slice-chunks.js")
var resolveAll = __webpack_require__(/*! ./resolve-all */ "../../node_modules/micromark/dist/util/resolve-all.js")
var miniflat = __webpack_require__(/*! ./miniflat */ "../../node_modules/micromark/dist/util/miniflat.js")

// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function createTokenizer(parser, initialize, from) {
  var point = from ? shallow(from) : {line: 1, column: 1, offset: 0}
  var columnStart = {}
  var resolveAllConstructs = []
  var chunks = []
  var stack = []
  var consumed = true

  // Tools used for tokenizing.
  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {interrupt: true}),
    lazy: constructFactory(onsuccessfulcheck, {lazy: true})
  }

  // State and tools for resolving and serializing.
  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  }

  // The state function.
  var state = initialize.tokenize.call(context, effects)

  // Track which character we expect to be consumed, to catch bugs.
  var expectedCode

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize)
  }

  // Store where we are in the input stream.
  point._index = 0
  point._bufferIndex = -1

  return context

  function write(slice) {
    chunkedSplice(chunks, chunks.length, 0, slice)

    main()

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0)

    // Otherwise, resolve, and exit.
    context.events = resolveAll(resolveAllConstructs, context.events, context)

    return context.events
  }

  //
  // Tools.
  //

  function sliceSerialize(token) {
    return serializeChunks(sliceStream(token))
  }

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  function now() {
    return shallow(point)
  }

  function skip(value) {
    columnStart[value.line] = value.column
    accountForPotentialSkip()
  }

  //
  // State management.
  //

  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.
  function main() {
    var chunkIndex
    var chunk

    while (point._index < chunks.length) {
      chunk = chunks[point._index]

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex))
        }
      } else {
        go(chunk)
      }
    }
  }

  // Deal with one code.
  function go(code) {
    consumed = undefined

    expectedCode = code
    state = state(code)
  }

  // Move a character forward.
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++
      point.column = 1
      point.offset += code === -3 ? 2 : 1
      accountForPotentialSkip()
    } else if (code !== -1) {
      point.column++
      point.offset++
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++
    } else {
      point._bufferIndex++

      // At end of string chunk.
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1
        point._index++
      }
    }

    // Expose the previous character.
    context.previous = code

    // Mark as consumed.
    consumed = true
  }

  // Start a token.
  function enter(type, fields) {
    var token = fields || {}
    token.type = type
    token.start = now()

    context.events.push(['enter', token, context])

    stack.push(token)

    return token
  }

  // Stop a token.
  function exit(type) {
    var token = stack.pop()
    token.end = now()

    context.events.push(['exit', token, context])

    return token
  }

  // Use results.
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from)
  }

  // Discard results.
  function onsuccessfulcheck(construct, info) {
    info.restore()
  }

  // Factory to attempt/check/interrupt.
  function constructFactory(onreturn, fields) {
    return hook

    // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.
    function hook(constructs, returnState, bogusState) {
      var listOfConstructs
      var constructIndex
      var currentConstruct
      var info

      return constructs.tokenize || 'length' in constructs
        ? handleListOfConstructs(miniflat(constructs))
        : handleMapOfConstructs

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(
            /* istanbul ignore next - `null` is used by some extensions */
            constructs.null
              ? miniflat(constructs[code]).concat(miniflat(constructs.null))
              : constructs[code]
          )(code)
        }

        return bogusState(code)
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list
        constructIndex = 0
        return handleConstruct(list[constructIndex])
      }

      function handleConstruct(construct) {
        return start

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store()
          currentConstruct = construct

          if (!construct.partial) {
            context.currentConstruct = construct
          }

          return construct.tokenize.call(
            fields ? assign({}, context, fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      function ok(code) {
        consumed = true
        onreturn(currentConstruct, info)
        return returnState
      }

      function nok(code) {
        consumed = true
        info.restore()

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct)
    }

    if (construct.resolve) {
      chunkedSplice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }
  }

  function store() {
    var startPoint = now()
    var startPrevious = context.previous
    var startCurrentConstruct = context.currentConstruct
    var startEventsIndex = context.events.length
    var startStack = Array.from(stack)

    return {restore: restore, from: startEventsIndex}

    function restore() {
      point = startPoint
      context.previous = startPrevious
      context.currentConstruct = startCurrentConstruct
      context.events.length = startEventsIndex
      stack = startStack
      accountForPotentialSkip()
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line]
      point.offset += columnStart[point.line] - 1
    }
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/miniflat.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/miniflat.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = miniflat

function miniflat(value) {
  return value === null || value === undefined
    ? []
    : 'length' in value
    ? value
    : [value]
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/move-point.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/move-point.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = movePoint

// Note! `move` only works inside lines! It’s not possible to move past other
// chunks (replacement characters, tabs, or line endings).
function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
  return point
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/normalize-identifier.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/normalize-identifier.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalizeIdentifier

function normalizeIdentifier(value) {
  return (
    value
      // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ')
      // Trim.
      .replace(/^ | $/g, '')
      // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no object method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/prefix-size.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/prefix-size.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = prefixSize

var sizeChunks = __webpack_require__(/*! ./size-chunks */ "../../node_modules/micromark/dist/util/size-chunks.js")

function prefixSize(events, type) {
  var tail = events[events.length - 1]
  if (!tail || tail[1].type !== type) return 0
  return sizeChunks(tail[2].sliceStream(tail[1]))
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/regex-check.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/regex-check.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = regexCheck

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "../../node_modules/micromark/dist/constant/from-char-code.js")

function regexCheck(regex) {
  return check
  function check(code) {
    return regex.test(fromCharCode(code))
  }
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/resolve-all.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/resolve-all.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = resolveAll

function resolveAll(constructs, events, context) {
  var called = []
  var index = -1
  var resolve

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context)
      called.push(resolve)
    }
  }

  return events
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/safe-from-int.js":
/*!**************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/safe-from-int.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = safeFromInt

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "../../node_modules/micromark/dist/constant/from-char-code.js")

function safeFromInt(value, base) {
  var code = parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) ||
    // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) ||
    // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 ||
    // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return fromCharCode(code)
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/serialize-chunks.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/serialize-chunks.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = serializeChunks

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "../../node_modules/micromark/dist/constant/from-char-code.js")

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === -5) {
      value = '\r'
    } else if (chunk === -4) {
      value = '\n'
    } else if (chunk === -3) {
      value = '\r' + '\n'
    } else if (chunk === -2) {
      value = '\t'
    } else if (chunk === -1) {
      if (atTab) continue
      value = ' '
    } else {
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === -2
    result.push(value)
  }

  return result.join('')
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/shallow.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/shallow.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = shallow

var assign = __webpack_require__(/*! ../constant/assign */ "../../node_modules/micromark/dist/constant/assign.js")

function shallow(object) {
  return assign({}, object)
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/size-chunks.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/size-chunks.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = sizeChunks

// Measure the number of character codes in chunks.
// Counts tabs based on their expanded size, and CR+LF as one character.
function sizeChunks(chunks) {
  var index = -1
  var size = 0

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1
  }

  return size
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/slice-chunks.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/slice-chunks.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = sliceChunks

function sliceChunks(chunks, token) {
  var startIndex = token.start._index
  var startBufferIndex = token.start._bufferIndex
  var endIndex = token.end._index
  var endBufferIndex = token.end._bufferIndex
  var view

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
  } else {
    view = chunks.slice(startIndex, endIndex)

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex)
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex))
    }
  }

  return view
}


/***/ }),

/***/ "../../node_modules/micromark/dist/util/subtokenize.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/micromark/dist/util/subtokenize.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = subtokenize

var assign = __webpack_require__(/*! ../constant/assign */ "../../node_modules/micromark/dist/constant/assign.js")

var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "../../node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow */ "../../node_modules/micromark/dist/util/shallow.js")

function subtokenize(events) {
  var jumps = {}
  var index = -1
  var event
  var lineIndex
  var otherIndex
  var otherEvent
  var parameters
  var subevents
  var more

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index]
    }

    event = events[index]

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events
      otherIndex = 0

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1].isInFirstContentOfListItem = true
            otherIndex++
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        assign(jumps, subcontent(events, index))
        index = jumps[index]
        more = true
      }
    }
    // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index
      lineIndex = undefined

      while (otherIndex--) {
        otherEvent = events[otherIndex]

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank'
            }

            otherEvent[1].type = 'lineEnding'
            lineIndex = otherIndex
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = shallow(events[lineIndex][1].start)

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index)
        parameters.unshift(event)
        chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters)
      }
    }
  }

  return !more
}

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1]
  var context = events[eventIndex][2]
  var startPosition = eventIndex - 1
  var startPositions = []
  var tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start)
  var childEvents = tokenizer.events
  var jumps = []
  var gaps = {}
  var stream
  var previous
  var index
  var entered
  var end
  var adjust

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {
      // Empty.
    }

    startPositions.push(startPosition)

    if (!token._tokenizer) {
      stream = context.sliceStream(token)

      if (!token.next) {
        stream.push(null)
      }

      if (previous) {
        tokenizer.defineSkip(token.start)
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true
      }

      tokenizer.write(stream)

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined
      }
    }

    // Unravel the next token.
    previous = token
    token = token.next
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  token = previous
  index = childEvents.length

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true
    } else if (
      // Find a void token that includes a break.
      entered &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      add(childEvents.slice(index + 1, end))

      // Help GC.
      token._tokenizer = token.next = undefined
      token = token.previous
      end = index + 1
    }
  }

  // Help GC.
  tokenizer.events = token._tokenizer = token.next = undefined

  // Do head:
  add(childEvents.slice(0, end))

  index = -1
  adjust = 0

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]
    adjust += jumps[index][1] - jumps[index][0] - 1
  }

  return gaps

  function add(slice) {
    var start = startPositions.pop()
    jumps.unshift([start, start + slice.length - 1])
    chunkedSplice(events, start, 2, slice)
  }
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

/***/ "../../node_modules/remark-parse/index.js":
/*!***********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ "../../node_modules/mdast-util-from-markdown/index.js")

function parse(options) {
  var self = this

  this.Parser = parse

  function parse(doc) {
    return fromMarkdown(
      doc,
      Object.assign({}, self.data('settings'), options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('micromarkExtensions') || [],
        mdastExtensions: self.data('fromMarkdownExtensions') || []
      })
    )
  }
}


/***/ }),

/***/ "../../node_modules/remark-stringify/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-stringify/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = stringify

var toMarkdown = __webpack_require__(/*! mdast-util-to-markdown */ "../../node_modules/mdast-util-to-markdown/index.js")

function stringify(options) {
  var self = this

  this.Compiler = compile

  function compile(tree) {
    return toMarkdown(
      tree,
      Object.assign({}, self.data('settings'), options, {
        // Note: this option is not in the readme.
        // The goal is for it to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('toMarkdownExtensions') || []
      })
    )
  }
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
var parse = __webpack_require__(/*! remark-parse */ "../../node_modules/remark-parse/index.js")
var stringify = __webpack_require__(/*! remark-stringify */ "../../node_modules/remark-stringify/index.js")

module.exports = unified().use(parse).use(stringify).freeze()


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

/***/ "../../node_modules/zwitch/index.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/zwitch/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

var noop = Function.prototype
var own = {}.hasOwnProperty

// Handle values based on a property.
function factory(key, options) {
  var settings = options || {}

  function one(value) {
    var fn = one.invalid
    var handlers = one.handlers

    if (value && own.call(value, key)) {
      fn = own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown
    }

    return (fn || noop).apply(this, arguments)
  }

  one.handlers = settings.handlers || {}
  one.invalid = settings.invalid
  one.unknown = settings.unknown

  return one
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvYmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWFscGhhbnVtZXJpY2FsL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1kZWNpbWFsL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1oZXhhZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbG9uZ2VzdC1zdHJlYWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9icmVhay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9oZWFkaW5nLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvaHRtbC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2ltYWdlLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2ltYWdlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9pbmxpbmUtY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvbGluay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9yb290LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvc3Ryb25nLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvdGV4dC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvam9pbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdW5zYWZlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2Fzc29jaWF0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLWJ1bGxldC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1mZW5jZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1saXN0LWl0ZW0taW5kZW50LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXF1b3RlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXJ1bGUtcmVwZWF0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXJ1bGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stc3Ryb25nLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NvbnRhaW5lci1mbG93LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NvbnRhaW5lci1waHJhc2luZy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9mb3JtYXQtY29kZS1hcy1pbmRlbnRlZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9mb3JtYXQtaGVhZGluZy1hcy1zZXRleHQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvZm9ybWF0LWxpbmstYXMtYXV0b2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvaW5kZW50LWxpbmVzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3NhZmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbm9kZV9tb2R1bGVzL3N0cmluZ2lmeS1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1hbHBoYS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWF0ZXh0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWRpZ2l0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktaGV4LWRpZ2l0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktcHVuY3R1YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9jb2Rlcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci91bmljb2RlLXdoaXRlc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9mcm9tLWNoYXItY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaHRtbC1ibG9jay1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaHRtbC1yYXctbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L3R5cGVzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC91bmljb2RlLXB1bmN0dWF0aW9uLXJlZ2V4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdHJ1Y3RzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9pbml0aWFsaXplL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvZmxvdy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS90ZXh0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvcG9zdHByb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3ByZXByb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2F0dGVudGlvbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvYXV0b2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2Jsb2NrLXF1b3RlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jaGFyYWN0ZXItZXNjYXBlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jaGFyYWN0ZXItcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb2RlLWZlbmNlZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS1pbmRlbnRlZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS10ZXh0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb250ZW50LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LWxhYmVsLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXNwYWNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXRpdGxlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXdoaXRlc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2hhcmQtYnJlYWstZXNjYXBlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9oZWFkaW5nLWF0eC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvaHRtbC1mbG93LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9odG1sLXRleHQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLWVuZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGFiZWwtc3RhcnQtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLXN0YXJ0LWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xpbmUtZW5kaW5nLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9saXN0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9wYXJ0aWFsLWJsYW5rLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3NldGV4dC11bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NodW5rZWQtc3BsaWNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NsYXNzaWZ5LWNoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9jb21iaW5lLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY3JlYXRlLXRva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9taW5pZmxhdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9tb3ZlLXBvaW50LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL25vcm1hbGl6ZS1pZGVudGlmaWVyLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3ByZWZpeC1zaXplLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3JlZ2V4LWNoZWNrLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3Jlc29sdmUtYWxsLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NhZmUtZnJvbS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvc2VyaWFsaXplLWNodW5rcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zaGFsbG93LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NpemUtY2h1bmtzLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NsaWNlLWNodW5rcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zdWJ0b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5icm93c2VyLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZXBlYXQtc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZXBsYWNlLWV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJvdWdoL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cm91Z2gvd3JhcC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pZmllZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pZmllZC9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlmaWVkL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS1tZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9jb3JlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdmZpbGUvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvendpdGNoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFrRDs7QUFFN0U7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BIWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYlk7O0FBRVosbUJBQW1CLG1CQUFPLENBQUMsb0VBQWlCO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQywwREFBWTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ1k7O0FBRVo7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGdHQUE4QjtBQUNuRCxlQUFlLG1CQUFPLENBQUMsOEVBQXNCO0FBQzdDLFlBQVksbUJBQU8sQ0FBQyw0RkFBZ0M7QUFDcEQsZ0JBQWdCLG1CQUFPLENBQUMsa0dBQW1DO0FBQzNELFVBQVUsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLDBGQUErQjtBQUNuRCwwQkFBMEIsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDNUUsa0JBQWtCLG1CQUFPLENBQUMsa0dBQW1DO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyx3RUFBc0I7QUFDM0MsbUJBQW1CLG1CQUFPLENBQUMsa0ZBQTJCO0FBQ3RELGtCQUFrQixtQkFBTyxDQUFDLG9GQUE0Qjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGdFQUFlOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDhFQUFzQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDhFQUFzQjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLFdBQVcsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFFcEQsaUJBQWlCO0FBQ2pCLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlDQUF5QztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNWRBOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLDhHQUFtQztBQUNwRSxnQ0FBZ0MsbUJBQU8sQ0FBQyxnSUFBNEM7QUFDcEYsb0JBQW9CLG1CQUFPLENBQUMsa0dBQTZCO0FBQ3pELGlCQUFpQixtQkFBTyxDQUFDLDRGQUEwQjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQywwR0FBaUM7O0FBRWpFLGtCQUFrQixtQkFBTyxDQUFDLG9GQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqYUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxtQkFBTyxDQUFDLGdJQUE0Qzs7QUFFcEYsMEJBQTBCLG1CQUFPLENBQUMsb0dBQThCO0FBQ2hFLG9CQUFvQixtQkFBTyxDQUFDLHdGQUF3QjtBQUNwRCxpQkFBaUIsbUJBQU8sQ0FBQyxrRkFBcUI7QUFDOUMsY0FBYyxtQkFBTyxDQUFDLDBFQUFpQjtBQUN2Qyx3QkFBd0IsbUJBQU8sQ0FBQyxnR0FBdUI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsb0ZBQWlCO0FBQzNDLHVCQUF1QixtQkFBTyxDQUFDLDhGQUFzQjtBQUNyRCxrQkFBa0IsbUJBQU8sQ0FBQyxvRkFBaUI7O0FBRTNDLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUNBQXVDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdVQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLDRFQUFhOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FD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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDalZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsNEVBQWU7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGdHQUE0Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGdHQUE0Qjs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGdHQUE0Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDckNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnRkFBb0I7O0FBRXpDO0FBQ0Esa0JBQWtCO0FBQ2xCOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnRkFBb0I7O0FBRXpDLG9CQUFvQixtQkFBTyxDQUFDLGtGQUFrQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsb0VBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL01ZOztBQUVaOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFO0FBQzFFLCtCQUErQjtBQUMvQixrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NZOztBQUVaOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLHNGQUEwQjs7QUFFckQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Qlk7O0FBRVo7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsa0ZBQXdCOztBQUVqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLG9EQUFTO0FBQy9CLFlBQVksbUJBQU8sQ0FBQyw4REFBYztBQUNsQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRTFDOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTs7QUFFYixXQUFXLG1CQUFPLENBQUMseURBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNqQlk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLG9EQUFXOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLDZFQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxrREFBUTtBQUM3QixZQUFZLG1CQUFPLENBQUMsbUZBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCLFlBQVksbUJBQU8sQ0FBQyxnREFBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaLFlBQVk7O0FB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Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWWTs7QUFFWjs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIwNTJiOTg2OTY0OGI0NDVlN2Q5ZS92ZW5kb3JzfmFib3V0fmxpY2Vuc2V+dG9zLnZlbmRvcnN+YWJvdXR+bGljZW5zZX50b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYWlsXG5cbmZ1bmN0aW9uIGJhaWwoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgeyAvKiovIH1cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxuLy8gSWYgbmFtZSBpcyAnX19wcm90b19fJywgYW5kIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBhdmFpbGFibGUsIGRlZmluZSBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5IG9uIHRhcmdldFxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBvcHRpb25zKSB7XG5cdGlmIChkZWZpbmVQcm9wZXJ0eSAmJiBvcHRpb25zLm5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBvcHRpb25zLm5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogb3B0aW9ucy5uZXdWYWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0W29wdGlvbnMubmFtZV0gPSBvcHRpb25zLm5ld1ZhbHVlO1xuXHR9XG59O1xuXG4vLyBSZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgX19wcm90b19fIGlmICdfX3Byb3RvX18nIGlzIG5vdCBhbiBvd24gcHJvcGVydHlcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgbmFtZSkge1xuXHRpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRpZiAoIWhhc093bi5jYWxsKG9iaiwgbmFtZSkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fSBlbHNlIGlmIChnT1BEKSB7XG5cdFx0XHQvLyBJbiBlYXJseSB2ZXJzaW9ucyBvZiBub2RlLCBvYmpbJ19fcHJvdG9fXyddIGlzIGJ1Z2d5IHdoZW4gb2JqIGhhc1xuXHRcdFx0Ly8gX19wcm90b19fIGFzIGFuIG93biBwcm9wZXJ0eS4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpIHdvcmtzLlxuXHRcdFx0cmV0dXJuIGdPUEQob2JqLCBuYW1lKS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqW25hbWVdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZTtcblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIGkgPSAxO1xuXHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0dmFyIGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH1cblx0aWYgKHRhcmdldCA9PSBudWxsIHx8ICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IGdldFByb3BlcnR5KHRhcmdldCwgbmFtZSk7XG5cdFx0XHRcdGNvcHkgPSBnZXRQcm9wZXJ0eShvcHRpb25zLCBuYW1lKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0c2V0UHJvcGVydHkodGFyZ2V0LCB7IG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpIH0pO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGNvcHkgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYWJldGljYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGFscGhhYmV0aWNhbC5cbmZ1bmN0aW9uIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLyogYS16ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgLyogQS1aICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYWxwaGFudW1lcmljYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGFscGhhbnVtZXJpY2FsLlxuZnVuY3Rpb24gYWxwaGFudW1lcmljYWwoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBhbHBoYWJldGljYWwoY2hhcmFjdGVyKSB8fCBkZWNpbWFsKGNoYXJhY3Rlcilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY2ltYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGRlY2ltYWwuXG5mdW5jdGlvbiBkZWNpbWFsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IC8qIDAtOSAqL1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGV4YWRlY2ltYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGhleGFkZWNpbWFsLlxuZnVuY3Rpb24gaGV4YWRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEwMikgLyogeiAqLyB8fFxuICAgIChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA3MCkgLyogWiAqLyB8fFxuICAgIChjb2RlID49IDQ4IC8qIEEgKi8gJiYgY29kZSA8PSA1NykgLyogWiAqL1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb25nZXN0U3RyZWFrXG5cbi8vIEdldCB0aGUgY291bnQgb2YgdGhlIGxvbmdlc3QgcmVwZWF0aW5nIHN0cmVhayBvZiBgY2hhcmFjdGVyYCBpbiBgdmFsdWVgLlxuZnVuY3Rpb24gbG9uZ2VzdFN0cmVhayh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIG1heGltdW0gPSAwXG4gIHZhciBleHBlY3RlZFxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycgfHwgY2hhcmFjdGVyLmxlbmd0aCAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyKVxuICBleHBlY3RlZCA9IGluZGV4XG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcblxuICAgIGlmIChpbmRleCA9PT0gZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChjb3VudCA+IG1heGltdW0pIHtcbiAgICAgICAgbWF4aW11bSA9IGNvdW50XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMVxuICAgIH1cblxuICAgIGV4cGVjdGVkID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlciwgZXhwZWN0ZWQpXG4gIH1cblxuICByZXR1cm4gbWF4aW11bVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbU1hcmtkb3duXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5JylcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tc3RyaW5nJylcbnZhciBjb2RlcyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9jb2RlcycpXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvY29uc3RhbnRzJylcbnZhciBvd24gPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jb25zdGFudC9oYXMtb3duLXByb3BlcnR5JylcbnZhciB0eXBlcyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NvbnN0YW50L3R5cGVzJylcbnZhciBub3JtYWxpemVJZGVudGlmaWVyID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9ub3JtYWxpemUtaWRlbnRpZmllcicpXG52YXIgc2FmZUZyb21JbnQgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL3NhZmUtZnJvbS1pbnQnKVxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3BhcnNlJylcbnZhciBwcmVwcm9jZXNzb3IgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9wcmVwcm9jZXNzJylcbnZhciBwb3N0cHJvY2VzcyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3Bvc3Rwcm9jZXNzJylcblxuZnVuY3Rpb24gZnJvbU1hcmtkb3duKHZhbHVlLCBlbmNvZGluZywgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gY29tcGlsZXIob3B0aW9ucykoXG4gICAgcG9zdHByb2Nlc3MoXG4gICAgICBwYXJzZXIob3B0aW9ucykuZG9jdW1lbnQoKS53cml0ZShwcmVwcm9jZXNzb3IoKSh2YWx1ZSwgZW5jb2RpbmcsIHRydWUpKVxuICAgIClcbiAgKVxufVxuXG4vLyBOb3RlIHRoaXMgY29tcGlsZXIgb25seSB1bmRlcnN0YW5kIGNvbXBsZXRlIGJ1ZmZlcmluZywgbm90IHN0cmVhbWluZy5cbmZ1bmN0aW9uIGNvbXBpbGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgY29uZmlnID0gY29uZmlndXJlKFxuICAgIHtcbiAgICAgIGNhbkNvbnRhaW5Fb2xzOiBbXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdmcmFnbWVudCcsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdzdHJvbmcnXG4gICAgICBdLFxuICAgICAgZW50ZXI6IHtcbiAgICAgICAgYXV0b2xpbms6IG9wZW5lcihsaW5rKSxcbiAgICAgICAgYXV0b2xpbmtQcm90b2NvbDogb25lbnRlcmRhdGEsXG4gICAgICAgIGF1dG9saW5rRW1haWw6IG9uZW50ZXJkYXRhLFxuICAgICAgICBhdHhIZWFkaW5nOiBvcGVuZXIoaGVhZGluZyksXG4gICAgICAgIGJsb2NrUXVvdGU6IG9wZW5lcihibG9ja1F1b3RlKSxcbiAgICAgICAgY2hhcmFjdGVyRXNjYXBlOiBvbmVudGVyZGF0YSxcbiAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlOiBvbmVudGVyZGF0YSxcbiAgICAgICAgY29kZUZlbmNlZDogb3BlbmVyKGNvZGVGbG93KSxcbiAgICAgICAgY29kZUZlbmNlZEZlbmNlSW5mbzogYnVmZmVyLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VNZXRhOiBidWZmZXIsXG4gICAgICAgIGNvZGVJbmRlbnRlZDogb3BlbmVyKGNvZGVGbG93LCBidWZmZXIpLFxuICAgICAgICBjb2RlVGV4dDogb3BlbmVyKGNvZGVUZXh0LCBidWZmZXIpLFxuICAgICAgICBjb2RlVGV4dERhdGE6IG9uZW50ZXJkYXRhLFxuICAgICAgICBkYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgICAgY29kZUZsb3dWYWx1ZTogb25lbnRlcmRhdGEsXG4gICAgICAgIGRlZmluaXRpb246IG9wZW5lcihkZWZpbml0aW9uKSxcbiAgICAgICAgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIGRlZmluaXRpb25MYWJlbFN0cmluZzogYnVmZmVyLFxuICAgICAgICBkZWZpbml0aW9uVGl0bGVTdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgZW1waGFzaXM6IG9wZW5lcihlbXBoYXNpcyksXG4gICAgICAgIGhhcmRCcmVha0VzY2FwZTogb3BlbmVyKGhhcmRCcmVhayksXG4gICAgICAgIGhhcmRCcmVha1RyYWlsaW5nOiBvcGVuZXIoaGFyZEJyZWFrKSxcbiAgICAgICAgaHRtbEZsb3c6IG9wZW5lcihodG1sLCBidWZmZXIpLFxuICAgICAgICBodG1sRmxvd0RhdGE6IG9uZW50ZXJkYXRhLFxuICAgICAgICBodG1sVGV4dDogb3BlbmVyKGh0bWwsIGJ1ZmZlciksXG4gICAgICAgIGh0bWxUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGltYWdlOiBvcGVuZXIoaW1hZ2UpLFxuICAgICAgICBsYWJlbDogYnVmZmVyLFxuICAgICAgICBsaW5rOiBvcGVuZXIobGluayksXG4gICAgICAgIGxpc3RJdGVtOiBvcGVuZXIobGlzdEl0ZW0pLFxuICAgICAgICBsaXN0SXRlbVZhbHVlOiBvbmVudGVybGlzdGl0ZW12YWx1ZSxcbiAgICAgICAgbGlzdE9yZGVyZWQ6IG9wZW5lcihsaXN0LCBvbmVudGVybGlzdG9yZGVyZWQpLFxuICAgICAgICBsaXN0VW5vcmRlcmVkOiBvcGVuZXIobGlzdCksXG4gICAgICAgIHBhcmFncmFwaDogb3BlbmVyKHBhcmFncmFwaCksXG4gICAgICAgIHJlZmVyZW5jZTogb25lbnRlcnJlZmVyZW5jZSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIHJlc291cmNlRGVzdGluYXRpb25TdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgcmVzb3VyY2VUaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgICBzZXRleHRIZWFkaW5nOiBvcGVuZXIoaGVhZGluZyksXG4gICAgICAgIHN0cm9uZzogb3BlbmVyKHN0cm9uZyksXG4gICAgICAgIHRoZW1hdGljQnJlYWs6IG9wZW5lcih0aGVtYXRpY0JyZWFrKVxuICAgICAgfSxcbiAgICAgIGV4aXQ6IHtcbiAgICAgICAgYXR4SGVhZGluZzogY2xvc2VyKCksXG4gICAgICAgIGF0eEhlYWRpbmdTZXF1ZW5jZTogb25leGl0YXR4aGVhZGluZ3NlcXVlbmNlLFxuICAgICAgICBhdXRvbGluazogY2xvc2VyKCksXG4gICAgICAgIGF1dG9saW5rRW1haWw6IG9uZXhpdGF1dG9saW5rZW1haWwsXG4gICAgICAgIGF1dG9saW5rUHJvdG9jb2w6IG9uZXhpdGF1dG9saW5rcHJvdG9jb2wsXG4gICAgICAgIGJsb2NrUXVvdGU6IGNsb3NlcigpLFxuICAgICAgICBjaGFyYWN0ZXJFc2NhcGVWYWx1ZTogb25leGl0ZGF0YSxcbiAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWw6IG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZW1hcmtlcixcbiAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpYzogb25leGl0Y2hhcmFjdGVycmVmZXJlbmNlbWFya2VyLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZTogY2xvc2VyKG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZXZhbHVlKSxcbiAgICAgICAgY29kZUZlbmNlZDogY2xvc2VyKG9uZXhpdGNvZGVmZW5jZWQpLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2U6IG9uZXhpdGNvZGVmZW5jZWRmZW5jZSxcbiAgICAgICAgY29kZUZlbmNlZEZlbmNlSW5mbzogb25leGl0Y29kZWZlbmNlZGZlbmNlaW5mbyxcbiAgICAgICAgY29kZUZlbmNlZEZlbmNlTWV0YTogb25leGl0Y29kZWZlbmNlZGZlbmNlbWV0YSxcbiAgICAgICAgY29kZUZsb3dWYWx1ZTogb25leGl0ZGF0YSxcbiAgICAgICAgY29kZUluZGVudGVkOiBjbG9zZXIob25leGl0Y29kZWluZGVudGVkKSxcbiAgICAgICAgY29kZVRleHQ6IGNsb3NlcihvbmV4aXRjb2RldGV4dCksXG4gICAgICAgIGNvZGVUZXh0RGF0YTogb25leGl0ZGF0YSxcbiAgICAgICAgZGF0YTogb25leGl0ZGF0YSxcbiAgICAgICAgZGVmaW5pdGlvbjogY2xvc2VyKCksXG4gICAgICAgIGRlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZzogb25leGl0ZGVmaW5pdGlvbmRlc3RpbmF0aW9uc3RyaW5nLFxuICAgICAgICBkZWZpbml0aW9uTGFiZWxTdHJpbmc6IG9uZXhpdGRlZmluaXRpb25sYWJlbHN0cmluZyxcbiAgICAgICAgZGVmaW5pdGlvblRpdGxlU3RyaW5nOiBvbmV4aXRkZWZpbml0aW9udGl0bGVzdHJpbmcsXG4gICAgICAgIGVtcGhhc2lzOiBjbG9zZXIoKSxcbiAgICAgICAgaGFyZEJyZWFrRXNjYXBlOiBjbG9zZXIob25leGl0aGFyZGJyZWFrKSxcbiAgICAgICAgaGFyZEJyZWFrVHJhaWxpbmc6IGNsb3NlcihvbmV4aXRoYXJkYnJlYWspLFxuICAgICAgICBodG1sRmxvdzogY2xvc2VyKG9uZXhpdGh0bWxmbG93KSxcbiAgICAgICAgaHRtbEZsb3dEYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBodG1sVGV4dDogY2xvc2VyKG9uZXhpdGh0bWx0ZXh0KSxcbiAgICAgICAgaHRtbFRleHREYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBpbWFnZTogY2xvc2VyKG9uZXhpdGltYWdlKSxcbiAgICAgICAgbGFiZWw6IG9uZXhpdGxhYmVsLFxuICAgICAgICBsYWJlbFRleHQ6IG9uZXhpdGxhYmVsdGV4dCxcbiAgICAgICAgbGluZUVuZGluZzogb25leGl0bGluZWVuZGluZyxcbiAgICAgICAgbGluazogY2xvc2VyKG9uZXhpdGxpbmspLFxuICAgICAgICBsaXN0SXRlbTogY2xvc2VyKCksXG4gICAgICAgIGxpc3RPcmRlcmVkOiBjbG9zZXIoKSxcbiAgICAgICAgbGlzdFVub3JkZXJlZDogY2xvc2VyKCksXG4gICAgICAgIHBhcmFncmFwaDogY2xvc2VyKCksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZzogb25leGl0cmVmZXJlbmNlc3RyaW5nLFxuICAgICAgICByZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nOiBvbmV4aXRyZXNvdXJjZWRlc3RpbmF0aW9uc3RyaW5nLFxuICAgICAgICByZXNvdXJjZVRpdGxlU3RyaW5nOiBvbmV4aXRyZXNvdXJjZXRpdGxlc3RyaW5nLFxuICAgICAgICByZXNvdXJjZTogb25leGl0cmVzb3VyY2UsXG4gICAgICAgIHNldGV4dEhlYWRpbmc6IGNsb3NlcihvbmV4aXRzZXRleHRoZWFkaW5nKSxcbiAgICAgICAgc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZTogb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSxcbiAgICAgICAgc2V0ZXh0SGVhZGluZ1RleHQ6IG9uZXhpdHNldGV4dGhlYWRpbmd0ZXh0LFxuICAgICAgICBzdHJvbmc6IGNsb3NlcigpLFxuICAgICAgICB0aGVtYXRpY0JyZWFrOiBjbG9zZXIoKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0dGluZ3MubWRhc3RFeHRlbnNpb25zIHx8IFtdXG4gIClcblxuICB2YXIgZGF0YSA9IHt9XG5cbiAgcmV0dXJuIGNvbXBpbGVcblxuICBmdW5jdGlvbiBjb21waWxlKGV2ZW50cykge1xuICAgIHZhciBzdGFjayA9IFt7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogW119XVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxpc3RTdGFjayA9IFtdXG4gICAgdmFyIGxlbmd0aFxuICAgIHZhciBoYW5kbGVyXG4gICAgdmFyIGxpc3RTdGFydFxuICAgIHZhciBldmVudFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgICAgLy8gV2UgcHJlcHJvY2VzcyBsaXN0cyB0byBhZGQgYGxpc3RJdGVtYCB0b2tlbnMsIGFuZCB0byBpbmZlciB3aGV0aGVyXG4gICAgICAvLyBpdGVtcyB0aGUgbGlzdCBpdHNlbGYgYXJlIHNwcmVhZCBvdXQuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RPcmRlcmVkIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RVbm9yZGVyZWRcbiAgICAgICkge1xuICAgICAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICBsaXN0U3RhY2sucHVzaChpbmRleClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0U3RhcnQgPSBsaXN0U3RhY2sucG9wKGluZGV4KVxuICAgICAgICAgIGluZGV4ID0gcHJlcGFyZUxpc3QoZXZlbnRzLCBsaXN0U3RhcnQsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXggPSAtMVxuICAgIGxlbmd0aCA9IGV2ZW50cy5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBoYW5kbGVyID0gY29uZmlnW2V2ZW50c1tpbmRleF1bMF1dXG5cbiAgICAgIGlmIChvd24uY2FsbChoYW5kbGVyLCBldmVudHNbaW5kZXhdWzFdLnR5cGUpKSB7XG4gICAgICAgIGhhbmRsZXJbZXZlbnRzW2luZGV4XVsxXS50eXBlXS5jYWxsKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrOiBzdGFjayxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgICAgICAgZXhpdDogZXhpdCxcbiAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgICAgcmVzdW1lOiByZXN1bWUsXG4gICAgICAgICAgICBzbGljZVNlcmlhbGl6ZTogZXZlbnRzW2luZGV4XVsyXS5zbGljZVNlcmlhbGl6ZSxcbiAgICAgICAgICAgIHNldERhdGE6IHNldERhdGEsXG4gICAgICAgICAgICBnZXREYXRhOiBnZXREYXRhXG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudHNbaW5kZXhdWzFdXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWd1cmUgb3V0IGByb290YCBwb3NpdGlvbi5cbiAgICBzdGFja1swXS5wb3NpdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiBwb2ludChcbiAgICAgICAgbGVuZ3RoID8gZXZlbnRzWzBdWzFdLnN0YXJ0IDoge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICAgICAgKSxcbiAgICAgIGVuZDogcG9pbnQoXG4gICAgICAgIGxlbmd0aFxuICAgICAgICAgID8gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAyXVsxXS5lbmRcbiAgICAgICAgICA6IHtsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMH1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2tbMF1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVMaXN0KGV2ZW50cywgc3RhcnQsIGxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IHN0YXJ0IC0gMVxuICAgIHZhciBjb250YWluZXJCYWxhbmNlID0gLTFcbiAgICB2YXIgbGlzdFNwcmVhZCA9IGZhbHNlXG4gICAgdmFyIGxpc3RJdGVtXG4gICAgdmFyIHRhaWxJbmRleFxuICAgIHZhciBsaW5lSW5kZXhcbiAgICB2YXIgdGFpbEV2ZW50XG4gICAgdmFyIGV2ZW50XG4gICAgdmFyIGZpcnN0QmxhbmtMaW5lSW5kZXhcbiAgICB2YXIgYXRNYXJrZXJcblxuICAgIHdoaWxlICgrK2luZGV4IDw9IGxlbmd0aCkge1xuICAgICAgZXZlbnQgPSBldmVudHNbaW5kZXhdXG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdFVub3JkZXJlZCB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0T3JkZXJlZCB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5ibG9ja1F1b3RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyQmFsYW5jZSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyQmFsYW5jZS0tXG4gICAgICAgIH1cblxuICAgICAgICBhdE1hcmtlciA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIGlmIChldmVudFsxXS50eXBlID09PSB0eXBlcy5saW5lRW5kaW5nQmxhbmspIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbGlzdEl0ZW0gJiZcbiAgICAgICAgICAgICFhdE1hcmtlciAmJlxuICAgICAgICAgICAgIWNvbnRhaW5lckJhbGFuY2UgJiZcbiAgICAgICAgICAgICFmaXJzdEJsYW5rTGluZUluZGV4XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdE1hcmtlciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saW5lUHJlZml4IHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RJdGVtVmFsdWUgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1NYXJrZXIgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1QcmVmaXggfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlXG4gICAgICApIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdE1hcmtlciA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICghY29udGFpbmVyQmFsYW5jZSAmJlxuICAgICAgICAgIGV2ZW50WzBdID09PSAnZW50ZXInICYmXG4gICAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1QcmVmaXgpIHx8XG4gICAgICAgIChjb250YWluZXJCYWxhbmNlID09PSAtMSAmJlxuICAgICAgICAgIGV2ZW50WzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAoZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdFVub3JkZXJlZCB8fFxuICAgICAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdE9yZGVyZWQpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgIHRhaWxJbmRleCA9IGluZGV4XG4gICAgICAgICAgbGluZUluZGV4ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICB3aGlsZSAodGFpbEluZGV4LS0pIHtcbiAgICAgICAgICAgIHRhaWxFdmVudCA9IGV2ZW50c1t0YWlsSW5kZXhdXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmcgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmdCbGFua1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICh0YWlsRXZlbnRbMF0gPT09ICdleGl0JykgY29udGludWVcblxuICAgICAgICAgICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW2xpbmVJbmRleF1bMV0udHlwZSA9IHR5cGVzLmxpbmVFbmRpbmdCbGFua1xuICAgICAgICAgICAgICAgIGxpc3RTcHJlYWQgPSB0cnVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9IHR5cGVzLmxpbmVFbmRpbmdcbiAgICAgICAgICAgICAgbGluZUluZGV4ID0gdGFpbEluZGV4XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGluZVByZWZpeCB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMuYmxvY2tRdW90ZVByZWZpeCB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMuYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmJsb2NrUXVvdGVNYXJrZXIgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RJdGVtSW5kZW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gRW1wdHlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmlyc3RCbGFua0xpbmVJbmRleCAmJlxuICAgICAgICAgICAgKCFsaW5lSW5kZXggfHwgZmlyc3RCbGFua0xpbmVJbmRleCA8IGxpbmVJbmRleClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxpc3RJdGVtLl9zcHJlYWQgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRml4IHBvc2l0aW9uLlxuICAgICAgICAgIGxpc3RJdGVtLmVuZCA9IHBvaW50KFxuICAgICAgICAgICAgbGluZUluZGV4ID8gZXZlbnRzW2xpbmVJbmRleF1bMV0uc3RhcnQgOiBldmVudFsxXS5lbmRcbiAgICAgICAgICApXG5cbiAgICAgICAgICBldmVudHMuc3BsaWNlKGxpbmVJbmRleCB8fCBpbmRleCwgMCwgWydleGl0JywgbGlzdEl0ZW0sIGV2ZW50WzJdXSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBsaXN0IGl0ZW0uXG4gICAgICAgIGlmIChldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0SXRlbVByZWZpeCkge1xuICAgICAgICAgIGxpc3RJdGVtID0ge1xuICAgICAgICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgICAgICAgIF9zcHJlYWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnQ6IHBvaW50KGV2ZW50WzFdLnN0YXJ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHMuc3BsaWNlKGluZGV4LCAwLCBbJ2VudGVyJywgbGlzdEl0ZW0sIGV2ZW50WzJdXSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ID0gdW5kZWZpbmVkXG4gICAgICAgICAgYXRNYXJrZXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHNbc3RhcnRdWzFdLl9zcHJlYWQgPSBsaXN0U3ByZWFkXG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGF0YShrZXksIHZhbHVlKSB7XG4gICAgZGF0YVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEoa2V5KSB7XG4gICAgcmV0dXJuIGRhdGFba2V5XVxuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnQoZCkge1xuICAgIHJldHVybiB7bGluZTogZC5saW5lLCBjb2x1bW46IGQuY29sdW1uLCBvZmZzZXQ6IGQub2Zmc2V0fVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbmVyKGNyZWF0ZSwgYW5kKSB7XG4gICAgcmV0dXJuIG9wZW5cblxuICAgIGZ1bmN0aW9uIG9wZW4odG9rZW4pIHtcbiAgICAgIGVudGVyLmNhbGwodGhpcywgY3JlYXRlKHRva2VuKSwgdG9rZW4pXG4gICAgICBpZiAoYW5kKSBhbmQuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXIoKSB7XG4gICAgdGhpcy5zdGFjay5wdXNoKHt0eXBlOiAnZnJhZ21lbnQnLCBjaGlsZHJlbjogW119KVxuICB9XG5cbiAgZnVuY3Rpb24gZW50ZXIobm9kZSwgdG9rZW4pIHtcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChub2RlKVxuICAgIHRoaXMuc3RhY2sucHVzaChub2RlKVxuICAgIG5vZGUucG9zaXRpb24gPSB7c3RhcnQ6IHBvaW50KHRva2VuLnN0YXJ0KX1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VyKGFuZCkge1xuICAgIHJldHVybiBjbG9zZVxuXG4gICAgZnVuY3Rpb24gY2xvc2UodG9rZW4pIHtcbiAgICAgIGlmIChhbmQpIGFuZC5jYWxsKHRoaXMsIHRva2VuKVxuICAgICAgZXhpdC5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXQodG9rZW4pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuc3RhY2sucG9wKClcbiAgICBub2RlLnBvc2l0aW9uLmVuZCA9IHBvaW50KHRva2VuLmVuZClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKHRoaXMuc3RhY2sucG9wKCkpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGVycy5cbiAgLy9cblxuICBmdW5jdGlvbiBvbmVudGVybGlzdG9yZGVyZWQoKSB7XG4gICAgc2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW50ZXJsaXN0aXRlbXZhbHVlKHRva2VuKSB7XG4gICAgaWYgKGdldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpKSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0uc3RhcnQgPSBwYXJzZUludChcbiAgICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbiksXG4gICAgICAgIGNvbnN0YW50cy5udW1lcmljQmFzZURlY2ltYWxcbiAgICAgIClcbiAgICAgIHNldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZGZlbmNlaW5mbygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubGFuZyA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVmZW5jZWRmZW5jZW1ldGEoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLm1ldGEgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2UoKSB7XG4gICAgLy8gRXhpdCBpZiB0aGlzIGlzIHRoZSBjbG9zaW5nIGZlbmNlLlxuICAgIGlmIChnZXREYXRhKCdmbG93Q29kZUluc2lkZScpKSByZXR1cm5cbiAgICB0aGlzLmJ1ZmZlcigpXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZyxcbiAgICAgICcnXG4gICAgKVxuICAgIHNldERhdGEoJ2Zsb3dDb2RlSW5zaWRlJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVpbmRlbnRlZCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRkZWZpbml0aW9ubGFiZWxzdHJpbmcodG9rZW4pIHtcbiAgICAvLyBEaXNjYXJkIGxhYmVsLCB1c2UgdGhlIHNvdXJjZSBjb250ZW50IGluc3RlYWQuXG4gICAgdmFyIGxhYmVsID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5sYWJlbCA9IGxhYmVsXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICApLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb250aXRsZXN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udGl0bGUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRkZWZpbml0aW9uZGVzdGluYXRpb25zdHJpbmcoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSh0b2tlbikge1xuICAgIGlmICghdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmRlcHRoKSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uZGVwdGggPSB0aGlzLnNsaWNlU2VyaWFsaXplKFxuICAgICAgICB0b2tlblxuICAgICAgKS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRzZXRleHRoZWFkaW5ndGV4dCgpIHtcbiAgICBzZXREYXRhKCdzZXRleHRIZWFkaW5nU2x1cnBMaW5lRW5kaW5nJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHNldGV4dGhlYWRpbmdsaW5lc2VxdWVuY2UodG9rZW4pIHtcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uZGVwdGggPVxuICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbikuY2hhckNvZGVBdCgwKSA9PT0gY29kZXMuZXF1YWxzVG8gPyAxIDogMlxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZygpIHtcbiAgICBzZXREYXRhKCdzZXRleHRIZWFkaW5nU2x1cnBMaW5lRW5kaW5nJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW50ZXJkYXRhKHRva2VuKSB7XG4gICAgdmFyIHNpYmxpbmdzID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmNoaWxkcmVuXG4gICAgdmFyIHRhaWwgPSBzaWJsaW5nc1tzaWJsaW5ncy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKCF0YWlsIHx8IHRhaWwudHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICAvLyBBZGQgYSBuZXcgdGV4dCBub2RlLlxuICAgICAgdGFpbCA9IHRleHQoKVxuICAgICAgdGFpbC5wb3NpdGlvbiA9IHtzdGFydDogcG9pbnQodG9rZW4uc3RhcnQpfVxuICAgICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2godGFpbClcbiAgICB9XG5cbiAgICB0aGlzLnN0YWNrLnB1c2godGFpbClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRhdGEodG9rZW4pIHtcbiAgICB2YXIgdGFpbCA9IHRoaXMuc3RhY2sucG9wKClcbiAgICB0YWlsLnZhbHVlICs9IHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgdGFpbC5wb3NpdGlvbi5lbmQgPSBwb2ludCh0b2tlbi5lbmQpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRsaW5lZW5kaW5nKHRva2VuKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cblxuICAgIC8vIElmIHdl4oCZcmUgYXQgYSBoYXJkIGJyZWFrLCBpbmNsdWRlIHRoZSBsaW5lIGVuZGluZyBpbiB0aGVyZS5cbiAgICBpZiAoZ2V0RGF0YSgnYXRIYXJkQnJlYWsnKSkge1xuICAgICAgY29udGV4dC5jaGlsZHJlbltjb250ZXh0LmNoaWxkcmVuLmxlbmd0aCAtIDFdLnBvc2l0aW9uLmVuZCA9IHBvaW50KFxuICAgICAgICB0b2tlbi5lbmRcbiAgICAgIClcbiAgICAgIHNldERhdGEoJ2F0SGFyZEJyZWFrJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChnZXREYXRhKCdzZXRleHRIZWFkaW5nU2x1cnBMaW5lRW5kaW5nJykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuQ29udGFpbkVvbHMuaW5kZXhPZihjb250ZXh0LnR5cGUpICE9PSAtMSkge1xuICAgICAgb25lbnRlcmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICAgIG9uZXhpdGRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRoYXJkYnJlYWsoKSB7XG4gICAgc2V0RGF0YSgnYXRIYXJkQnJlYWsnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aHRtbGZsb3coKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnZhbHVlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aHRtbHRleHQoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnZhbHVlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZXRleHQoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnZhbHVlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0bGluaygpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuXG4gICAgLy8gVG8gZG86IGNsZWFuLlxuICAgIGlmIChnZXREYXRhKCdpblJlZmVyZW5jZScpKSB7XG4gICAgICBjb250ZXh0LnR5cGUgKz0gJ1JlZmVyZW5jZSdcbiAgICAgIGNvbnRleHQucmVmZXJlbmNlVHlwZSA9IGdldERhdGEoJ3JlZmVyZW5jZVR5cGUnKSB8fCAnc2hvcnRjdXQnXG4gICAgICBkZWxldGUgY29udGV4dC51cmxcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnRpdGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmlkZW50aWZpZXJcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmxhYmVsXG4gICAgICBkZWxldGUgY29udGV4dC5yZWZlcmVuY2VUeXBlXG4gICAgfVxuXG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRpbWFnZSgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuXG4gICAgLy8gVG8gZG86IGNsZWFuLlxuICAgIGlmIChnZXREYXRhKCdpblJlZmVyZW5jZScpKSB7XG4gICAgICBjb250ZXh0LnR5cGUgKz0gJ1JlZmVyZW5jZSdcbiAgICAgIGNvbnRleHQucmVmZXJlbmNlVHlwZSA9IGdldERhdGEoJ3JlZmVyZW5jZVR5cGUnKSB8fCAnc2hvcnRjdXQnXG4gICAgICBkZWxldGUgY29udGV4dC51cmxcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnRpdGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmlkZW50aWZpZXJcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmxhYmVsXG4gICAgICBkZWxldGUgY29udGV4dC5yZWZlcmVuY2VUeXBlXG4gICAgfVxuXG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRsYWJlbHRleHQodG9rZW4pIHtcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0bGFiZWwoKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgdmFyIHZhbHVlID0gdGhpcy5yZXN1bWUoKVxuXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gdmFsdWVcblxuICAgIC8vIEFzc3VtZSBhIHJlZmVyZW5jZS5cbiAgICBzZXREYXRhKCdpblJlZmVyZW5jZScsIHRydWUpXG5cbiAgICBpZiAodGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmNoaWxkcmVuID0gZnJhZ21lbnQuY2hpbGRyZW5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmFsdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0cmVzb3VyY2VkZXN0aW5hdGlvbnN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0cmVzb3VyY2V0aXRsZXN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udGl0bGUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRyZXNvdXJjZSgpIHtcbiAgICBzZXREYXRhKCdpblJlZmVyZW5jZScpXG4gIH1cblxuICBmdW5jdGlvbiBvbmVudGVycmVmZXJlbmNlKCkge1xuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnLCAnY29sbGFwc2VkJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlZmVyZW5jZXN0cmluZyh0b2tlbikge1xuICAgIHZhciBsYWJlbCA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubGFiZWwgPSBsYWJlbFxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgKS50b0xvd2VyQ2FzZSgpXG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScsICdmdWxsJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZW1hcmtlcih0b2tlbikge1xuICAgIHNldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnLCB0b2tlbi50eXBlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y2hhcmFjdGVycmVmZXJlbmNldmFsdWUodG9rZW4pIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgdmFyIHR5cGUgPSBnZXREYXRhKCdjaGFyYWN0ZXJSZWZlcmVuY2VUeXBlJylcbiAgICB2YXIgdmFsdWVcblxuICAgIGlmICh0eXBlKSB7XG4gICAgICB2YWx1ZSA9IHNhZmVGcm9tSW50KFxuICAgICAgICBkYXRhLFxuICAgICAgICB0eXBlID09PSB0eXBlcy5jaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljXG4gICAgICAgICAgPyBjb25zdGFudHMubnVtZXJpY0Jhc2VEZWNpbWFsXG4gICAgICAgICAgOiBjb25zdGFudHMubnVtZXJpY0Jhc2VIZXhhZGVjaW1hbFxuICAgICAgKVxuICAgICAgc2V0RGF0YSgnY2hhcmFjdGVyUmVmZXJlbmNlVHlwZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGVjb2RlKGRhdGEpXG4gICAgfVxuXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnZhbHVlICs9IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRhdXRvbGlua3Byb3RvY29sKHRva2VuKSB7XG4gICAgb25leGl0ZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS51cmwgPSB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0YXV0b2xpbmtlbWFpbCh0b2tlbikge1xuICAgIG9uZXhpdGRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID1cbiAgICAgICdtYWlsdG86JyArIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gIH1cblxuICAvL1xuICAvLyBDcmVhdGVycy5cbiAgLy9cblxuICBmdW5jdGlvbiBibG9ja1F1b3RlKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2Jsb2NrcXVvdGUnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBjb2RlRmxvdygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdjb2RlJywgbGFuZzogbnVsbCwgbWV0YTogbnVsbCwgdmFsdWU6ICcnfVxuICB9XG5cbiAgZnVuY3Rpb24gY29kZVRleHQoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnaW5saW5lQ29kZScsIHZhbHVlOiAnJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdkZWZpbml0aW9uJyxcbiAgICAgIGlkZW50aWZpZXI6ICcnLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHVybDogJydcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbXBoYXNpcygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdlbXBoYXNpcycsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRpbmcoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnaGVhZGluZycsIGRlcHRoOiB1bmRlZmluZWQsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhcmRCcmVhaygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdicmVhayd9XG4gIH1cblxuICBmdW5jdGlvbiBodG1sKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2h0bWwnLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiBpbWFnZSgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdpbWFnZScsIHRpdGxlOiBudWxsLCB1cmw6ICcnLCBhbHQ6IG51bGx9XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiAnJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdCh0b2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICBvcmRlcmVkOiB0b2tlbi50eXBlID09PSAnbGlzdE9yZGVyZWQnLFxuICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICBzcHJlYWQ6IHRva2VuLl9zcHJlYWQsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0SXRlbSh0b2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgICAgc3ByZWFkOiB0b2tlbi5fc3ByZWFkLFxuICAgICAgY2hlY2tlZDogbnVsbCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmFncmFwaCgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBzdHJvbmcoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnc3Ryb25nJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gdGV4dCgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICcnfVxuICB9XG5cbiAgZnVuY3Rpb24gdGhlbWF0aWNCcmVhaygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICd0aGVtYXRpY0JyZWFrJ31cbiAgfVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmUoY29uZmlnLCBleHRlbnNpb25zKSB7XG4gIHZhciBsZW5ndGggPSBleHRlbnNpb25zLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZXh0ZW5zaW9uKGNvbmZpZywgZXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY29uZmlnXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbihjb25maWcsIGV4dGVuc2lvbikge1xuICB2YXIga2V5XG4gIHZhciBsZWZ0XG4gIHZhciByaWdodFxuXG4gIGZvciAoa2V5IGluIGV4dGVuc2lvbikge1xuICAgIGxlZnQgPSBvd24uY2FsbChjb25maWcsIGtleSkgPyBjb25maWdba2V5XSA6IChjb25maWdba2V5XSA9IHt9KVxuICAgIHJpZ2h0ID0gZXh0ZW5zaW9uW2tleV1cblxuICAgIGlmIChrZXkgPT09ICdjYW5Db250YWluRW9scycpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gW10uY29uY2F0KGxlZnQsIHJpZ2h0KVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxlZnQsIHJpZ2h0KVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIGZsb3cgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1mbG93JylcbnZhciBpbmRlbnRMaW5lcyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5kZW50LWxpbmVzJylcblxuZnVuY3Rpb24gYmxvY2txdW90ZShub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignYmxvY2txdW90ZScpXG4gIHZhciB2YWx1ZSA9IGluZGVudExpbmVzKGZsb3cobm9kZSwgY29udGV4dCksIG1hcClcbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBtYXAobGluZSwgaW5kZXgsIGJsYW5rKSB7XG4gIHJldHVybiAnPicgKyAoYmxhbmsgPyAnJyA6ICcgJykgKyBsaW5lXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVha1xuXG5mdW5jdGlvbiBoYXJkQnJlYWsoKSB7XG4gIHJldHVybiAnXFxcXFxcbidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgc3RyZWFrID0gcmVxdWlyZSgnbG9uZ2VzdC1zdHJlYWsnKVxudmFyIGZvcm1hdENvZGVBc0luZGVudGVkID0gcmVxdWlyZSgnLi4vdXRpbC9mb3JtYXQtY29kZS1hcy1pbmRlbnRlZCcpXG52YXIgY2hlY2tGZW5jZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stZmVuY2UnKVxudmFyIGluZGVudExpbmVzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmRlbnQtbGluZXMnKVxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiBjb2RlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNoZWNrRmVuY2UoY29udGV4dClcbiAgdmFyIHJhdyA9IG5vZGUudmFsdWUgfHwgJydcbiAgdmFyIHN1ZmZpeCA9IG1hcmtlciA9PT0gJ2AnID8gJ0dyYXZlQWNjZW50JyA6ICdUaWxkZSdcbiAgdmFyIHZhbHVlXG4gIHZhciBmZW5jZVxuICB2YXIgZXhpdFxuICB2YXIgc3ViZXhpdFxuXG4gIGlmIChmb3JtYXRDb2RlQXNJbmRlbnRlZChub2RlLCBjb250ZXh0KSkge1xuICAgIGV4aXQgPSBjb250ZXh0LmVudGVyKCdjb2RlSW5kZW50ZWQnKVxuICAgIHZhbHVlID0gaW5kZW50TGluZXMocmF3LCBtYXApXG4gIH0gZWxzZSB7XG4gICAgZmVuY2UgPSByZXBlYXQobWFya2VyLCBNYXRoLm1heChzdHJlYWsocmF3LCBtYXJrZXIpICsgMSwgMykpXG4gICAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2NvZGVGZW5jZWQnKVxuICAgIHZhbHVlID0gZmVuY2VcblxuICAgIGlmIChub2RlLmxhbmcpIHtcbiAgICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdjb2RlRmVuY2VkTGFuZycgKyBzdWZmaXgpXG4gICAgICB2YWx1ZSArPSBzYWZlKGNvbnRleHQsIG5vZGUubGFuZywge1xuICAgICAgICBiZWZvcmU6ICdgJyxcbiAgICAgICAgYWZ0ZXI6ICcgJyxcbiAgICAgICAgZW5jb2RlOiBbJ2AnXVxuICAgICAgfSlcbiAgICAgIHN1YmV4aXQoKVxuICAgIH1cblxuICAgIGlmIChub2RlLmxhbmcgJiYgbm9kZS5tZXRhKSB7XG4gICAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignY29kZUZlbmNlZE1ldGEnICsgc3VmZml4KVxuICAgICAgdmFsdWUgKz1cbiAgICAgICAgJyAnICtcbiAgICAgICAgc2FmZShjb250ZXh0LCBub2RlLm1ldGEsIHtcbiAgICAgICAgICBiZWZvcmU6ICcgJyxcbiAgICAgICAgICBhZnRlcjogJ1xcbicsXG4gICAgICAgICAgZW5jb2RlOiBbJ2AnXVxuICAgICAgICB9KVxuICAgICAgc3ViZXhpdCgpXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gJ1xcbidcblxuICAgIGlmIChyYXcpIHtcbiAgICAgIHZhbHVlICs9IHJhdyArICdcXG4nXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gZmVuY2VcbiAgfVxuXG4gIGV4aXQoKVxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gbWFwKGxpbmUsIF8sIGJsYW5rKSB7XG4gIHJldHVybiAoYmxhbmsgPyAnJyA6ICcgICAgJykgKyBsaW5lXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb25cblxudmFyIGFzc29jaWF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9hc3NvY2lhdGlvbicpXG52YXIgY2hlY2tRdW90ZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stcXVvdGUnKVxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIHF1b3RlID0gY2hlY2tRdW90ZShjb250ZXh0KVxuICB2YXIgc3VmZml4ID0gcXVvdGUgPT09ICdcIicgPyAnUXVvdGUnIDogJ0Fwb3N0cm9waGUnXG4gIHZhciB1cmwgPSBub2RlLnVybCB8fCAnJ1xuICB2YXIgdGl0bGUgPSBub2RlLnRpdGxlIHx8ICcnXG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignZGVmaW5pdGlvbicpXG4gIHZhciBzdWJleGl0ID0gY29udGV4dC5lbnRlcignbGFiZWwnKVxuICB2YXIgdmFsdWUgPVxuICAgICdbJyArIHNhZmUoY29udGV4dCwgYXNzb2NpYXRpb24obm9kZSksIHtiZWZvcmU6ICdbJywgYWZ0ZXI6ICddJ30pICsgJ106ICdcblxuICBzdWJleGl0KClcblxuICBpZiAoXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIHVybCwgb3LigKZcbiAgICAhdXJsIHx8XG4gICAgLy8gSWYgdGhlcmXigJlzIHdoaXRlc3BhY2UsIGVuY2xvc2VkIGlzIHByZXR0aWVyLlxuICAgIC9bIFxcdFxcclxcbl0vLnRlc3QodXJsKVxuICApIHtcbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignZGVzdGluYXRpb25MaXRlcmFsJylcbiAgICB2YWx1ZSArPSAnPCcgKyBzYWZlKGNvbnRleHQsIHVybCwge2JlZm9yZTogJzwnLCBhZnRlcjogJz4nfSkgKyAnPidcbiAgfSBlbHNlIHtcbiAgICAvLyBObyB3aGl0ZXNwYWNlLCByYXcgaXMgcHJldHRpZXIuXG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2Rlc3RpbmF0aW9uUmF3JylcbiAgICB2YWx1ZSArPSBzYWZlKGNvbnRleHQsIHVybCwge2JlZm9yZTogJyAnLCBhZnRlcjogJyAnfSlcbiAgfVxuXG4gIHN1YmV4aXQoKVxuXG4gIGlmICh0aXRsZSkge1xuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCd0aXRsZScgKyBzdWZmaXgpXG4gICAgdmFsdWUgKz1cbiAgICAgICcgJyArIHF1b3RlICsgc2FmZShjb250ZXh0LCB0aXRsZSwge2JlZm9yZTogcXVvdGUsIGFmdGVyOiBxdW90ZX0pICsgcXVvdGVcbiAgICBzdWJleGl0KClcbiAgfVxuXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuZW1waGFzaXMucGVlayA9IGVtcGhhc2lzUGVla1xuXG52YXIgY2hlY2tFbXBoYXNpcyA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stZW1waGFzaXMnKVxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxuXG4vLyBUbyBkbzogdGhlcmUgYXJlIGNhc2VzIHdoZXJlIGVtcGhhc2lzIGNhbm5vdCDigJxmb3Jt4oCdIGRlcGVuZGluZyBvbiB0aGVcbi8vIHByZXZpb3VzIG9yIG5leHQgY2hhcmFjdGVyIG9mIHNlcXVlbmNlcy5cbi8vIFRoZXJl4oCZcyBubyB3YXkgYXJvdW5kIHRoYXQgdGhvdWdoLCBleGNlcHQgZm9yIGluamVjdGluZyB6ZXJvLXdpZHRoIHN0dWZmLlxuLy8gRG8gd2UgbmVlZCB0byBzYWZlZ3VhcmQgYWdhaW5zdCB0aGF0P1xuZnVuY3Rpb24gZW1waGFzaXMobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY2hlY2tFbXBoYXNpcyhjb250ZXh0KVxuICB2YXIgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2VtcGhhc2lzJylcbiAgdmFyIHZhbHVlID0gcGhyYXNpbmcobm9kZSwgY29udGV4dCwge2JlZm9yZTogbWFya2VyLCBhZnRlcjogbWFya2VyfSlcbiAgZXhpdCgpXG4gIHJldHVybiBtYXJrZXIgKyB2YWx1ZSArIG1hcmtlclxufVxuXG5mdW5jdGlvbiBlbXBoYXNpc1BlZWsobm9kZSwgXywgY29udGV4dCkge1xuICByZXR1cm4gY29udGV4dC5vcHRpb25zLmVtcGhhc2lzIHx8ICcqJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBoZWFkaW5nXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBmb3JtYXRIZWFkaW5nQXNTZXRleHQgPSByZXF1aXJlKCcuLi91dGlsL2Zvcm1hdC1oZWFkaW5nLWFzLXNldGV4dCcpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG5cbmZ1bmN0aW9uIGhlYWRpbmcobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgcmFuayA9IE1hdGgubWF4KE1hdGgubWluKDYsIG5vZGUuZGVwdGggfHwgMSksIDEpXG4gIHZhciB2YWx1ZVxuICB2YXIgZXhpdFxuICB2YXIgc3ViZXhpdFxuICB2YXIgc2VxdWVuY2VcblxuICBpZiAoZm9ybWF0SGVhZGluZ0FzU2V0ZXh0KG5vZGUsIGNvbnRleHQpKSB7XG4gICAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2hlYWRpbmdTZXRleHQnKVxuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdwaHJhc2luZycpXG4gICAgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnXFxuJywgYWZ0ZXI6ICdcXG4nfSlcbiAgICBzdWJleGl0KClcbiAgICBleGl0KClcblxuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZSArXG4gICAgICAnXFxuJyArXG4gICAgICByZXBlYXQoXG4gICAgICAgIHJhbmsgPT09IDEgPyAnPScgOiAnLScsXG4gICAgICAgIC8vIFRoZSB3aG9sZSBzaXpl4oCmXG4gICAgICAgIHZhbHVlLmxlbmd0aCAtXG4gICAgICAgICAgLy8gTWludXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGxhc3QgRU9MIChvclxuICAgICAgICAgIC8vIDAgaWYgdGhlcmUgaXMgbm9uZSnigKZcbiAgICAgICAgICAoTWF0aC5tYXgodmFsdWUubGFzdEluZGV4T2YoJ1xccicpLCB2YWx1ZS5sYXN0SW5kZXhPZignXFxuJykpICsgMSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBzZXF1ZW5jZSA9IHJlcGVhdCgnIycsIHJhbmspXG4gIGV4aXQgPSBjb250ZXh0LmVudGVyKCdoZWFkaW5nQXR4JylcbiAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3BocmFzaW5nJylcbiAgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnIyAnLCBhZnRlcjogJ1xcbid9KVxuICB2YWx1ZSA9IHZhbHVlID8gc2VxdWVuY2UgKyAnICcgKyB2YWx1ZSA6IHNlcXVlbmNlXG4gIGlmIChjb250ZXh0Lm9wdGlvbnMuY2xvc2VBdHgpIHtcbiAgICB2YWx1ZSArPSAnICcgKyBzZXF1ZW5jZVxuICB9XG5cbiAgc3ViZXhpdCgpXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBodG1sXG5cbmZ1bmN0aW9uIGh0bWwobm9kZSkge1xuICByZXR1cm4gbm9kZS52YWx1ZSB8fCAnJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuaW1hZ2VSZWZlcmVuY2UucGVlayA9IGltYWdlUmVmZXJlbmNlUGVla1xuXG52YXIgYXNzb2NpYXRpb24gPSByZXF1aXJlKCcuLi91dGlsL2Fzc29jaWF0aW9uJylcbnZhciBzYWZlID0gcmVxdWlyZSgnLi4vdXRpbC9zYWZlJylcblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2Uobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgdHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuICB2YXIgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2ltYWdlUmVmZXJlbmNlJylcbiAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdsYWJlbCcpXG4gIHZhciBhbHQgPSBzYWZlKGNvbnRleHQsIG5vZGUuYWx0LCB7YmVmb3JlOiAnWycsIGFmdGVyOiAnXSd9KVxuICB2YXIgcmVmZXJlbmNlXG4gIHZhciBjdXJyZW50U3RhY2tcblxuICBzdWJleGl0KClcbiAgLy8gSGlkZSB0aGUgZmFjdCB0aGF0IHdl4oCZcmUgaW4gcGhyYXNpbmcsIGJlY2F1c2UgZXNjYXBlcyBkb27igJl0IHdvcmsuXG4gIGN1cnJlbnRTdGFjayA9IGNvbnRleHQuc3RhY2tcbiAgY29udGV4dC5zdGFjayA9IFtdXG4gIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdyZWZlcmVuY2UnKVxuICByZWZlcmVuY2UgPSBzYWZlKGNvbnRleHQsIGFzc29jaWF0aW9uKG5vZGUpLCB7YmVmb3JlOiAnWycsIGFmdGVyOiAnXSd9KVxuICBzdWJleGl0KClcbiAgY29udGV4dC5zdGFjayA9IGN1cnJlbnRTdGFja1xuICBleGl0KClcblxuICBpZiAodHlwZSAhPT0gJ2Z1bGwnICYmIGFsdCAmJiBhbHQgPT09IHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAnIVsnICsgYWx0ICsgJ10nICsgKHR5cGUgPT09ICdzaG9ydGN1dCcgPyAnJyA6ICdbXScpXG4gIH1cblxuICByZXR1cm4gJyFbJyArIGFsdCArICddWycgKyByZWZlcmVuY2UgKyAnXSdcbn1cblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2VQZWVrKCkge1xuICByZXR1cm4gJyEnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5pbWFnZS5wZWVrID0gaW1hZ2VQZWVrXG5cbnZhciBjaGVja1F1b3RlID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1xdW90ZScpXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIGltYWdlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIHF1b3RlID0gY2hlY2tRdW90ZShjb250ZXh0KVxuICB2YXIgc3VmZml4ID0gcXVvdGUgPT09ICdcIicgPyAnUXVvdGUnIDogJ0Fwb3N0cm9waGUnXG4gIHZhciB1cmwgPSBub2RlLnVybCB8fCAnJ1xuICB2YXIgdGl0bGUgPSBub2RlLnRpdGxlIHx8ICcnXG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignaW1hZ2UnKVxuICB2YXIgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xhYmVsJylcbiAgdmFyIHZhbHVlID0gJyFbJyArIHNhZmUoY29udGV4dCwgbm9kZS5hbHQsIHtiZWZvcmU6ICdbJywgYWZ0ZXI6ICddJ30pICsgJ10oJ1xuXG4gIHN1YmV4aXQoKVxuXG4gIGlmIChcbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gdXJsIGJ1dCB0aGVyZSBpcyBhIHRpdGxl4oCmXG4gICAgKCF1cmwgJiYgdGl0bGUpIHx8XG4gICAgLy8gT3IgaWYgdGhlcmXigJlzIG1hcmtkb3duIHdoaXRlc3BhY2Ugb3IgYW4gZW9sLCBlbmNsb3NlLlxuICAgIC9bIFxcdFxcclxcbl0vLnRlc3QodXJsKVxuICApIHtcbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignZGVzdGluYXRpb25MaXRlcmFsJylcbiAgICB2YWx1ZSArPSAnPCcgKyBzYWZlKGNvbnRleHQsIHVybCwge2JlZm9yZTogJzwnLCBhZnRlcjogJz4nfSkgKyAnPidcbiAgfSBlbHNlIHtcbiAgICAvLyBObyB3aGl0ZXNwYWNlLCByYXcgaXMgcHJldHRpZXIuXG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2Rlc3RpbmF0aW9uUmF3JylcbiAgICB2YWx1ZSArPSBzYWZlKGNvbnRleHQsIHVybCwge2JlZm9yZTogJygnLCBhZnRlcjogdGl0bGUgPyAnICcgOiAnKSd9KVxuICB9XG5cbiAgc3ViZXhpdCgpXG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3RpdGxlJyArIHN1ZmZpeClcbiAgICB2YWx1ZSArPVxuICAgICAgJyAnICsgcXVvdGUgKyBzYWZlKGNvbnRleHQsIHRpdGxlLCB7YmVmb3JlOiBxdW90ZSwgYWZ0ZXI6IHF1b3RlfSkgKyBxdW90ZVxuICAgIHN1YmV4aXQoKVxuICB9XG5cbiAgdmFsdWUgKz0gJyknXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBpbWFnZVBlZWsoKSB7XG4gIHJldHVybiAnISdcbn1cbiIsImV4cG9ydHMuYmxvY2txdW90ZSA9IHJlcXVpcmUoJy4vYmxvY2txdW90ZScpXG5leHBvcnRzLmJyZWFrID0gcmVxdWlyZSgnLi9icmVhaycpXG5leHBvcnRzLmNvZGUgPSByZXF1aXJlKCcuL2NvZGUnKVxuZXhwb3J0cy5kZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uJylcbmV4cG9ydHMuZW1waGFzaXMgPSByZXF1aXJlKCcuL2VtcGhhc2lzJylcbmV4cG9ydHMuaGFyZEJyZWFrID0gcmVxdWlyZSgnLi9icmVhaycpXG5leHBvcnRzLmhlYWRpbmcgPSByZXF1aXJlKCcuL2hlYWRpbmcnKVxuZXhwb3J0cy5odG1sID0gcmVxdWlyZSgnLi9odG1sJylcbmV4cG9ydHMuaW1hZ2UgPSByZXF1aXJlKCcuL2ltYWdlJylcbmV4cG9ydHMuaW1hZ2VSZWZlcmVuY2UgPSByZXF1aXJlKCcuL2ltYWdlLXJlZmVyZW5jZScpXG5leHBvcnRzLmlubGluZUNvZGUgPSByZXF1aXJlKCcuL2lubGluZS1jb2RlJylcbmV4cG9ydHMubGluayA9IHJlcXVpcmUoJy4vbGluaycpXG5leHBvcnRzLmxpbmtSZWZlcmVuY2UgPSByZXF1aXJlKCcuL2xpbmstcmVmZXJlbmNlJylcbmV4cG9ydHMubGlzdCA9IHJlcXVpcmUoJy4vbGlzdCcpXG5leHBvcnRzLmxpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0LWl0ZW0nKVxuZXhwb3J0cy5wYXJhZ3JhcGggPSByZXF1aXJlKCcuL3BhcmFncmFwaCcpXG5leHBvcnRzLnJvb3QgPSByZXF1aXJlKCcuL3Jvb3QnKVxuZXhwb3J0cy5zdHJvbmcgPSByZXF1aXJlKCcuL3N0cm9uZycpXG5leHBvcnRzLnRleHQgPSByZXF1aXJlKCcuL3RleHQnKVxuZXhwb3J0cy50aGVtYXRpY0JyZWFrID0gcmVxdWlyZSgnLi90aGVtYXRpYy1icmVhaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcbmlubGluZUNvZGUucGVlayA9IGlubGluZUNvZGVQZWVrXG5cbmZ1bmN0aW9uIGlubGluZUNvZGUobm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gIHZhciBzZXF1ZW5jZSA9ICdgJ1xuICB2YXIgcGFkID0gJydcblxuICAvLyBJZiB0aGVyZSBpcyBhIHNpbmdsZSBncmF2ZSBhY2NlbnQgb24gaXRzIG93biBpbiB0aGUgY29kZSwgdXNlIGEgZmVuY2Ugb2ZcbiAgLy8gdHdvLlxuICAvLyBJZiB0aGVyZSBhcmUgdHdvIGluIGEgcm93LCB1c2Ugb25lLlxuICB3aGlsZSAobmV3IFJlZ0V4cCgnKF58W15gXSknICsgc2VxdWVuY2UgKyAnKFteYF18JCknKS50ZXN0KHZhbHVlKSkge1xuICAgIHNlcXVlbmNlICs9ICdgJ1xuICB9XG5cbiAgLy8gSWYgdGhpcyBpcyBub3QganVzdCBzcGFjZXMgb3IgZW9scyAodGFicyBkb27igJl0IGNvdW50KSwgYW5kIGVpdGhlciB0aGVcbiAgLy8gZmlyc3Qgb3IgbGFzdCBjaGFyYWN0ZXIgYXJlIGEgc3BhY2UsIGVvbCwgb3IgdGljaywgdGhlbiBwYWQgd2l0aCBzcGFjZXMuXG4gIGlmIChcbiAgICAvW14gXFxyXFxuXS8udGVzdCh2YWx1ZSkgJiZcbiAgICAoL1sgXFxyXFxuYF0vLnRlc3QodmFsdWUuY2hhckF0KDApKSB8fFxuICAgICAgL1sgXFxyXFxuYF0vLnRlc3QodmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpKSlcbiAgKSB7XG4gICAgcGFkID0gJyAnXG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2UgKyBwYWQgKyB2YWx1ZSArIHBhZCArIHNlcXVlbmNlXG59XG5cbmZ1bmN0aW9uIGlubGluZUNvZGVQZWVrKCkge1xuICByZXR1cm4gJ2AnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpbmtSZWZlcmVuY2VcbmxpbmtSZWZlcmVuY2UucGVlayA9IGxpbmtSZWZlcmVuY2VQZWVrXG5cbnZhciBhc3NvY2lhdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWwvYXNzb2NpYXRpb24nKVxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiBsaW5rUmVmZXJlbmNlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdsaW5rUmVmZXJlbmNlJylcbiAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdsYWJlbCcpXG4gIHZhciB0ZXh0ID0gcGhyYXNpbmcobm9kZSwgY29udGV4dCwge2JlZm9yZTogJ1snLCBhZnRlcjogJ10nfSlcbiAgdmFyIHJlZmVyZW5jZVxuICB2YXIgY3VycmVudFN0YWNrXG5cbiAgc3ViZXhpdCgpXG4gIC8vIEhpZGUgdGhlIGZhY3QgdGhhdCB3ZeKAmXJlIGluIHBocmFzaW5nLCBiZWNhdXNlIGVzY2FwZXMgZG9u4oCZdCB3b3JrLlxuICBjdXJyZW50U3RhY2sgPSBjb250ZXh0LnN0YWNrXG4gIGNvbnRleHQuc3RhY2sgPSBbXVxuICBzdWJleGl0ID0gY29udGV4dC5lbnRlcigncmVmZXJlbmNlJylcbiAgcmVmZXJlbmNlID0gc2FmZShjb250ZXh0LCBhc3NvY2lhdGlvbihub2RlKSwge2JlZm9yZTogJ1snLCBhZnRlcjogJ10nfSlcbiAgc3ViZXhpdCgpXG4gIGNvbnRleHQuc3RhY2sgPSBjdXJyZW50U3RhY2tcbiAgZXhpdCgpXG5cbiAgaWYgKHR5cGUgIT09ICdmdWxsJyAmJiB0ZXh0ICYmIHRleHQgPT09IHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAnWycgKyB0ZXh0ICsgJ10nICsgKHR5cGUgPT09ICdzaG9ydGN1dCcgPyAnJyA6ICdbXScpXG4gIH1cblxuICByZXR1cm4gJ1snICsgdGV4dCArICddWycgKyByZWZlcmVuY2UgKyAnXSdcbn1cblxuZnVuY3Rpb24gbGlua1JlZmVyZW5jZVBlZWsoKSB7XG4gIHJldHVybiAnWydcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGlua1xubGluay5wZWVrID0gbGlua1BlZWtcblxudmFyIGNoZWNrUXVvdGUgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLXF1b3RlJylcbnZhciBmb3JtYXRMaW5rQXNBdXRvbGluayA9IHJlcXVpcmUoJy4uL3V0aWwvZm9ybWF0LWxpbmstYXMtYXV0b2xpbmsnKVxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiBsaW5rKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIHF1b3RlID0gY2hlY2tRdW90ZShjb250ZXh0KVxuICB2YXIgc3VmZml4ID0gcXVvdGUgPT09ICdcIicgPyAnUXVvdGUnIDogJ0Fwb3N0cm9waGUnXG4gIHZhciB1cmwgPSBub2RlLnVybCB8fCAnJ1xuICB2YXIgdGl0bGUgPSBub2RlLnRpdGxlIHx8ICcnXG4gIHZhciBleGl0XG4gIHZhciB2YWx1ZVxuICB2YXIgc3ViZXhpdFxuICB2YXIgY3VycmVudFN0YWNrXG5cbiAgaWYgKGZvcm1hdExpbmtBc0F1dG9saW5rKG5vZGUpKSB7XG4gICAgLy8gSGlkZSB0aGUgZmFjdCB0aGF0IHdl4oCZcmUgaW4gcGhyYXNpbmcsIGJlY2F1c2UgZXNjYXBlcyBkb27igJl0IHdvcmsuXG4gICAgY3VycmVudFN0YWNrID0gY29udGV4dC5zdGFja1xuICAgIGNvbnRleHQuc3RhY2sgPSBbXVxuICAgIGV4aXQgPSBjb250ZXh0LmVudGVyKCdhdXRvbGluaycpXG4gICAgdmFsdWUgPSAnPCcgKyBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnPCcsIGFmdGVyOiAnPid9KSArICc+J1xuICAgIGV4aXQoKVxuICAgIGNvbnRleHQuc3RhY2sgPSBjdXJyZW50U3RhY2tcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGV4aXQgPSBjb250ZXh0LmVudGVyKCdsaW5rJylcbiAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xhYmVsJylcbiAgdmFsdWUgPSAnWycgKyBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnWycsIGFmdGVyOiAnXSd9KSArICddKCdcbiAgc3ViZXhpdCgpXG5cbiAgaWYgKFxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB1cmwgYnV0IHRoZXJlIGlzIGEgdGl0bGXigKZcbiAgICAoIXVybCAmJiB0aXRsZSkgfHxcbiAgICAvLyBPciBpZiB0aGVyZeKAmXMgbWFya2Rvd24gd2hpdGVzcGFjZSBvciBhbiBlb2wsIGVuY2xvc2UuXG4gICAgL1sgXFx0XFxyXFxuXS8udGVzdCh1cmwpXG4gICkge1xuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdkZXN0aW5hdGlvbkxpdGVyYWwnKVxuICAgIHZhbHVlICs9ICc8JyArIHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnPCcsIGFmdGVyOiAnPid9KSArICc+J1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIHdoaXRlc3BhY2UsIHJhdyBpcyBwcmV0dGllci5cbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignZGVzdGluYXRpb25SYXcnKVxuICAgIHZhbHVlICs9IHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnICcsIGFmdGVyOiAnICd9KVxuICB9XG5cbiAgc3ViZXhpdCgpXG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3RpdGxlJyArIHN1ZmZpeClcbiAgICB2YWx1ZSArPVxuICAgICAgJyAnICsgcXVvdGUgKyBzYWZlKGNvbnRleHQsIHRpdGxlLCB7YmVmb3JlOiBxdW90ZSwgYWZ0ZXI6IHF1b3RlfSkgKyBxdW90ZVxuICAgIHN1YmV4aXQoKVxuICB9XG5cbiAgdmFsdWUgKz0gJyknXG5cbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBsaW5rUGVlayhub2RlKSB7XG4gIHJldHVybiBmb3JtYXRMaW5rQXNBdXRvbGluayhub2RlKSA/ICc8JyA6ICdbJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsaXN0SXRlbVxuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgY2hlY2tCdWxsZXQgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLWJ1bGxldCcpXG52YXIgY2hlY2tMaXN0SXRlbUluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stbGlzdC1pdGVtLWluZGVudCcpXG52YXIgZmxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLWZsb3cnKVxudmFyIGluZGVudExpbmVzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmRlbnQtbGluZXMnKVxuXG5mdW5jdGlvbiBsaXN0SXRlbShub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgdmFyIGJ1bGxldCA9IGNoZWNrQnVsbGV0KGNvbnRleHQpXG4gIHZhciBsaXN0SXRlbUluZGVudCA9IGNoZWNrTGlzdEl0ZW1JbmRlbnQoY29udGV4dClcbiAgdmFyIGluZGVudFNpemVcbiAgdmFyIGV4aXRcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQub3JkZXJlZCkge1xuICAgIGJ1bGxldCA9XG4gICAgICAocGFyZW50LnN0YXJ0ID4gLTEgPyBwYXJlbnQuc3RhcnQgOiAxKSArXG4gICAgICAoY29udGV4dC5vcHRpb25zLmluY3JlbWVudExpc3RNYXJrZXIgPT09IGZhbHNlXG4gICAgICAgID8gMFxuICAgICAgICA6IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpKSArXG4gICAgICAnLidcbiAgfVxuXG4gIGluZGVudFNpemUgPSBidWxsZXQubGVuZ3RoICsgMVxuXG4gIGlmIChcbiAgICBsaXN0SXRlbUluZGVudCA9PT0gJ3RhYicgfHxcbiAgICAobGlzdEl0ZW1JbmRlbnQgPT09ICdtaXhlZCcgJiYgKChwYXJlbnQgJiYgcGFyZW50LnNwcmVhZCkgfHwgbm9kZS5zcHJlYWQpKVxuICApIHtcbiAgICBpbmRlbnRTaXplID0gTWF0aC5jZWlsKGluZGVudFNpemUgLyA0KSAqIDRcbiAgfVxuXG4gIGV4aXQgPSBjb250ZXh0LmVudGVyKCdsaXN0SXRlbScpXG4gIHZhbHVlID0gaW5kZW50TGluZXMoZmxvdyhub2RlLCBjb250ZXh0KSwgbWFwKVxuICBleGl0KClcblxuICByZXR1cm4gdmFsdWVcblxuICBmdW5jdGlvbiBtYXAobGluZSwgaW5kZXgsIGJsYW5rKSB7XG4gICAgaWYgKGluZGV4KSB7XG4gICAgICByZXR1cm4gKGJsYW5rID8gJycgOiByZXBlYXQoJyAnLCBpbmRlbnRTaXplKSkgKyBsaW5lXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChibGFuayA/IGJ1bGxldCA6IGJ1bGxldCArIHJlcGVhdCgnICcsIGluZGVudFNpemUgLSBidWxsZXQubGVuZ3RoKSkgKyBsaW5lXG4gICAgKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIGZsb3cgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1mbG93JylcblxuZnVuY3Rpb24gbGlzdChub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignbGlzdCcpXG4gIHZhciB2YWx1ZSA9IGZsb3cobm9kZSwgY29udGV4dClcbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxuXG5mdW5jdGlvbiBwYXJhZ3JhcGgobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3BhcmFncmFwaCcpXG4gIHZhciBzdWJleGl0ID0gY29udGV4dC5lbnRlcigncGhyYXNpbmcnKVxuICB2YXIgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnXFxuJywgYWZ0ZXI6ICdcXG4nfSlcbiAgc3ViZXhpdCgpXG4gIGV4aXQoKVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgZmxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLWZsb3cnKVxuXG5mdW5jdGlvbiByb290KG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZsb3cobm9kZSwgY29udGV4dClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3Ryb25nXG5zdHJvbmcucGVlayA9IHN0cm9uZ1BlZWtcblxudmFyIGNoZWNrU3Ryb25nID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1zdHJvbmcnKVxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxuXG4vLyBUbyBkbzogdGhlcmUgYXJlIGNhc2VzIHdoZXJlIGVtcGhhc2lzIGNhbm5vdCDigJxmb3Jt4oCdIGRlcGVuZGluZyBvbiB0aGVcbi8vIHByZXZpb3VzIG9yIG5leHQgY2hhcmFjdGVyIG9mIHNlcXVlbmNlcy5cbi8vIFRoZXJl4oCZcyBubyB3YXkgYXJvdW5kIHRoYXQgdGhvdWdoLCBleGNlcHQgZm9yIGluamVjdGluZyB6ZXJvLXdpZHRoIHN0dWZmLlxuLy8gRG8gd2UgbmVlZCB0byBzYWZlZ3VhcmQgYWdhaW5zdCB0aGF0P1xuZnVuY3Rpb24gc3Ryb25nKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNoZWNrU3Ryb25nKGNvbnRleHQpXG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignc3Ryb25nJylcbiAgdmFyIHZhbHVlID0gcGhyYXNpbmcobm9kZSwgY29udGV4dCwge2JlZm9yZTogbWFya2VyLCBhZnRlcjogbWFya2VyfSlcbiAgZXhpdCgpXG4gIHJldHVybiBtYXJrZXIgKyBtYXJrZXIgKyB2YWx1ZSArIG1hcmtlciArIG1hcmtlclxufVxuXG5mdW5jdGlvbiBzdHJvbmdQZWVrKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGNvbnRleHQub3B0aW9ucy5zdHJvbmcgfHwgJyonXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRleHRcblxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiB0ZXh0KG5vZGUsIHBhcmVudCwgY29udGV4dCwgc2FmZU9wdGlvbnMpIHtcbiAgcmV0dXJuIHNhZmUoY29udGV4dCwgbm9kZS52YWx1ZSwgc2FmZU9wdGlvbnMpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGNoZWNrUmVwZWF0ID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1ydWxlLXJlcGVhdCcpXG52YXIgY2hlY2tSdWxlID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1ydWxlJylcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgdmFyIHJ1bGUgPSBjaGVja1J1bGUoY29udGV4dClcbiAgdmFyIHJlcGV0aXRpb24gPSBjaGVja1JlcGVhdChjb250ZXh0KVxuICB2YXIgc3BhY2VzID0gY29udGV4dC5vcHRpb25zLnJ1bGVTcGFjZXNcbiAgdmFyIHZhbHVlID0gcmVwZWF0KHJ1bGUgKyAoc3BhY2VzID8gJyAnIDogJycpLCByZXBldGl0aW9uKVxuICByZXR1cm4gc3BhY2VzID8gdmFsdWUuc2xpY2UoMCwgLTEpIDogdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdG9NYXJrZG93blxuXG52YXIgendpdGNoID0gcmVxdWlyZSgnendpdGNoJylcbnZhciBkZWZhdWx0SGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZScpXG52YXIgZGVmYXVsdFVuc2FmZVBhdHRlcm5zID0gcmVxdWlyZSgnLi91bnNhZmUnKVxudmFyIGRlZmF1bHRKb2luID0gcmVxdWlyZSgnLi9qb2luJylcblxuZnVuY3Rpb24gdG9NYXJrZG93bih0cmVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGV4dGVuc2lvbnMgPSBjb25maWd1cmUoc2V0dGluZ3MpXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBoYW5kbGUgPSB6d2l0Y2goJ3R5cGUnLCB7XG4gICAgaW52YWxpZDogaW52YWxpZCxcbiAgICB1bmtub3duOiB1bmtub3duLFxuICAgIGhhbmRsZXJzOiBleHRlbnNpb25zLmhhbmRsZXJzXG4gIH0pXG4gIHZhciBjb250ZXh0ID0ge1xuICAgIGhhbmRsZTogaGFuZGxlLFxuICAgIHN0YWNrOiBzdGFjayxcbiAgICBlbnRlcjogZW50ZXIsXG4gICAgb3B0aW9uczogc2V0dGluZ3MsXG4gICAgdW5zYWZlUGF0dGVybnM6IGV4dGVuc2lvbnMudW5zYWZlLFxuICAgIGpvaW46IGV4dGVuc2lvbnMuam9pblxuICB9XG4gIHZhciByZXN1bHQgPSBoYW5kbGUodHJlZSwgbnVsbCwgY29udGV4dCwge2JlZm9yZTogJ1xcbicsIGFmdGVyOiAnXFxuJ30pXG5cbiAgaWYgKFxuICAgIHJlc3VsdCAmJlxuICAgIHJlc3VsdC5jaGFyQ29kZUF0KHJlc3VsdC5sZW5ndGggLSAxKSAhPT0gMTAgJiZcbiAgICByZXN1bHQuY2hhckNvZGVBdChyZXN1bHQubGVuZ3RoIC0gMSkgIT09IDEzXG4gICkge1xuICAgIHJlc3VsdCArPSAnXFxuJ1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxuXG4gIGZ1bmN0aW9uIGVudGVyKG5hbWUpIHtcbiAgICBzdGFjay5wdXNoKG5hbWUpXG4gICAgcmV0dXJuIGV4aXRcblxuICAgIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgICBzdGFjay5wb3AoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZhbGlkKHZhbHVlKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhbmRsZSB2YWx1ZSBgJyArIHZhbHVlICsgJ2AsIGV4cGVjdGVkIG5vZGUnKVxufVxuXG5mdW5jdGlvbiB1bmtub3duKG5vZGUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGFuZGxlIHVua25vd24gbm9kZSBgJyArIG5vZGUudHlwZSArICdgJylcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKHNldHRpbmdzKSB7XG4gIHZhciB1bnNhZmUgPSBkZWZhdWx0VW5zYWZlUGF0dGVybnNcbiAgdmFyIGpvaW4gPSBkZWZhdWx0Sm9pblxuICB2YXIgaGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0SGFuZGxlcnMpXG4gIHZhciBleHRlbnNpb25zID0gW1xuICAgIHt1bnNhZmU6IHNldHRpbmdzLnVuc2FmZSwgaGFuZGxlcnM6IHNldHRpbmdzLmhhbmRsZXJzLCBqb2luOiBzZXR0aW5ncy5qb2lufVxuICBdLmNvbmNhdChzZXR0aW5ncy5leHRlbnNpb25zIHx8IFtdKVxuICB2YXIgbGVuZ3RoID0gZXh0ZW5zaW9ucy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGV4dGVuc2lvblxuXG4gIGlmIChzZXR0aW5ncy50aWdodERlZmluaXRpb25zKSB7XG4gICAgam9pbiA9IFtqb2luRGVmaW5pdGlvbl0uY29uY2F0KGpvaW4pXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaW5kZXhdXG4gICAgdW5zYWZlID0gdW5zYWZlLmNvbmNhdChleHRlbnNpb24udW5zYWZlIHx8IFtdKVxuICAgIGpvaW4gPSBqb2luLmNvbmNhdChleHRlbnNpb24uam9pbiB8fCBbXSlcbiAgICBPYmplY3QuYXNzaWduKGhhbmRsZXJzLCBleHRlbnNpb24uaGFuZGxlcnMgfHwge30pXG4gIH1cblxuICByZXR1cm4ge3Vuc2FmZTogdW5zYWZlLCBqb2luOiBqb2luLCBoYW5kbGVyczogaGFuZGxlcnN9XG59XG5cbmZ1bmN0aW9uIGpvaW5EZWZpbml0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIC8vIE5vIGJsYW5rIGxpbmUgYmV0d2VlbiBhZGphY2VudCBkZWZpbml0aW9ucy5cbiAgaWYgKGxlZnQudHlwZSA9PT0gJ2RlZmluaXRpb24nICYmIGxlZnQudHlwZSA9PT0gcmlnaHQudHlwZSkge1xuICAgIHJldHVybiAwXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW2pvaW5EZWZhdWx0c11cblxudmFyIGZvcm1hdENvZGVBc0luZGVudGVkID0gcmVxdWlyZSgnLi91dGlsL2Zvcm1hdC1jb2RlLWFzLWluZGVudGVkJylcbnZhciBmb3JtYXRIZWFkaW5nQXNTZXRleHQgPSByZXF1aXJlKCcuL3V0aWwvZm9ybWF0LWhlYWRpbmctYXMtc2V0ZXh0JylcblxuZnVuY3Rpb24gam9pbkRlZmF1bHRzKGxlZnQsIHJpZ2h0LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgaWYgKFxuICAgIC8vIFR3byBsaXN0cyB3aXRoIHRoZSBzYW1lIG1hcmtlci5cbiAgICAobGVmdC50eXBlID09PSAnbGlzdCcgJiZcbiAgICAgIHJpZ2h0LnR5cGUgPT09IGxlZnQudHlwZSAmJlxuICAgICAgQm9vbGVhbihsZWZ0Lm9yZGVyZWQpID09PSBCb29sZWFuKHJpZ2h0Lm9yZGVyZWQpKSB8fFxuICAgIC8vIEluZGVudGVkIGNvZGUgYWZ0ZXIgbGlzdCBvciBhbm90aGVyIGluZGVudGVkIGNvZGUuXG4gICAgKHJpZ2h0LnR5cGUgPT09ICdjb2RlJyAmJlxuICAgICAgZm9ybWF0Q29kZUFzSW5kZW50ZWQocmlnaHQsIGNvbnRleHQpICYmXG4gICAgICAobGVmdC50eXBlID09PSAnbGlzdCcgfHxcbiAgICAgICAgKGxlZnQudHlwZSA9PT0gcmlnaHQudHlwZSAmJiBmb3JtYXRDb2RlQXNJbmRlbnRlZChsZWZ0LCBjb250ZXh0KSkpKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEpvaW4gY2hpbGRyZW4gb2YgYSBsaXN0IG9yIGFuIGl0ZW0uXG4gIC8vIEluIHdoaWNoIGNhc2UsIGBwYXJlbnRgIGhhcyBhIGBzcHJlYWRgIGZpZWxkLlxuICBpZiAodHlwZW9mIHBhcmVudC5zcHJlYWQgPT09ICdib29sZWFuJykge1xuICAgIGlmIChcbiAgICAgIGxlZnQudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiZcbiAgICAgIC8vIFR3byBwYXJhZ3JhcGhzLlxuICAgICAgKGxlZnQudHlwZSA9PT0gcmlnaHQudHlwZSB8fFxuICAgICAgICByaWdodC50eXBlID09PSAnZGVmaW5pdGlvbicgfHxcbiAgICAgICAgLy8gUGFyYWdyYXBoIGZvbGxvd2VkIGJ5IGEgc2V0ZXh0IGhlYWRpbmcuXG4gICAgICAgIChyaWdodC50eXBlID09PSAnaGVhZGluZycgJiYgZm9ybWF0SGVhZGluZ0FzU2V0ZXh0KHJpZ2h0LCBjb250ZXh0KSkpXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnNwcmVhZCA/IDEgOiAwXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICB7XG4gICAgY2hhcmFjdGVyOiAnXFx0JyxcbiAgICBpbkNvbnN0cnVjdDogWydjb2RlRmVuY2VkTGFuZ0dyYXZlQWNjZW50JywgJ2NvZGVGZW5jZWRMYW5nVGlsZGUnXVxuICB9LFxuICB7XG4gICAgY2hhcmFjdGVyOiAnXFxyJyxcbiAgICBpbkNvbnN0cnVjdDogW1xuICAgICAgJ2NvZGVGZW5jZWRMYW5nR3JhdmVBY2NlbnQnLFxuICAgICAgJ2NvZGVGZW5jZWRMYW5nVGlsZGUnLFxuICAgICAgJ2NvZGVGZW5jZWRNZXRhR3JhdmVBY2NlbnQnLFxuICAgICAgJ2NvZGVGZW5jZWRNZXRhVGlsZGUnLFxuICAgICAgJ2Rlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICAgICAnaGVhZGluZ0F0eCdcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICdcXG4nLFxuICAgIGluQ29uc3RydWN0OiBbXG4gICAgICAnY29kZUZlbmNlZExhbmdHcmF2ZUFjY2VudCcsXG4gICAgICAnY29kZUZlbmNlZExhbmdUaWxkZScsXG4gICAgICAnY29kZUZlbmNlZE1ldGFHcmF2ZUFjY2VudCcsXG4gICAgICAnY29kZUZlbmNlZE1ldGFUaWxkZScsXG4gICAgICAnZGVzdGluYXRpb25MaXRlcmFsJyxcbiAgICAgICdoZWFkaW5nQXR4J1xuICAgIF1cbiAgfSxcbiAge1xuICAgIGNoYXJhY3RlcjogJyAnLFxuICAgIGluQ29uc3RydWN0OiBbJ2NvZGVGZW5jZWRMYW5nR3JhdmVBY2NlbnQnLCAnY29kZUZlbmNlZExhbmdUaWxkZSddXG4gIH0sXG4gIC8vIEFuIGV4Y2xhbWF0aW9uIG1hcmsgY2FuIHN0YXJ0IGFuIGltYWdlLCBpZiBpdCBpcyBmb2xsb3dlZCBieSBhIGxpbmsgb3JcbiAgLy8gYSBsaW5rIHJlZmVyZW5jZS5cbiAge2NoYXJhY3RlcjogJyEnLCBhZnRlcjogJ1xcXFxbJywgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZyd9LFxuICAvLyBBIHF1b3RlIGNhbiBicmVhayBvdXQgb2YgYSB0aXRsZS5cbiAge2NoYXJhY3RlcjogJ1wiJywgaW5Db25zdHJ1Y3Q6ICd0aXRsZVF1b3RlJ30sXG4gIC8vIEEgbnVtYmVyIHNpZ24gY291bGQgc3RhcnQgYW4gQVRYIGhlYWRpbmcgaWYgaXQgc3RhcnRzIGEgbGluZS5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJyMnfSxcbiAgLy8gRG9sbGFyIHNpZ24gYW5kIHBlcmNlbnRhZ2UgYXJlIG5vdCB1c2VkIGluIG1hcmtkb3duLlxuICAvLyBBbiBhbXBlcnNhbmQgY291bGQgc3RhcnQgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICB7Y2hhcmFjdGVyOiAnJicsIGFmdGVyOiAnWyNBLVphLXpdJywgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZyd9LFxuICAvLyBBbiBhcG9zdHJvcGhlIGNhbiBicmVhayBvdXQgb2YgYSB0aXRsZS5cbiAge2NoYXJhY3RlcjogXCInXCIsIGluQ29uc3RydWN0OiAndGl0bGVBcG9zdHJvcGhlJ30sXG4gIC8vIEEgbGVmdCBwYXJlbiBjb3VsZCBicmVhayBvdXQgb2YgYSBkZXN0aW5hdGlvbiByYXcuXG4gIHtjaGFyYWN0ZXI6ICcoJywgaW5Db25zdHJ1Y3Q6ICdkZXN0aW5hdGlvblJhdyd9LFxuICB7YmVmb3JlOiAnXFxcXF0nLCBjaGFyYWN0ZXI6ICcoJywgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZyd9LFxuICAvLyBBIHJpZ2h0IHBhcmVuIGNvdWxkIHN0YXJ0IGEgbGlzdCBpdGVtIG9yIGJyZWFrIG91dCBvZiBhIGRlc3RpbmF0aW9uXG4gIC8vIHJhdy5cbiAge2F0QnJlYWs6IHRydWUsIGJlZm9yZTogJ1xcXFxkKycsIGNoYXJhY3RlcjogJyknfSxcbiAge2NoYXJhY3RlcjogJyknLCBpbkNvbnN0cnVjdDogJ2Rlc3RpbmF0aW9uUmF3J30sXG4gIC8vIEFuIGFzdGVyaXNrIGNhbiBzdGFydCB0aGVtYXRpYyBicmVha3MsIGxpc3QgaXRlbXMsIGVtcGhhc2lzLCBzdHJvbmcuXG4gIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICcqJ30sXG4gIHtjaGFyYWN0ZXI6ICcqJywgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZyd9LFxuICAvLyBBIHBsdXMgc2lnbiBjb3VsZCBzdGFydCBhIGxpc3QgaXRlbS5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJysnfSxcbiAgLy8gQSBkYXNoIGNhbiBzdGFydCB0aGVtYXRpYyBicmVha3MsIGxpc3QgaXRlbXMsIGFuZCBzZXRleHQgaGVhZGluZ1xuICAvLyB1bmRlcmxpbmVzLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnLSd9LFxuICAvLyBBIGRvdCBjb3VsZCBzdGFydCBhIGxpc3QgaXRlbS5cbiAge2F0QnJlYWs6IHRydWUsIGJlZm9yZTogJ1xcXFxkKycsIGNoYXJhY3RlcjogJy4nLCBhZnRlcjogJyg/OlsgXFx0XFxyXFxuXXwkKSd9LFxuICAvLyBTbGFzaCwgY29sb24sIGFuZCBzZW1pY29sb24gYXJlIG5vdCB1c2VkIGluIG1hcmtkb3duIGZvciBjb25zdHJ1Y3RzLlxuICAvLyBBIGxlc3MgdGhhbiBjYW4gc3RhcnQgaHRtbCAoZmxvdyBvciB0ZXh0KSBvciBhbiBhdXRvbGluay5cbiAgLy8gSFRNTCBjb3VsZCBzdGFydCB3aXRoIGFuIGV4Y2xhbWF0aW9uIG1hcmsgKGRlY2xhcmF0aW9uLCBjZGF0YSwgY29tbWVudCksXG4gIC8vIHNsYXNoIChjbG9zaW5nIHRhZyksIHF1ZXN0aW9uIG1hcmsgKGluc3RydWN0aW9uKSwgb3IgYSBsZXR0ZXIgKHRhZykuXG4gIC8vIEFuIGF1dG9saW5rIGFsc28gc3RhcnRzIHdpdGggYSBsZXR0ZXIuXG4gIC8vIEZpbmFsbHksIGl0IGNvdWxkIGJyZWFrIG91dCBvZiBhIGRlc3RpbmF0aW9uIGxpdGVyYWwuXG4gIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICc8JywgYWZ0ZXI6ICdbIS8/QS1aYS16XSd9LFxuICB7Y2hhcmFjdGVyOiAnPCcsIGFmdGVyOiAnWyEvP0EtWmEtel0nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIHtjaGFyYWN0ZXI6ICc8JywgaW5Db25zdHJ1Y3Q6ICdkZXN0aW5hdGlvbkxpdGVyYWwnfSxcbiAgLy8gQW4gZXF1YWxzIHRvIGNhbiBzdGFydCBzZXRleHQgaGVhZGluZyB1bmRlcmxpbmVzLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnPSd9LFxuICAvLyBBIGdyZWF0ZXIgdGhhbiBjYW4gc3RhcnQgYmxvY2sgcXVvdGVzIGFuZCBpdCBjYW4gYnJlYWsgb3V0IG9mIGFcbiAgLy8gZGVzdGluYXRpb24gbGl0ZXJhbC5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJz4nfSxcbiAge2NoYXJhY3RlcjogJz4nLCBpbkNvbnN0cnVjdDogJ2Rlc3RpbmF0aW9uTGl0ZXJhbCd9LFxuICAvLyBRdWVzdGlvbiBtYXJrIGFuZCBhdCBzaWduIGFyZSBub3QgdXNlZCBpbiBtYXJrZG93biBmb3IgY29uc3RydWN0cy5cbiAgLy8gQSBsZWZ0IGJyYWNrZXQgY2FuIHN0YXJ0IGRlZmluaXRpb25zLCByZWZlcmVuY2VzLCBsYWJlbHMsXG4gIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICdbJ30sXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICdbJyxcbiAgICBpbkNvbnN0cnVjdDogWydwaHJhc2luZycsICdsYWJlbCcsICdyZWZlcmVuY2UnXVxuICB9LFxuICAvLyBBIGJhY2tzbGFzaCBjYW4gc3RhcnQgYW4gZXNjYXBlICh3aGVuIGZvbGxvd2VkIGJ5IHB1bmN0dWF0aW9uKSBvciBhXG4gIC8vIGhhcmQgYnJlYWsgKHdoZW4gZm9sbG93ZWQgYnkgYW4gZW9sKS5cbiAge2NoYXJhY3RlcjogJ1xcXFwnLCBhZnRlcjogJ1shLS86LUBbLWB7LX5dJ30sXG4gIHtjaGFyYWN0ZXI6ICdcXFxcJywgYWZ0ZXI6ICdbXFxcXHJcXFxcbl0nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEEgcmlnaHQgYnJhY2tldCBjYW4gZXhpdCBsYWJlbHMuXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICddJyxcbiAgICBpbkNvbnN0cnVjdDogWydsYWJlbCcsICdyZWZlcmVuY2UnXVxuICB9LFxuICAvLyBDYXJldCBpcyBub3QgdXNlZCBpbiBtYXJrZG93biBmb3IgY29uc3RydWN0cy5cbiAgLy8gQW4gdW5kZXJzY29yZSBjYW4gc3RhcnQgZW1waGFzaXMsIHN0cm9uZywgb3IgYSB0aGVtYXRpYyBicmVhay5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJ18nfSxcbiAge2JlZm9yZTogJ1teQS1aYS16XScsIGNoYXJhY3RlcjogJ18nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIHtjaGFyYWN0ZXI6ICdfJywgYWZ0ZXI6ICdbXkEtWmEtel0nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEEgZ3JhdmUgYWNjZW50IGNhbiBzdGFydCBjb2RlIChmZW5jZWQgb3IgdGV4dCksIG9yIGl0IGNhbiBicmVhayBvdXQgb2ZcbiAgLy8gYSBncmF2ZSBhY2NlbnQgY29kZSBmZW5jZS5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJ2AnfSxcbiAge1xuICAgIGNoYXJhY3RlcjogJ2AnLFxuICAgIGluQ29uc3RydWN0OiBbXG4gICAgICAnY29kZUZlbmNlZExhbmdHcmF2ZUFjY2VudCcsXG4gICAgICAnY29kZUZlbmNlZE1ldGFHcmF2ZUFjY2VudCcsXG4gICAgICAncGhyYXNpbmcnXG4gICAgXVxuICB9LFxuICAvLyBMZWZ0IGJyYWNlLCB2ZXJ0aWNhbCBiYXIsIHJpZ2h0IGJyYWNlIGFyZSBub3QgdXNlZCBpbiBtYXJrZG93biBmb3JcbiAgLy8gY29uc3RydWN0cy5cbiAgLy8gQSB0aWxkZSBjYW4gc3RhcnQgY29kZSAoZmVuY2VkKS5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJ34nfVxuXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBhc3NvY2lhdGlvblxuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eScpXG5cbnZhciBjaGFyYWN0ZXJFc2NhcGUgPSAvXFxcXChbIS0vOi1AWy1gey1+XSkvZ1xudmFyIGNoYXJhY3RlclJlZmVyZW5jZSA9IC8mKCMoXFxkezEsN318eFtcXGRhLWZdezEsNn0pfFtcXGRhLXpdezEsMzF9KTsvZ2lcblxuLy8gVGhlIGBsYWJlbGAgb2YgYW4gYXNzb2NpYXRpb24gaXMgdGhlIHN0cmluZyB2YWx1ZTogY2hhcmFjdGVyIGVzY2FwZXMgYW5kXG4vLyByZWZlcmVuY2VzIHdvcmssIGFuZCBjYXNpbmcgaXMgaW50YWN0LlxuLy8gVGhlIGBpZGVudGlmaWVyYCBpcyB1c2VkIHRvIG1hdGNoIG9uZSBhc3NvY2lhdGlvbiB0byBhbm90aGVyOiBjb250cm92ZXJzaWFsbHksXG4vLyBjaGFyYWN0ZXIgZXNjYXBlcyBhbmQgcmVmZXJlbmNlcyBkb27igJl0IHdvcmsgaW4gdGhpcyBtYXRjaGluZzogYCZjb3B5O2AgZG9lc1xuLy8gbm90IG1hdGNoIGDCqWAsIGFuZCBgXFwrYCBkb2VzIG5vdCBtYXRjaCBgK2AuXG4vLyBCdXQgY2FzaW5nIGlzIGlnbm9yZWQgKGFuZCB3aGl0ZXNwYWNlKSBpcyB0cmltbWVkIGFuZCBjb2xsYXBzZWQ6IGAgQVxcbmJgXG4vLyBtYXRjaGVzIGBhIGJgLlxuLy8gU28sIHdlIGRvIHByZWZlciB0aGUgbGFiZWwgd2hlbiBmaWd1cmluZyBvdXQgaG93IHdl4oCZcmUgZ29pbmcgdG8gc2VyaWFsaXplOlxuLy8gaXQgaGFzIHdoaXRlc3BhY2UsIGNhc2luZywgYW5kIHdlIGNhbiBpZ25vcmUgbW9zdCB1c2VsZXNzIGNoYXJhY3RlciBlc2NhcGVzXG4vLyBhbmQgYWxsIGNoYXJhY3RlciByZWZlcmVuY2VzLlxuZnVuY3Rpb24gYXNzb2NpYXRpb24obm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLmxhYmVsIHx8ICcnXG4gIHZhciBpZGVudGlmaWVyID0gbm9kZS5pZGVudGlmaWVyXG5cbiAgaWYgKHZhbHVlIHx8ICFpZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllclxuICAgIC5yZXBsYWNlKGNoYXJhY3RlckVzY2FwZSwgJyQxJylcbiAgICAucmVwbGFjZShjaGFyYWN0ZXJSZWZlcmVuY2UsIGRlY29kZUlmUG9zc2libGUpXG59XG5cbmZ1bmN0aW9uIGRlY29kZUlmUG9zc2libGUoJDAsICQxKSB7XG4gIHJldHVybiBkZWNvZGUoJDEpIHx8ICQwXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNoZWNrQnVsbGV0XG5cbmZ1bmN0aW9uIGNoZWNrQnVsbGV0KGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNvbnRleHQub3B0aW9ucy5idWxsZXQgfHwgJyonXG5cbiAgaWYgKG1hcmtlciAhPT0gJyonICYmIG1hcmtlciAhPT0gJysnICYmIG1hcmtlciAhPT0gJy0nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBzZXJpYWxpemUgaXRlbXMgd2l0aCBgJyArXG4gICAgICAgIG1hcmtlciArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5idWxsZXRgLCBleHBlY3RlZCBgKmAsIGArYCwgb3IgYC1gJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBtYXJrZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tFbXBoYXNpc1xuXG5mdW5jdGlvbiBjaGVja0VtcGhhc2lzKGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNvbnRleHQub3B0aW9ucy5lbXBoYXNpcyB8fCAnKidcblxuICBpZiAobWFya2VyICE9PSAnKicgJiYgbWFya2VyICE9PSAnXycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBlbXBoYXNpcyB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLmVtcGhhc2lzYCwgZXhwZWN0ZWQgYCpgLCBvciBgX2AnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja0ZlbmNlXG5cbmZ1bmN0aW9uIGNoZWNrRmVuY2UoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLmZlbmNlIHx8ICdgJ1xuXG4gIGlmIChtYXJrZXIgIT09ICdgJyAmJiBtYXJrZXIgIT09ICd+Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIGNvZGUgd2l0aCBgJyArXG4gICAgICAgIG1hcmtlciArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5mZW5jZWAsIGV4cGVjdGVkIGBgIGAgYGAgb3IgYH5gJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBtYXJrZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tMaXN0SXRlbUluZGVudFxuXG5mdW5jdGlvbiBjaGVja0xpc3RJdGVtSW5kZW50KGNvbnRleHQpIHtcbiAgdmFyIHN0eWxlID0gY29udGV4dC5vcHRpb25zLmxpc3RJdGVtSW5kZW50IHx8ICd0YWInXG5cbiAgaWYgKHN0eWxlID09PSAxIHx8IHN0eWxlID09PSAnMScpIHtcbiAgICBzdHlsZSA9ICdvbmUnXG4gIH1cblxuICBpZiAoc3R5bGUgIT09ICd0YWInICYmIHN0eWxlICE9PSAnb25lJyAmJiBzdHlsZSAhPT0gJ21peGVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIGl0ZW1zIHdpdGggYCcgK1xuICAgICAgICBzdHlsZSArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5saXN0SXRlbUluZGVudGAsIGV4cGVjdGVkIGB0YWJgLCBgb25lYCwgb3IgYG1peGVkYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gc3R5bGVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tRdW90ZVxuXG5mdW5jdGlvbiBjaGVja1F1b3RlKGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNvbnRleHQub3B0aW9ucy5xdW90ZSB8fCAnXCInXG5cbiAgaWYgKG1hcmtlciAhPT0gJ1wiJyAmJiBtYXJrZXIgIT09IFwiJ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBzZXJpYWxpemUgdGl0bGUgd2l0aCBgJyArXG4gICAgICAgIG1hcmtlciArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5xdW90ZWAsIGV4cGVjdGVkIGBcImAsIG9yIGBcXCdgJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBtYXJrZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tSdWxlXG5cbmZ1bmN0aW9uIGNoZWNrUnVsZShjb250ZXh0KSB7XG4gIHZhciByZXBldGl0aW9uID0gY29udGV4dC5vcHRpb25zLnJ1bGVSZXBldGl0aW9uIHx8IDNcblxuICBpZiAocmVwZXRpdGlvbiA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBydWxlcyB3aXRoIHJlcGV0aXRpb24gYCcgK1xuICAgICAgICByZXBldGl0aW9uICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLnJ1bGVSZXBldGl0aW9uYCwgZXhwZWN0ZWQgYDNgIG9yIG1vcmUnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHJlcGV0aXRpb25cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tSdWxlXG5cbmZ1bmN0aW9uIGNoZWNrUnVsZShjb250ZXh0KSB7XG4gIHZhciBtYXJrZXIgPSBjb250ZXh0Lm9wdGlvbnMucnVsZSB8fCAnKidcblxuICBpZiAobWFya2VyICE9PSAnKicgJiYgbWFya2VyICE9PSAnLScgJiYgbWFya2VyICE9PSAnXycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBydWxlcyB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLnJ1bGVgLCBleHBlY3RlZCBgKmAsIGAtYCwgb3IgYF9gJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBtYXJrZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tTdHJvbmdcblxuZnVuY3Rpb24gY2hlY2tTdHJvbmcoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLnN0cm9uZyB8fCAnKidcblxuICBpZiAobWFya2VyICE9PSAnKicgJiYgbWFya2VyICE9PSAnXycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBzdHJvbmcgd2l0aCBgJyArXG4gICAgICAgIG1hcmtlciArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5zdHJvbmdgLCBleHBlY3RlZCBgKmAsIG9yIGBfYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gbWFya2VyXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZsb3dcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5mdW5jdGlvbiBmbG93KHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgbmV4dCA9IGNoaWxkcmVuWzBdXG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoaWxkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGlsZCA9IG5leHRcbiAgICBuZXh0ID0gY2hpbGRyZW5baW5kZXggKyAxXVxuXG4gICAgcmVzdWx0cy5wdXNoKFxuICAgICAgY29udGV4dC5oYW5kbGUoY2hpbGQsIHBhcmVudCwgY29udGV4dCwge2JlZm9yZTogJ1xcbicsIGFmdGVyOiAnXFxuJ30pXG4gICAgKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHJlc3VsdHMucHVzaChiZXR3ZWVuKGNoaWxkLCBuZXh0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4obGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciByZXN1bHRcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY29udGV4dC5qb2luLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gY29udGV4dC5qb2luW2luZGV4XShsZWZ0LCByaWdodCwgcGFyZW50LCBjb250ZXh0KVxuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlIHx8IHJlc3VsdCA9PT0gMSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHJlcGVhdCgnXFxuJywgMSArIE51bWJlcihyZXN1bHQpKVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbjwhLS0tLT5cXG5cXG4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICdcXG5cXG4nXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcGhyYXNpbmdcblxuZnVuY3Rpb24gcGhyYXNpbmcocGFyZW50LCBjb250ZXh0LCBzYWZlT3B0aW9ucykge1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBjdXJyZW50ID0gJydcbiAgdmFyIG5leHQgPSBjaGlsZHJlblswXVxuICB2YXIgYmVmb3JlID0gc2FmZU9wdGlvbnMuYmVmb3JlXG4gIHZhciBhZnRlclxuICB2YXIgaGFuZGxlTmV4dFxuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gbmV4dFxuICAgIG5leHQgPSBjaGlsZHJlbltpbmRleCArIDFdXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgaGFuZGxlTmV4dCA9IGNvbnRleHQuaGFuZGxlLmhhbmRsZXJzW25leHQudHlwZV1cbiAgICAgIGlmIChoYW5kbGVOZXh0ICYmIGhhbmRsZU5leHQucGVlaykgaGFuZGxlTmV4dCA9IGhhbmRsZU5leHQucGVla1xuICAgICAgYWZ0ZXIgPSBoYW5kbGVOZXh0XG4gICAgICAgID8gaGFuZGxlTmV4dChuZXh0LCBwYXJlbnQsIGNvbnRleHQsIHtiZWZvcmU6ICcnLCBhZnRlcjogJyd9KS5jaGFyQXQoMClcbiAgICAgICAgOiAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlciA9IHNhZmVPcHRpb25zLmFmdGVyXG4gICAgfVxuXG4gICAgY3VycmVudCA9IGNvbnRleHQuaGFuZGxlKGNoaWxkLCBwYXJlbnQsIGNvbnRleHQsIHtcbiAgICAgIGJlZm9yZTogYmVmb3JlLFxuICAgICAgYWZ0ZXI6IGFmdGVyXG4gICAgfSlcbiAgICByZXN1bHRzLnB1c2goY3VycmVudClcbiAgICBiZWZvcmUgPSBjdXJyZW50LmNoYXJBdChjdXJyZW50Lmxlbmd0aCAtIDEpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRDb2RlQXNJbmRlbnRlZFxuXG5mdW5jdGlvbiBmb3JtYXRDb2RlQXNJbmRlbnRlZChub2RlLCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcblxuICByZXR1cm4gKFxuICAgICFjb250ZXh0Lm9wdGlvbnMuZmVuY2VzICYmXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIGluZm/igKZcbiAgICAhbm9kZS5sYW5nICYmXG4gICAgLy8gQW5kIHRoZXJl4oCZcyBhIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcuKAplxuICAgIC9bXiBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJlxuICAgIC8vIEFuZCB0aGUgdmFsdWUgZG9lc27igJl0IHN0YXJ0IG9yIGVuZCBpbiBhIGJsYW5r4oCmXG4gICAgIS9eW1xcdCBdKltcXHJcXG5dfFtcXHJcXG5dW1xcdCBdKiQvLnRlc3QodmFsdWUpXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZm9ybWF0SGVhZGluZ0FzU2V0ZXh0XG5cbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tc3RyaW5nJylcblxuZnVuY3Rpb24gZm9ybWF0SGVhZGluZ0FzU2V0ZXh0KG5vZGUsIGNvbnRleHQpIHtcbiAgcmV0dXJuIChcbiAgICBjb250ZXh0Lm9wdGlvbnMuc2V0ZXh0ICYmICghbm9kZS5kZXB0aCB8fCBub2RlLmRlcHRoIDwgMykgJiYgdG9TdHJpbmcobm9kZSlcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRMaW5rQXNBdXRvbGlua1xuXG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLXN0cmluZycpXG5cbmZ1bmN0aW9uIGZvcm1hdExpbmtBc0F1dG9saW5rKG5vZGUpIHtcbiAgdmFyIHJhdyA9IHRvU3RyaW5nKG5vZGUpXG4gIHZhciB1cmwgPSBub2RlLnVybFxuXG4gIHJldHVybiAoXG4gICAgLy8gSWYgdGhlcmXigJlzIGEgdXJs4oCmXG4gICAgdXJsICYmXG4gICAgLy8gQW5kIHRoZXJl4oCZcyBhIG5vIHRpdGxl4oCmXG4gICAgIW5vZGUudGl0bGUgJiZcbiAgICAvLyBBbmQgaWYgdGhlIHVybCBpcyB0aGUgc2FtZSBhcyB0aGUgY29udGVudOKAplxuICAgIChyYXcgPT09IHVybCB8fCAnbWFpbHRvOicgKyByYXcgPT09IHVybCkgJiZcbiAgICAvLyBBbmQgdGhhdCBzdGFydHMgdy8gYSBwcm90b2NvbOKAplxuICAgIC9eW2Etel1bYS16Ky4tXSs6L2kudGVzdCh1cmwpICYmXG4gICAgLy8gQW5kIHRoYXQgZG9lc27igJl0IGNvbnRhaW4gQVNDSUkgY29udHJvbCBjb2RlcyAoY2hhcmFjdGVyIGVzY2FwZXMgYW5kXG4gICAgLy8gcmVmZXJlbmNlcyBkb27igJl0IHdvcmspIG9yIGFuZ2xlIGJyYWNrZXRz4oCmXG4gICAgIS9bXFwwLSA8PlxcdTAwN0ZdLy50ZXN0KHVybClcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRMaW5lc1xuXG52YXIgZW9sID0gL1xccj9cXG58XFxyL2dcblxuZnVuY3Rpb24gaW5kZW50TGluZXModmFsdWUsIG1hcCkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgbGluZSA9IDBcbiAgdmFyIG1hdGNoXG5cbiAgd2hpbGUgKChtYXRjaCA9IGVvbC5leGVjKHZhbHVlKSkpIHtcbiAgICBvbmUodmFsdWUuc2xpY2Uoc3RhcnQsIG1hdGNoLmluZGV4KSlcbiAgICByZXN1bHQucHVzaChtYXRjaFswXSlcbiAgICBzdGFydCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgbGluZSsrXG4gIH1cblxuICBvbmUodmFsdWUuc2xpY2Uoc3RhcnQpKVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICBmdW5jdGlvbiBvbmUodmFsdWUpIHtcbiAgICByZXN1bHQucHVzaChtYXAodmFsdWUsIGxpbmUsICF2YWx1ZSkpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2FmZVxuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcblxudmFyIHJlZ2V4UHVuY3R1YXRpb24gPSAvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9cbnZhciBtYXJrZG93blB1bmN0dWF0aW9uID0gL1shLS86LUBbLWB7LX5dL1xuXG5mdW5jdGlvbiBzYWZlKGNvbnRleHQsIGlucHV0LCBjb25maWcpIHtcbiAgdmFyIHZhbHVlID0gaW5wdXQgfHwgJydcbiAgdmFyIHBhdHRlcm5zID0gY29udGV4dC51bnNhZmVQYXR0ZXJuc1xuICB2YXIgbGVuZ3RoID0gcGF0dGVybnMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBwb3NpdGlvbnMgPSBbXVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc2l0aW9uXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHBhdHRlcm5cbiAgdmFyIGV4cHJlc3Npb25cbiAgdmFyIG1hdGNoXG4gIHZhciBzdGFydFxuICB2YXIgZW5kXG5cbiAgaWYgKGNvbmZpZy5iZWZvcmUpIHtcbiAgICB2YWx1ZSA9IGNvbmZpZy5iZWZvcmUgKyB2YWx1ZVxuICB9XG5cbiAgaWYgKGNvbmZpZy5hZnRlcikge1xuICAgIHZhbHVlICs9IGNvbmZpZy5hZnRlclxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybnNbaW5kZXhdXG5cbiAgICBpZiAoXG4gICAgICAhaW5TY29wZShjb250ZXh0LnN0YWNrLCBwYXR0ZXJuLmluQ29uc3RydWN0LCB0cnVlKSB8fFxuICAgICAgaW5TY29wZShjb250ZXh0LnN0YWNrLCBwYXR0ZXJuLm5vdEluQ29uc3RydWN0KVxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBleHByZXNzaW9uID0gdG9FeHByZXNzaW9uKHBhdHRlcm4pXG5cbiAgICB3aGlsZSAoKG1hdGNoID0gZXhwcmVzc2lvbi5leGVjKHZhbHVlKSkpIHtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKFxuICAgICAgICBtYXRjaC5pbmRleCArIChwYXR0ZXJuLmJlZm9yZSB8fCBwYXR0ZXJuLmF0QnJlYWsgPyBtYXRjaFsxXS5sZW5ndGggOiAwKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHBvc2l0aW9ucy5zb3J0KG51bWVyaWNhbClcblxuICBzdGFydCA9IGNvbmZpZy5iZWZvcmUgPyBjb25maWcuYmVmb3JlLmxlbmd0aCA6IDBcbiAgZW5kID0gdmFsdWUubGVuZ3RoIC0gKGNvbmZpZy5hZnRlciA/IGNvbmZpZy5hZnRlci5sZW5ndGggOiAwKVxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XVxuXG4gICAgaWYgKFxuICAgICAgLy8gQ2hhcmFjdGVyIGJlZm9yZSBvciBhZnRlciBtYXRjaGVkOlxuICAgICAgcG9zaXRpb24gPCBzdGFydCB8fFxuICAgICAgcG9zaXRpb24gPj0gZW5kIHx8XG4gICAgICAvLyBDaGFyYWN0ZXIgbWF0Y2hlZCBtdWx0aXBsZSB0aW1lczpcbiAgICAgIHBvc2l0aW9uID09PSBwb3NpdGlvbnNbaW5kZXggKyAxXVxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgIT09IHBvc2l0aW9uKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZS5zbGljZShzdGFydCwgcG9zaXRpb24pKVxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwb3NpdGlvbilcbiAgICBzdGFydCA9IHBvc2l0aW9uXG5cbiAgICBpZiAoXG4gICAgICBtYXJrZG93blB1bmN0dWF0aW9uLnRlc3QoY2hhcmFjdGVyKSAmJlxuICAgICAgKCFjb25maWcuZW5jb2RlIHx8IGNvbmZpZy5lbmNvZGUuaW5kZXhPZihjaGFyYWN0ZXIpID09PSAtMSlcbiAgICApIHtcbiAgICAgIC8vIENoYXJhY3RlciBlc2NhcGUuXG4gICAgICByZXN1bHQucHVzaCgnXFxcXCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoYXJhY3RlciByZWZlcmVuY2UuXG4gICAgICByZXN1bHQucHVzaChlbmNvZGUoY2hhcmFjdGVyLCB7c3Vic2V0OiBbY2hhcmFjdGVyXX0pKVxuICAgICAgc3RhcnQrK1xuICAgIH1cbiAgfVxuXG4gIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpKVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cblxuZnVuY3Rpb24gaW5TY29wZShzdGFjaywgbGlzdCwgbm9uZSkge1xuICB2YXIgbGVuZ3RoXG4gIHZhciBpbmRleFxuXG4gIGlmICghbGlzdCkge1xuICAgIHJldHVybiBub25lXG4gIH1cblxuICBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgbGlzdCA9IFtsaXN0XVxuICB9XG5cbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHN0YWNrLmluZGV4T2YobGlzdFtpbmRleF0pICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKHBhdHRlcm4pIHtcbiAgdmFyIGJlZm9yZSA9IHBhdHRlcm4uYmVmb3JlID8gJyg/OicgKyBwYXR0ZXJuLmJlZm9yZSArICcpJyA6ICcnXG4gIHZhciBhZnRlciA9IHBhdHRlcm4uYWZ0ZXIgPyAnKD86JyArIHBhdHRlcm4uYWZ0ZXIgKyAnKScgOiAnJ1xuXG4gIGlmIChwYXR0ZXJuLmF0QnJlYWspIHtcbiAgICBiZWZvcmUgPSAnW1xcXFxyXFxcXG5dW1xcXFx0IF0qJyArIGJlZm9yZVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgKGJlZm9yZSA/ICcoJyArIGJlZm9yZSArICcpJyA6ICcnKSArXG4gICAgICAocmVnZXhQdW5jdHVhdGlvbi50ZXN0KHBhdHRlcm4uY2hhcmFjdGVyKSA/ICdcXFxcJyA6ICcnKSArXG4gICAgICBwYXR0ZXJuLmNoYXJhY3RlciArXG4gICAgICAoYWZ0ZXIgfHwgJycpLFxuICAgICdnJ1xuICApXG59XG5cbmZ1bmN0aW9uIG51bWVyaWNhbChhLCBiKSB7XG4gIHJldHVybiBhIC0gYlxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1odG1sNCcpXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRhbmdlcm91cyA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzLmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuZW5jb2RlLmVzY2FwZSA9IGVzY2FwZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gQ2hhcmFjdGVyc1xudmFyIGVxdWFsc1RvID0gNjFcblxuLy8gTGlzdCBvZiBlbmZvcmNlZCBlc2NhcGVzLlxudmFyIGVzY2FwZXMgPSBbJ1wiJywgXCInXCIsICc8JywgJz4nLCAnJicsICdgJ11cblxuLy8gTWFwIG9mIGNoYXJhY3RlcnMgdG8gbmFtZXMuXG52YXIgY2hhcmFjdGVycyA9IGNvbnN0cnVjdCgpXG5cbi8vIERlZmF1bHQgZXNjYXBlcy5cbnZhciBkZWZhdWx0RXNjYXBlcyA9IHRvRXhwcmVzc2lvbihlc2NhcGVzKVxuXG4vLyBTdXJyb2dhdGUgcGFpcnMuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2dcblxuLy8gTm9uLUFTQ0lJIGNoYXJhY3RlcnMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleCwgdW5pY29ybi9uby1oZXgtZXNjYXBlXG52YXIgYm1wID0gL1tcXHgwMS1cXHRcXHgwQlxcZlxceDBFLVxceDFGXFx4N0ZcXHg4MVxceDhEXFx4OEZcXHg5MFxceDlEXFx4QTAtXFx1RkZGRl0vZ1xuXG4vLyBFbmNvZGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc3Vic2V0ID0gc2V0dGluZ3Muc3Vic2V0XG4gIHZhciBzZXQgPSBzdWJzZXQgPyB0b0V4cHJlc3Npb24oc3Vic2V0KSA6IGRlZmF1bHRFc2NhcGVzXG4gIHZhciBlc2NhcGVPbmx5ID0gc2V0dGluZ3MuZXNjYXBlT25seVxuICB2YXIgb21pdCA9IHNldHRpbmdzLm9taXRPcHRpb25hbFNlbWljb2xvbnNcblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2V0LCByZXBsYWNlKVxuXG4gIGlmIChzdWJzZXQgfHwgZXNjYXBlT25seSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3Vycm9nYXRlUGFpciwgcmVwbGFjZVN1cnJvZ2F0ZVBhaXIpXG4gICAgLnJlcGxhY2UoYm1wLCByZXBsYWNlKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdXJyb2dhdGVQYWlyKHBhaXIsIHBvcywgdmFsKSB7XG4gICAgcmV0dXJuIHRvSGV4UmVmZXJlbmNlKFxuICAgICAgKHBhaXIuY2hhckNvZGVBdCgwKSAtIDB4ZDgwMCkgKiAweDQwMCArXG4gICAgICAgIHBhaXIuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgIDB4ZGMwMCArXG4gICAgICAgIDB4MTAwMDAsXG4gICAgICB2YWwuY2hhckNvZGVBdChwb3MgKyAyKSxcbiAgICAgIG9taXRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGNoYXIsIHBvcywgdmFsKSB7XG4gICAgcmV0dXJuIG9uZShjaGFyLCB2YWwuY2hhckNvZGVBdChwb3MgKyAxKSwgc2V0dGluZ3MpXG4gIH1cbn1cblxuLy8gU2hvcnRjdXQgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBIVE1MLlxuZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG4gIHJldHVybiBlbmNvZGUodmFsdWUsIHtlc2NhcGVPbmx5OiB0cnVlLCB1c2VOYW1lZFJlZmVyZW5jZXM6IHRydWV9KVxufVxuXG4vLyBFbmNvZGUgYGNoYXJgIGFjY29yZGluZyB0byBgb3B0aW9uc2AuXG5mdW5jdGlvbiBvbmUoY2hhciwgbmV4dCwgb3B0aW9ucykge1xuICB2YXIgc2hvcnRlc3QgPSBvcHRpb25zLnVzZVNob3J0ZXN0UmVmZXJlbmNlc1xuICB2YXIgb21pdCA9IG9wdGlvbnMub21pdE9wdGlvbmFsU2VtaWNvbG9uc1xuICB2YXIgbmFtZWRcbiAgdmFyIGNvZGVcbiAgdmFyIG51bWVyaWNcbiAgdmFyIGRlY2ltYWxcblxuICBpZiAoKHNob3J0ZXN0IHx8IG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzKSAmJiBvd24uY2FsbChjaGFyYWN0ZXJzLCBjaGFyKSkge1xuICAgIG5hbWVkID0gdG9OYW1lZChjaGFyYWN0ZXJzW2NoYXJdLCBuZXh0LCBvbWl0LCBvcHRpb25zLmF0dHJpYnV0ZSlcbiAgfVxuXG4gIGlmIChzaG9ydGVzdCB8fCAhbmFtZWQpIHtcbiAgICBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApXG4gICAgbnVtZXJpYyA9IHRvSGV4UmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpXG5cbiAgICAvLyBVc2UgdGhlIHNob3J0ZXN0IG51bWVyaWMgcmVmZXJlbmNlIHdoZW4gcmVxdWVzdGVkLlxuICAgIC8vIEEgc2ltcGxlIGFsZ29yaXRobSB3b3VsZCB1c2UgZGVjaW1hbCBmb3IgYWxsIGNvZGUgcG9pbnRzIHVuZGVyIDEwMCwgYXNcbiAgICAvLyB0aG9zZSBhcmUgc2hvcnRlciB0aGFuIGhleGFkZWNpbWFsOlxuICAgIC8vXG4gICAgLy8gKiBgJiM5OTtgIHZzIGAmI3g2MztgIChkZWNpbWFsIHNob3J0ZXIpXG4gICAgLy8gKiBgJiMxMDA7YCB2cyBgJiN4NjQ7YCAoZXF1YWwpXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBiZWNhdXNlIHdlIHRha2UgYG5leHRgIGludG8gY29uc2lkZXJhdGlvbiB3aGVuIGBvbWl0YCBpcyB1c2VkLFxuICAgIC8vIEFuZCBpdCB3b3VsZCBiZSBwb3NzaWJsZSB0aGF0IGRlY2ltYWxzIGFyZSBzaG9ydGVyIG9uIGJpZ2dlciB2YWx1ZXMgYXNcbiAgICAvLyB3ZWxsIGlmIGBuZXh0YCBpcyBoZXhhZGVjaW1hbCBidXQgbm90IGRlY2ltYWwsIHdlIGluc3RlYWQgY29tcGFyZSBib3RoLlxuICAgIGlmIChzaG9ydGVzdCkge1xuICAgICAgZGVjaW1hbCA9IHRvRGVjaW1hbFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KVxuXG4gICAgICBpZiAoZGVjaW1hbC5sZW5ndGggPCBudW1lcmljLmxlbmd0aCkge1xuICAgICAgICBudW1lcmljID0gZGVjaW1hbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChuYW1lZCAmJiAoIXNob3J0ZXN0IHx8IG5hbWVkLmxlbmd0aCA8IG51bWVyaWMubGVuZ3RoKSkge1xuICAgIHJldHVybiBuYW1lZFxuICB9XG5cbiAgcmV0dXJuIG51bWVyaWNcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGFuIGVudGl0eS5cbmZ1bmN0aW9uIHRvTmFtZWQobmFtZSwgbmV4dCwgb21pdCwgYXR0cmlidXRlKSB7XG4gIHZhciB2YWx1ZSA9ICcmJyArIG5hbWVcblxuICBpZiAoXG4gICAgb21pdCAmJlxuICAgIG93bi5jYWxsKGxlZ2FjeSwgbmFtZSkgJiZcbiAgICBkYW5nZXJvdXMuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiZcbiAgICAoIWF0dHJpYnV0ZSB8fCAobmV4dCAmJiBuZXh0ICE9PSBlcXVhbHNUbyAmJiAhYWxwaGFudW1lcmljYWwobmV4dCkpKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICc7J1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYSBoZXhhZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9IZXhSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdCkge1xuICB2YXIgdmFsdWUgPSAnJiN4JyArIGNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG9taXQgJiYgbmV4dCAmJiAhaGV4YWRlY2ltYWwobmV4dCkgPyB2YWx1ZSA6IHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGRlY2ltYWwgY2hhcmFjdGVyIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIHRvRGVjaW1hbFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmIycgKyBTdHJpbmcoY29kZSlcbiAgcmV0dXJuIG9taXQgJiYgbmV4dCAmJiAhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gQ3JlYXRlIGFuIGV4cHJlc3Npb24gZm9yIGBjaGFyYWN0ZXJzYC5cbmZ1bmN0aW9uIHRvRXhwcmVzc2lvbihjaGFyYWN0ZXJzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdbJyArIGNoYXJhY3RlcnMuam9pbignJykgKyAnXScsICdnJylcbn1cblxuLy8gQ29uc3RydWN0IHRoZSBtYXAuXG5mdW5jdGlvbiBjb25zdHJ1Y3QoKSB7XG4gIHZhciBjaGFycyA9IHt9XG4gIHZhciBuYW1lXG5cbiAgZm9yIChuYW1lIGluIGVudGl0aWVzKSB7XG4gICAgY2hhcnNbZW50aXRpZXNbbmFtZV1dID0gbmFtZVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZ1xuXG4vLyBHZXQgdGhlIHRleHQgY29udGVudCBvZiBhIG5vZGUuXG4vLyBQcmVmZXIgdGhlIG5vZGXigJlzIHBsYWluLXRleHQgZmllbGRzLCBvdGhlcndpc2Ugc2VyaWFsaXplIGl0cyBjaGlsZHJlbixcbi8vIGFuZCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXksIHNlcmlhbGl6ZSB0aGUgbm9kZXMgaW4gaXQuXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgKG5vZGUgJiZcbiAgICAgIChub2RlLnZhbHVlIHx8XG4gICAgICAgIG5vZGUuYWx0IHx8XG4gICAgICAgIG5vZGUudGl0bGUgfHxcbiAgICAgICAgKCdjaGlsZHJlbicgaW4gbm9kZSAmJiBhbGwobm9kZS5jaGlsZHJlbikpIHx8XG4gICAgICAgICgnbGVuZ3RoJyBpbiBub2RlICYmIGFsbChub2RlKSkpKSB8fFxuICAgICcnXG4gIClcbn1cblxuZnVuY3Rpb24gYWxsKHZhbHVlcykge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSB0b1N0cmluZyh2YWx1ZXNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1tBLVphLXpdLylcbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9bXFxkQS1aYS16XS8pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvWyMtJyorXFwtLTk9P0EtWl4tfl0vKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBhc2NpaUNvbnRyb2xcblxuLy8gTm90ZTogRU9GIGlzIHNlZW4gYXMgQVNDSUkgY29udHJvbCBoZXJlLCBiZWNhdXNlIGBudWxsIDwgMzIgPT0gdHJ1ZWAuXG5mdW5jdGlvbiBhc2NpaUNvbnRyb2woY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIFNwZWNpYWwgd2hpdGVzcGFjZSBjb2RlcyAod2hpY2ggaGF2ZSBuZWdhdGl2ZSB2YWx1ZXMpLCBDMCBhbmQgQ29udHJvbFxuICAgIC8vIGNoYXJhY3RlciBERUxcbiAgICBjb2RlIDwgMzIgfHwgY29kZSA9PT0gMTI3XG4gIClcbn1cbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9cXGQvKVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1tcXGRBLUZhLWZdLylcbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9bIS0vOi1AWy1gey1+XS8pXG4iLCIvLyBUaGlzIG1vZHVsZSBpcyBjb21waWxlZCBhd2F5IVxuLy9cbi8vIG1pY3JvbWFyayB3b3JrcyBiYXNlZCBvbiBjaGFyYWN0ZXIgY29kZXMuXG4vLyBUaGlzIG1vZHVsZSBjb250YWlucyBjb25zdGFudHMgZm9yIHRoZSBBU0NJSSBibG9jayBhbmQgdGhlIHJlcGxhY2VtZW50XG4vLyBjaGFyYWN0ZXIuXG4vLyBBIGNvdXBsZSBvZiB0aGVtIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXksIHN1Y2ggYXMgdGhlIGxpbmUgZW5kaW5nc1xuLy8gKENSLCBMRiwgYW5kIENSK0xGLCBjb21tb25seSBrbm93biBhcyBlbmQtb2YtbGluZTogRU9McyksIHRoZSB0YWIgKGhvcml6b250YWxcbi8vIHRhYikgYW5kIGl0cyBleHBhbnNpb24gYmFzZWQgb24gd2hhdCBjb2x1bW4gaXTigJlzIGF0ICh2aXJ0dWFsIHNwYWNlKSxcbi8vIGFuZCB0aGUgZW5kLW9mLWZpbGUgKGVvZikgY2hhcmFjdGVyLlxuLy8gQXMgdmFsdWVzIGFyZSBwcmVwcm9jZXNzZWQgYmVmb3JlIGhhbmRsaW5nIHRoZW0sIHRoZSBhY3R1YWwgY2hhcmFjdGVycyBMRixcbi8vIENSLCBIVCwgYW5kIE5VTCAod2hpY2ggaXMgcHJlc2VudCBhcyB0aGUgcmVwbGFjZW1lbnQgY2hhcmFjdGVyKSwgYXJlXG4vLyBndWFyYW50ZWVkIHRvIG5vdCBleGlzdC5cbi8vXG4vLyBVbmljb2RlIGJhc2ljIGxhdGluIGJsb2NrLlxuZXhwb3J0cy5jYXJyaWFnZVJldHVybiA9IC01XG5leHBvcnRzLmxpbmVGZWVkID0gLTRcbmV4cG9ydHMuY2FycmlhZ2VSZXR1cm5MaW5lRmVlZCA9IC0zXG5leHBvcnRzLmhvcml6b250YWxUYWIgPSAtMlxuZXhwb3J0cy52aXJ0dWFsU3BhY2UgPSAtMVxuZXhwb3J0cy5lb2YgPSBudWxsXG5leHBvcnRzLm51bCA9IDBcbmV4cG9ydHMuc29oID0gMVxuZXhwb3J0cy5zdHggPSAyXG5leHBvcnRzLmV0eCA9IDNcbmV4cG9ydHMuZW90ID0gNFxuZXhwb3J0cy5lbnEgPSA1XG5leHBvcnRzLmFjayA9IDZcbmV4cG9ydHMuYmVsID0gN1xuZXhwb3J0cy5icyA9IDhcbmV4cG9ydHMuaHQgPSA5IC8vIGBcXHRgXG5leHBvcnRzLmxmID0gMTAgLy8gYFxcbmBcbmV4cG9ydHMudnQgPSAxMSAvLyBgXFx2YFxuZXhwb3J0cy5mZiA9IDEyIC8vIGBcXGZgXG5leHBvcnRzLmNyID0gMTMgLy8gYFxccmBcbmV4cG9ydHMuc28gPSAxNFxuZXhwb3J0cy5zaSA9IDE1XG5leHBvcnRzLmRsZSA9IDE2XG5leHBvcnRzLmRjMSA9IDE3XG5leHBvcnRzLmRjMiA9IDE4XG5leHBvcnRzLmRjMyA9IDE5XG5leHBvcnRzLmRjNCA9IDIwXG5leHBvcnRzLm5hayA9IDIxXG5leHBvcnRzLnN5biA9IDIyXG5leHBvcnRzLmV0YiA9IDIzXG5leHBvcnRzLmNhbiA9IDI0XG5leHBvcnRzLmVtID0gMjVcbmV4cG9ydHMuc3ViID0gMjZcbmV4cG9ydHMuZXNjID0gMjdcbmV4cG9ydHMuZnMgPSAyOFxuZXhwb3J0cy5ncyA9IDI5XG5leHBvcnRzLnJzID0gMzBcbmV4cG9ydHMudXMgPSAzMVxuZXhwb3J0cy5zcGFjZSA9IDMyXG5leHBvcnRzLmV4Y2xhbWF0aW9uTWFyayA9IDMzIC8vIGAhYFxuZXhwb3J0cy5xdW90YXRpb25NYXJrID0gMzQgLy8gYFwiYFxuZXhwb3J0cy5udW1iZXJTaWduID0gMzUgLy8gYCNgXG5leHBvcnRzLmRvbGxhclNpZ24gPSAzNiAvLyBgJGBcbmV4cG9ydHMucGVyY2VudFNpZ24gPSAzNyAvLyBgJWBcbmV4cG9ydHMuYW1wZXJzYW5kID0gMzggLy8gYCZgXG5leHBvcnRzLmFwb3N0cm9waGUgPSAzOSAvLyBgJ2BcbmV4cG9ydHMubGVmdFBhcmVudGhlc2lzID0gNDAgLy8gYChgXG5leHBvcnRzLnJpZ2h0UGFyZW50aGVzaXMgPSA0MSAvLyBgKWBcbmV4cG9ydHMuYXN0ZXJpc2sgPSA0MiAvLyBgKmBcbmV4cG9ydHMucGx1c1NpZ24gPSA0MyAvLyBgK2BcbmV4cG9ydHMuY29tbWEgPSA0NCAvLyBgLGBcbmV4cG9ydHMuZGFzaCA9IDQ1IC8vIGAtYFxuZXhwb3J0cy5kb3QgPSA0NiAvLyBgLmBcbmV4cG9ydHMuc2xhc2ggPSA0NyAvLyBgL2BcbmV4cG9ydHMuZGlnaXQwID0gNDggLy8gYDBgXG5leHBvcnRzLmRpZ2l0MSA9IDQ5IC8vIGAxYFxuZXhwb3J0cy5kaWdpdDIgPSA1MCAvLyBgMmBcbmV4cG9ydHMuZGlnaXQzID0gNTEgLy8gYDNgXG5leHBvcnRzLmRpZ2l0NCA9IDUyIC8vIGA0YFxuZXhwb3J0cy5kaWdpdDUgPSA1MyAvLyBgNWBcbmV4cG9ydHMuZGlnaXQ2ID0gNTQgLy8gYDZgXG5leHBvcnRzLmRpZ2l0NyA9IDU1IC8vIGA3YFxuZXhwb3J0cy5kaWdpdDggPSA1NiAvLyBgOGBcbmV4cG9ydHMuZGlnaXQ5ID0gNTcgLy8gYDlgXG5leHBvcnRzLmNvbG9uID0gNTggLy8gYDpgXG5leHBvcnRzLnNlbWljb2xvbiA9IDU5IC8vIGA7YFxuZXhwb3J0cy5sZXNzVGhhbiA9IDYwIC8vIGA8YFxuZXhwb3J0cy5lcXVhbHNUbyA9IDYxIC8vIGA9YFxuZXhwb3J0cy5ncmVhdGVyVGhhbiA9IDYyIC8vIGA+YFxuZXhwb3J0cy5xdWVzdGlvbk1hcmsgPSA2MyAvLyBgP2BcbmV4cG9ydHMuYXRTaWduID0gNjQgLy8gYEBgXG5leHBvcnRzLnVwcGVyY2FzZUEgPSA2NSAvLyBgQWBcbmV4cG9ydHMudXBwZXJjYXNlQiA9IDY2IC8vIGBCYFxuZXhwb3J0cy51cHBlcmNhc2VDID0gNjcgLy8gYENgXG5leHBvcnRzLnVwcGVyY2FzZUQgPSA2OCAvLyBgRGBcbmV4cG9ydHMudXBwZXJjYXNlRSA9IDY5IC8vIGBFYFxuZXhwb3J0cy51cHBlcmNhc2VGID0gNzAgLy8gYEZgXG5leHBvcnRzLnVwcGVyY2FzZUcgPSA3MSAvLyBgR2BcbmV4cG9ydHMudXBwZXJjYXNlSCA9IDcyIC8vIGBIYFxuZXhwb3J0cy51cHBlcmNhc2VJID0gNzMgLy8gYElgXG5leHBvcnRzLnVwcGVyY2FzZUogPSA3NCAvLyBgSmBcbmV4cG9ydHMudXBwZXJjYXNlSyA9IDc1IC8vIGBLYFxuZXhwb3J0cy51cHBlcmNhc2VMID0gNzYgLy8gYExgXG5leHBvcnRzLnVwcGVyY2FzZU0gPSA3NyAvLyBgTWBcbmV4cG9ydHMudXBwZXJjYXNlTiA9IDc4IC8vIGBOYFxuZXhwb3J0cy51cHBlcmNhc2VPID0gNzkgLy8gYE9gXG5leHBvcnRzLnVwcGVyY2FzZVAgPSA4MCAvLyBgUGBcbmV4cG9ydHMudXBwZXJjYXNlUSA9IDgxIC8vIGBRYFxuZXhwb3J0cy51cHBlcmNhc2VSID0gODIgLy8gYFJgXG5leHBvcnRzLnVwcGVyY2FzZVMgPSA4MyAvLyBgU2BcbmV4cG9ydHMudXBwZXJjYXNlVCA9IDg0IC8vIGBUYFxuZXhwb3J0cy51cHBlcmNhc2VVID0gODUgLy8gYFVgXG5leHBvcnRzLnVwcGVyY2FzZVYgPSA4NiAvLyBgVmBcbmV4cG9ydHMudXBwZXJjYXNlVyA9IDg3IC8vIGBXYFxuZXhwb3J0cy51cHBlcmNhc2VYID0gODggLy8gYFhgXG5leHBvcnRzLnVwcGVyY2FzZVkgPSA4OSAvLyBgWWBcbmV4cG9ydHMudXBwZXJjYXNlWiA9IDkwIC8vIGBaYFxuZXhwb3J0cy5sZWZ0U3F1YXJlQnJhY2tldCA9IDkxIC8vIGBbYFxuZXhwb3J0cy5iYWNrc2xhc2ggPSA5MiAvLyBgXFxgXG5leHBvcnRzLnJpZ2h0U3F1YXJlQnJhY2tldCA9IDkzIC8vIGBdYFxuZXhwb3J0cy5jYXJldCA9IDk0IC8vIGBeYFxuZXhwb3J0cy51bmRlcnNjb3JlID0gOTUgLy8gYF9gXG5leHBvcnRzLmdyYXZlQWNjZW50ID0gOTYgLy8gYGAgYCBgYFxuZXhwb3J0cy5sb3dlcmNhc2VBID0gOTcgLy8gYGFgXG5leHBvcnRzLmxvd2VyY2FzZUIgPSA5OCAvLyBgYmBcbmV4cG9ydHMubG93ZXJjYXNlQyA9IDk5IC8vIGBjYFxuZXhwb3J0cy5sb3dlcmNhc2VEID0gMTAwIC8vIGBkYFxuZXhwb3J0cy5sb3dlcmNhc2VFID0gMTAxIC8vIGBlYFxuZXhwb3J0cy5sb3dlcmNhc2VGID0gMTAyIC8vIGBmYFxuZXhwb3J0cy5sb3dlcmNhc2VHID0gMTAzIC8vIGBnYFxuZXhwb3J0cy5sb3dlcmNhc2VIID0gMTA0IC8vIGBoYFxuZXhwb3J0cy5sb3dlcmNhc2VJID0gMTA1IC8vIGBpYFxuZXhwb3J0cy5sb3dlcmNhc2VKID0gMTA2IC8vIGBqYFxuZXhwb3J0cy5sb3dlcmNhc2VLID0gMTA3IC8vIGBrYFxuZXhwb3J0cy5sb3dlcmNhc2VMID0gMTA4IC8vIGBsYFxuZXhwb3J0cy5sb3dlcmNhc2VNID0gMTA5IC8vIGBtYFxuZXhwb3J0cy5sb3dlcmNhc2VOID0gMTEwIC8vIGBuYFxuZXhwb3J0cy5sb3dlcmNhc2VPID0gMTExIC8vIGBvYFxuZXhwb3J0cy5sb3dlcmNhc2VQID0gMTEyIC8vIGBwYFxuZXhwb3J0cy5sb3dlcmNhc2VRID0gMTEzIC8vIGBxYFxuZXhwb3J0cy5sb3dlcmNhc2VSID0gMTE0IC8vIGByYFxuZXhwb3J0cy5sb3dlcmNhc2VTID0gMTE1IC8vIGBzYFxuZXhwb3J0cy5sb3dlcmNhc2VUID0gMTE2IC8vIGB0YFxuZXhwb3J0cy5sb3dlcmNhc2VVID0gMTE3IC8vIGB1YFxuZXhwb3J0cy5sb3dlcmNhc2VWID0gMTE4IC8vIGB2YFxuZXhwb3J0cy5sb3dlcmNhc2VXID0gMTE5IC8vIGB3YFxuZXhwb3J0cy5sb3dlcmNhc2VYID0gMTIwIC8vIGB4YFxuZXhwb3J0cy5sb3dlcmNhc2VZID0gMTIxIC8vIGB5YFxuZXhwb3J0cy5sb3dlcmNhc2VaID0gMTIyIC8vIGB6YFxuZXhwb3J0cy5sZWZ0Q3VybHlCcmFjZSA9IDEyMyAvLyBge2BcbmV4cG9ydHMudmVydGljYWxCYXIgPSAxMjQgLy8gYHxgXG5leHBvcnRzLnJpZ2h0Q3VybHlCcmFjZSA9IDEyNSAvLyBgfWBcbmV4cG9ydHMudGlsZGUgPSAxMjYgLy8gYH5gXG5leHBvcnRzLmRlbCA9IDEyN1xuLy8gVW5pY29kZSBTcGVjaWFscyBibG9jay5cbmV4cG9ydHMuYnl0ZU9yZGVyTWFya2VyID0gNjUyNzlcbi8vIFVuaWNvZGUgU3BlY2lhbHMgYmxvY2suXG5leHBvcnRzLnJlcGxhY2VtZW50Q2hhcmFjdGVyID0gNjU1MzMgLy8gYO+/vWBcbiIsIm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZVxuXG5mdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPCAwIHx8IGNvZGUgPT09IDMyXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duTGluZUVuZGluZ1xuXG5mdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkge1xuICByZXR1cm4gY29kZSA8IC0yXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duU3BhY2VcblxuZnVuY3Rpb24gbWFya2Rvd25TcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMlxufVxuIiwidmFyIHVuaWNvZGVQdW5jdHVhdGlvbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L3VuaWNvZGUtcHVuY3R1YXRpb24tcmVnZXgnKVxudmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbi8vIFNpemUgbm90ZTogcmVtb3ZpbmcgQVNDSUkgZnJvbSB0aGUgcmVnZXggYW5kIHVzaW5nIGBhc2NpaS1wdW5jdHVhdGlvbmAgaGVyZVxuLy8gSW4gZmFjdCBhZGRzIHRvIHRoZSBidW5kbGUgc2l6ZS5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2sodW5pY29kZVB1bmN0dWF0aW9uKVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1xccy8pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ25cbiIsIi8vIFRoaXMgbW9kdWxlIGlzIGNvbXBpbGVkIGF3YXkhXG4vL1xuLy8gUGFyc2luZyBtYXJrZG93biBjb21lcyB3aXRoIGEgY291cGxlIG9mIGNvbnN0YW50cywgc3VjaCBhcyBtaW5pbXVtIG9yIG1heGltdW1cbi8vIHNpemVzIG9mIGNlcnRhaW4gc2VxdWVuY2VzLlxuLy8gQWRkaXRpb25hbGx5LCB0aGVyZSBhcmUgYSBjb3VwbGUgc3ltYm9scyB1c2VkIGluc2lkZSBtaWNyb21hcmsuXG4vLyBUaGVzZSBhcmUgYWxsIGRlZmluZWQgaGVyZSwgYnV0IGNvbXBpbGVkIGF3YXkgYnkgc2NyaXB0cy5cbmV4cG9ydHMuYXNjaWlBbHBoYUNhc2VEaWZmZXJlbmNlID0gMzIgLy8gVGhlIHNoaWZ0IGJldHdlZW4gbG93ZXItIGFuZCB1cHBlcmNhc2UgaXMgYDB4MjBgLlxuZXhwb3J0cy5hdHRlbnRpb25TaWRlQmVmb3JlID0gMSAvLyBTeW1ib2wgdG8gbWFyayBhbiBhdHRlbnRpb24gc2VxdWVuY2UgYXMgYmVmb3JlIGNvbnRlbnQ6IGAqYWBcbmV4cG9ydHMuYXR0ZW50aW9uU2lkZUFmdGVyID0gMiAvLyBTeW1ib2wgdG8gbWFyayBhbiBhdHRlbnRpb24gc2VxdWVuY2UgYXMgYWZ0ZXIgY29udGVudDogYGEqYFxuZXhwb3J0cy5hdHhIZWFkaW5nT3BlbmluZ0ZlbmNlU2l6ZU1heCA9IDYgLy8gNiBudW1iZXIgc2lnbnMgaXMgZmluZSwgNyBpc27igJl0LlxuZXhwb3J0cy5hdXRvbGlua0RvbWFpblNpemVNYXggPSA2MyAvLyA2MyBjaGFyYWN0ZXJzIGlzIGZpbmUsIDY0IGlzIHRvbyBtYW55LlxuZXhwb3J0cy5hdXRvbGlua1NjaGVtZVNpemVNYXggPSAzMiAvLyAzMiBjaGFyYWN0ZXJzIGlzIGZpbmUsIDMzIGlzIHRvbyBtYW55LlxuZXhwb3J0cy5jZGF0YU9wZW5pbmdTdHJpbmcgPSAnQ0RBVEFbJyAvLyBBbmQgcHJlY2VkZWQgYnkgYDwhW2AuXG5leHBvcnRzLmNoYXJhY3Rlckdyb3VwV2hpdGVzcGFjZSA9IDEgLy8gU3ltYm9sIHVzZWQgdG8gaW5kaWNhdGUgYSBjaGFyYWN0ZXIgaXMgd2hpdGVzcGFjZVxuZXhwb3J0cy5jaGFyYWN0ZXJHcm91cFB1bmN0dWF0aW9uID0gMiAvLyBTeW1ib2wgdXNlZCB0byBpbmRpY2F0ZSBhIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlXG5leHBvcnRzLmNoYXJhY3RlclJlZmVyZW5jZURlY2ltYWxTaXplTWF4ID0gNyAvLyBgJiM5OTk5OTk5O2AuXG5leHBvcnRzLmNoYXJhY3RlclJlZmVyZW5jZUhleGFkZWNpbWFsU2l6ZU1heCA9IDYgLy8gYCYjeGZmOTk5OTtgLlxuZXhwb3J0cy5jaGFyYWN0ZXJSZWZlcmVuY2VOYW1lZFNpemVNYXggPSAzMSAvLyBgJkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWw7YC5cbmV4cG9ydHMuY29kZUZlbmNlZFNlcXVlbmNlU2l6ZU1pbiA9IDMgLy8gQXQgbGVhc3QgMyB0aWNrcyBvciB0aWxkZXMgYXJlIG5lZWRlZC5cbmV4cG9ydHMuY29udGVudFR5cGVGbG93ID0gJ2Zsb3cnXG5leHBvcnRzLmNvbnRlbnRUeXBlQ29udGVudCA9ICdjb250ZW50J1xuZXhwb3J0cy5jb250ZW50VHlwZVN0cmluZyA9ICdzdHJpbmcnXG5leHBvcnRzLmNvbnRlbnRUeXBlVGV4dCA9ICd0ZXh0J1xuZXhwb3J0cy5oYXJkQnJlYWtQcmVmaXhTaXplTWluID0gMiAvLyBBdCBsZWFzdCAyIHRyYWlsaW5nIHNwYWNlcyBhcmUgbmVlZGVkLlxuZXhwb3J0cy5odG1sUmF3ID0gMSAvLyBTeW1ib2wgZm9yIGA8c2NyaXB0PmBcbmV4cG9ydHMuaHRtbENvbW1lbnQgPSAyIC8vIFN5bWJvbCBmb3IgYDwhLS0tLT5gXG5leHBvcnRzLmh0bWxJbnN0cnVjdGlvbiA9IDMgLy8gU3ltYm9sIGZvciBgPD9waHA/PmBcbmV4cG9ydHMuaHRtbERlY2xhcmF0aW9uID0gNCAvLyBTeW1ib2wgZm9yIGA8IWRvY3R5cGU+YFxuZXhwb3J0cy5odG1sQ2RhdGEgPSA1IC8vIFN5bWJvbCBmb3IgYDwhW0NEQVRBW11dPmBcbmV4cG9ydHMuaHRtbEJhc2ljID0gNiAvLyBTeW1ib2wgZm9yIGA8ZGl2YFxuZXhwb3J0cy5odG1sQ29tcGxldGUgPSA3IC8vIFN5bWJvbCBmb3IgYDx4PmBcbmV4cG9ydHMuaHRtbFJhd1NpemVNYXggPSA2IC8vIExlbmd0aCBvZiBgc2NyaXB0YC5cbmV4cG9ydHMubGlua1Jlc291cmNlRGVzdGluYXRpb25CYWxhbmNlTWF4ID0gMyAvLyBTZWU6IDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jbGluay1kZXN0aW5hdGlvbj5cbmV4cG9ydHMubGlua1JlZmVyZW5jZVNpemVNYXggPSA5OTkgLy8gU2VlOiA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2xpbmstbGFiZWw+XG5leHBvcnRzLmxpc3RJdGVtVmFsdWVTaXplTWF4ID0gMTAgLy8gU2VlOiA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI29yZGVyZWQtbGlzdC1tYXJrZXI+XG5leHBvcnRzLm51bWVyaWNCYXNlRGVjaW1hbCA9IDEwXG5leHBvcnRzLm51bWVyaWNCYXNlSGV4YWRlY2ltYWwgPSAweDEwXG5leHBvcnRzLnRhYlNpemUgPSA0IC8vIFRhYnMgaGF2ZSBhIGhhcmQtY29kZWQgc2l6ZSBvZiA0LCBwZXIgQ29tbW9uTWFyay5cbmV4cG9ydHMudGhlbWF0aWNCcmVha01hcmtlckNvdW50TWluID0gMyAvLyBBdCBsZWFzdCAzIGFzdGVyaXNrcywgZGFzaGVzLCBvciB1bmRlcnNjb3JlcyBhcmUgbmVlZGVkLlxuZXhwb3J0cy52OE1heFNhZmVDaHVua1NpemUgPSAxMDAwMCAvLyBWOCAoYW5kIHBvdGVudGlhbGx5IG90aGVycykgaGF2ZSBwcm9ibGVtcyBpbmplY3RpbmcgZ2lhbnQgYXJyYXlzIGludG8gb3RoZXIgYXJyYXlzLCBoZW5jZSB3ZSBvcGVyYXRlIGluIGNodW5rcy5cbiIsIm1vZHVsZS5leHBvcnRzID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgY29waWVkIGZyb20gPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNodG1sLWJsb2Nrcz4uXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlY3Rpb24nLFxuICAnc291cmNlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG4iLCIvLyBUaGlzIG1vZHVsZSBpcyBjb3BpZWQgZnJvbSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2h0bWwtYmxvY2tzPi5cbm1vZHVsZS5leHBvcnRzID0gWydwcmUnLCAnc2NyaXB0JywgJ3N0eWxlJ11cbiIsIi8vIFRoaXMgbW9kdWxlIGlzIGNvbXBpbGVkIGF3YXkhXG4vL1xuLy8gSGVyZSBpcyB0aGUgbGlzdCBvZiBhbGwgdHlwZXMgb2YgdG9rZW5zIGV4cG9zZWQgYnkgbWljcm9tYXJrLCB3aXRoIGEgc2hvcnRcbi8vIGV4cGxhbmF0aW9uIG9mIHdoYXQgdGhleSBpbmNsdWRlIGFuZCB3aGVyZSB0aGV5IGFyZSBmb3VuZC5cbi8vIEluIHBpY2tpbmcgbmFtZXMsIGdlbmVyYWxseSwgdGhlIHJ1bGUgaXMgdG8gYmUgYXMgZXhwbGljaXQgYXMgcG9zc2libGVcbi8vIGluc3RlYWQgb2YgcmV1c2luZyBuYW1lcy5cbi8vIEZvciBleGFtcGxlLCB0aGVyZSBpcyBhIGBkZWZpbml0aW9uRGVzdGluYXRpb25gIGFuZCBhIGByZXNvdXJjZURlc3RpbmF0aW9uYCxcbi8vIGluc3RlYWQgb2Ygb25lIHNoYXJlZCBuYW1lLlxuXG4vLyBHZW5lcmljIHR5cGUgZm9yIGRhdGEsIHN1Y2ggYXMgaW4gYSB0aXRsZSwgYSBkZXN0aW5hdGlvbiwgZXRjLlxuZXhwb3J0cy5kYXRhID0gJ2RhdGEnXG5cbi8vIEdlbmVyaWMgdHlwZSBmb3Igc3ludGFjdGljIHdoaXRlc3BhY2UgKHRhYnMsIHZpcnR1YWwgc3BhY2VzLCBzcGFjZXMpLlxuLy8gU3VjaCBhcywgYmV0d2VlbiBhIGZlbmNlZCBjb2RlIGZlbmNlIGFuZCBhbiBpbmZvIHN0cmluZy5cbmV4cG9ydHMud2hpdGVzcGFjZSA9ICd3aGl0ZXNwYWNlJ1xuXG4vLyBHZW5lcmljIHR5cGUgZm9yIGxpbmUgZW5kaW5ncyAobGluZSBmZWVkLCBjYXJyaWFnZSByZXR1cm4sIGNhcnJpYWdlIHJldHVybiArXG4vLyBsaW5lIGZlZWQpLlxuZXhwb3J0cy5saW5lRW5kaW5nID0gJ2xpbmVFbmRpbmcnXG5cbi8vIEEgbGluZSBlbmRpbmcsIGJ1dCBlbmRpbmcgYSBibGFuayBsaW5lLlxuZXhwb3J0cy5saW5lRW5kaW5nQmxhbmsgPSAnbGluZUVuZGluZ0JsYW5rJ1xuXG4vLyBHZW5lcmljIHR5cGUgZm9yIHdoaXRlc3BhY2UgKHRhYnMsIHZpcnR1YWwgc3BhY2VzLCBzcGFjZXMpIGF0IHRoZSBzdGFydCBvZiBhXG4vLyBsaW5lLlxuZXhwb3J0cy5saW5lUHJlZml4ID0gJ2xpbmVQcmVmaXgnXG5cbi8vIEdlbmVyaWMgdHlwZSBmb3Igd2hpdGVzcGFjZSAodGFicywgdmlydHVhbCBzcGFjZXMsIHNwYWNlcykgYXQgdGhlIGVuZCBvZiBhXG4vLyBsaW5lLlxuZXhwb3J0cy5saW5lU3VmZml4ID0gJ2xpbmVTdWZmaXgnXG5cbi8vIFdob2xlIEFUWCBoZWFkaW5nOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAjXG4vLyAjIyBBbHBoYVxuLy8gIyMjIEJyYXZvICMjI1xuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGF0eEhlYWRpbmdTZXF1ZW5jZWAsIGB3aGl0ZXNwYWNlYCwgYGF0eEhlYWRpbmdUZXh0YC5cbmV4cG9ydHMuYXR4SGVhZGluZyA9ICdhdHhIZWFkaW5nJ1xuXG4vLyBTZXF1ZW5jZSBvZiBudW1iZXIgc2lnbnMgaW4gYW4gQVRYIGhlYWRpbmcgKGAjIyNgKS5cbmV4cG9ydHMuYXR4SGVhZGluZ1NlcXVlbmNlID0gJ2F0eEhlYWRpbmdTZXF1ZW5jZSdcblxuLy8gQ29udGVudCBpbiBhbiBBVFggaGVhZGluZyAoYGFscGhhYCkuXG4vLyBJbmNsdWRlcyB0ZXh0LlxuZXhwb3J0cy5hdHhIZWFkaW5nVGV4dCA9ICdhdHhIZWFkaW5nVGV4dCdcblxuLy8gV2hvbGUgYXV0b2xpbmsgKGA8aHR0cHM6Ly9leGFtcGxlLmNvbT5gIG9yIGA8YWRtaW5AZXhhbXBsZS5jb20+YClcbi8vIEluY2x1ZGVzIGBhdXRvbGlua01hcmtlcmAgYW5kIGBhdXRvbGlua1Byb3RvY29sYCBvciBgYXV0b2xpbmtFbWFpbGAuXG5leHBvcnRzLmF1dG9saW5rID0gJ2F1dG9saW5rJ1xuXG4vLyBFbWFpbCBhdXRvbGluayB3L28gbWFya2VycyAoYGFkbWluQGV4YW1wbGUuY29tYClcbmV4cG9ydHMuYXV0b2xpbmtFbWFpbCA9ICdhdXRvbGlua0VtYWlsJ1xuXG4vLyBNYXJrZXIgYXJvdW5kIGFuIGBhdXRvbGlua1Byb3RvY29sYCBvciBgYXV0b2xpbmtFbWFpbGAgKGA8YCBvciBgPmApLlxuZXhwb3J0cy5hdXRvbGlua01hcmtlciA9ICdhdXRvbGlua01hcmtlcidcblxuLy8gUHJvdG9jb2wgYXV0b2xpbmsgdy9vIG1hcmtlcnMgKGBodHRwczovL2V4YW1wbGUuY29tYClcbmV4cG9ydHMuYXV0b2xpbmtQcm90b2NvbCA9ICdhdXRvbGlua1Byb3RvY29sJ1xuXG4vLyBBIHdob2xlIGNoYXJhY3RlciBlc2NhcGUgKGBcXC1gKS5cbi8vIEluY2x1ZGVzIGBlc2NhcGVNYXJrZXJgIGFuZCBgY2hhcmFjdGVyRXNjYXBlVmFsdWVgLlxuZXhwb3J0cy5jaGFyYWN0ZXJFc2NhcGUgPSAnY2hhcmFjdGVyRXNjYXBlJ1xuXG4vLyBUaGUgZXNjYXBlZCBjaGFyYWN0ZXIgKGAtYCkuXG5leHBvcnRzLmNoYXJhY3RlckVzY2FwZVZhbHVlID0gJ2NoYXJhY3RlckVzY2FwZVZhbHVlJ1xuXG4vLyBBIHdob2xlIGNoYXJhY3RlciByZWZlcmVuY2UgKGAmYW1wO2AsIGAmIzg4MDA7YCwgb3IgYCYjeDFEMzA2O2ApLlxuLy8gSW5jbHVkZXMgYGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlcmAsIGFuIG9wdGlvbmFsXG4vLyBgY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpY2AsIGluIHdoaWNoIGNhc2UgYW4gb3B0aW9uYWxcbi8vIGBjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbGAsIGFuZCBhIGBjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZWAuXG5leHBvcnRzLmNoYXJhY3RlclJlZmVyZW5jZSA9ICdjaGFyYWN0ZXJSZWZlcmVuY2UnXG5cbi8vIFRoZSBzdGFydCBvciBlbmQgbWFya2VyIChgJmAgb3IgYDtgKS5cbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyID0gJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcidcblxuLy8gTWFyayByZWZlcmVuY2UgYXMgbnVtZXJpYyAoYCNgKS5cbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpYyA9ICdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJ1xuXG4vLyBNYXJrIHJlZmVyZW5jZSBhcyBudW1lcmljIChgeGAgb3IgYFhgKS5cbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwgPVxuICAnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwnXG5cbi8vIFZhbHVlIG9mIGNoYXJhY3RlciByZWZlcmVuY2Ugdy9vIG1hcmtlcnMgKGBhbXBgLCBgODgwMGAsIG9yIGAxRDMwNmApLlxuZXhwb3J0cy5jaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZSA9ICdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZSdcblxuLy8gV2hvbGUgZmVuY2VkIGNvZGU6XG4vL1xuLy8gYGBgYG1hcmtkb3duXG4vLyBgYGBqc1xuLy8gYWxlcnQoMSlcbi8vIGBgYFxuLy8gYGBgYFxuZXhwb3J0cy5jb2RlRmVuY2VkID0gJ2NvZGVGZW5jZWQnXG5cbi8vIEEgZmVuY2VkIGNvZGUgZmVuY2UsIGluY2x1ZGluZyB3aGl0ZXNwYWNlLCBzZXF1ZW5jZSwgaW5mbywgYW5kIG1ldGFcbi8vIChgIGBgYGpzIGApLlxuZXhwb3J0cy5jb2RlRmVuY2VkRmVuY2UgPSAnY29kZUZlbmNlZEZlbmNlJ1xuXG4vLyBTZXF1ZW5jZSBvZiBncmF2ZSBhY2NlbnQgb3IgdGlsZGUgY2hhcmFjdGVycyAoYCBgYGAgYCkgaW4gYSBmZW5jZS5cbmV4cG9ydHMuY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UgPSAnY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnXG5cbi8vIEluZm8gd29yZCAoYGpzYCkgaW4gYSBmZW5jZS5cbi8vIEluY2x1ZGVzIHN0cmluZy5cbmV4cG9ydHMuY29kZUZlbmNlZEZlbmNlSW5mbyA9ICdjb2RlRmVuY2VkRmVuY2VJbmZvJ1xuXG4vLyBNZXRhIHdvcmRzIChgaGlnaGxpZ2h0PVwiMVwiYCkgaW4gYSBmZW5jZS5cbi8vIEluY2x1ZGVzIHN0cmluZy5cbmV4cG9ydHMuY29kZUZlbmNlZEZlbmNlTWV0YSA9ICdjb2RlRmVuY2VkRmVuY2VNZXRhJ1xuXG4vLyBBIGxpbmUgb2YgY29kZS5cbmV4cG9ydHMuY29kZUZsb3dWYWx1ZSA9ICdjb2RlRmxvd1ZhbHVlJ1xuXG4vLyBXaG9sZSBpbmRlbnRlZCBjb2RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAgICAgYWxlcnQoMSlcbi8vIGBgYFxuLy9cbi8vIEluY2x1ZGVzIGBsaW5lRW5kaW5nYCwgYGxpbmVQcmVmaXhgLCBhbmQgYGNvZGVGbG93VmFsdWVgLlxuZXhwb3J0cy5jb2RlSW5kZW50ZWQgPSAnY29kZUluZGVudGVkJ1xuXG4vLyBBIHRleHQgY29kZSAoYGBgIGBhbHBoYWAgYGBgKS5cbi8vIEluY2x1ZGVzIGBjb2RlVGV4dFNlcXVlbmNlYCwgYGNvZGVUZXh0RGF0YWAsIGBsaW5lRW5kaW5nYCwgYW5kIGNhbiBpbmNsdWRlXG4vLyBgY29kZVRleHRQYWRkaW5nYC5cbmV4cG9ydHMuY29kZVRleHQgPSAnY29kZVRleHQnXG5cbmV4cG9ydHMuY29kZVRleHREYXRhID0gJ2NvZGVUZXh0RGF0YSdcblxuLy8gQSBzcGFjZSBvciBsaW5lIGVuZGluZyByaWdodCBhZnRlciBvciBiZWZvcmUgYSB0aWNrLlxuZXhwb3J0cy5jb2RlVGV4dFBhZGRpbmcgPSAnY29kZVRleHRQYWRkaW5nJ1xuXG4vLyBBIHRleHQgY29kZSBmZW5jZSAoYCBgYCBgKS5cbmV4cG9ydHMuY29kZVRleHRTZXF1ZW5jZSA9ICdjb2RlVGV4dFNlcXVlbmNlJ1xuXG4vLyBXaG9sZSBjb250ZW50OlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbYV06IGJcbi8vIGNcbi8vID1cbi8vIGRcbi8vIGBgYFxuLy9cbi8vIEluY2x1ZGVzIGBwYXJhZ3JhcGhgIGFuZCBgZGVmaW5pdGlvbmAuXG5leHBvcnRzLmNvbnRlbnQgPSAnY29udGVudCdcbi8vIFdob2xlIGRlZmluaXRpb246XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFttaWNyb21hcmtdOiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXJrL21pY3JvbWFya1xuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGRlZmluaXRpb25MYWJlbGAsIGBkZWZpbml0aW9uTWFya2VyYCwgYHdoaXRlc3BhY2VgLFxuLy8gYGRlZmluaXRpb25EZXN0aW5hdGlvbmAsIGFuZCBvcHRpb25hbGx5IGBsaW5lRW5kaW5nYCBhbmQgYGRlZmluaXRpb25UaXRsZWAuXG5leHBvcnRzLmRlZmluaXRpb24gPSAnZGVmaW5pdGlvbidcblxuLy8gRGVzdGluYXRpb24gb2YgYSBkZWZpbml0aW9uIChgaHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcmtgIG9yXG4vLyBgPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrPmApLlxuLy8gSW5jbHVkZXMgYGRlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWxgIG9yIGBkZWZpbml0aW9uRGVzdGluYXRpb25SYXdgLlxuZXhwb3J0cy5kZWZpbml0aW9uRGVzdGluYXRpb24gPSAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uJ1xuXG4vLyBFbmNsb3NlZCBkZXN0aW5hdGlvbiBvZiBhIGRlZmluaXRpb25cbi8vIChgPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrPmApLlxuLy8gSW5jbHVkZXMgYGRlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXJgIGFuZCBvcHRpb25hbGx5XG4vLyBgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nYC5cbmV4cG9ydHMuZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbCA9ICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsJ1xuXG4vLyBNYXJrZXJzIG9mIGFuIGVuY2xvc2VkIGRlZmluaXRpb24gZGVzdGluYXRpb24gKGA8YCBvciBgPmApLlxuZXhwb3J0cy5kZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsTWFya2VyID1cbiAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXInXG5cbi8vIFVuZW5jbG9zZWQgZGVzdGluYXRpb24gb2YgYSBkZWZpbml0aW9uXG4vLyAoYGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrYCkuXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nYC5cbmV4cG9ydHMuZGVmaW5pdGlvbkRlc3RpbmF0aW9uUmF3ID0gJ2RlZmluaXRpb25EZXN0aW5hdGlvblJhdydcblxuLy8gVGV4dCBpbiBhbiBkZXN0aW5hdGlvbiAoYGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrYCkuXG4vLyBJbmNsdWRlcyBzdHJpbmcuXG5leHBvcnRzLmRlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZyA9ICdkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmcnXG5cbi8vIExhYmVsIG9mIGEgZGVmaW5pdGlvbiAoYFttaWNyb21hcmtdYCkuXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvbkxhYmVsTWFya2VyYCBhbmQgYGRlZmluaXRpb25MYWJlbFN0cmluZ2AuXG5leHBvcnRzLmRlZmluaXRpb25MYWJlbCA9ICdkZWZpbml0aW9uTGFiZWwnXG5cbi8vIE1hcmtlcnMgb2YgYSBkZWZpbml0aW9uIGxhYmVsIChgW2Agb3IgYF1gKS5cbmV4cG9ydHMuZGVmaW5pdGlvbkxhYmVsTWFya2VyID0gJ2RlZmluaXRpb25MYWJlbE1hcmtlcidcblxuLy8gVmFsdWUgb2YgYSBkZWZpbml0aW9uIGxhYmVsIChgbWljcm9tYXJrYCkuXG4vLyBJbmNsdWRlcyBzdHJpbmcuXG5leHBvcnRzLmRlZmluaXRpb25MYWJlbFN0cmluZyA9ICdkZWZpbml0aW9uTGFiZWxTdHJpbmcnXG5cbi8vIE1hcmtlciBiZXR3ZWVuIGEgbGFiZWwgYW5kIGEgZGVzdGluYXRpb24gKGA6YCkuXG5leHBvcnRzLmRlZmluaXRpb25NYXJrZXIgPSAnZGVmaW5pdGlvbk1hcmtlcidcblxuLy8gVGl0bGUgb2YgYSBkZWZpbml0aW9uIChgXCJ4XCJgLCBgJ3knYCwgb3IgYCh6KWApLlxuLy8gSW5jbHVkZXMgYGRlZmluaXRpb25UaXRsZU1hcmtlcmAgYW5kIG9wdGlvbmFsbHkgYGRlZmluaXRpb25UaXRsZVN0cmluZ2AuXG5leHBvcnRzLmRlZmluaXRpb25UaXRsZSA9ICdkZWZpbml0aW9uVGl0bGUnXG5cbi8vIE1hcmtlciBhcm91bmQgYSB0aXRsZSBvZiBhIGRlZmluaXRpb24gKGBcImAsIGAnYCwgYChgLCBvciBgKWApLlxuZXhwb3J0cy5kZWZpbml0aW9uVGl0bGVNYXJrZXIgPSAnZGVmaW5pdGlvblRpdGxlTWFya2VyJ1xuXG4vLyBEYXRhIHdpdGhvdXQgbWFya2VycyBpbiBhIHRpdGxlIChgemApLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5kZWZpbml0aW9uVGl0bGVTdHJpbmcgPSAnZGVmaW5pdGlvblRpdGxlU3RyaW5nJ1xuXG4vLyBFbXBoYXNpcyAoYCphbHBoYSpgKS5cbi8vIEluY2x1ZGVzIGBlbXBoYXNpc1NlcXVlbmNlYCBhbmQgYGVtcGhhc2lzVGV4dGAuXG5leHBvcnRzLmVtcGhhc2lzID0gJ2VtcGhhc2lzJ1xuXG4vLyBTZXF1ZW5jZSBvZiBlbXBoYXNpcyBtYXJrZXJzIChgKmAgb3IgYF9gKS5cbmV4cG9ydHMuZW1waGFzaXNTZXF1ZW5jZSA9ICdlbXBoYXNpc1NlcXVlbmNlJ1xuXG4vLyBFbXBoYXNpcyB0ZXh0IChgYWxwaGFgKS5cbi8vIEluY2x1ZGVzIHRleHQuXG5leHBvcnRzLmVtcGhhc2lzVGV4dCA9ICdlbXBoYXNpc1RleHQnXG5cbi8vIFRoZSBjaGFyYWN0ZXIgZXNjYXBlIG1hcmtlciAoYFxcYCkuXG5leHBvcnRzLmVzY2FwZU1hcmtlciA9ICdlc2NhcGVNYXJrZXInXG5cbi8vIEEgaGFyZCBicmVhayBjcmVhdGVkIHdpdGggYSBiYWNrc2xhc2ggKGBcXFxcbmApLlxuLy8gSW5jbHVkZXMgYGVzY2FwZU1hcmtlcmAgKGRvZXMgbm90IGluY2x1ZGUgdGhlIGxpbmUgZW5kaW5nKVxuZXhwb3J0cy5oYXJkQnJlYWtFc2NhcGUgPSAnaGFyZEJyZWFrRXNjYXBlJ1xuXG4vLyBBIGhhcmQgYnJlYWsgY3JlYXRlZCB3aXRoIHRyYWlsaW5nIHNwYWNlcyAoYCAgXFxuYCkuXG4vLyBEb2VzIG5vdCBpbmNsdWRlIHRoZSBsaW5lIGVuZGluZy5cbmV4cG9ydHMuaGFyZEJyZWFrVHJhaWxpbmcgPSAnaGFyZEJyZWFrVHJhaWxpbmcnXG5cbi8vIEZsb3cgSFRNTDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gPGRpdlxuLy8gYGBgXG4vL1xuLy8gSW5sY3VkZXMgYGxpbmVFbmRpbmdgLCBgaHRtbEZsb3dEYXRhYC5cbmV4cG9ydHMuaHRtbEZsb3cgPSAnaHRtbEZsb3cnXG5cbmV4cG9ydHMuaHRtbEZsb3dEYXRhID0gJ2h0bWxGbG93RGF0YSdcblxuLy8gSFRNTCBpbiB0ZXh0ICh0aGUgdGFnIGluIGBhIDxpPiBiYCkuXG4vLyBJbmNsdWRlcyBgbGluZUVuZGluZ2AsIGBodG1sVGV4dERhdGFgLlxuZXhwb3J0cy5odG1sVGV4dCA9ICdodG1sVGV4dCdcblxuZXhwb3J0cy5odG1sVGV4dERhdGEgPSAnaHRtbFRleHREYXRhJ1xuXG4vLyBXaG9sZSBpbWFnZSAoYCFbYWxwaGFdKGJyYXZvKWAsIGAhW2FscGhhXVticmF2b11gLCBgIVthbHBoYV1bXWAsIG9yXG4vLyBgIVthbHBoYV1gKS5cbi8vIEluY2x1ZGVzIGBsYWJlbGAgYW5kIGFuIG9wdGlvbmFsIGByZXNvdXJjZWAgb3IgYHJlZmVyZW5jZWAuXG5leHBvcnRzLmltYWdlID0gJ2ltYWdlJ1xuXG4vLyBXaG9sZSBsaW5rIGxhYmVsIChgWyphbHBoYSpdYCkuXG4vLyBJbmNsdWRlcyBgbGFiZWxMaW5rYCBvciBgbGFiZWxJbWFnZWAsIGBsYWJlbFRleHRgLCBhbmQgYGxhYmVsRW5kYC5cbmV4cG9ydHMubGFiZWwgPSAnbGFiZWwnXG5cbi8vIFRleHQgaW4gYW4gbGFiZWwgKGAqYWxwaGEqYCkuXG4vLyBJbmNsdWRlcyB0ZXh0LlxuZXhwb3J0cy5sYWJlbFRleHQgPSAnbGFiZWxUZXh0J1xuXG4vLyBTdGFydCBhIGxpbmsgbGFiZWwgKGBbYCkuXG4vLyBJbmNsdWRlcyBhIGBsYWJlbE1hcmtlcmAuXG5leHBvcnRzLmxhYmVsTGluayA9ICdsYWJlbExpbmsnXG5cbi8vIFN0YXJ0IGFuIGltYWdlIGxhYmVsIChgIVtgKS5cbi8vIEluY2x1ZGVzIGBsYWJlbEltYWdlTWFya2VyYCBhbmQgYGxhYmVsTWFya2VyYC5cbmV4cG9ydHMubGFiZWxJbWFnZSA9ICdsYWJlbEltYWdlJ1xuXG4vLyBNYXJrZXIgb2YgYSBsYWJlbCAoYFtgIG9yIGBdYCkuXG5leHBvcnRzLmxhYmVsTWFya2VyID0gJ2xhYmVsTWFya2VyJ1xuXG4vLyBNYXJrZXIgdG8gc3RhcnQgYW4gaW1hZ2UgKGAhYCkuXG5leHBvcnRzLmxhYmVsSW1hZ2VNYXJrZXIgPSAnbGFiZWxJbWFnZU1hcmtlcidcblxuLy8gRW5kIGEgbGFiZWwgKGBdYCkuXG4vLyBJbmNsdWRlcyBgbGFiZWxNYXJrZXJgLlxuZXhwb3J0cy5sYWJlbEVuZCA9ICdsYWJlbEVuZCdcblxuLy8gV2hvbGUgbGluayAoYFthbHBoYV0oYnJhdm8pYCwgYFthbHBoYV1bYnJhdm9dYCwgYFthbHBoYV1bXWAsIG9yIGBbYWxwaGFdYCkuXG4vLyBJbmNsdWRlcyBgbGFiZWxgIGFuZCBhbiBvcHRpb25hbCBgcmVzb3VyY2VgIG9yIGByZWZlcmVuY2VgLlxuZXhwb3J0cy5saW5rID0gJ2xpbmsnXG5cbi8vIFdob2xlIHBhcmFncmFwaDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gYWxwaGFcbi8vIGJyYXZvLlxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgdGV4dC5cbmV4cG9ydHMucGFyYWdyYXBoID0gJ3BhcmFncmFwaCdcblxuLy8gQSByZWZlcmVuY2UgKGBbYWxwaGFdYCBvciBgW11gKS5cbi8vIEluY2x1ZGVzIGByZWZlcmVuY2VNYXJrZXJgIGFuZCBhbiBvcHRpb25hbCBgcmVmZXJlbmNlU3RyaW5nYC5cbmV4cG9ydHMucmVmZXJlbmNlID0gJ3JlZmVyZW5jZSdcblxuLy8gQSByZWZlcmVuY2UgbWFya2VyIChgW2Agb3IgYF1gKS5cbmV4cG9ydHMucmVmZXJlbmNlTWFya2VyID0gJ3JlZmVyZW5jZU1hcmtlcidcblxuLy8gUmVmZXJlbmNlIHRleHQgKGBhbHBoYWApLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5yZWZlcmVuY2VTdHJpbmcgPSAncmVmZXJlbmNlU3RyaW5nJ1xuXG4vLyBBIHJlc291cmNlIChgKGh0dHBzOi8vZXhhbXBsZS5jb20gXCJhbHBoYVwiKWApLlxuLy8gSW5jbHVkZXMgYHJlc291cmNlTWFya2VyYCwgYW4gb3B0aW9uYWwgYHJlc291cmNlRGVzdGluYXRpb25gIHdpdGggYW4gb3B0aW9uYWxcbi8vIGB3aGl0ZXNwYWNlYCBhbmQgYHJlc291cmNlVGl0bGVgLlxuZXhwb3J0cy5yZXNvdXJjZSA9ICdyZXNvdXJjZSdcblxuLy8gQSByZXNvdXJjZSBkZXN0aW5hdGlvbiAoYGh0dHBzOi8vZXhhbXBsZS5jb21gKS5cbi8vIEluY2x1ZGVzIGByZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbGAgb3IgYHJlc291cmNlRGVzdGluYXRpb25SYXdgLlxuZXhwb3J0cy5yZXNvdXJjZURlc3RpbmF0aW9uID0gJ3Jlc291cmNlRGVzdGluYXRpb24nXG5cbi8vIEEgbGl0ZXJhbCByZXNvdXJjZSBkZXN0aW5hdGlvbiAoYDxodHRwczovL2V4YW1wbGUuY29tPmApLlxuLy8gSW5jbHVkZXMgYHJlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyYCBhbmQgb3B0aW9uYWxseVxuLy8gYHJlc291cmNlRGVzdGluYXRpb25TdHJpbmdgLlxuZXhwb3J0cy5yZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbCA9ICdyZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbCdcblxuLy8gQSByZXNvdXJjZSBkZXN0aW5hdGlvbiBtYXJrZXIgKGA8YCBvciBgPmApLlxuZXhwb3J0cy5yZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbE1hcmtlciA9ICdyZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbE1hcmtlcidcblxuLy8gQSByYXcgcmVzb3VyY2UgZGVzdGluYXRpb24gKGBodHRwczovL2V4YW1wbGUuY29tYCkuXG4vLyBJbmNsdWRlcyBgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZ2AuXG5leHBvcnRzLnJlc291cmNlRGVzdGluYXRpb25SYXcgPSAncmVzb3VyY2VEZXN0aW5hdGlvblJhdydcblxuLy8gUmVzb3VyY2UgZGVzdGluYXRpb24gdGV4dCAoYGh0dHBzOi8vZXhhbXBsZS5jb21gKS5cbi8vIEluY2x1ZGVzIHN0cmluZy5cbmV4cG9ydHMucmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZyA9ICdyZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nJ1xuXG4vLyBBIHJlc291cmNlIG1hcmtlciAoYChgIG9yIGApYCkuXG5leHBvcnRzLnJlc291cmNlTWFya2VyID0gJ3Jlc291cmNlTWFya2VyJ1xuXG4vLyBBIHJlc291cmNlIHRpdGxlIChgXCJhbHBoYVwiYCwgYCdhbHBoYSdgLCBvciBgKGFscGhhKWApLlxuLy8gSW5jbHVkZXMgYHJlc291cmNlVGl0bGVNYXJrZXJgIGFuZCBvcHRpb25hbGx5IGByZXNvdXJjZVRpdGxlU3RyaW5nYC5cbmV4cG9ydHMucmVzb3VyY2VUaXRsZSA9ICdyZXNvdXJjZVRpdGxlJ1xuXG4vLyBBIHJlc291cmNlIHRpdGxlIG1hcmtlciAoYFwiYCwgYCdgLCBgKGAsIG9yIGApYCkuXG5leHBvcnRzLnJlc291cmNlVGl0bGVNYXJrZXIgPSAncmVzb3VyY2VUaXRsZU1hcmtlcidcblxuLy8gUmVzb3VyY2UgZGVzdGluYXRpb24gdGl0bGUgKGBhbHBoYWApLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5yZXNvdXJjZVRpdGxlU3RyaW5nID0gJ3Jlc291cmNlVGl0bGVTdHJpbmcnXG5cbi8vIFdob2xlIHNldGV4dCBoZWFkaW5nOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBhbHBoYVxuLy8gYnJhdm9cbi8vID09PT09XG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyBgc2V0ZXh0SGVhZGluZ1RleHRgLCBgbGluZUVuZGluZ2AsIGBsaW5lUHJlZml4YCwgYW5kXG4vLyBgc2V0ZXh0SGVhZGluZ0xpbmVgLlxuZXhwb3J0cy5zZXRleHRIZWFkaW5nID0gJ3NldGV4dEhlYWRpbmcnXG5cbi8vIENvbnRlbnQgaW4gYSBzZXRleHQgaGVhZGluZyAoYGFscGhhXFxuYnJhdm9gKS5cbi8vIEluY2x1ZGVzIHRleHQuXG5leHBvcnRzLnNldGV4dEhlYWRpbmdUZXh0ID0gJ3NldGV4dEhlYWRpbmdUZXh0J1xuXG4vLyBVbmRlcmxpbmUgaW4gYSBzZXRleHQgaGVhZGluZywgaW5jbHVkaW5nIHdoaXRlc3BhY2Ugc3VmZml4IChgPT1gKS5cbi8vIEluY2x1ZGVzIGBzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlYC5cbmV4cG9ydHMuc2V0ZXh0SGVhZGluZ0xpbmUgPSAnc2V0ZXh0SGVhZGluZ0xpbmUnXG5cbi8vIFNlcXVlbmNlIG9mIGVxdWFscyBvciBkYXNoIGNoYXJhY3RlcnMgaW4gdW5kZXJsaW5lIGluIGEgc2V0ZXh0IGhlYWRpbmcgKGAtYCkuXG5leHBvcnRzLnNldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2UgPSAnc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZSdcblxuLy8gU3Ryb25nIChgKiphbHBoYSoqYCkuXG4vLyBJbmNsdWRlcyBgc3Ryb25nU2VxdWVuY2VgIGFuZCBgc3Ryb25nVGV4dGAuXG5leHBvcnRzLnN0cm9uZyA9ICdzdHJvbmcnXG5cbi8vIFNlcXVlbmNlIG9mIHN0cm9uZyBtYXJrZXJzIChgKipgIG9yIGBfX2ApLlxuZXhwb3J0cy5zdHJvbmdTZXF1ZW5jZSA9ICdzdHJvbmdTZXF1ZW5jZSdcblxuLy8gU3Ryb25nIHRleHQgKGBhbHBoYWApLlxuLy8gSW5jbHVkZXMgdGV4dC5cbmV4cG9ydHMuc3Ryb25nVGV4dCA9ICdzdHJvbmdUZXh0J1xuXG4vLyBXaG9sZSB0aGVtYXRpYyBicmVhazpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gKiAqICpcbi8vIGBgYFxuLy9cbi8vIEluY2x1ZGVzIGB0aGVtYXRpY0JyZWFrU2VxdWVuY2VgIGFuZCBgd2hpdGVzcGFjZWAuXG5leHBvcnRzLnRoZW1hdGljQnJlYWsgPSAndGhlbWF0aWNCcmVhaydcblxuLy8gQSBzZXF1ZW5jZSBvZiBvbmUgb3IgbW9yZSB0aGVtYXRpYyBicmVhayBtYXJrZXJzIChgKioqYCkuXG5leHBvcnRzLnRoZW1hdGljQnJlYWtTZXF1ZW5jZSA9ICd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnXG5cbi8vIFdob2xlIGJsb2NrIHF1b3RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA+IGFcbi8vID5cbi8vID4gYlxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGJsb2NrUXVvdGVQcmVmaXhgIGFuZCBmbG93LlxuZXhwb3J0cy5ibG9ja1F1b3RlID0gJ2Jsb2NrUXVvdGUnXG4vLyBUaGUgYD5gIG9yIGA+IGAgb2YgYSBibG9jayBxdW90ZS5cbmV4cG9ydHMuYmxvY2tRdW90ZVByZWZpeCA9ICdibG9ja1F1b3RlUHJlZml4J1xuLy8gVGhlIGA+YCBvZiBhIGJsb2NrIHF1b3RlIHByZWZpeC5cbmV4cG9ydHMuYmxvY2tRdW90ZU1hcmtlciA9ICdibG9ja1F1b3RlTWFya2VyJ1xuLy8gVGhlIG9wdGlvbmFsIGAgYCBvZiBhIGJsb2NrIHF1b3RlIHByZWZpeC5cbmV4cG9ydHMuYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UgPSAnYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnXG5cbi8vIFdob2xlIHVub3JkZXJlZCBsaXN0OlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAtIGFcbi8vICAgYlxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGxpc3RJdGVtUHJlZml4YCwgZmxvdywgYW5kIG9wdGlvbmFsbHkgIGBsaXN0SXRlbUluZGVudGAgb24gZnVydGhlclxuLy8gbGluZXMuXG5leHBvcnRzLmxpc3RPcmRlcmVkID0gJ2xpc3RPcmRlcmVkJ1xuXG4vLyBXaG9sZSBvcmRlcmVkIGxpc3Q6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIDEuIGFcbi8vICAgIGJcbi8vIGBgYFxuLy9cbi8vIEluY2x1ZGVzIGBsaXN0SXRlbVByZWZpeGAsIGZsb3csIGFuZCBvcHRpb25hbGx5ICBgbGlzdEl0ZW1JbmRlbnRgIG9uIGZ1cnRoZXJcbi8vIGxpbmVzLlxuZXhwb3J0cy5saXN0VW5vcmRlcmVkID0gJ2xpc3RVbm9yZGVyZWQnXG5cbi8vIFRoZSBpbmRlbnQgb2YgZnVydGhlciBsaXN0IGl0ZW0gbGluZXMuXG5leHBvcnRzLmxpc3RJdGVtSW5kZW50ID0gJ2xpc3RJdGVtSW5kZW50J1xuXG4vLyBBIG1hcmtlciwgYXMgaW4sIGAqYCwgYCtgLCBgLWAsIGAuYCwgb3IgYClgLlxuZXhwb3J0cy5saXN0SXRlbU1hcmtlciA9ICdsaXN0SXRlbU1hcmtlcidcblxuLy8gVGhlIHRoaW5nIHRoYXQgc3RhcnRzIGEgbGlzdCBpdGVtLCBzdWNoIGFzIGAxLiBgLlxuLy8gSW5jbHVkZXMgYGxpc3RJdGVtVmFsdWVgIGlmIG9yZGVyZWQsIGBsaXN0SXRlbU1hcmtlcmAsIGFuZFxuLy8gYGxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZWAgKHVubGVzcyBmb2xsb3dlZCBieSBhIGxpbmUgZW5kaW5nKS5cbmV4cG9ydHMubGlzdEl0ZW1QcmVmaXggPSAnbGlzdEl0ZW1QcmVmaXgnXG5cbi8vIFRoZSB3aGl0ZXNwYWNlIGFmdGVyIGEgbWFya2VyLlxuZXhwb3J0cy5saXN0SXRlbVByZWZpeFdoaXRlc3BhY2UgPSAnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJ1xuXG4vLyBUaGUgbnVtZXJpY2FsIHZhbHVlIG9mIGFuIG9yZGVyZWQgaXRlbS5cbmV4cG9ydHMubGlzdEl0ZW1WYWx1ZSA9ICdsaXN0SXRlbVZhbHVlJ1xuXG4vLyBJbnRlcm5hbCB0eXBlcyB1c2VkIGZvciBzdWJ0b2tlbml6ZXJzLCBjb21waWxlZCBhd2F5XG5leHBvcnRzLmNodW5rQ29udGVudCA9ICdjaHVua0NvbnRlbnQnXG5leHBvcnRzLmNodW5rRmxvdyA9ICdjaHVua0Zsb3cnXG5leHBvcnRzLmNodW5rVGV4dCA9ICdjaHVua1RleHQnXG5leHBvcnRzLmNodW5rU3RyaW5nID0gJ2NodW5rU3RyaW5nJ1xuIiwiLy8gVGhpcyBtb2R1bGUgaXMgZ2VuZXJhdGVkIGJ5IGBzY3JpcHQvYC5cbi8vXG4vLyBDb21tb25NYXJrIGhhbmRsZXMgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSBtYXJrZXJzIGJhc2VkIG9uIHdoYXQgY29tZXNcbi8vIGJlZm9yZSBvciBhZnRlciB0aGVtLlxuLy8gT25lIHN1Y2ggZGlmZmVyZW5jZSBpcyBpZiB0aG9zZSBjaGFyYWN0ZXJzIGFyZSBVbmljb2RlIHB1bmN0dWF0aW9uLlxuLy8gVGhpcyBzY3JpcHQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIFVuaWNvZGUgZGF0YS5cbm1vZHVsZS5leHBvcnRzID0gL1shLVxcLzotQFxcWy1gXFx7LX5cXHhBMVxceEE3XFx4QUJcXHhCNlxceEI3XFx4QkJcXHhCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUVcXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwOUZEXFx1MEE3NlxcdTBBRjBcXHUwQzc3XFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMwOC1cXHUyMzBCXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTRGXFx1MkU1MlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdL1xuIiwidmFyIGF0dGVudGlvbiA9IHJlcXVpcmUoJy4vdG9rZW5pemUvYXR0ZW50aW9uJylcbnZhciBoZWFkaW5nQXR4ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eCcpXG52YXIgYXV0b2xpbmsgPSByZXF1aXJlKCcuL3Rva2VuaXplL2F1dG9saW5rJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0JylcbnZhciBibG9ja1F1b3RlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9ibG9jay1xdW90ZScpXG52YXIgY2hhcmFjdGVyRXNjYXBlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jaGFyYWN0ZXItZXNjYXBlJylcbnZhciBjaGFyYWN0ZXJSZWZlcmVuY2UgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NoYXJhY3Rlci1yZWZlcmVuY2UnKVxudmFyIGNvZGVGZW5jZWQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtZmVuY2VkJylcbnZhciBjb2RlSW5kZW50ZWQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQnKVxudmFyIGNvZGVUZXh0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLXRleHQnKVxudmFyIGRlZmluaXRpb24gPSByZXF1aXJlKCcuL3Rva2VuaXplL2RlZmluaXRpb24nKVxudmFyIGhhcmRCcmVha0VzY2FwZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvaGFyZC1icmVhay1lc2NhcGUnKVxudmFyIGh0bWxGbG93ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWZsb3cnKVxudmFyIGh0bWxUZXh0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLXRleHQnKVxudmFyIGxhYmVsRW5kID0gcmVxdWlyZSgnLi90b2tlbml6ZS9sYWJlbC1lbmQnKVxudmFyIGxhYmVsSW1hZ2UgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLXN0YXJ0LWltYWdlJylcbnZhciBsYWJlbExpbmsgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLXN0YXJ0LWxpbmsnKVxudmFyIHNldGV4dFVuZGVybGluZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvc2V0ZXh0LXVuZGVybGluZScpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsnKVxudmFyIGxpbmVFbmRpbmcgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmUtZW5kaW5nJylcbnZhciByZXNvbHZlVGV4dCA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZS90ZXh0JykucmVzb2x2ZXJcblxuZXhwb3J0cy5kb2N1bWVudCA9IHtcbiAgNDI6IGxpc3QsIC8vIEFzdGVyaXNrXG4gIDQzOiBsaXN0LCAvLyBQbHVzIHNpZ25cbiAgNDU6IGxpc3QsIC8vIERhc2hcbiAgNDg6IGxpc3QsIC8vIDBcbiAgNDk6IGxpc3QsIC8vIDFcbiAgNTA6IGxpc3QsIC8vIDJcbiAgNTE6IGxpc3QsIC8vIDNcbiAgNTI6IGxpc3QsIC8vIDRcbiAgNTM6IGxpc3QsIC8vIDVcbiAgNTQ6IGxpc3QsIC8vIDZcbiAgNTU6IGxpc3QsIC8vIDdcbiAgNTY6IGxpc3QsIC8vIDhcbiAgNTc6IGxpc3QsIC8vIDlcbiAgNjI6IGJsb2NrUXVvdGUgLy8gR3JlYXRlciB0aGFuXG59XG5cbmV4cG9ydHMuY29udGVudEluaXRpYWwgPSB7XG4gIDkxOiBkZWZpbml0aW9uIC8vIExlZnQgc3F1YXJlIGJyYWNrZXRcbn1cblxuZXhwb3J0cy5mbG93SW5pdGlhbCA9IHtcbiAgJy0yJzogY29kZUluZGVudGVkLCAvLyBIb3Jpem9udGFsIHRhYlxuICAnLTEnOiBjb2RlSW5kZW50ZWQsIC8vIFZpcnR1YWwgc3BhY2VcbiAgMzI6IGNvZGVJbmRlbnRlZCAvLyBTcGFjZVxufVxuXG5leHBvcnRzLmZsb3cgPSB7XG4gIDM1OiBoZWFkaW5nQXR4LCAvLyBOdW1iZXIgc2lnblxuICA0MjogdGhlbWF0aWNCcmVhaywgLy8gQXN0ZXJpc2tcbiAgNDU6IFtzZXRleHRVbmRlcmxpbmUsIHRoZW1hdGljQnJlYWtdLCAvLyBEYXNoXG4gIDYwOiBodG1sRmxvdywgLy8gTGVzcyB0aGFuXG4gIDYxOiBzZXRleHRVbmRlcmxpbmUsIC8vIEVxdWFscyB0b1xuICA5NTogdGhlbWF0aWNCcmVhaywgLy8gVW5kZXJzY29yZVxuICA5NjogY29kZUZlbmNlZCwgLy8gR3JhdmUgYWNjZW50XG4gIDEyNjogY29kZUZlbmNlZCAvLyBUaWxkZVxufVxuXG5leHBvcnRzLnN0cmluZyA9IHtcbiAgMzg6IGNoYXJhY3RlclJlZmVyZW5jZSwgLy8gQW1wZXJzYW5kXG4gIDkyOiBjaGFyYWN0ZXJFc2NhcGUgLy8gQmFja3NsYXNoXG59XG5cbmV4cG9ydHMudGV4dCA9IHtcbiAgJy01JzogbGluZUVuZGluZywgLy8gQ2FycmlhZ2UgcmV0dXJuXG4gICctNCc6IGxpbmVFbmRpbmcsIC8vIExpbmUgZmVlZFxuICAnLTMnOiBsaW5lRW5kaW5nLCAvLyBDYXJyaWFnZSByZXR1cm4gKyBsaW5lIGZlZWRcbiAgMzM6IGxhYmVsSW1hZ2UsIC8vIEV4Y2xhbWF0aW9uIG1hcmtcbiAgMzg6IGNoYXJhY3RlclJlZmVyZW5jZSwgLy8gQW1wZXJzYW5kXG4gIDQyOiBhdHRlbnRpb24sIC8vIEFzdGVyaXNrXG4gIDYwOiBbYXV0b2xpbmssIGh0bWxUZXh0XSwgLy8gTGVzcyB0aGFuXG4gIDkxOiBsYWJlbExpbmssIC8vIExlZnQgc3F1YXJlIGJyYWNrZXRcbiAgOTI6IFtoYXJkQnJlYWtFc2NhcGUsIGNoYXJhY3RlckVzY2FwZV0sIC8vIEJhY2tzbGFzaFxuICA5MzogbGFiZWxFbmQsIC8vIFJpZ2h0IHNxdWFyZSBicmFja2V0XG4gIDk1OiBhdHRlbnRpb24sIC8vIFVuZGVyc2NvcmVcbiAgOTY6IGNvZGVUZXh0IC8vIEdyYXZlIGFjY2VudFxufVxuXG5leHBvcnRzLmluc2lkZVNwYW4gPSB7XG4gIG51bGw6IFthdHRlbnRpb24sIHJlc29sdmVUZXh0XVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IGluaXRpYWxpemVDb250ZW50XG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRlbnQoZWZmZWN0cykge1xuICB2YXIgY29udGVudFN0YXJ0ID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuY29udGVudEluaXRpYWwsXG4gICAgYWZ0ZXJDb250ZW50U3RhcnRDb25zdHJ1Y3QsXG4gICAgcGFyYWdyYXBoSW5pdGlhbFxuICApXG5cbiAgdmFyIHByZXZpb3VzXG5cbiAgcmV0dXJuIGNvbnRlbnRTdGFydFxuXG4gIGZ1bmN0aW9uIGFmdGVyQ29udGVudFN0YXJ0Q29uc3RydWN0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjb250ZW50U3RhcnQsICdsaW5lUHJlZml4JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmFncmFwaEluaXRpYWwoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3BhcmFncmFwaCcpXG4gICAgcmV0dXJuIGxpbmVTdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbGluZVN0YXJ0KGNvZGUpIHtcbiAgICB2YXIgdG9rZW4gPSBlZmZlY3RzLmVudGVyKCdjaHVua1RleHQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3RleHQnLFxuICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMubmV4dCA9IHRva2VuXG4gICAgfVxuXG4gICAgcHJldmlvdXMgPSB0b2tlblxuXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rVGV4dCcpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3BhcmFncmFwaCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1RleHQnKVxuICAgICAgcmV0dXJuIGxpbmVTdGFydFxuICAgIH1cblxuICAgIC8vIERhdGEuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IGluaXRpYWxpemVEb2N1bWVudFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvZmFjdG9yeS1zcGFjZScpXG52YXIgYmxhbmsgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9wYXJ0aWFsLWJsYW5rLWxpbmUnKVxuXG52YXIgY29udGFpbmVyID0ge3Rva2VuaXplOiB0b2tlbml6ZUNvbnRhaW5lcn1cbnZhciBsYXp5RmxvdyA9IHt0b2tlbml6ZTogdG9rZW5pemVMYXp5Rmxvd31cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURvY3VtZW50KGVmZmVjdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBjb250aW51ZWQgPSAwXG4gIHZhciBpbnNwZWN0UmVzdWx0XG4gIHZhciBjaGlsZEZsb3dcbiAgdmFyIGNoaWxkVG9rZW5cblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvbnRpbnVlZCA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHN0YWNrW2NvbnRpbnVlZF1bMV1cbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgIHN0YWNrW2NvbnRpbnVlZF1bMF0uY29udGludWF0aW9uLFxuICAgICAgICBkb2N1bWVudENvbnRpbnVlLFxuICAgICAgICBkb2N1bWVudENvbnRpbnVlZFxuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZShjb2RlKSB7XG4gICAgY29udGludWVkKytcbiAgICByZXR1cm4gc3RhcnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvY3VtZW50Q29udGludWVkKGNvZGUpIHtcbiAgICAvLyBJZiB3ZeKAmXJlIGluIGEgY29uY3JldGUgY29uc3RydWN0IChzdWNoIGFzIHdoZW4gZXhwZWN0aW5nIGFub3RoZXIgbGluZSBvZlxuICAgIC8vIEhUTUwsIG9yIHdlIHJlc3VsdGVkIGluIGxhenkgY29udGVudCksIHdlIGNhbiBpbW1lZGlhdGVseSBzdGFydCBmbG93LlxuICAgIGlmIChpbnNwZWN0UmVzdWx0ICYmIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlKSB7XG4gICAgICByZXR1cm4gZmxvd1N0YXJ0KGNvZGUpXG4gICAgfVxuXG4gICAgc2VsZi5pbnRlcnJ1cHQgPVxuICAgICAgY2hpbGRGbG93ICYmXG4gICAgICBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJlxuICAgICAgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuaW50ZXJydXB0aWJsZVxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSB7fVxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoY29udGFpbmVyLCBjb250YWluZXJDb250aW51ZSwgZmxvd1N0YXJ0KShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbmVyQ29udGludWUoY29kZSkge1xuICAgIHN0YWNrLnB1c2goW3NlbGYuY3VycmVudENvbnN0cnVjdCwgc2VsZi5jb250YWluZXJTdGF0ZV0pXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZmxvd1N0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZXhpdENvbnRhaW5lcnMoMCwgdHJ1ZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2hpbGRGbG93ID0gY2hpbGRGbG93IHx8IHNlbGYucGFyc2VyLmZsb3coc2VsZi5ub3coKSlcblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rRmxvdycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnZmxvdycsXG4gICAgICBwcmV2aW91czogY2hpbGRUb2tlbixcbiAgICAgIF90b2tlbml6ZXI6IGNoaWxkRmxvd1xuICAgIH0pXG5cbiAgICByZXR1cm4gZmxvd0NvbnRpbnVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmbG93Q29udGludWUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZUZsb3coZWZmZWN0cy5leGl0KCdjaHVua0Zsb3cnKSlcbiAgICAgIHJldHVybiBmbG93U3RhcnQoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGNvbnRpbnVlRmxvdyhlZmZlY3RzLmV4aXQoJ2NodW5rRmxvdycpKVxuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIHt0b2tlbml6ZTogdG9rZW5pemVJbnNwZWN0LCBwYXJ0aWFsOiB0cnVlfSxcbiAgICAgICAgZG9jdW1lbnRBZnRlclBlZWtcbiAgICAgIClcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZmxvd0NvbnRpbnVlXG4gIH1cblxuICBmdW5jdGlvbiBkb2N1bWVudEFmdGVyUGVlayhjb2RlKSB7XG4gICAgZXhpdENvbnRhaW5lcnMoXG4gICAgICBpbnNwZWN0UmVzdWx0LmNvbnRpbnVlZCxcbiAgICAgIGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5mbG93RW5kXG4gICAgKVxuXG4gICAgY29udGludWVkID0gMFxuICAgIHJldHVybiBzdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVGbG93KHRva2VuKSB7XG4gICAgaWYgKGNoaWxkVG9rZW4pIGNoaWxkVG9rZW4ubmV4dCA9IHRva2VuXG4gICAgY2hpbGRUb2tlbiA9IHRva2VuXG4gICAgY2hpbGRGbG93LmxhenkgPSBpbnNwZWN0UmVzdWx0ICYmIGluc3BlY3RSZXN1bHQubGF6eVxuICAgIGNoaWxkRmxvdy5kZWZpbmVTa2lwKHRva2VuLnN0YXJ0KVxuICAgIGNoaWxkRmxvdy53cml0ZShzZWxmLnNsaWNlU3RyZWFtKHRva2VuKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRDb250YWluZXJzKHNpemUsIGVuZCkge1xuICAgIHZhciBpbmRleCA9IHN0YWNrLmxlbmd0aFxuXG4gICAgLy8gQ2xvc2UgdGhlIGZsb3cuXG4gICAgaWYgKGNoaWxkRmxvdyAmJiBlbmQpIHtcbiAgICAgIGNoaWxkRmxvdy53cml0ZShbbnVsbF0pXG4gICAgICBjaGlsZFRva2VuID0gY2hpbGRGbG93ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLy8gRXhpdCBvcGVuIGNvbnRhaW5lcnMuXG4gICAgd2hpbGUgKGluZGV4LS0gPiBzaXplKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbaW5kZXhdWzFdXG4gICAgICBzdGFja1tpbmRleF1bMF0uZXhpdC5jYWxsKHNlbGYsIGVmZmVjdHMpXG4gICAgfVxuXG4gICAgc3RhY2subGVuZ3RoID0gc2l6ZVxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5pemVJbnNwZWN0KGVmZmVjdHMsIG9rKSB7XG4gICAgdmFyIHN1YmNvbnRpbnVlZCA9IDBcblxuICAgIGluc3BlY3RSZXN1bHQgPSB7fVxuXG4gICAgcmV0dXJuIGluc3BlY3RTdGFydFxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdFN0YXJ0KGNvZGUpIHtcbiAgICAgIGlmIChzdWJjb250aW51ZWQgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHN0YWNrW3N1YmNvbnRpbnVlZF1bMV1cbiAgICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgICBzdGFja1tzdWJjb250aW51ZWRdWzBdLmNvbnRpbnVhdGlvbixcbiAgICAgICAgICBpbnNwZWN0Q29udGludWUsXG4gICAgICAgICAgaW5zcGVjdExlc3NcbiAgICAgICAgKShjb2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZeKAmXJlIGNvbnRpbnVlZCBidXQgaW4gYSBjb25jcmV0ZSBmbG93LCB3ZSBjYW7igJl0IGhhdmUgbW9yZVxuICAgICAgLy8gY29udGFpbmVycy5cbiAgICAgIGlmIChjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJiBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5jb25jcmV0ZSkge1xuICAgICAgICBpbnNwZWN0UmVzdWx0LmZsb3dDb250aW51ZSA9IHRydWVcbiAgICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIHNlbGYuaW50ZXJydXB0ID1cbiAgICAgICAgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuaW50ZXJydXB0aWJsZVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHt9XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGNvbnRhaW5lciwgaW5zcGVjdEZsb3dFbmQsIGluc3BlY3REb25lKShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3RDb250aW51ZShjb2RlKSB7XG4gICAgICBzdWJjb250aW51ZWQrK1xuICAgICAgcmV0dXJuIHNlbGYuY29udGFpbmVyU3RhdGUuX2Nsb3NlRmxvd1xuICAgICAgICA/IGluc3BlY3RGbG93RW5kKGNvZGUpXG4gICAgICAgIDogaW5zcGVjdFN0YXJ0KGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdExlc3MoY29kZSkge1xuICAgICAgaWYgKGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0LmxhenkpIHtcbiAgICAgICAgLy8gTWF5YmUgYW5vdGhlciBjb250YWluZXI/XG4gICAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSB7fVxuICAgICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBpbnNwZWN0Rmxvd0VuZCxcbiAgICAgICAgICAvLyBNYXliZSBmbG93LCBvciBhIGJsYW5rIGxpbmU/XG4gICAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgICAgbGF6eUZsb3csXG4gICAgICAgICAgICBpbnNwZWN0Rmxvd0VuZCxcbiAgICAgICAgICAgIGVmZmVjdHMuY2hlY2soYmxhbmssIGluc3BlY3RGbG93RW5kLCBpbnNwZWN0TGF6eSlcbiAgICAgICAgICApXG4gICAgICAgICkoY29kZSlcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdl4oCZcmUgaW50ZXJydXB0aW5nLlxuICAgICAgcmV0dXJuIGluc3BlY3RGbG93RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdExhenkoY29kZSkge1xuICAgICAgLy8gQWN0IGFzIGlmIGFsbCBjb250YWluZXJzIGFyZSBjb250aW51ZWQuXG4gICAgICBzdWJjb250aW51ZWQgPSBzdGFjay5sZW5ndGhcbiAgICAgIGluc3BlY3RSZXN1bHQubGF6eSA9IHRydWVcbiAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlID0gdHJ1ZVxuICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gV2XigJlyZSBkb25lIHdpdGggZmxvdyBpZiB3ZSBoYXZlIG1vcmUgY29udGFpbmVycywgb3IgYW4gaW50ZXJydXB0aW9uLlxuICAgIGZ1bmN0aW9uIGluc3BlY3RGbG93RW5kKGNvZGUpIHtcbiAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0VuZCA9IHRydWVcbiAgICAgIHJldHVybiBpbnNwZWN0RG9uZShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3REb25lKGNvZGUpIHtcbiAgICAgIGluc3BlY3RSZXN1bHQuY29udGludWVkID0gc3ViY29udGludWVkXG4gICAgICBzZWxmLmludGVycnVwdCA9IHNlbGYuY29udGFpbmVyU3RhdGUgPSB1bmRlZmluZWRcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRhaW5lcihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGVmZmVjdHMuYXR0ZW1wdCh0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmRvY3VtZW50LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgNFxuICApXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGF6eUZsb3coZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBlZmZlY3RzLmxhenkodGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgNFxuICApXG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gaW5pdGlhbGl6ZUZsb3dcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UnKVxudmFyIGJsYW5rID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvcGFydGlhbC1ibGFuay1saW5lJylcbnZhciBjb250ZW50ID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvY29udGVudCcpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVGbG93KGVmZmVjdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbml0aWFsID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIC8vIFRyeSB0byBwYXJzZSBhIGJsYW5rIGxpbmUuXG4gICAgYmxhbmssXG4gICAgYXRCbGFua0VuZGluZyxcbiAgICAvLyBUcnkgdG8gcGFyc2UgaW5pdGlhbCBmbG93IChlc3NlbnRpYWxseSwgb25seSBjb2RlKS5cbiAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3dJbml0aWFsLFxuICAgICAgYWZ0ZXJDb25zdHJ1Y3QsXG4gICAgICBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZmxvdyxcbiAgICAgICAgICBhZnRlckNvbnN0cnVjdCxcbiAgICAgICAgICBlZmZlY3RzLmF0dGVtcHQoY29udGVudCwgYWZ0ZXJDb25zdHJ1Y3QpXG4gICAgICAgICksXG4gICAgICAgICdsaW5lUHJlZml4J1xuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiBpbml0aWFsXG5cbiAgZnVuY3Rpb24gYXRCbGFua0VuZGluZyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZ0JsYW5rJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgc2VsZi5jdXJyZW50Q29uc3RydWN0ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGluaXRpYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyQ29uc3RydWN0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHNlbGYuY3VycmVudENvbnN0cnVjdCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBpbml0aWFsXG4gIH1cbn1cbiIsImV4cG9ydHMudGV4dCA9IGluaXRpYWxpemVGYWN0b3J5KCd0ZXh0JylcbmV4cG9ydHMuc3RyaW5nID0gaW5pdGlhbGl6ZUZhY3RvcnkoJ3N0cmluZycpXG5leHBvcnRzLnJlc29sdmVyID0ge3Jlc29sdmVBbGw6IHJlc29sdmVyKCl9XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24nKVxuXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvc2hhbGxvdycpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVGYWN0b3J5KGZpZWxkKSB7XG4gIHJldHVybiB7XG4gICAgdG9rZW5pemU6IGluaXRpYWxpemVUZXh0LFxuICAgIHJlc29sdmVBbGw6IHJlc29sdmVyKGZpZWxkID09PSAndGV4dCcgPyByZXNvbHZlQWxsTGluZVN1ZmZpeGVzIDogdW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVRleHQoZWZmZWN0cykge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBjb25zdHJ1Y3RzID0gdGhpcy5wYXJzZXIuY29uc3RydWN0c1tmaWVsZF1cbiAgICB2YXIgdGV4dCA9IGVmZmVjdHMuYXR0ZW1wdChjb25zdHJ1Y3RzLCBzdGFydCwgbm90VGV4dClcblxuICAgIHJldHVybiBzdGFydFxuXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSkgPyB0ZXh0KGNvZGUpIDogbm90VGV4dChjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vdFRleHQoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdkYXRhJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICAgIGlmIChhdEJyZWFrKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnZGF0YScpXG4gICAgICAgIHJldHVybiB0ZXh0KGNvZGUpXG4gICAgICB9XG5cbiAgICAgIC8vIERhdGEuXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgICB2YXIgbGlzdCA9IGNvbnN0cnVjdHNbY29kZV1cbiAgICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbGlzdFtpbmRleF0ucHJldmlvdXMgfHxcbiAgICAgICAgICAgIGxpc3RbaW5kZXhdLnByZXZpb3VzLmNhbGwoc2VsZiwgc2VsZi5wcmV2aW91cylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVyKGV4dHJhUmVzb2x2ZXIpIHtcbiAgcmV0dXJuIHJlc29sdmVBbGxUZXh0XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFRleHQoZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgZW50ZXJcblxuICAgIC8vIEEgcmF0aGVyIGJvcmluZyBjb21wdXRhdGlvbiAodG8gbWVyZ2UgYWRqYWNlbnQgYGRhdGFgIGV2ZW50cykgd2hpY2hcbiAgICAvLyBpbXByb3ZlcyBtbSBwZXJmb3JtYW5jZSBieSAyOSUuXG4gICAgd2hpbGUgKCsraW5kZXggPD0gZXZlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKGVudGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGV2ZW50c1tpbmRleF0gJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICBlbnRlciA9IGluZGV4XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFldmVudHNbaW5kZXhdIHx8IGV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2RhdGEnKSB7XG4gICAgICAgIC8vIERvbuKAmXQgZG8gYW55dGhpbmcgaWYgdGhlcmUgaXMgb25lIGRhdGEgdG9rZW4uXG4gICAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgICAgZXZlbnRzW2VudGVyXVsxXS5lbmQgPSBldmVudHNbaW5kZXggLSAxXVsxXS5lbmRcbiAgICAgICAgICBldmVudHMuc3BsaWNlKGVudGVyICsgMiwgaW5kZXggLSBlbnRlciAtIDIpXG4gICAgICAgICAgaW5kZXggPSBlbnRlciArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIGVudGVyID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dHJhUmVzb2x2ZXIgPyBleHRyYVJlc29sdmVyKGV2ZW50cywgY29udGV4dCkgOiBldmVudHNcbiAgfVxufVxuXG4vLyBBIHJhdGhlciB1Z2x5IHNldCBvZiBpbnN0cnVjdGlvbnMgd2hpY2ggYWdhaW4gbG9va3MgYXQgY2h1bmtzIGluIHRoZSBpbnB1dFxuLy8gc3RyZWFtLlxuLy8gVGhlIHJlYXNvbiB0byBkbyB0aGlzIGhlcmUgaXMgdGhhdCBpdCBpcyAqbXVjaCogZmFzdGVyIHRvIHBhcnNlIGluIHJldmVyc2UuXG4vLyBBbmQgdGhhdCB3ZSBjYW7igJl0IGhvb2sgaW50byBgbnVsbGAgdG8gc3BsaXQgdGhlIGxpbmUgc3VmZml4IGJlZm9yZSBhbiBFT0YuXG4vLyBUbyBkbzogZmlndXJlIG91dCBpZiB3ZSBjYW4gbWFrZSB0aGlzIGludG8gYSBjbGVhbiB1dGlsaXR5LCBvciBldmVuIGluIGNvcmUuXG4vLyBBcyBpdCB3aWxsIGJlIHVzZWZ1bCBmb3IgR0ZNcyBsaXRlcmFsIGF1dG9saW5rIGV4dGVuc2lvbiAoYW5kIG1heWJlIGV2ZW5cbi8vIHRhYmxlcz8pXG5mdW5jdGlvbiByZXNvbHZlQWxsTGluZVN1ZmZpeGVzKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgZXZlbnRJbmRleCA9IC0xXG4gIHZhciBjaHVua3NcbiAgdmFyIGRhdGFcbiAgdmFyIGNodW5rXG4gIHZhciBpbmRleFxuICB2YXIgYnVmZmVySW5kZXhcbiAgdmFyIHNpemVcbiAgdmFyIHRhYnNcbiAgdmFyIHRva2VuXG5cbiAgd2hpbGUgKCsrZXZlbnRJbmRleCA8PSBldmVudHMubGVuZ3RoKSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50SW5kZXggPT09IGV2ZW50cy5sZW5ndGggfHxcbiAgICAgICAgZXZlbnRzW2V2ZW50SW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJykgJiZcbiAgICAgIGV2ZW50c1tldmVudEluZGV4IC0gMV1bMV0udHlwZSA9PT0gJ2RhdGEnXG4gICAgKSB7XG4gICAgICBkYXRhID0gZXZlbnRzW2V2ZW50SW5kZXggLSAxXVsxXVxuICAgICAgY2h1bmtzID0gY29udGV4dC5zbGljZVN0cmVhbShkYXRhKVxuICAgICAgaW5kZXggPSBjaHVua3MubGVuZ3RoXG4gICAgICBidWZmZXJJbmRleCA9IC0xXG4gICAgICBzaXplID0gMFxuICAgICAgdGFicyA9IHVuZGVmaW5lZFxuXG4gICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICBjaHVuayA9IGNodW5rc1tpbmRleF1cblxuICAgICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGJ1ZmZlckluZGV4ID0gY2h1bmsubGVuZ3RoXG5cbiAgICAgICAgICB3aGlsZSAoY2h1bmsuY2hhckNvZGVBdChidWZmZXJJbmRleCAtIDEpID09PSAzMikge1xuICAgICAgICAgICAgc2l6ZSsrXG4gICAgICAgICAgICBidWZmZXJJbmRleC0tXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1ZmZlckluZGV4KSBicmVha1xuICAgICAgICAgIGJ1ZmZlckluZGV4ID0gLTFcbiAgICAgICAgfVxuICAgICAgICAvLyBOdW1iZXJcbiAgICAgICAgZWxzZSBpZiAoY2h1bmsgPT09IC0yKSB7XG4gICAgICAgICAgdGFicyA9IHRydWVcbiAgICAgICAgICBzaXplKytcbiAgICAgICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBFbXB0eVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlcGxhY2VtZW50IGNoYXJhY3RlciwgZXhpdC5cbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSkge1xuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgZXZlbnRJbmRleCA9PT0gZXZlbnRzLmxlbmd0aCB8fCB0YWJzIHx8IHNpemUgPCAyXG4gICAgICAgICAgICAgID8gJ2xpbmVTdWZmaXgnXG4gICAgICAgICAgICAgIDogJ2hhcmRCcmVha1RyYWlsaW5nJyxcblxuICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICBsaW5lOiBkYXRhLmVuZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBkYXRhLmVuZC5jb2x1bW4gLSBzaXplLFxuICAgICAgICAgICAgb2Zmc2V0OiBkYXRhLmVuZC5vZmZzZXQgLSBzaXplLFxuICAgICAgICAgICAgX2luZGV4OiBkYXRhLnN0YXJ0Ll9pbmRleCArIGluZGV4LFxuICAgICAgICAgICAgX2J1ZmZlckluZGV4OiBpbmRleFxuICAgICAgICAgICAgICA/IGJ1ZmZlckluZGV4XG4gICAgICAgICAgICAgIDogZGF0YS5zdGFydC5fYnVmZmVySW5kZXggKyBidWZmZXJJbmRleFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQ6IHNoYWxsb3coZGF0YS5lbmQpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmVuZCA9IHNoYWxsb3codG9rZW4uc3RhcnQpXG5cbiAgICAgICAgaWYgKGRhdGEuc3RhcnQub2Zmc2V0ID09PSBkYXRhLmVuZC5vZmZzZXQpIHtcbiAgICAgICAgICBhc3NpZ24oZGF0YSwgdG9rZW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnRzLnNwbGljZShcbiAgICAgICAgICAgIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgWydlbnRlcicsIHRva2VuLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIHRva2VuLCBjb250ZXh0XVxuICAgICAgICAgIClcblxuICAgICAgICAgIGV2ZW50SW5kZXggKz0gMlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50SW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFyc2VyXG5cbnZhciBpbml0aWFsaXplQ29udGVudCA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZS9jb250ZW50JylcbnZhciBpbml0aWFsaXplRG9jdW1lbnQgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvZG9jdW1lbnQnKVxudmFyIGluaXRpYWxpemVGbG93ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2Zsb3cnKVxudmFyIGluaXRpYWxpemVUZXh0ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL3RleHQnKVxudmFyIGNvbnN0cnVjdHMgPSByZXF1aXJlKCcuL2NvbnN0cnVjdHMnKVxudmFyIGNyZWF0ZVRva2VuaXplciA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUtdG9rZW5pemVyJylcbnZhciBjb21iaW5lRXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4vdXRpbC9jb21iaW5lLWV4dGVuc2lvbnMnKVxudmFyIG1pbmlmbGF0ID0gcmVxdWlyZSgnLi91dGlsL21pbmlmbGF0JylcblxuZnVuY3Rpb24gY3JlYXRlUGFyc2VyKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcGFyc2VyID0ge1xuICAgIGRlZmluZWQ6IFtdLFxuICAgIGNvbnN0cnVjdHM6IGNvbWJpbmVFeHRlbnNpb25zKFxuICAgICAgW2NvbnN0cnVjdHNdLmNvbmNhdChtaW5pZmxhdChzZXR0aW5ncy5leHRlbnNpb25zKSlcbiAgICApLFxuXG4gICAgY29udGVudDogY3JlYXRlKGluaXRpYWxpemVDb250ZW50KSxcbiAgICBkb2N1bWVudDogY3JlYXRlKGluaXRpYWxpemVEb2N1bWVudCksXG4gICAgZmxvdzogY3JlYXRlKGluaXRpYWxpemVGbG93KSxcbiAgICBzdHJpbmc6IGNyZWF0ZShpbml0aWFsaXplVGV4dC5zdHJpbmcpLFxuICAgIHRleHQ6IGNyZWF0ZShpbml0aWFsaXplVGV4dC50ZXh0KVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlclxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsaXplcikge1xuICAgIHJldHVybiBjcmVhdG9yXG4gICAgZnVuY3Rpb24gY3JlYXRvcihmcm9tKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbGl6ZXIsIGZyb20pXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHBvc3Rwcm9jZXNzXG5cbnZhciBzdWJ0b2tlbml6ZSA9IHJlcXVpcmUoJy4vdXRpbC9zdWJ0b2tlbml6ZScpXG5cbmZ1bmN0aW9uIHBvc3Rwcm9jZXNzKGV2ZW50cykge1xuICB3aGlsZSAoIXN1YnRva2VuaXplKGV2ZW50cykpIHtcbiAgICAvLyBFbXB0eVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwcmVwcm9jZXNzb3JcblxudmFyIHNlYXJjaCA9IC9bXFwwXFx0XFxuXFxyXS9nXG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NvcigpIHtcbiAgdmFyIHN0YXJ0ID0gdHJ1ZVxuICB2YXIgY29sdW1uID0gMVxuICB2YXIgYnVmZmVyID0gJydcbiAgdmFyIGF0Q2FycmlhZ2VSZXR1cm5cblxuICByZXR1cm4gcHJlcHJvY2Vzc1xuXG4gIGZ1bmN0aW9uIHByZXByb2Nlc3ModmFsdWUsIGVuY29kaW5nLCBlbmQpIHtcbiAgICB2YXIgY2h1bmtzID0gW11cbiAgICB2YXIgbWF0Y2hcbiAgICB2YXIgbmV4dFxuICAgIHZhciBzdGFydFBvc2l0aW9uXG4gICAgdmFyIGVuZFBvc2l0aW9uXG4gICAgdmFyIGNvZGVcblxuICAgIHZhbHVlID0gYnVmZmVyICsgdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpXG4gICAgc3RhcnRQb3NpdGlvbiA9IDBcbiAgICBidWZmZXIgPSAnJ1xuXG4gICAgaWYgKHN0YXJ0KSB7XG4gICAgICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gNjUyNzkpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbisrXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgd2hpbGUgKHN0YXJ0UG9zaXRpb24gPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHNlYXJjaC5sYXN0SW5kZXggPSBzdGFydFBvc2l0aW9uXG4gICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHZhbHVlKVxuICAgICAgZW5kUG9zaXRpb24gPSBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG4gICAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChlbmRQb3NpdGlvbilcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBidWZmZXIgPSB2YWx1ZS5zbGljZShzdGFydFBvc2l0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA9PT0gMTAgJiYgc3RhcnRQb3NpdGlvbiA9PT0gZW5kUG9zaXRpb24gJiYgYXRDYXJyaWFnZVJldHVybikge1xuICAgICAgICBjaHVua3MucHVzaCgtMylcbiAgICAgICAgYXRDYXJyaWFnZVJldHVybiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF0Q2FycmlhZ2VSZXR1cm4pIHtcbiAgICAgICAgICBjaHVua3MucHVzaCgtNSlcbiAgICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA8IGVuZFBvc2l0aW9uKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2godmFsdWUuc2xpY2Uoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pKVxuICAgICAgICAgIGNvbHVtbiArPSBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goNjU1MzMpXG4gICAgICAgICAgY29sdW1uKytcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA5KSB7XG4gICAgICAgICAgbmV4dCA9IE1hdGguY2VpbChjb2x1bW4gLyA0KSAqIDRcbiAgICAgICAgICBjaHVua3MucHVzaCgtMilcbiAgICAgICAgICB3aGlsZSAoY29sdW1uKysgPCBuZXh0KSBjaHVua3MucHVzaCgtMSlcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAxMCkge1xuICAgICAgICAgIGNodW5rcy5wdXNoKC00KVxuICAgICAgICAgIGNvbHVtbiA9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBNdXN0IGJlIGNhcnJpYWdlIHJldHVybi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXRDYXJyaWFnZVJldHVybiA9IHRydWVcbiAgICAgICAgICBjb2x1bW4gPSAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnRQb3NpdGlvbiA9IGVuZFBvc2l0aW9uICsgMVxuICAgIH1cblxuICAgIGlmIChlbmQpIHtcbiAgICAgIGlmIChhdENhcnJpYWdlUmV0dXJuKSBjaHVua3MucHVzaCgtNSlcbiAgICAgIGlmIChidWZmZXIpIGNodW5rcy5wdXNoKGJ1ZmZlcilcbiAgICAgIGNodW5rcy5wdXNoKG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNodW5rc1xuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVBdHRlbnRpb25cbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlc29sdmVBbGxBdHRlbnRpb25cblxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciBjbGFzc2lmeUNoYXJhY3RlciA9IHJlcXVpcmUoJy4uL3V0aWwvY2xhc3NpZnktY2hhcmFjdGVyJylcbnZhciBtb3ZlUG9pbnQgPSByZXF1aXJlKCcuLi91dGlsL21vdmUtcG9pbnQnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUtYWxsJylcblxuLy8gVGFrZSBhbGwgZXZlbnRzIGFuZCByZXNvbHZlIGF0dGVudGlvbiB0byBlbXBoYXNpcyBvciBzdHJvbmcuXG5mdW5jdGlvbiByZXNvbHZlQWxsQXR0ZW50aW9uKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgb3BlblxuICB2YXIgZ3JvdXBcbiAgdmFyIHRleHRcbiAgdmFyIG9wZW5pbmdTZXF1ZW5jZVxuICB2YXIgY2xvc2luZ1NlcXVlbmNlXG4gIHZhciB1c2VcbiAgdmFyIG5leHRFdmVudHNcbiAgdmFyIG9mZnNldFxuXG4gIC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAvL1xuICAvLyBOb3RlOiBwZXJmb3JtYW5jZSBvZiB0aGlzIGlzIGZpbmUgb24gYW4gbWIgb2Ygbm9ybWFsIG1hcmtkb3duLCBidXQgaXTigJlzXG4gIC8vIGEgYm90dGxlbmVjayBmb3IgbWFsaWNpb3VzIHN0dWZmLlxuICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gY2xvc2UuXG4gICAgaWYgKFxuICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnYXR0ZW50aW9uU2VxdWVuY2UnICYmXG4gICAgICBldmVudHNbaW5kZXhdWzFdLl9jbG9zZVxuICAgICkge1xuICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgIC8vIE5vdyB3YWxrIGJhY2sgdG8gZmluZCBhbiBvcGVuZXIuXG4gICAgICB3aGlsZSAob3Blbi0tKSB7XG4gICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudHNbb3Blbl1bMF0gPT09ICdleGl0JyAmJlxuICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnYXR0ZW50aW9uU2VxdWVuY2UnICYmXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgLy8gSWYgdGhlIG1hcmtlcnMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgIGNvbnRleHQuc2xpY2VTZXJpYWxpemUoZXZlbnRzW29wZW5dWzFdKS5jaGFyQ29kZUF0KDApID09PVxuICAgICAgICAgICAgY29udGV4dC5zbGljZVNlcmlhbGl6ZShldmVudHNbaW5kZXhdWzFdKS5jaGFyQ29kZUF0KDApXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIElmIHRoZSBvcGVuaW5nIGNhbiBjbG9zZSBvciB0aGUgY2xvc2luZyBjYW4gb3BlbixcbiAgICAgICAgICAvLyBhbmQgdGhlIGNsb3NlIHNpemUgKmlzIG5vdCogYSBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgICAgICAgICAvLyBidXQgdGhlIHN1bSBvZiB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyBzaXplICppcyogbXVsdGlwbGUgb2YgdGhyZWUsXG4gICAgICAgICAgLy8gdGhlbiBkb27igJl0IG1hdGNoLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChldmVudHNbb3Blbl1bMV0uX2Nsb3NlIHx8IGV2ZW50c1tpbmRleF1bMV0uX29wZW4pICYmXG4gICAgICAgICAgICAoZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpICUgMyAmJlxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgKGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLVxuICAgICAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0KSAlXG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTnVtYmVyIG9mIG1hcmtlcnMgdG8gdXNlIGZyb20gdGhlIHNlcXVlbmNlLlxuICAgICAgICAgIHVzZSA9XG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQgPiAxICYmXG4gICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCA+IDFcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgICAgICAgb3BlbmluZ1NlcXVlbmNlID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdTZXF1ZW5jZScgOiAnZW1waGFzaXNTZXF1ZW5jZScsXG4gICAgICAgICAgICBzdGFydDogbW92ZVBvaW50KHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZCksIC11c2UpLFxuICAgICAgICAgICAgZW5kOiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5lbmQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xvc2luZ1NlcXVlbmNlID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdTZXF1ZW5jZScgOiAnZW1waGFzaXNTZXF1ZW5jZScsXG4gICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbaW5kZXhdWzFdLnN0YXJ0KSxcbiAgICAgICAgICAgIGVuZDogbW92ZVBvaW50KHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydCksIHVzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXh0ID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdUZXh0JyA6ICdlbXBoYXNpc1RleHQnLFxuICAgICAgICAgICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHVzZSA+IDEgPyAnc3Ryb25nJyA6ICdlbXBoYXNpcycsXG4gICAgICAgICAgICBzdGFydDogc2hhbGxvdyhvcGVuaW5nU2VxdWVuY2Uuc3RhcnQpLFxuICAgICAgICAgICAgZW5kOiBzaGFsbG93KGNsb3NpbmdTZXF1ZW5jZS5lbmQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzFdLmVuZCA9IHNoYWxsb3cob3BlbmluZ1NlcXVlbmNlLnN0YXJ0KVxuICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBzaGFsbG93KGNsb3NpbmdTZXF1ZW5jZS5lbmQpXG5cbiAgICAgICAgICBuZXh0RXZlbnRzID0gW11cblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIG1hcmtlcnMgaW4gdGhlIG9wZW5pbmcsIGFkZCB0aGVtIGJlZm9yZS5cbiAgICAgICAgICBpZiAoZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0KSB7XG4gICAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9wZW5pbmcuXG4gICAgICAgICAgY2h1bmtlZFNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgWydlbnRlcicsIGdyb3VwLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCBvcGVuaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0Jywgb3BlbmluZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCB0ZXh0LCBjb250ZXh0XVxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgIGNodW5rZWRTcGxpY2UoXG4gICAgICAgICAgICBuZXh0RXZlbnRzLFxuICAgICAgICAgICAgbmV4dEV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgcmVzb2x2ZUFsbChcbiAgICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICAgICAgICAgIGV2ZW50cy5zbGljZShvcGVuICsgMSwgaW5kZXgpLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gQ2xvc2luZy5cbiAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCBjbG9zaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgY2xvc2luZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIGdyb3VwLCBjb250ZXh0XVxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSBtYXJrZXJzIGluIHRoZSBjbG9zaW5nLCBhZGQgdGhlbSBhZnRlci5cbiAgICAgICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDJcbiAgICAgICAgICAgIGNodW5rZWRTcGxpY2UobmV4dEV2ZW50cywgbmV4dEV2ZW50cy5sZW5ndGgsIDAsIFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBvcGVuIC0gMSwgaW5kZXggLSBvcGVuICsgMywgbmV4dEV2ZW50cylcblxuICAgICAgICAgIGluZGV4ID0gb3BlbiArIG5leHRFdmVudHMubGVuZ3RoIC0gb2Zmc2V0IC0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgcmVtYWluaW5nIHNlcXVlbmNlcy5cbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScpIHtcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVBdHRlbnRpb24oZWZmZWN0cywgb2spIHtcbiAgdmFyIGJlZm9yZSA9IGNsYXNzaWZ5Q2hhcmFjdGVyKHRoaXMucHJldmlvdXMpXG4gIHZhciBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXR0ZW50aW9uU2VxdWVuY2UnKVxuICAgIG1hcmtlciA9IGNvZGVcbiAgICByZXR1cm4gc2VxdWVuY2UoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICB2YXIgdG9rZW5cbiAgICB2YXIgYWZ0ZXJcbiAgICB2YXIgb3BlblxuICAgIHZhciBjbG9zZVxuXG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VxdWVuY2VcbiAgICB9XG5cbiAgICB0b2tlbiA9IGVmZmVjdHMuZXhpdCgnYXR0ZW50aW9uU2VxdWVuY2UnKVxuICAgIGFmdGVyID0gY2xhc3NpZnlDaGFyYWN0ZXIoY29kZSlcbiAgICBvcGVuID0gIWFmdGVyIHx8IChhZnRlciA9PT0gMiAmJiBiZWZvcmUpXG4gICAgY2xvc2UgPSAhYmVmb3JlIHx8IChiZWZvcmUgPT09IDIgJiYgYWZ0ZXIpXG4gICAgdG9rZW4uX29wZW4gPSBtYXJrZXIgPT09IDQyID8gb3BlbiA6IG9wZW4gJiYgKGJlZm9yZSB8fCAhY2xvc2UpXG4gICAgdG9rZW4uX2Nsb3NlID0gbWFya2VyID09PSA0MiA/IGNsb3NlIDogY2xvc2UgJiYgKGFmdGVyIHx8ICFvcGVuKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVBdXRvbGlua1xuXG52YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcbnZhciBhc2NpaUF0ZXh0ID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWF0ZXh0JylcbnZhciBhc2NpaUNvbnRyb2wgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktY29udHJvbCcpXG5cbmZ1bmN0aW9uIHRva2VuaXplQXV0b2xpbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2l6ZVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rUHJvdG9jb2wnKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMVxuICAgICAgcmV0dXJuIHNjaGVtZU9yRW1haWxBdGV4dFxuICAgIH1cblxuICAgIHJldHVybiBhc2NpaUF0ZXh0KGNvZGUpID8gZW1haWxBdGV4dChjb2RlKSA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZW1lT3JFbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgICAgID8gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0KGNvZGUpXG4gICAgICA6IGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVtZUluc2lkZU9yRW1haWxBdGV4dChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB1cmxJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpICYmXG4gICAgICBzaXplKysgPCAzMlxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVybEluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rUHJvdG9jb2wnKVxuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAzMiB8fCBjb2RlID09PSA2MCB8fCBhc2NpaUNvbnRyb2woY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdXJsSW5zaWRlXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBlbWFpbEF0U2lnbk9yRG90XG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQXRleHQoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVtYWlsQXRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbEF0U2lnbk9yRG90KGNvZGUpIHtcbiAgICByZXR1cm4gYXNjaWlBbHBoYW51bWVyaWMoY29kZSkgPyBlbWFpbExhYmVsKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbExhYmVsKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBlbWFpbEF0U2lnbk9yRG90XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICAvLyBFeGl0LCB0aGVuIGNoYW5nZSB0aGUgdHlwZS5cbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtQcm90b2NvbCcpLnR5cGUgPSAnYXV0b2xpbmtFbWFpbCdcbiAgICAgIHJldHVybiBlbmQoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW1haWxWYWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZW1haWxWYWx1ZShjb2RlKSB7XG4gICAgaWYgKChjb2RlID09PSA0NSB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkgJiYgc2l6ZSsrIDwgNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDQ1ID8gZW1haWxWYWx1ZSA6IGVtYWlsTGFiZWxcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rJylcbiAgICByZXR1cm4gb2tcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0XG5leHBvcnRzLmNvbnRpbnVhdGlvbiA9IHt0b2tlbml6ZTogdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9ufVxuZXhwb3J0cy5leGl0ID0gZXhpdFxuXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgaWYgKCFzZWxmLmNvbnRhaW5lclN0YXRlLm9wZW4pIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZScsIHtfY29udGFpbmVyOiB0cnVlfSlcbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5vcGVuID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlUHJlZml4JylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2Jsb2NrUXVvdGVNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVNYXJrZXInKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlUHJlZml4JylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgZWZmZWN0cy5hdHRlbXB0KGV4cG9ydHMsIG9rLCBub2spLFxuICAgICdsaW5lUHJlZml4JyxcbiAgICA0XG4gIClcbn1cblxuZnVuY3Rpb24gZXhpdChlZmZlY3RzKSB7XG4gIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZScpXG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDaGFyYWN0ZXJFc2NhcGVcblxudmFyIGFzY2lpUHVuY3R1YXRpb24gPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktcHVuY3R1YXRpb24nKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNoYXJhY3RlckVzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2VzY2FwZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdlc2NhcGVNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlQdW5jdHVhdGlvbihjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyRXNjYXBlVmFsdWUnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlckVzY2FwZVZhbHVlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyRXNjYXBlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ2hhcmFjdGVyUmVmZXJlbmNlXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5JylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMnKVxudmFyIGFzY2lpRGlnaXQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktZGlnaXQnKVxudmFyIGFzY2lpSGV4RGlnaXQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktaGV4LWRpZ2l0JylcblxuZnVuY3Rpb24gdG9rZW5pemVDaGFyYWN0ZXJSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBtYXhcbiAgdmFyIHRlc3RcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIHJldHVybiBudW1lcmljXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuICAgIG1heCA9IDMxXG4gICAgdGVzdCA9IGFzY2lpQWxwaGFudW1lcmljXG4gICAgcmV0dXJuIHZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBudW1lcmljKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gODggfHwgY29kZSA9PT0gMTIwKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwnKVxuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuICAgICAgbWF4ID0gNlxuICAgICAgdGVzdCA9IGFzY2lpSGV4RGlnaXRcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICBtYXggPSA3XG4gICAgdGVzdCA9IGFzY2lpRGlnaXRcbiAgICByZXR1cm4gdmFsdWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbHVlKGNvZGUpIHtcbiAgICB2YXIgdG9rZW5cblxuICAgIGlmIChjb2RlID09PSA1OSAmJiBzaXplKSB7XG4gICAgICB0b2tlbiA9IGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuXG4gICAgICBpZiAodGVzdCA9PT0gYXNjaWlBbHBoYW51bWVyaWMgJiYgIWRlY29kZShzZWxmLnNsaWNlU2VyaWFsaXplKHRva2VuKSkpIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZScpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBpZiAodGVzdChjb2RlKSAmJiBzaXplKysgPCBtYXgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDb2RlRmVuY2VkXG5leHBvcnRzLmNvbmNyZXRlID0gdHJ1ZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcblxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQ29kZUZlbmNlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5pdGlhbFByZWZpeCA9IHByZWZpeFNpemUodGhpcy5ldmVudHMsICdsaW5lUHJlZml4JylcbiAgdmFyIHNpemVPcGVuID0gMFxuICB2YXIgbWFya2VyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZScpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgIG1hcmtlciA9IGNvZGVcbiAgICByZXR1cm4gc2VxdWVuY2VPcGVuKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZU9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZU9wZW4rK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlT3BlblxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgIHJldHVybiBzaXplT3BlbiA8IDNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGluZm9PcGVuLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gb3BlbkFmdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gaW5mbyhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5mbyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZUluZm8nKVxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGluZm9BZnRlciwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5NiAmJiBjb2RlID09PSBtYXJrZXIpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5mb1xuICB9XG5cbiAgZnVuY3Rpb24gaW5mb0FmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtjb250ZW50VHlwZTogJ3N0cmluZyd9KVxuICAgIHJldHVybiBtZXRhKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBtZXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTYgJiYgY29kZSA9PT0gbWFya2VyKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5BZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogY29udGVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAge3Rva2VuaXplOiB0b2tlbml6ZUNsb3NpbmdGZW5jZSwgcGFydGlhbDogdHJ1ZX0sXG4gICAgICAgIGFmdGVyLFxuICAgICAgICBpbml0aWFsUHJlZml4XG4gICAgICAgICAgPyBjcmVhdGVTcGFjZShlZmZlY3RzLCBjb250ZW50LCAnbGluZVByZWZpeCcsIGluaXRpYWxQcmVmaXggKyAxKVxuICAgICAgICAgIDogY29udGVudFxuICAgICAgKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGbG93VmFsdWUnKVxuICAgIHJldHVybiBjb250ZW50Q29udGludWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRlbnRDb250aW51ZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGbG93VmFsdWUnKVxuICAgICAgcmV0dXJuIGNvbnRlbnQoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGVudENvbnRpbnVlXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRva2VuaXplQ2xvc2luZ0ZlbmNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgICB2YXIgc2l6ZSA9IDBcblxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nUHJlZml4QWZ0ZXIsICdsaW5lUHJlZml4JywgNClcblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdQcmVmaXhBZnRlcihjb2RlKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA8IHNpemVPcGVuKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nU2VxdWVuY2VFbmQsICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zaW5nU2VxdWVuY2VFbmQoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlJylcbiAgICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNvZGVJbmRlbnRlZFxuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUNvZGVJbmRlbnRlZFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciBwcmVmaXhTaXplID0gcmVxdWlyZSgnLi4vdXRpbC9wcmVmaXgtc2l6ZScpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG52YXIgY29udGludWVkSW5kZW50ID0ge3Rva2VuaXplOiB0b2tlbml6ZUNvbnRpbnVlZEluZGVudCwgcGFydGlhbDogdHJ1ZX1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvZGVJbmRlbnRlZChldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNvZGUgPSB7XG4gICAgdHlwZTogJ2NvZGVJbmRlbnRlZCcsXG4gICAgc3RhcnQ6IGV2ZW50c1swXVsxXS5zdGFydCxcbiAgICBlbmQ6IGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kXG4gIH1cblxuICBjaHVua2VkU3BsaWNlKGV2ZW50cywgMCwgMCwgW1snZW50ZXInLCBjb2RlLCBjb250ZXh0XV0pXG4gIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBldmVudHMubGVuZ3RoLCAwLCBbWydleGl0JywgY29kZSwgY29udGV4dF1dKVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlSW5kZW50ZWQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBhZnRlckluaXRpYWwsXG4gICAgJ2xpbmVQcmVmaXgnLFxuXG4gICAgNCArIDFcbiAgKVxuXG4gIGZ1bmN0aW9uIGFmdGVySW5pdGlhbChjb2RlKSB7XG4gICAgLy8gRmxvdyBjaGVja3MgYmxhbmsgbGluZXMgZmlyc3QsIHNvIHdlIGRvbuKAmXQgaGF2ZSBFT0wvRU9GLlxuXG4gICAgaWYgKHByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaW5lUHJlZml4JykgPCA0KSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZsb3dWYWx1ZScpXG4gICAgcmV0dXJuIGNvbnRlbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChjb250aW51ZWRJbmRlbnQsIGFmdGVyUHJlZml4LCBvaykoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmxvd1ZhbHVlJylcbiAgICByZXR1cm4gY29udGVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGbG93VmFsdWUnKVxuICAgICAgcmV0dXJuIGFmdGVyUHJlZml4KGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRpbnVlZEluZGVudChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVyUHJlZml4LFxuICAgICdsaW5lUHJlZml4JyxcblxuICAgIDQgKyAxXG4gIClcblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG5cbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgYWZ0ZXJQcmVmaXgsXG4gICAgICAgICdsaW5lUHJlZml4JyxcblxuICAgICAgICA0ICsgMVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGluZVByZWZpeCcpIDwgNCA/IG5vayhjb2RlKSA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNvZGVUZXh0XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlQ29kZVRleHRcbmV4cG9ydHMucHJldmlvdXMgPSBwcmV2aW91c1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxuZnVuY3Rpb24gcmVzb2x2ZUNvZGVUZXh0KGV2ZW50cykge1xuICB2YXIgdGFpbEV4aXRJbmRleCA9IGV2ZW50cy5sZW5ndGggLSA0XG4gIHZhciBoZWFkRW50ZXJJbmRleCA9IDNcbiAgdmFyIGluZGV4XG4gIHZhciBlbnRlclxuXG4gIC8vIElmIHdlIHN0YXJ0IGFuZCBlbmQgd2l0aCBhbiBFT0wgb3IgYSBzcGFjZS5cbiAgaWYgKFxuICAgIChldmVudHNbaGVhZEVudGVySW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJyB8fFxuICAgICAgZXZlbnRzW2hlYWRFbnRlckluZGV4XVsxXS50eXBlID09PSAnc3BhY2UnKSAmJlxuICAgIChldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICBldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9PT0gJ3NwYWNlJylcbiAgKSB7XG4gICAgaW5kZXggPSBoZWFkRW50ZXJJbmRleFxuXG4gICAgLy8gQW5kIHdlIGhhdmUgZGF0YS5cbiAgICB3aGlsZSAoKytpbmRleCA8IHRhaWxFeGl0SW5kZXgpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdjb2RlVGV4dERhdGEnKSB7XG4gICAgICAgIC8vIFRoZW4gd2UgaGF2ZSBwYWRkaW5nLlxuICAgICAgICBldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9IGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9XG4gICAgICAgICAgJ2NvZGVUZXh0UGFkZGluZydcblxuICAgICAgICBoZWFkRW50ZXJJbmRleCArPSAyXG4gICAgICAgIHRhaWxFeGl0SW5kZXggLT0gMlxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE1lcmdlIGFkamFjZW50IHNwYWNlcyBhbmQgZGF0YS5cbiAgaW5kZXggPSBoZWFkRW50ZXJJbmRleCAtIDFcbiAgdGFpbEV4aXRJbmRleCsrXG5cbiAgd2hpbGUgKCsraW5kZXggPD0gdGFpbEV4aXRJbmRleCkge1xuICAgIGlmIChlbnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaW5kZXggIT09IHRhaWxFeGl0SW5kZXggJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZUVuZGluZycpIHtcbiAgICAgICAgZW50ZXIgPSBpbmRleFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpbmRleCA9PT0gdGFpbEV4aXRJbmRleCB8fFxuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZydcbiAgICApIHtcbiAgICAgIGV2ZW50c1tlbnRlcl1bMV0udHlwZSA9ICdjb2RlVGV4dERhdGEnXG5cbiAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgIGV2ZW50c1tlbnRlcl1bMV0uZW5kID0gZXZlbnRzW2luZGV4IC0gMV1bMV0uZW5kXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgdGFpbEV4aXRJbmRleCAtPSBpbmRleCAtIGVudGVyIC0gMlxuICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgfVxuXG4gICAgICBlbnRlciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcHJldmlvdXMoY29kZSkge1xuICAvLyBJZiB0aGVyZSBpcyBhIHByZXZpb3VzIGNvZGUsIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgdGFpbC5cbiAgcmV0dXJuIChcbiAgICBjb2RlICE9PSA5NiB8fFxuICAgIHRoaXMuZXZlbnRzW3RoaXMuZXZlbnRzLmxlbmd0aCAtIDFdWzFdLnR5cGUgPT09ICdjaGFyYWN0ZXJFc2NhcGUnXG4gIClcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlVGV4dChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZU9wZW4gPSAwXG4gIHZhciBzaXplXG4gIHZhciB0b2tlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbmluZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZU9wZW4rK1xuICAgICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGdhcChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2FwKGNvZGUpIHtcbiAgICAvLyBFT0YuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBDbG9zaW5nIGZlbmNlP1xuICAgIC8vIENvdWxkIGFsc28gYmUgZGF0YS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIHRva2VuID0gZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZShjb2RlKVxuICAgIH1cblxuICAgIC8vIFRhYnMgZG9u4oCZdCB3b3JrLCBhbmQgdmlydHVhbCBzcGFjZXMgZG9u4oCZdCBtYWtlIHNlbnNlLlxuICAgIGlmIChjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3NwYWNlJylcbiAgICAgIHJldHVybiBnYXBcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBnYXBcbiAgICB9XG5cbiAgICAvLyBEYXRhLlxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVUZXh0RGF0YScpXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIC8vIEluIGNvZGUuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDMyIHx8XG4gICAgICBjb2RlID09PSA5NiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0RGF0YScpXG4gICAgICByZXR1cm4gZ2FwKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIENsb3NpbmcgZmVuY2UuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgLy8gTW9yZS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlXG4gICAgfVxuXG4gICAgLy8gRG9uZSFcbiAgICBpZiAoc2l6ZSA9PT0gc2l6ZU9wZW4pIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHRTZXF1ZW5jZScpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0JylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIC8vIE1vcmUgb3IgbGVzcyBhY2NlbnRzOiBtYXJrIGFzIGRhdGEuXG4gICAgdG9rZW4udHlwZSA9ICdjb2RlVGV4dERhdGEnXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ29udGVudFxuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUNvbnRlbnRcbmV4cG9ydHMuaW50ZXJydXB0aWJsZSA9IHRydWVcbmV4cG9ydHMubGF6eSA9IHRydWVcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBzdWJ0b2tlbml6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvc3VidG9rZW5pemUnKVxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbnZhciBsb29rYWhlYWRDb25zdHJ1Y3QgPSB7dG9rZW5pemU6IHRva2VuaXplTG9va2FoZWFkQ29uc3RydWN0LCBwYXJ0aWFsOiB0cnVlfVxuXG4vLyBDb250ZW50IGlzIHRyYW5zcGFyZW50OiBpdOKAmXMgcGFyc2VkIHJpZ2h0IG5vdy4gVGhhdCB3YXksIGRlZmluaXRpb25zIGFyZSBhbHNvXG4vLyBwYXJzZWQgcmlnaHQgbm93OiBiZWZvcmUgdGV4dCBpbiBwYXJhZ3JhcGhzIChzcGVjaWZpY2FsbHksIG1lZGlhKSBhcmUgcGFyc2VkLlxuZnVuY3Rpb24gcmVzb2x2ZUNvbnRlbnQoZXZlbnRzKSB7XG4gIHN1YnRva2VuaXplKGV2ZW50cylcbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRlbnQoZWZmZWN0cywgb2spIHtcbiAgdmFyIHByZXZpb3VzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NvbnRlbnQnKVxuICAgIHByZXZpb3VzID0gZWZmZWN0cy5lbnRlcignY2h1bmtDb250ZW50Jywge1xuICAgICAgY29udGVudFR5cGU6ICdjb250ZW50J1xuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb250ZW50RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIGxvb2thaGVhZENvbnN0cnVjdCxcbiAgICAgICAgY29udGVudENvbnRpbnVlLFxuICAgICAgICBjb250ZW50RW5kXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gRGF0YS5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudEVuZChjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjaHVua0NvbnRlbnQnKVxuICAgIGVmZmVjdHMuZXhpdCgnY29udGVudCcpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50Q29udGludWUoY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtDb250ZW50JylcbiAgICBwcmV2aW91cyA9IHByZXZpb3VzLm5leHQgPSBlZmZlY3RzLmVudGVyKCdjaHVua0NvbnRlbnQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ2NvbnRlbnQnLFxuICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMb29rYWhlYWRDb25zdHJ1Y3QoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRMb29rYWhlYWRcblxuICBmdW5jdGlvbiBzdGFydExvb2thaGVhZChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgcHJlZml4ZWQsICdsaW5lUHJlZml4JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAocHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKSA8IDQpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmludGVycnVwdChzZWxmLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3csIG5vaywgb2spKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZURlZmluaXRpb25cblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbm9ybWFsaXplSWRlbnRpZmllciA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXInKVxuXG52YXIgY3JlYXRlRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL2ZhY3RvcnktZGVzdGluYXRpb24nKVxudmFyIGNyZWF0ZUxhYmVsID0gcmVxdWlyZSgnLi9mYWN0b3J5LWxhYmVsJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG52YXIgY3JlYXRlV2hpdGVzcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS13aGl0ZXNwYWNlJylcbnZhciBjcmVhdGVUaXRsZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS10aXRsZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplRGVmaW5pdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZGVzdGluYXRpb25BZnRlciA9IGVmZmVjdHMuYXR0ZW1wdChcbiAgICB7dG9rZW5pemU6IHRva2VuaXplVGl0bGUsIHBhcnRpYWw6IHRydWV9LFxuICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpLFxuICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpXG4gIClcblxuICB2YXIgaWRlbnRpZmllclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uJylcbiAgICByZXR1cm4gY3JlYXRlTGFiZWwuY2FsbChcbiAgICAgIHNlbGYsXG4gICAgICBlZmZlY3RzLFxuICAgICAgbGFiZWxBZnRlcixcbiAgICAgIG5vayxcbiAgICAgICdkZWZpbml0aW9uTGFiZWwnLFxuICAgICAgJ2RlZmluaXRpb25MYWJlbE1hcmtlcicsXG4gICAgICAnZGVmaW5pdGlvbkxhYmVsU3RyaW5nJ1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYmVsQWZ0ZXIoY29kZSkge1xuICAgIGlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZShzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVsxXSkuc2xpY2UoMSwgLTEpXG4gICAgKVxuXG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uTWFya2VyJylcblxuICAgICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgICAgcmV0dXJuIGNyZWF0ZVdoaXRlc3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZURlc3RpbmF0aW9uKFxuICAgICAgICAgIGVmZmVjdHMsXG4gICAgICAgICAgZGVzdGluYXRpb25BZnRlcixcbiAgICAgICAgICBub2ssXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbicsXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uUmF3JyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nJ1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uJylcblxuICAgICAgaWYgKHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihpZGVudGlmaWVyKSA8IDApIHtcbiAgICAgICAgc2VsZi5wYXJzZXIuZGVmaW5lZC5wdXNoKGlkZW50aWZpZXIpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVRpdGxlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IGNyZWF0ZVdoaXRlc3BhY2UoZWZmZWN0cywgYmVmb3JlKShjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5IHx8IGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGl0bGUoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpLFxuICAgICAgICBub2ssXG4gICAgICAgICdkZWZpbml0aW9uVGl0bGUnLFxuICAgICAgICAnZGVmaW5pdGlvblRpdGxlTWFya2VyJyxcbiAgICAgICAgJ2RlZmluaXRpb25UaXRsZVN0cmluZydcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZXN0aW5hdGlvblxuXG52YXIgYXNjaWlDb250cm9sID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWNvbnRyb2wnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBjcmVhdGVEZXN0aW5hdGlvbihcbiAgZWZmZWN0cyxcbiAgb2ssXG4gIG5vayxcbiAgdHlwZSxcbiAgbGl0ZXJhbFR5cGUsXG4gIGxpdGVyYWxNYXJrZXJUeXBlLFxuICByYXdUeXBlLFxuICBzdHJpbmdUeXBlLFxuICBtYXhcbikge1xuICB2YXIgbGltaXQgPSBtYXggfHwgSW5maW5pdHlcbiAgdmFyIGJhbGFuY2UgPSAwXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHJhd1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjAgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gZGVzdGluYXRpb25FbmNsb3NlZEVzY2FwZSA6IGRlc3RpbmF0aW9uRW5jbG9zZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWRFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCB8fCBjb2RlID09PSA2MiB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25FbmNsb3NlZFxuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvblJhdyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICBpZiAoKytiYWxhbmNlID4gbGltaXQpIHJldHVybiBub2soY29kZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICBpZiAoIWJhbGFuY2UtLSkge1xuICAgICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICAgIGVmZmVjdHMuZXhpdChyYXdUeXBlKVxuICAgICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgaWYgKGJhbGFuY2UpIHJldHVybiBub2soY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQocmF3VHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQ29udHJvbChjb2RlKSkgcmV0dXJuIG5vayhjb2RlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSA5MiA/IGRlc3RpbmF0aW9uUmF3RXNjYXBlIDogZGVzdGluYXRpb25SYXdcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uUmF3RXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDAgfHwgY29kZSA9PT0gNDEgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3KGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTGFiZWxcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChlZmZlY3RzLCBvaywgbm9rLCB0eXBlLCBtYXJrZXJUeXBlLCBzdHJpbmdUeXBlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIGRhdGFcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDkxIHx8XG4gICAgICAoY29kZSA9PT0gOTMgJiYgIWRhdGEpIHx8XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICAgIChjb2RlID09PSA5NCAmJlxuICAgICAgICAhc2l6ZSAmJlxuICAgICAgICAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0cykgfHxcbiAgICAgIHNpemUgPiA5OTlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gYXRCcmVha1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGxhYmVsKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gOTEgfHxcbiAgICAgIGNvZGUgPT09IDkzIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgfHxcbiAgICAgIHNpemUrKyA+IDk5OVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGRhdGEgPSBkYXRhIHx8ICFtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gbGFiZWxFc2NhcGUgOiBsYWJlbFxuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5MSB8fCBjb2RlID09PSA5MiB8fCBjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbChjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNwYWNlXG5cbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxuZnVuY3Rpb24gY3JlYXRlU3BhY2UoZWZmZWN0cywgb2ssIHR5cGUsIG1heCkge1xuICB2YXIgbGltaXQgPSBtYXggPyBtYXggLSAxIDogSW5maW5pdHlcbiAgdmFyIHNpemVcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIHNpemUgPSAwXG4gICAgICByZXR1cm4gcHJlZml4KGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpICYmIHNpemUrKyA8IGxpbWl0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBwcmVmaXhcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUaXRsZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIG1hcmtlciA9IGNvZGUgPT09IDQwID8gNDEgOiBjb2RlXG4gICAgcmV0dXJuIGF0Rmlyc3RUaXRsZUJyZWFrXG4gIH1cblxuICBmdW5jdGlvbiBhdEZpcnN0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdFRpdGxlQnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gYXRGaXJzdFRpdGxlQnJlYWsobWFya2VyKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGF0VGl0bGVCcmVhaywgJ2xpbmVQcmVmaXgnKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIHRpdGxlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0aXRsZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICByZXR1cm4gYXRUaXRsZUJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gdGl0bGVFc2NhcGUgOiB0aXRsZVxuICB9XG5cbiAgZnVuY3Rpb24gdGl0bGVFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlKGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlV2hpdGVzcGFjZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICB2YXIgc2VlblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICBzZWVuID0gdHJ1ZVxuICAgICAgcmV0dXJuIHN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHNlZW4gPyAnbGluZVByZWZpeCcgOiAnbGluZVN1ZmZpeCdcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplSGFyZEJyZWFrRXNjYXBlXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdoYXJkQnJlYWtFc2NhcGUnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2VzY2FwZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnZXNjYXBlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnaGFyZEJyZWFrRXNjYXBlJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQXR4SGVhZGluZ1xuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUF0eEhlYWRpbmdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaHVua2VkLXNwbGljZScpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiByZXNvbHZlQXR4SGVhZGluZyhldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnRlbnRFbmQgPSBldmVudHMubGVuZ3RoIC0gMlxuICB2YXIgY29udGVudFN0YXJ0ID0gM1xuICB2YXIgY29udGVudFxuICB2YXIgdGV4dFxuXG4gIC8vIFByZWZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBvcGVuaW5nLlxuICBpZiAoZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnKSB7XG4gICAgY29udGVudFN0YXJ0ICs9IDJcbiAgfVxuXG4gIC8vIFN1ZmZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBjbG9zaW5nLlxuICBpZiAoXG4gICAgY29udGVudEVuZCAtIDIgPiBjb250ZW50U3RhcnQgJiZcbiAgICBldmVudHNbY29udGVudEVuZF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnXG4gICkge1xuICAgIGNvbnRlbnRFbmQgLT0gMlxuICB9XG5cbiAgaWYgKFxuICAgIGV2ZW50c1tjb250ZW50RW5kXVsxXS50eXBlID09PSAnYXR4SGVhZGluZ1NlcXVlbmNlJyAmJlxuICAgIChjb250ZW50U3RhcnQgPT09IGNvbnRlbnRFbmQgLSAxIHx8XG4gICAgICAoY29udGVudEVuZCAtIDQgPiBjb250ZW50U3RhcnQgJiZcbiAgICAgICAgZXZlbnRzW2NvbnRlbnRFbmQgLSAyXVsxXS50eXBlID09PSAnd2hpdGVzcGFjZScpKVxuICApIHtcbiAgICBjb250ZW50RW5kIC09IGNvbnRlbnRTdGFydCArIDEgPT09IGNvbnRlbnRFbmQgPyAyIDogNFxuICB9XG5cbiAgaWYgKGNvbnRlbnRFbmQgPiBjb250ZW50U3RhcnQpIHtcbiAgICBjb250ZW50ID0ge1xuICAgICAgdHlwZTogJ2F0eEhlYWRpbmdUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZFxuICAgIH1cblxuICAgIHRleHQgPSB7XG4gICAgICB0eXBlOiAnY2h1bmtUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZCxcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCdcbiAgICB9XG5cbiAgICBjaHVua2VkU3BsaWNlKGV2ZW50cywgY29udGVudFN0YXJ0LCBjb250ZW50RW5kIC0gY29udGVudFN0YXJ0ICsgMSwgW1xuICAgICAgWydlbnRlcicsIGNvbnRlbnQsIGNvbnRleHRdLFxuICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdLFxuICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICBbJ2V4aXQnLCBjb250ZW50LCBjb250ZXh0XVxuICAgIF0pXG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQXR4SGVhZGluZyhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZycpXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZ1NlcXVlbmNlJylcbiAgICByZXR1cm4gZmVuY2VPcGVuSW5zaWRlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmZW5jZU9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNSAmJiBzaXplKysgPCA2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBmZW5jZU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGhlYWRpbmdCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRpbmdCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmcnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBoZWFkaW5nQnJlYWssICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nVGV4dCcpXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgIHJldHVybiBoZWFkaW5nQnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDM1IHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZ1RleHQnKVxuICAgICAgcmV0dXJuIGhlYWRpbmdCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUh0bWxcbmV4cG9ydHMucmVzb2x2ZVRvID0gcmVzb2x2ZVRvSHRtbFxuZXhwb3J0cy5jb25jcmV0ZSA9IHRydWVcblxudmFyIGFzY2lpQWxwaGEgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGEnKVxudmFyIGFzY2lpQWxwaGFudW1lcmljID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYycpXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UnKVxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxuXG52YXIgZnJvbUNoYXJDb2RlID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUnKVxudmFyIGJhc2ljcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2h0bWwtYmxvY2stbmFtZXMnKVxudmFyIHJhd3MgPSByZXF1aXJlKCcuLi9jb25zdGFudC9odG1sLXJhdy1uYW1lcycpXG5cbnZhciBibGFuayA9IHJlcXVpcmUoJy4vcGFydGlhbC1ibGFuay1saW5lJylcblxudmFyIG5leHRCbGFuayA9IHt0b2tlbml6ZTogdG9rZW5pemVOZXh0QmxhbmssIHBhcnRpYWw6IHRydWV9XG5cbmZ1bmN0aW9uIHJlc29sdmVUb0h0bWwoZXZlbnRzKSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2h0bWxGbG93Jykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZXggPiAxICYmIGV2ZW50c1tpbmRleCAtIDJdWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4Jykge1xuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIHRva2VuLlxuICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIGxpbmUgdG9rZW4uXG4gICAgZXZlbnRzW2luZGV4ICsgMV1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIFJlbW92ZSB0aGUgbGluZSBwcmVmaXguXG4gICAgZXZlbnRzLnNwbGljZShpbmRleCAtIDIsIDIpXG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplSHRtbChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIga2luZFxuICB2YXIgc3RhcnRUYWdcbiAgdmFyIGJ1ZmZlclxuICB2YXIgaW5kZXhcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvdycpXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3dEYXRhJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDMzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSAzXG4gICAgICAvLyBXaGlsZSB3ZeKAmXJlIGluIGFuIGluc3RydWN0aW9uIGluc3RlYWQgb2YgYSBkZWNsYXJhdGlvbiwgd2XigJlyZSBvbiBhIGA/YFxuICAgICAgLy8gcmlnaHQgbm93LCBzbyB3ZSBkbyBuZWVkIHRvIHNlYXJjaCBmb3IgYD5gLCBzaW1pbGFyIHRvIGRlY2xhcmF0aW9ucy5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rIDogY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHN0YXJ0VGFnID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJhdGlvblN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDJcbiAgICAgIHJldHVybiBjb21tZW50T3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBraW5kID0gNVxuICAgICAgYnVmZmVyID0gJ0NEQVRBWydcbiAgICAgIGluZGV4ID0gMFxuICAgICAgcmV0dXJuIGNkYXRhT3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSA0XG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudE9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFPcGVuSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gYnVmZmVyLmNoYXJDb2RlQXQoaW5kZXgrKykpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluZGV4ID09PSBidWZmZXIubGVuZ3RoXG4gICAgICAgID8gc2VsZi5pbnRlcnJ1cHRcbiAgICAgICAgICA/IG9rXG4gICAgICAgICAgOiBjb250aW51YXRpb25cbiAgICAgICAgOiBjZGF0YU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNDcgfHxcbiAgICAgIGNvZGUgPT09IDYyIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgKSB7XG4gICAgICBpZiAoY29kZSAhPT0gNDcgJiYgc3RhcnRUYWcgJiYgcmF3cy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgIGtpbmQgPSAxXG4gICAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogY29udGludWF0aW9uKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChiYXNpY3MuaW5kZXhPZihidWZmZXIudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICBraW5kID0gNlxuXG4gICAgICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICAgIHJldHVybiBiYXNpY1NlbGZDbG9zaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGNvbnRpbnVhdGlvbihjb2RlKVxuICAgICAgfVxuXG4gICAgICBraW5kID0gN1xuICAgICAgLy8gRG8gbm90IHN1cHBvcnQgY29tcGxldGUgSFRNTCB3aGVuIGludGVycnVwdGluZy5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdFxuICAgICAgICA/IG5vayhjb2RlKVxuICAgICAgICA6IHN0YXJ0VGFnXG4gICAgICAgID8gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlKGNvZGUpXG4gICAgICAgIDogY29tcGxldGVDbG9zaW5nVGFnQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyICs9IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiYXNpY1NlbGZDbG9zaW5nKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2sgOiBjb250aW51YXRpb25cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNsb3NpbmdUYWdBZnRlcihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlRW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVFbmRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNTggfHwgY29kZSA9PT0gOTUgfHwgYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZVxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVOYW1lKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSA0NSB8fFxuICAgICAgY29kZSA9PT0gNDYgfHxcbiAgICAgIGNvZGUgPT09IDU4IHx8XG4gICAgICBjb2RlID09PSA5NSB8fFxuICAgICAgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlclxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG5cbiAgICBtYXJrZXIgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzNCB8fFxuICAgICAgY29kZSA9PT0gMzkgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2IHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NyB8fCBjb2RlID09PSA2MiB8fCBtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVFbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQWZ0ZXIoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgICA/IGNvbnRpbnVhdGlvbihjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1ICYmIGtpbmQgPT09IDIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjAgJiYga2luZCA9PT0gMSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3VGFnT3BlblxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MiAmJiBraW5kID09PSA0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MyAmJiBraW5kID09PSAzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5MyAmJiBraW5kID09PSA1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DaGFyYWN0ZXJEYXRhSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSAmJiAoa2luZCA9PT0gNiB8fCBraW5kID09PSA3KSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIG5leHRCbGFuayxcbiAgICAgICAgY29udGludWF0aW9uQ2xvc2UsXG4gICAgICAgIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZ1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250aW51YXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZyhjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgIHJldHVybiBodG1sQ29udGludWVTdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaHRtbENvbnRpbnVlU3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZG9uZShjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGh0bWxDb250aW51ZVN0YXJ0XG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3dEYXRhJylcbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25Db21tZW50SW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3VGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9ICcnXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3RW5kVGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3RW5kVGFnKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIgJiYgcmF3cy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpICYmIGJ1ZmZlci5sZW5ndGggPCA2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciArPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdFbmRUYWdcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25DaGFyYWN0ZXJEYXRhSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25DbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgICByZXR1cm4gZG9uZShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvdycpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVOZXh0QmxhbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoYmxhbmssIG9rLCBub2spXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUh0bWxcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG52YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVIdG1sKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIG1hcmtlclxuICB2YXIgYnVmZmVyXG4gIHZhciBpbmRleFxuICB2YXIgcmV0dXJuU3RhdGVcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxUZXh0RGF0YScpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzMykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25PcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvblxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb25PcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9ICdDREFUQVsnXG4gICAgICBpbmRleCA9IDBcbiAgICAgIHJldHVybiBjZGF0YU9wZW5cbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50T3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50U3RhcnRcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50U3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50U3RhcnREYXNoXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRTdGFydERhc2goY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50Q2xvc2VcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IGNvbW1lbnRcbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudENsb3NlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuZFxuICAgIH1cblxuICAgIHJldHVybiBjb21tZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjZGF0YU9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBidWZmZXIuY2hhckNvZGVBdChpbmRleCsrKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5kZXggPT09IGJ1ZmZlci5sZW5ndGggPyBjZGF0YSA6IGNkYXRhT3BlblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNkYXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2RhdGFDbG9zZVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cblxuICAgIHJldHVybiBjZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFFbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2RhdGFFbmRcbiAgICB9XG5cbiAgICByZXR1cm4gY2RhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gZGVjbGFyYXRpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zdHJ1Y3Rpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gaW5zdHJ1Y3Rpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uQ2xvc2UoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA2MiA/IGVuZChjb2RlKSA6IGluc3RydWN0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdDbG9zZUJldHdlZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlQmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdDbG9zZUJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VCZXR3ZWVuXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5CZXR3ZWVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuZFxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW5cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gNDUgfHxcbiAgICAgIGNvZGUgPT09IDQ2IHx8XG4gICAgICBjb2RlID09PSA1OCB8fFxuICAgICAgY29kZSA9PT0gOTUgfHxcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlclxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBtYXJrZXIgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgICByZXR1cm4gYXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MiB8fCBjb2RlID09PSA0NyB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gMzQgfHxcbiAgICAgIGNvZGUgPT09IDM5IHx8XG4gICAgICBjb2RlID09PSA2MCB8fFxuICAgICAgY29kZSA9PT0gNjEgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZFxuICB9XG5cbiAgLy8gV2UgY2Fu4oCZdCBoYXZlIGJsYW5rIGxpbmVzIGluIGNvbnRlbnQsIHNvIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgZW1wdHlcbiAgLy8gdG9rZW5zLlxuICBmdW5jdGlvbiBhdExpbmVFbmRpbmcoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHREYXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBhZnRlclByZWZpeCwgJ2xpbmVQcmVmaXgnLCA0KVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxUZXh0RGF0YScpXG4gICAgcmV0dXJuIHJldHVyblN0YXRlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxUZXh0RGF0YScpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxUZXh0JylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplTGFiZWxFbmRcbmV4cG9ydHMucmVzb2x2ZVRvID0gcmVzb2x2ZVRvTGFiZWxFbmRcbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlc29sdmVBbGxMYWJlbEVuZFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG5cbnZhciBub3JtYWxpemVJZGVudGlmaWVyID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUtaWRlbnRpZmllcicpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUtYWxsJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93JylcbnZhciBjcmVhdGVEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vZmFjdG9yeS1kZXN0aW5hdGlvbicpXG52YXIgY3JlYXRlTGFiZWwgPSByZXF1aXJlKCcuL2ZhY3RvcnktbGFiZWwnKVxudmFyIGNyZWF0ZVdoaXRlc3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktd2hpdGVzcGFjZScpXG52YXIgY3JlYXRlVGl0bGUgPSByZXF1aXJlKCcuL2ZhY3RvcnktdGl0bGUnKVxuXG52YXIgcmVzb3VyY2UgPSB7dG9rZW5pemU6IHRva2VuaXplUmVzb3VyY2V9XG52YXIgZnVsbFJlZmVyZW5jZSA9IHt0b2tlbml6ZTogdG9rZW5pemVGdWxsUmVmZXJlbmNlfVxudmFyIGNvbGxhcHNlZFJlZmVyZW5jZSA9IHt0b2tlbml6ZTogdG9rZW5pemVDb2xsYXBzZWRSZWZlcmVuY2V9XG5cbmZ1bmN0aW9uIHJlc29sdmVBbGxMYWJlbEVuZChldmVudHMpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHRva2VuXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgdG9rZW4gPSBldmVudHNbaW5kZXhdWzFdXG5cbiAgICBpZiAoXG4gICAgICAhdG9rZW4uX3VzZWQgJiZcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGFiZWxJbWFnZScgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsRW5kJylcbiAgICApIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgbWFya2VyLlxuICAgICAgZXZlbnRzLnNwbGljZShpbmRleCArIDEsIHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyA/IDQgOiAyKVxuICAgICAgdG9rZW4udHlwZSA9ICdkYXRhJ1xuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvTGFiZWxFbmQoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIG9mZnNldCA9IDBcbiAgdmFyIGdyb3VwXG4gIHZhciBsYWJlbFxuICB2YXIgdGV4dFxuICB2YXIgdG9rZW5cbiAgdmFyIG9wZW5cbiAgdmFyIGNsb3NlXG4gIHZhciBtZWRpYVxuXG4gIC8vIEZpbmQgYW4gb3BlbmluZy5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB0b2tlbiA9IGV2ZW50c1tpbmRleF1bMV1cblxuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBJZiB3ZSBzZWUgYW5vdGhlciBsaW5rLCBvciBpbmFjdGl2ZSBsaW5rIGxhYmVsLCB3ZeKAmXZlIGJlZW4gaGVyZSBiZWZvcmUuXG4gICAgICBpZiAoXG4gICAgICAgIHRva2VuLnR5cGUgPT09ICdsaW5rJyB8fFxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgJiYgdG9rZW4uX2luYWN0aXZlKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgb3RoZXIgbGluayBvcGVuaW5ncyBhcyBpbmFjdGl2ZSwgYXMgd2UgY2Fu4oCZdCBoYXZlIGxpbmtzIGluXG4gICAgICAvLyBsaW5rcy5cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIHRva2VuLnR5cGUgPT09ICdsYWJlbExpbmsnKSB7XG4gICAgICAgIHRva2VuLl9pbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsb3NlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgKHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fCB0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJykgJiZcbiAgICAgICAgIXRva2VuLl9iYWxhbmNlZFxuICAgICAgKSB7XG4gICAgICAgIG9wZW4gPSBpbmRleFxuXG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnbGFiZWxMaW5rJykge1xuICAgICAgICAgIG9mZnNldCA9IDJcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnbGFiZWxFbmQnKSB7XG4gICAgICBjbG9zZSA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgZ3JvdXAgPSB7XG4gICAgdHlwZTogZXZlbnRzW29wZW5dWzFdLnR5cGUgPT09ICdsYWJlbExpbmsnID8gJ2xpbmsnIDogJ2ltYWdlJyxcbiAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgIGVuZDogc2hhbGxvdyhldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdWzFdLmVuZClcbiAgfVxuXG4gIGxhYmVsID0ge1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2Nsb3NlXVsxXS5lbmQpXG4gIH1cblxuICB0ZXh0ID0ge1xuICAgIHR5cGU6ICdsYWJlbFRleHQnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuICsgb2Zmc2V0ICsgMl1bMV0uZW5kKSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2Nsb3NlIC0gMl1bMV0uc3RhcnQpXG4gIH1cblxuICBtZWRpYSA9IFtcbiAgICBbJ2VudGVyJywgZ3JvdXAsIGNvbnRleHRdLFxuICAgIFsnZW50ZXInLCBsYWJlbCwgY29udGV4dF1cbiAgXVxuXG4gIC8vIE9wZW5pbmcgbWFya2VyLlxuICBjaHVua2VkU3BsaWNlKFxuICAgIG1lZGlhLFxuICAgIG1lZGlhLmxlbmd0aCxcbiAgICAwLFxuICAgIGV2ZW50cy5zbGljZShvcGVuICsgMSwgb3BlbiArIG9mZnNldCArIDMpXG4gIClcblxuICAvLyBUZXh0IG9wZW4uXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgW1snZW50ZXInLCB0ZXh0LCBjb250ZXh0XV0pXG5cbiAgLy8gQmV0d2Vlbi5cbiAgY2h1bmtlZFNwbGljZShcbiAgICBtZWRpYSxcbiAgICBtZWRpYS5sZW5ndGgsXG4gICAgMCxcbiAgICByZXNvbHZlQWxsKFxuICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICBldmVudHMuc2xpY2Uob3BlbiArIG9mZnNldCArIDQsIGNsb3NlIC0gMyksXG4gICAgICBjb250ZXh0XG4gICAgKVxuICApXG5cbiAgLy8gVGV4dCBjbG9zZSwgbWFya2VyIGNsb3NlLCBsYWJlbCBjbG9zZS5cbiAgY2h1bmtlZFNwbGljZShtZWRpYSwgbWVkaWEubGVuZ3RoLCAwLCBbXG4gICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgZXZlbnRzW2Nsb3NlIC0gMl0sXG4gICAgZXZlbnRzW2Nsb3NlIC0gMV0sXG4gICAgWydleGl0JywgbGFiZWwsIGNvbnRleHRdXG4gIF0pXG5cbiAgLy8gUmVmZXJlbmNlLCByZXNvdXJjZSwgb3Igc28uXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgZXZlbnRzLnNsaWNlKGNsb3NlICsgMSkpXG5cbiAgLy8gTWVkaWEgY2xvc2UuXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgW1snZXhpdCcsIGdyb3VwLCBjb250ZXh0XV0pXG5cbiAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4sIGV2ZW50cy5sZW5ndGgsIG1lZGlhKVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMYWJlbEVuZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50cy5sZW5ndGhcbiAgdmFyIGxhYmVsU3RhcnRcbiAgdmFyIGRlZmluZWRcblxuICAvLyBGaW5kIGFuIG9wZW5pbmcuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKFxuICAgICAgKHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGFiZWxJbWFnZScgfHxcbiAgICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsYWJlbExpbmsnKSAmJlxuICAgICAgIXNlbGYuZXZlbnRzW2luZGV4XVsxXS5fYmFsYW5jZWRcbiAgICApIHtcbiAgICAgIGxhYmVsU3RhcnQgPSBzZWxmLmV2ZW50c1tpbmRleF1bMV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmICghbGFiZWxTdGFydCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIC8vIEl04oCZcyBhIGJhbGFuY2VkIGJyYWNrZXQsIGJ1dCBjb250YWlucyBhIGxpbmsuXG4gICAgaWYgKGxhYmVsU3RhcnQuX2luYWN0aXZlKSByZXR1cm4gYmFsYW5jZWQoY29kZSlcbiAgICBkZWZpbmVkID1cbiAgICAgIHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihcbiAgICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHtzdGFydDogbGFiZWxTdGFydC5lbmQsIGVuZDogc2VsZi5ub3coKX0pXG4gICAgICAgIClcbiAgICAgICkgPiAtMVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsRW5kJylcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEVuZCcpXG4gICAgcmV0dXJuIGFmdGVyTGFiZWxFbmRcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyTGFiZWxFbmQoY29kZSkge1xuICAgIC8vIFJlc291cmNlOiBgW2FzZF0oZmdoKWAuXG4gICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KHJlc291cmNlLCBvaywgZGVmaW5lZCA/IG9rIDogYmFsYW5jZWQpKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gQ29sbGFwc2VkIChgW2FzZF1bXWApIG9yIGZ1bGwgKGBbYXNkXVtmZ2hdYCkgcmVmZXJlbmNlP1xuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgZnVsbFJlZmVyZW5jZSxcbiAgICAgICAgb2ssXG4gICAgICAgIGRlZmluZWQgPyBlZmZlY3RzLmF0dGVtcHQoY29sbGFwc2VkUmVmZXJlbmNlLCBvaywgYmFsYW5jZWQpIDogYmFsYW5jZWRcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBTaG9ydGN1dCByZWZlcmVuY2U6IGBbYXNkXWA/XG4gICAgcmV0dXJuIGRlZmluZWQgPyBvayhjb2RlKSA6IGJhbGFuY2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiYWxhbmNlZChjb2RlKSB7XG4gICAgbGFiZWxTdGFydC5fYmFsYW5jZWQgPSB0cnVlXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplUmVzb3VyY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlTWFya2VyJylcbiAgICByZXR1cm4gY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBvcGVuKVxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZURlc3RpbmF0aW9uKFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGRlc3RpbmF0aW9uQWZ0ZXIsXG4gICAgICBub2ssXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbicsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uUmF3JyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nJyxcbiAgICAgIDNcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICAgPyBjcmVhdGVXaGl0ZXNwYWNlKGVmZmVjdHMsIGJldHdlZW4pKGNvZGUpXG4gICAgICA6IGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5IHx8IGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGl0bGUoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZVdoaXRlc3BhY2UoZWZmZWN0cywgZW5kKSxcbiAgICAgICAgbm9rLFxuICAgICAgICAncmVzb3VyY2VUaXRsZScsXG4gICAgICAgICdyZXNvdXJjZVRpdGxlTWFya2VyJyxcbiAgICAgICAgJ3Jlc291cmNlVGl0bGVTdHJpbmcnXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDEpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdyZXNvdXJjZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUZ1bGxSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxhYmVsLmNhbGwoXG4gICAgICBzZWxmLFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGFmdGVyTGFiZWwsXG4gICAgICBub2ssXG4gICAgICAncmVmZXJlbmNlJyxcbiAgICAgICdyZWZlcmVuY2VNYXJrZXInLFxuICAgICAgJ3JlZmVyZW5jZVN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlckxhYmVsKGNvZGUpIHtcbiAgICByZXR1cm4gc2VsZi5wYXJzZXIuZGVmaW5lZC5pbmRleE9mKFxuICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZShzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVsxXSkuc2xpY2UoMSwgLTEpXG4gICAgICApXG4gICAgKSA8IDBcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2xsYXBzZWRSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncmVmZXJlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdyZWZlcmVuY2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdyZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZScpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZWxhYmVsSW1hZ2VcbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4vbGFiZWwtZW5kJykucmVzb2x2ZUFsbFxuXG5mdW5jdGlvbiB0b2tlbml6ZWxhYmVsSW1hZ2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZScpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEltYWdlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCdsYWJlbEltYWdlJylcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiYgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZWxhYmVsTGlua1xuZXhwb3J0cy5yZXNvbHZlQWxsID0gcmVxdWlyZSgnLi9sYWJlbC1lbmQnKS5yZXNvbHZlQWxsXG5cbmZ1bmN0aW9uIHRva2VuaXplbGFiZWxMaW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxMaW5rJylcbiAgICByZXR1cm4gYWZ0ZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiYgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZVdoaXRlc3BhY2VcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplV2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgb2ssICdsaW5lUHJlZml4JylcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplTGlzdFN0YXJ0XG5leHBvcnRzLmNvbnRpbnVhdGlvbiA9IHt0b2tlbml6ZTogdG9rZW5pemVMaXN0Q29udGludWF0aW9ufVxuZXhwb3J0cy5leGl0ID0gdG9rZW5pemVMaXN0RW5kXG5cbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcbnZhciBhc2NpaURpZ2l0ID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWRpZ2l0JylcblxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBzaXplQ2h1bmtzID0gcmVxdWlyZSgnLi4vdXRpbC9zaXplLWNodW5rcycpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcbnZhciBibGFuayA9IHJlcXVpcmUoJy4vcGFydGlhbC1ibGFuay1saW5lJylcblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0U3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluaXRpYWxTaXplID0gcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKVxuICB2YXIgdmFsdWVTaXplXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIChjb2RlID09PSA0MiB8fCBjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSkgJiZcbiAgICAgICghc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgfHwgY29kZSA9PT0gc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gY29kZSA9PT0gNDIgfHwgY29kZSA9PT0gNDVcbiAgICAgICAgPyBlZmZlY3RzLmNoZWNrKHRoZW1hdGljQnJlYWssIG5vaywgdW5vcmRlcmVkKShjb2RlKVxuICAgICAgICA6IHVub3JkZXJlZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGFzY2lpRGlnaXQoY29kZSkgJiZcbiAgICAgICghc2VsZi5jb250YWluZXJTdGF0ZS50eXBlIHx8IHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSA9PT0gJ2xpc3RPcmRlcmVkJylcbiAgICApIHtcbiAgICAgIHJldHVybiBvcmRlcmVkKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdW5vcmRlcmVkKGNvZGUpIHtcbiAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUudHlwZSkge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS50eXBlID0gJ2xpc3RVbm9yZGVyZWQnXG4gICAgICBlZmZlY3RzLmVudGVyKHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSwge19jb250YWluZXI6IHRydWV9KVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4JylcbiAgICByZXR1cm4gYXRNYXJrZXIoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyZWQoY29kZSkge1xuICAgIGlmIChzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgfHwgIXNlbGYuaW50ZXJydXB0IHx8IGNvZGUgPT09IDQ5KSB7XG4gICAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUudHlwZSkge1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgPSAnbGlzdE9yZGVyZWQnXG4gICAgICAgIGVmZmVjdHMuZW50ZXIoc2VsZi5jb250YWluZXJTdGF0ZS50eXBlLCB7X2NvbnRhaW5lcjogdHJ1ZX0pXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4JylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtVmFsdWUnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICB2YWx1ZVNpemUgPSAxXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBhZnRlclZhbHVlIDogaW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlEaWdpdChjb2RlKSAmJiArK3ZhbHVlU2l6ZSA8IDEwKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gYWZ0ZXJWYWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJWYWx1ZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbVZhbHVlJylcblxuICAgIHJldHVybiBjb2RlID09PSA0MSB8fCBjb2RlID09PSA0NiA/IGF0TWFya2VyKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdE1hcmtlcihjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgPSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciB8fCBjb2RlXG5cbiAgICBpZiAoY29kZSA9PT0gc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbU1hcmtlcicpXG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgYmxhbmssXG4gICAgICAgIC8vIENhbuKAmXQgYmUgZW1wdHkgd2hlbiBpbnRlcnJ1cHRpbmcuXG4gICAgICAgIHNlbGYuaW50ZXJydXB0ID8gbm9rIDogb25CbGFuayxcbiAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHt0b2tlbml6ZTogdG9rZW5pemVMaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UsIHBhcnRpYWw6IHRydWV9LFxuICAgICAgICAgIGVuZE9mUHJlZml4LFxuICAgICAgICAgIG90aGVyUHJlZml4XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkJsYW5rKGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB0cnVlXG4gICAgaW5pdGlhbFNpemUrK1xuICAgIHJldHVybiBlbmRPZlByZWZpeChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3RoZXJQcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICByZXR1cm4gZW5kT2ZQcmVmaXhcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmRPZlByZWZpeChjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplID1cbiAgICAgIGluaXRpYWxTaXplICsgc2l6ZUNodW5rcyhzZWxmLnNsaWNlU3RyZWFtKGVmZmVjdHMuZXhpdCgnbGlzdEl0ZW1QcmVmaXgnKSkpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0Q29udGludWF0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93ID0gdW5kZWZpbmVkXG5cbiAgcmV0dXJuIGVmZmVjdHMuY2hlY2soYmxhbmssIG9uQmxhbmssIG5vdEJsYW5rKVxuXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyB8fFxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5pbml0aWFsQmxhbmtMaW5lXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBub3RCbGFuayhjb2RlKSB7XG4gICAgaWYgKHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgfHwgIW1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPSBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB1bmRlZmluZWRcbiAgICAgIHJldHVybiBub3RJbkN1cnJlbnRJdGVtKGNvZGUpXG4gICAgfVxuXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyA9IHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICB7dG9rZW5pemU6IHRva2VuaXplSW5kZW50LCBwYXJ0aWFsOiB0cnVlfSxcbiAgICAgIG9rLFxuICAgICAgbm90SW5DdXJyZW50SXRlbVxuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdEluQ3VycmVudEl0ZW0oY29kZSkge1xuICAgIC8vIFdoaWxlIHdlIGRvIGNvbnRpbnVlLCB3ZSBzaWduYWwgdGhhdCB0aGUgZmxvdyBzaG91bGQgYmUgY2xvc2VkLlxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuX2Nsb3NlRmxvdyA9IHRydWVcbiAgICAvLyBBcyB3ZeKAmXJlIGNsb3NpbmcgZmxvdywgd2XigJlyZSBubyBsb25nZXIgaW50ZXJydXB0aW5nXG4gICAgc2VsZi5pbnRlcnJ1cHQgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgICBlZmZlY3RzLFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KGV4cG9ydHMsIG9rLCBub2spLFxuICAgICAgJ2xpbmVQcmVmaXgnLFxuICAgICAgNFxuICAgICkoY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUluZGVudChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVyUHJlZml4LFxuICAgICdsaXN0SXRlbUluZGVudCcsXG5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgKyAxXG4gIClcblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgcmV0dXJuIHByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaXN0SXRlbUluZGVudCcpID09PVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplXG4gICAgICA/IG9rKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGlzdEVuZChlZmZlY3RzKSB7XG4gIGVmZmVjdHMuZXhpdCh0aGlzLmNvbnRhaW5lclN0YXRlLnR5cGUpXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScsXG5cbiAgICA0ICsgMVxuICApXG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93blNwYWNlKGNvZGUpIHx8XG4gICAgICAhcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICA/IG5vayhjb2RlKVxuICAgICAgOiBvayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVCbGFua0xpbmVcbmV4cG9ydHMucGFydGlhbCA9IHRydWVcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQmxhbmtMaW5lKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyV2hpdGVzcGFjZSwgJ2xpbmVQcmVmaXgnKVxuXG4gIGZ1bmN0aW9uIGFmdGVyV2hpdGVzcGFjZShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lXG5leHBvcnRzLnJlc29sdmVUbyA9IHJlc29sdmVUb1NldGV4dFVuZGVybGluZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gcmVzb2x2ZVRvU2V0ZXh0VW5kZXJsaW5lKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSBldmVudHMubGVuZ3RoXG4gIHZhciBjb250ZW50XG4gIHZhciB0ZXh0XG4gIHZhciBkZWZpbml0aW9uXG4gIHZhciBoZWFkaW5nXG5cbiAgLy8gRmluZCB0aGUgb3BlbmluZyBvZiB0aGUgY29udGVudC5cbiAgLy8gSXTigJlsbCBhbHdheXMgZXhpc3Q6IHdlIGRvbuKAmXQgdG9rZW5pemUgaWYgaXQgaXNu4oCZdCB0aGVyZS5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGNvbnRlbnQgPSBpbmRleFxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICB0ZXh0ID0gaW5kZXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRXhpdFxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY29udGVudCBlbmQgKGlmIG5lZWRlZCB3ZeKAmWxsIGFkZCBpdCBsYXRlcilcbiAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZpbml0aW9uICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2RlZmluaXRpb24nKSB7XG4gICAgICAgIGRlZmluaXRpb24gPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRpbmcgPSB7XG4gICAgdHlwZTogJ3NldGV4dEhlYWRpbmcnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1t0ZXh0XVsxXS5zdGFydCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9XG5cbiAgLy8gQ2hhbmdlIHRoZSBwYXJhZ3JhcGggdG8gc2V0ZXh0IGhlYWRpbmcgdGV4dC5cbiAgZXZlbnRzW3RleHRdWzFdLnR5cGUgPSAnc2V0ZXh0SGVhZGluZ1RleHQnXG5cbiAgLy8gSWYgd2UgaGF2ZSBkZWZpbml0aW9ucyBpbiB0aGUgY29udGVudCwgd2XigJlsbCBrZWVwIG9uIGhhdmluZyBjb250ZW50LFxuICAvLyBidXQgd2UgbmVlZCBtb3ZlIGl0LlxuICBpZiAoZGVmaW5pdGlvbikge1xuICAgIGV2ZW50cy5zcGxpY2UodGV4dCwgMCwgWydlbnRlcicsIGhlYWRpbmcsIGNvbnRleHRdKVxuICAgIGV2ZW50cy5zcGxpY2UoZGVmaW5pdGlvbiArIDEsIDAsIFsnZXhpdCcsIGV2ZW50c1tjb250ZW50XVsxXSwgY29udGV4dF0pXG4gICAgZXZlbnRzW2NvbnRlbnRdWzFdLmVuZCA9IHNoYWxsb3coZXZlbnRzW2RlZmluaXRpb25dWzFdLmVuZClcbiAgfSBlbHNlIHtcbiAgICBldmVudHNbY29udGVudF1bMV0gPSBoZWFkaW5nXG4gIH1cblxuICAvLyBBZGQgdGhlIGhlYWRpbmcgZXhpdCBhdCB0aGUgZW5kLlxuICBldmVudHMucHVzaChbJ2V4aXQnLCBoZWFkaW5nLCBjb250ZXh0XSlcblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICB2YXIgbWFya2VyXG4gIHZhciBwYXJhZ3JhcGhcblxuICAvLyBGaW5kIGFuIG9wZW5pbmcuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgLy8gU2tpcCBlbnRlci9leGl0IG9mIGxpbmUgZW5kaW5nLCBsaW5lIHByZWZpeCwgYW5kIGNvbnRlbnQuXG4gICAgLy8gV2UgY2FuIG5vdyBlaXRoZXIgaGF2ZSBhIGRlZmluaXRpb24gb3IgYSBwYXJhZ3JhcGguXG4gICAgaWYgKFxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lRW5kaW5nJyAmJlxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lUHJlZml4JyAmJlxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdjb250ZW50J1xuICAgICkge1xuICAgICAgcGFyYWdyYXBoID0gc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdwYXJhZ3JhcGgnXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoIXNlbGYubGF6eSAmJiAoc2VsZi5pbnRlcnJ1cHQgfHwgcGFyYWdyYXBoKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignc2V0ZXh0SGVhZGluZ0xpbmUnKVxuICAgICAgZWZmZWN0cy5lbnRlcignc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZScpXG4gICAgICBtYXJrZXIgPSBjb2RlXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2VcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3NldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2UnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nU2VxdWVuY2VFbmQsICdsaW5lU3VmZml4JykoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ3NldGV4dEhlYWRpbmdMaW5lJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplVGhlbWF0aWNCcmVha1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVUaGVtYXRpY0JyZWFrKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigndGhlbWF0aWNCcmVhaycpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBhdEJyZWFrLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKHNpemUgPCAzIHx8IChjb2RlICE9PSBudWxsICYmICFtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0aGVtYXRpY0JyZWFrJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2h1bmtlZFNwbGljZVxuXG52YXIgdjhNYXhTYWZlQ2h1bmtTaXplID0gMTAwMDBcblxuLy8gYEFycmF5I3NwbGljZWAgdGFrZXMgYWxsIGl0ZW1zIHRvIGJlIGluc2VydGVkIGFzIGluZGl2aWR1YWwgYXJndW1lbnQgd2hpY2hcbi8vIGNhdXNlcyBhIHN0YWNrIG92ZXJmbG93IGluIFY4IHdoZW4gdHJ5aW5nIHRvIGluc2VydCAxMDBrIGl0ZW1zIGZvciBpbnN0YW5jZS5cbmZ1bmN0aW9uIGNodW5rZWRTcGxpY2UobGlzdCwgc3RhcnQsIHJlbW92ZSwgaXRlbXMpIHtcbiAgdmFyIGVuZCA9IGxpc3QubGVuZ3RoXG4gIHZhciBjaHVua1N0YXJ0ID0gMFxuICB2YXIgcmVzdWx0XG4gIHZhciBwYXJhbWV0ZXJzXG5cbiAgLy8gTWFrZSBzdGFydCBiZXR3ZWVuIHplcm8gYW5kIGBlbmRgIChpbmNsdWRlZCkuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGVuZCA/IDAgOiBlbmQgKyBzdGFydFxuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gc3RhcnQgPiBlbmQgPyBlbmQgOiBzdGFydFxuICB9XG5cbiAgcmVtb3ZlID0gcmVtb3ZlID4gMCA/IHJlbW92ZSA6IDBcblxuICAvLyBObyBuZWVkIHRvIGNodW5rIHRoZSBpdGVtcyBpZiB0aGVyZeKAmXMgb25seSBhIGNvdXBsZSAoMTBrKSBpdGVtcy5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA8IHY4TWF4U2FmZUNodW5rU2l6ZSkge1xuICAgIHBhcmFtZXRlcnMgPSBBcnJheS5mcm9tKGl0ZW1zKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgcmVtb3ZlKVxuICAgIHJldHVybiBbXS5zcGxpY2UuYXBwbHkobGlzdCwgcGFyYW1ldGVycylcbiAgfVxuXG4gIC8vIERlbGV0ZSBgcmVtb3ZlYCBpdGVtcyBzdGFydGluZyBmcm9tIGBzdGFydGBcbiAgcmVzdWx0ID0gW10uc3BsaWNlLmFwcGx5KGxpc3QsIFtzdGFydCwgcmVtb3ZlXSlcblxuICAvLyBJbnNlcnQgdGhlIGl0ZW1zIGluIGNodW5rcyB0byBub3QgY2F1c2Ugc3RhY2sgb3ZlcmZsb3dzLlxuICB3aGlsZSAoY2h1bmtTdGFydCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgIHBhcmFtZXRlcnMgPSBpdGVtcy5zbGljZShjaHVua1N0YXJ0LCBjaHVua1N0YXJ0ICsgdjhNYXhTYWZlQ2h1bmtTaXplKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgMClcbiAgICA7W10uc3BsaWNlLmFwcGx5KGxpc3QsIHBhcmFtZXRlcnMpXG5cbiAgICBjaHVua1N0YXJ0ICs9IHY4TWF4U2FmZUNodW5rU2l6ZVxuICAgIHN0YXJ0ICs9IHY4TWF4U2FmZUNodW5rU2l6ZVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzc2lmeUNoYXJhY3RlclxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24nKVxudmFyIHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL3VuaWNvZGUtd2hpdGVzcGFjZScpXG5cbi8vIENsYXNzaWZ5IHdoZXRoZXIgYSBjaGFyYWN0ZXIgaXMgdW5pY29kZSB3aGl0ZXNwYWNlLCB1bmljb2RlIHB1bmN0dWF0aW9uLCBvclxuLy8gYW55dGhpbmcgZWxzZS5cbi8vIFVzZWQgZm9yIGF0dGVudGlvbiAoZW1waGFzaXMsIHN0cm9uZyksIHdob3NlIHNlcXVlbmNlcyBjYW4gb3BlbiBvciBjbG9zZVxuLy8gYmFzZWQgb24gdGhlIGNsYXNzIG9mIHN1cnJvdW5kaW5nIGNoYXJhY3RlcnMuXG5mdW5jdGlvbiBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKSB7XG4gIGlmIChcbiAgICBjb2RlID09PSBudWxsIHx8XG4gICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB8fFxuICAgIHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpXG4gICkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBpZiAodW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgcmV0dXJuIDJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lRXh0ZW5zaW9uc1xuXG52YXIgb3duID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvaGFzLW93bi1wcm9wZXJ0eScpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL21pbmlmbGF0JylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZScpXG5cbi8vIENvbWJpbmUgc2V2ZXJhbCBzeW50YXggZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbmZ1bmN0aW9uIGNvbWJpbmVFeHRlbnNpb25zKGV4dGVuc2lvbnMpIHtcbiAgdmFyIGFsbCA9IHt9XG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBleHRlbnNpb25zLmxlbmd0aCkge1xuICAgIGV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbnNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGFsbFxufVxuXG5mdW5jdGlvbiBleHRlbnNpb24oYWxsLCBleHRlbnNpb24pIHtcbiAgdmFyIGhvb2tcbiAgdmFyIGxlZnRcbiAgdmFyIHJpZ2h0XG4gIHZhciBjb2RlXG5cbiAgZm9yIChob29rIGluIGV4dGVuc2lvbikge1xuICAgIGxlZnQgPSBvd24uY2FsbChhbGwsIGhvb2spID8gYWxsW2hvb2tdIDogKGFsbFtob29rXSA9IHt9KVxuICAgIHJpZ2h0ID0gZXh0ZW5zaW9uW2hvb2tdXG5cbiAgICBmb3IgKGNvZGUgaW4gcmlnaHQpIHtcbiAgICAgIGxlZnRbY29kZV0gPSBjb25zdHJ1Y3RzKFxuICAgICAgICBtaW5pZmxhdChyaWdodFtjb2RlXSksXG4gICAgICAgIG93bi5jYWxsKGxlZnQsIGNvZGUpID8gbGVmdFtjb2RlXSA6IFtdXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdHMobGlzdCwgZXhpc3RpbmcpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGJlZm9yZSA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBjaHVua2VkU3BsaWNlKGV4aXN0aW5nLCAwLCAwLCBiZWZvcmUpXG4gIHJldHVybiBleGlzdGluZ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUb2tlbml6ZXJcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Fzc2lnbicpXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuL2NodW5rZWQtc3BsaWNlJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi9zaGFsbG93JylcbnZhciBzZXJpYWxpemVDaHVua3MgPSByZXF1aXJlKCcuL3NlcmlhbGl6ZS1jaHVua3MnKVxudmFyIHNsaWNlQ2h1bmtzID0gcmVxdWlyZSgnLi9zbGljZS1jaHVua3MnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuL3Jlc29sdmUtYWxsJylcbnZhciBtaW5pZmxhdCA9IHJlcXVpcmUoJy4vbWluaWZsYXQnKVxuXG4vLyBDcmVhdGUgYSB0b2tlbml6ZXIuXG4vLyBUb2tlbml6ZXJzIGRlYWwgd2l0aCBvbmUgdHlwZSBvZiBkYXRhIChlLmcuLCBjb250YWluZXJzLCBmbG93LCB0ZXh0KS5cbi8vIFRoZSBwYXJzZXIgaXMgdGhlIG9iamVjdCBkZWFsaW5nIHdpdGggaXQgYWxsLlxuLy8gYGluaXRpYWxpemVgIHdvcmtzIGxpa2Ugb3RoZXIgY29uc3RydWN0cywgZXhjZXB0IHRoYXQgb25seSBpdHMgYHRva2VuaXplYFxuLy8gZnVuY3Rpb24gaXMgdXNlZCwgaW4gd2hpY2ggY2FzZSBpdCBkb2VzbuKAmXQgcmVjZWl2ZSBhbiBgb2tgIG9yIGBub2tgLlxuLy8gYGZyb21gIGNhbiBiZSBnaXZlbiB0byBzZXQgdGhlIHBvaW50IGJlZm9yZSB0aGUgZmlyc3QgY2hhcmFjdGVyLCBhbHRob3VnaFxuLy8gd2hlbiBmdXJ0aGVyIGxpbmVzIGFyZSBpbmRlbnRlZCwgdGhleSBtdXN0IGJlIHNldCB3aXRoIGBkZWZpbmVTa2lwYC5cbmZ1bmN0aW9uIGNyZWF0ZVRva2VuaXplcihwYXJzZXIsIGluaXRpYWxpemUsIGZyb20pIHtcbiAgdmFyIHBvaW50ID0gZnJvbSA/IHNoYWxsb3coZnJvbSkgOiB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9XG4gIHZhciBjb2x1bW5TdGFydCA9IHt9XG4gIHZhciByZXNvbHZlQWxsQ29uc3RydWN0cyA9IFtdXG4gIHZhciBjaHVua3MgPSBbXVxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgY29uc3VtZWQgPSB0cnVlXG5cbiAgLy8gVG9vbHMgdXNlZCBmb3IgdG9rZW5pemluZy5cbiAgdmFyIGVmZmVjdHMgPSB7XG4gICAgY29uc3VtZTogY29uc3VtZSxcbiAgICBlbnRlcjogZW50ZXIsXG4gICAgZXhpdDogZXhpdCxcbiAgICBhdHRlbXB0OiBjb25zdHJ1Y3RGYWN0b3J5KG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdCksXG4gICAgY2hlY2s6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2spLFxuICAgIGludGVycnVwdDogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge2ludGVycnVwdDogdHJ1ZX0pLFxuICAgIGxhenk6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2ssIHtsYXp5OiB0cnVlfSlcbiAgfVxuXG4gIC8vIFN0YXRlIGFuZCB0b29scyBmb3IgcmVzb2x2aW5nIGFuZCBzZXJpYWxpemluZy5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgcHJldmlvdXM6IG51bGwsXG4gICAgZXZlbnRzOiBbXSxcbiAgICBwYXJzZXI6IHBhcnNlcixcbiAgICBzbGljZVN0cmVhbTogc2xpY2VTdHJlYW0sXG4gICAgc2xpY2VTZXJpYWxpemU6IHNsaWNlU2VyaWFsaXplLFxuICAgIG5vdzogbm93LFxuICAgIGRlZmluZVNraXA6IHNraXAsXG4gICAgd3JpdGU6IHdyaXRlXG4gIH1cblxuICAvLyBUaGUgc3RhdGUgZnVuY3Rpb24uXG4gIHZhciBzdGF0ZSA9IGluaXRpYWxpemUudG9rZW5pemUuY2FsbChjb250ZXh0LCBlZmZlY3RzKVxuXG4gIC8vIFRyYWNrIHdoaWNoIGNoYXJhY3RlciB3ZSBleHBlY3QgdG8gYmUgY29uc3VtZWQsIHRvIGNhdGNoIGJ1Z3MuXG4gIHZhciBleHBlY3RlZENvZGVcblxuICBpZiAoaW5pdGlhbGl6ZS5yZXNvbHZlQWxsKSB7XG4gICAgcmVzb2x2ZUFsbENvbnN0cnVjdHMucHVzaChpbml0aWFsaXplKVxuICB9XG5cbiAgLy8gU3RvcmUgd2hlcmUgd2UgYXJlIGluIHRoZSBpbnB1dCBzdHJlYW0uXG4gIHBvaW50Ll9pbmRleCA9IDBcbiAgcG9pbnQuX2J1ZmZlckluZGV4ID0gLTFcblxuICByZXR1cm4gY29udGV4dFxuXG4gIGZ1bmN0aW9uIHdyaXRlKHNsaWNlKSB7XG4gICAgY2h1bmtlZFNwbGljZShjaHVua3MsIGNodW5rcy5sZW5ndGgsIDAsIHNsaWNlKVxuXG4gICAgbWFpbigpXG5cbiAgICAvLyBFeGl0IGlmIHdl4oCZcmUgbm90IGRvbmUsIHJlc29sdmUgbWlnaHQgY2hhbmdlIHN0dWZmLlxuICAgIGlmIChjaHVua3NbY2h1bmtzLmxlbmd0aCAtIDFdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBhZGRSZXN1bHQoaW5pdGlhbGl6ZSwgMClcblxuICAgIC8vIE90aGVyd2lzZSwgcmVzb2x2ZSwgYW5kIGV4aXQuXG4gICAgY29udGV4dC5ldmVudHMgPSByZXNvbHZlQWxsKHJlc29sdmVBbGxDb25zdHJ1Y3RzLCBjb250ZXh0LmV2ZW50cywgY29udGV4dClcblxuICAgIHJldHVybiBjb250ZXh0LmV2ZW50c1xuICB9XG5cbiAgLy9cbiAgLy8gVG9vbHMuXG4gIC8vXG5cbiAgZnVuY3Rpb24gc2xpY2VTZXJpYWxpemUodG9rZW4pIHtcbiAgICByZXR1cm4gc2VyaWFsaXplQ2h1bmtzKHNsaWNlU3RyZWFtKHRva2VuKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWNlU3RyZWFtKHRva2VuKSB7XG4gICAgcmV0dXJuIHNsaWNlQ2h1bmtzKGNodW5rcywgdG9rZW4pXG4gIH1cblxuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHNoYWxsb3cocG9pbnQpXG4gIH1cblxuICBmdW5jdGlvbiBza2lwKHZhbHVlKSB7XG4gICAgY29sdW1uU3RhcnRbdmFsdWUubGluZV0gPSB2YWx1ZS5jb2x1bW5cbiAgICBhY2NvdW50Rm9yUG90ZW50aWFsU2tpcCgpXG4gIH1cblxuICAvL1xuICAvLyBTdGF0ZSBtYW5hZ2VtZW50LlxuICAvL1xuXG4gIC8vIE1haW4gbG9vcCAobm90ZSB0aGF0IGBfaW5kZXhgIGFuZCBgX2J1ZmZlckluZGV4YCBpbiBgcG9pbnRgIGFyZSBtb2RpZmllZCBieVxuICAvLyBgY29uc3VtZWApLlxuICAvLyBIZXJlIGlzIHdoZXJlIHdlIHdhbGsgdGhyb3VnaCB0aGUgY2h1bmtzLCB3aGljaCBlaXRoZXIgaW5jbHVkZSBzdHJpbmdzIG9mXG4gIC8vIHNldmVyYWwgY2hhcmFjdGVycywgb3IgbnVtZXJpY2FsIGNoYXJhY3RlciBjb2Rlcy5cbiAgLy8gVGhlIHJlYXNvbiB0byBkbyB0aGlzIGluIGEgbG9vcCBpbnN0ZWFkIG9mIGEgY2FsbCBpcyBzbyB0aGUgc3RhY2sgY2FuXG4gIC8vIGRyYWluLlxuICBmdW5jdGlvbiBtYWluKCkge1xuICAgIHZhciBjaHVua0luZGV4XG4gICAgdmFyIGNodW5rXG5cbiAgICB3aGlsZSAocG9pbnQuX2luZGV4IDwgY2h1bmtzLmxlbmd0aCkge1xuICAgICAgY2h1bmsgPSBjaHVua3NbcG9pbnQuX2luZGV4XVxuXG4gICAgICAvLyBJZiB3ZeKAmXJlIGluIGEgYnVmZmVyIGNodW5rLCBsb29wIHRocm91Z2ggaXQuXG4gICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaHVua0luZGV4ID0gcG9pbnQuX2luZGV4XG5cbiAgICAgICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPSAwXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgcG9pbnQuX2luZGV4ID09PSBjaHVua0luZGV4ICYmXG4gICAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4IDwgY2h1bmsubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIGdvKGNodW5rLmNoYXJDb2RlQXQocG9pbnQuX2J1ZmZlckluZGV4KSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ28oY2h1bmspXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGVhbCB3aXRoIG9uZSBjb2RlLlxuICBmdW5jdGlvbiBnbyhjb2RlKSB7XG4gICAgY29uc3VtZWQgPSB1bmRlZmluZWRcblxuICAgIGV4cGVjdGVkQ29kZSA9IGNvZGVcbiAgICBzdGF0ZSA9IHN0YXRlKGNvZGUpXG4gIH1cblxuICAvLyBNb3ZlIGEgY2hhcmFjdGVyIGZvcndhcmQuXG4gIGZ1bmN0aW9uIGNvbnN1bWUoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHBvaW50LmxpbmUrK1xuICAgICAgcG9pbnQuY29sdW1uID0gMVxuICAgICAgcG9pbnQub2Zmc2V0ICs9IGNvZGUgPT09IC0zID8gMiA6IDFcbiAgICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgICB9IGVsc2UgaWYgKGNvZGUgIT09IC0xKSB7XG4gICAgICBwb2ludC5jb2x1bW4rK1xuICAgICAgcG9pbnQub2Zmc2V0KytcbiAgICB9XG5cbiAgICAvLyBOb3QgaW4gYSBzdHJpbmcgY2h1bmsuXG4gICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgIHBvaW50Ll9pbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50Ll9idWZmZXJJbmRleCsrXG5cbiAgICAgIC8vIEF0IGVuZCBvZiBzdHJpbmcgY2h1bmsuXG4gICAgICBpZiAocG9pbnQuX2J1ZmZlckluZGV4ID09PSBjaHVua3NbcG9pbnQuX2luZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4ID0gLTFcbiAgICAgICAgcG9pbnQuX2luZGV4KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvc2UgdGhlIHByZXZpb3VzIGNoYXJhY3Rlci5cbiAgICBjb250ZXh0LnByZXZpb3VzID0gY29kZVxuXG4gICAgLy8gTWFyayBhcyBjb25zdW1lZC5cbiAgICBjb25zdW1lZCA9IHRydWVcbiAgfVxuXG4gIC8vIFN0YXJ0IGEgdG9rZW4uXG4gIGZ1bmN0aW9uIGVudGVyKHR5cGUsIGZpZWxkcykge1xuICAgIHZhciB0b2tlbiA9IGZpZWxkcyB8fCB7fVxuICAgIHRva2VuLnR5cGUgPSB0eXBlXG4gICAgdG9rZW4uc3RhcnQgPSBub3coKVxuXG4gICAgY29udGV4dC5ldmVudHMucHVzaChbJ2VudGVyJywgdG9rZW4sIGNvbnRleHRdKVxuXG4gICAgc3RhY2sucHVzaCh0b2tlbilcblxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLy8gU3RvcCBhIHRva2VuLlxuICBmdW5jdGlvbiBleGl0KHR5cGUpIHtcbiAgICB2YXIgdG9rZW4gPSBzdGFjay5wb3AoKVxuICAgIHRva2VuLmVuZCA9IG5vdygpXG5cbiAgICBjb250ZXh0LmV2ZW50cy5wdXNoKFsnZXhpdCcsIHRva2VuLCBjb250ZXh0XSlcblxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLy8gVXNlIHJlc3VsdHMuXG4gIGZ1bmN0aW9uIG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdChjb25zdHJ1Y3QsIGluZm8pIHtcbiAgICBhZGRSZXN1bHQoY29uc3RydWN0LCBpbmZvLmZyb20pXG4gIH1cblxuICAvLyBEaXNjYXJkIHJlc3VsdHMuXG4gIGZ1bmN0aW9uIG9uc3VjY2Vzc2Z1bGNoZWNrKGNvbnN0cnVjdCwgaW5mbykge1xuICAgIGluZm8ucmVzdG9yZSgpXG4gIH1cblxuICAvLyBGYWN0b3J5IHRvIGF0dGVtcHQvY2hlY2svaW50ZXJydXB0LlxuICBmdW5jdGlvbiBjb25zdHJ1Y3RGYWN0b3J5KG9ucmV0dXJuLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gaG9va1xuXG4gICAgLy8gSGFuZGxlIGVpdGhlciBhbiBvYmplY3QgbWFwcGluZyBjb2RlcyB0byBjb25zdHJ1Y3RzLCBhIGxpc3Qgb2ZcbiAgICAvLyBjb25zdHJ1Y3RzLCBvciBhIHNpbmdsZSBjb25zdHJ1Y3QuXG4gICAgZnVuY3Rpb24gaG9vayhjb25zdHJ1Y3RzLCByZXR1cm5TdGF0ZSwgYm9ndXNTdGF0ZSkge1xuICAgICAgdmFyIGxpc3RPZkNvbnN0cnVjdHNcbiAgICAgIHZhciBjb25zdHJ1Y3RJbmRleFxuICAgICAgdmFyIGN1cnJlbnRDb25zdHJ1Y3RcbiAgICAgIHZhciBpbmZvXG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RzLnRva2VuaXplIHx8ICdsZW5ndGgnIGluIGNvbnN0cnVjdHNcbiAgICAgICAgPyBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKG1pbmlmbGF0KGNvbnN0cnVjdHMpKVxuICAgICAgICA6IGhhbmRsZU1hcE9mQ29uc3RydWN0c1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVNYXBPZkNvbnN0cnVjdHMoY29kZSkge1xuICAgICAgICBpZiAoY29kZSBpbiBjb25zdHJ1Y3RzIHx8IG51bGwgaW4gY29uc3RydWN0cykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKFxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBgbnVsbGAgaXMgdXNlZCBieSBzb21lIGV4dGVuc2lvbnMgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdHMubnVsbFxuICAgICAgICAgICAgICA/IG1pbmlmbGF0KGNvbnN0cnVjdHNbY29kZV0pLmNvbmNhdChtaW5pZmxhdChjb25zdHJ1Y3RzLm51bGwpKVxuICAgICAgICAgICAgICA6IGNvbnN0cnVjdHNbY29kZV1cbiAgICAgICAgICApKGNvZGUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9ndXNTdGF0ZShjb2RlKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKGxpc3QpIHtcbiAgICAgICAgbGlzdE9mQ29uc3RydWN0cyA9IGxpc3RcbiAgICAgICAgY29uc3RydWN0SW5kZXggPSAwXG4gICAgICAgIHJldHVybiBoYW5kbGVDb25zdHJ1Y3QobGlzdFtjb25zdHJ1Y3RJbmRleF0pXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnN0cnVjdChjb25zdHJ1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgICAgIC8vIFRvIGRvOiBub3QgbmVkZSB0byBzdG9yZSBpZiB0aGVyZSBpcyBubyBib2d1cyBzdGF0ZSwgcHJvYmFibHk/XG4gICAgICAgICAgLy8gQ3VycmVudGx5IGRvZXNu4oCZdCB3b3JrIGJlY2F1c2UgYGluc3BlY3RgIGluIGRvY3VtZW50IGRvZXMgYSBjaGVja1xuICAgICAgICAgIC8vIHcvbyBhIGJvZ3VzLCB3aGljaCBkb2VzbuKAmXQgbWFrZSBzZW5zZS4gQnV0IGl0IGRvZXMgc2VlbSB0byBoZWxwIHBlcmZcbiAgICAgICAgICAvLyBieSBub3Qgc3RvcmluZy5cbiAgICAgICAgICBpbmZvID0gc3RvcmUoKVxuICAgICAgICAgIGN1cnJlbnRDb25zdHJ1Y3QgPSBjb25zdHJ1Y3RcblxuICAgICAgICAgIGlmICghY29uc3RydWN0LnBhcnRpYWwpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudENvbnN0cnVjdCA9IGNvbnN0cnVjdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3QudG9rZW5pemUuY2FsbChcbiAgICAgICAgICAgIGZpZWxkcyA/IGFzc2lnbih7fSwgY29udGV4dCwgZmllbGRzKSA6IGNvbnRleHQsXG4gICAgICAgICAgICBlZmZlY3RzLFxuICAgICAgICAgICAgb2ssXG4gICAgICAgICAgICBub2tcbiAgICAgICAgICApKGNvZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb2soY29kZSkge1xuICAgICAgICBjb25zdW1lZCA9IHRydWVcbiAgICAgICAgb25yZXR1cm4oY3VycmVudENvbnN0cnVjdCwgaW5mbylcbiAgICAgICAgcmV0dXJuIHJldHVyblN0YXRlXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG5vayhjb2RlKSB7XG4gICAgICAgIGNvbnN1bWVkID0gdHJ1ZVxuICAgICAgICBpbmZvLnJlc3RvcmUoKVxuXG4gICAgICAgIGlmICgrK2NvbnN0cnVjdEluZGV4IDwgbGlzdE9mQ29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ29uc3RydWN0KGxpc3RPZkNvbnN0cnVjdHNbY29uc3RydWN0SW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZ3VzU3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRSZXN1bHQoY29uc3RydWN0LCBmcm9tKSB7XG4gICAgaWYgKGNvbnN0cnVjdC5yZXNvbHZlQWxsICYmIHJlc29sdmVBbGxDb25zdHJ1Y3RzLmluZGV4T2YoY29uc3RydWN0KSA8IDApIHtcbiAgICAgIHJlc29sdmVBbGxDb25zdHJ1Y3RzLnB1c2goY29uc3RydWN0KVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZSkge1xuICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgY29udGV4dC5ldmVudHMsXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCAtIGZyb20sXG4gICAgICAgIGNvbnN0cnVjdC5yZXNvbHZlKGNvbnRleHQuZXZlbnRzLnNsaWNlKGZyb20pLCBjb250ZXh0KVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZVRvKSB7XG4gICAgICBjb250ZXh0LmV2ZW50cyA9IGNvbnN0cnVjdC5yZXNvbHZlVG8oY29udGV4dC5ldmVudHMsIGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmUoKSB7XG4gICAgdmFyIHN0YXJ0UG9pbnQgPSBub3coKVxuICAgIHZhciBzdGFydFByZXZpb3VzID0gY29udGV4dC5wcmV2aW91c1xuICAgIHZhciBzdGFydEN1cnJlbnRDb25zdHJ1Y3QgPSBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3RcbiAgICB2YXIgc3RhcnRFdmVudHNJbmRleCA9IGNvbnRleHQuZXZlbnRzLmxlbmd0aFxuICAgIHZhciBzdGFydFN0YWNrID0gQXJyYXkuZnJvbShzdGFjaylcblxuICAgIHJldHVybiB7cmVzdG9yZTogcmVzdG9yZSwgZnJvbTogc3RhcnRFdmVudHNJbmRleH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgICBwb2ludCA9IHN0YXJ0UG9pbnRcbiAgICAgIGNvbnRleHQucHJldmlvdXMgPSBzdGFydFByZXZpb3VzXG4gICAgICBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3QgPSBzdGFydEN1cnJlbnRDb25zdHJ1Y3RcbiAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCA9IHN0YXJ0RXZlbnRzSW5kZXhcbiAgICAgIHN0YWNrID0gc3RhcnRTdGFja1xuICAgICAgYWNjb3VudEZvclBvdGVudGlhbFNraXAoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKCkge1xuICAgIGlmIChwb2ludC5saW5lIGluIGNvbHVtblN0YXJ0ICYmIHBvaW50LmNvbHVtbiA8IDIpIHtcbiAgICAgIHBvaW50LmNvbHVtbiA9IGNvbHVtblN0YXJ0W3BvaW50LmxpbmVdXG4gICAgICBwb2ludC5vZmZzZXQgKz0gY29sdW1uU3RhcnRbcG9pbnQubGluZV0gLSAxXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pbmlmbGF0XG5cbmZ1bmN0aW9uIG1pbmlmbGF0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBbXVxuICAgIDogJ2xlbmd0aCcgaW4gdmFsdWVcbiAgICA/IHZhbHVlXG4gICAgOiBbdmFsdWVdXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1vdmVQb2ludFxuXG4vLyBOb3RlISBgbW92ZWAgb25seSB3b3JrcyBpbnNpZGUgbGluZXMhIEl04oCZcyBub3QgcG9zc2libGUgdG8gbW92ZSBwYXN0IG90aGVyXG4vLyBjaHVua3MgKHJlcGxhY2VtZW50IGNoYXJhY3RlcnMsIHRhYnMsIG9yIGxpbmUgZW5kaW5ncykuXG5mdW5jdGlvbiBtb3ZlUG9pbnQocG9pbnQsIG9mZnNldCkge1xuICBwb2ludC5jb2x1bW4gKz0gb2Zmc2V0XG4gIHBvaW50Lm9mZnNldCArPSBvZmZzZXRcbiAgcG9pbnQuX2J1ZmZlckluZGV4ICs9IG9mZnNldFxuICByZXR1cm4gcG9pbnRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplSWRlbnRpZmllclxuXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWVcbiAgICAgIC8vIENvbGxhcHNlIE1hcmtkb3duIHdoaXRlc3BhY2UuXG4gICAgICAucmVwbGFjZSgvW1xcdFxcblxcciBdKy9nLCAnICcpXG4gICAgICAvLyBUcmltLlxuICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKVxuICAgICAgLy8gU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgYnV0IGlmIHRoZWlyIGxvd2VyY2FzZVxuICAgICAgLy8gY291bnRlcnBhcnQgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudCB1cHBlcmNhc2VcbiAgICAgIC8vIGNoYXJhY3Rlci5cbiAgICAgIC8vIEhlbmNlLCB0byBnZXQgdGhhdCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gICAgICAvLyBVcHBlciBjYXNlIG1ha2VzIHN1cmUga2V5cyB3aWxsIG5vdCBpbnRlcmFjdCB3aXRoIGRlZmF1bHQgcHJvdG90eXBhbFxuICAgICAgLy8gbWV0aG9kczogbm8gb2JqZWN0IG1ldGhvZCBpcyB1cHBlcmNhc2UuXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhTaXplXG5cbnZhciBzaXplQ2h1bmtzID0gcmVxdWlyZSgnLi9zaXplLWNodW5rcycpXG5cbmZ1bmN0aW9uIHByZWZpeFNpemUoZXZlbnRzLCB0eXBlKSB7XG4gIHZhciB0YWlsID0gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVxuICBpZiAoIXRhaWwgfHwgdGFpbFsxXS50eXBlICE9PSB0eXBlKSByZXR1cm4gMFxuICByZXR1cm4gc2l6ZUNodW5rcyh0YWlsWzJdLnNsaWNlU3RyZWFtKHRhaWxbMV0pKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZWdleENoZWNrXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZScpXG5cbmZ1bmN0aW9uIHJlZ2V4Q2hlY2socmVnZXgpIHtcbiAgcmV0dXJuIGNoZWNrXG4gIGZ1bmN0aW9uIGNoZWNrKGNvZGUpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChmcm9tQ2hhckNvZGUoY29kZSkpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVzb2x2ZUFsbFxuXG5mdW5jdGlvbiByZXNvbHZlQWxsKGNvbnN0cnVjdHMsIGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgY2FsbGVkID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc29sdmVcblxuICB3aGlsZSAoKytpbmRleCA8IGNvbnN0cnVjdHMubGVuZ3RoKSB7XG4gICAgcmVzb2x2ZSA9IGNvbnN0cnVjdHNbaW5kZXhdLnJlc29sdmVBbGxcblxuICAgIGlmIChyZXNvbHZlICYmIGNhbGxlZC5pbmRleE9mKHJlc29sdmUpIDwgMCkge1xuICAgICAgZXZlbnRzID0gcmVzb2x2ZShldmVudHMsIGNvbnRleHQpXG4gICAgICBjYWxsZWQucHVzaChyZXNvbHZlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2FmZUZyb21JbnRcblxudmFyIGZyb21DaGFyQ29kZSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Zyb20tY2hhci1jb2RlJylcblxuZnVuY3Rpb24gc2FmZUZyb21JbnQodmFsdWUsIGJhc2UpIHtcbiAgdmFyIGNvZGUgPSBwYXJzZUludCh2YWx1ZSwgYmFzZSlcblxuICBpZiAoXG4gICAgLy8gQzAgZXhjZXB0IGZvciBIVCwgTEYsIEZGLCBDUiwgc3BhY2VcbiAgICBjb2RlIDwgOSB8fFxuICAgIGNvZGUgPT09IDExIHx8XG4gICAgKGNvZGUgPiAxMyAmJiBjb2RlIDwgMzIpIHx8XG4gICAgLy8gQ29udHJvbCBjaGFyYWN0ZXIgKERFTCkgb2YgdGhlIGJhc2ljIGJsb2NrIGFuZCBDMSBjb250cm9scy5cbiAgICAoY29kZSA+IDEyNiAmJiBjb2RlIDwgMTYwKSB8fFxuICAgIC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1Mjk1ICYmIGNvZGUgPCA1NzM0NCkgfHxcbiAgICAvLyBOb25jaGFyYWN0ZXJzLlxuICAgIChjb2RlID4gNjQ5NzUgJiYgY29kZSA8IDY1MDA4KSB8fFxuICAgIChjb2RlICYgNjU1MzUpID09PSA2NTUzNSB8fFxuICAgIChjb2RlICYgNjU1MzUpID09PSA2NTUzNCB8fFxuICAgIC8vIE91dCBvZiByYW5nZVxuICAgIGNvZGUgPiAxMTE0MTExXG4gICkge1xuICAgIHJldHVybiAnXFx1RkZGRCdcbiAgfVxuXG4gIHJldHVybiBmcm9tQ2hhckNvZGUoY29kZSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplQ2h1bmtzXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZScpXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUNodW5rcyhjaHVua3MpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBjaHVua1xuICB2YXIgdmFsdWVcbiAgdmFyIGF0VGFiXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjaHVua3MubGVuZ3RoKSB7XG4gICAgY2h1bmsgPSBjaHVua3NbaW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBjaHVua1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC01KSB7XG4gICAgICB2YWx1ZSA9ICdcXHInXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTQpIHtcbiAgICAgIHZhbHVlID0gJ1xcbidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMykge1xuICAgICAgdmFsdWUgPSAnXFxyJyArICdcXG4nXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTIpIHtcbiAgICAgIHZhbHVlID0gJ1xcdCdcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMSkge1xuICAgICAgaWYgKGF0VGFiKSBjb250aW51ZVxuICAgICAgdmFsdWUgPSAnICdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VycmVudGx5IG9ubHkgcmVwbGFjZW1lbnQgY2hhcmFjdGVyLlxuICAgICAgdmFsdWUgPSBmcm9tQ2hhckNvZGUoY2h1bmspXG4gICAgfVxuXG4gICAgYXRUYWIgPSBjaHVuayA9PT0gLTJcbiAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvYXNzaWduJylcblxuZnVuY3Rpb24gc2hhbGxvdyhvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzaXplQ2h1bmtzXG5cbi8vIE1lYXN1cmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXIgY29kZXMgaW4gY2h1bmtzLlxuLy8gQ291bnRzIHRhYnMgYmFzZWQgb24gdGhlaXIgZXhwYW5kZWQgc2l6ZSwgYW5kIENSK0xGIGFzIG9uZSBjaGFyYWN0ZXIuXG5mdW5jdGlvbiBzaXplQ2h1bmtzKGNodW5rcykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc2l6ZSA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8IGNodW5rcy5sZW5ndGgpIHtcbiAgICBzaXplICs9IHR5cGVvZiBjaHVua3NbaW5kZXhdID09PSAnc3RyaW5nJyA/IGNodW5rc1tpbmRleF0ubGVuZ3RoIDogMVxuICB9XG5cbiAgcmV0dXJuIHNpemVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2xpY2VDaHVua3NcblxuZnVuY3Rpb24gc2xpY2VDaHVua3MoY2h1bmtzLCB0b2tlbikge1xuICB2YXIgc3RhcnRJbmRleCA9IHRva2VuLnN0YXJ0Ll9pbmRleFxuICB2YXIgc3RhcnRCdWZmZXJJbmRleCA9IHRva2VuLnN0YXJ0Ll9idWZmZXJJbmRleFxuICB2YXIgZW5kSW5kZXggPSB0b2tlbi5lbmQuX2luZGV4XG4gIHZhciBlbmRCdWZmZXJJbmRleCA9IHRva2VuLmVuZC5fYnVmZmVySW5kZXhcbiAgdmFyIHZpZXdcblxuICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICB2aWV3ID0gW2NodW5rc1tzdGFydEluZGV4XS5zbGljZShzdGFydEJ1ZmZlckluZGV4LCBlbmRCdWZmZXJJbmRleCldXG4gIH0gZWxzZSB7XG4gICAgdmlldyA9IGNodW5rcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuICAgIGlmIChzdGFydEJ1ZmZlckluZGV4ID4gLTEpIHtcbiAgICAgIHZpZXdbMF0gPSB2aWV3WzBdLnNsaWNlKHN0YXJ0QnVmZmVySW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKGVuZEJ1ZmZlckluZGV4ID4gMCkge1xuICAgICAgdmlldy5wdXNoKGNodW5rc1tlbmRJbmRleF0uc2xpY2UoMCwgZW5kQnVmZmVySW5kZXgpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2aWV3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRva2VuaXplXG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24nKVxuXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4vY2h1bmtlZC1zcGxpY2UnKVxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuL3NoYWxsb3cnKVxuXG5mdW5jdGlvbiBzdWJ0b2tlbml6ZShldmVudHMpIHtcbiAgdmFyIGp1bXBzID0ge31cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGV2ZW50XG4gIHZhciBsaW5lSW5kZXhcbiAgdmFyIG90aGVySW5kZXhcbiAgdmFyIG90aGVyRXZlbnRcbiAgdmFyIHBhcmFtZXRlcnNcbiAgdmFyIHN1YmV2ZW50c1xuICB2YXIgbW9yZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIHdoaWxlIChpbmRleCBpbiBqdW1wcykge1xuICAgICAgaW5kZXggPSBqdW1wc1tpbmRleF1cbiAgICB9XG5cbiAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgIC8vIEFkZCBhIGhvb2sgZm9yIHRoZSBHRk0gdGFza2xpc3QgZXh0ZW5zaW9uLCB3aGljaCBuZWVkcyB0byBrbm93IGlmIHRleHRcbiAgICAvLyBpcyBpbiB0aGUgZmlyc3QgY29udGVudCBvZiBhIGxpc3QgaXRlbS5cbiAgICBpZiAoXG4gICAgICBpbmRleCAmJlxuICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2NodW5rRmxvdycgJiZcbiAgICAgIGV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCdcbiAgICApIHtcbiAgICAgIHN1YmV2ZW50cyA9IGV2ZW50WzFdLl90b2tlbml6ZXIuZXZlbnRzXG4gICAgICBvdGhlckluZGV4ID0gMFxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgKSB7XG4gICAgICAgIG90aGVySW5kZXggKz0gMlxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY29udGVudCdcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoKytvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NodW5rVGV4dCcpIHtcbiAgICAgICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS5pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgICAgICAgIG90aGVySW5kZXgrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVudGVyLlxuICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKGV2ZW50WzFdLmNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGFzc2lnbihqdW1wcywgc3ViY29udGVudChldmVudHMsIGluZGV4KSlcbiAgICAgICAgaW5kZXggPSBqdW1wc1tpbmRleF1cbiAgICAgICAgbW9yZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRXhpdC5cbiAgICBlbHNlIGlmIChldmVudFsxXS5fY29udGFpbmVyIHx8IGV2ZW50WzFdLl9tb3ZlUHJldmlvdXNMaW5lRW5kaW5ncykge1xuICAgICAgb3RoZXJJbmRleCA9IGluZGV4XG4gICAgICBsaW5lSW5kZXggPSB1bmRlZmluZWRcblxuICAgICAgd2hpbGUgKG90aGVySW5kZXgtLSkge1xuICAgICAgICBvdGhlckV2ZW50ID0gZXZlbnRzW290aGVySW5kZXhdXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob3RoZXJFdmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID0gJ2xpbmVFbmRpbmcnXG4gICAgICAgICAgICBsaW5lSW5kZXggPSBvdGhlckluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAvLyBGaXggcG9zaXRpb24uXG4gICAgICAgIGV2ZW50WzFdLmVuZCA9IHNoYWxsb3coZXZlbnRzW2xpbmVJbmRleF1bMV0uc3RhcnQpXG5cbiAgICAgICAgLy8gU3dpdGNoIGNvbnRhaW5lciBleGl0IHcvIGxpbmUgZW5kaW5ncy5cbiAgICAgICAgcGFyYW1ldGVycyA9IGV2ZW50cy5zbGljZShsaW5lSW5kZXgsIGluZGV4KVxuICAgICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoZXZlbnQpXG4gICAgICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBsaW5lSW5kZXgsIGluZGV4IC0gbGluZUluZGV4ICsgMSwgcGFyYW1ldGVycylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gIW1vcmVcbn1cblxuZnVuY3Rpb24gc3ViY29udGVudChldmVudHMsIGV2ZW50SW5kZXgpIHtcbiAgdmFyIHRva2VuID0gZXZlbnRzW2V2ZW50SW5kZXhdWzFdXG4gIHZhciBjb250ZXh0ID0gZXZlbnRzW2V2ZW50SW5kZXhdWzJdXG4gIHZhciBzdGFydFBvc2l0aW9uID0gZXZlbnRJbmRleCAtIDFcbiAgdmFyIHN0YXJ0UG9zaXRpb25zID0gW11cbiAgdmFyIHRva2VuaXplciA9XG4gICAgdG9rZW4uX3Rva2VuaXplciB8fCBjb250ZXh0LnBhcnNlclt0b2tlbi5jb250ZW50VHlwZV0odG9rZW4uc3RhcnQpXG4gIHZhciBjaGlsZEV2ZW50cyA9IHRva2VuaXplci5ldmVudHNcbiAgdmFyIGp1bXBzID0gW11cbiAgdmFyIGdhcHMgPSB7fVxuICB2YXIgc3RyZWFtXG4gIHZhciBwcmV2aW91c1xuICB2YXIgaW5kZXhcbiAgdmFyIGVudGVyZWRcbiAgdmFyIGVuZFxuICB2YXIgYWRqdXN0XG5cbiAgLy8gTG9vcCBmb3J3YXJkIHRocm91Z2ggdGhlIGxpbmtlZCB0b2tlbnMgdG8gcGFzcyB0aGVtIGluIG9yZGVyIHRvIHRoZVxuICAvLyBzdWJ0b2tlbml6ZXIuXG4gIHdoaWxlICh0b2tlbikge1xuICAgIC8vIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBldmVudCBmb3IgdGhpcyB0b2tlbi5cbiAgICB3aGlsZSAoZXZlbnRzWysrc3RhcnRQb3NpdGlvbl1bMV0gIT09IHRva2VuKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9XG5cbiAgICBzdGFydFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pXG5cbiAgICBpZiAoIXRva2VuLl90b2tlbml6ZXIpIHtcbiAgICAgIHN0cmVhbSA9IGNvbnRleHQuc2xpY2VTdHJlYW0odG9rZW4pXG5cbiAgICAgIGlmICghdG9rZW4ubmV4dCkge1xuICAgICAgICBzdHJlYW0ucHVzaChudWxsKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgdG9rZW5pemVyLmRlZmluZVNraXAodG9rZW4uc3RhcnQpXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSkge1xuICAgICAgICB0b2tlbml6ZXIuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgdG9rZW5pemVyLndyaXRlKHN0cmVhbSlcblxuICAgICAgaWYgKHRva2VuLmlzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtKSB7XG4gICAgICAgIHRva2VuaXplci5fZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVW5yYXZlbCB0aGUgbmV4dCB0b2tlbi5cbiAgICBwcmV2aW91cyA9IHRva2VuXG4gICAgdG9rZW4gPSB0b2tlbi5uZXh0XG4gIH1cblxuICAvLyBOb3csIGxvb3AgYmFjayB0aHJvdWdoIGFsbCBldmVudHMgKGFuZCBsaW5rZWQgdG9rZW5zKSwgdG8gZmlndXJlIG91dCB3aGljaFxuICAvLyBwYXJ0cyBiZWxvbmcgd2hlcmUuXG4gIHRva2VuID0gcHJldmlvdXNcbiAgaW5kZXggPSBjaGlsZEV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZeKAmXZlIGF0IGxlYXN0IHNlZW4gc29tZXRoaW5nIChmaW5hbCBlb2wgaXMgcGFydCBvZiB0aGUgbGFzdFxuICAgIC8vIHRva2VuKS5cbiAgICBpZiAoY2hpbGRFdmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICBlbnRlcmVkID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBGaW5kIGEgdm9pZCB0b2tlbiB0aGF0IGluY2x1ZGVzIGEgYnJlYWsuXG4gICAgICBlbnRlcmVkICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gY2hpbGRFdmVudHNbaW5kZXggLSAxXVsxXS50eXBlICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0uc3RhcnQubGluZSAhPT0gY2hpbGRFdmVudHNbaW5kZXhdWzFdLmVuZC5saW5lXG4gICAgKSB7XG4gICAgICBhZGQoY2hpbGRFdmVudHMuc2xpY2UoaW5kZXggKyAxLCBlbmQpKVxuXG4gICAgICAvLyBIZWxwIEdDLlxuICAgICAgdG9rZW4uX3Rva2VuaXplciA9IHRva2VuLm5leHQgPSB1bmRlZmluZWRcbiAgICAgIHRva2VuID0gdG9rZW4ucHJldmlvdXNcbiAgICAgIGVuZCA9IGluZGV4ICsgMVxuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHAgR0MuXG4gIHRva2VuaXplci5ldmVudHMgPSB0b2tlbi5fdG9rZW5pemVyID0gdG9rZW4ubmV4dCA9IHVuZGVmaW5lZFxuXG4gIC8vIERvIGhlYWQ6XG4gIGFkZChjaGlsZEV2ZW50cy5zbGljZSgwLCBlbmQpKVxuXG4gIGluZGV4ID0gLTFcbiAgYWRqdXN0ID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDwganVtcHMubGVuZ3RoKSB7XG4gICAgZ2Fwc1thZGp1c3QgKyBqdW1wc1tpbmRleF1bMF1dID0gYWRqdXN0ICsganVtcHNbaW5kZXhdWzFdXG4gICAgYWRqdXN0ICs9IGp1bXBzW2luZGV4XVsxXSAtIGp1bXBzW2luZGV4XVswXSAtIDFcbiAgfVxuXG4gIHJldHVybiBnYXBzXG5cbiAgZnVuY3Rpb24gYWRkKHNsaWNlKSB7XG4gICAgdmFyIHN0YXJ0ID0gc3RhcnRQb3NpdGlvbnMucG9wKClcbiAgICBqdW1wcy51bnNoaWZ0KFtzdGFydCwgc3RhcnQgKyBzbGljZS5sZW5ndGggLSAxXSlcbiAgICBjaHVua2VkU3BsaWNlKGV2ZW50cywgc3RhcnQsIDIsIHNsaWNlKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbnZhciBlbFxuXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUVudGl0eVxuXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkoY2hhcmFjdGVycykge1xuICB2YXIgZW50aXR5ID0gJyYnICsgY2hhcmFjdGVycyArICc7J1xuICB2YXIgY2hhclxuXG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gIGVsLmlubmVySFRNTCA9IGVudGl0eVxuICBjaGFyID0gZWwudGV4dENvbnRlbnRcblxuICAvLyBTb21lIGVudGl0aWVzIGRvIG5vdCByZXF1aXJlIHRoZSBjbG9zaW5nIHNlbWljb2xvbiAoYCZub3RgIC0gZm9yIGluc3RhbmNlKSxcbiAgLy8gd2hpY2ggbGVhZHMgdG8gc2l0dWF0aW9ucyB3aGVyZSBwYXJzaW5nIHRoZSBhc3N1bWVkIGVudGl0eSBvZiAmbm90aXQ7IHdpbGxcbiAgLy8gcmVzdWx0IGluIHRoZSBzdHJpbmcgYMKsaXQ7YC4gIFdoZW4gd2UgZW5jb3VudGVyIGEgdHJhaWxpbmcgc2VtaWNvbG9uIGFmdGVyXG4gIC8vIHBhcnNpbmcgYW5kIHRoZSBlbnRpdHkgdG8gZGVjb2RlIHdhcyBub3QgYSBzZW1pY29sb24gKGAmc2VtaTtgKSwgd2UgY2FuXG4gIC8vIGFzc3VtZSB0aGF0IHRoZSBtYXRjaGluZyB3YXMgaW5jb21wbGV0ZVxuICBpZiAoY2hhci5jaGFyQ29kZUF0KGNoYXIubGVuZ3RoIC0gMSkgPT09IHNlbWljb2xvbiAmJiBjaGFyYWN0ZXJzICE9PSAnc2VtaScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIElmIHRoZSBkZWNvZGVkIHN0cmluZyBpcyBlcXVhbCB0byB0aGUgaW5wdXQsIHRoZSBlbnRpdHkgd2FzIG5vdCB2YWxpZFxuICByZXR1cm4gY2hhciA9PT0gZW50aXR5ID8gZmFsc2UgOiBjaGFyXG59XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcblxudmFyIGZyb21NYXJrZG93biA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpXG5cbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgdGhpcy5QYXJzZXIgPSBwYXJzZVxuXG4gIGZ1bmN0aW9uIHBhcnNlKGRvYykge1xuICAgIHJldHVybiBmcm9tTWFya2Rvd24oXG4gICAgICBkb2MsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBzZWxmLmRhdGEoJ3NldHRpbmdzJyksIG9wdGlvbnMsIHtcbiAgICAgICAgLy8gTm90ZTogdGhlc2Ugb3B0aW9ucyBhcmUgbm90IGluIHRoZSByZWFkbWUuXG4gICAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciB0aGVtIHRvIGJlIHNldCBieSBwbHVnaW5zIG9uIGBkYXRhYCBpbnN0ZWFkIG9mIGJlaW5nXG4gICAgICAgIC8vIHBhc3NlZCBieSB1c2Vycy5cbiAgICAgICAgZXh0ZW5zaW9uczogc2VsZi5kYXRhKCdtaWNyb21hcmtFeHRlbnNpb25zJykgfHwgW10sXG4gICAgICAgIG1kYXN0RXh0ZW5zaW9uczogc2VsZi5kYXRhKCdmcm9tTWFya2Rvd25FeHRlbnNpb25zJykgfHwgW11cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxudmFyIHRvTWFya2Rvd24gPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJylcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgdGhpcy5Db21waWxlciA9IGNvbXBpbGVcblxuICBmdW5jdGlvbiBjb21waWxlKHRyZWUpIHtcbiAgICByZXR1cm4gdG9NYXJrZG93bihcbiAgICAgIHRyZWUsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBzZWxmLmRhdGEoJ3NldHRpbmdzJyksIG9wdGlvbnMsIHtcbiAgICAgICAgLy8gTm90ZTogdGhpcyBvcHRpb24gaXMgbm90IGluIHRoZSByZWFkbWUuXG4gICAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciBpdCB0byBiZSBzZXQgYnkgcGx1Z2lucyBvbiBgZGF0YWAgaW5zdGVhZCBvZiBiZWluZ1xuICAgICAgICAvLyBwYXNzZWQgYnkgdXNlcnMuXG4gICAgICAgIGV4dGVuc2lvbnM6IHNlbGYuZGF0YSgndG9NYXJrZG93bkV4dGVuc2lvbnMnKSB8fCBbXVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5pZmllZCA9IHJlcXVpcmUoJ3VuaWZpZWQnKVxudmFyIHBhcnNlID0gcmVxdWlyZSgncmVtYXJrLXBhcnNlJylcbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCdyZW1hcmstc3RyaW5naWZ5JylcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkudXNlKHBhcnNlKS51c2Uoc3RyaW5naWZ5KS5mcmVlemUoKVxuIiwiLyohXG4gKiByZXBlYXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9yZXBlYXQtc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVzdWx0cyBjYWNoZVxuICovXG5cbnZhciByZXMgPSAnJztcbnZhciBjYWNoZTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcGVhdGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGVhdDtcblxuLyoqXG4gKiBSZXBlYXQgdGhlIGdpdmVuIGBzdHJpbmdgIHRoZSBzcGVjaWZpZWQgYG51bWJlcmBcbiAqIG9mIHRpbWVzLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuICogcmVwZWF0KCdBJywgNSk7XG4gKiAvLz0+IEFBQUFBXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmluZ2AgVGhlIHN0cmluZyB0byByZXBlYXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbnVtYmVyYCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcGVhdGVkIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBudW0pIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIC8vIGNvdmVyIGNvbW1vbiwgcXVpY2sgdXNlIGNhc2VzXG4gIGlmIChudW0gPT09IDEpIHJldHVybiBzdHI7XG4gIGlmIChudW0gPT09IDIpIHJldHVybiBzdHIgKyBzdHI7XG5cbiAgdmFyIG1heCA9IHN0ci5sZW5ndGggKiBudW07XG4gIGlmIChjYWNoZSAhPT0gc3RyIHx8IHR5cGVvZiBjYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWNoZSA9IHN0cjtcbiAgICByZXMgPSAnJztcbiAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID49IG1heCkge1xuICAgIHJldHVybiByZXMuc3Vic3RyKDAsIG1heCk7XG4gIH1cblxuICB3aGlsZSAobWF4ID4gcmVzLmxlbmd0aCAmJiBudW0gPiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgfVxuXG4gICAgbnVtID4+PSAxO1xuICAgIHN0ciArPSBzdHI7XG4gIH1cblxuICByZXMgKz0gc3RyO1xuICByZXMgPSByZXMuc3Vic3RyKDAsIG1heCk7XG4gIHJldHVybiByZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5mdW5jdGlvbiByZXBsYWNlRXh0KG5wYXRoLCBleHQpIHtcbiAgaWYgKHR5cGVvZiBucGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICBpZiAobnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgdmFyIG5GaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUobnBhdGgsIHBhdGguZXh0bmFtZShucGF0aCkpICsgZXh0O1xuICByZXR1cm4gcGF0aC5qb2luKHBhdGguZGlybmFtZShucGF0aCksIG5GaWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVwbGFjZUV4dDtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gdHJvdWdoXG5cbnRyb3VnaC53cmFwID0gd3JhcFxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG4vLyBDcmVhdGUgbmV3IG1pZGRsZXdhcmUuXG5mdW5jdGlvbiB0cm91Z2goKSB7XG4gIHZhciBmbnMgPSBbXVxuICB2YXIgbWlkZGxld2FyZSA9IHt9XG5cbiAgbWlkZGxld2FyZS5ydW4gPSBydW5cbiAgbWlkZGxld2FyZS51c2UgPSB1c2VcblxuICByZXR1cm4gbWlkZGxld2FyZVxuXG4gIC8vIFJ1biBgZm5zYC4gIExhc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBsZXRpb24gaGFuZGxlci5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGlucHV0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKVxuICAgIHZhciBkb25lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKHR5cGVvZiBkb25lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uIGFzIGxhc3QgYXJndW1lbnQsIG5vdCAnICsgZG9uZSlcbiAgICB9XG5cbiAgICBuZXh0LmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuXG4gICAgLy8gUnVuIHRoZSBuZXh0IGBmbmAsIGlmIGFueS5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgdmFyIGZuID0gZm5zWysraW5kZXhdXG4gICAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgICB2YXIgdmFsdWVzID0gcGFyYW1zLnNsaWNlKDEpXG4gICAgICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgICB2YXIgcG9zID0gLTFcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBkb25lKGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgbm9uLW51bGx5IGlucHV0IGludG8gdmFsdWVzLlxuICAgICAgd2hpbGUgKCsrcG9zIDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbcG9zXSA9PT0gbnVsbCB8fCB2YWx1ZXNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWVzW3Bvc10gPSBpbnB1dFtwb3NdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQgPSB2YWx1ZXNcblxuICAgICAgLy8gTmV4dCBvciBkb25lLlxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHdyYXAoZm4sIG5leHQpLmFwcGx5KG51bGwsIGlucHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZS5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYGZuYCB0byB0aGUgbGlzdC5cbiAgZnVuY3Rpb24gdXNlKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgZm5gIHRvIGJlIGEgZnVuY3Rpb24sIG5vdCAnICsgZm4pXG4gICAgfVxuXG4gICAgZm5zLnB1c2goZm4pXG5cbiAgICByZXR1cm4gbWlkZGxld2FyZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbi8vIFdyYXAgYGZuYC5cbi8vIENhbiBiZSBzeW5jIG9yIGFzeW5jOyByZXR1cm4gYSBwcm9taXNlLCByZWNlaXZlIGEgY29tcGxldGlvbiBoYW5kbGVyLCByZXR1cm5cbi8vIG5ldyB2YWx1ZXMgYW5kIGVycm9ycy5cbmZ1bmN0aW9uIHdyYXAoZm4sIGNhbGxiYWNrKSB7XG4gIHZhciBpbnZva2VkXG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICBmdW5jdGlvbiB3cmFwcGVkKCkge1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICB2YXIgY2FsbGJhY2sgPSBmbi5sZW5ndGggPiBwYXJhbXMubGVuZ3RoXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwYXJhbXMucHVzaChkb25lKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmbi5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFdlbGwsIHRoaXMgaXMgcXVpdGUgdGhlIHBpY2tsZS5cbiAgICAgIC8vIGBmbmAgcmVjZWl2ZWQgYSBjYWxsYmFjayBhbmQgaW52b2tlZCBpdCAodGh1cyBjb250aW51aW5nIHRoZSBwaXBlbGluZSksXG4gICAgICAvLyBidXQgbGF0ZXIgYWxzbyB0aHJldyBhbiBlcnJvci5cbiAgICAgIC8vIFdl4oCZcmUgbm90IGFib3V0IHRvIHJlc3RhcnQgdGhlIHBpcGVsaW5lIGFnYWluLCBzbyB0aGUgb25seSB0aGluZyBsZWZ0XG4gICAgICAvLyB0byBkbyBpcyB0byB0aHJvdyB0aGUgdGhpbmcgaW5zdGVhZC5cbiAgICAgIGlmIChjYWxsYmFjayAmJiBpbnZva2VkKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb25lKGVycm9yKVxuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKHRoZW4sIGRvbmUpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRvbmUocmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbihyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBuZXh0YCwgb25seSBvbmNlLlxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmICghaW52b2tlZCkge1xuICAgICAgaW52b2tlZCA9IHRydWVcblxuICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgZG9uZWAgd2l0aCBvbmUgdmFsdWUuXG4gIC8vIFRyYWNrcyBpZiBhbiBlcnJvciBpcyBwYXNzZWQsIHRvby5cbiAgZnVuY3Rpb24gdGhlbih2YWx1ZSkge1xuICAgIGRvbmUobnVsbCwgdmFsdWUpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYmFpbCA9IHJlcXVpcmUoJ2JhaWwnKVxudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJylcbnZhciBwbGFpbiA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iaicpXG52YXIgdHJvdWdoID0gcmVxdWlyZSgndHJvdWdoJylcbnZhciB2ZmlsZSA9IHJlcXVpcmUoJ3ZmaWxlJylcblxuLy8gRXhwb3NlIGEgZnJvemVuIHByb2Nlc3Nvci5cbm1vZHVsZS5leHBvcnRzID0gdW5pZmllZCgpLmZyZWV6ZSgpXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gUHJvY2VzcyBwaXBlbGluZS5cbnZhciBwaXBlbGluZSA9IHRyb3VnaCgpXG4gIC51c2UocGlwZWxpbmVQYXJzZSlcbiAgLnVzZShwaXBlbGluZVJ1bilcbiAgLnVzZShwaXBlbGluZVN0cmluZ2lmeSlcblxuZnVuY3Rpb24gcGlwZWxpbmVQYXJzZShwLCBjdHgpIHtcbiAgY3R4LnRyZWUgPSBwLnBhcnNlKGN0eC5maWxlKVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVJ1bihwLCBjdHgsIG5leHQpIHtcbiAgcC5ydW4oY3R4LnRyZWUsIGN0eC5maWxlLCBkb25lKVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgbmV4dChlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC50cmVlID0gdHJlZVxuICAgICAgY3R4LmZpbGUgPSBmaWxlXG4gICAgICBuZXh0KClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVTdHJpbmdpZnkocCwgY3R4KSB7XG4gIHZhciByZXN1bHQgPSBwLnN0cmluZ2lmeShjdHgudHJlZSwgY3R4LmZpbGUpXG4gIHZhciBmaWxlID0gY3R4LmZpbGVcblxuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgfHwgcmVzdWx0ID09PSBudWxsKSB7XG4gICAgLy8gRW1wdHkuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKHJlc3VsdCkpIHtcbiAgICBmaWxlLmNvbnRlbnRzID0gcmVzdWx0XG4gIH0gZWxzZSB7XG4gICAgZmlsZS5yZXN1bHQgPSByZXN1bHRcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpcnN0IHByb2Nlc3Nvci5cbmZ1bmN0aW9uIHVuaWZpZWQoKSB7XG4gIHZhciBhdHRhY2hlcnMgPSBbXVxuICB2YXIgdHJhbnNmb3JtZXJzID0gdHJvdWdoKClcbiAgdmFyIG5hbWVzcGFjZSA9IHt9XG4gIHZhciBmcm96ZW4gPSBmYWxzZVxuICB2YXIgZnJlZXplSW5kZXggPSAtMVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgcHJvY2Vzc29yLmRhdGEgPSBkYXRhXG5cbiAgLy8gTG9jay5cbiAgcHJvY2Vzc29yLmZyZWV6ZSA9IGZyZWV6ZVxuXG4gIC8vIFBsdWdpbnMuXG4gIHByb2Nlc3Nvci5hdHRhY2hlcnMgPSBhdHRhY2hlcnNcbiAgcHJvY2Vzc29yLnVzZSA9IHVzZVxuXG4gIC8vIEFQSS5cbiAgcHJvY2Vzc29yLnBhcnNlID0gcGFyc2VcbiAgcHJvY2Vzc29yLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuICBwcm9jZXNzb3IucnVuID0gcnVuXG4gIHByb2Nlc3Nvci5ydW5TeW5jID0gcnVuU3luY1xuICBwcm9jZXNzb3IucHJvY2VzcyA9IHByb2Nlc3NcbiAgcHJvY2Vzc29yLnByb2Nlc3NTeW5jID0gcHJvY2Vzc1N5bmNcblxuICAvLyBFeHBvc2UuXG4gIHJldHVybiBwcm9jZXNzb3JcblxuICAvLyBDcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGJhc2VkIG9uIHRoZSBwcm9jZXNzb3IgaW4gdGhlIGN1cnJlbnQgc2NvcGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3NvcigpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB1bmlmaWVkKClcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZGVzdGluYXRpb24udXNlLmFwcGx5KG51bGwsIGF0dGFjaGVyc1tpbmRleF0pXG4gICAgfVxuXG4gICAgZGVzdGluYXRpb24uZGF0YShleHRlbmQodHJ1ZSwge30sIG5hbWVzcGFjZSkpXG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25cbiAgfVxuXG4gIC8vIEZyZWV6ZTogdXNlZCB0byBzaWduYWwgYSBwcm9jZXNzb3IgdGhhdCBoYXMgZmluaXNoZWQgY29uZmlndXJhdGlvbi5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIHRha2UgdW5pZmllZCBpdHNlbGY6IGl04oCZcyBmcm96ZW4uXG4gIC8vIFBsdWdpbnMgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBpdC5cbiAgLy8gUmF0aGVyLCBpdCBzaG91bGQgYmUgZXh0ZW5kZWQsIGJ5IGludm9raW5nIGl0LCBiZWZvcmUgbW9kaWZ5aW5nIGl0LlxuICAvL1xuICAvLyBJbiBlc3NlbmNlLCBhbHdheXMgaW52b2tlIHRoaXMgd2hlbiBleHBvcnRpbmcgYSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICB2YXIgdmFsdWVzXG4gICAgdmFyIHBsdWdpblxuICAgIHZhciBvcHRpb25zXG4gICAgdmFyIHRyYW5zZm9ybWVyXG5cbiAgICBpZiAoZnJvemVuKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrZnJlZXplSW5kZXggPCBhdHRhY2hlcnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZXMgPSBhdHRhY2hlcnNbZnJlZXplSW5kZXhdXG4gICAgICBwbHVnaW4gPSB2YWx1ZXNbMF1cbiAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMV1cbiAgICAgIHRyYW5zZm9ybWVyID0gbnVsbFxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWVzWzFdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybWVyID0gcGx1Z2luLmFwcGx5KHByb2Nlc3NvciwgdmFsdWVzLnNsaWNlKDEpKVxuXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy51c2UodHJhbnNmb3JtZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnJvemVuID0gdHJ1ZVxuICAgIGZyZWV6ZUluZGV4ID0gSW5maW5pdHlcblxuICAgIHJldHVybiBwcm9jZXNzb3JcbiAgfVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgLy8gR2V0dGVyIC8gc2V0dGVyIGZvciBwcm9jZXNzb3Itc3BlY2lmaWMgaW5mb3JtdGlvbi5cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBTZXQgYGtleWAuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcblxuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgYGtleWAuXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8vIFNldCBzcGFjZS5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8vIEdldCBzcGFjZS5cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvLyBQbHVnaW4gbWFuYWdlbWVudC5cbiAgLy9cbiAgLy8gUGFzcyBpdDpcbiAgLy8gKiAgIGFuIGF0dGFjaGVyIGFuZCBvcHRpb25zLFxuICAvLyAqICAgYSBwcmVzZXQsXG4gIC8vICogICBhIGxpc3Qgb2YgcHJlc2V0cywgYXR0YWNoZXJzLCBhbmQgYXJndW1lbnRzIChsaXN0IG9mIGF0dGFjaGVycyBhbmRcbiAgLy8gICAgIG9wdGlvbnMpLlxuICBmdW5jdGlvbiB1c2UodmFsdWUpIHtcbiAgICB2YXIgc2V0dGluZ3NcblxuICAgIGFzc2VydFVuZnJvemVuKCd1c2UnLCBmcm96ZW4pXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRW1wdHkuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGxlbmd0aFxuICAgICAgdmFyIGluZGV4XG5cbiAgICAgIGlmIChwbHVnaW5zID09PSBudWxsIHx8IHBsdWdpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHBsdWdpbnMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGx1Z2lucy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSAtMVxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgYWRkKHBsdWdpbnNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgbGlzdCBvZiBwbHVnaW5zLCBub3QgYCcgKyBwbHVnaW5zICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW4sIHZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSBmaW5kKHBsdWdpbilcblxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmIChwbGFpbihlbnRyeVsxXSkgJiYgcGxhaW4odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBleHRlbmQoZW50cnlbMV0sIHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cnlbMV0gPSB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNoZXJzLnB1c2goc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQocGx1Z2luKSB7XG4gICAgdmFyIGxlbmd0aCA9IGF0dGFjaGVycy5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBlbnRyeVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gYXR0YWNoZXJzW2luZGV4XVxuXG4gICAgICBpZiAoZW50cnlbMF0gPT09IHBsdWdpbikge1xuICAgICAgICByZXR1cm4gZW50cnlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHBhcnNlKGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBQYXJzZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgUGFyc2VyID0gcHJvY2Vzc29yLlBhcnNlclxuICAgIGFzc2VydFBhcnNlcigncGFyc2UnLCBQYXJzZXIpXG5cbiAgICBpZiAobmV3YWJsZShQYXJzZXIsICdwYXJzZScpKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlcihTdHJpbmcoZmlsZSksIGZpbGUpLnBhcnNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBSdW4gdHJhbnNmb3JtcyBvbiBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3JcbiAgLy8gdmZpbGUgcmVwcmVzZW50YXRpb24pLCBhc3luYy5cbiAgZnVuY3Rpb24gcnVuKG5vZGUsIGZpbGUsIGNiKSB7XG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuICAgIGZyZWV6ZSgpXG5cbiAgICBpZiAoIWNiICYmIHR5cGVvZiBmaWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGZpbGVcbiAgICAgIGZpbGUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0cmFuc2Zvcm1lcnMucnVuKG5vZGUsIHZmaWxlKGZpbGUpLCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSwgZmlsZSkge1xuICAgICAgICB0cmVlID0gdHJlZSB8fCBub2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKHRyZWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgdHJlZSwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHJ1blN5bmMobm9kZSwgZmlsZSkge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgcnVuKG5vZGUsIGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdydW5TeW5jJywgJ3J1bicsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgICByZXN1bHQgPSB0cmVlXG4gICAgfVxuICB9XG5cbiAgLy8gU3RyaW5naWZ5IGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZVxuICAvLyByZXByZXNlbnRhdGlvbikgaW50byBhIHN0cmluZyB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIENvbXBpbGVyXG5cbiAgICBmcmVlemUoKVxuICAgIENvbXBpbGVyID0gcHJvY2Vzc29yLkNvbXBpbGVyXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3N0cmluZ2lmeScsIENvbXBpbGVyKVxuICAgIGFzc2VydE5vZGUobm9kZSlcblxuICAgIGlmIChuZXdhYmxlKENvbXBpbGVyLCAnY29tcGlsZScpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBpbGVyKG5vZGUsIGZpbGUpLmNvbXBpbGUoKVxuICAgIH1cblxuICAgIHJldHVybiBDb21waWxlcihub2RlLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3NvciwgdGhlbiBydW4gdHJhbnNmb3JtcyBvbiB0aGF0IG5vZGUsIGFuZFxuICAvLyBjb21waWxlIHRoZSByZXN1bHRpbmcgbm9kZSB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLCBhbmRcbiAgLy8gc3RvcmUgdGhhdCByZXN1bHQgb24gdGhlIHZmaWxlLlxuICBmdW5jdGlvbiBwcm9jZXNzKGRvYywgY2IpIHtcbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2VzcycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgICBwaXBlbGluZS5ydW4ocHJvY2Vzc29yLCB7ZmlsZTogZmlsZX0sIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgdGhlIGdpdmVuIGRvY3VtZW50IChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pLCBzeW5jLlxuICBmdW5jdGlvbiBwcm9jZXNzU3luYyhkb2MpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciBmaWxlXG5cbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5Db21waWxlcilcbiAgICBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgcHJvY2VzcyhmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncHJvY2Vzc1N5bmMnLCAncHJvY2VzcycsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIGZpbGVcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGEgY29uc3RydWN0b3IuXG5mdW5jdGlvbiBuZXdhYmxlKHZhbHVlLCBuYW1lKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmXG4gICAgdmFsdWUucHJvdG90eXBlICYmXG4gICAgLy8gQSBmdW5jdGlvbiB3aXRoIGtleXMgaW4gaXRzIHByb3RvdHlwZSBpcyBwcm9iYWJseSBhIGNvbnN0cnVjdG9yLlxuICAgIC8vIENsYXNzZXPigJkgcHJvdG90eXBlIG1ldGhvZHMgYXJlIG5vdCBlbnVtZXJhYmxlLCBzbyB3ZSBjaGVjayBpZiBzb21lIHZhbHVlXG4gICAgLy8gZXhpc3RzIGluIHRoZSBwcm90b3R5cGUuXG4gICAgKGtleXModmFsdWUucHJvdG90eXBlKSB8fCBuYW1lIGluIHZhbHVlLnByb3RvdHlwZSlcbiAgKVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCB3aXRoIGtleXMuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciBrZXlcbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEFzc2VydCBhIHBhcnNlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgUGFyc2VyKSB7XG4gIGlmICh0eXBlb2YgUGFyc2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgUGFyc2VyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGEgY29tcGlsZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0Q29tcGlsZXIobmFtZSwgQ29tcGlsZXIpIHtcbiAgaWYgKHR5cGVvZiBDb21waWxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYENvbXBpbGVyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoZSBwcm9jZXNzb3IgaXMgbm90IGZyb3plbi5cbmZ1bmN0aW9uIGFzc2VydFVuZnJvemVuKG5hbWUsIGZyb3plbikge1xuICBpZiAoZnJvemVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBpbnZva2UgYCcgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgJ2Agb24gYSBmcm96ZW4gcHJvY2Vzc29yLlxcbkNyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgZmlyc3QsIGJ5IGludm9raW5nIGl0OiB1c2UgYHByb2Nlc3NvcigpYCBpbnN0ZWFkIG9mIGBwcm9jZXNzb3JgLidcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBub2RlYCBpcyBhIHVuaXN0IG5vZGUuXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBjb21wbGV0ZWAgaXMgYHRydWVgLlxuZnVuY3Rpb24gYXNzZXJ0RG9uZShuYW1lLCBhc3luY05hbWUsIGNvbXBsZXRlKSB7XG4gIGlmICghY29tcGxldGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgZmluaXNoZWQgYXN5bmMuIFVzZSBgJyArIGFzeW5jTmFtZSArICdgIGluc3RlYWQnXG4gICAgKVxuICB9XG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4ge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXHRyZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn07XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICAvLyBOb3RoaW5nLlxuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3Bvc2l0aW9uJykgfHwgb3duLmNhbGwodmFsdWUsICd0eXBlJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUucG9zaXRpb24pXG4gIH1cblxuICAvLyBQb3NpdGlvbi5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnc3RhcnQnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2VuZCcpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlKVxuICB9XG5cbiAgLy8gUG9pbnQuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ2xpbmUnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2NvbHVtbicpKSB7XG4gICAgcmV0dXJuIHBvaW50KHZhbHVlKVxuICB9XG5cbiAgLy8gP1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gcG9pbnQocG9pbnQpIHtcbiAgaWYgKCFwb2ludCB8fCB0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnKSB7XG4gICAgcG9pbnQgPSB7fVxuICB9XG5cbiAgcmV0dXJuIGluZGV4KHBvaW50LmxpbmUpICsgJzonICsgaW5kZXgocG9pbnQuY29sdW1uKVxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgaWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICBwb3MgPSB7fVxuICB9XG5cbiAgcmV0dXJuIHBvaW50KHBvcy5zdGFydCkgKyAnLScgKyBwb2ludChwb3MuZW5kKVxufVxuXG5mdW5jdGlvbiBpbmRleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gVk1lc3NhZ2VcblxuLy8gSW5oZXJpdCBmcm9tIGBFcnJvciNgLlxuZnVuY3Rpb24gVk1lc3NhZ2VQcm90b3R5cGUoKSB7fVxuVk1lc3NhZ2VQcm90b3R5cGUucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlXG5WTWVzc2FnZS5wcm90b3R5cGUgPSBuZXcgVk1lc3NhZ2VQcm90b3R5cGUoKVxuXG4vLyBNZXNzYWdlIHByb3BlcnRpZXMuXG52YXIgcHJvdG8gPSBWTWVzc2FnZS5wcm90b3R5cGVcblxucHJvdG8uZmlsZSA9ICcnXG5wcm90by5uYW1lID0gJydcbnByb3RvLnJlYXNvbiA9ICcnXG5wcm90by5tZXNzYWdlID0gJydcbnByb3RvLnN0YWNrID0gJydcbnByb3RvLmZhdGFsID0gbnVsbFxucHJvdG8uY29sdW1uID0gbnVsbFxucHJvdG8ubGluZSA9IG51bGxcblxuLy8gQ29uc3RydWN0IGEgbmV3IFZNZXNzYWdlLlxuLy9cbi8vIE5vdGU6IFdlIGNhbm5vdCBpbnZva2UgYEVycm9yYCBvbiB0aGUgY3JlYXRlZCBjb250ZXh0LCBhcyB0aGF0IGFkZHMgcmVhZG9ubHlcbi8vIGBsaW5lYCBhbmQgYGNvbHVtbmAgYXR0cmlidXRlcyBvbiBTYWZhcmkgOSwgdGh1cyB0aHJvd2luZyBhbmQgZmFpbGluZyB0aGVcbi8vIGRhdGEuXG5mdW5jdGlvbiBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIHBhcnRzXG4gIHZhciByYW5nZVxuICB2YXIgbG9jYXRpb25cblxuICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG9yaWdpbiA9IHBvc2l0aW9uXG4gICAgcG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBwYXJ0cyA9IHBhcnNlT3JpZ2luKG9yaWdpbilcbiAgcmFuZ2UgPSBzdHJpbmdpZnkocG9zaXRpb24pIHx8ICcxOjEnXG5cbiAgbG9jYXRpb24gPSB7XG4gICAgc3RhcnQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9LFxuICAgIGVuZDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH1cbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5wb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucG9zaXRpb25cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIC8vIFBvc2l0aW9uLlxuICAgIGlmIChwb3NpdGlvbi5zdGFydCkge1xuICAgICAgbG9jYXRpb24gPSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGxvY2F0aW9uLnN0YXJ0ID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpZiAocmVhc29uLnN0YWNrKSB7XG4gICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIHJlYXNvbiA9IHJlYXNvbi5tZXNzYWdlXG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cbiAgdGhpcy5uYW1lID0gcmFuZ2VcbiAgdGhpcy5yZWFzb24gPSByZWFzb25cbiAgdGhpcy5saW5lID0gcG9zaXRpb24gPyBwb3NpdGlvbi5saW5lIDogbnVsbFxuICB0aGlzLmNvbHVtbiA9IHBvc2l0aW9uID8gcG9zaXRpb24uY29sdW1uIDogbnVsbFxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zb3VyY2UgPSBwYXJ0c1swXVxuICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT3JpZ2luKG9yaWdpbikge1xuICB2YXIgcmVzdWx0ID0gW251bGwsIG51bGxdXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFswXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgcmVwbGFjZSA9IHJlcXVpcmUoJ3JlcGxhY2UtZXh0JylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbi8vIE9yZGVyIG9mIHNldHRpbmcgKGxlYXN0IHNwZWNpZmljIHRvIG1vc3QpLCB3ZSBuZWVkIHRoaXMgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIGB7c3RlbTogJ2EnLCBwYXRoOiAnfi9iLmpzJ31gIHdvdWxkIHRocm93LCBhcyBhIHBhdGggaXMgbmVlZGVkIGJlZm9yZSBhXG4vLyBzdGVtIGNhbiBiZSBzZXQuXG52YXIgb3JkZXIgPSBbJ2hpc3RvcnknLCAncGF0aCcsICdiYXNlbmFtZScsICdzdGVtJywgJ2V4dG5hbWUnLCAnZGlybmFtZSddXG5cbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmdcblxuLy8gQWNjZXNzIGZ1bGwgcGF0aCAoYH4vaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXRoJywge2dldDogZ2V0UGF0aCwgc2V0OiBzZXRQYXRofSlcblxuLy8gQWNjZXNzIHBhcmVudCBwYXRoIChgfmApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZGlybmFtZScsIHtnZXQ6IGdldERpcm5hbWUsIHNldDogc2V0RGlybmFtZX0pXG5cbi8vIEFjY2VzcyBiYXNlbmFtZSAoYGluZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnYmFzZW5hbWUnLCB7Z2V0OiBnZXRCYXNlbmFtZSwgc2V0OiBzZXRCYXNlbmFtZX0pXG5cbi8vIEFjY2VzcyBleHRuYW1lIChgLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdleHRuYW1lJywge2dldDogZ2V0RXh0bmFtZSwgc2V0OiBzZXRFeHRuYW1lfSlcblxuLy8gQWNjZXNzIHN0ZW0gKGBpbmRleC5taW5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3N0ZW0nLCB7Z2V0OiBnZXRTdGVtLCBzZXQ6IHNldFN0ZW19KVxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgZmlsZS5cbmZ1bmN0aW9uIFZGaWxlKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtjb250ZW50czogb3B0aW9uc31cbiAgfSBlbHNlIGlmICgnbWVzc2FnZScgaW4gb3B0aW9ucyAmJiAnbWVzc2FnZXMnIGluIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZGaWxlKSkge1xuICAgIHJldHVybiBuZXcgVkZpbGUob3B0aW9ucylcbiAgfVxuXG4gIHRoaXMuZGF0YSA9IHt9XG4gIHRoaXMubWVzc2FnZXMgPSBbXVxuICB0aGlzLmhpc3RvcnkgPSBbXVxuICB0aGlzLmN3ZCA9IHByb2Nlc3MuY3dkKClcblxuICAvLyBTZXQgcGF0aCByZWxhdGVkIHByb3BlcnRpZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gb3JkZXIubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcm9wID0gb3JkZXJbaW5kZXhdXG5cbiAgICBpZiAob3duLmNhbGwob3B0aW9ucywgcHJvcCkpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG5vbi1wYXRoIHJlbGF0ZWQgcHJvcGVydGllcy5cbiAgZm9yIChwcm9wIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3JkZXIuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHNldFBhdGgocGF0aCkge1xuICBhc3NlcnROb25FbXB0eShwYXRoLCAncGF0aCcpXG5cbiAgaWYgKHBhdGggIT09IHRoaXMucGF0aCkge1xuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlybmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5kaXJuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RGlybmFtZShkaXJuYW1lKSB7XG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZGlybmFtZScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbihkaXJuYW1lIHx8ICcnLCB0aGlzLmJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRCYXNlbmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEJhc2VuYW1lKGJhc2VuYW1lKSB7XG4gIGFzc2VydE5vbkVtcHR5KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICBhc3NlcnRQYXJ0KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBiYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0RXh0bmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5leHRuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RXh0bmFtZShleHRuYW1lKSB7XG4gIHZhciBleHQgPSBleHRuYW1lIHx8ICcnXG5cbiAgYXNzZXJ0UGFydChleHQsICdleHRuYW1lJylcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdleHRuYW1lJylcblxuICBpZiAoZXh0KSB7XG4gICAgaWYgKGV4dC5jaGFyQXQoMCkgIT09ICcuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgbXVzdCBzdGFydCB3aXRoIGAuYCcpXG4gICAgfVxuXG4gICAgaWYgKGV4dC5pbmRleE9mKCcuJywgMSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBjYW5ub3QgY29udGFpbiBtdWx0aXBsZSBkb3RzJylcbiAgICB9XG4gIH1cblxuICB0aGlzLnBhdGggPSByZXBsYWNlKHRoaXMucGF0aCwgZXh0KVxufVxuXG5mdW5jdGlvbiBnZXRTdGVtKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZydcbiAgICA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoLCB0aGlzLmV4dG5hbWUpXG4gICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0U3RlbShzdGVtKSB7XG4gIGFzc2VydE5vbkVtcHR5KHN0ZW0sICdzdGVtJylcbiAgYXNzZXJ0UGFydChzdGVtLCAnc3RlbScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIHN0ZW0gKyAodGhpcy5leHRuYW1lIHx8ICcnKSlcbn1cblxuLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlsZS5cbmZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kaW5nKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuY29udGVudHMgfHwgJydcbiAgcmV0dXJuIGJ1ZmZlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZykgOiBTdHJpbmcodmFsdWUpXG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgYSBwYXRoIChpLmUuLCBkb2VzIG5vdCBjb250YWluIGBwYXRoLnNlcGApLlxuZnVuY3Rpb24gYXNzZXJ0UGFydChwYXJ0LCBuYW1lKSB7XG4gIGlmIChwYXJ0LmluZGV4T2YocGF0aC5zZXApICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgYSBwYXRoOiBkaWQgbm90IGV4cGVjdCBgJyArIHBhdGguc2VwICsgJ2AnXG4gICAgKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgZW1wdHkuXG5mdW5jdGlvbiBhc3NlcnROb25FbXB0eShwYXJ0LCBuYW1lKSB7XG4gIGlmICghcGFydCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGVtcHR5JylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYHBhdGhgIGV4aXN0cy5cbmZ1bmN0aW9uIGFzc2VydFBhdGgocGF0aCwgbmFtZSkge1xuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHRpbmcgYCcgKyBuYW1lICsgJ2AgcmVxdWlyZXMgYHBhdGhgIHRvIGJlIHNldCB0b28nKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIFZNZXNzYWdlID0gcmVxdWlyZSgndmZpbGUtbWVzc2FnZScpXG52YXIgVkZpbGUgPSByZXF1aXJlKCcuL2NvcmUuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG5wcm90by5tZXNzYWdlID0gbWVzc2FnZVxucHJvdG8uaW5mbyA9IGluZm9cbnByb3RvLmZhaWwgPSBmYWlsXG5cbi8vIENyZWF0ZSBhIG1lc3NhZ2Ugd2l0aCBgcmVhc29uYCBhdCBgcG9zaXRpb25gLlxuLy8gV2hlbiBhbiBlcnJvciBpcyBwYXNzZWQgaW4gYXMgYHJlYXNvbmAsIGNvcGllcyB0aGUgc3RhY2suXG5mdW5jdGlvbiBtZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgZmlsZVBhdGggPSB0aGlzLnBhdGhcbiAgdmFyIG1lc3NhZ2UgPSBuZXcgVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKVxuXG4gIGlmIChmaWxlUGF0aCkge1xuICAgIG1lc3NhZ2UubmFtZSA9IGZpbGVQYXRoICsgJzonICsgbWVzc2FnZS5uYW1lXG4gICAgbWVzc2FnZS5maWxlID0gZmlsZVBhdGhcbiAgfVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBmYWxzZVxuXG4gIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKVxuXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8vIEZhaWw6IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgdGhyb3dzIGl0LlxuZnVuY3Rpb24gZmFpbCgpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSB0cnVlXG5cbiAgdGhyb3cgbWVzc2FnZVxufVxuXG4vLyBJbmZvOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIG1hcmtzIHRoZSBmYXRhbGl0eVxuLy8gYXMgbnVsbC5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gbnVsbFxuXG4gIHJldHVybiBtZXNzYWdlXG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbnZhciBub29wID0gRnVuY3Rpb24ucHJvdG90eXBlXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gSGFuZGxlIHZhbHVlcyBiYXNlZCBvbiBhIHByb3BlcnR5LlxuZnVuY3Rpb24gZmFjdG9yeShrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIGZ1bmN0aW9uIG9uZSh2YWx1ZSkge1xuICAgIHZhciBmbiA9IG9uZS5pbnZhbGlkXG4gICAgdmFyIGhhbmRsZXJzID0gb25lLmhhbmRsZXJzXG5cbiAgICBpZiAodmFsdWUgJiYgb3duLmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgIGZuID0gb3duLmNhbGwoaGFuZGxlcnMsIHZhbHVlW2tleV0pID8gaGFuZGxlcnNbdmFsdWVba2V5XV0gOiBvbmUudW5rbm93blxuICAgIH1cblxuICAgIHJldHVybiAoZm4gfHwgbm9vcCkuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG5cbiAgb25lLmhhbmRsZXJzID0gc2V0dGluZ3MuaGFuZGxlcnMgfHwge31cbiAgb25lLmludmFsaWQgPSBzZXR0aW5ncy5pbnZhbGlkXG4gIG9uZS51bmtub3duID0gc2V0dGluZ3MudW5rbm93blxuXG4gIHJldHVybiBvbmVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=