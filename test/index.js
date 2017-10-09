var test = require('tape')
var fromString = require('from2-string')
var concat = require('concat-stream')
var minify = require('../')

test('minifies html', function (t) {
  t.plan(1)

  fromString(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1> World </h1>
      </body>
    </html>
  `).pipe(
    minify({
      collapseWhitespace: true,
      removeOptionalTags: true
    })
  ).pipe(concat({ encoding: 'string' }, onfinish))

  function onfinish (result) {
    t.equal(result, '<!DOCTYPE html><title>Hello</title><h1>World</h1>')
  }
})
