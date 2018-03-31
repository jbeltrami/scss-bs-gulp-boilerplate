module.exports = {
  deps: ['styles:clean', 'styles:build', 'build:assets', 'build:html', 'scripts:build'],
  fn: function (gulp, callback) {
    callback();
  },
};
