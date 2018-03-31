const gulpRequireTasks = require('gulp-require-tasks');
const browserify = require('browserify');
const babelify   = require('babelify');

const config = {
    js: {
        src: '/assets/scripts/main.js',       // Entry point
        outputDir: '/dist/assets/scripts/',  // Directory to save bundle to
        mapDir: './maps/',      // Subdirectory to save maps to
        outputFile: 'main.js' // Name to use for bundle
    },
};

global.BASE_PATH = __dirname;
global.SOURCES_BASE_PATH = __dirname + '/src';
global.BROWSERIFY = browserify({
  entries: global.SOURCES_BASE_PATH + config.js.src,
  debug: true,
  transform: [babelify.configure({
    presets: ['es2015']
  })]
});

global.ASSET_TYPES = '[ico, gif, jpg, png]';

gulpRequireTasks();
