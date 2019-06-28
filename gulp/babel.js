var gulp  = require("gulp");
var babel = require("gulp-babel");

gulp.task('babel', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.watch('src/js/**/*.js', ["babel"]);
