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
