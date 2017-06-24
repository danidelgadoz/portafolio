const gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('serve', () => {
	browserSync.init({
		server: './',
		port: 3010
	});

	gulp.watch('index.html').on('change', browserSync.reload);	
	gulp.watch('css/*.css').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);	
	gulp.watch('img/*').on('change', browserSync.reload);
});