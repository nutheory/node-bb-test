var path = require('path'),
    appRoot = './src/',
    outputRoot = './dist/'

// Convenience module for organizing dist directory 
module.exports = {
  sBackbone:      appRoot + 'backbone/**/*',
  dBackbone:      outputRoot,
  sJS:            appRoot + 'js/*.{js, min.js}',
  dJS:            outputRoot + 'js/',
  sJS_lib:        appRoot + 'js/lib/*.{js, min.js}',
  dJS_lib:        outputRoot + 'js/lib/',
  sHTML:          appRoot + 'views/*.hbs',
  dHTML:          outputRoot,
  scss:           appRoot + 'stylesheets/*.{scss, css}',
  css:            outputRoot + 'css/',
  imagesRaw:      appRoot + 'images/*.png',
  imagesFinal:    outputRoot + 'images/'
}
