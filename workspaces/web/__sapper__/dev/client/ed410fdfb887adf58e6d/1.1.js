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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9jb21tYS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1pcy1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL2Nsb3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL29taXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9vbWlzc2lvbi9vbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vb3BlbmluZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9maXJzdC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC9zaWJsaW5ncy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb21pc3Npb24vdXRpbC93aGl0ZS1zcGFjZS1zdGFydC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8taHRtbC9saWIvb25lLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1odG1sL2xpYi9yYXcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLWh0bWwvbGliL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vZmluZC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9hcmlhLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9odG1sLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9kZWZpbmVkLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvaW5mby5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3hsaW5rLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3htbG5zLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9zcGFjZS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVDWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFPOzs7Ozs7Ozs7Ozs7O0FDRHBCOztBQUVaLFVBQVUsbUJBQU8sQ0FBQyw4REFBTzs7QUFFekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJZOztBQUVaLFlB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OEVBQXNCO0FBQzVDLHNCQUFzQixtQkFBTyxDQUFDLDZHQUEwQjtBQUN4RCxZQUFZLG1CQUFPLENBQUMsMkZBQWlCO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyxpRkFBWTs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Qjs7QUFFeEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlZDQxMGZkZmI4ODdhZGY1OGU2ZC8xLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgY29tbWEgPSAnLCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVtcHR5ID0gJydcblxuLy8gUGFyc2UgY29tbWEtc2VwYXJhdGVkIHRva2VucyB0byBhbiBhcnJheS5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpXG4gIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEpXG4gIHZhciBsYXN0SW5kZXggPSAwXG4gIHZhciBlbmQgPSBmYWxzZVxuICB2YXIgdmFsXG5cbiAgd2hpbGUgKCFlbmQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGlucHV0Lmxlbmd0aFxuICAgICAgZW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIHZhbCA9IGlucHV0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpLnRyaW0oKVxuXG4gICAgaWYgKHZhbCB8fCAhZW5kKSB7XG4gICAgICB2YWx1ZXMucHVzaCh2YWwpXG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hLCBsYXN0SW5kZXgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzXG59XG5cbi8vIENvbXBpbGUgYW4gYXJyYXkgdG8gY29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbi8vIGBvcHRpb25zLnBhZExlZnRgIChkZWZhdWx0OiBgdHJ1ZWApIHBhZHMgYSBzcGFjZSBsZWZ0IG9mIGVhY2ggdG9rZW4sIGFuZFxuLy8gYG9wdGlvbnMucGFkUmlnaHRgIChkZWZhdWx0OiBgZmFsc2VgKSBwYWRzIGEgc3BhY2UgdG8gdGhlIHJpZ2h0IG9mIGVhY2ggdG9rZW4uXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGxlZnQgPSBzZXR0aW5ncy5wYWRMZWZ0ID09PSBmYWxzZSA/IGVtcHR5IDogc3BhY2VcbiAgdmFyIHJpZ2h0ID0gc2V0dGluZ3MucGFkUmlnaHQgPyBzcGFjZSA6IGVtcHR5XG5cbiAgLy8gRW5zdXJlIHRoZSBsYXN0IGVtcHR5IGVudHJ5IGlzIHNlZW4uXG4gIGlmICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSBlbXB0eSkge1xuICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoZW1wdHkpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4ocmlnaHQgKyBjb21tYSArIGxlZnQpLnRyaW0oKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50XG5cbi8vIENoZWNrIGlmIGlmIGBub2RlYCBpcyBhbiBgZWxlbWVudGAgYW5kLCBpZiBgdGFnTmFtZXNgIGlzIGdpdmVuLCBgbm9kZWBcbi8vIG1hdGNoZXMgdGhlbSBgdGFnTmFtZXNgLlxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUsIHRhZ05hbWVzKSB7XG4gIHZhciBuYW1lXG5cbiAgaWYgKFxuICAgICEoXG4gICAgICB0YWdOYW1lcyA9PT0gbnVsbCB8fFxuICAgICAgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJyB8fFxuICAgICAgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ29iamVjdCcgJiYgdGFnTmFtZXMubGVuZ3RoICE9PSAwKVxuICAgIClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0V4cGVjdGVkIGBzdHJpbmdgIG9yIGBBcnJheS48c3RyaW5nPmAgZm9yIGB0YWdOYW1lc2AsIG5vdCBgJyArXG4gICAgICAgIHRhZ05hbWVzICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKFxuICAgICFub2RlIHx8XG4gICAgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8XG4gICAgbm9kZS50eXBlICE9PSAnZWxlbWVudCcgfHxcbiAgICB0eXBlb2Ygbm9kZS50YWdOYW1lICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0YWdOYW1lcyA9PT0gbnVsbCB8fCB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5hbWUgPSBub2RlLnRhZ05hbWVcblxuICBpZiAodHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuYW1lID09PSB0YWdOYW1lc1xuICB9XG5cbiAgcmV0dXJuIHRhZ05hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xXG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWInKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvbmUgPSByZXF1aXJlKCcuL29uZScpXG5cbm1vZHVsZS5leHBvcnRzID0gYWxsXG5cbi8vIFNlcmlhbGl6ZSBhbGwgY2hpbGRyZW4gb2YgYHBhcmVudGAuXG5mdW5jdGlvbiBhbGwoY3R4LCBwYXJlbnQpIHtcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHRzID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gb25lKGN0eCwgY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdzdHJpbmdpZnktZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZUNvbW1lbnRcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjY29tbWVudHM+XG52YXIgYnJlYWtvdXQgPSAvXj58Xi0+fDwhLS18LS0+fC0tIT58PCEtJC9nXG52YXIgc3Vic2V0ID0gWyc8JywgJz4nXVxudmFyIGJvZ3VzU3Vic2V0ID0gWyc+J11cblxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudChjdHgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZVxuXG4gIGlmIChjdHguYm9ndXNDb21tZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICAnPD8nICsgZW50aXRpZXModmFsdWUsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogYm9ndXNTdWJzZXR9KSkgKyAnPidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJzwhLS0nICsgdmFsdWUucmVwbGFjZShicmVha291dCwgZW5jb2RlKSArICctLT4nXG5cbiAgZnVuY3Rpb24gZW5jb2RlKCQwKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzKCQwLCB4dGVuZChjdHguZW50aXRpZXMsIHtzdWJzZXQ6IHN1YnNldH0pKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gQ2hhcmFjdGVycy5cbnZhciBuaWwgPSAnXFwwJ1xudmFyIGFtcGVyc2FuZCA9ICcmJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgdGFiID0gJ1xcdCdcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgZXF1YWxzVG8gPSAnPSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgc2xhc2ggPSAnLydcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgY2FycmlhZ2VSZXR1cm4gPSAnXFxyJ1xudmFyIGZvcm1GZWVkID0gJ1xcZidcblxudmFyIHdoaXRlc3BhY2UgPSBbc3BhY2UsIHRhYiwgbGluZUZlZWQsIGNhcnJpYWdlUmV0dXJuLCBmb3JtRmVlZF1cblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLW5hbWUtc3RhdGU+LlxudmFyIG5hbWUgPSB3aGl0ZXNwYWNlLmNvbmNhdChhbXBlcnNhbmQsIHNsYXNoLCBncmVhdGVyVGhhbiwgZXF1YWxzVG8pXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2F0dHJpYnV0ZS12YWx1ZS0odW5xdW90ZWQpLXN0YXRlPi5cbnZhciB1bnF1b3RlZCA9IHdoaXRlc3BhY2UuY29uY2F0KGFtcGVyc2FuZCwgZ3JlYXRlclRoYW4pXG52YXIgdW5xdW90ZWRTYWZlID0gdW5xdW90ZWQuY29uY2F0KFxuICBuaWwsXG4gIHF1b3RhdGlvbk1hcmssXG4gIGFwb3N0cm9waGUsXG4gIGxlc3NUaGFuLFxuICBlcXVhbHNUbyxcbiAgZ3JhdmVBY2NlbnRcbilcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLXZhbHVlLShzaW5nbGUtcXVvdGVkKS1zdGF0ZT4uXG52YXIgc2luZ2xlUXVvdGVkID0gW2FtcGVyc2FuZCwgYXBvc3Ryb3BoZV1cblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jYXR0cmlidXRlLXZhbHVlLShkb3VibGUtcXVvdGVkKS1zdGF0ZT4uXG52YXIgZG91YmxlUXVvdGVkID0gW2FtcGVyc2FuZCwgcXVvdGF0aW9uTWFya11cblxuLy8gTWFwcyBvZiBzdWJzZXRzLlxuLy8gRWFjaCB2YWx1ZSBpcyBhIG1hdHJpeCBvZiB0dXBsZXMuXG4vLyBUaGUgZmlyc3QgdmFsdWUgY2F1c2VzIHBhcnNlIGVycm9ycywgdGhlIHNlY29uZCBpcyB2YWxpZC5cbi8vIE9mIGJvdGggdmFsdWVzLCB0aGUgZmlyc3QgdmFsdWUgaXMgdW5zYWZlLCBhbmQgdGhlIHNlY29uZCBpcyBzYWZlLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6IFtcbiAgICBbbmFtZSwgbmFtZS5jb25jYXQocXVvdGF0aW9uTWFyaywgYXBvc3Ryb3BoZSwgZ3JhdmVBY2NlbnQpXSxcbiAgICBbXG4gICAgICBuYW1lLmNvbmNhdChuaWwsIHF1b3RhdGlvbk1hcmssIGFwb3N0cm9waGUsIGxlc3NUaGFuKSxcbiAgICAgIG5hbWUuY29uY2F0KG5pbCwgcXVvdGF0aW9uTWFyaywgYXBvc3Ryb3BoZSwgbGVzc1RoYW4sIGdyYXZlQWNjZW50KVxuICAgIF1cbiAgXSxcbiAgdW5xdW90ZWQ6IFtcbiAgICBbdW5xdW90ZWQsIHVucXVvdGVkU2FmZV0sXG4gICAgW3VucXVvdGVkU2FmZSwgdW5xdW90ZWRTYWZlXVxuICBdLFxuICBzaW5nbGU6IFtcbiAgICBbc2luZ2xlUXVvdGVkLCBzaW5nbGVRdW90ZWQuY29uY2F0KHF1b3RhdGlvbk1hcmssIGdyYXZlQWNjZW50KV0sXG4gICAgW1xuICAgICAgc2luZ2xlUXVvdGVkLmNvbmNhdChuaWwpLFxuICAgICAgc2luZ2xlUXVvdGVkLmNvbmNhdChuaWwsIHF1b3RhdGlvbk1hcmssIGdyYXZlQWNjZW50KVxuICAgIF1cbiAgXSxcbiAgZG91YmxlOiBbXG4gICAgW2RvdWJsZVF1b3RlZCwgZG91YmxlUXVvdGVkLmNvbmNhdChhcG9zdHJvcGhlLCBncmF2ZUFjY2VudCldLFxuICAgIFtcbiAgICAgIGRvdWJsZVF1b3RlZC5jb25jYXQobmlsKSxcbiAgICAgIGRvdWJsZVF1b3RlZC5jb25jYXQobmlsLCBhcG9zdHJvcGhlLCBncmF2ZUFjY2VudClcbiAgICBdXG4gIF1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplRG9jdHlwZVxuXG52YXIgZG9jTG93ZXIgPSAnZG9jdHlwZSdcbnZhciBkb2NVcHBlciA9IGRvY0xvd2VyLnRvVXBwZXJDYXNlKClcblxuZnVuY3Rpb24gc2VyaWFsaXplRG9jdHlwZShjdHgsIG5vZGUpIHtcbiAgdmFyIGRvYyA9IGN0eC51cHBlckRvY3R5cGUgPyBkb2NVcHBlciA6IGRvY0xvd2VyXG4gIHZhciBzZXAgPSBjdHgudGlnaHREb2N0eXBlID8gJycgOiAnICdcbiAgdmFyIG5hbWUgPSBub2RlLm5hbWVcbiAgdmFyIHB1YiA9IG5vZGUucHVibGljXG4gIHZhciBzeXMgPSBub2RlLnN5c3RlbVxuICB2YXIgdmFsID0gWyc8IScgKyBkb2NdXG5cbiAgaWYgKG5hbWUpIHtcbiAgICB2YWwucHVzaChzZXAsIG5hbWUpXG5cbiAgICBpZiAocHViICE9PSBudWxsICYmIHB1YiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWwucHVzaCgnIHB1YmxpYycsIHNlcCwgcXVvdGUoY3R4LCBwdWIpKVxuICAgIH0gZWxzZSBpZiAoc3lzICE9PSBudWxsICYmIHN5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWwucHVzaCgnIHN5c3RlbScpXG4gICAgfVxuXG4gICAgaWYgKHN5cyAhPT0gbnVsbCAmJiBzeXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsLnB1c2goc2VwLCBxdW90ZShjdHgsIHN5cykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbC5qb2luKCcnKSArICc+J1xufVxuXG5mdW5jdGlvbiBxdW90ZShjdHgsIHZhbHVlKSB7XG4gIHZhciBwcmltYXJ5ID0gY3R4LnF1b3RlXG4gIHZhciBzZWNvbmRhcnkgPSBjdHguYWx0ZXJuYXRpdmVcbiAgdmFyIHZhbCA9IFN0cmluZyh2YWx1ZSlcbiAgdmFyIHF1b3RlID1cbiAgICBjY291bnQodmFsLCBwcmltYXJ5KSA+IGNjb3VudCh2YWwsIHNlY29uZGFyeSkgPyBzZWNvbmRhcnkgOiBwcmltYXJ5XG5cbiAgcmV0dXJuIChcbiAgICBxdW90ZSArXG4gICAgLy8gUHJldmVudCBicmVha2luZyBvdXQgb2YgZG9jdHlwZS5cbiAgICBlbnRpdGllcyh2YWwsIHh0ZW5kKGN0eC5lbnRpdGllcywge3N1YnNldDogWyc8JywgJyYnLCBxdW90ZV19KSkgK1xuICAgIHF1b3RlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgc3ZnID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vc3ZnJylcbnZhciBmaW5kID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vZmluZCcpXG52YXIgc3BhY2VzID0gcmVxdWlyZSgnc3BhY2Utc2VwYXJhdGVkLXRva2VucycpLnN0cmluZ2lmeVxudmFyIGNvbW1hcyA9IHJlcXVpcmUoJ2NvbW1hLXNlcGFyYXRlZC10b2tlbnMnKS5zdHJpbmdpZnlcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZUVsZW1lbnRcblxudmFyIHNwYWNlID0gJyAnXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBlcXVhbHNUbyA9ICc9J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBzbGFzaCA9ICcvJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudChjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHBhcmVudFNjaGVtYSA9IGN0eC5zY2hlbWFcbiAgdmFyIG5hbWUgPSBub2RlLnRhZ05hbWVcbiAgdmFyIHZhbHVlID0gJydcbiAgdmFyIHNlbGZDbG9zaW5nXG4gIHZhciBjbG9zZVxuICB2YXIgb21pdFxuICB2YXIgcm9vdCA9IG5vZGVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGF0dHJzXG4gIHZhciBsYXN0XG5cbiAgaWYgKHBhcmVudFNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnICYmIG5hbWUgPT09ICdzdmcnKSB7XG4gICAgY3R4LnNjaGVtYSA9IHN2Z1xuICB9XG5cbiAgYXR0cnMgPSBzZXJpYWxpemVBdHRyaWJ1dGVzKGN0eCwgbm9kZS5wcm9wZXJ0aWVzKVxuXG4gIGlmIChjdHguc2NoZW1hLnNwYWNlID09PSAnc3ZnJykge1xuICAgIG9taXQgPSBmYWxzZVxuICAgIGNsb3NlID0gdHJ1ZVxuICAgIHNlbGZDbG9zaW5nID0gY3R4LmNsb3NlRW1wdHlcbiAgfSBlbHNlIHtcbiAgICBvbWl0ID0gY3R4Lm9taXRcbiAgICBjbG9zZSA9IGN0eC5jbG9zZVxuICAgIHNlbGZDbG9zaW5nID0gY3R4LnZvaWRzLmluZGV4T2YobmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcblxuICAgIGlmIChuYW1lID09PSAndGVtcGxhdGUnKSB7XG4gICAgICByb290ID0gbm9kZS5jb250ZW50XG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IGFsbChjdHgsIHJvb3QpXG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgY2F0ZWdvcmlzZWQgYXMgdm9pZCwgYnV0IGl0IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIHRoZVxuICAvLyBjYXRlZ29yaXNhdGlvbi5cbiAgLy8gVGhpcyBlbmFibGVzIGZvciBleGFtcGxlIGBtZW51aXRlbWBzLCB3aGljaCBhcmUgdm9pZCBpbiBXM0MgSFRNTCBidXQgbm90XG4gIC8vIHZvaWQgaW4gV0hBVFdHIEhUTUwsIHRvIGJlIHN0cmluZ2lmaWVkIHByb3Blcmx5LlxuICBzZWxmQ2xvc2luZyA9IGNvbnRlbnQgPyBmYWxzZSA6IHNlbGZDbG9zaW5nXG5cbiAgaWYgKGF0dHJzIHx8ICFvbWl0IHx8ICFvbWl0Lm9wZW5pbmcobm9kZSwgaW5kZXgsIHBhcmVudCkpIHtcbiAgICB2YWx1ZSA9IGxlc3NUaGFuICsgbmFtZSArIChhdHRycyA/IHNwYWNlICsgYXR0cnMgOiAnJylcblxuICAgIGlmIChzZWxmQ2xvc2luZyAmJiBjbG9zZSkge1xuICAgICAgbGFzdCA9IGF0dHJzLmNoYXJBdChhdHRycy5sZW5ndGggLSAxKVxuICAgICAgaWYgKFxuICAgICAgICAhY3R4LnRpZ2h0Q2xvc2UgfHxcbiAgICAgICAgbGFzdCA9PT0gc2xhc2ggfHxcbiAgICAgICAgKGN0eC5zY2hlbWEuc3BhY2UgPT09ICdzdmcnICYmXG4gICAgICAgICAgbGFzdCAmJlxuICAgICAgICAgIGxhc3QgIT09IHF1b3RhdGlvbk1hcmsgJiZcbiAgICAgICAgICBsYXN0ICE9PSBhcG9zdHJvcGhlKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlICs9IHNwYWNlXG4gICAgICB9XG5cbiAgICAgIHZhbHVlICs9IHNsYXNoXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gZ3JlYXRlclRoYW5cbiAgfVxuXG4gIHZhbHVlICs9IGNvbnRlbnRcblxuICBpZiAoIXNlbGZDbG9zaW5nICYmICghb21pdCB8fCAhb21pdC5jbG9zaW5nKG5vZGUsIGluZGV4LCBwYXJlbnQpKSkge1xuICAgIHZhbHVlICs9IGxlc3NUaGFuICsgc2xhc2ggKyBuYW1lICsgZ3JlYXRlclRoYW5cbiAgfVxuXG4gIGN0eC5zY2hlbWEgPSBwYXJlbnRTY2hlbWFcblxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlcyhjdHgsIHByb3BzKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuICB2YXIgcmVzdWx0XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG4gIHZhciBsYXN0XG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICB2YWx1ZSA9IHByb3BzW2tleV1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHJlc3VsdCA9IHNlcmlhbGl6ZUF0dHJpYnV0ZShjdHgsIGtleSwgdmFsdWUpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB2YWx1ZXMucHVzaChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSB2YWx1ZXNbaW5kZXhdXG4gICAgbGFzdCA9IG51bGxcblxuICAgIGlmIChjdHgudGlnaHQpIHtcbiAgICAgIGxhc3QgPSByZXN1bHQuY2hhckF0KHJlc3VsdC5sZW5ndGggLSAxKVxuICAgIH1cblxuICAgIC8vIEluIHRpZ2h0IG1vZGUsIGRvbuKAmXQgYWRkIGEgc3BhY2UgYWZ0ZXIgcXVvdGVkIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGluZGV4ICE9PSBsZW5ndGggLSAxICYmIGxhc3QgIT09IHF1b3RhdGlvbk1hcmsgJiYgbGFzdCAhPT0gYXBvc3Ryb3BoZSkge1xuICAgICAgdmFsdWVzW2luZGV4XSA9IHJlc3VsdCArIHNwYWNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGUoY3R4LCBrZXksIHZhbHVlKSB7XG4gIHZhciBzY2hlbWEgPSBjdHguc2NoZW1hXG4gIHZhciBpbmZvID0gZmluZChzY2hlbWEsIGtleSlcbiAgdmFyIG5hbWUgPSBpbmZvLmF0dHJpYnV0ZVxuXG4gIGlmIChpbmZvLm92ZXJsb2FkZWRCb29sZWFuICYmICh2YWx1ZSA9PT0gbmFtZSB8fCB2YWx1ZSA9PT0gJycpKSB7XG4gICAgdmFsdWUgPSB0cnVlXG4gIH0gZWxzZSBpZiAoXG4gICAgaW5mby5ib29sZWFuIHx8XG4gICAgKGluZm8ub3ZlcmxvYWRlZEJvb2xlYW4gJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJylcbiAgKSB7XG4gICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgaWYgKFxuICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgIHZhbHVlID09PSBmYWxzZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSlcbiAgKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBuYW1lID0gc2VyaWFsaXplQXR0cmlidXRlTmFtZShjdHgsIG5hbWUpXG5cbiAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgLy8gVGhlcmUgaXMgY3VycmVudGx5IG9ubHkgb25lIGJvb2xlYW4gcHJvcGVydHkgaW4gU1ZHOiBgW2Rvd25sb2FkXWAgb25cbiAgICAvLyBgPGE+YC5cbiAgICAvLyBUaGlzIHByb3BlcnR5IGRvZXMgbm90IHNlZW0gdG8gd29yayBpbiBicm93c2VycyAoRkYsIFNhLCBDaCksIHNvIEkgY2Fu4oCZdFxuICAgIC8vIHRlc3QgaWYgZHJvcHBpbmcgdGhlIHZhbHVlIHdvcmtzLlxuICAgIC8vIEJ1dCBJIGFzc3VtZSB0aGF0IGl0IHNob3VsZDpcbiAgICAvL1xuICAgIC8vIGBgYGh0bWxcbiAgICAvLyA8IWRvY3R5cGUgaHRtbD5cbiAgICAvLyA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgIC8vICAgPGEgaHJlZj1odHRwczovL2V4YW1wbGUuY29tIGRvd25sb2FkPlxuICAgIC8vICAgICA8Y2lyY2xlIGN4PTUwIGN5PTQwIHI9MzUgLz5cbiAgICAvLyAgIDwvYT5cbiAgICAvLyA8L3N2Zz5cbiAgICAvLyBgYGBcbiAgICAvL1xuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vcHJvcGVydHktaW5mb3JtYXRpb24vYmxvYi9tYXN0ZXIvbGliL3N2Zy5qcz5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZShjdHgsIGtleSwgdmFsdWUsIGluZm8pXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUF0dHJpYnV0ZU5hbWUoY3R4LCBuYW1lKSB7XG4gIC8vIEFsd2F5cyBlbmNvZGUgd2l0aG91dCBwYXJzZSBlcnJvcnMgaW4gbm9uLUhUTUwuXG4gIHZhciB2YWxpZCA9IGN0eC5zY2hlbWEuc3BhY2UgPT09ICdodG1sJyA/IGN0eC52YWxpZCA6IDFcbiAgdmFyIHN1YnNldCA9IGNvbnN0YW50cy5uYW1lW3ZhbGlkXVtjdHguc2FmZV1cblxuICByZXR1cm4gZW50aXRpZXMobmFtZSwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBzdWJzZXR9KSlcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlVmFsdWUoY3R4LCBrZXksIHZhbHVlLCBpbmZvKSB7XG4gIHZhciBvcHRpb25zID0gY3R4LmVudGl0aWVzXG4gIHZhciBxdW90ZSA9IGN0eC5xdW90ZVxuICB2YXIgYWx0ZXJuYXRpdmUgPSBjdHguYWx0ZXJuYXRpdmVcbiAgdmFyIHNtYXJ0ID0gY3R4LnNtYXJ0XG4gIHZhciB1bnF1b3RlZFxuICB2YXIgc3Vic2V0XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAvLyBgc3BhY2VzYCBkb2VzbuKAmXQgYWNjZXB0IGEgc2Vjb25kIGFyZ3VtZW50LCBidXQgaXTigJlzIGdpdmVuIGhlcmUganVzdCB0b1xuICAgIC8vIGtlZXAgdGhlIGNvZGUgY2xlYW5lci5cbiAgICB2YWx1ZSA9IChpbmZvLmNvbW1hU2VwYXJhdGVkID8gY29tbWFzIDogc3BhY2VzKSh2YWx1ZSwge1xuICAgICAgcGFkTGVmdDogIWN0eC50aWdodExpc3RzXG4gICAgfSlcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gIGlmICh2YWx1ZSB8fCAhY3R4LmNvbGxhcHNlRW1wdHkpIHtcbiAgICB1bnF1b3RlZCA9IHZhbHVlXG5cbiAgICAvLyBDaGVjayB1bnF1b3RlZCB2YWx1ZS5cbiAgICBpZiAoY3R4LnVucXVvdGVkKSB7XG4gICAgICBzdWJzZXQgPSBjb25zdGFudHMudW5xdW90ZWRbY3R4LnZhbGlkXVtjdHguc2FmZV1cbiAgICAgIHVucXVvdGVkID0gZW50aXRpZXMoXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB4dGVuZChvcHRpb25zLCB7c3Vic2V0OiBzdWJzZXQsIGF0dHJpYnV0ZTogdHJ1ZX0pXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gSWYgYHZhbHVlYCBjb250YWlucyBlbnRpdGllcyB3aGVuIHVucXVvdGVk4oCmXG4gICAgaWYgKCFjdHgudW5xdW90ZWQgfHwgdW5xdW90ZWQgIT09IHZhbHVlKSB7XG4gICAgICAvLyBJZiB0aGUgYWx0ZXJuYXRpdmUgaXMgbGVzcyBjb21tb24gdGhhbiBgcXVvdGVgLCBzd2l0Y2guXG4gICAgICBpZiAoc21hcnQgJiYgY2NvdW50KHZhbHVlLCBxdW90ZSkgPiBjY291bnQodmFsdWUsIGFsdGVybmF0aXZlKSkge1xuICAgICAgICBxdW90ZSA9IGFsdGVybmF0aXZlXG4gICAgICB9XG5cbiAgICAgIHN1YnNldCA9IHF1b3RlID09PSBhcG9zdHJvcGhlID8gY29uc3RhbnRzLnNpbmdsZSA6IGNvbnN0YW50cy5kb3VibGVcbiAgICAgIC8vIEFsd2F5cyBlbmNvZGUgd2l0aG91dCBwYXJzZSBlcnJvcnMgaW4gbm9uLUhUTUwuXG4gICAgICBzdWJzZXQgPSBzdWJzZXRbY3R4LnNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnID8gY3R4LnZhbGlkIDogMV1bY3R4LnNhZmVdXG5cbiAgICAgIHZhbHVlID0gZW50aXRpZXModmFsdWUsIHh0ZW5kKG9wdGlvbnMsIHtzdWJzZXQ6IHN1YnNldCwgYXR0cmlidXRlOiB0cnVlfSkpXG5cbiAgICAgIHZhbHVlID0gcXVvdGUgKyB2YWx1ZSArIHF1b3RlXG4gICAgfVxuXG4gICAgLy8gRG9u4oCZdCBhZGQgYSBgPWAgZm9yIHVucXVvdGVkIGVtcHRpZXMuXG4gICAgdmFsdWUgPSB2YWx1ZSA/IGVxdWFsc1RvICsgdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGh0bWwgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sJylcbnZhciBzdmcgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcnKVxudmFyIHZvaWRzID0gcmVxdWlyZSgnaHRtbC12b2lkLWVsZW1lbnRzJylcbnZhciBvbWlzc2lvbiA9IHJlcXVpcmUoJy4vb21pc3Npb24nKVxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxubW9kdWxlLmV4cG9ydHMgPSB0b0h0bWxcblxudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG5cbnZhciBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiB0b0h0bWwobm9kZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBxdW90ZSA9IHNldHRpbmdzLnF1b3RlIHx8IHF1b3RhdGlvbk1hcmtcbiAgdmFyIGFsdGVybmF0aXZlID0gcXVvdGUgPT09IHF1b3RhdGlvbk1hcmsgPyBhcG9zdHJvcGhlIDogcXVvdGF0aW9uTWFya1xuICB2YXIgc21hcnQgPSBzZXR0aW5ncy5xdW90ZVNtYXJ0XG4gIHZhciB2YWx1ZSA9XG4gICAgbm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gbm9kZVxuICAgICAgPyB7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogbm9kZX1cbiAgICAgIDogbm9kZVxuXG4gIGlmIChxdW90ZSAhPT0gcXVvdGF0aW9uTWFyayAmJiBxdW90ZSAhPT0gYXBvc3Ryb3BoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbnZhbGlkIHF1b3RlIGAnICtcbiAgICAgICAgcXVvdGUgK1xuICAgICAgICAnYCwgZXhwZWN0ZWQgYCcgK1xuICAgICAgICBhcG9zdHJvcGhlICtcbiAgICAgICAgJ2Agb3IgYCcgK1xuICAgICAgICBxdW90YXRpb25NYXJrICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0RlcHJlY2F0aW9uIHdhcm5pbmc6IGBhbGxvd0Rhbmdlcm91c0hUTUxgIGlzIGEgbm9uc3RhbmRhcmQgb3B0aW9uLCB1c2UgYGFsbG93RGFuZ2Vyb3VzSHRtbGAgaW5zdGVhZCdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb25lKFxuICAgIHtcbiAgICAgIHZhbGlkOiBzZXR0aW5ncy5hbGxvd1BhcnNlRXJyb3JzID8gMCA6IDEsXG4gICAgICBzYWZlOiBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0NoYXJhY3RlcnMgPyAwIDogMSxcbiAgICAgIHNjaGVtYTogc2V0dGluZ3Muc3BhY2UgPT09ICdzdmcnID8gc3ZnIDogaHRtbCxcbiAgICAgIG9taXQ6IHNldHRpbmdzLm9taXRPcHRpb25hbFRhZ3MgJiYgb21pc3Npb24sXG4gICAgICBxdW90ZTogcXVvdGUsXG4gICAgICBhbHRlcm5hdGl2ZTogYWx0ZXJuYXRpdmUsXG4gICAgICBzbWFydDogc21hcnQsXG4gICAgICB1bnF1b3RlZDogQm9vbGVhbihzZXR0aW5ncy5wcmVmZXJVbnF1b3RlZCksXG4gICAgICB0aWdodDogc2V0dGluZ3MudGlnaHRBdHRyaWJ1dGVzLFxuICAgICAgdXBwZXJEb2N0eXBlOiBCb29sZWFuKHNldHRpbmdzLnVwcGVyRG9jdHlwZSksXG4gICAgICB0aWdodERvY3R5cGU6IEJvb2xlYW4oc2V0dGluZ3MudGlnaHREb2N0eXBlKSxcbiAgICAgIGJvZ3VzQ29tbWVudHM6IEJvb2xlYW4oc2V0dGluZ3MuYm9ndXNDb21tZW50cyksXG4gICAgICB0aWdodExpc3RzOiBzZXR0aW5ncy50aWdodENvbW1hU2VwYXJhdGVkTGlzdHMsXG4gICAgICB0aWdodENsb3NlOiBzZXR0aW5ncy50aWdodFNlbGZDbG9zaW5nLFxuICAgICAgY29sbGFwc2VFbXB0eTogc2V0dGluZ3MuY29sbGFwc2VFbXB0eUF0dHJpYnV0ZXMsXG4gICAgICBkYW5nZXJvdXM6IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSHRtbCB8fCBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUwsXG4gICAgICB2b2lkczogc2V0dGluZ3Mudm9pZHMgfHwgdm9pZHMuY29uY2F0KCksXG4gICAgICBlbnRpdGllczogc2V0dGluZ3MuZW50aXRpZXMgfHwge30sXG4gICAgICBjbG9zZTogc2V0dGluZ3MuY2xvc2VTZWxmQ2xvc2luZyxcbiAgICAgIGNsb3NlRW1wdHk6IHNldHRpbmdzLmNsb3NlRW1wdHlFbGVtZW50c1xuICAgIH0sXG4gICAgdmFsdWVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBlbGVtZW50ID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIHdoaXRlU3BhY2VTdGFydCA9IHJlcXVpcmUoJy4vdXRpbC93aGl0ZS1zcGFjZS1zdGFydCcpXG52YXIgYWZ0ZXIgPSByZXF1aXJlKCcuL3V0aWwvc2libGluZ3MnKS5hZnRlclxudmFyIG9taXNzaW9uID0gcmVxdWlyZSgnLi9vbWlzc2lvbicpXG5cbnZhciBpc0NvbW1lbnQgPSBjb252ZXJ0KCdjb21tZW50JylcblxudmFyIG9wdGlvbkdyb3VwID0gJ29wdGdyb3VwJ1xudmFyIG9wdGlvbnMgPSBbJ29wdGlvbiddLmNvbmNhdChvcHRpb25Hcm91cClcbnZhciBkYXRhTGlzdEl0ZW0gPSBbJ2R0JywgJ2RkJ11cbnZhciBsaXN0SXRlbSA9ICdsaSdcbnZhciBtZW51Q29udGVudCA9IFsnbWVudWl0ZW0nLCAnaHInLCAnbWVudSddXG52YXIgcnVieSA9IFsncnAnLCAncnQnXVxudmFyIHRhYmxlQ29udGFpbmVyID0gWyd0Ym9keScsICd0Zm9vdCddXG52YXIgdGFibGVSb3cgPSAndHInXG52YXIgdGFibGVDZWxsID0gWyd0ZCcsICd0aCddXG5cbnZhciBjb25mdXNpbmdQYXJhZ3JhcGhQYXJlbnQgPSBbXG4gICdhJyxcbiAgJ2F1ZGlvJyxcbiAgJ2RlbCcsXG4gICdpbnMnLFxuICAnbWFwJyxcbiAgJ25vc2NyaXB0JyxcbiAgJ3ZpZGVvJ1xuXVxuXG52YXIgY2xlYXJQYXJhZ3JhcGhTaWJsaW5nID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnZGV0YWlscycsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ29sJyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAndGFibGUnLFxuICAndWwnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb24oe1xuICBodG1sOiBodG1sLFxuICBoZWFkOiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbixcbiAgYm9keTogYm9keSxcbiAgcDogcCxcbiAgbGk6IGxpLFxuICBkdDogZHQsXG4gIGRkOiBkZCxcbiAgcnQ6IHJ1YnlFbGVtZW50LFxuICBycDogcnVieUVsZW1lbnQsXG4gIG9wdGdyb3VwOiBvcHRncm91cCxcbiAgb3B0aW9uOiBvcHRpb24sXG4gIG1lbnVpdGVtOiBtZW51aXRlbSxcbiAgY29sZ3JvdXA6IGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uLFxuICBjYXB0aW9uOiBoZWFkT3JDb2xncm91cE9yQ2FwdGlvbixcbiAgdGhlYWQ6IHRoZWFkLFxuICB0Ym9keTogdGJvZHksXG4gIHRmb290OiB0Zm9vdCxcbiAgdHI6IHRyLFxuICB0ZDogY2VsbHMsXG4gIHRoOiBjZWxsc1xufSlcblxuLy8gTWFjcm8gZm9yIGA8L2hlYWQ+YCwgYDwvY29sZ3JvdXA+YCwgYW5kIGA8L2NhcHRpb24+YC5cbmZ1bmN0aW9uIGhlYWRPckNvbGdyb3VwT3JDYXB0aW9uKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4LCB0cnVlKVxuICByZXR1cm4gIW5leHQgfHwgKCFpc0NvbW1lbnQobmV4dCkgJiYgIXdoaXRlU3BhY2VTdGFydChuZXh0KSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2h0bWw+YC5cbmZ1bmN0aW9uIGh0bWwobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCAhaXNDb21tZW50KG5leHQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9ib2R5PmAuXG5mdW5jdGlvbiBib2R5KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgIWlzQ29tbWVudChuZXh0KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvcD5gLlxuZnVuY3Rpb24gcChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuIG5leHRcbiAgICA/IGVsZW1lbnQobmV4dCwgY2xlYXJQYXJhZ3JhcGhTaWJsaW5nKVxuICAgIDogIXBhcmVudCB8fCAhZWxlbWVudChwYXJlbnQsIGNvbmZ1c2luZ1BhcmFncmFwaFBhcmVudClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L2xpPmAuXG5mdW5jdGlvbiBsaShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgbGlzdEl0ZW0pXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9kdD5gLlxuZnVuY3Rpb24gZHQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiBuZXh0ICYmIGVsZW1lbnQobmV4dCwgZGF0YUxpc3RJdGVtKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvZGQ+YC5cbmZ1bmN0aW9uIGRkKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCBkYXRhTGlzdEl0ZW0pXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9ydD5gIG9yIGA8L3JwPmAuXG5mdW5jdGlvbiBydWJ5RWxlbWVudChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgcnVieSlcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L29wdGdyb3VwPmAuXG5mdW5jdGlvbiBvcHRncm91cChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgb3B0aW9uR3JvdXApXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC9vcHRpb24+YC5cbmZ1bmN0aW9uIG9wdGlvbihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgb3B0aW9ucylcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L21lbnVpdGVtPmAuXG5mdW5jdGlvbiBtZW51aXRlbShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIocGFyZW50LCBpbmRleClcbiAgcmV0dXJuICFuZXh0IHx8IGVsZW1lbnQobmV4dCwgbWVudUNvbnRlbnQpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90aGVhZD5gLlxuZnVuY3Rpb24gdGhlYWQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiBuZXh0ICYmIGVsZW1lbnQobmV4dCwgdGFibGVDb250YWluZXIpXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPC90Ym9keT5gLlxuZnVuY3Rpb24gdGJvZHkobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICB2YXIgbmV4dCA9IGFmdGVyKHBhcmVudCwgaW5kZXgpXG4gIHJldHVybiAhbmV4dCB8fCBlbGVtZW50KG5leHQsIHRhYmxlQ29udGFpbmVyKVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdGZvb3Q+YC5cbmZ1bmN0aW9uIHRmb290KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgcmV0dXJuICFhZnRlcihwYXJlbnQsIGluZGV4KVxufVxuXG4vLyBXaGV0aGVyIHRvIG9taXQgYDwvdHI+YC5cbmZ1bmN0aW9uIHRyKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCB0YWJsZVJvdylcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8L3RkPmAgb3IgYDwvdGg+YC5cbmZ1bmN0aW9uIGNlbGxzKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihwYXJlbnQsIGluZGV4KVxuICByZXR1cm4gIW5leHQgfHwgZWxlbWVudChuZXh0LCB0YWJsZUNlbGwpXG59XG4iLCIndXNlIHN0cmljdCdcbmV4cG9ydHMub3BlbmluZyA9IHJlcXVpcmUoJy4vb3BlbmluZycpXG5leHBvcnRzLmNsb3NpbmcgPSByZXF1aXJlKCcuL2Nsb3NpbmcnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb25cblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIEZhY3RvcnkgdG8gY2hlY2sgaWYgYSBnaXZlbiBub2RlIGNhbiBoYXZlIGEgdGFnIG9taXR0ZWQuXG5mdW5jdGlvbiBvbWlzc2lvbihoYW5kbGVycykge1xuICByZXR1cm4gb21pdFxuXG4gIC8vIENoZWNrIGlmIGEgZ2l2ZW4gbm9kZSBjYW4gaGF2ZSBhIHRhZyBvbWl0dGVkLlxuICBmdW5jdGlvbiBvbWl0KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZVxuXG4gICAgcmV0dXJuIG93bi5jYWxsKGhhbmRsZXJzLCBuYW1lKVxuICAgICAgPyBoYW5kbGVyc1tuYW1lXShub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgOiBmYWxzZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIGVsZW1lbnQgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgYmVmb3JlID0gcmVxdWlyZSgnLi91dGlsL3NpYmxpbmdzJykuYmVmb3JlXG52YXIgZmlyc3QgPSByZXF1aXJlKCcuL3V0aWwvZmlyc3QnKVxudmFyIHBsYWNlID0gcmVxdWlyZSgnLi91dGlsL3BsYWNlJylcbnZhciB3aGl0ZVNwYWNlU3RhcnQgPSByZXF1aXJlKCcuL3V0aWwvd2hpdGUtc3BhY2Utc3RhcnQnKVxudmFyIGNsb3NpbmcgPSByZXF1aXJlKCcuL2Nsb3NpbmcnKVxudmFyIG9taXNzaW9uID0gcmVxdWlyZSgnLi9vbWlzc2lvbicpXG5cbnZhciBpc0NvbW1lbnQgPSBjb252ZXJ0KCdjb21tZW50JylcblxudmFyIHVuaXF1ZUhlYWRNZXRhZGF0YSA9IFsndGl0bGUnLCAnYmFzZSddXG52YXIgbWV0YSA9IFsnbWV0YScsICdsaW5rJywgJ3NjcmlwdCcsICdzdHlsZScsICd0ZW1wbGF0ZSddXG52YXIgdGFibGVDb250YWluZXJzID0gWyd0aGVhZCcsICd0Ym9keSddXG52YXIgdGFibGVSb3cgPSAndHInXG5cbm1vZHVsZS5leHBvcnRzID0gb21pc3Npb24oe1xuICBodG1sOiBodG1sLFxuICBoZWFkOiBoZWFkLFxuICBib2R5OiBib2R5LFxuICBjb2xncm91cDogY29sZ3JvdXAsXG4gIHRib2R5OiB0Ym9keVxufSlcblxuLy8gV2hldGhlciB0byBvbWl0IGA8aHRtbD5gLlxuZnVuY3Rpb24gaHRtbChub2RlKSB7XG4gIHZhciBoZWFkID0gZmlyc3Qobm9kZSlcbiAgcmV0dXJuICFoZWFkIHx8ICFpc0NvbW1lbnQoaGVhZClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8aGVhZD5gLlxuZnVuY3Rpb24gaGVhZChub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgc2VlbiA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGlsZFxuICB2YXIgbmFtZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cbiAgICBuYW1lID0gY2hpbGQudGFnTmFtZVxuXG4gICAgaWYgKGVsZW1lbnQoY2hpbGQsIHVuaXF1ZUhlYWRNZXRhZGF0YSkpIHtcbiAgICAgIGlmIChzZWVuLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBzZWVuLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVuZ3RoICE9PSAwXG59XG5cbi8vIFdoZXRoZXIgdG8gb21pdCBgPGJvZHk+YC5cbmZ1bmN0aW9uIGJvZHkobm9kZSkge1xuICB2YXIgaGVhZCA9IGZpcnN0KG5vZGUsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhaGVhZCB8fFxuICAgICghaXNDb21tZW50KGhlYWQpICYmICF3aGl0ZVNwYWNlU3RhcnQoaGVhZCkgJiYgIWVsZW1lbnQoaGVhZCwgbWV0YSkpXG4gIClcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8Y29sZ3JvdXA+YC5cbi8vIFRoZSBzcGVjIGRlc2NyaWJlcyBzb21lIGxvZ2ljIGZvciB0aGUgb3BlbmluZyB0YWcsIGJ1dCBpdOKAmXMgZWFzaWVyIHRvXG4vLyBpbXBsZW1lbnQgaW4gdGhlIGNsb3NpbmcgdGFnLCB0byB0aGUgc2FtZSBlZmZlY3QsIHNvIHdlIGhhbmRsZSBpdCB0aGVyZVxuLy8gaW5zdGVhZC5cbmZ1bmN0aW9uIGNvbGdyb3VwKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHByZXYgPSBiZWZvcmUocGFyZW50LCBpbmRleClcbiAgdmFyIGhlYWQgPSBmaXJzdChub2RlLCB0cnVlKVxuXG4gIC8vIFByZXZpb3VzIGNvbGdyb3VwIHdhcyBhbHJlYWR5IG9taXR0ZWQuXG4gIGlmIChlbGVtZW50KHByZXYsICdjb2xncm91cCcpICYmIGNsb3NpbmcocHJldiwgcGxhY2UocGFyZW50LCBwcmV2KSwgcGFyZW50KSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGhlYWQgJiYgZWxlbWVudChoZWFkLCAnY29sJylcbn1cblxuLy8gV2hldGhlciB0byBvbWl0IGA8dGJvZHk+YC5cbmZ1bmN0aW9uIHRib2R5KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHByZXYgPSBiZWZvcmUocGFyZW50LCBpbmRleClcbiAgdmFyIGhlYWQgPSBmaXJzdChub2RlKVxuXG4gIC8vIFByZXZpb3VzIHRhYmxlIHNlY3Rpb24gd2FzIGFscmVhZHkgb21pdHRlZC5cbiAgaWYgKFxuICAgIGVsZW1lbnQocHJldiwgdGFibGVDb250YWluZXJzKSAmJlxuICAgIGNsb3NpbmcocHJldiwgcGxhY2UocGFyZW50LCBwcmV2KSwgcGFyZW50KVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBoZWFkICYmIGVsZW1lbnQoaGVhZCwgdGFibGVSb3cpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFmdGVyID0gcmVxdWlyZSgnLi9zaWJsaW5ncycpLmFmdGVyXG5cbm1vZHVsZS5leHBvcnRzID0gZmlyc3RcblxuLy8gR2V0IHRoZSBmaXJzdCBjaGlsZCBpbiBgcGFyZW50YC5cbmZ1bmN0aW9uIGZpcnN0KHBhcmVudCwgaW5jbHVkZVdoaXRlU3BhY2UpIHtcbiAgcmV0dXJuIGFmdGVyKHBhcmVudCwgLTEsIGluY2x1ZGVXaGl0ZVNwYWNlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGxhY2VcblxuLy8gR2V0IHRoZSBwb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGAuXG5mdW5jdGlvbiBwbGFjZShwYXJlbnQsIGNoaWxkKSB7XG4gIHJldHVybiBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuICYmIHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZVNwYWNlID0gcmVxdWlyZSgnaGFzdC11dGlsLXdoaXRlc3BhY2UnKVxuXG5leHBvcnRzLmJlZm9yZSA9IHNpYmxpbmdzKC0xKVxuZXhwb3J0cy5hZnRlciA9IHNpYmxpbmdzKDEpXG5cbi8vIEZhY3RvcnkgdG8gY2hlY2sgc2libGluZ3MgaW4gYSBkaXJlY3Rpb24uXG5mdW5jdGlvbiBzaWJsaW5ncyhpbmNyZW1lbnQpIHtcbiAgcmV0dXJuIHNpYmxpbmdcblxuICAvLyBGaW5kIGFwcGxpY2FibGUgc2libGluZ3MgaW4gYSBkaXJlY3Rpb24uXG4gIGZ1bmN0aW9uIHNpYmxpbmcocGFyZW50LCBpbmRleCwgaW5jbHVkZVdoaXRlU3BhY2UpIHtcbiAgICB2YXIgc2libGluZ3MgPSBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuXG4gICAgdmFyIG9mZnNldCA9IGluZGV4ICsgaW5jcmVtZW50XG4gICAgdmFyIG5leHQgPSBzaWJsaW5ncyAmJiBzaWJsaW5nc1tvZmZzZXRdXG5cbiAgICBpZiAoIWluY2x1ZGVXaGl0ZVNwYWNlKSB7XG4gICAgICB3aGlsZSAobmV4dCAmJiB3aGl0ZVNwYWNlKG5leHQpKSB7XG4gICAgICAgIG9mZnNldCArPSBpbmNyZW1lbnRcbiAgICAgICAgbmV4dCA9IHNpYmxpbmdzW29mZnNldF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIHdoaXRlU3BhY2UgPSByZXF1aXJlKCdoYXN0LXV0aWwtd2hpdGVzcGFjZScpXG5cbm1vZHVsZS5leHBvcnRzID0gd2hpdGVTcGFjZVN0YXJ0XG5cbnZhciBpc1RleHQgPSBjb252ZXJ0KCd0ZXh0JylcblxuLy8gQ2hlY2sgaWYgYG5vZGVgIHN0YXJ0cyB3aXRoIHdoaXRlLXNwYWNlLlxuZnVuY3Rpb24gd2hpdGVTcGFjZVN0YXJ0KG5vZGUpIHtcbiAgcmV0dXJuIGlzVGV4dChub2RlKSAmJiB3aGl0ZVNwYWNlKG5vZGUudmFsdWUuY2hhckF0KDApKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG52YXIgaGFuZGxlcnMgPSB7fVxuXG5oYW5kbGVycy5yb290ID0gcmVxdWlyZSgnLi9hbGwnKVxuaGFuZGxlcnMudGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpXG5oYW5kbGVycy5lbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JylcbmhhbmRsZXJzLmRvY3R5cGUgPSByZXF1aXJlKCcuL2RvY3R5cGUnKVxuaGFuZGxlcnMuY29tbWVudCA9IHJlcXVpcmUoJy4vY29tbWVudCcpXG5oYW5kbGVycy5yYXcgPSByZXF1aXJlKCcuL3JhdycpXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShjdHgsIG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgdmFyIHR5cGUgPSBub2RlICYmIG5vZGUudHlwZVxuXG4gIGlmICghdHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgbm90IGAnICsgbm9kZSArICdgJylcbiAgfVxuXG4gIGlmICghb3duLmNhbGwoaGFuZGxlcnMsIHR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29tcGlsZSB1bmtub3duIG5vZGUgYCcgKyB0eXBlICsgJ2AnKVxuICB9XG5cbiAgcmV0dXJuIGhhbmRsZXJzW3R5cGVdKGN0eCwgbm9kZSwgaW5kZXgsIHBhcmVudClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplUmF3XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVJhdyhjdHgsIG5vZGUpIHtcbiAgcmV0dXJuIGN0eC5kYW5nZXJvdXMgPyBub2RlLnZhbHVlIDogdGV4dChjdHgsIG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnc3RyaW5naWZ5LWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemVUZXh0XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRleHQoY3R4LCBub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWVcblxuICByZXR1cm4gaXNMaXRlcmFsKHBhcmVudClcbiAgICA/IHZhbHVlXG4gICAgOiBlbnRpdGllcyh2YWx1ZSwgeHRlbmQoY3R4LmVudGl0aWVzLCB7c3Vic2V0OiBbJzwnLCAnJiddfSkpXG59XG5cbi8vIENoZWNrIGlmIGNvbnRlbnQgb2YgYG5vZGVgIHNob3VsZCBiZSBlc2NhcGVkLlxuZnVuY3Rpb24gaXNMaXRlcmFsKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgKG5vZGUudGFnTmFtZSA9PT0gJ3NjcmlwdCcgfHwgbm9kZS50YWdOYW1lID09PSAnc3R5bGUnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJFbGVtZW50V2hpdGVTcGFjZVxuXG4vLyBIVE1MIHdoaXRlLXNwYWNlIGV4cHJlc3Npb24uXG4vLyBTZWUgPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3NwYWNlLWNoYXJhY3Rlcj4uXG52YXIgcmUgPSAvWyBcXHRcXG5cXGZcXHJdL2dcblxuZnVuY3Rpb24gaW50ZXJFbGVtZW50V2hpdGVTcGFjZShub2RlKSB7XG4gIHZhciB2YWx1ZVxuXG4gIGlmIChub2RlICYmIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHZhbHVlID0gbm9kZS52YWx1ZSB8fCAnJ1xuICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gbm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmUsICcnKSA9PT0gJydcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIERlZmluZWRJbmZvID0gcmVxdWlyZSgnLi9saWIvdXRpbC9kZWZpbmVkLWluZm8nKVxudmFyIEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2luZm8nKVxuXG52YXIgZGF0YSA9ICdkYXRhJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRcblxudmFyIHZhbGlkID0gL15kYXRhWy1hLXowLTkuOl9dKyQvaVxudmFyIGRhc2ggPSAvLVthLXpdL2dcbnZhciBjYXAgPSAvW0EtWl0vZ1xuXG5mdW5jdGlvbiBmaW5kKHNjaGVtYSwgdmFsdWUpIHtcbiAgdmFyIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YWx1ZSlcbiAgdmFyIHByb3AgPSB2YWx1ZVxuICB2YXIgVHlwZSA9IEluZm9cblxuICBpZiAobm9ybWFsIGluIHNjaGVtYS5ub3JtYWwpIHtcbiAgICByZXR1cm4gc2NoZW1hLnByb3BlcnR5W3NjaGVtYS5ub3JtYWxbbm9ybWFsXV1cbiAgfVxuXG4gIGlmIChub3JtYWwubGVuZ3RoID4gNCAmJiBub3JtYWwuc2xpY2UoMCwgNCkgPT09IGRhdGEgJiYgdmFsaWQudGVzdCh2YWx1ZSkpIHtcbiAgICAvLyBBdHRyaWJ1dGUgb3IgcHJvcGVydHkuXG4gICAgaWYgKHZhbHVlLmNoYXJBdCg0KSA9PT0gJy0nKSB7XG4gICAgICBwcm9wID0gZGF0YXNldFRvUHJvcGVydHkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGF0YXNldFRvQXR0cmlidXRlKHZhbHVlKVxuICAgIH1cblxuICAgIFR5cGUgPSBEZWZpbmVkSW5mb1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUeXBlKHByb3AsIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9Qcm9wZXJ0eShhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gYXR0cmlidXRlLnNsaWNlKDUpLnJlcGxhY2UoZGFzaCwgY2FtZWxjYXNlKVxuICByZXR1cm4gZGF0YSArIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbn1cblxuZnVuY3Rpb24gZGF0YXNldFRvQXR0cmlidXRlKHByb3BlcnR5KSB7XG4gIHZhciB2YWx1ZSA9IHByb3BlcnR5LnNsaWNlKDQpXG5cbiAgaWYgKGRhc2gudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJvcGVydHlcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShjYXAsIGtlYmFiKVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09ICctJykge1xuICAgIHZhbHVlID0gJy0nICsgdmFsdWVcbiAgfVxuXG4gIHJldHVybiBkYXRhICsgdmFsdWVcbn1cblxuZnVuY3Rpb24ga2ViYWIoJDApIHtcbiAgcmV0dXJuICctJyArICQwLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gY2FtZWxjYXNlKCQwKSB7XG4gIHJldHVybiAkMC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZXJnZSA9IHJlcXVpcmUoJy4vbGliL3V0aWwvbWVyZ2UnKVxudmFyIHhsaW5rID0gcmVxdWlyZSgnLi9saWIveGxpbmsnKVxudmFyIHhtbCA9IHJlcXVpcmUoJy4vbGliL3htbCcpXG52YXIgeG1sbnMgPSByZXF1aXJlKCcuL2xpYi94bWxucycpXG52YXIgYXJpYSA9IHJlcXVpcmUoJy4vbGliL2FyaWEnKVxudmFyIGh0bWwgPSByZXF1aXJlKCcuL2xpYi9odG1sJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShbeG1sLCB4bGluaywgeG1sbnMsIGFyaWEsIGh0bWxdKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICB0cmFuc2Zvcm06IGFyaWFUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhcmlhQWN0aXZlRGVzY2VuZGFudDogbnVsbCxcbiAgICBhcmlhQXRvbWljOiBib29sZWFuaXNoLFxuICAgIGFyaWFBdXRvQ29tcGxldGU6IG51bGwsXG4gICAgYXJpYUJ1c3k6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNoZWNrZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNvbENvdW50OiBudW1iZXIsXG4gICAgYXJpYUNvbEluZGV4OiBudW1iZXIsXG4gICAgYXJpYUNvbFNwYW46IG51bWJlcixcbiAgICBhcmlhQ29udHJvbHM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFDdXJyZW50OiBudWxsLFxuICAgIGFyaWFEZXNjcmliZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYURldGFpbHM6IG51bGwsXG4gICAgYXJpYURpc2FibGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFEcm9wRWZmZWN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRXJyb3JNZXNzYWdlOiBudWxsLFxuICAgIGFyaWFFeHBhbmRlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhRmxvd1RvOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhR3JhYmJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhSGFzUG9wdXA6IG51bGwsXG4gICAgYXJpYUhpZGRlbjogYm9vbGVhbmlzaCxcbiAgICBhcmlhSW52YWxpZDogbnVsbCxcbiAgICBhcmlhS2V5U2hvcnRjdXRzOiBudWxsLFxuICAgIGFyaWFMYWJlbDogbnVsbCxcbiAgICBhcmlhTGFiZWxsZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUxldmVsOiBudW1iZXIsXG4gICAgYXJpYUxpdmU6IG51bGwsXG4gICAgYXJpYU1vZGFsOiBib29sZWFuaXNoLFxuICAgIGFyaWFNdWx0aUxpbmU6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpU2VsZWN0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhT3JpZW50YXRpb246IG51bGwsXG4gICAgYXJpYU93bnM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFQbGFjZWhvbGRlcjogbnVsbCxcbiAgICBhcmlhUG9zSW5TZXQ6IG51bWJlcixcbiAgICBhcmlhUHJlc3NlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVhZE9ubHk6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJlbGV2YW50OiBudWxsLFxuICAgIGFyaWFSZXF1aXJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUm9sZURlc2NyaXB0aW9uOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhUm93Q291bnQ6IG51bWJlcixcbiAgICBhcmlhUm93SW5kZXg6IG51bWJlcixcbiAgICBhcmlhUm93U3BhbjogbnVtYmVyLFxuICAgIGFyaWFTZWxlY3RlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhU2V0U2l6ZTogbnVtYmVyLFxuICAgIGFyaWFTb3J0OiBudWxsLFxuICAgIGFyaWFWYWx1ZU1heDogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU1pbjogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU5vdzogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZVRleHQ6IG51bGwsXG4gICAgcm9sZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiBhcmlhVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuIHByb3AgPT09ICdyb2xlJyA/IHByb3AgOiAnYXJpYS0nICsgcHJvcC5zbGljZSg0KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG52YXIgYm9vbGVhbiA9IHR5cGVzLmJvb2xlYW5cbnZhciBvdmVybG9hZGVkQm9vbGVhbiA9IHR5cGVzLm92ZXJsb2FkZWRCb29sZWFuXG52YXIgYm9vbGVhbmlzaCA9IHR5cGVzLmJvb2xlYW5pc2hcbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG52YXIgY29tbWFTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAnaHRtbCcsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICAgIGNsYXNzbmFtZTogJ2NsYXNzJyxcbiAgICBodG1sZm9yOiAnZm9yJyxcbiAgICBodHRwZXF1aXY6ICdodHRwLWVxdWl2J1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgbXVzdFVzZVByb3BlcnR5OiBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnc2VsZWN0ZWQnXSxcbiAgcHJvcGVydGllczoge1xuICAgIC8vIFN0YW5kYXJkIFByb3BlcnRpZXMuXG4gICAgYWJicjogbnVsbCxcbiAgICBhY2NlcHQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGFjY2VwdENoYXJzZXQ6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFjY2Vzc0tleTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWN0aW9uOiBudWxsLFxuICAgIGFsbG93OiBudWxsLFxuICAgIGFsbG93RnVsbFNjcmVlbjogYm9vbGVhbixcbiAgICBhbGxvd1BheW1lbnRSZXF1ZXN0OiBib29sZWFuLFxuICAgIGFsbG93VXNlck1lZGlhOiBib29sZWFuLFxuICAgIGFsdDogbnVsbCxcbiAgICBhczogbnVsbCxcbiAgICBhc3luYzogYm9vbGVhbixcbiAgICBhdXRvQ2FwaXRhbGl6ZTogbnVsbCxcbiAgICBhdXRvQ29tcGxldGU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGF1dG9Gb2N1czogYm9vbGVhbixcbiAgICBhdXRvUGxheTogYm9vbGVhbixcbiAgICBjYXB0dXJlOiBib29sZWFuLFxuICAgIGNoYXJTZXQ6IG51bGwsXG4gICAgY2hlY2tlZDogYm9vbGVhbixcbiAgICBjaXRlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY29sczogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bGwsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBjb250ZW50RWRpdGFibGU6IGJvb2xlYW5pc2gsXG4gICAgY29udHJvbHM6IGJvb2xlYW4sXG4gICAgY29udHJvbHNMaXN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb29yZHM6IG51bWJlciB8IGNvbW1hU2VwYXJhdGVkLFxuICAgIGNyb3NzT3JpZ2luOiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgZGF0ZVRpbWU6IG51bGwsXG4gICAgZGVjb2Rpbmc6IG51bGwsXG4gICAgZGVmYXVsdDogYm9vbGVhbixcbiAgICBkZWZlcjogYm9vbGVhbixcbiAgICBkaXI6IG51bGwsXG4gICAgZGlyTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogYm9vbGVhbixcbiAgICBkb3dubG9hZDogb3ZlcmxvYWRlZEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuaXNoLFxuICAgIGVuY1R5cGU6IG51bGwsXG4gICAgZW50ZXJLZXlIaW50OiBudWxsLFxuICAgIGZvcm06IG51bGwsXG4gICAgZm9ybUFjdGlvbjogbnVsbCxcbiAgICBmb3JtRW5jVHlwZTogbnVsbCxcbiAgICBmb3JtTWV0aG9kOiBudWxsLFxuICAgIGZvcm1Ob1ZhbGlkYXRlOiBib29sZWFuLFxuICAgIGZvcm1UYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgaGlkZGVuOiBib29sZWFuLFxuICAgIGhpZ2g6IG51bWJlcixcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGh0bWxGb3I6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGh0dHBFcXVpdjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaWQ6IG51bGwsXG4gICAgaW1hZ2VTaXplczogbnVsbCxcbiAgICBpbWFnZVNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgaW5wdXRNb2RlOiBudWxsLFxuICAgIGludGVncml0eTogbnVsbCxcbiAgICBpczogbnVsbCxcbiAgICBpc01hcDogYm9vbGVhbixcbiAgICBpdGVtSWQ6IG51bGwsXG4gICAgaXRlbVByb3A6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1SZWY6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1TY29wZTogYm9vbGVhbixcbiAgICBpdGVtVHlwZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAga2luZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxhbmd1YWdlOiBudWxsLFxuICAgIGxpc3Q6IG51bGwsXG4gICAgbG9vcDogYm9vbGVhbixcbiAgICBsb3c6IG51bWJlcixcbiAgICBtYW5pZmVzdDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWF4TGVuZ3RoOiBudW1iZXIsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWV0aG9kOiBudWxsLFxuICAgIG1pbjogbnVsbCxcbiAgICBtaW5MZW5ndGg6IG51bWJlcixcbiAgICBtdWx0aXBsZTogYm9vbGVhbixcbiAgICBtdXRlZDogYm9vbGVhbixcbiAgICBuYW1lOiBudWxsLFxuICAgIG5vbmNlOiBudWxsLFxuICAgIG5vTW9kdWxlOiBib29sZWFuLFxuICAgIG5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgb25BYm9ydDogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25BdXhDbGljazogbnVsbCxcbiAgICBvbkJlZm9yZVByaW50OiBudWxsLFxuICAgIG9uQmVmb3JlVW5sb2FkOiBudWxsLFxuICAgIG9uQmx1cjogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNhblBsYXk6IG51bGwsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25Db250ZXh0TWVudTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb3JtRGF0YTogbnVsbCxcbiAgICBvbkhhc2hDaGFuZ2U6IG51bGwsXG4gICAgb25JbnB1dDogbnVsbCxcbiAgICBvbkludmFsaWQ6IG51bGwsXG4gICAgb25LZXlEb3duOiBudWxsLFxuICAgIG9uS2V5UHJlc3M6IG51bGwsXG4gICAgb25LZXlVcDogbnVsbCxcbiAgICBvbkxhbmd1YWdlQ2hhbmdlOiBudWxsLFxuICAgIG9uTG9hZDogbnVsbCxcbiAgICBvbkxvYWRlZERhdGE6IG51bGwsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgICBvbkxvYWRFbmQ6IG51bGwsXG4gICAgb25Mb2FkU3RhcnQ6IG51bGwsXG4gICAgb25NZXNzYWdlOiBudWxsLFxuICAgIG9uTWVzc2FnZUVycm9yOiBudWxsLFxuICAgIG9uTW91c2VEb3duOiBudWxsLFxuICAgIG9uTW91c2VFbnRlcjogbnVsbCxcbiAgICBvbk1vdXNlTGVhdmU6IG51bGwsXG4gICAgb25Nb3VzZU1vdmU6IG51bGwsXG4gICAgb25Nb3VzZU91dDogbnVsbCxcbiAgICBvbk1vdXNlT3ZlcjogbnVsbCxcbiAgICBvbk1vdXNlVXA6IG51bGwsXG4gICAgb25PZmZsaW5lOiBudWxsLFxuICAgIG9uT25saW5lOiBudWxsLFxuICAgIG9uUGFnZUhpZGU6IG51bGwsXG4gICAgb25QYWdlU2hvdzogbnVsbCxcbiAgICBvblBhc3RlOiBudWxsLFxuICAgIG9uUGF1c2U6IG51bGwsXG4gICAgb25QbGF5OiBudWxsLFxuICAgIG9uUGxheWluZzogbnVsbCxcbiAgICBvblBvcFN0YXRlOiBudWxsLFxuICAgIG9uUHJvZ3Jlc3M6IG51bGwsXG4gICAgb25SYXRlQ2hhbmdlOiBudWxsLFxuICAgIG9uUmVqZWN0aW9uSGFuZGxlZDogbnVsbCxcbiAgICBvblJlc2V0OiBudWxsLFxuICAgIG9uUmVzaXplOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIG9uU2VjdXJpdHlQb2xpY3lWaW9sYXRpb246IG51bGwsXG4gICAgb25TZWVrZWQ6IG51bGwsXG4gICAgb25TZWVraW5nOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uU2xvdENoYW5nZTogbnVsbCxcbiAgICBvblN0YWxsZWQ6IG51bGwsXG4gICAgb25TdG9yYWdlOiBudWxsLFxuICAgIG9uU3VibWl0OiBudWxsLFxuICAgIG9uU3VzcGVuZDogbnVsbCxcbiAgICBvblRpbWVVcGRhdGU6IG51bGwsXG4gICAgb25Ub2dnbGU6IG51bGwsXG4gICAgb25VbmhhbmRsZWRSZWplY3Rpb246IG51bGwsXG4gICAgb25VbmxvYWQ6IG51bGwsXG4gICAgb25Wb2x1bWVDaGFuZ2U6IG51bGwsXG4gICAgb25XYWl0aW5nOiBudWxsLFxuICAgIG9uV2hlZWw6IG51bGwsXG4gICAgb3BlbjogYm9vbGVhbixcbiAgICBvcHRpbXVtOiBudW1iZXIsXG4gICAgcGF0dGVybjogbnVsbCxcbiAgICBwaW5nOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICBwbGF5c0lubGluZTogYm9vbGVhbixcbiAgICBwb3N0ZXI6IG51bGwsXG4gICAgcHJlbG9hZDogbnVsbCxcbiAgICByZWFkT25seTogYm9vbGVhbixcbiAgICByZWZlcnJlclBvbGljeTogbnVsbCxcbiAgICByZWw6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgIHJldmVyc2VkOiBib29sZWFuLFxuICAgIHJvd3M6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgc2FuZGJveDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgc2NvcGU6IG51bGwsXG4gICAgc2NvcGVkOiBib29sZWFuLFxuICAgIHNlYW1sZXNzOiBib29sZWFuLFxuICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgIHNoYXBlOiBudWxsLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzaXplczogbnVsbCxcbiAgICBzbG90OiBudWxsLFxuICAgIHNwYW46IG51bWJlcixcbiAgICBzcGVsbENoZWNrOiBib29sZWFuaXNoLFxuICAgIHNyYzogbnVsbCxcbiAgICBzcmNEb2M6IG51bGwsXG4gICAgc3JjTGFuZzogbnVsbCxcbiAgICBzcmNTZXQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgc3RlcDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICB0YWJJbmRleDogbnVtYmVyLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0cmFuc2xhdGU6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0eXBlTXVzdE1hdGNoOiBib29sZWFuLFxuICAgIHVzZU1hcDogbnVsbCxcbiAgICB2YWx1ZTogYm9vbGVhbmlzaCxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIHdyYXA6IG51bGwsXG5cbiAgICAvLyBMZWdhY3kuXG4gICAgLy8gU2VlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNvdGhlci1lbGVtZW50cywtYXR0cmlidXRlcy1hbmQtYXBpc1xuICAgIGFsaWduOiBudWxsLCAvLyBTZXZlcmFsLiBVc2UgQ1NTIGB0ZXh0LWFsaWduYCBpbnN0ZWFkLFxuICAgIGFMaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTphY3RpdmUge2NvbG9yfWAgaW5zdGVhZFxuICAgIGFyY2hpdmU6IHNwYWNlU2VwYXJhdGVkLCAvLyBgPG9iamVjdD5gLiBMaXN0IG9mIFVSSXMgdG8gYXJjaGl2ZXNcbiAgICBheGlzOiBudWxsLCAvLyBgPHRkPmAgYW5kIGA8dGg+YC4gVXNlIGBzY29wZWAgb24gYDx0aD5gXG4gICAgYmFja2dyb3VuZDogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGJhY2tncm91bmQtaW1hZ2VgIGluc3RlYWRcbiAgICBiZ0NvbG9yOiBudWxsLCAvLyBgPGJvZHk+YCBhbmQgdGFibGUgZWxlbWVudHMuIFVzZSBDU1MgYGJhY2tncm91bmQtY29sb3JgIGluc3RlYWRcbiAgICBib3JkZXI6IG51bWJlciwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItd2lkdGhgIGluc3RlYWQsXG4gICAgYm9yZGVyQ29sb3I6IG51bGwsIC8vIGA8dGFibGU+YC4gVXNlIENTUyBgYm9yZGVyLWNvbG9yYCBpbnN0ZWFkLFxuICAgIGJvdHRvbU1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIGNlbGxQYWRkaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjZWxsU3BhY2luZzogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgY2hhcjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgYWxpZ249Y2hhcmAsIHNldHMgdGhlIGNoYXJhY3RlciB0byBhbGlnbiBvblxuICAgIGNoYXJPZmY6IG51bGwsIC8vIFNldmVyYWwgdGFibGUgZWxlbWVudHMuIFdoZW4gYGNoYXJgLCBvZmZzZXRzIHRoZSBhbGlnbm1lbnRcbiAgICBjbGFzc0lkOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY2xlYXI6IG51bGwsIC8vIGA8YnI+YC4gVXNlIENTUyBgY2xlYXJgIGluc3RlYWRcbiAgICBjb2RlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29kZUJhc2U6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlVHlwZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvbG9yOiBudWxsLCAvLyBgPGZvbnQ+YCBhbmQgYDxocj5gLiBVc2UgQ1NTIGluc3RlYWRcbiAgICBjb21wYWN0OiBib29sZWFuLCAvLyBMaXN0cy4gVXNlIENTUyB0byByZWR1Y2Ugc3BhY2UgYmV0d2VlbiBpdGVtcyBpbnN0ZWFkXG4gICAgZGVjbGFyZTogYm9vbGVhbiwgLy8gYDxvYmplY3Q+YFxuICAgIGV2ZW50OiBudWxsLCAvLyBgPHNjcmlwdD5gXG4gICAgZmFjZTogbnVsbCwgLy8gYDxmb250PmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGZyYW1lOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBmcmFtZUJvcmRlcjogbnVsbCwgLy8gYDxpZnJhbWU+YC4gVXNlIENTUyBgYm9yZGVyYCBpbnN0ZWFkXG4gICAgaFNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcbiAgICBsZWZ0TWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6bGluayB7Y29sb3I6ICp9YCBpbnN0ZWFkXG4gICAgbG9uZ0Rlc2M6IG51bGwsIC8vIGA8ZnJhbWU+YCwgYDxpZnJhbWU+YCwgYW5kIGA8aW1nPmAuIFVzZSBhbiBgPGE+YFxuICAgIGxvd1NyYzogbnVsbCwgLy8gYDxpbWc+YC4gVXNlIGEgYDxwaWN0dXJlPmBcbiAgICBtYXJnaW5IZWlnaHQ6IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBtYXJnaW5XaWR0aDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG5vUmVzaXplOiBib29sZWFuLCAvLyBgPGZyYW1lPmBcbiAgICBub0hyZWY6IGJvb2xlYW4sIC8vIGA8YXJlYT5gLiBVc2Ugbm8gaHJlZiBpbnN0ZWFkIG9mIGFuIGV4cGxpY2l0IGBub2hyZWZgXG4gICAgbm9TaGFkZTogYm9vbGVhbiwgLy8gYDxocj5gLiBVc2UgYmFja2dyb3VuZC1jb2xvciBhbmQgaGVpZ2h0IGluc3RlYWQgb2YgYm9yZGVyc1xuICAgIG5vV3JhcDogYm9vbGVhbiwgLy8gYDx0ZD5gIGFuZCBgPHRoPmBcbiAgICBvYmplY3Q6IG51bGwsIC8vIGA8YXBwbGV0PmBcbiAgICBwcm9maWxlOiBudWxsLCAvLyBgPGhlYWQ+YFxuICAgIHByb21wdDogbnVsbCwgLy8gYDxpc2luZGV4PmBcbiAgICByZXY6IG51bGwsIC8vIGA8bGluaz5gXG4gICAgcmlnaHRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBydWxlczogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgc2NoZW1lOiBudWxsLCAvLyBgPG1ldGE+YFxuICAgIHNjcm9sbGluZzogYm9vbGVhbmlzaCwgLy8gYDxmcmFtZT5gLiBVc2Ugb3ZlcmZsb3cgaW4gdGhlIGNoaWxkIGNvbnRleHRcbiAgICBzdGFuZGJ5OiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgc3VtbWFyeTogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgdGV4dDogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGNvbG9yYCBpbnN0ZWFkXG4gICAgdG9wTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgdmFsdWVUeXBlOiBudWxsLCAvLyBgPHBhcmFtPmBcbiAgICB2ZXJzaW9uOiBudWxsLCAvLyBgPGh0bWw+YC4gVXNlIGEgZG9jdHlwZS5cbiAgICB2QWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHZlcnRpY2FsLWFsaWduYCBpbnN0ZWFkXG4gICAgdkxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOnZpc2l0ZWQge2NvbG9yfWAgaW5zdGVhZFxuICAgIHZTcGFjZTogbnVtYmVyLCAvLyBgPGltZz5gIGFuZCBgPG9iamVjdD5gXG5cbiAgICAvLyBOb24tc3RhbmRhcmQgUHJvcGVydGllcy5cbiAgICBhbGxvd1RyYW5zcGFyZW5jeTogbnVsbCxcbiAgICBhdXRvQ29ycmVjdDogbnVsbCxcbiAgICBhdXRvU2F2ZTogbnVsbCxcbiAgICBkaXNhYmxlUGljdHVyZUluUGljdHVyZTogYm9vbGVhbixcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgcHJvcGVydHk6IG51bGwsXG4gICAgcmVzdWx0czogbnVtYmVyLFxuICAgIHNlY3VyaXR5OiBudWxsLFxuICAgIHVuc2VsZWN0YWJsZTogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG52YXIgYm9vbGVhbiA9IHR5cGVzLmJvb2xlYW5cbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG52YXIgY29tbWFTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYVNlcGFyYXRlZFxudmFyIGNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hT3JTcGFjZVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAnc3ZnJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGFjY2VudEhlaWdodDogJ2FjY2VudC1oZWlnaHQnLFxuICAgIGFsaWdubWVudEJhc2VsaW5lOiAnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgICBhcmFiaWNGb3JtOiAnYXJhYmljLWZvcm0nLFxuICAgIGJhc2VsaW5lU2hpZnQ6ICdiYXNlbGluZS1zaGlmdCcsXG4gICAgY2FwSGVpZ2h0OiAnY2FwLWhlaWdodCcsXG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGNsaXBQYXRoOiAnY2xpcC1wYXRoJyxcbiAgICBjbGlwUnVsZTogJ2NsaXAtcnVsZScsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiAnY29sb3ItaW50ZXJwb2xhdGlvbicsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsXG4gICAgY29sb3JQcm9maWxlOiAnY29sb3ItcHJvZmlsZScsXG4gICAgY29sb3JSZW5kZXJpbmc6ICdjb2xvci1yZW5kZXJpbmcnLFxuICAgIGNyb3NzT3JpZ2luOiAnY3Jvc3NvcmlnaW4nLFxuICAgIGRhdGFUeXBlOiAnZGF0YXR5cGUnLFxuICAgIGRvbWluYW50QmFzZWxpbmU6ICdkb21pbmFudC1iYXNlbGluZScsXG4gICAgZW5hYmxlQmFja2dyb3VuZDogJ2VuYWJsZS1iYWNrZ3JvdW5kJyxcbiAgICBmaWxsT3BhY2l0eTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgZmlsbFJ1bGU6ICdmaWxsLXJ1bGUnLFxuICAgIGZsb29kQ29sb3I6ICdmbG9vZC1jb2xvcicsXG4gICAgZmxvb2RPcGFjaXR5OiAnZmxvb2Qtb3BhY2l0eScsXG4gICAgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyxcbiAgICBmb250U2l6ZTogJ2ZvbnQtc2l6ZScsXG4gICAgZm9udFNpemVBZGp1c3Q6ICdmb250LXNpemUtYWRqdXN0JyxcbiAgICBmb250U3RyZXRjaDogJ2ZvbnQtc3RyZXRjaCcsXG4gICAgZm9udFN0eWxlOiAnZm9udC1zdHlsZScsXG4gICAgZm9udFZhcmlhbnQ6ICdmb250LXZhcmlhbnQnLFxuICAgIGZvbnRXZWlnaHQ6ICdmb250LXdlaWdodCcsXG4gICAgZ2x5cGhOYW1lOiAnZ2x5cGgtbmFtZScsXG4gICAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6ICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJyxcbiAgICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6ICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCcsXG4gICAgaHJlZkxhbmc6ICdocmVmbGFuZycsXG4gICAgaG9yaXpBZHZYOiAnaG9yaXotYWR2LXgnLFxuICAgIGhvcml6T3JpZ2luWDogJ2hvcml6LW9yaWdpbi14JyxcbiAgICBob3Jpek9yaWdpblk6ICdob3Jpei1vcmlnaW4teScsXG4gICAgaW1hZ2VSZW5kZXJpbmc6ICdpbWFnZS1yZW5kZXJpbmcnLFxuICAgIGxldHRlclNwYWNpbmc6ICdsZXR0ZXItc3BhY2luZycsXG4gICAgbGlnaHRpbmdDb2xvcjogJ2xpZ2h0aW5nLWNvbG9yJyxcbiAgICBtYXJrZXJFbmQ6ICdtYXJrZXItZW5kJyxcbiAgICBtYXJrZXJNaWQ6ICdtYXJrZXItbWlkJyxcbiAgICBtYXJrZXJTdGFydDogJ21hcmtlci1zdGFydCcsXG4gICAgbmF2RG93bjogJ25hdi1kb3duJyxcbiAgICBuYXZEb3duTGVmdDogJ25hdi1kb3duLWxlZnQnLFxuICAgIG5hdkRvd25SaWdodDogJ25hdi1kb3duLXJpZ2h0JyxcbiAgICBuYXZMZWZ0OiAnbmF2LWxlZnQnLFxuICAgIG5hdk5leHQ6ICduYXYtbmV4dCcsXG4gICAgbmF2UHJldjogJ25hdi1wcmV2JyxcbiAgICBuYXZSaWdodDogJ25hdi1yaWdodCcsXG4gICAgbmF2VXA6ICduYXYtdXAnLFxuICAgIG5hdlVwTGVmdDogJ25hdi11cC1sZWZ0JyxcbiAgICBuYXZVcFJpZ2h0OiAnbmF2LXVwLXJpZ2h0JyxcbiAgICBvbkFib3J0OiAnb25hYm9ydCcsXG4gICAgb25BY3RpdmF0ZTogJ29uYWN0aXZhdGUnLFxuICAgIG9uQWZ0ZXJQcmludDogJ29uYWZ0ZXJwcmludCcsXG4gICAgb25CZWZvcmVQcmludDogJ29uYmVmb3JlcHJpbnQnLFxuICAgIG9uQmVnaW46ICdvbmJlZ2luJyxcbiAgICBvbkNhbmNlbDogJ29uY2FuY2VsJyxcbiAgICBvbkNhblBsYXk6ICdvbmNhbnBsYXknLFxuICAgIG9uQ2FuUGxheVRocm91Z2g6ICdvbmNhbnBsYXl0aHJvdWdoJyxcbiAgICBvbkNoYW5nZTogJ29uY2hhbmdlJyxcbiAgICBvbkNsaWNrOiAnb25jbGljaycsXG4gICAgb25DbG9zZTogJ29uY2xvc2UnLFxuICAgIG9uQ29weTogJ29uY29weScsXG4gICAgb25DdWVDaGFuZ2U6ICdvbmN1ZWNoYW5nZScsXG4gICAgb25DdXQ6ICdvbmN1dCcsXG4gICAgb25EYmxDbGljazogJ29uZGJsY2xpY2snLFxuICAgIG9uRHJhZzogJ29uZHJhZycsXG4gICAgb25EcmFnRW5kOiAnb25kcmFnZW5kJyxcbiAgICBvbkRyYWdFbnRlcjogJ29uZHJhZ2VudGVyJyxcbiAgICBvbkRyYWdFeGl0OiAnb25kcmFnZXhpdCcsXG4gICAgb25EcmFnTGVhdmU6ICdvbmRyYWdsZWF2ZScsXG4gICAgb25EcmFnT3ZlcjogJ29uZHJhZ292ZXInLFxuICAgIG9uRHJhZ1N0YXJ0OiAnb25kcmFnc3RhcnQnLFxuICAgIG9uRHJvcDogJ29uZHJvcCcsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogJ29uZHVyYXRpb25jaGFuZ2UnLFxuICAgIG9uRW1wdGllZDogJ29uZW1wdGllZCcsXG4gICAgb25FbmQ6ICdvbmVuZCcsXG4gICAgb25FbmRlZDogJ29uZW5kZWQnLFxuICAgIG9uRXJyb3I6ICdvbmVycm9yJyxcbiAgICBvbkZvY3VzOiAnb25mb2N1cycsXG4gICAgb25Gb2N1c0luOiAnb25mb2N1c2luJyxcbiAgICBvbkZvY3VzT3V0OiAnb25mb2N1c291dCcsXG4gICAgb25IYXNoQ2hhbmdlOiAnb25oYXNoY2hhbmdlJyxcbiAgICBvbklucHV0OiAnb25pbnB1dCcsXG4gICAgb25JbnZhbGlkOiAnb25pbnZhbGlkJyxcbiAgICBvbktleURvd246ICdvbmtleWRvd24nLFxuICAgIG9uS2V5UHJlc3M6ICdvbmtleXByZXNzJyxcbiAgICBvbktleVVwOiAnb25rZXl1cCcsXG4gICAgb25Mb2FkOiAnb25sb2FkJyxcbiAgICBvbkxvYWRlZERhdGE6ICdvbmxvYWRlZGRhdGEnLFxuICAgIG9uTG9hZGVkTWV0YWRhdGE6ICdvbmxvYWRlZG1ldGFkYXRhJyxcbiAgICBvbkxvYWRTdGFydDogJ29ubG9hZHN0YXJ0JyxcbiAgICBvbk1lc3NhZ2U6ICdvbm1lc3NhZ2UnLFxuICAgIG9uTW91c2VEb3duOiAnb25tb3VzZWRvd24nLFxuICAgIG9uTW91c2VFbnRlcjogJ29ubW91c2VlbnRlcicsXG4gICAgb25Nb3VzZUxlYXZlOiAnb25tb3VzZWxlYXZlJyxcbiAgICBvbk1vdXNlTW92ZTogJ29ubW91c2Vtb3ZlJyxcbiAgICBvbk1vdXNlT3V0OiAnb25tb3VzZW91dCcsXG4gICAgb25Nb3VzZU92ZXI6ICdvbm1vdXNlb3ZlcicsXG4gICAgb25Nb3VzZVVwOiAnb25tb3VzZXVwJyxcbiAgICBvbk1vdXNlV2hlZWw6ICdvbm1vdXNld2hlZWwnLFxuICAgIG9uT2ZmbGluZTogJ29ub2ZmbGluZScsXG4gICAgb25PbmxpbmU6ICdvbm9ubGluZScsXG4gICAgb25QYWdlSGlkZTogJ29ucGFnZWhpZGUnLFxuICAgIG9uUGFnZVNob3c6ICdvbnBhZ2VzaG93JyxcbiAgICBvblBhc3RlOiAnb25wYXN0ZScsXG4gICAgb25QYXVzZTogJ29ucGF1c2UnLFxuICAgIG9uUGxheTogJ29ucGxheScsXG4gICAgb25QbGF5aW5nOiAnb25wbGF5aW5nJyxcbiAgICBvblBvcFN0YXRlOiAnb25wb3BzdGF0ZScsXG4gICAgb25Qcm9ncmVzczogJ29ucHJvZ3Jlc3MnLFxuICAgIG9uUmF0ZUNoYW5nZTogJ29ucmF0ZWNoYW5nZScsXG4gICAgb25SZXBlYXQ6ICdvbnJlcGVhdCcsXG4gICAgb25SZXNldDogJ29ucmVzZXQnLFxuICAgIG9uUmVzaXplOiAnb25yZXNpemUnLFxuICAgIG9uU2Nyb2xsOiAnb25zY3JvbGwnLFxuICAgIG9uU2Vla2VkOiAnb25zZWVrZWQnLFxuICAgIG9uU2Vla2luZzogJ29uc2Vla2luZycsXG4gICAgb25TZWxlY3Q6ICdvbnNlbGVjdCcsXG4gICAgb25TaG93OiAnb25zaG93JyxcbiAgICBvblN0YWxsZWQ6ICdvbnN0YWxsZWQnLFxuICAgIG9uU3RvcmFnZTogJ29uc3RvcmFnZScsXG4gICAgb25TdWJtaXQ6ICdvbnN1Ym1pdCcsXG4gICAgb25TdXNwZW5kOiAnb25zdXNwZW5kJyxcbiAgICBvblRpbWVVcGRhdGU6ICdvbnRpbWV1cGRhdGUnLFxuICAgIG9uVG9nZ2xlOiAnb250b2dnbGUnLFxuICAgIG9uVW5sb2FkOiAnb251bmxvYWQnLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiAnb252b2x1bWVjaGFuZ2UnLFxuICAgIG9uV2FpdGluZzogJ29ud2FpdGluZycsXG4gICAgb25ab29tOiAnb256b29tJyxcbiAgICBvdmVybGluZVBvc2l0aW9uOiAnb3ZlcmxpbmUtcG9zaXRpb24nLFxuICAgIG92ZXJsaW5lVGhpY2tuZXNzOiAnb3ZlcmxpbmUtdGhpY2tuZXNzJyxcbiAgICBwYWludE9yZGVyOiAncGFpbnQtb3JkZXInLFxuICAgIHBhbm9zZTE6ICdwYW5vc2UtMScsXG4gICAgcG9pbnRlckV2ZW50czogJ3BvaW50ZXItZXZlbnRzJyxcbiAgICByZWZlcnJlclBvbGljeTogJ3JlZmVycmVycG9saWN5JyxcbiAgICByZW5kZXJpbmdJbnRlbnQ6ICdyZW5kZXJpbmctaW50ZW50JyxcbiAgICBzaGFwZVJlbmRlcmluZzogJ3NoYXBlLXJlbmRlcmluZycsXG4gICAgc3RvcENvbG9yOiAnc3RvcC1jb2xvcicsXG4gICAgc3RvcE9wYWNpdHk6ICdzdG9wLW9wYWNpdHknLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6ICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsXG4gICAgc3Ryb2tlRGFzaEFycmF5OiAnc3Ryb2tlLWRhc2hhcnJheScsXG4gICAgc3Ryb2tlRGFzaE9mZnNldDogJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgICBzdHJva2VMaW5lQ2FwOiAnc3Ryb2tlLWxpbmVjYXAnLFxuICAgIHN0cm9rZUxpbmVKb2luOiAnc3Ryb2tlLWxpbmVqb2luJyxcbiAgICBzdHJva2VNaXRlckxpbWl0OiAnc3Ryb2tlLW1pdGVybGltaXQnLFxuICAgIHN0cm9rZU9wYWNpdHk6ICdzdHJva2Utb3BhY2l0eScsXG4gICAgc3Ryb2tlV2lkdGg6ICdzdHJva2Utd2lkdGgnLFxuICAgIHRhYkluZGV4OiAndGFiaW5kZXgnLFxuICAgIHRleHRBbmNob3I6ICd0ZXh0LWFuY2hvcicsXG4gICAgdGV4dERlY29yYXRpb246ICd0ZXh0LWRlY29yYXRpb24nLFxuICAgIHRleHRSZW5kZXJpbmc6ICd0ZXh0LXJlbmRlcmluZycsXG4gICAgdHlwZU9mOiAndHlwZW9mJyxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogJ3VuZGVybGluZS1wb3NpdGlvbicsXG4gICAgdW5kZXJsaW5lVGhpY2tuZXNzOiAndW5kZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgdW5pY29kZUJpZGk6ICd1bmljb2RlLWJpZGknLFxuICAgIHVuaWNvZGVSYW5nZTogJ3VuaWNvZGUtcmFuZ2UnLFxuICAgIHVuaXRzUGVyRW06ICd1bml0cy1wZXItZW0nLFxuICAgIHZBbHBoYWJldGljOiAndi1hbHBoYWJldGljJyxcbiAgICB2SGFuZ2luZzogJ3YtaGFuZ2luZycsXG4gICAgdklkZW9ncmFwaGljOiAndi1pZGVvZ3JhcGhpYycsXG4gICAgdk1hdGhlbWF0aWNhbDogJ3YtbWF0aGVtYXRpY2FsJyxcbiAgICB2ZWN0b3JFZmZlY3Q6ICd2ZWN0b3ItZWZmZWN0JyxcbiAgICB2ZXJ0QWR2WTogJ3ZlcnQtYWR2LXknLFxuICAgIHZlcnRPcmlnaW5YOiAndmVydC1vcmlnaW4teCcsXG4gICAgdmVydE9yaWdpblk6ICd2ZXJ0LW9yaWdpbi15JyxcbiAgICB3b3JkU3BhY2luZzogJ3dvcmQtc3BhY2luZycsXG4gICAgd3JpdGluZ01vZGU6ICd3cml0aW5nLW1vZGUnLFxuICAgIHhIZWlnaHQ6ICd4LWhlaWdodCcsXG4gICAgLy8gVGhlc2Ugd2VyZSBjYW1lbGNhc2VkIGluIFRpbnkuIE5vdyBsb3dlcmNhc2VkIGluIFNWRyAyXG4gICAgcGxheWJhY2tPcmRlcjogJ3BsYXliYWNrb3JkZXInLFxuICAgIHRpbWVsaW5lQmVnaW46ICd0aW1lbGluZWJlZ2luJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhYm91dDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIGFjY2VudEhlaWdodDogbnVtYmVyLFxuICAgIGFjY3VtdWxhdGU6IG51bGwsXG4gICAgYWRkaXRpdmU6IG51bGwsXG4gICAgYWxpZ25tZW50QmFzZWxpbmU6IG51bGwsXG4gICAgYWxwaGFiZXRpYzogbnVtYmVyLFxuICAgIGFtcGxpdHVkZTogbnVtYmVyLFxuICAgIGFyYWJpY0Zvcm06IG51bGwsXG4gICAgYXNjZW50OiBudW1iZXIsXG4gICAgYXR0cmlidXRlTmFtZTogbnVsbCxcbiAgICBhdHRyaWJ1dGVUeXBlOiBudWxsLFxuICAgIGF6aW11dGg6IG51bWJlcixcbiAgICBiYW5kd2lkdGg6IG51bGwsXG4gICAgYmFzZWxpbmVTaGlmdDogbnVsbCxcbiAgICBiYXNlRnJlcXVlbmN5OiBudWxsLFxuICAgIGJhc2VQcm9maWxlOiBudWxsLFxuICAgIGJib3g6IG51bGwsXG4gICAgYmVnaW46IG51bGwsXG4gICAgYmlhczogbnVtYmVyLFxuICAgIGJ5OiBudWxsLFxuICAgIGNhbGNNb2RlOiBudWxsLFxuICAgIGNhcEhlaWdodDogbnVtYmVyLFxuICAgIGNsYXNzTmFtZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY2xpcDogbnVsbCxcbiAgICBjbGlwUGF0aDogbnVsbCxcbiAgICBjbGlwUGF0aFVuaXRzOiBudWxsLFxuICAgIGNsaXBSdWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbjogbnVsbCxcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiBudWxsLFxuICAgIGNvbG9yUHJvZmlsZTogbnVsbCxcbiAgICBjb2xvclJlbmRlcmluZzogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRTY3JpcHRUeXBlOiBudWxsLFxuICAgIGNvbnRlbnRTdHlsZVR5cGU6IG51bGwsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgY3Vyc29yOiBudWxsLFxuICAgIGN4OiBudWxsLFxuICAgIGN5OiBudWxsLFxuICAgIGQ6IG51bGwsXG4gICAgZGF0YVR5cGU6IG51bGwsXG4gICAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbiAgICBkZXNjZW50OiBudW1iZXIsXG4gICAgZGlmZnVzZUNvbnN0YW50OiBudW1iZXIsXG4gICAgZGlyZWN0aW9uOiBudWxsLFxuICAgIGRpc3BsYXk6IG51bGwsXG4gICAgZHVyOiBudWxsLFxuICAgIGRpdmlzb3I6IG51bWJlcixcbiAgICBkb21pbmFudEJhc2VsaW5lOiBudWxsLFxuICAgIGRvd25sb2FkOiBib29sZWFuLFxuICAgIGR4OiBudWxsLFxuICAgIGR5OiBudWxsLFxuICAgIGVkZ2VNb2RlOiBudWxsLFxuICAgIGVkaXRhYmxlOiBudWxsLFxuICAgIGVsZXZhdGlvbjogbnVtYmVyLFxuICAgIGVuYWJsZUJhY2tncm91bmQ6IG51bGwsXG4gICAgZW5kOiBudWxsLFxuICAgIGV2ZW50OiBudWxsLFxuICAgIGV4cG9uZW50OiBudW1iZXIsXG4gICAgZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZDogbnVsbCxcbiAgICBmaWxsOiBudWxsLFxuICAgIGZpbGxPcGFjaXR5OiBudW1iZXIsXG4gICAgZmlsbFJ1bGU6IG51bGwsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIGZpbHRlclJlczogbnVsbCxcbiAgICBmaWx0ZXJVbml0czogbnVsbCxcbiAgICBmbG9vZENvbG9yOiBudWxsLFxuICAgIGZsb29kT3BhY2l0eTogbnVsbCxcbiAgICBmb2N1c2FibGU6IG51bGwsXG4gICAgZm9jdXNIaWdobGlnaHQ6IG51bGwsXG4gICAgZm9udEZhbWlseTogbnVsbCxcbiAgICBmb250U2l6ZTogbnVsbCxcbiAgICBmb250U2l6ZUFkanVzdDogbnVsbCxcbiAgICBmb250U3RyZXRjaDogbnVsbCxcbiAgICBmb250U3R5bGU6IG51bGwsXG4gICAgZm9udFZhcmlhbnQ6IG51bGwsXG4gICAgZm9udFdlaWdodDogbnVsbCxcbiAgICBmb3JtYXQ6IG51bGwsXG4gICAgZnI6IG51bGwsXG4gICAgZnJvbTogbnVsbCxcbiAgICBmeDogbnVsbCxcbiAgICBmeTogbnVsbCxcbiAgICBnMTogY29tbWFTZXBhcmF0ZWQsXG4gICAgZzI6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGdseXBoTmFtZTogY29tbWFTZXBhcmF0ZWQsXG4gICAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6IG51bGwsXG4gICAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiBudWxsLFxuICAgIGdseXBoUmVmOiBudWxsLFxuICAgIGdyYWRpZW50VHJhbnNmb3JtOiBudWxsLFxuICAgIGdyYWRpZW50VW5pdHM6IG51bGwsXG4gICAgaGFuZGxlcjogbnVsbCxcbiAgICBoYW5naW5nOiBudW1iZXIsXG4gICAgaGF0Y2hDb250ZW50VW5pdHM6IG51bGwsXG4gICAgaGF0Y2hVbml0czogbnVsbCxcbiAgICBoZWlnaHQ6IG51bGwsXG4gICAgaHJlZjogbnVsbCxcbiAgICBocmVmTGFuZzogbnVsbCxcbiAgICBob3JpekFkdlg6IG51bWJlcixcbiAgICBob3Jpek9yaWdpblg6IG51bWJlcixcbiAgICBob3Jpek9yaWdpblk6IG51bWJlcixcbiAgICBpZDogbnVsbCxcbiAgICBpZGVvZ3JhcGhpYzogbnVtYmVyLFxuICAgIGltYWdlUmVuZGVyaW5nOiBudWxsLFxuICAgIGluaXRpYWxWaXNpYmlsaXR5OiBudWxsLFxuICAgIGluOiBudWxsLFxuICAgIGluMjogbnVsbCxcbiAgICBpbnRlcmNlcHQ6IG51bWJlcixcbiAgICBrOiBudW1iZXIsXG4gICAgazE6IG51bWJlcixcbiAgICBrMjogbnVtYmVyLFxuICAgIGszOiBudW1iZXIsXG4gICAgazQ6IG51bWJlcixcbiAgICBrZXJuZWxNYXRyaXg6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICBrZXJuZWxVbml0TGVuZ3RoOiBudWxsLFxuICAgIGtleVBvaW50czogbnVsbCwgLy8gU0VNSV9DT0xPTl9TRVBBUkFURURcbiAgICBrZXlTcGxpbmVzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtleVRpbWVzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtlcm5pbmc6IG51bGwsXG4gICAgbGFuZzogbnVsbCxcbiAgICBsZW5ndGhBZGp1c3Q6IG51bGwsXG4gICAgbGV0dGVyU3BhY2luZzogbnVsbCxcbiAgICBsaWdodGluZ0NvbG9yOiBudWxsLFxuICAgIGxpbWl0aW5nQ29uZUFuZ2xlOiBudW1iZXIsXG4gICAgbG9jYWw6IG51bGwsXG4gICAgbWFya2VyRW5kOiBudWxsLFxuICAgIG1hcmtlck1pZDogbnVsbCxcbiAgICBtYXJrZXJTdGFydDogbnVsbCxcbiAgICBtYXJrZXJIZWlnaHQ6IG51bGwsXG4gICAgbWFya2VyVW5pdHM6IG51bGwsXG4gICAgbWFya2VyV2lkdGg6IG51bGwsXG4gICAgbWFzazogbnVsbCxcbiAgICBtYXNrQ29udGVudFVuaXRzOiBudWxsLFxuICAgIG1hc2tVbml0czogbnVsbCxcbiAgICBtYXRoZW1hdGljYWw6IG51bGwsXG4gICAgbWF4OiBudWxsLFxuICAgIG1lZGlhOiBudWxsLFxuICAgIG1lZGlhQ2hhcmFjdGVyRW5jb2Rpbmc6IG51bGwsXG4gICAgbWVkaWFDb250ZW50RW5jb2RpbmdzOiBudWxsLFxuICAgIG1lZGlhU2l6ZTogbnVtYmVyLFxuICAgIG1lZGlhVGltZTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWluOiBudWxsLFxuICAgIG1vZGU6IG51bGwsXG4gICAgbmFtZTogbnVsbCxcbiAgICBuYXZEb3duOiBudWxsLFxuICAgIG5hdkRvd25MZWZ0OiBudWxsLFxuICAgIG5hdkRvd25SaWdodDogbnVsbCxcbiAgICBuYXZMZWZ0OiBudWxsLFxuICAgIG5hdk5leHQ6IG51bGwsXG4gICAgbmF2UHJldjogbnVsbCxcbiAgICBuYXZSaWdodDogbnVsbCxcbiAgICBuYXZVcDogbnVsbCxcbiAgICBuYXZVcExlZnQ6IG51bGwsXG4gICAgbmF2VXBSaWdodDogbnVsbCxcbiAgICBudW1PY3RhdmVzOiBudWxsLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIG9mZnNldDogbnVsbCxcbiAgICBvbkFib3J0OiBudWxsLFxuICAgIG9uQWN0aXZhdGU6IG51bGwsXG4gICAgb25BZnRlclByaW50OiBudWxsLFxuICAgIG9uQmVmb3JlUHJpbnQ6IG51bGwsXG4gICAgb25CZWdpbjogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNhblBsYXk6IG51bGwsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25Db3B5OiBudWxsLFxuICAgIG9uQ3VlQ2hhbmdlOiBudWxsLFxuICAgIG9uQ3V0OiBudWxsLFxuICAgIG9uRGJsQ2xpY2s6IG51bGwsXG4gICAgb25EcmFnOiBudWxsLFxuICAgIG9uRHJhZ0VuZDogbnVsbCxcbiAgICBvbkRyYWdFbnRlcjogbnVsbCxcbiAgICBvbkRyYWdFeGl0OiBudWxsLFxuICAgIG9uRHJhZ0xlYXZlOiBudWxsLFxuICAgIG9uRHJhZ092ZXI6IG51bGwsXG4gICAgb25EcmFnU3RhcnQ6IG51bGwsXG4gICAgb25Ecm9wOiBudWxsLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6IG51bGwsXG4gICAgb25FbXB0aWVkOiBudWxsLFxuICAgIG9uRW5kOiBudWxsLFxuICAgIG9uRW5kZWQ6IG51bGwsXG4gICAgb25FcnJvcjogbnVsbCxcbiAgICBvbkZvY3VzOiBudWxsLFxuICAgIG9uRm9jdXNJbjogbnVsbCxcbiAgICBvbkZvY3VzT3V0OiBudWxsLFxuICAgIG9uSGFzaENoYW5nZTogbnVsbCxcbiAgICBvbklucHV0OiBudWxsLFxuICAgIG9uSW52YWxpZDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgb25LZXlQcmVzczogbnVsbCxcbiAgICBvbktleVVwOiBudWxsLFxuICAgIG9uTG9hZDogbnVsbCxcbiAgICBvbkxvYWRlZERhdGE6IG51bGwsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgICBvbkxvYWRTdGFydDogbnVsbCxcbiAgICBvbk1lc3NhZ2U6IG51bGwsXG4gICAgb25Nb3VzZURvd246IG51bGwsXG4gICAgb25Nb3VzZUVudGVyOiBudWxsLFxuICAgIG9uTW91c2VMZWF2ZTogbnVsbCxcbiAgICBvbk1vdXNlTW92ZTogbnVsbCxcbiAgICBvbk1vdXNlT3V0OiBudWxsLFxuICAgIG9uTW91c2VPdmVyOiBudWxsLFxuICAgIG9uTW91c2VVcDogbnVsbCxcbiAgICBvbk1vdXNlV2hlZWw6IG51bGwsXG4gICAgb25PZmZsaW5lOiBudWxsLFxuICAgIG9uT25saW5lOiBudWxsLFxuICAgIG9uUGFnZUhpZGU6IG51bGwsXG4gICAgb25QYWdlU2hvdzogbnVsbCxcbiAgICBvblBhc3RlOiBudWxsLFxuICAgIG9uUGF1c2U6IG51bGwsXG4gICAgb25QbGF5OiBudWxsLFxuICAgIG9uUGxheWluZzogbnVsbCxcbiAgICBvblBvcFN0YXRlOiBudWxsLFxuICAgIG9uUHJvZ3Jlc3M6IG51bGwsXG4gICAgb25SYXRlQ2hhbmdlOiBudWxsLFxuICAgIG9uUmVwZWF0OiBudWxsLFxuICAgIG9uUmVzZXQ6IG51bGwsXG4gICAgb25SZXNpemU6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgb25TZWVrZWQ6IG51bGwsXG4gICAgb25TZWVraW5nOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uU2hvdzogbnVsbCxcbiAgICBvblN0YWxsZWQ6IG51bGwsXG4gICAgb25TdG9yYWdlOiBudWxsLFxuICAgIG9uU3VibWl0OiBudWxsLFxuICAgIG9uU3VzcGVuZDogbnVsbCxcbiAgICBvblRpbWVVcGRhdGU6IG51bGwsXG4gICAgb25Ub2dnbGU6IG51bGwsXG4gICAgb25VbmxvYWQ6IG51bGwsXG4gICAgb25Wb2x1bWVDaGFuZ2U6IG51bGwsXG4gICAgb25XYWl0aW5nOiBudWxsLFxuICAgIG9uWm9vbTogbnVsbCxcbiAgICBvcGFjaXR5OiBudWxsLFxuICAgIG9wZXJhdG9yOiBudWxsLFxuICAgIG9yZGVyOiBudWxsLFxuICAgIG9yaWVudDogbnVsbCxcbiAgICBvcmllbnRhdGlvbjogbnVsbCxcbiAgICBvcmlnaW46IG51bGwsXG4gICAgb3ZlcmZsb3c6IG51bGwsXG4gICAgb3ZlcmxheTogbnVsbCxcbiAgICBvdmVybGluZVBvc2l0aW9uOiBudW1iZXIsXG4gICAgb3ZlcmxpbmVUaGlja25lc3M6IG51bWJlcixcbiAgICBwYWludE9yZGVyOiBudWxsLFxuICAgIHBhbm9zZTE6IG51bGwsXG4gICAgcGF0aDogbnVsbCxcbiAgICBwYXRoTGVuZ3RoOiBudW1iZXIsXG4gICAgcGF0dGVybkNvbnRlbnRVbml0czogbnVsbCxcbiAgICBwYXR0ZXJuVHJhbnNmb3JtOiBudWxsLFxuICAgIHBhdHRlcm5Vbml0czogbnVsbCxcbiAgICBwaGFzZTogbnVsbCxcbiAgICBwaW5nOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBwaXRjaDogbnVsbCxcbiAgICBwbGF5YmFja09yZGVyOiBudWxsLFxuICAgIHBvaW50ZXJFdmVudHM6IG51bGwsXG4gICAgcG9pbnRzOiBudWxsLFxuICAgIHBvaW50c0F0WDogbnVtYmVyLFxuICAgIHBvaW50c0F0WTogbnVtYmVyLFxuICAgIHBvaW50c0F0WjogbnVtYmVyLFxuICAgIHByZXNlcnZlQWxwaGE6IG51bGwsXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogbnVsbCxcbiAgICBwcmltaXRpdmVVbml0czogbnVsbCxcbiAgICBwcm9wYWdhdGU6IG51bGwsXG4gICAgcHJvcGVydHk6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByOiBudWxsLFxuICAgIHJhZGl1czogbnVsbCxcbiAgICByZWZlcnJlclBvbGljeTogbnVsbCxcbiAgICByZWZYOiBudWxsLFxuICAgIHJlZlk6IG51bGwsXG4gICAgcmVsOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmV2OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVuZGVyaW5nSW50ZW50OiBudWxsLFxuICAgIHJlcGVhdENvdW50OiBudWxsLFxuICAgIHJlcGVhdER1cjogbnVsbCxcbiAgICByZXF1aXJlZEV4dGVuc2lvbnM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZlYXR1cmVzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGb250czogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRm9ybWF0czogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlc291cmNlOiBudWxsLFxuICAgIHJlc3RhcnQ6IG51bGwsXG4gICAgcmVzdWx0OiBudWxsLFxuICAgIHJvdGF0ZTogbnVsbCxcbiAgICByeDogbnVsbCxcbiAgICByeTogbnVsbCxcbiAgICBzY2FsZTogbnVsbCxcbiAgICBzZWVkOiBudWxsLFxuICAgIHNoYXBlUmVuZGVyaW5nOiBudWxsLFxuICAgIHNpZGU6IG51bGwsXG4gICAgc2xvcGU6IG51bGwsXG4gICAgc25hcHNob3RUaW1lOiBudWxsLFxuICAgIHNwZWN1bGFyQ29uc3RhbnQ6IG51bWJlcixcbiAgICBzcGVjdWxhckV4cG9uZW50OiBudW1iZXIsXG4gICAgc3ByZWFkTWV0aG9kOiBudWxsLFxuICAgIHNwYWNpbmc6IG51bGwsXG4gICAgc3RhcnRPZmZzZXQ6IG51bGwsXG4gICAgc3RkRGV2aWF0aW9uOiBudWxsLFxuICAgIHN0ZW1oOiBudWxsLFxuICAgIHN0ZW12OiBudWxsLFxuICAgIHN0aXRjaFRpbGVzOiBudWxsLFxuICAgIHN0b3BDb2xvcjogbnVsbCxcbiAgICBzdG9wT3BhY2l0eTogbnVsbCxcbiAgICBzdHJpa2V0aHJvdWdoUG9zaXRpb246IG51bWJlcixcbiAgICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiBudW1iZXIsXG4gICAgc3RyaW5nOiBudWxsLFxuICAgIHN0cm9rZTogbnVsbCxcbiAgICBzdHJva2VEYXNoQXJyYXk6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICBzdHJva2VEYXNoT2Zmc2V0OiBudWxsLFxuICAgIHN0cm9rZUxpbmVDYXA6IG51bGwsXG4gICAgc3Ryb2tlTGluZUpvaW46IG51bGwsXG4gICAgc3Ryb2tlTWl0ZXJMaW1pdDogbnVtYmVyLFxuICAgIHN0cm9rZU9wYWNpdHk6IG51bWJlcixcbiAgICBzdHJva2VXaWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBzdXJmYWNlU2NhbGU6IG51bWJlcixcbiAgICBzeW5jQmVoYXZpb3I6IG51bGwsXG4gICAgc3luY0JlaGF2aW9yRGVmYXVsdDogbnVsbCxcbiAgICBzeW5jTWFzdGVyOiBudWxsLFxuICAgIHN5bmNUb2xlcmFuY2U6IG51bGwsXG4gICAgc3luY1RvbGVyYW5jZURlZmF1bHQ6IG51bGwsXG4gICAgc3lzdGVtTGFuZ3VhZ2U6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICB0YWJJbmRleDogbnVtYmVyLFxuICAgIHRhYmxlVmFsdWVzOiBudWxsLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0YXJnZXRYOiBudW1iZXIsXG4gICAgdGFyZ2V0WTogbnVtYmVyLFxuICAgIHRleHRBbmNob3I6IG51bGwsXG4gICAgdGV4dERlY29yYXRpb246IG51bGwsXG4gICAgdGV4dFJlbmRlcmluZzogbnVsbCxcbiAgICB0ZXh0TGVuZ3RoOiBudWxsLFxuICAgIHRpbWVsaW5lQmVnaW46IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHJhbnNmb3JtQmVoYXZpb3I6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0eXBlT2Y6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICB0bzogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG51bGwsXG4gICAgdTE6IG51bGwsXG4gICAgdTI6IG51bGwsXG4gICAgdW5kZXJsaW5lUG9zaXRpb246IG51bWJlcixcbiAgICB1bmRlcmxpbmVUaGlja25lc3M6IG51bWJlcixcbiAgICB1bmljb2RlOiBudWxsLFxuICAgIHVuaWNvZGVCaWRpOiBudWxsLFxuICAgIHVuaWNvZGVSYW5nZTogbnVsbCxcbiAgICB1bml0c1BlckVtOiBudW1iZXIsXG4gICAgdmFsdWVzOiBudWxsLFxuICAgIHZBbHBoYWJldGljOiBudW1iZXIsXG4gICAgdk1hdGhlbWF0aWNhbDogbnVtYmVyLFxuICAgIHZlY3RvckVmZmVjdDogbnVsbCxcbiAgICB2SGFuZ2luZzogbnVtYmVyLFxuICAgIHZJZGVvZ3JhcGhpYzogbnVtYmVyLFxuICAgIHZlcnNpb246IG51bGwsXG4gICAgdmVydEFkdlk6IG51bWJlcixcbiAgICB2ZXJ0T3JpZ2luWDogbnVtYmVyLFxuICAgIHZlcnRPcmlnaW5ZOiBudW1iZXIsXG4gICAgdmlld0JveDogbnVsbCxcbiAgICB2aWV3VGFyZ2V0OiBudWxsLFxuICAgIHZpc2liaWxpdHk6IG51bGwsXG4gICAgd2lkdGg6IG51bGwsXG4gICAgd2lkdGhzOiBudWxsLFxuICAgIHdvcmRTcGFjaW5nOiBudWxsLFxuICAgIHdyaXRpbmdNb2RlOiBudWxsLFxuICAgIHg6IG51bGwsXG4gICAgeDE6IG51bGwsXG4gICAgeDI6IG51bGwsXG4gICAgeENoYW5uZWxTZWxlY3RvcjogbnVsbCxcbiAgICB4SGVpZ2h0OiBudW1iZXIsXG4gICAgeTogbnVsbCxcbiAgICB5MTogbnVsbCxcbiAgICB5MjogbnVsbCxcbiAgICB5Q2hhbm5lbFNlbGVjdG9yOiBudWxsLFxuICAgIHo6IG51bGwsXG4gICAgem9vbUFuZFBhbjogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcGVydHkudG9Mb3dlckNhc2UoKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm1cblxuZnVuY3Rpb24gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzID8gYXR0cmlidXRlc1thdHRyaWJ1dGVdIDogYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbGl6ZScpXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi9zY2hlbWEnKVxudmFyIERlZmluZWRJbmZvID0gcmVxdWlyZSgnLi9kZWZpbmVkLWluZm8nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG5mdW5jdGlvbiBjcmVhdGUoZGVmaW5pdGlvbikge1xuICB2YXIgc3BhY2UgPSBkZWZpbml0aW9uLnNwYWNlXG4gIHZhciBtdXN0VXNlUHJvcGVydHkgPSBkZWZpbml0aW9uLm11c3RVc2VQcm9wZXJ0eSB8fCBbXVxuICB2YXIgYXR0cmlidXRlcyA9IGRlZmluaXRpb24uYXR0cmlidXRlcyB8fCB7fVxuICB2YXIgcHJvcHMgPSBkZWZpbml0aW9uLnByb3BlcnRpZXNcbiAgdmFyIHRyYW5zZm9ybSA9IGRlZmluaXRpb24udHJhbnNmb3JtXG4gIHZhciBwcm9wZXJ0eSA9IHt9XG4gIHZhciBub3JtYWwgPSB7fVxuICB2YXIgcHJvcFxuICB2YXIgaW5mb1xuXG4gIGZvciAocHJvcCBpbiBwcm9wcykge1xuICAgIGluZm8gPSBuZXcgRGVmaW5lZEluZm8oXG4gICAgICBwcm9wLFxuICAgICAgdHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3ApLFxuICAgICAgcHJvcHNbcHJvcF0sXG4gICAgICBzcGFjZVxuICAgIClcblxuICAgIGlmIChtdXN0VXNlUHJvcGVydHkuaW5kZXhPZihwcm9wKSAhPT0gLTEpIHtcbiAgICAgIGluZm8ubXVzdFVzZVByb3BlcnR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHByb3BlcnR5W3Byb3BdID0gaW5mb1xuXG4gICAgbm9ybWFsW25vcm1hbGl6ZShwcm9wKV0gPSBwcm9wXG4gICAgbm9ybWFsW25vcm1hbGl6ZShpbmZvLmF0dHJpYnV0ZSldID0gcHJvcFxuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEocHJvcGVydHksIG5vcm1hbCwgc3BhY2UpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIEluZm8gPSByZXF1aXJlKCcuL2luZm8nKVxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5lZEluZm9cblxuRGVmaW5lZEluZm8ucHJvdG90eXBlID0gbmV3IEluZm8oKVxuRGVmaW5lZEluZm8ucHJvdG90eXBlLmRlZmluZWQgPSB0cnVlXG5cbnZhciBjaGVja3MgPSBbXG4gICdib29sZWFuJyxcbiAgJ2Jvb2xlYW5pc2gnLFxuICAnb3ZlcmxvYWRlZEJvb2xlYW4nLFxuICAnbnVtYmVyJyxcbiAgJ2NvbW1hU2VwYXJhdGVkJyxcbiAgJ3NwYWNlU2VwYXJhdGVkJyxcbiAgJ2NvbW1hT3JTcGFjZVNlcGFyYXRlZCdcbl1cbnZhciBjaGVja3NMZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbmZ1bmN0aW9uIERlZmluZWRJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hc2ssIHNwYWNlKSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGVja1xuXG4gIG1hcmsodGhpcywgJ3NwYWNlJywgc3BhY2UpXG5cbiAgSW5mby5jYWxsKHRoaXMsIHByb3BlcnR5LCBhdHRyaWJ1dGUpXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjaGVja3NMZW5ndGgpIHtcbiAgICBjaGVjayA9IGNoZWNrc1tpbmRleF1cbiAgICBtYXJrKHRoaXMsIGNoZWNrLCAobWFzayAmIHR5cGVzW2NoZWNrXSkgPT09IHR5cGVzW2NoZWNrXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrKHZhbHVlcywga2V5LCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICB2YWx1ZXNba2V5XSA9IHZhbHVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZm9cblxudmFyIHByb3RvID0gSW5mby5wcm90b3R5cGVcblxucHJvdG8uc3BhY2UgPSBudWxsXG5wcm90by5hdHRyaWJ1dGUgPSBudWxsXG5wcm90by5wcm9wZXJ0eSA9IG51bGxcbnByb3RvLmJvb2xlYW4gPSBmYWxzZVxucHJvdG8uYm9vbGVhbmlzaCA9IGZhbHNlXG5wcm90by5vdmVybG9hZGVkQm9vbGVhbiA9IGZhbHNlXG5wcm90by5udW1iZXIgPSBmYWxzZVxucHJvdG8uY29tbWFTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8uc3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8uY29tbWFPclNwYWNlU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLm11c3RVc2VQcm9wZXJ0eSA9IGZhbHNlXG5wcm90by5kZWZpbmVkID0gZmFsc2VcblxuZnVuY3Rpb24gSW5mbyhwcm9wZXJ0eSwgYXR0cmlidXRlKSB7XG4gIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eVxuICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VcblxuZnVuY3Rpb24gbWVyZ2UoZGVmaW5pdGlvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aFxuICB2YXIgcHJvcGVydHkgPSBbXVxuICB2YXIgbm9ybWFsID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGluZm9cbiAgdmFyIHNwYWNlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpbmZvID0gZGVmaW5pdGlvbnNbaW5kZXhdXG4gICAgcHJvcGVydHkucHVzaChpbmZvLnByb3BlcnR5KVxuICAgIG5vcm1hbC5wdXNoKGluZm8ubm9ybWFsKVxuICAgIHNwYWNlID0gaW5mby5zcGFjZVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEoXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgcHJvcGVydHkpLFxuICAgIHh0ZW5kLmFwcGx5KG51bGwsIG5vcm1hbCksXG4gICAgc3BhY2VcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hXG5cbnZhciBwcm90byA9IFNjaGVtYS5wcm90b3R5cGVcblxucHJvdG8uc3BhY2UgPSBudWxsXG5wcm90by5ub3JtYWwgPSB7fVxucHJvdG8ucHJvcGVydHkgPSB7fVxuXG5mdW5jdGlvbiBTY2hlbWEocHJvcGVydHksIG5vcm1hbCwgc3BhY2UpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMubm9ybWFsID0gbm9ybWFsXG5cbiAgaWYgKHNwYWNlKSB7XG4gICAgdGhpcy5zcGFjZSA9IHNwYWNlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcG93ZXJzID0gMFxuXG5leHBvcnRzLmJvb2xlYW4gPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5ib29sZWFuaXNoID0gaW5jcmVtZW50KClcbmV4cG9ydHMub3ZlcmxvYWRlZEJvb2xlYW4gPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5udW1iZXIgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5zcGFjZVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5leHBvcnRzLmNvbW1hU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFPclNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcblxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKytwb3dlcnMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneGxpbmsnLFxuICB0cmFuc2Zvcm06IHhsaW5rVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeExpbmtBY3R1YXRlOiBudWxsLFxuICAgIHhMaW5rQXJjUm9sZTogbnVsbCxcbiAgICB4TGlua0hyZWY6IG51bGwsXG4gICAgeExpbmtSb2xlOiBudWxsLFxuICAgIHhMaW5rU2hvdzogbnVsbCxcbiAgICB4TGlua1RpdGxlOiBudWxsLFxuICAgIHhMaW5rVHlwZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiB4bGlua1RyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiAneGxpbms6JyArIHByb3Auc2xpY2UoNSkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3htbCcsXG4gIHRyYW5zZm9ybTogeG1sVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeG1sTGFuZzogbnVsbCxcbiAgICB4bWxCYXNlOiBudWxsLFxuICAgIHhtbFNwYWNlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhtbFRyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiAneG1sOicgKyBwcm9wLnNsaWNlKDMpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3htbG5zJyxcbiAgYXR0cmlidXRlczoge1xuICAgIHhtbG5zeGxpbms6ICd4bWxuczp4bGluaydcbiAgfSxcbiAgdHJhbnNmb3JtOiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxuczogbnVsbCxcbiAgICB4bWxuc1hMaW5rOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1lcmdlID0gcmVxdWlyZSgnLi9saWIvdXRpbC9tZXJnZScpXG52YXIgeGxpbmsgPSByZXF1aXJlKCcuL2xpYi94bGluaycpXG52YXIgeG1sID0gcmVxdWlyZSgnLi9saWIveG1sJylcbnZhciB4bWxucyA9IHJlcXVpcmUoJy4vbGliL3htbG5zJylcbnZhciBhcmlhID0gcmVxdWlyZSgnLi9saWIvYXJpYScpXG52YXIgc3ZnID0gcmVxdWlyZSgnLi9saWIvc3ZnJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShbeG1sLCB4bGluaywgeG1sbnMsIGFyaWEsIHN2Z10pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRvSFRNTCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC10by1odG1sJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gc3RyaW5naWZ5KGNvbmZpZykge1xuICB2YXIgc2V0dGluZ3MgPSB4dGVuZChjb25maWcsIHRoaXMuZGF0YSgnc2V0dGluZ3MnKSlcblxuICB0aGlzLkNvbXBpbGVyID0gY29tcGlsZXJcblxuICBmdW5jdGlvbiBjb21waWxlcih0cmVlKSB7XG4gICAgcmV0dXJuIHRvSFRNTCh0cmVlLCBzZXR0aW5ncylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxudmFyIGVtcHR5ID0gJydcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHdoaXRlU3BhY2UgPSAvWyBcXHRcXG5cXHJcXGZdKy9nXG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSkudHJpbSgpXG4gIHJldHVybiBpbnB1dCA9PT0gZW1wdHkgPyBbXSA6IGlucHV0LnNwbGl0KHdoaXRlU3BhY2UpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5qb2luKHNwYWNlKS50cmltKClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=