var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    beautify = require('gulp-beautify'),
    concat = require('gulp-concat');
    fileArr = ['./scripts/main.js','./scripts/node.js',
    './scripts/bst.js','./scripts/bst-search.js','./scripts/bst-delete.js',
    './scripts/line.js','./scripts/circle.js', './scripts/textMarker.js'];
gulp.task('scripts', function() {
  gulp.src(fileArr)
    .pipe(concat('bundleApp.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});