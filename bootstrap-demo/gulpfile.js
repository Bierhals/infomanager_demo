const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const merge = require('merge-stream');

// move js files to the dist-directory
gulp.task('js', () => {
  const bootstrap = gulp.src('node_modules/bootstrap/dist/js/bootstrap.min*')
    .pipe(gulp.dest('dist/js/bootstrap'));
  const popper = gulp.src('node_modules/popper.js/dist/umd/popper.min*')
    .pipe(gulp.dest('dist/js/popper'));
  const jquery = gulp.src('node_modules/jquery/dist/jquery.min*')
    .pipe(gulp.dest('dist/js/jquery'));
  const fontawesome = gulp.src('node_modules/@fortawesome/fontawesome-free/js/all.min*')
    .pipe(gulp.dest('dist/js/fontawesome'));

  return merge(bootstrap, popper, jquery, fontawesome);
});

// move webfonts files to the dist-directory
gulp.task('webfonts', () => gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
  .pipe(gulp.dest('dist/webfonts')));

// convert scss files to css
gulp.task('sass', () => gulp.src('src/scss/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream()));

// move html files to the dist-directory
gulp.task('html', () => gulp.src('./src/**/*.html', { base: './src' })
  .pipe(gulp.dest('dist')));

// move images to the dist-directory
gulp.task('img', () => gulp.src('./src/img/**/*', { base: './src' })
  .pipe(gulp.dest('dist')));


gulp.task('watch', () => {
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
  gulp.watch('src/**/*.html', gulp.series('html')).on('change', browserSync.reload);
});

// server implementation
gulp.task('serve', () => browserSync.init({
  server: './dist',
}));

// start server
gulp.task('default', gulp.series('js', 'webfonts', 'img', 'sass', 'html', gulp.parallel('watch', 'serve')));
