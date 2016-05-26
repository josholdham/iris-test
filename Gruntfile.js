module.exports = function (grunt) {
    grunt.initConfig({
        sass       : {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files  : {
                    'assets/css/main.css': 'assets/scss/main.scss',
                    'assets/css/main_v3.css': 'assets/scss/main_v3.scss'
                }
            }
        },
        watch      : {
            scss       : {
                options        : {
                    livereload: true
                },
                files          : [
                    'assets/scss/**/*.scss'
                ],
                tasks          : [
                    'sass'
                ],
                'debounceDelay': 750
            }
        },
        concurrent : {
            dev: {
                tasks  : ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon    : {
            dev: {
                script : 'app.js',
                options: {
                    ignore: [
                        'node_modules/**'
                    ],
                    env   : {
                        PORT: '8080'
                    },
                    ext   : 'js,html,scss,tmpl'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['sass', 'watch']);
};
