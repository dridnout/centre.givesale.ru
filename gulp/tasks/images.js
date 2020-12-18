module.exports = function(){
		$.gulp.task('images', function() {
				return $.gulp.src('src/static/images/**/*')
				.pipe($.newer('build/images'))
				.pipe($.imagemin([
						$.imagemin.gifsicle({interlaced: true}),
						$.imageminJpegRecompress({
							progressive: true,
							max: 80,
							min: 70
						}),
						$.imageminPngquant({plugins: [{quality: '80'}]}),
						$.imagemin.svgo({plugins: [{removeViewBox: true}]})
					]))
				.pipe($.gulp.dest('build/images'))
				.pipe($.browserSync.reload({
						stream: true
				}));
		});
};