module.exports = function(){
	$.gulp.task('sass', function(){
		return $.gulp.src('src/static/sass/**/*.sass')
		.pipe($.sourcemaps.init())
		.pipe($.sass({outputStyle: 'expand'}).on("error", $.notify.onError()))
		.pipe($.autoprefixer(['last 15 versions']))
		.pipe($.sourcemaps.write())
		.pipe($.cssnano({zindex: false})) // Сжимаем 
		.pipe($.rename({suffix: '.min'}))
		.pipe($.gulp.dest('build/css'))
		.pipe($.browserSync.reload({
			stream: true
		}));
	});
};