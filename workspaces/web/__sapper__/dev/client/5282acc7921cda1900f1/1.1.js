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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2NvbW1hLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaXMtZWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9jb21tZW50LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9kb2N0eXBlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vcGVuaW5nLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL3V0aWwvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi91dGlsL3NpYmxpbmdzLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL3V0aWwvd2hpdGUtc3BhY2Utc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb25lLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL3Jhdy5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi90ZXh0LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9hcmlhLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvc3ZnLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9kZWZpbmVkLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9pbmZvLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bGluay5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveG1sbnMuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZWh5cGUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvc3BhY2Utc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q1k7QUFDWixpQkFBaUIsbUJBQU8sQ0FBQyxnRUFBTzs7Ozs7Ozs7Ozs7OztBQ0RwQjs7QUFFWixVQUFVLG1CQUFPLENBQUMsOERBQU87O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLDBFQUFvQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELG9CQUFvQjtBQUN0RTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RVk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxrREFBUTtBQUM3QixlQUFlLG1CQUFPLENBQUMsMEVBQW9COztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxvREFBTztBQUMzQixVQUFVLG1CQUFPLENBQUMsZ0ZBQTBCO0FBQzVDLFdBQVcsbUJBQU8sQ0FBQyxrRkFBMkI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLGtGQUF3QjtBQUM3QyxhQUFhLG1CQUFPLENBQUMsa0ZBQXdCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQywwRUFBb0I7QUFDM0MsYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCLFVBQVUsbUJBQU8sQ0FBQyw4REFBTztBQUN6QixnQkFBZ0IsbUJBQU8sQ0FBQywwRUFBYTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLGVBQWU7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsZ0NBQWdDOztBQUU5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFBZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyxrRkFBMkI7QUFDOUMsVUFBVSxtQkFBTyxDQUFDLGdGQUEwQjtBQUM1QyxZQUFZLG1CQUFPLENBQUMsNEVBQW9CO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyw4RUFBWTtBQUNuQyxVQUFVLG1CQUFPLENBQUMsOERBQU87O0FBRXpCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkVZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7QUFDN0MsY0FBYyxtQkFBTyxDQUFDLDhFQUFzQjtBQUM1QyxzQkFBc0IsbUJBQU8sQ0FBQyw2R0FBMEI7QUFDeEQsWUFBWSxtQkFBTyxDQUFDLDJGQUFpQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsaUZBQVk7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JMWTtBQUNaLGtCQUFrQixtQkFBTyxDQUFDLCtFQUFXO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLCtFQUFXOzs7Ozs7Ozs7Ozs7O0FDRnpCOztBQUVaOztBQUVBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7QUFDN0MsY0FBYyxtQkFBTyxDQUFDLDhFQUFzQjtBQUM1QyxhQUFhLG1CQUFPLENBQUMsMkZBQWlCO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxxRkFBYztBQUNsQyxZQUFZLG1CQUFPLENBQUMscUZBQWM7QUFDbEMsc0JBQXNCLG1CQUFPLENBQUMsNkdBQTBCO0FBQ3hELGNBQWMsbUJBQU8sQ0FBQywrRUFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMsaUZBQVk7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqR1k7O0FBRVosWUFBWSxtQkFBTyxDQUFDLHNGQUFZOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUFk7O0FBRVosaUJBQWlCLG1CQUFPLENBQUMsOEVBQXNCOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQlk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLDBFQUF1QjtBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyw4RUFBc0I7O0FBRS9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWlk7O0FBRVo7O0FBRUEsWUFBWTs7QUFFWjs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyw4REFBTztBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyxnRUFBUTtBQUNoQyxtQkFBbUIsbUJBQU8sQ0FBQyxzRUFBVztBQUN0QyxtQkFBbUIsbUJBQU8sQ0FBQyxzRUFBVztBQUN0QyxtQkFBbUIsbUJBQU8sQ0FBQyxzRUFBVztBQUN0QyxlQUFlLG1CQUFPLENBQUMsOERBQU87O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQywwRUFBb0I7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxtQkFBbUI7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCWTs7QUFFWixnQkFBZ0IsbUJBQU8sQ0FBQyx5RUFBYTtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpR0FBeUI7QUFDbkQsV0FBVyxtQkFBTyxDQUFDLGlGQUFpQjs7QUFFcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxtRkFBa0I7QUFDdEMsWUFBWSxtQkFBTyxDQUFDLHlFQUFhO0FBQ2pDLFVBQVUsbUJBQU8sQ0FBQyxxRUFBVztBQUM3QixZQUFZLG1CQUFPLENBQUMseUVBQWE7QUFDakMsV0FBVyxtQkFBTyxDQUFDLHVFQUFZO0FBQy9CLFdBQVcsbUJBQU8sQ0FBQyx1RUFBWTs7QUFFL0I7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsK0VBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLGlGQUFlOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVZOztBQUVaLFlBQVksbUJBQU8sQ0FBQywrRUFBYztBQUNsQyxhQUFhLG1CQUFPLENBQUMsaUZBQWU7QUFDcEMsK0JBQStCLG1CQUFPLENBQUMseUhBQW1DOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsVFc7O0FBRVosWUFBWSxtQkFBTyxDQUFDLCtFQUFjO0FBQ2xDLGFBQWEsbUJBQU8sQ0FBQyxpRkFBZTtBQUNwQyw2QkFBNkIsbUJBQU8sQ0FBQyxxSEFBaUM7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVc7O0FBRTdCOzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyx3RUFBbUI7O0FBRXhDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTI4MmFjYzc5MjFjZGExOTAwZjEvMS4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxudmFyIGNvbW1hID0gJywnXG52YXIgc3BhY2UgPSAnICdcbnZhciBlbXB0eSA9ICcnXG5cbi8vIFBhcnNlIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMgdG8gYW4gYXJyYXkuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KVxuICB2YXIgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hKVxuICB2YXIgbGFzdEluZGV4ID0gMFxuICB2YXIgZW5kID0gZmFsc2VcbiAgdmFyIHZhbFxuXG4gIHdoaWxlICghZW5kKSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBpbnB1dC5sZW5ndGhcbiAgICAgIGVuZCA9IHRydWVcbiAgICB9XG5cbiAgICB2YWwgPSBpbnB1dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KS50cmltKClcblxuICAgIGlmICh2YWwgfHwgIWVuZCkge1xuICAgICAgdmFsdWVzLnB1c2godmFsKVxuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMVxuICAgIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSwgbGFzdEluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuXG4vLyBDb21waWxlIGFuIGFycmF5IHRvIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMuXG4vLyBgb3B0aW9ucy5wYWRMZWZ0YCAoZGVmYXVsdDogYHRydWVgKSBwYWRzIGEgc3BhY2UgbGVmdCBvZiBlYWNoIHRva2VuLCBhbmRcbi8vIGBvcHRpb25zLnBhZFJpZ2h0YCAoZGVmYXVsdDogYGZhbHNlYCkgcGFkcyBhIHNwYWNlIHRvIHRoZSByaWdodCBvZiBlYWNoIHRva2VuLlxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcywgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBsZWZ0ID0gc2V0dGluZ3MucGFkTGVmdCA9PT0gZmFsc2UgPyBlbXB0eSA6IHNwYWNlXG4gIHZhciByaWdodCA9IHNldHRpbmdzLnBhZFJpZ2h0ID8gc3BhY2UgOiBlbXB0eVxuXG4gIC8vIEVuc3VyZSB0aGUgbGFzdCBlbXB0eSBlbnRyeSBpcyBzZWVuLlxuICBpZiAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSA9PT0gZW1wdHkpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGVtcHR5KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKHJpZ2h0ICsgY29tbWEgKyBsZWZ0KS50cmltKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRWxlbWVudFxuXG4vLyBDaGVjayBpZiBpZiBgbm9kZWAgaXMgYW4gYGVsZW1lbnRgIGFuZCwgaWYgYHRhZ05hbWVzYCBpcyBnaXZlbiwgYG5vZGVgXG4vLyBtYXRjaGVzIHRoZW0gYHRhZ05hbWVzYC5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlLCB0YWdOYW1lcykge1xuICB2YXIgbmFtZVxuXG4gIGlmIChcbiAgICAhKFxuICAgICAgdGFnTmFtZXMgPT09IG51bGwgfHxcbiAgICAgIHRhZ05hbWVzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHR5cGVvZiB0YWdOYW1lcyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICh0eXBlb2YgdGFnTmFtZXMgPT09ICdvYmplY3QnICYmIHRhZ05hbWVzLmxlbmd0aCAhPT0gMClcbiAgICApXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdFeHBlY3RlZCBgc3RyaW5nYCBvciBgQXJyYXkuPHN0cmluZz5gIGZvciBgdGFnTmFtZXNgLCBub3QgYCcgK1xuICAgICAgICB0YWdOYW1lcyArXG4gICAgICAgICdgJ1xuICAgIClcbiAgfVxuXG4gIGlmIChcbiAgICAhbm9kZSB8fFxuICAgIHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fFxuICAgIG5vZGUudHlwZSAhPT0gJ2VsZW1lbnQnIHx8XG4gICAgdHlwZW9mIG5vZGUudGFnTmFtZSAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodGFnTmFtZXMgPT09IG51bGwgfHwgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBuYW1lID0gbm9kZS50YWdOYW1lXG5cbiAgaWYgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gdGFnTmFtZXNcbiAgfVxuXG4gIHJldHVybiB0YWdOYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbFxuXG4vLyBTZXJpYWxpemUgYWxsIGNoaWxkcmVuIG9mIGBwYXJlbnRgLlxuZnVuY3Rpb24gYWxsKGN0eCwgcGFyZW50KSB7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0cyA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRzW2luZGV4XSA9IG9uZShjdHgsIGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzLmpvaW4oJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVDb21tZW50XG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2NvbW1lbnRzPlxudmFyIGJyZWFrb3V0ID0gL14+fF4tPnw8IS0tfC0tPnwtLSE+fDwhLSQvZ1xudmFyIHN1YnNldCA9IFsnPCcsICc+J11cbnZhciBib2d1c1N1YnNldCA9IFsnPiddXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUNvbW1lbnQoY3R4LCBub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWVcblxuICBpZiAoY3R4LmJvZ3VzQ29tbWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgJzw/JyArIGVudGl0aWVzKHZhbHVlLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IGJvZ3VzU3Vic2V0fSkpICsgJz4nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuICc8IS0tJyArIHZhbHVlLnJlcGxhY2UoYnJlYWtvdXQsIGVuY29kZSkgKyAnLS0+J1xuXG4gIGZ1bmN0aW9uIGVuY29kZSgkMCkge1xuICAgIHJldHVybiBlbnRpdGllcygkMCwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBzdWJzZXR9KSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIENoYXJhY3RlcnMuXG52YXIgbmlsID0gJ1xcMCdcbnZhciBhbXBlcnNhbmQgPSAnJidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGVxdWFsc1RvID0gJz0nXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIHNsYXNoID0gJy8nXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGNhcnJpYWdlUmV0dXJuID0gJ1xccidcbnZhciBmb3JtRmVlZCA9ICdcXGYnXG5cbnZhciB3aGl0ZXNwYWNlID0gW3NwYWNlLCB0YWIsIGxpbmVGZWVkLCBjYXJyaWFnZVJldHVybiwgZm9ybUZlZWRdXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2F0dHJpYnV0ZS1uYW1lLXN0YXRlPi5cbnZhciBuYW1lID0gd2hpdGVzcGFjZS5jb25jYXQoYW1wZXJzYW5kLCBzbGFzaCwgZ3JlYXRlclRoYW4sIGVxdWFsc1RvKVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNhdHRyaWJ1dGUtdmFsdWUtKHVucXVvdGVkKS1zdGF0ZT4uXG52YXIgdW5xdW90ZWQgPSB3aGl0ZXNwYWNlLmNvbmNhdChhbXBlcnNhbmQsIGdyZWF0ZXJUaGFuKVxudmFyIHVucXVvdGVkU2FmZSA9IHVucXVvdGVkLmNvbmNhdChcbiAgbmlsLFxuICBxdW90YXRpb25NYXJrLFxuICBhcG9zdHJvcGhlLFxuICBsZXNzVGhhbixcbiAgZXF1YWxzVG8sXG4gIGdyYXZlQWNjZW50XG4pXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2F0dHJpYnV0ZS12YWx1ZS0oc2luZ2xlLXF1b3RlZCktc3RhdGU+LlxudmFyIHNpbmdsZVF1b3RlZCA9IFthbXBlcnNhbmQsIGFwb3N0cm9waGVdXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2F0dHJpYnV0ZS12YWx1ZS0oZG91YmxlLXF1b3RlZCktc3RhdGU+LlxudmFyIGRvdWJsZVF1b3RlZCA9IFthbXBlcnNhbmQsIHF1b3RhdGlvbk1hcmtdXG5cbi8vIE1hcHMgb2Ygc3Vic2V0cy5cbi8vIEVhY2ggdmFsdWUgaXMgYSBtYXRyaXggb2YgdHVwbGVzLlxuLy8gVGhlIGZpcnN0IHZhbHVlIGNhdXNlcyBwYXJzZSBlcnJvcnMsIHRoZSBzZWNvbmQgaXMgdmFsaWQuXG4vLyBPZiBib3RoIHZhbHVlcywgdGhlIGZpcnN0IHZhbHVlIGlzIHVuc2FmZSwgYW5kIHRoZSBzZWNvbmQgaXMgc2FmZS5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiBbXG4gICAgW25hbWUsIG5hbWUuY29uY2F0KHF1b3RhdGlvbk1hcmssIGFwb3N0cm9waGUsIGdyYXZlQWNjZW50KV0sXG4gICAgW1xuICAgICAgbmFtZS5jb25jYXQobmlsLCBxdW90YXRpb25NYXJrLCBhcG9zdHJvcGhlLCBsZXNzVGhhbiksXG4gICAgICBuYW1lLmNvbmNhdChuaWwsIHF1b3RhdGlvbk1hcmssIGFwb3N0cm9waGUsIGxlc3NUaGFuLCBncmF2ZUFjY2VudClcbiAgICBdXG4gIF0sXG4gIHVucXVvdGVkOiBbXG4gICAgW3VucXVvdGVkLCB1bnF1b3RlZFNhZmVdLFxuICAgIFt1bnF1b3RlZFNhZmUsIHVucXVvdGVkU2FmZV1cbiAgXSxcbiAgc2luZ2xlOiBbXG4gICAgW3NpbmdsZVF1b3RlZCwgc2luZ2xlUXVvdGVkLmNvbmNhdChxdW90YXRpb25NYXJrLCBncmF2ZUFjY2VudCldLFxuICAgIFtcbiAgICAgIHNpbmdsZVF1b3RlZC5jb25jYXQobmlsKSxcbiAgICAgIHNpbmdsZVF1b3RlZC5jb25jYXQobmlsLCBxdW90YXRpb25NYXJrLCBncmF2ZUFjY2VudClcbiAgICBdXG4gIF0sXG4gIGRvdWJsZTogW1xuICAgIFtkb3VibGVRdW90ZWQsIGRvdWJsZVF1b3RlZC5jb25jYXQoYXBvc3Ryb3BoZSwgZ3JhdmVBY2NlbnQpXSxcbiAgICBbXG4gICAgICBkb3VibGVRdW90ZWQuY29uY2F0KG5pbCksXG4gICAgICBkb3VibGVRdW90ZWQuY29uY2F0KG5pbCwgYXBvc3Ryb3BoZSwgZ3JhdmVBY2NlbnQpXG4gICAgXVxuICBdXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGNjb3VudCA9IHJlcXVpcmUoJ2Njb3VudCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZURvY3R5cGVcblxudmFyIGRvY0xvd2VyID0gJ2RvY3R5cGUnXG52YXIgZG9jVXBwZXIgPSBkb2NMb3dlci50b1VwcGVyQ2FzZSgpXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZURvY3R5cGUoY3R4LCBub2RlKSB7XG4gIHZhciBkb2MgPSBjdHgudXBwZXJEb2N0eXBlID8gZG9jVXBwZXIgOiBkb2NMb3dlclxuICB2YXIgc2VwID0gY3R4LnRpZ2h0RG9jdHlwZSA/ICcnIDogJyAnXG4gIHZhciBuYW1lID0gbm9kZS5uYW1lXG4gIHZhciBwdWIgPSBub2RlLnB1YmxpY1xuICB2YXIgc3lzID0gbm9kZS5zeXN0ZW1cbiAgdmFyIHZhbCA9IFsnPCEnICsgZG9jXVxuXG4gIGlmIChuYW1lKSB7XG4gICAgdmFsLnB1c2goc2VwLCBuYW1lKVxuXG4gICAgaWYgKHB1YiAhPT0gbnVsbCAmJiBwdWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsLnB1c2goJyBwdWJsaWMnLCBzZXAsIHF1b3RlKGN0eCwgcHViKSlcbiAgICB9IGVsc2UgaWYgKHN5cyAhPT0gbnVsbCAmJiBzeXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsLnB1c2goJyBzeXN0ZW0nKVxuICAgIH1cblxuICAgIGlmIChzeXMgIT09IG51bGwgJiYgc3lzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbC5wdXNoKHNlcCwgcXVvdGUoY3R4LCBzeXMpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWwuam9pbignJykgKyAnPidcbn1cblxuZnVuY3Rpb24gcXVvdGUoY3R4LCB2YWx1ZSkge1xuICB2YXIgcHJpbWFyeSA9IGN0eC5xdW90ZVxuICB2YXIgc2Vjb25kYXJ5ID0gY3R4LmFsdGVybmF0aXZlXG4gIHZhciB2YWwgPSBTdHJpbmcodmFsdWUpXG4gIHZhciBxdW90ZSA9XG4gICAgY2NvdW50KHZhbCwgcHJpbWFyeSkgPiBjY291bnQodmFsLCBzZWNvbmRhcnkpID8gc2Vjb25kYXJ5IDogcHJpbWFyeVxuXG4gIHJldHVybiAoXG4gICAgcXVvdGUgK1xuICAgIC8vIFByZXZlbnQgYnJlYWtpbmcgb3V0IG9mIGRvY3R5cGUuXG4gICAgZW50aXRpZXModmFsLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IFsnPCcsICcmJywgcXVvdGVdfSkpICtcbiAgICBxdW90ZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHN2ZyA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL3N2ZycpXG52YXIgZmluZCA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2ZpbmQnKVxudmFyIHNwYWNlcyA9IHJlcXVpcmUoJ3NwYWNlLXNlcGFyYXRlZC10b2tlbnMnKS5zdHJpbmdpZnlcbnZhciBjb21tYXMgPSByZXF1aXJlKCdjb21tYS1zZXBhcmF0ZWQtdG9rZW5zJykuc3RyaW5naWZ5XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxudmFyIGNjb3VudCA9IHJlcXVpcmUoJ2Njb3VudCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi9hbGwnKVxudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVFbGVtZW50XG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgZXF1YWxzVG8gPSAnPSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgc2xhc2ggPSAnLydcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHNlcmlhbGl6ZUVsZW1lbnQoY3R4LCBub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBwYXJlbnRTY2hlbWEgPSBjdHguc2NoZW1hXG4gIHZhciBuYW1lID0gbm9kZS50YWdOYW1lXG4gIHZhciB2YWx1ZSA9ICcnXG4gIHZhciBzZWxmQ2xvc2luZ1xuICB2YXIgY2xvc2VcbiAgdmFyIG9taXRcbiAgdmFyIHJvb3QgPSBub2RlXG4gIHZhciBjb250ZW50XG4gIHZhciBhdHRyc1xuICB2YXIgbGFzdFxuXG4gIGlmIChwYXJlbnRTY2hlbWEuc3BhY2UgPT09ICdodG1sJyAmJiBuYW1lID09PSAnc3ZnJykge1xuICAgIGN0eC5zY2hlbWEgPSBzdmdcbiAgfVxuXG4gIGF0dHJzID0gc2VyaWFsaXplQXR0cmlidXRlcyhjdHgsIG5vZGUucHJvcGVydGllcylcblxuICBpZiAoY3R4LnNjaGVtYS5zcGFjZSA9PT0gJ3N2ZycpIHtcbiAgICBvbWl0ID0gZmFsc2VcbiAgICBjbG9zZSA9IHRydWVcbiAgICBzZWxmQ2xvc2luZyA9IGN0eC5jbG9zZUVtcHR5XG4gIH0gZWxzZSB7XG4gICAgb21pdCA9IGN0eC5vbWl0XG4gICAgY2xvc2UgPSBjdHguY2xvc2VcbiAgICBzZWxmQ2xvc2luZyA9IGN0eC52b2lkcy5pbmRleE9mKG5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG5cbiAgICBpZiAobmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgcm9vdCA9IG5vZGUuY29udGVudFxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSBhbGwoY3R4LCByb290KVxuXG4gIC8vIElmIHRoZSBub2RlIGlzIGNhdGVnb3Jpc2VkIGFzIHZvaWQsIGJ1dCBpdCBoYXMgY2hpbGRyZW4sIHJlbW92ZSB0aGVcbiAgLy8gY2F0ZWdvcmlzYXRpb24uXG4gIC8vIFRoaXMgZW5hYmxlcyBmb3IgZXhhbXBsZSBgbWVudWl0ZW1gcywgd2hpY2ggYXJlIHZvaWQgaW4gVzNDIEhUTUwgYnV0IG5vdFxuICAvLyB2b2lkIGluIFdIQVRXRyBIVE1MLCB0byBiZSBzdHJpbmdpZmllZCBwcm9wZXJseS5cbiAgc2VsZkNsb3NpbmcgPSBjb250ZW50ID8gZmFsc2UgOiBzZWxmQ2xvc2luZ1xuXG4gIGlmIChhdHRycyB8fCAhb21pdCB8fCAhb21pdC5vcGVuaW5nKG5vZGUsIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgdmFsdWUgPSBsZXNzVGhhbiArIG5hbWUgKyAoYXR0cnMgPyBzcGFjZSArIGF0dHJzIDogJycpXG5cbiAgICBpZiAoc2VsZkNsb3NpbmcgJiYgY2xvc2UpIHtcbiAgICAgIGxhc3QgPSBhdHRycy5jaGFyQXQoYXR0cnMubGVuZ3RoIC0gMSlcbiAgICAgIGlmIChcbiAgICAgICAgIWN0eC50aWdodENsb3NlIHx8XG4gICAgICAgIGxhc3QgPT09IHNsYXNoIHx8XG4gICAgICAgIChjdHguc2NoZW1hLnNwYWNlID09PSAnc3ZnJyAmJlxuICAgICAgICAgIGxhc3QgJiZcbiAgICAgICAgICBsYXN0ICE9PSBxdW90YXRpb25NYXJrICYmXG4gICAgICAgICAgbGFzdCAhPT0gYXBvc3Ryb3BoZSlcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSArPSBzcGFjZVxuICAgICAgfVxuXG4gICAgICB2YWx1ZSArPSBzbGFzaFxuICAgIH1cblxuICAgIHZhbHVlICs9IGdyZWF0ZXJUaGFuXG4gIH1cblxuICB2YWx1ZSArPSBjb250ZW50XG5cbiAgaWYgKCFzZWxmQ2xvc2luZyAmJiAoIW9taXQgfHwgIW9taXQuY2xvc2luZyhub2RlLCBpbmRleCwgcGFyZW50KSkpIHtcbiAgICB2YWx1ZSArPSBsZXNzVGhhbiArIHNsYXNoICsgbmFtZSArIGdyZWF0ZXJUaGFuXG4gIH1cblxuICBjdHguc2NoZW1hID0gcGFyZW50U2NoZW1hXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUF0dHJpYnV0ZXMoY3R4LCBwcm9wcykge1xuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcbiAgdmFyIHJlc3VsdFxuICB2YXIgbGVuZ3RoXG4gIHZhciBpbmRleFxuICB2YXIgbGFzdFxuXG4gIGZvciAoa2V5IGluIHByb3BzKSB7XG4gICAgdmFsdWUgPSBwcm9wc1trZXldXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzZXJpYWxpemVBdHRyaWJ1dGUoY3R4LCBrZXksIHZhbHVlKVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdmFsdWVzLnB1c2gocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gdmFsdWVzW2luZGV4XVxuICAgIGxhc3QgPSBudWxsXG5cbiAgICBpZiAoY3R4LnRpZ2h0KSB7XG4gICAgICBsYXN0ID0gcmVzdWx0LmNoYXJBdChyZXN1bHQubGVuZ3RoIC0gMSlcbiAgICB9XG5cbiAgICAvLyBJbiB0aWdodCBtb2RlLCBkb27igJl0IGFkZCBhIHNwYWNlIGFmdGVyIHF1b3RlZCBhdHRyaWJ1dGVzLlxuICAgIGlmIChpbmRleCAhPT0gbGVuZ3RoIC0gMSAmJiBsYXN0ICE9PSBxdW90YXRpb25NYXJrICYmIGxhc3QgIT09IGFwb3N0cm9waGUpIHtcbiAgICAgIHZhbHVlc1tpbmRleF0gPSByZXN1bHQgKyBzcGFjZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbignJylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlKGN0eCwga2V5LCB2YWx1ZSkge1xuICB2YXIgc2NoZW1hID0gY3R4LnNjaGVtYVxuICB2YXIgaW5mbyA9IGZpbmQoc2NoZW1hLCBrZXkpXG4gIHZhciBuYW1lID0gaW5mby5hdHRyaWJ1dGVcblxuICBpZiAoaW5mby5vdmVybG9hZGVkQm9vbGVhbiAmJiAodmFsdWUgPT09IG5hbWUgfHwgdmFsdWUgPT09ICcnKSkge1xuICAgIHZhbHVlID0gdHJ1ZVxuICB9IGVsc2UgaWYgKFxuICAgIGluZm8uYm9vbGVhbiB8fFxuICAgIChpbmZvLm92ZXJsb2FkZWRCb29sZWFuICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpXG4gICkge1xuICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIGlmIChcbiAgICB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgIHZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpXG4gICkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgbmFtZSA9IHNlcmlhbGl6ZUF0dHJpYnV0ZU5hbWUoY3R4LCBuYW1lKVxuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIC8vIFRoZXJlIGlzIGN1cnJlbnRseSBvbmx5IG9uZSBib29sZWFuIHByb3BlcnR5IGluIFNWRzogYFtkb3dubG9hZF1gIG9uXG4gICAgLy8gYDxhPmAuXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBkb2VzIG5vdCBzZWVtIHRvIHdvcmsgaW4gYnJvd3NlcnMgKEZGLCBTYSwgQ2gpLCBzbyBJIGNhbuKAmXRcbiAgICAvLyB0ZXN0IGlmIGRyb3BwaW5nIHRoZSB2YWx1ZSB3b3Jrcy5cbiAgICAvLyBCdXQgSSBhc3N1bWUgdGhhdCBpdCBzaG91bGQ6XG4gICAgLy9cbiAgICAvLyBgYGBodG1sXG4gICAgLy8gPCFkb2N0eXBlIGh0bWw+XG4gICAgLy8gPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICAvLyAgIDxhIGhyZWY9aHR0cHM6Ly9leGFtcGxlLmNvbSBkb3dubG9hZD5cbiAgICAvLyAgICAgPGNpcmNsZSBjeD01MCBjeT00MCByPTM1IC8+XG4gICAgLy8gICA8L2E+XG4gICAgLy8gPC9zdmc+XG4gICAgLy8gYGBgXG4gICAgLy9cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL3Byb3BlcnR5LWluZm9ybWF0aW9uL2Jsb2IvbWFzdGVyL2xpYi9zdmcuanM+XG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIHJldHVybiBuYW1lICsgc2VyaWFsaXplQXR0cmlidXRlVmFsdWUoY3R4LCBrZXksIHZhbHVlLCBpbmZvKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVOYW1lKGN0eCwgbmFtZSkge1xuICAvLyBBbHdheXMgZW5jb2RlIHdpdGhvdXQgcGFyc2UgZXJyb3JzIGluIG5vbi1IVE1MLlxuICB2YXIgdmFsaWQgPSBjdHguc2NoZW1hLnNwYWNlID09PSAnaHRtbCcgPyBjdHgudmFsaWQgOiAxXG4gIHZhciBzdWJzZXQgPSBjb25zdGFudHMubmFtZVt2YWxpZF1bY3R4LnNhZmVdXG5cbiAgcmV0dXJuIGVudGl0aWVzKG5hbWUsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogc3Vic2V0fSkpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUF0dHJpYnV0ZVZhbHVlKGN0eCwga2V5LCB2YWx1ZSwgaW5mbykge1xuICB2YXIgb3B0aW9ucyA9IGN0eC5lbnRpdGllc1xuICB2YXIgcXVvdGUgPSBjdHgucXVvdGVcbiAgdmFyIGFsdGVybmF0aXZlID0gY3R4LmFsdGVybmF0aXZlXG4gIHZhciBzbWFydCA9IGN0eC5zbWFydFxuICB2YXIgdW5xdW90ZWRcbiAgdmFyIHN1YnNldFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgLy8gYHNwYWNlc2AgZG9lc27igJl0IGFjY2VwdCBhIHNlY29uZCBhcmd1bWVudCwgYnV0IGl04oCZcyBnaXZlbiBoZXJlIGp1c3QgdG9cbiAgICAvLyBrZWVwIHRoZSBjb2RlIGNsZWFuZXIuXG4gICAgdmFsdWUgPSAoaW5mby5jb21tYVNlcGFyYXRlZCA/IGNvbW1hcyA6IHNwYWNlcykodmFsdWUsIHtcbiAgICAgIHBhZExlZnQ6ICFjdHgudGlnaHRMaXN0c1xuICAgIH0pXG4gIH1cblxuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblxuICBpZiAodmFsdWUgfHwgIWN0eC5jb2xsYXBzZUVtcHR5KSB7XG4gICAgdW5xdW90ZWQgPSB2YWx1ZVxuXG4gICAgLy8gQ2hlY2sgdW5xdW90ZWQgdmFsdWUuXG4gICAgaWYgKGN0eC51bnF1b3RlZCkge1xuICAgICAgc3Vic2V0ID0gY29uc3RhbnRzLnVucXVvdGVkW2N0eC52YWxpZF1bY3R4LnNhZmVdXG4gICAgICB1bnF1b3RlZCA9IGVudGl0aWVzKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgeHRlbmQob3B0aW9ucywge3N1YnNldDogc3Vic2V0LCBhdHRyaWJ1dGU6IHRydWV9KVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIElmIGB2YWx1ZWAgY29udGFpbnMgZW50aXRpZXMgd2hlbiB1bnF1b3RlZOKAplxuICAgIGlmICghY3R4LnVucXVvdGVkIHx8IHVucXVvdGVkICE9PSB2YWx1ZSkge1xuICAgICAgLy8gSWYgdGhlIGFsdGVybmF0aXZlIGlzIGxlc3MgY29tbW9uIHRoYW4gYHF1b3RlYCwgc3dpdGNoLlxuICAgICAgaWYgKHNtYXJ0ICYmIGNjb3VudCh2YWx1ZSwgcXVvdGUpID4gY2NvdW50KHZhbHVlLCBhbHRlcm5hdGl2ZSkpIHtcbiAgICAgICAgcXVvdGUgPSBhbHRlcm5hdGl2ZVxuICAgICAgfVxuXG4gICAgICBzdWJzZXQgPSBxdW90ZSA9PT0gYXBvc3Ryb3BoZSA/IGNvbnN0YW50cy5zaW5nbGUgOiBjb25zdGFudHMuZG91YmxlXG4gICAgICAvLyBBbHdheXMgZW5jb2RlIHdpdGhvdXQgcGFyc2UgZXJyb3JzIGluIG5vbi1IVE1MLlxuICAgICAgc3Vic2V0ID0gc3Vic2V0W2N0eC5zY2hlbWEuc3BhY2UgPT09ICdodG1sJyA/IGN0eC52YWxpZCA6IDFdW2N0eC5zYWZlXVxuXG4gICAgICB2YWx1ZSA9IGVudGl0aWVzKHZhbHVlLCB4dGVuZChvcHRpb25zLCB7c3Vic2V0OiBzdWJzZXQsIGF0dHJpYnV0ZTogdHJ1ZX0pKVxuXG4gICAgICB2YWx1ZSA9IHF1b3RlICsgdmFsdWUgKyBxdW90ZVxuICAgIH1cblxuICAgIC8vIERvbuKAmXQgYWRkIGEgYD1gIGZvciB1bnF1b3RlZCBlbXB0aWVzLlxuICAgIHZhbHVlID0gdmFsdWUgPyBlcXVhbHNUbyArIHZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBodG1sID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vaHRtbCcpXG52YXIgc3ZnID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vc3ZnJylcbnZhciB2b2lkcyA9IHJlcXVpcmUoJ2h0bWwtdm9pZC1lbGVtZW50cycpXG52YXIgb21pc3Npb24gPSByZXF1aXJlKCcuL29taXNzaW9uJylcbnZhciBvbmUgPSByZXF1aXJlKCcuL29uZScpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9IdG1sXG5cbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nSXNzdWVkID0gZmFsc2VcblxuZnVuY3Rpb24gdG9IdG1sKG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcXVvdGUgPSBzZXR0aW5ncy5xdW90ZSB8fCBxdW90YXRpb25NYXJrXG4gIHZhciBhbHRlcm5hdGl2ZSA9IHF1b3RlID09PSBxdW90YXRpb25NYXJrID8gYXBvc3Ryb3BoZSA6IHF1b3RhdGlvbk1hcmtcbiAgdmFyIHNtYXJ0ID0gc2V0dGluZ3MucXVvdGVTbWFydFxuICB2YXIgdmFsdWUgPVxuICAgIG5vZGUgJiYgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIG5vZGVcbiAgICAgID8ge3R5cGU6ICdyb290JywgY2hpbGRyZW46IG5vZGV9XG4gICAgICA6IG5vZGVcblxuICBpZiAocXVvdGUgIT09IHF1b3RhdGlvbk1hcmsgJiYgcXVvdGUgIT09IGFwb3N0cm9waGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnSW52YWxpZCBxdW90ZSBgJyArXG4gICAgICAgIHF1b3RlICtcbiAgICAgICAgJ2AsIGV4cGVjdGVkIGAnICtcbiAgICAgICAgYXBvc3Ryb3BoZSArXG4gICAgICAgICdgIG9yIGAnICtcbiAgICAgICAgcXVvdGF0aW9uTWFyayArXG4gICAgICAgICdgJ1xuICAgIClcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghZGVwcmVjYXRpb25XYXJuaW5nSXNzdWVkKSB7XG4gICAgICBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdEZXByZWNhdGlvbiB3YXJuaW5nOiBgYWxsb3dEYW5nZXJvdXNIVE1MYCBpcyBhIG5vbnN0YW5kYXJkIG9wdGlvbiwgdXNlIGBhbGxvd0Rhbmdlcm91c0h0bWxgIGluc3RlYWQnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9uZShcbiAgICB7XG4gICAgICB2YWxpZDogc2V0dGluZ3MuYWxsb3dQYXJzZUVycm9ycyA/IDAgOiAxLFxuICAgICAgc2FmZTogc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNDaGFyYWN0ZXJzID8gMCA6IDEsXG4gICAgICBzY2hlbWE6IHNldHRpbmdzLnNwYWNlID09PSAnc3ZnJyA/IHN2ZyA6IGh0bWwsXG4gICAgICBvbWl0OiBzZXR0aW5ncy5vbWl0T3B0aW9uYWxUYWdzICYmIG9taXNzaW9uLFxuICAgICAgcXVvdGU6IHF1b3RlLFxuICAgICAgYWx0ZXJuYXRpdmU6IGFsdGVybmF0aXZlLFxuICAgICAgc21hcnQ6IHNtYXJ0LFxuICAgICAgdW5xdW90ZWQ6IEJvb2xlYW4oc2V0dGluZ3MucHJlZmVyVW5xdW90ZWQpLFxuICAgICAgdGlnaHQ6IHNldHRpbmdzLnRpZ2h0QXR0cmlidXRlcyxcbiAgICAgIHVwcGVyRG9jdHlwZTogQm9vbGVhbihzZXR0aW5ncy51cHBlckRvY3R5cGUpLFxuICAgICAgdGlnaHREb2N0eXBlOiBCb29sZWFuKHNldHRpbmdzLnRpZ2h0RG9jdHlwZSksXG4gICAgICBib2d1c0NvbW1lbnRzOiBCb29sZWFuKHNldHRpbmdzLmJvZ3VzQ29tbWVudHMpLFxuICAgICAgdGlnaHRMaXN0czogc2V0dGluZ3MudGlnaHRDb21tYVNlcGFyYXRlZExpc3RzLFxuICAgICAgdGlnaHRDbG9zZTogc2V0dGluZ3MudGlnaHRTZWxmQ2xvc2luZyxcbiAgICAgIGNvbGxhcHNlRW1wdHk6IHNldHRpbmdzLmNvbGxhcHNlRW1wdHlBdHRyaWJ1dGVzLFxuICAgICAgZGFuZ2Vyb3VzOiBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0h0bWwgfHwgc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIVE1MLFxuICAgICAgdm9pZHM6IHNldHRpbmdzLnZvaWRzIHx8IHZvaWRzLmNvbmNhdCgpLFxuICAgICAgZW50aXRpZXM6IHNldHRpbmdzLmVudGl0aWVzIHx8IHt9LFxuICAgICAgY2xvc2U6IHNldHRpbmdzLmNsb3NlU2VsZkNsb3NpbmcsXG4gICAgICBjbG9zZUVtcHR5OiBzZXR0aW5ncy5jbG9zZUVtcHR5RWxlbWVudHNcbiAgICB9LFxuICAgIHZhbHVlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgZWxlbWVudCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciB3aGl0ZVNwYWNlU3RhcnQgPSByZXF1aXJlKCcuL3V0aWwvd2hpdGUtc3BhY2Utc3RhcnQnKVxudmFyIGFmdGVyID0gcmVxdWlyZSgnLi91dGlsL3NpYmxpbmdzJykuYWZ0ZXJcbnZhciBvbWlzc2lvbiA9IHJlcXVpcmUoJy4vb21pc3Npb24nKVxuXG52YXIgaXNDb21tZW50ID0gY29udmVydCgnY29tbWVudCcpXG5cbnZhciBvcHRpb25Hcm91cCA9ICdvcHRncm91cCdcbnZhciBvcHRpb25zID0gWydvcHRpb24nXS5jb25jYXQob3B0aW9uR3JvdXApXG52YXIgZGF0YUxpc3RJdGVtID0gWydkdCcsICdkZCddXG52YXIgbGlzdEl0ZW0gPSAnbGknXG52YXIgbWVudUNvbnRlbnQgPSBbJ21lbnVpdGVtJywgJ2hyJywgJ21lbnUnXVxudmFyIHJ1YnkgPSBbJ3JwJywgJ3J0J11cbnZhciB0YWJsZUNvbnRhaW5lciA9IFsndGJvZHknLCAndGZvb3QnXVxudmFyIHRhYmxlUm93ID0gJ3RyJ1xudmFyIHRhYmxlQ2VsbCA9IFsndGQnLCAndGgnXVxuXG52YXIgY29uZnVzaW5nUGFyYWdyYXBoUGFyZW50ID0gW1xuICAnYScsXG4gICdhdWRpbycsXG4gICdkZWwnLFxuICAnaW5zJyxcbiAgJ21hcCcsXG4gICdub3NjcmlwdCcsXG4gICd2aWRlbydcbl1cblxudmFyIGNsZWFyUGFyYWdyYXBoU2libGluZyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2RldGFpbHMnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnbWFpbicsXG4gICdtZW51JyxcbiAgJ25hdicsXG4gICdvbCcsXG4gICdwJyxcbiAgJ3ByZScsXG4gICdzZWN0aW9uJyxcbiAgJ3RhYmxlJyxcbiAgJ3VsJ1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9taXNzaW9uKHtcbiAgaHRtbDogaHRtbCxcbiAgaGVhZDogaGVhZE9yQ29sZ3JvdXBPckNhcHRpb24sXG4gIGJvZHk6IGJvZHksXG4gIHA6IHAsXG4gIGxpOiBsaSxcbiAgZHQ6IGR0LFxuICBkZDogZGQsXG4gIHJ0OiBydWJ5RWxlbWVudCxcbiAgcnA6IHJ1YnlFbGVtZW50LFxuICBvcHRncm91cDogb3B0Z3JvdXAsXG4gIG9wdGlvbjogb3B0aW9uLFxuICBtZW51aXRlbTogbWVudWl0ZW0sXG4gIGNvbGdyb3VwOiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbixcbiAgY2FwdGlvbjogaGVhZE9yQ29sZ3JvdXBPckNhcHRpb24sXG4gIHRoZWFkOiB0aGVhZCxcbiAgdGJvZHk6IHRib2R5LFxuICB0Zm9vdDogdGZvb3QsXG4gIHRyOiB0cixcbiAgdGQ6IGNlbGxzLFxuICB0aDogY2VsbHNcbn0pXG5cbi8vIE1hY3JvIGZvciBgPC9oZWFkPmAsIGA8L2NvbGdyb3VwPmAsIGFuZCBgPC9jYXB0aW9uPmAuXG5mdW5jdGlvbiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleCwgdHJ1ZSlcbiAgcmV0dXJuICFuZXh0IHx8ICghaXNDb21tZW50KG5leHQpICYmICF3aGl0ZVNwYWNlU3RhcnQobmV4dCkpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9odG1sPmAuXG5mdW5jdGlvbiBodG1sKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgIWlzQ29tbWVudChuZXh0KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvYm9keT5gLlxuZnVuY3Rpb24gYm9keShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8ICFpc0NvbW1lbnQobmV4dClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3A+YC5cbmZ1bmN0aW9uIHAobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiBuZXh0XG4gICAgPyBlbGVtZW50KG5leHQsIGNsZWFyUGFyYWdyYXBoU2libGluZylcbiAgICA6ICFwYXJlbnQgfHwgIWVsZW1lbnQocGFyZW50LCBjb25mdXNpbmdQYXJhZ3JhcGhQYXJlbnQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9saT5gLlxuZnVuY3Rpb24gbGkobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIGxpc3RJdGVtKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvZHQ+YC5cbmZ1bmN0aW9uIGR0KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gbmV4dCAmJiBlbGVtZW50KG5leHQsIGRhdGFMaXN0SXRlbSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2RkPmAuXG5mdW5jdGlvbiBkZChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgZGF0YUxpc3RJdGVtKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvcnQ+YCBvciBgPC9ycD5gLlxuZnVuY3Rpb24gcnVieUVsZW1lbnQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIHJ1YnkpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9vcHRncm91cD5gLlxuZnVuY3Rpb24gb3B0Z3JvdXAobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIG9wdGlvbkdyb3VwKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvb3B0aW9uPmAuXG5mdW5jdGlvbiBvcHRpb24obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIG9wdGlvbnMpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9tZW51aXRlbT5gLlxuZnVuY3Rpb24gbWVudWl0ZW0obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIG1lbnVDb250ZW50KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdGhlYWQ+YC5cbmZ1bmN0aW9uIHRoZWFkKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gbmV4dCAmJiBlbGVtZW50KG5leHQsIHRhYmxlQ29udGFpbmVyKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdGJvZHk+YC5cbmZ1bmN0aW9uIHRib2R5KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCB0YWJsZUNvbnRhaW5lcilcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3Rmb290PmAuXG5mdW5jdGlvbiB0Zm9vdChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHJldHVybiAhYWZ0ZXIocGFyZW50LCBpbmRleClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3RyPmAuXG5mdW5jdGlvbiB0cihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgdGFibGVSb3cpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90ZD5gIG9yIGA8L3RoPmAuXG5mdW5jdGlvbiBjZWxscyhub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgdGFibGVDZWxsKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5leHBvcnRzLm9wZW5pbmcgPSByZXF1aXJlKCcuL29wZW5pbmcnKVxuZXhwb3J0cy5jbG9zaW5nID0gcmVxdWlyZSgnLi9jbG9zaW5nJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9taXNzaW9uXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBGYWN0b3J5IHRvIGNoZWNrIGlmIGEgZ2l2ZW4gbm9kZSBjYW4gaGF2ZSBhIHRhZyBvbWl0dGVkLlxuZnVuY3Rpb24gb21pc3Npb24oaGFuZGxlcnMpIHtcbiAgcmV0dXJuIG9taXRcblxuICAvLyBDaGVjayBpZiBhIGdpdmVuIG5vZGUgY2FuIGhhdmUgYSB0YWcgb21pdHRlZC5cbiAgZnVuY3Rpb24gb21pdChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBub2RlLnRhZ05hbWVcblxuICAgIHJldHVybiBvd24uY2FsbChoYW5kbGVycywgbmFtZSlcbiAgICAgID8gaGFuZGxlcnNbbmFtZV0obm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICAgIDogZmFsc2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBlbGVtZW50ID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIGJlZm9yZSA9IHJlcXVpcmUoJy4vdXRpbC9zaWJsaW5ncycpLmJlZm9yZVxudmFyIGZpcnN0ID0gcmVxdWlyZSgnLi91dGlsL2ZpcnN0JylcbnZhciBwbGFjZSA9IHJlcXVpcmUoJy4vdXRpbC9wbGFjZScpXG52YXIgd2hpdGVTcGFjZVN0YXJ0ID0gcmVxdWlyZSgnLi91dGlsL3doaXRlLXNwYWNlLXN0YXJ0JylcbnZhciBjbG9zaW5nID0gcmVxdWlyZSgnLi9jbG9zaW5nJylcbnZhciBvbWlzc2lvbiA9IHJlcXVpcmUoJy4vb21pc3Npb24nKVxuXG52YXIgaXNDb21tZW50ID0gY29udmVydCgnY29tbWVudCcpXG5cbnZhciB1bmlxdWVIZWFkTWV0YWRhdGEgPSBbJ3RpdGxlJywgJ2Jhc2UnXVxudmFyIG1ldGEgPSBbJ21ldGEnLCAnbGluaycsICdzY3JpcHQnLCAnc3R5bGUnLCAndGVtcGxhdGUnXVxudmFyIHRhYmxlQ29udGFpbmVycyA9IFsndGhlYWQnLCAndGJvZHknXVxudmFyIHRhYmxlUm93ID0gJ3RyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9taXNzaW9uKHtcbiAgaHRtbDogaHRtbCxcbiAgaGVhZDogaGVhZCxcbiAgYm9keTogYm9keSxcbiAgY29sZ3JvdXA6IGNvbGdyb3VwLFxuICB0Ym9keTogdGJvZHlcbn0pXG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPGh0bWw+YC5cbmZ1bmN0aW9uIGh0bWwobm9kZSkge1xuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUpXG4gIHJldHVybiAhaGVhZCB8fCAhaXNDb21tZW50KGhlYWQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPGhlYWQ+YC5cbmZ1bmN0aW9uIGhlYWQobm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIHNlZW4gPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hpbGRcbiAgdmFyIG5hbWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG4gICAgbmFtZSA9IGNoaWxkLnRhZ05hbWVcblxuICAgIGlmIChlbGVtZW50KGNoaWxkLCB1bmlxdWVIZWFkTWV0YWRhdGEpKSB7XG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgc2Vlbi5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlbmd0aCAhPT0gMFxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDxib2R5PmAuXG5mdW5jdGlvbiBib2R5KG5vZGUpIHtcbiAgdmFyIGhlYWQgPSBmaXJzdChub2RlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIWhlYWQgfHxcbiAgICAoIWlzQ29tbWVudChoZWFkKSAmJiAhd2hpdGVTcGFjZVN0YXJ0KGhlYWQpICYmICFlbGVtZW50KGhlYWQsIG1ldGEpKVxuICApXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPGNvbGdyb3VwPmAuXG4vLyBUaGUgc3BlYyBkZXNjcmliZXMgc29tZSBsb2dpYyBmb3IgdGhlIG9wZW5pbmcgdGFnLCBidXQgaXTigJlzIGVhc2llciB0b1xuLy8gaW1wbGVtZW50IGluIHRoZSBjbG9zaW5nIHRhZywgdG8gdGhlIHNhbWUgZWZmZWN0LCBzbyB3ZSBoYW5kbGUgaXQgdGhlcmVcbi8vIGluc3RlYWQuXG5mdW5jdGlvbiBjb2xncm91cChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBwcmV2ID0gYmVmb3JlKHBhcmVudCwgaW5kZXgpXG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSwgdHJ1ZSlcblxuICAvLyBQcmV2aW91cyBjb2xncm91cCB3YXMgYWxyZWFkeSBvbWl0dGVkLlxuICBpZiAoZWxlbWVudChwcmV2LCAnY29sZ3JvdXAnKSAmJiBjbG9zaW5nKHByZXYsIHBsYWNlKHBhcmVudCwgcHJldiksIHBhcmVudCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBoZWFkICYmIGVsZW1lbnQoaGVhZCwgJ2NvbCcpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPHRib2R5PmAuXG5mdW5jdGlvbiB0Ym9keShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBwcmV2ID0gYmVmb3JlKHBhcmVudCwgaW5kZXgpXG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSlcblxuICAvLyBQcmV2aW91cyB0YWJsZSBzZWN0aW9uIHdhcyBhbHJlYWR5IG9taXR0ZWQuXG4gIGlmIChcbiAgICBlbGVtZW50KHByZXYsIHRhYmxlQ29udGFpbmVycykgJiZcbiAgICBjbG9zaW5nKHByZXYsIHBsYWNlKHBhcmVudCwgcHJldiksIHBhcmVudClcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gaGVhZCAmJiBlbGVtZW50KGhlYWQsIHRhYmxlUm93KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhZnRlciA9IHJlcXVpcmUoJy4vc2libGluZ3MnKS5hZnRlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcnN0XG5cbi8vIEdldCB0aGUgZmlyc3QgY2hpbGQgaW4gYHBhcmVudGAuXG5mdW5jdGlvbiBmaXJzdChwYXJlbnQsIGluY2x1ZGVXaGl0ZVNwYWNlKSB7XG4gIHJldHVybiBhZnRlcihwYXJlbnQsIC0xLCBpbmNsdWRlV2hpdGVTcGFjZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYWNlXG5cbi8vIEdldCB0aGUgcG9zaXRpb24gb2YgYG5vZGVgIGluIGBwYXJlbnRgLlxuZnVuY3Rpb24gcGxhY2UocGFyZW50LCBjaGlsZCkge1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2hhc3QtdXRpbC13aGl0ZXNwYWNlJylcblxuZXhwb3J0cy5iZWZvcmUgPSBzaWJsaW5ncygtMSlcbmV4cG9ydHMuYWZ0ZXIgPSBzaWJsaW5ncygxKVxuXG4vLyBGYWN0b3J5IHRvIGNoZWNrIHNpYmxpbmdzIGluIGEgZGlyZWN0aW9uLlxuZnVuY3Rpb24gc2libGluZ3MoaW5jcmVtZW50KSB7XG4gIHJldHVybiBzaWJsaW5nXG5cbiAgLy8gRmluZCBhcHBsaWNhYmxlIHNpYmxpbmdzIGluIGEgZGlyZWN0aW9uLlxuICBmdW5jdGlvbiBzaWJsaW5nKHBhcmVudCwgaW5kZXgsIGluY2x1ZGVXaGl0ZVNwYWNlKSB7XG4gICAgdmFyIHNpYmxpbmdzID0gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlblxuICAgIHZhciBvZmZzZXQgPSBpbmRleCArIGluY3JlbWVudFxuICAgIHZhciBuZXh0ID0gc2libGluZ3MgJiYgc2libGluZ3Nbb2Zmc2V0XVxuXG4gICAgaWYgKCFpbmNsdWRlV2hpdGVTcGFjZSkge1xuICAgICAgd2hpbGUgKG5leHQgJiYgd2hpdGVTcGFjZShuZXh0KSkge1xuICAgICAgICBvZmZzZXQgKz0gaW5jcmVtZW50XG4gICAgICAgIG5leHQgPSBzaWJsaW5nc1tvZmZzZXRdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciB3aGl0ZVNwYWNlID0gcmVxdWlyZSgnaGFzdC11dGlsLXdoaXRlc3BhY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdoaXRlU3BhY2VTdGFydFxuXG52YXIgaXNUZXh0ID0gY29udmVydCgndGV4dCcpXG5cbi8vIENoZWNrIGlmIGBub2RlYCBzdGFydHMgd2l0aCB3aGl0ZS1zcGFjZS5cbmZ1bmN0aW9uIHdoaXRlU3BhY2VTdGFydChub2RlKSB7XG4gIHJldHVybiBpc1RleHQobm9kZSkgJiYgd2hpdGVTcGFjZShub2RlLnZhbHVlLmNoYXJBdCgwKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxudmFyIGhhbmRsZXJzID0ge31cblxuaGFuZGxlcnMucm9vdCA9IHJlcXVpcmUoJy4vYWxsJylcbmhhbmRsZXJzLnRleHQgPSByZXF1aXJlKCcuL3RleHQnKVxuaGFuZGxlcnMuZWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpXG5oYW5kbGVycy5kb2N0eXBlID0gcmVxdWlyZSgnLi9kb2N0eXBlJylcbmhhbmRsZXJzLmNvbW1lbnQgPSByZXF1aXJlKCcuL2NvbW1lbnQnKVxuaGFuZGxlcnMucmF3ID0gcmVxdWlyZSgnLi9yYXcnKVxuXG5mdW5jdGlvbiBzZXJpYWxpemUoY3R4LCBub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciB0eXBlID0gbm9kZSAmJiBub2RlLnR5cGVcblxuICBpZiAoIXR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIG5vdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cblxuICBpZiAoIW93bi5jYWxsKGhhbmRsZXJzLCB0eXBlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbXBpbGUgdW5rbm93biBub2RlIGAnICsgdHlwZSArICdgJylcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVyc1t0eXBlXShjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRleHQgPSByZXF1aXJlKCcuL3RleHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZVJhd1xuXG5mdW5jdGlvbiBzZXJpYWxpemVSYXcoY3R4LCBub2RlKSB7XG4gIHJldHVybiBjdHguZGFuZ2Vyb3VzID8gbm9kZS52YWx1ZSA6IHRleHQoY3R4LCBub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplVGV4dFxuXG5mdW5jdGlvbiBzZXJpYWxpemVUZXh0KGN0eCwgbm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlXG5cbiAgcmV0dXJuIGlzTGl0ZXJhbChwYXJlbnQpXG4gICAgPyB2YWx1ZVxuICAgIDogZW50aXRpZXModmFsdWUsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogWyc8JywgJyYnXX0pKVxufVxuXG4vLyBDaGVjayBpZiBjb250ZW50IG9mIGBub2RlYCBzaG91bGQgYmUgZXNjYXBlZC5cbmZ1bmN0aW9uIGlzTGl0ZXJhbChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIChub2RlLnRhZ05hbWUgPT09ICdzY3JpcHQnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ3N0eWxlJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyRWxlbWVudFdoaXRlU3BhY2VcblxuLy8gSFRNTCB3aGl0ZS1zcGFjZSBleHByZXNzaW9uLlxuLy8gU2VlIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzcGFjZS1jaGFyYWN0ZXI+LlxudmFyIHJlID0gL1sgXFx0XFxuXFxmXFxyXS9nXG5cbmZ1bmN0aW9uIGludGVyRWxlbWVudFdoaXRlU3BhY2Uobm9kZSkge1xuICB2YXIgdmFsdWVcblxuICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcbiAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IG5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCAnJykgPT09ICcnXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbnZhciBEZWZpbmVkSW5mbyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvZGVmaW5lZC1pbmZvJylcbnZhciBJbmZvID0gcmVxdWlyZSgnLi9saWIvdXRpbC9pbmZvJylcblxudmFyIGRhdGEgPSAnZGF0YSdcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kXG5cbnZhciB2YWxpZCA9IC9eZGF0YVstYS16MC05LjpfXSskL2lcbnZhciBkYXNoID0gLy1bYS16XS9nXG52YXIgY2FwID0gL1tBLVpdL2dcblxuZnVuY3Rpb24gZmluZChzY2hlbWEsIHZhbHVlKSB7XG4gIHZhciBub3JtYWwgPSBub3JtYWxpemUodmFsdWUpXG4gIHZhciBwcm9wID0gdmFsdWVcbiAgdmFyIFR5cGUgPSBJbmZvXG5cbiAgaWYgKG5vcm1hbCBpbiBzY2hlbWEubm9ybWFsKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0eVtzY2hlbWEubm9ybWFsW25vcm1hbF1dXG4gIH1cblxuICBpZiAobm9ybWFsLmxlbmd0aCA+IDQgJiYgbm9ybWFsLnNsaWNlKDAsIDQpID09PSBkYXRhICYmIHZhbGlkLnRlc3QodmFsdWUpKSB7XG4gICAgLy8gQXR0cmlidXRlIG9yIHByb3BlcnR5LlxuICAgIGlmICh2YWx1ZS5jaGFyQXQoNCkgPT09ICctJykge1xuICAgICAgcHJvcCA9IGRhdGFzZXRUb1Byb3BlcnR5KHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGRhdGFzZXRUb0F0dHJpYnV0ZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBUeXBlID0gRGVmaW5lZEluZm9cbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZShwcm9wLCB2YWx1ZSlcbn1cblxuZnVuY3Rpb24gZGF0YXNldFRvUHJvcGVydHkoYXR0cmlidXRlKSB7XG4gIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZS5zbGljZSg1KS5yZXBsYWNlKGRhc2gsIGNhbWVsY2FzZSlcbiAgcmV0dXJuIGRhdGEgKyB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRUb0F0dHJpYnV0ZShwcm9wZXJ0eSkge1xuICB2YXIgdmFsdWUgPSBwcm9wZXJ0eS5zbGljZSg0KVxuXG4gIGlmIChkYXNoLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5XG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoY2FwLCBrZWJhYilcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSAnLScpIHtcbiAgICB2YWx1ZSA9ICctJyArIHZhbHVlXG4gIH1cblxuICByZXR1cm4gZGF0YSArIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGtlYmFiKCQwKSB7XG4gIHJldHVybiAnLScgKyAkMC50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGNhbWVsY2FzZSgkMCkge1xuICByZXR1cm4gJDAuY2hhckF0KDEpLnRvVXBwZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCcuL2xpYi91dGlsL21lcmdlJylcbnZhciB4bGluayA9IHJlcXVpcmUoJy4vbGliL3hsaW5rJylcbnZhciB4bWwgPSByZXF1aXJlKCcuL2xpYi94bWwnKVxudmFyIHhtbG5zID0gcmVxdWlyZSgnLi9saWIveG1sbnMnKVxudmFyIGFyaWEgPSByZXF1aXJlKCcuL2xpYi9hcmlhJylcbnZhciBodG1sID0gcmVxdWlyZSgnLi9saWIvaHRtbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UoW3htbCwgeGxpbmssIHhtbG5zLCBhcmlhLCBodG1sXSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG52YXIgYm9vbGVhbmlzaCA9IHR5cGVzLmJvb2xlYW5pc2hcbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgdHJhbnNmb3JtOiBhcmlhVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYXJpYUFjdGl2ZURlc2NlbmRhbnQ6IG51bGwsXG4gICAgYXJpYUF0b21pYzogYm9vbGVhbmlzaCxcbiAgICBhcmlhQXV0b0NvbXBsZXRlOiBudWxsLFxuICAgIGFyaWFCdXN5OiBib29sZWFuaXNoLFxuICAgIGFyaWFDaGVja2VkOiBib29sZWFuaXNoLFxuICAgIGFyaWFDb2xDb3VudDogbnVtYmVyLFxuICAgIGFyaWFDb2xJbmRleDogbnVtYmVyLFxuICAgIGFyaWFDb2xTcGFuOiBudW1iZXIsXG4gICAgYXJpYUNvbnRyb2xzOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhQ3VycmVudDogbnVsbCxcbiAgICBhcmlhRGVzY3JpYmVkQnk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFEZXRhaWxzOiBudWxsLFxuICAgIGFyaWFEaXNhYmxlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhRHJvcEVmZmVjdDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUVycm9yTWVzc2FnZTogbnVsbCxcbiAgICBhcmlhRXhwYW5kZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUZsb3dUbzogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUdyYWJiZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUhhc1BvcHVwOiBudWxsLFxuICAgIGFyaWFIaWRkZW46IGJvb2xlYW5pc2gsXG4gICAgYXJpYUludmFsaWQ6IG51bGwsXG4gICAgYXJpYUtleVNob3J0Y3V0czogbnVsbCxcbiAgICBhcmlhTGFiZWw6IG51bGwsXG4gICAgYXJpYUxhYmVsbGVkQnk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFMZXZlbDogbnVtYmVyLFxuICAgIGFyaWFMaXZlOiBudWxsLFxuICAgIGFyaWFNb2RhbDogYm9vbGVhbmlzaCxcbiAgICBhcmlhTXVsdGlMaW5lOiBib29sZWFuaXNoLFxuICAgIGFyaWFNdWx0aVNlbGVjdGFibGU6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU9yaWVudGF0aW9uOiBudWxsLFxuICAgIGFyaWFPd25zOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhUGxhY2Vob2xkZXI6IG51bGwsXG4gICAgYXJpYVBvc0luU2V0OiBudW1iZXIsXG4gICAgYXJpYVByZXNzZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJlYWRPbmx5OiBib29sZWFuaXNoLFxuICAgIGFyaWFSZWxldmFudDogbnVsbCxcbiAgICBhcmlhUmVxdWlyZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYVJvd0NvdW50OiBudW1iZXIsXG4gICAgYXJpYVJvd0luZGV4OiBudW1iZXIsXG4gICAgYXJpYVJvd1NwYW46IG51bWJlcixcbiAgICBhcmlhU2VsZWN0ZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVNldFNpemU6IG51bWJlcixcbiAgICBhcmlhU29ydDogbnVsbCxcbiAgICBhcmlhVmFsdWVNYXg6IG51bWJlcixcbiAgICBhcmlhVmFsdWVNaW46IG51bWJlcixcbiAgICBhcmlhVmFsdWVOb3c6IG51bWJlcixcbiAgICBhcmlhVmFsdWVUZXh0OiBudWxsLFxuICAgIHJvbGU6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24gYXJpYVRyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiBwcm9wID09PSAncm9sZScgPyBwcm9wIDogJ2FyaWEtJyArIHByb3Auc2xpY2UoNCkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxudmFyIGJvb2xlYW4gPSB0eXBlcy5ib29sZWFuXG52YXIgb3ZlcmxvYWRlZEJvb2xlYW4gPSB0eXBlcy5vdmVybG9hZGVkQm9vbGVhblxudmFyIGJvb2xlYW5pc2ggPSB0eXBlcy5ib29sZWFuaXNoXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxudmFyIGNvbW1hU2VwYXJhdGVkID0gdHlwZXMuY29tbWFTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ2h0bWwnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgYWNjZXB0Y2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgICBjbGFzc25hbWU6ICdjbGFzcycsXG4gICAgaHRtbGZvcjogJ2ZvcicsXG4gICAgaHR0cGVxdWl2OiAnaHR0cC1lcXVpdidcbiAgfSxcbiAgdHJhbnNmb3JtOiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIG11c3RVc2VQcm9wZXJ0eTogWydjaGVja2VkJywgJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJ10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvLyBTdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFiYnI6IG51bGwsXG4gICAgYWNjZXB0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBhY2NlcHRDaGFyc2V0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhY2Nlc3NLZXk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFjdGlvbjogbnVsbCxcbiAgICBhbGxvdzogbnVsbCxcbiAgICBhbGxvd0Z1bGxTY3JlZW46IGJvb2xlYW4sXG4gICAgYWxsb3dQYXltZW50UmVxdWVzdDogYm9vbGVhbixcbiAgICBhbGxvd1VzZXJNZWRpYTogYm9vbGVhbixcbiAgICBhbHQ6IG51bGwsXG4gICAgYXM6IG51bGwsXG4gICAgYXN5bmM6IGJvb2xlYW4sXG4gICAgYXV0b0NhcGl0YWxpemU6IG51bGwsXG4gICAgYXV0b0NvbXBsZXRlOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhdXRvRm9jdXM6IGJvb2xlYW4sXG4gICAgYXV0b1BsYXk6IGJvb2xlYW4sXG4gICAgY2FwdHVyZTogYm9vbGVhbixcbiAgICBjaGFyU2V0OiBudWxsLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gICAgY2l0ZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNvbHM6IG51bWJlcixcbiAgICBjb2xTcGFuOiBudWxsLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudEVkaXRhYmxlOiBib29sZWFuaXNoLFxuICAgIGNvbnRyb2xzOiBib29sZWFuLFxuICAgIGNvbnRyb2xzTGlzdDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY29vcmRzOiBudW1iZXIgfCBjb21tYVNlcGFyYXRlZCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIGRhdGVUaW1lOiBudWxsLFxuICAgIGRlY29kaW5nOiBudWxsLFxuICAgIGRlZmF1bHQ6IGJvb2xlYW4sXG4gICAgZGVmZXI6IGJvb2xlYW4sXG4gICAgZGlyOiBudWxsLFxuICAgIGRpck5hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4sXG4gICAgZG93bmxvYWQ6IG92ZXJsb2FkZWRCb29sZWFuLFxuICAgIGRyYWdnYWJsZTogYm9vbGVhbmlzaCxcbiAgICBlbmNUeXBlOiBudWxsLFxuICAgIGVudGVyS2V5SGludDogbnVsbCxcbiAgICBmb3JtOiBudWxsLFxuICAgIGZvcm1BY3Rpb246IG51bGwsXG4gICAgZm9ybUVuY1R5cGU6IG51bGwsXG4gICAgZm9ybU1ldGhvZDogbnVsbCxcbiAgICBmb3JtTm9WYWxpZGF0ZTogYm9vbGVhbixcbiAgICBmb3JtVGFyZ2V0OiBudWxsLFxuICAgIGhlYWRlcnM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGhpZGRlbjogYm9vbGVhbixcbiAgICBoaWdoOiBudW1iZXIsXG4gICAgaHJlZjogbnVsbCxcbiAgICBocmVmTGFuZzogbnVsbCxcbiAgICBodG1sRm9yOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBodHRwRXF1aXY6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGlkOiBudWxsLFxuICAgIGltYWdlU2l6ZXM6IG51bGwsXG4gICAgaW1hZ2VTcmNTZXQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGlucHV0TW9kZTogbnVsbCxcbiAgICBpbnRlZ3JpdHk6IG51bGwsXG4gICAgaXM6IG51bGwsXG4gICAgaXNNYXA6IGJvb2xlYW4sXG4gICAgaXRlbUlkOiBudWxsLFxuICAgIGl0ZW1Qcm9wOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpdGVtUmVmOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpdGVtU2NvcGU6IGJvb2xlYW4sXG4gICAgaXRlbVR5cGU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGtpbmQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgbGFuZzogbnVsbCxcbiAgICBsYW5ndWFnZTogbnVsbCxcbiAgICBsaXN0OiBudWxsLFxuICAgIGxvb3A6IGJvb2xlYW4sXG4gICAgbG93OiBudW1iZXIsXG4gICAgbWFuaWZlc3Q6IG51bGwsXG4gICAgbWF4OiBudWxsLFxuICAgIG1heExlbmd0aDogbnVtYmVyLFxuICAgIG1lZGlhOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbWluTGVuZ3RoOiBudW1iZXIsXG4gICAgbXVsdGlwbGU6IGJvb2xlYW4sXG4gICAgbXV0ZWQ6IGJvb2xlYW4sXG4gICAgbmFtZTogbnVsbCxcbiAgICBub25jZTogbnVsbCxcbiAgICBub01vZHVsZTogYm9vbGVhbixcbiAgICBub1ZhbGlkYXRlOiBib29sZWFuLFxuICAgIG9uQWJvcnQ6IG51bGwsXG4gICAgb25BZnRlclByaW50OiBudWxsLFxuICAgIG9uQXV4Q2xpY2s6IG51bGwsXG4gICAgb25CZWZvcmVQcmludDogbnVsbCxcbiAgICBvbkJlZm9yZVVubG9hZDogbnVsbCxcbiAgICBvbkJsdXI6IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG4gICAgb25DYW5QbGF5OiBudWxsLFxuICAgIG9uQ2FuUGxheVRocm91Z2g6IG51bGwsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uQ29udGV4dE1lbnU6IG51bGwsXG4gICAgb25Db3B5OiBudWxsLFxuICAgIG9uQ3VlQ2hhbmdlOiBudWxsLFxuICAgIG9uQ3V0OiBudWxsLFxuICAgIG9uRGJsQ2xpY2s6IG51bGwsXG4gICAgb25EcmFnOiBudWxsLFxuICAgIG9uRHJhZ0VuZDogbnVsbCxcbiAgICBvbkRyYWdFbnRlcjogbnVsbCxcbiAgICBvbkRyYWdFeGl0OiBudWxsLFxuICAgIG9uRHJhZ0xlYXZlOiBudWxsLFxuICAgIG9uRHJhZ092ZXI6IG51bGwsXG4gICAgb25EcmFnU3RhcnQ6IG51bGwsXG4gICAgb25Ecm9wOiBudWxsLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6IG51bGwsXG4gICAgb25FbXB0aWVkOiBudWxsLFxuICAgIG9uRW5kZWQ6IG51bGwsXG4gICAgb25FcnJvcjogbnVsbCxcbiAgICBvbkZvY3VzOiBudWxsLFxuICAgIG9uRm9ybURhdGE6IG51bGwsXG4gICAgb25IYXNoQ2hhbmdlOiBudWxsLFxuICAgIG9uSW5wdXQ6IG51bGwsXG4gICAgb25JbnZhbGlkOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIG9uS2V5VXA6IG51bGwsXG4gICAgb25MYW5ndWFnZUNoYW5nZTogbnVsbCxcbiAgICBvbkxvYWQ6IG51bGwsXG4gICAgb25Mb2FkZWREYXRhOiBudWxsLFxuICAgIG9uTG9hZGVkTWV0YWRhdGE6IG51bGwsXG4gICAgb25Mb2FkRW5kOiBudWxsLFxuICAgIG9uTG9hZFN0YXJ0OiBudWxsLFxuICAgIG9uTWVzc2FnZTogbnVsbCxcbiAgICBvbk1lc3NhZ2VFcnJvcjogbnVsbCxcbiAgICBvbk1vdXNlRG93bjogbnVsbCxcbiAgICBvbk1vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Nb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uTW91c2VNb3ZlOiBudWxsLFxuICAgIG9uTW91c2VPdXQ6IG51bGwsXG4gICAgb25Nb3VzZU92ZXI6IG51bGwsXG4gICAgb25Nb3VzZVVwOiBudWxsLFxuICAgIG9uT2ZmbGluZTogbnVsbCxcbiAgICBvbk9ubGluZTogbnVsbCxcbiAgICBvblBhZ2VIaWRlOiBudWxsLFxuICAgIG9uUGFnZVNob3c6IG51bGwsXG4gICAgb25QYXN0ZTogbnVsbCxcbiAgICBvblBhdXNlOiBudWxsLFxuICAgIG9uUGxheTogbnVsbCxcbiAgICBvblBsYXlpbmc6IG51bGwsXG4gICAgb25Qb3BTdGF0ZTogbnVsbCxcbiAgICBvblByb2dyZXNzOiBudWxsLFxuICAgIG9uUmF0ZUNoYW5nZTogbnVsbCxcbiAgICBvblJlamVjdGlvbkhhbmRsZWQ6IG51bGwsXG4gICAgb25SZXNldDogbnVsbCxcbiAgICBvblJlc2l6ZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBvblNlY3VyaXR5UG9saWN5VmlvbGF0aW9uOiBudWxsLFxuICAgIG9uU2Vla2VkOiBudWxsLFxuICAgIG9uU2Vla2luZzogbnVsbCxcbiAgICBvblNlbGVjdDogbnVsbCxcbiAgICBvblNsb3RDaGFuZ2U6IG51bGwsXG4gICAgb25TdGFsbGVkOiBudWxsLFxuICAgIG9uU3RvcmFnZTogbnVsbCxcbiAgICBvblN1Ym1pdDogbnVsbCxcbiAgICBvblN1c3BlbmQ6IG51bGwsXG4gICAgb25UaW1lVXBkYXRlOiBudWxsLFxuICAgIG9uVG9nZ2xlOiBudWxsLFxuICAgIG9uVW5oYW5kbGVkUmVqZWN0aW9uOiBudWxsLFxuICAgIG9uVW5sb2FkOiBudWxsLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBudWxsLFxuICAgIG9uV2FpdGluZzogbnVsbCxcbiAgICBvbldoZWVsOiBudWxsLFxuICAgIG9wZW46IGJvb2xlYW4sXG4gICAgb3B0aW11bTogbnVtYmVyLFxuICAgIHBhdHRlcm46IG51bGwsXG4gICAgcGluZzogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgcGxheXNJbmxpbmU6IGJvb2xlYW4sXG4gICAgcG9zdGVyOiBudWxsLFxuICAgIHByZWxvYWQ6IG51bGwsXG4gICAgcmVhZE9ubHk6IGJvb2xlYW4sXG4gICAgcmVmZXJyZXJQb2xpY3k6IG51bGwsXG4gICAgcmVsOiBzcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZDogYm9vbGVhbixcbiAgICByZXZlcnNlZDogYm9vbGVhbixcbiAgICByb3dzOiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIHNhbmRib3g6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHNjb3BlOiBudWxsLFxuICAgIHNjb3BlZDogYm9vbGVhbixcbiAgICBzZWFtbGVzczogYm9vbGVhbixcbiAgICBzZWxlY3RlZDogYm9vbGVhbixcbiAgICBzaGFwZTogbnVsbCxcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc2l6ZXM6IG51bGwsXG4gICAgc2xvdDogbnVsbCxcbiAgICBzcGFuOiBudW1iZXIsXG4gICAgc3BlbGxDaGVjazogYm9vbGVhbmlzaCxcbiAgICBzcmM6IG51bGwsXG4gICAgc3JjRG9jOiBudWxsLFxuICAgIHNyY0xhbmc6IG51bGwsXG4gICAgc3JjU2V0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHN0ZXA6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bWJlcixcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHJhbnNsYXRlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdHlwZU11c3RNYXRjaDogYm9vbGVhbixcbiAgICB1c2VNYXA6IG51bGwsXG4gICAgdmFsdWU6IGJvb2xlYW5pc2gsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICB3cmFwOiBudWxsLFxuXG4gICAgLy8gTGVnYWN5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jb3RoZXItZWxlbWVudHMsLWF0dHJpYnV0ZXMtYW5kLWFwaXNcbiAgICBhbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdGV4dC1hbGlnbmAgaW5zdGVhZCxcbiAgICBhTGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6YWN0aXZlIHtjb2xvcn1gIGluc3RlYWRcbiAgICBhcmNoaXZlOiBzcGFjZVNlcGFyYXRlZCwgLy8gYDxvYmplY3Q+YC4gTGlzdCBvZiBVUklzIHRvIGFyY2hpdmVzXG4gICAgYXhpczogbnVsbCwgLy8gYDx0ZD5gIGFuZCBgPHRoPmAuIFVzZSBgc2NvcGVgIG9uIGA8dGg+YFxuICAgIGJhY2tncm91bmQ6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBiYWNrZ3JvdW5kLWltYWdlYCBpbnN0ZWFkXG4gICAgYmdDb2xvcjogbnVsbCwgLy8gYDxib2R5PmAgYW5kIHRhYmxlIGVsZW1lbnRzLiBVc2UgQ1NTIGBiYWNrZ3JvdW5kLWNvbG9yYCBpbnN0ZWFkXG4gICAgYm9yZGVyOiBudW1iZXIsIC8vIGA8dGFibGU+YC4gVXNlIENTUyBgYm9yZGVyLXdpZHRoYCBpbnN0ZWFkLFxuICAgIGJvcmRlckNvbG9yOiBudWxsLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci1jb2xvcmAgaW5zdGVhZCxcbiAgICBib3R0b21NYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBjZWxsUGFkZGluZzogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgY2VsbFNwYWNpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNoYXI6IG51bGwsIC8vIFNldmVyYWwgdGFibGUgZWxlbWVudHMuIFdoZW4gYGFsaWduPWNoYXJgLCBzZXRzIHRoZSBjaGFyYWN0ZXIgdG8gYWxpZ24gb25cbiAgICBjaGFyT2ZmOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBjaGFyYCwgb2Zmc2V0cyB0aGUgYWxpZ25tZW50XG4gICAgY2xhc3NJZDogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNsZWFyOiBudWxsLCAvLyBgPGJyPmAuIFVzZSBDU1MgYGNsZWFyYCBpbnN0ZWFkXG4gICAgY29kZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVCYXNlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29kZVR5cGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2xvcjogbnVsbCwgLy8gYDxmb250PmAgYW5kIGA8aHI+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgY29tcGFjdDogYm9vbGVhbiwgLy8gTGlzdHMuIFVzZSBDU1MgdG8gcmVkdWNlIHNwYWNlIGJldHdlZW4gaXRlbXMgaW5zdGVhZFxuICAgIGRlY2xhcmU6IGJvb2xlYW4sIC8vIGA8b2JqZWN0PmBcbiAgICBldmVudDogbnVsbCwgLy8gYDxzY3JpcHQ+YFxuICAgIGZhY2U6IG51bGwsIC8vIGA8Zm9udD5gLiBVc2UgQ1NTIGluc3RlYWRcbiAgICBmcmFtZTogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgZnJhbWVCb3JkZXI6IG51bGwsIC8vIGA8aWZyYW1lPmAuIFVzZSBDU1MgYGJvcmRlcmAgaW5zdGVhZFxuICAgIGhTcGFjZTogbnVtYmVyLCAvLyBgPGltZz5gIGFuZCBgPG9iamVjdD5gXG4gICAgbGVmdE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIGxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmxpbmsge2NvbG9yOiAqfWAgaW5zdGVhZFxuICAgIGxvbmdEZXNjOiBudWxsLCAvLyBgPGZyYW1lPmAsIGA8aWZyYW1lPmAsIGFuZCBgPGltZz5gLiBVc2UgYW4gYDxhPmBcbiAgICBsb3dTcmM6IG51bGwsIC8vIGA8aW1nPmAuIFVzZSBhIGA8cGljdHVyZT5gXG4gICAgbWFyZ2luSGVpZ2h0OiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbWFyZ2luV2lkdGg6IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBub1Jlc2l6ZTogYm9vbGVhbiwgLy8gYDxmcmFtZT5gXG4gICAgbm9IcmVmOiBib29sZWFuLCAvLyBgPGFyZWE+YC4gVXNlIG5vIGhyZWYgaW5zdGVhZCBvZiBhbiBleHBsaWNpdCBgbm9ocmVmYFxuICAgIG5vU2hhZGU6IGJvb2xlYW4sIC8vIGA8aHI+YC4gVXNlIGJhY2tncm91bmQtY29sb3IgYW5kIGhlaWdodCBpbnN0ZWFkIG9mIGJvcmRlcnNcbiAgICBub1dyYXA6IGJvb2xlYW4sIC8vIGA8dGQ+YCBhbmQgYDx0aD5gXG4gICAgb2JqZWN0OiBudWxsLCAvLyBgPGFwcGxldD5gXG4gICAgcHJvZmlsZTogbnVsbCwgLy8gYDxoZWFkPmBcbiAgICBwcm9tcHQ6IG51bGwsIC8vIGA8aXNpbmRleD5gXG4gICAgcmV2OiBudWxsLCAvLyBgPGxpbms+YFxuICAgIHJpZ2h0TWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgcnVsZXM6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIHNjaGVtZTogbnVsbCwgLy8gYDxtZXRhPmBcbiAgICBzY3JvbGxpbmc6IGJvb2xlYW5pc2gsIC8vIGA8ZnJhbWU+YC4gVXNlIG92ZXJmbG93IGluIHRoZSBjaGlsZCBjb250ZXh0XG4gICAgc3RhbmRieTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIHN1bW1hcnk6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIHRleHQ6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBjb2xvcmAgaW5zdGVhZFxuICAgIHRvcE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHZhbHVlVHlwZTogbnVsbCwgLy8gYDxwYXJhbT5gXG4gICAgdmVyc2lvbjogbnVsbCwgLy8gYDxodG1sPmAuIFVzZSBhIGRvY3R5cGUuXG4gICAgdkFsaWduOiBudWxsLCAvLyBTZXZlcmFsLiBVc2UgQ1NTIGB2ZXJ0aWNhbC1hbGlnbmAgaW5zdGVhZFxuICAgIHZMaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTp2aXNpdGVkIHtjb2xvcn1gIGluc3RlYWRcbiAgICB2U3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuXG4gICAgLy8gTm9uLXN0YW5kYXJkIFByb3BlcnRpZXMuXG4gICAgYWxsb3dUcmFuc3BhcmVuY3k6IG51bGwsXG4gICAgYXV0b0NvcnJlY3Q6IG51bGwsXG4gICAgYXV0b1NhdmU6IG51bGwsXG4gICAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmU6IGJvb2xlYW4sXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHByb3BlcnR5OiBudWxsLFxuICAgIHJlc3VsdHM6IG51bWJlcixcbiAgICBzZWN1cml0eTogbnVsbCxcbiAgICB1bnNlbGVjdGFibGU6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxudmFyIGJvb2xlYW4gPSB0eXBlcy5ib29sZWFuXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxudmFyIGNvbW1hU2VwYXJhdGVkID0gdHlwZXMuY29tbWFTZXBhcmF0ZWRcbnZhciBjb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYU9yU3BhY2VTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3N2ZycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBhY2NlbnRIZWlnaHQ6ICdhY2NlbnQtaGVpZ2h0JyxcbiAgICBhbGlnbm1lbnRCYXNlbGluZTogJ2FsaWdubWVudC1iYXNlbGluZScsXG4gICAgYXJhYmljRm9ybTogJ2FyYWJpYy1mb3JtJyxcbiAgICBiYXNlbGluZVNoaWZ0OiAnYmFzZWxpbmUtc2hpZnQnLFxuICAgIGNhcEhlaWdodDogJ2NhcC1oZWlnaHQnLFxuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBjbGlwUGF0aDogJ2NsaXAtcGF0aCcsXG4gICAgY2xpcFJ1bGU6ICdjbGlwLXJ1bGUnLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbjogJ2NvbG9yLWludGVycG9sYXRpb24nLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6ICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLFxuICAgIGNvbG9yUHJvZmlsZTogJ2NvbG9yLXByb2ZpbGUnLFxuICAgIGNvbG9yUmVuZGVyaW5nOiAnY29sb3ItcmVuZGVyaW5nJyxcbiAgICBjcm9zc09yaWdpbjogJ2Nyb3Nzb3JpZ2luJyxcbiAgICBkYXRhVHlwZTogJ2RhdGF0eXBlJyxcbiAgICBkb21pbmFudEJhc2VsaW5lOiAnZG9taW5hbnQtYmFzZWxpbmUnLFxuICAgIGVuYWJsZUJhY2tncm91bmQ6ICdlbmFibGUtYmFja2dyb3VuZCcsXG4gICAgZmlsbE9wYWNpdHk6ICdmaWxsLW9wYWNpdHknLFxuICAgIGZpbGxSdWxlOiAnZmlsbC1ydWxlJyxcbiAgICBmbG9vZENvbG9yOiAnZmxvb2QtY29sb3InLFxuICAgIGZsb29kT3BhY2l0eTogJ2Zsb29kLW9wYWNpdHknLFxuICAgIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScsXG4gICAgZm9udFNpemU6ICdmb250LXNpemUnLFxuICAgIGZvbnRTaXplQWRqdXN0OiAnZm9udC1zaXplLWFkanVzdCcsXG4gICAgZm9udFN0cmV0Y2g6ICdmb250LXN0cmV0Y2gnLFxuICAgIGZvbnRTdHlsZTogJ2ZvbnQtc3R5bGUnLFxuICAgIGZvbnRWYXJpYW50OiAnZm9udC12YXJpYW50JyxcbiAgICBmb250V2VpZ2h0OiAnZm9udC13ZWlnaHQnLFxuICAgIGdseXBoTmFtZTogJ2dseXBoLW5hbWUnLFxuICAgIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsOiAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCcsXG4gICAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLFxuICAgIGhyZWZMYW5nOiAnaHJlZmxhbmcnLFxuICAgIGhvcml6QWR2WDogJ2hvcml6LWFkdi14JyxcbiAgICBob3Jpek9yaWdpblg6ICdob3Jpei1vcmlnaW4teCcsXG4gICAgaG9yaXpPcmlnaW5ZOiAnaG9yaXotb3JpZ2luLXknLFxuICAgIGltYWdlUmVuZGVyaW5nOiAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnbGV0dGVyLXNwYWNpbmcnLFxuICAgIGxpZ2h0aW5nQ29sb3I6ICdsaWdodGluZy1jb2xvcicsXG4gICAgbWFya2VyRW5kOiAnbWFya2VyLWVuZCcsXG4gICAgbWFya2VyTWlkOiAnbWFya2VyLW1pZCcsXG4gICAgbWFya2VyU3RhcnQ6ICdtYXJrZXItc3RhcnQnLFxuICAgIG5hdkRvd246ICduYXYtZG93bicsXG4gICAgbmF2RG93bkxlZnQ6ICduYXYtZG93bi1sZWZ0JyxcbiAgICBuYXZEb3duUmlnaHQ6ICduYXYtZG93bi1yaWdodCcsXG4gICAgbmF2TGVmdDogJ25hdi1sZWZ0JyxcbiAgICBuYXZOZXh0OiAnbmF2LW5leHQnLFxuICAgIG5hdlByZXY6ICduYXYtcHJldicsXG4gICAgbmF2UmlnaHQ6ICduYXYtcmlnaHQnLFxuICAgIG5hdlVwOiAnbmF2LXVwJyxcbiAgICBuYXZVcExlZnQ6ICduYXYtdXAtbGVmdCcsXG4gICAgbmF2VXBSaWdodDogJ25hdi11cC1yaWdodCcsXG4gICAgb25BYm9ydDogJ29uYWJvcnQnLFxuICAgIG9uQWN0aXZhdGU6ICdvbmFjdGl2YXRlJyxcbiAgICBvbkFmdGVyUHJpbnQ6ICdvbmFmdGVycHJpbnQnLFxuICAgIG9uQmVmb3JlUHJpbnQ6ICdvbmJlZm9yZXByaW50JyxcbiAgICBvbkJlZ2luOiAnb25iZWdpbicsXG4gICAgb25DYW5jZWw6ICdvbmNhbmNlbCcsXG4gICAgb25DYW5QbGF5OiAnb25jYW5wbGF5JyxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiAnb25jYW5wbGF5dGhyb3VnaCcsXG4gICAgb25DaGFuZ2U6ICdvbmNoYW5nZScsXG4gICAgb25DbGljazogJ29uY2xpY2snLFxuICAgIG9uQ2xvc2U6ICdvbmNsb3NlJyxcbiAgICBvbkNvcHk6ICdvbmNvcHknLFxuICAgIG9uQ3VlQ2hhbmdlOiAnb25jdWVjaGFuZ2UnLFxuICAgIG9uQ3V0OiAnb25jdXQnLFxuICAgIG9uRGJsQ2xpY2s6ICdvbmRibGNsaWNrJyxcbiAgICBvbkRyYWc6ICdvbmRyYWcnLFxuICAgIG9uRHJhZ0VuZDogJ29uZHJhZ2VuZCcsXG4gICAgb25EcmFnRW50ZXI6ICdvbmRyYWdlbnRlcicsXG4gICAgb25EcmFnRXhpdDogJ29uZHJhZ2V4aXQnLFxuICAgIG9uRHJhZ0xlYXZlOiAnb25kcmFnbGVhdmUnLFxuICAgIG9uRHJhZ092ZXI6ICdvbmRyYWdvdmVyJyxcbiAgICBvbkRyYWdTdGFydDogJ29uZHJhZ3N0YXJ0JyxcbiAgICBvbkRyb3A6ICdvbmRyb3AnLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6ICdvbmR1cmF0aW9uY2hhbmdlJyxcbiAgICBvbkVtcHRpZWQ6ICdvbmVtcHRpZWQnLFxuICAgIG9uRW5kOiAnb25lbmQnLFxuICAgIG9uRW5kZWQ6ICdvbmVuZGVkJyxcbiAgICBvbkVycm9yOiAnb25lcnJvcicsXG4gICAgb25Gb2N1czogJ29uZm9jdXMnLFxuICAgIG9uRm9jdXNJbjogJ29uZm9jdXNpbicsXG4gICAgb25Gb2N1c091dDogJ29uZm9jdXNvdXQnLFxuICAgIG9uSGFzaENoYW5nZTogJ29uaGFzaGNoYW5nZScsXG4gICAgb25JbnB1dDogJ29uaW5wdXQnLFxuICAgIG9uSW52YWxpZDogJ29uaW52YWxpZCcsXG4gICAgb25LZXlEb3duOiAnb25rZXlkb3duJyxcbiAgICBvbktleVByZXNzOiAnb25rZXlwcmVzcycsXG4gICAgb25LZXlVcDogJ29ua2V5dXAnLFxuICAgIG9uTG9hZDogJ29ubG9hZCcsXG4gICAgb25Mb2FkZWREYXRhOiAnb25sb2FkZWRkYXRhJyxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiAnb25sb2FkZWRtZXRhZGF0YScsXG4gICAgb25Mb2FkU3RhcnQ6ICdvbmxvYWRzdGFydCcsXG4gICAgb25NZXNzYWdlOiAnb25tZXNzYWdlJyxcbiAgICBvbk1vdXNlRG93bjogJ29ubW91c2Vkb3duJyxcbiAgICBvbk1vdXNlRW50ZXI6ICdvbm1vdXNlZW50ZXInLFxuICAgIG9uTW91c2VMZWF2ZTogJ29ubW91c2VsZWF2ZScsXG4gICAgb25Nb3VzZU1vdmU6ICdvbm1vdXNlbW92ZScsXG4gICAgb25Nb3VzZU91dDogJ29ubW91c2VvdXQnLFxuICAgIG9uTW91c2VPdmVyOiAnb25tb3VzZW92ZXInLFxuICAgIG9uTW91c2VVcDogJ29ubW91c2V1cCcsXG4gICAgb25Nb3VzZVdoZWVsOiAnb25tb3VzZXdoZWVsJyxcbiAgICBvbk9mZmxpbmU6ICdvbm9mZmxpbmUnLFxuICAgIG9uT25saW5lOiAnb25vbmxpbmUnLFxuICAgIG9uUGFnZUhpZGU6ICdvbnBhZ2VoaWRlJyxcbiAgICBvblBhZ2VTaG93OiAnb25wYWdlc2hvdycsXG4gICAgb25QYXN0ZTogJ29ucGFzdGUnLFxuICAgIG9uUGF1c2U6ICdvbnBhdXNlJyxcbiAgICBvblBsYXk6ICdvbnBsYXknLFxuICAgIG9uUGxheWluZzogJ29ucGxheWluZycsXG4gICAgb25Qb3BTdGF0ZTogJ29ucG9wc3RhdGUnLFxuICAgIG9uUHJvZ3Jlc3M6ICdvbnByb2dyZXNzJyxcbiAgICBvblJhdGVDaGFuZ2U6ICdvbnJhdGVjaGFuZ2UnLFxuICAgIG9uUmVwZWF0OiAnb25yZXBlYXQnLFxuICAgIG9uUmVzZXQ6ICdvbnJlc2V0JyxcbiAgICBvblJlc2l6ZTogJ29ucmVzaXplJyxcbiAgICBvblNjcm9sbDogJ29uc2Nyb2xsJyxcbiAgICBvblNlZWtlZDogJ29uc2Vla2VkJyxcbiAgICBvblNlZWtpbmc6ICdvbnNlZWtpbmcnLFxuICAgIG9uU2VsZWN0OiAnb25zZWxlY3QnLFxuICAgIG9uU2hvdzogJ29uc2hvdycsXG4gICAgb25TdGFsbGVkOiAnb25zdGFsbGVkJyxcbiAgICBvblN0b3JhZ2U6ICdvbnN0b3JhZ2UnLFxuICAgIG9uU3VibWl0OiAnb25zdWJtaXQnLFxuICAgIG9uU3VzcGVuZDogJ29uc3VzcGVuZCcsXG4gICAgb25UaW1lVXBkYXRlOiAnb250aW1ldXBkYXRlJyxcbiAgICBvblRvZ2dsZTogJ29udG9nZ2xlJyxcbiAgICBvblVubG9hZDogJ29udW5sb2FkJyxcbiAgICBvblZvbHVtZUNoYW5nZTogJ29udm9sdW1lY2hhbmdlJyxcbiAgICBvbldhaXRpbmc6ICdvbndhaXRpbmcnLFxuICAgIG9uWm9vbTogJ29uem9vbScsXG4gICAgb3ZlcmxpbmVQb3NpdGlvbjogJ292ZXJsaW5lLXBvc2l0aW9uJyxcbiAgICBvdmVybGluZVRoaWNrbmVzczogJ292ZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgcGFpbnRPcmRlcjogJ3BhaW50LW9yZGVyJyxcbiAgICBwYW5vc2UxOiAncGFub3NlLTEnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdwb2ludGVyLWV2ZW50cycsXG4gICAgcmVmZXJyZXJQb2xpY3k6ICdyZWZlcnJlcnBvbGljeScsXG4gICAgcmVuZGVyaW5nSW50ZW50OiAncmVuZGVyaW5nLWludGVudCcsXG4gICAgc2hhcGVSZW5kZXJpbmc6ICdzaGFwZS1yZW5kZXJpbmcnLFxuICAgIHN0b3BDb2xvcjogJ3N0b3AtY29sb3InLFxuICAgIHN0b3BPcGFjaXR5OiAnc3RvcC1vcGFjaXR5JyxcbiAgICBzdHJpa2V0aHJvdWdoUG9zaXRpb246ICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJyxcbiAgICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnLFxuICAgIHN0cm9rZURhc2hBcnJheTogJ3N0cm9rZS1kYXNoYXJyYXknLFxuICAgIHN0cm9rZURhc2hPZmZzZXQ6ICdzdHJva2UtZGFzaG9mZnNldCcsXG4gICAgc3Ryb2tlTGluZUNhcDogJ3N0cm9rZS1saW5lY2FwJyxcbiAgICBzdHJva2VMaW5lSm9pbjogJ3N0cm9rZS1saW5lam9pbicsXG4gICAgc3Ryb2tlTWl0ZXJMaW1pdDogJ3N0cm9rZS1taXRlcmxpbWl0JyxcbiAgICBzdHJva2VPcGFjaXR5OiAnc3Ryb2tlLW9wYWNpdHknLFxuICAgIHN0cm9rZVdpZHRoOiAnc3Ryb2tlLXdpZHRoJyxcbiAgICB0YWJJbmRleDogJ3RhYmluZGV4JyxcbiAgICB0ZXh0QW5jaG9yOiAndGV4dC1hbmNob3InLFxuICAgIHRleHREZWNvcmF0aW9uOiAndGV4dC1kZWNvcmF0aW9uJyxcbiAgICB0ZXh0UmVuZGVyaW5nOiAndGV4dC1yZW5kZXJpbmcnLFxuICAgIHR5cGVPZjogJ3R5cGVvZicsXG4gICAgdW5kZXJsaW5lUG9zaXRpb246ICd1bmRlcmxpbmUtcG9zaXRpb24nLFxuICAgIHVuZGVybGluZVRoaWNrbmVzczogJ3VuZGVybGluZS10aGlja25lc3MnLFxuICAgIHVuaWNvZGVCaWRpOiAndW5pY29kZS1iaWRpJyxcbiAgICB1bmljb2RlUmFuZ2U6ICd1bmljb2RlLXJhbmdlJyxcbiAgICB1bml0c1BlckVtOiAndW5pdHMtcGVyLWVtJyxcbiAgICB2QWxwaGFiZXRpYzogJ3YtYWxwaGFiZXRpYycsXG4gICAgdkhhbmdpbmc6ICd2LWhhbmdpbmcnLFxuICAgIHZJZGVvZ3JhcGhpYzogJ3YtaWRlb2dyYXBoaWMnLFxuICAgIHZNYXRoZW1hdGljYWw6ICd2LW1hdGhlbWF0aWNhbCcsXG4gICAgdmVjdG9yRWZmZWN0OiAndmVjdG9yLWVmZmVjdCcsXG4gICAgdmVydEFkdlk6ICd2ZXJ0LWFkdi15JyxcbiAgICB2ZXJ0T3JpZ2luWDogJ3ZlcnQtb3JpZ2luLXgnLFxuICAgIHZlcnRPcmlnaW5ZOiAndmVydC1vcmlnaW4teScsXG4gICAgd29yZFNwYWNpbmc6ICd3b3JkLXNwYWNpbmcnLFxuICAgIHdyaXRpbmdNb2RlOiAnd3JpdGluZy1tb2RlJyxcbiAgICB4SGVpZ2h0OiAneC1oZWlnaHQnLFxuICAgIC8vIFRoZXNlIHdlcmUgY2FtZWxjYXNlZCBpbiBUaW55LiBOb3cgbG93ZXJjYXNlZCBpbiBTVkcgMlxuICAgIHBsYXliYWNrT3JkZXI6ICdwbGF5YmFja29yZGVyJyxcbiAgICB0aW1lbGluZUJlZ2luOiAndGltZWxpbmViZWdpbidcbiAgfSxcbiAgdHJhbnNmb3JtOiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYWJvdXQ6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICBhY2NlbnRIZWlnaHQ6IG51bWJlcixcbiAgICBhY2N1bXVsYXRlOiBudWxsLFxuICAgIGFkZGl0aXZlOiBudWxsLFxuICAgIGFsaWdubWVudEJhc2VsaW5lOiBudWxsLFxuICAgIGFscGhhYmV0aWM6IG51bWJlcixcbiAgICBhbXBsaXR1ZGU6IG51bWJlcixcbiAgICBhcmFiaWNGb3JtOiBudWxsLFxuICAgIGFzY2VudDogbnVtYmVyLFxuICAgIGF0dHJpYnV0ZU5hbWU6IG51bGwsXG4gICAgYXR0cmlidXRlVHlwZTogbnVsbCxcbiAgICBhemltdXRoOiBudW1iZXIsXG4gICAgYmFuZHdpZHRoOiBudWxsLFxuICAgIGJhc2VsaW5lU2hpZnQ6IG51bGwsXG4gICAgYmFzZUZyZXF1ZW5jeTogbnVsbCxcbiAgICBiYXNlUHJvZmlsZTogbnVsbCxcbiAgICBiYm94OiBudWxsLFxuICAgIGJlZ2luOiBudWxsLFxuICAgIGJpYXM6IG51bWJlcixcbiAgICBieTogbnVsbCxcbiAgICBjYWxjTW9kZTogbnVsbCxcbiAgICBjYXBIZWlnaHQ6IG51bWJlcixcbiAgICBjbGFzc05hbWU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNsaXA6IG51bGwsXG4gICAgY2xpcFBhdGg6IG51bGwsXG4gICAgY2xpcFBhdGhVbml0czogbnVsbCxcbiAgICBjbGlwUnVsZTogbnVsbCxcbiAgICBjb2xvcjogbnVsbCxcbiAgICBjb2xvckludGVycG9sYXRpb246IG51bGwsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogbnVsbCxcbiAgICBjb2xvclByb2ZpbGU6IG51bGwsXG4gICAgY29sb3JSZW5kZXJpbmc6IG51bGwsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBjb250ZW50U2NyaXB0VHlwZTogbnVsbCxcbiAgICBjb250ZW50U3R5bGVUeXBlOiBudWxsLFxuICAgIGNyb3NzT3JpZ2luOiBudWxsLFxuICAgIGN1cnNvcjogbnVsbCxcbiAgICBjeDogbnVsbCxcbiAgICBjeTogbnVsbCxcbiAgICBkOiBudWxsLFxuICAgIGRhdGFUeXBlOiBudWxsLFxuICAgIGRlZmF1bHRBY3Rpb246IG51bGwsXG4gICAgZGVzY2VudDogbnVtYmVyLFxuICAgIGRpZmZ1c2VDb25zdGFudDogbnVtYmVyLFxuICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICBkaXNwbGF5OiBudWxsLFxuICAgIGR1cjogbnVsbCxcbiAgICBkaXZpc29yOiBudW1iZXIsXG4gICAgZG9taW5hbnRCYXNlbGluZTogbnVsbCxcbiAgICBkb3dubG9hZDogYm9vbGVhbixcbiAgICBkeDogbnVsbCxcbiAgICBkeTogbnVsbCxcbiAgICBlZGdlTW9kZTogbnVsbCxcbiAgICBlZGl0YWJsZTogbnVsbCxcbiAgICBlbGV2YXRpb246IG51bWJlcixcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiBudWxsLFxuICAgIGVuZDogbnVsbCxcbiAgICBldmVudDogbnVsbCxcbiAgICBleHBvbmVudDogbnVtYmVyLFxuICAgIGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQ6IG51bGwsXG4gICAgZmlsbDogbnVsbCxcbiAgICBmaWxsT3BhY2l0eTogbnVtYmVyLFxuICAgIGZpbGxSdWxlOiBudWxsLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBmaWx0ZXJSZXM6IG51bGwsXG4gICAgZmlsdGVyVW5pdHM6IG51bGwsXG4gICAgZmxvb2RDb2xvcjogbnVsbCxcbiAgICBmbG9vZE9wYWNpdHk6IG51bGwsXG4gICAgZm9jdXNhYmxlOiBudWxsLFxuICAgIGZvY3VzSGlnaGxpZ2h0OiBudWxsLFxuICAgIGZvbnRGYW1pbHk6IG51bGwsXG4gICAgZm9udFNpemU6IG51bGwsXG4gICAgZm9udFNpemVBZGp1c3Q6IG51bGwsXG4gICAgZm9udFN0cmV0Y2g6IG51bGwsXG4gICAgZm9udFN0eWxlOiBudWxsLFxuICAgIGZvbnRWYXJpYW50OiBudWxsLFxuICAgIGZvbnRXZWlnaHQ6IG51bGwsXG4gICAgZm9ybWF0OiBudWxsLFxuICAgIGZyOiBudWxsLFxuICAgIGZyb206IG51bGwsXG4gICAgZng6IG51bGwsXG4gICAgZnk6IG51bGwsXG4gICAgZzE6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGcyOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnbHlwaE5hbWU6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsOiBudWxsLFxuICAgIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogbnVsbCxcbiAgICBnbHlwaFJlZjogbnVsbCxcbiAgICBncmFkaWVudFRyYW5zZm9ybTogbnVsbCxcbiAgICBncmFkaWVudFVuaXRzOiBudWxsLFxuICAgIGhhbmRsZXI6IG51bGwsXG4gICAgaGFuZ2luZzogbnVtYmVyLFxuICAgIGhhdGNoQ29udGVudFVuaXRzOiBudWxsLFxuICAgIGhhdGNoVW5pdHM6IG51bGwsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGhyZWY6IG51bGwsXG4gICAgaHJlZkxhbmc6IG51bGwsXG4gICAgaG9yaXpBZHZYOiBudW1iZXIsXG4gICAgaG9yaXpPcmlnaW5YOiBudW1iZXIsXG4gICAgaG9yaXpPcmlnaW5ZOiBudW1iZXIsXG4gICAgaWQ6IG51bGwsXG4gICAgaWRlb2dyYXBoaWM6IG51bWJlcixcbiAgICBpbWFnZVJlbmRlcmluZzogbnVsbCxcbiAgICBpbml0aWFsVmlzaWJpbGl0eTogbnVsbCxcbiAgICBpbjogbnVsbCxcbiAgICBpbjI6IG51bGwsXG4gICAgaW50ZXJjZXB0OiBudW1iZXIsXG4gICAgazogbnVtYmVyLFxuICAgIGsxOiBudW1iZXIsXG4gICAgazI6IG51bWJlcixcbiAgICBrMzogbnVtYmVyLFxuICAgIGs0OiBudW1iZXIsXG4gICAga2VybmVsTWF0cml4OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAga2VybmVsVW5pdExlbmd0aDogbnVsbCxcbiAgICBrZXlQb2ludHM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2V5U3BsaW5lczogbnVsbCwgLy8gU0VNSV9DT0xPTl9TRVBBUkFURURcbiAgICBrZXlUaW1lczogbnVsbCwgLy8gU0VNSV9DT0xPTl9TRVBBUkFURURcbiAgICBrZXJuaW5nOiBudWxsLFxuICAgIGxhbmc6IG51bGwsXG4gICAgbGVuZ3RoQWRqdXN0OiBudWxsLFxuICAgIGxldHRlclNwYWNpbmc6IG51bGwsXG4gICAgbGlnaHRpbmdDb2xvcjogbnVsbCxcbiAgICBsaW1pdGluZ0NvbmVBbmdsZTogbnVtYmVyLFxuICAgIGxvY2FsOiBudWxsLFxuICAgIG1hcmtlckVuZDogbnVsbCxcbiAgICBtYXJrZXJNaWQ6IG51bGwsXG4gICAgbWFya2VyU3RhcnQ6IG51bGwsXG4gICAgbWFya2VySGVpZ2h0OiBudWxsLFxuICAgIG1hcmtlclVuaXRzOiBudWxsLFxuICAgIG1hcmtlcldpZHRoOiBudWxsLFxuICAgIG1hc2s6IG51bGwsXG4gICAgbWFza0NvbnRlbnRVbml0czogbnVsbCxcbiAgICBtYXNrVW5pdHM6IG51bGwsXG4gICAgbWF0aGVtYXRpY2FsOiBudWxsLFxuICAgIG1heDogbnVsbCxcbiAgICBtZWRpYTogbnVsbCxcbiAgICBtZWRpYUNoYXJhY3RlckVuY29kaW5nOiBudWxsLFxuICAgIG1lZGlhQ29udGVudEVuY29kaW5nczogbnVsbCxcbiAgICBtZWRpYVNpemU6IG51bWJlcixcbiAgICBtZWRpYVRpbWU6IG51bGwsXG4gICAgbWV0aG9kOiBudWxsLFxuICAgIG1pbjogbnVsbCxcbiAgICBtb2RlOiBudWxsLFxuICAgIG5hbWU6IG51bGwsXG4gICAgbmF2RG93bjogbnVsbCxcbiAgICBuYXZEb3duTGVmdDogbnVsbCxcbiAgICBuYXZEb3duUmlnaHQ6IG51bGwsXG4gICAgbmF2TGVmdDogbnVsbCxcbiAgICBuYXZOZXh0OiBudWxsLFxuICAgIG5hdlByZXY6IG51bGwsXG4gICAgbmF2UmlnaHQ6IG51bGwsXG4gICAgbmF2VXA6IG51bGwsXG4gICAgbmF2VXBMZWZ0OiBudWxsLFxuICAgIG5hdlVwUmlnaHQ6IG51bGwsXG4gICAgbnVtT2N0YXZlczogbnVsbCxcbiAgICBvYnNlcnZlcjogbnVsbCxcbiAgICBvZmZzZXQ6IG51bGwsXG4gICAgb25BYm9ydDogbnVsbCxcbiAgICBvbkFjdGl2YXRlOiBudWxsLFxuICAgIG9uQWZ0ZXJQcmludDogbnVsbCxcbiAgICBvbkJlZm9yZVByaW50OiBudWxsLFxuICAgIG9uQmVnaW46IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG4gICAgb25DYW5QbGF5OiBudWxsLFxuICAgIG9uQ2FuUGxheVRocm91Z2g6IG51bGwsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uQ29weTogbnVsbCxcbiAgICBvbkN1ZUNoYW5nZTogbnVsbCxcbiAgICBvbkN1dDogbnVsbCxcbiAgICBvbkRibENsaWNrOiBudWxsLFxuICAgIG9uRHJhZzogbnVsbCxcbiAgICBvbkRyYWdFbmQ6IG51bGwsXG4gICAgb25EcmFnRW50ZXI6IG51bGwsXG4gICAgb25EcmFnRXhpdDogbnVsbCxcbiAgICBvbkRyYWdMZWF2ZTogbnVsbCxcbiAgICBvbkRyYWdPdmVyOiBudWxsLFxuICAgIG9uRHJhZ1N0YXJ0OiBudWxsLFxuICAgIG9uRHJvcDogbnVsbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBudWxsLFxuICAgIG9uRW1wdGllZDogbnVsbCxcbiAgICBvbkVuZDogbnVsbCxcbiAgICBvbkVuZGVkOiBudWxsLFxuICAgIG9uRXJyb3I6IG51bGwsXG4gICAgb25Gb2N1czogbnVsbCxcbiAgICBvbkZvY3VzSW46IG51bGwsXG4gICAgb25Gb2N1c091dDogbnVsbCxcbiAgICBvbkhhc2hDaGFuZ2U6IG51bGwsXG4gICAgb25JbnB1dDogbnVsbCxcbiAgICBvbkludmFsaWQ6IG51bGwsXG4gICAgb25LZXlEb3duOiBudWxsLFxuICAgIG9uS2V5UHJlc3M6IG51bGwsXG4gICAgb25LZXlVcDogbnVsbCxcbiAgICBvbkxvYWQ6IG51bGwsXG4gICAgb25Mb2FkZWREYXRhOiBudWxsLFxuICAgIG9uTG9hZGVkTWV0YWRhdGE6IG51bGwsXG4gICAgb25Mb2FkU3RhcnQ6IG51bGwsXG4gICAgb25NZXNzYWdlOiBudWxsLFxuICAgIG9uTW91c2VEb3duOiBudWxsLFxuICAgIG9uTW91c2VFbnRlcjogbnVsbCxcbiAgICBvbk1vdXNlTGVhdmU6IG51bGwsXG4gICAgb25Nb3VzZU1vdmU6IG51bGwsXG4gICAgb25Nb3VzZU91dDogbnVsbCxcbiAgICBvbk1vdXNlT3ZlcjogbnVsbCxcbiAgICBvbk1vdXNlVXA6IG51bGwsXG4gICAgb25Nb3VzZVdoZWVsOiBudWxsLFxuICAgIG9uT2ZmbGluZTogbnVsbCxcbiAgICBvbk9ubGluZTogbnVsbCxcbiAgICBvblBhZ2VIaWRlOiBudWxsLFxuICAgIG9uUGFnZVNob3c6IG51bGwsXG4gICAgb25QYXN0ZTogbnVsbCxcbiAgICBvblBhdXNlOiBudWxsLFxuICAgIG9uUGxheTogbnVsbCxcbiAgICBvblBsYXlpbmc6IG51bGwsXG4gICAgb25Qb3BTdGF0ZTogbnVsbCxcbiAgICBvblByb2dyZXNzOiBudWxsLFxuICAgIG9uUmF0ZUNoYW5nZTogbnVsbCxcbiAgICBvblJlcGVhdDogbnVsbCxcbiAgICBvblJlc2V0OiBudWxsLFxuICAgIG9uUmVzaXplOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIG9uU2Vla2VkOiBudWxsLFxuICAgIG9uU2Vla2luZzogbnVsbCxcbiAgICBvblNlbGVjdDogbnVsbCxcbiAgICBvblNob3c6IG51bGwsXG4gICAgb25TdGFsbGVkOiBudWxsLFxuICAgIG9uU3RvcmFnZTogbnVsbCxcbiAgICBvblN1Ym1pdDogbnVsbCxcbiAgICBvblN1c3BlbmQ6IG51bGwsXG4gICAgb25UaW1lVXBkYXRlOiBudWxsLFxuICAgIG9uVG9nZ2xlOiBudWxsLFxuICAgIG9uVW5sb2FkOiBudWxsLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBudWxsLFxuICAgIG9uV2FpdGluZzogbnVsbCxcbiAgICBvblpvb206IG51bGwsXG4gICAgb3BhY2l0eTogbnVsbCxcbiAgICBvcGVyYXRvcjogbnVsbCxcbiAgICBvcmRlcjogbnVsbCxcbiAgICBvcmllbnQ6IG51bGwsXG4gICAgb3JpZW50YXRpb246IG51bGwsXG4gICAgb3JpZ2luOiBudWxsLFxuICAgIG92ZXJmbG93OiBudWxsLFxuICAgIG92ZXJsYXk6IG51bGwsXG4gICAgb3ZlcmxpbmVQb3NpdGlvbjogbnVtYmVyLFxuICAgIG92ZXJsaW5lVGhpY2tuZXNzOiBudW1iZXIsXG4gICAgcGFpbnRPcmRlcjogbnVsbCxcbiAgICBwYW5vc2UxOiBudWxsLFxuICAgIHBhdGg6IG51bGwsXG4gICAgcGF0aExlbmd0aDogbnVtYmVyLFxuICAgIHBhdHRlcm5Db250ZW50VW5pdHM6IG51bGwsXG4gICAgcGF0dGVyblRyYW5zZm9ybTogbnVsbCxcbiAgICBwYXR0ZXJuVW5pdHM6IG51bGwsXG4gICAgcGhhc2U6IG51bGwsXG4gICAgcGluZzogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcGl0Y2g6IG51bGwsXG4gICAgcGxheWJhY2tPcmRlcjogbnVsbCxcbiAgICBwb2ludGVyRXZlbnRzOiBudWxsLFxuICAgIHBvaW50czogbnVsbCxcbiAgICBwb2ludHNBdFg6IG51bWJlcixcbiAgICBwb2ludHNBdFk6IG51bWJlcixcbiAgICBwb2ludHNBdFo6IG51bWJlcixcbiAgICBwcmVzZXJ2ZUFscGhhOiBudWxsLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IG51bGwsXG4gICAgcHJpbWl0aXZlVW5pdHM6IG51bGwsXG4gICAgcHJvcGFnYXRlOiBudWxsLFxuICAgIHByb3BlcnR5OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcjogbnVsbCxcbiAgICByYWRpdXM6IG51bGwsXG4gICAgcmVmZXJyZXJQb2xpY3k6IG51bGwsXG4gICAgcmVmWDogbnVsbCxcbiAgICByZWZZOiBudWxsLFxuICAgIHJlbDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJldjogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlbmRlcmluZ0ludGVudDogbnVsbCxcbiAgICByZXBlYXRDb3VudDogbnVsbCxcbiAgICByZXBlYXREdXI6IG51bGwsXG4gICAgcmVxdWlyZWRFeHRlbnNpb25zOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGZWF0dXJlczogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRm9udHM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZvcm1hdHM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXNvdXJjZTogbnVsbCxcbiAgICByZXN0YXJ0OiBudWxsLFxuICAgIHJlc3VsdDogbnVsbCxcbiAgICByb3RhdGU6IG51bGwsXG4gICAgcng6IG51bGwsXG4gICAgcnk6IG51bGwsXG4gICAgc2NhbGU6IG51bGwsXG4gICAgc2VlZDogbnVsbCxcbiAgICBzaGFwZVJlbmRlcmluZzogbnVsbCxcbiAgICBzaWRlOiBudWxsLFxuICAgIHNsb3BlOiBudWxsLFxuICAgIHNuYXBzaG90VGltZTogbnVsbCxcbiAgICBzcGVjdWxhckNvbnN0YW50OiBudW1iZXIsXG4gICAgc3BlY3VsYXJFeHBvbmVudDogbnVtYmVyLFxuICAgIHNwcmVhZE1ldGhvZDogbnVsbCxcbiAgICBzcGFjaW5nOiBudWxsLFxuICAgIHN0YXJ0T2Zmc2V0OiBudWxsLFxuICAgIHN0ZERldmlhdGlvbjogbnVsbCxcbiAgICBzdGVtaDogbnVsbCxcbiAgICBzdGVtdjogbnVsbCxcbiAgICBzdGl0Y2hUaWxlczogbnVsbCxcbiAgICBzdG9wQ29sb3I6IG51bGwsXG4gICAgc3RvcE9wYWNpdHk6IG51bGwsXG4gICAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiBudW1iZXIsXG4gICAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogbnVtYmVyLFxuICAgIHN0cmluZzogbnVsbCxcbiAgICBzdHJva2U6IG51bGwsXG4gICAgc3Ryb2tlRGFzaEFycmF5OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgc3Ryb2tlRGFzaE9mZnNldDogbnVsbCxcbiAgICBzdHJva2VMaW5lQ2FwOiBudWxsLFxuICAgIHN0cm9rZUxpbmVKb2luOiBudWxsLFxuICAgIHN0cm9rZU1pdGVyTGltaXQ6IG51bWJlcixcbiAgICBzdHJva2VPcGFjaXR5OiBudW1iZXIsXG4gICAgc3Ryb2tlV2lkdGg6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgc3VyZmFjZVNjYWxlOiBudW1iZXIsXG4gICAgc3luY0JlaGF2aW9yOiBudWxsLFxuICAgIHN5bmNCZWhhdmlvckRlZmF1bHQ6IG51bGwsXG4gICAgc3luY01hc3RlcjogbnVsbCxcbiAgICBzeW5jVG9sZXJhbmNlOiBudWxsLFxuICAgIHN5bmNUb2xlcmFuY2VEZWZhdWx0OiBudWxsLFxuICAgIHN5c3RlbUxhbmd1YWdlOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgdGFiSW5kZXg6IG51bWJlcixcbiAgICB0YWJsZVZhbHVlczogbnVsbCxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGFyZ2V0WDogbnVtYmVyLFxuICAgIHRhcmdldFk6IG51bWJlcixcbiAgICB0ZXh0QW5jaG9yOiBudWxsLFxuICAgIHRleHREZWNvcmF0aW9uOiBudWxsLFxuICAgIHRleHRSZW5kZXJpbmc6IG51bGwsXG4gICAgdGV4dExlbmd0aDogbnVsbCxcbiAgICB0aW1lbGluZUJlZ2luOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRyYW5zZm9ybUJlaGF2aW9yOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdHlwZU9mOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgdG86IG51bGwsXG4gICAgdHJhbnNmb3JtOiBudWxsLFxuICAgIHUxOiBudWxsLFxuICAgIHUyOiBudWxsLFxuICAgIHVuZGVybGluZVBvc2l0aW9uOiBudW1iZXIsXG4gICAgdW5kZXJsaW5lVGhpY2tuZXNzOiBudW1iZXIsXG4gICAgdW5pY29kZTogbnVsbCxcbiAgICB1bmljb2RlQmlkaTogbnVsbCxcbiAgICB1bmljb2RlUmFuZ2U6IG51bGwsXG4gICAgdW5pdHNQZXJFbTogbnVtYmVyLFxuICAgIHZhbHVlczogbnVsbCxcbiAgICB2QWxwaGFiZXRpYzogbnVtYmVyLFxuICAgIHZNYXRoZW1hdGljYWw6IG51bWJlcixcbiAgICB2ZWN0b3JFZmZlY3Q6IG51bGwsXG4gICAgdkhhbmdpbmc6IG51bWJlcixcbiAgICB2SWRlb2dyYXBoaWM6IG51bWJlcixcbiAgICB2ZXJzaW9uOiBudWxsLFxuICAgIHZlcnRBZHZZOiBudW1iZXIsXG4gICAgdmVydE9yaWdpblg6IG51bWJlcixcbiAgICB2ZXJ0T3JpZ2luWTogbnVtYmVyLFxuICAgIHZpZXdCb3g6IG51bGwsXG4gICAgdmlld1RhcmdldDogbnVsbCxcbiAgICB2aXNpYmlsaXR5OiBudWxsLFxuICAgIHdpZHRoOiBudWxsLFxuICAgIHdpZHRoczogbnVsbCxcbiAgICB3b3JkU3BhY2luZzogbnVsbCxcbiAgICB3cml0aW5nTW9kZTogbnVsbCxcbiAgICB4OiBudWxsLFxuICAgIHgxOiBudWxsLFxuICAgIHgyOiBudWxsLFxuICAgIHhDaGFubmVsU2VsZWN0b3I6IG51bGwsXG4gICAgeEhlaWdodDogbnVtYmVyLFxuICAgIHk6IG51bGwsXG4gICAgeTE6IG51bGwsXG4gICAgeTI6IG51bGwsXG4gICAgeUNoYW5uZWxTZWxlY3RvcjogbnVsbCxcbiAgICB6OiBudWxsLFxuICAgIHpvb21BbmRQYW46IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm1cblxuZnVuY3Rpb24gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3BlcnR5KSB7XG4gIHJldHVybiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgYXR0cmlidXRlKSB7XG4gIHJldHVybiBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcyA/IGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA6IGF0dHJpYnV0ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi8uLi9ub3JtYWxpemUnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcbnZhciBEZWZpbmVkSW5mbyA9IHJlcXVpcmUoJy4vZGVmaW5lZC1pbmZvJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuZnVuY3Rpb24gY3JlYXRlKGRlZmluaXRpb24pIHtcbiAgdmFyIHNwYWNlID0gZGVmaW5pdGlvbi5zcGFjZVxuICB2YXIgbXVzdFVzZVByb3BlcnR5ID0gZGVmaW5pdGlvbi5tdXN0VXNlUHJvcGVydHkgfHwgW11cbiAgdmFyIGF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLmF0dHJpYnV0ZXMgfHwge31cbiAgdmFyIHByb3BzID0gZGVmaW5pdGlvbi5wcm9wZXJ0aWVzXG4gIHZhciB0cmFuc2Zvcm0gPSBkZWZpbml0aW9uLnRyYW5zZm9ybVxuICB2YXIgcHJvcGVydHkgPSB7fVxuICB2YXIgbm9ybWFsID0ge31cbiAgdmFyIHByb3BcbiAgdmFyIGluZm9cblxuICBmb3IgKHByb3AgaW4gcHJvcHMpIHtcbiAgICBpbmZvID0gbmV3IERlZmluZWRJbmZvKFxuICAgICAgcHJvcCxcbiAgICAgIHRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wKSxcbiAgICAgIHByb3BzW3Byb3BdLFxuICAgICAgc3BhY2VcbiAgICApXG5cbiAgICBpZiAobXVzdFVzZVByb3BlcnR5LmluZGV4T2YocHJvcCkgIT09IC0xKSB7XG4gICAgICBpbmZvLm11c3RVc2VQcm9wZXJ0eSA9IHRydWVcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVtwcm9wXSA9IGluZm9cblxuICAgIG5vcm1hbFtub3JtYWxpemUocHJvcCldID0gcHJvcFxuICAgIG5vcm1hbFtub3JtYWxpemUoaW5mby5hdHRyaWJ1dGUpXSA9IHByb3BcbiAgfVxuXG4gIHJldHVybiBuZXcgU2NoZW1hKHByb3BlcnR5LCBub3JtYWwsIHNwYWNlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBJbmZvID0gcmVxdWlyZSgnLi9pbmZvJylcbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluZWRJbmZvXG5cbkRlZmluZWRJbmZvLnByb3RvdHlwZSA9IG5ldyBJbmZvKClcbkRlZmluZWRJbmZvLnByb3RvdHlwZS5kZWZpbmVkID0gdHJ1ZVxuXG52YXIgY2hlY2tzID0gW1xuICAnYm9vbGVhbicsXG4gICdib29sZWFuaXNoJyxcbiAgJ292ZXJsb2FkZWRCb29sZWFuJyxcbiAgJ251bWJlcicsXG4gICdjb21tYVNlcGFyYXRlZCcsXG4gICdzcGFjZVNlcGFyYXRlZCcsXG4gICdjb21tYU9yU3BhY2VTZXBhcmF0ZWQnXG5dXG52YXIgY2hlY2tzTGVuZ3RoID0gY2hlY2tzLmxlbmd0aFxuXG5mdW5jdGlvbiBEZWZpbmVkSW5mbyhwcm9wZXJ0eSwgYXR0cmlidXRlLCBtYXNrLCBzcGFjZSkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hlY2tcblxuICBtYXJrKHRoaXMsICdzcGFjZScsIHNwYWNlKVxuXG4gIEluZm8uY2FsbCh0aGlzLCBwcm9wZXJ0eSwgYXR0cmlidXRlKVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzTGVuZ3RoKSB7XG4gICAgY2hlY2sgPSBjaGVja3NbaW5kZXhdXG4gICAgbWFyayh0aGlzLCBjaGVjaywgKG1hc2sgJiB0eXBlc1tjaGVja10pID09PSB0eXBlc1tjaGVja10pXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFyayh2YWx1ZXMsIGtleSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFsdWVzW2tleV0gPSB2YWx1ZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBJbmZvXG5cbnZhciBwcm90byA9IEluZm8ucHJvdG90eXBlXG5cbnByb3RvLnNwYWNlID0gbnVsbFxucHJvdG8uYXR0cmlidXRlID0gbnVsbFxucHJvdG8ucHJvcGVydHkgPSBudWxsXG5wcm90by5ib29sZWFuID0gZmFsc2VcbnByb3RvLmJvb2xlYW5pc2ggPSBmYWxzZVxucHJvdG8ub3ZlcmxvYWRlZEJvb2xlYW4gPSBmYWxzZVxucHJvdG8ubnVtYmVyID0gZmFsc2VcbnByb3RvLmNvbW1hU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLnNwYWNlU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLmNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5tdXN0VXNlUHJvcGVydHkgPSBmYWxzZVxucHJvdG8uZGVmaW5lZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi9zY2hlbWEnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlXG5cbmZ1bmN0aW9uIG1lcmdlKGRlZmluaXRpb25zKSB7XG4gIHZhciBsZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGhcbiAgdmFyIHByb3BlcnR5ID0gW11cbiAgdmFyIG5vcm1hbCA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBpbmZvXG4gIHZhciBzcGFjZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaW5mbyA9IGRlZmluaXRpb25zW2luZGV4XVxuICAgIHByb3BlcnR5LnB1c2goaW5mby5wcm9wZXJ0eSlcbiAgICBub3JtYWwucHVzaChpbmZvLm5vcm1hbClcbiAgICBzcGFjZSA9IGluZm8uc3BhY2VcbiAgfVxuXG4gIHJldHVybiBuZXcgU2NoZW1hKFxuICAgIHh0ZW5kLmFwcGx5KG51bGwsIHByb3BlcnR5KSxcbiAgICB4dGVuZC5hcHBseShudWxsLCBub3JtYWwpLFxuICAgIHNwYWNlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYVxuXG52YXIgcHJvdG8gPSBTY2hlbWEucHJvdG90eXBlXG5cbnByb3RvLnNwYWNlID0gbnVsbFxucHJvdG8ubm9ybWFsID0ge31cbnByb3RvLnByb3BlcnR5ID0ge31cblxuZnVuY3Rpb24gU2NoZW1hKHByb3BlcnR5LCBub3JtYWwsIHNwYWNlKSB7XG4gIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eVxuICB0aGlzLm5vcm1hbCA9IG5vcm1hbFxuXG4gIGlmIChzcGFjZSkge1xuICAgIHRoaXMuc3BhY2UgPSBzcGFjZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHBvd2VycyA9IDBcblxuZXhwb3J0cy5ib29sZWFuID0gaW5jcmVtZW50KClcbmV4cG9ydHMuYm9vbGVhbmlzaCA9IGluY3JlbWVudCgpXG5leHBvcnRzLm92ZXJsb2FkZWRCb29sZWFuID0gaW5jcmVtZW50KClcbmV4cG9ydHMubnVtYmVyID0gaW5jcmVtZW50KClcbmV4cG9ydHMuc3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5leHBvcnRzLmNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5cbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsICsrcG93ZXJzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3hsaW5rJyxcbiAgdHJhbnNmb3JtOiB4bGlua1RyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhMaW5rQWN0dWF0ZTogbnVsbCxcbiAgICB4TGlua0FyY1JvbGU6IG51bGwsXG4gICAgeExpbmtIcmVmOiBudWxsLFxuICAgIHhMaW5rUm9sZTogbnVsbCxcbiAgICB4TGlua1Nob3c6IG51bGwsXG4gICAgeExpbmtUaXRsZTogbnVsbCxcbiAgICB4TGlua1R5cGU6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geGxpbmtUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gJ3hsaW5rOicgKyBwcm9wLnNsaWNlKDUpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bWwnLFxuICB0cmFuc2Zvcm06IHhtbFRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbExhbmc6IG51bGwsXG4gICAgeG1sQmFzZTogbnVsbCxcbiAgICB4bWxTcGFjZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiB4bWxUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gJ3htbDonICsgcHJvcC5zbGljZSgzKS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bWxucycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB4bWxuc3hsaW5rOiAneG1sbnM6eGxpbmsnXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeG1sbnM6IG51bGwsXG4gICAgeG1sbnNYTGluazogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZXJnZSA9IHJlcXVpcmUoJy4vbGliL3V0aWwvbWVyZ2UnKVxudmFyIHhsaW5rID0gcmVxdWlyZSgnLi9saWIveGxpbmsnKVxudmFyIHhtbCA9IHJlcXVpcmUoJy4vbGliL3htbCcpXG52YXIgeG1sbnMgPSByZXF1aXJlKCcuL2xpYi94bWxucycpXG52YXIgYXJpYSA9IHJlcXVpcmUoJy4vbGliL2FyaWEnKVxudmFyIHN2ZyA9IHJlcXVpcmUoJy4vbGliL3N2ZycpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UoW3htbCwgeGxpbmssIHhtbG5zLCBhcmlhLCBzdmddKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciB0b0hUTUwgPSByZXF1aXJlKCdoYXN0LXV0aWwtdG8taHRtbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShjb25maWcpIHtcbiAgdmFyIHNldHRpbmdzID0geHRlbmQoY29uZmlnLCB0aGlzLmRhdGEoJ3NldHRpbmdzJykpXG5cbiAgdGhpcy5Db21waWxlciA9IGNvbXBpbGVyXG5cbiAgZnVuY3Rpb24gY29tcGlsZXIodHJlZSkge1xuICAgIHJldHVybiB0b0hUTUwodHJlZSwgc2V0dGluZ3MpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBlbXB0eSA9ICcnXG52YXIgc3BhY2UgPSAnICdcbnZhciB3aGl0ZVNwYWNlID0gL1sgXFx0XFxuXFxyXFxmXSsvZ1xuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpLnRyaW0oKVxuICByZXR1cm4gaW5wdXQgPT09IGVtcHR5ID8gW10gOiBpbnB1dC5zcGxpdCh3aGl0ZVNwYWNlKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMuam9pbihzcGFjZSkudHJpbSgpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9