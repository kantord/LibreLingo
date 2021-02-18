(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
function gather(node) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', ondefinition)

  return cache

  function ondefinition(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
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

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
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

var u = __webpack_require__(/*! unist-builder */ "../../node_modules/unist-builder/index.js")

function inlineCode(h, node) {
  var value = node.value.replace(/\r?\n|\r/g, ' ')
  return h(node, 'code', [u('text', value)])
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
var all = __webpack_require__(/*! ../all */ "../../node_modules/mdast-util-to-hast/lib/all.js")

function listItem(h, node, parent) {
  var result = all(h, node)
  var head = result[0]
  var loose = parent ? listLoose(parent) : listItemLoose(node)
  var props = {}
  var wrapped = []
  var length
  var index
  var child

  if (typeof node.checked === 'boolean') {
    if (!head || head.tagName !== 'p') {
      head = h(null, 'p', [])
      result.unshift(head)
    }

    if (head.children.length !== 0) {
      head.children.unshift(u('text', ' '))
    }

    head.children.unshift(
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

  length = result.length
  index = -1

  while (++index < length) {
    child = result[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (loose || index !== 0 || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'))
    }

    if (child.tagName === 'p' && !loose) {
      wrapped = wrapped.concat(child.children)
    } else {
      wrapped.push(child)
    }
  }

  // Add a final eol.
  if (length && (loose || child.tagName !== 'p')) {
    wrapped.push(u('text', '\n'))
  }

  return h(node, 'li', props, wrapped)
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
  var align = node.align || []
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
    pos = alignLength || row.length
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
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: position.start(result[1]),
                end: position.end(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
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

function text(h, node) {
  return h.augment(
    node,
    u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1'))
  )
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

var deprecationWarningIssued = false

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}

  // Issue a warning if the deprecated tag 'allowDangerousHTML' is used
  if (settings.allowDangerousHTML !== undefined && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
    )
  }

  var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree)
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
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
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


/***/ }),

/***/ "../../node_modules/unist-util-visit/index.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/unist-util-visit/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "../../node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvZm9vdGVyLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9icmVhay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZGVsZXRlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZm9vdG5vdGUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9mb290bm90ZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW1hZ2UtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2lubGluZS1jb2RlLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saW5rLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGluay5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGlzdC1pdGVtLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvb25lLmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9yZXZlcnQuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZHVybC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcmVoeXBlL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtZ2VuZXJhdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRXRDOztBQUVBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFPOzs7Ozs7Ozs7Ozs7O0FDRHBCOztBQUVaOztBQUVBLFVBQVUsbUJBQU8sQ0FBQywrREFBTzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLHVHQUEyQjtBQUN2RCxXQUFXLG1CQUFPLENBQUMsbUZBQWlCO0FBQ3BDLFdBQVcsbUJBQU8sQ0FBQyxpRUFBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYyxpQ0FBaUM7QUFDNUQsa0JBQWtCLHlCQUF5QjtBQUMzQzs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGNBQWMsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RGWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJZOztBQUVaOztBQUVBLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RVk7O0FBRVo7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsc0ZBQTBCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiODFmNjZkNjYxNjIwNjc3YTU3MzcvMS4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmluaXRpb25GYWN0b3J5XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBHZXQgYSBkZWZpbml0aW9uIGluIGBub2RlYCBieSBgaWRlbnRpZmllcmAuXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uRmFjdG9yeShub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBnZXR0ZXJGYWN0b3J5KGdhdGhlcihub2RlLCBvcHRpb25zKSlcbn1cblxuLy8gR2F0aGVyIGFsbCBkZWZpbml0aW9ucyBpbiBgbm9kZWBcbmZ1bmN0aW9uIGdhdGhlcihub2RlKSB7XG4gIHZhciBjYWNoZSA9IHt9XG5cbiAgaWYgKCFub2RlIHx8ICFub2RlLnR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMgZXhwZWN0ZWQgbm9kZScpXG4gIH1cblxuICB2aXNpdChub2RlLCAnZGVmaW5pdGlvbicsIG9uZGVmaW5pdGlvbilcblxuICByZXR1cm4gY2FjaGVcblxuICBmdW5jdGlvbiBvbmRlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IG5vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXG4gICAgaWYgKCFvd24uY2FsbChjYWNoZSwgaWQpKSB7XG4gICAgICBjYWNoZVtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IGEgbm9kZSBmcm9tIHRoZSBnaXZlbiBkZWZpbml0aW9uLWNhY2hlLlxuZnVuY3Rpb24gZ2V0dGVyRmFjdG9yeShjYWNoZSkge1xuICByZXR1cm4gZ2V0dGVyXG5cbiAgLy8gR2V0IGEgbm9kZSBmcm9tIHRoZSBib3VuZCBkZWZpbml0aW9uLWNhY2hlLlxuICBmdW5jdGlvbiBnZXR0ZXIoaWRlbnRpZmllcikge1xuICAgIHZhciBpZCA9IGlkZW50aWZpZXIgJiYgbm9ybWFsaXNlKGlkZW50aWZpZXIpXG4gICAgcmV0dXJuIGlkICYmIG93bi5jYWxsKGNhY2hlLCBpZCkgPyBjYWNoZVtpZF0gOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbFxuXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxuXG5mdW5jdGlvbiBhbGwoaCwgcGFyZW50KSB7XG4gIHZhciBub2RlcyA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0XG4gIHZhciBoZWFkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBvbmUoaCwgbm9kZXNbaW5kZXhdLCBwYXJlbnQpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAoaW5kZXggJiYgbm9kZXNbaW5kZXggLSAxXS50eXBlID09PSAnYnJlYWsnKSB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUucmVwbGFjZSgvXlxccysvLCAnJylcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQgPSByZXN1bHQuY2hpbGRyZW4gJiYgcmVzdWx0LmNoaWxkcmVuWzBdXG5cbiAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC52YWx1ZSkge1xuICAgICAgICAgIGhlYWQudmFsdWUgPSBoZWFkLnZhbHVlLnJlcGxhY2UoL15cXHMrLywgJycpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVGb290bm90ZXNcblxudmFyIHRoZW1hdGljQnJlYWsgPSByZXF1aXJlKCcuL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi9oYW5kbGVycy9saXN0JylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwJylcblxuZnVuY3Rpb24gZ2VuZXJhdGVGb290bm90ZXMoaCkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGxlbmd0aCA9IGZvb3Rub3RlT3JkZXIubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsaXN0SXRlbXMgPSBbXVxuICB2YXIgZGVmXG4gIHZhciBiYWNrUmVmZXJlbmNlXG4gIHZhciBjb250ZW50XG4gIHZhciB0YWlsXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkZWYgPSBmb290bm90ZUJ5SWRbZm9vdG5vdGVPcmRlcltpbmRleF0udG9VcHBlckNhc2UoKV1cblxuICAgIGlmICghZGVmKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkZWYuY2hpbGRyZW4uY29uY2F0KClcbiAgICB0YWlsID0gY29udGVudFtjb250ZW50Lmxlbmd0aCAtIDFdXG4gICAgYmFja1JlZmVyZW5jZSA9IHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHVybDogJyNmbnJlZi0nICsgZGVmLmlkZW50aWZpZXIsXG4gICAgICBkYXRhOiB7aFByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnZm9vdG5vdGUtYmFja3JlZiddfX0sXG4gICAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiAn4oapJ31dXG4gICAgfVxuXG4gICAgaWYgKCF0YWlsIHx8IHRhaWwudHlwZSAhPT0gJ3BhcmFncmFwaCcpIHtcbiAgICAgIHRhaWwgPSB7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBbXX1cbiAgICAgIGNvbnRlbnQucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRhaWwuY2hpbGRyZW4ucHVzaChiYWNrUmVmZXJlbmNlKVxuXG4gICAgbGlzdEl0ZW1zLnB1c2goe1xuICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgIGRhdGE6IHtoUHJvcGVydGllczoge2lkOiAnZm4tJyArIGRlZi5pZGVudGlmaWVyfX0sXG4gICAgICBjaGlsZHJlbjogY29udGVudCxcbiAgICAgIHBvc2l0aW9uOiBkZWYucG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgbnVsbCxcbiAgICAnZGl2JyxcbiAgICB7Y2xhc3NOYW1lOiBbJ2Zvb3Rub3RlcyddfSxcbiAgICB3cmFwKFxuICAgICAgW1xuICAgICAgICB0aGVtYXRpY0JyZWFrKGgpLFxuICAgICAgICBsaXN0KGgsIHt0eXBlOiAnbGlzdCcsIG9yZGVyZWQ6IHRydWUsIGNoaWxkcmVuOiBsaXN0SXRlbXN9KVxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBibG9ja3F1b3RlKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2Jsb2NrcXVvdGUnLCB3cmFwKGFsbChoLCBub2RlKSwgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkQnJlYWtcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGgsIG5vZGUpIHtcbiAgcmV0dXJuIFtoKG5vZGUsICdicicpLCB1KCd0ZXh0JywgJ1xcbicpXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBjb2RlKGgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZSA/IG5vZGUudmFsdWUgKyAnXFxuJyA6ICcnXG4gIHZhciBsYW5nID0gbm9kZS5sYW5nICYmIG5vZGUubGFuZy5tYXRjaCgvXlteIFxcdF0rKD89WyBcXHRdfCQpLylcbiAgdmFyIHByb3BzID0ge31cblxuICBpZiAobGFuZykge1xuICAgIHByb3BzLmNsYXNzTmFtZSA9IFsnbGFuZ3VhZ2UtJyArIGxhbmddXG4gIH1cblxuICByZXR1cm4gaChub2RlLnBvc2l0aW9uLCAncHJlJywgW2gobm9kZSwgJ2NvZGUnLCBwcm9wcywgW3UoJ3RleHQnLCB2YWx1ZSldKV0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2RlbCcsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBlbXBoYXNpcyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdlbScsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlUmVmZXJlbmNlXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGZvb3Rub3RlUmVmZXJlbmNlKGgsIG5vZGUpIHtcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGlkZW50aWZpZXIgPSBTdHJpbmcobm9kZS5pZGVudGlmaWVyKVxuXG4gIGlmIChmb290bm90ZU9yZGVyLmluZGV4T2YoaWRlbnRpZmllcikgPT09IC0xKSB7XG4gICAgZm9vdG5vdGVPcmRlci5wdXNoKGlkZW50aWZpZXIpXG4gIH1cblxuICByZXR1cm4gaChub2RlLnBvc2l0aW9uLCAnc3VwJywge2lkOiAnZm5yZWYtJyArIGlkZW50aWZpZXJ9LCBbXG4gICAgaChub2RlLCAnYScsIHtocmVmOiAnI2ZuLScgKyBpZGVudGlmaWVyLCBjbGFzc05hbWU6IFsnZm9vdG5vdGUtcmVmJ119LCBbXG4gICAgICB1KCd0ZXh0Jywgbm9kZS5sYWJlbCB8fCBpZGVudGlmaWVyKVxuICAgIF0pXG4gIF0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmb290bm90ZVxuXG52YXIgZm9vdG5vdGVSZWZlcmVuY2UgPSByZXF1aXJlKCcuL2Zvb3Rub3RlLXJlZmVyZW5jZScpXG5cbmZ1bmN0aW9uIGZvb3Rub3RlKGgsIG5vZGUpIHtcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IGguZm9vdG5vdGVCeUlkXG4gIHZhciBmb290bm90ZU9yZGVyID0gaC5mb290bm90ZU9yZGVyXG4gIHZhciBpZGVudGlmaWVyID0gMVxuXG4gIHdoaWxlIChpZGVudGlmaWVyIGluIGZvb3Rub3RlQnlJZCkge1xuICAgIGlkZW50aWZpZXIrK1xuICB9XG5cbiAgaWRlbnRpZmllciA9IFN0cmluZyhpZGVudGlmaWVyKVxuXG4gIC8vIE5vIG5lZWQgdG8gY2hlY2sgaWYgYGlkZW50aWZpZXJgIGV4aXN0cyBpbiBgZm9vdG5vdGVPcmRlcmAsIGl04oCZcyBndWFyYW50ZWVkXG4gIC8vIHRvIG5vdCBleGlzdCBiZWNhdXNlIHdlIGp1c3QgZ2VuZXJhdGVkIGl0LlxuICBmb290bm90ZU9yZGVyLnB1c2goaWRlbnRpZmllcilcblxuICBmb290bm90ZUJ5SWRbaWRlbnRpZmllcl0gPSB7XG4gICAgdHlwZTogJ2Zvb3Rub3RlRGVmaW5pdGlvbicsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAncGFyYWdyYXBoJywgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW59XSxcbiAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICB9XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVmZXJlbmNlKGgsIHtcbiAgICB0eXBlOiAnZm9vdG5vdGVSZWZlcmVuY2UnLFxuICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgcG9zaXRpb246IG5vZGUucG9zaXRpb25cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYWRpbmdcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGhlYWRpbmcoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnaCcgKyBub2RlLmRlcHRoLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbi8vIFJldHVybiBlaXRoZXIgYSBgcmF3YCBub2RlIGluIGRhbmdlcm91cyBtb2RlLCBvdGhlcndpc2Ugbm90aGluZy5cbmZ1bmN0aW9uIGh0bWwoaCwgbm9kZSkge1xuICByZXR1cm4gaC5kYW5nZXJvdXMgPyBoLmF1Z21lbnQobm9kZSwgdSgncmF3Jywgbm9kZS52YWx1ZSkpIDogbnVsbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VSZWZlcmVuY2VcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgcmV2ZXJ0ID0gcmVxdWlyZSgnLi4vcmV2ZXJ0JylcblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZGVmID0gaC5kZWZpbml0aW9uKG5vZGUuaWRlbnRpZmllcilcbiAgdmFyIHByb3BzXG5cbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm4gcmV2ZXJ0KGgsIG5vZGUpXG4gIH1cblxuICBwcm9wcyA9IHtzcmM6IG5vcm1hbGl6ZShkZWYudXJsIHx8ICcnKSwgYWx0OiBub2RlLmFsdH1cblxuICBpZiAoZGVmLnRpdGxlICE9PSBudWxsICYmIGRlZi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBkZWYudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdpbWcnLCBwcm9wcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVxuXG5mdW5jdGlvbiBpbWFnZShoLCBub2RlKSB7XG4gIHZhciBwcm9wcyA9IHtzcmM6IG5vcm1hbGl6ZShub2RlLnVybCksIGFsdDogbm9kZS5hbHR9XG5cbiAgaWYgKG5vZGUudGl0bGUgIT09IG51bGwgJiYgbm9kZS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBub2RlLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnaW1nJywgcHJvcHMpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vYmxvY2txdW90ZScpLFxuICBicmVhazogcmVxdWlyZSgnLi9icmVhaycpLFxuICBjb2RlOiByZXF1aXJlKCcuL2NvZGUnKSxcbiAgZGVsZXRlOiByZXF1aXJlKCcuL2RlbGV0ZScpLFxuICBlbXBoYXNpczogcmVxdWlyZSgnLi9lbXBoYXNpcycpLFxuICBmb290bm90ZVJlZmVyZW5jZTogcmVxdWlyZSgnLi9mb290bm90ZS1yZWZlcmVuY2UnKSxcbiAgZm9vdG5vdGU6IHJlcXVpcmUoJy4vZm9vdG5vdGUnKSxcbiAgaGVhZGluZzogcmVxdWlyZSgnLi9oZWFkaW5nJyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vaHRtbCcpLFxuICBpbWFnZVJlZmVyZW5jZTogcmVxdWlyZSgnLi9pbWFnZS1yZWZlcmVuY2UnKSxcbiAgaW1hZ2U6IHJlcXVpcmUoJy4vaW1hZ2UnKSxcbiAgaW5saW5lQ29kZTogcmVxdWlyZSgnLi9pbmxpbmUtY29kZScpLFxuICBsaW5rUmVmZXJlbmNlOiByZXF1aXJlKCcuL2xpbmstcmVmZXJlbmNlJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vbGluaycpLFxuICBsaXN0SXRlbTogcmVxdWlyZSgnLi9saXN0LWl0ZW0nKSxcbiAgbGlzdDogcmVxdWlyZSgnLi9saXN0JyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKSxcbiAgcm9vdDogcmVxdWlyZSgnLi9yb290JyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi9zdHJvbmcnKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi90ZXh0JyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsnKSxcbiAgdG9tbDogaWdub3JlLFxuICB5YW1sOiBpZ25vcmUsXG4gIGRlZmluaXRpb246IGlnbm9yZSxcbiAgZm9vdG5vdGVEZWZpbml0aW9uOiBpZ25vcmVcbn1cblxuLy8gUmV0dXJuIG5vdGhpbmcgZm9yIG5vZGVzIHRoYXQgYXJlIGlnbm9yZWQuXG5mdW5jdGlvbiBpZ25vcmUoKSB7XG4gIHJldHVybiBudWxsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGlubGluZUNvZGUoaCwgbm9kZSkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcgJylcbiAgcmV0dXJuIGgobm9kZSwgJ2NvZGUnLCBbdSgndGV4dCcsIHZhbHVlKV0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rUmVmZXJlbmNlXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxudmFyIHJldmVydCA9IHJlcXVpcmUoJy4uL3JldmVydCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gbGlua1JlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBkZWYgPSBoLmRlZmluaXRpb24obm9kZS5pZGVudGlmaWVyKVxuICB2YXIgcHJvcHNcblxuICBpZiAoIWRlZikge1xuICAgIHJldHVybiByZXZlcnQoaCwgbm9kZSlcbiAgfVxuXG4gIHByb3BzID0ge2hyZWY6IG5vcm1hbGl6ZShkZWYudXJsIHx8ICcnKX1cblxuICBpZiAoZGVmLnRpdGxlICE9PSBudWxsICYmIGRlZi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBkZWYudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdhJywgcHJvcHMsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcblxuZnVuY3Rpb24gbGluayhoLCBub2RlKSB7XG4gIHZhciBwcm9wcyA9IHtocmVmOiBub3JtYWxpemUobm9kZS51cmwpfVxuXG4gIGlmIChub2RlLnRpdGxlICE9PSBudWxsICYmIG5vZGUudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gbm9kZS50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2EnLCBwcm9wcywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdEl0ZW1cblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0SXRlbShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHJlc3VsdCA9IGFsbChoLCBub2RlKVxuICB2YXIgaGVhZCA9IHJlc3VsdFswXVxuICB2YXIgbG9vc2UgPSBwYXJlbnQgPyBsaXN0TG9vc2UocGFyZW50KSA6IGxpc3RJdGVtTG9vc2Uobm9kZSlcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIHdyYXBwZWQgPSBbXVxuICB2YXIgbGVuZ3RoXG4gIHZhciBpbmRleFxuICB2YXIgY2hpbGRcblxuICBpZiAodHlwZW9mIG5vZGUuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFoZWFkIHx8IGhlYWQudGFnTmFtZSAhPT0gJ3AnKSB7XG4gICAgICBoZWFkID0gaChudWxsLCAncCcsIFtdKVxuICAgICAgcmVzdWx0LnVuc2hpZnQoaGVhZClcbiAgICB9XG5cbiAgICBpZiAoaGVhZC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgIGhlYWQuY2hpbGRyZW4udW5zaGlmdCh1KCd0ZXh0JywgJyAnKSlcbiAgICB9XG5cbiAgICBoZWFkLmNoaWxkcmVuLnVuc2hpZnQoXG4gICAgICBoKG51bGwsICdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogbm9kZS5jaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICAvLyBBY2NvcmRpbmcgdG8gZ2l0aHViLW1hcmtkb3duLWNzcywgdGhpcyBjbGFzcyBoaWRlcyBidWxsZXQuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9naXRodWItbWFya2Rvd24tY3NzPi5cbiAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ3Rhc2stbGlzdC1pdGVtJ11cbiAgfVxuXG4gIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSByZXN1bHRbaW5kZXhdXG5cbiAgICAvLyBBZGQgZW9scyBiZWZvcmUgbm9kZXMsIGV4Y2VwdCBpZiB0aGlzIGlzIGEgbG9vc2UsIGZpcnN0IHBhcmFncmFwaC5cbiAgICBpZiAobG9vc2UgfHwgaW5kZXggIT09IDAgfHwgY2hpbGQudGFnTmFtZSAhPT0gJ3AnKSB7XG4gICAgICB3cmFwcGVkLnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ3AnICYmICFsb29zZSkge1xuICAgICAgd3JhcHBlZCA9IHdyYXBwZWQuY29uY2F0KGNoaWxkLmNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVkLnB1c2goY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGEgZmluYWwgZW9sLlxuICBpZiAobGVuZ3RoICYmIChsb29zZSB8fCBjaGlsZC50YWdOYW1lICE9PSAncCcpKSB7XG4gICAgd3JhcHBlZC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnbGknLCBwcm9wcywgd3JhcHBlZClcbn1cblxuZnVuY3Rpb24gbGlzdExvb3NlKG5vZGUpIHtcbiAgdmFyIGxvb3NlID0gbm9kZS5zcHJlYWRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCFsb29zZSAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbG9vc2UgPSBsaXN0SXRlbUxvb3NlKGNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBsb29zZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbUxvb3NlKG5vZGUpIHtcbiAgdmFyIHNwcmVhZCA9IG5vZGUuc3ByZWFkXG5cbiAgcmV0dXJuIHNwcmVhZCA9PT0gdW5kZWZpbmVkIHx8IHNwcmVhZCA9PT0gbnVsbFxuICAgID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgOiBzcHJlYWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0KGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIG5hbWUgPSBub2RlLm9yZGVyZWQgPyAnb2wnIDogJ3VsJ1xuICB2YXIgaXRlbXNcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICh0eXBlb2Ygbm9kZS5zdGFydCA9PT0gJ251bWJlcicgJiYgbm9kZS5zdGFydCAhPT0gMSkge1xuICAgIHByb3BzLnN0YXJ0ID0gbm9kZS5zdGFydFxuICB9XG5cbiAgaXRlbXMgPSBhbGwoaCwgbm9kZSlcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgLy8gTGlrZSBHaXRIdWIsIGFkZCBhIGNsYXNzIGZvciBjdXN0b20gc3R5bGluZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBpdGVtc1tpbmRleF0ucHJvcGVydGllcy5jbGFzc05hbWUgJiZcbiAgICAgIGl0ZW1zW2luZGV4XS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5pbmRleE9mKCd0YXNrLWxpc3QtaXRlbScpICE9PSAtMVxuICAgICkge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gWydjb250YWlucy10YXNrLWxpc3QnXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChub2RlLCBuYW1lLCBwcm9wcywgd3JhcChpdGVtcywgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdwJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiByb290KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCdyb290Jywgd3JhcChhbGwoaCwgbm9kZSkpKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gc3Ryb25nKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3N0cm9uZycsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiB0YWJsZShoLCBub2RlKSB7XG4gIHZhciByb3dzID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaW5kZXggPSByb3dzLmxlbmd0aFxuICB2YXIgYWxpZ24gPSBub2RlLmFsaWduIHx8IFtdXG4gIHZhciBhbGlnbkxlbmd0aCA9IGFsaWduLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc1xuICB2YXIgcm93XG4gIHZhciBvdXRcbiAgdmFyIG5hbWVcbiAgdmFyIGNlbGxcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJvdyA9IHJvd3NbaW5kZXhdLmNoaWxkcmVuXG4gICAgbmFtZSA9IGluZGV4ID09PSAwID8gJ3RoJyA6ICd0ZCdcbiAgICBwb3MgPSBhbGlnbkxlbmd0aCB8fCByb3cubGVuZ3RoXG4gICAgb3V0ID0gW11cblxuICAgIHdoaWxlIChwb3MtLSkge1xuICAgICAgY2VsbCA9IHJvd1twb3NdXG4gICAgICBvdXRbcG9zXSA9IGgoY2VsbCwgbmFtZSwge2FsaWduOiBhbGlnbltwb3NdfSwgY2VsbCA/IGFsbChoLCBjZWxsKSA6IFtdKVxuICAgIH1cblxuICAgIHJlc3VsdFtpbmRleF0gPSBoKHJvd3NbaW5kZXhdLCAndHInLCB3cmFwKG91dCwgdHJ1ZSkpXG4gIH1cblxuICByZXR1cm4gaChcbiAgICBub2RlLFxuICAgICd0YWJsZScsXG4gICAgd3JhcChcbiAgICAgIFtoKHJlc3VsdFswXS5wb3NpdGlvbiwgJ3RoZWFkJywgd3JhcChbcmVzdWx0WzBdXSwgdHJ1ZSkpXS5jb25jYXQoXG4gICAgICAgIHJlc3VsdFsxXVxuICAgICAgICAgID8gaChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3NpdGlvbi5zdGFydChyZXN1bHRbMV0pLFxuICAgICAgICAgICAgICAgIGVuZDogcG9zaXRpb24uZW5kKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICAgIHdyYXAocmVzdWx0LnNsaWNlKDEpLCB0cnVlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogW11cbiAgICAgICksXG4gICAgICB0cnVlXG4gICAgKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIHRleHQoaCwgbm9kZSkge1xuICByZXR1cm4gaC5hdWdtZW50KFxuICAgIG5vZGUsXG4gICAgdSgndGV4dCcsIFN0cmluZyhub2RlLnZhbHVlKS5yZXBsYWNlKC9bIFxcdF0qKFxccj9cXG58XFxyKVsgXFx0XSovZywgJyQxJykpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdocicpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0b0hhc3RcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxudmFyIHBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1wb3NpdGlvbicpXG52YXIgZ2VuZXJhdGVkID0gcmVxdWlyZSgndW5pc3QtdXRpbC1nZW5lcmF0ZWQnKVxudmFyIGRlZmluaXRpb25zID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1kZWZpbml0aW9ucycpXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxudmFyIGZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJylcbnZhciBoYW5kbGVycyA9IHJlcXVpcmUoJy4vaGFuZGxlcnMnKVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCA9IGZhbHNlXG5cbi8vIEZhY3RvcnkgdG8gdHJhbnNmb3JtLlxuZnVuY3Rpb24gZmFjdG9yeSh0cmVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cblxuICAvLyBJc3N1ZSBhIHdhcm5pbmcgaWYgdGhlIGRlcHJlY2F0ZWQgdGFnICdhbGxvd0Rhbmdlcm91c0hUTUwnIGlzIHVzZWRcbiAgaWYgKHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTCAhPT0gdW5kZWZpbmVkICYmICFkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQpIHtcbiAgICBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSB0cnVlXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ21kYXN0LXV0aWwtdG8taGFzdDogZGVwcmVjYXRpb246IGBhbGxvd0Rhbmdlcm91c0hUTUxgIGlzIG5vbnN0YW5kYXJkLCB1c2UgYGFsbG93RGFuZ2Vyb3VzSHRtbGAgaW5zdGVhZCdcbiAgICApXG4gIH1cblxuICB2YXIgZGFuZ2Vyb3VzID0gc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIdG1sIHx8IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTFxuICB2YXIgZm9vdG5vdGVCeUlkID0ge31cblxuICBoLmRhbmdlcm91cyA9IGRhbmdlcm91c1xuICBoLmRlZmluaXRpb24gPSBkZWZpbml0aW9ucyh0cmVlKVxuICBoLmZvb3Rub3RlQnlJZCA9IGZvb3Rub3RlQnlJZFxuICBoLmZvb3Rub3RlT3JkZXIgPSBbXVxuICBoLmF1Z21lbnQgPSBhdWdtZW50XG4gIGguaGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBoYW5kbGVycywgc2V0dGluZ3MuaGFuZGxlcnMpXG4gIGgudW5rbm93bkhhbmRsZXIgPSBzZXR0aW5ncy51bmtub3duSGFuZGxlclxuXG4gIHZpc2l0KHRyZWUsICdmb290bm90ZURlZmluaXRpb24nLCBvbmZvb3Rub3RlZGVmaW5pdGlvbilcblxuICByZXR1cm4gaFxuXG4gIC8vIEZpbmFsaXNlIHRoZSBjcmVhdGVkIGByaWdodGAsIGEgaGFzdCBub2RlLCBmcm9tIGBsZWZ0YCwgYW4gbWRhc3Qgbm9kZS5cbiAgZnVuY3Rpb24gYXVnbWVudChsZWZ0LCByaWdodCkge1xuICAgIHZhciBkYXRhXG4gICAgdmFyIGN0eFxuXG4gICAgLy8gSGFuZGxlIGBkYXRhLmhOYW1lYCwgYGRhdGEuaFByb3BlcnRpZXMsIGBkYXRhLmhDaGlsZHJlbmAuXG4gICAgaWYgKGxlZnQgJiYgJ2RhdGEnIGluIGxlZnQpIHtcbiAgICAgIGRhdGEgPSBsZWZ0LmRhdGFcblxuICAgICAgaWYgKHJpZ2h0LnR5cGUgPT09ICdlbGVtZW50JyAmJiBkYXRhLmhOYW1lKSB7XG4gICAgICAgIHJpZ2h0LnRhZ05hbWUgPSBkYXRhLmhOYW1lXG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodC50eXBlID09PSAnZWxlbWVudCcgJiYgZGF0YS5oUHJvcGVydGllcykge1xuICAgICAgICByaWdodC5wcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcmlnaHQucHJvcGVydGllcywgZGF0YS5oUHJvcGVydGllcylcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0LmNoaWxkcmVuICYmIGRhdGEuaENoaWxkcmVuKSB7XG4gICAgICAgIHJpZ2h0LmNoaWxkcmVuID0gZGF0YS5oQ2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjdHggPSBsZWZ0ICYmIGxlZnQucG9zaXRpb24gPyBsZWZ0IDoge3Bvc2l0aW9uOiBsZWZ0fVxuXG4gICAgaWYgKCFnZW5lcmF0ZWQoY3R4KSkge1xuICAgICAgcmlnaHQucG9zaXRpb24gPSB7XG4gICAgICAgIHN0YXJ0OiBwb3NpdGlvbi5zdGFydChjdHgpLFxuICAgICAgICBlbmQ6IHBvc2l0aW9uLmVuZChjdHgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpZ2h0XG4gIH1cblxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCBmb3IgYG5vZGVgLlxuICBmdW5jdGlvbiBoKG5vZGUsIHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmIChcbiAgICAgIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IGNoaWxkcmVuID09PSBudWxsKSAmJlxuICAgICAgdHlwZW9mIHByb3BzID09PSAnb2JqZWN0JyAmJlxuICAgICAgJ2xlbmd0aCcgaW4gcHJvcHNcbiAgICApIHtcbiAgICAgIGNoaWxkcmVuID0gcHJvcHNcbiAgICAgIHByb3BzID0ge31cbiAgICB9XG5cbiAgICByZXR1cm4gYXVnbWVudChub2RlLCB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgcHJvcGVydGllczogcHJvcHMgfHwge30sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4gfHwgW11cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb25mb290bm90ZWRlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IFN0cmluZyhkZWZpbml0aW9uLmlkZW50aWZpZXIpLnRvVXBwZXJDYXNlKClcblxuICAgIC8vIE1pbWljayBDTSBiZWhhdmlvciBvZiBsaW5rIGRlZmluaXRpb25zLlxuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLWRlZmluaXRpb25zL2Jsb2IvODI5MDk5OS9pbmRleC5qcyNMMjY+LlxuICAgIGlmICghb3duLmNhbGwoZm9vdG5vdGVCeUlkLCBpZCkpIHtcbiAgICAgIGZvb3Rub3RlQnlJZFtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8vIFRyYW5zZm9ybSBgdHJlZWAsIHdoaWNoIGlzIGFuIG1kYXN0IG5vZGUsIHRvIGEgaGFzdCBub2RlLlxuZnVuY3Rpb24gdG9IYXN0KHRyZWUsIG9wdGlvbnMpIHtcbiAgdmFyIGggPSBmYWN0b3J5KHRyZWUsIG9wdGlvbnMpXG4gIHZhciBub2RlID0gb25lKGgsIHRyZWUpXG4gIHZhciBmb290ID0gZm9vdGVyKGgpXG5cbiAgaWYgKGZvb3QpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5jb25jYXQodSgndGV4dCcsICdcXG4nKSwgZm9vdClcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbmVcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBUcmFuc2Zvcm0gYW4gdW5rbm93biBub2RlLlxuZnVuY3Rpb24gdW5rbm93bihoLCBub2RlKSB7XG4gIGlmICh0ZXh0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCd0ZXh0Jywgbm9kZS52YWx1ZSkpXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnZGl2JywgYWxsKGgsIG5vZGUpKVxufVxuXG4vLyBWaXNpdCBhIG5vZGUuXG5mdW5jdGlvbiBvbmUoaCwgbm9kZSwgcGFyZW50KSB7XG4gIHZhciB0eXBlID0gbm9kZSAmJiBub2RlLnR5cGVcbiAgdmFyIGZuID0gb3duLmNhbGwoaC5oYW5kbGVycywgdHlwZSkgPyBoLmhhbmRsZXJzW3R5cGVdIDogaC51bmtub3duSGFuZGxlclxuXG4gIC8vIEZhaWwgb24gbm9uLW5vZGVzLlxuICBpZiAoIXR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIGdvdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cblxuICByZXR1cm4gKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IGZuIDogdW5rbm93bikoaCwgbm9kZSwgcGFyZW50KVxufVxuXG4vLyBDaGVjayBpZiB0aGUgbm9kZSBzaG91bGQgYmUgcmVuZGVyZXJlZCBhcyBhIHRleHQgbm9kZS5cbmZ1bmN0aW9uIHRleHQobm9kZSkge1xuICB2YXIgZGF0YSA9IG5vZGUuZGF0YSB8fCB7fVxuXG4gIGlmIChcbiAgICBvd24uY2FsbChkYXRhLCAnaE5hbWUnKSB8fFxuICAgIG93bi5jYWxsKGRhdGEsICdoUHJvcGVydGllcycpIHx8XG4gICAgb3duLmNhbGwoZGF0YSwgJ2hDaGlsZHJlbicpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuICd2YWx1ZScgaW4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJ0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgYWxsID0gcmVxdWlyZSgnLi9hbGwnKVxuXG4vLyBSZXR1cm4gdGhlIGNvbnRlbnQgb2YgYSByZWZlcmVuY2Ugd2l0aG91dCBkZWZpbml0aW9uIGFzIE1hcmtkb3duLlxuZnVuY3Rpb24gcmV2ZXJ0KGgsIG5vZGUpIHtcbiAgdmFyIHN1YnR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIHN1ZmZpeCA9ICddJ1xuICB2YXIgY29udGVudHNcbiAgdmFyIGhlYWRcbiAgdmFyIHRhaWxcblxuICBpZiAoc3VidHlwZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICBzdWZmaXggKz0gJ1tdJ1xuICB9IGVsc2UgaWYgKHN1YnR5cGUgPT09ICdmdWxsJykge1xuICAgIHN1ZmZpeCArPSAnWycgKyAobm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpICsgJ10nXG4gIH1cblxuICBpZiAobm9kZS50eXBlID09PSAnaW1hZ2VSZWZlcmVuY2UnKSB7XG4gICAgcmV0dXJuIHUoJ3RleHQnLCAnIVsnICsgbm9kZS5hbHQgKyBzdWZmaXgpXG4gIH1cblxuICBjb250ZW50cyA9IGFsbChoLCBub2RlKVxuICBoZWFkID0gY29udGVudHNbMF1cblxuICBpZiAoaGVhZCAmJiBoZWFkLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGhlYWQudmFsdWUgPSAnWycgKyBoZWFkLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMudW5zaGlmdCh1KCd0ZXh0JywgJ1snKSlcbiAgfVxuXG4gIHRhaWwgPSBjb250ZW50c1tjb250ZW50cy5sZW5ndGggLSAxXVxuXG4gIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdGFpbC52YWx1ZSArPSBzdWZmaXhcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50cy5wdXNoKHUoJ3RleHQnLCBzdWZmaXgpKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbi8vIFdyYXAgYG5vZGVzYCB3aXRoIGxpbmUgZmVlZHMgYmV0d2VlbiBlYWNoIGVudHJ5LlxuLy8gT3B0aW9uYWxseSBhZGRzIGxpbmUgZmVlZHMgYXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG5mdW5jdGlvbiB3cmFwKG5vZGVzLCBsb29zZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuXG4gIGlmIChsb29zZSkge1xuICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpbmRleCkge1xuICAgICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChub2Rlc1tpbmRleF0pXG4gIH1cblxuICBpZiAobG9vc2UgJiYgbm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZGFzdDJoYXN0ID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1oYXN0JylcblxubW9kdWxlLmV4cG9ydHMgPSByZW1hcmsycmVoeXBlXG5cbi8vIEF0dGFjaGVyLlxuLy8gSWYgYSBkZXN0aW5hdGlvbiBpcyBnaXZlbiwgcnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IGhhc3QgdHJlZVxuLy8gKGJyaWRnZSBtb2RlKS5cbi8vIFdpdGhvdXQgZGVzdGluYXRpb24sIHJldHVybnMgdGhlIHRyZWU6IGZ1cnRoZXIgcGx1Z2lucyBydW4gb24gdGhhdCB0cmVlXG4vLyAobXV0YXRlIG1vZGUpLlxuZnVuY3Rpb24gcmVtYXJrMnJlaHlwZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICBpZiAoZGVzdGluYXRpb24gJiYgIWRlc3RpbmF0aW9uLnByb2Nlc3MpIHtcbiAgICBvcHRpb25zID0gZGVzdGluYXRpb25cbiAgICBkZXN0aW5hdGlvbiA9IG51bGxcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbiA/IGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykgOiBtdXRhdGUob3B0aW9ucylcbn1cblxuLy8gQnJpZGdlIG1vZGUuXG4vLyBSdW5zIHRoZSBkZXN0aW5hdGlvbiB3aXRoIHRoZSBuZXcgaGFzdCB0cmVlLlxuZnVuY3Rpb24gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybWVyKG5vZGUsIGZpbGUsIG5leHQpIHtcbiAgICBkZXN0aW5hdGlvbi5ydW4obWRhc3QyaGFzdChub2RlLCBvcHRpb25zKSwgZmlsZSwgZG9uZSlcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9XG4gIH1cbn1cblxuLy8gTXV0YXRlLW1vZGUuXG4vLyBGdXJ0aGVyIHRyYW5zZm9ybWVycyBydW4gb24gdGhlIGhhc3QgdHJlZS5cbmZ1bmN0aW9uIG11dGF0ZShvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybWVyKG5vZGUpIHtcbiAgICByZXR1cm4gbWRhc3QyaGFzdChub2RlLCBvcHRpb25zKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB1XG5cbmZ1bmN0aW9uIHUodHlwZSwgcHJvcHMsIHZhbHVlKSB7XG4gIHZhciBub2RlXG5cbiAgaWYgKFxuICAgICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICh0eXBlb2YgcHJvcHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocHJvcHMpKVxuICApIHtcbiAgICB2YWx1ZSA9IHByb3BzXG4gICAgcHJvcHMgPSB7fVxuICB9XG5cbiAgbm9kZSA9IE9iamVjdC5hc3NpZ24oe3R5cGU6IFN0cmluZyh0eXBlKX0sIHByb3BzKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSB2YWx1ZVxuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBub2RlLnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlZFxuXG5mdW5jdGlvbiBnZW5lcmF0ZWQobm9kZSkge1xuICB2YXIgcG9zaXRpb24gPSBvcHRpb25hbChvcHRpb25hbChub2RlKS5wb3NpdGlvbilcbiAgdmFyIHN0YXJ0ID0gb3B0aW9uYWwocG9zaXRpb24uc3RhcnQpXG4gIHZhciBlbmQgPSBvcHRpb25hbChwb3NpdGlvbi5lbmQpXG5cbiAgcmV0dXJuICFzdGFydC5saW5lIHx8ICFzdGFydC5jb2x1bW4gfHwgIWVuZC5saW5lIHx8ICFlbmQuY29sdW1uXG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICgnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSA6IG1hdGNoZXNGYWN0b3J5KSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0QWxsKHRlc3RzKSB7XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGxlbmd0aCA9IHRlc3RzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBtYXRjaGVzRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gY29udmVydEFsbCh0ZXN0cylcbiAgdmFyIGxlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdGFydCA9IGZhY3RvcnkoJ3N0YXJ0JylcbnZhciBlbmQgPSBmYWN0b3J5KCdlbmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uXG5cbnBvc2l0aW9uLnN0YXJ0ID0gc3RhcnRcbnBvc2l0aW9uLmVuZCA9IGVuZFxuXG5mdW5jdGlvbiBwb3NpdGlvbihub2RlKSB7XG4gIHJldHVybiB7c3RhcnQ6IHN0YXJ0KG5vZGUpLCBlbmQ6IGVuZChub2RlKX1cbn1cblxuZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gIHBvaW50LmRpc3BsYXlOYW1lID0gdHlwZVxuXG4gIHJldHVybiBwb2ludFxuXG4gIGZ1bmN0aW9uIHBvaW50KG5vZGUpIHtcbiAgICB2YXIgcG9pbnQgPSAobm9kZSAmJiBub2RlLnBvc2l0aW9uICYmIG5vZGUucG9zaXRpb25bdHlwZV0pIHx8IHt9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogcG9pbnQubGluZSB8fCBudWxsLFxuICAgICAgY29sdW1uOiBwb2ludC5jb2x1bW4gfHwgbnVsbCxcbiAgICAgIG9mZnNldDogaXNOYU4ocG9pbnQub2Zmc2V0KSA/IG51bGwgOiBwb2ludC5vZmZzZXRcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuXG4gIG9uZSh0cmVlLCBudWxsLCBbXSlcblxuICAvLyBWaXNpdCBhIHNpbmdsZSBub2RlLlxuICBmdW5jdGlvbiBvbmUobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgc3VicmVzdWx0XG5cbiAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICBzdWJyZXN1bHQgPSB0b1Jlc3VsdChhbGwobm9kZS5jaGlsZHJlbiwgcGFyZW50cy5jb25jYXQobm9kZSkpKVxuICAgICAgcmV0dXJuIHN1YnJlc3VsdFswXSA9PT0gRVhJVCA/IHN1YnJlc3VsdCA6IHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudHMpIHtcbiAgICB2YXIgbWluID0gLTFcbiAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcbiAgICB2YXIgaW5kZXggPSAocmV2ZXJzZSA/IGNoaWxkcmVuLmxlbmd0aCA6IG1pbikgKyBzdGVwXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKGluZGV4ID4gbWluICYmIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBvbmUoY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50cylcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdHlwZW9mIHJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyByZXN1bHRbMV0gOiBpbmRleCArIHN0ZXBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=