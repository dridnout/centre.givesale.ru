module.exports = function(){
	$.gulp.task('scripts:libs', function(){
		return $.gulp.src([
			'src/static/libs/jquery/dist/jquery.min.js',
			'src/static/libs/pgs-panel/js/pgs-main.js',
			'src/static/libs/pgs-panel/js/jquery.mCustomScrollbar.concat.min.js',
			// 'src/static/libs/swiper-master/package/js/swiper.min.js',
			'src/static/libs/enquire/enquire.min.js',
			// 'src/static/libs/fancybox-master/dist/jquery.fancybox.min.js',
			// 'src/static/libs/inputmask/jquery.inputmask.js',
			// 'src/static/libs/rating/rater.js',
			// 'src/static/libs/jquery-doubletaptogo-master/dist/jquery.dcd.doubletaptogo.min.js',
			'src/static/libs/svg4everybody/svg4everybody.min.js',
			// 'src/static/libs/sticky-js-master/dist/sticky.min.js',
			// 'src/static/libs/Columnizer-jQuery-Plugin-master/src/jquery.columnizer.min.js',
			// 'src/static/libs/sticky/uikit.min.js'
			// 'src/static/libs/jquery.scrollbar-gh-pages/jquery.scrollbar.js'
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