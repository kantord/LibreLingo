(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../node_modules/detab/index.js":
/*!****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/detab/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = detab

var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")

var tab = 0x09
var lineFeed = 0x0a
var carriageReturn = 0x0d

// Replace tabs with spaces, being smart about which column the tab is at and
// which size should be used.
function detab(value, size) {
  var string = typeof value === 'string'
  var length = string && value.length
  var start = 0
  var index = -1
  var column = -1
  var tabSize = size || 4
  var results = []
  var code
  var add

  if (!string) {
    throw new Error('detab expected string')
  }

  while (++index < length) {
    code = value.charCodeAt(index)

    if (code === tab) {
      add = tabSize - ((column + 1) % tabSize)
      column += add
      results.push(value.slice(start, index) + repeat(' ', add))
      start = index + 1
    } else if (code === lineFeed || code === carriageReturn) {
      column = -1
    } else {
      column++
    }
  }

  results.push(value.slice(start))

  return results.join('')
}


/***/ }),

/***/ "../../node_modules/mdast-util-definitions/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-definitions/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../../node_modules/unist-util-visit/index.js")

module.exports = getDefinitionFactory

var own = {}.hasOwnProperty

// Get a definition in `node` by `identifier`.
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

// Gather all definitions in `node`
function gather(node, options) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', options && options.commonmark ? commonmark : normal)

  return cache

  function commonmark(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
  }

  function normal(definition) {
    cache[normalise(definition.identifier)] = definition
  }
}

// Factory to get a node from the given definition-cache.
function getterFactory(cache) {
  return getter

  // Get a node from the bound definition-cache.
  function getter(identifier) {
    var id = identifier && normalise(identifier)
    return id && own.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/index.js":
/*!*****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "../../node_modules/mdast-util-to-hast/lib/index.js")


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/all.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/all.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

var one = __webpack_require__(/*! ./one */ "../../node_modules/mdast-util-to-hast/lib/one.js")

function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result
  var head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = result.value.replace(/^\s+/, '')
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = head.value.replace(/^\s+/, '')
        }
      }

      values = values.concat(result)
    }
  }

  return values
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/footer.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/footer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateFootnotes

var thematicBreak = __webpack_require__(/*! ./handlers/thematic-break */ "../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js")
var list = __webpack_require__(/*! ./handlers/list */ "../../node_modules/mdast-util-to-hast/lib/handlers/list.js")
var wrap = __webpack_require__(/*! ./wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")

function generateFootnotes(h) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var length = footnoteOrder.length
  var index = -1
  var listItems = []
  var def
  var backReference
  var content
  var tail

  while (++index < length) {
    def = footnoteById[footnoteOrder[index].toUpperCase()]

    if (!def) {
      continue
    }

    content = def.children.concat()
    tail = content[content.length - 1]
    backReference = {
      type: 'link',
      url: '#fnref-' + def.identifier,
      data: {hProperties: {className: ['footnote-backref']}},
      children: [{type: 'text', value: '↩'}]
    }

    if (!tail || tail.type !== 'paragraph') {
      tail = {type: 'paragraph', children: []}
      content.push(tail)
    }

    tail.children.push(backReference)

    listItems.push({
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: content,
      position: def.position
    })
  }

  if (listItems.length === 0) {
    return null
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {type: 'list', ordered: true, children: listItems})
      ],
      true
    )
  )
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js":
/*!***********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var wrap = __webpack_require__(/*! ../wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/break.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/break.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hardBreak

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')]
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/code.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/code.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = code

var detab = __webpack_require__(/*! detab */ "../../node_modules/detab/index.js")
var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function code(h, node) {
  var value = node.value ? detab(node.value + '\n') : ''
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])])
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/delete.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/delete.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/emphasis.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js":
/*!*******************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnoteReference

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function footnoteReference(h, node) {
  var footnoteOrder = h.footnoteOrder
  var identifier = String(node.identifier)

  if (footnoteOrder.indexOf(identifier) === -1) {
    footnoteOrder.push(identifier)
  }

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', node.label || identifier)
    ])
  ])
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/footnote.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/footnote.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnote

var footnoteReference = __webpack_require__(/*! ./footnote-reference */ "../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js")

function footnote(h, node) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var identifier = 1

  while (identifier in footnoteById) {
    identifier++
  }

  identifier = String(identifier)

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/heading.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/heading.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = heading

var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/html.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/html.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = html

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

// Return either a `raw` node in dangerous mode, otherwise nothing.
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/image-reference.js":
/*!****************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = imageReference

var normalize = __webpack_require__(/*! mdurl/encode */ "../../node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "../../node_modules/mdast-util-to-hast/lib/revert.js")

function imageReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/image.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/image.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "../../node_modules/mdurl/encode.js")

module.exports = image

function image(h, node) {
  var props = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/index.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  blockquote: __webpack_require__(/*! ./blockquote */ "../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"),
  break: __webpack_require__(/*! ./break */ "../../node_modules/mdast-util-to-hast/lib/handlers/break.js"),
  code: __webpack_require__(/*! ./code */ "../../node_modules/mdast-util-to-hast/lib/handlers/code.js"),
  delete: __webpack_require__(/*! ./delete */ "../../node_modules/mdast-util-to-hast/lib/handlers/delete.js"),
  emphasis: __webpack_require__(/*! ./emphasis */ "../../node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"),
  footnoteReference: __webpack_require__(/*! ./footnote-reference */ "../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"),
  footnote: __webpack_require__(/*! ./footnote */ "../../node_modules/mdast-util-to-hast/lib/handlers/footnote.js"),
  heading: __webpack_require__(/*! ./heading */ "../../node_modules/mdast-util-to-hast/lib/handlers/heading.js"),
  html: __webpack_require__(/*! ./html */ "../../node_modules/mdast-util-to-hast/lib/handlers/html.js"),
  imageReference: __webpack_require__(/*! ./image-reference */ "../../node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"),
  image: __webpack_require__(/*! ./image */ "../../node_modules/mdast-util-to-hast/lib/handlers/image.js"),
  inlineCode: __webpack_require__(/*! ./inline-code */ "../../node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"),
  linkReference: __webpack_require__(/*! ./link-reference */ "../../node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"),
  link: __webpack_require__(/*! ./link */ "../../node_modules/mdast-util-to-hast/lib/handlers/link.js"),
  listItem: __webpack_require__(/*! ./list-item */ "../../node_modules/mdast-util-to-hast/lib/handlers/list-item.js"),
  list: __webpack_require__(/*! ./list */ "../../node_modules/mdast-util-to-hast/lib/handlers/list.js"),
  paragraph: __webpack_require__(/*! ./paragraph */ "../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"),
  root: __webpack_require__(/*! ./root */ "../../node_modules/mdast-util-to-hast/lib/handlers/root.js"),
  strong: __webpack_require__(/*! ./strong */ "../../node_modules/mdast-util-to-hast/lib/handlers/strong.js"),
  table: __webpack_require__(/*! ./table */ "../../node_modules/mdast-util-to-hast/lib/handlers/table.js"),
  text: __webpack_require__(/*! ./text */ "../../node_modules/mdast-util-to-hast/lib/handlers/text.js"),
  thematicBreak: __webpack_require__(/*! ./thematic-break */ "../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"),
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/inline-code.js":
/*!************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inlineCode

var collapse = __webpack_require__(/*! collapse-white-space */ "../../node_modules/collapse-white-space/index.js")
var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function inlineCode(h, node) {
  return h(node, 'code', [u('text', collapse(node.value))])
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/link-reference.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = linkReference

var normalize = __webpack_require__(/*! mdurl/encode */ "../../node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "../../node_modules/mdast-util-to-hast/lib/revert.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function linkReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/link.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/link.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "../../node_modules/mdurl/encode.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

module.exports = link

function link(h, node) {
  var props = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/list-item.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/list-item.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = listItem

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function listItem(h, node, parent) {
  var children = node.children
  var head = children[0]
  var raw = all(h, node)
  var loose = parent ? listLoose(parent) : listItemLoose(node)
  var props = {}
  var result
  var container
  var index
  var length
  var child

  // Tight lists should not render `paragraph` nodes as `p` elements.
  if (loose) {
    result = raw
  } else {
    result = []
    length = raw.length
    index = -1

    while (++index < length) {
      child = raw[index]

      if (child.tagName === 'p') {
        result = result.concat(child.children)
      } else {
        result.push(child)
      }
    }
  }

  if (typeof node.checked === 'boolean') {
    if (loose && (!head || head.type !== 'paragraph')) {
      result.unshift(h(null, 'p', []))
    }

    container = loose ? result[0].children : result

    if (container.length !== 0) {
      container.unshift(u('text', ' '))
    }

    container.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item']
  }

  if (loose && result.length !== 0) {
    result = wrap(result, true)
  }

  return h(node, 'li', props, result)
}

function listLoose(node) {
  var loose = node.spread
  var children = node.children
  var length = children.length
  var index = -1

  while (!loose && ++index < length) {
    loose = listItemLoose(children[index])
  }

  return loose
}

function listItemLoose(node) {
  var spread = node.spread

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/list.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/list.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

var wrap = __webpack_require__(/*! ../wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function list(h, node) {
  var props = {}
  var name = node.ordered ? 'ol' : 'ul'
  var items
  var index = -1
  var length

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  items = all(h, node)
  length = items.length

  // Like GitHub, add a class for custom styling.
  while (++index < length) {
    if (
      items[index].properties.className &&
      items[index].properties.className.indexOf('task-list-item') !== -1
    ) {
      props.className = ['contains-task-list']
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.js":
/*!**********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/root.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/root.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function root(h, node) {
  return h.augment(node, u('root', wrap(all(h, node))))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/strong.js":
/*!*******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/strong.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strong

var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/table.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/table.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = table

var position = __webpack_require__(/*! unist-util-position */ "../../node_modules/unist-util-position/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "../../node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function table(h, node) {
  var rows = node.children
  var index = rows.length
  var align = node.align
  var alignLength = align.length
  var result = []
  var pos
  var row
  var out
  var name
  var cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [
        h(result[0].position, 'thead', wrap([result[0]], true)),
        h(
          {
            start: position.start(result[1]),
            end: position.end(result[result.length - 1])
          },
          'tbody',
          wrap(result.slice(1), true)
        )
      ],
      true
    )
  )
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/text.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/text.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var trimLines = __webpack_require__(/*! trim-lines */ "../../node_modules/trim-lines/index.js")

function text(h, node) {
  return h.augment(node, u('text', trimLines(node.value)))
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js":
/*!***************************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

function thematicBreak(h, node) {
  return h(node, 'hr')
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/index.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toHast

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var visit = __webpack_require__(/*! unist-util-visit */ "../../node_modules/unist-util-visit/index.js")
var position = __webpack_require__(/*! unist-util-position */ "../../node_modules/unist-util-position/index.js")
var generated = __webpack_require__(/*! unist-util-generated */ "../../node_modules/unist-util-generated/index.js")
var definitions = __webpack_require__(/*! mdast-util-definitions */ "../../node_modules/mdast-util-definitions/index.js")
var one = __webpack_require__(/*! ./one */ "../../node_modules/mdast-util-to-hast/lib/one.js")
var footer = __webpack_require__(/*! ./footer */ "../../node_modules/mdast-util-to-hast/lib/footer.js")
var handlers = __webpack_require__(/*! ./handlers */ "../../node_modules/mdast-util-to-hast/lib/handlers/index.js")

var own = {}.hasOwnProperty

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}
  var dangerous = settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree, settings)
  h.footnoteById = footnoteById
  h.footnoteOrder = []
  h.augment = augment
  h.handlers = Object.assign({}, handlers, settings.handlers)
  h.unknownHandler = settings.unknownHandler

  visit(tree, 'footnoteDefinition', onfootnotedefinition)

  return h

  // Finalise the created `right`, a hast node, from `left`, an mdast node.
  function augment(left, right) {
    var data
    var ctx

    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && 'data' in left) {
      data = left.data

      if (right.type === 'element' && data.hName) {
        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = Object.assign({}, right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  // Create an element for `node`.
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8d48e57/index.js#L26>.
    if (!own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  }
}

// Transform `tree`, which is an mdast node, to a hast node.
function toHast(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var foot = footer(h)

  if (foot) {
    node.children = node.children.concat(u('text', '\n'), foot)
  }

  return node
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/one.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/one.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

var own = {}.hasOwnProperty

// Transform an unknown node.
function unknown(h, node) {
  if (text(node)) {
    return h.augment(node, u('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

// Visit a node.
function one(h, node, parent) {
  var type = node && node.type
  var fn = own.call(h.handlers, type) ? h.handlers[type] : h.unknownHandler

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

// Check if the node should be renderered as a text node.
function text(node) {
  var data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/revert.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/revert.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = revert

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

// Return the content of a reference without definition as Markdown.
function revert(h, node) {
  var subtype = node.referenceType
  var suffix = ']'
  var contents
  var head
  var tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}


/***/ }),

/***/ "../../node_modules/mdast-util-to-hast/lib/wrap.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdast-util-to-hast/lib/wrap.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrap

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

// Wrap `nodes` with line feeds between each entry.
// Optionally adds line feeds at the start and end.
function wrap(nodes, loose) {
  var result = []
  var index = -1
  var length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length !== 0) {
    result.push(u('text', '\n'))
  }

  return result
}


/***/ }),

/***/ "../../node_modules/mdurl/encode.js":
/*!*****************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/mdurl/encode.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "../../node_modules/remark-rehype/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-rehype/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mdast2hast = __webpack_require__(/*! mdast-util-to-hast */ "../../node_modules/mdast-util-to-hast/index.js")

module.exports = remark2rehype

// Attacher.
// If a destination is given, runs the destination with the new hast tree
// (bridge mode).
// Without destination, returns the tree: further plugins run on that tree
// (mutate mode).
function remark2rehype(destination, options) {
  if (destination && !destination.process) {
    options = destination
    destination = null
  }

  return destination ? bridge(destination, options) : mutate(options)
}

// Bridge mode.
// Runs the destination with the new hast tree.
function bridge(destination, options) {
  return transformer

  function transformer(node, file, next) {
    destination.run(mdast2hast(node, options), file, done)

    function done(err) {
      next(err)
    }
  }
}

// Mutate-mode.
// Further transformers run on the hast tree.
function mutate(options) {
  return transformer

  function transformer(node) {
    return mdast2hast(node, options)
  }
}


/***/ }),

/***/ "../../node_modules/trim-lines/index.js":
/*!*********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/trim-lines/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimLines

var ws = /[ \t]*\n+[ \t]*/g
var newline = '\n'

function trimLines(value) {
  return String(value).replace(ws, newline)
}


/***/ }),

/***/ "../../node_modules/unist-builder/index.js":
/*!************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-builder/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = u

function u(type, props, value) {
  var node

  if (
    (value === null || value === undefined) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
    props = {}
  }

  node = Object.assign({type: String(type)}, props)

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== null && value !== undefined) {
    node.value = String(value)
  }

  return node
}


/***/ }),

/***/ "../../node_modules/unist-util-generated/index.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-generated/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generated

function generated(node) {
  var position = optional(optional(node).position)
  var start = optional(position.start)
  var end = optional(position.end)

  return !start.line || !start.column || !end.line || !end.column
}

function optional(value) {
  return value && typeof value === 'object' ? value : {}
}


/***/ }),

/***/ "../../node_modules/unist-util-position/index.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-position/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var start = factory('start')
var end = factory('end')

module.exports = position

position.start = start
position.end = end

function position(node) {
  return {start: start(node), end: end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvZGV0YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvZm9vdGVyLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZm9vdG5vdGUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGluay1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGluay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvcmV2ZXJ0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJpbS1saW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTs7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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjBkZjRjZDE5MjYwNDAyZmEyOGQ0LzIuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRldGFiXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxudmFyIHRhYiA9IDB4MDlcbnZhciBsaW5lRmVlZCA9IDB4MGFcbnZhciBjYXJyaWFnZVJldHVybiA9IDB4MGRcblxuLy8gUmVwbGFjZSB0YWJzIHdpdGggc3BhY2VzLCBiZWluZyBzbWFydCBhYm91dCB3aGljaCBjb2x1bW4gdGhlIHRhYiBpcyBhdCBhbmRcbi8vIHdoaWNoIHNpemUgc2hvdWxkIGJlIHVzZWQuXG5mdW5jdGlvbiBkZXRhYih2YWx1ZSwgc2l6ZSkge1xuICB2YXIgc3RyaW5nID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICB2YXIgbGVuZ3RoID0gc3RyaW5nICYmIHZhbHVlLmxlbmd0aFxuICB2YXIgc3RhcnQgPSAwXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjb2x1bW4gPSAtMVxuICB2YXIgdGFiU2l6ZSA9IHNpemUgfHwgNFxuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBjb2RlXG4gIHZhciBhZGRcblxuICBpZiAoIXN0cmluZykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGV0YWIgZXhwZWN0ZWQgc3RyaW5nJylcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY29kZSA9PT0gdGFiKSB7XG4gICAgICBhZGQgPSB0YWJTaXplIC0gKChjb2x1bW4gKyAxKSAlIHRhYlNpemUpXG4gICAgICBjb2x1bW4gKz0gYWRkXG4gICAgICByZXN1bHRzLnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGluZGV4KSArIHJlcGVhdCgnICcsIGFkZCkpXG4gICAgICBzdGFydCA9IGluZGV4ICsgMVxuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gbGluZUZlZWQgfHwgY29kZSA9PT0gY2FycmlhZ2VSZXR1cm4pIHtcbiAgICAgIGNvbHVtbiA9IC0xXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbisrXG4gICAgfVxuICB9XG5cbiAgcmVzdWx0cy5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0KSlcblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmluaXRpb25GYWN0b3J5XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBHZXQgYSBkZWZpbml0aW9uIGluIGBub2RlYCBieSBgaWRlbnRpZmllcmAuXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uRmFjdG9yeShub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBnZXR0ZXJGYWN0b3J5KGdhdGhlcihub2RlLCBvcHRpb25zKSlcbn1cblxuLy8gR2F0aGVyIGFsbCBkZWZpbml0aW9ucyBpbiBgbm9kZWBcbmZ1bmN0aW9uIGdhdGhlcihub2RlLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZSA9IHt9XG5cbiAgaWYgKCFub2RlIHx8ICFub2RlLnR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMgZXhwZWN0ZWQgbm9kZScpXG4gIH1cblxuICB2aXNpdChub2RlLCAnZGVmaW5pdGlvbicsIG9wdGlvbnMgJiYgb3B0aW9ucy5jb21tb25tYXJrID8gY29tbW9ubWFyayA6IG5vcm1hbClcblxuICByZXR1cm4gY2FjaGVcblxuICBmdW5jdGlvbiBjb21tb25tYXJrKGRlZmluaXRpb24pIHtcbiAgICB2YXIgaWQgPSBub3JtYWxpc2UoZGVmaW5pdGlvbi5pZGVudGlmaWVyKVxuICAgIGlmICghb3duLmNhbGwoY2FjaGUsIGlkKSkge1xuICAgICAgY2FjaGVbaWRdID0gZGVmaW5pdGlvblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbChkZWZpbml0aW9uKSB7XG4gICAgY2FjaGVbbm9ybWFsaXNlKGRlZmluaXRpb24uaWRlbnRpZmllcildID0gZGVmaW5pdGlvblxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IGEgbm9kZSBmcm9tIHRoZSBnaXZlbiBkZWZpbml0aW9uLWNhY2hlLlxuZnVuY3Rpb24gZ2V0dGVyRmFjdG9yeShjYWNoZSkge1xuICByZXR1cm4gZ2V0dGVyXG5cbiAgLy8gR2V0IGEgbm9kZSBmcm9tIHRoZSBib3VuZCBkZWZpbml0aW9uLWNhY2hlLlxuICBmdW5jdGlvbiBnZXR0ZXIoaWRlbnRpZmllcikge1xuICAgIHZhciBpZCA9IGlkZW50aWZpZXIgJiYgbm9ybWFsaXNlKGlkZW50aWZpZXIpXG4gICAgcmV0dXJuIGlkICYmIG93bi5jYWxsKGNhY2hlLCBpZCkgPyBjYWNoZVtpZF0gOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbFxuXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxuXG5mdW5jdGlvbiBhbGwoaCwgcGFyZW50KSB7XG4gIHZhciBub2RlcyA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0XG4gIHZhciBoZWFkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBvbmUoaCwgbm9kZXNbaW5kZXhdLCBwYXJlbnQpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAoaW5kZXggJiYgbm9kZXNbaW5kZXggLSAxXS50eXBlID09PSAnYnJlYWsnKSB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUucmVwbGFjZSgvXlxccysvLCAnJylcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQgPSByZXN1bHQuY2hpbGRyZW4gJiYgcmVzdWx0LmNoaWxkcmVuWzBdXG5cbiAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC52YWx1ZSkge1xuICAgICAgICAgIGhlYWQudmFsdWUgPSBoZWFkLnZhbHVlLnJlcGxhY2UoL15cXHMrLywgJycpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVGb290bm90ZXNcblxudmFyIHRoZW1hdGljQnJlYWsgPSByZXF1aXJlKCcuL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi9oYW5kbGVycy9saXN0JylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwJylcblxuZnVuY3Rpb24gZ2VuZXJhdGVGb290bm90ZXMoaCkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGxlbmd0aCA9IGZvb3Rub3RlT3JkZXIubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsaXN0SXRlbXMgPSBbXVxuICB2YXIgZGVmXG4gIHZhciBiYWNrUmVmZXJlbmNlXG4gIHZhciBjb250ZW50XG4gIHZhciB0YWlsXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkZWYgPSBmb290bm90ZUJ5SWRbZm9vdG5vdGVPcmRlcltpbmRleF0udG9VcHBlckNhc2UoKV1cblxuICAgIGlmICghZGVmKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkZWYuY2hpbGRyZW4uY29uY2F0KClcbiAgICB0YWlsID0gY29udGVudFtjb250ZW50Lmxlbmd0aCAtIDFdXG4gICAgYmFja1JlZmVyZW5jZSA9IHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHVybDogJyNmbnJlZi0nICsgZGVmLmlkZW50aWZpZXIsXG4gICAgICBkYXRhOiB7aFByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnZm9vdG5vdGUtYmFja3JlZiddfX0sXG4gICAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiAn4oapJ31dXG4gICAgfVxuXG4gICAgaWYgKCF0YWlsIHx8IHRhaWwudHlwZSAhPT0gJ3BhcmFncmFwaCcpIHtcbiAgICAgIHRhaWwgPSB7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBbXX1cbiAgICAgIGNvbnRlbnQucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRhaWwuY2hpbGRyZW4ucHVzaChiYWNrUmVmZXJlbmNlKVxuXG4gICAgbGlzdEl0ZW1zLnB1c2goe1xuICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgIGRhdGE6IHtoUHJvcGVydGllczoge2lkOiAnZm4tJyArIGRlZi5pZGVudGlmaWVyfX0sXG4gICAgICBjaGlsZHJlbjogY29udGVudCxcbiAgICAgIHBvc2l0aW9uOiBkZWYucG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgbnVsbCxcbiAgICAnZGl2JyxcbiAgICB7Y2xhc3NOYW1lOiBbJ2Zvb3Rub3RlcyddfSxcbiAgICB3cmFwKFxuICAgICAgW1xuICAgICAgICB0aGVtYXRpY0JyZWFrKGgpLFxuICAgICAgICBsaXN0KGgsIHt0eXBlOiAnbGlzdCcsIG9yZGVyZWQ6IHRydWUsIGNoaWxkcmVuOiBsaXN0SXRlbXN9KVxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBibG9ja3F1b3RlKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2Jsb2NrcXVvdGUnLCB3cmFwKGFsbChoLCBub2RlKSwgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkQnJlYWtcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGgsIG5vZGUpIHtcbiAgcmV0dXJuIFtoKG5vZGUsICdicicpLCB1KCd0ZXh0JywgJ1xcbicpXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgZGV0YWIgPSByZXF1aXJlKCdkZXRhYicpXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBjb2RlKGgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZSA/IGRldGFiKG5vZGUudmFsdWUgKyAnXFxuJykgOiAnJ1xuICB2YXIgbGFuZyA9IG5vZGUubGFuZyAmJiBub2RlLmxhbmcubWF0Y2goL15bXiBcXHRdKyg/PVsgXFx0XXwkKS8pXG4gIHZhciBwcm9wcyA9IHt9XG5cbiAgaWYgKGxhbmcpIHtcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ2xhbmd1YWdlLScgKyBsYW5nXVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZS5wb3NpdGlvbiwgJ3ByZScsIFtoKG5vZGUsICdjb2RlJywgcHJvcHMsIFt1KCd0ZXh0JywgdmFsdWUpXSldKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWtldGhyb3VnaFxuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gc3RyaWtldGhyb3VnaChoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdkZWwnLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gZW1waGFzaXMoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZW0nLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmb290bm90ZVJlZmVyZW5jZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBmb290bm90ZVJlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBmb290bm90ZU9yZGVyID0gaC5mb290bm90ZU9yZGVyXG4gIHZhciBpZGVudGlmaWVyID0gU3RyaW5nKG5vZGUuaWRlbnRpZmllcilcblxuICBpZiAoZm9vdG5vdGVPcmRlci5pbmRleE9mKGlkZW50aWZpZXIpID09PSAtMSkge1xuICAgIGZvb3Rub3RlT3JkZXIucHVzaChpZGVudGlmaWVyKVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZS5wb3NpdGlvbiwgJ3N1cCcsIHtpZDogJ2ZucmVmLScgKyBpZGVudGlmaWVyfSwgW1xuICAgIGgobm9kZSwgJ2EnLCB7aHJlZjogJyNmbi0nICsgaWRlbnRpZmllciwgY2xhc3NOYW1lOiBbJ2Zvb3Rub3RlLXJlZiddfSwgW1xuICAgICAgdSgndGV4dCcsIG5vZGUubGFiZWwgfHwgaWRlbnRpZmllcilcbiAgICBdKVxuICBdKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVcblxudmFyIGZvb3Rub3RlUmVmZXJlbmNlID0gcmVxdWlyZSgnLi9mb290bm90ZS1yZWZlcmVuY2UnKVxuXG5mdW5jdGlvbiBmb290bm90ZShoLCBub2RlKSB7XG4gIHZhciBmb290bm90ZUJ5SWQgPSBoLmZvb3Rub3RlQnlJZFxuICB2YXIgZm9vdG5vdGVPcmRlciA9IGguZm9vdG5vdGVPcmRlclxuICB2YXIgaWRlbnRpZmllciA9IDFcblxuICB3aGlsZSAoaWRlbnRpZmllciBpbiBmb290bm90ZUJ5SWQpIHtcbiAgICBpZGVudGlmaWVyKytcbiAgfVxuXG4gIGlkZW50aWZpZXIgPSBTdHJpbmcoaWRlbnRpZmllcilcblxuICAvLyBObyBuZWVkIHRvIGNoZWNrIGlmIGBpZGVudGlmaWVyYCBleGlzdHMgaW4gYGZvb3Rub3RlT3JkZXJgLCBpdOKAmXMgZ3VhcmFudGVlZFxuICAvLyB0byBub3QgZXhpc3QgYmVjYXVzZSB3ZSBqdXN0IGdlbmVyYXRlZCBpdC5cbiAgZm9vdG5vdGVPcmRlci5wdXNoKGlkZW50aWZpZXIpXG5cbiAgZm9vdG5vdGVCeUlkW2lkZW50aWZpZXJdID0ge1xuICAgIHR5cGU6ICdmb290bm90ZURlZmluaXRpb24nLFxuICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgY2hpbGRyZW46IFt7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVufV0sXG4gICAgcG9zaXRpb246IG5vZGUucG9zaXRpb25cbiAgfVxuXG4gIHJldHVybiBmb290bm90ZVJlZmVyZW5jZShoLCB7XG4gICAgdHlwZTogJ2Zvb3Rub3RlUmVmZXJlbmNlJyxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZWFkaW5nXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBoZWFkaW5nKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2gnICsgbm9kZS5kZXB0aCwgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG4vLyBSZXR1cm4gZWl0aGVyIGEgYHJhd2Agbm9kZSBpbiBkYW5nZXJvdXMgbW9kZSwgb3RoZXJ3aXNlIG5vdGhpbmcuXG5mdW5jdGlvbiBodG1sKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguZGFuZ2Vyb3VzID8gaC5hdWdtZW50KG5vZGUsIHUoJ3JhdycsIG5vZGUudmFsdWUpKSA6IG51bGxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlUmVmZXJlbmNlXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxudmFyIHJldmVydCA9IHJlcXVpcmUoJy4uL3JldmVydCcpXG5cbmZ1bmN0aW9uIGltYWdlUmVmZXJlbmNlKGgsIG5vZGUpIHtcbiAgdmFyIGRlZiA9IGguZGVmaW5pdGlvbihub2RlLmlkZW50aWZpZXIpXG4gIHZhciBwcm9wc1xuXG4gIGlmICghZGVmKSB7XG4gICAgcmV0dXJuIHJldmVydChoLCBub2RlKVxuICB9XG5cbiAgcHJvcHMgPSB7c3JjOiBub3JtYWxpemUoZGVmLnVybCB8fCAnJyksIGFsdDogbm9kZS5hbHR9XG5cbiAgaWYgKGRlZi50aXRsZSAhPT0gbnVsbCAmJiBkZWYudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gZGVmLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnaW1nJywgcHJvcHMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VcblxuZnVuY3Rpb24gaW1hZ2UoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7c3JjOiBub3JtYWxpemUobm9kZS51cmwpLCBhbHQ6IG5vZGUuYWx0fVxuXG4gIGlmIChub2RlLnRpdGxlICE9PSBudWxsICYmIG5vZGUudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gbm9kZS50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2ltZycsIHByb3BzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL2Jsb2NrcXVvdGUnKSxcbiAgYnJlYWs6IHJlcXVpcmUoJy4vYnJlYWsnKSxcbiAgY29kZTogcmVxdWlyZSgnLi9jb2RlJyksXG4gIGRlbGV0ZTogcmVxdWlyZSgnLi9kZWxldGUnKSxcbiAgZW1waGFzaXM6IHJlcXVpcmUoJy4vZW1waGFzaXMnKSxcbiAgZm9vdG5vdGVSZWZlcmVuY2U6IHJlcXVpcmUoJy4vZm9vdG5vdGUtcmVmZXJlbmNlJyksXG4gIGZvb3Rub3RlOiByZXF1aXJlKCcuL2Zvb3Rub3RlJyksXG4gIGhlYWRpbmc6IHJlcXVpcmUoJy4vaGVhZGluZycpLFxuICBodG1sOiByZXF1aXJlKCcuL2h0bWwnKSxcbiAgaW1hZ2VSZWZlcmVuY2U6IHJlcXVpcmUoJy4vaW1hZ2UtcmVmZXJlbmNlJyksXG4gIGltYWdlOiByZXF1aXJlKCcuL2ltYWdlJyksXG4gIGlubGluZUNvZGU6IHJlcXVpcmUoJy4vaW5saW5lLWNvZGUnKSxcbiAgbGlua1JlZmVyZW5jZTogcmVxdWlyZSgnLi9saW5rLXJlZmVyZW5jZScpLFxuICBsaW5rOiByZXF1aXJlKCcuL2xpbmsnKSxcbiAgbGlzdEl0ZW06IHJlcXVpcmUoJy4vbGlzdC1pdGVtJyksXG4gIGxpc3Q6IHJlcXVpcmUoJy4vbGlzdCcpLFxuICBwYXJhZ3JhcGg6IHJlcXVpcmUoJy4vcGFyYWdyYXBoJyksXG4gIHJvb3Q6IHJlcXVpcmUoJy4vcm9vdCcpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vc3Ryb25nJyksXG4gIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdGV4dCcpLFxuICB0aGVtYXRpY0JyZWFrOiByZXF1aXJlKCcuL3RoZW1hdGljLWJyZWFrJyksXG4gIHRvbWw6IGlnbm9yZSxcbiAgeWFtbDogaWdub3JlLFxuICBkZWZpbml0aW9uOiBpZ25vcmUsXG4gIGZvb3Rub3RlRGVmaW5pdGlvbjogaWdub3JlXG59XG5cbi8vIFJldHVybiBub3RoaW5nIGZvciBub2RlcyB0aGF0IGFyZSBpZ25vcmVkLlxuZnVuY3Rpb24gaWdub3JlKCkge1xuICByZXR1cm4gbnVsbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuXG52YXIgY29sbGFwc2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBpbmxpbmVDb2RlKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2NvZGUnLCBbdSgndGV4dCcsIGNvbGxhcHNlKG5vZGUudmFsdWUpKV0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rUmVmZXJlbmNlXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxudmFyIHJldmVydCA9IHJlcXVpcmUoJy4uL3JldmVydCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gbGlua1JlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBkZWYgPSBoLmRlZmluaXRpb24obm9kZS5pZGVudGlmaWVyKVxuICB2YXIgcHJvcHNcblxuICBpZiAoIWRlZikge1xuICAgIHJldHVybiByZXZlcnQoaCwgbm9kZSlcbiAgfVxuXG4gIHByb3BzID0ge2hyZWY6IG5vcm1hbGl6ZShkZWYudXJsIHx8ICcnKX1cblxuICBpZiAoZGVmLnRpdGxlICE9PSBudWxsICYmIGRlZi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBkZWYudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdhJywgcHJvcHMsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcblxuZnVuY3Rpb24gbGluayhoLCBub2RlKSB7XG4gIHZhciBwcm9wcyA9IHtocmVmOiBub3JtYWxpemUobm9kZS51cmwpfVxuXG4gIGlmIChub2RlLnRpdGxlICE9PSBudWxsICYmIG5vZGUudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gbm9kZS50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2EnLCBwcm9wcywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdEl0ZW1cblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gbGlzdEl0ZW0oaCwgbm9kZSwgcGFyZW50KSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGhlYWQgPSBjaGlsZHJlblswXVxuICB2YXIgcmF3ID0gYWxsKGgsIG5vZGUpXG4gIHZhciBsb29zZSA9IHBhcmVudCA/IGxpc3RMb29zZShwYXJlbnQpIDogbGlzdEl0ZW1Mb29zZShub2RlKVxuICB2YXIgcHJvcHMgPSB7fVxuICB2YXIgcmVzdWx0XG4gIHZhciBjb250YWluZXJcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIGNoaWxkXG5cbiAgLy8gVGlnaHQgbGlzdHMgc2hvdWxkIG5vdCByZW5kZXIgYHBhcmFncmFwaGAgbm9kZXMgYXMgYHBgIGVsZW1lbnRzLlxuICBpZiAobG9vc2UpIHtcbiAgICByZXN1bHQgPSByYXdcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBbXVxuICAgIGxlbmd0aCA9IHJhdy5sZW5ndGhcbiAgICBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hpbGQgPSByYXdbaW5kZXhdXG5cbiAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAncCcpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjaGlsZC5jaGlsZHJlbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygbm9kZS5jaGVja2VkID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAobG9vc2UgJiYgKCFoZWFkIHx8IGhlYWQudHlwZSAhPT0gJ3BhcmFncmFwaCcpKSB7XG4gICAgICByZXN1bHQudW5zaGlmdChoKG51bGwsICdwJywgW10pKVxuICAgIH1cblxuICAgIGNvbnRhaW5lciA9IGxvb3NlID8gcmVzdWx0WzBdLmNoaWxkcmVuIDogcmVzdWx0XG5cbiAgICBpZiAoY29udGFpbmVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29udGFpbmVyLnVuc2hpZnQodSgndGV4dCcsICcgJykpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnVuc2hpZnQoXG4gICAgICBoKG51bGwsICdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogbm9kZS5jaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICAvLyBBY2NvcmRpbmcgdG8gZ2l0aHViLW1hcmtkb3duLWNzcywgdGhpcyBjbGFzcyBoaWRlcyBidWxsZXQuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9naXRodWItbWFya2Rvd24tY3NzPi5cbiAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ3Rhc2stbGlzdC1pdGVtJ11cbiAgfVxuXG4gIGlmIChsb29zZSAmJiByZXN1bHQubGVuZ3RoICE9PSAwKSB7XG4gICAgcmVzdWx0ID0gd3JhcChyZXN1bHQsIHRydWUpXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnbGknLCBwcm9wcywgcmVzdWx0KVxufVxuXG5mdW5jdGlvbiBsaXN0TG9vc2Uobm9kZSkge1xuICB2YXIgbG9vc2UgPSBub2RlLnNwcmVhZFxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoIWxvb3NlICYmICsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBsb29zZSA9IGxpc3RJdGVtTG9vc2UoY2hpbGRyZW5baW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGxvb3NlXG59XG5cbmZ1bmN0aW9uIGxpc3RJdGVtTG9vc2Uobm9kZSkge1xuICB2YXIgc3ByZWFkID0gbm9kZS5zcHJlYWRcblxuICByZXR1cm4gc3ByZWFkID09PSB1bmRlZmluZWQgfHwgc3ByZWFkID09PSBudWxsXG4gICAgPyBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDFcbiAgICA6IHNwcmVhZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpc3QoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7fVxuICB2YXIgbmFtZSA9IG5vZGUub3JkZXJlZCA/ICdvbCcgOiAndWwnXG4gIHZhciBpdGVtc1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiBub2RlLnN0YXJ0ID09PSAnbnVtYmVyJyAmJiBub2RlLnN0YXJ0ICE9PSAxKSB7XG4gICAgcHJvcHMuc3RhcnQgPSBub2RlLnN0YXJ0XG4gIH1cblxuICBpdGVtcyA9IGFsbChoLCBub2RlKVxuICBsZW5ndGggPSBpdGVtcy5sZW5ndGhcblxuICAvLyBMaWtlIEdpdEh1YiwgYWRkIGEgY2xhc3MgZm9yIGN1c3RvbSBzdHlsaW5nLlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIGl0ZW1zW2luZGV4XS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSAmJlxuICAgICAgaXRlbXNbaW5kZXhdLnByb3BlcnRpZXMuY2xhc3NOYW1lLmluZGV4T2YoJ3Rhc2stbGlzdC1pdGVtJykgIT09IC0xXG4gICAgKSB7XG4gICAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ2NvbnRhaW5zLXRhc2stbGlzdCddXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsIG5hbWUsIHByb3BzLCB3cmFwKGl0ZW1zLCB0cnVlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFncmFwaFxuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gcGFyYWdyYXBoKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3AnLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByb290XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHJvb3QoaCwgbm9kZSkge1xuICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHUoJ3Jvb3QnLCB3cmFwKGFsbChoLCBub2RlKSkpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc3Ryb25nXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBzdHJvbmcoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnc3Ryb25nJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxudmFyIHBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1wb3NpdGlvbicpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHRhYmxlKGgsIG5vZGUpIHtcbiAgdmFyIHJvd3MgPSBub2RlLmNoaWxkcmVuXG4gIHZhciBpbmRleCA9IHJvd3MubGVuZ3RoXG4gIHZhciBhbGlnbiA9IG5vZGUuYWxpZ25cbiAgdmFyIGFsaWduTGVuZ3RoID0gYWxpZ24ubGVuZ3RoXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgcG9zXG4gIHZhciByb3dcbiAgdmFyIG91dFxuICB2YXIgbmFtZVxuICB2YXIgY2VsbFxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgcm93ID0gcm93c1tpbmRleF0uY2hpbGRyZW5cbiAgICBuYW1lID0gaW5kZXggPT09IDAgPyAndGgnIDogJ3RkJ1xuICAgIHBvcyA9IGFsaWduTGVuZ3RoXG4gICAgb3V0ID0gW11cblxuICAgIHdoaWxlIChwb3MtLSkge1xuICAgICAgY2VsbCA9IHJvd1twb3NdXG4gICAgICBvdXRbcG9zXSA9IGgoY2VsbCwgbmFtZSwge2FsaWduOiBhbGlnbltwb3NdfSwgY2VsbCA/IGFsbChoLCBjZWxsKSA6IFtdKVxuICAgIH1cblxuICAgIHJlc3VsdFtpbmRleF0gPSBoKHJvd3NbaW5kZXhdLCAndHInLCB3cmFwKG91dCwgdHJ1ZSkpXG4gIH1cblxuICByZXR1cm4gaChcbiAgICBub2RlLFxuICAgICd0YWJsZScsXG4gICAgd3JhcChcbiAgICAgIFtcbiAgICAgICAgaChyZXN1bHRbMF0ucG9zaXRpb24sICd0aGVhZCcsIHdyYXAoW3Jlc3VsdFswXV0sIHRydWUpKSxcbiAgICAgICAgaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogcG9zaXRpb24uc3RhcnQocmVzdWx0WzFdKSxcbiAgICAgICAgICAgIGVuZDogcG9zaXRpb24uZW5kKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICAndGJvZHknLFxuICAgICAgICAgIHdyYXAocmVzdWx0LnNsaWNlKDEpLCB0cnVlKVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHRyaW1MaW5lcyA9IHJlcXVpcmUoJ3RyaW0tbGluZXMnKVxuXG5mdW5jdGlvbiB0ZXh0KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCd0ZXh0JywgdHJpbUxpbmVzKG5vZGUudmFsdWUpKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdocicpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0b0hhc3RcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxudmFyIHBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1wb3NpdGlvbicpXG52YXIgZ2VuZXJhdGVkID0gcmVxdWlyZSgndW5pc3QtdXRpbC1nZW5lcmF0ZWQnKVxudmFyIGRlZmluaXRpb25zID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1kZWZpbml0aW9ucycpXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxudmFyIGZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJylcbnZhciBoYW5kbGVycyA9IHJlcXVpcmUoJy4vaGFuZGxlcnMnKVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gRmFjdG9yeSB0byB0cmFuc2Zvcm0uXG5mdW5jdGlvbiBmYWN0b3J5KHRyZWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgZGFuZ2Vyb3VzID0gc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIVE1MXG4gIHZhciBmb290bm90ZUJ5SWQgPSB7fVxuXG4gIGguZGFuZ2Vyb3VzID0gZGFuZ2Vyb3VzXG4gIGguZGVmaW5pdGlvbiA9IGRlZmluaXRpb25zKHRyZWUsIHNldHRpbmdzKVxuICBoLmZvb3Rub3RlQnlJZCA9IGZvb3Rub3RlQnlJZFxuICBoLmZvb3Rub3RlT3JkZXIgPSBbXVxuICBoLmF1Z21lbnQgPSBhdWdtZW50XG4gIGguaGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBoYW5kbGVycywgc2V0dGluZ3MuaGFuZGxlcnMpXG4gIGgudW5rbm93bkhhbmRsZXIgPSBzZXR0aW5ncy51bmtub3duSGFuZGxlclxuXG4gIHZpc2l0KHRyZWUsICdmb290bm90ZURlZmluaXRpb24nLCBvbmZvb3Rub3RlZGVmaW5pdGlvbilcblxuICByZXR1cm4gaFxuXG4gIC8vIEZpbmFsaXNlIHRoZSBjcmVhdGVkIGByaWdodGAsIGEgaGFzdCBub2RlLCBmcm9tIGBsZWZ0YCwgYW4gbWRhc3Qgbm9kZS5cbiAgZnVuY3Rpb24gYXVnbWVudChsZWZ0LCByaWdodCkge1xuICAgIHZhciBkYXRhXG4gICAgdmFyIGN0eFxuXG4gICAgLy8gSGFuZGxlIGBkYXRhLmhOYW1lYCwgYGRhdGEuaFByb3BlcnRpZXMsIGBkYXRhLmhDaGlsZHJlbmAuXG4gICAgaWYgKGxlZnQgJiYgJ2RhdGEnIGluIGxlZnQpIHtcbiAgICAgIGRhdGEgPSBsZWZ0LmRhdGFcblxuICAgICAgaWYgKHJpZ2h0LnR5cGUgPT09ICdlbGVtZW50JyAmJiBkYXRhLmhOYW1lKSB7XG4gICAgICAgIHJpZ2h0LnRhZ05hbWUgPSBkYXRhLmhOYW1lXG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodC50eXBlID09PSAnZWxlbWVudCcgJiYgZGF0YS5oUHJvcGVydGllcykge1xuICAgICAgICByaWdodC5wcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcmlnaHQucHJvcGVydGllcywgZGF0YS5oUHJvcGVydGllcylcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0LmNoaWxkcmVuICYmIGRhdGEuaENoaWxkcmVuKSB7XG4gICAgICAgIHJpZ2h0LmNoaWxkcmVuID0gZGF0YS5oQ2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjdHggPSBsZWZ0ICYmIGxlZnQucG9zaXRpb24gPyBsZWZ0IDoge3Bvc2l0aW9uOiBsZWZ0fVxuXG4gICAgaWYgKCFnZW5lcmF0ZWQoY3R4KSkge1xuICAgICAgcmlnaHQucG9zaXRpb24gPSB7XG4gICAgICAgIHN0YXJ0OiBwb3NpdGlvbi5zdGFydChjdHgpLFxuICAgICAgICBlbmQ6IHBvc2l0aW9uLmVuZChjdHgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpZ2h0XG4gIH1cblxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCBmb3IgYG5vZGVgLlxuICBmdW5jdGlvbiBoKG5vZGUsIHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmIChcbiAgICAgIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IGNoaWxkcmVuID09PSBudWxsKSAmJlxuICAgICAgdHlwZW9mIHByb3BzID09PSAnb2JqZWN0JyAmJlxuICAgICAgJ2xlbmd0aCcgaW4gcHJvcHNcbiAgICApIHtcbiAgICAgIGNoaWxkcmVuID0gcHJvcHNcbiAgICAgIHByb3BzID0ge31cbiAgICB9XG5cbiAgICByZXR1cm4gYXVnbWVudChub2RlLCB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgcHJvcGVydGllczogcHJvcHMgfHwge30sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4gfHwgW11cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb25mb290bm90ZWRlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IFN0cmluZyhkZWZpbml0aW9uLmlkZW50aWZpZXIpLnRvVXBwZXJDYXNlKClcblxuICAgIC8vIE1pbWljayBDTSBiZWhhdmlvciBvZiBsaW5rIGRlZmluaXRpb25zLlxuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLWRlZmluaXRpb25zL2Jsb2IvOGQ0OGU1Ny9pbmRleC5qcyNMMjY+LlxuICAgIGlmICghb3duLmNhbGwoZm9vdG5vdGVCeUlkLCBpZCkpIHtcbiAgICAgIGZvb3Rub3RlQnlJZFtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8vIFRyYW5zZm9ybSBgdHJlZWAsIHdoaWNoIGlzIGFuIG1kYXN0IG5vZGUsIHRvIGEgaGFzdCBub2RlLlxuZnVuY3Rpb24gdG9IYXN0KHRyZWUsIG9wdGlvbnMpIHtcbiAgdmFyIGggPSBmYWN0b3J5KHRyZWUsIG9wdGlvbnMpXG4gIHZhciBub2RlID0gb25lKGgsIHRyZWUpXG4gIHZhciBmb290ID0gZm9vdGVyKGgpXG5cbiAgaWYgKGZvb3QpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5jb25jYXQodSgndGV4dCcsICdcXG4nKSwgZm9vdClcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbmVcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBUcmFuc2Zvcm0gYW4gdW5rbm93biBub2RlLlxuZnVuY3Rpb24gdW5rbm93bihoLCBub2RlKSB7XG4gIGlmICh0ZXh0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCd0ZXh0Jywgbm9kZS52YWx1ZSkpXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnZGl2JywgYWxsKGgsIG5vZGUpKVxufVxuXG4vLyBWaXNpdCBhIG5vZGUuXG5mdW5jdGlvbiBvbmUoaCwgbm9kZSwgcGFyZW50KSB7XG4gIHZhciB0eXBlID0gbm9kZSAmJiBub2RlLnR5cGVcbiAgdmFyIGZuID0gb3duLmNhbGwoaC5oYW5kbGVycywgdHlwZSkgPyBoLmhhbmRsZXJzW3R5cGVdIDogaC51bmtub3duSGFuZGxlclxuXG4gIC8vIEZhaWwgb24gbm9uLW5vZGVzLlxuICBpZiAoIXR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIGdvdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cblxuICByZXR1cm4gKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IGZuIDogdW5rbm93bikoaCwgbm9kZSwgcGFyZW50KVxufVxuXG4vLyBDaGVjayBpZiB0aGUgbm9kZSBzaG91bGQgYmUgcmVuZGVyZXJlZCBhcyBhIHRleHQgbm9kZS5cbmZ1bmN0aW9uIHRleHQobm9kZSkge1xuICB2YXIgZGF0YSA9IG5vZGUuZGF0YSB8fCB7fVxuXG4gIGlmIChcbiAgICBvd24uY2FsbChkYXRhLCAnaE5hbWUnKSB8fFxuICAgIG93bi5jYWxsKGRhdGEsICdoUHJvcGVydGllcycpIHx8XG4gICAgb3duLmNhbGwoZGF0YSwgJ2hDaGlsZHJlbicpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuICd2YWx1ZScgaW4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJ0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgYWxsID0gcmVxdWlyZSgnLi9hbGwnKVxuXG4vLyBSZXR1cm4gdGhlIGNvbnRlbnQgb2YgYSByZWZlcmVuY2Ugd2l0aG91dCBkZWZpbml0aW9uIGFzIE1hcmtkb3duLlxuZnVuY3Rpb24gcmV2ZXJ0KGgsIG5vZGUpIHtcbiAgdmFyIHN1YnR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIHN1ZmZpeCA9ICddJ1xuICB2YXIgY29udGVudHNcbiAgdmFyIGhlYWRcbiAgdmFyIHRhaWxcblxuICBpZiAoc3VidHlwZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICBzdWZmaXggKz0gJ1tdJ1xuICB9IGVsc2UgaWYgKHN1YnR5cGUgPT09ICdmdWxsJykge1xuICAgIHN1ZmZpeCArPSAnWycgKyAobm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpICsgJ10nXG4gIH1cblxuICBpZiAobm9kZS50eXBlID09PSAnaW1hZ2VSZWZlcmVuY2UnKSB7XG4gICAgcmV0dXJuIHUoJ3RleHQnLCAnIVsnICsgbm9kZS5hbHQgKyBzdWZmaXgpXG4gIH1cblxuICBjb250ZW50cyA9IGFsbChoLCBub2RlKVxuICBoZWFkID0gY29udGVudHNbMF1cblxuICBpZiAoaGVhZCAmJiBoZWFkLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGhlYWQudmFsdWUgPSAnWycgKyBoZWFkLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMudW5zaGlmdCh1KCd0ZXh0JywgJ1snKSlcbiAgfVxuXG4gIHRhaWwgPSBjb250ZW50c1tjb250ZW50cy5sZW5ndGggLSAxXVxuXG4gIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdGFpbC52YWx1ZSArPSBzdWZmaXhcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50cy5wdXNoKHUoJ3RleHQnLCBzdWZmaXgpKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbi8vIFdyYXAgYG5vZGVzYCB3aXRoIGxpbmUgZmVlZHMgYmV0d2VlbiBlYWNoIGVudHJ5LlxuLy8gT3B0aW9uYWxseSBhZGRzIGxpbmUgZmVlZHMgYXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG5mdW5jdGlvbiB3cmFwKG5vZGVzLCBsb29zZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuXG4gIGlmIChsb29zZSkge1xuICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpbmRleCkge1xuICAgICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChub2Rlc1tpbmRleF0pXG4gIH1cblxuICBpZiAobG9vc2UgJiYgbm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZGFzdDJoYXN0ID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1oYXN0JylcblxubW9kdWxlLmV4cG9ydHMgPSByZW1hcmsycmVoeXBlXG5cbi8vIEF0dGFjaGVyLlxuLy8gSWYgYSBkZXN0aW5hdGlvbiBpcyBnaXZlbiwgcnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IGhhc3QgdHJlZVxuLy8gKGJyaWRnZSBtb2RlKS5cbi8vIFdpdGhvdXQgZGVzdGluYXRpb24sIHJldHVybnMgdGhlIHRyZWU6IGZ1cnRoZXIgcGx1Z2lucyBydW4gb24gdGhhdCB0cmVlXG4vLyAobXV0YXRlIG1vZGUpLlxuZnVuY3Rpb24gcmVtYXJrMnJlaHlwZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICBpZiAoZGVzdGluYXRpb24gJiYgIWRlc3RpbmF0aW9uLnByb2Nlc3MpIHtcbiAgICBvcHRpb25zID0gZGVzdGluYXRpb25cbiAgICBkZXN0aW5hdGlvbiA9IG51bGxcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbiA/IGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykgOiBtdXRhdGUob3B0aW9ucylcbn1cblxuLy8gQnJpZGdlIG1vZGUuXG4vLyBSdW5zIHRoZSBkZXN0aW5hdGlvbiB3aXRoIHRoZSBuZXcgaGFzdCB0cmVlLlxuZnVuY3Rpb24gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybWVyKG5vZGUsIGZpbGUsIG5leHQpIHtcbiAgICBkZXN0aW5hdGlvbi5ydW4obWRhc3QyaGFzdChub2RlLCBvcHRpb25zKSwgZmlsZSwgZG9uZSlcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9XG4gIH1cbn1cblxuLy8gTXV0YXRlLW1vZGUuXG4vLyBGdXJ0aGVyIHRyYW5zZm9ybWVycyBydW4gb24gdGhlIGhhc3QgdHJlZS5cbmZ1bmN0aW9uIG11dGF0ZShvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybWVyKG5vZGUpIHtcbiAgICByZXR1cm4gbWRhc3QyaGFzdChub2RlLCBvcHRpb25zKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0cmltTGluZXNcblxudmFyIHdzID0gL1sgXFx0XSpcXG4rWyBcXHRdKi9nXG52YXIgbmV3bGluZSA9ICdcXG4nXG5cbmZ1bmN0aW9uIHRyaW1MaW5lcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHdzLCBuZXdsaW5lKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdVxuXG5mdW5jdGlvbiB1KHR5cGUsIHByb3BzLCB2YWx1ZSkge1xuICB2YXIgbm9kZVxuXG4gIGlmIChcbiAgICAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAodHlwZW9mIHByb3BzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHByb3BzKSlcbiAgKSB7XG4gICAgdmFsdWUgPSBwcm9wc1xuICAgIHByb3BzID0ge31cbiAgfVxuXG4gIG5vZGUgPSBPYmplY3QuYXNzaWduKHt0eXBlOiBTdHJpbmcodHlwZSl9LCBwcm9wcylcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gdmFsdWVcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbm9kZS52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZWRcblxuZnVuY3Rpb24gZ2VuZXJhdGVkKG5vZGUpIHtcbiAgdmFyIHBvc2l0aW9uID0gb3B0aW9uYWwob3B0aW9uYWwobm9kZSkucG9zaXRpb24pXG4gIHZhciBzdGFydCA9IG9wdGlvbmFsKHBvc2l0aW9uLnN0YXJ0KVxuICB2YXIgZW5kID0gb3B0aW9uYWwocG9zaXRpb24uZW5kKVxuXG4gIHJldHVybiAhc3RhcnQubGluZSB8fCAhc3RhcnQuY29sdW1uIHx8ICFlbmQubGluZSB8fCAhZW5kLmNvbHVtblxufVxuXG5mdW5jdGlvbiBvcHRpb25hbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge31cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RhcnQgPSBmYWN0b3J5KCdzdGFydCcpXG52YXIgZW5kID0gZmFjdG9yeSgnZW5kJylcblxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblxuXG5wb3NpdGlvbi5zdGFydCA9IHN0YXJ0XG5wb3NpdGlvbi5lbmQgPSBlbmRcblxuZnVuY3Rpb24gcG9zaXRpb24obm9kZSkge1xuICByZXR1cm4ge3N0YXJ0OiBzdGFydChub2RlKSwgZW5kOiBlbmQobm9kZSl9XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICBwb2ludC5kaXNwbGF5TmFtZSA9IHR5cGVcblxuICByZXR1cm4gcG9pbnRcblxuICBmdW5jdGlvbiBwb2ludChub2RlKSB7XG4gICAgdmFyIHBvaW50ID0gKG5vZGUgJiYgbm9kZS5wb3NpdGlvbiAmJiBub2RlLnBvc2l0aW9uW3R5cGVdKSB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IHBvaW50LmxpbmUgfHwgbnVsbCxcbiAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uIHx8IG51bGwsXG4gICAgICBvZmZzZXQ6IGlzTmFOKHBvaW50Lm9mZnNldCkgPyBudWxsIDogcG9pbnQub2Zmc2V0XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9