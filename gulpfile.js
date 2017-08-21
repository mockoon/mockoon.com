const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('compile', () => {
  return gulp.src(['./src/styles.scss'])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./www'));
})

gulp.task('default', ['compile'], () => {
  gulp.watch([
    './src/**/*.scss',
    './src/**/*.sass'
  ], ['compile']);
});
