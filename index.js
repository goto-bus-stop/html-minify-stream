var through = require('through2')
var minify = require('html-minifier').minify

module.exports = function (options) {
  var html = ''
  return through(onwrite, onend)

  function onwrite (chunk, enc, cb) {
    html += chunk
    cb(null)
  }

  function onend (cb) {
    var minified = minify(html, options)
    this.push(Buffer.from(minified))
    cb()
  }
}
