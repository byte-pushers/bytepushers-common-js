// Karma configuration
// Generated on Sat Dec 26 2015 20:30:53 GMT-0600 (CST)
var JASMINE = "node_modules/jasmine/lib/jasmine.js",
    JASMINE_ADAPTER = "node_modules/karma-jasmine/lib/index.js",
    REQUIRE = "node_modules/requirejs/bin/r.js",
    REQUIRE_ADAPTER = "node_modules/karma-requirejs/lib/index.js";

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      JASMINE,
      JASMINE_ADAPTER,
      REQUIRE,
      REQUIRE_ADAPTER,

      'src/test/javascript/test-main.js',
      {pattern: 'src/main/javascript/*.js', included: false},
      {pattern: 'src/test/javascript/*.js', included: false}
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
