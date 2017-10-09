# html-minify-stream

minify html in a stream using html-minifier.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/html-minify-stream.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/html-minify-stream
[travis-image]: https://img.shields.io/travis/goto-bus-stop/html-minify-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/html-minify-stream
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install html-minify-stream
```

## Usage

```js
var htmlMinifyStream = require('html-minify-stream')

fs.createReadStream('index.html')
  .pipe(htmlMinifyStream({
    collapseWhitespace: true,
    removeOptionalTags: true
  }))
  .pipe(fs.createWriteStream('dist/index.html'))
```

## API

### `htmlMinifyStream(?options)`

Create a new minify stream. Write an html document to it. `options` is an
options object for [html-minifier](https://github.com/kangax/html-minifier).

## License

[MIT](LICENSE.md)
