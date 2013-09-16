module.exports = function (grunt) {
    grunt.initConfig({

        karma: {
            /*e2e: {
                configFile: 'karma-e2e.conf.js',
                singleRun: true
            },*/
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-karma:e2e');
    grunt.loadNpmTasks('grunt-karmavvvvv');

};
