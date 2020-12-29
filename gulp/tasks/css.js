module.exports = function(){
	$.gulp.task('css:libs', function(){
		return $.gulp.src([
			'src/static/libs/normalize/normalize.css',
			'src/static/libs/pgs-panel/css/pgs-main.css',
			'src/static/libs/pgs-panel/css/jquery.mCustomScrollbar.css',
			'src/static/libs/bootstrap/css/bootstrap.min.css',
			// 'src/static/libs/bootstrap/css/bootstrap-grid.min.css'
			// 'src/static/libs/bootstrap/bootstrap-grid.min.css'
			// 'src/static/libs/swiper-master/package/css/swiper.min.css',
			// 'src/static/libs/fancybox-master/dist/jquery.fancybox.min.css',
			// 'src/static/libs/jquery.scrollbar-gh-pages/jquery.scrollbar.css'
		])
		
		.pipe($.concat('libs.css'))
		.pipe($.sourcemaps.write())
		.pipe($.cssnano())
		.pipe($.rename({suffix: '.min'}))
		.pipe($.gulp.dest('build/css'))
		.pipe($.browserSync.reload({
			stream: true
		}));
	});
};