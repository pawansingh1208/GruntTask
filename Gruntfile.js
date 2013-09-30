'use strict';
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
var nconf = require('nconf');
var FTPClient = require('ftp');
var fs = require('fs');
module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        target_path: 'dump_<%= grunt.template.today("yyyy-mm-dd") %>_<%= grunt.template.today("HH-MM") %>',
        dump: {
            path: '<%=target_path%>'
        },

        fetch: {
            path: '<%=target_path%>'
        },

        restore: {
            path: '<%=target_path%>'
        },

        target: "dist_<%= grunt.template.today('yyyy-mm-dd') %>_<%= grunt.template.today('hh') %>",

        nodemon: {
            prod: {
                options: {
                    file: 'dist/latest/app/index.js',
                    env: {
                        PORT: '3000'
                    },
                    cwd: __dirname
                }
            },
            exec: {
                options: {
                    exec: 'less'
                }
            }
        },

        karma: {
            e2e: {
                configFile: 'karma-e2e.conf.js',
                singleRun: true
            },
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        'app/frontend/js/{,*/}*.js',
                        'app/frontend/css/{,*/}*.css',
                        'app/frontend/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        'app/frontend/font/*'
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: '\n/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/\n\n'
            },
            vendorJs: {
                src: [
                    "dist/<%=target%>/app/frontend/js/require.js",
                    "dist/<%=target%>/app/frontend/js/vendor/jquery-1.8.3.min.js",
                    "dist/<%=target%>/app/frontend/js/vendor/angular.min.1.1.5.js",
                    "dist/<%=target%>/app/frontend/js/vendor/angular-ui-router-0.0.1.min.js",
                    "dist/<%=target%>/app/frontend/js/jquery-ui-1.9.1.custom.min.js",
                    "dist/<%=target%>/app/frontend/js/vendor/bootstrap-2.3.1.min.js",
                    "dist/<%=target%>/app/frontend/js/ace-elements.min.js",
                    "dist/<%=target%>/app/frontend/js/ace.min.js"
                ],
                dest: 'dist/<%=target%>/app/frontend/js/vendor.js'
            },

            mcmsJs: {
                src: [
                    "dist/<%=target%>/app/frontend/js/manu.js",
                    "dist/<%=target%>/app/frontend/js/validation.js",
                    "dist/<%=target%>/app/frontend/js/mform.js",
                    "dist/<%=target%>/app/frontend/js/datatable.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms-sourcefunctions.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms-commandhandlers.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms-eventhandlers.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms-formatters.js",
                    "dist/<%=target%>/app/frontend/js/mcms/mcms-fieldsettings.js",
                    "dist/<%=target%>/app/frontend/js/mcms/ListEntitiesCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/AddEditEntityCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/AddWidgetCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/ListRecordsCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/ListSubRecordsCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/EditSubRecordCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/AddSubRecordCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/EditRecordCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/AddRecordCtrl.js",
                    "dist/<%=target%>/app/frontend/js/mcms/globalwidget.js",
                    "dist/<%=target%>/app/frontend/js/mcms/WidgetPreviewCtrl.js"
                ],
                dest: 'dist/<%=target%>/app/frontend/js/mcms.js'
            },

            mystoreJs: {
                src: [
                    "dist/<%=target%>/app/frontend/js/manu.js",
                    "dist/<%=target%>/app/frontend/js/validation.js",
                    "dist/<%=target%>/app/frontend/js/mform.js",
                    "dist/<%=target%>/app/frontend/js/datatable.js",
                    "dist/<%=target%>/app/frontend/js/store.js"
                ],
                dest: "dist/<%=target%>/app/frontend/js/mystore.js"
            },

            vendorcss: {
                src: [
                    "dist/<%=target%>/app/frontend/css/bootstrap.min.css",
                    "dist/<%=target%>/app/frontend/css/bootstrap-responsive.css",
                    "dist/<%=target%>/app/frontend/css/font-awesome.min.css",
                    "dist/<%=target%>/app/frontend/css/ace.min.css",
                    "dist/<%=target%>/app/frontend/css/ace-responsive.min.css",
                    "dist/<%=target%>/app/frontend/css/ace-skins.min.css",
                    "dist/<%=target%>/app/frontend/css/ace-ie.css"
                ],
                dest: 'dist/<%=target%>/app/frontend/css/vendor.css'
            },

            mystorecss: {
                src: [
                    "dist/<%=target%>/app/frontend/css/mcms.css"
                ],
                dest: 'dist/<%=target%>/app/frontend/css/mystore.css'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'dist/<%=target%>/app/frontend/css/vendor.min_<%=vernumb%>.css': ['dist/<%=target%>/app/frontend/css/vendor.css'],
                    'dist/<%=target%>/app/frontend/css/mystore.min_<%=number%>.css': ['dist/<%=target%>/app/frontend/css/mystore.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/<%=target%>/app/frontend/js/mcms.min_<%=number%>.js': ['dist/<%=target%>/app/frontend/js/mcms.js'],
                    'dist/<%=target%>/app/frontend/js/vendor.min_<%=number%>.js': ['dist/<%=target%>/app/frontend/js/vendor.js'],
                    'dist/<%=target%>/app/frontend/js/mystore.js':['dist/<%=target%>/app/frontend/js/mystore.js']
                }
            }
        },

        htmlrefs: {
            dist: {
                /** @required  - string including grunt glob variables */
                src: 'dist/<%=target%>/app/frontend/admin.html'
                /** @optional  - string directory name*/
            },
            options: {
                buildNumber: '<%=number%>',
                buildnew: '<%=vernumb%>'
            }
        },

        clone: {
            path: 'code'
        },

        symbolic: {
            path: '<%=target%>'
        },

        cdndump: {
            options: {
                user: 'mscdn',
                password: 'ms23x78'
            }
        },

        forever: {
            options: {
                index: 'dist/latest/app/index.js',
                logDir: 'logs'
            }
        },

        fetchdump: {
            options: {
                user: '<%=nconf.get()%>',
                password: '<%=nconf.get()%>'
            }
        } ,
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'code/', src: ['**'], dest: 'dist/<%=target%>/'} // includes files in path and its subdirs
                ]
            }
        },

        clean: {
            build: {
                src: ["path/to/dir/one", "path/to/dir/two"]
            }
        }
    });


    grunt.registerTask('deploy', 'number', function (n) {
        if (n != null) {
            var numb = n;
            grunt.config.set('vernumb', numb);
        }
        else {
            var numb = '1';
            grunt.config.set('vernumb', numb);
        }
        grunt.task.run('pull','clone','copy', 'concat', 'version', 'uglify', 'cssmin', 'htmlrefs', 'symbolic','forever:restart')
    });

    //latest commit id
    var _ = grunt.util._;
    var exec = require('child_process').exec;
    grunt.registerTask('version', 'get the latest commit id', function () {
        var options = this.options({
            id: false, // show emails in the output
            nomerges: false, // only works when sorting by commits
            output: './AUTHORS.txt' // the output file
        });
        var done = this.async();
        var _format = function (stdout) {
            var maxcol = 0;
            var pad = ' ';
            return stdout.replace(/^\s+|\s+$/g, '').split('\n').map(function (l) {
                var numl = l.match(/\d+/);
                if (numl) {
                    numl = numl[0].length;
                    maxcol = numl > maxcol ? numl : maxcol;
                    pad = '  ' + new Array(maxcol - numl + 1).join(' ');
                }
                return _.trim(l.replace(/\t+/, pad));
            });
        };
        // sort types
        var sortMethod = {
            alphabetical: 'sort',
            chronological: 'reverse'
        };
        // sort output
        var _sort = function (stdout) {
            if (sortMethod[options.sort]) {
                stdout = _.unique(stdout[sortMethod[options.sort]]());
            }
            return stdout;
        };
        // default command 'git'
        var cmd = 'git --git-dir=code/.git rev-parse --short HEAD';     //get the latest commit id in short version
        cmd += '';
        exec(cmd, function (error, stdout, stderr) {
            if (!error) {
                stdout = _format(stdout);
                stdout = _sort(stdout);
                var v = stdout.join('\n');
                console.log(v);
                grunt.config.set('number', v);
                done();
            } else {
                grunt.fail.warn(error);
            }
        })
    });

    grunt.registerTask('pull', 'git pull into main directory', function () {
        var exec = require('child_process').exec;
        var done = this.async();
        var cmd = 'git pull ';
        console.log('cmd==', cmd);
        exec(cmd,function (error, stdout, stderr) {
            if(!error){
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                done();
            }
            else {
                console.log(error);
            }
        })
    });


    //clone
    var _ = grunt.util._;
    var exec = require('child_process').exec;
    grunt.registerMultiTask('clone', 'Restore the latest commit file from a git repository', function (n) {
        var options = this.options({
            id: false, // show emails in the output
            nomerges: false, // only works when sorting by commits
            output: './AUTHORS.txt' // the output file
        });
        var done = this.async();
        var _format = function (stdout) {
            var maxcol = 0;
            var pad = ' ';
            return stdout.replace(/^\s+|\s+$/g, '').split('\n').map(function (l) {
                var numl = l.match(/\d+/);
                if (numl) {
                    numl = numl[0].length;
                    maxcol = numl > maxcol ? numl : maxcol;
                    pad = '  ' + new Array(maxcol - numl + 1).join(' ');
                }
                return _.trim(l.replace(/\t+/, pad));
            });
        };
        // sort types
        var sortMethod = {
            alphabetical: 'sort',
            chronological: 'reverse'
        };
        // sort output
        var _sort = function (stdout) {
            if (sortMethod[options.sort]) {
                stdout = _.unique(stdout[sortMethod[options.sort]]());
            }
            return stdout;
        };
        // default command 'git'
        var cmd = 'git';
        cmd += ' clone git@github.com:manusis/mystore.git ' + this.data;
        cmd += '';
        console.log(cmd);
        exec(cmd, function (error, stdout, stderr) {
            if (!error) {
                console.log('Git Clone Task Is Running...........');
                stdout = _format(stdout);
                stdout = _sort(stdout);
                var nme = stdout.join('\n');
                console.log(nme);
                done();
            } else {
                var cmd = 'cd code&&';
                cmd += 'git pull&&';
                cmd += 'cd ..';
                console.log(cmd);
                console.log('Git Pull Task Is Running...........');
                exec(cmd, function (error, stdout, stderr) {
                    if(!error){
                        stdout = _format(stdout);
                        stdout = _sort(stdout);
                        var nme = stdout.join('\n');
                        console.log(nme);
                        done();
                    }
                    else{
                        grunt.fail.warn(error);
                    }
                })
            }
//                grunt.fail.warn(error);
        })
    });

    //symbolic link
    var _ = grunt.util._;
    var exec = require('child_process').exec;
    grunt.registerMultiTask('symbolic', 'To create symbolic link', function () {
        var options = this.options({
            id: false, // show emails in the output
            nomerges: false, // only works when sorting by commits
            output: './AUTHORS.txt' // the output file
        });
        var done = this.async();
        var _format = function (stdout) {
            var maxcol = 0;
            var pad = ' ';
            return stdout.replace(/^\s+|\s+$/g, '').split('\n').map(function (l) {
                var numl = l.match(/\d+/);
                if (numl) {
                    numl = numl[0].length;
                    maxcol = numl > maxcol ? numl : maxcol;
                    pad = '  ' + new Array(maxcol - numl + 1).join(' ');
                }
                return _.trim(l.replace(/\t+/, pad));
            });
        };
        // sort types
        var sortMethod = {
            alphabetical: 'sort',
            chronological: 'reverse'
        };
        // sort output
        var _sort = function (stdout) {
            if (sortMethod[options.sort]) {
                stdout = _.unique(stdout[sortMethod[options.sort]]());
            }
            return stdout;
        };
        // default command 'git'
        var cmd = 'ln -s -fn ' + this.data + ' dist/latest';
        cmd += '';
        console.log(cmd);
        exec(cmd, function (error, stdout, stderr) {
            if (!error) {
                stdout = _format(stdout);
                stdout = _sort(stdout);
                var nme = stdout.join('\n');
                console.log(nme);
                done();
            } else {
                grunt.fail.warn(error);
            }
        })
    });

    //symbolic link for database dump
    var _ = grunt.util._;
    var exec = require('child_process').exec;
    grunt.registerMultiTask('symbolic_dump', 'To create symbolic link', function () {
        var options = this.options({
            id: false, // show emails in the output
            nomerges: false, // only works when sorting by commits
            output: './AUTHORS.txt' // the output file
        });

        var done = this.async();
        var _format = function (stdout) {
            var maxcol = 0;
            var pad = ' ';
            return stdout.replace(/^\s+|\s+$/g, '').split('\n').map(function (l) {
                var numl = l.match(/\d+/);
                if (numl) {
                    numl = numl[0].length;
                    maxcol = numl > maxcol ? numl : maxcol;
                    pad = '  ' + new Array(maxcol - numl + 1).join(' ');
                }
                return _.trim(l.replace(/\t+/, pad));
            });
        };
        // sort types
        var sortMethod = {
            alphabetical: 'sort',
            chronological: 'reverse'
        };
        // sort output
        var _sort = function (stdout) {
            if (sortMethod[options.sort]) {
                stdout = _.unique(stdout[sortMethod[options.sort]]());
            }
            return stdout;
        };
        var cmd = 'ln -s -fn ' + this.data + ' latest';
        cmd += '';
        console.log(cmd);
        exec(cmd, function (error, stdout, stderr) {
            if (!error) {
                stdout = _format(stdout);
                stdout = _sort(stdout);
                var nme = stdout.join('\n');
                done();
            } else {
                grunt.fail.warn(error);
            }
        })
    });

    /* grunt.registerMultiTask('dump', 'Dumps the entire database', function () {
     var myTerminal = require("child_process").exec,
     commandToBeExecuted = 'mongodump --host mystore.in --username rohit --password manusis --out /home/pawan/dump/' + this.data;
     myTerminal(commandToBeExecuted, function (error, stdout, stderr) {
     if(error)throw error;
     });
     });*/


 /*   grunt.registerMultiTask('dump', 'Dumps the entire database', function () {
        var exec = require('child_process').exec;
        var done = this.async();
        var cmd ='mongodump --host mystore.in --username rohit --password manusis --out /home/pawan/dump/' + this.data;
        console.log('cmd==', cmd);
        console.log('dump task is running');
        exec(cmd,function (error, stdout, stderr) {
            if(!error){
                console.log(stdout);
                console.log(stderr);
                done();
            }
            else {
                console.log(error);

            }
        });
    });*/

    grunt.registerMultiTask('dump', 'Dumps the entire database', function () {
        var myTerminal = require("child_process").exec,
            commandToBeExecuted = 'mongodump --host mystore.in --username rohit --password manusis --out /home/pawan/dumpnew/' + this.data;
        myTerminal(commandToBeExecuted, function (error, stdout, stderr) {
            if(error)throw error;
        });
    });

    grunt.registerMultiTask('fetchdump', 'Dumps the entire database', function () {
        var myTerminal = require("child_process").exec,
            commandToBeExecuted = 'sshpass -p manusis scp -r mystorebackup@mystore.in:latest /home/manusis/server_dump';
        myTerminal(commandToBeExecuted, function (error, stdout, stderr) {
        });
    });

    grunt.registerMultiTask('restore', 'restore entire database', function () {
        var myTerminal = require("child_process").exec,
            commandToBeExecuted = 'mongorestore --host mserver.local /home/manusis/server_dump/';
        myTerminal(commandToBeExecuted, function (error, stdout, stderr) {
        });
    });

    grunt.registerMultiTask('cdndump', 'Dumps the CDN', function () {
        var options = this.options({
            user: '<%=user%>',
            password: '<%=password%>'
        });
        var myTerminal = require("child_process").exec,
            commandToBeExecuted = 'sshpass -p ms23x78 rsync -chavzP --stats mscdn@mystore.in:/var/cdn /home/rohit';
        console.log(commandToBeExecuted);
        myTerminal(commandToBeExecuted, function (error, stdout, stderr) {
        });
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-htmlrefs');
    grunt.loadNpmTasks('grunt-forever');
};