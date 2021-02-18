(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "../../node_modules/comma-separated-tokens/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/comma-separated-tokens/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "../../node_modules/hast-util-is-element/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-is-element/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isElement

// Check if if `node` is an `element` and, if `tagNames` is given, `node`
// matches them `tagNames`.
function isElement(node, tagNames) {
  var name

  if (
    !(
      tagNames === null ||
      tagNames === undefined ||
      typeof tagNames === 'string' ||
      (typeof tagNames === 'object' && tagNames.length !== 0)
    )
  ) {
    throw new Error(
      'Expected `string` or `Array.<string>` for `tagNames`, not `' +
        tagNames +
        '`'
    )
  }

  if (
    !node ||
    typeof node !== 'object' ||
    node.type !== 'element' ||
    typeof node.tagName !== 'string'
  ) {
    return false
  }

  if (tagNames === null || tagNames === undefined) {
    return true
  }

  name = node.tagName

  if (typeof tagNames === 'string') {
    return name === tagNames
  }

  return tagNames.indexOf(name) !== -1
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/index.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "../../node_modules/hast-util-to-html/lib/index.js")


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/all.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/all.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var one = __webpack_require__(/*! ./one */ "../../node_modules/hast-util-to-html/lib/one.js")

module.exports = all

// Serialize all children of `parent`.
function all(ctx, parent) {
  var children = parent && parent.children
  var length = children && children.length
  var index = -1
  var results = []

  while (++index < length) {
    results[index] = one(ctx, children[index], index, parent)
  }

  return results.join('')
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/comment.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/comment.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var entities = __webpack_require__(/*! stringify-entities */ "../../node_modules/stringify-entities/index.js")

module.exports = serializeComment

// See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
var breakout = /^>|^->|<!--|-->|--!>|<!-$/g
var subset = ['<', '>']
var bogusSubset = ['>']

function serializeComment(ctx, node) {
  var value = node.value

  if (ctx.bogusComments) {
    return (
      '<?' + entities(value, xtend(ctx.entities, {subset: bogusSubset})) + '>'
    )
  }

  return '<!--' + value.replace(breakout, encode) + '-->'

  function encode($0) {
    return entities($0, xtend(ctx.entities, {subset: subset}))
  }
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/constants.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/constants.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Characters.
var nil = '\0'
var ampersand = '&'
var space = ' '
var tab = '\t'
var graveAccent = '`'
var quotationMark = '"'
var apostrophe = "'"
var equalsTo = '='
var lessThan = '<'
var greaterThan = '>'
var slash = '/'
var lineFeed = '\n'
var carriageReturn = '\r'
var formFeed = '\f'

var whitespace = [space, tab, lineFeed, carriageReturn, formFeed]

// See: <https://html.spec.whatwg.org/#attribute-name-state>.
var name = whitespace.concat(ampersand, slash, greaterThan, equalsTo)

// See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
var unquoted = whitespace.concat(ampersand, greaterThan)
var unquotedSafe = unquoted.concat(
  nil,
  quotationMark,
  apostrophe,
  lessThan,
  equalsTo,
  graveAccent
)

// See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
var singleQuoted = [ampersand, apostrophe]

// See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
var doubleQuoted = [ampersand, quotationMark]

// Maps of subsets.
// Each value is a matrix of tuples.
// The first value causes parse errors, the second is valid.
// Of both values, the first value is unsafe, and the second is safe.
module.exports = {
  name: [
    [name, name.concat(quotationMark, apostrophe, graveAccent)],
    [
      name.concat(nil, quotationMark, apostrophe, lessThan),
      name.concat(nil, quotationMark, apostrophe, lessThan, graveAccent)
    ]
  ],
  unquoted: [
    [unquoted, unquotedSafe],
    [unquotedSafe, unquotedSafe]
  ],
  single: [
    [singleQuoted, singleQuoted.concat(quotationMark, graveAccent)],
    [
      singleQuoted.concat(nil),
      singleQuoted.concat(nil, quotationMark, graveAccent)
    ]
  ],
  double: [
    [doubleQuoted, doubleQuoted.concat(apostrophe, graveAccent)],
    [
      doubleQuoted.concat(nil),
      doubleQuoted.concat(nil, apostrophe, graveAccent)
    ]
  ]
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/doctype.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/doctype.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var ccount = __webpack_require__(/*! ccount */ "../../node_modules/ccount/index.js")
var entities = __webpack_require__(/*! stringify-entities */ "../../node_modules/stringify-entities/index.js")

module.exports = serializeDoctype

var docLower = 'doctype'
var docUpper = docLower.toUpperCase()

function serializeDoctype(ctx, node) {
  var doc = ctx.upperDoctype ? docUpper : docLower
  var sep = ctx.tightDoctype ? '' : ' '
  var name = node.name
  var pub = node.public
  var sys = node.system
  var parts = ['<!' + doc]

  if (name) {
    parts.push(sep, name)

    if (pub !== null && pub !== undefined) {
      parts.push(' public', sep, quote(ctx, pub))
    } else if (sys !== null && sys !== undefined) {
      parts.push(' system')
    }

    if (sys !== null && sys !== undefined) {
      parts.push(sep, quote(ctx, sys))
    }
  }

  return parts.join('') + '>'
}

function quote(ctx, value) {
  var primary = ctx.quote
  var secondary = ctx.alternative
  var string = String(value)
  var quote =
    ccount(string, primary) > ccount(string, secondary) ? secondary : primary

  return (
    quote +
    // Prevent breaking out of doctype.
    entities(string, xtend(ctx.entities, {subset: ['<', '&', quote]})) +
    quote
  )
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/element.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/element.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var svg = __webpack_require__(/*! property-information/svg */ "../../node_modules/property-information/svg.js")
var find = __webpack_require__(/*! property-information/find */ "../../node_modules/property-information/find.js")
var spaces = __webpack_require__(/*! space-separated-tokens */ "../../node_modules/space-separated-tokens/index.js").stringify
var commas = __webpack_require__(/*! comma-separated-tokens */ "../../node_modules/comma-separated-tokens/index.js").stringify
var entities = __webpack_require__(/*! stringify-entities */ "../../node_modules/stringify-entities/index.js")
var ccount = __webpack_require__(/*! ccount */ "../../node_modules/ccount/index.js")
var all = __webpack_require__(/*! ./all */ "../../node_modules/hast-util-to-html/lib/all.js")
var constants = __webpack_require__(/*! ./constants */ "../../node_modules/hast-util-to-html/lib/constants.js")

module.exports = serializeElement

var space = ' '
var quotationMark = '"'
var apostrophe = "'"
var equalsTo = '='
var lessThan = '<'
var greaterThan = '>'
var slash = '/'

// eslint-disable-next-line complexity
function serializeElement(ctx, node, index, parent) {
  var parentSchema = ctx.schema
  var name = node.tagName
  var value = ''
  var selfClosing
  var close
  var omit
  var root = node
  var content
  var attrs
  var last

  if (parentSchema.space === 'html' && name === 'svg') {
    ctx.schema = svg
  }

  attrs = serializeAttributes(ctx, node.properties)

  if (ctx.schema.space === 'svg') {
    omit = false
    close = true
    selfClosing = ctx.closeEmpty
  } else {
    omit = ctx.omit
    close = ctx.close
    selfClosing = ctx.voids.indexOf(name.toLowerCase()) !== -1

    if (name === 'template') {
      root = node.content
    }
  }

  content = all(ctx, root)

  // If the node is categorised as void, but it has children, remove the
  // categorisation.
  // This enables for example `menuitem`s, which are void in W3C HTML but not
  // void in WHATWG HTML, to be stringified properly.
  selfClosing = content ? false : selfClosing

  if (attrs || !omit || !omit.opening(node, index, parent)) {
    value = lessThan + name + (attrs ? space + attrs : '')

    if (selfClosing && close) {
      last = attrs.charAt(attrs.length - 1)
      if (
        !ctx.tightClose ||
        last === slash ||
        (ctx.schema.space === 'svg' &&
          last &&
          last !== quotationMark &&
          last !== apostrophe)
      ) {
        value += space
      }

      value += slash
    }

    value += greaterThan
  }

  value += content

  if (!selfClosing && (!omit || !omit.closing(node, index, parent))) {
    value += lessThan + slash + name + greaterThan
  }

  ctx.schema = parentSchema

  return value
}

function serializeAttributes(ctx, props) {
  var values = []
  var key
  var value
  var result
  var length
  var index
  var last

  for (key in props) {
    value = props[key]

    if (value === null || value === undefined) {
      continue
    }

    result = serializeAttribute(ctx, key, value)

    if (result) {
      values.push(result)
    }
  }

  length = values.length
  index = -1

  while (++index < length) {
    result = values[index]
    last = null

    if (ctx.tight) {
      last = result.charAt(result.length - 1)
    }

    // In tight mode, don’t add a space after quoted attributes.
    if (index !== length - 1 && last !== quotationMark && last !== apostrophe) {
      values[index] = result + space
    }
  }

  return values.join('')
}

function serializeAttribute(ctx, key, value) {
  var schema = ctx.schema
  var info = find(schema, key)
  var name = info.attribute

  if (info.overloadedBoolean && (value === name || value === '')) {
    value = true
  } else if (
    info.boolean ||
    (info.overloadedBoolean && typeof value !== 'string')
  ) {
    value = Boolean(value)
  }

  if (
    value === null ||
    value === undefined ||
    value === false ||
    (typeof value === 'number' && isNaN(value))
  ) {
    return ''
  }

  name = serializeAttributeName(ctx, name)

  if (value === true) {
    // There is currently only one boolean property in SVG: `[download]` on
    // `<a>`.
    // This property does not seem to work in browsers (FF, Sa, Ch), so I can’t
    // test if dropping the value works.
    // But I assume that it should:
    //
    // ```html
    // <!doctype html>
    // <svg viewBox="0 0 100 100">
    //   <a href=https://example.com download>
    //     <circle cx=50 cy=40 r=35 />
    //   </a>
    // </svg>
    // ```
    //
    // See: <https://github.com/wooorm/property-information/blob/master/lib/svg.js>
    return name
  }

  return name + serializeAttributeValue(ctx, key, value, info)
}

function serializeAttributeName(ctx, name) {
  // Always encode without parse errors in non-HTML.
  var valid = ctx.schema.space === 'html' ? ctx.valid : 1
  var subset = constants.name[valid][ctx.safe]

  return entities(name, xtend(ctx.entities, {subset: subset}))
}

function serializeAttributeValue(ctx, key, value, info) {
  var options = ctx.entities
  var quote = ctx.quote
  var alternative = ctx.alternative
  var smart = ctx.smart
  var unquoted
  var subset

  if (typeof value === 'object' && 'length' in value) {
    // `spaces` doesn’t accept a second argument, but it’s given here just to
    // keep the code cleaner.
    value = (info.commaSeparated ? commas : spaces)(value, {
      padLeft: !ctx.tightLists
    })
  }

  value = String(value)

  if (value || !ctx.collapseEmpty) {
    unquoted = value

    // Check unquoted value.
    if (ctx.unquoted) {
      subset = constants.unquoted[ctx.valid][ctx.safe]
      unquoted = entities(
        value,
        xtend(options, {subset: subset, attribute: true})
      )
    }

    // If `value` contains entities when unquoted…
    if (!ctx.unquoted || unquoted !== value) {
      // If the alternative is less common than `quote`, switch.
      if (smart && ccount(value, quote) > ccount(value, alternative)) {
        quote = alternative
      }

      subset = quote === apostrophe ? constants.single : constants.double
      // Always encode without parse errors in non-HTML.
      subset = subset[ctx.schema.space === 'html' ? ctx.valid : 1][ctx.safe]

      value = entities(value, xtend(options, {subset: subset, attribute: true}))

      value = quote + value + quote
    }

    // Don’t add a `=` for unquoted empties.
    value = value ? equalsTo + value : value
  }

  return value
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/index.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html = __webpack_require__(/*! property-information/html */ "../../node_modules/property-information/html.js")
var svg = __webpack_require__(/*! property-information/svg */ "../../node_modules/property-information/svg.js")
var voids = __webpack_require__(/*! html-void-elements */ "../../node_modules/html-void-elements/index.json")
var omission = __webpack_require__(/*! ./omission */ "../../node_modules/hast-util-to-html/lib/omission/index.js")
var one = __webpack_require__(/*! ./one */ "../../node_modules/hast-util-to-html/lib/one.js")

module.exports = toHtml

var quotationMark = '"'
var apostrophe = "'"

var deprecationWarningIssued = false

function toHtml(node, options) {
  var settings = options || {}
  var quote = settings.quote || quotationMark
  var alternative = quote === quotationMark ? apostrophe : quotationMark
  var smart = settings.quoteSmart
  var value =
    node && typeof node === 'object' && 'length' in node
      ? {type: 'root', children: node}
      : node

  if (quote !== quotationMark && quote !== apostrophe) {
    throw new Error(
      'Invalid quote `' +
        quote +
        '`, expected `' +
        apostrophe +
        '` or `' +
        quotationMark +
        '`'
    )
  }

  if (settings.allowDangerousHTML !== undefined) {
    if (!deprecationWarningIssued) {
      deprecationWarningIssued = true
      console.warn(
        'Deprecation warning: `allowDangerousHTML` is a nonstandard option, use `allowDangerousHtml` instead'
      )
    }
  }

  return one(
    {
      valid: settings.allowParseErrors ? 0 : 1,
      safe: settings.allowDangerousCharacters ? 0 : 1,
      schema: settings.space === 'svg' ? svg : html,
      omit: settings.omitOptionalTags && omission,
      quote: quote,
      alternative: alternative,
      smart: smart,
      unquoted: Boolean(settings.preferUnquoted),
      tight: settings.tightAttributes,
      upperDoctype: Boolean(settings.upperDoctype),
      tightDoctype: Boolean(settings.tightDoctype),
      bogusComments: Boolean(settings.bogusComments),
      tightLists: settings.tightCommaSeparatedLists,
      tightClose: settings.tightSelfClosing,
      collapseEmpty: settings.collapseEmptyAttributes,
      dangerous: settings.allowDangerousHtml || settings.allowDangerousHTML,
      voids: settings.voids || voids.concat(),
      entities: settings.entities || {},
      close: settings.closeSelfClosing,
      closeEmpty: settings.closeEmptyElements
    },
    value
  )
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/closing.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/closing.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")
var element = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var whiteSpaceStart = __webpack_require__(/*! ./util/white-space-start */ "../../node_modules/hast-util-to-html/lib/omission/util/white-space-start.js")
var after = __webpack_require__(/*! ./util/siblings */ "../../node_modules/hast-util-to-html/lib/omission/util/siblings.js").after
var omission = __webpack_require__(/*! ./omission */ "../../node_modules/hast-util-to-html/lib/omission/omission.js")

var isComment = convert('comment')

var optionGroup = 'optgroup'
var options = ['option'].concat(optionGroup)
var dataListItem = ['dt', 'dd']
var listItem = 'li'
var menuContent = ['menuitem', 'hr', 'menu']
var ruby = ['rp', 'rt']
var tableContainer = ['tbody', 'tfoot']
var tableRow = 'tr'
var tableCell = ['td', 'th']

var confusingParagraphParent = [
  'a',
  'audio',
  'del',
  'ins',
  'map',
  'noscript',
  'video'
]

var clearParagraphSibling = [
  'address',
  'article',
  'aside',
  'blockquote',
  'details',
  'div',
  'dl',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'main',
  'menu',
  'nav',
  'ol',
  'p',
  'pre',
  'section',
  'table',
  'ul'
]

module.exports = omission({
  html: html,
  head: headOrColgroupOrCaption,
  body: body,
  p: p,
  li: li,
  dt: dt,
  dd: dd,
  rt: rubyElement,
  rp: rubyElement,
  optgroup: optgroup,
  option: option,
  menuitem: menuitem,
  colgroup: headOrColgroupOrCaption,
  caption: headOrColgroupOrCaption,
  thead: thead,
  tbody: tbody,
  tfoot: tfoot,
  tr: tr,
  td: cells,
  th: cells
})

// Macro for `</head>`, `</colgroup>`, and `</caption>`.
function headOrColgroupOrCaption(node, index, parent) {
  var next = after(parent, index, true)
  return !next || (!isComment(next) && !whiteSpaceStart(next))
}

// Whether to omit `</html>`.
function html(node, index, parent) {
  var next = after(parent, index)
  return !next || !isComment(next)
}

// Whether to omit `</body>`.
function body(node, index, parent) {
  var next = after(parent, index)
  return !next || !isComment(next)
}

// Whether to omit `</p>`.
function p(node, index, parent) {
  var next = after(parent, index)
  return next
    ? element(next, clearParagraphSibling)
    : !parent || !element(parent, confusingParagraphParent)
}

// Whether to omit `</li>`.
function li(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, listItem)
}

// Whether to omit `</dt>`.
function dt(node, index, parent) {
  var next = after(parent, index)
  return next && element(next, dataListItem)
}

// Whether to omit `</dd>`.
function dd(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, dataListItem)
}

// Whether to omit `</rt>` or `</rp>`.
function rubyElement(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, ruby)
}

// Whether to omit `</optgroup>`.
function optgroup(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, optionGroup)
}

// Whether to omit `</option>`.
function option(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, options)
}

// Whether to omit `</menuitem>`.
function menuitem(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, menuContent)
}

// Whether to omit `</thead>`.
function thead(node, index, parent) {
  var next = after(parent, index)
  return next && element(next, tableContainer)
}

// Whether to omit `</tbody>`.
function tbody(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, tableContainer)
}

// Whether to omit `</tfoot>`.
function tfoot(node, index, parent) {
  return !after(parent, index)
}

// Whether to omit `</tr>`.
function tr(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, tableRow)
}

// Whether to omit `</td>` or `</th>`.
function cells(node, index, parent) {
  var next = after(parent, index)
  return !next || element(next, tableCell)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/index.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.opening = __webpack_require__(/*! ./opening */ "../../node_modules/hast-util-to-html/lib/omission/opening.js")
exports.closing = __webpack_require__(/*! ./closing */ "../../node_modules/hast-util-to-html/lib/omission/closing.js")


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/omission.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/omission.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = omission

var own = {}.hasOwnProperty

// Factory to check if a given node can have a tag omitted.
function omission(handlers) {
  return omit

  // Check if a given node can have a tag omitted.
  function omit(node, index, parent) {
    var name = node.tagName

    return own.call(handlers, name)
      ? handlers[name](node, index, parent)
      : false
  }
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/opening.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/opening.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")
var element = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var before = __webpack_require__(/*! ./util/siblings */ "../../node_modules/hast-util-to-html/lib/omission/util/siblings.js").before
var first = __webpack_require__(/*! ./util/first */ "../../node_modules/hast-util-to-html/lib/omission/util/first.js")
var place = __webpack_require__(/*! ./util/place */ "../../node_modules/hast-util-to-html/lib/omission/util/place.js")
var whiteSpaceStart = __webpack_require__(/*! ./util/white-space-start */ "../../node_modules/hast-util-to-html/lib/omission/util/white-space-start.js")
var closing = __webpack_require__(/*! ./closing */ "../../node_modules/hast-util-to-html/lib/omission/closing.js")
var omission = __webpack_require__(/*! ./omission */ "../../node_modules/hast-util-to-html/lib/omission/omission.js")

var isComment = convert('comment')

var uniqueHeadMetadata = ['title', 'base']
var meta = ['meta', 'link', 'script', 'style', 'template']
var tableContainers = ['thead', 'tbody']
var tableRow = 'tr'

module.exports = omission({
  html: html,
  head: head,
  body: body,
  colgroup: colgroup,
  tbody: tbody
})

// Whether to omit `<html>`.
function html(node) {
  var head = first(node)
  return !head || !isComment(head)
}

// Whether to omit `<head>`.
function head(node) {
  var children = node.children
  var length = children.length
  var seen = []
  var index = -1
  var child
  var name

  while (++index < length) {
    child = children[index]
    name = child.tagName

    if (element(child, uniqueHeadMetadata)) {
      if (seen.indexOf(name) !== -1) {
        return false
      }

      seen.push(name)
    }
  }

  return length !== 0
}

// Whether to omit `<body>`.
function body(node) {
  var head = first(node, true)

  return (
    !head ||
    (!isComment(head) && !whiteSpaceStart(head) && !element(head, meta))
  )
}

// Whether to omit `<colgroup>`.
// The spec describes some logic for the opening tag, but it’s easier to
// implement in the closing tag, to the same effect, so we handle it there
// instead.
function colgroup(node, index, parent) {
  var previous = before(parent, index)
  var head = first(node, true)

  // Previous colgroup was already omitted.
  if (
    element(previous, 'colgroup') &&
    closing(previous, place(parent, previous), parent)
  ) {
    return false
  }

  return head && element(head, 'col')
}

// Whether to omit `<tbody>`.
function tbody(node, index, parent) {
  var previous = before(parent, index)
  var head = first(node)

  // Previous table section was already omitted.
  if (
    element(previous, tableContainers) &&
    closing(previous, place(parent, previous), parent)
  ) {
    return false
  }

  return head && element(head, tableRow)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/util/first.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/util/first.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var after = __webpack_require__(/*! ./siblings */ "../../node_modules/hast-util-to-html/lib/omission/util/siblings.js").after

module.exports = first

// Get the first child in `parent`.
function first(parent, includeWhiteSpace) {
  return after(parent, -1, includeWhiteSpace)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/util/place.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/util/place.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = place

// Get the position of `node` in `parent`.
function place(parent, child) {
  return parent && parent.children && parent.children.indexOf(child)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/util/siblings.js":
/*!*************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/util/siblings.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whiteSpace = __webpack_require__(/*! hast-util-whitespace */ "../../node_modules/hast-util-whitespace/index.js")

exports.before = siblings(-1)
exports.after = siblings(1)

// Factory to check siblings in a direction.
function siblings(increment) {
  return sibling

  // Find applicable siblings in a direction.
  function sibling(parent, index, includeWhiteSpace) {
    var siblings = parent && parent.children
    var offset = index + increment
    var next = siblings && siblings[offset]

    if (!includeWhiteSpace) {
      while (next && whiteSpace(next)) {
        offset += increment
        next = siblings[offset]
      }
    }

    return next
  }
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/omission/util/white-space-start.js":
/*!**********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/omission/util/white-space-start.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")
var whiteSpace = __webpack_require__(/*! hast-util-whitespace */ "../../node_modules/hast-util-whitespace/index.js")

module.exports = whiteSpaceStart

var isText = convert('text')

// Check if `node` starts with white-space.
function whiteSpaceStart(node) {
  return isText(node) && whiteSpace(node.value.charAt(0))
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/one.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/one.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = serialize

var own = {}.hasOwnProperty

var handlers = {}

handlers.root = __webpack_require__(/*! ./all */ "../../node_modules/hast-util-to-html/lib/all.js")
handlers.text = __webpack_require__(/*! ./text */ "../../node_modules/hast-util-to-html/lib/text.js")
handlers.element = __webpack_require__(/*! ./element */ "../../node_modules/hast-util-to-html/lib/element.js")
handlers.doctype = __webpack_require__(/*! ./doctype */ "../../node_modules/hast-util-to-html/lib/doctype.js")
handlers.comment = __webpack_require__(/*! ./comment */ "../../node_modules/hast-util-to-html/lib/comment.js")
handlers.raw = __webpack_require__(/*! ./raw */ "../../node_modules/hast-util-to-html/lib/raw.js")

function serialize(ctx, node, index, parent) {
  var type = node && node.type

  if (!type) {
    throw new Error('Expected node, not `' + node + '`')
  }

  if (!own.call(handlers, type)) {
    throw new Error('Cannot compile unknown node `' + type + '`')
  }

  return handlers[type](ctx, node, index, parent)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/raw.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/raw.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var text = __webpack_require__(/*! ./text */ "../../node_modules/hast-util-to-html/lib/text.js")

module.exports = serializeRaw

function serializeRaw(ctx, node) {
  return ctx.dangerous ? node.value : text(ctx, node)
}


/***/ }),

/***/ "../../node_modules/hast-util-to-html/lib/text.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-to-html/lib/text.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var entities = __webpack_require__(/*! stringify-entities */ "../../node_modules/stringify-entities/index.js")

module.exports = serializeText

function serializeText(ctx, node, index, parent) {
  var value = node.value

  return isLiteral(parent)
    ? value
    : entities(value, xtend(ctx.entities, {subset: ['<', '&']}))
}

// Check if content of `node` should be escaped.
function isLiteral(node) {
  return node && (node.tagName === 'script' || node.tagName === 'style')
}


/***/ }),

/***/ "../../node_modules/hast-util-whitespace/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-whitespace/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interElementWhiteSpace

// HTML white-space expression.
// See <https://html.spec.whatwg.org/#space-character>.
var re = /[ \t\n\f\r]/g

function interElementWhiteSpace(node) {
  var value

  if (node && typeof node === 'object' && node.type === 'text') {
    value = node.value || ''
  } else if (typeof node === 'string') {
    value = node
  } else {
    return false
  }

  return value.replace(re, '') === ''
}


/***/ }),

/***/ "../../node_modules/html-void-elements/index.json":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/html-void-elements/index.json ***!
  \*******************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"area\",\"base\",\"basefont\",\"bgsound\",\"br\",\"col\",\"command\",\"embed\",\"frame\",\"hr\",\"image\",\"img\",\"input\",\"isindex\",\"keygen\",\"link\",\"menuitem\",\"meta\",\"nextid\",\"param\",\"source\",\"track\",\"wbr\"]");

/***/ }),

/***/ "../../node_modules/property-information/find.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/find.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "../../node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "../../node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "../../node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-a-z0-9.:_]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "../../node_modules/property-information/html.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/html.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "../../node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "../../node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "../../node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "../../node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "../../node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "../../node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "../../node_modules/property-information/lib/aria.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/aria.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "../../node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "../../node_modules/property-information/lib/html.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "../../node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "../../node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "../../node_modules/property-information/lib/svg.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/svg.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "../../node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")
var caseSensitiveTransform = __webpack_require__(/*! ./util/case-sensitive-transform */ "../../node_modules/property-information/lib/util/case-sensitive-transform.js")

var boolean = types.boolean
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated
var commaOrSpaceSeparated = types.commaOrSpaceSeparated

module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "../../node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!*************************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "../../node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!***********************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/create.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "../../node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "../../node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "../../node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/defined-info.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/defined-info.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(/*! ./info */ "../../node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "../../node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/info.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/info.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/merge.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/merge.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "../../node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/schema.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/schema.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "../../node_modules/property-information/lib/util/types.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/util/types.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "../../node_modules/property-information/lib/xlink.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/xlink.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "../../node_modules/property-information/lib/xml.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/xml.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "../../node_modules/property-information/lib/xmlns.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/lib/xmlns.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "../../node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "../../node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "../../node_modules/property-information/normalize.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/normalize.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "../../node_modules/property-information/svg.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/property-information/svg.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "../../node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "../../node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "../../node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "../../node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "../../node_modules/property-information/lib/aria.js")
var svg = __webpack_require__(/*! ./lib/svg */ "../../node_modules/property-information/lib/svg.js")

module.exports = merge([xml, xlink, xmlns, aria, svg])


/***/ }),

/***/ "../../node_modules/rehype-stringify/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-stringify/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toHTML = __webpack_require__(/*! hast-util-to-html */ "../../node_modules/hast-util-to-html/index.js")

module.exports = stringify

function stringify(config) {
  var settings = Object.assign({}, config, this.data('settings'))

  this.Compiler = compiler

  function compiler(tree) {
    return toHTML(tree, settings)
  }
}


/***/ }),

/***/ "../../node_modules/space-separated-tokens/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/space-separated-tokens/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
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

  function replaceSurrogatePair(pair, pos, slice) {
    return toHexReference(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      slice.charCodeAt(pos + 2),
      omit
    )
  }

  function replace(char, pos, slice) {
    return one(char, slice.charCodeAt(pos + 1), settings)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2NvbW1hLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaXMtZWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9jb21tZW50LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9kb2N0eXBlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vcGVuaW5nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL3V0aWwvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi91dGlsL3NpYmxpbmdzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL3V0aWwvd2hpdGUtc3BhY2Utc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb25lLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL3Jhdy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi90ZXh0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9hcmlhLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvc3ZnLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9kZWZpbmVkLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9pbmZvLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bGluay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveG1sbnMuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZWh5cGUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3BhY2Utc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3N0cmluZ2lmeS1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQlk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRZOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsVFc7O0FBRVosWUFBWSxtQkFBTyxDQUFDLCtFQUFjO0FBQ2xDLGFBQWEsbUJBQU8sQ0FBQyxpRkFBZTtBQUNwQyw2QkFBNkIsbUJBQU8sQ0FBQyxxSEFBaUM7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUEyQztBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Slk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0RkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjgxZjY2ZDY2MTYyMDY3N2E1NzM3LzAuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjb3VudFxuXG5mdW5jdGlvbiBjY291bnQodmFsdWUsIGNoYXJhY3Rlcikge1xuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgY291bnQgPSAwXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgaW5kZXggPSB2YWwuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHZhbC5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyAxKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgY29tbWEgPSAnLCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVtcHR5ID0gJydcblxuLy8gUGFyc2UgY29tbWEtc2VwYXJhdGVkIHRva2VucyB0byBhbiBhcnJheS5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpXG4gIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEpXG4gIHZhciBsYXN0SW5kZXggPSAwXG4gIHZhciBlbmQgPSBmYWxzZVxuICB2YXIgdmFsXG5cbiAgd2hpbGUgKCFlbmQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGlucHV0Lmxlbmd0aFxuICAgICAgZW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIHZhbCA9IGlucHV0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpLnRyaW0oKVxuXG4gICAgaWYgKHZhbCB8fCAhZW5kKSB7XG4gICAgICB2YWx1ZXMucHVzaCh2YWwpXG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hLCBsYXN0SW5kZXgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzXG59XG5cbi8vIENvbXBpbGUgYW4gYXJyYXkgdG8gY29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbi8vIGBvcHRpb25zLnBhZExlZnRgIChkZWZhdWx0OiBgdHJ1ZWApIHBhZHMgYSBzcGFjZSBsZWZ0IG9mIGVhY2ggdG9rZW4sIGFuZFxuLy8gYG9wdGlvbnMucGFkUmlnaHRgIChkZWZhdWx0OiBgZmFsc2VgKSBwYWRzIGEgc3BhY2UgdG8gdGhlIHJpZ2h0IG9mIGVhY2ggdG9rZW4uXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGxlZnQgPSBzZXR0aW5ncy5wYWRMZWZ0ID09PSBmYWxzZSA/IGVtcHR5IDogc3BhY2VcbiAgdmFyIHJpZ2h0ID0gc2V0dGluZ3MucGFkUmlnaHQgPyBzcGFjZSA6IGVtcHR5XG5cbiAgLy8gRW5zdXJlIHRoZSBsYXN0IGVtcHR5IGVudHJ5IGlzIHNlZW4uXG4gIGlmICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSBlbXB0eSkge1xuICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoZW1wdHkpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4ocmlnaHQgKyBjb21tYSArIGxlZnQpLnRyaW0oKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50XG5cbi8vIENoZWNrIGlmIGlmIGBub2RlYCBpcyBhbiBgZWxlbWVudGAgYW5kLCBpZiBgdGFnTmFtZXNgIGlzIGdpdmVuLCBgbm9kZWBcbi8vIG1hdGNoZXMgdGhlbSBgdGFnTmFtZXNgLlxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUsIHRhZ05hbWVzKSB7XG4gIHZhciBuYW1lXG5cbiAgaWYgKFxuICAgICEoXG4gICAgICB0YWdOYW1lcyA9PT0gbnVsbCB8fFxuICAgICAgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJyB8fFxuICAgICAgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ29iamVjdCcgJiYgdGFnTmFtZXMubGVuZ3RoICE9PSAwKVxuICAgIClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0V4cGVjdGVkIGBzdHJpbmdgIG9yIGBBcnJheS48c3RyaW5nPmAgZm9yIGB0YWdOYW1lc2AsIG5vdCBgJyArXG4gICAgICAgIHRhZ05hbWVzICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKFxuICAgICFub2RlIHx8XG4gICAgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8XG4gICAgbm9kZS50eXBlICE9PSAnZWxlbWVudCcgfHxcbiAgICB0eXBlb2Ygbm9kZS50YWdOYW1lICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0YWdOYW1lcyA9PT0gbnVsbCB8fCB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5hbWUgPSBub2RlLnRhZ05hbWVcblxuICBpZiAodHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuYW1lID09PSB0YWdOYW1lc1xuICB9XG5cbiAgcmV0dXJuIHRhZ05hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xXG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWInKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvbmUgPSByZXF1aXJlKCcuL29uZScpXG5cbm1vZHVsZS5leHBvcnRzID0gYWxsXG5cbi8vIFNlcmlhbGl6ZSBhbGwgY2hpbGRyZW4gb2YgYHBhcmVudGAuXG5mdW5jdGlvbiBhbGwoY3R4LCBwYXJlbnQpIHtcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHRzID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gb25lKGN0eCwgY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZUNvbW1lbnRcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjY29tbWVudHM+XG52YXIgYnJlYWtvdXQgPSAvXj58Xi0+fDwhLS18LS0+fC0tIT58PCEtJC9nXG52YXIgc3Vic2V0ID0gWyc8JywgJz4nXVxudmFyIGJvZ3VzU3Vic2V0ID0gWyc+J11cblxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudChjdHgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuXG4gIGlmIChjdHguYm9ndXNDb21tZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICAnPD8nICsgZW50aXRpZXModmFsdWUsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogYm9ndXNTdWJzZXR9KSkgKyAnPidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJzwhLS0nICsgdmFsdWUucmVwbGFjZShicmVha291dCwgZW5jb2RlKSArICctLT4nXG5cbiAgZnVuY3Rpb24gZW5jb2RlKCQwKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzKCQwLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IHN1YnNldH0pKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gQ2hhcmFjdGVycy5cbnZhciBuaWwgPSAnXFwwJ1xudmFyIGFtcGVyc2FuZCA9ICcmJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgdGFiID0gJ1xcdCdcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgZXF1YWxzVG8gPSAnPSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgc2xhc2ggPSAnLydcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgY2FycmlhZ2VSZXR1cm4gPSAnXFxyJ1xudmFyIGZvcm1GZWVkID0gJ1xcZidcblxudmFyIHdoaXRlc3BhY2UgPSBbc3BhY2UsIHRhYiwgbGluZUZlZWQsIGNhcnJpYWdlUmV0dXJuLCBmb3JtRmVlZF1cblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLW5hbWUtc3RhdGU+LlxudmFyIG5hbWUgPSB3aGl0ZXNwYWNlLmNvbmNhdChhbXBlcnNhbmQsIHNsYXNoLCBncmVhdGVyVGhhbiwgZXF1YWxzVG8pXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2F0dHJpYnV0ZS12YWx1ZS0odW5xdW90ZWQpLXN0YXRlPi5cbnZhciB1bnF1b3RlZCA9IHdoaXRlc3BhY2UuY29uY2F0KGFtcGVyc2FuZCwgZ3JlYXRlclRoYW4pXG52YXIgdW5xdW90ZWRTYWZlID0gdW5xdW90ZWQuY29uY2F0KFxuICBuaWwsXG4gIHF1b3RhdGlvbk1hcmssXG4gIGFwb3N0cm9waGUsXG4gIGxlc3NUaGFuLFxuICBlcXVhbHNUbyxcbiAgZ3JhdmVBY2NlbnRcbilcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLXZhbHVlLShzaW5nbGUtcXVvdGVkKS1zdGF0ZT4uXG52YXIgc2luZ2xlUXVvdGVkID0gW2FtcGVyc2FuZCwgYXBvc3Ryb3BoZV1cblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLXZhbHVlLShkb3VibGUtcXVvdGVkKS1zdGF0ZT4uXG52YXIgZG91YmxlUXVvdGVkID0gW2FtcGVyc2FuZCwgcXVvdGF0aW9uTWFya11cblxuLy8gTWFwcyBvZiBzdWJzZXRzLlxuLy8gRWFjaCB2YWx1ZSBpcyBhIG1hdHJpeCBvZiB0dXBsZXMuXG4vLyBUaGUgZmlyc3QgdmFsdWUgY2F1c2VzIHBhcnNlIGVycm9ycywgdGhlIHNlY29uZCBpcyB2YWxpZC5cbi8vIE9mIGJvdGggdmFsdWVzLCB0aGUgZmlyc3QgdmFsdWUgaXMgdW5zYWZlLCBhbmQgdGhlIHNlY29uZCBpcyBzYWZlLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6IFtcbiAgICBbbmFtZSwgbmFtZS5jb25jYXQocXVvdGF0aW9uTWFyaywgYXBvc3Ryb3BoZSwgZ3JhdmVBY2NlbnQpXSxcbiAgICBbXG4gICAgICBuYW1lLmNvbmNhdChuaWwsIHF1b3RhdGlvbk1hcmssIGFwb3N0cm9waGUsIGxlc3NUaGFuKSxcbiAgICAgIG5hbWUuY29uY2F0KG5pbCwgcXVvdGF0aW9uTWFyaywgYXBvc3Ryb3BoZSwgbGVzc1RoYW4sIGdyYXZlQWNjZW50KVxuICAgIF1cbiAgXSxcbiAgdW5xdW90ZWQ6IFtcbiAgICBbdW5xdW90ZWQsIHVucXVvdGVkU2FmZV0sXG4gICAgW3VucXVvdGVkU2FmZSwgdW5xdW90ZWRTYWZlXVxuICBdLFxuICBzaW5nbGU6IFtcbiAgICBbc2luZ2xlUXVvdGVkLCBzaW5nbGVRdW90ZWQuY29uY2F0KHF1b3RhdGlvbk1hcmssIGdyYXZlQWNjZW50KV0sXG4gICAgW1xuICAgICAgc2luZ2xlUXVvdGVkLmNvbmNhdChuaWwpLFxuICAgICAgc2luZ2xlUXVvdGVkLmNvbmNhdChuaWwsIHF1b3RhdGlvbk1hcmssIGdyYXZlQWNjZW50KVxuICAgIF1cbiAgXSxcbiAgZG91YmxlOiBbXG4gICAgW2RvdWJsZVF1b3RlZCwgZG91YmxlUXVvdGVkLmNvbmNhdChhcG9zdHJvcGhlLCBncmF2ZUFjY2VudCldLFxuICAgIFtcbiAgICAgIGRvdWJsZVF1b3RlZC5jb25jYXQobmlsKSxcbiAgICAgIGRvdWJsZVF1b3RlZC5jb25jYXQobmlsLCBhcG9zdHJvcGhlLCBncmF2ZUFjY2VudClcbiAgICBdXG4gIF1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplRG9jdHlwZVxuXG52YXIgZG9jTG93ZXIgPSAnZG9jdHlwZSdcbnZhciBkb2NVcHBlciA9IGRvY0xvd2VyLnRvVXBwZXJDYXNlKClcblxuZnVuY3Rpb24gc2VyaWFsaXplRG9jdHlwZShjdHgsIG5vZGUpIHtcbiAgdmFyIGRvYyA9IGN0eC51cHBlckRvY3R5cGUgPyBkb2NVcHBlciA6IGRvY0xvd2VyXG4gIHZhciBzZXAgPSBjdHgudGlnaHREb2N0eXBlID8gJycgOiAnICdcbiAgdmFyIG5hbWUgPSBub2RlLm5hbWVcbiAgdmFyIHB1YiA9IG5vZGUucHVibGljXG4gIHZhciBzeXMgPSBub2RlLnN5c3RlbVxuICB2YXIgcGFydHMgPSBbJzwhJyArIGRvY11cblxuICBpZiAobmFtZSkge1xuICAgIHBhcnRzLnB1c2goc2VwLCBuYW1lKVxuXG4gICAgaWYgKHB1YiAhPT0gbnVsbCAmJiBwdWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMucHVzaCgnIHB1YmxpYycsIHNlcCwgcXVvdGUoY3R4LCBwdWIpKVxuICAgIH0gZWxzZSBpZiAoc3lzICE9PSBudWxsICYmIHN5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cy5wdXNoKCcgc3lzdGVtJylcbiAgICB9XG5cbiAgICBpZiAoc3lzICE9PSBudWxsICYmIHN5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cy5wdXNoKHNlcCwgcXVvdGUoY3R4LCBzeXMpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKSArICc+J1xufVxuXG5mdW5jdGlvbiBxdW90ZShjdHgsIHZhbHVlKSB7XG4gIHZhciBwcmltYXJ5ID0gY3R4LnF1b3RlXG4gIHZhciBzZWNvbmRhcnkgPSBjdHguYWx0ZXJuYXRpdmVcbiAgdmFyIHN0cmluZyA9IFN0cmluZyh2YWx1ZSlcbiAgdmFyIHF1b3RlID1cbiAgICBjY291bnQoc3RyaW5nLCBwcmltYXJ5KSA+IGNjb3VudChzdHJpbmcsIHNlY29uZGFyeSkgPyBzZWNvbmRhcnkgOiBwcmltYXJ5XG5cbiAgcmV0dXJuIChcbiAgICBxdW90ZSArXG4gICAgLy8gUHJldmVudCBicmVha2luZyBvdXQgb2YgZG9jdHlwZS5cbiAgICBlbnRpdGllcyhzdHJpbmcsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogWyc8JywgJyYnLCBxdW90ZV19KSkgK1xuICAgIHF1b3RlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgc3ZnID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vc3ZnJylcbnZhciBmaW5kID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vZmluZCcpXG52YXIgc3BhY2VzID0gcmVxdWlyZSgnc3BhY2Utc2VwYXJhdGVkLXRva2VucycpLnN0cmluZ2lmeVxudmFyIGNvbW1hcyA9IHJlcXVpcmUoJ2NvbW1hLXNlcGFyYXRlZC10b2tlbnMnKS5zdHJpbmdpZnlcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZUVsZW1lbnRcblxudmFyIHNwYWNlID0gJyAnXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBlcXVhbHNUbyA9ICc9J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBzbGFzaCA9ICcvJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudChjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHBhcmVudFNjaGVtYSA9IGN0eC5zY2hlbWFcbiAgdmFyIG5hbWUgPSBub2RlLnRhZ05hbWVcbiAgdmFyIHZhbHVlID0gJydcbiAgdmFyIHNlbGZDbG9zaW5nXG4gIHZhciBjbG9zZVxuICB2YXIgb21pdFxuICB2YXIgcm9vdCA9IG5vZGVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGF0dHJzXG4gIHZhciBsYXN0XG5cbiAgaWYgKHBhcmVudFNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnICYmIG5hbWUgPT09ICdzdmcnKSB7XG4gICAgY3R4LnNjaGVtYSA9IHN2Z1xuICB9XG5cbiAgYXR0cnMgPSBzZXJpYWxpemVBdHRyaWJ1dGVzKGN0eCwgbm9kZS5wcm9wZXJ0aWVzKVxuXG4gIGlmIChjdHguc2NoZW1hLnNwYWNlID09PSAnc3ZnJykge1xuICAgIG9taXQgPSBmYWxzZVxuICAgIGNsb3NlID0gdHJ1ZVxuICAgIHNlbGZDbG9zaW5nID0gY3R4LmNsb3NlRW1wdHlcbiAgfSBlbHNlIHtcbiAgICBvbWl0ID0gY3R4Lm9taXRcbiAgICBjbG9zZSA9IGN0eC5jbG9zZVxuICAgIHNlbGZDbG9zaW5nID0gY3R4LnZvaWRzLmluZGV4T2YobmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcblxuICAgIGlmIChuYW1lID09PSAndGVtcGxhdGUnKSB7XG4gICAgICByb290ID0gbm9kZS5jb250ZW50XG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IGFsbChjdHgsIHJvb3QpXG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgY2F0ZWdvcmlzZWQgYXMgdm9pZCwgYnV0IGl0IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIHRoZVxuICAvLyBjYXRlZ29yaXNhdGlvbi5cbiAgLy8gVGhpcyBlbmFibGVzIGZvciBleGFtcGxlIGBtZW51aXRlbWBzLCB3aGljaCBhcmUgdm9pZCBpbiBXM0MgSFRNTCBidXQgbm90XG4gIC8vIHZvaWQgaW4gV0hBVFdHIEhUTUwsIHRvIGJlIHN0cmluZ2lmaWVkIHByb3Blcmx5LlxuICBzZWxmQ2xvc2luZyA9IGNvbnRlbnQgPyBmYWxzZSA6IHNlbGZDbG9zaW5nXG5cbiAgaWYgKGF0dHJzIHx8ICFvbWl0IHx8ICFvbWl0Lm9wZW5pbmcobm9kZSwgaW5kZXgsIHBhcmVudCkpIHtcbiAgICB2YWx1ZSA9IGxlc3NUaGFuICsgbmFtZSArIChhdHRycyA/IHNwYWNlICsgYXR0cnMgOiAnJylcblxuICAgIGlmIChzZWxmQ2xvc2luZyAmJiBjbG9zZSkge1xuICAgICAgbGFzdCA9IGF0dHJzLmNoYXJBdChhdHRycy5sZW5ndGggLSAxKVxuICAgICAgaWYgKFxuICAgICAgICAhY3R4LnRpZ2h0Q2xvc2UgfHxcbiAgICAgICAgbGFzdCA9PT0gc2xhc2ggfHxcbiAgICAgICAgKGN0eC5zY2hlbWEuc3BhY2UgPT09ICdzdmcnICYmXG4gICAgICAgICAgbGFzdCAmJlxuICAgICAgICAgIGxhc3QgIT09IHF1b3RhdGlvbk1hcmsgJiZcbiAgICAgICAgICBsYXN0ICE9PSBhcG9zdHJvcGhlKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlICs9IHNwYWNlXG4gICAgICB9XG5cbiAgICAgIHZhbHVlICs9IHNsYXNoXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gZ3JlYXRlclRoYW5cbiAgfVxuXG4gIHZhbHVlICs9IGNvbnRlbnRcblxuICBpZiAoIXNlbGZDbG9zaW5nICYmICghb21pdCB8fCAhb21pdC5jbG9zaW5nKG5vZGUsIGluZGV4LCBwYXJlbnQpKSkge1xuICAgIHZhbHVlICs9IGxlc3NUaGFuICsgc2xhc2ggKyBuYW1lICsgZ3JlYXRlclRoYW5cbiAgfVxuXG4gIGN0eC5zY2hlbWEgPSBwYXJlbnRTY2hlbWFcblxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlcyhjdHgsIHByb3BzKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuICB2YXIgcmVzdWx0XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG4gIHZhciBsYXN0XG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICB2YWx1ZSA9IHByb3BzW2tleV1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHJlc3VsdCA9IHNlcmlhbGl6ZUF0dHJpYnV0ZShjdHgsIGtleSwgdmFsdWUpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB2YWx1ZXMucHVzaChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSB2YWx1ZXNbaW5kZXhdXG4gICAgbGFzdCA9IG51bGxcblxuICAgIGlmIChjdHgudGlnaHQpIHtcbiAgICAgIGxhc3QgPSByZXN1bHQuY2hhckF0KHJlc3VsdC5sZW5ndGggLSAxKVxuICAgIH1cblxuICAgIC8vIEluIHRpZ2h0IG1vZGUsIGRvbuKAmXQgYWRkIGEgc3BhY2UgYWZ0ZXIgcXVvdGVkIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGluZGV4ICE9PSBsZW5ndGggLSAxICYmIGxhc3QgIT09IHF1b3RhdGlvbk1hcmsgJiYgbGFzdCAhPT0gYXBvc3Ryb3BoZSkge1xuICAgICAgdmFsdWVzW2luZGV4XSA9IHJlc3VsdCArIHNwYWNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGUoY3R4LCBrZXksIHZhbHVlKSB7XG4gIHZhciBzY2hlbWEgPSBjdHguc2NoZW1hXG4gIHZhciBpbmZvID0gZmluZChzY2hlbWEsIGtleSlcbiAgdmFyIG5hbWUgPSBpbmZvLmF0dHJpYnV0ZVxuXG4gIGlmIChpbmZvLm92ZXJsb2FkZWRCb29sZWFuICYmICh2YWx1ZSA9PT0gbmFtZSB8fCB2YWx1ZSA9PT0gJycpKSB7XG4gICAgdmFsdWUgPSB0cnVlXG4gIH0gZWxzZSBpZiAoXG4gICAgaW5mby5ib29sZWFuIHx8XG4gICAgKGluZm8ub3ZlcmxvYWRlZEJvb2xlYW4gJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJylcbiAgKSB7XG4gICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgaWYgKFxuICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgIHZhbHVlID09PSBmYWxzZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSlcbiAgKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBuYW1lID0gc2VyaWFsaXplQXR0cmlidXRlTmFtZShjdHgsIG5hbWUpXG5cbiAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgLy8gVGhlcmUgaXMgY3VycmVudGx5IG9ubHkgb25lIGJvb2xlYW4gcHJvcGVydHkgaW4gU1ZHOiBgW2Rvd25sb2FkXWAgb25cbiAgICAvLyBgPGE+YC5cbiAgICAvLyBUaGlzIHByb3BlcnR5IGRvZXMgbm90IHNlZW0gdG8gd29yayBpbiBicm93c2VycyAoRkYsIFNhLCBDaCksIHNvIEkgY2Fu4oCZdFxuICAgIC8vIHRlc3QgaWYgZHJvcHBpbmcgdGhlIHZhbHVlIHdvcmtzLlxuICAgIC8vIEJ1dCBJIGFzc3VtZSB0aGF0IGl0IHNob3VsZDpcbiAgICAvL1xuICAgIC8vIGBgYGh0bWxcbiAgICAvLyA8IWRvY3R5cGUgaHRtbD5cbiAgICAvLyA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgIC8vICAgPGEgaHJlZj1odHRwczovL2V4YW1wbGUuY29tIGRvd25sb2FkPlxuICAgIC8vICAgICA8Y2lyY2xlIGN4PTUwIGN5PTQwIHI9MzUgLz5cbiAgICAvLyAgIDwvYT5cbiAgICAvLyA8L3N2Zz5cbiAgICAvLyBgYGBcbiAgICAvL1xuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vcHJvcGVydHktaW5mb3JtYXRpb24vYmxvYi9tYXN0ZXIvbGliL3N2Zy5qcz5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZShjdHgsIGtleSwgdmFsdWUsIGluZm8pXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUF0dHJpYnV0ZU5hbWUoY3R4LCBuYW1lKSB7XG4gIC8vIEFsd2F5cyBlbmNvZGUgd2l0aG91dCBwYXJzZSBlcnJvcnMgaW4gbm9uLUhUTUwuXG4gIHZhciB2YWxpZCA9IGN0eC5zY2hlbWEuc3BhY2UgPT09ICdodG1sJyA/IGN0eC52YWxpZCA6IDFcbiAgdmFyIHN1YnNldCA9IGNvbnN0YW50cy5uYW1lW3ZhbGlkXVtjdHguc2FmZV1cblxuICByZXR1cm4gZW50aXRpZXMobmFtZSwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBzdWJzZXR9KSlcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlVmFsdWUoY3R4LCBrZXksIHZhbHVlLCBpbmZvKSB7XG4gIHZhciBvcHRpb25zID0gY3R4LmVudGl0aWVzXG4gIHZhciBxdW90ZSA9IGN0eC5xdW90ZVxuICB2YXIgYWx0ZXJuYXRpdmUgPSBjdHguYWx0ZXJuYXRpdmVcbiAgdmFyIHNtYXJ0ID0gY3R4LnNtYXJ0XG4gIHZhciB1bnF1b3RlZFxuICB2YXIgc3Vic2V0XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAvLyBgc3BhY2VzYCBkb2VzbuKAmXQgYWNjZXB0IGEgc2Vjb25kIGFyZ3VtZW50LCBidXQgaXTigJlzIGdpdmVuIGhlcmUganVzdCB0b1xuICAgIC8vIGtlZXAgdGhlIGNvZGUgY2xlYW5lci5cbiAgICB2YWx1ZSA9IChpbmZvLmNvbW1hU2VwYXJhdGVkID8gY29tbWFzIDogc3BhY2VzKSh2YWx1ZSwge1xuICAgICAgcGFkTGVmdDogIWN0eC50aWdodExpc3RzXG4gICAgfSlcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gIGlmICh2YWx1ZSB8fCAhY3R4LmNvbGxhcHNlRW1wdHkpIHtcbiAgICB1bnF1b3RlZCA9IHZhbHVlXG5cbiAgICAvLyBDaGVjayB1bnF1b3RlZCB2YWx1ZS5cbiAgICBpZiAoY3R4LnVucXVvdGVkKSB7XG4gICAgICBzdWJzZXQgPSBjb25zdGFudHMudW5xdW90ZWRbY3R4LnZhbGlkXVtjdHguc2FmZV1cbiAgICAgIHVucXVvdGVkID0gZW50aXRpZXMoXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB4dGVuZChvcHRpb25zLCB7c3Vic2V0OiBzdWJzZXQsIGF0dHJpYnV0ZTogdHJ1ZX0pXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gSWYgYHZhbHVlYCBjb250YWlucyBlbnRpdGllcyB3aGVuIHVucXVvdGVk4oCmXG4gICAgaWYgKCFjdHgudW5xdW90ZWQgfHwgdW5xdW90ZWQgIT09IHZhbHVlKSB7XG4gICAgICAvLyBJZiB0aGUgYWx0ZXJuYXRpdmUgaXMgbGVzcyBjb21tb24gdGhhbiBgcXVvdGVgLCBzd2l0Y2guXG4gICAgICBpZiAoc21hcnQgJiYgY2NvdW50KHZhbHVlLCBxdW90ZSkgPiBjY291bnQodmFsdWUsIGFsdGVybmF0aXZlKSkge1xuICAgICAgICBxdW90ZSA9IGFsdGVybmF0aXZlXG4gICAgICB9XG5cbiAgICAgIHN1YnNldCA9IHF1b3RlID09PSBhcG9zdHJvcGhlID8gY29uc3RhbnRzLnNpbmdsZSA6IGNvbnN0YW50cy5kb3VibGVcbiAgICAgIC8vIEFsd2F5cyBlbmNvZGUgd2l0aG91dCBwYXJzZSBlcnJvcnMgaW4gbm9uLUhUTUwuXG4gICAgICBzdWJzZXQgPSBzdWJzZXRbY3R4LnNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnID8gY3R4LnZhbGlkIDogMV1bY3R4LnNhZmVdXG5cbiAgICAgIHZhbHVlID0gZW50aXRpZXModmFsdWUsIHh0ZW5kKG9wdGlvbnMsIHtzdWJzZXQ6IHN1YnNldCwgYXR0cmlidXRlOiB0cnVlfSkpXG5cbiAgICAgIHZhbHVlID0gcXVvdGUgKyB2YWx1ZSArIHF1b3RlXG4gICAgfVxuXG4gICAgLy8gRG9u4oCZdCBhZGQgYSBgPWAgZm9yIHVucXVvdGVkIGVtcHRpZXMuXG4gICAgdmFsdWUgPSB2YWx1ZSA/IGVxdWFsc1RvICsgdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGh0bWwgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sJylcbnZhciBzdmcgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcnKVxudmFyIHZvaWRzID0gcmVxdWlyZSgnaHRtbC12b2lkLWVsZW1lbnRzJylcbnZhciBvbWlzc2lvbiA9IHJlcXVpcmUoJy4vb21pc3Npb24nKVxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxubW9kdWxlLmV4cG9ydHMgPSB0b0h0bWxcblxudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG5cbnZhciBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiB0b0h0bWwobm9kZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBxdW90ZSA9IHNldHRpbmdzLnF1b3RlIHx8IHF1b3RhdGlvbk1hcmtcbiAgdmFyIGFsdGVybmF0aXZlID0gcXVvdGUgPT09IHF1b3RhdGlvbk1hcmsgPyBhcG9zdHJvcGhlIDogcXVvdGF0aW9uTWFya1xuICB2YXIgc21hcnQgPSBzZXR0aW5ncy5xdW90ZVNtYXJ0XG4gIHZhciB2YWx1ZSA9XG4gICAgbm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gbm9kZVxuICAgICAgPyB7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogbm9kZX1cbiAgICAgIDogbm9kZVxuXG4gIGlmIChxdW90ZSAhPT0gcXVvdGF0aW9uTWFyayAmJiBxdW90ZSAhPT0gYXBvc3Ryb3BoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbnZhbGlkIHF1b3RlIGAnICtcbiAgICAgICAgcXVvdGUgK1xuICAgICAgICAnYCwgZXhwZWN0ZWQgYCcgK1xuICAgICAgICBhcG9zdHJvcGhlICtcbiAgICAgICAgJ2Agb3IgYCcgK1xuICAgICAgICBxdW90YXRpb25NYXJrICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0RlcHJlY2F0aW9uIHdhcm5pbmc6IGBhbGxvd0Rhbmdlcm91c0hUTUxgIGlzIGEgbm9uc3RhbmRhcmQgb3B0aW9uLCB1c2UgYGFsbG93RGFuZ2Vyb3VzSHRtbGAgaW5zdGVhZCdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb25lKFxuICAgIHtcbiAgICAgIHZhbGlkOiBzZXR0aW5ncy5hbGxvd1BhcnNlRXJyb3JzID8gMCA6IDEsXG4gICAgICBzYWZlOiBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0NoYXJhY3RlcnMgPyAwIDogMSxcbiAgICAgIHNjaGVtYTogc2V0dGluZ3Muc3BhY2UgPT09ICdzdmcnID8gc3ZnIDogaHRtbCxcbiAgICAgIG9taXQ6IHNldHRpbmdzLm9taXRPcHRpb25hbFRhZ3MgJiYgb21pc3Npb24sXG4gICAgICBxdW90ZTogcXVvdGUsXG4gICAgICBhbHRlcm5hdGl2ZTogYWx0ZXJuYXRpdmUsXG4gICAgICBzbWFydDogc21hcnQsXG4gICAgICB1bnF1b3RlZDogQm9vbGVhbihzZXR0aW5ncy5wcmVmZXJVbnF1b3RlZCksXG4gICAgICB0aWdodDogc2V0dGluZ3MudGlnaHRBdHRyaWJ1dGVzLFxuICAgICAgdXBwZXJEb2N0eXBlOiBCb29sZWFuKHNldHRpbmdzLnVwcGVyRG9jdHlwZSksXG4gICAgICB0aWdodERvY3R5cGU6IEJvb2xlYW4oc2V0dGluZ3MudGlnaHREb2N0eXBlKSxcbiAgICAgIGJvZ3VzQ29tbWVudHM6IEJvb2xlYW4oc2V0dGluZ3MuYm9ndXNDb21tZW50cyksXG4gICAgICB0aWdodExpc3RzOiBzZXR0aW5ncy50aWdodENvbW1hU2VwYXJhdGVkTGlzdHMsXG4gICAgICB0aWdodENsb3NlOiBzZXR0aW5ncy50aWdodFNlbGZDbG9zaW5nLFxuICAgICAgY29sbGFwc2VFbXB0eTogc2V0dGluZ3MuY29sbGFwc2VFbXB0eUF0dHJpYnV0ZXMsXG4gICAgICBkYW5nZXJvdXM6IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSHRtbCB8fCBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUwsXG4gICAgICB2b2lkczogc2V0dGluZ3Mudm9pZHMgfHwgdm9pZHMuY29uY2F0KCksXG4gICAgICBlbnRpdGllczogc2V0dGluZ3MuZW50aXRpZXMgfHwge30sXG4gICAgICBjbG9zZTogc2V0dGluZ3MuY2xvc2VTZWxmQ2xvc2luZyxcbiAgICAgIGNsb3NlRW1wdHk6IHNldHRpbmdzLmNsb3NlRW1wdHlFbGVtZW50c1xuICAgIH0sXG4gICAgdmFsdWVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBlbGVtZW50ID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIHdoaXRlU3BhY2VTdGFydCA9IHJlcXVpcmUoJy4vdXRpbC93aGl0ZS1zcGFjZS1zdGFydCcpXG52YXIgYWZ0ZXIgPSByZXF1aXJlKCcuL3V0aWwvc2libGluZ3MnKS5hZnRlclxudmFyIG9taXNzaW9uID0gcmVxdWlyZSgnLi9vbWlzc2lvbicpXG5cbnZhciBpc0NvbW1lbnQgPSBjb252ZXJ0KCdjb21tZW50JylcblxudmFyIG9wdGlvbkdyb3VwID0gJ29wdGdyb3VwJ1xudmFyIG9wdGlvbnMgPSBbJ29wdGlvbiddLmNvbmNhdChvcHRpb25Hcm91cClcbnZhciBkYXRhTGlzdEl0ZW0gPSBbJ2R0JywgJ2RkJ11cbnZhciBsaXN0SXRlbSA9ICdsaSdcbnZhciBtZW51Q29udGVudCA9IFsnbWVudWl0ZW0nLCAnaHInLCAnbWVudSddXG52YXIgcnVieSA9IFsncnAnLCAncnQnXVxudmFyIHRhYmxlQ29udGFpbmVyID0gWyd0Ym9keScsICd0Zm9vdCddXG52YXIgdGFibGVSb3cgPSAndHInXG52YXIgdGFibGVDZWxsID0gWyd0ZCcsICd0aCddXG5cbnZhciBjb25mdXNpbmdQYXJhZ3JhcGhQYXJlbnQgPSBbXG4gICdhJyxcbiAgJ2F1ZGlvJyxcbiAgJ2RlbCcsXG4gICdpbnMnLFxuICAnbWFwJyxcbiAgJ25vc2NyaXB0JyxcbiAgJ3ZpZGVvJ1xuXVxuXG52YXIgY2xlYXJQYXJhZ3JhcGhTaWJsaW5nID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnZGV0YWlscycsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ29sJyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAndGFibGUnLFxuICAndWwnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb24oe1xuICBodG1sOiBodG1sLFxuICBoZWFkOiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbixcbiAgYm9keTogYm9keSxcbiAgcDogcCxcbiAgbGk6IGxpLFxuICBkdDogZHQsXG4gIGRkOiBkZCxcbiAgcnQ6IHJ1YnlFbGVtZW50LFxuICBycDogcnVieUVsZW1lbnQsXG4gIG9wdGdyb3VwOiBvcHRncm91cCxcbiAgb3B0aW9uOiBvcHRpb24sXG4gIG1lbnVpdGVtOiBtZW51aXRlbSxcbiAgY29sZ3JvdXA6IGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uLFxuICBjYXB0aW9uOiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbixcbiAgdGhlYWQ6IHRoZWFkLFxuICB0Ym9keTogdGJvZHksXG4gIHRmb290OiB0Zm9vdCxcbiAgdHI6IHRyLFxuICB0ZDogY2VsbHMsXG4gIHRoOiBjZWxsc1xufSlcblxuLy8gTWFjcm8gZm9yIGA8L2hlYWQ+YCwgYDwvY29sZ3JvdXA+YCwgYW5kIGA8L2NhcHRpb24+YC5cbmZ1bmN0aW9uIGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4LCB0cnVlKVxuICByZXR1cm4gIW5leHQgfHwgKCFpc0NvbW1lbnQobmV4dCkgJiYgIXdoaXRlU3BhY2VTdGFydChuZXh0KSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2h0bWw+YC5cbmZ1bmN0aW9uIGh0bWwobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCAhaXNDb21tZW50KG5leHQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9ib2R5PmAuXG5mdW5jdGlvbiBib2R5KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgIWlzQ29tbWVudChuZXh0KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvcD5gLlxuZnVuY3Rpb24gcChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuIG5leHRcbiAgICA/IGVsZW1lbnQobmV4dCwgY2xlYXJQYXJhZ3JhcGhTaWJsaW5nKVxuICAgIDogIXBhcmVudCB8fCAhZWxlbWVudChwYXJlbnQsIGNvbmZ1c2luZ1BhcmFncmFwaFBhcmVudClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2xpPmAuXG5mdW5jdGlvbiBsaShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgbGlzdEl0ZW0pXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9kdD5gLlxuZnVuY3Rpb24gZHQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiBuZXh0ICYmIGVsZW1lbnQobmV4dCwgZGF0YUxpc3RJdGVtKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvZGQ+YC5cbmZ1bmN0aW9uIGRkKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBkYXRhTGlzdEl0ZW0pXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9ydD5gIG9yIGA8L3JwPmAuXG5mdW5jdGlvbiBydWJ5RWxlbWVudChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgcnVieSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L29wdGdyb3VwPmAuXG5mdW5jdGlvbiBvcHRncm91cChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgb3B0aW9uR3JvdXApXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9vcHRpb24+YC5cbmZ1bmN0aW9uIG9wdGlvbihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgb3B0aW9ucylcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L21lbnVpdGVtPmAuXG5mdW5jdGlvbiBtZW51aXRlbShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgbWVudUNvbnRlbnQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90aGVhZD5gLlxuZnVuY3Rpb24gdGhlYWQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiBuZXh0ICYmIGVsZW1lbnQobmV4dCwgdGFibGVDb250YWluZXIpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90Ym9keT5gLlxuZnVuY3Rpb24gdGJvZHkobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIHRhYmxlQ29udGFpbmVyKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdGZvb3Q+YC5cbmZ1bmN0aW9uIHRmb290KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgcmV0dXJuICFhZnRlcihwYXJlbnQsIGluZGV4KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdHI+YC5cbmZ1bmN0aW9uIHRyKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCB0YWJsZVJvdylcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3RkPmAgb3IgYDwvdGg+YC5cbmZ1bmN0aW9uIGNlbGxzKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCB0YWJsZUNlbGwpXG59XG4iLCIndXNlIHN0cmljdCdcbmV4cG9ydHMub3BlbmluZyA9IHJlcXVpcmUoJy4vb3BlbmluZycpXG5leHBvcnRzLmNsb3NpbmcgPSByZXF1aXJlKCcuL2Nsb3NpbmcnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb25cblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIEZhY3RvcnkgdG8gY2hlY2sgaWYgYSBnaXZlbiBub2RlIGNhbiBoYXZlIGEgdGFnIG9taXR0ZWQuXG5mdW5jdGlvbiBvbWlzc2lvbihoYW5kbGVycykge1xuICByZXR1cm4gb21pdFxuXG4gIC8vIENoZWNrIGlmIGEgZ2l2ZW4gbm9kZSBjYW4gaGF2ZSBhIHRhZyBvbWl0dGVkLlxuICBmdW5jdGlvbiBvbWl0KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZVxuXG4gICAgcmV0dXJuIG93bi5jYWxsKGhhbmRsZXJzLCBuYW1lKVxuICAgICAgPyBoYW5kbGVyc1tuYW1lXShub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgOiBmYWxzZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIGVsZW1lbnQgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgYmVmb3JlID0gcmVxdWlyZSgnLi91dGlsL3NpYmxpbmdzJykuYmVmb3JlXG52YXIgZmlyc3QgPSByZXF1aXJlKCcuL3V0aWwvZmlyc3QnKVxudmFyIHBsYWNlID0gcmVxdWlyZSgnLi91dGlsL3BsYWNlJylcbnZhciB3aGl0ZVNwYWNlU3RhcnQgPSByZXF1aXJlKCcuL3V0aWwvd2hpdGUtc3BhY2Utc3RhcnQnKVxudmFyIGNsb3NpbmcgPSByZXF1aXJlKCcuL2Nsb3NpbmcnKVxudmFyIG9taXNzaW9uID0gcmVxdWlyZSgnLi9vbWlzc2lvbicpXG5cbnZhciBpc0NvbW1lbnQgPSBjb252ZXJ0KCdjb21tZW50JylcblxudmFyIHVuaXF1ZUhlYWRNZXRhZGF0YSA9IFsndGl0bGUnLCAnYmFzZSddXG52YXIgbWV0YSA9IFsnbWV0YScsICdsaW5rJywgJ3NjcmlwdCcsICdzdHlsZScsICd0ZW1wbGF0ZSddXG52YXIgdGFibGVDb250YWluZXJzID0gWyd0aGVhZCcsICd0Ym9keSddXG52YXIgdGFibGVSb3cgPSAndHInXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb24oe1xuICBodG1sOiBodG1sLFxuICBoZWFkOiBoZWFkLFxuICBib2R5OiBib2R5LFxuICBjb2xncm91cDogY29sZ3JvdXAsXG4gIHRib2R5OiB0Ym9keVxufSlcblxuLy8gV2hldGhlciB0byBvbWl0IGA8aHRtbD5gLlxuZnVuY3Rpb24gaHRtbChub2RlKSB7XG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSlcbiAgcmV0dXJuICFoZWFkIHx8ICFpc0NvbW1lbnQoaGVhZClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8aGVhZD5gLlxuZnVuY3Rpb24gaGVhZChub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgc2VlbiA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGlsZFxuICB2YXIgbmFtZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cbiAgICBuYW1lID0gY2hpbGQudGFnTmFtZVxuXG4gICAgaWYgKGVsZW1lbnQoY2hpbGQsIHVuaXF1ZUhlYWRNZXRhZGF0YSkpIHtcbiAgICAgIGlmIChzZWVuLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBzZWVuLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVuZ3RoICE9PSAwXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPGJvZHk+YC5cbmZ1bmN0aW9uIGJvZHkobm9kZSkge1xuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhaGVhZCB8fFxuICAgICghaXNDb21tZW50KGhlYWQpICYmICF3aGl0ZVNwYWNlU3RhcnQoaGVhZCkgJiYgIWVsZW1lbnQoaGVhZCwgbWV0YSkpXG4gIClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8Y29sZ3JvdXA+YC5cbi8vIFRoZSBzcGVjIGRlc2NyaWJlcyBzb21lIGxvZ2ljIGZvciB0aGUgb3BlbmluZyB0YWcsIGJ1dCBpdOKAmXMgZWFzaWVyIHRvXG4vLyBpbXBsZW1lbnQgaW4gdGhlIGNsb3NpbmcgdGFnLCB0byB0aGUgc2FtZSBlZmZlY3QsIHNvIHdlIGhhbmRsZSBpdCB0aGVyZVxuLy8gaW5zdGVhZC5cbmZ1bmN0aW9uIGNvbGdyb3VwKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHByZXZpb3VzID0gYmVmb3JlKHBhcmVudCwgaW5kZXgpXG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSwgdHJ1ZSlcblxuICAvLyBQcmV2aW91cyBjb2xncm91cCB3YXMgYWxyZWFkeSBvbWl0dGVkLlxuICBpZiAoXG4gICAgZWxlbWVudChwcmV2aW91cywgJ2NvbGdyb3VwJykgJiZcbiAgICBjbG9zaW5nKHByZXZpb3VzLCBwbGFjZShwYXJlbnQsIHByZXZpb3VzKSwgcGFyZW50KVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBoZWFkICYmIGVsZW1lbnQoaGVhZCwgJ2NvbCcpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPHRib2R5PmAuXG5mdW5jdGlvbiB0Ym9keShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBwcmV2aW91cyA9IGJlZm9yZShwYXJlbnQsIGluZGV4KVxuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUpXG5cbiAgLy8gUHJldmlvdXMgdGFibGUgc2VjdGlvbiB3YXMgYWxyZWFkeSBvbWl0dGVkLlxuICBpZiAoXG4gICAgZWxlbWVudChwcmV2aW91cywgdGFibGVDb250YWluZXJzKSAmJlxuICAgIGNsb3NpbmcocHJldmlvdXMsIHBsYWNlKHBhcmVudCwgcHJldmlvdXMpLCBwYXJlbnQpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGhlYWQgJiYgZWxlbWVudChoZWFkLCB0YWJsZVJvdylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWZ0ZXIgPSByZXF1aXJlKCcuL3NpYmxpbmdzJykuYWZ0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBmaXJzdFxuXG4vLyBHZXQgdGhlIGZpcnN0IGNoaWxkIGluIGBwYXJlbnRgLlxuZnVuY3Rpb24gZmlyc3QocGFyZW50LCBpbmNsdWRlV2hpdGVTcGFjZSkge1xuICByZXR1cm4gYWZ0ZXIocGFyZW50LCAtMSwgaW5jbHVkZVdoaXRlU3BhY2UpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwbGFjZVxuXG4vLyBHZXQgdGhlIHBvc2l0aW9uIG9mIGBub2RlYCBpbiBgcGFyZW50YC5cbmZ1bmN0aW9uIHBsYWNlKHBhcmVudCwgY2hpbGQpIHtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlU3BhY2UgPSByZXF1aXJlKCdoYXN0LXV0aWwtd2hpdGVzcGFjZScpXG5cbmV4cG9ydHMuYmVmb3JlID0gc2libGluZ3MoLTEpXG5leHBvcnRzLmFmdGVyID0gc2libGluZ3MoMSlcblxuLy8gRmFjdG9yeSB0byBjaGVjayBzaWJsaW5ncyBpbiBhIGRpcmVjdGlvbi5cbmZ1bmN0aW9uIHNpYmxpbmdzKGluY3JlbWVudCkge1xuICByZXR1cm4gc2libGluZ1xuXG4gIC8vIEZpbmQgYXBwbGljYWJsZSBzaWJsaW5ncyBpbiBhIGRpcmVjdGlvbi5cbiAgZnVuY3Rpb24gc2libGluZyhwYXJlbnQsIGluZGV4LCBpbmNsdWRlV2hpdGVTcGFjZSkge1xuICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW5cbiAgICB2YXIgb2Zmc2V0ID0gaW5kZXggKyBpbmNyZW1lbnRcbiAgICB2YXIgbmV4dCA9IHNpYmxpbmdzICYmIHNpYmxpbmdzW29mZnNldF1cblxuICAgIGlmICghaW5jbHVkZVdoaXRlU3BhY2UpIHtcbiAgICAgIHdoaWxlIChuZXh0ICYmIHdoaXRlU3BhY2UobmV4dCkpIHtcbiAgICAgICAgb2Zmc2V0ICs9IGluY3JlbWVudFxuICAgICAgICBuZXh0ID0gc2libGluZ3Nbb2Zmc2V0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgd2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2hhc3QtdXRpbC13aGl0ZXNwYWNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3aGl0ZVNwYWNlU3RhcnRcblxudmFyIGlzVGV4dCA9IGNvbnZlcnQoJ3RleHQnKVxuXG4vLyBDaGVjayBpZiBgbm9kZWAgc3RhcnRzIHdpdGggd2hpdGUtc3BhY2UuXG5mdW5jdGlvbiB3aGl0ZVNwYWNlU3RhcnQobm9kZSkge1xuICByZXR1cm4gaXNUZXh0KG5vZGUpICYmIHdoaXRlU3BhY2Uobm9kZS52YWx1ZS5jaGFyQXQoMCkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbnZhciBoYW5kbGVycyA9IHt9XG5cbmhhbmRsZXJzLnJvb3QgPSByZXF1aXJlKCcuL2FsbCcpXG5oYW5kbGVycy50ZXh0ID0gcmVxdWlyZSgnLi90ZXh0JylcbmhhbmRsZXJzLmVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKVxuaGFuZGxlcnMuZG9jdHlwZSA9IHJlcXVpcmUoJy4vZG9jdHlwZScpXG5oYW5kbGVycy5jb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50JylcbmhhbmRsZXJzLnJhdyA9IHJlcXVpcmUoJy4vcmF3JylcblxuZnVuY3Rpb24gc2VyaWFsaXplKGN0eCwgbm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgdHlwZSA9IG5vZGUgJiYgbm9kZS50eXBlXG5cbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG5cbiAgaWYgKCFvd24uY2FsbChoYW5kbGVycywgdHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb21waWxlIHVua25vd24gbm9kZSBgJyArIHR5cGUgKyAnYCcpXG4gIH1cblxuICByZXR1cm4gaGFuZGxlcnNbdHlwZV0oY3R4LCBub2RlLCBpbmRleCwgcGFyZW50KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0ZXh0ID0gcmVxdWlyZSgnLi90ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVSYXdcblxuZnVuY3Rpb24gc2VyaWFsaXplUmF3KGN0eCwgbm9kZSkge1xuICByZXR1cm4gY3R4LmRhbmdlcm91cyA/IG5vZGUudmFsdWUgOiB0ZXh0KGN0eCwgbm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZVRleHRcblxuZnVuY3Rpb24gc2VyaWFsaXplVGV4dChjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuXG4gIHJldHVybiBpc0xpdGVyYWwocGFyZW50KVxuICAgID8gdmFsdWVcbiAgICA6IGVudGl0aWVzKHZhbHVlLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IFsnPCcsICcmJ119KSlcbn1cblxuLy8gQ2hlY2sgaWYgY29udGVudCBvZiBgbm9kZWAgc2hvdWxkIGJlIGVzY2FwZWQuXG5mdW5jdGlvbiBpc0xpdGVyYWwobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiAobm9kZS50YWdOYW1lID09PSAnc2NyaXB0JyB8fCBub2RlLnRhZ05hbWUgPT09ICdzdHlsZScpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlXG5cbi8vIEhUTUwgd2hpdGUtc3BhY2UgZXhwcmVzc2lvbi5cbi8vIFNlZSA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3BhY2UtY2hhcmFjdGVyPi5cbnZhciByZSA9IC9bIFxcdFxcblxcZlxccl0vZ1xuXG5mdW5jdGlvbiBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlKG5vZGUpIHtcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgJycpID09PSAnJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2RlZmluZWQtaW5mbycpXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvaW5mbycpXG5cbnZhciBkYXRhID0gJ2RhdGEnXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFxuXG52YXIgdmFsaWQgPSAvXmRhdGFbLWEtejAtOS46X10rJC9pXG52YXIgZGFzaCA9IC8tW2Etel0vZ1xudmFyIGNhcCA9IC9bQS1aXS9nXG5cbmZ1bmN0aW9uIGZpbmQoc2NoZW1hLCB2YWx1ZSkge1xuICB2YXIgbm9ybWFsID0gbm9ybWFsaXplKHZhbHVlKVxuICB2YXIgcHJvcCA9IHZhbHVlXG4gIHZhciBUeXBlID0gSW5mb1xuXG4gIGlmIChub3JtYWwgaW4gc2NoZW1hLm5vcm1hbCkge1xuICAgIHJldHVybiBzY2hlbWEucHJvcGVydHlbc2NoZW1hLm5vcm1hbFtub3JtYWxdXVxuICB9XG5cbiAgaWYgKG5vcm1hbC5sZW5ndGggPiA0ICYmIG5vcm1hbC5zbGljZSgwLCA0KSA9PT0gZGF0YSAmJiB2YWxpZC50ZXN0KHZhbHVlKSkge1xuICAgIC8vIEF0dHJpYnV0ZSBvciBwcm9wZXJ0eS5cbiAgICBpZiAodmFsdWUuY2hhckF0KDQpID09PSAnLScpIHtcbiAgICAgIHByb3AgPSBkYXRhc2V0VG9Qcm9wZXJ0eSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkYXRhc2V0VG9BdHRyaWJ1dGUodmFsdWUpXG4gICAgfVxuXG4gICAgVHlwZSA9IERlZmluZWRJbmZvXG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGUocHJvcCwgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRUb1Byb3BlcnR5KGF0dHJpYnV0ZSkge1xuICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGUuc2xpY2UoNSkucmVwbGFjZShkYXNoLCBjYW1lbGNhc2UpXG4gIHJldHVybiBkYXRhICsgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9BdHRyaWJ1dGUocHJvcGVydHkpIHtcbiAgdmFyIHZhbHVlID0gcHJvcGVydHkuc2xpY2UoNClcblxuICBpZiAoZGFzaC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcm9wZXJ0eVxuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGNhcCwga2ViYWIpXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gJy0nKSB7XG4gICAgdmFsdWUgPSAnLScgKyB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIGRhdGEgKyB2YWx1ZVxufVxuXG5mdW5jdGlvbiBrZWJhYigkMCkge1xuICByZXR1cm4gJy0nICsgJDAudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBjYW1lbGNhc2UoJDApIHtcbiAgcmV0dXJuICQwLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1lcmdlID0gcmVxdWlyZSgnLi9saWIvdXRpbC9tZXJnZScpXG52YXIgeGxpbmsgPSByZXF1aXJlKCcuL2xpYi94bGluaycpXG52YXIgeG1sID0gcmVxdWlyZSgnLi9saWIveG1sJylcbnZhciB4bWxucyA9IHJlcXVpcmUoJy4vbGliL3htbG5zJylcbnZhciBhcmlhID0gcmVxdWlyZSgnLi9saWIvYXJpYScpXG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vbGliL2h0bWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgaHRtbF0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxudmFyIGJvb2xlYW5pc2ggPSB0eXBlcy5ib29sZWFuaXNoXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHRyYW5zZm9ybTogYXJpYVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50OiBudWxsLFxuICAgIGFyaWFBdG9taWM6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUF1dG9Db21wbGV0ZTogbnVsbCxcbiAgICBhcmlhQnVzeTogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ2hlY2tlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ29sQ291bnQ6IG51bWJlcixcbiAgICBhcmlhQ29sSW5kZXg6IG51bWJlcixcbiAgICBhcmlhQ29sU3BhbjogbnVtYmVyLFxuICAgIGFyaWFDb250cm9sczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUN1cnJlbnQ6IG51bGwsXG4gICAgYXJpYURlc2NyaWJlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRGV0YWlsczogbnVsbCxcbiAgICBhcmlhRGlzYWJsZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYURyb3BFZmZlY3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFFcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgYXJpYUV4cGFuZGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFGbG93VG86IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFHcmFiYmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFIYXNQb3B1cDogbnVsbCxcbiAgICBhcmlhSGlkZGVuOiBib29sZWFuaXNoLFxuICAgIGFyaWFJbnZhbGlkOiBudWxsLFxuICAgIGFyaWFLZXlTaG9ydGN1dHM6IG51bGwsXG4gICAgYXJpYUxhYmVsOiBudWxsLFxuICAgIGFyaWFMYWJlbGxlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhTGV2ZWw6IG51bWJlcixcbiAgICBhcmlhTGl2ZTogbnVsbCxcbiAgICBhcmlhTW9kYWw6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpTGluZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBib29sZWFuaXNoLFxuICAgIGFyaWFPcmllbnRhdGlvbjogbnVsbCxcbiAgICBhcmlhT3duczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYVBsYWNlaG9sZGVyOiBudWxsLFxuICAgIGFyaWFQb3NJblNldDogbnVtYmVyLFxuICAgIGFyaWFQcmVzc2VkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSZWFkT25seTogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVsZXZhbnQ6IG51bGwsXG4gICAgYXJpYVJlcXVpcmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSb2xlRGVzY3JpcHRpb246IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFSb3dDb3VudDogbnVtYmVyLFxuICAgIGFyaWFSb3dJbmRleDogbnVtYmVyLFxuICAgIGFyaWFSb3dTcGFuOiBudW1iZXIsXG4gICAgYXJpYVNlbGVjdGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFTZXRTaXplOiBudW1iZXIsXG4gICAgYXJpYVNvcnQ6IG51bGwsXG4gICAgYXJpYVZhbHVlTWF4OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTWluOiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTm93OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlVGV4dDogbnVsbCxcbiAgICByb2xlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGFyaWFUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gcHJvcCA9PT0gJ3JvbGUnID8gcHJvcCA6ICdhcmlhLScgKyBwcm9wLnNsaWNlKDQpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG92ZXJsb2FkZWRCb29sZWFuID0gdHlwZXMub3ZlcmxvYWRlZEJvb2xlYW5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdodG1sJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGFjY2VwdGNoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gICAgY2xhc3NuYW1lOiAnY2xhc3MnLFxuICAgIGh0bWxmb3I6ICdmb3InLFxuICAgIGh0dHBlcXVpdjogJ2h0dHAtZXF1aXYnXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBtdXN0VXNlUHJvcGVydHk6IFsnY2hlY2tlZCcsICdtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCddLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLy8gU3RhbmRhcmQgUHJvcGVydGllcy5cbiAgICBhYmJyOiBudWxsLFxuICAgIGFjY2VwdDogY29tbWFTZXBhcmF0ZWQsXG4gICAgYWNjZXB0Q2hhcnNldDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZXNzS2V5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhY3Rpb246IG51bGwsXG4gICAgYWxsb3c6IG51bGwsXG4gICAgYWxsb3dGdWxsU2NyZWVuOiBib29sZWFuLFxuICAgIGFsbG93UGF5bWVudFJlcXVlc3Q6IGJvb2xlYW4sXG4gICAgYWxsb3dVc2VyTWVkaWE6IGJvb2xlYW4sXG4gICAgYWx0OiBudWxsLFxuICAgIGFzOiBudWxsLFxuICAgIGFzeW5jOiBib29sZWFuLFxuICAgIGF1dG9DYXBpdGFsaXplOiBudWxsLFxuICAgIGF1dG9Db21wbGV0ZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXV0b0ZvY3VzOiBib29sZWFuLFxuICAgIGF1dG9QbGF5OiBib29sZWFuLFxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXG4gICAgY2hhclNldDogbnVsbCxcbiAgICBjaGVja2VkOiBib29sZWFuLFxuICAgIGNpdGU6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb2xzOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBjb250cm9sczogYm9vbGVhbixcbiAgICBjb250cm9sc0xpc3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNvb3JkczogbnVtYmVyIHwgY29tbWFTZXBhcmF0ZWQsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBkYXRlVGltZTogbnVsbCxcbiAgICBkZWNvZGluZzogbnVsbCxcbiAgICBkZWZhdWx0OiBib29sZWFuLFxuICAgIGRlZmVyOiBib29sZWFuLFxuICAgIGRpcjogbnVsbCxcbiAgICBkaXJOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBib29sZWFuLFxuICAgIGRvd25sb2FkOiBvdmVybG9hZGVkQm9vbGVhbixcbiAgICBkcmFnZ2FibGU6IGJvb2xlYW5pc2gsXG4gICAgZW5jVHlwZTogbnVsbCxcbiAgICBlbnRlcktleUhpbnQ6IG51bGwsXG4gICAgZm9ybTogbnVsbCxcbiAgICBmb3JtQWN0aW9uOiBudWxsLFxuICAgIGZvcm1FbmNUeXBlOiBudWxsLFxuICAgIGZvcm1NZXRob2Q6IG51bGwsXG4gICAgZm9ybU5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgZm9ybVRhcmdldDogbnVsbCxcbiAgICBoZWFkZXJzOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBoaWRkZW46IGJvb2xlYW4sXG4gICAgaGlnaDogbnVtYmVyLFxuICAgIGhyZWY6IG51bGwsXG4gICAgaHJlZkxhbmc6IG51bGwsXG4gICAgaHRtbEZvcjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaHR0cEVxdWl2OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpZDogbnVsbCxcbiAgICBpbWFnZVNpemVzOiBudWxsLFxuICAgIGltYWdlU3JjU2V0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBpbnB1dE1vZGU6IG51bGwsXG4gICAgaW50ZWdyaXR5OiBudWxsLFxuICAgIGlzOiBudWxsLFxuICAgIGlzTWFwOiBib29sZWFuLFxuICAgIGl0ZW1JZDogbnVsbCxcbiAgICBpdGVtUHJvcDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVJlZjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVNjb3BlOiBib29sZWFuLFxuICAgIGl0ZW1UeXBlOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBraW5kOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIGxhbmc6IG51bGwsXG4gICAgbGFuZ3VhZ2U6IG51bGwsXG4gICAgbGlzdDogbnVsbCxcbiAgICBsb29wOiBib29sZWFuLFxuICAgIGxvdzogbnVtYmVyLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIG1heDogbnVsbCxcbiAgICBtYXhMZW5ndGg6IG51bWJlcixcbiAgICBtZWRpYTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWluOiBudWxsLFxuICAgIG1pbkxlbmd0aDogbnVtYmVyLFxuICAgIG11bHRpcGxlOiBib29sZWFuLFxuICAgIG11dGVkOiBib29sZWFuLFxuICAgIG5hbWU6IG51bGwsXG4gICAgbm9uY2U6IG51bGwsXG4gICAgbm9Nb2R1bGU6IGJvb2xlYW4sXG4gICAgbm9WYWxpZGF0ZTogYm9vbGVhbixcbiAgICBvbkFib3J0OiBudWxsLFxuICAgIG9uQWZ0ZXJQcmludDogbnVsbCxcbiAgICBvbkF1eENsaWNrOiBudWxsLFxuICAgIG9uQmVmb3JlUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVVbmxvYWQ6IG51bGwsXG4gICAgb25CbHVyOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvbnRleHRNZW51OiBudWxsLFxuICAgIG9uQ29weTogbnVsbCxcbiAgICBvbkN1ZUNoYW5nZTogbnVsbCxcbiAgICBvbkN1dDogbnVsbCxcbiAgICBvbkRibENsaWNrOiBudWxsLFxuICAgIG9uRHJhZzogbnVsbCxcbiAgICBvbkRyYWdFbmQ6IG51bGwsXG4gICAgb25EcmFnRW50ZXI6IG51bGwsXG4gICAgb25EcmFnRXhpdDogbnVsbCxcbiAgICBvbkRyYWdMZWF2ZTogbnVsbCxcbiAgICBvbkRyYWdPdmVyOiBudWxsLFxuICAgIG9uRHJhZ1N0YXJ0OiBudWxsLFxuICAgIG9uRHJvcDogbnVsbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBudWxsLFxuICAgIG9uRW1wdGllZDogbnVsbCxcbiAgICBvbkVuZGVkOiBudWxsLFxuICAgIG9uRXJyb3I6IG51bGwsXG4gICAgb25Gb2N1czogbnVsbCxcbiAgICBvbkZvcm1EYXRhOiBudWxsLFxuICAgIG9uSGFzaENoYW5nZTogbnVsbCxcbiAgICBvbklucHV0OiBudWxsLFxuICAgIG9uSW52YWxpZDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgb25LZXlQcmVzczogbnVsbCxcbiAgICBvbktleVVwOiBudWxsLFxuICAgIG9uTGFuZ3VhZ2VDaGFuZ2U6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZEVuZDogbnVsbCxcbiAgICBvbkxvYWRTdGFydDogbnVsbCxcbiAgICBvbk1lc3NhZ2U6IG51bGwsXG4gICAgb25NZXNzYWdlRXJyb3I6IG51bGwsXG4gICAgb25Nb3VzZURvd246IG51bGwsXG4gICAgb25Nb3VzZUVudGVyOiBudWxsLFxuICAgIG9uTW91c2VMZWF2ZTogbnVsbCxcbiAgICBvbk1vdXNlTW92ZTogbnVsbCxcbiAgICBvbk1vdXNlT3V0OiBudWxsLFxuICAgIG9uTW91c2VPdmVyOiBudWxsLFxuICAgIG9uTW91c2VVcDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZWplY3Rpb25IYW5kbGVkOiBudWxsLFxuICAgIG9uUmVzZXQ6IG51bGwsXG4gICAgb25SZXNpemU6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgb25TZWN1cml0eVBvbGljeVZpb2xhdGlvbjogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TbG90Q2hhbmdlOiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVuaGFuZGxlZFJlamVjdGlvbjogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25XaGVlbDogbnVsbCxcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIG9wdGltdW06IG51bWJlcixcbiAgICBwYXR0ZXJuOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIHBsYXlzSW5saW5lOiBib29sZWFuLFxuICAgIHBvc3RlcjogbnVsbCxcbiAgICBwcmVsb2FkOiBudWxsLFxuICAgIHJlYWRPbmx5OiBib29sZWFuLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlbDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgcmV2ZXJzZWQ6IGJvb2xlYW4sXG4gICAgcm93czogbnVtYmVyLFxuICAgIHJvd1NwYW46IG51bWJlcixcbiAgICBzYW5kYm94OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBzY29wZTogbnVsbCxcbiAgICBzY29wZWQ6IGJvb2xlYW4sXG4gICAgc2VhbWxlc3M6IGJvb2xlYW4sXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgc2hhcGU6IG51bGwsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHNpemVzOiBudWxsLFxuICAgIHNsb3Q6IG51bGwsXG4gICAgc3BhbjogbnVtYmVyLFxuICAgIHNwZWxsQ2hlY2s6IGJvb2xlYW5pc2gsXG4gICAgc3JjOiBudWxsLFxuICAgIHNyY0RvYzogbnVsbCxcbiAgICBzcmNMYW5nOiBudWxsLFxuICAgIHNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBzdGVwOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRyYW5zbGF0ZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVNdXN0TWF0Y2g6IGJvb2xlYW4sXG4gICAgdXNlTWFwOiBudWxsLFxuICAgIHZhbHVlOiBib29sZWFuaXNoLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgd3JhcDogbnVsbCxcblxuICAgIC8vIExlZ2FjeS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI290aGVyLWVsZW1lbnRzLC1hdHRyaWJ1dGVzLWFuZC1hcGlzXG4gICAgYWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHRleHQtYWxpZ25gIGluc3RlYWQsXG4gICAgYUxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmFjdGl2ZSB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgYXJjaGl2ZTogc3BhY2VTZXBhcmF0ZWQsIC8vIGA8b2JqZWN0PmAuIExpc3Qgb2YgVVJJcyB0byBhcmNoaXZlc1xuICAgIGF4aXM6IG51bGwsIC8vIGA8dGQ+YCBhbmQgYDx0aD5gLiBVc2UgYHNjb3BlYCBvbiBgPHRoPmBcbiAgICBiYWNrZ3JvdW5kOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYmFja2dyb3VuZC1pbWFnZWAgaW5zdGVhZFxuICAgIGJnQ29sb3I6IG51bGwsIC8vIGA8Ym9keT5gIGFuZCB0YWJsZSBlbGVtZW50cy4gVXNlIENTUyBgYmFja2dyb3VuZC1jb2xvcmAgaW5zdGVhZFxuICAgIGJvcmRlcjogbnVtYmVyLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci13aWR0aGAgaW5zdGVhZCxcbiAgICBib3JkZXJDb2xvcjogbnVsbCwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItY29sb3JgIGluc3RlYWQsXG4gICAgYm90dG9tTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgY2VsbFBhZGRpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNlbGxTcGFjaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjaGFyOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBhbGlnbj1jaGFyYCwgc2V0cyB0aGUgY2hhcmFjdGVyIHRvIGFsaWduIG9uXG4gICAgY2hhck9mZjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgY2hhcmAsIG9mZnNldHMgdGhlIGFsaWdubWVudFxuICAgIGNsYXNzSWQ6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjbGVhcjogbnVsbCwgLy8gYDxicj5gLiBVc2UgQ1NTIGBjbGVhcmAgaW5zdGVhZFxuICAgIGNvZGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlQmFzZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVUeXBlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29sb3I6IG51bGwsIC8vIGA8Zm9udD5gIGFuZCBgPGhyPmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGNvbXBhY3Q6IGJvb2xlYW4sIC8vIExpc3RzLiBVc2UgQ1NTIHRvIHJlZHVjZSBzcGFjZSBiZXR3ZWVuIGl0ZW1zIGluc3RlYWRcbiAgICBkZWNsYXJlOiBib29sZWFuLCAvLyBgPG9iamVjdD5gXG4gICAgZXZlbnQ6IG51bGwsIC8vIGA8c2NyaXB0PmBcbiAgICBmYWNlOiBudWxsLCAvLyBgPGZvbnQ+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgZnJhbWU6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGZyYW1lQm9yZGVyOiBudWxsLCAvLyBgPGlmcmFtZT5gLiBVc2UgQ1NTIGBib3JkZXJgIGluc3RlYWRcbiAgICBoU3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuICAgIGxlZnRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBsaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTpsaW5rIHtjb2xvcjogKn1gIGluc3RlYWRcbiAgICBsb25nRGVzYzogbnVsbCwgLy8gYDxmcmFtZT5gLCBgPGlmcmFtZT5gLCBhbmQgYDxpbWc+YC4gVXNlIGFuIGA8YT5gXG4gICAgbG93U3JjOiBudWxsLCAvLyBgPGltZz5gLiBVc2UgYSBgPHBpY3R1cmU+YFxuICAgIG1hcmdpbkhlaWdodDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG1hcmdpbldpZHRoOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbm9SZXNpemU6IGJvb2xlYW4sIC8vIGA8ZnJhbWU+YFxuICAgIG5vSHJlZjogYm9vbGVhbiwgLy8gYDxhcmVhPmAuIFVzZSBubyBocmVmIGluc3RlYWQgb2YgYW4gZXhwbGljaXQgYG5vaHJlZmBcbiAgICBub1NoYWRlOiBib29sZWFuLCAvLyBgPGhyPmAuIFVzZSBiYWNrZ3JvdW5kLWNvbG9yIGFuZCBoZWlnaHQgaW5zdGVhZCBvZiBib3JkZXJzXG4gICAgbm9XcmFwOiBib29sZWFuLCAvLyBgPHRkPmAgYW5kIGA8dGg+YFxuICAgIG9iamVjdDogbnVsbCwgLy8gYDxhcHBsZXQ+YFxuICAgIHByb2ZpbGU6IG51bGwsIC8vIGA8aGVhZD5gXG4gICAgcHJvbXB0OiBudWxsLCAvLyBgPGlzaW5kZXg+YFxuICAgIHJldjogbnVsbCwgLy8gYDxsaW5rPmBcbiAgICByaWdodE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHJ1bGVzOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBzY2hlbWU6IG51bGwsIC8vIGA8bWV0YT5gXG4gICAgc2Nyb2xsaW5nOiBib29sZWFuaXNoLCAvLyBgPGZyYW1lPmAuIFVzZSBvdmVyZmxvdyBpbiB0aGUgY2hpbGQgY29udGV4dFxuICAgIHN0YW5kYnk6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBzdW1tYXJ5OiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICB0ZXh0OiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgY29sb3JgIGluc3RlYWRcbiAgICB0b3BNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICB2YWx1ZVR5cGU6IG51bGwsIC8vIGA8cGFyYW0+YFxuICAgIHZlcnNpb246IG51bGwsIC8vIGA8aHRtbD5gLiBVc2UgYSBkb2N0eXBlLlxuICAgIHZBbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdmVydGljYWwtYWxpZ25gIGluc3RlYWRcbiAgICB2TGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6dmlzaXRlZCB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgdlNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcblxuICAgIC8vIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFsbG93VHJhbnNwYXJlbmN5OiBudWxsLFxuICAgIGF1dG9Db3JyZWN0OiBudWxsLFxuICAgIGF1dG9TYXZlOiBudWxsLFxuICAgIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlOiBib29sZWFuLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICByZXN1bHRzOiBudW1iZXIsXG4gICAgc2VjdXJpdHk6IG51bGwsXG4gICAgdW5zZWxlY3RhYmxlOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG52YXIgY29tbWFPclNwYWNlU2VwYXJhdGVkID0gdHlwZXMuY29tbWFPclNwYWNlU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdzdmcnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgYWNjZW50SGVpZ2h0OiAnYWNjZW50LWhlaWdodCcsXG4gICAgYWxpZ25tZW50QmFzZWxpbmU6ICdhbGlnbm1lbnQtYmFzZWxpbmUnLFxuICAgIGFyYWJpY0Zvcm06ICdhcmFiaWMtZm9ybScsXG4gICAgYmFzZWxpbmVTaGlmdDogJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgICBjYXBIZWlnaHQ6ICdjYXAtaGVpZ2h0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgY2xpcFBhdGg6ICdjbGlwLXBhdGgnLFxuICAgIGNsaXBSdWxlOiAnY2xpcC1ydWxlJyxcbiAgICBjb2xvckludGVycG9sYXRpb246ICdjb2xvci1pbnRlcnBvbGF0aW9uJyxcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJyxcbiAgICBjb2xvclByb2ZpbGU6ICdjb2xvci1wcm9maWxlJyxcbiAgICBjb2xvclJlbmRlcmluZzogJ2NvbG9yLXJlbmRlcmluZycsXG4gICAgY3Jvc3NPcmlnaW46ICdjcm9zc29yaWdpbicsXG4gICAgZGF0YVR5cGU6ICdkYXRhdHlwZScsXG4gICAgZG9taW5hbnRCYXNlbGluZTogJ2RvbWluYW50LWJhc2VsaW5lJyxcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiAnZW5hYmxlLWJhY2tncm91bmQnLFxuICAgIGZpbGxPcGFjaXR5OiAnZmlsbC1vcGFjaXR5JyxcbiAgICBmaWxsUnVsZTogJ2ZpbGwtcnVsZScsXG4gICAgZmxvb2RDb2xvcjogJ2Zsb29kLWNvbG9yJyxcbiAgICBmbG9vZE9wYWNpdHk6ICdmbG9vZC1vcGFjaXR5JyxcbiAgICBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknLFxuICAgIGZvbnRTaXplOiAnZm9udC1zaXplJyxcbiAgICBmb250U2l6ZUFkanVzdDogJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAgIGZvbnRTdHJldGNoOiAnZm9udC1zdHJldGNoJyxcbiAgICBmb250U3R5bGU6ICdmb250LXN0eWxlJyxcbiAgICBmb250VmFyaWFudDogJ2ZvbnQtdmFyaWFudCcsXG4gICAgZm9udFdlaWdodDogJ2ZvbnQtd2VpZ2h0JyxcbiAgICBnbHlwaE5hbWU6ICdnbHlwaC1uYW1lJyxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLFxuICAgIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJyxcbiAgICBocmVmTGFuZzogJ2hyZWZsYW5nJyxcbiAgICBob3JpekFkdlg6ICdob3Jpei1hZHYteCcsXG4gICAgaG9yaXpPcmlnaW5YOiAnaG9yaXotb3JpZ2luLXgnLFxuICAgIGhvcml6T3JpZ2luWTogJ2hvcml6LW9yaWdpbi15JyxcbiAgICBpbWFnZVJlbmRlcmluZzogJ2ltYWdlLXJlbmRlcmluZycsXG4gICAgbGV0dGVyU3BhY2luZzogJ2xldHRlci1zcGFjaW5nJyxcbiAgICBsaWdodGluZ0NvbG9yOiAnbGlnaHRpbmctY29sb3InLFxuICAgIG1hcmtlckVuZDogJ21hcmtlci1lbmQnLFxuICAgIG1hcmtlck1pZDogJ21hcmtlci1taWQnLFxuICAgIG1hcmtlclN0YXJ0OiAnbWFya2VyLXN0YXJ0JyxcbiAgICBuYXZEb3duOiAnbmF2LWRvd24nLFxuICAgIG5hdkRvd25MZWZ0OiAnbmF2LWRvd24tbGVmdCcsXG4gICAgbmF2RG93blJpZ2h0OiAnbmF2LWRvd24tcmlnaHQnLFxuICAgIG5hdkxlZnQ6ICduYXYtbGVmdCcsXG4gICAgbmF2TmV4dDogJ25hdi1uZXh0JyxcbiAgICBuYXZQcmV2OiAnbmF2LXByZXYnLFxuICAgIG5hdlJpZ2h0OiAnbmF2LXJpZ2h0JyxcbiAgICBuYXZVcDogJ25hdi11cCcsXG4gICAgbmF2VXBMZWZ0OiAnbmF2LXVwLWxlZnQnLFxuICAgIG5hdlVwUmlnaHQ6ICduYXYtdXAtcmlnaHQnLFxuICAgIG9uQWJvcnQ6ICdvbmFib3J0JyxcbiAgICBvbkFjdGl2YXRlOiAnb25hY3RpdmF0ZScsXG4gICAgb25BZnRlclByaW50OiAnb25hZnRlcnByaW50JyxcbiAgICBvbkJlZm9yZVByaW50OiAnb25iZWZvcmVwcmludCcsXG4gICAgb25CZWdpbjogJ29uYmVnaW4nLFxuICAgIG9uQ2FuY2VsOiAnb25jYW5jZWwnLFxuICAgIG9uQ2FuUGxheTogJ29uY2FucGxheScsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogJ29uY2FucGxheXRocm91Z2gnLFxuICAgIG9uQ2hhbmdlOiAnb25jaGFuZ2UnLFxuICAgIG9uQ2xpY2s6ICdvbmNsaWNrJyxcbiAgICBvbkNsb3NlOiAnb25jbG9zZScsXG4gICAgb25Db3B5OiAnb25jb3B5JyxcbiAgICBvbkN1ZUNoYW5nZTogJ29uY3VlY2hhbmdlJyxcbiAgICBvbkN1dDogJ29uY3V0JyxcbiAgICBvbkRibENsaWNrOiAnb25kYmxjbGljaycsXG4gICAgb25EcmFnOiAnb25kcmFnJyxcbiAgICBvbkRyYWdFbmQ6ICdvbmRyYWdlbmQnLFxuICAgIG9uRHJhZ0VudGVyOiAnb25kcmFnZW50ZXInLFxuICAgIG9uRHJhZ0V4aXQ6ICdvbmRyYWdleGl0JyxcbiAgICBvbkRyYWdMZWF2ZTogJ29uZHJhZ2xlYXZlJyxcbiAgICBvbkRyYWdPdmVyOiAnb25kcmFnb3ZlcicsXG4gICAgb25EcmFnU3RhcnQ6ICdvbmRyYWdzdGFydCcsXG4gICAgb25Ecm9wOiAnb25kcm9wJyxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiAnb25kdXJhdGlvbmNoYW5nZScsXG4gICAgb25FbXB0aWVkOiAnb25lbXB0aWVkJyxcbiAgICBvbkVuZDogJ29uZW5kJyxcbiAgICBvbkVuZGVkOiAnb25lbmRlZCcsXG4gICAgb25FcnJvcjogJ29uZXJyb3InLFxuICAgIG9uRm9jdXM6ICdvbmZvY3VzJyxcbiAgICBvbkZvY3VzSW46ICdvbmZvY3VzaW4nLFxuICAgIG9uRm9jdXNPdXQ6ICdvbmZvY3Vzb3V0JyxcbiAgICBvbkhhc2hDaGFuZ2U6ICdvbmhhc2hjaGFuZ2UnLFxuICAgIG9uSW5wdXQ6ICdvbmlucHV0JyxcbiAgICBvbkludmFsaWQ6ICdvbmludmFsaWQnLFxuICAgIG9uS2V5RG93bjogJ29ua2V5ZG93bicsXG4gICAgb25LZXlQcmVzczogJ29ua2V5cHJlc3MnLFxuICAgIG9uS2V5VXA6ICdvbmtleXVwJyxcbiAgICBvbkxvYWQ6ICdvbmxvYWQnLFxuICAgIG9uTG9hZGVkRGF0YTogJ29ubG9hZGVkZGF0YScsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogJ29ubG9hZGVkbWV0YWRhdGEnLFxuICAgIG9uTG9hZFN0YXJ0OiAnb25sb2Fkc3RhcnQnLFxuICAgIG9uTWVzc2FnZTogJ29ubWVzc2FnZScsXG4gICAgb25Nb3VzZURvd246ICdvbm1vdXNlZG93bicsXG4gICAgb25Nb3VzZUVudGVyOiAnb25tb3VzZWVudGVyJyxcbiAgICBvbk1vdXNlTGVhdmU6ICdvbm1vdXNlbGVhdmUnLFxuICAgIG9uTW91c2VNb3ZlOiAnb25tb3VzZW1vdmUnLFxuICAgIG9uTW91c2VPdXQ6ICdvbm1vdXNlb3V0JyxcbiAgICBvbk1vdXNlT3ZlcjogJ29ubW91c2VvdmVyJyxcbiAgICBvbk1vdXNlVXA6ICdvbm1vdXNldXAnLFxuICAgIG9uTW91c2VXaGVlbDogJ29ubW91c2V3aGVlbCcsXG4gICAgb25PZmZsaW5lOiAnb25vZmZsaW5lJyxcbiAgICBvbk9ubGluZTogJ29ub25saW5lJyxcbiAgICBvblBhZ2VIaWRlOiAnb25wYWdlaGlkZScsXG4gICAgb25QYWdlU2hvdzogJ29ucGFnZXNob3cnLFxuICAgIG9uUGFzdGU6ICdvbnBhc3RlJyxcbiAgICBvblBhdXNlOiAnb25wYXVzZScsXG4gICAgb25QbGF5OiAnb25wbGF5JyxcbiAgICBvblBsYXlpbmc6ICdvbnBsYXlpbmcnLFxuICAgIG9uUG9wU3RhdGU6ICdvbnBvcHN0YXRlJyxcbiAgICBvblByb2dyZXNzOiAnb25wcm9ncmVzcycsXG4gICAgb25SYXRlQ2hhbmdlOiAnb25yYXRlY2hhbmdlJyxcbiAgICBvblJlcGVhdDogJ29ucmVwZWF0JyxcbiAgICBvblJlc2V0OiAnb25yZXNldCcsXG4gICAgb25SZXNpemU6ICdvbnJlc2l6ZScsXG4gICAgb25TY3JvbGw6ICdvbnNjcm9sbCcsXG4gICAgb25TZWVrZWQ6ICdvbnNlZWtlZCcsXG4gICAgb25TZWVraW5nOiAnb25zZWVraW5nJyxcbiAgICBvblNlbGVjdDogJ29uc2VsZWN0JyxcbiAgICBvblNob3c6ICdvbnNob3cnLFxuICAgIG9uU3RhbGxlZDogJ29uc3RhbGxlZCcsXG4gICAgb25TdG9yYWdlOiAnb25zdG9yYWdlJyxcbiAgICBvblN1Ym1pdDogJ29uc3VibWl0JyxcbiAgICBvblN1c3BlbmQ6ICdvbnN1c3BlbmQnLFxuICAgIG9uVGltZVVwZGF0ZTogJ29udGltZXVwZGF0ZScsXG4gICAgb25Ub2dnbGU6ICdvbnRvZ2dsZScsXG4gICAgb25VbmxvYWQ6ICdvbnVubG9hZCcsXG4gICAgb25Wb2x1bWVDaGFuZ2U6ICdvbnZvbHVtZWNoYW5nZScsXG4gICAgb25XYWl0aW5nOiAnb253YWl0aW5nJyxcbiAgICBvblpvb206ICdvbnpvb20nLFxuICAgIG92ZXJsaW5lUG9zaXRpb246ICdvdmVybGluZS1wb3NpdGlvbicsXG4gICAgb3ZlcmxpbmVUaGlja25lc3M6ICdvdmVybGluZS10aGlja25lc3MnLFxuICAgIHBhaW50T3JkZXI6ICdwYWludC1vcmRlcicsXG4gICAgcGFub3NlMTogJ3Bhbm9zZS0xJyxcbiAgICBwb2ludGVyRXZlbnRzOiAncG9pbnRlci1ldmVudHMnLFxuICAgIHJlZmVycmVyUG9saWN5OiAncmVmZXJyZXJwb2xpY3knLFxuICAgIHJlbmRlcmluZ0ludGVudDogJ3JlbmRlcmluZy1pbnRlbnQnLFxuICAgIHNoYXBlUmVuZGVyaW5nOiAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgICBzdG9wQ29sb3I6ICdzdG9wLWNvbG9yJyxcbiAgICBzdG9wT3BhY2l0eTogJ3N0b3Atb3BhY2l0eScsXG4gICAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsXG4gICAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJyxcbiAgICBzdHJva2VEYXNoQXJyYXk6ICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICBzdHJva2VEYXNoT2Zmc2V0OiAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAgIHN0cm9rZUxpbmVDYXA6ICdzdHJva2UtbGluZWNhcCcsXG4gICAgc3Ryb2tlTGluZUpvaW46ICdzdHJva2UtbGluZWpvaW4nLFxuICAgIHN0cm9rZU1pdGVyTGltaXQ6ICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICAgc3Ryb2tlT3BhY2l0eTogJ3N0cm9rZS1vcGFjaXR5JyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgdGFiSW5kZXg6ICd0YWJpbmRleCcsXG4gICAgdGV4dEFuY2hvcjogJ3RleHQtYW5jaG9yJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgdGV4dFJlbmRlcmluZzogJ3RleHQtcmVuZGVyaW5nJyxcbiAgICB0eXBlT2Y6ICd0eXBlb2YnLFxuICAgIHVuZGVybGluZVBvc2l0aW9uOiAndW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgICB1bmRlcmxpbmVUaGlja25lc3M6ICd1bmRlcmxpbmUtdGhpY2tuZXNzJyxcbiAgICB1bmljb2RlQmlkaTogJ3VuaWNvZGUtYmlkaScsXG4gICAgdW5pY29kZVJhbmdlOiAndW5pY29kZS1yYW5nZScsXG4gICAgdW5pdHNQZXJFbTogJ3VuaXRzLXBlci1lbScsXG4gICAgdkFscGhhYmV0aWM6ICd2LWFscGhhYmV0aWMnLFxuICAgIHZIYW5naW5nOiAndi1oYW5naW5nJyxcbiAgICB2SWRlb2dyYXBoaWM6ICd2LWlkZW9ncmFwaGljJyxcbiAgICB2TWF0aGVtYXRpY2FsOiAndi1tYXRoZW1hdGljYWwnLFxuICAgIHZlY3RvckVmZmVjdDogJ3ZlY3Rvci1lZmZlY3QnLFxuICAgIHZlcnRBZHZZOiAndmVydC1hZHYteScsXG4gICAgdmVydE9yaWdpblg6ICd2ZXJ0LW9yaWdpbi14JyxcbiAgICB2ZXJ0T3JpZ2luWTogJ3ZlcnQtb3JpZ2luLXknLFxuICAgIHdvcmRTcGFjaW5nOiAnd29yZC1zcGFjaW5nJyxcbiAgICB3cml0aW5nTW9kZTogJ3dyaXRpbmctbW9kZScsXG4gICAgeEhlaWdodDogJ3gtaGVpZ2h0JyxcbiAgICAvLyBUaGVzZSB3ZXJlIGNhbWVsY2FzZWQgaW4gVGlueS4gTm93IGxvd2VyY2FzZWQgaW4gU1ZHIDJcbiAgICBwbGF5YmFja09yZGVyOiAncGxheWJhY2tvcmRlcicsXG4gICAgdGltZWxpbmVCZWdpbjogJ3RpbWVsaW5lYmVnaW4nXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFib3V0OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZW50SGVpZ2h0OiBudW1iZXIsXG4gICAgYWNjdW11bGF0ZTogbnVsbCxcbiAgICBhZGRpdGl2ZTogbnVsbCxcbiAgICBhbGlnbm1lbnRCYXNlbGluZTogbnVsbCxcbiAgICBhbHBoYWJldGljOiBudW1iZXIsXG4gICAgYW1wbGl0dWRlOiBudW1iZXIsXG4gICAgYXJhYmljRm9ybTogbnVsbCxcbiAgICBhc2NlbnQ6IG51bWJlcixcbiAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgIGF0dHJpYnV0ZVR5cGU6IG51bGwsXG4gICAgYXppbXV0aDogbnVtYmVyLFxuICAgIGJhbmR3aWR0aDogbnVsbCxcbiAgICBiYXNlbGluZVNoaWZ0OiBudWxsLFxuICAgIGJhc2VGcmVxdWVuY3k6IG51bGwsXG4gICAgYmFzZVByb2ZpbGU6IG51bGwsXG4gICAgYmJveDogbnVsbCxcbiAgICBiZWdpbjogbnVsbCxcbiAgICBiaWFzOiBudW1iZXIsXG4gICAgYnk6IG51bGwsXG4gICAgY2FsY01vZGU6IG51bGwsXG4gICAgY2FwSGVpZ2h0OiBudW1iZXIsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjbGlwOiBudWxsLFxuICAgIGNsaXBQYXRoOiBudWxsLFxuICAgIGNsaXBQYXRoVW5pdHM6IG51bGwsXG4gICAgY2xpcFJ1bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiBudWxsLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IG51bGwsXG4gICAgY29sb3JQcm9maWxlOiBudWxsLFxuICAgIGNvbG9yUmVuZGVyaW5nOiBudWxsLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudFNjcmlwdFR5cGU6IG51bGwsXG4gICAgY29udGVudFN0eWxlVHlwZTogbnVsbCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBjdXJzb3I6IG51bGwsXG4gICAgY3g6IG51bGwsXG4gICAgY3k6IG51bGwsXG4gICAgZDogbnVsbCxcbiAgICBkYXRhVHlwZTogbnVsbCxcbiAgICBkZWZhdWx0QWN0aW9uOiBudWxsLFxuICAgIGRlc2NlbnQ6IG51bWJlcixcbiAgICBkaWZmdXNlQ29uc3RhbnQ6IG51bWJlcixcbiAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgZGlzcGxheTogbnVsbCxcbiAgICBkdXI6IG51bGwsXG4gICAgZGl2aXNvcjogbnVtYmVyLFxuICAgIGRvbWluYW50QmFzZWxpbmU6IG51bGwsXG4gICAgZG93bmxvYWQ6IGJvb2xlYW4sXG4gICAgZHg6IG51bGwsXG4gICAgZHk6IG51bGwsXG4gICAgZWRnZU1vZGU6IG51bGwsXG4gICAgZWRpdGFibGU6IG51bGwsXG4gICAgZWxldmF0aW9uOiBudW1iZXIsXG4gICAgZW5hYmxlQmFja2dyb3VuZDogbnVsbCxcbiAgICBlbmQ6IG51bGwsXG4gICAgZXZlbnQ6IG51bGwsXG4gICAgZXhwb25lbnQ6IG51bWJlcixcbiAgICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiBudWxsLFxuICAgIGZpbGw6IG51bGwsXG4gICAgZmlsbE9wYWNpdHk6IG51bWJlcixcbiAgICBmaWxsUnVsZTogbnVsbCxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgZmlsdGVyUmVzOiBudWxsLFxuICAgIGZpbHRlclVuaXRzOiBudWxsLFxuICAgIGZsb29kQ29sb3I6IG51bGwsXG4gICAgZmxvb2RPcGFjaXR5OiBudWxsLFxuICAgIGZvY3VzYWJsZTogbnVsbCxcbiAgICBmb2N1c0hpZ2hsaWdodDogbnVsbCxcbiAgICBmb250RmFtaWx5OiBudWxsLFxuICAgIGZvbnRTaXplOiBudWxsLFxuICAgIGZvbnRTaXplQWRqdXN0OiBudWxsLFxuICAgIGZvbnRTdHJldGNoOiBudWxsLFxuICAgIGZvbnRTdHlsZTogbnVsbCxcbiAgICBmb250VmFyaWFudDogbnVsbCxcbiAgICBmb250V2VpZ2h0OiBudWxsLFxuICAgIGZvcm1hdDogbnVsbCxcbiAgICBmcjogbnVsbCxcbiAgICBmcm9tOiBudWxsLFxuICAgIGZ4OiBudWxsLFxuICAgIGZ5OiBudWxsLFxuICAgIGcxOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnMjogY29tbWFTZXBhcmF0ZWQsXG4gICAgZ2x5cGhOYW1lOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogbnVsbCxcbiAgICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6IG51bGwsXG4gICAgZ2x5cGhSZWY6IG51bGwsXG4gICAgZ3JhZGllbnRUcmFuc2Zvcm06IG51bGwsXG4gICAgZ3JhZGllbnRVbml0czogbnVsbCxcbiAgICBoYW5kbGVyOiBudWxsLFxuICAgIGhhbmdpbmc6IG51bWJlcixcbiAgICBoYXRjaENvbnRlbnRVbml0czogbnVsbCxcbiAgICBoYXRjaFVuaXRzOiBudWxsLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGhvcml6QWR2WDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWTogbnVtYmVyLFxuICAgIGlkOiBudWxsLFxuICAgIGlkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgaW1hZ2VSZW5kZXJpbmc6IG51bGwsXG4gICAgaW5pdGlhbFZpc2liaWxpdHk6IG51bGwsXG4gICAgaW46IG51bGwsXG4gICAgaW4yOiBudWxsLFxuICAgIGludGVyY2VwdDogbnVtYmVyLFxuICAgIGs6IG51bWJlcixcbiAgICBrMTogbnVtYmVyLFxuICAgIGsyOiBudW1iZXIsXG4gICAgazM6IG51bWJlcixcbiAgICBrNDogbnVtYmVyLFxuICAgIGtlcm5lbE1hdHJpeDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIGtlcm5lbFVuaXRMZW5ndGg6IG51bGwsXG4gICAga2V5UG9pbnRzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtleVNwbGluZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2V5VGltZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2VybmluZzogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxlbmd0aEFkanVzdDogbnVsbCxcbiAgICBsZXR0ZXJTcGFjaW5nOiBudWxsLFxuICAgIGxpZ2h0aW5nQ29sb3I6IG51bGwsXG4gICAgbGltaXRpbmdDb25lQW5nbGU6IG51bWJlcixcbiAgICBsb2NhbDogbnVsbCxcbiAgICBtYXJrZXJFbmQ6IG51bGwsXG4gICAgbWFya2VyTWlkOiBudWxsLFxuICAgIG1hcmtlclN0YXJ0OiBudWxsLFxuICAgIG1hcmtlckhlaWdodDogbnVsbCxcbiAgICBtYXJrZXJVbml0czogbnVsbCxcbiAgICBtYXJrZXJXaWR0aDogbnVsbCxcbiAgICBtYXNrOiBudWxsLFxuICAgIG1hc2tDb250ZW50VW5pdHM6IG51bGwsXG4gICAgbWFza1VuaXRzOiBudWxsLFxuICAgIG1hdGhlbWF0aWNhbDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWVkaWFDaGFyYWN0ZXJFbmNvZGluZzogbnVsbCxcbiAgICBtZWRpYUNvbnRlbnRFbmNvZGluZ3M6IG51bGwsXG4gICAgbWVkaWFTaXplOiBudW1iZXIsXG4gICAgbWVkaWFUaW1lOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbW9kZTogbnVsbCxcbiAgICBuYW1lOiBudWxsLFxuICAgIG5hdkRvd246IG51bGwsXG4gICAgbmF2RG93bkxlZnQ6IG51bGwsXG4gICAgbmF2RG93blJpZ2h0OiBudWxsLFxuICAgIG5hdkxlZnQ6IG51bGwsXG4gICAgbmF2TmV4dDogbnVsbCxcbiAgICBuYXZQcmV2OiBudWxsLFxuICAgIG5hdlJpZ2h0OiBudWxsLFxuICAgIG5hdlVwOiBudWxsLFxuICAgIG5hdlVwTGVmdDogbnVsbCxcbiAgICBuYXZVcFJpZ2h0OiBudWxsLFxuICAgIG51bU9jdGF2ZXM6IG51bGwsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIG9uQWJvcnQ6IG51bGwsXG4gICAgb25BY3RpdmF0ZTogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVQcmludDogbnVsbCxcbiAgICBvbkJlZ2luOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb2N1c0luOiBudWxsLFxuICAgIG9uRm9jdXNPdXQ6IG51bGwsXG4gICAgb25IYXNoQ2hhbmdlOiBudWxsLFxuICAgIG9uSW5wdXQ6IG51bGwsXG4gICAgb25JbnZhbGlkOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIG9uS2V5VXA6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZFN0YXJ0OiBudWxsLFxuICAgIG9uTWVzc2FnZTogbnVsbCxcbiAgICBvbk1vdXNlRG93bjogbnVsbCxcbiAgICBvbk1vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Nb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uTW91c2VNb3ZlOiBudWxsLFxuICAgIG9uTW91c2VPdXQ6IG51bGwsXG4gICAgb25Nb3VzZU92ZXI6IG51bGwsXG4gICAgb25Nb3VzZVVwOiBudWxsLFxuICAgIG9uTW91c2VXaGVlbDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZXBlYXQ6IG51bGwsXG4gICAgb25SZXNldDogbnVsbCxcbiAgICBvblJlc2l6ZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25ab29tOiBudWxsLFxuICAgIG9wYWNpdHk6IG51bGwsXG4gICAgb3BlcmF0b3I6IG51bGwsXG4gICAgb3JkZXI6IG51bGwsXG4gICAgb3JpZW50OiBudWxsLFxuICAgIG9yaWVudGF0aW9uOiBudWxsLFxuICAgIG9yaWdpbjogbnVsbCxcbiAgICBvdmVyZmxvdzogbnVsbCxcbiAgICBvdmVybGF5OiBudWxsLFxuICAgIG92ZXJsaW5lUG9zaXRpb246IG51bWJlcixcbiAgICBvdmVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHBhaW50T3JkZXI6IG51bGwsXG4gICAgcGFub3NlMTogbnVsbCxcbiAgICBwYXRoOiBudWxsLFxuICAgIHBhdGhMZW5ndGg6IG51bWJlcixcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiBudWxsLFxuICAgIHBhdHRlcm5UcmFuc2Zvcm06IG51bGwsXG4gICAgcGF0dGVyblVuaXRzOiBudWxsLFxuICAgIHBoYXNlOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBpdGNoOiBudWxsLFxuICAgIHBsYXliYWNrT3JkZXI6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogbnVsbCxcbiAgICBwb2ludHM6IG51bGwsXG4gICAgcG9pbnRzQXRYOiBudW1iZXIsXG4gICAgcG9pbnRzQXRZOiBudW1iZXIsXG4gICAgcG9pbnRzQXRaOiBudW1iZXIsXG4gICAgcHJlc2VydmVBbHBoYTogbnVsbCxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBudWxsLFxuICAgIHByaW1pdGl2ZVVuaXRzOiBudWxsLFxuICAgIHByb3BhZ2F0ZTogbnVsbCxcbiAgICBwcm9wZXJ0eTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHI6IG51bGwsXG4gICAgcmFkaXVzOiBudWxsLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlZlg6IG51bGwsXG4gICAgcmVmWTogbnVsbCxcbiAgICByZWw6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXY6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZW5kZXJpbmdJbnRlbnQ6IG51bGwsXG4gICAgcmVwZWF0Q291bnQ6IG51bGwsXG4gICAgcmVwZWF0RHVyOiBudWxsLFxuICAgIHJlcXVpcmVkRXh0ZW5zaW9uczogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRmVhdHVyZXM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZvbnRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGb3JtYXRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVzb3VyY2U6IG51bGwsXG4gICAgcmVzdGFydDogbnVsbCxcbiAgICByZXN1bHQ6IG51bGwsXG4gICAgcm90YXRlOiBudWxsLFxuICAgIHJ4OiBudWxsLFxuICAgIHJ5OiBudWxsLFxuICAgIHNjYWxlOiBudWxsLFxuICAgIHNlZWQ6IG51bGwsXG4gICAgc2hhcGVSZW5kZXJpbmc6IG51bGwsXG4gICAgc2lkZTogbnVsbCxcbiAgICBzbG9wZTogbnVsbCxcbiAgICBzbmFwc2hvdFRpbWU6IG51bGwsXG4gICAgc3BlY3VsYXJDb25zdGFudDogbnVtYmVyLFxuICAgIHNwZWN1bGFyRXhwb25lbnQ6IG51bWJlcixcbiAgICBzcHJlYWRNZXRob2Q6IG51bGwsXG4gICAgc3BhY2luZzogbnVsbCxcbiAgICBzdGFydE9mZnNldDogbnVsbCxcbiAgICBzdGREZXZpYXRpb246IG51bGwsXG4gICAgc3RlbWg6IG51bGwsXG4gICAgc3RlbXY6IG51bGwsXG4gICAgc3RpdGNoVGlsZXM6IG51bGwsXG4gICAgc3RvcENvbG9yOiBudWxsLFxuICAgIHN0b3BPcGFjaXR5OiBudWxsLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogbnVtYmVyLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6IG51bWJlcixcbiAgICBzdHJpbmc6IG51bGwsXG4gICAgc3Ryb2tlOiBudWxsLFxuICAgIHN0cm9rZURhc2hBcnJheTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHN0cm9rZURhc2hPZmZzZXQ6IG51bGwsXG4gICAgc3Ryb2tlTGluZUNhcDogbnVsbCxcbiAgICBzdHJva2VMaW5lSm9pbjogbnVsbCxcbiAgICBzdHJva2VNaXRlckxpbWl0OiBudW1iZXIsXG4gICAgc3Ryb2tlT3BhY2l0eTogbnVtYmVyLFxuICAgIHN0cm9rZVdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHN1cmZhY2VTY2FsZTogbnVtYmVyLFxuICAgIHN5bmNCZWhhdmlvcjogbnVsbCxcbiAgICBzeW5jQmVoYXZpb3JEZWZhdWx0OiBudWxsLFxuICAgIHN5bmNNYXN0ZXI6IG51bGwsXG4gICAgc3luY1RvbGVyYW5jZTogbnVsbCxcbiAgICBzeW5jVG9sZXJhbmNlRGVmYXVsdDogbnVsbCxcbiAgICBzeXN0ZW1MYW5ndWFnZTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFibGVWYWx1ZXM6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRhcmdldFg6IG51bWJlcixcbiAgICB0YXJnZXRZOiBudW1iZXIsXG4gICAgdGV4dEFuY2hvcjogbnVsbCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogbnVsbCxcbiAgICB0ZXh0UmVuZGVyaW5nOiBudWxsLFxuICAgIHRleHRMZW5ndGg6IG51bGwsXG4gICAgdGltZWxpbmVCZWdpbjogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0cmFuc2Zvcm1CZWhhdmlvcjogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVPZjogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRvOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICB1MTogbnVsbCxcbiAgICB1MjogbnVsbCxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogbnVtYmVyLFxuICAgIHVuZGVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHVuaWNvZGU6IG51bGwsXG4gICAgdW5pY29kZUJpZGk6IG51bGwsXG4gICAgdW5pY29kZVJhbmdlOiBudWxsLFxuICAgIHVuaXRzUGVyRW06IG51bWJlcixcbiAgICB2YWx1ZXM6IG51bGwsXG4gICAgdkFscGhhYmV0aWM6IG51bWJlcixcbiAgICB2TWF0aGVtYXRpY2FsOiBudW1iZXIsXG4gICAgdmVjdG9yRWZmZWN0OiBudWxsLFxuICAgIHZIYW5naW5nOiBudW1iZXIsXG4gICAgdklkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgdmVyc2lvbjogbnVsbCxcbiAgICB2ZXJ0QWR2WTogbnVtYmVyLFxuICAgIHZlcnRPcmlnaW5YOiBudW1iZXIsXG4gICAgdmVydE9yaWdpblk6IG51bWJlcixcbiAgICB2aWV3Qm94OiBudWxsLFxuICAgIHZpZXdUYXJnZXQ6IG51bGwsXG4gICAgdmlzaWJpbGl0eTogbnVsbCxcbiAgICB3aWR0aDogbnVsbCxcbiAgICB3aWR0aHM6IG51bGwsXG4gICAgd29yZFNwYWNpbmc6IG51bGwsXG4gICAgd3JpdGluZ01vZGU6IG51bGwsXG4gICAgeDogbnVsbCxcbiAgICB4MTogbnVsbCxcbiAgICB4MjogbnVsbCxcbiAgICB4Q2hhbm5lbFNlbGVjdG9yOiBudWxsLFxuICAgIHhIZWlnaHQ6IG51bWJlcixcbiAgICB5OiBudWxsLFxuICAgIHkxOiBudWxsLFxuICAgIHkyOiBudWxsLFxuICAgIHlDaGFubmVsU2VsZWN0b3I6IG51bGwsXG4gICAgejogbnVsbCxcbiAgICB6b29tQW5kUGFuOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSkge1xuICByZXR1cm4gYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMgPyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gOiBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsaXplJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2RlZmluZWQtaW5mbycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbmZ1bmN0aW9uIGNyZWF0ZShkZWZpbml0aW9uKSB7XG4gIHZhciBzcGFjZSA9IGRlZmluaXRpb24uc3BhY2VcbiAgdmFyIG11c3RVc2VQcm9wZXJ0eSA9IGRlZmluaXRpb24ubXVzdFVzZVByb3BlcnR5IHx8IFtdXG4gIHZhciBhdHRyaWJ1dGVzID0gZGVmaW5pdGlvbi5hdHRyaWJ1dGVzIHx8IHt9XG4gIHZhciBwcm9wcyA9IGRlZmluaXRpb24ucHJvcGVydGllc1xuICB2YXIgdHJhbnNmb3JtID0gZGVmaW5pdGlvbi50cmFuc2Zvcm1cbiAgdmFyIHByb3BlcnR5ID0ge31cbiAgdmFyIG5vcm1hbCA9IHt9XG4gIHZhciBwcm9wXG4gIHZhciBpbmZvXG5cbiAgZm9yIChwcm9wIGluIHByb3BzKSB7XG4gICAgaW5mbyA9IG5ldyBEZWZpbmVkSW5mbyhcbiAgICAgIHByb3AsXG4gICAgICB0cmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcCksXG4gICAgICBwcm9wc1twcm9wXSxcbiAgICAgIHNwYWNlXG4gICAgKVxuXG4gICAgaWYgKG11c3RVc2VQcm9wZXJ0eS5pbmRleE9mKHByb3ApICE9PSAtMSkge1xuICAgICAgaW5mby5tdXN0VXNlUHJvcGVydHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcHJvcGVydHlbcHJvcF0gPSBpbmZvXG5cbiAgICBub3JtYWxbbm9ybWFsaXplKHByb3ApXSA9IHByb3BcbiAgICBub3JtYWxbbm9ybWFsaXplKGluZm8uYXR0cmlidXRlKV0gPSBwcm9wXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vaW5mbycpXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbmVkSW5mb1xuXG5EZWZpbmVkSW5mby5wcm90b3R5cGUgPSBuZXcgSW5mbygpXG5EZWZpbmVkSW5mby5wcm90b3R5cGUuZGVmaW5lZCA9IHRydWVcblxudmFyIGNoZWNrcyA9IFtcbiAgJ2Jvb2xlYW4nLFxuICAnYm9vbGVhbmlzaCcsXG4gICdvdmVybG9hZGVkQm9vbGVhbicsXG4gICdudW1iZXInLFxuICAnY29tbWFTZXBhcmF0ZWQnLFxuICAnc3BhY2VTZXBhcmF0ZWQnLFxuICAnY29tbWFPclNwYWNlU2VwYXJhdGVkJ1xuXVxudmFyIGNoZWNrc0xlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuZnVuY3Rpb24gRGVmaW5lZEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSwgbWFzaywgc3BhY2UpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoZWNrXG5cbiAgbWFyayh0aGlzLCAnc3BhY2UnLCBzcGFjZSlcblxuICBJbmZvLmNhbGwodGhpcywgcHJvcGVydHksIGF0dHJpYnV0ZSlcblxuICB3aGlsZSAoKytpbmRleCA8IGNoZWNrc0xlbmd0aCkge1xuICAgIGNoZWNrID0gY2hlY2tzW2luZGV4XVxuICAgIG1hcmsodGhpcywgY2hlY2ssIChtYXNrICYgdHlwZXNbY2hlY2tdKSA9PT0gdHlwZXNbY2hlY2tdKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmsodmFsdWVzLCBrZXksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHZhbHVlc1trZXldID0gdmFsdWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb1xuXG52YXIgcHJvdG8gPSBJbmZvLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLmF0dHJpYnV0ZSA9IG51bGxcbnByb3RvLnByb3BlcnR5ID0gbnVsbFxucHJvdG8uYm9vbGVhbiA9IGZhbHNlXG5wcm90by5ib29sZWFuaXNoID0gZmFsc2VcbnByb3RvLm92ZXJsb2FkZWRCb29sZWFuID0gZmFsc2VcbnByb3RvLm51bWJlciA9IGZhbHNlXG5wcm90by5jb21tYVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5zcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8ubXVzdFVzZVByb3BlcnR5ID0gZmFsc2VcbnByb3RvLmRlZmluZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVxuXG5mdW5jdGlvbiBtZXJnZShkZWZpbml0aW9ucykge1xuICB2YXIgbGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoXG4gIHZhciBwcm9wZXJ0eSA9IFtdXG4gIHZhciBub3JtYWwgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW5mb1xuICB2YXIgc3BhY2VcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGluZm8gPSBkZWZpbml0aW9uc1tpbmRleF1cbiAgICBwcm9wZXJ0eS5wdXNoKGluZm8ucHJvcGVydHkpXG4gICAgbm9ybWFsLnB1c2goaW5mby5ub3JtYWwpXG4gICAgc3BhY2UgPSBpbmZvLnNwYWNlXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShcbiAgICB4dGVuZC5hcHBseShudWxsLCBwcm9wZXJ0eSksXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgbm9ybWFsKSxcbiAgICBzcGFjZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBTY2hlbWFcblxudmFyIHByb3RvID0gU2NoZW1hLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLm5vcm1hbCA9IHt9XG5wcm90by5wcm9wZXJ0eSA9IHt9XG5cbmZ1bmN0aW9uIFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5ub3JtYWwgPSBub3JtYWxcblxuICBpZiAoc3BhY2UpIHtcbiAgICB0aGlzLnNwYWNlID0gc3BhY2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwb3dlcnMgPSAwXG5cbmV4cG9ydHMuYm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLmJvb2xlYW5pc2ggPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5vdmVybG9hZGVkQm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLm51bWJlciA9IGluY3JlbWVudCgpXG5leHBvcnRzLnNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCArK3Bvd2Vycylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bGluaycsXG4gIHRyYW5zZm9ybTogeGxpbmtUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4TGlua0FjdHVhdGU6IG51bGwsXG4gICAgeExpbmtBcmNSb2xlOiBudWxsLFxuICAgIHhMaW5rSHJlZjogbnVsbCxcbiAgICB4TGlua1JvbGU6IG51bGwsXG4gICAgeExpbmtTaG93OiBudWxsLFxuICAgIHhMaW5rVGl0bGU6IG51bGwsXG4gICAgeExpbmtUeXBlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhsaW5rVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bGluazonICsgcHJvcC5zbGljZSg1KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sJyxcbiAgdHJhbnNmb3JtOiB4bWxUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxMYW5nOiBudWxsLFxuICAgIHhtbEJhc2U6IG51bGwsXG4gICAgeG1sU3BhY2U6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geG1sVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bWw6JyArIHByb3Auc2xpY2UoMykudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sbnMnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgeG1sbnN4bGluazogJ3htbG5zOnhsaW5rJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbG5zOiBudWxsLFxuICAgIHhtbG5zWExpbms6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCcuL2xpYi91dGlsL21lcmdlJylcbnZhciB4bGluayA9IHJlcXVpcmUoJy4vbGliL3hsaW5rJylcbnZhciB4bWwgPSByZXF1aXJlKCcuL2xpYi94bWwnKVxudmFyIHhtbG5zID0gcmVxdWlyZSgnLi9saWIveG1sbnMnKVxudmFyIGFyaWEgPSByZXF1aXJlKCcuL2xpYi9hcmlhJylcbnZhciBzdmcgPSByZXF1aXJlKCcuL2xpYi9zdmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgc3ZnXSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdG9IVE1MID0gcmVxdWlyZSgnaGFzdC11dGlsLXRvLWh0bWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoY29uZmlnKSB7XG4gIHZhciBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgdGhpcy5kYXRhKCdzZXR0aW5ncycpKVxuXG4gIHRoaXMuQ29tcGlsZXIgPSBjb21waWxlclxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVyKHRyZWUpIHtcbiAgICByZXR1cm4gdG9IVE1MKHRyZWUsIHNldHRpbmdzKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgZW1wdHkgPSAnJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgd2hpdGVTcGFjZSA9IC9bIFxcdFxcblxcclxcZl0rL2dcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KS50cmltKClcbiAgcmV0dXJuIGlucHV0ID09PSBlbXB0eSA/IFtdIDogaW5wdXQuc3BsaXQod2hpdGVTcGFjZSlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLmpvaW4oc3BhY2UpLnRyaW0oKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1odG1sNCcpXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRhbmdlcm91cyA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzLmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuZW5jb2RlLmVzY2FwZSA9IGVzY2FwZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gQ2hhcmFjdGVyc1xudmFyIGVxdWFsc1RvID0gNjFcblxuLy8gTGlzdCBvZiBlbmZvcmNlZCBlc2NhcGVzLlxudmFyIGVzY2FwZXMgPSBbJ1wiJywgXCInXCIsICc8JywgJz4nLCAnJicsICdgJ11cblxuLy8gTWFwIG9mIGNoYXJhY3RlcnMgdG8gbmFtZXMuXG52YXIgY2hhcmFjdGVycyA9IGNvbnN0cnVjdCgpXG5cbi8vIERlZmF1bHQgZXNjYXBlcy5cbnZhciBkZWZhdWx0RXNjYXBlcyA9IHRvRXhwcmVzc2lvbihlc2NhcGVzKVxuXG4vLyBTdXJyb2dhdGUgcGFpcnMuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2dcblxuLy8gTm9uLUFTQ0lJIGNoYXJhY3RlcnMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleCwgdW5pY29ybi9uby1oZXgtZXNjYXBlXG52YXIgYm1wID0gL1tcXHgwMS1cXHRcXHgwQlxcZlxceDBFLVxceDFGXFx4N0ZcXHg4MVxceDhEXFx4OEZcXHg5MFxceDlEXFx4QTAtXFx1RkZGRl0vZ1xuXG4vLyBFbmNvZGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc3Vic2V0ID0gc2V0dGluZ3Muc3Vic2V0XG4gIHZhciBzZXQgPSBzdWJzZXQgPyB0b0V4cHJlc3Npb24oc3Vic2V0KSA6IGRlZmF1bHRFc2NhcGVzXG4gIHZhciBlc2NhcGVPbmx5ID0gc2V0dGluZ3MuZXNjYXBlT25seVxuICB2YXIgb21pdCA9IHNldHRpbmdzLm9taXRPcHRpb25hbFNlbWljb2xvbnNcblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2V0LCByZXBsYWNlKVxuXG4gIGlmIChzdWJzZXQgfHwgZXNjYXBlT25seSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3Vycm9nYXRlUGFpciwgcmVwbGFjZVN1cnJvZ2F0ZVBhaXIpXG4gICAgLnJlcGxhY2UoYm1wLCByZXBsYWNlKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdXJyb2dhdGVQYWlyKHBhaXIsIHBvcywgc2xpY2UpIHtcbiAgICByZXR1cm4gdG9IZXhSZWZlcmVuY2UoXG4gICAgICAocGFpci5jaGFyQ29kZUF0KDApIC0gMHhkODAwKSAqIDB4NDAwICtcbiAgICAgICAgcGFpci5jaGFyQ29kZUF0KDEpIC1cbiAgICAgICAgMHhkYzAwICtcbiAgICAgICAgMHgxMDAwMCxcbiAgICAgIHNsaWNlLmNoYXJDb2RlQXQocG9zICsgMiksXG4gICAgICBvbWl0XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShjaGFyLCBwb3MsIHNsaWNlKSB7XG4gICAgcmV0dXJuIG9uZShjaGFyLCBzbGljZS5jaGFyQ29kZUF0KHBvcyArIDEpLCBzZXR0aW5ncylcbiAgfVxufVxuXG4vLyBTaG9ydGN1dCB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIEhUTUwuXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgcmV0dXJuIGVuY29kZSh2YWx1ZSwge2VzY2FwZU9ubHk6IHRydWUsIHVzZU5hbWVkUmVmZXJlbmNlczogdHJ1ZX0pXG59XG5cbi8vIEVuY29kZSBgY2hhcmAgYWNjb3JkaW5nIHRvIGBvcHRpb25zYC5cbmZ1bmN0aW9uIG9uZShjaGFyLCBuZXh0LCBvcHRpb25zKSB7XG4gIHZhciBzaG9ydGVzdCA9IG9wdGlvbnMudXNlU2hvcnRlc3RSZWZlcmVuY2VzXG4gIHZhciBvbWl0ID0gb3B0aW9ucy5vbWl0T3B0aW9uYWxTZW1pY29sb25zXG4gIHZhciBuYW1lZFxuICB2YXIgY29kZVxuICB2YXIgbnVtZXJpY1xuICB2YXIgZGVjaW1hbFxuXG4gIGlmICgoc2hvcnRlc3QgfHwgb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMpICYmIG93bi5jYWxsKGNoYXJhY3RlcnMsIGNoYXIpKSB7XG4gICAgbmFtZWQgPSB0b05hbWVkKGNoYXJhY3RlcnNbY2hhcl0sIG5leHQsIG9taXQsIG9wdGlvbnMuYXR0cmlidXRlKVxuICB9XG5cbiAgaWYgKHNob3J0ZXN0IHx8ICFuYW1lZCkge1xuICAgIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgICBudW1lcmljID0gdG9IZXhSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdClcblxuICAgIC8vIFVzZSB0aGUgc2hvcnRlc3QgbnVtZXJpYyByZWZlcmVuY2Ugd2hlbiByZXF1ZXN0ZWQuXG4gICAgLy8gQSBzaW1wbGUgYWxnb3JpdGhtIHdvdWxkIHVzZSBkZWNpbWFsIGZvciBhbGwgY29kZSBwb2ludHMgdW5kZXIgMTAwLCBhc1xuICAgIC8vIHRob3NlIGFyZSBzaG9ydGVyIHRoYW4gaGV4YWRlY2ltYWw6XG4gICAgLy9cbiAgICAvLyAqIGAmIzk5O2AgdnMgYCYjeDYzO2AgKGRlY2ltYWwgc2hvcnRlcilcbiAgICAvLyAqIGAmIzEwMDtgIHZzIGAmI3g2NDtgIChlcXVhbClcbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIGJlY2F1c2Ugd2UgdGFrZSBgbmV4dGAgaW50byBjb25zaWRlcmF0aW9uIHdoZW4gYG9taXRgIGlzIHVzZWQsXG4gICAgLy8gQW5kIGl0IHdvdWxkIGJlIHBvc3NpYmxlIHRoYXQgZGVjaW1hbHMgYXJlIHNob3J0ZXIgb24gYmlnZ2VyIHZhbHVlcyBhc1xuICAgIC8vIHdlbGwgaWYgYG5leHRgIGlzIGhleGFkZWNpbWFsIGJ1dCBub3QgZGVjaW1hbCwgd2UgaW5zdGVhZCBjb21wYXJlIGJvdGguXG4gICAgaWYgKHNob3J0ZXN0KSB7XG4gICAgICBkZWNpbWFsID0gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpXG5cbiAgICAgIGlmIChkZWNpbWFsLmxlbmd0aCA8IG51bWVyaWMubGVuZ3RoKSB7XG4gICAgICAgIG51bWVyaWMgPSBkZWNpbWFsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5hbWVkICYmICghc2hvcnRlc3QgfHwgbmFtZWQubGVuZ3RoIDwgbnVtZXJpYy5sZW5ndGgpKSB7XG4gICAgcmV0dXJuIG5hbWVkXG4gIH1cblxuICByZXR1cm4gbnVtZXJpY1xufVxuXG4vLyBUcmFuc2Zvcm0gYGNvZGVgIGludG8gYW4gZW50aXR5LlxuZnVuY3Rpb24gdG9OYW1lZChuYW1lLCBuZXh0LCBvbWl0LCBhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gJyYnICsgbmFtZVxuXG4gIGlmIChcbiAgICBvbWl0ICYmXG4gICAgb3duLmNhbGwobGVnYWN5LCBuYW1lKSAmJlxuICAgIGRhbmdlcm91cy5pbmRleE9mKG5hbWUpID09PSAtMSAmJlxuICAgICghYXR0cmlidXRlIHx8IChuZXh0ICYmIG5leHQgIT09IGVxdWFsc1RvICYmICFhbHBoYW51bWVyaWNhbChuZXh0KSkpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGhleGFkZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2UuXG5mdW5jdGlvbiB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmI3gnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFoZXhhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGEgZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpIHtcbiAgdmFyIHZhbHVlID0gJyYjJyArIFN0cmluZyhjb2RlKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFkZWNpbWFsKG5leHQpID8gdmFsdWUgOiB2YWx1ZSArICc7J1xufVxuXG4vLyBDcmVhdGUgYW4gZXhwcmVzc2lvbiBmb3IgYGNoYXJhY3RlcnNgLlxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGNoYXJhY3RlcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ1snICsgY2hhcmFjdGVycy5qb2luKCcnKSArICddJywgJ2cnKVxufVxuXG4vLyBDb25zdHJ1Y3QgdGhlIG1hcC5cbmZ1bmN0aW9uIGNvbnN0cnVjdCgpIHtcbiAgdmFyIGNoYXJzID0ge31cbiAgdmFyIG5hbWVcblxuICBmb3IgKG5hbWUgaW4gZW50aXRpZXMpIHtcbiAgICBjaGFyc1tlbnRpdGllc1tuYW1lXV0gPSBuYW1lXG4gIH1cblxuICByZXR1cm4gY2hhcnNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9