module.exports = {
  deps: ['build:html', 'scripts:build'],
  fn: function (gulp, callback) {
    global.BROWSER_SYNC.reload();
    callback();
  },
};
