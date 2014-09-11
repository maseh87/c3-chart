var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

var paths = {
  scripts: ['src/lib/d3/d3.js', 'src/lib/c3/c3.js', 'src/c3-chart.js']
};

gulp.task('jshint', function() {
  return gulp.src(paths.scripts)
    .pipe($.jshint())
    .pipe($.jshint({reporter: 'jshint-stylish'}))
    .pipe($.notify({message: 'Linting Completed'}));
});

gulp.task('concat', function() {
  return gulp.src(paths.scripts)
    .pipe($.concat('c3-chart.js'))
    .pipe(gulp.dest('dist/'))
    .pipe($.notify({message: 'Done Concating'}));
});

//task to tell travis to run karma start and run in phantom.js
gulp.task('test', $.shell.task([
  'karma start karma.conf.js --browsers Firefox --single-run'
]));

gulp.task('watch', function(){
  $.watch(paths.source, ['default']);
});

gulp.task('default', ['jshint', 'concat']);
