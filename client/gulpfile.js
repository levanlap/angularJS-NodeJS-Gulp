var typescript = require('gulp-tsc');
 // include gulp
var gulp = require('gulp'); 
gulp.task('compile', function(){
  gulp.src(['app/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('build/'))
});

// include plug-ins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
// JS concat by order, strip debugging and minify

gulp.task('scripts', function () {
  gulp.src(['build/**/*.js'])
    .pipe(concat('frameworkscript.js'))
    .pipe(gulp.dest('build/'));
});

var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
 
// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  gulp.src(['app/**/*.html'])
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// copy file language
gulp.task('copyfolder', function() {
  gulp.src(['app/**/*.properties'])
    .pipe(gulp.dest('build/'));
});

// default gulp task
gulp.task('default', ['compile', 'htmlpage', 'scripts'], function() {
  // watch for HTML changes
  gulp.watch('app/**/*.html', function() {
    gulp.run('htmlpage');
  });
 
  // watch for JS changes
  gulp.watch('app/**/*.ts', function() {
    gulp.run('compile');
  });
 
  // watch for CSS changes
  gulp.watch('build/**/*.js', function() {
    gulp.run('scripts');
  });
  
   // watch for language changes
  gulp.watch('app/**/*.properties', function() {
    gulp.run('copyfolder');
  });
});