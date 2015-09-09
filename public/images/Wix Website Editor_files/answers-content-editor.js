(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var css = require('./styles/main.scss');

var flatten = require('flat');
//compile sass and put it in the html
// insertCss(css);

//put all templates inside our module
var templates = flatten(({"components":({"code":({"code-edit-panel.tpl":require("./components/code/code-edit-panel.tpl.html")}),"html":({"html-comp-edit-panel.tpl":require("./components/html/html-comp-edit-panel.tpl.html")}),"iframe":({"iframe-edit-panel":require("./components/iframe/iframe-edit-panel.html")}),"image":({"image-component-edit-panel":require("./components/image/image-component-edit-panel.html")}),"important":({"important-comp-editor.tpl":require("./components/important/important-comp-editor.tpl.html")}),"note":({"note-comp-editor.tpl":require("./components/note/note-comp-editor.tpl.html")}),"step-by-step":({"step-by-step-comp-editor.tpl":require("./components/step-by-step/step-by-step-comp-editor.tpl.html"),"step-by-step-comp-viewer.tpl":require("./components/step-by-step/step-by-step-comp-viewer.tpl.html"),"step-by-step-edit-content.modal":require("./components/step-by-step/step-by-step-edit-content.modal.html"),"step-by-step-edit-panel.tpl":require("./components/step-by-step/step-by-step-edit-panel.tpl.html")}),"table":({"table-comp-edit-panel":require("./components/table/table-comp-edit-panel.html"),"table-comp-editor.tpl":require("./components/table/table-comp-editor.tpl.html"),"table-comp-viewer.tpl":require("./components/table/table-comp-viewer.tpl.html")}),"text":({"text-comp-editor.tpl":require("./components/text/text-comp-editor.tpl.html")}),"tip":({"tip-comp-editor.tpl":require("./components/tip/tip-comp-editor.tpl.html")}),"video":({"video-edit-panel":require("./components/video/video-edit-panel.html")})}),"differ":({"content-differ.tpl":require("./differ/content-differ.tpl.html")}),"editor":({"adder":({"component-adder":require("./editor/adder/component-adder.html"),"component-adder.old":require("./editor/adder/component-adder.old.html")}),"content-editor.tpl":require("./editor/content-editor.tpl.html"),"edit-panel":({"component-edit-panel.modal":require("./editor/edit-panel/component-edit-panel.modal.html")}),"editor-component.tpl":require("./editor/editor-component.tpl.html"),"templates":({"templates-info.tpl":require("./editor/templates/templates-info.tpl.html")})}),"viewer":({"content-viewer.tpl":require("./viewer/content-viewer.tpl.html"),"viewer-component.tpl":require("./viewer/viewer-component.tpl.html")})}), {delimiter: '/'});
angular.module('contentEditorHtmlTemplates', [])
.run(function ($templateCache) {
  Object.keys(templates)
    .forEach(function (templateName) {
      $templateCache.put(templateName + '.html', templates[templateName]);
    });
});

var translations = ({"messages_de":require("./i18n/messages_de.json"),"messages_en":require("./i18n/messages_en.json"),"messages_es":require("./i18n/messages_es.json"),"messages_fr":require("./i18n/messages_fr.json"),"messages_it":require("./i18n/messages_it.json"),"messages_ja":require("./i18n/messages_ja.json"),"messages_ko":require("./i18n/messages_ko.json"),"messages_pl":require("./i18n/messages_pl.json"),"messages_pt":require("./i18n/messages_pt.json"),"messages_ru":require("./i18n/messages_ru.json")});

angular.module('contentEditorTranslations', ['pascalprecht.translate'])
  .config(function ($translateProvider) {
    Object.keys(translations)
      .forEach(function (translationFileName) {
        var lang = translationFileName.replace('messages_', '').replace('.json', '');
        $translateProvider.translations(lang, translations[translationFileName]);
      });
    $translateProvider.preferredLanguage('en');
  });

require('./non-bower-libs/scroll-to-component.drv.js');

require('./core/core.mdl.ts');

require('./differ/differ.mdl.ts');

require('./viewer/viewer.mdl.ts');

require('./viewer/component-viewer-renderer.srv.ts');

require('./editor/editor.mdl.ts');
require('./editor/editor-component.drv.ts');
require('./editor/edit-panel/component-edit-panel.srv.ts');
require('./editor/component-editor-renderer.ts');
require('./core/content-editor-helper.ts');
require('./editor/content-editor.drv.ts');
require('./core/document-processor.ts');
require('./editor/adder/component-adder.ts');
require('./core/components-declaration.config.ts');
require('./components/text/text.comp.ts');
require('./migration/migrator.ts');

},{"./components/code/code-edit-panel.tpl.html":9,"./components/html/html-comp-edit-panel.tpl.html":12,"./components/iframe/iframe-edit-panel.html":14,"./components/image/image-component-edit-panel.html":16,"./components/important/important-comp-editor.tpl.html":18,"./components/note/note-comp-editor.tpl.html":21,"./components/step-by-step/step-by-step-comp-editor.tpl.html":23,"./components/step-by-step/step-by-step-comp-viewer.tpl.html":24,"./components/step-by-step/step-by-step-edit-content.modal.html":25,"./components/step-by-step/step-by-step-edit-panel.tpl.html":26,"./components/table/table-comp-edit-panel.html":29,"./components/table/table-comp-editor.tpl.html":30,"./components/table/table-comp-viewer.tpl.html":31,"./components/text/text-comp-editor.tpl.html":33,"./components/text/text.comp.ts":34,"./components/tip/tip-comp-editor.tpl.html":35,"./components/video/video-edit-panel.html":37,"./core/components-declaration.config.ts":40,"./core/content-editor-helper.ts":41,"./core/core.mdl.ts":42,"./core/document-processor.ts":43,"./differ/content-differ.tpl.html":46,"./differ/differ.mdl.ts":47,"./editor/adder/component-adder.html":49,"./editor/adder/component-adder.old.html":50,"./editor/adder/component-adder.ts":51,"./editor/component-editor-renderer.ts":52,"./editor/content-editor.drv.ts":53,"./editor/content-editor.tpl.html":54,"./editor/edit-panel/component-edit-panel.modal.html":55,"./editor/edit-panel/component-edit-panel.srv.ts":56,"./editor/editor-component.drv.ts":57,"./editor/editor-component.tpl.html":58,"./editor/editor.mdl.ts":59,"./editor/templates/templates-info.tpl.html":61,"./i18n/messages_de.json":63,"./i18n/messages_en.json":64,"./i18n/messages_es.json":65,"./i18n/messages_fr.json":66,"./i18n/messages_it.json":67,"./i18n/messages_ja.json":68,"./i18n/messages_ko.json":69,"./i18n/messages_pl.json":70,"./i18n/messages_pt.json":71,"./i18n/messages_ru.json":72,"./migration/migrator.ts":73,"./non-bower-libs/scroll-to-component.drv.js":74,"./viewer/component-viewer-renderer.srv.ts":75,"./viewer/content-viewer.tpl.html":77,"./viewer/viewer-component.tpl.html":79,"./viewer/viewer.mdl.ts":80,"flat":7}],2:[function(require,module,exports){
/// <reference path="tsd/tsd.d.ts" />
/// <reference path="editor/adder/component-adder.ts" />
/// <reference path="viewer/viewer.mdl.ts" />
/// <reference path="viewer/component-viewer-renderer.srv.ts" />
/// <reference path="viewer/component-viewer-renderer.srv.ts" />
/// <reference path="components/anchor/anchor.comp.ts" />
/// <reference path="core/components-declaration.config.ts" />
/// <reference path="components/image/image.comp.ts" />
/// <reference path="components/iframe/iframe.comp.ts" />
/// <reference path="components/video/video.comp.ts" />
/// <reference path="components/line/line.comp.ts" />
/// <reference path="components/code/code.comp.ts" />
/// <reference path="components/text/text.comp.ts" />
/// <reference path="components/note/note.comp.ts" />
/// <reference path="editor/editor-component.drv.ts" />
/// <reference path="editor/edit-panel/component-edit-panel.srv.ts" />
/// <reference path="editor/component-editor-renderer.ts" />
/// <reference path="core/content-editor-helper.ts" />
/// <reference path="core/sdk/sdk.srv.ts" />
/// <reference path="editor/content-editor.drv.ts" />
/// <reference path="core/editor-component-definition.i.ts" />
/// <reference path="core/document-processor.ts" />
/// <reference path="migration/migrator.ts" />
/// <reference path="editor/templates/templates.pvd.ts" />

},{}],3:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff
var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
    return fromTypedArray(that, object)
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = String(string)

  if (string.length === 0) return 0

  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      return string.length
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return string.length * 2
    case 'hex':
      return string.length >>> 1
    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(string).length
    case 'base64':
      return base64ToBytes(string).length
    default:
      return string.length
  }
}
Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function toString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []
  var i = 0

  for (; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (leadSurrogate) {
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        } else {
          // valid surrogate pair
          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
          leadSurrogate = null
        }
      } else {
        // no lead yet

        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else {
          // valid lead
          leadSurrogate = codePoint
          continue
        }
      }
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      leadSurrogate = null
    }

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x200000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":4,"ieee754":5,"is-array":6}],4:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],5:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],6:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],7:[function(require,module,exports){
(function (Buffer){
var flat = module.exports = flatten
flatten.flatten = flatten
flatten.unflatten = unflatten

function flatten(target, opts) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var maxDepth = opts.maxDepth
  var currentDepth = 1
  var output = {}

  function step(object, prev) {
    Object.keys(object).forEach(function(key) {
      var value = object[key]
      var isarray = opts.safe && Array.isArray(value)
      var type = Object.prototype.toString.call(value)
      var isbuffer = isBuffer(value)
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      var newKey = prev
        ? prev + delimiter + key
        : key

      if (!opts.maxDepth) {
        maxDepth = currentDepth + 1;
      }

      if (!isarray && !isbuffer && isobject && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth
        return step(value, newKey)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}

function unflatten(target, opts) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var overwrite = opts.overwrite || false
  var result = {}

  var isbuffer = isBuffer(target)
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey(key) {
    var parsedKey = Number(key)

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1
    ) ? key
      : parsedKey
  }

  Object.keys(target).forEach(function(key) {
    var split = key.split(delimiter)
    var key1 = getkey(split.shift())
    var key2 = getkey(split[0])
    var recipient = result

    while (key2 !== undefined) {
      var type = Object.prototype.toString.call(recipient[key1])
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] === undefined)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        )
      }

      recipient = recipient[key1]
      if (split.length > 0) {
        key1 = getkey(split.shift())
        key2 = getkey(split[0])
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts)
  })

  return result
}

function isBuffer(value) {
  if (typeof Buffer === 'undefined') return false
  return Buffer.isBuffer(value)
}

}).call(this,require("buffer").Buffer)

},{"buffer":3}],8:[function(require,module,exports){
/// <reference path="../../reference.ts" />
/**
 * Created by Gabriel_Grinberg on 4/11/15.
 */
'use strict';
var AnchorComponentDefinition = (function () {
    function AnchorComponentDefinition() {
        this.key = 'anchor';
        this.name = 'Anchor Title';
        this.menuIconClass = 'fa fa-anchor';
        this.defaultValue = { text: '', id: '' };
        this.priority = 3;
        this.editorTemplate = '<h2><input class="anchor-title strip-input" placeholder="Anchor title goes here" ng-model="component.value.text" ng-blur="component.saveChanges()"/>';
        this.editorController = function (commitChanges, value, element, $timeout, contentEditorCtrl) {
            var _this = this;
            var prevValue = value;
            if (value.justAdded) {
                $timeout(function () { return element.find('input').focus(); }, 10);
            }
            var getUniqId = function (currId) {
                for (var idx = 0; idx < contentEditorCtrl.components.length; idx++) {
                    var component = contentEditorCtrl.components[idx];
                    if (component.type === 'anchor' && component.value.id === currId) {
                        return getUniqId(currId + idx);
                    }
                }
                return currId;
            };
            this.saveChanges = function () {
                if (_this.value.text && !prevValue.id) {
                    var currId = _this.value.text.trim().replace(/['"#!.@\$,%\^\\&*?\(\)\[\]\-\+=:\/;\{\}~`]/ig, '').replace(/&nbsp;/g, '').replace(/\s/g, '-').substr(0, 25).toLowerCase();
                    _this.value.id = getUniqId(currId);
                }
                commitChanges(_this.value);
                prevValue = _this.value;
            };
        };
    }
    AnchorComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return { text: $node.text(), id: $node.attr('id') || '' };
    };
    AnchorComponentDefinition.prototype.valueToHtml = function (value) {
        var id = value.id || '';
        return "<h2 class=\"anchor-title\" id=\"" + id + "\">" + value.text + "</h2>";
    };
    return AnchorComponentDefinition;
})();
module.exports = AnchorComponentDefinition;

},{}],9:[function(require,module,exports){
module.exports = "<div class=\"form-group\">\n    <label>Languages</label>\n    <select ng-model=\"panel.currentValue.language\"\n            class=\"form-control\"\n            ng-options=\"language.id as language.name for language in panel.languages\">\n    </select>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n        <label for=\"line-numbers\">\n            <input type=\"checkbox\" ng-model=\"panel.currentValue.lineNumbers\" />\n            Show line numbers\n        </label>\n    </div>\n    <div class=\"col-md-6 form-group\">\n        <label for=\"line-wrappping\">\n            <input type=\"checkbox\" ng-model=\"panel.currentValue.lineWrapping\" />\n            Allow line wrapping\n        </label>\n    </div>\n</div>";

},{}],10:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/11/15.
 */
'use strict';
var CodeComponentValue = (function () {
    function CodeComponentValue() {
    }
    return CodeComponentValue;
})();
var CodeComponentDefinition = (function () {
    function CodeComponentDefinition() {
        this.key = 'code';
        this.name = 'Code Snippet';
        this.menuIconClass = 'fa fa-terminal';
        this.defaultValue = {
            language: 'javascript',
            code: 'console.log("Hello world!")',
            lineNumbers: true,
            lineWrapping: true
        };
        this.editorTemplate = '<div ui-codemirror ng-model="component.value.code" ui-codemirror-opts="codeMirrorOpts"></div>';
        this.editorPreCompileController = function (value, $scope, commitChanges) {
            $scope.codeMirrorOpts = {
                lineNumbers: value.lineNumbers,
                lineWrapping: value.lineWrapping,
                mode: value.language,
                onLoad: function (editor) {
                    editor.on('blur', function () {
                        commitChanges($scope.component.value);
                    });
                }
            };
        };
        this.viewerTemplate = '<div ui-codemirror ng-model="component.value.code" ui-codemirror-opts="codeMirrorOpts"></div>';
        this.viewerPreCompileController = function (value, $scope) {
            $scope.codeMirrorOpts = {
                readOnly: true,
                lineNumbers: value.lineNumbers,
                lineWrapping: value.lineWrapping,
                mode: value.language
            };
        };
        this.editPanelTemplateUrl = 'components/code/code-edit-panel.tpl.html';
        this.editPanelController = function ($scope) {
            var panel = $scope.panel;
            panel.languages = [{ id: 'text', name: 'Text' }, { id: 'javascript', name: 'javascript' }, { id: 'css', name: 'CSS' }, { id: 'markup', name: 'Markup' }];
        };
    }
    CodeComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return {
            language: $node.attr('data-language'),
            lineNumbers: !!$node.attr('data-line-numbers'),
            lineWrapping: !!$node.attr('data-line-wrapping'),
            code: $node.find('code').text()
        };
    };
    CodeComponentDefinition.prototype.valueToHtml = function (value) {
        return "<div class=\"code-snippet\" data-language=\"" + value.language + "\" data-line-numbers=\"" + value.lineNumbers + "\" data-line-wrapping=\"" + value.lineWrapping + "\"><pre><code>" + value.code + "</code></pre></div>";
    };
    return CodeComponentDefinition;
})();
module.exports = CodeComponentDefinition;

},{}],11:[function(require,module,exports){
var HeadingCompValue = (function () {
    function HeadingCompValue() {
    }
    return HeadingCompValue;
})();
var HeadingComponentDefinition = (function () {
    function HeadingComponentDefinition() {
        this.name = 'Subheading';
        this.key = 'subheading';
        this.menuIconClass = 'fa fa-font';
        this.defaultValue = {
            text: ''
        };
        this.editorTemplate = '<h3><input class="strip-input" placeholder="Subheading goes here" ng-model="component.value.text" ng-blur="component.saveChanges()"/></h3>';
        this.editorController = function (commitChanges, value, element, $timeout) {
            this.saveChanges = function () {
                commitChanges(value);
            };
            if (value.justAdded) {
                $timeout(function () { return element.find('input').focus(); }, 10);
            }
        };
        this.htmlNodeToValue = function ($node) {
            return { text: $node.text() };
        };
        this.valueToHtml = function (value) { return ("<h3>" + value.text + "</h3>"); };
    }
    return HeadingComponentDefinition;
})();
module.exports = HeadingComponentDefinition;

},{}],12:[function(require,module,exports){
module.exports = "<div class=\"form-group\">\n    <label>Enter your custom HTML here:</label>\n    <p class=\"help-block\">Please note that this is for advance usages only!</p>\n    <div ui-codemirror ng-model=\"panel.currentValue.html\" ui-codemirror-opts=\"{lineNumbers: true, mode: 'htmlmixed'}\" vmsg required></div>\n</div>\n";

},{}],13:[function(require,module,exports){
var HtmlComponentValue = (function () {
    function HtmlComponentValue() {
    }
    return HtmlComponentValue;
})();
var HtmlComponentDefinition = (function () {
    function HtmlComponentDefinition() {
        this.key = 'html';
        this.name = 'Custom HTML';
        this.defaultValue = { html: '<p>HTML Code</p>' };
        this.editorOpenEditPanelOnAdd = true;
        this.editorTemplate = '<div></div>';
        this.editorController = function (element, value) {
            element.html(value.html);
        };
        this.editPanelTemplateUrl = 'components/html/html-comp-edit-panel.tpl.html';
    }
    HtmlComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return { html: $('<div>').append($node).html() || '' };
    };
    HtmlComponentDefinition.prototype.valueToHtml = function (value) {
        return value.html;
    };
    return HtmlComponentDefinition;
})();
module.exports = HtmlComponentDefinition;

},{}],14:[function(require,module,exports){
module.exports = "<div class=\"form-group\">\n    <label>Enter valid URL:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.url\" placeholder=\"URL\" type=\"text\" vmsg=\"panel.validationMessageOptions\" required ng-pattern=\"panel.urlPattern\" />\n</div>\n<div class=\"form-group\">\n    <label>Width:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.width\" placeholder=\"Width\" type=\"number\" min=\"200\" vmsg/>\n</div>\n<div class=\"form-group\">\n    <label>Height:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.height\" placeholder=\"height\" type=\"number\" min=\"100\" vmsg/>\n</div>\n<div class=\"form-group\">\n    <label>Alignment:</label>\n    <select ng-model=\"panel.currentValue.align\"\n            class=\"form-control\"\n            ng-options=\"align.id as align.name for align in [{ id: 'left', name: 'Left' }, { id: 'center', name: 'Center' }, { id: 'right', name: 'Right' }]\">\n    </select>\n</div>\n<div class=\"form-group\">\n    <label>Show scroll bars:</label>\n    <select ng-model=\"panel.currentValue.scrolling\"\n            class=\"form-control\"\n            ng-options=\"opt.id as opt.name for opt in [{ id: 'auto', name: 'Automatic' }, { id: 'no', name: 'Never' }, { id: 'yes', name: 'Always' }]\">\n    </select>\n</div>\n";

},{}],15:[function(require,module,exports){
/**
 * Created by Elad_Swissa on 4/29/15.
 */
'use strict';
var IframeCompValue = (function () {
    function IframeCompValue() {
    }
    return IframeCompValue;
})();
var IframeComponentDefinition = (function () {
    function IframeComponentDefinition() {
        this.key = 'iframe';
        this.name = 'iFrame';
        this.menuIconClass = 'fa fa-code';
        this.defaultValue = {
            url: '',
            width: null,
            height: 375,
            align: 'left',
            scrolling: 'auto'
        };
        this.editorTemplate = '<div style="text-align:{{component.value.align}}"><iframe src="{{component.trustedHref}}" scrolling="{{component.value.scrolling}}" style="width:{{component.value.width}}px; height:{{component.value.height}}px"></iframe></div>';
        this.editorController = function (value, $sce) {
            this.trustedHref = $sce.trustAsResourceUrl(value.url);
        };
        this.editorOpenEditPanelOnAdd = true;
        this.editPanelTemplateUrl = 'components/iframe/iframe-edit-panel.html';
        this.editPanelController = function ($scope, ContentEditorHelper) {
            var forceHttps = ContentEditorHelper.getComponentConfig('iframe').forceHttps || false;
            var panel = $scope.panel;
            var urlPattern = /^(https ?:)?\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
            var secureUrlPattern = /^(https:)?\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
            panel.urlPattern = forceHttps ? secureUrlPattern : urlPattern;
            panel.validationMessageOptions = {
                errorMessages: {
                    pattern: forceHttps ? 'URL must be valid, and must be under https:// (or without protocol, i.e, //wixanswers.com)' : 'Must be a valid URL'
                }
            };
        };
    }
    IframeComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        var $iframe = $node.find('iframe');
        var width = ($iframe.css('width').indexOf('%') === -1) ? parseInt($iframe.css('width')) : null;
        var height = ($iframe.css('height').indexOf('%') === -1) ? parseInt($iframe.css('height')) : null;
        return {
            url: $iframe.attr('src'),
            width: width,
            height: height,
            align: $node.css('text-align'),
            scrolling: $iframe.attr('scrolling') || 'auto'
        };
    };
    IframeComponentDefinition.prototype.valueToHtml = function (value) {
        var width = value.width ? value.width + 'px' : '100%';
        var height = value.height ? value.height + 'px' : '100%';
        return "<div style=\"text-align:" + value.align + "\"><iframe src=\"" + value.url + "\" style=\"width:" + width + ";height:" + height + ";\" scrolling=\"" + value.scrolling + "\"/></div>";
    };
    return IframeComponentDefinition;
})();
module.exports = IframeComponentDefinition;

},{}],16:[function(require,module,exports){
module.exports = "<div class=\"form-group clearfix\">\n  <div class=\"thumbnail-container\">\n    <div ng-if=\"panel.uploadState !== panel.uploadStates.uploading\">\n      <img class=\"image-preview thumbnail\" ng-file-select ng-file-change=\"panel.upload($files)\" drag-over-class=\"dragover\" ng-file-drop ng-src=\"{{panel.currentValue.src || 'http://d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/04/14/eedd9fdf-370a-4270-960f-85339bc35cd8.png'}}\" alt=\"Preview\"/>\n    </div>\n    <div ng-if=\"panel.uploadState === panel.uploadStates.uploading\">\n      Uploading image..\n      <progressbar value=\"panel.uploadPercentage\" class=\"progress-striped active\" type=\"success\">{{panel.uploadPercentage}}%</progressbar>\n    </div>\n  </div>\n\n  <div class=\"pull-right\">\n    <a class=\"btn btn-primary btn-xs\" ng-file-select ng-file-change=\"panel.upload($files)\">\n      Upload new\n    </a> <a ng-click=\"panel.enterUrl()\">or use URL</a>\n  </div>\n</div>\n\n<div class=\"form-group\">\n  <label>Alt text:</label>\n  <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.alt\" placeholder=\"Will appear when a user hovers above the image and if it was not loaded correctly\" type=\"text\"/>\n</div>\n<div class=\"form-group\">\n  <label>Link:</label>\n  <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.link\" placeholder=\"Should this image link somewhere? (optional)\" type=\"url\" vmsg/>\n</div>\n<div class=\"form-group\">\n    <label>Alignment:</label>\n    <select ng-model=\"panel.currentValue.align\"\n            class=\"form-control\"\n            ng-options=\"align.id as align.name for align in [{ id: 'left', name: 'Left' }, { id: 'center', name: 'Center' }, { id: 'right', name: 'Right' }]\">\n    </select>\n    <p class=\"help-block\">Please note that alignment has no effect on images that occupy all width.</p>\n</div>";

},{}],17:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/11/15.
 */
'use strict';
var ImageComponentValue = (function () {
    function ImageComponentValue() {
    }
    return ImageComponentValue;
})();
var ImageComponentDefinition = (function () {
    function ImageComponentDefinition() {
        this.name = 'Image';
        this.key = 'image';
        this.menuIconClass = 'fa fa-picture-o';
        this.priority = 2;
        this.editorOpenEditPanelOnAdd = true;
        this.editPanelTemplateUrl = 'components/image/image-component-edit-panel.html';
        this.defaultValue = { src: '', link: '', alt: '', align: 'center' };
        this.editorTemplate = '<div style="text-align: {{component.value.align}}"><a ng-dblclick="component.openEditPanel()"><img alt="{{component.value.alt}}" ng-src="{{component.value.src  || \'http://budapesttimes.hu/wp-content/themes/newsroom14/img/placeholder.png\'}}"/></a></div>';
        this.editPanelController = function ($window, $upload, $scope, ContentEditorHelper) {
            var panel = $scope.panel;
            var uploadStates = panel.uploadStates = { idle: 'idle', uploading: 'uploading', success: 'success', error: 'error' };
            panel.uploadState = panel.uploadStates.idle;
            panel.enterUrl = function () { return panel.currentValue.src = $window.prompt('new url'); };
            panel.upload = function (files) {
                var file = files && files[0];
                if (file) {
                    panel.uploadState = uploadStates.uploading;
                    $upload.upload({
                        url: ContentEditorHelper.getComponentConfig('image').imageUploadUrl,
                        file: file
                    }).progress(function (evt) { return panel.uploadPercentage = Math.round(100.0 * evt.loaded / evt.total); }).success(function (data) {
                        panel.currentValue.src = data.filelink;
                        panel.uploadState = uploadStates.success;
                    }).error(function () { return panel.uploadState = uploadStates.error; });
                }
            };
        };
        this.htmlNodeToValue = function ($node) {
            console.log('$node', $node);
            var $img = $node.is('img') ? $node : $node.find('img');
            var $container = $node.is('.img-container') ? $node : $node.find('.img-container');
            var $link = $node.find('a');
            return {
                src: $img.attr('src'),
                alt: $img.attr('alt') || '',
                link: $link.attr('href') || '',
                align: $container.css('text-align') || 'left'
            };
        };
        this.valueToHtml = function (value) {
            var imageHtml = "<img src=\"" + value.src + "\" " + (value.alt ? 'alt="' + value.alt + '"' : '') + "/>";
            var innerHtml = imageHtml;
            if (value.link) {
                innerHtml = "<a href=\"" + value.link + "\">" + innerHtml + "</a>";
            }
            return "<div class=\"img-container\" style=\"text-align:" + value.align + "\">" + innerHtml + "</div>";
        };
    }
    return ImageComponentDefinition;
})();
module.exports = ImageComponentDefinition;

},{}],18:[function(require,module,exports){
module.exports = "<div redactor=\"textEditorOptions\" redactor-hide-toolbar class=\"text-editor\"\n     ng-model=\"component.value.html\" content-editor-blur=\"component.saveChanges();\">\n</div>\n";

},{}],19:[function(require,module,exports){
'use strict';
var ImportantComponentValue = (function () {
    function ImportantComponentValue() {
    }
    return ImportantComponentValue;
})();
var ImportantComponentDefinition = (function () {
    function ImportantComponentDefinition() {
        this.key = 'important';
        this.name = 'Important';
        this.defaultValue = {
            html: '<p></p>'
        };
        this.editorTemplateUrl = 'components/important/important-comp-editor.tpl.html';
        this.editorPreCompileController = function ($scope, textComponentOptions, value) {
            $scope.textEditorOptions = angular.copy(textComponentOptions);
            if (value.justAdded) {
                $scope.textEditorOptions.focusEnd = true;
                value.justAdded = false;
            }
        };
        this.editorController = function (value, commitChanges) {
            this.saveChanges = function () { return commitChanges(value); };
        };
    }
    ImportantComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return {
            html: $('<div>').append($node).html()
        };
    };
    ImportantComponentDefinition.prototype.valueToHtml = function (value) {
        return value.html;
    };
    return ImportantComponentDefinition;
})();
module.exports = ImportantComponentDefinition;

},{}],20:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/11/15.
 */
'use strict';
var LineCompValue = (function () {
    function LineCompValue() {
    }
    return LineCompValue;
})();
var LineComponentDefinition = (function () {
    function LineComponentDefinition() {
        this.name = 'Line';
        this.key = 'line';
        this.menuIconClass = 'fa fa-ellipsis-h';
        this.editorTemplate = '<hr />';
        this.viewerTemplate = '<hr />';
        this.defaultValue = {};
        this.valueToHtml = function (value) { return '<hr />'; };
        this.htmlNodeToValue = function () {
            return {};
        };
    }
    return LineComponentDefinition;
})();
module.exports = LineComponentDefinition;

},{}],21:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],22:[function(require,module,exports){
'use strict';
var NoteComponentValue = (function () {
    function NoteComponentValue() {
    }
    return NoteComponentValue;
})();
var NoteComponentDefinition = (function () {
    function NoteComponentDefinition() {
        this.key = 'note';
        this.name = 'Note';
        this.defaultValue = {
            html: '<p><strong>Note:</strong> <span>please note..</span></p>'
        };
        this.editorTemplateUrl = 'components/note/note-comp-editor.tpl.html';
        this.editorPreCompileController = function ($scope, textComponentOptions, value) {
            $scope.textEditorOptions = angular.copy(textComponentOptions);
            if (value.justAdded) {
                $scope.textEditorOptions.focusEnd = true;
                value.justAdded = false;
            }
        };
        this.editorController = function (value, commitChanges) {
            this.saveChanges = function () { return commitChanges(value); };
        };
    }
    NoteComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return {
            html: $('<div>').append($node).html()
        };
    };
    NoteComponentDefinition.prototype.valueToHtml = function (value) {
        return value.html;
    };
    return NoteComponentDefinition;
})();
module.exports = NoteComponentDefinition;

},{}],23:[function(require,module,exports){
module.exports = "<div class=\"step-by-step-container\">\n    <div class=\"edit-controls\">\n        <a class=\"remove-step text-danger\" ng-if=\"component.value.steps.length > 1\" ng-click=\"component.removeStep(component.currentStep)\">Remove step</a>\n        <a class=\"add-step\" ng-click=\"component.addStep(component.currentStep)\">+Step</a>\n    </div>\n\n    <div class=\"step-by-step-layout-container\" ng-if=\"component.value.layout === 'newspaper'\">\n        <div class=\"arrow-container\" ng-click=\"component.previousStep()\">\n            <button class=\"arrow arrow-left\" ng-disabled=\"!component.value.allowCircular && component.currentStep === 0\"></button>\n        </div>\n        <div class=\"steps-container\">\n            <h3 ng-bind-html=\"'step-by-step.title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></h3>\n            <section ng-repeat=\"step in component.value.steps\"\n                     class=\"step\"\n                     ng-class=\"{visible: $index === component.currentStep}\">\n                <div class=\"img-container\" ng-file-select ng-file-change=\"component.uploadNewStepImage($files, step)\">\n                    <img class=\"step-image\" ng-src=\"{{step.imageSrc}}\"/>\n                    <div ng-if=\"step.isUploadingImage\">\n                        Uploading image..\n                        <progressbar value=\"step.imageUploadProgress\" class=\"progress-striped active\" type=\"success\">{{step.imageUploadProgress}}%</progressbar>\n                    </div>\n                </div>\n                <div class=\"step-description\" ng-click=\"component.openContentEditModal(step)\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n            </section>\n        </div>\n        <div class=\"arrow-container\" ng-click=\"component.nextStep()\">\n            <button class=\"arrow arrow-right\" ng-disabled=\"!component.value.allowCircular && component.currentStep === component.value.steps.length - 1\"></button>\n        </div>\n    </div>\n\n    <div class=\"step-by-step-dots\" ng-if=\"component.value.layout === 'dots'\">\n        <div class=\"step-by-step-layout-container\">\n            <div class=\"arrow-container\">\n                <button ng-click=\"component.previousStep()\" class=\"arrow arrow-left\" ng-disabled=\"!component.value.allowCircular && component.currentStep === 0\"></button>\n            </div>\n            <div class=\"steps-container\">\n                <section ng-repeat=\"step in component.value.steps\"\n                         class=\"step\"\n                         ng-class=\"{visible: $index === component.currentStep}\">\n                    <div class=\"img-container\" ng-file-select ng-file-change=\"component.uploadNewStepImage($files, step)\">\n                        <img class=\"step-image\" ng-src=\"{{step.imageSrc}}\"/>\n                        <div ng-if=\"step.isUploadingImage\">\n                            Uploading image..\n                            <progressbar value=\"step.imageUploadProgress\" class=\"progress-striped active\" type=\"success\">{{step.imageUploadProgress}}%</progressbar>\n                        </div>\n                    </div>\n                    <h3 ng-bind-html=\"'step-by-step.short-title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></h3>\n\n                    <div class=\"description-container\">\n                        <div class=\"step-description\" ng-click=\"component.openContentEditModal(step)\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n                    </div>\n                </section>\n            </div>\n            <div class=\"arrow-container\">\n                <button ng-click=\"component.nextStep()\" class=\"arrow arrow-right\" ng-disabled=\"!component.value.allowCircular && component.currentStep === component.value.steps.length - 1\"></button>\n            </div>\n        </div>\n        <ul class=\"step-by-step-dots-container\">\n            <li ng-class=\"{'selected': component.currentStep === $index}\" ng-repeat=\"step in component.value.steps\" ng-click=\"component.currentStep = $index\"></li>\n        </ul>\n    </div>\n\n    <div class=\"step-by-step-layout-container step-by-step-ordered\" ng-if=\"component.value.layout === 'ordered'\">\n        <div class=\"steps-container\">\n            <section class=\"step\" ng-repeat=\"step in component.value.steps\" class=\"step\" ng-class=\"{visible: $index === component.currentStep}\">\n                <!--<img ng-src=\"{{step.imageSrc}}\">-->\n                <div ng-file-select ng-file-change=\"component.uploadNewStepImage($files, step)\">\n                    <img class=\"step-image\" ng-src=\"{{step.imageSrc}}\"/>\n                    <div ng-if=\"step.isUploadingImage\">\n                        Uploading image..\n                        <progressbar value=\"step.imageUploadProgress\" class=\"progress-striped active\" type=\"success\">{{step.imageUploadProgress}}%</progressbar>\n                    </div>\n                </div>\n                <div class=\"sbs-arrows-holder\">\n                    <a href=\"\" class=\"sbs-arrow sbs-arrow-prev\" ng-click=\"component.previousStep()\"  ng-class=\"{'disabled': !component.value.allowCircular && component.currentStep === 0}\"></a>\n                    <span ng-bind-html=\"'step-by-step.short-title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></span>\n                    <a href=\"\" class=\"sbs-arrow sbs-arrow-next\" ng-click=\"component.nextStep()\" ng-class=\"{'disabled': !component.value.allowCircular && component.currentStep === component.value.steps.length - 1}\"></a>\n                </div>\n                <div class=\"description\" ng-click=\"component.openContentEditModal(step)\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n            </section>\n        </div>\n    </div>\n\n</div>\n";

},{}],24:[function(require,module,exports){
module.exports = "<div class=\"step-by-step-container\">\n\n    <div class=\"step-by-step-layout-container\" ng-if=\"component.value.layout === 'newspaper'\">\n        <div class=\"arrow-container\" ng-click=\"component.previousStep()\">\n            <button class=\"arrow arrow-left\" ng-disabled=\"!component.value.allowCircular && component.currentStep === 0\"></button>\n        </div>\n        <div class=\"steps-container\">\n            <h3 ng-bind-html=\"'step-by-step.title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></h3>\n            <section ng-repeat=\"step in component.value.steps\"\n                     class=\"step\"\n                     data-order=\"{{$index}}\"\n                     ng-class=\"{visible: $index === component.currentStep}\">\n                <div class=\"img-container\">\n                    <img class=\"step-image\" ng-src=\"{{step.imageSrc}}\"/>\n                </div>\n                <div class=\"step-description\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n            </section>\n        </div>\n        <div class=\"arrow-container\" ng-click=\"component.nextStep()\">\n            <button class=\"arrow arrow-right\" ng-disabled=\"!component.value.allowCircular && component.currentStep === component.value.steps.length - 1\"></button>\n        </div>\n    </div>\n\n    <div class=\"step-by-step-dots\" ng-if=\"component.value.layout === 'dots'\">\n        <div class=\"step-by-step-layout-container\">\n            <div class=\"arrow-container\">\n                <button ng-click=\"component.previousStep()\" class=\"arrow arrow-left\" ng-disabled=\"!component.value.allowCircular && component.currentStep === 0\"></button>\n            </div>\n            <div class=\"steps-container\">\n                <section ng-repeat=\"step in component.value.steps\"\n                         class=\"step\"\n                         data-order=\"{{$index}}\"\n                         ng-class=\"{visible: $index === component.currentStep}\">\n                    <div class=\"img-container\">\n                        <img class=\"step-image\" ng-src=\"{{step.imageSrc}}\"/>\n                    </div>\n\n                    <h3 ng-bind-html=\"'step-by-step.short-title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></h3>\n\n                    <div class=\"description-container\">\n                        <div class=\"step-description\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n                    </div>\n                </section>\n            </div>\n            <div class=\"arrow-container\">\n                <button ng-click=\"component.nextStep()\" class=\"arrow arrow-right\" ng-disabled=\"!component.value.allowCircular && component.currentStep === component.value.steps.length - 1\"></button>\n            </div>\n        </div>\n        <ul class=\"step-by-step-dots-container\">\n            <li ng-class=\"{'selected': component.currentStep === $index}\" ng-repeat=\"step in component.value.steps\" ng-click=\"component.currentStep = $index\"></li>\n        </ul>\n    </div>\n\n    <div class=\"step-by-step-layout-container step-by-step-ordered\" ng-if=\"component.value.layout === 'ordered'\">\n        <div class=\"steps-container\">\n            <section class=\"step\" ng-repeat=\"step in component.value.steps\" class=\"step\" data-order=\"{{$index}}\" ng-class=\"{visible: $index === component.currentStep}\">\n                <img ng-src=\"{{step.imageSrc}}\">\n                <div class=\"sbs-arrows-holder\">\n                    <a href=\"\" class=\"sbs-arrow sbs-arrow-prev\" ng-click=\"component.previousStep()\"  ng-class=\"{'disabled': !component.value.allowCircular && component.currentStep === 0}\"></a>\n                    <span ng-bind-html=\"'step-by-step.short-title' | translate:{currentStep: component.currentStep + 1, totalSteps: component.value.steps.length}\"></span>\n                    <a href=\"\" class=\"sbs-arrow sbs-arrow-next\" ng-click=\"component.nextStep()\" ng-class=\"{'disabled': !component.value.allowCircular && component.currentStep === component.value.steps.length - 1}\"></a>\n                </div>\n                <div class=\"description\" ng-bind-html=\"component.trustedHtmlValues[$index]\"></div>\n            </section>\n        </div>\n    </div>\n\n</div>\n";

},{}],25:[function(require,module,exports){
module.exports = "<div class=\"step-by-step-edit-content-modal modal-content\">\n    <div class=\"panel-heading\">\n        <h3>Edit Step Content</h3>\n    </div>\n    <div class=\"panel-body custom-redactor-style redactor-border\">\n        <div redactor=\"redactorOpts\" ng-model=\"currentHtml\" redactor-hide-toolbar></div>\n    </div>\n    <div class=\"panel-footer clearfix\">\n        <div class=\"pull-right\">\n            <a ng-click=\"$dismiss()\">cancel</a>\n            <a class=\"btn btn-success\" ng-click=\"$close(currentHtml)\">Save</a>\n        </div>\n    </div>\n</div>\n";

},{}],26:[function(require,module,exports){
module.exports = "<div class=\"form-group\">\n    <input type=\"checkbox\" class=\"styled-cb\" id=\"allow-circular\"\n           ng-model=\"panel.currentValue.allowCircular\"/>\n    <label for=\"allow-circular\">Allow circular browsing?</label>\n</div>\n<div class=\"form-group\">\n    <label>Layout</label>\n    <div class=\"layout-radio-container\">\n        <div class=\"layout-radio\" ng-repeat=\"layout in panel.layouts\" ng-class=\"{'selected' : panel.currentValue.layout === layout.key}\">\n            <img ng-src=\"{{layout.imgSrc}}\" ng-click=\"panel.currentValue.layout = layout.key\" />\n        </div>\n    </div>\n</div>\n";

},{}],27:[function(require,module,exports){
/**
 * Created by Elad_Swissa on 6/1/15.
 */
var stepByStepLayouts = [
    {
        key: 'newspaper',
        imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/05/27/e59e3ad9-b08d-4e02-9b10-7dca68684edd.png'
    },
    {
        key: 'dots',
        imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/06/08/a8e0ab91-7470-4749-abaf-a5ec1da86a41.png'
    },
    {
        key: 'ordered',
        imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/05/27/97dc0e33-d931-4094-bd37-fcc689beb9d6.png'
    }
];
module.exports = stepByStepLayouts;

},{}],28:[function(require,module,exports){
var StepValue = (function () {
    function StepValue() {
    }
    return StepValue;
})();
var StepByStepValue = (function () {
    function StepByStepValue() {
    }
    return StepByStepValue;
})();
var layouts = require('./step-by-step-layouts.val');
var StepByStepComponentDefinition = (function () {
    function StepByStepComponentDefinition() {
        this.name = 'Step by step';
        this.key = 'step-by-step';
        this.menuIconClass = 'fa fa-step-forward';
        this.defaultValue = {
            allowCircular: true,
            layout: layouts[0].key,
            steps: [
                {
                    html: '<p>Step one text goes here...</p>',
                    imageSrc: 'http://thecatapi.com/api/images/get?format=src&type=gif&rand=' + (Math.random() * 999).toFixed(0)
                }
            ]
        };
        this.editPanelTemplateUrl = 'components/step-by-step/step-by-step-edit-panel.tpl.html';
        this.editPanelController = function ($scope) {
            var panel = $scope.panel;
            panel.layouts = layouts || [];
            var img = new Image();
            img.onload = function () {
                console.log('image loded');
            };
            img.src = $scope.imageurl;
        };
        this.editorTemplateUrl = 'components/step-by-step/step-by-step-comp-editor.tpl.html';
        this.editorController = function ($sce, value, commitChanges, $upload, ContentEditorHelper, $modal, textComponentOptions) {
            var _this = this;
            //init trusted html code
            var sinatizeStepsHtml = function () {
                _this.trustedHtmlValues = [];
                value.steps.forEach(function (step) {
                    _this.trustedHtmlValues.push($sce.trustAsHtml(step.html));
                });
            };
            sinatizeStepsHtml();
            this.currentStep = 0;
            this.nextStep = function () {
                _this.currentStep++;
                if (_this.currentStep >= value.steps.length) {
                    _this.currentStep = 0;
                }
            };
            this.previousStep = function () {
                _this.currentStep--;
                if (_this.currentStep < 0) {
                    _this.currentStep = value.steps.length - 1;
                }
            };
            this.addStep = function (idx) {
                var newStep = {
                    html: 'New step description',
                    imageSrc: 'http://thecatapi.com/api/images/get?format=src&type=gif&rand=' + (Math.random() * 999).toFixed(0)
                };
                value.steps.splice(idx + 1, 0, newStep);
                _this.nextStep();
                commitChanges(value);
                sinatizeStepsHtml();
            };
            this.removeStep = function (idx) {
                _this.previousStep();
                value.steps.splice(idx, 1);
                commitChanges(value);
                sinatizeStepsHtml();
            };
            this.uploadNewStepImage = function ($files, step) {
                if ($files && $files[0]) {
                    var file = $files[0];
                    step.isUploadingImage = true;
                    $upload.upload({
                        url: ContentEditorHelper.getComponentConfig('image').imageUploadUrl,
                        file: file
                    }).progress(function (evt) {
                        step.imageUploadProgress = (100.0 * evt.loaded / evt.total).toFixed(0);
                    }).success(function (data, status, headers, config) {
                        step.imageSrc = data.filelink;
                        step.isUploadingImage = false;
                        commitChanges(value);
                    }).error(function (err) {
                        console.error(err);
                        step.isUploadingImage = false;
                    });
                }
            };
            this.openContentEditModal = function (step) {
                $modal.open({
                    templateUrl: 'components/step-by-step/step-by-step-edit-content.modal.html',
                    size: 'lg',
                    backdrop: 'static',
                    backdropClass: 'transparent-backdrop',
                    controller: function ($scope) {
                        $scope.currentHtml = step.html;
                        $scope.redactorOpts = angular.extend({}, textComponentOptions, { height: 300 });
                    }
                }).result.then(function (newHtml) {
                    step.html = newHtml;
                    commitChanges(value);
                    sinatizeStepsHtml();
                });
            };
        };
        this.viewerTemplateUrl = 'components/step-by-step/step-by-step-comp-viewer.tpl.html';
        this.viewerController = function ($sce, value, $scope, ContentEditorSdk) {
            var _this = this;
            //init trusted html code
            var sinatizeStepsHtml = function () {
                _this.trustedHtmlValues = [];
                value.steps.forEach(function (step) {
                    _this.trustedHtmlValues.push($sce.trustAsHtml(step.html));
                });
            };
            sinatizeStepsHtml();
            this.currentStep = 0;
            this.nextStep = function () {
                _this.currentStep++;
                if (_this.currentStep >= value.steps.length) {
                    _this.currentStep = 0;
                }
            };
            $scope.$watch('component.currentStep', function (newStep, oldStep) {
                if (oldStep !== newStep) {
                    ContentEditorSdk.triggerEvent(ContentEditorSdk.events.stepByStep.stepChanged, {
                        previousStep: oldStep,
                        currentStep: newStep,
                        totalSteps: value.steps.length
                    });
                }
            });
            this.previousStep = function () {
                _this.currentStep--;
                if (_this.currentStep < 0) {
                    _this.currentStep = value.steps.length - 1;
                }
            };
        };
        this.htmlNodeToValue = function ($node) {
            var steps = $node.find('.step').toArray().map(function (step) {
                var $step = $(step);
                var $img = $step.find('.step-image');
                var $desc = $step.find('.step-description');
                return {
                    html: $desc.html(),
                    imageSrc: $img.attr('src')
                };
            });
            return {
                layout: $node.attr('data-layout') || layouts[0].key,
                allowCircular: $node.attr('data-allow-circular') === 'true',
                steps: steps
            };
        };
        this.valueToHtml = function (stepsValue) {
            var steps = stepsValue.steps;
            var stepsHtml = steps.map(function (step) {
                return "<section class=\"step\"><img class=\"step-image\" src=\"" + step.imageSrc + "\" /><div class=\"step-description\">" + step.html + "</div></section>";
            }).join('');
            stepsValue.layout = stepsValue.layout || 'newspaper';
            return "<div class=\"step-by-step-container\" data-layout=\"" + stepsValue.layout + "\" data-allow-circular=\"" + stepsValue.allowCircular + "\">" + stepsHtml + "</div>";
        };
    }
    return StepByStepComponentDefinition;
})();
module.exports = StepByStepComponentDefinition;

},{"./step-by-step-layouts.val":27}],29:[function(require,module,exports){
module.exports = "<div class=\"row\">\n  <div class=\"form-group col-md-6\">\n  <label>Rows</label>\n  <input class=\"form-control\" type=\"number\" required min=\"1\" max=\"40\" vsmg ng-model=\"panel.currentValue.rows\"/>\n  </div>\n  <div class=\"form-group col-md-6\">\n  <label>Columns</label>\n  <input class=\"form-control\" type=\"number\" vmsg min=\"1\" max=\"10\" required ng-model=\"panel.currentValue.columns\"/>\n  </div>\n</div>";

},{}],30:[function(require,module,exports){
module.exports = "<table>\n  <thead>\n    <tr>\n      <th ng-repeat=\"col in component.colsRepeater\"><input class=\"strip-input\" placeholder=\"Enter heading..\" ng-model=\"component.value.headings[col]\" ng-change=\"component.saveChanges()\"/></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in component.rowsRepeater\">\n      <td ng-repeat=\"col in component.colsRepeater\">\n        <div redactor=\"textEditorOptions\" ng-model=\"component.value.cells[row][col]\" content-editor-blur=\"component.saveChanges()\" redactor-hide-toolbar ></div>\n      </td>\n    </tr>\n  </tbody>\n</table>";

},{}],31:[function(require,module,exports){
module.exports = "<table>\n  <thead>\n    <tr>\n      <th ng-repeat=\"col in component.colsRepeater\">{{component.value.headings[col]}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in component.rowsRepeater\">\n      <td ng-repeat=\"col in component.colsRepeater\">\n        <div ng-model=\"component.value.cells[row][col]\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>";

},{}],32:[function(require,module,exports){
var TableCompValue = (function () {
    function TableCompValue() {
    }
    return TableCompValue;
})();
var TableComponentDefinition = (function () {
    function TableComponentDefinition() {
        this.name = 'Table';
        this.key = 'table';
        this.menuIconClass = 'fa fa-th-list';
        this.defaultValue = {
            columns: 2,
            rows: 3,
            headings: ['', ''],
            cells: [['', ''], ['', ''], ['', '']]
        };
        this.editorOpenEditPanelOnAdd = true;
        this.editorTemplateUrl = 'components/table/table-comp-editor.tpl.html';
        this.editorPreCompileController = function ($scope, textComponentOptions) {
            $scope.textEditorOptions = angular.extend({}, textComponentOptions, { toolbarFixed: false });
        };
        this.editorController = function ($scope, value, commitChanges) {
            this.rowsRepeater = Array(value.rows).join('0').split('0').map(Number.call, Number); //http://stackoverflow.com/questions/16824853/way-to-ng-repeat-defined-number-of-times-instead-of-repeating-over-array
            this.colsRepeater = Array(value.columns).join('0').split('0').map(Number.call, Number);
            this.saveChanges = function () { return commitChanges(value); };
        };
        this.editPanelTemplateUrl = 'components/table/table-comp-edit-panel.html';
        this.htmlNodeToValue = function ($node) {
            return {
                rows: $node.find('tbody tr').length,
                columns: $node.find('th').length,
                headings: $node.find('th').toArray().map(function (elm) {
                    return $(elm).text();
                }),
                cells: $node.find('tbody tr').toArray().map(function (elm) { return $(elm).find('td').toArray().map(function (elm) { return $(elm).html(); }); })
            };
        };
        this.valueToHtml = function (value) {
            var headContent = '', bodyContent = '';
            for (var col = 0; col < value.columns; col++) {
                headContent += "<th>" + value.headings[col] + "</th>";
            }
            for (var row = 0; row < value.rows; row++) {
                bodyContent += '<tr>';
                for (col = 0; col < value.columns; col++) {
                    bodyContent += "<td>" + (value.cells[row] && value.cells[row][col] ? value.cells[row][col] : '') + "</td>";
                }
                bodyContent += '</tr>';
            }
            return "<table><thead><tr>" + headContent + "</tr><tbody>" + bodyContent + "</tbody></table>";
        };
    }
    return TableComponentDefinition;
})();
module.exports = TableComponentDefinition;

},{}],33:[function(require,module,exports){
module.exports = "    <div redactor=\"textEditorOptions\" redactor-hide-toolbar class=\"text-editor\"\n         ng-model=\"component.value.html\" content-editor-blur=\"component.saveChanges();\">\n    </div>";

},{}],34:[function(require,module,exports){
///<reference path="../../reference.ts"/>
/**
 * Created by Gabriel_Grinberg on 4/11/15.
 */
'use strict';
angular.module('answersContentCore').factory('textComponentOptions', function (ContentEditorHelper) {
    var externalConfigurationOptions = ContentEditorHelper.getComponentConfig('text') || {};
    var defaultOptions = {
        italics: false,
        underline: true,
        buttonSource: true,
        buttons: ['bold', 'underline', 'deleted', 'formatting', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'image', 'link', 'alignment', 'html'],
        formatting: ['p'],
        formattingAdd: [{
            tag: 'span',
            title: 'Note',
            class: 'note'
        }],
        // toolbarFixed: false,
        pastePlainText: false,
        toolbarFixedTopOffset: 50,
        placeholder: 'Text goes here',
        replaceStyles: [
            ['font-weight:\\s?(700|bold)', 'strong'],
            ['font-style:\\s?italic', 'em'],
            ['text-decoration:\\s?underline', 'u'],
            ['text-decoration:\\s?line-through', 'del']
        ],
        sourceCallback: function () {
            this.$toolbar.addClass('visible');
        },
        syncBeforeCallback: function (html) {
            //XSS prevention
            var pattern = /\son(\S+?)=\"(.+?)\"/g;
            return html.replace(pattern, '');
        }
    };
    return angular.extend({}, defaultOptions, externalConfigurationOptions);
}).config(function (ContentEditorHelperProvider) {
    var componentKey = 'text';
    var componentDefinition = {
        key: componentKey,
        defaultValue: {
            html: ''
        },
        priority: 1,
        menuIconClass: 'fa fa-font',
        name: 'Text',
        editorTemplateUrl: 'components/text/text-comp-editor.tpl.html',
        editorPreCompileController: function ($scope, value, textComponentOptions) {
            $scope.textEditorOptions = angular.copy(textComponentOptions);
            if (value.justAdded) {
                $scope.textEditorOptions.focus = true;
                value.justAdded = false;
            }
        },
        editorController: function (commitChanges, element, contentEditorCtrl, $timeout, index, textComponentOptions, value) {
            this.saveChanges = function () {
                commitChanges(value);
            };
        },
        htmlNodeToValue: function ($node) {
            return {
                html: $node.parent().html() || ''
            };
        },
        valueToHtml: function (value) {
            return value.html.replace(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g, function (str) {
                return str.replace(/  /g, ' &nbsp;');
            });
        }
    };
    ContentEditorHelperProvider.addComponent(componentKey, componentDefinition);
}).directive('contentEditorBlur', function ($timeout) {
    return {
        priority: 2,
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('blur', function () {
                scope.$apply(function () { return scope.$eval(attrs.contentEditorBlur); });
            });
        }
    };
}).directive('redactorHideToolbar', function () {
    return {
        priority: 2,
        link: function (scope, element) {
            element.on('focus', function () { return element.parent().find('.redactor-toolbar').addClass('visible'); });
            element.on('blur', function () {
                if (!element.find('textarea').is(':visible')) {
                    element.parent().find('.redactor-toolbar').removeClass('visible');
                }
            });
        }
    };
});

},{}],35:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],36:[function(require,module,exports){
'use strict';
var TipComponentValue = (function () {
    function TipComponentValue() {
    }
    return TipComponentValue;
})();
var TipComponentDefinition = (function () {
    function TipComponentDefinition() {
        this.key = 'tip';
        this.name = 'Tip';
        this.defaultValue = {
            html: '<p></p>'
        };
        this.editorTemplateUrl = 'components/tip/tip-comp-editor.tpl.html';
        this.editorPreCompileController = function ($scope, textComponentOptions, value) {
            $scope.textEditorOptions = angular.copy(textComponentOptions);
            if (value.justAdded) {
                $scope.textEditorOptions.focusEnd = true;
                value.justAdded = false;
            }
        };
        this.editorController = function (value, commitChanges) {
            this.saveChanges = function () { return commitChanges(value); };
        };
    }
    TipComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        return {
            html: $('<div>').append($node).html()
        };
    };
    TipComponentDefinition.prototype.valueToHtml = function (value) {
        return value.html;
    };
    return TipComponentDefinition;
})();
module.exports = TipComponentDefinition;

},{}],37:[function(require,module,exports){
module.exports = "<div class=\"form-group\">\n    <label>Enter Youtube or Vimeo URL:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.userSrc\" placeholder=\"Youtube or Vimeo URL\" type=\"text\" vmsg=\"{errorMessages: {pattern: 'Must be a valid Youtube or Vimeo video URL'}}\" required ng-pattern=\"/(^(https?\\:\\/\\/)?(\\/\\/)?(www\\.)?(youtube\\.com|youtu\\.?be)\\/.+$)|(^(https?\\:\\/\\/)?(\\/\\/)?(player\\.)?(www\\.)?(vimeo\\.com\\/)(video\\/)?([0-9]+)$)/\" />\n</div>\n<div class=\"form-group\">\n    <label>Width:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.width\" placeholder=\"Width\" type=\"number\" min=\"200\" vmsg/>\n</div>\n<div class=\"form-group\">\n    <label>height:</label>\n    <input class=\"form-control input-sm\" ng-model=\"panel.currentValue.height\" placeholder=\"height\" type=\"number\" min=\"100\" vmsg/>\n</div>\n<div class=\"form-group\">\n    <label>Align</label>\n    <select ng-model=\"panel.currentValue.align\"\n            class=\"form-control\"\n            ng-options=\"align.id as align.name for align in [{ id: 'left', name: 'Left' }, { id: 'center', name: 'Center' }, { id: 'right', name: 'Right' }]\">\n    </select>\n</div>";

},{}],38:[function(require,module,exports){
'use strict';
var VideoCompValue = (function () {
    function VideoCompValue() {
    }
    return VideoCompValue;
})();
var VideoComponentDefinition = (function () {
    function VideoComponentDefinition() {
        this.key = 'video';
        this.name = 'Video';
        this.menuIconClass = 'fa fa-play-circle';
        this.defaultValue = {
            url: '',
            width: 666,
            height: 375,
            align: 'center'
        };
        this.editorTemplate = '<div style="text-align:{{component.value.align}}"><iframe src="{{component.trustedHref}}" style="width:{{component.value.width}}px; height:{{component.value.height}}px"></iframe></div>';
        this.editorController = function (value, $sce) {
            this.trustedHref = $sce.trustAsResourceUrl(value.url);
        };
        this.editPanelTemplateUrl = 'components/video/video-edit-panel.html';
        this.editorOpenEditPanelOnAdd = true;
        this.editPanelController = function ($scope) {
            var panel = $scope.panel;
            panel.currentValue.userSrc = panel.currentValue.url;
            $scope.$watch('panel.currentValue.userSrc', function (url) {
                if (url) {
                    var supportedVideoRegex = {
                        urlYoutube: /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,
                        urlVimeo: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/
                    };
                    if (url.match(supportedVideoRegex.urlYoutube)) {
                        url = url.replace(supportedVideoRegex.urlYoutube, '//www.youtube.com/embed/$1');
                    }
                    else if (url.match(supportedVideoRegex.urlVimeo)) {
                        url = url.replace(supportedVideoRegex.urlVimeo, '//player.vimeo.com/video/$2');
                    }
                    panel.currentValue.url = url;
                }
            });
        };
    }
    VideoComponentDefinition.prototype.htmlNodeToValue = function ($node) {
        var $iframe = $node.find('iframe');
        var width = ($iframe.css('width').indexOf('%') === -1) ? parseInt($iframe.css('width')) : null;
        var height = ($iframe.css('height').indexOf('%') === -1) ? parseInt($iframe.css('height')) : null;
        return {
            url: $iframe.attr('src'),
            width: width,
            height: height,
            align: $node.css('text-align')
        };
    };
    VideoComponentDefinition.prototype.valueToHtml = function (value) {
        var width = value.width ? value.width + 'px' : '100%';
        var height = value.height ? value.height + 'px' : '100%';
        return "<div style=\"text-align:" + value.align + "\"><iframe src=\"" + value.url + "\" style=\"width:" + width + ";height:" + height + ";\"></iframe></div>";
    };
    return VideoComponentDefinition;
})();
module.exports = VideoComponentDefinition;

},{}],39:[function(require,module,exports){
'use strict';
var ContentClipboard = (function () {
    function ContentClipboard($window) {
        this.localStorageKey = 'answersContentEditorClipboard';
        this.localStorage = $window.localStorage;
    }
    ContentClipboard.prototype.copy = function (data) {
        try {
            localStorage.setItem(this.localStorageKey, angular.toJson(data));
        }
        catch (e) {
            console.error('Unable to copy because of: ', e);
        }
    };
    ContentClipboard.prototype.paste = function () {
        var item = localStorage.getItem(this.localStorageKey);
        try {
            return JSON.parse(item);
        }
        catch (e) {
            console.error(e);
            return null;
        }
    };
    return ContentClipboard;
})();
module.exports = ContentClipboard;

},{}],40:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/26/15.
 */
'use strict';
var AnchorComponentDefinition = require('./../components/anchor/anchor.comp');
var ImageComponentDefinition = require('./../components/image/image.comp');
var VideoComponentDefinition = require('./../components/video/video.comp');
var IframeComponentDefinition = require('./../components/iframe/iframe.comp');
var CodeComponentDefinition = require('./../components/code/code.comp');
var StepByStepComponentDefinition = require('./../components/step-by-step/step-by-step.comp');
var LineComponentDefinition = require('./../components/line/line.comp');
var TableComponentDefinition = require('./../components/table/table.comp');
var HeadingComponentDefinition = require('./../components/heading/heading.comp');
var HtmlComponentDefinition = require('./../components/html/html.comp');
var NoteComponentDefinition = require('./../components/note/note.comp');
var TipComponentDefinition = require('./../components/tip/tip.comp');
var ImportantComponentDefinition = require('./../components/important/important.comp');
var ComponentsDefinitionConfig = (function () {
    function ComponentsDefinitionConfig(ContentEditorHelperProvider) {
        ContentEditorHelperProvider.addComponentNew(new AnchorComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new ImageComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new VideoComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new IframeComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new CodeComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new StepByStepComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new LineComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new TableComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new HeadingComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new HtmlComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new NoteComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new TipComponentDefinition());
        ContentEditorHelperProvider.addComponentNew(new ImportantComponentDefinition());
    }
    return ComponentsDefinitionConfig;
})();
angular.module('answersContentCore').config(ComponentsDefinitionConfig);
// in admin
angular.module('answersContentCore').config(function (ContentEditorHelperProvider) {
    ContentEditorHelperProvider.setComponentConfig('image', {
        uploadFields: {
            tenantId: '12345678-1234-1234-1234-1234567890ab'
        }
    });
    ContentEditorHelperProvider.setComponentConfig('step-by-step', {
        layouts: [
            {
                key: 'newspaper',
                imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/05/27/e59e3ad9-b08d-4e02-9b10-7dca68684edd.png'
            },
            {
                key: 'dots',
                imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/05/27/761f39b2-3649-4f9c-8ba1-3c3c1c6c3237.png'
            },
            {
                key: 'ordered',
                imgSrc: '//d2eyqiy4n03ve6.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2015/05/27/97dc0e33-d931-4094-bd37-fcc689beb9d6.png'
            }
        ]
    });
});

},{"./../components/anchor/anchor.comp":8,"./../components/code/code.comp":10,"./../components/heading/heading.comp":11,"./../components/html/html.comp":13,"./../components/iframe/iframe.comp":15,"./../components/image/image.comp":17,"./../components/important/important.comp":19,"./../components/line/line.comp":20,"./../components/note/note.comp":22,"./../components/step-by-step/step-by-step.comp":28,"./../components/table/table.comp":32,"./../components/tip/tip.comp":36,"./../components/video/video.comp":38}],41:[function(require,module,exports){
'use strict';
var ContentEditorHelperProvider = (function () {
    function ContentEditorHelperProvider() {
        this.components = {};
        this.componentsConfiguration = {};
    }
    ContentEditorHelperProvider.prototype.addComponentNew = function (componentDefinition) {
        if (!componentDefinition.editorTemplate && !componentDefinition.editorTemplateUrl) {
            throw 'component definition must have either template or templateUrl';
        }
        this.components[componentDefinition.key] = componentDefinition;
        return this;
    };
    ContentEditorHelperProvider.prototype.addComponent = function (key, definition) {
        this.components[key] = definition;
        this.components[key].key = key;
        return this;
    };
    ContentEditorHelperProvider.prototype.setComponentConfig = function (key, config) {
        this.componentsConfiguration[key] = config;
        return this;
    };
    ContentEditorHelperProvider.prototype.$get = function ($log) {
        var _this = this;
        return {
            components: this.components,
            getComponentConfig: function (key) { return _this.componentsConfiguration[key] || {}; },
            getComponentDefinitionByKey: function (key) { return _this.components[key]; },
            consolidateTextComponents: function (components) {
                return components.reduce(function (combinedComponents, component) {
                    var previous = combinedComponents[combinedComponents.length - 1];
                    if (component.type === 'text' && previous && previous.type === 'text') {
                        $log.log('detected!', previous.value, component.value);
                        previous.value.html += component.value.html;
                    }
                    else {
                        combinedComponents.push(component);
                    }
                    return combinedComponents;
                }, []);
            },
            getPositionBetweenNodeAndPreviousSibling: function ($el) {
                var itemTopMargin = parseInt($el.css('margin-top'));
                var prevItemBottomMargin = $el.prev().length ? parseInt($el.prev().css('margin-bottom')) : 0;
                var itemTopPosition = $el.position().top;
                var halfOfTopMargin = Math.max(itemTopMargin, prevItemBottomMargin) / 2;
                return itemTopPosition - halfOfTopMargin;
            },
            getPositionBetweenNodeAndNextSibling: function ($el) {
                var itemBottomMargin = parseInt($el.css('margin-bottom'));
                var nextItemTopMargin = $el.next().length ? parseInt($el.next().css('margin-top')) : 0;
                var itemTopPosition = $el.position().top;
                var halfOfBottomMargin = Math.max(itemBottomMargin, nextItemTopMargin) / 2;
                return itemTopPosition + $el.outerHeight(true) - halfOfBottomMargin;
            },
            getSurroundingHtml: function ($el) {
                var part1 = '';
                var part2 = '';
                var reachedCurrent = false;
                $el.parent().children().each(function (idx, el) {
                    var $sibling = $(el);
                    if ($sibling.get(0) === $el.get(0)) {
                        reachedCurrent = true;
                    }
                    else if (reachedCurrent) {
                        part2 += $sibling[0].outerHTML;
                    }
                    else {
                        part1 += $sibling[0].outerHTML;
                    }
                });
                return [part1, part2];
            },
            getSplitHtmlContentAboveChild: function ($child) {
            },
            getSplitHtmlContentBelowChild: function ($child) {
                var part1 = '';
                var part2 = '';
                var reachedCurrent = false;
                $child.parent().children().each(function (idx, el) {
                    var $sibling = $(el);
                    if (reachedCurrent) {
                        part2 += $sibling[0].outerHTML;
                    }
                    else {
                        part1 += $sibling[0].outerHTML;
                    }
                    if ($sibling.get(0) === $child.get(0)) {
                        reachedCurrent = true;
                    }
                });
                return [part1, part2];
            },
            getRandomGuid: function () {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }
        };
    };
    return ContentEditorHelperProvider;
})();
module.exports = ContentEditorHelperProvider;

},{}],42:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 5/19/15.
 */
var ContentEditorHelperProvider = require('./content-editor-helper');
var DocumentProcessor = require('./document-processor');
var ContentEditorSdk = require('./sdk/sdk.srv');
var ContentClipboard = require('./clipboard/content-clipboard.srv');
angular.module('answersContentCore', ['contentEditorTranslations', 'ngSanitize', 'pascalprecht.translate']).provider('ContentEditorHelper', ContentEditorHelperProvider).service('DocumentProcessor', DocumentProcessor).service('ContentEditorSdk', ContentEditorSdk).service('ContentClipboard', ContentClipboard);

},{"./clipboard/content-clipboard.srv":39,"./content-editor-helper":41,"./document-processor":43,"./sdk/sdk.srv":44}],43:[function(require,module,exports){
'use strict';
var DocumentProcessor = (function () {
    function DocumentProcessor(ContentEditorHelper) {
        this.availableComponents = ContentEditorHelper.components;
    }
    DocumentProcessor.prototype.isValidHtmlContent = function (htmlContent) {
        try {
            var parsedComponents = this.parseHtmlToComponents(htmlContent);
            var reversedHtml = this.renderHtml(parsedComponents);
            var doubleParsedComponents = this.parseHtmlToComponents(reversedHtml);
            var $children = $('<div>').html(htmlContent).children();
            var componentCount = $children.filter('div[data-component-type]').length;
            var childrenCount = $children.length;
            var childrenCountMatch = childrenCount === parsedComponents.length;
            var componentCountMatch = componentCount === parsedComponents.length;
            var hasComponents = componentCount > 0;
            var componentContentMatch = angular.equals(parsedComponents, doubleParsedComponents);
            return hasComponents && childrenCountMatch && componentCountMatch && componentContentMatch;
        }
        catch (e) {
            return false;
        }
    };
    DocumentProcessor.prototype.parseHtmlToComponents = function (html) {
        var _this = this;
        return $(html).filter('div[data-component-type]').toArray().map(function (node) {
            var $node = $(node);
            var templateId = $node.attr('data-template-id');
            var templatePartIndexString = $node.attr('data-template-part-index');
            var type = $node.attr('data-component-type');
            var attentionBlockMigration = {
                note: 'note',
                tip: 'tip',
                important: 'important'
            };
            if (type === 'attention-block') {
                var $blockNode = $node.find('[data-attention-block-type]');
                var blockType = $blockNode.attr('data-attention-block-type');
                type = attentionBlockMigration[blockType];
                $node = $blockNode;
            }
            var componentData = {
                type: type,
                value: _this.availableComponents[type].htmlNodeToValue($node.contents())
            };
            if (templateId) {
                componentData.template = {
                    id: templateId,
                    index: parseInt(templatePartIndexString)
                };
            }
            return componentData;
        });
    };
    DocumentProcessor.prototype.renderHtml = function (components) {
        var _this = this;
        return components.map(function (component) {
            var innerValue = _this.availableComponents[component.type].valueToHtml(component.value);
            var templateInfoIfAvailable = component.template ? " data-template-id=\"" + component.template.id + "\" data-template-part-index=\"" + component.template.index + "\"" : '';
            return "<div data-component-type=\"" + component.type + "\"" + templateInfoIfAvailable + ">" + innerValue + "</div>";
        }).join('');
    };
    return DocumentProcessor;
})();
module.exports = DocumentProcessor;

},{}],44:[function(require,module,exports){
var ContentEditorSdk = (function () {
    /* @ngInject*/
    function ContentEditorSdk($document, $timeout) {
        this.safetyDelay = 0;
        this.events = {
            stepByStep: {
                stepChanged: 'sbs.stepChanged'
            }
        };
        this.$document = $document;
        this.$timeout = $timeout;
    }
    ContentEditorSdk.prototype.triggerEvent = function (eventType, data) {
        var _this = this;
        this.$timeout(function () {
            _this.$document.trigger(eventType, [eventType, data]);
        }, this.safetyDelay);
    };
    ContentEditorSdk.prototype.addListener = function (eventType, listener) {
        return this.$document.on(eventType, listener);
    };
    return ContentEditorSdk;
})();
module.exports = ContentEditorSdk;

},{}],45:[function(require,module,exports){
'use strict';
function ContentDifferDirective(ContentEditorHelper) {
    return {
        restrict: 'E',
        templateUrl: 'differ/content-differ.tpl.html',
        scope: {
            before: '=',
            after: '='
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: function (Differ, $scope) {
            var vm = this;
            function refresh() {
                vm.components = Differ.diff(vm.before, vm.after);
            }
            ;
            $scope.$watch('vm.before', refresh);
            $scope.$watch('vm.after', refresh);
            refresh();
        }
    };
}
module.exports = ContentDifferDirective;

},{}],46:[function(require,module,exports){
module.exports = "<ul>\n  <li ng-repeat=\"component in vm.components\"\n      class=\"component-list-item component-viewer-container\">\n    <viewer-component type=\"{{::component.type}}\" value=\"component.value\" class=\"{{::component.diff}}\"></viewer-component>\n  </li>\n</ul>";

},{}],47:[function(require,module,exports){
'use strict';
var Differ = require('./differ.srv');
var ContentDifferDirective = require('./content-differ.drv');
angular.module('answersContentEditorDiffer', ['answersContentEditorViewerInternal']).service('Differ', Differ).directive('contentDiffer', ContentDifferDirective);

},{"./content-differ.drv":45,"./differ.srv":48}],48:[function(require,module,exports){
'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CompValue = (function () {
    function CompValue() {
    }
    return CompValue;
})();
var DiffResult = (function (_super) {
    __extends(DiffResult, _super);
    function DiffResult() {
        _super.apply(this, arguments);
    }
    return DiffResult;
})(CompValue);
var Differ = (function () {
    function Differ() {
        this.ADDED = 'ADDED';
        this.REMOVED = 'REMOVED';
        this.MODIFIED = 'MODIFIED';
        this.SAME = 'SAME';
    }
    Differ.prototype.diff = function (beforeCompList, afterCompList) {
        var _this = this;
        beforeCompList = angular.copy(beforeCompList);
        afterCompList = angular.copy(afterCompList);
        var result = new Array(Math.max(afterCompList.length, beforeCompList.length)).join('0').split('0').map(function () { return []; });
        for (var i = 0; i < beforeCompList.length; i++) {
            var found = false;
            var beforeComp = beforeCompList[i];
            for (var j = 0; j < afterCompList.length; j++) {
                var afterComp = afterCompList[j];
                if (!afterComp) {
                    continue;
                }
                if (angular.equals(beforeComp, afterComp)) {
                    result[j].push(angular.extend({}, afterComp, { diff: this.SAME }));
                    afterCompList[j] = null;
                    found = true;
                    break;
                }
                else if (beforeComp.type === afterComp.type) {
                    result[j].push(angular.extend({}, afterComp, { diff: this.MODIFIED }));
                    afterCompList[j] = null;
                    found = true;
                    break;
                }
            }
            if (!found) {
                result[i].push(angular.extend({}, beforeComp, { diff: this.REMOVED }));
            }
        }
        afterCompList.forEach(function (comp, idx) {
            if (comp) {
                result[idx].push(angular.extend({}, comp, { diff: _this.ADDED }));
            }
        });
        return result.reduce(function (prev, curr) {
            return prev.concat(curr);
        }, []);
    };
    return Differ;
})();
module.exports = Differ;
/*
1
1 1  1
     2[d]
2 3  3[a]
4 4  4[s]
  5  5[a]

*/

},{}],49:[function(require,module,exports){
module.exports = "<div class=\"component-adder\" ng-class=\"{'menu-open': adder.isMenuOpen}\">\n  <div class=\"ball\" ng-click=\"adder.toggleMenu()\">+</div>\n  <div class=\"line\"></div>\n  <div class=\"components-menu-container\">\n    <div class=\"components-menu\">\n      <!--<h4>Add a component:</h4>-->\n      <section> \n        <h4>Basic</h4>\n        <button ng-click=\"adder.addComponent('text')\">\n          <i class=\"btn-icon fa fa-font\"></i>\n          Text\n        </button>\n         <button ng-click=\"adder.addComponent('image')\">\n          <i class=\"btn-icon fa fa-image\"></i>\n          Image\n        </button>\n         <button ng-click=\"adder.addComponent('anchor')\">\n          <i class=\"btn-icon fa fa-anchor\"></i>\n          Anchor\n        </button>\n         <button ng-click=\"adder.addComponent('subheading')\">\n          <i class=\"btn-icon fa fa-font\"></i>\n          Subheading\n        </button>\n      </section>\n      <section> \n        <h4>Extra</h4>\n        <button ng-click=\"adder.addComponent('video')\">\n          <i class=\"btn-icon fa fa-play-circle\"></i>\n          Video\n        </button>\n        <button ng-click=\"adder.addComponent('step-by-step')\">\n          <i class=\"btn-icon fa fa-step-forward\"></i>\n          Step-by-step\n        </button>\n        <button ng-click=\"adder.addComponent('line')\">\n          <i class=\"btn-icon fa fa-ellipsis-h\"></i>\n          Line\n        </button>\n        <button ng-click=\"adder.addComponent('note')\">\n          <i class=\"btn-icon fa fa-italic\"></i>\n          Note\n        </button>\n        <button ng-click=\"adder.addComponent('tip')\">\n          <i class=\"btn-icon fa fa-lightbulb-o\"></i>\n          Tip\n        </button>\n        <button ng-click=\"adder.addComponent('important')\">\n          <i class=\"btn-icon fa fa fa-info-circle\"></i>\n          Important\n        </button>\n      </section>\n      <section> \n        <h4>Advanced</h4>\n        <button ng-click=\"adder.addComponent('iframe')\">\n          <i class=\"btn-icon fa fa-code\"></i>\n          IFrame\n        </button>\n        <button ng-click=\"adder.addComponent('code')\">\n          <i class=\"btn-icon fa fa-terminal\"></i>\n          Code\n        </button>\n        <button ng-click=\"adder.addComponent('html')\">\n          <i class=\"btn-icon fa fa-code\"></i>\n          HTML\n        </button>\n        <button ng-click=\"adder.addComponent('table')\">\n          <i class=\"btn-icon fa fa-table\"></i>\n          Table\n        </button>\n        <button ng-click=\"adder.pasteComponent()\" class=\"paste-component\"\n                title=\"{{!adder.isPasteEnabled ? 'Copy a component first' : ''}}\"\n                ng-disabled=\"!adder.isPasteEnabled\">\n          <i class=\"btn-icon fa fa-clipboard\"></i>\n          Paste\n        </button>\n      </section>\n    </div>\n  </div>\n</div>";

},{}],50:[function(require,module,exports){
module.exports = "<div class=\"component-adder\" ng-class=\"{'menu-open': adder.isMenuOpen}\">\n  <div class=\"ball\" ng-click=\"adder.toggleMenu()\">+</div>\n  <div class=\"line\"></div>\n  <div class=\"components-menu-container\">\n    <div class=\"components-menu\">\n      <!--<h4>Add a component:</h4>-->\n      <div class=\"btn-add-container\" ng-repeat=\"comp in adder.possibleComponents | orderBy :'+priority'\">\n        <div class=\"btn-add-component\" ng-click=\"adder.addComponent(comp.key)\">\n          <i class=\"icon {{comp.menuIconClass}}\" ng-if=\"comp.menuIconClass\"></i>\n          <span class=\"name\">{{comp.name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

},{}],51:[function(require,module,exports){
'use strict';
angular.module('answersContentEditorInternal').directive('componentAdder', function () {
    function isElementNearMouseEvent($element, distance, event) {
        var left = $element.offset().left - distance, top = $element.offset().top - distance, right = left + $element.width() + (2 * distance * 5), bottom = top + $element.height() + (2 * distance), x = event.pageX, y = event.pageY;
        if ($element.is(':hover')) {
            return 'inside';
        }
        else {
            return (x > left && x < right && y > top && y < bottom);
        }
    }
    function isElementInViewport(el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    return {
        restrict: 'E',
        require: '^contentEditor',
        templateUrl: 'editor/adder/component-adder.html',
        replace: true,
        scope: {
            index: '@',
            isPasteEnabled: '='
        },
        link: function (scope, elem, attrs, contentEditorCtrl) {
            var $ball = elem.find('.ball');
            var handler = $('body').on('mousemove', function (event) {
                if (isElementInViewport($ball)) {
                    var isNear = isElementNearMouseEvent($ball, 50, event);
                    var isInside = (isNear === 'inside');
                    if (isNear) {
                        if (isInside) {
                            elem.addClass('in');
                        }
                        else {
                            elem.removeClass('in');
                        }
                        elem.addClass('on');
                    }
                    else {
                        elem.removeClass('on');
                    }
                }
            });
            var outerClickHandler = $('html').click(function () {
                if (scope.adder.isMenuOpen) {
                    scope.$apply(function () {
                        scope.adder.closeMenu();
                    });
                }
            });
            var insideClickHandler = elem.click(function (e) {
                e.stopPropagation();
            });
            scope.$on('disableAllAdders', function () {
                elem.addClass('disabled');
            });
            scope.$on('reEnableAllAdders', function () {
                elem.removeClass('disabled');
            });
            scope.$on('$destroy', function () { return elem.off(handler, outerClickHandler, insideClickHandler); });
            scope.contentEditorCtrl = contentEditorCtrl;
        },
        controller: function ($scope, ContentEditorHelper, $rootScope, ContentClipboard) {
            var _this = this;
            var components = ContentEditorHelper.components;
            this.possibleComponents = Object.keys(components).map(function (k) { return components[k]; });
            this.toggleMenu = function () {
                if (_this.isMenuOpen) {
                    _this.closeMenu();
                }
                else {
                    $rootScope.$broadcast('disableAllAdders');
                    _this.isMenuOpen = true;
                }
            };
            this.closeMenu = function () {
                _this.isMenuOpen = false;
                $rootScope.$broadcast('reEnableAllAdders');
            };
            this.addComponent = function (compType) {
                $scope.contentEditorCtrl.addComponent(compType, undefined, parseInt(_this.index));
                _this.closeMenu();
            };
            this.pasteComponent = function () {
                $scope.contentEditorCtrl.pasteComponentAt(parseInt(_this.index));
                _this.closeMenu();
            };
        },
        controllerAs: 'adder',
        bindToController: true
    };
});

},{}],52:[function(require,module,exports){
'use strict';
angular.module('answersContentEditorInternal').factory('ComponentEditorRenderer', function ($compile, $http, $q, ContentEditorHelper, $rootScope, $controller, $templateCache) {
    var availableComponents = ContentEditorHelper.components;
    var getComponentTemplate = function (componentDefinition) {
        var templateUrl = componentDefinition.editorTemplateUrl;
        if (!templateUrl) {
            return componentDefinition.editorTemplate;
        }
        else {
            return $templateCache.get(templateUrl);
        }
    };
    return {
        render: function (type, value, commitChangesFn, contentEditorCtrl, index, parentScope) {
            var scope = $rootScope.$new(true, parentScope);
            var componentDefinition = availableComponents[type];
            var templateContents = getComponentTemplate(componentDefinition);
            if (componentDefinition.editorPreCompileController) {
                $controller(componentDefinition.editorPreCompileController, { $scope: scope, value: value, commitChanges: commitChangesFn });
            }
            var element = $compile(angular.element(templateContents))(scope);
            var ctrl = $controller(componentDefinition.editorController || angular.noop, {
                $scope: scope,
                value: value,
                commitChanges: commitChangesFn,
                element: element,
                contentEditorCtrl: contentEditorCtrl,
                index: index
            });
            ctrl.value = value;
            //add a controllerAs-like syntax
            scope.component = ctrl;
            scope.commitChanges = commitChangesFn;
            return element;
        }
    };
});

},{}],53:[function(require,module,exports){
'use strict';
function ContentEditorDirective(ContentEditorHelper) {
    var availableComponents = ContentEditorHelper.components;
    return {
        restrict: 'E',
        templateUrl: 'editor/content-editor.tpl.html',
        scope: {
            lang: '@',
            components: '='
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: function ($timeout, hotkeys, $q, $scope, ComponentEditPanel, $log, ContentClipboard) {
            var _this = this;
            this.undoStack = [];
            this.redoStack = [];
            this.refreshTriggers = [];
            this.adders = [];
            this.justAddedIndex = -1;
            var cloneState = function () { return JSON.parse(JSON.stringify(angular.copy(_this.components))); };
            var pushToHistoryStackAndRemakeState = function () {
                _this.undoStack.unshift(cloneState());
                _this.redoStack = [];
            };
            hotkeys.add({
                combo: ['ctrl+z', 'command+z'],
                callback: function () { return _this.undo(); }
            });
            hotkeys.add({
                combo: ['ctrl+y', 'command+shift+z'],
                callback: function () { return _this.redo(); }
            });
            this.copyComponent = function (component) {
                ContentClipboard.copy(component);
            };
            this.isThereACopiedComponent = function () { return !!ContentClipboard.paste(); };
            this.pasteComponentAt = function (idx, addUndoState) {
                if (addUndoState === void 0) { addUndoState = true; }
                var copiedComponent = ContentClipboard.paste();
                if (!copiedComponent) {
                    throw 'attempt to paste null component';
                }
                if (addUndoState) {
                    pushToHistoryStackAndRemakeState();
                }
                _this.components.splice(idx, 0, copiedComponent);
            };
            this.undo = function () {
                if (_this.undoStack.length) {
                    _this.redoStack.unshift(cloneState());
                    _this.components = _this.undoStack.shift();
                }
            };
            this.redo = function () {
                if (_this.redoStack.length) {
                    _this.undoStack.unshift(cloneState());
                    _this.components = _this.redoStack.shift();
                }
            };
            this.addUndoState = function () { return pushToHistoryStackAndRemakeState(); };
            this.reportValueChanged = function (value, index, addUndoState) {
                if (addUndoState === void 0) { addUndoState = true; }
                if (addUndoState) {
                    pushToHistoryStackAndRemakeState();
                }
                _this.components[index].value = value;
            };
            this.clearEmptyComponents = function () {
                var stripTags = function (str) { return str.replace(/(<([^>]+)>)/ig, ''); };
                var emptyTextComponent = function (comp) { return !(comp.type === 'text' && !stripTags(comp.value.html) && !comp.value.justAdded); };
                if (_this.components.length > 1) {
                    _this.components = _this.components.filter(emptyTextComponent);
                }
            };
            this.addComponent = function (type, value, index, addUndoState, openEditPanel) {
                if (value === void 0) { value = availableComponents[type].defaultValue; }
                if (index === void 0) { index = _this.components.length; }
                if (addUndoState === void 0) { addUndoState = true; }
                if (openEditPanel === void 0) { openEditPanel = availableComponents[type].editorOpenEditPanelOnAdd; }
                var newComponent = { type: type, value: value };
                if (addUndoState) {
                    pushToHistoryStackAndRemakeState();
                }
                _this.justAddedIndex = index;
                value.justAdded = true; //this allows the component to know if it was freshly added or just loaded. Pretty sure it's the best way to do it...
                if (openEditPanel) {
                    var componentDefinition = availableComponents[type];
                    ComponentEditPanel.open(componentDefinition, newComponent.value).then(function (value) {
                        newComponent.value = value;
                        _this.components.splice(index, 0, newComponent);
                    });
                }
                else {
                    _this.components.splice(index, 0, newComponent);
                }
                _this.clearEmptyComponents();
            };
            this.removeComponent = function (idx, addUndoState) {
                if (addUndoState === void 0) { addUndoState = true; }
                if (addUndoState) {
                    pushToHistoryStackAndRemakeState();
                }
                _this.clearEmptyComponents();
                _this.components = _this.components.filter(function (comp, i) { return i !== idx; });
                if (!_this.components.length) {
                    _this.addComponent('text', { html: '' }, 0, false);
                }
            };
            this.refreshComponent = function (component) {
                _this.refreshTriggers[_this.components.indexOf(component)] = true;
            };
            this.openComponentEditPanelIfExists = function (component) {
                var idx = _this.components.indexOf(component);
                var componentDefinition = availableComponents[component.type];
                if (componentDefinition.editPanelTemplateUrl) {
                    ComponentEditPanel.open(componentDefinition, component.value).then(function (value) {
                        _this.reportValueChanged(value, idx);
                        _this.refreshComponent(component);
                    });
                }
            };
            this.hasEditPanel = function (component) { return !!availableComponents[component.type].editPanelTemplateUrl; };
            this.sortOptions = {
                handle: '.btn-reorder',
                update: function () { return $timeout(function () {
                    pushToHistoryStackAndRemakeState();
                }, 1); },
                axis: 'y',
                items: 'li.component-list-item'
            };
            this.getComponentDefinitionName = function (comp) { return availableComponents[comp.type].name; };
        }
    };
}
angular.module('answersContentEditorInternal').directive('contentEditor', ContentEditorDirective);

},{}],54:[function(require,module,exports){
module.exports = "<ul ui-sortable=\"vm.sortOptions\" ng-model=\"vm.components\">\n\n  <li class=\"placeholder\" ng-if=\"!vm.components.length\">\n    No components added yet. Go ahead and add one!\n  <component-adder index=\"0\"></component-adder>\n  </li>\n\n  <li ng-repeat=\"component in vm.components\"\n      scroll-to-component=\"vm.justAddedIndex === $index\"\n      class=\"component-list-item\">\n    <aside class=\"control-buttons\">\n      <a class=\"btn-delete\" ng-click=\"vm.removeComponent($index)\"><i class=\"fa fa-times\"></i></a>\n      <a class=\"btn-edit\" ng-if=\"vm.hasEditPanel(component)\" ng-click=\"vm.openComponentEditPanelIfExists(component)\"><i class=\"fa fa-pencil\"></i></a>\n      <a class=\"btn-copy\" ng-click=\"vm.copyComponent(component)\"><i class=\"fa fa-files-o\"></i></a>\n      <a class=\"btn-reorder handle\"><i class=\"fa fa-bars\"></i></a>\n    </aside>\n    <template-info ng-if=\"component.template\"\n                   lang=\"{{vm.lang}}\"\n                   template-id=\"{{component.template.id}}\"\n                   template-part-index=\"{{component.template.index}}\">\n    </template-info>\n    <p class=\"component-type-title\">{{vm.getComponentDefinitionName(component)}}</p>\n    <editor-component type=\"{{component.type}}\" value=\"component.value\" index=\"{{$index}}\" refresh-trigger=\"vm.refreshTriggers[$index]\"></editor-component>\n    <component-adder index=\"{{$index+1}}\" is-paste-enabled=\"vm.isThereACopiedComponent()\"></component-adder>\n  </li>\n</ul>\n";

},{}],55:[function(require,module,exports){
module.exports = "<div class=\"component-edit-panel modal-content\">\n  <form vmsg-form ng-submit=\"$close(panel.currentValue)\">\n    <div class=\"modal-header\">\n      <h4>Edit panel - {{panel.componentName}}</h4>\n    </div>\n    <div class=\"modal-body\" ng-include=\"panel.panelBodyTemplateUrl\">\n\n    </div>\n    <div class=\"modal-footer clearfix\">\n      <div class=\"edit-panel-buttons pull-right\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        <a ng-click=\"$dismiss()\">Cancel</a>\n      </div>\n    </div>\n  </form>\n</div>\n";

},{}],56:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/14/15.
 */
'use strict';
var ComponentEditPanel = (function () {
    function ComponentEditPanel($modal, $log, ContentEditorHelper, $rootScope) {
        this.$modal = $modal;
        this.$log = $log;
        this.ContentEditorHelper = ContentEditorHelper;
        this.$rootScope = $rootScope;
    }
    ComponentEditPanel.prototype.open = function (componentDefinition, value) {
        var panelScope = this.$rootScope.$new();
        panelScope.panel = {
            panelBodyTemplateUrl: componentDefinition.editPanelTemplateUrl,
            currentValue: angular.copy(value),
            componentName: componentDefinition.name
        };
        return this.$modal.open({
            scope: panelScope,
            templateUrl: 'editor/edit-panel/component-edit-panel.modal.html',
            backdropClass: 'transparent-backdrop',
            controller: componentDefinition.editPanelController || angular.noop,
            controllerAs: 'vm'
        }).result;
    };
    return ComponentEditPanel;
})();
angular.module('answersContentEditorInternal').service('ComponentEditPanel', ComponentEditPanel);

},{}],57:[function(require,module,exports){
'use strict';
/* @ngInject */
function EditorComponent(ComponentEditorRenderer) {
    return {
        restrict: 'E',
        templateUrl: 'editor/editor-component.tpl.html',
        scope: {
            type: '@',
            index: '@',
            value: '=',
            refreshTrigger: '='
        },
        require: '^contentEditor',
        link: {
            pre: function (scope, elem, attributes, contentEditorCtrl) {
                var commitChanges = function (newValue) {
                    contentEditorCtrl.reportValueChanged(newValue, parseInt(scope.index));
                };
                var renderComponent = function () {
                    var $component = ComponentEditorRenderer.render(scope.type, angular.copy(scope.value), commitChanges, contentEditorCtrl, parseInt(scope.index), scope);
                    elem.find('.component-body').empty().append($component);
                };
                renderComponent();
                scope.$watch('refreshTrigger', function (newVal) {
                    if (newVal) {
                        renderComponent();
                        scope.refreshTrigger = false;
                    }
                });
            }
        }
    };
}
angular.module('answersContentEditorInternal').directive('editorComponent', EditorComponent);

},{}],58:[function(require,module,exports){
module.exports = "<div class=\"component-body\" data-component-type=\"{{type}}\">\n\n</div>\n";

},{}],59:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 5/19/15.
 */
'use strict';
var TemplateInfoDirective = require('./templates/template-info.drv');
var ContentEditorTemplatesProvider = require('./templates/templates.pvd');
angular.module('answersContentEditorInternal', ['contentEditorHtmlTemplates', 'answersContentCore']).directive('templateInfo', TemplateInfoDirective).provider('ContentEditorTemplates', ContentEditorTemplatesProvider);
//add module dependencies & config and run blocks in this module
//load only the internal module in tests and mock any module dependency
//the only exception to load this module in tests in to test the config & run blocks
angular.module('answersContentEditor', ['answersContentEditorInternal', 'ui.codemirror', 'ui.sortable', 'scrollToComponent', 'cfp.hotkeys', 'ui.bootstrap', 'angularFileUpload', 'angular-redactor', 'gg.vmsgs']).config(function () {
    return;
});

},{"./templates/template-info.drv":60,"./templates/templates.pvd":62}],60:[function(require,module,exports){
'use strict';
/* @ngInject */
function TemplateInfoDirective() {
    return {
        restrict: 'E',
        templateUrl: 'editor/templates/templates-info.tpl.html',
        scope: {
            lang: '@',
            templateId: '@',
            templatePartIndex: '@'
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: function (ContentEditorTemplates) {
            this.templatePart = ContentEditorTemplates.getTemplatePartById(this.templateId, parseInt(this.templatePartIndex, 10), this.lang);
        }
    };
}
module.exports = TemplateInfoDirective;

},{}],61:[function(require,module,exports){
module.exports = "<aside class=\"template-info\">\n      <strong class=\"title\" tooltip=\"{{::vm.templatePart.description}}\">{{::vm.templatePart.title}}<span class=\"fa fa-question-circle icon\"></span></strong>\n</aside>";

},{}],62:[function(require,module,exports){
'use strict';
var ContentEditorTemplatesProvider = (function () {
    function ContentEditorTemplatesProvider() {
    }
    ContentEditorTemplatesProvider.prototype.$get = function ($log) {
        var _this = this;
        return {
            getTemplate: this.getTemplate,
            getTemplatePartById: function (id, index, lang) {
                try {
                    return _this.getTemplate(id, lang).components.filter(function (comp) { return comp.index === index; })[0].templateInfo;
                }
                catch (e) {
                    $log.error('unable to get template part for ', id, index, lang);
                    return null;
                }
            }
        };
    };
    return ContentEditorTemplatesProvider;
})();
module.exports = ContentEditorTemplatesProvider;

},{}],63:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Schritt {{currentStep}} </strong> von {{totalSteps}} Schritten",
  "step-by-step.short-title" : "<strong>Schritte {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],64:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Step {{currentStep}} </strong> of {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Step {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],65:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Paso {{currentStep}}  </strong> de {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Paso {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],66:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Étape {{currentStep}} sur {{totalSteps}} </strong>",
  "step-by-step.short-title" : "<strong>Étape {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],67:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Passaggio {{currentStep}} </strong> di {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Passaggio {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],68:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>ステップ {{currentStep}} </strong>の {{totalSteps}}",
  "step-by-step.short-title" : "<strong>ステップ {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],69:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>{{currentStep}} </strong> /{{totalSteps}}단계",
  "step-by-step.short-title" : "<strong>{{currentStep}}/{{totalSteps}}단계</strong>"
}
},{}],70:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Krok {{currentStep}} </strong> z {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Krok {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],71:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Passo {{currentStep}} </strong> de {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Passo {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],72:[function(require,module,exports){
module.exports={
  "step-by-step.title" : "<strong>Шаг {{currentStep}} </strong> из {{totalSteps}}",
  "step-by-step.short-title" : "<strong>Шаг {{currentStep}}/{{totalSteps}}</strong>"
}
},{}],73:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 4/5/15.
 */
'use strict';
var stepByStepLayouts = require('./../components/step-by-step/step-by-step-layouts.val');
angular.module('answersContentEditorInternal').factory('Migrator', function ($http, ContentEditorHelper) {
    var conversionMap = {
        image: function ($node) {
            var isImage = $node.is('img') || $node.children().length === 1 && $node.find('img').length === 1;
            var $img = $node.is('img') ? $node : $node.find('img');
            if ($node.is('img')) {
                return {
                    src: $node.attr('src'),
                    align: 'left',
                    link: ''
                };
            }
            else if ($node.children().length === 1 && $node.find('img').length === 1) {
                return {
                    src: $node.find('img').attr('src'),
                    align: 'left',
                    link: ''
                };
            }
        },
        iframe: function ($node) {
            if ($node.is('iframe')) {
                var src = $node.attr('src');
                var width = parseInt($node.css('width')) || parseInt($node.attr('width')) || 500;
                var height = parseInt($node.css('height')) || parseInt($node.attr('height')) || 500;
                var scrolling = $node.attr('scrolling') || 'auto';
                if (!src.match(/youtube.com/) && !src.match(/vimeo.com/)) {
                    return {
                        url: src,
                        width: width,
                        height: height,
                        align: 'left',
                        scrolling: scrolling
                    };
                }
            }
        },
        video: function ($node) {
            if ($node.is('iframe')) {
                var width = parseInt($node.css('width')) || parseInt($node.attr('width')) || 500;
                var height = parseInt($node.css('height')) || parseInt($node.attr('height')) || 500;
                var src = $node.attr('src');
                if (src.match(/youtube.com/) || src.match(/vimeo.com/)) {
                    return {
                        url: src,
                        width: width,
                        height: height,
                        align: 'left'
                    };
                }
            }
        },
        code: function ($node) {
            //todo
        },
        anchor: function ($node) {
            if ($node.is('.kb-anchor')) {
                var text = $node.text();
                var id = $node.attr('id') || text.trim().replace(/['"#!.@\$,%\^\\&*?\(\)\[\]\-\+=:\/;\{\}~`]/ig, '').replace(/&nbsp;/g, '').replace(/\s/g, '-').substr(0, 25).toLowerCase() + (Math.random() * 200).toFixed(0);
                return {
                    text: text,
                    id: id
                };
            }
        },
        note: function ($node) {
            if ($node.is('.kb-note')) {
                return {
                    html: $node.html()
                };
            }
        },
        tip: function ($node) {
            if ($node.is('.kb-tip')) {
                return {
                    html: $node.html()
                };
            }
        },
        important: function ($node) {
            if ($node.is('.kb-important')) {
                return {
                    html: $node.html()
                };
            }
        },
        'step-by-step': function ($node) {
            if ($node.is('.step-by-step-widget')) {
                var steps = $node.children('.step').toArray().map(function (step) {
                    var $step = $(step);
                    return {
                        html: $step.find('.description').html(),
                        imageSrc: $step.find('img').attr('src')
                    };
                });
                return {
                    steps: steps,
                    layout: stepByStepLayouts[0].key,
                    allowCircular: $node.attr('data-allow-circular') === 'true'
                };
            }
        },
        table: function ($node) {
            if (!$node.is('table'))
                return;
            var headings = $node.find('tr:first').find('th, td').toArray().map(function (data) {
                return $(data).text();
            });
            var rows = $node.find('tr:gt(0)').toArray().map(function (row) {
                return $(row).find('td').toArray().map(function (data) {
                    return $(data).text();
                });
            });
            return {
                columns: headings.length,
                rows: rows.length,
                headings: headings,
                cells: rows
            };
        }
    };
    return {
        migrateOldContent: function (oldVersionedHtml) {
            var $node = $('<div class="dummy">').html(oldVersionedHtml);
            $node.find('iframe').toArray().reverse().forEach(function (node) {
                var $iframe = $(node);
                var $parent = $iframe.parent();
                if (!$parent.is('.dummy')) {
                    $iframe.detach().insertAfter($parent);
                    console.log('detaching iframe', $iframe);
                }
            });
            //unwrap step by step containers
            $node.find('.step-by-step-widget').each(function () {
                var $sbs = $(this);
                while (!$sbs.parent().is('.dummy')) {
                    $sbs.parent().replaceWith($sbs);
                }
            });
            var components = $node.children().toArray().map(function (child) {
                var $child = $(child);
                var val = $('<div>').append($child.clone()).html();
                var html = $('<div>').text(val).html();
                var result = {
                    type: 'text',
                    value: {
                        html: val
                    } //+ '<pre><code>' + html + '</code></pre>'
                };
                var found = false;
                angular.forEach(conversionMap, function (fn, type) {
                    var val = fn($child);
                    if (found) {
                        return;
                    }
                    if (val) {
                        found = true;
                        result.type = type;
                        result.value = val;
                    }
                });
                //migrate old kb-notes inside old 
                if (result.type === 'text') {
                    $node.find('.kb-note').removeClass('kb-note').addClass('note');
                    result.value.html = $('<div>').append($child.clone()).html();
                }
                return result;
            });
            return ContentEditorHelper.consolidateTextComponents(components);
        },
        contentSearch: function (term) {
            return $http.get('/support/html5/_api/kbSearch/search', {
                params: {
                    text: term,
                    lang: 'en',
                    pageSize: 10,
                    tenantId: '12345678-1234-1234-1234-1234567890ab'
                }
            }).then(function (res) { return res.data.payload.items; });
        }
    };
});

},{"./../components/step-by-step/step-by-step-layouts.val":27}],74:[function(require,module,exports){
'use strict';
angular.module('scrollToComponent', [])
.directive('scrollToComponent', function ($timeout, $parse) {
  return {
    //scope: true,   // optionally create a child scope
    link: function (scope, elem, attrs) {
      var model = $parse(attrs.scrollToComponent);
      scope.$watch(model, function (value) {
        if (value === true) {
          $timeout(function () {
            $('html, body').animate({
              scrollTop: elem.offset().top - 250
            }, 400);
            if (model.assign) {
              console.log(scope);
              model.assign(scope, false);
              console.log(scope);
            }
          });
        }
      });
    }
  };
});

},{}],75:[function(require,module,exports){
'use strict';
angular.module('answersContentEditorViewerInternal').factory('ComponentViewerRenderer', function ($compile, $http, $q, ContentEditorHelper, $rootScope, $controller, $templateCache) {
    var availableComponents = ContentEditorHelper.components;
    var getComponentTemplate = function (componentDefinition) {
        var templateUrl = componentDefinition.viewerTemplateUrl;
        if (!templateUrl) {
            return componentDefinition.viewerTemplate;
        }
        else {
            return $templateCache.get(templateUrl);
        }
    };
    return {
        render: function (type, value, parentScope) {
            var scope = $rootScope.$new(true, parentScope);
            var componentDefinition = availableComponents[type];
            var templateContents = getComponentTemplate(componentDefinition);
            if (!templateContents) {
                templateContents = componentDefinition.valueToHtml(value);
                templateContents = '<p>' + templateContents + '</p>';
            }
            if (componentDefinition.viewerPreCompileController) {
                $controller(componentDefinition.viewerPreCompileController, { $scope: scope, value: value });
            }
            var element = $compile(angular.element(templateContents))(scope);
            console.log('element', element);
            var ctrl = $controller(componentDefinition.viewerController || angular.noop, {
                $scope: scope,
                value: value,
                element: element //give the element to the controller for a directive-like feeling,
            });
            ctrl.value = value;
            //add a controllerAs-like syntax
            scope.component = ctrl;
            return element;
        }
    };
});

},{}],76:[function(require,module,exports){
'use strict';
function ContentViewerDirective(ContentEditorHelper) {
    var availableComponents = ContentEditorHelper.components;
    return {
        restrict: 'E',
        templateUrl: 'viewer/content-viewer.tpl.html',
        scope: {
            components: '='
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: function () {
            this.getComponentDefinitionName = function (comp) { return availableComponents[comp.type].name; };
        }
    };
}
module.exports = ContentViewerDirective;

},{}],77:[function(require,module,exports){
module.exports = "<ul>\n  <li ng-repeat=\"component in vm.components\"\n      class=\"component-list-item component-viewer-container\">\n    <viewer-component type=\"{{component.type}}\" value=\"component.value\"></viewer-component>\n  </li>\n</ul>\n";

},{}],78:[function(require,module,exports){
'use strict';
/* @ngInject */
function ViewerComponentDirective(ComponentViewerRenderer) {
    return {
        restrict: 'E',
        templateUrl: 'viewer/viewer-component.tpl.html',
        scope: {
            type: '@',
            index: '@',
            value: '=',
            refreshTrigger: '='
        },
        link: function (scope, elem) {
            var $component = ComponentViewerRenderer.render(scope.type, angular.copy(scope.value), scope);
            elem.find('.component-body').empty().append($component);
        }
    };
}
module.exports = ViewerComponentDirective;

},{}],79:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"dup":58}],80:[function(require,module,exports){
/**
 * Created by Gabriel_Grinberg on 5/19/15.
 */
'use strict';
var ViewerComponentDirective = require('./viewer-component.drv');
var ContentViewerDirective = require('./content-viewer.drv');
angular.module('answersContentEditorViewerInternal', ['answersContentCore', 'contentEditorHtmlTemplates']).directive('viewerComponent', ViewerComponentDirective).directive('contentViewer', ContentViewerDirective);
angular.module('answersContentEditorViewer', ['answersContentEditorViewerInternal', 'ui.codemirror']);

},{"./content-viewer.drv":76,"./viewer-component.drv":78}]},{},[2,1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJvd3NlcmlmeS1lbnRyeS1wb2ludC5qcyIsInNyYy9yZWZlcmVuY2UudHMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmxhdC9pbmRleC5qcyIsInNyYy9jb21wb25lbnRzL2FuY2hvci9hbmNob3IuY29tcC50cyIsInNyYy9jb21wb25lbnRzL2NvZGUvY29kZS1lZGl0LXBhbmVsLnRwbC5odG1sIiwic3JjL2NvbXBvbmVudHMvY29kZS9jb2RlLmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy9oZWFkaW5nL2hlYWRpbmcuY29tcC50cyIsInNyYy9jb21wb25lbnRzL2h0bWwvaHRtbC1jb21wLWVkaXQtcGFuZWwudHBsLmh0bWwiLCJzcmMvY29tcG9uZW50cy9odG1sL2h0bWwuY29tcC50cyIsInNyYy9jb21wb25lbnRzL2lmcmFtZS9pZnJhbWUtZWRpdC1wYW5lbC5odG1sIiwic3JjL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS5jb21wLnRzIiwic3JjL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UtY29tcG9uZW50LWVkaXQtcGFuZWwuaHRtbCIsInNyYy9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy9pbXBvcnRhbnQvaW1wb3J0YW50LWNvbXAtZWRpdG9yLnRwbC5odG1sIiwic3JjL2NvbXBvbmVudHMvaW1wb3J0YW50L2ltcG9ydGFudC5jb21wLnRzIiwic3JjL2NvbXBvbmVudHMvbGluZS9saW5lLmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcC50cyIsInNyYy9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtY29tcC1lZGl0b3IudHBsLmh0bWwiLCJzcmMvY29tcG9uZW50cy9zdGVwLWJ5LXN0ZXAvc3RlcC1ieS1zdGVwLWNvbXAtdmlld2VyLnRwbC5odG1sIiwic3JjL2NvbXBvbmVudHMvc3RlcC1ieS1zdGVwL3N0ZXAtYnktc3RlcC1lZGl0LWNvbnRlbnQubW9kYWwuaHRtbCIsInNyYy9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtZWRpdC1wYW5lbC50cGwuaHRtbCIsInNyYy9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtbGF5b3V0cy52YWwudHMiLCJzcmMvY29tcG9uZW50cy9zdGVwLWJ5LXN0ZXAvc3RlcC1ieS1zdGVwLmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb21wLWVkaXQtcGFuZWwuaHRtbCIsInNyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbXAtZWRpdG9yLnRwbC5odG1sIiwic3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtY29tcC12aWV3ZXIudHBsLmh0bWwiLCJzcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wLnRzIiwic3JjL2NvbXBvbmVudHMvdGV4dC90ZXh0LWNvbXAtZWRpdG9yLnRwbC5odG1sIiwic3JjL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy90aXAvdGlwLmNvbXAudHMiLCJzcmMvY29tcG9uZW50cy92aWRlby92aWRlby1lZGl0LXBhbmVsLmh0bWwiLCJzcmMvY29tcG9uZW50cy92aWRlby92aWRlby5jb21wLnRzIiwic3JjL2NvcmUvY2xpcGJvYXJkL2NvbnRlbnQtY2xpcGJvYXJkLnNydi50cyIsInNyYy9jb3JlL2NvbXBvbmVudHMtZGVjbGFyYXRpb24uY29uZmlnLnRzIiwic3JjL2NvcmUvY29udGVudC1lZGl0b3ItaGVscGVyLnRzIiwic3JjL2NvcmUvY29yZS5tZGwudHMiLCJzcmMvY29yZS9kb2N1bWVudC1wcm9jZXNzb3IudHMiLCJzcmMvY29yZS9zZGsvc2RrLnNydi50cyIsInNyYy9kaWZmZXIvY29udGVudC1kaWZmZXIuZHJ2LnRzIiwic3JjL2RpZmZlci9jb250ZW50LWRpZmZlci50cGwuaHRtbCIsInNyYy9kaWZmZXIvZGlmZmVyLm1kbC50cyIsInNyYy9kaWZmZXIvZGlmZmVyLnNydi50cyIsInNyYy9lZGl0b3IvYWRkZXIvY29tcG9uZW50LWFkZGVyLmh0bWwiLCJzcmMvZWRpdG9yL2FkZGVyL2NvbXBvbmVudC1hZGRlci5vbGQuaHRtbCIsInNyYy9lZGl0b3IvYWRkZXIvY29tcG9uZW50LWFkZGVyLnRzIiwic3JjL2VkaXRvci9jb21wb25lbnQtZWRpdG9yLXJlbmRlcmVyLnRzIiwic3JjL2VkaXRvci9jb250ZW50LWVkaXRvci5kcnYudHMiLCJzcmMvZWRpdG9yL2NvbnRlbnQtZWRpdG9yLnRwbC5odG1sIiwic3JjL2VkaXRvci9lZGl0LXBhbmVsL2NvbXBvbmVudC1lZGl0LXBhbmVsLm1vZGFsLmh0bWwiLCJzcmMvZWRpdG9yL2VkaXQtcGFuZWwvY29tcG9uZW50LWVkaXQtcGFuZWwuc3J2LnRzIiwic3JjL2VkaXRvci9lZGl0b3ItY29tcG9uZW50LmRydi50cyIsInNyYy9lZGl0b3IvZWRpdG9yLWNvbXBvbmVudC50cGwuaHRtbCIsInNyYy9lZGl0b3IvZWRpdG9yLm1kbC50cyIsInNyYy9lZGl0b3IvdGVtcGxhdGVzL3RlbXBsYXRlLWluZm8uZHJ2LnRzIiwic3JjL2VkaXRvci90ZW1wbGF0ZXMvdGVtcGxhdGVzLWluZm8udHBsLmh0bWwiLCJzcmMvZWRpdG9yL3RlbXBsYXRlcy90ZW1wbGF0ZXMucHZkLnRzIiwic3JjL2kxOG4vbWVzc2FnZXNfZGUuanNvbiIsInNyYy9pMThuL21lc3NhZ2VzX2VuLmpzb24iLCJzcmMvaTE4bi9tZXNzYWdlc19lcy5qc29uIiwic3JjL2kxOG4vbWVzc2FnZXNfZnIuanNvbiIsInNyYy9pMThuL21lc3NhZ2VzX2l0Lmpzb24iLCJzcmMvaTE4bi9tZXNzYWdlc19qYS5qc29uIiwic3JjL2kxOG4vbWVzc2FnZXNfa28uanNvbiIsInNyYy9pMThuL21lc3NhZ2VzX3BsLmpzb24iLCJzcmMvaTE4bi9tZXNzYWdlc19wdC5qc29uIiwic3JjL2kxOG4vbWVzc2FnZXNfcnUuanNvbiIsInNyYy9taWdyYXRpb24vbWlncmF0b3IudHMiLCJzcmMvbm9uLWJvd2VyLWxpYnMvc2Nyb2xsLXRvLWNvbXBvbmVudC5kcnYuanMiLCJzcmMvdmlld2VyL2NvbXBvbmVudC12aWV3ZXItcmVuZGVyZXIuc3J2LnRzIiwic3JjL3ZpZXdlci9jb250ZW50LXZpZXdlci5kcnYudHMiLCJzcmMvdmlld2VyL2NvbnRlbnQtdmlld2VyLnRwbC5odG1sIiwic3JjL3ZpZXdlci92aWV3ZXItY29tcG9uZW50LmRydi50cyIsInNyYy92aWV3ZXIvdmlld2VyLm1kbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREEscUNBQXFDO0FBRXJDLHdEQUF3RDtBQUV4RCw2Q0FBNkM7QUFDN0MsZ0VBQWdFO0FBQ2hFLGdFQUFnRTtBQUVoRSx5REFBeUQ7QUFDekQsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLDREQUE0RDtBQUM1RCxzREFBc0Q7QUFDdEQsNENBQTRDO0FBQzVDLHFEQUFxRDtBQUNyRCw4REFBOEQ7QUFDOUQsbURBQW1EO0FBQ25ELDhDQUE4QztBQUU5QywwREFBMEQ7OztBQzNCMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0NENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFFO1lBQ0wsSUFBSSxFQUFFLEdBQUc7WUFDVCxLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsY0FBYyxFQUFFLEdBQUc7U0FDcEI7UUFDRCxJQUFJLEVBQUUsVUFBVSxLQUFTLEVBQUUsSUFBSTtZQUM3QixJQUFJLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3pCLEtBQUssRUFBRSxDQUNQLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFHRCxBQUFrQyxpQkFBekIsd0JBQXdCLENBQUM7Ozs7O0FDdkJsQyxBQUdBOztHQURHO0FBQ0gsWUFBWSxDQUFDO0FBRWIsSUFBTyx3QkFBd0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3BFLElBQU8sc0JBQXNCLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztBQUNoRSxPQUFPLENBQ0osTUFBTSxDQUFDLG9DQUFvQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsNEJBQTRCLENBQUMsQ0FBQyxDQUNsRyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMsQ0FDdEQsU0FBUyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBRXRELE9BQU8sQ0FDSixNQUFNLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0Jztcbi8vIHZhciBjc3MgPSByZXF1aXJlKCcuL3N0eWxlcy9tYWluLnNjc3MnKTtcblxudmFyIGZsYXR0ZW4gPSByZXF1aXJlKCdmbGF0Jyk7XG4vL2NvbXBpbGUgc2FzcyBhbmQgcHV0IGl0IGluIHRoZSBodG1sXG4vLyBpbnNlcnRDc3MoY3NzKTtcblxuLy9wdXQgYWxsIHRlbXBsYXRlcyBpbnNpZGUgb3VyIG1vZHVsZVxudmFyIHRlbXBsYXRlcyA9IGZsYXR0ZW4oKHtcImNvbXBvbmVudHNcIjooe1wiY29kZVwiOih7XCJjb2RlLWVkaXQtcGFuZWwudHBsXCI6cmVxdWlyZShcIi4vY29tcG9uZW50cy9jb2RlL2NvZGUtZWRpdC1wYW5lbC50cGwuaHRtbFwiKX0pLFwiaHRtbFwiOih7XCJodG1sLWNvbXAtZWRpdC1wYW5lbC50cGxcIjpyZXF1aXJlKFwiLi9jb21wb25lbnRzL2h0bWwvaHRtbC1jb21wLWVkaXQtcGFuZWwudHBsLmh0bWxcIil9KSxcImlmcmFtZVwiOih7XCJpZnJhbWUtZWRpdC1wYW5lbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS1lZGl0LXBhbmVsLmh0bWxcIil9KSxcImltYWdlXCI6KHtcImltYWdlLWNvbXBvbmVudC1lZGl0LXBhbmVsXCI6cmVxdWlyZShcIi4vY29tcG9uZW50cy9pbWFnZS9pbWFnZS1jb21wb25lbnQtZWRpdC1wYW5lbC5odG1sXCIpfSksXCJpbXBvcnRhbnRcIjooe1wiaW1wb3J0YW50LWNvbXAtZWRpdG9yLnRwbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaW1wb3J0YW50L2ltcG9ydGFudC1jb21wLWVkaXRvci50cGwuaHRtbFwiKX0pLFwibm90ZVwiOih7XCJub3RlLWNvbXAtZWRpdG9yLnRwbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbm90ZS9ub3RlLWNvbXAtZWRpdG9yLnRwbC5odG1sXCIpfSksXCJzdGVwLWJ5LXN0ZXBcIjooe1wic3RlcC1ieS1zdGVwLWNvbXAtZWRpdG9yLnRwbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvc3RlcC1ieS1zdGVwL3N0ZXAtYnktc3RlcC1jb21wLWVkaXRvci50cGwuaHRtbFwiKSxcInN0ZXAtYnktc3RlcC1jb21wLXZpZXdlci50cGxcIjpyZXF1aXJlKFwiLi9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtY29tcC12aWV3ZXIudHBsLmh0bWxcIiksXCJzdGVwLWJ5LXN0ZXAtZWRpdC1jb250ZW50Lm1vZGFsXCI6cmVxdWlyZShcIi4vY29tcG9uZW50cy9zdGVwLWJ5LXN0ZXAvc3RlcC1ieS1zdGVwLWVkaXQtY29udGVudC5tb2RhbC5odG1sXCIpLFwic3RlcC1ieS1zdGVwLWVkaXQtcGFuZWwudHBsXCI6cmVxdWlyZShcIi4vY29tcG9uZW50cy9zdGVwLWJ5LXN0ZXAvc3RlcC1ieS1zdGVwLWVkaXQtcGFuZWwudHBsLmh0bWxcIil9KSxcInRhYmxlXCI6KHtcInRhYmxlLWNvbXAtZWRpdC1wYW5lbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdGFibGUvdGFibGUtY29tcC1lZGl0LXBhbmVsLmh0bWxcIiksXCJ0YWJsZS1jb21wLWVkaXRvci50cGxcIjpyZXF1aXJlKFwiLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbXAtZWRpdG9yLnRwbC5odG1sXCIpLFwidGFibGUtY29tcC12aWV3ZXIudHBsXCI6cmVxdWlyZShcIi4vY29tcG9uZW50cy90YWJsZS90YWJsZS1jb21wLXZpZXdlci50cGwuaHRtbFwiKX0pLFwidGV4dFwiOih7XCJ0ZXh0LWNvbXAtZWRpdG9yLnRwbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdGV4dC90ZXh0LWNvbXAtZWRpdG9yLnRwbC5odG1sXCIpfSksXCJ0aXBcIjooe1widGlwLWNvbXAtZWRpdG9yLnRwbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdGlwL3RpcC1jb21wLWVkaXRvci50cGwuaHRtbFwiKX0pLFwidmlkZW9cIjooe1widmlkZW8tZWRpdC1wYW5lbFwiOnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8tZWRpdC1wYW5lbC5odG1sXCIpfSl9KSxcImRpZmZlclwiOih7XCJjb250ZW50LWRpZmZlci50cGxcIjpyZXF1aXJlKFwiLi9kaWZmZXIvY29udGVudC1kaWZmZXIudHBsLmh0bWxcIil9KSxcImVkaXRvclwiOih7XCJhZGRlclwiOih7XCJjb21wb25lbnQtYWRkZXJcIjpyZXF1aXJlKFwiLi9lZGl0b3IvYWRkZXIvY29tcG9uZW50LWFkZGVyLmh0bWxcIiksXCJjb21wb25lbnQtYWRkZXIub2xkXCI6cmVxdWlyZShcIi4vZWRpdG9yL2FkZGVyL2NvbXBvbmVudC1hZGRlci5vbGQuaHRtbFwiKX0pLFwiY29udGVudC1lZGl0b3IudHBsXCI6cmVxdWlyZShcIi4vZWRpdG9yL2NvbnRlbnQtZWRpdG9yLnRwbC5odG1sXCIpLFwiZWRpdC1wYW5lbFwiOih7XCJjb21wb25lbnQtZWRpdC1wYW5lbC5tb2RhbFwiOnJlcXVpcmUoXCIuL2VkaXRvci9lZGl0LXBhbmVsL2NvbXBvbmVudC1lZGl0LXBhbmVsLm1vZGFsLmh0bWxcIil9KSxcImVkaXRvci1jb21wb25lbnQudHBsXCI6cmVxdWlyZShcIi4vZWRpdG9yL2VkaXRvci1jb21wb25lbnQudHBsLmh0bWxcIiksXCJ0ZW1wbGF0ZXNcIjooe1widGVtcGxhdGVzLWluZm8udHBsXCI6cmVxdWlyZShcIi4vZWRpdG9yL3RlbXBsYXRlcy90ZW1wbGF0ZXMtaW5mby50cGwuaHRtbFwiKX0pfSksXCJ2aWV3ZXJcIjooe1wiY29udGVudC12aWV3ZXIudHBsXCI6cmVxdWlyZShcIi4vdmlld2VyL2NvbnRlbnQtdmlld2VyLnRwbC5odG1sXCIpLFwidmlld2VyLWNvbXBvbmVudC50cGxcIjpyZXF1aXJlKFwiLi92aWV3ZXIvdmlld2VyLWNvbXBvbmVudC50cGwuaHRtbFwiKX0pfSksIHtkZWxpbWl0ZXI6ICcvJ30pO1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRlbnRFZGl0b3JIdG1sVGVtcGxhdGVzJywgW10pXG4ucnVuKGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICBPYmplY3Qua2V5cyh0ZW1wbGF0ZXMpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHRlbXBsYXRlTmFtZSkge1xuICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTmFtZSArICcuaHRtbCcsIHRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdKTtcbiAgICB9KTtcbn0pO1xuXG52YXIgdHJhbnNsYXRpb25zID0gKHtcIm1lc3NhZ2VzX2RlXCI6cmVxdWlyZShcIi4vaTE4bi9tZXNzYWdlc19kZS5qc29uXCIpLFwibWVzc2FnZXNfZW5cIjpyZXF1aXJlKFwiLi9pMThuL21lc3NhZ2VzX2VuLmpzb25cIiksXCJtZXNzYWdlc19lc1wiOnJlcXVpcmUoXCIuL2kxOG4vbWVzc2FnZXNfZXMuanNvblwiKSxcIm1lc3NhZ2VzX2ZyXCI6cmVxdWlyZShcIi4vaTE4bi9tZXNzYWdlc19mci5qc29uXCIpLFwibWVzc2FnZXNfaXRcIjpyZXF1aXJlKFwiLi9pMThuL21lc3NhZ2VzX2l0Lmpzb25cIiksXCJtZXNzYWdlc19qYVwiOnJlcXVpcmUoXCIuL2kxOG4vbWVzc2FnZXNfamEuanNvblwiKSxcIm1lc3NhZ2VzX2tvXCI6cmVxdWlyZShcIi4vaTE4bi9tZXNzYWdlc19rby5qc29uXCIpLFwibWVzc2FnZXNfcGxcIjpyZXF1aXJlKFwiLi9pMThuL21lc3NhZ2VzX3BsLmpzb25cIiksXCJtZXNzYWdlc19wdFwiOnJlcXVpcmUoXCIuL2kxOG4vbWVzc2FnZXNfcHQuanNvblwiKSxcIm1lc3NhZ2VzX3J1XCI6cmVxdWlyZShcIi4vaTE4bi9tZXNzYWdlc19ydS5qc29uXCIpfSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdjb250ZW50RWRpdG9yVHJhbnNsYXRpb25zJywgWydwYXNjYWxwcmVjaHQudHJhbnNsYXRlJ10pXG4gIC5jb25maWcoZnVuY3Rpb24gKCR0cmFuc2xhdGVQcm92aWRlcikge1xuICAgIE9iamVjdC5rZXlzKHRyYW5zbGF0aW9ucylcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh0cmFuc2xhdGlvbkZpbGVOYW1lKSB7XG4gICAgICAgIHZhciBsYW5nID0gdHJhbnNsYXRpb25GaWxlTmFtZS5yZXBsYWNlKCdtZXNzYWdlc18nLCAnJykucmVwbGFjZSgnLmpzb24nLCAnJyk7XG4gICAgICAgICR0cmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMobGFuZywgdHJhbnNsYXRpb25zW3RyYW5zbGF0aW9uRmlsZU5hbWVdKTtcbiAgICAgIH0pO1xuICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnZW4nKTtcbiAgfSk7XG5cbnJlcXVpcmUoJy4vbm9uLWJvd2VyLWxpYnMvc2Nyb2xsLXRvLWNvbXBvbmVudC5kcnYuanMnKTtcblxucmVxdWlyZSgnLi9jb3JlL2NvcmUubWRsLnRzJyk7XG5cbnJlcXVpcmUoJy4vZGlmZmVyL2RpZmZlci5tZGwudHMnKTtcblxucmVxdWlyZSgnLi92aWV3ZXIvdmlld2VyLm1kbC50cycpO1xuXG5yZXF1aXJlKCcuL3ZpZXdlci9jb21wb25lbnQtdmlld2VyLXJlbmRlcmVyLnNydi50cycpO1xuXG5yZXF1aXJlKCcuL2VkaXRvci9lZGl0b3IubWRsLnRzJyk7XG5yZXF1aXJlKCcuL2VkaXRvci9lZGl0b3ItY29tcG9uZW50LmRydi50cycpO1xucmVxdWlyZSgnLi9lZGl0b3IvZWRpdC1wYW5lbC9jb21wb25lbnQtZWRpdC1wYW5lbC5zcnYudHMnKTtcbnJlcXVpcmUoJy4vZWRpdG9yL2NvbXBvbmVudC1lZGl0b3ItcmVuZGVyZXIudHMnKTtcbnJlcXVpcmUoJy4vY29yZS9jb250ZW50LWVkaXRvci1oZWxwZXIudHMnKTtcbnJlcXVpcmUoJy4vZWRpdG9yL2NvbnRlbnQtZWRpdG9yLmRydi50cycpO1xucmVxdWlyZSgnLi9jb3JlL2RvY3VtZW50LXByb2Nlc3Nvci50cycpO1xucmVxdWlyZSgnLi9lZGl0b3IvYWRkZXIvY29tcG9uZW50LWFkZGVyLnRzJyk7XG5yZXF1aXJlKCcuL2NvcmUvY29tcG9uZW50cy1kZWNsYXJhdGlvbi5jb25maWcudHMnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy90ZXh0L3RleHQuY29tcC50cycpO1xucmVxdWlyZSgnLi9taWdyYXRpb24vbWlncmF0b3IudHMnKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0c2QvdHNkLmQudHNcIiAvPlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZWRpdG9yL2FkZGVyL2NvbXBvbmVudC1hZGRlci50c1wiIC8+XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ2aWV3ZXIvdmlld2VyLm1kbC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidmlld2VyL2NvbXBvbmVudC12aWV3ZXItcmVuZGVyZXIuc3J2LnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ2aWV3ZXIvY29tcG9uZW50LXZpZXdlci1yZW5kZXJlci5zcnYudHNcIiAvPlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy9hbmNob3IvYW5jaG9yLmNvbXAudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvY29tcG9uZW50cy1kZWNsYXJhdGlvbi5jb25maWcudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy9pZnJhbWUvaWZyYW1lLmNvbXAudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbXBvbmVudHMvdmlkZW8vdmlkZW8uY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy9saW5lL2xpbmUuY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy9jb2RlL2NvZGUuY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy90ZXh0L3RleHQuY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tcG9uZW50cy9ub3RlL25vdGUuY29tcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZWRpdG9yL2VkaXRvci1jb21wb25lbnQuZHJ2LnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJlZGl0b3IvZWRpdC1wYW5lbC9jb21wb25lbnQtZWRpdC1wYW5lbC5zcnYudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImVkaXRvci9jb21wb25lbnQtZWRpdG9yLXJlbmRlcmVyLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2NvbnRlbnQtZWRpdG9yLWhlbHBlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9zZGsvc2RrLnNydi50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZWRpdG9yL2NvbnRlbnQtZWRpdG9yLmRydi50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9lZGl0b3ItY29tcG9uZW50LWRlZmluaXRpb24uaS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kb2N1bWVudC1wcm9jZXNzb3IudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIm1pZ3JhdGlvbi9taWdyYXRvci50c1wiIC8+XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJlZGl0b3IvdGVtcGxhdGVzL3RlbXBsYXRlcy5wdmQudHNcIiAvPlxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciBrTWF4TGVuZ3RoID0gMHgzZmZmZmZmZlxudmFyIHJvb3RQYXJlbnQgPSB7fVxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKGFyZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIC8vIEF2b2lkIGdvaW5nIHRocm91Z2ggYW4gQXJndW1lbnRzQWRhcHRvclRyYW1wb2xpbmUgaW4gdGhlIGNvbW1vbiBjYXNlLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBhcmd1bWVudHNbMV0pXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnKVxuICB9XG5cbiAgdGhpcy5sZW5ndGggPSAwXG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkXG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmcm9tTnVtYmVyKHRoaXMsIGFyZylcbiAgfVxuXG4gIC8vIFNsaWdodGx5IGxlc3MgY29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoaXMsIGFyZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAndXRmOCcpXG4gIH1cblxuICAvLyBVbnVzdWFsLlxuICByZXR1cm4gZnJvbU9iamVjdCh0aGlzLCBhcmcpXG59XG5cbmZ1bmN0aW9uIGZyb21OdW1iZXIgKHRoYXQsIGxlbmd0aCkge1xuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGxlbmd0aCkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgLy8gQXNzdW1wdGlvbjogYnl0ZUxlbmd0aCgpIHJldHVybiB2YWx1ZSBpcyBhbHdheXMgPCBrTWF4TGVuZ3RoLlxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcblxuICB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iamVjdCkpIHJldHVybiBmcm9tQnVmZmVyKHRoYXQsIG9iamVjdClcblxuICBpZiAoaXNBcnJheShvYmplY3QpKSByZXR1cm4gZnJvbUFycmF5KHRoYXQsIG9iamVjdClcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbVR5cGVkQXJyYXkodGhhdCwgb2JqZWN0KVxuICB9XG5cbiAgaWYgKG9iamVjdC5sZW5ndGgpIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iamVjdClcblxuICByZXR1cm4gZnJvbUpzb25PYmplY3QodGhhdCwgb2JqZWN0KVxufVxuXG5mdW5jdGlvbiBmcm9tQnVmZmVyICh0aGF0LCBidWZmZXIpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYnVmZmVyLmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBhbGxvY2F0ZSh0aGF0LCBsZW5ndGgpXG4gIGJ1ZmZlci5jb3B5KHRoYXQsIDAsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5ICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLy8gRHVwbGljYXRlIG9mIGZyb21BcnJheSgpIHRvIGtlZXAgZnJvbUFycmF5KCkgbW9ub21vcnBoaWMuXG5mdW5jdGlvbiBmcm9tVHlwZWRBcnJheSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgLy8gVHJ1bmNhdGluZyB0aGUgZWxlbWVudHMgaXMgcHJvYmFibHkgbm90IHdoYXQgcGVvcGxlIGV4cGVjdCBmcm9tIHR5cGVkXG4gIC8vIGFycmF5cyB3aXRoIEJZVEVTX1BFUl9FTEVNRU5UID4gMSBidXQgaXQncyBjb21wYXRpYmxlIHdpdGggdGhlIGJlaGF2aW9yXG4gIC8vIG9mIHRoZSBvbGQgQnVmZmVyIGNvbnN0cnVjdG9yLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8vIERlc2VyaWFsaXplIHsgdHlwZTogJ0J1ZmZlcicsIGRhdGE6IFsxLDIsMywuLi5dIH0gaW50byBhIEJ1ZmZlciBvYmplY3QuXG4vLyBSZXR1cm5zIGEgemVyby1sZW5ndGggYnVmZmVyIGZvciBpbnB1dHMgdGhhdCBkb24ndCBjb25mb3JtIHRvIHRoZSBzcGVjLlxuZnVuY3Rpb24gZnJvbUpzb25PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICB2YXIgYXJyYXlcbiAgdmFyIGxlbmd0aCA9IDBcblxuICBpZiAob2JqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqZWN0LmRhdGEpKSB7XG4gICAgYXJyYXkgPSBvYmplY3QuZGF0YVxuICAgIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgfVxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBhbGxvY2F0ZSAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGF0Ll9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBmcm9tUG9vbCA9IGxlbmd0aCAhPT0gMCAmJiBsZW5ndGggPD0gQnVmZmVyLnBvb2xTaXplID4+PiAxXG4gIGlmIChmcm9tUG9vbCkgdGhhdC5wYXJlbnQgPSByb290UGFyZW50XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTbG93QnVmZmVyKSkgcmV0dXJuIG5ldyBTbG93QnVmZmVyKHN1YmplY3QsIGVuY29kaW5nKVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nKVxuICBkZWxldGUgYnVmLnBhcmVudFxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICB2YXIgaSA9IDBcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIGJyZWFrXG5cbiAgICArK2lcbiAgfVxuXG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2xpc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzLicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykgc3RyaW5nID0gU3RyaW5nKHN0cmluZylcblxuICBpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gc3RyaW5nLmxlbmd0aCAqIDJcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGggPj4+IDFcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgfCAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCB8IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIDBcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCkge1xuICBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIGJ5dGVPZmZzZXQgPj49IDBcblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiAtMVxuICBpZiAoYnl0ZU9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIC0xXG5cbiAgLy8gTmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBNYXRoLm1heCh0aGlzLmxlbmd0aCArIGJ5dGVPZmZzZXQsIDApXG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHJldHVybiAtMSAvLyBzcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZyBhbHdheXMgZmFpbHNcbiAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiBhcnJheUluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIHZhbCwgYnl0ZU9mZnNldClcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZih0aGlzLCBbIHZhbCBdLCBieXRlT2Zmc2V0KVxuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCkge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKHZhciBpID0gMDsgYnl0ZU9mZnNldCArIGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbYnl0ZU9mZnNldCArIGldID09PSB2YWxbZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXhdKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsLmxlbmd0aCkgcmV0dXJuIGJ5dGVPZmZzZXQgKyBmb3VuZEluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0ICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGggfCAwXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgaWYgKG5ld0J1Zi5sZW5ndGgpIG5ld0J1Zi5wYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpLCAwKVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpLCAwKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gdmFsdWUgPCAwID8gMSA6IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSB2YWx1ZSA8IDAgPyAxIDogMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRTdGFydClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gdG9BcnJheUJ1ZmZlciAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gX2F1Z21lbnQgKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IHNldCBtZXRob2QgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmluZGV4T2YgPSBCUC5pbmRleE9mXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnRMRSA9IEJQLnJlYWRVSW50TEVcbiAgYXJyLnJlYWRVSW50QkUgPSBCUC5yZWFkVUludEJFXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludExFID0gQlAucmVhZEludExFXG4gIGFyci5yZWFkSW50QkUgPSBCUC5yZWFkSW50QkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50TEUgPSBCUC53cml0ZVVJbnRMRVxuICBhcnIud3JpdGVVSW50QkUgPSBCUC53cml0ZVVJbnRCRVxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50TEUgPSBCUC53cml0ZUludExFXG4gIGFyci53cml0ZUludEJFID0gQlAud3JpdGVJbnRCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpcXC1dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuICB2YXIgaSA9IDBcblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICAgICAgY29kZVBvaW50ID0gbGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCB8IDB4MTAwMDBcbiAgICAgICAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuXG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgyMDAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXHR2YXIgUExVU19VUkxfU0FGRSA9ICctJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSF9VUkxfU0FGRSA9ICdfJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMgfHxcblx0XHQgICAgY29kZSA9PT0gUExVU19VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0ggfHxcblx0XHQgICAgY29kZSA9PT0gU0xBU0hfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCJ2YXIgZmxhdCA9IG1vZHVsZS5leHBvcnRzID0gZmxhdHRlblxuZmxhdHRlbi5mbGF0dGVuID0gZmxhdHRlblxuZmxhdHRlbi51bmZsYXR0ZW4gPSB1bmZsYXR0ZW5cblxuZnVuY3Rpb24gZmxhdHRlbih0YXJnZXQsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cblxuICB2YXIgZGVsaW1pdGVyID0gb3B0cy5kZWxpbWl0ZXIgfHwgJy4nXG4gIHZhciBtYXhEZXB0aCA9IG9wdHMubWF4RGVwdGhcbiAgdmFyIGN1cnJlbnREZXB0aCA9IDFcbiAgdmFyIG91dHB1dCA9IHt9XG5cbiAgZnVuY3Rpb24gc3RlcChvYmplY3QsIHByZXYpIHtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XVxuICAgICAgdmFyIGlzYXJyYXkgPSBvcHRzLnNhZmUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKVxuICAgICAgdmFyIGlzYnVmZmVyID0gaXNCdWZmZXIodmFsdWUpXG4gICAgICB2YXIgaXNvYmplY3QgPSAoXG4gICAgICAgIHR5cGUgPT09IFwiW29iamVjdCBPYmplY3RdXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXG4gICAgICApXG5cbiAgICAgIHZhciBuZXdLZXkgPSBwcmV2XG4gICAgICAgID8gcHJldiArIGRlbGltaXRlciArIGtleVxuICAgICAgICA6IGtleVxuXG4gICAgICBpZiAoIW9wdHMubWF4RGVwdGgpIHtcbiAgICAgICAgbWF4RGVwdGggPSBjdXJyZW50RGVwdGggKyAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzYXJyYXkgJiYgIWlzYnVmZmVyICYmIGlzb2JqZWN0ICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggJiYgY3VycmVudERlcHRoIDwgbWF4RGVwdGgpIHtcbiAgICAgICAgKytjdXJyZW50RGVwdGhcbiAgICAgICAgcmV0dXJuIHN0ZXAodmFsdWUsIG5ld0tleSlcbiAgICAgIH1cblxuICAgICAgb3V0cHV0W25ld0tleV0gPSB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBzdGVwKHRhcmdldClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIHVuZmxhdHRlbih0YXJnZXQsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cblxuICB2YXIgZGVsaW1pdGVyID0gb3B0cy5kZWxpbWl0ZXIgfHwgJy4nXG4gIHZhciBvdmVyd3JpdGUgPSBvcHRzLm92ZXJ3cml0ZSB8fCBmYWxzZVxuICB2YXIgcmVzdWx0ID0ge31cblxuICB2YXIgaXNidWZmZXIgPSBpc0J1ZmZlcih0YXJnZXQpXG4gIGlmIChpc2J1ZmZlciB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gdGFyZ2V0XG4gIH1cblxuICAvLyBzYWZlbHkgZW5zdXJlIHRoYXQgdGhlIGtleSBpc1xuICAvLyBhbiBpbnRlZ2VyLlxuICBmdW5jdGlvbiBnZXRrZXkoa2V5KSB7XG4gICAgdmFyIHBhcnNlZEtleSA9IE51bWJlcihrZXkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNOYU4ocGFyc2VkS2V5KSB8fFxuICAgICAga2V5LmluZGV4T2YoJy4nKSAhPT0gLTFcbiAgICApID8ga2V5XG4gICAgICA6IHBhcnNlZEtleVxuICB9XG5cbiAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBzcGxpdCA9IGtleS5zcGxpdChkZWxpbWl0ZXIpXG4gICAgdmFyIGtleTEgPSBnZXRrZXkoc3BsaXQuc2hpZnQoKSlcbiAgICB2YXIga2V5MiA9IGdldGtleShzcGxpdFswXSlcbiAgICB2YXIgcmVjaXBpZW50ID0gcmVzdWx0XG5cbiAgICB3aGlsZSAoa2V5MiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyZWNpcGllbnRba2V5MV0pXG4gICAgICB2YXIgaXNvYmplY3QgPSAoXG4gICAgICAgIHR5cGUgPT09IFwiW29iamVjdCBPYmplY3RdXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXG4gICAgICApXG5cbiAgICAgIGlmICgob3ZlcndyaXRlICYmICFpc29iamVjdCkgfHwgKCFvdmVyd3JpdGUgJiYgcmVjaXBpZW50W2tleTFdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHJlY2lwaWVudFtrZXkxXSA9IChcbiAgICAgICAgICB0eXBlb2Yga2V5MiA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAhb3B0cy5vYmplY3QgPyBbXSA6IHt9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjaXBpZW50ID0gcmVjaXBpZW50W2tleTFdXG4gICAgICBpZiAoc3BsaXQubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkxID0gZ2V0a2V5KHNwbGl0LnNoaWZ0KCkpXG4gICAgICAgIGtleTIgPSBnZXRrZXkoc3BsaXRbMF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5mbGF0dGVuIGFnYWluIGZvciAnbWVzc3kgb2JqZWN0cydcbiAgICByZWNpcGllbnRba2V5MV0gPSB1bmZsYXR0ZW4odGFyZ2V0W2tleV0sIG9wdHMpXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIEJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHZhbHVlKVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3JlZmVyZW5jZS50c1wiIC8+XG4vKipcbiAqIENyZWF0ZWQgYnkgR2FicmllbF9HcmluYmVyZyBvbiA0LzExLzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5pbnRlcmZhY2UgSUFuY2hvckNvbXBvbmVudFZhbHVlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jbGFzcyBBbmNob3JDb21wb25lbnREZWZpbml0aW9uIGltcGxlbWVudHMgSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248SUFuY2hvckNvbXBvbmVudFZhbHVlPiB7XG4gIGtleSA9ICdhbmNob3InO1xuICBuYW1lID0gJ0FuY2hvciBUaXRsZSc7XG4gIG1lbnVJY29uQ2xhc3MgPSAnZmEgZmEtYW5jaG9yJztcbiAgZGVmYXVsdFZhbHVlID0geyB0ZXh0OiAnJywgaWQ6ICcnIH07XG4gIHByaW9yaXR5ID0gMztcbiAgZWRpdG9yVGVtcGxhdGUgPSAnPGgyPjxpbnB1dCBjbGFzcz1cImFuY2hvci10aXRsZSBzdHJpcC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiQW5jaG9yIHRpdGxlIGdvZXMgaGVyZVwiIG5nLW1vZGVsPVwiY29tcG9uZW50LnZhbHVlLnRleHRcIiBuZy1ibHVyPVwiY29tcG9uZW50LnNhdmVDaGFuZ2VzKClcIi8+JztcblxuICBlZGl0b3JDb250cm9sbGVyID0gZnVuY3Rpb24oY29tbWl0Q2hhbmdlcywgdmFsdWUsIGVsZW1lbnQsICR0aW1lb3V0LCBjb250ZW50RWRpdG9yQ3RybCkge1xuICAgIHZhciBwcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZS5qdXN0QWRkZWQpIHtcbiAgICAgICR0aW1lb3V0KCgpID0+IGVsZW1lbnQuZmluZCgnaW5wdXQnKS5mb2N1cygpLCAxMCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFVuaXFJZCA9IGZ1bmN0aW9uIChjdXJySWQpIHtcbiAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGNvbnRlbnRFZGl0b3JDdHJsLmNvbXBvbmVudHMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gY29udGVudEVkaXRvckN0cmwuY29tcG9uZW50c1tpZHhdO1xuICAgICAgICBpZiAoY29tcG9uZW50LnR5cGUgPT09ICdhbmNob3InICYmIGNvbXBvbmVudC52YWx1ZS5pZCA9PT0gY3VycklkKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFVuaXFJZChjdXJySWQgKyBpZHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycklkO1xuICAgIH07XG5cbiAgICB0aGlzLnNhdmVDaGFuZ2VzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudmFsdWUudGV4dCAmJiAhcHJldlZhbHVlLmlkKSB7XG4gICAgICAgIHZhciBjdXJySWQgPSB0aGlzLnZhbHVlLnRleHQudHJpbSgpLnJlcGxhY2UoL1snXCIjIS5AXFwkLCVcXF5cXFxcJio/XFwoXFwpXFxbXFxdXFwtXFwrPTpcXC87XFx7XFx9fmBdL2lnLCAnJykucmVwbGFjZSgvJm5ic3A7L2csICcnKS5yZXBsYWNlKC9cXHMvZywgJy0nKS5zdWJzdHIoMCwgMjUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMudmFsdWUuaWQgPSBnZXRVbmlxSWQoY3VycklkKTtcbiAgICAgIH1cblxuICAgICAgY29tbWl0Q2hhbmdlcyh0aGlzLnZhbHVlKTtcbiAgICAgIHByZXZWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBodG1sTm9kZVRvVmFsdWUoJG5vZGU6IEpRdWVyeSkge1xuICAgIHJldHVybiB7IHRleHQ6ICRub2RlLnRleHQoKSwgaWQ6ICRub2RlLmF0dHIoJ2lkJykgfHwgJycgfTtcbiAgfVxuXG4gIHZhbHVlVG9IdG1sKHZhbHVlOiBJQW5jaG9yQ29tcG9uZW50VmFsdWUpIHtcbiAgICB2YXIgaWQgPSB2YWx1ZS5pZCB8fCAnJztcbiAgICByZXR1cm4gYDxoMiBjbGFzcz1cImFuY2hvci10aXRsZVwiIGlkPVwiJHtpZH1cIj4ke3ZhbHVlLnRleHR9PC9oMj5gO1xuICB9XG59XG5cbmV4cG9ydCA9IEFuY2hvckNvbXBvbmVudERlZmluaXRpb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxsYWJlbD5MYW5ndWFnZXM8L2xhYmVsPlxcbiAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUubGFuZ3VhZ2VcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJsYW5ndWFnZS5pZCBhcyBsYW5ndWFnZS5uYW1lIGZvciBsYW5ndWFnZSBpbiBwYW5lbC5sYW5ndWFnZXNcXFwiPlxcbiAgICA8L3NlbGVjdD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxpbmUtbnVtYmVyc1xcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLmxpbmVOdW1iZXJzXFxcIiAvPlxcbiAgICAgICAgICAgIFNob3cgbGluZSBudW1iZXJzXFxuICAgICAgICA8L2xhYmVsPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJsaW5lLXdyYXBwcGluZ1xcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLmxpbmVXcmFwcGluZ1xcXCIgLz5cXG4gICAgICAgICAgICBBbGxvdyBsaW5lIHdyYXBwaW5nXFxuICAgICAgICA8L2xhYmVsPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHYWJyaWVsX0dyaW5iZXJnIG9uIDQvMTEvMTUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29kZUNvbXBvbmVudFZhbHVlIHtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBsaW5lTnVtYmVyczogYm9vbGVhbjtcbiAgICBsaW5lV3JhcHBpbmc6IGJvb2xlYW47XG59XG5cbmNsYXNzIENvZGVDb21wb25lbnREZWZpbml0aW9uIGltcGxlbWVudHMgSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248Q29kZUNvbXBvbmVudFZhbHVlPiB7XG4gICAga2V5ID0gJ2NvZGUnO1xuICAgIG5hbWUgPSAnQ29kZSBTbmlwcGV0JztcbiAgICBtZW51SWNvbkNsYXNzID0gJ2ZhIGZhLXRlcm1pbmFsJztcbiAgICBkZWZhdWx0VmFsdWU6IENvZGVDb21wb25lbnRWYWx1ZSA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgY29kZTogJ2NvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhXCIpJyxcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICAgIGxpbmVXcmFwcGluZzogdHJ1ZVxuICAgIH07XG5cbiAgICBlZGl0b3JUZW1wbGF0ZSA9ICc8ZGl2IHVpLWNvZGVtaXJyb3IgbmctbW9kZWw9XCJjb21wb25lbnQudmFsdWUuY29kZVwiIHVpLWNvZGVtaXJyb3Itb3B0cz1cImNvZGVNaXJyb3JPcHRzXCI+PC9kaXY+JztcbiAgICBlZGl0b3JQcmVDb21waWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZhbHVlOiBDb2RlQ29tcG9uZW50VmFsdWUsICRzY29wZSwgY29tbWl0Q2hhbmdlcykge1xuICAgICAgICAkc2NvcGUuY29kZU1pcnJvck9wdHMgPSB7XG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdmFsdWUubGluZU51bWJlcnMsXG4gICAgICAgICAgICBsaW5lV3JhcHBpbmc6IHZhbHVlLmxpbmVXcmFwcGluZyxcbiAgICAgICAgICAgIG1vZGU6IHZhbHVlLmxhbmd1YWdlLFxuICAgICAgICAgICAgb25Mb2FkOiAoZWRpdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21taXRDaGFuZ2VzKCRzY29wZS5jb21wb25lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2aWV3ZXJUZW1wbGF0ZSA9ICc8ZGl2IHVpLWNvZGVtaXJyb3IgbmctbW9kZWw9XCJjb21wb25lbnQudmFsdWUuY29kZVwiIHVpLWNvZGVtaXJyb3Itb3B0cz1cImNvZGVNaXJyb3JPcHRzXCI+PC9kaXY+JztcbiAgICB2aWV3ZXJQcmVDb21waWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZhbHVlOiBDb2RlQ29tcG9uZW50VmFsdWUsICRzY29wZSkge1xuICAgICAgICAkc2NvcGUuY29kZU1pcnJvck9wdHMgPSB7XG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB2YWx1ZS5saW5lTnVtYmVycyxcbiAgICAgICAgICAgIGxpbmVXcmFwcGluZzogdmFsdWUubGluZVdyYXBwaW5nLFxuICAgICAgICAgICAgbW9kZTogdmFsdWUubGFuZ3VhZ2VcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZWRpdFBhbmVsVGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9jb2RlL2NvZGUtZWRpdC1wYW5lbC50cGwuaHRtbCc7XG5cbiAgICBlZGl0UGFuZWxDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIHZhciBwYW5lbCA9ICRzY29wZS5wYW5lbDtcbiAgICAgICAgcGFuZWwubGFuZ3VhZ2VzID0gW3sgaWQ6ICd0ZXh0JywgbmFtZTogJ1RleHQnIH0sIHsgaWQ6ICdqYXZhc2NyaXB0JywgbmFtZTogJ2phdmFzY3JpcHQnIH0sIHsgaWQ6ICdjc3MnLCBuYW1lOiAnQ1NTJyB9LCB7IGlkOiAnbWFya3VwJywgbmFtZTogJ01hcmt1cCcgfV07XG4gICAgfTtcblxuICAgIGh0bWxOb2RlVG9WYWx1ZSgkbm9kZTogSlF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYW5ndWFnZTogJG5vZGUuYXR0cignZGF0YS1sYW5ndWFnZScpLFxuICAgICAgICAgICAgbGluZU51bWJlcnM6ICEhJG5vZGUuYXR0cignZGF0YS1saW5lLW51bWJlcnMnKSxcbiAgICAgICAgICAgIGxpbmVXcmFwcGluZzogISEkbm9kZS5hdHRyKCdkYXRhLWxpbmUtd3JhcHBpbmcnKSxcbiAgICAgICAgICAgIGNvZGU6ICRub2RlLmZpbmQoJ2NvZGUnKS50ZXh0KClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWx1ZVRvSHRtbCh2YWx1ZTogQ29kZUNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvZGUtc25pcHBldFwiIGRhdGEtbGFuZ3VhZ2U9XCIke3ZhbHVlLmxhbmd1YWdlfVwiIGRhdGEtbGluZS1udW1iZXJzPVwiJHt2YWx1ZS5saW5lTnVtYmVyc31cIiBkYXRhLWxpbmUtd3JhcHBpbmc9XCIke3ZhbHVlLmxpbmVXcmFwcGluZ31cIj48cHJlPjxjb2RlPiR7dmFsdWUuY29kZX08L2NvZGU+PC9wcmU+PC9kaXY+YDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IENvZGVDb21wb25lbnREZWZpbml0aW9uO1xuIiwiY2xhc3MgSGVhZGluZ0NvbXBWYWx1ZSB7XG4gIHRleHQ6c3RyaW5nO1xufVxuY2xhc3MgSGVhZGluZ0NvbXBvbmVudERlZmluaXRpb24gaW1wbGVtZW50cyBJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxIZWFkaW5nQ29tcFZhbHVlPiB7XG4gIG5hbWUgPSAnU3ViaGVhZGluZyc7XG4gIGtleSA9ICdzdWJoZWFkaW5nJztcblxuICBtZW51SWNvbkNsYXNzID0gJ2ZhIGZhLWZvbnQnO1xuXG4gIGRlZmF1bHRWYWx1ZTpIZWFkaW5nQ29tcFZhbHVlID0ge1xuICAgIHRleHQ6ICcnXG4gIH07XG5cbiAgZWRpdG9yVGVtcGxhdGUgPSAnPGgzPjxpbnB1dCBjbGFzcz1cInN0cmlwLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTdWJoZWFkaW5nIGdvZXMgaGVyZVwiIG5nLW1vZGVsPVwiY29tcG9uZW50LnZhbHVlLnRleHRcIiBuZy1ibHVyPVwiY29tcG9uZW50LnNhdmVDaGFuZ2VzKClcIi8+PC9oMz4nO1xuICBlZGl0b3JDb250cm9sbGVyID0gZnVuY3Rpb24gKGNvbW1pdENoYW5nZXMsIHZhbHVlLCBlbGVtZW50LCAkdGltZW91dCkge1xuICAgIHRoaXMuc2F2ZUNoYW5nZXMgPSAoKSA9PiB7XG4gICAgICBjb21taXRDaGFuZ2VzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgaWYgKHZhbHVlLmp1c3RBZGRlZCkge1xuICAgICAgJHRpbWVvdXQoKCkgPT4gZWxlbWVudC5maW5kKCdpbnB1dCcpLmZvY3VzKCksIDEwKTtcbiAgICB9XG4gIH07XG5cbiAgaHRtbE5vZGVUb1ZhbHVlID0gKCRub2RlOkpRdWVyeSkgPT4ge1xuICAgIHJldHVybiB7dGV4dDogJG5vZGUudGV4dCgpfTtcbiAgfTtcblxuICB2YWx1ZVRvSHRtbCA9ICh2YWx1ZTpIZWFkaW5nQ29tcFZhbHVlKSA9PiAgYDxoMz4ke3ZhbHVlLnRleHR9PC9oMz5gO1xuXG59XG5cbmV4cG9ydCA9IEhlYWRpbmdDb21wb25lbnREZWZpbml0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWw+RW50ZXIgeW91ciBjdXN0b20gSFRNTCBoZXJlOjwvbGFiZWw+XFxuICAgIDxwIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5QbGVhc2Ugbm90ZSB0aGF0IHRoaXMgaXMgZm9yIGFkdmFuY2UgdXNhZ2VzIG9ubHkhPC9wPlxcbiAgICA8ZGl2IHVpLWNvZGVtaXJyb3IgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5odG1sXFxcIiB1aS1jb2RlbWlycm9yLW9wdHM9XFxcIntsaW5lTnVtYmVyczogdHJ1ZSwgbW9kZTogJ2h0bWxtaXhlZCd9XFxcIiB2bXNnIHJlcXVpcmVkPjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuIiwiY2xhc3MgSHRtbENvbXBvbmVudFZhbHVlIHtcbiAgaHRtbDogc3RyaW5nO1xufVxuXG5jbGFzcyBIdG1sQ29tcG9uZW50RGVmaW5pdGlvbiBpbXBsZW1lbnRzICBJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxIdG1sQ29tcG9uZW50VmFsdWU+IHtcbiAga2V5ID0gJ2h0bWwnO1xuICBuYW1lID0gJ0N1c3RvbSBIVE1MJztcblxuICBkZWZhdWx0VmFsdWUgPSB7aHRtbDogJzxwPkhUTUwgQ29kZTwvcD4nfTtcblxuICBlZGl0b3JPcGVuRWRpdFBhbmVsT25BZGQgPSB0cnVlO1xuICBlZGl0b3JUZW1wbGF0ZSA9ICc8ZGl2PjwvZGl2Pic7XG4gIGVkaXRvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoZWxlbWVudDogSlF1ZXJ5LCB2YWx1ZTogSHRtbENvbXBvbmVudFZhbHVlKSB7XG4gICAgZWxlbWVudC5odG1sKHZhbHVlLmh0bWwpO1xuICB9O1xuXG4gIGVkaXRQYW5lbFRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvaHRtbC9odG1sLWNvbXAtZWRpdC1wYW5lbC50cGwuaHRtbCc7XG5cbiAgaHRtbE5vZGVUb1ZhbHVlKCRub2RlOiBKUXVlcnkpIHtcbiAgICByZXR1cm4geyBodG1sOiAkKCc8ZGl2PicpLmFwcGVuZCgkbm9kZSkuaHRtbCgpIHx8ICcnIH07XG4gIH1cblxuICB2YWx1ZVRvSHRtbCh2YWx1ZTogSHRtbENvbXBvbmVudFZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmh0bWw7XG4gIH1cbn1cblxuZXhwb3J0ID0gSHRtbENvbXBvbmVudERlZmluaXRpb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxsYWJlbD5FbnRlciB2YWxpZCBVUkw6PC9sYWJlbD5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cXFwiIG5nLW1vZGVsPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUudXJsXFxcIiBwbGFjZWhvbGRlcj1cXFwiVVJMXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2bXNnPVxcXCJwYW5lbC52YWxpZGF0aW9uTWVzc2FnZU9wdGlvbnNcXFwiIHJlcXVpcmVkIG5nLXBhdHRlcm49XFxcInBhbmVsLnVybFBhdHRlcm5cXFwiIC8+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxsYWJlbD5XaWR0aDo8L2xhYmVsPlxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1zbVxcXCIgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS53aWR0aFxcXCIgcGxhY2Vob2xkZXI9XFxcIldpZHRoXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMjAwXFxcIiB2bXNnLz5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsPkhlaWdodDo8L2xhYmVsPlxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1zbVxcXCIgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5oZWlnaHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJoZWlnaHRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIxMDBcXFwiIHZtc2cvPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWw+QWxpZ25tZW50OjwvbGFiZWw+XFxuICAgIDxzZWxlY3QgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcImFsaWduLmlkIGFzIGFsaWduLm5hbWUgZm9yIGFsaWduIGluIFt7IGlkOiAnbGVmdCcsIG5hbWU6ICdMZWZ0JyB9LCB7IGlkOiAnY2VudGVyJywgbmFtZTogJ0NlbnRlcicgfSwgeyBpZDogJ3JpZ2h0JywgbmFtZTogJ1JpZ2h0JyB9XVxcXCI+XFxuICAgIDwvc2VsZWN0PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWw+U2hvdyBzY3JvbGwgYmFyczo8L2xhYmVsPlxcbiAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUuc2Nyb2xsaW5nXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwib3B0LmlkIGFzIG9wdC5uYW1lIGZvciBvcHQgaW4gW3sgaWQ6ICdhdXRvJywgbmFtZTogJ0F1dG9tYXRpYycgfSwgeyBpZDogJ25vJywgbmFtZTogJ05ldmVyJyB9LCB7IGlkOiAneWVzJywgbmFtZTogJ0Fsd2F5cycgfV1cXFwiPlxcbiAgICA8L3NlbGVjdD5cXG48L2Rpdj5cXG5cIjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBFbGFkX1N3aXNzYSBvbiA0LzI5LzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmNsYXNzIElmcmFtZUNvbXBWYWx1ZSB7XG4gIHVybDpzdHJpbmc7XG4gIHdpZHRoOm51bWJlcjtcbiAgaGVpZ2h0Om51bWJlcjtcbiAgYWxpZ246c3RyaW5nO1xuICBzY3JvbGxpbmc6IHN0cmluZztcbn1cblxuY2xhc3MgSWZyYW1lQ29tcG9uZW50RGVmaW5pdGlvbiBpbXBsZW1lbnRzIElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPElmcmFtZUNvbXBWYWx1ZT4ge1xuICBrZXkgPSAnaWZyYW1lJztcbiAgbmFtZSA9ICdpRnJhbWUnO1xuICBtZW51SWNvbkNsYXNzID0gJ2ZhIGZhLWNvZGUnO1xuICBkZWZhdWx0VmFsdWU6IElmcmFtZUNvbXBWYWx1ZSA9IHtcbiAgICB1cmw6ICcnLFxuICAgIHdpZHRoOiBudWxsLFxuICAgIGhlaWdodDogMzc1LFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgc2Nyb2xsaW5nOiAnYXV0bydcbiAgfTtcblxuICBlZGl0b3JUZW1wbGF0ZSA9ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjp7e2NvbXBvbmVudC52YWx1ZS5hbGlnbn19XCI+PGlmcmFtZSBzcmM9XCJ7e2NvbXBvbmVudC50cnVzdGVkSHJlZn19XCIgc2Nyb2xsaW5nPVwie3tjb21wb25lbnQudmFsdWUuc2Nyb2xsaW5nfX1cIiBzdHlsZT1cIndpZHRoOnt7Y29tcG9uZW50LnZhbHVlLndpZHRofX1weDsgaGVpZ2h0Ont7Y29tcG9uZW50LnZhbHVlLmhlaWdodH19cHhcIj48L2lmcmFtZT48L2Rpdj4nO1xuICBlZGl0b3JDb250cm9sbGVyID0gZnVuY3Rpb24gKHZhbHVlLCAkc2NlOm5nLklTQ0VTZXJ2aWNlKSB7XG4gICAgdGhpcy50cnVzdGVkSHJlZiA9ICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHZhbHVlLnVybCk7XG4gIH07XG5cbiAgZWRpdG9yT3BlbkVkaXRQYW5lbE9uQWRkID0gdHJ1ZTtcblxuICBlZGl0UGFuZWxUZW1wbGF0ZVVybCA9ICdjb21wb25lbnRzL2lmcmFtZS9pZnJhbWUtZWRpdC1wYW5lbC5odG1sJztcbiAgZWRpdFBhbmVsQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc2NvcGUsIENvbnRlbnRFZGl0b3JIZWxwZXIpIHtcbiAgICB2YXIgZm9yY2VIdHRwcyA9IENvbnRlbnRFZGl0b3JIZWxwZXIuZ2V0Q29tcG9uZW50Q29uZmlnKCdpZnJhbWUnKS5mb3JjZUh0dHBzIHx8IGZhbHNlO1xuICAgIHZhciBwYW5lbCA9ICRzY29wZS5wYW5lbDtcbiAgICB2YXIgdXJsUGF0dGVybiA9IC9eKGh0dHBzID86KT9cXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolX1xcKy5+Iz8mLy89XSopLztcbiAgICB2YXIgc2VjdXJlVXJsUGF0dGVybiA9IC9eKGh0dHBzOik/XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYihbLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKS87XG4gICAgcGFuZWwudXJsUGF0dGVybiA9IGZvcmNlSHR0cHMgPyBzZWN1cmVVcmxQYXR0ZXJuIDogdXJsUGF0dGVybjtcbiAgICBwYW5lbC52YWxpZGF0aW9uTWVzc2FnZU9wdGlvbnMgPSB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgIHBhdHRlcm46IGZvcmNlSHR0cHMgPyAnVVJMIG11c3QgYmUgdmFsaWQsIGFuZCBtdXN0IGJlIHVuZGVyIGh0dHBzOi8vIChvciB3aXRob3V0IHByb3RvY29sLCBpLmUsIC8vd2l4YW5zd2Vycy5jb20pJyA6ICdNdXN0IGJlIGEgdmFsaWQgVVJMJ1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaHRtbE5vZGVUb1ZhbHVlKCRub2RlOiBKUXVlcnkpOklmcmFtZUNvbXBWYWx1ZSB7XG4gICAgdmFyICRpZnJhbWUgPSAkbm9kZS5maW5kKCdpZnJhbWUnKTtcbiAgICB2YXIgd2lkdGggPSAoJGlmcmFtZS5jc3MoJ3dpZHRoJykuaW5kZXhPZignJScpID09PSAtMSkgPyBwYXJzZUludCgkaWZyYW1lLmNzcygnd2lkdGgnKSkgOiBudWxsO1xuICAgIHZhciBoZWlnaHQgPSAoJGlmcmFtZS5jc3MoJ2hlaWdodCcpLmluZGV4T2YoJyUnKSA9PT0gLTEpID8gcGFyc2VJbnQoJGlmcmFtZS5jc3MoJ2hlaWdodCcpKSA6IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJGlmcmFtZS5hdHRyKCdzcmMnKSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgYWxpZ246ICRub2RlLmNzcygndGV4dC1hbGlnbicpLFxuICAgICAgc2Nyb2xsaW5nOiAkaWZyYW1lLmF0dHIoJ3Njcm9sbGluZycpIHx8ICdhdXRvJ1xuICAgIH07XG4gIH1cblxuICB2YWx1ZVRvSHRtbCh2YWx1ZTogSWZyYW1lQ29tcFZhbHVlKTpzdHJpbmcge1xuICAgIHZhciB3aWR0aCA9IHZhbHVlLndpZHRoID8gdmFsdWUud2lkdGggKyAncHgnIDogJzEwMCUnO1xuICAgIHZhciBoZWlnaHQgPSB2YWx1ZS5oZWlnaHQgPyB2YWx1ZS5oZWlnaHQgKyAncHgnIDogJzEwMCUnO1xuICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246JHt2YWx1ZS5hbGlnbn1cIj48aWZyYW1lIHNyYz1cIiR7dmFsdWUudXJsfVwiIHN0eWxlPVwid2lkdGg6JHt3aWR0aH07aGVpZ2h0OiR7aGVpZ2h0fTtcIiBzY3JvbGxpbmc9XCIke3ZhbHVlLnNjcm9sbGluZ31cIi8+PC9kaXY+YDtcbiAgfVxuXG59XG5cbmV4cG9ydCA9IElmcmFtZUNvbXBvbmVudERlZmluaXRpb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjbGVhcmZpeFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0aHVtYm5haWwtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBuZy1pZj1cXFwicGFuZWwudXBsb2FkU3RhdGUgIT09IHBhbmVsLnVwbG9hZFN0YXRlcy51cGxvYWRpbmdcXFwiPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImltYWdlLXByZXZpZXcgdGh1bWJuYWlsXFxcIiBuZy1maWxlLXNlbGVjdCBuZy1maWxlLWNoYW5nZT1cXFwicGFuZWwudXBsb2FkKCRmaWxlcylcXFwiIGRyYWctb3Zlci1jbGFzcz1cXFwiZHJhZ292ZXJcXFwiIG5nLWZpbGUtZHJvcCBuZy1zcmM9XFxcInt7cGFuZWwuY3VycmVudFZhbHVlLnNyYyB8fCAnaHR0cDovL2QyZXlxaXk0bjAzdmU2LmNsb3VkZnJvbnQubmV0LzEyMzQ1Njc4LTEyMzQtMTIzNC0xMjM0LTEyMzQ1Njc4OTBhYi8yMDE1LzA0LzE0L2VlZGQ5ZmRmLTM3MGEtNDI3MC05NjBmLTg1MzM5YmMzNWNkOC5wbmcnfX1cXFwiIGFsdD1cXFwiUHJldmlld1xcXCIvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBuZy1pZj1cXFwicGFuZWwudXBsb2FkU3RhdGUgPT09IHBhbmVsLnVwbG9hZFN0YXRlcy51cGxvYWRpbmdcXFwiPlxcbiAgICAgIFVwbG9hZGluZyBpbWFnZS4uXFxuICAgICAgPHByb2dyZXNzYmFyIHZhbHVlPVxcXCJwYW5lbC51cGxvYWRQZXJjZW50YWdlXFxcIiBjbGFzcz1cXFwicHJvZ3Jlc3Mtc3RyaXBlZCBhY3RpdmVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPnt7cGFuZWwudXBsb2FkUGVyY2VudGFnZX19JTwvcHJvZ3Jlc3NiYXI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiIG5nLWZpbGUtc2VsZWN0IG5nLWZpbGUtY2hhbmdlPVxcXCJwYW5lbC51cGxvYWQoJGZpbGVzKVxcXCI+XFxuICAgICAgVXBsb2FkIG5ld1xcbiAgICA8L2E+IDxhIG5nLWNsaWNrPVxcXCJwYW5lbC5lbnRlclVybCgpXFxcIj5vciB1c2UgVVJMPC9hPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICA8bGFiZWw+QWx0IHRleHQ6PC9sYWJlbD5cXG4gIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LXNtXFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLmFsdFxcXCIgcGxhY2Vob2xkZXI9XFxcIldpbGwgYXBwZWFyIHdoZW4gYSB1c2VyIGhvdmVycyBhYm92ZSB0aGUgaW1hZ2UgYW5kIGlmIGl0IHdhcyBub3QgbG9hZGVkIGNvcnJlY3RseVxcXCIgdHlwZT1cXFwidGV4dFxcXCIvPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgPGxhYmVsPkxpbms6PC9sYWJlbD5cXG4gIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LXNtXFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLmxpbmtcXFwiIHBsYWNlaG9sZGVyPVxcXCJTaG91bGQgdGhpcyBpbWFnZSBsaW5rIHNvbWV3aGVyZT8gKG9wdGlvbmFsKVxcXCIgdHlwZT1cXFwidXJsXFxcIiB2bXNnLz5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsPkFsaWdubWVudDo8L2xhYmVsPlxcbiAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUuYWxpZ25cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJhbGlnbi5pZCBhcyBhbGlnbi5uYW1lIGZvciBhbGlnbiBpbiBbeyBpZDogJ2xlZnQnLCBuYW1lOiAnTGVmdCcgfSwgeyBpZDogJ2NlbnRlcicsIG5hbWU6ICdDZW50ZXInIH0sIHsgaWQ6ICdyaWdodCcsIG5hbWU6ICdSaWdodCcgfV1cXFwiPlxcbiAgICA8L3NlbGVjdD5cXG4gICAgPHAgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBsZWFzZSBub3RlIHRoYXQgYWxpZ25tZW50IGhhcyBubyBlZmZlY3Qgb24gaW1hZ2VzIHRoYXQgb2NjdXB5IGFsbCB3aWR0aC48L3A+XFxuPC9kaXY+XCI7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2FicmllbF9HcmluYmVyZyBvbiA0LzExLzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmNsYXNzIEltYWdlQ29tcG9uZW50VmFsdWUge1xuICBzcmM6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgYWxpZ246IHN0cmluZztcbn1cblxuY2xhc3MgSW1hZ2VDb21wb25lbnREZWZpbml0aW9uIGltcGxlbWVudHMgSUVkaXRvckNvbXBvbmVudERlZmluaXRpb24gPEltYWdlQ29tcG9uZW50VmFsdWU+IHtcbiAgbmFtZSA9ICdJbWFnZSc7XG4gIGtleSA9ICdpbWFnZSc7XG4gIG1lbnVJY29uQ2xhc3MgPSAnZmEgZmEtcGljdHVyZS1vJztcbiAgcHJpb3JpdHkgPSAyO1xuXG4gIGVkaXRvck9wZW5FZGl0UGFuZWxPbkFkZCA9IHRydWU7XG4gIGVkaXRQYW5lbFRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UtY29tcG9uZW50LWVkaXQtcGFuZWwuaHRtbCc7XG5cbiAgZGVmYXVsdFZhbHVlOiBJbWFnZUNvbXBvbmVudFZhbHVlID0ge3NyYzogJycsIGxpbms6ICcnLCBhbHQ6ICcnLCBhbGlnbjogJ2NlbnRlcid9O1xuICBlZGl0b3JUZW1wbGF0ZSA9ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjoge3tjb21wb25lbnQudmFsdWUuYWxpZ259fVwiPjxhIG5nLWRibGNsaWNrPVwiY29tcG9uZW50Lm9wZW5FZGl0UGFuZWwoKVwiPjxpbWcgYWx0PVwie3tjb21wb25lbnQudmFsdWUuYWx0fX1cIiBuZy1zcmM9XCJ7e2NvbXBvbmVudC52YWx1ZS5zcmMgIHx8IFxcJ2h0dHA6Ly9idWRhcGVzdHRpbWVzLmh1L3dwLWNvbnRlbnQvdGhlbWVzL25ld3Nyb29tMTQvaW1nL3BsYWNlaG9sZGVyLnBuZ1xcJ319XCIvPjwvYT48L2Rpdj4nO1xuXG4gIGVkaXRQYW5lbENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHdpbmRvdywgJHVwbG9hZCwgJHNjb3BlLCBDb250ZW50RWRpdG9ySGVscGVyKSB7XG4gICAgdmFyIHBhbmVsID0gJHNjb3BlLnBhbmVsO1xuICAgIHZhciB1cGxvYWRTdGF0ZXMgPSBwYW5lbC51cGxvYWRTdGF0ZXMgPSB7aWRsZTogJ2lkbGUnLCB1cGxvYWRpbmc6ICd1cGxvYWRpbmcnLCBzdWNjZXNzOiAnc3VjY2VzcycsIGVycm9yOiAnZXJyb3InfTtcbiAgICBwYW5lbC51cGxvYWRTdGF0ZSA9IHBhbmVsLnVwbG9hZFN0YXRlcy5pZGxlO1xuICAgIHBhbmVsLmVudGVyVXJsID0gKCkgPT4gcGFuZWwuY3VycmVudFZhbHVlLnNyYyA9ICR3aW5kb3cucHJvbXB0KCduZXcgdXJsJyk7XG5cbiAgICBwYW5lbC51cGxvYWQgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgIHZhciBmaWxlID0gZmlsZXMgJiYgZmlsZXNbMF07XG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICBwYW5lbC51cGxvYWRTdGF0ZSA9IHVwbG9hZFN0YXRlcy51cGxvYWRpbmc7XG4gICAgICAgICR1cGxvYWQudXBsb2FkKHtcbiAgICAgICAgICB1cmw6IENvbnRlbnRFZGl0b3JIZWxwZXIuZ2V0Q29tcG9uZW50Q29uZmlnKCdpbWFnZScpLmltYWdlVXBsb2FkVXJsLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH0pXG4gICAgICAgICAgLnByb2dyZXNzKChldnQpID0+IHBhbmVsLnVwbG9hZFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKDEwMC4wICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkpXG4gICAgICAgICAgLnN1Y2Nlc3MoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHBhbmVsLmN1cnJlbnRWYWx1ZS5zcmMgPSBkYXRhLmZpbGVsaW5rO1xuICAgICAgICAgICAgcGFuZWwudXBsb2FkU3RhdGUgPSB1cGxvYWRTdGF0ZXMuc3VjY2VzcztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lcnJvcigoKSA9PiBwYW5lbC51cGxvYWRTdGF0ZSA9IHVwbG9hZFN0YXRlcy5lcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBodG1sTm9kZVRvVmFsdWUgPSAoJG5vZGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnJG5vZGUnLCAkbm9kZSk7XG4gICAgdmFyICRpbWcgPSAkbm9kZS5pcygnaW1nJykgPyAkbm9kZSA6ICRub2RlLmZpbmQoJ2ltZycpO1xuICAgIHZhciAkY29udGFpbmVyID0gJG5vZGUuaXMoJy5pbWctY29udGFpbmVyJykgPyAkbm9kZSA6ICRub2RlLmZpbmQoJy5pbWctY29udGFpbmVyJyk7XG4gICAgdmFyICRsaW5rID0gJG5vZGUuZmluZCgnYScpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JykgfHwgJycsXG4gICAgICBsaW5rOiAkbGluay5hdHRyKCdocmVmJykgfHwgJycsXG4gICAgICBhbGlnbjogJGNvbnRhaW5lci5jc3MoJ3RleHQtYWxpZ24nKSB8fCAnbGVmdCdcbiAgICB9O1xuICB9O1xuXG4gIHZhbHVlVG9IdG1sID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIGltYWdlSHRtbCA9IGA8aW1nIHNyYz1cIiR7dmFsdWUuc3JjfVwiICR7dmFsdWUuYWx0ID8gJ2FsdD1cIicgKyB2YWx1ZS5hbHQgKyAnXCInIDogJyd9Lz5gO1xuICAgIHZhciBpbm5lckh0bWwgPSBpbWFnZUh0bWw7XG4gICAgaWYgKHZhbHVlLmxpbmspIHtcbiAgICAgIGlubmVySHRtbCA9IGA8YSBocmVmPVwiJHt2YWx1ZS5saW5rfVwiPiR7aW5uZXJIdG1sfTwvYT5gO1xuICAgIH1cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiR7dmFsdWUuYWxpZ259XCI+JHtpbm5lckh0bWx9PC9kaXY+YDtcbiAgfTtcbn1cblxuZXhwb3J0ID0gSW1hZ2VDb21wb25lbnREZWZpbml0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgcmVkYWN0b3I9XFxcInRleHRFZGl0b3JPcHRpb25zXFxcIiByZWRhY3Rvci1oaWRlLXRvb2xiYXIgY2xhc3M9XFxcInRleHQtZWRpdG9yXFxcIlxcbiAgICAgbmctbW9kZWw9XFxcImNvbXBvbmVudC52YWx1ZS5odG1sXFxcIiBjb250ZW50LWVkaXRvci1ibHVyPVxcXCJjb21wb25lbnQuc2F2ZUNoYW5nZXMoKTtcXFwiPlxcbjwvZGl2PlxcblwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBJbXBvcnRhbnRDb21wb25lbnRWYWx1ZSB7XG4gIGh0bWw6IHN0cmluZztcbn1cblxuY2xhc3MgSW1wb3J0YW50Q29tcG9uZW50RGVmaW5pdGlvbiBpbXBsZW1lbnRzIElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPEltcG9ydGFudENvbXBvbmVudFZhbHVlPiB7XG4gIGtleSA9ICdpbXBvcnRhbnQnO1xuICBuYW1lID0gJ0ltcG9ydGFudCc7XG4gIGRlZmF1bHRWYWx1ZTogSW1wb3J0YW50Q29tcG9uZW50VmFsdWUgPSB7XG4gICAgaHRtbDogJzxwPjwvcD4nXG4gIH07XG5cbiAgZWRpdG9yVGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9pbXBvcnRhbnQvaW1wb3J0YW50LWNvbXAtZWRpdG9yLnRwbC5odG1sJztcblxuICBlZGl0b3JQcmVDb21waWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgdGV4dENvbXBvbmVudE9wdGlvbnMsIHZhbHVlKSB7XG4gICAgJHNjb3BlLnRleHRFZGl0b3JPcHRpb25zID0gYW5ndWxhci5jb3B5KHRleHRDb21wb25lbnRPcHRpb25zKTtcbiAgICBpZiAodmFsdWUuanVzdEFkZGVkKSB7XG4gICAgICAkc2NvcGUudGV4dEVkaXRvck9wdGlvbnMuZm9jdXNFbmQgPSB0cnVlO1xuICAgICAgdmFsdWUuanVzdEFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGVkaXRvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAodmFsdWUsIGNvbW1pdENoYW5nZXMpIHtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzID0gKCkgPT4gY29tbWl0Q2hhbmdlcyh2YWx1ZSk7XG4gIH1cblxuICBodG1sTm9kZVRvVmFsdWUoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogJCgnPGRpdj4nKS5hcHBlbmQoJG5vZGUpLmh0bWwoKVxuICAgIH07XG4gIH1cblxuICB2YWx1ZVRvSHRtbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5odG1sO1xuICB9XG5cblxufVxuXG5leHBvcnQgPSBJbXBvcnRhbnRDb21wb25lbnREZWZpbml0aW9uO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdhYnJpZWxfR3JpbmJlcmcgb24gNC8xMS8xNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBMaW5lQ29tcFZhbHVlIHt9XG5cbmNsYXNzIExpbmVDb21wb25lbnREZWZpbml0aW9uIGltcGxlbWVudHMgSUVkaXRvckNvbXBvbmVudERlZmluaXRpb24gPExpbmVDb21wVmFsdWU+ICB7XG4gIG5hbWUgPSAnTGluZSc7XG4gIGtleSA9ICdsaW5lJztcbiAgbWVudUljb25DbGFzcyA9ICdmYSBmYS1lbGxpcHNpcy1oJztcbiAgZWRpdG9yVGVtcGxhdGUgPSAnPGhyIC8+JztcbiAgdmlld2VyVGVtcGxhdGUgPSAnPGhyIC8+JztcbiAgZGVmYXVsdFZhbHVlID0ge307XG5cbiAgdmFsdWVUb0h0bWwgPSAodmFsdWUpID0+ICc8aHIgLz4nO1xuICBodG1sTm9kZVRvVmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCA9IExpbmVDb21wb25lbnREZWZpbml0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBOb3RlQ29tcG9uZW50VmFsdWUge1xuICBodG1sOiBzdHJpbmc7XG59XG5cbmNsYXNzIE5vdGVDb21wb25lbnREZWZpbml0aW9uIGltcGxlbWVudHMgSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248Tm90ZUNvbXBvbmVudFZhbHVlPiB7XG4gIGtleSA9ICdub3RlJztcbiAgbmFtZSA9ICdOb3RlJztcbiAgZGVmYXVsdFZhbHVlOiBOb3RlQ29tcG9uZW50VmFsdWUgPSB7XG4gICAgaHRtbDogJzxwPjxzdHJvbmc+Tm90ZTo8L3N0cm9uZz4gPHNwYW4+cGxlYXNlIG5vdGUuLjwvc3Bhbj48L3A+J1xuICB9O1xuXG4gIGVkaXRvclRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvbm90ZS9ub3RlLWNvbXAtZWRpdG9yLnRwbC5odG1sJztcblxuICBlZGl0b3JQcmVDb21waWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgdGV4dENvbXBvbmVudE9wdGlvbnMsIHZhbHVlKSB7XG4gICAgJHNjb3BlLnRleHRFZGl0b3JPcHRpb25zID0gYW5ndWxhci5jb3B5KHRleHRDb21wb25lbnRPcHRpb25zKTtcbiAgICBpZiAodmFsdWUuanVzdEFkZGVkKSB7XG4gICAgICAkc2NvcGUudGV4dEVkaXRvck9wdGlvbnMuZm9jdXNFbmQgPSB0cnVlO1xuICAgICAgdmFsdWUuanVzdEFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGVkaXRvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAodmFsdWUsIGNvbW1pdENoYW5nZXMpIHtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzID0gKCkgPT4gY29tbWl0Q2hhbmdlcyh2YWx1ZSk7XG4gIH1cblxuICBodG1sTm9kZVRvVmFsdWUoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogJCgnPGRpdj4nKS5hcHBlbmQoJG5vZGUpLmh0bWwoKVxuICAgIH07XG4gIH1cblxuICB2YWx1ZVRvSHRtbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5odG1sO1xuICB9XG5cblxufVxuXG5leHBvcnQgPSBOb3RlQ29tcG9uZW50RGVmaW5pdGlvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzdGVwLWJ5LXN0ZXAtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZWRpdC1jb250cm9sc1xcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwicmVtb3ZlLXN0ZXAgdGV4dC1kYW5nZXJcXFwiIG5nLWlmPVxcXCJjb21wb25lbnQudmFsdWUuc3RlcHMubGVuZ3RoID4gMVxcXCIgbmctY2xpY2s9XFxcImNvbXBvbmVudC5yZW1vdmVTdGVwKGNvbXBvbmVudC5jdXJyZW50U3RlcClcXFwiPlJlbW92ZSBzdGVwPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFkZC1zdGVwXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50LmFkZFN0ZXAoY29tcG9uZW50LmN1cnJlbnRTdGVwKVxcXCI+K1N0ZXA8L2E+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdGVwLWJ5LXN0ZXAtbGF5b3V0LWNvbnRhaW5lclxcXCIgbmctaWY9XFxcImNvbXBvbmVudC52YWx1ZS5sYXlvdXQgPT09ICduZXdzcGFwZXInXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFycm93LWNvbnRhaW5lclxcXCIgbmctY2xpY2s9XFxcImNvbXBvbmVudC5wcmV2aW91c1N0ZXAoKVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYXJyb3cgYXJyb3ctbGVmdFxcXCIgbmctZGlzYWJsZWQ9XFxcIiFjb21wb25lbnQudmFsdWUuYWxsb3dDaXJjdWxhciAmJiBjb21wb25lbnQuY3VycmVudFN0ZXAgPT09IDBcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGVwcy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMyBuZy1iaW5kLWh0bWw9XFxcIidzdGVwLWJ5LXN0ZXAudGl0bGUnIHwgdHJhbnNsYXRlOntjdXJyZW50U3RlcDogY29tcG9uZW50LmN1cnJlbnRTdGVwICsgMSwgdG90YWxTdGVwczogY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aH1cXFwiPjwvaDM+XFxuICAgICAgICAgICAgPHNlY3Rpb24gbmctcmVwZWF0PVxcXCJzdGVwIGluIGNvbXBvbmVudC52YWx1ZS5zdGVwc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic3RlcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwie3Zpc2libGU6ICRpbmRleCA9PT0gY29tcG9uZW50LmN1cnJlbnRTdGVwfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltZy1jb250YWluZXJcXFwiIG5nLWZpbGUtc2VsZWN0IG5nLWZpbGUtY2hhbmdlPVxcXCJjb21wb25lbnQudXBsb2FkTmV3U3RlcEltYWdlKCRmaWxlcywgc3RlcClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3RlcC1pbWFnZVxcXCIgbmctc3JjPVxcXCJ7e3N0ZXAuaW1hZ2VTcmN9fVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1pZj1cXFwic3RlcC5pc1VwbG9hZGluZ0ltYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRpbmcgaW1hZ2UuLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzc2JhciB2YWx1ZT1cXFwic3RlcC5pbWFnZVVwbG9hZFByb2dyZXNzXFxcIiBjbGFzcz1cXFwicHJvZ3Jlc3Mtc3RyaXBlZCBhY3RpdmVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPnt7c3RlcC5pbWFnZVVwbG9hZFByb2dyZXNzfX0lPC9wcm9ncmVzc2Jhcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RlcC1kZXNjcmlwdGlvblxcXCIgbmctY2xpY2s9XFxcImNvbXBvbmVudC5vcGVuQ29udGVudEVkaXRNb2RhbChzdGVwKVxcXCIgbmctYmluZC1odG1sPVxcXCJjb21wb25lbnQudHJ1c3RlZEh0bWxWYWx1ZXNbJGluZGV4XVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1jb250YWluZXJcXFwiIG5nLWNsaWNrPVxcXCJjb21wb25lbnQubmV4dFN0ZXAoKVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYXJyb3cgYXJyb3ctcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCIhY29tcG9uZW50LnZhbHVlLmFsbG93Q2lyY3VsYXIgJiYgY29tcG9uZW50LmN1cnJlbnRTdGVwID09PSBjb21wb25lbnQudmFsdWUuc3RlcHMubGVuZ3RoIC0gMVxcXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1kb3RzXFxcIiBuZy1pZj1cXFwiY29tcG9uZW50LnZhbHVlLmxheW91dCA9PT0gJ2RvdHMnXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1sYXlvdXQtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJjb21wb25lbnQucHJldmlvdXNTdGVwKClcXFwiIGNsYXNzPVxcXCJhcnJvdyBhcnJvdy1sZWZ0XFxcIiBuZy1kaXNhYmxlZD1cXFwiIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gMFxcXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RlcHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gbmctcmVwZWF0PVxcXCJzdGVwIGluIGNvbXBvbmVudC52YWx1ZS5zdGVwc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInN0ZXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7dmlzaWJsZTogJGluZGV4ID09PSBjb21wb25lbnQuY3VycmVudFN0ZXB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltZy1jb250YWluZXJcXFwiIG5nLWZpbGUtc2VsZWN0IG5nLWZpbGUtY2hhbmdlPVxcXCJjb21wb25lbnQudXBsb2FkTmV3U3RlcEltYWdlKCRmaWxlcywgc3RlcClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInN0ZXAtaW1hZ2VcXFwiIG5nLXNyYz1cXFwie3tzdGVwLmltYWdlU3JjfX1cXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLWlmPVxcXCJzdGVwLmlzVXBsb2FkaW5nSW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRpbmcgaW1hZ2UuLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJvZ3Jlc3NiYXIgdmFsdWU9XFxcInN0ZXAuaW1hZ2VVcGxvYWRQcm9ncmVzc1xcXCIgY2xhc3M9XFxcInByb2dyZXNzLXN0cmlwZWQgYWN0aXZlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj57e3N0ZXAuaW1hZ2VVcGxvYWRQcm9ncmVzc319JTwvcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBuZy1iaW5kLWh0bWw9XFxcIidzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGUnIHwgdHJhbnNsYXRlOntjdXJyZW50U3RlcDogY29tcG9uZW50LmN1cnJlbnRTdGVwICsgMSwgdG90YWxTdGVwczogY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aH1cXFwiPjwvaDM+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtZGVzY3JpcHRpb25cXFwiIG5nLWNsaWNrPVxcXCJjb21wb25lbnQub3BlbkNvbnRlbnRFZGl0TW9kYWwoc3RlcClcXFwiIG5nLWJpbmQtaHRtbD1cXFwiY29tcG9uZW50LnRydXN0ZWRIdG1sVmFsdWVzWyRpbmRleF1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJjb21wb25lbnQubmV4dFN0ZXAoKVxcXCIgY2xhc3M9XFxcImFycm93IGFycm93LXJpZ2h0XFxcIiBuZy1kaXNhYmxlZD1cXFwiIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aCAtIDFcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1kb3RzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogY29tcG9uZW50LmN1cnJlbnRTdGVwID09PSAkaW5kZXh9XFxcIiBuZy1yZXBlYXQ9XFxcInN0ZXAgaW4gY29tcG9uZW50LnZhbHVlLnN0ZXBzXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50LmN1cnJlbnRTdGVwID0gJGluZGV4XFxcIj48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1sYXlvdXQtY29udGFpbmVyIHN0ZXAtYnktc3RlcC1vcmRlcmVkXFxcIiBuZy1pZj1cXFwiY29tcG9uZW50LnZhbHVlLmxheW91dCA9PT0gJ29yZGVyZWQnXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXBzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInN0ZXBcXFwiIG5nLXJlcGVhdD1cXFwic3RlcCBpbiBjb21wb25lbnQudmFsdWUuc3RlcHNcXFwiIGNsYXNzPVxcXCJzdGVwXFxcIiBuZy1jbGFzcz1cXFwie3Zpc2libGU6ICRpbmRleCA9PT0gY29tcG9uZW50LmN1cnJlbnRTdGVwfVxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS08aW1nIG5nLXNyYz1cXFwie3tzdGVwLmltYWdlU3JjfX1cXFwiPi0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLWZpbGUtc2VsZWN0IG5nLWZpbGUtY2hhbmdlPVxcXCJjb21wb25lbnQudXBsb2FkTmV3U3RlcEltYWdlKCRmaWxlcywgc3RlcClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3RlcC1pbWFnZVxcXCIgbmctc3JjPVxcXCJ7e3N0ZXAuaW1hZ2VTcmN9fVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1pZj1cXFwic3RlcC5pc1VwbG9hZGluZ0ltYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRpbmcgaW1hZ2UuLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzc2JhciB2YWx1ZT1cXFwic3RlcC5pbWFnZVVwbG9hZFByb2dyZXNzXFxcIiBjbGFzcz1cXFwicHJvZ3Jlc3Mtc3RyaXBlZCBhY3RpdmVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPnt7c3RlcC5pbWFnZVVwbG9hZFByb2dyZXNzfX0lPC9wcm9ncmVzc2Jhcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2JzLWFycm93cy1ob2xkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwic2JzLWFycm93IHNicy1hcnJvdy1wcmV2XFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50LnByZXZpb3VzU3RlcCgpXFxcIiAgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiAhY29tcG9uZW50LnZhbHVlLmFsbG93Q2lyY3VsYXIgJiYgY29tcG9uZW50LmN1cnJlbnRTdGVwID09PSAwfVxcXCI+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVxcXCInc3RlcC1ieS1zdGVwLnNob3J0LXRpdGxlJyB8IHRyYW5zbGF0ZTp7Y3VycmVudFN0ZXA6IGNvbXBvbmVudC5jdXJyZW50U3RlcCArIDEsIHRvdGFsU3RlcHM6IGNvbXBvbmVudC52YWx1ZS5zdGVwcy5sZW5ndGh9XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJzYnMtYXJyb3cgc2JzLWFycm93LW5leHRcXFwiIG5nLWNsaWNrPVxcXCJjb21wb25lbnQubmV4dFN0ZXAoKVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiAhY29tcG9uZW50LnZhbHVlLmFsbG93Q2lyY3VsYXIgJiYgY29tcG9uZW50LmN1cnJlbnRTdGVwID09PSBjb21wb25lbnQudmFsdWUuc3RlcHMubGVuZ3RoIC0gMX1cXFwiPjwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50Lm9wZW5Db250ZW50RWRpdE1vZGFsKHN0ZXApXFxcIiBuZy1iaW5kLWh0bWw9XFxcImNvbXBvbmVudC50cnVzdGVkSHRtbFZhbHVlc1skaW5kZXhdXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3RlcC1ieS1zdGVwLWNvbnRhaW5lclxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1sYXlvdXQtY29udGFpbmVyXFxcIiBuZy1pZj1cXFwiY29tcG9uZW50LnZhbHVlLmxheW91dCA9PT0gJ25ld3NwYXBlcidcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3ctY29udGFpbmVyXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50LnByZXZpb3VzU3RlcCgpXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJhcnJvdyBhcnJvdy1sZWZ0XFxcIiBuZy1kaXNhYmxlZD1cXFwiIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gMFxcXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXBzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGgzIG5nLWJpbmQtaHRtbD1cXFwiJ3N0ZXAtYnktc3RlcC50aXRsZScgfCB0cmFuc2xhdGU6e2N1cnJlbnRTdGVwOiBjb21wb25lbnQuY3VycmVudFN0ZXAgKyAxLCB0b3RhbFN0ZXBzOiBjb21wb25lbnQudmFsdWUuc3RlcHMubGVuZ3RofVxcXCI+PC9oMz5cXG4gICAgICAgICAgICA8c2VjdGlvbiBuZy1yZXBlYXQ9XFxcInN0ZXAgaW4gY29tcG9uZW50LnZhbHVlLnN0ZXBzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzdGVwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEtb3JkZXI9XFxcInt7JGluZGV4fX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgbmctY2xhc3M9XFxcInt2aXNpYmxlOiAkaW5kZXggPT09IGNvbXBvbmVudC5jdXJyZW50U3RlcH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInN0ZXAtaW1hZ2VcXFwiIG5nLXNyYz1cXFwie3tzdGVwLmltYWdlU3JjfX1cXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtZGVzY3JpcHRpb25cXFwiIG5nLWJpbmQtaHRtbD1cXFwiY29tcG9uZW50LnRydXN0ZWRIdG1sVmFsdWVzWyRpbmRleF1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3ctY29udGFpbmVyXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50Lm5leHRTdGVwKClcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImFycm93IGFycm93LXJpZ2h0XFxcIiBuZy1kaXNhYmxlZD1cXFwiIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aCAtIDFcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdGVwLWJ5LXN0ZXAtZG90c1xcXCIgbmctaWY9XFxcImNvbXBvbmVudC52YWx1ZS5sYXlvdXQgPT09ICdkb3RzJ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGVwLWJ5LXN0ZXAtbGF5b3V0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3ctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiY29tcG9uZW50LnByZXZpb3VzU3RlcCgpXFxcIiBjbGFzcz1cXFwiYXJyb3cgYXJyb3ctbGVmdFxcXCIgbmctZGlzYWJsZWQ9XFxcIiFjb21wb25lbnQudmFsdWUuYWxsb3dDaXJjdWxhciAmJiBjb21wb25lbnQuY3VycmVudFN0ZXAgPT09IDBcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXBzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIG5nLXJlcGVhdD1cXFwic3RlcCBpbiBjb21wb25lbnQudmFsdWUuc3RlcHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzdGVwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW9yZGVyPVxcXCJ7eyRpbmRleH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwie3Zpc2libGU6ICRpbmRleCA9PT0gY29tcG9uZW50LmN1cnJlbnRTdGVwfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJzdGVwLWltYWdlXFxcIiBuZy1zcmM9XFxcInt7c3RlcC5pbWFnZVNyY319XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBuZy1iaW5kLWh0bWw9XFxcIidzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGUnIHwgdHJhbnNsYXRlOntjdXJyZW50U3RlcDogY29tcG9uZW50LmN1cnJlbnRTdGVwICsgMSwgdG90YWxTdGVwczogY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aH1cXFwiPjwvaDM+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtZGVzY3JpcHRpb25cXFwiIG5nLWJpbmQtaHRtbD1cXFwiY29tcG9uZW50LnRydXN0ZWRIdG1sVmFsdWVzWyRpbmRleF1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJjb21wb25lbnQubmV4dFN0ZXAoKVxcXCIgY2xhc3M9XFxcImFycm93IGFycm93LXJpZ2h0XFxcIiBuZy1kaXNhYmxlZD1cXFwiIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aCAtIDFcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1kb3RzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogY29tcG9uZW50LmN1cnJlbnRTdGVwID09PSAkaW5kZXh9XFxcIiBuZy1yZXBlYXQ9XFxcInN0ZXAgaW4gY29tcG9uZW50LnZhbHVlLnN0ZXBzXFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50LmN1cnJlbnRTdGVwID0gJGluZGV4XFxcIj48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1sYXlvdXQtY29udGFpbmVyIHN0ZXAtYnktc3RlcC1vcmRlcmVkXFxcIiBuZy1pZj1cXFwiY29tcG9uZW50LnZhbHVlLmxheW91dCA9PT0gJ29yZGVyZWQnXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0ZXBzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInN0ZXBcXFwiIG5nLXJlcGVhdD1cXFwic3RlcCBpbiBjb21wb25lbnQudmFsdWUuc3RlcHNcXFwiIGNsYXNzPVxcXCJzdGVwXFxcIiBkYXRhLW9yZGVyPVxcXCJ7eyRpbmRleH19XFxcIiBuZy1jbGFzcz1cXFwie3Zpc2libGU6ICRpbmRleCA9PT0gY29tcG9uZW50LmN1cnJlbnRTdGVwfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7e3N0ZXAuaW1hZ2VTcmN9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNicy1hcnJvd3MtaG9sZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcInNicy1hcnJvdyBzYnMtYXJyb3ctcHJldlxcXCIgbmctY2xpY2s9XFxcImNvbXBvbmVudC5wcmV2aW91c1N0ZXAoKVxcXCIgIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gMH1cXFwiPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cXFwiJ3N0ZXAtYnktc3RlcC5zaG9ydC10aXRsZScgfCB0cmFuc2xhdGU6e2N1cnJlbnRTdGVwOiBjb21wb25lbnQuY3VycmVudFN0ZXAgKyAxLCB0b3RhbFN0ZXBzOiBjb21wb25lbnQudmFsdWUuc3RlcHMubGVuZ3RofVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwic2JzLWFycm93IHNicy1hcnJvdy1uZXh0XFxcIiBuZy1jbGljaz1cXFwiY29tcG9uZW50Lm5leHRTdGVwKClcXFwiIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogIWNvbXBvbmVudC52YWx1ZS5hbGxvd0NpcmN1bGFyICYmIGNvbXBvbmVudC5jdXJyZW50U3RlcCA9PT0gY29tcG9uZW50LnZhbHVlLnN0ZXBzLmxlbmd0aCAtIDF9XFxcIj48L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCIgbmctYmluZC1odG1sPVxcXCJjb21wb25lbnQudHJ1c3RlZEh0bWxWYWx1ZXNbJGluZGV4XVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN0ZXAtYnktc3RlcC1lZGl0LWNvbnRlbnQtbW9kYWwgbW9kYWwtY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcbiAgICAgICAgPGgzPkVkaXQgU3RlcCBDb250ZW50PC9oMz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHkgY3VzdG9tLXJlZGFjdG9yLXN0eWxlIHJlZGFjdG9yLWJvcmRlclxcXCI+XFxuICAgICAgICA8ZGl2IHJlZGFjdG9yPVxcXCJyZWRhY3Rvck9wdHNcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50SHRtbFxcXCIgcmVkYWN0b3ItaGlkZS10b29sYmFyPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIGNsZWFyZml4XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVxcXCIkZGlzbWlzcygpXFxcIj5jYW5jZWw8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcIiRjbG9zZShjdXJyZW50SHRtbClcXFwiPlNhdmU8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInN0eWxlZC1jYlxcXCIgaWQ9XFxcImFsbG93LWNpcmN1bGFyXFxcIlxcbiAgICAgICAgICAgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5hbGxvd0NpcmN1bGFyXFxcIi8+XFxuICAgIDxsYWJlbCBmb3I9XFxcImFsbG93LWNpcmN1bGFyXFxcIj5BbGxvdyBjaXJjdWxhciBicm93c2luZz88L2xhYmVsPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWw+TGF5b3V0PC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXFwibGF5b3V0LXJhZGlvLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYXlvdXQtcmFkaW9cXFwiIG5nLXJlcGVhdD1cXFwibGF5b3V0IGluIHBhbmVsLmxheW91dHNcXFwiIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJyA6IHBhbmVsLmN1cnJlbnRWYWx1ZS5sYXlvdXQgPT09IGxheW91dC5rZXl9XFxcIj5cXG4gICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3tsYXlvdXQuaW1nU3JjfX1cXFwiIG5nLWNsaWNrPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUubGF5b3V0ID0gbGF5b3V0LmtleVxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBFbGFkX1N3aXNzYSBvbiA2LzEvMTUuXG4gKi9cblxudmFyIHN0ZXBCeVN0ZXBMYXlvdXRzID0gW1xuICAgIHtcbiAgICAgICAga2V5OiAnbmV3c3BhcGVyJyxcbiAgICAgICAgaW1nU3JjOiAnLy9kMmV5cWl5NG4wM3ZlNi5jbG91ZGZyb250Lm5ldC8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkwYWIvMjAxNS8wNS8yNy9lNTllM2FkOS1iMDhkLTRlMDItOWIxMC03ZGNhNjg2ODRlZGQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdkb3RzJyxcbiAgICAgICAgaW1nU3JjOiAnLy9kMmV5cWl5NG4wM3ZlNi5jbG91ZGZyb250Lm5ldC8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkwYWIvMjAxNS8wNi8wOC9hOGUwYWI5MS03NDcwLTQ3NDktYWJhZi1hNWVjMWRhODZhNDEucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdvcmRlcmVkJyxcbiAgICAgICAgaW1nU3JjOiAnLy9kMmV5cWl5NG4wM3ZlNi5jbG91ZGZyb250Lm5ldC8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkwYWIvMjAxNS8wNS8yNy85N2RjMGUzMy1kOTMxLTQwOTQtYmQzNy1mY2M2ODliZWI5ZDYucG5nJ1xuICAgIH1cbl07XG5cbmV4cG9ydCA9IHN0ZXBCeVN0ZXBMYXlvdXRzO1xuIiwiaW1wb3J0IENvbnRlbnRFZGl0b3JTZGsgPSByZXF1aXJlKCcuLi8uLi9jb3JlL3Nkay9zZGsuc3J2Jyk7XG5jbGFzcyBTdGVwVmFsdWUge1xuICBodG1sOnN0cmluZztcbiAgaW1hZ2VTcmM6c3RyaW5nO1xufVxuXG5jbGFzcyBTdGVwQnlTdGVwVmFsdWUge1xuICBzdGVwczpTdGVwVmFsdWVbXTtcbiAgYWxsb3dDaXJjdWxhcjpib29sZWFuO1xuICBsYXlvdXQ6c3RyaW5nO1xufVxuXG5pbXBvcnQgbGF5b3V0cyAgPSByZXF1aXJlKCcuL3N0ZXAtYnktc3RlcC1sYXlvdXRzLnZhbCcpO1xuXG5jbGFzcyBTdGVwQnlTdGVwQ29tcG9uZW50RGVmaW5pdGlvbiBpbXBsZW1lbnRzIElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPFN0ZXBCeVN0ZXBWYWx1ZT4ge1xuICBuYW1lID0gJ1N0ZXAgYnkgc3RlcCc7XG4gIGtleSA9ICdzdGVwLWJ5LXN0ZXAnO1xuICBtZW51SWNvbkNsYXNzID0gJ2ZhIGZhLXN0ZXAtZm9yd2FyZCc7XG5cbiAgZGVmYXVsdFZhbHVlOiBTdGVwQnlTdGVwVmFsdWUgPSB7XG4gICAgYWxsb3dDaXJjdWxhcjogdHJ1ZSxcbiAgICBsYXlvdXQ6IGxheW91dHNbMF0ua2V5LFxuICAgIHN0ZXBzOiBbXG4gICAgICB7XG4gICAgICAgIGh0bWw6ICc8cD5TdGVwIG9uZSB0ZXh0IGdvZXMgaGVyZS4uLjwvcD4nLFxuICAgICAgICBpbWFnZVNyYzogJ2h0dHA6Ly90aGVjYXRhcGkuY29tL2FwaS9pbWFnZXMvZ2V0P2Zvcm1hdD1zcmMmdHlwZT1naWYmcmFuZD0nICsgKE1hdGgucmFuZG9tKCkgKiA5OTkpLnRvRml4ZWQoMClcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGVkaXRQYW5lbFRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvc3RlcC1ieS1zdGVwL3N0ZXAtYnktc3RlcC1lZGl0LXBhbmVsLnRwbC5odG1sJztcbiAgZWRpdFBhbmVsQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICB2YXIgcGFuZWwgPSAkc2NvcGUucGFuZWw7XG4gICAgcGFuZWwubGF5b3V0cyA9IGxheW91dHMgfHwgW107XG5cblxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9kZWQnKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSAkc2NvcGUuaW1hZ2V1cmw7XG4gIH07XG5cbiAgZWRpdG9yVGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9zdGVwLWJ5LXN0ZXAvc3RlcC1ieS1zdGVwLWNvbXAtZWRpdG9yLnRwbC5odG1sJztcbiAgZWRpdG9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY2U6IG5nLklTQ0VTZXJ2aWNlLCB2YWx1ZTogU3RlcEJ5U3RlcFZhbHVlLCBjb21taXRDaGFuZ2VzLCAkdXBsb2FkLCBDb250ZW50RWRpdG9ySGVscGVyLCAkbW9kYWwsIHRleHRDb21wb25lbnRPcHRpb25zKSB7XG4gICAgLy9pbml0IHRydXN0ZWQgaHRtbCBjb2RlXG4gICAgdmFyIHNpbmF0aXplU3RlcHNIdG1sID0gKCkgPT4ge1xuICAgICAgdGhpcy50cnVzdGVkSHRtbFZhbHVlcyA9IFtdO1xuICAgICAgdmFsdWUuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgICB0aGlzLnRydXN0ZWRIdG1sVmFsdWVzLnB1c2goJHNjZS50cnVzdEFzSHRtbChzdGVwLmh0bWwpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzaW5hdGl6ZVN0ZXBzSHRtbCgpO1xuXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG5cbiAgICB0aGlzLm5leHRTdGVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPj0gdmFsdWUuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnByZXZpb3VzU3RlcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdmFsdWUuc3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hZGRTdGVwID0gKGlkeCkgPT4ge1xuICAgICAgdmFyIG5ld1N0ZXA6IFN0ZXBWYWx1ZSA9IHtcbiAgICAgICAgaHRtbDogJ05ldyBzdGVwIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgaW1hZ2VTcmM6ICdodHRwOi8vdGhlY2F0YXBpLmNvbS9hcGkvaW1hZ2VzL2dldD9mb3JtYXQ9c3JjJnR5cGU9Z2lmJnJhbmQ9JyArIChNYXRoLnJhbmRvbSgpICogOTk5KS50b0ZpeGVkKDApXG4gICAgICB9O1xuICAgICAgdmFsdWUuc3RlcHMuc3BsaWNlKGlkeCArIDEsIDAsIG5ld1N0ZXApO1xuICAgICAgdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgY29tbWl0Q2hhbmdlcyh2YWx1ZSk7XG4gICAgICBzaW5hdGl6ZVN0ZXBzSHRtbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZVN0ZXAgPSAoaWR4KSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzU3RlcCgpO1xuICAgICAgdmFsdWUuc3RlcHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICBjb21taXRDaGFuZ2VzKHZhbHVlKTtcbiAgICAgIHNpbmF0aXplU3RlcHNIdG1sKCk7XG4gICAgfTtcblxuICAgIHRoaXMudXBsb2FkTmV3U3RlcEltYWdlID0gKCRmaWxlcywgc3RlcCkgPT4ge1xuICAgICAgaWYgKCRmaWxlcyAmJiAkZmlsZXNbMF0pIHtcbiAgICAgICAgdmFyIGZpbGUgPSAkZmlsZXNbMF07XG4gICAgICAgIHN0ZXAuaXNVcGxvYWRpbmdJbWFnZSA9IHRydWU7XG4gICAgICAgICR1cGxvYWRcbiAgICAgICAgICAudXBsb2FkKHtcbiAgICAgICAgICAgIHVybDogQ29udGVudEVkaXRvckhlbHBlci5nZXRDb21wb25lbnRDb25maWcoJ2ltYWdlJykuaW1hZ2VVcGxvYWRVcmwsXG4gICAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucHJvZ3Jlc3MoZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgc3RlcC5pbWFnZVVwbG9hZFByb2dyZXNzID0gKDEwMC4wICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkudG9GaXhlZCgwKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWNjZXNzKChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgc3RlcC5pbWFnZVNyYyA9IGRhdGEuZmlsZWxpbms7XG4gICAgICAgICAgICBzdGVwLmlzVXBsb2FkaW5nSW1hZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbW1pdENoYW5nZXModmFsdWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHN0ZXAuaXNVcGxvYWRpbmdJbWFnZSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wZW5Db250ZW50RWRpdE1vZGFsID0gKHN0ZXApID0+IHtcbiAgICAgICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtZWRpdC1jb250ZW50Lm1vZGFsLmh0bWwnLFxuICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXG4gICAgICAgIGJhY2tkcm9wQ2xhc3M6ICd0cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICAgICRzY29wZS5jdXJyZW50SHRtbCA9IHN0ZXAuaHRtbDtcbiAgICAgICAgICAkc2NvcGUucmVkYWN0b3JPcHRzID0gYW5ndWxhci5leHRlbmQoe30sIHRleHRDb21wb25lbnRPcHRpb25zLCB7IGhlaWdodDogMzAwIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAucmVzdWx0XG4gICAgICAgIC50aGVuKChuZXdIdG1sKSA9PiB7XG4gICAgICAgICAgc3RlcC5odG1sID0gbmV3SHRtbDtcbiAgICAgICAgICBjb21taXRDaGFuZ2VzKHZhbHVlKTtcbiAgICAgICAgICBzaW5hdGl6ZVN0ZXBzSHRtbCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZpZXdlclRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvc3RlcC1ieS1zdGVwL3N0ZXAtYnktc3RlcC1jb21wLXZpZXdlci50cGwuaHRtbCc7XG4gIHZpZXdlckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjZTogbmcuSVNDRVNlcnZpY2UsIHZhbHVlOiBTdGVwQnlTdGVwVmFsdWUsICRzY29wZSwgQ29udGVudEVkaXRvclNkazogQ29udGVudEVkaXRvclNkaykge1xuICAgIC8vaW5pdCB0cnVzdGVkIGh0bWwgY29kZVxuICAgIHZhciBzaW5hdGl6ZVN0ZXBzSHRtbCA9ICgpID0+IHtcbiAgICAgIHRoaXMudHJ1c3RlZEh0bWxWYWx1ZXMgPSBbXTtcbiAgICAgIHZhbHVlLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgICAgdGhpcy50cnVzdGVkSHRtbFZhbHVlcy5wdXNoKCRzY2UudHJ1c3RBc0h0bWwoc3RlcC5odG1sKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2luYXRpemVTdGVwc0h0bWwoKTtcblxuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuXG4gICAgdGhpcy5uZXh0U3RlcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHZhbHVlLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLiR3YXRjaCgnY29tcG9uZW50LmN1cnJlbnRTdGVwJywgZnVuY3Rpb24obmV3U3RlcCwgb2xkU3RlcCkge1xuICAgICAgaWYgKG9sZFN0ZXAgIT09IG5ld1N0ZXApIHtcbiAgICAgICAgQ29udGVudEVkaXRvclNkay50cmlnZ2VyRXZlbnQoQ29udGVudEVkaXRvclNkay5ldmVudHMuc3RlcEJ5U3RlcC5zdGVwQ2hhbmdlZCwge1xuICAgICAgICAgIHByZXZpb3VzU3RlcDogb2xkU3RlcCxcbiAgICAgICAgICBjdXJyZW50U3RlcDogbmV3U3RlcCxcbiAgICAgICAgICB0b3RhbFN0ZXBzOiB2YWx1ZS5zdGVwcy5sZW5ndGhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnByZXZpb3VzU3RlcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdmFsdWUuc3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGh0bWxOb2RlVG9WYWx1ZSA9ICgkbm9kZTogSlF1ZXJ5KTogU3RlcEJ5U3RlcFZhbHVlID0+IHtcbiAgICB2YXIgc3RlcHM6IFN0ZXBWYWx1ZVtdID1cbiAgICAgICRub2RlLmZpbmQoJy5zdGVwJylcbiAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICAgICAgdmFyICRzdGVwID0gJChzdGVwKTtcbiAgICAgICAgICB2YXIgJGltZyA9ICRzdGVwLmZpbmQoJy5zdGVwLWltYWdlJyk7XG4gICAgICAgICAgdmFyICRkZXNjID0gJHN0ZXAuZmluZCgnLnN0ZXAtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHRtbDogJGRlc2MuaHRtbCgpLFxuICAgICAgICAgICAgaW1hZ2VTcmM6ICRpbWcuYXR0cignc3JjJylcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0OiAkbm9kZS5hdHRyKCdkYXRhLWxheW91dCcpIHx8IGxheW91dHNbMF0ua2V5LFxuICAgICAgYWxsb3dDaXJjdWxhcjogJG5vZGUuYXR0cignZGF0YS1hbGxvdy1jaXJjdWxhcicpID09PSAndHJ1ZScsXG4gICAgICBzdGVwczogc3RlcHNcbiAgICB9O1xuICB9O1xuXG4gIHZhbHVlVG9IdG1sID0gKHN0ZXBzVmFsdWU6IFN0ZXBCeVN0ZXBWYWx1ZSkgID0+IHtcbiAgICB2YXIgc3RlcHMgPSBzdGVwc1ZhbHVlLnN0ZXBzO1xuICAgIHZhciBzdGVwc0h0bWwgPSBzdGVwcy5tYXAoKHN0ZXApID0+IHtcbiAgICAgIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJzdGVwXCI+PGltZyBjbGFzcz1cInN0ZXAtaW1hZ2VcIiBzcmM9XCIke3N0ZXAuaW1hZ2VTcmN9XCIgLz48ZGl2IGNsYXNzPVwic3RlcC1kZXNjcmlwdGlvblwiPiR7c3RlcC5odG1sfTwvZGl2Pjwvc2VjdGlvbj5gO1xuICAgIH0pLmpvaW4oJycpO1xuXG4gICAgc3RlcHNWYWx1ZS5sYXlvdXQgPSBzdGVwc1ZhbHVlLmxheW91dCB8fCAnbmV3c3BhcGVyJztcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzdGVwLWJ5LXN0ZXAtY29udGFpbmVyXCIgZGF0YS1sYXlvdXQ9XCIke3N0ZXBzVmFsdWUubGF5b3V0fVwiIGRhdGEtYWxsb3ctY2lyY3VsYXI9XCIke3N0ZXBzVmFsdWUuYWxsb3dDaXJjdWxhcn1cIj4ke3N0ZXBzSHRtbH08L2Rpdj5gO1xuICB9O1xufVxuXG5leHBvcnQgPSBTdGVwQnlTdGVwQ29tcG9uZW50RGVmaW5pdGlvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbWQtNlxcXCI+XFxuICA8bGFiZWw+Um93czwvbGFiZWw+XFxuICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiByZXF1aXJlZCBtaW49XFxcIjFcXFwiIG1heD1cXFwiNDBcXFwiIHZzbWcgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5yb3dzXFxcIi8+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcbiAgPGxhYmVsPkNvbHVtbnM8L2xhYmVsPlxcbiAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgdm1zZyBtaW49XFxcIjFcXFwiIG1heD1cXFwiMTBcXFwiIHJlcXVpcmVkIG5nLW1vZGVsPVxcXCJwYW5lbC5jdXJyZW50VmFsdWUuY29sdW1uc1xcXCIvPlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoIG5nLXJlcGVhdD1cXFwiY29sIGluIGNvbXBvbmVudC5jb2xzUmVwZWF0ZXJcXFwiPjxpbnB1dCBjbGFzcz1cXFwic3RyaXAtaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBoZWFkaW5nLi5cXFwiIG5nLW1vZGVsPVxcXCJjb21wb25lbnQudmFsdWUuaGVhZGluZ3NbY29sXVxcXCIgbmctY2hhbmdlPVxcXCJjb21wb25lbnQuc2F2ZUNoYW5nZXMoKVxcXCIvPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVxcXCJyb3cgaW4gY29tcG9uZW50LnJvd3NSZXBlYXRlclxcXCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiY29sIGluIGNvbXBvbmVudC5jb2xzUmVwZWF0ZXJcXFwiPlxcbiAgICAgICAgPGRpdiByZWRhY3Rvcj1cXFwidGV4dEVkaXRvck9wdGlvbnNcXFwiIG5nLW1vZGVsPVxcXCJjb21wb25lbnQudmFsdWUuY2VsbHNbcm93XVtjb2xdXFxcIiBjb250ZW50LWVkaXRvci1ibHVyPVxcXCJjb21wb25lbnQuc2F2ZUNoYW5nZXMoKVxcXCIgcmVkYWN0b3ItaGlkZS10b29sYmFyID48L2Rpdj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0YWJsZT5cXG4gIDx0aGVhZD5cXG4gICAgPHRyPlxcbiAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImNvbCBpbiBjb21wb25lbnQuY29sc1JlcGVhdGVyXFxcIj57e2NvbXBvbmVudC52YWx1ZS5oZWFkaW5nc1tjb2xdfX08L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cXFwicm93IGluIGNvbXBvbmVudC5yb3dzUmVwZWF0ZXJcXFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImNvbCBpbiBjb21wb25lbnQuY29sc1JlcGVhdGVyXFxcIj5cXG4gICAgICAgIDxkaXYgbmctbW9kZWw9XFxcImNvbXBvbmVudC52YWx1ZS5jZWxsc1tyb3ddW2NvbF1cXFwiPjwvZGl2PlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XCI7XG4iLCJjbGFzcyBUYWJsZUNvbXBWYWx1ZSB7XG4gIGNvbHVtbnM6IG51bWJlcjtcbiAgcm93czogbnVtYmVyO1xuICBoZWFkaW5nczogc3RyaW5nW107XG4gIGNlbGxzOiBzdHJpbmdbXVtdO1xufVxuXG5jbGFzcyBUYWJsZUNvbXBvbmVudERlZmluaXRpb24gaW1wbGVtZW50cyBJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxUYWJsZUNvbXBWYWx1ZT4ge1xuICBuYW1lID0gJ1RhYmxlJztcbiAga2V5ID0gJ3RhYmxlJztcbiAgbWVudUljb25DbGFzcyA9ICdmYSBmYS10aC1saXN0JztcbiAgZGVmYXVsdFZhbHVlOiBUYWJsZUNvbXBWYWx1ZSA9IHtcbiAgICBjb2x1bW5zOiAyLFxuICAgIHJvd3M6IDMsXG4gICAgaGVhZGluZ3M6IFsnJywgJyddLFxuICAgIGNlbGxzOiBbWycnLCAnJ10sIFsnJywgJyddLCBbJycsICcnXV1cbiAgfTtcblxuICBlZGl0b3JPcGVuRWRpdFBhbmVsT25BZGQgPSB0cnVlO1xuXG4gIGVkaXRvclRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvdGFibGUvdGFibGUtY29tcC1lZGl0b3IudHBsLmh0bWwnO1xuICBlZGl0b3JQcmVDb21waWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc2NvcGUsIHRleHRDb21wb25lbnRPcHRpb25zKSB7XG4gICAgJHNjb3BlLnRleHRFZGl0b3JPcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIHRleHRDb21wb25lbnRPcHRpb25zLCB7IHRvb2xiYXJGaXhlZDogZmFsc2UgfSk7XG4gIH07XG4gIGVkaXRvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCB2YWx1ZSwgY29tbWl0Q2hhbmdlcykge1xuICAgIHRoaXMucm93c1JlcGVhdGVyID0gQXJyYXkodmFsdWUucm93cykuam9pbignMCcpLnNwbGl0KCcwJykubWFwKE51bWJlci5jYWxsLCBOdW1iZXIpOyAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY4MjQ4NTMvd2F5LXRvLW5nLXJlcGVhdC1kZWZpbmVkLW51bWJlci1vZi10aW1lcy1pbnN0ZWFkLW9mLXJlcGVhdGluZy1vdmVyLWFycmF5XG4gICAgdGhpcy5jb2xzUmVwZWF0ZXIgPSBBcnJheSh2YWx1ZS5jb2x1bW5zKS5qb2luKCcwJykuc3BsaXQoJzAnKS5tYXAoTnVtYmVyLmNhbGwsIE51bWJlcik7XG5cbiAgICB0aGlzLnNhdmVDaGFuZ2VzID0gKCkgPT4gY29tbWl0Q2hhbmdlcyh2YWx1ZSk7XG4gIH07XG5cbiAgZWRpdFBhbmVsVGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy90YWJsZS90YWJsZS1jb21wLWVkaXQtcGFuZWwuaHRtbCc7XG5cbiAgaHRtbE5vZGVUb1ZhbHVlID0gKCRub2RlOiBKUXVlcnkpOiBUYWJsZUNvbXBWYWx1ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3M6ICRub2RlLmZpbmQoJ3Rib2R5IHRyJykubGVuZ3RoLFxuICAgICAgY29sdW1uczogJG5vZGUuZmluZCgndGgnKS5sZW5ndGgsXG4gICAgICBoZWFkaW5nczogJG5vZGUuZmluZCgndGgnKS50b0FycmF5KCkubWFwKChlbG0pID0+IHtcbiAgICAgICAgcmV0dXJuICQoZWxtKS50ZXh0KCk7XG4gICAgICAgIH0pLFxuICAgICAgY2VsbHM6ICRub2RlXG4gICAgICAuZmluZCgndGJvZHkgdHInKVxuICAgICAgLnRvQXJyYXkoKVxuICAgICAgLm1hcCgoZWxtKSA9PiAkKGVsbSkuZmluZCgndGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxtKSA9PiAkKGVsbSkuaHRtbCgpKSlcbiAgICB9XG4gIH07XG5cbiAgdmFsdWVUb0h0bWwgPSAodmFsdWU6IFRhYmxlQ29tcFZhbHVlKTogc3RyaW5nID0+IHtcbiAgICB2YXIgaGVhZENvbnRlbnQgPSAnJywgYm9keUNvbnRlbnQgPSAnJztcblxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHZhbHVlLmNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICBoZWFkQ29udGVudCArPSBgPHRoPiR7dmFsdWUuaGVhZGluZ3NbY29sXX08L3RoPmA7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgdmFsdWUucm93czsgcm93KyspIHtcbiAgICAgIGJvZHlDb250ZW50ICs9ICc8dHI+JztcbiAgICAgIGZvciAoY29sID0gMDsgY29sIDwgdmFsdWUuY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgYm9keUNvbnRlbnQgKz0gYDx0ZD4ke3ZhbHVlLmNlbGxzW3Jvd10gJiYgdmFsdWUuY2VsbHNbcm93XVtjb2xdID8gdmFsdWUuY2VsbHNbcm93XVtjb2xdIDogJyd9PC90ZD5gO1xuICAgICAgfVxuICAgICAgYm9keUNvbnRlbnQgKz0gJzwvdHI+JztcbiAgICB9XG5cbiAgICByZXR1cm4gYDx0YWJsZT48dGhlYWQ+PHRyPiR7aGVhZENvbnRlbnR9PC90cj48dGJvZHk+JHtib2R5Q29udGVudH08L3Rib2R5PjwvdGFibGU+YDtcbiAgfVxuXG59XG5cbmV4cG9ydCA9IFRhYmxlQ29tcG9uZW50RGVmaW5pdGlvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIgICAgPGRpdiByZWRhY3Rvcj1cXFwidGV4dEVkaXRvck9wdGlvbnNcXFwiIHJlZGFjdG9yLWhpZGUtdG9vbGJhciBjbGFzcz1cXFwidGV4dC1lZGl0b3JcXFwiXFxuICAgICAgICAgbmctbW9kZWw9XFxcImNvbXBvbmVudC52YWx1ZS5odG1sXFxcIiBjb250ZW50LWVkaXRvci1ibHVyPVxcXCJjb21wb25lbnQuc2F2ZUNoYW5nZXMoKTtcXFwiPlxcbiAgICA8L2Rpdj5cIjtcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3JlZmVyZW5jZS50c1wiLz5cbi8qKlxuICogQ3JlYXRlZCBieSBHYWJyaWVsX0dyaW5iZXJnIG9uIDQvMTEvMTUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2Fuc3dlcnNDb250ZW50Q29yZScpXG4gIC5mYWN0b3J5KCd0ZXh0Q29tcG9uZW50T3B0aW9ucycsIGZ1bmN0aW9uIChDb250ZW50RWRpdG9ySGVscGVyKSB7XG4gICAgdmFyIGV4dGVybmFsQ29uZmlndXJhdGlvbk9wdGlvbnMgPSBDb250ZW50RWRpdG9ySGVscGVyLmdldENvbXBvbmVudENvbmZpZygndGV4dCcpIHx8IHt9O1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGl0YWxpY3M6IGZhbHNlLFxuICAgICAgdW5kZXJsaW5lOiB0cnVlLFxuICAgICAgYnV0dG9uU291cmNlOiB0cnVlLFxuICAgICAgYnV0dG9uczogWydib2xkJywgJ3VuZGVybGluZScsICdkZWxldGVkJywgJ2Zvcm1hdHRpbmcnLCAnb3JkZXJlZGxpc3QnLCAndW5vcmRlcmVkbGlzdCcsICdpbmRlbnQnLCAnb3V0ZGVudCcsICdpbWFnZScsICdsaW5rJywgJ2FsaWdubWVudCcsICdodG1sJ10sXG4gICAgICBmb3JtYXR0aW5nOiBbJ3AnXSxcbiAgICAgIGZvcm1hdHRpbmdBZGQ6IFt7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICB0aXRsZTogJ05vdGUnLFxuICAgICAgICBjbGFzczogJ25vdGUnXG4gICAgICB9XSxcbiAgICAgIC8vIHRvb2xiYXJGaXhlZDogZmFsc2UsXG4gICAgICBwYXN0ZVBsYWluVGV4dDogZmFsc2UsXG4gICAgICB0b29sYmFyRml4ZWRUb3BPZmZzZXQ6IDUwLFxuICAgICAgcGxhY2Vob2xkZXI6ICdUZXh0IGdvZXMgaGVyZScsXG4gICAgICByZXBsYWNlU3R5bGVzOiBbXG4gICAgICAgIFsnZm9udC13ZWlnaHQ6XFxcXHM/KDcwMHxib2xkKScsICdzdHJvbmcnXSxcbiAgICAgICAgWydmb250LXN0eWxlOlxcXFxzP2l0YWxpYycsICdlbSddLFxuICAgICAgICBbJ3RleHQtZGVjb3JhdGlvbjpcXFxccz91bmRlcmxpbmUnLCAndSddLFxuICAgICAgICBbJ3RleHQtZGVjb3JhdGlvbjpcXFxccz9saW5lLXRocm91Z2gnLCAnZGVsJ11cbiAgICAgIF0sXG4gICAgICBzb3VyY2VDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiR0b29sYmFyLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgICB9LFxuICAgICAgc3luY0JlZm9yZUNhbGxiYWNrOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAvL1hTUyBwcmV2ZW50aW9uXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL1xcc29uKFxcUys/KT1cXFwiKC4rPylcXFwiL2c7XG4gICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UocGF0dGVybiwgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBleHRlcm5hbENvbmZpZ3VyYXRpb25PcHRpb25zKTtcbiAgfSlcbiAgLmNvbmZpZyhmdW5jdGlvbiAoQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyKSB7XG4gICAgdmFyIGNvbXBvbmVudEtleSA9ICd0ZXh0JztcbiAgICB2YXIgY29tcG9uZW50RGVmaW5pdGlvbjogSUVkaXRvckNvbXBvbmVudERlZmluaXRpb24gPCB7XG4gICAgICBodG1sOiBzdHJpbmdcbiAgICB9ID4gPSB7XG4gICAgICBrZXk6IGNvbXBvbmVudEtleSxcbiAgICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgICBodG1sOiAnJ1xuICAgICAgfSxcbiAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgbWVudUljb25DbGFzczogJ2ZhIGZhLWZvbnQnLFxuICAgICAgbmFtZTogJ1RleHQnLFxuXG4gICAgICBlZGl0b3JUZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvdGV4dC90ZXh0LWNvbXAtZWRpdG9yLnRwbC5odG1sJyxcblxuICAgICAgZWRpdG9yUHJlQ29tcGlsZUNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsIHZhbHVlLCB0ZXh0Q29tcG9uZW50T3B0aW9ucykge1xuICAgICAgICAkc2NvcGUudGV4dEVkaXRvck9wdGlvbnMgPSBhbmd1bGFyLmNvcHkodGV4dENvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICBpZiAodmFsdWUuanVzdEFkZGVkKSB7XG4gICAgICAgICAgJHNjb3BlLnRleHRFZGl0b3JPcHRpb25zLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZS5qdXN0QWRkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZWRpdG9yQ29udHJvbGxlcjogZnVuY3Rpb24gKGNvbW1pdENoYW5nZXMsIGVsZW1lbnQsIGNvbnRlbnRFZGl0b3JDdHJsLCAkdGltZW91dCwgaW5kZXgsIHRleHRDb21wb25lbnRPcHRpb25zLCB2YWx1ZSkge1xuXG4gICAgICAgIHRoaXMuc2F2ZUNoYW5nZXMgPSAoKSA9PiB7XG4gICAgICAgICAgY29tbWl0Q2hhbmdlcyh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBodG1sTm9kZVRvVmFsdWU6ICgkbm9kZTogSlF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHRtbDogJG5vZGUucGFyZW50KCkuaHRtbCgpIHx8ICcnXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdmFsdWVUb0h0bWw6IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmh0bWwucmVwbGFjZSgvPFxccypwW14+XSo+KFtePF0qKTxcXHMqXFwvXFxzKnBcXHMqPi9nLCBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyAgL2csICcgJm5ic3A7Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudChjb21wb25lbnRLZXksIGNvbXBvbmVudERlZmluaXRpb24pO1xuICB9KVxuICAuZGlyZWN0aXZlKCdjb250ZW50RWRpdG9yQmx1cicsIGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmlvcml0eTogMixcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzOiBhbnkpIHtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgIC5iaW5kKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCgpID0+IHNjb3BlLiRldmFsKGF0dHJzLmNvbnRlbnRFZGl0b3JCbHVyKSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcbiAgLmRpcmVjdGl2ZSgncmVkYWN0b3JIaWRlVG9vbGJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJpb3JpdHk6IDIsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5vbignZm9jdXMnLCAoKSA9PiBlbGVtZW50LnBhcmVudCgpLmZpbmQoJy5yZWRhY3Rvci10b29sYmFyJykuYWRkQ2xhc3MoJ3Zpc2libGUnKSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFlbGVtZW50LmZpbmQoJ3RleHRhcmVhJykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuZmluZCgnLnJlZGFjdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGlwQ29tcG9uZW50VmFsdWUge1xuICBodG1sOiBzdHJpbmc7XG59XG5cbmNsYXNzIFRpcENvbXBvbmVudERlZmluaXRpb24gaW1wbGVtZW50cyBJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxUaXBDb21wb25lbnRWYWx1ZT4ge1xuICBrZXkgPSAndGlwJztcbiAgbmFtZSA9ICdUaXAnO1xuICBkZWZhdWx0VmFsdWU6IFRpcENvbXBvbmVudFZhbHVlID0ge1xuICAgIGh0bWw6ICc8cD48L3A+J1xuICB9O1xuXG4gIGVkaXRvclRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvdGlwL3RpcC1jb21wLWVkaXRvci50cGwuaHRtbCc7XG5cbiAgZWRpdG9yUHJlQ29tcGlsZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsIHRleHRDb21wb25lbnRPcHRpb25zLCB2YWx1ZSkge1xuICAgICRzY29wZS50ZXh0RWRpdG9yT3B0aW9ucyA9IGFuZ3VsYXIuY29weSh0ZXh0Q29tcG9uZW50T3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlLmp1c3RBZGRlZCkge1xuICAgICAgJHNjb3BlLnRleHRFZGl0b3JPcHRpb25zLmZvY3VzRW5kID0gdHJ1ZTtcbiAgICAgIHZhbHVlLmp1c3RBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBlZGl0b3JDb250cm9sbGVyID0gZnVuY3Rpb24gKHZhbHVlLCBjb21taXRDaGFuZ2VzKSB7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcyA9ICgpID0+IGNvbW1pdENoYW5nZXModmFsdWUpO1xuICB9XG5cbiAgaHRtbE5vZGVUb1ZhbHVlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh0bWw6ICQoJzxkaXY+JykuYXBwZW5kKCRub2RlKS5odG1sKClcbiAgICB9O1xuICB9XG5cbiAgdmFsdWVUb0h0bWwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaHRtbDtcbiAgfVxuXG5cbn1cblxuZXhwb3J0ID0gVGlwQ29tcG9uZW50RGVmaW5pdGlvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsPkVudGVyIFlvdXR1YmUgb3IgVmltZW8gVVJMOjwvbGFiZWw+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LXNtXFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLnVzZXJTcmNcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3V0dWJlIG9yIFZpbWVvIFVSTFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdm1zZz1cXFwie2Vycm9yTWVzc2FnZXM6IHtwYXR0ZXJuOiAnTXVzdCBiZSBhIHZhbGlkIFlvdXR1YmUgb3IgVmltZW8gdmlkZW8gVVJMJ319XFxcIiByZXF1aXJlZCBuZy1wYXR0ZXJuPVxcXCIvKF4oaHR0cHM/XFxcXDpcXFxcL1xcXFwvKT8oXFxcXC9cXFxcLyk/KHd3d1xcXFwuKT8oeW91dHViZVxcXFwuY29tfHlvdXR1XFxcXC4/YmUpXFxcXC8uKyQpfCheKGh0dHBzP1xcXFw6XFxcXC9cXFxcLyk/KFxcXFwvXFxcXC8pPyhwbGF5ZXJcXFxcLik/KHd3d1xcXFwuKT8odmltZW9cXFxcLmNvbVxcXFwvKSh2aWRlb1xcXFwvKT8oWzAtOV0rKSQpL1xcXCIgLz5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsPldpZHRoOjwvbGFiZWw+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LXNtXFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLndpZHRoXFxcIiBwbGFjZWhvbGRlcj1cXFwiV2lkdGhcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIyMDBcXFwiIHZtc2cvPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWw+aGVpZ2h0OjwvbGFiZWw+XFxuICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LXNtXFxcIiBuZy1tb2RlbD1cXFwicGFuZWwuY3VycmVudFZhbHVlLmhlaWdodFxcXCIgcGxhY2Vob2xkZXI9XFxcImhlaWdodFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjEwMFxcXCIgdm1zZy8+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxsYWJlbD5BbGlnbjwvbGFiZWw+XFxuICAgIDxzZWxlY3QgbmctbW9kZWw9XFxcInBhbmVsLmN1cnJlbnRWYWx1ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcImFsaWduLmlkIGFzIGFsaWduLm5hbWUgZm9yIGFsaWduIGluIFt7IGlkOiAnbGVmdCcsIG5hbWU6ICdMZWZ0JyB9LCB7IGlkOiAnY2VudGVyJywgbmFtZTogJ0NlbnRlcicgfSwgeyBpZDogJ3JpZ2h0JywgbmFtZTogJ1JpZ2h0JyB9XVxcXCI+XFxuICAgIDwvc2VsZWN0PlxcbjwvZGl2PlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWaWRlb0NvbXBWYWx1ZSB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBhbGlnbjogc3RyaW5nO1xufVxuXG5cbmNsYXNzIFZpZGVvQ29tcG9uZW50RGVmaW5pdGlvbiBpbXBsZW1lbnRzIElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPFZpZGVvQ29tcFZhbHVlPiB7XG4gICAga2V5ID0gJ3ZpZGVvJztcbiAgICBuYW1lID0gJ1ZpZGVvJztcbiAgICBtZW51SWNvbkNsYXNzID0gJ2ZhIGZhLXBsYXktY2lyY2xlJztcbiAgICBkZWZhdWx0VmFsdWU6IFZpZGVvQ29tcFZhbHVlID0ge1xuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB3aWR0aDogNjY2LFxuICAgICAgICBoZWlnaHQ6IDM3NSxcbiAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfTtcbiAgICBlZGl0b3JUZW1wbGF0ZSA9ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjp7e2NvbXBvbmVudC52YWx1ZS5hbGlnbn19XCI+PGlmcmFtZSBzcmM9XCJ7e2NvbXBvbmVudC50cnVzdGVkSHJlZn19XCIgc3R5bGU9XCJ3aWR0aDp7e2NvbXBvbmVudC52YWx1ZS53aWR0aH19cHg7IGhlaWdodDp7e2NvbXBvbmVudC52YWx1ZS5oZWlnaHR9fXB4XCI+PC9pZnJhbWU+PC9kaXY+JztcblxuICAgIGVkaXRvckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2YWx1ZTogVmlkZW9Db21wVmFsdWUsICRzY2U6bmcuSVNDRVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50cnVzdGVkSHJlZiA9ICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHZhbHVlLnVybCk7XG4gICAgfTtcblxuICAgIGVkaXRQYW5lbFRlbXBsYXRlVXJsID0gJ2NvbXBvbmVudHMvdmlkZW8vdmlkZW8tZWRpdC1wYW5lbC5odG1sJztcbiAgICBlZGl0b3JPcGVuRWRpdFBhbmVsT25BZGQgPSB0cnVlO1xuXG4gICAgZWRpdFBhbmVsQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICB2YXIgcGFuZWwgPSAkc2NvcGUucGFuZWw7XG4gICAgICAgIHBhbmVsLmN1cnJlbnRWYWx1ZS51c2VyU3JjID0gcGFuZWwuY3VycmVudFZhbHVlLnVybDtcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgncGFuZWwuY3VycmVudFZhbHVlLnVzZXJTcmMnLCAodXJsKSA9PiB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cHBvcnRlZFZpZGVvUmVnZXggPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFlvdXR1YmU6IC9odHRwcz86XFwvXFwvKD86WzAtOUEtWi1dK1xcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFxTKlteXFx3XFwtXFxzXSkoW1xcd1xcLV17MTF9KSg/PVteXFx3XFwtXXwkKSg/IVs/PSYrJVxcdy4tXSooPzpbJ1wiXVtePD5dKj58PFxcL2E+KSlbPz0mKyVcXHcuLV0qL2lnLFxuICAgICAgICAgICAgICAgICAgICB1cmxWaW1lbzogL2h0dHBzPzpcXC9cXC8od3d3XFwuKT92aW1lby5jb21cXC8oXFxkKykoJHxcXC8pL1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodXJsLm1hdGNoKHN1cHBvcnRlZFZpZGVvUmVnZXgudXJsWW91dHViZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2Uoc3VwcG9ydGVkVmlkZW9SZWdleC51cmxZb3V0dWJlLCAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJDEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXJsLm1hdGNoKHN1cHBvcnRlZFZpZGVvUmVnZXgudXJsVmltZW8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHN1cHBvcnRlZFZpZGVvUmVnZXgudXJsVmltZW8sICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJDInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFuZWwuY3VycmVudFZhbHVlLnVybCA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGh0bWxOb2RlVG9WYWx1ZSgkbm9kZTogSlF1ZXJ5KTogVmlkZW9Db21wVmFsdWUge1xuICAgICAgICB2YXIgJGlmcmFtZSA9ICRub2RlLmZpbmQoJ2lmcmFtZScpO1xuICAgICAgICB2YXIgd2lkdGggPSAoJGlmcmFtZS5jc3MoJ3dpZHRoJykuaW5kZXhPZignJScpID09PSAtMSkgPyBwYXJzZUludCgkaWZyYW1lLmNzcygnd2lkdGgnKSkgOiBudWxsO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gKCRpZnJhbWUuY3NzKCdoZWlnaHQnKS5pbmRleE9mKCclJykgPT09IC0xKSA/IHBhcnNlSW50KCRpZnJhbWUuY3NzKCdoZWlnaHQnKSkgOiBudWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiAkaWZyYW1lLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbGlnbjogJG5vZGUuY3NzKCd0ZXh0LWFsaWduJylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWx1ZVRvSHRtbCh2YWx1ZTogVmlkZW9Db21wVmFsdWUpOiBzdHJpbmcge1xuICAgICAgICB2YXIgd2lkdGggPSB2YWx1ZS53aWR0aCA/IHZhbHVlLndpZHRoICsgJ3B4JyA6ICcxMDAlJztcbiAgICAgICAgdmFyIGhlaWdodCA9IHZhbHVlLmhlaWdodCA/IHZhbHVlLmhlaWdodCArICdweCcgOiAnMTAwJSc7XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246JHt2YWx1ZS5hbGlnbn1cIj48aWZyYW1lIHNyYz1cIiR7dmFsdWUudXJsfVwiIHN0eWxlPVwid2lkdGg6JHt3aWR0aH07aGVpZ2h0OiR7aGVpZ2h0fTtcIj48L2lmcmFtZT48L2Rpdj5gO1xuICAgIH1cbn1cblxuZXhwb3J0ID0gVmlkZW9Db21wb25lbnREZWZpbml0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmNsYXNzIENvbnRlbnRDbGlwYm9hcmQge1xuICBsb2NhbFN0b3JhZ2VLZXkgPSAnYW5zd2Vyc0NvbnRlbnRFZGl0b3JDbGlwYm9hcmQnXG4gIGxvY2FsU3RvcmFnZTtcbiAgY29uc3RydWN0b3IoJHdpbmRvdzogV2luZG93KSB7XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSAkd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfVxuXG4gIGNvcHkoZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgYW5ndWxhci50b0pzb24oZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29weSBiZWNhdXNlIG9mOiAnLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXN0ZSgpIHtcbiAgICAgIHZhciBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0ID0gQ29udGVudENsaXBib2FyZDtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHYWJyaWVsX0dyaW5iZXJnIG9uIDQvMjYvMTUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlciA9IHJlcXVpcmUoJy4vY29udGVudC1lZGl0b3ItaGVscGVyJyk7XG5pbXBvcnQgQW5jaG9yQ29tcG9uZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9hbmNob3IvYW5jaG9yLmNvbXAnKTtcbmltcG9ydCBJbWFnZUNvbXBvbmVudERlZmluaXRpb24gPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcCcpO1xuaW1wb3J0IFZpZGVvQ29tcG9uZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy92aWRlby92aWRlby5jb21wJyk7XG5pbXBvcnQgSWZyYW1lQ29tcG9uZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9pZnJhbWUvaWZyYW1lLmNvbXAnKTtcbmltcG9ydCBDb2RlQ29tcG9uZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9jb2RlL2NvZGUuY29tcCcpO1xuaW1wb3J0IFN0ZXBCeVN0ZXBDb21wb25lbnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAuY29tcCcpO1xuaW1wb3J0IExpbmVDb21wb25lbnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL2xpbmUvbGluZS5jb21wJyk7XG5pbXBvcnQgVGFibGVDb21wb25lbnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXAnKTtcbmltcG9ydCBIZWFkaW5nQ29tcG9uZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9oZWFkaW5nL2hlYWRpbmcuY29tcCcpO1xuaW1wb3J0IEh0bWxDb21wb25lbnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL2h0bWwvaHRtbC5jb21wJyk7XG5pbXBvcnQgTm90ZUNvbXBvbmVudERlZmluaXRpb24gPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXAnKTtcbmltcG9ydCBUaXBDb21wb25lbnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3RpcC90aXAuY29tcCcpO1xuaW1wb3J0IEltcG9ydGFudENvbXBvbmVudERlZmluaXRpb24gPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvaW1wb3J0YW50L2ltcG9ydGFudC5jb21wJyk7XG5cbmNsYXNzIENvbXBvbmVudHNEZWZpbml0aW9uQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyOiBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIpIHtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBBbmNob3JDb21wb25lbnREZWZpbml0aW9uKCkpO1xuICAgIENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlci5hZGRDb21wb25lbnROZXcobmV3IEltYWdlQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBWaWRlb0NvbXBvbmVudERlZmluaXRpb24oKSk7XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudE5ldyhuZXcgSWZyYW1lQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBDb2RlQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBTdGVwQnlTdGVwQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBMaW5lQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBUYWJsZUNvbXBvbmVudERlZmluaXRpb24oKSk7XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudE5ldyhuZXcgSGVhZGluZ0NvbXBvbmVudERlZmluaXRpb24oKSk7XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudE5ldyhuZXcgSHRtbENvbXBvbmVudERlZmluaXRpb24oKSk7XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudE5ldyhuZXcgTm90ZUNvbXBvbmVudERlZmluaXRpb24oKSk7XG4gICAgQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyLmFkZENvbXBvbmVudE5ldyhuZXcgVGlwQ29tcG9uZW50RGVmaW5pdGlvbigpKTtcbiAgICBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIuYWRkQ29tcG9uZW50TmV3KG5ldyBJbXBvcnRhbnRDb21wb25lbnREZWZpbml0aW9uKCkpO1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdhbnN3ZXJzQ29udGVudENvcmUnKVxuICAuY29uZmlnKENvbXBvbmVudHNEZWZpbml0aW9uQ29uZmlnKTtcblxuXG4vLyBpbiBhZG1pblxuYW5ndWxhci5tb2R1bGUoJ2Fuc3dlcnNDb250ZW50Q29yZScpXG4gIC5jb25maWcoZnVuY3Rpb24oQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyKSB7XG4gIENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlci5zZXRDb21wb25lbnRDb25maWcoJ2ltYWdlJyxcbiAgICB7XG4gICAgICB1cGxvYWRGaWVsZHM6IHtcbiAgICAgICAgdGVuYW50SWQ6ICcxMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkwYWInXG4gICAgICB9XG4gICAgfSk7XG4gIENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlci5zZXRDb21wb25lbnRDb25maWcoJ3N0ZXAtYnktc3RlcCcsXG4gICAge1xuICAgICAgbGF5b3V0czogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnbmV3c3BhcGVyJyxcbiAgICAgICAgICBpbWdTcmM6ICcvL2QyZXlxaXk0bjAzdmU2LmNsb3VkZnJvbnQubmV0LzEyMzQ1Njc4LTEyMzQtMTIzNC0xMjM0LTEyMzQ1Njc4OTBhYi8yMDE1LzA1LzI3L2U1OWUzYWQ5LWIwOGQtNGUwMi05YjEwLTdkY2E2ODY4NGVkZC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdkb3RzJyxcbiAgICAgICAgICBpbWdTcmM6ICcvL2QyZXlxaXk0bjAzdmU2LmNsb3VkZnJvbnQubmV0LzEyMzQ1Njc4LTEyMzQtMTIzNC0xMjM0LTEyMzQ1Njc4OTBhYi8yMDE1LzA1LzI3Lzc2MWYzOWIyLTM2NDktNGY5Yy04YmExLTNjM2MxYzZjMzIzNy5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdvcmRlcmVkJyxcbiAgICAgICAgICBpbWdTcmM6ICcvL2QyZXlxaXk0bjAzdmU2LmNsb3VkZnJvbnQubmV0LzEyMzQ1Njc4LTEyMzQtMTIzNC0xMjM0LTEyMzQ1Njc4OTBhYi8yMDE1LzA1LzI3Lzk3ZGMwZTMzLWQ5MzEtNDA5NC1iZDM3LWZjYzY4OWJlYjlkNi5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb250ZW50RWRpdG9ySGVscGVyUHJvdmlkZXIgaW1wbGVtZW50cyBuZy5JU2VydmljZVByb3ZpZGVyIHtcbiAgY29tcG9uZW50czp7W2tleTogc3RyaW5nXTogSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248YW55Pn07XG4gIGNvbXBvbmVudHNDb25maWd1cmF0aW9uOk9iamVjdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmNvbXBvbmVudHNDb25maWd1cmF0aW9uID0ge307XG4gIH1cblxuICBhZGRDb21wb25lbnROZXcoY29tcG9uZW50RGVmaW5pdGlvbjpJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxhbnk+KSB7XG4gICAgaWYgKCFjb21wb25lbnREZWZpbml0aW9uLmVkaXRvclRlbXBsYXRlICYmICFjb21wb25lbnREZWZpbml0aW9uLmVkaXRvclRlbXBsYXRlVXJsKSB7XG4gICAgICB0aHJvdyAnY29tcG9uZW50IGRlZmluaXRpb24gbXVzdCBoYXZlIGVpdGhlciB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCc7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnREZWZpbml0aW9uLmtleV0gPSBjb21wb25lbnREZWZpbml0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50KGtleTpzdHJpbmcsIGRlZmluaXRpb246SUVkaXRvckNvbXBvbmVudERlZmluaXRpb248YW55Pikge1xuICAgIHRoaXMuY29tcG9uZW50c1trZXldID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLmNvbXBvbmVudHNba2V5XS5rZXkgPSBrZXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb21wb25lbnRDb25maWcoa2V5LCBjb25maWcpIHtcbiAgICB0aGlzLmNvbXBvbmVudHNDb25maWd1cmF0aW9uW2tleV0gPSBjb25maWc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAkZ2V0KCRsb2c6bmcuSUxvZ1NlcnZpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogdGhpcy5jb21wb25lbnRzLFxuICAgICAgZ2V0Q29tcG9uZW50Q29uZmlnOiAoa2V5KSA9PiB0aGlzLmNvbXBvbmVudHNDb25maWd1cmF0aW9uW2tleV0gfHwge30sXG4gICAgICBnZXRDb21wb25lbnREZWZpbml0aW9uQnlLZXk6IChrZXkpID0+IHRoaXMuY29tcG9uZW50c1trZXldLFxuICAgICAgY29uc29saWRhdGVUZXh0Q29tcG9uZW50czogKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChjb21iaW5lZENvbXBvbmVudHMsIGNvbXBvbmVudCkge1xuICAgICAgICAgIHZhciBwcmV2aW91cyA9IGNvbWJpbmVkQ29tcG9uZW50c1tjb21iaW5lZENvbXBvbmVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlID09PSAndGV4dCcgJiYgcHJldmlvdXMgJiYgcHJldmlvdXMudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAkbG9nLmxvZygnZGV0ZWN0ZWQhJywgcHJldmlvdXMudmFsdWUsIGNvbXBvbmVudC52YWx1ZSk7XG4gICAgICAgICAgICBwcmV2aW91cy52YWx1ZS5odG1sICs9IGNvbXBvbmVudC52YWx1ZS5odG1sO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21iaW5lZENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29tYmluZWRDb21wb25lbnRzO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9LFxuICAgICAgZ2V0UG9zaXRpb25CZXR3ZWVuTm9kZUFuZFByZXZpb3VzU2libGluZzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICB2YXIgaXRlbVRvcE1hcmdpbiA9IHBhcnNlSW50KCRlbC5jc3MoJ21hcmdpbi10b3AnKSk7XG4gICAgICAgIHZhciBwcmV2SXRlbUJvdHRvbU1hcmdpbiA9ICRlbC5wcmV2KCkubGVuZ3RoID8gcGFyc2VJbnQoJGVsLnByZXYoKS5jc3MoJ21hcmdpbi1ib3R0b20nKSkgOiAwO1xuICAgICAgICB2YXIgaXRlbVRvcFBvc2l0aW9uID0gJGVsLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICB2YXIgaGFsZk9mVG9wTWFyZ2luID0gTWF0aC5tYXgoaXRlbVRvcE1hcmdpbiwgcHJldkl0ZW1Cb3R0b21NYXJnaW4pIC8gMjtcblxuICAgICAgICByZXR1cm4gaXRlbVRvcFBvc2l0aW9uIC0gaGFsZk9mVG9wTWFyZ2luO1xuICAgICAgfSxcbiAgICAgIGdldFBvc2l0aW9uQmV0d2Vlbk5vZGVBbmROZXh0U2libGluZzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICB2YXIgaXRlbUJvdHRvbU1hcmdpbiA9IHBhcnNlSW50KCRlbC5jc3MoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgIHZhciBuZXh0SXRlbVRvcE1hcmdpbiA9ICRlbC5uZXh0KCkubGVuZ3RoID8gcGFyc2VJbnQoJGVsLm5leHQoKS5jc3MoJ21hcmdpbi10b3AnKSkgOiAwO1xuICAgICAgICB2YXIgaXRlbVRvcFBvc2l0aW9uID0gJGVsLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICB2YXIgaGFsZk9mQm90dG9tTWFyZ2luID0gTWF0aC5tYXgoaXRlbUJvdHRvbU1hcmdpbiwgbmV4dEl0ZW1Ub3BNYXJnaW4pIC8gMjtcblxuICAgICAgICByZXR1cm4gaXRlbVRvcFBvc2l0aW9uICsgJGVsLm91dGVySGVpZ2h0KHRydWUpIC0gaGFsZk9mQm90dG9tTWFyZ2luO1xuICAgICAgfSxcbiAgICAgIGdldFN1cnJvdW5kaW5nSHRtbDogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICB2YXIgcGFydDEgPSAnJztcbiAgICAgICAgdmFyIHBhcnQyID0gJyc7XG4gICAgICAgIHZhciByZWFjaGVkQ3VycmVudCA9IGZhbHNlO1xuXG4gICAgICAgICRlbFxuICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24gKGlkeCwgZWwpIHtcbiAgICAgICAgICAgIHZhciAkc2libGluZyA9ICQoZWwpO1xuICAgICAgICAgICAgaWYgKCRzaWJsaW5nLmdldCgwKSA9PT0gJGVsLmdldCgwKSkge1xuICAgICAgICAgICAgICByZWFjaGVkQ3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWNoZWRDdXJyZW50KSB7XG4gICAgICAgICAgICAgIHBhcnQyICs9ICRzaWJsaW5nWzBdLm91dGVySFRNTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnQxICs9ICRzaWJsaW5nWzBdLm91dGVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtwYXJ0MSwgcGFydDJdO1xuICAgICAgfSxcbiAgICAgIGdldFNwbGl0SHRtbENvbnRlbnRBYm92ZUNoaWxkOiBmdW5jdGlvbiAoJGNoaWxkKSB7XG5cbiAgICAgIH0sXG4gICAgICBnZXRTcGxpdEh0bWxDb250ZW50QmVsb3dDaGlsZDogZnVuY3Rpb24gKCRjaGlsZCkge1xuICAgICAgICB2YXIgcGFydDEgPSAnJztcbiAgICAgICAgdmFyIHBhcnQyID0gJyc7XG4gICAgICAgIHZhciByZWFjaGVkQ3VycmVudCA9IGZhbHNlO1xuXG4gICAgICAgICRjaGlsZFxuICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24gKGlkeCwgZWwpIHtcbiAgICAgICAgICAgIHZhciAkc2libGluZyA9ICQoZWwpO1xuXG4gICAgICAgICAgICBpZiAocmVhY2hlZEN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcGFydDIgKz0gJHNpYmxpbmdbMF0ub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydDEgKz0gJHNpYmxpbmdbMF0ub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNpYmxpbmcuZ2V0KDApID09PSAkY2hpbGQuZ2V0KDApKSB7XG4gICAgICAgICAgICAgIHJlYWNoZWRDdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtwYXJ0MSwgcGFydDJdO1xuICAgICAgfSxcbiAgICAgIGdldFJhbmRvbUd1aWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICB9XG5cbn1cblxuZXhwb3J0ID0gQ29udGVudEVkaXRvckhlbHBlclByb3ZpZGVyO1xuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHYWJyaWVsX0dyaW5iZXJnIG9uIDUvMTkvMTUuXG4gKi9cblxuaW1wb3J0IENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlciA9IHJlcXVpcmUoJy4vY29udGVudC1lZGl0b3ItaGVscGVyJyk7XG5pbXBvcnQgRG9jdW1lbnRQcm9jZXNzb3IgPSByZXF1aXJlKCcuL2RvY3VtZW50LXByb2Nlc3NvcicpO1xuaW1wb3J0IENvbnRlbnRFZGl0b3JTZGsgPSByZXF1aXJlKCcuL3Nkay9zZGsuc3J2Jyk7XG5pbXBvcnQgQ29udGVudENsaXBib2FyZCA9IHJlcXVpcmUoJy4vY2xpcGJvYXJkL2NvbnRlbnQtY2xpcGJvYXJkLnNydicpO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdhbnN3ZXJzQ29udGVudENvcmUnLCBbJ2NvbnRlbnRFZGl0b3JUcmFuc2xhdGlvbnMnLCAnbmdTYW5pdGl6ZScsICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJ10pXG4gIC5wcm92aWRlcignQ29udGVudEVkaXRvckhlbHBlcicsIENvbnRlbnRFZGl0b3JIZWxwZXJQcm92aWRlcilcbiAgLnNlcnZpY2UoJ0RvY3VtZW50UHJvY2Vzc29yJywgRG9jdW1lbnRQcm9jZXNzb3IpXG4gIC5zZXJ2aWNlKCdDb250ZW50RWRpdG9yU2RrJywgQ29udGVudEVkaXRvclNkaylcbiAgLnNlcnZpY2UoJ0NvbnRlbnRDbGlwYm9hcmQnLCBDb250ZW50Q2xpcGJvYXJkKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRG9jdW1lbnRQcm9jZXNzb3Ige1xuICBhdmFpbGFibGVDb21wb25lbnRzOiBJRWRpdG9yQ29tcG9uZW50RGVmaW5pdGlvbjxhbnk+W107XG5cbiAgY29uc3RydWN0b3IoQ29udGVudEVkaXRvckhlbHBlcikge1xuICAgIHRoaXMuYXZhaWxhYmxlQ29tcG9uZW50cyA9IENvbnRlbnRFZGl0b3JIZWxwZXIuY29tcG9uZW50cztcbiAgfVxuXG4gIGlzVmFsaWRIdG1sQ29udGVudCAoaHRtbENvbnRlbnQ6IHN0cmluZyk6Ym9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBwYXJzZWRDb21wb25lbnRzID0gdGhpcy5wYXJzZUh0bWxUb0NvbXBvbmVudHMoaHRtbENvbnRlbnQpO1xuICAgICAgdmFyIHJldmVyc2VkSHRtbCA9IHRoaXMucmVuZGVySHRtbChwYXJzZWRDb21wb25lbnRzKTtcbiAgICAgIHZhciBkb3VibGVQYXJzZWRDb21wb25lbnRzID0gdGhpcy5wYXJzZUh0bWxUb0NvbXBvbmVudHMocmV2ZXJzZWRIdG1sKTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9ICQoJzxkaXY+JylcbiAgICAgICAgLmh0bWwoaHRtbENvbnRlbnQpXG4gICAgICAgIC5jaGlsZHJlbigpO1xuXG4gICAgICB2YXIgY29tcG9uZW50Q291bnQgPSAkY2hpbGRyZW5cbiAgICAgICAgLmZpbHRlcignZGl2W2RhdGEtY29tcG9uZW50LXR5cGVdJylcbiAgICAgIC5sZW5ndGg7XG5cbiAgICAgIHZhciBjaGlsZHJlbkNvdW50ID0gJGNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgdmFyIGNoaWxkcmVuQ291bnRNYXRjaCA9IGNoaWxkcmVuQ291bnQgPT09IHBhcnNlZENvbXBvbmVudHMubGVuZ3RoO1xuICAgICAgdmFyIGNvbXBvbmVudENvdW50TWF0Y2ggPSBjb21wb25lbnRDb3VudCA9PT0gcGFyc2VkQ29tcG9uZW50cy5sZW5ndGg7XG4gICAgICB2YXIgaGFzQ29tcG9uZW50cyA9IGNvbXBvbmVudENvdW50ID4gMDtcbiAgICAgIHZhciBjb21wb25lbnRDb250ZW50TWF0Y2ggPSBhbmd1bGFyLmVxdWFscyhwYXJzZWRDb21wb25lbnRzLCBkb3VibGVQYXJzZWRDb21wb25lbnRzKTtcblxuICAgICAgcmV0dXJuIGhhc0NvbXBvbmVudHMgJiYgY2hpbGRyZW5Db3VudE1hdGNoICYmIGNvbXBvbmVudENvdW50TWF0Y2ggJiYgY29tcG9uZW50Q29udGVudE1hdGNoO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlSHRtbFRvQ29tcG9uZW50cyAoaHRtbDogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuICQoaHRtbClcbiAgICAgIC5maWx0ZXIoJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlXScpXG4gICAgICAudG9BcnJheSgpXG4gICAgICAubWFwKG5vZGUgPT4ge1xuICAgICAgICB2YXIgJG5vZGU6IEpRdWVyeSA9ICQobm9kZSk7XG4gICAgICAgIHZhciB0ZW1wbGF0ZUlkID0gJG5vZGUuYXR0cignZGF0YS10ZW1wbGF0ZS1pZCcpO1xuICAgICAgICB2YXIgdGVtcGxhdGVQYXJ0SW5kZXhTdHJpbmcgPSAkbm9kZS5hdHRyKCdkYXRhLXRlbXBsYXRlLXBhcnQtaW5kZXgnKTtcbiAgICAgICAgdmFyIHR5cGUgPSAkbm9kZS5hdHRyKCdkYXRhLWNvbXBvbmVudC10eXBlJyk7XG5cbiAgICAgICAgdmFyIGF0dGVudGlvbkJsb2NrTWlncmF0aW9uOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAgICAgICBub3RlOiAnbm90ZScsXG4gICAgICAgICAgdGlwOiAndGlwJyxcbiAgICAgICAgICBpbXBvcnRhbnQ6ICdpbXBvcnRhbnQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdhdHRlbnRpb24tYmxvY2snKSB7XG4gICAgICAgICAgdmFyICRibG9ja05vZGUgPSAkbm9kZS5maW5kKCdbZGF0YS1hdHRlbnRpb24tYmxvY2stdHlwZV0nKTtcbiAgICAgICAgICB2YXIgYmxvY2tUeXBlID0gJGJsb2NrTm9kZS5hdHRyKCdkYXRhLWF0dGVudGlvbi1ibG9jay10eXBlJyk7XG4gICAgICAgICAgdHlwZSA9IGF0dGVudGlvbkJsb2NrTWlncmF0aW9uW2Jsb2NrVHlwZV07XG4gICAgICAgICAgJG5vZGUgPSAkYmxvY2tOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBvbmVudERhdGE6IGFueSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmF2YWlsYWJsZUNvbXBvbmVudHNbdHlwZV0uaHRtbE5vZGVUb1ZhbHVlKCRub2RlLmNvbnRlbnRzKCkpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlSWQpIHtcbiAgICAgICAgICBjb21wb25lbnREYXRhLnRlbXBsYXRlID0ge1xuICAgICAgICAgICAgaWQ6IHRlbXBsYXRlSWQsXG4gICAgICAgICAgICBpbmRleDogcGFyc2VJbnQodGVtcGxhdGVQYXJ0SW5kZXhTdHJpbmcpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnREYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVySHRtbCAoY29tcG9uZW50cyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbXBvbmVudHNcbiAgICAgIC5tYXAoKGNvbXBvbmVudCkgPT4ge1xuICAgICAgdmFyIGlubmVyVmFsdWUgPSB0aGlzLmF2YWlsYWJsZUNvbXBvbmVudHNbY29tcG9uZW50LnR5cGVdLnZhbHVlVG9IdG1sKGNvbXBvbmVudC52YWx1ZSk7XG4gICAgICB2YXIgdGVtcGxhdGVJbmZvSWZBdmFpbGFibGUgPSBjb21wb25lbnQudGVtcGxhdGUgPyBgIGRhdGEtdGVtcGxhdGUtaWQ9XCIke2NvbXBvbmVudC50ZW1wbGF0ZS5pZH1cIiBkYXRhLXRlbXBsYXRlLXBhcnQtaW5kZXg9XCIke2NvbXBvbmVudC50ZW1wbGF0ZS5pbmRleH1cImAgOiAnJztcbiAgICAgIHJldHVybiBgPGRpdiBkYXRhLWNvbXBvbmVudC10eXBlPVwiJHtjb21wb25lbnQudHlwZX1cIiR7dGVtcGxhdGVJbmZvSWZBdmFpbGFibGV9PiR7aW5uZXJWYWx1ZX08L2Rpdj5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgPSBEb2N1bWVudFByb2Nlc3NvcjtcbiIsImNsYXNzIENvbnRlbnRFZGl0b3JTZGsge1xuXG4gICRkb2N1bWVudDogSlF1ZXJ5O1xuICAkdGltZW91dDogbmcuSVRpbWVvdXRTZXJ2aWNlO1xuICBzYWZldHlEZWxheTogbnVtYmVyID0gMDtcbiAgLyogQG5nSW5qZWN0Ki9cbiAgY29uc3RydWN0b3IoJGRvY3VtZW50OiBKUXVlcnksICR0aW1lb3V0OiBuZy5JVGltZW91dFNlcnZpY2UpIHtcbiAgICB0aGlzLiRkb2N1bWVudCA9ICRkb2N1bWVudDtcbiAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gIH1cblxuICB0cmlnZ2VyRXZlbnQoZXZlbnRUeXBlLCBkYXRhKSB7XG4gICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiRkb2N1bWVudC50cmlnZ2VyKGV2ZW50VHlwZSwgW2V2ZW50VHlwZSwgZGF0YV0pO1xuICAgIH0sIHRoaXMuc2FmZXR5RGVsYXkpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIHJldHVybiB0aGlzLiRkb2N1bWVudC5vbihldmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICBzdGVwQnlTdGVwOiB7XG4gICAgICBzdGVwQ2hhbmdlZDogJ3Nicy5zdGVwQ2hhbmdlZCdcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCA9IENvbnRlbnRFZGl0b3JTZGs7XG4iLCIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gQ29udGVudERpZmZlckRpcmVjdGl2ZShDb250ZW50RWRpdG9ySGVscGVyKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2RpZmZlci9jb250ZW50LWRpZmZlci50cGwuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGJlZm9yZTogJz0nLFxuICAgICAgYWZ0ZXI6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gKERpZmZlciwgJHNjb3BlKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgICAgdm0uY29tcG9uZW50cyA9IERpZmZlci5kaWZmKHZtLmJlZm9yZSwgdm0uYWZ0ZXIpO1xuICAgICAgfTtcbiAgICAgICRzY29wZS4kd2F0Y2goJ3ZtLmJlZm9yZScsIHJlZnJlc2gpO1xuICAgICAgJHNjb3BlLiR3YXRjaCgndm0uYWZ0ZXInLCByZWZyZXNoKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCA9IENvbnRlbnREaWZmZXJEaXJlY3RpdmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHVsPlxcbiAgPGxpIG5nLXJlcGVhdD1cXFwiY29tcG9uZW50IGluIHZtLmNvbXBvbmVudHNcXFwiXFxuICAgICAgY2xhc3M9XFxcImNvbXBvbmVudC1saXN0LWl0ZW0gY29tcG9uZW50LXZpZXdlci1jb250YWluZXJcXFwiPlxcbiAgICA8dmlld2VyLWNvbXBvbmVudCB0eXBlPVxcXCJ7ezo6Y29tcG9uZW50LnR5cGV9fVxcXCIgdmFsdWU9XFxcImNvbXBvbmVudC52YWx1ZVxcXCIgY2xhc3M9XFxcInt7Ojpjb21wb25lbnQuZGlmZn19XFxcIj48L3ZpZXdlci1jb21wb25lbnQ+XFxuICA8L2xpPlxcbjwvdWw+XCI7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgRGlmZmVyID0gcmVxdWlyZSgnLi9kaWZmZXIuc3J2Jyk7XG5pbXBvcnQgQ29udGVudERpZmZlckRpcmVjdGl2ZSA9IHJlcXVpcmUoJy4vY29udGVudC1kaWZmZXIuZHJ2Jyk7XG5hbmd1bGFyLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JEaWZmZXInLCBbJ2Fuc3dlcnNDb250ZW50RWRpdG9yVmlld2VySW50ZXJuYWwnXSlcbiAgLnNlcnZpY2UoJ0RpZmZlcicsIERpZmZlcilcbiAgLmRpcmVjdGl2ZSgnY29udGVudERpZmZlcicsIENvbnRlbnREaWZmZXJEaXJlY3RpdmUpOyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29tcFZhbHVlIHtcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogT2JqZWN0O1xufVxuXG5jbGFzcyBEaWZmUmVzdWx0IGV4dGVuZHMgQ29tcFZhbHVle1xuICBkaWZmOiBzdHJpbmc7XG59XG5cbmNsYXNzIERpZmZlciB7XG4gIEFEREVEOiBzdHJpbmcgPSAnQURERUQnO1xuICBSRU1PVkVEIDogc3RyaW5nID0gJ1JFTU9WRUQnO1xuICBNT0RJRklFRCA6c3RyaW5nID0gJ01PRElGSUVEJztcbiAgU0FNRTogc3RyaW5nID0gJ1NBTUUnO1xuXG4gIGRpZmYoYmVmb3JlQ29tcExpc3Q6IENvbXBWYWx1ZVtdLCBhZnRlckNvbXBMaXN0OiBDb21wVmFsdWVbXSApOiBEaWZmUmVzdWx0W10ge1xuICAgIGJlZm9yZUNvbXBMaXN0ID0gYW5ndWxhci5jb3B5KGJlZm9yZUNvbXBMaXN0KTtcbiAgICBhZnRlckNvbXBMaXN0ID0gYW5ndWxhci5jb3B5KGFmdGVyQ29tcExpc3QpO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoTWF0aC5tYXgoYWZ0ZXJDb21wTGlzdC5sZW5ndGgsIGJlZm9yZUNvbXBMaXN0Lmxlbmd0aCkpXG4gICAgICAuam9pbignMCcpXG4gICAgICAuc3BsaXQoJzAnKS5cbiAgICAgIG1hcCgoKSA9PiBbXSk7XG5cbiAgICAvL2ZpbmQgYWxsIHRoYXQgYXJlIHRoZSBzYW1lIG9yIHJlbW92ZWRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJlZm9yZUNvbXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgIHZhciBiZWZvcmVDb21wID0gYmVmb3JlQ29tcExpc3RbaV07XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFmdGVyQ29tcExpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGFmdGVyQ29tcCA9IGFmdGVyQ29tcExpc3Rbal07XG5cbiAgICAgICAgaWYgKCFhZnRlckNvbXApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmd1bGFyLmVxdWFscyhiZWZvcmVDb21wLCBhZnRlckNvbXApKSB7XG4gICAgICAgICAgcmVzdWx0W2pdLnB1c2goYW5ndWxhci5leHRlbmQoe30sIGFmdGVyQ29tcCwgeyBkaWZmOiB0aGlzLlNBTUUgfSkpO1xuICAgICAgICAgIGFmdGVyQ29tcExpc3Rbal0gPSBudWxsO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChiZWZvcmVDb21wLnR5cGUgPT09IGFmdGVyQ29tcC50eXBlKSB7XG4gICAgICAgICAgcmVzdWx0W2pdLnB1c2goYW5ndWxhci5leHRlbmQoe30sIGFmdGVyQ29tcCwgeyBkaWZmOiB0aGlzLk1PRElGSUVEfSkpO1xuICAgICAgICAgIGFmdGVyQ29tcExpc3Rbal0gPSBudWxsO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICByZXN1bHRbaV0ucHVzaChhbmd1bGFyLmV4dGVuZCh7fSwgYmVmb3JlQ29tcCwgeyBkaWZmOiB0aGlzLlJFTU9WRUQgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFmdGVyQ29tcExpc3QuZm9yRWFjaCgoY29tcCwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChjb21wKSB7XG4gICAgICAgICAgcmVzdWx0W2lkeF0ucHVzaChhbmd1bGFyLmV4dGVuZCh7fSwgY29tcCwgeyBkaWZmOiB0aGlzLkFEREVEIH0pKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gcmVzdWx0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGN1cnIpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuXG5leHBvcnQgPSBEaWZmZXI7XG5cbi8qXG4xXG4xIDEgIDFcbiAgICAgMltkXSBcbjIgMyAgM1thXVxuNCA0ICA0W3NdIFxuICA1ICA1W2FdXG5cbiovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29tcG9uZW50LWFkZGVyXFxcIiBuZy1jbGFzcz1cXFwieydtZW51LW9wZW4nOiBhZGRlci5pc01lbnVPcGVufVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJiYWxsXFxcIiBuZy1jbGljaz1cXFwiYWRkZXIudG9nZ2xlTWVudSgpXFxcIj4rPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJsaW5lXFxcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbXBvbmVudHMtbWVudS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb21wb25lbnRzLW1lbnVcXFwiPlxcbiAgICAgIDwhLS08aDQ+QWRkIGEgY29tcG9uZW50OjwvaDQ+LS0+XFxuICAgICAgPHNlY3Rpb24+IFxcbiAgICAgICAgPGg0PkJhc2ljPC9oND5cXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcImFkZGVyLmFkZENvbXBvbmVudCgndGV4dCcpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWZvbnRcXFwiPjwvaT5cXG4gICAgICAgICAgVGV4dFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiYWRkZXIuYWRkQ29tcG9uZW50KCdpbWFnZScpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWltYWdlXFxcIj48L2k+XFxuICAgICAgICAgIEltYWdlXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ2FuY2hvcicpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWFuY2hvclxcXCI+PC9pPlxcbiAgICAgICAgICBBbmNob3JcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcImFkZGVyLmFkZENvbXBvbmVudCgnc3ViaGVhZGluZycpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWZvbnRcXFwiPjwvaT5cXG4gICAgICAgICAgU3ViaGVhZGluZ1xcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICAgIDxzZWN0aW9uPiBcXG4gICAgICAgIDxoND5FeHRyYTwvaDQ+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ3ZpZGVvJylcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiYnRuLWljb24gZmEgZmEtcGxheS1jaXJjbGVcXFwiPjwvaT5cXG4gICAgICAgICAgVmlkZW9cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiYWRkZXIuYWRkQ29tcG9uZW50KCdzdGVwLWJ5LXN0ZXAnKVxcXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJidG4taWNvbiBmYSBmYS1zdGVwLWZvcndhcmRcXFwiPjwvaT5cXG4gICAgICAgICAgU3RlcC1ieS1zdGVwXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcImFkZGVyLmFkZENvbXBvbmVudCgnbGluZScpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWVsbGlwc2lzLWhcXFwiPjwvaT5cXG4gICAgICAgICAgTGluZVxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ25vdGUnKVxcXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJidG4taWNvbiBmYSBmYS1pdGFsaWNcXFwiPjwvaT5cXG4gICAgICAgICAgTm90ZVxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ3RpcCcpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWxpZ2h0YnVsYi1vXFxcIj48L2k+XFxuICAgICAgICAgIFRpcFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ2ltcG9ydGFudCcpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhIGZhLWluZm8tY2lyY2xlXFxcIj48L2k+XFxuICAgICAgICAgIEltcG9ydGFudFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICAgIDxzZWN0aW9uPiBcXG4gICAgICAgIDxoND5BZHZhbmNlZDwvaDQ+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoJ2lmcmFtZScpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWNvZGVcXFwiPjwvaT5cXG4gICAgICAgICAgSUZyYW1lXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcImFkZGVyLmFkZENvbXBvbmVudCgnY29kZScpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLXRlcm1pbmFsXFxcIj48L2k+XFxuICAgICAgICAgIENvZGVcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiYWRkZXIuYWRkQ29tcG9uZW50KCdodG1sJylcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiYnRuLWljb24gZmEgZmEtY29kZVxcXCI+PC9pPlxcbiAgICAgICAgICBIVE1MXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcImFkZGVyLmFkZENvbXBvbmVudCgndGFibGUnKVxcXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJidG4taWNvbiBmYSBmYS10YWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICBUYWJsZVxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCJhZGRlci5wYXN0ZUNvbXBvbmVudCgpXFxcIiBjbGFzcz1cXFwicGFzdGUtY29tcG9uZW50XFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwie3shYWRkZXIuaXNQYXN0ZUVuYWJsZWQgPyAnQ29weSBhIGNvbXBvbmVudCBmaXJzdCcgOiAnJ319XFxcIlxcbiAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cXFwiIWFkZGVyLmlzUGFzdGVFbmFibGVkXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImJ0bi1pY29uIGZhIGZhLWNsaXBib2FyZFxcXCI+PC9pPlxcbiAgICAgICAgICBQYXN0ZVxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbXBvbmVudC1hZGRlclxcXCIgbmctY2xhc3M9XFxcInsnbWVudS1vcGVuJzogYWRkZXIuaXNNZW51T3Blbn1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYmFsbFxcXCIgbmctY2xpY2s9XFxcImFkZGVyLnRvZ2dsZU1lbnUoKVxcXCI+KzwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGluZVxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb21wb25lbnRzLW1lbnUtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29tcG9uZW50cy1tZW51XFxcIj5cXG4gICAgICA8IS0tPGg0PkFkZCBhIGNvbXBvbmVudDo8L2g0Pi0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1hZGQtY29udGFpbmVyXFxcIiBuZy1yZXBlYXQ9XFxcImNvbXAgaW4gYWRkZXIucG9zc2libGVDb21wb25lbnRzIHwgb3JkZXJCeSA6Jytwcmlvcml0eSdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWFkZC1jb21wb25lbnRcXFwiIG5nLWNsaWNrPVxcXCJhZGRlci5hZGRDb21wb25lbnQoY29tcC5rZXkpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImljb24ge3tjb21wLm1lbnVJY29uQ2xhc3N9fVxcXCIgbmctaWY9XFxcImNvbXAubWVudUljb25DbGFzc1xcXCI+PC9pPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+e3tjb21wLm5hbWV9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcpXG4gIC5kaXJlY3RpdmUoJ2NvbXBvbmVudEFkZGVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gaXNFbGVtZW50TmVhck1vdXNlRXZlbnQoJGVsZW1lbnQsIGRpc3RhbmNlLCBldmVudCk6YW55IHtcbiAgICAgIHZhciBsZWZ0ID0gJGVsZW1lbnQub2Zmc2V0KCkubGVmdCAtIGRpc3RhbmNlLFxuICAgICAgICB0b3AgPSAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSBkaXN0YW5jZSxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgJGVsZW1lbnQud2lkdGgoKSArICgyICogZGlzdGFuY2UgKiA1KSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgJGVsZW1lbnQuaGVpZ2h0KCkgKyAoMiAqIGRpc3RhbmNlKSxcbiAgICAgICAgeCA9IGV2ZW50LnBhZ2VYLFxuICAgICAgICB5ID0gZXZlbnQucGFnZVk7XG5cbiAgICAgIGlmICgkZWxlbWVudC5pcygnOmhvdmVyJykpIHtcbiAgICAgICAgcmV0dXJuICdpbnNpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh4ID4gbGVmdCAmJiB4IDwgcmlnaHQgJiYgeSA+IHRvcCAmJiB5IDwgYm90dG9tKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRJblZpZXdwb3J0IChlbCkge1xuXG4gICAgICAvL3NwZWNpYWwgYm9udXMgZm9yIHRob3NlIHVzaW5nIGpRdWVyeVxuICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09IFwiZnVuY3Rpb25cIiAmJiBlbCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBlbCA9IGVsWzBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiYgLypvciAkKHdpbmRvdykuaGVpZ2h0KCkgKi9cbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLypvciAkKHdpbmRvdykud2lkdGgoKSAqL1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHJlcXVpcmU6ICdeY29udGVudEVkaXRvcicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VkaXRvci9hZGRlci9jb21wb25lbnQtYWRkZXIuaHRtbCcsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5kZXg6ICdAJyxcbiAgICAgICAgaXNQYXN0ZUVuYWJsZWQ6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogYW55LCBlbGVtLCBhdHRycywgY29udGVudEVkaXRvckN0cmwpIHtcbiAgICAgICAgdmFyICRiYWxsID0gZWxlbS5maW5kKCcuYmFsbCcpO1xuXG4gICAgICAgIHZhciBoYW5kbGVyID0gJCgnYm9keScpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydCgkYmFsbCkpIHtcbiAgICAgICAgICAgIHZhciBpc05lYXIgPSBpc0VsZW1lbnROZWFyTW91c2VFdmVudCgkYmFsbCwgNTAsIGV2ZW50KTtcbiAgICAgICAgICAgIHZhciBpc0luc2lkZSA9IChpc05lYXIgPT09ICdpbnNpZGUnKTtcbiAgICAgICAgICAgIGlmIChpc05lYXIpIHtcbiAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG91dGVyQ2xpY2tIYW5kbGVyID0gJCgnaHRtbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoc2NvcGUuYWRkZXIuaXNNZW51T3Blbikge1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgc2NvcGUuYWRkZXIuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbnNpZGVDbGlja0hhbmRsZXIgPSBlbGVtLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJG9uKCdkaXNhYmxlQWxsQWRkZXJzJywgKCkgPT4ge1xuICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjb3BlLiRvbigncmVFbmFibGVBbGxBZGRlcnMnLCAoKSA9PiB7XG4gICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+ICBlbGVtLm9mZihoYW5kbGVyLCBvdXRlckNsaWNrSGFuZGxlciwgaW5zaWRlQ2xpY2tIYW5kbGVyKSk7XG5cbiAgICAgICAgc2NvcGUuY29udGVudEVkaXRvckN0cmwgPSBjb250ZW50RWRpdG9yQ3RybDtcbiAgICAgIH0sXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCBDb250ZW50RWRpdG9ySGVscGVyLCAkcm9vdFNjb3BlLCBDb250ZW50Q2xpcGJvYXJkKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gQ29udGVudEVkaXRvckhlbHBlci5jb21wb25lbnRzO1xuICAgICAgICB0aGlzLnBvc3NpYmxlQ29tcG9uZW50cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLm1hcCgoaykgPT4gY29tcG9uZW50c1trXSk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGlzYWJsZUFsbEFkZGVycycpO1xuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZUVuYWJsZUFsbEFkZGVycycpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50ID0gKGNvbXBUeXBlKSA9PiB7XG4gICAgICAgICAgJHNjb3BlLmNvbnRlbnRFZGl0b3JDdHJsLmFkZENvbXBvbmVudChjb21wVHlwZSwgdW5kZWZpbmVkLCBwYXJzZUludCh0aGlzLmluZGV4KSk7XG4gICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBhc3RlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgICRzY29wZS5jb250ZW50RWRpdG9yQ3RybC5wYXN0ZUNvbXBvbmVudEF0KHBhcnNlSW50KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXJBczogJ2FkZGVyJyxcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgICB9O1xuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2Fuc3dlcnNDb250ZW50RWRpdG9ySW50ZXJuYWwnKVxuICAuZmFjdG9yeSgnQ29tcG9uZW50RWRpdG9yUmVuZGVyZXInLCAoJGNvbXBpbGUsICRodHRwLCAkcSwgQ29udGVudEVkaXRvckhlbHBlciwgJHJvb3RTY29wZSwgJGNvbnRyb2xsZXIsICR0ZW1wbGF0ZUNhY2hlKSA9PiB7XG4gIHZhciBhdmFpbGFibGVDb21wb25lbnRzID0gQ29udGVudEVkaXRvckhlbHBlci5jb21wb25lbnRzO1xuICB2YXIgZ2V0Q29tcG9uZW50VGVtcGxhdGUgPSAoY29tcG9uZW50RGVmaW5pdGlvbjogSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248YW55PikgPT4ge1xuICAgIHZhciB0ZW1wbGF0ZVVybCA9IGNvbXBvbmVudERlZmluaXRpb24uZWRpdG9yVGVtcGxhdGVVcmw7XG4gICAgaWYgKCF0ZW1wbGF0ZVVybCkge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlZmluaXRpb24uZWRpdG9yVGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVVcmwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcjogKHR5cGUsIHZhbHVlLCBjb21taXRDaGFuZ2VzRm4sIGNvbnRlbnRFZGl0b3JDdHJsLCBpbmRleCwgcGFyZW50U2NvcGUpID0+IHtcbiAgICAgIHZhciBzY29wZSA9ICRyb290U2NvcGUuJG5ldyh0cnVlLCBwYXJlbnRTY29wZSk7XG4gICAgICB2YXIgY29tcG9uZW50RGVmaW5pdGlvbjogSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248YW55PiA9IGF2YWlsYWJsZUNvbXBvbmVudHNbdHlwZV07XG5cbiAgICAgIHZhciB0ZW1wbGF0ZUNvbnRlbnRzID0gZ2V0Q29tcG9uZW50VGVtcGxhdGUoY29tcG9uZW50RGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChjb21wb25lbnREZWZpbml0aW9uLmVkaXRvclByZUNvbXBpbGVDb250cm9sbGVyKSB7XG4gICAgICAgICRjb250cm9sbGVyKGNvbXBvbmVudERlZmluaXRpb24uZWRpdG9yUHJlQ29tcGlsZUNvbnRyb2xsZXIsIHsgJHNjb3BlOiBzY29wZSwgdmFsdWU6IHZhbHVlLCBjb21taXRDaGFuZ2VzOiBjb21taXRDaGFuZ2VzRm4gfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50ID0gJGNvbXBpbGUoYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlQ29udGVudHMpKShzY29wZSk7XG5cbiAgICAgIHZhciBjdHJsID0gJGNvbnRyb2xsZXIoY29tcG9uZW50RGVmaW5pdGlvbi5lZGl0b3JDb250cm9sbGVyIHx8IGFuZ3VsYXIubm9vcCwge1xuICAgICAgICAkc2NvcGU6IHNjb3BlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbW1pdENoYW5nZXM6IGNvbW1pdENoYW5nZXNGbixcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCwgLy9naXZlIHRoZSBlbGVtZW50IHRvIHRoZSBjb250cm9sbGVyIGZvciBhIGRpcmVjdGl2ZS1saWtlIGZlZWxpbmcsXG4gICAgICAgIGNvbnRlbnRFZGl0b3JDdHJsOiBjb250ZW50RWRpdG9yQ3RybCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcbiAgICAgIGN0cmwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgLy9hZGQgYSBjb250cm9sbGVyQXMtbGlrZSBzeW50YXhcbiAgICAgIHNjb3BlLmNvbXBvbmVudCA9IGN0cmw7XG4gICAgICBzY29wZS5jb21taXRDaGFuZ2VzID0gY29tbWl0Q2hhbmdlc0ZuO1xuXG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBDb250ZW50RWRpdG9yRGlyZWN0aXZlKENvbnRlbnRFZGl0b3JIZWxwZXIpIHtcbiAgdmFyIGF2YWlsYWJsZUNvbXBvbmVudHM6IElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPGFueT5bXSA9IENvbnRlbnRFZGl0b3JIZWxwZXIuY29tcG9uZW50cztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdG9yL2NvbnRlbnQtZWRpdG9yLnRwbC5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgbGFuZzogJ0AnLFxuICAgICAgY29tcG9uZW50czogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkdGltZW91dDogbmcuSVRpbWVvdXRTZXJ2aWNlLCBob3RrZXlzLCAkcSwgJHNjb3BlOiBuZy5JU2NvcGUsIENvbXBvbmVudEVkaXRQYW5lbCwgJGxvZywgQ29udGVudENsaXBib2FyZCkge1xuICAgICAgdGhpcy51bmRvU3RhY2sgPSBbXTtcbiAgICAgIHRoaXMucmVkb1N0YWNrID0gW107XG5cbiAgICAgIHRoaXMucmVmcmVzaFRyaWdnZXJzID0gW107XG4gICAgICB0aGlzLmFkZGVycyA9IFtdO1xuXG4gICAgICB0aGlzLmp1c3RBZGRlZEluZGV4ID0gLTE7XG5cbiAgICAgIHZhciBjbG9uZVN0YXRlID0gKCkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhbmd1bGFyLmNvcHkodGhpcy5jb21wb25lbnRzKSkpO1xuICAgICAgdmFyIHB1c2hUb0hpc3RvcnlTdGFja0FuZFJlbWFrZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnVuZG9TdGFjay51bnNoaWZ0KGNsb25lU3RhdGUoKSk7XG4gICAgICAgIHRoaXMucmVkb1N0YWNrID0gW107XG4gICAgICB9O1xuXG4gICAgICBob3RrZXlzLmFkZCh7XG4gICAgICAgIGNvbWJvOiBbJ2N0cmwreicsICdjb21tYW5kK3onXSxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMudW5kbygpXG4gICAgICB9KTtcblxuICAgICAgaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogWydjdHJsK3knLCAnY29tbWFuZCtzaGlmdCt6J10sXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZG8oKVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29weUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICAgICAgQ29udGVudENsaXBib2FyZC5jb3B5KGNvbXBvbmVudCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmlzVGhlcmVBQ29waWVkQ29tcG9uZW50ID0gKCkgPT4gISFDb250ZW50Q2xpcGJvYXJkLnBhc3RlKCk7XG5cbiAgICAgIHRoaXMucGFzdGVDb21wb25lbnRBdCA9IChpZHgsIGFkZFVuZG9TdGF0ZSA9IHRydWUpID0+IHtcbiAgICAgICAgdmFyIGNvcGllZENvbXBvbmVudCA9IENvbnRlbnRDbGlwYm9hcmQucGFzdGUoKTtcbiAgICAgICAgaWYgKCFjb3BpZWRDb21wb25lbnQpIHtcbiAgICAgICAgICB0aHJvdyAnYXR0ZW1wdCB0byBwYXN0ZSBudWxsIGNvbXBvbmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZFVuZG9TdGF0ZSkge1xuICAgICAgICAgIHB1c2hUb0hpc3RvcnlTdGFja0FuZFJlbWFrZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpZHgsIDAsIGNvcGllZENvbXBvbmVudCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVuZG8gPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnVuZG9TdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnJlZG9TdGFjay51bnNoaWZ0KGNsb25lU3RhdGUoKSk7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzID0gdGhpcy51bmRvU3RhY2suc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5yZWRvID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWRvU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy51bmRvU3RhY2sudW5zaGlmdChjbG9uZVN0YXRlKCkpO1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMucmVkb1N0YWNrLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRkVW5kb1N0YXRlID0gKCkgPT4gcHVzaFRvSGlzdG9yeVN0YWNrQW5kUmVtYWtlU3RhdGUoKTtcblxuICAgICAgdGhpcy5yZXBvcnRWYWx1ZUNoYW5nZWQgPSAodmFsdWUsIGluZGV4LCBhZGRVbmRvU3RhdGUgPSB0cnVlKSA9PiB7XG4gICAgICAgIGlmIChhZGRVbmRvU3RhdGUpIHtcbiAgICAgICAgICBwdXNoVG9IaXN0b3J5U3RhY2tBbmRSZW1ha2VTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tpbmRleF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2xlYXJFbXB0eUNvbXBvbmVudHMgPSAoKSA9PiB7XG4gICAgICAgIHZhciBzdHJpcFRhZ3MgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKTtcblxuICAgICAgICB2YXIgZW1wdHlUZXh0Q29tcG9uZW50ID0gKGNvbXApID0+ICEoY29tcC50eXBlID09PSAndGV4dCcgJiYgIXN0cmlwVGFncyhjb21wLnZhbHVlLmh0bWwpICYmICFjb21wLnZhbHVlLmp1c3RBZGRlZCk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50c1xuICAgICAgICAgICAgLmZpbHRlcihlbXB0eVRleHRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkZENvbXBvbmVudCA9ICh0eXBlLCB2YWx1ZSA9IGF2YWlsYWJsZUNvbXBvbmVudHNbdHlwZV0uZGVmYXVsdFZhbHVlLCBpbmRleCA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGgsIGFkZFVuZG9TdGF0ZSA9IHRydWUsIG9wZW5FZGl0UGFuZWwgPSBhdmFpbGFibGVDb21wb25lbnRzW3R5cGVdLmVkaXRvck9wZW5FZGl0UGFuZWxPbkFkZCkgPT4ge1xuICAgICAgICB2YXIgbmV3Q29tcG9uZW50ID0ge3R5cGUsIHZhbHVlfTtcbiAgICAgICAgaWYgKGFkZFVuZG9TdGF0ZSkge1xuICAgICAgICAgIHB1c2hUb0hpc3RvcnlTdGFja0FuZFJlbWFrZVN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmp1c3RBZGRlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHZhbHVlLmp1c3RBZGRlZCA9IHRydWU7IC8vdGhpcyBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBrbm93IGlmIGl0IHdhcyBmcmVzaGx5IGFkZGVkIG9yIGp1c3QgbG9hZGVkLiBQcmV0dHkgc3VyZSBpdCdzIHRoZSBiZXN0IHdheSB0byBkbyBpdC4uLlxuICAgICAgICBpZiAob3BlbkVkaXRQYW5lbCkge1xuICAgICAgICAgIHZhciBjb21wb25lbnREZWZpbml0aW9uID0gYXZhaWxhYmxlQ29tcG9uZW50c1t0eXBlXTtcbiAgICAgICAgICBDb21wb25lbnRFZGl0UGFuZWwub3Blbihjb21wb25lbnREZWZpbml0aW9uLCBuZXdDb21wb25lbnQudmFsdWUpXG4gICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgbmV3Q29tcG9uZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NvbXBvbmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAwLCBuZXdDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhckVtcHR5Q29tcG9uZW50cygpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQgPSAoaWR4LCBhZGRVbmRvU3RhdGUgPSB0cnVlKSA9PiB7XG4gICAgICAgIGlmIChhZGRVbmRvU3RhdGUpIHtcbiAgICAgICAgICBwdXNoVG9IaXN0b3J5U3RhY2tBbmRSZW1ha2VTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhckVtcHR5Q29tcG9uZW50cygpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5maWx0ZXIoKGNvbXAsIGkpID0+IGkgIT09IGlkeCk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KCd0ZXh0Jywge2h0bWw6ICcnfSwgMCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlZnJlc2hDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaFRyaWdnZXJzW3RoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCldID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3BlbkNvbXBvbmVudEVkaXRQYW5lbElmRXhpc3RzID0gKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICB2YXIgaWR4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KTtcbiAgICAgICAgdmFyIGNvbXBvbmVudERlZmluaXRpb24gPSBhdmFpbGFibGVDb21wb25lbnRzW2NvbXBvbmVudC50eXBlXTtcbiAgICAgICAgaWYgKGNvbXBvbmVudERlZmluaXRpb24uZWRpdFBhbmVsVGVtcGxhdGVVcmwpIHtcbiAgICAgICAgICBDb21wb25lbnRFZGl0UGFuZWwub3Blbihjb21wb25lbnREZWZpbml0aW9uLCBjb21wb25lbnQudmFsdWUpXG4gICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXBvcnRWYWx1ZUNoYW5nZWQodmFsdWUsIGlkeCk7XG4gICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaGFzRWRpdFBhbmVsID0gKGNvbXBvbmVudCkgPT4gISFhdmFpbGFibGVDb21wb25lbnRzW2NvbXBvbmVudC50eXBlXS5lZGl0UGFuZWxUZW1wbGF0ZVVybDtcblxuICAgICAgdGhpcy5zb3J0T3B0aW9ucyA9IHtcbiAgICAgICAgaGFuZGxlOiAnLmJ0bi1yZW9yZGVyJyxcbiAgICAgICAgdXBkYXRlOiAoKSA9PiAkdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcHVzaFRvSGlzdG9yeVN0YWNrQW5kUmVtYWtlU3RhdGUoKVxuICAgICAgICB9LCAxKSxcbiAgICAgICAgYXhpczogJ3knLFxuICAgICAgICBpdGVtczogJ2xpLmNvbXBvbmVudC1saXN0LWl0ZW0nXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmdldENvbXBvbmVudERlZmluaXRpb25OYW1lID0gKGNvbXApID0+IGF2YWlsYWJsZUNvbXBvbmVudHNbY29tcC50eXBlXS5uYW1lO1xuICAgIH1cbiAgfTtcbn1cblxuXG5hbmd1bGFyLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcpXG4gIC5kaXJlY3RpdmUoJ2NvbnRlbnRFZGl0b3InLCBDb250ZW50RWRpdG9yRGlyZWN0aXZlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dWwgdWktc29ydGFibGU9XFxcInZtLnNvcnRPcHRpb25zXFxcIiBuZy1tb2RlbD1cXFwidm0uY29tcG9uZW50c1xcXCI+XFxuXFxuICA8bGkgY2xhc3M9XFxcInBsYWNlaG9sZGVyXFxcIiBuZy1pZj1cXFwiIXZtLmNvbXBvbmVudHMubGVuZ3RoXFxcIj5cXG4gICAgTm8gY29tcG9uZW50cyBhZGRlZCB5ZXQuIEdvIGFoZWFkIGFuZCBhZGQgb25lIVxcbiAgPGNvbXBvbmVudC1hZGRlciBpbmRleD1cXFwiMFxcXCI+PC9jb21wb25lbnQtYWRkZXI+XFxuICA8L2xpPlxcblxcbiAgPGxpIG5nLXJlcGVhdD1cXFwiY29tcG9uZW50IGluIHZtLmNvbXBvbmVudHNcXFwiXFxuICAgICAgc2Nyb2xsLXRvLWNvbXBvbmVudD1cXFwidm0uanVzdEFkZGVkSW5kZXggPT09ICRpbmRleFxcXCJcXG4gICAgICBjbGFzcz1cXFwiY29tcG9uZW50LWxpc3QtaXRlbVxcXCI+XFxuICAgIDxhc2lkZSBjbGFzcz1cXFwiY29udHJvbC1idXR0b25zXFxcIj5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuLWRlbGV0ZVxcXCIgbmctY2xpY2s9XFxcInZtLnJlbW92ZUNvbXBvbmVudCgkaW5kZXgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT48L2E+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0bi1lZGl0XFxcIiBuZy1pZj1cXFwidm0uaGFzRWRpdFBhbmVsKGNvbXBvbmVudClcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuQ29tcG9uZW50RWRpdFBhbmVsSWZFeGlzdHMoY29tcG9uZW50KVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9pPjwvYT5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuLWNvcHlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jb3B5Q29tcG9uZW50KGNvbXBvbmVudClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1maWxlcy1vXFxcIj48L2k+PC9hPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4tcmVvcmRlciBoYW5kbGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIj48L2k+PC9hPlxcbiAgICA8L2FzaWRlPlxcbiAgICA8dGVtcGxhdGUtaW5mbyBuZy1pZj1cXFwiY29tcG9uZW50LnRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICBsYW5nPVxcXCJ7e3ZtLmxhbmd9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGVtcGxhdGUtaWQ9XFxcInt7Y29tcG9uZW50LnRlbXBsYXRlLmlkfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLXBhcnQtaW5kZXg9XFxcInt7Y29tcG9uZW50LnRlbXBsYXRlLmluZGV4fX1cXFwiPlxcbiAgICA8L3RlbXBsYXRlLWluZm8+XFxuICAgIDxwIGNsYXNzPVxcXCJjb21wb25lbnQtdHlwZS10aXRsZVxcXCI+e3t2bS5nZXRDb21wb25lbnREZWZpbml0aW9uTmFtZShjb21wb25lbnQpfX08L3A+XFxuICAgIDxlZGl0b3ItY29tcG9uZW50IHR5cGU9XFxcInt7Y29tcG9uZW50LnR5cGV9fVxcXCIgdmFsdWU9XFxcImNvbXBvbmVudC52YWx1ZVxcXCIgaW5kZXg9XFxcInt7JGluZGV4fX1cXFwiIHJlZnJlc2gtdHJpZ2dlcj1cXFwidm0ucmVmcmVzaFRyaWdnZXJzWyRpbmRleF1cXFwiPjwvZWRpdG9yLWNvbXBvbmVudD5cXG4gICAgPGNvbXBvbmVudC1hZGRlciBpbmRleD1cXFwie3skaW5kZXgrMX19XFxcIiBpcy1wYXN0ZS1lbmFibGVkPVxcXCJ2bS5pc1RoZXJlQUNvcGllZENvbXBvbmVudCgpXFxcIj48L2NvbXBvbmVudC1hZGRlcj5cXG4gIDwvbGk+XFxuPC91bD5cXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb21wb25lbnQtZWRpdC1wYW5lbCBtb2RhbC1jb250ZW50XFxcIj5cXG4gIDxmb3JtIHZtc2ctZm9ybSBuZy1zdWJtaXQ9XFxcIiRjbG9zZShwYW5lbC5jdXJyZW50VmFsdWUpXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICA8aDQ+RWRpdCBwYW5lbCAtIHt7cGFuZWwuY29tcG9uZW50TmFtZX19PC9oND5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiIG5nLWluY2x1ZGU9XFxcInBhbmVsLnBhbmVsQm9keVRlbXBsYXRlVXJsXFxcIj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlciBjbGVhcmZpeFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZWRpdC1wYW5lbC1idXR0b25zIHB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmU8L2J1dHRvbj5cXG4gICAgICAgIDxhIG5nLWNsaWNrPVxcXCIkZGlzbWlzcygpXFxcIj5DYW5jZWw8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdhYnJpZWxfR3JpbmJlcmcgb24gNC8xNC8xNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuY2xhc3MgQ29tcG9uZW50RWRpdFBhbmVsIHtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgJG1vZGFsLCBwcml2YXRlICRsb2csIHByaXZhdGUgQ29udGVudEVkaXRvckhlbHBlciwgcHJpdmF0ZSAkcm9vdFNjb3BlKSB7XG5cbiAgfVxuXG4gIG9wZW4oY29tcG9uZW50RGVmaW5pdGlvbjogSUVkaXRvckNvbXBvbmVudERlZmluaXRpb248YW55PiwgdmFsdWUpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICAgIHZhciBwYW5lbFNjb3BlID0gdGhpcy4kcm9vdFNjb3BlLiRuZXcoKTtcblxuICAgICAgcGFuZWxTY29wZS5wYW5lbCA9IHtcbiAgICAgICAgICBwYW5lbEJvZHlUZW1wbGF0ZVVybDogY29tcG9uZW50RGVmaW5pdGlvbi5lZGl0UGFuZWxUZW1wbGF0ZVVybCxcbiAgICAgICAgICBjdXJyZW50VmFsdWU6IGFuZ3VsYXIuY29weSh2YWx1ZSksXG4gICAgICAgICAgY29tcG9uZW50TmFtZTogY29tcG9uZW50RGVmaW5pdGlvbi5uYW1lXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy4kbW9kYWwub3Blbih7XG4gICAgICAgICAgc2NvcGU6IHBhbmVsU2NvcGUsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdlZGl0b3IvZWRpdC1wYW5lbC9jb21wb25lbnQtZWRpdC1wYW5lbC5tb2RhbC5odG1sJyxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzOiAndHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGNvbXBvbmVudERlZmluaXRpb24uZWRpdFBhbmVsQ29udHJvbGxlciB8fCBhbmd1bGFyLm5vb3AsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICB9KS5yZXN1bHQ7XG4gIH1cblxufVxuXG5hbmd1bGFyLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcpXG4gIC5zZXJ2aWNlKCdDb21wb25lbnRFZGl0UGFuZWwnLCBDb21wb25lbnRFZGl0UGFuZWwpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIEVkaXRvckNvbXBvbmVudChDb21wb25lbnRFZGl0b3JSZW5kZXJlcik6bmcuSURpcmVjdGl2ZSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXRvci9lZGl0b3ItY29tcG9uZW50LnRwbC5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ0AnLFxuICAgICAgaW5kZXg6ICdAJyxcbiAgICAgIHZhbHVlOiAnPScsXG4gICAgICByZWZyZXNoVHJpZ2dlcjogJz0nXG4gICAgfSxcbiAgICByZXF1aXJlOiAnXmNvbnRlbnRFZGl0b3InLFxuICAgIGxpbms6IHtcbiAgICAgIHByZShzY29wZTphbnksIGVsZW0sIGF0dHJpYnV0ZXM6bmcuSUF0dHJpYnV0ZXMsIGNvbnRlbnRFZGl0b3JDdHJsKSB7XG4gICAgICAgIHZhciBjb21taXRDaGFuZ2VzID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgY29udGVudEVkaXRvckN0cmwucmVwb3J0VmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBwYXJzZUludChzY29wZS5pbmRleCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgdmFyICRjb21wb25lbnQgPSBDb21wb25lbnRFZGl0b3JSZW5kZXJlci5yZW5kZXIoc2NvcGUudHlwZSwgYW5ndWxhci5jb3B5KHNjb3BlLnZhbHVlKSwgY29tbWl0Q2hhbmdlcywgY29udGVudEVkaXRvckN0cmwsIHBhcnNlSW50KHNjb3BlLmluZGV4KSwgc2NvcGUpO1xuICAgICAgICAgIGVsZW0uZmluZCgnLmNvbXBvbmVudC1ib2R5JylcbiAgICAgICAgICAgIC5lbXB0eSgpXG4gICAgICAgICAgICAuYXBwZW5kKCRjb21wb25lbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlbmRlckNvbXBvbmVudCgpO1xuXG4gICAgICAgIHNjb3BlLiR3YXRjaCgncmVmcmVzaFRyaWdnZXInLCAobmV3VmFsKSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICAgICAgICBzY29wZS5yZWZyZXNoVHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5cbmFuZ3VsYXIubW9kdWxlKCdhbnN3ZXJzQ29udGVudEVkaXRvckludGVybmFsJylcbiAgLmRpcmVjdGl2ZSgnZWRpdG9yQ29tcG9uZW50JywgRWRpdG9yQ29tcG9uZW50KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb21wb25lbnQtYm9keVxcXCIgZGF0YS1jb21wb25lbnQtdHlwZT1cXFwie3t0eXBlfX1cXFwiPlxcblxcbjwvZGl2PlxcblwiO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdhYnJpZWxfR3JpbmJlcmcgb24gNS8xOS8xNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVGVtcGxhdGVJbmZvRGlyZWN0aXZlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvdGVtcGxhdGUtaW5mby5kcnYnKTtcbmltcG9ydCBDb250ZW50RWRpdG9yVGVtcGxhdGVzUHJvdmlkZXIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy90ZW1wbGF0ZXMucHZkJyk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcsIFsnY29udGVudEVkaXRvckh0bWxUZW1wbGF0ZXMnLCAnYW5zd2Vyc0NvbnRlbnRDb3JlJ10pXG4gIC5kaXJlY3RpdmUoJ3RlbXBsYXRlSW5mbycsIFRlbXBsYXRlSW5mb0RpcmVjdGl2ZSlcbiAgLnByb3ZpZGVyKCdDb250ZW50RWRpdG9yVGVtcGxhdGVzJywgQ29udGVudEVkaXRvclRlbXBsYXRlc1Byb3ZpZGVyKTtcblxuLy9hZGQgbW9kdWxlIGRlcGVuZGVuY2llcyAmIGNvbmZpZyBhbmQgcnVuIGJsb2NrcyBpbiB0aGlzIG1vZHVsZVxuLy9sb2FkIG9ubHkgdGhlIGludGVybmFsIG1vZHVsZSBpbiB0ZXN0cyBhbmQgbW9jayBhbnkgbW9kdWxlIGRlcGVuZGVuY3lcbi8vdGhlIG9ubHkgZXhjZXB0aW9uIHRvIGxvYWQgdGhpcyBtb2R1bGUgaW4gdGVzdHMgaW4gdG8gdGVzdCB0aGUgY29uZmlnICYgcnVuIGJsb2Nrc1xuYW5ndWxhclxuICAubW9kdWxlKCdhbnN3ZXJzQ29udGVudEVkaXRvcicsIFsnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcsICd1aS5jb2RlbWlycm9yJywgJ3VpLnNvcnRhYmxlJywgJ3Njcm9sbFRvQ29tcG9uZW50JyxcbiAgICAnY2ZwLmhvdGtleXMnLCAndWkuYm9vdHN0cmFwJywgJ2FuZ3VsYXJGaWxlVXBsb2FkJywgJ2FuZ3VsYXItcmVkYWN0b3InLCAnZ2cudm1zZ3MnXSlcbiAgLmNvbmZpZygoKSA9PiB7XG4gICAgcmV0dXJuO1xuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBUZW1wbGF0ZUluZm9EaXJlY3RpdmUgKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0b3IvdGVtcGxhdGVzL3RlbXBsYXRlcy1pbmZvLnRwbC5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgbGFuZzogJ0AnLFxuICAgICAgdGVtcGxhdGVJZDogJ0AnLFxuICAgICAgdGVtcGxhdGVQYXJ0SW5kZXg6ICdAJ1xuICAgIH0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oQ29udGVudEVkaXRvclRlbXBsYXRlcykge1xuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnQgPSBDb250ZW50RWRpdG9yVGVtcGxhdGVzLmdldFRlbXBsYXRlUGFydEJ5SWQodGhpcy50ZW1wbGF0ZUlkLCBwYXJzZUludCh0aGlzLnRlbXBsYXRlUGFydEluZGV4LCAxMCksIHRoaXMubGFuZyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgPSBUZW1wbGF0ZUluZm9EaXJlY3RpdmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFzaWRlIGNsYXNzPVxcXCJ0ZW1wbGF0ZS1pbmZvXFxcIj5cXG4gICAgICA8c3Ryb25nIGNsYXNzPVxcXCJ0aXRsZVxcXCIgdG9vbHRpcD1cXFwie3s6OnZtLnRlbXBsYXRlUGFydC5kZXNjcmlwdGlvbn19XFxcIj57ezo6dm0udGVtcGxhdGVQYXJ0LnRpdGxlfX08c3BhbiBjbGFzcz1cXFwiZmEgZmEtcXVlc3Rpb24tY2lyY2xlIGljb25cXFwiPjwvc3Bhbj48L3N0cm9uZz5cXG48L2FzaWRlPlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbnRlcmZhY2UgVGVtcGxhdGVJbmZvUGFydCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZW1wbGF0ZXNTZXJ2aWNlIHtcbiAgZ2V0VGVtcGxhdGVQYXJ0QnlJZChpZDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBsYW5nOiBzdHJpbmcpOiBUZW1wbGF0ZUluZm9QYXJ0O1xufVxuXG5pbnRlcmZhY2UgQ29tcFZhbHVlV2l0aFRlbXBsYXRlIHtcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICBpbmRleDogbnVtYmVyO1xuICB0ZW1wbGF0ZUluZm86IFRlbXBsYXRlSW5mb1BhcnQ7XG59XG5cbmludGVyZmFjZSBUZW1wbGF0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgY29tcG9uZW50czogQ29tcFZhbHVlV2l0aFRlbXBsYXRlW107XG59XG5cbmNsYXNzIENvbnRlbnRFZGl0b3JUZW1wbGF0ZXNQcm92aWRlciBpbXBsZW1lbnRzIG5nLklTZXJ2aWNlUHJvdmlkZXIge1xuXG4gIGdldFRlbXBsYXRlOiAoaWQ6IHN0cmluZywgbGFuZzogc3RyaW5nKSA9PiBUZW1wbGF0ZTtcblxuICAkZ2V0KCRsb2c6IG5nLklMb2dTZXJ2aWNlKTogVGVtcGxhdGVzU2VydmljZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFRlbXBsYXRlOiB0aGlzLmdldFRlbXBsYXRlLFxuICAgICAgZ2V0VGVtcGxhdGVQYXJ0QnlJZDogKGlkLCBpbmRleCwgbGFuZykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKGlkLCBsYW5nKVxuICAgICAgICAgIC5jb21wb25lbnRzXG4gICAgICAgICAgLmZpbHRlcigoY29tcCkgPT4gY29tcC5pbmRleCA9PT0gaW5kZXgpWzBdLnRlbXBsYXRlSW5mbztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAkbG9nLmVycm9yKCd1bmFibGUgdG8gZ2V0IHRlbXBsYXRlIHBhcnQgZm9yICcsIGlkLCBpbmRleCwgbGFuZyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0ID0gQ29udGVudEVkaXRvclRlbXBsYXRlc1Byb3ZpZGVyO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInN0ZXAtYnktc3RlcC50aXRsZVwiIDogXCI8c3Ryb25nPlNjaHJpdHQge3tjdXJyZW50U3RlcH19IDwvc3Ryb25nPiB2b24ge3t0b3RhbFN0ZXBzfX0gU2Nocml0dGVuXCIsXG4gIFwic3RlcC1ieS1zdGVwLnNob3J0LXRpdGxlXCIgOiBcIjxzdHJvbmc+U2Nocml0dGUge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwic3RlcC1ieS1zdGVwLnRpdGxlXCIgOiBcIjxzdHJvbmc+U3RlcCB7e2N1cnJlbnRTdGVwfX0gPC9zdHJvbmc+IG9mIHt7dG90YWxTdGVwc319XCIsXG4gIFwic3RlcC1ieS1zdGVwLnNob3J0LXRpdGxlXCIgOiBcIjxzdHJvbmc+U3RlcCB7e2N1cnJlbnRTdGVwfX0ve3t0b3RhbFN0ZXBzfX08L3N0cm9uZz5cIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJzdGVwLWJ5LXN0ZXAudGl0bGVcIiA6IFwiPHN0cm9uZz5QYXNvIHt7Y3VycmVudFN0ZXB9fSAgPC9zdHJvbmc+IGRlIHt7dG90YWxTdGVwc319XCIsXG4gIFwic3RlcC1ieS1zdGVwLnNob3J0LXRpdGxlXCIgOiBcIjxzdHJvbmc+UGFzbyB7e2N1cnJlbnRTdGVwfX0ve3t0b3RhbFN0ZXBzfX08L3N0cm9uZz5cIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJzdGVwLWJ5LXN0ZXAudGl0bGVcIiA6IFwiPHN0cm9uZz7DiXRhcGUge3tjdXJyZW50U3RlcH19IHN1ciB7e3RvdGFsU3RlcHN9fSA8L3N0cm9uZz5cIixcbiAgXCJzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGVcIiA6IFwiPHN0cm9uZz7DiXRhcGUge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwic3RlcC1ieS1zdGVwLnRpdGxlXCIgOiBcIjxzdHJvbmc+UGFzc2FnZ2lvIHt7Y3VycmVudFN0ZXB9fSA8L3N0cm9uZz4gZGkge3t0b3RhbFN0ZXBzfX1cIixcbiAgXCJzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGVcIiA6IFwiPHN0cm9uZz5QYXNzYWdnaW8ge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwic3RlcC1ieS1zdGVwLnRpdGxlXCIgOiBcIjxzdHJvbmc+44K544OG44OD44OXIHt7Y3VycmVudFN0ZXB9fSA8L3N0cm9uZz7jga4ge3t0b3RhbFN0ZXBzfX1cIixcbiAgXCJzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGVcIiA6IFwiPHN0cm9uZz7jgrnjg4bjg4Pjg5cge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwic3RlcC1ieS1zdGVwLnRpdGxlXCIgOiBcIjxzdHJvbmc+e3tjdXJyZW50U3RlcH19IDwvc3Ryb25nPiAve3t0b3RhbFN0ZXBzfX3ri6jqs4RcIixcbiAgXCJzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGVcIiA6IFwiPHN0cm9uZz57e2N1cnJlbnRTdGVwfX0ve3t0b3RhbFN0ZXBzfX3ri6jqs4Q8L3N0cm9uZz5cIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJzdGVwLWJ5LXN0ZXAudGl0bGVcIiA6IFwiPHN0cm9uZz5Lcm9rIHt7Y3VycmVudFN0ZXB9fSA8L3N0cm9uZz4geiB7e3RvdGFsU3RlcHN9fVwiLFxuICBcInN0ZXAtYnktc3RlcC5zaG9ydC10aXRsZVwiIDogXCI8c3Ryb25nPktyb2sge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwic3RlcC1ieS1zdGVwLnRpdGxlXCIgOiBcIjxzdHJvbmc+UGFzc28ge3tjdXJyZW50U3RlcH19IDwvc3Ryb25nPiBkZSB7e3RvdGFsU3RlcHN9fVwiLFxuICBcInN0ZXAtYnktc3RlcC5zaG9ydC10aXRsZVwiIDogXCI8c3Ryb25nPlBhc3NvIHt7Y3VycmVudFN0ZXB9fS97e3RvdGFsU3RlcHN9fTwvc3Ryb25nPlwiXG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInN0ZXAtYnktc3RlcC50aXRsZVwiIDogXCI8c3Ryb25nPtCo0LDQsyB7e2N1cnJlbnRTdGVwfX0gPC9zdHJvbmc+INC40Lcge3t0b3RhbFN0ZXBzfX1cIixcbiAgXCJzdGVwLWJ5LXN0ZXAuc2hvcnQtdGl0bGVcIiA6IFwiPHN0cm9uZz7QqNCw0LMge3tjdXJyZW50U3RlcH19L3t7dG90YWxTdGVwc319PC9zdHJvbmc+XCJcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2FicmllbF9HcmluYmVyZyBvbiA0LzUvMTUuXG4gKi9cbiAndXNlIHN0cmljdCc7XG4gaW1wb3J0IHN0ZXBCeVN0ZXBMYXlvdXRzID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3N0ZXAtYnktc3RlcC9zdGVwLWJ5LXN0ZXAtbGF5b3V0cy52YWwnKTtcbiBhbmd1bGFyLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JJbnRlcm5hbCcpXG4gLmZhY3RvcnkoJ01pZ3JhdG9yJywgZnVuY3Rpb24gKCRodHRwLCBDb250ZW50RWRpdG9ySGVscGVyKSB7XG4gICB2YXIgY29udmVyc2lvbk1hcCA9IHtcbiAgICAgaW1hZ2U6ICgkbm9kZSkgPT4ge1xuICAgICAgIHZhciBpc0ltYWdlID0gJG5vZGUuaXMoJ2ltZycpIHx8ICRub2RlLmNoaWxkcmVuKCkubGVuZ3RoID09PSAxICYmICRub2RlLmZpbmQoJ2ltZycpLmxlbmd0aCA9PT0gMTtcbiAgICAgICB2YXIgJGltZyA9ICRub2RlLmlzKCdpbWcnKSA/ICRub2RlIDogJG5vZGUuZmluZCgnaW1nJyk7XG4gICAgICAgaWYgKCRub2RlLmlzKCdpbWcnKSkge1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgc3JjOiAkbm9kZS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgbGluazogJydcbiAgICAgICAgIH07XG4gICAgICAgfSBlbHNlIGlmICgkbm9kZS5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMSAmJiAkbm9kZS5maW5kKCdpbWcnKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHNyYzogJG5vZGUuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgIGxpbms6ICcnXG4gICAgICAgICB9O1xuICAgICAgIH1cbiAgICAgfSxcbiAgICAgaWZyYW1lOiAkbm9kZSA9PiB7XG4gICAgICAgaWYgKCRub2RlLmlzKCdpZnJhbWUnKSkge1xuICAgICAgICAgdmFyIHNyYzogc3RyaW5nID0gJG5vZGUuYXR0cignc3JjJyk7XG4gICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUludCgkbm9kZS5jc3MoJ3dpZHRoJykpIHx8IHBhcnNlSW50KCRub2RlLmF0dHIoJ3dpZHRoJykpIHx8IDUwMDtcbiAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludCgkbm9kZS5jc3MoJ2hlaWdodCcpKSB8fCBwYXJzZUludCgkbm9kZS5hdHRyKCdoZWlnaHQnKSkgfHwgNTAwO1xuICAgICAgICAgdmFyIHNjcm9sbGluZyA9ICRub2RlLmF0dHIoJ3Njcm9sbGluZycpIHx8ICdhdXRvJztcbiAgICAgICAgIGlmICghc3JjLm1hdGNoKC95b3V0dWJlLmNvbS8pICYmICFzcmMubWF0Y2goL3ZpbWVvLmNvbS8pKSB7XG4gICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgdXJsOiBzcmMsXG4gICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgc2Nyb2xsaW5nOiBzY3JvbGxpbmdcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfSxcbiAgICAgdmlkZW86ICgkbm9kZSkgPT4ge1xuICAgICAgIGlmICgkbm9kZS5pcygnaWZyYW1lJykpIHtcbiAgICAgICAgIHZhciB3aWR0aCA9IHBhcnNlSW50KCRub2RlLmNzcygnd2lkdGgnKSkgfHwgcGFyc2VJbnQoJG5vZGUuYXR0cignd2lkdGgnKSkgfHwgNTAwO1xuICAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KCRub2RlLmNzcygnaGVpZ2h0JykpIHx8IHBhcnNlSW50KCRub2RlLmF0dHIoJ2hlaWdodCcpKSB8fCA1MDA7XG4gICAgICAgICB2YXIgc3JjOiBzdHJpbmcgPSAkbm9kZS5hdHRyKCdzcmMnKTtcbiAgICAgICAgIGlmIChzcmMubWF0Y2goL3lvdXR1YmUuY29tLykgfHwgc3JjLm1hdGNoKC92aW1lby5jb20vKSkge1xuICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgIHVybDogc3JjLFxuICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH0sXG4gICAgIGNvZGU6ICgkbm9kZSkgPT4ge1xuICAgICAgICAvL3RvZG9cbiAgICAgIH0sXG4gICAgICBhbmNob3I6ICgkbm9kZSkgPT4ge1xuICAgICAgICBpZiAoJG5vZGUuaXMoJy5rYi1hbmNob3InKSkge1xuICAgICAgICAgIHZhciB0ZXh0ID0gJG5vZGUudGV4dCgpO1xuICAgICAgICAgIHZhciBpZCA9ICRub2RlLmF0dHIoJ2lkJykgfHwgdGV4dC50cmltKCkucmVwbGFjZSgvWydcIiMhLkBcXCQsJVxcXlxcXFwmKj9cXChcXClcXFtcXF1cXC1cXCs9OlxcLztcXHtcXH1+YF0vaWcsICcnKS5yZXBsYWNlKC8mbmJzcDsvZywgJycpLnJlcGxhY2UoL1xccy9nLCAnLScpLnN1YnN0cigwLCAyNSkudG9Mb3dlckNhc2UoKSArIChNYXRoLnJhbmRvbSgpICogMjAwKS50b0ZpeGVkKDApO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGU6ICgkbm9kZSkgPT4ge1xuICAgICAgICBpZiAoJG5vZGUuaXMoJy5rYi1ub3RlJykpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHRtbDogJG5vZGUuaHRtbCgpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRpcDogKCRub2RlKSA9PiB7XG4gICAgICAgIGlmICgkbm9kZS5pcygnLmtiLXRpcCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0bWw6ICRub2RlLmh0bWwoKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbXBvcnRhbnQ6ICgkbm9kZSkgPT4ge1xuICAgICAgICBpZiAoJG5vZGUuaXMoJy5rYi1pbXBvcnRhbnQnKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodG1sOiAkbm9kZS5odG1sKClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3N0ZXAtYnktc3RlcCc6ICgkbm9kZSkgPT4ge1xuICAgICAgICBpZiAoJG5vZGUuaXMoJy5zdGVwLWJ5LXN0ZXAtd2lkZ2V0JykpIHtcbiAgICAgICAgICB2YXIgc3RlcHMgPSAkbm9kZS5jaGlsZHJlbignLnN0ZXAnKVxuICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICAgICAgICB2YXIgJHN0ZXAgPSAkKHN0ZXApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaHRtbDogJHN0ZXAuZmluZCgnLmRlc2NyaXB0aW9uJykuaHRtbCgpLFxuICAgICAgICAgICAgICBpbWFnZVNyYzogJHN0ZXAuZmluZCgnaW1nJykuYXR0cignc3JjJylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RlcHM6IHN0ZXBzLFxuICAgICAgICAgICAgbGF5b3V0OiBzdGVwQnlTdGVwTGF5b3V0c1swXS5rZXksXG4gICAgICAgICAgICBhbGxvd0NpcmN1bGFyOiAkbm9kZS5hdHRyKCdkYXRhLWFsbG93LWNpcmN1bGFyJykgPT09ICd0cnVlJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0YWJsZTogKCRub2RlKSA9PiB7XG4gICAgICAgIGlmICghJG5vZGUuaXMoJ3RhYmxlJykpIHJldHVybjtcblxuICAgICAgICB2YXIgaGVhZGluZ3MgPSAkbm9kZS5maW5kKCd0cjpmaXJzdCcpXG4gICAgICAgIC5maW5kKCd0aCwgdGQnKVxuICAgICAgICAudG9BcnJheSgpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gJChkYXRhKS50ZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByb3dzID0gJG5vZGUuZmluZCgndHI6Z3QoMCknKVxuICAgICAgICAudG9BcnJheSgpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiAkKHJvdykuZmluZCgndGQnKS50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gJChkYXRhKS50ZXh0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBjb2x1bW5zOiBoZWFkaW5ncy5sZW5ndGgsXG4gICAgICAgICAgIHJvd3M6IHJvd3MubGVuZ3RoLFxuICAgICAgICAgICBoZWFkaW5nczogaGVhZGluZ3MsXG4gICAgICAgICAgIGNlbGxzOiByb3dzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaWdyYXRlT2xkQ29udGVudChvbGRWZXJzaW9uZWRIdG1sKSB7XG4gICAgICAgIHZhciAkbm9kZSA9ICQoJzxkaXYgY2xhc3M9XCJkdW1teVwiPicpLmh0bWwob2xkVmVyc2lvbmVkSHRtbCk7XG4gICAgICAgICRub2RlLmZpbmQoJ2lmcmFtZScpXG4gICAgICAgIC50b0FycmF5KClcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHZhciAkaWZyYW1lID0gJChub2RlKTtcbiAgICAgICAgICB2YXIgJHBhcmVudCA9ICRpZnJhbWUucGFyZW50KCk7XG4gICAgICAgICAgaWYgKCEkcGFyZW50LmlzKCcuZHVtbXknKSkge1xuICAgICAgICAgICAgJGlmcmFtZVxuICAgICAgICAgICAgLmRldGFjaCgpXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoJHBhcmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGV0YWNoaW5nIGlmcmFtZScsICRpZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgICAvL3Vud3JhcCBzdGVwIGJ5IHN0ZXAgY29udGFpbmVyc1xuICAgICAgICAgICRub2RlLmZpbmQoJy5zdGVwLWJ5LXN0ZXAtd2lkZ2V0JylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHNicyA9ICQodGhpcyk7XG4gICAgICAgICAgICB3aGlsZSAoISRzYnMucGFyZW50KCkuaXMoJy5kdW1teScpKSB7XG4gICAgICAgICAgICAgICRzYnMucGFyZW50KCkucmVwbGFjZVdpdGgoJHNicyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgY29tcG9uZW50cyA9ICRub2RlXG4gICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciAkY2hpbGQgPSAkKGNoaWxkKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkY2hpbGQuY2xvbmUoKSkuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIGh0bWwgPSAkKCc8ZGl2PicpLnRleHQodmFsKS5odG1sKCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgaHRtbDogdmFsXG4gICAgICAgICAgICAgICAgfSAvLysgJzxwcmU+PGNvZGU+JyArIGh0bWwgKyAnPC9jb2RlPjwvcHJlPidcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGNvbnZlcnNpb25NYXAsIChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBmbigkY2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXN1bHQudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvL21pZ3JhdGUgb2xkIGtiLW5vdGVzIGluc2lkZSBvbGQgXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgJG5vZGUuZmluZCgnLmtiLW5vdGUnKS5yZW1vdmVDbGFzcygna2Itbm90ZScpLmFkZENsYXNzKCdub3RlJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlLmh0bWwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkY2hpbGQuY2xvbmUoKSkuaHRtbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcblxucmV0dXJuIENvbnRlbnRFZGl0b3JIZWxwZXIuY29uc29saWRhdGVUZXh0Q29tcG9uZW50cyhjb21wb25lbnRzKTtcbn0sXG5jb250ZW50U2VhcmNoKHRlcm0pIHtcbiAgcmV0dXJuICRodHRwLmdldCgnL3N1cHBvcnQvaHRtbDUvX2FwaS9rYlNlYXJjaC9zZWFyY2gnLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB0ZXh0OiB0ZXJtLFxuICAgICAgbGFuZzogJ2VuJyxcbiAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgIHRlbmFudElkOiAnMTIzNDU2NzgtMTIzNC0xMjM0LTEyMzQtMTIzNDU2Nzg5MGFiJ1xuICAgIH1cbiAgfSlcbiAgLnRoZW4ocmVzID0+IHJlcy5kYXRhLnBheWxvYWQuaXRlbXMpO1xufVxufTtcbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnc2Nyb2xsVG9Db21wb25lbnQnLCBbXSlcbi5kaXJlY3RpdmUoJ3Njcm9sbFRvQ29tcG9uZW50JywgZnVuY3Rpb24gKCR0aW1lb3V0LCAkcGFyc2UpIHtcbiAgcmV0dXJuIHtcbiAgICAvL3Njb3BlOiB0cnVlLCAgIC8vIG9wdGlvbmFsbHkgY3JlYXRlIGEgY2hpbGQgc2NvcGVcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICB2YXIgbW9kZWwgPSAkcGFyc2UoYXR0cnMuc2Nyb2xsVG9Db21wb25lbnQpO1xuICAgICAgc2NvcGUuJHdhdGNoKG1vZGVsLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6IGVsZW0ub2Zmc2V0KCkudG9wIC0gMjUwXG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgaWYgKG1vZGVsLmFzc2lnbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZSk7XG4gICAgICAgICAgICAgIG1vZGVsLmFzc2lnbihzY29wZSwgZmFsc2UpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2Fuc3dlcnNDb250ZW50RWRpdG9yVmlld2VySW50ZXJuYWwnKVxuLmZhY3RvcnkoJ0NvbXBvbmVudFZpZXdlclJlbmRlcmVyJywgKCRjb21waWxlLCAkaHR0cCwgJHEsIENvbnRlbnRFZGl0b3JIZWxwZXIsICRyb290U2NvcGUsICRjb250cm9sbGVyLCAkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICB2YXIgYXZhaWxhYmxlQ29tcG9uZW50cyA9IENvbnRlbnRFZGl0b3JIZWxwZXIuY29tcG9uZW50cztcbiAgdmFyIGdldENvbXBvbmVudFRlbXBsYXRlID0gKGNvbXBvbmVudERlZmluaXRpb246IElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPGFueT4pID0+IHtcbiAgICB2YXIgdGVtcGxhdGVVcmwgPSBjb21wb25lbnREZWZpbml0aW9uLnZpZXdlclRlbXBsYXRlVXJsO1xuICAgIGlmICghdGVtcGxhdGVVcmwpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnREZWZpbml0aW9uLnZpZXdlclRlbXBsYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICR0ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZVVybCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXI6ICh0eXBlLCB2YWx1ZSwgcGFyZW50U2NvcGUpID0+IHtcbiAgICAgICAgdmFyIHNjb3BlID0gJHJvb3RTY29wZS4kbmV3KHRydWUsIHBhcmVudFNjb3BlKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudERlZmluaXRpb246IElFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPGFueT4gPSBhdmFpbGFibGVDb21wb25lbnRzW3R5cGVdO1xuXG4gICAgICAgIHZhciB0ZW1wbGF0ZUNvbnRlbnRzID0gZ2V0Q29tcG9uZW50VGVtcGxhdGUoY29tcG9uZW50RGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKCF0ZW1wbGF0ZUNvbnRlbnRzKSB7XG4gICAgICAgICAgdGVtcGxhdGVDb250ZW50cyA9IGNvbXBvbmVudERlZmluaXRpb24udmFsdWVUb0h0bWwodmFsdWUpO1xuICAgICAgICAgIHRlbXBsYXRlQ29udGVudHMgPSAnPHA+JyArIHRlbXBsYXRlQ29udGVudHMgKyAnPC9wPic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50RGVmaW5pdGlvbi52aWV3ZXJQcmVDb21waWxlQ29udHJvbGxlcikge1xuICAgICAgICAgICRjb250cm9sbGVyKGNvbXBvbmVudERlZmluaXRpb24udmlld2VyUHJlQ29tcGlsZUNvbnRyb2xsZXIsIHsgJHNjb3BlOiBzY29wZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkY29tcGlsZShhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGVDb250ZW50cykpKHNjb3BlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50KTtcblxuICAgICAgICB2YXIgY3RybCA9ICRjb250cm9sbGVyKGNvbXBvbmVudERlZmluaXRpb24udmlld2VyQ29udHJvbGxlciB8fCBhbmd1bGFyLm5vb3AsIHtcbiAgICAgICAgICAkc2NvcGU6IHNjb3BlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCAvL2dpdmUgdGhlIGVsZW1lbnQgdG8gdGhlIGNvbnRyb2xsZXIgZm9yIGEgZGlyZWN0aXZlLWxpa2UgZmVlbGluZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3RybC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAvL2FkZCBhIGNvbnRyb2xsZXJBcy1saWtlIHN5bnRheFxuICAgICAgc2NvcGUuY29tcG9uZW50ID0gY3RybDtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gQ29udGVudFZpZXdlckRpcmVjdGl2ZShDb250ZW50RWRpdG9ySGVscGVyKSB7XG4gIHZhciBhdmFpbGFibGVDb21wb25lbnRzOklFZGl0b3JDb21wb25lbnREZWZpbml0aW9uPGFueT5bXSA9IENvbnRlbnRFZGl0b3JIZWxwZXIuY29tcG9uZW50cztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAndmlld2VyL2NvbnRlbnQtdmlld2VyLnRwbC5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgY29tcG9uZW50czogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmdldENvbXBvbmVudERlZmluaXRpb25OYW1lID0gKGNvbXApID0+IGF2YWlsYWJsZUNvbXBvbmVudHNbY29tcC50eXBlXS5uYW1lO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0ID0gQ29udGVudFZpZXdlckRpcmVjdGl2ZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dWw+XFxuICA8bGkgbmctcmVwZWF0PVxcXCJjb21wb25lbnQgaW4gdm0uY29tcG9uZW50c1xcXCJcXG4gICAgICBjbGFzcz1cXFwiY29tcG9uZW50LWxpc3QtaXRlbSBjb21wb25lbnQtdmlld2VyLWNvbnRhaW5lclxcXCI+XFxuICAgIDx2aWV3ZXItY29tcG9uZW50IHR5cGU9XFxcInt7Y29tcG9uZW50LnR5cGV9fVxcXCIgdmFsdWU9XFxcImNvbXBvbmVudC52YWx1ZVxcXCI+PC92aWV3ZXItY29tcG9uZW50PlxcbiAgPC9saT5cXG48L3VsPlxcblwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIFZpZXdlckNvbXBvbmVudERpcmVjdGl2ZShDb21wb25lbnRWaWV3ZXJSZW5kZXJlcik6bmcuSURpcmVjdGl2ZSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdlci92aWV3ZXItY29tcG9uZW50LnRwbC5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ0AnLFxuICAgICAgaW5kZXg6ICdAJyxcbiAgICAgIHZhbHVlOiAnPScsXG4gICAgICByZWZyZXNoVHJpZ2dlcjogJz0nXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6YW55LCBlbGVtKSB7XG4gICAgICB2YXIgJGNvbXBvbmVudCA9IENvbXBvbmVudFZpZXdlclJlbmRlcmVyLnJlbmRlcihzY29wZS50eXBlLCBhbmd1bGFyLmNvcHkoc2NvcGUudmFsdWUpLCBzY29wZSk7XG4gICAgICBlbGVtLmZpbmQoJy5jb21wb25lbnQtYm9keScpXG4gICAgICAgIC5lbXB0eSgpXG4gICAgICAgIC5hcHBlbmQoJGNvbXBvbmVudCk7XG4gICAgfVxuICB9O1xufVxuXG5cbmV4cG9ydCA9IFZpZXdlckNvbXBvbmVudERpcmVjdGl2ZTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHYWJyaWVsX0dyaW5iZXJnIG9uIDUvMTkvMTUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZpZXdlckNvbXBvbmVudERpcmVjdGl2ZSA9IHJlcXVpcmUoJy4vdmlld2VyLWNvbXBvbmVudC5kcnYnKTtcbmltcG9ydCBDb250ZW50Vmlld2VyRGlyZWN0aXZlID0gcmVxdWlyZSgnLi9jb250ZW50LXZpZXdlci5kcnYnKTtcbmFuZ3VsYXJcbiAgLm1vZHVsZSgnYW5zd2Vyc0NvbnRlbnRFZGl0b3JWaWV3ZXJJbnRlcm5hbCcsIFsnYW5zd2Vyc0NvbnRlbnRDb3JlJywgJ2NvbnRlbnRFZGl0b3JIdG1sVGVtcGxhdGVzJ10pXG4gIC5kaXJlY3RpdmUoJ3ZpZXdlckNvbXBvbmVudCcsIFZpZXdlckNvbXBvbmVudERpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnY29udGVudFZpZXdlcicsIENvbnRlbnRWaWV3ZXJEaXJlY3RpdmUpO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2Fuc3dlcnNDb250ZW50RWRpdG9yVmlld2VyJywgWydhbnN3ZXJzQ29udGVudEVkaXRvclZpZXdlckludGVybmFsJywgJ3VpLmNvZGVtaXJyb3InXSk7XG4iXX0=
