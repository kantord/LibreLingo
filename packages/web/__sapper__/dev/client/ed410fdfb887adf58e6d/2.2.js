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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL2RldGFiL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1kZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvYWxsLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2JyZWFrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9jb2RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9mb290bm90ZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9odG1sLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2ltYWdlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saW5rLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvc3Ryb25nLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL3JldmVydC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1yZWh5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy90cmltLWxpbmVzL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtZ2VuZXJhdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGdFQUFlOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Q1k7O0FBRVosWUFBWSxtQkFBTyxDQUFDLHNFQUFrQjs7QUFFdEM7O0FBRUEsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFPOzs7Ozs7Ozs7Ozs7O0FDRHBCOztBQUVaOztBQUVBLFVBQVUsbUJBQU8sQ0FBQywrREFBTzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLHVHQUEyQjtBQUN2RCxXQUFXLG1CQUFPLENBQUMsbUZBQWlCO0FBQ3BDLFdBQVcsbUJBQU8sQ0FBQyxpRUFBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYyxpQ0FBaUM7QUFDNUQsa0JBQWtCLHlCQUF5QjtBQUMzQzs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGNBQWMsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBaUQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFWTs7QUFFWjs7QUFFQSxXQUFXLG1CQUFPLENBQUMsa0VBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7O0FBRS9CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxnREFBTztBQUMzQixRQUFRLG1CQUFPLENBQUMsZ0VBQWU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJZOztBQUVaOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRVo7O0FBRUEsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLDBCQUEwQjtBQUM1RCxrQkFBa0IsdURBQXVEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJZOztBQUVaOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLHNHQUFzQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQTJDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNqQ1k7O0FBRVo7O0FBRUEsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVo7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsd0RBQWM7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLHNFQUFXOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7O0FBRVosZ0JBQWdCLG1CQUFPLENBQUMsd0RBQWM7O0FBRXRDOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RZOztBQUVaO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHNGQUFjO0FBQ3BDLFNBQVMsbUJBQU8sQ0FBQyw0RUFBUztBQUMxQixRQUFRLG1CQUFPLENBQUMsMEVBQVE7QUFDeEIsVUFBVSxtQkFBTyxDQUFDLDhFQUFVO0FBQzVCLFlBQVksbUJBQU8sQ0FBQyxrRkFBWTtBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxzR0FBc0I7QUFDbkQsWUFBWSxtQkFBTyxDQUFDLGtGQUFZO0FBQ2hDLFdBQVcsbUJBQU8sQ0FBQyxnRkFBVztBQUM5QixRQUFRLG1CQUFPLENBQUMsMEVBQVE7QUFDeEIsa0JBQWtCLG1CQUFPLENBQUMsZ0dBQW1CO0FBQzdDLFNBQVMsbUJBQU8sQ0FBQyw0RUFBUztBQUMxQixjQUFjLG1CQUFPLENBQUMsd0ZBQWU7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsOEZBQWtCO0FBQzNDLFFBQVEsbUJBQU8sQ0FBQywwRUFBUTtBQUN4QixZQUFZLG1CQUFPLENBQUMsb0ZBQWE7QUFDakMsUUFBUSxtQkFBTyxDQUFDLDBFQUFRO0FBQ3hCLGFBQWEsbUJBQU8sQ0FBQyxvRkFBYTtBQUNsQyxRQUFRLG1CQUFPLENBQUMsMEVBQVE7QUFDeEIsVUFBVSxtQkFBTyxDQUFDLDhFQUFVO0FBQzVCLFNBQVMsbUJBQU8sQ0FBQyw0RUFBUztBQUMxQixRQUFRLG1CQUFPLENBQUMsMEVBQVE7QUFDeEIsaUJBQWlCLG1CQUFPLENBQUMsOEZBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ1k7O0FBRVo7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDhFQUFzQjtBQUM3QyxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7O0FBRS9CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFjO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxzRUFBVztBQUNoQyxVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCWTs7QUFFWixnQkFBZ0IsbUJBQU8sQ0FBQyx3REFBYztBQUN0QyxVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZZOztBQUVaOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyxnRUFBZTtBQUMvQixXQUFXLG1CQUFPLENBQUMsa0VBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pGWTs7QUFFWjs7QUFFQSxXQUFXLG1CQUFPLENBQUMsa0VBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDWTs7QUFFWjs7QUFFQSxVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyxnRUFBZTtBQUMvQixXQUFXLG1CQUFPLENBQUMsa0VBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWWTs7QUFFWjs7QUFFQSxVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDNUMsV0FBVyxtQkFBTyxDQUFDLGtFQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsMERBQVk7O0FBRXBDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05ZOztBQUVaOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyxnRUFBZTtBQUMvQixZQUFZLG1CQUFPLENBQUMsc0VBQWtCO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsOEVBQXNCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLGtGQUF3QjtBQUNsRCxVQUFVLG1CQUFPLENBQUMsK0RBQU87QUFDekIsYUFBYSxtQkFBTyxDQUFDLHFFQUFVO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQywrRUFBWTs7QUFFbkMsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1R1k7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlO0FBQy9CLFVBQVUsbUJBQU8sQ0FBQywrREFBTzs7QUFFekIsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVDWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsVUFBVSxtQkFBTyxDQUFDLCtEQUFPOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NZOztBQUVaOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyxnRUFBZTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCYTs7O0FBR2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7O0FBRTVCOztBQUVBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGFBQWEsb0JBQW9CO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0NBQWdDLE9BQU87QUFDdkM7O0FBRUE7QUFDQSxxQkFBcUIsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOzs7QUFHQTs7Ozs7Ozs7Ozs7OztBQ2pHWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQywwRUFBb0I7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbUJBQW1COztBQUUzQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RZOztBQUVaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZWQ0MTBmZGZiODg3YWRmNThlNmQvMi4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGV0YWJcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG52YXIgdGFiID0gMHgwOVxudmFyIGxpbmVGZWVkID0gMHgwYVxudmFyIGNhcnJpYWdlUmV0dXJuID0gMHgwZFxuXG4vLyBSZXBsYWNlIHRhYnMgd2l0aCBzcGFjZXMsIGJlaW5nIHNtYXJ0IGFib3V0IHdoaWNoIGNvbHVtbiB0aGUgdGFiIGlzIGF0IGFuZFxuLy8gd2hpY2ggc2l6ZSBzaG91bGQgYmUgdXNlZC5cbmZ1bmN0aW9uIGRldGFiKHZhbHVlLCBzaXplKSB7XG4gIHZhciBzdHJpbmcgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIHZhciBsZW5ndGggPSBzdHJpbmcgJiYgdmFsdWUubGVuZ3RoXG4gIHZhciBzdGFydCA9IDBcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNvbHVtbiA9IC0xXG4gIHZhciB0YWJTaXplID0gc2l6ZSB8fCA0XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGNvZGVcbiAgdmFyIGFkZFxuXG4gIGlmICghc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkZXRhYiBleHBlY3RlZCBzdHJpbmcnKVxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjb2RlID09PSB0YWIpIHtcbiAgICAgIGFkZCA9IHRhYlNpemUgLSAoKGNvbHVtbiArIDEpICUgdGFiU2l6ZSlcbiAgICAgIGNvbHVtbiArPSBhZGRcbiAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5zbGljZShzdGFydCwgaW5kZXgpICsgcmVwZWF0KCcgJywgYWRkKSlcbiAgICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSBsaW5lRmVlZCB8fCBjb2RlID09PSBjYXJyaWFnZVJldHVybikge1xuICAgICAgY29sdW1uID0gLTFcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uKytcbiAgICB9XG4gIH1cblxuICByZXN1bHRzLnB1c2godmFsdWUuc2xpY2Uoc3RhcnQpKVxuXG4gIHJldHVybiByZXN1bHRzLmpvaW4oJycpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGVmaW5pdGlvbkZhY3RvcnlcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIEdldCBhIGRlZmluaXRpb24gaW4gYG5vZGVgIGJ5IGBpZGVudGlmaWVyYC5cbmZ1bmN0aW9uIGdldERlZmluaXRpb25GYWN0b3J5KG5vZGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGdldHRlckZhY3RvcnkoZ2F0aGVyKG5vZGUsIG9wdGlvbnMpKVxufVxuXG4vLyBHYXRoZXIgYWxsIGRlZmluaXRpb25zIGluIGBub2RlYFxuZnVuY3Rpb24gZ2F0aGVyKG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlID0ge31cblxuICBpZiAoIW5vZGUgfHwgIW5vZGUudHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWRhc3QtdXRpbC1kZWZpbml0aW9ucyBleHBlY3RlZCBub2RlJylcbiAgfVxuXG4gIHZpc2l0KG5vZGUsICdkZWZpbml0aW9uJywgb3B0aW9ucyAmJiBvcHRpb25zLmNvbW1vbm1hcmsgPyBjb21tb25tYXJrIDogbm9ybWFsKVxuXG4gIHJldHVybiBjYWNoZVxuXG4gIGZ1bmN0aW9uIGNvbW1vbm1hcmsoZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IG5vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXG4gICAgaWYgKCFvd24uY2FsbChjYWNoZSwgaWQpKSB7XG4gICAgICBjYWNoZVtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsKGRlZmluaXRpb24pIHtcbiAgICBjYWNoZVtub3JtYWxpc2UoZGVmaW5pdGlvbi5pZGVudGlmaWVyKV0gPSBkZWZpbml0aW9uXG4gIH1cbn1cblxuLy8gRmFjdG9yeSB0byBnZXQgYSBub2RlIGZyb20gdGhlIGdpdmVuIGRlZmluaXRpb24tY2FjaGUuXG5mdW5jdGlvbiBnZXR0ZXJGYWN0b3J5KGNhY2hlKSB7XG4gIHJldHVybiBnZXR0ZXJcblxuICAvLyBHZXQgYSBub2RlIGZyb20gdGhlIGJvdW5kIGRlZmluaXRpb24tY2FjaGUuXG4gIGZ1bmN0aW9uIGdldHRlcihpZGVudGlmaWVyKSB7XG4gICAgdmFyIGlkID0gaWRlbnRpZmllciAmJiBub3JtYWxpc2UoaWRlbnRpZmllcilcbiAgICByZXR1cm4gaWQgJiYgb3duLmNhbGwoY2FjaGUsIGlkKSA/IGNhY2hlW2lkXSA6IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UoaWRlbnRpZmllcikge1xuICByZXR1cm4gaWRlbnRpZmllci50b1VwcGVyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWInKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWxsXG5cbnZhciBvbmUgPSByZXF1aXJlKCcuL29uZScpXG5cbmZ1bmN0aW9uIGFsbChoLCBwYXJlbnQpIHtcbiAgdmFyIG5vZGVzID0gcGFyZW50LmNoaWxkcmVuIHx8IFtdXG4gIHZhciBsZW5ndGggPSBub2Rlcy5sZW5ndGhcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHRcbiAgdmFyIGhlYWRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IG9uZShoLCBub2Rlc1tpbmRleF0sIHBhcmVudClcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGlmIChpbmRleCAmJiBub2Rlc1tpbmRleCAtIDFdLnR5cGUgPT09ICdicmVhaycpIHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5yZXBsYWNlKC9eXFxzKy8sICcnKVxuICAgICAgICB9XG5cbiAgICAgICAgaGVhZCA9IHJlc3VsdC5jaGlsZHJlbiAmJiByZXN1bHQuY2hpbGRyZW5bMF1cblxuICAgICAgICBpZiAoaGVhZCAmJiBoZWFkLnZhbHVlKSB7XG4gICAgICAgICAgaGVhZC52YWx1ZSA9IGhlYWQudmFsdWUucmVwbGFjZSgvXlxccysvLCAnJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUZvb3Rub3Rlc1xuXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vaGFuZGxlcnMvdGhlbWF0aWMtYnJlYWsnKVxudmFyIGxpc3QgPSByZXF1aXJlKCcuL2hhbmRsZXJzL2xpc3QnKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAnKVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb3Rub3RlcyhoKSB7XG4gIHZhciBmb290bm90ZUJ5SWQgPSBoLmZvb3Rub3RlQnlJZFxuICB2YXIgZm9vdG5vdGVPcmRlciA9IGguZm9vdG5vdGVPcmRlclxuICB2YXIgbGVuZ3RoID0gZm9vdG5vdGVPcmRlci5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxpc3RJdGVtcyA9IFtdXG4gIHZhciBkZWZcbiAgdmFyIGJhY2tSZWZlcmVuY2VcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHRhaWxcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRlZiA9IGZvb3Rub3RlQnlJZFtmb290bm90ZU9yZGVyW2luZGV4XS50b1VwcGVyQ2FzZSgpXVxuXG4gICAgaWYgKCFkZWYpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29udGVudCA9IGRlZi5jaGlsZHJlbi5jb25jYXQoKVxuICAgIHRhaWwgPSBjb250ZW50W2NvbnRlbnQubGVuZ3RoIC0gMV1cbiAgICBiYWNrUmVmZXJlbmNlID0ge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgdXJsOiAnI2ZucmVmLScgKyBkZWYuaWRlbnRpZmllcixcbiAgICAgIGRhdGE6IHtoUHJvcGVydGllczoge2NsYXNzTmFtZTogWydmb290bm90ZS1iYWNrcmVmJ119fSxcbiAgICAgIGNoaWxkcmVuOiBbe3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfihqknfV1cbiAgICB9XG5cbiAgICBpZiAoIXRhaWwgfHwgdGFpbC50eXBlICE9PSAncGFyYWdyYXBoJykge1xuICAgICAgdGFpbCA9IHt0eXBlOiAncGFyYWdyYXBoJywgY2hpbGRyZW46IFtdfVxuICAgICAgY29udGVudC5wdXNoKHRhaWwpXG4gICAgfVxuXG4gICAgdGFpbC5jaGlsZHJlbi5wdXNoKGJhY2tSZWZlcmVuY2UpXG5cbiAgICBsaXN0SXRlbXMucHVzaCh7XG4gICAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgICAgZGF0YToge2hQcm9wZXJ0aWVzOiB7aWQ6ICdmbi0nICsgZGVmLmlkZW50aWZpZXJ9fSxcbiAgICAgIGNoaWxkcmVuOiBjb250ZW50LFxuICAgICAgcG9zaXRpb246IGRlZi5wb3NpdGlvblxuICAgIH0pXG4gIH1cblxuICBpZiAobGlzdEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gaChcbiAgICBudWxsLFxuICAgICdkaXYnLFxuICAgIHtjbGFzc05hbWU6IFsnZm9vdG5vdGVzJ119LFxuICAgIHdyYXAoXG4gICAgICBbXG4gICAgICAgIHRoZW1hdGljQnJlYWsoaCksXG4gICAgICAgIGxpc3QoaCwge3R5cGU6ICdsaXN0Jywgb3JkZXJlZDogdHJ1ZSwgY2hpbGRyZW46IGxpc3RJdGVtc30pXG4gICAgICBdLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGJsb2NrcXVvdGUoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnYmxvY2txdW90ZScsIHdyYXAoYWxsKGgsIG5vZGUpLCB0cnVlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVha1xuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBoYXJkQnJlYWsoaCwgbm9kZSkge1xuICByZXR1cm4gW2gobm9kZSwgJ2JyJyksIHUoJ3RleHQnLCAnXFxuJyldXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb2RlXG5cbnZhciBkZXRhYiA9IHJlcXVpcmUoJ2RldGFiJylcbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGNvZGUoaCwgbm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlID8gZGV0YWIobm9kZS52YWx1ZSArICdcXG4nKSA6ICcnXG4gIHZhciBsYW5nID0gbm9kZS5sYW5nICYmIG5vZGUubGFuZy5tYXRjaCgvXlteIFxcdF0rKD89WyBcXHRdfCQpLylcbiAgdmFyIHByb3BzID0ge31cblxuICBpZiAobGFuZykge1xuICAgIHByb3BzLmNsYXNzTmFtZSA9IFsnbGFuZ3VhZ2UtJyArIGxhbmddXG4gIH1cblxuICByZXR1cm4gaChub2RlLnBvc2l0aW9uLCAncHJlJywgW2gobm9kZSwgJ2NvZGUnLCBwcm9wcywgW3UoJ3RleHQnLCB2YWx1ZSldKV0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2RlbCcsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBlbXBoYXNpcyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdlbScsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlUmVmZXJlbmNlXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGZvb3Rub3RlUmVmZXJlbmNlKGgsIG5vZGUpIHtcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGlkZW50aWZpZXIgPSBTdHJpbmcobm9kZS5pZGVudGlmaWVyKVxuXG4gIGlmIChmb290bm90ZU9yZGVyLmluZGV4T2YoaWRlbnRpZmllcikgPT09IC0xKSB7XG4gICAgZm9vdG5vdGVPcmRlci5wdXNoKGlkZW50aWZpZXIpXG4gIH1cblxuICByZXR1cm4gaChub2RlLnBvc2l0aW9uLCAnc3VwJywge2lkOiAnZm5yZWYtJyArIGlkZW50aWZpZXJ9LCBbXG4gICAgaChub2RlLCAnYScsIHtocmVmOiAnI2ZuLScgKyBpZGVudGlmaWVyLCBjbGFzc05hbWU6IFsnZm9vdG5vdGUtcmVmJ119LCBbXG4gICAgICB1KCd0ZXh0Jywgbm9kZS5sYWJlbCB8fCBpZGVudGlmaWVyKVxuICAgIF0pXG4gIF0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmb290bm90ZVxuXG52YXIgZm9vdG5vdGVSZWZlcmVuY2UgPSByZXF1aXJlKCcuL2Zvb3Rub3RlLXJlZmVyZW5jZScpXG5cbmZ1bmN0aW9uIGZvb3Rub3RlKGgsIG5vZGUpIHtcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IGguZm9vdG5vdGVCeUlkXG4gIHZhciBmb290bm90ZU9yZGVyID0gaC5mb290bm90ZU9yZGVyXG4gIHZhciBpZGVudGlmaWVyID0gMVxuXG4gIHdoaWxlIChpZGVudGlmaWVyIGluIGZvb3Rub3RlQnlJZCkge1xuICAgIGlkZW50aWZpZXIrK1xuICB9XG5cbiAgaWRlbnRpZmllciA9IFN0cmluZyhpZGVudGlmaWVyKVxuXG4gIC8vIE5vIG5lZWQgdG8gY2hlY2sgaWYgYGlkZW50aWZpZXJgIGV4aXN0cyBpbiBgZm9vdG5vdGVPcmRlcmAsIGl04oCZcyBndWFyYW50ZWVkXG4gIC8vIHRvIG5vdCBleGlzdCBiZWNhdXNlIHdlIGp1c3QgZ2VuZXJhdGVkIGl0LlxuICBmb290bm90ZU9yZGVyLnB1c2goaWRlbnRpZmllcilcblxuICBmb290bm90ZUJ5SWRbaWRlbnRpZmllcl0gPSB7XG4gICAgdHlwZTogJ2Zvb3Rub3RlRGVmaW5pdGlvbicsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAncGFyYWdyYXBoJywgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW59XSxcbiAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICB9XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVmZXJlbmNlKGgsIHtcbiAgICB0eXBlOiAnZm9vdG5vdGVSZWZlcmVuY2UnLFxuICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgcG9zaXRpb246IG5vZGUucG9zaXRpb25cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYWRpbmdcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGhlYWRpbmcoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnaCcgKyBub2RlLmRlcHRoLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbi8vIFJldHVybiBlaXRoZXIgYSBgcmF3YCBub2RlIGluIGRhbmdlcm91cyBtb2RlLCBvdGhlcndpc2Ugbm90aGluZy5cbmZ1bmN0aW9uIGh0bWwoaCwgbm9kZSkge1xuICByZXR1cm4gaC5kYW5nZXJvdXMgPyBoLmF1Z21lbnQobm9kZSwgdSgncmF3Jywgbm9kZS52YWx1ZSkpIDogbnVsbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VSZWZlcmVuY2VcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgcmV2ZXJ0ID0gcmVxdWlyZSgnLi4vcmV2ZXJ0JylcblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZGVmID0gaC5kZWZpbml0aW9uKG5vZGUuaWRlbnRpZmllcilcbiAgdmFyIHByb3BzXG5cbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm4gcmV2ZXJ0KGgsIG5vZGUpXG4gIH1cblxuICBwcm9wcyA9IHtzcmM6IG5vcm1hbGl6ZShkZWYudXJsIHx8ICcnKSwgYWx0OiBub2RlLmFsdH1cblxuICBpZiAoZGVmLnRpdGxlICE9PSBudWxsICYmIGRlZi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBkZWYudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdpbWcnLCBwcm9wcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVxuXG5mdW5jdGlvbiBpbWFnZShoLCBub2RlKSB7XG4gIHZhciBwcm9wcyA9IHtzcmM6IG5vcm1hbGl6ZShub2RlLnVybCksIGFsdDogbm9kZS5hbHR9XG5cbiAgaWYgKG5vZGUudGl0bGUgIT09IG51bGwgJiYgbm9kZS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBub2RlLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnaW1nJywgcHJvcHMpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vYmxvY2txdW90ZScpLFxuICBicmVhazogcmVxdWlyZSgnLi9icmVhaycpLFxuICBjb2RlOiByZXF1aXJlKCcuL2NvZGUnKSxcbiAgZGVsZXRlOiByZXF1aXJlKCcuL2RlbGV0ZScpLFxuICBlbXBoYXNpczogcmVxdWlyZSgnLi9lbXBoYXNpcycpLFxuICBmb290bm90ZVJlZmVyZW5jZTogcmVxdWlyZSgnLi9mb290bm90ZS1yZWZlcmVuY2UnKSxcbiAgZm9vdG5vdGU6IHJlcXVpcmUoJy4vZm9vdG5vdGUnKSxcbiAgaGVhZGluZzogcmVxdWlyZSgnLi9oZWFkaW5nJyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vaHRtbCcpLFxuICBpbWFnZVJlZmVyZW5jZTogcmVxdWlyZSgnLi9pbWFnZS1yZWZlcmVuY2UnKSxcbiAgaW1hZ2U6IHJlcXVpcmUoJy4vaW1hZ2UnKSxcbiAgaW5saW5lQ29kZTogcmVxdWlyZSgnLi9pbmxpbmUtY29kZScpLFxuICBsaW5rUmVmZXJlbmNlOiByZXF1aXJlKCcuL2xpbmstcmVmZXJlbmNlJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vbGluaycpLFxuICBsaXN0SXRlbTogcmVxdWlyZSgnLi9saXN0LWl0ZW0nKSxcbiAgbGlzdDogcmVxdWlyZSgnLi9saXN0JyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKSxcbiAgcm9vdDogcmVxdWlyZSgnLi9yb290JyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi9zdHJvbmcnKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi90ZXh0JyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsnKSxcbiAgdG9tbDogaWdub3JlLFxuICB5YW1sOiBpZ25vcmUsXG4gIGRlZmluaXRpb246IGlnbm9yZSxcbiAgZm9vdG5vdGVEZWZpbml0aW9uOiBpZ25vcmVcbn1cblxuLy8gUmV0dXJuIG5vdGhpbmcgZm9yIG5vZGVzIHRoYXQgYXJlIGlnbm9yZWQuXG5mdW5jdGlvbiBpZ25vcmUoKSB7XG4gIHJldHVybiBudWxsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5cbnZhciBjb2xsYXBzZSA9IHJlcXVpcmUoJ2NvbGxhcHNlLXdoaXRlLXNwYWNlJylcbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGlubGluZUNvZGUoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnY29kZScsIFt1KCd0ZXh0JywgY29sbGFwc2Uobm9kZS52YWx1ZSkpXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtSZWZlcmVuY2VcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgcmV2ZXJ0ID0gcmVxdWlyZSgnLi4vcmV2ZXJ0JylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaW5rUmVmZXJlbmNlKGgsIG5vZGUpIHtcbiAgdmFyIGRlZiA9IGguZGVmaW5pdGlvbihub2RlLmlkZW50aWZpZXIpXG4gIHZhciBwcm9wc1xuXG4gIGlmICghZGVmKSB7XG4gICAgcmV0dXJuIHJldmVydChoLCBub2RlKVxuICB9XG5cbiAgcHJvcHMgPSB7aHJlZjogbm9ybWFsaXplKGRlZi51cmwgfHwgJycpfVxuXG4gIGlmIChkZWYudGl0bGUgIT09IG51bGwgJiYgZGVmLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IGRlZi50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2EnLCBwcm9wcywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xuXG5mdW5jdGlvbiBsaW5rKGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge2hyZWY6IG5vcm1hbGl6ZShub2RlLnVybCl9XG5cbiAgaWYgKG5vZGUudGl0bGUgIT09IG51bGwgJiYgbm9kZS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBub2RlLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnYScsIHByb3BzLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0SXRlbVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0SXRlbShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaGVhZCA9IGNoaWxkcmVuWzBdXG4gIHZhciByYXcgPSBhbGwoaCwgbm9kZSlcbiAgdmFyIGxvb3NlID0gcGFyZW50ID8gbGlzdExvb3NlKHBhcmVudCkgOiBsaXN0SXRlbUxvb3NlKG5vZGUpXG4gIHZhciBwcm9wcyA9IHt9XG4gIHZhciByZXN1bHRcbiAgdmFyIGNvbnRhaW5lclxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgY2hpbGRcblxuICAvLyBUaWdodCBsaXN0cyBzaG91bGQgbm90IHJlbmRlciBgcGFyYWdyYXBoYCBub2RlcyBhcyBgcGAgZWxlbWVudHMuXG4gIGlmIChsb29zZSkge1xuICAgIHJlc3VsdCA9IHJhd1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IFtdXG4gICAgbGVuZ3RoID0gcmF3Lmxlbmd0aFxuICAgIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGlsZCA9IHJhd1tpbmRleF1cblxuICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdwJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNoaWxkLmNoaWxkcmVuKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBub2RlLmNoZWNrZWQgPT09ICdib29sZWFuJykge1xuICAgIGlmIChsb29zZSAmJiAoIWhlYWQgfHwgaGVhZC50eXBlICE9PSAncGFyYWdyYXBoJykpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KGgobnVsbCwgJ3AnLCBbXSkpXG4gICAgfVxuXG4gICAgY29udGFpbmVyID0gbG9vc2UgPyByZXN1bHRbMF0uY2hpbGRyZW4gOiByZXN1bHRcblxuICAgIGlmIChjb250YWluZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb250YWluZXIudW5zaGlmdCh1KCd0ZXh0JywgJyAnKSlcbiAgICB9XG5cbiAgICBjb250YWluZXIudW5zaGlmdChcbiAgICAgIGgobnVsbCwgJ2lucHV0Jywge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBjaGVja2VkOiBub2RlLmNoZWNrZWQsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KVxuICAgIClcblxuICAgIC8vIEFjY29yZGluZyB0byBnaXRodWItbWFya2Rvd24tY3NzLCB0aGlzIGNsYXNzIGhpZGVzIGJ1bGxldC5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2dpdGh1Yi1tYXJrZG93bi1jc3M+LlxuICAgIHByb3BzLmNsYXNzTmFtZSA9IFsndGFzay1saXN0LWl0ZW0nXVxuICB9XG5cbiAgaWYgKGxvb3NlICYmIHJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICByZXN1bHQgPSB3cmFwKHJlc3VsdCwgdHJ1ZSlcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdsaScsIHByb3BzLCByZXN1bHQpXG59XG5cbmZ1bmN0aW9uIGxpc3RMb29zZShub2RlKSB7XG4gIHZhciBsb29zZSA9IG5vZGUuc3ByZWFkXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICghbG9vc2UgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGxvb3NlID0gbGlzdEl0ZW1Mb29zZShjaGlsZHJlbltpbmRleF0pXG4gIH1cblxuICByZXR1cm4gbG9vc2Vcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1Mb29zZShub2RlKSB7XG4gIHZhciBzcHJlYWQgPSBub2RlLnNwcmVhZFxuXG4gIHJldHVybiBzcHJlYWQgPT09IHVuZGVmaW5lZCB8fCBzcHJlYWQgPT09IG51bGxcbiAgICA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMVxuICAgIDogc3ByZWFkXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0XG5cbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gbGlzdChoLCBub2RlKSB7XG4gIHZhciBwcm9wcyA9IHt9XG4gIHZhciBuYW1lID0gbm9kZS5vcmRlcmVkID8gJ29sJyA6ICd1bCdcbiAgdmFyIGl0ZW1zXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGhcblxuICBpZiAodHlwZW9mIG5vZGUuc3RhcnQgPT09ICdudW1iZXInICYmIG5vZGUuc3RhcnQgIT09IDEpIHtcbiAgICBwcm9wcy5zdGFydCA9IG5vZGUuc3RhcnRcbiAgfVxuXG4gIGl0ZW1zID0gYWxsKGgsIG5vZGUpXG4gIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aFxuXG4gIC8vIExpa2UgR2l0SHViLCBhZGQgYSBjbGFzcyBmb3IgY3VzdG9tIHN0eWxpbmcuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKFxuICAgICAgaXRlbXNbaW5kZXhdLnByb3BlcnRpZXMuY2xhc3NOYW1lICYmXG4gICAgICBpdGVtc1tpbmRleF0ucHJvcGVydGllcy5jbGFzc05hbWUuaW5kZXhPZigndGFzay1saXN0LWl0ZW0nKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHByb3BzLmNsYXNzTmFtZSA9IFsnY29udGFpbnMtdGFzay1saXN0J11cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgbmFtZSwgcHJvcHMsIHdyYXAoaXRlbXMsIHRydWUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBwYXJhZ3JhcGgoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAncCcsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3RcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gcm9vdChoLCBub2RlKSB7XG4gIHJldHVybiBoLmF1Z21lbnQobm9kZSwgdSgncm9vdCcsIHdyYXAoYWxsKGgsIG5vZGUpKSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cm9uZyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdzdHJvbmcnLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZVxuXG52YXIgcG9zaXRpb24gPSByZXF1aXJlKCd1bmlzdC11dGlsLXBvc2l0aW9uJylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gdGFibGUoaCwgbm9kZSkge1xuICB2YXIgcm93cyA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGluZGV4ID0gcm93cy5sZW5ndGhcbiAgdmFyIGFsaWduID0gbm9kZS5hbGlnblxuICB2YXIgYWxpZ25MZW5ndGggPSBhbGlnbi5sZW5ndGhcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBwb3NcbiAgdmFyIHJvd1xuICB2YXIgb3V0XG4gIHZhciBuYW1lXG4gIHZhciBjZWxsXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICByb3cgPSByb3dzW2luZGV4XS5jaGlsZHJlblxuICAgIG5hbWUgPSBpbmRleCA9PT0gMCA/ICd0aCcgOiAndGQnXG4gICAgcG9zID0gYWxpZ25MZW5ndGhcbiAgICBvdXQgPSBbXVxuXG4gICAgd2hpbGUgKHBvcy0tKSB7XG4gICAgICBjZWxsID0gcm93W3Bvc11cbiAgICAgIG91dFtwb3NdID0gaChjZWxsLCBuYW1lLCB7YWxpZ246IGFsaWduW3Bvc119LCBjZWxsID8gYWxsKGgsIGNlbGwpIDogW10pXG4gICAgfVxuXG4gICAgcmVzdWx0W2luZGV4XSA9IGgocm93c1tpbmRleF0sICd0cicsIHdyYXAob3V0LCB0cnVlKSlcbiAgfVxuXG4gIHJldHVybiBoKFxuICAgIG5vZGUsXG4gICAgJ3RhYmxlJyxcbiAgICB3cmFwKFxuICAgICAgW1xuICAgICAgICBoKHJlc3VsdFswXS5wb3NpdGlvbiwgJ3RoZWFkJywgd3JhcChbcmVzdWx0WzBdXSwgdHJ1ZSkpLFxuICAgICAgICBoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiBwb3NpdGlvbi5zdGFydChyZXN1bHRbMV0pLFxuICAgICAgICAgICAgZW5kOiBwb3NpdGlvbi5lbmQocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSlcbiAgICAgICAgICB9LFxuICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgd3JhcChyZXN1bHQuc2xpY2UoMSksIHRydWUpXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICB0cnVlXG4gICAgKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgdHJpbUxpbmVzID0gcmVxdWlyZSgndHJpbS1saW5lcycpXG5cbmZ1bmN0aW9uIHRleHQoaCwgbm9kZSkge1xuICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHUoJ3RleHQnLCB0cmltTGluZXMobm9kZS52YWx1ZSkpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuXG5mdW5jdGlvbiB0aGVtYXRpY0JyZWFrKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2hyJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSGFzdFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG52YXIgcG9zaXRpb24gPSByZXF1aXJlKCd1bmlzdC11dGlsLXBvc2l0aW9uJylcbnZhciBnZW5lcmF0ZWQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWdlbmVyYXRlZCcpXG52YXIgZGVmaW5pdGlvbnMgPSByZXF1aXJlKCdtZGFzdC11dGlsLWRlZmluaXRpb25zJylcbnZhciBvbmUgPSByZXF1aXJlKCcuL29uZScpXG52YXIgZm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKVxudmFyIGhhbmRsZXJzID0gcmVxdWlyZSgnLi9oYW5kbGVycycpXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBGYWN0b3J5IHRvIHRyYW5zZm9ybS5cbmZ1bmN0aW9uIGZhY3RvcnkodHJlZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBkYW5nZXJvdXMgPSBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUxcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IHt9XG5cbiAgaC5kYW5nZXJvdXMgPSBkYW5nZXJvdXNcbiAgaC5kZWZpbml0aW9uID0gZGVmaW5pdGlvbnModHJlZSwgc2V0dGluZ3MpXG4gIGguZm9vdG5vdGVCeUlkID0gZm9vdG5vdGVCeUlkXG4gIGguZm9vdG5vdGVPcmRlciA9IFtdXG4gIGguYXVnbWVudCA9IGF1Z21lbnRcbiAgaC5oYW5kbGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGhhbmRsZXJzLCBzZXR0aW5ncy5oYW5kbGVycylcbiAgaC51bmtub3duSGFuZGxlciA9IHNldHRpbmdzLnVua25vd25IYW5kbGVyXG5cbiAgdmlzaXQodHJlZSwgJ2Zvb3Rub3RlRGVmaW5pdGlvbicsIG9uZm9vdG5vdGVkZWZpbml0aW9uKVxuXG4gIHJldHVybiBoXG5cbiAgLy8gRmluYWxpc2UgdGhlIGNyZWF0ZWQgYHJpZ2h0YCwgYSBoYXN0IG5vZGUsIGZyb20gYGxlZnRgLCBhbiBtZGFzdCBub2RlLlxuICBmdW5jdGlvbiBhdWdtZW50KGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGRhdGFcbiAgICB2YXIgY3R4XG5cbiAgICAvLyBIYW5kbGUgYGRhdGEuaE5hbWVgLCBgZGF0YS5oUHJvcGVydGllcywgYGRhdGEuaENoaWxkcmVuYC5cbiAgICBpZiAobGVmdCAmJiAnZGF0YScgaW4gbGVmdCkge1xuICAgICAgZGF0YSA9IGxlZnQuZGF0YVxuXG4gICAgICBpZiAocmlnaHQudHlwZSA9PT0gJ2VsZW1lbnQnICYmIGRhdGEuaE5hbWUpIHtcbiAgICAgICAgcmlnaHQudGFnTmFtZSA9IGRhdGEuaE5hbWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0LnR5cGUgPT09ICdlbGVtZW50JyAmJiBkYXRhLmhQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJpZ2h0LnByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCByaWdodC5wcm9wZXJ0aWVzLCBkYXRhLmhQcm9wZXJ0aWVzKVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHQuY2hpbGRyZW4gJiYgZGF0YS5oQ2hpbGRyZW4pIHtcbiAgICAgICAgcmlnaHQuY2hpbGRyZW4gPSBkYXRhLmhDaGlsZHJlblxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eCA9IGxlZnQgJiYgbGVmdC5wb3NpdGlvbiA/IGxlZnQgOiB7cG9zaXRpb246IGxlZnR9XG5cbiAgICBpZiAoIWdlbmVyYXRlZChjdHgpKSB7XG4gICAgICByaWdodC5wb3NpdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uLnN0YXJ0KGN0eCksXG4gICAgICAgIGVuZDogcG9zaXRpb24uZW5kKGN0eClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGZvciBgbm9kZWAuXG4gIGZ1bmN0aW9uIGgobm9kZSwgdGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKFxuICAgICAgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4gPT09IG51bGwpICYmXG4gICAgICB0eXBlb2YgcHJvcHMgPT09ICdvYmplY3QnICYmXG4gICAgICAnbGVuZ3RoJyBpbiBwcm9wc1xuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSBwcm9wc1xuICAgICAgcHJvcHMgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBhdWdtZW50KG5vZGUsIHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICBwcm9wZXJ0aWVzOiBwcm9wcyB8fCB7fSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvb3Rub3RlZGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdmFyIGlkID0gU3RyaW5nKGRlZmluaXRpb24uaWRlbnRpZmllcikudG9VcHBlckNhc2UoKVxuXG4gICAgLy8gTWltaWNrIENNIGJlaGF2aW9yIG9mIGxpbmsgZGVmaW5pdGlvbnMuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvYmxvYi84ZDQ4ZTU3L2luZGV4LmpzI0wyNj4uXG4gICAgaWYgKCFvd24uY2FsbChmb290bm90ZUJ5SWQsIGlkKSkge1xuICAgICAgZm9vdG5vdGVCeUlkW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtIGB0cmVlYCwgd2hpY2ggaXMgYW4gbWRhc3Qgbm9kZSwgdG8gYSBoYXN0IG5vZGUuXG5mdW5jdGlvbiB0b0hhc3QodHJlZSwgb3B0aW9ucykge1xuICB2YXIgaCA9IGZhY3RvcnkodHJlZSwgb3B0aW9ucylcbiAgdmFyIG5vZGUgPSBvbmUoaCwgdHJlZSlcbiAgdmFyIGZvb3QgPSBmb290ZXIoaClcblxuICBpZiAoZm9vdCkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLmNvbmNhdCh1KCd0ZXh0JywgJ1xcbicpLCBmb290KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFRyYW5zZm9ybSBhbiB1bmtub3duIG5vZGUuXG5mdW5jdGlvbiB1bmtub3duKGgsIG5vZGUpIHtcbiAgaWYgKHRleHQobm9kZSkpIHtcbiAgICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHUoJ3RleHQnLCBub2RlLnZhbHVlKSlcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdkaXYnLCBhbGwoaCwgbm9kZSkpXG59XG5cbi8vIFZpc2l0IGEgbm9kZS5cbmZ1bmN0aW9uIG9uZShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHR5cGUgPSBub2RlICYmIG5vZGUudHlwZVxuICB2YXIgZm4gPSBvd24uY2FsbChoLmhhbmRsZXJzLCB0eXBlKSA/IGguaGFuZGxlcnNbdHlwZV0gOiBoLnVua25vd25IYW5kbGVyXG5cbiAgLy8gRmFpbCBvbiBub24tbm9kZXMuXG4gIGlmICghdHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxuXG4gIHJldHVybiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4gOiB1bmtub3duKShoLCBub2RlLCBwYXJlbnQpXG59XG5cbi8vIENoZWNrIGlmIHRoZSBub2RlIHNob3VsZCBiZSByZW5kZXJlcmVkIGFzIGEgdGV4dCBub2RlLlxuZnVuY3Rpb24gdGV4dChub2RlKSB7XG4gIHZhciBkYXRhID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgaWYgKFxuICAgIG93bi5jYWxsKGRhdGEsICdoTmFtZScpIHx8XG4gICAgb3duLmNhbGwoZGF0YSwgJ2hQcm9wZXJ0aWVzJykgfHxcbiAgICBvd24uY2FsbChkYXRhLCAnaENoaWxkcmVuJylcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXZlcnRcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG5cbi8vIFJldHVybiB0aGUgY29udGVudCBvZiBhIHJlZmVyZW5jZSB3aXRob3V0IGRlZmluaXRpb24gYXMgTWFya2Rvd24uXG5mdW5jdGlvbiByZXZlcnQoaCwgbm9kZSkge1xuICB2YXIgc3VidHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuICB2YXIgc3VmZml4ID0gJ10nXG4gIHZhciBjb250ZW50c1xuICB2YXIgaGVhZFxuICB2YXIgdGFpbFxuXG4gIGlmIChzdWJ0eXBlID09PSAnY29sbGFwc2VkJykge1xuICAgIHN1ZmZpeCArPSAnW10nXG4gIH0gZWxzZSBpZiAoc3VidHlwZSA9PT0gJ2Z1bGwnKSB7XG4gICAgc3VmZml4ICs9ICdbJyArIChub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcikgKyAnXSdcbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgPT09ICdpbWFnZVJlZmVyZW5jZScpIHtcbiAgICByZXR1cm4gdSgndGV4dCcsICchWycgKyBub2RlLmFsdCArIHN1ZmZpeClcbiAgfVxuXG4gIGNvbnRlbnRzID0gYWxsKGgsIG5vZGUpXG4gIGhlYWQgPSBjb250ZW50c1swXVxuXG4gIGlmIChoZWFkICYmIGhlYWQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgaGVhZC52YWx1ZSA9ICdbJyArIGhlYWQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50cy51bnNoaWZ0KHUoJ3RleHQnLCAnWycpKVxuICB9XG5cbiAgdGFpbCA9IGNvbnRlbnRzW2NvbnRlbnRzLmxlbmd0aCAtIDFdXG5cbiAgaWYgKHRhaWwgJiYgdGFpbC50eXBlID09PSAndGV4dCcpIHtcbiAgICB0YWlsLnZhbHVlICs9IHN1ZmZpeFxuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRzLnB1c2godSgndGV4dCcsIHN1ZmZpeCkpXG4gIH1cblxuICByZXR1cm4gY29udGVudHNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuLy8gV3JhcCBgbm9kZXNgIHdpdGggbGluZSBmZWVkcyBiZXR3ZWVuIGVhY2ggZW50cnkuXG4vLyBPcHRpb25hbGx5IGFkZHMgbGluZSBmZWVkcyBhdCB0aGUgc3RhcnQgYW5kIGVuZC5cbmZ1bmN0aW9uIHdyYXAobm9kZXMsIGxvb3NlKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG5cbiAgaWYgKGxvb3NlKSB7XG4gICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4KSB7XG4gICAgICByZXN1bHQucHVzaCh1KCd0ZXh0JywgJ1xcbicpKVxuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG5vZGVzW2luZGV4XSlcbiAgfVxuXG4gIGlmIChsb29zZSAmJiBub2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICByZXN1bHQucHVzaCh1KCd0ZXh0JywgJ1xcbicpKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGVuY29kZUNhY2hlID0ge307XG5cblxuLy8gQ3JlYXRlIGEgbG9va3VwIGFycmF5IHdoZXJlIGFueXRoaW5nIGJ1dCBjaGFyYWN0ZXJzIGluIGBjaGFyc2Agc3RyaW5nXG4vLyBhbmQgYWxwaGFudW1lcmljIGNoYXJzIGlzIHBlcmNlbnQtZW5jb2RlZC5cbi8vXG5mdW5jdGlvbiBnZXRFbmNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG5cbiAgICBpZiAoL15bMC05YS16XSQvaS50ZXN0KGNoKSkge1xuICAgICAgLy8gYWx3YXlzIGFsbG93IHVuZW5jb2RlZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVyc1xuICAgICAgY2FjaGUucHVzaChjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLnB1c2goJyUnICsgKCcwJyArIGkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtleGNsdWRlLmNoYXJDb2RlQXQoaSldID0gZXhjbHVkZVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5XG4vLyBlbmNvZGVkIHNlcXVlbmNlcy5cbi8vXG4vLyAgLSBzdHJpbmcgICAgICAgLSBzdHJpbmcgdG8gZW5jb2RlXG4vLyAgLSBleGNsdWRlICAgICAgLSBsaXN0IG9mIGNoYXJhY3RlcnMgdG8gaWdub3JlIChpbiBhZGRpdGlvbiB0byBhLXpBLVowLTkpXG4vLyAgLSBrZWVwRXNjYXBlZCAgLSBkb24ndCBlbmNvZGUgJyUnIGluIGEgY29ycmVjdCBlc2NhcGUgc2VxdWVuY2UgKGRlZmF1bHQ6IHRydWUpXG4vL1xuZnVuY3Rpb24gZW5jb2RlKHN0cmluZywgZXhjbHVkZSwga2VlcEVzY2FwZWQpIHtcbiAgdmFyIGksIGwsIGNvZGUsIG5leHRDb2RlLCBjYWNoZSxcbiAgICAgIHJlc3VsdCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBlbmNvZGUoc3RyaW5nLCBrZWVwRXNjYXBlZClcbiAgICBrZWVwRXNjYXBlZCAgPSBleGNsdWRlO1xuICAgIGV4Y2x1ZGUgPSBlbmNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZWVwRXNjYXBlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBrZWVwRXNjYXBlZCA9IHRydWU7XG4gIH1cblxuICBjYWNoZSA9IGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIGZvciAoaSA9IDAsIGwgPSBzdHJpbmcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGtlZXBFc2NhcGVkICYmIGNvZGUgPT09IDB4MjUgLyogJSAqLyAmJiBpICsgMiA8IGwpIHtcbiAgICAgIGlmICgvXlswLTlhLWZdezJ9JC9pLnRlc3Qoc3RyaW5nLnNsaWNlKGkgKyAxLCBpICsgMykpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzdHJpbmcuc2xpY2UoaSwgaSArIDMpO1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICByZXN1bHQgKz0gY2FjaGVbY29kZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERGRkYpIHtcbiAgICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRiAmJiBpICsgMSA8IGwpIHtcbiAgICAgICAgbmV4dENvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGlmIChuZXh0Q29kZSA+PSAweERDMDAgJiYgbmV4dENvZGUgPD0gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0gKyBzdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnJUVGJUJGJUJEJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmVuY29kZS5kZWZhdWx0Q2hhcnMgICA9IFwiOy8/OkAmPSskLC1fLiF+KicoKSNcIjtcbmVuY29kZS5jb21wb25lbnRDaGFycyA9IFwiLV8uIX4qJygpXCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1kYXN0Mmhhc3QgPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLWhhc3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbWFyazJyZWh5cGVcblxuLy8gQXR0YWNoZXIuXG4vLyBJZiBhIGRlc3RpbmF0aW9uIGlzIGdpdmVuLCBydW5zIHRoZSBkZXN0aW5hdGlvbiB3aXRoIHRoZSBuZXcgaGFzdCB0cmVlXG4vLyAoYnJpZGdlIG1vZGUpLlxuLy8gV2l0aG91dCBkZXN0aW5hdGlvbiwgcmV0dXJucyB0aGUgdHJlZTogZnVydGhlciBwbHVnaW5zIHJ1biBvbiB0aGF0IHRyZWVcbi8vIChtdXRhdGUgbW9kZSkuXG5mdW5jdGlvbiByZW1hcmsycmVoeXBlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChkZXN0aW5hdGlvbiAmJiAhZGVzdGluYXRpb24ucHJvY2Vzcykge1xuICAgIG9wdGlvbnMgPSBkZXN0aW5hdGlvblxuICAgIGRlc3RpbmF0aW9uID0gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uID8gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSA6IG11dGF0ZShvcHRpb25zKVxufVxuXG4vLyBCcmlkZ2UgbW9kZS5cbi8vIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWUuXG5mdW5jdGlvbiBicmlkZ2UoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtZXIobm9kZSwgZmlsZSwgbmV4dCkge1xuICAgIGRlc3RpbmF0aW9uLnJ1bihtZGFzdDJoYXN0KG5vZGUsIG9wdGlvbnMpLCBmaWxlLCBkb25lKVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIG5leHQoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBNdXRhdGUtbW9kZS5cbi8vIEZ1cnRoZXIgdHJhbnNmb3JtZXJzIHJ1biBvbiB0aGUgaGFzdCB0cmVlLlxuZnVuY3Rpb24gbXV0YXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtZXIobm9kZSkge1xuICAgIHJldHVybiBtZGFzdDJoYXN0KG5vZGUsIG9wdGlvbnMpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1MaW5lc1xuXG52YXIgd3MgPSAvWyBcXHRdKlxcbitbIFxcdF0qL2dcbnZhciBuZXdsaW5lID0gJ1xcbidcblxuZnVuY3Rpb24gdHJpbUxpbmVzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2Uod3MsIG5ld2xpbmUpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB1XG5cbmZ1bmN0aW9uIHUodHlwZSwgcHJvcHMsIHZhbHVlKSB7XG4gIHZhciBub2RlXG5cbiAgaWYgKFxuICAgICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICh0eXBlb2YgcHJvcHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocHJvcHMpKVxuICApIHtcbiAgICB2YWx1ZSA9IHByb3BzXG4gICAgcHJvcHMgPSB7fVxuICB9XG5cbiAgbm9kZSA9IE9iamVjdC5hc3NpZ24oe3R5cGU6IFN0cmluZyh0eXBlKX0sIHByb3BzKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSB2YWx1ZVxuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBub2RlLnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlZFxuXG5mdW5jdGlvbiBnZW5lcmF0ZWQobm9kZSkge1xuICB2YXIgcG9zaXRpb24gPSBvcHRpb25hbChvcHRpb25hbChub2RlKS5wb3NpdGlvbilcbiAgdmFyIHN0YXJ0ID0gb3B0aW9uYWwocG9zaXRpb24uc3RhcnQpXG4gIHZhciBlbmQgPSBvcHRpb25hbChwb3NpdGlvbi5lbmQpXG5cbiAgcmV0dXJuICFzdGFydC5saW5lIHx8ICFzdGFydC5jb2x1bW4gfHwgIWVuZC5saW5lIHx8ICFlbmQuY29sdW1uXG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdGFydCA9IGZhY3RvcnkoJ3N0YXJ0JylcbnZhciBlbmQgPSBmYWN0b3J5KCdlbmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uXG5cbnBvc2l0aW9uLnN0YXJ0ID0gc3RhcnRcbnBvc2l0aW9uLmVuZCA9IGVuZFxuXG5mdW5jdGlvbiBwb3NpdGlvbihub2RlKSB7XG4gIHJldHVybiB7c3RhcnQ6IHN0YXJ0KG5vZGUpLCBlbmQ6IGVuZChub2RlKX1cbn1cblxuZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gIHBvaW50LmRpc3BsYXlOYW1lID0gdHlwZVxuXG4gIHJldHVybiBwb2ludFxuXG4gIGZ1bmN0aW9uIHBvaW50KG5vZGUpIHtcbiAgICB2YXIgcG9pbnQgPSAobm9kZSAmJiBub2RlLnBvc2l0aW9uICYmIG5vZGUucG9zaXRpb25bdHlwZV0pIHx8IHt9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogcG9pbnQubGluZSB8fCBudWxsLFxuICAgICAgY29sdW1uOiBwb2ludC5jb2x1bW4gfHwgbnVsbCxcbiAgICAgIG9mZnNldDogaXNOYU4ocG9pbnQub2Zmc2V0KSA/IG51bGwgOiBwb2ludC5vZmZzZXRcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=