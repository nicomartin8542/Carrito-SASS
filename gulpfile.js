const { src } = require('gulp');
const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');


function css() {

    return gulp
        .src('scss/app.scss')
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', //nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function watch() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}


//Registrar funciones como tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watch));