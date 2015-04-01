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
            tasks: ['concat', 'sass', 'autoprefixer']
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
                    livereload: true,
                    keepalive: true,
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
        },

        // Rev Config
        rev: {
            dist: {
                files: {
                    src: [
                        'dist/assets/scripts/**/*.js',
                        'dist/assets/styles/**/*.css',
                        'dist/assets/images/**/*.{png,jpg,jpeg,gif,webp}',
                        'dist/assets/styles/fonts/**/*.*'
                    ]
                }
            }
        },
    });

    // Register Tasks
    // Workon
    grunt.registerTask('workon', 'Start working on this project.', [
        'sass:dev',
        'open:site',
        'open:editor',
        'watch'
    ]);

    // Serve
    grunt.registerTask('serve', 'Serve the project.', [
        'connect',
        'watch'
    ]);

    // Build
    grunt.registerTask('build', 'Build production ready assets and views.', [
        'concat',
        'rev',
    ]);

};
