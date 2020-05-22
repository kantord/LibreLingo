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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9ibG9jay1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvbGluay5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdGFnLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3VybC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9hdXRvLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9ibGFuay1saW5lLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1mZW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVsZXRlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaGVhZGluZy1zZXRleHQuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWJsb2NrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9saW5rLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3JlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RhYmxlLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdXJsLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2dldC1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLy8vaG9tZS9rZGFuaS9yZXBvcy9MaWJyZUxpbmdvL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8vLy9ob21lL2tkYW5pL3JlcG9zL0xpYnJlTGluZ28vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy8vL2hvbWUva2RhbmkvcmVwb3MvTGlicmVMaW5nby9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL3JlbW92ZS1pbmRlbnRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLG9EQUFTO0FBQy9CLFlBQVksbUJBQU8sQ0FBQyxvREFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsc0VBQWlCOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRVk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLG9EQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxrRUFBZ0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBc0Q7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BJWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsOENBQU07QUFDekIsZ0JBQWdCLG1CQUFPLENBQUMsZ0ZBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVDQUF1QztBQUNyRDs7Ozs7Ozs7Ozs7OztBQzNIWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsNEVBQWlCOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCLGNBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVQWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsZ0VBQWU7QUFDcEMsV0FBVyxtQkFBTyxDQUFDLDRFQUFxQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pHWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsd0ZBQXVCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVHWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDbEQsZ0JBQWdCLG1CQUFPLENBQUMsZ0ZBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxxQkFBcUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdElZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEZZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLG9GQUF5Qjs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsNENBQTRDOztBQUUzRTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLDREQUE0RDtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZPWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0I7QUFDbEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxrREFBUTtBQUM3QixhQUFhLG1CQUFPLENBQUMsa0VBQWdCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQywwREFBWTtBQUNsQyxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDNUMsaUJBQWlCLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyx3RUFBZTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFCQUFxQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLHdEQUF3RDtBQUMvRTs7Ozs7Ozs7Ozs7OztBQ2pOWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1RZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7QUNwQ1k7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ1k7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDhFQUFzQjs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsZ0VBQWU7QUFDcEMsZ0JBQWdCLG1CQUFPLENBQUMsc0ZBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsImZpbGUiOiJlZDQxMGZkZmI4ODdhZGY1OGU2ZC8wLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHVuaGVyaXQgPSByZXF1aXJlKCd1bmhlcml0JylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuL2xpYi9wYXJzZXIuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5wYXJzZS5QYXJzZXIgPSBQYXJzZXJcblxuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSB0aGlzLmRhdGEoJ3NldHRpbmdzJylcbiAgdmFyIExvY2FsID0gdW5oZXJpdChQYXJzZXIpXG5cbiAgTG9jYWwucHJvdG90eXBlLm9wdGlvbnMgPSB4dGVuZChMb2NhbC5wcm90b3R5cGUub3B0aW9ucywgc2V0dGluZ3MsIG9wdGlvbnMpXG5cbiAgdGhpcy5QYXJzZXIgPSBMb2NhbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbWV0YScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAnc291cmNlJyxcbiAgJ3RpdGxlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gRmFjdG9yeSB0byBjcmVhdGUgYW4gZW50aXR5IGRlY29kZXIuXG5mdW5jdGlvbiBmYWN0b3J5KGN0eCkge1xuICBkZWNvZGVyLnJhdyA9IGRlY29kZVJhd1xuXG4gIHJldHVybiBkZWNvZGVyXG5cbiAgLy8gTm9ybWFsaXplIGBwb3NpdGlvbmAgdG8gYWRkIGFuIGBpbmRlbnRgLlxuICBmdW5jdGlvbiBub3JtYWxpemUocG9zaXRpb24pIHtcbiAgICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmVcbiAgICB2YXIgcmVzdWx0ID0gW11cblxuICAgIHdoaWxlICgrK2xpbmUpIHtcbiAgICAgIGlmICghKGxpbmUgaW4gb2Zmc2V0cykpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goKG9mZnNldHNbbGluZV0gfHwgMCkgKyAxKVxuICAgIH1cblxuICAgIHJldHVybiB7c3RhcnQ6IHBvc2l0aW9uLCBpbmRlbnQ6IHJlc3VsdH1cbiAgfVxuXG4gIC8vIERlY29kZSBgdmFsdWVgIChhdCBgcG9zaXRpb25gKSBpbnRvIHRleHQtbm9kZXMuXG4gIGZ1bmN0aW9uIGRlY29kZXIodmFsdWUsIHBvc2l0aW9uLCBoYW5kbGVyKSB7XG4gICAgZW50aXRpZXModmFsdWUsIHtcbiAgICAgIHBvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLFxuICAgICAgd2FybmluZzogaGFuZGxlV2FybmluZyxcbiAgICAgIHRleHQ6IGhhbmRsZXIsXG4gICAgICByZWZlcmVuY2U6IGhhbmRsZXIsXG4gICAgICB0ZXh0Q29udGV4dDogY3R4LFxuICAgICAgcmVmZXJlbmNlQ29udGV4dDogY3R4XG4gICAgfSlcbiAgfVxuXG4gIC8vIERlY29kZSBgdmFsdWVgIChhdCBgcG9zaXRpb25gKSBpbnRvIGEgc3RyaW5nLlxuICBmdW5jdGlvbiBkZWNvZGVSYXcodmFsdWUsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzKFxuICAgICAgdmFsdWUsXG4gICAgICB4dGVuZChvcHRpb25zLCB7cG9zaXRpb246IG5vcm1hbGl6ZShwb3NpdGlvbiksIHdhcm5pbmc6IGhhbmRsZVdhcm5pbmd9KVxuICAgIClcbiAgfVxuXG4gIC8vIEhhbmRsZSBhIHdhcm5pbmcuXG4gIC8vIFNlZSA8aHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9wYXJzZS1lbnRpdGllcz4gZm9yIHRoZSB3YXJuaW5ncy5cbiAgZnVuY3Rpb24gaGFuZGxlV2FybmluZyhyZWFzb24sIHBvc2l0aW9uLCBjb2RlKSB7XG4gICAgaWYgKGNvZGUgIT09IDMpIHtcbiAgICAgIGN0eC5maWxlLm1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbilcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIGdmbTogdHJ1ZSxcbiAgY29tbW9ubWFyazogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgYmxvY2tzOiByZXF1aXJlKCcuL2Jsb2NrLWVsZW1lbnRzJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCdcXG4nLCBmcm9tSW5kZXgpXG5cbiAgd2hpbGUgKGluZGV4ID4gZnJvbUluZGV4KSB7XG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCAtIDEpICE9PSAnICcpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgcmV0dXJuIGluZGV4XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ2AnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ35+JywgZnJvbUluZGV4KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcblxudmFyIHBsdXNTaWduID0gNDMgLy8gJysnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vI2V4dGVuZGVkLWVtYWlsLWF1dG9saW5rPlxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBhdFxuICB2YXIgcG9zaXRpb25cblxuICBpZiAoIXRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGF0ID0gdmFsdWUuaW5kZXhPZignQCcsIGZyb21JbmRleClcblxuICBpZiAoYXQgPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBwb3NpdGlvbiA9IGF0XG5cbiAgaWYgKHBvc2l0aW9uID09PSBmcm9tSW5kZXggfHwgIWlzR2ZtQXRleHQodmFsdWUuY2hhckNvZGVBdChwb3NpdGlvbiAtIDEpKSkge1xuICAgIHJldHVybiBsb2NhdGUuY2FsbChzZWxmLCB2YWx1ZSwgYXQgKyAxKVxuICB9XG5cbiAgd2hpbGUgKHBvc2l0aW9uID4gZnJvbUluZGV4ICYmIGlzR2ZtQXRleHQodmFsdWUuY2hhckNvZGVBdChwb3NpdGlvbiAtIDEpKSkge1xuICAgIHBvc2l0aW9uLS1cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvblxufVxuXG5mdW5jdGlvbiBpc0dmbUF0ZXh0KGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gcGx1c1NpZ24gfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gZG90IHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKicsIGZyb21JbmRleClcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfJywgZnJvbUluZGV4KVxuXG4gIGlmICh1bmRlcnNjb3JlID09PSAtMSkge1xuICAgIHJldHVybiBhc3Rlcmlza1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlXG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ1xcXFwnLCBmcm9tSW5kZXgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxpbmsgPSB2YWx1ZS5pbmRleE9mKCdbJywgZnJvbUluZGV4KVxuICB2YXIgaW1hZ2UgPSB2YWx1ZS5pbmRleE9mKCchWycsIGZyb21JbmRleClcblxuICBpZiAoaW1hZ2UgPT09IC0xKSB7XG4gICAgcmV0dXJuIGxpbmtcbiAgfVxuXG4gIC8vIExpbmsgY2FuIG5ldmVyIGJlIGAtMWAgaWYgYW4gaW1hZ2UgaXMgZm91bmQsIHNvIHdlIGRvbuKAmXQgbmVlZCB0byBjaGVja1xuICAvLyBmb3IgdGhhdCA6KVxuICByZXR1cm4gbGluayA8IGltYWdlID8gbGluayA6IGltYWdlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGVcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKionLCBmcm9tSW5kZXgpXG4gIHZhciB1bmRlcnNjb3JlID0gdmFsdWUuaW5kZXhPZignX18nLCBmcm9tSW5kZXgpXG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrXG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmVcbiAgfVxuXG4gIHJldHVybiB1bmRlcnNjb3JlIDwgYXN0ZXJpc2sgPyB1bmRlcnNjb3JlIDogYXN0ZXJpc2tcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignPCcsIGZyb21JbmRleClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZVxuXG52YXIgdmFsdWVzID0gWyd3d3cuJywgJ2h0dHA6Ly8nLCAnaHR0cHM6Ly8nXVxuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgbWluID0gLTFcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHBvc2l0aW9uXG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIG1pblxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHZhbHVlLmluZGV4T2YodmFsdWVzW2luZGV4XSwgZnJvbUluZGV4KVxuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAtMSAmJiAobWluID09PSAtMSB8fCBwb3NpdGlvbiA8IG1pbikpIHtcbiAgICAgIG1pbiA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pblxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciByZW1vdmVQb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcmVtb3ZlLXBvc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGxpbmVCcmVha3NFeHByZXNzaW9uID0gL1xcclxcbnxcXHIvZ1xuXG4vLyBQYXJzZSB0aGUgYm91bmQgZmlsZS5cbmZ1bmN0aW9uIHBhcnNlKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHZhbHVlID0gU3RyaW5nKHNlbGYuZmlsZSlcbiAgdmFyIHN0YXJ0ID0ge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICB2YXIgY29udGVudCA9IHh0ZW5kKHN0YXJ0KVxuICB2YXIgbm9kZVxuXG4gIC8vIENsZWFuIG5vbi11bml4IG5ld2xpbmVzOiBgXFxyXFxuYCBhbmQgYFxccmAgYXJlIGFsbCBjaGFuZ2VkIHRvIGBcXG5gLlxuICAvLyBUaGlzIHNob3VsZCBub3QgYWZmZWN0IHBvc2l0aW9uYWwgaW5mb3JtYXRpb24uXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShsaW5lQnJlYWtzRXhwcmVzc2lvbiwgbGluZUZlZWQpXG5cbiAgLy8gQk9NLlxuICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKVxuXG4gICAgY29udGVudC5jb2x1bW4rK1xuICAgIGNvbnRlbnQub2Zmc2V0KytcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogJ3Jvb3QnLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplQmxvY2sodmFsdWUsIGNvbnRlbnQpLFxuICAgIHBvc2l0aW9uOiB7c3RhcnQ6IHN0YXJ0LCBlbmQ6IHNlbGYuZW9mIHx8IHh0ZW5kKHN0YXJ0KX1cbiAgfVxuXG4gIGlmICghc2VsZi5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgcmVtb3ZlUG9zaXRpb24obm9kZSwgdHJ1ZSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRvZ2dsZSA9IHJlcXVpcmUoJ3N0YXRlLXRvZ2dsZScpXG52YXIgdmZpbGVMb2NhdGlvbiA9IHJlcXVpcmUoJ3ZmaWxlLWxvY2F0aW9uJylcbnZhciB1bmVzY2FwZSA9IHJlcXVpcmUoJy4vdW5lc2NhcGUnKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJylcbnZhciB0b2tlbml6ZXIgPSByZXF1aXJlKCcuL3Rva2VuaXplcicpXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyXG5cbmZ1bmN0aW9uIFBhcnNlcihkb2MsIGZpbGUpIHtcbiAgdGhpcy5maWxlID0gZmlsZVxuICB0aGlzLm9mZnNldCA9IHt9XG4gIHRoaXMub3B0aW9ucyA9IHh0ZW5kKHRoaXMub3B0aW9ucylcbiAgdGhpcy5zZXRPcHRpb25zKHt9KVxuXG4gIHRoaXMuaW5MaXN0ID0gZmFsc2VcbiAgdGhpcy5pbkJsb2NrID0gZmFsc2VcbiAgdGhpcy5pbkxpbmsgPSBmYWxzZVxuICB0aGlzLmF0U3RhcnQgPSB0cnVlXG5cbiAgdGhpcy50b09mZnNldCA9IHZmaWxlTG9jYXRpb24oZmlsZSkudG9PZmZzZXRcbiAgdGhpcy51bmVzY2FwZSA9IHVuZXNjYXBlKHRoaXMsICdlc2NhcGUnKVxuICB0aGlzLmRlY29kZSA9IGRlY29kZSh0aGlzKVxufVxuXG52YXIgcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlXG5cbi8vIEV4cG9zZSBjb3JlLlxucHJvdG8uc2V0T3B0aW9ucyA9IHJlcXVpcmUoJy4vc2V0LW9wdGlvbnMnKVxucHJvdG8ucGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLy8gRXhwb3NlIGBkZWZhdWx0c2AuXG5wcm90by5vcHRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpXG5cbi8vIEVudGVyIGFuZCBleGl0IGhlbHBlcnMuXG5wcm90by5leGl0U3RhcnQgPSB0b2dnbGUoJ2F0U3RhcnQnLCB0cnVlKVxucHJvdG8uZW50ZXJMaXN0ID0gdG9nZ2xlKCdpbkxpc3QnLCBmYWxzZSlcbnByb3RvLmVudGVyTGluayA9IHRvZ2dsZSgnaW5MaW5rJywgZmFsc2UpXG5wcm90by5lbnRlckJsb2NrID0gdG9nZ2xlKCdpbkJsb2NrJywgZmFsc2UpXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgcGFyYWdyYXBoOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBBIHBhcmFncmFwaCwgZm9sbG93ZWQgYnkgYSB0aGVtYXRpYyBicmVhay5cbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIHBhcmFncmFwaC5cbnByb3RvLmludGVycnVwdFBhcmFncmFwaCA9IFtcbiAgWyd0aGVtYXRpY0JyZWFrJ10sXG4gIFsnbGlzdCddLFxuICBbJ2F0eEhlYWRpbmcnXSxcbiAgWydmZW5jZWRDb2RlJ10sXG4gIFsnYmxvY2txdW90ZSddLFxuICBbJ2h0bWwnXSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dXG5cbi8vIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgbGlzdDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gLSBPbmVcbi8vIF9fX1xuLy8gYGBgXG4vL1xuLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ0gdGhlIGxpc3QuXG5wcm90by5pbnRlcnJ1cHRMaXN0ID0gW1xuICBbJ2F0eEhlYWRpbmcnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIGJsb2NrcXVvdGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vID4gQSBwYXJhZ3JhcGguXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdIHRoZSBibG9ja3F1b3RlLlxucHJvdG8uaW50ZXJydXB0QmxvY2txdW90ZSA9IFtcbiAgWydpbmRlbnRlZENvZGUnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2ZlbmNlZENvZGUnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2F0eEhlYWRpbmcnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ3NldGV4dEhlYWRpbmcnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ3RoZW1hdGljQnJlYWsnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2h0bWwnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2xpc3QnLCB7Y29tbW9ubWFyazogdHJ1ZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXVxuXG4vLyBIYW5kbGVycy5cbnByb3RvLmJsb2NrVG9rZW5pemVycyA9IHtcbiAgYmxhbmtMaW5lOiByZXF1aXJlKCcuL3Rva2VuaXplL2JsYW5rLWxpbmUnKSxcbiAgaW5kZW50ZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQnKSxcbiAgZmVuY2VkQ29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWZlbmNlZCcpLFxuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2Jsb2NrcXVvdGUnKSxcbiAgYXR4SGVhZGluZzogcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eCcpLFxuICB0aGVtYXRpY0JyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrJyksXG4gIGxpc3Q6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGlzdCcpLFxuICBzZXRleHRIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctc2V0ZXh0JyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvaHRtbC1ibG9jaycpLFxuICBkZWZpbml0aW9uOiByZXF1aXJlKCcuL3Rva2VuaXplL2RlZmluaXRpb24nKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGFibGUnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3Rva2VuaXplL3BhcmFncmFwaCcpXG59XG5cbnByb3RvLmlubGluZVRva2VuaXplcnMgPSB7XG4gIGVzY2FwZTogcmVxdWlyZSgnLi90b2tlbml6ZS9lc2NhcGUnKSxcbiAgYXV0b0xpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvYXV0by1saW5rJyksXG4gIHVybDogcmVxdWlyZSgnLi90b2tlbml6ZS91cmwnKSxcbiAgZW1haWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvZW1haWwnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWlubGluZScpLFxuICBsaW5rOiByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmsnKSxcbiAgcmVmZXJlbmNlOiByZXF1aXJlKCcuL3Rva2VuaXplL3JlZmVyZW5jZScpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvc3Ryb25nJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL3Rva2VuaXplL2VtcGhhc2lzJyksXG4gIGRlbGV0aW9uOiByZXF1aXJlKCcuL3Rva2VuaXplL2RlbGV0ZScpLFxuICBjb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5saW5lJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL2JyZWFrJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGV4dCcpXG59XG5cbi8vIEV4cG9zZSBwcmVjZWRlbmNlLlxucHJvdG8uYmxvY2tNZXRob2RzID0ga2V5cyhwcm90by5ibG9ja1Rva2VuaXplcnMpXG5wcm90by5pbmxpbmVNZXRob2RzID0ga2V5cyhwcm90by5pbmxpbmVUb2tlbml6ZXJzKVxuXG4vLyBUb2tlbml6ZXJzLlxucHJvdG8udG9rZW5pemVCbG9jayA9IHRva2VuaXplcignYmxvY2snKVxucHJvdG8udG9rZW5pemVJbmxpbmUgPSB0b2tlbml6ZXIoJ2lubGluZScpXG5wcm90by50b2tlbml6ZUZhY3RvcnkgPSB0b2tlbml6ZXJcblxuLy8gR2V0IGFsbCBrZXlzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIga2V5XG5cbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXN1bHQucHVzaChrZXkpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVzY2FwZXMgPSByZXF1aXJlKCdtYXJrZG93bi1lc2NhcGVzJylcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE9wdGlvbnNcblxuZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY3VycmVudCA9IHNlbGYub3B0aW9uc1xuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0geHRlbmQob3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyBvcHRpb25zICsgJ2AgZm9yIHNldHRpbmcgYG9wdGlvbnNgJylcbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgdmFsdWUgPSBvcHRpb25zW2tleV1cblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGN1cnJlbnRba2V5XVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChrZXkgIT09ICdibG9ja3MnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSB8fFxuICAgICAgKGtleSA9PT0gJ2Jsb2NrcycgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgdmFsdWUgYCcgKyB2YWx1ZSArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zLicgKyBrZXkgKyAnYCdcbiAgICAgIClcbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgc2VsZi5vcHRpb25zID0gb3B0aW9uc1xuICBzZWxmLmVzY2FwZSA9IGVzY2FwZXMob3B0aW9ucylcblxuICByZXR1cm4gc2VsZlxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJylcblxubW9kdWxlLmV4cG9ydHMgPSBhdXRvTGlua1xuYXV0b0xpbmsubG9jYXRvciA9IGxvY2F0ZVxuYXV0b0xpbmsubm90SW5MaW5rID0gdHJ1ZVxuXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGF0U2lnbiA9ICdAJ1xudmFyIHNsYXNoID0gJy8nXG52YXIgbWFpbHRvID0gJ21haWx0bzonXG52YXIgbWFpbHRvTGVuZ3RoID0gbWFpbHRvLmxlbmd0aFxuXG5mdW5jdGlvbiBhdXRvTGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgaGFzQXRDaGFyYWN0ZXIgPSBmYWxzZVxuICB2YXIgbGluayA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG5vd1xuICB2YXIgY29udGVudFxuICB2YXIgdG9rZW5pemVyc1xuICB2YXIgZXhpdFxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09IGxlc3NUaGFuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIHN1YnZhbHVlID0gbGVzc1RoYW5cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICB3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gZ3JlYXRlclRoYW4gfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gYXRTaWduIHx8XG4gICAgICAoY2hhcmFjdGVyID09PSAnOicgJiYgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IHNsYXNoKVxuICAgICkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsaW5rICs9IHF1ZXVlXG4gIHF1ZXVlID0gJydcblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIGxpbmsgKz0gY2hhcmFjdGVyXG4gIGluZGV4KytcblxuICBpZiAoY2hhcmFjdGVyID09PSBhdFNpZ24pIHtcbiAgICBoYXNBdENoYXJhY3RlciA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hhcmFjdGVyICE9PSAnOicgfHwgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IHNsYXNoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsaW5rICs9IHNsYXNoXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB8fCBjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoIXF1ZXVlIHx8IGNoYXJhY3RlciAhPT0gZ3JlYXRlclRoYW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBsaW5rICs9IHF1ZXVlXG4gIGNvbnRlbnQgPSBsaW5rXG4gIHN1YnZhbHVlICs9IGxpbmsgKyBjaGFyYWN0ZXJcbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4rK1xuICBub3cub2Zmc2V0KytcblxuICBpZiAoaGFzQXRDaGFyYWN0ZXIpIHtcbiAgICBpZiAobGluay5zbGljZSgwLCBtYWlsdG9MZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IG1haWx0bykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UobWFpbHRvTGVuZ3RoKVxuICAgICAgbm93LmNvbHVtbiArPSBtYWlsdG9MZW5ndGhcbiAgICAgIG5vdy5vZmZzZXQgKz0gbWFpbHRvTGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsgPSBtYWlsdG8gKyBsaW5rXG4gICAgfVxuICB9XG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIGF1dG9saW5rcy5cbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgY29udGVudCA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6IGRlY29kZShsaW5rLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY29udGVudFxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIEEgbGluZSBjb250YWluaW5nIG5vIGNoYXJhY3RlcnMsIG9yIGEgbGluZSBjb250YWluaW5nIG9ubHkgc3BhY2VzIChVKzAwMjApIG9yXG4vLyB0YWJzIChVKzAwMDkpLCBpcyBjYWxsZWQgYSBibGFuayBsaW5lLlxuLy8gU2VlIDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jYmxhbmstbGluZT4uXG52YXIgcmVCbGFua0xpbmUgPSAvXlsgXFx0XSooXFxufCQpL1xuXG4vLyBOb3RlIHRoYXQgdGhvdWdoIGJsYW5rIGxpbmVzIHBsYXkgYSBzcGVjaWFsIHJvbGUgaW4gbGlzdHMgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIHRoZSBsaXN0IGlzIHRpZ2h0IG9yIGxvb3NlXG4vLyAoPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNibGFuay1saW5lcz4pLCBpdOKAmXMgZG9uZSBieSB0aGUgbGlzdFxuLy8gdG9rZW5pemVyIGFuZCB0aGlzIGJsYW5rIGxpbmUgdG9rZW5pemVyIGRvZXMgbm90IGhhdmUgdG8gYmUgcmVzcG9uc2libGUgZm9yXG4vLyB0aGF0LlxuLy8gVGhlcmVmb3JlLCBjb25maWdzIHN1Y2ggYXMgYGJsYW5rTGluZS5ub3RJbkxpc3RgIGRvIG5vdCBoYXZlIHRvIGJlIHNldCBoZXJlLlxubW9kdWxlLmV4cG9ydHMgPSBibGFua0xpbmVcblxuZnVuY3Rpb24gYmxhbmtMaW5lKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbWF0Y2hcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbWF0Y2ggPSByZUJsYW5rTGluZS5leGVjKHZhbHVlLnNsaWNlKGluZGV4KSlcblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIHN1YnZhbHVlICs9IG1hdGNoWzBdXG4gIH1cblxuICBpZiAoc3VidmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZWF0KHN1YnZhbHVlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcblxuZnVuY3Rpb24gYmxvY2txdW90ZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvZmZzZXRzID0gc2VsZi5vZmZzZXRcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRCbG9ja3F1b3RlXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIGN1cnJlbnRMaW5lID0gbm93LmxpbmVcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGNvbnRlbnRzID0gW11cbiAgdmFyIGluZGVudHMgPSBbXVxuICB2YXIgYWRkXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcmVzdFxuICB2YXIgbmV4dEluZGV4XG4gIHZhciBjb250ZW50XG4gIHZhciBsaW5lXG4gIHZhciBzdGFydEluZGV4XG4gIHZhciBwcmVmaXhlZFxuICB2YXIgZXhpdFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBncmVhdGVyVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpbmRleCA9IDBcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICBwcmVmaXhlZCA9IGZhbHNlXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoXG4gICAgfVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gZ3JlYXRlclRoYW4pIHtcbiAgICAgIGluZGV4KytcbiAgICAgIHByZWZpeGVkID0gdHJ1ZVxuXG4gICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXhcbiAgICB9XG5cbiAgICBjb250ZW50ID0gdmFsdWUuc2xpY2UoaW5kZXgsIG5leHRJbmRleClcblxuICAgIGlmICghcHJlZml4ZWQgJiYgIXRyaW0oY29udGVudCkpIHtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleFxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoIXByZWZpeGVkKSB7XG4gICAgICByZXN0ID0gdmFsdWUuc2xpY2UoaW5kZXgpXG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlIGJsb2NrLlxuICAgICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHJlc3QsIHRydWVdKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmUgPSBzdGFydEluZGV4ID09PSBpbmRleCA/IGNvbnRlbnQgOiB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBuZXh0SW5kZXgpXG5cbiAgICBpbmRlbnRzLnB1c2goaW5kZXggLSBzdGFydEluZGV4KVxuICAgIHZhbHVlcy5wdXNoKGxpbmUpXG4gICAgY29udGVudHMucHVzaChjb250ZW50KVxuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxXG4gIH1cblxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGluZGVudHMubGVuZ3RoXG4gIGFkZCA9IGVhdCh2YWx1ZXMuam9pbihsaW5lRmVlZCkpXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBvZmZzZXRzW2N1cnJlbnRMaW5lXSA9IChvZmZzZXRzW2N1cnJlbnRMaW5lXSB8fCAwKSArIGluZGVudHNbaW5kZXhdXG4gICAgY3VycmVudExpbmUrK1xuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJCbG9jaygpXG4gIGNvbnRlbnRzID0gc2VsZi50b2tlbml6ZUJsb2NrKGNvbnRlbnRzLmpvaW4obGluZUZlZWQpLCBub3cpXG4gIGV4aXQoKVxuXG4gIHJldHVybiBhZGQoe3R5cGU6ICdibG9ja3F1b3RlJywgY2hpbGRyZW46IGNvbnRlbnRzfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2JyZWFrJylcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkQnJlYWtcbmhhcmRCcmVhay5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBtaW5CcmVha0xlbmd0aCA9IDJcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBpZiAoaW5kZXggPCBtaW5CcmVha0xlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcblxuICAgICAgcmV0dXJuIGVhdChxdWV1ZSkoe3R5cGU6ICdicmVhayd9KVxuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmVuY2VkQ29kZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciB0aWxkZSA9ICd+J1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG5cbnZhciBtaW5GZW5jZUNvdW50ID0gM1xudmFyIHRhYlNpemUgPSA0XG5cbmZ1bmN0aW9uIGZlbmNlZENvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMVxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBmZW5jZUNvdW50XG4gIHZhciBtYXJrZXJcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgZmxhZ1xuICB2YXIgbGFuZ1xuICB2YXIgbWV0YVxuICB2YXIgcXVldWVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGV4ZGVudGVkQ29udGVudFxuICB2YXIgY2xvc2luZ1xuICB2YXIgZXhkZW50ZWRDbG9zaW5nXG4gIHZhciBpbmRlbnRcbiAgdmFyIG5vd1xuXG4gIGlmICghZ2ZtKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFYXQgaW5pdGlhbCBzcGFjaW5nLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpbmRlbnQgPSBpbmRleFxuXG4gIC8vIEVhdCB0aGUgZmVuY2UuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSB0aWxkZSAmJiBjaGFyYWN0ZXIgIT09IGdyYXZlQWNjZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG4gIG1hcmtlciA9IGNoYXJhY3RlclxuICBmZW5jZUNvdW50ID0gMVxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgZmVuY2VDb3VudCsrXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGZlbmNlQ291bnQgPCBtaW5GZW5jZUNvdW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFYXQgc3BhY2luZyBiZWZvcmUgZmxhZy5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IGZsYWcuXG4gIGZsYWcgPSAnJ1xuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBsaW5lRmVlZCB8fFxuICAgICAgKG1hcmtlciA9PT0gZ3JhdmVBY2NlbnQgJiYgY2hhcmFjdGVyID09PSBtYXJrZXIpXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhZyArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG5cbiAgc3VidmFsdWUgKz0gZmxhZ1xuICBmbGFnID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoZmxhZyksIG5vdylcblxuICBpZiAocXVldWUpIHtcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICB9XG5cbiAgcXVldWUgPSAnJ1xuICBjbG9zaW5nID0gJydcbiAgZXhkZW50ZWRDbG9zaW5nID0gJydcbiAgY29udGVudCA9ICcnXG4gIGV4ZGVudGVkQ29udGVudCA9ICcnXG4gIHZhciBza2lwID0gdHJ1ZVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgY29udGVudCArPSBjbG9zaW5nXG4gICAgZXhkZW50ZWRDb250ZW50ICs9IGV4ZGVudGVkQ2xvc2luZ1xuICAgIGNsb3NpbmcgPSAnJ1xuICAgIGV4ZGVudGVkQ2xvc2luZyA9ICcnXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGZpcnN0IGxpbmUgZmVlZCBpcyBpZ25vcmVkLiBPdGhlcnMgYXJlbuKAmXQuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgc2tpcCA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyXG4gICAgfVxuXG4gICAgcXVldWUgPSAnJ1xuICAgIGluZGV4KytcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBjbG9zaW5nICs9IHF1ZXVlXG4gICAgZXhkZW50ZWRDbG9zaW5nICs9IHF1ZXVlLnNsaWNlKGluZGVudClcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPj0gdGFiU2l6ZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNsb3NpbmcgKz0gcXVldWVcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWVcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPCBmZW5jZUNvdW50KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgKz0gY29udGVudCArIGNsb3NpbmdcblxuICAvLyBHZXQgbGFuZyBhbmQgbWV0YSBmcm9tIHRoZSBmbGFnLlxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IGZsYWcubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBmbGFnLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBpZiAoIWxhbmcpIHtcbiAgICAgICAgbGFuZyA9IGZsYWcuc2xpY2UoMCwgaW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsYW5nKSB7XG4gICAgICBtZXRhID0gZmxhZy5zbGljZShpbmRleClcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdjb2RlJyxcbiAgICBsYW5nOiBsYW5nIHx8IGZsYWcgfHwgbnVsbCxcbiAgICBtZXRhOiBtZXRhIHx8IG51bGwsXG4gICAgdmFsdWU6IGV4ZGVudGVkQ29udGVudFxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciB0cmltID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50ZWRDb2RlXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgdGFiU2l6ZSA9IDRcbnZhciBjb2RlSW5kZW50ID0gcmVwZWF0KHNwYWNlLCB0YWJTaXplKVxuXG5mdW5jdGlvbiBpbmRlbnRlZENvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGNvbnRlbnQgPSAnJ1xuICB2YXIgc3VidmFsdWVRdWV1ZSA9ICcnXG4gIHZhciBjb250ZW50UXVldWUgPSAnJ1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBibGFua1F1ZXVlXG4gIHZhciBpbmRlbnRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChpbmRlbnQpIHtcbiAgICAgIGluZGVudCA9IGZhbHNlXG5cbiAgICAgIHN1YnZhbHVlICs9IHN1YnZhbHVlUXVldWVcbiAgICAgIGNvbnRlbnQgKz0gY29udGVudFF1ZXVlXG4gICAgICBzdWJ2YWx1ZVF1ZXVlID0gJydcbiAgICAgIGNvbnRlbnRRdWV1ZSA9ICcnXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXJcbiAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXJcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlclxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gc3BhY2UgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDIpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDMpID09PSBjaGFyYWN0ZXJcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gY29kZUluZGVudFxuICAgICAgaW5kZXggKz0gM1xuICAgICAgaW5kZW50ID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRlbnQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGJsYW5rUXVldWUgPSAnJ1xuXG4gICAgICB3aGlsZSAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBibGFua1F1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgc3VidmFsdWVRdWV1ZSArPSBibGFua1F1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBjb250ZW50UXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBpZiAoc2lsZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgIGxhbmc6IG51bGwsXG4gICAgICBtZXRhOiBudWxsLFxuICAgICAgdmFsdWU6IHRyaW0oY29udGVudClcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9jb2RlLWlubGluZScpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuaW5saW5lQ29kZS5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBsaW5lRmVlZCA9IDEwIC8vICAnXFxuJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgZ3JhdmVBY2NlbnQgPSA5NiAvLyAgJ2AnXG5cbmZ1bmN0aW9uIGlubGluZUNvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgb3BlbmluZ0ZlbmNlRW5kXG4gIHZhciBjbG9zaW5nRmVuY2VTdGFydFxuICB2YXIgY2xvc2luZ0ZlbmNlRW5kXG4gIHZhciBjb2RlXG4gIHZhciBuZXh0XG4gIHZhciBmb3VuZFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSAhPT0gZ3JhdmVBY2NlbnQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBsZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG9wZW5pbmdGZW5jZUVuZCA9IGluZGV4XG4gIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGUgPSBuZXh0XG4gICAgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgaWYgKGNvZGUgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICBpZiAoY2xvc2luZ0ZlbmNlU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjbG9zaW5nRmVuY2VTdGFydCA9IGluZGV4XG4gICAgICB9XG5cbiAgICAgIGNsb3NpbmdGZW5jZUVuZCA9IGluZGV4ICsgMVxuXG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgIT09IGdyYXZlQWNjZW50ICYmXG4gICAgICAgIGNsb3NpbmdGZW5jZUVuZCAtIGNsb3NpbmdGZW5jZVN0YXJ0ID09PSBvcGVuaW5nRmVuY2VFbmRcbiAgICAgICkge1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsb3NpbmdGZW5jZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsb3NpbmdGZW5jZVN0YXJ0ID0gdW5kZWZpbmVkXG4gICAgICBjbG9zaW5nRmVuY2VFbmQgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsIGFuZCBmaW5hbCBzcGFjZSAob3IgbGluZSBmZWVkKSwgaWZmIHRoZXkgZXhpc3QgYW5kIHRoZXJlXG4gIC8vIGFyZSBub24tc3BhY2UgY2hhcmFjdGVycyBpbiB0aGUgY29udGVudC5cbiAgaW5kZXggPSBvcGVuaW5nRmVuY2VFbmRcbiAgbGVuZ3RoID0gY2xvc2luZ0ZlbmNlU3RhcnRcbiAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG4gIG5leHQgPSB2YWx1ZS5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpXG4gIGZvdW5kID0gZmFsc2VcblxuICBpZiAoXG4gICAgbGVuZ3RoIC0gaW5kZXggPiAyICYmXG4gICAgKGNvZGUgPT09IHNwYWNlIHx8IGNvZGUgPT09IGxpbmVGZWVkKSAmJlxuICAgIChuZXh0ID09PSBzcGFjZSB8fCBuZXh0ID09PSBsaW5lRmVlZClcbiAgKSB7XG4gICAgaW5kZXgrK1xuICAgIGxlbmd0aC0tXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgICBpZiAoY29kZSAhPT0gc3BhY2UgJiYgY29kZSAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoZm91bmQgPT09IHRydWUpIHtcbiAgICAgIG9wZW5pbmdGZW5jZUVuZCsrXG4gICAgICBjbG9zaW5nRmVuY2VTdGFydC0tXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhdCh2YWx1ZS5zbGljZSgwLCBjbG9zaW5nRmVuY2VFbmQpKSh7XG4gICAgdHlwZTogJ2lubGluZUNvZGUnLFxuICAgIHZhbHVlOiB2YWx1ZS5zbGljZShvcGVuaW5nRmVuY2VFbmQsIGNsb3NpbmdGZW5jZVN0YXJ0KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJylcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uXG5cbnZhciBxdW90YXRpb25NYXJrID0gJ1wiJ1xudmFyIGFwb3N0cm9waGUgPSBcIidcIlxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgY29sb24gPSAnOidcbnZhciBsZXNzVGhhbiA9ICc8J1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGRlZmluaXRpb24oZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgYmVmb3JlVVJMXG4gIHZhciBiZWZvcmVUaXRsZVxuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgdGVzdFxuICB2YXIgaWRlbnRpZmllclxuICB2YXIgdXJsXG4gIHZhciB0aXRsZVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gdGFiKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSBsZWZ0U3F1YXJlQnJhY2tldCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXgrK1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgYnJlYWtcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoXG4gICAgIXF1ZXVlIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4KSAhPT0gcmlnaHRTcXVhcmVCcmFja2V0IHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IGNvbG9uXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWRlbnRpZmllciA9IHF1ZXVlXG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgcmlnaHRTcXVhcmVCcmFja2V0ICsgY29sb25cbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBxdWV1ZSA9ICcnXG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVzc1RoYW4pIHtcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKCFpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIpIHtcbiAgICAgIHN1YnZhbHVlICs9IGxlc3NUaGFuICsgcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4IC09IHF1ZXVlLmxlbmd0aCArIDFcbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghaXNVbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB1cmwgPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHRlc3QgPSBudWxsXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gcXVvdGF0aW9uTWFyaykge1xuICAgIHRlc3QgPSBxdW90YXRpb25NYXJrXG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBhcG9zdHJvcGhlKSB7XG4gICAgdGVzdCA9IGFwb3N0cm9waGVcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykge1xuICAgIHRlc3QgPSByaWdodFBhcmVudGhlc2lzXG4gIH1cblxuICBpZiAoIXRlc3QpIHtcbiAgICBxdWV1ZSA9ICcnXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgfSBlbHNlIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICBxdWV1ZSA9ICcnXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCB8fCBjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IGxpbmVGZWVkXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRlc3QpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJlZm9yZVRpdGxlID0gc3VidmFsdWVcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgICB0aXRsZSA9IHF1ZXVlXG4gICAgcXVldWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGFiICYmIGNoYXJhY3RlciAhPT0gc3BhY2UpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICBpZiAoc2lsZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGJlZm9yZVVSTCA9IGVhdChiZWZvcmVVUkwpLnRlc3QoKS5lbmRcbiAgICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBiZWZvcmVVUkwsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pXG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGJlZm9yZVRpdGxlID0gZWF0KGJlZm9yZVRpdGxlKS50ZXN0KCkuZW5kXG4gICAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2RlZmluaXRpb24nLFxuICAgICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpLFxuICAgICAgbGFiZWw6IGlkZW50aWZpZXIsXG4gICAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIGVuY2xvc2VkIFVSSS5cbmZ1bmN0aW9uIGlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiAoXG4gICAgY2hhcmFjdGVyICE9PSBncmVhdGVyVGhhbiAmJlxuICAgIGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldFxuICApXG59XG5cbmlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIuZGVsaW1pdGVyID0gZ3JlYXRlclRoYW5cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgY2FuIGJlIGluc2lkZSBhbiB1bmNsb3NlZCBVUkkuXG5mdW5jdGlvbiBpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gKFxuICAgIGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHJpZ2h0U3F1YXJlQnJhY2tldCAmJlxuICAgICF3aGl0ZXNwYWNlKGNoYXJhY3RlcilcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9kZWxldGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcbnN0cmlrZXRocm91Z2gubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgdGlsZGUgPSAnfidcbnZhciBmZW5jZSA9ICd+fidcblxuZnVuY3Rpb24gc3RyaWtldGhyb3VnaChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGFyYWN0ZXIgPSAnJ1xuICB2YXIgcHJldmlvdXMgPSAnJ1xuICB2YXIgcHJlY2VkaW5nID0gJydcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIG5vd1xuXG4gIGlmIChcbiAgICAhc2VsZi5vcHRpb25zLmdmbSB8fFxuICAgIHZhbHVlLmNoYXJBdCgwKSAhPT0gdGlsZGUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoMSkgIT09IHRpbGRlIHx8XG4gICAgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoMikpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaW5kZXggPSAxXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBub3cgPSBlYXQubm93KClcbiAgbm93LmNvbHVtbiArPSAyXG4gIG5vdy5vZmZzZXQgKz0gMlxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSB0aWxkZSAmJlxuICAgICAgcHJldmlvdXMgPT09IHRpbGRlICYmXG4gICAgICAoIXByZWNlZGluZyB8fCAhd2hpdGVzcGFjZShwcmVjZWRpbmcpKVxuICAgICkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KGZlbmNlICsgc3VidmFsdWUgKyBmZW5jZSkoe1xuICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcHJldmlvdXNcbiAgICBwcmVjZWRpbmcgPSBwcmV2aW91c1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lbWFpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1haWxcbmVtYWlsLmxvY2F0b3IgPSBsb2NhdGVcbmVtYWlsLm5vdEluTGluayA9IHRydWVcblxudmFyIHBsdXNTaWduID0gNDMgLy8gJysnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIGF0U2lnbiA9IDY0IC8vICdAJ1xudmFyIHVuZGVyc2NvcmUgPSA5NSAvLyAnXydcblxuZnVuY3Rpb24gZW1haWwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbVxuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVyc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGZpcnN0RG90ID0gLTFcbiAgdmFyIGNvZGVcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGNoaWxkcmVuXG4gIHZhciBleGl0XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gIHdoaWxlIChcbiAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gcGx1c1NpZ24gfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gZG90IHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdCgrK2luZGV4KVxuICB9XG5cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY29kZSAhPT0gYXRTaWduKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmRleCsrXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBkZWNpbWFsKGNvZGUpIHx8XG4gICAgICBhbHBoYWJldGljYWwoY29kZSkgfHxcbiAgICAgIGNvZGUgPT09IGRhc2ggfHxcbiAgICAgIGNvZGUgPT09IGRvdCB8fFxuICAgICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICAgICkge1xuICAgICAgaW5kZXgrK1xuXG4gICAgICBpZiAoZmlyc3REb3QgPT09IC0xICYmIGNvZGUgPT09IGRvdCkge1xuICAgICAgICBmaXJzdERvdCA9IGluZGV4XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgYnJlYWtcbiAgfVxuXG4gIGlmIChcbiAgICBmaXJzdERvdCA9PT0gLTEgfHxcbiAgICBmaXJzdERvdCA9PT0gaW5kZXggfHxcbiAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgY29kZSA9PT0gdW5kZXJzY29yZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICBpbmRleC0tXG4gIH1cblxuICBjb250ZW50ID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG5cbiAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIHVybC5cbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH1cbiAgY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSlcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0gdG9rZW5pemVyc1xuXG4gIGV4aXQoKVxuXG4gIHJldHVybiBlYXQoY29udGVudCkoe1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6ICdtYWlsdG86JyArIGRlY29kZShjb250ZW50LCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHdvcmQgPSByZXF1aXJlKCdpcy13b3JkLWNoYXJhY3RlcicpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZW1waGFzaXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5lbXBoYXNpcy5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcblxuZnVuY3Rpb24gZW1waGFzaXMoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIHZhciBub3dcbiAgdmFyIHBlZGFudGljXG4gIHZhciBtYXJrZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgbGVuZ3RoXG4gIHZhciBwcmV2aW91c1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmIGNoYXJhY3RlciAhPT0gdW5kZXJzY29yZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgc3VidmFsdWUgPSBjaGFyYWN0ZXJcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBpbmRleCsrXG4gIHF1ZXVlID0gJydcbiAgY2hhcmFjdGVyID0gJydcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIgJiYgKCFwZWRhbnRpYyB8fCAhd2hpdGVzcGFjZShwcmV2aW91cykpKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGlmICghdHJpbShxdWV1ZSkgfHwgcHJldmlvdXMgPT09IG1hcmtlcikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwZWRhbnRpYyAmJiBtYXJrZXIgPT09IHVuZGVyc2NvcmUgJiYgd29yZChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KClcbiAgICAgICAgbm93LmNvbHVtbisrXG4gICAgICAgIG5vdy5vZmZzZXQrK1xuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIG1hcmtlcikoe1xuICAgICAgICAgIHR5cGU6ICdlbXBoYXNpcycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gbWFya2VyXG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09IGJhY2tzbGFzaCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2VzY2FwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlXG5lc2NhcGUubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG5mdW5jdGlvbiBlc2NhcGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBub2RlXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSA9PT0gYmFja3NsYXNoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDEpXG5cbiAgICBpZiAoc2VsZi5lc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpICE9PSAtMSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgICBub2RlID0ge3R5cGU6ICdicmVhayd9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0ge3R5cGU6ICd0ZXh0JywgdmFsdWU6IGNoYXJhY3Rlcn1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChiYWNrc2xhc2ggKyBjaGFyYWN0ZXIpKG5vZGUpXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdHhIZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgdGFiID0gJ1xcdCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIG51bWJlclNpZ24gPSAnIydcblxudmFyIG1heEZlbmNlQ291bnQgPSA2XG5cbmZ1bmN0aW9uIGF0eEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIG5vdyA9IGVhdC5ub3coKVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudCA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHF1ZXVlXG4gIHZhciBkZXB0aFxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gc3BhY2UgJiYgY2hhcmFjdGVyICE9PSB0YWIpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICAvLyBFYXQgaGFzaGVzLlxuICBkZXB0aCA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8PSBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBudW1iZXJTaWduKSB7XG4gICAgICBpbmRleC0tXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgIGRlcHRoKytcbiAgfVxuXG4gIGlmIChkZXB0aCA+IG1heEZlbmNlQ291bnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghZGVwdGggfHwgKCFwZWRhbnRpYyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbnVtYmVyU2lnbikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDFcblxuICAvLyBFYXQgaW50ZXJtZWRpYXRlIHdoaXRlLXNwYWNlLlxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYikge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiBub3QgaW4gcGVkYW50aWMgbW9kZSB3aXRob3V0IHNwYWNpbmcuXG4gIGlmICghcGVkYW50aWMgJiYgcXVldWUubGVuZ3RoID09PSAwICYmIGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIgIT09IGxpbmVGZWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICBzdWJ2YWx1ZSArPSBxdWV1ZVxuICBxdWV1ZSA9ICcnXG4gIGNvbnRlbnQgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBzcGFjZSAmJiBjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IG51bWJlclNpZ24pIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWUgKyBjaGFyYWN0ZXJcbiAgICAgIHF1ZXVlID0gJydcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgLy8gYCNgIHdpdGhvdXQgYSBxdWV1ZSBpcyBwYXJ0IG9mIHRoZSBjb250ZW50LlxuICAgIGlmICghcGVkYW50aWMgJiYgY29udGVudCAmJiAhcXVldWUgJiYgY2hhcmFjdGVyID09PSBudW1iZXJTaWduKSB7XG4gICAgICBjb250ZW50ICs9IGNoYXJhY3RlclxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBudW1iZXJTaWduKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IHNwYWNlIHx8IGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIGluZGV4LS1cbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoXG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldGV4dEhlYWRpbmdcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG52YXIgZXF1YWxzVG8gPSAnPSdcbnZhciBkYXNoID0gJy0nXG5cbnZhciBtYXhJbmRlbnQgPSAzXG5cbnZhciBlcXVhbHNUb0RlcHRoID0gMVxudmFyIGRhc2hEZXB0aCA9IDJcblxuZnVuY3Rpb24gc2V0ZXh0SGVhZGluZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBub3cgPSBlYXQubm93KClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgY29udGVudFxuICB2YXIgcXVldWVcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgbWFya2VyXG4gIHZhciBkZXB0aFxuXG4gIC8vIEVhdCBpbml0aWFsIGluZGVudGF0aW9uLlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHNwYWNlIHx8IGluZGV4ID49IG1heEluZGVudCkge1xuICAgICAgaW5kZXgtLVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIC8vIEVhdCBjb250ZW50LlxuICBjb250ZW50ID0gJydcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgc3VidmFsdWUgKz0gY29udGVudCArIHF1ZXVlXG5cbiAgLy8gRW5zdXJlIHRoZSBjb250ZW50IGlzIGZvbGxvd2VkIGJ5IGEgbmV3bGluZSBhbmQgYSB2YWxpZCBtYXJrZXIuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICBtYXJrZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSBsaW5lRmVlZCB8fCAobWFya2VyICE9PSBlcXVhbHNUbyAmJiBtYXJrZXIgIT09IGRhc2gpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcblxuICAvLyBFYXQgU2V0ZXh0LWxpbmUuXG4gIHF1ZXVlID0gbWFya2VyXG4gIGRlcHRoID0gbWFya2VyID09PSBlcXVhbHNUbyA/IGVxdWFsc1RvRGVwdGggOiBkYXNoRGVwdGhcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4LS1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSkoe1xuICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvcGVuQ2xvc2VUYWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS5vcGVuQ2xvc2VUYWdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja0h0bWxcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgbGVzc1RoYW4gPSAnPCdcblxudmFyIHJhd09wZW5FeHByZXNzaW9uID0gL148KHNjcmlwdHxwcmV8c3R5bGUpKD89KFxcc3w+fCQpKS9pXG52YXIgcmF3Q2xvc2VFeHByZXNzaW9uID0gLzxcXC8oc2NyaXB0fHByZXxzdHlsZSk+L2lcbnZhciBjb21tZW50T3BlbkV4cHJlc3Npb24gPSAvXjwhLS0vXG52YXIgY29tbWVudENsb3NlRXhwcmVzc2lvbiA9IC8tLT4vXG52YXIgaW5zdHJ1Y3Rpb25PcGVuRXhwcmVzc2lvbiA9IC9ePFxcPy9cbnZhciBpbnN0cnVjdGlvbkNsb3NlRXhwcmVzc2lvbiA9IC9cXD8+L1xudmFyIGRpcmVjdGl2ZU9wZW5FeHByZXNzaW9uID0gL148IVtBLVphLXpdL1xudmFyIGRpcmVjdGl2ZUNsb3NlRXhwcmVzc2lvbiA9IC8+L1xudmFyIGNkYXRhT3BlbkV4cHJlc3Npb24gPSAvXjwhXFxbQ0RBVEFcXFsvXG52YXIgY2RhdGFDbG9zZUV4cHJlc3Npb24gPSAvXV0+L1xudmFyIGVsZW1lbnRDbG9zZUV4cHJlc3Npb24gPSAvXiQvXG52YXIgb3RoZXJFbGVtZW50T3BlbkV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKG9wZW5DbG9zZVRhZy5zb3VyY2UgKyAnXFxcXHMqJCcpXG5cbmZ1bmN0aW9uIGJsb2NrSHRtbChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBibG9ja3MgPSBzZWxmLm9wdGlvbnMuYmxvY2tzLmpvaW4oJ3wnKVxuICB2YXIgZWxlbWVudE9wZW5FeHByZXNzaW9uID0gbmV3IFJlZ0V4cChcbiAgICAnXjwvPygnICsgYmxvY2tzICsgJykoPz0oXFxcXHN8Lz8+fCQpKScsXG4gICAgJ2knXG4gIClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBuZXh0XG4gIHZhciBsaW5lXG4gIHZhciBvZmZzZXRcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgY291bnRcbiAgdmFyIHNlcXVlbmNlXG4gIHZhciBzdWJ2YWx1ZVxuXG4gIHZhciBzZXF1ZW5jZXMgPSBbXG4gICAgW3Jhd09wZW5FeHByZXNzaW9uLCByYXdDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtjb21tZW50T3BlbkV4cHJlc3Npb24sIGNvbW1lbnRDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtpbnN0cnVjdGlvbk9wZW5FeHByZXNzaW9uLCBpbnN0cnVjdGlvbkNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2RpcmVjdGl2ZU9wZW5FeHByZXNzaW9uLCBkaXJlY3RpdmVDbG9zZUV4cHJlc3Npb24sIHRydWVdLFxuICAgIFtjZGF0YU9wZW5FeHByZXNzaW9uLCBjZGF0YUNsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW2VsZW1lbnRPcGVuRXhwcmVzc2lvbiwgZWxlbWVudENsb3NlRXhwcmVzc2lvbiwgdHJ1ZV0sXG4gICAgW290aGVyRWxlbWVudE9wZW5FeHByZXNzaW9uLCBlbGVtZW50Q2xvc2VFeHByZXNzaW9uLCBmYWxzZV1cbiAgXVxuXG4gIC8vIEVhdCBpbml0aWFsIHNwYWNpbmcuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBsZXNzVGhhbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbmV4dCA9IHZhbHVlLmluZGV4T2YobGluZUZlZWQsIGluZGV4ICsgMSlcbiAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dFxuICBsaW5lID0gdmFsdWUuc2xpY2UoaW5kZXgsIG5leHQpXG4gIG9mZnNldCA9IC0xXG4gIGNvdW50ID0gc2VxdWVuY2VzLmxlbmd0aFxuXG4gIHdoaWxlICgrK29mZnNldCA8IGNvdW50KSB7XG4gICAgaWYgKHNlcXVlbmNlc1tvZmZzZXRdWzBdLnRlc3QobGluZSkpIHtcbiAgICAgIHNlcXVlbmNlID0gc2VxdWVuY2VzW29mZnNldF1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFzZXF1ZW5jZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiBzZXF1ZW5jZVsyXVxuICB9XG5cbiAgaW5kZXggPSBuZXh0XG5cbiAgaWYgKCFzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXggKyAxKVxuICAgICAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dFxuICAgICAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSwgbmV4dClcblxuICAgICAgaWYgKHNlcXVlbmNlWzFdLnRlc3QobGluZSkpIHtcbiAgICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgICBpbmRleCA9IG5leHRcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJylcbnZhciB0YWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS50YWdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVIVE1MXG5pbmxpbmVIVE1MLmxvY2F0b3IgPSBsb2NhdGVcblxudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgcXVlc3Rpb25NYXJrID0gJz8nXG52YXIgZXhjbGFtYXRpb25NYXJrID0gJyEnXG52YXIgc2xhc2ggPSAnLydcblxudmFyIGh0bWxMaW5rT3BlbkV4cHJlc3Npb24gPSAvXjxhIC9pXG52YXIgaHRtbExpbmtDbG9zZUV4cHJlc3Npb24gPSAvXjxcXC9hPi9pXG5cbmZ1bmN0aW9uIGlubGluZUhUTUwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHN1YnZhbHVlXG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gbGVzc1RoYW4gfHwgbGVuZ3RoIDwgMykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDEpXG5cbiAgaWYgKFxuICAgICFhbHBoYWJldGljYWwoY2hhcmFjdGVyKSAmJlxuICAgIGNoYXJhY3RlciAhPT0gcXVlc3Rpb25NYXJrICYmXG4gICAgY2hhcmFjdGVyICE9PSBleGNsYW1hdGlvbk1hcmsgJiZcbiAgICBjaGFyYWN0ZXIgIT09IHNsYXNoXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5tYXRjaCh0YWcpXG5cbiAgaWYgKCFzdWJ2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbm90IHVzZWQgeWV0LiAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHN1YnZhbHVlID0gc3VidmFsdWVbMF1cblxuICBpZiAoIXNlbGYuaW5MaW5rICYmIGh0bWxMaW5rT3BlbkV4cHJlc3Npb24udGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IHRydWVcbiAgfSBlbHNlIGlmIChzZWxmLmluTGluayAmJiBodG1sTGlua0Nsb3NlRXhwcmVzc2lvbi50ZXN0KHN1YnZhbHVlKSkge1xuICAgIHNlbGYuaW5MaW5rID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAnaHRtbCcsIHZhbHVlOiBzdWJ2YWx1ZX0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2xpbmsnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcbmxpbmsubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIHF1b3RhdGlvbk1hcmsgPSAnXCInXG52YXIgYXBvc3Ryb3BoZSA9IFwiJ1wiXG52YXIgbGVmdFBhcmVudGhlc2lzID0gJygnXG52YXIgcmlnaHRQYXJlbnRoZXNpcyA9ICcpJ1xudmFyIGxlc3NUaGFuID0gJzwnXG52YXIgZ3JlYXRlclRoYW4gPSAnPidcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG5cbmZ1bmN0aW9uIGxpbmsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3VidmFsdWUgPSAnJ1xuICB2YXIgaW5kZXggPSAwXG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMClcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm1cbiAgdmFyIGNsb3NlZFxuICB2YXIgY291bnRcbiAgdmFyIG9wZW5pbmdcbiAgdmFyIGJlZm9yZVVSTFxuICB2YXIgYmVmb3JlVGl0bGVcbiAgdmFyIHN1YnF1ZXVlXG4gIHZhciBoYXNNYXJrZXJcbiAgdmFyIGlzSW1hZ2VcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIG1hcmtlclxuICB2YXIgbGVuZ3RoXG4gIHZhciB0aXRsZVxuICB2YXIgZGVwdGhcbiAgdmFyIHF1ZXVlXG4gIHZhciB1cmxcbiAgdmFyIG5vd1xuICB2YXIgZXhpdFxuICB2YXIgbm9kZVxuXG4gIC8vIERldGVjdCB3aGV0aGVyIHRoaXMgaXMgYW4gaW1hZ2UuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGV4Y2xhbWF0aW9uTWFyaykge1xuICAgIGlzSW1hZ2UgPSB0cnVlXG4gICAgc3VidmFsdWUgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgfVxuXG4gIC8vIEVhdCB0aGUgb3BlbmluZy5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEV4aXQgd2hlbiB0aGlzIGlzIGEgbGluayBhbmQgd2XigJlyZSBhbHJlYWR5IGluc2lkZSBhIGxpbmsuXG4gIGlmICghaXNJbWFnZSAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcbiAgaW5kZXgrK1xuXG4gIC8vIEVhdCB0aGUgY29udGVudC5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIG5vdyA9IGVhdC5ub3coKVxuICBkZXB0aCA9IDBcblxuICBub3cuY29sdW1uICs9IGluZGV4XG4gIG5vdy5vZmZzZXQgKz0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgc3VicXVldWUgPSBjaGFyYWN0ZXJcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGdyYXZlQWNjZW50KSB7XG4gICAgICAvLyBJbmxpbmUtY29kZSBpbiBsaW5rIGNvbnRlbnQuXG4gICAgICBjb3VudCA9IDFcblxuICAgICAgd2hpbGUgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBncmF2ZUFjY2VudCkge1xuICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjb3VudCsrXG4gICAgICB9XG5cbiAgICAgIGlmICghb3BlbmluZykge1xuICAgICAgICBvcGVuaW5nID0gY291bnRcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gb3BlbmluZykge1xuICAgICAgICBvcGVuaW5nID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIC8vIEFsbG93IGJyYWNrZXRzIHRvIGJlIGVzY2FwZWQuXG4gICAgICBpbmRleCsrXG4gICAgICBzdWJxdWV1ZSArPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgICAvLyBJbiBHRk0gbW9kZSwgYnJhY2tldHMgaW4gY29kZSBzdGlsbCBjb3VudC4gIEluIGFsbCBvdGhlciBtb2RlcyxcbiAgICAgIC8vIHRoZXkgZG9u4oCZdC5cbiAgICAgIGRlcHRoKytcbiAgICB9IGVsc2UgaWYgKCghb3BlbmluZyB8fCBnZm0pICYmIGNoYXJhY3RlciA9PT0gcmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBpZiAoZGVwdGgpIHtcbiAgICAgICAgZGVwdGgtLVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBsZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGxlZnRQYXJlbnRoZXNpc1xuICAgICAgICBjbG9zZWQgPSB0cnVlXG4gICAgICAgIGluZGV4KytcblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXVlICs9IHN1YnF1ZXVlXG4gICAgc3VicXVldWUgPSAnJ1xuICAgIGluZGV4KytcbiAgfVxuXG4gIC8vIEVhdCB0aGUgY29udGVudCBjbG9zaW5nLlxuICBpZiAoIWNsb3NlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29udGVudCA9IHF1ZXVlXG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgc3VicXVldWVcbiAgaW5kZXgrK1xuXG4gIC8vIEVhdCB3aGl0ZS1zcGFjZS5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgLy8gRWF0IHRoZSBVUkwuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcbiAgcXVldWUgPSAnJ1xuICBiZWZvcmVVUkwgPSBzdWJ2YWx1ZVxuXG4gIGlmIChjaGFyYWN0ZXIgPT09IGxlc3NUaGFuKSB7XG4gICAgaW5kZXgrK1xuICAgIGJlZm9yZVVSTCArPSBsZXNzVGhhblxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBncmVhdGVyVGhhbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gbGVzc1RoYW4gKyBxdWV1ZSArIGdyZWF0ZXJUaGFuXG4gICAgdXJsID0gcXVldWVcbiAgICBpbmRleCsrXG4gIH0gZWxzZSB7XG4gICAgY2hhcmFjdGVyID0gbnVsbFxuICAgIHN1YnF1ZXVlID0gJydcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoXG4gICAgICAgIHN1YnF1ZXVlICYmXG4gICAgICAgIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmsgfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGFwb3N0cm9waGUgfHxcbiAgICAgICAgICAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IGxlZnRQYXJlbnRoZXNpcykpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICBpZiAoIXBlZGFudGljKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgZGVwdGgrK1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gcmlnaHRQYXJlbnRoZXNpcykge1xuICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXB0aC0tXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBzdWJxdWV1ZVxuICAgICAgICBzdWJxdWV1ZSA9ICcnXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgICAgcXVldWUgKz0gYmFja3NsYXNoXG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgdXJsID0gcXVldWVcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aFxuICB9XG5cbiAgLy8gRWF0IHdoaXRlLXNwYWNlLlxuICBxdWV1ZSA9ICcnXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICBzdWJ2YWx1ZSArPSBxdWV1ZVxuXG4gIC8vIEVhdCB0aGUgdGl0bGUuXG4gIGlmIChcbiAgICBxdWV1ZSAmJlxuICAgIChjaGFyYWN0ZXIgPT09IHF1b3RhdGlvbk1hcmsgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gYXBvc3Ryb3BoZSB8fFxuICAgICAgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSBsZWZ0UGFyZW50aGVzaXMpKVxuICApIHtcbiAgICBpbmRleCsrXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gICAgcXVldWUgPSAnJ1xuICAgIG1hcmtlciA9IGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzID8gcmlnaHRQYXJlbnRoZXNpcyA6IGNoYXJhY3RlclxuICAgIGJlZm9yZVRpdGxlID0gc3VidmFsdWVcblxuICAgIC8vIEluIGNvbW1vbm1hcmstbW9kZSwgdGhpbmdzIGFyZSBwcmV0dHkgZWFzeTogdGhlIG1hcmtlciBjYW5ub3Qgb2NjdXJcbiAgICAvLyBpbnNpZGUgdGhlIHRpdGxlLiAgTm9uLWNvbW1vbm1hcmsgZG9lcywgaG93ZXZlciwgc3VwcG9ydCBuZXN0ZWRcbiAgICAvLyBkZWxpbWl0ZXJzLlxuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICB9XG5cbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aXRsZSA9IHF1ZXVlXG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnF1ZXVlID0gJydcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBpZiAoaGFzTWFya2VyKSB7XG4gICAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZVxuICAgICAgICAgICAgc3VicXVldWUgPSAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhc01hcmtlciA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICghaGFzTWFya2VyKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBtYXJrZXIgKyBzdWJxdWV1ZVxuICAgICAgICAgIHRpdGxlID0gcXVldWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IGVsc2UgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXVlICs9IG1hcmtlciArIHN1YnF1ZXVlICsgY2hhcmFjdGVyXG4gICAgICAgICAgc3VicXVldWUgPSAnJ1xuICAgICAgICAgIGhhc01hcmtlciA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdWJ2YWx1ZSArPSByaWdodFBhcmVudGhlc2lzXG5cbiAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZCwge1xuICAgIG5vblRlcm1pbmF0ZWQ6IGZhbHNlXG4gIH0pXG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmRcbiAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpXG4gIH1cblxuICBub2RlID0ge1xuICAgIHR5cGU6IGlzSW1hZ2UgPyAnaW1hZ2UnIDogJ2xpbmsnLFxuICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgIHVybDogdXJsXG4gIH1cblxuICBpZiAoaXNJbWFnZSkge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbFxuICB9IGVsc2Uge1xuICAgIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gICAgbm9kZS5jaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KVxuICAgIGV4aXQoKVxuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBnZXRJbmRlbnQgPSByZXF1aXJlKCcuLi91dGlsL2dldC1pbmRlbnRhdGlvbicpXG52YXIgcmVtb3ZlSW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9yZW1vdmUtaW5kZW50YXRpb24nKVxudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0JylcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0XG5cbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcbnZhciBwbHVzU2lnbiA9ICcrJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBkb3QgPSAnLidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciB0YWIgPSAnXFx0J1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsb3dlcmNhc2VYID0gJ3gnXG5cbnZhciB0YWJTaXplID0gNFxudmFyIGxvb3NlTGlzdEl0ZW1FeHByZXNzaW9uID0gL1xcblxcbig/IVxccyokKS9cbnZhciB0YXNrSXRlbUV4cHJlc3Npb24gPSAvXlxcWyhbIFhcXHR4XSldWyBcXHRdL1xudmFyIGJ1bGxldEV4cHJlc3Npb24gPSAvXihbIFxcdF0qKShbKistXXxcXGQrWy4pXSkoIHsxLDR9KD8hICl8IHxcXHR8JHwoPz1cXG4pKShbXlxcbl0qKS9cbnZhciBwZWRhbnRpY0J1bGxldEV4cHJlc3Npb24gPSAvXihbIFxcdF0qKShbKistXXxcXGQrWy4pXSkoWyBcXHRdKykvXG52YXIgaW5pdGlhbEluZGVudEV4cHJlc3Npb24gPSAvXiggezEsNH18XFx0KT8vZ21cblxuZnVuY3Rpb24gbGlzdChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnNcbiAgdmFyIGludGVydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRMaXN0XG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgc3RhcnQgPSBudWxsXG4gIHZhciBzaXplXG4gIHZhciBxdWV1ZVxuICB2YXIgb3JkZXJlZFxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBtYXJrZXJcbiAgdmFyIG5leHRJbmRleFxuICB2YXIgc3RhcnRJbmRleFxuICB2YXIgcHJlZml4ZWRcbiAgdmFyIGN1cnJlbnRNYXJrZXJcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGxpbmVcbiAgdmFyIHByZXZpb3VzRW1wdHlcbiAgdmFyIGVtcHR5XG4gIHZhciBpdGVtc1xuICB2YXIgYWxsTGluZXNcbiAgdmFyIGVtcHR5TGluZXNcbiAgdmFyIGl0ZW1cbiAgdmFyIGVudGVyVG9wXG4gIHZhciBleGl0QmxvY2txdW90ZVxuICB2YXIgc3ByZWFkID0gZmFsc2VcbiAgdmFyIG5vZGVcbiAgdmFyIG5vd1xuICB2YXIgZW5kXG4gIHZhciBpbmRlbnRlZFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRhYiAmJiBjaGFyYWN0ZXIgIT09IHNwYWNlKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fCBjaGFyYWN0ZXIgPT09IHBsdXNTaWduIHx8IGNoYXJhY3RlciA9PT0gZGFzaCkge1xuICAgIG1hcmtlciA9IGNoYXJhY3RlclxuICAgIG9yZGVyZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIG9yZGVyZWQgPSB0cnVlXG4gICAgcXVldWUgPSAnJ1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgIGlmICghZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChcbiAgICAgICFxdWV1ZSB8fFxuICAgICAgIShjaGFyYWN0ZXIgPT09IGRvdCB8fCAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09IHJpZ2h0UGFyZW50aGVzaXMpKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLyogU2xpZ2h0bHkgYWJ1c2luZyBgc2lsZW50YCBtb2RlLCB3aG9zZSBnb2FsIGlzIHRvIG1ha2UgaW50ZXJydXB0aW5nXG4gICAgICogcGFyYWdyYXBocyB3b3JrLlxuICAgICAqIFdlbGwsIHRoYXTigJlzIGV4YWN0bHkgd2hhdCB3ZSB3YW50IHRvIGRvIGhlcmU6IGRvbuKAmXQgaW50ZXJydXB0OlxuICAgICAqIDIuIGhlcmUsIGJlY2F1c2UgdGhlIOKAnGxpc3TigJ0gZG9lc27igJl0IHN0YXJ0IHdpdGggYDFgLiAqL1xuICAgIGlmIChzaWxlbnQgJiYgcXVldWUgIT09ICcxJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhcnQgPSBwYXJzZUludChxdWV1ZSwgMTApXG4gICAgbWFya2VyID0gY2hhcmFjdGVyXG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleClcblxuICBpZiAoXG4gICAgY2hhcmFjdGVyICE9PSBzcGFjZSAmJlxuICAgIGNoYXJhY3RlciAhPT0gdGFiICYmXG4gICAgKHBlZGFudGljIHx8IChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkICYmIGNoYXJhY3RlciAhPT0gJycpKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaW5kZXggPSAwXG4gIGl0ZW1zID0gW11cbiAgYWxsTGluZXMgPSBbXVxuICBlbXB0eUxpbmVzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICBwcmVmaXhlZCA9IGZhbHNlXG4gICAgaW5kZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIG5leHRJbmRleCA9IGxlbmd0aFxuICAgIH1cblxuICAgIHNpemUgPSAwXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgIHNpemUgKz0gdGFiU2l6ZSAtIChzaXplICUgdGFiU2l6ZSlcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgICBzaXplKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoaXRlbSAmJiBzaXplID49IGl0ZW0uaW5kZW50KSB7XG4gICAgICBpbmRlbnRlZCA9IHRydWVcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgY3VycmVudE1hcmtlciA9IG51bGxcblxuICAgIGlmICghaW5kZW50ZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSBhc3RlcmlzayB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IHBsdXNTaWduIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gZGFzaFxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBzaXplKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlID0gJydcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICAgICAgICBpZiAoIWRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cblxuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgICAgIGluZGV4KytcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcXVldWUgJiZcbiAgICAgICAgICAoY2hhcmFjdGVyID09PSBkb3QgfHwgKGNvbW1vbm1hcmsgJiYgY2hhcmFjdGVyID09PSByaWdodFBhcmVudGhlc2lzKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlclxuICAgICAgICAgIHNpemUgKz0gcXVldWUubGVuZ3RoICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICBzaXplICs9IHRhYlNpemUgLSAoc2l6ZSAlIHRhYlNpemUpXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgICBlbmQgPSBpbmRleCArIHRhYlNpemVcblxuICAgICAgICAgIHdoaWxlIChpbmRleCA8IGVuZCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IHNwYWNlKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgIHNpemUrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kICYmIHZhbHVlLmNoYXJBdChpbmRleCkgPT09IHNwYWNlKSB7XG4gICAgICAgICAgICBpbmRleCAtPSB0YWJTaXplIC0gMVxuICAgICAgICAgICAgc2l6ZSAtPSB0YWJTaXplIC0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgIT09IGxpbmVGZWVkICYmIGNoYXJhY3RlciAhPT0gJycpIHtcbiAgICAgICAgICBjdXJyZW50TWFya2VyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyICE9PSBjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbW1vbm1hcmsgJiYgIWluZGVudGVkICYmIHZhbHVlLmNoYXJBdChzdGFydEluZGV4KSA9PT0gc3BhY2UpIHtcbiAgICAgICAgaW5kZW50ZWQgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGNvbW1vbm1hcmsgJiYgaXRlbSkge1xuICAgICAgICBpbmRlbnRlZCA9IHNpemUgPj0gaXRlbS5pbmRlbnQgfHwgc2l6ZSA+IHRhYlNpemVcbiAgICAgIH1cblxuICAgICAgcHJlZml4ZWQgPSBmYWxzZVxuICAgICAgaW5kZXggPSBzdGFydEluZGV4XG4gICAgfVxuXG4gICAgbGluZSA9IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleClcbiAgICBjb250ZW50ID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBsaW5lIDogdmFsdWUuc2xpY2UoaW5kZXgsIG5leHRJbmRleClcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSB1bmRlcnNjb3JlIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSBkYXNoXG4gICAgKSB7XG4gICAgICBpZiAodG9rZW5pemVycy50aGVtYXRpY0JyZWFrLmNhbGwoc2VsZiwgZWF0LCBsaW5lLCB0cnVlKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzRW1wdHkgPSBlbXB0eVxuICAgIGVtcHR5ID0gIXByZWZpeGVkICYmICF0cmltKGNvbnRlbnQpLmxlbmd0aFxuXG4gICAgaWYgKGluZGVudGVkICYmIGl0ZW0pIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH0gZWxzZSBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGlmIChlbXB0eUxpbmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzcHJlYWQgPSB0cnVlXG4gICAgICAgIGl0ZW0udmFsdWUucHVzaCgnJylcbiAgICAgICAgaXRlbS50cmFpbCA9IGVtcHR5TGluZXMuY29uY2F0KClcbiAgICAgIH1cblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdmFsdWU6IFtsaW5lXSxcbiAgICAgICAgaW5kZW50OiBzaXplLFxuICAgICAgICB0cmFpbDogW11cbiAgICAgIH1cblxuICAgICAgaXRlbXMucHVzaChpdGVtKVxuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSlcbiAgICAgIGVtcHR5TGluZXMgPSBbXVxuICAgIH0gZWxzZSBpZiAoZW1wdHkpIHtcbiAgICAgIGlmIChwcmV2aW91c0VtcHR5ICYmICFjb21tb25tYXJrKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGVtcHR5TGluZXMucHVzaChsaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldmlvdXNFbXB0eSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoaW50ZXJydXB0KGludGVydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCBsaW5lLCB0cnVlXSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpXG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKVxuICAgICAgZW1wdHlMaW5lcyA9IFtdXG4gICAgfVxuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxXG4gIH1cblxuICBub2RlID0gZWF0KGFsbExpbmVzLmpvaW4obGluZUZlZWQpKS5yZXNldCh7XG4gICAgdHlwZTogJ2xpc3QnLFxuICAgIG9yZGVyZWQ6IG9yZGVyZWQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHNwcmVhZDogc3ByZWFkLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9KVxuXG4gIGVudGVyVG9wID0gc2VsZi5lbnRlckxpc3QoKVxuICBleGl0QmxvY2txdW90ZSA9IHNlbGYuZW50ZXJCbG9jaygpXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpdGVtID0gaXRlbXNbaW5kZXhdLnZhbHVlLmpvaW4obGluZUZlZWQpXG4gICAgbm93ID0gZWF0Lm5vdygpXG5cbiAgICBlYXQoaXRlbSkobGlzdEl0ZW0oc2VsZiwgaXRlbSwgbm93KSwgbm9kZSlcblxuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udHJhaWwuam9pbihsaW5lRmVlZClcblxuICAgIGlmIChpbmRleCAhPT0gbGVuZ3RoIC0gMSkge1xuICAgICAgaXRlbSArPSBsaW5lRmVlZFxuICAgIH1cblxuICAgIGVhdChpdGVtKVxuICB9XG5cbiAgZW50ZXJUb3AoKVxuICBleGl0QmxvY2txdW90ZSgpXG5cbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBmbiA9IGN0eC5vcHRpb25zLnBlZGFudGljID8gcGVkYW50aWNMaXN0SXRlbSA6IG5vcm1hbExpc3RJdGVtXG4gIHZhciBjaGVja2VkID0gbnVsbFxuICB2YXIgdGFza1xuICB2YXIgaW5kZW50XG5cbiAgdmFsdWUgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgaWYgKGN0eC5vcHRpb25zLmdmbSkge1xuICAgIHRhc2sgPSB2YWx1ZS5tYXRjaCh0YXNrSXRlbUV4cHJlc3Npb24pXG5cbiAgICBpZiAodGFzaykge1xuICAgICAgaW5kZW50ID0gdGFza1swXS5sZW5ndGhcbiAgICAgIGNoZWNrZWQgPSB0YXNrWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyY2FzZVhcbiAgICAgIG9mZnNldHNbcG9zaXRpb24ubGluZV0gKz0gaW5kZW50XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgc3ByZWFkOiBsb29zZUxpc3RJdGVtRXhwcmVzc2lvbi50ZXN0KHZhbHVlKSxcbiAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgIGNoaWxkcmVuOiBjdHgudG9rZW5pemVCbG9jayh2YWx1ZSwgcG9zaXRpb24pXG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIG92ZXJseSBzaW1wbGUgbWVjaGFuaWNzLlxuZnVuY3Rpb24gcGVkYW50aWNMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXRcbiAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lXG5cbiAgLy8gUmVtb3ZlIHRoZSBsaXN0LWl0ZW3igJlzIGJ1bGxldC5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHBlZGFudGljQnVsbGV0RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgLy8gVGhlIGluaXRpYWwgbGluZSB3YXMgYWxzbyBtYXRjaGVkIGJ5IHRoZSBiZWxvdywgc28gd2UgcmVzZXQgdGhlIGBsaW5lYC5cbiAgbGluZSA9IHBvc2l0aW9uLmxpbmVcblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShpbml0aWFsSW5kZW50RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgLy8gQSBzaW1wbGUgcmVwbGFjZXIgd2hpY2ggcmVtb3ZlZCBhbGwgbWF0Y2hlcywgYW5kIGFkZHMgdGhlaXIgbGVuZ3RoIHRvXG4gIC8vIGBvZmZzZXRgLlxuICBmdW5jdGlvbiByZXBsYWNlcigkMCkge1xuICAgIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArICQwLmxlbmd0aFxuICAgIGxpbmUrK1xuXG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIHNhbmUgbWVjaGFuaWNzLlxuZnVuY3Rpb24gbm9ybWFsTGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZVxuICB2YXIgbWF4XG4gIHZhciBidWxsZXRcbiAgdmFyIHJlc3RcbiAgdmFyIGxpbmVzXG4gIHZhciB0cmltbWVkTGluZXNcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICAvLyBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LlxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoYnVsbGV0RXhwcmVzc2lvbiwgcmVwbGFjZXIpXG5cbiAgbGluZXMgPSB2YWx1ZS5zcGxpdChsaW5lRmVlZClcblxuICB0cmltbWVkTGluZXMgPSByZW1vdmVJbmRlbnQodmFsdWUsIGdldEluZGVudChtYXgpLmluZGVudCkuc3BsaXQobGluZUZlZWQpXG5cbiAgLy8gV2UgcmVwbGFjZWQgdGhlIGluaXRpYWwgYnVsbGV0IHdpdGggc29tZXRoaW5nIGVsc2UgYWJvdmUsIHdoaWNoIHdhcyB1c2VkXG4gIC8vIHRvIHRyaWNrIGByZW1vdmVJbmRlbnRhdGlvbmAgaW50byByZW1vdmluZyBzb21lIG1vcmUgY2hhcmFjdGVycyB3aGVuXG4gIC8vIHBvc3NpYmxlLiAgSG93ZXZlciwgdGhhdCBjb3VsZCByZXN1bHQgaW4gdGhlIGluaXRpYWwgbGluZSB0byBiZSBzdHJpcHBlZFxuICAvLyBtb3JlIHRoYW4gaXQgc2hvdWxkIGJlLlxuICB0cmltbWVkTGluZXNbMF0gPSByZXN0XG5cbiAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgYnVsbGV0Lmxlbmd0aFxuICBsaW5lKytcblxuICBpbmRleCA9IDBcbiAgbGVuZ3RoID0gbGluZXMubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBvZmZzZXRzW2xpbmVdID1cbiAgICAgIChvZmZzZXRzW2xpbmVdIHx8IDApICsgbGluZXNbaW5kZXhdLmxlbmd0aCAtIHRyaW1tZWRMaW5lc1tpbmRleF0ubGVuZ3RoXG4gICAgbGluZSsrXG4gIH1cblxuICByZXR1cm4gdHJpbW1lZExpbmVzLmpvaW4obGluZUZlZWQpXG5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXMgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZXIoJDAsICQxLCAkMiwgJDMsICQ0KSB7XG4gICAgYnVsbGV0ID0gJDEgKyAkMiArICQzXG4gICAgcmVzdCA9ICQ0XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgZmlyc3QgbmluZSBudW1iZXJlZCBsaXN0IGl0ZW1zIGNhbiBpbmRlbnQgd2l0aCBhblxuICAgIC8vIGV4dHJhIHNwYWNlLiAgVGhhdCBpcywgd2hlbiB0aGUgYnVsbGV0IGRpZCBub3QgcmVjZWl2ZSBhbiBleHRyYSBmaW5hbFxuICAgIC8vIHNwYWNlLlxuICAgIGlmIChOdW1iZXIoJDIpIDwgMTAgJiYgYnVsbGV0Lmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICQyID0gc3BhY2UgKyAkMlxuICAgIH1cblxuICAgIG1heCA9ICQxICsgcmVwZWF0KHNwYWNlLCAkMi5sZW5ndGgpICsgJDNcblxuICAgIHJldHVybiBtYXggKyByZXN0XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxudmFyIHRyaW1UcmFpbGluZ0xpbmVzID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpXG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFncmFwaFxuXG52YXIgdGFiID0gJ1xcdCdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG5cbi8vIFRva2VuaXNlIHBhcmFncmFwaC5cbmZ1bmN0aW9uIHBhcmFncmFwaChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzZXR0aW5ncyA9IHNlbGYub3B0aW9uc1xuICB2YXIgY29tbW9ubWFyayA9IHNldHRpbmdzLmNvbW1vbm1hcmtcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVyc1xuICB2YXIgaW50ZXJydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRQYXJhZ3JhcGhcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZClcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgcG9zaXRpb25cbiAgdmFyIHN1YnZhbHVlXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHNpemVcbiAgdmFyIG5vd1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIEVhdCBldmVyeXRoaW5nIGlmIHRoZXJl4oCZcyBubyBmb2xsb3dpbmcgbmV3bGluZS5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGxlbmd0aFxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBORVdMSU5FLlxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gSW4gY29tbW9ubWFyay1tb2RlLCBmb2xsb3dpbmcgaW5kZW50ZWQgbGluZXMgYXJlIHBhcnQgb2YgdGhlIHBhcmFncmFwaC5cbiAgICBpZiAoY29tbW9ubWFyaykge1xuICAgICAgc2l6ZSA9IDBcbiAgICAgIHBvc2l0aW9uID0gaW5kZXggKyAxXG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiKSB7XG4gICAgICAgICAgc2l6ZSA9IHRhYlNpemVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgICBzaXplKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24rK1xuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA+PSB0YWJTaXplICYmIGNoYXJhY3RlciAhPT0gbGluZUZlZWQpIHtcbiAgICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZShpbmRleCArIDEpXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZm9sbG93aW5nIGNvZGUgY29udGFpbnMgYSBwb3NzaWJsZSBibG9jay5cbiAgICBpZiAoaW50ZXJydXB0KGludGVycnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgc3VidmFsdWUsIHRydWVdKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IGluZGV4XG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleCArIDEpXG5cbiAgICBpZiAoaW5kZXggIT09IC0xICYmIHRyaW0odmFsdWUuc2xpY2UocG9zaXRpb24sIGluZGV4KSkgPT09ICcnKSB7XG4gICAgICBpbmRleCA9IHBvc2l0aW9uXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBzdWJ2YWx1ZSA9IHRyaW1UcmFpbGluZ0xpbmVzKHN1YnZhbHVlKVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShzdWJ2YWx1ZSwgbm93KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9saW5rJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVmZXJlbmNlXG5yZWZlcmVuY2UubG9jYXRvciA9IGxvY2F0ZVxuXG52YXIgbGluayA9ICdsaW5rJ1xudmFyIGltYWdlID0gJ2ltYWdlJ1xudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG52YXIgZnVsbCA9ICdmdWxsJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcmtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgwKVxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHN1YnZhbHVlID0gJydcbiAgdmFyIGludHJvID0gJydcbiAgdmFyIHR5cGUgPSBsaW5rXG4gIHZhciByZWZlcmVuY2VUeXBlID0gc2hvcnRjdXRcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGlkZW50aWZpZXJcbiAgdmFyIG5vd1xuICB2YXIgbm9kZVxuICB2YXIgZXhpdFxuICB2YXIgcXVldWVcbiAgdmFyIGJyYWNrZXRlZFxuICB2YXIgZGVwdGhcblxuICAvLyBDaGVjayB3aGV0aGVyIHdl4oCZcmUgZWF0aW5nIGFuIGltYWdlLlxuICBpZiAoY2hhcmFjdGVyID09PSBleGNsYW1hdGlvbk1hcmspIHtcbiAgICB0eXBlID0gaW1hZ2VcbiAgICBpbnRybyA9IGNoYXJhY3RlclxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgaW50cm8gKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICAvLyBFYXQgdGhlIHRleHQuXG4gIGRlcHRoID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxlZnRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBicmFja2V0ZWQgPSB0cnVlXG4gICAgICBkZXB0aCsrXG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgaWYgKCFkZXB0aCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZXB0aC0tXG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICBxdWV1ZSArPSBiYWNrc2xhc2hcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgIGluZGV4KytcbiAgfVxuXG4gIHN1YnZhbHVlID0gcXVldWVcbiAgY29udGVudCA9IHF1ZXVlXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICBpZiAoY2hhcmFjdGVyICE9PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGluZGV4KytcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyXG4gIHF1ZXVlID0gJydcblxuICBpZiAoIWNvbW1vbm1hcmspIHtcbiAgICAvLyBUaGUgb3JpZ2luYWwgbWFya2Rvd24gc3ludGF4IGRlZmluaXRpb24gZXhwbGljaXRseSBhbGxvd3MgZm9yIHdoaXRlc3BhY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBsaW5rIHRleHQgYW5kIGxpbmsgbGFiZWw7IGNvbW1vbm1hcmsgZGVwYXJ0cyBmcm9tIHRoaXMsIGluXG4gICAgLy8gcGFydCB0byBpbXByb3ZlIHN1cHBvcnQgZm9yIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rc1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQpIHtcbiAgICBpZGVudGlmaWVyID0gJydcbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICBpbmRleCsrXG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQgfHwgY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoKSB7XG4gICAgICAgIGlkZW50aWZpZXIgKz0gYmFja3NsYXNoXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICAgICAgfVxuXG4gICAgICBpZGVudGlmaWVyICs9IGNoYXJhY3RlclxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IHJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgcmVmZXJlbmNlVHlwZSA9IGlkZW50aWZpZXIgPyBmdWxsIDogY29sbGFwc2VkXG4gICAgICBxdWV1ZSArPSBpZGVudGlmaWVyICsgY2hhcmFjdGVyXG4gICAgICBpbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkZW50aWZpZXIgPSAnJ1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlXG4gICAgcXVldWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWRlbnRpZmllciA9IGNvbnRlbnRcbiAgfVxuXG4gIC8vIEJyYWNrZXRzIGNhbm5vdCBiZSBpbnNpZGUgdGhlIGlkZW50aWZpZXIuXG4gIGlmIChyZWZlcmVuY2VUeXBlICE9PSBmdWxsICYmIGJyYWNrZXRlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3VidmFsdWUgPSBpbnRybyArIHN1YnZhbHVlXG5cbiAgaWYgKHR5cGUgPT09IGxpbmsgJiYgc2VsZi5pbkxpbmspIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKVxuICBub3cuY29sdW1uICs9IGludHJvLmxlbmd0aFxuICBub3cub2Zmc2V0ICs9IGludHJvLmxlbmd0aFxuICBpZGVudGlmaWVyID0gcmVmZXJlbmNlVHlwZSA9PT0gZnVsbCA/IGlkZW50aWZpZXIgOiBjb250ZW50XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiB0eXBlICsgJ1JlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpLFxuICAgIGxhYmVsOiBpZGVudGlmaWVyLFxuICAgIHJlZmVyZW5jZVR5cGU6IHJlZmVyZW5jZVR5cGVcbiAgfVxuXG4gIGlmICh0eXBlID09PSBsaW5rKSB7XG4gICAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gICAgZXhpdCgpXG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsXG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKShub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJylcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvc3Ryb25nJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcbnN0cm9uZy5sb2NhdG9yID0gbG9jYXRlXG5cbnZhciBiYWNrc2xhc2ggPSAnXFxcXCdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHVuZGVyc2NvcmUgPSAnXydcblxuZnVuY3Rpb24gc3Ryb25nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgbm93XG4gIHZhciBwZWRhbnRpY1xuICB2YXIgbWFya2VyXG4gIHZhciBxdWV1ZVxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGxlbmd0aFxuICB2YXIgcHJldmlvdXNcblxuICBpZiAoXG4gICAgKGNoYXJhY3RlciAhPT0gYXN0ZXJpc2sgJiYgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlKSB8fFxuICAgIHZhbHVlLmNoYXJBdCgrK2luZGV4KSAhPT0gY2hhcmFjdGVyXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWNcbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIHN1YnZhbHVlID0gbWFya2VyICsgbWFya2VyXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBpbmRleCsrXG4gIHF1ZXVlID0gJydcbiAgY2hhcmFjdGVyID0gJydcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXJcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IG1hcmtlciAmJlxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IG1hcmtlciAmJlxuICAgICAgKCFwZWRhbnRpYyB8fCAhd2hpdGVzcGFjZShwcmV2aW91cykpXG4gICAgKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKVxuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgaWYgKCF0cmltKHF1ZXVlKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdyA9IGVhdC5ub3coKVxuICAgICAgICBub3cuY29sdW1uICs9IDJcbiAgICAgICAgbm93Lm9mZnNldCArPSAyXG5cbiAgICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlICsgc3VidmFsdWUpKHtcbiAgICAgICAgICB0eXBlOiAnc3Ryb25nJyxcbiAgICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShxdWV1ZSwgbm93KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGVkYW50aWMgJiYgY2hhcmFjdGVyID09PSBiYWNrc2xhc2gpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlclxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpXG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgaW5kZXgrK1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZGFzaCA9ICctJ1xudmFyIGNvbG9uID0gJzonXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgdmVydGljYWxCYXIgPSAnfCdcblxudmFyIG1pbkNvbHVtbnMgPSAxXG52YXIgbWluUm93cyA9IDJcblxudmFyIGxlZnQgPSAnbGVmdCdcbnZhciBjZW50ZXIgPSAnY2VudGVyJ1xudmFyIHJpZ2h0ID0gJ3JpZ2h0J1xuXG5mdW5jdGlvbiB0YWJsZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleFxuICB2YXIgYWxpZ25tZW50c1xuICB2YXIgYWxpZ25tZW50XG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcm93XG4gIHZhciBsZW5ndGhcbiAgdmFyIGxpbmVzXG4gIHZhciBxdWV1ZVxuICB2YXIgY2hhcmFjdGVyXG4gIHZhciBoYXNEYXNoXG4gIHZhciBhbGlnblxuICB2YXIgY2VsbFxuICB2YXIgcHJlYW1ibGVcbiAgdmFyIG5vd1xuICB2YXIgcG9zaXRpb25cbiAgdmFyIGxpbmVDb3VudFxuICB2YXIgbGluZVxuICB2YXIgcm93c1xuICB2YXIgdGFibGVcbiAgdmFyIGxpbmVJbmRleFxuICB2YXIgcGlwZUluZGV4XG4gIHZhciBmaXJzdFxuXG4gIC8vIEV4aXQgd2hlbiBub3QgaW4gZ2ZtLW1vZGUuXG4gIGlmICghc2VsZi5vcHRpb25zLmdmbSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gR2V0IHRoZSByb3dzLlxuICAvLyBEZXRlY3RpbmcgdGFibGVzIHNvb24gaXMgaGFyZCwgc28gdGhlcmUgYXJlIHNvbWUgY2hlY2tzIGZvciBwZXJmb3JtYW5jZVxuICAvLyBoZXJlLCBzdWNoIGFzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzLCBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzIGluIHRoZVxuICAvLyBhbGlnbm1lbnQgcm93LlxuICBpbmRleCA9IDBcbiAgbGluZUNvdW50ID0gMFxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIGxpbmVzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBsaW5lSW5kZXggPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkLCBpbmRleClcbiAgICBwaXBlSW5kZXggPSB2YWx1ZS5pbmRleE9mKHZlcnRpY2FsQmFyLCBpbmRleCArIDEpXG5cbiAgICBpZiAobGluZUluZGV4ID09PSAtMSkge1xuICAgICAgbGluZUluZGV4ID0gdmFsdWUubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKHBpcGVJbmRleCA9PT0gLTEgfHwgcGlwZUluZGV4ID4gbGluZUluZGV4KSB7XG4gICAgICBpZiAobGluZUNvdW50IDwgbWluUm93cykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsaW5lcy5wdXNoKHZhbHVlLnNsaWNlKGluZGV4LCBsaW5lSW5kZXgpKVxuICAgIGxpbmVDb3VudCsrXG4gICAgaW5kZXggPSBsaW5lSW5kZXggKyAxXG4gIH1cblxuICAvLyBQYXJzZSB0aGUgYWxpZ25tZW50IHJvdy5cbiAgc3VidmFsdWUgPSBsaW5lcy5qb2luKGxpbmVGZWVkKVxuICBhbGlnbm1lbnRzID0gbGluZXMuc3BsaWNlKDEsIDEpWzBdIHx8IFtdXG4gIGluZGV4ID0gMFxuICBsZW5ndGggPSBhbGlnbm1lbnRzLmxlbmd0aFxuICBsaW5lQ291bnQtLVxuICBhbGlnbm1lbnQgPSBmYWxzZVxuICBhbGlnbiA9IFtdXG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gYWxpZ25tZW50cy5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSB2ZXJ0aWNhbEJhcikge1xuICAgICAgaGFzRGFzaCA9IG51bGxcblxuICAgICAgaWYgKGFsaWdubWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbi5wdXNoKGFsaWdubWVudClcbiAgICAgICAgYWxpZ25tZW50ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZmlyc3QgPSBmYWxzZVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBkYXNoKSB7XG4gICAgICBoYXNEYXNoID0gdHJ1ZVxuICAgICAgYWxpZ25tZW50ID0gYWxpZ25tZW50IHx8IG51bGxcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gY29sb24pIHtcbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IGxlZnQpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gY2VudGVyXG4gICAgICB9IGVsc2UgaWYgKGhhc0Rhc2ggJiYgYWxpZ25tZW50ID09PSBudWxsKSB7XG4gICAgICAgIGFsaWdubWVudCA9IHJpZ2h0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbm1lbnQgPSBsZWZ0XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbmRleCsrXG4gIH1cblxuICBpZiAoYWxpZ25tZW50ICE9PSBmYWxzZSkge1xuICAgIGFsaWduLnB1c2goYWxpZ25tZW50KVxuICB9XG5cbiAgLy8gRXhpdCB3aGVuIHdpdGhvdXQgZW5vdWdoIGNvbHVtbnMuXG4gIGlmIChhbGlnbi5sZW5ndGggPCBtaW5Db2x1bW5zKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gUGFyc2UgdGhlIHJvd3MuXG4gIHBvc2l0aW9uID0gLTFcbiAgcm93cyA9IFtdXG5cbiAgdGFibGUgPSBlYXQoc3VidmFsdWUpLnJlc2V0KHt0eXBlOiAndGFibGUnLCBhbGlnbjogYWxpZ24sIGNoaWxkcmVuOiByb3dzfSlcblxuICB3aGlsZSAoKytwb3NpdGlvbiA8IGxpbmVDb3VudCkge1xuICAgIGxpbmUgPSBsaW5lc1twb3NpdGlvbl1cbiAgICByb3cgPSB7dHlwZTogJ3RhYmxlUm93JywgY2hpbGRyZW46IFtdfVxuXG4gICAgLy8gRWF0IGEgbmV3bGluZSBjaGFyYWN0ZXIgd2hlbiB0aGlzIGlzIG5vdCB0aGUgZmlyc3Qgcm93LlxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgZWF0KGxpbmVGZWVkKVxuICAgIH1cblxuICAgIC8vIEVhdCB0aGUgcm93LlxuICAgIGVhdChsaW5lKS5yZXNldChyb3csIHRhYmxlKVxuXG4gICAgbGVuZ3RoID0gbGluZS5sZW5ndGggKyAxXG4gICAgaW5kZXggPSAwXG4gICAgcXVldWUgPSAnJ1xuICAgIGNlbGwgPSAnJ1xuICAgIHByZWFtYmxlID0gdHJ1ZVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSBsaW5lLmNoYXJBdChpbmRleClcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGFiIHx8IGNoYXJhY3RlciA9PT0gc3BhY2UpIHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnJyB8fCBjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyKSB7XG4gICAgICAgIGlmIChwcmVhbWJsZSkge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKChjZWxsIHx8IGNoYXJhY3RlcikgJiYgIXByZWFtYmxlKSB7XG4gICAgICAgICAgICBzdWJ2YWx1ZSA9IGNlbGxcblxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlLnNsaWNlKDAsIC0xKVxuICAgICAgICAgICAgICAgIHF1ZXVlID0gcXVldWUuY2hhckF0KHF1ZXVlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWVcbiAgICAgICAgICAgICAgICBxdWV1ZSA9ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm93ID0gZWF0Lm5vdygpXG5cbiAgICAgICAgICAgIGVhdChzdWJ2YWx1ZSkoXG4gICAgICAgICAgICAgIHt0eXBlOiAndGFibGVDZWxsJywgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY2VsbCwgbm93KX0sXG4gICAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVhdChxdWV1ZSArIGNoYXJhY3RlcilcblxuICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgICBjZWxsID0gJydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHF1ZXVlKSB7XG4gICAgICAgICAgY2VsbCArPSBxdWV1ZVxuICAgICAgICAgIHF1ZXVlID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwgKz0gY2hhcmFjdGVyXG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gYmFja3NsYXNoICYmIGluZGV4ICE9PSBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgY2VsbCArPSBsaW5lLmNoYXJBdChpbmRleCArIDEpXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZWFtYmxlID0gZmFsc2VcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICAvLyBFYXQgdGhlIGFsaWdubWVudCByb3cuXG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgZWF0KGxpbmVGZWVkICsgYWxpZ25tZW50cylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFibGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxuZnVuY3Rpb24gdGV4dChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBtZXRob2RzXG4gIHZhciB0b2tlbml6ZXJzXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcG9zaXRpb25cbiAgdmFyIHRva2VuaXplclxuICB2YXIgbmFtZVxuICB2YXIgbWluXG4gIHZhciBub3dcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWV0aG9kcyA9IHNlbGYuaW5saW5lTWV0aG9kc1xuICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIGluZGV4ID0gLTFcbiAgbWluID0gdmFsdWUubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBuYW1lID0gbWV0aG9kc1tpbmRleF1cblxuICAgIGlmIChuYW1lID09PSAndGV4dCcgfHwgIXRva2VuaXplcnNbbmFtZV0pIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdG9rZW5pemVyID0gdG9rZW5pemVyc1tuYW1lXS5sb2NhdG9yXG5cbiAgICBpZiAoIXRva2VuaXplcikge1xuICAgICAgZWF0LmZpbGUuZmFpbCgnTWlzc2luZyBsb2NhdG9yOiBgJyArIG5hbWUgKyAnYCcpXG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSB0b2tlbml6ZXIuY2FsbChzZWxmLCB2YWx1ZSwgMSlcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgcG9zaXRpb24gPCBtaW4pIHtcbiAgICAgIG1pbiA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBtaW4pXG4gIG5vdyA9IGVhdC5ub3coKVxuXG4gIHNlbGYuZGVjb2RlKHN1YnZhbHVlLCBub3csIGhhbmRsZXIpXG5cbiAgZnVuY3Rpb24gaGFuZGxlcihjb250ZW50LCBwb3NpdGlvbiwgc291cmNlKSB7XG4gICAgZWF0KHNvdXJjZSB8fCBjb250ZW50KSh7dHlwZTogJ3RleHQnLCB2YWx1ZTogY29udGVudH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgYXN0ZXJpc2sgPSAnKidcbnZhciBkYXNoID0gJy0nXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xuXG52YXIgbWF4Q291bnQgPSAzXG5cbmZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxXG4gIHZhciBzdWJ2YWx1ZSA9ICcnXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIG1hcmtlclxuICB2YXIgbWFya2VyQ291bnRcbiAgdmFyIHF1ZXVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSB0YWIgJiYgY2hhcmFjdGVyICE9PSBzcGFjZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXJcbiAgfVxuXG4gIGlmIChcbiAgICBjaGFyYWN0ZXIgIT09IGFzdGVyaXNrICYmXG4gICAgY2hhcmFjdGVyICE9PSBkYXNoICYmXG4gICAgY2hhcmFjdGVyICE9PSB1bmRlcnNjb3JlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbWFya2VyID0gY2hhcmFjdGVyXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlclxuICBtYXJrZXJDb3VudCA9IDFcbiAgcXVldWUgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyKSB7XG4gICAgICBtYXJrZXJDb3VudCsrXG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIG1hcmtlclxuICAgICAgcXVldWUgPSAnJ1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG1hcmtlckNvdW50ID49IG1heENvdW50ICYmXG4gICAgICAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKVxuICAgICkge1xuICAgICAgc3VidmFsdWUgKz0gcXVldWVcblxuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ3RoZW1hdGljQnJlYWsnfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNjb3VudCA9IHJlcXVpcmUoJ2Njb3VudCcpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3VybCcpXG5cbm1vZHVsZS5leHBvcnRzID0gdXJsXG51cmwubG9jYXRvciA9IGxvY2F0ZVxudXJsLm5vdEluTGluayA9IHRydWVcblxudmFyIGV4Y2xhbWF0aW9uTWFyayA9IDMzIC8vICchJ1xudmFyIGFtcGVyc2FuZCA9IDM4IC8vICcmJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSA0MSAvLyAnKSdcbnZhciBhc3RlcmlzayA9IDQyIC8vICcqJ1xudmFyIGNvbW1hID0gNDQgLy8gJywnXG52YXIgZGFzaCA9IDQ1IC8vICctJ1xudmFyIGRvdCA9IDQ2IC8vICcuJ1xudmFyIGNvbG9uID0gNTggLy8gJzonXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gJzsnXG52YXIgcXVlc3Rpb25NYXJrID0gNjMgLy8gJz8nXG52YXIgbGVzc1RoYW4gPSA2MCAvLyAnPCdcbnZhciB1bmRlcnNjb3JlID0gOTUgLy8gJ18nXG52YXIgdGlsZGUgPSAxMjYgLy8gJ34nXG5cbnZhciBsZWZ0UGFyZW50aGVzaXNDaGFyYWN0ZXIgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzQ2hhcmFjdGVyID0gJyknXG5cbmZ1bmN0aW9uIHVybChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBnZm0gPSBzZWxmLm9wdGlvbnMuZ2ZtXG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHByZXZpb3VzRG90ID0gLTFcbiAgdmFyIHByb3RvY29sbGVzcyA9IGZhbHNlXG4gIHZhciBkb3RzXG4gIHZhciBsYXN0VHdvUGFydHNTdGFydFxuICB2YXIgc3RhcnRcbiAgdmFyIGluZGV4XG4gIHZhciBwYXRoU3RhcnRcbiAgdmFyIHBhdGhcbiAgdmFyIGNvZGVcbiAgdmFyIGVuZFxuICB2YXIgbGVmdENvdW50XG4gIHZhciByaWdodENvdW50XG4gIHZhciBjb250ZW50XG4gIHZhciBjaGlsZHJlblxuICB2YXIgdXJsXG4gIHZhciBleGl0XG5cbiAgaWYgKCFnZm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGBXV1cuYCBkb2VzbuKAmXQgd29yay5cbiAgaWYgKHZhbHVlLnNsaWNlKDAsIDQpID09PSAnd3d3LicpIHtcbiAgICBwcm90b2NvbGxlc3MgPSB0cnVlXG4gICAgaW5kZXggPSA0XG4gIH0gZWxzZSBpZiAodmFsdWUuc2xpY2UoMCwgNykudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHA6Ly8nKSB7XG4gICAgaW5kZXggPSA3XG4gIH0gZWxzZSBpZiAodmFsdWUuc2xpY2UoMCwgOCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHBzOi8vJykge1xuICAgIGluZGV4ID0gOFxuICB9IGVsc2Uge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQWN0IGFzIGlmIHRoZSBzdGFydGluZyBib3VuZGFyeSBpcyBhIGRvdC5cbiAgcHJldmlvdXNEb3QgPSBpbmRleCAtIDFcblxuICAvLyBQYXJzZSBhIHZhbGlkIGRvbWFpbi5cbiAgc3RhcnQgPSBpbmRleFxuICBkb3RzID0gW11cblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICAgIC8vIERvdHMgbWF5IG5vdCBhcHBlYXIgYWZ0ZXIgZWFjaCBvdGhlci5cbiAgICAgIGlmIChwcmV2aW91c0RvdCA9PT0gaW5kZXggLSAxKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRvdHMucHVzaChpbmRleClcbiAgICAgIHByZXZpb3VzRG90ID0gaW5kZXhcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVjaW1hbChjb2RlKSB8fFxuICAgICAgYWxwaGFiZXRpY2FsKGNvZGUpIHx8XG4gICAgICBjb2RlID09PSBkYXNoIHx8XG4gICAgICBjb2RlID09PSB1bmRlcnNjb3JlXG4gICAgKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGJyZWFrXG4gIH1cblxuICAvLyBJZ25vcmUgYSBmaW5hbCBkb3Q6XG4gIGlmIChjb2RlID09PSBkb3QpIHtcbiAgICBkb3RzLnBvcCgpXG4gICAgaW5kZXgtLVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vdCBkb3RzLCBleGl0LlxuICBpZiAoZG90c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZiB0aGVyZSBpcyBhbiB1bmRlcnNjb3JlIGluIHRoZSBsYXN0IHR3byBkb21haW4gcGFydHMsIGV4aXQ6XG4gIC8vIGB3d3cuZXhhbXBsZS5jX21gIGFuZCBgd3d3LmV4X2FtcGxlLmNvbWAgYXJlIG5vdCBPSywgYnV0XG4gIC8vIGB3d3cuc3ViX2RvbWFpbi5leGFtcGxlLmNvbWAgaXMuXG4gIGxhc3RUd29QYXJ0c1N0YXJ0ID0gZG90cy5sZW5ndGggPCAyID8gc3RhcnQgOiBkb3RzW2RvdHMubGVuZ3RoIC0gMl0gKyAxXG5cbiAgaWYgKHZhbHVlLnNsaWNlKGxhc3RUd29QYXJ0c1N0YXJ0LCBpbmRleCkuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGVuZCA9IGluZGV4XG4gIHBhdGhTdGFydCA9IGluZGV4XG5cbiAgLy8gUGFyc2UgYSBwYXRoLlxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNvZGUpIHx8IGNvZGUgPT09IGxlc3NUaGFuKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGluZGV4KytcblxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGV4Y2xhbWF0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgIGNvZGUgPT09IGNvbW1hIHx8XG4gICAgICBjb2RlID09PSBkb3QgfHxcbiAgICAgIGNvZGUgPT09IGNvbG9uIHx8XG4gICAgICBjb2RlID09PSBxdWVzdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IHVuZGVyc2NvcmUgfHxcbiAgICAgIGNvZGUgPT09IHRpbGRlXG4gICAgKSB7XG4gICAgICAvLyBFbXB0eVxuICAgIH0gZWxzZSB7XG4gICAgICBlbmQgPSBpbmRleFxuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gZW5kXG5cbiAgLy8gSWYgdGhlIHBhdGggZW5kcyBpbiBhIGNsb3NpbmcgcGFyZW4sIGFuZCB0aGUgY291bnQgb2YgY2xvc2luZyBwYXJlbnMgaXNcbiAgLy8gaGlnaGVyIHRoYW4gdGhlIG9wZW5pbmcgY291bnQsIHRoZW4gcmVtb3ZlIHRoZSBzdXBlZmx1b3VzIGNsb3NpbmcgcGFyZW5zLlxuICBpZiAodmFsdWUuY2hhckNvZGVBdChpbmRleCAtIDEpID09PSByaWdodFBhcmVudGhlc2lzKSB7XG4gICAgcGF0aCA9IHZhbHVlLnNsaWNlKHBhdGhTdGFydCwgaW5kZXgpXG4gICAgbGVmdENvdW50ID0gY2NvdW50KHBhdGgsIGxlZnRQYXJlbnRoZXNpc0NoYXJhY3RlcilcbiAgICByaWdodENvdW50ID0gY2NvdW50KHBhdGgsIHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG5cbiAgICB3aGlsZSAocmlnaHRDb3VudCA+IGxlZnRDb3VudCkge1xuICAgICAgaW5kZXggPSBwYXRoU3RhcnQgKyBwYXRoLmxhc3RJbmRleE9mKHJpZ2h0UGFyZW50aGVzaXNDaGFyYWN0ZXIpXG4gICAgICBwYXRoID0gdmFsdWUuc2xpY2UocGF0aFN0YXJ0LCBpbmRleClcbiAgICAgIHJpZ2h0Q291bnQtLVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGluZGV4IC0gMSkgPT09IHNlbWljb2xvbikge1xuICAgIC8vIEdpdEh1YiBkb2VzbuKAmXQgZG9jdW1lbnQgdGhpcywgYnV0IGZpbmFsIHNlbWljb2xvbnMgYXJlbuKAmXQgcGFyZXQgb2YgdGhlXG4gICAgLy8gVVJMIGVpdGhlci5cbiAgICBpbmRleC0tXG5cbiAgICAvLyAvLyBJZiB0aGUgcGF0aCBlbmRzIGluIHdoYXQgbG9va3MgbGlrZSBhbiBlbnRpdHksIGl04oCZcyBub3QgcGFydCBvZiB0aGUgcGF0aC5cbiAgICBpZiAoYWxwaGFiZXRpY2FsKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggLSAxKSkpIHtcbiAgICAgIGVuZCA9IGluZGV4IC0gMlxuXG4gICAgICB3aGlsZSAoYWxwaGFiZXRpY2FsKHZhbHVlLmNoYXJDb2RlQXQoZW5kKSkpIHtcbiAgICAgICAgZW5kLS1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gYW1wZXJzYW5kKSB7XG4gICAgICAgIGluZGV4ID0gZW5kXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KVxuICB1cmwgPSBkZWNvZGUoY29udGVudCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSlcblxuICBpZiAocHJvdG9jb2xsZXNzKSB7XG4gICAgdXJsID0gJ2h0dHA6Ly8nICsgdXJsXG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKVxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlbW92ZSBhbGwgdG9rZW5pemVycyBleGNlcHQgdGV4dCBpbiB1cmwuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHt0ZXh0OiB0b2tlbml6ZXJzLnRleHR9XG4gIGNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBlYXQubm93KCkpXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnNcblxuICBleGl0KClcblxuICByZXR1cm4gZWF0KGNvbnRlbnQpKHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6IHVybCwgY2hpbGRyZW46IGNoaWxkcmVufSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gQ29uc3RydWN0IGEgdG9rZW5pemVyLiAgVGhpcyBjcmVhdGVzIGJvdGggYHRva2VuaXplSW5saW5lYCBhbmQgYHRva2VuaXplQmxvY2tgLlxuZnVuY3Rpb24gZmFjdG9yeSh0eXBlKSB7XG4gIHJldHVybiB0b2tlbml6ZVxuXG4gIC8vIFRva2VuaXplciBmb3IgYSBib3VuZCBgdHlwZWAuXG4gIGZ1bmN0aW9uIHRva2VuaXplKHZhbHVlLCBsb2NhdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBvZmZzZXQgPSBzZWxmLm9mZnNldFxuICAgIHZhciB0b2tlbnMgPSBbXVxuICAgIHZhciBtZXRob2RzID0gc2VsZlt0eXBlICsgJ01ldGhvZHMnXVxuICAgIHZhciB0b2tlbml6ZXJzID0gc2VsZlt0eXBlICsgJ1Rva2VuaXplcnMnXVxuICAgIHZhciBsaW5lID0gbG9jYXRpb24ubGluZVxuICAgIHZhciBjb2x1bW4gPSBsb2NhdGlvbi5jb2x1bW5cbiAgICB2YXIgaW5kZXhcbiAgICB2YXIgbGVuZ3RoXG4gICAgdmFyIG1ldGhvZFxuICAgIHZhciBuYW1lXG4gICAgdmFyIG1hdGNoZWRcbiAgICB2YXIgdmFsdWVMZW5ndGhcblxuICAgIC8vIFRyaW0gd2hpdGUgc3BhY2Ugb25seSBsaW5lcy5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9rZW5zXG4gICAgfVxuXG4gICAgLy8gRXhwb3NlIG9uIGBlYXRgLlxuICAgIGVhdC5ub3cgPSBub3dcbiAgICBlYXQuZmlsZSA9IHNlbGYuZmlsZVxuXG4gICAgLy8gU3luYyBpbml0aWFsIG9mZnNldC5cbiAgICB1cGRhdGVQb3NpdGlvbignJylcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBgdmFsdWVgLCBhbmQgaXRlcmF0ZSBvdmVyIGFsbCB0b2tlbml6ZXJzLiAgV2hlbiBvbmUgZWF0c1xuICAgIC8vIHNvbWV0aGluZywgcmUtaXRlcmF0ZSB3aXRoIHRoZSByZW1haW5pbmcgdmFsdWUuICBJZiBubyB0b2tlbml6ZXIgZWF0cyxcbiAgICAvLyBzb21ldGhpbmcgZmFpbGVkIChzaG91bGQgbm90IGhhcHBlbikgYW5kIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgd2hpbGUgKHZhbHVlKSB7XG4gICAgICBpbmRleCA9IC0xXG4gICAgICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICAgICAgbWF0Y2hlZCA9IGZhbHNlXG5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIG5hbWUgPSBtZXRob2RzW2luZGV4XVxuICAgICAgICBtZXRob2QgPSB0b2tlbml6ZXJzW25hbWVdXG5cbiAgICAgICAgLy8gUHJldmlvdXNseSwgd2UgaGFkIGNvbnN0cnVjdHMgc3VjaCBhcyBmb290bm90ZXMgYW5kIFlBTUwgdGhhdCB1c2VkXG4gICAgICAgIC8vIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICAgIC8vIFRob3NlIGFyZSBub3cgZXh0ZXJuYWwgKHBsdXMgdGhlcmUgYXJlIHVzZXJsYW5kIGV4dGVuc2lvbnMpLCB0aGF0IG1heVxuICAgICAgICAvLyBzdGlsbCB1c2UgdGhlbS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1ldGhvZCAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm9ubHlBdFN0YXJ0IHx8IHNlbGYuYXRTdGFydCkgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5ub3RJbkxpc3QgfHwgIXNlbGYuaW5MaXN0KSAmJlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICghbWV0aG9kLm5vdEluQmxvY2sgfHwgIXNlbGYuaW5CbG9jaykgJiZcbiAgICAgICAgICAoIW1ldGhvZC5ub3RJbkxpbmsgfHwgIXNlbGYuaW5MaW5rKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuXG4gICAgICAgICAgbWV0aG9kLmFwcGx5KHNlbGYsIFtlYXQsIHZhbHVlXSlcblxuICAgICAgICAgIG1hdGNoZWQgPSB2YWx1ZUxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgc2VsZi5maWxlLmZhaWwobmV3IEVycm9yKCdJbmZpbml0ZSBsb29wJyksIGVhdC5ub3coKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLmVvZiA9IG5vdygpXG5cbiAgICByZXR1cm4gdG9rZW5zXG5cbiAgICAvLyBVcGRhdGUgbGluZSwgY29sdW1uLCBhbmQgb2Zmc2V0IGJhc2VkIG9uIGB2YWx1ZWAuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oc3VidmFsdWUpIHtcbiAgICAgIHZhciBsYXN0SW5kZXggPSAtMVxuICAgICAgdmFyIGluZGV4ID0gc3VidmFsdWUuaW5kZXhPZignXFxuJylcblxuICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBsaW5lKytcbiAgICAgICAgbGFzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nLCBpbmRleCArIDEpXG4gICAgICB9XG5cbiAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHN1YnZhbHVlLmxlbmd0aCAtIGxhc3RJbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAobGluZSBpbiBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb2x1bW4gKz0gb2Zmc2V0W2xpbmVdXG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uIDw9IG9mZnNldFtsaW5lXSkge1xuICAgICAgICAgIGNvbHVtbiA9IG9mZnNldFtsaW5lXSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBvZmZzZXQuICBDYWxsZWQgYmVmb3JlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgZWF0ZW4gdG8gcmV0cmlldmUgdGhlXG4gICAgLy8gcmFuZ2XigJlzIG9mZnNldHMuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIGluZGVudGF0aW9uID0gW11cbiAgICAgIHZhciBwb3MgPSBsaW5lICsgMVxuXG4gICAgICAvLyBEb25lLiAgQ2FsbGVkIHdoZW4gdGhlIGxhc3QgY2hhcmFjdGVyIGlzIGVhdGVuIHRvIHJldHJpZXZlIHRoZSByYW5nZeKAmXNcbiAgICAgIC8vIG9mZnNldHMuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdCA9IGxpbmUgKyAxXG5cbiAgICAgICAgd2hpbGUgKHBvcyA8IGxhc3QpIHtcbiAgICAgICAgICBpbmRlbnRhdGlvbi5wdXNoKChvZmZzZXRbcG9zXSB8fCAwKSArIDEpXG5cbiAgICAgICAgICBwb3MrK1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudGF0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgIGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgIHZhciBwb3MgPSB7bGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59XG5cbiAgICAgIHBvcy5vZmZzZXQgPSBzZWxmLnRvT2Zmc2V0KHBvcylcblxuICAgICAgcmV0dXJuIHBvc1xuICAgIH1cblxuICAgIC8vIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydFxuICAgICAgdGhpcy5lbmQgPSBub3coKVxuICAgIH1cblxuICAgIC8vIFRocm93IHdoZW4gYSB2YWx1ZSBpcyBpbmNvcnJlY3RseSBlYXRlbi4gIFRoaXMgc2hvdWxkbuKAmXQgaGFwcGVuIGJ1dCB3aWxsXG4gICAgLy8gdGhyb3cgb24gbmV3LCBpbmNvcnJlY3QgcnVsZXMuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFYXQoc3VidmFsdWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHZhbHVlLnNsaWNlKDAsIHN1YnZhbHVlLmxlbmd0aCkgIT09IHN1YnZhbHVlKSB7XG4gICAgICAgIC8vIENhcHR1cmUgc3RhY2stdHJhY2UuXG4gICAgICAgIHNlbGYuZmlsZS5mYWlsKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdJbmNvcnJlY3RseSBlYXRlbiB2YWx1ZTogcGxlYXNlIHJlcG9ydCB0aGlzIHdhcm5pbmcgb24gaHR0cHM6Ly9naXQuaW8vdmc1RnQnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBub3coKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFyayBwb3NpdGlvbiBhbmQgcGF0Y2ggYG5vZGUucG9zaXRpb25gLlxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgdmFyIGJlZm9yZSA9IG5vdygpXG5cbiAgICAgIHJldHVybiB1cGRhdGVcblxuICAgICAgLy8gQWRkIHRoZSBwb3NpdGlvbiB0byBhIG5vZGUuXG4gICAgICBmdW5jdGlvbiB1cGRhdGUobm9kZSwgaW5kZW50KSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IG5vZGUucG9zaXRpb25cbiAgICAgICAgdmFyIHN0YXJ0ID0gcHJldmlvdXMgPyBwcmV2aW91cy5zdGFydCA6IGJlZm9yZVxuICAgICAgICB2YXIgY29tYmluZWQgPSBbXVxuICAgICAgICB2YXIgbiA9IHByZXZpb3VzICYmIHByZXZpb3VzLmVuZC5saW5lXG4gICAgICAgIHZhciBsID0gYmVmb3JlLmxpbmVcblxuICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHN0YXJ0KVxuXG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBhbHJlYWR5IGEgYHBvc2l0aW9uYCwgdGhpcyBub2RlIHdhcyBtZXJnZWQuICBGaXhpbmdcbiAgICAgICAgLy8gYHN0YXJ0YCB3YXNu4oCZdCBoYXJkLCBidXQgdGhlIGluZGVudCBpcyBkaWZmZXJlbnQuICBFc3BlY2lhbGx5XG4gICAgICAgIC8vIGJlY2F1c2Ugc29tZSBpbmZvcm1hdGlvbiwgdGhlIGluZGVudCBiZXR3ZWVuIGBuYCBhbmQgYGxgIHdhc27igJl0XG4gICAgICAgIC8vIHRyYWNrZWQuICBMdWNraWx5LCB0aGF0IHNwYWNlIGlzIChzaG91bGQgYmU/KSBlbXB0eSwgc28gd2UgY2FuXG4gICAgICAgIC8vIHNhZmVseSBjaGVjayBmb3IgaXQgbm93LlxuICAgICAgICBpZiAocHJldmlvdXMgJiYgaW5kZW50ICYmIHByZXZpb3VzLmluZGVudCkge1xuICAgICAgICAgIGNvbWJpbmVkID0gcHJldmlvdXMuaW5kZW50XG5cbiAgICAgICAgICBpZiAobiA8IGwpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK24gPCBsKSB7XG4gICAgICAgICAgICAgIGNvbWJpbmVkLnB1c2goKG9mZnNldFtuXSB8fCAwKSArIDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbWJpbmVkLnB1c2goYmVmb3JlLmNvbHVtbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRlbnQgPSBjb21iaW5lZC5jb25jYXQoaW5kZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbi5pbmRlbnQgPSBpbmRlbnQgfHwgW11cblxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBgbm9kZWAgdG8gYHBhcmVudGBzIGNoaWxkcmVuIG9yIHRvIGB0b2tlbnNgLiAgUGVyZm9ybXMgbWVyZ2VzIHdoZXJlXG4gICAgLy8gcG9zc2libGUuXG4gICAgZnVuY3Rpb24gYWRkKG5vZGUsIHBhcmVudCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogdG9rZW5zXG4gICAgICB2YXIgcHJldmlvdXMgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgICAgdmFyIGZuXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXMgJiZcbiAgICAgICAgbm9kZS50eXBlID09PSBwcmV2aW91cy50eXBlICYmXG4gICAgICAgIChub2RlLnR5cGUgPT09ICd0ZXh0JyB8fCBub2RlLnR5cGUgPT09ICdibG9ja3F1b3RlJykgJiZcbiAgICAgICAgbWVyZ2VhYmxlKHByZXZpb3VzKSAmJlxuICAgICAgICBtZXJnZWFibGUobm9kZSlcbiAgICAgICkge1xuICAgICAgICBmbiA9IG5vZGUudHlwZSA9PT0gJ3RleHQnID8gbWVyZ2VUZXh0IDogbWVyZ2VCbG9ja3F1b3RlXG4gICAgICAgIG5vZGUgPSBmbi5jYWxsKHNlbGYsIHByZXZpb3VzLCBub2RlKVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSAhPT0gcHJldmlvdXMpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5hdFN0YXJ0ICYmIHRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2VsZi5leGl0U3RhcnQoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBgc3VidmFsdWVgIGZyb20gYHZhbHVlYC4gIGBzdWJ2YWx1ZWAgbXVzdCBiZSBhdCB0aGUgc3RhcnQgb2ZcbiAgICAvLyBgdmFsdWVgLlxuICAgIGZ1bmN0aW9uIGVhdChzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGluZGVudCA9IGdldE9mZnNldCgpXG4gICAgICB2YXIgcG9zID0gcG9zaXRpb24oKVxuICAgICAgdmFyIGN1cnJlbnQgPSBub3coKVxuXG4gICAgICB2YWxpZGF0ZUVhdChzdWJ2YWx1ZSlcblxuICAgICAgYXBwbHkucmVzZXQgPSByZXNldFxuICAgICAgcmVzZXQudGVzdCA9IHRlc3RcbiAgICAgIGFwcGx5LnRlc3QgPSB0ZXN0XG5cbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2Uoc3VidmFsdWUubGVuZ3RoKVxuXG4gICAgICB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSlcblxuICAgICAgaW5kZW50ID0gaW5kZW50KClcblxuICAgICAgcmV0dXJuIGFwcGx5XG5cbiAgICAgIC8vIEFkZCB0aGUgZ2l2ZW4gYXJndW1lbnRzLCBhZGQgYHBvc2l0aW9uYCB0byB0aGUgcmV0dXJuZWQgbm9kZSwgYW5kXG4gICAgICAvLyByZXR1cm4gdGhlIG5vZGUuXG4gICAgICBmdW5jdGlvbiBhcHBseShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyhhZGQocG9zKG5vZGUpLCBwYXJlbnQpLCBpbmRlbnQpXG4gICAgICB9XG5cbiAgICAgIC8vIEZ1bmN0aW9ucyBqdXN0IGxpa2UgYXBwbHksIGJ1dCByZXNldHMgdGhlIGNvbnRlbnQ6IHRoZSBsaW5lIGFuZFxuICAgICAgLy8gY29sdW1uIGFyZSByZXZlcnNlZCwgYW5kIHRoZSBlYXRlbiB2YWx1ZSBpcyByZS1hZGRlZC4gICBUaGlzIGlzXG4gICAgICAvLyB1c2VmdWwgZm9yIG5vZGVzIHdpdGggYSBzaW5nbGUgdHlwZSBvZiBjb250ZW50LCBzdWNoIGFzIGxpc3RzIGFuZFxuICAgICAgLy8gdGFibGVzLiAgU2VlIGBhcHBseWAgYWJvdmUgZm9yIHdoYXQgcGFyYW1ldGVycyBhcmUgZXhwZWN0ZWQuXG4gICAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcHBseS5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZVxuICAgICAgICBjb2x1bW4gPSBjdXJyZW50LmNvbHVtblxuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWVcblxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuXG4gICAgICAvLyBUZXN0IHRoZSBwb3NpdGlvbiwgYWZ0ZXIgZWF0aW5nLCBhbmQgcmV2ZXJzZSB0byBhIG5vdC1lYXRlbiBzdGF0ZS5cbiAgICAgIGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwb3Moe30pXG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZVxuICAgICAgICBjb2x1bW4gPSBjdXJyZW50LmNvbHVtblxuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWVcblxuICAgICAgICByZXR1cm4gcmVzdWx0LnBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIHdoZXRoZXIgYSBub2RlIGlzIG1lcmdlYWJsZSB3aXRoIGFkamFjZW50IG5vZGVzLlxuZnVuY3Rpb24gbWVyZ2VhYmxlKG5vZGUpIHtcbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICBpZiAobm9kZS50eXBlICE9PSAndGV4dCcgfHwgIW5vZGUucG9zaXRpb24pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3RhcnQgPSBub2RlLnBvc2l0aW9uLnN0YXJ0XG4gIGVuZCA9IG5vZGUucG9zaXRpb24uZW5kXG5cbiAgLy8gT25seSBtZXJnZSBub2RlcyB3aGljaCBvY2N1cHkgdGhlIHNhbWUgc2l6ZSBhcyB0aGVpciBgdmFsdWVgLlxuICByZXR1cm4gKFxuICAgIHN0YXJ0LmxpbmUgIT09IGVuZC5saW5lIHx8IGVuZC5jb2x1bW4gLSBzdGFydC5jb2x1bW4gPT09IG5vZGUudmFsdWUubGVuZ3RoXG4gIClcbn1cblxuLy8gTWVyZ2UgdHdvIHRleHQgbm9kZXM6IGBub2RlYCBpbnRvIGBwcmV2YC5cbmZ1bmN0aW9uIG1lcmdlVGV4dChwcmV2aW91cywgbm9kZSkge1xuICBwcmV2aW91cy52YWx1ZSArPSBub2RlLnZhbHVlXG5cbiAgcmV0dXJuIHByZXZpb3VzXG59XG5cbi8vIE1lcmdlIHR3byBibG9ja3F1b3RlczogYG5vZGVgIGludG8gYHByZXZgLCB1bmxlc3MgaW4gQ29tbW9uTWFyayBvciBnZm0gbW9kZXMuXG5mdW5jdGlvbiBtZXJnZUJsb2NrcXVvdGUocHJldmlvdXMsIG5vZGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jb21tb25tYXJrIHx8IHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcHJldmlvdXMuY2hpbGRyZW4gPSBwcmV2aW91cy5jaGlsZHJlbi5jb25jYXQobm9kZS5jaGlsZHJlbilcblxuICByZXR1cm4gcHJldmlvdXNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xuXG4vLyBGYWN0b3J5IHRvIGRlLWVzY2FwZSBhIHZhbHVlLCBiYXNlZCBvbiBhIGxpc3QgYXQgYGtleWAgaW4gYGN0eGAuXG5mdW5jdGlvbiBmYWN0b3J5KGN0eCwga2V5KSB7XG4gIHJldHVybiB1bmVzY2FwZVxuXG4gIC8vIERlLWVzY2FwZSBhIHN0cmluZyB1c2luZyB0aGUgZXhwcmVzc2lvbiBhdCBga2V5YCBpbiBgY3R4YC5cbiAgZnVuY3Rpb24gdW5lc2NhcGUodmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXMgPSAwXG4gICAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZihiYWNrc2xhc2gpXG4gICAgdmFyIGVzY2FwZSA9IGN0eFtrZXldXG4gICAgdmFyIHF1ZXVlID0gW11cbiAgICB2YXIgY2hhcmFjdGVyXG5cbiAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXZpb3VzLCBpbmRleCkpXG4gICAgICBwcmV2aW91cyA9IGluZGV4ICsgMVxuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHByZXZpb3VzKVxuXG4gICAgICAvLyBJZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlciBpcyBub3QgYSB2YWxpZCBlc2NhcGUsIGFkZCB0aGUgc2xhc2guXG4gICAgICBpZiAoIWNoYXJhY3RlciB8fCBlc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpID09PSAtMSkge1xuICAgICAgICBxdWV1ZS5wdXNoKGJhY2tzbGFzaClcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGJhY2tzbGFzaCwgcHJldmlvdXMgKyAxKVxuICAgIH1cblxuICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldmlvdXMpKVxuXG4gICAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uXG5cbnZhciB0YWIgPSAnXFx0J1xudmFyIHNwYWNlID0gJyAnXG5cbnZhciBzcGFjZVNpemUgPSAxXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gR2V0cyBpbmRlbnRhdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBsaW5lLlxuZnVuY3Rpb24gaW5kZW50YXRpb24odmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgaW5kZW50ID0gMFxuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KVxuICB2YXIgc3RvcHMgPSB7fVxuICB2YXIgc2l6ZVxuICB2YXIgbGFzdEluZGVudCA9IDBcblxuICB3aGlsZSAoY2hhcmFjdGVyID09PSB0YWIgfHwgY2hhcmFjdGVyID09PSBzcGFjZSkge1xuICAgIHNpemUgPSBjaGFyYWN0ZXIgPT09IHRhYiA/IHRhYlNpemUgOiBzcGFjZVNpemVcblxuICAgIGluZGVudCArPSBzaXplXG5cbiAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgIGluZGVudCA9IE1hdGguZmxvb3IoaW5kZW50IC8gc2l6ZSkgKiBzaXplXG4gICAgfVxuXG4gICAgd2hpbGUgKGxhc3RJbmRlbnQgPCBpbmRlbnQpIHtcbiAgICAgIHN0b3BzWysrbGFzdEluZGVudF0gPSBpbmRleFxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtpbmRlbnQ6IGluZGVudCwgc3RvcHM6IHN0b3BzfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhdHRyaWJ1dGVOYW1lID0gJ1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qJ1xudmFyIHVucXVvdGVkID0gJ1teXCJcXCc9PD5gXFxcXHUwMDAwLVxcXFx1MDAyMF0rJ1xudmFyIHNpbmdsZVF1b3RlZCA9IFwiJ1teJ10qJ1wiXG52YXIgZG91YmxlUXVvdGVkID0gJ1wiW15cIl0qXCInXG52YXIgYXR0cmlidXRlVmFsdWUgPVxuICAnKD86JyArIHVucXVvdGVkICsgJ3wnICsgc2luZ2xlUXVvdGVkICsgJ3wnICsgZG91YmxlUXVvdGVkICsgJyknXG52YXIgYXR0cmlidXRlID1cbiAgJyg/OlxcXFxzKycgKyBhdHRyaWJ1dGVOYW1lICsgJyg/OlxcXFxzKj1cXFxccyonICsgYXR0cmlidXRlVmFsdWUgKyAnKT8pJ1xudmFyIG9wZW5UYWcgPSAnPFtBLVphLXpdW0EtWmEtejAtOVxcXFwtXSonICsgYXR0cmlidXRlICsgJypcXFxccypcXFxcLz8+J1xudmFyIGNsb3NlVGFnID0gJzxcXFxcL1tBLVphLXpdW0EtWmEtejAtOVxcXFwtXSpcXFxccyo+J1xudmFyIGNvbW1lbnQgPSAnPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPidcbnZhciBwcm9jZXNzaW5nID0gJzxbP10uKj9bP10+J1xudmFyIGRlY2xhcmF0aW9uID0gJzwhW0EtWmEtel0rXFxcXHMrW14+XSo+J1xudmFyIGNkYXRhID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPidcblxuZXhwb3J0cy5vcGVuQ2xvc2VUYWcgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5UYWcgKyAnfCcgKyBjbG9zZVRhZyArICcpJylcblxuZXhwb3J0cy50YWcgPSBuZXcgUmVnRXhwKFxuICAnXig/OicgK1xuICAgIG9wZW5UYWcgK1xuICAgICd8JyArXG4gICAgY2xvc2VUYWcgK1xuICAgICd8JyArXG4gICAgY29tbWVudCArXG4gICAgJ3wnICtcbiAgICBwcm9jZXNzaW5nICtcbiAgICAnfCcgK1xuICAgIGRlY2xhcmF0aW9uICtcbiAgICAnfCcgK1xuICAgIGNkYXRhICtcbiAgICAnKSdcbilcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVycnVwdFxuXG5mdW5jdGlvbiBpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBjdHgsIHBhcmFtZXRlcnMpIHtcbiAgdmFyIGxlbmd0aCA9IGludGVycnVwdG9ycy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGludGVycnVwdG9yXG4gIHZhciBjb25maWdcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGludGVycnVwdG9yID0gaW50ZXJydXB0b3JzW2luZGV4XVxuICAgIGNvbmZpZyA9IGludGVycnVwdG9yWzFdIHx8IHt9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcucGVkYW50aWMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29uZmlnLnBlZGFudGljICE9PSBjdHgub3B0aW9ucy5wZWRhbnRpY1xuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcuY29tbW9ubWFyayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBjb25maWcuY29tbW9ubWFyayAhPT0gY3R4Lm9wdGlvbnMuY29tbW9ubWFya1xuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodG9rZW5pemVyc1tpbnRlcnJ1cHRvclswXV0uYXBwbHkoY3R4LCBwYXJhbWV0ZXJzKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29sbGFwc2VXaGl0ZVNwYWNlID0gcmVxdWlyZSgnY29sbGFwc2Utd2hpdGUtc3BhY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG4vLyBOb3JtYWxpemUgYW4gaWRlbnRpZmllci4gIENvbGxhcHNlcyBtdWx0aXBsZSB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzIGludG8gYVxuLy8gc2luZ2xlIHNwYWNlLCBhbmQgcmVtb3ZlcyBjYXNpbmcuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIGNvbGxhcHNlV2hpdGVTcGFjZSh2YWx1ZSkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgZ2V0SW5kZW50ID0gcmVxdWlyZSgnLi9nZXQtaW5kZW50YXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxuLy8gUmVtb3ZlIHRoZSBtaW5pbXVtIGluZGVudCBmcm9tIGV2ZXJ5IGxpbmUgaW4gYHZhbHVlYC4gIFN1cHBvcnRzIGJvdGggdGFiLFxuLy8gc3BhY2VkLCBhbmQgbWl4ZWQgaW5kZW50YXRpb24gKGFzIHdlbGwgYXMgcG9zc2libGUpLlxuZnVuY3Rpb24gaW5kZW50YXRpb24odmFsdWUsIG1heGltdW0pIHtcbiAgdmFyIHZhbHVlcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuICB2YXIgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoICsgMVxuICB2YXIgbWluSW5kZW50ID0gSW5maW5pdHlcbiAgdmFyIG1hdHJpeCA9IFtdXG4gIHZhciBpbmRleFxuICB2YXIgaW5kZW50YXRpb25cbiAgdmFyIHN0b3BzXG5cbiAgdmFsdWVzLnVuc2hpZnQocmVwZWF0KHNwYWNlLCBtYXhpbXVtKSArIGV4Y2xhbWF0aW9uTWFyaylcblxuICB3aGlsZSAocG9zaXRpb24tLSkge1xuICAgIGluZGVudGF0aW9uID0gZ2V0SW5kZW50KHZhbHVlc1twb3NpdGlvbl0pXG5cbiAgICBtYXRyaXhbcG9zaXRpb25dID0gaW5kZW50YXRpb24uc3RvcHNcblxuICAgIGlmICh0cmltKHZhbHVlc1twb3NpdGlvbl0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoaW5kZW50YXRpb24uaW5kZW50KSB7XG4gICAgICBpZiAoaW5kZW50YXRpb24uaW5kZW50ID4gMCAmJiBpbmRlbnRhdGlvbi5pbmRlbnQgPCBtaW5JbmRlbnQpIHtcbiAgICAgICAgbWluSW5kZW50ID0gaW5kZW50YXRpb24uaW5kZW50XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbkluZGVudCA9IEluZmluaXR5XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbkluZGVudCAhPT0gSW5maW5pdHkpIHtcbiAgICBwb3NpdGlvbiA9IHZhbHVlcy5sZW5ndGhcblxuICAgIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgICBzdG9wcyA9IG1hdHJpeFtwb3NpdGlvbl1cbiAgICAgIGluZGV4ID0gbWluSW5kZW50XG5cbiAgICAgIHdoaWxlIChpbmRleCAmJiAhKGluZGV4IGluIHN0b3BzKSkge1xuICAgICAgICBpbmRleC0tXG4gICAgICB9XG5cbiAgICAgIHZhbHVlc1twb3NpdGlvbl0gPSB2YWx1ZXNbcG9zaXRpb25dLnNsaWNlKHN0b3BzW2luZGV4XSArIDEpXG4gICAgfVxuICB9XG5cbiAgdmFsdWVzLnNoaWZ0KClcblxuICByZXR1cm4gdmFsdWVzLmpvaW4obGluZUZlZWQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9