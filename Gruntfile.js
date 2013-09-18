module.exports = function (grunt) {
    grunt.initConfig({

        karma: {
            e2e: {
                configFile: 'karma-e2e.conf.js',
                singleRun: true
            },
            unit: {
                configFile: 'karma-e2e.conf.js',
                singleRun: true
            }
        }

    });
    grunt.loadNpmTasks('grunt-karma');
};
