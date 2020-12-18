module.exports = function(){
	$.gulp.task('svgSpriteBuild', function () {
		return $.gulp.src('src/static/images/icons/*.svg')
		.pipe($.cheerio($.clean()))
		.pipe($.replace('&gt;', '>'))
		.pipe($.svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					render: {
						sass: {
							dest:'../../../sass/_sprite.sass',
							template: "src/static/sass/_mixins/_sprite_template.sass"
						}
					}
				}
			}
		}))
		.pipe($.gulp.dest('src/static/images/sprite/'));
	});
}
