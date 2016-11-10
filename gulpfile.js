var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({port: 1100,livereload: true});
});
 
gulp.task('default', ['connect']);
