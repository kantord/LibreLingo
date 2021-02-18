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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2NvbGxhcHNlLXdoaXRlLXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWVtYmVkZGVkL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1pcy1ib2R5LW9rLWxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaXMtZWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1waHJhc2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC13aGl0ZXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLWZvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZS9jb250ZW50LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL3NraXBwYWJsZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQWTs7QUFFWixTQUFTLG1CQUFPLENBQUMsOEVBQXNCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJZOztBQUVaLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkMsbUJBQW1CLHVDQUF1QztBQUMxRCxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLFNBQVMsbUJBQU8sQ0FBQyw4RUFBc0I7QUFDdkMsVUFBVSxtQkFBTyxDQUFDLGtGQUF3Qjs7QUFFMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RGWTs7QUFFWjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsMEVBQXVCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjgxZjY2ZDY2MTYyMDY3N2E1NzM3LzIuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxhcHNlXG5cbi8vIGBjb2xsYXBzZSgnIFxcdFxcbmJhciBcXG5iYXpcXHQnKSAvLyAnIGJhciBiYXogJ2BcbmZ1bmN0aW9uIGNvbGxhcHNlKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1xccysvZywgJyAnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBlbWJlZGRlZFxuXG52YXIgbmFtZXMgPSBbXG4gICdhdWRpbycsXG4gICdjYW52YXMnLFxuICAnZW1iZWQnLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdtYXRoJyxcbiAgJ29iamVjdCcsXG4gICdwaWN0dXJlJyxcbiAgJ3N2ZycsXG4gICd2aWRlbydcbl1cblxuZnVuY3Rpb24gZW1iZWRkZWQobm9kZSkge1xuICByZXR1cm4gaXMobm9kZSwgbmFtZXMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUHJvcGVydHlcblxuLy8gQ2hlY2sgaWYgYG5vZGVgIGhhcyBhIHNldCBgbmFtZWAgcHJvcGVydHkuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIHZhciBwcm9wc1xuICB2YXIgdmFsdWVcblxuICBpZiAoIW5vZGUgfHwgIW5hbWUgfHwgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8IG5vZGUudHlwZSAhPT0gJ2VsZW1lbnQnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwcm9wcyA9IG5vZGUucHJvcGVydGllc1xuICB2YWx1ZSA9IHByb3BzICYmIG93bi5jYWxsKHByb3BzLCBuYW1lKSAmJiBwcm9wc1tuYW1lXVxuXG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBmYWxzZVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAgIENoZWNrIGlmIGEgYGxpbmtgIGVsZW1lbnQgaXMg4oCcQm9keSBPS+KAnS5cbiAqIEBsb25nZGVzY3JpcHRpb25cbiAqICAgIyMgVXNlXG4gKlxuICogICBgYGBqc1xuICogICB2YXIgaCA9IHJlcXVpcmUoJ2hhc3RzY3JpcHQnKVxuICogICB2YXIgb2sgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtYm9keS1vay1saW5rJylcbiAqXG4gKiAgIG9rKGgoJ2xpbmsnLCB7aXRlbVByb3A6ICdmb28nfSkpIC8vPT4gdHJ1ZVxuICogICBvayhoKCdsaW5rJywge3JlbDogWydzdHlsZXNoZWV0J10sIGhyZWY6ICdpbmRleC5jc3MnfSkpIC8vPT4gdHJ1ZVxuICogICBvayhoKCdsaW5rJywge3JlbDogWydhdXRob3InXSwgaHJlZjogJ2luZGV4LmNzcyd9KSkgLy89PiBmYWxzZVxuICogICBgYGBcbiAqXG4gKiAgICMjIEFQSVxuICpcbiAqICAgIyMjIGBpc0JvZHlPa0xpbmsobm9kZSlgXG4gKlxuICogICAqIFJldHVybiBgdHJ1ZWAgZm9yIGBsaW5rYCBlbGVtZW50cyB3aXRoIGFuIGBpdGVtUHJvcGBcbiAqICAgKiBSZXR1cm4gYHRydWVgIGZvciBgbGlua2AgZWxlbWVudHMgd2l0aCBhIGByZWxgIGxpc3Qgd2hlcmUgb25lIG9yIG1vcmVcbiAqICAgICBlbnRyaWVzIGFyZSBgcGluZ2JhY2tgLCBgcHJlZmV0Y2hgLCBvciBgc3R5bGVzaGVldGAuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBoYXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaGFzLXByb3BlcnR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBva1xuXG52YXIgbGlzdCA9IFsncGluZ2JhY2snLCAncHJlZmV0Y2gnLCAnc3R5bGVzaGVldCddXG5cbmZ1bmN0aW9uIG9rKG5vZGUpIHtcbiAgdmFyIGxlbmd0aFxuICB2YXIgaW5kZXhcbiAgdmFyIHJlbFxuXG4gIGlmICghaXMobm9kZSwgJ2xpbmsnKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGhhcyhub2RlLCAnaXRlbVByb3AnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZWwgPSAobm9kZS5wcm9wZXJ0aWVzIHx8IHt9KS5yZWwgfHwgW11cbiAgbGVuZ3RoID0gcmVsLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgaWYgKHJlbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGxpc3QuaW5kZXhPZihyZWxbaW5kZXhdKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpc0VsZW1lbnRcblxuLy8gQ2hlY2sgaWYgaWYgYG5vZGVgIGlzIGFuIGBlbGVtZW50YCBhbmQsIGlmIGB0YWdOYW1lc2AgaXMgZ2l2ZW4sIGBub2RlYFxuLy8gbWF0Y2hlcyB0aGVtIGB0YWdOYW1lc2AuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSwgdGFnTmFtZXMpIHtcbiAgdmFyIG5hbWVcblxuICBpZiAoXG4gICAgIShcbiAgICAgIHRhZ05hbWVzID09PSBudWxsIHx8XG4gICAgICB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0eXBlb2YgdGFnTmFtZXMgPT09ICdzdHJpbmcnIHx8XG4gICAgICAodHlwZW9mIHRhZ05hbWVzID09PSAnb2JqZWN0JyAmJiB0YWdOYW1lcy5sZW5ndGggIT09IDApXG4gICAgKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnRXhwZWN0ZWQgYHN0cmluZ2Agb3IgYEFycmF5LjxzdHJpbmc+YCBmb3IgYHRhZ05hbWVzYCwgbm90IGAnICtcbiAgICAgICAgdGFnTmFtZXMgK1xuICAgICAgICAnYCdcbiAgICApXG4gIH1cblxuICBpZiAoXG4gICAgIW5vZGUgfHxcbiAgICB0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHxcbiAgICBub2RlLnR5cGUgIT09ICdlbGVtZW50JyB8fFxuICAgIHR5cGVvZiBub2RlLnRhZ05hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHRhZ05hbWVzID09PSBudWxsIHx8IHRhZ05hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmFtZSA9IG5vZGUudGFnTmFtZVxuXG4gIGlmICh0eXBlb2YgdGFnTmFtZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09IHRhZ05hbWVzXG4gIH1cblxuICByZXR1cm4gdGFnTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTFcbn1cbiIsInZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBoYXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaGFzLXByb3BlcnR5JylcbnZhciBlbWJlZGRlZCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1lbWJlZGRlZCcpXG52YXIgYm9keU9LTGluayA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1ib2R5LW9rLWxpbmsnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBocmFzaW5nXG5cbnZhciBsaXN0ID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgLy8gYGFyZWFgIGlzIGluIGZhY3Qgb25seSBwaHJhc2luZyBpZiBpdCBpcyBpbnNpZGUgYSBgbWFwYCBlbGVtZW50LlxuICAvLyBIb3dldmVyLCBzaW5jZSBgYXJlYWBzIGFyZSByZXF1aXJlZCB0byBiZSBpbnNpZGUgYSBgbWFwYCBlbGVtZW50LCBhbmQgaXTigJlzXG4gIC8vIGEgcmF0aGVyIGludm9sdmVkIGNoZWNrLCBpdOKAmXMgaWdub3JlZCBoZXJlIGZvciBub3cuXG4gICdhcmVhJyxcbiAgJ2InLFxuICAnYmRpJyxcbiAgJ2JkbycsXG4gICdicicsXG4gICdidXR0b24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2RhdGEnLFxuICAnZGF0YWxpc3QnLFxuICAnZGVsJyxcbiAgJ2RmbicsXG4gICdlbScsXG4gICdpJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAna2V5Z2VuJyxcbiAgJ2xhYmVsJyxcbiAgJ21hcCcsXG4gICdtYXJrJyxcbiAgJ21ldGVyJyxcbiAgJ25vc2NyaXB0JyxcbiAgJ291dHB1dCcsXG4gICdwcm9ncmVzcycsXG4gICdxJyxcbiAgJ3J1YnknLFxuICAncycsXG4gICdzYW1wJyxcbiAgJ3NjcmlwdCcsXG4gICdzZWxlY3QnLFxuICAnc21hbGwnLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3ViJyxcbiAgJ3N1cCcsXG4gICd0ZW1wbGF0ZScsXG4gICd0ZXh0YXJlYScsXG4gICd0aW1lJyxcbiAgJ3UnLFxuICAndmFyJyxcbiAgJ3dicidcbl1cblxuZnVuY3Rpb24gcGhyYXNpbmcobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudHlwZSA9PT0gJ3RleHQnIHx8XG4gICAgaXMobm9kZSwgbGlzdCkgfHxcbiAgICBlbWJlZGRlZChub2RlKSB8fFxuICAgIGJvZHlPS0xpbmsobm9kZSkgfHxcbiAgICAoaXMobm9kZSwgJ21ldGEnKSAmJiBoYXMobm9kZSwgJ2l0ZW1Qcm9wJykpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyRWxlbWVudFdoaXRlU3BhY2VcblxuLy8gSFRNTCB3aGl0ZS1zcGFjZSBleHByZXNzaW9uLlxuLy8gU2VlIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzcGFjZS1jaGFyYWN0ZXI+LlxudmFyIHJlID0gL1sgXFx0XFxuXFxmXFxyXS9nXG5cbmZ1bmN0aW9uIGludGVyRWxlbWVudFdoaXRlU3BhY2Uobm9kZSkge1xuICB2YXIgdmFsdWVcblxuICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcbiAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IG5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCAnJykgPT09ICcnXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1pbmlmeSA9IHJlcXVpcmUoJ3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZScpKHtuZXdsaW5lczogdHJ1ZX0pXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKVxudmFyIGVtYmVkZGVkID0gcmVxdWlyZSgnaGFzdC11dGlsLWVtYmVkZGVkJylcbnZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1waHJhc2luZycpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2hhc3QtdXRpbC13aGl0ZXNwYWNlJylcbnZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBzZW5zaXRpdmUgPSByZXF1aXJlKCdodG1sLXdoaXRlc3BhY2Utc2Vuc2l0aXZlLXRhZy1uYW1lcycpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0XG5cbnZhciBkb3VibGUgPSAnXFxuXFxuJ1xudmFyIHNpbmdsZSA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciByZSA9IC8gKlxcbi9nXG5cbmZ1bmN0aW9uIGZvcm1hdChvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGluZGVudCA9IHNldHRpbmdzLmluZGVudCB8fCAyXG4gIHZhciBpbmRlbnRJbml0aWFsID0gc2V0dGluZ3MuaW5kZW50SW5pdGlhbFxuICB2YXIgYmxhbmtzID0gc2V0dGluZ3MuYmxhbmtzIHx8IFtdXG5cbiAgaWYgKHR5cGVvZiBpbmRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgaW5kZW50ID0gcmVwZWF0KHNwYWNlLCBpbmRlbnQpXG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIGluZGVudGluZyB0aGUgaW5pdGlhbCBsZXZlbC5cbiAgaWYgKGluZGVudEluaXRpYWwgPT09IG51bGwgfHwgaW5kZW50SW5pdGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5kZW50SW5pdGlhbCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm0odHJlZSkge1xuICAgIHZhciBoZWFkID0gZmFsc2VcblxuICAgIG1pbmlmeSh0cmVlKVxuXG4gICAgdmlzaXQodHJlZSwgdmlzaXRvcilcblxuICAgIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgcGFyZW50cykge1xuICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiB8fCBbXVxuICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICAgICAgdmFyIGxldmVsID0gcGFyZW50cy5sZW5ndGhcbiAgICAgIHZhciBpbmRleCA9IC0xXG4gICAgICB2YXIgcmVzdWx0XG4gICAgICB2YXIgcHJldmlvdXNcbiAgICAgIHZhciBjaGlsZFxuICAgICAgdmFyIG5ld2xpbmVcblxuICAgICAgaWYgKGlzKG5vZGUsICdoZWFkJykpIHtcbiAgICAgICAgaGVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWQgJiYgaXMobm9kZSwgJ2JvZHknKSkge1xuICAgICAgICBoZWFkID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGlzKG5vZGUsIHNlbnNpdGl2ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0LlNLSVBcbiAgICAgIH1cblxuICAgICAgLy8gRG9u4oCZdCBpbmRlbnQgY29udGVudCBvZiB3aGl0ZXNwYWNlLXNlbnNpdGl2ZSBub2RlcyAvIGlubGluZXMuXG4gICAgICBpZiAoIWxlbmd0aCB8fCAhcGFkZGluZyhub2RlLCBoZWFkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFpbmRlbnRJbml0aWFsKSB7XG4gICAgICAgIGxldmVsLS1cbiAgICAgIH1cblxuICAgICAgLy8gSW5kZW50IG5ld2xpbmVzIGluIGB0ZXh0YC5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICd0ZXh0JyB8fCBjaGlsZC50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgICAgICBpZiAoY2hpbGQudmFsdWUuaW5kZXhPZignXFxuJykgIT09IC0xKSB7XG4gICAgICAgICAgICBuZXdsaW5lID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkLnZhbHVlID0gY2hpbGQudmFsdWUucmVwbGFjZShyZSwgJyQmJyArIHJlcGVhdChpbmRlbnQsIGxldmVsKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBbXVxuICAgICAgaW5kZXggPSAtMVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgICAgIGlmIChwYWRkaW5nKGNoaWxkLCBoZWFkKSB8fCAobmV3bGluZSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICBhZGRCcmVhayhyZXN1bHQsIGxldmVsLCBjaGlsZClcbiAgICAgICAgICBuZXdsaW5lID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXMgPSBjaGlsZFxuICAgICAgICByZXN1bHQucHVzaChjaGlsZClcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld2xpbmUgfHwgcGFkZGluZyhwcmV2aW91cywgaGVhZCkpIHtcbiAgICAgICAgLy8gSWdub3JlIHRyYWlsaW5nIHdoaXRlc3BhY2UgKGlmIHRoYXQgYWxyZWFkeSBleGlzdGVkKSwgYXMgd2XigJlsbCBhZGRcbiAgICAgICAgLy8gcHJvcGVybHkgaW5kZW50ZWQgd2hpdGVzcGFjZS5cbiAgICAgICAgaWYgKHdoaXRlc3BhY2UocHJldmlvdXMpKSB7XG4gICAgICAgICAgcmVzdWx0LnBvcCgpXG4gICAgICAgICAgcHJldmlvdXMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICBhZGRCcmVhayhyZXN1bHQsIGxldmVsIC0gMSlcbiAgICAgICAgbmV3bGluZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgbm9kZS5jaGlsZHJlbiA9IHJlc3VsdFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJsYW5rKG5vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgbm9kZSAmJlxuICAgICAgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiZcbiAgICAgIGJsYW5rcy5sZW5ndGggIT09IDAgJiZcbiAgICAgIGJsYW5rcy5pbmRleE9mKG5vZGUudGFnTmFtZSkgIT09IC0xXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQnJlYWsobGlzdCwgbGV2ZWwsIG5leHQpIHtcbiAgICB2YXIgdGFpbCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXVxuICAgIHZhciBwcmV2aW91cyA9IHdoaXRlc3BhY2UodGFpbCkgPyBsaXN0W2xpc3QubGVuZ3RoIC0gMl0gOiB0YWlsXG4gICAgdmFyIHJlcGxhY2UgPVxuICAgICAgKGJsYW5rKHByZXZpb3VzKSAmJiBibGFuayhuZXh0KSA/IGRvdWJsZSA6IHNpbmdsZSkgKyByZXBlYXQoaW5kZW50LCBsZXZlbClcblxuICAgIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAod2hpdGVzcGFjZSh0YWlsKSkge1xuICAgICAgICB0YWlsLnZhbHVlID0gcmVwbGFjZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFpbC52YWx1ZSArPSByZXBsYWNlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogcmVwbGFjZX0pXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZGRpbmcobm9kZSwgaGVhZCkge1xuICBpZiAobm9kZS50eXBlID09PSAncm9vdCcpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgcmV0dXJuIGhlYWQgfHwgaXMobm9kZSwgJ3NjcmlwdCcpIHx8IGVtYmVkZGVkKG5vZGUpIHx8ICFwaHJhc2luZyhub2RlKVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCIvLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtY3NzLXVzZXItYWdlbnQtc3R5bGUtc2hlZXQtYW5kLXByZXNlbnRhdGlvbmFsLWhpbnRzPlxubW9kdWxlLmV4cG9ydHMgPSBbXG4gIC8vIENvbnRyaWJ1dGUgd2hpdGVzcGFjZSBpbnRyaW5zaWNhbGx5LlxuICAnYnInLFxuICAnd2JyJyxcbiAgLy8gU2ltaWxhciB0byBibG9jay5cbiAgJ2xpJyxcbiAgJ3RhYmxlJyxcbiAgJ2NhcHRpb24nLFxuICAnY29sZ3JvdXAnLFxuICAnY29sJyxcbiAgJ3RoZWFkJyxcbiAgJ3Rib2R5JyxcbiAgJ3Rmb290JyxcbiAgJ3RyJyxcbiAgJ3RkJyxcbiAgJ3RoJyxcbiAgJ3N1bW1hcnknLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgLy8gUGFnZVxuICAnaHRtbCcsXG4gICdoZWFkJyxcbiAgJ2JvZHknLFxuICAvLyBGbG93IGNvbnRlbnRcbiAgJ2FkZHJlc3MnLFxuICAnYmxvY2txdW90ZScsXG4gICdjZW50ZXInLCAvLyBMZWdhY3lcbiAgJ2RpYWxvZycsXG4gICdkaXYnLFxuICAnZmlndXJlJyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaXN0aW5nJywgLy8gTGVnYWN5XG4gICdtYWluJyxcbiAgJ3AnLFxuICAncGxhaW50ZXh0JywgLy8gTGVnYWN5XG4gICdwcmUnLFxuICAneG1wJywgLy8gTGVnYWN5XG4gIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZ3JvdXAnLFxuICAnbmF2JyxcbiAgJ3NlY3Rpb24nLFxuICAvLyBMaXN0c1xuICAnZGlyJywgLy8gTGVnYWN5XG4gICdkZCcsXG4gICdkbCcsXG4gICdkdCcsXG4gICdtZW51JyxcbiAgJ29sJyxcbiAgJ3VsJyxcbiAgLy8gQmxvY2stbGlrZTpcbiAgJ2xpJyxcbiAgJ3RoJyxcbiAgJ3RkJ1xuXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gIC8vIEZvcm0uXG4gICdidXR0b24nLFxuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJ1xuXVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAgIENvbGxhcHNlIHdoaXRlLXNwYWNlLlxuICpcbiAqICAgTm9ybWFsbHksIGNvbGxhcHNlcyB0byBhIHNpbmdsZSBzcGFjZS5cbiAqICAgSWYgYG5ld2xpbmVzOiB0cnVlYCwgY29sbGFwc2VzIHdoaXRlLXNwYWNlIGNvbnRhaW5pbmcgbmV3bGluZXMgdG8gYCdcXG4nYFxuICogICBpbnN0ZWFkIG9mIGAnICdgLlxuICogQGV4YW1wbGVcbiAqICAgPGgxPkhlYWRpbmc8L2gxPlxuICogICA8cD48c3Ryb25nPlRoaXM8L3N0cm9uZz4gYW5kIDxlbT50aGF0PC9lbT48L3A+XG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBjb2xsYXBzZVdoaXRlU3BhY2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgZW1iZWRkZWQgPSByZXF1aXJlKCdoYXN0LXV0aWwtZW1iZWRkZWQnKVxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdoYXN0LXV0aWwtd2hpdGVzcGFjZScpXG52YXIgYmxvY2tzID0gcmVxdWlyZSgnLi9ibG9jaycpXG52YXIgY29udGVudHMgPSByZXF1aXJlKCcuL2NvbnRlbnQnKVxudmFyIHNraXBwYWJsZXMgPSByZXF1aXJlKCcuL3NraXBwYWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbWluaWZ5V2hpdGVzcGFjZVxuXG52YXIgaWdub3JhYmxlTm9kZSA9IGNvbnZlcnQoWydkb2N0eXBlJywgJ2NvbW1lbnQnXSlcbnZhciBwYXJlbnQgPSBjb252ZXJ0KFsnZWxlbWVudCcsICdyb290J10pXG52YXIgcm9vdCA9IGNvbnZlcnQoWydyb290J10pXG52YXIgZWxlbWVudCA9IGNvbnZlcnQoWydlbGVtZW50J10pXG52YXIgdGV4dCA9IGNvbnZlcnQoWyd0ZXh0J10pXG5cbmZ1bmN0aW9uIG1pbmlmeVdoaXRlc3BhY2Uob3B0aW9ucykge1xuICB2YXIgY29sbGFwc2UgPSAob3B0aW9ucyB8fCB7fSkubmV3bGluZXNcbiAgICA/IGNvbGxhcHNlVG9OZXdMaW5lc1xuICAgIDogY29sbGFwc2VXaGl0ZVNwYWNlXG5cbiAgcmV0dXJuIHRyYW5zZm9ybVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgbWluaWZ5KHRyZWUsIHtjb2xsYXBzZTogY29sbGFwc2UsIHdoaXRlc3BhY2U6ICdub3JtYWwnfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW5pZnkobm9kZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3NcblxuICBpZiAocGFyZW50KG5vZGUpKSB7XG4gICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKVxuXG4gICAgaWYgKHJvb3Qobm9kZSkgfHwgYmxvY2tsaWtlKG5vZGUpKSB7XG4gICAgICBzZXR0aW5ncy5iZWZvcmUgPSB0cnVlXG4gICAgICBzZXR0aW5ncy5hZnRlciA9IHRydWVcbiAgICB9XG5cbiAgICBzZXR0aW5ncy53aGl0ZXNwYWNlID0gaW5mZXJXaGl0ZVNwYWNlKG5vZGUsIG9wdGlvbnMpXG5cbiAgICByZXR1cm4gYWxsKG5vZGUsIHNldHRpbmdzKVxuICB9XG5cbiAgaWYgKHRleHQobm9kZSkpIHtcbiAgICBpZiAob3B0aW9ucy53aGl0ZXNwYWNlID09PSAnbm9ybWFsJykge1xuICAgICAgcmV0dXJuIG1pbmlmeVRleHQobm9kZSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICAvLyBOYcOvdmUgY29sbGFwc2UsIGJ1dCBubyB0cmltbWluZzpcbiAgICBpZiAob3B0aW9ucy53aGl0ZXNwYWNlID09PSAnbm93cmFwJykge1xuICAgICAgbm9kZS52YWx1ZSA9IG9wdGlvbnMuY29sbGFwc2Uobm9kZS52YWx1ZSlcbiAgICB9XG5cbiAgICAvLyBUaGUgYHByZS13cmFwYCBvciBgcHJlYCB3aGl0ZXNwYWNlIHNldHRpbmdzIGFyZSBuZWl0aGVyIGNvbGxhcHNlZCBub3JcbiAgICAvLyB0cmltbWVkLlxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmU6IGZhbHNlLFxuICAgIGlnbm9yZTogaWdub3JhYmxlTm9kZShub2RlKSxcbiAgICBzdHJpcEF0U3RhcnQ6IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaWZ5VGV4dChub2RlLCBvcHRpb25zKSB7XG4gIHZhciB2YWx1ZSA9IG9wdGlvbnMuY29sbGFwc2Uobm9kZS52YWx1ZSlcbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgZW5kID0gdmFsdWUubGVuZ3RoXG4gIHZhciByZXN1bHQgPSB7cmVtb3ZlOiBmYWxzZSwgaWdub3JlOiBmYWxzZSwgc3RyaXBBdFN0YXJ0OiBmYWxzZX1cblxuICBpZiAob3B0aW9ucy5iZWZvcmUgJiYgcmVtb3ZhYmxlKHZhbHVlLmNoYXJBdCgwKSkpIHtcbiAgICBzdGFydCsrXG4gIH1cblxuICBpZiAoc3RhcnQgIT09IGVuZCAmJiByZW1vdmFibGUodmFsdWUuY2hhckF0KGVuZCAtIDEpKSkge1xuICAgIGlmIChvcHRpb25zLmFmdGVyKSB7XG4gICAgICBlbmQtLVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc3RyaXBBdFN0YXJ0ID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgcmVzdWx0LnJlbW92ZSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBub2RlLnZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gYWxsKHBhcmVudCwgb3B0aW9ucykge1xuICB2YXIgYmVmb3JlID0gb3B0aW9ucy5iZWZvcmVcbiAgdmFyIGFmdGVyID0gb3B0aW9ucy5hZnRlclxuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBtaW5pZnkoXG4gICAgICBjaGlsZHJlbltpbmRleF0sXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGJlZm9yZTogYmVmb3JlLFxuICAgICAgICBhZnRlcjogY29sbGFwc2FibGVBZnRlcihjaGlsZHJlbiwgaW5kZXgsIGFmdGVyKVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpZiAocmVzdWx0LnJlbW92ZSkge1xuICAgICAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgaW5kZXgtLVxuICAgICAgbGVuZ3RoLS1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQuaWdub3JlKSB7XG4gICAgICBiZWZvcmUgPSByZXN1bHQuc3RyaXBBdFN0YXJ0XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBlbGVtZW50LCBzdWNoIGFzIGEgYDxzZWxlY3Q+YCBvciBgPGltZz5gLCBjb250cmlidXRlcyBjb250ZW50XG4gICAgLy8gc29tZWhvdywgYWxsb3cgd2hpdGVzcGFjZSBhZ2Fpbi5cbiAgICBpZiAoY29udGVudChjaGlsZHJlbltpbmRleF0pKSB7XG4gICAgICBiZWZvcmUgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmYWxzZSxcbiAgICBpZ25vcmU6IGZhbHNlLFxuICAgIHN0cmlwQXRTdGFydDogYmVmb3JlIHx8IGFmdGVyXG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGFwc2FibGVBZnRlcihub2RlcywgaW5kZXgsIGFmdGVyKSB7XG4gIHZhciBsZW5ndGggPSBub2Rlcy5sZW5ndGhcbiAgdmFyIG5vZGVcbiAgdmFyIHJlc3VsdFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbm9kZSA9IG5vZGVzW2luZGV4XVxuICAgIHJlc3VsdCA9IGluZmVyQm91bmRhcnkobm9kZSlcblxuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCAmJiBub2RlLmNoaWxkcmVuICYmICFza2lwcGFibGUobm9kZSkpIHtcbiAgICAgIHJlc3VsdCA9IGNvbGxhcHNhYmxlQWZ0ZXIobm9kZS5jaGlsZHJlbiwgLTEpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhZnRlclxufVxuXG4vLyBJbmZlciB0d28gdHlwZXMgb2YgYm91bmRhcmllczpcbi8vXG4vLyAxLiBgdHJ1ZWAg4oCUIGJvdW5kYXJ5IGZvciB3aGljaCB3aGl0ZXNwYWNlIGFyb3VuZCBpdCBkb2VzIG5vdCBjb250cmlidXRlXG4vLyAgICBhbnl0aGluZ1xuLy8gMi4gYGZhbHNlYCDigJQgYm91bmRhcnkgZm9yIHdoaWNoIHdoaXRlc3BhY2UgYXJvdW5kIGl0ICpkb2VzKiBjb250cmlidXRlXG4vL1xuLy8gTm8gcmVzdWx0IChgdW5kZWZpbmVkYCkgaXMgcmV0dXJuZWQgaWYgaXQgaXMgdW5rbm93bi5cbmZ1bmN0aW9uIGluZmVyQm91bmRhcnkobm9kZSkge1xuICBpZiAoZWxlbWVudChub2RlKSkge1xuICAgIGlmIChjb250ZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYmxvY2tsaWtlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFVua25vd246IGVpdGhlciBkZXBlbmRzIG9uIHNpYmxpbmdzIGlmIGVtYmVkZGVkIG9yIG1ldGFkYXRhLCBvciBvblxuICAgIC8vIGNoaWxkcmVuLlxuICB9IGVsc2UgaWYgKHRleHQobm9kZSkpIHtcbiAgICBpZiAoIXdoaXRlc3BhY2Uobm9kZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIGlmICghaWdub3JhYmxlTm9kZShub2RlKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIEluZmVyIHdoZXRoZXIgYSBub2RlIGlzIHNraXBwYWJsZS5cbmZ1bmN0aW9uIGNvbnRlbnQobm9kZSkge1xuICByZXR1cm4gZW1iZWRkZWQobm9kZSkgfHwgaXMobm9kZSwgY29udGVudHMpXG59XG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1jc3MtdXNlci1hZ2VudC1zdHlsZS1zaGVldC1hbmQtcHJlc2VudGF0aW9uYWwtaGludHM+XG5mdW5jdGlvbiBibG9ja2xpa2Uobm9kZSkge1xuICByZXR1cm4gaXMobm9kZSwgYmxvY2tzKVxufVxuXG5mdW5jdGlvbiBza2lwcGFibGUobm9kZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGN1cnJlbnRseSBvbmx5IHVzZWQgb24gZWxlbWVudHMsIGJ1dCBqdXN0IHRvIG1ha2Ugc3VyZS4gKi9cbiAgdmFyIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzIHx8IHt9XG5cbiAgcmV0dXJuIGlnbm9yYWJsZU5vZGUobm9kZSkgfHwgaXMobm9kZSwgc2tpcHBhYmxlcykgfHwgcHJvcHMuaGlkZGVuXG59XG5cbmZ1bmN0aW9uIHJlbW92YWJsZShjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGNoYXJhY3RlciA9PT0gJyAnIHx8IGNoYXJhY3RlciA9PT0gJ1xcbidcbn1cblxuLy8gQ29sbGFwc2UgdG8gc3BhY2VzLCBvciBsaW5lIGZlZWRzIGlmIHRoZXnigJlyZSBpbiBhIHJ1bi5cbmZ1bmN0aW9uIGNvbGxhcHNlVG9OZXdMaW5lcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXHMrL2csIHJlcGxhY2UpXG5cbiAgZnVuY3Rpb24gcmVwbGFjZSgkMCkge1xuICAgIHJldHVybiAkMC5pbmRleE9mKCdcXG4nKSA9PT0gLTEgPyAnICcgOiAnXFxuJ1xuICB9XG59XG5cbi8vIFdlIGRvbuKAmXQgc3VwcG9ydCB2b2lkIGVsZW1lbnRzIGhlcmUgKHNvIGBub2JyIHdicmAgLT4gYG5vcm1hbGAgaXMgaWdub3JlZCkuXG5mdW5jdGlvbiBpbmZlcldoaXRlU3BhY2Uobm9kZSwgb3B0aW9ucykge1xuICB2YXIgcHJvcHMgPSBub2RlLnByb3BlcnRpZXMgfHwge31cblxuICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xuICAgIGNhc2UgJ2xpc3RpbmcnOlxuICAgIGNhc2UgJ3BsYWludGV4dCc6XG4gICAgY2FzZSAneG1wJzpcbiAgICAgIHJldHVybiAncHJlJ1xuICAgIGNhc2UgJ25vYnInOlxuICAgICAgcmV0dXJuICdub3dyYXAnXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIHJldHVybiBwcm9wcy53cmFwID8gJ3ByZS13cmFwJyA6ICdwcmUnXG4gICAgY2FzZSAndGQnOlxuICAgIGNhc2UgJ3RoJzpcbiAgICAgIHJldHVybiBwcm9wcy5ub1dyYXAgPyAnbm93cmFwJyA6IG9wdGlvbnMud2hpdGVzcGFjZVxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAncHJlLXdyYXAnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcHRpb25zLndoaXRlc3BhY2VcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gICdhcmVhJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnZGlhbG9nJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2hlYWQnLFxuICAnbGluaycsXG4gICdtZXRhJyxcbiAgJ25vZW1iZWQnLFxuICAnbm9mcmFtZXMnLFxuICAncGFyYW0nLFxuICAncnAnLFxuICAnc2NyaXB0JyxcbiAgJ3NvdXJjZScsXG4gICdzdHlsZScsXG4gICd0ZW1wbGF0ZScsXG4gICd0cmFjaycsXG4gICd0aXRsZSdcbl1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuXG4gIG9uZSh0cmVlLCBudWxsLCBbXSlcblxuICAvLyBWaXNpdCBhIHNpbmdsZSBub2RlLlxuICBmdW5jdGlvbiBvbmUobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgc3VicmVzdWx0XG5cbiAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICBzdWJyZXN1bHQgPSB0b1Jlc3VsdChhbGwobm9kZS5jaGlsZHJlbiwgcGFyZW50cy5jb25jYXQobm9kZSkpKVxuICAgICAgcmV0dXJuIHN1YnJlc3VsdFswXSA9PT0gRVhJVCA/IHN1YnJlc3VsdCA6IHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudHMpIHtcbiAgICB2YXIgbWluID0gLTFcbiAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcbiAgICB2YXIgaW5kZXggPSAocmV2ZXJzZSA/IGNoaWxkcmVuLmxlbmd0aCA6IG1pbikgKyBzdGVwXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKGluZGV4ID4gbWluICYmIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBvbmUoY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50cylcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdHlwZW9mIHJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyByZXN1bHRbMV0gOiBpbmRleCArIHN0ZXBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==