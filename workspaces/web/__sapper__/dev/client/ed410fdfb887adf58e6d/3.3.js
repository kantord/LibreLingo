(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../../node_modules/array-iterate/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/array-iterate/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = iterate

var own = {}.hasOwnProperty

function iterate(values, callback, context) {
  var index = -1
  var result

  if (!values) {
    throw new Error('Iterate requires that |this| not be ' + values)
  }

  if (!own.call(values, 'length')) {
    throw new Error('Iterate requires that |this| has a `length`')
  }

  if (typeof callback !== 'function') {
    throw new Error('`callback` must be a function')
  }

  // The length might change, so we do not cache it.
  while (++index < values.length) {
    // Skip missing values.
    if (!(index in values)) {
      continue
    }

    result = callback.call(context, values[index], index, values)

    // If `callback` returns a `number`, move `index` over to `number`.
    if (typeof result === 'number') {
      // Make sure that negative numbers do not break the loop.
      if (result < 0) {
        index = 0
      }

      index = result - 1
    }
  }
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
var phrasing = __webpack_require__(/*! hast-util-phrasing */ "../../node_modules/hast-util-phrasing/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "../../node_modules/hast-util-embedded/index.js")
var sensitive = __webpack_require__(/*! html-whitespace-sensitive-tag-names */ "../../node_modules/html-whitespace-sensitive-tag-names/index.json")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var visit = __webpack_require__(/*! unist-util-visit-parents */ "../../node_modules/unist-util-visit-parents/index.js")

module.exports = format

var double = '\n\n'
var single = '\n'
var re = /\n/g

function format(options) {
  var settings = options || {}
  var indent = settings.indent || 2
  var indentInitial = settings.indentInitial
  var blanks = settings.blanks || []

  if (typeof indent === 'number') {
    indent = repeat(' ', indent)
  }

  // Default to indenting the initial level.
  if (indentInitial === null || indentInitial === undefined) {
    indentInitial = true
  }

  return transform

  function transform(tree) {
    var root = minify(tree)
    var head = false

    visit(root, visitor)

    return root

    // eslint-disable-next-line complexity
    function visitor(node, parents) {
      var children = node.children || []
      var length = children.length
      var level = parents.length
      var index = -1
      var result
      var previous
      var child
      var newline

      if (node.type === 'element' && node.tagName === 'head') {
        head = true
      }

      if (head && node.type === 'element' && node.tagName === 'body') {
        head = false
      }

      // Don’t indent content of whitespace-sensitive nodes / inlines.
      if (!length || !padding(node, head) || ignore(parents.concat(node))) {
        return
      }

      if (!indentInitial) {
        level--
      }

      // Indent newlines in `text`.
      while (++index < length) {
        child = children[index]

        if (child.type === 'text') {
          if (child.value.indexOf('\n') !== -1) {
            newline = true
          }

          child.value = child.value.replace(re, '$&' + repeat(indent, level))
        }
      }

      result = []
      index = -1

      node.children = result

      while (++index < length) {
        child = children[index]

        if (padding(child, head) || (newline && index === 0)) {
          result.push({
            type: 'text',
            value:
              (previous && blank(previous) && blank(child) ? double : single) +
              repeat(indent, level)
          })
        }

        previous = child
        result.push(child)
      }

      if (newline || padding(previous, head)) {
        result.push({
          type: 'text',
          value: single + repeat(indent, level - 1)
        })
      }
    }
  }

  function blank(node) {
    return (
      node.type === 'element' &&
      blanks.length !== 0 &&
      blanks.indexOf(node.tagName) !== -1
    )
  }
}

function padding(node, head) {
  if (node.type === 'root') {
    return true
  }

  if (node.type === 'element') {
    return (
      head || node.tagName === 'script' || embedded(node) || !phrasing(node)
    )
  }

  return false
}

function ignore(nodes) {
  var index = nodes.length

  while (index--) {
    if (sensitive.indexOf(nodes[index].tagName) !== -1) {
      return true
    }
  }

  return false
}


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
var whitespaceSensitive = __webpack_require__(/*! html-whitespace-sensitive-tag-names */ "../../node_modules/html-whitespace-sensitive-tag-names/index.json")
var convert = __webpack_require__(/*! unist-util-is/convert */ "../../node_modules/unist-util-is/convert.js")
var modify = __webpack_require__(/*! unist-util-modify-children */ "../../node_modules/unist-util-modify-children/index.js")
var element = __webpack_require__(/*! hast-util-is-element */ "../../node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "../../node_modules/hast-util-has-property/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "../../node_modules/hast-util-embedded/index.js")
var bodyOK = __webpack_require__(/*! hast-util-is-body-ok-link */ "../../node_modules/hast-util-is-body-ok-link/index.js")
var list = __webpack_require__(/*! ./list.json */ "../../node_modules/rehype-minify-whitespace/list.json")

var text = convert('text')

module.exports = collapse

function collapse(options) {
  return transform
  function transform(tree) {
    return minify(tree, options || {})
  }
}

function minify(tree, options) {
  var whitespace = options.newlines ? collapseToNewLines : collapseWhiteSpace
  var modifier = modify(visitor)
  var inside = false
  var seen = false

  visitor(tree)

  return tree

  function visitor(node, index, parent) {
    var head
    var prev
    var next
    var value
    var start
    var end

    if (text(node)) {
      prev = parent.children[index - 1]
      next = parent.children[index + 1]

      value = whitespace(node.value)
      end = value.length
      start = 0

      if (empty(value.charAt(0)) && viable(prev)) {
        start++
      }

      if (empty(value.charAt(end - 1)) && viable(next)) {
        end--
      }

      value = value.slice(start, end)

      // Remove the node if it’s collapsed entirely.
      if (!value) {
        parent.children.splice(index, 1)

        return index
      }

      node.value = value
    }

    if (!seen && !inside) {
      head = element(node, 'head')
      inside = head
      seen = head
    }

    if (node.children && !element(node, whitespaceSensitive)) {
      modifier(node)
    }

    if (head) {
      inside = false
    }
  }

  function viable(node) {
    return !node || inside || !collapsable(node)
  }
}

// Check if `node` is collapsable.
function collapsable(node) {
  return (
    text(node) ||
    element(node, list) ||
    embedded(node) ||
    bodyOK(node) ||
    (element(node, 'meta') && has(node, 'itemProp'))
  )
}

// Collapse to spaces, or newlines if they’re in a run.
function collapseToNewLines(value) {
  var result = String(value).replace(/\s+/g, function($0) {
    return $0.indexOf('\n') === -1 ? ' ' : '\n'
  })

  return result
}

function empty(character) {
  return character === ' ' || character === '\n'
}


/***/ }),

/***/ "../../node_modules/rehype-minify-whitespace/list.json":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/rehype-minify-whitespace/list.json ***!
  \************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"a\",\"abbr\",\"acronym\",\"b\",\"basefont\",\"big\",\"bdi\",\"bdo\",\"blink\",\"button\",\"cite\",\"code\",\"data\",\"del\",\"dfn\",\"em\",\"font\",\"i\",\"input\",\"ins\",\"kbd\",\"keygen\",\"label\",\"mark\",\"marquee\",\"meter\",\"nobr\",\"output\",\"progress\",\"q\",\"ruby\",\"s\",\"samp\",\"select\",\"small\",\"spacer\",\"span\",\"strong\",\"sub\",\"sup\",\"textarea\",\"time\",\"tt\",\"u\",\"var\"]");

/***/ }),

/***/ "../../node_modules/unist-util-modify-children/index.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-modify-children/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iterate = __webpack_require__(/*! array-iterate */ "../../node_modules/array-iterate/index.js")

module.exports = modifierFactory

// Turn `callback` into a child-modifier accepting a parent.  See
// `array-iterate` for more info.
function modifierFactory(callback) {
  return iteratorFactory(wrapperFactory(callback))
}

// Turn `callback` into a `iterator' accepting a parent.
function iteratorFactory(callback) {
  return iterator

  function iterator(parent) {
    var children = parent && parent.children

    if (!children) {
      throw new Error('Missing children in `parent` for `modifier`')
    }

    return iterate(children, callback, parent)
  }
}

// Pass the context as the third argument to `callback`.
function wrapperFactory(callback) {
  return wrapper

  function wrapper(value, index) {
    return callback(value, index, this)
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9hcnJheS1pdGVyYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1lbWJlZGRlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaGFzLXByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1pcy1ib2R5LW9rLWxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBocmFzaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlaHlwZS1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtbW9kaWZ5LWNoaWxkcmVuL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQyxnRUFBZTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJlZDQxMGZkZmI4ODdhZGY1OGU2ZC8zLjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBpdGVyYXRlKHZhbHVlcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICghdmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYXRlIHJlcXVpcmVzIHRoYXQgfHRoaXN8IG5vdCBiZSAnICsgdmFsdWVzKVxuICB9XG5cbiAgaWYgKCFvd24uY2FsbCh2YWx1ZXMsICdsZW5ndGgnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSXRlcmF0ZSByZXF1aXJlcyB0aGF0IHx0aGlzfCBoYXMgYSBgbGVuZ3RoYCcpXG4gIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgY2FsbGJhY2tgIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cblxuICAvLyBUaGUgbGVuZ3RoIG1pZ2h0IGNoYW5nZSwgc28gd2UgZG8gbm90IGNhY2hlIGl0LlxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAvLyBTa2lwIG1pc3NpbmcgdmFsdWVzLlxuICAgIGlmICghKGluZGV4IGluIHZhbHVlcykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0LCB2YWx1ZXNbaW5kZXhdLCBpbmRleCwgdmFsdWVzKVxuXG4gICAgLy8gSWYgYGNhbGxiYWNrYCByZXR1cm5zIGEgYG51bWJlcmAsIG1vdmUgYGluZGV4YCBvdmVyIHRvIGBudW1iZXJgLlxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgbmVnYXRpdmUgbnVtYmVycyBkbyBub3QgYnJlYWsgdGhlIGxvb3AuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICBpbmRleCA9IDBcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSByZXN1bHQgLSAxXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtYmVkZGVkXG5cbnZhciBuYW1lcyA9IFtcbiAgJ2F1ZGlvJyxcbiAgJ2NhbnZhcycsXG4gICdlbWJlZCcsXG4gICdpZnJhbWUnLFxuICAnaW1nJyxcbiAgJ21hdGgnLFxuICAnb2JqZWN0JyxcbiAgJ3BpY3R1cmUnLFxuICAnc3ZnJyxcbiAgJ3ZpZGVvJ1xuXVxuXG5mdW5jdGlvbiBlbWJlZGRlZChub2RlKSB7XG4gIHJldHVybiBpcyhub2RlLCBuYW1lcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQcm9wZXJ0eVxuXG4vLyBDaGVjayBpZiBgbm9kZWAgaGFzIGEgc2V0IGBuYW1lYCBwcm9wZXJ0eS5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgdmFyIHByb3BzXG4gIHZhciB2YWx1ZVxuXG4gIGlmICghbm9kZSB8fCAhbmFtZSB8fCB0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHwgbm9kZS50eXBlICE9PSAnZWxlbWVudCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzXG4gIHZhbHVlID0gcHJvcHMgJiYgb3duLmNhbGwocHJvcHMsIG5hbWUpICYmIHByb3BzW25hbWVdXG5cbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IGZhbHNlXG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqICAgQ2hlY2sgaWYgYSBgbGlua2AgZWxlbWVudCBpcyDigJxCb2R5IE9L4oCdLlxuICogQGxvbmdkZXNjcmlwdGlvblxuICogICAjIyBVc2VcbiAqXG4gKiAgIGBgYGpzXG4gKiAgIHZhciBoID0gcmVxdWlyZSgnaGFzdHNjcmlwdCcpXG4gKiAgIHZhciBvayA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1ib2R5LW9rLWxpbmsnKVxuICpcbiAqICAgb2soaCgnbGluaycsIHtpdGVtUHJvcDogJ2Zvbyd9KSkgLy89PiB0cnVlXG4gKiAgIG9rKGgoJ2xpbmsnLCB7cmVsOiBbJ3N0eWxlc2hlZXQnXSwgaHJlZjogJ2luZGV4LmNzcyd9KSkgLy89PiB0cnVlXG4gKiAgIG9rKGgoJ2xpbmsnLCB7cmVsOiBbJ2F1dGhvciddLCBocmVmOiAnaW5kZXguY3NzJ30pKSAvLz0+IGZhbHNlXG4gKiAgIGBgYFxuICpcbiAqICAgIyMgQVBJXG4gKlxuICogICAjIyMgYGlzQm9keU9rTGluayhub2RlKWBcbiAqXG4gKiAgICogUmV0dXJuIGB0cnVlYCBmb3IgYGxpbmtgIGVsZW1lbnRzIHdpdGggYW4gYGl0ZW1Qcm9wYFxuICogICAqIFJldHVybiBgdHJ1ZWAgZm9yIGBsaW5rYCBlbGVtZW50cyB3aXRoIGEgYHJlbGAgbGlzdCB3aGVyZSBvbmUgb3IgbW9yZVxuICogICAgIGVudHJpZXMgYXJlIGBwaW5nYmFja2AsIGBwcmVmZXRjaGAsIG9yIGBzdHlsZXNoZWV0YC5cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9rXG5cbnZhciBsaXN0ID0gWydwaW5nYmFjaycsICdwcmVmZXRjaCcsICdzdHlsZXNoZWV0J11cblxuZnVuY3Rpb24gb2sobm9kZSkge1xuICB2YXIgbGVuZ3RoXG4gIHZhciBpbmRleFxuICB2YXIgcmVsXG5cbiAgaWYgKCFpcyhub2RlLCAnbGluaycpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoaGFzKG5vZGUsICdpdGVtUHJvcCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlbCA9IChub2RlLnByb3BlcnRpZXMgfHwge30pLnJlbCB8fCBbXVxuICBsZW5ndGggPSByZWwubGVuZ3RoXG4gIGluZGV4ID0gLTFcblxuICBpZiAocmVsLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAobGlzdC5pbmRleE9mKHJlbFtpbmRleF0pID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRWxlbWVudFxuXG4vLyBDaGVjayBpZiBpZiBgbm9kZWAgaXMgYW4gYGVsZW1lbnRgIGFuZCwgaWYgYHRhZ05hbWVzYCBpcyBnaXZlbiwgYG5vZGVgXG4vLyBtYXRjaGVzIHRoZW0gYHRhZ05hbWVzYC5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlLCB0YWdOYW1lcykge1xuICB2YXIgbmFtZVxuXG4gIGlmIChcbiAgICAhKFxuICAgICAgdGFnTmFtZXMgPT09IG51bGwgfHxcbiAgICAgIHRhZ05hbWVzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHR5cGVvZiB0YWdOYW1lcyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICh0eXBlb2YgdGFnTmFtZXMgPT09ICdvYmplY3QnICYmIHRhZ05hbWVzLmxlbmd0aCAhPT0gMClcbiAgICApXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdFeHBlY3RlZCBgc3RyaW5nYCBvciBgQXJyYXkuPHN0cmluZz5gIGZvciBgdGFnTmFtZXNgLCBub3QgYCcgK1xuICAgICAgICB0YWdOYW1lcyArXG4gICAgICAgICdgJ1xuICAgIClcbiAgfVxuXG4gIGlmIChcbiAgICAhbm9kZSB8fFxuICAgIHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fFxuICAgIG5vZGUudHlwZSAhPT0gJ2VsZW1lbnQnIHx8XG4gICAgdHlwZW9mIG5vZGUudGFnTmFtZSAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodGFnTmFtZXMgPT09IG51bGwgfHwgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBuYW1lID0gbm9kZS50YWdOYW1lXG5cbiAgaWYgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gdGFnTmFtZXNcbiAgfVxuXG4gIHJldHVybiB0YWdOYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMVxufVxuIiwidmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknKVxudmFyIGVtYmVkZGVkID0gcmVxdWlyZSgnaGFzdC11dGlsLWVtYmVkZGVkJylcbnZhciBib2R5T0tMaW5rID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWJvZHktb2stbGluaycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGhyYXNpbmdcblxudmFyIGxpc3QgPSBbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAvLyBgYXJlYWAgaXMgaW4gZmFjdCBvbmx5IHBocmFzaW5nIGlmIGl0IGlzIGluc2lkZSBhIGBtYXBgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIsIHNpbmNlIGBhcmVhYHMgYXJlIHJlcXVpcmVkIHRvIGJlIGluc2lkZSBhIGBtYXBgIGVsZW1lbnQsIGFuZCBpdOKAmXNcbiAgLy8gYSByYXRoZXIgaW52b2x2ZWQgY2hlY2ssIGl04oCZcyBpZ25vcmVkIGhlcmUgZm9yIG5vdy5cbiAgJ2FyZWEnLFxuICAnYicsXG4gICdiZGknLFxuICAnYmRvJyxcbiAgJ2JyJyxcbiAgJ2J1dHRvbicsXG4gICdjaXRlJyxcbiAgJ2NvZGUnLFxuICAnZGF0YScsXG4gICdkYXRhbGlzdCcsXG4gICdkZWwnLFxuICAnZGZuJyxcbiAgJ2VtJyxcbiAgJ2knLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdrZXlnZW4nLFxuICAnbGFiZWwnLFxuICAnbWFwJyxcbiAgJ21hcmsnLFxuICAnbWV0ZXInLFxuICAnbm9zY3JpcHQnLFxuICAnb3V0cHV0JyxcbiAgJ3Byb2dyZXNzJyxcbiAgJ3EnLFxuICAncnVieScsXG4gICdzJyxcbiAgJ3NhbXAnLFxuICAnc2NyaXB0JyxcbiAgJ3NlbGVjdCcsXG4gICdzbWFsbCcsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdWInLFxuICAnc3VwJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3RpbWUnLFxuICAndScsXG4gICd2YXInLFxuICAnd2JyJ1xuXVxuXG5mdW5jdGlvbiBwaHJhc2luZyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50eXBlID09PSAndGV4dCcgfHxcbiAgICBpcyhub2RlLCBsaXN0KSB8fFxuICAgIGVtYmVkZGVkKG5vZGUpIHx8XG4gICAgYm9keU9LTGluayhub2RlKSB8fFxuICAgIChpcyhub2RlLCAnbWV0YScpICYmIGhhcyhub2RlLCAnaXRlbVByb3AnKSlcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtaW5pZnkgPSByZXF1aXJlKCdyZWh5cGUtbWluaWZ5LXdoaXRlc3BhY2UnKSh7bmV3bGluZXM6IHRydWV9KVxudmFyIHBocmFzaW5nID0gcmVxdWlyZSgnaGFzdC11dGlsLXBocmFzaW5nJylcbnZhciBlbWJlZGRlZCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1lbWJlZGRlZCcpXG52YXIgc2Vuc2l0aXZlID0gcmVxdWlyZSgnaHRtbC13aGl0ZXNwYWNlLXNlbnNpdGl2ZS10YWctbmFtZXMnKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRcblxudmFyIGRvdWJsZSA9ICdcXG5cXG4nXG52YXIgc2luZ2xlID0gJ1xcbidcbnZhciByZSA9IC9cXG4vZ1xuXG5mdW5jdGlvbiBmb3JtYXQob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBpbmRlbnQgPSBzZXR0aW5ncy5pbmRlbnQgfHwgMlxuICB2YXIgaW5kZW50SW5pdGlhbCA9IHNldHRpbmdzLmluZGVudEluaXRpYWxcbiAgdmFyIGJsYW5rcyA9IHNldHRpbmdzLmJsYW5rcyB8fCBbXVxuXG4gIGlmICh0eXBlb2YgaW5kZW50ID09PSAnbnVtYmVyJykge1xuICAgIGluZGVudCA9IHJlcGVhdCgnICcsIGluZGVudClcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gaW5kZW50aW5nIHRoZSBpbml0aWFsIGxldmVsLlxuICBpZiAoaW5kZW50SW5pdGlhbCA9PT0gbnVsbCB8fCBpbmRlbnRJbml0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICBpbmRlbnRJbml0aWFsID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgdmFyIHJvb3QgPSBtaW5pZnkodHJlZSlcbiAgICB2YXIgaGVhZCA9IGZhbHNlXG5cbiAgICB2aXNpdChyb290LCB2aXNpdG9yKVxuXG4gICAgcmV0dXJuIHJvb3RcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgZnVuY3Rpb24gdmlzaXRvcihub2RlLCBwYXJlbnRzKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdXG4gICAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgICB2YXIgbGV2ZWwgPSBwYXJlbnRzLmxlbmd0aFxuICAgICAgdmFyIGluZGV4ID0gLTFcbiAgICAgIHZhciByZXN1bHRcbiAgICAgIHZhciBwcmV2aW91c1xuICAgICAgdmFyIGNoaWxkXG4gICAgICB2YXIgbmV3bGluZVxuXG4gICAgICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbm9kZS50YWdOYW1lID09PSAnaGVhZCcpIHtcbiAgICAgICAgaGVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWQgJiYgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbm9kZS50YWdOYW1lID09PSAnYm9keScpIHtcbiAgICAgICAgaGVhZCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIC8vIERvbuKAmXQgaW5kZW50IGNvbnRlbnQgb2Ygd2hpdGVzcGFjZS1zZW5zaXRpdmUgbm9kZXMgLyBpbmxpbmVzLlxuICAgICAgaWYgKCFsZW5ndGggfHwgIXBhZGRpbmcobm9kZSwgaGVhZCkgfHwgaWdub3JlKHBhcmVudHMuY29uY2F0KG5vZGUpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFpbmRlbnRJbml0aWFsKSB7XG4gICAgICAgIGxldmVsLS1cbiAgICAgIH1cblxuICAgICAgLy8gSW5kZW50IG5ld2xpbmVzIGluIGB0ZXh0YC5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGlmIChjaGlsZC52YWx1ZS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld2xpbmUgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQudmFsdWUgPSBjaGlsZC52YWx1ZS5yZXBsYWNlKHJlLCAnJCYnICsgcmVwZWF0KGluZGVudCwgbGV2ZWwpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IFtdXG4gICAgICBpbmRleCA9IC0xXG5cbiAgICAgIG5vZGUuY2hpbGRyZW4gPSByZXN1bHRcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgICAgICBpZiAocGFkZGluZyhjaGlsZCwgaGVhZCkgfHwgKG5ld2xpbmUgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgIChwcmV2aW91cyAmJiBibGFuayhwcmV2aW91cykgJiYgYmxhbmsoY2hpbGQpID8gZG91YmxlIDogc2luZ2xlKSArXG4gICAgICAgICAgICAgIHJlcGVhdChpbmRlbnQsIGxldmVsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91cyA9IGNoaWxkXG4gICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3bGluZSB8fCBwYWRkaW5nKHByZXZpb3VzLCBoZWFkKSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBzaW5nbGUgKyByZXBlYXQoaW5kZW50LCBsZXZlbCAtIDEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmxhbmsobm9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICBub2RlLnR5cGUgPT09ICdlbGVtZW50JyAmJlxuICAgICAgYmxhbmtzLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgYmxhbmtzLmluZGV4T2Yobm9kZS50YWdOYW1lKSAhPT0gLTFcbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFkZGluZyhub2RlLCBoZWFkKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdyb290Jykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVhZCB8fCBub2RlLnRhZ05hbWUgPT09ICdzY3JpcHQnIHx8IGVtYmVkZGVkKG5vZGUpIHx8ICFwaHJhc2luZyhub2RlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBpZ25vcmUobm9kZXMpIHtcbiAgdmFyIGluZGV4ID0gbm9kZXMubGVuZ3RoXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoc2Vuc2l0aXZlLmluZGV4T2Yobm9kZXNbaW5kZXhdLnRhZ05hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogICBDb2xsYXBzZSB3aGl0ZS1zcGFjZS5cbiAqXG4gKiAgIE5vcm1hbGx5LCBjb2xsYXBzZXMgdG8gYSBzaW5nbGUgc3BhY2UuXG4gKiAgIElmIGBuZXdsaW5lczogdHJ1ZWAsIGNvbGxhcHNlcyB3aGl0ZS1zcGFjZSBjb250YWluaW5nIG5ld2xpbmVzIHRvIGAnXFxuJ2BcbiAqICAgaW5zdGVhZCBvZiBgJyAnYC5cbiAqIEBleGFtcGxlXG4gKiAgIDxoMT5IZWFkaW5nPC9oMT5cbiAqICAgPHA+PHN0cm9uZz5UaGlzPC9zdHJvbmc+IGFuZCA8ZW0+dGhhdDwvZW0+PC9wPlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgY29sbGFwc2VXaGl0ZVNwYWNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxudmFyIHdoaXRlc3BhY2VTZW5zaXRpdmUgPSByZXF1aXJlKCdodG1sLXdoaXRlc3BhY2Utc2Vuc2l0aXZlLXRhZy1uYW1lcycpXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgbW9kaWZ5ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1tb2RpZnktY2hpbGRyZW4nKVxudmFyIGVsZW1lbnQgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eScpXG52YXIgZW1iZWRkZWQgPSByZXF1aXJlKCdoYXN0LXV0aWwtZW1iZWRkZWQnKVxudmFyIGJvZHlPSyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1ib2R5LW9rLWxpbmsnKVxudmFyIGxpc3QgPSByZXF1aXJlKCcuL2xpc3QuanNvbicpXG5cbnZhciB0ZXh0ID0gY29udmVydCgndGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29sbGFwc2VcblxuZnVuY3Rpb24gY29sbGFwc2Uob3B0aW9ucykge1xuICByZXR1cm4gdHJhbnNmb3JtXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgcmV0dXJuIG1pbmlmeSh0cmVlLCBvcHRpb25zIHx8IHt9KVxuICB9XG59XG5cbmZ1bmN0aW9uIG1pbmlmeSh0cmVlLCBvcHRpb25zKSB7XG4gIHZhciB3aGl0ZXNwYWNlID0gb3B0aW9ucy5uZXdsaW5lcyA/IGNvbGxhcHNlVG9OZXdMaW5lcyA6IGNvbGxhcHNlV2hpdGVTcGFjZVxuICB2YXIgbW9kaWZpZXIgPSBtb2RpZnkodmlzaXRvcilcbiAgdmFyIGluc2lkZSA9IGZhbHNlXG4gIHZhciBzZWVuID0gZmFsc2VcblxuICB2aXNpdG9yKHRyZWUpXG5cbiAgcmV0dXJuIHRyZWVcblxuICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICB2YXIgaGVhZFxuICAgIHZhciBwcmV2XG4gICAgdmFyIG5leHRcbiAgICB2YXIgdmFsdWVcbiAgICB2YXIgc3RhcnRcbiAgICB2YXIgZW5kXG5cbiAgICBpZiAodGV4dChub2RlKSkge1xuICAgICAgcHJldiA9IHBhcmVudC5jaGlsZHJlbltpbmRleCAtIDFdXG4gICAgICBuZXh0ID0gcGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV1cblxuICAgICAgdmFsdWUgPSB3aGl0ZXNwYWNlKG5vZGUudmFsdWUpXG4gICAgICBlbmQgPSB2YWx1ZS5sZW5ndGhcbiAgICAgIHN0YXJ0ID0gMFxuXG4gICAgICBpZiAoZW1wdHkodmFsdWUuY2hhckF0KDApKSAmJiB2aWFibGUocHJldikpIHtcbiAgICAgICAgc3RhcnQrK1xuICAgICAgfVxuXG4gICAgICBpZiAoZW1wdHkodmFsdWUuY2hhckF0KGVuZCAtIDEpKSAmJiB2aWFibGUobmV4dCkpIHtcbiAgICAgICAgZW5kLS1cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShzdGFydCwgZW5kKVxuXG4gICAgICAvLyBSZW1vdmUgdGhlIG5vZGUgaWYgaXTigJlzIGNvbGxhcHNlZCBlbnRpcmVseS5cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgIH1cblxuICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKCFzZWVuICYmICFpbnNpZGUpIHtcbiAgICAgIGhlYWQgPSBlbGVtZW50KG5vZGUsICdoZWFkJylcbiAgICAgIGluc2lkZSA9IGhlYWRcbiAgICAgIHNlZW4gPSBoZWFkXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgIWVsZW1lbnQobm9kZSwgd2hpdGVzcGFjZVNlbnNpdGl2ZSkpIHtcbiAgICAgIG1vZGlmaWVyKG5vZGUpXG4gICAgfVxuXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGluc2lkZSA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gIW5vZGUgfHwgaW5zaWRlIHx8ICFjb2xsYXBzYWJsZShub2RlKVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBub2RlYCBpcyBjb2xsYXBzYWJsZS5cbmZ1bmN0aW9uIGNvbGxhcHNhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICB0ZXh0KG5vZGUpIHx8XG4gICAgZWxlbWVudChub2RlLCBsaXN0KSB8fFxuICAgIGVtYmVkZGVkKG5vZGUpIHx8XG4gICAgYm9keU9LKG5vZGUpIHx8XG4gICAgKGVsZW1lbnQobm9kZSwgJ21ldGEnKSAmJiBoYXMobm9kZSwgJ2l0ZW1Qcm9wJykpXG4gIClcbn1cblxuLy8gQ29sbGFwc2UgdG8gc3BhY2VzLCBvciBuZXdsaW5lcyBpZiB0aGV54oCZcmUgaW4gYSBydW4uXG5mdW5jdGlvbiBjb2xsYXBzZVRvTmV3TGluZXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFxzKy9nLCBmdW5jdGlvbigkMCkge1xuICAgIHJldHVybiAkMC5pbmRleE9mKCdcXG4nKSA9PT0gLTEgPyAnICcgOiAnXFxuJ1xuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZW1wdHkoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBjaGFyYWN0ZXIgPT09ICcgJyB8fCBjaGFyYWN0ZXIgPT09ICdcXG4nXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCdhcnJheS1pdGVyYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RpZmllckZhY3RvcnlcblxuLy8gVHVybiBgY2FsbGJhY2tgIGludG8gYSBjaGlsZC1tb2RpZmllciBhY2NlcHRpbmcgYSBwYXJlbnQuICBTZWVcbi8vIGBhcnJheS1pdGVyYXRlYCBmb3IgbW9yZSBpbmZvLlxuZnVuY3Rpb24gbW9kaWZpZXJGYWN0b3J5KGNhbGxiYWNrKSB7XG4gIHJldHVybiBpdGVyYXRvckZhY3Rvcnkod3JhcHBlckZhY3RvcnkoY2FsbGJhY2spKVxufVxuXG4vLyBUdXJuIGBjYWxsYmFja2AgaW50byBhIGBpdGVyYXRvcicgYWNjZXB0aW5nIGEgcGFyZW50LlxuZnVuY3Rpb24gaXRlcmF0b3JGYWN0b3J5KGNhbGxiYWNrKSB7XG4gIHJldHVybiBpdGVyYXRvclxuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yKHBhcmVudCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW5cblxuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjaGlsZHJlbiBpbiBgcGFyZW50YCBmb3IgYG1vZGlmaWVyYCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdGUoY2hpbGRyZW4sIGNhbGxiYWNrLCBwYXJlbnQpXG4gIH1cbn1cblxuLy8gUGFzcyB0aGUgY29udGV4dCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gYGNhbGxiYWNrYC5cbmZ1bmN0aW9uIHdyYXBwZXJGYWN0b3J5KGNhbGxiYWNrKSB7XG4gIHJldHVybiB3cmFwcGVyXG5cbiAgZnVuY3Rpb24gd3JhcHBlcih2YWx1ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sodmFsdWUsIGluZGV4LCB0aGlzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9