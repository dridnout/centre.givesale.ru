module.exports = function(){
	$.gulp.task('scripts:libs', function(){
		return $.gulp.src([
			'src/static/libs/jquery/dist/jquery.min.js',
			'src/static/libs/pgs-panel/js/pgs-main.js',
			'src/static/libs/bootstrap/js/bootstrap.min.js',
			'src/static/libs/pgs-panel/js/jquery.mCustomScrollbar.concat.min.js',
			'src/static/libs/svg4everybody/svg4everybody.min.js'
		])
		.pipe($.concat('libs.min.js'))
		.pipe($.uglify()) 
		.pipe($.gulp.dest('build/js'))
		.pipe($.browserSync.reload({
			stream: true
		}));
	});

	$.gulp.task('scripts', function(){
		return $.gulp.src([
			'src/static/js/*.js'
			
		])
		.pipe($.gulp.dest('build/js'))
		.pipe($.browserSync.reload({
			stream: true
		}));
	});
};