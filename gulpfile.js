'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('webpackdev', function() {
  return gulp.src('app/js/controller.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('copy', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('build', ['copy', 'webpackdev', 'sass']);
gulp.task('default', ['build']);


