var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

var paths = {
  scripts: ['src/lib/d3/d3.js', 'src/lib/c3/c3.js', 'src/c3-chart.js']
};

gulp.task('jshint', function() {
  return gulp.src(paths.scripts)
    .pipe($.jshint())
    .pipe($.jshint({reporter: 'jshint-stylish'}));
});

gulp.task('concat', function() {
  return gulp.src(paths.scripts)
    .pipe($.concat('c3-chart.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['jshint', 'concat']);
