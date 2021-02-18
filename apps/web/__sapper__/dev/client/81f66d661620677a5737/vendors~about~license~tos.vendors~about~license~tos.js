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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2JhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWNhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9pcy1oZXhhZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2xvbmdlc3Qtc3RyZWFrL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2JyZWFrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9oZWFkaW5nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvaW1hZ2UtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2ltYWdlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2lubGluZS1jb2RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvbGlzdC1pdGVtLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvcGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvc3Ryb25nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2pvaW4uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91bnNhZmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2Fzc29jaWF0aW9uLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1idWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLWVtcGhhc2lzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1mZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stbGlzdC1pdGVtLWluZGVudC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXJ1bGUtcmVwZWF0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1ydWxlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NvbnRhaW5lci1mbG93LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItcGhyYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2Zvcm1hdC1jb2RlLWFzLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9mb3JtYXQtaGVhZGluZy1hcy1zZXRleHQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2Zvcm1hdC1saW5rLWFzLWF1dG9saW5rLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9pbmRlbnQtbGluZXMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3NhZmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL25vZGVfbW9kdWxlcy9zdHJpbmdpZnktZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktYXRleHQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1kaWdpdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1oZXgtZGlnaXQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktcHVuY3R1YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvY29kZXMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS1wdW5jdHVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci91bmljb2RlLXdoaXRlc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9mcm9tLWNoYXItY29kZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2hhcy1vd24tcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9odG1sLWJsb2NrLW5hbWVzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaHRtbC1yYXctbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L3VuaWNvZGUtcHVuY3R1YXRpb24tcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdHJ1Y3RzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS9jb250ZW50LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvZmxvdy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3BhcnNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvcG9zdHByb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9wcmVwcm9jZXNzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvYXR0ZW50aW9uLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvYXV0b2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9ibG9jay1xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2NoYXJhY3Rlci1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jaGFyYWN0ZXItcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS1mZW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS10ZXh0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS1sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXRpdGxlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvaGFyZC1icmVhay1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9oZWFkaW5nLWF0eC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2h0bWwtZmxvdy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2h0bWwtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLWVuZC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLXN0YXJ0LWltYWdlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGFiZWwtc3RhcnQtbGluay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xpbmUtZW5kaW5nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3BhcnRpYWwtYmxhbmstbGluZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3NldGV4dC11bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY2h1bmtlZC1zcGxpY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NsYXNzaWZ5LWNoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY29tYmluZS1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9jcmVhdGUtdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9taW5pZmxhdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvbW92ZS1wb2ludC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3ByZWZpeC1zaXplLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9yZWdleC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvcmVzb2x2ZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NhZmUtZnJvbS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NlcmlhbGl6ZS1jaHVua3MuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NoYWxsb3cuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NpemUtY2h1bmtzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zbGljZS1jaHVua3MuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3N1YnRva2VuaXplLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5icm93c2VyLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlcGVhdC1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZXBsYWNlLWV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Ryb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Ryb3VnaC93cmFwLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pZmllZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy92ZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3ZmaWxlL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy96d2l0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlKWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkEsWUFBWSxtQkFBTyxDQUFDLGtGQUFxQjs7QUFFekM7Ozs7Ozs7Ozs7OztBQ0ZBLFlBQVksbUJBQU8sQ0FBQyxrRkFBcUI7O0FBRXpDOzs7Ozs7Ozs7Ozs7QUNGQSxZQUFZLG1CQUFPLENBQUMsa0ZBQXFCOztBQUV6Qzs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEsWUFBWSxtQkFBTyxDQUFDLGtGQUFxQjs7QUFFekM7Ozs7Ozs7Ozs7OztBQ0ZBLFlBQVksbUJBQU8sQ0FBQyxrRkFBcUI7O0FBRXpDOzs7Ozs7Ozs7Ozs7QUNGQSxZQUFZLG1CQUFPLENBQUMsa0ZBQXFCOztBQUV6QyxtQ0FBbUM7Ozs7Ozs7Ozs7OztBQ0ZuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEseUJBQXlCLG1CQUFPLENBQUMsc0hBQXVDO0FBQ3hFLFlBQVksbUJBQU8sQ0FBQyxrRkFBcUI7O0FBRXpDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsWUFBWSxtQkFBTyxDQUFDLGtGQUFxQjs7QUFFekM7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsK0RBQStEO0FBQy9ELGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7Ozs7QUNBQSxtQkFBbUI7Ozs7Ozs7Ozs7OztBQ0FuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsV0FBVyxnQkFBZ0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLDhHQUFtQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsbUJBQU8sQ0FBQyw4R0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1ZEE7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsOEdBQW1DO0FBQ3BFLGdDQUFnQyxtQkFBTyxDQUFDLGdJQUE0QztBQUNwRixvQkFBb0IsbUJBQU8sQ0FBQyxrR0FBNkI7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsNEZBQTBCO0FBQ25ELHdCQUF3QixtQkFBTyxDQUFDLDBHQUFpQzs7QUFFakUsa0JBQWtCLG1CQUFPLENBQUMsb0ZBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2phQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG1CQUFPLENBQUMsZ0lBQTRDOztBQUVwRiwwQkFBMEIsbUJBQU8sQ0FBQyxvR0FBOEI7QUFDaEUsb0JBQW9CLG1CQUFPLENBQUMsd0ZBQXdCO0FBQ3BELGlCQUFpQixtQkFBTyxDQUFDLGtGQUFxQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsMEVBQWlCO0FBQ3ZDLHdCQUF3QixtQkFBTyxDQUFDLGdHQUF1QjtBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyxvRkFBaUI7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMsOEZBQXNCO0FBQ3JELGtCQUFrQixtQkFBTyxDQUFDLG9GQUFpQjs7QUFFM0MsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQiwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1Q0FBdUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN1VBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsNEVBQWE7O0FBRTFDO0FBQ0E7O0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCO0FBQ3BFLCtDQUErQyxXQUFXO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvTVk7O0FBRVo7O0FBRUE7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUUsK0JBQStCO0FBQy9CLGtFQUFrRTtBQUNsRTtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixXQUFXOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjgxZjY2ZDY2MTYyMDY3N2E1NzM3L3ZlbmRvcnN+YWJvdXR+bGljZW5zZX50b3MudmVuZG9yc35hYm91dH5saWNlbnNlfnRvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhaWxcblxuZnVuY3Rpb24gYmFpbChlcnIpIHtcbiAgaWYgKGVycikge1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhYmV0aWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFiZXRpY2FsLlxuZnVuY3Rpb24gYWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSAvKiBhLXogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSAvKiBBLVogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYW51bWVyaWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFudW1lcmljYWwuXG5mdW5jdGlvbiBhbHBoYW51bWVyaWNhbChjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHx8IGRlY2ltYWwoY2hhcmFjdGVyKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgZGVjaW1hbC5cbmZ1bmN0aW9uIGRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgLyogMC05ICovXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZXhhZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgaGV4YWRlY2ltYWwuXG5mdW5jdGlvbiBoZXhhZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTAyKSAvKiB6ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDcwKSAvKiBaICovIHx8XG4gICAgKGNvZGUgPj0gNDggLyogQSAqLyAmJiBjb2RlIDw9IDU3KSAvKiBaICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvbmdlc3RTdHJlYWtcblxuLy8gR2V0IHRoZSBjb3VudCBvZiB0aGUgbG9uZ2VzdCByZXBlYXRpbmcgc3RyZWFrIG9mIGBjaGFyYWN0ZXJgIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBsb25nZXN0U3RyZWFrKHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgbWF4aW11bSA9IDBcbiAgdmFyIGV4cGVjdGVkXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG4gIGV4cGVjdGVkID0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuXG4gICAgaWYgKGluZGV4ID09PSBleHBlY3RlZCkge1xuICAgICAgaWYgKGNvdW50ID4gbWF4aW11bSkge1xuICAgICAgICBtYXhpbXVtID0gY291bnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAxXG4gICAgfVxuXG4gICAgZXhwZWN0ZWQgPSBpbmRleCArIDFcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBleHBlY3RlZClcbiAgfVxuXG4gIHJldHVybiBtYXhpbXVtXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tTWFya2Rvd25cblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHknKVxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1zdHJpbmcnKVxudmFyIGNvZGVzID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2NvZGVzJylcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jb25zdGFudC9jb25zdGFudHMnKVxudmFyIG93biA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2hhcy1vd24tcHJvcGVydHknKVxudmFyIHR5cGVzID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvdHlwZXMnKVxudmFyIG5vcm1hbGl6ZUlkZW50aWZpZXIgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL25vcm1hbGl6ZS1pZGVudGlmaWVyJylcbnZhciBzYWZlRnJvbUludCA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvc2FmZS1mcm9tLWludCcpXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvcGFyc2UnKVxudmFyIHByZXByb2Nlc3NvciA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3ByZXByb2Nlc3MnKVxudmFyIHBvc3Rwcm9jZXNzID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvcG9zdHByb2Nlc3MnKVxuXG5mdW5jdGlvbiBmcm9tTWFya2Rvd24odmFsdWUsIGVuY29kaW5nLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBjb21waWxlcihvcHRpb25zKShcbiAgICBwb3N0cHJvY2VzcyhcbiAgICAgIHBhcnNlcihvcHRpb25zKS5kb2N1bWVudCgpLndyaXRlKHByZXByb2Nlc3NvcigpKHZhbHVlLCBlbmNvZGluZywgdHJ1ZSkpXG4gICAgKVxuICApXG59XG5cbi8vIE5vdGUgdGhpcyBjb21waWxlciBvbmx5IHVuZGVyc3RhbmQgY29tcGxldGUgYnVmZmVyaW5nLCBub3Qgc3RyZWFtaW5nLlxuZnVuY3Rpb24gY29tcGlsZXIob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBjb25maWcgPSBjb25maWd1cmUoXG4gICAge1xuICAgICAgY2FuQ29udGFpbkVvbHM6IFtcbiAgICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICAgJ2ZyYWdtZW50JyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ3N0cm9uZydcbiAgICAgIF0sXG4gICAgICBlbnRlcjoge1xuICAgICAgICBhdXRvbGluazogb3BlbmVyKGxpbmspLFxuICAgICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmVudGVyZGF0YSxcbiAgICAgICAgYXV0b2xpbmtFbWFpbDogb25lbnRlcmRhdGEsXG4gICAgICAgIGF0eEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgYmxvY2tRdW90ZTogb3BlbmVyKGJsb2NrUXVvdGUpLFxuICAgICAgICBjaGFyYWN0ZXJFc2NhcGU6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2U6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmVuY2VkOiBvcGVuZXIoY29kZUZsb3cpLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VJbmZvOiBidWZmZXIsXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZU1ldGE6IGJ1ZmZlcixcbiAgICAgICAgY29kZUluZGVudGVkOiBvcGVuZXIoY29kZUZsb3csIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0OiBvcGVuZXIoY29kZVRleHQsIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGRhdGE6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmxvd1ZhbHVlOiBvbmVudGVyZGF0YSxcbiAgICAgICAgZGVmaW5pdGlvbjogb3BlbmVyKGRlZmluaXRpb24pLFxuICAgICAgICBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgZGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIGRlZmluaXRpb25UaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgICBlbXBoYXNpczogb3BlbmVyKGVtcGhhc2lzKSxcbiAgICAgICAgaGFyZEJyZWFrRXNjYXBlOiBvcGVuZXIoaGFyZEJyZWFrKSxcbiAgICAgICAgaGFyZEJyZWFrVHJhaWxpbmc6IG9wZW5lcihoYXJkQnJlYWspLFxuICAgICAgICBodG1sRmxvdzogb3BlbmVyKGh0bWwsIGJ1ZmZlciksXG4gICAgICAgIGh0bWxGbG93RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGh0bWxUZXh0OiBvcGVuZXIoaHRtbCwgYnVmZmVyKSxcbiAgICAgICAgaHRtbFRleHREYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgICAgaW1hZ2U6IG9wZW5lcihpbWFnZSksXG4gICAgICAgIGxhYmVsOiBidWZmZXIsXG4gICAgICAgIGxpbms6IG9wZW5lcihsaW5rKSxcbiAgICAgICAgbGlzdEl0ZW06IG9wZW5lcihsaXN0SXRlbSksXG4gICAgICAgIGxpc3RJdGVtVmFsdWU6IG9uZW50ZXJsaXN0aXRlbXZhbHVlLFxuICAgICAgICBsaXN0T3JkZXJlZDogb3BlbmVyKGxpc3QsIG9uZW50ZXJsaXN0b3JkZXJlZCksXG4gICAgICAgIGxpc3RVbm9yZGVyZWQ6IG9wZW5lcihsaXN0KSxcbiAgICAgICAgcGFyYWdyYXBoOiBvcGVuZXIocGFyYWdyYXBoKSxcbiAgICAgICAgcmVmZXJlbmNlOiBvbmVudGVycmVmZXJlbmNlLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZzogYnVmZmVyLFxuICAgICAgICByZXNvdXJjZVRpdGxlU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIHNldGV4dEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgc3Ryb25nOiBvcGVuZXIoc3Ryb25nKSxcbiAgICAgICAgdGhlbWF0aWNCcmVhazogb3BlbmVyKHRoZW1hdGljQnJlYWspXG4gICAgICB9LFxuICAgICAgZXhpdDoge1xuICAgICAgICBhdHhIZWFkaW5nOiBjbG9zZXIoKSxcbiAgICAgICAgYXR4SGVhZGluZ1NlcXVlbmNlOiBvbmV4aXRhdHhoZWFkaW5nc2VxdWVuY2UsXG4gICAgICAgIGF1dG9saW5rOiBjbG9zZXIoKSxcbiAgICAgICAgYXV0b2xpbmtFbWFpbDogb25leGl0YXV0b2xpbmtlbWFpbCxcbiAgICAgICAgYXV0b2xpbmtQcm90b2NvbDogb25leGl0YXV0b2xpbmtwcm90b2NvbCxcbiAgICAgICAgYmxvY2tRdW90ZTogY2xvc2VyKCksXG4gICAgICAgIGNoYXJhY3RlckVzY2FwZVZhbHVlOiBvbmV4aXRkYXRhLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbDogb25leGl0Y2hhcmFjdGVycmVmZXJlbmNlbWFya2VyLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljOiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIsXG4gICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZVZhbHVlOiBjbG9zZXIob25leGl0Y2hhcmFjdGVycmVmZXJlbmNldmFsdWUpLFxuICAgICAgICBjb2RlRmVuY2VkOiBjbG9zZXIob25leGl0Y29kZWZlbmNlZCksXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZTogb25leGl0Y29kZWZlbmNlZGZlbmNlLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VJbmZvOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VpbmZvLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VNZXRhOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VtZXRhLFxuICAgICAgICBjb2RlRmxvd1ZhbHVlOiBvbmV4aXRkYXRhLFxuICAgICAgICBjb2RlSW5kZW50ZWQ6IGNsb3NlcihvbmV4aXRjb2RlaW5kZW50ZWQpLFxuICAgICAgICBjb2RlVGV4dDogY2xvc2VyKG9uZXhpdGNvZGV0ZXh0KSxcbiAgICAgICAgY29kZVRleHREYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBkYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBkZWZpbml0aW9uOiBjbG9zZXIoKSxcbiAgICAgICAgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nOiBvbmV4aXRkZWZpbml0aW9uZGVzdGluYXRpb25zdHJpbmcsXG4gICAgICAgIGRlZmluaXRpb25MYWJlbFN0cmluZzogb25leGl0ZGVmaW5pdGlvbmxhYmVsc3RyaW5nLFxuICAgICAgICBkZWZpbml0aW9uVGl0bGVTdHJpbmc6IG9uZXhpdGRlZmluaXRpb250aXRsZXN0cmluZyxcbiAgICAgICAgZW1waGFzaXM6IGNsb3NlcigpLFxuICAgICAgICBoYXJkQnJlYWtFc2NhcGU6IGNsb3NlcihvbmV4aXRoYXJkYnJlYWspLFxuICAgICAgICBoYXJkQnJlYWtUcmFpbGluZzogY2xvc2VyKG9uZXhpdGhhcmRicmVhayksXG4gICAgICAgIGh0bWxGbG93OiBjbG9zZXIob25leGl0aHRtbGZsb3cpLFxuICAgICAgICBodG1sRmxvd0RhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGh0bWxUZXh0OiBjbG9zZXIob25leGl0aHRtbHRleHQpLFxuICAgICAgICBodG1sVGV4dERhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGltYWdlOiBjbG9zZXIob25leGl0aW1hZ2UpLFxuICAgICAgICBsYWJlbDogb25leGl0bGFiZWwsXG4gICAgICAgIGxhYmVsVGV4dDogb25leGl0bGFiZWx0ZXh0LFxuICAgICAgICBsaW5lRW5kaW5nOiBvbmV4aXRsaW5lZW5kaW5nLFxuICAgICAgICBsaW5rOiBjbG9zZXIob25leGl0bGluayksXG4gICAgICAgIGxpc3RJdGVtOiBjbG9zZXIoKSxcbiAgICAgICAgbGlzdE9yZGVyZWQ6IGNsb3NlcigpLFxuICAgICAgICBsaXN0VW5vcmRlcmVkOiBjbG9zZXIoKSxcbiAgICAgICAgcGFyYWdyYXBoOiBjbG9zZXIoKSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nOiBvbmV4aXRyZWZlcmVuY2VzdHJpbmcsXG4gICAgICAgIHJlc291cmNlRGVzdGluYXRpb25TdHJpbmc6IG9uZXhpdHJlc291cmNlZGVzdGluYXRpb25zdHJpbmcsXG4gICAgICAgIHJlc291cmNlVGl0bGVTdHJpbmc6IG9uZXhpdHJlc291cmNldGl0bGVzdHJpbmcsXG4gICAgICAgIHJlc291cmNlOiBvbmV4aXRyZXNvdXJjZSxcbiAgICAgICAgc2V0ZXh0SGVhZGluZzogY2xvc2VyKG9uZXhpdHNldGV4dGhlYWRpbmcpLFxuICAgICAgICBzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlOiBvbmV4aXRzZXRleHRoZWFkaW5nbGluZXNlcXVlbmNlLFxuICAgICAgICBzZXRleHRIZWFkaW5nVGV4dDogb25leGl0c2V0ZXh0aGVhZGluZ3RleHQsXG4gICAgICAgIHN0cm9uZzogY2xvc2VyKCksXG4gICAgICAgIHRoZW1hdGljQnJlYWs6IGNsb3NlcigpXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXR0aW5ncy5tZGFzdEV4dGVuc2lvbnMgfHwgW11cbiAgKVxuXG4gIHZhciBkYXRhID0ge31cblxuICByZXR1cm4gY29tcGlsZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoZXZlbnRzKSB7XG4gICAgdmFyIHN0YWNrID0gW3t0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBbXX1dXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGlzdFN0YWNrID0gW11cbiAgICB2YXIgbGVuZ3RoXG4gICAgdmFyIGhhbmRsZXJcbiAgICB2YXIgbGlzdFN0YXJ0XG4gICAgdmFyIGV2ZW50XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIGV2ZW50ID0gZXZlbnRzW2luZGV4XVxuXG4gICAgICAvLyBXZSBwcmVwcm9jZXNzIGxpc3RzIHRvIGFkZCBgbGlzdEl0ZW1gIHRva2VucywgYW5kIHRvIGluZmVyIHdoZXRoZXJcbiAgICAgIC8vIGl0ZW1zIHRoZSBsaXN0IGl0c2VsZiBhcmUgc3ByZWFkIG91dC5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdE9yZGVyZWQgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdFVub3JkZXJlZFxuICAgICAgKSB7XG4gICAgICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgIGxpc3RTdGFjay5wdXNoKGluZGV4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RTdGFydCA9IGxpc3RTdGFjay5wb3AoaW5kZXgpXG4gICAgICAgICAgaW5kZXggPSBwcmVwYXJlTGlzdChldmVudHMsIGxpc3RTdGFydCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleCA9IC0xXG4gICAgbGVuZ3RoID0gZXZlbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGhhbmRsZXIgPSBjb25maWdbZXZlbnRzW2luZGV4XVswXV1cblxuICAgICAgaWYgKG93bi5jYWxsKGhhbmRsZXIsIGV2ZW50c1tpbmRleF1bMV0udHlwZSkpIHtcbiAgICAgICAgaGFuZGxlcltldmVudHNbaW5kZXhdWzFdLnR5cGVdLmNhbGwoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhY2s6IHN0YWNrLFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBlbnRlcjogZW50ZXIsXG4gICAgICAgICAgICBleGl0OiBleGl0LFxuICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgICByZXN1bWU6IHJlc3VtZSxcbiAgICAgICAgICAgIHNsaWNlU2VyaWFsaXplOiBldmVudHNbaW5kZXhdWzJdLnNsaWNlU2VyaWFsaXplLFxuICAgICAgICAgICAgc2V0RGF0YTogc2V0RGF0YSxcbiAgICAgICAgICAgIGdldERhdGE6IGdldERhdGFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpZ3VyZSBvdXQgYHJvb3RgIHBvc2l0aW9uLlxuICAgIHN0YWNrWzBdLnBvc2l0aW9uID0ge1xuICAgICAgc3RhcnQ6IHBvaW50KFxuICAgICAgICBsZW5ndGggPyBldmVudHNbMF1bMV0uc3RhcnQgOiB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9XG4gICAgICApLFxuICAgICAgZW5kOiBwb2ludChcbiAgICAgICAgbGVuZ3RoXG4gICAgICAgICAgPyBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDJdWzFdLmVuZFxuICAgICAgICAgIDoge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBzdGFja1swXVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZUxpc3QoZXZlbnRzLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gc3RhcnQgLSAxXG4gICAgdmFyIGNvbnRhaW5lckJhbGFuY2UgPSAtMVxuICAgIHZhciBsaXN0U3ByZWFkID0gZmFsc2VcbiAgICB2YXIgbGlzdEl0ZW1cbiAgICB2YXIgdGFpbEluZGV4XG4gICAgdmFyIGxpbmVJbmRleFxuICAgIHZhciB0YWlsRXZlbnRcbiAgICB2YXIgZXZlbnRcbiAgICB2YXIgZmlyc3RCbGFua0xpbmVJbmRleFxuICAgIHZhciBhdE1hcmtlclxuXG4gICAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgICAgaWYgKFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0VW5vcmRlcmVkIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RPcmRlcmVkIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmJsb2NrUXVvdGVcbiAgICAgICkge1xuICAgICAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICBjb250YWluZXJCYWxhbmNlKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJCYWxhbmNlLS1cbiAgICAgICAgfVxuXG4gICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmdCbGFuaykge1xuICAgICAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsaXN0SXRlbSAmJlxuICAgICAgICAgICAgIWF0TWFya2VyICYmXG4gICAgICAgICAgICAhY29udGFpbmVyQmFsYW5jZSAmJlxuICAgICAgICAgICAgIWZpcnN0QmxhbmtMaW5lSW5kZXhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZpcnN0QmxhbmtMaW5lSW5kZXggPSBpbmRleFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVQcmVmaXggfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1WYWx1ZSB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0SXRlbU1hcmtlciB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0SXRlbVByZWZpeCB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0SXRlbVByZWZpeFdoaXRlc3BhY2VcbiAgICAgICkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFjb250YWluZXJCYWxhbmNlICYmXG4gICAgICAgICAgZXZlbnRbMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0SXRlbVByZWZpeCkgfHxcbiAgICAgICAgKGNvbnRhaW5lckJhbGFuY2UgPT09IC0xICYmXG4gICAgICAgICAgZXZlbnRbMF0gPT09ICdleGl0JyAmJlxuICAgICAgICAgIChldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0VW5vcmRlcmVkIHx8XG4gICAgICAgICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5saXN0T3JkZXJlZCkpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgdGFpbEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBsaW5lSW5kZXggPSB1bmRlZmluZWRcblxuICAgICAgICAgIHdoaWxlICh0YWlsSW5kZXgtLSkge1xuICAgICAgICAgICAgdGFpbEV2ZW50ID0gZXZlbnRzW3RhaWxJbmRleF1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGluZUVuZGluZyB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGluZUVuZGluZ0JsYW5rXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKHRhaWxFdmVudFswXSA9PT0gJ2V4aXQnKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgIGlmIChsaW5lSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gdHlwZXMubGluZUVuZGluZ0JsYW5rXG4gICAgICAgICAgICAgICAgbGlzdFNwcmVhZCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID0gdHlwZXMubGluZUVuZGluZ1xuICAgICAgICAgICAgICBsaW5lSW5kZXggPSB0YWlsSW5kZXhcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSB0eXBlcy5saW5lUHJlZml4IHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSB0eXBlcy5ibG9ja1F1b3RlUHJlZml4IHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSB0eXBlcy5ibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZSB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMuYmxvY2tRdW90ZU1hcmtlciB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1JbmRlbnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBFbXB0eVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ICYmXG4gICAgICAgICAgICAoIWxpbmVJbmRleCB8fCBmaXJzdEJsYW5rTGluZUluZGV4IDwgbGluZUluZGV4KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGlzdEl0ZW0uX3NwcmVhZCA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGaXggcG9zaXRpb24uXG4gICAgICAgICAgbGlzdEl0ZW0uZW5kID0gcG9pbnQoXG4gICAgICAgICAgICBsaW5lSW5kZXggPyBldmVudHNbbGluZUluZGV4XVsxXS5zdGFydCA6IGV2ZW50WzFdLmVuZFxuICAgICAgICAgIClcblxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UobGluZUluZGV4IHx8IGluZGV4LCAwLCBbJ2V4aXQnLCBsaXN0SXRlbSwgZXZlbnRbMl1dKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QgaXRlbS5cbiAgICAgICAgaWYgKGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpc3RJdGVtUHJlZml4KSB7XG4gICAgICAgICAgbGlzdEl0ZW0gPSB7XG4gICAgICAgICAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgICAgICAgICAgX3NwcmVhZDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydDogcG9pbnQoZXZlbnRbMV0uc3RhcnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDAsIFsnZW50ZXInLCBsaXN0SXRlbSwgZXZlbnRbMl1dKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICAgIGZpcnN0QmxhbmtMaW5lSW5kZXggPSB1bmRlZmluZWRcbiAgICAgICAgICBhdE1hcmtlciA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50c1tzdGFydF1bMV0uX3NwcmVhZCA9IGxpc3RTcHJlYWRcbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICBmdW5jdGlvbiBzZXREYXRhKGtleSwgdmFsdWUpIHtcbiAgICBkYXRhW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShrZXkpIHtcbiAgICByZXR1cm4gZGF0YVtrZXldXG4gIH1cblxuICBmdW5jdGlvbiBwb2ludChkKSB7XG4gICAgcmV0dXJuIHtsaW5lOiBkLmxpbmUsIGNvbHVtbjogZC5jb2x1bW4sIG9mZnNldDogZC5vZmZzZXR9XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuZXIoY3JlYXRlLCBhbmQpIHtcbiAgICByZXR1cm4gb3BlblxuXG4gICAgZnVuY3Rpb24gb3Blbih0b2tlbikge1xuICAgICAgZW50ZXIuY2FsbCh0aGlzLCBjcmVhdGUodG9rZW4pLCB0b2tlbilcbiAgICAgIGlmIChhbmQpIGFuZC5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlcigpIHtcbiAgICB0aGlzLnN0YWNrLnB1c2goe3R5cGU6ICdmcmFnbWVudCcsIGNoaWxkcmVuOiBbXX0pXG4gIH1cblxuICBmdW5jdGlvbiBlbnRlcihub2RlLCB0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpXG4gICAgbm9kZS5wb3NpdGlvbiA9IHtzdGFydDogcG9pbnQodG9rZW4uc3RhcnQpfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZXIoYW5kKSB7XG4gICAgcmV0dXJuIGNsb3NlXG5cbiAgICBmdW5jdGlvbiBjbG9zZSh0b2tlbikge1xuICAgICAgaWYgKGFuZCkgYW5kLmNhbGwodGhpcywgdG9rZW4pXG4gICAgICBleGl0LmNhbGwodGhpcywgdG9rZW4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdCh0b2tlbikge1xuICAgIHZhciBub2RlID0gdGhpcy5zdGFjay5wb3AoKVxuICAgIG5vZGUucG9zaXRpb24uZW5kID0gcG9pbnQodG9rZW4uZW5kKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcodGhpcy5zdGFjay5wb3AoKSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZXJzLlxuICAvL1xuXG4gIGZ1bmN0aW9uIG9uZW50ZXJsaXN0b3JkZXJlZCgpIHtcbiAgICBzZXREYXRhKCdleHBlY3RpbmdGaXJzdExpc3RJdGVtVmFsdWUnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcmxpc3RpdGVtdmFsdWUodG9rZW4pIHtcbiAgICBpZiAoZ2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJykpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXS5zdGFydCA9IHBhcnNlSW50KFxuICAgICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKSxcbiAgICAgICAgY29uc3RhbnRzLm51bWVyaWNCYXNlRGVjaW1hbFxuICAgICAgKVxuICAgICAgc2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VpbmZvKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5sYW5nID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZGZlbmNlbWV0YSgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubWV0YSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVmZW5jZWRmZW5jZSgpIHtcbiAgICAvLyBFeGl0IGlmIHRoaXMgaXMgdGhlIGNsb3NpbmcgZmVuY2UuXG4gICAgaWYgKGdldERhdGEoJ2Zsb3dDb2RlSW5zaWRlJykpIHJldHVyblxuICAgIHRoaXMuYnVmZmVyKClcbiAgICBzZXREYXRhKCdmbG93Q29kZUluc2lkZScsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGEucmVwbGFjZShcbiAgICAgIC9eKFxccj9cXG58XFxyKXwoXFxyP1xcbnxcXHIpJC9nLFxuICAgICAgJydcbiAgICApXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWluZGVudGVkKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25sYWJlbHN0cmluZyh0b2tlbikge1xuICAgIC8vIERpc2NhcmQgbGFiZWwsIHVzZSB0aGUgc291cmNlIGNvbnRlbnQgaW5zdGVhZC5cbiAgICB2YXIgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gbGFiZWxcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50aXRsZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25kZXN0aW5hdGlvbnN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0YXR4aGVhZGluZ3NlcXVlbmNlKHRva2VuKSB7XG4gICAgaWYgKCF0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uZGVwdGgpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9IHRoaXMuc2xpY2VTZXJpYWxpemUoXG4gICAgICAgIHRva2VuXG4gICAgICApLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHNldGV4dGhlYWRpbmd0ZXh0KCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSh0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9XG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKS5jaGFyQ29kZUF0KDApID09PSBjb2Rlcy5lcXVhbHNUbyA/IDEgOiAyXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRzZXRleHRoZWFkaW5nKCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcmRhdGEodG9rZW4pIHtcbiAgICB2YXIgc2libGluZ3MgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW5cbiAgICB2YXIgdGFpbCA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAoIXRhaWwgfHwgdGFpbC50eXBlICE9PSAndGV4dCcpIHtcbiAgICAgIC8vIEFkZCBhIG5ldyB0ZXh0IG5vZGUuXG4gICAgICB0YWlsID0gdGV4dCgpXG4gICAgICB0YWlsLnBvc2l0aW9uID0ge3N0YXJ0OiBwb2ludCh0b2tlbi5zdGFydCl9XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaCh0YWlsKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGF0YSh0b2tlbikge1xuICAgIHZhciB0YWlsID0gdGhpcy5zdGFjay5wb3AoKVxuICAgIHRhaWwudmFsdWUgKz0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICB0YWlsLnBvc2l0aW9uLmVuZCA9IHBvaW50KHRva2VuLmVuZClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxpbmVlbmRpbmcodG9rZW4pIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuXG4gICAgLy8gSWYgd2XigJlyZSBhdCBhIGhhcmQgYnJlYWssIGluY2x1ZGUgdGhlIGxpbmUgZW5kaW5nIGluIHRoZXJlLlxuICAgIGlmIChnZXREYXRhKCdhdEhhcmRCcmVhaycpKSB7XG4gICAgICBjb250ZXh0LmNoaWxkcmVuW2NvbnRleHQuY2hpbGRyZW4ubGVuZ3RoIC0gMV0ucG9zaXRpb24uZW5kID0gcG9pbnQoXG4gICAgICAgIHRva2VuLmVuZFxuICAgICAgKVxuICAgICAgc2V0RGF0YSgnYXRIYXJkQnJlYWsnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGdldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5Db250YWluRW9scy5pbmRleE9mKGNvbnRleHQudHlwZSkgIT09IC0xKSB7XG4gICAgICBvbmVudGVyZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgICAgb25leGl0ZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGhhcmRicmVhaygpIHtcbiAgICBzZXREYXRhKCdhdEhhcmRCcmVhaycsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRodG1sZmxvdygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRodG1sdGV4dCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RldGV4dCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRsaW5rKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG5cbiAgICAvLyBUbyBkbzogY2xlYW4uXG4gICAgaWYgKGdldERhdGEoJ2luUmVmZXJlbmNlJykpIHtcbiAgICAgIGNvbnRleHQudHlwZSArPSAnUmVmZXJlbmNlJ1xuICAgICAgY29udGV4dC5yZWZlcmVuY2VUeXBlID0gZ2V0RGF0YSgncmVmZXJlbmNlVHlwZScpIHx8ICdzaG9ydGN1dCdcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnVybFxuICAgICAgZGVsZXRlIGNvbnRleHQudGl0bGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNvbnRleHQuaWRlbnRpZmllclxuICAgICAgZGVsZXRlIGNvbnRleHQubGFiZWxcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnJlZmVyZW5jZVR5cGVcbiAgICB9XG5cbiAgICBzZXREYXRhKCdyZWZlcmVuY2VUeXBlJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGltYWdlKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG5cbiAgICAvLyBUbyBkbzogY2xlYW4uXG4gICAgaWYgKGdldERhdGEoJ2luUmVmZXJlbmNlJykpIHtcbiAgICAgIGNvbnRleHQudHlwZSArPSAnUmVmZXJlbmNlJ1xuICAgICAgY29udGV4dC5yZWZlcmVuY2VUeXBlID0gZ2V0RGF0YSgncmVmZXJlbmNlVHlwZScpIHx8ICdzaG9ydGN1dCdcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnVybFxuICAgICAgZGVsZXRlIGNvbnRleHQudGl0bGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNvbnRleHQuaWRlbnRpZmllclxuICAgICAgZGVsZXRlIGNvbnRleHQubGFiZWxcbiAgICAgIGRlbGV0ZSBjb250ZXh0LnJlZmVyZW5jZVR5cGVcbiAgICB9XG5cbiAgICBzZXREYXRhKCdyZWZlcmVuY2VUeXBlJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxhYmVsdGV4dCh0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICAgKS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRsYWJlbCgpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICB2YXIgdmFsdWUgPSB0aGlzLnJlc3VtZSgpXG5cbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubGFiZWwgPSB2YWx1ZVxuXG4gICAgLy8gQXNzdW1lIGEgcmVmZXJlbmNlLlxuICAgIHNldERhdGEoJ2luUmVmZXJlbmNlJywgdHJ1ZSlcblxuICAgIGlmICh0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4gPSBmcmFnbWVudC5jaGlsZHJlblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uYWx0ID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRyZXNvdXJjZWRlc3RpbmF0aW9uc3RyaW5nKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS51cmwgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRyZXNvdXJjZXRpdGxlc3RyaW5nKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50aXRsZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNlKCkge1xuICAgIHNldERhdGEoJ2luUmVmZXJlbmNlJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW50ZXJyZWZlcmVuY2UoKSB7XG4gICAgc2V0RGF0YSgncmVmZXJlbmNlVHlwZScsICdjb2xsYXBzZWQnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0cmVmZXJlbmNlc3RyaW5nKHRva2VuKSB7XG4gICAgdmFyIGxhYmVsID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5sYWJlbCA9IGxhYmVsXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICApLnRvTG93ZXJDYXNlKClcbiAgICBzZXREYXRhKCdyZWZlcmVuY2VUeXBlJywgJ2Z1bGwnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y2hhcmFjdGVycmVmZXJlbmNlbWFya2VyKHRva2VuKSB7XG4gICAgc2V0RGF0YSgnY2hhcmFjdGVyUmVmZXJlbmNlVHlwZScsIHRva2VuLnR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2V2YWx1ZSh0b2tlbikge1xuICAgIHZhciBkYXRhID0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICB2YXIgdHlwZSA9IGdldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnKVxuICAgIHZhciB2YWx1ZVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHZhbHVlID0gc2FmZUZyb21JbnQoXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHR5cGUgPT09IHR5cGVzLmNoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWNcbiAgICAgICAgICA/IGNvbnN0YW50cy5udW1lcmljQmFzZURlY2ltYWxcbiAgICAgICAgICA6IGNvbnN0YW50cy5udW1lcmljQmFzZUhleGFkZWNpbWFsXG4gICAgICApXG4gICAgICBzZXREYXRhKCdjaGFyYWN0ZXJSZWZlcmVuY2VUeXBlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkZWNvZGUoZGF0YSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgKz0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGF1dG9saW5rcHJvdG9jb2wodG9rZW4pIHtcbiAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9IHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRhdXRvbGlua2VtYWlsKHRva2VuKSB7XG4gICAgb25leGl0ZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS51cmwgPVxuICAgICAgJ21haWx0bzonICsgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgfVxuXG4gIC8vXG4gIC8vIENyZWF0ZXJzLlxuICAvL1xuXG4gIGZ1bmN0aW9uIGJsb2NrUXVvdGUoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnYmxvY2txdW90ZScsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVGbG93KCkge1xuICAgIHJldHVybiB7dHlwZTogJ2NvZGUnLCBsYW5nOiBudWxsLCBtZXRhOiBudWxsLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiBjb2RlVGV4dCgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdpbmxpbmVDb2RlJywgdmFsdWU6ICcnfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2RlZmluaXRpb24nLFxuICAgICAgaWRlbnRpZmllcjogJycsXG4gICAgICBsYWJlbDogbnVsbCxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgdXJsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtcGhhc2lzKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2VtcGhhc2lzJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGluZygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdoZWFkaW5nJywgZGVwdGg6IHVuZGVmaW5lZCwgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFyZEJyZWFrKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2JyZWFrJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnaHRtbCcsIHZhbHVlOiAnJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2ltYWdlJywgdGl0bGU6IG51bGwsIHVybDogJycsIGFsdDogbnVsbH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmsoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6ICcnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0KHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIG9yZGVyZWQ6IHRva2VuLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcsXG4gICAgICBzdGFydDogbnVsbCxcbiAgICAgIHNwcmVhZDogdG9rZW4uX3NwcmVhZCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RJdGVtKHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICBzcHJlYWQ6IHRva2VuLl9zcHJlYWQsXG4gICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyYWdyYXBoKCkge1xuICAgIHJldHVybiB7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cm9uZygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdzdHJvbmcnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgIHJldHVybiB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiB0aGVtYXRpY0JyZWFrKCkge1xuICAgIHJldHVybiB7dHlwZTogJ3RoZW1hdGljQnJlYWsnfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcsIGV4dGVuc2lvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IGV4dGVuc2lvbnMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBleHRlbnNpb24oY29uZmlnLCBleHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjb25maWdcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uKGNvbmZpZywgZXh0ZW5zaW9uKSB7XG4gIHZhciBrZXlcbiAgdmFyIGxlZnRcbiAgdmFyIHJpZ2h0XG5cbiAgZm9yIChrZXkgaW4gZXh0ZW5zaW9uKSB7XG4gICAgbGVmdCA9IG93bi5jYWxsKGNvbmZpZywga2V5KSA/IGNvbmZpZ1trZXldIDogKGNvbmZpZ1trZXldID0ge30pXG4gICAgcmlnaHQgPSBleHRlbnNpb25ba2V5XVxuXG4gICAgaWYgKGtleSA9PT0gJ2NhbkNvbnRhaW5Fb2xzJykge1xuICAgICAgY29uZmlnW2tleV0gPSBbXS5jb25jYXQobGVmdCwgcmlnaHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obGVmdCwgcmlnaHQpXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgZmxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLWZsb3cnKVxudmFyIGluZGVudExpbmVzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmRlbnQtbGluZXMnKVxuXG5mdW5jdGlvbiBibG9ja3F1b3RlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdibG9ja3F1b3RlJylcbiAgdmFyIHZhbHVlID0gaW5kZW50TGluZXMoZmxvdyhub2RlLCBjb250ZXh0KSwgbWFwKVxuICBleGl0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIG1hcChsaW5lLCBpbmRleCwgYmxhbmspIHtcbiAgcmV0dXJuICc+JyArIChibGFuayA/ICcnIDogJyAnKSArIGxpbmVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrXG5cbmZ1bmN0aW9uIGhhcmRCcmVhaygpIHtcbiAgcmV0dXJuICdcXFxcXFxuJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb2RlXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBzdHJlYWsgPSByZXF1aXJlKCdsb25nZXN0LXN0cmVhaycpXG52YXIgZm9ybWF0Q29kZUFzSW5kZW50ZWQgPSByZXF1aXJlKCcuLi91dGlsL2Zvcm1hdC1jb2RlLWFzLWluZGVudGVkJylcbnZhciBjaGVja0ZlbmNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1mZW5jZScpXG52YXIgaW5kZW50TGluZXMgPSByZXF1aXJlKCcuLi91dGlsL2luZGVudC1saW5lcycpXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIGNvZGUobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY2hlY2tGZW5jZShjb250ZXh0KVxuICB2YXIgcmF3ID0gbm9kZS52YWx1ZSB8fCAnJ1xuICB2YXIgc3VmZml4ID0gbWFya2VyID09PSAnYCcgPyAnR3JhdmVBY2NlbnQnIDogJ1RpbGRlJ1xuICB2YXIgdmFsdWVcbiAgdmFyIGZlbmNlXG4gIHZhciBleGl0XG4gIHZhciBzdWJleGl0XG5cbiAgaWYgKGZvcm1hdENvZGVBc0luZGVudGVkKG5vZGUsIGNvbnRleHQpKSB7XG4gICAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2NvZGVJbmRlbnRlZCcpXG4gICAgdmFsdWUgPSBpbmRlbnRMaW5lcyhyYXcsIG1hcClcbiAgfSBlbHNlIHtcbiAgICBmZW5jZSA9IHJlcGVhdChtYXJrZXIsIE1hdGgubWF4KHN0cmVhayhyYXcsIG1hcmtlcikgKyAxLCAzKSlcbiAgICBleGl0ID0gY29udGV4dC5lbnRlcignY29kZUZlbmNlZCcpXG4gICAgdmFsdWUgPSBmZW5jZVxuXG4gICAgaWYgKG5vZGUubGFuZykge1xuICAgICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2NvZGVGZW5jZWRMYW5nJyArIHN1ZmZpeClcbiAgICAgIHZhbHVlICs9IHNhZmUoY29udGV4dCwgbm9kZS5sYW5nLCB7XG4gICAgICAgIGJlZm9yZTogJ2AnLFxuICAgICAgICBhZnRlcjogJyAnLFxuICAgICAgICBlbmNvZGU6IFsnYCddXG4gICAgICB9KVxuICAgICAgc3ViZXhpdCgpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubGFuZyAmJiBub2RlLm1ldGEpIHtcbiAgICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdjb2RlRmVuY2VkTWV0YScgKyBzdWZmaXgpXG4gICAgICB2YWx1ZSArPVxuICAgICAgICAnICcgK1xuICAgICAgICBzYWZlKGNvbnRleHQsIG5vZGUubWV0YSwge1xuICAgICAgICAgIGJlZm9yZTogJyAnLFxuICAgICAgICAgIGFmdGVyOiAnXFxuJyxcbiAgICAgICAgICBlbmNvZGU6IFsnYCddXG4gICAgICAgIH0pXG4gICAgICBzdWJleGl0KClcbiAgICB9XG5cbiAgICB2YWx1ZSArPSAnXFxuJ1xuXG4gICAgaWYgKHJhdykge1xuICAgICAgdmFsdWUgKz0gcmF3ICsgJ1xcbidcbiAgICB9XG5cbiAgICB2YWx1ZSArPSBmZW5jZVxuICB9XG5cbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBtYXAobGluZSwgXywgYmxhbmspIHtcbiAgcmV0dXJuIChibGFuayA/ICcnIDogJyAgICAnKSArIGxpbmVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvblxuXG52YXIgYXNzb2NpYXRpb24gPSByZXF1aXJlKCcuLi91dGlsL2Fzc29jaWF0aW9uJylcbnZhciBjaGVja1F1b3RlID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1xdW90ZScpXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIGRlZmluaXRpb24obm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgcXVvdGUgPSBjaGVja1F1b3RlKGNvbnRleHQpXG4gIHZhciBzdWZmaXggPSBxdW90ZSA9PT0gJ1wiJyA/ICdRdW90ZScgOiAnQXBvc3Ryb3BoZSdcbiAgdmFyIHVybCA9IG5vZGUudXJsIHx8ICcnXG4gIHZhciB0aXRsZSA9IG5vZGUudGl0bGUgfHwgJydcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdkZWZpbml0aW9uJylcbiAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdsYWJlbCcpXG4gIHZhciB2YWx1ZSA9XG4gICAgJ1snICsgc2FmZShjb250ZXh0LCBhc3NvY2lhdGlvbihub2RlKSwge2JlZm9yZTogJ1snLCBhZnRlcjogJ10nfSkgKyAnXTogJ1xuXG4gIHN1YmV4aXQoKVxuXG4gIGlmIChcbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gdXJsLCBvcuKAplxuICAgICF1cmwgfHxcbiAgICAvLyBJZiB0aGVyZeKAmXMgd2hpdGVzcGFjZSwgZW5jbG9zZWQgaXMgcHJldHRpZXIuXG4gICAgL1sgXFx0XFxyXFxuXS8udGVzdCh1cmwpXG4gICkge1xuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdkZXN0aW5hdGlvbkxpdGVyYWwnKVxuICAgIHZhbHVlICs9ICc8JyArIHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnPCcsIGFmdGVyOiAnPid9KSArICc+J1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIHdoaXRlc3BhY2UsIHJhdyBpcyBwcmV0dGllci5cbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignZGVzdGluYXRpb25SYXcnKVxuICAgIHZhbHVlICs9IHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnICcsIGFmdGVyOiAnICd9KVxuICB9XG5cbiAgc3ViZXhpdCgpXG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3RpdGxlJyArIHN1ZmZpeClcbiAgICB2YWx1ZSArPVxuICAgICAgJyAnICsgcXVvdGUgKyBzYWZlKGNvbnRleHQsIHRpdGxlLCB7YmVmb3JlOiBxdW90ZSwgYWZ0ZXI6IHF1b3RlfSkgKyBxdW90ZVxuICAgIHN1YmV4aXQoKVxuICB9XG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5lbXBoYXNpcy5wZWVrID0gZW1waGFzaXNQZWVrXG5cbnZhciBjaGVja0VtcGhhc2lzID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1lbXBoYXNpcycpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG5cbi8vIFRvIGRvOiB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgZW1waGFzaXMgY2Fubm90IOKAnGZvcm3igJ0gZGVwZW5kaW5nIG9uIHRoZVxuLy8gcHJldmlvdXMgb3IgbmV4dCBjaGFyYWN0ZXIgb2Ygc2VxdWVuY2VzLlxuLy8gVGhlcmXigJlzIG5vIHdheSBhcm91bmQgdGhhdCB0aG91Z2gsIGV4Y2VwdCBmb3IgaW5qZWN0aW5nIHplcm8td2lkdGggc3R1ZmYuXG4vLyBEbyB3ZSBuZWVkIHRvIHNhZmVndWFyZCBhZ2FpbnN0IHRoYXQ/XG5mdW5jdGlvbiBlbXBoYXNpcyhub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciBtYXJrZXIgPSBjaGVja0VtcGhhc2lzKGNvbnRleHQpXG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignZW1waGFzaXMnKVxuICB2YXIgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiBtYXJrZXIsIGFmdGVyOiBtYXJrZXJ9KVxuICBleGl0KClcbiAgcmV0dXJuIG1hcmtlciArIHZhbHVlICsgbWFya2VyXG59XG5cbmZ1bmN0aW9uIGVtcGhhc2lzUGVlayhub2RlLCBfLCBjb250ZXh0KSB7XG4gIHJldHVybiBjb250ZXh0Lm9wdGlvbnMuZW1waGFzaXMgfHwgJyonXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhlYWRpbmdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGZvcm1hdEhlYWRpbmdBc1NldGV4dCA9IHJlcXVpcmUoJy4uL3V0aWwvZm9ybWF0LWhlYWRpbmctYXMtc2V0ZXh0JylcbnZhciBwaHJhc2luZyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLXBocmFzaW5nJylcblxuZnVuY3Rpb24gaGVhZGluZyhub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciByYW5rID0gTWF0aC5tYXgoTWF0aC5taW4oNiwgbm9kZS5kZXB0aCB8fCAxKSwgMSlcbiAgdmFyIHZhbHVlXG4gIHZhciBleGl0XG4gIHZhciBzdWJleGl0XG4gIHZhciBzZXF1ZW5jZVxuXG4gIGlmIChmb3JtYXRIZWFkaW5nQXNTZXRleHQobm9kZSwgY29udGV4dCkpIHtcbiAgICBleGl0ID0gY29udGV4dC5lbnRlcignaGVhZGluZ1NldGV4dCcpXG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3BocmFzaW5nJylcbiAgICB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICdcXG4nLCBhZnRlcjogJ1xcbid9KVxuICAgIHN1YmV4aXQoKVxuICAgIGV4aXQoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHZhbHVlICtcbiAgICAgICdcXG4nICtcbiAgICAgIHJlcGVhdChcbiAgICAgICAgcmFuayA9PT0gMSA/ICc9JyA6ICctJyxcbiAgICAgICAgLy8gVGhlIHdob2xlIHNpemXigKZcbiAgICAgICAgdmFsdWUubGVuZ3RoIC1cbiAgICAgICAgICAvLyBNaW51cyB0aGUgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3RlciBhZnRlciB0aGUgbGFzdCBFT0wgKG9yXG4gICAgICAgICAgLy8gMCBpZiB0aGVyZSBpcyBub25lKeKAplxuICAgICAgICAgIChNYXRoLm1heCh2YWx1ZS5sYXN0SW5kZXhPZignXFxyJyksIHZhbHVlLmxhc3RJbmRleE9mKCdcXG4nKSkgKyAxKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHNlcXVlbmNlID0gcmVwZWF0KCcjJywgcmFuaylcbiAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2hlYWRpbmdBdHgnKVxuICBzdWJleGl0ID0gY29udGV4dC5lbnRlcigncGhyYXNpbmcnKVxuICB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICcjICcsIGFmdGVyOiAnXFxuJ30pXG4gIHZhbHVlID0gdmFsdWUgPyBzZXF1ZW5jZSArICcgJyArIHZhbHVlIDogc2VxdWVuY2VcbiAgaWYgKGNvbnRleHQub3B0aW9ucy5jbG9zZUF0eCkge1xuICAgIHZhbHVlICs9ICcgJyArIHNlcXVlbmNlXG4gIH1cblxuICBzdWJleGl0KClcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGh0bWxcblxuZnVuY3Rpb24gaHRtbChub2RlKSB7XG4gIHJldHVybiBub2RlLnZhbHVlIHx8ICcnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGltYWdlUmVmZXJlbmNlXG5pbWFnZVJlZmVyZW5jZS5wZWVrID0gaW1hZ2VSZWZlcmVuY2VQZWVrXG5cbnZhciBhc3NvY2lhdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWwvYXNzb2NpYXRpb24nKVxudmFyIHNhZmUgPSByZXF1aXJlKCcuLi91dGlsL3NhZmUnKVxuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZShub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciB0eXBlID0gbm9kZS5yZWZlcmVuY2VUeXBlXG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcignaW1hZ2VSZWZlcmVuY2UnKVxuICB2YXIgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xhYmVsJylcbiAgdmFyIGFsdCA9IHNhZmUoY29udGV4dCwgbm9kZS5hbHQsIHtiZWZvcmU6ICdbJywgYWZ0ZXI6ICddJ30pXG4gIHZhciByZWZlcmVuY2VcbiAgdmFyIGN1cnJlbnRTdGFja1xuXG4gIHN1YmV4aXQoKVxuICAvLyBIaWRlIHRoZSBmYWN0IHRoYXQgd2XigJlyZSBpbiBwaHJhc2luZywgYmVjYXVzZSBlc2NhcGVzIGRvbuKAmXQgd29yay5cbiAgY3VycmVudFN0YWNrID0gY29udGV4dC5zdGFja1xuICBjb250ZXh0LnN0YWNrID0gW11cbiAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3JlZmVyZW5jZScpXG4gIHJlZmVyZW5jZSA9IHNhZmUoY29udGV4dCwgYXNzb2NpYXRpb24obm9kZSksIHtiZWZvcmU6ICdbJywgYWZ0ZXI6ICddJ30pXG4gIHN1YmV4aXQoKVxuICBjb250ZXh0LnN0YWNrID0gY3VycmVudFN0YWNrXG4gIGV4aXQoKVxuXG4gIGlmICh0eXBlICE9PSAnZnVsbCcgJiYgYWx0ICYmIGFsdCA9PT0gcmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICchWycgKyBhbHQgKyAnXScgKyAodHlwZSA9PT0gJ3Nob3J0Y3V0JyA/ICcnIDogJ1tdJylcbiAgfVxuXG4gIHJldHVybiAnIVsnICsgYWx0ICsgJ11bJyArIHJlZmVyZW5jZSArICddJ1xufVxuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZVBlZWsoKSB7XG4gIHJldHVybiAnISdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW1hZ2VcbmltYWdlLnBlZWsgPSBpbWFnZVBlZWtcblxudmFyIGNoZWNrUXVvdGUgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLXF1b3RlJylcbnZhciBzYWZlID0gcmVxdWlyZSgnLi4vdXRpbC9zYWZlJylcblxuZnVuY3Rpb24gaW1hZ2Uobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgcXVvdGUgPSBjaGVja1F1b3RlKGNvbnRleHQpXG4gIHZhciBzdWZmaXggPSBxdW90ZSA9PT0gJ1wiJyA/ICdRdW90ZScgOiAnQXBvc3Ryb3BoZSdcbiAgdmFyIHVybCA9IG5vZGUudXJsIHx8ICcnXG4gIHZhciB0aXRsZSA9IG5vZGUudGl0bGUgfHwgJydcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdpbWFnZScpXG4gIHZhciBzdWJleGl0ID0gY29udGV4dC5lbnRlcignbGFiZWwnKVxuICB2YXIgdmFsdWUgPSAnIVsnICsgc2FmZShjb250ZXh0LCBub2RlLmFsdCwge2JlZm9yZTogJ1snLCBhZnRlcjogJ10nfSkgKyAnXSgnXG5cbiAgc3ViZXhpdCgpXG5cbiAgaWYgKFxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB1cmwgYnV0IHRoZXJlIGlzIGEgdGl0bGXigKZcbiAgICAoIXVybCAmJiB0aXRsZSkgfHxcbiAgICAvLyBPciBpZiB0aGVyZeKAmXMgbWFya2Rvd24gd2hpdGVzcGFjZSBvciBhbiBlb2wsIGVuY2xvc2UuXG4gICAgL1sgXFx0XFxyXFxuXS8udGVzdCh1cmwpXG4gICkge1xuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdkZXN0aW5hdGlvbkxpdGVyYWwnKVxuICAgIHZhbHVlICs9ICc8JyArIHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnPCcsIGFmdGVyOiAnPid9KSArICc+J1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIHdoaXRlc3BhY2UsIHJhdyBpcyBwcmV0dGllci5cbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignZGVzdGluYXRpb25SYXcnKVxuICAgIHZhbHVlICs9IHNhZmUoY29udGV4dCwgdXJsLCB7YmVmb3JlOiAnKCcsIGFmdGVyOiB0aXRsZSA/ICcgJyA6ICcpJ30pXG4gIH1cblxuICBzdWJleGl0KClcblxuICBpZiAodGl0bGUpIHtcbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcigndGl0bGUnICsgc3VmZml4KVxuICAgIHZhbHVlICs9XG4gICAgICAnICcgKyBxdW90ZSArIHNhZmUoY29udGV4dCwgdGl0bGUsIHtiZWZvcmU6IHF1b3RlLCBhZnRlcjogcXVvdGV9KSArIHF1b3RlXG4gICAgc3ViZXhpdCgpXG4gIH1cblxuICB2YWx1ZSArPSAnKSdcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGltYWdlUGVlaygpIHtcbiAgcmV0dXJuICchJ1xufVxuIiwiZXhwb3J0cy5ibG9ja3F1b3RlID0gcmVxdWlyZSgnLi9ibG9ja3F1b3RlJylcbmV4cG9ydHMuYnJlYWsgPSByZXF1aXJlKCcuL2JyZWFrJylcbmV4cG9ydHMuY29kZSA9IHJlcXVpcmUoJy4vY29kZScpXG5leHBvcnRzLmRlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKVxuZXhwb3J0cy5lbXBoYXNpcyA9IHJlcXVpcmUoJy4vZW1waGFzaXMnKVxuZXhwb3J0cy5oYXJkQnJlYWsgPSByZXF1aXJlKCcuL2JyZWFrJylcbmV4cG9ydHMuaGVhZGluZyA9IHJlcXVpcmUoJy4vaGVhZGluZycpXG5leHBvcnRzLmh0bWwgPSByZXF1aXJlKCcuL2h0bWwnKVxuZXhwb3J0cy5pbWFnZSA9IHJlcXVpcmUoJy4vaW1hZ2UnKVxuZXhwb3J0cy5pbWFnZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vaW1hZ2UtcmVmZXJlbmNlJylcbmV4cG9ydHMuaW5saW5lQ29kZSA9IHJlcXVpcmUoJy4vaW5saW5lLWNvZGUnKVxuZXhwb3J0cy5saW5rID0gcmVxdWlyZSgnLi9saW5rJylcbmV4cG9ydHMubGlua1JlZmVyZW5jZSA9IHJlcXVpcmUoJy4vbGluay1yZWZlcmVuY2UnKVxuZXhwb3J0cy5saXN0ID0gcmVxdWlyZSgnLi9saXN0JylcbmV4cG9ydHMubGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3QtaXRlbScpXG5leHBvcnRzLnBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoJylcbmV4cG9ydHMucm9vdCA9IHJlcXVpcmUoJy4vcm9vdCcpXG5leHBvcnRzLnN0cm9uZyA9IHJlcXVpcmUoJy4vc3Ryb25nJylcbmV4cG9ydHMudGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpXG5leHBvcnRzLnRoZW1hdGljQnJlYWsgPSByZXF1aXJlKCcuL3RoZW1hdGljLWJyZWFrJylcbiIsIm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuaW5saW5lQ29kZS5wZWVrID0gaW5saW5lQ29kZVBlZWtcblxuZnVuY3Rpb24gaW5saW5lQ29kZShub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcbiAgdmFyIHNlcXVlbmNlID0gJ2AnXG4gIHZhciBwYWQgPSAnJ1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgc2luZ2xlIGdyYXZlIGFjY2VudCBvbiBpdHMgb3duIGluIHRoZSBjb2RlLCB1c2UgYSBmZW5jZSBvZlxuICAvLyB0d28uXG4gIC8vIElmIHRoZXJlIGFyZSB0d28gaW4gYSByb3csIHVzZSBvbmUuXG4gIHdoaWxlIChuZXcgUmVnRXhwKCcoXnxbXmBdKScgKyBzZXF1ZW5jZSArICcoW15gXXwkKScpLnRlc3QodmFsdWUpKSB7XG4gICAgc2VxdWVuY2UgKz0gJ2AnXG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIG5vdCBqdXN0IHNwYWNlcyBvciBlb2xzICh0YWJzIGRvbuKAmXQgY291bnQpLCBhbmQgZWl0aGVyIHRoZVxuICAvLyBmaXJzdCBvciBsYXN0IGNoYXJhY3RlciBhcmUgYSBzcGFjZSwgZW9sLCBvciB0aWNrLCB0aGVuIHBhZCB3aXRoIHNwYWNlcy5cbiAgaWYgKFxuICAgIC9bXiBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJlxuICAgICgvWyBcXHJcXG5gXS8udGVzdCh2YWx1ZS5jaGFyQXQoMCkpIHx8XG4gICAgICAvWyBcXHJcXG5gXS8udGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkpKVxuICApIHtcbiAgICBwYWQgPSAnICdcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZSArIHBhZCArIHZhbHVlICsgcGFkICsgc2VxdWVuY2Vcbn1cblxuZnVuY3Rpb24gaW5saW5lQ29kZVBlZWsoKSB7XG4gIHJldHVybiAnYCdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGlua1JlZmVyZW5jZVxubGlua1JlZmVyZW5jZS5wZWVrID0gbGlua1JlZmVyZW5jZVBlZWtcblxudmFyIGFzc29jaWF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9hc3NvY2lhdGlvbicpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIGxpbmtSZWZlcmVuY2Uobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgdHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuICB2YXIgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xpbmtSZWZlcmVuY2UnKVxuICB2YXIgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xhYmVsJylcbiAgdmFyIHRleHQgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiAnWycsIGFmdGVyOiAnXSd9KVxuICB2YXIgcmVmZXJlbmNlXG4gIHZhciBjdXJyZW50U3RhY2tcblxuICBzdWJleGl0KClcbiAgLy8gSGlkZSB0aGUgZmFjdCB0aGF0IHdl4oCZcmUgaW4gcGhyYXNpbmcsIGJlY2F1c2UgZXNjYXBlcyBkb27igJl0IHdvcmsuXG4gIGN1cnJlbnRTdGFjayA9IGNvbnRleHQuc3RhY2tcbiAgY29udGV4dC5zdGFjayA9IFtdXG4gIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdyZWZlcmVuY2UnKVxuICByZWZlcmVuY2UgPSBzYWZlKGNvbnRleHQsIGFzc29jaWF0aW9uKG5vZGUpLCB7YmVmb3JlOiAnWycsIGFmdGVyOiAnXSd9KVxuICBzdWJleGl0KClcbiAgY29udGV4dC5zdGFjayA9IGN1cnJlbnRTdGFja1xuICBleGl0KClcblxuICBpZiAodHlwZSAhPT0gJ2Z1bGwnICYmIHRleHQgJiYgdGV4dCA9PT0gcmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICdbJyArIHRleHQgKyAnXScgKyAodHlwZSA9PT0gJ3Nob3J0Y3V0JyA/ICcnIDogJ1tdJylcbiAgfVxuXG4gIHJldHVybiAnWycgKyB0ZXh0ICsgJ11bJyArIHJlZmVyZW5jZSArICddJ1xufVxuXG5mdW5jdGlvbiBsaW5rUmVmZXJlbmNlUGVlaygpIHtcbiAgcmV0dXJuICdbJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5saW5rLnBlZWsgPSBsaW5rUGVla1xuXG52YXIgY2hlY2tRdW90ZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stcXVvdGUnKVxudmFyIGZvcm1hdExpbmtBc0F1dG9saW5rID0gcmVxdWlyZSgnLi4vdXRpbC9mb3JtYXQtbGluay1hcy1hdXRvbGluaycpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIGxpbmsobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgcXVvdGUgPSBjaGVja1F1b3RlKGNvbnRleHQpXG4gIHZhciBzdWZmaXggPSBxdW90ZSA9PT0gJ1wiJyA/ICdRdW90ZScgOiAnQXBvc3Ryb3BoZSdcbiAgdmFyIHVybCA9IG5vZGUudXJsIHx8ICcnXG4gIHZhciB0aXRsZSA9IG5vZGUudGl0bGUgfHwgJydcbiAgdmFyIGV4aXRcbiAgdmFyIHZhbHVlXG4gIHZhciBzdWJleGl0XG4gIHZhciBjdXJyZW50U3RhY2tcblxuICBpZiAoZm9ybWF0TGlua0FzQXV0b2xpbmsobm9kZSkpIHtcbiAgICAvLyBIaWRlIHRoZSBmYWN0IHRoYXQgd2XigJlyZSBpbiBwaHJhc2luZywgYmVjYXVzZSBlc2NhcGVzIGRvbuKAmXQgd29yay5cbiAgICBjdXJyZW50U3RhY2sgPSBjb250ZXh0LnN0YWNrXG4gICAgY29udGV4dC5zdGFjayA9IFtdXG4gICAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2F1dG9saW5rJylcbiAgICB2YWx1ZSA9ICc8JyArIHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICc8JywgYWZ0ZXI6ICc+J30pICsgJz4nXG4gICAgZXhpdCgpXG4gICAgY29udGV4dC5zdGFjayA9IGN1cnJlbnRTdGFja1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xpbmsnKVxuICBzdWJleGl0ID0gY29udGV4dC5lbnRlcignbGFiZWwnKVxuICB2YWx1ZSA9ICdbJyArIHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICdbJywgYWZ0ZXI6ICddJ30pICsgJ10oJ1xuICBzdWJleGl0KClcblxuICBpZiAoXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIHVybCBidXQgdGhlcmUgaXMgYSB0aXRsZeKAplxuICAgICghdXJsICYmIHRpdGxlKSB8fFxuICAgIC8vIE9yIGlmIHRoZXJl4oCZcyBtYXJrZG93biB3aGl0ZXNwYWNlIG9yIGFuIGVvbCwgZW5jbG9zZS5cbiAgICAvWyBcXHRcXHJcXG5dLy50ZXN0KHVybClcbiAgKSB7XG4gICAgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2Rlc3RpbmF0aW9uTGl0ZXJhbCcpXG4gICAgdmFsdWUgKz0gJzwnICsgc2FmZShjb250ZXh0LCB1cmwsIHtiZWZvcmU6ICc8JywgYWZ0ZXI6ICc+J30pICsgJz4nXG4gIH0gZWxzZSB7XG4gICAgLy8gTm8gd2hpdGVzcGFjZSwgcmF3IGlzIHByZXR0aWVyLlxuICAgIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdkZXN0aW5hdGlvblJhdycpXG4gICAgdmFsdWUgKz0gc2FmZShjb250ZXh0LCB1cmwsIHtiZWZvcmU6ICcgJywgYWZ0ZXI6ICcgJ30pXG4gIH1cblxuICBzdWJleGl0KClcblxuICBpZiAodGl0bGUpIHtcbiAgICBzdWJleGl0ID0gY29udGV4dC5lbnRlcigndGl0bGUnICsgc3VmZml4KVxuICAgIHZhbHVlICs9XG4gICAgICAnICcgKyBxdW90ZSArIHNhZmUoY29udGV4dCwgdGl0bGUsIHtiZWZvcmU6IHF1b3RlLCBhZnRlcjogcXVvdGV9KSArIHF1b3RlXG4gICAgc3ViZXhpdCgpXG4gIH1cblxuICB2YWx1ZSArPSAnKSdcblxuICBleGl0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGxpbmtQZWVrKG5vZGUpIHtcbiAgcmV0dXJuIGZvcm1hdExpbmtBc0F1dG9saW5rKG5vZGUpID8gJzwnIDogJ1snXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBjaGVja0J1bGxldCA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stYnVsbGV0JylcbnZhciBjaGVja0xpc3RJdGVtSW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1saXN0LWl0ZW0taW5kZW50JylcbnZhciBmbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItZmxvdycpXG52YXIgaW5kZW50TGluZXMgPSByZXF1aXJlKCcuLi91dGlsL2luZGVudC1saW5lcycpXG5cbmZ1bmN0aW9uIGxpc3RJdGVtKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgYnVsbGV0ID0gY2hlY2tCdWxsZXQoY29udGV4dClcbiAgdmFyIGxpc3RJdGVtSW5kZW50ID0gY2hlY2tMaXN0SXRlbUluZGVudChjb250ZXh0KVxuICB2YXIgaW5kZW50U2l6ZVxuICB2YXIgZXhpdFxuICB2YXIgdmFsdWVcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5vcmRlcmVkKSB7XG4gICAgYnVsbGV0ID1cbiAgICAgIChwYXJlbnQuc3RhcnQgPiAtMSA/IHBhcmVudC5zdGFydCA6IDEpICtcbiAgICAgIChjb250ZXh0Lm9wdGlvbnMuaW5jcmVtZW50TGlzdE1hcmtlciA9PT0gZmFsc2VcbiAgICAgICAgPyAwXG4gICAgICAgIDogcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkpICtcbiAgICAgICcuJ1xuICB9XG5cbiAgaW5kZW50U2l6ZSA9IGJ1bGxldC5sZW5ndGggKyAxXG5cbiAgaWYgKFxuICAgIGxpc3RJdGVtSW5kZW50ID09PSAndGFiJyB8fFxuICAgIChsaXN0SXRlbUluZGVudCA9PT0gJ21peGVkJyAmJiAoKHBhcmVudCAmJiBwYXJlbnQuc3ByZWFkKSB8fCBub2RlLnNwcmVhZCkpXG4gICkge1xuICAgIGluZGVudFNpemUgPSBNYXRoLmNlaWwoaW5kZW50U2l6ZSAvIDQpICogNFxuICB9XG5cbiAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xpc3RJdGVtJylcbiAgdmFsdWUgPSBpbmRlbnRMaW5lcyhmbG93KG5vZGUsIGNvbnRleHQpLCBtYXApXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxuXG4gIGZ1bmN0aW9uIG1hcChsaW5lLCBpbmRleCwgYmxhbmspIHtcbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiAoYmxhbmsgPyAnJyA6IHJlcGVhdCgnICcsIGluZGVudFNpemUpKSArIGxpbmVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKGJsYW5rID8gYnVsbGV0IDogYnVsbGV0ICsgcmVwZWF0KCcgJywgaW5kZW50U2l6ZSAtIGJ1bGxldC5sZW5ndGgpKSArIGxpbmVcbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG52YXIgZmxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLWZsb3cnKVxuXG5mdW5jdGlvbiBsaXN0KG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdsaXN0JylcbiAgdmFyIHZhbHVlID0gZmxvdyhub2RlLCBjb250ZXh0KVxuICBleGl0KClcbiAgcmV0dXJuIHZhbHVlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHBhcmFncmFwaFxuXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChub2RlLCBfLCBjb250ZXh0KSB7XG4gIHZhciBleGl0ID0gY29udGV4dC5lbnRlcigncGFyYWdyYXBoJylcbiAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdwaHJhc2luZycpXG4gIHZhciB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICdcXG4nLCBhZnRlcjogJ1xcbid9KVxuICBzdWJleGl0KClcbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByb290XG5cbnZhciBmbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItZmxvdycpXG5cbmZ1bmN0aW9uIHJvb3Qobm9kZSwgXywgY29udGV4dCkge1xuICByZXR1cm4gZmxvdyhub2RlLCBjb250ZXh0KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcbnN0cm9uZy5wZWVrID0gc3Ryb25nUGVla1xuXG52YXIgY2hlY2tTdHJvbmcgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLXN0cm9uZycpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG5cbi8vIFRvIGRvOiB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgZW1waGFzaXMgY2Fubm90IOKAnGZvcm3igJ0gZGVwZW5kaW5nIG9uIHRoZVxuLy8gcHJldmlvdXMgb3IgbmV4dCBjaGFyYWN0ZXIgb2Ygc2VxdWVuY2VzLlxuLy8gVGhlcmXigJlzIG5vIHdheSBhcm91bmQgdGhhdCB0aG91Z2gsIGV4Y2VwdCBmb3IgaW5qZWN0aW5nIHplcm8td2lkdGggc3R1ZmYuXG4vLyBEbyB3ZSBuZWVkIHRvIHNhZmVndWFyZCBhZ2FpbnN0IHRoYXQ/XG5mdW5jdGlvbiBzdHJvbmcobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY2hlY2tTdHJvbmcoY29udGV4dClcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdzdHJvbmcnKVxuICB2YXIgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiBtYXJrZXIsIGFmdGVyOiBtYXJrZXJ9KVxuICBleGl0KClcbiAgcmV0dXJuIG1hcmtlciArIG1hcmtlciArIHZhbHVlICsgbWFya2VyICsgbWFya2VyXG59XG5cbmZ1bmN0aW9uIHN0cm9uZ1BlZWsobm9kZSwgXywgY29udGV4dCkge1xuICByZXR1cm4gY29udGV4dC5vcHRpb25zLnN0cm9uZyB8fCAnKidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdGV4dFxuXG52YXIgc2FmZSA9IHJlcXVpcmUoJy4uL3V0aWwvc2FmZScpXG5cbmZ1bmN0aW9uIHRleHQobm9kZSwgcGFyZW50LCBjb250ZXh0LCBzYWZlT3B0aW9ucykge1xuICByZXR1cm4gc2FmZShjb250ZXh0LCBub2RlLnZhbHVlLCBzYWZlT3B0aW9ucylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgY2hlY2tSZXBlYXQgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLXJ1bGUtcmVwZWF0JylcbnZhciBjaGVja1J1bGUgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLXJ1bGUnKVxuXG5mdW5jdGlvbiB0aGVtYXRpY0JyZWFrKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgcnVsZSA9IGNoZWNrUnVsZShjb250ZXh0KVxuICB2YXIgcmVwZXRpdGlvbiA9IGNoZWNrUmVwZWF0KGNvbnRleHQpXG4gIHZhciBzcGFjZXMgPSBjb250ZXh0Lm9wdGlvbnMucnVsZVNwYWNlc1xuICB2YXIgdmFsdWUgPSByZXBlYXQocnVsZSArIChzcGFjZXMgPyAnICcgOiAnJyksIHJlcGV0aXRpb24pXG4gIHJldHVybiBzcGFjZXMgPyB2YWx1ZS5zbGljZSgwLCAtMSkgOiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0b01hcmtkb3duXG5cbnZhciB6d2l0Y2ggPSByZXF1aXJlKCd6d2l0Y2gnKVxudmFyIGRlZmF1bHRIYW5kbGVycyA9IHJlcXVpcmUoJy4vaGFuZGxlJylcbnZhciBkZWZhdWx0VW5zYWZlUGF0dGVybnMgPSByZXF1aXJlKCcuL3Vuc2FmZScpXG52YXIgZGVmYXVsdEpvaW4gPSByZXF1aXJlKCcuL2pvaW4nKVxuXG5mdW5jdGlvbiB0b01hcmtkb3duKHRyZWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgZXh0ZW5zaW9ucyA9IGNvbmZpZ3VyZShzZXR0aW5ncylcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGhhbmRsZSA9IHp3aXRjaCgndHlwZScsIHtcbiAgICBpbnZhbGlkOiBpbnZhbGlkLFxuICAgIHVua25vd246IHVua25vd24sXG4gICAgaGFuZGxlcnM6IGV4dGVuc2lvbnMuaGFuZGxlcnNcbiAgfSlcbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgc3RhY2s6IHN0YWNrLFxuICAgIGVudGVyOiBlbnRlcixcbiAgICBvcHRpb25zOiBzZXR0aW5ncyxcbiAgICB1bnNhZmVQYXR0ZXJuczogZXh0ZW5zaW9ucy51bnNhZmUsXG4gICAgam9pbjogZXh0ZW5zaW9ucy5qb2luXG4gIH1cbiAgdmFyIHJlc3VsdCA9IGhhbmRsZSh0cmVlLCBudWxsLCBjb250ZXh0LCB7YmVmb3JlOiAnXFxuJywgYWZ0ZXI6ICdcXG4nfSlcblxuICBpZiAoXG4gICAgcmVzdWx0ICYmXG4gICAgcmVzdWx0LmNoYXJDb2RlQXQocmVzdWx0Lmxlbmd0aCAtIDEpICE9PSAxMCAmJlxuICAgIHJlc3VsdC5jaGFyQ29kZUF0KHJlc3VsdC5sZW5ndGggLSAxKSAhPT0gMTNcbiAgKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG5cbiAgZnVuY3Rpb24gZW50ZXIobmFtZSkge1xuICAgIHN0YWNrLnB1c2gobmFtZSlcbiAgICByZXR1cm4gZXhpdFxuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGludmFsaWQodmFsdWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGFuZGxlIHZhbHVlIGAnICsgdmFsdWUgKyAnYCwgZXhwZWN0ZWQgbm9kZScpXG59XG5cbmZ1bmN0aW9uIHVua25vd24obm9kZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoYW5kbGUgdW5rbm93biBub2RlIGAnICsgbm9kZS50eXBlICsgJ2AnKVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmUoc2V0dGluZ3MpIHtcbiAgdmFyIHVuc2FmZSA9IGRlZmF1bHRVbnNhZmVQYXR0ZXJuc1xuICB2YXIgam9pbiA9IGRlZmF1bHRKb2luXG4gIHZhciBoYW5kbGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRIYW5kbGVycylcbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAge3Vuc2FmZTogc2V0dGluZ3MudW5zYWZlLCBoYW5kbGVyczogc2V0dGluZ3MuaGFuZGxlcnMsIGpvaW46IHNldHRpbmdzLmpvaW59XG4gIF0uY29uY2F0KHNldHRpbmdzLmV4dGVuc2lvbnMgfHwgW10pXG4gIHZhciBsZW5ndGggPSBleHRlbnNpb25zLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgZXh0ZW5zaW9uXG5cbiAgaWYgKHNldHRpbmdzLnRpZ2h0RGVmaW5pdGlvbnMpIHtcbiAgICBqb2luID0gW2pvaW5EZWZpbml0aW9uXS5jb25jYXQoam9pbilcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpbmRleF1cbiAgICB1bnNhZmUgPSB1bnNhZmUuY29uY2F0KGV4dGVuc2lvbi51bnNhZmUgfHwgW10pXG4gICAgam9pbiA9IGpvaW4uY29uY2F0KGV4dGVuc2lvbi5qb2luIHx8IFtdKVxuICAgIE9iamVjdC5hc3NpZ24oaGFuZGxlcnMsIGV4dGVuc2lvbi5oYW5kbGVycyB8fCB7fSlcbiAgfVxuXG4gIHJldHVybiB7dW5zYWZlOiB1bnNhZmUsIGpvaW46IGpvaW4sIGhhbmRsZXJzOiBoYW5kbGVyc31cbn1cblxuZnVuY3Rpb24gam9pbkRlZmluaXRpb24obGVmdCwgcmlnaHQpIHtcbiAgLy8gTm8gYmxhbmsgbGluZSBiZXR3ZWVuIGFkamFjZW50IGRlZmluaXRpb25zLlxuICBpZiAobGVmdC50eXBlID09PSAnZGVmaW5pdGlvbicgJiYgbGVmdC50eXBlID09PSByaWdodC50eXBlKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbam9pbkRlZmF1bHRzXVxuXG52YXIgZm9ybWF0Q29kZUFzSW5kZW50ZWQgPSByZXF1aXJlKCcuL3V0aWwvZm9ybWF0LWNvZGUtYXMtaW5kZW50ZWQnKVxudmFyIGZvcm1hdEhlYWRpbmdBc1NldGV4dCA9IHJlcXVpcmUoJy4vdXRpbC9mb3JtYXQtaGVhZGluZy1hcy1zZXRleHQnKVxuXG5mdW5jdGlvbiBqb2luRGVmYXVsdHMobGVmdCwgcmlnaHQsIHBhcmVudCwgY29udGV4dCkge1xuICBpZiAoXG4gICAgLy8gVHdvIGxpc3RzIHdpdGggdGhlIHNhbWUgbWFya2VyLlxuICAgIChsZWZ0LnR5cGUgPT09ICdsaXN0JyAmJlxuICAgICAgcmlnaHQudHlwZSA9PT0gbGVmdC50eXBlICYmXG4gICAgICBCb29sZWFuKGxlZnQub3JkZXJlZCkgPT09IEJvb2xlYW4ocmlnaHQub3JkZXJlZCkpIHx8XG4gICAgLy8gSW5kZW50ZWQgY29kZSBhZnRlciBsaXN0IG9yIGFub3RoZXIgaW5kZW50ZWQgY29kZS5cbiAgICAocmlnaHQudHlwZSA9PT0gJ2NvZGUnICYmXG4gICAgICBmb3JtYXRDb2RlQXNJbmRlbnRlZChyaWdodCwgY29udGV4dCkgJiZcbiAgICAgIChsZWZ0LnR5cGUgPT09ICdsaXN0JyB8fFxuICAgICAgICAobGVmdC50eXBlID09PSByaWdodC50eXBlICYmIGZvcm1hdENvZGVBc0luZGVudGVkKGxlZnQsIGNvbnRleHQpKSkpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gSm9pbiBjaGlsZHJlbiBvZiBhIGxpc3Qgb3IgYW4gaXRlbS5cbiAgLy8gSW4gd2hpY2ggY2FzZSwgYHBhcmVudGAgaGFzIGEgYHNwcmVhZGAgZmllbGQuXG4gIGlmICh0eXBlb2YgcGFyZW50LnNwcmVhZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKFxuICAgICAgbGVmdC50eXBlID09PSAncGFyYWdyYXBoJyAmJlxuICAgICAgLy8gVHdvIHBhcmFncmFwaHMuXG4gICAgICAobGVmdC50eXBlID09PSByaWdodC50eXBlIHx8XG4gICAgICAgIHJpZ2h0LnR5cGUgPT09ICdkZWZpbml0aW9uJyB8fFxuICAgICAgICAvLyBQYXJhZ3JhcGggZm9sbG93ZWQgYnkgYSBzZXRleHQgaGVhZGluZy5cbiAgICAgICAgKHJpZ2h0LnR5cGUgPT09ICdoZWFkaW5nJyAmJiBmb3JtYXRIZWFkaW5nQXNTZXRleHQocmlnaHQsIGNvbnRleHQpKSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQuc3ByZWFkID8gMSA6IDBcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICdcXHQnLFxuICAgIGluQ29uc3RydWN0OiBbJ2NvZGVGZW5jZWRMYW5nR3JhdmVBY2NlbnQnLCAnY29kZUZlbmNlZExhbmdUaWxkZSddXG4gIH0sXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICdcXHInLFxuICAgIGluQ29uc3RydWN0OiBbXG4gICAgICAnY29kZUZlbmNlZExhbmdHcmF2ZUFjY2VudCcsXG4gICAgICAnY29kZUZlbmNlZExhbmdUaWxkZScsXG4gICAgICAnY29kZUZlbmNlZE1ldGFHcmF2ZUFjY2VudCcsXG4gICAgICAnY29kZUZlbmNlZE1ldGFUaWxkZScsXG4gICAgICAnZGVzdGluYXRpb25MaXRlcmFsJyxcbiAgICAgICdoZWFkaW5nQXR4J1xuICAgIF1cbiAgfSxcbiAge1xuICAgIGNoYXJhY3RlcjogJ1xcbicsXG4gICAgaW5Db25zdHJ1Y3Q6IFtcbiAgICAgICdjb2RlRmVuY2VkTGFuZ0dyYXZlQWNjZW50JyxcbiAgICAgICdjb2RlRmVuY2VkTGFuZ1RpbGRlJyxcbiAgICAgICdjb2RlRmVuY2VkTWV0YUdyYXZlQWNjZW50JyxcbiAgICAgICdjb2RlRmVuY2VkTWV0YVRpbGRlJyxcbiAgICAgICdkZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgJ2hlYWRpbmdBdHgnXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2hhcmFjdGVyOiAnICcsXG4gICAgaW5Db25zdHJ1Y3Q6IFsnY29kZUZlbmNlZExhbmdHcmF2ZUFjY2VudCcsICdjb2RlRmVuY2VkTGFuZ1RpbGRlJ11cbiAgfSxcbiAgLy8gQW4gZXhjbGFtYXRpb24gbWFyayBjYW4gc3RhcnQgYW4gaW1hZ2UsIGlmIGl0IGlzIGZvbGxvd2VkIGJ5IGEgbGluayBvclxuICAvLyBhIGxpbmsgcmVmZXJlbmNlLlxuICB7Y2hhcmFjdGVyOiAnIScsIGFmdGVyOiAnXFxcXFsnLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEEgcXVvdGUgY2FuIGJyZWFrIG91dCBvZiBhIHRpdGxlLlxuICB7Y2hhcmFjdGVyOiAnXCInLCBpbkNvbnN0cnVjdDogJ3RpdGxlUXVvdGUnfSxcbiAgLy8gQSBudW1iZXIgc2lnbiBjb3VsZCBzdGFydCBhbiBBVFggaGVhZGluZyBpZiBpdCBzdGFydHMgYSBsaW5lLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnIyd9LFxuICAvLyBEb2xsYXIgc2lnbiBhbmQgcGVyY2VudGFnZSBhcmUgbm90IHVzZWQgaW4gbWFya2Rvd24uXG4gIC8vIEFuIGFtcGVyc2FuZCBjb3VsZCBzdGFydCBhIGNoYXJhY3RlciByZWZlcmVuY2UuXG4gIHtjaGFyYWN0ZXI6ICcmJywgYWZ0ZXI6ICdbI0EtWmEtel0nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEFuIGFwb3N0cm9waGUgY2FuIGJyZWFrIG91dCBvZiBhIHRpdGxlLlxuICB7Y2hhcmFjdGVyOiBcIidcIiwgaW5Db25zdHJ1Y3Q6ICd0aXRsZUFwb3N0cm9waGUnfSxcbiAgLy8gQSBsZWZ0IHBhcmVuIGNvdWxkIGJyZWFrIG91dCBvZiBhIGRlc3RpbmF0aW9uIHJhdy5cbiAge2NoYXJhY3RlcjogJygnLCBpbkNvbnN0cnVjdDogJ2Rlc3RpbmF0aW9uUmF3J30sXG4gIHtiZWZvcmU6ICdcXFxcXScsIGNoYXJhY3RlcjogJygnLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEEgcmlnaHQgcGFyZW4gY291bGQgc3RhcnQgYSBsaXN0IGl0ZW0gb3IgYnJlYWsgb3V0IG9mIGEgZGVzdGluYXRpb25cbiAgLy8gcmF3LlxuICB7YXRCcmVhazogdHJ1ZSwgYmVmb3JlOiAnXFxcXGQrJywgY2hhcmFjdGVyOiAnKSd9LFxuICB7Y2hhcmFjdGVyOiAnKScsIGluQ29uc3RydWN0OiAnZGVzdGluYXRpb25SYXcnfSxcbiAgLy8gQW4gYXN0ZXJpc2sgY2FuIHN0YXJ0IHRoZW1hdGljIGJyZWFrcywgbGlzdCBpdGVtcywgZW1waGFzaXMsIHN0cm9uZy5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJyonfSxcbiAge2NoYXJhY3RlcjogJyonLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ30sXG4gIC8vIEEgcGx1cyBzaWduIGNvdWxkIHN0YXJ0IGEgbGlzdCBpdGVtLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnKyd9LFxuICAvLyBBIGRhc2ggY2FuIHN0YXJ0IHRoZW1hdGljIGJyZWFrcywgbGlzdCBpdGVtcywgYW5kIHNldGV4dCBoZWFkaW5nXG4gIC8vIHVuZGVybGluZXMuXG4gIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICctJ30sXG4gIC8vIEEgZG90IGNvdWxkIHN0YXJ0IGEgbGlzdCBpdGVtLlxuICB7YXRCcmVhazogdHJ1ZSwgYmVmb3JlOiAnXFxcXGQrJywgY2hhcmFjdGVyOiAnLicsIGFmdGVyOiAnKD86WyBcXHRcXHJcXG5dfCQpJ30sXG4gIC8vIFNsYXNoLCBjb2xvbiwgYW5kIHNlbWljb2xvbiBhcmUgbm90IHVzZWQgaW4gbWFya2Rvd24gZm9yIGNvbnN0cnVjdHMuXG4gIC8vIEEgbGVzcyB0aGFuIGNhbiBzdGFydCBodG1sIChmbG93IG9yIHRleHQpIG9yIGFuIGF1dG9saW5rLlxuICAvLyBIVE1MIGNvdWxkIHN0YXJ0IHdpdGggYW4gZXhjbGFtYXRpb24gbWFyayAoZGVjbGFyYXRpb24sIGNkYXRhLCBjb21tZW50KSxcbiAgLy8gc2xhc2ggKGNsb3NpbmcgdGFnKSwgcXVlc3Rpb24gbWFyayAoaW5zdHJ1Y3Rpb24pLCBvciBhIGxldHRlciAodGFnKS5cbiAgLy8gQW4gYXV0b2xpbmsgYWxzbyBzdGFydHMgd2l0aCBhIGxldHRlci5cbiAgLy8gRmluYWxseSwgaXQgY291bGQgYnJlYWsgb3V0IG9mIGEgZGVzdGluYXRpb24gbGl0ZXJhbC5cbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJzwnLCBhZnRlcjogJ1shLz9BLVphLXpdJ30sXG4gIHtjaGFyYWN0ZXI6ICc8JywgYWZ0ZXI6ICdbIS8/QS1aYS16XScsIGluQ29uc3RydWN0OiAncGhyYXNpbmcnfSxcbiAge2NoYXJhY3RlcjogJzwnLCBpbkNvbnN0cnVjdDogJ2Rlc3RpbmF0aW9uTGl0ZXJhbCd9LFxuICAvLyBBbiBlcXVhbHMgdG8gY2FuIHN0YXJ0IHNldGV4dCBoZWFkaW5nIHVuZGVybGluZXMuXG4gIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICc9J30sXG4gIC8vIEEgZ3JlYXRlciB0aGFuIGNhbiBzdGFydCBibG9jayBxdW90ZXMgYW5kIGl0IGNhbiBicmVhayBvdXQgb2YgYVxuICAvLyBkZXN0aW5hdGlvbiBsaXRlcmFsLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnPid9LFxuICB7Y2hhcmFjdGVyOiAnPicsIGluQ29uc3RydWN0OiAnZGVzdGluYXRpb25MaXRlcmFsJ30sXG4gIC8vIFF1ZXN0aW9uIG1hcmsgYW5kIGF0IHNpZ24gYXJlIG5vdCB1c2VkIGluIG1hcmtkb3duIGZvciBjb25zdHJ1Y3RzLlxuICAvLyBBIGxlZnQgYnJhY2tldCBjYW4gc3RhcnQgZGVmaW5pdGlvbnMsIHJlZmVyZW5jZXMsIGxhYmVscyxcbiAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJ1snfSxcbiAge1xuICAgIGNoYXJhY3RlcjogJ1snLFxuICAgIGluQ29uc3RydWN0OiBbJ3BocmFzaW5nJywgJ2xhYmVsJywgJ3JlZmVyZW5jZSddXG4gIH0sXG4gIC8vIEEgYmFja3NsYXNoIGNhbiBzdGFydCBhbiBlc2NhcGUgKHdoZW4gZm9sbG93ZWQgYnkgcHVuY3R1YXRpb24pIG9yIGFcbiAgLy8gaGFyZCBicmVhayAod2hlbiBmb2xsb3dlZCBieSBhbiBlb2wpLlxuICB7Y2hhcmFjdGVyOiAnXFxcXCcsIGFmdGVyOiAnWyEtLzotQFstYHstfl0nfSxcbiAge2NoYXJhY3RlcjogJ1xcXFwnLCBhZnRlcjogJ1tcXFxcclxcXFxuXScsIGluQ29uc3RydWN0OiAncGhyYXNpbmcnfSxcbiAgLy8gQSByaWdodCBicmFja2V0IGNhbiBleGl0IGxhYmVscy5cbiAge1xuICAgIGNoYXJhY3RlcjogJ10nLFxuICAgIGluQ29uc3RydWN0OiBbJ2xhYmVsJywgJ3JlZmVyZW5jZSddXG4gIH0sXG4gIC8vIENhcmV0IGlzIG5vdCB1c2VkIGluIG1hcmtkb3duIGZvciBjb25zdHJ1Y3RzLlxuICAvLyBBbiB1bmRlcnNjb3JlIGNhbiBzdGFydCBlbXBoYXNpcywgc3Ryb25nLCBvciBhIHRoZW1hdGljIGJyZWFrLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnXyd9LFxuICB7YmVmb3JlOiAnW15BLVphLXpdJywgY2hhcmFjdGVyOiAnXycsIGluQ29uc3RydWN0OiAncGhyYXNpbmcnfSxcbiAge2NoYXJhY3RlcjogJ18nLCBhZnRlcjogJ1teQS1aYS16XScsIGluQ29uc3RydWN0OiAncGhyYXNpbmcnfSxcbiAgLy8gQSBncmF2ZSBhY2NlbnQgY2FuIHN0YXJ0IGNvZGUgKGZlbmNlZCBvciB0ZXh0KSwgb3IgaXQgY2FuIGJyZWFrIG91dCBvZlxuICAvLyBhIGdyYXZlIGFjY2VudCBjb2RlIGZlbmNlLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnYCd9LFxuICB7XG4gICAgY2hhcmFjdGVyOiAnYCcsXG4gICAgaW5Db25zdHJ1Y3Q6IFtcbiAgICAgICdjb2RlRmVuY2VkTGFuZ0dyYXZlQWNjZW50JyxcbiAgICAgICdjb2RlRmVuY2VkTWV0YUdyYXZlQWNjZW50JyxcbiAgICAgICdwaHJhc2luZydcbiAgICBdXG4gIH0sXG4gIC8vIExlZnQgYnJhY2UsIHZlcnRpY2FsIGJhciwgcmlnaHQgYnJhY2UgYXJlIG5vdCB1c2VkIGluIG1hcmtkb3duIGZvclxuICAvLyBjb25zdHJ1Y3RzLlxuICAvLyBBIHRpbGRlIGNhbiBzdGFydCBjb2RlIChmZW5jZWQpLlxuICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnfid9XG5dXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFzc29jaWF0aW9uXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5JylcblxudmFyIGNoYXJhY3RlckVzY2FwZSA9IC9cXFxcKFshLS86LUBbLWB7LX5dKS9nXG52YXIgY2hhcmFjdGVyUmVmZXJlbmNlID0gLyYoIyhcXGR7MSw3fXx4W1xcZGEtZl17MSw2fSl8W1xcZGEtel17MSwzMX0pOy9naVxuXG4vLyBUaGUgYGxhYmVsYCBvZiBhbiBhc3NvY2lhdGlvbiBpcyB0aGUgc3RyaW5nIHZhbHVlOiBjaGFyYWN0ZXIgZXNjYXBlcyBhbmRcbi8vIHJlZmVyZW5jZXMgd29yaywgYW5kIGNhc2luZyBpcyBpbnRhY3QuXG4vLyBUaGUgYGlkZW50aWZpZXJgIGlzIHVzZWQgdG8gbWF0Y2ggb25lIGFzc29jaWF0aW9uIHRvIGFub3RoZXI6IGNvbnRyb3ZlcnNpYWxseSxcbi8vIGNoYXJhY3RlciBlc2NhcGVzIGFuZCByZWZlcmVuY2VzIGRvbuKAmXQgd29yayBpbiB0aGlzIG1hdGNoaW5nOiBgJmNvcHk7YCBkb2VzXG4vLyBub3QgbWF0Y2ggYMKpYCwgYW5kIGBcXCtgIGRvZXMgbm90IG1hdGNoIGArYC5cbi8vIEJ1dCBjYXNpbmcgaXMgaWdub3JlZCAoYW5kIHdoaXRlc3BhY2UpIGlzIHRyaW1tZWQgYW5kIGNvbGxhcHNlZDogYCBBXFxuYmBcbi8vIG1hdGNoZXMgYGEgYmAuXG4vLyBTbywgd2UgZG8gcHJlZmVyIHRoZSBsYWJlbCB3aGVuIGZpZ3VyaW5nIG91dCBob3cgd2XigJlyZSBnb2luZyB0byBzZXJpYWxpemU6XG4vLyBpdCBoYXMgd2hpdGVzcGFjZSwgY2FzaW5nLCBhbmQgd2UgY2FuIGlnbm9yZSBtb3N0IHVzZWxlc3MgY2hhcmFjdGVyIGVzY2FwZXNcbi8vIGFuZCBhbGwgY2hhcmFjdGVyIHJlZmVyZW5jZXMuXG5mdW5jdGlvbiBhc3NvY2lhdGlvbihub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUubGFiZWwgfHwgJydcbiAgdmFyIGlkZW50aWZpZXIgPSBub2RlLmlkZW50aWZpZXJcblxuICBpZiAodmFsdWUgfHwgIWlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVyXG4gICAgLnJlcGxhY2UoY2hhcmFjdGVyRXNjYXBlLCAnJDEnKVxuICAgIC5yZXBsYWNlKGNoYXJhY3RlclJlZmVyZW5jZSwgZGVjb2RlSWZQb3NzaWJsZSlcbn1cblxuZnVuY3Rpb24gZGVjb2RlSWZQb3NzaWJsZSgkMCwgJDEpIHtcbiAgcmV0dXJuIGRlY29kZSgkMSkgfHwgJDBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tCdWxsZXRcblxuZnVuY3Rpb24gY2hlY2tCdWxsZXQoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLmJ1bGxldCB8fCAnKidcblxuICBpZiAobWFya2VyICE9PSAnKicgJiYgbWFya2VyICE9PSAnKycgJiYgbWFya2VyICE9PSAnLScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBpdGVtcyB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLmJ1bGxldGAsIGV4cGVjdGVkIGAqYCwgYCtgLCBvciBgLWAnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja0VtcGhhc2lzXG5cbmZ1bmN0aW9uIGNoZWNrRW1waGFzaXMoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLmVtcGhhc2lzIHx8ICcqJ1xuXG4gIGlmIChtYXJrZXIgIT09ICcqJyAmJiBtYXJrZXIgIT09ICdfJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIGVtcGhhc2lzIHdpdGggYCcgK1xuICAgICAgICBtYXJrZXIgK1xuICAgICAgICAnYCBmb3IgYG9wdGlvbnMuZW1waGFzaXNgLCBleHBlY3RlZCBgKmAsIG9yIGBfYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gbWFya2VyXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNoZWNrRmVuY2VcblxuZnVuY3Rpb24gY2hlY2tGZW5jZShjb250ZXh0KSB7XG4gIHZhciBtYXJrZXIgPSBjb250ZXh0Lm9wdGlvbnMuZmVuY2UgfHwgJ2AnXG5cbiAgaWYgKG1hcmtlciAhPT0gJ2AnICYmIG1hcmtlciAhPT0gJ34nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBzZXJpYWxpemUgY29kZSB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLmZlbmNlYCwgZXhwZWN0ZWQgYGAgYCBgYCBvciBgfmAnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja0xpc3RJdGVtSW5kZW50XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdEl0ZW1JbmRlbnQoY29udGV4dCkge1xuICB2YXIgc3R5bGUgPSBjb250ZXh0Lm9wdGlvbnMubGlzdEl0ZW1JbmRlbnQgfHwgJ3RhYidcblxuICBpZiAoc3R5bGUgPT09IDEgfHwgc3R5bGUgPT09ICcxJykge1xuICAgIHN0eWxlID0gJ29uZSdcbiAgfVxuXG4gIGlmIChzdHlsZSAhPT0gJ3RhYicgJiYgc3R5bGUgIT09ICdvbmUnICYmIHN0eWxlICE9PSAnbWl4ZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBzZXJpYWxpemUgaXRlbXMgd2l0aCBgJyArXG4gICAgICAgIHN0eWxlICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLmxpc3RJdGVtSW5kZW50YCwgZXhwZWN0ZWQgYHRhYmAsIGBvbmVgLCBvciBgbWl4ZWRgJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBzdHlsZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja1F1b3RlXG5cbmZ1bmN0aW9uIGNoZWNrUXVvdGUoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLnF1b3RlIHx8ICdcIidcblxuICBpZiAobWFya2VyICE9PSAnXCInICYmIG1hcmtlciAhPT0gXCInXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSB0aXRsZSB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLnF1b3RlYCwgZXhwZWN0ZWQgYFwiYCwgb3IgYFxcJ2AnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja1J1bGVcblxuZnVuY3Rpb24gY2hlY2tSdWxlKGNvbnRleHQpIHtcbiAgdmFyIHJlcGV0aXRpb24gPSBjb250ZXh0Lm9wdGlvbnMucnVsZVJlcGV0aXRpb24gfHwgM1xuXG4gIGlmIChyZXBldGl0aW9uIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIHJ1bGVzIHdpdGggcmVwZXRpdGlvbiBgJyArXG4gICAgICAgIHJlcGV0aXRpb24gK1xuICAgICAgICAnYCBmb3IgYG9wdGlvbnMucnVsZVJlcGV0aXRpb25gLCBleHBlY3RlZCBgM2Agb3IgbW9yZSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcmVwZXRpdGlvblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja1J1bGVcblxuZnVuY3Rpb24gY2hlY2tSdWxlKGNvbnRleHQpIHtcbiAgdmFyIG1hcmtlciA9IGNvbnRleHQub3B0aW9ucy5ydWxlIHx8ICcqJ1xuXG4gIGlmIChtYXJrZXIgIT09ICcqJyAmJiBtYXJrZXIgIT09ICctJyAmJiBtYXJrZXIgIT09ICdfJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIHJ1bGVzIHdpdGggYCcgK1xuICAgICAgICBtYXJrZXIgK1xuICAgICAgICAnYCBmb3IgYG9wdGlvbnMucnVsZWAsIGV4cGVjdGVkIGAqYCwgYC1gLCBvciBgX2AnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja1N0cm9uZ1xuXG5mdW5jdGlvbiBjaGVja1N0cm9uZyhjb250ZXh0KSB7XG4gIHZhciBtYXJrZXIgPSBjb250ZXh0Lm9wdGlvbnMuc3Ryb25nIHx8ICcqJ1xuXG4gIGlmIChtYXJrZXIgIT09ICcqJyAmJiBtYXJrZXIgIT09ICdfJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIHN0cm9uZyB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLnN0cm9uZ2AsIGV4cGVjdGVkIGAqYCwgb3IgYF9gJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBtYXJrZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZmxvd1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbmZ1bmN0aW9uIGZsb3cocGFyZW50LCBjb250ZXh0KSB7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBuZXh0ID0gY2hpbGRyZW5bMF1cbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gbmV4dFxuICAgIG5leHQgPSBjaGlsZHJlbltpbmRleCArIDFdXG5cbiAgICByZXN1bHRzLnB1c2goXG4gICAgICBjb250ZXh0LmhhbmRsZShjaGlsZCwgcGFyZW50LCBjb250ZXh0LCB7YmVmb3JlOiAnXFxuJywgYWZ0ZXI6ICdcXG4nfSlcbiAgICApXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGJldHdlZW4oY2hpbGQsIG5leHQpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzLmpvaW4oJycpXG5cbiAgZnVuY3Rpb24gYmV0d2VlbihsZWZ0LCByaWdodCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjb250ZXh0LmpvaW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBjb250ZXh0LmpvaW5baW5kZXhdKGxlZnQsIHJpZ2h0LCBwYXJlbnQsIGNvbnRleHQpXG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUgfHwgcmVzdWx0ID09PSAxKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gcmVwZWF0KCdcXG4nLCAxICsgTnVtYmVyKHJlc3VsdCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuPCEtLS0tPlxcblxcbidcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJ1xcblxcbidcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwaHJhc2luZ1xuXG5mdW5jdGlvbiBwaHJhc2luZyhwYXJlbnQsIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGN1cnJlbnQgPSAnJ1xuICB2YXIgbmV4dCA9IGNoaWxkcmVuWzBdXG4gIHZhciBiZWZvcmUgPSBzYWZlT3B0aW9ucy5iZWZvcmVcbiAgdmFyIGFmdGVyXG4gIHZhciBoYW5kbGVOZXh0XG4gIHZhciBjaGlsZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBuZXh0XG4gICAgbmV4dCA9IGNoaWxkcmVuW2luZGV4ICsgMV1cblxuICAgIGlmIChuZXh0KSB7XG4gICAgICBoYW5kbGVOZXh0ID0gY29udGV4dC5oYW5kbGUuaGFuZGxlcnNbbmV4dC50eXBlXVxuICAgICAgaWYgKGhhbmRsZU5leHQgJiYgaGFuZGxlTmV4dC5wZWVrKSBoYW5kbGVOZXh0ID0gaGFuZGxlTmV4dC5wZWVrXG4gICAgICBhZnRlciA9IGhhbmRsZU5leHRcbiAgICAgICAgPyBoYW5kbGVOZXh0KG5leHQsIHBhcmVudCwgY29udGV4dCwge2JlZm9yZTogJycsIGFmdGVyOiAnJ30pLmNoYXJBdCgwKVxuICAgICAgICA6ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyID0gc2FmZU9wdGlvbnMuYWZ0ZXJcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY29udGV4dC5oYW5kbGUoY2hpbGQsIHBhcmVudCwgY29udGV4dCwge1xuICAgICAgYmVmb3JlOiBiZWZvcmUsXG4gICAgICBhZnRlcjogYWZ0ZXJcbiAgICB9KVxuICAgIHJlc3VsdHMucHVzaChjdXJyZW50KVxuICAgIGJlZm9yZSA9IGN1cnJlbnQuY2hhckF0KGN1cnJlbnQubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzLmpvaW4oJycpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZvcm1hdENvZGVBc0luZGVudGVkXG5cbmZ1bmN0aW9uIGZvcm1hdENvZGVBc0luZGVudGVkKG5vZGUsIGNvbnRleHQpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZSB8fCAnJ1xuXG4gIHJldHVybiAoXG4gICAgIWNvbnRleHQub3B0aW9ucy5mZW5jZXMgJiZcbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gaW5mb+KAplxuICAgICFub2RlLmxhbmcgJiZcbiAgICAvLyBBbmQgdGhlcmXigJlzIGEgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVy4oCmXG4gICAgL1teIFxcclxcbl0vLnRlc3QodmFsdWUpICYmXG4gICAgLy8gQW5kIHRoZSB2YWx1ZSBkb2VzbuKAmXQgc3RhcnQgb3IgZW5kIGluIGEgYmxhbmvigKZcbiAgICAhL15bXFx0IF0qW1xcclxcbl18W1xcclxcbl1bXFx0IF0qJC8udGVzdCh2YWx1ZSlcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRIZWFkaW5nQXNTZXRleHRcblxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1zdHJpbmcnKVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkaW5nQXNTZXRleHQobm9kZSwgY29udGV4dCkge1xuICByZXR1cm4gKFxuICAgIGNvbnRleHQub3B0aW9ucy5zZXRleHQgJiYgKCFub2RlLmRlcHRoIHx8IG5vZGUuZGVwdGggPCAzKSAmJiB0b1N0cmluZyhub2RlKVxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZvcm1hdExpbmtBc0F1dG9saW5rXG5cbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tc3RyaW5nJylcblxuZnVuY3Rpb24gZm9ybWF0TGlua0FzQXV0b2xpbmsobm9kZSkge1xuICB2YXIgcmF3ID0gdG9TdHJpbmcobm9kZSlcbiAgdmFyIHVybCA9IG5vZGUudXJsXG5cbiAgcmV0dXJuIChcbiAgICAvLyBJZiB0aGVyZeKAmXMgYSB1cmzigKZcbiAgICB1cmwgJiZcbiAgICAvLyBBbmQgdGhlcmXigJlzIGEgbm8gdGl0bGXigKZcbiAgICAhbm9kZS50aXRsZSAmJlxuICAgIC8vIEFuZCBpZiB0aGUgdXJsIGlzIHRoZSBzYW1lIGFzIHRoZSBjb250ZW504oCmXG4gICAgKHJhdyA9PT0gdXJsIHx8ICdtYWlsdG86JyArIHJhdyA9PT0gdXJsKSAmJlxuICAgIC8vIEFuZCB0aGF0IHN0YXJ0cyB3LyBhIHByb3RvY29s4oCmXG4gICAgL15bYS16XVthLXorLi1dKzovaS50ZXN0KHVybCkgJiZcbiAgICAvLyBBbmQgdGhhdCBkb2VzbuKAmXQgY29udGFpbiBBU0NJSSBjb250cm9sIGNvZGVzIChjaGFyYWN0ZXIgZXNjYXBlcyBhbmRcbiAgICAvLyByZWZlcmVuY2VzIGRvbuKAmXQgd29yaykgb3IgYW5nbGUgYnJhY2tldHPigKZcbiAgICAhL1tcXDAtIDw+XFx1MDA3Rl0vLnRlc3QodXJsKVxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGluZGVudExpbmVzXG5cbnZhciBlb2wgPSAvXFxyP1xcbnxcXHIvZ1xuXG5mdW5jdGlvbiBpbmRlbnRMaW5lcyh2YWx1ZSwgbWFwKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc3RhcnQgPSAwXG4gIHZhciBsaW5lID0gMFxuICB2YXIgbWF0Y2hcblxuICB3aGlsZSAoKG1hdGNoID0gZW9sLmV4ZWModmFsdWUpKSkge1xuICAgIG9uZSh2YWx1ZS5zbGljZShzdGFydCwgbWF0Y2guaW5kZXgpKVxuICAgIHJlc3VsdC5wdXNoKG1hdGNoWzBdKVxuICAgIHN0YXJ0ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICBsaW5lKytcbiAgfVxuXG4gIG9uZSh2YWx1ZS5zbGljZShzdGFydCkpXG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxuXG4gIGZ1bmN0aW9uIG9uZSh2YWx1ZSkge1xuICAgIHJlc3VsdC5wdXNoKG1hcCh2YWx1ZSwgbGluZSwgIXZhbHVlKSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzYWZlXG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG52YXIgcmVnZXhQdW5jdHVhdGlvbiA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL1xudmFyIG1hcmtkb3duUHVuY3R1YXRpb24gPSAvWyEtLzotQFstYHstfl0vXG5cbmZ1bmN0aW9uIHNhZmUoY29udGV4dCwgaW5wdXQsIGNvbmZpZykge1xuICB2YXIgdmFsdWUgPSBpbnB1dCB8fCAnJ1xuICB2YXIgcGF0dGVybnMgPSBjb250ZXh0LnVuc2FmZVBhdHRlcm5zXG4gIHZhciBsZW5ndGggPSBwYXR0ZXJucy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHBvc2l0aW9ucyA9IFtdXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgcG9zaXRpb25cbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcGF0dGVyblxuICB2YXIgZXhwcmVzc2lvblxuICB2YXIgbWF0Y2hcbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICBpZiAoY29uZmlnLmJlZm9yZSkge1xuICAgIHZhbHVlID0gY29uZmlnLmJlZm9yZSArIHZhbHVlXG4gIH1cblxuICBpZiAoY29uZmlnLmFmdGVyKSB7XG4gICAgdmFsdWUgKz0gY29uZmlnLmFmdGVyXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuc1tpbmRleF1cblxuICAgIGlmIChcbiAgICAgICFpblNjb3BlKGNvbnRleHQuc3RhY2ssIHBhdHRlcm4uaW5Db25zdHJ1Y3QsIHRydWUpIHx8XG4gICAgICBpblNjb3BlKGNvbnRleHQuc3RhY2ssIHBhdHRlcm4ubm90SW5Db25zdHJ1Y3QpXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGV4cHJlc3Npb24gPSB0b0V4cHJlc3Npb24ocGF0dGVybilcblxuICAgIHdoaWxlICgobWF0Y2ggPSBleHByZXNzaW9uLmV4ZWModmFsdWUpKSkge1xuICAgICAgcG9zaXRpb25zLnB1c2goXG4gICAgICAgIG1hdGNoLmluZGV4ICsgKHBhdHRlcm4uYmVmb3JlIHx8IHBhdHRlcm4uYXRCcmVhayA/IG1hdGNoWzFdLmxlbmd0aCA6IDApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcG9zaXRpb25zLnNvcnQobnVtZXJpY2FsKVxuXG4gIHN0YXJ0ID0gY29uZmlnLmJlZm9yZSA/IGNvbmZpZy5iZWZvcmUubGVuZ3RoIDogMFxuICBlbmQgPSB2YWx1ZS5sZW5ndGggLSAoY29uZmlnLmFmdGVyID8gY29uZmlnLmFmdGVyLmxlbmd0aCA6IDApXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdXG5cbiAgICBpZiAoXG4gICAgICAvLyBDaGFyYWN0ZXIgYmVmb3JlIG9yIGFmdGVyIG1hdGNoZWQ6XG4gICAgICBwb3NpdGlvbiA8IHN0YXJ0IHx8XG4gICAgICBwb3NpdGlvbiA+PSBlbmQgfHxcbiAgICAgIC8vIENoYXJhY3RlciBtYXRjaGVkIG11bHRpcGxlIHRpbWVzOlxuICAgICAgcG9zaXRpb24gPT09IHBvc2l0aW9uc1tpbmRleCArIDFdXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChzdGFydCAhPT0gcG9zaXRpb24pIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuICAgIHN0YXJ0ID0gcG9zaXRpb25cblxuICAgIGlmIChcbiAgICAgIG1hcmtkb3duUHVuY3R1YXRpb24udGVzdChjaGFyYWN0ZXIpICYmXG4gICAgICAoIWNvbmZpZy5lbmNvZGUgfHwgY29uZmlnLmVuY29kZS5pbmRleE9mKGNoYXJhY3RlcikgPT09IC0xKVxuICAgICkge1xuICAgICAgLy8gQ2hhcmFjdGVyIGVzY2FwZS5cbiAgICAgIHJlc3VsdC5wdXNoKCdcXFxcJylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2hhcmFjdGVyIHJlZmVyZW5jZS5cbiAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShjaGFyYWN0ZXIsIHtzdWJzZXQ6IFtjaGFyYWN0ZXJdfSkpXG4gICAgICBzdGFydCsrXG4gICAgfVxuICB9XG5cbiAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCkpXG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBpblNjb3BlKHN0YWNrLCBsaXN0LCBub25lKSB7XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG5cbiAgaWYgKCFsaXN0KSB7XG4gICAgcmV0dXJuIG5vbmVcbiAgfVxuXG4gIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICBsaXN0ID0gW2xpc3RdXG4gIH1cblxuICBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoc3RhY2suaW5kZXhPZihsaXN0W2luZGV4XSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiB0b0V4cHJlc3Npb24ocGF0dGVybikge1xuICB2YXIgYmVmb3JlID0gcGF0dGVybi5iZWZvcmUgPyAnKD86JyArIHBhdHRlcm4uYmVmb3JlICsgJyknIDogJydcbiAgdmFyIGFmdGVyID0gcGF0dGVybi5hZnRlciA/ICcoPzonICsgcGF0dGVybi5hZnRlciArICcpJyA6ICcnXG5cbiAgaWYgKHBhdHRlcm4uYXRCcmVhaykge1xuICAgIGJlZm9yZSA9ICdbXFxcXHJcXFxcbl1bXFxcXHQgXSonICsgYmVmb3JlXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAoYmVmb3JlID8gJygnICsgYmVmb3JlICsgJyknIDogJycpICtcbiAgICAgIChyZWdleFB1bmN0dWF0aW9uLnRlc3QocGF0dGVybi5jaGFyYWN0ZXIpID8gJ1xcXFwnIDogJycpICtcbiAgICAgIHBhdHRlcm4uY2hhcmFjdGVyICtcbiAgICAgIChhZnRlciB8fCAnJyksXG4gICAgJ2cnXG4gIClcbn1cblxuZnVuY3Rpb24gbnVtZXJpY2FsKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWh0bWw0JylcbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBoZXhhZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWhleGFkZWNpbWFsJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGFuZ2Vyb3VzID0gcmVxdWlyZSgnLi9kYW5nZXJvdXMuanNvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlXG5lbmNvZGUuZXNjYXBlID0gZXNjYXBlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBDaGFyYWN0ZXJzXG52YXIgZXF1YWxzVG8gPSA2MVxuXG4vLyBMaXN0IG9mIGVuZm9yY2VkIGVzY2FwZXMuXG52YXIgZXNjYXBlcyA9IFsnXCInLCBcIidcIiwgJzwnLCAnPicsICcmJywgJ2AnXVxuXG4vLyBNYXAgb2YgY2hhcmFjdGVycyB0byBuYW1lcy5cbnZhciBjaGFyYWN0ZXJzID0gY29uc3RydWN0KClcblxuLy8gRGVmYXVsdCBlc2NhcGVzLlxudmFyIGRlZmF1bHRFc2NhcGVzID0gdG9FeHByZXNzaW9uKGVzY2FwZXMpXG5cbi8vIFN1cnJvZ2F0ZSBwYWlycy5cbnZhciBzdXJyb2dhdGVQYWlyID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZ1xuXG4vLyBOb24tQVNDSUkgY2hhcmFjdGVycy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4LCB1bmljb3JuL25vLWhleC1lc2NhcGVcbnZhciBibXAgPSAvW1xceDAxLVxcdFxceDBCXFxmXFx4MEUtXFx4MUZcXHg3RlxceDgxXFx4OERcXHg4RlxceDkwXFx4OURcXHhBMC1cXHVGRkZGXS9nXG5cbi8vIEVuY29kZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBzdWJzZXQgPSBzZXR0aW5ncy5zdWJzZXRcbiAgdmFyIHNldCA9IHN1YnNldCA/IHRvRXhwcmVzc2lvbihzdWJzZXQpIDogZGVmYXVsdEVzY2FwZXNcbiAgdmFyIGVzY2FwZU9ubHkgPSBzZXR0aW5ncy5lc2NhcGVPbmx5XG4gIHZhciBvbWl0ID0gc2V0dGluZ3Mub21pdE9wdGlvbmFsU2VtaWNvbG9uc1xuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShzZXQsIHJlcGxhY2UpXG5cbiAgaWYgKHN1YnNldCB8fCBlc2NhcGVPbmx5KSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZShzdXJyb2dhdGVQYWlyLCByZXBsYWNlU3Vycm9nYXRlUGFpcilcbiAgICAucmVwbGFjZShibXAsIHJlcGxhY2UpXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVN1cnJvZ2F0ZVBhaXIocGFpciwgcG9zLCB2YWwpIHtcbiAgICByZXR1cm4gdG9IZXhSZWZlcmVuY2UoXG4gICAgICAocGFpci5jaGFyQ29kZUF0KDApIC0gMHhkODAwKSAqIDB4NDAwICtcbiAgICAgICAgcGFpci5jaGFyQ29kZUF0KDEpIC1cbiAgICAgICAgMHhkYzAwICtcbiAgICAgICAgMHgxMDAwMCxcbiAgICAgIHZhbC5jaGFyQ29kZUF0KHBvcyArIDIpLFxuICAgICAgb21pdFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UoY2hhciwgcG9zLCB2YWwpIHtcbiAgICByZXR1cm4gb25lKGNoYXIsIHZhbC5jaGFyQ29kZUF0KHBvcyArIDEpLCBzZXR0aW5ncylcbiAgfVxufVxuXG4vLyBTaG9ydGN1dCB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIEhUTUwuXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgcmV0dXJuIGVuY29kZSh2YWx1ZSwge2VzY2FwZU9ubHk6IHRydWUsIHVzZU5hbWVkUmVmZXJlbmNlczogdHJ1ZX0pXG59XG5cbi8vIEVuY29kZSBgY2hhcmAgYWNjb3JkaW5nIHRvIGBvcHRpb25zYC5cbmZ1bmN0aW9uIG9uZShjaGFyLCBuZXh0LCBvcHRpb25zKSB7XG4gIHZhciBzaG9ydGVzdCA9IG9wdGlvbnMudXNlU2hvcnRlc3RSZWZlcmVuY2VzXG4gIHZhciBvbWl0ID0gb3B0aW9ucy5vbWl0T3B0aW9uYWxTZW1pY29sb25zXG4gIHZhciBuYW1lZFxuICB2YXIgY29kZVxuICB2YXIgbnVtZXJpY1xuICB2YXIgZGVjaW1hbFxuXG4gIGlmICgoc2hvcnRlc3QgfHwgb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMpICYmIG93bi5jYWxsKGNoYXJhY3RlcnMsIGNoYXIpKSB7XG4gICAgbmFtZWQgPSB0b05hbWVkKGNoYXJhY3RlcnNbY2hhcl0sIG5leHQsIG9taXQsIG9wdGlvbnMuYXR0cmlidXRlKVxuICB9XG5cbiAgaWYgKHNob3J0ZXN0IHx8ICFuYW1lZCkge1xuICAgIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgICBudW1lcmljID0gdG9IZXhSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdClcblxuICAgIC8vIFVzZSB0aGUgc2hvcnRlc3QgbnVtZXJpYyByZWZlcmVuY2Ugd2hlbiByZXF1ZXN0ZWQuXG4gICAgLy8gQSBzaW1wbGUgYWxnb3JpdGhtIHdvdWxkIHVzZSBkZWNpbWFsIGZvciBhbGwgY29kZSBwb2ludHMgdW5kZXIgMTAwLCBhc1xuICAgIC8vIHRob3NlIGFyZSBzaG9ydGVyIHRoYW4gaGV4YWRlY2ltYWw6XG4gICAgLy9cbiAgICAvLyAqIGAmIzk5O2AgdnMgYCYjeDYzO2AgKGRlY2ltYWwgc2hvcnRlcilcbiAgICAvLyAqIGAmIzEwMDtgIHZzIGAmI3g2NDtgIChlcXVhbClcbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIGJlY2F1c2Ugd2UgdGFrZSBgbmV4dGAgaW50byBjb25zaWRlcmF0aW9uIHdoZW4gYG9taXRgIGlzIHVzZWQsXG4gICAgLy8gQW5kIGl0IHdvdWxkIGJlIHBvc3NpYmxlIHRoYXQgZGVjaW1hbHMgYXJlIHNob3J0ZXIgb24gYmlnZ2VyIHZhbHVlcyBhc1xuICAgIC8vIHdlbGwgaWYgYG5leHRgIGlzIGhleGFkZWNpbWFsIGJ1dCBub3QgZGVjaW1hbCwgd2UgaW5zdGVhZCBjb21wYXJlIGJvdGguXG4gICAgaWYgKHNob3J0ZXN0KSB7XG4gICAgICBkZWNpbWFsID0gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpXG5cbiAgICAgIGlmIChkZWNpbWFsLmxlbmd0aCA8IG51bWVyaWMubGVuZ3RoKSB7XG4gICAgICAgIG51bWVyaWMgPSBkZWNpbWFsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5hbWVkICYmICghc2hvcnRlc3QgfHwgbmFtZWQubGVuZ3RoIDwgbnVtZXJpYy5sZW5ndGgpKSB7XG4gICAgcmV0dXJuIG5hbWVkXG4gIH1cblxuICByZXR1cm4gbnVtZXJpY1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYW4gZW50aXR5LlxuZnVuY3Rpb24gdG9OYW1lZChuYW1lLCBuZXh0LCBvbWl0LCBhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gJyYnICsgbmFtZVxuXG4gIGlmIChcbiAgICBvbWl0ICYmXG4gICAgb3duLmNhbGwobGVnYWN5LCBuYW1lKSAmJlxuICAgIGRhbmdlcm91cy5pbmRleE9mKG5hbWUpID09PSAtMSAmJlxuICAgICghYXR0cmlidXRlIHx8IChuZXh0ICYmIG5leHQgIT09IGVxdWFsc1RvICYmICFhbHBoYW51bWVyaWNhbChuZXh0KSkpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGhleGFkZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2UuXG5mdW5jdGlvbiB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmI3gnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFoZXhhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGEgZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpIHtcbiAgdmFyIHZhbHVlID0gJyYjJyArIFN0cmluZyhjb2RlKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFkZWNpbWFsKG5leHQpID8gdmFsdWUgOiB2YWx1ZSArICc7J1xufVxuXG4vLyBDcmVhdGUgYW4gZXhwcmVzc2lvbiBmb3IgYGNoYXJhY3RlcnNgLlxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGNoYXJhY3RlcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ1snICsgY2hhcmFjdGVycy5qb2luKCcnKSArICddJywgJ2cnKVxufVxuXG4vLyBDb25zdHJ1Y3QgdGhlIG1hcC5cbmZ1bmN0aW9uIGNvbnN0cnVjdCgpIHtcbiAgdmFyIGNoYXJzID0ge31cbiAgdmFyIG5hbWVcblxuICBmb3IgKG5hbWUgaW4gZW50aXRpZXMpIHtcbiAgICBjaGFyc1tlbnRpdGllc1tuYW1lXV0gPSBuYW1lXG4gIH1cblxuICByZXR1cm4gY2hhcnNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nXG5cbi8vIEdldCB0aGUgdGV4dCBjb250ZW50IG9mIGEgbm9kZS5cbi8vIFByZWZlciB0aGUgbm9kZeKAmXMgcGxhaW4tdGV4dCBmaWVsZHMsIG90aGVyd2lzZSBzZXJpYWxpemUgaXRzIGNoaWxkcmVuLFxuLy8gYW5kIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBhcnJheSwgc2VyaWFsaXplIHRoZSBub2RlcyBpbiBpdC5cbmZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAobm9kZSAmJlxuICAgICAgKG5vZGUudmFsdWUgfHxcbiAgICAgICAgbm9kZS5hbHQgfHxcbiAgICAgICAgbm9kZS50aXRsZSB8fFxuICAgICAgICAoJ2NoaWxkcmVuJyBpbiBub2RlICYmIGFsbChub2RlLmNoaWxkcmVuKSkgfHxcbiAgICAgICAgKCdsZW5ndGgnIGluIG5vZGUgJiYgYWxsKG5vZGUpKSkpIHx8XG4gICAgJydcbiAgKVxufVxuXG5mdW5jdGlvbiBhbGwodmFsdWVzKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IHRvU3RyaW5nKHZhbHVlc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvW0EtWmEtel0vKVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1tcXGRBLVphLXpdLylcbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9bIy0nKitcXC0tOT0/QS1aXi1+XS8pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFzY2lpQ29udHJvbFxuXG4vLyBOb3RlOiBFT0YgaXMgc2VlbiBhcyBBU0NJSSBjb250cm9sIGhlcmUsIGJlY2F1c2UgYG51bGwgPCAzMiA9PSB0cnVlYC5cbmZ1bmN0aW9uIGFzY2lpQ29udHJvbChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgLy8gU3BlY2lhbCB3aGl0ZXNwYWNlIGNvZGVzICh3aGljaCBoYXZlIG5lZ2F0aXZlIHZhbHVlcyksIEMwIGFuZCBDb250cm9sXG4gICAgLy8gY2hhcmFjdGVyIERFTFxuICAgIGNvZGUgPCAzMiB8fCBjb2RlID09PSAxMjdcbiAgKVxufVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1xcZC8pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvW1xcZEEtRmEtZl0vKVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1shLS86LUBbLWB7LX5dLylcbiIsIi8vIFRoaXMgbW9kdWxlIGlzIGNvbXBpbGVkIGF3YXkhXG4vL1xuLy8gbWljcm9tYXJrIHdvcmtzIGJhc2VkIG9uIGNoYXJhY3RlciBjb2Rlcy5cbi8vIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGNvbnN0YW50cyBmb3IgdGhlIEFTQ0lJIGJsb2NrIGFuZCB0aGUgcmVwbGFjZW1lbnRcbi8vIGNoYXJhY3Rlci5cbi8vIEEgY291cGxlIG9mIHRoZW0gYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSwgc3VjaCBhcyB0aGUgbGluZSBlbmRpbmdzXG4vLyAoQ1IsIExGLCBhbmQgQ1IrTEYsIGNvbW1vbmx5IGtub3duIGFzIGVuZC1vZi1saW5lOiBFT0xzKSwgdGhlIHRhYiAoaG9yaXpvbnRhbFxuLy8gdGFiKSBhbmQgaXRzIGV4cGFuc2lvbiBiYXNlZCBvbiB3aGF0IGNvbHVtbiBpdOKAmXMgYXQgKHZpcnR1YWwgc3BhY2UpLFxuLy8gYW5kIHRoZSBlbmQtb2YtZmlsZSAoZW9mKSBjaGFyYWN0ZXIuXG4vLyBBcyB2YWx1ZXMgYXJlIHByZXByb2Nlc3NlZCBiZWZvcmUgaGFuZGxpbmcgdGhlbSwgdGhlIGFjdHVhbCBjaGFyYWN0ZXJzIExGLFxuLy8gQ1IsIEhULCBhbmQgTlVMICh3aGljaCBpcyBwcmVzZW50IGFzIHRoZSByZXBsYWNlbWVudCBjaGFyYWN0ZXIpLCBhcmVcbi8vIGd1YXJhbnRlZWQgdG8gbm90IGV4aXN0LlxuLy9cbi8vIFVuaWNvZGUgYmFzaWMgbGF0aW4gYmxvY2suXG5leHBvcnRzLmNhcnJpYWdlUmV0dXJuID0gLTVcbmV4cG9ydHMubGluZUZlZWQgPSAtNFxuZXhwb3J0cy5jYXJyaWFnZVJldHVybkxpbmVGZWVkID0gLTNcbmV4cG9ydHMuaG9yaXpvbnRhbFRhYiA9IC0yXG5leHBvcnRzLnZpcnR1YWxTcGFjZSA9IC0xXG5leHBvcnRzLmVvZiA9IG51bGxcbmV4cG9ydHMubnVsID0gMFxuZXhwb3J0cy5zb2ggPSAxXG5leHBvcnRzLnN0eCA9IDJcbmV4cG9ydHMuZXR4ID0gM1xuZXhwb3J0cy5lb3QgPSA0XG5leHBvcnRzLmVucSA9IDVcbmV4cG9ydHMuYWNrID0gNlxuZXhwb3J0cy5iZWwgPSA3XG5leHBvcnRzLmJzID0gOFxuZXhwb3J0cy5odCA9IDkgLy8gYFxcdGBcbmV4cG9ydHMubGYgPSAxMCAvLyBgXFxuYFxuZXhwb3J0cy52dCA9IDExIC8vIGBcXHZgXG5leHBvcnRzLmZmID0gMTIgLy8gYFxcZmBcbmV4cG9ydHMuY3IgPSAxMyAvLyBgXFxyYFxuZXhwb3J0cy5zbyA9IDE0XG5leHBvcnRzLnNpID0gMTVcbmV4cG9ydHMuZGxlID0gMTZcbmV4cG9ydHMuZGMxID0gMTdcbmV4cG9ydHMuZGMyID0gMThcbmV4cG9ydHMuZGMzID0gMTlcbmV4cG9ydHMuZGM0ID0gMjBcbmV4cG9ydHMubmFrID0gMjFcbmV4cG9ydHMuc3luID0gMjJcbmV4cG9ydHMuZXRiID0gMjNcbmV4cG9ydHMuY2FuID0gMjRcbmV4cG9ydHMuZW0gPSAyNVxuZXhwb3J0cy5zdWIgPSAyNlxuZXhwb3J0cy5lc2MgPSAyN1xuZXhwb3J0cy5mcyA9IDI4XG5leHBvcnRzLmdzID0gMjlcbmV4cG9ydHMucnMgPSAzMFxuZXhwb3J0cy51cyA9IDMxXG5leHBvcnRzLnNwYWNlID0gMzJcbmV4cG9ydHMuZXhjbGFtYXRpb25NYXJrID0gMzMgLy8gYCFgXG5leHBvcnRzLnF1b3RhdGlvbk1hcmsgPSAzNCAvLyBgXCJgXG5leHBvcnRzLm51bWJlclNpZ24gPSAzNSAvLyBgI2BcbmV4cG9ydHMuZG9sbGFyU2lnbiA9IDM2IC8vIGAkYFxuZXhwb3J0cy5wZXJjZW50U2lnbiA9IDM3IC8vIGAlYFxuZXhwb3J0cy5hbXBlcnNhbmQgPSAzOCAvLyBgJmBcbmV4cG9ydHMuYXBvc3Ryb3BoZSA9IDM5IC8vIGAnYFxuZXhwb3J0cy5sZWZ0UGFyZW50aGVzaXMgPSA0MCAvLyBgKGBcbmV4cG9ydHMucmlnaHRQYXJlbnRoZXNpcyA9IDQxIC8vIGApYFxuZXhwb3J0cy5hc3RlcmlzayA9IDQyIC8vIGAqYFxuZXhwb3J0cy5wbHVzU2lnbiA9IDQzIC8vIGArYFxuZXhwb3J0cy5jb21tYSA9IDQ0IC8vIGAsYFxuZXhwb3J0cy5kYXNoID0gNDUgLy8gYC1gXG5leHBvcnRzLmRvdCA9IDQ2IC8vIGAuYFxuZXhwb3J0cy5zbGFzaCA9IDQ3IC8vIGAvYFxuZXhwb3J0cy5kaWdpdDAgPSA0OCAvLyBgMGBcbmV4cG9ydHMuZGlnaXQxID0gNDkgLy8gYDFgXG5leHBvcnRzLmRpZ2l0MiA9IDUwIC8vIGAyYFxuZXhwb3J0cy5kaWdpdDMgPSA1MSAvLyBgM2BcbmV4cG9ydHMuZGlnaXQ0ID0gNTIgLy8gYDRgXG5leHBvcnRzLmRpZ2l0NSA9IDUzIC8vIGA1YFxuZXhwb3J0cy5kaWdpdDYgPSA1NCAvLyBgNmBcbmV4cG9ydHMuZGlnaXQ3ID0gNTUgLy8gYDdgXG5leHBvcnRzLmRpZ2l0OCA9IDU2IC8vIGA4YFxuZXhwb3J0cy5kaWdpdDkgPSA1NyAvLyBgOWBcbmV4cG9ydHMuY29sb24gPSA1OCAvLyBgOmBcbmV4cG9ydHMuc2VtaWNvbG9uID0gNTkgLy8gYDtgXG5leHBvcnRzLmxlc3NUaGFuID0gNjAgLy8gYDxgXG5leHBvcnRzLmVxdWFsc1RvID0gNjEgLy8gYD1gXG5leHBvcnRzLmdyZWF0ZXJUaGFuID0gNjIgLy8gYD5gXG5leHBvcnRzLnF1ZXN0aW9uTWFyayA9IDYzIC8vIGA/YFxuZXhwb3J0cy5hdFNpZ24gPSA2NCAvLyBgQGBcbmV4cG9ydHMudXBwZXJjYXNlQSA9IDY1IC8vIGBBYFxuZXhwb3J0cy51cHBlcmNhc2VCID0gNjYgLy8gYEJgXG5leHBvcnRzLnVwcGVyY2FzZUMgPSA2NyAvLyBgQ2BcbmV4cG9ydHMudXBwZXJjYXNlRCA9IDY4IC8vIGBEYFxuZXhwb3J0cy51cHBlcmNhc2VFID0gNjkgLy8gYEVgXG5leHBvcnRzLnVwcGVyY2FzZUYgPSA3MCAvLyBgRmBcbmV4cG9ydHMudXBwZXJjYXNlRyA9IDcxIC8vIGBHYFxuZXhwb3J0cy51cHBlcmNhc2VIID0gNzIgLy8gYEhgXG5leHBvcnRzLnVwcGVyY2FzZUkgPSA3MyAvLyBgSWBcbmV4cG9ydHMudXBwZXJjYXNlSiA9IDc0IC8vIGBKYFxuZXhwb3J0cy51cHBlcmNhc2VLID0gNzUgLy8gYEtgXG5leHBvcnRzLnVwcGVyY2FzZUwgPSA3NiAvLyBgTGBcbmV4cG9ydHMudXBwZXJjYXNlTSA9IDc3IC8vIGBNYFxuZXhwb3J0cy51cHBlcmNhc2VOID0gNzggLy8gYE5gXG5leHBvcnRzLnVwcGVyY2FzZU8gPSA3OSAvLyBgT2BcbmV4cG9ydHMudXBwZXJjYXNlUCA9IDgwIC8vIGBQYFxuZXhwb3J0cy51cHBlcmNhc2VRID0gODEgLy8gYFFgXG5leHBvcnRzLnVwcGVyY2FzZVIgPSA4MiAvLyBgUmBcbmV4cG9ydHMudXBwZXJjYXNlUyA9IDgzIC8vIGBTYFxuZXhwb3J0cy51cHBlcmNhc2VUID0gODQgLy8gYFRgXG5leHBvcnRzLnVwcGVyY2FzZVUgPSA4NSAvLyBgVWBcbmV4cG9ydHMudXBwZXJjYXNlViA9IDg2IC8vIGBWYFxuZXhwb3J0cy51cHBlcmNhc2VXID0gODcgLy8gYFdgXG5leHBvcnRzLnVwcGVyY2FzZVggPSA4OCAvLyBgWGBcbmV4cG9ydHMudXBwZXJjYXNlWSA9IDg5IC8vIGBZYFxuZXhwb3J0cy51cHBlcmNhc2VaID0gOTAgLy8gYFpgXG5leHBvcnRzLmxlZnRTcXVhcmVCcmFja2V0ID0gOTEgLy8gYFtgXG5leHBvcnRzLmJhY2tzbGFzaCA9IDkyIC8vIGBcXGBcbmV4cG9ydHMucmlnaHRTcXVhcmVCcmFja2V0ID0gOTMgLy8gYF1gXG5leHBvcnRzLmNhcmV0ID0gOTQgLy8gYF5gXG5leHBvcnRzLnVuZGVyc2NvcmUgPSA5NSAvLyBgX2BcbmV4cG9ydHMuZ3JhdmVBY2NlbnQgPSA5NiAvLyBgYCBgIGBgXG5leHBvcnRzLmxvd2VyY2FzZUEgPSA5NyAvLyBgYWBcbmV4cG9ydHMubG93ZXJjYXNlQiA9IDk4IC8vIGBiYFxuZXhwb3J0cy5sb3dlcmNhc2VDID0gOTkgLy8gYGNgXG5leHBvcnRzLmxvd2VyY2FzZUQgPSAxMDAgLy8gYGRgXG5leHBvcnRzLmxvd2VyY2FzZUUgPSAxMDEgLy8gYGVgXG5leHBvcnRzLmxvd2VyY2FzZUYgPSAxMDIgLy8gYGZgXG5leHBvcnRzLmxvd2VyY2FzZUcgPSAxMDMgLy8gYGdgXG5leHBvcnRzLmxvd2VyY2FzZUggPSAxMDQgLy8gYGhgXG5leHBvcnRzLmxvd2VyY2FzZUkgPSAxMDUgLy8gYGlgXG5leHBvcnRzLmxvd2VyY2FzZUogPSAxMDYgLy8gYGpgXG5leHBvcnRzLmxvd2VyY2FzZUsgPSAxMDcgLy8gYGtgXG5leHBvcnRzLmxvd2VyY2FzZUwgPSAxMDggLy8gYGxgXG5leHBvcnRzLmxvd2VyY2FzZU0gPSAxMDkgLy8gYG1gXG5leHBvcnRzLmxvd2VyY2FzZU4gPSAxMTAgLy8gYG5gXG5leHBvcnRzLmxvd2VyY2FzZU8gPSAxMTEgLy8gYG9gXG5leHBvcnRzLmxvd2VyY2FzZVAgPSAxMTIgLy8gYHBgXG5leHBvcnRzLmxvd2VyY2FzZVEgPSAxMTMgLy8gYHFgXG5leHBvcnRzLmxvd2VyY2FzZVIgPSAxMTQgLy8gYHJgXG5leHBvcnRzLmxvd2VyY2FzZVMgPSAxMTUgLy8gYHNgXG5leHBvcnRzLmxvd2VyY2FzZVQgPSAxMTYgLy8gYHRgXG5leHBvcnRzLmxvd2VyY2FzZVUgPSAxMTcgLy8gYHVgXG5leHBvcnRzLmxvd2VyY2FzZVYgPSAxMTggLy8gYHZgXG5leHBvcnRzLmxvd2VyY2FzZVcgPSAxMTkgLy8gYHdgXG5leHBvcnRzLmxvd2VyY2FzZVggPSAxMjAgLy8gYHhgXG5leHBvcnRzLmxvd2VyY2FzZVkgPSAxMjEgLy8gYHlgXG5leHBvcnRzLmxvd2VyY2FzZVogPSAxMjIgLy8gYHpgXG5leHBvcnRzLmxlZnRDdXJseUJyYWNlID0gMTIzIC8vIGB7YFxuZXhwb3J0cy52ZXJ0aWNhbEJhciA9IDEyNCAvLyBgfGBcbmV4cG9ydHMucmlnaHRDdXJseUJyYWNlID0gMTI1IC8vIGB9YFxuZXhwb3J0cy50aWxkZSA9IDEyNiAvLyBgfmBcbmV4cG9ydHMuZGVsID0gMTI3XG4vLyBVbmljb2RlIFNwZWNpYWxzIGJsb2NrLlxuZXhwb3J0cy5ieXRlT3JkZXJNYXJrZXIgPSA2NTI3OVxuLy8gVW5pY29kZSBTcGVjaWFscyBibG9jay5cbmV4cG9ydHMucmVwbGFjZW1lbnRDaGFyYWN0ZXIgPSA2NTUzMyAvLyBg77+9YFxuIiwibW9kdWxlLmV4cG9ydHMgPSBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlXG5cbmZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkge1xuICByZXR1cm4gY29kZSA8IDAgfHwgY29kZSA9PT0gMzJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25MaW5lRW5kaW5nXG5cbmZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB7XG4gIHJldHVybiBjb2RlIDwgLTJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25TcGFjZVxuXG5mdW5jdGlvbiBtYXJrZG93blNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyXG59XG4iLCJ2YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvdW5pY29kZS1wdW5jdHVhdGlvbi1yZWdleCcpXG52YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxuLy8gU2l6ZSBub3RlOiByZW1vdmluZyBBU0NJSSBmcm9tIHRoZSByZWdleCBhbmQgdXNpbmcgYGFzY2lpLXB1bmN0dWF0aW9uYCBoZXJlXG4vLyBJbiBmYWN0IGFkZHMgdG8gdGhlIGJ1bmRsZSBzaXplLlxubW9kdWxlLmV4cG9ydHMgPSBjaGVjayh1bmljb2RlUHVuY3R1YXRpb24pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvXFxzLylcbiIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnblxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgY29tcGlsZWQgYXdheSFcbi8vXG4vLyBQYXJzaW5nIG1hcmtkb3duIGNvbWVzIHdpdGggYSBjb3VwbGUgb2YgY29uc3RhbnRzLCBzdWNoIGFzIG1pbmltdW0gb3IgbWF4aW11bVxuLy8gc2l6ZXMgb2YgY2VydGFpbiBzZXF1ZW5jZXMuXG4vLyBBZGRpdGlvbmFsbHksIHRoZXJlIGFyZSBhIGNvdXBsZSBzeW1ib2xzIHVzZWQgaW5zaWRlIG1pY3JvbWFyay5cbi8vIFRoZXNlIGFyZSBhbGwgZGVmaW5lZCBoZXJlLCBidXQgY29tcGlsZWQgYXdheSBieSBzY3JpcHRzLlxuZXhwb3J0cy5hc2NpaUFscGhhQ2FzZURpZmZlcmVuY2UgPSAzMiAvLyBUaGUgc2hpZnQgYmV0d2VlbiBsb3dlci0gYW5kIHVwcGVyY2FzZSBpcyBgMHgyMGAuXG5leHBvcnRzLmF0dGVudGlvblNpZGVCZWZvcmUgPSAxIC8vIFN5bWJvbCB0byBtYXJrIGFuIGF0dGVudGlvbiBzZXF1ZW5jZSBhcyBiZWZvcmUgY29udGVudDogYCphYFxuZXhwb3J0cy5hdHRlbnRpb25TaWRlQWZ0ZXIgPSAyIC8vIFN5bWJvbCB0byBtYXJrIGFuIGF0dGVudGlvbiBzZXF1ZW5jZSBhcyBhZnRlciBjb250ZW50OiBgYSpgXG5leHBvcnRzLmF0eEhlYWRpbmdPcGVuaW5nRmVuY2VTaXplTWF4ID0gNiAvLyA2IG51bWJlciBzaWducyBpcyBmaW5lLCA3IGlzbuKAmXQuXG5leHBvcnRzLmF1dG9saW5rRG9tYWluU2l6ZU1heCA9IDYzIC8vIDYzIGNoYXJhY3RlcnMgaXMgZmluZSwgNjQgaXMgdG9vIG1hbnkuXG5leHBvcnRzLmF1dG9saW5rU2NoZW1lU2l6ZU1heCA9IDMyIC8vIDMyIGNoYXJhY3RlcnMgaXMgZmluZSwgMzMgaXMgdG9vIG1hbnkuXG5leHBvcnRzLmNkYXRhT3BlbmluZ1N0cmluZyA9ICdDREFUQVsnIC8vIEFuZCBwcmVjZWRlZCBieSBgPCFbYC5cbmV4cG9ydHMuY2hhcmFjdGVyR3JvdXBXaGl0ZXNwYWNlID0gMSAvLyBTeW1ib2wgdXNlZCB0byBpbmRpY2F0ZSBhIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlXG5leHBvcnRzLmNoYXJhY3Rlckdyb3VwUHVuY3R1YXRpb24gPSAyIC8vIFN5bWJvbCB1c2VkIHRvIGluZGljYXRlIGEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2VcbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlRGVjaW1hbFNpemVNYXggPSA3IC8vIGAmIzk5OTk5OTk7YC5cbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlSGV4YWRlY2ltYWxTaXplTWF4ID0gNiAvLyBgJiN4ZmY5OTk5O2AuXG5leHBvcnRzLmNoYXJhY3RlclJlZmVyZW5jZU5hbWVkU2l6ZU1heCA9IDMxIC8vIGAmQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtgLlxuZXhwb3J0cy5jb2RlRmVuY2VkU2VxdWVuY2VTaXplTWluID0gMyAvLyBBdCBsZWFzdCAzIHRpY2tzIG9yIHRpbGRlcyBhcmUgbmVlZGVkLlxuZXhwb3J0cy5jb250ZW50VHlwZUZsb3cgPSAnZmxvdydcbmV4cG9ydHMuY29udGVudFR5cGVDb250ZW50ID0gJ2NvbnRlbnQnXG5leHBvcnRzLmNvbnRlbnRUeXBlU3RyaW5nID0gJ3N0cmluZydcbmV4cG9ydHMuY29udGVudFR5cGVUZXh0ID0gJ3RleHQnXG5leHBvcnRzLmhhcmRCcmVha1ByZWZpeFNpemVNaW4gPSAyIC8vIEF0IGxlYXN0IDIgdHJhaWxpbmcgc3BhY2VzIGFyZSBuZWVkZWQuXG5leHBvcnRzLmh0bWxSYXcgPSAxIC8vIFN5bWJvbCBmb3IgYDxzY3JpcHQ+YFxuZXhwb3J0cy5odG1sQ29tbWVudCA9IDIgLy8gU3ltYm9sIGZvciBgPCEtLS0tPmBcbmV4cG9ydHMuaHRtbEluc3RydWN0aW9uID0gMyAvLyBTeW1ib2wgZm9yIGA8P3BocD8+YFxuZXhwb3J0cy5odG1sRGVjbGFyYXRpb24gPSA0IC8vIFN5bWJvbCBmb3IgYDwhZG9jdHlwZT5gXG5leHBvcnRzLmh0bWxDZGF0YSA9IDUgLy8gU3ltYm9sIGZvciBgPCFbQ0RBVEFbXV0+YFxuZXhwb3J0cy5odG1sQmFzaWMgPSA2IC8vIFN5bWJvbCBmb3IgYDxkaXZgXG5leHBvcnRzLmh0bWxDb21wbGV0ZSA9IDcgLy8gU3ltYm9sIGZvciBgPHg+YFxuZXhwb3J0cy5odG1sUmF3U2l6ZU1heCA9IDYgLy8gTGVuZ3RoIG9mIGBzY3JpcHRgLlxuZXhwb3J0cy5saW5rUmVzb3VyY2VEZXN0aW5hdGlvbkJhbGFuY2VNYXggPSAzIC8vIFNlZTogPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNsaW5rLWRlc3RpbmF0aW9uPlxuZXhwb3J0cy5saW5rUmVmZXJlbmNlU2l6ZU1heCA9IDk5OSAvLyBTZWU6IDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jbGluay1sYWJlbD5cbmV4cG9ydHMubGlzdEl0ZW1WYWx1ZVNpemVNYXggPSAxMCAvLyBTZWU6IDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jb3JkZXJlZC1saXN0LW1hcmtlcj5cbmV4cG9ydHMubnVtZXJpY0Jhc2VEZWNpbWFsID0gMTBcbmV4cG9ydHMubnVtZXJpY0Jhc2VIZXhhZGVjaW1hbCA9IDB4MTBcbmV4cG9ydHMudGFiU2l6ZSA9IDQgLy8gVGFicyBoYXZlIGEgaGFyZC1jb2RlZCBzaXplIG9mIDQsIHBlciBDb21tb25NYXJrLlxuZXhwb3J0cy50aGVtYXRpY0JyZWFrTWFya2VyQ291bnRNaW4gPSAzIC8vIEF0IGxlYXN0IDMgYXN0ZXJpc2tzLCBkYXNoZXMsIG9yIHVuZGVyc2NvcmVzIGFyZSBuZWVkZWQuXG5leHBvcnRzLnY4TWF4U2FmZUNodW5rU2l6ZSA9IDEwMDAwIC8vIFY4IChhbmQgcG90ZW50aWFsbHkgb3RoZXJzKSBoYXZlIHByb2JsZW1zIGluamVjdGluZyBnaWFudCBhcnJheXMgaW50byBvdGhlciBhcnJheXMsIGhlbmNlIHdlIG9wZXJhdGUgaW4gY2h1bmtzLlxuIiwibW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9Lmhhc093blByb3BlcnR5XG4iLCIvLyBUaGlzIG1vZHVsZSBpcyBjb3BpZWQgZnJvbSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2h0bWwtYmxvY2tzPi5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cbiIsIi8vIFRoaXMgbW9kdWxlIGlzIGNvcGllZCBmcm9tIDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jaHRtbC1ibG9ja3M+LlxubW9kdWxlLmV4cG9ydHMgPSBbJ3ByZScsICdzY3JpcHQnLCAnc3R5bGUnXVxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgY29tcGlsZWQgYXdheSFcbi8vXG4vLyBIZXJlIGlzIHRoZSBsaXN0IG9mIGFsbCB0eXBlcyBvZiB0b2tlbnMgZXhwb3NlZCBieSBtaWNyb21hcmssIHdpdGggYSBzaG9ydFxuLy8gZXhwbGFuYXRpb24gb2Ygd2hhdCB0aGV5IGluY2x1ZGUgYW5kIHdoZXJlIHRoZXkgYXJlIGZvdW5kLlxuLy8gSW4gcGlja2luZyBuYW1lcywgZ2VuZXJhbGx5LCB0aGUgcnVsZSBpcyB0byBiZSBhcyBleHBsaWNpdCBhcyBwb3NzaWJsZVxuLy8gaW5zdGVhZCBvZiByZXVzaW5nIG5hbWVzLlxuLy8gRm9yIGV4YW1wbGUsIHRoZXJlIGlzIGEgYGRlZmluaXRpb25EZXN0aW5hdGlvbmAgYW5kIGEgYHJlc291cmNlRGVzdGluYXRpb25gLFxuLy8gaW5zdGVhZCBvZiBvbmUgc2hhcmVkIG5hbWUuXG5cbi8vIEdlbmVyaWMgdHlwZSBmb3IgZGF0YSwgc3VjaCBhcyBpbiBhIHRpdGxlLCBhIGRlc3RpbmF0aW9uLCBldGMuXG5leHBvcnRzLmRhdGEgPSAnZGF0YSdcblxuLy8gR2VuZXJpYyB0eXBlIGZvciBzeW50YWN0aWMgd2hpdGVzcGFjZSAodGFicywgdmlydHVhbCBzcGFjZXMsIHNwYWNlcykuXG4vLyBTdWNoIGFzLCBiZXR3ZWVuIGEgZmVuY2VkIGNvZGUgZmVuY2UgYW5kIGFuIGluZm8gc3RyaW5nLlxuZXhwb3J0cy53aGl0ZXNwYWNlID0gJ3doaXRlc3BhY2UnXG5cbi8vIEdlbmVyaWMgdHlwZSBmb3IgbGluZSBlbmRpbmdzIChsaW5lIGZlZWQsIGNhcnJpYWdlIHJldHVybiwgY2FycmlhZ2UgcmV0dXJuICtcbi8vIGxpbmUgZmVlZCkuXG5leHBvcnRzLmxpbmVFbmRpbmcgPSAnbGluZUVuZGluZydcblxuLy8gQSBsaW5lIGVuZGluZywgYnV0IGVuZGluZyBhIGJsYW5rIGxpbmUuXG5leHBvcnRzLmxpbmVFbmRpbmdCbGFuayA9ICdsaW5lRW5kaW5nQmxhbmsnXG5cbi8vIEdlbmVyaWMgdHlwZSBmb3Igd2hpdGVzcGFjZSAodGFicywgdmlydHVhbCBzcGFjZXMsIHNwYWNlcykgYXQgdGhlIHN0YXJ0IG9mIGFcbi8vIGxpbmUuXG5leHBvcnRzLmxpbmVQcmVmaXggPSAnbGluZVByZWZpeCdcblxuLy8gR2VuZXJpYyB0eXBlIGZvciB3aGl0ZXNwYWNlICh0YWJzLCB2aXJ0dWFsIHNwYWNlcywgc3BhY2VzKSBhdCB0aGUgZW5kIG9mIGFcbi8vIGxpbmUuXG5leHBvcnRzLmxpbmVTdWZmaXggPSAnbGluZVN1ZmZpeCdcblxuLy8gV2hvbGUgQVRYIGhlYWRpbmc6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICNcbi8vICMjIEFscGhhXG4vLyAjIyMgQnJhdm8gIyMjXG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyBgYXR4SGVhZGluZ1NlcXVlbmNlYCwgYHdoaXRlc3BhY2VgLCBgYXR4SGVhZGluZ1RleHRgLlxuZXhwb3J0cy5hdHhIZWFkaW5nID0gJ2F0eEhlYWRpbmcnXG5cbi8vIFNlcXVlbmNlIG9mIG51bWJlciBzaWducyBpbiBhbiBBVFggaGVhZGluZyAoYCMjI2ApLlxuZXhwb3J0cy5hdHhIZWFkaW5nU2VxdWVuY2UgPSAnYXR4SGVhZGluZ1NlcXVlbmNlJ1xuXG4vLyBDb250ZW50IGluIGFuIEFUWCBoZWFkaW5nIChgYWxwaGFgKS5cbi8vIEluY2x1ZGVzIHRleHQuXG5leHBvcnRzLmF0eEhlYWRpbmdUZXh0ID0gJ2F0eEhlYWRpbmdUZXh0J1xuXG4vLyBXaG9sZSBhdXRvbGluayAoYDxodHRwczovL2V4YW1wbGUuY29tPmAgb3IgYDxhZG1pbkBleGFtcGxlLmNvbT5gKVxuLy8gSW5jbHVkZXMgYGF1dG9saW5rTWFya2VyYCBhbmQgYGF1dG9saW5rUHJvdG9jb2xgIG9yIGBhdXRvbGlua0VtYWlsYC5cbmV4cG9ydHMuYXV0b2xpbmsgPSAnYXV0b2xpbmsnXG5cbi8vIEVtYWlsIGF1dG9saW5rIHcvbyBtYXJrZXJzIChgYWRtaW5AZXhhbXBsZS5jb21gKVxuZXhwb3J0cy5hdXRvbGlua0VtYWlsID0gJ2F1dG9saW5rRW1haWwnXG5cbi8vIE1hcmtlciBhcm91bmQgYW4gYGF1dG9saW5rUHJvdG9jb2xgIG9yIGBhdXRvbGlua0VtYWlsYCAoYDxgIG9yIGA+YCkuXG5leHBvcnRzLmF1dG9saW5rTWFya2VyID0gJ2F1dG9saW5rTWFya2VyJ1xuXG4vLyBQcm90b2NvbCBhdXRvbGluayB3L28gbWFya2VycyAoYGh0dHBzOi8vZXhhbXBsZS5jb21gKVxuZXhwb3J0cy5hdXRvbGlua1Byb3RvY29sID0gJ2F1dG9saW5rUHJvdG9jb2wnXG5cbi8vIEEgd2hvbGUgY2hhcmFjdGVyIGVzY2FwZSAoYFxcLWApLlxuLy8gSW5jbHVkZXMgYGVzY2FwZU1hcmtlcmAgYW5kIGBjaGFyYWN0ZXJFc2NhcGVWYWx1ZWAuXG5leHBvcnRzLmNoYXJhY3RlckVzY2FwZSA9ICdjaGFyYWN0ZXJFc2NhcGUnXG5cbi8vIFRoZSBlc2NhcGVkIGNoYXJhY3RlciAoYC1gKS5cbmV4cG9ydHMuY2hhcmFjdGVyRXNjYXBlVmFsdWUgPSAnY2hhcmFjdGVyRXNjYXBlVmFsdWUnXG5cbi8vIEEgd2hvbGUgY2hhcmFjdGVyIHJlZmVyZW5jZSAoYCZhbXA7YCwgYCYjODgwMDtgLCBvciBgJiN4MUQzMDY7YCkuXG4vLyBJbmNsdWRlcyBgY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyYCwgYW4gb3B0aW9uYWxcbi8vIGBjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljYCwgaW4gd2hpY2ggY2FzZSBhbiBvcHRpb25hbFxuLy8gYGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsYCwgYW5kIGEgYGNoYXJhY3RlclJlZmVyZW5jZVZhbHVlYC5cbmV4cG9ydHMuY2hhcmFjdGVyUmVmZXJlbmNlID0gJ2NoYXJhY3RlclJlZmVyZW5jZSdcblxuLy8gVGhlIHN0YXJ0IG9yIGVuZCBtYXJrZXIgKGAmYCBvciBgO2ApLlxuZXhwb3J0cy5jaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXIgPSAnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJ1xuXG4vLyBNYXJrIHJlZmVyZW5jZSBhcyBudW1lcmljIChgI2ApLlxuZXhwb3J0cy5jaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljID0gJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWMnXG5cbi8vIE1hcmsgcmVmZXJlbmNlIGFzIG51bWVyaWMgKGB4YCBvciBgWGApLlxuZXhwb3J0cy5jaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCA9XG4gICdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCdcblxuLy8gVmFsdWUgb2YgY2hhcmFjdGVyIHJlZmVyZW5jZSB3L28gbWFya2VycyAoYGFtcGAsIGA4ODAwYCwgb3IgYDFEMzA2YCkuXG5leHBvcnRzLmNoYXJhY3RlclJlZmVyZW5jZVZhbHVlID0gJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJ1xuXG4vLyBXaG9sZSBmZW5jZWQgY29kZTpcbi8vXG4vLyBgYGBgbWFya2Rvd25cbi8vIGBgYGpzXG4vLyBhbGVydCgxKVxuLy8gYGBgXG4vLyBgYGBgXG5leHBvcnRzLmNvZGVGZW5jZWQgPSAnY29kZUZlbmNlZCdcblxuLy8gQSBmZW5jZWQgY29kZSBmZW5jZSwgaW5jbHVkaW5nIHdoaXRlc3BhY2UsIHNlcXVlbmNlLCBpbmZvLCBhbmQgbWV0YVxuLy8gKGAgYGBganMgYCkuXG5leHBvcnRzLmNvZGVGZW5jZWRGZW5jZSA9ICdjb2RlRmVuY2VkRmVuY2UnXG5cbi8vIFNlcXVlbmNlIG9mIGdyYXZlIGFjY2VudCBvciB0aWxkZSBjaGFyYWN0ZXJzIChgIGBgYCBgKSBpbiBhIGZlbmNlLlxuZXhwb3J0cy5jb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZSA9ICdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZSdcblxuLy8gSW5mbyB3b3JkIChganNgKSBpbiBhIGZlbmNlLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5jb2RlRmVuY2VkRmVuY2VJbmZvID0gJ2NvZGVGZW5jZWRGZW5jZUluZm8nXG5cbi8vIE1ldGEgd29yZHMgKGBoaWdobGlnaHQ9XCIxXCJgKSBpbiBhIGZlbmNlLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5jb2RlRmVuY2VkRmVuY2VNZXRhID0gJ2NvZGVGZW5jZWRGZW5jZU1ldGEnXG5cbi8vIEEgbGluZSBvZiBjb2RlLlxuZXhwb3J0cy5jb2RlRmxvd1ZhbHVlID0gJ2NvZGVGbG93VmFsdWUnXG5cbi8vIFdob2xlIGluZGVudGVkIGNvZGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICAgICBhbGVydCgxKVxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGxpbmVFbmRpbmdgLCBgbGluZVByZWZpeGAsIGFuZCBgY29kZUZsb3dWYWx1ZWAuXG5leHBvcnRzLmNvZGVJbmRlbnRlZCA9ICdjb2RlSW5kZW50ZWQnXG5cbi8vIEEgdGV4dCBjb2RlIChgYGAgYGFscGhhYCBgYGApLlxuLy8gSW5jbHVkZXMgYGNvZGVUZXh0U2VxdWVuY2VgLCBgY29kZVRleHREYXRhYCwgYGxpbmVFbmRpbmdgLCBhbmQgY2FuIGluY2x1ZGVcbi8vIGBjb2RlVGV4dFBhZGRpbmdgLlxuZXhwb3J0cy5jb2RlVGV4dCA9ICdjb2RlVGV4dCdcblxuZXhwb3J0cy5jb2RlVGV4dERhdGEgPSAnY29kZVRleHREYXRhJ1xuXG4vLyBBIHNwYWNlIG9yIGxpbmUgZW5kaW5nIHJpZ2h0IGFmdGVyIG9yIGJlZm9yZSBhIHRpY2suXG5leHBvcnRzLmNvZGVUZXh0UGFkZGluZyA9ICdjb2RlVGV4dFBhZGRpbmcnXG5cbi8vIEEgdGV4dCBjb2RlIGZlbmNlIChgIGBgIGApLlxuZXhwb3J0cy5jb2RlVGV4dFNlcXVlbmNlID0gJ2NvZGVUZXh0U2VxdWVuY2UnXG5cbi8vIFdob2xlIGNvbnRlbnQ6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFthXTogYlxuLy8gY1xuLy8gPVxuLy8gZFxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYHBhcmFncmFwaGAgYW5kIGBkZWZpbml0aW9uYC5cbmV4cG9ydHMuY29udGVudCA9ICdjb250ZW50J1xuLy8gV2hvbGUgZGVmaW5pdGlvbjpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gW21pY3JvbWFya106IGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrXG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvbkxhYmVsYCwgYGRlZmluaXRpb25NYXJrZXJgLCBgd2hpdGVzcGFjZWAsXG4vLyBgZGVmaW5pdGlvbkRlc3RpbmF0aW9uYCwgYW5kIG9wdGlvbmFsbHkgYGxpbmVFbmRpbmdgIGFuZCBgZGVmaW5pdGlvblRpdGxlYC5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9ICdkZWZpbml0aW9uJ1xuXG4vLyBEZXN0aW5hdGlvbiBvZiBhIGRlZmluaXRpb24gKGBodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXJrL21pY3JvbWFya2Agb3Jcbi8vIGA8aHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcms+YCkuXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbGAgb3IgYGRlZmluaXRpb25EZXN0aW5hdGlvblJhd2AuXG5leHBvcnRzLmRlZmluaXRpb25EZXN0aW5hdGlvbiA9ICdkZWZpbml0aW9uRGVzdGluYXRpb24nXG5cbi8vIEVuY2xvc2VkIGRlc3RpbmF0aW9uIG9mIGEgZGVmaW5pdGlvblxuLy8gKGA8aHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcms+YCkuXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbE1hcmtlcmAgYW5kIG9wdGlvbmFsbHlcbi8vIGBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmdgLlxuZXhwb3J0cy5kZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsID0gJ2RlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWwnXG5cbi8vIE1hcmtlcnMgb2YgYW4gZW5jbG9zZWQgZGVmaW5pdGlvbiBkZXN0aW5hdGlvbiAoYDxgIG9yIGA+YCkuXG5leHBvcnRzLmRlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXIgPVxuICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbE1hcmtlcidcblxuLy8gVW5lbmNsb3NlZCBkZXN0aW5hdGlvbiBvZiBhIGRlZmluaXRpb25cbi8vIChgaHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcmtgKS5cbi8vIEluY2x1ZGVzIGBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmdgLlxuZXhwb3J0cy5kZWZpbml0aW9uRGVzdGluYXRpb25SYXcgPSAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uUmF3J1xuXG4vLyBUZXh0IGluIGFuIGRlc3RpbmF0aW9uIChgaHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcmtgKS5cbi8vIEluY2x1ZGVzIHN0cmluZy5cbmV4cG9ydHMuZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nID0gJ2RlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZydcblxuLy8gTGFiZWwgb2YgYSBkZWZpbml0aW9uIChgW21pY3JvbWFya11gKS5cbi8vIEluY2x1ZGVzIGBkZWZpbml0aW9uTGFiZWxNYXJrZXJgIGFuZCBgZGVmaW5pdGlvbkxhYmVsU3RyaW5nYC5cbmV4cG9ydHMuZGVmaW5pdGlvbkxhYmVsID0gJ2RlZmluaXRpb25MYWJlbCdcblxuLy8gTWFya2VycyBvZiBhIGRlZmluaXRpb24gbGFiZWwgKGBbYCBvciBgXWApLlxuZXhwb3J0cy5kZWZpbml0aW9uTGFiZWxNYXJrZXIgPSAnZGVmaW5pdGlvbkxhYmVsTWFya2VyJ1xuXG4vLyBWYWx1ZSBvZiBhIGRlZmluaXRpb24gbGFiZWwgKGBtaWNyb21hcmtgKS5cbi8vIEluY2x1ZGVzIHN0cmluZy5cbmV4cG9ydHMuZGVmaW5pdGlvbkxhYmVsU3RyaW5nID0gJ2RlZmluaXRpb25MYWJlbFN0cmluZydcblxuLy8gTWFya2VyIGJldHdlZW4gYSBsYWJlbCBhbmQgYSBkZXN0aW5hdGlvbiAoYDpgKS5cbmV4cG9ydHMuZGVmaW5pdGlvbk1hcmtlciA9ICdkZWZpbml0aW9uTWFya2VyJ1xuXG4vLyBUaXRsZSBvZiBhIGRlZmluaXRpb24gKGBcInhcImAsIGAneSdgLCBvciBgKHopYCkuXG4vLyBJbmNsdWRlcyBgZGVmaW5pdGlvblRpdGxlTWFya2VyYCBhbmQgb3B0aW9uYWxseSBgZGVmaW5pdGlvblRpdGxlU3RyaW5nYC5cbmV4cG9ydHMuZGVmaW5pdGlvblRpdGxlID0gJ2RlZmluaXRpb25UaXRsZSdcblxuLy8gTWFya2VyIGFyb3VuZCBhIHRpdGxlIG9mIGEgZGVmaW5pdGlvbiAoYFwiYCwgYCdgLCBgKGAsIG9yIGApYCkuXG5leHBvcnRzLmRlZmluaXRpb25UaXRsZU1hcmtlciA9ICdkZWZpbml0aW9uVGl0bGVNYXJrZXInXG5cbi8vIERhdGEgd2l0aG91dCBtYXJrZXJzIGluIGEgdGl0bGUgKGB6YCkuXG4vLyBJbmNsdWRlcyBzdHJpbmcuXG5leHBvcnRzLmRlZmluaXRpb25UaXRsZVN0cmluZyA9ICdkZWZpbml0aW9uVGl0bGVTdHJpbmcnXG5cbi8vIEVtcGhhc2lzIChgKmFscGhhKmApLlxuLy8gSW5jbHVkZXMgYGVtcGhhc2lzU2VxdWVuY2VgIGFuZCBgZW1waGFzaXNUZXh0YC5cbmV4cG9ydHMuZW1waGFzaXMgPSAnZW1waGFzaXMnXG5cbi8vIFNlcXVlbmNlIG9mIGVtcGhhc2lzIG1hcmtlcnMgKGAqYCBvciBgX2ApLlxuZXhwb3J0cy5lbXBoYXNpc1NlcXVlbmNlID0gJ2VtcGhhc2lzU2VxdWVuY2UnXG5cbi8vIEVtcGhhc2lzIHRleHQgKGBhbHBoYWApLlxuLy8gSW5jbHVkZXMgdGV4dC5cbmV4cG9ydHMuZW1waGFzaXNUZXh0ID0gJ2VtcGhhc2lzVGV4dCdcblxuLy8gVGhlIGNoYXJhY3RlciBlc2NhcGUgbWFya2VyIChgXFxgKS5cbmV4cG9ydHMuZXNjYXBlTWFya2VyID0gJ2VzY2FwZU1hcmtlcidcblxuLy8gQSBoYXJkIGJyZWFrIGNyZWF0ZWQgd2l0aCBhIGJhY2tzbGFzaCAoYFxcXFxuYCkuXG4vLyBJbmNsdWRlcyBgZXNjYXBlTWFya2VyYCAoZG9lcyBub3QgaW5jbHVkZSB0aGUgbGluZSBlbmRpbmcpXG5leHBvcnRzLmhhcmRCcmVha0VzY2FwZSA9ICdoYXJkQnJlYWtFc2NhcGUnXG5cbi8vIEEgaGFyZCBicmVhayBjcmVhdGVkIHdpdGggdHJhaWxpbmcgc3BhY2VzIChgICBcXG5gKS5cbi8vIERvZXMgbm90IGluY2x1ZGUgdGhlIGxpbmUgZW5kaW5nLlxuZXhwb3J0cy5oYXJkQnJlYWtUcmFpbGluZyA9ICdoYXJkQnJlYWtUcmFpbGluZydcblxuLy8gRmxvdyBIVE1MOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA8ZGl2XG4vLyBgYGBcbi8vXG4vLyBJbmxjdWRlcyBgbGluZUVuZGluZ2AsIGBodG1sRmxvd0RhdGFgLlxuZXhwb3J0cy5odG1sRmxvdyA9ICdodG1sRmxvdydcblxuZXhwb3J0cy5odG1sRmxvd0RhdGEgPSAnaHRtbEZsb3dEYXRhJ1xuXG4vLyBIVE1MIGluIHRleHQgKHRoZSB0YWcgaW4gYGEgPGk+IGJgKS5cbi8vIEluY2x1ZGVzIGBsaW5lRW5kaW5nYCwgYGh0bWxUZXh0RGF0YWAuXG5leHBvcnRzLmh0bWxUZXh0ID0gJ2h0bWxUZXh0J1xuXG5leHBvcnRzLmh0bWxUZXh0RGF0YSA9ICdodG1sVGV4dERhdGEnXG5cbi8vIFdob2xlIGltYWdlIChgIVthbHBoYV0oYnJhdm8pYCwgYCFbYWxwaGFdW2JyYXZvXWAsIGAhW2FscGhhXVtdYCwgb3Jcbi8vIGAhW2FscGhhXWApLlxuLy8gSW5jbHVkZXMgYGxhYmVsYCBhbmQgYW4gb3B0aW9uYWwgYHJlc291cmNlYCBvciBgcmVmZXJlbmNlYC5cbmV4cG9ydHMuaW1hZ2UgPSAnaW1hZ2UnXG5cbi8vIFdob2xlIGxpbmsgbGFiZWwgKGBbKmFscGhhKl1gKS5cbi8vIEluY2x1ZGVzIGBsYWJlbExpbmtgIG9yIGBsYWJlbEltYWdlYCwgYGxhYmVsVGV4dGAsIGFuZCBgbGFiZWxFbmRgLlxuZXhwb3J0cy5sYWJlbCA9ICdsYWJlbCdcblxuLy8gVGV4dCBpbiBhbiBsYWJlbCAoYCphbHBoYSpgKS5cbi8vIEluY2x1ZGVzIHRleHQuXG5leHBvcnRzLmxhYmVsVGV4dCA9ICdsYWJlbFRleHQnXG5cbi8vIFN0YXJ0IGEgbGluayBsYWJlbCAoYFtgKS5cbi8vIEluY2x1ZGVzIGEgYGxhYmVsTWFya2VyYC5cbmV4cG9ydHMubGFiZWxMaW5rID0gJ2xhYmVsTGluaydcblxuLy8gU3RhcnQgYW4gaW1hZ2UgbGFiZWwgKGAhW2ApLlxuLy8gSW5jbHVkZXMgYGxhYmVsSW1hZ2VNYXJrZXJgIGFuZCBgbGFiZWxNYXJrZXJgLlxuZXhwb3J0cy5sYWJlbEltYWdlID0gJ2xhYmVsSW1hZ2UnXG5cbi8vIE1hcmtlciBvZiBhIGxhYmVsIChgW2Agb3IgYF1gKS5cbmV4cG9ydHMubGFiZWxNYXJrZXIgPSAnbGFiZWxNYXJrZXInXG5cbi8vIE1hcmtlciB0byBzdGFydCBhbiBpbWFnZSAoYCFgKS5cbmV4cG9ydHMubGFiZWxJbWFnZU1hcmtlciA9ICdsYWJlbEltYWdlTWFya2VyJ1xuXG4vLyBFbmQgYSBsYWJlbCAoYF1gKS5cbi8vIEluY2x1ZGVzIGBsYWJlbE1hcmtlcmAuXG5leHBvcnRzLmxhYmVsRW5kID0gJ2xhYmVsRW5kJ1xuXG4vLyBXaG9sZSBsaW5rIChgW2FscGhhXShicmF2bylgLCBgW2FscGhhXVticmF2b11gLCBgW2FscGhhXVtdYCwgb3IgYFthbHBoYV1gKS5cbi8vIEluY2x1ZGVzIGBsYWJlbGAgYW5kIGFuIG9wdGlvbmFsIGByZXNvdXJjZWAgb3IgYHJlZmVyZW5jZWAuXG5leHBvcnRzLmxpbmsgPSAnbGluaydcblxuLy8gV2hvbGUgcGFyYWdyYXBoOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBhbHBoYVxuLy8gYnJhdm8uXG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyB0ZXh0LlxuZXhwb3J0cy5wYXJhZ3JhcGggPSAncGFyYWdyYXBoJ1xuXG4vLyBBIHJlZmVyZW5jZSAoYFthbHBoYV1gIG9yIGBbXWApLlxuLy8gSW5jbHVkZXMgYHJlZmVyZW5jZU1hcmtlcmAgYW5kIGFuIG9wdGlvbmFsIGByZWZlcmVuY2VTdHJpbmdgLlxuZXhwb3J0cy5yZWZlcmVuY2UgPSAncmVmZXJlbmNlJ1xuXG4vLyBBIHJlZmVyZW5jZSBtYXJrZXIgKGBbYCBvciBgXWApLlxuZXhwb3J0cy5yZWZlcmVuY2VNYXJrZXIgPSAncmVmZXJlbmNlTWFya2VyJ1xuXG4vLyBSZWZlcmVuY2UgdGV4dCAoYGFscGhhYCkuXG4vLyBJbmNsdWRlcyBzdHJpbmcuXG5leHBvcnRzLnJlZmVyZW5jZVN0cmluZyA9ICdyZWZlcmVuY2VTdHJpbmcnXG5cbi8vIEEgcmVzb3VyY2UgKGAoaHR0cHM6Ly9leGFtcGxlLmNvbSBcImFscGhhXCIpYCkuXG4vLyBJbmNsdWRlcyBgcmVzb3VyY2VNYXJrZXJgLCBhbiBvcHRpb25hbCBgcmVzb3VyY2VEZXN0aW5hdGlvbmAgd2l0aCBhbiBvcHRpb25hbFxuLy8gYHdoaXRlc3BhY2VgIGFuZCBgcmVzb3VyY2VUaXRsZWAuXG5leHBvcnRzLnJlc291cmNlID0gJ3Jlc291cmNlJ1xuXG4vLyBBIHJlc291cmNlIGRlc3RpbmF0aW9uIChgaHR0cHM6Ly9leGFtcGxlLmNvbWApLlxuLy8gSW5jbHVkZXMgYHJlc291cmNlRGVzdGluYXRpb25MaXRlcmFsYCBvciBgcmVzb3VyY2VEZXN0aW5hdGlvblJhd2AuXG5leHBvcnRzLnJlc291cmNlRGVzdGluYXRpb24gPSAncmVzb3VyY2VEZXN0aW5hdGlvbidcblxuLy8gQSBsaXRlcmFsIHJlc291cmNlIGRlc3RpbmF0aW9uIChgPGh0dHBzOi8vZXhhbXBsZS5jb20+YCkuXG4vLyBJbmNsdWRlcyBgcmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXJgIGFuZCBvcHRpb25hbGx5XG4vLyBgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZ2AuXG5leHBvcnRzLnJlc291cmNlRGVzdGluYXRpb25MaXRlcmFsID0gJ3Jlc291cmNlRGVzdGluYXRpb25MaXRlcmFsJ1xuXG4vLyBBIHJlc291cmNlIGRlc3RpbmF0aW9uIG1hcmtlciAoYDxgIG9yIGA+YCkuXG5leHBvcnRzLnJlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyID0gJ3Jlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJ1xuXG4vLyBBIHJhdyByZXNvdXJjZSBkZXN0aW5hdGlvbiAoYGh0dHBzOi8vZXhhbXBsZS5jb21gKS5cbi8vIEluY2x1ZGVzIGByZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nYC5cbmV4cG9ydHMucmVzb3VyY2VEZXN0aW5hdGlvblJhdyA9ICdyZXNvdXJjZURlc3RpbmF0aW9uUmF3J1xuXG4vLyBSZXNvdXJjZSBkZXN0aW5hdGlvbiB0ZXh0IChgaHR0cHM6Ly9leGFtcGxlLmNvbWApLlxuLy8gSW5jbHVkZXMgc3RyaW5nLlxuZXhwb3J0cy5yZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nID0gJ3Jlc291cmNlRGVzdGluYXRpb25TdHJpbmcnXG5cbi8vIEEgcmVzb3VyY2UgbWFya2VyIChgKGAgb3IgYClgKS5cbmV4cG9ydHMucmVzb3VyY2VNYXJrZXIgPSAncmVzb3VyY2VNYXJrZXInXG5cbi8vIEEgcmVzb3VyY2UgdGl0bGUgKGBcImFscGhhXCJgLCBgJ2FscGhhJ2AsIG9yIGAoYWxwaGEpYCkuXG4vLyBJbmNsdWRlcyBgcmVzb3VyY2VUaXRsZU1hcmtlcmAgYW5kIG9wdGlvbmFsbHkgYHJlc291cmNlVGl0bGVTdHJpbmdgLlxuZXhwb3J0cy5yZXNvdXJjZVRpdGxlID0gJ3Jlc291cmNlVGl0bGUnXG5cbi8vIEEgcmVzb3VyY2UgdGl0bGUgbWFya2VyIChgXCJgLCBgJ2AsIGAoYCwgb3IgYClgKS5cbmV4cG9ydHMucmVzb3VyY2VUaXRsZU1hcmtlciA9ICdyZXNvdXJjZVRpdGxlTWFya2VyJ1xuXG4vLyBSZXNvdXJjZSBkZXN0aW5hdGlvbiB0aXRsZSAoYGFscGhhYCkuXG4vLyBJbmNsdWRlcyBzdHJpbmcuXG5leHBvcnRzLnJlc291cmNlVGl0bGVTdHJpbmcgPSAncmVzb3VyY2VUaXRsZVN0cmluZydcblxuLy8gV2hvbGUgc2V0ZXh0IGhlYWRpbmc6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIGFscGhhXG4vLyBicmF2b1xuLy8gPT09PT1cbi8vIGBgYFxuLy9cbi8vIEluY2x1ZGVzIGBzZXRleHRIZWFkaW5nVGV4dGAsIGBsaW5lRW5kaW5nYCwgYGxpbmVQcmVmaXhgLCBhbmRcbi8vIGBzZXRleHRIZWFkaW5nTGluZWAuXG5leHBvcnRzLnNldGV4dEhlYWRpbmcgPSAnc2V0ZXh0SGVhZGluZydcblxuLy8gQ29udGVudCBpbiBhIHNldGV4dCBoZWFkaW5nIChgYWxwaGFcXG5icmF2b2ApLlxuLy8gSW5jbHVkZXMgdGV4dC5cbmV4cG9ydHMuc2V0ZXh0SGVhZGluZ1RleHQgPSAnc2V0ZXh0SGVhZGluZ1RleHQnXG5cbi8vIFVuZGVybGluZSBpbiBhIHNldGV4dCBoZWFkaW5nLCBpbmNsdWRpbmcgd2hpdGVzcGFjZSBzdWZmaXggKGA9PWApLlxuLy8gSW5jbHVkZXMgYHNldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2VgLlxuZXhwb3J0cy5zZXRleHRIZWFkaW5nTGluZSA9ICdzZXRleHRIZWFkaW5nTGluZSdcblxuLy8gU2VxdWVuY2Ugb2YgZXF1YWxzIG9yIGRhc2ggY2hhcmFjdGVycyBpbiB1bmRlcmxpbmUgaW4gYSBzZXRleHQgaGVhZGluZyAoYC1gKS5cbmV4cG9ydHMuc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZSA9ICdzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlJ1xuXG4vLyBTdHJvbmcgKGAqKmFscGhhKipgKS5cbi8vIEluY2x1ZGVzIGBzdHJvbmdTZXF1ZW5jZWAgYW5kIGBzdHJvbmdUZXh0YC5cbmV4cG9ydHMuc3Ryb25nID0gJ3N0cm9uZydcblxuLy8gU2VxdWVuY2Ugb2Ygc3Ryb25nIG1hcmtlcnMgKGAqKmAgb3IgYF9fYCkuXG5leHBvcnRzLnN0cm9uZ1NlcXVlbmNlID0gJ3N0cm9uZ1NlcXVlbmNlJ1xuXG4vLyBTdHJvbmcgdGV4dCAoYGFscGhhYCkuXG4vLyBJbmNsdWRlcyB0ZXh0LlxuZXhwb3J0cy5zdHJvbmdUZXh0ID0gJ3N0cm9uZ1RleHQnXG5cbi8vIFdob2xlIHRoZW1hdGljIGJyZWFrOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqICogKlxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYHRoZW1hdGljQnJlYWtTZXF1ZW5jZWAgYW5kIGB3aGl0ZXNwYWNlYC5cbmV4cG9ydHMudGhlbWF0aWNCcmVhayA9ICd0aGVtYXRpY0JyZWFrJ1xuXG4vLyBBIHNlcXVlbmNlIG9mIG9uZSBvciBtb3JlIHRoZW1hdGljIGJyZWFrIG1hcmtlcnMgKGAqKipgKS5cbmV4cG9ydHMudGhlbWF0aWNCcmVha1NlcXVlbmNlID0gJ3RoZW1hdGljQnJlYWtTZXF1ZW5jZSdcblxuLy8gV2hvbGUgYmxvY2sgcXVvdGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vID4gYVxuLy8gPlxuLy8gPiBiXG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyBgYmxvY2tRdW90ZVByZWZpeGAgYW5kIGZsb3cuXG5leHBvcnRzLmJsb2NrUXVvdGUgPSAnYmxvY2tRdW90ZSdcbi8vIFRoZSBgPmAgb3IgYD4gYCBvZiBhIGJsb2NrIHF1b3RlLlxuZXhwb3J0cy5ibG9ja1F1b3RlUHJlZml4ID0gJ2Jsb2NrUXVvdGVQcmVmaXgnXG4vLyBUaGUgYD5gIG9mIGEgYmxvY2sgcXVvdGUgcHJlZml4LlxuZXhwb3J0cy5ibG9ja1F1b3RlTWFya2VyID0gJ2Jsb2NrUXVvdGVNYXJrZXInXG4vLyBUaGUgb3B0aW9uYWwgYCBgIG9mIGEgYmxvY2sgcXVvdGUgcHJlZml4LlxuZXhwb3J0cy5ibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZSA9ICdibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZSdcblxuLy8gV2hvbGUgdW5vcmRlcmVkIGxpc3Q6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIC0gYVxuLy8gICBiXG4vLyBgYGBcbi8vXG4vLyBJbmNsdWRlcyBgbGlzdEl0ZW1QcmVmaXhgLCBmbG93LCBhbmQgb3B0aW9uYWxseSAgYGxpc3RJdGVtSW5kZW50YCBvbiBmdXJ0aGVyXG4vLyBsaW5lcy5cbmV4cG9ydHMubGlzdE9yZGVyZWQgPSAnbGlzdE9yZGVyZWQnXG5cbi8vIFdob2xlIG9yZGVyZWQgbGlzdDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gMS4gYVxuLy8gICAgYlxuLy8gYGBgXG4vL1xuLy8gSW5jbHVkZXMgYGxpc3RJdGVtUHJlZml4YCwgZmxvdywgYW5kIG9wdGlvbmFsbHkgIGBsaXN0SXRlbUluZGVudGAgb24gZnVydGhlclxuLy8gbGluZXMuXG5leHBvcnRzLmxpc3RVbm9yZGVyZWQgPSAnbGlzdFVub3JkZXJlZCdcblxuLy8gVGhlIGluZGVudCBvZiBmdXJ0aGVyIGxpc3QgaXRlbSBsaW5lcy5cbmV4cG9ydHMubGlzdEl0ZW1JbmRlbnQgPSAnbGlzdEl0ZW1JbmRlbnQnXG5cbi8vIEEgbWFya2VyLCBhcyBpbiwgYCpgLCBgK2AsIGAtYCwgYC5gLCBvciBgKWAuXG5leHBvcnRzLmxpc3RJdGVtTWFya2VyID0gJ2xpc3RJdGVtTWFya2VyJ1xuXG4vLyBUaGUgdGhpbmcgdGhhdCBzdGFydHMgYSBsaXN0IGl0ZW0sIHN1Y2ggYXMgYDEuIGAuXG4vLyBJbmNsdWRlcyBgbGlzdEl0ZW1WYWx1ZWAgaWYgb3JkZXJlZCwgYGxpc3RJdGVtTWFya2VyYCwgYW5kXG4vLyBgbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlYCAodW5sZXNzIGZvbGxvd2VkIGJ5IGEgbGluZSBlbmRpbmcpLlxuZXhwb3J0cy5saXN0SXRlbVByZWZpeCA9ICdsaXN0SXRlbVByZWZpeCdcblxuLy8gVGhlIHdoaXRlc3BhY2UgYWZ0ZXIgYSBtYXJrZXIuXG5leHBvcnRzLmxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZSA9ICdsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UnXG5cbi8vIFRoZSBudW1lcmljYWwgdmFsdWUgb2YgYW4gb3JkZXJlZCBpdGVtLlxuZXhwb3J0cy5saXN0SXRlbVZhbHVlID0gJ2xpc3RJdGVtVmFsdWUnXG5cbi8vIEludGVybmFsIHR5cGVzIHVzZWQgZm9yIHN1YnRva2VuaXplcnMsIGNvbXBpbGVkIGF3YXlcbmV4cG9ydHMuY2h1bmtDb250ZW50ID0gJ2NodW5rQ29udGVudCdcbmV4cG9ydHMuY2h1bmtGbG93ID0gJ2NodW5rRmxvdydcbmV4cG9ydHMuY2h1bmtUZXh0ID0gJ2NodW5rVGV4dCdcbmV4cG9ydHMuY2h1bmtTdHJpbmcgPSAnY2h1bmtTdHJpbmcnXG4iLCIvLyBUaGlzIG1vZHVsZSBpcyBnZW5lcmF0ZWQgYnkgYHNjcmlwdC9gLlxuLy9cbi8vIENvbW1vbk1hcmsgaGFuZGxlcyBhdHRlbnRpb24gKGVtcGhhc2lzLCBzdHJvbmcpIG1hcmtlcnMgYmFzZWQgb24gd2hhdCBjb21lc1xuLy8gYmVmb3JlIG9yIGFmdGVyIHRoZW0uXG4vLyBPbmUgc3VjaCBkaWZmZXJlbmNlIGlzIGlmIHRob3NlIGNoYXJhY3RlcnMgYXJlIFVuaWNvZGUgcHVuY3R1YXRpb24uXG4vLyBUaGlzIHNjcmlwdCBpcyBnZW5lcmF0ZWQgZnJvbSB0aGUgVW5pY29kZSBkYXRhLlxubW9kdWxlLmV4cG9ydHMgPSAvWyEtXFwvOi1AXFxbLWBcXHstflxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTA5RkRcXHUwQTc2XFx1MEFGMFxcdTBDNzdcXHUwQzg0XFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGMTRcXHUwRjNBLVxcdTBGM0RcXHUwRjg1XFx1MEZEMC1cXHUwRkQ0XFx1MEZEOVxcdTBGREFcXHUxMDRBLVxcdTEwNEZcXHUxMEZCXFx1MTM2MC1cXHUxMzY4XFx1MTQwMFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNEZcXHUyRTUyXFx1MzAwMS1cXHUzMDAzXFx1MzAwOC1cXHUzMDExXFx1MzAxNC1cXHUzMDFGXFx1MzAzMFxcdTMwM0RcXHUzMEEwXFx1MzBGQlxcdUE0RkVcXHVBNEZGXFx1QTYwRC1cXHVBNjBGXFx1QTY3M1xcdUE2N0VcXHVBNkYyLVxcdUE2RjdcXHVBODc0LVxcdUE4NzdcXHVBOENFXFx1QThDRlxcdUE4RjgtXFx1QThGQVxcdUE4RkNcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUFGMFxcdUFBRjFcXHVBQkVCXFx1RkQzRVxcdUZEM0ZcXHVGRTEwLVxcdUZFMTlcXHVGRTMwLVxcdUZFNTJcXHVGRTU0LVxcdUZFNjFcXHVGRTYzXFx1RkU2OFxcdUZFNkFcXHVGRTZCXFx1RkYwMS1cXHVGRjAzXFx1RkYwNS1cXHVGRjBBXFx1RkYwQy1cXHVGRjBGXFx1RkYxQVxcdUZGMUJcXHVGRjFGXFx1RkYyMFxcdUZGM0ItXFx1RkYzRFxcdUZGM0ZcXHVGRjVCXFx1RkY1RFxcdUZGNUYtXFx1RkY2NV0vXG4iLCJ2YXIgYXR0ZW50aW9uID0gcmVxdWlyZSgnLi90b2tlbml6ZS9hdHRlbnRpb24nKVxudmFyIGhlYWRpbmdBdHggPSByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctYXR4JylcbnZhciBhdXRvbGluayA9IHJlcXVpcmUoJy4vdG9rZW5pemUvYXV0b2xpbmsnKVxudmFyIGxpc3QgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xpc3QnKVxudmFyIGJsb2NrUXVvdGUgPSByZXF1aXJlKCcuL3Rva2VuaXplL2Jsb2NrLXF1b3RlJylcbnZhciBjaGFyYWN0ZXJFc2NhcGUgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NoYXJhY3Rlci1lc2NhcGUnKVxudmFyIGNoYXJhY3RlclJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvY2hhcmFjdGVyLXJlZmVyZW5jZScpXG52YXIgY29kZUZlbmNlZCA9IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1mZW5jZWQnKVxudmFyIGNvZGVJbmRlbnRlZCA9IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmRlbnRlZCcpXG52YXIgY29kZVRleHQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtdGV4dCcpXG52YXIgZGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVmaW5pdGlvbicpXG52YXIgaGFyZEJyZWFrRXNjYXBlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9oYXJkLWJyZWFrLWVzY2FwZScpXG52YXIgaHRtbEZsb3cgPSByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtZmxvdycpXG52YXIgaHRtbFRleHQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtdGV4dCcpXG52YXIgbGFiZWxFbmQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLWVuZCcpXG52YXIgbGFiZWxJbWFnZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvbGFiZWwtc3RhcnQtaW1hZ2UnKVxudmFyIGxhYmVsTGluayA9IHJlcXVpcmUoJy4vdG9rZW5pemUvbGFiZWwtc3RhcnQtbGluaycpXG52YXIgc2V0ZXh0VW5kZXJsaW5lID0gcmVxdWlyZSgnLi90b2tlbml6ZS9zZXRleHQtdW5kZXJsaW5lJylcbnZhciB0aGVtYXRpY0JyZWFrID0gcmVxdWlyZSgnLi90b2tlbml6ZS90aGVtYXRpYy1icmVhaycpXG52YXIgbGluZUVuZGluZyA9IHJlcXVpcmUoJy4vdG9rZW5pemUvbGluZS1lbmRpbmcnKVxudmFyIHJlc29sdmVUZXh0ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL3RleHQnKS5yZXNvbHZlclxuXG5leHBvcnRzLmRvY3VtZW50ID0ge1xuICA0MjogbGlzdCwgLy8gQXN0ZXJpc2tcbiAgNDM6IGxpc3QsIC8vIFBsdXMgc2lnblxuICA0NTogbGlzdCwgLy8gRGFzaFxuICA0ODogbGlzdCwgLy8gMFxuICA0OTogbGlzdCwgLy8gMVxuICA1MDogbGlzdCwgLy8gMlxuICA1MTogbGlzdCwgLy8gM1xuICA1MjogbGlzdCwgLy8gNFxuICA1MzogbGlzdCwgLy8gNVxuICA1NDogbGlzdCwgLy8gNlxuICA1NTogbGlzdCwgLy8gN1xuICA1NjogbGlzdCwgLy8gOFxuICA1NzogbGlzdCwgLy8gOVxuICA2MjogYmxvY2tRdW90ZSAvLyBHcmVhdGVyIHRoYW5cbn1cblxuZXhwb3J0cy5jb250ZW50SW5pdGlhbCA9IHtcbiAgOTE6IGRlZmluaXRpb24gLy8gTGVmdCBzcXVhcmUgYnJhY2tldFxufVxuXG5leHBvcnRzLmZsb3dJbml0aWFsID0ge1xuICAnLTInOiBjb2RlSW5kZW50ZWQsIC8vIEhvcml6b250YWwgdGFiXG4gICctMSc6IGNvZGVJbmRlbnRlZCwgLy8gVmlydHVhbCBzcGFjZVxuICAzMjogY29kZUluZGVudGVkIC8vIFNwYWNlXG59XG5cbmV4cG9ydHMuZmxvdyA9IHtcbiAgMzU6IGhlYWRpbmdBdHgsIC8vIE51bWJlciBzaWduXG4gIDQyOiB0aGVtYXRpY0JyZWFrLCAvLyBBc3Rlcmlza1xuICA0NTogW3NldGV4dFVuZGVybGluZSwgdGhlbWF0aWNCcmVha10sIC8vIERhc2hcbiAgNjA6IGh0bWxGbG93LCAvLyBMZXNzIHRoYW5cbiAgNjE6IHNldGV4dFVuZGVybGluZSwgLy8gRXF1YWxzIHRvXG4gIDk1OiB0aGVtYXRpY0JyZWFrLCAvLyBVbmRlcnNjb3JlXG4gIDk2OiBjb2RlRmVuY2VkLCAvLyBHcmF2ZSBhY2NlbnRcbiAgMTI2OiBjb2RlRmVuY2VkIC8vIFRpbGRlXG59XG5cbmV4cG9ydHMuc3RyaW5nID0ge1xuICAzODogY2hhcmFjdGVyUmVmZXJlbmNlLCAvLyBBbXBlcnNhbmRcbiAgOTI6IGNoYXJhY3RlckVzY2FwZSAvLyBCYWNrc2xhc2hcbn1cblxuZXhwb3J0cy50ZXh0ID0ge1xuICAnLTUnOiBsaW5lRW5kaW5nLCAvLyBDYXJyaWFnZSByZXR1cm5cbiAgJy00JzogbGluZUVuZGluZywgLy8gTGluZSBmZWVkXG4gICctMyc6IGxpbmVFbmRpbmcsIC8vIENhcnJpYWdlIHJldHVybiArIGxpbmUgZmVlZFxuICAzMzogbGFiZWxJbWFnZSwgLy8gRXhjbGFtYXRpb24gbWFya1xuICAzODogY2hhcmFjdGVyUmVmZXJlbmNlLCAvLyBBbXBlcnNhbmRcbiAgNDI6IGF0dGVudGlvbiwgLy8gQXN0ZXJpc2tcbiAgNjA6IFthdXRvbGluaywgaHRtbFRleHRdLCAvLyBMZXNzIHRoYW5cbiAgOTE6IGxhYmVsTGluaywgLy8gTGVmdCBzcXVhcmUgYnJhY2tldFxuICA5MjogW2hhcmRCcmVha0VzY2FwZSwgY2hhcmFjdGVyRXNjYXBlXSwgLy8gQmFja3NsYXNoXG4gIDkzOiBsYWJlbEVuZCwgLy8gUmlnaHQgc3F1YXJlIGJyYWNrZXRcbiAgOTU6IGF0dGVudGlvbiwgLy8gVW5kZXJzY29yZVxuICA5NjogY29kZVRleHQgLy8gR3JhdmUgYWNjZW50XG59XG5cbmV4cG9ydHMuaW5zaWRlU3BhbiA9IHtcbiAgbnVsbDogW2F0dGVudGlvbiwgcmVzb2x2ZVRleHRdXG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gaW5pdGlhbGl6ZUNvbnRlbnRcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGVudChlZmZlY3RzKSB7XG4gIHZhciBjb250ZW50U3RhcnQgPSBlZmZlY3RzLmF0dGVtcHQoXG4gICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5jb250ZW50SW5pdGlhbCxcbiAgICBhZnRlckNvbnRlbnRTdGFydENvbnN0cnVjdCxcbiAgICBwYXJhZ3JhcGhJbml0aWFsXG4gIClcblxuICB2YXIgcHJldmlvdXNcblxuICByZXR1cm4gY29udGVudFN0YXJ0XG5cbiAgZnVuY3Rpb24gYWZ0ZXJDb250ZW50U3RhcnRDb25zdHJ1Y3QoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGNvbnRlbnRTdGFydCwgJ2xpbmVQcmVmaXgnKVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyYWdyYXBoSW5pdGlhbChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncGFyYWdyYXBoJylcbiAgICByZXR1cm4gbGluZVN0YXJ0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsaW5lU3RhcnQoY29kZSkge1xuICAgIHZhciB0b2tlbiA9IGVmZmVjdHMuZW50ZXIoJ2NodW5rVGV4dCcsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCcsXG4gICAgICBwcmV2aW91czogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5uZXh0ID0gdG9rZW5cbiAgICB9XG5cbiAgICBwcmV2aW91cyA9IHRva2VuXG5cbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtUZXh0JylcbiAgICAgIGVmZmVjdHMuZXhpdCgncGFyYWdyYXBoJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rVGV4dCcpXG4gICAgICByZXR1cm4gbGluZVN0YXJ0XG4gICAgfVxuXG4gICAgLy8gRGF0YS5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gaW5pdGlhbGl6ZURvY3VtZW50XG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9mYWN0b3J5LXNwYWNlJylcbnZhciBibGFuayA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL3BhcnRpYWwtYmxhbmstbGluZScpXG5cbnZhciBjb250YWluZXIgPSB7dG9rZW5pemU6IHRva2VuaXplQ29udGFpbmVyfVxudmFyIGxhenlGbG93ID0ge3Rva2VuaXplOiB0b2tlbml6ZUxhenlGbG93fVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRG9jdW1lbnQoZWZmZWN0cykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGNvbnRpbnVlZCA9IDBcbiAgdmFyIGluc3BlY3RSZXN1bHRcbiAgdmFyIGNoaWxkRmxvd1xuICB2YXIgY2hpbGRUb2tlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29udGludWVkIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbY29udGludWVkXVsxXVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgc3RhY2tbY29udGludWVkXVswXS5jb250aW51YXRpb24sXG4gICAgICAgIGRvY3VtZW50Q29udGludWUsXG4gICAgICAgIGRvY3VtZW50Q29udGludWVkXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50Q29udGludWVkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb2N1bWVudENvbnRpbnVlKGNvZGUpIHtcbiAgICBjb250aW51ZWQrK1xuICAgIHJldHVybiBzdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZWQoY29kZSkge1xuICAgIC8vIElmIHdl4oCZcmUgaW4gYSBjb25jcmV0ZSBjb25zdHJ1Y3QgKHN1Y2ggYXMgd2hlbiBleHBlY3RpbmcgYW5vdGhlciBsaW5lIG9mXG4gICAgLy8gSFRNTCwgb3Igd2UgcmVzdWx0ZWQgaW4gbGF6eSBjb250ZW50KSwgd2UgY2FuIGltbWVkaWF0ZWx5IHN0YXJ0IGZsb3cuXG4gICAgaWYgKGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5mbG93Q29udGludWUpIHtcbiAgICAgIHJldHVybiBmbG93U3RhcnQoY29kZSlcbiAgICB9XG5cbiAgICBzZWxmLmludGVycnVwdCA9XG4gICAgICBjaGlsZEZsb3cgJiZcbiAgICAgIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmXG4gICAgICBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5pbnRlcnJ1cHRpYmxlXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHt9XG4gICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChjb250YWluZXIsIGNvbnRhaW5lckNvbnRpbnVlLCBmbG93U3RhcnQpKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluZXJDb250aW51ZShjb2RlKSB7XG4gICAgc3RhY2sucHVzaChbc2VsZi5jdXJyZW50Q29uc3RydWN0LCBzZWxmLmNvbnRhaW5lclN0YXRlXSlcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGRvY3VtZW50Q29udGludWVkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmbG93U3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBleGl0Q29udGFpbmVycygwLCB0cnVlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjaGlsZEZsb3cgPSBjaGlsZEZsb3cgfHwgc2VsZi5wYXJzZXIuZmxvdyhzZWxmLm5vdygpKVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtGbG93Jywge1xuICAgICAgY29udGVudFR5cGU6ICdmbG93JyxcbiAgICAgIHByZXZpb3VzOiBjaGlsZFRva2VuLFxuICAgICAgX3Rva2VuaXplcjogY2hpbGRGbG93XG4gICAgfSlcblxuICAgIHJldHVybiBmbG93Q29udGludWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsb3dDb250aW51ZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlRmxvdyhlZmZlY3RzLmV4aXQoJ2NodW5rRmxvdycpKVxuICAgICAgcmV0dXJuIGZsb3dTdGFydChjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgY29udGludWVGbG93KGVmZmVjdHMuZXhpdCgnY2h1bmtGbG93JykpXG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAge3Rva2VuaXplOiB0b2tlbml6ZUluc3BlY3QsIHBhcnRpYWw6IHRydWV9LFxuICAgICAgICBkb2N1bWVudEFmdGVyUGVla1xuICAgICAgKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBmbG93Q29udGludWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvY3VtZW50QWZ0ZXJQZWVrKGNvZGUpIHtcbiAgICBleGl0Q29udGFpbmVycyhcbiAgICAgIGluc3BlY3RSZXN1bHQuY29udGludWVkLFxuICAgICAgaW5zcGVjdFJlc3VsdCAmJiBpbnNwZWN0UmVzdWx0LmZsb3dFbmRcbiAgICApXG5cbiAgICBjb250aW51ZWQgPSAwXG4gICAgcmV0dXJuIHN0YXJ0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51ZUZsb3codG9rZW4pIHtcbiAgICBpZiAoY2hpbGRUb2tlbikgY2hpbGRUb2tlbi5uZXh0ID0gdG9rZW5cbiAgICBjaGlsZFRva2VuID0gdG9rZW5cbiAgICBjaGlsZEZsb3cubGF6eSA9IGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5sYXp5XG4gICAgY2hpbGRGbG93LmRlZmluZVNraXAodG9rZW4uc3RhcnQpXG4gICAgY2hpbGRGbG93LndyaXRlKHNlbGYuc2xpY2VTdHJlYW0odG9rZW4pKVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdENvbnRhaW5lcnMoc2l6ZSwgZW5kKSB7XG4gICAgdmFyIGluZGV4ID0gc3RhY2subGVuZ3RoXG5cbiAgICAvLyBDbG9zZSB0aGUgZmxvdy5cbiAgICBpZiAoY2hpbGRGbG93ICYmIGVuZCkge1xuICAgICAgY2hpbGRGbG93LndyaXRlKFtudWxsXSlcbiAgICAgIGNoaWxkVG9rZW4gPSBjaGlsZEZsb3cgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvLyBFeGl0IG9wZW4gY29udGFpbmVycy5cbiAgICB3aGlsZSAoaW5kZXgtLSA+IHNpemUpIHtcbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSBzdGFja1tpbmRleF1bMV1cbiAgICAgIHN0YWNrW2luZGV4XVswXS5leGl0LmNhbGwoc2VsZiwgZWZmZWN0cylcbiAgICB9XG5cbiAgICBzdGFjay5sZW5ndGggPSBzaXplXG4gIH1cblxuICBmdW5jdGlvbiB0b2tlbml6ZUluc3BlY3QoZWZmZWN0cywgb2spIHtcbiAgICB2YXIgc3ViY29udGludWVkID0gMFxuXG4gICAgaW5zcGVjdFJlc3VsdCA9IHt9XG5cbiAgICByZXR1cm4gaW5zcGVjdFN0YXJ0XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0U3RhcnQoY29kZSkge1xuICAgICAgaWYgKHN1YmNvbnRpbnVlZCA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbc3ViY29udGludWVkXVsxXVxuICAgICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHN0YWNrW3N1YmNvbnRpbnVlZF1bMF0uY29udGludWF0aW9uLFxuICAgICAgICAgIGluc3BlY3RDb250aW51ZSxcbiAgICAgICAgICBpbnNwZWN0TGVzc1xuICAgICAgICApKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdl4oCZcmUgY29udGludWVkIGJ1dCBpbiBhIGNvbmNyZXRlIGZsb3csIHdlIGNhbuKAmXQgaGF2ZSBtb3JlXG4gICAgICAvLyBjb250YWluZXJzLlxuICAgICAgaWYgKGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0LmNvbmNyZXRlKSB7XG4gICAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlID0gdHJ1ZVxuICAgICAgICByZXR1cm4gaW5zcGVjdERvbmUoY29kZSlcbiAgICAgIH1cblxuICAgICAgc2VsZi5pbnRlcnJ1cHQgPVxuICAgICAgICBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJiBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5pbnRlcnJ1cHRpYmxlXG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0ge31cbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoY29udGFpbmVyLCBpbnNwZWN0Rmxvd0VuZCwgaW5zcGVjdERvbmUpKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdENvbnRpbnVlKGNvZGUpIHtcbiAgICAgIHN1YmNvbnRpbnVlZCsrXG4gICAgICByZXR1cm4gc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93XG4gICAgICAgID8gaW5zcGVjdEZsb3dFbmQoY29kZSlcbiAgICAgICAgOiBpbnNwZWN0U3RhcnQoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0TGVzcyhjb2RlKSB7XG4gICAgICBpZiAoY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QubGF6eSkge1xuICAgICAgICAvLyBNYXliZSBhbm90aGVyIGNvbnRhaW5lcj9cbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHt9XG4gICAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgIGluc3BlY3RGbG93RW5kLFxuICAgICAgICAgIC8vIE1heWJlIGZsb3csIG9yIGEgYmxhbmsgbGluZT9cbiAgICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgICBsYXp5RmxvdyxcbiAgICAgICAgICAgIGluc3BlY3RGbG93RW5kLFxuICAgICAgICAgICAgZWZmZWN0cy5jaGVjayhibGFuaywgaW5zcGVjdEZsb3dFbmQsIGluc3BlY3RMYXp5KVxuICAgICAgICAgIClcbiAgICAgICAgKShjb2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2Ugd2XigJlyZSBpbnRlcnJ1cHRpbmcuXG4gICAgICByZXR1cm4gaW5zcGVjdEZsb3dFbmQoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0TGF6eShjb2RlKSB7XG4gICAgICAvLyBBY3QgYXMgaWYgYWxsIGNvbnRhaW5lcnMgYXJlIGNvbnRpbnVlZC5cbiAgICAgIHN1YmNvbnRpbnVlZCA9IHN0YWNrLmxlbmd0aFxuICAgICAgaW5zcGVjdFJlc3VsdC5sYXp5ID0gdHJ1ZVxuICAgICAgaW5zcGVjdFJlc3VsdC5mbG93Q29udGludWUgPSB0cnVlXG4gICAgICByZXR1cm4gaW5zcGVjdERvbmUoY29kZSlcbiAgICB9XG5cbiAgICAvLyBXZeKAmXJlIGRvbmUgd2l0aCBmbG93IGlmIHdlIGhhdmUgbW9yZSBjb250YWluZXJzLCBvciBhbiBpbnRlcnJ1cHRpb24uXG4gICAgZnVuY3Rpb24gaW5zcGVjdEZsb3dFbmQoY29kZSkge1xuICAgICAgaW5zcGVjdFJlc3VsdC5mbG93RW5kID0gdHJ1ZVxuICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdERvbmUoY29kZSkge1xuICAgICAgaW5zcGVjdFJlc3VsdC5jb250aW51ZWQgPSBzdWJjb250aW51ZWRcbiAgICAgIHNlbGYuaW50ZXJydXB0ID0gc2VsZi5jb250YWluZXJTdGF0ZSA9IHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29udGFpbmVyKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgZWZmZWN0cy5hdHRlbXB0KHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZG9jdW1lbnQsIG9rLCBub2spLFxuICAgICdsaW5lUHJlZml4JyxcbiAgICA0XG4gIClcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMYXp5RmxvdyhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGVmZmVjdHMubGF6eSh0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3csIG9rLCBub2spLFxuICAgICdsaW5lUHJlZml4JyxcbiAgICA0XG4gIClcbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSBpbml0aWFsaXplRmxvd1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvZmFjdG9yeS1zcGFjZScpXG52YXIgYmxhbmsgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9wYXJ0aWFsLWJsYW5rLWxpbmUnKVxudmFyIGNvbnRlbnQgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9jb250ZW50JylcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZsb3coZWZmZWN0cykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluaXRpYWwgPSBlZmZlY3RzLmF0dGVtcHQoXG4gICAgLy8gVHJ5IHRvIHBhcnNlIGEgYmxhbmsgbGluZS5cbiAgICBibGFuayxcbiAgICBhdEJsYW5rRW5kaW5nLFxuICAgIC8vIFRyeSB0byBwYXJzZSBpbml0aWFsIGZsb3cgKGVzc2VudGlhbGx5LCBvbmx5IGNvZGUpLlxuICAgIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZmxvd0luaXRpYWwsXG4gICAgICBhZnRlckNvbnN0cnVjdCxcbiAgICAgIGNyZWF0ZVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93LFxuICAgICAgICAgIGFmdGVyQ29uc3RydWN0LFxuICAgICAgICAgIGVmZmVjdHMuYXR0ZW1wdChjb250ZW50LCBhZnRlckNvbnN0cnVjdClcbiAgICAgICAgKSxcbiAgICAgICAgJ2xpbmVQcmVmaXgnXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIGluaXRpYWxcblxuICBmdW5jdGlvbiBhdEJsYW5rRW5kaW5nKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZ0JsYW5rJylcbiAgICBzZWxmLmN1cnJlbnRDb25zdHJ1Y3QgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gaW5pdGlhbFxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJDb25zdHJ1Y3QoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgc2VsZi5jdXJyZW50Q29uc3RydWN0ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGluaXRpYWxcbiAgfVxufVxuIiwiZXhwb3J0cy50ZXh0ID0gaW5pdGlhbGl6ZUZhY3RvcnkoJ3RleHQnKVxuZXhwb3J0cy5zdHJpbmcgPSBpbml0aWFsaXplRmFjdG9yeSgnc3RyaW5nJylcbmV4cG9ydHMucmVzb2x2ZXIgPSB7cmVzb2x2ZUFsbDogcmVzb2x2ZXIoKX1cblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Fzc2lnbicpXG5cbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93JylcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZhY3RvcnkoZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbml6ZTogaW5pdGlhbGl6ZVRleHQsXG4gICAgcmVzb2x2ZUFsbDogcmVzb2x2ZXIoZmllbGQgPT09ICd0ZXh0JyA/IHJlc29sdmVBbGxMaW5lU3VmZml4ZXMgOiB1bmRlZmluZWQpXG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplVGV4dChlZmZlY3RzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGNvbnN0cnVjdHMgPSB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzW2ZpZWxkXVxuICAgIHZhciB0ZXh0ID0gZWZmZWN0cy5hdHRlbXB0KGNvbnN0cnVjdHMsIHN0YXJ0LCBub3RUZXh0KVxuXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKSA/IHRleHQoY29kZSkgOiBub3RUZXh0KGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90VGV4dChjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2RhdGEnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgICAgaWYgKGF0QnJlYWsoY29kZSkpIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdkYXRhJylcbiAgICAgICAgcmV0dXJuIHRleHQoY29kZSlcbiAgICAgIH1cblxuICAgICAgLy8gRGF0YS5cbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICAgIHZhciBsaXN0ID0gY29uc3RydWN0c1tjb2RlXVxuICAgICAgdmFyIGluZGV4ID0gLTFcblxuICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFsaXN0W2luZGV4XS5wcmV2aW91cyB8fFxuICAgICAgICAgICAgbGlzdFtpbmRleF0ucHJldmlvdXMuY2FsbChzZWxmLCBzZWxmLnByZXZpb3VzKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZXIoZXh0cmFSZXNvbHZlcikge1xuICByZXR1cm4gcmVzb2x2ZUFsbFRleHRcblxuICBmdW5jdGlvbiByZXNvbHZlQWxsVGV4dChldmVudHMsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBlbnRlclxuXG4gICAgLy8gQSByYXRoZXIgYm9yaW5nIGNvbXB1dGF0aW9uICh0byBtZXJnZSBhZGphY2VudCBgZGF0YWAgZXZlbnRzKSB3aGljaFxuICAgIC8vIGltcHJvdmVzIG1tIHBlcmZvcm1hbmNlIGJ5IDI5JS5cbiAgICB3aGlsZSAoKytpbmRleCA8PSBldmVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZW50ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZXZlbnRzW2luZGV4XSAmJiBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdkYXRhJykge1xuICAgICAgICAgIGVudGVyID0gaW5kZXhcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWV2ZW50c1tpbmRleF0gfHwgZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnZGF0YScpIHtcbiAgICAgICAgLy8gRG9u4oCZdCBkbyBhbnl0aGluZyBpZiB0aGVyZSBpcyBvbmUgZGF0YSB0b2tlbi5cbiAgICAgICAgaWYgKGluZGV4ICE9PSBlbnRlciArIDIpIHtcbiAgICAgICAgICBldmVudHNbZW50ZXJdWzFdLmVuZCA9IGV2ZW50c1tpbmRleCAtIDFdWzFdLmVuZFxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgICB9XG5cbiAgICAgICAgZW50ZXIgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFSZXNvbHZlciA/IGV4dHJhUmVzb2x2ZXIoZXZlbnRzLCBjb250ZXh0KSA6IGV2ZW50c1xuICB9XG59XG5cbi8vIEEgcmF0aGVyIHVnbHkgc2V0IG9mIGluc3RydWN0aW9ucyB3aGljaCBhZ2FpbiBsb29rcyBhdCBjaHVua3MgaW4gdGhlIGlucHV0XG4vLyBzdHJlYW0uXG4vLyBUaGUgcmVhc29uIHRvIGRvIHRoaXMgaGVyZSBpcyB0aGF0IGl0IGlzICptdWNoKiBmYXN0ZXIgdG8gcGFyc2UgaW4gcmV2ZXJzZS5cbi8vIEFuZCB0aGF0IHdlIGNhbuKAmXQgaG9vayBpbnRvIGBudWxsYCB0byBzcGxpdCB0aGUgbGluZSBzdWZmaXggYmVmb3JlIGFuIEVPRi5cbi8vIFRvIGRvOiBmaWd1cmUgb3V0IGlmIHdlIGNhbiBtYWtlIHRoaXMgaW50byBhIGNsZWFuIHV0aWxpdHksIG9yIGV2ZW4gaW4gY29yZS5cbi8vIEFzIGl0IHdpbGwgYmUgdXNlZnVsIGZvciBHRk1zIGxpdGVyYWwgYXV0b2xpbmsgZXh0ZW5zaW9uIChhbmQgbWF5YmUgZXZlblxuLy8gdGFibGVzPylcbmZ1bmN0aW9uIHJlc29sdmVBbGxMaW5lU3VmZml4ZXMoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBldmVudEluZGV4ID0gLTFcbiAgdmFyIGNodW5rc1xuICB2YXIgZGF0YVxuICB2YXIgY2h1bmtcbiAgdmFyIGluZGV4XG4gIHZhciBidWZmZXJJbmRleFxuICB2YXIgc2l6ZVxuICB2YXIgdGFic1xuICB2YXIgdG9rZW5cblxuICB3aGlsZSAoKytldmVudEluZGV4IDw9IGV2ZW50cy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICAoZXZlbnRJbmRleCA9PT0gZXZlbnRzLmxlbmd0aCB8fFxuICAgICAgICBldmVudHNbZXZlbnRJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnKSAmJlxuICAgICAgZXZlbnRzW2V2ZW50SW5kZXggLSAxXVsxXS50eXBlID09PSAnZGF0YSdcbiAgICApIHtcbiAgICAgIGRhdGEgPSBldmVudHNbZXZlbnRJbmRleCAtIDFdWzFdXG4gICAgICBjaHVua3MgPSBjb250ZXh0LnNsaWNlU3RyZWFtKGRhdGEpXG4gICAgICBpbmRleCA9IGNodW5rcy5sZW5ndGhcbiAgICAgIGJ1ZmZlckluZGV4ID0gLTFcbiAgICAgIHNpemUgPSAwXG4gICAgICB0YWJzID0gdW5kZWZpbmVkXG5cbiAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGNodW5rID0gY2h1bmtzW2luZGV4XVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYnVmZmVySW5kZXggPSBjaHVuay5sZW5ndGhcblxuICAgICAgICAgIHdoaWxlIChjaHVuay5jaGFyQ29kZUF0KGJ1ZmZlckluZGV4IC0gMSkgPT09IDMyKSB7XG4gICAgICAgICAgICBzaXplKytcbiAgICAgICAgICAgIGJ1ZmZlckluZGV4LS1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnVmZmVySW5kZXgpIGJyZWFrXG4gICAgICAgICAgYnVmZmVySW5kZXggPSAtMVxuICAgICAgICB9XG4gICAgICAgIC8vIE51bWJlclxuICAgICAgICBlbHNlIGlmIChjaHVuayA9PT0gLTIpIHtcbiAgICAgICAgICB0YWJzID0gdHJ1ZVxuICAgICAgICAgIHNpemUrK1xuICAgICAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMSkge1xuICAgICAgICAgIC8vIEVtcHR5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmVwbGFjZW1lbnQgY2hhcmFjdGVyLCBleGl0LlxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHR5cGU6XG4gICAgICAgICAgICBldmVudEluZGV4ID09PSBldmVudHMubGVuZ3RoIHx8IHRhYnMgfHwgc2l6ZSA8IDJcbiAgICAgICAgICAgICAgPyAnbGluZVN1ZmZpeCdcbiAgICAgICAgICAgICAgOiAnaGFyZEJyZWFrVHJhaWxpbmcnLFxuXG4gICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIGxpbmU6IGRhdGEuZW5kLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IGRhdGEuZW5kLmNvbHVtbiAtIHNpemUsXG4gICAgICAgICAgICBvZmZzZXQ6IGRhdGEuZW5kLm9mZnNldCAtIHNpemUsXG4gICAgICAgICAgICBfaW5kZXg6IGRhdGEuc3RhcnQuX2luZGV4ICsgaW5kZXgsXG4gICAgICAgICAgICBfYnVmZmVySW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgID8gYnVmZmVySW5kZXhcbiAgICAgICAgICAgICAgOiBkYXRhLnN0YXJ0Ll9idWZmZXJJbmRleCArIGJ1ZmZlckluZGV4XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZDogc2hhbGxvdyhkYXRhLmVuZClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuZW5kID0gc2hhbGxvdyh0b2tlbi5zdGFydClcblxuICAgICAgICBpZiAoZGF0YS5zdGFydC5vZmZzZXQgPT09IGRhdGEuZW5kLm9mZnNldCkge1xuICAgICAgICAgIGFzc2lnbihkYXRhLCB0b2tlbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudHMuc3BsaWNlKFxuICAgICAgICAgICAgZXZlbnRJbmRleCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBbJ2VudGVyJywgdG9rZW4sIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgdG9rZW4sIGNvbnRleHRdXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgZXZlbnRJbmRleCArPSAyXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZlbnRJbmRleCsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQYXJzZXJcblxudmFyIGluaXRpYWxpemVDb250ZW50ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2NvbnRlbnQnKVxudmFyIGluaXRpYWxpemVEb2N1bWVudCA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZS9kb2N1bWVudCcpXG52YXIgaW5pdGlhbGl6ZUZsb3cgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvZmxvdycpXG52YXIgaW5pdGlhbGl6ZVRleHQgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvdGV4dCcpXG52YXIgY29uc3RydWN0cyA9IHJlcXVpcmUoJy4vY29uc3RydWN0cycpXG52YXIgY3JlYXRlVG9rZW5pemVyID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZS10b2tlbml6ZXInKVxudmFyIGNvbWJpbmVFeHRlbnNpb25zID0gcmVxdWlyZSgnLi91dGlsL2NvbWJpbmUtZXh0ZW5zaW9ucycpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL3V0aWwvbWluaWZsYXQnKVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJzZXIob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBwYXJzZXIgPSB7XG4gICAgZGVmaW5lZDogW10sXG4gICAgY29uc3RydWN0czogY29tYmluZUV4dGVuc2lvbnMoXG4gICAgICBbY29uc3RydWN0c10uY29uY2F0KG1pbmlmbGF0KHNldHRpbmdzLmV4dGVuc2lvbnMpKVxuICAgICksXG5cbiAgICBjb250ZW50OiBjcmVhdGUoaW5pdGlhbGl6ZUNvbnRlbnQpLFxuICAgIGRvY3VtZW50OiBjcmVhdGUoaW5pdGlhbGl6ZURvY3VtZW50KSxcbiAgICBmbG93OiBjcmVhdGUoaW5pdGlhbGl6ZUZsb3cpLFxuICAgIHN0cmluZzogY3JlYXRlKGluaXRpYWxpemVUZXh0LnN0cmluZyksXG4gICAgdGV4dDogY3JlYXRlKGluaXRpYWxpemVUZXh0LnRleHQpXG4gIH1cblxuICByZXR1cm4gcGFyc2VyXG5cbiAgZnVuY3Rpb24gY3JlYXRlKGluaXRpYWxpemVyKSB7XG4gICAgcmV0dXJuIGNyZWF0b3JcbiAgICBmdW5jdGlvbiBjcmVhdG9yKGZyb20pIHtcbiAgICAgIHJldHVybiBjcmVhdGVUb2tlbml6ZXIocGFyc2VyLCBpbml0aWFsaXplciwgZnJvbSlcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcG9zdHByb2Nlc3NcblxudmFyIHN1YnRva2VuaXplID0gcmVxdWlyZSgnLi91dGlsL3N1YnRva2VuaXplJylcblxuZnVuY3Rpb24gcG9zdHByb2Nlc3MoZXZlbnRzKSB7XG4gIHdoaWxlICghc3VidG9rZW5pemUoZXZlbnRzKSkge1xuICAgIC8vIEVtcHR5XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHByZXByb2Nlc3NvclxuXG52YXIgc2VhcmNoID0gL1tcXDBcXHRcXG5cXHJdL2dcblxuZnVuY3Rpb24gcHJlcHJvY2Vzc29yKCkge1xuICB2YXIgc3RhcnQgPSB0cnVlXG4gIHZhciBjb2x1bW4gPSAxXG4gIHZhciBidWZmZXIgPSAnJ1xuICB2YXIgYXRDYXJyaWFnZVJldHVyblxuXG4gIHJldHVybiBwcmVwcm9jZXNzXG5cbiAgZnVuY3Rpb24gcHJlcHJvY2Vzcyh2YWx1ZSwgZW5jb2RpbmcsIGVuZCkge1xuICAgIHZhciBjaHVua3MgPSBbXVxuICAgIHZhciBtYXRjaFxuICAgIHZhciBuZXh0XG4gICAgdmFyIHN0YXJ0UG9zaXRpb25cbiAgICB2YXIgZW5kUG9zaXRpb25cbiAgICB2YXIgY29kZVxuXG4gICAgdmFsdWUgPSBidWZmZXIgKyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZylcbiAgICBzdGFydFBvc2l0aW9uID0gMFxuICAgIGJ1ZmZlciA9ICcnXG5cbiAgICBpZiAoc3RhcnQpIHtcbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSA2NTI3OSkge1xuICAgICAgICBzdGFydFBvc2l0aW9uKytcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICB3aGlsZSAoc3RhcnRQb3NpdGlvbiA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgc2VhcmNoLmxhc3RJbmRleCA9IHN0YXJ0UG9zaXRpb25cbiAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWModmFsdWUpXG4gICAgICBlbmRQb3NpdGlvbiA9IG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGhcbiAgICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZFBvc2l0aW9uKVxuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGJ1ZmZlciA9IHZhbHVlLnNsaWNlKHN0YXJ0UG9zaXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlID09PSAxMCAmJiBzdGFydFBvc2l0aW9uID09PSBlbmRQb3NpdGlvbiAmJiBhdENhcnJpYWdlUmV0dXJuKSB7XG4gICAgICAgIGNodW5rcy5wdXNoKC0zKVxuICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXRDYXJyaWFnZVJldHVybikge1xuICAgICAgICAgIGNodW5rcy5wdXNoKC01KVxuICAgICAgICAgIGF0Q2FycmlhZ2VSZXR1cm4gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFBvc2l0aW9uIDwgZW5kUG9zaXRpb24pIHtcbiAgICAgICAgICBjaHVua3MucHVzaCh2YWx1ZS5zbGljZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikpXG4gICAgICAgICAgY29sdW1uICs9IGVuZFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgICBjaHVua3MucHVzaCg2NTUzMylcbiAgICAgICAgICBjb2x1bW4rK1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDkpIHtcbiAgICAgICAgICBuZXh0ID0gTWF0aC5jZWlsKGNvbHVtbiAvIDQpICogNFxuICAgICAgICAgIGNodW5rcy5wdXNoKC0yKVxuICAgICAgICAgIHdoaWxlIChjb2x1bW4rKyA8IG5leHQpIGNodW5rcy5wdXNoKC0xKVxuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goLTQpXG4gICAgICAgICAgY29sdW1uID0gMVxuICAgICAgICB9XG4gICAgICAgIC8vIE11c3QgYmUgY2FycmlhZ2UgcmV0dXJuLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdHJ1ZVxuICAgICAgICAgIGNvbHVtbiA9IDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGFydFBvc2l0aW9uID0gZW5kUG9zaXRpb24gKyAxXG4gICAgfVxuXG4gICAgaWYgKGVuZCkge1xuICAgICAgaWYgKGF0Q2FycmlhZ2VSZXR1cm4pIGNodW5rcy5wdXNoKC01KVxuICAgICAgaWYgKGJ1ZmZlcikgY2h1bmtzLnB1c2goYnVmZmVyKVxuICAgICAgY2h1bmtzLnB1c2gobnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtzXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUF0dGVudGlvblxuZXhwb3J0cy5yZXNvbHZlQWxsID0gcmVzb2x2ZUFsbEF0dGVudGlvblxuXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvc2hhbGxvdycpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIGNsYXNzaWZ5Q2hhcmFjdGVyID0gcmVxdWlyZSgnLi4vdXRpbC9jbGFzc2lmeS1jaGFyYWN0ZXInKVxudmFyIG1vdmVQb2ludCA9IHJlcXVpcmUoJy4uL3V0aWwvbW92ZS1wb2ludCcpXG52YXIgcmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4uL3V0aWwvcmVzb2x2ZS1hbGwnKVxuXG4vLyBUYWtlIGFsbCBldmVudHMgYW5kIHJlc29sdmUgYXR0ZW50aW9uIHRvIGVtcGhhc2lzIG9yIHN0cm9uZy5cbmZ1bmN0aW9uIHJlc29sdmVBbGxBdHRlbnRpb24oZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBvcGVuXG4gIHZhciBncm91cFxuICB2YXIgdGV4dFxuICB2YXIgb3BlbmluZ1NlcXVlbmNlXG4gIHZhciBjbG9zaW5nU2VxdWVuY2VcbiAgdmFyIHVzZVxuICB2YXIgbmV4dEV2ZW50c1xuICB2YXIgb2Zmc2V0XG5cbiAgLy8gV2FsayB0aHJvdWdoIGFsbCBldmVudHMuXG4gIC8vXG4gIC8vIE5vdGU6IHBlcmZvcm1hbmNlIG9mIHRoaXMgaXMgZmluZSBvbiBhbiBtYiBvZiBub3JtYWwgbWFya2Rvd24sIGJ1dCBpdOKAmXNcbiAgLy8gYSBib3R0bGVuZWNrIGZvciBtYWxpY2lvdXMgc3R1ZmYuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBjbG9zZS5cbiAgICBpZiAoXG4gICAgICBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmXG4gICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScgJiZcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0uX2Nsb3NlXG4gICAgKSB7XG4gICAgICBvcGVuID0gaW5kZXhcblxuICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgIHdoaWxlIChvcGVuLS0pIHtcbiAgICAgICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIG9wZW4gdGhlIGNsb3Nlci5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50c1tvcGVuXVswXSA9PT0gJ2V4aXQnICYmXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScgJiZcbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0uX29wZW4gJiZcbiAgICAgICAgICAvLyBJZiB0aGUgbWFya2VycyBhcmUgdGhlIHNhbWU6XG4gICAgICAgICAgY29udGV4dC5zbGljZVNlcmlhbGl6ZShldmVudHNbb3Blbl1bMV0pLmNoYXJDb2RlQXQoMCkgPT09XG4gICAgICAgICAgICBjb250ZXh0LnNsaWNlU2VyaWFsaXplKGV2ZW50c1tpbmRleF1bMV0pLmNoYXJDb2RlQXQoMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIG9wZW5pbmcgY2FuIGNsb3NlIG9yIHRoZSBjbG9zaW5nIGNhbiBvcGVuLFxuICAgICAgICAgIC8vIGFuZCB0aGUgY2xvc2Ugc2l6ZSAqaXMgbm90KiBhIG11bHRpcGxlIG9mIHRocmVlLFxuICAgICAgICAgIC8vIGJ1dCB0aGUgc3VtIG9mIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHNpemUgKmlzKiBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgICAgICAgICAvLyB0aGVuIGRvbuKAmXQgbWF0Y2guXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGV2ZW50c1tvcGVuXVsxXS5fY2xvc2UgfHwgZXZlbnRzW2luZGV4XVsxXS5fb3BlbikgJiZcbiAgICAgICAgICAgIChldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCkgJSAzICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAoZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLVxuICAgICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQgK1xuICAgICAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpICVcbiAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBOdW1iZXIgb2YgbWFya2VycyB0byB1c2UgZnJvbSB0aGUgc2VxdWVuY2UuXG4gICAgICAgICAgdXNlID1cbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldCA+IDEgJiZcbiAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0ID4gMVxuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxXG5cbiAgICAgICAgICBvcGVuaW5nU2VxdWVuY2UgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZ1NlcXVlbmNlJyA6ICdlbXBoYXNpc1NlcXVlbmNlJyxcbiAgICAgICAgICAgIHN0YXJ0OiBtb3ZlUG9pbnQoc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uZW5kKSwgLXVzZSksXG4gICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjbG9zaW5nU2VxdWVuY2UgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZ1NlcXVlbmNlJyA6ICdlbXBoYXNpc1NlcXVlbmNlJyxcbiAgICAgICAgICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgZW5kOiBtb3ZlUG9pbnQoc2hhbGxvdyhldmVudHNbaW5kZXhdWzFdLnN0YXJ0KSwgdXNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRleHQgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZ1RleHQnIDogJ2VtcGhhc2lzVGV4dCcsXG4gICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uZW5kKSxcbiAgICAgICAgICAgIGVuZDogc2hhbGxvdyhldmVudHNbaW5kZXhdWzFdLnN0YXJ0KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGdyb3VwID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmcnIDogJ2VtcGhhc2lzJyxcbiAgICAgICAgICAgIHN0YXJ0OiBzaGFsbG93KG9wZW5pbmdTZXF1ZW5jZS5zdGFydCksXG4gICAgICAgICAgICBlbmQ6IHNoYWxsb3coY2xvc2luZ1NlcXVlbmNlLmVuZClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kID0gc2hhbGxvdyhvcGVuaW5nU2VxdWVuY2Uuc3RhcnQpXG4gICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5zdGFydCA9IHNoYWxsb3coY2xvc2luZ1NlcXVlbmNlLmVuZClcblxuICAgICAgICAgIG5leHRFdmVudHMgPSBbXVxuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgbWFya2VycyBpbiB0aGUgb3BlbmluZywgYWRkIHRoZW0gYmVmb3JlLlxuICAgICAgICAgIGlmIChldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQpIHtcbiAgICAgICAgICAgIGNodW5rZWRTcGxpY2UobmV4dEV2ZW50cywgbmV4dEV2ZW50cy5sZW5ndGgsIDAsIFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICBbJ2VudGVyJywgZ3JvdXAsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydlbnRlcicsIG9wZW5pbmdTZXF1ZW5jZSwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2V4aXQnLCBvcGVuaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdXG4gICAgICAgICAgXSlcblxuICAgICAgICAgIC8vIEJldHdlZW4uXG4gICAgICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgICAgIG5leHRFdmVudHMsXG4gICAgICAgICAgICBuZXh0RXZlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICByZXNvbHZlQWxsKFxuICAgICAgICAgICAgICBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbCxcbiAgICAgICAgICAgICAgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksXG4gICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICAvLyBDbG9zaW5nLlxuICAgICAgICAgIGNodW5rZWRTcGxpY2UobmV4dEV2ZW50cywgbmV4dEV2ZW50cy5sZW5ndGgsIDAsIFtcbiAgICAgICAgICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydlbnRlcicsIGNsb3NpbmdTZXF1ZW5jZSwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2V4aXQnLCBjbG9zaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgZ3JvdXAsIGNvbnRleHRdXG4gICAgICAgICAgXSlcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIG1hcmtlcnMgaW4gdGhlIGNsb3NpbmcsIGFkZCB0aGVtIGFmdGVyLlxuICAgICAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMlxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgaW5kZXggPSBvcGVuICsgbmV4dEV2ZW50cy5sZW5ndGggLSBvZmZzZXQgLSAyXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSByZW1haW5pbmcgc2VxdWVuY2VzLlxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2F0dGVudGlvblNlcXVlbmNlJykge1xuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ2RhdGEnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUF0dGVudGlvbihlZmZlY3RzLCBvaykge1xuICB2YXIgYmVmb3JlID0gY2xhc3NpZnlDaGFyYWN0ZXIodGhpcy5wcmV2aW91cylcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdhdHRlbnRpb25TZXF1ZW5jZScpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBzZXF1ZW5jZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2VxdWVuY2UoY29kZSkge1xuICAgIHZhciB0b2tlblxuICAgIHZhciBhZnRlclxuICAgIHZhciBvcGVuXG4gICAgdmFyIGNsb3NlXG5cbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZXF1ZW5jZVxuICAgIH1cblxuICAgIHRva2VuID0gZWZmZWN0cy5leGl0KCdhdHRlbnRpb25TZXF1ZW5jZScpXG4gICAgYWZ0ZXIgPSBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKVxuICAgIG9wZW4gPSAhYWZ0ZXIgfHwgKGFmdGVyID09PSAyICYmIGJlZm9yZSlcbiAgICBjbG9zZSA9ICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gMiAmJiBhZnRlcilcbiAgICB0b2tlbi5fb3BlbiA9IG1hcmtlciA9PT0gNDIgPyBvcGVuIDogb3BlbiAmJiAoYmVmb3JlIHx8ICFjbG9zZSlcbiAgICB0b2tlbi5fY2xvc2UgPSBtYXJrZXIgPT09IDQyID8gY2xvc2UgOiBjbG9zZSAmJiAoYWZ0ZXIgfHwgIW9wZW4pXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUF1dG9saW5rXG5cbnZhciBhc2NpaUFscGhhID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhJylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMnKVxudmFyIGFzY2lpQXRleHQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYXRleHQnKVxudmFyIGFzY2lpQ29udHJvbCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1jb250cm9sJylcblxuZnVuY3Rpb24gdG9rZW5pemVBdXRvbGluayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzaXplXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rJylcbiAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGlua01hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdhdXRvbGlua01hcmtlcicpXG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtQcm90b2NvbCcpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUgPSAxXG4gICAgICByZXR1cm4gc2NoZW1lT3JFbWFpbEF0ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzY2lpQXRleHQoY29kZSkgPyBlbWFpbEF0ZXh0KGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzY2hlbWVPckVtYWlsQXRleHQoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSB8fCBjb2RlID09PSA0NiB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKVxuICAgICAgPyBzY2hlbWVJbnNpZGVPckVtYWlsQXRleHQoY29kZSlcbiAgICAgIDogZW1haWxBdGV4dChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHVybEluc2lkZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSB8fCBjb2RlID09PSA0NiB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkgJiZcbiAgICAgIHNpemUrKyA8IDMyXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzY2hlbWVJbnNpZGVPckVtYWlsQXRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gZW1haWxBdGV4dChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXJsSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtQcm90b2NvbCcpXG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDYwIHx8IGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB1cmxJbnNpZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsQXRleHQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2NCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGVtYWlsQXRTaWduT3JEb3RcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBdGV4dChjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW1haWxBdGV4dFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsQXRTaWduT3JEb3QoY29kZSkge1xuICAgIHJldHVybiBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSA/IGVtYWlsTGFiZWwoY29kZSkgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsTGFiZWwoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGVtYWlsQXRTaWduT3JEb3RcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIC8vIEV4aXQsIHRoZW4gY2hhbmdlIHRoZSB0eXBlLlxuICAgICAgZWZmZWN0cy5leGl0KCdhdXRvbGlua1Byb3RvY29sJykudHlwZSA9ICdhdXRvbGlua0VtYWlsJ1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBlbWFpbFZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbFZhbHVlKGNvZGUpIHtcbiAgICBpZiAoKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSAmJiBzaXplKysgPCA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29kZSA9PT0gNDUgPyBlbWFpbFZhbHVlIDogZW1haWxMYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmsnKVxuICAgIHJldHVybiBva1xuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVCbG9ja1F1b3RlU3RhcnRcbmV4cG9ydHMuY29udGludWF0aW9uID0ge3Rva2VuaXplOiB0b2tlbml6ZUJsb2NrUXVvdGVDb250aW51YXRpb259XG5leHBvcnRzLmV4aXQgPSBleGl0XG5cbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVCbG9ja1F1b3RlU3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUub3Blbikge1xuICAgICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlJywge19jb250YWluZXI6IHRydWV9KVxuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLm9wZW4gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2Jsb2NrUXVvdGVQcmVmaXgnKVxuICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZU1hcmtlcicpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2Jsb2NrUXVvdGVQcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVQcmVmaXgnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlUHJlZml4JylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUJsb2NrUXVvdGVDb250aW51YXRpb24oZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBlZmZlY3RzLmF0dGVtcHQoZXhwb3J0cywgb2ssIG5vayksXG4gICAgJ2xpbmVQcmVmaXgnLFxuICAgIDRcbiAgKVxufVxuXG5mdW5jdGlvbiBleGl0KGVmZmVjdHMpIHtcbiAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlJylcbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNoYXJhY3RlckVzY2FwZVxuXG52YXIgYXNjaWlQdW5jdHVhdGlvbiA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1wdW5jdHVhdGlvbicpXG5cbmZ1bmN0aW9uIHRva2VuaXplQ2hhcmFjdGVyRXNjYXBlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlckVzY2FwZScpXG4gICAgZWZmZWN0cy5lbnRlcignZXNjYXBlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2VzY2FwZU1hcmtlcicpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChhc2NpaVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJFc2NhcGVWYWx1ZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyRXNjYXBlVmFsdWUnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDaGFyYWN0ZXJSZWZlcmVuY2VcblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHknKVxudmFyIGFzY2lpQWxwaGFudW1lcmljID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYycpXG52YXIgYXNjaWlEaWdpdCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1kaWdpdCcpXG52YXIgYXNjaWlIZXhEaWdpdCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1oZXgtZGlnaXQnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNoYXJhY3RlclJlZmVyZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIG1heFxuICB2YXIgdGVzdFxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzUpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWMnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWMnKVxuICAgICAgcmV0dXJuIG51bWVyaWNcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG4gICAgbWF4ID0gMzFcbiAgICB0ZXN0ID0gYXNjaWlBbHBoYW51bWVyaWNcbiAgICByZXR1cm4gdmFsdWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG51bWVyaWMoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA4OCB8fCBjb2RlID09PSAxMjApIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCcpXG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG4gICAgICBtYXggPSA2XG4gICAgICB0ZXN0ID0gYXNjaWlIZXhEaWdpdFxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuICAgIG1heCA9IDdcbiAgICB0ZXN0ID0gYXNjaWlEaWdpdFxuICAgIHJldHVybiB2YWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsdWUoY29kZSkge1xuICAgIHZhciB0b2tlblxuXG4gICAgaWYgKGNvZGUgPT09IDU5ICYmIHNpemUpIHtcbiAgICAgIHRva2VuID0gZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG5cbiAgICAgIGlmICh0ZXN0ID09PSBhc2NpaUFscGhhbnVtZXJpYyAmJiAhZGVjb2RlKHNlbGYuc2xpY2VTZXJpYWxpemUodG9rZW4pKSkge1xuICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGlmICh0ZXN0KGNvZGUpICYmIHNpemUrKyA8IG1heCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNvZGVGZW5jZWRcbmV4cG9ydHMuY29uY3JldGUgPSB0cnVlXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UnKVxuXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlRmVuY2VkKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbml0aWFsUHJlZml4ID0gcHJlZml4U2l6ZSh0aGlzLmV2ZW50cywgJ2xpbmVQcmVmaXgnKVxuICB2YXIgc2l6ZU9wZW4gPSAwXG4gIHZhciBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBzZXF1ZW5jZU9wZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplT3BlbisrXG4gICAgICByZXR1cm4gc2VxdWVuY2VPcGVuXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgcmV0dXJuIHNpemVPcGVuIDwgM1xuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogY3JlYXRlU3BhY2UoZWZmZWN0cywgaW5mb09wZW4sICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZm9PcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VJbmZvJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtjb250ZW50VHlwZTogJ3N0cmluZyd9KVxuICAgIHJldHVybiBpbmZvKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgaW5mb0FmdGVyLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDk2ICYmIGNvZGUgPT09IG1hcmtlcikgcmV0dXJuIG5vayhjb2RlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBpbmZvXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG9wZW5BZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZU1ldGEnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIG1ldGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ldGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZU1ldGEnKVxuICAgICAgcmV0dXJuIG9wZW5BZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5NiAmJiBjb2RlID09PSBtYXJrZXIpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gbWV0YVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkFmdGVyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZScpXG4gICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250ZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFmdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICB7dG9rZW5pemU6IHRva2VuaXplQ2xvc2luZ0ZlbmNlLCBwYXJ0aWFsOiB0cnVlfSxcbiAgICAgICAgYWZ0ZXIsXG4gICAgICAgIGluaXRpYWxQcmVmaXhcbiAgICAgICAgICA/IGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGNvbnRlbnQsICdsaW5lUHJlZml4JywgaW5pdGlhbFByZWZpeCArIDEpXG4gICAgICAgICAgOiBjb250ZW50XG4gICAgICApXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZsb3dWYWx1ZScpXG4gICAgcmV0dXJuIGNvbnRlbnRDb250aW51ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudENvbnRpbnVlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZsb3dWYWx1ZScpXG4gICAgICByZXR1cm4gY29udGVudChjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250ZW50Q29udGludWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWQnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5pemVDbG9zaW5nRmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICAgIHZhciBzaXplID0gMFxuXG4gICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGNsb3NpbmdQcmVmaXhBZnRlciwgJ2xpbmVQcmVmaXgnLCA0KVxuXG4gICAgZnVuY3Rpb24gY2xvc2luZ1ByZWZpeEFmdGVyKGNvZGUpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZScpXG4gICAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHNpemUrK1xuICAgICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplIDwgc2l6ZU9wZW4pIHJldHVybiBub2soY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGNsb3NpbmdTZXF1ZW5jZUVuZCwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZUVuZChjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgICAgICByZXR1cm4gb2soY29kZSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ29kZUluZGVudGVkXG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlQ29kZUluZGVudGVkXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbnZhciBjb250aW51ZWRJbmRlbnQgPSB7dG9rZW5pemU6IHRva2VuaXplQ29udGludWVkSW5kZW50LCBwYXJ0aWFsOiB0cnVlfVxuXG5mdW5jdGlvbiByZXNvbHZlQ29kZUluZGVudGVkKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgY29kZSA9IHtcbiAgICB0eXBlOiAnY29kZUluZGVudGVkJyxcbiAgICBzdGFydDogZXZlbnRzWzBdWzFdLnN0YXJ0LFxuICAgIGVuZDogZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS5lbmRcbiAgfVxuXG4gIGNodW5rZWRTcGxpY2UoZXZlbnRzLCAwLCAwLCBbWydlbnRlcicsIGNvZGUsIGNvbnRleHRdXSlcbiAgY2h1bmtlZFNwbGljZShldmVudHMsIGV2ZW50cy5sZW5ndGgsIDAsIFtbJ2V4aXQnLCBjb2RlLCBjb250ZXh0XV0pXG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvZGVJbmRlbnRlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVySW5pdGlhbCxcbiAgICAnbGluZVByZWZpeCcsXG5cbiAgICA0ICsgMVxuICApXG5cbiAgZnVuY3Rpb24gYWZ0ZXJJbml0aWFsKGNvZGUpIHtcbiAgICAvLyBGbG93IGNoZWNrcyBibGFuayBsaW5lcyBmaXJzdCwgc28gd2UgZG9u4oCZdCBoYXZlIEVPTC9FT0YuXG5cbiAgICBpZiAocHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKSA8IDQpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmxvd1ZhbHVlJylcbiAgICByZXR1cm4gY29udGVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGNvbnRpbnVlZEluZGVudCwgYWZ0ZXJQcmVmaXgsIG9rKShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGbG93VmFsdWUnKVxuICAgIHJldHVybiBjb250ZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZsb3dWYWx1ZScpXG4gICAgICByZXR1cm4gYWZ0ZXJQcmVmaXgoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGVudFxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29udGludWVkSW5kZW50KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpbmVQcmVmaXgnLFxuXG4gICAgNCArIDFcbiAgKVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcblxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBhZnRlclByZWZpeCxcbiAgICAgICAgJ2xpbmVQcmVmaXgnLFxuXG4gICAgICAgIDQgKyAxXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaW5lUHJlZml4JykgPCA0ID8gbm9rKGNvZGUpIDogb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ29kZVRleHRcbmV4cG9ydHMucmVzb2x2ZSA9IHJlc29sdmVDb2RlVGV4dFxuZXhwb3J0cy5wcmV2aW91cyA9IHByZXZpb3VzXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG5mdW5jdGlvbiByZXNvbHZlQ29kZVRleHQoZXZlbnRzKSB7XG4gIHZhciB0YWlsRXhpdEluZGV4ID0gZXZlbnRzLmxlbmd0aCAtIDRcbiAgdmFyIGhlYWRFbnRlckluZGV4ID0gM1xuICB2YXIgaW5kZXhcbiAgdmFyIGVudGVyXG5cbiAgLy8gSWYgd2Ugc3RhcnQgYW5kIGVuZCB3aXRoIGFuIEVPTCBvciBhIHNwYWNlLlxuICBpZiAoXG4gICAgKGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICBldmVudHNbaGVhZEVudGVySW5kZXhdWzFdLnR5cGUgPT09ICdzcGFjZScpICYmXG4gICAgKGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgIGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID09PSAnc3BhY2UnKVxuICApIHtcbiAgICBpbmRleCA9IGhlYWRFbnRlckluZGV4XG5cbiAgICAvLyBBbmQgd2UgaGF2ZSBkYXRhLlxuICAgIHdoaWxlICgrK2luZGV4IDwgdGFpbEV4aXRJbmRleCkge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvZGVUZXh0RGF0YScpIHtcbiAgICAgICAgLy8gVGhlbiB3ZSBoYXZlIHBhZGRpbmcuXG4gICAgICAgIGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID0gZXZlbnRzW2hlYWRFbnRlckluZGV4XVsxXS50eXBlID1cbiAgICAgICAgICAnY29kZVRleHRQYWRkaW5nJ1xuXG4gICAgICAgIGhlYWRFbnRlckluZGV4ICs9IDJcbiAgICAgICAgdGFpbEV4aXRJbmRleCAtPSAyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTWVyZ2UgYWRqYWNlbnQgc3BhY2VzIGFuZCBkYXRhLlxuICBpbmRleCA9IGhlYWRFbnRlckluZGV4IC0gMVxuICB0YWlsRXhpdEluZGV4KytcblxuICB3aGlsZSAoKytpbmRleCA8PSB0YWlsRXhpdEluZGV4KSB7XG4gICAgaWYgKGVudGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdGFpbEV4aXRJbmRleCAmJiBldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lRW5kaW5nJykge1xuICAgICAgICBlbnRlciA9IGluZGV4XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGluZGV4ID09PSB0YWlsRXhpdEluZGV4IHx8XG4gICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJ1xuICAgICkge1xuICAgICAgZXZlbnRzW2VudGVyXVsxXS50eXBlID0gJ2NvZGVUZXh0RGF0YSdcblxuICAgICAgaWYgKGluZGV4ICE9PSBlbnRlciArIDIpIHtcbiAgICAgICAgZXZlbnRzW2VudGVyXVsxXS5lbmQgPSBldmVudHNbaW5kZXggLSAxXVsxXS5lbmRcbiAgICAgICAgZXZlbnRzLnNwbGljZShlbnRlciArIDIsIGluZGV4IC0gZW50ZXIgLSAyKVxuICAgICAgICB0YWlsRXhpdEluZGV4IC09IGluZGV4IC0gZW50ZXIgLSAyXG4gICAgICAgIGluZGV4ID0gZW50ZXIgKyAyXG4gICAgICB9XG5cbiAgICAgIGVudGVyID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiBwcmV2aW91cyhjb2RlKSB7XG4gIC8vIElmIHRoZXJlIGlzIGEgcHJldmlvdXMgY29kZSwgdGhlcmUgd2lsbCBhbHdheXMgYmUgYSB0YWlsLlxuICByZXR1cm4gKFxuICAgIGNvZGUgIT09IDk2IHx8XG4gICAgdGhpcy5ldmVudHNbdGhpcy5ldmVudHMubGVuZ3RoIC0gMV1bMV0udHlwZSA9PT0gJ2NoYXJhY3RlckVzY2FwZSdcbiAgKVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvZGVUZXh0KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzaXplT3BlbiA9IDBcbiAgdmFyIHNpemVcbiAgdmFyIHRva2VuXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVUZXh0JylcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICByZXR1cm4gb3BlbmluZ1NlcXVlbmNlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuaW5nU2VxdWVuY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5Nikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplT3BlbisrXG4gICAgICByZXR1cm4gb3BlbmluZ1NlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICByZXR1cm4gZ2FwKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBnYXAoY29kZSkge1xuICAgIC8vIEVPRi5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIC8vIENsb3NpbmcgZmVuY2U/XG4gICAgLy8gQ291bGQgYWxzbyBiZSBkYXRhLlxuICAgIGlmIChjb2RlID09PSA5Nikge1xuICAgICAgdG9rZW4gPSBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICAgIHNpemUgPSAwXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gVGFicyBkb27igJl0IHdvcmssIGFuZCB2aXJ0dWFsIHNwYWNlcyBkb27igJl0IG1ha2Ugc2Vuc2UuXG4gICAgaWYgKGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnc3BhY2UnKVxuICAgICAgcmV0dXJuIGdhcFxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGdhcFxuICAgIH1cblxuICAgIC8vIERhdGEuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHREYXRhJylcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgLy8gSW4gY29kZS5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gMzIgfHxcbiAgICAgIGNvZGUgPT09IDk2IHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHREYXRhJylcbiAgICAgIHJldHVybiBnYXAoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLy8gQ2xvc2luZyBmZW5jZS5cbiAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICAvLyBNb3JlLlxuICAgIGlmIChjb2RlID09PSA5Nikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2VcbiAgICB9XG5cbiAgICAvLyBEb25lIVxuICAgIGlmIChzaXplID09PSBzaXplT3Blbikge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dFNlcXVlbmNlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHQnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTW9yZSBvciBsZXNzIGFjY2VudHM6IG1hcmsgYXMgZGF0YS5cbiAgICB0b2tlbi50eXBlID0gJ2NvZGVUZXh0RGF0YSdcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDb250ZW50XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlQ29udGVudFxuZXhwb3J0cy5pbnRlcnJ1cHRpYmxlID0gdHJ1ZVxuZXhwb3J0cy5sYXp5ID0gdHJ1ZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIHN1YnRva2VuaXplID0gcmVxdWlyZSgnLi4vdXRpbC9zdWJ0b2tlbml6ZScpXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxudmFyIGxvb2thaGVhZENvbnN0cnVjdCA9IHt0b2tlbml6ZTogdG9rZW5pemVMb29rYWhlYWRDb25zdHJ1Y3QsIHBhcnRpYWw6IHRydWV9XG5cbi8vIENvbnRlbnQgaXMgdHJhbnNwYXJlbnQ6IGl04oCZcyBwYXJzZWQgcmlnaHQgbm93LiBUaGF0IHdheSwgZGVmaW5pdGlvbnMgYXJlIGFsc29cbi8vIHBhcnNlZCByaWdodCBub3c6IGJlZm9yZSB0ZXh0IGluIHBhcmFncmFwaHMgKHNwZWNpZmljYWxseSwgbWVkaWEpIGFyZSBwYXJzZWQuXG5mdW5jdGlvbiByZXNvbHZlQ29udGVudChldmVudHMpIHtcbiAgc3VidG9rZW5pemUoZXZlbnRzKVxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29udGVudChlZmZlY3RzLCBvaykge1xuICB2YXIgcHJldmlvdXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY29udGVudCcpXG4gICAgcHJldmlvdXMgPSBlZmZlY3RzLmVudGVyKCdjaHVua0NvbnRlbnQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ2NvbnRlbnQnXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbnRlbnRFbmQoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgbG9va2FoZWFkQ29uc3RydWN0LFxuICAgICAgICBjb250ZW50Q29udGludWUsXG4gICAgICAgIGNvbnRlbnRFbmRcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBEYXRhLlxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50RW5kKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NodW5rQ29udGVudCcpXG4gICAgZWZmZWN0cy5leGl0KCdjb250ZW50JylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRlbnRDb250aW51ZShjb2RlKSB7XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdjaHVua0NvbnRlbnQnKVxuICAgIHByZXZpb3VzID0gcHJldmlvdXMubmV4dCA9IGVmZmVjdHMuZW50ZXIoJ2NodW5rQ29udGVudCcsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnY29udGVudCcsXG4gICAgICBwcmV2aW91czogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxvb2thaGVhZENvbnN0cnVjdChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBzdGFydExvb2thaGVhZFxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9va2FoZWFkKGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBwcmVmaXhlZCwgJ2xpbmVQcmVmaXgnKVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlZml4ZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGluZVByZWZpeCcpIDwgNCkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuaW50ZXJydXB0KHNlbGYucGFyc2VyLmNvbnN0cnVjdHMuZmxvdywgbm9rLCBvaykoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplRGVmaW5pdGlvblxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcbnZhciBub3JtYWxpemVJZGVudGlmaWVyID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUtaWRlbnRpZmllcicpXG5cbnZhciBjcmVhdGVEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vZmFjdG9yeS1kZXN0aW5hdGlvbicpXG52YXIgY3JlYXRlTGFiZWwgPSByZXF1aXJlKCcuL2ZhY3RvcnktbGFiZWwnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcbnZhciBjcmVhdGVXaGl0ZXNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXdoaXRlc3BhY2UnKVxudmFyIGNyZWF0ZVRpdGxlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXRpdGxlJylcblxuZnVuY3Rpb24gdG9rZW5pemVEZWZpbml0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBkZXN0aW5hdGlvbkFmdGVyID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIHt0b2tlbml6ZTogdG9rZW5pemVUaXRsZSwgcGFydGlhbDogdHJ1ZX0sXG4gICAgY3JlYXRlU3BhY2UoZWZmZWN0cywgYWZ0ZXIsICd3aGl0ZXNwYWNlJyksXG4gICAgY3JlYXRlU3BhY2UoZWZmZWN0cywgYWZ0ZXIsICd3aGl0ZXNwYWNlJylcbiAgKVxuXG4gIHZhciBpZGVudGlmaWVyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2RlZmluaXRpb24nKVxuICAgIHJldHVybiBjcmVhdGVMYWJlbC5jYWxsKFxuICAgICAgc2VsZixcbiAgICAgIGVmZmVjdHMsXG4gICAgICBsYWJlbEFmdGVyLFxuICAgICAgbm9rLFxuICAgICAgJ2RlZmluaXRpb25MYWJlbCcsXG4gICAgICAnZGVmaW5pdGlvbkxhYmVsTWFya2VyJyxcbiAgICAgICdkZWZpbml0aW9uTGFiZWxTdHJpbmcnXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxBZnRlcihjb2RlKSB7XG4gICAgaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdWzFdKS5zbGljZSgxLCAtMSlcbiAgICApXG5cbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2RlZmluaXRpb25NYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2RlZmluaXRpb25NYXJrZXInKVxuXG4gICAgICAvLyBOb3RlOiBibGFuayBsaW5lcyBjYW7igJl0IGV4aXN0IGluIGNvbnRlbnQuXG4gICAgICByZXR1cm4gY3JlYXRlV2hpdGVzcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgY3JlYXRlRGVzdGluYXRpb24oXG4gICAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgICBkZXN0aW5hdGlvbkFmdGVyLFxuICAgICAgICAgIG5vayxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uJyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXInLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25SYXcnLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmcnXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2RlZmluaXRpb24nKVxuXG4gICAgICBpZiAoc2VsZi5wYXJzZXIuZGVmaW5lZC5pbmRleE9mKGlkZW50aWZpZXIpIDwgMCkge1xuICAgICAgICBzZWxmLnBhcnNlci5kZWZpbmVkLnB1c2goaWRlbnRpZmllcilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplVGl0bGUoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICAgID8gY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBiZWZvcmUpKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkgfHwgY29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBjcmVhdGVUaXRsZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgY3JlYXRlU3BhY2UoZWZmZWN0cywgYWZ0ZXIsICd3aGl0ZXNwYWNlJyksXG4gICAgICAgIG5vayxcbiAgICAgICAgJ2RlZmluaXRpb25UaXRsZScsXG4gICAgICAgICdkZWZpbml0aW9uVGl0bGVNYXJrZXInLFxuICAgICAgICAnZGVmaW5pdGlvblRpdGxlU3RyaW5nJ1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgPyBvayhjb2RlKSA6IG5vayhjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlc3RpbmF0aW9uXG5cbnZhciBhc2NpaUNvbnRyb2wgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktY29udHJvbCcpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGNyZWF0ZURlc3RpbmF0aW9uKFxuICBlZmZlY3RzLFxuICBvayxcbiAgbm9rLFxuICB0eXBlLFxuICBsaXRlcmFsVHlwZSxcbiAgbGl0ZXJhbE1hcmtlclR5cGUsXG4gIHJhd1R5cGUsXG4gIHN0cmluZ1R5cGUsXG4gIG1heFxuKSB7XG4gIHZhciBsaW1pdCA9IG1heCB8fCBJbmZpbml0eVxuICB2YXIgYmFsYW5jZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYwKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWRCZWZvcmVcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlDb250cm9sKGNvZGUpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIocmF3VHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gZGVzdGluYXRpb25SYXcoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWRCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gZGVzdGluYXRpb25FbmNsb3NlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdGluYXRpb25FbmNsb3NlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWRCZWZvcmUoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA2MCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBkZXN0aW5hdGlvbkVuY2xvc2VkRXNjYXBlIDogZGVzdGluYXRpb25FbmNsb3NlZFxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdGluYXRpb25FbmNsb3NlZEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYwIHx8IGNvZGUgPT09IDYyIHx8IGNvZGUgPT09IDkyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uUmF3KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgIGlmICgrK2JhbGFuY2UgPiBsaW1pdCkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25SYXdcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDEpIHtcbiAgICAgIGlmICghYmFsYW5jZS0tKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgICAgZWZmZWN0cy5leGl0KHJhd1R5cGUpXG4gICAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgICByZXR1cm4gb2soY29kZSlcbiAgICAgIH1cblxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25SYXdcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBpZiAoYmFsYW5jZSkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChyYXdUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlDb250cm9sKGNvZGUpKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gZGVzdGluYXRpb25SYXdFc2NhcGUgOiBkZXN0aW5hdGlvblJhd1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdGluYXRpb25SYXdFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MCB8fCBjb2RlID09PSA0MSB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25SYXdcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25SYXcoY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVMYWJlbFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzaXplID0gMFxuICB2YXIgZGF0YVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICByZXR1cm4gYXRCcmVha1xuICB9XG5cbiAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gOTEgfHxcbiAgICAgIChjb2RlID09PSA5MyAmJiAhZGF0YSkgfHxcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gZm9vdG5vdGVzLiAqL1xuICAgICAgKGNvZGUgPT09IDk0ICYmXG4gICAgICAgICFzaXplICYmXG4gICAgICAgICdfaGlkZGVuRm9vdG5vdGVTdXBwb3J0JyBpbiBzZWxmLnBhcnNlci5jb25zdHJ1Y3RzKSB8fFxuICAgICAgc2l6ZSA+IDk5OVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBhdEJyZWFrXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gbGFiZWwoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYmVsKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSA5MSB8fFxuICAgICAgY29kZSA9PT0gOTMgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB8fFxuICAgICAgc2l6ZSsrID4gOTk5XG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZGF0YSA9IGRhdGEgfHwgIW1hcmtkb3duU3BhY2UoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBsYWJlbEVzY2FwZSA6IGxhYmVsXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkxIHx8IGNvZGUgPT09IDkyIHx8IGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsKGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU3BhY2VcblxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZShlZmZlY3RzLCBvaywgdHlwZSwgbWF4KSB7XG4gIHZhciBsaW1pdCA9IG1heCA/IG1heCAtIDEgOiBJbmZpbml0eVxuICB2YXIgc2l6ZVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBwcmVmaXgoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkgJiYgc2l6ZSsrIDwgbGltaXQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHByZWZpeFxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRpdGxlXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZnVuY3Rpb24gY3JlYXRlVGl0bGUoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICB2YXIgbWFya2VyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgbWFya2VyID0gY29kZSA9PT0gNDAgPyA0MSA6IGNvZGVcbiAgICByZXR1cm4gYXRGaXJzdFRpdGxlQnJlYWtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0Rmlyc3RUaXRsZUJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0VGl0bGVCcmVhayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYXRUaXRsZUJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBhdEZpcnN0VGl0bGVCcmVhayhtYXJrZXIpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBOb3RlOiBibGFuayBsaW5lcyBjYW7igJl0IGV4aXN0IGluIGNvbnRlbnQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgYXRUaXRsZUJyZWFrLCAnbGluZVByZWZpeCcpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gdGl0bGUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpdGxlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyIHx8IGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIHJldHVybiBhdFRpdGxlQnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyB0aXRsZUVzY2FwZSA6IHRpdGxlXG4gIH1cblxuICBmdW5jdGlvbiB0aXRsZUVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGUoY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVXaGl0ZXNwYWNlXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rKSB7XG4gIHZhciBzZWVuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHNlZW4gPSB0cnVlXG4gICAgICByZXR1cm4gc3RhcnRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc2VlbiA/ICdsaW5lUHJlZml4JyA6ICdsaW5lU3VmZml4J1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVIYXJkQnJlYWtFc2NhcGVcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbmZ1bmN0aW9uIHRva2VuaXplSGFyZEJyZWFrRXNjYXBlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2hhcmRCcmVha0VzY2FwZScpXG4gICAgZWZmZWN0cy5lbnRlcignZXNjYXBlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdlc2NhcGVNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCdoYXJkQnJlYWtFc2NhcGUnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVBdHhIZWFkaW5nXG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlQXR4SGVhZGluZ1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHJlc29sdmVBdHhIZWFkaW5nKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgY29udGVudEVuZCA9IGV2ZW50cy5sZW5ndGggLSAyXG4gIHZhciBjb250ZW50U3RhcnQgPSAzXG4gIHZhciBjb250ZW50XG4gIHZhciB0ZXh0XG5cbiAgLy8gUHJlZml4IHdoaXRlc3BhY2UsIHBhcnQgb2YgdGhlIG9wZW5pbmcuXG4gIGlmIChldmVudHNbY29udGVudFN0YXJ0XVsxXS50eXBlID09PSAnd2hpdGVzcGFjZScpIHtcbiAgICBjb250ZW50U3RhcnQgKz0gMlxuICB9XG5cbiAgLy8gU3VmZml4IHdoaXRlc3BhY2UsIHBhcnQgb2YgdGhlIGNsb3NpbmcuXG4gIGlmIChcbiAgICBjb250ZW50RW5kIC0gMiA+IGNvbnRlbnRTdGFydCAmJlxuICAgIGV2ZW50c1tjb250ZW50RW5kXVsxXS50eXBlID09PSAnd2hpdGVzcGFjZSdcbiAgKSB7XG4gICAgY29udGVudEVuZCAtPSAyXG4gIH1cblxuICBpZiAoXG4gICAgZXZlbnRzW2NvbnRlbnRFbmRdWzFdLnR5cGUgPT09ICdhdHhIZWFkaW5nU2VxdWVuY2UnICYmXG4gICAgKGNvbnRlbnRTdGFydCA9PT0gY29udGVudEVuZCAtIDEgfHxcbiAgICAgIChjb250ZW50RW5kIC0gNCA+IGNvbnRlbnRTdGFydCAmJlxuICAgICAgICBldmVudHNbY29udGVudEVuZCAtIDJdWzFdLnR5cGUgPT09ICd3aGl0ZXNwYWNlJykpXG4gICkge1xuICAgIGNvbnRlbnRFbmQgLT0gY29udGVudFN0YXJ0ICsgMSA9PT0gY29udGVudEVuZCA/IDIgOiA0XG4gIH1cblxuICBpZiAoY29udGVudEVuZCA+IGNvbnRlbnRTdGFydCkge1xuICAgIGNvbnRlbnQgPSB7XG4gICAgICB0eXBlOiAnYXR4SGVhZGluZ1RleHQnLFxuICAgICAgc3RhcnQ6IGV2ZW50c1tjb250ZW50U3RhcnRdWzFdLnN0YXJ0LFxuICAgICAgZW5kOiBldmVudHNbY29udGVudEVuZF1bMV0uZW5kXG4gICAgfVxuXG4gICAgdGV4dCA9IHtcbiAgICAgIHR5cGU6ICdjaHVua1RleHQnLFxuICAgICAgc3RhcnQ6IGV2ZW50c1tjb250ZW50U3RhcnRdWzFdLnN0YXJ0LFxuICAgICAgZW5kOiBldmVudHNbY29udGVudEVuZF1bMV0uZW5kLFxuICAgICAgY29udGVudFR5cGU6ICd0ZXh0J1xuICAgIH1cblxuICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBjb250ZW50U3RhcnQsIGNvbnRlbnRFbmQgLSBjb250ZW50U3RhcnQgKyAxLCBbXG4gICAgICBbJ2VudGVyJywgY29udGVudCwgY29udGV4dF0sXG4gICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF0sXG4gICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgIFsnZXhpdCcsIGNvbnRlbnQsIGNvbnRleHRdXG4gICAgXSlcbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVBdHhIZWFkaW5nKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzaXplID0gMFxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nJylcbiAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgIHJldHVybiBmZW5jZU9wZW5JbnNpZGUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZlbmNlT3Blbkluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1ICYmIHNpemUrKyA8IDYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGZlbmNlT3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZ1NlcXVlbmNlJylcbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogaGVhZGluZ0JyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGluZ0JyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzUpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gc2VxdWVuY2UoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZycpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGhlYWRpbmdCcmVhaywgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2F0eEhlYWRpbmdUZXh0JylcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2VxdWVuY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VxdWVuY2VcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGhlYWRpbmdCcmVhayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gMzUgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdhdHhIZWFkaW5nVGV4dCcpXG4gICAgICByZXR1cm4gaGVhZGluZ0JyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplSHRtbFxuZXhwb3J0cy5yZXNvbHZlVG8gPSByZXNvbHZlVG9IdG1sXG5leHBvcnRzLmNvbmNyZXRlID0gdHJ1ZVxuXG52YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZScpXG52YXIgYmFzaWNzID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvaHRtbC1ibG9jay1uYW1lcycpXG52YXIgcmF3cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2h0bWwtcmF3LW5hbWVzJylcblxudmFyIGJsYW5rID0gcmVxdWlyZSgnLi9wYXJ0aWFsLWJsYW5rLWxpbmUnKVxuXG52YXIgbmV4dEJsYW5rID0ge3Rva2VuaXplOiB0b2tlbml6ZU5leHRCbGFuaywgcGFydGlhbDogdHJ1ZX1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvSHRtbChldmVudHMpIHtcbiAgdmFyIGluZGV4ID0gZXZlbnRzLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnaHRtbEZsb3cnKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmRleCA+IDEgJiYgZXZlbnRzW2luZGV4IC0gMl1bMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnKSB7XG4gICAgLy8gQWRkIHRoZSBwcmVmaXggc3RhcnQgdG8gdGhlIEhUTUwgdG9rZW4uXG4gICAgZXZlbnRzW2luZGV4XVsxXS5zdGFydCA9IGV2ZW50c1tpbmRleCAtIDJdWzFdLnN0YXJ0XG4gICAgLy8gQWRkIHRoZSBwcmVmaXggc3RhcnQgdG8gdGhlIEhUTUwgbGluZSB0b2tlbi5cbiAgICBldmVudHNbaW5kZXggKyAxXVsxXS5zdGFydCA9IGV2ZW50c1tpbmRleCAtIDJdWzFdLnN0YXJ0XG4gICAgLy8gUmVtb3ZlIHRoZSBsaW5lIHByZWZpeC5cbiAgICBldmVudHMuc3BsaWNlKGluZGV4IC0gMiwgMilcbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVIdG1sKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBraW5kXG4gIHZhciBzdGFydFRhZ1xuICB2YXIgYnVmZmVyXG4gIHZhciBpbmRleFxuICB2YXIgbWFya2VyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxGbG93JylcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvd0RhdGEnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDNcbiAgICAgIC8vIFdoaWxlIHdl4oCZcmUgaW4gYW4gaW5zdHJ1Y3Rpb24gaW5zdGVhZCBvZiBhIGRlY2xhcmF0aW9uLCB3ZeKAmXJlIG9uIGEgYD9gXG4gICAgICAvLyByaWdodCBub3csIHNvIHdlIGRvIG5lZWQgdG8gc2VhcmNoIGZvciBgPmAsIHNpbWlsYXIgdG8gZGVjbGFyYXRpb25zLlxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2sgOiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgc3RhcnRUYWcgPSB0cnVlXG4gICAgICByZXR1cm4gdGFnTmFtZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uU3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBraW5kID0gMlxuICAgICAgcmV0dXJuIGNvbW1lbnRPcGVuSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSA1XG4gICAgICBidWZmZXIgPSAnQ0RBVEFbJ1xuICAgICAgaW5kZXggPSAwXG4gICAgICByZXR1cm4gY2RhdGFPcGVuSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDRcbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rIDogY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50T3Blbkluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rIDogY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjZGF0YU9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBidWZmZXIuY2hhckNvZGVBdChpbmRleCsrKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5kZXggPT09IGJ1ZmZlci5sZW5ndGhcbiAgICAgICAgPyBzZWxmLmludGVycnVwdFxuICAgICAgICAgID8gb2tcbiAgICAgICAgICA6IGNvbnRpbnVhdGlvblxuICAgICAgICA6IGNkYXRhT3Blbkluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlU3RhcnQoY29kZSkge1xuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdOYW1lKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSA0NyB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICApIHtcbiAgICAgIGlmIChjb2RlICE9PSA0NyAmJiBzdGFydFRhZyAmJiByYXdzLmluZGV4T2YoYnVmZmVyLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAga2luZCA9IDFcbiAgICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250aW51YXRpb24oY29kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGJhc2ljcy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgIGtpbmQgPSA2XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgICAgcmV0dXJuIGJhc2ljU2VsZkNsb3NpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogY29udGludWF0aW9uKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGtpbmQgPSA3XG4gICAgICAvLyBEbyBub3Qgc3VwcG9ydCBjb21wbGV0ZSBIVE1MIHdoZW4gaW50ZXJydXB0aW5nLlxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0XG4gICAgICAgID8gbm9rKGNvZGUpXG4gICAgICAgIDogc3RhcnRUYWdcbiAgICAgICAgPyBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgICAgICAgOiBjb21wbGV0ZUNsb3NpbmdUYWdBZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA0NSB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgKz0gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICByZXR1cm4gdGFnTmFtZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhc2ljU2VsZkNsb3NpbmcoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVDbG9zaW5nVGFnQWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGxldGVFbmQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUVuZFxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlRW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IDQ1IHx8XG4gICAgICBjb2RlID09PSA0NiB8fFxuICAgICAgY29kZSA9PT0gNTggfHxcbiAgICAgIGNvZGUgPT09IDk1IHx8XG4gICAgICBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNjAgfHxcbiAgICAgIGNvZGUgPT09IDYxIHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgY29kZSA9PT0gOTZcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgbWFya2VyID0gY29kZVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIG1hcmtlciA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlclxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDM0IHx8XG4gICAgICBjb2RlID09PSAzOSB8fFxuICAgICAgY29kZSA9PT0gNjAgfHxcbiAgICAgIGNvZGUgPT09IDYxIHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgY29kZSA9PT0gOTYgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBZnRlcihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICAgID8gY29udGludWF0aW9uKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUgJiYga2luZCA9PT0gMikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ29tbWVudEluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MCAmJiBraW5kID09PSAxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdUYWdPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyICYmIGtpbmQgPT09IDQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzICYmIGtpbmQgPT09IDMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzICYmIGtpbmQgPT09IDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNoYXJhY3RlckRhdGFJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpICYmIChraW5kID09PSA2IHx8IGtpbmQgPT09IDcpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgbmV4dEJsYW5rLFxuICAgICAgICBjb250aW51YXRpb25DbG9zZSxcbiAgICAgICAgY29udGludWF0aW9uQXRMaW5lRW5kaW5nXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gY29udGludWF0aW9uQXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uQXRMaW5lRW5kaW5nKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgcmV0dXJuIGh0bWxDb250aW51ZVN0YXJ0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBodG1sQ29udGludWVTdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBkb25lKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gaHRtbENvbnRpbnVlU3RhcnRcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvd0RhdGEnKVxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25SYXdUYWdPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyID0gJydcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdFbmRUYWdcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25SYXdFbmRUYWcoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MiAmJiByYXdzLmluZGV4T2YoYnVmZmVyLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkgJiYgYnVmZmVyLmxlbmd0aCA8IDYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyICs9IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvblJhd0VuZFRhZ1xuICAgIH1cblxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkNoYXJhY3RlckRhdGFJbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cblxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkNsb3NlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnaHRtbEZsb3dEYXRhJylcbiAgICAgIHJldHVybiBkb25lKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gIH1cblxuICBmdW5jdGlvbiBkb25lKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93JylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZU5leHRCbGFuayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZ0JsYW5rJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChibGFuaywgb2ssIG5vaylcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplSHRtbFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcbnZhciBhc2NpaUFscGhhID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhJylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUh0bWwoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgbWFya2VyXG4gIHZhciBidWZmZXJcbiAgdmFyIGluZGV4XG4gIHZhciByZXR1cm5TdGF0ZVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHREYXRhJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDMzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvbk9wZW5cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc3RydWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJhdGlvbk9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tbWVudE9wZW5cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyID0gJ0NEQVRBWydcbiAgICAgIGluZGV4ID0gMFxuICAgICAgcmV0dXJuIGNkYXRhT3BlblxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRTdGFydFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRTdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjIpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRTdGFydERhc2hcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudFN0YXJ0RGFzaChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjIpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRDbG9zZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gY29tbWVudFxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21tZW50XG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50Q2xvc2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW5kXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNkYXRhT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGJ1ZmZlci5jaGFyQ29kZUF0KGluZGV4KyspKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbmRleCA9PT0gYnVmZmVyLmxlbmd0aCA/IGNkYXRhIDogY2RhdGFPcGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUNsb3NlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBjZGF0YUNsb3NlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNkYXRhRW5kXG4gICAgfVxuXG4gICAgcmV0dXJuIGNkYXRhKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjZGF0YUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cblxuICAgIHJldHVybiBjZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSBkZWNsYXJhdGlvblxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkZWNsYXJhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gaW5zdHJ1Y3Rpb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvbkNsb3NlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSBpbnN0cnVjdGlvblxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBpbnN0cnVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25DbG9zZShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IDYyID8gZW5kKGNvZGUpIDogaW5zdHJ1Y3Rpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlU3RhcnQoY29kZSkge1xuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ0Nsb3NlQmV0d2Vlbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnQ2xvc2VCZXR3ZWVuKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IHRhZ0Nsb3NlQmV0d2VlblxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZUJldHdlZW5cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcgfHwgY29kZSA9PT0gNjIgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3BlbkJldHdlZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW5kXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDU4IHx8IGNvZGUgPT09IDk1IHx8IGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdPcGVuQmV0d2VlblxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2VlblxuICAgIH1cblxuICAgIHJldHVybiBlbmQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVOYW1lKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSA0NSB8fFxuICAgICAgY29kZSA9PT0gNDYgfHxcbiAgICAgIGNvZGUgPT09IDU4IHx8XG4gICAgICBjb2RlID09PSA5NSB8fFxuICAgICAgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgICByZXR1cm4gYXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVOYW1lQWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNjAgfHxcbiAgICAgIGNvZGUgPT09IDYxIHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgY29kZSA9PT0gOTZcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgbWFya2VyID0gY29kZVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgICByZXR1cm4gYXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIG1hcmtlciA9IHVuZGVmaW5lZFxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlclxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyIHx8IGNvZGUgPT09IDQ3IHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzNCB8fFxuICAgICAgY29kZSA9PT0gMzkgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gOTZcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjIgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVVucXVvdGVkXG4gIH1cblxuICAvLyBXZSBjYW7igJl0IGhhdmUgYmxhbmsgbGluZXMgaW4gY29udGVudCwgc28gbm8gbmVlZCB0byB3b3JyeSBhYm91dCBlbXB0eVxuICAvLyB0b2tlbnMuXG4gIGZ1bmN0aW9uIGF0TGluZUVuZGluZyhjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sVGV4dERhdGEnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyUHJlZml4LCAnbGluZVByZWZpeCcsIDQpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHREYXRhJylcbiAgICByZXR1cm4gcmV0dXJuU3RhdGUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHREYXRhJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHQnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVMYWJlbEVuZFxuZXhwb3J0cy5yZXNvbHZlVG8gPSByZXNvbHZlVG9MYWJlbEVuZFxuZXhwb3J0cy5yZXNvbHZlQWxsID0gcmVzb2x2ZUFsbExhYmVsRW5kXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcblxudmFyIG5vcm1hbGl6ZUlkZW50aWZpZXIgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZS1pZGVudGlmaWVyJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaHVua2VkLXNwbGljZScpXG52YXIgcmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4uL3V0aWwvcmVzb2x2ZS1hbGwnKVxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cnKVxudmFyIGNyZWF0ZURlc3RpbmF0aW9uID0gcmVxdWlyZSgnLi9mYWN0b3J5LWRlc3RpbmF0aW9uJylcbnZhciBjcmVhdGVMYWJlbCA9IHJlcXVpcmUoJy4vZmFjdG9yeS1sYWJlbCcpXG52YXIgY3JlYXRlV2hpdGVzcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS13aGl0ZXNwYWNlJylcbnZhciBjcmVhdGVUaXRsZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS10aXRsZScpXG5cbnZhciByZXNvdXJjZSA9IHt0b2tlbml6ZTogdG9rZW5pemVSZXNvdXJjZX1cbnZhciBmdWxsUmVmZXJlbmNlID0ge3Rva2VuaXplOiB0b2tlbml6ZUZ1bGxSZWZlcmVuY2V9XG52YXIgY29sbGFwc2VkUmVmZXJlbmNlID0ge3Rva2VuaXplOiB0b2tlbml6ZUNvbGxhcHNlZFJlZmVyZW5jZX1cblxuZnVuY3Rpb24gcmVzb2x2ZUFsbExhYmVsRW5kKGV2ZW50cykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdG9rZW5cblxuICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICB0b2tlbiA9IGV2ZW50c1tpbmRleF1bMV1cblxuICAgIGlmIChcbiAgICAgICF0b2tlbi5fdXNlZCAmJlxuICAgICAgKHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fFxuICAgICAgICB0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJyB8fFxuICAgICAgICB0b2tlbi50eXBlID09PSAnbGFiZWxFbmQnKVxuICAgICkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBtYXJrZXIuXG4gICAgICBldmVudHMuc3BsaWNlKGluZGV4ICsgMSwgdG9rZW4udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnID8gNCA6IDIpXG4gICAgICB0b2tlbi50eXBlID0gJ2RhdGEnXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVG9MYWJlbEVuZChldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gZXZlbnRzLmxlbmd0aFxuICB2YXIgb2Zmc2V0ID0gMFxuICB2YXIgZ3JvdXBcbiAgdmFyIGxhYmVsXG4gIHZhciB0ZXh0XG4gIHZhciB0b2tlblxuICB2YXIgb3BlblxuICB2YXIgY2xvc2VcbiAgdmFyIG1lZGlhXG5cbiAgLy8gRmluZCBhbiBvcGVuaW5nLlxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHRva2VuID0gZXZlbnRzW2luZGV4XVsxXVxuXG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIC8vIElmIHdlIHNlZSBhbm90aGVyIGxpbmssIG9yIGluYWN0aXZlIGxpbmsgbGFiZWwsIHdl4oCZdmUgYmVlbiBoZXJlIGJlZm9yZS5cbiAgICAgIGlmIChcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xpbmsnIHx8XG4gICAgICAgICh0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJyAmJiB0b2tlbi5faW5hY3RpdmUpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgLy8gTWFyayBvdGhlciBsaW5rIG9wZW5pbmdzIGFzIGluYWN0aXZlLCBhcyB3ZSBjYW7igJl0IGhhdmUgbGlua3MgaW5cbiAgICAgIC8vIGxpbmtzLlxuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiYgdG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycpIHtcbiAgICAgICAgdG9rZW4uX2luYWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2xvc2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnIHx8IHRva2VuLnR5cGUgPT09ICdsYWJlbExpbmsnKSAmJlxuICAgICAgICAhdG9rZW4uX2JhbGFuY2VkXG4gICAgICApIHtcbiAgICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdsYWJlbExpbmsnKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdsYWJlbEVuZCcpIHtcbiAgICAgIGNsb3NlID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBncm91cCA9IHtcbiAgICB0eXBlOiBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycgPyAnbGluaycgOiAnaW1hZ2UnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5zdGFydCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9XG5cbiAgbGFiZWwgPSB7XG4gICAgdHlwZTogJ2xhYmVsJyxcbiAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgIGVuZDogc2hhbGxvdyhldmVudHNbY2xvc2VdWzFdLmVuZClcbiAgfVxuXG4gIHRleHQgPSB7XG4gICAgdHlwZTogJ2xhYmVsVGV4dCcsXG4gICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW4gKyBvZmZzZXQgKyAyXVsxXS5lbmQpLFxuICAgIGVuZDogc2hhbGxvdyhldmVudHNbY2xvc2UgLSAyXVsxXS5zdGFydClcbiAgfVxuXG4gIG1lZGlhID0gW1xuICAgIFsnZW50ZXInLCBncm91cCwgY29udGV4dF0sXG4gICAgWydlbnRlcicsIGxhYmVsLCBjb250ZXh0XVxuICBdXG5cbiAgLy8gT3BlbmluZyBtYXJrZXIuXG4gIGNodW5rZWRTcGxpY2UoXG4gICAgbWVkaWEsXG4gICAgbWVkaWEubGVuZ3RoLFxuICAgIDAsXG4gICAgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBvcGVuICsgb2Zmc2V0ICsgMylcbiAgKVxuXG4gIC8vIFRleHQgb3Blbi5cbiAgY2h1bmtlZFNwbGljZShtZWRpYSwgbWVkaWEubGVuZ3RoLCAwLCBbWydlbnRlcicsIHRleHQsIGNvbnRleHRdXSlcblxuICAvLyBCZXR3ZWVuLlxuICBjaHVua2VkU3BsaWNlKFxuICAgIG1lZGlhLFxuICAgIG1lZGlhLmxlbmd0aCxcbiAgICAwLFxuICAgIHJlc29sdmVBbGwoXG4gICAgICBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbCxcbiAgICAgIGV2ZW50cy5zbGljZShvcGVuICsgb2Zmc2V0ICsgNCwgY2xvc2UgLSAzKSxcbiAgICAgIGNvbnRleHRcbiAgICApXG4gIClcblxuICAvLyBUZXh0IGNsb3NlLCBtYXJrZXIgY2xvc2UsIGxhYmVsIGNsb3NlLlxuICBjaHVua2VkU3BsaWNlKG1lZGlhLCBtZWRpYS5sZW5ndGgsIDAsIFtcbiAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICBldmVudHNbY2xvc2UgLSAyXSxcbiAgICBldmVudHNbY2xvc2UgLSAxXSxcbiAgICBbJ2V4aXQnLCBsYWJlbCwgY29udGV4dF1cbiAgXSlcblxuICAvLyBSZWZlcmVuY2UsIHJlc291cmNlLCBvciBzby5cbiAgY2h1bmtlZFNwbGljZShtZWRpYSwgbWVkaWEubGVuZ3RoLCAwLCBldmVudHMuc2xpY2UoY2xvc2UgKyAxKSlcblxuICAvLyBNZWRpYSBjbG9zZS5cbiAgY2h1bmtlZFNwbGljZShtZWRpYSwgbWVkaWEubGVuZ3RoLCAwLCBbWydleGl0JywgZ3JvdXAsIGNvbnRleHRdXSlcblxuICBjaHVua2VkU3BsaWNlKGV2ZW50cywgb3BlbiwgZXZlbnRzLmxlbmd0aCwgbWVkaWEpXG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxhYmVsRW5kKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICB2YXIgbGFiZWxTdGFydFxuICB2YXIgZGVmaW5lZFxuXG4gIC8vIEZpbmQgYW4gb3BlbmluZy5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoXG4gICAgICAoc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fFxuICAgICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycpICYmXG4gICAgICAhc2VsZi5ldmVudHNbaW5kZXhdWzFdLl9iYWxhbmNlZFxuICAgICkge1xuICAgICAgbGFiZWxTdGFydCA9IHNlbGYuZXZlbnRzW2luZGV4XVsxXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKCFsYWJlbFN0YXJ0KSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gSXTigJlzIGEgYmFsYW5jZWQgYnJhY2tldCwgYnV0IGNvbnRhaW5zIGEgbGluay5cbiAgICBpZiAobGFiZWxTdGFydC5faW5hY3RpdmUpIHJldHVybiBiYWxhbmNlZChjb2RlKVxuICAgIGRlZmluZWQgPVxuICAgICAgc2VsZi5wYXJzZXIuZGVmaW5lZC5pbmRleE9mKFxuICAgICAgICBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgICAgIHNlbGYuc2xpY2VTZXJpYWxpemUoe3N0YXJ0OiBsYWJlbFN0YXJ0LmVuZCwgZW5kOiBzZWxmLm5vdygpfSlcbiAgICAgICAgKVxuICAgICAgKSA+IC0xXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxFbmQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsTWFya2VyJylcbiAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsRW5kJylcbiAgICByZXR1cm4gYWZ0ZXJMYWJlbEVuZFxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJMYWJlbEVuZChjb2RlKSB7XG4gICAgLy8gUmVzb3VyY2U6IGBbYXNkXShmZ2gpYC5cbiAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQocmVzb3VyY2UsIG9rLCBkZWZpbmVkID8gb2sgOiBiYWxhbmNlZCkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBDb2xsYXBzZWQgKGBbYXNkXVtdYCkgb3IgZnVsbCAoYFthc2RdW2ZnaF1gKSByZWZlcmVuY2U/XG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICBmdWxsUmVmZXJlbmNlLFxuICAgICAgICBvayxcbiAgICAgICAgZGVmaW5lZCA/IGVmZmVjdHMuYXR0ZW1wdChjb2xsYXBzZWRSZWZlcmVuY2UsIG9rLCBiYWxhbmNlZCkgOiBiYWxhbmNlZFxuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIC8vIFNob3J0Y3V0IHJlZmVyZW5jZTogYFthc2RdYD9cbiAgICByZXR1cm4gZGVmaW5lZCA/IG9rKGNvZGUpIDogYmFsYW5jZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhbGFuY2VkKGNvZGUpIHtcbiAgICBsYWJlbFN0YXJ0Ll9iYWxhbmNlZCA9IHRydWVcbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVSZXNvdXJjZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdyZXNvdXJjZScpXG4gICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgncmVzb3VyY2VNYXJrZXInKVxuICAgIHJldHVybiBjcmVhdGVXaGl0ZXNwYWNlKGVmZmVjdHMsIG9wZW4pXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDEpIHtcbiAgICAgIHJldHVybiBlbmQoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRGVzdGluYXRpb24oXG4gICAgICBlZmZlY3RzLFxuICAgICAgZGVzdGluYXRpb25BZnRlcixcbiAgICAgIG5vayxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uJyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXInLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25SYXcnLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25TdHJpbmcnLFxuICAgICAgM1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uQWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IGNyZWF0ZVdoaXRlc3BhY2UoZWZmZWN0cywgYmV0d2VlbikoY29kZSlcbiAgICAgIDogZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkgfHwgY29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBjcmVhdGVUaXRsZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBlbmQpLFxuICAgICAgICBub2ssXG4gICAgICAgICdyZXNvdXJjZVRpdGxlJyxcbiAgICAgICAgJ3Jlc291cmNlVGl0bGVNYXJrZXInLFxuICAgICAgICAncmVzb3VyY2VUaXRsZVN0cmluZydcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVzb3VyY2UnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplRnVsbFJlZmVyZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTGFiZWwuY2FsbChcbiAgICAgIHNlbGYsXG4gICAgICBlZmZlY3RzLFxuICAgICAgYWZ0ZXJMYWJlbCxcbiAgICAgIG5vayxcbiAgICAgICdyZWZlcmVuY2UnLFxuICAgICAgJ3JlZmVyZW5jZU1hcmtlcicsXG4gICAgICAncmVmZXJlbmNlU3RyaW5nJ1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyTGFiZWwoY29kZSkge1xuICAgIHJldHVybiBzZWxmLnBhcnNlci5kZWZpbmVkLmluZGV4T2YoXG4gICAgICBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHNlbGYuZXZlbnRzW3NlbGYuZXZlbnRzLmxlbmd0aCAtIDFdWzFdKS5zbGljZSgxLCAtMSlcbiAgICAgIClcbiAgICApIDwgMFxuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbGxhcHNlZFJlZmVyZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdyZWZlcmVuY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdyZWZlcmVuY2VNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplbGFiZWxJbWFnZVxuZXhwb3J0cy5yZXNvbHZlQWxsID0gcmVxdWlyZSgnLi9sYWJlbC1lbmQnKS5yZXNvbHZlQWxsXG5cbmZ1bmN0aW9uIHRva2VuaXplbGFiZWxJbWFnZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbEltYWdlJylcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbEltYWdlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsSW1hZ2VNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsYWJlbE1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsSW1hZ2UnKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gZm9vdG5vdGVzLiAqL1xuICAgIHJldHVybiBjb2RlID09PSA5NCAmJiAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0c1xuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplbGFiZWxMaW5rXG5leHBvcnRzLnJlc29sdmVBbGwgPSByZXF1aXJlKCcuL2xhYmVsLWVuZCcpLnJlc29sdmVBbGxcblxuZnVuY3Rpb24gdG9rZW5pemVsYWJlbExpbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxMaW5rJylcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbExpbmsnKVxuICAgIHJldHVybiBhZnRlclxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gZm9vdG5vdGVzLiAqL1xuICAgIHJldHVybiBjb2RlID09PSA5NCAmJiAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0c1xuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplV2hpdGVzcGFjZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBvaywgJ2xpbmVQcmVmaXgnKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVMaXN0U3RhcnRcbmV4cG9ydHMuY29udGludWF0aW9uID0ge3Rva2VuaXplOiB0b2tlbml6ZUxpc3RDb250aW51YXRpb259XG5leHBvcnRzLmV4aXQgPSB0b2tlbml6ZUxpc3RFbmRcblxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxudmFyIGFzY2lpRGlnaXQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktZGlnaXQnKVxuXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUnKVxudmFyIHNpemVDaHVua3MgPSByZXF1aXJlKCcuLi91dGlsL3NpemUtY2h1bmtzJylcbnZhciB0aGVtYXRpY0JyZWFrID0gcmVxdWlyZSgnLi90aGVtYXRpYy1icmVhaycpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxudmFyIGJsYW5rID0gcmVxdWlyZSgnLi9wYXJ0aWFsLWJsYW5rLWxpbmUnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RTdGFydChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5pdGlhbFNpemUgPSBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGluZVByZWZpeCcpXG4gIHZhciB2YWx1ZVNpemVcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgKGNvZGUgPT09IDQyIHx8IGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1KSAmJlxuICAgICAgKCFzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciB8fCBjb2RlID09PSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlcilcbiAgICApIHtcbiAgICAgIHJldHVybiBjb2RlID09PSA0MiB8fCBjb2RlID09PSA0NVxuICAgICAgICA/IGVmZmVjdHMuY2hlY2sodGhlbWF0aWNCcmVhaywgbm9rLCB1bm9yZGVyZWQpKGNvZGUpXG4gICAgICAgIDogdW5vcmRlcmVkKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYXNjaWlEaWdpdChjb2RlKSAmJlxuICAgICAgKCFzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgfHwgc2VsZi5jb250YWluZXJTdGF0ZS50eXBlID09PSAnbGlzdE9yZGVyZWQnKVxuICAgICkge1xuICAgICAgcmV0dXJuIG9yZGVyZWQoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB1bm9yZGVyZWQoY29kZSkge1xuICAgIGlmICghc2VsZi5jb250YWluZXJTdGF0ZS50eXBlKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgPSAnbGlzdFVub3JkZXJlZCdcbiAgICAgIGVmZmVjdHMuZW50ZXIoc2VsZi5jb250YWluZXJTdGF0ZS50eXBlLCB7X2NvbnRhaW5lcjogdHJ1ZX0pXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1QcmVmaXgnKVxuICAgIHJldHVybiBhdE1hcmtlcihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJlZChjb2RlKSB7XG4gICAgaWYgKHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSB8fCAhc2VsZi5pbnRlcnJ1cHQgfHwgY29kZSA9PT0gNDkpIHtcbiAgICAgIGlmICghc2VsZi5jb250YWluZXJTdGF0ZS50eXBlKSB7XG4gICAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSA9ICdsaXN0T3JkZXJlZCdcbiAgICAgICAgZWZmZWN0cy5lbnRlcihzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUsIHtfY29udGFpbmVyOiB0cnVlfSlcbiAgICAgIH1cblxuICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1QcmVmaXgnKVxuICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1WYWx1ZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHZhbHVlU2l6ZSA9IDFcbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IGFmdGVyVmFsdWUgOiBpbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIGlmIChhc2NpaURpZ2l0KGNvZGUpICYmICsrdmFsdWVTaXplIDwgMTApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBhZnRlclZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlclZhbHVlKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2xpc3RJdGVtVmFsdWUnKVxuXG4gICAgcmV0dXJuIGNvZGUgPT09IDQxIHx8IGNvZGUgPT09IDQ2ID8gYXRNYXJrZXIoY29kZSkgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0TWFya2VyKGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciA9IHNlbGYuY29udGFpbmVyU3RhdGUubWFya2VyIHx8IGNvZGVcblxuICAgIGlmIChjb2RlID09PSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1NYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpc3RJdGVtTWFya2VyJylcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKFxuICAgICAgICBibGFuayxcbiAgICAgICAgLy8gQ2Fu4oCZdCBiZSBlbXB0eSB3aGVuIGludGVycnVwdGluZy5cbiAgICAgICAgc2VsZi5pbnRlcnJ1cHQgPyBub2sgOiBvbkJsYW5rLFxuICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAge3Rva2VuaXplOiB0b2tlbml6ZUxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZSwgcGFydGlhbDogdHJ1ZX0sXG4gICAgICAgICAgZW5kT2ZQcmVmaXgsXG4gICAgICAgICAgb3RoZXJQcmVmaXhcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHRydWVcbiAgICBpbml0aWFsU2l6ZSsrXG4gICAgcmV0dXJuIGVuZE9mUHJlZml4KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBvdGhlclByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIHJldHVybiBlbmRPZlByZWZpeFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZE9mUHJlZml4KGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgPVxuICAgICAgaW5pdGlhbFNpemUgKyBzaXplQ2h1bmtzKHNlbGYuc2xpY2VTdHJlYW0oZWZmZWN0cy5leGl0KCdsaXN0SXRlbVByZWZpeCcpKSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RDb250aW51YXRpb24oZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3cgPSB1bmRlZmluZWRcblxuICByZXR1cm4gZWZmZWN0cy5jaGVjayhibGFuaywgb25CbGFuaywgbm90QmxhbmspXG5cbiAgZnVuY3Rpb24gb25CbGFuayhjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyA9XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzIHx8XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmVcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdEJsYW5rKGNvZGUpIHtcbiAgICBpZiAoc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyB8fCAhbWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyA9IHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIG5vdEluQ3VycmVudEl0ZW0oY29kZSlcbiAgICB9XG5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzID0gc2VsZi5jb250YWluZXJTdGF0ZS5pbml0aWFsQmxhbmtMaW5lID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgIHt0b2tlbml6ZTogdG9rZW5pemVJbmRlbnQsIHBhcnRpYWw6IHRydWV9LFxuICAgICAgb2ssXG4gICAgICBub3RJbkN1cnJlbnRJdGVtXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbm90SW5DdXJyZW50SXRlbShjb2RlKSB7XG4gICAgLy8gV2hpbGUgd2UgZG8gY29udGludWUsIHdlIHNpZ25hbCB0aGF0IHRoZSBmbG93IHNob3VsZCBiZSBjbG9zZWQuXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93ID0gdHJ1ZVxuICAgIC8vIEFzIHdl4oCZcmUgY2xvc2luZyBmbG93LCB3ZeKAmXJlIG5vIGxvbmdlciBpbnRlcnJ1cHRpbmdcbiAgICBzZWxmLmludGVycnVwdCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICAgIGVmZmVjdHMsXG4gICAgICBlZmZlY3RzLmF0dGVtcHQoZXhwb3J0cywgb2ssIG5vayksXG4gICAgICAnbGluZVByZWZpeCcsXG4gICAgICA0XG4gICAgKShjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplSW5kZW50KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtSW5kZW50JyxcblxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuc2l6ZSArIDFcbiAgKVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICByZXR1cm4gcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpc3RJdGVtSW5kZW50JykgPT09XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemVcbiAgICAgID8gb2soY29kZSlcbiAgICAgIDogbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0RW5kKGVmZmVjdHMpIHtcbiAgZWZmZWN0cy5leGl0KHRoaXMuY29udGFpbmVyU3RhdGUudHlwZSlcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBhZnRlclByZWZpeCxcbiAgICAnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJyxcblxuICAgIDQgKyAxXG4gIClcblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duU3BhY2UoY29kZSkgfHxcbiAgICAgICFwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUJsYW5rTGluZVxuZXhwb3J0cy5wYXJ0aWFsID0gdHJ1ZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVCbGFua0xpbmUoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgYWZ0ZXJXaGl0ZXNwYWNlLCAnbGluZVByZWZpeCcpXG5cbiAgZnVuY3Rpb24gYWZ0ZXJXaGl0ZXNwYWNlKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgPyBvayhjb2RlKSA6IG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVTZXRleHRVbmRlcmxpbmVcbmV4cG9ydHMucmVzb2x2ZVRvID0gcmVzb2x2ZVRvU2V0ZXh0VW5kZXJsaW5lXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvc2hhbGxvdycpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiByZXNvbHZlVG9TZXRleHRVbmRlcmxpbmUoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHRleHRcbiAgdmFyIGRlZmluaXRpb25cbiAgdmFyIGhlYWRpbmdcblxuICAvLyBGaW5kIHRoZSBvcGVuaW5nIG9mIHRoZSBjb250ZW50LlxuICAvLyBJdOKAmWxsIGFsd2F5cyBleGlzdDogd2UgZG9u4oCZdCB0b2tlbml6ZSBpZiBpdCBpc27igJl0IHRoZXJlLlxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgY29udGVudCA9IGluZGV4XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgIHRleHQgPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGl0XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjb250ZW50IGVuZCAoaWYgbmVlZGVkIHdl4oCZbGwgYWRkIGl0IGxhdGVyKVxuICAgICAgICBldmVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRlZmluaXRpb24gJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnZGVmaW5pdGlvbicpIHtcbiAgICAgICAgZGVmaW5pdGlvbiA9IGluZGV4XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGVhZGluZyA9IHtcbiAgICB0eXBlOiAnc2V0ZXh0SGVhZGluZycsXG4gICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW3RleHRdWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS5lbmQpXG4gIH1cblxuICAvLyBDaGFuZ2UgdGhlIHBhcmFncmFwaCB0byBzZXRleHQgaGVhZGluZyB0ZXh0LlxuICBldmVudHNbdGV4dF1bMV0udHlwZSA9ICdzZXRleHRIZWFkaW5nVGV4dCdcblxuICAvLyBJZiB3ZSBoYXZlIGRlZmluaXRpb25zIGluIHRoZSBjb250ZW50LCB3ZeKAmWxsIGtlZXAgb24gaGF2aW5nIGNvbnRlbnQsXG4gIC8vIGJ1dCB3ZSBuZWVkIG1vdmUgaXQuXG4gIGlmIChkZWZpbml0aW9uKSB7XG4gICAgZXZlbnRzLnNwbGljZSh0ZXh0LCAwLCBbJ2VudGVyJywgaGVhZGluZywgY29udGV4dF0pXG4gICAgZXZlbnRzLnNwbGljZShkZWZpbml0aW9uICsgMSwgMCwgWydleGl0JywgZXZlbnRzW2NvbnRlbnRdWzFdLCBjb250ZXh0XSlcbiAgICBldmVudHNbY29udGVudF1bMV0uZW5kID0gc2hhbGxvdyhldmVudHNbZGVmaW5pdGlvbl1bMV0uZW5kKVxuICB9IGVsc2Uge1xuICAgIGV2ZW50c1tjb250ZW50XVsxXSA9IGhlYWRpbmdcbiAgfVxuXG4gIC8vIEFkZCB0aGUgaGVhZGluZyBleGl0IGF0IHRoZSBlbmQuXG4gIGV2ZW50cy5wdXNoKFsnZXhpdCcsIGhlYWRpbmcsIGNvbnRleHRdKVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVTZXRleHRVbmRlcmxpbmUoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4ID0gc2VsZi5ldmVudHMubGVuZ3RoXG4gIHZhciBtYXJrZXJcbiAgdmFyIHBhcmFncmFwaFxuXG4gIC8vIEZpbmQgYW4gb3BlbmluZy5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAvLyBTa2lwIGVudGVyL2V4aXQgb2YgbGluZSBlbmRpbmcsIGxpbmUgcHJlZml4LCBhbmQgY29udGVudC5cbiAgICAvLyBXZSBjYW4gbm93IGVpdGhlciBoYXZlIGEgZGVmaW5pdGlvbiBvciBhIHBhcmFncmFwaC5cbiAgICBpZiAoXG4gICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2xpbmVFbmRpbmcnICYmXG4gICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2xpbmVQcmVmaXgnICYmXG4gICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2NvbnRlbnQnXG4gICAgKSB7XG4gICAgICBwYXJhZ3JhcGggPSBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmICghc2VsZi5sYXp5ICYmIChzZWxmLmludGVycnVwdCB8fCBwYXJhZ3JhcGgpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdzZXRleHRIZWFkaW5nTGluZScpXG4gICAgICBlZmZlY3RzLmVudGVyKCdzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlJylcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2UoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zaW5nU2VxdWVuY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGNsb3NpbmdTZXF1ZW5jZUVuZCwgJ2xpbmVTdWZmaXgnKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlRW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnc2V0ZXh0SGVhZGluZ0xpbmUnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVUaGVtYXRpY0JyZWFrXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZVRoZW1hdGljQnJlYWsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrJylcbiAgICBtYXJrZXIgPSBjb2RlXG4gICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RoZW1hdGljQnJlYWtTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gc2VxdWVuY2UoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGF0QnJlYWssICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8IDMgfHwgKGNvZGUgIT09IG51bGwgJiYgIW1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3RoZW1hdGljQnJlYWsnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2VxdWVuY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gc2VxdWVuY2VcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3RoZW1hdGljQnJlYWtTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaHVua2VkU3BsaWNlXG5cbnZhciB2OE1heFNhZmVDaHVua1NpemUgPSAxMDAwMFxuXG4vLyBgQXJyYXkjc3BsaWNlYCB0YWtlcyBhbGwgaXRlbXMgdG8gYmUgaW5zZXJ0ZWQgYXMgaW5kaXZpZHVhbCBhcmd1bWVudCB3aGljaFxuLy8gY2F1c2VzIGEgc3RhY2sgb3ZlcmZsb3cgaW4gVjggd2hlbiB0cnlpbmcgdG8gaW5zZXJ0IDEwMGsgaXRlbXMgZm9yIGluc3RhbmNlLlxuZnVuY3Rpb24gY2h1bmtlZFNwbGljZShsaXN0LCBzdGFydCwgcmVtb3ZlLCBpdGVtcykge1xuICB2YXIgZW5kID0gbGlzdC5sZW5ndGhcbiAgdmFyIGNodW5rU3RhcnQgPSAwXG4gIHZhciByZXN1bHRcbiAgdmFyIHBhcmFtZXRlcnNcblxuICAvLyBNYWtlIHN0YXJ0IGJldHdlZW4gemVybyBhbmQgYGVuZGAgKGluY2x1ZGVkKS5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gZW5kID8gMCA6IGVuZCArIHN0YXJ0XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBzdGFydCA+IGVuZCA/IGVuZCA6IHN0YXJ0XG4gIH1cblxuICByZW1vdmUgPSByZW1vdmUgPiAwID8gcmVtb3ZlIDogMFxuXG4gIC8vIE5vIG5lZWQgdG8gY2h1bmsgdGhlIGl0ZW1zIGlmIHRoZXJl4oCZcyBvbmx5IGEgY291cGxlICgxMGspIGl0ZW1zLlxuICBpZiAoaXRlbXMubGVuZ3RoIDwgdjhNYXhTYWZlQ2h1bmtTaXplKSB7XG4gICAgcGFyYW1ldGVycyA9IEFycmF5LmZyb20oaXRlbXMpXG4gICAgcGFyYW1ldGVycy51bnNoaWZ0KHN0YXJ0LCByZW1vdmUpXG4gICAgcmV0dXJuIFtdLnNwbGljZS5hcHBseShsaXN0LCBwYXJhbWV0ZXJzKVxuICB9XG5cbiAgLy8gRGVsZXRlIGByZW1vdmVgIGl0ZW1zIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YFxuICByZXN1bHQgPSBbXS5zcGxpY2UuYXBwbHkobGlzdCwgW3N0YXJ0LCByZW1vdmVdKVxuXG4gIC8vIEluc2VydCB0aGUgaXRlbXMgaW4gY2h1bmtzIHRvIG5vdCBjYXVzZSBzdGFjayBvdmVyZmxvd3MuXG4gIHdoaWxlIChjaHVua1N0YXJ0IDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1ldGVycyA9IGl0ZW1zLnNsaWNlKGNodW5rU3RhcnQsIGNodW5rU3RhcnQgKyB2OE1heFNhZmVDaHVua1NpemUpXG4gICAgcGFyYW1ldGVycy51bnNoaWZ0KHN0YXJ0LCAwKVxuICAgIDtbXS5zcGxpY2UuYXBwbHkobGlzdCwgcGFyYW1ldGVycylcblxuICAgIGNodW5rU3RhcnQgKz0gdjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgc3RhcnQgKz0gdjhNYXhTYWZlQ2h1bmtTaXplXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzaWZ5Q2hhcmFjdGVyXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcbnZhciB1bmljb2RlUHVuY3R1YXRpb24gPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvdW5pY29kZS1wdW5jdHVhdGlvbicpXG52YXIgdW5pY29kZVdoaXRlc3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvdW5pY29kZS13aGl0ZXNwYWNlJylcblxuLy8gQ2xhc3NpZnkgd2hldGhlciBhIGNoYXJhY3RlciBpcyB1bmljb2RlIHdoaXRlc3BhY2UsIHVuaWNvZGUgcHVuY3R1YXRpb24sIG9yXG4vLyBhbnl0aGluZyBlbHNlLlxuLy8gVXNlZCBmb3IgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSwgd2hvc2Ugc2VxdWVuY2VzIGNhbiBvcGVuIG9yIGNsb3NlXG4vLyBiYXNlZCBvbiB0aGUgY2xhc3Mgb2Ygc3Vycm91bmRpbmcgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpIHtcbiAgaWYgKFxuICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpIHx8XG4gICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSlcbiAgKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGlmICh1bmljb2RlUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICByZXR1cm4gMlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVFeHRlbnNpb25zXG5cbnZhciBvd24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9oYXMtb3duLXByb3BlcnR5JylcbnZhciBtaW5pZmxhdCA9IHJlcXVpcmUoJy4vbWluaWZsYXQnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuL2NodW5rZWQtc3BsaWNlJylcblxuLy8gQ29tYmluZSBzZXZlcmFsIHN5bnRheCBleHRlbnNpb25zIGludG8gb25lLlxuZnVuY3Rpb24gY29tYmluZUV4dGVuc2lvbnMoZXh0ZW5zaW9ucykge1xuICB2YXIgYWxsID0ge31cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGV4dGVuc2lvbnMubGVuZ3RoKSB7XG4gICAgZXh0ZW5zaW9uKGFsbCwgZXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gYWxsXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbikge1xuICB2YXIgaG9va1xuICB2YXIgbGVmdFxuICB2YXIgcmlnaHRcbiAgdmFyIGNvZGVcblxuICBmb3IgKGhvb2sgaW4gZXh0ZW5zaW9uKSB7XG4gICAgbGVmdCA9IG93bi5jYWxsKGFsbCwgaG9vaykgPyBhbGxbaG9va10gOiAoYWxsW2hvb2tdID0ge30pXG4gICAgcmlnaHQgPSBleHRlbnNpb25baG9va11cblxuICAgIGZvciAoY29kZSBpbiByaWdodCkge1xuICAgICAgbGVmdFtjb2RlXSA9IGNvbnN0cnVjdHMoXG4gICAgICAgIG1pbmlmbGF0KHJpZ2h0W2NvZGVdKSxcbiAgICAgICAgb3duLmNhbGwobGVmdCwgY29kZSkgPyBsZWZ0W2NvZGVdIDogW11cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc3RydWN0cyhsaXN0LCBleGlzdGluZykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgYmVmb3JlID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgOyhsaXN0W2luZGV4XS5hZGQgPT09ICdhZnRlcicgPyBleGlzdGluZyA6IGJlZm9yZSkucHVzaChsaXN0W2luZGV4XSlcbiAgfVxuXG4gIGNodW5rZWRTcGxpY2UoZXhpc3RpbmcsIDAsIDAsIGJlZm9yZSlcbiAgcmV0dXJuIGV4aXN0aW5nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRva2VuaXplclxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvYXNzaWduJylcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4vY2h1bmtlZC1zcGxpY2UnKVxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuL3NoYWxsb3cnKVxudmFyIHNlcmlhbGl6ZUNodW5rcyA9IHJlcXVpcmUoJy4vc2VyaWFsaXplLWNodW5rcycpXG52YXIgc2xpY2VDaHVua3MgPSByZXF1aXJlKCcuL3NsaWNlLWNodW5rcycpXG52YXIgcmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4vcmVzb2x2ZS1hbGwnKVxudmFyIG1pbmlmbGF0ID0gcmVxdWlyZSgnLi9taW5pZmxhdCcpXG5cbi8vIENyZWF0ZSBhIHRva2VuaXplci5cbi8vIFRva2VuaXplcnMgZGVhbCB3aXRoIG9uZSB0eXBlIG9mIGRhdGEgKGUuZy4sIGNvbnRhaW5lcnMsIGZsb3csIHRleHQpLlxuLy8gVGhlIHBhcnNlciBpcyB0aGUgb2JqZWN0IGRlYWxpbmcgd2l0aCBpdCBhbGwuXG4vLyBgaW5pdGlhbGl6ZWAgd29ya3MgbGlrZSBvdGhlciBjb25zdHJ1Y3RzLCBleGNlcHQgdGhhdCBvbmx5IGl0cyBgdG9rZW5pemVgXG4vLyBmdW5jdGlvbiBpcyB1c2VkLCBpbiB3aGljaCBjYXNlIGl0IGRvZXNu4oCZdCByZWNlaXZlIGFuIGBva2Agb3IgYG5va2AuXG4vLyBgZnJvbWAgY2FuIGJlIGdpdmVuIHRvIHNldCB0aGUgcG9pbnQgYmVmb3JlIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIGFsdGhvdWdoXG4vLyB3aGVuIGZ1cnRoZXIgbGluZXMgYXJlIGluZGVudGVkLCB0aGV5IG11c3QgYmUgc2V0IHdpdGggYGRlZmluZVNraXBgLlxuZnVuY3Rpb24gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbGl6ZSwgZnJvbSkge1xuICB2YXIgcG9pbnQgPSBmcm9tID8gc2hhbGxvdyhmcm9tKSA6IHtsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMH1cbiAgdmFyIGNvbHVtblN0YXJ0ID0ge31cbiAgdmFyIHJlc29sdmVBbGxDb25zdHJ1Y3RzID0gW11cbiAgdmFyIGNodW5rcyA9IFtdXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBjb25zdW1lZCA9IHRydWVcblxuICAvLyBUb29scyB1c2VkIGZvciB0b2tlbml6aW5nLlxuICB2YXIgZWZmZWN0cyA9IHtcbiAgICBjb25zdW1lOiBjb25zdW1lLFxuICAgIGVudGVyOiBlbnRlcixcbiAgICBleGl0OiBleGl0LFxuICAgIGF0dGVtcHQ6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY29uc3RydWN0KSxcbiAgICBjaGVjazogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjayksXG4gICAgaW50ZXJydXB0OiBjb25zdHJ1Y3RGYWN0b3J5KG9uc3VjY2Vzc2Z1bGNoZWNrLCB7aW50ZXJydXB0OiB0cnVlfSksXG4gICAgbGF6eTogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge2xhenk6IHRydWV9KVxuICB9XG5cbiAgLy8gU3RhdGUgYW5kIHRvb2xzIGZvciByZXNvbHZpbmcgYW5kIHNlcmlhbGl6aW5nLlxuICB2YXIgY29udGV4dCA9IHtcbiAgICBwcmV2aW91czogbnVsbCxcbiAgICBldmVudHM6IFtdLFxuICAgIHBhcnNlcjogcGFyc2VyLFxuICAgIHNsaWNlU3RyZWFtOiBzbGljZVN0cmVhbSxcbiAgICBzbGljZVNlcmlhbGl6ZTogc2xpY2VTZXJpYWxpemUsXG4gICAgbm93OiBub3csXG4gICAgZGVmaW5lU2tpcDogc2tpcCxcbiAgICB3cml0ZTogd3JpdGVcbiAgfVxuXG4gIC8vIFRoZSBzdGF0ZSBmdW5jdGlvbi5cbiAgdmFyIHN0YXRlID0gaW5pdGlhbGl6ZS50b2tlbml6ZS5jYWxsKGNvbnRleHQsIGVmZmVjdHMpXG5cbiAgLy8gVHJhY2sgd2hpY2ggY2hhcmFjdGVyIHdlIGV4cGVjdCB0byBiZSBjb25zdW1lZCwgdG8gY2F0Y2ggYnVncy5cbiAgdmFyIGV4cGVjdGVkQ29kZVxuXG4gIGlmIChpbml0aWFsaXplLnJlc29sdmVBbGwpIHtcbiAgICByZXNvbHZlQWxsQ29uc3RydWN0cy5wdXNoKGluaXRpYWxpemUpXG4gIH1cblxuICAvLyBTdG9yZSB3aGVyZSB3ZSBhcmUgaW4gdGhlIGlucHV0IHN0cmVhbS5cbiAgcG9pbnQuX2luZGV4ID0gMFxuICBwb2ludC5fYnVmZmVySW5kZXggPSAtMVxuXG4gIHJldHVybiBjb250ZXh0XG5cbiAgZnVuY3Rpb24gd3JpdGUoc2xpY2UpIHtcbiAgICBjaHVua2VkU3BsaWNlKGNodW5rcywgY2h1bmtzLmxlbmd0aCwgMCwgc2xpY2UpXG5cbiAgICBtYWluKClcblxuICAgIC8vIEV4aXQgaWYgd2XigJlyZSBub3QgZG9uZSwgcmVzb2x2ZSBtaWdodCBjaGFuZ2Ugc3R1ZmYuXG4gICAgaWYgKGNodW5rc1tjaHVua3MubGVuZ3RoIC0gMV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGFkZFJlc3VsdChpbml0aWFsaXplLCAwKVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZXNvbHZlLCBhbmQgZXhpdC5cbiAgICBjb250ZXh0LmV2ZW50cyA9IHJlc29sdmVBbGwocmVzb2x2ZUFsbENvbnN0cnVjdHMsIGNvbnRleHQuZXZlbnRzLCBjb250ZXh0KVxuXG4gICAgcmV0dXJuIGNvbnRleHQuZXZlbnRzXG4gIH1cblxuICAvL1xuICAvLyBUb29scy5cbiAgLy9cblxuICBmdW5jdGlvbiBzbGljZVNlcmlhbGl6ZSh0b2tlbikge1xuICAgIHJldHVybiBzZXJpYWxpemVDaHVua3Moc2xpY2VTdHJlYW0odG9rZW4pKVxuICB9XG5cbiAgZnVuY3Rpb24gc2xpY2VTdHJlYW0odG9rZW4pIHtcbiAgICByZXR1cm4gc2xpY2VDaHVua3MoY2h1bmtzLCB0b2tlbilcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gc2hhbGxvdyhwb2ludClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXAodmFsdWUpIHtcbiAgICBjb2x1bW5TdGFydFt2YWx1ZS5saW5lXSA9IHZhbHVlLmNvbHVtblxuICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgfVxuXG4gIC8vXG4gIC8vIFN0YXRlIG1hbmFnZW1lbnQuXG4gIC8vXG5cbiAgLy8gTWFpbiBsb29wIChub3RlIHRoYXQgYF9pbmRleGAgYW5kIGBfYnVmZmVySW5kZXhgIGluIGBwb2ludGAgYXJlIG1vZGlmaWVkIGJ5XG4gIC8vIGBjb25zdW1lYCkuXG4gIC8vIEhlcmUgaXMgd2hlcmUgd2Ugd2FsayB0aHJvdWdoIHRoZSBjaHVua3MsIHdoaWNoIGVpdGhlciBpbmNsdWRlIHN0cmluZ3Mgb2ZcbiAgLy8gc2V2ZXJhbCBjaGFyYWN0ZXJzLCBvciBudW1lcmljYWwgY2hhcmFjdGVyIGNvZGVzLlxuICAvLyBUaGUgcmVhc29uIHRvIGRvIHRoaXMgaW4gYSBsb29wIGluc3RlYWQgb2YgYSBjYWxsIGlzIHNvIHRoZSBzdGFjayBjYW5cbiAgLy8gZHJhaW4uXG4gIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgdmFyIGNodW5rSW5kZXhcbiAgICB2YXIgY2h1bmtcblxuICAgIHdoaWxlIChwb2ludC5faW5kZXggPCBjaHVua3MubGVuZ3RoKSB7XG4gICAgICBjaHVuayA9IGNodW5rc1twb2ludC5faW5kZXhdXG5cbiAgICAgIC8vIElmIHdl4oCZcmUgaW4gYSBidWZmZXIgY2h1bmssIGxvb3AgdGhyb3VnaCBpdC5cbiAgICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNodW5rSW5kZXggPSBwb2ludC5faW5kZXhcblxuICAgICAgICBpZiAocG9pbnQuX2J1ZmZlckluZGV4IDwgMCkge1xuICAgICAgICAgIHBvaW50Ll9idWZmZXJJbmRleCA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBwb2ludC5faW5kZXggPT09IGNodW5rSW5kZXggJiZcbiAgICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPCBjaHVuay5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ28oY2h1bmsuY2hhckNvZGVBdChwb2ludC5fYnVmZmVySW5kZXgpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbyhjaHVuaylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEZWFsIHdpdGggb25lIGNvZGUuXG4gIGZ1bmN0aW9uIGdvKGNvZGUpIHtcbiAgICBjb25zdW1lZCA9IHVuZGVmaW5lZFxuXG4gICAgZXhwZWN0ZWRDb2RlID0gY29kZVxuICAgIHN0YXRlID0gc3RhdGUoY29kZSlcbiAgfVxuXG4gIC8vIE1vdmUgYSBjaGFyYWN0ZXIgZm9yd2FyZC5cbiAgZnVuY3Rpb24gY29uc3VtZShjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcG9pbnQubGluZSsrXG4gICAgICBwb2ludC5jb2x1bW4gPSAxXG4gICAgICBwb2ludC5vZmZzZXQgKz0gY29kZSA9PT0gLTMgPyAyIDogMVxuICAgICAgYWNjb3VudEZvclBvdGVudGlhbFNraXAoKVxuICAgIH0gZWxzZSBpZiAoY29kZSAhPT0gLTEpIHtcbiAgICAgIHBvaW50LmNvbHVtbisrXG4gICAgICBwb2ludC5vZmZzZXQrK1xuICAgIH1cblxuICAgIC8vIE5vdCBpbiBhIHN0cmluZyBjaHVuay5cbiAgICBpZiAocG9pbnQuX2J1ZmZlckluZGV4IDwgMCkge1xuICAgICAgcG9pbnQuX2luZGV4KytcbiAgICB9IGVsc2Uge1xuICAgICAgcG9pbnQuX2J1ZmZlckluZGV4KytcblxuICAgICAgLy8gQXQgZW5kIG9mIHN0cmluZyBjaHVuay5cbiAgICAgIGlmIChwb2ludC5fYnVmZmVySW5kZXggPT09IGNodW5rc1twb2ludC5faW5kZXhdLmxlbmd0aCkge1xuICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPSAtMVxuICAgICAgICBwb2ludC5faW5kZXgrK1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9zZSB0aGUgcHJldmlvdXMgY2hhcmFjdGVyLlxuICAgIGNvbnRleHQucHJldmlvdXMgPSBjb2RlXG5cbiAgICAvLyBNYXJrIGFzIGNvbnN1bWVkLlxuICAgIGNvbnN1bWVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gU3RhcnQgYSB0b2tlbi5cbiAgZnVuY3Rpb24gZW50ZXIodHlwZSwgZmllbGRzKSB7XG4gICAgdmFyIHRva2VuID0gZmllbGRzIHx8IHt9XG4gICAgdG9rZW4udHlwZSA9IHR5cGVcbiAgICB0b2tlbi5zdGFydCA9IG5vdygpXG5cbiAgICBjb250ZXh0LmV2ZW50cy5wdXNoKFsnZW50ZXInLCB0b2tlbiwgY29udGV4dF0pXG5cbiAgICBzdGFjay5wdXNoKHRva2VuKVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICAvLyBTdG9wIGEgdG9rZW4uXG4gIGZ1bmN0aW9uIGV4aXQodHlwZSkge1xuICAgIHZhciB0b2tlbiA9IHN0YWNrLnBvcCgpXG4gICAgdG9rZW4uZW5kID0gbm93KClcblxuICAgIGNvbnRleHQuZXZlbnRzLnB1c2goWydleGl0JywgdG9rZW4sIGNvbnRleHRdKVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICAvLyBVc2UgcmVzdWx0cy5cbiAgZnVuY3Rpb24gb25zdWNjZXNzZnVsY29uc3RydWN0KGNvbnN0cnVjdCwgaW5mbykge1xuICAgIGFkZFJlc3VsdChjb25zdHJ1Y3QsIGluZm8uZnJvbSlcbiAgfVxuXG4gIC8vIERpc2NhcmQgcmVzdWx0cy5cbiAgZnVuY3Rpb24gb25zdWNjZXNzZnVsY2hlY2soY29uc3RydWN0LCBpbmZvKSB7XG4gICAgaW5mby5yZXN0b3JlKClcbiAgfVxuXG4gIC8vIEZhY3RvcnkgdG8gYXR0ZW1wdC9jaGVjay9pbnRlcnJ1cHQuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdEZhY3Rvcnkob25yZXR1cm4sIGZpZWxkcykge1xuICAgIHJldHVybiBob29rXG5cbiAgICAvLyBIYW5kbGUgZWl0aGVyIGFuIG9iamVjdCBtYXBwaW5nIGNvZGVzIHRvIGNvbnN0cnVjdHMsIGEgbGlzdCBvZlxuICAgIC8vIGNvbnN0cnVjdHMsIG9yIGEgc2luZ2xlIGNvbnN0cnVjdC5cbiAgICBmdW5jdGlvbiBob29rKGNvbnN0cnVjdHMsIHJldHVyblN0YXRlLCBib2d1c1N0YXRlKSB7XG4gICAgICB2YXIgbGlzdE9mQ29uc3RydWN0c1xuICAgICAgdmFyIGNvbnN0cnVjdEluZGV4XG4gICAgICB2YXIgY3VycmVudENvbnN0cnVjdFxuICAgICAgdmFyIGluZm9cblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdHMudG9rZW5pemUgfHwgJ2xlbmd0aCcgaW4gY29uc3RydWN0c1xuICAgICAgICA/IGhhbmRsZUxpc3RPZkNvbnN0cnVjdHMobWluaWZsYXQoY29uc3RydWN0cykpXG4gICAgICAgIDogaGFuZGxlTWFwT2ZDb25zdHJ1Y3RzXG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hcE9mQ29uc3RydWN0cyhjb2RlKSB7XG4gICAgICAgIGlmIChjb2RlIGluIGNvbnN0cnVjdHMgfHwgbnVsbCBpbiBjb25zdHJ1Y3RzKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUxpc3RPZkNvbnN0cnVjdHMoXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGBudWxsYCBpcyB1c2VkIGJ5IHNvbWUgZXh0ZW5zaW9ucyAqL1xuICAgICAgICAgICAgY29uc3RydWN0cy5udWxsXG4gICAgICAgICAgICAgID8gbWluaWZsYXQoY29uc3RydWN0c1tjb2RlXSkuY29uY2F0KG1pbmlmbGF0KGNvbnN0cnVjdHMubnVsbCkpXG4gICAgICAgICAgICAgIDogY29uc3RydWN0c1tjb2RlXVxuICAgICAgICAgICkoY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2d1c1N0YXRlKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUxpc3RPZkNvbnN0cnVjdHMobGlzdCkge1xuICAgICAgICBsaXN0T2ZDb25zdHJ1Y3RzID0gbGlzdFxuICAgICAgICBjb25zdHJ1Y3RJbmRleCA9IDBcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNvbnN0cnVjdChsaXN0W2NvbnN0cnVjdEluZGV4XSlcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ29uc3RydWN0KGNvbnN0cnVjdCkge1xuICAgICAgICByZXR1cm4gc3RhcnRcblxuICAgICAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICAgICAgLy8gVG8gZG86IG5vdCBuZWRlIHRvIHN0b3JlIGlmIHRoZXJlIGlzIG5vIGJvZ3VzIHN0YXRlLCBwcm9iYWJseT9cbiAgICAgICAgICAvLyBDdXJyZW50bHkgZG9lc27igJl0IHdvcmsgYmVjYXVzZSBgaW5zcGVjdGAgaW4gZG9jdW1lbnQgZG9lcyBhIGNoZWNrXG4gICAgICAgICAgLy8gdy9vIGEgYm9ndXMsIHdoaWNoIGRvZXNu4oCZdCBtYWtlIHNlbnNlLiBCdXQgaXQgZG9lcyBzZWVtIHRvIGhlbHAgcGVyZlxuICAgICAgICAgIC8vIGJ5IG5vdCBzdG9yaW5nLlxuICAgICAgICAgIGluZm8gPSBzdG9yZSgpXG4gICAgICAgICAgY3VycmVudENvbnN0cnVjdCA9IGNvbnN0cnVjdFxuXG4gICAgICAgICAgaWYgKCFjb25zdHJ1Y3QucGFydGlhbCkge1xuICAgICAgICAgICAgY29udGV4dC5jdXJyZW50Q29uc3RydWN0ID0gY29uc3RydWN0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdC50b2tlbml6ZS5jYWxsKFxuICAgICAgICAgICAgZmllbGRzID8gYXNzaWduKHt9LCBjb250ZXh0LCBmaWVsZHMpIDogY29udGV4dCxcbiAgICAgICAgICAgIGVmZmVjdHMsXG4gICAgICAgICAgICBvayxcbiAgICAgICAgICAgIG5va1xuICAgICAgICAgICkoY29kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvayhjb2RlKSB7XG4gICAgICAgIGNvbnN1bWVkID0gdHJ1ZVxuICAgICAgICBvbnJldHVybihjdXJyZW50Q29uc3RydWN0LCBpbmZvKVxuICAgICAgICByZXR1cm4gcmV0dXJuU3RhdGVcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm9rKGNvZGUpIHtcbiAgICAgICAgY29uc3VtZWQgPSB0cnVlXG4gICAgICAgIGluZm8ucmVzdG9yZSgpXG5cbiAgICAgICAgaWYgKCsrY29uc3RydWN0SW5kZXggPCBsaXN0T2ZDb25zdHJ1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVDb25zdHJ1Y3QobGlzdE9mQ29uc3RydWN0c1tjb25zdHJ1Y3RJbmRleF0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9ndXNTdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc3VsdChjb25zdHJ1Y3QsIGZyb20pIHtcbiAgICBpZiAoY29uc3RydWN0LnJlc29sdmVBbGwgJiYgcmVzb2x2ZUFsbENvbnN0cnVjdHMuaW5kZXhPZihjb25zdHJ1Y3QpIDwgMCkge1xuICAgICAgcmVzb2x2ZUFsbENvbnN0cnVjdHMucHVzaChjb25zdHJ1Y3QpXG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdC5yZXNvbHZlKSB7XG4gICAgICBjaHVua2VkU3BsaWNlKFxuICAgICAgICBjb250ZXh0LmV2ZW50cyxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgY29udGV4dC5ldmVudHMubGVuZ3RoIC0gZnJvbSxcbiAgICAgICAgY29uc3RydWN0LnJlc29sdmUoY29udGV4dC5ldmVudHMuc2xpY2UoZnJvbSksIGNvbnRleHQpXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdC5yZXNvbHZlVG8pIHtcbiAgICAgIGNvbnRleHQuZXZlbnRzID0gY29uc3RydWN0LnJlc29sdmVUbyhjb250ZXh0LmV2ZW50cywgY29udGV4dClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZSgpIHtcbiAgICB2YXIgc3RhcnRQb2ludCA9IG5vdygpXG4gICAgdmFyIHN0YXJ0UHJldmlvdXMgPSBjb250ZXh0LnByZXZpb3VzXG4gICAgdmFyIHN0YXJ0Q3VycmVudENvbnN0cnVjdCA9IGNvbnRleHQuY3VycmVudENvbnN0cnVjdFxuICAgIHZhciBzdGFydEV2ZW50c0luZGV4ID0gY29udGV4dC5ldmVudHMubGVuZ3RoXG4gICAgdmFyIHN0YXJ0U3RhY2sgPSBBcnJheS5mcm9tKHN0YWNrKVxuXG4gICAgcmV0dXJuIHtyZXN0b3JlOiByZXN0b3JlLCBmcm9tOiBzdGFydEV2ZW50c0luZGV4fVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICAgIHBvaW50ID0gc3RhcnRQb2ludFxuICAgICAgY29udGV4dC5wcmV2aW91cyA9IHN0YXJ0UHJldmlvdXNcbiAgICAgIGNvbnRleHQuY3VycmVudENvbnN0cnVjdCA9IHN0YXJ0Q3VycmVudENvbnN0cnVjdFxuICAgICAgY29udGV4dC5ldmVudHMubGVuZ3RoID0gc3RhcnRFdmVudHNJbmRleFxuICAgICAgc3RhY2sgPSBzdGFydFN0YWNrXG4gICAgICBhY2NvdW50Rm9yUG90ZW50aWFsU2tpcCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWNjb3VudEZvclBvdGVudGlhbFNraXAoKSB7XG4gICAgaWYgKHBvaW50LmxpbmUgaW4gY29sdW1uU3RhcnQgJiYgcG9pbnQuY29sdW1uIDwgMikge1xuICAgICAgcG9pbnQuY29sdW1uID0gY29sdW1uU3RhcnRbcG9pbnQubGluZV1cbiAgICAgIHBvaW50Lm9mZnNldCArPSBjb2x1bW5TdGFydFtwb2ludC5saW5lXSAtIDFcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWluaWZsYXRcblxuZnVuY3Rpb24gbWluaWZsYXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICA/IFtdXG4gICAgOiAnbGVuZ3RoJyBpbiB2YWx1ZVxuICAgID8gdmFsdWVcbiAgICA6IFt2YWx1ZV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbW92ZVBvaW50XG5cbi8vIE5vdGUhIGBtb3ZlYCBvbmx5IHdvcmtzIGluc2lkZSBsaW5lcyEgSXTigJlzIG5vdCBwb3NzaWJsZSB0byBtb3ZlIHBhc3Qgb3RoZXJcbi8vIGNodW5rcyAocmVwbGFjZW1lbnQgY2hhcmFjdGVycywgdGFicywgb3IgbGluZSBlbmRpbmdzKS5cbmZ1bmN0aW9uIG1vdmVQb2ludChwb2ludCwgb2Zmc2V0KSB7XG4gIHBvaW50LmNvbHVtbiArPSBvZmZzZXRcbiAgcG9pbnQub2Zmc2V0ICs9IG9mZnNldFxuICBwb2ludC5fYnVmZmVySW5kZXggKz0gb2Zmc2V0XG4gIHJldHVybiBwb2ludFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVJZGVudGlmaWVyXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXIodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZVxuICAgICAgLy8gQ29sbGFwc2UgTWFya2Rvd24gd2hpdGVzcGFjZS5cbiAgICAgIC5yZXBsYWNlKC9bXFx0XFxuXFxyIF0rL2csICcgJylcbiAgICAgIC8vIFRyaW0uXG4gICAgICAucmVwbGFjZSgvXiB8ICQvZywgJycpXG4gICAgICAvLyBTb21lIGNoYXJhY3RlcnMgYXJlIGNvbnNpZGVyZWQg4oCcdXBwZXJjYXNl4oCdLCBidXQgaWYgdGhlaXIgbG93ZXJjYXNlXG4gICAgICAvLyBjb3VudGVycGFydCBpcyB1cHBlcmNhc2VkIHdpbGwgcmVzdWx0IGluIGEgZGlmZmVyZW50IHVwcGVyY2FzZVxuICAgICAgLy8gY2hhcmFjdGVyLlxuICAgICAgLy8gSGVuY2UsIHRvIGdldCB0aGF0IGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAgICAgIC8vIFVwcGVyIGNhc2UgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbm90IGludGVyYWN0IHdpdGggZGVmYXVsdCBwcm90b3R5cGFsXG4gICAgICAvLyBtZXRob2RzOiBubyBvYmplY3QgbWV0aG9kIGlzIHVwcGVyY2FzZS5cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudG9VcHBlckNhc2UoKVxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHByZWZpeFNpemVcblxudmFyIHNpemVDaHVua3MgPSByZXF1aXJlKCcuL3NpemUtY2h1bmtzJylcblxuZnVuY3Rpb24gcHJlZml4U2l6ZShldmVudHMsIHR5cGUpIHtcbiAgdmFyIHRhaWwgPSBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdXG4gIGlmICghdGFpbCB8fCB0YWlsWzFdLnR5cGUgIT09IHR5cGUpIHJldHVybiAwXG4gIHJldHVybiBzaXplQ2h1bmtzKHRhaWxbMl0uc2xpY2VTdHJlYW0odGFpbFsxXSkpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlZ2V4Q2hlY2tcblxudmFyIGZyb21DaGFyQ29kZSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Zyb20tY2hhci1jb2RlJylcblxuZnVuY3Rpb24gcmVnZXhDaGVjayhyZWdleCkge1xuICByZXR1cm4gY2hlY2tcbiAgZnVuY3Rpb24gY2hlY2soY29kZSkge1xuICAgIHJldHVybiByZWdleC50ZXN0KGZyb21DaGFyQ29kZShjb2RlKSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXNvbHZlQWxsXG5cbmZ1bmN0aW9uIHJlc29sdmVBbGwoY29uc3RydWN0cywgZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBjYWxsZWQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzb2x2ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICByZXNvbHZlID0gY29uc3RydWN0c1tpbmRleF0ucmVzb2x2ZUFsbFxuXG4gICAgaWYgKHJlc29sdmUgJiYgY2FsbGVkLmluZGV4T2YocmVzb2x2ZSkgPCAwKSB7XG4gICAgICBldmVudHMgPSByZXNvbHZlKGV2ZW50cywgY29udGV4dClcbiAgICAgIGNhbGxlZC5wdXNoKHJlc29sdmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzYWZlRnJvbUludFxuXG52YXIgZnJvbUNoYXJDb2RlID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUnKVxuXG5mdW5jdGlvbiBzYWZlRnJvbUludCh2YWx1ZSwgYmFzZSkge1xuICB2YXIgY29kZSA9IHBhcnNlSW50KHZhbHVlLCBiYXNlKVxuXG4gIGlmIChcbiAgICAvLyBDMCBleGNlcHQgZm9yIEhULCBMRiwgRkYsIENSLCBzcGFjZVxuICAgIGNvZGUgPCA5IHx8XG4gICAgY29kZSA9PT0gMTEgfHxcbiAgICAoY29kZSA+IDEzICYmIGNvZGUgPCAzMikgfHxcbiAgICAvLyBDb250cm9sIGNoYXJhY3RlciAoREVMKSBvZiB0aGUgYmFzaWMgYmxvY2sgYW5kIEMxIGNvbnRyb2xzLlxuICAgIChjb2RlID4gMTI2ICYmIGNvZGUgPCAxNjApIHx8XG4gICAgLy8gTG9uZSBoaWdoIHN1cnJvZ2F0ZXMgYW5kIGxvdyBzdXJyb2dhdGVzLlxuICAgIChjb2RlID4gNTUyOTUgJiYgY29kZSA8IDU3MzQ0KSB8fFxuICAgIC8vIE5vbmNoYXJhY3RlcnMuXG4gICAgKGNvZGUgPiA2NDk3NSAmJiBjb2RlIDwgNjUwMDgpIHx8XG4gICAgKGNvZGUgJiA2NTUzNSkgPT09IDY1NTM1IHx8XG4gICAgKGNvZGUgJiA2NTUzNSkgPT09IDY1NTM0IHx8XG4gICAgLy8gT3V0IG9mIHJhbmdlXG4gICAgY29kZSA+IDExMTQxMTFcbiAgKSB7XG4gICAgcmV0dXJuICdcXHVGRkZEJ1xuICB9XG5cbiAgcmV0dXJuIGZyb21DaGFyQ29kZShjb2RlKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVDaHVua3NcblxudmFyIGZyb21DaGFyQ29kZSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Zyb20tY2hhci1jb2RlJylcblxuZnVuY3Rpb24gc2VyaWFsaXplQ2h1bmtzKGNodW5rcykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGNodW5rXG4gIHZhciB2YWx1ZVxuICB2YXIgYXRUYWJcblxuICB3aGlsZSAoKytpbmRleCA8IGNodW5rcy5sZW5ndGgpIHtcbiAgICBjaHVuayA9IGNodW5rc1tpbmRleF1cblxuICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IGNodW5rXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTUpIHtcbiAgICAgIHZhbHVlID0gJ1xccidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtNCkge1xuICAgICAgdmFsdWUgPSAnXFxuJ1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC0zKSB7XG4gICAgICB2YWx1ZSA9ICdcXHInICsgJ1xcbidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMikge1xuICAgICAgdmFsdWUgPSAnXFx0J1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC0xKSB7XG4gICAgICBpZiAoYXRUYWIpIGNvbnRpbnVlXG4gICAgICB2YWx1ZSA9ICcgJ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXJyZW50bHkgb25seSByZXBsYWNlbWVudCBjaGFyYWN0ZXIuXG4gICAgICB2YWx1ZSA9IGZyb21DaGFyQ29kZShjaHVuaylcbiAgICB9XG5cbiAgICBhdFRhYiA9IGNodW5rID09PSAtMlxuICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24nKVxuXG5mdW5jdGlvbiBzaGFsbG93KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNpemVDaHVua3NcblxuLy8gTWVhc3VyZSB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlciBjb2RlcyBpbiBjaHVua3MuXG4vLyBDb3VudHMgdGFicyBiYXNlZCBvbiB0aGVpciBleHBhbmRlZCBzaXplLCBhbmQgQ1IrTEYgYXMgb25lIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHNpemVDaHVua3MoY2h1bmtzKSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBzaXplID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2h1bmtzLmxlbmd0aCkge1xuICAgIHNpemUgKz0gdHlwZW9mIGNodW5rc1tpbmRleF0gPT09ICdzdHJpbmcnID8gY2h1bmtzW2luZGV4XS5sZW5ndGggOiAxXG4gIH1cblxuICByZXR1cm4gc2l6ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzbGljZUNodW5rc1xuXG5mdW5jdGlvbiBzbGljZUNodW5rcyhjaHVua3MsIHRva2VuKSB7XG4gIHZhciBzdGFydEluZGV4ID0gdG9rZW4uc3RhcnQuX2luZGV4XG4gIHZhciBzdGFydEJ1ZmZlckluZGV4ID0gdG9rZW4uc3RhcnQuX2J1ZmZlckluZGV4XG4gIHZhciBlbmRJbmRleCA9IHRva2VuLmVuZC5faW5kZXhcbiAgdmFyIGVuZEJ1ZmZlckluZGV4ID0gdG9rZW4uZW5kLl9idWZmZXJJbmRleFxuICB2YXIgdmlld1xuXG4gIGlmIChzdGFydEluZGV4ID09PSBlbmRJbmRleCkge1xuICAgIHZpZXcgPSBbY2h1bmtzW3N0YXJ0SW5kZXhdLnNsaWNlKHN0YXJ0QnVmZmVySW5kZXgsIGVuZEJ1ZmZlckluZGV4KV1cbiAgfSBlbHNlIHtcbiAgICB2aWV3ID0gY2h1bmtzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuXG4gICAgaWYgKHN0YXJ0QnVmZmVySW5kZXggPiAtMSkge1xuICAgICAgdmlld1swXSA9IHZpZXdbMF0uc2xpY2Uoc3RhcnRCdWZmZXJJbmRleClcbiAgICB9XG5cbiAgICBpZiAoZW5kQnVmZmVySW5kZXggPiAwKSB7XG4gICAgICB2aWV3LnB1c2goY2h1bmtzW2VuZEluZGV4XS5zbGljZSgwLCBlbmRCdWZmZXJJbmRleCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZpZXdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3VidG9rZW5pemVcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Fzc2lnbicpXG5cbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZScpXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4vc2hhbGxvdycpXG5cbmZ1bmN0aW9uIHN1YnRva2VuaXplKGV2ZW50cykge1xuICB2YXIganVtcHMgPSB7fVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgZXZlbnRcbiAgdmFyIGxpbmVJbmRleFxuICB2YXIgb3RoZXJJbmRleFxuICB2YXIgb3RoZXJFdmVudFxuICB2YXIgcGFyYW1ldGVyc1xuICB2YXIgc3ViZXZlbnRzXG4gIHZhciBtb3JlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGluZGV4IGluIGp1bXBzKSB7XG4gICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgIH1cblxuICAgIGV2ZW50ID0gZXZlbnRzW2luZGV4XVxuXG4gICAgLy8gQWRkIGEgaG9vayBmb3IgdGhlIEdGTSB0YXNrbGlzdCBleHRlbnNpb24sIHdoaWNoIG5lZWRzIHRvIGtub3cgaWYgdGV4dFxuICAgIC8vIGlzIGluIHRoZSBmaXJzdCBjb250ZW50IG9mIGEgbGlzdCBpdGVtLlxuICAgIGlmIChcbiAgICAgIGluZGV4ICYmXG4gICAgICBldmVudFsxXS50eXBlID09PSAnY2h1bmtGbG93JyAmJlxuICAgICAgZXZlbnRzW2luZGV4IC0gMV1bMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4J1xuICAgICkge1xuICAgICAgc3ViZXZlbnRzID0gZXZlbnRbMV0uX3Rva2VuaXplci5ldmVudHNcbiAgICAgIG90aGVySW5kZXggPSAwXG5cbiAgICAgIGlmIChcbiAgICAgICAgb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGggJiZcbiAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nQmxhbmsnXG4gICAgICApIHtcbiAgICAgICAgb3RoZXJJbmRleCArPSAyXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGggJiZcbiAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09ICdjb250ZW50J1xuICAgICAgKSB7XG4gICAgICAgIHdoaWxlICgrK290aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY2h1bmtUZXh0Jykge1xuICAgICAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLmlzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgb3RoZXJJbmRleCsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW50ZXIuXG4gICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICBpZiAoZXZlbnRbMV0uY29udGVudFR5cGUpIHtcbiAgICAgICAgYXNzaWduKGp1bXBzLCBzdWJjb250ZW50KGV2ZW50cywgaW5kZXgpKVxuICAgICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgICAgICBtb3JlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGl0LlxuICAgIGVsc2UgaWYgKGV2ZW50WzFdLl9jb250YWluZXIgfHwgZXZlbnRbMV0uX21vdmVQcmV2aW91c0xpbmVFbmRpbmdzKSB7XG4gICAgICBvdGhlckluZGV4ID0gaW5kZXhcbiAgICAgIGxpbmVJbmRleCA9IHVuZGVmaW5lZFxuXG4gICAgICB3aGlsZSAob3RoZXJJbmRleC0tKSB7XG4gICAgICAgIG90aGVyRXZlbnQgPSBldmVudHNbb3RoZXJJbmRleF1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nQmxhbmsnXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChvdGhlckV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgICAgICAgIGV2ZW50c1tsaW5lSW5kZXhdWzFdLnR5cGUgPSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPSAnbGluZUVuZGluZydcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IG90aGVySW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgIC8vIEZpeCBwb3NpdGlvbi5cbiAgICAgICAgZXZlbnRbMV0uZW5kID0gc2hhbGxvdyhldmVudHNbbGluZUluZGV4XVsxXS5zdGFydClcblxuICAgICAgICAvLyBTd2l0Y2ggY29udGFpbmVyIGV4aXQgdy8gbGluZSBlbmRpbmdzLlxuICAgICAgICBwYXJhbWV0ZXJzID0gZXZlbnRzLnNsaWNlKGxpbmVJbmRleCwgaW5kZXgpXG4gICAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChldmVudClcbiAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIGxpbmVJbmRleCwgaW5kZXggLSBsaW5lSW5kZXggKyAxLCBwYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAhbW9yZVxufVxuXG5mdW5jdGlvbiBzdWJjb250ZW50KGV2ZW50cywgZXZlbnRJbmRleCkge1xuICB2YXIgdG9rZW4gPSBldmVudHNbZXZlbnRJbmRleF1bMV1cbiAgdmFyIGNvbnRleHQgPSBldmVudHNbZXZlbnRJbmRleF1bMl1cbiAgdmFyIHN0YXJ0UG9zaXRpb24gPSBldmVudEluZGV4IC0gMVxuICB2YXIgc3RhcnRQb3NpdGlvbnMgPSBbXVxuICB2YXIgdG9rZW5pemVyID1cbiAgICB0b2tlbi5fdG9rZW5pemVyIHx8IGNvbnRleHQucGFyc2VyW3Rva2VuLmNvbnRlbnRUeXBlXSh0b2tlbi5zdGFydClcbiAgdmFyIGNoaWxkRXZlbnRzID0gdG9rZW5pemVyLmV2ZW50c1xuICB2YXIganVtcHMgPSBbXVxuICB2YXIgZ2FwcyA9IHt9XG4gIHZhciBzdHJlYW1cbiAgdmFyIHByZXZpb3VzXG4gIHZhciBpbmRleFxuICB2YXIgZW50ZXJlZFxuICB2YXIgZW5kXG4gIHZhciBhZGp1c3RcblxuICAvLyBMb29wIGZvcndhcmQgdGhyb3VnaCB0aGUgbGlua2VkIHRva2VucyB0byBwYXNzIHRoZW0gaW4gb3JkZXIgdG8gdGhlXG4gIC8vIHN1YnRva2VuaXplci5cbiAgd2hpbGUgKHRva2VuKSB7XG4gICAgLy8gRmluZCB0aGUgcG9zaXRpb24gb2YgdGhlIGV2ZW50IGZvciB0aGlzIHRva2VuLlxuICAgIHdoaWxlIChldmVudHNbKytzdGFydFBvc2l0aW9uXVsxXSAhPT0gdG9rZW4pIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH1cblxuICAgIHN0YXJ0UG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbilcblxuICAgIGlmICghdG9rZW4uX3Rva2VuaXplcikge1xuICAgICAgc3RyZWFtID0gY29udGV4dC5zbGljZVN0cmVhbSh0b2tlbilcblxuICAgICAgaWYgKCF0b2tlbi5uZXh0KSB7XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICB0b2tlbml6ZXIuZGVmaW5lU2tpcCh0b2tlbi5zdGFydClcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLmlzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtKSB7XG4gICAgICAgIHRva2VuaXplci5fZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0b2tlbml6ZXIud3JpdGUoc3RyZWFtKVxuXG4gICAgICBpZiAodG9rZW4uaXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0pIHtcbiAgICAgICAgdG9rZW5pemVyLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVbnJhdmVsIHRoZSBuZXh0IHRva2VuLlxuICAgIHByZXZpb3VzID0gdG9rZW5cbiAgICB0b2tlbiA9IHRva2VuLm5leHRcbiAgfVxuXG4gIC8vIE5vdywgbG9vcCBiYWNrIHRocm91Z2ggYWxsIGV2ZW50cyAoYW5kIGxpbmtlZCB0b2tlbnMpLCB0byBmaWd1cmUgb3V0IHdoaWNoXG4gIC8vIHBhcnRzIGJlbG9uZyB3aGVyZS5cbiAgdG9rZW4gPSBwcmV2aW91c1xuICBpbmRleCA9IGNoaWxkRXZlbnRzLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdl4oCZdmUgYXQgbGVhc3Qgc2VlbiBzb21ldGhpbmcgKGZpbmFsIGVvbCBpcyBwYXJ0IG9mIHRoZSBsYXN0XG4gICAgLy8gdG9rZW4pLlxuICAgIGlmIChjaGlsZEV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicpIHtcbiAgICAgIGVudGVyZWQgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIEZpbmQgYSB2b2lkIHRva2VuIHRoYXQgaW5jbHVkZXMgYSBicmVhay5cbiAgICAgIGVudGVyZWQgJiZcbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4XVsxXS50eXBlID09PSBjaGlsZEV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgJiZcbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4XVsxXS5zdGFydC5saW5lICE9PSBjaGlsZEV2ZW50c1tpbmRleF1bMV0uZW5kLmxpbmVcbiAgICApIHtcbiAgICAgIGFkZChjaGlsZEV2ZW50cy5zbGljZShpbmRleCArIDEsIGVuZCkpXG5cbiAgICAgIC8vIEhlbHAgR0MuXG4gICAgICB0b2tlbi5fdG9rZW5pemVyID0gdG9rZW4ubmV4dCA9IHVuZGVmaW5lZFxuICAgICAgdG9rZW4gPSB0b2tlbi5wcmV2aW91c1xuICAgICAgZW5kID0gaW5kZXggKyAxXG4gICAgfVxuICB9XG5cbiAgLy8gSGVscCBHQy5cbiAgdG9rZW5pemVyLmV2ZW50cyA9IHRva2VuLl90b2tlbml6ZXIgPSB0b2tlbi5uZXh0ID0gdW5kZWZpbmVkXG5cbiAgLy8gRG8gaGVhZDpcbiAgYWRkKGNoaWxkRXZlbnRzLnNsaWNlKDAsIGVuZCkpXG5cbiAgaW5kZXggPSAtMVxuICBhZGp1c3QgPSAwXG5cbiAgd2hpbGUgKCsraW5kZXggPCBqdW1wcy5sZW5ndGgpIHtcbiAgICBnYXBzW2FkanVzdCArIGp1bXBzW2luZGV4XVswXV0gPSBhZGp1c3QgKyBqdW1wc1tpbmRleF1bMV1cbiAgICBhZGp1c3QgKz0ganVtcHNbaW5kZXhdWzFdIC0ganVtcHNbaW5kZXhdWzBdIC0gMVxuICB9XG5cbiAgcmV0dXJuIGdhcHNcblxuICBmdW5jdGlvbiBhZGQoc2xpY2UpIHtcbiAgICB2YXIgc3RhcnQgPSBzdGFydFBvc2l0aW9ucy5wb3AoKVxuICAgIGp1bXBzLnVuc2hpZnQoW3N0YXJ0LCBzdGFydCArIHNsaWNlLmxlbmd0aCAtIDFdKVxuICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBzdGFydCwgMiwgc2xpY2UpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxudmFyIGVsXG5cbnZhciBzZW1pY29sb24gPSA1OSAvLyAgJzsnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlRW50aXR5XG5cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSB7XG4gIHZhciBlbnRpdHkgPSAnJicgKyBjaGFyYWN0ZXJzICsgJzsnXG4gIHZhciBjaGFyXG5cbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgZWwuaW5uZXJIVE1MID0gZW50aXR5XG4gIGNoYXIgPSBlbC50ZXh0Q29udGVudFxuXG4gIC8vIFNvbWUgZW50aXRpZXMgZG8gbm90IHJlcXVpcmUgdGhlIGNsb3Npbmcgc2VtaWNvbG9uIChgJm5vdGAgLSBmb3IgaW5zdGFuY2UpLFxuICAvLyB3aGljaCBsZWFkcyB0byBzaXR1YXRpb25zIHdoZXJlIHBhcnNpbmcgdGhlIGFzc3VtZWQgZW50aXR5IG9mICZub3RpdDsgd2lsbFxuICAvLyByZXN1bHQgaW4gdGhlIHN0cmluZyBgwqxpdDtgLiAgV2hlbiB3ZSBlbmNvdW50ZXIgYSB0cmFpbGluZyBzZW1pY29sb24gYWZ0ZXJcbiAgLy8gcGFyc2luZyBhbmQgdGhlIGVudGl0eSB0byBkZWNvZGUgd2FzIG5vdCBhIHNlbWljb2xvbiAoYCZzZW1pO2ApLCB3ZSBjYW5cbiAgLy8gYXNzdW1lIHRoYXQgdGhlIG1hdGNoaW5nIHdhcyBpbmNvbXBsZXRlXG4gIGlmIChjaGFyLmNoYXJDb2RlQXQoY2hhci5sZW5ndGggLSAxKSA9PT0gc2VtaWNvbG9uICYmIGNoYXJhY3RlcnMgIT09ICdzZW1pJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gSWYgdGhlIGRlY29kZWQgc3RyaW5nIGlzIGVxdWFsIHRvIHRoZSBpbnB1dCwgdGhlIGVudGl0eSB3YXMgbm90IHZhbGlkXG4gIHJldHVybiBjaGFyID09PSBlbnRpdHkgPyBmYWxzZSA6IGNoYXJcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgZnJvbU1hcmtkb3duID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJylcblxuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICB0aGlzLlBhcnNlciA9IHBhcnNlXG5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgcmV0dXJuIGZyb21NYXJrZG93bihcbiAgICAgIGRvYyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlbGYuZGF0YSgnc2V0dGluZ3MnKSwgb3B0aW9ucywge1xuICAgICAgICAvLyBOb3RlOiB0aGVzZSBvcHRpb25zIGFyZSBub3QgaW4gdGhlIHJlYWRtZS5cbiAgICAgICAgLy8gVGhlIGdvYWwgaXMgZm9yIHRoZW0gdG8gYmUgc2V0IGJ5IHBsdWdpbnMgb24gYGRhdGFgIGluc3RlYWQgb2YgYmVpbmdcbiAgICAgICAgLy8gcGFzc2VkIGJ5IHVzZXJzLlxuICAgICAgICBleHRlbnNpb25zOiBzZWxmLmRhdGEoJ21pY3JvbWFya0V4dGVuc2lvbnMnKSB8fCBbXSxcbiAgICAgICAgbWRhc3RFeHRlbnNpb25zOiBzZWxmLmRhdGEoJ2Zyb21NYXJrZG93bkV4dGVuc2lvbnMnKSB8fCBbXVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG52YXIgdG9NYXJrZG93biA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICB0aGlzLkNvbXBpbGVyID0gY29tcGlsZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGUodHJlZSkge1xuICAgIHJldHVybiB0b01hcmtkb3duKFxuICAgICAgdHJlZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlbGYuZGF0YSgnc2V0dGluZ3MnKSwgb3B0aW9ucywge1xuICAgICAgICAvLyBOb3RlOiB0aGlzIG9wdGlvbiBpcyBub3QgaW4gdGhlIHJlYWRtZS5cbiAgICAgICAgLy8gVGhlIGdvYWwgaXMgZm9yIGl0IHRvIGJlIHNldCBieSBwbHVnaW5zIG9uIGBkYXRhYCBpbnN0ZWFkIG9mIGJlaW5nXG4gICAgICAgIC8vIHBhc3NlZCBieSB1c2Vycy5cbiAgICAgICAgZXh0ZW5zaW9uczogc2VsZi5kYXRhKCd0b01hcmtkb3duRXh0ZW5zaW9ucycpIHx8IFtdXG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmlmaWVkID0gcmVxdWlyZSgndW5pZmllZCcpXG52YXIgcGFyc2UgPSByZXF1aXJlKCdyZW1hcmstcGFyc2UnKVxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJ3JlbWFyay1zdHJpbmdpZnknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWZpZWQoKS51c2UocGFyc2UpLnVzZShzdHJpbmdpZnkpLmZyZWV6ZSgpXG4iLCIvKiFcbiAqIHJlcGVhdC1zdHJpbmcgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3JlcGVhdC1zdHJpbmc+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSZXN1bHRzIGNhY2hlXG4gKi9cblxudmFyIHJlcyA9ICcnO1xudmFyIGNhY2hlO1xuXG4vKipcbiAqIEV4cG9zZSBgcmVwZWF0YFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVwZWF0O1xuXG4vKipcbiAqIFJlcGVhdCB0aGUgZ2l2ZW4gYHN0cmluZ2AgdGhlIHNwZWNpZmllZCBgbnVtYmVyYFxuICogb2YgdGltZXMuXG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJyk7XG4gKiByZXBlYXQoJ0EnLCA1KTtcbiAqIC8vPT4gQUFBQUFcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyaW5nYCBUaGUgc3RyaW5nIHRvIHJlcGVhdFxuICogQHBhcmFtIHtOdW1iZXJ9IGBudW1iZXJgIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gUmVwZWF0ZWQgc3RyaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIG51bSkge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG5cbiAgLy8gY292ZXIgY29tbW9uLCBxdWljayB1c2UgY2FzZXNcbiAgaWYgKG51bSA9PT0gMSkgcmV0dXJuIHN0cjtcbiAgaWYgKG51bSA9PT0gMikgcmV0dXJuIHN0ciArIHN0cjtcblxuICB2YXIgbWF4ID0gc3RyLmxlbmd0aCAqIG51bTtcbiAgaWYgKGNhY2hlICE9PSBzdHIgfHwgdHlwZW9mIGNhY2hlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNhY2hlID0gc3RyO1xuICAgIHJlcyA9ICcnO1xuICB9IGVsc2UgaWYgKHJlcy5sZW5ndGggPj0gbWF4KSB7XG4gICAgcmV0dXJuIHJlcy5zdWJzdHIoMCwgbWF4KTtcbiAgfVxuXG4gIHdoaWxlIChtYXggPiByZXMubGVuZ3RoICYmIG51bSA+IDEpIHtcbiAgICBpZiAobnVtICYgMSkge1xuICAgICAgcmVzICs9IHN0cjtcbiAgICB9XG5cbiAgICBudW0gPj49IDE7XG4gICAgc3RyICs9IHN0cjtcbiAgfVxuXG4gIHJlcyArPSBzdHI7XG4gIHJlcyA9IHJlcy5zdWJzdHIoMCwgbWF4KTtcbiAgcmV0dXJuIHJlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFeHQobnBhdGgsIGV4dCkge1xuICBpZiAodHlwZW9mIG5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIGlmIChucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICB2YXIgbkZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShucGF0aCwgcGF0aC5leHRuYW1lKG5wYXRoKSkgKyBleHQ7XG4gIHJldHVybiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG5wYXRoKSwgbkZpbGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlRXh0O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSB0cm91Z2hcblxudHJvdWdoLndyYXAgPSB3cmFwXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbi8vIENyZWF0ZSBuZXcgbWlkZGxld2FyZS5cbmZ1bmN0aW9uIHRyb3VnaCgpIHtcbiAgdmFyIGZucyA9IFtdXG4gIHZhciBtaWRkbGV3YXJlID0ge31cblxuICBtaWRkbGV3YXJlLnJ1biA9IHJ1blxuICBtaWRkbGV3YXJlLnVzZSA9IHVzZVxuXG4gIHJldHVybiBtaWRkbGV3YXJlXG5cbiAgLy8gUnVuIGBmbnNgLiAgTGFzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcGxldGlvbiBoYW5kbGVyLlxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgaW5wdXQgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgLTEpXG4gICAgdmFyIGRvbmUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAodHlwZW9mIGRvbmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24gYXMgbGFzdCBhcmd1bWVudCwgbm90ICcgKyBkb25lKVxuICAgIH1cblxuICAgIG5leHQuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG5cbiAgICAvLyBSdW4gdGhlIG5leHQgYGZuYCwgaWYgYW55LlxuICAgIGZ1bmN0aW9uIG5leHQoZXJyKSB7XG4gICAgICB2YXIgZm4gPSBmbnNbKytpbmRleF1cbiAgICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICAgIHZhciB2YWx1ZXMgPSBwYXJhbXMuc2xpY2UoMSlcbiAgICAgIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAgIHZhciBwb3MgPSAtMVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGRvbmUoZXJyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ29weSBub24tbnVsbHkgaW5wdXQgaW50byB2YWx1ZXMuXG4gICAgICB3aGlsZSAoKytwb3MgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHZhbHVlc1twb3NdID09PSBudWxsIHx8IHZhbHVlc1twb3NdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWx1ZXNbcG9zXSA9IGlucHV0W3Bvc11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dCA9IHZhbHVlc1xuXG4gICAgICAvLyBOZXh0IG9yIGRvbmUuXG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgd3JhcChmbiwgbmV4dCkuYXBwbHkobnVsbCwgaW5wdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBgZm5gIHRvIHRoZSBsaXN0LlxuICBmdW5jdGlvbiB1c2UoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGBmbmAgdG8gYmUgYSBmdW5jdGlvbiwgbm90ICcgKyBmbilcbiAgICB9XG5cbiAgICBmbnMucHVzaChmbilcblxuICAgIHJldHVybiBtaWRkbGV3YXJlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBcblxuLy8gV3JhcCBgZm5gLlxuLy8gQ2FuIGJlIHN5bmMgb3IgYXN5bmM7IHJldHVybiBhIHByb21pc2UsIHJlY2VpdmUgYSBjb21wbGV0aW9uIGhhbmRsZXIsIHJldHVyblxuLy8gbmV3IHZhbHVlcyBhbmQgZXJyb3JzLlxuZnVuY3Rpb24gd3JhcChmbiwgY2FsbGJhY2spIHtcbiAgdmFyIGludm9rZWRcblxuICByZXR1cm4gd3JhcHBlZFxuXG4gIGZ1bmN0aW9uIHdyYXBwZWQoKSB7XG4gICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgIHZhciBjYWxsYmFjayA9IGZuLmxlbmd0aCA+IHBhcmFtcy5sZW5ndGhcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRvbmUpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KG51bGwsIHBhcmFtcylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gV2VsbCwgdGhpcyBpcyBxdWl0ZSB0aGUgcGlja2xlLlxuICAgICAgLy8gYGZuYCByZWNlaXZlZCBhIGNhbGxiYWNrIGFuZCBpbnZva2VkIGl0ICh0aHVzIGNvbnRpbnVpbmcgdGhlIHBpcGVsaW5lKSxcbiAgICAgIC8vIGJ1dCBsYXRlciBhbHNvIHRocmV3IGFuIGVycm9yLlxuICAgICAgLy8gV2XigJlyZSBub3QgYWJvdXQgdG8gcmVzdGFydCB0aGUgcGlwZWxpbmUgYWdhaW4sIHNvIHRoZSBvbmx5IHRoaW5nIGxlZnRcbiAgICAgIC8vIHRvIGRvIGlzIHRvIHRocm93IHRoZSB0aGluZyBpbnN0ZWFkLlxuICAgICAgaWYgKGNhbGxiYWNrICYmIGludm9rZWQpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvbmUoZXJyb3IpXG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0LnRoZW4odGhlbiwgZG9uZSlcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZG9uZShyZXN1bHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYG5leHRgLCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaWYgKCFpbnZva2VkKSB7XG4gICAgICBpbnZva2VkID0gdHJ1ZVxuXG4gICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBkb25lYCB3aXRoIG9uZSB2YWx1ZS5cbiAgLy8gVHJhY2tzIGlmIGFuIGVycm9yIGlzIHBhc3NlZCwgdG9vLlxuICBmdW5jdGlvbiB0aGVuKHZhbHVlKSB7XG4gICAgZG9uZShudWxsLCB2YWx1ZSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBiYWlsID0gcmVxdWlyZSgnYmFpbCcpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKVxudmFyIHBsYWluID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqJylcbnZhciB0cm91Z2ggPSByZXF1aXJlKCd0cm91Z2gnKVxudmFyIHZmaWxlID0gcmVxdWlyZSgndmZpbGUnKVxuXG4vLyBFeHBvc2UgYSBmcm96ZW4gcHJvY2Vzc29yLlxubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkuZnJlZXplKClcblxudmFyIHNsaWNlID0gW10uc2xpY2VcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBQcm9jZXNzIHBpcGVsaW5lLlxudmFyIHBpcGVsaW5lID0gdHJvdWdoKClcbiAgLnVzZShwaXBlbGluZVBhcnNlKVxuICAudXNlKHBpcGVsaW5lUnVuKVxuICAudXNlKHBpcGVsaW5lU3RyaW5naWZ5KVxuXG5mdW5jdGlvbiBwaXBlbGluZVBhcnNlKHAsIGN0eCkge1xuICBjdHgudHJlZSA9IHAucGFyc2UoY3R4LmZpbGUpXG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lUnVuKHAsIGN0eCwgbmV4dCkge1xuICBwLnJ1bihjdHgudHJlZSwgY3R4LmZpbGUsIGRvbmUpXG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnRyZWUgPSB0cmVlXG4gICAgICBjdHguZmlsZSA9IGZpbGVcbiAgICAgIG5leHQoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVN0cmluZ2lmeShwLCBjdHgpIHtcbiAgdmFyIHJlc3VsdCA9IHAuc3RyaW5naWZ5KGN0eC50cmVlLCBjdHguZmlsZSlcbiAgdmFyIGZpbGUgPSBjdHguZmlsZVxuXG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAvLyBFbXB0eS5cbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJyB8fCBidWZmZXIocmVzdWx0KSkge1xuICAgIGZpbGUuY29udGVudHMgPSByZXN1bHRcbiAgfSBlbHNlIHtcbiAgICBmaWxlLnJlc3VsdCA9IHJlc3VsdFxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmlyc3QgcHJvY2Vzc29yLlxuZnVuY3Rpb24gdW5pZmllZCgpIHtcbiAgdmFyIGF0dGFjaGVycyA9IFtdXG4gIHZhciB0cmFuc2Zvcm1lcnMgPSB0cm91Z2goKVxuICB2YXIgbmFtZXNwYWNlID0ge31cbiAgdmFyIGZyb3plbiA9IGZhbHNlXG4gIHZhciBmcmVlemVJbmRleCA9IC0xXG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvLyBMb2NrLlxuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLy8gUGx1Z2lucy5cbiAgcHJvY2Vzc29yLmF0dGFjaGVycyA9IGF0dGFjaGVyc1xuICBwcm9jZXNzb3IudXNlID0gdXNlXG5cbiAgLy8gQVBJLlxuICBwcm9jZXNzb3IucGFyc2UgPSBwYXJzZVxuICBwcm9jZXNzb3Iuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gIHByb2Nlc3Nvci5ydW4gPSBydW5cbiAgcHJvY2Vzc29yLnJ1blN5bmMgPSBydW5TeW5jXG4gIHByb2Nlc3Nvci5wcm9jZXNzID0gcHJvY2Vzc1xuICBwcm9jZXNzb3IucHJvY2Vzc1N5bmMgPSBwcm9jZXNzU3luY1xuXG4gIC8vIEV4cG9zZS5cbiAgcmV0dXJuIHByb2Nlc3NvclxuXG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgYmFzZWQgb24gdGhlIHByb2Nlc3NvciBpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgZnVuY3Rpb24gcHJvY2Vzc29yKCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHVuaWZpZWQoKVxuICAgIHZhciBsZW5ndGggPSBhdHRhY2hlcnMubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBkZXN0aW5hdGlvbi51c2UuYXBwbHkobnVsbCwgYXR0YWNoZXJzW2luZGV4XSlcbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5kYXRhKGV4dGVuZCh0cnVlLCB7fSwgbmFtZXNwYWNlKSlcblxuICAgIHJldHVybiBkZXN0aW5hdGlvblxuICB9XG5cbiAgLy8gRnJlZXplOiB1c2VkIHRvIHNpZ25hbCBhIHByb2Nlc3NvciB0aGF0IGhhcyBmaW5pc2hlZCBjb25maWd1cmF0aW9uLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgdGFrZSB1bmlmaWVkIGl0c2VsZjogaXTigJlzIGZyb3plbi5cbiAgLy8gUGx1Z2lucyBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGl0LlxuICAvLyBSYXRoZXIsIGl0IHNob3VsZCBiZSBleHRlbmRlZCwgYnkgaW52b2tpbmcgaXQsIGJlZm9yZSBtb2RpZnlpbmcgaXQuXG4gIC8vXG4gIC8vIEluIGVzc2VuY2UsIGFsd2F5cyBpbnZva2UgdGhpcyB3aGVuIGV4cG9ydGluZyBhIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gZnJlZXplKCkge1xuICAgIHZhciB2YWx1ZXNcbiAgICB2YXIgcGx1Z2luXG4gICAgdmFyIG9wdGlvbnNcbiAgICB2YXIgdHJhbnNmb3JtZXJcblxuICAgIGlmIChmcm96ZW4pIHtcbiAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICB9XG5cbiAgICB3aGlsZSAoKytmcmVlemVJbmRleCA8IGF0dGFjaGVycy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlcyA9IGF0dGFjaGVyc1tmcmVlemVJbmRleF1cbiAgICAgIHBsdWdpbiA9IHZhbHVlc1swXVxuICAgICAgb3B0aW9ucyA9IHZhbHVlc1sxXVxuICAgICAgdHJhbnNmb3JtZXIgPSBudWxsXG5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWx1ZXNbMV0gPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgdHJhbnNmb3JtZXIgPSBwbHVnaW4uYXBwbHkocHJvY2Vzc29yLCB2YWx1ZXMuc2xpY2UoMSkpXG5cbiAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJhbnNmb3JtZXJzLnVzZSh0cmFuc2Zvcm1lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmcm96ZW4gPSB0cnVlXG4gICAgZnJlZXplSW5kZXggPSBJbmZpbml0eVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuICB9XG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICAvLyBHZXR0ZXIgLyBzZXR0ZXIgZm9yIHByb2Nlc3Nvci1zcGVjaWZpYyBpbmZvcm10aW9uLlxuICBmdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFNldCBga2V5YC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuXG4gICAgICAgIG5hbWVzcGFjZVtrZXldID0gdmFsdWVcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBga2V5YC5cbiAgICAgIHJldHVybiAob3duLmNhbGwobmFtZXNwYWNlLCBrZXkpICYmIG5hbWVzcGFjZVtrZXldKSB8fCBudWxsXG4gICAgfVxuXG4gICAgLy8gU2V0IHNwYWNlLlxuICAgIGlmIChrZXkpIHtcbiAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuICAgICAgbmFtZXNwYWNlID0ga2V5XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgLy8gR2V0IHNwYWNlLlxuICAgIHJldHVybiBuYW1lc3BhY2VcbiAgfVxuXG4gIC8vIFBsdWdpbiBtYW5hZ2VtZW50LlxuICAvL1xuICAvLyBQYXNzIGl0OlxuICAvLyAqICAgYW4gYXR0YWNoZXIgYW5kIG9wdGlvbnMsXG4gIC8vICogICBhIHByZXNldCxcbiAgLy8gKiAgIGEgbGlzdCBvZiBwcmVzZXRzLCBhdHRhY2hlcnMsIGFuZCBhcmd1bWVudHMgKGxpc3Qgb2YgYXR0YWNoZXJzIGFuZFxuICAvLyAgICAgb3B0aW9ucykuXG4gIGZ1bmN0aW9uIHVzZSh2YWx1ZSkge1xuICAgIHZhciBzZXR0aW5nc1xuXG4gICAgYXNzZXJ0VW5mcm96ZW4oJ3VzZScsIGZyb3plbilcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICBhZGRMaXN0KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICBuYW1lc3BhY2Uuc2V0dGluZ3MgPSBleHRlbmQobmFtZXNwYWNlLnNldHRpbmdzIHx8IHt9LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG5cbiAgICBmdW5jdGlvbiBhZGRQcmVzZXQocmVzdWx0KSB7XG4gICAgICBhZGRMaXN0KHJlc3VsdC5wbHVnaW5zKVxuXG4gICAgICBpZiAocmVzdWx0LnNldHRpbmdzKSB7XG4gICAgICAgIHNldHRpbmdzID0gZXh0ZW5kKHNldHRpbmdzIHx8IHt9LCByZXN1bHQuc2V0dGluZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFkZFBsdWdpbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhZGRQbHVnaW4uYXBwbHkobnVsbCwgdmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdChwbHVnaW5zKSB7XG4gICAgICB2YXIgbGVuZ3RoXG4gICAgICB2YXIgaW5kZXhcblxuICAgICAgaWYgKHBsdWdpbnMgPT09IG51bGwgfHwgcGx1Z2lucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICBsZW5ndGggPSBwbHVnaW5zLmxlbmd0aFxuICAgICAgICBpbmRleCA9IC0xXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhZGQocGx1Z2luc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBsaXN0IG9mIHBsdWdpbnMsIG5vdCBgJyArIHBsdWdpbnMgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbiwgdmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IGZpbmQocGx1Z2luKVxuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHBsYWluKGVudHJ5WzFdKSAmJiBwbGFpbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGV4dGVuZChlbnRyeVsxXSwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeVsxXSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2hlcnMucHVzaChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChwbHVnaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudHJ5XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZW50cnkgPSBhdHRhY2hlcnNbaW5kZXhdXG5cbiAgICAgIGlmIChlbnRyeVswXSA9PT0gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlciwgJ3BhcnNlJykpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLlxuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgICAgIHRyZWUgPSB0cmVlIHx8IG5vZGVcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBydW4obm9kZSwgZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3J1blN5bmMnLCAncnVuJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbiAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICAgIHJlc3VsdCA9IHRyZWVcbiAgICB9XG4gIH1cblxuICAvLyBTdHJpbmdpZnkgYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlXG4gIC8vIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeShub2RlLCBkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgQ29tcGlsZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgQ29tcGlsZXIgPSBwcm9jZXNzb3IuQ29tcGlsZXJcbiAgICBhc3NlcnRDb21waWxlcignc3RyaW5naWZ5JywgQ29tcGlsZXIpXG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuXG4gICAgaWYgKG5ld2FibGUoQ29tcGlsZXIsICdjb21waWxlJykpIHtcbiAgICAgIHJldHVybiBuZXcgQ29tcGlsZXIobm9kZSwgZmlsZSkuY29tcGlsZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBpbGVyKG5vZGUsIGZpbGUpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICB9XG5cbiAgLy8gUGFyc2UgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pIGludG8gYSB1bmlzdCBub2RlIHVzaW5nXG4gIC8vIHRoZSBgUGFyc2VyYCBvbiB0aGUgcHJvY2Vzc29yLCB0aGVuIHJ1biB0cmFuc2Zvcm1zIG9uIHRoYXQgbm9kZSwgYW5kXG4gIC8vIGNvbXBpbGUgdGhlIHJlc3VsdGluZyBub2RlIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IsIGFuZFxuICAvLyBzdG9yZSB0aGF0IHJlc3VsdCBvbiB0aGUgdmZpbGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoZG9jLCBjYikge1xuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzJywgcHJvY2Vzc29yLlBhcnNlcilcbiAgICBhc3NlcnRDb21waWxlcigncHJvY2VzcycsIHByb2Nlc3Nvci5Db21waWxlcilcblxuICAgIGlmICghY2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcbiAgICB9XG5cbiAgICBleGVjdXRvcihudWxsLCBjYilcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICAgIHBpcGVsaW5lLnJ1bihwcm9jZXNzb3IsIHtmaWxlOiBmaWxlfSwgZG9uZSlcblxuICAgICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUoZmlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyB0aGUgZ2l2ZW4gZG9jdW1lbnQgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTeW5jKGRvYykge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIGZpbGVcblxuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuICAgIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICBwcm9jZXNzKGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdwcm9jZXNzU3luYycsICdwcm9jZXNzJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gZmlsZVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYSBjb25zdHJ1Y3Rvci5cbmZ1bmN0aW9uIG5ld2FibGUodmFsdWUsIG5hbWUpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB2YWx1ZS5wcm90b3R5cGUgJiZcbiAgICAvLyBBIGZ1bmN0aW9uIHdpdGgga2V5cyBpbiBpdHMgcHJvdG90eXBlIGlzIHByb2JhYmx5IGEgY29uc3RydWN0b3IuXG4gICAgLy8gQ2xhc3Nlc+KAmSBwcm90b3R5cGUgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUsIHNvIHdlIGNoZWNrIGlmIHNvbWUgdmFsdWVcbiAgICAvLyBleGlzdHMgaW4gdGhlIHByb3RvdHlwZS5cbiAgICAoa2V5cyh2YWx1ZS5wcm90b3R5cGUpIHx8IG5hbWUgaW4gdmFsdWUucHJvdG90eXBlKVxuICApXG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0IHdpdGgga2V5cy5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIGtleVxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gQXNzZXJ0IGEgcGFyc2VyIGlzIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCBQYXJzZXIpIHtcbiAgaWYgKHR5cGVvZiBQYXJzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBQYXJzZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYSBjb21waWxlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRDb21waWxlcihuYW1lLCBDb21waWxlcikge1xuICBpZiAodHlwZW9mIENvbXBpbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgQ29tcGlsZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhlIHByb2Nlc3NvciBpcyBub3QgZnJvemVuLlxuZnVuY3Rpb24gYXNzZXJ0VW5mcm96ZW4obmFtZSwgZnJvemVuKSB7XG4gIGlmIChmcm96ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IGludm9rZSBgJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnYCBvbiBhIGZyb3plbiBwcm9jZXNzb3IuXFxuQ3JlYXRlIGEgbmV3IHByb2Nlc3NvciBmaXJzdCwgYnkgaW52b2tpbmcgaXQ6IHVzZSBgcHJvY2Vzc29yKClgIGluc3RlYWQgb2YgYHByb2Nlc3NvcmAuJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgYG5vZGVgIGlzIGEgdW5pc3Qgbm9kZS5cbmZ1bmN0aW9uIGFzc2VydE5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgdHlwZW9mIG5vZGUudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIGdvdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYGNvbXBsZXRlYCBpcyBgdHJ1ZWAuXG5mdW5jdGlvbiBhc3NlcnREb25lKG5hbWUsIGFzeW5jTmFtZSwgY29tcGxldGUpIHtcbiAgaWYgKCFjb21wbGV0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBmaW5pc2hlZCBhc3luYy4gVXNlIGAnICsgYXN5bmNOYW1lICsgJ2AgaW5zdGVhZCdcbiAgICApXG4gIH1cbn1cbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG5cdHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIC8vIE5vdGhpbmcuXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAncG9zaXRpb24nKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ3R5cGUnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZS5wb3NpdGlvbilcbiAgfVxuXG4gIC8vIFBvc2l0aW9uLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdzdGFydCcpIHx8IG93bi5jYWxsKHZhbHVlLCAnZW5kJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUpXG4gIH1cblxuICAvLyBQb2ludC5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnbGluZScpIHx8IG93bi5jYWxsKHZhbHVlLCAnY29sdW1uJykpIHtcbiAgICByZXR1cm4gcG9pbnQodmFsdWUpXG4gIH1cblxuICAvLyA/XG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBwb2ludChwb2ludCkge1xuICBpZiAoIXBvaW50IHx8IHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcpIHtcbiAgICBwb2ludCA9IHt9XG4gIH1cblxuICByZXR1cm4gaW5kZXgocG9pbnQubGluZSkgKyAnOicgKyBpbmRleChwb2ludC5jb2x1bW4pXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICBpZiAoIXBvcyB8fCB0eXBlb2YgcG9zICE9PSAnb2JqZWN0Jykge1xuICAgIHBvcyA9IHt9XG4gIH1cblxuICByZXR1cm4gcG9pbnQocG9zLnN0YXJ0KSArICctJyArIHBvaW50KHBvcy5lbmQpXG59XG5cbmZ1bmN0aW9uIGluZGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAxXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBWTWVzc2FnZVxuXG4vLyBJbmhlcml0IGZyb20gYEVycm9yI2AuXG5mdW5jdGlvbiBWTWVzc2FnZVByb3RvdHlwZSgpIHt9XG5WTWVzc2FnZVByb3RvdHlwZS5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGVcblZNZXNzYWdlLnByb3RvdHlwZSA9IG5ldyBWTWVzc2FnZVByb3RvdHlwZSgpXG5cbi8vIE1lc3NhZ2UgcHJvcGVydGllcy5cbnZhciBwcm90byA9IFZNZXNzYWdlLnByb3RvdHlwZVxuXG5wcm90by5maWxlID0gJydcbnByb3RvLm5hbWUgPSAnJ1xucHJvdG8ucmVhc29uID0gJydcbnByb3RvLm1lc3NhZ2UgPSAnJ1xucHJvdG8uc3RhY2sgPSAnJ1xucHJvdG8uZmF0YWwgPSBudWxsXG5wcm90by5jb2x1bW4gPSBudWxsXG5wcm90by5saW5lID0gbnVsbFxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgVk1lc3NhZ2UuXG4vL1xuLy8gTm90ZTogV2UgY2Fubm90IGludm9rZSBgRXJyb3JgIG9uIHRoZSBjcmVhdGVkIGNvbnRleHQsIGFzIHRoYXQgYWRkcyByZWFkb25seVxuLy8gYGxpbmVgIGFuZCBgY29sdW1uYCBhdHRyaWJ1dGVzIG9uIFNhZmFyaSA5LCB0aHVzIHRocm93aW5nIGFuZCBmYWlsaW5nIHRoZVxuLy8gZGF0YS5cbmZ1bmN0aW9uIFZNZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgcGFydHNcbiAgdmFyIHJhbmdlXG4gIHZhciBsb2NhdGlvblxuXG4gIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgb3JpZ2luID0gcG9zaXRpb25cbiAgICBwb3NpdGlvbiA9IG51bGxcbiAgfVxuXG4gIHBhcnRzID0gcGFyc2VPcmlnaW4ob3JpZ2luKVxuICByYW5nZSA9IHN0cmluZ2lmeShwb3NpdGlvbikgfHwgJzE6MSdcblxuICBsb2NhdGlvbiA9IHtcbiAgICBzdGFydDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH0sXG4gICAgZW5kOiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfVxuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKHBvc2l0aW9uICYmIHBvc2l0aW9uLnBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbi5wb3NpdGlvblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uKSB7XG4gICAgLy8gUG9zaXRpb24uXG4gICAgaWYgKHBvc2l0aW9uLnN0YXJ0KSB7XG4gICAgICBsb2NhdGlvbiA9IHBvc2l0aW9uXG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnN0YXJ0XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBvaW50LlxuICAgICAgbG9jYXRpb24uc3RhcnQgPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGlmIChyZWFzb24uc3RhY2spIHtcbiAgICB0aGlzLnN0YWNrID0gcmVhc29uLnN0YWNrXG4gICAgcmVhc29uID0gcmVhc29uLm1lc3NhZ2VcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IHJlYXNvblxuICB0aGlzLm5hbWUgPSByYW5nZVxuICB0aGlzLnJlYXNvbiA9IHJlYXNvblxuICB0aGlzLmxpbmUgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLmxpbmUgOiBudWxsXG4gIHRoaXMuY29sdW1uID0gcG9zaXRpb24gPyBwb3NpdGlvbi5jb2x1bW4gOiBudWxsXG4gIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICB0aGlzLnNvdXJjZSA9IHBhcnRzWzBdXG4gIHRoaXMucnVsZUlkID0gcGFydHNbMV1cbn1cblxuZnVuY3Rpb24gcGFyc2VPcmlnaW4ob3JpZ2luKSB7XG4gIHZhciByZXN1bHQgPSBbbnVsbCwgbnVsbF1cbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnKSB7XG4gICAgaW5kZXggPSBvcmlnaW4uaW5kZXhPZignOicpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXN1bHRbMV0gPSBvcmlnaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0WzBdID0gb3JpZ2luLnNsaWNlKDAsIGluZGV4KVxuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luLnNsaWNlKGluZGV4ICsgMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbnZhciByZXBsYWNlID0gcmVxdWlyZSgncmVwbGFjZS1leHQnKVxudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG52YXIgcHJvdG8gPSBWRmlsZS5wcm90b3R5cGVcblxuLy8gT3JkZXIgb2Ygc2V0dGluZyAobGVhc3Qgc3BlY2lmaWMgdG8gbW9zdCksIHdlIG5lZWQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZVxuLy8gYHtzdGVtOiAnYScsIHBhdGg6ICd+L2IuanMnfWAgd291bGQgdGhyb3csIGFzIGEgcGF0aCBpcyBuZWVkZWQgYmVmb3JlIGFcbi8vIHN0ZW0gY2FuIGJlIHNldC5cbnZhciBvcmRlciA9IFsnaGlzdG9yeScsICdwYXRoJywgJ2Jhc2VuYW1lJywgJ3N0ZW0nLCAnZXh0bmFtZScsICdkaXJuYW1lJ11cblxucHJvdG8udG9TdHJpbmcgPSB0b1N0cmluZ1xuXG4vLyBBY2Nlc3MgZnVsbCBwYXRoIChgfi9pbmRleC5taW4uanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3BhdGgnLCB7Z2V0OiBnZXRQYXRoLCBzZXQ6IHNldFBhdGh9KVxuXG4vLyBBY2Nlc3MgcGFyZW50IHBhdGggKGB+YCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdkaXJuYW1lJywge2dldDogZ2V0RGlybmFtZSwgc2V0OiBzZXREaXJuYW1lfSlcblxuLy8gQWNjZXNzIGJhc2VuYW1lIChgaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdiYXNlbmFtZScsIHtnZXQ6IGdldEJhc2VuYW1lLCBzZXQ6IHNldEJhc2VuYW1lfSlcblxuLy8gQWNjZXNzIGV4dG5hbWUgKGAuanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2V4dG5hbWUnLCB7Z2V0OiBnZXRFeHRuYW1lLCBzZXQ6IHNldEV4dG5hbWV9KVxuXG4vLyBBY2Nlc3Mgc3RlbSAoYGluZGV4Lm1pbmApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnc3RlbScsIHtnZXQ6IGdldFN0ZW0sIHNldDogc2V0U3RlbX0pXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBmaWxlLlxuZnVuY3Rpb24gVkZpbGUob3B0aW9ucykge1xuICB2YXIgcHJvcFxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyB8fCBidWZmZXIob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge2NvbnRlbnRzOiBvcHRpb25zfVxuICB9IGVsc2UgaWYgKCdtZXNzYWdlJyBpbiBvcHRpb25zICYmICdtZXNzYWdlcycgaW4gb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBWRmlsZShvcHRpb25zKVxuICB9XG5cbiAgdGhpcy5kYXRhID0ge31cbiAgdGhpcy5tZXNzYWdlcyA9IFtdXG4gIHRoaXMuaGlzdG9yeSA9IFtdXG4gIHRoaXMuY3dkID0gcHJvY2Vzcy5jd2QoKVxuXG4gIC8vIFNldCBwYXRoIHJlbGF0ZWQgcHJvcGVydGllcyBpbiB0aGUgY29ycmVjdCBvcmRlci5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBvcmRlci5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHByb3AgPSBvcmRlcltpbmRleF1cblxuICAgIGlmIChvd24uY2FsbChvcHRpb25zLCBwcm9wKSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgbm9uLXBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzLlxuICBmb3IgKHByb3AgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcmRlci5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gc2V0UGF0aChwYXRoKSB7XG4gIGFzc2VydE5vbkVtcHR5KHBhdGgsICdwYXRoJylcblxuICBpZiAocGF0aCAhPT0gdGhpcy5wYXRoKSB7XG4gICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREaXJuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmRpcm5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXREaXJuYW1lKGRpcm5hbWUpIHtcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdkaXJuYW1lJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKGRpcm5hbWUgfHwgJycsIHRoaXMuYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEJhc2VuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmJhc2VuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0QmFzZW5hbWUoYmFzZW5hbWUpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIGFzc2VydFBhcnQoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIGJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRFeHRuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmV4dG5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRFeHRuYW1lKGV4dG5hbWUpIHtcbiAgdmFyIGV4dCA9IGV4dG5hbWUgfHwgJydcblxuICBhc3NlcnRQYXJ0KGV4dCwgJ2V4dG5hbWUnKVxuICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2V4dG5hbWUnKVxuXG4gIGlmIChleHQpIHtcbiAgICBpZiAoZXh0LmNoYXJBdCgwKSAhPT0gJy4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBtdXN0IHN0YXJ0IHdpdGggYC5gJylcbiAgICB9XG5cbiAgICBpZiAoZXh0LmluZGV4T2YoJy4nLCAxKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIGNhbm5vdCBjb250YWluIG11bHRpcGxlIGRvdHMnKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMucGF0aCA9IHJlcGxhY2UodGhpcy5wYXRoLCBleHQpXG59XG5cbmZ1bmN0aW9uIGdldFN0ZW0oKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJ1xuICAgID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgsIHRoaXMuZXh0bmFtZSlcbiAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRTdGVtKHN0ZW0pIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoc3RlbSwgJ3N0ZW0nKVxuICBhc3NlcnRQYXJ0KHN0ZW0sICdzdGVtJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgc3RlbSArICh0aGlzLmV4dG5hbWUgfHwgJycpKVxufVxuXG4vLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBmaWxlLlxuZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2RpbmcpIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5jb250ZW50cyB8fCAnJ1xuICByZXR1cm4gYnVmZmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKGVuY29kaW5nKSA6IFN0cmluZyh2YWx1ZSlcbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBhIHBhdGggKGkuZS4sIGRvZXMgbm90IGNvbnRhaW4gYHBhdGguc2VwYCkuXG5mdW5jdGlvbiBhc3NlcnRQYXJ0KHBhcnQsIG5hbWUpIHtcbiAgaWYgKHBhcnQuaW5kZXhPZihwYXRoLnNlcCkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBhIHBhdGg6IGRpZCBub3QgZXhwZWN0IGAnICsgcGF0aC5zZXAgKyAnYCdcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBlbXB0eS5cbmZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5KHBhcnQsIG5hbWUpIHtcbiAgaWYgKCFwYXJ0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgZW1wdHknKVxuICB9XG59XG5cbi8vIEFzc2VydCBgcGF0aGAgZXhpc3RzLlxuZnVuY3Rpb24gYXNzZXJ0UGF0aChwYXRoLCBuYW1lKSB7XG4gIGlmICghcGF0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2V0dGluZyBgJyArIG5hbWUgKyAnYCByZXF1aXJlcyBgcGF0aGAgdG8gYmUgc2V0IHRvbycpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVk1lc3NhZ2UgPSByZXF1aXJlKCd2ZmlsZS1tZXNzYWdlJylcbnZhciBWRmlsZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbnByb3RvLm1lc3NhZ2UgPSBtZXNzYWdlXG5wcm90by5pbmZvID0gaW5mb1xucHJvdG8uZmFpbCA9IGZhaWxcblxuLy8gQ3JlYXRlIGEgbWVzc2FnZSB3aXRoIGByZWFzb25gIGF0IGBwb3NpdGlvbmAuXG4vLyBXaGVuIGFuIGVycm9yIGlzIHBhc3NlZCBpbiBhcyBgcmVhc29uYCwgY29waWVzIHRoZSBzdGFjay5cbmZ1bmN0aW9uIG1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBmaWxlUGF0aCA9IHRoaXMucGF0aFxuICB2YXIgbWVzc2FnZSA9IG5ldyBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pXG5cbiAgaWYgKGZpbGVQYXRoKSB7XG4gICAgbWVzc2FnZS5uYW1lID0gZmlsZVBhdGggKyAnOicgKyBtZXNzYWdlLm5hbWVcbiAgICBtZXNzYWdlLmZpbGUgPSBmaWxlUGF0aFxuICB9XG5cbiAgbWVzc2FnZS5mYXRhbCA9IGZhbHNlXG5cbiAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuLy8gRmFpbDogY3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsIGFuZCB0aHJvd3MgaXQuXG5mdW5jdGlvbiBmYWlsKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cbiAgbWVzc2FnZS5mYXRhbCA9IHRydWVcblxuICB0aHJvdyBtZXNzYWdlXG59XG5cbi8vIEluZm86IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgbWFya3MgdGhlIGZhdGFsaXR5XG4vLyBhcyBudWxsLlxuZnVuY3Rpb24gaW5mbygpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBudWxsXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIG5vb3AgPSBGdW5jdGlvbi5wcm90b3R5cGVcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBIYW5kbGUgdmFsdWVzIGJhc2VkIG9uIGEgcHJvcGVydHkuXG5mdW5jdGlvbiBmYWN0b3J5KGtleSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgZnVuY3Rpb24gb25lKHZhbHVlKSB7XG4gICAgdmFyIGZuID0gb25lLmludmFsaWRcbiAgICB2YXIgaGFuZGxlcnMgPSBvbmUuaGFuZGxlcnNcblxuICAgIGlmICh2YWx1ZSAmJiBvd24uY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgZm4gPSBvd24uY2FsbChoYW5kbGVycywgdmFsdWVba2V5XSkgPyBoYW5kbGVyc1t2YWx1ZVtrZXldXSA6IG9uZS51bmtub3duXG4gICAgfVxuXG4gICAgcmV0dXJuIChmbiB8fCBub29wKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cblxuICBvbmUuaGFuZGxlcnMgPSBzZXR0aW5ncy5oYW5kbGVycyB8fCB7fVxuICBvbmUuaW52YWxpZCA9IHNldHRpbmdzLmludmFsaWRcbiAgb25lLnVua25vd24gPSBzZXR0aW5ncy51bmtub3duXG5cbiAgcmV0dXJuIG9uZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==