module.exports = function(){
	$.gulp.task('watch', function(){
		$.gulp.watch('src/pug/layout/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/pug/pages/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass'));
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'));
		$.gulp.watch('src/static/images/**/*.png', $.gulp.series('images'));
		$.gulp.watch('src/static/images/**/*.jpg', $.gulp.series('images'));
		$.gulp.watch('src/static/images/**/*.svg', $.gulp.series('images'));
		$.gulp.watch('src/static/images/**/*.gif', $.gulp.series('images'));
		$.gulp.watch('src/static/fonts/**/*.eot', $.gulp.series('fonts'));
		$.gulp.watch('src/static/fonts/**/*.ttf', $.gulp.series('fonts'));
		$.gulp.watch('src/static/fonts/**/*.woff', $.gulp.series('fonts'));
	});
};