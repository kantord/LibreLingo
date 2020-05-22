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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9kZXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWRlZmluaXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9icmVhay5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saW5rLXJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9yZXZlcnQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi93cmFwLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcmVoeXBlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3RyaW0tbGluZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWdlbmVyYXRlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXBvc2l0aW9uL2luZGV4Lmpz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Ozs7Ozs7O0FDZFk7O0FBRVo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJlZDQxMGZkZmI4ODdhZGY1OGU2ZC8yLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkZXRhYlxuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbnZhciB0YWIgPSAweDA5XG52YXIgbGluZUZlZWQgPSAweDBhXG52YXIgY2FycmlhZ2VSZXR1cm4gPSAweDBkXG5cbi8vIFJlcGxhY2UgdGFicyB3aXRoIHNwYWNlcywgYmVpbmcgc21hcnQgYWJvdXQgd2hpY2ggY29sdW1uIHRoZSB0YWIgaXMgYXQgYW5kXG4vLyB3aGljaCBzaXplIHNob3VsZCBiZSB1c2VkLlxuZnVuY3Rpb24gZGV0YWIodmFsdWUsIHNpemUpIHtcbiAgdmFyIHN0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgdmFyIGxlbmd0aCA9IHN0cmluZyAmJiB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY29sdW1uID0gLTFcbiAgdmFyIHRhYlNpemUgPSBzaXplIHx8IDRcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgY29kZVxuICB2YXIgYWRkXG5cbiAgaWYgKCFzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RldGFiIGV4cGVjdGVkIHN0cmluZycpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNvZGUgPT09IHRhYikge1xuICAgICAgYWRkID0gdGFiU2l6ZSAtICgoY29sdW1uICsgMSkgJSB0YWJTaXplKVxuICAgICAgY29sdW1uICs9IGFkZFxuICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBpbmRleCkgKyByZXBlYXQoJyAnLCBhZGQpKVxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IGxpbmVGZWVkIHx8IGNvZGUgPT09IGNhcnJpYWdlUmV0dXJuKSB7XG4gICAgICBjb2x1bW4gPSAtMVxuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW4rK1xuICAgIH1cbiAgfVxuXG4gIHJlc3VsdHMucHVzaCh2YWx1ZS5zbGljZShzdGFydCkpXG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcblxubW9kdWxlLmV4cG9ydHMgPSBnZXREZWZpbml0aW9uRmFjdG9yeVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gR2V0IGEgZGVmaW5pdGlvbiBpbiBgbm9kZWAgYnkgYGlkZW50aWZpZXJgLlxuZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbkZhY3Rvcnkobm9kZSwgb3B0aW9ucykge1xuICByZXR1cm4gZ2V0dGVyRmFjdG9yeShnYXRoZXIobm9kZSwgb3B0aW9ucykpXG59XG5cbi8vIEdhdGhlciBhbGwgZGVmaW5pdGlvbnMgaW4gYG5vZGVgXG5mdW5jdGlvbiBnYXRoZXIobm9kZSwgb3B0aW9ucykge1xuICB2YXIgY2FjaGUgPSB7fVxuXG4gIGlmICghbm9kZSB8fCAhbm9kZS50eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtZGFzdC11dGlsLWRlZmluaXRpb25zIGV4cGVjdGVkIG5vZGUnKVxuICB9XG5cbiAgdmlzaXQobm9kZSwgJ2RlZmluaXRpb24nLCBvcHRpb25zICYmIG9wdGlvbnMuY29tbW9ubWFyayA/IGNvbW1vbm1hcmsgOiBub3JtYWwpXG5cbiAgcmV0dXJuIGNhY2hlXG5cbiAgZnVuY3Rpb24gY29tbW9ubWFyayhkZWZpbml0aW9uKSB7XG4gICAgdmFyIGlkID0gbm9ybWFsaXNlKGRlZmluaXRpb24uaWRlbnRpZmllcilcbiAgICBpZiAoIW93bi5jYWxsKGNhY2hlLCBpZCkpIHtcbiAgICAgIGNhY2hlW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWwoZGVmaW5pdGlvbikge1xuICAgIGNhY2hlW25vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXSA9IGRlZmluaXRpb25cbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCBhIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gZGVmaW5pdGlvbi1jYWNoZS5cbmZ1bmN0aW9uIGdldHRlckZhY3RvcnkoY2FjaGUpIHtcbiAgcmV0dXJuIGdldHRlclxuXG4gIC8vIEdldCBhIG5vZGUgZnJvbSB0aGUgYm91bmQgZGVmaW5pdGlvbi1jYWNoZS5cbiAgZnVuY3Rpb24gZ2V0dGVyKGlkZW50aWZpZXIpIHtcbiAgICB2YXIgaWQgPSBpZGVudGlmaWVyICYmIG5vcm1hbGlzZShpZGVudGlmaWVyKVxuICAgIHJldHVybiBpZCAmJiBvd24uY2FsbChjYWNoZSwgaWQpID8gY2FjaGVbaWRdIDogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZShpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnRvVXBwZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbGxcblxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxuZnVuY3Rpb24gYWxsKGgsIHBhcmVudCkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuICB2YXIgaGVhZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gb25lKGgsIG5vZGVzW2luZGV4XSwgcGFyZW50KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKGluZGV4ICYmIG5vZGVzW2luZGV4IC0gMV0udHlwZSA9PT0gJ2JyZWFrJykge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoL15cXHMrLywgJycpXG4gICAgICAgIH1cblxuICAgICAgICBoZWFkID0gcmVzdWx0LmNoaWxkcmVuICYmIHJlc3VsdC5jaGlsZHJlblswXVxuXG4gICAgICAgIGlmIChoZWFkICYmIGhlYWQudmFsdWUpIHtcbiAgICAgICAgICBoZWFkLnZhbHVlID0gaGVhZC52YWx1ZS5yZXBsYWNlKC9eXFxzKy8sICcnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlRm9vdG5vdGVzXG5cbnZhciB0aGVtYXRpY0JyZWFrID0gcmVxdWlyZSgnLi9oYW5kbGVycy90aGVtYXRpYy1icmVhaycpXG52YXIgbGlzdCA9IHJlcXVpcmUoJy4vaGFuZGxlcnMvbGlzdCcpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcCcpXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9vdG5vdGVzKGgpIHtcbiAgdmFyIGZvb3Rub3RlQnlJZCA9IGguZm9vdG5vdGVCeUlkXG4gIHZhciBmb290bm90ZU9yZGVyID0gaC5mb290bm90ZU9yZGVyXG4gIHZhciBsZW5ndGggPSBmb290bm90ZU9yZGVyLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGlzdEl0ZW1zID0gW11cbiAgdmFyIGRlZlxuICB2YXIgYmFja1JlZmVyZW5jZVxuICB2YXIgY29udGVudFxuICB2YXIgdGFpbFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGVmID0gZm9vdG5vdGVCeUlkW2Zvb3Rub3RlT3JkZXJbaW5kZXhdLnRvVXBwZXJDYXNlKCldXG5cbiAgICBpZiAoIWRlZikge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb250ZW50ID0gZGVmLmNoaWxkcmVuLmNvbmNhdCgpXG4gICAgdGFpbCA9IGNvbnRlbnRbY29udGVudC5sZW5ndGggLSAxXVxuICAgIGJhY2tSZWZlcmVuY2UgPSB7XG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICB1cmw6ICcjZm5yZWYtJyArIGRlZi5pZGVudGlmaWVyLFxuICAgICAgZGF0YToge2hQcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2Zvb3Rub3RlLWJhY2tyZWYnXX19LFxuICAgICAgY2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+KGqSd9XVxuICAgIH1cblxuICAgIGlmICghdGFpbCB8fCB0YWlsLnR5cGUgIT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICB0YWlsID0ge3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogW119XG4gICAgICBjb250ZW50LnB1c2godGFpbClcbiAgICB9XG5cbiAgICB0YWlsLmNoaWxkcmVuLnB1c2goYmFja1JlZmVyZW5jZSlcblxuICAgIGxpc3RJdGVtcy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICBkYXRhOiB7aFByb3BlcnRpZXM6IHtpZDogJ2ZuLScgKyBkZWYuaWRlbnRpZmllcn19LFxuICAgICAgY2hpbGRyZW46IGNvbnRlbnQsXG4gICAgICBwb3NpdGlvbjogZGVmLnBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIGlmIChsaXN0SXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBoKFxuICAgIG51bGwsXG4gICAgJ2RpdicsXG4gICAge2NsYXNzTmFtZTogWydmb290bm90ZXMnXX0sXG4gICAgd3JhcChcbiAgICAgIFtcbiAgICAgICAgdGhlbWF0aWNCcmVhayhoKSxcbiAgICAgICAgbGlzdChoLCB7dHlwZTogJ2xpc3QnLCBvcmRlcmVkOiB0cnVlLCBjaGlsZHJlbjogbGlzdEl0ZW1zfSlcbiAgICAgIF0sXG4gICAgICB0cnVlXG4gICAgKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlXG5cbnZhciB3cmFwID0gcmVxdWlyZSgnLi4vd3JhcCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gYmxvY2txdW90ZShoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdibG9ja3F1b3RlJywgd3JhcChhbGwoaCwgbm9kZSksIHRydWUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIGhhcmRCcmVhayhoLCBub2RlKSB7XG4gIHJldHVybiBbaChub2RlLCAnYnInKSwgdSgndGV4dCcsICdcXG4nKV1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVcblxudmFyIGRldGFiID0gcmVxdWlyZSgnZGV0YWInKVxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gY29kZShoLCBub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWUgPyBkZXRhYihub2RlLnZhbHVlICsgJ1xcbicpIDogJydcbiAgdmFyIGxhbmcgPSBub2RlLmxhbmcgJiYgbm9kZS5sYW5nLm1hdGNoKC9eW14gXFx0XSsoPz1bIFxcdF18JCkvKVxuICB2YXIgcHJvcHMgPSB7fVxuXG4gIGlmIChsYW5nKSB7XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gWydsYW5ndWFnZS0nICsgbGFuZ11cbiAgfVxuXG4gIHJldHVybiBoKG5vZGUucG9zaXRpb24sICdwcmUnLCBbaChub2RlLCAnY29kZScsIHByb3BzLCBbdSgndGV4dCcsIHZhbHVlKV0pXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZGVsJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGVtcGhhc2lzKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2VtJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVSZWZlcmVuY2VcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVPcmRlciA9IGguZm9vdG5vdGVPcmRlclxuICB2YXIgaWRlbnRpZmllciA9IFN0cmluZyhub2RlLmlkZW50aWZpZXIpXG5cbiAgaWYgKGZvb3Rub3RlT3JkZXIuaW5kZXhPZihpZGVudGlmaWVyKSA9PT0gLTEpIHtcbiAgICBmb290bm90ZU9yZGVyLnB1c2goaWRlbnRpZmllcilcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUucG9zaXRpb24sICdzdXAnLCB7aWQ6ICdmbnJlZi0nICsgaWRlbnRpZmllcn0sIFtcbiAgICBoKG5vZGUsICdhJywge2hyZWY6ICcjZm4tJyArIGlkZW50aWZpZXIsIGNsYXNzTmFtZTogWydmb290bm90ZS1yZWYnXX0sIFtcbiAgICAgIHUoJ3RleHQnLCBub2RlLmxhYmVsIHx8IGlkZW50aWZpZXIpXG4gICAgXSlcbiAgXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlXG5cbnZhciBmb290bm90ZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vZm9vdG5vdGUtcmVmZXJlbmNlJylcblxuZnVuY3Rpb24gZm9vdG5vdGUoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGlkZW50aWZpZXIgPSAxXG5cbiAgd2hpbGUgKGlkZW50aWZpZXIgaW4gZm9vdG5vdGVCeUlkKSB7XG4gICAgaWRlbnRpZmllcisrXG4gIH1cblxuICBpZGVudGlmaWVyID0gU3RyaW5nKGlkZW50aWZpZXIpXG5cbiAgLy8gTm8gbmVlZCB0byBjaGVjayBpZiBgaWRlbnRpZmllcmAgZXhpc3RzIGluIGBmb290bm90ZU9yZGVyYCwgaXTigJlzIGd1YXJhbnRlZWRcbiAgLy8gdG8gbm90IGV4aXN0IGJlY2F1c2Ugd2UganVzdCBnZW5lcmF0ZWQgaXQuXG4gIGZvb3Rub3RlT3JkZXIucHVzaChpZGVudGlmaWVyKVxuXG4gIGZvb3Rub3RlQnlJZFtpZGVudGlmaWVyXSA9IHtcbiAgICB0eXBlOiAnZm9vdG5vdGVEZWZpbml0aW9uJyxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbn1dLFxuICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gIH1cblxuICByZXR1cm4gZm9vdG5vdGVSZWZlcmVuY2UoaCwge1xuICAgIHR5cGU6ICdmb290bm90ZVJlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGluZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gaGVhZGluZyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdoJyArIG5vZGUuZGVwdGgsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWxcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuLy8gUmV0dXJuIGVpdGhlciBhIGByYXdgIG5vZGUgaW4gZGFuZ2Vyb3VzIG1vZGUsIG90aGVyd2lzZSBub3RoaW5nLlxuZnVuY3Rpb24gaHRtbChoLCBub2RlKSB7XG4gIHJldHVybiBoLmRhbmdlcm91cyA/IGguYXVnbWVudChub2RlLCB1KCdyYXcnLCBub2RlLnZhbHVlKSkgOiBudWxsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciByZXZlcnQgPSByZXF1aXJlKCcuLi9yZXZlcnQnKVxuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBkZWYgPSBoLmRlZmluaXRpb24obm9kZS5pZGVudGlmaWVyKVxuICB2YXIgcHJvcHNcblxuICBpZiAoIWRlZikge1xuICAgIHJldHVybiByZXZlcnQoaCwgbm9kZSlcbiAgfVxuXG4gIHByb3BzID0ge3NyYzogbm9ybWFsaXplKGRlZi51cmwgfHwgJycpLCBhbHQ6IG5vZGUuYWx0fVxuXG4gIGlmIChkZWYudGl0bGUgIT09IG51bGwgJiYgZGVmLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IGRlZi50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2ltZycsIHByb3BzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbmZ1bmN0aW9uIGltYWdlKGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge3NyYzogbm9ybWFsaXplKG5vZGUudXJsKSwgYWx0OiBub2RlLmFsdH1cblxuICBpZiAobm9kZS50aXRsZSAhPT0gbnVsbCAmJiBub2RlLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IG5vZGUudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdpbWcnLCBwcm9wcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi9ibG9ja3F1b3RlJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL2JyZWFrJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vY29kZScpLFxuICBkZWxldGU6IHJlcXVpcmUoJy4vZGVsZXRlJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL2VtcGhhc2lzJyksXG4gIGZvb3Rub3RlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2Zvb3Rub3RlLXJlZmVyZW5jZScpLFxuICBmb290bm90ZTogcmVxdWlyZSgnLi9mb290bm90ZScpLFxuICBoZWFkaW5nOiByZXF1aXJlKCcuL2hlYWRpbmcnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi9odG1sJyksXG4gIGltYWdlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2ltYWdlLXJlZmVyZW5jZScpLFxuICBpbWFnZTogcmVxdWlyZSgnLi9pbWFnZScpLFxuICBpbmxpbmVDb2RlOiByZXF1aXJlKCcuL2lubGluZS1jb2RlJyksXG4gIGxpbmtSZWZlcmVuY2U6IHJlcXVpcmUoJy4vbGluay1yZWZlcmVuY2UnKSxcbiAgbGluazogcmVxdWlyZSgnLi9saW5rJyksXG4gIGxpc3RJdGVtOiByZXF1aXJlKCcuL2xpc3QtaXRlbScpLFxuICBsaXN0OiByZXF1aXJlKCcuL2xpc3QnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3BhcmFncmFwaCcpLFxuICByb290OiByZXF1aXJlKCcuL3Jvb3QnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3N0cm9uZycpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZScpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3RleHQnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi90aGVtYXRpYy1icmVhaycpLFxuICB0b21sOiBpZ25vcmUsXG4gIHlhbWw6IGlnbm9yZSxcbiAgZGVmaW5pdGlvbjogaWdub3JlLFxuICBmb290bm90ZURlZmluaXRpb246IGlnbm9yZVxufVxuXG4vLyBSZXR1cm4gbm90aGluZyBmb3Igbm9kZXMgdGhhdCBhcmUgaWdub3JlZC5cbmZ1bmN0aW9uIGlnbm9yZSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcblxudmFyIGNvbGxhcHNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaW5saW5lQ29kZShoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdjb2RlJywgW3UoJ3RleHQnLCBjb2xsYXBzZShub2RlLnZhbHVlKSldKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1JlZmVyZW5jZVxuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciByZXZlcnQgPSByZXF1aXJlKCcuLi9yZXZlcnQnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpbmtSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZGVmID0gaC5kZWZpbml0aW9uKG5vZGUuaWRlbnRpZmllcilcbiAgdmFyIHByb3BzXG5cbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm4gcmV2ZXJ0KGgsIG5vZGUpXG4gIH1cblxuICBwcm9wcyA9IHtocmVmOiBub3JtYWxpemUoZGVmLnVybCB8fCAnJyl9XG5cbiAgaWYgKGRlZi50aXRsZSAhPT0gbnVsbCAmJiBkZWYudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BzLnRpdGxlID0gZGVmLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnYScsIHByb3BzLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5cbmZ1bmN0aW9uIGxpbmsoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7aHJlZjogbm9ybWFsaXplKG5vZGUudXJsKX1cblxuICBpZiAobm9kZS50aXRsZSAhPT0gbnVsbCAmJiBub2RlLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IG5vZGUudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdhJywgcHJvcHMsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4uL3dyYXAnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGgsIG5vZGUsIHBhcmVudCkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBoZWFkID0gY2hpbGRyZW5bMF1cbiAgdmFyIHJhdyA9IGFsbChoLCBub2RlKVxuICB2YXIgbG9vc2UgPSBwYXJlbnQgPyBsaXN0TG9vc2UocGFyZW50KSA6IGxpc3RJdGVtTG9vc2Uobm9kZSlcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIHJlc3VsdFxuICB2YXIgY29udGFpbmVyXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBjaGlsZFxuXG4gIC8vIFRpZ2h0IGxpc3RzIHNob3VsZCBub3QgcmVuZGVyIGBwYXJhZ3JhcGhgIG5vZGVzIGFzIGBwYCBlbGVtZW50cy5cbiAgaWYgKGxvb3NlKSB7XG4gICAgcmVzdWx0ID0gcmF3XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gW11cbiAgICBsZW5ndGggPSByYXcubGVuZ3RoXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoaWxkID0gcmF3W2luZGV4XVxuXG4gICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ3AnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGQuY2hpbGRyZW4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChjaGlsZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG5vZGUuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKGxvb3NlICYmICghaGVhZCB8fCBoZWFkLnR5cGUgIT09ICdwYXJhZ3JhcGgnKSkge1xuICAgICAgcmVzdWx0LnVuc2hpZnQoaChudWxsLCAncCcsIFtdKSlcbiAgICB9XG5cbiAgICBjb250YWluZXIgPSBsb29zZSA/IHJlc3VsdFswXS5jaGlsZHJlbiA6IHJlc3VsdFxuXG4gICAgaWYgKGNvbnRhaW5lci5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnRhaW5lci51bnNoaWZ0KHUoJ3RleHQnLCAnICcpKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci51bnNoaWZ0KFxuICAgICAgaChudWxsLCAnaW5wdXQnLCB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGNoZWNrZWQ6IG5vZGUuY2hlY2tlZCxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgLy8gQWNjb3JkaW5nIHRvIGdpdGh1Yi1tYXJrZG93bi1jc3MsIHRoaXMgY2xhc3MgaGlkZXMgYnVsbGV0LlxuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ2l0aHViLW1hcmtkb3duLWNzcz4uXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gWyd0YXNrLWxpc3QtaXRlbSddXG4gIH1cblxuICBpZiAobG9vc2UgJiYgcmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJlc3VsdCA9IHdyYXAocmVzdWx0LCB0cnVlKVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2xpJywgcHJvcHMsIHJlc3VsdClcbn1cblxuZnVuY3Rpb24gbGlzdExvb3NlKG5vZGUpIHtcbiAgdmFyIGxvb3NlID0gbm9kZS5zcHJlYWRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCFsb29zZSAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbG9vc2UgPSBsaXN0SXRlbUxvb3NlKGNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBsb29zZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbUxvb3NlKG5vZGUpIHtcbiAgdmFyIHNwcmVhZCA9IG5vZGUuc3ByZWFkXG5cbiAgcmV0dXJuIHNwcmVhZCA9PT0gdW5kZWZpbmVkIHx8IHNwcmVhZCA9PT0gbnVsbFxuICAgID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgOiBzcHJlYWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0KGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIG5hbWUgPSBub2RlLm9yZGVyZWQgPyAnb2wnIDogJ3VsJ1xuICB2YXIgaXRlbXNcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICh0eXBlb2Ygbm9kZS5zdGFydCA9PT0gJ251bWJlcicgJiYgbm9kZS5zdGFydCAhPT0gMSkge1xuICAgIHByb3BzLnN0YXJ0ID0gbm9kZS5zdGFydFxuICB9XG5cbiAgaXRlbXMgPSBhbGwoaCwgbm9kZSlcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgLy8gTGlrZSBHaXRIdWIsIGFkZCBhIGNsYXNzIGZvciBjdXN0b20gc3R5bGluZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBpdGVtc1tpbmRleF0ucHJvcGVydGllcy5jbGFzc05hbWUgJiZcbiAgICAgIGl0ZW1zW2luZGV4XS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5pbmRleE9mKCd0YXNrLWxpc3QtaXRlbScpICE9PSAtMVxuICAgICkge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gWydjb250YWlucy10YXNrLWxpc3QnXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChub2RlLCBuYW1lLCBwcm9wcywgd3JhcChpdGVtcywgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdwJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiByb290KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCdyb290Jywgd3JhcChhbGwoaCwgbm9kZSkpKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gc3Ryb25nKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3N0cm9uZycsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiB0YWJsZShoLCBub2RlKSB7XG4gIHZhciByb3dzID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaW5kZXggPSByb3dzLmxlbmd0aFxuICB2YXIgYWxpZ24gPSBub2RlLmFsaWduXG4gIHZhciBhbGlnbkxlbmd0aCA9IGFsaWduLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc1xuICB2YXIgcm93XG4gIHZhciBvdXRcbiAgdmFyIG5hbWVcbiAgdmFyIGNlbGxcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJvdyA9IHJvd3NbaW5kZXhdLmNoaWxkcmVuXG4gICAgbmFtZSA9IGluZGV4ID09PSAwID8gJ3RoJyA6ICd0ZCdcbiAgICBwb3MgPSBhbGlnbkxlbmd0aFxuICAgIG91dCA9IFtdXG5cbiAgICB3aGlsZSAocG9zLS0pIHtcbiAgICAgIGNlbGwgPSByb3dbcG9zXVxuICAgICAgb3V0W3Bvc10gPSBoKGNlbGwsIG5hbWUsIHthbGlnbjogYWxpZ25bcG9zXX0sIGNlbGwgPyBhbGwoaCwgY2VsbCkgOiBbXSlcbiAgICB9XG5cbiAgICByZXN1bHRbaW5kZXhdID0gaChyb3dzW2luZGV4XSwgJ3RyJywgd3JhcChvdXQsIHRydWUpKVxuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgbm9kZSxcbiAgICAndGFibGUnLFxuICAgIHdyYXAoXG4gICAgICBbXG4gICAgICAgIGgocmVzdWx0WzBdLnBvc2l0aW9uLCAndGhlYWQnLCB3cmFwKFtyZXN1bHRbMF1dLCB0cnVlKSksXG4gICAgICAgIGgoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHBvc2l0aW9uLnN0YXJ0KHJlc3VsdFsxXSksXG4gICAgICAgICAgICBlbmQ6IHBvc2l0aW9uLmVuZChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICB3cmFwKHJlc3VsdC5zbGljZSgxKSwgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB0cmltTGluZXMgPSByZXF1aXJlKCd0cmltLWxpbmVzJylcblxuZnVuY3Rpb24gdGV4dChoLCBub2RlKSB7XG4gIHJldHVybiBoLmF1Z21lbnQobm9kZSwgdSgndGV4dCcsIHRyaW1MaW5lcyhub2RlLnZhbHVlKSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY0JyZWFrXG5cbmZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnaHInKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdG9IYXN0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIGdlbmVyYXRlZCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtZ2VuZXJhdGVkJylcbnZhciBkZWZpbml0aW9ucyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMnKVxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcbnZhciBmb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpXG52YXIgaGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZXJzJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIEZhY3RvcnkgdG8gdHJhbnNmb3JtLlxuZnVuY3Rpb24gZmFjdG9yeSh0cmVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGRhbmdlcm91cyA9IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTFxuICB2YXIgZm9vdG5vdGVCeUlkID0ge31cblxuICBoLmRhbmdlcm91cyA9IGRhbmdlcm91c1xuICBoLmRlZmluaXRpb24gPSBkZWZpbml0aW9ucyh0cmVlLCBzZXR0aW5ncylcbiAgaC5mb290bm90ZUJ5SWQgPSBmb290bm90ZUJ5SWRcbiAgaC5mb290bm90ZU9yZGVyID0gW11cbiAgaC5hdWdtZW50ID0gYXVnbWVudFxuICBoLmhhbmRsZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgaGFuZGxlcnMsIHNldHRpbmdzLmhhbmRsZXJzKVxuICBoLnVua25vd25IYW5kbGVyID0gc2V0dGluZ3MudW5rbm93bkhhbmRsZXJcblxuICB2aXNpdCh0cmVlLCAnZm9vdG5vdGVEZWZpbml0aW9uJywgb25mb290bm90ZWRlZmluaXRpb24pXG5cbiAgcmV0dXJuIGhcblxuICAvLyBGaW5hbGlzZSB0aGUgY3JlYXRlZCBgcmlnaHRgLCBhIGhhc3Qgbm9kZSwgZnJvbSBgbGVmdGAsIGFuIG1kYXN0IG5vZGUuXG4gIGZ1bmN0aW9uIGF1Z21lbnQobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgZGF0YVxuICAgIHZhciBjdHhcblxuICAgIC8vIEhhbmRsZSBgZGF0YS5oTmFtZWAsIGBkYXRhLmhQcm9wZXJ0aWVzLCBgZGF0YS5oQ2hpbGRyZW5gLlxuICAgIGlmIChsZWZ0ICYmICdkYXRhJyBpbiBsZWZ0KSB7XG4gICAgICBkYXRhID0gbGVmdC5kYXRhXG5cbiAgICAgIGlmIChyaWdodC50eXBlID09PSAnZWxlbWVudCcgJiYgZGF0YS5oTmFtZSkge1xuICAgICAgICByaWdodC50YWdOYW1lID0gZGF0YS5oTmFtZVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHQudHlwZSA9PT0gJ2VsZW1lbnQnICYmIGRhdGEuaFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmlnaHQucHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHJpZ2h0LnByb3BlcnRpZXMsIGRhdGEuaFByb3BlcnRpZXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodC5jaGlsZHJlbiAmJiBkYXRhLmhDaGlsZHJlbikge1xuICAgICAgICByaWdodC5jaGlsZHJlbiA9IGRhdGEuaENoaWxkcmVuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY3R4ID0gbGVmdCAmJiBsZWZ0LnBvc2l0aW9uID8gbGVmdCA6IHtwb3NpdGlvbjogbGVmdH1cblxuICAgIGlmICghZ2VuZXJhdGVkKGN0eCkpIHtcbiAgICAgIHJpZ2h0LnBvc2l0aW9uID0ge1xuICAgICAgICBzdGFydDogcG9zaXRpb24uc3RhcnQoY3R4KSxcbiAgICAgICAgZW5kOiBwb3NpdGlvbi5lbmQoY3R4KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByaWdodFxuICB9XG5cbiAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgZm9yIGBub2RlYC5cbiAgZnVuY3Rpb24gaChub2RlLCB0YWdOYW1lLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAoXG4gICAgICAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkgJiZcbiAgICAgIHR5cGVvZiBwcm9wcyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICdsZW5ndGgnIGluIHByb3BzXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHByb3BzXG4gICAgICBwcm9wcyA9IHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF1Z21lbnQobm9kZSwge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgIHByb3BlcnRpZXM6IHByb3BzIHx8IHt9LFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuIHx8IFtdXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZm9vdG5vdGVkZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICB2YXIgaWQgPSBTdHJpbmcoZGVmaW5pdGlvbi5pZGVudGlmaWVyKS50b1VwcGVyQ2FzZSgpXG5cbiAgICAvLyBNaW1pY2sgQ00gYmVoYXZpb3Igb2YgbGluayBkZWZpbml0aW9ucy5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC1kZWZpbml0aW9ucy9ibG9iLzhkNDhlNTcvaW5kZXguanMjTDI2Pi5cbiAgICBpZiAoIW93bi5jYWxsKGZvb3Rub3RlQnlJZCwgaWQpKSB7XG4gICAgICBmb290bm90ZUJ5SWRbaWRdID0gZGVmaW5pdGlvblxuICAgIH1cbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm0gYHRyZWVgLCB3aGljaCBpcyBhbiBtZGFzdCBub2RlLCB0byBhIGhhc3Qgbm9kZS5cbmZ1bmN0aW9uIHRvSGFzdCh0cmVlLCBvcHRpb25zKSB7XG4gIHZhciBoID0gZmFjdG9yeSh0cmVlLCBvcHRpb25zKVxuICB2YXIgbm9kZSA9IG9uZShoLCB0cmVlKVxuICB2YXIgZm9vdCA9IGZvb3RlcihoKVxuXG4gIGlmIChmb290KSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4uY29uY2F0KHUoJ3RleHQnLCAnXFxuJyksIGZvb3QpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb25lXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgYWxsID0gcmVxdWlyZSgnLi9hbGwnKVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gVHJhbnNmb3JtIGFuIHVua25vd24gbm9kZS5cbmZ1bmN0aW9uIHVua25vd24oaCwgbm9kZSkge1xuICBpZiAodGV4dChub2RlKSkge1xuICAgIHJldHVybiBoLmF1Z21lbnQobm9kZSwgdSgndGV4dCcsIG5vZGUudmFsdWUpKVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2RpdicsIGFsbChoLCBub2RlKSlcbn1cblxuLy8gVmlzaXQgYSBub2RlLlxuZnVuY3Rpb24gb25lKGgsIG5vZGUsIHBhcmVudCkge1xuICB2YXIgdHlwZSA9IG5vZGUgJiYgbm9kZS50eXBlXG4gIHZhciBmbiA9IG93bi5jYWxsKGguaGFuZGxlcnMsIHR5cGUpID8gaC5oYW5kbGVyc1t0eXBlXSA6IGgudW5rbm93bkhhbmRsZXJcblxuICAvLyBGYWlsIG9uIG5vbi1ub2Rlcy5cbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG5cbiAgcmV0dXJuICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBmbiA6IHVua25vd24pKGgsIG5vZGUsIHBhcmVudClcbn1cblxuLy8gQ2hlY2sgaWYgdGhlIG5vZGUgc2hvdWxkIGJlIHJlbmRlcmVyZWQgYXMgYSB0ZXh0IG5vZGUuXG5mdW5jdGlvbiB0ZXh0KG5vZGUpIHtcbiAgdmFyIGRhdGEgPSBub2RlLmRhdGEgfHwge31cblxuICBpZiAoXG4gICAgb3duLmNhbGwoZGF0YSwgJ2hOYW1lJykgfHxcbiAgICBvd24uY2FsbChkYXRhLCAnaFByb3BlcnRpZXMnKSB8fFxuICAgIG93bi5jYWxsKGRhdGEsICdoQ2hpbGRyZW4nKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAndmFsdWUnIGluIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJldmVydFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcblxuLy8gUmV0dXJuIHRoZSBjb250ZW50IG9mIGEgcmVmZXJlbmNlIHdpdGhvdXQgZGVmaW5pdGlvbiBhcyBNYXJrZG93bi5cbmZ1bmN0aW9uIHJldmVydChoLCBub2RlKSB7XG4gIHZhciBzdWJ0eXBlID0gbm9kZS5yZWZlcmVuY2VUeXBlXG4gIHZhciBzdWZmaXggPSAnXSdcbiAgdmFyIGNvbnRlbnRzXG4gIHZhciBoZWFkXG4gIHZhciB0YWlsXG5cbiAgaWYgKHN1YnR5cGUgPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgc3VmZml4ICs9ICdbXSdcbiAgfSBlbHNlIGlmIChzdWJ0eXBlID09PSAnZnVsbCcpIHtcbiAgICBzdWZmaXggKz0gJ1snICsgKG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArICddJ1xuICB9XG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2ltYWdlUmVmZXJlbmNlJykge1xuICAgIHJldHVybiB1KCd0ZXh0JywgJyFbJyArIG5vZGUuYWx0ICsgc3VmZml4KVxuICB9XG5cbiAgY29udGVudHMgPSBhbGwoaCwgbm9kZSlcbiAgaGVhZCA9IGNvbnRlbnRzWzBdXG5cbiAgaWYgKGhlYWQgJiYgaGVhZC50eXBlID09PSAndGV4dCcpIHtcbiAgICBoZWFkLnZhbHVlID0gJ1snICsgaGVhZC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRzLnVuc2hpZnQodSgndGV4dCcsICdbJykpXG4gIH1cblxuICB0YWlsID0gY29udGVudHNbY29udGVudHMubGVuZ3RoIC0gMV1cblxuICBpZiAodGFpbCAmJiB0YWlsLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHRhaWwudmFsdWUgKz0gc3VmZml4XG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMucHVzaCh1KCd0ZXh0Jywgc3VmZml4KSlcbiAgfVxuXG4gIHJldHVybiBjb250ZW50c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG4vLyBXcmFwIGBub2Rlc2Agd2l0aCBsaW5lIGZlZWRzIGJldHdlZW4gZWFjaCBlbnRyeS5cbi8vIE9wdGlvbmFsbHkgYWRkcyBsaW5lIGZlZWRzIGF0IHRoZSBzdGFydCBhbmQgZW5kLlxuZnVuY3Rpb24gd3JhcChub2RlcywgbG9vc2UpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSBub2Rlcy5sZW5ndGhcblxuICBpZiAobG9vc2UpIHtcbiAgICByZXN1bHQucHVzaCh1KCd0ZXh0JywgJ1xcbicpKVxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2gobm9kZXNbaW5kZXhdKVxuICB9XG5cbiAgaWYgKGxvb3NlICYmIG5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgZW5jb2RlQ2FjaGUgPSB7fTtcblxuXG4vLyBDcmVhdGUgYSBsb29rdXAgYXJyYXkgd2hlcmUgYW55dGhpbmcgYnV0IGNoYXJhY3RlcnMgaW4gYGNoYXJzYCBzdHJpbmdcbi8vIGFuZCBhbHBoYW51bWVyaWMgY2hhcnMgaXMgcGVyY2VudC1lbmNvZGVkLlxuLy9cbmZ1bmN0aW9uIGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcblxuICAgIGlmICgvXlswLTlhLXpdJC9pLnRlc3QoY2gpKSB7XG4gICAgICAvLyBhbHdheXMgYWxsb3cgdW5lbmNvZGVkIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgICBjYWNoZS5wdXNoKGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUucHVzaCgnJScgKyAoJzAnICsgaS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW2V4Y2x1ZGUuY2hhckNvZGVBdChpKV0gPSBleGNsdWRlW2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIEVuY29kZSB1bnNhZmUgY2hhcmFjdGVycyB3aXRoIHBlcmNlbnQtZW5jb2RpbmcsIHNraXBwaW5nIGFscmVhZHlcbi8vIGVuY29kZWQgc2VxdWVuY2VzLlxuLy9cbi8vICAtIHN0cmluZyAgICAgICAtIHN0cmluZyB0byBlbmNvZGVcbi8vICAtIGV4Y2x1ZGUgICAgICAtIGxpc3Qgb2YgY2hhcmFjdGVycyB0byBpZ25vcmUgKGluIGFkZGl0aW9uIHRvIGEtekEtWjAtOSlcbi8vICAtIGtlZXBFc2NhcGVkICAtIGRvbid0IGVuY29kZSAnJScgaW4gYSBjb3JyZWN0IGVzY2FwZSBzZXF1ZW5jZSAoZGVmYXVsdDogdHJ1ZSlcbi8vXG5mdW5jdGlvbiBlbmNvZGUoc3RyaW5nLCBleGNsdWRlLCBrZWVwRXNjYXBlZCkge1xuICB2YXIgaSwgbCwgY29kZSwgbmV4dENvZGUsIGNhY2hlLFxuICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGVuY29kZShzdHJpbmcsIGtlZXBFc2NhcGVkKVxuICAgIGtlZXBFc2NhcGVkICA9IGV4Y2x1ZGU7XG4gICAgZXhjbHVkZSA9IGVuY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBpZiAodHlwZW9mIGtlZXBFc2NhcGVkID09PSAndW5kZWZpbmVkJykge1xuICAgIGtlZXBFc2NhcGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoa2VlcEVzY2FwZWQgJiYgY29kZSA9PT0gMHgyNSAvKiAlICovICYmIGkgKyAyIDwgbCkge1xuICAgICAgaWYgKC9eWzAtOWEtZl17Mn0kL2kudGVzdChzdHJpbmcuc2xpY2UoaSArIDEsIGkgKyAzKSkpIHtcbiAgICAgICAgcmVzdWx0ICs9IHN0cmluZy5zbGljZShpLCBpICsgMyk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIHJlc3VsdCArPSBjYWNoZVtjb2RlXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REZGRikge1xuICAgICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhEQkZGICYmIGkgKyAxIDwgbCkge1xuICAgICAgICBuZXh0Q29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgaWYgKG5leHRDb2RlID49IDB4REMwMCAmJiBuZXh0Q29kZSA8PSAweERGRkYpIHtcbiAgICAgICAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSArIHN0cmluZ1tpICsgMV0pO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ICs9ICclRUYlQkYlQkQnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZW5jb2RlLmRlZmF1bHRDaGFycyAgID0gXCI7Lz86QCY9KyQsLV8uIX4qJygpI1wiO1xuZW5jb2RlLmNvbXBvbmVudENoYXJzID0gXCItXy4hfionKClcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWRhc3QyaGFzdCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8taGFzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtYXJrMnJlaHlwZVxuXG4vLyBBdHRhY2hlci5cbi8vIElmIGEgZGVzdGluYXRpb24gaXMgZ2l2ZW4sIHJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWVcbi8vIChicmlkZ2UgbW9kZSkuXG4vLyBXaXRob3V0IGRlc3RpbmF0aW9uLCByZXR1cm5zIHRoZSB0cmVlOiBmdXJ0aGVyIHBsdWdpbnMgcnVuIG9uIHRoYXQgdHJlZVxuLy8gKG11dGF0ZSBtb2RlKS5cbmZ1bmN0aW9uIHJlbWFyazJyZWh5cGUoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKGRlc3RpbmF0aW9uICYmICFkZXN0aW5hdGlvbi5wcm9jZXNzKSB7XG4gICAgb3B0aW9ucyA9IGRlc3RpbmF0aW9uXG4gICAgZGVzdGluYXRpb24gPSBudWxsXG4gIH1cblxuICByZXR1cm4gZGVzdGluYXRpb24gPyBicmlkZ2UoZGVzdGluYXRpb24sIG9wdGlvbnMpIDogbXV0YXRlKG9wdGlvbnMpXG59XG5cbi8vIEJyaWRnZSBtb2RlLlxuLy8gUnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IGhhc3QgdHJlZS5cbmZ1bmN0aW9uIGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICByZXR1cm4gdHJhbnNmb3JtZXJcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1lcihub2RlLCBmaWxlLCBuZXh0KSB7XG4gICAgZGVzdGluYXRpb24ucnVuKG1kYXN0Mmhhc3Qobm9kZSwgb3B0aW9ucyksIGZpbGUsIGRvbmUpXG5cbiAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgbmV4dChlcnIpXG4gICAgfVxuICB9XG59XG5cbi8vIE11dGF0ZS1tb2RlLlxuLy8gRnVydGhlciB0cmFuc2Zvcm1lcnMgcnVuIG9uIHRoZSBoYXN0IHRyZWUuXG5mdW5jdGlvbiBtdXRhdGUob3B0aW9ucykge1xuICByZXR1cm4gdHJhbnNmb3JtZXJcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1lcihub2RlKSB7XG4gICAgcmV0dXJuIG1kYXN0Mmhhc3Qobm9kZSwgb3B0aW9ucylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbUxpbmVzXG5cbnZhciB3cyA9IC9bIFxcdF0qXFxuK1sgXFx0XSovZ1xudmFyIG5ld2xpbmUgPSAnXFxuJ1xuXG5mdW5jdGlvbiB0cmltTGluZXModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSh3cywgbmV3bGluZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVcblxuZnVuY3Rpb24gdSh0eXBlLCBwcm9wcywgdmFsdWUpIHtcbiAgdmFyIG5vZGVcblxuICBpZiAoXG4gICAgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpICYmXG4gICAgKHR5cGVvZiBwcm9wcyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShwcm9wcykpXG4gICkge1xuICAgIHZhbHVlID0gcHJvcHNcbiAgICBwcm9wcyA9IHt9XG4gIH1cblxuICBub2RlID0gT2JqZWN0LmFzc2lnbih7dHlwZTogU3RyaW5nKHR5cGUpfSwgcHJvcHMpXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IHZhbHVlXG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIG5vZGUudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVkXG5cbmZ1bmN0aW9uIGdlbmVyYXRlZChub2RlKSB7XG4gIHZhciBwb3NpdGlvbiA9IG9wdGlvbmFsKG9wdGlvbmFsKG5vZGUpLnBvc2l0aW9uKVxuICB2YXIgc3RhcnQgPSBvcHRpb25hbChwb3NpdGlvbi5zdGFydClcbiAgdmFyIGVuZCA9IG9wdGlvbmFsKHBvc2l0aW9uLmVuZClcblxuICByZXR1cm4gIXN0YXJ0LmxpbmUgfHwgIXN0YXJ0LmNvbHVtbiB8fCAhZW5kLmxpbmUgfHwgIWVuZC5jb2x1bW5cbn1cblxuZnVuY3Rpb24gb3B0aW9uYWwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0YXJ0ID0gZmFjdG9yeSgnc3RhcnQnKVxudmFyIGVuZCA9IGZhY3RvcnkoJ2VuZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25cblxucG9zaXRpb24uc3RhcnQgPSBzdGFydFxucG9zaXRpb24uZW5kID0gZW5kXG5cbmZ1bmN0aW9uIHBvc2l0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIHtzdGFydDogc3RhcnQobm9kZSksIGVuZDogZW5kKG5vZGUpfVxufVxuXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcG9pbnQuZGlzcGxheU5hbWUgPSB0eXBlXG5cbiAgcmV0dXJuIHBvaW50XG5cbiAgZnVuY3Rpb24gcG9pbnQobm9kZSkge1xuICAgIHZhciBwb2ludCA9IChub2RlICYmIG5vZGUucG9zaXRpb24gJiYgbm9kZS5wb3NpdGlvblt0eXBlXSkgfHwge31cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBwb2ludC5saW5lIHx8IG51bGwsXG4gICAgICBjb2x1bW46IHBvaW50LmNvbHVtbiB8fCBudWxsLFxuICAgICAgb2Zmc2V0OiBpc05hTihwb2ludC5vZmZzZXQpID8gbnVsbCA6IHBvaW50Lm9mZnNldFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==