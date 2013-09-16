// Karma E2E configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
 'angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
//    'app/test/e2e/admin/window-dialog-command.js',
//    'app/test/e2e/admin/entity_func.js',
////    'app/test/e2e/admin/entity_test.js',
//    'app/test/e2e/admin/category_test.js',
////    'app/test/e2e/admin/product_test.js',
        'test/scenario.js',
//    'app/test/e2e/**/*.js',
   'jquery-1.9.1.js'
];

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress'];

// web server port
port = 3000;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 35000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

proxies =  {
    //  '/': 'http://localhost:9000/angular-phonecat/' // Keep this in sync with localhost port in Gruntfile.
    '/': 'http://testcases.mystore.manu:3000/'
};
urlRoot = '/__e2e/';