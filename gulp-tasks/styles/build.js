const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

module.exports = gulp =>
  gulp.src(global.SOURCES_BASE_PATH + '/assets/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(global.BASE_PATH + '/dist/assets/styles'))
    .pipe(global.BROWSER_SYNC.stream({ match: '**/*.css' }))
;
