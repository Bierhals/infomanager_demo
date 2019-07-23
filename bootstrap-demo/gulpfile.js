var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//convert scss files to css
gulp.task('sass', function () {
  return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

//move js files to the src
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min*', 'node_modules/popper.js/dist/umd/popper.min*', 'node_modules/jquery/dist/jquery.min*', 'node_modules/@fortawesome/fontawesome-free/js/all.min.js'])
    .pipe(gulp.dest('src/js'));
    //.pipe(browserSync.stream());
});

//move webfonts files to the src
gulp.task('webfonts', function () {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
    .pipe(gulp.dest('src/webfonts'));
    //.pipe(browserSync.stream());
});


gulp.task('watch', function () {
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

//server implementation
gulp.task('serve', function () {
  browserSync.init({
    server: "./src"
  });
});

//start server
gulp.task('default', gulp.series('js', 'webfonts', 'sass', gulp.parallel('watch', 'serve')));