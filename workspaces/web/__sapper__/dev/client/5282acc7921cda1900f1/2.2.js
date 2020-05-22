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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvZGV0YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvZm9vdGVyLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvZm9vdG5vdGUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGluay1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGluay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvcmV2ZXJ0LmpzIiwid2VicGFjazovLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdHJpbS1saW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRXRDOztBQUVBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRFk7QUFDWixpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBTzs7Ozs7Ozs7Ozs7OztBQ0RwQjs7QUFFWjs7QUFFQSxVQUFVLG1CQUFPLENBQUMsK0RBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DWTs7QUFFWjs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyx1R0FBMkI7QUFDdkQsV0FBVyxtQkFBTyxDQUFDLG1GQUFpQjtBQUNwQyxXQUFXLG1CQUFPLENBQUMsaUVBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWMsaUNBQWlDO0FBQzVELGtCQUFrQix5QkFBeUI7QUFDM0M7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxjQUFjLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlCQUF5QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQWlEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRVk7O0FBRVo7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLGtFQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVFk7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQSxZQUFZLG1CQUFPLENBQUMsZ0RBQU87QUFDM0IsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCWTs7QUFFWjs7QUFFQSxVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQywwQkFBMEI7QUFDNUQsa0JBQWtCLHVEQUF1RDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CWTs7QUFFWjs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyxzR0FBc0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUEyQztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDakNZOztBQUVaOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFjO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxzRUFBVzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJZOztBQUVaLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFjOztBQUV0Qzs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkWTs7QUFFWjtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxzRkFBYztBQUNwQyxTQUFTLG1CQUFPLENBQUMsNEVBQVM7QUFDMUIsUUFBUSxtQkFBTyxDQUFDLDBFQUFRO0FBQ3hCLFVBQVUsbUJBQU8sQ0FBQyw4RUFBVTtBQUM1QixZQUFZLG1CQUFPLENBQUMsa0ZBQVk7QUFDaEMscUJBQXFCLG1CQUFPLENBQUMsc0dBQXNCO0FBQ25ELFlBQVksbUJBQU8sQ0FBQyxrRkFBWTtBQUNoQyxXQUFXLG1CQUFPLENBQUMsZ0ZBQVc7QUFDOUIsUUFBUSxtQkFBTyxDQUFDLDBFQUFRO0FBQ3hCLGtCQUFrQixtQkFBTyxDQUFDLGdHQUFtQjtBQUM3QyxTQUFTLG1CQUFPLENBQUMsNEVBQVM7QUFDMUIsY0FBYyxtQkFBTyxDQUFDLHdGQUFlO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLDhGQUFrQjtBQUMzQyxRQUFRLG1CQUFPLENBQUMsMEVBQVE7QUFDeEIsWUFBWSxtQkFBTyxDQUFDLG9GQUFhO0FBQ2pDLFFBQVEsbUJBQU8sQ0FBQywwRUFBUTtBQUN4QixhQUFhLG1CQUFPLENBQUMsb0ZBQWE7QUFDbEMsUUFBUSxtQkFBTyxDQUFDLDBFQUFRO0FBQ3hCLFVBQVUsbUJBQU8sQ0FBQyw4RUFBVTtBQUM1QixTQUFTLG1CQUFPLENBQUMsNEVBQVM7QUFDMUIsUUFBUSxtQkFBTyxDQUFDLDBFQUFRO0FBQ3hCLGlCQUFpQixtQkFBTyxDQUFDLDhGQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENZOztBQUVaOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyw4RUFBc0I7QUFDN0MsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyx3REFBYztBQUN0QyxhQUFhLG1CQUFPLENBQUMsc0VBQVc7QUFDaEMsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Qlk7O0FBRVosZ0JBQWdCLG1CQUFPLENBQUMsd0RBQWM7QUFDdEMsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsV0FBVyxtQkFBTyxDQUFDLGtFQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Rlk7O0FBRVo7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLGtFQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ1k7O0FBRVo7O0FBRUEsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsV0FBVyxtQkFBTyxDQUFDLGtFQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxnRUFBUTs7QUFFMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVlk7O0FBRVo7O0FBRUEsVUFBVSxtQkFBTyxDQUFDLGdFQUFROztBQUUxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsNEVBQXFCO0FBQzVDLFdBQVcsbUJBQU8sQ0FBQyxrRUFBUztBQUM1QixVQUFVLG1CQUFPLENBQUMsZ0VBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRFk7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlO0FBQy9CLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFZOztBQUVwQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLHNFQUFrQjtBQUN0QyxlQUFlLG1CQUFPLENBQUMsNEVBQXFCO0FBQzVDLGdCQUFnQixtQkFBTyxDQUFDLDhFQUFzQjtBQUM5QyxrQkFBa0IsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDbEQsVUFBVSxtQkFBTyxDQUFDLCtEQUFPO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyxxRUFBVTtBQUMvQixlQUFlLG1CQUFPLENBQUMsK0VBQVk7O0FBRW5DLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZIWTs7QUFFWjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsZ0VBQWU7QUFDL0IsVUFBVSxtQkFBTyxDQUFDLCtEQUFPOztBQUV6QixZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNZOztBQUVaOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyxnRUFBZTtBQUMvQixVQUFVLG1CQUFPLENBQUMsK0RBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQ1k7O0FBRVo7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLGdFQUFlOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JhOzs7QUFHYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYzs7QUFFNUI7O0FBRUEsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsT0FBTztBQUN2Qzs7QUFFQTtBQUNBLHFCQUFxQixFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FDakdZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFvQjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQ1k7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7O0FBRTNDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZFk7O0FBRVo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1MjgyYWNjNzkyMWNkYTE5MDBmMS8yLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkZXRhYlxuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbnZhciB0YWIgPSAweDA5XG52YXIgbGluZUZlZWQgPSAweDBhXG52YXIgY2FycmlhZ2VSZXR1cm4gPSAweDBkXG5cbi8vIFJlcGxhY2UgdGFicyB3aXRoIHNwYWNlcywgYmVpbmcgc21hcnQgYWJvdXQgd2hpY2ggY29sdW1uIHRoZSB0YWIgaXMgYXQgYW5kXG4vLyB3aGljaCBzaXplIHNob3VsZCBiZSB1c2VkLlxuZnVuY3Rpb24gZGV0YWIodmFsdWUsIHNpemUpIHtcbiAgdmFyIHN0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgdmFyIGxlbmd0aCA9IHN0cmluZyAmJiB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY29sdW1uID0gLTFcbiAgdmFyIHRhYlNpemUgPSBzaXplIHx8IDRcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgY29kZVxuICB2YXIgYWRkXG5cbiAgaWYgKCFzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RldGFiIGV4cGVjdGVkIHN0cmluZycpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNvZGUgPT09IHRhYikge1xuICAgICAgYWRkID0gdGFiU2l6ZSAtICgoY29sdW1uICsgMSkgJSB0YWJTaXplKVxuICAgICAgY29sdW1uICs9IGFkZFxuICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBpbmRleCkgKyByZXBlYXQoJyAnLCBhZGQpKVxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IGxpbmVGZWVkIHx8IGNvZGUgPT09IGNhcnJpYWdlUmV0dXJuKSB7XG4gICAgICBjb2x1bW4gPSAtMVxuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW4rK1xuICAgIH1cbiAgfVxuXG4gIHJlc3VsdHMucHVzaCh2YWx1ZS5zbGljZShzdGFydCkpXG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcblxubW9kdWxlLmV4cG9ydHMgPSBnZXREZWZpbml0aW9uRmFjdG9yeVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gR2V0IGEgZGVmaW5pdGlvbiBpbiBgbm9kZWAgYnkgYGlkZW50aWZpZXJgLlxuZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbkZhY3Rvcnkobm9kZSwgb3B0aW9ucykge1xuICByZXR1cm4gZ2V0dGVyRmFjdG9yeShnYXRoZXIobm9kZSwgb3B0aW9ucykpXG59XG5cbi8vIEdhdGhlciBhbGwgZGVmaW5pdGlvbnMgaW4gYG5vZGVgXG5mdW5jdGlvbiBnYXRoZXIobm9kZSwgb3B0aW9ucykge1xuICB2YXIgY2FjaGUgPSB7fVxuXG4gIGlmICghbm9kZSB8fCAhbm9kZS50eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtZGFzdC11dGlsLWRlZmluaXRpb25zIGV4cGVjdGVkIG5vZGUnKVxuICB9XG5cbiAgdmlzaXQobm9kZSwgJ2RlZmluaXRpb24nLCBvcHRpb25zICYmIG9wdGlvbnMuY29tbW9ubWFyayA/IGNvbW1vbm1hcmsgOiBub3JtYWwpXG5cbiAgcmV0dXJuIGNhY2hlXG5cbiAgZnVuY3Rpb24gY29tbW9ubWFyayhkZWZpbml0aW9uKSB7XG4gICAgdmFyIGlkID0gbm9ybWFsaXNlKGRlZmluaXRpb24uaWRlbnRpZmllcilcbiAgICBpZiAoIW93bi5jYWxsKGNhY2hlLCBpZCkpIHtcbiAgICAgIGNhY2hlW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWwoZGVmaW5pdGlvbikge1xuICAgIGNhY2hlW25vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXSA9IGRlZmluaXRpb25cbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCBhIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gZGVmaW5pdGlvbi1jYWNoZS5cbmZ1bmN0aW9uIGdldHRlckZhY3RvcnkoY2FjaGUpIHtcbiAgcmV0dXJuIGdldHRlclxuXG4gIC8vIEdldCBhIG5vZGUgZnJvbSB0aGUgYm91bmQgZGVmaW5pdGlvbi1jYWNoZS5cbiAgZnVuY3Rpb24gZ2V0dGVyKGlkZW50aWZpZXIpIHtcbiAgICB2YXIgaWQgPSBpZGVudGlmaWVyICYmIG5vcm1hbGlzZShpZGVudGlmaWVyKVxuICAgIHJldHVybiBpZCAmJiBvd24uY2FsbChjYWNoZSwgaWQpID8gY2FjaGVbaWRdIDogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZShpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnRvVXBwZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbGxcblxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxuZnVuY3Rpb24gYWxsKGgsIHBhcmVudCkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuICB2YXIgaGVhZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gb25lKGgsIG5vZGVzW2luZGV4XSwgcGFyZW50KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKGluZGV4ICYmIG5vZGVzW2luZGV4IC0gMV0udHlwZSA9PT0gJ2JyZWFrJykge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoL15cXHMrLywgJycpXG4gICAgICAgIH1cblxuICAgICAgICBoZWFkID0gcmVzdWx0LmNoaWxkcmVuICYmIHJlc3VsdC5jaGlsZHJlblswXVxuXG4gICAgICAgIGlmIChoZWFkICYmIGhlYWQudmFsdWUpIHtcbiAgICAgICAgICBoZWFkLnZhbHVlID0gaGVhZC52YWx1ZS5yZXBsYWNlKC9eXFxzKy8sICcnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlRm9vdG5vdGVzXG5cbnZhciB0aGVtYXRpY0JyZWFrID0gcmVxdWlyZSgnLi9oYW5kbGVycy90aGVtYXRpYy1icmVhaycpXG52YXIgbGlzdCA9IHJlcXVpcmUoJy4vaGFuZGxlcnMvbGlzdCcpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcCcpXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9vdG5vdGVzKGgpIHtcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IGguZm9vdG5vdGVCeUlkXG4gIHZhciBmb290bm90ZU9yZGVyID0gaC5mb290bm90ZU9yZGVyXG4gIHZhciBsZW5ndGggPSBmb290bm90ZU9yZGVyLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGlzdEl0ZW1zID0gW11cbiAgdmFyIGRlZlxuICB2YXIgYmFja1JlZmVyZW5jZVxuICB2YXIgY29udGVudFxuICB2YXIgdGFpbFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGVmID0gZm9vdG5vdGVCeUlkW2Zvb3Rub3RlT3JkZXJbaW5kZXhdLnRvVXBwZXJDYXNlKCldXG5cbiAgICBpZiAoIWRlZikge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb250ZW50ID0gZGVmLmNoaWxkcmVuLmNvbmNhdCgpXG4gICAgdGFpbCA9IGNvbnRlbnRbY29udGVudC5sZW5ndGggLSAxXVxuICAgIGJhY2tSZWZlcmVuY2UgPSB7XG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICB1cmw6ICcjZm5yZWYtJyArIGRlZi5pZGVudGlmaWVyLFxuICAgICAgZGF0YToge2hQcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2Zvb3Rub3RlLWJhY2tyZWYnXX19LFxuICAgICAgY2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+KGqSd9XVxuICAgIH1cblxuICAgIGlmICghdGFpbCB8fCB0YWlsLnR5cGUgIT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICB0YWlsID0ge3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogW119XG4gICAgICBjb250ZW50LnB1c2godGFpbClcbiAgICB9XG5cbiAgICB0YWlsLmNoaWxkcmVuLnB1c2goYmFja1JlZmVyZW5jZSlcblxuICAgIGxpc3RJdGVtcy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICBkYXRhOiB7aFByb3BlcnRpZXM6IHtpZDogJ2ZuLScgKyBkZWYuaWRlbnRpZmllcn19LFxuICAgICAgY2hpbGRyZW46IGNvbnRlbnQsXG4gICAgICBwb3NpdGlvbjogZGVmLnBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIGlmIChsaXN0SXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBoKFxuICAgIG51bGwsXG4gICAgJ2RpdicsXG4gICAge2NsYXNzTmFtZTogWydmb290bm90ZXMnXX0sXG4gICAgd3JhcChcbiAgICAgIFtcbiAgICAgICAgdGhlbWF0aWNCcmVhayhoKSxcbiAgICAgICAgbGlzdChoLCB7dHlwZTogJ2xpc3QnLCBvcmRlcmVkOiB0cnVlLCBjaGlsZHJlbjogbGlzdEl0ZW1zfSlcbiAgICAgIF0sXG4gICAgICB0cnVlXG4gICAgKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlXG5cbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gYmxvY2txdW90ZShoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdibG9ja3F1b3RlJywgd3JhcChhbGwoaCwgbm9kZSksIHRydWUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGhhcmRCcmVhayhoLCBub2RlKSB7XG4gIHJldHVybiBbaChub2RlLCAnYnInKSwgdSgndGV4dCcsICdcXG4nKV1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVcblxudmFyIGRldGFiID0gcmVxdWlyZSgnZGV0YWInKVxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gY29kZShoLCBub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWUgPyBkZXRhYihub2RlLnZhbHVlICsgJ1xcbicpIDogJydcbiAgdmFyIGxhbmcgPSBub2RlLmxhbmcgJiYgbm9kZS5sYW5nLm1hdGNoKC9eW14gXFx0XSsoPz1bIFxcdF18JCkvKVxuICB2YXIgcHJvcHMgPSB7fVxuXG4gIGlmIChsYW5nKSB7XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gWydsYW5ndWFnZS0nICsgbGFuZ11cbiAgfVxuXG4gIHJldHVybiBoKG5vZGUucG9zaXRpb24sICdwcmUnLCBbaChub2RlLCAnY29kZScsIHByb3BzLCBbdSgndGV4dCcsIHZhbHVlKV0pXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZGVsJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGVtcGhhc2lzKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2VtJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVSZWZlcmVuY2VcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVPcmRlciA9IGguZm9vdG5vdGVPcmRlclxuICB2YXIgaWRlbnRpZmllciA9IFN0cmluZyhub2RlLmlkZW50aWZpZXIpXG5cbiAgaWYgKGZvb3Rub3RlT3JkZXIuaW5kZXhPZihpZGVudGlmaWVyKSA9PT0gLTEpIHtcbiAgICBmb290bm90ZU9yZGVyLnB1c2goaWRlbnRpZmllcilcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUucG9zaXRpb24sICdzdXAnLCB7aWQ6ICdmbnJlZi0nICsgaWRlbnRpZmllcn0sIFtcbiAgICBoKG5vZGUsICdhJywge2hyZWY6ICcjZm4tJyArIGlkZW50aWZpZXIsIGNsYXNzTmFtZTogWydmb290bm90ZS1yZWYnXX0sIFtcbiAgICAgIHUoJ3RleHQnLCBub2RlLmxhYmVsIHx8IGlkZW50aWZpZXIpXG4gICAgXSlcbiAgXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlXG5cbnZhciBmb290bm90ZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vZm9vdG5vdGUtcmVmZXJlbmNlJylcblxuZnVuY3Rpb24gZm9vdG5vdGUoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGlkZW50aWZpZXIgPSAxXG5cbiAgd2hpbGUgKGlkZW50aWZpZXIgaW4gZm9vdG5vdGVCeUlkKSB7XG4gICAgaWRlbnRpZmllcisrXG4gIH1cblxuICBpZGVudGlmaWVyID0gU3RyaW5nKGlkZW50aWZpZXIpXG5cbiAgLy8gTm8gbmVlZCB0byBjaGVjayBpZiBgaWRlbnRpZmllcmAgZXhpc3RzIGluIGBmb290bm90ZU9yZGVyYCwgaXTigJlzIGd1YXJhbnRlZWRcbiAgLy8gdG8gbm90IGV4aXN0IGJlY2F1c2Ugd2UganVzdCBnZW5lcmF0ZWQgaXQuXG4gIGZvb3Rub3RlT3JkZXIucHVzaChpZGVudGlmaWVyKVxuXG4gIGZvb3Rub3RlQnlJZFtpZGVudGlmaWVyXSA9IHtcbiAgICB0eXBlOiAnZm9vdG5vdGVEZWZpbml0aW9uJyxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbn1dLFxuICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gIH1cblxuICByZXR1cm4gZm9vdG5vdGVSZWZlcmVuY2UoaCwge1xuICAgIHR5cGU6ICdmb290bm90ZVJlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGluZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gaGVhZGluZyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdoJyArIG5vZGUuZGVwdGgsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWxcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuLy8gUmV0dXJuIGVpdGhlciBhIGByYXdgIG5vZGUgaW4gZGFuZ2Vyb3VzIG1vZGUsIG90aGVyd2lzZSBub3RoaW5nLlxuZnVuY3Rpb24gaHRtbChoLCBub2RlKSB7XG4gIHJldHVybiBoLmRhbmdlcm91cyA/IGguYXVnbWVudChub2RlLCB1KCdyYXcnLCBub2RlLnZhbHVlKSkgOiBudWxsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciByZXZlcnQgPSByZXF1aXJlKCcuLi9yZXZlcnQnKVxuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBkZWYgPSBoLmRlZmluaXRpb24obm9kZS5pZGVudGlmaWVyKVxuICB2YXIgcHJvcHNcblxuICBpZiAoIWRlZikge1xuICAgIHJldHVybiByZXZlcnQoaCwgbm9kZSlcbiAgfVxuXG4gIHByb3BzID0ge3NyYzogbm9ybWFsaXplKGRlZi51cmwgfHwgJycpLCBhbHQ6IG5vZGUuYWx0fVxuXG4gIGlmIChkZWYudGl0bGUgIT09IG51bGwgJiYgZGVmLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IGRlZi50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2ltZycsIHByb3BzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbmZ1bmN0aW9uIGltYWdlKGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge3NyYzogbm9ybWFsaXplKG5vZGUudXJsKSwgYWx0OiBub2RlLmFsdH1cblxuICBpZiAobm9kZS50aXRsZSAhPT0gbnVsbCAmJiBub2RlLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IG5vZGUudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdpbWcnLCBwcm9wcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi9ibG9ja3F1b3RlJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL2JyZWFrJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vY29kZScpLFxuICBkZWxldGU6IHJlcXVpcmUoJy4vZGVsZXRlJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL2VtcGhhc2lzJyksXG4gIGZvb3Rub3RlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2Zvb3Rub3RlLXJlZmVyZW5jZScpLFxuICBmb290bm90ZTogcmVxdWlyZSgnLi9mb290bm90ZScpLFxuICBoZWFkaW5nOiByZXF1aXJlKCcuL2hlYWRpbmcnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi9odG1sJyksXG4gIGltYWdlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2ltYWdlLXJlZmVyZW5jZScpLFxuICBpbWFnZTogcmVxdWlyZSgnLi9pbWFnZScpLFxuICBpbmxpbmVDb2RlOiByZXF1aXJlKCcuL2lubGluZS1jb2RlJyksXG4gIGxpbmtSZWZlcmVuY2U6IHJlcXVpcmUoJy4vbGluay1yZWZlcmVuY2UnKSxcbiAgbGluazogcmVxdWlyZSgnLi9saW5rJyksXG4gIGxpc3RJdGVtOiByZXF1aXJlKCcuL2xpc3QtaXRlbScpLFxuICBsaXN0OiByZXF1aXJlKCcuL2xpc3QnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3BhcmFncmFwaCcpLFxuICByb290OiByZXF1aXJlKCcuL3Jvb3QnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3N0cm9uZycpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZScpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3RleHQnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi90aGVtYXRpYy1icmVhaycpLFxuICB0b21sOiBpZ25vcmUsXG4gIHlhbWw6IGlnbm9yZSxcbiAgZGVmaW5pdGlvbjogaWdub3JlLFxuICBmb290bm90ZURlZmluaXRpb246IGlnbm9yZVxufVxuXG4vLyBSZXR1cm4gbm90aGluZyBmb3Igbm9kZXMgdGhhdCBhcmUgaWdub3JlZC5cbmZ1bmN0aW9uIGlnbm9yZSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcblxudmFyIGNvbGxhcHNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaW5saW5lQ29kZShoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdjb2RlJywgW3UoJ3RleHQnLCBjb2xsYXBzZShub2RlLnZhbHVlKSldKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1JlZmVyZW5jZVxuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciByZXZlcnQgPSByZXF1aXJlKCcuLi9yZXZlcnQnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpbmtSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZGVmID0gaC5kZWZpbml0aW9uKG5vZGUuaWRlbnRpZmllcilcbiAgdmFyIHByb3BzXG5cbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm4gcmV2ZXJ0KGgsIG5vZGUpXG4gIH1cblxuICBwcm9wcyA9IHtocmVmOiBub3JtYWxpemUoZGVmLnVybCB8fCAnJyl9XG5cbiAgaWYgKGRlZi50aXRsZSAhPT0gbnVsbCAmJiBkZWYudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gZGVmLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnYScsIHByb3BzLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5cbmZ1bmN0aW9uIGxpbmsoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7aHJlZjogbm9ybWFsaXplKG5vZGUudXJsKX1cblxuICBpZiAobm9kZS50aXRsZSAhPT0gbnVsbCAmJiBub2RlLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IG5vZGUudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdhJywgcHJvcHMsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGgsIG5vZGUsIHBhcmVudCkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBoZWFkID0gY2hpbGRyZW5bMF1cbiAgdmFyIHJhdyA9IGFsbChoLCBub2RlKVxuICB2YXIgbG9vc2UgPSBwYXJlbnQgPyBsaXN0TG9vc2UocGFyZW50KSA6IGxpc3RJdGVtTG9vc2Uobm9kZSlcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIHJlc3VsdFxuICB2YXIgY29udGFpbmVyXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBjaGlsZFxuXG4gIC8vIFRpZ2h0IGxpc3RzIHNob3VsZCBub3QgcmVuZGVyIGBwYXJhZ3JhcGhgIG5vZGVzIGFzIGBwYCBlbGVtZW50cy5cbiAgaWYgKGxvb3NlKSB7XG4gICAgcmVzdWx0ID0gcmF3XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gW11cbiAgICBsZW5ndGggPSByYXcubGVuZ3RoXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoaWxkID0gcmF3W2luZGV4XVxuXG4gICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ3AnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGQuY2hpbGRyZW4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChjaGlsZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG5vZGUuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKGxvb3NlICYmICghaGVhZCB8fCBoZWFkLnR5cGUgIT09ICdwYXJhZ3JhcGgnKSkge1xuICAgICAgcmVzdWx0LnVuc2hpZnQoaChudWxsLCAncCcsIFtdKSlcbiAgICB9XG5cbiAgICBjb250YWluZXIgPSBsb29zZSA/IHJlc3VsdFswXS5jaGlsZHJlbiA6IHJlc3VsdFxuXG4gICAgaWYgKGNvbnRhaW5lci5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnRhaW5lci51bnNoaWZ0KHUoJ3RleHQnLCAnICcpKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci51bnNoaWZ0KFxuICAgICAgaChudWxsLCAnaW5wdXQnLCB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGNoZWNrZWQ6IG5vZGUuY2hlY2tlZCxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgLy8gQWNjb3JkaW5nIHRvIGdpdGh1Yi1tYXJrZG93bi1jc3MsIHRoaXMgY2xhc3MgaGlkZXMgYnVsbGV0LlxuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ2l0aHViLW1hcmtkb3duLWNzcz4uXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gWyd0YXNrLWxpc3QtaXRlbSddXG4gIH1cblxuICBpZiAobG9vc2UgJiYgcmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJlc3VsdCA9IHdyYXAocmVzdWx0LCB0cnVlKVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2xpJywgcHJvcHMsIHJlc3VsdClcbn1cblxuZnVuY3Rpb24gbGlzdExvb3NlKG5vZGUpIHtcbiAgdmFyIGxvb3NlID0gbm9kZS5zcHJlYWRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCFsb29zZSAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbG9vc2UgPSBsaXN0SXRlbUxvb3NlKGNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBsb29zZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbUxvb3NlKG5vZGUpIHtcbiAgdmFyIHNwcmVhZCA9IG5vZGUuc3ByZWFkXG5cbiAgcmV0dXJuIHNwcmVhZCA9PT0gdW5kZWZpbmVkIHx8IHNwcmVhZCA9PT0gbnVsbFxuICAgID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgOiBzcHJlYWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0KGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIG5hbWUgPSBub2RlLm9yZGVyZWQgPyAnb2wnIDogJ3VsJ1xuICB2YXIgaXRlbXNcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICh0eXBlb2Ygbm9kZS5zdGFydCA9PT0gJ251bWJlcicgJiYgbm9kZS5zdGFydCAhPT0gMSkge1xuICAgIHByb3BzLnN0YXJ0ID0gbm9kZS5zdGFydFxuICB9XG5cbiAgaXRlbXMgPSBhbGwoaCwgbm9kZSlcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgLy8gTGlrZSBHaXRIdWIsIGFkZCBhIGNsYXNzIGZvciBjdXN0b20gc3R5bGluZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBpdGVtc1tpbmRleF0ucHJvcGVydGllcy5jbGFzc05hbWUgJiZcbiAgICAgIGl0ZW1zW2luZGV4XS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5pbmRleE9mKCd0YXNrLWxpc3QtaXRlbScpICE9PSAtMVxuICAgICkge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gWydjb250YWlucy10YXNrLWxpc3QnXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChub2RlLCBuYW1lLCBwcm9wcywgd3JhcChpdGVtcywgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdwJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiByb290KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCdyb290Jywgd3JhcChhbGwoaCwgbm9kZSkpKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gc3Ryb25nKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3N0cm9uZycsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiB0YWJsZShoLCBub2RlKSB7XG4gIHZhciByb3dzID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaW5kZXggPSByb3dzLmxlbmd0aFxuICB2YXIgYWxpZ24gPSBub2RlLmFsaWduXG4gIHZhciBhbGlnbkxlbmd0aCA9IGFsaWduLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc1xuICB2YXIgcm93XG4gIHZhciBvdXRcbiAgdmFyIG5hbWVcbiAgdmFyIGNlbGxcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJvdyA9IHJvd3NbaW5kZXhdLmNoaWxkcmVuXG4gICAgbmFtZSA9IGluZGV4ID09PSAwID8gJ3RoJyA6ICd0ZCdcbiAgICBwb3MgPSBhbGlnbkxlbmd0aFxuICAgIG91dCA9IFtdXG5cbiAgICB3aGlsZSAocG9zLS0pIHtcbiAgICAgIGNlbGwgPSByb3dbcG9zXVxuICAgICAgb3V0W3Bvc10gPSBoKGNlbGwsIG5hbWUsIHthbGlnbjogYWxpZ25bcG9zXX0sIGNlbGwgPyBhbGwoaCwgY2VsbCkgOiBbXSlcbiAgICB9XG5cbiAgICByZXN1bHRbaW5kZXhdID0gaChyb3dzW2luZGV4XSwgJ3RyJywgd3JhcChvdXQsIHRydWUpKVxuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgbm9kZSxcbiAgICAndGFibGUnLFxuICAgIHdyYXAoXG4gICAgICBbXG4gICAgICAgIGgocmVzdWx0WzBdLnBvc2l0aW9uLCAndGhlYWQnLCB3cmFwKFtyZXN1bHRbMF1dLCB0cnVlKSksXG4gICAgICAgIGgoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHBvc2l0aW9uLnN0YXJ0KHJlc3VsdFsxXSksXG4gICAgICAgICAgICBlbmQ6IHBvc2l0aW9uLmVuZChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICB3cmFwKHJlc3VsdC5zbGljZSgxKSwgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB0cmltTGluZXMgPSByZXF1aXJlKCd0cmltLWxpbmVzJylcblxuZnVuY3Rpb24gdGV4dChoLCBub2RlKSB7XG4gIHJldHVybiBoLmF1Z21lbnQobm9kZSwgdSgndGV4dCcsIHRyaW1MaW5lcyhub2RlLnZhbHVlKSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY0JyZWFrXG5cbmZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnaHInKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdG9IYXN0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIGdlbmVyYXRlZCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtZ2VuZXJhdGVkJylcbnZhciBkZWZpbml0aW9ucyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMnKVxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcbnZhciBmb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpXG52YXIgaGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZXJzJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbnZhciBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSBmYWxzZVxuXG4vLyBGYWN0b3J5IHRvIHRyYW5zZm9ybS5cbmZ1bmN0aW9uIGZhY3RvcnkodHJlZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgLy8gSXNzdWUgYSB3YXJuaW5nIGlmIHRoZSBkZXByZWNhdGVkIHRhZyAnYWxsb3dEYW5nZXJvdXNIVE1MJyBpcyB1c2VkXG4gIGlmIChzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUwgIT09IHVuZGVmaW5lZCAmJiAhZGVwcmVjYXRpb25XYXJuaW5nSXNzdWVkKSB7XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nSXNzdWVkID0gdHJ1ZVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdtZGFzdC11dGlsLXRvLWhhc3Q6IGRlcHJlY2F0aW9uOiBgYWxsb3dEYW5nZXJvdXNIVE1MYCBpcyBub25zdGFuZGFyZCwgdXNlIGBhbGxvd0Rhbmdlcm91c0h0bWxgIGluc3RlYWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIGRhbmdlcm91cyA9IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSHRtbCB8fCBzZXR0aW5ncy5hbGxvd0Rhbmdlcm91c0hUTUxcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IHt9XG5cbiAgaC5kYW5nZXJvdXMgPSBkYW5nZXJvdXNcbiAgaC5kZWZpbml0aW9uID0gZGVmaW5pdGlvbnModHJlZSwgc2V0dGluZ3MpXG4gIGguZm9vdG5vdGVCeUlkID0gZm9vdG5vdGVCeUlkXG4gIGguZm9vdG5vdGVPcmRlciA9IFtdXG4gIGguYXVnbWVudCA9IGF1Z21lbnRcbiAgaC5oYW5kbGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGhhbmRsZXJzLCBzZXR0aW5ncy5oYW5kbGVycylcbiAgaC51bmtub3duSGFuZGxlciA9IHNldHRpbmdzLnVua25vd25IYW5kbGVyXG5cbiAgdmlzaXQodHJlZSwgJ2Zvb3Rub3RlRGVmaW5pdGlvbicsIG9uZm9vdG5vdGVkZWZpbml0aW9uKVxuXG4gIHJldHVybiBoXG5cbiAgLy8gRmluYWxpc2UgdGhlIGNyZWF0ZWQgYHJpZ2h0YCwgYSBoYXN0IG5vZGUsIGZyb20gYGxlZnRgLCBhbiBtZGFzdCBub2RlLlxuICBmdW5jdGlvbiBhdWdtZW50KGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGRhdGFcbiAgICB2YXIgY3R4XG5cbiAgICAvLyBIYW5kbGUgYGRhdGEuaE5hbWVgLCBgZGF0YS5oUHJvcGVydGllcywgYGRhdGEuaENoaWxkcmVuYC5cbiAgICBpZiAobGVmdCAmJiAnZGF0YScgaW4gbGVmdCkge1xuICAgICAgZGF0YSA9IGxlZnQuZGF0YVxuXG4gICAgICBpZiAocmlnaHQudHlwZSA9PT0gJ2VsZW1lbnQnICYmIGRhdGEuaE5hbWUpIHtcbiAgICAgICAgcmlnaHQudGFnTmFtZSA9IGRhdGEuaE5hbWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0LnR5cGUgPT09ICdlbGVtZW50JyAmJiBkYXRhLmhQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJpZ2h0LnByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCByaWdodC5wcm9wZXJ0aWVzLCBkYXRhLmhQcm9wZXJ0aWVzKVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHQuY2hpbGRyZW4gJiYgZGF0YS5oQ2hpbGRyZW4pIHtcbiAgICAgICAgcmlnaHQuY2hpbGRyZW4gPSBkYXRhLmhDaGlsZHJlblxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eCA9IGxlZnQgJiYgbGVmdC5wb3NpdGlvbiA/IGxlZnQgOiB7cG9zaXRpb246IGxlZnR9XG5cbiAgICBpZiAoIWdlbmVyYXRlZChjdHgpKSB7XG4gICAgICByaWdodC5wb3NpdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uLnN0YXJ0KGN0eCksXG4gICAgICAgIGVuZDogcG9zaXRpb24uZW5kKGN0eClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGZvciBgbm9kZWAuXG4gIGZ1bmN0aW9uIGgobm9kZSwgdGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKFxuICAgICAgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4gPT09IG51bGwpICYmXG4gICAgICB0eXBlb2YgcHJvcHMgPT09ICdvYmplY3QnICYmXG4gICAgICAnbGVuZ3RoJyBpbiBwcm9wc1xuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSBwcm9wc1xuICAgICAgcHJvcHMgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBhdWdtZW50KG5vZGUsIHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICBwcm9wZXJ0aWVzOiBwcm9wcyB8fCB7fSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvb3Rub3RlZGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdmFyIGlkID0gU3RyaW5nKGRlZmluaXRpb24uaWRlbnRpZmllcikudG9VcHBlckNhc2UoKVxuXG4gICAgLy8gTWltaWNrIENNIGJlaGF2aW9yIG9mIGxpbmsgZGVmaW5pdGlvbnMuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvYmxvYi84ZDQ4ZTU3L2luZGV4LmpzI0wyNj4uXG4gICAgaWYgKCFvd24uY2FsbChmb290bm90ZUJ5SWQsIGlkKSkge1xuICAgICAgZm9vdG5vdGVCeUlkW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtIGB0cmVlYCwgd2hpY2ggaXMgYW4gbWRhc3Qgbm9kZSwgdG8gYSBoYXN0IG5vZGUuXG5mdW5jdGlvbiB0b0hhc3QodHJlZSwgb3B0aW9ucykge1xuICB2YXIgaCA9IGZhY3RvcnkodHJlZSwgb3B0aW9ucylcbiAgdmFyIG5vZGUgPSBvbmUoaCwgdHJlZSlcbiAgdmFyIGZvb3QgPSBmb290ZXIoaClcblxuICBpZiAoZm9vdCkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLmNvbmNhdCh1KCd0ZXh0JywgJ1xcbicpLCBmb290KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFRyYW5zZm9ybSBhbiB1bmtub3duIG5vZGUuXG5mdW5jdGlvbiB1bmtub3duKGgsIG5vZGUpIHtcbiAgaWYgKHRleHQobm9kZSkpIHtcbiAgICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHUoJ3RleHQnLCBub2RlLnZhbHVlKSlcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdkaXYnLCBhbGwoaCwgbm9kZSkpXG59XG5cbi8vIFZpc2l0IGEgbm9kZS5cbmZ1bmN0aW9uIG9uZShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHR5cGUgPSBub2RlICYmIG5vZGUudHlwZVxuICB2YXIgZm4gPSBvd24uY2FsbChoLmhhbmRsZXJzLCB0eXBlKSA/IGguaGFuZGxlcnNbdHlwZV0gOiBoLnVua25vd25IYW5kbGVyXG5cbiAgLy8gRmFpbCBvbiBub24tbm9kZXMuXG4gIGlmICghdHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxuXG4gIHJldHVybiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4gOiB1bmtub3duKShoLCBub2RlLCBwYXJlbnQpXG59XG5cbi8vIENoZWNrIGlmIHRoZSBub2RlIHNob3VsZCBiZSByZW5kZXJlcmVkIGFzIGEgdGV4dCBub2RlLlxuZnVuY3Rpb24gdGV4dChub2RlKSB7XG4gIHZhciBkYXRhID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgaWYgKFxuICAgIG93bi5jYWxsKGRhdGEsICdoTmFtZScpIHx8XG4gICAgb3duLmNhbGwoZGF0YSwgJ2hQcm9wZXJ0aWVzJykgfHxcbiAgICBvd24uY2FsbChkYXRhLCAnaENoaWxkcmVuJylcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXZlcnRcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciBhbGwgPSByZXF1aXJlKCcuL2FsbCcpXG5cbi8vIFJldHVybiB0aGUgY29udGVudCBvZiBhIHJlZmVyZW5jZSB3aXRob3V0IGRlZmluaXRpb24gYXMgTWFya2Rvd24uXG5mdW5jdGlvbiByZXZlcnQoaCwgbm9kZSkge1xuICB2YXIgc3VidHlwZSA9IG5vZGUucmVmZXJlbmNlVHlwZVxuICB2YXIgc3VmZml4ID0gJ10nXG4gIHZhciBjb250ZW50c1xuICB2YXIgaGVhZFxuICB2YXIgdGFpbFxuXG4gIGlmIChzdWJ0eXBlID09PSAnY29sbGFwc2VkJykge1xuICAgIHN1ZmZpeCArPSAnW10nXG4gIH0gZWxzZSBpZiAoc3VidHlwZSA9PT0gJ2Z1bGwnKSB7XG4gICAgc3VmZml4ICs9ICdbJyArIChub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcikgKyAnXSdcbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgPT09ICdpbWFnZVJlZmVyZW5jZScpIHtcbiAgICByZXR1cm4gdSgndGV4dCcsICchWycgKyBub2RlLmFsdCArIHN1ZmZpeClcbiAgfVxuXG4gIGNvbnRlbnRzID0gYWxsKGgsIG5vZGUpXG4gIGhlYWQgPSBjb250ZW50c1swXVxuXG4gIGlmIChoZWFkICYmIGhlYWQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgaGVhZC52YWx1ZSA9ICdbJyArIGhlYWQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50cy51bnNoaWZ0KHUoJ3RleHQnLCAnWycpKVxuICB9XG5cbiAgdGFpbCA9IGNvbnRlbnRzW2NvbnRlbnRzLmxlbmd0aCAtIDFdXG5cbiAgaWYgKHRhaWwgJiYgdGFpbC50eXBlID09PSAndGV4dCcpIHtcbiAgICB0YWlsLnZhbHVlICs9IHN1ZmZpeFxuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRzLnB1c2godSgndGV4dCcsIHN1ZmZpeCkpXG4gIH1cblxuICByZXR1cm4gY29udGVudHNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuLy8gV3JhcCBgbm9kZXNgIHdpdGggbGluZSBmZWVkcyBiZXR3ZWVuIGVhY2ggZW50cnkuXG4vLyBPcHRpb25hbGx5IGFkZHMgbGluZSBmZWVkcyBhdCB0aGUgc3RhcnQgYW5kIGVuZC5cbmZ1bmN0aW9uIHdyYXAobm9kZXMsIGxvb3NlKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG5cbiAgaWYgKGxvb3NlKSB7XG4gICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4KSB7XG4gICAgICByZXN1bHQucHVzaCh1KCd0ZXh0JywgJ1xcbicpKVxuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG5vZGVzW2luZGV4XSlcbiAgfVxuXG4gIGlmIChsb29zZSAmJiBub2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICByZXN1bHQucHVzaCh1KCd0ZXh0JywgJ1xcbicpKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGVuY29kZUNhY2hlID0ge307XG5cblxuLy8gQ3JlYXRlIGEgbG9va3VwIGFycmF5IHdoZXJlIGFueXRoaW5nIGJ1dCBjaGFyYWN0ZXJzIGluIGBjaGFyc2Agc3RyaW5nXG4vLyBhbmQgYWxwaGFudW1lcmljIGNoYXJzIGlzIHBlcmNlbnQtZW5jb2RlZC5cbi8vXG5mdW5jdGlvbiBnZXRFbmNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG5cbiAgICBpZiAoL15bMC05YS16XSQvaS50ZXN0KGNoKSkge1xuICAgICAgLy8gYWx3YXlzIGFsbG93IHVuZW5jb2RlZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVyc1xuICAgICAgY2FjaGUucHVzaChjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLnB1c2goJyUnICsgKCcwJyArIGkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtleGNsdWRlLmNoYXJDb2RlQXQoaSldID0gZXhjbHVkZVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5XG4vLyBlbmNvZGVkIHNlcXVlbmNlcy5cbi8vXG4vLyAgLSBzdHJpbmcgICAgICAgLSBzdHJpbmcgdG8gZW5jb2RlXG4vLyAgLSBleGNsdWRlICAgICAgLSBsaXN0IG9mIGNoYXJhY3RlcnMgdG8gaWdub3JlIChpbiBhZGRpdGlvbiB0byBhLXpBLVowLTkpXG4vLyAgLSBrZWVwRXNjYXBlZCAgLSBkb24ndCBlbmNvZGUgJyUnIGluIGEgY29ycmVjdCBlc2NhcGUgc2VxdWVuY2UgKGRlZmF1bHQ6IHRydWUpXG4vL1xuZnVuY3Rpb24gZW5jb2RlKHN0cmluZywgZXhjbHVkZSwga2VlcEVzY2FwZWQpIHtcbiAgdmFyIGksIGwsIGNvZGUsIG5leHRDb2RlLCBjYWNoZSxcbiAgICAgIHJlc3VsdCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBlbmNvZGUoc3RyaW5nLCBrZWVwRXNjYXBlZClcbiAgICBrZWVwRXNjYXBlZCAgPSBleGNsdWRlO1xuICAgIGV4Y2x1ZGUgPSBlbmNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZWVwRXNjYXBlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBrZWVwRXNjYXBlZCA9IHRydWU7XG4gIH1cblxuICBjYWNoZSA9IGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIGZvciAoaSA9IDAsIGwgPSBzdHJpbmcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGtlZXBFc2NhcGVkICYmIGNvZGUgPT09IDB4MjUgLyogJSAqLyAmJiBpICsgMiA8IGwpIHtcbiAgICAgIGlmICgvXlswLTlhLWZdezJ9JC9pLnRlc3Qoc3RyaW5nLnNsaWNlKGkgKyAxLCBpICsgMykpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzdHJpbmcuc2xpY2UoaSwgaSArIDMpO1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICByZXN1bHQgKz0gY2FjaGVbY29kZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERGRkYpIHtcbiAgICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRiAmJiBpICsgMSA8IGwpIHtcbiAgICAgICAgbmV4dENvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGlmIChuZXh0Q29kZSA+PSAweERDMDAgJiYgbmV4dENvZGUgPD0gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0gKyBzdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnJUVGJUJGJUJEJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmVuY29kZS5kZWZhdWx0Q2hhcnMgICA9IFwiOy8/OkAmPSskLC1fLiF+KicoKSNcIjtcbmVuY29kZS5jb21wb25lbnRDaGFycyA9IFwiLV8uIX4qJygpXCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1kYXN0Mmhhc3QgPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLWhhc3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbWFyazJyZWh5cGVcblxuLy8gQXR0YWNoZXIuXG4vLyBJZiBhIGRlc3RpbmF0aW9uIGlzIGdpdmVuLCBydW5zIHRoZSBkZXN0aW5hdGlvbiB3aXRoIHRoZSBuZXcgaGFzdCB0cmVlXG4vLyAoYnJpZGdlIG1vZGUpLlxuLy8gV2l0aG91dCBkZXN0aW5hdGlvbiwgcmV0dXJucyB0aGUgdHJlZTogZnVydGhlciBwbHVnaW5zIHJ1biBvbiB0aGF0IHRyZWVcbi8vIChtdXRhdGUgbW9kZSkuXG5mdW5jdGlvbiByZW1hcmsycmVoeXBlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChkZXN0aW5hdGlvbiAmJiAhZGVzdGluYXRpb24ucHJvY2Vzcykge1xuICAgIG9wdGlvbnMgPSBkZXN0aW5hdGlvblxuICAgIGRlc3RpbmF0aW9uID0gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uID8gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSA6IG11dGF0ZShvcHRpb25zKVxufVxuXG4vLyBCcmlkZ2UgbW9kZS5cbi8vIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWUuXG5mdW5jdGlvbiBicmlkZ2UoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtZXIobm9kZSwgZmlsZSwgbmV4dCkge1xuICAgIGRlc3RpbmF0aW9uLnJ1bihtZGFzdDJoYXN0KG5vZGUsIG9wdGlvbnMpLCBmaWxlLCBkb25lKVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIG5leHQoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBNdXRhdGUtbW9kZS5cbi8vIEZ1cnRoZXIgdHJhbnNmb3JtZXJzIHJ1biBvbiB0aGUgaGFzdCB0cmVlLlxuZnVuY3Rpb24gbXV0YXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtZXIobm9kZSkge1xuICAgIHJldHVybiBtZGFzdDJoYXN0KG5vZGUsIG9wdGlvbnMpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1MaW5lc1xuXG52YXIgd3MgPSAvWyBcXHRdKlxcbitbIFxcdF0qL2dcbnZhciBuZXdsaW5lID0gJ1xcbidcblxuZnVuY3Rpb24gdHJpbUxpbmVzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2Uod3MsIG5ld2xpbmUpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB1XG5cbmZ1bmN0aW9uIHUodHlwZSwgcHJvcHMsIHZhbHVlKSB7XG4gIHZhciBub2RlXG5cbiAgaWYgKFxuICAgICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICh0eXBlb2YgcHJvcHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocHJvcHMpKVxuICApIHtcbiAgICB2YWx1ZSA9IHByb3BzXG4gICAgcHJvcHMgPSB7fVxuICB9XG5cbiAgbm9kZSA9IE9iamVjdC5hc3NpZ24oe3R5cGU6IFN0cmluZyh0eXBlKX0sIHByb3BzKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSB2YWx1ZVxuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBub2RlLnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlZFxuXG5mdW5jdGlvbiBnZW5lcmF0ZWQobm9kZSkge1xuICB2YXIgcG9zaXRpb24gPSBvcHRpb25hbChvcHRpb25hbChub2RlKS5wb3NpdGlvbilcbiAgdmFyIHN0YXJ0ID0gb3B0aW9uYWwocG9zaXRpb24uc3RhcnQpXG4gIHZhciBlbmQgPSBvcHRpb25hbChwb3NpdGlvbi5lbmQpXG5cbiAgcmV0dXJuICFzdGFydC5saW5lIHx8ICFzdGFydC5jb2x1bW4gfHwgIWVuZC5saW5lIHx8ICFlbmQuY29sdW1uXG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdGFydCA9IGZhY3RvcnkoJ3N0YXJ0JylcbnZhciBlbmQgPSBmYWN0b3J5KCdlbmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uXG5cbnBvc2l0aW9uLnN0YXJ0ID0gc3RhcnRcbnBvc2l0aW9uLmVuZCA9IGVuZFxuXG5mdW5jdGlvbiBwb3NpdGlvbihub2RlKSB7XG4gIHJldHVybiB7c3RhcnQ6IHN0YXJ0KG5vZGUpLCBlbmQ6IGVuZChub2RlKX1cbn1cblxuZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gIHBvaW50LmRpc3BsYXlOYW1lID0gdHlwZVxuXG4gIHJldHVybiBwb2ludFxuXG4gIGZ1bmN0aW9uIHBvaW50KG5vZGUpIHtcbiAgICB2YXIgcG9pbnQgPSAobm9kZSAmJiBub2RlLnBvc2l0aW9uICYmIG5vZGUucG9zaXRpb25bdHlwZV0pIHx8IHt9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogcG9pbnQubGluZSB8fCBudWxsLFxuICAgICAgY29sdW1uOiBwb2ludC5jb2x1bW4gfHwgbnVsbCxcbiAgICAgIG9mZnNldDogaXNOYU4ocG9pbnQub2Zmc2V0KSA/IG51bGwgOiBwb2ludC5vZmZzZXRcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=