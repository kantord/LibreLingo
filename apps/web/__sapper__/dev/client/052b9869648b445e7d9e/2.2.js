(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "../../node_modules/hast-util-embedded/index.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-embedded/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")

module.exports = embedded

var names = [
  'audio',
  'canvas',
  'embed',
  'iframe',
  'img',
  'math',
  'object',
  'picture',
  'svg',
  'video'
]

function embedded(node) {
  return is(node, names)
}


/***/ }),

/***/ "../../node_modules/hast-util-has-property/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-has-property/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = hasProperty

// Check if `node` has a set `name` property.
function hasProperty(node, name) {
  var props
  var value

  if (!node || !name || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  props = node.properties
  value = props && own.call(props, name) && props[name]

  return value !== null && value !== undefined && value !== false
}


/***/ }),

/***/ "../../node_modules/hast-util-is-body-ok-link/index.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-is-body-ok-link/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 *   Check if a `link` element is “Body OK”.
 * @longdescription
 *   ## Use
 *
 *   ```js
 *   var h = require('hastscript')
 *   var ok = require('hast-util-is-body-ok-link')
 *
 *   ok(h('link', {itemProp: 'foo'})) //=> true
 *   ok(h('link', {rel: ['stylesheet'], href: 'index.css'})) //=> true
 *   ok(h('link', {rel: ['author'], href: 'index.css'})) //=> false
 *   ```
 *
 *   ## API
 *
 *   ### `isBodyOkLink(node)`
 *
 *   * Return `true` for `link` elements with an `itemProp`
 *   * Return `true` for `link` elements with a `rel` list where one or more
 *     entries are `pingback`, `prefetch`, or `stylesheet`.
 */



var is = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "../../node_modules/hast-util-has-property/index.js")

module.exports = ok

var list = ['pingback', 'prefetch', 'stylesheet']

function ok(node) {
  var length
  var index
  var rel

  if (!is(node, 'link')) {
    return false
  }

  if (has(node, 'itemProp')) {
    return true
  }

  rel = (node.properties || {}).rel || []
  length = rel.length
  index = -1

  if (rel.length === 0) {
    return false
  }

  while (++index < length) {
    if (list.indexOf(rel[index]) === -1) {
      return false
    }
  }

  return true
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

/***/ "../../node_modules/hast-util-phrasing/index.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/hast-util-phrasing/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "../../node_modules/hast-util-has-property/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "../../node_modules/hast-util-embedded/index.js")
var bodyOKLink = __webpack_require__(/*! hast-util-is-body-ok-link */ "../../node_modules/hast-util-is-body-ok-link/index.js")

module.exports = phrasing

var list = [
  'a',
  'abbr',
  // `area` is in fact only phrasing if it is inside a `map` element.
  // However, since `area`s are required to be inside a `map` element, and it’s
  // a rather involved check, it’s ignored here for now.
  'area',
  'b',
  'bdi',
  'bdo',
  'br',
  'button',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'i',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'output',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'template',
  'textarea',
  'time',
  'u',
  'var',
  'wbr'
]

function phrasing(node) {
  return (
    node.type === 'text' ||
    is(node, list) ||
    embedded(node) ||
    bodyOKLink(node) ||
    (is(node, 'meta') && has(node, 'itemProp'))
  )
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

/***/ "../../node_modules/html-whitespace-sensitive-tag-names/index.json":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/html-whitespace-sensitive-tag-names/index.json ***!
  \************************************************************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"script\",\"style\",\"pre\",\"textarea\"]");

/***/ }),

/***/ "../../node_modules/rehype-format/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-format/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var minify = __webpack_require__(/*! rehype-minify-whitespace */ "../../node_modules/rehype-minify-whitespace/index.js")({newlines: true})
var visit = __webpack_require__(/*! unist-util-visit-parents */ "../../node_modules/unist-util-visit-parents/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "../../node_modules/hast-util-embedded/index.js")
var phrasing = __webpack_require__(/*! hast-util-phrasing */ "../../node_modules/hast-util-phrasing/index.js")
var whitespace = __webpack_require__(/*! hast-util-whitespace */ "../../node_modules/hast-util-whitespace/index.js")
var is = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var sensitive = __webpack_require__(/*! html-whitespace-sensitive-tag-names */ "../../node_modules/html-whitespace-sensitive-tag-names/index.json")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

module.exports = format

var double = '\n\n'
var single = '\n'
var space = ' '
var re = / *\n/g

function format(options) {
  var settings = options || {}
  var indent = settings.indent || 2
  var indentInitial = settings.indentInitial
  var blanks = settings.blanks || []

  if (typeof indent === 'number') {
    indent = repeat(space, indent)
  }

  // Default to indenting the initial level.
  if (indentInitial === null || indentInitial === undefined) {
    indentInitial = true
  }

  return transform

  function transform(tree) {
    var head = false

    minify(tree)

    visit(tree, visitor)

    function visitor(node, parents) {
      var children = node.children || []
      var length = children.length
      var level = parents.length
      var index = -1
      var result
      var previous
      var child
      var newline

      if (is(node, 'head')) {
        head = true
      }

      if (head && is(node, 'body')) {
        head = false
      }

      if (is(node, sensitive)) {
        return visit.SKIP
      }

      // Don’t indent content of whitespace-sensitive nodes / inlines.
      if (!length || !padding(node, head)) {
        return
      }

      if (!indentInitial) {
        level--
      }

      // Indent newlines in `text`.
      while (++index < length) {
        child = children[index]

        if (child.type === 'text' || child.type === 'comment') {
          if (child.value.indexOf('\n') !== -1) {
            newline = true
          }

          child.value = child.value.replace(re, '$&' + repeat(indent, level))
        }
      }

      result = []
      index = -1

      while (++index < length) {
        child = children[index]

        if (padding(child, head) || (newline && index === 0)) {
          addBreak(result, level, child)
          newline = true
        }

        previous = child
        result.push(child)
      }

      if (newline || padding(previous, head)) {
        // Ignore trailing whitespace (if that already existed), as we’ll add
        // properly indented whitespace.
        if (whitespace(previous)) {
          result.pop()
          previous = result[result.length - 1]
        }

        addBreak(result, level - 1)
        newline = true
      }

      node.children = result
    }
  }

  function blank(node) {
    return (
      node &&
      node.type === 'element' &&
      blanks.length !== 0 &&
      blanks.indexOf(node.tagName) !== -1
    )
  }

  function addBreak(list, level, next) {
    var tail = list[list.length - 1]
    var previous = whitespace(tail) ? list[list.length - 2] : tail
    var replace =
      (blank(previous) && blank(next) ? double : single) + repeat(indent, level)

    if (tail && tail.type === 'text') {
      if (whitespace(tail)) {
        tail.value = replace
      } else {
        tail.value += replace
      }
    } else {
      list.push({type: 'text', value: replace})
    }
  }
}

function padding(node, head) {
  if (node.type === 'root') {
    return true
  }

  if (node.type === 'element') {
    return head || is(node, 'script') || embedded(node) || !phrasing(node)
  }

  return false
}


/***/ }),

/***/ "../../node_modules/rehype-minify-whitespace/block.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-minify-whitespace/block.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
module.exports = [
  // Contribute whitespace intrinsically.
  'br',
  'wbr',
  // Similar to block.
  'li',
  'table',
  'caption',
  'colgroup',
  'col',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'td',
  'th',
  'summary',
  'optgroup',
  'option',
  // Page
  'html',
  'head',
  'body',
  // Flow content
  'address',
  'blockquote',
  'center', // Legacy
  'dialog',
  'div',
  'figure',
  'figcaption',
  'footer',
  'form',
  'header',
  'hr',
  'legend',
  'listing', // Legacy
  'main',
  'p',
  'plaintext', // Legacy
  'pre',
  'xmp', // Legacy
  // Sections and headings
  'article',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'nav',
  'section',
  // Lists
  'dir', // Legacy
  'dd',
  'dl',
  'dt',
  'menu',
  'ol',
  'ul',
  // Block-like:
  'li',
  'th',
  'td'
]


/***/ }),

/***/ "../../node_modules/rehype-minify-whitespace/content.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-minify-whitespace/content.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  // Form.
  'button',
  'input',
  'select',
  'textarea'
]


/***/ }),

/***/ "../../node_modules/rehype-minify-whitespace/index.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-minify-whitespace/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 *   Collapse white-space.
 *
 *   Normally, collapses to a single space.
 *   If `newlines: true`, collapses white-space containing newlines to `'\n'`
 *   instead of `' '`.
 * @example
 *   <h1>Heading</h1>
 *   <p><strong>This</strong> and <em>that</em></p>
 */



var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "../../node_modules/collapse-white-space/index.js")
var is = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "../../node_modules/hast-util-embedded/index.js")
var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")
var whitespace = __webpack_require__(/*! hast-util-whitespace */ "../../node_modules/hast-util-whitespace/index.js")
var blocks = __webpack_require__(/*! ./block */ "../../node_modules/rehype-minify-whitespace/block.js")
var contents = __webpack_require__(/*! ./content */ "../../node_modules/rehype-minify-whitespace/content.js")
var skippables = __webpack_require__(/*! ./skippable */ "../../node_modules/rehype-minify-whitespace/skippable.js")

module.exports = minifyWhitespace

var ignorableNode = convert(['doctype', 'comment'])
var parent = convert(['element', 'root'])
var root = convert(['root'])
var element = convert(['element'])
var text = convert(['text'])

function minifyWhitespace(options) {
  var collapse = (options || {}).newlines
    ? collapseToNewLines
    : collapseWhiteSpace

  return transform

  function transform(tree) {
    minify(tree, {collapse: collapse, whitespace: 'normal'})
  }
}

function minify(node, options) {
  var settings

  if (parent(node)) {
    settings = Object.assign({}, options)

    if (root(node) || blocklike(node)) {
      settings.before = true
      settings.after = true
    }

    settings.whitespace = inferWhiteSpace(node, options)

    return all(node, settings)
  }

  if (text(node)) {
    if (options.whitespace === 'normal') {
      return minifyText(node, options)
    }

    // Naïve collapse, but no trimming:
    if (options.whitespace === 'nowrap') {
      node.value = options.collapse(node.value)
    }

    // The `pre-wrap` or `pre` whitespace settings are neither collapsed nor
    // trimmed.
  }

  return {
    remove: false,
    ignore: ignorableNode(node),
    stripAtStart: false
  }
}

function minifyText(node, options) {
  var value = options.collapse(node.value)
  var start = 0
  var end = value.length
  var result = {remove: false, ignore: false, stripAtStart: false}

  if (options.before && removable(value.charAt(0))) {
    start++
  }

  if (start !== end && removable(value.charAt(end - 1))) {
    if (options.after) {
      end--
    } else {
      result.stripAtStart = true
    }
  }

  if (start === end) {
    result.remove = true
  } else {
    node.value = value.slice(start, end)
  }

  return result
}

function all(parent, options) {
  var before = options.before
  var after = options.after
  var children = parent.children
  var length = children.length
  var index = -1
  var result

  while (++index < length) {
    result = minify(
      children[index],
      Object.assign({}, options, {
        before: before,
        after: collapsableAfter(children, index, after)
      })
    )

    if (result.remove) {
      children.splice(index, 1)
      index--
      length--
    } else if (!result.ignore) {
      before = result.stripAtStart
    }

    // If this element, such as a `<select>` or `<img>`, contributes content
    // somehow, allow whitespace again.
    if (content(children[index])) {
      before = false
    }
  }

  return {
    remove: false,
    ignore: false,
    stripAtStart: before || after
  }
}

function collapsableAfter(nodes, index, after) {
  var length = nodes.length
  var node
  var result

  while (++index < length) {
    node = nodes[index]
    result = inferBoundary(node)

    if (result === undefined && node.children && !skippable(node)) {
      result = collapsableAfter(node.children, -1)
    }

    if (typeof result === 'boolean') {
      return result
    }
  }

  return after
}

// Infer two types of boundaries:
//
// 1. `true` — boundary for which whitespace around it does not contribute
//    anything
// 2. `false` — boundary for which whitespace around it *does* contribute
//
// No result (`undefined`) is returned if it is unknown.
function inferBoundary(node) {
  if (element(node)) {
    if (content(node)) {
      return false
    }

    if (blocklike(node)) {
      return true
    }

    // Unknown: either depends on siblings if embedded or metadata, or on
    // children.
  } else if (text(node)) {
    if (!whitespace(node)) {
      return false
    }
  } else if (!ignorableNode(node)) {
    return false
  }
}

// Infer whether a node is skippable.
function content(node) {
  return embedded(node) || is(node, contents)
}

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
function blocklike(node) {
  return is(node, blocks)
}

function skippable(node) {
  /* istanbul ignore next - currently only used on elements, but just to make sure. */
  var props = node.properties || {}

  return ignorableNode(node) || is(node, skippables) || props.hidden
}

function removable(character) {
  return character === ' ' || character === '\n'
}

// Collapse to spaces, or line feeds if they’re in a run.
function collapseToNewLines(value) {
  return String(value).replace(/\s+/g, replace)

  function replace($0) {
    return $0.indexOf('\n') === -1 ? ' ' : '\n'
  }
}

// We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
function inferWhiteSpace(node, options) {
  var props = node.properties || {}

  switch (node.tagName) {
    case 'listing':
    case 'plaintext':
    case 'xmp':
      return 'pre'
    case 'nobr':
      return 'nowrap'
    case 'pre':
      return props.wrap ? 'pre-wrap' : 'pre'
    case 'td':
    case 'th':
      return props.noWrap ? 'nowrap' : options.whitespace
    case 'textarea':
      return 'pre-wrap'
    default:
      return options.whitespace
  }
}


/***/ }),

/***/ "../../node_modules/rehype-minify-whitespace/skippable.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-minify-whitespace/skippable.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  'area',
  'base',
  'basefont',
  'dialog',
  'datalist',
  'head',
  'link',
  'meta',
  'noembed',
  'noframes',
  'param',
  'rp',
  'script',
  'source',
  'style',
  'template',
  'track',
  'title'
]


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvY29sbGFwc2Utd2hpdGUtc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1lbWJlZGRlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWJvZHktb2stbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1waHJhc2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL3NraXBwYWJsZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUFk7O0FBRVosU0FBUyxtQkFBTyxDQUFDLDhFQUFzQjs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCWTs7QUFFWixZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1CQUFtQix1Q0FBdUM7QUFDMUQsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixTQUFTLG1CQUFPLENBQUMsOEVBQXNCO0FBQ3ZDLFVBQVUsbUJBQU8sQ0FBQyxrRkFBd0I7O0FBRTFDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Rlk7O0FBRVo7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLDBFQUF1Qjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIwNTJiOTg2OTY0OGI0NDVlN2Q5ZS8yLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xsYXBzZVxuXG4vLyBgY29sbGFwc2UoJyBcXHRcXG5iYXIgXFxuYmF6XFx0JykgLy8gJyBiYXIgYmF6ICdgXG5mdW5jdGlvbiBjb2xsYXBzZSh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXHMrL2csICcgJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1iZWRkZWRcblxudmFyIG5hbWVzID0gW1xuICAnYXVkaW8nLFxuICAnY2FudmFzJyxcbiAgJ2VtYmVkJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnbWF0aCcsXG4gICdvYmplY3QnLFxuICAncGljdHVyZScsXG4gICdzdmcnLFxuICAndmlkZW8nXG5dXG5cbmZ1bmN0aW9uIGVtYmVkZGVkKG5vZGUpIHtcbiAgcmV0dXJuIGlzKG5vZGUsIG5hbWVzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1Byb3BlcnR5XG5cbi8vIENoZWNrIGlmIGBub2RlYCBoYXMgYSBzZXQgYG5hbWVgIHByb3BlcnR5LlxuZnVuY3Rpb24gaGFzUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICB2YXIgcHJvcHNcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKCFub2RlIHx8ICFuYW1lIHx8IHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fCBub2RlLnR5cGUgIT09ICdlbGVtZW50Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHJvcHMgPSBub2RlLnByb3BlcnRpZXNcbiAgdmFsdWUgPSBwcm9wcyAmJiBvd24uY2FsbChwcm9wcywgbmFtZSkgJiYgcHJvcHNbbmFtZV1cblxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gZmFsc2Vcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogICBDaGVjayBpZiBhIGBsaW5rYCBlbGVtZW50IGlzIOKAnEJvZHkgT0vigJ0uXG4gKiBAbG9uZ2Rlc2NyaXB0aW9uXG4gKiAgICMjIFVzZVxuICpcbiAqICAgYGBganNcbiAqICAgdmFyIGggPSByZXF1aXJlKCdoYXN0c2NyaXB0JylcbiAqICAgdmFyIG9rID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWJvZHktb2stbGluaycpXG4gKlxuICogICBvayhoKCdsaW5rJywge2l0ZW1Qcm9wOiAnZm9vJ30pKSAvLz0+IHRydWVcbiAqICAgb2soaCgnbGluaycsIHtyZWw6IFsnc3R5bGVzaGVldCddLCBocmVmOiAnaW5kZXguY3NzJ30pKSAvLz0+IHRydWVcbiAqICAgb2soaCgnbGluaycsIHtyZWw6IFsnYXV0aG9yJ10sIGhyZWY6ICdpbmRleC5jc3MnfSkpIC8vPT4gZmFsc2VcbiAqICAgYGBgXG4gKlxuICogICAjIyBBUElcbiAqXG4gKiAgICMjIyBgaXNCb2R5T2tMaW5rKG5vZGUpYFxuICpcbiAqICAgKiBSZXR1cm4gYHRydWVgIGZvciBgbGlua2AgZWxlbWVudHMgd2l0aCBhbiBgaXRlbVByb3BgXG4gKiAgICogUmV0dXJuIGB0cnVlYCBmb3IgYGxpbmtgIGVsZW1lbnRzIHdpdGggYSBgcmVsYCBsaXN0IHdoZXJlIG9uZSBvciBtb3JlXG4gKiAgICAgZW50cmllcyBhcmUgYHBpbmdiYWNrYCwgYHByZWZldGNoYCwgb3IgYHN0eWxlc2hlZXRgLlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gb2tcblxudmFyIGxpc3QgPSBbJ3BpbmdiYWNrJywgJ3ByZWZldGNoJywgJ3N0eWxlc2hlZXQnXVxuXG5mdW5jdGlvbiBvayhub2RlKSB7XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG4gIHZhciByZWxcblxuICBpZiAoIWlzKG5vZGUsICdsaW5rJykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChoYXMobm9kZSwgJ2l0ZW1Qcm9wJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVsID0gKG5vZGUucHJvcGVydGllcyB8fCB7fSkucmVsIHx8IFtdXG4gIGxlbmd0aCA9IHJlbC5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIGlmIChyZWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChsaXN0LmluZGV4T2YocmVsW2luZGV4XSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50XG5cbi8vIENoZWNrIGlmIGlmIGBub2RlYCBpcyBhbiBgZWxlbWVudGAgYW5kLCBpZiBgdGFnTmFtZXNgIGlzIGdpdmVuLCBgbm9kZWBcbi8vIG1hdGNoZXMgdGhlbSBgdGFnTmFtZXNgLlxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUsIHRhZ05hbWVzKSB7XG4gIHZhciBuYW1lXG5cbiAgaWYgKFxuICAgICEoXG4gICAgICB0YWdOYW1lcyA9PT0gbnVsbCB8fFxuICAgICAgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJyB8fFxuICAgICAgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ29iamVjdCcgJiYgdGFnTmFtZXMubGVuZ3RoICE9PSAwKVxuICAgIClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0V4cGVjdGVkIGBzdHJpbmdgIG9yIGBBcnJheS48c3RyaW5nPmAgZm9yIGB0YWdOYW1lc2AsIG5vdCBgJyArXG4gICAgICAgIHRhZ05hbWVzICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKFxuICAgICFub2RlIHx8XG4gICAgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8XG4gICAgbm9kZS50eXBlICE9PSAnZWxlbWVudCcgfHxcbiAgICB0eXBlb2Ygbm9kZS50YWdOYW1lICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0YWdOYW1lcyA9PT0gbnVsbCB8fCB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5hbWUgPSBub2RlLnRhZ05hbWVcblxuICBpZiAodHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuYW1lID09PSB0YWdOYW1lc1xuICB9XG5cbiAgcmV0dXJuIHRhZ05hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xXG59XG4iLCJ2YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eScpXG52YXIgZW1iZWRkZWQgPSByZXF1aXJlKCdoYXN0LXV0aWwtZW1iZWRkZWQnKVxudmFyIGJvZHlPS0xpbmsgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtYm9keS1vay1saW5rJylcblxubW9kdWxlLmV4cG9ydHMgPSBwaHJhc2luZ1xuXG52YXIgbGlzdCA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gIC8vIGBhcmVhYCBpcyBpbiBmYWN0IG9ubHkgcGhyYXNpbmcgaWYgaXQgaXMgaW5zaWRlIGEgYG1hcGAgZWxlbWVudC5cbiAgLy8gSG93ZXZlciwgc2luY2UgYGFyZWFgcyBhcmUgcmVxdWlyZWQgdG8gYmUgaW5zaWRlIGEgYG1hcGAgZWxlbWVudCwgYW5kIGl04oCZc1xuICAvLyBhIHJhdGhlciBpbnZvbHZlZCBjaGVjaywgaXTigJlzIGlnbm9yZWQgaGVyZSBmb3Igbm93LlxuICAnYXJlYScsXG4gICdiJyxcbiAgJ2JkaScsXG4gICdiZG8nLFxuICAnYnInLFxuICAnYnV0dG9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdkYXRhJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2RlbCcsXG4gICdkZm4nLFxuICAnZW0nLFxuICAnaScsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2tleWdlbicsXG4gICdsYWJlbCcsXG4gICdtYXAnLFxuICAnbWFyaycsXG4gICdtZXRlcicsXG4gICdub3NjcmlwdCcsXG4gICdvdXRwdXQnLFxuICAncHJvZ3Jlc3MnLFxuICAncScsXG4gICdydWJ5JyxcbiAgJ3MnLFxuICAnc2FtcCcsXG4gICdzY3JpcHQnLFxuICAnc2VsZWN0JyxcbiAgJ3NtYWxsJyxcbiAgJ3NwYW4nLFxuICAnc3Ryb25nJyxcbiAgJ3N1YicsXG4gICdzdXAnLFxuICAndGVtcGxhdGUnLFxuICAndGV4dGFyZWEnLFxuICAndGltZScsXG4gICd1JyxcbiAgJ3ZhcicsXG4gICd3YnInXG5dXG5cbmZ1bmN0aW9uIHBocmFzaW5nKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlLnR5cGUgPT09ICd0ZXh0JyB8fFxuICAgIGlzKG5vZGUsIGxpc3QpIHx8XG4gICAgZW1iZWRkZWQobm9kZSkgfHxcbiAgICBib2R5T0tMaW5rKG5vZGUpIHx8XG4gICAgKGlzKG5vZGUsICdtZXRhJykgJiYgaGFzKG5vZGUsICdpdGVtUHJvcCcpKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlXG5cbi8vIEhUTUwgd2hpdGUtc3BhY2UgZXhwcmVzc2lvbi5cbi8vIFNlZSA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3BhY2UtY2hhcmFjdGVyPi5cbnZhciByZSA9IC9bIFxcdFxcblxcZlxccl0vZ1xuXG5mdW5jdGlvbiBpbnRlckVsZW1lbnRXaGl0ZVNwYWNlKG5vZGUpIHtcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgJycpID09PSAnJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtaW5pZnkgPSByZXF1aXJlKCdyZWh5cGUtbWluaWZ5LXdoaXRlc3BhY2UnKSh7bmV3bGluZXM6IHRydWV9KVxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcbnZhciBlbWJlZGRlZCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1lbWJlZGRlZCcpXG52YXIgcGhyYXNpbmcgPSByZXF1aXJlKCdoYXN0LXV0aWwtcGhyYXNpbmcnKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdoYXN0LXV0aWwtd2hpdGVzcGFjZScpXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgc2Vuc2l0aXZlID0gcmVxdWlyZSgnaHRtbC13aGl0ZXNwYWNlLXNlbnNpdGl2ZS10YWctbmFtZXMnKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFxuXG52YXIgZG91YmxlID0gJ1xcblxcbidcbnZhciBzaW5nbGUgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgcmUgPSAvICpcXG4vZ1xuXG5mdW5jdGlvbiBmb3JtYXQob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBpbmRlbnQgPSBzZXR0aW5ncy5pbmRlbnQgfHwgMlxuICB2YXIgaW5kZW50SW5pdGlhbCA9IHNldHRpbmdzLmluZGVudEluaXRpYWxcbiAgdmFyIGJsYW5rcyA9IHNldHRpbmdzLmJsYW5rcyB8fCBbXVxuXG4gIGlmICh0eXBlb2YgaW5kZW50ID09PSAnbnVtYmVyJykge1xuICAgIGluZGVudCA9IHJlcGVhdChzcGFjZSwgaW5kZW50KVxuICB9XG5cbiAgLy8gRGVmYXVsdCB0byBpbmRlbnRpbmcgdGhlIGluaXRpYWwgbGV2ZWwuXG4gIGlmIChpbmRlbnRJbml0aWFsID09PSBudWxsIHx8IGluZGVudEluaXRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIGluZGVudEluaXRpYWwgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKHRyZWUpIHtcbiAgICB2YXIgaGVhZCA9IGZhbHNlXG5cbiAgICBtaW5pZnkodHJlZSlcblxuICAgIHZpc2l0KHRyZWUsIHZpc2l0b3IpXG5cbiAgICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW11cbiAgICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgICAgIHZhciBsZXZlbCA9IHBhcmVudHMubGVuZ3RoXG4gICAgICB2YXIgaW5kZXggPSAtMVxuICAgICAgdmFyIHJlc3VsdFxuICAgICAgdmFyIHByZXZpb3VzXG4gICAgICB2YXIgY2hpbGRcbiAgICAgIHZhciBuZXdsaW5lXG5cbiAgICAgIGlmIChpcyhub2RlLCAnaGVhZCcpKSB7XG4gICAgICAgIGhlYWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkICYmIGlzKG5vZGUsICdib2R5JykpIHtcbiAgICAgICAgaGVhZCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChpcyhub2RlLCBzZW5zaXRpdmUpKSB7XG4gICAgICAgIHJldHVybiB2aXNpdC5TS0lQXG4gICAgICB9XG5cbiAgICAgIC8vIERvbuKAmXQgaW5kZW50IGNvbnRlbnQgb2Ygd2hpdGVzcGFjZS1zZW5zaXRpdmUgbm9kZXMgLyBpbmxpbmVzLlxuICAgICAgaWYgKCFsZW5ndGggfHwgIXBhZGRpbmcobm9kZSwgaGVhZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghaW5kZW50SW5pdGlhbCkge1xuICAgICAgICBsZXZlbC0tXG4gICAgICB9XG5cbiAgICAgIC8vIEluZGVudCBuZXdsaW5lcyBpbiBgdGV4dGAuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSAndGV4dCcgfHwgY2hpbGQudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLnZhbHVlLmluZGV4T2YoJ1xcbicpICE9PSAtMSkge1xuICAgICAgICAgICAgbmV3bGluZSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZC52YWx1ZSA9IGNoaWxkLnZhbHVlLnJlcGxhY2UocmUsICckJicgKyByZXBlYXQoaW5kZW50LCBsZXZlbCkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gW11cbiAgICAgIGluZGV4ID0gLTFcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgICAgICBpZiAocGFkZGluZyhjaGlsZCwgaGVhZCkgfHwgKG5ld2xpbmUgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgYWRkQnJlYWsocmVzdWx0LCBsZXZlbCwgY2hpbGQpXG4gICAgICAgICAgbmV3bGluZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzID0gY2hpbGRcbiAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdsaW5lIHx8IHBhZGRpbmcocHJldmlvdXMsIGhlYWQpKSB7XG4gICAgICAgIC8vIElnbm9yZSB0cmFpbGluZyB3aGl0ZXNwYWNlIChpZiB0aGF0IGFscmVhZHkgZXhpc3RlZCksIGFzIHdl4oCZbGwgYWRkXG4gICAgICAgIC8vIHByb3Blcmx5IGluZGVudGVkIHdoaXRlc3BhY2UuXG4gICAgICAgIGlmICh3aGl0ZXNwYWNlKHByZXZpb3VzKSkge1xuICAgICAgICAgIHJlc3VsdC5wb3AoKVxuICAgICAgICAgIHByZXZpb3VzID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkQnJlYWsocmVzdWx0LCBsZXZlbCAtIDEpXG4gICAgICAgIG5ld2xpbmUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIG5vZGUuY2hpbGRyZW4gPSByZXN1bHRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBibGFuayhub2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5vZGUgJiZcbiAgICAgIG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgICBibGFua3MubGVuZ3RoICE9PSAwICYmXG4gICAgICBibGFua3MuaW5kZXhPZihub2RlLnRhZ05hbWUpICE9PSAtMVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEJyZWFrKGxpc3QsIGxldmVsLCBuZXh0KSB7XG4gICAgdmFyIHRhaWwgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV1cbiAgICB2YXIgcHJldmlvdXMgPSB3aGl0ZXNwYWNlKHRhaWwpID8gbGlzdFtsaXN0Lmxlbmd0aCAtIDJdIDogdGFpbFxuICAgIHZhciByZXBsYWNlID1cbiAgICAgIChibGFuayhwcmV2aW91cykgJiYgYmxhbmsobmV4dCkgPyBkb3VibGUgOiBzaW5nbGUpICsgcmVwZWF0KGluZGVudCwgbGV2ZWwpXG5cbiAgICBpZiAodGFpbCAmJiB0YWlsLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHdoaXRlc3BhY2UodGFpbCkpIHtcbiAgICAgICAgdGFpbC52YWx1ZSA9IHJlcGxhY2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhaWwudmFsdWUgKz0gcmVwbGFjZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IHJlcGxhY2V9KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYWRkaW5nKG5vZGUsIGhlYWQpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3Jvb3QnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIHJldHVybiBoZWFkIHx8IGlzKG5vZGUsICdzY3JpcHQnKSB8fCBlbWJlZGRlZChub2RlKSB8fCAhcGhyYXNpbmcobm9kZSlcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWNzcy11c2VyLWFnZW50LXN0eWxlLXNoZWV0LWFuZC1wcmVzZW50YXRpb25hbC1oaW50cz5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAvLyBDb250cmlidXRlIHdoaXRlc3BhY2UgaW50cmluc2ljYWxseS5cbiAgJ2JyJyxcbiAgJ3dicicsXG4gIC8vIFNpbWlsYXIgdG8gYmxvY2suXG4gICdsaScsXG4gICd0YWJsZScsXG4gICdjYXB0aW9uJyxcbiAgJ2NvbGdyb3VwJyxcbiAgJ2NvbCcsXG4gICd0aGVhZCcsXG4gICd0Ym9keScsXG4gICd0Zm9vdCcsXG4gICd0cicsXG4gICd0ZCcsXG4gICd0aCcsXG4gICdzdW1tYXJ5JyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gIC8vIFBhZ2VcbiAgJ2h0bWwnLFxuICAnaGVhZCcsXG4gICdib2R5JyxcbiAgLy8gRmxvdyBjb250ZW50XG4gICdhZGRyZXNzJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnY2VudGVyJywgLy8gTGVnYWN5XG4gICdkaWFsb2cnLFxuICAnZGl2JyxcbiAgJ2ZpZ3VyZScsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdsZWdlbmQnLFxuICAnbGlzdGluZycsIC8vIExlZ2FjeVxuICAnbWFpbicsXG4gICdwJyxcbiAgJ3BsYWludGV4dCcsIC8vIExlZ2FjeVxuICAncHJlJyxcbiAgJ3htcCcsIC8vIExlZ2FjeVxuICAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGdyb3VwJyxcbiAgJ25hdicsXG4gICdzZWN0aW9uJyxcbiAgLy8gTGlzdHNcbiAgJ2RpcicsIC8vIExlZ2FjeVxuICAnZGQnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnbWVudScsXG4gICdvbCcsXG4gICd1bCcsXG4gIC8vIEJsb2NrLWxpa2U6XG4gICdsaScsXG4gICd0aCcsXG4gICd0ZCdcbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAvLyBGb3JtLlxuICAnYnV0dG9uJyxcbiAgJ2lucHV0JyxcbiAgJ3NlbGVjdCcsXG4gICd0ZXh0YXJlYSdcbl1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogICBDb2xsYXBzZSB3aGl0ZS1zcGFjZS5cbiAqXG4gKiAgIE5vcm1hbGx5LCBjb2xsYXBzZXMgdG8gYSBzaW5nbGUgc3BhY2UuXG4gKiAgIElmIGBuZXdsaW5lczogdHJ1ZWAsIGNvbGxhcHNlcyB3aGl0ZS1zcGFjZSBjb250YWluaW5nIG5ld2xpbmVzIHRvIGAnXFxuJ2BcbiAqICAgaW5zdGVhZCBvZiBgJyAnYC5cbiAqIEBleGFtcGxlXG4gKiAgIDxoMT5IZWFkaW5nPC9oMT5cbiAqICAgPHA+PHN0cm9uZz5UaGlzPC9zdHJvbmc+IGFuZCA8ZW0+dGhhdDwvZW0+PC9wPlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgY29sbGFwc2VXaGl0ZVNwYWNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIGVtYmVkZGVkID0gcmVxdWlyZSgnaGFzdC11dGlsLWVtYmVkZGVkJylcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaGFzdC11dGlsLXdoaXRlc3BhY2UnKVxudmFyIGJsb2NrcyA9IHJlcXVpcmUoJy4vYmxvY2snKVxudmFyIGNvbnRlbnRzID0gcmVxdWlyZSgnLi9jb250ZW50JylcbnZhciBza2lwcGFibGVzID0gcmVxdWlyZSgnLi9za2lwcGFibGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1pbmlmeVdoaXRlc3BhY2VcblxudmFyIGlnbm9yYWJsZU5vZGUgPSBjb252ZXJ0KFsnZG9jdHlwZScsICdjb21tZW50J10pXG52YXIgcGFyZW50ID0gY29udmVydChbJ2VsZW1lbnQnLCAncm9vdCddKVxudmFyIHJvb3QgPSBjb252ZXJ0KFsncm9vdCddKVxudmFyIGVsZW1lbnQgPSBjb252ZXJ0KFsnZWxlbWVudCddKVxudmFyIHRleHQgPSBjb252ZXJ0KFsndGV4dCddKVxuXG5mdW5jdGlvbiBtaW5pZnlXaGl0ZXNwYWNlKG9wdGlvbnMpIHtcbiAgdmFyIGNvbGxhcHNlID0gKG9wdGlvbnMgfHwge30pLm5ld2xpbmVzXG4gICAgPyBjb2xsYXBzZVRvTmV3TGluZXNcbiAgICA6IGNvbGxhcHNlV2hpdGVTcGFjZVxuXG4gIHJldHVybiB0cmFuc2Zvcm1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm0odHJlZSkge1xuICAgIG1pbmlmeSh0cmVlLCB7Y29sbGFwc2U6IGNvbGxhcHNlLCB3aGl0ZXNwYWNlOiAnbm9ybWFsJ30pXG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaWZ5KG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzXG5cbiAgaWYgKHBhcmVudChub2RlKSkge1xuICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucylcblxuICAgIGlmIChyb290KG5vZGUpIHx8IGJsb2NrbGlrZShub2RlKSkge1xuICAgICAgc2V0dGluZ3MuYmVmb3JlID0gdHJ1ZVxuICAgICAgc2V0dGluZ3MuYWZ0ZXIgPSB0cnVlXG4gICAgfVxuXG4gICAgc2V0dGluZ3Mud2hpdGVzcGFjZSA9IGluZmVyV2hpdGVTcGFjZShub2RlLCBvcHRpb25zKVxuXG4gICAgcmV0dXJuIGFsbChub2RlLCBzZXR0aW5ncylcbiAgfVxuXG4gIGlmICh0ZXh0KG5vZGUpKSB7XG4gICAgaWYgKG9wdGlvbnMud2hpdGVzcGFjZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIHJldHVybiBtaW5pZnlUZXh0KG5vZGUsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gTmHDr3ZlIGNvbGxhcHNlLCBidXQgbm8gdHJpbW1pbmc6XG4gICAgaWYgKG9wdGlvbnMud2hpdGVzcGFjZSA9PT0gJ25vd3JhcCcpIHtcbiAgICAgIG5vZGUudmFsdWUgPSBvcHRpb25zLmNvbGxhcHNlKG5vZGUudmFsdWUpXG4gICAgfVxuXG4gICAgLy8gVGhlIGBwcmUtd3JhcGAgb3IgYHByZWAgd2hpdGVzcGFjZSBzZXR0aW5ncyBhcmUgbmVpdGhlciBjb2xsYXBzZWQgbm9yXG4gICAgLy8gdHJpbW1lZC5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmYWxzZSxcbiAgICBpZ25vcmU6IGlnbm9yYWJsZU5vZGUobm9kZSksXG4gICAgc3RyaXBBdFN0YXJ0OiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIG1pbmlmeVRleHQobm9kZSwgb3B0aW9ucykge1xuICB2YXIgdmFsdWUgPSBvcHRpb25zLmNvbGxhcHNlKG5vZGUudmFsdWUpXG4gIHZhciBzdGFydCA9IDBcbiAgdmFyIGVuZCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0ge3JlbW92ZTogZmFsc2UsIGlnbm9yZTogZmFsc2UsIHN0cmlwQXRTdGFydDogZmFsc2V9XG5cbiAgaWYgKG9wdGlvbnMuYmVmb3JlICYmIHJlbW92YWJsZSh2YWx1ZS5jaGFyQXQoMCkpKSB7XG4gICAgc3RhcnQrK1xuICB9XG5cbiAgaWYgKHN0YXJ0ICE9PSBlbmQgJiYgcmVtb3ZhYmxlKHZhbHVlLmNoYXJBdChlbmQgLSAxKSkpIHtcbiAgICBpZiAob3B0aW9ucy5hZnRlcikge1xuICAgICAgZW5kLS1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnN0cmlwQXRTdGFydCA9IHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgIHJlc3VsdC5yZW1vdmUgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGFsbChwYXJlbnQsIG9wdGlvbnMpIHtcbiAgdmFyIGJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlXG4gIHZhciBhZnRlciA9IG9wdGlvbnMuYWZ0ZXJcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gbWluaWZ5KFxuICAgICAgY2hpbGRyZW5baW5kZXhdLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBiZWZvcmU6IGJlZm9yZSxcbiAgICAgICAgYWZ0ZXI6IGNvbGxhcHNhYmxlQWZ0ZXIoY2hpbGRyZW4sIGluZGV4LCBhZnRlcilcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaWYgKHJlc3VsdC5yZW1vdmUpIHtcbiAgICAgIGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgIGluZGV4LS1cbiAgICAgIGxlbmd0aC0tXG4gICAgfSBlbHNlIGlmICghcmVzdWx0Lmlnbm9yZSkge1xuICAgICAgYmVmb3JlID0gcmVzdWx0LnN0cmlwQXRTdGFydFxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgZWxlbWVudCwgc3VjaCBhcyBhIGA8c2VsZWN0PmAgb3IgYDxpbWc+YCwgY29udHJpYnV0ZXMgY29udGVudFxuICAgIC8vIHNvbWVob3csIGFsbG93IHdoaXRlc3BhY2UgYWdhaW4uXG4gICAgaWYgKGNvbnRlbnQoY2hpbGRyZW5baW5kZXhdKSkge1xuICAgICAgYmVmb3JlID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogZmFsc2UsXG4gICAgaWdub3JlOiBmYWxzZSxcbiAgICBzdHJpcEF0U3RhcnQ6IGJlZm9yZSB8fCBhZnRlclxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxhcHNhYmxlQWZ0ZXIobm9kZXMsIGluZGV4LCBhZnRlcikge1xuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciBub2RlXG4gIHZhciByZXN1bHRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG5vZGUgPSBub2Rlc1tpbmRleF1cbiAgICByZXN1bHQgPSBpbmZlckJvdW5kYXJ5KG5vZGUpXG5cbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgJiYgbm9kZS5jaGlsZHJlbiAmJiAhc2tpcHBhYmxlKG5vZGUpKSB7XG4gICAgICByZXN1bHQgPSBjb2xsYXBzYWJsZUFmdGVyKG5vZGUuY2hpbGRyZW4sIC0xKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWZ0ZXJcbn1cblxuLy8gSW5mZXIgdHdvIHR5cGVzIG9mIGJvdW5kYXJpZXM6XG4vL1xuLy8gMS4gYHRydWVgIOKAlCBib3VuZGFyeSBmb3Igd2hpY2ggd2hpdGVzcGFjZSBhcm91bmQgaXQgZG9lcyBub3QgY29udHJpYnV0ZVxuLy8gICAgYW55dGhpbmdcbi8vIDIuIGBmYWxzZWAg4oCUIGJvdW5kYXJ5IGZvciB3aGljaCB3aGl0ZXNwYWNlIGFyb3VuZCBpdCAqZG9lcyogY29udHJpYnV0ZVxuLy9cbi8vIE5vIHJlc3VsdCAoYHVuZGVmaW5lZGApIGlzIHJldHVybmVkIGlmIGl0IGlzIHVua25vd24uXG5mdW5jdGlvbiBpbmZlckJvdW5kYXJ5KG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQobm9kZSkpIHtcbiAgICBpZiAoY29udGVudChub2RlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGJsb2NrbGlrZShub2RlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBVbmtub3duOiBlaXRoZXIgZGVwZW5kcyBvbiBzaWJsaW5ncyBpZiBlbWJlZGRlZCBvciBtZXRhZGF0YSwgb3Igb25cbiAgICAvLyBjaGlsZHJlbi5cbiAgfSBlbHNlIGlmICh0ZXh0KG5vZGUpKSB7XG4gICAgaWYgKCF3aGl0ZXNwYWNlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlnbm9yYWJsZU5vZGUobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBJbmZlciB3aGV0aGVyIGEgbm9kZSBpcyBza2lwcGFibGUuXG5mdW5jdGlvbiBjb250ZW50KG5vZGUpIHtcbiAgcmV0dXJuIGVtYmVkZGVkKG5vZGUpIHx8IGlzKG5vZGUsIGNvbnRlbnRzKVxufVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtY3NzLXVzZXItYWdlbnQtc3R5bGUtc2hlZXQtYW5kLXByZXNlbnRhdGlvbmFsLWhpbnRzPlxuZnVuY3Rpb24gYmxvY2tsaWtlKG5vZGUpIHtcbiAgcmV0dXJuIGlzKG5vZGUsIGJsb2Nrcylcbn1cblxuZnVuY3Rpb24gc2tpcHBhYmxlKG5vZGUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBjdXJyZW50bHkgb25seSB1c2VkIG9uIGVsZW1lbnRzLCBidXQganVzdCB0byBtYWtlIHN1cmUuICovXG4gIHZhciBwcm9wcyA9IG5vZGUucHJvcGVydGllcyB8fCB7fVxuXG4gIHJldHVybiBpZ25vcmFibGVOb2RlKG5vZGUpIHx8IGlzKG5vZGUsIHNraXBwYWJsZXMpIHx8IHByb3BzLmhpZGRlblxufVxuXG5mdW5jdGlvbiByZW1vdmFibGUoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBjaGFyYWN0ZXIgPT09ICcgJyB8fCBjaGFyYWN0ZXIgPT09ICdcXG4nXG59XG5cbi8vIENvbGxhcHNlIHRvIHNwYWNlcywgb3IgbGluZSBmZWVkcyBpZiB0aGV54oCZcmUgaW4gYSBydW4uXG5mdW5jdGlvbiBjb2xsYXBzZVRvTmV3TGluZXModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFxzKy9nLCByZXBsYWNlKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UoJDApIHtcbiAgICByZXR1cm4gJDAuaW5kZXhPZignXFxuJykgPT09IC0xID8gJyAnIDogJ1xcbidcbiAgfVxufVxuXG4vLyBXZSBkb27igJl0IHN1cHBvcnQgdm9pZCBlbGVtZW50cyBoZXJlIChzbyBgbm9iciB3YnJgIC0+IGBub3JtYWxgIGlzIGlnbm9yZWQpLlxuZnVuY3Rpb24gaW5mZXJXaGl0ZVNwYWNlKG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzIHx8IHt9XG5cbiAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcbiAgICBjYXNlICdsaXN0aW5nJzpcbiAgICBjYXNlICdwbGFpbnRleHQnOlxuICAgIGNhc2UgJ3htcCc6XG4gICAgICByZXR1cm4gJ3ByZSdcbiAgICBjYXNlICdub2JyJzpcbiAgICAgIHJldHVybiAnbm93cmFwJ1xuICAgIGNhc2UgJ3ByZSc6XG4gICAgICByZXR1cm4gcHJvcHMud3JhcCA/ICdwcmUtd3JhcCcgOiAncHJlJ1xuICAgIGNhc2UgJ3RkJzpcbiAgICBjYXNlICd0aCc6XG4gICAgICByZXR1cm4gcHJvcHMubm9XcmFwID8gJ25vd3JhcCcgOiBvcHRpb25zLndoaXRlc3BhY2VcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICByZXR1cm4gJ3ByZS13cmFwJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gb3B0aW9ucy53aGl0ZXNwYWNlXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAnYXJlYScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2RpYWxvZycsXG4gICdkYXRhbGlzdCcsXG4gICdoZWFkJyxcbiAgJ2xpbmsnLFxuICAnbWV0YScsXG4gICdub2VtYmVkJyxcbiAgJ25vZnJhbWVzJyxcbiAgJ3BhcmFtJyxcbiAgJ3JwJyxcbiAgJ3NjcmlwdCcsXG4gICdzb3VyY2UnLFxuICAnc3R5bGUnLFxuICAndGVtcGxhdGUnLFxuICAndHJhY2snLFxuICAndGl0bGUnXG5dXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0XG5cbmZ1bmN0aW9uIGNvbnZlcnQodGVzdCkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb2tcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gKCdsZW5ndGgnIGluIHRlc3QgPyBhbnlGYWN0b3J5IDogbWF0Y2hlc0ZhY3RvcnkpKHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVzdFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBbGwodGVzdHMpIHtcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgbGVuZ3RoID0gdGVzdHMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuLy8gVXRpbGl0eSBhc3NlcnQgZWFjaCBwcm9wZXJ0eSBpbiBgdGVzdGAgaXMgcmVwcmVzZW50ZWQgaW4gYG5vZGVgLCBhbmQgZWFjaFxuLy8gdmFsdWVzIGFyZSBzdHJpY3RseSBlcXVhbC5cbmZ1bmN0aW9uIG1hdGNoZXNGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKG5vZGUpIHtcbiAgICB2YXIga2V5XG5cbiAgICBmb3IgKGtleSBpbiB0ZXN0KSB7XG4gICAgICBpZiAobm9kZVtrZXldICE9PSB0ZXN0W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIHZhciBjaGVja3MgPSBjb252ZXJ0QWxsKHRlc3RzKVxuICB2YXIgbGVuZ3RoID0gY2hlY2tzLmxlbmd0aFxuXG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcygpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUudHlwZSA9PT0gdGVzdClcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcblxuICBvbmUodHJlZSwgbnVsbCwgW10pXG5cbiAgLy8gVmlzaXQgYSBzaW5nbGUgbm9kZS5cbiAgZnVuY3Rpb24gb25lKG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHN1YnJlc3VsdFxuXG4gICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgc3VicmVzdWx0ID0gdG9SZXN1bHQoYWxsKG5vZGUuY2hpbGRyZW4sIHBhcmVudHMuY29uY2F0KG5vZGUpKSlcbiAgICAgIHJldHVybiBzdWJyZXN1bHRbMF0gPT09IEVYSVQgPyBzdWJyZXN1bHQgOiByZXN1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBWaXNpdCBjaGlsZHJlbiBpbiBgcGFyZW50YC5cbiAgZnVuY3Rpb24gYWxsKGNoaWxkcmVuLCBwYXJlbnRzKSB7XG4gICAgdmFyIG1pbiA9IC0xXG4gICAgdmFyIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG4gICAgdmFyIGluZGV4ID0gKHJldmVyc2UgPyBjaGlsZHJlbi5sZW5ndGggOiBtaW4pICsgc3RlcFxuICAgIHZhciByZXN1bHRcblxuICAgIHdoaWxlIChpbmRleCA+IG1pbiAmJiBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gb25lKGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudHMpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHR5cGVvZiByZXN1bHRbMV0gPT09ICdudW1iZXInID8gcmVzdWx0WzFdIDogaW5kZXggKyBzdGVwXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=