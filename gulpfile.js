// 'use strict';

//This is a Gulp file 
// The goal is to use Gulp to organize all of my dependencies

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/styles.scss')
    .pipe(sass())
     .pipe(gulp.dest('src/css'))
});