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
  .transform(coffeeify)      //  Chain transformations: First, coffeeify . . .
  .transform(babelify, { presets : [ 'es2015' ] });  // Then, babelify, with ES2015 preset
    browserify(config.js.src)
    .bundle()                                                        // Start bundle
    .pipe(source(config.js.src))                        // Entry point
    .pipe(buffer())                                               // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(global.BASE_PATH + config.js.outputDir))        // Save 'bundle' to build/
    .pipe(global.BROWSER_SYNC.stream({ match: '**/*.css' }));
