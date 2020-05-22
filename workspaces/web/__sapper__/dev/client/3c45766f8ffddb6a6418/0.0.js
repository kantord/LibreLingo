(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../node_modules/remark-parse/index.js":
/*!***********************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../../node_modules/unherit/index.js")
var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var Parser = __webpack_require__(/*! ./lib/parser.js */ "../../node_modules/remark-parse/lib/parser.js")

module.exports = parse
parse.Parser = Parser

function parse(options) {
  var settings = this.data('settings')
  var Local = unherit(Parser)

  Local.prototype.options = xtend(Local.prototype.options, settings, options)

  this.Parser = Local
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/block-elements.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/block-elements.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'meta',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'pre',
  'section',
  'source',
  'title',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]


/***/ }),

/***/ "../../node_modules/remark-parse/lib/decode.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/decode.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var entities = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")

module.exports = factory

// Factory to create an entity decoder.
function factory(ctx) {
  decoder.raw = decodeRaw

  return decoder

  // Normalize `position` to add an `indent`.
  function normalize(position) {
    var offsets = ctx.offset
    var line = position.line
    var result = []

    while (++line) {
      if (!(line in offsets)) {
        break
      }

      result.push((offsets[line] || 0) + 1)
    }

    return {start: position, indent: result}
  }

  // Decode `value` (at `position`) into text-nodes.
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    })
  }

  // Decode `value` (at `position`) into a string.
  function decodeRaw(value, position, options) {
    return entities(
      value,
      xtend(options, {position: normalize(position), warning: handleWarning})
    )
  }

  // Handle a warning.
  // See <https://github.com/wooorm/parse-entities> for the warnings.
  function handleWarning(reason, position, code) {
    if (code !== 3) {
      ctx.file.message(reason, position)
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/defaults.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/defaults.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements */ "../../node_modules/remark-parse/lib/block-elements.js")
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/break.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/break.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex)

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break
    }

    index--
  }

  return index
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/code-inline.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/code-inline.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/delete.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/delete.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/email.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/email.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")

var plusSign = 43 // '+'
var dash = 45 // '-'
var dot = 46 // '.'
var underscore = 95 // '_'

module.exports = locate

// See: <https://github.github.com/gfm/#extended-email-autolink>
function locate(value, fromIndex) {
  var self = this
  var at
  var position

  if (!this.options.gfm) {
    return -1
  }

  at = value.indexOf('@', fromIndex)

  if (at === -1) {
    return -1
  }

  position = at

  if (position === fromIndex || !isGfmAtext(value.charCodeAt(position - 1))) {
    return locate.call(self, value, at + 1)
  }

  while (position > fromIndex && isGfmAtext(value.charCodeAt(position - 1))) {
    position--
  }

  return position
}

function isGfmAtext(code) {
  return (
    decimal(code) ||
    alphabetical(code) ||
    code === plusSign ||
    code === dash ||
    code === dot ||
    code === underscore
  )
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/emphasis.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/emphasis.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex)
  var underscore = value.indexOf('_', fromIndex)

  if (underscore === -1) {
    return asterisk
  }

  if (asterisk === -1) {
    return underscore
  }

  return underscore < asterisk ? underscore : asterisk
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/escape.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/escape.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/link.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/link.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex)
  var image = value.indexOf('![', fromIndex)

  if (image === -1) {
    return link
  }

  // Link can never be `-1` if an image is found, so we don’t need to check
  // for that :)
  return link < image ? link : image
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/strong.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/strong.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex)
  var underscore = value.indexOf('__', fromIndex)

  if (underscore === -1) {
    return asterisk
  }

  if (asterisk === -1) {
    return underscore
  }

  return underscore < asterisk ? underscore : asterisk
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/tag.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/tag.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/locate/url.js":
/*!********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/locate/url.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate

var values = ['www.', 'http://', 'https://']

function locate(value, fromIndex) {
  var min = -1
  var index
  var length
  var position

  if (!this.options.gfm) {
    return min
  }

  length = values.length
  index = -1

  while (++index < length) {
    position = value.indexOf(values[index], fromIndex)

    if (position !== -1 && (min === -1 || position < min)) {
      min = position
    }
  }

  return min
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/parse.js":
/*!***************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/parse.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var removePosition = __webpack_require__(/*! unist-util-remove-position */ "../../node_modules/unist-util-remove-position/index.js")

module.exports = parse

var lineFeed = '\n'
var lineBreaksExpression = /\r\n|\r/g

// Parse the bound file.
function parse() {
  var self = this
  var value = String(self.file)
  var start = {line: 1, column: 1, offset: 0}
  var content = xtend(start)
  var node

  // Clean non-unix newlines: `\r\n` and `\r` are all changed to `\n`.
  // This should not affect positional information.
  value = value.replace(lineBreaksExpression, lineFeed)

  // BOM.
  if (value.charCodeAt(0) === 0xfeff) {
    value = value.slice(1)

    content.column++
    content.offset++
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {start: start, end: self.eof || xtend(start)}
  }

  if (!self.options.position) {
    removePosition(node, true)
  }

  return node
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/parser.js":
/*!****************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/parser.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var toggle = __webpack_require__(/*! state-toggle */ "../../node_modules/state-toggle/index.js")
var vfileLocation = __webpack_require__(/*! vfile-location */ "../../node_modules/vfile-location/index.js")
var unescape = __webpack_require__(/*! ./unescape */ "../../node_modules/remark-parse/lib/unescape.js")
var decode = __webpack_require__(/*! ./decode */ "../../node_modules/remark-parse/lib/decode.js")
var tokenizer = __webpack_require__(/*! ./tokenizer */ "../../node_modules/remark-parse/lib/tokenizer.js")

module.exports = Parser

function Parser(doc, file) {
  this.file = file
  this.offset = {}
  this.options = xtend(this.options)
  this.setOptions({})

  this.inList = false
  this.inBlock = false
  this.inLink = false
  this.atStart = true

  this.toOffset = vfileLocation(file).toOffset
  this.unescape = unescape(this, 'escape')
  this.decode = decode(this)
}

var proto = Parser.prototype

// Expose core.
proto.setOptions = __webpack_require__(/*! ./set-options */ "../../node_modules/remark-parse/lib/set-options.js")
proto.parse = __webpack_require__(/*! ./parse */ "../../node_modules/remark-parse/lib/parse.js")

// Expose `defaults`.
proto.options = __webpack_require__(/*! ./defaults */ "../../node_modules/remark-parse/lib/defaults.js")

// Enter and exit helpers.
proto.exitStart = toggle('atStart', true)
proto.enterList = toggle('inList', false)
proto.enterLink = toggle('inLink', false)
proto.enterBlock = toggle('inBlock', false)

// Nodes that can interupt a paragraph:
//
// ```markdown
// A paragraph, followed by a thematic break.
// ___
// ```
//
// In the above example, the thematic break “interupts” the paragraph.
proto.interruptParagraph = [
  ['thematicBreak'],
  ['list'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}]
]

// Nodes that can interupt a list:
//
// ```markdown
// - One
// ___
// ```
//
// In the above example, the thematic break “interupts” the list.
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}]
]

// Nodes that can interupt a blockquote:
//
// ```markdown
// > A paragraph.
// ___
// ```
//
// In the above example, the thematic break “interupts” the blockquote.
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}]
]

// Handlers.
proto.blockTokenizers = {
  blankLine: __webpack_require__(/*! ./tokenize/blank-line */ "../../node_modules/remark-parse/lib/tokenize/blank-line.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "../../node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "../../node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "../../node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "../../node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "../../node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "../../node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "../../node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "../../node_modules/remark-parse/lib/tokenize/html-block.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "../../node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "../../node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "../../node_modules/remark-parse/lib/tokenize/paragraph.js")
}

proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "../../node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "../../node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "../../node_modules/remark-parse/lib/tokenize/url.js"),
  email: __webpack_require__(/*! ./tokenize/email */ "../../node_modules/remark-parse/lib/tokenize/email.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "../../node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "../../node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "../../node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "../../node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "../../node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "../../node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "../../node_modules/remark-parse/lib/tokenize/code-inline.js"),
  break: __webpack_require__(/*! ./tokenize/break */ "../../node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "../../node_modules/remark-parse/lib/tokenize/text.js")
}

// Expose precedence.
proto.blockMethods = keys(proto.blockTokenizers)
proto.inlineMethods = keys(proto.inlineTokenizers)

// Tokenizers.
proto.tokenizeBlock = tokenizer('block')
proto.tokenizeInline = tokenizer('inline')
proto.tokenizeFactory = tokenizer

// Get all keys in `value`.
function keys(value) {
  var result = []
  var key

  for (key in value) {
    result.push(key)
  }

  return result
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/set-options.js":
/*!*********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/set-options.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var escapes = __webpack_require__(/*! markdown-escapes */ "../../node_modules/markdown-escapes/index.js")
var defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/remark-parse/lib/defaults.js")

module.exports = setOptions

function setOptions(options) {
  var self = this
  var current = self.options
  var key
  var value

  if (options == null) {
    options = {}
  } else if (typeof options === 'object') {
    options = xtend(options)
  } else {
    throw new Error('Invalid value `' + options + '` for setting `options`')
  }

  for (key in defaults) {
    value = options[key]

    if (value == null) {
      value = current[key]
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error(
        'Invalid value `' + value + '` for setting `options.' + key + '`'
      )
    }

    options[key] = value
  }

  self.options = options
  self.escape = escapes(options)

  return self
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var locate = __webpack_require__(/*! ../locate/tag */ "../../node_modules/remark-parse/lib/locate/tag.js")

module.exports = autoLink
autoLink.locator = locate
autoLink.notInLink = true

var lessThan = '<'
var greaterThan = '>'
var atSign = '@'
var slash = '/'
var mailto = 'mailto:'
var mailtoLength = mailto.length

function autoLink(eat, value, silent) {
  var self = this
  var subvalue = ''
  var length = value.length
  var index = 0
  var queue = ''
  var hasAtCharacter = false
  var link = ''
  var character
  var now
  var content
  var tokenizers
  var exit

  if (value.charAt(0) !== lessThan) {
    return
  }

  index++
  subvalue = lessThan

  while (index < length) {
    character = value.charAt(index)

    if (
      whitespace(character) ||
      character === greaterThan ||
      character === atSign ||
      (character === ':' && value.charAt(index + 1) === slash)
    ) {
      break
    }

    queue += character
    index++
  }

  if (!queue) {
    return
  }

  link += queue
  queue = ''

  character = value.charAt(index)
  link += character
  index++

  if (character === atSign) {
    hasAtCharacter = true
  } else {
    if (character !== ':' || value.charAt(index + 1) !== slash) {
      return
    }

    link += slash
    index++
  }

  while (index < length) {
    character = value.charAt(index)

    if (whitespace(character) || character === greaterThan) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)

  if (!queue || character !== greaterThan) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  link += queue
  content = link
  subvalue += link + character
  now = eat.now()
  now.column++
  now.offset++

  if (hasAtCharacter) {
    if (link.slice(0, mailtoLength).toLowerCase() === mailto) {
      content = content.slice(mailtoLength)
      now.column += mailtoLength
      now.offset += mailtoLength
    } else {
      link = mailto + link
    }
  }

  // Temporarily remove all tokenizers except text in autolinks.
  tokenizers = self.inlineTokenizers
  self.inlineTokenizers = {text: tokenizers.text}

  exit = self.enterLink()

  content = self.tokenizeInline(content, now)

  self.inlineTokenizers = tokenizers
  exit()

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/blank-line.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/blank-line.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A line containing no characters, or a line containing only spaces (U+0020) or
// tabs (U+0009), is called a blank line.
// See <https://spec.commonmark.org/0.29/#blank-line>.
var reBlankLine = /^[ \t]*(\n|$)/

// Note that though blank lines play a special role in lists to determine
// whether the list is tight or loose
// (<https://spec.commonmark.org/0.29/#blank-lines>), it’s done by the list
// tokenizer and this blank line tokenizer does not have to be responsible for
// that.
// Therefore, configs such as `blankLine.notInList` do not have to be set here.
module.exports = blankLine

function blankLine(eat, value, silent) {
  var match
  var subvalue = ''
  var index = 0
  var length = value.length

  while (index < length) {
    match = reBlankLine.exec(value.slice(index))

    if (match == null) {
      break
    }

    index += match[0].length
    subvalue += match[0]
  }

  if (subvalue === '') {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  eat(subvalue)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark-parse/lib/util/interrupt.js")

module.exports = blockquote

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var greaterThan = '>'

function blockquote(eat, value, silent) {
  var self = this
  var offsets = self.offset
  var tokenizers = self.blockTokenizers
  var interruptors = self.interruptBlockquote
  var now = eat.now()
  var currentLine = now.line
  var length = value.length
  var values = []
  var contents = []
  var indents = []
  var add
  var index = 0
  var character
  var rest
  var nextIndex
  var content
  var line
  var startIndex
  var prefixed
  var exit

  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    index++
  }

  if (value.charAt(index) !== greaterThan) {
    return
  }

  if (silent) {
    return true
  }

  index = 0

  while (index < length) {
    nextIndex = value.indexOf(lineFeed, index)
    startIndex = index
    prefixed = false

    if (nextIndex === -1) {
      nextIndex = length
    }

    while (index < length) {
      character = value.charAt(index)

      if (character !== space && character !== tab) {
        break
      }

      index++
    }

    if (value.charAt(index) === greaterThan) {
      index++
      prefixed = true

      if (value.charAt(index) === space) {
        index++
      }
    } else {
      index = startIndex
    }

    content = value.slice(index, nextIndex)

    if (!prefixed && !trim(content)) {
      index = startIndex
      break
    }

    if (!prefixed) {
      rest = value.slice(index)

      // Check if the following code contains a possible block.
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex)

    indents.push(index - startIndex)
    values.push(line)
    contents.push(content)

    index = nextIndex + 1
  }

  index = -1
  length = indents.length
  add = eat(values.join(lineFeed))

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index]
    currentLine++
  }

  exit = self.enterBlock()
  contents = self.tokenizeBlock(contents.join(lineFeed), now)
  exit()

  return add({type: 'blockquote', children: contents})
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/break.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/break.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "../../node_modules/remark-parse/lib/locate/break.js")

module.exports = hardBreak
hardBreak.locator = locate

var space = ' '
var lineFeed = '\n'
var minBreakLength = 2

function hardBreak(eat, value, silent) {
  var length = value.length
  var index = -1
  var queue = ''
  var character

  while (++index < length) {
    character = value.charAt(index)

    if (character === lineFeed) {
      if (index < minBreakLength) {
        return
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      queue += character

      return eat(queue)({type: 'break'})
    }

    if (character !== space) {
      return
    }

    queue += character
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fencedCode

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var tilde = '~'
var graveAccent = '`'

var minFenceCount = 3
var tabSize = 4

function fencedCode(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var length = value.length + 1
  var index = 0
  var subvalue = ''
  var fenceCount
  var marker
  var character
  var flag
  var lang
  var meta
  var queue
  var content
  var exdentedContent
  var closing
  var exdentedClosing
  var indent
  var now

  if (!gfm) {
    return
  }

  // Eat initial spacing.
  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  indent = index

  // Eat the fence.
  character = value.charAt(index)

  if (character !== tilde && character !== graveAccent) {
    return
  }

  index++
  marker = character
  fenceCount = 1
  subvalue += character

  while (index < length) {
    character = value.charAt(index)

    if (character !== marker) {
      break
    }

    subvalue += character
    fenceCount++
    index++
  }

  if (fenceCount < minFenceCount) {
    return
  }

  // Eat spacing before flag.
  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  // Eat flag.
  flag = ''
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (
      character === lineFeed ||
      (marker === graveAccent && character === marker)
    ) {
      break
    }

    if (character === space || character === tab) {
      queue += character
    } else {
      flag += queue + character
      queue = ''
    }

    index++
  }

  character = value.charAt(index)

  if (character && character !== lineFeed) {
    return
  }

  if (silent) {
    return true
  }

  now = eat.now()
  now.column += subvalue.length
  now.offset += subvalue.length

  subvalue += flag
  flag = self.decode.raw(self.unescape(flag), now)

  if (queue) {
    subvalue += queue
  }

  queue = ''
  closing = ''
  exdentedClosing = ''
  content = ''
  exdentedContent = ''
  var skip = true

  // Eat content.
  while (index < length) {
    character = value.charAt(index)
    content += closing
    exdentedContent += exdentedClosing
    closing = ''
    exdentedClosing = ''

    if (character !== lineFeed) {
      content += character
      exdentedClosing += character
      index++
      continue
    }

    // The first line feed is ignored. Others aren’t.
    if (skip) {
      subvalue += character
      skip = false
    } else {
      closing += character
      exdentedClosing += character
    }

    queue = ''
    index++

    while (index < length) {
      character = value.charAt(index)

      if (character !== space) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue.slice(indent)

    if (queue.length >= tabSize) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== marker) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue

    if (queue.length < fenceCount) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== space && character !== tab) {
        break
      }

      closing += character
      exdentedClosing += character
      index++
    }

    if (!character || character === lineFeed) {
      break
    }
  }

  subvalue += content + closing

  // Get lang and meta from the flag.
  index = -1
  length = flag.length

  while (++index < length) {
    character = flag.charAt(index)

    if (character === space || character === tab) {
      if (!lang) {
        lang = flag.slice(0, index)
      }
    } else if (lang) {
      meta = flag.slice(index)
      break
    }
  }

  return eat(subvalue)({
    type: 'code',
    lang: lang || flag || null,
    meta: meta || null,
    value: exdentedContent
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var trim = __webpack_require__(/*! trim-trailing-lines */ "../../node_modules/trim-trailing-lines/index.js")

module.exports = indentedCode

var lineFeed = '\n'
var tab = '\t'
var space = ' '

var tabSize = 4
var codeIndent = repeat(space, tabSize)

function indentedCode(eat, value, silent) {
  var index = -1
  var length = value.length
  var subvalue = ''
  var content = ''
  var subvalueQueue = ''
  var contentQueue = ''
  var character
  var blankQueue
  var indent

  while (++index < length) {
    character = value.charAt(index)

    if (indent) {
      indent = false

      subvalue += subvalueQueue
      content += contentQueue
      subvalueQueue = ''
      contentQueue = ''

      if (character === lineFeed) {
        subvalueQueue = character
        contentQueue = character
      } else {
        subvalue += character
        content += character

        while (++index < length) {
          character = value.charAt(index)

          if (!character || character === lineFeed) {
            contentQueue = character
            subvalueQueue = character
            break
          }

          subvalue += character
          content += character
        }
      }
    } else if (
      character === space &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += codeIndent
      index += 3
      indent = true
    } else if (character === tab) {
      subvalueQueue += character
      indent = true
    } else {
      blankQueue = ''

      while (character === tab || character === space) {
        blankQueue += character
        character = value.charAt(++index)
      }

      if (character !== lineFeed) {
        break
      }

      subvalueQueue += blankQueue + character
      contentQueue += character
    }
  }

  if (content) {
    if (silent) {
      return true
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      meta: null,
      value: trim(content)
    })
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/code-inline */ "../../node_modules/remark-parse/lib/locate/code-inline.js")

module.exports = inlineCode
inlineCode.locator = locate

var lineFeed = 10 //  '\n'
var space = 32 // ' '
var graveAccent = 96 //  '`'

function inlineCode(eat, value, silent) {
  var length = value.length
  var index = 0
  var openingFenceEnd
  var closingFenceStart
  var closingFenceEnd
  var code
  var next
  var found

  while (index < length) {
    if (value.charCodeAt(index) !== graveAccent) {
      break
    }

    index++
  }

  if (index === 0 || index === length) {
    return
  }

  openingFenceEnd = index
  next = value.charCodeAt(index)

  while (index < length) {
    code = next
    next = value.charCodeAt(index + 1)

    if (code === graveAccent) {
      if (closingFenceStart === undefined) {
        closingFenceStart = index
      }

      closingFenceEnd = index + 1

      if (
        next !== graveAccent &&
        closingFenceEnd - closingFenceStart === openingFenceEnd
      ) {
        found = true
        break
      }
    } else if (closingFenceStart !== undefined) {
      closingFenceStart = undefined
      closingFenceEnd = undefined
    }

    index++
  }

  if (!found) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  // Remove the initial and final space (or line feed), iff they exist and there
  // are non-space characters in the content.
  index = openingFenceEnd
  length = closingFenceStart
  code = value.charCodeAt(index)
  next = value.charCodeAt(length - 1)
  found = false

  if (
    length - index > 2 &&
    (code === space || code === lineFeed) &&
    (next === space || next === lineFeed)
  ) {
    index++
    length--

    while (index < length) {
      code = value.charCodeAt(index)

      if (code !== space && code !== lineFeed) {
        found = true
        break
      }

      index++
    }

    if (found === true) {
      openingFenceEnd++
      closingFenceStart--
    }
  }

  return eat(value.slice(0, closingFenceEnd))({
    type: 'inlineCode',
    value: value.slice(openingFenceEnd, closingFenceStart)
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/definition.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/definition.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var normalize = __webpack_require__(/*! ../util/normalize */ "../../node_modules/remark-parse/lib/util/normalize.js")

module.exports = definition

var quotationMark = '"'
var apostrophe = "'"
var backslash = '\\'
var lineFeed = '\n'
var tab = '\t'
var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var leftParenthesis = '('
var rightParenthesis = ')'
var colon = ':'
var lessThan = '<'
var greaterThan = '>'

function definition(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var index = 0
  var length = value.length
  var subvalue = ''
  var beforeURL
  var beforeTitle
  var queue
  var character
  var test
  var identifier
  var url
  var title

  while (index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)

  if (character !== leftSquareBracket) {
    return
  }

  index++
  subvalue += character
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character === rightSquareBracket) {
      break
    } else if (character === backslash) {
      queue += character
      index++
      character = value.charAt(index)
    }

    queue += character
    index++
  }

  if (
    !queue ||
    value.charAt(index) !== rightSquareBracket ||
    value.charAt(index + 1) !== colon
  ) {
    return
  }

  identifier = queue
  subvalue += queue + rightSquareBracket + colon
  index = subvalue.length
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space && character !== lineFeed) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)
  queue = ''
  beforeURL = subvalue

  if (character === lessThan) {
    index++

    while (index < length) {
      character = value.charAt(index)

      if (!isEnclosedURLCharacter(character)) {
        break
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += lessThan + queue + character
      index++
    } else {
      if (commonmark) {
        return
      }

      index -= queue.length + 1
      queue = ''
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index)

      if (!isUnclosedURLCharacter(character)) {
        break
      }

      queue += character
      index++
    }

    subvalue += queue
  }

  if (!queue) {
    return
  }

  url = queue
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space && character !== lineFeed) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)
  test = null

  if (character === quotationMark) {
    test = quotationMark
  } else if (character === apostrophe) {
    test = apostrophe
  } else if (character === leftParenthesis) {
    test = rightParenthesis
  }

  if (!test) {
    queue = ''
    index = subvalue.length
  } else if (queue) {
    subvalue += queue + character
    index = subvalue.length
    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character === test) {
        break
      }

      if (character === lineFeed) {
        index++
        character = value.charAt(index)

        if (character === lineFeed || character === test) {
          return
        }

        queue += lineFeed
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (character !== test) {
      return
    }

    beforeTitle = subvalue
    subvalue += queue + character
    index++
    title = queue
    queue = ''
  } else {
    return
  }

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    subvalue += character
    index++
  }

  character = value.charAt(index)

  if (!character || character === lineFeed) {
    if (silent) {
      return true
    }

    beforeURL = eat(beforeURL).test().end
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false})

    if (title) {
      beforeTitle = eat(beforeTitle).test().end
      title = self.decode.raw(self.unescape(title), beforeTitle)
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      label: identifier,
      title: title || null,
      url: url
    })
  }
}

// Check if `character` can be inside an enclosed URI.
function isEnclosedURLCharacter(character) {
  return (
    character !== greaterThan &&
    character !== leftSquareBracket &&
    character !== rightSquareBracket
  )
}

isEnclosedURLCharacter.delimiter = greaterThan

// Check if `character` can be inside an unclosed URI.
function isUnclosedURLCharacter(character) {
  return (
    character !== leftSquareBracket &&
    character !== rightSquareBracket &&
    !whitespace(character)
  )
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/delete.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/delete.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/delete */ "../../node_modules/remark-parse/lib/locate/delete.js")

module.exports = strikethrough
strikethrough.locator = locate

var tilde = '~'
var fence = '~~'

function strikethrough(eat, value, silent) {
  var self = this
  var character = ''
  var previous = ''
  var preceding = ''
  var subvalue = ''
  var index
  var length
  var now

  if (
    !self.options.gfm ||
    value.charAt(0) !== tilde ||
    value.charAt(1) !== tilde ||
    whitespace(value.charAt(2))
  ) {
    return
  }

  index = 1
  length = value.length
  now = eat.now()
  now.column += 2
  now.offset += 2

  while (++index < length) {
    character = value.charAt(index)

    if (
      character === tilde &&
      previous === tilde &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      return eat(fence + subvalue + fence)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      })
    }

    subvalue += previous
    preceding = previous
    previous = character
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/email.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/email.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var locate = __webpack_require__(/*! ../locate/email */ "../../node_modules/remark-parse/lib/locate/email.js")

module.exports = email
email.locator = locate
email.notInLink = true

var plusSign = 43 // '+'
var dash = 45 // '-'
var dot = 46 // '.'
var atSign = 64 // '@'
var underscore = 95 // '_'

function email(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var tokenizers = self.inlineTokenizers
  var index = 0
  var length = value.length
  var firstDot = -1
  var code
  var content
  var children
  var exit

  if (!gfm) {
    return
  }

  code = value.charCodeAt(index)

  while (
    decimal(code) ||
    alphabetical(code) ||
    code === plusSign ||
    code === dash ||
    code === dot ||
    code === underscore
  ) {
    code = value.charCodeAt(++index)
  }

  if (index === 0) {
    return
  }

  if (code !== atSign) {
    return
  }

  index++

  while (index < length) {
    code = value.charCodeAt(index)

    if (
      decimal(code) ||
      alphabetical(code) ||
      code === dash ||
      code === dot ||
      code === underscore
    ) {
      index++

      if (firstDot === -1 && code === dot) {
        firstDot = index
      }

      continue
    }

    break
  }

  if (
    firstDot === -1 ||
    firstDot === index ||
    code === dash ||
    code === underscore
  ) {
    return
  }

  if (code === dot) {
    index--
  }

  content = value.slice(0, index)

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  exit = self.enterLink()

  // Temporarily remove all tokenizers except text in url.
  self.inlineTokenizers = {text: tokenizers.text}
  children = self.tokenizeInline(content, eat.now())
  self.inlineTokenizers = tokenizers

  exit()

  return eat(content)({
    type: 'link',
    title: null,
    url: 'mailto:' + decode(content, {nonTerminated: false}),
    children: children
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!***************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var word = __webpack_require__(/*! is-word-character */ "../../node_modules/is-word-character/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/emphasis */ "../../node_modules/remark-parse/lib/locate/emphasis.js")

module.exports = emphasis
emphasis.locator = locate

var asterisk = '*'
var underscore = '_'
var backslash = '\\'

function emphasis(eat, value, silent) {
  var self = this
  var index = 0
  var character = value.charAt(index)
  var now
  var pedantic
  var marker
  var queue
  var subvalue
  var length
  var previous

  if (character !== asterisk && character !== underscore) {
    return
  }

  pedantic = self.options.pedantic
  subvalue = character
  marker = character
  length = value.length
  index++
  queue = ''
  character = ''

  if (pedantic && whitespace(value.charAt(index))) {
    return
  }

  while (index < length) {
    previous = character
    character = value.charAt(index)

    if (character === marker && (!pedantic || !whitespace(previous))) {
      character = value.charAt(++index)

      if (character !== marker) {
        if (!trim(queue) || previous === marker) {
          return
        }

        if (!pedantic && marker === underscore && word(character)) {
          queue += marker
          continue
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true
        }

        now = eat.now()
        now.column++
        now.offset++

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        })
      }

      queue += marker
    }

    if (!pedantic && character === backslash) {
      queue += character
      character = value.charAt(++index)
    }

    queue += character
    index++
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/escape.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/escape.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "../../node_modules/remark-parse/lib/locate/escape.js")

module.exports = escape
escape.locator = locate

var lineFeed = '\n'
var backslash = '\\'

function escape(eat, value, silent) {
  var self = this
  var character
  var node

  if (value.charAt(0) === backslash) {
    character = value.charAt(1)

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true
      }

      if (character === lineFeed) {
        node = {type: 'break'}
      } else {
        node = {type: 'text', value: character}
      }

      return eat(backslash + character)(node)
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var numberSign = '#'

var maxFenceCount = 6

function atxHeading(eat, value, silent) {
  var self = this
  var pedantic = self.options.pedantic
  var length = value.length + 1
  var index = -1
  var now = eat.now()
  var subvalue = ''
  var content = ''
  var character
  var queue
  var depth

  // Eat initial spacing.
  while (++index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      index--
      break
    }

    subvalue += character
  }

  // Eat hashes.
  depth = 0

  while (++index <= length) {
    character = value.charAt(index)

    if (character !== numberSign) {
      index--
      break
    }

    subvalue += character
    depth++
  }

  if (depth > maxFenceCount) {
    return
  }

  if (!depth || (!pedantic && value.charAt(index + 1) === numberSign)) {
    return
  }

  length = value.length + 1

  // Eat intermediate white-space.
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character !== space && character !== tab) {
      index--
      break
    }

    queue += character
  }

  // Exit when not in pedantic mode without spacing.
  if (!pedantic && queue.length === 0 && character && character !== lineFeed) {
    return
  }

  if (silent) {
    return true
  }

  // Eat content.
  subvalue += queue
  queue = ''
  content = ''

  while (++index < length) {
    character = value.charAt(index)

    if (!character || character === lineFeed) {
      break
    }

    if (character !== space && character !== tab && character !== numberSign) {
      content += queue + character
      queue = ''
      continue
    }

    while (character === space || character === tab) {
      queue += character
      character = value.charAt(++index)
    }

    // `#` without a queue is part of the content.
    if (!pedantic && content && !queue && character === numberSign) {
      content += character
      continue
    }

    while (character === numberSign) {
      queue += character
      character = value.charAt(++index)
    }

    while (character === space || character === tab) {
      queue += character
      character = value.charAt(++index)
    }

    index--
  }

  now.column += subvalue.length
  now.offset += subvalue.length
  subvalue += content + queue

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading

var lineFeed = '\n'
var tab = '\t'
var space = ' '
var equalsTo = '='
var dash = '-'

var maxIndent = 3

var equalsToDepth = 1
var dashDepth = 2

function setextHeading(eat, value, silent) {
  var self = this
  var now = eat.now()
  var length = value.length
  var index = -1
  var subvalue = ''
  var content
  var queue
  var character
  var marker
  var depth

  // Eat initial indentation.
  while (++index < length) {
    character = value.charAt(index)

    if (character !== space || index >= maxIndent) {
      index--
      break
    }

    subvalue += character
  }

  // Eat content.
  content = ''
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character === lineFeed) {
      index--
      break
    }

    if (character === space || character === tab) {
      queue += character
    } else {
      content += queue + character
      queue = ''
    }
  }

  now.column += subvalue.length
  now.offset += subvalue.length
  subvalue += content + queue

  // Ensure the content is followed by a newline and a valid marker.
  character = value.charAt(++index)
  marker = value.charAt(++index)

  if (character !== lineFeed || (marker !== equalsTo && marker !== dash)) {
    return
  }

  subvalue += character

  // Eat Setext-line.
  queue = marker
  depth = marker === equalsTo ? equalsToDepth : dashDepth

  while (++index < length) {
    character = value.charAt(index)

    if (character !== marker) {
      if (character !== lineFeed) {
        return
      }

      index--
      break
    }

    queue += character
  }

  if (silent) {
    return true
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/html-block.js":
/*!*****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "../../node_modules/remark-parse/lib/util/html.js").openCloseTag

module.exports = blockHtml

var tab = '\t'
var space = ' '
var lineFeed = '\n'
var lessThan = '<'

var rawOpenExpression = /^<(script|pre|style)(?=(\s|>|$))/i
var rawCloseExpression = /<\/(script|pre|style)>/i
var commentOpenExpression = /^<!--/
var commentCloseExpression = /-->/
var instructionOpenExpression = /^<\?/
var instructionCloseExpression = /\?>/
var directiveOpenExpression = /^<![A-Za-z]/
var directiveCloseExpression = />/
var cdataOpenExpression = /^<!\[CDATA\[/
var cdataCloseExpression = /]]>/
var elementCloseExpression = /^$/
var otherElementOpenExpression = new RegExp(openCloseTag.source + '\\s*$')

function blockHtml(eat, value, silent) {
  var self = this
  var blocks = self.options.blocks.join('|')
  var elementOpenExpression = new RegExp(
    '^</?(' + blocks + ')(?=(\\s|/?>|$))',
    'i'
  )
  var length = value.length
  var index = 0
  var next
  var line
  var offset
  var character
  var count
  var sequence
  var subvalue

  var sequences = [
    [rawOpenExpression, rawCloseExpression, true],
    [commentOpenExpression, commentCloseExpression, true],
    [instructionOpenExpression, instructionCloseExpression, true],
    [directiveOpenExpression, directiveCloseExpression, true],
    [cdataOpenExpression, cdataCloseExpression, true],
    [elementOpenExpression, elementCloseExpression, true],
    [otherElementOpenExpression, elementCloseExpression, false]
  ]

  // Eat initial spacing.
  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    index++
  }

  if (value.charAt(index) !== lessThan) {
    return
  }

  next = value.indexOf(lineFeed, index + 1)
  next = next === -1 ? length : next
  line = value.slice(index, next)
  offset = -1
  count = sequences.length

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset]
      break
    }
  }

  if (!sequence) {
    return
  }

  if (silent) {
    return sequence[2]
  }

  index = next

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(lineFeed, index + 1)
      next = next === -1 ? length : next
      line = value.slice(index + 1, next)

      if (sequence[1].test(line)) {
        if (line) {
          index = next
        }

        break
      }

      index = next
    }
  }

  subvalue = value.slice(0, index)

  return eat(subvalue)({type: 'html', value: subvalue})
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var locate = __webpack_require__(/*! ../locate/tag */ "../../node_modules/remark-parse/lib/locate/tag.js")
var tag = __webpack_require__(/*! ../util/html */ "../../node_modules/remark-parse/lib/util/html.js").tag

module.exports = inlineHTML
inlineHTML.locator = locate

var lessThan = '<'
var questionMark = '?'
var exclamationMark = '!'
var slash = '/'

var htmlLinkOpenExpression = /^<a /i
var htmlLinkCloseExpression = /^<\/a>/i

function inlineHTML(eat, value, silent) {
  var self = this
  var length = value.length
  var character
  var subvalue

  if (value.charAt(0) !== lessThan || length < 3) {
    return
  }

  character = value.charAt(1)

  if (
    !alphabetical(character) &&
    character !== questionMark &&
    character !== exclamationMark &&
    character !== slash
  ) {
    return
  }

  subvalue = value.match(tag)

  if (!subvalue) {
    return
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true
  }

  subvalue = subvalue[0]

  if (!self.inLink && htmlLinkOpenExpression.test(subvalue)) {
    self.inLink = true
  } else if (self.inLink && htmlLinkCloseExpression.test(subvalue)) {
    self.inLink = false
  }

  return eat(subvalue)({type: 'html', value: subvalue})
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/link.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/link.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/link */ "../../node_modules/remark-parse/lib/locate/link.js")

module.exports = link
link.locator = locate

var lineFeed = '\n'
var exclamationMark = '!'
var quotationMark = '"'
var apostrophe = "'"
var leftParenthesis = '('
var rightParenthesis = ')'
var lessThan = '<'
var greaterThan = '>'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'
var graveAccent = '`'

function link(eat, value, silent) {
  var self = this
  var subvalue = ''
  var index = 0
  var character = value.charAt(0)
  var pedantic = self.options.pedantic
  var commonmark = self.options.commonmark
  var gfm = self.options.gfm
  var closed
  var count
  var opening
  var beforeURL
  var beforeTitle
  var subqueue
  var hasMarker
  var isImage
  var content
  var marker
  var length
  var title
  var depth
  var queue
  var url
  var now
  var exit
  var node

  // Detect whether this is an image.
  if (character === exclamationMark) {
    isImage = true
    subvalue = character
    character = value.charAt(++index)
  }

  // Eat the opening.
  if (character !== leftSquareBracket) {
    return
  }

  // Exit when this is a link and we’re already inside a link.
  if (!isImage && self.inLink) {
    return
  }

  subvalue += character
  queue = ''
  index++

  // Eat the content.
  length = value.length
  now = eat.now()
  depth = 0

  now.column += index
  now.offset += index

  while (index < length) {
    character = value.charAt(index)
    subqueue = character

    if (character === graveAccent) {
      // Inline-code in link content.
      count = 1

      while (value.charAt(index + 1) === graveAccent) {
        subqueue += character
        index++
        count++
      }

      if (!opening) {
        opening = count
      } else if (count >= opening) {
        opening = 0
      }
    } else if (character === backslash) {
      // Allow brackets to be escaped.
      index++
      subqueue += value.charAt(index)
    } else if ((!opening || gfm) && character === leftSquareBracket) {
      // In GFM mode, brackets in code still count.  In all other modes,
      // they don’t.
      depth++
    } else if ((!opening || gfm) && character === rightSquareBracket) {
      if (depth) {
        depth--
      } else {
        if (value.charAt(index + 1) !== leftParenthesis) {
          return
        }

        subqueue += leftParenthesis
        closed = true
        index++

        break
      }
    }

    queue += subqueue
    subqueue = ''
    index++
  }

  // Eat the content closing.
  if (!closed) {
    return
  }

  content = queue
  subvalue += queue + subqueue
  index++

  // Eat white-space.
  while (index < length) {
    character = value.charAt(index)

    if (!whitespace(character)) {
      break
    }

    subvalue += character
    index++
  }

  // Eat the URL.
  character = value.charAt(index)
  queue = ''
  beforeURL = subvalue

  if (character === lessThan) {
    index++
    beforeURL += lessThan

    while (index < length) {
      character = value.charAt(index)

      if (character === greaterThan) {
        break
      }

      if (commonmark && character === lineFeed) {
        return
      }

      queue += character
      index++
    }

    if (value.charAt(index) !== greaterThan) {
      return
    }

    subvalue += lessThan + queue + greaterThan
    url = queue
    index++
  } else {
    character = null
    subqueue = ''

    while (index < length) {
      character = value.charAt(index)

      if (
        subqueue &&
        (character === quotationMark ||
          character === apostrophe ||
          (commonmark && character === leftParenthesis))
      ) {
        break
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break
        }

        subqueue += character
      } else {
        if (character === leftParenthesis) {
          depth++
        } else if (character === rightParenthesis) {
          if (depth === 0) {
            break
          }

          depth--
        }

        queue += subqueue
        subqueue = ''

        if (character === backslash) {
          queue += backslash
          character = value.charAt(++index)
        }

        queue += character
      }

      index++
    }

    subvalue += queue
    url = queue
    index = subvalue.length
  }

  // Eat white-space.
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (!whitespace(character)) {
      break
    }

    queue += character
    index++
  }

  character = value.charAt(index)
  subvalue += queue

  // Eat the title.
  if (
    queue &&
    (character === quotationMark ||
      character === apostrophe ||
      (commonmark && character === leftParenthesis))
  ) {
    index++
    subvalue += character
    queue = ''
    marker = character === leftParenthesis ? rightParenthesis : character
    beforeTitle = subvalue

    // In commonmark-mode, things are pretty easy: the marker cannot occur
    // inside the title.  Non-commonmark does, however, support nested
    // delimiters.
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index)

        if (character === marker) {
          break
        }

        if (character === backslash) {
          queue += backslash
          character = value.charAt(++index)
        }

        index++
        queue += character
      }

      character = value.charAt(index)

      if (character !== marker) {
        return
      }

      title = queue
      subvalue += queue + character
      index++

      while (index < length) {
        character = value.charAt(index)

        if (!whitespace(character)) {
          break
        }

        subvalue += character
        index++
      }
    } else {
      subqueue = ''

      while (index < length) {
        character = value.charAt(index)

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue
            subqueue = ''
          }

          hasMarker = true
        } else if (!hasMarker) {
          queue += character
        } else if (character === rightParenthesis) {
          subvalue += queue + marker + subqueue
          title = queue
          break
        } else if (whitespace(character)) {
          subqueue += character
        } else {
          queue += marker + subqueue + character
          subqueue = ''
          hasMarker = false
        }

        index++
      }
    }
  }

  if (value.charAt(index) !== rightParenthesis) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  subvalue += rightParenthesis

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
    nonTerminated: false
  })

  if (title) {
    beforeTitle = eat(beforeTitle).test().end
    title = self.decode.raw(self.unescape(title), beforeTitle)
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  }

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null
  } else {
    exit = self.enterLink()
    node.children = self.tokenizeInline(content, now)
    exit()
  }

  return eat(subvalue)(node)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/list.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/list.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var getIndent = __webpack_require__(/*! ../util/get-indentation */ "../../node_modules/remark-parse/lib/util/get-indentation.js")
var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "../../node_modules/remark-parse/lib/util/remove-indentation.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark-parse/lib/util/interrupt.js")

module.exports = list

var asterisk = '*'
var underscore = '_'
var plusSign = '+'
var dash = '-'
var dot = '.'
var space = ' '
var lineFeed = '\n'
var tab = '\t'
var rightParenthesis = ')'
var lowercaseX = 'x'

var tabSize = 4
var looseListItemExpression = /\n\n(?!\s*$)/
var taskItemExpression = /^\[([ X\tx])][ \t]/
var bulletExpression = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/
var pedanticBulletExpression = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/
var initialIndentExpression = /^( {1,4}|\t)?/gm

function list(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var pedantic = self.options.pedantic
  var tokenizers = self.blockTokenizers
  var interuptors = self.interruptList
  var index = 0
  var length = value.length
  var start = null
  var size
  var queue
  var ordered
  var character
  var marker
  var nextIndex
  var startIndex
  var prefixed
  var currentMarker
  var content
  var line
  var previousEmpty
  var empty
  var items
  var allLines
  var emptyLines
  var item
  var enterTop
  var exitBlockquote
  var spread = false
  var node
  var now
  var end
  var indented

  while (index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    index++
  }

  character = value.charAt(index)

  if (character === asterisk || character === plusSign || character === dash) {
    marker = character
    ordered = false
  } else {
    ordered = true
    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (!decimal(character)) {
        break
      }

      queue += character
      index++
    }

    character = value.charAt(index)

    if (
      !queue ||
      !(character === dot || (commonmark && character === rightParenthesis))
    ) {
      return
    }

    /* Slightly abusing `silent` mode, whose goal is to make interrupting
     * paragraphs work.
     * Well, that’s exactly what we want to do here: don’t interrupt:
     * 2. here, because the “list” doesn’t start with `1`. */
    if (silent && queue !== '1') {
      return
    }

    start = parseInt(queue, 10)
    marker = character
  }

  character = value.charAt(++index)

  if (
    character !== space &&
    character !== tab &&
    (pedantic || (character !== lineFeed && character !== ''))
  ) {
    return
  }

  if (silent) {
    return true
  }

  index = 0
  items = []
  allLines = []
  emptyLines = []

  while (index < length) {
    nextIndex = value.indexOf(lineFeed, index)
    startIndex = index
    prefixed = false
    indented = false

    if (nextIndex === -1) {
      nextIndex = length
    }

    size = 0

    while (index < length) {
      character = value.charAt(index)

      if (character === tab) {
        size += tabSize - (size % tabSize)
      } else if (character === space) {
        size++
      } else {
        break
      }

      index++
    }

    if (item && size >= item.indent) {
      indented = true
    }

    character = value.charAt(index)
    currentMarker = null

    if (!indented) {
      if (
        character === asterisk ||
        character === plusSign ||
        character === dash
      ) {
        currentMarker = character
        index++
        size++
      } else {
        queue = ''

        while (index < length) {
          character = value.charAt(index)

          if (!decimal(character)) {
            break
          }

          queue += character
          index++
        }

        character = value.charAt(index)
        index++

        if (
          queue &&
          (character === dot || (commonmark && character === rightParenthesis))
        ) {
          currentMarker = character
          size += queue.length + 1
        }
      }

      if (currentMarker) {
        character = value.charAt(index)

        if (character === tab) {
          size += tabSize - (size % tabSize)
          index++
        } else if (character === space) {
          end = index + tabSize

          while (index < end) {
            if (value.charAt(index) !== space) {
              break
            }

            index++
            size++
          }

          if (index === end && value.charAt(index) === space) {
            index -= tabSize - 1
            size -= tabSize - 1
          }
        } else if (character !== lineFeed && character !== '') {
          currentMarker = null
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break
      }

      prefixed = true
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === space) {
        indented = true
      } else if (commonmark && item) {
        indented = size >= item.indent || size > tabSize
      }

      prefixed = false
      index = startIndex
    }

    line = value.slice(startIndex, nextIndex)
    content = startIndex === index ? line : value.slice(index, nextIndex)

    if (
      currentMarker === asterisk ||
      currentMarker === underscore ||
      currentMarker === dash
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break
      }
    }

    previousEmpty = empty
    empty = !prefixed && !trim(content).length

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        spread = true
        item.value.push('')
        item.trail = emptyLines.concat()
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      }

      items.push(item)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    } else if (empty) {
      if (previousEmpty && !commonmark) {
        break
      }

      emptyLines.push(line)
    } else {
      if (previousEmpty) {
        break
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break
      }

      item.value = item.value.concat(emptyLines, line)
      allLines = allLines.concat(emptyLines, line)
      emptyLines = []
    }

    index = nextIndex + 1
  }

  node = eat(allLines.join(lineFeed)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    spread: spread,
    children: []
  })

  enterTop = self.enterList()
  exitBlockquote = self.enterBlock()
  index = -1
  length = items.length

  while (++index < length) {
    item = items[index].value.join(lineFeed)
    now = eat.now()

    eat(item)(listItem(self, item, now), node)

    item = items[index].trail.join(lineFeed)

    if (index !== length - 1) {
      item += lineFeed
    }

    eat(item)
  }

  enterTop()
  exitBlockquote()

  return node
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem
  var checked = null
  var task
  var indent

  value = fn.apply(null, arguments)

  if (ctx.options.gfm) {
    task = value.match(taskItemExpression)

    if (task) {
      indent = task[0].length
      checked = task[1].toLowerCase() === lowercaseX
      offsets[position.line] += indent
      value = value.slice(indent)
    }
  }

  return {
    type: 'listItem',
    spread: looseListItemExpression.test(value),
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  }
}

// Create a list-item using overly simple mechanics.
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset
  var line = position.line

  // Remove the list-item’s bullet.
  value = value.replace(pedanticBulletExpression, replacer)

  // The initial line was also matched by the below, so we reset the `line`.
  line = position.line

  return value.replace(initialIndentExpression, replacer)

  // A simple replacer which removed all matches, and adds their length to
  // `offset`.
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length
    line++

    return ''
  }
}

// Create a list-item using sane mechanics.
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset
  var line = position.line
  var max
  var bullet
  var rest
  var lines
  var trimmedLines
  var index
  var length

  // Remove the list-item’s bullet.
  value = value.replace(bulletExpression, replacer)

  lines = value.split(lineFeed)

  trimmedLines = removeIndent(value, getIndent(max).indent).split(lineFeed)

  // We replaced the initial bullet with something else above, which was used
  // to trick `removeIndentation` into removing some more characters when
  // possible.  However, that could result in the initial line to be stripped
  // more than it should be.
  trimmedLines[0] = rest

  offsets[line] = (offsets[line] || 0) + bullet.length
  line++

  index = 0
  length = lines.length

  while (++index < length) {
    offsets[line] =
      (offsets[line] || 0) + lines[index].length - trimmedLines[index].length
    line++
  }

  return trimmedLines.join(lineFeed)

  /* eslint-disable-next-line max-params */
  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3
    rest = $4

    // Make sure that the first nine numbered list items can indent with an
    // extra space.  That is, when the bullet did not receive an extra final
    // space.
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = space + $2
    }

    max = $1 + repeat(space, $2.length) + $3

    return max + rest
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "../../node_modules/trim-trailing-lines/index.js")
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../../node_modules/remark-parse/lib/util/interrupt.js")

module.exports = paragraph

var tab = '\t'
var lineFeed = '\n'
var space = ' '

var tabSize = 4

// Tokenise paragraph.
function paragraph(eat, value, silent) {
  var self = this
  var settings = self.options
  var commonmark = settings.commonmark
  var tokenizers = self.blockTokenizers
  var interruptors = self.interruptParagraph
  var index = value.indexOf(lineFeed)
  var length = value.length
  var position
  var subvalue
  var character
  var size
  var now

  while (index < length) {
    // Eat everything if there’s no following newline.
    if (index === -1) {
      index = length
      break
    }

    // Stop if the next character is NEWLINE.
    if (value.charAt(index + 1) === lineFeed) {
      break
    }

    // In commonmark-mode, following indented lines are part of the paragraph.
    if (commonmark) {
      size = 0
      position = index + 1

      while (position < length) {
        character = value.charAt(position)

        if (character === tab) {
          size = tabSize
          break
        } else if (character === space) {
          size++
        } else {
          break
        }

        position++
      }

      if (size >= tabSize && character !== lineFeed) {
        index = value.indexOf(lineFeed, index + 1)
        continue
      }
    }

    subvalue = value.slice(index + 1)

    // Check if the following code contains a possible block.
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break
    }

    position = index
    index = value.indexOf(lineFeed, index + 1)

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position
      break
    }
  }

  subvalue = value.slice(0, index)

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  now = eat.now()
  subvalue = trimTrailingLines(subvalue)

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  })
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/reference.js":
/*!****************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/reference.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/link */ "../../node_modules/remark-parse/lib/locate/link.js")
var normalize = __webpack_require__(/*! ../util/normalize */ "../../node_modules/remark-parse/lib/util/normalize.js")

module.exports = reference
reference.locator = locate

var link = 'link'
var image = 'image'
var shortcut = 'shortcut'
var collapsed = 'collapsed'
var full = 'full'
var exclamationMark = '!'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'

function reference(eat, value, silent) {
  var self = this
  var commonmark = self.options.commonmark
  var character = value.charAt(0)
  var index = 0
  var length = value.length
  var subvalue = ''
  var intro = ''
  var type = link
  var referenceType = shortcut
  var content
  var identifier
  var now
  var node
  var exit
  var queue
  var bracketed
  var depth

  // Check whether we’re eating an image.
  if (character === exclamationMark) {
    type = image
    intro = character
    character = value.charAt(++index)
  }

  if (character !== leftSquareBracket) {
    return
  }

  index++
  intro += character
  queue = ''

  // Eat the text.
  depth = 0

  while (index < length) {
    character = value.charAt(index)

    if (character === leftSquareBracket) {
      bracketed = true
      depth++
    } else if (character === rightSquareBracket) {
      if (!depth) {
        break
      }

      depth--
    }

    if (character === backslash) {
      queue += backslash
      character = value.charAt(++index)
    }

    queue += character
    index++
  }

  subvalue = queue
  content = queue
  character = value.charAt(index)

  if (character !== rightSquareBracket) {
    return
  }

  index++
  subvalue += character
  queue = ''

  if (!commonmark) {
    // The original markdown syntax definition explicitly allows for whitespace
    // between the link text and link label; commonmark departs from this, in
    // part to improve support for shortcut reference links
    while (index < length) {
      character = value.charAt(index)

      if (!whitespace(character)) {
        break
      }

      queue += character
      index++
    }
  }

  character = value.charAt(index)

  if (character === leftSquareBracket) {
    identifier = ''
    queue += character
    index++

    while (index < length) {
      character = value.charAt(index)

      if (character === leftSquareBracket || character === rightSquareBracket) {
        break
      }

      if (character === backslash) {
        identifier += backslash
        character = value.charAt(++index)
      }

      identifier += character
      index++
    }

    character = value.charAt(index)

    if (character === rightSquareBracket) {
      referenceType = identifier ? full : collapsed
      queue += identifier + character
      index++
    } else {
      identifier = ''
    }

    subvalue += queue
    queue = ''
  } else {
    if (!content) {
      return
    }

    identifier = content
  }

  // Brackets cannot be inside the identifier.
  if (referenceType !== full && bracketed) {
    return
  }

  subvalue = intro + subvalue

  if (type === link && self.inLink) {
    return null
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  now = eat.now()
  now.column += intro.length
  now.offset += intro.length
  identifier = referenceType === full ? identifier : content

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier),
    label: identifier,
    referenceType: referenceType
  }

  if (type === link) {
    exit = self.enterLink()
    node.children = self.tokenizeInline(content, now)
    exit()
  } else {
    node.alt = self.decode.raw(self.unescape(content), now) || null
  }

  return eat(subvalue)(node)
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/strong.js":
/*!*************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/strong.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/strong */ "../../node_modules/remark-parse/lib/locate/strong.js")

module.exports = strong
strong.locator = locate

var backslash = '\\'
var asterisk = '*'
var underscore = '_'

function strong(eat, value, silent) {
  var self = this
  var index = 0
  var character = value.charAt(index)
  var now
  var pedantic
  var marker
  var queue
  var subvalue
  var length
  var previous

  if (
    (character !== asterisk && character !== underscore) ||
    value.charAt(++index) !== character
  ) {
    return
  }

  pedantic = self.options.pedantic
  marker = character
  subvalue = marker + marker
  length = value.length
  index++
  queue = ''
  character = ''

  if (pedantic && whitespace(value.charAt(index))) {
    return
  }

  while (index < length) {
    previous = character
    character = value.charAt(index)

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(previous))
    ) {
      character = value.charAt(index + 2)

      if (character !== marker) {
        if (!trim(queue)) {
          return
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true
        }

        now = eat.now()
        now.column += 2
        now.offset += 2

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        })
      }
    }

    if (!pedantic && character === backslash) {
      queue += character
      character = value.charAt(++index)
    }

    queue += character
    index++
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/table.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/table.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")

module.exports = table

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var dash = '-'
var colon = ':'
var backslash = '\\'
var verticalBar = '|'

var minColumns = 1
var minRows = 2

var left = 'left'
var center = 'center'
var right = 'right'

function table(eat, value, silent) {
  var self = this
  var index
  var alignments
  var alignment
  var subvalue
  var row
  var length
  var lines
  var queue
  var character
  var hasDash
  var align
  var cell
  var preamble
  var now
  var position
  var lineCount
  var line
  var rows
  var table
  var lineIndex
  var pipeIndex
  var first

  // Exit when not in gfm-mode.
  if (!self.options.gfm) {
    return
  }

  // Get the rows.
  // Detecting tables soon is hard, so there are some checks for performance
  // here, such as the minimum number of rows, and allowed characters in the
  // alignment row.
  index = 0
  lineCount = 0
  length = value.length + 1
  lines = []

  while (index < length) {
    lineIndex = value.indexOf(lineFeed, index)
    pipeIndex = value.indexOf(verticalBar, index + 1)

    if (lineIndex === -1) {
      lineIndex = value.length
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < minRows) {
        return
      }

      break
    }

    lines.push(value.slice(index, lineIndex))
    lineCount++
    index = lineIndex + 1
  }

  // Parse the alignment row.
  subvalue = lines.join(lineFeed)
  alignments = lines.splice(1, 1)[0] || []
  index = 0
  length = alignments.length
  lineCount--
  alignment = false
  align = []

  while (index < length) {
    character = alignments.charAt(index)

    if (character === verticalBar) {
      hasDash = null

      if (alignment === false) {
        if (first === false) {
          return
        }
      } else {
        align.push(alignment)
        alignment = false
      }

      first = false
    } else if (character === dash) {
      hasDash = true
      alignment = alignment || null
    } else if (character === colon) {
      if (alignment === left) {
        alignment = center
      } else if (hasDash && alignment === null) {
        alignment = right
      } else {
        alignment = left
      }
    } else if (!whitespace(character)) {
      return
    }

    index++
  }

  if (alignment !== false) {
    align.push(alignment)
  }

  // Exit when without enough columns.
  if (align.length < minColumns) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  // Parse the rows.
  position = -1
  rows = []

  table = eat(subvalue).reset({type: 'table', align: align, children: rows})

  while (++position < lineCount) {
    line = lines[position]
    row = {type: 'tableRow', children: []}

    // Eat a newline character when this is not the first row.
    if (position) {
      eat(lineFeed)
    }

    // Eat the row.
    eat(line).reset(row, table)

    length = line.length + 1
    index = 0
    queue = ''
    cell = ''
    preamble = true

    while (index < length) {
      character = line.charAt(index)

      if (character === tab || character === space) {
        if (cell) {
          queue += character
        } else {
          eat(character)
        }

        index++
        continue
      }

      if (character === '' || character === verticalBar) {
        if (preamble) {
          eat(character)
        } else {
          if ((cell || character) && !preamble) {
            subvalue = cell

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, -1)
                queue = queue.charAt(queue.length - 1)
              } else {
                subvalue += queue
                queue = ''
              }
            }

            now = eat.now()

            eat(subvalue)(
              {type: 'tableCell', children: self.tokenizeInline(cell, now)},
              row
            )
          }

          eat(queue + character)

          queue = ''
          cell = ''
        }
      } else {
        if (queue) {
          cell += queue
          queue = ''
        }

        cell += character

        if (character === backslash && index !== length - 2) {
          cell += line.charAt(index + 1)
          index++
        }
      }

      preamble = false
      index++
    }

    // Eat the alignment row.
    if (!position) {
      eat(lineFeed + alignments)
    }
  }

  return table
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/text.js":
/*!***********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/text.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

function text(eat, value, silent) {
  var self = this
  var methods
  var tokenizers
  var index
  var length
  var subvalue
  var position
  var tokenizer
  var name
  var min
  var now

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  methods = self.inlineMethods
  length = methods.length
  tokenizers = self.inlineTokenizers
  index = -1
  min = value.length

  while (++index < length) {
    name = methods[index]

    if (name === 'text' || !tokenizers[name]) {
      continue
    }

    tokenizer = tokenizers[name].locator

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`')
    }

    position = tokenizer.call(self, value, 1)

    if (position !== -1 && position < min) {
      min = position
    }
  }

  subvalue = value.slice(0, min)
  now = eat.now()

  self.decode(subvalue, now, handler)

  function handler(content, position, source) {
    eat(source || content)({type: 'text', value: content})
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var asterisk = '*'
var dash = '-'
var underscore = '_'

var maxCount = 3

function thematicBreak(eat, value, silent) {
  var index = -1
  var length = value.length + 1
  var subvalue = ''
  var character
  var marker
  var markerCount
  var queue

  while (++index < length) {
    character = value.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    subvalue += character
  }

  if (
    character !== asterisk &&
    character !== dash &&
    character !== underscore
  ) {
    return
  }

  marker = character
  subvalue += character
  markerCount = 1
  queue = ''

  while (++index < length) {
    character = value.charAt(index)

    if (character === marker) {
      markerCount++
      subvalue += queue + marker
      queue = ''
    } else if (character === space) {
      queue += character
    } else if (
      markerCount >= maxCount &&
      (!character || character === lineFeed)
    ) {
      subvalue += queue

      if (silent) {
        return true
      }

      return eat(subvalue)({type: 'thematicBreak'})
    } else {
      return
    }
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenize/url.js":
/*!**********************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenize/url.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ccount = __webpack_require__(/*! ccount */ "../../node_modules/ccount/index.js")
var decode = __webpack_require__(/*! parse-entities */ "../../node_modules/parse-entities/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../../node_modules/is-decimal/index.js")
var alphabetical = __webpack_require__(/*! is-alphabetical */ "../../node_modules/is-alphabetical/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../../node_modules/is-whitespace-character/index.js")
var locate = __webpack_require__(/*! ../locate/url */ "../../node_modules/remark-parse/lib/locate/url.js")

module.exports = url
url.locator = locate
url.notInLink = true

var exclamationMark = 33 // '!'
var ampersand = 38 // '&'
var rightParenthesis = 41 // ')'
var asterisk = 42 // '*'
var comma = 44 // ','
var dash = 45 // '-'
var dot = 46 // '.'
var colon = 58 // ':'
var semicolon = 59 // ';'
var questionMark = 63 // '?'
var lessThan = 60 // '<'
var underscore = 95 // '_'
var tilde = 126 // '~'

var leftParenthesisCharacter = '('
var rightParenthesisCharacter = ')'

function url(eat, value, silent) {
  var self = this
  var gfm = self.options.gfm
  var tokenizers = self.inlineTokenizers
  var length = value.length
  var previousDot = -1
  var protocolless = false
  var dots
  var lastTwoPartsStart
  var start
  var index
  var pathStart
  var path
  var code
  var end
  var leftCount
  var rightCount
  var content
  var children
  var url
  var exit

  if (!gfm) {
    return
  }

  // `WWW.` doesn’t work.
  if (value.slice(0, 4) === 'www.') {
    protocolless = true
    index = 4
  } else if (value.slice(0, 7).toLowerCase() === 'http://') {
    index = 7
  } else if (value.slice(0, 8).toLowerCase() === 'https://') {
    index = 8
  } else {
    return
  }

  // Act as if the starting boundary is a dot.
  previousDot = index - 1

  // Parse a valid domain.
  start = index
  dots = []

  while (index < length) {
    code = value.charCodeAt(index)

    if (code === dot) {
      // Dots may not appear after each other.
      if (previousDot === index - 1) {
        break
      }

      dots.push(index)
      previousDot = index
      index++
      continue
    }

    if (
      decimal(code) ||
      alphabetical(code) ||
      code === dash ||
      code === underscore
    ) {
      index++
      continue
    }

    break
  }

  // Ignore a final dot:
  if (code === dot) {
    dots.pop()
    index--
  }

  // If there are not dots, exit.
  if (dots[0] === undefined) {
    return
  }

  // If there is an underscore in the last two domain parts, exit:
  // `www.example.c_m` and `www.ex_ample.com` are not OK, but
  // `www.sub_domain.example.com` is.
  lastTwoPartsStart = dots.length < 2 ? start : dots[dots.length - 2] + 1

  if (value.slice(lastTwoPartsStart, index).indexOf('_') !== -1) {
    return
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true
  }

  end = index
  pathStart = index

  // Parse a path.
  while (index < length) {
    code = value.charCodeAt(index)

    if (whitespace(code) || code === lessThan) {
      break
    }

    index++

    if (
      code === exclamationMark ||
      code === asterisk ||
      code === comma ||
      code === dot ||
      code === colon ||
      code === questionMark ||
      code === underscore ||
      code === tilde
    ) {
      // Empty
    } else {
      end = index
    }
  }

  index = end

  // If the path ends in a closing paren, and the count of closing parens is
  // higher than the opening count, then remove the supefluous closing parens.
  if (value.charCodeAt(index - 1) === rightParenthesis) {
    path = value.slice(pathStart, index)
    leftCount = ccount(path, leftParenthesisCharacter)
    rightCount = ccount(path, rightParenthesisCharacter)

    while (rightCount > leftCount) {
      index = pathStart + path.lastIndexOf(rightParenthesisCharacter)
      path = value.slice(pathStart, index)
      rightCount--
    }
  }

  if (value.charCodeAt(index - 1) === semicolon) {
    // GitHub doesn’t document this, but final semicolons aren’t paret of the
    // URL either.
    index--

    // // If the path ends in what looks like an entity, it’s not part of the path.
    if (alphabetical(value.charCodeAt(index - 1))) {
      end = index - 2

      while (alphabetical(value.charCodeAt(end))) {
        end--
      }

      if (value.charCodeAt(end) === ampersand) {
        index = end
      }
    }
  }

  content = value.slice(0, index)
  url = decode(content, {nonTerminated: false})

  if (protocolless) {
    url = 'http://' + url
  }

  exit = self.enterLink()

  // Temporarily remove all tokenizers except text in url.
  self.inlineTokenizers = {text: tokenizers.text}
  children = self.tokenizeInline(content, eat.now())
  self.inlineTokenizers = tokenizers

  exit()

  return eat(content)({type: 'link', title: null, url: url, children: children})
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/tokenizer.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/tokenizer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a tokenizer.  This creates both `tokenizeInline` and `tokenizeBlock`.
function factory(type) {
  return tokenize

  // Tokenizer for a bound `type`.
  function tokenize(value, location) {
    var self = this
    var offset = self.offset
    var tokens = []
    var methods = self[type + 'Methods']
    var tokenizers = self[type + 'Tokenizers']
    var line = location.line
    var column = location.column
    var index
    var length
    var method
    var name
    var matched
    var valueLength

    // Trim white space only lines.
    if (!value) {
      return tokens
    }

    // Expose on `eat`.
    eat.now = now
    eat.file = self.file

    // Sync initial offset.
    updatePosition('')

    // Iterate over `value`, and iterate over all tokenizers.  When one eats
    // something, re-iterate with the remaining value.  If no tokenizer eats,
    // something failed (should not happen) and an exception is thrown.
    while (value) {
      index = -1
      length = methods.length
      matched = false

      while (++index < length) {
        name = methods[index]
        method = tokenizers[name]

        // Previously, we had constructs such as footnotes and YAML that used
        // these properties.
        // Those are now external (plus there are userland extensions), that may
        // still use them.
        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          /* istanbul ignore next */ (!method.notInList || !self.inList) &&
          /* istanbul ignore next */ (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length

          method.apply(self, [eat, value])

          matched = valueLength !== value.length

          if (matched) {
            break
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now())
      }
    }

    self.eof = now()

    return tokens

    // Update line, column, and offset based on `value`.
    function updatePosition(subvalue) {
      var lastIndex = -1
      var index = subvalue.indexOf('\n')

      while (index !== -1) {
        line++
        lastIndex = index
        index = subvalue.indexOf('\n', index + 1)
      }

      if (lastIndex === -1) {
        column += subvalue.length
      } else {
        column = subvalue.length - lastIndex
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line]
        } else if (column <= offset[line]) {
          column = offset[line] + 1
        }
      }
    }

    // Get offset.  Called before the first character is eaten to retrieve the
    // range’s offsets.
    function getOffset() {
      var indentation = []
      var pos = line + 1

      // Done.  Called when the last character is eaten to retrieve the range’s
      // offsets.
      return function () {
        var last = line + 1

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1)

          pos++
        }

        return indentation
      }
    }

    // Get the current position.
    function now() {
      var pos = {line: line, column: column}

      pos.offset = self.toOffset(pos)

      return pos
    }

    // Store position information for a node.
    function Position(start) {
      this.start = start
      this.end = now()
    }

    // Throw when a value is incorrectly eaten.  This shouldn’t happen but will
    // throw on new, incorrect rules.
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.slice(0, subvalue.length) !== subvalue) {
        // Capture stack-trace.
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this warning on https://git.io/vg5Ft'
          ),
          now()
        )
      }
    }

    // Mark position and patch `node.position`.
    function position() {
      var before = now()

      return update

      // Add the position to a node.
      function update(node, indent) {
        var previous = node.position
        var start = previous ? previous.start : before
        var combined = []
        var n = previous && previous.end.line
        var l = before.line

        node.position = new Position(start)

        // If there was already a `position`, this node was merged.  Fixing
        // `start` wasn’t hard, but the indent is different.  Especially
        // because some information, the indent between `n` and `l` wasn’t
        // tracked.  Luckily, that space is (should be?) empty, so we can
        // safely check for it now.
        if (previous && indent && previous.indent) {
          combined = previous.indent

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1)
            }

            combined.push(before.column)
          }

          indent = combined.concat(indent)
        }

        node.position.indent = indent || []

        return node
      }
    }

    // Add `node` to `parent`s children or to `tokens`.  Performs merges where
    // possible.
    function add(node, parent) {
      var children = parent ? parent.children : tokens
      var previous = children[children.length - 1]
      var fn

      if (
        previous &&
        node.type === previous.type &&
        (node.type === 'text' || node.type === 'blockquote') &&
        mergeable(previous) &&
        mergeable(node)
      ) {
        fn = node.type === 'text' ? mergeText : mergeBlockquote
        node = fn.call(self, previous, node)
      }

      if (node !== previous) {
        children.push(node)
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart()
      }

      return node
    }

    // Remove `subvalue` from `value`.  `subvalue` must be at the start of
    // `value`.
    function eat(subvalue) {
      var indent = getOffset()
      var pos = position()
      var current = now()

      validateEat(subvalue)

      apply.reset = reset
      reset.test = test
      apply.test = test

      value = value.slice(subvalue.length)

      updatePosition(subvalue)

      indent = indent()

      return apply

      // Add the given arguments, add `position` to the returned node, and
      // return the node.
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent)
      }

      // Functions just like apply, but resets the content: the line and
      // column are reversed, and the eaten value is re-added.   This is
      // useful for nodes with a single type of content, such as lists and
      // tables.  See `apply` above for what parameters are expected.
      function reset() {
        var node = apply.apply(null, arguments)

        line = current.line
        column = current.column
        value = subvalue + value

        return node
      }

      // Test the position, after eating, and reverse to a not-eaten state.
      function test() {
        var result = pos({})

        line = current.line
        column = current.column
        value = subvalue + value

        return result.position
      }
    }
  }
}

// Check whether a node is mergeable with adjacent nodes.
function mergeable(node) {
  var start
  var end

  if (node.type !== 'text' || !node.position) {
    return true
  }

  start = node.position.start
  end = node.position.end

  // Only merge nodes which occupy the same size as their `value`.
  return (
    start.line !== end.line || end.column - start.column === node.value.length
  )
}

// Merge two text nodes: `node` into `prev`.
function mergeText(previous, node) {
  previous.value += node.value

  return previous
}

// Merge two blockquotes: `node` into `prev`, unless in CommonMark or gfm modes.
function mergeBlockquote(previous, node) {
  if (this.options.commonmark || this.options.gfm) {
    return node
  }

  previous.children = previous.children.concat(node.children)

  return previous
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/unescape.js":
/*!******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/unescape.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

var backslash = '\\'

// Factory to de-escape a value, based on a list at `key` in `ctx`.
function factory(ctx, key) {
  return unescape

  // De-escape a string using the expression at `key` in `ctx`.
  function unescape(value) {
    var previous = 0
    var index = value.indexOf(backslash)
    var escape = ctx[key]
    var queue = []
    var character

    while (index !== -1) {
      queue.push(value.slice(previous, index))
      previous = index + 1
      character = value.charAt(previous)

      // If the following character is not a valid escape, add the slash.
      if (!character || escape.indexOf(character) === -1) {
        queue.push(backslash)
      }

      index = value.indexOf(backslash, previous + 1)
    }

    queue.push(value.slice(previous))

    return queue.join('')
  }
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/util/get-indentation.js":
/*!******************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/util/get-indentation.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation

var tab = '\t'
var space = ' '

var spaceSize = 1
var tabSize = 4

// Gets indentation information for a line.
function indentation(value) {
  var index = 0
  var indent = 0
  var character = value.charAt(index)
  var stops = {}
  var size
  var lastIndent = 0

  while (character === tab || character === space) {
    size = character === tab ? tabSize : spaceSize

    indent += size

    if (size > 1) {
      indent = Math.floor(indent / size) * size
    }

    while (lastIndent < indent) {
      stops[++lastIndent] = index
    }

    character = value.charAt(++index)
  }

  return {indent: indent, stops: stops}
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/util/html.js":
/*!*******************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/util/html.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*'
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+'
var singleQuoted = "'[^']*'"
var doubleQuoted = '"[^"]*"'
var attributeValue =
  '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')'
var attribute =
  '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)'
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>'
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>'
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->'
var processing = '<[?].*?[?]>'
var declaration = '<![A-Za-z]+\\s+[^>]*>'
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')')

exports.tag = new RegExp(
  '^(?:' +
    openTag +
    '|' +
    closeTag +
    '|' +
    comment +
    '|' +
    processing +
    '|' +
    declaration +
    '|' +
    cdata +
    ')'
)


/***/ }),

/***/ "../../node_modules/remark-parse/lib/util/interrupt.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/util/interrupt.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt

function interrupt(interruptors, tokenizers, ctx, parameters) {
  var length = interruptors.length
  var index = -1
  var interruptor
  var config

  while (++index < length) {
    interruptor = interruptors[index]
    config = interruptor[1] || {}

    if (
      config.pedantic !== undefined &&
      config.pedantic !== ctx.options.pedantic
    ) {
      continue
    }

    if (
      config.commonmark !== undefined &&
      config.commonmark !== ctx.options.commonmark
    ) {
      continue
    }

    if (tokenizers[interruptor[0]].apply(ctx, parameters)) {
      return true
    }
  }

  return false
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/util/normalize.js":
/*!************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/util/normalize.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "../../node_modules/collapse-white-space/index.js")

module.exports = normalize

// Normalize an identifier.  Collapses multiple white space characters into a
// single space, and removes casing.
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase()
}


/***/ }),

/***/ "../../node_modules/remark-parse/lib/util/remove-indentation.js":
/*!*********************************************************************************************!*\
  !*** /home/kdani/repos/LibreLingo/node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "../../node_modules/repeat-string/index.js")
var getIndent = __webpack_require__(/*! ./get-indentation */ "../../node_modules/remark-parse/lib/util/get-indentation.js")

module.exports = indentation

var lineFeed = '\n'
var space = ' '
var exclamationMark = '!'

// Remove the minimum indent from every line in `value`.  Supports both tab,
// spaced, and mixed indentation (as well as possible).
function indentation(value, maximum) {
  var values = value.split(lineFeed)
  var position = values.length + 1
  var minIndent = Infinity
  var matrix = []
  var index
  var indentation
  var stops

  values.unshift(repeat(space, maximum) + exclamationMark)

  while (position--) {
    indentation = getIndent(values[position])

    matrix[position] = indentation.stops

    if (trim(values[position]).length === 0) {
      continue
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent
      }
    } else {
      minIndent = Infinity

      break
    }
  }

  if (minIndent !== Infinity) {
    position = values.length

    while (position--) {
      stops = matrix[position]
      index = minIndent

      while (index && !(index in stops)) {
        index--
      }

      values[position] = values[position].slice(stops[index] + 1)
    }
  }

  values.shift()

  return values.join(lineFeed)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2Jsb2NrLWVsZW1lbnRzLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2VtYWlsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZXNjYXBlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9saW5rLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3RhZy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdXJsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9zZXQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9hdXRvLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxhbmstbGluZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtZmVuY2VkLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZXNjYXBlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctc2V0ZXh0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2h0bWwtYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9saXN0LmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvc3Ryb25nLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdXJsLmpzIiwid2VicGFjazovLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91bmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2dldC1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9yZW1vdmUtaW5kZW50YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQyxvREFBUztBQUMvQixZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsYUFBYSxtQkFBTyxDQUFDLHNFQUFpQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxvREFBTztBQUMzQixlQUFlLG1CQUFPLENBQUMsa0VBQWdCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFB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OztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwSVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQ1k7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGdCQUFnQixtQkFBTyxDQUFDLGdGQUFtQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1Q0FBdUM7QUFDckQ7Ozs7Ozs7Ozs7Ozs7QUMzSFk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLDRFQUFpQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixjQUFjO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQscUJBQXFCOztBQUUvRTtB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3RJWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5V1k7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsMERBQVk7QUFDbEMsZ0JBQWdCLG1CQUFPLENBQUMsNEZBQXlCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLGtHQUE0QjtBQUN2RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRkFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEO0FBQ0EsbUNBQW1DLElBQUk7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdiWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsd0JBQXdCLG1CQUFPLENBQUMsNEVBQXFCO0FBQ3JELGdCQUFnQixtQkFBTyxDQUFDLGdGQUFtQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2pHWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLDBFQUFnQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyxnRkFBbUI7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNMWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsaUJBQWlCLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyw4RUFBa0I7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDRDQUE0Qzs7QUFFM0U7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSw0REFBNEQ7QUFDM0U7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2T1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsa0RBQVE7QUFDN0IsYUFBYSxtQkFBTyxDQUFDLGtFQUFnQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsMERBQVk7QUFDbEMsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWlCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsd0VBQWU7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixxQkFBcUI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qix3REFBd0Q7QUFDL0U7Ozs7Ozs7Ozs7Ozs7QUNqTlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdUWTs7QUFFWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ1k7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7O0FDcENZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDWTs7QUFFWix5QkFBeUIsbUJBQU8sQ0FBQyw4RUFBc0I7O0FBRXZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLGdFQUFlO0FBQ3BDLGdCQUFnQixtQkFBTyxDQUFDLHNGQUFtQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJmaWxlIjoiM2M0NTc2NmY4ZmZkZGI2YTY0MTgvMC4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmhlcml0ID0gcmVxdWlyZSgndW5oZXJpdCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgUGFyc2VyID0gcmVxdWlyZSgnLi9saWIvcGFyc2VyLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxucGFyc2UuUGFyc2VyID0gUGFyc2VyXG5cbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gdGhpcy5kYXRhKCdzZXR0aW5ncycpXG4gIHZhciBMb2NhbCA9IHVuaGVyaXQoUGFyc2VyKVxuXG4gIExvY2FsLnByb3RvdHlwZS5vcHRpb25zID0geHRlbmQoTG9jYWwucHJvdG90eXBlLm9wdGlvbnMsIHNldHRpbmdzLCBvcHRpb25zKVxuXG4gIHRoaXMuUGFyc2VyID0gTG9jYWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaHRtbCcsXG4gICdpZnJhbWUnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ2xpbmsnLFxuICAnbWFpbicsXG4gICdtZW51JyxcbiAgJ21lbnVpdGVtJyxcbiAgJ21ldGEnLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZScsXG4gICdzZWN0aW9uJyxcbiAgJ3NvdXJjZScsXG4gICd0aXRsZScsXG4gICdzdW1tYXJ5JyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyJyxcbiAgJ3RyYWNrJyxcbiAgJ3VsJ1xuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIEZhY3RvcnkgdG8gY3JlYXRlIGFuIGVudGl0eSBkZWNvZGVyLlxuZnVuY3Rpb24gZmFjdG9yeShjdHgpIHtcbiAgZGVjb2Rlci5yYXcgPSBkZWNvZGVSYXdcblxuICByZXR1cm4gZGVjb2RlclxuXG4gIC8vIE5vcm1hbGl6ZSBgcG9zaXRpb25gIHRvIGFkZCBhbiBgaW5kZW50YC5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHBvc2l0aW9uKSB7XG4gICAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG4gICAgdmFyIHJlc3VsdCA9IFtdXG5cbiAgICB3aGlsZSAoKytsaW5lKSB7XG4gICAgICBpZiAoIShsaW5lIGluIG9mZnNldHMpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKChvZmZzZXRzW2xpbmVdIHx8IDApICsgMSlcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXJ0OiBwb3NpdGlvbiwgaW5kZW50OiByZXN1bHR9XG4gIH1cblxuICAvLyBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byB0ZXh0LW5vZGVzLlxuICBmdW5jdGlvbiBkZWNvZGVyKHZhbHVlLCBwb3NpdGlvbiwgaGFuZGxlcikge1xuICAgIGVudGl0aWVzKHZhbHVlLCB7XG4gICAgICBwb3NpdGlvbjogbm9ybWFsaXplKHBvc2l0aW9uKSxcbiAgICAgIHdhcm5pbmc6IGhhbmRsZVdhcm5pbmcsXG4gICAgICB0ZXh0OiBoYW5kbGVyLFxuICAgICAgcmVmZXJlbmNlOiBoYW5kbGVyLFxuICAgICAgdGV4dENvbnRleHQ6IGN0eCxcbiAgICAgIHJlZmVyZW5jZUNvbnRleHQ6IGN0eFxuICAgIH0pXG4gIH1cblxuICAvLyBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byBhIHN0cmluZy5cbiAgZnVuY3Rpb24gZGVjb2RlUmF3KHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBlbnRpdGllcyhcbiAgICAgIHZhbHVlLFxuICAgICAgeHRlbmQob3B0aW9ucywge3Bvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLCB3YXJuaW5nOiBoYW5kbGVXYXJuaW5nfSlcbiAgICApXG4gIH1cblxuICAvLyBIYW5kbGUgYSB3YXJuaW5nLlxuICAvLyBTZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vcGFyc2UtZW50aXRpZXM+IGZvciB0aGUgd2FybmluZ3MuXG4gIGZ1bmN0aW9uIGhhbmRsZVdhcm5pbmcocmVhc29uLCBwb3NpdGlvbiwgY29kZSkge1xuICAgIGlmIChjb2RlICE9PSAzKSB7XG4gICAgICBjdHguZmlsZS5tZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24pXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBvc2l0aW9uOiB0cnVlLFxuICBnZm06IHRydWUsXG4gIGNvbW1vbm1hcms6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIGJsb2NrczogcmVxdWlyZSgnLi9ibG9jay1lbGVtZW50cycpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxuJywgZnJvbUluZGV4KVxuXG4gIHdoaWxlIChpbmRleCA+IGZyb21JbmRleCkge1xuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggLSAxKSAhPT0gJyAnKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4LS1cbiAgfVxuXG4gIHJldHVybiBpbmRleFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdgJywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd+ficsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG5cbnZhciBwbHVzU2lnbiA9IDQzIC8vICcrJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbi8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmdpdGh1Yi5jb20vZ2ZtLyNleHRlbmRlZC1lbWFpbC1hdXRvbGluaz5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYXRcbiAgdmFyIHBvc2l0aW9uXG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBhdCA9IHZhbHVlLmluZGV4T2YoJ0AnLCBmcm9tSW5kZXgpXG5cbiAgaWYgKGF0ID09PSAtMSkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgcG9zaXRpb24gPSBhdFxuXG4gIGlmIChwb3NpdGlvbiA9PT0gZnJvbUluZGV4IHx8ICFpc0dmbUF0ZXh0KHZhbHVlLmNoYXJDb2RlQXQocG9zaXRpb24gLSAxKSkpIHtcbiAgICByZXR1cm4gbG9jYXRlLmNhbGwoc2VsZiwgdmFsdWUsIGF0ICsgMSlcbiAgfVxuXG4gIHdoaWxlIChwb3NpdGlvbiA+IGZyb21JbmRleCAmJiBpc0dmbUF0ZXh0KHZhbHVlLmNoYXJDb2RlQXQocG9zaXRpb24gLSAxKSkpIHtcbiAgICBwb3NpdGlvbi0tXG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25cbn1cblxuZnVuY3Rpb24gaXNHZm1BdGV4dChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgZGVjaW1hbChjb2RlKSB8fFxuICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgIGNvZGUgPT09IHBsdXNTaWduIHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IGRvdCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBhc3RlcmlzayA9IHZhbHVlLmluZGV4T2YoJyonLCBmcm9tSW5kZXgpXG4gIHZhciB1bmRlcnNjb3JlID0gdmFsdWUuaW5kZXhPZignXycsIGZyb21JbmRleClcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2tcbiAgfVxuXG4gIGlmIChhc3RlcmlzayA9PT0gLTEpIHtcbiAgICByZXR1cm4gdW5kZXJzY29yZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlza1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdcXFxcJywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsaW5rID0gdmFsdWUuaW5kZXhPZignWycsIGZyb21JbmRleClcbiAgdmFyIGltYWdlID0gdmFsdWUuaW5kZXhPZignIVsnLCBmcm9tSW5kZXgpXG5cbiAgaWYgKGltYWdlID09PSAtMSkge1xuICAgIHJldHVybiBsaW5rXG4gIH1cblxuICAvLyBMaW5rIGNhbiBuZXZlciBiZSBgLTFgIGlmIGFuIGltYWdlIGlzIGZvdW5kLCBzbyB3ZSBkb27igJl0IG5lZWQgdG8gY2hlY2tcbiAgLy8gZm9yIHRoYXQgOilcbiAgcmV0dXJuIGxpbmsgPCBpbWFnZSA/IGxpbmsgOiBpbWFnZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBhc3RlcmlzayA9IHZhbHVlLmluZGV4T2YoJyoqJywgZnJvbUluZGV4KVxuICB2YXIgdW5kZXJzY29yZSA9IHZhbHVlLmluZGV4T2YoJ19fJywgZnJvbUluZGV4KVxuXG4gIGlmICh1bmRlcnNjb3JlID09PSAtMSkge1xuICAgIHJldHVybiBhc3Rlcmlza1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlXG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJzwnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxudmFyIHZhbHVlcyA9IFsnd3d3LicsICdodHRwOi8vJywgJ2h0dHBzOi8vJ11cblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIG1pbiA9IC0xXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBwb3NpdGlvblxuXG4gIGlmICghdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiBtaW5cbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZS5pbmRleE9mKHZhbHVlc1tpbmRleF0sIGZyb21JbmRleClcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgKG1pbiA9PT0gLTEgfHwgcG9zaXRpb24gPCBtaW4pKSB7XG4gICAgICBtaW4gPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtaW5cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgcmVtb3ZlUG9zaXRpb24gPSByZXF1aXJlKCd1bmlzdC11dGlsLXJlbW92ZS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBsaW5lQnJlYWtzRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyL2dcblxuLy8gUGFyc2UgdGhlIGJvdW5kIGZpbGUuXG5mdW5jdGlvbiBwYXJzZSgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciB2YWx1ZSA9IFN0cmluZyhzZWxmLmZpbGUpXG4gIHZhciBzdGFydCA9IHtsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMH1cbiAgdmFyIGNvbnRlbnQgPSB4dGVuZChzdGFydClcbiAgdmFyIG5vZGVcblxuICAvLyBDbGVhbiBub24tdW5peCBuZXdsaW5lczogYFxcclxcbmAgYW5kIGBcXHJgIGFyZSBhbGwgY2hhbmdlZCB0byBgXFxuYC5cbiAgLy8gVGhpcyBzaG91bGQgbm90IGFmZmVjdCBwb3NpdGlvbmFsIGluZm9ybWF0aW9uLlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobGluZUJyZWFrc0V4cHJlc3Npb24sIGxpbmVGZWVkKVxuXG4gIC8vIEJPTS5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDB4ZmVmZikge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSlcblxuICAgIGNvbnRlbnQuY29sdW1uKytcbiAgICBjb250ZW50Lm9mZnNldCsrXG4gIH1cblxuICBub2RlID0ge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUJsb2NrKHZhbHVlLCBjb250ZW50KSxcbiAgICBwb3NpdGlvbjoge3N0YXJ0OiBzdGFydCwgZW5kOiBzZWxmLmVvZiB8fCB4dGVuZChzdGFydCl9XG4gIH1cblxuICBpZiAoIXNlbGYub3B0aW9ucy5wb3NpdGlvbikge1xuICAgIHJlbW92ZVBvc2l0aW9uKG5vZGUsIHRydWUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciB0b2dnbGUgPSByZXF1aXJlKCdzdGF0ZS10b2dnbGUnKVxudmFyIHZmaWxlTG9jYXRpb24gPSByZXF1aXJlKCd2ZmlsZS1sb2NhdGlvbicpXG52YXIgdW5lc2NhcGUgPSByZXF1aXJlKCcuL3VuZXNjYXBlJylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpXG52YXIgdG9rZW5pemVyID0gcmVxdWlyZSgnLi90b2tlbml6ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlclxuXG5mdW5jdGlvbiBQYXJzZXIoZG9jLCBmaWxlKSB7XG4gIHRoaXMuZmlsZSA9IGZpbGVcbiAgdGhpcy5vZmZzZXQgPSB7fVxuICB0aGlzLm9wdGlvbnMgPSB4dGVuZCh0aGlzLm9wdGlvbnMpXG4gIHRoaXMuc2V0T3B0aW9ucyh7fSlcblxuICB0aGlzLmluTGlzdCA9IGZhbHNlXG4gIHRoaXMuaW5CbG9jayA9IGZhbHNlXG4gIHRoaXMuaW5MaW5rID0gZmFsc2VcbiAgdGhpcy5hdFN0YXJ0ID0gdHJ1ZVxuXG4gIHRoaXMudG9PZmZzZXQgPSB2ZmlsZUxvY2F0aW9uKGZpbGUpLnRvT2Zmc2V0XG4gIHRoaXMudW5lc2NhcGUgPSB1bmVzY2FwZSh0aGlzLCAnZXNjYXBlJylcbiAgdGhpcy5kZWNvZGUgPSBkZWNvZGUodGhpcylcbn1cblxudmFyIHByb3RvID0gUGFyc2VyLnByb3RvdHlwZVxuXG4vLyBFeHBvc2UgY29yZS5cbnByb3RvLnNldE9wdGlvbnMgPSByZXF1aXJlKCcuL3NldC1vcHRpb25zJylcbnByb3RvLnBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8vIEV4cG9zZSBgZGVmYXVsdHNgLlxucHJvdG8ub3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxuXG4vLyBFbnRlciBhbmQgZXhpdCBoZWxwZXJzLlxucHJvdG8uZXhpdFN0YXJ0ID0gdG9nZ2xlKCdhdFN0YXJ0JywgdHJ1ZSlcbnByb3RvLmVudGVyTGlzdCA9IHRvZ2dsZSgnaW5MaXN0JywgZmFsc2UpXG5wcm90by5lbnRlckxpbmsgPSB0b2dnbGUoJ2luTGluaycsIGZhbHNlKVxucHJvdG8uZW50ZXJCbG9jayA9IHRvZ2dsZSgnaW5CbG9jaycsIGZhbHNlKVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIHBhcmFncmFwaDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gQSBwYXJhZ3JhcGgsIGZvbGxvd2VkIGJ5IGEgdGhlbWF0aWMgYnJlYWsuXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBwYXJhZ3JhcGguXG5wcm90by5pbnRlcnJ1cHRQYXJhZ3JhcGggPSBbXG4gIFsndGhlbWF0aWNCcmVhayddLFxuICBbJ2xpc3QnXSxcbiAgWydhdHhIZWFkaW5nJ10sXG4gIFsnZmVuY2VkQ29kZSddLFxuICBbJ2Jsb2NrcXVvdGUnXSxcbiAgWydodG1sJ10sXG4gIFsnc2V0ZXh0SGVhZGluZycsIHtjb21tb25tYXJrOiBmYWxzZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIGxpc3Q6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIC0gT25lXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBsaXN0LlxucHJvdG8uaW50ZXJydXB0TGlzdCA9IFtcbiAgWydhdHhIZWFkaW5nJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2ZlbmNlZENvZGUnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBibG9ja3F1b3RlOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA+IEEgcGFyYWdyYXBoLlxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgYmxvY2txdW90ZS5cbnByb3RvLmludGVycnVwdEJsb2NrcXVvdGUgPSBbXG4gIFsnaW5kZW50ZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydmZW5jZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydhdHhIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydodG1sJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydsaXN0Jywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gSGFuZGxlcnMuXG5wcm90by5ibG9ja1Rva2VuaXplcnMgPSB7XG4gIGJsYW5rTGluZTogcmVxdWlyZSgnLi90b2tlbml6ZS9ibGFuay1saW5lJyksXG4gIGluZGVudGVkQ29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWluZGVudGVkJyksXG4gIGZlbmNlZENvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1mZW5jZWQnKSxcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi90b2tlbml6ZS9ibG9ja3F1b3RlJyksXG4gIGF0eEhlYWRpbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvaGVhZGluZy1hdHgnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi90b2tlbml6ZS90aGVtYXRpYy1icmVhaycpLFxuICBsaXN0OiByZXF1aXJlKCcuL3Rva2VuaXplL2xpc3QnKSxcbiAgc2V0ZXh0SGVhZGluZzogcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLXNldGV4dCcpLFxuICBodG1sOiByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtYmxvY2snKSxcbiAgZGVmaW5pdGlvbjogcmVxdWlyZSgnLi90b2tlbml6ZS9kZWZpbml0aW9uJyksXG4gIHRhYmxlOiByZXF1aXJlKCcuL3Rva2VuaXplL3RhYmxlJyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi90b2tlbml6ZS9wYXJhZ3JhcGgnKVxufVxuXG5wcm90by5pbmxpbmVUb2tlbml6ZXJzID0ge1xuICBlc2NhcGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvZXNjYXBlJyksXG4gIGF1dG9MaW5rOiByZXF1aXJlKCcuL3Rva2VuaXplL2F1dG8tbGluaycpLFxuICB1cmw6IHJlcXVpcmUoJy4vdG9rZW5pemUvdXJsJyksXG4gIGVtYWlsOiByZXF1aXJlKCcuL3Rva2VuaXplL2VtYWlsJyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvaHRtbC1pbmxpbmUnKSxcbiAgbGluazogcmVxdWlyZSgnLi90b2tlbml6ZS9saW5rJyksXG4gIHJlZmVyZW5jZTogcmVxdWlyZSgnLi90b2tlbml6ZS9yZWZlcmVuY2UnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3Rva2VuaXplL3N0cm9uZycpLFxuICBlbXBoYXNpczogcmVxdWlyZSgnLi90b2tlbml6ZS9lbXBoYXNpcycpLFxuICBkZWxldGlvbjogcmVxdWlyZSgnLi90b2tlbml6ZS9kZWxldGUnKSxcbiAgY29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWlubGluZScpLFxuICBicmVhazogcmVxdWlyZSgnLi90b2tlbml6ZS9icmVhaycpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3Rva2VuaXplL3RleHQnKVxufVxuXG4vLyBFeHBvc2UgcHJlY2VkZW5jZS5cbnByb3RvLmJsb2NrTWV0aG9kcyA9IGtleXMocHJvdG8uYmxvY2tUb2tlbml6ZXJzKVxucHJvdG8uaW5saW5lTWV0aG9kcyA9IGtleXMocHJvdG8uaW5saW5lVG9rZW5pemVycylcblxuLy8gVG9rZW5pemVycy5cbnByb3RvLnRva2VuaXplQmxvY2sgPSB0b2tlbml6ZXIoJ2Jsb2NrJylcbnByb3RvLnRva2VuaXplSW5saW5lID0gdG9rZW5pemVyKCdpbmxpbmUnKVxucHJvdG8udG9rZW5pemVGYWN0b3J5ID0gdG9rZW5pemVyXG5cbi8vIEdldCBhbGwga2V5cyBpbiBgdmFsdWVgLlxuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goa2V5KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBlc2NhcGVzID0gcmVxdWlyZSgnbWFya2Rvd24tZXNjYXBlcycpXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRPcHRpb25zXG5cbmZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGN1cnJlbnQgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGAnICsgb3B0aW9ucyArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zYCcpXG4gIH1cblxuICBmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuICAgIHZhbHVlID0gb3B0aW9uc1trZXldXG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50W2tleV1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoa2V5ICE9PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykgfHxcbiAgICAgIChrZXkgPT09ICdibG9ja3MnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIHZhbHVlIGAnICsgdmFsdWUgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9ucy4nICsga2V5ICsgJ2AnXG4gICAgICApXG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnNcbiAgc2VsZi5lc2NhcGUgPSBlc2NhcGVzKG9wdGlvbnMpXG5cbiAgcmV0dXJuIHNlbGZcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3RhZycpXG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b0xpbmtcbmF1dG9MaW5rLmxvY2F0b3IgPSBsb2NhdGVcbmF1dG9MaW5rLm5vdEluTGluayA9IHRydWVcblxudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBhdFNpZ24gPSAnQCdcbnZhciBzbGFzaCA9ICcvJ1xudmFyIG1haWx0byA9ICdtYWlsdG86J1xudmFyIG1haWx0b0xlbmd0aCA9IG1haWx0by5sZW5ndGhcblxuZnVuY3Rpb24gYXV0b0xpbmsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIGhhc0F0Q2hhcmFjdGVyID0gZmFsc2VcbiAgdmFyIGxpbmsgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBub3dcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHRva2VuaXplcnNcbiAgdmFyIGV4aXRcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBsZXNzVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSA9IGxlc3NUaGFuXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgd2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGF0U2lnbiB8fFxuICAgICAgKGNoYXJhY3RlciA9PT0gJzonICYmIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBzbGFzaClcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGluayArPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBsaW5rICs9IGNoYXJhY3RlclxuICBpbmRleCsrXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gYXRTaWduKSB7XG4gICAgaGFzQXRDaGFyYWN0ZXIgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgaWYgKGNoYXJhY3RlciAhPT0gJzonIHx8IHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBzbGFzaCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGluayArPSBzbGFzaFxuICAgIGluZGV4KytcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHwgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKCFxdWV1ZSB8fCBjaGFyYWN0ZXIgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbGluayArPSBxdWV1ZVxuICBjb250ZW50ID0gbGlua1xuICBzdWJ2YWx1ZSArPSBsaW5rICsgY2hhcmFjdGVyXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uKytcbiAgbm93Lm9mZnNldCsrXG5cbiAgaWYgKGhhc0F0Q2hhcmFjdGVyKSB7XG4gICAgaWYgKGxpbmsuc2xpY2UoMCwgbWFpbHRvTGVuZ3RoKS50b0xvd2VyQ2FzZSgpID09PSBtYWlsdG8pIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKG1haWx0b0xlbmd0aClcbiAgICAgIG5vdy5jb2x1bW4gKz0gbWFpbHRvTGVuZ3RoXG4gICAgICBub3cub2Zmc2V0ICs9IG1haWx0b0xlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rID0gbWFpbHRvICsgbGlua1xuICAgIH1cbiAgfVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiBhdXRvbGlua3MuXG4gIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIGNvbnRlbnQgPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcblxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiBkZWNvZGUobGluaywge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSksXG4gICAgY2hpbGRyZW46IGNvbnRlbnRcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBBIGxpbmUgY29udGFpbmluZyBubyBjaGFyYWN0ZXJzLCBvciBhIGxpbmUgY29udGFpbmluZyBvbmx5IHNwYWNlcyAoVSswMDIwKSBvclxuLy8gdGFicyAoVSswMDA5KSwgaXMgY2FsbGVkIGEgYmxhbmsgbGluZS5cbi8vIFNlZSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2JsYW5rLWxpbmU+LlxudmFyIHJlQmxhbmtMaW5lID0gL15bIFxcdF0qKFxcbnwkKS9cblxuLy8gTm90ZSB0aGF0IHRob3VnaCBibGFuayBsaW5lcyBwbGF5IGEgc3BlY2lhbCByb2xlIGluIGxpc3RzIHRvIGRldGVybWluZVxuLy8gd2hldGhlciB0aGUgbGlzdCBpcyB0aWdodCBvciBsb29zZVxuLy8gKDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jYmxhbmstbGluZXM+KSwgaXTigJlzIGRvbmUgYnkgdGhlIGxpc3Rcbi8vIHRva2VuaXplciBhbmQgdGhpcyBibGFuayBsaW5lIHRva2VuaXplciBkb2VzIG5vdCBoYXZlIHRvIGJlIHJlc3BvbnNpYmxlIGZvclxuLy8gdGhhdC5cbi8vIFRoZXJlZm9yZSwgY29uZmlncyBzdWNoIGFzIGBibGFua0xpbmUubm90SW5MaXN0YCBkbyBub3QgaGF2ZSB0byBiZSBzZXQgaGVyZS5cbm1vZHVsZS5leHBvcnRzID0gYmxhbmtMaW5lXG5cbmZ1bmN0aW9uIGJsYW5rTGluZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIG1hdGNoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG1hdGNoID0gcmVCbGFua0xpbmUuZXhlYyh2YWx1ZS5zbGljZShpbmRleCkpXG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCArPSBtYXRjaFswXS5sZW5ndGhcbiAgICBzdWJ2YWx1ZSArPSBtYXRjaFswXVxuICB9XG5cbiAgaWYgKHN1YnZhbHVlID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGVhdChzdWJ2YWx1ZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGJsb2NrcXVvdGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb2Zmc2V0cyA9IHNlbGYub2Zmc2V0XG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0QmxvY2txdW90ZVxuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBjdXJyZW50TGluZSA9IG5vdy5saW5lXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBjb250ZW50cyA9IFtdXG4gIHZhciBpbmRlbnRzID0gW11cbiAgdmFyIGFkZFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlc3RcbiAgdmFyIG5leHRJbmRleFxuICB2YXIgY29udGVudFxuICB2YXIgbGluZVxuICB2YXIgc3RhcnRJbmRleFxuICB2YXIgcHJlZml4ZWRcbiAgdmFyIGV4aXRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaW5kZXggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmV4dEluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgcHJlZml4ZWQgPSBmYWxzZVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIG5leHRJbmRleCA9IGxlbmd0aFxuICAgIH1cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBwcmVmaXhlZCA9IHRydWVcblxuICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgfVxuXG4gICAgY29udGVudCA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpZiAoIXByZWZpeGVkICYmICF0cmltKGNvbnRlbnQpKSB7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKCFwcmVmaXhlZCkge1xuICAgICAgcmVzdCA9IHZhbHVlLnNsaWNlKGluZGV4KVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgZm9sbG93aW5nIGNvZGUgY29udGFpbnMgYSBwb3NzaWJsZSBibG9jay5cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCByZXN0LCB0cnVlXSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBjb250ZW50IDogdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaW5kZW50cy5wdXNoKGluZGV4IC0gc3RhcnRJbmRleClcbiAgICB2YWx1ZXMucHVzaChsaW5lKVxuICAgIGNvbnRlbnRzLnB1c2goY29udGVudClcblxuICAgIGluZGV4ID0gbmV4dEluZGV4ICsgMVxuICB9XG5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBpbmRlbnRzLmxlbmd0aFxuICBhZGQgPSBlYXQodmFsdWVzLmpvaW4obGluZUZlZWQpKVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tjdXJyZW50TGluZV0gPSAob2Zmc2V0c1tjdXJyZW50TGluZV0gfHwgMCkgKyBpbmRlbnRzW2luZGV4XVxuICAgIGN1cnJlbnRMaW5lKytcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyQmxvY2soKVxuICBjb250ZW50cyA9IHNlbGYudG9rZW5pemVCbG9jayhjb250ZW50cy5qb2luKGxpbmVGZWVkKSwgbm93KVxuICBleGl0KClcblxuICByZXR1cm4gYWRkKHt0eXBlOiAnYmxvY2txdW90ZScsIGNoaWxkcmVuOiBjb250ZW50c30pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9icmVhaycpXG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrXG5oYXJkQnJlYWsubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbWluQnJlYWtMZW5ndGggPSAyXG5cbmZ1bmN0aW9uIGhhcmRCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgaWYgKGluZGV4IDwgbWluQnJlYWtMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG5cbiAgICAgIHJldHVybiBlYXQocXVldWUpKHt0eXBlOiAnYnJlYWsnfSlcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZlbmNlZENvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgdGlsZGUgPSAnfidcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xuXG52YXIgbWluRmVuY2VDb3VudCA9IDNcbnZhciB0YWJTaXplID0gNFxuXG5mdW5jdGlvbiBmZW5jZWRDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgZmVuY2VDb3VudFxuICB2YXIgbWFya2VyXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGZsYWdcbiAgdmFyIGxhbmdcbiAgdmFyIG1ldGFcbiAgdmFyIHF1ZXVlXG4gIHZhciBjb250ZW50XG4gIHZhciBleGRlbnRlZENvbnRlbnRcbiAgdmFyIGNsb3NpbmdcbiAgdmFyIGV4ZGVudGVkQ2xvc2luZ1xuICB2YXIgaW5kZW50XG4gIHZhciBub3dcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaW5kZW50ID0gaW5kZXhcblxuICAvLyBFYXQgdGhlIGZlbmNlLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gdGlsZGUgJiYgY2hhcmFjdGVyICE9PSBncmF2ZUFjY2VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgZmVuY2VDb3VudCA9IDFcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGZlbmNlQ291bnQrK1xuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChmZW5jZUNvdW50IDwgbWluRmVuY2VDb3VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRWF0IHNwYWNpbmcgYmVmb3JlIGZsYWcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCBmbGFnLlxuICBmbGFnID0gJydcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gbGluZUZlZWQgfHxcbiAgICAgIChtYXJrZXIgPT09IGdyYXZlQWNjZW50ICYmIGNoYXJhY3RlciA9PT0gbWFya2VyKVxuICAgICkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWcgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuXG4gIHN1YnZhbHVlICs9IGZsYWdcbiAgZmxhZyA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGZsYWcpLCBub3cpXG5cbiAgaWYgKHF1ZXVlKSB7XG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgfVxuXG4gIHF1ZXVlID0gJydcbiAgY2xvc2luZyA9ICcnXG4gIGV4ZGVudGVkQ2xvc2luZyA9ICcnXG4gIGNvbnRlbnQgPSAnJ1xuICBleGRlbnRlZENvbnRlbnQgPSAnJ1xuICB2YXIgc2tpcCA9IHRydWVcblxuICAvLyBFYXQgY29udGVudC5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIGNvbnRlbnQgKz0gY2xvc2luZ1xuICAgIGV4ZGVudGVkQ29udGVudCArPSBleGRlbnRlZENsb3NpbmdcbiAgICBjbG9zaW5nID0gJydcbiAgICBleGRlbnRlZENsb3NpbmcgPSAnJ1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCBsaW5lIGZlZWQgaXMgaWdub3JlZC4gT3RoZXJzIGFyZW7igJl0LlxuICAgIGlmIChza2lwKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIHNraXAgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZVxuICAgIGV4ZGVudGVkQ2xvc2luZyArPSBxdWV1ZS5zbGljZShpbmRlbnQpXG5cbiAgICBpZiAocXVldWUubGVuZ3RoID49IHRhYlNpemUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjbG9zaW5nICs9IHF1ZXVlXG4gICAgZXhkZW50ZWRDbG9zaW5nICs9IHF1ZXVlXG5cbiAgICBpZiAocXVldWUubGVuZ3RoIDwgZmVuY2VDb3VudCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBjbG9zaW5nXG5cbiAgLy8gR2V0IGxhbmcgYW5kIG1ldGEgZnJvbSB0aGUgZmxhZy5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBmbGFnLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gZmxhZy5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgaWYgKCFsYW5nKSB7XG4gICAgICAgIGxhbmcgPSBmbGFnLnNsaWNlKDAsIGluZGV4KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFuZykge1xuICAgICAgbWV0YSA9IGZsYWcuc2xpY2UoaW5kZXgpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnY29kZScsXG4gICAgbGFuZzogbGFuZyB8fCBmbGFnIHx8IG51bGwsXG4gICAgbWV0YTogbWV0YSB8fCBudWxsLFxuICAgIHZhbHVlOiBleGRlbnRlZENvbnRlbnRcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGVkQ29kZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG52YXIgY29kZUluZGVudCA9IHJlcGVhdChzcGFjZSwgdGFiU2l6ZSlcblxuZnVuY3Rpb24gaW5kZW50ZWRDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50ID0gJydcbiAgdmFyIHN1YnZhbHVlUXVldWUgPSAnJ1xuICB2YXIgY29udGVudFF1ZXVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgYmxhbmtRdWV1ZVxuICB2YXIgaW5kZW50XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoaW5kZW50KSB7XG4gICAgICBpbmRlbnQgPSBmYWxzZVxuXG4gICAgICBzdWJ2YWx1ZSArPSBzdWJ2YWx1ZVF1ZXVlXG4gICAgICBjb250ZW50ICs9IGNvbnRlbnRRdWV1ZVxuICAgICAgc3VidmFsdWVRdWV1ZSA9ICcnXG4gICAgICBjb250ZW50UXVldWUgPSAnJ1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBzdWJ2YWx1ZVF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgICAgICBjb250ZW50UXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IHNwYWNlICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAzKSA9PT0gY2hhcmFjdGVyXG4gICAgKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGNvZGVJbmRlbnRcbiAgICAgIGluZGV4ICs9IDNcbiAgICAgIGluZGVudCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZW50ID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBibGFua1F1ZXVlID0gJydcblxuICAgICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgYmxhbmtRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gYmxhbmtRdWV1ZSArIGNoYXJhY3RlclxuICAgICAgY29udGVudFF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH1cbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgICB0eXBlOiAnY29kZScsXG4gICAgICBsYW5nOiBudWxsLFxuICAgICAgbWV0YTogbnVsbCxcbiAgICAgIHZhbHVlOiB0cmltKGNvbnRlbnQpXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvY29kZS1pbmxpbmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcbmlubGluZUNvZGUubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAxMCAvLyAgJ1xcbidcbnZhciBzcGFjZSA9IDMyIC8vICcgJ1xudmFyIGdyYXZlQWNjZW50ID0gOTYgLy8gICdgJ1xuXG5mdW5jdGlvbiBpbmxpbmVDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIG9wZW5pbmdGZW5jZUVuZFxuICB2YXIgY2xvc2luZ0ZlbmNlU3RhcnRcbiAgdmFyIGNsb3NpbmdGZW5jZUVuZFxuICB2YXIgY29kZVxuICB2YXIgbmV4dFxuICB2YXIgZm91bmRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCkgIT09IGdyYXZlQWNjZW50KSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBvcGVuaW5nRmVuY2VFbmQgPSBpbmRleFxuICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gbmV4dFxuICAgIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgIGlmIChjb2RlID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgaWYgKGNsb3NpbmdGZW5jZVN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQgPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBjbG9zaW5nRmVuY2VFbmQgPSBpbmRleCArIDFcblxuICAgICAgaWYgKFxuICAgICAgICBuZXh0ICE9PSBncmF2ZUFjY2VudCAmJlxuICAgICAgICBjbG9zaW5nRmVuY2VFbmQgLSBjbG9zaW5nRmVuY2VTdGFydCA9PT0gb3BlbmluZ0ZlbmNlRW5kXG4gICAgICApIHtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjbG9zaW5nRmVuY2VTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbG9zaW5nRmVuY2VTdGFydCA9IHVuZGVmaW5lZFxuICAgICAgY2xvc2luZ0ZlbmNlRW5kID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBhbmQgZmluYWwgc3BhY2UgKG9yIGxpbmUgZmVlZCksIGlmZiB0aGV5IGV4aXN0IGFuZCB0aGVyZVxuICAvLyBhcmUgbm9uLXNwYWNlIGNoYXJhY3RlcnMgaW4gdGhlIGNvbnRlbnQuXG4gIGluZGV4ID0gb3BlbmluZ0ZlbmNlRW5kXG4gIGxlbmd0aCA9IGNsb3NpbmdGZW5jZVN0YXJ0XG4gIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChsZW5ndGggLSAxKVxuICBmb3VuZCA9IGZhbHNlXG5cbiAgaWYgKFxuICAgIGxlbmd0aCAtIGluZGV4ID4gMiAmJlxuICAgIChjb2RlID09PSBzcGFjZSB8fCBjb2RlID09PSBsaW5lRmVlZCkgJiZcbiAgICAobmV4dCA9PT0gc3BhY2UgfHwgbmV4dCA9PT0gbGluZUZlZWQpXG4gICkge1xuICAgIGluZGV4KytcbiAgICBsZW5ndGgtLVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgICAgaWYgKGNvZGUgIT09IHNwYWNlICYmIGNvZGUgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGZvdW5kID09PSB0cnVlKSB7XG4gICAgICBvcGVuaW5nRmVuY2VFbmQrK1xuICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQtLVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlYXQodmFsdWUuc2xpY2UoMCwgY2xvc2luZ0ZlbmNlRW5kKSkoe1xuICAgIHR5cGU6ICdpbmxpbmVDb2RlJyxcbiAgICB2YWx1ZTogdmFsdWUuc2xpY2Uob3BlbmluZ0ZlbmNlRW5kLCBjbG9zaW5nRmVuY2VTdGFydClcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvblxuXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGJlZm9yZVVSTFxuICB2YXIgYmVmb3JlVGl0bGVcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHRlc3RcbiAgdmFyIGlkZW50aWZpZXJcbiAgdmFyIHVybFxuICB2YXIgdGl0bGVcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKFxuICAgICFxdWV1ZSB8fFxuICAgIHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCB8fFxuICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBjb2xvblxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlkZW50aWZpZXIgPSBxdWV1ZVxuICBzdWJ2YWx1ZSArPSBxdWV1ZSArIHJpZ2h0U3F1YXJlQnJhY2tldCArIGNvbG9uXG4gIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgcXVldWUgPSAnJ1xuICBiZWZvcmVVUkwgPSBzdWJ2YWx1ZVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlc3NUaGFuKSB7XG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIuZGVsaW1pdGVyKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBsZXNzVGhhbiArIHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCAtPSBxdWV1ZS5sZW5ndGggKyAxXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdXJsID0gcXVldWVcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB0ZXN0ID0gbnVsbFxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmspIHtcbiAgICB0ZXN0ID0gcXVvdGF0aW9uTWFya1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSkge1xuICAgIHRlc3QgPSBhcG9zdHJvcGhlXG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICB0ZXN0ID0gcmlnaHRQYXJlbnRoZXNpc1xuICB9XG5cbiAgaWYgKCF0ZXN0KSB7XG4gICAgcXVldWUgPSAnJ1xuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIH0gZWxzZSBpZiAocXVldWUpIHtcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQgfHwgY2hhcmFjdGVyID09PSB0ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBsaW5lRmVlZFxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0ZXN0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlXG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gICAgdGl0bGUgPSBxdWV1ZVxuICAgIHF1ZXVlID0gJydcbiAgfSBlbHNlIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBiZWZvcmVVUkwgPSBlYXQoYmVmb3JlVVJMKS50ZXN0KCkuZW5kXG4gICAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgYmVmb3JlVVJMLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZFxuICAgICAgdGl0bGUgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh0aXRsZSksIGJlZm9yZVRpdGxlKVxuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdkZWZpbml0aW9uJyxcbiAgICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKSxcbiAgICAgIGxhYmVsOiBpZGVudGlmaWVyLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgY2FuIGJlIGluc2lkZSBhbiBlbmNsb3NlZCBVUkkuXG5mdW5jdGlvbiBpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gKFxuICAgIGNoYXJhY3RlciAhPT0gZ3JlYXRlclRoYW4gJiZcbiAgICBjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0ICYmXG4gICAgY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXRcbiAgKVxufVxuXG5pc0VuY2xvc2VkVVJMQ2hhcmFjdGVyLmRlbGltaXRlciA9IGdyZWF0ZXJUaGFuXG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGNhbiBiZSBpbnNpZGUgYW4gdW5jbG9zZWQgVVJJLlxuZnVuY3Rpb24gaXNVbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIChcbiAgICBjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0ICYmXG4gICAgY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXQgJiZcbiAgICAhd2hpdGVzcGFjZShjaGFyYWN0ZXIpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZGVsZXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoXG5zdHJpa2V0aHJvdWdoLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIHRpbGRlID0gJ34nXG52YXIgZmVuY2UgPSAnfn4nXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2hhcmFjdGVyID0gJydcbiAgdmFyIHByZXZpb3VzID0gJydcbiAgdmFyIHByZWNlZGluZyA9ICcnXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBub3dcblxuICBpZiAoXG4gICAgIXNlbGYub3B0aW9ucy5nZm0gfHxcbiAgICB2YWx1ZS5jaGFyQXQoMCkgIT09IHRpbGRlIHx8XG4gICAgdmFsdWUuY2hhckF0KDEpICE9PSB0aWxkZSB8fFxuICAgIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KDIpKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4ID0gMVxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gMlxuICBub3cub2Zmc2V0ICs9IDJcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gdGlsZGUgJiZcbiAgICAgIHByZXZpb3VzID09PSB0aWxkZSAmJlxuICAgICAgKCFwcmVjZWRpbmcgfHwgIXdoaXRlc3BhY2UocHJlY2VkaW5nKSlcbiAgICApIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChmZW5jZSArIHN1YnZhbHVlICsgZmVuY2UpKHtcbiAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHN1YnZhbHVlLCBub3cpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHByZXZpb3VzXG4gICAgcHJlY2VkaW5nID0gcHJldmlvdXNcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZW1haWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtYWlsXG5lbWFpbC5sb2NhdG9yID0gbG9jYXRlXG5lbWFpbC5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBwbHVzU2lnbiA9IDQzIC8vICcrJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciBhdFNpZ24gPSA2NCAvLyAnQCdcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG5cbmZ1bmN0aW9uIGVtYWlsKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBmaXJzdERvdCA9IC0xXG4gIHZhciBjb2RlXG4gIHZhciBjb250ZW50XG4gIHZhciBjaGlsZHJlblxuICB2YXIgZXhpdFxuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICB3aGlsZSAoXG4gICAgZGVjaW1hbChjb2RlKSB8fFxuICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgIGNvZGUgPT09IHBsdXNTaWduIHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IGRvdCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoKytpbmRleClcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGNvZGUgIT09IGF0U2lnbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgZGVjaW1hbChjb2RlKSB8fFxuICAgICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgICBjb2RlID09PSBkb3QgfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgICApIHtcbiAgICAgIGluZGV4KytcblxuICAgICAgaWYgKGZpcnN0RG90ID09PSAtMSAmJiBjb2RlID09PSBkb3QpIHtcbiAgICAgICAgZmlyc3REb3QgPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGJyZWFrXG4gIH1cblxuICBpZiAoXG4gICAgZmlyc3REb3QgPT09IC0xIHx8XG4gICAgZmlyc3REb3QgPT09IGluZGV4IHx8XG4gICAgY29kZSA9PT0gZGFzaCB8fFxuICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgaW5kZXgtLVxuICB9XG5cbiAgY29udGVudCA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiB1cmwuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG4gIGNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBlYXQubm93KCkpXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcblxuICBleGl0KClcblxuICByZXR1cm4gZWF0KGNvbnRlbnQpKHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiAnbWFpbHRvOicgKyBkZWNvZGUoY29udGVudCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciB3b3JkID0gcmVxdWlyZSgnaXMtd29yZC1jaGFyYWN0ZXInKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VtcGhhc2lzJylcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuZW1waGFzaXMubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbmZ1bmN0aW9uIGVtcGhhc2lzKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgbm93XG4gIHZhciBwZWRhbnRpY1xuICB2YXIgbWFya2VyXG4gIHZhciBxdWV1ZVxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGxlbmd0aFxuICB2YXIgcHJldmlvdXNcblxuICBpZiAoY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJiBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHN1YnZhbHVlID0gY2hhcmFjdGVyXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgaW5kZXgrK1xuICBxdWV1ZSA9ICcnXG4gIGNoYXJhY3RlciA9ICcnXG5cbiAgaWYgKHBlZGFudGljICYmIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyICYmICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldmlvdXMpKSkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpIHx8IHByZXZpb3VzID09PSBtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyID09PSB1bmRlcnNjb3JlICYmIHdvcmQoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHF1ZXVlICs9IG1hcmtlclxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbm93ID0gZWF0Lm5vdygpXG4gICAgICAgIG5vdy5jb2x1bW4rK1xuICAgICAgICBub3cub2Zmc2V0KytcblxuICAgICAgICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUgKyBtYXJrZXIpKHtcbiAgICAgICAgICB0eXBlOiAnZW1waGFzaXMnLFxuICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHF1ZXVlLCBub3cpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IG1hcmtlclxuICAgIH1cblxuICAgIGlmICghcGVkYW50aWMgJiYgY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lc2NhcGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZVxuZXNjYXBlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuZnVuY3Rpb24gZXNjYXBlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbm9kZVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgPT09IGJhY2tzbGFzaCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgxKVxuXG4gICAgaWYgKHNlbGYuZXNjYXBlLmluZGV4T2YoY2hhcmFjdGVyKSAhPT0gLTEpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgbm9kZSA9IHt0eXBlOiAnYnJlYWsnfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHt0eXBlOiAndGV4dCcsIHZhbHVlOiBjaGFyYWN0ZXJ9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoYmFja3NsYXNoICsgY2hhcmFjdGVyKShub2RlKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXR4SGVhZGluZ1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBudW1iZXJTaWduID0gJyMnXG5cbnZhciBtYXhGZW5jZUNvdW50ID0gNlxuXG5mdW5jdGlvbiBhdHhIZWFkaW5nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnQgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBxdWV1ZVxuICB2YXIgZGVwdGhcblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRWF0IGhhc2hlcy5cbiAgZGVwdGggPSAwXG5cbiAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbnVtYmVyU2lnbikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBkZXB0aCsrXG4gIH1cblxuICBpZiAoZGVwdGggPiBtYXhGZW5jZUNvdW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWRlcHRoIHx8ICghcGVkYW50aWMgJiYgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IG51bWJlclNpZ24pKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG5cbiAgLy8gRWF0IGludGVybWVkaWF0ZSB3aGl0ZS1zcGFjZS5cbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gbm90IGluIHBlZGFudGljIG1vZGUgd2l0aG91dCBzcGFjaW5nLlxuICBpZiAoIXBlZGFudGljICYmIHF1ZXVlLmxlbmd0aCA9PT0gMCAmJiBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBFYXQgY29udGVudC5cbiAgc3VidmFsdWUgKz0gcXVldWVcbiAgcXVldWUgPSAnJ1xuICBjb250ZW50ID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBudW1iZXJTaWduKSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIC8vIGAjYCB3aXRob3V0IGEgcXVldWUgaXMgcGFydCBvZiB0aGUgY29udGVudC5cbiAgICBpZiAoIXBlZGFudGljICYmIGNvbnRlbnQgJiYgIXF1ZXVlICYmIGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBpbmRleC0tXG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgcXVldWVcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRleHRIZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVxdWFsc1RvID0gJz0nXG52YXIgZGFzaCA9ICctJ1xuXG52YXIgbWF4SW5kZW50ID0gM1xuXG52YXIgZXF1YWxzVG9EZXB0aCA9IDFcbnZhciBkYXNoRGVwdGggPSAyXG5cbmZ1bmN0aW9uIHNldGV4dEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgZGVwdGhcblxuICAvLyBFYXQgaW5pdGlhbCBpbmRlbnRhdGlvbi5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSB8fCBpbmRleCA+PSBtYXhJbmRlbnQpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFYXQgY29udGVudC5cbiAgY29udGVudCA9ICcnXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZVxuXG4gIC8vIEVuc3VyZSB0aGUgY29udGVudCBpcyBmb2xsb3dlZCBieSBhIG5ld2xpbmUgYW5kIGEgdmFsaWQgbWFya2VyLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgbWFya2VyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgfHwgKG1hcmtlciAhPT0gZXF1YWxzVG8gJiYgbWFya2VyICE9PSBkYXNoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG5cbiAgLy8gRWF0IFNldGV4dC1saW5lLlxuICBxdWV1ZSA9IG1hcmtlclxuICBkZXB0aCA9IG1hcmtlciA9PT0gZXF1YWxzVG8gPyBlcXVhbHNUb0RlcHRoIDogZGFzaERlcHRoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb3BlbkNsb3NlVGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykub3BlbkNsb3NlVGFnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tIdG1sXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGxlc3NUaGFuID0gJzwnXG5cbnZhciByYXdPcGVuRXhwcmVzc2lvbiA9IC9ePChzY3JpcHR8cHJlfHN0eWxlKSg/PShcXHN8PnwkKSkvaVxudmFyIHJhd0Nsb3NlRXhwcmVzc2lvbiA9IC88XFwvKHNjcmlwdHxwcmV8c3R5bGUpPi9pXG52YXIgY29tbWVudE9wZW5FeHByZXNzaW9uID0gL148IS0tL1xudmFyIGNvbW1lbnRDbG9zZUV4cHJlc3Npb24gPSAvLS0+L1xudmFyIGluc3RydWN0aW9uT3BlbkV4cHJlc3Npb24gPSAvXjxcXD8vXG52YXIgaW5zdHJ1Y3Rpb25DbG9zZUV4cHJlc3Npb24gPSAvXFw/Pi9cbnZhciBkaXJlY3RpdmVPcGVuRXhwcmVzc2lvbiA9IC9ePCFbQS1aYS16XS9cbnZhciBkaXJlY3RpdmVDbG9zZUV4cHJlc3Npb24gPSAvPi9cbnZhciBjZGF0YU9wZW5FeHByZXNzaW9uID0gL148IVxcW0NEQVRBXFxbL1xudmFyIGNkYXRhQ2xvc2VFeHByZXNzaW9uID0gL11dPi9cbnZhciBlbGVtZW50Q2xvc2VFeHByZXNzaW9uID0gL14kL1xudmFyIG90aGVyRWxlbWVudE9wZW5FeHByZXNzaW9uID0gbmV3IFJlZ0V4cChvcGVuQ2xvc2VUYWcuc291cmNlICsgJ1xcXFxzKiQnKVxuXG5mdW5jdGlvbiBibG9ja0h0bWwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYmxvY2tzID0gc2VsZi5vcHRpb25zLmJsb2Nrcy5qb2luKCd8JylcbiAgdmFyIGVsZW1lbnRPcGVuRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoXG4gICAgJ148Lz8oJyArIGJsb2NrcyArICcpKD89KFxcXFxzfC8/PnwkKSknLFxuICAgICdpJ1xuICApXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbmV4dFxuICB2YXIgbGluZVxuICB2YXIgb2Zmc2V0XG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGNvdW50XG4gIHZhciBzZXF1ZW5jZVxuICB2YXIgc3VidmFsdWVcblxuICB2YXIgc2VxdWVuY2VzID0gW1xuICAgIFtyYXdPcGVuRXhwcmVzc2lvbiwgcmF3Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbY29tbWVudE9wZW5FeHByZXNzaW9uLCBjb21tZW50Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbaW5zdHJ1Y3Rpb25PcGVuRXhwcmVzc2lvbiwgaW5zdHJ1Y3Rpb25DbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtkaXJlY3RpdmVPcGVuRXhwcmVzc2lvbiwgZGlyZWN0aXZlQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbY2RhdGFPcGVuRXhwcmVzc2lvbiwgY2RhdGFDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtlbGVtZW50T3BlbkV4cHJlc3Npb24sIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtvdGhlckVsZW1lbnRPcGVuRXhwcmVzc2lvbiwgZWxlbWVudENsb3NlRXhwcmVzc2lvbiwgZmFsc2VdXG4gIF1cblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gbGVzc1RoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5leHQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gIG5leHQgPSBuZXh0ID09PSAtMSA/IGxlbmd0aCA6IG5leHRcbiAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0KVxuICBvZmZzZXQgPSAtMVxuICBjb3VudCA9IHNlcXVlbmNlcy5sZW5ndGhcblxuICB3aGlsZSAoKytvZmZzZXQgPCBjb3VudCkge1xuICAgIGlmIChzZXF1ZW5jZXNbb2Zmc2V0XVswXS50ZXN0KGxpbmUpKSB7XG4gICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlc1tvZmZzZXRdXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2VxdWVuY2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gc2VxdWVuY2VbMl1cbiAgfVxuXG4gIGluZGV4ID0gbmV4dFxuXG4gIGlmICghc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgbmV4dCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgICAgIG5leHQgPSBuZXh0ID09PSAtMSA/IGxlbmd0aCA6IG5leHRcbiAgICAgIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCArIDEsIG5leHQpXG5cbiAgICAgIGlmIChzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgaW5kZXggPSBuZXh0XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCA9IG5leHRcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAnaHRtbCcsIHZhbHVlOiBzdWJ2YWx1ZX0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3RhZycpXG52YXIgdGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykudGFnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lSFRNTFxuaW5saW5lSFRNTC5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIHF1ZXN0aW9uTWFyayA9ICc/J1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIHNsYXNoID0gJy8nXG5cbnZhciBodG1sTGlua09wZW5FeHByZXNzaW9uID0gL148YSAvaVxudmFyIGh0bWxMaW5rQ2xvc2VFeHByZXNzaW9uID0gL148XFwvYT4vaVxuXG5mdW5jdGlvbiBpbmxpbmVIVE1MKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBzdWJ2YWx1ZVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09IGxlc3NUaGFuIHx8IGxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgxKVxuXG4gIGlmIChcbiAgICAhYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHF1ZXN0aW9uTWFyayAmJlxuICAgIGNoYXJhY3RlciAhPT0gZXhjbGFtYXRpb25NYXJrICYmXG4gICAgY2hhcmFjdGVyICE9PSBzbGFzaFxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUubWF0Y2godGFnKVxuXG4gIGlmICghc3VidmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5vdCB1c2VkIHlldC4gKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHN1YnZhbHVlWzBdXG5cbiAgaWYgKCFzZWxmLmluTGluayAmJiBodG1sTGlua09wZW5FeHByZXNzaW9uLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSB0cnVlXG4gIH0gZWxzZSBpZiAoc2VsZi5pbkxpbmsgJiYgaHRtbExpbmtDbG9zZUV4cHJlc3Npb24udGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ2h0bWwnLCB2YWx1ZTogc3VidmFsdWV9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9saW5rJylcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rXG5saW5rLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBncmF2ZUFjY2VudCA9ICdgJ1xuXG5mdW5jdGlvbiBsaW5rKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciBjbG9zZWRcbiAgdmFyIGNvdW50XG4gIHZhciBvcGVuaW5nXG4gIHZhciBiZWZvcmVVUkxcbiAgdmFyIGJlZm9yZVRpdGxlXG4gIHZhciBzdWJxdWV1ZVxuICB2YXIgaGFzTWFya2VyXG4gIHZhciBpc0ltYWdlXG4gIHZhciBjb250ZW50XG4gIHZhciBtYXJrZXJcbiAgdmFyIGxlbmd0aFxuICB2YXIgdGl0bGVcbiAgdmFyIGRlcHRoXG4gIHZhciBxdWV1ZVxuICB2YXIgdXJsXG4gIHZhciBub3dcbiAgdmFyIGV4aXRcbiAgdmFyIG5vZGVcblxuICAvLyBEZXRlY3Qgd2hldGhlciB0aGlzIGlzIGFuIGltYWdlLlxuICBpZiAoY2hhcmFjdGVyID09PSBleGNsYW1hdGlvbk1hcmspIHtcbiAgICBpc0ltYWdlID0gdHJ1ZVxuICAgIHN1YnZhbHVlID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICAvLyBFYXQgdGhlIG9wZW5pbmcuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gdGhpcyBpcyBhIGxpbmsgYW5kIHdl4oCZcmUgYWxyZWFkeSBpbnNpZGUgYSBsaW5rLlxuICBpZiAoIWlzSW1hZ2UgJiYgc2VsZi5pbkxpbmspIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG4gIGluZGV4KytcblxuICAvLyBFYXQgdGhlIGNvbnRlbnQuXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBub3cgPSBlYXQubm93KClcbiAgZGVwdGggPSAwXG5cbiAgbm93LmNvbHVtbiArPSBpbmRleFxuICBub3cub2Zmc2V0ICs9IGluZGV4XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIHN1YnF1ZXVlID0gY2hhcmFjdGVyXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgLy8gSW5saW5lLWNvZGUgaW4gbGluayBjb250ZW50LlxuICAgICAgY291bnQgPSAxXG5cbiAgICAgIHdoaWxlICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY291bnQrK1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wZW5pbmcpIHtcbiAgICAgICAgb3BlbmluZyA9IGNvdW50XG4gICAgICB9IGVsc2UgaWYgKGNvdW50ID49IG9wZW5pbmcpIHtcbiAgICAgICAgb3BlbmluZyA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAvLyBBbGxvdyBicmFja2V0cyB0byBiZSBlc2NhcGVkLlxuICAgICAgaW5kZXgrK1xuICAgICAgc3VicXVldWUgKz0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIH0gZWxzZSBpZiAoKCFvcGVuaW5nIHx8IGdmbSkgJiYgY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgICAgLy8gSW4gR0ZNIG1vZGUsIGJyYWNrZXRzIGluIGNvZGUgc3RpbGwgY291bnQuICBJbiBhbGwgb3RoZXIgbW9kZXMsXG4gICAgICAvLyB0aGV5IGRvbuKAmXQuXG4gICAgICBkZXB0aCsrXG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgIGRlcHRoLS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJxdWV1ZSArPSBsZWZ0UGFyZW50aGVzaXNcbiAgICAgICAgY2xvc2VkID0gdHJ1ZVxuICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBzdWJxdWV1ZVxuICAgIHN1YnF1ZXVlID0gJydcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgdGhlIGNvbnRlbnQgY2xvc2luZy5cbiAgaWYgKCFjbG9zZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnRlbnQgPSBxdWV1ZVxuICBzdWJ2YWx1ZSArPSBxdWV1ZSArIHN1YnF1ZXVlXG4gIGluZGV4KytcblxuICAvLyBFYXQgd2hpdGUtc3BhY2UuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCB0aGUgVVJMLlxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHF1ZXVlID0gJydcbiAgYmVmb3JlVVJMID0gc3VidmFsdWVcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZXNzVGhhbikge1xuICAgIGluZGV4KytcbiAgICBiZWZvcmVVUkwgKz0gbGVzc1RoYW5cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGxlc3NUaGFuICsgcXVldWUgKyBncmVhdGVyVGhhblxuICAgIHVybCA9IHF1ZXVlXG4gICAgaW5kZXgrK1xuICB9IGVsc2Uge1xuICAgIGNoYXJhY3RlciA9IG51bGxcbiAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKFxuICAgICAgICBzdWJxdWV1ZSAmJlxuICAgICAgICAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrIHx8XG4gICAgICAgICAgY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlIHx8XG4gICAgICAgICAgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgaWYgKCFwZWRhbnRpYykge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIGRlcHRoKytcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVwdGgtLVxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gc3VicXVldWVcbiAgICAgICAgc3VicXVldWUgPSAnJ1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgIHVybCA9IHF1ZXVlXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgfVxuXG4gIC8vIEVhdCB3aGl0ZS1zcGFjZS5cbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgc3VidmFsdWUgKz0gcXVldWVcblxuICAvLyBFYXQgdGhlIHRpdGxlLlxuICBpZiAoXG4gICAgcXVldWUgJiZcbiAgICAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUgfHxcbiAgICAgIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSlcbiAgKSB7XG4gICAgaW5kZXgrK1xuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIHF1ZXVlID0gJydcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcyA/IHJpZ2h0UGFyZW50aGVzaXMgOiBjaGFyYWN0ZXJcbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlXG5cbiAgICAvLyBJbiBjb21tb25tYXJrLW1vZGUsIHRoaW5ncyBhcmUgcHJldHR5IGVhc3k6IHRoZSBtYXJrZXIgY2Fubm90IG9jY3VyXG4gICAgLy8gaW5zaWRlIHRoZSB0aXRsZS4gIE5vbi1jb21tb25tYXJrIGRvZXMsIGhvd2V2ZXIsIHN1cHBvcnQgbmVzdGVkXG4gICAgLy8gZGVsaW1pdGVycy5cbiAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGl0bGUgPSBxdWV1ZVxuICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgaWYgKGhhc01hcmtlcikge1xuICAgICAgICAgICAgcXVldWUgKz0gbWFya2VyICsgc3VicXVldWVcbiAgICAgICAgICAgIHN1YnF1ZXVlID0gJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYXNNYXJrZXIgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc01hcmtlcikge1xuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyICsgc3VicXVldWVcbiAgICAgICAgICB0aXRsZSA9IHF1ZXVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgICAgIHN1YnF1ZXVlID0gJydcbiAgICAgICAgICBoYXNNYXJrZXIgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3VidmFsdWUgKz0gcmlnaHRQYXJlbnRoZXNpc1xuXG4gIHVybCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHVybCksIGVhdChiZWZvcmVVUkwpLnRlc3QoKS5lbmQsIHtcbiAgICBub25UZXJtaW5hdGVkOiBmYWxzZVxuICB9KVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGJlZm9yZVRpdGxlID0gZWF0KGJlZm9yZVRpdGxlKS50ZXN0KCkuZW5kXG4gICAgdGl0bGUgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh0aXRsZSksIGJlZm9yZVRpdGxlKVxuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiBpc0ltYWdlID8gJ2ltYWdlJyA6ICdsaW5rJyxcbiAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICB1cmw6IHVybFxuICB9XG5cbiAgaWYgKGlzSW1hZ2UpIHtcbiAgICBub2RlLmFsdCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGNvbnRlbnQpLCBub3cpIHx8IG51bGxcbiAgfSBlbHNlIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICAgIG5vZGUuY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgICBleGl0KClcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgZ2V0SW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9nZXQtaW5kZW50YXRpb24nKVxudmFyIHJlbW92ZUluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgcGx1c1NpZ24gPSAnKydcbnZhciBkYXNoID0gJy0nXG52YXIgZG90ID0gJy4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbG93ZXJjYXNlWCA9ICd4J1xuXG52YXIgdGFiU2l6ZSA9IDRcbnZhciBsb29zZUxpc3RJdGVtRXhwcmVzc2lvbiA9IC9cXG5cXG4oPyFcXHMqJCkvXG52YXIgdGFza0l0ZW1FeHByZXNzaW9uID0gL15cXFsoWyBYXFx0eF0pXVsgXFx0XS9cbnZhciBidWxsZXRFeHByZXNzaW9uID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKCB7MSw0fSg/ISApfCB8XFx0fCR8KD89XFxuKSkoW15cXG5dKikvXG52YXIgcGVkYW50aWNCdWxsZXRFeHByZXNzaW9uID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKFsgXFx0XSspL1xudmFyIGluaXRpYWxJbmRlbnRFeHByZXNzaW9uID0gL14oIHsxLDR9fFxcdCk/L2dtXG5cbmZ1bmN0aW9uIGxpc3QoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0TGlzdFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN0YXJ0ID0gbnVsbFxuICB2YXIgc2l6ZVxuICB2YXIgcXVldWVcbiAgdmFyIG9yZGVyZWRcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBuZXh0SW5kZXhcbiAgdmFyIHN0YXJ0SW5kZXhcbiAgdmFyIHByZWZpeGVkXG4gIHZhciBjdXJyZW50TWFya2VyXG4gIHZhciBjb250ZW50XG4gIHZhciBsaW5lXG4gIHZhciBwcmV2aW91c0VtcHR5XG4gIHZhciBlbXB0eVxuICB2YXIgaXRlbXNcbiAgdmFyIGFsbExpbmVzXG4gIHZhciBlbXB0eUxpbmVzXG4gIHZhciBpdGVtXG4gIHZhciBlbnRlclRvcFxuICB2YXIgZXhpdEJsb2NrcXVvdGVcbiAgdmFyIHNwcmVhZCA9IGZhbHNlXG4gIHZhciBub2RlXG4gIHZhciBub3dcbiAgdmFyIGVuZFxuICB2YXIgaW5kZW50ZWRcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHwgY2hhcmFjdGVyID09PSBwbHVzU2lnbiB8fCBjaGFyYWN0ZXIgPT09IGRhc2gpIHtcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICBvcmRlcmVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBvcmRlcmVkID0gdHJ1ZVxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICAhcXVldWUgfHxcbiAgICAgICEoY2hhcmFjdGVyID09PSBkb3QgfHwgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8qIFNsaWdodGx5IGFidXNpbmcgYHNpbGVudGAgbW9kZSwgd2hvc2UgZ29hbCBpcyB0byBtYWtlIGludGVycnVwdGluZ1xuICAgICAqIHBhcmFncmFwaHMgd29yay5cbiAgICAgKiBXZWxsLCB0aGF04oCZcyBleGFjdGx5IHdoYXQgd2Ugd2FudCB0byBkbyBoZXJlOiBkb27igJl0IGludGVycnVwdDpcbiAgICAgKiAyLiBoZXJlLCBiZWNhdXNlIHRoZSDigJxsaXN04oCdIGRvZXNu4oCZdCBzdGFydCB3aXRoIGAxYC4gKi9cbiAgICBpZiAoc2lsZW50ICYmIHF1ZXVlICE9PSAnMScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YXJ0ID0gcGFyc2VJbnQocXVldWUsIDEwKVxuICAgIG1hcmtlciA9IGNoYXJhY3RlclxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG5cbiAgaWYgKFxuICAgIGNoYXJhY3RlciAhPT0gc3BhY2UgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHRhYiAmJlxuICAgIChwZWRhbnRpYyB8fCAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCAmJiBjaGFyYWN0ZXIgIT09ICcnKSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGluZGV4ID0gMFxuICBpdGVtcyA9IFtdXG4gIGFsbExpbmVzID0gW11cbiAgZW1wdHlMaW5lcyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmV4dEluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgcHJlZml4ZWQgPSBmYWxzZVxuICAgIGluZGVudGVkID0gZmFsc2VcblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0SW5kZXggPSBsZW5ndGhcbiAgICB9XG5cbiAgICBzaXplID0gMFxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICBzaXplICs9IHRhYlNpemUgLSAoc2l6ZSAlIHRhYlNpemUpXG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgc2l6ZSsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gJiYgc2l6ZSA+PSBpdGVtLmluZGVudCkge1xuICAgICAgaW5kZW50ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIGN1cnJlbnRNYXJrZXIgPSBudWxsXG5cbiAgICBpZiAoIWluZGVudGVkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBwbHVzU2lnbiB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGRhc2hcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50TWFya2VyID0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgc2l6ZSsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZSA9ICcnXG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHF1ZXVlICYmXG4gICAgICAgICAgKGNoYXJhY3RlciA9PT0gZG90IHx8IChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykpXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgICBzaXplICs9IHF1ZXVlLmxlbmd0aCArIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudE1hcmtlcikge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgICAgc2l6ZSArPSB0YWJTaXplIC0gKHNpemUgJSB0YWJTaXplKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgICAgZW5kID0gaW5kZXggKyB0YWJTaXplXG5cbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBzcGFjZSkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICBzaXplKytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZCAmJiB2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICAgICAgaW5kZXggLT0gdGFiU2l6ZSAtIDFcbiAgICAgICAgICAgIHNpemUgLT0gdGFiU2l6ZSAtIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCAmJiBjaGFyYWN0ZXIgIT09ICcnKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50TWFya2VyKSB7XG4gICAgICBpZiAoIXBlZGFudGljICYmIG1hcmtlciAhPT0gY3VycmVudE1hcmtlcikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwcmVmaXhlZCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb21tb25tYXJrICYmICFpbmRlbnRlZCAmJiB2YWx1ZS5jaGFyQXQoc3RhcnRJbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgIGluZGVudGVkID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChjb21tb25tYXJrICYmIGl0ZW0pIHtcbiAgICAgICAgaW5kZW50ZWQgPSBzaXplID49IGl0ZW0uaW5kZW50IHx8IHNpemUgPiB0YWJTaXplXG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gZmFsc2VcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgIH1cblxuICAgIGxpbmUgPSB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBuZXh0SW5kZXgpXG4gICAgY29udGVudCA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gbGluZSA6IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50TWFya2VyID09PSBhc3RlcmlzayB8fFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gdW5kZXJzY29yZSB8fFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gZGFzaFxuICAgICkge1xuICAgICAgaWYgKHRva2VuaXplcnMudGhlbWF0aWNCcmVhay5jYWxsKHNlbGYsIGVhdCwgbGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91c0VtcHR5ID0gZW1wdHlcbiAgICBlbXB0eSA9ICFwcmVmaXhlZCAmJiAhdHJpbShjb250ZW50KS5sZW5ndGhcblxuICAgIGlmIChpbmRlbnRlZCAmJiBpdGVtKSB7XG4gICAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZS5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9IGVsc2UgaWYgKHByZWZpeGVkKSB7XG4gICAgICBpZiAoZW1wdHlMaW5lcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc3ByZWFkID0gdHJ1ZVxuICAgICAgICBpdGVtLnZhbHVlLnB1c2goJycpXG4gICAgICAgIGl0ZW0udHJhaWwgPSBlbXB0eUxpbmVzLmNvbmNhdCgpXG4gICAgICB9XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHZhbHVlOiBbbGluZV0sXG4gICAgICAgIGluZGVudDogc2l6ZSxcbiAgICAgICAgdHJhaWw6IFtdXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zLnB1c2goaXRlbSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9IGVsc2UgaWYgKGVtcHR5KSB7XG4gICAgICBpZiAocHJldmlvdXNFbXB0eSAmJiAhY29tbW9ubWFyaykge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBlbXB0eUxpbmVzLnB1c2gobGluZSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZpb3VzRW1wdHkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGludGVycnVwdChpbnRlcnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgbGluZSwgdHJ1ZV0pKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH1cblxuICAgIGluZGV4ID0gbmV4dEluZGV4ICsgMVxuICB9XG5cbiAgbm9kZSA9IGVhdChhbGxMaW5lcy5qb2luKGxpbmVGZWVkKSkucmVzZXQoe1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBvcmRlcmVkOiBvcmRlcmVkLFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBzcHJlYWQ6IHNwcmVhZCxcbiAgICBjaGlsZHJlbjogW11cbiAgfSlcblxuICBlbnRlclRvcCA9IHNlbGYuZW50ZXJMaXN0KClcbiAgZXhpdEJsb2NrcXVvdGUgPSBzZWxmLmVudGVyQmxvY2soKVxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XS52YWx1ZS5qb2luKGxpbmVGZWVkKVxuICAgIG5vdyA9IGVhdC5ub3coKVxuXG4gICAgZWF0KGl0ZW0pKGxpc3RJdGVtKHNlbGYsIGl0ZW0sIG5vdyksIG5vZGUpXG5cbiAgICBpdGVtID0gaXRlbXNbaW5kZXhdLnRyYWlsLmpvaW4obGluZUZlZWQpXG5cbiAgICBpZiAoaW5kZXggIT09IGxlbmd0aCAtIDEpIHtcbiAgICAgIGl0ZW0gKz0gbGluZUZlZWRcbiAgICB9XG5cbiAgICBlYXQoaXRlbSlcbiAgfVxuXG4gIGVudGVyVG9wKClcbiAgZXhpdEJsb2NrcXVvdGUoKVxuXG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgZm4gPSBjdHgub3B0aW9ucy5wZWRhbnRpYyA/IHBlZGFudGljTGlzdEl0ZW0gOiBub3JtYWxMaXN0SXRlbVxuICB2YXIgY2hlY2tlZCA9IG51bGxcbiAgdmFyIHRhc2tcbiAgdmFyIGluZGVudFxuXG4gIHZhbHVlID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuXG4gIGlmIChjdHgub3B0aW9ucy5nZm0pIHtcbiAgICB0YXNrID0gdmFsdWUubWF0Y2godGFza0l0ZW1FeHByZXNzaW9uKVxuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGluZGVudCA9IHRhc2tbMF0ubGVuZ3RoXG4gICAgICBjaGVja2VkID0gdGFza1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb3dlcmNhc2VYXG4gICAgICBvZmZzZXRzW3Bvc2l0aW9uLmxpbmVdICs9IGluZGVudFxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShpbmRlbnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgIHNwcmVhZDogbG9vc2VMaXN0SXRlbUV4cHJlc3Npb24udGVzdCh2YWx1ZSksXG4gICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICBjaGlsZHJlbjogY3R4LnRva2VuaXplQmxvY2sodmFsdWUsIHBvc2l0aW9uKVxuICB9XG59XG5cbi8vIENyZWF0ZSBhIGxpc3QtaXRlbSB1c2luZyBvdmVybHkgc2ltcGxlIG1lY2hhbmljcy5cbmZ1bmN0aW9uIHBlZGFudGljTGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuXG4gIC8vIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShwZWRhbnRpY0J1bGxldEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIC8vIFRoZSBpbml0aWFsIGxpbmUgd2FzIGFsc28gbWF0Y2hlZCBieSB0aGUgYmVsb3csIHNvIHdlIHJlc2V0IHRoZSBgbGluZWAuXG4gIGxpbmUgPSBwb3NpdGlvbi5saW5lXG5cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoaW5pdGlhbEluZGVudEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIC8vIEEgc2ltcGxlIHJlcGxhY2VyIHdoaWNoIHJlbW92ZWQgYWxsIG1hdGNoZXMsIGFuZCBhZGRzIHRoZWlyIGxlbmd0aCB0b1xuICAvLyBgb2Zmc2V0YC5cbiAgZnVuY3Rpb24gcmVwbGFjZXIoJDApIHtcbiAgICBvZmZzZXRzW2xpbmVdID0gKG9mZnNldHNbbGluZV0gfHwgMCkgKyAkMC5sZW5ndGhcbiAgICBsaW5lKytcblxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbi8vIENyZWF0ZSBhIGxpc3QtaXRlbSB1c2luZyBzYW5lIG1lY2hhbmljcy5cbmZ1bmN0aW9uIG5vcm1hbExpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcbiAgdmFyIG1heFxuICB2YXIgYnVsbGV0XG4gIHZhciByZXN0XG4gIHZhciBsaW5lc1xuICB2YXIgdHJpbW1lZExpbmVzXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgLy8gUmVtb3ZlIHRoZSBsaXN0LWl0ZW3igJlzIGJ1bGxldC5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGJ1bGxldEV4cHJlc3Npb24sIHJlcGxhY2VyKVxuXG4gIGxpbmVzID0gdmFsdWUuc3BsaXQobGluZUZlZWQpXG5cbiAgdHJpbW1lZExpbmVzID0gcmVtb3ZlSW5kZW50KHZhbHVlLCBnZXRJbmRlbnQobWF4KS5pbmRlbnQpLnNwbGl0KGxpbmVGZWVkKVxuXG4gIC8vIFdlIHJlcGxhY2VkIHRoZSBpbml0aWFsIGJ1bGxldCB3aXRoIHNvbWV0aGluZyBlbHNlIGFib3ZlLCB3aGljaCB3YXMgdXNlZFxuICAvLyB0byB0cmljayBgcmVtb3ZlSW5kZW50YXRpb25gIGludG8gcmVtb3Zpbmcgc29tZSBtb3JlIGNoYXJhY3RlcnMgd2hlblxuICAvLyBwb3NzaWJsZS4gIEhvd2V2ZXIsIHRoYXQgY291bGQgcmVzdWx0IGluIHRoZSBpbml0aWFsIGxpbmUgdG8gYmUgc3RyaXBwZWRcbiAgLy8gbW9yZSB0aGFuIGl0IHNob3VsZCBiZS5cbiAgdHJpbW1lZExpbmVzWzBdID0gcmVzdFxuXG4gIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArIGJ1bGxldC5sZW5ndGhcbiAgbGluZSsrXG5cbiAgaW5kZXggPSAwXG4gIGxlbmd0aCA9IGxpbmVzLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9XG4gICAgICAob2Zmc2V0c1tsaW5lXSB8fCAwKSArIGxpbmVzW2luZGV4XS5sZW5ndGggLSB0cmltbWVkTGluZXNbaW5kZXhdLmxlbmd0aFxuICAgIGxpbmUrK1xuICB9XG5cbiAgcmV0dXJuIHRyaW1tZWRMaW5lcy5qb2luKGxpbmVGZWVkKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VyKCQwLCAkMSwgJDIsICQzLCAkNCkge1xuICAgIGJ1bGxldCA9ICQxICsgJDIgKyAkM1xuICAgIHJlc3QgPSAkNFxuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGZpcnN0IG5pbmUgbnVtYmVyZWQgbGlzdCBpdGVtcyBjYW4gaW5kZW50IHdpdGggYW5cbiAgICAvLyBleHRyYSBzcGFjZS4gIFRoYXQgaXMsIHdoZW4gdGhlIGJ1bGxldCBkaWQgbm90IHJlY2VpdmUgYW4gZXh0cmEgZmluYWxcbiAgICAvLyBzcGFjZS5cbiAgICBpZiAoTnVtYmVyKCQyKSA8IDEwICYmIGJ1bGxldC5sZW5ndGggJSAyID09PSAxKSB7XG4gICAgICAkMiA9IHNwYWNlICsgJDJcbiAgICB9XG5cbiAgICBtYXggPSAkMSArIHJlcGVhdChzcGFjZSwgJDIubGVuZ3RoKSArICQzXG5cbiAgICByZXR1cm4gbWF4ICsgcmVzdFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciB0cmltVHJhaWxpbmdMaW5lcyA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciB0YWJTaXplID0gNFxuXG4vLyBUb2tlbmlzZSBwYXJhZ3JhcGguXG5mdW5jdGlvbiBwYXJhZ3JhcGgoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2V0dGluZ3MgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZXR0aW5ncy5jb21tb25tYXJrXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0UGFyYWdyYXBoXG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQpXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBzaXplXG4gIHZhciBub3dcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAvLyBFYXQgZXZlcnl0aGluZyBpZiB0aGVyZeKAmXMgbm8gZm9sbG93aW5nIG5ld2xpbmUuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBsZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gU3RvcCBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgTkVXTElORS5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIEluIGNvbW1vbm1hcmstbW9kZSwgZm9sbG93aW5nIGluZGVudGVkIGxpbmVzIGFyZSBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGguXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHNpemUgPSAwXG4gICAgICBwb3NpdGlvbiA9IGluZGV4ICsgMVxuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICAgIHNpemUgPSB0YWJTaXplXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgICAgc2l6ZSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uKytcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPj0gdGFiU2l6ZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoaW5kZXggKyAxKVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGZvbGxvd2luZyBjb2RlIGNvbnRhaW5zIGEgcG9zc2libGUgYmxvY2suXG4gICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHN1YnZhbHVlLCB0cnVlXSkpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSBpbmRleFxuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiB0cmltKHZhbHVlLnNsaWNlKHBvc2l0aW9uLCBpbmRleCkpID09PSAnJykge1xuICAgICAgaW5kZXggPSBwb3NpdGlvblxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgc3VidmFsdWUgPSB0cmltVHJhaWxpbmdMaW5lcyhzdWJ2YWx1ZSlcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmVyZW5jZVxucmVmZXJlbmNlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmsgPSAnbGluaydcbnZhciBpbWFnZSA9ICdpbWFnZSdcbnZhciBzaG9ydGN1dCA9ICdzaG9ydGN1dCdcbnZhciBjb2xsYXBzZWQgPSAnY29sbGFwc2VkJ1xudmFyIGZ1bGwgPSAnZnVsbCdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xuXG5mdW5jdGlvbiByZWZlcmVuY2UoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMClcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbnRybyA9ICcnXG4gIHZhciB0eXBlID0gbGlua1xuICB2YXIgcmVmZXJlbmNlVHlwZSA9IHNob3J0Y3V0XG4gIHZhciBjb250ZW50XG4gIHZhciBpZGVudGlmaWVyXG4gIHZhciBub3dcbiAgdmFyIG5vZGVcbiAgdmFyIGV4aXRcbiAgdmFyIHF1ZXVlXG4gIHZhciBicmFja2V0ZWRcbiAgdmFyIGRlcHRoXG5cbiAgLy8gQ2hlY2sgd2hldGhlciB3ZeKAmXJlIGVhdGluZyBhbiBpbWFnZS5cbiAgaWYgKGNoYXJhY3RlciA9PT0gZXhjbGFtYXRpb25NYXJrKSB7XG4gICAgdHlwZSA9IGltYWdlXG4gICAgaW50cm8gPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIGludHJvICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgLy8gRWF0IHRoZSB0ZXh0LlxuICBkZXB0aCA9IDBcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgICAgYnJhY2tldGVkID0gdHJ1ZVxuICAgICAgZGVwdGgrK1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGlmICghZGVwdGgpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVwdGgtLVxuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHF1ZXVlXG4gIGNvbnRlbnQgPSBxdWV1ZVxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgaWYgKCFjb21tb25tYXJrKSB7XG4gICAgLy8gVGhlIG9yaWdpbmFsIG1hcmtkb3duIHN5bnRheCBkZWZpbml0aW9uIGV4cGxpY2l0bHkgYWxsb3dzIGZvciB3aGl0ZXNwYWNlXG4gICAgLy8gYmV0d2VlbiB0aGUgbGluayB0ZXh0IGFuZCBsaW5rIGxhYmVsOyBjb21tb25tYXJrIGRlcGFydHMgZnJvbSB0aGlzLCBpblxuICAgIC8vIHBhcnQgdG8gaW1wcm92ZSBzdXBwb3J0IGZvciBzaG9ydGN1dCByZWZlcmVuY2UgbGlua3NcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgaWRlbnRpZmllciA9ICcnXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0IHx8IGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICBpZGVudGlmaWVyICs9IGJhY2tzbGFzaFxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgIH1cblxuICAgICAgaWRlbnRpZmllciArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIHJlZmVyZW5jZVR5cGUgPSBpZGVudGlmaWVyID8gZnVsbCA6IGNvbGxhcHNlZFxuICAgICAgcXVldWUgKz0gaWRlbnRpZmllciArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH0gZWxzZSB7XG4gICAgICBpZGVudGlmaWVyID0gJydcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgIHF1ZXVlID0gJydcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlkZW50aWZpZXIgPSBjb250ZW50XG4gIH1cblxuICAvLyBCcmFja2V0cyBjYW5ub3QgYmUgaW5zaWRlIHRoZSBpZGVudGlmaWVyLlxuICBpZiAocmVmZXJlbmNlVHlwZSAhPT0gZnVsbCAmJiBicmFja2V0ZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlID0gaW50cm8gKyBzdWJ2YWx1ZVxuXG4gIGlmICh0eXBlID09PSBsaW5rICYmIHNlbGYuaW5MaW5rKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSBpbnRyby5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBpbnRyby5sZW5ndGhcbiAgaWRlbnRpZmllciA9IHJlZmVyZW5jZVR5cGUgPT09IGZ1bGwgPyBpZGVudGlmaWVyIDogY29udGVudFxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogdHlwZSArICdSZWZlcmVuY2UnLFxuICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKSxcbiAgICBsYWJlbDogaWRlbnRpZmllcixcbiAgICByZWZlcmVuY2VUeXBlOiByZWZlcmVuY2VUeXBlXG4gIH1cblxuICBpZiAodHlwZSA9PT0gbGluaykge1xuICAgIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gICAgbm9kZS5jaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICAgIGV4aXQoKVxuICB9IGVsc2Uge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbFxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3N0cm9uZycpXG5cbm1vZHVsZS5leHBvcnRzID0gc3Ryb25nXG5zdHJvbmcubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciB1bmRlcnNjb3JlID0gJ18nXG5cbmZ1bmN0aW9uIHN0cm9uZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIG5vd1xuICB2YXIgcGVkYW50aWNcbiAgdmFyIG1hcmtlclxuICB2YXIgcXVldWVcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBsZW5ndGhcbiAgdmFyIHByZXZpb3VzXG5cbiAgaWYgKFxuICAgIChjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZSkgfHxcbiAgICB2YWx1ZS5jaGFyQXQoKytpbmRleCkgIT09IGNoYXJhY3RlclxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBzdWJ2YWx1ZSA9IG1hcmtlciArIG1hcmtlclxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgaW5kZXgrK1xuICBxdWV1ZSA9ICcnXG4gIGNoYXJhY3RlciA9ICcnXG5cbiAgaWYgKHBlZGFudGljICYmIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KGluZGV4KSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBtYXJrZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBtYXJrZXIgJiZcbiAgICAgICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldmlvdXMpKVxuICAgICkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMilcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGlmICghdHJpbShxdWV1ZSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KClcbiAgICAgICAgbm93LmNvbHVtbiArPSAyXG4gICAgICAgIG5vdy5vZmZzZXQgKz0gMlxuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIHN1YnZhbHVlKSh7XG4gICAgICAgICAgdHlwZTogJ3N0cm9uZycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHZlcnRpY2FsQmFyID0gJ3wnXG5cbnZhciBtaW5Db2x1bW5zID0gMVxudmFyIG1pblJvd3MgPSAyXG5cbnZhciBsZWZ0ID0gJ2xlZnQnXG52YXIgY2VudGVyID0gJ2NlbnRlcidcbnZhciByaWdodCA9ICdyaWdodCdcblxuZnVuY3Rpb24gdGFibGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXhcbiAgdmFyIGFsaWdubWVudHNcbiAgdmFyIGFsaWdubWVudFxuICB2YXIgc3VidmFsdWVcbiAgdmFyIHJvd1xuICB2YXIgbGVuZ3RoXG4gIHZhciBsaW5lc1xuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgaGFzRGFzaFxuICB2YXIgYWxpZ25cbiAgdmFyIGNlbGxcbiAgdmFyIHByZWFtYmxlXG4gIHZhciBub3dcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciBsaW5lQ291bnRcbiAgdmFyIGxpbmVcbiAgdmFyIHJvd3NcbiAgdmFyIHRhYmxlXG4gIHZhciBsaW5lSW5kZXhcbiAgdmFyIHBpcGVJbmRleFxuICB2YXIgZmlyc3RcblxuICAvLyBFeGl0IHdoZW4gbm90IGluIGdmbS1tb2RlLlxuICBpZiAoIXNlbGYub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEdldCB0aGUgcm93cy5cbiAgLy8gRGV0ZWN0aW5nIHRhYmxlcyBzb29uIGlzIGhhcmQsIHNvIHRoZXJlIGFyZSBzb21lIGNoZWNrcyBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gaGVyZSwgc3VjaCBhcyB0aGUgbWluaW11bSBudW1iZXIgb2Ygcm93cywgYW5kIGFsbG93ZWQgY2hhcmFjdGVycyBpbiB0aGVcbiAgLy8gYWxpZ25tZW50IHJvdy5cbiAgaW5kZXggPSAwXG4gIGxpbmVDb3VudCA9IDBcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICBsaW5lcyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbGluZUluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gICAgcGlwZUluZGV4ID0gdmFsdWUuaW5kZXhPZih2ZXJ0aWNhbEJhciwgaW5kZXggKyAxKVxuXG4gICAgaWYgKGxpbmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGxpbmVJbmRleCA9IHZhbHVlLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChwaXBlSW5kZXggPT09IC0xIHx8IHBpcGVJbmRleCA+IGxpbmVJbmRleCkge1xuICAgICAgaWYgKGxpbmVDb3VudCA8IG1pblJvd3MpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGluZXMucHVzaCh2YWx1ZS5zbGljZShpbmRleCwgbGluZUluZGV4KSlcbiAgICBsaW5lQ291bnQrK1xuICAgIGluZGV4ID0gbGluZUluZGV4ICsgMVxuICB9XG5cbiAgLy8gUGFyc2UgdGhlIGFsaWdubWVudCByb3cuXG4gIHN1YnZhbHVlID0gbGluZXMuam9pbihsaW5lRmVlZClcbiAgYWxpZ25tZW50cyA9IGxpbmVzLnNwbGljZSgxLCAxKVswXSB8fCBbXVxuICBpbmRleCA9IDBcbiAgbGVuZ3RoID0gYWxpZ25tZW50cy5sZW5ndGhcbiAgbGluZUNvdW50LS1cbiAgYWxpZ25tZW50ID0gZmFsc2VcbiAgYWxpZ24gPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IGFsaWdubWVudHMuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gdmVydGljYWxCYXIpIHtcbiAgICAgIGhhc0Rhc2ggPSBudWxsXG5cbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24ucHVzaChhbGlnbm1lbnQpXG4gICAgICAgIGFsaWdubWVudCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGZpcnN0ID0gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gZGFzaCkge1xuICAgICAgaGFzRGFzaCA9IHRydWVcbiAgICAgIGFsaWdubWVudCA9IGFsaWdubWVudCB8fCBudWxsXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGNvbG9uKSB7XG4gICAgICBpZiAoYWxpZ25tZW50ID09PSBsZWZ0KSB7XG4gICAgICAgIGFsaWdubWVudCA9IGNlbnRlclxuICAgICAgfSBlbHNlIGlmIChoYXNEYXNoICYmIGFsaWdubWVudCA9PT0gbnVsbCkge1xuICAgICAgICBhbGlnbm1lbnQgPSByaWdodFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ25tZW50ID0gbGVmdFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCAhPT0gZmFsc2UpIHtcbiAgICBhbGlnbi5wdXNoKGFsaWdubWVudClcbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiB3aXRob3V0IGVub3VnaCBjb2x1bW5zLlxuICBpZiAoYWxpZ24ubGVuZ3RoIDwgbWluQ29sdW1ucykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFBhcnNlIHRoZSByb3dzLlxuICBwb3NpdGlvbiA9IC0xXG4gIHJvd3MgPSBbXVxuXG4gIHRhYmxlID0gZWF0KHN1YnZhbHVlKS5yZXNldCh7dHlwZTogJ3RhYmxlJywgYWxpZ246IGFsaWduLCBjaGlsZHJlbjogcm93c30pXG5cbiAgd2hpbGUgKCsrcG9zaXRpb24gPCBsaW5lQ291bnQpIHtcbiAgICBsaW5lID0gbGluZXNbcG9zaXRpb25dXG4gICAgcm93ID0ge3R5cGU6ICd0YWJsZVJvdycsIGNoaWxkcmVuOiBbXX1cblxuICAgIC8vIEVhdCBhIG5ld2xpbmUgY2hhcmFjdGVyIHdoZW4gdGhpcyBpcyBub3QgdGhlIGZpcnN0IHJvdy5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIGVhdChsaW5lRmVlZClcbiAgICB9XG5cbiAgICAvLyBFYXQgdGhlIHJvdy5cbiAgICBlYXQobGluZSkucmVzZXQocm93LCB0YWJsZSlcblxuICAgIGxlbmd0aCA9IGxpbmUubGVuZ3RoICsgMVxuICAgIGluZGV4ID0gMFxuICAgIHF1ZXVlID0gJydcbiAgICBjZWxsID0gJydcbiAgICBwcmVhbWJsZSA9IHRydWVcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gbGluZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWF0KGNoYXJhY3RlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJycgfHwgY2hhcmFjdGVyID09PSB2ZXJ0aWNhbEJhcikge1xuICAgICAgICBpZiAocHJlYW1ibGUpIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgoY2VsbCB8fCBjaGFyYWN0ZXIpICYmICFwcmVhbWJsZSkge1xuICAgICAgICAgICAgc3VidmFsdWUgPSBjZWxsXG5cbiAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZS5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlLmNoYXJBdChxdWV1ZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgICAgICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vdyA9IGVhdC5ub3coKVxuXG4gICAgICAgICAgICBlYXQoc3VidmFsdWUpKFxuICAgICAgICAgICAgICB7dHlwZTogJ3RhYmxlQ2VsbCcsIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNlbGwsIG5vdyl9LFxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlYXQocXVldWUgKyBjaGFyYWN0ZXIpXG5cbiAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgICAgY2VsbCA9ICcnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChxdWV1ZSkge1xuICAgICAgICAgIGNlbGwgKz0gcXVldWVcbiAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBjZWxsICs9IGNoYXJhY3RlclxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCAmJiBpbmRleCAhPT0gbGVuZ3RoIC0gMikge1xuICAgICAgICAgIGNlbGwgKz0gbGluZS5jaGFyQXQoaW5kZXggKyAxKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmVhbWJsZSA9IGZhbHNlXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gRWF0IHRoZSBhbGlnbm1lbnQgcm93LlxuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIGVhdChsaW5lRmVlZCArIGFsaWdubWVudHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhYmxlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbmZ1bmN0aW9uIHRleHQoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbWV0aG9kc1xuICB2YXIgdG9rZW5pemVyc1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgc3VidmFsdWVcbiAgdmFyIHBvc2l0aW9uXG4gIHZhciB0b2tlbml6ZXJcbiAgdmFyIG5hbWVcbiAgdmFyIG1pblxuICB2YXIgbm93XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1ldGhvZHMgPSBzZWxmLmlubGluZU1ldGhvZHNcbiAgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGhcbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICBpbmRleCA9IC0xXG4gIG1pbiA9IHZhbHVlLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdXG5cbiAgICBpZiAobmFtZSA9PT0gJ3RleHQnIHx8ICF0b2tlbml6ZXJzW25hbWVdKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHRva2VuaXplciA9IHRva2VuaXplcnNbbmFtZV0ubG9jYXRvclxuXG4gICAgaWYgKCF0b2tlbml6ZXIpIHtcbiAgICAgIGVhdC5maWxlLmZhaWwoJ01pc3NpbmcgbG9jYXRvcjogYCcgKyBuYW1lICsgJ2AnKVxuICAgIH1cblxuICAgIHBvc2l0aW9uID0gdG9rZW5pemVyLmNhbGwoc2VsZiwgdmFsdWUsIDEpXG5cbiAgICBpZiAocG9zaXRpb24gIT09IC0xICYmIHBvc2l0aW9uIDwgbWluKSB7XG4gICAgICBtaW4gPSBwb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgbWluKVxuICBub3cgPSBlYXQubm93KClcblxuICBzZWxmLmRlY29kZShzdWJ2YWx1ZSwgbm93LCBoYW5kbGVyKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZXIoY29udGVudCwgcG9zaXRpb24sIHNvdXJjZSkge1xuICAgIGVhdChzb3VyY2UgfHwgY29udGVudCkoe3R5cGU6ICd0ZXh0JywgdmFsdWU6IGNvbnRlbnR9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY0JyZWFrXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGFzdGVyaXNrID0gJyonXG52YXIgZGFzaCA9ICctJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcblxudmFyIG1heENvdW50ID0gM1xuXG5mdW5jdGlvbiB0aGVtYXRpY0JyZWFrKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIG1hcmtlckNvdW50XG4gIHZhciBxdWV1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICBpZiAoXG4gICAgY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJlxuICAgIGNoYXJhY3RlciAhPT0gZGFzaCAmJlxuICAgIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgbWFya2VyQ291bnQgPSAxXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgbWFya2VyQ291bnQrK1xuICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBtYXJrZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBtYXJrZXJDb3VudCA+PSBtYXhDb3VudCAmJlxuICAgICAgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZClcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlXG5cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICd0aGVtYXRpY0JyZWFrJ30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS91cmwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVybFxudXJsLmxvY2F0b3IgPSBsb2NhdGVcbnVybC5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBleGNsYW1hdGlvbk1hcmsgPSAzMyAvLyAnISdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAnJidcbnZhciByaWdodFBhcmVudGhlc2lzID0gNDEgLy8gJyknXG52YXIgYXN0ZXJpc2sgPSA0MiAvLyAnKidcbnZhciBjb21tYSA9IDQ0IC8vICcsJ1xudmFyIGRhc2ggPSA0NSAvLyAnLSdcbnZhciBkb3QgPSA0NiAvLyAnLidcbnZhciBjb2xvbiA9IDU4IC8vICc6J1xudmFyIHNlbWljb2xvbiA9IDU5IC8vICc7J1xudmFyIHF1ZXN0aW9uTWFyayA9IDYzIC8vICc/J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gJzwnXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xudmFyIHRpbGRlID0gMTI2IC8vICd+J1xuXG52YXIgbGVmdFBhcmVudGhlc2lzQ2hhcmFjdGVyID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlciA9ICcpJ1xuXG5mdW5jdGlvbiB1cmwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBwcmV2aW91c0RvdCA9IC0xXG4gIHZhciBwcm90b2NvbGxlc3MgPSBmYWxzZVxuICB2YXIgZG90c1xuICB2YXIgbGFzdFR3b1BhcnRzU3RhcnRcbiAgdmFyIHN0YXJ0XG4gIHZhciBpbmRleFxuICB2YXIgcGF0aFN0YXJ0XG4gIHZhciBwYXRoXG4gIHZhciBjb2RlXG4gIHZhciBlbmRcbiAgdmFyIGxlZnRDb3VudFxuICB2YXIgcmlnaHRDb3VudFxuICB2YXIgY29udGVudFxuICB2YXIgY2hpbGRyZW5cbiAgdmFyIHVybFxuICB2YXIgZXhpdFxuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBgV1dXLmAgZG9lc27igJl0IHdvcmsuXG4gIGlmICh2YWx1ZS5zbGljZSgwLCA0KSA9PT0gJ3d3dy4nKSB7XG4gICAgcHJvdG9jb2xsZXNzID0gdHJ1ZVxuICAgIGluZGV4ID0gNFxuICB9IGVsc2UgaWYgKHZhbHVlLnNsaWNlKDAsIDcpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwOi8vJykge1xuICAgIGluZGV4ID0gN1xuICB9IGVsc2UgaWYgKHZhbHVlLnNsaWNlKDAsIDgpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwczovLycpIHtcbiAgICBpbmRleCA9IDhcbiAgfSBlbHNlIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEFjdCBhcyBpZiB0aGUgc3RhcnRpbmcgYm91bmRhcnkgaXMgYSBkb3QuXG4gIHByZXZpb3VzRG90ID0gaW5kZXggLSAxXG5cbiAgLy8gUGFyc2UgYSB2YWxpZCBkb21haW4uXG4gIHN0YXJ0ID0gaW5kZXhcbiAgZG90cyA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgICAvLyBEb3RzIG1heSBub3QgYXBwZWFyIGFmdGVyIGVhY2ggb3RoZXIuXG4gICAgICBpZiAocHJldmlvdXNEb3QgPT09IGluZGV4IC0gMSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkb3RzLnB1c2goaW5kZXgpXG4gICAgICBwcmV2aW91c0RvdCA9IGluZGV4XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgICAgY29kZSA9PT0gZGFzaCB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICAgICkge1xuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBicmVha1xuICB9XG5cbiAgLy8gSWdub3JlIGEgZmluYWwgZG90OlxuICBpZiAoY29kZSA9PT0gZG90KSB7XG4gICAgZG90cy5wb3AoKVxuICAgIGluZGV4LS1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBub3QgZG90cywgZXhpdC5cbiAgaWYgKGRvdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgdGhlcmUgaXMgYW4gdW5kZXJzY29yZSBpbiB0aGUgbGFzdCB0d28gZG9tYWluIHBhcnRzLCBleGl0OlxuICAvLyBgd3d3LmV4YW1wbGUuY19tYCBhbmQgYHd3dy5leF9hbXBsZS5jb21gIGFyZSBub3QgT0ssIGJ1dFxuICAvLyBgd3d3LnN1Yl9kb21haW4uZXhhbXBsZS5jb21gIGlzLlxuICBsYXN0VHdvUGFydHNTdGFydCA9IGRvdHMubGVuZ3RoIDwgMiA/IHN0YXJ0IDogZG90c1tkb3RzLmxlbmd0aCAtIDJdICsgMVxuXG4gIGlmICh2YWx1ZS5zbGljZShsYXN0VHdvUGFydHNTdGFydCwgaW5kZXgpLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBlbmQgPSBpbmRleFxuICBwYXRoU3RhcnQgPSBpbmRleFxuXG4gIC8vIFBhcnNlIGEgcGF0aC5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAod2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBsZXNzVGhhbikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBleGNsYW1hdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IGFzdGVyaXNrIHx8XG4gICAgICBjb2RlID09PSBjb21tYSB8fFxuICAgICAgY29kZSA9PT0gZG90IHx8XG4gICAgICBjb2RlID09PSBjb2xvbiB8fFxuICAgICAgY29kZSA9PT0gcXVlc3Rpb25NYXJrIHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlIHx8XG4gICAgICBjb2RlID09PSB0aWxkZVxuICAgICkge1xuICAgICAgLy8gRW1wdHlcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IGVuZFxuXG4gIC8vIElmIHRoZSBwYXRoIGVuZHMgaW4gYSBjbG9zaW5nIHBhcmVuLCBhbmQgdGhlIGNvdW50IG9mIGNsb3NpbmcgcGFyZW5zIGlzXG4gIC8vIGhpZ2hlciB0aGFuIHRoZSBvcGVuaW5nIGNvdW50LCB0aGVuIHJlbW92ZSB0aGUgc3VwZWZsdW91cyBjbG9zaW5nIHBhcmVucy5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgIHBhdGggPSB2YWx1ZS5zbGljZShwYXRoU3RhcnQsIGluZGV4KVxuICAgIGxlZnRDb3VudCA9IGNjb3VudChwYXRoLCBsZWZ0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG4gICAgcmlnaHRDb3VudCA9IGNjb3VudChwYXRoLCByaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuXG4gICAgd2hpbGUgKHJpZ2h0Q291bnQgPiBsZWZ0Q291bnQpIHtcbiAgICAgIGluZGV4ID0gcGF0aFN0YXJ0ICsgcGF0aC5sYXN0SW5kZXhPZihyaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuICAgICAgcGF0aCA9IHZhbHVlLnNsaWNlKHBhdGhTdGFydCwgaW5kZXgpXG4gICAgICByaWdodENvdW50LS1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpID09PSBzZW1pY29sb24pIHtcbiAgICAvLyBHaXRIdWIgZG9lc27igJl0IGRvY3VtZW50IHRoaXMsIGJ1dCBmaW5hbCBzZW1pY29sb25zIGFyZW7igJl0IHBhcmV0IG9mIHRoZVxuICAgIC8vIFVSTCBlaXRoZXIuXG4gICAgaW5kZXgtLVxuXG4gICAgLy8gLy8gSWYgdGhlIHBhdGggZW5kcyBpbiB3aGF0IGxvb2tzIGxpa2UgYW4gZW50aXR5LCBpdOKAmXMgbm90IHBhcnQgb2YgdGhlIHBhdGguXG4gICAgaWYgKGFscGhhYmV0aWNhbCh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkpKSB7XG4gICAgICBlbmQgPSBpbmRleCAtIDJcblxuICAgICAgd2hpbGUgKGFscGhhYmV0aWNhbCh2YWx1ZS5jaGFyQ29kZUF0KGVuZCkpKSB7XG4gICAgICAgIGVuZC0tXG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGVuZCkgPT09IGFtcGVyc2FuZCkge1xuICAgICAgICBpbmRleCA9IGVuZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcbiAgdXJsID0gZGVjb2RlKGNvbnRlbnQsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pXG5cbiAgaWYgKHByb3RvY29sbGVzcykge1xuICAgIHVybCA9ICdodHRwOi8vJyArIHVybFxuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gdXJsLlxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuICBjaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKVxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChjb250ZW50KSh7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiB1cmwsIGNoaWxkcmVuOiBjaGlsZHJlbn0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIENvbnN0cnVjdCBhIHRva2VuaXplci4gIFRoaXMgY3JlYXRlcyBib3RoIGB0b2tlbml6ZUlubGluZWAgYW5kIGB0b2tlbml6ZUJsb2NrYC5cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICByZXR1cm4gdG9rZW5pemVcblxuICAvLyBUb2tlbml6ZXIgZm9yIGEgYm91bmQgYHR5cGVgLlxuICBmdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgb2Zmc2V0ID0gc2VsZi5vZmZzZXRcbiAgICB2YXIgdG9rZW5zID0gW11cbiAgICB2YXIgbWV0aG9kcyA9IHNlbGZbdHlwZSArICdNZXRob2RzJ11cbiAgICB2YXIgdG9rZW5pemVycyA9IHNlbGZbdHlwZSArICdUb2tlbml6ZXJzJ11cbiAgICB2YXIgbGluZSA9IGxvY2F0aW9uLmxpbmVcbiAgICB2YXIgY29sdW1uID0gbG9jYXRpb24uY29sdW1uXG4gICAgdmFyIGluZGV4XG4gICAgdmFyIGxlbmd0aFxuICAgIHZhciBtZXRob2RcbiAgICB2YXIgbmFtZVxuICAgIHZhciBtYXRjaGVkXG4gICAgdmFyIHZhbHVlTGVuZ3RoXG5cbiAgICAvLyBUcmltIHdoaXRlIHNwYWNlIG9ubHkgbGluZXMuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRva2Vuc1xuICAgIH1cblxuICAgIC8vIEV4cG9zZSBvbiBgZWF0YC5cbiAgICBlYXQubm93ID0gbm93XG4gICAgZWF0LmZpbGUgPSBzZWxmLmZpbGVcblxuICAgIC8vIFN5bmMgaW5pdGlhbCBvZmZzZXQuXG4gICAgdXBkYXRlUG9zaXRpb24oJycpXG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYHZhbHVlYCwgYW5kIGl0ZXJhdGUgb3ZlciBhbGwgdG9rZW5pemVycy4gIFdoZW4gb25lIGVhdHNcbiAgICAvLyBzb21ldGhpbmcsIHJlLWl0ZXJhdGUgd2l0aCB0aGUgcmVtYWluaW5nIHZhbHVlLiAgSWYgbm8gdG9rZW5pemVyIGVhdHMsXG4gICAgLy8gc29tZXRoaW5nIGZhaWxlZCAoc2hvdWxkIG5vdCBoYXBwZW4pIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgIHdoaWxlICh2YWx1ZSkge1xuICAgICAgaW5kZXggPSAtMVxuICAgICAgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGhcbiAgICAgIG1hdGNoZWQgPSBmYWxzZVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBuYW1lID0gbWV0aG9kc1tpbmRleF1cbiAgICAgICAgbWV0aG9kID0gdG9rZW5pemVyc1tuYW1lXVxuXG4gICAgICAgIC8vIFByZXZpb3VzbHksIHdlIGhhZCBjb25zdHJ1Y3RzIHN1Y2ggYXMgZm9vdG5vdGVzIGFuZCBZQU1MIHRoYXQgdXNlZFxuICAgICAgICAvLyB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAgICAvLyBUaG9zZSBhcmUgbm93IGV4dGVybmFsIChwbHVzIHRoZXJlIGFyZSB1c2VybGFuZCBleHRlbnNpb25zKSwgdGhhdCBtYXlcbiAgICAgICAgLy8gc3RpbGwgdXNlIHRoZW0uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtZXRob2QgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5vbmx5QXRTdGFydCB8fCBzZWxmLmF0U3RhcnQpICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qubm90SW5MaXN0IHx8ICFzZWxmLmluTGlzdCkgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5ub3RJbkJsb2NrIHx8ICFzZWxmLmluQmxvY2spICYmXG4gICAgICAgICAgKCFtZXRob2Qubm90SW5MaW5rIHx8ICFzZWxmLmluTGluaylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgICAgICAgIG1ldGhvZC5hcHBseShzZWxmLCBbZWF0LCB2YWx1ZV0pXG5cbiAgICAgICAgICBtYXRjaGVkID0gdmFsdWVMZW5ndGggIT09IHZhbHVlLmxlbmd0aFxuXG4gICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgIHNlbGYuZmlsZS5mYWlsKG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCcpLCBlYXQubm93KCkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5lb2YgPSBub3coKVxuXG4gICAgcmV0dXJuIHRva2Vuc1xuXG4gICAgLy8gVXBkYXRlIGxpbmUsIGNvbHVtbiwgYW5kIG9mZnNldCBiYXNlZCBvbiBgdmFsdWVgLlxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN1YnZhbHVlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gLTFcbiAgICAgIHZhciBpbmRleCA9IHN1YnZhbHVlLmluZGV4T2YoJ1xcbicpXG5cbiAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxhc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGluZGV4ID0gc3VidmFsdWUuaW5kZXhPZignXFxuJywgaW5kZXggKyAxKVxuICAgICAgfVxuXG4gICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICBjb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gPSBzdWJ2YWx1ZS5sZW5ndGggLSBsYXN0SW5kZXhcbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmUgaW4gb2Zmc2V0KSB7XG4gICAgICAgIGlmIChsYXN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29sdW1uICs9IG9mZnNldFtsaW5lXVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA8PSBvZmZzZXRbbGluZV0pIHtcbiAgICAgICAgICBjb2x1bW4gPSBvZmZzZXRbbGluZV0gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgb2Zmc2V0LiAgQ2FsbGVkIGJlZm9yZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIGVhdGVuIHRvIHJldHJpZXZlIHRoZVxuICAgIC8vIHJhbmdl4oCZcyBvZmZzZXRzLlxuICAgIGZ1bmN0aW9uIGdldE9mZnNldCgpIHtcbiAgICAgIHZhciBpbmRlbnRhdGlvbiA9IFtdXG4gICAgICB2YXIgcG9zID0gbGluZSArIDFcblxuICAgICAgLy8gRG9uZS4gIENhbGxlZCB3aGVuIHRoZSBsYXN0IGNoYXJhY3RlciBpcyBlYXRlbiB0byByZXRyaWV2ZSB0aGUgcmFuZ2XigJlzXG4gICAgICAvLyBvZmZzZXRzLlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhc3QgPSBsaW5lICsgMVxuXG4gICAgICAgIHdoaWxlIChwb3MgPCBsYXN0KSB7XG4gICAgICAgICAgaW5kZW50YXRpb24ucHVzaCgob2Zmc2V0W3Bvc10gfHwgMCkgKyAxKVxuXG4gICAgICAgICAgcG9zKytcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRlbnRhdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICBmdW5jdGlvbiBub3coKSB7XG4gICAgICB2YXIgcG9zID0ge2xpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1ufVxuXG4gICAgICBwb3Mub2Zmc2V0ID0gc2VsZi50b09mZnNldChwb3MpXG5cbiAgICAgIHJldHVybiBwb3NcbiAgICB9XG5cbiAgICAvLyBTdG9yZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBub2RlLlxuICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgICAgIHRoaXMuZW5kID0gbm93KClcbiAgICB9XG5cbiAgICAvLyBUaHJvdyB3aGVuIGEgdmFsdWUgaXMgaW5jb3JyZWN0bHkgZWF0ZW4uICBUaGlzIHNob3VsZG7igJl0IGhhcHBlbiBidXQgd2lsbFxuICAgIC8vIHRocm93IG9uIG5ldywgaW5jb3JyZWN0IHJ1bGVzLlxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRWF0KHN1YnZhbHVlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh2YWx1ZS5zbGljZSgwLCBzdWJ2YWx1ZS5sZW5ndGgpICE9PSBzdWJ2YWx1ZSkge1xuICAgICAgICAvLyBDYXB0dXJlIHN0YWNrLXRyYWNlLlxuICAgICAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnSW5jb3JyZWN0bHkgZWF0ZW4gdmFsdWU6IHBsZWFzZSByZXBvcnQgdGhpcyB3YXJuaW5nIG9uIGh0dHBzOi8vZ2l0LmlvL3ZnNUZ0J1xuICAgICAgICAgICksXG4gICAgICAgICAgbm93KClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgcG9zaXRpb24gYW5kIHBhdGNoIGBub2RlLnBvc2l0aW9uYC5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgIHZhciBiZWZvcmUgPSBub3coKVxuXG4gICAgICByZXR1cm4gdXBkYXRlXG5cbiAgICAgIC8vIEFkZCB0aGUgcG9zaXRpb24gdG8gYSBub2RlLlxuICAgICAgZnVuY3Rpb24gdXBkYXRlKG5vZGUsIGluZGVudCkge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBub2RlLnBvc2l0aW9uXG4gICAgICAgIHZhciBzdGFydCA9IHByZXZpb3VzID8gcHJldmlvdXMuc3RhcnQgOiBiZWZvcmVcbiAgICAgICAgdmFyIGNvbWJpbmVkID0gW11cbiAgICAgICAgdmFyIG4gPSBwcmV2aW91cyAmJiBwcmV2aW91cy5lbmQubGluZVxuICAgICAgICB2YXIgbCA9IGJlZm9yZS5saW5lXG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydClcblxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYWxyZWFkeSBhIGBwb3NpdGlvbmAsIHRoaXMgbm9kZSB3YXMgbWVyZ2VkLiAgRml4aW5nXG4gICAgICAgIC8vIGBzdGFydGAgd2FzbuKAmXQgaGFyZCwgYnV0IHRoZSBpbmRlbnQgaXMgZGlmZmVyZW50LiAgRXNwZWNpYWxseVxuICAgICAgICAvLyBiZWNhdXNlIHNvbWUgaW5mb3JtYXRpb24sIHRoZSBpbmRlbnQgYmV0d2VlbiBgbmAgYW5kIGBsYCB3YXNu4oCZdFxuICAgICAgICAvLyB0cmFja2VkLiAgTHVja2lseSwgdGhhdCBzcGFjZSBpcyAoc2hvdWxkIGJlPykgZW1wdHksIHNvIHdlIGNhblxuICAgICAgICAvLyBzYWZlbHkgY2hlY2sgZm9yIGl0IG5vdy5cbiAgICAgICAgaWYgKHByZXZpb3VzICYmIGluZGVudCAmJiBwcmV2aW91cy5pbmRlbnQpIHtcbiAgICAgICAgICBjb21iaW5lZCA9IHByZXZpb3VzLmluZGVudFxuXG4gICAgICAgICAgaWYgKG4gPCBsKSB7XG4gICAgICAgICAgICB3aGlsZSAoKytuIDwgbCkge1xuICAgICAgICAgICAgICBjb21iaW5lZC5wdXNoKChvZmZzZXRbbl0gfHwgMCkgKyAxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21iaW5lZC5wdXNoKGJlZm9yZS5jb2x1bW4pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZW50ID0gY29tYmluZWQuY29uY2F0KGluZGVudClcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucG9zaXRpb24uaW5kZW50ID0gaW5kZW50IHx8IFtdXG5cbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYG5vZGVgIHRvIGBwYXJlbnRgcyBjaGlsZHJlbiBvciB0byBgdG9rZW5zYC4gIFBlcmZvcm1zIG1lcmdlcyB3aGVyZVxuICAgIC8vIHBvc3NpYmxlLlxuICAgIGZ1bmN0aW9uIGFkZChub2RlLCBwYXJlbnQpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IHRva2Vuc1xuICAgICAgdmFyIHByZXZpb3VzID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgIHZhciBmblxuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzICYmXG4gICAgICAgIG5vZGUudHlwZSA9PT0gcHJldmlvdXMudHlwZSAmJlxuICAgICAgICAobm9kZS50eXBlID09PSAndGV4dCcgfHwgbm9kZS50eXBlID09PSAnYmxvY2txdW90ZScpICYmXG4gICAgICAgIG1lcmdlYWJsZShwcmV2aW91cykgJiZcbiAgICAgICAgbWVyZ2VhYmxlKG5vZGUpXG4gICAgICApIHtcbiAgICAgICAgZm4gPSBub2RlLnR5cGUgPT09ICd0ZXh0JyA/IG1lcmdlVGV4dCA6IG1lcmdlQmxvY2txdW90ZVxuICAgICAgICBub2RlID0gZm4uY2FsbChzZWxmLCBwcmV2aW91cywgbm9kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgIT09IHByZXZpb3VzKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuYXRTdGFydCAmJiB0b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHNlbGYuZXhpdFN0YXJ0KClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYHN1YnZhbHVlYCBmcm9tIGB2YWx1ZWAuICBgc3VidmFsdWVgIG11c3QgYmUgYXQgdGhlIHN0YXJ0IG9mXG4gICAgLy8gYHZhbHVlYC5cbiAgICBmdW5jdGlvbiBlYXQoc3VidmFsdWUpIHtcbiAgICAgIHZhciBpbmRlbnQgPSBnZXRPZmZzZXQoKVxuICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKClcbiAgICAgIHZhciBjdXJyZW50ID0gbm93KClcblxuICAgICAgdmFsaWRhdGVFYXQoc3VidmFsdWUpXG5cbiAgICAgIGFwcGx5LnJlc2V0ID0gcmVzZXRcbiAgICAgIHJlc2V0LnRlc3QgPSB0ZXN0XG4gICAgICBhcHBseS50ZXN0ID0gdGVzdFxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKHN1YnZhbHVlLmxlbmd0aClcblxuICAgICAgdXBkYXRlUG9zaXRpb24oc3VidmFsdWUpXG5cbiAgICAgIGluZGVudCA9IGluZGVudCgpXG5cbiAgICAgIHJldHVybiBhcHBseVxuXG4gICAgICAvLyBBZGQgdGhlIGdpdmVuIGFyZ3VtZW50cywgYWRkIGBwb3NpdGlvbmAgdG8gdGhlIHJldHVybmVkIG5vZGUsIGFuZFxuICAgICAgLy8gcmV0dXJuIHRoZSBub2RlLlxuICAgICAgZnVuY3Rpb24gYXBwbHkobm9kZSwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwb3MoYWRkKHBvcyhub2RlKSwgcGFyZW50KSwgaW5kZW50KVxuICAgICAgfVxuXG4gICAgICAvLyBGdW5jdGlvbnMganVzdCBsaWtlIGFwcGx5LCBidXQgcmVzZXRzIHRoZSBjb250ZW50OiB0aGUgbGluZSBhbmRcbiAgICAgIC8vIGNvbHVtbiBhcmUgcmV2ZXJzZWQsIGFuZCB0aGUgZWF0ZW4gdmFsdWUgaXMgcmUtYWRkZWQuICAgVGhpcyBpc1xuICAgICAgLy8gdXNlZnVsIGZvciBub2RlcyB3aXRoIGEgc2luZ2xlIHR5cGUgb2YgY29udGVudCwgc3VjaCBhcyBsaXN0cyBhbmRcbiAgICAgIC8vIHRhYmxlcy4gIFNlZSBgYXBwbHlgIGFib3ZlIGZvciB3aGF0IHBhcmFtZXRlcnMgYXJlIGV4cGVjdGVkLlxuICAgICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHZhciBub2RlID0gYXBwbHkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmVcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW5cbiAgICAgICAgdmFsdWUgPSBzdWJ2YWx1ZSArIHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH1cblxuICAgICAgLy8gVGVzdCB0aGUgcG9zaXRpb24sIGFmdGVyIGVhdGluZywgYW5kIHJldmVyc2UgdG8gYSBub3QtZWF0ZW4gc3RhdGUuXG4gICAgICBmdW5jdGlvbiB0ZXN0KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcG9zKHt9KVxuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmVcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW5cbiAgICAgICAgdmFsdWUgPSBzdWJ2YWx1ZSArIHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5wb3NpdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBtZXJnZWFibGUgd2l0aCBhZGphY2VudCBub2Rlcy5cbmZ1bmN0aW9uIG1lcmdlYWJsZShub2RlKSB7XG4gIHZhciBzdGFydFxuICB2YXIgZW5kXG5cbiAgaWYgKG5vZGUudHlwZSAhPT0gJ3RleHQnIHx8ICFub2RlLnBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN0YXJ0ID0gbm9kZS5wb3NpdGlvbi5zdGFydFxuICBlbmQgPSBub2RlLnBvc2l0aW9uLmVuZFxuXG4gIC8vIE9ubHkgbWVyZ2Ugbm9kZXMgd2hpY2ggb2NjdXB5IHRoZSBzYW1lIHNpemUgYXMgdGhlaXIgYHZhbHVlYC5cbiAgcmV0dXJuIChcbiAgICBzdGFydC5saW5lICE9PSBlbmQubGluZSB8fCBlbmQuY29sdW1uIC0gc3RhcnQuY29sdW1uID09PSBub2RlLnZhbHVlLmxlbmd0aFxuICApXG59XG5cbi8vIE1lcmdlIHR3byB0ZXh0IG5vZGVzOiBgbm9kZWAgaW50byBgcHJldmAuXG5mdW5jdGlvbiBtZXJnZVRleHQocHJldmlvdXMsIG5vZGUpIHtcbiAgcHJldmlvdXMudmFsdWUgKz0gbm9kZS52YWx1ZVxuXG4gIHJldHVybiBwcmV2aW91c1xufVxuXG4vLyBNZXJnZSB0d28gYmxvY2txdW90ZXM6IGBub2RlYCBpbnRvIGBwcmV2YCwgdW5sZXNzIGluIENvbW1vbk1hcmsgb3IgZ2ZtIG1vZGVzLlxuZnVuY3Rpb24gbWVyZ2VCbG9ja3F1b3RlKHByZXZpb3VzLCBub2RlKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuY29tbW9ubWFyayB8fCB0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHByZXZpb3VzLmNoaWxkcmVuID0gcHJldmlvdXMuY2hpbGRyZW4uY29uY2F0KG5vZGUuY2hpbGRyZW4pXG5cbiAgcmV0dXJuIHByZXZpb3VzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuLy8gRmFjdG9yeSB0byBkZS1lc2NhcGUgYSB2YWx1ZSwgYmFzZWQgb24gYSBsaXN0IGF0IGBrZXlgIGluIGBjdHhgLlxuZnVuY3Rpb24gZmFjdG9yeShjdHgsIGtleSkge1xuICByZXR1cm4gdW5lc2NhcGVcblxuICAvLyBEZS1lc2NhcGUgYSBzdHJpbmcgdXNpbmcgdGhlIGV4cHJlc3Npb24gYXQgYGtleWAgaW4gYGN0eGAuXG4gIGZ1bmN0aW9uIHVuZXNjYXBlKHZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzID0gMFxuICAgIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoYmFja3NsYXNoKVxuICAgIHZhciBlc2NhcGUgPSBjdHhba2V5XVxuICAgIHZhciBxdWV1ZSA9IFtdXG4gICAgdmFyIGNoYXJhY3RlclxuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwcmV2aW91cywgaW5kZXgpKVxuICAgICAgcHJldmlvdXMgPSBpbmRleCArIDFcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwcmV2aW91cylcblxuICAgICAgLy8gSWYgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXIgaXMgbm90IGEgdmFsaWQgZXNjYXBlLCBhZGQgdGhlIHNsYXNoLlxuICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgZXNjYXBlLmluZGV4T2YoY2hhcmFjdGVyKSA9PT0gLTEpIHtcbiAgICAgICAgcXVldWUucHVzaChiYWNrc2xhc2gpXG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihiYWNrc2xhc2gsIHByZXZpb3VzICsgMSlcbiAgICB9XG5cbiAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXZpb3VzKSlcblxuICAgIHJldHVybiBxdWV1ZS5qb2luKCcnKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRhdGlvblxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgc3BhY2VTaXplID0gMVxudmFyIHRhYlNpemUgPSA0XG5cbi8vIEdldHMgaW5kZW50YXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbGluZS5cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGluZGVudCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIHN0b3BzID0ge31cbiAgdmFyIHNpemVcbiAgdmFyIGxhc3RJbmRlbnQgPSAwXG5cbiAgd2hpbGUgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICBzaXplID0gY2hhcmFjdGVyID09PSB0YWIgPyB0YWJTaXplIDogc3BhY2VTaXplXG5cbiAgICBpbmRlbnQgKz0gc2l6ZVxuXG4gICAgaWYgKHNpemUgPiAxKSB7XG4gICAgICBpbmRlbnQgPSBNYXRoLmZsb29yKGluZGVudCAvIHNpemUpICogc2l6ZVxuICAgIH1cblxuICAgIHdoaWxlIChsYXN0SW5kZW50IDwgaW5kZW50KSB7XG4gICAgICBzdG9wc1srK2xhc3RJbmRlbnRdID0gaW5kZXhcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIHJldHVybiB7aW5kZW50OiBpbmRlbnQsIHN0b3BzOiBzdG9wc31cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXR0cmlidXRlTmFtZSA9ICdbYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKidcbnZhciB1bnF1b3RlZCA9ICdbXlwiXFwnPTw+YFxcXFx1MDAwMC1cXFxcdTAwMjBdKydcbnZhciBzaW5nbGVRdW90ZWQgPSBcIidbXiddKidcIlxudmFyIGRvdWJsZVF1b3RlZCA9ICdcIlteXCJdKlwiJ1xudmFyIGF0dHJpYnV0ZVZhbHVlID1cbiAgJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZVF1b3RlZCArICd8JyArIGRvdWJsZVF1b3RlZCArICcpJ1xudmFyIGF0dHJpYnV0ZSA9XG4gICcoPzpcXFxccysnICsgYXR0cmlidXRlTmFtZSArICcoPzpcXFxccyo9XFxcXHMqJyArIGF0dHJpYnV0ZVZhbHVlICsgJyk/KSdcbnZhciBvcGVuVGFnID0gJzxbQS1aYS16XVtBLVphLXowLTlcXFxcLV0qJyArIGF0dHJpYnV0ZSArICcqXFxcXHMqXFxcXC8/PidcbnZhciBjbG9zZVRhZyA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPidcbnZhciBjb21tZW50ID0gJzwhLS0tLT58PCEtLSg/Oi0/W14+LV0pKD86LT9bXi1dKSotLT4nXG52YXIgcHJvY2Vzc2luZyA9ICc8Wz9dLio/Wz9dPidcbnZhciBkZWNsYXJhdGlvbiA9ICc8IVtBLVphLXpdK1xcXFxzK1tePl0qPidcbnZhciBjZGF0YSA9ICc8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT4nXG5cbmV4cG9ydHMub3BlbkNsb3NlVGFnID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuVGFnICsgJ3wnICsgY2xvc2VUYWcgKyAnKScpXG5cbmV4cG9ydHMudGFnID0gbmV3IFJlZ0V4cChcbiAgJ14oPzonICtcbiAgICBvcGVuVGFnICtcbiAgICAnfCcgK1xuICAgIGNsb3NlVGFnICtcbiAgICAnfCcgK1xuICAgIGNvbW1lbnQgK1xuICAgICd8JyArXG4gICAgcHJvY2Vzc2luZyArXG4gICAgJ3wnICtcbiAgICBkZWNsYXJhdGlvbiArXG4gICAgJ3wnICtcbiAgICBjZGF0YSArXG4gICAgJyknXG4pXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnJ1cHRcblxuZnVuY3Rpb24gaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgY3R4LCBwYXJhbWV0ZXJzKSB7XG4gIHZhciBsZW5ndGggPSBpbnRlcnJ1cHRvcnMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBpbnRlcnJ1cHRvclxuICB2YXIgY29uZmlnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpbnRlcnJ1cHRvciA9IGludGVycnVwdG9yc1tpbmRleF1cbiAgICBjb25maWcgPSBpbnRlcnJ1cHRvclsxXSB8fCB7fVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLnBlZGFudGljICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbmZpZy5wZWRhbnRpYyAhPT0gY3R4Lm9wdGlvbnMucGVkYW50aWNcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLmNvbW1vbm1hcmsgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29uZmlnLmNvbW1vbm1hcmsgIT09IGN0eC5vcHRpb25zLmNvbW1vbm1hcmtcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRva2VuaXplcnNbaW50ZXJydXB0b3JbMF1dLmFwcGx5KGN0eCwgcGFyYW1ldGVycykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvbGxhcHNlV2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2NvbGxhcHNlLXdoaXRlLXNwYWNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLy8gTm9ybWFsaXplIGFuIGlkZW50aWZpZXIuICBDb2xsYXBzZXMgbXVsdGlwbGUgd2hpdGUgc3BhY2UgY2hhcmFjdGVycyBpbnRvIGFcbi8vIHNpbmdsZSBzcGFjZSwgYW5kIHJlbW92ZXMgY2FzaW5nLlxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiBjb2xsYXBzZVdoaXRlU3BhY2UodmFsdWUpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4vZ2V0LWluZGVudGF0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRhdGlvblxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG5cbi8vIFJlbW92ZSB0aGUgbWluaW11bSBpbmRlbnQgZnJvbSBldmVyeSBsaW5lIGluIGB2YWx1ZWAuICBTdXBwb3J0cyBib3RoIHRhYixcbi8vIHNwYWNlZCwgYW5kIG1peGVkIGluZGVudGF0aW9uIChhcyB3ZWxsIGFzIHBvc3NpYmxlKS5cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlLCBtYXhpbXVtKSB7XG4gIHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChsaW5lRmVlZClcbiAgdmFyIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aCArIDFcbiAgdmFyIG1pbkluZGVudCA9IEluZmluaXR5XG4gIHZhciBtYXRyaXggPSBbXVxuICB2YXIgaW5kZXhcbiAgdmFyIGluZGVudGF0aW9uXG4gIHZhciBzdG9wc1xuXG4gIHZhbHVlcy51bnNoaWZ0KHJlcGVhdChzcGFjZSwgbWF4aW11bSkgKyBleGNsYW1hdGlvbk1hcmspXG5cbiAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICBpbmRlbnRhdGlvbiA9IGdldEluZGVudCh2YWx1ZXNbcG9zaXRpb25dKVxuXG4gICAgbWF0cml4W3Bvc2l0aW9uXSA9IGluZGVudGF0aW9uLnN0b3BzXG5cbiAgICBpZiAodHJpbSh2YWx1ZXNbcG9zaXRpb25dKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGluZGVudGF0aW9uLmluZGVudCkge1xuICAgICAgaWYgKGluZGVudGF0aW9uLmluZGVudCA+IDAgJiYgaW5kZW50YXRpb24uaW5kZW50IDwgbWluSW5kZW50KSB7XG4gICAgICAgIG1pbkluZGVudCA9IGluZGVudGF0aW9uLmluZGVudFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtaW5JbmRlbnQgPSBJbmZpbml0eVxuXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5JbmRlbnQgIT09IEluZmluaXR5KSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoXG5cbiAgICB3aGlsZSAocG9zaXRpb24tLSkge1xuICAgICAgc3RvcHMgPSBtYXRyaXhbcG9zaXRpb25dXG4gICAgICBpbmRleCA9IG1pbkluZGVudFxuXG4gICAgICB3aGlsZSAoaW5kZXggJiYgIShpbmRleCBpbiBzdG9wcykpIHtcbiAgICAgICAgaW5kZXgtLVxuICAgICAgfVxuXG4gICAgICB2YWx1ZXNbcG9zaXRpb25dID0gdmFsdWVzW3Bvc2l0aW9uXS5zbGljZShzdG9wc1tpbmRleF0gKyAxKVxuICAgIH1cbiAgfVxuXG4gIHZhbHVlcy5zaGlmdCgpXG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKGxpbmVGZWVkKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==