var gulp = require('gulp'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat'),
    vinylPaths = require('vinyl-paths'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    paths = require('./paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    del = require('del'),
    assign = Object.assign || require('object.assign')

gulp.task('clean', function() {
  gulp.src('/dist/*')
    .pipe(vinylPaths(del))
    .pipe(notify({ message: 'Dist folder emptied' }))
})

gulp.task('images', function() {
	gulp.src(paths.imagesRaw)
		// .pipe(changed(paths.imagesFinal))
		.pipe(imagemin())
		.pipe(gulp.dest(paths.imagesFinal))
		.pipe(notify({ message: 'Images task complete' }))
})

gulp.task('styles', function() {
  gulp.src(paths.scss)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(notify({ message: 'Converted SCSS' }))
})

gulp.task('views', function() {
  gulp.src(paths.sHTML)
    .pipe(gulp.dest(paths.dHTML))
    .pipe(notify({ message: 'Moved HTML' }))
})

gulp.task('backbone', function() {
  gulp.src(paths.sBackbone)
    .pipe(gulp.dest(paths.dBackbone))
    .pipe(notify({ message: 'Moved Backbone' }))
})

gulp.task('js', function() {
  gulp.src(paths.sJS)
    .pipe(gulp.dest(paths.dJS))
    .pipe(notify({ message: 'Moved JS' }))
})

gulp.task('libs', function() {
  gulp.src(paths.sJS_lib)
    .pipe(gulp.dest(paths.dJS_lib))
    .pipe(notify({ message: 'Moved JS Libs' }))
})

// gulp.task('build', function(callback) {
//   return runSequence(
//     'clean',
//     ['views', 'js', 'libs', 'styles', 'images'],
//     callback
//   )
// })
