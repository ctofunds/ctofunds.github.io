const gulp = require('gulp')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

gulp.task('css', function () {
  return gulp.src('assets/index.src.css')
    .pipe(rename('index.css'))
    .pipe(postcss([
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(gulp.dest('assets'))
})

gulp.task('generate-service-worker', function (callback) {
  var path = require('path')
  var swPrecache = require('sw-precache')
  var rootDir = '.'

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [
      rootDir + '/index.html',
      rootDir + '/assets/**/*.{js,html,css,png,jpg,gif}'
    ],
    stripPrefix: rootDir
  }, callback)
})

gulp.task('build', ['css', 'generate-service-worker'])
