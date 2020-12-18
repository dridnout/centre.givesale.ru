module.exports = function(){
	$.gulp.task('fonts', function() {
		return $.gulp.src('src/static/fonts/**/*')
		.pipe($.newer('build/fonts'))
		.pipe($.gulp.dest('build/fonts'))
		.pipe($.browserSync.reload({
			stream: true
		}));
	});
};