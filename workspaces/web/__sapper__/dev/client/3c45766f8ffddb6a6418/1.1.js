(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
  var val = ['<!' + doc]

  if (name) {
    val.push(sep, name)

    if (pub !== null && pub !== undefined) {
      val.push(' public', sep, quote(ctx, pub))
    } else if (sys !== null && sys !== undefined) {
      val.push(' system')
    }

    if (sys !== null && sys !== undefined) {
      val.push(sep, quote(ctx, sys))
    }
  }

  return val.join('') + '>'
}

function quote(ctx, value) {
  var primary = ctx.quote
  var secondary = ctx.alternative
  var val = String(value)
  var quote =
    ccount(val, primary) > ccount(val, secondary) ? secondary : primary

  return (
    quote +
    // Prevent breaking out of doctype.
    entities(val, xtend(ctx.entities, {subset: ['<', '&', quote]})) +
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
  var prev = before(parent, index)
  var head = first(node, true)

  // Previous colgroup was already omitted.
  if (element(prev, 'colgroup') && closing(prev, place(parent, prev), parent)) {
    return false
  }

  return head && element(head, 'col')
}

// Whether to omit `<tbody>`.
function tbody(node, index, parent) {
  var prev = before(parent, index)
  var head = first(node)

  // Previous table section was already omitted.
  if (
    element(prev, tableContainers) &&
    closing(prev, place(parent, prev), parent)
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


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var toHTML = __webpack_require__(/*! hast-util-to-html */ "../../node_modules/hast-util-to-html/index.js")

module.exports = stringify

function stringify(config) {
  var settings = xtend(config, this.data('settings'))

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvYWxsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2RvY3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9lbGVtZW50LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9jbG9zaW5nLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL29wZW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi91dGlsL2ZpcnN0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL3V0aWwvc2libGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi91dGlsL3doaXRlLXNwYWNlLXN0YXJ0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb25lLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvcmF3LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9hcmlhLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY3JlYXRlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9kZWZpbmVkLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2luZm8uanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL21lcmdlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL3R5cGVzLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveGxpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWxucy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1zdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3NwYWNlLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNZO0FBQ1osaUJBQWlCLG1CQUFPLENBQUMsZ0VBQU87Ozs7Ozs7Ozs7Ozs7QUNEcEI7O0FBRVosVUFBVSxtQkFBTyxDQUFDLDhEQUFPOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQywwRUFBb0I7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxvQkFBb0I7QUFDdEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxvREFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsa0RBQVE7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLDBFQUFvQjs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsVUFBVSxtQkFBTyxDQUFDLGdGQUEwQjtBQUM1QyxXQUFXLG1CQUFPLENBQUMsa0ZBQTJCO0FBQzlDLGFBQWEsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDN0MsYUFBYSxtQkFBTyxDQUFDLGtGQUF3QjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsMEVBQW9CO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyxrREFBUTtBQUM3QixVQUFVLG1CQUFPLENBQUMsOERBQU87QUFDekIsZ0JBQWdCLG1CQUFPLENBQUMsMEVBQWE7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxlQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLGdDQUFnQzs7QUFFOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RQWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsa0ZBQTJCO0FBQzlDLFVBQVUsbUJBQU8sQ0FBQyxnRkFBMEI7QUFDNUMsWUFBWSxtQkFBTyxDQUFDLDRFQUFvQjtBQUN4QyxlQUFlLG1CQUFPLENBQUMsOEVBQVk7QUFDbkMsVUFBVSxtQkFBTyxDQUFDLDhEQUFPOztBQUV6Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZFWTs7QUFFWixjQUFjLG1CQUFPLENBQUMsMEVBQXVCO0FBQzdDLGNBQWMsbUJBQU8sQ0FBQyw4RUFBc0I7QUFDNUMsc0JBQXNCLG1CQUFPLENBQUMsNkdBQTBCO0FBQ3hELFlBQVksbUJBQU8sQ0FBQywyRkFBaUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLGlGQUFZOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyTFk7QUFDWixrQkFBa0IsbUJBQU8sQ0FBQywrRUFBVztBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQywrRUFBVzs7Ozs7Ozs7Ozs7OztBQ0Z6Qjs7QUFFWjs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCWTs7QUFFWixjQUFjLG1CQUFPLENBQUMsMEVBQXVCO0FBQzdDLGNBQWMsbUJBQU8sQ0FBQyw4RUFBc0I7QUFDNUMsYUFBYSxtQkFBTyxDQUFDLDJGQUFpQjtBQUN0QyxZQUFZLG1CQUFPLENBQUMscUZBQWM7QUFDbEMsWUFBWSxtQkFBTyxDQUFDLHFGQUFjO0FBQ2xDLHNCQUFzQixtQkFBTyxDQUFDLDZHQUEwQjtBQUN4RCxjQUFjLG1CQUFPLENBQUMsK0VBQVc7QUFDakMsZUFBZSxtQkFBTyxDQUFDLGlGQUFZOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakdZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxzRkFBWTs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLDhFQUFzQjs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsOEVBQXNCOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pZOztBQUVaOztBQUVBLFlBQVk7O0FBRVo7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsOERBQU87QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsZ0VBQVE7QUFDaEMsbUJBQW1CLG1CQUFPLENBQUMsc0VBQVc7QUFDdEMsbUJBQW1CLG1CQUFPLENBQUMsc0VBQVc7QUFDdEMsbUJBQW1CLG1CQUFPLENBQUMsc0VBQVc7QUFDdEMsZUFBZSxtQkFBTyxDQUFDLDhEQUFPOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxvREFBTztBQUMzQixlQUFlLG1CQUFPLENBQUMsMEVBQW9COztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsbUJBQW1CO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQlk7O0FBRVosZ0JBQWdCLG1CQUFPLENBQUMseUVBQWE7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUdBQXlCO0FBQ25ELFdBQVcsbUJBQU8sQ0FBQyxpRkFBaUI7O0FBRXBDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsbUZBQWtCO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyx5RUFBYTtBQUNqQyxVQUFVLG1CQUFPLENBQUMscUVBQVc7QUFDN0IsWUFBWSxtQkFBTyxDQUFDLHlFQUFhO0FBQ2pDLFdBQVcsbUJBQU8sQ0FBQyx1RUFBWTtBQUMvQixXQUFXLG1CQUFPLENBQUMsdUVBQVk7O0FBRS9COzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLCtFQUFjO0FBQ2xDLGFBQWEsbUJBQU8sQ0FBQyxpRkFBZTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsK0VBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLGlGQUFlO0FBQ3BDLCtCQUErQixtQkFBTyxDQUFDLHlIQUFtQzs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbFRXOztBQUVaLFlBQVksbUJBQU8sQ0FBQywrRUFBYztBQUNsQyxhQUFhLG1CQUFPLENBQUMsaUZBQWU7QUFDcEMsNkJBQTZCLG1CQUFPLENBQUMscUhBQWlDOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QU8sQ0FBQyxvREFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsd0VBQW1COztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZlk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6IjNjNDU3NjZmOGZmZGRiNmE2NDE4LzEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBjb21tYSA9ICcsJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZW1wdHkgPSAnJ1xuXG4vLyBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSlcbiAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSlcbiAgdmFyIGxhc3RJbmRleCA9IDBcbiAgdmFyIGVuZCA9IGZhbHNlXG4gIHZhciB2YWxcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFsID0gaW5wdXQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodmFsIHx8ICFlbmQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbClcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEsIGxhc3RJbmRleClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuLy8gQ29tcGlsZSBhbiBhcnJheSB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuLy8gYG9wdGlvbnMucGFkTGVmdGAgKGRlZmF1bHQ6IGB0cnVlYCkgcGFkcyBhIHNwYWNlIGxlZnQgb2YgZWFjaCB0b2tlbiwgYW5kXG4vLyBgb3B0aW9ucy5wYWRSaWdodGAgKGRlZmF1bHQ6IGBmYWxzZWApIHBhZHMgYSBzcGFjZSB0byB0aGUgcmlnaHQgb2YgZWFjaCB0b2tlbi5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbGVmdCA9IHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gZW1wdHkgOiBzcGFjZVxuICB2YXIgcmlnaHQgPSBzZXR0aW5ncy5wYWRSaWdodCA/IHNwYWNlIDogZW1wdHlcblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgaWYgKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IGVtcHR5KSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChlbXB0eSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihyaWdodCArIGNvbW1hICsgbGVmdCkudHJpbSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpc0VsZW1lbnRcblxuLy8gQ2hlY2sgaWYgaWYgYG5vZGVgIGlzIGFuIGBlbGVtZW50YCBhbmQsIGlmIGB0YWdOYW1lc2AgaXMgZ2l2ZW4sIGBub2RlYFxuLy8gbWF0Y2hlcyB0aGVtIGB0YWdOYW1lc2AuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSwgdGFnTmFtZXMpIHtcbiAgdmFyIG5hbWVcblxuICBpZiAoXG4gICAgIShcbiAgICAgIHRhZ05hbWVzID09PSBudWxsIHx8XG4gICAgICB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0eXBlb2YgdGFnTmFtZXMgPT09ICdzdHJpbmcnIHx8XG4gICAgICAodHlwZW9mIHRhZ05hbWVzID09PSAnb2JqZWN0JyAmJiB0YWdOYW1lcy5sZW5ndGggIT09IDApXG4gICAgKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnRXhwZWN0ZWQgYHN0cmluZ2Agb3IgYEFycmF5LjxzdHJpbmc+YCBmb3IgYHRhZ05hbWVzYCwgbm90IGAnICtcbiAgICAgICAgdGFnTmFtZXMgK1xuICAgICAgICAnYCdcbiAgICApXG4gIH1cblxuICBpZiAoXG4gICAgIW5vZGUgfHxcbiAgICB0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHxcbiAgICBub2RlLnR5cGUgIT09ICdlbGVtZW50JyB8fFxuICAgIHR5cGVvZiBub2RlLnRhZ05hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHRhZ05hbWVzID09PSBudWxsIHx8IHRhZ05hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmFtZSA9IG5vZGUudGFnTmFtZVxuXG4gIGlmICh0eXBlb2YgdGFnTmFtZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09IHRhZ05hbWVzXG4gIH1cblxuICByZXR1cm4gdGFnTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTFcbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCdcblxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbGxcblxuLy8gU2VyaWFsaXplIGFsbCBjaGlsZHJlbiBvZiBgcGFyZW50YC5cbmZ1bmN0aW9uIGFsbChjdHgsIHBhcmVudCkge1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdHMgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBvbmUoY3R4LCBjaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplQ29tbWVudFxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNjb21tZW50cz5cbnZhciBicmVha291dCA9IC9ePnxeLT58PCEtLXwtLT58LS0hPnw8IS0kL2dcbnZhciBzdWJzZXQgPSBbJzwnLCAnPiddXG52YXIgYm9ndXNTdWJzZXQgPSBbJz4nXVxuXG5mdW5jdGlvbiBzZXJpYWxpemVDb21tZW50KGN0eCwgbm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlXG5cbiAgaWYgKGN0eC5ib2d1c0NvbW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICc8PycgKyBlbnRpdGllcyh2YWx1ZSwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBib2d1c1N1YnNldH0pKSArICc+J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiAnPCEtLScgKyB2YWx1ZS5yZXBsYWNlKGJyZWFrb3V0LCBlbmNvZGUpICsgJy0tPidcblxuICBmdW5jdGlvbiBlbmNvZGUoJDApIHtcbiAgICByZXR1cm4gZW50aXRpZXMoJDAsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogc3Vic2V0fSkpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIG5pbCA9ICdcXDAnXG52YXIgYW1wZXJzYW5kID0gJyYnXG52YXIgc3BhY2UgPSAnICdcbnZhciB0YWIgPSAnXFx0J1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBlcXVhbHNUbyA9ICc9J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBzbGFzaCA9ICcvJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBjYXJyaWFnZVJldHVybiA9ICdcXHInXG52YXIgZm9ybUZlZWQgPSAnXFxmJ1xuXG52YXIgd2hpdGVzcGFjZSA9IFtzcGFjZSwgdGFiLCBsaW5lRmVlZCwgY2FycmlhZ2VSZXR1cm4sIGZvcm1GZWVkXVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNhdHRyaWJ1dGUtbmFtZS1zdGF0ZT4uXG52YXIgbmFtZSA9IHdoaXRlc3BhY2UuY29uY2F0KGFtcGVyc2FuZCwgc2xhc2gsIGdyZWF0ZXJUaGFuLCBlcXVhbHNUbylcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLXZhbHVlLSh1bnF1b3RlZCktc3RhdGU+LlxudmFyIHVucXVvdGVkID0gd2hpdGVzcGFjZS5jb25jYXQoYW1wZXJzYW5kLCBncmVhdGVyVGhhbilcbnZhciB1bnF1b3RlZFNhZmUgPSB1bnF1b3RlZC5jb25jYXQoXG4gIG5pbCxcbiAgcXVvdGF0aW9uTWFyayxcbiAgYXBvc3Ryb3BoZSxcbiAgbGVzc1RoYW4sXG4gIGVxdWFsc1RvLFxuICBncmF2ZUFjY2VudFxuKVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNhdHRyaWJ1dGUtdmFsdWUtKHNpbmdsZS1xdW90ZWQpLXN0YXRlPi5cbnZhciBzaW5nbGVRdW90ZWQgPSBbYW1wZXJzYW5kLCBhcG9zdHJvcGhlXVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNhdHRyaWJ1dGUtdmFsdWUtKGRvdWJsZS1xdW90ZWQpLXN0YXRlPi5cbnZhciBkb3VibGVRdW90ZWQgPSBbYW1wZXJzYW5kLCBxdW90YXRpb25NYXJrXVxuXG4vLyBNYXBzIG9mIHN1YnNldHMuXG4vLyBFYWNoIHZhbHVlIGlzIGEgbWF0cml4IG9mIHR1cGxlcy5cbi8vIFRoZSBmaXJzdCB2YWx1ZSBjYXVzZXMgcGFyc2UgZXJyb3JzLCB0aGUgc2Vjb25kIGlzIHZhbGlkLlxuLy8gT2YgYm90aCB2YWx1ZXMsIHRoZSBmaXJzdCB2YWx1ZSBpcyB1bnNhZmUsIGFuZCB0aGUgc2Vjb25kIGlzIHNhZmUuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogW1xuICAgIFtuYW1lLCBuYW1lLmNvbmNhdChxdW90YXRpb25NYXJrLCBhcG9zdHJvcGhlLCBncmF2ZUFjY2VudCldLFxuICAgIFtcbiAgICAgIG5hbWUuY29uY2F0KG5pbCwgcXVvdGF0aW9uTWFyaywgYXBvc3Ryb3BoZSwgbGVzc1RoYW4pLFxuICAgICAgbmFtZS5jb25jYXQobmlsLCBxdW90YXRpb25NYXJrLCBhcG9zdHJvcGhlLCBsZXNzVGhhbiwgZ3JhdmVBY2NlbnQpXG4gICAgXVxuICBdLFxuICB1bnF1b3RlZDogW1xuICAgIFt1bnF1b3RlZCwgdW5xdW90ZWRTYWZlXSxcbiAgICBbdW5xdW90ZWRTYWZlLCB1bnF1b3RlZFNhZmVdXG4gIF0sXG4gIHNpbmdsZTogW1xuICAgIFtzaW5nbGVRdW90ZWQsIHNpbmdsZVF1b3RlZC5jb25jYXQocXVvdGF0aW9uTWFyaywgZ3JhdmVBY2NlbnQpXSxcbiAgICBbXG4gICAgICBzaW5nbGVRdW90ZWQuY29uY2F0KG5pbCksXG4gICAgICBzaW5nbGVRdW90ZWQuY29uY2F0KG5pbCwgcXVvdGF0aW9uTWFyaywgZ3JhdmVBY2NlbnQpXG4gICAgXVxuICBdLFxuICBkb3VibGU6IFtcbiAgICBbZG91YmxlUXVvdGVkLCBkb3VibGVRdW90ZWQuY29uY2F0KGFwb3N0cm9waGUsIGdyYXZlQWNjZW50KV0sXG4gICAgW1xuICAgICAgZG91YmxlUXVvdGVkLmNvbmNhdChuaWwpLFxuICAgICAgZG91YmxlUXVvdGVkLmNvbmNhdChuaWwsIGFwb3N0cm9waGUsIGdyYXZlQWNjZW50KVxuICAgIF1cbiAgXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBjY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVEb2N0eXBlXG5cbnZhciBkb2NMb3dlciA9ICdkb2N0eXBlJ1xudmFyIGRvY1VwcGVyID0gZG9jTG93ZXIudG9VcHBlckNhc2UoKVxuXG5mdW5jdGlvbiBzZXJpYWxpemVEb2N0eXBlKGN0eCwgbm9kZSkge1xuICB2YXIgZG9jID0gY3R4LnVwcGVyRG9jdHlwZSA/IGRvY1VwcGVyIDogZG9jTG93ZXJcbiAgdmFyIHNlcCA9IGN0eC50aWdodERvY3R5cGUgPyAnJyA6ICcgJ1xuICB2YXIgbmFtZSA9IG5vZGUubmFtZVxuICB2YXIgcHViID0gbm9kZS5wdWJsaWNcbiAgdmFyIHN5cyA9IG5vZGUuc3lzdGVtXG4gIHZhciB2YWwgPSBbJzwhJyArIGRvY11cblxuICBpZiAobmFtZSkge1xuICAgIHZhbC5wdXNoKHNlcCwgbmFtZSlcblxuICAgIGlmIChwdWIgIT09IG51bGwgJiYgcHViICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbC5wdXNoKCcgcHVibGljJywgc2VwLCBxdW90ZShjdHgsIHB1YikpXG4gICAgfSBlbHNlIGlmIChzeXMgIT09IG51bGwgJiYgc3lzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbC5wdXNoKCcgc3lzdGVtJylcbiAgICB9XG5cbiAgICBpZiAoc3lzICE9PSBudWxsICYmIHN5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWwucHVzaChzZXAsIHF1b3RlKGN0eCwgc3lzKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsLmpvaW4oJycpICsgJz4nXG59XG5cbmZ1bmN0aW9uIHF1b3RlKGN0eCwgdmFsdWUpIHtcbiAgdmFyIHByaW1hcnkgPSBjdHgucXVvdGVcbiAgdmFyIHNlY29uZGFyeSA9IGN0eC5hbHRlcm5hdGl2ZVxuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgcXVvdGUgPVxuICAgIGNjb3VudCh2YWwsIHByaW1hcnkpID4gY2NvdW50KHZhbCwgc2Vjb25kYXJ5KSA/IHNlY29uZGFyeSA6IHByaW1hcnlcblxuICByZXR1cm4gKFxuICAgIHF1b3RlICtcbiAgICAvLyBQcmV2ZW50IGJyZWFraW5nIG91dCBvZiBkb2N0eXBlLlxuICAgIGVudGl0aWVzKHZhbCwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBbJzwnLCAnJicsIHF1b3RlXX0pKSArXG4gICAgcXVvdGVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBzdmcgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcnKVxudmFyIGZpbmQgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kJylcbnZhciBzcGFjZXMgPSByZXF1aXJlKCdzcGFjZS1zZXBhcmF0ZWQtdG9rZW5zJykuc3RyaW5naWZ5XG52YXIgY29tbWFzID0gcmVxdWlyZSgnY29tbWEtc2VwYXJhdGVkLXRva2VucycpLnN0cmluZ2lmeVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcbnZhciBjY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplRWxlbWVudFxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGVxdWFsc1RvID0gJz0nXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIHNsYXNoID0gJy8nXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBzZXJpYWxpemVFbGVtZW50KGN0eCwgbm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgcGFyZW50U2NoZW1hID0gY3R4LnNjaGVtYVxuICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZVxuICB2YXIgdmFsdWUgPSAnJ1xuICB2YXIgc2VsZkNsb3NpbmdcbiAgdmFyIGNsb3NlXG4gIHZhciBvbWl0XG4gIHZhciByb290ID0gbm9kZVxuICB2YXIgY29udGVudFxuICB2YXIgYXR0cnNcbiAgdmFyIGxhc3RcblxuICBpZiAocGFyZW50U2NoZW1hLnNwYWNlID09PSAnaHRtbCcgJiYgbmFtZSA9PT0gJ3N2ZycpIHtcbiAgICBjdHguc2NoZW1hID0gc3ZnXG4gIH1cblxuICBhdHRycyA9IHNlcmlhbGl6ZUF0dHJpYnV0ZXMoY3R4LCBub2RlLnByb3BlcnRpZXMpXG5cbiAgaWYgKGN0eC5zY2hlbWEuc3BhY2UgPT09ICdzdmcnKSB7XG4gICAgb21pdCA9IGZhbHNlXG4gICAgY2xvc2UgPSB0cnVlXG4gICAgc2VsZkNsb3NpbmcgPSBjdHguY2xvc2VFbXB0eVxuICB9IGVsc2Uge1xuICAgIG9taXQgPSBjdHgub21pdFxuICAgIGNsb3NlID0gY3R4LmNsb3NlXG4gICAgc2VsZkNsb3NpbmcgPSBjdHgudm9pZHMuaW5kZXhPZihuYW1lLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuXG4gICAgaWYgKG5hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgIHJvb3QgPSBub2RlLmNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBjb250ZW50ID0gYWxsKGN0eCwgcm9vdClcblxuICAvLyBJZiB0aGUgbm9kZSBpcyBjYXRlZ29yaXNlZCBhcyB2b2lkLCBidXQgaXQgaGFzIGNoaWxkcmVuLCByZW1vdmUgdGhlXG4gIC8vIGNhdGVnb3Jpc2F0aW9uLlxuICAvLyBUaGlzIGVuYWJsZXMgZm9yIGV4YW1wbGUgYG1lbnVpdGVtYHMsIHdoaWNoIGFyZSB2b2lkIGluIFczQyBIVE1MIGJ1dCBub3RcbiAgLy8gdm9pZCBpbiBXSEFUV0cgSFRNTCwgdG8gYmUgc3RyaW5naWZpZWQgcHJvcGVybHkuXG4gIHNlbGZDbG9zaW5nID0gY29udGVudCA/IGZhbHNlIDogc2VsZkNsb3NpbmdcblxuICBpZiAoYXR0cnMgfHwgIW9taXQgfHwgIW9taXQub3BlbmluZyhub2RlLCBpbmRleCwgcGFyZW50KSkge1xuICAgIHZhbHVlID0gbGVzc1RoYW4gKyBuYW1lICsgKGF0dHJzID8gc3BhY2UgKyBhdHRycyA6ICcnKVxuXG4gICAgaWYgKHNlbGZDbG9zaW5nICYmIGNsb3NlKSB7XG4gICAgICBsYXN0ID0gYXR0cnMuY2hhckF0KGF0dHJzLmxlbmd0aCAtIDEpXG4gICAgICBpZiAoXG4gICAgICAgICFjdHgudGlnaHRDbG9zZSB8fFxuICAgICAgICBsYXN0ID09PSBzbGFzaCB8fFxuICAgICAgICAoY3R4LnNjaGVtYS5zcGFjZSA9PT0gJ3N2ZycgJiZcbiAgICAgICAgICBsYXN0ICYmXG4gICAgICAgICAgbGFzdCAhPT0gcXVvdGF0aW9uTWFyayAmJlxuICAgICAgICAgIGxhc3QgIT09IGFwb3N0cm9waGUpXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgKz0gc3BhY2VcbiAgICAgIH1cblxuICAgICAgdmFsdWUgKz0gc2xhc2hcbiAgICB9XG5cbiAgICB2YWx1ZSArPSBncmVhdGVyVGhhblxuICB9XG5cbiAgdmFsdWUgKz0gY29udGVudFxuXG4gIGlmICghc2VsZkNsb3NpbmcgJiYgKCFvbWl0IHx8ICFvbWl0LmNsb3Npbmcobm9kZSwgaW5kZXgsIHBhcmVudCkpKSB7XG4gICAgdmFsdWUgKz0gbGVzc1RoYW4gKyBzbGFzaCArIG5hbWUgKyBncmVhdGVyVGhhblxuICB9XG5cbiAgY3R4LnNjaGVtYSA9IHBhcmVudFNjaGVtYVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVzKGN0eCwgcHJvcHMpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG4gIHZhciByZXN1bHRcbiAgdmFyIGxlbmd0aFxuICB2YXIgaW5kZXhcbiAgdmFyIGxhc3RcblxuICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgIHZhbHVlID0gcHJvcHNba2V5XVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2VyaWFsaXplQXR0cmlidXRlKGN0eCwga2V5LCB2YWx1ZSlcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHZhbHVlc1tpbmRleF1cbiAgICBsYXN0ID0gbnVsbFxuXG4gICAgaWYgKGN0eC50aWdodCkge1xuICAgICAgbGFzdCA9IHJlc3VsdC5jaGFyQXQocmVzdWx0Lmxlbmd0aCAtIDEpXG4gICAgfVxuXG4gICAgLy8gSW4gdGlnaHQgbW9kZSwgZG9u4oCZdCBhZGQgYSBzcGFjZSBhZnRlciBxdW90ZWQgYXR0cmlidXRlcy5cbiAgICBpZiAoaW5kZXggIT09IGxlbmd0aCAtIDEgJiYgbGFzdCAhPT0gcXVvdGF0aW9uTWFyayAmJiBsYXN0ICE9PSBhcG9zdHJvcGhlKSB7XG4gICAgICB2YWx1ZXNbaW5kZXhdID0gcmVzdWx0ICsgc3BhY2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUF0dHJpYnV0ZShjdHgsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHNjaGVtYSA9IGN0eC5zY2hlbWFcbiAgdmFyIGluZm8gPSBmaW5kKHNjaGVtYSwga2V5KVxuICB2YXIgbmFtZSA9IGluZm8uYXR0cmlidXRlXG5cbiAgaWYgKGluZm8ub3ZlcmxvYWRlZEJvb2xlYW4gJiYgKHZhbHVlID09PSBuYW1lIHx8IHZhbHVlID09PSAnJykpIHtcbiAgICB2YWx1ZSA9IHRydWVcbiAgfSBlbHNlIGlmIChcbiAgICBpbmZvLmJvb2xlYW4gfHxcbiAgICAoaW5mby5vdmVybG9hZGVkQm9vbGVhbiAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKVxuICApIHtcbiAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICBpZiAoXG4gICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKVxuICApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIG5hbWUgPSBzZXJpYWxpemVBdHRyaWJ1dGVOYW1lKGN0eCwgbmFtZSlcblxuICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAvLyBUaGVyZSBpcyBjdXJyZW50bHkgb25seSBvbmUgYm9vbGVhbiBwcm9wZXJ0eSBpbiBTVkc6IGBbZG93bmxvYWRdYCBvblxuICAgIC8vIGA8YT5gLlxuICAgIC8vIFRoaXMgcHJvcGVydHkgZG9lcyBub3Qgc2VlbSB0byB3b3JrIGluIGJyb3dzZXJzIChGRiwgU2EsIENoKSwgc28gSSBjYW7igJl0XG4gICAgLy8gdGVzdCBpZiBkcm9wcGluZyB0aGUgdmFsdWUgd29ya3MuXG4gICAgLy8gQnV0IEkgYXNzdW1lIHRoYXQgaXQgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gYGBgaHRtbFxuICAgIC8vIDwhZG9jdHlwZSBodG1sPlxuICAgIC8vIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgLy8gICA8YSBocmVmPWh0dHBzOi8vZXhhbXBsZS5jb20gZG93bmxvYWQ+XG4gICAgLy8gICAgIDxjaXJjbGUgY3g9NTAgY3k9NDAgcj0zNSAvPlxuICAgIC8vICAgPC9hPlxuICAgIC8vIDwvc3ZnPlxuICAgIC8vIGBgYFxuICAgIC8vXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9ibG9iL21hc3Rlci9saWIvc3ZnLmpzPlxuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICByZXR1cm4gbmFtZSArIHNlcmlhbGl6ZUF0dHJpYnV0ZVZhbHVlKGN0eCwga2V5LCB2YWx1ZSwgaW5mbylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlTmFtZShjdHgsIG5hbWUpIHtcbiAgLy8gQWx3YXlzIGVuY29kZSB3aXRob3V0IHBhcnNlIGVycm9ycyBpbiBub24tSFRNTC5cbiAgdmFyIHZhbGlkID0gY3R4LnNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnID8gY3R4LnZhbGlkIDogMVxuICB2YXIgc3Vic2V0ID0gY29uc3RhbnRzLm5hbWVbdmFsaWRdW2N0eC5zYWZlXVxuXG4gIHJldHVybiBlbnRpdGllcyhuYW1lLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IHN1YnNldH0pKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZShjdHgsIGtleSwgdmFsdWUsIGluZm8pIHtcbiAgdmFyIG9wdGlvbnMgPSBjdHguZW50aXRpZXNcbiAgdmFyIHF1b3RlID0gY3R4LnF1b3RlXG4gIHZhciBhbHRlcm5hdGl2ZSA9IGN0eC5hbHRlcm5hdGl2ZVxuICB2YXIgc21hcnQgPSBjdHguc21hcnRcbiAgdmFyIHVucXVvdGVkXG4gIHZhciBzdWJzZXRcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIC8vIGBzcGFjZXNgIGRvZXNu4oCZdCBhY2NlcHQgYSBzZWNvbmQgYXJndW1lbnQsIGJ1dCBpdOKAmXMgZ2l2ZW4gaGVyZSBqdXN0IHRvXG4gICAgLy8ga2VlcCB0aGUgY29kZSBjbGVhbmVyLlxuICAgIHZhbHVlID0gKGluZm8uY29tbWFTZXBhcmF0ZWQgPyBjb21tYXMgOiBzcGFjZXMpKHZhbHVlLCB7XG4gICAgICBwYWRMZWZ0OiAhY3R4LnRpZ2h0TGlzdHNcbiAgICB9KVxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG5cbiAgaWYgKHZhbHVlIHx8ICFjdHguY29sbGFwc2VFbXB0eSkge1xuICAgIHVucXVvdGVkID0gdmFsdWVcblxuICAgIC8vIENoZWNrIHVucXVvdGVkIHZhbHVlLlxuICAgIGlmIChjdHgudW5xdW90ZWQpIHtcbiAgICAgIHN1YnNldCA9IGNvbnN0YW50cy51bnF1b3RlZFtjdHgudmFsaWRdW2N0eC5zYWZlXVxuICAgICAgdW5xdW90ZWQgPSBlbnRpdGllcyhcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHh0ZW5kKG9wdGlvbnMsIHtzdWJzZXQ6IHN1YnNldCwgYXR0cmlidXRlOiB0cnVlfSlcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBJZiBgdmFsdWVgIGNvbnRhaW5zIGVudGl0aWVzIHdoZW4gdW5xdW90ZWTigKZcbiAgICBpZiAoIWN0eC51bnF1b3RlZCB8fCB1bnF1b3RlZCAhPT0gdmFsdWUpIHtcbiAgICAgIC8vIElmIHRoZSBhbHRlcm5hdGl2ZSBpcyBsZXNzIGNvbW1vbiB0aGFuIGBxdW90ZWAsIHN3aXRjaC5cbiAgICAgIGlmIChzbWFydCAmJiBjY291bnQodmFsdWUsIHF1b3RlKSA+IGNjb3VudCh2YWx1ZSwgYWx0ZXJuYXRpdmUpKSB7XG4gICAgICAgIHF1b3RlID0gYWx0ZXJuYXRpdmVcbiAgICAgIH1cblxuICAgICAgc3Vic2V0ID0gcXVvdGUgPT09IGFwb3N0cm9waGUgPyBjb25zdGFudHMuc2luZ2xlIDogY29uc3RhbnRzLmRvdWJsZVxuICAgICAgLy8gQWx3YXlzIGVuY29kZSB3aXRob3V0IHBhcnNlIGVycm9ycyBpbiBub24tSFRNTC5cbiAgICAgIHN1YnNldCA9IHN1YnNldFtjdHguc2NoZW1hLnNwYWNlID09PSAnaHRtbCcgPyBjdHgudmFsaWQgOiAxXVtjdHguc2FmZV1cblxuICAgICAgdmFsdWUgPSBlbnRpdGllcyh2YWx1ZSwgeHRlbmQob3B0aW9ucywge3N1YnNldDogc3Vic2V0LCBhdHRyaWJ1dGU6IHRydWV9KSlcblxuICAgICAgdmFsdWUgPSBxdW90ZSArIHZhbHVlICsgcXVvdGVcbiAgICB9XG5cbiAgICAvLyBEb27igJl0IGFkZCBhIGA9YCBmb3IgdW5xdW90ZWQgZW1wdGllcy5cbiAgICB2YWx1ZSA9IHZhbHVlID8gZXF1YWxzVG8gKyB2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2h0bWwnKVxudmFyIHN2ZyA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL3N2ZycpXG52YXIgdm9pZHMgPSByZXF1aXJlKCdodG1sLXZvaWQtZWxlbWVudHMnKVxudmFyIG9taXNzaW9uID0gcmVxdWlyZSgnLi9vbWlzc2lvbicpXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSHRtbFxuXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIHRvSHRtbChub2RlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHF1b3RlID0gc2V0dGluZ3MucXVvdGUgfHwgcXVvdGF0aW9uTWFya1xuICB2YXIgYWx0ZXJuYXRpdmUgPSBxdW90ZSA9PT0gcXVvdGF0aW9uTWFyayA/IGFwb3N0cm9waGUgOiBxdW90YXRpb25NYXJrXG4gIHZhciBzbWFydCA9IHNldHRpbmdzLnF1b3RlU21hcnRcbiAgdmFyIHZhbHVlID1cbiAgICBub2RlICYmIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBub2RlXG4gICAgICA/IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBub2RlfVxuICAgICAgOiBub2RlXG5cbiAgaWYgKHF1b3RlICE9PSBxdW90YXRpb25NYXJrICYmIHF1b3RlICE9PSBhcG9zdHJvcGhlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0ludmFsaWQgcXVvdGUgYCcgK1xuICAgICAgICBxdW90ZSArXG4gICAgICAgICdgLCBleHBlY3RlZCBgJyArXG4gICAgICAgIGFwb3N0cm9waGUgK1xuICAgICAgICAnYCBvciBgJyArXG4gICAgICAgIHF1b3RhdGlvbk1hcmsgK1xuICAgICAgICAnYCdcbiAgICApXG4gIH1cblxuICBpZiAoc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIVE1MICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoIWRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nSXNzdWVkID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRGVwcmVjYXRpb24gd2FybmluZzogYGFsbG93RGFuZ2Vyb3VzSFRNTGAgaXMgYSBub25zdGFuZGFyZCBvcHRpb24sIHVzZSBgYWxsb3dEYW5nZXJvdXNIdG1sYCBpbnN0ZWFkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvbmUoXG4gICAge1xuICAgICAgdmFsaWQ6IHNldHRpbmdzLmFsbG93UGFyc2VFcnJvcnMgPyAwIDogMSxcbiAgICAgIHNhZmU6IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzQ2hhcmFjdGVycyA/IDAgOiAxLFxuICAgICAgc2NoZW1hOiBzZXR0aW5ncy5zcGFjZSA9PT0gJ3N2ZycgPyBzdmcgOiBodG1sLFxuICAgICAgb21pdDogc2V0dGluZ3Mub21pdE9wdGlvbmFsVGFncyAmJiBvbWlzc2lvbixcbiAgICAgIHF1b3RlOiBxdW90ZSxcbiAgICAgIGFsdGVybmF0aXZlOiBhbHRlcm5hdGl2ZSxcbiAgICAgIHNtYXJ0OiBzbWFydCxcbiAgICAgIHVucXVvdGVkOiBCb29sZWFuKHNldHRpbmdzLnByZWZlclVucXVvdGVkKSxcbiAgICAgIHRpZ2h0OiBzZXR0aW5ncy50aWdodEF0dHJpYnV0ZXMsXG4gICAgICB1cHBlckRvY3R5cGU6IEJvb2xlYW4oc2V0dGluZ3MudXBwZXJEb2N0eXBlKSxcbiAgICAgIHRpZ2h0RG9jdHlwZTogQm9vbGVhbihzZXR0aW5ncy50aWdodERvY3R5cGUpLFxuICAgICAgYm9ndXNDb21tZW50czogQm9vbGVhbihzZXR0aW5ncy5ib2d1c0NvbW1lbnRzKSxcbiAgICAgIHRpZ2h0TGlzdHM6IHNldHRpbmdzLnRpZ2h0Q29tbWFTZXBhcmF0ZWRMaXN0cyxcbiAgICAgIHRpZ2h0Q2xvc2U6IHNldHRpbmdzLnRpZ2h0U2VsZkNsb3NpbmcsXG4gICAgICBjb2xsYXBzZUVtcHR5OiBzZXR0aW5ncy5jb2xsYXBzZUVtcHR5QXR0cmlidXRlcyxcbiAgICAgIGRhbmdlcm91czogc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIdG1sIHx8IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTCxcbiAgICAgIHZvaWRzOiBzZXR0aW5ncy52b2lkcyB8fCB2b2lkcy5jb25jYXQoKSxcbiAgICAgIGVudGl0aWVzOiBzZXR0aW5ncy5lbnRpdGllcyB8fCB7fSxcbiAgICAgIGNsb3NlOiBzZXR0aW5ncy5jbG9zZVNlbGZDbG9zaW5nLFxuICAgICAgY2xvc2VFbXB0eTogc2V0dGluZ3MuY2xvc2VFbXB0eUVsZW1lbnRzXG4gICAgfSxcbiAgICB2YWx1ZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIGVsZW1lbnQgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgd2hpdGVTcGFjZVN0YXJ0ID0gcmVxdWlyZSgnLi91dGlsL3doaXRlLXNwYWNlLXN0YXJ0JylcbnZhciBhZnRlciA9IHJlcXVpcmUoJy4vdXRpbC9zaWJsaW5ncycpLmFmdGVyXG52YXIgb21pc3Npb24gPSByZXF1aXJlKCcuL29taXNzaW9uJylcblxudmFyIGlzQ29tbWVudCA9IGNvbnZlcnQoJ2NvbW1lbnQnKVxuXG52YXIgb3B0aW9uR3JvdXAgPSAnb3B0Z3JvdXAnXG52YXIgb3B0aW9ucyA9IFsnb3B0aW9uJ10uY29uY2F0KG9wdGlvbkdyb3VwKVxudmFyIGRhdGFMaXN0SXRlbSA9IFsnZHQnLCAnZGQnXVxudmFyIGxpc3RJdGVtID0gJ2xpJ1xudmFyIG1lbnVDb250ZW50ID0gWydtZW51aXRlbScsICdocicsICdtZW51J11cbnZhciBydWJ5ID0gWydycCcsICdydCddXG52YXIgdGFibGVDb250YWluZXIgPSBbJ3Rib2R5JywgJ3Rmb290J11cbnZhciB0YWJsZVJvdyA9ICd0cidcbnZhciB0YWJsZUNlbGwgPSBbJ3RkJywgJ3RoJ11cblxudmFyIGNvbmZ1c2luZ1BhcmFncmFwaFBhcmVudCA9IFtcbiAgJ2EnLFxuICAnYXVkaW8nLFxuICAnZGVsJyxcbiAgJ2lucycsXG4gICdtYXAnLFxuICAnbm9zY3JpcHQnLFxuICAndmlkZW8nXG5dXG5cbnZhciBjbGVhclBhcmFncmFwaFNpYmxpbmcgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmxvY2txdW90ZScsXG4gICdkZXRhaWxzJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICduYXYnLFxuICAnb2wnLFxuICAncCcsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICd0YWJsZScsXG4gICd1bCdcbl1cblxubW9kdWxlLmV4cG9ydHMgPSBvbWlzc2lvbih7XG4gIGh0bWw6IGh0bWwsXG4gIGhlYWQ6IGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uLFxuICBib2R5OiBib2R5LFxuICBwOiBwLFxuICBsaTogbGksXG4gIGR0OiBkdCxcbiAgZGQ6IGRkLFxuICBydDogcnVieUVsZW1lbnQsXG4gIHJwOiBydWJ5RWxlbWVudCxcbiAgb3B0Z3JvdXA6IG9wdGdyb3VwLFxuICBvcHRpb246IG9wdGlvbixcbiAgbWVudWl0ZW06IG1lbnVpdGVtLFxuICBjb2xncm91cDogaGVhZE9yQ29sZ3JvdXBPckNhcHRpb24sXG4gIGNhcHRpb246IGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uLFxuICB0aGVhZDogdGhlYWQsXG4gIHRib2R5OiB0Ym9keSxcbiAgdGZvb3Q6IHRmb290LFxuICB0cjogdHIsXG4gIHRkOiBjZWxscyxcbiAgdGg6IGNlbGxzXG59KVxuXG4vLyBNYWNybyBmb3IgYDwvaGVhZD5gLCBgPC9jb2xncm91cD5gLCBhbmQgYDwvY2FwdGlvbj5gLlxuZnVuY3Rpb24gaGVhZE9yQ29sZ3JvdXBPckNhcHRpb24obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgsIHRydWUpXG4gIHJldHVybiAhbmV4dCB8fCAoIWlzQ29tbWVudChuZXh0KSAmJiAhd2hpdGVTcGFjZVN0YXJ0KG5leHQpKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvaHRtbD5gLlxuZnVuY3Rpb24gaHRtbChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8ICFpc0NvbW1lbnQobmV4dClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2JvZHk+YC5cbmZ1bmN0aW9uIGJvZHkobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCAhaXNDb21tZW50KG5leHQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9wPmAuXG5mdW5jdGlvbiBwKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gbmV4dFxuICAgID8gZWxlbWVudChuZXh0LCBjbGVhclBhcmFncmFwaFNpYmxpbmcpXG4gICAgOiAhcGFyZW50IHx8ICFlbGVtZW50KHBhcmVudCwgY29uZnVzaW5nUGFyYWdyYXBoUGFyZW50KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvbGk+YC5cbmZ1bmN0aW9uIGxpKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBsaXN0SXRlbSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2R0PmAuXG5mdW5jdGlvbiBkdChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuIG5leHQgJiYgZWxlbWVudChuZXh0LCBkYXRhTGlzdEl0ZW0pXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9kZD5gLlxuZnVuY3Rpb24gZGQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIGRhdGFMaXN0SXRlbSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3J0PmAgb3IgYDwvcnA+YC5cbmZ1bmN0aW9uIHJ1YnlFbGVtZW50KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBydWJ5KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvb3B0Z3JvdXA+YC5cbmZ1bmN0aW9uIG9wdGdyb3VwKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBvcHRpb25Hcm91cClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L29wdGlvbj5gLlxuZnVuY3Rpb24gb3B0aW9uKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBvcHRpb25zKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvbWVudWl0ZW0+YC5cbmZ1bmN0aW9uIG1lbnVpdGVtKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBtZW51Q29udGVudClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3RoZWFkPmAuXG5mdW5jdGlvbiB0aGVhZChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuIG5leHQgJiYgZWxlbWVudChuZXh0LCB0YWJsZUNvbnRhaW5lcilcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3Rib2R5PmAuXG5mdW5jdGlvbiB0Ym9keShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgdGFibGVDb250YWluZXIpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90Zm9vdD5gLlxuZnVuY3Rpb24gdGZvb3Qobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICByZXR1cm4gIWFmdGVyKHBhcmVudCwgaW5kZXgpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90cj5gLlxuZnVuY3Rpb24gdHIobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIHRhYmxlUm93KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdGQ+YCBvciBgPC90aD5gLlxuZnVuY3Rpb24gY2VsbHMobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIHRhYmxlQ2VsbClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuZXhwb3J0cy5vcGVuaW5nID0gcmVxdWlyZSgnLi9vcGVuaW5nJylcbmV4cG9ydHMuY2xvc2luZyA9IHJlcXVpcmUoJy4vY2xvc2luZycpXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbWlzc2lvblxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gRmFjdG9yeSB0byBjaGVjayBpZiBhIGdpdmVuIG5vZGUgY2FuIGhhdmUgYSB0YWcgb21pdHRlZC5cbmZ1bmN0aW9uIG9taXNzaW9uKGhhbmRsZXJzKSB7XG4gIHJldHVybiBvbWl0XG5cbiAgLy8gQ2hlY2sgaWYgYSBnaXZlbiBub2RlIGNhbiBoYXZlIGEgdGFnIG9taXR0ZWQuXG4gIGZ1bmN0aW9uIG9taXQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBuYW1lID0gbm9kZS50YWdOYW1lXG5cbiAgICByZXR1cm4gb3duLmNhbGwoaGFuZGxlcnMsIG5hbWUpXG4gICAgICA/IGhhbmRsZXJzW25hbWVdKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICA6IGZhbHNlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgZWxlbWVudCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBiZWZvcmUgPSByZXF1aXJlKCcuL3V0aWwvc2libGluZ3MnKS5iZWZvcmVcbnZhciBmaXJzdCA9IHJlcXVpcmUoJy4vdXRpbC9maXJzdCcpXG52YXIgcGxhY2UgPSByZXF1aXJlKCcuL3V0aWwvcGxhY2UnKVxudmFyIHdoaXRlU3BhY2VTdGFydCA9IHJlcXVpcmUoJy4vdXRpbC93aGl0ZS1zcGFjZS1zdGFydCcpXG52YXIgY2xvc2luZyA9IHJlcXVpcmUoJy4vY2xvc2luZycpXG52YXIgb21pc3Npb24gPSByZXF1aXJlKCcuL29taXNzaW9uJylcblxudmFyIGlzQ29tbWVudCA9IGNvbnZlcnQoJ2NvbW1lbnQnKVxuXG52YXIgdW5pcXVlSGVhZE1ldGFkYXRhID0gWyd0aXRsZScsICdiYXNlJ11cbnZhciBtZXRhID0gWydtZXRhJywgJ2xpbmsnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RlbXBsYXRlJ11cbnZhciB0YWJsZUNvbnRhaW5lcnMgPSBbJ3RoZWFkJywgJ3Rib2R5J11cbnZhciB0YWJsZVJvdyA9ICd0cidcblxubW9kdWxlLmV4cG9ydHMgPSBvbWlzc2lvbih7XG4gIGh0bWw6IGh0bWwsXG4gIGhlYWQ6IGhlYWQsXG4gIGJvZHk6IGJvZHksXG4gIGNvbGdyb3VwOiBjb2xncm91cCxcbiAgdGJvZHk6IHRib2R5XG59KVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDxodG1sPmAuXG5mdW5jdGlvbiBodG1sKG5vZGUpIHtcbiAgdmFyIGhlYWQgPSBmaXJzdChub2RlKVxuICByZXR1cm4gIWhlYWQgfHwgIWlzQ29tbWVudChoZWFkKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDxoZWFkPmAuXG5mdW5jdGlvbiBoZWFkKG5vZGUpIHtcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBzZWVuID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoaWxkXG4gIHZhciBuYW1lXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuICAgIG5hbWUgPSBjaGlsZC50YWdOYW1lXG5cbiAgICBpZiAoZWxlbWVudChjaGlsZCwgdW5pcXVlSGVhZE1ldGFkYXRhKSkge1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHNlZW4ucHVzaChuYW1lKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZW5ndGggIT09IDBcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8Ym9keT5gLlxuZnVuY3Rpb24gYm9keShub2RlKSB7XG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICFoZWFkIHx8XG4gICAgKCFpc0NvbW1lbnQoaGVhZCkgJiYgIXdoaXRlU3BhY2VTdGFydChoZWFkKSAmJiAhZWxlbWVudChoZWFkLCBtZXRhKSlcbiAgKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDxjb2xncm91cD5gLlxuLy8gVGhlIHNwZWMgZGVzY3JpYmVzIHNvbWUgbG9naWMgZm9yIHRoZSBvcGVuaW5nIHRhZywgYnV0IGl04oCZcyBlYXNpZXIgdG9cbi8vIGltcGxlbWVudCBpbiB0aGUgY2xvc2luZyB0YWcsIHRvIHRoZSBzYW1lIGVmZmVjdCwgc28gd2UgaGFuZGxlIGl0IHRoZXJlXG4vLyBpbnN0ZWFkLlxuZnVuY3Rpb24gY29sZ3JvdXAobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgcHJldiA9IGJlZm9yZShwYXJlbnQsIGluZGV4KVxuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUsIHRydWUpXG5cbiAgLy8gUHJldmlvdXMgY29sZ3JvdXAgd2FzIGFscmVhZHkgb21pdHRlZC5cbiAgaWYgKGVsZW1lbnQocHJldiwgJ2NvbGdyb3VwJykgJiYgY2xvc2luZyhwcmV2LCBwbGFjZShwYXJlbnQsIHByZXYpLCBwYXJlbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gaGVhZCAmJiBlbGVtZW50KGhlYWQsICdjb2wnKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDx0Ym9keT5gLlxuZnVuY3Rpb24gdGJvZHkobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgcHJldiA9IGJlZm9yZShwYXJlbnQsIGluZGV4KVxuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUpXG5cbiAgLy8gUHJldmlvdXMgdGFibGUgc2VjdGlvbiB3YXMgYWxyZWFkeSBvbWl0dGVkLlxuICBpZiAoXG4gICAgZWxlbWVudChwcmV2LCB0YWJsZUNvbnRhaW5lcnMpICYmXG4gICAgY2xvc2luZyhwcmV2LCBwbGFjZShwYXJlbnQsIHByZXYpLCBwYXJlbnQpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGhlYWQgJiYgZWxlbWVudChoZWFkLCB0YWJsZVJvdylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWZ0ZXIgPSByZXF1aXJlKCcuL3NpYmxpbmdzJykuYWZ0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBmaXJzdFxuXG4vLyBHZXQgdGhlIGZpcnN0IGNoaWxkIGluIGBwYXJlbnRgLlxuZnVuY3Rpb24gZmlyc3QocGFyZW50LCBpbmNsdWRlV2hpdGVTcGFjZSkge1xuICByZXR1cm4gYWZ0ZXIocGFyZW50LCAtMSwgaW5jbHVkZVdoaXRlU3BhY2UpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwbGFjZVxuXG4vLyBHZXQgdGhlIHBvc2l0aW9uIG9mIGBub2RlYCBpbiBgcGFyZW50YC5cbmZ1bmN0aW9uIHBsYWNlKHBhcmVudCwgY2hpbGQpIHtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlU3BhY2UgPSByZXF1aXJlKCdoYXN0LXV0aWwtd2hpdGVzcGFjZScpXG5cbmV4cG9ydHMuYmVmb3JlID0gc2libGluZ3MoLTEpXG5leHBvcnRzLmFmdGVyID0gc2libGluZ3MoMSlcblxuLy8gRmFjdG9yeSB0byBjaGVjayBzaWJsaW5ncyBpbiBhIGRpcmVjdGlvbi5cbmZ1bmN0aW9uIHNpYmxpbmdzKGluY3JlbWVudCkge1xuICByZXR1cm4gc2libGluZ1xuXG4gIC8vIEZpbmQgYXBwbGljYWJsZSBzaWJsaW5ncyBpbiBhIGRpcmVjdGlvbi5cbiAgZnVuY3Rpb24gc2libGluZyhwYXJlbnQsIGluZGV4LCBpbmNsdWRlV2hpdGVTcGFjZSkge1xuICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW5cbiAgICB2YXIgb2Zmc2V0ID0gaW5kZXggKyBpbmNyZW1lbnRcbiAgICB2YXIgbmV4dCA9IHNpYmxpbmdzICYmIHNpYmxpbmdzW29mZnNldF1cblxuICAgIGlmICghaW5jbHVkZVdoaXRlU3BhY2UpIHtcbiAgICAgIHdoaWxlIChuZXh0ICYmIHdoaXRlU3BhY2UobmV4dCkpIHtcbiAgICAgICAgb2Zmc2V0ICs9IGluY3JlbWVudFxuICAgICAgICBuZXh0ID0gc2libGluZ3Nbb2Zmc2V0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgd2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2hhc3QtdXRpbC13aGl0ZXNwYWNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3aGl0ZVNwYWNlU3RhcnRcblxudmFyIGlzVGV4dCA9IGNvbnZlcnQoJ3RleHQnKVxuXG4vLyBDaGVjayBpZiBgbm9kZWAgc3RhcnRzIHdpdGggd2hpdGUtc3BhY2UuXG5mdW5jdGlvbiB3aGl0ZVNwYWNlU3RhcnQobm9kZSkge1xuICByZXR1cm4gaXNUZXh0KG5vZGUpICYmIHdoaXRlU3BhY2Uobm9kZS52YWx1ZS5jaGFyQXQoMCkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbnZhciBoYW5kbGVycyA9IHt9XG5cbmhhbmRsZXJzLnJvb3QgPSByZXF1aXJlKCcuL2FsbCcpXG5oYW5kbGVycy50ZXh0ID0gcmVxdWlyZSgnLi90ZXh0JylcbmhhbmRsZXJzLmVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKVxuaGFuZGxlcnMuZG9jdHlwZSA9IHJlcXVpcmUoJy4vZG9jdHlwZScpXG5oYW5kbGVycy5jb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50JylcbmhhbmRsZXJzLnJhdyA9IHJlcXVpcmUoJy4vcmF3JylcblxuZnVuY3Rpb24gc2VyaWFsaXplKGN0eCwgbm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgdHlwZSA9IG5vZGUgJiYgbm9kZS50eXBlXG5cbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG5cbiAgaWYgKCFvd24uY2FsbChoYW5kbGVycywgdHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb21waWxlIHVua25vd24gbm9kZSBgJyArIHR5cGUgKyAnYCcpXG4gIH1cblxuICByZXR1cm4gaGFuZGxlcnNbdHlwZV0oY3R4LCBub2RlLCBpbmRleCwgcGFyZW50KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0ZXh0ID0gcmVxdWlyZSgnLi90ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVSYXdcblxuZnVuY3Rpb24gc2VyaWFsaXplUmF3KGN0eCwgbm9kZSkge1xuICByZXR1cm4gY3R4LmRhbmdlcm91cyA/IG5vZGUudmFsdWUgOiB0ZXh0KGN0eCwgbm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZVRleHRcblxuZnVuY3Rpb24gc2VyaWFsaXplVGV4dChjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuXG4gIHJldHVybiBpc0xpdGVyYWwocGFyZW50KVxuICAgID8gdmFsdWVcbiAgICA6IGVudGl0aWVzKHZhbHVlLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IFsnPCcsICcmJ119KSlcbn1cblxuLy8gQ2hlY2sgaWYgY29udGVudCBvZiBgbm9kZWAgc2hvdWxkIGJlIGVzY2FwZWQuXG5mdW5jdGlvbiBpc0xpdGVyYWwobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiAobm9kZS50YWdOYW1lID09PSAnc2NyaXB0JyB8fCBub2RlLnRhZ05hbWUgPT09ICdzdHlsZScpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlXG5cbi8vIEhUTUwgd2hpdGUtc3BhY2UgZXhwcmVzc2lvbi5cbi8vIFNlZSA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3BhY2UtY2hhcmFjdGVyPi5cbnZhciByZSA9IC9bIFxcdFxcblxcZlxccl0vZ1xuXG5mdW5jdGlvbiBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlKG5vZGUpIHtcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgJycpID09PSAnJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2RlZmluZWQtaW5mbycpXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvaW5mbycpXG5cbnZhciBkYXRhID0gJ2RhdGEnXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFxuXG52YXIgdmFsaWQgPSAvXmRhdGFbLWEtejAtOS46X10rJC9pXG52YXIgZGFzaCA9IC8tW2Etel0vZ1xudmFyIGNhcCA9IC9bQS1aXS9nXG5cbmZ1bmN0aW9uIGZpbmQoc2NoZW1hLCB2YWx1ZSkge1xuICB2YXIgbm9ybWFsID0gbm9ybWFsaXplKHZhbHVlKVxuICB2YXIgcHJvcCA9IHZhbHVlXG4gIHZhciBUeXBlID0gSW5mb1xuXG4gIGlmIChub3JtYWwgaW4gc2NoZW1hLm5vcm1hbCkge1xuICAgIHJldHVybiBzY2hlbWEucHJvcGVydHlbc2NoZW1hLm5vcm1hbFtub3JtYWxdXVxuICB9XG5cbiAgaWYgKG5vcm1hbC5sZW5ndGggPiA0ICYmIG5vcm1hbC5zbGljZSgwLCA0KSA9PT0gZGF0YSAmJiB2YWxpZC50ZXN0KHZhbHVlKSkge1xuICAgIC8vIEF0dHJpYnV0ZSBvciBwcm9wZXJ0eS5cbiAgICBpZiAodmFsdWUuY2hhckF0KDQpID09PSAnLScpIHtcbiAgICAgIHByb3AgPSBkYXRhc2V0VG9Qcm9wZXJ0eSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkYXRhc2V0VG9BdHRyaWJ1dGUodmFsdWUpXG4gICAgfVxuXG4gICAgVHlwZSA9IERlZmluZWRJbmZvXG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGUocHJvcCwgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRUb1Byb3BlcnR5KGF0dHJpYnV0ZSkge1xuICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGUuc2xpY2UoNSkucmVwbGFjZShkYXNoLCBjYW1lbGNhc2UpXG4gIHJldHVybiBkYXRhICsgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9BdHRyaWJ1dGUocHJvcGVydHkpIHtcbiAgdmFyIHZhbHVlID0gcHJvcGVydHkuc2xpY2UoNClcblxuICBpZiAoZGFzaC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcm9wZXJ0eVxuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGNhcCwga2ViYWIpXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gJy0nKSB7XG4gICAgdmFsdWUgPSAnLScgKyB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIGRhdGEgKyB2YWx1ZVxufVxuXG5mdW5jdGlvbiBrZWJhYigkMCkge1xuICByZXR1cm4gJy0nICsgJDAudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBjYW1lbGNhc2UoJDApIHtcbiAgcmV0dXJuICQwLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1lcmdlID0gcmVxdWlyZSgnLi9saWIvdXRpbC9tZXJnZScpXG52YXIgeGxpbmsgPSByZXF1aXJlKCcuL2xpYi94bGluaycpXG52YXIgeG1sID0gcmVxdWlyZSgnLi9saWIveG1sJylcbnZhciB4bWxucyA9IHJlcXVpcmUoJy4vbGliL3htbG5zJylcbnZhciBhcmlhID0gcmVxdWlyZSgnLi9saWIvYXJpYScpXG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vbGliL2h0bWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgaHRtbF0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxudmFyIGJvb2xlYW5pc2ggPSB0eXBlcy5ib29sZWFuaXNoXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHRyYW5zZm9ybTogYXJpYVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50OiBudWxsLFxuICAgIGFyaWFBdG9taWM6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUF1dG9Db21wbGV0ZTogbnVsbCxcbiAgICBhcmlhQnVzeTogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ2hlY2tlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhQ29sQ291bnQ6IG51bWJlcixcbiAgICBhcmlhQ29sSW5kZXg6IG51bWJlcixcbiAgICBhcmlhQ29sU3BhbjogbnVtYmVyLFxuICAgIGFyaWFDb250cm9sczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUN1cnJlbnQ6IG51bGwsXG4gICAgYXJpYURlc2NyaWJlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRGV0YWlsczogbnVsbCxcbiAgICBhcmlhRGlzYWJsZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYURyb3BFZmZlY3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFFcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgYXJpYUV4cGFuZGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFGbG93VG86IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFHcmFiYmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFIYXNQb3B1cDogbnVsbCxcbiAgICBhcmlhSGlkZGVuOiBib29sZWFuaXNoLFxuICAgIGFyaWFJbnZhbGlkOiBudWxsLFxuICAgIGFyaWFLZXlTaG9ydGN1dHM6IG51bGwsXG4gICAgYXJpYUxhYmVsOiBudWxsLFxuICAgIGFyaWFMYWJlbGxlZEJ5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhTGV2ZWw6IG51bWJlcixcbiAgICBhcmlhTGl2ZTogbnVsbCxcbiAgICBhcmlhTW9kYWw6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpTGluZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBib29sZWFuaXNoLFxuICAgIGFyaWFPcmllbnRhdGlvbjogbnVsbCxcbiAgICBhcmlhT3duczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYVBsYWNlaG9sZGVyOiBudWxsLFxuICAgIGFyaWFQb3NJblNldDogbnVtYmVyLFxuICAgIGFyaWFQcmVzc2VkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSZWFkT25seTogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVsZXZhbnQ6IG51bGwsXG4gICAgYXJpYVJlcXVpcmVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFSb2xlRGVzY3JpcHRpb246IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFSb3dDb3VudDogbnVtYmVyLFxuICAgIGFyaWFSb3dJbmRleDogbnVtYmVyLFxuICAgIGFyaWFSb3dTcGFuOiBudW1iZXIsXG4gICAgYXJpYVNlbGVjdGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFTZXRTaXplOiBudW1iZXIsXG4gICAgYXJpYVNvcnQ6IG51bGwsXG4gICAgYXJpYVZhbHVlTWF4OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTWluOiBudW1iZXIsXG4gICAgYXJpYVZhbHVlTm93OiBudW1iZXIsXG4gICAgYXJpYVZhbHVlVGV4dDogbnVsbCxcbiAgICByb2xlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGFyaWFUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gcHJvcCA9PT0gJ3JvbGUnID8gcHJvcCA6ICdhcmlhLScgKyBwcm9wLnNsaWNlKDQpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG92ZXJsb2FkZWRCb29sZWFuID0gdHlwZXMub3ZlcmxvYWRlZEJvb2xlYW5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdodG1sJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGFjY2VwdGNoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gICAgY2xhc3NuYW1lOiAnY2xhc3MnLFxuICAgIGh0bWxmb3I6ICdmb3InLFxuICAgIGh0dHBlcXVpdjogJ2h0dHAtZXF1aXYnXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBtdXN0VXNlUHJvcGVydHk6IFsnY2hlY2tlZCcsICdtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCddLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLy8gU3RhbmRhcmQgUHJvcGVydGllcy5cbiAgICBhYmJyOiBudWxsLFxuICAgIGFjY2VwdDogY29tbWFTZXBhcmF0ZWQsXG4gICAgYWNjZXB0Q2hhcnNldDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZXNzS2V5OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhY3Rpb246IG51bGwsXG4gICAgYWxsb3c6IG51bGwsXG4gICAgYWxsb3dGdWxsU2NyZWVuOiBib29sZWFuLFxuICAgIGFsbG93UGF5bWVudFJlcXVlc3Q6IGJvb2xlYW4sXG4gICAgYWxsb3dVc2VyTWVkaWE6IGJvb2xlYW4sXG4gICAgYWx0OiBudWxsLFxuICAgIGFzOiBudWxsLFxuICAgIGFzeW5jOiBib29sZWFuLFxuICAgIGF1dG9DYXBpdGFsaXplOiBudWxsLFxuICAgIGF1dG9Db21wbGV0ZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXV0b0ZvY3VzOiBib29sZWFuLFxuICAgIGF1dG9QbGF5OiBib29sZWFuLFxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXG4gICAgY2hhclNldDogbnVsbCxcbiAgICBjaGVja2VkOiBib29sZWFuLFxuICAgIGNpdGU6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb2xzOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBjb250cm9sczogYm9vbGVhbixcbiAgICBjb250cm9sc0xpc3Q6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNvb3JkczogbnVtYmVyIHwgY29tbWFTZXBhcmF0ZWQsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBkYXRlVGltZTogbnVsbCxcbiAgICBkZWNvZGluZzogbnVsbCxcbiAgICBkZWZhdWx0OiBib29sZWFuLFxuICAgIGRlZmVyOiBib29sZWFuLFxuICAgIGRpcjogbnVsbCxcbiAgICBkaXJOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBib29sZWFuLFxuICAgIGRvd25sb2FkOiBvdmVybG9hZGVkQm9vbGVhbixcbiAgICBkcmFnZ2FibGU6IGJvb2xlYW5pc2gsXG4gICAgZW5jVHlwZTogbnVsbCxcbiAgICBlbnRlcktleUhpbnQ6IG51bGwsXG4gICAgZm9ybTogbnVsbCxcbiAgICBmb3JtQWN0aW9uOiBudWxsLFxuICAgIGZvcm1FbmNUeXBlOiBudWxsLFxuICAgIGZvcm1NZXRob2Q6IG51bGwsXG4gICAgZm9ybU5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgZm9ybVRhcmdldDogbnVsbCxcbiAgICBoZWFkZXJzOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBoaWRkZW46IGJvb2xlYW4sXG4gICAgaGlnaDogbnVtYmVyLFxuICAgIGhyZWY6IG51bGwsXG4gICAgaHJlZkxhbmc6IG51bGwsXG4gICAgaHRtbEZvcjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaHR0cEVxdWl2OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpZDogbnVsbCxcbiAgICBpbWFnZVNpemVzOiBudWxsLFxuICAgIGltYWdlU3JjU2V0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBpbnB1dE1vZGU6IG51bGwsXG4gICAgaW50ZWdyaXR5OiBudWxsLFxuICAgIGlzOiBudWxsLFxuICAgIGlzTWFwOiBib29sZWFuLFxuICAgIGl0ZW1JZDogbnVsbCxcbiAgICBpdGVtUHJvcDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVJlZjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaXRlbVNjb3BlOiBib29sZWFuLFxuICAgIGl0ZW1UeXBlOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBraW5kOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIGxhbmc6IG51bGwsXG4gICAgbGFuZ3VhZ2U6IG51bGwsXG4gICAgbGlzdDogbnVsbCxcbiAgICBsb29wOiBib29sZWFuLFxuICAgIGxvdzogbnVtYmVyLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIG1heDogbnVsbCxcbiAgICBtYXhMZW5ndGg6IG51bWJlcixcbiAgICBtZWRpYTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWluOiBudWxsLFxuICAgIG1pbkxlbmd0aDogbnVtYmVyLFxuICAgIG11bHRpcGxlOiBib29sZWFuLFxuICAgIG11dGVkOiBib29sZWFuLFxuICAgIG5hbWU6IG51bGwsXG4gICAgbm9uY2U6IG51bGwsXG4gICAgbm9Nb2R1bGU6IGJvb2xlYW4sXG4gICAgbm9WYWxpZGF0ZTogYm9vbGVhbixcbiAgICBvbkFib3J0OiBudWxsLFxuICAgIG9uQWZ0ZXJQcmludDogbnVsbCxcbiAgICBvbkF1eENsaWNrOiBudWxsLFxuICAgIG9uQmVmb3JlUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVVbmxvYWQ6IG51bGwsXG4gICAgb25CbHVyOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvbnRleHRNZW51OiBudWxsLFxuICAgIG9uQ29weTogbnVsbCxcbiAgICBvbkN1ZUNoYW5nZTogbnVsbCxcbiAgICBvbkN1dDogbnVsbCxcbiAgICBvbkRibENsaWNrOiBudWxsLFxuICAgIG9uRHJhZzogbnVsbCxcbiAgICBvbkRyYWdFbmQ6IG51bGwsXG4gICAgb25EcmFnRW50ZXI6IG51bGwsXG4gICAgb25EcmFnRXhpdDogbnVsbCxcbiAgICBvbkRyYWdMZWF2ZTogbnVsbCxcbiAgICBvbkRyYWdPdmVyOiBudWxsLFxuICAgIG9uRHJhZ1N0YXJ0OiBudWxsLFxuICAgIG9uRHJvcDogbnVsbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBudWxsLFxuICAgIG9uRW1wdGllZDogbnVsbCxcbiAgICBvbkVuZGVkOiBudWxsLFxuICAgIG9uRXJyb3I6IG51bGwsXG4gICAgb25Gb2N1czogbnVsbCxcbiAgICBvbkZvcm1EYXRhOiBudWxsLFxuICAgIG9uSGFzaENoYW5nZTogbnVsbCxcbiAgICBvbklucHV0OiBudWxsLFxuICAgIG9uSW52YWxpZDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgb25LZXlQcmVzczogbnVsbCxcbiAgICBvbktleVVwOiBudWxsLFxuICAgIG9uTGFuZ3VhZ2VDaGFuZ2U6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZEVuZDogbnVsbCxcbiAgICBvbkxvYWRTdGFydDogbnVsbCxcbiAgICBvbk1lc3NhZ2U6IG51bGwsXG4gICAgb25NZXNzYWdlRXJyb3I6IG51bGwsXG4gICAgb25Nb3VzZURvd246IG51bGwsXG4gICAgb25Nb3VzZUVudGVyOiBudWxsLFxuICAgIG9uTW91c2VMZWF2ZTogbnVsbCxcbiAgICBvbk1vdXNlTW92ZTogbnVsbCxcbiAgICBvbk1vdXNlT3V0OiBudWxsLFxuICAgIG9uTW91c2VPdmVyOiBudWxsLFxuICAgIG9uTW91c2VVcDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZWplY3Rpb25IYW5kbGVkOiBudWxsLFxuICAgIG9uUmVzZXQ6IG51bGwsXG4gICAgb25SZXNpemU6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgb25TZWN1cml0eVBvbGljeVZpb2xhdGlvbjogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TbG90Q2hhbmdlOiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVuaGFuZGxlZFJlamVjdGlvbjogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25XaGVlbDogbnVsbCxcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIG9wdGltdW06IG51bWJlcixcbiAgICBwYXR0ZXJuOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIHBsYXlzSW5saW5lOiBib29sZWFuLFxuICAgIHBvc3RlcjogbnVsbCxcbiAgICBwcmVsb2FkOiBudWxsLFxuICAgIHJlYWRPbmx5OiBib29sZWFuLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlbDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgcmV2ZXJzZWQ6IGJvb2xlYW4sXG4gICAgcm93czogbnVtYmVyLFxuICAgIHJvd1NwYW46IG51bWJlcixcbiAgICBzYW5kYm94OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBzY29wZTogbnVsbCxcbiAgICBzY29wZWQ6IGJvb2xlYW4sXG4gICAgc2VhbWxlc3M6IGJvb2xlYW4sXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgc2hhcGU6IG51bGwsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHNpemVzOiBudWxsLFxuICAgIHNsb3Q6IG51bGwsXG4gICAgc3BhbjogbnVtYmVyLFxuICAgIHNwZWxsQ2hlY2s6IGJvb2xlYW5pc2gsXG4gICAgc3JjOiBudWxsLFxuICAgIHNyY0RvYzogbnVsbCxcbiAgICBzcmNMYW5nOiBudWxsLFxuICAgIHNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBzdGVwOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRyYW5zbGF0ZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVNdXN0TWF0Y2g6IGJvb2xlYW4sXG4gICAgdXNlTWFwOiBudWxsLFxuICAgIHZhbHVlOiBib29sZWFuaXNoLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgd3JhcDogbnVsbCxcblxuICAgIC8vIExlZ2FjeS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI290aGVyLWVsZW1lbnRzLC1hdHRyaWJ1dGVzLWFuZC1hcGlzXG4gICAgYWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHRleHQtYWxpZ25gIGluc3RlYWQsXG4gICAgYUxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmFjdGl2ZSB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgYXJjaGl2ZTogc3BhY2VTZXBhcmF0ZWQsIC8vIGA8b2JqZWN0PmAuIExpc3Qgb2YgVVJJcyB0byBhcmNoaXZlc1xuICAgIGF4aXM6IG51bGwsIC8vIGA8dGQ+YCBhbmQgYDx0aD5gLiBVc2UgYHNjb3BlYCBvbiBgPHRoPmBcbiAgICBiYWNrZ3JvdW5kOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYmFja2dyb3VuZC1pbWFnZWAgaW5zdGVhZFxuICAgIGJnQ29sb3I6IG51bGwsIC8vIGA8Ym9keT5gIGFuZCB0YWJsZSBlbGVtZW50cy4gVXNlIENTUyBgYmFja2dyb3VuZC1jb2xvcmAgaW5zdGVhZFxuICAgIGJvcmRlcjogbnVtYmVyLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci13aWR0aGAgaW5zdGVhZCxcbiAgICBib3JkZXJDb2xvcjogbnVsbCwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItY29sb3JgIGluc3RlYWQsXG4gICAgYm90dG9tTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgY2VsbFBhZGRpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNlbGxTcGFjaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjaGFyOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBhbGlnbj1jaGFyYCwgc2V0cyB0aGUgY2hhcmFjdGVyIHRvIGFsaWduIG9uXG4gICAgY2hhck9mZjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgY2hhcmAsIG9mZnNldHMgdGhlIGFsaWdubWVudFxuICAgIGNsYXNzSWQ6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjbGVhcjogbnVsbCwgLy8gYDxicj5gLiBVc2UgQ1NTIGBjbGVhcmAgaW5zdGVhZFxuICAgIGNvZGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlQmFzZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVUeXBlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29sb3I6IG51bGwsIC8vIGA8Zm9udD5gIGFuZCBgPGhyPmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGNvbXBhY3Q6IGJvb2xlYW4sIC8vIExpc3RzLiBVc2UgQ1NTIHRvIHJlZHVjZSBzcGFjZSBiZXR3ZWVuIGl0ZW1zIGluc3RlYWRcbiAgICBkZWNsYXJlOiBib29sZWFuLCAvLyBgPG9iamVjdD5gXG4gICAgZXZlbnQ6IG51bGwsIC8vIGA8c2NyaXB0PmBcbiAgICBmYWNlOiBudWxsLCAvLyBgPGZvbnQ+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgZnJhbWU6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGZyYW1lQm9yZGVyOiBudWxsLCAvLyBgPGlmcmFtZT5gLiBVc2UgQ1NTIGBib3JkZXJgIGluc3RlYWRcbiAgICBoU3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuICAgIGxlZnRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBsaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTpsaW5rIHtjb2xvcjogKn1gIGluc3RlYWRcbiAgICBsb25nRGVzYzogbnVsbCwgLy8gYDxmcmFtZT5gLCBgPGlmcmFtZT5gLCBhbmQgYDxpbWc+YC4gVXNlIGFuIGA8YT5gXG4gICAgbG93U3JjOiBudWxsLCAvLyBgPGltZz5gLiBVc2UgYSBgPHBpY3R1cmU+YFxuICAgIG1hcmdpbkhlaWdodDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG1hcmdpbldpZHRoOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbm9SZXNpemU6IGJvb2xlYW4sIC8vIGA8ZnJhbWU+YFxuICAgIG5vSHJlZjogYm9vbGVhbiwgLy8gYDxhcmVhPmAuIFVzZSBubyBocmVmIGluc3RlYWQgb2YgYW4gZXhwbGljaXQgYG5vaHJlZmBcbiAgICBub1NoYWRlOiBib29sZWFuLCAvLyBgPGhyPmAuIFVzZSBiYWNrZ3JvdW5kLWNvbG9yIGFuZCBoZWlnaHQgaW5zdGVhZCBvZiBib3JkZXJzXG4gICAgbm9XcmFwOiBib29sZWFuLCAvLyBgPHRkPmAgYW5kIGA8dGg+YFxuICAgIG9iamVjdDogbnVsbCwgLy8gYDxhcHBsZXQ+YFxuICAgIHByb2ZpbGU6IG51bGwsIC8vIGA8aGVhZD5gXG4gICAgcHJvbXB0OiBudWxsLCAvLyBgPGlzaW5kZXg+YFxuICAgIHJldjogbnVsbCwgLy8gYDxsaW5rPmBcbiAgICByaWdodE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHJ1bGVzOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBzY2hlbWU6IG51bGwsIC8vIGA8bWV0YT5gXG4gICAgc2Nyb2xsaW5nOiBib29sZWFuaXNoLCAvLyBgPGZyYW1lPmAuIFVzZSBvdmVyZmxvdyBpbiB0aGUgY2hpbGQgY29udGV4dFxuICAgIHN0YW5kYnk6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBzdW1tYXJ5OiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICB0ZXh0OiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgY29sb3JgIGluc3RlYWRcbiAgICB0b3BNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICB2YWx1ZVR5cGU6IG51bGwsIC8vIGA8cGFyYW0+YFxuICAgIHZlcnNpb246IG51bGwsIC8vIGA8aHRtbD5gLiBVc2UgYSBkb2N0eXBlLlxuICAgIHZBbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdmVydGljYWwtYWxpZ25gIGluc3RlYWRcbiAgICB2TGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6dmlzaXRlZCB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgdlNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcblxuICAgIC8vIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFsbG93VHJhbnNwYXJlbmN5OiBudWxsLFxuICAgIGF1dG9Db3JyZWN0OiBudWxsLFxuICAgIGF1dG9TYXZlOiBudWxsLFxuICAgIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlOiBib29sZWFuLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICByZXN1bHRzOiBudW1iZXIsXG4gICAgc2VjdXJpdHk6IG51bGwsXG4gICAgdW5zZWxlY3RhYmxlOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG52YXIgY29tbWFPclNwYWNlU2VwYXJhdGVkID0gdHlwZXMuY29tbWFPclNwYWNlU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdzdmcnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgYWNjZW50SGVpZ2h0OiAnYWNjZW50LWhlaWdodCcsXG4gICAgYWxpZ25tZW50QmFzZWxpbmU6ICdhbGlnbm1lbnQtYmFzZWxpbmUnLFxuICAgIGFyYWJpY0Zvcm06ICdhcmFiaWMtZm9ybScsXG4gICAgYmFzZWxpbmVTaGlmdDogJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgICBjYXBIZWlnaHQ6ICdjYXAtaGVpZ2h0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgY2xpcFBhdGg6ICdjbGlwLXBhdGgnLFxuICAgIGNsaXBSdWxlOiAnY2xpcC1ydWxlJyxcbiAgICBjb2xvckludGVycG9sYXRpb246ICdjb2xvci1pbnRlcnBvbGF0aW9uJyxcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJyxcbiAgICBjb2xvclByb2ZpbGU6ICdjb2xvci1wcm9maWxlJyxcbiAgICBjb2xvclJlbmRlcmluZzogJ2NvbG9yLXJlbmRlcmluZycsXG4gICAgY3Jvc3NPcmlnaW46ICdjcm9zc29yaWdpbicsXG4gICAgZGF0YVR5cGU6ICdkYXRhdHlwZScsXG4gICAgZG9taW5hbnRCYXNlbGluZTogJ2RvbWluYW50LWJhc2VsaW5lJyxcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiAnZW5hYmxlLWJhY2tncm91bmQnLFxuICAgIGZpbGxPcGFjaXR5OiAnZmlsbC1vcGFjaXR5JyxcbiAgICBmaWxsUnVsZTogJ2ZpbGwtcnVsZScsXG4gICAgZmxvb2RDb2xvcjogJ2Zsb29kLWNvbG9yJyxcbiAgICBmbG9vZE9wYWNpdHk6ICdmbG9vZC1vcGFjaXR5JyxcbiAgICBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknLFxuICAgIGZvbnRTaXplOiAnZm9udC1zaXplJyxcbiAgICBmb250U2l6ZUFkanVzdDogJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAgIGZvbnRTdHJldGNoOiAnZm9udC1zdHJldGNoJyxcbiAgICBmb250U3R5bGU6ICdmb250LXN0eWxlJyxcbiAgICBmb250VmFyaWFudDogJ2ZvbnQtdmFyaWFudCcsXG4gICAgZm9udFdlaWdodDogJ2ZvbnQtd2VpZ2h0JyxcbiAgICBnbHlwaE5hbWU6ICdnbHlwaC1uYW1lJyxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLFxuICAgIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJyxcbiAgICBocmVmTGFuZzogJ2hyZWZsYW5nJyxcbiAgICBob3JpekFkdlg6ICdob3Jpei1hZHYteCcsXG4gICAgaG9yaXpPcmlnaW5YOiAnaG9yaXotb3JpZ2luLXgnLFxuICAgIGhvcml6T3JpZ2luWTogJ2hvcml6LW9yaWdpbi15JyxcbiAgICBpbWFnZVJlbmRlcmluZzogJ2ltYWdlLXJlbmRlcmluZycsXG4gICAgbGV0dGVyU3BhY2luZzogJ2xldHRlci1zcGFjaW5nJyxcbiAgICBsaWdodGluZ0NvbG9yOiAnbGlnaHRpbmctY29sb3InLFxuICAgIG1hcmtlckVuZDogJ21hcmtlci1lbmQnLFxuICAgIG1hcmtlck1pZDogJ21hcmtlci1taWQnLFxuICAgIG1hcmtlclN0YXJ0OiAnbWFya2VyLXN0YXJ0JyxcbiAgICBuYXZEb3duOiAnbmF2LWRvd24nLFxuICAgIG5hdkRvd25MZWZ0OiAnbmF2LWRvd24tbGVmdCcsXG4gICAgbmF2RG93blJpZ2h0OiAnbmF2LWRvd24tcmlnaHQnLFxuICAgIG5hdkxlZnQ6ICduYXYtbGVmdCcsXG4gICAgbmF2TmV4dDogJ25hdi1uZXh0JyxcbiAgICBuYXZQcmV2OiAnbmF2LXByZXYnLFxuICAgIG5hdlJpZ2h0OiAnbmF2LXJpZ2h0JyxcbiAgICBuYXZVcDogJ25hdi11cCcsXG4gICAgbmF2VXBMZWZ0OiAnbmF2LXVwLWxlZnQnLFxuICAgIG5hdlVwUmlnaHQ6ICduYXYtdXAtcmlnaHQnLFxuICAgIG9uQWJvcnQ6ICdvbmFib3J0JyxcbiAgICBvbkFjdGl2YXRlOiAnb25hY3RpdmF0ZScsXG4gICAgb25BZnRlclByaW50OiAnb25hZnRlcnByaW50JyxcbiAgICBvbkJlZm9yZVByaW50OiAnb25iZWZvcmVwcmludCcsXG4gICAgb25CZWdpbjogJ29uYmVnaW4nLFxuICAgIG9uQ2FuY2VsOiAnb25jYW5jZWwnLFxuICAgIG9uQ2FuUGxheTogJ29uY2FucGxheScsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogJ29uY2FucGxheXRocm91Z2gnLFxuICAgIG9uQ2hhbmdlOiAnb25jaGFuZ2UnLFxuICAgIG9uQ2xpY2s6ICdvbmNsaWNrJyxcbiAgICBvbkNsb3NlOiAnb25jbG9zZScsXG4gICAgb25Db3B5OiAnb25jb3B5JyxcbiAgICBvbkN1ZUNoYW5nZTogJ29uY3VlY2hhbmdlJyxcbiAgICBvbkN1dDogJ29uY3V0JyxcbiAgICBvbkRibENsaWNrOiAnb25kYmxjbGljaycsXG4gICAgb25EcmFnOiAnb25kcmFnJyxcbiAgICBvbkRyYWdFbmQ6ICdvbmRyYWdlbmQnLFxuICAgIG9uRHJhZ0VudGVyOiAnb25kcmFnZW50ZXInLFxuICAgIG9uRHJhZ0V4aXQ6ICdvbmRyYWdleGl0JyxcbiAgICBvbkRyYWdMZWF2ZTogJ29uZHJhZ2xlYXZlJyxcbiAgICBvbkRyYWdPdmVyOiAnb25kcmFnb3ZlcicsXG4gICAgb25EcmFnU3RhcnQ6ICdvbmRyYWdzdGFydCcsXG4gICAgb25Ecm9wOiAnb25kcm9wJyxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiAnb25kdXJhdGlvbmNoYW5nZScsXG4gICAgb25FbXB0aWVkOiAnb25lbXB0aWVkJyxcbiAgICBvbkVuZDogJ29uZW5kJyxcbiAgICBvbkVuZGVkOiAnb25lbmRlZCcsXG4gICAgb25FcnJvcjogJ29uZXJyb3InLFxuICAgIG9uRm9jdXM6ICdvbmZvY3VzJyxcbiAgICBvbkZvY3VzSW46ICdvbmZvY3VzaW4nLFxuICAgIG9uRm9jdXNPdXQ6ICdvbmZvY3Vzb3V0JyxcbiAgICBvbkhhc2hDaGFuZ2U6ICdvbmhhc2hjaGFuZ2UnLFxuICAgIG9uSW5wdXQ6ICdvbmlucHV0JyxcbiAgICBvbkludmFsaWQ6ICdvbmludmFsaWQnLFxuICAgIG9uS2V5RG93bjogJ29ua2V5ZG93bicsXG4gICAgb25LZXlQcmVzczogJ29ua2V5cHJlc3MnLFxuICAgIG9uS2V5VXA6ICdvbmtleXVwJyxcbiAgICBvbkxvYWQ6ICdvbmxvYWQnLFxuICAgIG9uTG9hZGVkRGF0YTogJ29ubG9hZGVkZGF0YScsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogJ29ubG9hZGVkbWV0YWRhdGEnLFxuICAgIG9uTG9hZFN0YXJ0OiAnb25sb2Fkc3RhcnQnLFxuICAgIG9uTWVzc2FnZTogJ29ubWVzc2FnZScsXG4gICAgb25Nb3VzZURvd246ICdvbm1vdXNlZG93bicsXG4gICAgb25Nb3VzZUVudGVyOiAnb25tb3VzZWVudGVyJyxcbiAgICBvbk1vdXNlTGVhdmU6ICdvbm1vdXNlbGVhdmUnLFxuICAgIG9uTW91c2VNb3ZlOiAnb25tb3VzZW1vdmUnLFxuICAgIG9uTW91c2VPdXQ6ICdvbm1vdXNlb3V0JyxcbiAgICBvbk1vdXNlT3ZlcjogJ29ubW91c2VvdmVyJyxcbiAgICBvbk1vdXNlVXA6ICdvbm1vdXNldXAnLFxuICAgIG9uTW91c2VXaGVlbDogJ29ubW91c2V3aGVlbCcsXG4gICAgb25PZmZsaW5lOiAnb25vZmZsaW5lJyxcbiAgICBvbk9ubGluZTogJ29ub25saW5lJyxcbiAgICBvblBhZ2VIaWRlOiAnb25wYWdlaGlkZScsXG4gICAgb25QYWdlU2hvdzogJ29ucGFnZXNob3cnLFxuICAgIG9uUGFzdGU6ICdvbnBhc3RlJyxcbiAgICBvblBhdXNlOiAnb25wYXVzZScsXG4gICAgb25QbGF5OiAnb25wbGF5JyxcbiAgICBvblBsYXlpbmc6ICdvbnBsYXlpbmcnLFxuICAgIG9uUG9wU3RhdGU6ICdvbnBvcHN0YXRlJyxcbiAgICBvblByb2dyZXNzOiAnb25wcm9ncmVzcycsXG4gICAgb25SYXRlQ2hhbmdlOiAnb25yYXRlY2hhbmdlJyxcbiAgICBvblJlcGVhdDogJ29ucmVwZWF0JyxcbiAgICBvblJlc2V0OiAnb25yZXNldCcsXG4gICAgb25SZXNpemU6ICdvbnJlc2l6ZScsXG4gICAgb25TY3JvbGw6ICdvbnNjcm9sbCcsXG4gICAgb25TZWVrZWQ6ICdvbnNlZWtlZCcsXG4gICAgb25TZWVraW5nOiAnb25zZWVraW5nJyxcbiAgICBvblNlbGVjdDogJ29uc2VsZWN0JyxcbiAgICBvblNob3c6ICdvbnNob3cnLFxuICAgIG9uU3RhbGxlZDogJ29uc3RhbGxlZCcsXG4gICAgb25TdG9yYWdlOiAnb25zdG9yYWdlJyxcbiAgICBvblN1Ym1pdDogJ29uc3VibWl0JyxcbiAgICBvblN1c3BlbmQ6ICdvbnN1c3BlbmQnLFxuICAgIG9uVGltZVVwZGF0ZTogJ29udGltZXVwZGF0ZScsXG4gICAgb25Ub2dnbGU6ICdvbnRvZ2dsZScsXG4gICAgb25VbmxvYWQ6ICdvbnVubG9hZCcsXG4gICAgb25Wb2x1bWVDaGFuZ2U6ICdvbnZvbHVtZWNoYW5nZScsXG4gICAgb25XYWl0aW5nOiAnb253YWl0aW5nJyxcbiAgICBvblpvb206ICdvbnpvb20nLFxuICAgIG92ZXJsaW5lUG9zaXRpb246ICdvdmVybGluZS1wb3NpdGlvbicsXG4gICAgb3ZlcmxpbmVUaGlja25lc3M6ICdvdmVybGluZS10aGlja25lc3MnLFxuICAgIHBhaW50T3JkZXI6ICdwYWludC1vcmRlcicsXG4gICAgcGFub3NlMTogJ3Bhbm9zZS0xJyxcbiAgICBwb2ludGVyRXZlbnRzOiAncG9pbnRlci1ldmVudHMnLFxuICAgIHJlZmVycmVyUG9saWN5OiAncmVmZXJyZXJwb2xpY3knLFxuICAgIHJlbmRlcmluZ0ludGVudDogJ3JlbmRlcmluZy1pbnRlbnQnLFxuICAgIHNoYXBlUmVuZGVyaW5nOiAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgICBzdG9wQ29sb3I6ICdzdG9wLWNvbG9yJyxcbiAgICBzdG9wT3BhY2l0eTogJ3N0b3Atb3BhY2l0eScsXG4gICAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsXG4gICAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJyxcbiAgICBzdHJva2VEYXNoQXJyYXk6ICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICBzdHJva2VEYXNoT2Zmc2V0OiAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAgIHN0cm9rZUxpbmVDYXA6ICdzdHJva2UtbGluZWNhcCcsXG4gICAgc3Ryb2tlTGluZUpvaW46ICdzdHJva2UtbGluZWpvaW4nLFxuICAgIHN0cm9rZU1pdGVyTGltaXQ6ICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICAgc3Ryb2tlT3BhY2l0eTogJ3N0cm9rZS1vcGFjaXR5JyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgdGFiSW5kZXg6ICd0YWJpbmRleCcsXG4gICAgdGV4dEFuY2hvcjogJ3RleHQtYW5jaG9yJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgdGV4dFJlbmRlcmluZzogJ3RleHQtcmVuZGVyaW5nJyxcbiAgICB0eXBlT2Y6ICd0eXBlb2YnLFxuICAgIHVuZGVybGluZVBvc2l0aW9uOiAndW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgICB1bmRlcmxpbmVUaGlja25lc3M6ICd1bmRlcmxpbmUtdGhpY2tuZXNzJyxcbiAgICB1bmljb2RlQmlkaTogJ3VuaWNvZGUtYmlkaScsXG4gICAgdW5pY29kZVJhbmdlOiAndW5pY29kZS1yYW5nZScsXG4gICAgdW5pdHNQZXJFbTogJ3VuaXRzLXBlci1lbScsXG4gICAgdkFscGhhYmV0aWM6ICd2LWFscGhhYmV0aWMnLFxuICAgIHZIYW5naW5nOiAndi1oYW5naW5nJyxcbiAgICB2SWRlb2dyYXBoaWM6ICd2LWlkZW9ncmFwaGljJyxcbiAgICB2TWF0aGVtYXRpY2FsOiAndi1tYXRoZW1hdGljYWwnLFxuICAgIHZlY3RvckVmZmVjdDogJ3ZlY3Rvci1lZmZlY3QnLFxuICAgIHZlcnRBZHZZOiAndmVydC1hZHYteScsXG4gICAgdmVydE9yaWdpblg6ICd2ZXJ0LW9yaWdpbi14JyxcbiAgICB2ZXJ0T3JpZ2luWTogJ3ZlcnQtb3JpZ2luLXknLFxuICAgIHdvcmRTcGFjaW5nOiAnd29yZC1zcGFjaW5nJyxcbiAgICB3cml0aW5nTW9kZTogJ3dyaXRpbmctbW9kZScsXG4gICAgeEhlaWdodDogJ3gtaGVpZ2h0JyxcbiAgICAvLyBUaGVzZSB3ZXJlIGNhbWVsY2FzZWQgaW4gVGlueS4gTm93IGxvd2VyY2FzZWQgaW4gU1ZHIDJcbiAgICBwbGF5YmFja09yZGVyOiAncGxheWJhY2tvcmRlcicsXG4gICAgdGltZWxpbmVCZWdpbjogJ3RpbWVsaW5lYmVnaW4nXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFib3V0OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZW50SGVpZ2h0OiBudW1iZXIsXG4gICAgYWNjdW11bGF0ZTogbnVsbCxcbiAgICBhZGRpdGl2ZTogbnVsbCxcbiAgICBhbGlnbm1lbnRCYXNlbGluZTogbnVsbCxcbiAgICBhbHBoYWJldGljOiBudW1iZXIsXG4gICAgYW1wbGl0dWRlOiBudW1iZXIsXG4gICAgYXJhYmljRm9ybTogbnVsbCxcbiAgICBhc2NlbnQ6IG51bWJlcixcbiAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgIGF0dHJpYnV0ZVR5cGU6IG51bGwsXG4gICAgYXppbXV0aDogbnVtYmVyLFxuICAgIGJhbmR3aWR0aDogbnVsbCxcbiAgICBiYXNlbGluZVNoaWZ0OiBudWxsLFxuICAgIGJhc2VGcmVxdWVuY3k6IG51bGwsXG4gICAgYmFzZVByb2ZpbGU6IG51bGwsXG4gICAgYmJveDogbnVsbCxcbiAgICBiZWdpbjogbnVsbCxcbiAgICBiaWFzOiBudW1iZXIsXG4gICAgYnk6IG51bGwsXG4gICAgY2FsY01vZGU6IG51bGwsXG4gICAgY2FwSGVpZ2h0OiBudW1iZXIsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjbGlwOiBudWxsLFxuICAgIGNsaXBQYXRoOiBudWxsLFxuICAgIGNsaXBQYXRoVW5pdHM6IG51bGwsXG4gICAgY2xpcFJ1bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiBudWxsLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IG51bGwsXG4gICAgY29sb3JQcm9maWxlOiBudWxsLFxuICAgIGNvbG9yUmVuZGVyaW5nOiBudWxsLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudFNjcmlwdFR5cGU6IG51bGwsXG4gICAgY29udGVudFN0eWxlVHlwZTogbnVsbCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBjdXJzb3I6IG51bGwsXG4gICAgY3g6IG51bGwsXG4gICAgY3k6IG51bGwsXG4gICAgZDogbnVsbCxcbiAgICBkYXRhVHlwZTogbnVsbCxcbiAgICBkZWZhdWx0QWN0aW9uOiBudWxsLFxuICAgIGRlc2NlbnQ6IG51bWJlcixcbiAgICBkaWZmdXNlQ29uc3RhbnQ6IG51bWJlcixcbiAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgZGlzcGxheTogbnVsbCxcbiAgICBkdXI6IG51bGwsXG4gICAgZGl2aXNvcjogbnVtYmVyLFxuICAgIGRvbWluYW50QmFzZWxpbmU6IG51bGwsXG4gICAgZG93bmxvYWQ6IGJvb2xlYW4sXG4gICAgZHg6IG51bGwsXG4gICAgZHk6IG51bGwsXG4gICAgZWRnZU1vZGU6IG51bGwsXG4gICAgZWRpdGFibGU6IG51bGwsXG4gICAgZWxldmF0aW9uOiBudW1iZXIsXG4gICAgZW5hYmxlQmFja2dyb3VuZDogbnVsbCxcbiAgICBlbmQ6IG51bGwsXG4gICAgZXZlbnQ6IG51bGwsXG4gICAgZXhwb25lbnQ6IG51bWJlcixcbiAgICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiBudWxsLFxuICAgIGZpbGw6IG51bGwsXG4gICAgZmlsbE9wYWNpdHk6IG51bWJlcixcbiAgICBmaWxsUnVsZTogbnVsbCxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgZmlsdGVyUmVzOiBudWxsLFxuICAgIGZpbHRlclVuaXRzOiBudWxsLFxuICAgIGZsb29kQ29sb3I6IG51bGwsXG4gICAgZmxvb2RPcGFjaXR5OiBudWxsLFxuICAgIGZvY3VzYWJsZTogbnVsbCxcbiAgICBmb2N1c0hpZ2hsaWdodDogbnVsbCxcbiAgICBmb250RmFtaWx5OiBudWxsLFxuICAgIGZvbnRTaXplOiBudWxsLFxuICAgIGZvbnRTaXplQWRqdXN0OiBudWxsLFxuICAgIGZvbnRTdHJldGNoOiBudWxsLFxuICAgIGZvbnRTdHlsZTogbnVsbCxcbiAgICBmb250VmFyaWFudDogbnVsbCxcbiAgICBmb250V2VpZ2h0OiBudWxsLFxuICAgIGZvcm1hdDogbnVsbCxcbiAgICBmcjogbnVsbCxcbiAgICBmcm9tOiBudWxsLFxuICAgIGZ4OiBudWxsLFxuICAgIGZ5OiBudWxsLFxuICAgIGcxOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnMjogY29tbWFTZXBhcmF0ZWQsXG4gICAgZ2x5cGhOYW1lOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogbnVsbCxcbiAgICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6IG51bGwsXG4gICAgZ2x5cGhSZWY6IG51bGwsXG4gICAgZ3JhZGllbnRUcmFuc2Zvcm06IG51bGwsXG4gICAgZ3JhZGllbnRVbml0czogbnVsbCxcbiAgICBoYW5kbGVyOiBudWxsLFxuICAgIGhhbmdpbmc6IG51bWJlcixcbiAgICBoYXRjaENvbnRlbnRVbml0czogbnVsbCxcbiAgICBoYXRjaFVuaXRzOiBudWxsLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGhvcml6QWR2WDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWTogbnVtYmVyLFxuICAgIGlkOiBudWxsLFxuICAgIGlkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgaW1hZ2VSZW5kZXJpbmc6IG51bGwsXG4gICAgaW5pdGlhbFZpc2liaWxpdHk6IG51bGwsXG4gICAgaW46IG51bGwsXG4gICAgaW4yOiBudWxsLFxuICAgIGludGVyY2VwdDogbnVtYmVyLFxuICAgIGs6IG51bWJlcixcbiAgICBrMTogbnVtYmVyLFxuICAgIGsyOiBudW1iZXIsXG4gICAgazM6IG51bWJlcixcbiAgICBrNDogbnVtYmVyLFxuICAgIGtlcm5lbE1hdHJpeDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIGtlcm5lbFVuaXRMZW5ndGg6IG51bGwsXG4gICAga2V5UG9pbnRzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtleVNwbGluZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2V5VGltZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2VybmluZzogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxlbmd0aEFkanVzdDogbnVsbCxcbiAgICBsZXR0ZXJTcGFjaW5nOiBudWxsLFxuICAgIGxpZ2h0aW5nQ29sb3I6IG51bGwsXG4gICAgbGltaXRpbmdDb25lQW5nbGU6IG51bWJlcixcbiAgICBsb2NhbDogbnVsbCxcbiAgICBtYXJrZXJFbmQ6IG51bGwsXG4gICAgbWFya2VyTWlkOiBudWxsLFxuICAgIG1hcmtlclN0YXJ0OiBudWxsLFxuICAgIG1hcmtlckhlaWdodDogbnVsbCxcbiAgICBtYXJrZXJVbml0czogbnVsbCxcbiAgICBtYXJrZXJXaWR0aDogbnVsbCxcbiAgICBtYXNrOiBudWxsLFxuICAgIG1hc2tDb250ZW50VW5pdHM6IG51bGwsXG4gICAgbWFza1VuaXRzOiBudWxsLFxuICAgIG1hdGhlbWF0aWNhbDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWVkaWFDaGFyYWN0ZXJFbmNvZGluZzogbnVsbCxcbiAgICBtZWRpYUNvbnRlbnRFbmNvZGluZ3M6IG51bGwsXG4gICAgbWVkaWFTaXplOiBudW1iZXIsXG4gICAgbWVkaWFUaW1lOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbW9kZTogbnVsbCxcbiAgICBuYW1lOiBudWxsLFxuICAgIG5hdkRvd246IG51bGwsXG4gICAgbmF2RG93bkxlZnQ6IG51bGwsXG4gICAgbmF2RG93blJpZ2h0OiBudWxsLFxuICAgIG5hdkxlZnQ6IG51bGwsXG4gICAgbmF2TmV4dDogbnVsbCxcbiAgICBuYXZQcmV2OiBudWxsLFxuICAgIG5hdlJpZ2h0OiBudWxsLFxuICAgIG5hdlVwOiBudWxsLFxuICAgIG5hdlVwTGVmdDogbnVsbCxcbiAgICBuYXZVcFJpZ2h0OiBudWxsLFxuICAgIG51bU9jdGF2ZXM6IG51bGwsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIG9uQWJvcnQ6IG51bGwsXG4gICAgb25BY3RpdmF0ZTogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVQcmludDogbnVsbCxcbiAgICBvbkJlZ2luOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb2N1c0luOiBudWxsLFxuICAgIG9uRm9jdXNPdXQ6IG51bGwsXG4gICAgb25IYXNoQ2hhbmdlOiBudWxsLFxuICAgIG9uSW5wdXQ6IG51bGwsXG4gICAgb25JbnZhbGlkOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIG9uS2V5VXA6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZFN0YXJ0OiBudWxsLFxuICAgIG9uTWVzc2FnZTogbnVsbCxcbiAgICBvbk1vdXNlRG93bjogbnVsbCxcbiAgICBvbk1vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Nb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uTW91c2VNb3ZlOiBudWxsLFxuICAgIG9uTW91c2VPdXQ6IG51bGwsXG4gICAgb25Nb3VzZU92ZXI6IG51bGwsXG4gICAgb25Nb3VzZVVwOiBudWxsLFxuICAgIG9uTW91c2VXaGVlbDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZXBlYXQ6IG51bGwsXG4gICAgb25SZXNldDogbnVsbCxcbiAgICBvblJlc2l6ZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25ab29tOiBudWxsLFxuICAgIG9wYWNpdHk6IG51bGwsXG4gICAgb3BlcmF0b3I6IG51bGwsXG4gICAgb3JkZXI6IG51bGwsXG4gICAgb3JpZW50OiBudWxsLFxuICAgIG9yaWVudGF0aW9uOiBudWxsLFxuICAgIG9yaWdpbjogbnVsbCxcbiAgICBvdmVyZmxvdzogbnVsbCxcbiAgICBvdmVybGF5OiBudWxsLFxuICAgIG92ZXJsaW5lUG9zaXRpb246IG51bWJlcixcbiAgICBvdmVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHBhaW50T3JkZXI6IG51bGwsXG4gICAgcGFub3NlMTogbnVsbCxcbiAgICBwYXRoOiBudWxsLFxuICAgIHBhdGhMZW5ndGg6IG51bWJlcixcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiBudWxsLFxuICAgIHBhdHRlcm5UcmFuc2Zvcm06IG51bGwsXG4gICAgcGF0dGVyblVuaXRzOiBudWxsLFxuICAgIHBoYXNlOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBpdGNoOiBudWxsLFxuICAgIHBsYXliYWNrT3JkZXI6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogbnVsbCxcbiAgICBwb2ludHM6IG51bGwsXG4gICAgcG9pbnRzQXRYOiBudW1iZXIsXG4gICAgcG9pbnRzQXRZOiBudW1iZXIsXG4gICAgcG9pbnRzQXRaOiBudW1iZXIsXG4gICAgcHJlc2VydmVBbHBoYTogbnVsbCxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBudWxsLFxuICAgIHByaW1pdGl2ZVVuaXRzOiBudWxsLFxuICAgIHByb3BhZ2F0ZTogbnVsbCxcbiAgICBwcm9wZXJ0eTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHI6IG51bGwsXG4gICAgcmFkaXVzOiBudWxsLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlZlg6IG51bGwsXG4gICAgcmVmWTogbnVsbCxcbiAgICByZWw6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXY6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZW5kZXJpbmdJbnRlbnQ6IG51bGwsXG4gICAgcmVwZWF0Q291bnQ6IG51bGwsXG4gICAgcmVwZWF0RHVyOiBudWxsLFxuICAgIHJlcXVpcmVkRXh0ZW5zaW9uczogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRmVhdHVyZXM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZvbnRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGb3JtYXRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVzb3VyY2U6IG51bGwsXG4gICAgcmVzdGFydDogbnVsbCxcbiAgICByZXN1bHQ6IG51bGwsXG4gICAgcm90YXRlOiBudWxsLFxuICAgIHJ4OiBudWxsLFxuICAgIHJ5OiBudWxsLFxuICAgIHNjYWxlOiBudWxsLFxuICAgIHNlZWQ6IG51bGwsXG4gICAgc2hhcGVSZW5kZXJpbmc6IG51bGwsXG4gICAgc2lkZTogbnVsbCxcbiAgICBzbG9wZTogbnVsbCxcbiAgICBzbmFwc2hvdFRpbWU6IG51bGwsXG4gICAgc3BlY3VsYXJDb25zdGFudDogbnVtYmVyLFxuICAgIHNwZWN1bGFyRXhwb25lbnQ6IG51bWJlcixcbiAgICBzcHJlYWRNZXRob2Q6IG51bGwsXG4gICAgc3BhY2luZzogbnVsbCxcbiAgICBzdGFydE9mZnNldDogbnVsbCxcbiAgICBzdGREZXZpYXRpb246IG51bGwsXG4gICAgc3RlbWg6IG51bGwsXG4gICAgc3RlbXY6IG51bGwsXG4gICAgc3RpdGNoVGlsZXM6IG51bGwsXG4gICAgc3RvcENvbG9yOiBudWxsLFxuICAgIHN0b3BPcGFjaXR5OiBudWxsLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogbnVtYmVyLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6IG51bWJlcixcbiAgICBzdHJpbmc6IG51bGwsXG4gICAgc3Ryb2tlOiBudWxsLFxuICAgIHN0cm9rZURhc2hBcnJheTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHN0cm9rZURhc2hPZmZzZXQ6IG51bGwsXG4gICAgc3Ryb2tlTGluZUNhcDogbnVsbCxcbiAgICBzdHJva2VMaW5lSm9pbjogbnVsbCxcbiAgICBzdHJva2VNaXRlckxpbWl0OiBudW1iZXIsXG4gICAgc3Ryb2tlT3BhY2l0eTogbnVtYmVyLFxuICAgIHN0cm9rZVdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHN1cmZhY2VTY2FsZTogbnVtYmVyLFxuICAgIHN5bmNCZWhhdmlvcjogbnVsbCxcbiAgICBzeW5jQmVoYXZpb3JEZWZhdWx0OiBudWxsLFxuICAgIHN5bmNNYXN0ZXI6IG51bGwsXG4gICAgc3luY1RvbGVyYW5jZTogbnVsbCxcbiAgICBzeW5jVG9sZXJhbmNlRGVmYXVsdDogbnVsbCxcbiAgICBzeXN0ZW1MYW5ndWFnZTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFibGVWYWx1ZXM6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRhcmdldFg6IG51bWJlcixcbiAgICB0YXJnZXRZOiBudW1iZXIsXG4gICAgdGV4dEFuY2hvcjogbnVsbCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogbnVsbCxcbiAgICB0ZXh0UmVuZGVyaW5nOiBudWxsLFxuICAgIHRleHRMZW5ndGg6IG51bGwsXG4gICAgdGltZWxpbmVCZWdpbjogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0cmFuc2Zvcm1CZWhhdmlvcjogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVPZjogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRvOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICB1MTogbnVsbCxcbiAgICB1MjogbnVsbCxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogbnVtYmVyLFxuICAgIHVuZGVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHVuaWNvZGU6IG51bGwsXG4gICAgdW5pY29kZUJpZGk6IG51bGwsXG4gICAgdW5pY29kZVJhbmdlOiBudWxsLFxuICAgIHVuaXRzUGVyRW06IG51bWJlcixcbiAgICB2YWx1ZXM6IG51bGwsXG4gICAgdkFscGhhYmV0aWM6IG51bWJlcixcbiAgICB2TWF0aGVtYXRpY2FsOiBudW1iZXIsXG4gICAgdmVjdG9yRWZmZWN0OiBudWxsLFxuICAgIHZIYW5naW5nOiBudW1iZXIsXG4gICAgdklkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgdmVyc2lvbjogbnVsbCxcbiAgICB2ZXJ0QWR2WTogbnVtYmVyLFxuICAgIHZlcnRPcmlnaW5YOiBudW1iZXIsXG4gICAgdmVydE9yaWdpblk6IG51bWJlcixcbiAgICB2aWV3Qm94OiBudWxsLFxuICAgIHZpZXdUYXJnZXQ6IG51bGwsXG4gICAgdmlzaWJpbGl0eTogbnVsbCxcbiAgICB3aWR0aDogbnVsbCxcbiAgICB3aWR0aHM6IG51bGwsXG4gICAgd29yZFNwYWNpbmc6IG51bGwsXG4gICAgd3JpdGluZ01vZGU6IG51bGwsXG4gICAgeDogbnVsbCxcbiAgICB4MTogbnVsbCxcbiAgICB4MjogbnVsbCxcbiAgICB4Q2hhbm5lbFNlbGVjdG9yOiBudWxsLFxuICAgIHhIZWlnaHQ6IG51bWJlcixcbiAgICB5OiBudWxsLFxuICAgIHkxOiBudWxsLFxuICAgIHkyOiBudWxsLFxuICAgIHlDaGFubmVsU2VsZWN0b3I6IG51bGwsXG4gICAgejogbnVsbCxcbiAgICB6b29tQW5kUGFuOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSkge1xuICByZXR1cm4gYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMgPyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gOiBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsaXplJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2RlZmluZWQtaW5mbycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbmZ1bmN0aW9uIGNyZWF0ZShkZWZpbml0aW9uKSB7XG4gIHZhciBzcGFjZSA9IGRlZmluaXRpb24uc3BhY2VcbiAgdmFyIG11c3RVc2VQcm9wZXJ0eSA9IGRlZmluaXRpb24ubXVzdFVzZVByb3BlcnR5IHx8IFtdXG4gIHZhciBhdHRyaWJ1dGVzID0gZGVmaW5pdGlvbi5hdHRyaWJ1dGVzIHx8IHt9XG4gIHZhciBwcm9wcyA9IGRlZmluaXRpb24ucHJvcGVydGllc1xuICB2YXIgdHJhbnNmb3JtID0gZGVmaW5pdGlvbi50cmFuc2Zvcm1cbiAgdmFyIHByb3BlcnR5ID0ge31cbiAgdmFyIG5vcm1hbCA9IHt9XG4gIHZhciBwcm9wXG4gIHZhciBpbmZvXG5cbiAgZm9yIChwcm9wIGluIHByb3BzKSB7XG4gICAgaW5mbyA9IG5ldyBEZWZpbmVkSW5mbyhcbiAgICAgIHByb3AsXG4gICAgICB0cmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcCksXG4gICAgICBwcm9wc1twcm9wXSxcbiAgICAgIHNwYWNlXG4gICAgKVxuXG4gICAgaWYgKG11c3RVc2VQcm9wZXJ0eS5pbmRleE9mKHByb3ApICE9PSAtMSkge1xuICAgICAgaW5mby5tdXN0VXNlUHJvcGVydHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcHJvcGVydHlbcHJvcF0gPSBpbmZvXG5cbiAgICBub3JtYWxbbm9ybWFsaXplKHByb3ApXSA9IHByb3BcbiAgICBub3JtYWxbbm9ybWFsaXplKGluZm8uYXR0cmlidXRlKV0gPSBwcm9wXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vaW5mbycpXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbmVkSW5mb1xuXG5EZWZpbmVkSW5mby5wcm90b3R5cGUgPSBuZXcgSW5mbygpXG5EZWZpbmVkSW5mby5wcm90b3R5cGUuZGVmaW5lZCA9IHRydWVcblxudmFyIGNoZWNrcyA9IFtcbiAgJ2Jvb2xlYW4nLFxuICAnYm9vbGVhbmlzaCcsXG4gICdvdmVybG9hZGVkQm9vbGVhbicsXG4gICdudW1iZXInLFxuICAnY29tbWFTZXBhcmF0ZWQnLFxuICAnc3BhY2VTZXBhcmF0ZWQnLFxuICAnY29tbWFPclNwYWNlU2VwYXJhdGVkJ1xuXVxudmFyIGNoZWNrc0xlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuZnVuY3Rpb24gRGVmaW5lZEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSwgbWFzaywgc3BhY2UpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoZWNrXG5cbiAgbWFyayh0aGlzLCAnc3BhY2UnLCBzcGFjZSlcblxuICBJbmZvLmNhbGwodGhpcywgcHJvcGVydHksIGF0dHJpYnV0ZSlcblxuICB3aGlsZSAoKytpbmRleCA8IGNoZWNrc0xlbmd0aCkge1xuICAgIGNoZWNrID0gY2hlY2tzW2luZGV4XVxuICAgIG1hcmsodGhpcywgY2hlY2ssIChtYXNrICYgdHlwZXNbY2hlY2tdKSA9PT0gdHlwZXNbY2hlY2tdKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmsodmFsdWVzLCBrZXksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHZhbHVlc1trZXldID0gdmFsdWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb1xuXG52YXIgcHJvdG8gPSBJbmZvLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLmF0dHJpYnV0ZSA9IG51bGxcbnByb3RvLnByb3BlcnR5ID0gbnVsbFxucHJvdG8uYm9vbGVhbiA9IGZhbHNlXG5wcm90by5ib29sZWFuaXNoID0gZmFsc2VcbnByb3RvLm92ZXJsb2FkZWRCb29sZWFuID0gZmFsc2VcbnByb3RvLm51bWJlciA9IGZhbHNlXG5wcm90by5jb21tYVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5zcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8ubXVzdFVzZVByb3BlcnR5ID0gZmFsc2VcbnByb3RvLmRlZmluZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVxuXG5mdW5jdGlvbiBtZXJnZShkZWZpbml0aW9ucykge1xuICB2YXIgbGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoXG4gIHZhciBwcm9wZXJ0eSA9IFtdXG4gIHZhciBub3JtYWwgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW5mb1xuICB2YXIgc3BhY2VcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGluZm8gPSBkZWZpbml0aW9uc1tpbmRleF1cbiAgICBwcm9wZXJ0eS5wdXNoKGluZm8ucHJvcGVydHkpXG4gICAgbm9ybWFsLnB1c2goaW5mby5ub3JtYWwpXG4gICAgc3BhY2UgPSBpbmZvLnNwYWNlXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShcbiAgICB4dGVuZC5hcHBseShudWxsLCBwcm9wZXJ0eSksXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgbm9ybWFsKSxcbiAgICBzcGFjZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBTY2hlbWFcblxudmFyIHByb3RvID0gU2NoZW1hLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLm5vcm1hbCA9IHt9XG5wcm90by5wcm9wZXJ0eSA9IHt9XG5cbmZ1bmN0aW9uIFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5ub3JtYWwgPSBub3JtYWxcblxuICBpZiAoc3BhY2UpIHtcbiAgICB0aGlzLnNwYWNlID0gc3BhY2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwb3dlcnMgPSAwXG5cbmV4cG9ydHMuYm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLmJvb2xlYW5pc2ggPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5vdmVybG9hZGVkQm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLm51bWJlciA9IGluY3JlbWVudCgpXG5leHBvcnRzLnNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCArK3Bvd2Vycylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bGluaycsXG4gIHRyYW5zZm9ybTogeGxpbmtUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4TGlua0FjdHVhdGU6IG51bGwsXG4gICAgeExpbmtBcmNSb2xlOiBudWxsLFxuICAgIHhMaW5rSHJlZjogbnVsbCxcbiAgICB4TGlua1JvbGU6IG51bGwsXG4gICAgeExpbmtTaG93OiBudWxsLFxuICAgIHhMaW5rVGl0bGU6IG51bGwsXG4gICAgeExpbmtUeXBlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhsaW5rVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bGluazonICsgcHJvcC5zbGljZSg1KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sJyxcbiAgdHJhbnNmb3JtOiB4bWxUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxMYW5nOiBudWxsLFxuICAgIHhtbEJhc2U6IG51bGwsXG4gICAgeG1sU3BhY2U6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geG1sVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bWw6JyArIHByb3Auc2xpY2UoMykudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sbnMnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgeG1sbnN4bGluazogJ3htbG5zOnhsaW5rJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbG5zOiBudWxsLFxuICAgIHhtbG5zWExpbms6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCcuL2xpYi91dGlsL21lcmdlJylcbnZhciB4bGluayA9IHJlcXVpcmUoJy4vbGliL3hsaW5rJylcbnZhciB4bWwgPSByZXF1aXJlKCcuL2xpYi94bWwnKVxudmFyIHhtbG5zID0gcmVxdWlyZSgnLi9saWIveG1sbnMnKVxudmFyIGFyaWEgPSByZXF1aXJlKCcuL2xpYi9hcmlhJylcbnZhciBzdmcgPSByZXF1aXJlKCcuL2xpYi9zdmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgc3ZnXSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgdG9IVE1MID0gcmVxdWlyZSgnaGFzdC11dGlsLXRvLWh0bWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoY29uZmlnKSB7XG4gIHZhciBzZXR0aW5ncyA9IHh0ZW5kKGNvbmZpZywgdGhpcy5kYXRhKCdzZXR0aW5ncycpKVxuXG4gIHRoaXMuQ29tcGlsZXIgPSBjb21waWxlclxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVyKHRyZWUpIHtcbiAgICByZXR1cm4gdG9IVE1MKHRyZWUsIHNldHRpbmdzKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgZW1wdHkgPSAnJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgd2hpdGVTcGFjZSA9IC9bIFxcdFxcblxcclxcZl0rL2dcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KS50cmltKClcbiAgcmV0dXJuIGlucHV0ID09PSBlbXB0eSA/IFtdIDogaW5wdXQuc3BsaXQod2hpdGVTcGFjZSlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLmpvaW4oc3BhY2UpLnRyaW0oKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==