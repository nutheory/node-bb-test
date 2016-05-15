var gulp = require('gulp'),
    paths = require('./paths')

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
}

// Watch for changes and run any task needed on file save
// Start with "gulp watch"
gulp.task('watch', ['styles', 'views', 'js', 'libs', 'backbone', 'images'], function() {
  gulp.watch(paths.sBackbone, ['backbone']).on('change', reportChange)
  gulp.watch(paths.sJS, ['js']).on('change', reportChange)
  gulp.watch(paths.sJS_lib, ['libs']).on('change', reportChange)
  gulp.watch(paths.scss ,['styles']).on('change', reportChange)
  gulp.watch(paths.sHTML, ['views']).on('change', reportChange)
  gulp.watch(paths.imagesRaw, ['images']).on('change', reportChange)
})
