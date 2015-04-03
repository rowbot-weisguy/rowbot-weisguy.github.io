'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Watch Config
        watch: {
            files: ['sass/**/*', 'js/**/*'],
            options: {
                livereload: true
            },
            tasks: ['sass', 'autoprefixer', 'concat']
        },

        // Sass Config
        sass: {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev: {
                options: {
                    style: 'expanded',
                    lineComments: true
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    dest: '',
                    src: ['styles.scss'],
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                map: true
            },
            dev: {
                files: [{
                    src: 'styles.css',
                    dest: 'styles.css'
                }]
            }
        },

        // Script related tasks
        concat: {
            options: {
                separator: '\n\n\n'
            },
            dev: {
                src: ['js/**/*.js'],
                dest: 'app.js'
            }
        },

        connect: {
            server: {
                options: {
                    directory: '',
                    port: 4000,
                    livereload: true
                }
            }
        },

        // Open Config
        open: {
            site: {
                path: 'http://localhost:4000',
                app: 'Google Chrome'
            },
            editor: {
                path: './',
                app: 'Sublime Text 2'
            },
        }
    });

    // Register Tasks
    // Workon
    grunt.registerTask('workon', 'Start working on this project.', [
        'build',
        'connect',
        'open:site',
        'open:editor',
        'watch'
    ]);

    // Serve
    grunt.registerTask('serve', 'Serve the project.', [
        'build',
        'connect',
        'watch'
    ]);

    // Build
    grunt.registerTask('build', 'Build dev assets.', [
        'sass',
        'autoprefixer',
        'concat'
    ]);

};
