const babelify   = require('babelify');
const browserify = require('browserify');
const buffer     = require('vinyl-buffer');
const coffeeify  = require('coffeeify');
const gulp       = require('gulp');
const gutil      = require('gulp-util');
const livereload = require('gulp-livereload');
const merge      = require('merge');
const rename     = require('gulp-rename');
const source     = require('vinyl-source-stream');
const sourceMaps = require('gulp-sourcemaps');
const watchify   = require('watchify');

const config = {
    js: {
        src: 'src/assets/scripts/main.js',       // Entry point
        outputDir: '/dist/assets/scripts/',  // Directory to save bundle to
        mapDir: './maps/',      // Subdirectory to save maps to
        outputFile: 'main.js' // Name to use for bundle
    },
};

module.exports = gulp =>
  gulp.src(global.SOURCES_BASE_PATH + config.js.sr)
  .transform(coffeeify)
  .transform(babelify, { presets : [ 'es2015' ] });
    browserify(config.js.src)
    .bundle()
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    .pipe(sourceMaps.init({ loadMaps : true }))
    .pipe(sourceMaps.write(config.js.mapDir))
    .pipe(global.BROWSER_SYNC.stream({ match: '**/*.css' }));


    //
    // function bundle(bundler) {
    //   bundler
    //     .bundle()
    //     .pipe(source(config.js.src))
    //     .pipe(buffer())
    //     .pipe(rename(config.js.outputFile))
    //     .pipe(sourceMaps.init({
    //       loadMaps: true
    //     }))
    //     .pipe(sourceMaps.write(config.js.mapDir))
    //     .pipe(gulp.dest(config.js.outputDir))
    //     .pipe(global.BROWSER_SYNC.stream({ match: '**/*.css' }));
    // }
    //
    // var bundler = browserify(config.js.src)
    //                 .transform(coffeeify)
    //                 .transform(babelify, {
    //                   presets: ['es2015']
    //                 });
    //
    //
    //
    // module.exports = (gulp, bundler) =>
    //   gulp.src(global.SOURCES_BASE_PATH + config.js.src)
    //   .bundle(bundler)
