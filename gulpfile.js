var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');


// Load plugins
var $ = require('gulp-load-plugins')();

/* es6 */
gulp.task('es6', function() {

	return gulp.src("src/**/*.js")
		.pipe($.plumber())
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe(concat("hKit-body.js"))
		.pipe(gulp.dest('dist'));
});

gulp.task("uglify",function(){
	return gulp.src("dist/hKit.js")
		.pipe(uglify())
		.pipe(rename("hKit.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("concat",function(){
	return gulp.src(["dist/head.js","dist/hKit-body.js","dist/footer.js"])
	.pipe(concat("hKit.js"))
	.pipe(gulp.dest("dist"));
});

gulp.task("bulid",['concat','uglify'],function(){
	console.log("编译完成");
});

gulp.task('watch', ['bulid'], function() {
	gulp.watch(['src/**/*.js','dist/footer.js','dist/head.js'], ['bulid']);
});