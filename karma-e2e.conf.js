// Karma E2E configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
    'app/frontend/js/angular-scenario.js',
    ANGULAR_SCENARIO_ADAPTER,
//    'app/test/e2e/admin/func.js',
    'app/test/e2e/admin/login_test.js',
//'app/test/e2e/admin/productscenario.js',
//'app/test/e2e/admin/layout.js',
    'app/test/e2e/admin/navigation.js',
//'app/test/e2e/tagtest.js',
// 'app/test/e2e/admin/pages.js',

//    'app/test/e2e/**/*.js',
//    'app/test/e2e/entity.js',
    'app/test/e2e/window-dialog-command.js',
    'app/frontend/js/jquery-1.9.1.js'
];
// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress'];

preprocessors = {
    'app/test/e2e/admin/**.js': 'coverage'
};
reporters = ['coverage'];
coverageReporter = {
    type : 'html',
    dir : 'coverage/'
}
// web server port
port = 3000;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;
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
    '/': 'http://testcases.mystore.in'
};
urlRoot = '/__e2e/';