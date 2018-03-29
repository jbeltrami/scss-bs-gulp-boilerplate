const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');

module.exports = gulp =>
  gulp.src([
    global.SOURCES_BASE_PATH + '/*.njk',
    global.SOURCES_BASE_PATH + '/pages/**/*.njk',
  ])
    .pipe(data(function () {
      return require(global.SOURCES_BASE_PATH + '/data/config.json');
    }))
    .pipe(nunjucksRender({
      path: [global.SOURCES_BASE_PATH + '/templates'],
    }))
    .pipe(gulp.dest(global.BASE_PATH + '/dist'))
;
