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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvYmxvY2stZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9icmVhay5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS90YWcuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS91cmwuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3NldC1vcHRpb25zLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9hdXRvLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JsYW5rLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWZlbmNlZC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmRlbnRlZC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9oZWFkaW5nLXNldGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1ibG9jay5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90ZXh0LmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdXJsLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3VuZXNjYXBlLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2dldC1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9odG1sLmpzIiwid2VicGFjazovLy8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWixjQUFjLG1CQUFPLENBQUMsb0RBQVM7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxzRUFBaUI7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLGtFQUFnQjs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUNBQXVDO0FBQ3JEOzs7Ozs7Ozs7Ozs7O0FDM0hZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyw0RUFBaUI7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5QkFBeUIsY0FBYztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNVBZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxXQUFXLG1CQUFPLENBQUMsNEVBQXFCOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakdZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNUdZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRkFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVB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QUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN0SVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVdZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsZ0VBQWU7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDLGdCQUFnQixtQkFBTyxDQUFDLDRGQUF5QjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxrR0FBNEI7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsZ0ZBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RDtBQUNBLG1DQUFtQyxJQUFJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Ylk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLHdCQUF3QixtQkFBTyxDQUFDLDRFQUFxQjtBQUNyRCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRkFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNqR1k7O0FBRVosaUJBQWlCLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQywwRUFBZ0I7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsZ0ZBQW1COztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzTFk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsOEVBQWtCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRlk7O0FBRVosaUJBQWlCLG1CQUFPLENBQUMsb0ZBQXlCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQiw0Q0FBNEM7O0FBRTNFO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWUsNERBQTREO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdk9ZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeERZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHNCQUFzQjtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCLGFBQWEsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFpQjtBQUM1QyxpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLHdFQUFlOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIscUJBQXFCOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsd0RBQXdEO0FBQy9FOzs7Ozs7Ozs7Ozs7O0FDak5ZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3VFk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7OztBQ3BDWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ1k7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsOEVBQXNCOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVlk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhDQUFNO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZTtBQUNwQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzRkFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjUyODJhY2M3OTIxY2RhMTkwMGYxLzAuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5oZXJpdCA9IHJlcXVpcmUoJ3VuaGVyaXQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFBhcnNlciA9IHJlcXVpcmUoJy4vbGliL3BhcnNlci5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbnBhcnNlLlBhcnNlciA9IFBhcnNlclxuXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHRoaXMuZGF0YSgnc2V0dGluZ3MnKVxuICB2YXIgTG9jYWwgPSB1bmhlcml0KFBhcnNlcilcblxuICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyA9IHh0ZW5kKExvY2FsLnByb3RvdHlwZS5vcHRpb25zLCBzZXR0aW5ncywgb3B0aW9ucylcblxuICB0aGlzLlBhcnNlciA9IExvY2FsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmFzZScsXG4gICdiYXNlZm9udCcsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnY2FwdGlvbicsXG4gICdjZW50ZXInLFxuICAnY29sJyxcbiAgJ2NvbGdyb3VwJyxcbiAgJ2RkJyxcbiAgJ2RldGFpbHMnLFxuICAnZGlhbG9nJyxcbiAgJ2RpcicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnZnJhbWUnLFxuICAnZnJhbWVzZXQnLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZCcsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICdtZXRhJyxcbiAgJ25hdicsXG4gICdub2ZyYW1lcycsXG4gICdvbCcsXG4gICdvcHRncm91cCcsXG4gICdvcHRpb24nLFxuICAncCcsXG4gICdwYXJhbScsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAndGl0bGUnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBGYWN0b3J5IHRvIGNyZWF0ZSBhbiBlbnRpdHkgZGVjb2Rlci5cbmZ1bmN0aW9uIGZhY3RvcnkoY3R4KSB7XG4gIGRlY29kZXIucmF3ID0gZGVjb2RlUmF3XG5cbiAgcmV0dXJuIGRlY29kZXJcblxuICAvLyBOb3JtYWxpemUgYHBvc2l0aW9uYCB0byBhZGQgYW4gYGluZGVudGAuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb3NpdGlvbikge1xuICAgIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICAgIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuICAgIHZhciByZXN1bHQgPSBbXVxuXG4gICAgd2hpbGUgKCsrbGluZSkge1xuICAgICAgaWYgKCEobGluZSBpbiBvZmZzZXRzKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaCgob2Zmc2V0c1tsaW5lXSB8fCAwKSArIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGFydDogcG9zaXRpb24sIGluZGVudDogcmVzdWx0fVxuICB9XG5cbiAgLy8gRGVjb2RlIGB2YWx1ZWAgKGF0IGBwb3NpdGlvbmApIGludG8gdGV4dC1ub2Rlcy5cbiAgZnVuY3Rpb24gZGVjb2Rlcih2YWx1ZSwgcG9zaXRpb24sIGhhbmRsZXIpIHtcbiAgICBlbnRpdGllcyh2YWx1ZSwge1xuICAgICAgcG9zaXRpb246IG5vcm1hbGl6ZShwb3NpdGlvbiksXG4gICAgICB3YXJuaW5nOiBoYW5kbGVXYXJuaW5nLFxuICAgICAgdGV4dDogaGFuZGxlcixcbiAgICAgIHJlZmVyZW5jZTogaGFuZGxlcixcbiAgICAgIHRleHRDb250ZXh0OiBjdHgsXG4gICAgICByZWZlcmVuY2VDb250ZXh0OiBjdHhcbiAgICB9KVxuICB9XG5cbiAgLy8gRGVjb2RlIGB2YWx1ZWAgKGF0IGBwb3NpdGlvbmApIGludG8gYSBzdHJpbmcuXG4gIGZ1bmN0aW9uIGRlY29kZVJhdyh2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZW50aXRpZXMoXG4gICAgICB2YWx1ZSxcbiAgICAgIHh0ZW5kKG9wdGlvbnMsIHtwb3NpdGlvbjogbm9ybWFsaXplKHBvc2l0aW9uKSwgd2FybmluZzogaGFuZGxlV2FybmluZ30pXG4gICAgKVxuICB9XG5cbiAgLy8gSGFuZGxlIGEgd2FybmluZy5cbiAgLy8gU2VlIDxodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL3BhcnNlLWVudGl0aWVzPiBmb3IgdGhlIHdhcm5pbmdzLlxuICBmdW5jdGlvbiBoYW5kbGVXYXJuaW5nKHJlYXNvbiwgcG9zaXRpb24sIGNvZGUpIHtcbiAgICBpZiAoY29kZSAhPT0gMykge1xuICAgICAgY3R4LmZpbGUubWVzc2FnZShyZWFzb24sIHBvc2l0aW9uKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3NpdGlvbjogdHJ1ZSxcbiAgZ2ZtOiB0cnVlLFxuICBjb21tb25tYXJrOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBibG9ja3M6IHJlcXVpcmUoJy4vYmxvY2stZWxlbWVudHMnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGZyb21JbmRleClcblxuICB3aGlsZSAoaW5kZXggPiBmcm9tSW5kZXgpIHtcbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4IC0gMSkgIT09ICcgJykge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleC0tXG4gIH1cblxuICByZXR1cm4gaW5kZXhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignYCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignfn4nLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxuXG52YXIgcGx1c1NpZ24gPSA0MyAvLyAnKydcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG4vLyBTZWU6IDxodHRwczovL2dpdGh1Yi5naXRodWIuY29tL2dmbS8jZXh0ZW5kZWQtZW1haWwtYXV0b2xpbms+XG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGF0XG4gIHZhciBwb3NpdGlvblxuXG4gIGlmICghdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgYXQgPSB2YWx1ZS5pbmRleE9mKCdAJywgZnJvbUluZGV4KVxuXG4gIGlmIChhdCA9PT0gLTEpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIHBvc2l0aW9uID0gYXRcblxuICBpZiAocG9zaXRpb24gPT09IGZyb21JbmRleCB8fCAhaXNHZm1BdGV4dCh2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uIC0gMSkpKSB7XG4gICAgcmV0dXJuIGxvY2F0ZS5jYWxsKHNlbGYsIHZhbHVlLCBhdCArIDEpXG4gIH1cblxuICB3aGlsZSAocG9zaXRpb24gPiBmcm9tSW5kZXggJiYgaXNHZm1BdGV4dCh2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uIC0gMSkpKSB7XG4gICAgcG9zaXRpb24tLVxuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uXG59XG5cbmZ1bmN0aW9uIGlzR2ZtQXRleHQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICBjb2RlID09PSBwbHVzU2lnbiB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSBkb3QgfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgYXN0ZXJpc2sgPSB2YWx1ZS5pbmRleE9mKCcqJywgZnJvbUluZGV4KVxuICB2YXIgdW5kZXJzY29yZSA9IHZhbHVlLmluZGV4T2YoJ18nLCBmcm9tSW5kZXgpXG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrXG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmVcbiAgfVxuXG4gIHJldHVybiB1bmRlcnNjb3JlIDwgYXN0ZXJpc2sgPyB1bmRlcnNjb3JlIDogYXN0ZXJpc2tcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignXFxcXCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgbGluayA9IHZhbHVlLmluZGV4T2YoJ1snLCBmcm9tSW5kZXgpXG4gIHZhciBpbWFnZSA9IHZhbHVlLmluZGV4T2YoJyFbJywgZnJvbUluZGV4KVxuXG4gIGlmIChpbWFnZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbGlua1xuICB9XG5cbiAgLy8gTGluayBjYW4gbmV2ZXIgYmUgYC0xYCBpZiBhbiBpbWFnZSBpcyBmb3VuZCwgc28gd2UgZG9u4oCZdCBuZWVkIHRvIGNoZWNrXG4gIC8vIGZvciB0aGF0IDopXG4gIHJldHVybiBsaW5rIDwgaW1hZ2UgPyBsaW5rIDogaW1hZ2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgYXN0ZXJpc2sgPSB2YWx1ZS5pbmRleE9mKCcqKicsIGZyb21JbmRleClcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfXycsIGZyb21JbmRleClcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2tcbiAgfVxuXG4gIGlmIChhc3RlcmlzayA9PT0gLTEpIHtcbiAgICByZXR1cm4gdW5kZXJzY29yZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlza1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCc8JywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlXG5cbnZhciB2YWx1ZXMgPSBbJ3d3dy4nLCAnaHR0cDovLycsICdodHRwczovLyddXG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBtaW4gPSAtMVxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgcG9zaXRpb25cblxuICBpZiAoIXRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gbWluXG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gdmFsdWUuaW5kZXhPZih2YWx1ZXNbaW5kZXhdLCBmcm9tSW5kZXgpXG5cbiAgICBpZiAocG9zaXRpb24gIT09IC0xICYmIChtaW4gPT09IC0xIHx8IHBvc2l0aW9uIDwgbWluKSkge1xuICAgICAgbWluID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWluXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHJlbW92ZVBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbGluZUJyZWFrc0V4cHJlc3Npb24gPSAvXFxyXFxufFxcci9nXG5cbi8vIFBhcnNlIHRoZSBib3VuZCBmaWxlLlxuZnVuY3Rpb24gcGFyc2UoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdmFsdWUgPSBTdHJpbmcoc2VsZi5maWxlKVxuICB2YXIgc3RhcnQgPSB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9XG4gIHZhciBjb250ZW50ID0geHRlbmQoc3RhcnQpXG4gIHZhciBub2RlXG5cbiAgLy8gQ2xlYW4gbm9uLXVuaXggbmV3bGluZXM6IGBcXHJcXG5gIGFuZCBgXFxyYCBhcmUgYWxsIGNoYW5nZWQgdG8gYFxcbmAuXG4gIC8vIFRoaXMgc2hvdWxkIG5vdCBhZmZlY3QgcG9zaXRpb25hbCBpbmZvcm1hdGlvbi5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGxpbmVCcmVha3NFeHByZXNzaW9uLCBsaW5lRmVlZClcblxuICAvLyBCT00uXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAweGZlZmYpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpXG5cbiAgICBjb250ZW50LmNvbHVtbisrXG4gICAgY29udGVudC5vZmZzZXQrK1xuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiAncm9vdCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVCbG9jayh2YWx1ZSwgY29udGVudCksXG4gICAgcG9zaXRpb246IHtzdGFydDogc3RhcnQsIGVuZDogc2VsZi5lb2YgfHwgeHRlbmQoc3RhcnQpfVxuICB9XG5cbiAgaWYgKCFzZWxmLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICByZW1vdmVQb3NpdGlvbihub2RlLCB0cnVlKVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgdG9nZ2xlID0gcmVxdWlyZSgnc3RhdGUtdG9nZ2xlJylcbnZhciB2ZmlsZUxvY2F0aW9uID0gcmVxdWlyZSgndmZpbGUtbG9jYXRpb24nKVxudmFyIHVuZXNjYXBlID0gcmVxdWlyZSgnLi91bmVzY2FwZScpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKVxudmFyIHRva2VuaXplciA9IHJlcXVpcmUoJy4vdG9rZW5pemVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJcblxuZnVuY3Rpb24gUGFyc2VyKGRvYywgZmlsZSkge1xuICB0aGlzLmZpbGUgPSBmaWxlXG4gIHRoaXMub2Zmc2V0ID0ge31cbiAgdGhpcy5vcHRpb25zID0geHRlbmQodGhpcy5vcHRpb25zKVxuICB0aGlzLnNldE9wdGlvbnMoe30pXG5cbiAgdGhpcy5pbkxpc3QgPSBmYWxzZVxuICB0aGlzLmluQmxvY2sgPSBmYWxzZVxuICB0aGlzLmluTGluayA9IGZhbHNlXG4gIHRoaXMuYXRTdGFydCA9IHRydWVcblxuICB0aGlzLnRvT2Zmc2V0ID0gdmZpbGVMb2NhdGlvbihmaWxlKS50b09mZnNldFxuICB0aGlzLnVuZXNjYXBlID0gdW5lc2NhcGUodGhpcywgJ2VzY2FwZScpXG4gIHRoaXMuZGVjb2RlID0gZGVjb2RlKHRoaXMpXG59XG5cbnZhciBwcm90byA9IFBhcnNlci5wcm90b3R5cGVcblxuLy8gRXhwb3NlIGNvcmUuXG5wcm90by5zZXRPcHRpb25zID0gcmVxdWlyZSgnLi9zZXQtb3B0aW9ucycpXG5wcm90by5wYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG4vLyBFeHBvc2UgYGRlZmF1bHRzYC5cbnByb3RvLm9wdGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcblxuLy8gRW50ZXIgYW5kIGV4aXQgaGVscGVycy5cbnByb3RvLmV4aXRTdGFydCA9IHRvZ2dsZSgnYXRTdGFydCcsIHRydWUpXG5wcm90by5lbnRlckxpc3QgPSB0b2dnbGUoJ2luTGlzdCcsIGZhbHNlKVxucHJvdG8uZW50ZXJMaW5rID0gdG9nZ2xlKCdpbkxpbmsnLCBmYWxzZSlcbnByb3RvLmVudGVyQmxvY2sgPSB0b2dnbGUoJ2luQmxvY2snLCBmYWxzZSlcblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBwYXJhZ3JhcGg6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEEgcGFyYWdyYXBoLCBmb2xsb3dlZCBieSBhIHRoZW1hdGljIGJyZWFrLlxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgcGFyYWdyYXBoLlxucHJvdG8uaW50ZXJydXB0UGFyYWdyYXBoID0gW1xuICBbJ3RoZW1hdGljQnJlYWsnXSxcbiAgWydsaXN0J10sXG4gIFsnYXR4SGVhZGluZyddLFxuICBbJ2ZlbmNlZENvZGUnXSxcbiAgWydibG9ja3F1b3RlJ10sXG4gIFsnaHRtbCddLFxuICBbJ3NldGV4dEhlYWRpbmcnLCB7Y29tbW9ubWFyazogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl1cblxuLy8gTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBsaXN0OlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAtIE9uZVxuLy8gX19fXG4vLyBgYGBcbi8vXG4vLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnSB0aGUgbGlzdC5cbnByb3RvLmludGVycnVwdExpc3QgPSBbXG4gIFsnYXR4SGVhZGluZycsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWydmZW5jZWRDb2RlJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ3RoZW1hdGljQnJlYWsnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgYmxvY2txdW90ZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gPiBBIHBhcmFncmFwaC5cbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIGJsb2NrcXVvdGUuXG5wcm90by5pbnRlcnJ1cHRCbG9ja3F1b3RlID0gW1xuICBbJ2luZGVudGVkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnYXR4SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnc2V0ZXh0SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnaHRtbCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnbGlzdCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIEhhbmRsZXJzLlxucHJvdG8uYmxvY2tUb2tlbml6ZXJzID0ge1xuICBibGFua0xpbmU6IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxhbmstbGluZScpLFxuICBpbmRlbnRlZENvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmRlbnRlZCcpLFxuICBmZW5jZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtZmVuY2VkJyksXG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxvY2txdW90ZScpLFxuICBhdHhIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctYXR4JyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsnKSxcbiAgbGlzdDogcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0JyksXG4gIHNldGV4dEhlYWRpbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvaGVhZGluZy1zZXRleHQnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWJsb2NrJyksXG4gIGRlZmluaXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVmaW5pdGlvbicpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90b2tlbml6ZS90YWJsZScpLFxuICBwYXJhZ3JhcGg6IHJlcXVpcmUoJy4vdG9rZW5pemUvcGFyYWdyYXBoJylcbn1cblxucHJvdG8uaW5saW5lVG9rZW5pemVycyA9IHtcbiAgZXNjYXBlOiByZXF1aXJlKCcuL3Rva2VuaXplL2VzY2FwZScpLFxuICBhdXRvTGluazogcmVxdWlyZSgnLi90b2tlbml6ZS9hdXRvLWxpbmsnKSxcbiAgdXJsOiByZXF1aXJlKCcuL3Rva2VuaXplL3VybCcpLFxuICBlbWFpbDogcmVxdWlyZSgnLi90b2tlbml6ZS9lbWFpbCcpLFxuICBodG1sOiByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtaW5saW5lJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGluaycpLFxuICByZWZlcmVuY2U6IHJlcXVpcmUoJy4vdG9rZW5pemUvcmVmZXJlbmNlJyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi90b2tlbml6ZS9zdHJvbmcnKSxcbiAgZW1waGFzaXM6IHJlcXVpcmUoJy4vdG9rZW5pemUvZW1waGFzaXMnKSxcbiAgZGVsZXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVsZXRlJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmxpbmUnKSxcbiAgYnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvYnJlYWsnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi90b2tlbml6ZS90ZXh0Jylcbn1cblxuLy8gRXhwb3NlIHByZWNlZGVuY2UuXG5wcm90by5ibG9ja01ldGhvZHMgPSBrZXlzKHByb3RvLmJsb2NrVG9rZW5pemVycylcbnByb3RvLmlubGluZU1ldGhvZHMgPSBrZXlzKHByb3RvLmlubGluZVRva2VuaXplcnMpXG5cbi8vIFRva2VuaXplcnMuXG5wcm90by50b2tlbml6ZUJsb2NrID0gdG9rZW5pemVyKCdibG9jaycpXG5wcm90by50b2tlbml6ZUlubGluZSA9IHRva2VuaXplcignaW5saW5lJylcbnByb3RvLnRva2VuaXplRmFjdG9yeSA9IHRva2VuaXplclxuXG4vLyBHZXQgYWxsIGtleXMgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBrZXlcblxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJlc3VsdC5wdXNoKGtleSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZXNjYXBlcyA9IHJlcXVpcmUoJ21hcmtkb3duLWVzY2FwZXMnKVxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0T3B0aW9uc1xuXG5mdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjdXJyZW50ID0gc2VsZi5vcHRpb25zXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBgJyArIG9wdGlvbnMgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9uc2AnKVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICB2YWx1ZSA9IG9wdGlvbnNba2V5XVxuXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudFtrZXldXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGtleSAhPT0gJ2Jsb2NrcycgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHx8XG4gICAgICAoa2V5ID09PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCB2YWx1ZSBgJyArIHZhbHVlICsgJ2AgZm9yIHNldHRpbmcgYG9wdGlvbnMuJyArIGtleSArICdgJ1xuICAgICAgKVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH1cblxuICBzZWxmLm9wdGlvbnMgPSBvcHRpb25zXG4gIHNlbGYuZXNjYXBlID0gZXNjYXBlcyhvcHRpb25zKVxuXG4gIHJldHVybiBzZWxmXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS90YWcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGF1dG9MaW5rXG5hdXRvTGluay5sb2NhdG9yID0gbG9jYXRlXG5hdXRvTGluay5ub3RJbkxpbmsgPSB0cnVlXG5cbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG52YXIgYXRTaWduID0gJ0AnXG52YXIgc2xhc2ggPSAnLydcbnZhciBtYWlsdG8gPSAnbWFpbHRvOidcbnZhciBtYWlsdG9MZW5ndGggPSBtYWlsdG8ubGVuZ3RoXG5cbmZ1bmN0aW9uIGF1dG9MaW5rKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciBoYXNBdENoYXJhY3RlciA9IGZhbHNlXG4gIHZhciBsaW5rID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbm93XG4gIHZhciBjb250ZW50XG4gIHZhciB0b2tlbml6ZXJzXG4gIHZhciBleGl0XG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gbGVzc1RoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgPSBsZXNzVGhhblxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB8fFxuICAgICAgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbiB8fFxuICAgICAgY2hhcmFjdGVyID09PSBhdFNpZ24gfHxcbiAgICAgIChjaGFyYWN0ZXIgPT09ICc6JyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gc2xhc2gpXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxpbmsgKz0gcXVldWVcbiAgcXVldWUgPSAnJ1xuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgbGluayArPSBjaGFyYWN0ZXJcbiAgaW5kZXgrK1xuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGF0U2lnbikge1xuICAgIGhhc0F0Q2hhcmFjdGVyID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGlmIChjaGFyYWN0ZXIgIT09ICc6JyB8fCB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gc2xhc2gpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxpbmsgKz0gc2xhc2hcbiAgICBpbmRleCsrXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8IGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmICghcXVldWUgfHwgY2hhcmFjdGVyICE9PSBncmVhdGVyVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxpbmsgKz0gcXVldWVcbiAgY29udGVudCA9IGxpbmtcbiAgc3VidmFsdWUgKz0gbGluayArIGNoYXJhY3RlclxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbisrXG4gIG5vdy5vZmZzZXQrK1xuXG4gIGlmIChoYXNBdENoYXJhY3Rlcikge1xuICAgIGlmIChsaW5rLnNsaWNlKDAsIG1haWx0b0xlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gbWFpbHRvKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShtYWlsdG9MZW5ndGgpXG4gICAgICBub3cuY29sdW1uICs9IG1haWx0b0xlbmd0aFxuICAgICAgbm93Lm9mZnNldCArPSBtYWlsdG9MZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgbGluayA9IG1haWx0byArIGxpbmtcbiAgICB9XG4gIH1cblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gYXV0b2xpbmtzLlxuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICBjb250ZW50ID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuICBleGl0KClcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogZGVjb2RlKGxpbmssIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjb250ZW50XG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gQSBsaW5lIGNvbnRhaW5pbmcgbm8gY2hhcmFjdGVycywgb3IgYSBsaW5lIGNvbnRhaW5pbmcgb25seSBzcGFjZXMgKFUrMDAyMCkgb3Jcbi8vIHRhYnMgKFUrMDAwOSksIGlzIGNhbGxlZCBhIGJsYW5rIGxpbmUuXG4vLyBTZWUgPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNibGFuay1saW5lPi5cbnZhciByZUJsYW5rTGluZSA9IC9eWyBcXHRdKihcXG58JCkvXG5cbi8vIE5vdGUgdGhhdCB0aG91Z2ggYmxhbmsgbGluZXMgcGxheSBhIHNwZWNpYWwgcm9sZSBpbiBsaXN0cyB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgdGhlIGxpc3QgaXMgdGlnaHQgb3IgbG9vc2Vcbi8vICg8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2JsYW5rLWxpbmVzPiksIGl04oCZcyBkb25lIGJ5IHRoZSBsaXN0XG4vLyB0b2tlbml6ZXIgYW5kIHRoaXMgYmxhbmsgbGluZSB0b2tlbml6ZXIgZG9lcyBub3QgaGF2ZSB0byBiZSByZXNwb25zaWJsZSBmb3Jcbi8vIHRoYXQuXG4vLyBUaGVyZWZvcmUsIGNvbmZpZ3Mgc3VjaCBhcyBgYmxhbmtMaW5lLm5vdEluTGlzdGAgZG8gbm90IGhhdmUgdG8gYmUgc2V0IGhlcmUuXG5tb2R1bGUuZXhwb3J0cyA9IGJsYW5rTGluZVxuXG5mdW5jdGlvbiBibGFua0xpbmUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBtYXRjaFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBtYXRjaCA9IHJlQmxhbmtMaW5lLmV4ZWModmFsdWUuc2xpY2UoaW5kZXgpKVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgc3VidmFsdWUgKz0gbWF0Y2hbMF1cbiAgfVxuXG4gIGlmIChzdWJ2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBlYXQoc3VidmFsdWUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG5mdW5jdGlvbiBibG9ja3F1b3RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9mZnNldHMgPSBzZWxmLm9mZnNldFxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnJ1cHRvcnMgPSBzZWxmLmludGVycnVwdEJsb2NrcXVvdGVcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgY3VycmVudExpbmUgPSBub3cubGluZVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgY29udGVudHMgPSBbXVxuICB2YXIgaW5kZW50cyA9IFtdXG4gIHZhciBhZGRcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciByZXN0XG4gIHZhciBuZXh0SW5kZXhcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGxpbmVcbiAgdmFyIHN0YXJ0SW5kZXhcbiAgdmFyIHByZWZpeGVkXG4gIHZhciBleGl0XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGluZGV4ID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgIHByZWZpeGVkID0gZmFsc2VcblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0SW5kZXggPSBsZW5ndGhcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBncmVhdGVyVGhhbikge1xuICAgICAgaW5kZXgrK1xuICAgICAgcHJlZml4ZWQgPSB0cnVlXG5cbiAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgIH1cblxuICAgIGNvbnRlbnQgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaWYgKCFwcmVmaXhlZCAmJiAhdHJpbShjb250ZW50KSkge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmICghcHJlZml4ZWQpIHtcbiAgICAgIHJlc3QgPSB2YWx1ZS5zbGljZShpbmRleClcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGZvbGxvd2luZyBjb2RlIGNvbnRhaW5zIGEgcG9zc2libGUgYmxvY2suXG4gICAgICBpZiAoaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgcmVzdCwgdHJ1ZV0pKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gY29udGVudCA6IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleClcblxuICAgIGluZGVudHMucHVzaChpbmRleCAtIHN0YXJ0SW5kZXgpXG4gICAgdmFsdWVzLnB1c2gobGluZSlcbiAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpXG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDFcbiAgfVxuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gaW5kZW50cy5sZW5ndGhcbiAgYWRkID0gZWF0KHZhbHVlcy5qb2luKGxpbmVGZWVkKSlcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbY3VycmVudExpbmVdID0gKG9mZnNldHNbY3VycmVudExpbmVdIHx8IDApICsgaW5kZW50c1tpbmRleF1cbiAgICBjdXJyZW50TGluZSsrXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckJsb2NrKClcbiAgY29udGVudHMgPSBzZWxmLnRva2VuaXplQmxvY2soY29udGVudHMuam9pbihsaW5lRmVlZCksIG5vdylcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGFkZCh7dHlwZTogJ2Jsb2NrcXVvdGUnLCBjaGlsZHJlbjogY29udGVudHN9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvYnJlYWsnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVha1xuaGFyZEJyZWFrLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIG1pbkJyZWFrTGVuZ3RoID0gMlxuXG5mdW5jdGlvbiBoYXJkQnJlYWsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGlmIChpbmRleCA8IG1pbkJyZWFrTGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuXG4gICAgICByZXR1cm4gZWF0KHF1ZXVlKSh7dHlwZTogJ2JyZWFrJ30pXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmZW5jZWRDb2RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHRpbGRlID0gJ34nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxudmFyIG1pbkZlbmNlQ291bnQgPSAzXG52YXIgdGFiU2l6ZSA9IDRcblxuZnVuY3Rpb24gZmVuY2VkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGZlbmNlQ291bnRcbiAgdmFyIG1hcmtlclxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBmbGFnXG4gIHZhciBsYW5nXG4gIHZhciBtZXRhXG4gIHZhciBxdWV1ZVxuICB2YXIgY29udGVudFxuICB2YXIgZXhkZW50ZWRDb250ZW50XG4gIHZhciBjbG9zaW5nXG4gIHZhciBleGRlbnRlZENsb3NpbmdcbiAgdmFyIGluZGVudFxuICB2YXIgbm93XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGluZGVudCA9IGluZGV4XG5cbiAgLy8gRWF0IHRoZSBmZW5jZS5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IHRpbGRlICYmIGNoYXJhY3RlciAhPT0gZ3JhdmVBY2NlbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIGZlbmNlQ291bnQgPSAxXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBmZW5jZUNvdW50KytcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoZmVuY2VDb3VudCA8IG1pbkZlbmNlQ291bnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVhdCBzcGFjaW5nIGJlZm9yZSBmbGFnLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgZmxhZy5cbiAgZmxhZyA9ICcnXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkIHx8XG4gICAgICAobWFya2VyID09PSBncmF2ZUFjY2VudCAmJiBjaGFyYWN0ZXIgPT09IG1hcmtlcilcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcblxuICBzdWJ2YWx1ZSArPSBmbGFnXG4gIGZsYWcgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShmbGFnKSwgbm93KVxuXG4gIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gIH1cblxuICBxdWV1ZSA9ICcnXG4gIGNsb3NpbmcgPSAnJ1xuICBleGRlbnRlZENsb3NpbmcgPSAnJ1xuICBjb250ZW50ID0gJydcbiAgZXhkZW50ZWRDb250ZW50ID0gJydcbiAgdmFyIHNraXAgPSB0cnVlXG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBjb250ZW50ICs9IGNsb3NpbmdcbiAgICBleGRlbnRlZENvbnRlbnQgKz0gZXhkZW50ZWRDbG9zaW5nXG4gICAgY2xvc2luZyA9ICcnXG4gICAgZXhkZW50ZWRDbG9zaW5nID0gJydcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBUaGUgZmlyc3QgbGluZSBmZWVkIGlzIGlnbm9yZWQuIE90aGVycyBhcmVu4oCZdC5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICBza2lwID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG4gICAgaW5kZXgrK1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNsb3NpbmcgKz0gcXVldWVcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWUuc2xpY2UoaW5kZW50KVxuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+PSB0YWJTaXplKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZVxuICAgIGV4ZGVudGVkQ2xvc2luZyArPSBxdWV1ZVxuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA8IGZlbmNlQ291bnQpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgY2xvc2luZ1xuXG4gIC8vIEdldCBsYW5nIGFuZCBtZXRhIGZyb20gdGhlIGZsYWcuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gZmxhZy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IGZsYWcuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIGlmICghbGFuZykge1xuICAgICAgICBsYW5nID0gZmxhZy5zbGljZSgwLCBpbmRleClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhbmcpIHtcbiAgICAgIG1ldGEgPSBmbGFnLnNsaWNlKGluZGV4KVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2NvZGUnLFxuICAgIGxhbmc6IGxhbmcgfHwgZmxhZyB8fCBudWxsLFxuICAgIG1ldGE6IG1ldGEgfHwgbnVsbCxcbiAgICB2YWx1ZTogZXhkZW50ZWRDb250ZW50XG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRlZENvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciB0YWJTaXplID0gNFxudmFyIGNvZGVJbmRlbnQgPSByZXBlYXQoc3BhY2UsIHRhYlNpemUpXG5cbmZ1bmN0aW9uIGluZGVudGVkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudCA9ICcnXG4gIHZhciBzdWJ2YWx1ZVF1ZXVlID0gJydcbiAgdmFyIGNvbnRlbnRRdWV1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGJsYW5rUXVldWVcbiAgdmFyIGluZGVudFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGluZGVudCkge1xuICAgICAgaW5kZW50ID0gZmFsc2VcblxuICAgICAgc3VidmFsdWUgKz0gc3VidmFsdWVRdWV1ZVxuICAgICAgY29udGVudCArPSBjb250ZW50UXVldWVcbiAgICAgIHN1YnZhbHVlUXVldWUgPSAnJ1xuICAgICAgY29udGVudFF1ZXVlID0gJydcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICBjb250ZW50UXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgICAgICBzdWJ2YWx1ZVF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBzcGFjZSAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGNoYXJhY3RlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMikgPT09IGNoYXJhY3RlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMykgPT09IGNoYXJhY3RlclxuICAgICkge1xuICAgICAgc3VidmFsdWVRdWV1ZSArPSBjb2RlSW5kZW50XG4gICAgICBpbmRleCArPSAzXG4gICAgICBpbmRlbnQgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgc3VidmFsdWVRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGVudCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgYmxhbmtRdWV1ZSA9ICcnXG5cbiAgICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIGJsYW5rUXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGJsYW5rUXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGNvbnRlbnRRdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGVudCkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgbGFuZzogbnVsbCxcbiAgICAgIG1ldGE6IG51bGwsXG4gICAgICB2YWx1ZTogdHJpbShjb250ZW50KVxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2NvZGUtaW5saW5lJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5pbmxpbmVDb2RlLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxpbmVGZWVkID0gMTAgLy8gICdcXG4nXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBncmF2ZUFjY2VudCA9IDk2IC8vICAnYCdcblxuZnVuY3Rpb24gaW5saW5lQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBvcGVuaW5nRmVuY2VFbmRcbiAgdmFyIGNsb3NpbmdGZW5jZVN0YXJ0XG4gIHZhciBjbG9zaW5nRmVuY2VFbmRcbiAgdmFyIGNvZGVcbiAgdmFyIG5leHRcbiAgdmFyIGZvdW5kXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpICE9PSBncmF2ZUFjY2VudCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IGxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgb3BlbmluZ0ZlbmNlRW5kID0gaW5kZXhcbiAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IG5leHRcbiAgICBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICBpZiAoY29kZSA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIGlmIChjbG9zaW5nRmVuY2VTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0ID0gaW5kZXhcbiAgICAgIH1cblxuICAgICAgY2xvc2luZ0ZlbmNlRW5kID0gaW5kZXggKyAxXG5cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dCAhPT0gZ3JhdmVBY2NlbnQgJiZcbiAgICAgICAgY2xvc2luZ0ZlbmNlRW5kIC0gY2xvc2luZ0ZlbmNlU3RhcnQgPT09IG9wZW5pbmdGZW5jZUVuZFxuICAgICAgKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2xvc2luZ0ZlbmNlU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xvc2luZ0ZlbmNlU3RhcnQgPSB1bmRlZmluZWRcbiAgICAgIGNsb3NpbmdGZW5jZUVuZCA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgYW5kIGZpbmFsIHNwYWNlIChvciBsaW5lIGZlZWQpLCBpZmYgdGhleSBleGlzdCBhbmQgdGhlcmVcbiAgLy8gYXJlIG5vbi1zcGFjZSBjaGFyYWN0ZXJzIGluIHRoZSBjb250ZW50LlxuICBpbmRleCA9IG9wZW5pbmdGZW5jZUVuZFxuICBsZW5ndGggPSBjbG9zaW5nRmVuY2VTdGFydFxuICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcbiAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQobGVuZ3RoIC0gMSlcbiAgZm91bmQgPSBmYWxzZVxuXG4gIGlmIChcbiAgICBsZW5ndGggLSBpbmRleCA+IDIgJiZcbiAgICAoY29kZSA9PT0gc3BhY2UgfHwgY29kZSA9PT0gbGluZUZlZWQpICYmXG4gICAgKG5leHQgPT09IHNwYWNlIHx8IG5leHQgPT09IGxpbmVGZWVkKVxuICApIHtcbiAgICBpbmRleCsrXG4gICAgbGVuZ3RoLS1cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjb2RlICE9PSBzcGFjZSAmJiBjb2RlICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChmb3VuZCA9PT0gdHJ1ZSkge1xuICAgICAgb3BlbmluZ0ZlbmNlRW5kKytcbiAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0LS1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWF0KHZhbHVlLnNsaWNlKDAsIGNsb3NpbmdGZW5jZUVuZCkpKHtcbiAgICB0eXBlOiAnaW5saW5lQ29kZScsXG4gICAgdmFsdWU6IHZhbHVlLnNsaWNlKG9wZW5pbmdGZW5jZUVuZCwgY2xvc2luZ0ZlbmNlU3RhcnQpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb25cblxudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxuZnVuY3Rpb24gZGVmaW5pdGlvbihlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBiZWZvcmVVUkxcbiAgdmFyIGJlZm9yZVRpdGxlXG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciB0ZXN0XG4gIHZhciBpZGVudGlmaWVyXG4gIHZhciB1cmxcbiAgdmFyIHRpdGxlXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBicmVha1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChcbiAgICAhcXVldWUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSByaWdodFNxdWFyZUJyYWNrZXQgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gY29sb25cbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZGVudGlmaWVyID0gcXVldWVcbiAgc3VidmFsdWUgKz0gcXVldWUgKyByaWdodFNxdWFyZUJyYWNrZXQgKyBjb2xvblxuICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHF1ZXVlID0gJydcbiAgYmVmb3JlVVJMID0gc3VidmFsdWVcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZXNzVGhhbikge1xuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIWlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyLmRlbGltaXRlcikge1xuICAgICAgc3VidmFsdWUgKz0gbGVzc1RoYW4gKyBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXggLT0gcXVldWUubGVuZ3RoICsgMVxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHVybCA9IHF1ZXVlXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdGVzdCA9IG51bGxcblxuICBpZiAoY2hhcmFjdGVyID09PSBxdW90YXRpb25NYXJrKSB7XG4gICAgdGVzdCA9IHF1b3RhdGlvbk1hcmtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUpIHtcbiAgICB0ZXN0ID0gYXBvc3Ryb3BoZVxuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgdGVzdCA9IHJpZ2h0UGFyZW50aGVzaXNcbiAgfVxuXG4gIGlmICghdGVzdCkge1xuICAgIHF1ZXVlID0gJydcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICB9IGVsc2UgaWYgKHF1ZXVlKSB7XG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0ZXN0KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkIHx8IGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gbGluZUZlZWRcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGVzdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYmVmb3JlVGl0bGUgPSBzdWJ2YWx1ZVxuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICAgIHRpdGxlID0gcXVldWVcbiAgICBxdWV1ZSA9ICcnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgYmVmb3JlVVJMID0gZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZFxuICAgIHVybCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHVybCksIGJlZm9yZVVSTCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSlcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmRcbiAgICAgIHRpdGxlID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodGl0bGUpLCBiZWZvcmVUaXRsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgICB0eXBlOiAnZGVmaW5pdGlvbicsXG4gICAgICBpZGVudGlmaWVyOiBub3JtYWxpemUoaWRlbnRpZmllciksXG4gICAgICBsYWJlbDogaWRlbnRpZmllcixcbiAgICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGNhbiBiZSBpbnNpZGUgYW4gZW5jbG9zZWQgVVJJLlxuZnVuY3Rpb24gaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIChcbiAgICBjaGFyYWN0ZXIgIT09IGdyZWF0ZXJUaGFuICYmXG4gICAgY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCAmJlxuICAgIGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0XG4gIClcbn1cblxuaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIgPSBncmVhdGVyVGhhblxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIHVuY2xvc2VkIFVSSS5cbmZ1bmN0aW9uIGlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiAoXG4gICAgY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCAmJlxuICAgIGNoYXJhY3RlciAhPT0gcmlnaHRTcXVhcmVCcmFja2V0ICYmXG4gICAgIXdoaXRlc3BhY2UoY2hhcmFjdGVyKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2RlbGV0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWtldGhyb3VnaFxuc3RyaWtldGhyb3VnaC5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciB0aWxkZSA9ICd+J1xudmFyIGZlbmNlID0gJ35+J1xuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNoYXJhY3RlciA9ICcnXG4gIHZhciBwcmV2aW91cyA9ICcnXG4gIHZhciBwcmVjZWRpbmcgPSAnJ1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuICB2YXIgbm93XG5cbiAgaWYgKFxuICAgICFzZWxmLm9wdGlvbnMuZ2ZtIHx8XG4gICAgdmFsdWUuY2hhckF0KDApICE9PSB0aWxkZSB8fFxuICAgIHZhbHVlLmNoYXJBdCgxKSAhPT0gdGlsZGUgfHxcbiAgICB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdCgyKSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCA9IDFcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IDJcbiAgbm93Lm9mZnNldCArPSAyXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IHRpbGRlICYmXG4gICAgICBwcmV2aW91cyA9PT0gdGlsZGUgJiZcbiAgICAgICghcHJlY2VkaW5nIHx8ICF3aGl0ZXNwYWNlKHByZWNlZGluZykpXG4gICAgKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoZmVuY2UgKyBzdWJ2YWx1ZSArIGZlbmNlKSh7XG4gICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShzdWJ2YWx1ZSwgbm93KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBwcmV2aW91c1xuICAgIHByZWNlZGluZyA9IHByZXZpb3VzXG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VtYWlsJylcblxubW9kdWxlLmV4cG9ydHMgPSBlbWFpbFxuZW1haWwubG9jYXRvciA9IGxvY2F0ZVxuZW1haWwubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgcGx1c1NpZ24gPSA0MyAvLyAnKydcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgYXRTaWduID0gNjQgLy8gJ0AnXG52YXIgdW5kZXJzY29yZSA9IDk1IC8vICdfJ1xuXG5mdW5jdGlvbiBlbWFpbChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgZmlyc3REb3QgPSAtMVxuICB2YXIgY29kZVxuICB2YXIgY29udGVudFxuICB2YXIgY2hpbGRyZW5cbiAgdmFyIGV4aXRcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgd2hpbGUgKFxuICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICBjb2RlID09PSBwbHVzU2lnbiB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSBkb3QgfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KCsraW5kZXgpXG4gIH1cblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChjb2RlICE9PSBhdFNpZ24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGRlY2ltYWwoY29kZSkgfHxcbiAgICAgIGFscGhhYmV0aWNhbChjb2RlKSB8fFxuICAgICAgY29kZSA9PT0gZGFzaCB8fFxuICAgICAgY29kZSA9PT0gZG90IHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICAgKSB7XG4gICAgICBpbmRleCsrXG5cbiAgICAgIGlmIChmaXJzdERvdCA9PT0gLTEgJiYgY29kZSA9PT0gZG90KSB7XG4gICAgICAgIGZpcnN0RG90ID0gaW5kZXhcbiAgICAgIH1cblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBicmVha1xuICB9XG5cbiAgaWYgKFxuICAgIGZpcnN0RG90ID09PSAtMSB8fFxuICAgIGZpcnN0RG90ID09PSBpbmRleCB8fFxuICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgIGluZGV4LS1cbiAgfVxuXG4gIGNvbnRlbnQgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcblxuICAvLyBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gdXJsLlxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuICBjaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKVxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzXG5cbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChjb250ZW50KSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogJ21haWx0bzonICsgZGVjb2RlKGNvbnRlbnQsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgd29yZCA9IHJlcXVpcmUoJ2lzLXdvcmQtY2hhcmFjdGVyJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lbXBoYXNpcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcbmVtcGhhc2lzLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG5mdW5jdGlvbiBlbXBoYXNpcyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgdmFyIG5vd1xuICB2YXIgcGVkYW50aWNcbiAgdmFyIG1hcmtlclxuICB2YXIgcXVldWVcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBsZW5ndGhcbiAgdmFyIHByZXZpb3VzXG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiYgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICBzdWJ2YWx1ZSA9IGNoYXJhY3RlclxuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4KytcbiAgcXVldWUgPSAnJ1xuICBjaGFyYWN0ZXIgPSAnJ1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlciAmJiAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXZpb3VzKSkpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgaWYgKCF0cmltKHF1ZXVlKSB8fCBwcmV2aW91cyA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBlZGFudGljICYmIG1hcmtlciA9PT0gdW5kZXJzY29yZSAmJiB3b3JkKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBxdWV1ZSArPSBtYXJrZXJcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdyA9IGVhdC5ub3coKVxuICAgICAgICBub3cuY29sdW1uKytcbiAgICAgICAgbm93Lm9mZnNldCsrXG5cbiAgICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlICsgbWFya2VyKSh7XG4gICAgICAgICAgdHlwZTogJ2VtcGhhc2lzJyxcbiAgICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShxdWV1ZSwgbm93KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBtYXJrZXJcbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZXNjYXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVcbmVzY2FwZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbmZ1bmN0aW9uIGVzY2FwZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG5vZGVcblxuICBpZiAodmFsdWUuY2hhckF0KDApID09PSBiYWNrc2xhc2gpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSlcblxuICAgIGlmIChzZWxmLmVzY2FwZS5pbmRleE9mKGNoYXJhY3RlcikgIT09IC0xKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIG5vZGUgPSB7dHlwZTogJ2JyZWFrJ31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogY2hhcmFjdGVyfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KGJhY2tzbGFzaCArIGNoYXJhY3Rlcikobm9kZSlcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0eEhlYWRpbmdcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbnVtYmVyU2lnbiA9ICcjJ1xuXG52YXIgbWF4RmVuY2VDb3VudCA9IDZcblxuZnVuY3Rpb24gYXR4SGVhZGluZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbm93ID0gZWF0Lm5vdygpXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50ID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcXVldWVcbiAgdmFyIGRlcHRoXG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEVhdCBoYXNoZXMuXG4gIGRlcHRoID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDw9IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG51bWJlclNpZ24pIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgZGVwdGgrK1xuICB9XG5cbiAgaWYgKGRlcHRoID4gbWF4RmVuY2VDb3VudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFkZXB0aCB8fCAoIXBlZGFudGljICYmIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBudW1iZXJTaWduKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuXG4gIC8vIEVhdCBpbnRlcm1lZGlhdGUgd2hpdGUtc3BhY2UuXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIG5vdCBpbiBwZWRhbnRpYyBtb2RlIHdpdGhvdXQgc3BhY2luZy5cbiAgaWYgKCFwZWRhbnRpYyAmJiBxdWV1ZS5sZW5ndGggPT09IDAgJiYgY2hhcmFjdGVyICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIHN1YnZhbHVlICs9IHF1ZXVlXG4gIHF1ZXVlID0gJydcbiAgY29udGVudCA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gbnVtYmVyU2lnbikge1xuICAgICAgY29udGVudCArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICAvLyBgI2Agd2l0aG91dCBhIHF1ZXVlIGlzIHBhcnQgb2YgdGhlIGNvbnRlbnQuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjb250ZW50ICYmICFxdWV1ZSAmJiBjaGFyYWN0ZXIgPT09IG51bWJlclNpZ24pIHtcbiAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IG51bWJlclNpZ24pIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgc3VidmFsdWUgKz0gY29udGVudCArIHF1ZXVlXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2V0ZXh0SGVhZGluZ1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBlcXVhbHNUbyA9ICc9J1xudmFyIGRhc2ggPSAnLSdcblxudmFyIG1heEluZGVudCA9IDNcblxudmFyIGVxdWFsc1RvRGVwdGggPSAxXG52YXIgZGFzaERlcHRoID0gMlxuXG5mdW5jdGlvbiBzZXRleHRIZWFkaW5nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjb250ZW50XG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIGRlcHRoXG5cbiAgLy8gRWF0IGluaXRpYWwgaW5kZW50YXRpb24uXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgfHwgaW5kZXggPj0gbWF4SW5kZW50KSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgLy8gRWF0IGNvbnRlbnQuXG4gIGNvbnRlbnQgPSAnJ1xuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSB8fCBjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgcXVldWVcblxuICAvLyBFbnN1cmUgdGhlIGNvbnRlbnQgaXMgZm9sbG93ZWQgYnkgYSBuZXdsaW5lIGFuZCBhIHZhbGlkIG1hcmtlci5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIG1hcmtlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkIHx8IChtYXJrZXIgIT09IGVxdWFsc1RvICYmIG1hcmtlciAhPT0gZGFzaCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuXG4gIC8vIEVhdCBTZXRleHQtbGluZS5cbiAgcXVldWUgPSBtYXJrZXJcbiAgZGVwdGggPSBtYXJrZXIgPT09IGVxdWFsc1RvID8gZXF1YWxzVG9EZXB0aCA6IGRhc2hEZXB0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG9wZW5DbG9zZVRhZyA9IHJlcXVpcmUoJy4uL3V0aWwvaHRtbCcpLm9wZW5DbG9zZVRhZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrSHRtbFxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBsZXNzVGhhbiA9ICc8J1xuXG52YXIgcmF3T3BlbkV4cHJlc3Npb24gPSAvXjwoc2NyaXB0fHByZXxzdHlsZSkoPz0oXFxzfD58JCkpL2lcbnZhciByYXdDbG9zZUV4cHJlc3Npb24gPSAvPFxcLyhzY3JpcHR8cHJlfHN0eWxlKT4vaVxudmFyIGNvbW1lbnRPcGVuRXhwcmVzc2lvbiA9IC9ePCEtLS9cbnZhciBjb21tZW50Q2xvc2VFeHByZXNzaW9uID0gLy0tPi9cbnZhciBpbnN0cnVjdGlvbk9wZW5FeHByZXNzaW9uID0gL148XFw/L1xudmFyIGluc3RydWN0aW9uQ2xvc2VFeHByZXNzaW9uID0gL1xcPz4vXG52YXIgZGlyZWN0aXZlT3BlbkV4cHJlc3Npb24gPSAvXjwhW0EtWmEtel0vXG52YXIgZGlyZWN0aXZlQ2xvc2VFeHByZXNzaW9uID0gLz4vXG52YXIgY2RhdGFPcGVuRXhwcmVzc2lvbiA9IC9ePCFcXFtDREFUQVxcWy9cbnZhciBjZGF0YUNsb3NlRXhwcmVzc2lvbiA9IC9dXT4vXG52YXIgZWxlbWVudENsb3NlRXhwcmVzc2lvbiA9IC9eJC9cbnZhciBvdGhlckVsZW1lbnRPcGVuRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAob3BlbkNsb3NlVGFnLnNvdXJjZSArICdcXFxccyokJylcblxuZnVuY3Rpb24gYmxvY2tIdG1sKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGJsb2NrcyA9IHNlbGYub3B0aW9ucy5ibG9ja3Muam9pbignfCcpXG4gIHZhciBlbGVtZW50T3BlbkV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKFxuICAgICdePC8/KCcgKyBibG9ja3MgKyAnKSg/PShcXFxcc3wvPz58JCkpJyxcbiAgICAnaSdcbiAgKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIG5leHRcbiAgdmFyIGxpbmVcbiAgdmFyIG9mZnNldFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBjb3VudFxuICB2YXIgc2VxdWVuY2VcbiAgdmFyIHN1YnZhbHVlXG5cbiAgdmFyIHNlcXVlbmNlcyA9IFtcbiAgICBbcmF3T3BlbkV4cHJlc3Npb24sIHJhd0Nsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2NvbW1lbnRPcGVuRXhwcmVzc2lvbiwgY29tbWVudENsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2luc3RydWN0aW9uT3BlbkV4cHJlc3Npb24sIGluc3RydWN0aW9uQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbZGlyZWN0aXZlT3BlbkV4cHJlc3Npb24sIGRpcmVjdGl2ZUNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2NkYXRhT3BlbkV4cHJlc3Npb24sIGNkYXRhQ2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbZWxlbWVudE9wZW5FeHByZXNzaW9uLCBlbGVtZW50Q2xvc2VFeHByZXNzaW9uLCB0cnVlXSxcbiAgICBbb3RoZXJFbGVtZW50T3BlbkV4cHJlc3Npb24sIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24sIGZhbHNlXVxuICBdXG5cbiAgLy8gRWF0IGluaXRpYWwgc3BhY2luZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGxlc3NUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBuZXh0ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICBuZXh0ID0gbmV4dCA9PT0gLTEgPyBsZW5ndGggOiBuZXh0XG4gIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dClcbiAgb2Zmc2V0ID0gLTFcbiAgY291bnQgPSBzZXF1ZW5jZXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsrb2Zmc2V0IDwgY291bnQpIHtcbiAgICBpZiAoc2VxdWVuY2VzW29mZnNldF1bMF0udGVzdChsaW5lKSkge1xuICAgICAgc2VxdWVuY2UgPSBzZXF1ZW5jZXNbb2Zmc2V0XVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNlcXVlbmNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHNlcXVlbmNlWzJdXG4gIH1cblxuICBpbmRleCA9IG5leHRcblxuICBpZiAoIXNlcXVlbmNlWzFdLnRlc3QobGluZSkpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIG5leHQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gICAgICBuZXh0ID0gbmV4dCA9PT0gLTEgPyBsZW5ndGggOiBuZXh0XG4gICAgICBsaW5lID0gdmFsdWUuc2xpY2UoaW5kZXggKyAxLCBuZXh0KVxuXG4gICAgICBpZiAoc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgICAgICBpZiAobGluZSkge1xuICAgICAgICAgIGluZGV4ID0gbmV4dFxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSBuZXh0XG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ2h0bWwnLCB2YWx1ZTogc3VidmFsdWV9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS90YWcnKVxudmFyIHRhZyA9IHJlcXVpcmUoJy4uL3V0aWwvaHRtbCcpLnRhZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUhUTUxcbmlubGluZUhUTUwubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBxdWVzdGlvbk1hcmsgPSAnPydcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcbnZhciBzbGFzaCA9ICcvJ1xuXG52YXIgaHRtbExpbmtPcGVuRXhwcmVzc2lvbiA9IC9ePGEgL2lcbnZhciBodG1sTGlua0Nsb3NlRXhwcmVzc2lvbiA9IC9ePFxcL2E+L2lcblxuZnVuY3Rpb24gaW5saW5lSFRNTChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgc3VidmFsdWVcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBsZXNzVGhhbiB8fCBsZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSlcblxuICBpZiAoXG4gICAgIWFscGhhYmV0aWNhbChjaGFyYWN0ZXIpICYmXG4gICAgY2hhcmFjdGVyICE9PSBxdWVzdGlvbk1hcmsgJiZcbiAgICBjaGFyYWN0ZXIgIT09IGV4Y2xhbWF0aW9uTWFyayAmJlxuICAgIGNoYXJhY3RlciAhPT0gc2xhc2hcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLm1hdGNoKHRhZylcblxuICBpZiAoIXN1YnZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBub3QgdXNlZCB5ZXQuICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3VidmFsdWUgPSBzdWJ2YWx1ZVswXVxuXG4gIGlmICghc2VsZi5pbkxpbmsgJiYgaHRtbExpbmtPcGVuRXhwcmVzc2lvbi50ZXN0KHN1YnZhbHVlKSkge1xuICAgIHNlbGYuaW5MaW5rID0gdHJ1ZVxuICB9IGVsc2UgaWYgKHNlbGYuaW5MaW5rICYmIGh0bWxMaW5rQ2xvc2VFeHByZXNzaW9uLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xubGluay5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxuZnVuY3Rpb24gbGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgwKVxuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgY2xvc2VkXG4gIHZhciBjb3VudFxuICB2YXIgb3BlbmluZ1xuICB2YXIgYmVmb3JlVVJMXG4gIHZhciBiZWZvcmVUaXRsZVxuICB2YXIgc3VicXVldWVcbiAgdmFyIGhhc01hcmtlclxuICB2YXIgaXNJbWFnZVxuICB2YXIgY29udGVudFxuICB2YXIgbWFya2VyXG4gIHZhciBsZW5ndGhcbiAgdmFyIHRpdGxlXG4gIHZhciBkZXB0aFxuICB2YXIgcXVldWVcbiAgdmFyIHVybFxuICB2YXIgbm93XG4gIHZhciBleGl0XG4gIHZhciBub2RlXG5cbiAgLy8gRGV0ZWN0IHdoZXRoZXIgdGhpcyBpcyBhbiBpbWFnZS5cbiAgaWYgKGNoYXJhY3RlciA9PT0gZXhjbGFtYXRpb25NYXJrKSB7XG4gICAgaXNJbWFnZSA9IHRydWVcbiAgICBzdWJ2YWx1ZSA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgLy8gRWF0IHRoZSBvcGVuaW5nLlxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIHRoaXMgaXMgYSBsaW5rIGFuZCB3ZeKAmXJlIGFscmVhZHkgaW5zaWRlIGEgbGluay5cbiAgaWYgKCFpc0ltYWdlICYmIHNlbGYuaW5MaW5rKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuICBpbmRleCsrXG5cbiAgLy8gRWF0IHRoZSBjb250ZW50LlxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgbm93ID0gZWF0Lm5vdygpXG4gIGRlcHRoID0gMFxuXG4gIG5vdy5jb2x1bW4gKz0gaW5kZXhcbiAgbm93Lm9mZnNldCArPSBpbmRleFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBzdWJxdWV1ZSA9IGNoYXJhY3RlclxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIC8vIElubGluZS1jb2RlIGluIGxpbmsgY29udGVudC5cbiAgICAgIGNvdW50ID0gMVxuXG4gICAgICB3aGlsZSAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvdW50KytcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSBjb3VudFxuICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSBvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSAwXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgLy8gQWxsb3cgYnJhY2tldHMgdG8gYmUgZXNjYXBlZC5cbiAgICAgIGluZGV4KytcbiAgICAgIHN1YnF1ZXVlICs9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICB9IGVsc2UgaWYgKCghb3BlbmluZyB8fCBnZm0pICYmIGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIC8vIEluIEdGTSBtb2RlLCBicmFja2V0cyBpbiBjb2RlIHN0aWxsIGNvdW50LiAgSW4gYWxsIG90aGVyIG1vZGVzLFxuICAgICAgLy8gdGhleSBkb27igJl0LlxuICAgICAgZGVwdGgrK1xuICAgIH0gZWxzZSBpZiAoKCFvcGVuaW5nIHx8IGdmbSkgJiYgY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGlmIChkZXB0aCkge1xuICAgICAgICBkZXB0aC0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gbGVmdFBhcmVudGhlc2lzXG4gICAgICAgIGNsb3NlZCA9IHRydWVcbiAgICAgICAgaW5kZXgrK1xuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWUgKz0gc3VicXVldWVcbiAgICBzdWJxdWV1ZSA9ICcnXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IHRoZSBjb250ZW50IGNsb3NpbmcuXG4gIGlmICghY2xvc2VkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb250ZW50ID0gcXVldWVcbiAgc3VidmFsdWUgKz0gcXVldWUgKyBzdWJxdWV1ZVxuICBpbmRleCsrXG5cbiAgLy8gRWF0IHdoaXRlLXNwYWNlLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICAvLyBFYXQgdGhlIFVSTC5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBxdWV1ZSA9ICcnXG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVzc1RoYW4pIHtcbiAgICBpbmRleCsrXG4gICAgYmVmb3JlVVJMICs9IGxlc3NUaGFuXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBsZXNzVGhhbiArIHF1ZXVlICsgZ3JlYXRlclRoYW5cbiAgICB1cmwgPSBxdWV1ZVxuICAgIGluZGV4KytcbiAgfSBlbHNlIHtcbiAgICBjaGFyYWN0ZXIgPSBudWxsXG4gICAgc3VicXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgc3VicXVldWUgJiZcbiAgICAgICAgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyayB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSB8fFxuICAgICAgICAgIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSlcbiAgICAgICkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGlmICghcGVkYW50aWMpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBkZXB0aCsrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlcHRoLS1cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IHN1YnF1ZXVlXG4gICAgICAgIHN1YnF1ZXVlID0gJydcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICB1cmwgPSBxdWV1ZVxuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoXG4gIH1cblxuICAvLyBFYXQgd2hpdGUtc3BhY2UuXG4gIHF1ZXVlID0gJydcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHN1YnZhbHVlICs9IHF1ZXVlXG5cbiAgLy8gRWF0IHRoZSB0aXRsZS5cbiAgaWYgKFxuICAgIHF1ZXVlICYmXG4gICAgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyayB8fFxuICAgICAgY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlIHx8XG4gICAgICAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykpXG4gICkge1xuICAgIGluZGV4KytcbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBxdWV1ZSA9ICcnXG4gICAgbWFya2VyID0gY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMgPyByaWdodFBhcmVudGhlc2lzIDogY2hhcmFjdGVyXG4gICAgYmVmb3JlVGl0bGUgPSBzdWJ2YWx1ZVxuXG4gICAgLy8gSW4gY29tbW9ubWFyay1tb2RlLCB0aGluZ3MgYXJlIHByZXR0eSBlYXN5OiB0aGUgbWFya2VyIGNhbm5vdCBvY2N1clxuICAgIC8vIGluc2lkZSB0aGUgdGl0bGUuICBOb24tY29tbW9ubWFyayBkb2VzLCBob3dldmVyLCBzdXBwb3J0IG5lc3RlZFxuICAgIC8vIGRlbGltaXRlcnMuXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH1cblxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRpdGxlID0gcXVldWVcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VicXVldWUgPSAnJ1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGlmIChoYXNNYXJrZXIpIHtcbiAgICAgICAgICAgIHF1ZXVlICs9IG1hcmtlciArIHN1YnF1ZXVlXG4gICAgICAgICAgICBzdWJxdWV1ZSA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFzTWFya2VyID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNNYXJrZXIpIHtcbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIG1hcmtlciArIHN1YnF1ZXVlXG4gICAgICAgICAgdGl0bGUgPSBxdWV1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyICsgc3VicXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgICAgICBzdWJxdWV1ZSA9ICcnXG4gICAgICAgICAgaGFzTWFya2VyID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YnZhbHVlICs9IHJpZ2h0UGFyZW50aGVzaXNcblxuICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBlYXQoYmVmb3JlVVJMKS50ZXN0KCkuZW5kLCB7XG4gICAgbm9uVGVybWluYXRlZDogZmFsc2VcbiAgfSlcblxuICBpZiAodGl0bGUpIHtcbiAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZFxuICAgIHRpdGxlID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodGl0bGUpLCBiZWZvcmVUaXRsZSlcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogaXNJbWFnZSA/ICdpbWFnZScgOiAnbGluaycsXG4gICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgdXJsOiB1cmxcbiAgfVxuXG4gIGlmIChpc0ltYWdlKSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsXG4gIH0gZWxzZSB7XG4gICAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gICAgZXhpdCgpXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKShub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvZ2V0LWluZGVudGF0aW9uJylcbnZhciByZW1vdmVJbmRlbnQgPSByZXF1aXJlKCcuLi91dGlsL3JlbW92ZS1pbmRlbnRhdGlvbicpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIHBsdXNTaWduID0gJysnXG52YXIgZGFzaCA9ICctJ1xudmFyIGRvdCA9ICcuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxvd2VyY2FzZVggPSAneCdcblxudmFyIHRhYlNpemUgPSA0XG52YXIgbG9vc2VMaXN0SXRlbUV4cHJlc3Npb24gPSAvXFxuXFxuKD8hXFxzKiQpL1xudmFyIHRhc2tJdGVtRXhwcmVzc2lvbiA9IC9eXFxbKFsgWFxcdHhdKV1bIFxcdF0vXG52YXIgYnVsbGV0RXhwcmVzc2lvbiA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKSggezEsNH0oPyEgKXwgfFxcdHwkfCg/PVxcbikpKFteXFxuXSopL1xudmFyIHBlZGFudGljQnVsbGV0RXhwcmVzc2lvbiA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKShbIFxcdF0rKS9cbnZhciBpbml0aWFsSW5kZW50RXhwcmVzc2lvbiA9IC9eKCB7MSw0fXxcXHQpPy9nbVxuXG5mdW5jdGlvbiBsaXN0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJ1cHRvcnMgPSBzZWxmLmludGVycnVwdExpc3RcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBzdGFydCA9IG51bGxcbiAgdmFyIHNpemVcbiAgdmFyIHF1ZXVlXG4gIHZhciBvcmRlcmVkXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgbmV4dEluZGV4XG4gIHZhciBzdGFydEluZGV4XG4gIHZhciBwcmVmaXhlZFxuICB2YXIgY3VycmVudE1hcmtlclxuICB2YXIgY29udGVudFxuICB2YXIgbGluZVxuICB2YXIgcHJldmlvdXNFbXB0eVxuICB2YXIgZW1wdHlcbiAgdmFyIGl0ZW1zXG4gIHZhciBhbGxMaW5lc1xuICB2YXIgZW1wdHlMaW5lc1xuICB2YXIgaXRlbVxuICB2YXIgZW50ZXJUb3BcbiAgdmFyIGV4aXRCbG9ja3F1b3RlXG4gIHZhciBzcHJlYWQgPSBmYWxzZVxuICB2YXIgbm9kZVxuICB2YXIgbm93XG4gIHZhciBlbmRcbiAgdmFyIGluZGVudGVkXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8IGNoYXJhY3RlciA9PT0gcGx1c1NpZ24gfHwgY2hhcmFjdGVyID09PSBkYXNoKSB7XG4gICAgbWFya2VyID0gY2hhcmFjdGVyXG4gICAgb3JkZXJlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgb3JkZXJlZCA9IHRydWVcbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgIXF1ZXVlIHx8XG4gICAgICAhKGNoYXJhY3RlciA9PT0gZG90IHx8IChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykpXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvKiBTbGlnaHRseSBhYnVzaW5nIGBzaWxlbnRgIG1vZGUsIHdob3NlIGdvYWwgaXMgdG8gbWFrZSBpbnRlcnJ1cHRpbmdcbiAgICAgKiBwYXJhZ3JhcGhzIHdvcmsuXG4gICAgICogV2VsbCwgdGhhdOKAmXMgZXhhY3RseSB3aGF0IHdlIHdhbnQgdG8gZG8gaGVyZTogZG9u4oCZdCBpbnRlcnJ1cHQ6XG4gICAgICogMi4gaGVyZSwgYmVjYXVzZSB0aGUg4oCcbGlzdOKAnSBkb2VzbuKAmXQgc3RhcnQgd2l0aCBgMWAuICovXG4gICAgaWYgKHNpbGVudCAmJiBxdWV1ZSAhPT0gJzEnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdGFydCA9IHBhcnNlSW50KHF1ZXVlLCAxMClcbiAgICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuXG4gIGlmIChcbiAgICBjaGFyYWN0ZXIgIT09IHNwYWNlICYmXG4gICAgY2hhcmFjdGVyICE9PSB0YWIgJiZcbiAgICAocGVkYW50aWMgfHwgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgJiYgY2hhcmFjdGVyICE9PSAnJykpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpbmRleCA9IDBcbiAgaXRlbXMgPSBbXVxuICBhbGxMaW5lcyA9IFtdXG4gIGVtcHR5TGluZXMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgIHByZWZpeGVkID0gZmFsc2VcbiAgICBpbmRlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoXG4gICAgfVxuXG4gICAgc2l6ZSA9IDBcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgc2l6ZSArPSB0YWJTaXplIC0gKHNpemUgJSB0YWJTaXplKVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICAgIHNpemUrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpdGVtICYmIHNpemUgPj0gaXRlbS5pbmRlbnQpIHtcbiAgICAgIGluZGVudGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICBjdXJyZW50TWFya2VyID0gbnVsbFxuXG4gICAgaWYgKCFpbmRlbnRlZCkge1xuICAgICAgaWYgKFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gcGx1c1NpZ24gfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBkYXNoXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICAgIHNpemUrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSAnJ1xuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICAgIGlmICghZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICAgICAgaW5kZXgrK1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxdWV1ZSAmJlxuICAgICAgICAgIChjaGFyYWN0ZXIgPT09IGRvdCB8fCAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjdXJyZW50TWFya2VyID0gY2hhcmFjdGVyXG4gICAgICAgICAgc2l6ZSArPSBxdWV1ZS5sZW5ndGggKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRhYikge1xuICAgICAgICAgIHNpemUgKz0gdGFiU2l6ZSAtIChzaXplICUgdGFiU2l6ZSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICAgIGVuZCA9IGluZGV4ICsgdGFiU2l6ZVxuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gc3BhY2UpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgICAgc2l6ZSsrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQgJiYgdmFsdWUuY2hhckF0KGluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgICAgIGluZGV4IC09IHRhYlNpemUgLSAxXG4gICAgICAgICAgICBzaXplIC09IHRhYlNpemUgLSAxXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQgJiYgY2hhcmFjdGVyICE9PSAnJykge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE1hcmtlcikge1xuICAgICAgaWYgKCFwZWRhbnRpYyAmJiBtYXJrZXIgIT09IGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcHJlZml4ZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29tbW9ubWFyayAmJiAhaW5kZW50ZWQgJiYgdmFsdWUuY2hhckF0KHN0YXJ0SW5kZXgpID09PSBzcGFjZSkge1xuICAgICAgICBpbmRlbnRlZCA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoY29tbW9ubWFyayAmJiBpdGVtKSB7XG4gICAgICAgIGluZGVudGVkID0gc2l6ZSA+PSBpdGVtLmluZGVudCB8fCBzaXplID4gdGFiU2l6ZVxuICAgICAgfVxuXG4gICAgICBwcmVmaXhlZCA9IGZhbHNlXG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICB9XG5cbiAgICBsaW5lID0gdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KVxuICAgIGNvbnRlbnQgPSBzdGFydEluZGV4ID09PSBpbmRleCA/IGxpbmUgOiB2YWx1ZS5zbGljZShpbmRleCwgbmV4dEluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IHVuZGVyc2NvcmUgfHxcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IGRhc2hcbiAgICApIHtcbiAgICAgIGlmICh0b2tlbml6ZXJzLnRoZW1hdGljQnJlYWsuY2FsbChzZWxmLCBlYXQsIGxpbmUsIHRydWUpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXNFbXB0eSA9IGVtcHR5XG4gICAgZW1wdHkgPSAhcHJlZml4ZWQgJiYgIXRyaW0oY29udGVudCkubGVuZ3RoXG5cbiAgICBpZiAoaW5kZW50ZWQgJiYgaXRlbSkge1xuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfSBlbHNlIGlmIChwcmVmaXhlZCkge1xuICAgICAgaWYgKGVtcHR5TGluZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHNwcmVhZCA9IHRydWVcbiAgICAgICAgaXRlbS52YWx1ZS5wdXNoKCcnKVxuICAgICAgICBpdGVtLnRyYWlsID0gZW1wdHlMaW5lcy5jb25jYXQoKVxuICAgICAgfVxuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB2YWx1ZTogW2xpbmVdLFxuICAgICAgICBpbmRlbnQ6IHNpemUsXG4gICAgICAgIHRyYWlsOiBbXVxuICAgICAgfVxuXG4gICAgICBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfSBlbHNlIGlmIChlbXB0eSkge1xuICAgICAgaWYgKHByZXZpb3VzRW1wdHkgJiYgIWNvbW1vbm1hcmspIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZW1wdHlMaW5lcy5wdXNoKGxpbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2aW91c0VtcHR5KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIGxpbmUsIHRydWVdKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZS5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBlbXB0eUxpbmVzID0gW11cbiAgICB9XG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDFcbiAgfVxuXG4gIG5vZGUgPSBlYXQoYWxsTGluZXMuam9pbihsaW5lRmVlZCkpLnJlc2V0KHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgb3JkZXJlZDogb3JkZXJlZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgc3ByZWFkOiBzcHJlYWQsXG4gICAgY2hpbGRyZW46IFtdXG4gIH0pXG5cbiAgZW50ZXJUb3AgPSBzZWxmLmVudGVyTGlzdCgpXG4gIGV4aXRCbG9ja3F1b3RlID0gc2VsZi5lbnRlckJsb2NrKClcbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSBpdGVtcy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udmFsdWUuam9pbihsaW5lRmVlZClcbiAgICBub3cgPSBlYXQubm93KClcblxuICAgIGVhdChpdGVtKShsaXN0SXRlbShzZWxmLCBpdGVtLCBub3cpLCBub2RlKVxuXG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XS50cmFpbC5qb2luKGxpbmVGZWVkKVxuXG4gICAgaWYgKGluZGV4ICE9PSBsZW5ndGggLSAxKSB7XG4gICAgICBpdGVtICs9IGxpbmVGZWVkXG4gICAgfVxuXG4gICAgZWF0KGl0ZW0pXG4gIH1cblxuICBlbnRlclRvcCgpXG4gIGV4aXRCbG9ja3F1b3RlKClcblxuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGZuID0gY3R4Lm9wdGlvbnMucGVkYW50aWMgPyBwZWRhbnRpY0xpc3RJdGVtIDogbm9ybWFsTGlzdEl0ZW1cbiAgdmFyIGNoZWNrZWQgPSBudWxsXG4gIHZhciB0YXNrXG4gIHZhciBpbmRlbnRcblxuICB2YWx1ZSA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcblxuICBpZiAoY3R4Lm9wdGlvbnMuZ2ZtKSB7XG4gICAgdGFzayA9IHZhbHVlLm1hdGNoKHRhc2tJdGVtRXhwcmVzc2lvbilcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICBpbmRlbnQgPSB0YXNrWzBdLmxlbmd0aFxuICAgICAgY2hlY2tlZCA9IHRhc2tbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlWFxuICAgICAgb2Zmc2V0c1twb3NpdGlvbi5saW5lXSArPSBpbmRlbnRcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoaW5kZW50KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICBzcHJlYWQ6IGxvb3NlTGlzdEl0ZW1FeHByZXNzaW9uLnRlc3QodmFsdWUpLFxuICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgY2hpbGRyZW46IGN0eC50b2tlbml6ZUJsb2NrKHZhbHVlLCBwb3NpdGlvbilcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgb3Zlcmx5IHNpbXBsZSBtZWNoYW5pY3MuXG5mdW5jdGlvbiBwZWRhbnRpY0xpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldFxuICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcblxuICAvLyBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocGVkYW50aWNCdWxsZXRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICAvLyBUaGUgaW5pdGlhbCBsaW5lIHdhcyBhbHNvIG1hdGNoZWQgYnkgdGhlIGJlbG93LCBzbyB3ZSByZXNldCB0aGUgYGxpbmVgLlxuICBsaW5lID0gcG9zaXRpb24ubGluZVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKGluaXRpYWxJbmRlbnRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICAvLyBBIHNpbXBsZSByZXBsYWNlciB3aGljaCByZW1vdmVkIGFsbCBtYXRjaGVzLCBhbmQgYWRkcyB0aGVpciBsZW5ndGggdG9cbiAgLy8gYG9mZnNldGAuXG4gIGZ1bmN0aW9uIHJlcGxhY2VyKCQwKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgJDAubGVuZ3RoXG4gICAgbGluZSsrXG5cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgc2FuZSBtZWNoYW5pY3MuXG5mdW5jdGlvbiBub3JtYWxMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG4gIHZhciBtYXhcbiAgdmFyIGJ1bGxldFxuICB2YXIgcmVzdFxuICB2YXIgbGluZXNcbiAgdmFyIHRyaW1tZWRMaW5lc1xuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIC8vIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShidWxsZXRFeHByZXNzaW9uLCByZXBsYWNlcilcblxuICBsaW5lcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuXG4gIHRyaW1tZWRMaW5lcyA9IHJlbW92ZUluZGVudCh2YWx1ZSwgZ2V0SW5kZW50KG1heCkuaW5kZW50KS5zcGxpdChsaW5lRmVlZClcblxuICAvLyBXZSByZXBsYWNlZCB0aGUgaW5pdGlhbCBidWxsZXQgd2l0aCBzb21ldGhpbmcgZWxzZSBhYm92ZSwgd2hpY2ggd2FzIHVzZWRcbiAgLy8gdG8gdHJpY2sgYHJlbW92ZUluZGVudGF0aW9uYCBpbnRvIHJlbW92aW5nIHNvbWUgbW9yZSBjaGFyYWN0ZXJzIHdoZW5cbiAgLy8gcG9zc2libGUuICBIb3dldmVyLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgaW5pdGlhbCBsaW5lIHRvIGJlIHN0cmlwcGVkXG4gIC8vIG1vcmUgdGhhbiBpdCBzaG91bGQgYmUuXG4gIHRyaW1tZWRMaW5lc1swXSA9IHJlc3RcblxuICBvZmZzZXRzW2xpbmVdID0gKG9mZnNldHNbbGluZV0gfHwgMCkgKyBidWxsZXQubGVuZ3RoXG4gIGxpbmUrK1xuXG4gIGluZGV4ID0gMFxuICBsZW5ndGggPSBsaW5lcy5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbbGluZV0gPVxuICAgICAgKG9mZnNldHNbbGluZV0gfHwgMCkgKyBsaW5lc1tpbmRleF0ubGVuZ3RoIC0gdHJpbW1lZExpbmVzW2luZGV4XS5sZW5ndGhcbiAgICBsaW5lKytcbiAgfVxuXG4gIHJldHVybiB0cmltbWVkTGluZXMuam9pbihsaW5lRmVlZClcblxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtcyAqL1xuICBmdW5jdGlvbiByZXBsYWNlcigkMCwgJDEsICQyLCAkMywgJDQpIHtcbiAgICBidWxsZXQgPSAkMSArICQyICsgJDNcbiAgICByZXN0ID0gJDRcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBmaXJzdCBuaW5lIG51bWJlcmVkIGxpc3QgaXRlbXMgY2FuIGluZGVudCB3aXRoIGFuXG4gICAgLy8gZXh0cmEgc3BhY2UuICBUaGF0IGlzLCB3aGVuIHRoZSBidWxsZXQgZGlkIG5vdCByZWNlaXZlIGFuIGV4dHJhIGZpbmFsXG4gICAgLy8gc3BhY2UuXG4gICAgaWYgKE51bWJlcigkMikgPCAxMCAmJiBidWxsZXQubGVuZ3RoICUgMiA9PT0gMSkge1xuICAgICAgJDIgPSBzcGFjZSArICQyXG4gICAgfVxuXG4gICAgbWF4ID0gJDEgKyByZXBlYXQoc3BhY2UsICQyLmxlbmd0aCkgKyAkM1xuXG4gICAgcmV0dXJuIG1heCArIHJlc3RcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgdHJpbVRyYWlsaW5nTGluZXMgPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJylcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gVG9rZW5pc2UgcGFyYWdyYXBoLlxuZnVuY3Rpb24gcGFyYWdyYXBoKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNldHRpbmdzID0gc2VsZi5vcHRpb25zXG4gIHZhciBjb21tb25tYXJrID0gc2V0dGluZ3MuY29tbW9ubWFya1xuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzXG4gIHZhciBpbnRlcnJ1cHRvcnMgPSBzZWxmLmludGVycnVwdFBhcmFncmFwaFxuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkKVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBwb3NpdGlvblxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgc2l6ZVxuICB2YXIgbm93XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gRWF0IGV2ZXJ5dGhpbmcgaWYgdGhlcmXigJlzIG5vIGZvbGxvd2luZyBuZXdsaW5lLlxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gbGVuZ3RoXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIFN0b3AgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIE5FV0xJTkUuXG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBJbiBjb21tb25tYXJrLW1vZGUsIGZvbGxvd2luZyBpbmRlbnRlZCBsaW5lcyBhcmUgcGFydCBvZiB0aGUgcGFyYWdyYXBoLlxuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICBzaXplID0gMFxuICAgICAgcG9zaXRpb24gPSBpbmRleCArIDFcblxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChwb3NpdGlvbilcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICBzaXplID0gdGFiU2l6ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICAgIHNpemUrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbisrXG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplID49IHRhYlNpemUgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSlcblxuICAgIC8vIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlIGJsb2NrLlxuICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCBzdWJ2YWx1ZSwgdHJ1ZV0pKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gaW5kZXhcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcblxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgdHJpbSh2YWx1ZS5zbGljZShwb3NpdGlvbiwgaW5kZXgpKSA9PT0gJycpIHtcbiAgICAgIGluZGV4ID0gcG9zaXRpb25cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleClcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIHN1YnZhbHVlID0gdHJpbVRyYWlsaW5nTGluZXMoc3VidmFsdWUpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHN1YnZhbHVlLCBub3cpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2xpbmsnKVxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJylcblxubW9kdWxlLmV4cG9ydHMgPSByZWZlcmVuY2VcbnJlZmVyZW5jZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5rID0gJ2xpbmsnXG52YXIgaW1hZ2UgPSAnaW1hZ2UnXG52YXIgc2hvcnRjdXQgPSAnc2hvcnRjdXQnXG52YXIgY29sbGFwc2VkID0gJ2NvbGxhcHNlZCdcbnZhciBmdWxsID0gJ2Z1bGwnXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxuZnVuY3Rpb24gcmVmZXJlbmNlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFya1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW50cm8gPSAnJ1xuICB2YXIgdHlwZSA9IGxpbmtcbiAgdmFyIHJlZmVyZW5jZVR5cGUgPSBzaG9ydGN1dFxuICB2YXIgY29udGVudFxuICB2YXIgaWRlbnRpZmllclxuICB2YXIgbm93XG4gIHZhciBub2RlXG4gIHZhciBleGl0XG4gIHZhciBxdWV1ZVxuICB2YXIgYnJhY2tldGVkXG4gIHZhciBkZXB0aFxuXG4gIC8vIENoZWNrIHdoZXRoZXIgd2XigJlyZSBlYXRpbmcgYW4gaW1hZ2UuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGV4Y2xhbWF0aW9uTWFyaykge1xuICAgIHR5cGUgPSBpbWFnZVxuICAgIGludHJvID0gY2hhcmFjdGVyXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBpbnRybyArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIC8vIEVhdCB0aGUgdGV4dC5cbiAgZGVwdGggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGJyYWNrZXRlZCA9IHRydWVcbiAgICAgIGRlcHRoKytcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBpZiAoIWRlcHRoKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlcHRoLS1cbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGJhY2tzbGFzaFxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgc3VidmFsdWUgPSBxdWV1ZVxuICBjb250ZW50ID0gcXVldWVcbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmIChjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIGlmICghY29tbW9ubWFyaykge1xuICAgIC8vIFRoZSBvcmlnaW5hbCBtYXJrZG93biBzeW50YXggZGVmaW5pdGlvbiBleHBsaWNpdGx5IGFsbG93cyBmb3Igd2hpdGVzcGFjZVxuICAgIC8vIGJldHdlZW4gdGhlIGxpbmsgdGV4dCBhbmQgbGluayBsYWJlbDsgY29tbW9ubWFyayBkZXBhcnRzIGZyb20gdGhpcywgaW5cbiAgICAvLyBwYXJ0IHRvIGltcHJvdmUgc3VwcG9ydCBmb3Igc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmtzXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIGlkZW50aWZpZXIgPSAnJ1xuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsZWZ0U3F1YXJlQnJhY2tldCB8fCBjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgaWRlbnRpZmllciArPSBiYWNrc2xhc2hcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGlkZW50aWZpZXIgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICByZWZlcmVuY2VUeXBlID0gaWRlbnRpZmllciA/IGZ1bGwgOiBjb2xsYXBzZWRcbiAgICAgIHF1ZXVlICs9IGlkZW50aWZpZXIgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9IGVsc2Uge1xuICAgICAgaWRlbnRpZmllciA9ICcnXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICBxdWV1ZSA9ICcnXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZGVudGlmaWVyID0gY29udGVudFxuICB9XG5cbiAgLy8gQnJhY2tldHMgY2Fubm90IGJlIGluc2lkZSB0aGUgaWRlbnRpZmllci5cbiAgaWYgKHJlZmVyZW5jZVR5cGUgIT09IGZ1bGwgJiYgYnJhY2tldGVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSA9IGludHJvICsgc3VidmFsdWVcblxuICBpZiAodHlwZSA9PT0gbGluayAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gaW50cm8ubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gaW50cm8ubGVuZ3RoXG4gIGlkZW50aWZpZXIgPSByZWZlcmVuY2VUeXBlID09PSBmdWxsID8gaWRlbnRpZmllciA6IGNvbnRlbnRcblxuICBub2RlID0ge1xuICAgIHR5cGU6IHR5cGUgKyAnUmVmZXJlbmNlJyxcbiAgICBpZGVudGlmaWVyOiBub3JtYWxpemUoaWRlbnRpZmllciksXG4gICAgbGFiZWw6IGlkZW50aWZpZXIsXG4gICAgcmVmZXJlbmNlVHlwZTogcmVmZXJlbmNlVHlwZVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGxpbmspIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuICAgIG5vZGUuY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgICBleGl0KClcbiAgfSBlbHNlIHtcbiAgICBub2RlLmFsdCA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGNvbnRlbnQpLCBub3cpIHx8IG51bGxcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9zdHJvbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuc3Ryb25nLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGFzdGVyaXNrID0gJyonXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xuXG5mdW5jdGlvbiBzdHJvbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBub3dcbiAgdmFyIHBlZGFudGljXG4gIHZhciBtYXJrZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgbGVuZ3RoXG4gIHZhciBwcmV2aW91c1xuXG4gIGlmIChcbiAgICAoY2hhcmFjdGVyICE9PSBhc3RlcmlzayAmJiBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmUpIHx8XG4gICAgdmFsdWUuY2hhckF0KCsraW5kZXgpICE9PSBjaGFyYWN0ZXJcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpY1xuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgc3VidmFsdWUgPSBtYXJrZXIgKyBtYXJrZXJcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4KytcbiAgcXVldWUgPSAnJ1xuICBjaGFyYWN0ZXIgPSAnJ1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gbWFya2VyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbWFya2VyICYmXG4gICAgICAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXZpb3VzKSlcbiAgICApIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCArIDIpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbm93ID0gZWF0Lm5vdygpXG4gICAgICAgIG5vdy5jb2x1bW4gKz0gMlxuICAgICAgICBub3cub2Zmc2V0ICs9IDJcblxuICAgICAgICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUgKyBzdWJ2YWx1ZSkoe1xuICAgICAgICAgIHR5cGU6ICdzdHJvbmcnLFxuICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHF1ZXVlLCBub3cpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZVxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBkYXNoID0gJy0nXG52YXIgY29sb24gPSAnOidcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciB2ZXJ0aWNhbEJhciA9ICd8J1xuXG52YXIgbWluQ29sdW1ucyA9IDFcbnZhciBtaW5Sb3dzID0gMlxuXG52YXIgbGVmdCA9ICdsZWZ0J1xudmFyIGNlbnRlciA9ICdjZW50ZXInXG52YXIgcmlnaHQgPSAncmlnaHQnXG5cbmZ1bmN0aW9uIHRhYmxlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4XG4gIHZhciBhbGlnbm1lbnRzXG4gIHZhciBhbGlnbm1lbnRcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciByb3dcbiAgdmFyIGxlbmd0aFxuICB2YXIgbGluZXNcbiAgdmFyIHF1ZXVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIGhhc0Rhc2hcbiAgdmFyIGFsaWduXG4gIHZhciBjZWxsXG4gIHZhciBwcmVhbWJsZVxuICB2YXIgbm93XG4gIHZhciBwb3NpdGlvblxuICB2YXIgbGluZUNvdW50XG4gIHZhciBsaW5lXG4gIHZhciByb3dzXG4gIHZhciB0YWJsZVxuICB2YXIgbGluZUluZGV4XG4gIHZhciBwaXBlSW5kZXhcbiAgdmFyIGZpcnN0XG5cbiAgLy8gRXhpdCB3aGVuIG5vdCBpbiBnZm0tbW9kZS5cbiAgaWYgKCFzZWxmLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBHZXQgdGhlIHJvd3MuXG4gIC8vIERldGVjdGluZyB0YWJsZXMgc29vbiBpcyBoYXJkLCBzbyB0aGVyZSBhcmUgc29tZSBjaGVja3MgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGhlcmUsIHN1Y2ggYXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJvd3MsIGFuZCBhbGxvd2VkIGNoYXJhY3RlcnMgaW4gdGhlXG4gIC8vIGFsaWdubWVudCByb3cuXG4gIGluZGV4ID0gMFxuICBsaW5lQ291bnQgPSAwXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgbGluZXMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGxpbmVJbmRleCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICAgIHBpcGVJbmRleCA9IHZhbHVlLmluZGV4T2YodmVydGljYWxCYXIsIGluZGV4ICsgMSlcblxuICAgIGlmIChsaW5lSW5kZXggPT09IC0xKSB7XG4gICAgICBsaW5lSW5kZXggPSB2YWx1ZS5sZW5ndGhcbiAgICB9XG5cbiAgICBpZiAocGlwZUluZGV4ID09PSAtMSB8fCBwaXBlSW5kZXggPiBsaW5lSW5kZXgpIHtcbiAgICAgIGlmIChsaW5lQ291bnQgPCBtaW5Sb3dzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxpbmVzLnB1c2godmFsdWUuc2xpY2UoaW5kZXgsIGxpbmVJbmRleCkpXG4gICAgbGluZUNvdW50KytcbiAgICBpbmRleCA9IGxpbmVJbmRleCArIDFcbiAgfVxuXG4gIC8vIFBhcnNlIHRoZSBhbGlnbm1lbnQgcm93LlxuICBzdWJ2YWx1ZSA9IGxpbmVzLmpvaW4obGluZUZlZWQpXG4gIGFsaWdubWVudHMgPSBsaW5lcy5zcGxpY2UoMSwgMSlbMF0gfHwgW11cbiAgaW5kZXggPSAwXG4gIGxlbmd0aCA9IGFsaWdubWVudHMubGVuZ3RoXG4gIGxpbmVDb3VudC0tXG4gIGFsaWdubWVudCA9IGZhbHNlXG4gIGFsaWduID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBhbGlnbm1lbnRzLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyKSB7XG4gICAgICBoYXNEYXNoID0gbnVsbFxuXG4gICAgICBpZiAoYWxpZ25tZW50ID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduLnB1c2goYWxpZ25tZW50KVxuICAgICAgICBhbGlnbm1lbnQgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBmaXJzdCA9IGZhbHNlXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGRhc2gpIHtcbiAgICAgIGhhc0Rhc2ggPSB0cnVlXG4gICAgICBhbGlnbm1lbnQgPSBhbGlnbm1lbnQgfHwgbnVsbFxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBjb2xvbikge1xuICAgICAgaWYgKGFsaWdubWVudCA9PT0gbGVmdCkge1xuICAgICAgICBhbGlnbm1lbnQgPSBjZW50ZXJcbiAgICAgIH0gZWxzZSBpZiAoaGFzRGFzaCAmJiBhbGlnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gcmlnaHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWdubWVudCA9IGxlZnRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgIT09IGZhbHNlKSB7XG4gICAgYWxpZ24ucHVzaChhbGlnbm1lbnQpXG4gIH1cblxuICAvLyBFeGl0IHdoZW4gd2l0aG91dCBlbm91Z2ggY29sdW1ucy5cbiAgaWYgKGFsaWduLmxlbmd0aCA8IG1pbkNvbHVtbnMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBQYXJzZSB0aGUgcm93cy5cbiAgcG9zaXRpb24gPSAtMVxuICByb3dzID0gW11cblxuICB0YWJsZSA9IGVhdChzdWJ2YWx1ZSkucmVzZXQoe3R5cGU6ICd0YWJsZScsIGFsaWduOiBhbGlnbiwgY2hpbGRyZW46IHJvd3N9KVxuXG4gIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGluZUNvdW50KSB7XG4gICAgbGluZSA9IGxpbmVzW3Bvc2l0aW9uXVxuICAgIHJvdyA9IHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119XG5cbiAgICAvLyBFYXQgYSBuZXdsaW5lIGNoYXJhY3RlciB3aGVuIHRoaXMgaXMgbm90IHRoZSBmaXJzdCByb3cuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICBlYXQobGluZUZlZWQpXG4gICAgfVxuXG4gICAgLy8gRWF0IHRoZSByb3cuXG4gICAgZWF0KGxpbmUpLnJlc2V0KHJvdywgdGFibGUpXG5cbiAgICBsZW5ndGggPSBsaW5lLmxlbmd0aCArIDFcbiAgICBpbmRleCA9IDBcbiAgICBxdWV1ZSA9ICcnXG4gICAgY2VsbCA9ICcnXG4gICAgcHJlYW1ibGUgPSB0cnVlXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IGxpbmUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICcnIHx8IGNoYXJhY3RlciA9PT0gdmVydGljYWxCYXIpIHtcbiAgICAgICAgaWYgKHByZWFtYmxlKSB7XG4gICAgICAgICAgZWF0KGNoYXJhY3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKGNlbGwgfHwgY2hhcmFjdGVyKSAmJiAhcHJlYW1ibGUpIHtcbiAgICAgICAgICAgIHN1YnZhbHVlID0gY2VsbFxuXG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUuc2xpY2UoMCwgLTEpXG4gICAgICAgICAgICAgICAgcXVldWUgPSBxdWV1ZS5jaGFyQXQocXVldWUubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICAgICAgICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3cgPSBlYXQubm93KClcblxuICAgICAgICAgICAgZWF0KHN1YnZhbHVlKShcbiAgICAgICAgICAgICAge3R5cGU6ICd0YWJsZUNlbGwnLCBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjZWxsLCBub3cpfSxcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWF0KHF1ZXVlICsgY2hhcmFjdGVyKVxuXG4gICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICAgIGNlbGwgPSAnJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocXVldWUpIHtcbiAgICAgICAgICBjZWxsICs9IHF1ZXVlXG4gICAgICAgICAgcXVldWUgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbCArPSBjaGFyYWN0ZXJcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2ggJiYgaW5kZXggIT09IGxlbmd0aCAtIDIpIHtcbiAgICAgICAgICBjZWxsICs9IGxpbmUuY2hhckF0KGluZGV4ICsgMSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJlYW1ibGUgPSBmYWxzZVxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIC8vIEVhdCB0aGUgYWxpZ25tZW50IHJvdy5cbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICBlYXQobGluZUZlZWQgKyBhbGlnbm1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWJsZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dFxuXG5mdW5jdGlvbiB0ZXh0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG1ldGhvZHNcbiAgdmFyIHRva2VuaXplcnNcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBwb3NpdGlvblxuICB2YXIgdG9rZW5pemVyXG4gIHZhciBuYW1lXG4gIHZhciBtaW5cbiAgdmFyIG5vd1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtZXRob2RzID0gc2VsZi5pbmxpbmVNZXRob2RzXG4gIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoXG4gIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgaW5kZXggPSAtMVxuICBtaW4gPSB2YWx1ZS5sZW5ndGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG5hbWUgPSBtZXRob2RzW2luZGV4XVxuXG4gICAgaWYgKG5hbWUgPT09ICd0ZXh0JyB8fCAhdG9rZW5pemVyc1tuYW1lXSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0b2tlbml6ZXIgPSB0b2tlbml6ZXJzW25hbWVdLmxvY2F0b3JcblxuICAgIGlmICghdG9rZW5pemVyKSB7XG4gICAgICBlYXQuZmlsZS5mYWlsKCdNaXNzaW5nIGxvY2F0b3I6IGAnICsgbmFtZSArICdgJylcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IHRva2VuaXplci5jYWxsKHNlbGYsIHZhbHVlLCAxKVxuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAtMSAmJiBwb3NpdGlvbiA8IG1pbikge1xuICAgICAgbWluID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIG1pbilcbiAgbm93ID0gZWF0Lm5vdygpXG5cbiAgc2VsZi5kZWNvZGUoc3VidmFsdWUsIG5vdywgaGFuZGxlcilcblxuICBmdW5jdGlvbiBoYW5kbGVyKGNvbnRlbnQsIHBvc2l0aW9uLCBzb3VyY2UpIHtcbiAgICBlYXQoc291cmNlIHx8IGNvbnRlbnQpKHt0eXBlOiAndGV4dCcsIHZhbHVlOiBjb250ZW50fSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIGRhc2ggPSAnLSdcbnZhciB1bmRlcnNjb3JlID0gJ18nXG5cbnZhciBtYXhDb3VudCA9IDNcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBtYXJrZXJDb3VudFxuICB2YXIgcXVldWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICB9XG5cbiAgaWYgKFxuICAgIGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiZcbiAgICBjaGFyYWN0ZXIgIT09IGRhc2ggJiZcbiAgICBjaGFyYWN0ZXIgIT09IHVuZGVyc2NvcmVcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXJrZXIgPSBjaGFyYWN0ZXJcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIG1hcmtlckNvdW50ID0gMVxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgIG1hcmtlckNvdW50KytcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbWFya2VyQ291bnQgPj0gbWF4Q291bnQgJiZcbiAgICAgICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpXG4gICAgKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAndGhlbWF0aWNCcmVhayd9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdXJsJylcblxubW9kdWxlLmV4cG9ydHMgPSB1cmxcbnVybC5sb2NhdG9yID0gbG9jYXRlXG51cmwubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgZXhjbGFtYXRpb25NYXJrID0gMzMgLy8gJyEnXG52YXIgYW1wZXJzYW5kID0gMzggLy8gJyYnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9IDQxIC8vICcpJ1xudmFyIGFzdGVyaXNrID0gNDIgLy8gJyonXG52YXIgY29tbWEgPSA0NCAvLyAnLCdcbnZhciBkYXNoID0gNDUgLy8gJy0nXG52YXIgZG90ID0gNDYgLy8gJy4nXG52YXIgY29sb24gPSA1OCAvLyAnOidcbnZhciBzZW1pY29sb24gPSA1OSAvLyAnOydcbnZhciBxdWVzdGlvbk1hcmsgPSA2MyAvLyAnPydcbnZhciBsZXNzVGhhbiA9IDYwIC8vICc8J1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcbnZhciB0aWxkZSA9IDEyNiAvLyAnfidcblxudmFyIGxlZnRQYXJlbnRoZXNpc0NoYXJhY3RlciA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIgPSAnKSdcblxuZnVuY3Rpb24gdXJsKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmlubGluZVRva2VuaXplcnNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgcHJldmlvdXNEb3QgPSAtMVxuICB2YXIgcHJvdG9jb2xsZXNzID0gZmFsc2VcbiAgdmFyIGRvdHNcbiAgdmFyIGxhc3RUd29QYXJ0c1N0YXJ0XG4gIHZhciBzdGFydFxuICB2YXIgaW5kZXhcbiAgdmFyIHBhdGhTdGFydFxuICB2YXIgcGF0aFxuICB2YXIgY29kZVxuICB2YXIgZW5kXG4gIHZhciBsZWZ0Q291bnRcbiAgdmFyIHJpZ2h0Q291bnRcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGNoaWxkcmVuXG4gIHZhciB1cmxcbiAgdmFyIGV4aXRcblxuICBpZiAoIWdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYFdXVy5gIGRvZXNu4oCZdCB3b3JrLlxuICBpZiAodmFsdWUuc2xpY2UoMCwgNCkgPT09ICd3d3cuJykge1xuICAgIHByb3RvY29sbGVzcyA9IHRydWVcbiAgICBpbmRleCA9IDRcbiAgfSBlbHNlIGlmICh2YWx1ZS5zbGljZSgwLCA3KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cDovLycpIHtcbiAgICBpbmRleCA9IDdcbiAgfSBlbHNlIGlmICh2YWx1ZS5zbGljZSgwLCA4KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cHM6Ly8nKSB7XG4gICAgaW5kZXggPSA4XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBBY3QgYXMgaWYgdGhlIHN0YXJ0aW5nIGJvdW5kYXJ5IGlzIGEgZG90LlxuICBwcmV2aW91c0RvdCA9IGluZGV4IC0gMVxuXG4gIC8vIFBhcnNlIGEgdmFsaWQgZG9tYWluLlxuICBzdGFydCA9IGluZGV4XG4gIGRvdHMgPSBbXVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgICAgLy8gRG90cyBtYXkgbm90IGFwcGVhciBhZnRlciBlYWNoIG90aGVyLlxuICAgICAgaWYgKHByZXZpb3VzRG90ID09PSBpbmRleCAtIDEpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZG90cy5wdXNoKGluZGV4KVxuICAgICAgcHJldmlvdXNEb3QgPSBpbmRleFxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmVcbiAgICApIHtcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgYnJlYWtcbiAgfVxuXG4gIC8vIElnbm9yZSBhIGZpbmFsIGRvdDpcbiAgaWYgKGNvZGUgPT09IGRvdCkge1xuICAgIGRvdHMucG9wKClcbiAgICBpbmRleC0tXG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm90IGRvdHMsIGV4aXQuXG4gIGlmIChkb3RzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGlzIGFuIHVuZGVyc2NvcmUgaW4gdGhlIGxhc3QgdHdvIGRvbWFpbiBwYXJ0cywgZXhpdDpcbiAgLy8gYHd3dy5leGFtcGxlLmNfbWAgYW5kIGB3d3cuZXhfYW1wbGUuY29tYCBhcmUgbm90IE9LLCBidXRcbiAgLy8gYHd3dy5zdWJfZG9tYWluLmV4YW1wbGUuY29tYCBpcy5cbiAgbGFzdFR3b1BhcnRzU3RhcnQgPSBkb3RzLmxlbmd0aCA8IDIgPyBzdGFydCA6IGRvdHNbZG90cy5sZW5ndGggLSAyXSArIDFcblxuICBpZiAodmFsdWUuc2xpY2UobGFzdFR3b1BhcnRzU3RhcnQsIGluZGV4KS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZW5kID0gaW5kZXhcbiAgcGF0aFN0YXJ0ID0gaW5kZXhcblxuICAvLyBQYXJzZSBhIHBhdGguXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKHdoaXRlc3BhY2UoY29kZSkgfHwgY29kZSA9PT0gbGVzc1RoYW4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gZXhjbGFtYXRpb25NYXJrIHx8XG4gICAgICBjb2RlID09PSBhc3RlcmlzayB8fFxuICAgICAgY29kZSA9PT0gY29tbWEgfHxcbiAgICAgIGNvZGUgPT09IGRvdCB8fFxuICAgICAgY29kZSA9PT0gY29sb24gfHxcbiAgICAgIGNvZGUgPT09IHF1ZXN0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZSB8fFxuICAgICAgY29kZSA9PT0gdGlsZGVcbiAgICApIHtcbiAgICAgIC8vIEVtcHR5XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZCA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgaW5kZXggPSBlbmRcblxuICAvLyBJZiB0aGUgcGF0aCBlbmRzIGluIGEgY2xvc2luZyBwYXJlbiwgYW5kIHRoZSBjb3VudCBvZiBjbG9zaW5nIHBhcmVucyBpc1xuICAvLyBoaWdoZXIgdGhhbiB0aGUgb3BlbmluZyBjb3VudCwgdGhlbiByZW1vdmUgdGhlIHN1cGVmbHVvdXMgY2xvc2luZyBwYXJlbnMuXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkgPT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICBwYXRoID0gdmFsdWUuc2xpY2UocGF0aFN0YXJ0LCBpbmRleClcbiAgICBsZWZ0Q291bnQgPSBjY291bnQocGF0aCwgbGVmdFBhcmVudGhlc2lzQ2hhcmFjdGVyKVxuICAgIHJpZ2h0Q291bnQgPSBjY291bnQocGF0aCwgcmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlcilcblxuICAgIHdoaWxlIChyaWdodENvdW50ID4gbGVmdENvdW50KSB7XG4gICAgICBpbmRleCA9IHBhdGhTdGFydCArIHBhdGgubGFzdEluZGV4T2YocmlnaHRQYXJlbnRoZXNpc0NoYXJhY3RlcilcbiAgICAgIHBhdGggPSB2YWx1ZS5zbGljZShwYXRoU3RhcnQsIGluZGV4KVxuICAgICAgcmlnaHRDb3VudC0tXG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSA9PT0gc2VtaWNvbG9uKSB7XG4gICAgLy8gR2l0SHViIGRvZXNu4oCZdCBkb2N1bWVudCB0aGlzLCBidXQgZmluYWwgc2VtaWNvbG9ucyBhcmVu4oCZdCBwYXJldCBvZiB0aGVcbiAgICAvLyBVUkwgZWl0aGVyLlxuICAgIGluZGV4LS1cblxuICAgIC8vIC8vIElmIHRoZSBwYXRoIGVuZHMgaW4gd2hhdCBsb29rcyBsaWtlIGFuIGVudGl0eSwgaXTigJlzIG5vdCBwYXJ0IG9mIHRoZSBwYXRoLlxuICAgIGlmIChhbHBoYWJldGljYWwodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpKSkge1xuICAgICAgZW5kID0gaW5kZXggLSAyXG5cbiAgICAgIHdoaWxlIChhbHBoYWJldGljYWwodmFsdWUuY2hhckNvZGVBdChlbmQpKSkge1xuICAgICAgICBlbmQtLVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuY2hhckNvZGVBdChlbmQpID09PSBhbXBlcnNhbmQpIHtcbiAgICAgICAgaW5kZXggPSBlbmRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250ZW50ID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG4gIHVybCA9IGRlY29kZShjb250ZW50LCB7bm9uVGVybWluYXRlZDogZmFsc2V9KVxuXG4gIGlmIChwcm90b2NvbGxlc3MpIHtcbiAgICB1cmwgPSAnaHR0cDovLycgKyB1cmxcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIHVybC5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cbiAgY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSlcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoY29udGVudCkoe3R5cGU6ICdsaW5rJywgdGl0bGU6IG51bGwsIHVybDogdXJsLCBjaGlsZHJlbjogY2hpbGRyZW59KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBDb25zdHJ1Y3QgYSB0b2tlbml6ZXIuICBUaGlzIGNyZWF0ZXMgYm90aCBgdG9rZW5pemVJbmxpbmVgIGFuZCBgdG9rZW5pemVCbG9ja2AuXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcmV0dXJuIHRva2VuaXplXG5cbiAgLy8gVG9rZW5pemVyIGZvciBhIGJvdW5kIGB0eXBlYC5cbiAgZnVuY3Rpb24gdG9rZW5pemUodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIG9mZnNldCA9IHNlbGYub2Zmc2V0XG4gICAgdmFyIHRva2VucyA9IFtdXG4gICAgdmFyIG1ldGhvZHMgPSBzZWxmW3R5cGUgKyAnTWV0aG9kcyddXG4gICAgdmFyIHRva2VuaXplcnMgPSBzZWxmW3R5cGUgKyAnVG9rZW5pemVycyddXG4gICAgdmFyIGxpbmUgPSBsb2NhdGlvbi5saW5lXG4gICAgdmFyIGNvbHVtbiA9IGxvY2F0aW9uLmNvbHVtblxuICAgIHZhciBpbmRleFxuICAgIHZhciBsZW5ndGhcbiAgICB2YXIgbWV0aG9kXG4gICAgdmFyIG5hbWVcbiAgICB2YXIgbWF0Y2hlZFxuICAgIHZhciB2YWx1ZUxlbmd0aFxuXG4gICAgLy8gVHJpbSB3aGl0ZSBzcGFjZSBvbmx5IGxpbmVzLlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0b2tlbnNcbiAgICB9XG5cbiAgICAvLyBFeHBvc2Ugb24gYGVhdGAuXG4gICAgZWF0Lm5vdyA9IG5vd1xuICAgIGVhdC5maWxlID0gc2VsZi5maWxlXG5cbiAgICAvLyBTeW5jIGluaXRpYWwgb2Zmc2V0LlxuICAgIHVwZGF0ZVBvc2l0aW9uKCcnKVxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGB2YWx1ZWAsIGFuZCBpdGVyYXRlIG92ZXIgYWxsIHRva2VuaXplcnMuICBXaGVuIG9uZSBlYXRzXG4gICAgLy8gc29tZXRoaW5nLCByZS1pdGVyYXRlIHdpdGggdGhlIHJlbWFpbmluZyB2YWx1ZS4gIElmIG5vIHRva2VuaXplciBlYXRzLFxuICAgIC8vIHNvbWV0aGluZyBmYWlsZWQgKHNob3VsZCBub3QgaGFwcGVuKSBhbmQgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICB3aGlsZSAodmFsdWUpIHtcbiAgICAgIGluZGV4ID0gLTFcbiAgICAgIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoXG4gICAgICBtYXRjaGVkID0gZmFsc2VcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdXG4gICAgICAgIG1ldGhvZCA9IHRva2VuaXplcnNbbmFtZV1cblxuICAgICAgICAvLyBQcmV2aW91c2x5LCB3ZSBoYWQgY29uc3RydWN0cyBzdWNoIGFzIGZvb3Rub3RlcyBhbmQgWUFNTCB0aGF0IHVzZWRcbiAgICAgICAgLy8gdGhlc2UgcHJvcGVydGllcy5cbiAgICAgICAgLy8gVGhvc2UgYXJlIG5vdyBleHRlcm5hbCAocGx1cyB0aGVyZSBhcmUgdXNlcmxhbmQgZXh0ZW5zaW9ucyksIHRoYXQgbWF5XG4gICAgICAgIC8vIHN0aWxsIHVzZSB0aGVtLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgbWV0aG9kICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qub25seUF0U3RhcnQgfHwgc2VsZi5hdFN0YXJ0KSAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm5vdEluTGlzdCB8fCAhc2VsZi5pbkxpc3QpICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qubm90SW5CbG9jayB8fCAhc2VsZi5pbkJsb2NrKSAmJlxuICAgICAgICAgICghbWV0aG9kLm5vdEluTGluayB8fCAhc2VsZi5pbkxpbmspXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBtZXRob2QuYXBwbHkoc2VsZiwgW2VhdCwgdmFsdWVdKVxuXG4gICAgICAgICAgbWF0Y2hlZCA9IHZhbHVlTGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGhcblxuICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICBzZWxmLmZpbGUuZmFpbChuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AnKSwgZWF0Lm5vdygpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuZW9mID0gbm93KClcblxuICAgIHJldHVybiB0b2tlbnNcblxuICAgIC8vIFVwZGF0ZSBsaW5lLCBjb2x1bW4sIGFuZCBvZmZzZXQgYmFzZWQgb24gYHZhbHVlYC5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IC0xXG4gICAgICB2YXIgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nKVxuXG4gICAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpbmUrK1xuICAgICAgICBsYXN0SW5kZXggPSBpbmRleFxuICAgICAgICBpbmRleCA9IHN1YnZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSlcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gc3VidmFsdWUubGVuZ3RoIC0gbGFzdEluZGV4XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5lIGluIG9mZnNldCkge1xuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvbHVtbiArPSBvZmZzZXRbbGluZV1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPD0gb2Zmc2V0W2xpbmVdKSB7XG4gICAgICAgICAgY29sdW1uID0gb2Zmc2V0W2xpbmVdICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IG9mZnNldC4gIENhbGxlZCBiZWZvcmUgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBlYXRlbiB0byByZXRyaWV2ZSB0aGVcbiAgICAvLyByYW5nZeKAmXMgb2Zmc2V0cy5cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgaW5kZW50YXRpb24gPSBbXVxuICAgICAgdmFyIHBvcyA9IGxpbmUgKyAxXG5cbiAgICAgIC8vIERvbmUuICBDYWxsZWQgd2hlbiB0aGUgbGFzdCBjaGFyYWN0ZXIgaXMgZWF0ZW4gdG8gcmV0cmlldmUgdGhlIHJhbmdl4oCZc1xuICAgICAgLy8gb2Zmc2V0cy5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gbGluZSArIDFcblxuICAgICAgICB3aGlsZSAocG9zIDwgbGFzdCkge1xuICAgICAgICAgIGluZGVudGF0aW9uLnB1c2goKG9mZnNldFtwb3NdIHx8IDApICsgMSlcblxuICAgICAgICAgIHBvcysrXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZW50YXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgZnVuY3Rpb24gbm93KCkge1xuICAgICAgdmFyIHBvcyA9IHtsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbn1cblxuICAgICAgcG9zLm9mZnNldCA9IHNlbGYudG9PZmZzZXQocG9zKVxuXG4gICAgICByZXR1cm4gcG9zXG4gICAgfVxuXG4gICAgLy8gU3RvcmUgcG9zaXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbm9kZS5cbiAgICBmdW5jdGlvbiBQb3NpdGlvbihzdGFydCkge1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gICAgICB0aGlzLmVuZCA9IG5vdygpXG4gICAgfVxuXG4gICAgLy8gVGhyb3cgd2hlbiBhIHZhbHVlIGlzIGluY29ycmVjdGx5IGVhdGVuLiAgVGhpcyBzaG91bGRu4oCZdCBoYXBwZW4gYnV0IHdpbGxcbiAgICAvLyB0aHJvdyBvbiBuZXcsIGluY29ycmVjdCBydWxlcy5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVhdChzdWJ2YWx1ZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodmFsdWUuc2xpY2UoMCwgc3VidmFsdWUubGVuZ3RoKSAhPT0gc3VidmFsdWUpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSBzdGFjay10cmFjZS5cbiAgICAgICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0luY29ycmVjdGx5IGVhdGVuIHZhbHVlOiBwbGVhc2UgcmVwb3J0IHRoaXMgd2FybmluZyBvbiBodHRwczovL2dpdC5pby92ZzVGdCdcbiAgICAgICAgICApLFxuICAgICAgICAgIG5vdygpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXJrIHBvc2l0aW9uIGFuZCBwYXRjaCBgbm9kZS5wb3NpdGlvbmAuXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICB2YXIgYmVmb3JlID0gbm93KClcblxuICAgICAgcmV0dXJuIHVwZGF0ZVxuXG4gICAgICAvLyBBZGQgdGhlIHBvc2l0aW9uIHRvIGEgbm9kZS5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZShub2RlLCBpbmRlbnQpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gbm9kZS5wb3NpdGlvblxuICAgICAgICB2YXIgc3RhcnQgPSBwcmV2aW91cyA/IHByZXZpb3VzLnN0YXJ0IDogYmVmb3JlXG4gICAgICAgIHZhciBjb21iaW5lZCA9IFtdXG4gICAgICAgIHZhciBuID0gcHJldmlvdXMgJiYgcHJldmlvdXMuZW5kLmxpbmVcbiAgICAgICAgdmFyIGwgPSBiZWZvcmUubGluZVxuXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpXG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFscmVhZHkgYSBgcG9zaXRpb25gLCB0aGlzIG5vZGUgd2FzIG1lcmdlZC4gIEZpeGluZ1xuICAgICAgICAvLyBgc3RhcnRgIHdhc27igJl0IGhhcmQsIGJ1dCB0aGUgaW5kZW50IGlzIGRpZmZlcmVudC4gIEVzcGVjaWFsbHlcbiAgICAgICAgLy8gYmVjYXVzZSBzb21lIGluZm9ybWF0aW9uLCB0aGUgaW5kZW50IGJldHdlZW4gYG5gIGFuZCBgbGAgd2FzbuKAmXRcbiAgICAgICAgLy8gdHJhY2tlZC4gIEx1Y2tpbHksIHRoYXQgc3BhY2UgaXMgKHNob3VsZCBiZT8pIGVtcHR5LCBzbyB3ZSBjYW5cbiAgICAgICAgLy8gc2FmZWx5IGNoZWNrIGZvciBpdCBub3cuXG4gICAgICAgIGlmIChwcmV2aW91cyAmJiBpbmRlbnQgJiYgcHJldmlvdXMuaW5kZW50KSB7XG4gICAgICAgICAgY29tYmluZWQgPSBwcmV2aW91cy5pbmRlbnRcblxuICAgICAgICAgIGlmIChuIDwgbCkge1xuICAgICAgICAgICAgd2hpbGUgKCsrbiA8IGwpIHtcbiAgICAgICAgICAgICAgY29tYmluZWQucHVzaCgob2Zmc2V0W25dIHx8IDApICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tYmluZWQucHVzaChiZWZvcmUuY29sdW1uKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZGVudCA9IGNvbWJpbmVkLmNvbmNhdChpbmRlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnBvc2l0aW9uLmluZGVudCA9IGluZGVudCB8fCBbXVxuXG4gICAgICAgIHJldHVybiBub2RlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGBub2RlYCB0byBgcGFyZW50YHMgY2hpbGRyZW4gb3IgdG8gYHRva2Vuc2AuICBQZXJmb3JtcyBtZXJnZXMgd2hlcmVcbiAgICAvLyBwb3NzaWJsZS5cbiAgICBmdW5jdGlvbiBhZGQobm9kZSwgcGFyZW50KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0b2tlbnNcbiAgICAgIHZhciBwcmV2aW91cyA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgICB2YXIgZm5cblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cyAmJlxuICAgICAgICBub2RlLnR5cGUgPT09IHByZXZpb3VzLnR5cGUgJiZcbiAgICAgICAgKG5vZGUudHlwZSA9PT0gJ3RleHQnIHx8IG5vZGUudHlwZSA9PT0gJ2Jsb2NrcXVvdGUnKSAmJlxuICAgICAgICBtZXJnZWFibGUocHJldmlvdXMpICYmXG4gICAgICAgIG1lcmdlYWJsZShub2RlKVxuICAgICAgKSB7XG4gICAgICAgIGZuID0gbm9kZS50eXBlID09PSAndGV4dCcgPyBtZXJnZVRleHQgOiBtZXJnZUJsb2NrcXVvdGVcbiAgICAgICAgbm9kZSA9IGZuLmNhbGwoc2VsZiwgcHJldmlvdXMsIG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICE9PSBwcmV2aW91cykge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmF0U3RhcnQgJiYgdG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzZWxmLmV4aXRTdGFydCgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGBzdWJ2YWx1ZWAgZnJvbSBgdmFsdWVgLiAgYHN1YnZhbHVlYCBtdXN0IGJlIGF0IHRoZSBzdGFydCBvZlxuICAgIC8vIGB2YWx1ZWAuXG4gICAgZnVuY3Rpb24gZWF0KHN1YnZhbHVlKSB7XG4gICAgICB2YXIgaW5kZW50ID0gZ2V0T2Zmc2V0KClcbiAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpXG4gICAgICB2YXIgY3VycmVudCA9IG5vdygpXG5cbiAgICAgIHZhbGlkYXRlRWF0KHN1YnZhbHVlKVxuXG4gICAgICBhcHBseS5yZXNldCA9IHJlc2V0XG4gICAgICByZXNldC50ZXN0ID0gdGVzdFxuICAgICAgYXBwbHkudGVzdCA9IHRlc3RcblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShzdWJ2YWx1ZS5sZW5ndGgpXG5cbiAgICAgIHVwZGF0ZVBvc2l0aW9uKHN1YnZhbHVlKVxuXG4gICAgICBpbmRlbnQgPSBpbmRlbnQoKVxuXG4gICAgICByZXR1cm4gYXBwbHlcblxuICAgICAgLy8gQWRkIHRoZSBnaXZlbiBhcmd1bWVudHMsIGFkZCBgcG9zaXRpb25gIHRvIHRoZSByZXR1cm5lZCBub2RlLCBhbmRcbiAgICAgIC8vIHJldHVybiB0aGUgbm9kZS5cbiAgICAgIGZ1bmN0aW9uIGFwcGx5KG5vZGUsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gcG9zKGFkZChwb3Mobm9kZSksIHBhcmVudCksIGluZGVudClcbiAgICAgIH1cblxuICAgICAgLy8gRnVuY3Rpb25zIGp1c3QgbGlrZSBhcHBseSwgYnV0IHJlc2V0cyB0aGUgY29udGVudDogdGhlIGxpbmUgYW5kXG4gICAgICAvLyBjb2x1bW4gYXJlIHJldmVyc2VkLCBhbmQgdGhlIGVhdGVuIHZhbHVlIGlzIHJlLWFkZGVkLiAgIFRoaXMgaXNcbiAgICAgIC8vIHVzZWZ1bCBmb3Igbm9kZXMgd2l0aCBhIHNpbmdsZSB0eXBlIG9mIGNvbnRlbnQsIHN1Y2ggYXMgbGlzdHMgYW5kXG4gICAgICAvLyB0YWJsZXMuICBTZWUgYGFwcGx5YCBhYm92ZSBmb3Igd2hhdCBwYXJhbWV0ZXJzIGFyZSBleHBlY3RlZC5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB2YXIgbm9kZSA9IGFwcGx5LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcblxuICAgICAgICBsaW5lID0gY3VycmVudC5saW5lXG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uXG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZVxuXG4gICAgICAgIHJldHVybiBub2RlXG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3QgdGhlIHBvc2l0aW9uLCBhZnRlciBlYXRpbmcsIGFuZCByZXZlcnNlIHRvIGEgbm90LWVhdGVuIHN0YXRlLlxuICAgICAgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBvcyh7fSlcblxuICAgICAgICBsaW5lID0gY3VycmVudC5saW5lXG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uXG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZVxuXG4gICAgICAgIHJldHVybiByZXN1bHQucG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgd2hldGhlciBhIG5vZGUgaXMgbWVyZ2VhYmxlIHdpdGggYWRqYWNlbnQgbm9kZXMuXG5mdW5jdGlvbiBtZXJnZWFibGUobm9kZSkge1xuICB2YXIgc3RhcnRcbiAgdmFyIGVuZFxuXG4gIGlmIChub2RlLnR5cGUgIT09ICd0ZXh0JyB8fCAhbm9kZS5wb3NpdGlvbikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdGFydCA9IG5vZGUucG9zaXRpb24uc3RhcnRcbiAgZW5kID0gbm9kZS5wb3NpdGlvbi5lbmRcblxuICAvLyBPbmx5IG1lcmdlIG5vZGVzIHdoaWNoIG9jY3VweSB0aGUgc2FtZSBzaXplIGFzIHRoZWlyIGB2YWx1ZWAuXG4gIHJldHVybiAoXG4gICAgc3RhcnQubGluZSAhPT0gZW5kLmxpbmUgfHwgZW5kLmNvbHVtbiAtIHN0YXJ0LmNvbHVtbiA9PT0gbm9kZS52YWx1ZS5sZW5ndGhcbiAgKVxufVxuXG4vLyBNZXJnZSB0d28gdGV4dCBub2RlczogYG5vZGVgIGludG8gYHByZXZgLlxuZnVuY3Rpb24gbWVyZ2VUZXh0KHByZXZpb3VzLCBub2RlKSB7XG4gIHByZXZpb3VzLnZhbHVlICs9IG5vZGUudmFsdWVcblxuICByZXR1cm4gcHJldmlvdXNcbn1cblxuLy8gTWVyZ2UgdHdvIGJsb2NrcXVvdGVzOiBgbm9kZWAgaW50byBgcHJldmAsIHVubGVzcyBpbiBDb21tb25NYXJrIG9yIGdmbSBtb2Rlcy5cbmZ1bmN0aW9uIG1lcmdlQmxvY2txdW90ZShwcmV2aW91cywgbm9kZSkge1xuICBpZiAodGhpcy5vcHRpb25zLmNvbW1vbm1hcmsgfHwgdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBwcmV2aW91cy5jaGlsZHJlbiA9IHByZXZpb3VzLmNoaWxkcmVuLmNvbmNhdChub2RlLmNoaWxkcmVuKVxuXG4gIHJldHVybiBwcmV2aW91c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG5cbi8vIEZhY3RvcnkgdG8gZGUtZXNjYXBlIGEgdmFsdWUsIGJhc2VkIG9uIGEgbGlzdCBhdCBga2V5YCBpbiBgY3R4YC5cbmZ1bmN0aW9uIGZhY3RvcnkoY3R4LCBrZXkpIHtcbiAgcmV0dXJuIHVuZXNjYXBlXG5cbiAgLy8gRGUtZXNjYXBlIGEgc3RyaW5nIHVzaW5nIHRoZSBleHByZXNzaW9uIGF0IGBrZXlgIGluIGBjdHhgLlxuICBmdW5jdGlvbiB1bmVzY2FwZSh2YWx1ZSkge1xuICAgIHZhciBwcmV2aW91cyA9IDBcbiAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGJhY2tzbGFzaClcbiAgICB2YXIgZXNjYXBlID0gY3R4W2tleV1cbiAgICB2YXIgcXVldWUgPSBbXVxuICAgIHZhciBjaGFyYWN0ZXJcblxuICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldmlvdXMsIGluZGV4KSlcbiAgICAgIHByZXZpb3VzID0gaW5kZXggKyAxXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocHJldmlvdXMpXG5cbiAgICAgIC8vIElmIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyIGlzIG5vdCBhIHZhbGlkIGVzY2FwZSwgYWRkIHRoZSBzbGFzaC5cbiAgICAgIGlmICghY2hhcmFjdGVyIHx8IGVzY2FwZS5pbmRleE9mKGNoYXJhY3RlcikgPT09IC0xKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goYmFja3NsYXNoKVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoYmFja3NsYXNoLCBwcmV2aW91cyArIDEpXG4gICAgfVxuXG4gICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwcmV2aW91cykpXG5cbiAgICByZXR1cm4gcXVldWUuam9pbignJylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb25cblxudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHNwYWNlU2l6ZSA9IDFcbnZhciB0YWJTaXplID0gNFxuXG4vLyBHZXRzIGluZGVudGF0aW9uIGluZm9ybWF0aW9uIGZvciBhIGxpbmUuXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBpbmRlbnQgPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBzdG9wcyA9IHt9XG4gIHZhciBzaXplXG4gIHZhciBsYXN0SW5kZW50ID0gMFxuXG4gIHdoaWxlIChjaGFyYWN0ZXIgPT09IHRhYiB8fCBjaGFyYWN0ZXIgPT09IHNwYWNlKSB7XG4gICAgc2l6ZSA9IGNoYXJhY3RlciA9PT0gdGFiID8gdGFiU2l6ZSA6IHNwYWNlU2l6ZVxuXG4gICAgaW5kZW50ICs9IHNpemVcblxuICAgIGlmIChzaXplID4gMSkge1xuICAgICAgaW5kZW50ID0gTWF0aC5mbG9vcihpbmRlbnQgLyBzaXplKSAqIHNpemVcbiAgICB9XG5cbiAgICB3aGlsZSAobGFzdEluZGVudCA8IGluZGVudCkge1xuICAgICAgc3RvcHNbKytsYXN0SW5kZW50XSA9IGluZGV4XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gIH1cblxuICByZXR1cm4ge2luZGVudDogaW5kZW50LCBzdG9wczogc3RvcHN9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGF0dHJpYnV0ZU5hbWUgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonXG52YXIgdW5xdW90ZWQgPSAnW15cIlxcJz08PmBcXFxcdTAwMDAtXFxcXHUwMDIwXSsnXG52YXIgc2luZ2xlUXVvdGVkID0gXCInW14nXSonXCJcbnZhciBkb3VibGVRdW90ZWQgPSAnXCJbXlwiXSpcIidcbnZhciBhdHRyaWJ1dGVWYWx1ZSA9XG4gICcoPzonICsgdW5xdW90ZWQgKyAnfCcgKyBzaW5nbGVRdW90ZWQgKyAnfCcgKyBkb3VibGVRdW90ZWQgKyAnKSdcbnZhciBhdHRyaWJ1dGUgPVxuICAnKD86XFxcXHMrJyArIGF0dHJpYnV0ZU5hbWUgKyAnKD86XFxcXHMqPVxcXFxzKicgKyBhdHRyaWJ1dGVWYWx1ZSArICcpPyknXG52YXIgb3BlblRhZyA9ICc8W0EtWmEtel1bQS1aYS16MC05XFxcXC1dKicgKyBhdHRyaWJ1dGUgKyAnKlxcXFxzKlxcXFwvPz4nXG52YXIgY2xvc2VUYWcgPSAnPFxcXFwvW0EtWmEtel1bQS1aYS16MC05XFxcXC1dKlxcXFxzKj4nXG52YXIgY29tbWVudCA9ICc8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+J1xudmFyIHByb2Nlc3NpbmcgPSAnPFs/XS4qP1s/XT4nXG52YXIgZGVjbGFyYXRpb24gPSAnPCFbQS1aYS16XStcXFxccytbXj5dKj4nXG52YXIgY2RhdGEgPSAnPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+J1xuXG5leHBvcnRzLm9wZW5DbG9zZVRhZyA9IG5ldyBSZWdFeHAoJ14oPzonICsgb3BlblRhZyArICd8JyArIGNsb3NlVGFnICsgJyknKVxuXG5leHBvcnRzLnRhZyA9IG5ldyBSZWdFeHAoXG4gICdeKD86JyArXG4gICAgb3BlblRhZyArXG4gICAgJ3wnICtcbiAgICBjbG9zZVRhZyArXG4gICAgJ3wnICtcbiAgICBjb21tZW50ICtcbiAgICAnfCcgK1xuICAgIHByb2Nlc3NpbmcgK1xuICAgICd8JyArXG4gICAgZGVjbGFyYXRpb24gK1xuICAgICd8JyArXG4gICAgY2RhdGEgK1xuICAgICcpJ1xuKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJydXB0XG5cbmZ1bmN0aW9uIGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIGN0eCwgcGFyYW1ldGVycykge1xuICB2YXIgbGVuZ3RoID0gaW50ZXJydXB0b3JzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW50ZXJydXB0b3JcbiAgdmFyIGNvbmZpZ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaW50ZXJydXB0b3IgPSBpbnRlcnJ1cHRvcnNbaW5kZXhdXG4gICAgY29uZmlnID0gaW50ZXJydXB0b3JbMV0gfHwge31cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5wZWRhbnRpYyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBjb25maWcucGVkYW50aWMgIT09IGN0eC5vcHRpb25zLnBlZGFudGljXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5jb21tb25tYXJrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbmZpZy5jb21tb25tYXJrICE9PSBjdHgub3B0aW9ucy5jb21tb25tYXJrXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0b2tlbml6ZXJzW2ludGVycnVwdG9yWzBdXS5hcHBseShjdHgsIHBhcmFtZXRlcnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb2xsYXBzZVdoaXRlU3BhY2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbi8vIE5vcm1hbGl6ZSBhbiBpZGVudGlmaWVyLiAgQ29sbGFwc2VzIG11bHRpcGxlIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgaW50byBhXG4vLyBzaW5nbGUgc3BhY2UsIGFuZCByZW1vdmVzIGNhc2luZy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gY29sbGFwc2VXaGl0ZVNwYWNlKHZhbHVlKS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBnZXRJbmRlbnQgPSByZXF1aXJlKCcuL2dldC1pbmRlbnRhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb25cblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG4vLyBSZW1vdmUgdGhlIG1pbmltdW0gaW5kZW50IGZyb20gZXZlcnkgbGluZSBpbiBgdmFsdWVgLiAgU3VwcG9ydHMgYm90aCB0YWIsXG4vLyBzcGFjZWQsIGFuZCBtaXhlZCBpbmRlbnRhdGlvbiAoYXMgd2VsbCBhcyBwb3NzaWJsZSkuXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSwgbWF4aW11bSkge1xuICB2YXIgdmFsdWVzID0gdmFsdWUuc3BsaXQobGluZUZlZWQpXG4gIHZhciBwb3NpdGlvbiA9IHZhbHVlcy5sZW5ndGggKyAxXG4gIHZhciBtaW5JbmRlbnQgPSBJbmZpbml0eVxuICB2YXIgbWF0cml4ID0gW11cbiAgdmFyIGluZGV4XG4gIHZhciBpbmRlbnRhdGlvblxuICB2YXIgc3RvcHNcblxuICB2YWx1ZXMudW5zaGlmdChyZXBlYXQoc3BhY2UsIG1heGltdW0pICsgZXhjbGFtYXRpb25NYXJrKVxuXG4gIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgaW5kZW50YXRpb24gPSBnZXRJbmRlbnQodmFsdWVzW3Bvc2l0aW9uXSlcblxuICAgIG1hdHJpeFtwb3NpdGlvbl0gPSBpbmRlbnRhdGlvbi5zdG9wc1xuXG4gICAgaWYgKHRyaW0odmFsdWVzW3Bvc2l0aW9uXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQpIHtcbiAgICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQgPiAwICYmIGluZGVudGF0aW9uLmluZGVudCA8IG1pbkluZGVudCkge1xuICAgICAgICBtaW5JbmRlbnQgPSBpbmRlbnRhdGlvbi5pbmRlbnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWluSW5kZW50ID0gSW5maW5pdHlcblxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAobWluSW5kZW50ICE9PSBJbmZpbml0eSkge1xuICAgIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aFxuXG4gICAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICAgIHN0b3BzID0gbWF0cml4W3Bvc2l0aW9uXVxuICAgICAgaW5kZXggPSBtaW5JbmRlbnRcblxuICAgICAgd2hpbGUgKGluZGV4ICYmICEoaW5kZXggaW4gc3RvcHMpKSB7XG4gICAgICAgIGluZGV4LS1cbiAgICAgIH1cblxuICAgICAgdmFsdWVzW3Bvc2l0aW9uXSA9IHZhbHVlc1twb3NpdGlvbl0uc2xpY2Uoc3RvcHNbaW5kZXhdICsgMSlcbiAgICB9XG4gIH1cblxuICB2YWx1ZXMuc2hpZnQoKVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihsaW5lRmVlZClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=