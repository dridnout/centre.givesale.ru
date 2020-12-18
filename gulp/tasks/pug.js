module.exports = function(){
	$.gulp.task('pug', function(){
		return $.gulp.src('src/pug/pages/*.pug')
		.pipe($.pug({
			pretty: true
		}))
		.pipe($.gulp.dest('build'))
		.on('end', $.browserSync.reload);
	});
};