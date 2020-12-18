'use strict';

global.$ = {
	gulp: require('gulp'),
	pug: require('gulp-pug'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	notify: require('gulp-notify'),
	browserSync: require('browser-sync').create(),
	sourcemaps: require('gulp-sourcemaps'),
	imagemin: require('gulp-imagemin'),
	newer: require('gulp-newer'), 
	del: require('del'),
	uglify: require('gulp-uglifyjs'),
	concat: require('gulp-concat'),
	svgSprite: require('gulp-svg-sprite'),
	svgmin: require('gulp-svgmin'),
	cheerio: require('gulp-cheerio'),
	clean: require('gulp-cheerio-clean-svg'),
    replace: require('gulp-replace'),
	cssnano: require('gulp-cssnano'),
	rename: require('gulp-rename'),
	imageminJpegRecompress: require('imagemin-jpeg-recompress'),
	imageminPngquant: require('imagemin-pngquant'),
	// pngquant: require('gulp-pngquant'),
	// mozjpeg: require('@vslutov/gulp-mozjpeg'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath){
	require(taskPath)();
});

$.gulp.task('removebuild', function(done) { 
	function clean(){
		return $.del.sync('build/**'); 
	}
	clean();
	done();
});

$.gulp.task('build', $.gulp.series(
	'removebuild',
	$.gulp.parallel('pug', 'sass', 'scripts:libs', 'scripts', 'css:libs', 'images', 'fonts', 'svgSpriteBuild')
));

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:libs', 'scripts', 'css:libs', 'images', 'fonts', 'svgSpriteBuild'), 
	$.gulp.parallel('browser-sync', 'watch'))
);