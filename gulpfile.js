/* GULP task file */
var gulp = require('gulp'),
	jade = require('gulp-jade'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	stylus = require('gulp-stylus')
	uglify = require('gulp-uglify');


/* compile jade */
gulp.task('app:templates', function() {
	return gulp.src('./app/jade/**/*.jade')
		.pipe(jade({
			client: false
		}))
		.pipe(gulp.dest('./public/'))
});

/* build js */
gulp.task('app:js', function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest('./public/assets/js/'));
});

/* jsHint */
gulp.task('app:hintjs', function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish')); // build-in default
		//.pipe(jshint.reporter('fail'));
});

gulp.task('app:styles', function(){
	return gulp.src('./app/styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/assets/css/'));
});

/* ### DEFAULT ### */
gulp.task('default', ['app:templates', 'app:js', 'app:styles', 'app:hintjs']);

/* ### JSHINT only ###*/
gulp.task('hintjs', ['app:hintjs']);
