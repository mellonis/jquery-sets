'use strict';

// obvious comment
// new obvious comment

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('uglify', function () {
   return gulp.src('src/*.js')
       .pipe(gulp.dest('dist'))
       .pipe(uglify())
       .pipe(rename({
          extname: '.min.js'
       }))
       .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['uglify']);

gulp.task('default', ['dist']);

// new not obvious comment