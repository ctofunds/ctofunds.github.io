const gulp = require('gulp')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

gulp.task('css', function () {
  return gulp.src('assets/index.src.css')
    .pipe(rename('index.css'))
    .pipe(postcss([
      require('autoprefixer')({ browsers: ['last 3 versions'] }),
      require('cssnano')
    ]))
    .pipe(gulp.dest('assets'))
})

gulp.task('generate-service-worker', function (callback) {
  var path = require('path')
  var swPrecache = require('sw-precache')
  var rootDir = '.'

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [
      // rootDir + '/index.html',
      rootDir + '/assets/**/*.{js,html,css,png,jpg,gif}'
    ],
    stripPrefix: rootDir
  }, callback)
})

gulp.task('build', ['css', 'generate-service-worker'])

gulp.task('watch', function () {
  return gulp.watch([
    'index.html',
    'assets/**/*',
    '!assets/index.css'
  ], ['build'])
})
