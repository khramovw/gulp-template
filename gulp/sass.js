var gulp         = require('gulp');
var sass         = require('gulp-sass');

var postcss      = require('gulp-postcss');
// var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.watch('src/scss/**/*.scss', ['sass']);
